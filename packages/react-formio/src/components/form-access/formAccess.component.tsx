import PropTypes from "prop-types";
import React, {
  PropsWithChildren,
  ReactElement,
  useCallback,
  useMemo,
  useState
} from "react";
import { FormOptions, FormSchema, Submission } from "../../interfaces";
import { Card } from "../card/card.component";
import { Form } from "../form/form.component";
import {
  AccessRoles,
  dataAccessToSubmissions,
  FormAccessSchema,
  getFormAccess,
  SubmissionAccess,
  submissionsToDataAccess,
  updateSubmissions
} from "./formAccess.utils";

export interface FormAccessProps {
  form: Partial<FormSchema>;
  roles: any;
  onSubmit?: Function;
  options?: FormOptions;
}

function useFormAccess({
  form: formDefinition,
  roles,
  onSubmit,
  options
}: FormAccessProps) {
  // eslint-disable-next-line no-undef
  const form = useMemo(() => getFormAccess(roles), [roles]);

  const [submissions, setSubmissions] = useState(() =>
    dataAccessToSubmissions(formDefinition, form)
  );

  const onChange = useCallback(
    (type: string, submission: Submission<AccessRoles>) => {
      updateSubmissions(type, submission, submissions, setSubmissions);
    },
    [submissions]
  );

  return {
    options,
    form,
    type: formDefinition.type,
    submissions,
    onChange,
    onSubmit: () => {
      onSubmit(submissionsToDataAccess(formDefinition, submissions));
    }
  };
}

interface NamedFormAccessProps {
  name: "access" | "submissionAccess";
  form: FormAccessSchema;
  submissions: SubmissionAccess;
  options: any;
  onSubmit: any;

  onChange(
    name: "access" | "submissionAccess",
    submission: Submission<AccessRoles>
  ): void;
}

function NamedFormAccess({
  name,
  form,
  submissions,
  options,
  onChange,
  onSubmit,
  children
}: PropsWithChildren<NamedFormAccessProps>) {
  return (
    <>
      <Form
        form={form[name]}
        submission={submissions[name]}
        onChange={(submission: Submission<AccessRoles>) => {
          onChange(name, submission);
        }}
        options={options}
      />

      <button className={"mt-5 btn btn-primary"} onClick={onSubmit}>
        Save access
      </button>

      {children}

      <div className={"alert alert-warning mt-5"}>
        Elevated permissions allow users to access and modify other user's
        entities. Assign with caution.
      </div>
    </>
  );
}

export function FormAccess(
  props: PropsWithChildren<FormAccessProps>
): ReactElement {
  const {
    type,
    form,
    submissions,
    options,
    onChange,
    onSubmit
  } = useFormAccess(props);

  return (
    <div>
      {props.children}
      <div className={"flex mb-5"}>
        <Card label={"Manage submission access"} className={"flex-1"}>
          <NamedFormAccess
            name={"submissionAccess"}
            form={form}
            submissions={submissions}
            onChange={onChange}
            onSubmit={onSubmit}
            options={options}
          >
            {props.children}
          </NamedFormAccess>
        </Card>
        <div className={"w-1/4 pl-4"}>
          <Card label={"About Submission Data Permissions"}>
            <p>
              Submission Data Permissions allow you to control who can create,
              view, and modify form submission data.
            </p>

            <ul className={"mt-5 pl-7 list-disc"}>
              <li className={"pb-2"}>
                <strong>Own Permissions</strong> - These permissions apply if
                the user is the original creator of the submission data and is
                listed as the owner of the submission in submission.owner. This
                allows users to create and edit their own submission data
                without seeing other user's data.
              </li>
              <li>
                <strong>All Permissions</strong> - These permissions apply to
                all submission data regardless of who owns it.
              </li>
            </ul>
          </Card>
        </div>
      </div>
      <div className={"flex mb-5"}>
        <Card label={`Manage ${type} definition access`} className={"flex-1"}>
          <NamedFormAccess
            name={"access"}
            form={form}
            submissions={submissions}
            onChange={onChange}
            onSubmit={onSubmit}
            options={options}
          >
            {props.children}
          </NamedFormAccess>
        </Card>

        <div className={"w-1/4 pl-4"}>
          <Card label={"About Form Definition Access"}>
            <p>
              These permissions allow you to give access to a single form's JSON
              definition so they can render the form.
            </p>

            <p>
              Typically you will want to allow all of your roles to be able to
              Read the form definition.
            </p>

            <p>
              Each form also has an owner at <strong>form.owner</strong> which
              is the user who created the form. In some applications users are
              allowed to create their own forms. In those cases it is helpful to
              have Owner based permissions as well.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

FormAccess.propTypes = {
  type: PropTypes.string.isRequired,
  form: PropTypes.object,
  roles: PropTypes.any,
  children: PropTypes.any,
  options: PropTypes.any,
  onSubmit: PropTypes.func
};
