import { expect, userEvent, waitFor, within } from "@storybook/test";
import React from "react";

import formFirstname from "./__fixtures__/form-firstname.fixture.json";
import { useEditForm } from "./__fixtures__/useEditForm.jsx";
import { WrapperForm } from "./__fixtures__/WrapperForm.jsx";

async function delay(number) {
  return new Promise((resolve) => {
    setTimeout(resolve, number);
  });
}

function EditView(props) {
  const { loading, form, data, onSubmit } = useEditForm(props);

  if (loading) {
    return <div data-testid='loading'>Loading...</div>;
  }

  return (
    <div className='flex flex-col space-y-5'>
      <WrapperForm form={form} submission={{ data }} onAsyncSubmit={onSubmit} />

      <div className='flex flex-col space-y-5'>
        <strong>Preview:</strong>
        <pre className='bg-gray-200 p-5 rounded-sm text-sm'>
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
}

/**
 * The form component is the primary component of the system. It is what takes the form definition (json) and renders the
 * form into html. There are multiple ways to send the form to the Form component. The two main ways are to pass the `src`
 * prop with an url to the form definition, usually a form.io server. The other is to pass the `form` prop with the json
 * definition and optionally a `url` prop with the location of the form.
 */
export default {
  title: "Formiojs/Integration/Form",
  component: EditView,
  argTypes: {
    model: {
      control: {
        type: "text"
      }
    },
    submissionId: {
      control: {
        type: "text"
      }
    }
  },
  tags: ["autodocs"]
};

/**
 * Fetch submission data from a server then use the custom `onAsyncSubmit` event to update the submission
 * data on a non form.io server.
 *
 * Formio support `form.action` property to send the form data to a custom server.
 * But here we want to handle the submission data manually and perform some custom action before sending the data to the server.
 */
export const FetchSubmissionWithCustomAction = {
  args: {
    model: "Test",
    submissionId: "1"
  },
  parameters: {
    mockData: [
      {
        url: "https://local.dev/form/Test",
        method: "GET",
        status: 200,
        response: formFirstname,
        delay: 200
      },
      {
        url: "https://local.dev/form/Test/submissions/1",
        method: "GET",
        status: 200,
        response: {
          firstName: "John",
          lastName: "Doe"
        },
        delay: 800
      },
      {
        url: "https://local.dev/form/Test/submissions/1",
        method: "PUT",
        status: 200,
        response: {
          firstName: "John",
          lastName: "Doe"
        },
        delay: 800
      }
    ]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitFor(() => {
      expect(canvas.getByTestId("loading")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(canvas.getByTestId("formio-container")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(canvas.getByTestId("formio-container")).toHaveClass("formio-form-ready");
    });

    let firstnameInput = canvas.getByRole("textbox", { name: "First name" });
    let lastNameInput = canvas.getByRole("textbox", { name: "Last name" });

    userEvent.clear(firstnameInput);
    userEvent.type(firstnameInput, "Jane", { delay: 100 });

    await waitFor(() => {
      expect(firstnameInput).toHaveValue("Jane");
    });

    userEvent.clear(lastNameInput);
    userEvent.type(lastNameInput, "Smith", { delay: 100 });

    await waitFor(() => {
      expect(lastNameInput).toHaveValue("Smith");
    });

    let submitButton = canvas.getByRole("button", { name: "Submit" });

    userEvent.click(submitButton);

    await delay(1000);

    await waitFor(() => {
      submitButton = canvas.getByRole("button", { name: "Submit" });
      expect(submitButton.children).toHaveLength(1);
    });
  }
};

export const ErrorOnSubmitServer = {
  args: {
    model: "Test2",
    submissionId: "2"
  },
  parameters: {
    mockData: [
      {
        url: "https://local.dev/form/Test2",
        method: "GET",
        status: 200,
        response: formFirstname,
        delay: 200
      },
      {
        url: "https://local.dev/form/Test2/submissions/2",
        method: "GET",
        status: 200,
        response: {
          firstName: "John",
          lastName: "Doe"
        },
        delay: 800
      },
      {
        url: "https://local.dev/form/Test2/submissions/2",
        method: "PUT",
        status: 400,
        response: {
          message: "My custom message about this field",
          type: "custom",
          path: ["firstName"],
          level: "error"
        },
        delay: 800
      }
    ]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitFor(() => {
      expect(canvas.getByTestId("loading")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(canvas.getByTestId("formio-container")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(canvas.getByTestId("formio-container")).toHaveClass("formio-form-ready");
    });

    let firstnameInput = canvas.getByRole("textbox", { name: "First name" });
    let lastNameInput = canvas.getByRole("textbox", { name: "Last name" });

    userEvent.clear(firstnameInput);
    userEvent.type(firstnameInput, "Jane", { delay: 100 });

    await waitFor(() => {
      expect(firstnameInput).toHaveValue("Jane");
    });

    userEvent.clear(lastNameInput);
    userEvent.type(lastNameInput, "Smith", { delay: 100 });

    await waitFor(() => {
      expect(lastNameInput).toHaveValue("Smith");
    });

    let submitButton = canvas.getByRole("button", { name: "Submit" });

    userEvent.click(submitButton);

    await delay(1000);

    await waitFor(async () => {
      expect(canvas.getByText("Please fix the following errors before submitting.")).toBeInTheDocument();
    });
  }
};
