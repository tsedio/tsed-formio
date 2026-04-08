import { useI18n } from "../../hooks/useI18n.js";
import type { FormOptions, FormType, PermissionsResolver } from "../../interfaces/index.js";
import type { JSONRecord } from "../../interfaces/JSONRecord.js";
import type { Tab as DefaultTab } from "../../molecules/tabs/Tab.js";
import type { TabList as DefaultTabList } from "../../molecules/tabs/TabList.js";
import type { TabPanel as DefaultTabPanel } from "../../molecules/tabs/TabPanel.js";
import type { Tabs as DefaultTabs } from "../../molecules/tabs/Tabs.js";
import type { TabsBody as DefaultTabsBody } from "../../molecules/tabs/TabsBody.js";
import { getComponent } from "../../registries/components.js";
import { FormAccess, type FormAccessProps } from "../form/access/FormAccess.js";
import { FormEdit, type FormEditProps } from "../form/builder/FormEdit.js";
import { FormExport } from "../form/exports/FormExport.js";
import { FormPreview } from "../form/preview/FormPreview.js";
import { FormSettings } from "../form/settings/FormSettings.js";
import { ActionsTable, type ActionsTableProps } from "../table/actions/ActionsTable.js";
import { SubmissionsTable, type SubmissionsTableProps } from "../table/submissions/SubmissionsTable.js";

export type FormViewsProps<Data extends object = JSONRecord> = {
  form: FormEditProps["form"];
  submissions: SubmissionsTableProps<Data>["data"];
  availableActions: ActionsTableProps["availableActions"];
  actions: ActionsTableProps["data"];
  roles?: FormAccessProps["roles"];
  i18n?: FormOptions["i18n"];
  onAction: () => void;
  permissionsResolver?: PermissionsResolver<Data>;
};

function useSubmissionsOperations<Data extends object = JSONRecord>(permissionsResolver?: PermissionsResolver<Data>) {
  return [
    {
      title: "Edit",
      action: "submission:edit",
      alias: "row",
      icon: "edit",
      permissionsResolver
    },
    {
      action: "submission:delete",
      icon: "trash",
      buttonType: "danger",
      permissionsResolver
    }
  ] as SubmissionsTableProps<Data>["operations"];
}

function useActionsOperations<Data extends object = JSONRecord>(permissionsResolver?: PermissionsResolver<Data>) {
  return [
    {
      title: "Edit",
      action: "action:edit",
      alias: "row",
      icon: "edit",
      permissionsResolver
    },
    {
      action: "action:delete",
      icon: "trash",
      buttonType: "danger",
      permissionsResolver
    }
  ] as SubmissionsTableProps<Data>["operations"];
}

export function FormViews<Data extends object = JSONRecord>({
  form,
  roles,
  availableActions,
  actions,
  permissionsResolver,
  submissions,
  ...props
}: FormViewsProps<Data>) {
  const { t } = useI18n(props.i18n);
  const Tabs = getComponent<typeof DefaultTabs>("Tabs");
  const TabList = getComponent<typeof DefaultTabList>("TabList");
  const Tab = getComponent<typeof DefaultTab>("Tab");
  const TabsBody = getComponent<typeof DefaultTabsBody>("TabsBody");
  const TabPanel = getComponent<typeof DefaultTabPanel>("TabPanel");
  const submissionsOperations = useSubmissionsOperations<Data>(permissionsResolver);
  const actionsOperations = useActionsOperations<any>(permissionsResolver);

  return (
    <Tabs>
      <TabList>
        <Tab value={0} icon='edit'>
          {t("Edit")}
        </Tab>
        <Tab value={1} icon='data'>
          {t("Data")}
        </Tab>
        <Tab value={2} icon='test-tube'>
          {t("Preview")}
        </Tab>
        <Tab value={3} icon='paper-plane'>
          {t("Actions")}
        </Tab>
        <Tab value={4} icon='lock'>
          {t("Access")}
        </Tab>
        <Tab value={5} icon='download'>
          {t("Export")}
        </Tab>
        <Tab value={6} icon='cog'>
          {t("Settings")}
        </Tab>
      </TabList>
      <TabsBody>
        <TabPanel value={0} className='p-3 border-l-1 border-b-1 border-r-1 border-gray-300'>
          <FormEdit form={form} />
        </TabPanel>
        <TabPanel value={1}>
          <SubmissionsTable<Data>
            className={"border-top-0"}
            form={form as FormType}
            data={submissions}
            i18n={props.i18n}
            operations={submissionsOperations}
          />
        </TabPanel>
        <TabPanel value={2}>
          <FormPreview form={form as FormType} i18n={props.i18n} />
        </TabPanel>
        <TabPanel value={3}>
          <ActionsTable
            className={"border-top-0"}
            availableActions={availableActions}
            data={actions}
            operations={actionsOperations as any}
            i18n={props.i18n}
          />
        </TabPanel>
        <TabPanel value={4} className='pt-3'>
          <FormAccess form={form as FormType} roles={roles} options={props} />
        </TabPanel>
        <TabPanel value={5} className='pt-3'>
          <FormExport i18n={props.i18n} />
        </TabPanel>
        <TabPanel value={6} className='p-3 border-l-1 border-b-1 border-r-1 border-gray-300'>
          <FormSettings form={form as FormType} options={{}} />
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
}
