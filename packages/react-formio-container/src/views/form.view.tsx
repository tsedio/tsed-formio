import {Alert, Loader, RemoveModal, Tabs} from "@tsed/react-formio";
import React from "react";
import {Route, Switch, useParams} from "react-router";
import {FormEditView} from "./formEdit.view";
import {useForm} from "../hooks/useForm.hook";
import {UseFormsProps} from "../hooks/useForms.hook";

function FormComponent({className, ...props}: ReturnType<typeof useForm>) {
  const {
    basePath,
    formId,
    formAction,
    error,
    removeForm,
    currentRoute,
    setCurrentRoute,
    routes,
    gotoEdit,
    i18n,
    isActive
  } = props;

  const RemoveModalComponent = props.RemoveModalComponent || RemoveModal;
  const LoaderComponent = props.LoaderComponent || Loader;

  return (
    <div>
      <Alert error={error}/>
      <div className={className}>
        <Tabs i18n={i18n} current={currentRoute} items={routes} className="" onClick={setCurrentRoute}>
          <Switch>
            <Route path={[basePath, "create"].join("/")} exact={true}>
              <FormEditView {...props} formAction={"create"} basePath={[basePath, formId, formAction].join("/")}/>
            </Route>
            {routes
              .filter((item) => item.component)
              .map(({action, exact, component: Component}: any, index: number) => {
                return (
                  <Route key={index} path={[basePath, formId, action].join("/")} exact={exact}>
                    <Component {...props} formAction={action} basePath={[basePath, formId, action].join("/")}/>
                  </Route>
                );
              })}
            <Route path={[basePath, formId, "delete"].join("/")} exact={true}>
              <FormEditView {...props} basePath={[basePath, formId, formAction].join("/")}/>
              <RemoveModalComponent
                i18n={i18n}
                show={true}
                valueToCompare={props.form.name || ""}
                itemType={props.formType}
                onSubmit={removeForm}
                onClose={gotoEdit}
              />
            </Route>
            <Route path={[basePath, formId].join("/")} exact={true}>
              <FormEditView {...props} basePath={[basePath, formId, formAction].join("/")}/>
            </Route>
          </Switch>
          <LoaderComponent isActive={isActive}/>
        </Tabs>
      </div>
    </div>
  );
}

export function FormView(props: UseFormsProps) {
  const Component = props.FormComponent || FormComponent;
  const {formId = props.formId, formAction} = useParams<{
    formType: string;
    formId: string;
    formAction: string;
  }>();

  return (
    <Component
      {...useForm({
        ...props,
        formId: formId!,
        formAction
      })}
    />
  );
}
