import type { Form as FormType } from "@formio/core";
import classnames from "classnames";
import moment from "moment";
import { CellProps } from "react-table";

import { iconClass } from "../../../utils/iconClass";
import { stopPropagationWrapper } from "../../../utils/stopPropagationWrapper";

export function FormsCell(props: CellProps<FormType> & { icon: string; i18n: (f: string) => string }) {
  const {
    icon = "server",
    row: { original: form }
  } = props;

  return (
    <div className={"p-1"}>
      <h4 className={"text-primary text-lg flex items-center"}>
        <i className={classnames(iconClass(undefined, icon), "mr-1")} />
        {form.title}
      </h4>

      <ul className='reset-list text-gray-500'>
        <li className={"text-sm"}>Name: {form.name || form.machineName}</li>
        <li className='mt-5'>
          <span className='badge bg-light mr-1'>
            <i className={classnames(iconClass(undefined, "history"), "mr-1")} />
            <span>Updated {moment(form.modified).fromNow()}</span>
          </span>

          {(form.tags || []).map((tag, index) => (
            <button
              key={index}
              className='badge badge-hover bg-secondary mr-1'
              onClick={stopPropagationWrapper(() => {
                props.setFilter("tags", tag);
                props.gotoPage(0);
              })}
            >
              <i className={classnames(iconClass(undefined, "tags"), "mr-1")} />
              {tag}
            </button>
          ))}
        </li>
      </ul>
    </div>
  );
}
