import type { FormOptions } from "../../../interfaces";
import { FormBuilder } from "./FormBuilder";
import { FormEditCTAs } from "./FormEditCtas";
import { FormParameters } from "./FormParameters";
import { FormBuilderEvents } from "./useFormBuilder";
import { useFormEdit, UseFormEditHookProps } from "./useFormEdit";

export interface FormEditProps extends UseFormEditHookProps, FormBuilderEvents {
  options?: FormOptions;
}

export function FormEdit({
  form: initialForm,
  typeChoices,
  displayChoices,
  enableTags,
  onSubmit: initialOnSubmit,
  onCopy: initialOnCopy,
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

  return (
    <div className='form-edit-container'>
      <div className='form-edit'>
        <FormParameters
          enableTags={enableTags}
          typeChoices={typeChoices}
          displayChoices={displayChoices}
          key={`form-settings-${form._id}`}
          form={form}
          onChange={setChange}
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
