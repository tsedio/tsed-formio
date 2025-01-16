import classnames from "classnames";
import { renderToString } from "react-dom/server";

const ChoiceTemplate = ({ classNames, data, itemSelectText }: { classNames: any; data: any; itemSelectText: string }) => {
  const Template = data.customProperties?.template;

  return (
    <div
      className={classnames(classNames.item, classNames.itemChoice, data.disabled ? classNames.itemDisabled : classNames.itemSelectable)}
      aria-label={data.label}
      data-select-text={itemSelectText}
      data-choice=''
      data-id={data.id}
      data-value={data.value}
      {...(data.disabled
        ? {
            "data-choice-disabled": "",
            "aria-disabled": true
          }
        : {
            "data-choice-selectable": ""
          })}
      {...(data.groupId > 0 ? { role: "treeitem" } : { role: "option" })}
    >
      {Template ? <Template {...data} data={{ ...data, ...data?.customProperties }} /> : data.label}
    </div>
  );
};

export function callbackOnCreateTemplates(this: { config: { itemSelectText: string } }, strToEl: (template: string) => any) {
  const itemSelectText = this.config.itemSelectText;

  return {
    choice: (...args: any) => {
      return strToEl(renderToString(<ChoiceTemplate itemSelectText={itemSelectText} classNames={args[0]} data={args[1]} />));
    }
  };
}
