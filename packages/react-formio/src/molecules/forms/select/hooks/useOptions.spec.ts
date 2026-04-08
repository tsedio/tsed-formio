import { mapOptions } from "./useOptions";

describe("mapOptions", () => {
  it("should map options correctly", () => {
    expect(
      mapOptions([
        {
          label: "Option 1",
          value: "option-1"
        },
        {
          label: "Option 2",
          value: "option-2",
          disabled: true
        },
        {
          label: "Option 3",
          value: "option-3"
        }
      ])
    ).toEqual([
      {
        label: "Option 1",
        value: "option-1"
      },
      {
        label: "Option 2",
        value: "option-2",
        disabled: true
      },
      {
        label: "Option 3",
        value: "option-3"
      }
    ]);
  });
  it("should map options correctly group (legacy)", () => {
    expect(
      mapOptions([
        {
          label: "Option 1",
          group: "group-1",
          value: "option-1"
        },
        {
          group: "group-1",
          label: "Option 2",
          value: "option-2"
        },
        {
          label: "Option 3",
          group: "group-2",
          value: "option-3"
        },
        {
          group: "group-2",
          label: "Option 4",
          value: "option-4"
        }
      ])
    ).toEqual([
      {
        label: "group-1",
        options: [
          {
            label: "Option 1",
            group: "group-1",
            value: "option-1"
          },
          {
            label: "Option 2",
            group: "group-1",
            value: "option-2"
          }
        ]
      },
      {
        label: "group-2",
        options: [
          {
            label: "Option 3",
            value: "option-3",
            group: "group-2"
          },
          {
            label: "Option 4",
            value: "option-4",
            group: "group-2"
          }
        ]
      }
    ]);
  });

  it("should map options correctly group (new)", () => {
    expect(
      mapOptions([
        {
          label: "Group 1",
          options: [
            {
              label: "group-1",
              value: "option-1"
            },
            {
              label: "Option 2",
              value: "option-2"
            }
          ]
        },
        {
          label: "Group 2",
          options: [
            {
              label: "Option 3",
              value: "option-3"
            },
            {
              label: "Option 4",
              value: "option-4"
            }
          ]
        }
      ])
    ).toEqual([
      {
        label: "Group 1",
        options: [
          {
            label: "group-1",
            value: "option-1"
          },
          {
            label: "Option 2",
            value: "option-2"
          }
        ]
      },
      {
        label: "Group 2",
        options: [
          {
            label: "Option 3",
            value: "option-3"
          },
          {
            label: "Option 4",
            value: "option-4"
          }
        ]
      }
    ]);
  });
});
