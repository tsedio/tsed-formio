import{a as l,j as a}from"./jsx-runtime-91a467a5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const i="transparent",t="currentColor",o="#000",n="hsla(0, 100%, 100%, 1)",f={50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",DEFAULT:"#4b5563"},m={50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",DEFAULT:"#dc2626"},h={50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",DEFAULT:"#d97706"},u={50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",DEFAULT:"#059669"},g={50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",DEFAULT:"#2563eb"},p={50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",DEFAULT:"#4f46e5"},y={50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",DEFAULT:"#7c3aed"},v={50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843",DEFAULT:"#db2777"},N="inherit",L={50:"hsla(208, 100%, 91%, 1)",100:"hsla(208, 100%, 83%, 1)",200:"hsla(208, 100%, 75%, 1)",300:"hsla(208, 100%, 67%, 1)",400:"hsla(208, 100%, 59%, 1)",500:"hsla(208, 100%, 51%, 1)",600:"hsla(208, 100%, 43%, 1)",700:"hsla(208, 100%, 35%, 1)",800:"hsla(208, 100%, 27%, 1)",900:"hsla(208, 100%, 19%, 1)",DEFAULT:"hsla(208, 100%, 43%, 1)"},D={50:"hsla(190, 81%, 90%, 1)",100:"hsla(190, 81%, 82%, 1)",200:"hsla(190, 81%, 74%, 1)",300:"hsla(190, 81%, 66%, 1)",400:"hsla(190, 81%, 58%, 1)",500:"hsla(190, 81%, 50%, 1)",600:"hsla(190, 81%, 42%, 1)",700:"hsla(190, 81%, 34%, 1)",800:"hsla(190, 81%, 28%, 1)",900:"hsla(190, 81%, 20%, 1)",DEFAULT:"hsla(190, 81%, 42%, 1)"},T={transparent:i,current:t,black:o,white:n,gray:f,red:m,yellow:h,green:u,blue:g,indigo:p,purple:y,pink:v,inherit:N,primary:L,"primary-active":"hsla(190, 81%, 42%, 1)",secondary:D,"gray-lighter":"#f7f7f7","gray-lighter-active":"hsla(0, 0%, 92%, 1)","gray-light":"#d4d1d1","gray-medium":"#a8a0a0","gray-dark":"#998e8e","gray-darker":"#504747"},C=Object.keys(T).reduce((e,c)=>({...e,[c]:c}),{}),E=Object.keys(C).filter(e=>!["current"].includes(e)&&!e.match("-active")).sort((e,c)=>e<c?-1:1),x={title:"Formiojs/Breadcrumbs",argTypes:{width:{control:{type:"text"}},bgColor:{control:{type:"select",options:E}}},parameters:{docs:{source:{type:"code"}}}},r=e=>l("div",{children:[a("nav",{"aria-label":"breadcrumb",children:a("ol",{className:"breadcrumb bg-"+e.bgColor,children:a("li",{className:"breadcrumb-item active","aria-current":"page",children:"Home"})})}),a("nav",{"aria-label":"breadcrumb",children:l("ol",{className:"breadcrumb bg-"+e.bgColor,children:[a("li",{className:"breadcrumb-item",children:a("a",{href:"#",children:"Home"})}),a("li",{className:"breadcrumb-item active","aria-current":"page",children:"Library"})]})}),a("nav",{"aria-label":"breadcrumb",children:l("ol",{className:"breadcrumb bg-"+e.bgColor,children:[a("li",{className:"breadcrumb-item",children:a("a",{href:"#",children:"Home"})}),a("li",{className:"breadcrumb-item",children:a("a",{href:"#",children:"Library"})}),a("li",{className:"breadcrumb-item active","aria-current":"page",children:"Data"})]})})]});r.args={width:"75%",bgColor:"gray-200"};var s,b,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  return <div>
      <nav aria-label='breadcrumb'>
        <ol className={"breadcrumb bg-" + args.bgColor}>
          <li className='breadcrumb-item active' aria-current='page'>
            Home
          </li>
        </ol>
      </nav>

      <nav aria-label='breadcrumb'>
        <ol className={"breadcrumb bg-" + args.bgColor}>
          <li className='breadcrumb-item'>
            <a href='#'>Home</a>
          </li>
          <li className='breadcrumb-item active' aria-current='page'>
            Library
          </li>
        </ol>
      </nav>

      <nav aria-label='breadcrumb'>
        <ol className={"breadcrumb bg-" + args.bgColor}>
          <li className='breadcrumb-item'>
            <a href='#'>Home</a>
          </li>
          <li className='breadcrumb-item'>
            <a href='#'>Library</a>
          </li>
          <li className='breadcrumb-item active' aria-current='page'>
            Data
          </li>
        </ol>
      </nav>
    </div>;
}`,...(d=(b=r.parameters)==null?void 0:b.docs)==null?void 0:d.source}}};r.__docgenInfo={description:"",methods:[],displayName:"Sandbox"};const O=["Sandbox"];export{r as Sandbox,O as __namedExportsOrder,x as default};
//# sourceMappingURL=breadcrumbs.stories-dbf20655.js.map
