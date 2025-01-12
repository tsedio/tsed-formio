import "./all";

import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, waitFor, within } from "@storybook/test";

import { SubmissionType } from "../../interfaces";
import FormType from "../__fixtures__/form-schema.json";
import formSubmissions from "../__fixtures__/form-submissions.json";
import { Table } from "./Table";
import { mapFormToColumns } from "./utils/mapFormToColumns";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type ProductSubmission = SubmissionType<{
  id: string;
  label: string;
  description: string;
  image: string;
  price?: number;
  currency?: string;
}>;

export default {
  title: "Table",
  component: Table,
  argTypes: {
    onClick: {
      description: "Click event",
      action: "onClick"
    },
    onChange: {
      description: "Change event",
      action: "onChange"
    }
  },
  parameters: {}
} satisfies Meta<typeof Table>;

type Story = StoryObj<typeof Table<ProductSubmission>>;

export const Usage: Story = {
  args: {
    data: formSubmissions as ProductSubmission[],
    columns: mapFormToColumns(FormType as any),
    operations: [
      {
        title: "Edit",
        action: "edit",
        alias: "row",
        path: "/resources/:resourceId/submissions/:submissionId",
        icon: "edit"
      },
      {
        action: "delete",
        path: "/resources/:resourceId/submissions/:submissionId/delete",
        icon: "trash",
        buttonType: "danger",
        permissionsResolver({ data }: any) {
          return data.id === "CSKC";
        }
      }
    ],
    i18n: (f: string) => f,
    onClick: fn(),
    onChange: fn()
  },
  async play({ canvasElement, args }) {
    const canvas = within(canvasElement);

    // check headers information
    await expect(canvas.getByTestId("head-cell-data_id")).toHaveTextContent("Id");
    await expect(canvas.getByTestId("head-cell-data_label")).toHaveTextContent("Label");

    // check body information
    await expect(canvas.getByTestId("body-row-0")).toBeDefined();
    await expect(canvas.getByTestId("body-cell-0_data_id")).toHaveTextContent("CSKC");
    await expect(canvas.getByTestId("body-cell-0_data_label")).toHaveTextContent("Cap Skirring");

    const editButton = canvas.getByTestId("operation-0-edit");

    await userEvent.click(editButton);

    await expect(args.onClick).toHaveBeenCalledWith(formSubmissions[0], args.operations[0]);

    const deleteButton = canvas.getByTestId("operation-0-delete");

    await userEvent.click(deleteButton);
    await expect(args.onClick).toHaveBeenCalledWith(formSubmissions[0], args.operations[1]);

    await expect(canvas.queryByTestId("operation-1-delete")).not.toBeInTheDocument();

    // check sorting
    const sortId = canvas.getByTestId("head-sort-data_id");
    const thId = canvas.getByTestId("head-cell-data_id");

    await userEvent.click(sortId, { delay: 200 });

    await expect(args.onChange).toHaveBeenCalledWith({
      columnSizing: {},
      columnSizingInfo: {
        startOffset: null,
        startSize: null,
        deltaOffset: null,
        deltaPercentage: null,
        isResizingColumn: false,
        columnSizingStart: []
      },
      rowSelection: {},
      rowPinning: { top: [], bottom: [] },
      expanded: {},
      grouping: [],
      sorting: [],
      columnFilters: [],
      columnPinning: { left: [], right: [] },
      columnOrder: [],
      columnVisibility: {},
      pagination: { pageIndex: 0, pageSize: 10 }
    });

    await expect(sortId).toHaveAttribute("aria-pressed", "false");
    await expect(thId).toHaveAttribute("aria-sort", "ascending");

    await userEvent.click(sortId, { delay: 200 });

    await expect(sortId).toHaveAttribute("aria-pressed", "true");
    await expect(thId).toHaveAttribute("aria-sort", "descending");

    await userEvent.click(sortId, { delay: 200 });

    await expect(sortId).not.toHaveAttribute("aria-pressed");
    await expect(thId).toHaveAttribute("aria-sort", "none");

    // check filtering
    const filterLabel = canvas.getByTestId("input_filter_data_label");

    await userEvent.type(filterLabel, "La caravelle", { delay: 200 });

    await waitFor(() => {
      return expect(canvas.queryByText("MPEC")).not.toBeInTheDocument();
    });

    await expect(canvas.getByText("La Caravelle")).toBeInTheDocument();

    await delay(300);

    await userEvent.clear(filterLabel);
  }
};

export const WithFilters: Story = {
  args: {
    data: formSubmissions as ProductSubmission[],
    columns: mapFormToColumns(FormType as any, [
      {
        accessorKey: "data.id",
        meta: {
          filter: {
            variant: "select",
            layout: "react"
          }
        }
      }
    ]),
    operations: [
      {
        title: "Edit",
        action: "edit",
        alias: "row",
        path: "/resources/:resourceId/submissions/:submissionId",
        icon: "edit"
      },
      {
        action: "delete",
        path: "/resources/:resourceId/submissions/:submissionId/delete",
        icon: "trash",
        buttonType: "danger",
        permissionsResolver({ data }: any) {
          return data.id === "MPEC";
        }
      }
    ],
    i18n: (f: string) => f,
    onClick: fn()
  }
};

export const WithCustomCell: Story = {
  args: {
    data: formSubmissions as ProductSubmission[],
    columns: mapFormToColumns<ProductSubmission>(FormType as any, [
      {
        accessorKey: "data.id",
        meta: {
          filter: {
            variant: "select",
            layout: "react"
          },
          cellProps: {
            colSpan: 2
          }
        },
        cell: (context) => {
          return (
            <div className='flex space-x-4 align-items-center'>
              <div className='max-w-[80px]'>
                <img className='max-w-[80px] rounded-md' src={context.row.original.data.image} alt={context.row.original.data.label} />
              </div>
              <div>
                <div className='text-lg text-primary'>{context.row.original.data.label}</div>
                <div className='text-xs'>{context.getValue()}</div>
              </div>
            </div>
          );
        }
      },
      {
        accessorKey: "data.label",
        meta: {
          hidden: true
        }
      },
      {
        accessorKey: "data.description",
        meta: {
          filter: {
            variant: "text",
            disableDatalist: true
          }
        }
      },
      {
        accessorKey: "data.price",
        cell: (context) => {
          const value = context.getValue();

          if (value === undefined) {
            return "-";
          }

          return (
            <div className='text-right'>
              {Intl.NumberFormat("fr-FR", {
                style: "currency",
                currency: context.row.original.data.currency
              }).format(context.getValue())}
            </div>
          );
        }
      }
    ]),
    operations: [
      {
        title: "Edit",
        action: "edit",
        alias: "row",
        path: "/resources/:resourceId/submissions/:submissionId",
        icon: "edit"
      },
      {
        action: "delete",
        path: "/resources/:resourceId/submissions/:submissionId/delete",
        icon: "trash",
        buttonType: "danger",
        permissionsResolver({ data }: any) {
          return data.id === "MPEC";
        }
      }
    ],
    i18n: (f: string) => f,
    onClick: fn()
  }
};
