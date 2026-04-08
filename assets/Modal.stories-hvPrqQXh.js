import{j as o}from"./jsx-runtime-C-tXp4WL.js";import{M as t,u as a}from"./Modal-CeD6oLDo.js";import"./iframe-ADnK4W05.js";import"./preload-helper-D9Z9MdNV.js";const H={title:"Modal",component:t,argTypes:{onSubmit:{title:{control:{type:"text"}},control:{action:"onSubmit"}}},parameters:{docs:{description:{component:'The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else.\n\n```tsx\nimport {Modal} from "@tsed/react-formio/molecules/modal/Modal";\n```'}}},render(l){const e=a();return o.jsxs("div",{children:[o.jsx("div",{children:o.jsx("button",{className:"btn btn-primary",onClick:e.openModal,children:"Open modal"})}),o.jsx(t,{...l,...e,children:o.jsx("div",{className:"p-5",style:{height:"900px"},children:"Hello body"})})]})},tags:["autodocs"]},r={},s={render:l=>{const e=a();return o.jsxs("div",{children:[o.jsx("div",{children:o.jsx("button",{className:"btn btn-primary",onClick:e.openModal,children:"Open modal"})}),o.jsx(t,{...l,...e,children:o.jsx("div",{className:"p-5",style:{height:"900px"},children:"Hello body"})})]})},args:{title:"Modal title"}},d={render:l=>{const e=a();function n({closeModal:b,onSubmit:i}){return o.jsxs("div",{className:"flex items-center justify-center bg-white p-2",children:[o.jsx("button",{"data-testid":"customSubmitModal",className:"btn btn-primary mx-1",onClick:c=>{i(c),b()},children:"Save"}),o.jsx("button",{"data-testid":"customCloseModal",className:"btn btn-danger mx-1",onClick:b,children:"Close"})]})}return o.jsxs("div",{children:[o.jsx("div",{children:o.jsx("button",{className:"btn btn-primary",onClick:e.openModal,children:"Open modal"})}),o.jsx(t,{...l,...e,footer:n,children:o.jsxs("div",{className:"px-5",style:{height:"900px"},children:["Hello body",o.jsx("br",{}),"Hello body",o.jsx("br",{}),"Hello body",o.jsx("br",{}),"Hello body",o.jsx("br",{}),"Hello body",o.jsx("br",{}),"Hello body",o.jsx("br",{}),"Hello body",o.jsx("br",{}),"Hello body",o.jsx("br",{}),"Hello body",o.jsx("br",{}),"Hello body",o.jsx("br",{}),"Hello body",o.jsx("br",{}),"Hello body",o.jsx("br",{}),"Hello body",o.jsx("br",{}),"Hello body",o.jsx("br",{}),"Hello body",o.jsx("br",{}),"Hello body",o.jsx("br",{}),"Hello body",o.jsx("br",{}),"Hello body",o.jsx("br",{}),"Hello body",o.jsx("br",{}),"Hello body",o.jsx("br",{}),"Hello body",o.jsx("br",{}),"Hello body",o.jsx("br",{}),"Hello body",o.jsx("br",{}),"Hello body",o.jsx("br",{}),"Hello body",o.jsx("br",{}),"Hello body",o.jsx("br",{}),"Hello body",o.jsx("br",{}),"Hello body",o.jsx("br",{})]})})]})},args:{title:"Modal title"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ModalProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const modal = useModal();
    return <div>
        <div>
          <button className={"btn btn-primary"} onClick={modal.openModal}>
            Open modal
          </button>
        </div>
        <Modal {...args} {...modal}>
          <div className={"p-5"} style={{
          height: "900px"
        }}>
            Hello body
          </div>
        </Modal>
      </div>;
  },
  args: {
    title: "Modal title"
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: (args: ModalProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const modal = useModal();
    function ModalFooter({
      closeModal,
      onSubmit
    }: any) {
      return <div className={"flex items-center justify-center bg-white p-2"}>
          <button data-testid='customSubmitModal' className={"btn btn-primary mx-1"} onClick={e => {
          onSubmit(e);
          closeModal();
        }}>
            Save
          </button>

          <button data-testid='customCloseModal' className={"btn btn-danger mx-1"} onClick={closeModal}>
            Close
          </button>
        </div>;
    }
    return <div>
        <div>
          <button className={"btn btn-primary"} onClick={modal.openModal}>
            Open modal
          </button>
        </div>
        <Modal {...args} {...modal} footer={ModalFooter}>
          <div className={"px-5"} style={{
          height: "900px"
        }}>
            Hello body
            <br />
            Hello body
            <br />
            Hello body
            <br />
            Hello body
            <br />
            Hello body
            <br />
            Hello body
            <br />
            Hello body
            <br />
            Hello body
            <br />
            Hello body
            <br />
            Hello body
            <br />
            Hello body
            <br />
            Hello body
            <br />
            Hello body
            <br />
            Hello body
            <br />
            Hello body
            <br />
            Hello body
            <br />
            Hello body
            <br />
            Hello body
            <br />
            Hello body
            <br />
            Hello body
            <br />
            Hello body
            <br />
            Hello body
            <br />
            Hello body
            <br />
            Hello body
            <br />
            Hello body
            <br />
            Hello body
            <br />
            Hello body
            <br />
            Hello body
            <br />
          </div>
        </Modal>
      </div>;
  },
  args: {
    title: "Modal title"
  }
}`,...d.parameters?.docs?.source}}};const u=["Sandbox","WithTitle","WithFooter"];export{r as Sandbox,d as WithFooter,s as WithTitle,u as __namedExportsOrder,H as default};
