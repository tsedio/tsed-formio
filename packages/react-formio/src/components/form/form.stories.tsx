import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, waitFor, within } from "@storybook/test";
import { useEffect, useState } from "react";

import { SubmissionType } from "../../interfaces";
import { InputText } from "../../molecules/forms/input-text/InputText";
import form from "../__fixtures__/form.fixture.json";
import formFirstname from "../__fixtures__/form-firstname.fixture.json";
import { useEditForm } from "../__fixtures__/useEditForm";
import { Form } from "./form.component";

async function delay(number: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, number);
  });
}

/**
 * The form component is the primary component of the system. It is what takes the form definition (json) and renders the
 * form into html. There are multiple ways to send the form to the Form component. The two main ways are to pass the `src`
 * prop with an url to the form definition, usually a form.io server. The other is to pass the `form` prop with the json
 * definition and optionally a `url` prop with the location of the form.
 */
export default {
  title: "@tsed/react-formio/Form",
  component: Form,
  argTypes: {
    form: {
      description:
        "Instead of loading a form from the `src` url, you can preload the form definition and pass it in with the `form` prop. You should also set `url` if you are using any advanced components like file upload or oauth.",
      control: {
        type: "object"
      }
    },
    src: {
      description:
        "The src of the form definition. This is commonly from a form.io server. When using src, the form will automatically submit the data to that url as well.",
      control: {
        type: "text"
      }
    },
    url: {
      description:
        "The url of the form definition. The form will not be loaded from this url and the submission will not be saved here either. This is used for file upload, oauth and other components or actions that need to know where the server is. Use this in connection with `form`",
      control: {
        type: "text"
      }
    },
    submission: {
      description:
        "Submission data to fill the form. You can either load a previous submission or create a submission with some pre-filled data. If you do not provide a submissions the form will initialize an empty submission using default values from the form.",
      control: {
        type: "object"
      }
    },
    options: {
      description:
        "An options object that can pass options to the formio.js Form that is rendered. You can set options such as `readOnly`, `noAlerts` or `hide`. There are [many options to be found in the formio.js library](https://github.com/formio/formio.js/wiki/Form-Renderer#options).",
      control: {
        type: "object"
      }
    },
    className: {
      control: {
        type: "text"
      }
    },
    style: {
      control: {
        type: "object"
      }
    },
    // onFormReady: {
    //   description:
    //     "A callback function that gets called when the form has rendered. It is useful for accessing the underlying @formio/js Webform instance.",
    //   action: "onFormReady"
    // },
    onPrevPage: {
      description: 'A callback function for Wizard forms that gets called when the "Previous" button is pressed.',
      action: "onPrevPage"
    },
    onNextPage: {
      description: 'A callback function for Wizard forms that gets called when the "Next" button is pressed.',
      action: "onNextPage"
    },
    onCancelSubmit: {
      description: "A callback function that gets called when the submission has been canceled.",
      action: "onCancelSubmit"
    },
    onCancelComponent: {
      description: "A callback function that gets called when a component has been canceled.",
      action: "onCancelComponent"
    },
    // onChange: {
    //   description: "A callback function that gets called when a value in the submission has changed.",
    //   action: "onChange"
    // },
    onCustomEvent: {
      description: 'A callback function that is triggered from a button component configured with "Event" type.',
      action: "onCustomEvent"
    },
    // onComponentChange: {
    //   description: "A callback function that gets called when a specific component changes.",
    //   action: "onComponentChange"
    // },
    onSubmit: {
      description:
        "A callback function that gets called when the submission has started. If src is not a Form.io server URL, this will be the final submit event.",
      action: "onSubmit"
    },
    onSubmitDone: {
      description:
        "A callback function that gets called when the submission has successfully been made to the server. This will only fire if src is set to a Form.io server URL.",
      action: "onSubmitDone"
    },
    onSubmitError: {
      description: "A callback function that gets called when an error occurs during submission (e.g. a validation error).",
      action: "onSubmitError"
    },
    onFormLoad: {
      description: "A callback function that gets called when the form is finished loading.",
      action: "onFormLoad"
    },
    onError: {
      description: "A callback function that gets called when an error occurs during submission (e.g. a validation error).",
      action: "onError"
    },
    onRender: {
      description:
        "A callback function that gets called when the form is finished rendering. param will depend on the form and display type.",
      action: "onRender"
    },
    onAttach: {
      description: "Event",
      action: "onAttach"
    },
    onBuild: {
      description: "Event",
      action: "onBuild"
    },
    // onFocus: {
    //   description: "Event",
    //   action: "onFocus"
    // },
    // onBlur: {
    //   description: "Event",
    //   action: "onBlur"
    // },
    onInitialized: {
      description: "Event",
      action: "onInitialized"
    },
    onLanguageChanged: {
      description: "Event",
      action: "onLanguageChanged"
    },
    onBeforeSetSubmission: {
      description: "Event",
      action: "onBeforeSetSubmission"
    },
    onSaveDraftBegin: {
      description: "Event",
      action: "onSaveDraftBegin"
    },
    onSaveDraft: {
      description: "Event",
      action: "onSaveDraft"
    },
    onRestoreDraft: {
      description: "Event",
      action: "onRestoreDraft"
    },
    onSubmissionDeleted: {
      description: "Event",
      action: "onSubmissionDeleted"
    },
    onRequestDone: {
      description: "Event",
      action: "onRequestDone"
    },
    otherEvents: {
      description:
        'A "catch-all" prop for subscribing to other events (for a complete list, see [our documentation](https://help.form.io/developers/form-development/form-renderer#form-events)).',
      control: {
        type: "object"
      }
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Form>;

type Story = StoryObj<typeof Form>;
/**
 * Form with `form` property.
 */
export const BasicUsageWithForm: Story = {
  args: {
    form: form as any,
    onFormReady: fn(),
    options: { template: "tailwind", iconset: "bx" }
  },
  async play({ canvasElement, args }) {
    const canvas = within(canvasElement);

    await waitFor(() => {
      expect(canvas.getByTestId("formio-container")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(canvas.getByTestId("formio-container")).toHaveClass("formio-form-ready");
    });

    expect(args.onFormReady).toHaveBeenCalled();

    expect(canvas.getByRole("textbox", { name: "Text Field" })).toBeInTheDocument();
  }
};
/**
 * Form with `src` property.
 */
export const BasicUsageWithSrc: Story = {
  args: {
    src: "https://example.form.io/example",
    options: { template: "tailwind", iconset: "bx" }
  },
  async play({ canvasElement }) {
    const canvas = within(canvasElement);

    await waitFor(() => {
      expect(canvas.getByTestId("formio-container")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(canvas.getByTestId("formio-container")).toHaveClass("formio-form-ready");
    });

    expect(canvas.getByRole("textbox", { name: "First Name" })).toBeInTheDocument();
  }
};
/**
 * Form with `submission` property.
 */
export const WithSubmissionData: Story = {
  args: {
    form: formFirstname as never,
    options: {
      template: "tailwind",
      iconset: "bx"
    },
    submission: {
      data: {
        firstName: "John",
        lastName: "Doe"
      }
    }
  },
  async play({ canvasElement }) {
    const canvas = within(canvasElement);

    await waitFor(() => {
      expect(canvas.getByTestId("formio-container")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(canvas.getByTestId("formio-container")).toHaveClass("formio-form-ready");
    });

    const firstnameInput = canvas.getByRole("textbox", { name: "First name" });
    const lastNameInput = canvas.getByRole("textbox", { name: "Last name" });

    expect(firstnameInput).toHaveValue("John");
    expect(lastNameInput).toHaveValue("Doe");
  }
};
/**
 * Form with `onSubmit` property.
 */
export const WithOnSubmit: Story = {
  render(args) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState(() => args.submission!.data);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      setData(args.submission!.data);
    }, [args.submission]);

    return (
      <>
        <Form
          {...args}
          submission={{
            data: data
          }}
          onSubmit={(submission) => {
            setTimeout(() => {
              setData(submission.data);
            }, 1000);
          }}
        />
        <div className='flex flex-col space-y-5 pt-5'>
          <strong>Preview:</strong>
          <pre className='bg-gray-200 p-5 rounded-sm text-sm'>
            <code>{JSON.stringify(data, null, 2)}</code>
          </pre>

          <InputText
            name={"raw-firstName"}
            label={"Raw First name"}
            value={data.firstName}
            onChange={(_, value) => setData({ ...data, firstName: value })}
          />
        </div>
      </>
    );
  },
  args: {
    form: formFirstname as never,
    options: {
      template: "tailwind",
      iconset: "bx"
    },
    submission: {
      data: {
        firstName: "John",
        lastName: "Doe"
      }
    }
  },
  async play({ canvasElement }) {
    const canvas = within(canvasElement);

    await waitFor(() => {
      expect(canvas.getByTestId("formio-container")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(canvas.getByTestId("formio-container")).toHaveClass("formio-form-ready");
    });

    let firstnameInput = canvas.getByRole("textbox", { name: "First name" });
    let lastNameInput = canvas.getByRole("textbox", { name: "Last name" });

    expect(firstnameInput).toHaveValue("John");
    expect(lastNameInput).toHaveValue("Doe");

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

    await delay(1200);

    firstnameInput = canvas.getByRole("textbox", { name: "First name" });
    lastNameInput = canvas.getByRole("textbox", { name: "Last name" });

    userEvent.clear(lastNameInput);
    userEvent.type(lastNameInput, "Endo", { delay: 100 });

    await delay(1100);

    await waitFor(() => {
      expect(lastNameInput).toHaveValue("Endo");
    });

    submitButton = canvas.getByRole("button", { name: "Submit" });

    userEvent.click(submitButton);

    await delay(1200);

    const rawFirstNameInput = canvas.getByRole("textbox", { name: "Raw First name" });

    await waitFor(() => {
      expect(rawFirstNameInput).toHaveValue("Jane");
    });

    userEvent.clear(rawFirstNameInput);

    await delay(100);

    userEvent.type(rawFirstNameInput, "Romeo", { delay: 100 });

    await waitFor(() => {
      expect(rawFirstNameInput).toHaveValue("Romeo");
    });

    firstnameInput = canvas.getByRole("textbox", { name: "First name" });

    await waitFor(() => {
      expect(firstnameInput).toHaveValue("Romeo");
    });
  }
};
/**
 * Form with custom validation hook
 */
export const CustomValidation: Story = {
  parameters: {
    mockData: [
      {
        url: "https://test.dev/todos/1",
        method: "GET",
        status: 500,
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
  args: {
    form: formFirstname as never,
    options: {
      hooks: {
        async customValidation(submission: SubmissionType, callback: (error: any) => void) {
          const response = await fetch("https://test.dev/todos/1", {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            method: "GET"
          });

          const responseData = await response.json();

          if (response.ok) {
            callback(null);
          } else {
            callback(responseData);
          }
        }
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

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

    await waitFor(async () => {
      expect(canvas.getByText("Please fix the following errors before submitting.")).toBeInTheDocument();
    });
  }
};

/**
 * Fetch submission data from a server then use the custom `onAsyncSubmit` event to update the submission
 * data on a non form.io server.
 *
 * Formio support `form.action` property to send the form data to a custom server.
 * But here we want to handle the submission data manually and perform some custom action before sending the data to the server.
 */
export const FetchSubmissionWithCustomAction: Story = {
  args: {
    options: {
      template: "tailwind",
      iconset: "bx"
    }
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
  render(args) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { loading, form, data, onSubmit } = useEditForm({
      model: "Test",
      submissionId: "1"
    });

    if (loading || !form) {
      return <div data-testid='loading'>Loading...</div>;
    }

    return (
      <div className='flex flex-col space-y-5'>
        <Form {...args} form={form} submission={{ data: data! }} onAsyncSubmit={onSubmit} />

        <div className='flex flex-col space-y-5'>
          <strong>Preview:</strong>
          <pre className='bg-gray-200 p-5 rounded-sm text-sm'>
            <code>{JSON.stringify(data, null, 2)}</code>
          </pre>
        </div>
      </div>
    );
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

export const ErrorOnSubmitServer: Story = {
  args: {
    options: {
      template: "tailwind",
      iconset: "bx"
    }
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
  render(args) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { loading, form, data, onSubmit } = useEditForm({
      model: "Test2",
      submissionId: "2"
    });

    if (loading || !form) {
      return <div data-testid='loading'>Loading...</div>;
    }

    return (
      <div className='flex flex-col space-y-5'>
        <Form {...args} form={form} submission={{ data: data! }} onAsyncSubmit={onSubmit} />

        <div className='flex flex-col space-y-5'>
          <strong>Preview:</strong>
          <pre className='bg-gray-200 p-5 rounded-sm text-sm'>
            <code>{JSON.stringify(data, null, 2)}</code>
          </pre>
        </div>
      </div>
    );
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
