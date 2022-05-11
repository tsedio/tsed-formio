import { SubmissionsTable } from "@tsed/react-formio";
import { Route, Switch } from "react-router";
import { UseSubmissionProps } from "../hooks/useSubmission.hook";
import { useSubmissions } from "../hooks/useSubmissions.hook";
import { SubmissionView } from "./submission.view";

export function SubmissionsComponent({
  data,
  parameters,
  form,
  setParameters,
  dispatchOperation,
  i18n
}: ReturnType<typeof useSubmissions>) {
  return (
    <div className={"-m-px"}>
      <SubmissionsTable
        i18n={i18n}
        data={data}
        form={form as any}
        {...parameters}
        onClick={dispatchOperation}
        onChange={setParameters}
        operations={[
          {
            action: "edit",
            alias: "row",
            icon: "edit",
            title: "Edit"
          },
          {
            action: "delete",
            buttonType: "danger",
            icon: "trash"
          }
        ]}
      />
    </div>
  );
}

export function SubmissionsView(props: UseSubmissionProps) {
  const Component = props.SubmissionsComponent || SubmissionsComponent;
  const submissions = useSubmissions(props);

  return (
    <Switch>
      <Route
        exact={true}
        path={[
          submissions.basePath,
          ":submissionId",
          ":submissionAction?"
        ].join("/")}
      >
        <SubmissionView {...submissions} />
      </Route>
      <Route path={submissions.basePath}>
        <Component {...submissions} />
      </Route>
    </Switch>
  );
}
