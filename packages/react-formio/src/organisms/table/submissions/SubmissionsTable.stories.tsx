import "../../../molecules/button/Button";
import "../../../molecules/forms/input-text/InputText";
import "../../../molecules/forms/select/all";
import "../../../molecules/pagination/all";
import "../../../molecules/table/all";

import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { mapPagination } from "../../../utils/mapPagination";
import FormSchema from "../../__fixtures__/form-schema.json";
import formSubmissions from "../../__fixtures__/form-submissions.json";
import { SubmissionsTable } from "./SubmissionsTable";

function Wrapper(args: any) {
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);
  const [serverCount] = useState(87);

  const onChange = (obj: any) => {
    setLimit(obj.pageSize);
    setSkip(obj.pageIndex * obj.pageSize);
    args.onChange && args.onChange(obj);
  };

  return (
    <SubmissionsTable
      {...args}
      onChange={onChange}
      {...mapPagination({
        skip,
        limit,
        serverCount
      })}
    />
  );
}

/**
 * SubmissionsTable component displays form submissions in a table format with filtering,
 * pagination, and action buttons for each submission.
 *
 * ```tsx
 * import { SubmissionsTable } from "@tsed/react-formio/organisms/table/submissions/SubmissionsTable";
 * ```
 */
export default {
  title: "table/submissions/SubmissionsTable",
  component: SubmissionsTable,
  argTypes: {
    form: {
      description: "The form schema used to determine table columns",
      control: "object"
    },
    data: {
      description: "Array of submission data to display in the table",
      control: "object"
    },
    operations: {
      description: "Array of operations/actions available for each submission",
      control: "object"
    },
    onChange: {
      description: "Callback when table state changes (sorting, filtering, pagination)",
      action: "onChange"
    },
    i18n: {
      description: "Internationalization function"
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          "Component that displays form submissions in a table format with filtering, pagination, and action buttons for each submission."
      }
    }
  },
  args: {
    form: FormSchema as any,
    data: formSubmissions,
    operations: [
      {
        title: "Edit",
        action: "edit",
        alias: "row",
        path: "/resources/:resourceId/submissions/:submissionId",
        icon: "edit",
        permissionsResolver() {
          return true;
        }
      },
      {
        action: "delete",
        path: "/resources/:resourceId/submissions/:submissionId/delete",
        icon: "trash",
        buttonType: "danger",
        permissionsResolver() {
          return true;
        }
      }
    ]
  },
  render: Wrapper
} satisfies Meta<typeof SubmissionsTable>;

type Story = StoryObj<typeof SubmissionsTable>;

/**
 * Standard table with default settings
 */
export const Default: Story = {};

/**
 * Empty table with no data
 */
export const Empty: Story = {
  args: {
    data: []
  }
};

/**
 * Table with custom translations
 */
export const Translated: Story = {
  args: {
    i18n: (key: string) => {
      const translations: Record<string, string> = {
        "Search...": "Rechercher...",
        "No results found": "Aucun résultat trouvé",
        "Loading...": "Chargement...",
        Page: "Page",
        of: "sur",
        rows: "lignes",
        Edit: "Éditer",
        Delete: "Supprimer"
      };
      return translations[key] || key;
    }
  }
};
