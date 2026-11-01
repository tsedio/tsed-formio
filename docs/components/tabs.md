# Tabs

::: tip Storybook
Browse the props, controls and all the stories of `Tabs` in [Storybook](storybook:/docs/molecules-tabs--docs).
:::

The `Tabs` components organize content in panels displayed one at a time. They are composable: `Tabs` holds the
selected tab, `TabList` renders the tab buttons, `Tab` is a single button, `TabsBody` wraps the panels and `TabPanel` is
displayed when its `value` matches the selected tab. Tabs support keyboard navigation (arrow keys, `Home` / `End`, with
RTL support) and the `tab` / `tabpanel` ARIA roles.

## Usage

```tsx
import { Tab, TabList, TabPanel, Tabs, TabsBody } from "@tsed/react-formio/molecules/tabs/all";

<Tabs selected={0}>
  <TabList>
    <Tab value={0} icon="edit">Edit</Tab>
    <Tab value={1} icon="data">Data</Tab>
    <Tab value={2} icon="test-tube" onClick={(value) => console.log(value)}>
      Preview
    </Tab>
  </TabList>
  <TabsBody>
    <TabPanel value={0}>Edit content</TabPanel>
    <TabPanel value={1}>Data content</TabPanel>
    <TabPanel value={2}>Preview content</TabPanel>
  </TabsBody>
</Tabs>;
```

Each component can also be imported from its own module, for example `@tsed/react-formio/molecules/tabs/Tab`.

<StoryEmbed id="molecules-tabs--usage" height="300px" />

## Props

### Tabs

| Name        | Type            | Default | Description                              |
|-------------|-----------------|---------|------------------------------------------|
| `selected`  | `number`        | `0`     | Value of the tab selected on mount.      |
| `className` | `string`        |         | Additional CSS classes.                  |
| `style`     | `CSSProperties` |         | Inline style of the tabs root.           |

`selected` is only used as the initial value: the selected tab is then managed by the component.

### Tab

| Name        | Type                      | Default | Description                                                                             |
|-------------|---------------------------|---------|-----------------------------------------------------------------------------------------|
| `value`     | `number`                  |         | Value of the tab, matched against the `value` of a `TabPanel`.                          |
| `icon`      | `string`                  |         | Icon displayed before the label.                                                        |
| `onClick`   | `(value: number) => void` |         | Called when the tab becomes active (by click or keyboard).                              |
| `after`     | `ReactNode`               |         | Content rendered inside the button, after the label.                                    |
| `className` | `string`                  |         | Additional CSS classes on the tab wrapper (for example `-reverse` to put the icon after the label). |
| `children`  | `ReactNode`               |         | Label of the tab.                                                                       |

### TabList

`TabList` renders the tab buttons in a `tablist`. Its `Tab` children are grouped together, the other children are
rendered before or after them depending on their position, which lets you add extra controls (see below).

### TabPanel

| Name        | Type        | Default | Description                                                      |
|-------------|-------------|---------|------------------------------------------------------------------|
| `value`     | `number`    |         | Value of the panel, displayed when the matching tab is selected. |
| `className` | `string`    |         | Additional CSS classes.                                          |
| `children`  | `ReactNode` |         | Content of the panel.                                            |

### TabsBody

`TabsBody` wraps the `TabPanel` components. It has no props besides `children`.

## Examples

### With selected tab

Open the tabs on a given tab with `selected`:

<StoryEmbed id="molecules-tabs--with-selected-tab" height="300px" />

### With extra controls

Non-`Tab` children of `TabList` are rendered before or after the tab buttons:

```tsx
import { Icon } from "@tsed/react-formio/atoms/icon/Icon";
import { Button } from "@tsed/react-formio/molecules/button/Button";
import { Tab, TabList, TabPanel, Tabs, TabsBody } from "@tsed/react-formio/molecules/tabs/all";

<Tabs>
  <TabList>
    <Button variant="link" aria-label="Previous tab">
      <Icon name="chevron-left" />
    </Button>
    <Tab value={0}>Edit</Tab>
    <Tab value={1}>Data</Tab>
    <Button variant="link" aria-label="Add tab">
      <Icon name="plus" />
    </Button>
  </TabList>
  <TabsBody>
    <TabPanel value={0}>Edit content</TabPanel>
    <TabPanel value={1}>Data content</TabPanel>
  </TabsBody>
</Tabs>;
```

<StoryEmbed id="molecules-tabs--with-extra-controls" height="300px" />

## Legacy tabs

::: tip Storybook
See `TabsLegacy` in [Storybook](storybook:/docs/molecules-tabslegacy--docs).
:::

`TabsLegacy` builds the tabs from a list of items. It is kept for the components using the previous tabs API.

```tsx
import { TabsLegacy } from "@tsed/react-formio/molecules/tabs/TabsLegacy";

<TabsLegacy
  items={[
    { label: "Edit", icon: "edit", children: <div>Edit</div> },
    { label: "Data", icon: "data", children: <div>Data</div> }
  ]}
  onClick={(item) => console.log(item.label)}
/>;
```

| Name             | Type                            | Default | Description                                                                         |
|------------------|---------------------------------|---------|-------------------------------------------------------------------------------------|
| `items`          | `TabsItemProps[]`               | `[]`    | Tabs to display: `label`, `icon` and `children` (or `content`). Items without `label` and `icon` are ignored. |
| `onClick`        | `(item: TabsItemProps) => void` |         | Called with the item when a tab becomes active.                                     |
| `current`        | `TabsItemProps`                 |         | Current item, passed to `AddButton` and `HeaderChildren`.                           |
| `AddButton`      | `ComponentType`                 |         | Component rendered after the tab buttons.                                           |
| `HeaderChildren` | `ComponentType`                 |         | Component rendered below the tab list.                                              |
| `after`          | `ReactNode`                     |         | Content rendered in each tab button, after the label.                               |
| `reverse`        | `boolean`                       |         | Adds the `-reverse` class to each tab.                                              |
| `i18n`           | `FormOptions["i18n"]`           |         | Translations of the tab labels.                                                     |
| `className`      | `string`                        |         | Additional CSS classes.                                                             |
| `style`          | `CSSProperties`                 |         | Inline style of the tabs root.                                                      |

Extra props are passed to `AddButton` and `HeaderChildren`.

<StoryEmbed id="molecules-tabslegacy--sandbox" height="300px" />

## Override

`Tabs`, `TabList`, `Tab`, `TabsBody` and `TabPanel` are registered in the components registry with their own name.
`TabsLegacy` resolves them from the registry. See [Registering react components](/guide/register-react-component).

```tsx
import { registerComponent } from "@tsed/react-formio/registries/components";

registerComponent("Tab", MyCustomTab);
```
