import{j as h}from"./jsx-runtime-CxAOD8ob.js";import{u as ye,v as ee,w as ve,x as we,y as ge,z as be,A as xe,B as L,C as Te,D as Se,b as _}from"./iframe-d_ojfnUF.js";import{I as Ee}from"./InputText-yx_osROo.js";import{f as Re}from"./form.fixture-CPh0OpUn.js";import{f as Y}from"./form-firstname.fixture-C79VtWUc.js";import{F as X}from"./Form-DkerU3tH.js";import"./preload-helper-D9Z9MdNV.js";import"./components-B7KBuUpW.js";import"./getEventValue-BcWrZMzo.js";import"./FormControl-BHQIRlTO.js";import"./clsx-B-dksMZM.js";import"./cloneDeep-I1TLaNWr.js";import"./isEqual-gekBfHfb.js";function Ie(){ye(typeof URL<"u",ee.formatMessage(`Global "URL" class is not defined. This likely means that you're running MSW in an environment that doesn't support all Node.js standard API (e.g. React Native). If that's the case, please use an appropriate polyfill for the "URL" class, like "react-native-url-polyfill".`))}function Be(t,e){return t.toLowerCase()===e.toLowerCase()}function Ne(t){return t<300?"#69AB32":t<400?"#F0BB4B":"#E95F5D"}async function Fe(t){const a=await t.clone().text();return{url:new URL(t.url),method:t.method,headers:Object.fromEntries(t.headers.entries()),body:a}}const{message:Ce}=ve;async function De(t){const e=t.clone(),a=await e.text(),n=e.status||200,o=e.statusText||Ce[n]||"OK";return{status:n,statusText:o,headers:Object.fromEntries(e.headers.entries()),body:a}}function Oe(t){for(var e=[],a=0;a<t.length;){var n=t[a];if(n==="*"||n==="+"||n==="?"){e.push({type:"MODIFIER",index:a,value:t[a++]});continue}if(n==="\\"){e.push({type:"ESCAPED_CHAR",index:a++,value:t[a++]});continue}if(n==="{"){e.push({type:"OPEN",index:a,value:t[a++]});continue}if(n==="}"){e.push({type:"CLOSE",index:a,value:t[a++]});continue}if(n===":"){for(var o="",s=a+1;s<t.length;){var r=t.charCodeAt(s);if(r>=48&&r<=57||r>=65&&r<=90||r>=97&&r<=122||r===95){o+=t[s++];continue}break}if(!o)throw new TypeError("Missing parameter name at ".concat(a));e.push({type:"NAME",index:a,value:o}),a=s;continue}if(n==="("){var y=1,S="",s=a+1;if(t[s]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<t.length;){if(t[s]==="\\"){S+=t[s++]+t[s++];continue}if(t[s]===")"){if(y--,y===0){s++;break}}else if(t[s]==="("&&(y++,t[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(s));S+=t[s++]}if(y)throw new TypeError("Unbalanced pattern at ".concat(a));if(!S)throw new TypeError("Missing pattern at ".concat(a));e.push({type:"PATTERN",index:a,value:S}),a=s;continue}e.push({type:"CHAR",index:a,value:t[a++]})}return e.push({type:"END",index:a,value:""}),e}function Pe(t,e){e===void 0&&(e={});for(var a=Oe(t),n=e.prefixes,o=n===void 0?"./":n,s=e.delimiter,r=s===void 0?"/#?":s,y=[],S=0,v=0,E="",w=function(T){if(v<a.length&&a[v].type===T)return a[v++].value},C=function(T){var b=w(T);if(b!==void 0)return b;var F=a[v],Q=F.type,he=F.index;throw new TypeError("Unexpected ".concat(Q," at ").concat(he,", expected ").concat(T))},R=function(){for(var T="",b;b=w("CHAR")||w("ESCAPED_CHAR");)T+=b;return T},l=function(T){for(var b=0,F=r;b<F.length;b++){var Q=F[b];if(T.indexOf(Q)>-1)return!0}return!1},g=function(T){var b=y[y.length-1],F=T||(b&&typeof b=="string"?b:"");if(b&&!F)throw new TypeError('Must have text between two parameters, missing text after "'.concat(b.name,'"'));return!F||l(F)?"[^".concat(H(r),"]+?"):"(?:(?!".concat(H(F),")[^").concat(H(r),"])+?")};v<a.length;){var i=w("CHAR"),f=w("NAME"),D=w("PATTERN");if(f||D){var u=i||"";o.indexOf(u)===-1&&(E+=u,u=""),E&&(y.push(E),E=""),y.push({name:f||S++,prefix:u,suffix:"",pattern:D||g(u),modifier:w("MODIFIER")||""});continue}var d=i||w("ESCAPED_CHAR");if(d){E+=d;continue}E&&(y.push(E),E="");var x=w("OPEN");if(x){var u=R(),B=w("NAME")||"",O=w("PATTERN")||"",P=R();C("CLOSE"),y.push({name:B||(O?S++:""),pattern:B&&!O?g(u):O,prefix:u,suffix:P,modifier:w("MODIFIER")||""});continue}C("END")}return y}function je(t,e){var a=[],n=ce(t,a,e);return Ae(n,a,e)}function Ae(t,e,a){a===void 0&&(a={});var n=a.decode,o=n===void 0?function(s){return s}:n;return function(s){var r=t.exec(s);if(!r)return!1;for(var y=r[0],S=r.index,v=Object.create(null),E=function(C){if(r[C]===void 0)return"continue";var R=e[C-1];R.modifier==="*"||R.modifier==="+"?v[R.name]=r[C].split(R.prefix+R.suffix).map(function(l){return o(l,R)}):v[R.name]=o(r[C],R)},w=1;w<r.length;w++)E(w);return{path:y,index:S,params:v}}}function H(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function ie(t){return t&&t.sensitive?"":"i"}function He(t,e){if(!e)return t;for(var a=/\((?:\?<(.*?)>)?(?!\?)/g,n=0,o=a.exec(t.source);o;)e.push({name:o[1]||n++,prefix:"",suffix:"",modifier:"",pattern:""}),o=a.exec(t.source);return t}function _e(t,e,a){var n=t.map(function(o){return ce(o,e,a).source});return new RegExp("(?:".concat(n.join("|"),")"),ie(a))}function ke(t,e,a){return Le(Pe(t,a),e,a)}function Le(t,e,a){a===void 0&&(a={});for(var n=a.strict,o=n===void 0?!1:n,s=a.start,r=s===void 0?!0:s,y=a.end,S=y===void 0?!0:y,v=a.encode,E=v===void 0?function(b){return b}:v,w=a.delimiter,C=w===void 0?"/#?":w,R=a.endsWith,l=R===void 0?"":R,g="[".concat(H(l),"]|$"),i="[".concat(H(C),"]"),f=r?"^":"",D=0,u=t;D<u.length;D++){var d=u[D];if(typeof d=="string")f+=H(E(d));else{var x=H(E(d.prefix)),B=H(E(d.suffix));if(d.pattern)if(e&&e.push(d),x||B)if(d.modifier==="+"||d.modifier==="*"){var O=d.modifier==="*"?"?":"";f+="(?:".concat(x,"((?:").concat(d.pattern,")(?:").concat(B).concat(x,"(?:").concat(d.pattern,"))*)").concat(B,")").concat(O)}else f+="(?:".concat(x,"(").concat(d.pattern,")").concat(B,")").concat(d.modifier);else{if(d.modifier==="+"||d.modifier==="*")throw new TypeError('Can not repeat "'.concat(d.name,'" without a prefix and suffix'));f+="(".concat(d.pattern,")").concat(d.modifier)}else f+="(?:".concat(x).concat(B,")").concat(d.modifier)}}if(S)o||(f+="".concat(i,"?")),f+=a.endsWith?"(?=".concat(g,")"):"$";else{var P=t[t.length-1],T=typeof P=="string"?i.indexOf(P[P.length-1])>-1:P===void 0;o||(f+="(?:".concat(i,"(?=").concat(g,"))?")),T||(f+="(?=".concat(i,"|").concat(g,")"))}return new RegExp(f,ie(a))}function ce(t,e,a){return t instanceof RegExp?He(t,e):Array.isArray(t)?_e(t,e,a):ke(t,e,a)}new TextEncoder;function Ue(t){try{return new URL(t),!0}catch{return!1}}function ae(t,e){const n=Object.getOwnPropertySymbols(e).find(o=>o.description===t);if(n)return Reflect.get(e,n)}var U=class extends Response{static isConfigurableStatusCode(t){return t>=200&&t<=599}static isRedirectResponse(t){return U.STATUS_CODES_WITH_REDIRECT.includes(t)}static isResponseWithBody(t){return!U.STATUS_CODES_WITHOUT_BODY.includes(t)}static setUrl(t,e){if(!t||t==="about:"||!Ue(t))return;const a=ae("state",e);a?a.urlList.push(new URL(t)):Object.defineProperty(e,"url",{value:t,enumerable:!0,configurable:!0,writable:!1})}static parseRawHeaders(t){const e=new Headers;for(let a=0;a<t.length;a+=2)e.append(t[a],t[a+1]);return e}constructor(t,e={}){var a;const n=(a=e.status)!=null?a:200,o=U.isConfigurableStatusCode(n)?n:200,s=U.isResponseWithBody(n)?t:null;if(super(s,{status:o,statusText:e.statusText,headers:e.headers}),n!==o){const r=ae("state",this);r?r.status=n:Object.defineProperty(this,"status",{value:n,enumerable:!0,configurable:!0,writable:!1})}U.setUrl(e.url,this)}},te=U;te.STATUS_CODES_WITHOUT_BODY=[101,103,204,205,304];te.STATUS_CODES_WITH_REDIRECT=[301,302,303,307,308];function Je(t,e=!0){return[e&&t.origin,t.pathname].filter(Boolean).join("")}const Ve=/[\?|#].*$/g;function $e(t){return new URL(`/${t}`,"http://localhost").searchParams}function le(t){return t.endsWith("?")?t:t.replace(Ve,"")}function We(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}function ze(t,e){if(We(t)||t.startsWith("*"))return t;const a=e||typeof location<"u"&&location.href;return a?decodeURI(new URL(encodeURI(t),a).href):t}function qe(t,e){if(t instanceof RegExp)return t;const a=ze(t,e);return le(a)}function Me(t){return t.replace(/([:a-zA-Z_-]*)(\*{1,2})+/g,(e,a,n)=>{const o="(.*)";return a?a.startsWith(":")?`${a}${n}`:`${a}${o}`:o}).replace(/([^\/])(:)(?=\d+)/,"$1\\$2").replace(/^([^\/]+)(:)(?=\/\/)/,"$1\\$2")}function Ge(t,e,a){const n=qe(e,a),o=typeof n=="string"?Me(n):n,s=Je(t),r=je(o,{decode:decodeURIComponent})(s),y=r&&r.params||{};return{matches:r!==!1,params:y}}var Ye=Object.create,ue=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,me=Object.getOwnPropertyNames,Ke=Object.getPrototypeOf,Qe=Object.prototype.hasOwnProperty,Ze=(t,e)=>function(){return e||(0,t[me(t)[0]])((e={exports:{}}).exports,e),e.exports},et=(t,e,a,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of me(e))!Qe.call(t,o)&&o!==a&&ue(t,o,{get:()=>e[o],enumerable:!(n=Xe(e,o))||n.enumerable});return t},tt=(t,e,a)=>(a=t!=null?Ye(Ke(t)):{},et(ue(a,"default",{value:t,enumerable:!0}),t)),at=Ze({"node_modules/cookie/index.js"(t){t.parse=y,t.serialize=E;var e=Object.prototype.toString,a=Object.prototype.hasOwnProperty,n=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/,o=/^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/,s=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/;function y(l,g){if(typeof l!="string")throw new TypeError("argument str must be a string");var i={},f=l.length;if(f<2)return i;var D=g&&g.decode||w,u=0,d=0,x=0;do{if(d=l.indexOf("=",u),d===-1)break;if(x=l.indexOf(";",u),x===-1)x=f;else if(d>x){u=l.lastIndexOf(";",d-1)+1;continue}var B=S(l,u,d),O=v(l,d,B),P=l.slice(B,O);if(!a.call(i,P)){var T=S(l,d+1,x),b=v(l,x,T);l.charCodeAt(T)===34&&l.charCodeAt(b-1)===34&&(T++,b--);var F=l.slice(T,b);i[P]=R(F,D)}u=x+1}while(u<f);return i}function S(l,g,i){do{var f=l.charCodeAt(g);if(f!==32&&f!==9)return g}while(++g<i);return i}function v(l,g,i){for(;g>i;){var f=l.charCodeAt(--g);if(f!==32&&f!==9)return g+1}return i}function E(l,g,i){var f=i&&i.encode||encodeURIComponent;if(typeof f!="function")throw new TypeError("option encode is invalid");if(!n.test(l))throw new TypeError("argument name is invalid");var D=f(g);if(!o.test(D))throw new TypeError("argument val is invalid");var u=l+"="+D;if(!i)return u;if(i.maxAge!=null){var d=Math.floor(i.maxAge);if(!isFinite(d))throw new TypeError("option maxAge is invalid");u+="; Max-Age="+d}if(i.domain){if(!s.test(i.domain))throw new TypeError("option domain is invalid");u+="; Domain="+i.domain}if(i.path){if(!r.test(i.path))throw new TypeError("option path is invalid");u+="; Path="+i.path}if(i.expires){var x=i.expires;if(!C(x)||isNaN(x.valueOf()))throw new TypeError("option expires is invalid");u+="; Expires="+x.toUTCString()}if(i.httpOnly&&(u+="; HttpOnly"),i.secure&&(u+="; Secure"),i.partitioned&&(u+="; Partitioned"),i.priority){var B=typeof i.priority=="string"?i.priority.toLowerCase():i.priority;switch(B){case"low":u+="; Priority=Low";break;case"medium":u+="; Priority=Medium";break;case"high":u+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(i.sameSite){var O=typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite;switch(O){case!0:u+="; SameSite=Strict";break;case"lax":u+="; SameSite=Lax";break;case"strict":u+="; SameSite=Strict";break;case"none":u+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return u}function w(l){return l.indexOf("%")!==-1?decodeURIComponent(l):l}function C(l){return e.call(l)==="[object Date]"}function R(l,g){try{return g(l)}catch{return l}}}}),nt=tt(at()),de=nt.default;/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/function pe(t){const e=de.parse(t),a={};for(const n in e)typeof e[n]<"u"&&(a[n]=e[n]);return a}function ne(){return pe(document.cookie)}function ot(t){if(typeof document>"u"||typeof location>"u")return{};switch(t.credentials){case"same-origin":{const e=new URL(t.url);return location.origin===e.origin?ne():{}}case"include":return ne();default:return{}}}function st(t){const e=t.headers.get("cookie"),a=e?pe(e):{},n=ot(t);for(const r in n)t.headers.append("cookie",de.serialize(r,n[r]));const o=we.getCookies(t.url),s=Object.fromEntries(o.map(r=>[r.key,r.value]));for(const r of o)t.headers.append("cookie",r.toString());return{...n,...s,...a}}var A=(t=>(t.HEAD="HEAD",t.GET="GET",t.POST="POST",t.PUT="PUT",t.PATCH="PATCH",t.OPTIONS="OPTIONS",t.DELETE="DELETE",t))(A||{});class rt extends ge{constructor(e,a,n,o){const s=typeof a=="function"?"[custom predicate]":a;super({info:{header:`${e}${s?` ${s}`:""}`,path:a,method:e},resolver:n,options:o}),this.checkRedundantQueryParameters()}checkRedundantQueryParameters(){const{method:e,path:a}=this.info;if(!a||a instanceof RegExp||typeof a=="function"||le(a)===a)return;$e(a).forEach((s,r)=>{}),ee.warn(`Found a redundant usage of query parameters in the request handler URL for "${e} ${a}". Please match against a path instead and access query parameters using "new URL(request.url).searchParams" instead. Learn more: https://mswjs.io/docs/http/intercepting-requests#querysearch-parameters`)}async parse(e){const a=new URL(e.request.url),n=st(e.request);if(typeof this.info.path=="function"){const s=await this.info.path({request:e.request,cookies:n});return{match:typeof s=="boolean"?{matches:s,params:{}}:s,cookies:n}}return{match:this.info.path?Ge(a,this.info.path,e.resolutionContext?.baseUrl):{matches:!1,params:{}},cookies:n}}async predicate(e){const a=this.matchMethod(e.request.method),n=e.parsedResult.match.matches;return a&&n}matchMethod(e){return this.info.method instanceof RegExp?this.info.method.test(e):Be(this.info.method,e)}extendResolverArgs(e){return{params:e.parsedResult.match?.params||{},cookies:e.parsedResult.cookies}}async log(e){const a=be(e.request.url),n=await Fe(e.request),o=await De(e.response),s=Ne(o.status);console.groupCollapsed(ee.formatMessage(`${xe()} ${e.request.method} ${a} (%c${o.status} ${o.statusText}%c)`),`color:${s}`,"color:inherit"),console.log("Request",n),console.log("Handler:",this),console.log("Response",o),console.groupEnd()}}function j(t){return(e,a,n={})=>new rt(t,e,a,n)}const J={all:j(/.+/),head:j(A.HEAD),get:j(A.GET),post:j(A.POST),put:j(A.PUT),delete:j(A.DELETE),patch:j(A.PATCH),options:j(A.OPTIONS)},it=Symbol("bodyType");class N extends te{[it]=null;constructor(e,a){const n=L(a);super(e,n),Te(this,n)}static error(){return super.error()}static text(e,a){const n=L(a);return n.headers.has("Content-Type")||n.headers.set("Content-Type","text/plain"),n.headers.has("Content-Length")||n.headers.set("Content-Length",e?new Blob([e]).size.toString():"0"),new N(e,n)}static json(e,a){const n=L(a);n.headers.has("Content-Type")||n.headers.set("Content-Type","application/json");const o=JSON.stringify(e);return n.headers.has("Content-Length")||n.headers.set("Content-Length",o?new Blob([o]).size.toString():"0"),new N(o,n)}static xml(e,a){const n=L(a);return n.headers.has("Content-Type")||n.headers.set("Content-Type","text/xml"),new N(e,n)}static html(e,a){const n=L(a);return n.headers.has("Content-Type")||n.headers.set("Content-Type","text/html"),new N(e,n)}static arrayBuffer(e,a){const n=L(a);return n.headers.has("Content-Type")||n.headers.set("Content-Type","application/octet-stream"),e&&!n.headers.has("Content-Length")&&n.headers.set("Content-Length",e.byteLength.toString()),new N(e,n)}static formData(e,a){return new N(e,L(a))}}const Z=2147483647,oe=100,ct=400,lt=5;function se(){return Se()?lt:Math.floor(Math.random()*(ct-oe)+oe)}async function I(t){let e;if(typeof t=="string")switch(t){case"infinite":{e=Z;break}case"real":{e=se();break}default:throw new Error(`Failed to delay a response: unknown delay mode "${t}". Please make sure you provide one of the supported modes ("real", "infinite") or a number.`)}else if(typeof t>"u")e=se();else{if(t>Z)throw new Error(`Failed to delay a response: provided delay duration (${t}) exceeds the maximum allowed duration for "setTimeout" (${Z}). This will cause the response to be returned immediately. Please use a number within the allowed range to delay the response by exact duration, or consider the "infinite" delay mode to delay the response indefinitely.`);e=t}return new Promise(a=>setTimeout(a,e))}Ie();function re(t,e){const[a,n]=_.useState(null),[o,s]=_.useState(!0),[r,y]=_.useState(null);function S(){fetch(t,e).then(v=>v.json()).then(v=>{n(v),s(!1)}).catch(v=>{y(v),s(!1)})}return _.useEffect(()=>{S()},[t,e.method]),{data:a,loading:o,error:r,fetchData:S}}async function ut(t,e,a){const n=await fetch(`https://local.dev/form/${t}/submissions/${e}`,{method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(a)}),o=await n.json();if(!n.ok){const s=new Error("Update submission failed");throw s.errors=[o],s}return o}function fe({model:t,submissionId:e}){const a=re(`https://local.dev/form/${t}`,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}),n=re(`https://local.dev/form/${t}/submissions/${e}`,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}});function o(s){return ut(t,e,s.data).then(r=>({...s,data:r}))}return{form:a.data,data:n.data,loading:a.loading||n.loading,error:a.error||n.error,onSubmit:o}}const{expect:c,fn:mt,userEvent:p,waitFor:m,within:k}=__STORYBOOK_MODULE_TEST__,Ft={title:"form/Form",component:X,argTypes:{form:{description:"Instead of loading a form from the `src` url, you can preload the form definition and pass it in with the `form` prop. You should also set `url` if you are using any advanced components like file upload or oauth.",control:"object"},src:{description:"The src of the form definition. This is commonly from a form.io server. When using src, the form will automatically submit the data to that url as well.",control:"text"},url:{description:"The url of the form definition. The form will not be loaded from this url and the submission will not be saved here either. This is used for file upload, oauth and other components or actions that need to know where the server is. Use this in connection with `form`",control:"text"},submission:{description:"Submission data to fill the form. You can either load a previous submission or create a submission with some pre-filled data. If you do not provide a submissions the form will initialize an empty submission using default values from the form. It is re-applied only when its content deeply changes (a new object with the same content is ignored), and never when it is just the echo of the user's input.",control:"object"},defaultSubmission:{description:"Initial submission applied once, when the form instance is created. Later changes are ignored, so user input is never overwritten. Use `submission` for controlled data.",control:"object"},options:{description:"An options object that can pass options to the formio.js Form that is rendered. You can set options such as `readOnly`, `noAlerts` or `hide`. There are [many options to be found in the formio.js library](https://github.com/formio/formio.js/wiki/Form-Renderer#options).",control:"object"},className:{control:"text"},style:{control:"object"},onPrevPage:{description:'A callback function for Wizard forms that gets called when the "Previous" button is pressed.',action:"onPrevPage"},onNextPage:{description:'A callback function for Wizard forms that gets called when the "Next" button is pressed.',action:"onNextPage"},onCancelSubmit:{description:"A callback function that gets called when the submission has been canceled.",action:"onCancelSubmit"},onCancelComponent:{description:"A callback function that gets called when a component has been canceled.",action:"onCancelComponent"},onCustomEvent:{description:'A callback function that is triggered from a button component configured with "Event" type.',action:"onCustomEvent"},onSubmit:{description:"A callback function that gets called when the submission has started. If src is not a Form.io server URL, this will be the final submit event.",action:"onSubmit"},onSubmitDone:{description:"A callback function that gets called when the submission has successfully been made to the server. This will only fire if src is set to a Form.io server URL.",action:"onSubmitDone"},onSubmitError:{description:"A callback function that gets called when an error occurs during submission (e.g. a validation error).",action:"onSubmitError"},onFormLoad:{description:"A callback function that gets called when the form is finished loading.",action:"onFormLoad"},onError:{description:"A callback function that gets called when an error occurs during submission (e.g. a validation error).",action:"onError"},onRender:{description:"A callback function that gets called when the form is finished rendering. param will depend on the form and display type.",action:"onRender"},onAttach:{description:"Event",action:"onAttach"},onBuild:{description:"Event",action:"onBuild"},onInitialized:{description:"Event",action:"onInitialized"},onLanguageChanged:{description:"Event",action:"onLanguageChanged"},onBeforeSetSubmission:{description:"Event",action:"onBeforeSetSubmission"},onSaveDraftBegin:{description:"Event",action:"onSaveDraftBegin"},onSaveDraft:{description:"Event",action:"onSaveDraft"},onRestoreDraft:{description:"Event",action:"onRestoreDraft"},onSubmissionDeleted:{description:"Event",action:"onSubmissionDeleted"},onRequestDone:{description:"Event",action:"onRequestDone"},otherEvents:{description:'A "catch-all" prop for subscribing to other events (for a complete list, see [our documentation](https://help.form.io/developers/form-development/form-renderer#form-events)).',control:"object"}},tags:["autodocs"],parameters:{docs:{description:{component:'The form component is the primary component of the system. It is what takes the form definition (json) and renders the\nform into html. There are multiple ways to send the form to the Form component. The two main ways are to pass the `src`\nprop with an url to the form definition, usually a form.io server. The other is to pass the `form` prop with the json\ndefinition and optionally a `url` prop with the location of the form.\n\n```tsx\nimport {Form} from "@tsed/react-formio/organisms/form/Form";\n```'}}}},V={args:{form:Re,onFormReady:mt(),options:{template:"tailwind",iconset:"lu"}},async play({canvasElement:t,args:e}){const a=k(t);await m(()=>{c(a.getByTestId("formio-container")).toBeInTheDocument()}),await m(()=>{c(a.getByTestId("formio-container")).toHaveClass("formio-form-ready")}),c(e.onFormReady).toHaveBeenCalled(),c(a.getByRole("textbox",{name:"Text Field"})).toBeInTheDocument()}},$={args:{src:"https://example.form.io/example",options:{template:"tailwind",iconset:"lu"}},async play({canvasElement:t}){const e=k(t);await m(()=>{c(e.getByTestId("formio-container")).toBeInTheDocument()}),await m(()=>{c(e.getByTestId("formio-container")).toHaveClass("formio-form-ready")}),c(e.getByRole("textbox",{name:"First Name"})).toBeInTheDocument()}},W={args:{form:Y,options:{template:"tailwind",iconset:"lu"},submission:{data:{firstName:"John",lastName:"Doe"}}},async play({canvasElement:t}){const e=k(t);await m(()=>{c(e.getByTestId("formio-container")).toBeInTheDocument()}),await m(()=>{c(e.getByTestId("formio-container")).toHaveClass("formio-form-ready")});const a=e.getByRole("textbox",{name:"First name"}),n=e.getByRole("textbox",{name:"Last name"});c(a).toHaveValue("John"),c(n).toHaveValue("Doe")}},z={render(t){const[e,a]=_.useState(()=>t.submission.data);_.useEffect(()=>{a(t.submission.data)},[t.submission]);const{defaultSubmission:n,...o}=t;return h.jsxs(h.Fragment,{children:[h.jsx(X,{...o,defaultSubmission:n,submission:{data:e},onSubmit:s=>{setTimeout(()=>{a(s.data)},1e3)}}),h.jsxs("div",{className:"flex flex-col space-y-5 pt-5",children:[h.jsx("strong",{children:"Preview:"}),h.jsx("pre",{className:"bg-gray-200 p-5 rounded-sm text-sm",children:h.jsx("code",{children:JSON.stringify(e,null,2)})}),h.jsx(Ee,{name:"raw-firstName",label:"Raw First name",value:e.firstName,onChange:(s,r)=>a({...e,firstName:r})})]})]})},args:{form:Y,options:{template:"tailwind",iconset:"lu"},submission:{data:{firstName:"John",lastName:"Doe"}}},async play({canvasElement:t}){const e=k(t);await m(()=>{c(e.getByTestId("formio-container")).toBeInTheDocument()}),await m(()=>{c(e.getByTestId("formio-container")).toHaveClass("formio-form-ready")});let a=e.getByRole("textbox",{name:"First name"}),n=e.getByRole("textbox",{name:"Last name"});c(a).toHaveValue("John"),c(n).toHaveValue("Doe"),await p.clear(a),await p.type(a,"Jane",{delay:100}),await m(()=>{c(a).toHaveValue("Jane")}),await p.clear(n),await p.type(n,"Smith",{delay:100}),await m(()=>{c(n).toHaveValue("Smith")});let o=e.getByRole("button",{name:"Submit"});p.click(o),await I(1200),a=e.getByRole("textbox",{name:"First name"}),n=e.getByRole("textbox",{name:"Last name"}),p.clear(n),p.type(n,"Endo",{delay:100}),await I(1100),await m(()=>{c(n).toHaveValue("Endo")}),o=e.getByRole("button",{name:"Submit"}),p.click(o),await I(1200);const s=e.getByRole("textbox",{name:"Raw First name"});await m(()=>{c(s).toHaveValue("Jane")}),p.clear(s),await I(100),p.type(s,"Romeo",{delay:100}),await m(()=>{c(s).toHaveValue("Romeo")}),a=e.getByRole("textbox",{name:"First name"}),await m(()=>{c(a).toHaveValue("Romeo")})}},q={parameters:{},args:{form:Y,options:{hooks:{async customValidation(t,e){setTimeout(()=>{e({message:"My custom message about this field",type:"custom",path:["firstName"],level:"error"})},200)}}}},play:async({canvasElement:t})=>{const e=k(t);await m(()=>{c(e.getByTestId("formio-container")).toBeInTheDocument()}),await m(()=>{c(e.getByTestId("formio-container")).toHaveClass("formio-form-ready")});let a=e.getByRole("textbox",{name:"First name"}),n=e.getByRole("textbox",{name:"Last name"});await p.clear(a),await p.type(a,"Jane",{delay:100}),await m(()=>{c(a).toHaveValue("Jane")}),await p.clear(n),await p.type(n,"Smith",{delay:100}),await m(()=>{c(n).toHaveValue("Smith")});let o=e.getByRole("button",{name:"Submit"});await p.click(o),await m(async()=>{c(e.getByText("Please fix the following errors before submitting.")).toBeInTheDocument()})}},M={args:{options:{template:"tailwind",iconset:"lu"}},parameters:{chromatic:{disableSnapshot:!1},msw:{handlers:[J.get("https://local.dev/form/Test",async()=>(await I(200),N.json(JSON.parse(JSON.stringify(Y))))),J.get("https://local.dev/form/Test/submissions/1",async()=>(await I(300),N.json({firstName:"Jane",lastName:"Doe"}))),J.put("https://local.dev/form/Test/submissions/1",async()=>(await I(800),N.json({firstName:"Jane",lastName:"Doe"})))]}},render(t){const{loading:e,form:a,data:n,onSubmit:o}=fe({model:"Test",submissionId:"1"});return e||!a?h.jsx("div",{"data-testid":"loading",children:"Loading..."}):h.jsxs("div",{className:"flex flex-col space-y-5",children:[h.jsx(X,{...t,form:a,submission:{data:n},onAsyncSubmit:o}),h.jsxs("div",{className:"flex flex-col space-y-5",children:[h.jsx("strong",{children:"Preview:"}),h.jsx("pre",{className:"bg-gray-200 p-5 rounded-sm text-sm",children:h.jsx("code",{children:JSON.stringify(n,null,2)})})]})]})},play:async({canvasElement:t})=>{const e=k(t);await m(()=>{c(e.getByTestId("loading")).toBeInTheDocument()}),await m(()=>{c(e.getByTestId("formio-container")).toBeInTheDocument()}),await m(()=>{c(e.getByTestId("formio-container")).toHaveClass("formio-form-ready")}),await I(200);let a=e.getByRole("textbox",{name:"First name"}),n=e.getByRole("textbox",{name:"Last name"});await p.clear(a),await m(()=>{c(a).toHaveValue("")}),await p.type(a,"Jane",{delay:100}),await m(()=>{c(a).toHaveValue("Jane")}),await p.clear(n),await p.type(n,"Smith",{delay:100}),await m(()=>{c(n).toHaveValue("Smith")});let o=e.getByRole("button",{name:"Submit"});await p.click(o),await I(1e3),await m(()=>{o=e.getByRole("button",{name:"Submit"}),c(o.children).toHaveLength(1)})}},K={args:{options:{template:"tailwind",iconset:"lu"}},parameters:{chromatic:{disableSnapshot:!1},msw:{handlers:[J.get("https://local.dev/form/Test2",async()=>(await I(200),N.json(JSON.parse(JSON.stringify(Y))))),J.get("https://local.dev/form/Test2/submissions/2",async()=>(await I(300),N.json({firstName:"John",lastName:"Doe"}))),J.put("https://local.dev/form/Test2/submissions/2",async()=>(await I(800),N.json({message:"My custom message about this field",type:"custom",path:["firstName"],level:"error"},{status:400})))]}},render(t){const{loading:e,form:a,data:n,onSubmit:o}=fe({model:"Test2",submissionId:"2"});return e||!a?h.jsx("div",{"data-testid":"loading",children:"Loading..."}):h.jsxs("div",{className:"flex flex-col space-y-5",children:[h.jsx(X,{...t,form:a,submission:{data:n},onAsyncSubmit:o}),h.jsxs("div",{className:"flex flex-col space-y-5",children:[h.jsx("strong",{children:"Preview:"}),h.jsx("pre",{className:"bg-gray-200 p-5 rounded-sm text-sm",children:h.jsx("code",{children:JSON.stringify(n,null,2)})})]})]})},play:async({canvasElement:t})=>{const e=k(t);await m(()=>{c(e.getByTestId("loading")).toBeInTheDocument()}),await m(()=>{c(e.getByTestId("formio-container")).toBeInTheDocument()}),await m(()=>{c(e.getByTestId("formio-container")).toHaveClass("formio-form-ready")}),await I(200);let a=e.getByRole("textbox",{name:"First name"}),n=e.getByRole("textbox",{name:"Last name"});await p.clear(a),await m(()=>{c(a).toHaveValue("")}),await p.type(a,"Jane",{delay:100}),await m(()=>{c(a).toHaveValue("Jane")}),await p.clear(n),await p.type(n,"Smith",{delay:100}),await m(()=>{c(n).toHaveValue("Smith")});let o=e.getByRole("button",{name:"Submit"});await p.click(o),await I(1e3),await m(async()=>{c(e.getByText("Please fix the following errors before submitting.")).toBeInTheDocument()})}};function dt(t){const[e,a]=_.useState(0);_.useEffect(()=>{const o=setInterval(()=>a(s=>s+1),1e3);return()=>clearInterval(o)},[]);const n={type:"form",display:"form",components:[{label:"First name",key:"firstName",type:"textfield",input:!0}]};return h.jsxs("div",{children:[h.jsxs("p",{"data-testid":"tick",children:["Parent renders: ",e]}),h.jsx(X,{form:t.inline?n:pt,options:t.inline?{template:"tailwind",iconset:"lu"}:ft,submission:t.inline?{data:{firstName:"Initial"}}:ht})]})}const pt={type:"form",display:"form",components:[{label:"First name",key:"firstName",type:"textfield",input:!0}]},ft={template:"tailwind",iconset:"lu"},ht={data:{firstName:"Initial"}},G={args:{inline:!0},render:t=>h.jsx(dt,{...t}),async play({canvasElement:t}){const e=k(t),a=await e.findByRole("textbox",{name:"First name"});await m(()=>c(a).toHaveValue("Initial")),await p.clear(a),await p.type(a,"John"),await m(()=>{const n=Number(e.getByTestId("tick").textContent?.match(/\d+/)?.[0]);c(n).toBeGreaterThanOrEqual(2)},{timeout:4e3}),c(e.getByRole("textbox",{name:"First name"})).toHaveValue("John")}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    form: form as any,
    onFormReady: fn(),
    options: {
      template: "tailwind",
      iconset: "lu"
    }
  },
  async play({
    canvasElement,
    args
  }) {
    const canvas = within(canvasElement);
    await waitFor(() => {
      expect(canvas.getByTestId("formio-container")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(canvas.getByTestId("formio-container")).toHaveClass("formio-form-ready");
    });
    expect(args.onFormReady).toHaveBeenCalled();
    expect(canvas.getByRole("textbox", {
      name: "Text Field"
    })).toBeInTheDocument();
  }
}`,...V.parameters?.docs?.source},description:{story:"Form with `form` property.",...V.parameters?.docs?.description}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://example.form.io/example",
    options: {
      template: "tailwind",
      iconset: "lu"
    }
  },
  async play({
    canvasElement
  }) {
    const canvas = within(canvasElement);
    await waitFor(() => {
      expect(canvas.getByTestId("formio-container")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(canvas.getByTestId("formio-container")).toHaveClass("formio-form-ready");
    });
    expect(canvas.getByRole("textbox", {
      name: "First Name"
    })).toBeInTheDocument();
  }
}`,...$.parameters?.docs?.source},description:{story:"Form with `src` property.",...$.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    form: formFirstname as never,
    options: {
      template: "tailwind",
      iconset: "lu"
    },
    submission: {
      data: {
        firstName: "John",
        lastName: "Doe"
      }
    }
  },
  async play({
    canvasElement
  }) {
    const canvas = within(canvasElement);
    await waitFor(() => {
      expect(canvas.getByTestId("formio-container")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(canvas.getByTestId("formio-container")).toHaveClass("formio-form-ready");
    });
    const firstnameInput = canvas.getByRole("textbox", {
      name: "First name"
    });
    const lastNameInput = canvas.getByRole("textbox", {
      name: "Last name"
    });
    expect(firstnameInput).toHaveValue("John");
    expect(lastNameInput).toHaveValue("Doe");
  }
}`,...W.parameters?.docs?.source},description:{story:"Form with `submission` property.",...W.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render(args) {
    type OnSubmitData = {
      firstName?: string;
      [key: string]: unknown;
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState<OnSubmitData>(() => args.submission!.data as OnSubmitData);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      setData(args.submission!.data as OnSubmitData);
    }, [args.submission]);

    // args are typed with a generic \`object\` payload, keep defaultSubmission out of the spread
    const {
      defaultSubmission,
      ...formArgs
    } = args;
    return <>
        <Form {...formArgs} defaultSubmission={defaultSubmission as SubmissionType<OnSubmitData>} submission={{
        data: data
      }} onSubmit={submission => {
        setTimeout(() => {
          setData(submission.data);
        }, 1000);
      }} />
        <div className='flex flex-col space-y-5 pt-5'>
          <strong>Preview:</strong>
          <pre className='bg-gray-200 p-5 rounded-sm text-sm'>
            <code>{JSON.stringify(data, null, 2)}</code>
          </pre>

          <InputText name={"raw-firstName"} label={"Raw First name"} value={data.firstName} onChange={(_, value) => setData({
          ...data,
          firstName: value
        })} />
        </div>
      </>;
  },
  args: {
    form: formFirstname as never,
    options: {
      template: "tailwind",
      iconset: "lu"
    },
    submission: {
      data: {
        firstName: "John",
        lastName: "Doe"
      }
    }
  },
  async play({
    canvasElement
  }) {
    const canvas = within(canvasElement);
    await waitFor(() => {
      expect(canvas.getByTestId("formio-container")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(canvas.getByTestId("formio-container")).toHaveClass("formio-form-ready");
    });
    let firstnameInput = canvas.getByRole("textbox", {
      name: "First name"
    });
    let lastNameInput = canvas.getByRole("textbox", {
      name: "Last name"
    });
    expect(firstnameInput).toHaveValue("John");
    expect(lastNameInput).toHaveValue("Doe");
    await userEvent.clear(firstnameInput);
    await userEvent.type(firstnameInput, "Jane", {
      delay: 100
    });
    await waitFor(() => {
      expect(firstnameInput).toHaveValue("Jane");
    });
    await userEvent.clear(lastNameInput);
    await userEvent.type(lastNameInput, "Smith", {
      delay: 100
    });
    await waitFor(() => {
      expect(lastNameInput).toHaveValue("Smith");
    });
    let submitButton = canvas.getByRole("button", {
      name: "Submit"
    });
    userEvent.click(submitButton);
    await delay(1200);
    firstnameInput = canvas.getByRole("textbox", {
      name: "First name"
    });
    lastNameInput = canvas.getByRole("textbox", {
      name: "Last name"
    });
    userEvent.clear(lastNameInput);
    userEvent.type(lastNameInput, "Endo", {
      delay: 100
    });
    await delay(1100);
    await waitFor(() => {
      expect(lastNameInput).toHaveValue("Endo");
    });
    submitButton = canvas.getByRole("button", {
      name: "Submit"
    });
    userEvent.click(submitButton);
    await delay(1200);
    const rawFirstNameInput = canvas.getByRole("textbox", {
      name: "Raw First name"
    });
    await waitFor(() => {
      expect(rawFirstNameInput).toHaveValue("Jane");
    });
    userEvent.clear(rawFirstNameInput);
    await delay(100);
    userEvent.type(rawFirstNameInput, "Romeo", {
      delay: 100
    });
    await waitFor(() => {
      expect(rawFirstNameInput).toHaveValue("Romeo");
    });
    firstnameInput = canvas.getByRole("textbox", {
      name: "First name"
    });
    await waitFor(() => {
      expect(firstnameInput).toHaveValue("Romeo");
    });
  }
}`,...z.parameters?.docs?.source},description:{story:"Form with `onSubmit` property.",...z.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  parameters: {},
  args: {
    form: formFirstname as never,
    options: {
      hooks: {
        async customValidation(submission: SubmissionType, callback: (error: any) => void) {
          setTimeout(() => {
            callback({
              message: "My custom message about this field",
              type: "custom",
              path: ["firstName"],
              level: "error"
            });
          }, 200);
        }
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      expect(canvas.getByTestId("formio-container")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(canvas.getByTestId("formio-container")).toHaveClass("formio-form-ready");
    });
    let firstnameInput = canvas.getByRole("textbox", {
      name: "First name"
    });
    let lastNameInput = canvas.getByRole("textbox", {
      name: "Last name"
    });
    await userEvent.clear(firstnameInput);
    await userEvent.type(firstnameInput, "Jane", {
      delay: 100
    });
    await waitFor(() => {
      expect(firstnameInput).toHaveValue("Jane");
    });
    await userEvent.clear(lastNameInput);
    await userEvent.type(lastNameInput, "Smith", {
      delay: 100
    });
    await waitFor(() => {
      expect(lastNameInput).toHaveValue("Smith");
    });
    let submitButton = canvas.getByRole("button", {
      name: "Submit"
    });
    await userEvent.click(submitButton);
    await waitFor(async () => {
      expect(canvas.getByText("Please fix the following errors before submitting.")).toBeInTheDocument();
    });
  }
}`,...q.parameters?.docs?.source},description:{story:"Form with custom validation hook",...q.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    options: {
      template: "tailwind",
      iconset: "lu"
    }
  },
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    msw: {
      handlers: [http.get("https://local.dev/form/Test", async () => {
        await delay(200);
        return HttpResponse.json(JSON.parse(JSON.stringify(formFirstname)));
      }), http.get("https://local.dev/form/Test/submissions/1", async () => {
        await delay(300);
        return HttpResponse.json({
          firstName: "Jane",
          lastName: "Doe"
        });
      }), http.put("https://local.dev/form/Test/submissions/1", async () => {
        await delay(800);
        return HttpResponse.json({
          firstName: "Jane",
          lastName: "Doe"
        });
      })]
    }
  },
  render(args) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {
      loading,
      form,
      data,
      onSubmit
    } = useEditForm({
      model: "Test",
      submissionId: "1"
    });
    if (loading || !form) {
      return <div data-testid='loading'>Loading...</div>;
    }
    return <div className='flex flex-col space-y-5'>
        <Form {...args} form={form} submission={{
        data: data!
      }} onAsyncSubmit={onSubmit} />

        <div className='flex flex-col space-y-5'>
          <strong>Preview:</strong>
          <pre className='bg-gray-200 p-5 rounded-sm text-sm'>
            <code>{JSON.stringify(data, null, 2)}</code>
          </pre>
        </div>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      expect(canvas.getByTestId("loading")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(canvas.getByTestId("formio-container")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(canvas.getByTestId("formio-container")).toHaveClass("formio-form-ready");
    });
    await delay(200);
    let firstnameInput = canvas.getByRole("textbox", {
      name: "First name"
    });
    let lastNameInput = canvas.getByRole("textbox", {
      name: "Last name"
    });
    await userEvent.clear(firstnameInput);
    await waitFor(() => {
      expect(firstnameInput).toHaveValue("");
    });
    await userEvent.type(firstnameInput, "Jane", {
      delay: 100
    });
    await waitFor(() => {
      expect(firstnameInput).toHaveValue("Jane");
    });
    await userEvent.clear(lastNameInput);
    await userEvent.type(lastNameInput, "Smith", {
      delay: 100
    });
    await waitFor(() => {
      expect(lastNameInput).toHaveValue("Smith");
    });
    let submitButton = canvas.getByRole("button", {
      name: "Submit"
    });
    await userEvent.click(submitButton);
    await delay(1000);
    await waitFor(() => {
      submitButton = canvas.getByRole("button", {
        name: "Submit"
      });
      expect(submitButton.children).toHaveLength(1);
    });
  }
}`,...M.parameters?.docs?.source},description:{story:"Fetch submission data from a server then use the custom `onAsyncSubmit` event to update the submission\ndata on a non form.io server.\n\nFormio support `form.action` property to send the form data to a custom server.\nBut here we want to handle the submission data manually and perform some custom action before sending the data to the server.",...M.parameters?.docs?.description}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    options: {
      template: "tailwind",
      iconset: "lu"
    }
  },
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    msw: {
      handlers: [http.get("https://local.dev/form/Test2", async () => {
        await delay(200);
        return HttpResponse.json(JSON.parse(JSON.stringify(formFirstname)));
      }), http.get("https://local.dev/form/Test2/submissions/2", async () => {
        await delay(300);
        return HttpResponse.json({
          firstName: "John",
          lastName: "Doe"
        });
      }), http.put("https://local.dev/form/Test2/submissions/2", async () => {
        await delay(800);
        return HttpResponse.json({
          message: "My custom message about this field",
          type: "custom",
          path: ["firstName"],
          level: "error"
        }, {
          status: 400
        });
      })]
    }
  },
  render(args) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {
      loading,
      form,
      data,
      onSubmit
    } = useEditForm({
      model: "Test2",
      submissionId: "2"
    });
    if (loading || !form) {
      return <div data-testid='loading'>Loading...</div>;
    }
    return <div className='flex flex-col space-y-5'>
        <Form {...args} form={form} submission={{
        data: data!
      }} onAsyncSubmit={onSubmit} />

        <div className='flex flex-col space-y-5'>
          <strong>Preview:</strong>
          <pre className='bg-gray-200 p-5 rounded-sm text-sm'>
            <code>{JSON.stringify(data, null, 2)}</code>
          </pre>
        </div>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      expect(canvas.getByTestId("loading")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(canvas.getByTestId("formio-container")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(canvas.getByTestId("formio-container")).toHaveClass("formio-form-ready");
    });
    await delay(200);
    let firstnameInput = canvas.getByRole("textbox", {
      name: "First name"
    });
    let lastNameInput = canvas.getByRole("textbox", {
      name: "Last name"
    });
    await userEvent.clear(firstnameInput);
    await waitFor(() => {
      expect(firstnameInput).toHaveValue("");
    });
    await userEvent.type(firstnameInput, "Jane", {
      delay: 100
    });
    await waitFor(() => {
      expect(firstnameInput).toHaveValue("Jane");
    });
    await userEvent.clear(lastNameInput);
    await userEvent.type(lastNameInput, "Smith", {
      delay: 100
    });
    await waitFor(() => {
      expect(lastNameInput).toHaveValue("Smith");
    });
    let submitButton = canvas.getByRole("button", {
      name: "Submit"
    });
    await userEvent.click(submitButton);
    await delay(1000);
    await waitFor(async () => {
      expect(canvas.getByText("Please fix the following errors before submitting.")).toBeInTheDocument();
    });
  }
}`,...K.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    inline: true
  },
  render: args => <RerenderingParent {...args} />,
  async play({
    canvasElement
  }) {
    const canvas = within(canvasElement);
    const input = await canvas.findByRole("textbox", {
      name: "First name"
    });
    await waitFor(() => expect(input).toHaveValue("Initial"));
    await userEvent.clear(input);
    await userEvent.type(input, "John");
    await waitFor(() => {
      const count = Number(canvas.getByTestId("tick").textContent?.match(/\\d+/)?.[0]);
      expect(count).toBeGreaterThanOrEqual(2);
    }, {
      timeout: 4000
    });
    expect(canvas.getByRole("textbox", {
      name: "First name"
    })).toHaveValue("John");
  }
}`,...G.parameters?.docs?.source},description:{story:"The parent re-renders every second (timer + `setState`) and passes `form`, `options` and `submission`\nas inline literals. The form is not recreated and the user's input is kept: `form`/`options` are compared\nby content, and `submission` is only re-applied when its content changes.",...G.parameters?.docs?.description}}};const Ct=["BasicUsageWithForm","BasicUsageWithSrc","WithSubmissionData","WithOnSubmit","CustomValidation","FetchSubmissionWithCustomAction","ErrorOnSubmitServer","ParentRerenders"];export{V as BasicUsageWithForm,$ as BasicUsageWithSrc,q as CustomValidation,K as ErrorOnSubmitServer,M as FetchSubmissionWithCustomAction,G as ParentRerenders,z as WithOnSubmit,W as WithSubmissionData,Ct as __namedExportsOrder,Ft as default};
