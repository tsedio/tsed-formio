import { ActionsTable } from "@tsed/react-formio";
import React from "react";
import { Route, Switch } from "react-router";

import { useActions, UseActionsProps } from "../hooks/useActions.hook";
import { FormActionView } from "./formAction.view";

export function FormActionsComponent({
  actions,
  availableActions,
  addAction,
  dispatchOperation,
  i18n = (f) => f
}: ReturnType<typeof useActions>) {
  return (
    <div className={"-m-px"}>
      <ActionsTable
        operations={[
          {
            action: "edit",
            alias: "row",
            icon: "edit",
            title: i18n("Edit")
          },
          {
            action: "delete",
            buttonType: "danger",
            icon: "trash"
          }
        ]}
        availableActions={availableActions}
        data={actions}
        onAddAction={addAction}
        onClick={dispatchOperation}
      />
    </div>
  );
}

export function FormActionsView(props: UseActionsProps) {
  const Component = props.FormActionsComponent || FormActionsComponent;
  const actions = useActions(props);

  return (
    <Switch>
      <Route exact={true} path={[actions.basePath, ":actionId", ":actionAction"].join("/")}>
        <FormActionView {...actions} />
      </Route>
      <Route path={actions.basePath}>
        <Component {...actions} />
      </Route>
    </Switch>
  );
}
