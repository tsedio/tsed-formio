import React from "react";
import {render} from "@testing-library/react";
import {Sandbox, WithDescription, WithPrefix, WithSuffix} from "./formControl.stories";
import {iconClass} from "../../utils/iconClass";

describe("form-control", () => {
  it("should display form control component", () => {
    const {getByTestId} = render(<Sandbox {...Sandbox.args} name="test"/>);

    const formGroup = getByTestId("form-group-test") as HTMLFormElement;

    expect(formGroup).toBeInTheDocument();
  });

  it("should NOT display form-control component without a name attribute defined", () => {
    const name = "";
    const {queryByTestId} = render(<Sandbox {...Sandbox.args} name={name}/>);

    const formGroup = queryByTestId(`form-group-${name}`) as HTMLFormElement;

    expect(formGroup).not.toBeInTheDocument();
  });

  it("should display form-control component with className 'field-required' when the props 'required' is set to true", () => {
    const {getByTestId} = render(<Sandbox {...Sandbox.args} required={true} name="test"/>);

    const formGroup = getByTestId("form-group-test") as HTMLFormElement;
    const formControlLabel = getByTestId(`form-control-label`) as HTMLLabelElement;

    expect(formGroup).toBeInTheDocument();
    expect(formControlLabel).toBeInTheDocument();
    expect(formControlLabel).toHaveClass("col-form-label field-required");
  });

  it("should display prefix", () => {
    const fontAwsomeCalendarIcon = "fa fa-calendar";
    const prefix = <i className={iconClass(undefined, "calendar")}/> as JSX.Element;
    const {getByTestId} = render(<WithPrefix {...Sandbox.args} name="testPrefix" prefix={prefix}/>);

    const formGroup = getByTestId("form-group-testPrefix") as HTMLFormElement;
    const formControlPrefix = getByTestId("form-control-prefix") as HTMLSpanElement;

    expect(formGroup).toBeInTheDocument();
    expect(formControlPrefix).toBeInTheDocument();
    expect(formControlPrefix).not.toBeEmptyDOMElement();
    expect(formControlPrefix).toContainHTML(fontAwsomeCalendarIcon);
  });

  it("should display suffix", () => {
    const fontAwsomeCalendarIcon = "fa fa-calendar";
    const suffix = <i className={iconClass(undefined, "calendar")}/> as JSX.Element;
    const {getByTestId} = render(<WithSuffix {...Sandbox.args} name="testSuffix" suffix={suffix}/>);

    const formGroup = getByTestId("form-group-testSuffix") as HTMLFormElement;
    const formControlSuffix = getByTestId("form-control-suffix") as HTMLSpanElement;

    expect(formGroup).toBeInTheDocument();
    expect(formControlSuffix).toBeInTheDocument();
    expect(formControlSuffix).not.toBeEmptyDOMElement();
    expect(formControlSuffix).toContainHTML(fontAwsomeCalendarIcon);

  });

  it("should display description", () => {
    const description = "test description";
    const {getByTestId, getByText} = render(<WithDescription {...Sandbox.args} name="testDescription"
                                                             description={description}/>);

    const formGroup = getByTestId("form-group-testDescription") as HTMLFormElement;
    const formControlDescription = getByTestId("form-control-description") as HTMLDivElement;

    expect(formGroup).toBeInTheDocument();
    expect(formControlDescription).toBeInTheDocument();
    expect(formControlDescription).not.toBeEmptyDOMElement();
    expect(getByText(description)).toBeInTheDocument();
  });
});
