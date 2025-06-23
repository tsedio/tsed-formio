import classnames from "classnames";

import type { FormOptions } from "../../../interfaces";
import { getComponent } from "../../../registries/components";
import { FormBuilder as DefaultFormBuilder } from "./FormBuilder";
import { FormEditCTAs as DefaultFormEditCTAs } from "./FormEditCtas";
import { FormParameters as DefaultFormParameters } from "./FormParameters";
import { FormBuilderEvents } from "./useFormBuilder";
import { useFormEdit, UseFormEditHookProps } from "./useFormEdit";

export interface FormEditProps extends UseFormEditHookProps, FormBuilderEvents {
  options?: FormOptions;
  layout?: "html5" | "choicesjs" | "react";
  className?: string;
  style?: React.CSSProperties;
}

export function FormEdit({
  form: initialForm,
  typeChoices,
  displayChoices,
  enableTags,
  onSubmit: initialOnSubmit,
  onCopy: initialOnCopy,
  className,
  style,
  ...props
}: FormEditProps) {
  const { form, isValid, setChange, hasRedo, hasChanged, hasUndo, redo, undo, reset, onSubmit, onCopy } = useFormEdit({
    form: initialForm,
    typeChoices,
    displayChoices,
    enableTags,
    onSubmit: initialOnSubmit,
    onCopy: initialOnCopy
  });

  const { options = {} } = props;
  const FormParameters = getComponent<typeof DefaultFormParameters>("FormParameters");
  const FormBuilder = getComponent<typeof DefaultFormBuilder>("FormBuilder");
  const FormEditCTAs = getComponent<typeof DefaultFormEditCTAs>("FormEditCTAs");

  return (
    <div className={classnames("form-edit-container", className)} style={style}>
      <div className='form-edit'>
        <FormParameters
          enableTags={enableTags}
          typeChoices={typeChoices}
          displayChoices={displayChoices}
          key={`form-settings-${form._id}`}
          form={form}
          onChange={setChange}
          layout={props.layout}
        />
        <FormEditCTAs
          key={`form-edit-ctas-${form._id}`}
          options={options}
          hasRedo={hasRedo}
          hasUndo={hasUndo}
          disabled={!(isValid && hasChanged)}
          onRedo={redo}
          onUndo={undo}
          onReset={reset}
          onCopy={onCopy}
          onSubmit={onSubmit}
        />
      </div>

      <FormBuilder
        {...props}
        key={`form-builder-${form._id}`}
        components={form.components!}
        display={form.display}
        options={options}
        onChange={(components) => {
          setChange("components", components);
        }}
      />
    </div>
  );
}
