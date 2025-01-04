import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";

import { SubmissionType } from "../../interfaces";
import form from "../__fixtures__/form.fixture.json";
import formFirstname from "../__fixtures__/form-firstname.fixture.json";
import { wrap } from "../__fixtures__/utils";
import { Form } from "./form.component";

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
    onChange: {
      description: "A callback function that gets called when a value in the submission has changed.",
      action: "onChange"
    },
    onCustomEvent: {
      description: 'A callback function that is triggered from a button component configured with "Event" type.',
      action: "onCustomEvent"
    },
    onComponentChange: {
      description: "A callback function that gets called when a specific component changes.",
      action: "onComponentChange"
    },
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
    onFocus: {
      description: "Event",
      action: "onFocus"
    },
    onBlur: {
      description: "Event",
      action: "onBlur"
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
} satisfies Meta<typeof Form>;

type Story = StoryObj<typeof Form>;
/**
 * Form with form property
 */
export const UsingJson: Story = {
  args: {
    form: form as any,
    options: { template: "tailwind", iconset: "bx" }
  },
  render: (args: any) => {
    return <Form {...wrap(args)} />;
  }
};
/**
 * Form with src property
 */
export const UsingSrc: Story = {
  args: {
    src: "https://example.form.io/example",
    options: { template: "tailwind", iconset: "bx" }
  },
  render: (args: any) => {
    return <Form {...wrap(args)} />;
  }
};

export const WithInitialData: Story = {
  args: {
    "data-testid": "formio-container",
    submission: {
      data: {
        firstName: "initialFirstName",
        lastName: "initialLastName"
      }
    },
    form: formFirstname as any,
    options: { template: "tailwind", iconset: "bx" }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitFor(() => {
      expect(canvas.getByTestId("formio-container")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(canvas.getByTestId("formio-container")).toHaveClass("formio-form-ready");
    });

    const firstnameInput = canvas.getByRole("textbox", { name: "First name" });
    const lastNameInput = canvas.getByRole("textbox", { name: "Last name" });

    expect(firstnameInput).toHaveValue("initialFirstName");
    expect(lastNameInput).toHaveValue("initialLastName");
  }
};

export const OnSubmit: Story = {
  render: function Render(args: any) {
    return (
      <div>
        <Form
          {...args}
          options={{ template: "tailwind", iconset: "bx", readOnly: args.readOnly }}
          onSubmit={(submission) => {
            console.log(submission);
            // setData(submission.data);
          }}
        />
        {/*<div className={"mt-5"}>*/}
        {/*  <h4>Result:</h4>*/}
        {/*  <pre className='bg-gray-200 p-4 text-sm'>*/}
        {/*    <code>{JSON.stringify(data, null, 2)}</code>*/}
        {/*  </pre>*/}
        {/*</div>*/}
      </div>
    );
  },

  args: {
    "data-testid": "formio-container",
    submission: { data: { firstName: "initialFirstName", lastName: "initialLastName" } },
    form: formFirstname as any
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitFor(() => {
      expect(canvas.getByTestId("formio-container")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(canvas.getByTestId("formio-container")).toHaveClass("formio-form-ready");
    });

    // const firstnameInput = canvas.getByRole("textbox", { name: "First name" });
    // const lastNameInput = canvas.getByRole("textbox", { name: "Last name" });
    //
    // await userEvent.type(firstnameInput, "firstname", { delay: 100 });
    // await userEvent.type(lastNameInput, "lastname", { delay: 100 });
    //
    // const submitButton = canvas.getByRole("button", { name: "Submit" });
    //
    // await userEvent.click(submitButton, { delay: 500 });
  }
};

export const CustomValidation: Story = {
  render: (args: any) => {
    return <Form {...wrap(args)} form={args.form} />;
  },
  args: {
    "data-testid": "formio-container",
    form: {
      type: "form",
      display: "form",
      tags: [],
      components: [
        {
          label: "First name",
          widget: {
            type: "input"
          },
          errorLabel: "",
          key: "firstName",
          inputType: "text",
          type: "textfield",
          id: "eqb1o4r",
          defaultValue: "",
          validate: {
            required: true
          }
        },
        {
          label: "Submit",
          showValidations: false,
          tableView: false,
          key: "submit",
          type: "button",
          input: true
        }
      ]
    },
    options: {
      hooks: {
        customValidation(submission: SubmissionType, callback: (err: Error | null) => void) {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              reject(new Error("server error"));
            }, 500);
          }).catch((error) => {
            error.errors = {
              message: "My custom message about this field",
              type: "custom",
              path: ["firstName"],
              level: "error"
            };

            callback(error);
          });
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

    const firstnameInput = canvas.getByRole("textbox");

    await userEvent.type(firstnameInput, "test", { delay: 100 });

    const submitButton = canvas.getByRole("button", { name: "Submit" });

    await userEvent.click(submitButton, { delay: 500 });

    await waitFor(async () => {
      expect(canvas.getByText("Please fix the following errors before submitting.")).toBeInTheDocument();
    });
  }
};

// export const OnChange: Story = {
//   render: function Render(args: any) {
//     const [submission, setSubmission] = useState<any>(() => {});
//     const props = wrap(args);
//
//     const onChange = useDebouncedCallback((value) => {
//       setSubmission(value);
//     }, 1000);
//
//     return (
//       <div>
//         <Form
//           {...props}
//           options={{ template: "tailwind", iconset: "bx", readOnly: args.readOnly }}
//           form={args.form}
//           submission={submission}
//           onChange={onChange}
//         />
//         <div className={"mt-5"}>
//           <h4>Result:</h4>
//           <pre className='bg-gray-200 p-4 text-sm'>
//             <code>{JSON.stringify(submission?.data, null, 2)}</code>
//           </pre>
//         </div>
//       </div>
//     );
//   },
//
//   args: {
//     form: formFirstname as any
//   }
// };
