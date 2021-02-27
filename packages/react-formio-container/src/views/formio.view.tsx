import noop from "lodash/noop";
import React from "react";
import { Route, Switch, useParams } from "react-router";
import { FormView } from "./form.view";
import { FormsView } from "./forms.view";
import { FormioViewOptions } from "../interfaces/FormioViewOptions";

export function FormioView({
  basePath,
  operations,
  onError = noop,
  onSuccess = noop
}: FormioViewOptions) {
  const { formType } = useParams<{
    formType: string;
  }>();

  const options = {
    basePath,
    onError,
    onSuccess,
    operations: {
      create: true,
      edit: true,
      access: true,
      actions: true,
      preview: true,
      submissions: true,
      exports: true,
      delete: true,
      ...operations
    }
  };

  return (
    <Switch>
      <Route path={basePath} exact={true}>
        <FormsView {...options} formType={formType} />
      </Route>
      <Route path={[basePath, ":formId", ":formAction?"].join("/")}>
        <FormView {...options} formType={formType} />
      </Route>
    </Switch>
  );
}
