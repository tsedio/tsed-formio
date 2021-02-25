import { ActionsTable } from "@tsed/react-formio";
import React from "react";
import { Route, Switch } from "react-router";
import { useActions, UseActionsProps } from "../hooks/useActions.hook";

export function FormActionsComponent({
  actions,
  availableActions,
  addAction,
  dispatchOperation
}: ReturnType<typeof useActions>) {
  return (
    <div className={"-m-px"}>
      <ActionsTable
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
        availableActions={availableActions}
        data={actions}
        onAddAction={addAction}
        onClick={dispatchOperation}
      />
    </div>
  );
}

export function FormActionsView(props: UseActionsProps) {
  const actions = useActions(props);

  return (
    <Switch>
      <Route
        exact={true}
        path={[actions.basePath, ":actionId", "edit"].join("/")}
      >
        Hello edit
      </Route>
      <Route
        exact={true}
        path={[actions.basePath, ":actionId", "add"].join("/")}
      >
        Hello add
      </Route>
      <Route path={actions.basePath}>
        <FormActionsComponent {...actions} />
      </Route>
    </Switch>
  );
}
