import{j as n}from"./jsx-runtime-C-tXp4WL.js";import{u as t,M as o}from"./blocks-BsHuuCaw.js";import"./iframe-ADnK4W05.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BKG2T7rz.js";import"./index-Dba2zZrR.js";function i(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...t(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Tailwind theme"}),`
`,n.jsx(s.h1,{id:"tailwind-theme",children:"Tailwind theme"}),`
`,n.jsx(s.p,{children:"Formio.js allows you to install different themes. This package provides a theme based on TailwindCSS v3."}),`
`,n.jsx(s.h2,{id:"install",children:"Install"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-shell",children:`npm install @tsed/tailwind-formio --save
npm install tailwindcss postcss autoprefixer postcss-normalize --save-dev
`})}),`
`,n.jsx(s.h3,{id:"configure-postcss",children:"Configure postcss"}),`
`,n.jsxs(s.p,{children:["Edit ",n.jsx(s.code,{children:"postcss.config.js"})," and add the postcss plugins list:"]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-js",children:`export default {
  plugins: {
    "postcss-normalize": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {}
  }
};
`})}),`
`,n.jsx(s.h3,{id:"configure-tailwind",children:"Configure tailwind"}),`
`,n.jsxs(s.p,{children:["Edit your ",n.jsx(s.code,{children:"tailwind.config.js"})," and copy the following content:"]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-js",children:`import { tailwindPreset } from "@tsed/tailwind-formio/tailwind.preset";

const primary = "hsla(208, 100%, 43%, 1)";
const secondary = "hsla(190, 81%, 42%, 1)";

module.exports = {
  content: [
    "./node_modules/**/*.{js,jsx,ts,tsx,ejs}"
    // add your paths
  ],
  presets: [tailwindPreset],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: primary,
          50: "hsla(208, 100%, 91%, 1)",
          100: "hsla(208, 100%, 83%, 1)",
          200: "hsla(208, 100%, 75%, 1)",
          300: "hsla(208, 100%, 67%, 1)",
          400: "hsla(208, 100%, 59%, 1)",
          500: "hsla(208, 100%, 51%, 1)",
          600: primary,
          700: "hsla(208, 100%, 35%, 1)",
          800: "hsla(208, 100%, 27%, 1)",
          900: "hsla(208, 100%, 19%, 1)"
        },
        secondary: {
          DEFAULT: secondary,
          50: "hsla(190, 81%, 90%, 1)",
          100: "hsla(190, 81%, 82%, 1)",
          200: "hsla(190, 81%, 74%, 1)",
          300: "hsla(190, 81%, 66%, 1)",
          400: "hsla(190, 81%, 58%, 1)",
          500: "hsla(190, 81%, 50%, 1)",
          600: secondary,
          700: "hsla(190, 81%, 34%, 1)",
          800: "hsla(190, 81%, 28%, 1)",
          900: "hsla(190, 81%, 20%, 1)"
        },
        "gray-darker": "#504747"
      }
    }
  }
};
`})}),`
`,n.jsxs(s.p,{children:["Then create a ",n.jsx(s.code,{children:"tailwind.css"})," in ",n.jsx(s.code,{children:"styles"})," directory and add the following lines:"]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-css",children:`@tailwind base;
@tailwind components;
@tailwind utilities;
`})}),`
`,n.jsxs(s.p,{children:["Import the ",n.jsx(s.code,{children:"tailwind.css"})," in the ",n.jsx(s.code,{children:"index.css"})," created by create-react-app:"]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-css",children:`@import "formiojs/dist/formio.full.css";
@import "./tailwind.css";
@import "@tsed/tailwind-formio/styles/index.css";
`})}),`
`,n.jsx(s.p,{children:"Optionally, you can import fonts and icons:"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-diff",children:`@import "formiojs/dist/formio.full.css";
@import "./tailwind.css";
+@import "./fonts/source-sans-pro/index.css";
+@import "./fonts/inconsolata/index.css";
+@import "./fonts/bxicons/index.css";
@import "@tsed/tailwind-formio/styles/index.css";
`})}),`
`,n.jsxs(s.p,{children:[`Now, we can configure formio to use the tailwind template in our React application.
So edit the `,n.jsx(s.code,{children:"index.js"})," (or ",n.jsx(s.code,{children:"index.ts"}),"):"]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-js",children:`import React from 'react';
import ReactDOM from 'react-dom';
import { Formio, Templates } from "@tsed/react-formio";
import tailwind from "@tsed/tailwind-formio";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

Formio.use(tailwind);
Templates.framework = "tailwind";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
`})}),`
`,n.jsx(s.p,{children:"Finally, start the application!"})]})}function m(e={}){const{wrapper:s}={...t(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(i,{...e})}):i(e)}export{m as default};
