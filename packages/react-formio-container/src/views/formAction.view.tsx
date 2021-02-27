import {
  FormAction,
  iconClass,
  useTooltip,
  RemoveModal
} from "@tsed/react-formio";
import classnames from "classnames";
import startCase from "lodash/startCase";
import toLower from "lodash/toLower";
import React from "react";
import { useParams } from "react-router";
import { useAction, UseActionProps } from "../hooks/useAction.hook";

const ucfirst = (t: string) => startCase(toLower(t));

export function FormActionView(
  props: Omit<UseActionProps, "actionId" | "actionAction">
) {
  const params = useParams<{
    actionId: string;
    actionAction: string;
  }>();

  const {
    formAction,
    actionAction,
    form,
    action,
    actionInfo,
    gotoEdit,
    gotoRemove,
    removeAction,
    saveAction
  } = useAction(
    Object.assign({} as any, props, {
      actionId: params.actionId,
      actionAction: params.actionAction
    })
  );

  const removeRef = useTooltip({
    trigger: "hover",
    placement: "top",
    title: "Remove"
  });

  return (
    <div className={"p-4"}>
      <h2
        className={
          "border-b-1 border-gray-300 text-lg mb-4 pb-1 flex items-center"
        }
      >
        <div className={"flex items-center flex-1"}>
          {ucfirst(form.type)} {form.title}{" "}
          <i
            className={classnames(
              iconClass(undefined, "chevron-right"),
              "text-md text-secondary mx-1"
            )}
          />{" "}
          <span className={"text-gray-500"}>
            {ucfirst(actionAction)} action
          </span>
        </div>
        <div>
          <button
            onClick={gotoRemove}
            className={classnames("btn btn-danger btn-sm")}
            ref={removeRef}
          >
            <i className={iconClass(undefined, "trash")} />
          </button>
        </div>
      </h2>
      <FormAction
        actionInfo={actionInfo}
        submission={action}
        onSubmit={saveAction}
        options={{}}
      />
      {actionAction === "delete" && (
        <RemoveModal
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
