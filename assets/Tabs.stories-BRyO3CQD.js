import{j as e}from"./jsx-runtime-C-tXp4WL.js";import{T as o,a as b,b as m,c as p,d as v}from"./TabsBody-SDmFRyF_.js";import{I as x}from"./Icon-DeTuR5t6.js";import{a as h}from"./Button-DZgHB-e5.js";import"./iframe-ADnK4W05.js";import"./preload-helper-D9Z9MdNV.js";import"./clsx-B-dksMZM.js";import"./components-B7KBuUpW.js";import"./iconClass-Dz4BhXbm.js";const{expect:i,fn:g,userEvent:u,waitFor:d,within:w}=__STORYBOOK_MODULE_TEST__,A={title:"Tabs",component:o,argTypes:{reverse:{control:"boolean",description:"Reverse the order of the tabs"},selected:{control:{type:"number",min:0,max:10},description:"Selected tab index"},items:{control:"object",description:"Array of tab items with label, icon, and content"}},parameters:{docs:{description:{component:`Tabs component.

You can import this component and use it like:

\`\`\`tsx
import {Tabs} from "@tsed/react-formio/molecules/tabs/all"

or

import {Tabs} from "@tsed/react-formio/molecules/tabs/Tabs";
\`\`\`

Tabs component support DI container and can be used with custom component. Here is the list of components that you can override:

- Tab
- TabList
- TabPanel
- Tabs
- TabsBody

\`\`\`tsx
function CustomTab() {

}

registerComponent("Tab", CustomTab);
\`\`\``}}},args:{}},c={args:{reverse:!1,items:[{action:"edit",exact:!0,icon:"edit",label:"Edit",children:e.jsx("div",{className:"bg-red-100 p-5",children:"Edit"})},{action:"submissions",exact:!1,icon:"data",label:"Data",children:e.jsx("div",{className:"bg-orange-100 p-5",children:"Data"})},{action:"preview",exact:!0,icon:"test-tube",label:"Preview",children:e.jsx("div",{className:"bg-yellow-100 p-5",children:"Preview"})},{action:"actions",exact:!1,icon:"paper-plane",label:"Actions",children:e.jsx("div",{className:"bg-green-100 p-5",children:"Actions"})},{action:"access",exact:!0,icon:"lock",label:"Access",children:e.jsx("div",{className:"bg-blue-100 p-5",children:"Access"})},{action:"export",exact:!0,icon:"download",label:"Export",children:e.jsx("div",{className:"bg-purple-100 p-5",children:"Export"})},{action:"delete",exact:!0,icon:"trash",label:"Delete",roles:["administrator","owner"],children:e.jsx("div",{className:"bg-gray-100 p-5",children:"Trash"})}],onClick:g()},play:async({canvasElement:n,args:s})=>{const a=w(n);await i(a.getByRole("tab",{name:"Edit"})).toBeInTheDocument(),await i(a.getByRole("tab",{name:"Data"})).toBeInTheDocument(),await i(a.getByRole("tab",{name:"Preview"})).toBeInTheDocument(),await i(a.getByRole("tab",{name:"Actions"})).toBeInTheDocument(),await i(a.getByRole("tab",{name:"Access"})).toBeInTheDocument(),await i(a.getByRole("tab",{name:"Export"})).toBeInTheDocument(),await i(a.getByRole("tab",{name:"Delete"})).toBeInTheDocument(),await d(()=>i(a.getByRole("tabpanel")).toHaveTextContent("Edit")),await u.click(a.getByRole("tab",{name:"Preview"})),await i(s.onClick).toHaveBeenCalledWith(i.objectContaining({action:"preview"})),await d(()=>i(a.getByRole("tabpanel")).toHaveTextContent("Preview")),await u.click(a.getByRole("tab",{name:"Delete"})),await i(s.onClick).toHaveBeenCalledWith(i.objectContaining({action:"delete"})),await d(()=>i(a.getByRole("tabpanel")).toHaveTextContent("Trash"))},render:n=>{const s=n.items.filter(a=>a.label||a.icon);return e.jsx("div",{className:"border-gray-300 border-1 shadow",children:e.jsxs(o,{selected:n.selected,children:[e.jsx(b,{children:s.map((a,t)=>e.jsx(m,{onClick:()=>n.onClick(a),icon:a.icon,value:t,className:n.reverse?"-reverse":"",children:a.label},t))}),e.jsx(p,{children:s.map((a,t)=>e.jsx(v,{value:t,children:a.children},t))})]})})}},r={args:{selected:2,reverse:!1,items:[{action:"edit",exact:!0,icon:"edit",label:"Edit",children:e.jsx("div",{className:"bg-red-100 p-5",children:"Edit"})},{action:"submissions",exact:!1,icon:"data",label:"Data",children:e.jsx("div",{className:"bg-orange-100 p-5",children:"Data"})},{action:"preview",exact:!0,icon:"test-tube",label:"Preview",children:e.jsx("div",{className:"bg-yellow-100 p-5",children:"Preview"})},{action:"actions",exact:!1,icon:"paper-plane",label:"Actions",children:e.jsx("div",{className:"bg-green-100 p-5",children:"Actions"})},{action:"access",exact:!0,icon:"lock",label:"Access",children:e.jsx("div",{className:"bg-blue-100 p-5",children:"Access"})},{action:"export",exact:!0,icon:"download",label:"Export",children:e.jsx("div",{className:"bg-purple-100 p-5",children:"Export"})},{action:"delete",exact:!0,icon:"trash",label:"Delete",roles:["administrator","owner"],children:e.jsx("div",{className:"bg-gray-100 p-5",children:"Trash"})}]},render:n=>{const s=n.items.filter(a=>a.label||a.icon);return e.jsx("div",{className:"border-gray-300 border-1 shadow",children:e.jsxs(o,{selected:n.selected,children:[e.jsx(b,{children:s.map((a,t)=>e.jsx(m,{icon:a.icon,value:t,children:a.label},t))}),e.jsx(p,{children:s.map((a,t)=>e.jsx(v,{value:t,children:a.children},t))})]})})}},l={args:{reverse:!1,items:[{action:"edit",exact:!0,icon:"edit",label:"Edit",children:e.jsx("div",{className:"bg-red-100 p-5",children:"Edit"})},{action:"submissions",exact:!1,icon:"data",label:"Data",children:e.jsx("div",{className:"bg-orange-100 p-5",children:"Data"})},{action:"preview",exact:!0,icon:"test-tube",label:"Preview",children:e.jsx("div",{className:"bg-yellow-100 p-5",children:"Preview"})},{action:"actions",exact:!1,icon:"paper-plane",label:"Actions",children:e.jsx("div",{className:"bg-green-100 p-5",children:"Actions"})},{action:"access",exact:!0,icon:"lock",label:"Access",children:e.jsx("div",{className:"bg-blue-100 p-5",children:"Access"})},{action:"export",exact:!0,icon:"download",label:"Export",children:e.jsx("div",{className:"bg-purple-100 p-5",children:"Export"})},{action:"delete",exact:!0,icon:"trash",label:"Delete",roles:["administrator","owner"],children:e.jsx("div",{className:"bg-gray-100 p-5",children:"Trash"})}]},render:n=>{const s=n.items.filter(a=>a.label||a.icon);return e.jsx("div",{className:"border-gray-300 border-1 shadow",children:e.jsxs(o,{selected:n.selected,children:[e.jsxs(b,{children:[e.jsx(h,{variant:"link","aria-label":"Previous tab",children:e.jsx(x,{name:"chevron-left"})}),s.map((a,t)=>e.jsx(m,{icon:a.icon,value:t,className:n.reverse?"-reverse":"",children:a.label},t)),e.jsx(h,{variant:"link","aria-label":"Add tab",children:e.jsx(x,{name:"plus"})})]}),e.jsx(p,{children:s.map((a,t)=>e.jsx(v,{value:t,children:a.children},t))})]})})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    reverse: false,
    items: [{
      action: "edit",
      exact: true,
      icon: "edit",
      label: "Edit",
      children: <div className='bg-red-100 p-5'>Edit</div>
    }, {
      action: "submissions",
      exact: false,
      icon: "data",
      label: "Data",
      children: <div className='bg-orange-100 p-5'>Data</div>
    }, {
      action: "preview",
      exact: true,
      icon: "test-tube",
      label: "Preview",
      children: <div className='bg-yellow-100 p-5'>Preview</div>
    }, {
      action: "actions",
      exact: false,
      icon: "paper-plane",
      label: "Actions",
      children: <div className='bg-green-100 p-5'>Actions</div>
    }, {
      action: "access",
      exact: true,
      icon: "lock",
      label: "Access",
      children: <div className='bg-blue-100 p-5'>Access</div>
    }, {
      action: "export",
      exact: true,
      icon: "download",
      label: "Export",
      children: <div className='bg-purple-100 p-5'>Export</div>
    }, {
      action: "delete",
      exact: true,
      icon: "trash",
      label: "Delete",
      roles: ["administrator", "owner"],
      children: <div className='bg-gray-100 p-5'>Trash</div>
    }],
    onClick: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);

    // Vérifie que tous les onglets sont présents
    await expect(canvas.getByRole("tab", {
      name: "Edit"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("tab", {
      name: "Data"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("tab", {
      name: "Preview"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("tab", {
      name: "Actions"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("tab", {
      name: "Access"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("tab", {
      name: "Export"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("tab", {
      name: "Delete"
    })).toBeInTheDocument();
    await waitFor(() => expect(canvas.getByRole("tabpanel")).toHaveTextContent("Edit"));

    // Clique sur l'onglet "Preview" et vérifie le contenu
    await userEvent.click(canvas.getByRole("tab", {
      name: "Preview"
    }));
    await expect(args.onClick).toHaveBeenCalledWith(expect.objectContaining({
      action: "preview"
    }));
    await waitFor(() => expect(canvas.getByRole("tabpanel")).toHaveTextContent("Preview"));

    // Clique sur l'onglet "Delete" et vérifie le contenu
    await userEvent.click(canvas.getByRole("tab", {
      name: "Delete"
    }));
    await expect(args.onClick).toHaveBeenCalledWith(expect.objectContaining({
      action: "delete"
    }));
    await waitFor(() => expect(canvas.getByRole("tabpanel")).toHaveTextContent("Trash"));
  },
  render: args => {
    const items: any[] = args.items.filter((item: any) => item.label || item.icon);
    return <div className={"border-gray-300 border-1 shadow"}>
        <Tabs selected={args.selected}>
          <TabList>
            {items.map((item, index) => {
            return <Tab onClick={() => args.onClick(item)} key={index} icon={item.icon} value={index} className={args.reverse ? "-reverse" : ""}>
                  {item.label}
                </Tab>;
          })}
          </TabList>
          <TabsBody>
            {items.map((item, index) => {
            return <TabPanel key={index} value={index}>
                  {item.children}
                </TabPanel>;
          })}
          </TabsBody>
        </Tabs>
      </div>;
  }
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    selected: 2,
    reverse: false,
    items: [{
      action: "edit",
      exact: true,
      icon: "edit",
      label: "Edit",
      children: <div className='bg-red-100 p-5'>Edit</div>
    }, {
      action: "submissions",
      exact: false,
      icon: "data",
      label: "Data",
      children: <div className='bg-orange-100 p-5'>Data</div>
    }, {
      action: "preview",
      exact: true,
      icon: "test-tube",
      label: "Preview",
      children: <div className='bg-yellow-100 p-5'>Preview</div>
    }, {
      action: "actions",
      exact: false,
      icon: "paper-plane",
      label: "Actions",
      children: <div className='bg-green-100 p-5'>Actions</div>
    }, {
      action: "access",
      exact: true,
      icon: "lock",
      label: "Access",
      children: <div className='bg-blue-100 p-5'>Access</div>
    }, {
      action: "export",
      exact: true,
      icon: "download",
      label: "Export",
      children: <div className='bg-purple-100 p-5'>Export</div>
    }, {
      action: "delete",
      exact: true,
      icon: "trash",
      label: "Delete",
      roles: ["administrator", "owner"],
      children: <div className='bg-gray-100 p-5'>Trash</div>
    }]
  },
  render: args => {
    const items: any[] = args.items.filter((item: any) => item.label || item.icon);
    return <div className={"border-gray-300 border-1 shadow"}>
        <Tabs selected={args.selected}>
          <TabList>
            {items.map((item, index) => {
            return <Tab key={index} icon={item.icon} value={index}>
                  {item.label}
                </Tab>;
          })}
          </TabList>
          <TabsBody>
            {items.map((item, index) => {
            return <TabPanel key={index} value={index}>
                  {item.children}
                </TabPanel>;
          })}
          </TabsBody>
        </Tabs>
      </div>;
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    reverse: false,
    items: [{
      action: "edit",
      exact: true,
      icon: "edit",
      label: "Edit",
      children: <div className='bg-red-100 p-5'>Edit</div>
    }, {
      action: "submissions",
      exact: false,
      icon: "data",
      label: "Data",
      children: <div className='bg-orange-100 p-5'>Data</div>
    }, {
      action: "preview",
      exact: true,
      icon: "test-tube",
      label: "Preview",
      children: <div className='bg-yellow-100 p-5'>Preview</div>
    }, {
      action: "actions",
      exact: false,
      icon: "paper-plane",
      label: "Actions",
      children: <div className='bg-green-100 p-5'>Actions</div>
    }, {
      action: "access",
      exact: true,
      icon: "lock",
      label: "Access",
      children: <div className='bg-blue-100 p-5'>Access</div>
    }, {
      action: "export",
      exact: true,
      icon: "download",
      label: "Export",
      children: <div className='bg-purple-100 p-5'>Export</div>
    }, {
      action: "delete",
      exact: true,
      icon: "trash",
      label: "Delete",
      roles: ["administrator", "owner"],
      children: <div className='bg-gray-100 p-5'>Trash</div>
    }]
  },
  render: args => {
    const items: any[] = args.items.filter((item: any) => item.label || item.icon);
    return <div className={"border-gray-300 border-1 shadow"}>
        <Tabs selected={args.selected}>
          <TabList>
            <Button variant='link' aria-label='Previous tab'>
              <Icon name='chevron-left' />
            </Button>

            {items.map((item, index) => {
            return <Tab key={index} icon={item.icon} value={index} className={args.reverse ? "-reverse" : ""}>
                  {item.label}
                </Tab>;
          })}
            <Button variant='link' aria-label='Add tab'>
              <Icon name='plus' />
            </Button>
          </TabList>
          <TabsBody>
            {items.map((item, index) => {
            return <TabPanel key={index} value={index}>
                  {item.children}
                </TabPanel>;
          })}
          </TabsBody>
        </Tabs>
      </div>;
  }
}`,...l.parameters?.docs?.source}}};const C=["Usage","WithSelectedTab","WithExtraControls"];export{c as Usage,l as WithExtraControls,r as WithSelectedTab,C as __namedExportsOrder,A as default};
