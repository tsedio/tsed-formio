import { expect, fn, userEvent, waitFor, within } from "@storybook/test";
import { InputText } from "@tsed/react-formio";
import React, { useEffect, useState } from "react";

import form from "./__fixtures__/form.fixtures.js";
import formFirstname from "./__fixtures__/form-firstname.fixture.json";
import { WrapperForm } from "./__fixtures__/WrapperForm.jsx";

async function delay(number) {
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
  title: "Formiojs/Form",
  component: WrapperForm,
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
    onFormReady: {
      description:
        "A callback function that gets called when the form has rendered. It is useful for accessing the underlying @formio/js Webform instance.",
      action: "onFormReady"
    },
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
    // FIXME adding this event causes the story to fail
    // onChange: {
    //   description: "A callback function that gets called when a value in the submission has changed.",
    //   action: "onChange"
    // },
    onCustomEvent: {
      description: 'A callback function that is triggered from a button component configured with "Event" type.',
      action: "onCustomEvent"
    },
    // FIXME adding this event causes the story to fail
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
};
/**
 * Form with `form` property.
 */
export const BasicUsageUsingForm = {
  args: {
    form,
    onFormReady: fn(),
    options: {
      template: "tailwind",
      iconset: "bx"
    }
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
export const BasicUsageUsingSrc = {
  args: {
    src: "https://example.form.io/example",
    options: {
      template: "tailwind",
      iconset: "bx"
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

    expect(canvas.getByRole("textbox", { name: "First Name" })).toBeInTheDocument();
  }
};
/**
 * Form with `submission` property.
 */
export const WithSubmissionData = {
  args: {
    form: formFirstname,
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
export const WithOnSubmit = {
  render(args) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState(() => args.submission.data);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      setData(args.submission.data);
    }, [args.submission]);

    return (
      <>
        <WrapperForm
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
    form: formFirstname,
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
export const CustomValidation = {
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
    form: formFirstname,
    options: {
      hooks: {
        async customValidation(submission, callback) {
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
