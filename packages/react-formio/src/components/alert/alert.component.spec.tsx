import React from "react";
import { render } from "@testing-library/react";
import { Sandbox } from "./alert.stories";

describe("Alert component", () => {
  it("should NOT display the alert component when no error is received.", () => {
    const { container } = render(<Sandbox {...Sandbox.args} error={null} />);

    expect(container).toBeEmptyDOMElement();
  });

  it("should display an error when the error is in string format", () => {
    const error = "error in string format";
    const { getByRole } = render(<Sandbox {...Sandbox.args} error={error} />);

    const alert = getByRole("alert") as HTMLDivElement;

    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass("alert alert-danger");
    expect(alert.textContent).toBe(error);
  });

  it("should display error(s) when the error is an array", () => {
    const arrayOfErrors = ["first error", "second error", "third error"];
    const joinedErrors = arrayOfErrors.map((error) => error).join("");
    const { getByRole, getByText } = render(<Sandbox {...Sandbox.args} error={arrayOfErrors} />);

    const alert = getByRole("alert") as HTMLDivElement;

    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass("alert alert-danger");
    expect(getByText(joinedErrors)).toBeInTheDocument();
  });

  it("should display error's names paths and messages when the error is an object that has an 'errors' property that contains an array of error objects", () => {
    const arrayOfErrors = {
      errors: [
        { name: "first error", path: "/path", message: "message" },
        { name: "second error", path: "/path", message: "message" },
        { name: "third error", path: "/path", message: "message" }
      ]
    };
    const { getByRole } = render(<Sandbox {...Sandbox.args} error={arrayOfErrors} />);

    const alert = getByRole("alert") as HTMLDivElement;

    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass("alert alert-danger");
    expect(alert.textContent).toBe(arrayOfErrors.errors.map((error) => `${error.name} (${error.path}) - ${error.message}`).join(""));
  });

  it("should display an error message when the error is a standard error", () => {
    const standardError = { message: "first error" };
    const { getByRole, getByText } = render(<Sandbox {...Sandbox.args} error={standardError} />);

    const alert = getByRole("alert") as HTMLDivElement;

    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass("alert alert-danger");
    expect(getByText(standardError.message)).toBeInTheDocument();
  });

  it("should display error(s) message(s) when the error is a joy validation error", () => {
    const joyValidationError = { name: "ValidationError", details: [{ message: "message 1" }, { message: "message 2" }] };
    const { getByRole, getByText } = render(<Sandbox {...Sandbox.args} error={joyValidationError} />);

    const alert = getByRole("alert") as HTMLDivElement;

    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass("alert alert-danger");
    joyValidationError.details.map((item) => {
      return expect(getByText(item.message)).toBeInTheDocument();
    });
  });

  it("should display a custom error message that asks to reload the form when a conflict error occurs in a form", () => {
    const error = { _id: "some id", display: "some value" };
    const messageReturned = "Another user has saved this form already. Please reload and re-apply your changes.";
    const { getByRole } = render(<Sandbox {...Sandbox.args} error={error} />);

    const alert = getByRole("alert") as HTMLDivElement;

    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass("alert alert-danger");
    expect(alert.textContent).toBe(messageReturned);
  });

  it("should display an error message by default when the error format does not match any of the conditions of the formatError() handler", () => {
    const messageError: string = "An error occurred. See console logs for details.";
    const { getByRole } = render(<Sandbox {...Sandbox.args} error={true} />);

    const alert = getByRole("alert") as HTMLDivElement;

    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass("alert alert-danger");
    expect(alert.textContent).toBe(messageError);
  });
});
