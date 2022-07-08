/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ComponentSchema } from "formiojs";
import AllComponents from "formiojs/components";
import Components from "formiojs/components/Components";
import FormioFormBuilder from "formiojs/FormBuilder";
import cloneDeep from "lodash/cloneDeep";
import noop from "lodash/noop";
import PropTypes from "prop-types";
import React from "react";
import { callLast } from "../../utils/callLast";

Components.setComponents(AllComponents);

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

async function createBuilder(el: Element, { components = [], display, options, onChange, events = {} }: any): Promise<void> {
  const form = {
    display,
    components: [...components]
  };

  try {
    const builder = await new FormioFormBuilder(el, form, { ...options }).ready;

    const handleEvent = (event: string) => {
      return (...args: any[]) => {
        events[event] && events[event](...args);

        if (EVENTS_CHANGE.includes(event)) {
          onChange(builder.form.components);
        }
      };
    };

    EVENTS.forEach((event) => builder.on(event, callLast(handleEvent(event), 200)));

    return builder;
  } catch (er) {
    console.error(er);
  }
}

export interface FormBuilderProps {
  components: ComponentSchema[];
  display?: string;
  options?: any;
  builder?: any;
  onChange?: (components: ComponentSchema[]) => void;
  onAddComponent?: Function;
  onUpdateComponent?: Function;
  onRemoveComponent?: Function;
  onSaveComponent?: Function;
  onCancelComponent?: Function;
  onMoveComponent?: Function;
  onEditComponent?: Function;
  onEditJson?: Function;
  onCopyComponent?: Function;
  onPasteComponent?: Function;
}

export class FormBuilder extends React.Component<FormBuilderProps, any> {
  static defaultProps = {
    options: {},
    onChange: noop,
    onReady: noop,
    onDestroy: noop
  };

  static propTypes = {
    components: PropTypes.array,
    display: PropTypes.string,
    options: PropTypes.object,
    onChange: PropTypes.func,
    onAddComponent: PropTypes.func,
    onUpdateComponent: PropTypes.func,
    onRemoveComponent: PropTypes.func,
    onSaveComponent: PropTypes.func,
    onCancelComponent: PropTypes.func,
    onMoveComponent: PropTypes.func,
    onEditComponent: PropTypes.func,
    onEditJson: PropTypes.func,
    onCopyComponent: PropTypes.func,
    onPasteComponent: PropTypes.func
  };

  private elRef: any;
  private builderRef: any;

  constructor(props: FormBuilderProps) {
    super(props);

    this.state = {
      display: props.display,
      components: cloneDeep(props.components)
    };
    this.elRef = null;
    this.builderRef = null;
  }

  async componentDidMount(): Promise<void> {
    await this.create(this.props);
  }

  async create(props: FormBuilderProps) {
    const {
      options,
      display,
      components,
      onAddComponent,
      onUpdateComponent,
      onRemoveComponent,
      onSaveComponent,
      onCancelComponent,
      onMoveComponent,
      onEditComponent,
      onEditJson,
      onCopyComponent,
      onPasteComponent
    } = props;

    this.builderRef = await createBuilder(this.elRef.firstChild, {
      display,
      options: { ...options },
      components: cloneDeep(components),
      onChange: this.whenComponentsChange.bind(this),
      events: {
        onAddComponent,
        onUpdateComponent,
        onRemoveComponent,
        onSaveComponent,
        onCancelComponent,
        onMoveComponent,
        onEditComponent,
        onEditJson,
        onCopyComponent,
        onPasteComponent
      }
    });
  }

  componentWillUnmount(): void {
    this.builderRef?.destroy();
  }

  // eslint-disable-next-line react/no-deprecated
  async componentWillReceiveProps(nextProps: FormBuilderProps) {
    if (this.builderRef) {
      if (nextProps.display !== this.state.display) {
        await this.create({
          ...this.props,
          display: nextProps.display
        });
      } else if (nextProps.components !== this.state.components) {
        this.builderRef.form = {
          display: this.state.display,
          components: nextProps.components
        };
      }
    }
  }

  whenComponentsChange(components: ComponentSchema[]) {
    this.setState({ components }, () => {
      this.props?.onChange && this.props.onChange(components);
    });
  }

  render() {
    return (
      <div
        ref={(ref) => {
          this.elRef = ref;
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div />
      </div>
    );
  }
}
