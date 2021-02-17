import PropTypes from "prop-types";
import React, { ReactElement } from "react";
import { FormOptions, FormSchema } from "../../interfaces";
import { Card } from "../card/card.component";
import Form from "../form/form.component";
import {
  formAccessToSubmission,
  getAccessPermissionForm,
  getSubmissionPermissionForm,
  mapRoles,
  mapSubmissionAccess
} from "./formAccess.schema";

export interface FormAccessProps {
  form: Partial<FormSchema>;
  roles: any;
  children: ReactElement;
  onSubmit?: Function;
  options?: FormOptions;
}

export function FormAccess({
  form,
  roles,
  children,
  onSubmit,
  options
}: FormAccessProps): ReactElement {
  return (
    <div>
      {children}

      <div className={"flex mb-5"}>
        <Card label={"Manage submission access"} className={"flex-1"}>
          <Form
            form={getSubmissionPermissionForm({
              choices: mapRoles(roles)
            })}
            submission={{ data: formAccessToSubmission(form.submissionAccess) }}
            onSubmit={(data: any) => {
              onSubmit(mapSubmissionAccess("submissionAccess", form, data));
            }}
            options={options}
          />

          {children}

          <div className={"alert alert-warning mt-5"}>
            Elevated permissions allow users to access and modify other user's
            entities. Assign with caution.
          </div>
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
        <Card
          label={`Manage ${form.type} definition access`}
          className={"flex-1"}
        >
          <Form
            form={getAccessPermissionForm({
              choices: mapRoles(roles)
            })}
            submission={{ data: formAccessToSubmission(form.access) }}
            onSubmit={(data: any) => {
              onSubmit(mapSubmissionAccess("access", form, data));
            }}
            options={{ ...{ template: "bootstrap3", iconset: "fa" } }}
          />

          {children}

          <div className={"alert alert-warning mt-5"}>
            Elevated permissions allow users to access and modify other user's
            entities. Assign with caution.
          </div>
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
