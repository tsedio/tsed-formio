import React from "react";
import { Route, Switch, useParams } from "react-router";
import { FormioContainerOptions } from "./interfaces/FormioContainerOptions";
import { FormView } from "./views/form.view";
import { FormsView } from "./views/forms.view";

export function FormioContainer(props: FormioContainerOptions) {
  const { formType = props.formType, formId = props.formId } = useParams<{
    formType?: string;
    formId?: string;
  }>();

  const options = {
    className: "border-1 border-gray-light bg-white shadow-lg rounded-sm",
    i18n: (f: string) => f,
    ...props,
    formType,
    formId,
    operationsSettings: {
      create: true,
      edit: true,
      access: true,
      actions: true,
      preview: true,
      submissions: true,
      exports: true,
      delete: true,
      ...props.operationsSettings
    }
  };

  return (
    <Switch>
      <Route path={options.basePath} exact={true}>
        <FormsView {...options as any} />
      </Route>
      <Route path={[options.basePath, ":formId", ":formAction?"].join("/")}>
        <FormView {...options as any} />
      </Route>
    </Switch>
  );
}
