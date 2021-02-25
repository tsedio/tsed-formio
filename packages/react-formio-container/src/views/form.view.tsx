import { Alert, Tabs } from "@tsed/react-formio";
import React from "react";
import { Route, Switch, useParams } from "react-router";
import { FormEditView } from "./formEdit.view";
import { useForm } from "../hooks/useForm.hook";
import { UseFormsProps } from "../hooks/useForms.hook";
import { RemoveModal } from "@tsed/react-formio/dist/src/components/modal/removeModal";

function FormComponent(props: ReturnType<typeof useForm>) {
  const {
    basePath,
    formId,
    formAction,
    error,
    removeForm,
    currentRoute,
    setCurrentRoute,
    routes,
    goEdit
  } = props;

  return (
    <div>
      <Alert error={error} />
      <div className='border-1 border-gray-light bg-white shadow-lg rounded-xs position-relative'>
        <Tabs
          current={currentRoute}
          items={routes}
          className=''
          onClick={setCurrentRoute}
        >
          <Switch>
            <Route path={[basePath, "create"].join("/")} exact={true}>
              <FormEditView
                {...props}
                formAction={"create"}
                basePath={[basePath, formId, formAction].join("/")}
              />
            </Route>
            {routes
              .filter((item) => item.component)
              .map(({ action, exact, component: Component }, index: number) => {
                return (
                  <Route
                    key={index}
                    path={[basePath, formId, action].join("/")}
                    exact={exact}
                  >
                    <Component
                      {...props}
                      formAction={action}
                      basePath={[basePath, formId, action].join("/")}
                    />
                  </Route>
                );
              })}
            <Route path={[basePath, formId, "delete"].join("/")} exact={true}>
              <FormEditView
                {...props}
                basePath={[basePath, formId, formAction].join("/")}
              />
              <RemoveModal
                show={true}
                valueToCompare={props.form.name}
                itemType={props.formType}
                onSubmit={removeForm}
                onClose={goEdit}
              />
            </Route>
            <Route path={[basePath, formId].join("/")} exact={true}>
              <FormEditView
                {...props}
                basePath={[basePath, formId, formAction].join("/")}
              />
            </Route>
          </Switch>
        </Tabs>
      </div>
    </div>
  );
}

export function FormView(props: UseFormsProps) {
  const { formId, formAction } = useParams<{
    formType: string;
    formId: string;
    formAction: string;
  }>();

  return (
    <FormComponent
      {...useForm({
        ...props,
        formId,
        formAction
      })}
    />
  );
}
