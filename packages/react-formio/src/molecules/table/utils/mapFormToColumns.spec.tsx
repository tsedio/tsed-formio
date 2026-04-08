import { DefaultCellBoolean } from "../components/DefaultBooleanCell";
import { DefaultCell } from "../components/DefaultCell";
import { DefaultDateCell } from "../components/DefaultDateCell";
import { mapFormToColumns } from "./mapFormToColumns";

describe("mapFormToColumns", () => {
  it("should use DefaultCellBoolean for mapped checkbox table columns", () => {
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

    const [column] = mapFormToColumns({ form: form }) as any[];

    expect(column.accessorKey).toEqual("data.enabled");
    expect(column.header).toEqual("Enabled");
    expect(column.meta.type).toEqual("boolean");
    expect(column.meta.filter.variant).toEqual("boolean");
    expect(column.cell).toBe(DefaultCellBoolean);
  });

  it("should fallback to DefaultCell for kept columns without a cell renderer", () => {
    const form = {
      components: []
    } as any;

    const [column] = mapFormToColumns({ form: form, columns: [{ accessorKey: "data.other", header: "Other" } as any] }) as any[];

    expect(column.accessorKey).toEqual("data.other");
    expect(column.cell).toBe(DefaultCell);
  });

  it("should merge a kept column matched by component key", () => {
    const form = {
      components: [
        {
          type: "textfield",
          key: "name",
          label: "Name:",
          tableView: true
        }
      ]
    } as any;

    const [column] = mapFormToColumns({
      form: form,
      columns: [
        {
          id: "name",
          header: "Custom name",
          meta: {
            order: 5,
            filter: {
              variant: "text"
            }
          }
        } as any
      ]
    }) as any[];

    expect(column.accessorKey).toEqual("data.name");
    expect(column.header).toEqual("Custom name");
    expect(column.meta.order).toEqual(5);
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

    const [column] = mapFormToColumns({ form: form }) as any[];

    expect(column.accessorKey).toEqual("data.createdAt");
    expect(column.meta.type).toEqual("date");
    expect(column.cell).toBe(DefaultDateCell);
  });

  it("should dedupe columns when a kept column matches a mapped accessor key", () => {
    const form = {
      components: [
        {
          type: "textfield",
          key: "email",
          label: "Email:",
          tableView: true
        }
      ]
    } as any;

    const columns = mapFormToColumns({
      form: form,
      columns: [
        {
          accessorKey: "data.email",
          header: "Email"
        } as any
      ]
    }) as any[];

    expect(columns).toHaveLength(1);
    expect(columns[0].accessorKey).toEqual("data.email");
  });
});
