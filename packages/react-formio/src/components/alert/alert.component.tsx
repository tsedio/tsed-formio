import React from "react";

function formatError(error: any): any {
  if (typeof error === "string") {
    return error;
  }

  if (Array.isArray(error)) {
    return error.map(formatError);
  }

  if (Object.prototype.hasOwnProperty.call(error, "errors")) {
    return Object.keys(error.errors).map((key, index) => {
      const item = error.errors[key];
      return (
        <div key={index}>
          <strong>
            {item.name} ({item.path})
          </strong>{" "}
          - {item.message}
        </div>
      );
    });
  }

  // If this is a standard error.
  if (Object.prototype.hasOwnProperty.call(error, "message")) {
    return error.message;
  }

  // If this is a joy validation error.
  if (
    Object.prototype.hasOwnProperty.call(error, "name") &&
    error.name === "ValidationError"
  ) {
    return error.details.map((item: any, index: number) => {
      return <div key={index}>{item.message}</div>;
    });
  }

  // If a conflict error occurs on a form, the form is returned.
  if (
    Object.prototype.hasOwnProperty.call(error, "_id") &&
    Object.prototype.hasOwnProperty.call(error, "display")
  ) {
    return "Another user has saved this form already. Please reload and re-apply your changes.";
  }

  return "An error occurred. See console logs for details.";
}

export interface AlertProps {
  error?: any | any[];
  type?: string;
}

export function Alert({ error, type = "danger" }: AlertProps) {
  if (!error || (Array.isArray(error) && !error.length)) {
    return null;
  }

  return (
    <div className={`alert alert-${type}`} role='alert'>
      {formatError(error)}
    </div>
  );
}
