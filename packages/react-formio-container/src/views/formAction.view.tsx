import { FormAction, iconClass, RemoveModal, useTooltip } from "@tsed/react-formio";
import classnames from "classnames";
import React from "react";
import { useParams } from "react-router";
import { UseActionsProps } from "../hooks";
import { useAction } from "../hooks/useAction.hook";
import { ucfirst } from "../utils/ucfirst";

export function FormActionComponent(props: ReturnType<typeof useAction>) {
  const { formAction, actionAction, form, action, actionInfo, gotoEdit, gotoRemove, removeAction, saveAction, i18n } = props;

  const RemoveModalComponent = props.RemoveModalComponent || RemoveModal;

  const removeRef = useTooltip({
    trigger: "hover",
    placement: "top",
    title: i18n("Remove")
  });

  return (
    <div className={"p-4"}>
      <h2 className={"border-b-1 border-gray-300 text-lg mb-4 pb-1 flex items-center"}>
        <div className={"flex items-center flex-1"}>
          {ucfirst(form.type)} {form.title}{" "}
          <i className={classnames(iconClass(undefined, "chevron-right"), "text-md text-secondary mx-1")} />{" "}
          <span className={"text-gray-500"}>
            {ucfirst(actionAction)} {i18n("action")}
          </span>
        </div>
        <div>
          <button onClick={gotoRemove} className={classnames("btn btn-danger btn-sm")} ref={removeRef}>
            <i className={iconClass(undefined, "trash")} />
          </button>
        </div>
      </h2>
      <FormAction actionInfo={actionInfo} submission={action} onSubmit={saveAction} options={{}} />
      {actionAction === "delete" && (
        <RemoveModalComponent
          i18n={i18n}
          show={true}
          valueToCompare={form.name}
          itemType={formAction}
          onSubmit={removeAction}
          onClose={gotoEdit}
        />
      )}
    </div>
  );
}

export function FormActionView(props: UseActionsProps) {
  const Component = props.FormActionComponent || FormActionComponent;
  const params = useParams<{
    actionId: string;
    actionAction: string;
  }>();

  const action = useAction(
    Object.assign({} as any, props, {
      actionId: params.actionId,
      actionAction: params.actionAction
    })
  );

  return <Component {...action} />;
}
