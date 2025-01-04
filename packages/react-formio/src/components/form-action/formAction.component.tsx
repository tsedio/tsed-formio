import FormioUtils from "formiojs/utils";
import { PropsWithChildren, ReactElement } from "react";

import { ActionDefaultsType, ActionType, FormOptions, SubmissionType } from "../../interfaces";
import { Form } from "../form/form.component";

function mapData(options: any, defaults: ActionDefaultsType): any {
  return {
    ...defaults,
    ...options
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function mapSettingsForm({ action, ...settingsForm }: any): any {
  FormioUtils.eachComponent(settingsForm.components, (component: any) => {
    const resourceExclude = "";

    if (component.type === "resourcefields") {
      component.type = "select";
      component.label = component.title;
      component.dataSrc = "url";
      component.data = {
        url: `${component.basePath}?type=resource${resourceExclude}`
      };
      component.valueProperty = "_id";
      component.template = "<span>{{ item.title }}</span>";
      component.persistent = true;
    }
  });

  return settingsForm;
}

export interface FormActionProps {
  actionInfo: Partial<ActionType>;
  submission?: Partial<SubmissionType>;
  onSubmit?: (submission: SubmissionType<ActionType>) => void;
  options: FormOptions;
}

export function FormAction({ actionInfo, children, onSubmit, options, ...props }: PropsWithChildren<FormActionProps>): ReactElement {
  const { form, submission } = (() => {
    const submission = mapData(props.submission || {}, actionInfo.defaults!);
    const form = mapSettingsForm(actionInfo.settingsForm);

    return { form, submission: { data: submission } };
  })();

  return (
    <div>
      {children}

      <Form form={form} submission={submission} onSubmit={onSubmit} options={options} />

      {children}
    </div>
  );
}
