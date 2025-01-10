import { fireEvent, render, screen } from "@testing-library/react";

import { FormSettings } from "./FormSettings";
import { Sandbox } from "./FormSettings.stories";

describe("FormSettings", () => {
  it("should render form settings", () => {
    const onSubmit = vi.fn();

    // @ts-ignore
    Sandbox.args.form.action = "https://test";

    render(
      <Sandbox
        {...Sandbox.args}
        onSubmit={onSubmit}
        options={{
          i18n: (f: string) => f + " i18N"
        }}
      />
    );

    const btn = screen.getByTestId("submit");

    fireEvent.click(btn);

    expect(btn).toHaveTextContent("Save settings");
    expect(onSubmit).toHaveBeenCalledWith({
      _id: "6023f8fe4b1a2ab9a3aae096",
      access: [
        {
          roles: ["5d0797bc872fc747da559858", "5d0797bc872fc71d05559859", "5d0797bc872fc7da3b55985a"],
          type: "read_all"
        }
      ],
      action: "https://test",
      controller: "",
      machineName: "tcspjwhsevrzpcd:textField",
      name: "textField",
      owner: "5d0797a382461b6656d2c790",
      path: "textfield",
      properties: {},
      settings: {},
      submissionAccess: [{ roles: ["5d0797bc872fc747da559858"], type: "read_all" }],
      tags: [],
      type: "form"
    });
  });
  it("should render form settings with i18n options", () => {
    render(
      <FormSettings
        {...Sandbox.args}
        options={{
          i18n: (f: string) => f + " i18N"
        }}
      />
    );

    const btn = screen.getByTestId("submit");

    fireEvent.click(btn);

    expect(btn).toHaveTextContent("Save settings i18N");
  });
});
