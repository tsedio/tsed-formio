import { Components, ComponentSchema } from "formiojs";
import ReactDOM from "react-dom";
import { Submission } from "../../interfaces/Submission";

export class ReactComponent<Data = any> extends Components.components.field {
  public reactInstance: any;
  public shouldSetValue: boolean;
  private dataForSetting: Data;

  /**
   * This is the first phase of component building where the component is instantiated.
   *
   * @param component - The component definition created from the settings form.
   * @param options - Any options passed into the renderer.
   * @param data - The submission data where this component's data exists.
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(component: ComponentSchema, options: any, data: Submission<Data>) {
    super(component, options, data);
  }

  get $reactNode() {
    return this.refs[`react-${this.id}`];
  }

  /**
   * This method is called any time the component needs to be rebuilt. It is most frequently used to listen to other
   * components using the this.on() function.
   */
  init() {
    return super.init();
  }

  /**
   * This method is called before the component is going to be destroyed, which is when the component instance is
   * destroyed. This is different from detach which is when the component instance still exists but the dom instance is
   * removed.
   */
  destroy() {
    return super.destroy();
  }

  /**
   * The second phase of component building where the component is rendered as an HTML string.
   *
   * @returns {string} - The return is the full string of the component
   */
  render() {
    // For react components, we simply render as a div which will become the react instance.
    // By calling super.render(string) it will wrap the component with the needed wrappers to make it a full component.
    return super.render(`<div ref="react-${this.id}"></div>`);
  }

  /**
   * The third phase of component building where the component has been attached to the DOM as 'element' and is ready
   * to have its javascript events attached.
   *
   * @param element
   * @returns {Promise<void>} - Return a promise that resolves when the attach is complete.
   */
  async attach(element: any) {
    super.attach(element);

    // The loadRefs function will find all dom elements that have the "ref" setting that match the object property.
    // It can load a single element or multiple elements with the same ref.
    this.loadRefs(element, {
      [`react-${this.id}`]: "single"
    });

    if (this.refs[`react-${this.id}`]) {
      this.reactInstance = this.attachReact(this.refs[`react-${this.id}`]);

      if (this.shouldSetValue) {
        this.setValue(this.dataForSetting);
        this.updateValue(this.dataForSetting);
      }
    }
  }

  /**
   * The fourth phase of component building where the component is being removed from the page. This could be a redraw
   * or it is being removed from the form.
   */
  detach() {
    if (this.refs[`react-${this.id}`]) {
      this.detachReact(this.refs[`react-${this.id}`]);
    }
    super.detach();
  }

  /**
   * Override this function to render a react component.
   */
  renderReact(): any {
    return null;
  }

  /**
   * Override this function to insert your custom component.
   *
   * @param element
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  attachReact(element?: any) {
    // eslint-disable-next-line react/no-render-return-value
    return ReactDOM.render(this.renderReact(), element);
  }

  /**
   * Override this function.
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  detachReact(element?: any) {
    if (element) {
      ReactDOM.unmountComponentAtNode(element);
    }
  }

  /**
   * Something external has set a value and our component needs to be updated to reflect that. For example, loading a submission.
   *
   * @param value
   * @param flags
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setValue(value: any, flags?: any): boolean {
    if (this.reactInstance) {
      this.reactInstance.setState({
        value: value
      });
      this.shouldSetValue = false;
    } else {
      this.shouldSetValue = true;
      this.dataForSetting = value;
    }

    return undefined;
  }

  /**
   * The user has changed the value in the component and the value needs to be updated on the main submission object and other components notified of a change event.
   *
   * @param value
   * @param flags
   */
  updateValue = (value?: Data, flags?: Record<string, any>) => {
    flags = flags || {};

    const newValue = value === undefined || value === null ? this.getValue() : value;

    const changed = newValue !== undefined ? this.hasChanged(newValue, this.dataValue) : false;

    this.dataValue = Array.isArray(newValue) ? [...newValue] : newValue;

    this.updateOnChange(flags, changed);
    return changed;
  };

  /**
   * Get the current value of the component. Should return the value set in the react component.
   *
   * @returns {*}
   */
  getValue(): Data {
    if (this.reactInstance) {
      return this.reactInstance.state.value;
    }
    return this.defaultValue;
  }

  /**
   * Override normal validation check to insert custom validation in react component.
   *
   * @param data
   * @param dirty
   * @param rowData
   * @returns {boolean}
   */
  checkValidity(data: Data, dirty: boolean, rowData: any) {
    const valid = super.checkValidity(data, dirty, rowData);

    if (!valid) {
      return false;
    }

    return this.validate(data, dirty, rowData);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  validate(data: Data, dirty: boolean, rowData: any) {
    return true;
  }
}
