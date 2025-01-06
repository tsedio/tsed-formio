import { FormOptions } from "../../interfaces/FormOptions";
import { FormBuilder } from "../form-builder/formBuilder.component";
import { FormBuilderEvents } from "../form-builder/useFormBuilder.hook";
import { FormEditCTAs } from "./formCtas.component";
import { FormParameters } from "./formParameters.component";
import { useFormEdit, UseFormEditHookProps } from "./useFormEdit.hook";

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
