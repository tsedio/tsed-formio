import { SubmissionsTable } from "@tsed/react-formio";
import React from "react";
import { Route, Switch } from "react-router";
import { UseSubmissionProps } from "../hooks/useSubmission.hook";
import { useSubmissions } from "../hooks/useSubmissions.hook";
import { SubmissionView } from "./submission.view";

export function SubmissionsComponent({
  data,
  parameters,
  form,
  dispatchOperation
}: ReturnType<typeof useSubmissions>) {
  return (
    <div className={"-m-px"}>
      <SubmissionsTable
        data={data}
        form={form as any}
        {...parameters}
        onClick={dispatchOperation}
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
  const submissions = useSubmissions(props);
  const submissionView = <SubmissionView {...submissions} />;

  return (
    <Switch>
      <Route
        exact={true}
        path={[props.basePath, ":submissionId", ":submissionAction?"].join("/")}
      >
        {submissionView}
      </Route>
      <Route path={props.basePath}>
        <SubmissionsComponent {...submissions} />
      </Route>
    </Switch>
  );
}
