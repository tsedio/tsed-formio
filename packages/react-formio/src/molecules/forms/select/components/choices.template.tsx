import { renderToString } from "react-dom/server";

type StrToEl = (template: string) => HTMLElement;
type EscapeForTemplate = (allowHTML: boolean, value: unknown) => string;
type GetClassNames = (className: string | string[]) => string[];

/**
 * Choices.js v11 template callback.
 *
 * Why this file exists:
 * - We need to keep Choices expected DOM/data attributes (`data-choice`, `data-id`,
 *   `data-value`, `data-choice-selectable`, etc.) so keyboard/mouse interactions keep working.
 * - We optionally support a React custom option renderer via `customProperties.template`.
 *
 * Notes:
 * - The callback signature changed in Choices v11 and now receives:
 *   `strToEl`, `escapeForTemplate`, `getClassNames`.
 * - `this` is the current Choices instance, so we can read `this.config`.
 */
export function callbackOnCreateTemplates(
  this: { config: { itemSelectText: string; allowHTML: boolean } },
  strToEl: StrToEl,
  escapeForTemplate: EscapeForTemplate,
  getClassNames: GetClassNames
) {
  const itemSelectText = this.config.itemSelectText;

  return {
    /**
     * Custom renderer for each dropdown option ("choice" in Choices terminology).
     * Keep all required attributes when editing this template, otherwise
     * selection/highlight/accessibility behavior can break.
     */
    choice: ({ classNames }: { classNames: Record<string, string | string[]> }, data: any) => {
      const Template = data.customProperties?.template;
      const classes = [
        ...getClassNames(classNames.item),
        ...getClassNames(classNames.itemChoice),
        ...getClassNames(data.disabled ? classNames.itemDisabled : classNames.itemSelectable)
      ].join(" ");

      const label = Template
        ? renderToString(<Template {...data} data={{ ...data, ...data?.customProperties }} />)
        : escapeForTemplate(this.config.allowHTML, data.label);

      // Keep this markup aligned with Choices defaults: attributes below are required by the library.
      return strToEl(
        `<div class="${classes}" aria-label="${escapeForTemplate(true, data.label)}"
          data-select-text="${escapeForTemplate(true, itemSelectText)}"
          data-choice
          ${data.disabled ? 'data-choice-disabled aria-disabled="true"' : "data-choice-selectable"}
          data-id="${data.id}"
          data-value="${escapeForTemplate(true, data.value)}"
          ${data.groupId > 0 ? 'role="treeitem"' : 'role="option"'}>
          ${label}
        </div>`
      );
    }
  };
}
