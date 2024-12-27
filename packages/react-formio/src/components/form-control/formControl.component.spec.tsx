import { render, screen } from "@testing-library/react";

import { iconClass } from "../../utils/iconClass";
import { Sandbox, WithDescription, WithPrefix, WithSuffix } from "./formControl.stories";

describe("form-control", () => {
  it("should display form control component", () => {
    render(<Sandbox {...Sandbox.args} name='test' />);

    const formGroup = screen.getByTestId("form-group-test") as HTMLFormElement;

    expect(formGroup).toBeInTheDocument();
  });

  it("should NOT display form-control component without a name attribute defined", () => {
    const name = "";
    render(<Sandbox {...Sandbox.args} name={name} />);

    const formGroup = screen.queryByTestId(`form-group-${name}`) as HTMLFormElement;

    expect(formGroup).not.toBeInTheDocument();
  });

  it("should display form-control component with className 'field-required' when the props 'required' is set to true", () => {
    render(<Sandbox {...Sandbox.args} required={true} name='test' />);

    const formGroup = screen.getByTestId("form-group-test") as HTMLFormElement;
    const formControlLabel = screen.getByTestId(`form-control-label`) as HTMLLabelElement;

    expect(formGroup).toBeInTheDocument();
    expect(formControlLabel).toBeInTheDocument();
    expect(formControlLabel).toHaveClass("col-form-label field-required");
  });

  it("should display prefix", () => {
    const fontAwsomeCalendarIcon = "fa fa-calendar";
    const prefix = (<i className={iconClass(undefined, "calendar")} />) as JSX.Element;
    render(<WithPrefix {...Sandbox.args} name='testPrefix' prefix={prefix} />);

    const formGroup = screen.getByTestId("form-group-testPrefix") as HTMLFormElement;
    const formControlPrefix = screen.getByTestId("form-control-prefix") as HTMLSpanElement;

    expect(formGroup).toBeInTheDocument();
    expect(formControlPrefix).toBeInTheDocument();
    expect(formControlPrefix).not.toBeEmptyDOMElement();
    expect(formControlPrefix).toContainHTML(fontAwsomeCalendarIcon);
  });

  it("should display suffix", () => {
    const fontAwsomeCalendarIcon = "fa fa-calendar";
    const suffix = (<i className={iconClass(undefined, "calendar")} />) as JSX.Element;
    render(<WithSuffix {...Sandbox.args} name='testSuffix' suffix={suffix} />);

    const formGroup = screen.getByTestId("form-group-testSuffix") as HTMLFormElement;
    const formControlSuffix = screen.getByTestId("form-control-suffix") as HTMLSpanElement;

    expect(formGroup).toBeInTheDocument();
    expect(formControlSuffix).toBeInTheDocument();
    expect(formControlSuffix).not.toBeEmptyDOMElement();
    expect(formControlSuffix).toContainHTML(fontAwsomeCalendarIcon);
  });

  it("should display description", () => {
    const description = "test description";
    render(<WithDescription {...Sandbox.args} name='testDescription' description={description} />);

    const formGroup = screen.getByTestId("form-group-testDescription") as HTMLFormElement;
    const formControlDescription = screen.getByTestId("form-control-description") as HTMLDivElement;

    expect(formGroup).toBeInTheDocument();
    expect(formControlDescription).toBeInTheDocument();
    expect(formControlDescription).not.toBeEmptyDOMElement();
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
