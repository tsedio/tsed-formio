import{j as r}from"./jsx-runtime-91a467a5.js";import{r as o}from"./index-8db94870.js";import{P as i}from"./pagination.component-6c227df2.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-582f377c.js";import"./select.component-b071a5d3.js";import"./choices-5b1be226.js";import"./index-1fc0ca9a.js";import"./getEventValue-83016e15.js";import"./formControl.component-0c2def02.js";const E={title:"ReactFormio/Pagination",component:i,parameters:{}},e=t=>{const[a,p]=o.useState(t.pageIndex);return o.useEffect(()=>{t.gotoPage&&t.gotoPage(a)},[a]),r("div",{children:r(i,{...t,pageIndex:a,gotoPage:p})})};e.args={pageSizes:[10,25,50,100],pageCount:50,pageIndex:1};var n,g,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`(args: any) => {
  const [currentPageIndex, setPageIndex] = useState(args.pageIndex);
  useEffect(() => {
    args.gotoPage && args.gotoPage(currentPageIndex);
  }, [currentPageIndex]);
  return <div>
      <Pagination {...args} pageIndex={currentPageIndex} gotoPage={setPageIndex} />
    </div>;
}`,...(s=(g=e.parameters)==null?void 0:g.docs)==null?void 0:s.source}}};const v=["Sandbox"];export{e as Sandbox,v as __namedExportsOrder,E as default};
//# sourceMappingURL=pagination.stories-d406a61c.js.map
