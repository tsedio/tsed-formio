import { FormBuilder as FormioFormBuilder } from "formiojs";
import cloneDeep from "lodash/cloneDeep";
import { useEffect, useRef, useState } from "react";

import type { ComponentType, FormOptions, FormType } from "../../interfaces";

interface BuilderConstructor {
  new (element: HTMLDivElement, form: FormType, options: FormOptions): FormioFormBuilder;
}

const EVENTS = [
  "addComponent",
  "updateComponent",
  "removeComponent",
  "saveComponent",
  "cancelComponent",
  "moveComponent",
  "editComponent",
  "editJson",
  "copyComponent",
  "pasteComponent"
];

const EVENTS_CHANGE = ["addComponent", "saveComponent", "updateComponent", "removeComponent"];

async function createBuilder(el: Element, { components = [], display, options, onChange, events = {} }: any): Promise<FormioFormBuilder> {
  const form = {
    display,
    components: [...components]
  };

  const builder = await new FormioFormBuilder(el, form, { ...options }).ready;

  const handleEvent = (event: string) => {
    return (...args: any[]) => {
      events[event] && events[event](...args);

      if (EVENTS_CHANGE.includes(event)) {
        onChange(builder.form.components);
      }
    };
  };

  EVENTS.forEach((event) => builder.on(event, handleEvent(event)));

  return builder;
}
export interface FormBuilderEvents {
  onAddComponent?: Function;
  onRemoveComponent?: Function;
  onCancelComponent?: Function;
  onMoveComponent?: Function;
  onEditJson?: Function;
  onCopyComponent?: Function;
  onPasteComponent?: Function;
  onBuilderReady?: (builder: FormioFormBuilder) => void;
  onChange?: (components: ComponentType[]) => void;
  onSaveComponent?: (
    component: ComponentType,
    original: ComponentType,
    parent: ComponentType,
    path: string,
    index: number,
    isNew: boolean,
    originalComponentSchema: ComponentType
  ) => void;
  onEditComponent?: (component: ComponentType) => void;
  onUpdateComponent?: (component: ComponentType) => void;
  onDeleteComponent?: (component: ComponentType, parent: ComponentType, path: string, index: number) => void;
}

export interface UseFormBuilderProps extends FormBuilderEvents {
  Builder?: BuilderConstructor;
  components: ComponentType[];
  display?: string;
  options?: FormOptions;
}

export function useFormBuilder({ components, display, options = {}, onBuilderReady, onChange, ...props }: UseFormBuilderProps) {
  const renderElement = useRef<HTMLDivElement>(null);
  const builderRef = useRef<FormioFormBuilder | null>(null);
  const [currentComponents, setCurrentComponents] = useState<ComponentType[]>(cloneDeep(components));
  const events = Object.fromEntries(Object.entries(props).filter(([key]) => key.startsWith("on")));

  useEffect(() => {
    async function initializeBuilder() {
      if (!renderElement.current) {
        console.warn("FormBuilder render element not found, cannot render builder.");
        return;
      }

      builderRef.current = await createBuilder(renderElement.current.firstChild as Element, {
        display,
        options: { ...options },
        components: cloneDeep(components),
        onChange: handleComponentsChange,
        events
      });

      onBuilderReady && onBuilderReady(builderRef.current);
    }

    initializeBuilder().catch((er) => {
      console.error(er);
    });

    return () => {
      builderRef.current?.destroy();
    };
  }, []);

  useEffect(() => {
    if (builderRef.current) {
      if (display !== builderRef.current.form.display) {
        createBuilder(renderElement.current!.firstChild as Element, {
          display,
          options: { ...options },
          components: cloneDeep(components),
          onChange: handleComponentsChange,
          events
        })
          .then((builder) => {
            builderRef.current = builder;
            onBuilderReady && onBuilderReady(builderRef.current);
          })
          .catch((er) => {
            console.error(er);
          });
      } else if (components !== currentComponents) {
        builderRef.current.form = {
          display,
          components
        };
      }
    }
  }, [display, components]);

  const handleComponentsChange = (newComponents: ComponentType[]) => {
    setCurrentComponents(newComponents);
    onChange && onChange(newComponents);
  };
  return renderElement;
}
