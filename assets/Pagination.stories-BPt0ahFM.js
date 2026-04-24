import{j as t}from"./jsx-runtime-87cr0LyS.js";import"./FormControl-C2njYF__.js";import"./ReactSelect-C-itzEHU.js";import"./HtmlSelect-HPewC4EO.js";import"./ChoicesSelect-C2SL7ZTH.js";import"./Select-a21Kpltl.js";import{r as i}from"./iframe-aTk9OttX.js";import{P as a}from"./PaginationButton-DCIGzsDo.js";import"./clsx-B-dksMZM.js";import"./components-B7KBuUpW.js";import"./react-select-animated.esm-CEW2ldqt.js";import"./index-Tkgu9iqC.js";import"./index-dhIDgrRw.js";import"./getEventValue-BcWrZMzo.js";import"./choices-DggMhpyp.js";import"./preload-helper-D9Z9MdNV.js";import"./useI18n-q6VcMDMG.js";const b={title:"Pagination",component:a,parameters:{docs:{description:{component:`Pagination component.

You can import this component and use it like:

\`\`\`tsx
import {Pagination} from "@tsed/react-formio/molecules/pagination/all"

or

import {Pagination} from "@tsed/react-formio/molecules/pagination/Pagination";
import "@tsed/react-formio/molecules/pagination/PaginationButton";
\`\`\`

Pagination component support DI container and can be used with custom PaginationButton component.

You can also override the Pagination component with your own implementation:

\`\`\`tsx
function MyPagination(props: PaginationProps) {

}

registerComponent("Pagination", MyPagination);
\`\`\``}}},argTypes:{pageSizes:{description:"Pagination steps list"},pageCount:{description:"Total number of pages",control:"number"},pageIndex:{description:"Current page index",control:"number"},onPageIndexChange:{description:"Change page index event",action:"onPageIndexChange"},onClickPreviousPage:{description:"Click previous page event",action:"onClickPreviousPage"},onClickNextPage:{description:"Click next page event",action:"onClickNextPage"},onPageSizeChange:{description:"Change page size event",action:"onPageSizeChange"}},render(n){const[o,r]=i.useState(n.pageIndex);return i.useEffect(()=>{n.onPageIndexChange&&n.onPageIndexChange(o)},[o]),t.jsx("div",{children:t.jsx(a,{...n,pageIndex:o,onPageIndexChange:r})})}},e={args:{pageSizes:[10,25,50,100],pageCount:50,pageIndex:1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    pageSizes: [10, 25, 50, 100],
    pageCount: 50,
    pageIndex: 1
  }
}`,...e.parameters?.docs?.source}}};const z=["Sandbox"];export{e as Sandbox,z as __namedExportsOrder,b as default};
