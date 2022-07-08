import { render, screen } from "@testing-library/react";
import React from "react";

import { Sandbox } from "./alert.stories";

describe("Alert component", () => {
  it("should NOT display the alert component when no error is received.", () => {
    const { container } = render(<Sandbox {...Sandbox.args} error={null} />);

    expect(container).toBeEmptyDOMElement();
  });

  it("should display an error when the error is in string format", () => {
    const error = "error in string format";

    render(<Sandbox {...Sandbox.args} error={error} />);

    const alert = screen.getByRole("alert") as HTMLDivElement;

    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass("alert alert-danger");
    expect(alert).toHaveTextContent(error);
  });

  it("should display error(s) when the error is an array", () => {
    const arrayOfErrors = ["first error", "second error", "third error"];
    const joinedErrors = arrayOfErrors.map((error) => error).join("");
    render(<Sandbox {...Sandbox.args} error={arrayOfErrors} />);

    const alert = screen.getByRole("alert") as HTMLDivElement;

    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass("alert alert-danger");
    expect(screen.getByText(joinedErrors)).toBeInTheDocument();
  });

  it("should display error's names paths and messages when the error is an object that has an 'errors' property that contains an array of error objects", () => {
    const arrayOfErrors = {
      errors: [
        { name: "first error", path: "/path", message: "message" },
        { name: "second error", path: "/path", message: "message" },
        { name: "third error", path: "/path", message: "message" }
      ]
    };
    render(<Sandbox {...Sandbox.args} error={arrayOfErrors} />);

    const alert = screen.getByRole("alert") as HTMLDivElement;

    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass("alert alert-danger");
    expect(alert).toHaveTextContent(arrayOfErrors.errors.map((error) => `${error.name} (${error.path}) - ${error.message}`).join(""));
  });

  it("should display an error message when the error is a standard error", () => {
    const standardError = { message: "first error" };
    render(<Sandbox {...Sandbox.args} error={standardError} />);

    const alert = screen.getByRole("alert") as HTMLDivElement;

    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass("alert alert-danger");
    expect(screen.getByText(standardError.message)).toBeInTheDocument();
  });

  it("should display error(s) message(s) when the error is a joi validation error", () => {
    const joiValidationError = { name: "ValidationError", details: [{ message: "message 1" }, { message: "message 2" }] };
    render(<Sandbox {...Sandbox.args} error={joiValidationError} />);

    const alert = screen.getByRole("alert") as HTMLDivElement;

    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass("alert alert-danger");
    expect(screen.getByText("message 1")).toBeInTheDocument();
    expect(screen.getByText("message 2")).toBeInTheDocument();
  });

  it("should display a custom error message that asks to reload the form when a conflict error occurs in a form", () => {
    const error = { _id: "some id", display: "some value" };
    const messageReturned = "Another user has saved this form already. Please reload and re-apply your changes.";
    render(<Sandbox {...Sandbox.args} error={error} />);

    const alert = screen.getByRole("alert") as HTMLDivElement;

    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass("alert alert-danger");
    expect(alert).toHaveTextContent(messageReturned);
  });

  it("should display an error message by default when the error format does not match any of the conditions of the formatError() handler", () => {
    const messageError: string = "An error occurred. See console logs for details.";
    render(<Sandbox {...Sandbox.args} error={true} />);

    const alert = screen.getByRole("alert") as HTMLDivElement;

    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass("alert alert-danger");
    expect(alert).toHaveTextContent(messageError);
  });
});
