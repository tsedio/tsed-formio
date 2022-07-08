import { screen } from "@testing-library/react";
import { render } from "@testing-library/react";

import { Form } from "./form.component";

async function createFixture(props: any = {}) {
  const onSubmit = jest.fn();
  const form = {
    type: "form",
    display: "form",
    tags: [],
    components: [
      {
        label: "First name",
        placeholder: "Fill first name",
        widget: {
          type: "input"
        },
        errorLabel: "",
        key: "firstName",
        inputType: "text",
        type: "textfield",
        id: "eqb1o4r",
        defaultValue: ""
      },
      {
        label: "Submit form",
        showValidations: false,
        tableView: false,
        key: "submit",
        type: "button",
        input: true
      }
    ]
  };

  render(<Form {...props} form={form} onSubmit={onSubmit} />);

  return { onSubmit };
}

describe("Form", () => {
  it("should render the Form", async () => {
    await createFixture({
      data: [],
      model: "MyForm",
      groups: ["creation"],
      params: {
        env: "prod"
      },
      isActive: false
    });

    expect(screen.getByTestId("formioContainer")).toBeInTheDocument();
    expect(screen.getByText("First name")).toBeInTheDocument();
  });
});
