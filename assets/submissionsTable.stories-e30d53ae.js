import{j as p}from"./jsx-runtime-91a467a5.js";import{R as r}from"./index-8db94870.js";import{a as d,m as g,b as S,f as h}from"./form-submissions-a7c83038.js";import{T as C}from"./table.component-374a8980.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-14b03c13.js";import"./FormBuilder-1c4b949e.js";import"./_baseForOwn-522e9593.js";import"./cloneDeep-ce19361f.js";import"./isPlainObject-5f39871e.js";import"./debounce-83d9752c.js";import"./choices-5b1be226.js";import"./selectColumnFilter.component-bc5dd5fe.js";import"./select.component-b071a5d3.js";import"./index-582f377c.js";import"./index-1fc0ca9a.js";import"./getEventValue-83016e15.js";import"./formControl.component-0c2def02.js";import"./noop-1202c7f9.js";import"./index-462ab89b.js";import"./pagination.component-6c227df2.js";import"./iconClass-7c019a4f.js";import"./inputText.component-213cf9d9.js";function c({form:o,...s}){const n=o&&d(o);return p(C,{...s,columns:n})}const K={title:"ReactFormio/SubmissionsTable",component:c,argTypes:{form:{control:{type:"object"}},data:{control:{type:"object"}},operations:{control:{type:"object"}},isLoading:{control:{type:"boolean"}},isEmpty:{control:{type:"boolean"}},disableFilters:{control:{type:"boolean"}},disablePagination:{control:{type:"boolean"}}},parameters:{}},e=o=>{const[s,n]=r.useState(0),[u,l]=r.useState(10),[b]=r.useState(87);return p(c,{...o,onChange:t=>{l(t.pageSize),n(t.pageIndex*t.pageSize),o.onChange&&o.onChange(t)},...g({skip:s,limit:u,serverCount:b})})};e.args={form:S,data:h,operations:[{title:"Edit",action:"edit",alias:"row",path:"/resources/:resourceId/submissions/:submissionId",icon:"edit",permissionsResolver(){return!0}},{action:"delete",path:"/resources/:resourceId/submissions/:submissionId/delete",icon:"trash",buttonType:"danger",permissionsResolver(){return!0}}]};var i,a,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`(args: any) => {
  const [skip, setSkip] = React.useState(0);
  const [limit, setLimit] = React.useState(10);
  const [serverCount] = React.useState(87);
  const onChange = (obj: any) => {
    setLimit(obj.pageSize);
    setSkip(obj.pageIndex * obj.pageSize);
    args.onChange && args.onChange(obj);
  };
  return <SubmissionsTable {...args} onChange={onChange} {...mapPagination({
    skip,
    limit,
    serverCount
  })} />;
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const M=["Sandbox"];export{e as Sandbox,M as __namedExportsOrder,K as default};
//# sourceMappingURL=submissionsTable.stories-e30d53ae.js.map
