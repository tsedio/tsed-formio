import { DefaultCell } from "../components/DefaultCell";
import { DefaultDateCell } from "../components/DefaultDateCell";
import { mapFormToColumns } from "./mapFormToColumns";

describe("mapFormToColumns", () => {
  it("should use DefaultCell for mapped table columns", () => {
    const form = {
      components: [
        {
          type: "checkbox",
          key: "enabled",
          label: "Enabled:",
          tableView: true
        }
      ]
    } as any;

    const [column] = mapFormToColumns(form) as any[];

    expect(column.accessorKey).toEqual("data.enabled");
    expect(column.header).toEqual("Enabled");
    expect(column.meta.filter.variant).toEqual("boolean");
    expect(column.cell).toBe(DefaultCell);
  });

  it("should fallback to DefaultCell for kept columns without a cell renderer", () => {
    const form = {
      components: []
    } as any;

    const [column] = mapFormToColumns(form, [{ accessorKey: "data.other", header: "Other" } as any]) as any[];

    expect(column.accessorKey).toEqual("data.other");
    expect(column.cell).toBe(DefaultCell);
  });

  it("should use DefaultDateCell for mapped datetime columns", () => {
    const form = {
      components: [
        {
          type: "datetime",
          key: "createdAt",
          label: "Created at:",
          tableView: true
        }
      ]
    } as any;

    const [column] = mapFormToColumns(form) as any[];

    expect(column.accessorKey).toEqual("data.createdAt");
    expect(column.meta.type).toEqual("date");
    expect(column.cell).toBe(DefaultDateCell);
  });
});
