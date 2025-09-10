import "../../molecules/button/Button";
import "../../molecules/forms/input-text/InputText";
import "../../molecules/forms/select/all";
import "../../molecules/forms/form-control/FormControl";
import "../../molecules/pagination/all";
import "../../molecules/table/all";
import "../../molecules/tabs/all";
import "../../molecules/card/Card";
import "../form/builder/all";
import "../form/Form";

import { Meta, StoryObj } from "@storybook/react-vite";

import ActionsTableStory from "../table/actions/ActionsTable.stories.js";
import SubmissionsTableStory from "../table/submissions/SubmissionsTable.stories.js";
import { FormViews } from "./FormViews.js";

/**
 * FormViews component displays a tabbed interface for managing forms with tabs for editing,
 * viewing submissions, previewing, managing actions, controlling access, exporting, and configuring settings.
 *
 * ```tsx
 * import { FormViews } from "@tsed/react-formio/organisms/views/FormViews";
 * ```
 *
 * ## Implementation
 *
 * ```tsx
 * import type { FormType } from "../../interfaces/index.js";
 * import type { Tab as DefaultTab } from "../../molecules/tabs/Tab.js";
 * import type { TabList as DefaultTabList } from "../../molecules/tabs/TabList.js";
 * import type { TabPanel as DefaultTabPanel } from "../../molecules/tabs/TabPanel.js";
 * import type { Tabs as DefaultTabs } from "../../molecules/tabs/Tabs.js";
 * import type { TabsBody as DefaultTabsBody } from "../../molecules/tabs/TabsBody.js";
 * import { getComponent } from "../../registries/components.js";
 * import { FormAccess, type FormAccessProps } from "../form/access/FormAccess.js";
 * import { FormEdit, type FormEditProps } from "../form/builder/FormEdit.js";
 * import { FormExport } from "../form/exports/FormExport.js";
 * import { FormPreview } from "../form/preview/FormPreview.js";
 * import { FormSettings } from "../form/settings/FormSettings.js";
 * import { ActionsTable, type ActionsTableProps } from "../table/actions/ActionsTable.js";
 * import { SubmissionsTable, type SubmissionsTableProps } from "../table/submissions/SubmissionsTable.js";
 *
 * export type FormViewsProps = {
 *   form: FormEditProps["form"];
 *   submissions: SubmissionsTableProps["data"];
 *   availableActions: ActionsTableProps["availableActions"];
 *   actions: ActionsTableProps["data"];
 *   roles?: FormAccessProps["roles"];
 *   i18n?: (key: string) => string;
 *   onAction: () => void;
 *   operations: SubmissionsTableProps["operations"];
 * };
 *
 * export function FormViews({ form, roles, availableActions, actions, submissions, operations, i18n = (f) => f }: FormViewsProps) {
 *   const Tabs = getComponent<typeof DefaultTabs>("Tabs");
 *   const TabList = getComponent<typeof DefaultTabList>("TabList");
 *   const Tab = getComponent<typeof DefaultTab>("Tab");
 *   const TabsBody = getComponent<typeof DefaultTabsBody>("TabsBody");
 *   const TabPanel = getComponent<typeof DefaultTabPanel>("TabPanel");
 *
 *   return (
 *     <Tabs>
 *       <TabList>
 *         <Tab value={0} icon='edit'>
 *           {i18n("Edit")}
 *         </Tab>
 *         <Tab value={1} icon='data'>
 *           {i18n("Data")}
 *         </Tab>
 *         <Tab value={2} icon='test-tube'>
 *           {i18n("Preview")}
 *         </Tab>
 *         <Tab value={3} icon='paper-plane'>
 *           {i18n("Actions")}
 *         </Tab>
 *         <Tab value={4} icon='lock'>
 *           {i18n("Access")}
 *         </Tab>
 *         <Tab value={5} icon='download'>
 *           {i18n("Export")}
 *         </Tab>
 *         <Tab value={6} icon='cog'>
 *           {i18n("Settings")}
 *         </Tab>
 *       </TabList>
 *       <TabsBody>
 *         <TabPanel value={0} className='p-3 border-l-1 border-b-1 border-r-1 border-gray-300'>
 *           <FormEdit form={form} options={{ i18n }} />
 *         </TabPanel>
 *         <TabPanel value={1}>
 *           <SubmissionsTable className={"border-top-0"} form={form as FormType} data={submissions} i18n={i18n} operations={operations} />
 *         </TabPanel>
 *         <TabPanel value={2}>
 *           <FormPreview form={form as FormType} i18n={i18n} />
 *         </TabPanel>
 *         <TabPanel value={3}>
 *           <ActionsTable className={"border-top-0"} availableActions={availableActions} data={actions} operations={[]} i18n={i18n} />
 *         </TabPanel>
 *         <TabPanel value={4} className='pt-3'>
 *           <FormAccess form={form as FormType} roles={roles} options={{ i18n }} />
 *         </TabPanel>
 *         <TabPanel value={5} className='pt-3'>
 *           <FormExport i18n={i18n} />
 *         </TabPanel>
 *         <TabPanel value={6} className='p-3 border-l-1 border-b-1 border-r-1 border-gray-300'>
 *           <FormSettings form={form as FormType} options={{}} />
 *         </TabPanel>
 *       </TabsBody>
 *     </Tabs>
 *   );
 * }
 * ```
 */
export default {
  title: "views/FormViews",
  component: FormViews,
  argTypes: {
    form: {
      description: "The form object to manage",
      control: "object"
    },
    submissions: {
      description: "Submission data to display in the Data tab",
      control: "object"
    },
    // operations: {
    //   description: "Operations available for submissions",
    //   control: "object"
    // },
    roles: {
      description: "Roles for access control",
      control: "object"
    },
    i18n: {
      description: "Internationalization function"
    },
    onAction: {
      action: "onAction",
      description: "Callback when an action is triggered"
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          "Component that displays a tabbed interface for managing forms with tabs for editing, viewing submissions, previewing, managing actions, controlling access, exporting, and configuring settings."
      }
    }
  }
} satisfies Meta<typeof FormViews>;

type Story = StoryObj<typeof FormViews>;

/**
 * Basic form view with a simple form
 */
export const Usage: Story = {
  args: {
    form: SubmissionsTableStory.args.form as any,
    submissions: SubmissionsTableStory.args.data as any,
    // operations: SubmissionsTableStory.args.operations,
    actions: ActionsTableStory.args.data as any,
    roles: [
      {
        _id: "1",
        title: "Administrator"
      },
      {
        _id: "2",
        title: "Authenticated"
      },
      {
        _id: "3",
        title: "Anonymous"
      }
    ],
    i18n: (key: string) => key,
    onAction: () => console.log("Action triggered")
  }
};

/**
 * Form view with translated labels
 */
export const Translated: Story = {
  args: {
    form: SubmissionsTableStory.args.form as any,
    submissions: SubmissionsTableStory.args.data as any,
    // operations: SubmissionsTableStory.args.operations,
    actions: ActionsTableStory.args.data as any,
    roles: [
      {
        _id: "1",
        title: "Administrator"
      },
      {
        _id: "2",
        title: "Authenticated"
      },
      {
        _id: "3",
        title: "Anonymous"
      }
    ],
    i18n: (key: string) => {
      const translations: Record<string, string> = {
        Edit: "Éditer",
        Data: "Données",
        Preview: "Aperçu",
        Actions: "Actions",
        Access: "Accès",
        Export: "Exporter",
        Settings: "Paramètres",
        "Form with First Name": "Formulaire avec prénom",
        "First name": "Prénom",
        "Last name": "Nom de famille",
        Submit: "Soumettre"
      };
      return translations[key] || key;
    },
    onAction: () => console.log("Action triggered")
  }
};
