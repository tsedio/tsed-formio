import{a,j as o}from"./jsx-runtime-91a467a5.js";import{n as x}from"./FormBuilder-1c4b949e.js";import{r as i}from"./index-8db94870.js";import{c as _}from"./index-582f377c.js";import{i as B}from"./iconClass-7c019a4f.js";import{I as D}from"./inputText.component-213cf9d9.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseForOwn-522e9593.js";import"./cloneDeep-ce19361f.js";import"./isPlainObject-5f39871e.js";import"./debounce-83d9752c.js";import"./choices-5b1be226.js";import"./index-14b03c13.js";import"./index-1fc0ca9a.js";import"./getEventValue-83016e15.js";import"./formControl.component-0c2def02.js";function M(){const[l,e]=i.useState(!1);return{show:l,setShowModal:e,openModal(){e(!0)},closeModal(){e(!1)}}}function p({show:l,children:e,closeModal:t=x,onClose:r=x,title:d,footer:n,style:h,className:H="",...v}){const s=i.useRef(),b=i.useRef(),[I,g]=i.useState(),f=()=>{t(),r()};return i.useEffect(()=>{var N,C;if(s.current||b.current){const L=(((N=s==null?void 0:s.current)==null?void 0:N.offsetHeight)||0)+(((C=b==null?void 0:b.current)==null?void 0:C.offsetHeight)||0);g(`calc(85vh - ${L}px)`)}else g("auto")},[l]),l?a("div",{role:"dialog",className:`formio-dialog formio-dialog-theme-default ${H}`,children:[o("div",{className:"formio-dialog-overlay",onClick:f}),a("div",{style:h,className:"formio-dialog-content",children:[a("div",{className:"formio-dialog-wrapper",children:[d?o("div",{className:"formio-dialog-title",ref:s,"data-testid":"modalTitle",children:d}):null,o("div",{className:"formio-dialog-body",style:{maxHeight:I},"data-testid":"modalBody",children:l&&e}),n?o("div",{className:"formio-dialog-footer",ref:b,"data-testid":"modalFooter",children:o(n,{...v,closeModal:t,onClose:f})}):null]}),o("button",{className:"formio-dialog-close float-right btn btn-secondary btn-sm","aria-label":"close","data-testid":"closeModal",onClick:f})]})]}):null}function V({value:l,valueToCompare:e,onSubmit:t,onClose:r,i18n:d=n=>n}){return a("div",{className:"flex items-center justify-center bg-white p-2",children:[o("button",{"data-testid":"customCloseModal",className:"btn btn-outline-dark mx-2",onClick:r,children:d("Cancel")}),a("button",{disabled:e!==l,"data-testid":"customSubmitModal",className:"btn btn-danger mx-2",onClick:n=>{e===l&&t(n)},children:[o("i",{className:_(B(void 0,"trash"),"mr-2")}),d("Remove")]})]})}function q({maxWidth:l="300px",children:e,...t}){var h,H;const{i18n:r=v=>v}=t,[d,n]=i.useState();return o(p,{...t,className:_(t.className,"formio-dialog-theme-remove"),style:{maxWidth:l},title:`Drop ${(h=t.itemType)==null?void 0:h.toLowerCase()}`,value:d,footer:V,children:a("div",{className:"px-4 pt-3 pb-5",children:[a("div",{className:"pb-1",children:[e,r("To drop")," ",o("strong",{children:t.valueToCompare}),", ",r("type the")," ",a("strong",{children:['"',(H=t.itemType)==null?void 0:H.toLowerCase(),'"']})," ",r("name")," ",a("strong",{children:['"',t.valueToCompare,'"']}),"."]}),o(D,{name:"remove",value:d,onChange:(v,s)=>n(s)})]})})}const no={title:"ReactFormio/Modal",component:p,argTypes:{onSubmit:{title:{control:{type:"text"}},control:{action:"onSubmit"}}},parameters:{}},c=l=>{const e=M();return a("div",{children:[o("div",{children:o("button",{className:"btn btn-primary",onClick:e.openModal,children:"Open modal"})}),o(p,{...l,...e,children:o("div",{className:"p-5",style:{height:"900px"},children:"Hello body"})})]})};c.args={};const m=l=>{const e=M();return a("div",{children:[o("div",{children:o("button",{className:"btn btn-primary",onClick:e.openModal,children:"Open modal"})}),o(p,{...l,...e,children:o("div",{className:"p-5",style:{height:"900px"},children:"Hello body"})})]})};m.args={title:"Modal title"};const u=l=>{const e=M();function t({closeModal:r,onSubmit:d}){return a("div",{className:"flex items-center justify-center bg-white p-2",children:[o("button",{"data-testid":"customSubmitModal",className:"btn btn-primary mx-1",onClick:n=>{d(n),r()},children:"Save"}),o("button",{"data-testid":"customCloseModal",className:"btn btn-danger mx-1",onClick:r,children:"Close"})]})}return a("div",{children:[o("div",{children:o("button",{className:"btn btn-primary",onClick:e.openModal,children:"Open modal"})}),o(p,{...l,...e,footer:t,children:a("div",{className:"px-5",style:{height:"900px"},children:["Hello body",o("br",{}),"Hello body",o("br",{}),"Hello body",o("br",{}),"Hello body",o("br",{}),"Hello body",o("br",{}),"Hello body",o("br",{}),"Hello body",o("br",{}),"Hello body",o("br",{}),"Hello body",o("br",{}),"Hello body",o("br",{}),"Hello body",o("br",{}),"Hello body",o("br",{}),"Hello body",o("br",{}),"Hello body",o("br",{}),"Hello body",o("br",{}),"Hello body",o("br",{}),"Hello body",o("br",{}),"Hello body",o("br",{}),"Hello body",o("br",{}),"Hello body",o("br",{}),"Hello body",o("br",{}),"Hello body",o("br",{}),"Hello body",o("br",{}),"Hello body",o("br",{}),"Hello body",o("br",{}),"Hello body",o("br",{}),"Hello body",o("br",{}),"Hello body",o("br",{})]})})]})};u.args={title:"Modal title"};const y=l=>{const e=M();return a("div",{children:[o("div",{children:o("button",{className:"btn btn-primary",onClick:e.openModal,children:"Open modal"})}),o(q,{...l,i18n:t=>t,show:e.show,onSubmit:e.closeModal,onClose:e.closeModal,closeModal:e.closeModal})]})};y.args={valueToCompare:"value",itemType:"form"};var S,k,T;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`(args: ModalProps) => {
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
}`,...(T=(k=c.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var w,O,R;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`(args: ModalProps) => {
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
}`,...(R=(O=m.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var F,j,W;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`(args: ModalProps) => {
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
}`,...(W=(j=u.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var P,$,E;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`(args: RemoveModalProps) => {
  const modal = useModal();
  return <div>
      <div>
        <button className={"btn btn-primary"} onClick={modal.openModal}>
          Open modal
        </button>
      </div>
      <RemoveModal {...args} i18n={f => f} show={modal.show} onSubmit={modal.closeModal} onClose={modal.closeModal} closeModal={modal.closeModal} />
    </div>;
}`,...(E=($=y.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};const so=["Sandbox","WithTitle","WithFooter","WithRemoveModal"];export{c as Sandbox,u as WithFooter,y as WithRemoveModal,m as WithTitle,so as __namedExportsOrder,no as default};
//# sourceMappingURL=modal.stories-d397b68f.js.map
