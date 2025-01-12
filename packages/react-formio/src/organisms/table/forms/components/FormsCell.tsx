import { CellContext } from "@tanstack/react-table";
import cx from "classnames";
import moment from "moment";

import type { FormType } from "../../../../interfaces/index.js";
import { registerComponent } from "../../../../registries/components.js";
import { iconClass } from "../../../../utils/iconClass";
import { stopPropagationWrapper } from "../../../../utils/stopPropagationWrapper";

export function FormsCell(
  props: CellContext<FormType, any> & {
    i18n: (i18n: string) => string;
  }
) {
  const {
    row: { original: form }
  } = props;

  return (
    <div className={"p-1"}>
      <h4 className={"text-primary text-lg flex space-x-2 items-center"}>
        <i className={cx(iconClass(undefined, "server"), "text-secondary")} />
        <span>{form.title}</span>
      </h4>

      <ul className='reset-list text-gray-500'>
        <li className={"text-sm"}>Name: {form.name || form.machineName}</li>
        <li className='mt-5 flex space-x-1'>
          <span className='badge bg-light flex space-x-1'>
            <i className={iconClass(undefined, "history")} />
            <span>Updated {moment(form.modified).fromNow()}</span>
          </span>

          {(form.tags || []).map((tag, index) => (
            <button
              key={index}
              className='badge badge-hover bg-secondary flex space-x-1'
              onClick={stopPropagationWrapper(() => {
                // props.setFilter("tags", tag);
                // props.gotoPage(0);
              })}
            >
              <i className={iconClass(undefined, "tags")} />
              <span>{tag}</span>
            </button>
          ))}
        </li>
      </ul>
    </div>
  );
}

registerComponent("FormsCell", FormsCell);
