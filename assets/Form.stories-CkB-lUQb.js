import{j as y}from"./jsx-runtime-C-tXp4WL.js";import{t as he,u as Z,v as ye,w as ve,x as we,y as ge,z as be,A as _,B as xe,C as Te,r as U}from"./iframe-ADnK4W05.js";import{I as Se}from"./InputText-BSo90KnD.js";import{f as Ee}from"./form.fixture-CPh0OpUn.js";import{f as G}from"./form-firstname.fixture-C79VtWUc.js";import{F as X}from"./Form-QIPqDFqI.js";import"./preload-helper-D9Z9MdNV.js";import"./components-B7KBuUpW.js";import"./getEventValue-BcWrZMzo.js";import"./FormControl-v5qmNvKW.js";import"./clsx-B-dksMZM.js";function Ie(){he(typeof URL<"u",Z.formatMessage(`Global "URL" class is not defined. This likely means that you're running MSW in an environment that doesn't support all Node.js standard API (e.g. React Native). If that's the case, please use an appropriate polyfill for the "URL" class, like "react-native-url-polyfill".`))}function Re(t,e){return t.toLowerCase()===e.toLowerCase()}function Be(t){return t<300?"#69AB32":t<400?"#F0BB4B":"#E95F5D"}async function Ne(t){const a=await t.clone().text();return{url:new URL(t.url),method:t.method,headers:Object.fromEntries(t.headers.entries()),body:a}}const{message:Fe}=ye;async function Ce(t){const e=t.clone(),a=await e.text(),n=e.status||200,o=e.statusText||Fe[n]||"OK";return{status:n,statusText:o,headers:Object.fromEntries(e.headers.entries()),body:a}}function De(t){for(var e=[],a=0;a<t.length;){var n=t[a];if(n==="*"||n==="+"||n==="?"){e.push({type:"MODIFIER",index:a,value:t[a++]});continue}if(n==="\\"){e.push({type:"ESCAPED_CHAR",index:a++,value:t[a++]});continue}if(n==="{"){e.push({type:"OPEN",index:a,value:t[a++]});continue}if(n==="}"){e.push({type:"CLOSE",index:a,value:t[a++]});continue}if(n===":"){for(var o="",r=a+1;r<t.length;){var s=t.charCodeAt(r);if(s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122||s===95){o+=t[r++];continue}break}if(!o)throw new TypeError("Missing parameter name at ".concat(a));e.push({type:"NAME",index:a,value:o}),a=r;continue}if(n==="("){var h=1,S="",r=a+1;if(t[r]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(r));for(;r<t.length;){if(t[r]==="\\"){S+=t[r++]+t[r++];continue}if(t[r]===")"){if(h--,h===0){r++;break}}else if(t[r]==="("&&(h++,t[r+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(r));S+=t[r++]}if(h)throw new TypeError("Unbalanced pattern at ".concat(a));if(!S)throw new TypeError("Missing pattern at ".concat(a));e.push({type:"PATTERN",index:a,value:S}),a=r;continue}e.push({type:"CHAR",index:a,value:t[a++]})}return e.push({type:"END",index:a,value:""}),e}function Oe(t,e){e===void 0&&(e={});for(var a=De(t),n=e.prefixes,o=n===void 0?"./":n,r=e.delimiter,s=r===void 0?"/#?":r,h=[],S=0,v=0,E="",w=function(T){if(v<a.length&&a[v].type===T)return a[v++].value},C=function(T){var b=w(T);if(b!==void 0)return b;var F=a[v],K=F.type,fe=F.index;throw new TypeError("Unexpected ".concat(K," at ").concat(fe,", expected ").concat(T))},I=function(){for(var T="",b;b=w("CHAR")||w("ESCAPED_CHAR");)T+=b;return T},l=function(T){for(var b=0,F=s;b<F.length;b++){var K=F[b];if(T.indexOf(K)>-1)return!0}return!1},g=function(T){var b=h[h.length-1],F=T||(b&&typeof b=="string"?b:"");if(b&&!F)throw new TypeError('Must have text between two parameters, missing text after "'.concat(b.name,'"'));return!F||l(F)?"[^".concat(H(s),"]+?"):"(?:(?!".concat(H(F),")[^").concat(H(s),"])+?")};v<a.length;){var i=w("CHAR"),p=w("NAME"),D=w("PATTERN");if(p||D){var u=i||"";o.indexOf(u)===-1&&(E+=u,u=""),E&&(h.push(E),E=""),h.push({name:p||S++,prefix:u,suffix:"",pattern:D||g(u),modifier:w("MODIFIER")||""});continue}var m=i||w("ESCAPED_CHAR");if(m){E+=m;continue}E&&(h.push(E),E="");var x=w("OPEN");if(x){var u=I(),B=w("NAME")||"",O=w("PATTERN")||"",P=I();C("CLOSE"),h.push({name:B||(O?S++:""),pattern:B&&!O?g(u):O,prefix:u,suffix:P,modifier:w("MODIFIER")||""});continue}C("END")}return h}function Pe(t,e){var a=[],n=ie(t,a,e);return Ae(n,a,e)}function Ae(t,e,a){a===void 0&&(a={});var n=a.decode,o=n===void 0?function(r){return r}:n;return function(r){var s=t.exec(r);if(!s)return!1;for(var h=s[0],S=s.index,v=Object.create(null),E=function(C){if(s[C]===void 0)return"continue";var I=e[C-1];I.modifier==="*"||I.modifier==="+"?v[I.name]=s[C].split(I.prefix+I.suffix).map(function(l){return o(l,I)}):v[I.name]=o(s[C],I)},w=1;w<s.length;w++)E(w);return{path:h,index:S,params:v}}}function H(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function se(t){return t&&t.sensitive?"":"i"}function je(t,e){if(!e)return t;for(var a=/\((?:\?<(.*?)>)?(?!\?)/g,n=0,o=a.exec(t.source);o;)e.push({name:o[1]||n++,prefix:"",suffix:"",modifier:"",pattern:""}),o=a.exec(t.source);return t}function He(t,e,a){var n=t.map(function(o){return ie(o,e,a).source});return new RegExp("(?:".concat(n.join("|"),")"),se(a))}function _e(t,e,a){return ke(Oe(t,a),e,a)}function ke(t,e,a){a===void 0&&(a={});for(var n=a.strict,o=n===void 0?!1:n,r=a.start,s=r===void 0?!0:r,h=a.end,S=h===void 0?!0:h,v=a.encode,E=v===void 0?function(b){return b}:v,w=a.delimiter,C=w===void 0?"/#?":w,I=a.endsWith,l=I===void 0?"":I,g="[".concat(H(l),"]|$"),i="[".concat(H(C),"]"),p=s?"^":"",D=0,u=t;D<u.length;D++){var m=u[D];if(typeof m=="string")p+=H(E(m));else{var x=H(E(m.prefix)),B=H(E(m.suffix));if(m.pattern)if(e&&e.push(m),x||B)if(m.modifier==="+"||m.modifier==="*"){var O=m.modifier==="*"?"?":"";p+="(?:".concat(x,"((?:").concat(m.pattern,")(?:").concat(B).concat(x,"(?:").concat(m.pattern,"))*)").concat(B,")").concat(O)}else p+="(?:".concat(x,"(").concat(m.pattern,")").concat(B,")").concat(m.modifier);else{if(m.modifier==="+"||m.modifier==="*")throw new TypeError('Can not repeat "'.concat(m.name,'" without a prefix and suffix'));p+="(".concat(m.pattern,")").concat(m.modifier)}else p+="(?:".concat(x).concat(B,")").concat(m.modifier)}}if(S)o||(p+="".concat(i,"?")),p+=a.endsWith?"(?=".concat(g,")"):"$";else{var P=t[t.length-1],T=typeof P=="string"?i.indexOf(P[P.length-1])>-1:P===void 0;o||(p+="(?:".concat(i,"(?=").concat(g,"))?")),T||(p+="(?=".concat(i,"|").concat(g,")"))}return new RegExp(p,se(a))}function ie(t,e,a){return t instanceof RegExp?je(t,e):Array.isArray(t)?He(t,e,a):_e(t,e,a)}new TextEncoder;function Le(t){try{return new URL(t),!0}catch{return!1}}function te(t,e){const n=Object.getOwnPropertySymbols(e).find(o=>o.description===t);if(n)return Reflect.get(e,n)}var L=class extends Response{static isConfigurableStatusCode(t){return t>=200&&t<=599}static isRedirectResponse(t){return L.STATUS_CODES_WITH_REDIRECT.includes(t)}static isResponseWithBody(t){return!L.STATUS_CODES_WITHOUT_BODY.includes(t)}static setUrl(t,e){if(!t||t==="about:"||!Le(t))return;const a=te("state",e);a?a.urlList.push(new URL(t)):Object.defineProperty(e,"url",{value:t,enumerable:!0,configurable:!0,writable:!1})}static parseRawHeaders(t){const e=new Headers;for(let a=0;a<t.length;a+=2)e.append(t[a],t[a+1]);return e}constructor(t,e={}){var a;const n=(a=e.status)!=null?a:200,o=L.isConfigurableStatusCode(n)?n:200,r=L.isResponseWithBody(n)?t:null;if(super(r,{status:o,statusText:e.statusText,headers:e.headers}),n!==o){const s=te("state",this);s?s.status=n:Object.defineProperty(this,"status",{value:n,enumerable:!0,configurable:!0,writable:!1})}L.setUrl(e.url,this)}},ee=L;ee.STATUS_CODES_WITHOUT_BODY=[101,103,204,205,304];ee.STATUS_CODES_WITH_REDIRECT=[301,302,303,307,308];function Ue(t,e=!0){return[e&&t.origin,t.pathname].filter(Boolean).join("")}const Je=/[\?|#].*$/g;function Ve(t){return new URL(`/${t}`,"http://localhost").searchParams}function ce(t){return t.endsWith("?")?t:t.replace(Je,"")}function $e(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}function We(t,e){if($e(t)||t.startsWith("*"))return t;const a=e||typeof location<"u"&&location.href;return a?decodeURI(new URL(encodeURI(t),a).href):t}function ze(t,e){if(t instanceof RegExp)return t;const a=We(t,e);return ce(a)}function qe(t){return t.replace(/([:a-zA-Z_-]*)(\*{1,2})+/g,(e,a,n)=>{const o="(.*)";return a?a.startsWith(":")?`${a}${n}`:`${a}${o}`:o}).replace(/([^\/])(:)(?=\d+)/,"$1\\$2").replace(/^([^\/]+)(:)(?=\/\/)/,"$1\\$2")}function Me(t,e,a){const n=ze(e,a),o=typeof n=="string"?qe(n):n,r=Ue(t),s=Pe(o,{decode:decodeURIComponent})(r),h=s&&s.params||{};return{matches:s!==!1,params:h}}var Ge=Object.create,le=Object.defineProperty,Ye=Object.getOwnPropertyDescriptor,ue=Object.getOwnPropertyNames,Xe=Object.getPrototypeOf,Ke=Object.prototype.hasOwnProperty,Qe=(t,e)=>function(){return e||(0,t[ue(t)[0]])((e={exports:{}}).exports,e),e.exports},Ze=(t,e,a,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of ue(e))!Ke.call(t,o)&&o!==a&&le(t,o,{get:()=>e[o],enumerable:!(n=Ye(e,o))||n.enumerable});return t},et=(t,e,a)=>(a=t!=null?Ge(Xe(t)):{},Ze(le(a,"default",{value:t,enumerable:!0}),t)),tt=Qe({"node_modules/cookie/index.js"(t){t.parse=h,t.serialize=E;var e=Object.prototype.toString,a=Object.prototype.hasOwnProperty,n=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/,o=/^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/,r=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/;function h(l,g){if(typeof l!="string")throw new TypeError("argument str must be a string");var i={},p=l.length;if(p<2)return i;var D=g&&g.decode||w,u=0,m=0,x=0;do{if(m=l.indexOf("=",u),m===-1)break;if(x=l.indexOf(";",u),x===-1)x=p;else if(m>x){u=l.lastIndexOf(";",m-1)+1;continue}var B=S(l,u,m),O=v(l,m,B),P=l.slice(B,O);if(!a.call(i,P)){var T=S(l,m+1,x),b=v(l,x,T);l.charCodeAt(T)===34&&l.charCodeAt(b-1)===34&&(T++,b--);var F=l.slice(T,b);i[P]=I(F,D)}u=x+1}while(u<p);return i}function S(l,g,i){do{var p=l.charCodeAt(g);if(p!==32&&p!==9)return g}while(++g<i);return i}function v(l,g,i){for(;g>i;){var p=l.charCodeAt(--g);if(p!==32&&p!==9)return g+1}return i}function E(l,g,i){var p=i&&i.encode||encodeURIComponent;if(typeof p!="function")throw new TypeError("option encode is invalid");if(!n.test(l))throw new TypeError("argument name is invalid");var D=p(g);if(!o.test(D))throw new TypeError("argument val is invalid");var u=l+"="+D;if(!i)return u;if(i.maxAge!=null){var m=Math.floor(i.maxAge);if(!isFinite(m))throw new TypeError("option maxAge is invalid");u+="; Max-Age="+m}if(i.domain){if(!r.test(i.domain))throw new TypeError("option domain is invalid");u+="; Domain="+i.domain}if(i.path){if(!s.test(i.path))throw new TypeError("option path is invalid");u+="; Path="+i.path}if(i.expires){var x=i.expires;if(!C(x)||isNaN(x.valueOf()))throw new TypeError("option expires is invalid");u+="; Expires="+x.toUTCString()}if(i.httpOnly&&(u+="; HttpOnly"),i.secure&&(u+="; Secure"),i.partitioned&&(u+="; Partitioned"),i.priority){var B=typeof i.priority=="string"?i.priority.toLowerCase():i.priority;switch(B){case"low":u+="; Priority=Low";break;case"medium":u+="; Priority=Medium";break;case"high":u+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(i.sameSite){var O=typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite;switch(O){case!0:u+="; SameSite=Strict";break;case"lax":u+="; SameSite=Lax";break;case"strict":u+="; SameSite=Strict";break;case"none":u+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return u}function w(l){return l.indexOf("%")!==-1?decodeURIComponent(l):l}function C(l){return e.call(l)==="[object Date]"}function I(l,g){try{return g(l)}catch{return l}}}}),at=et(tt()),me=at.default;/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/function de(t){const e=me.parse(t),a={};for(const n in e)typeof e[n]<"u"&&(a[n]=e[n]);return a}function ae(){return de(document.cookie)}function nt(t){if(typeof document>"u"||typeof location>"u")return{};switch(t.credentials){case"same-origin":{const e=new URL(t.url);return location.origin===e.origin?ae():{}}case"include":return ae();default:return{}}}function ot(t){const e=t.headers.get("cookie"),a=e?de(e):{},n=nt(t);for(const s in n)t.headers.append("cookie",me.serialize(s,n[s]));const o=ve.getCookies(t.url),r=Object.fromEntries(o.map(s=>[s.key,s.value]));for(const s of o)t.headers.append("cookie",s.toString());return{...n,...r,...a}}var j=(t=>(t.HEAD="HEAD",t.GET="GET",t.POST="POST",t.PUT="PUT",t.PATCH="PATCH",t.OPTIONS="OPTIONS",t.DELETE="DELETE",t))(j||{});class rt extends we{constructor(e,a,n,o){const r=typeof a=="function"?"[custom predicate]":a;super({info:{header:`${e}${r?` ${r}`:""}`,path:a,method:e},resolver:n,options:o}),this.checkRedundantQueryParameters()}checkRedundantQueryParameters(){const{method:e,path:a}=this.info;if(!a||a instanceof RegExp||typeof a=="function"||ce(a)===a)return;Ve(a).forEach((r,s)=>{}),Z.warn(`Found a redundant usage of query parameters in the request handler URL for "${e} ${a}". Please match against a path instead and access query parameters using "new URL(request.url).searchParams" instead. Learn more: https://mswjs.io/docs/http/intercepting-requests#querysearch-parameters`)}async parse(e){const a=new URL(e.request.url),n=ot(e.request);if(typeof this.info.path=="function"){const r=await this.info.path({request:e.request,cookies:n});return{match:typeof r=="boolean"?{matches:r,params:{}}:r,cookies:n}}return{match:this.info.path?Me(a,this.info.path,e.resolutionContext?.baseUrl):{matches:!1,params:{}},cookies:n}}async predicate(e){const a=this.matchMethod(e.request.method),n=e.parsedResult.match.matches;return a&&n}matchMethod(e){return this.info.method instanceof RegExp?this.info.method.test(e):Re(this.info.method,e)}extendResolverArgs(e){return{params:e.parsedResult.match?.params||{},cookies:e.parsedResult.cookies}}async log(e){const a=ge(e.request.url),n=await Ne(e.request),o=await Ce(e.response),r=Be(o.status);console.groupCollapsed(Z.formatMessage(`${be()} ${e.request.method} ${a} (%c${o.status} ${o.statusText}%c)`),`color:${r}`,"color:inherit"),console.log("Request",n),console.log("Handler:",this),console.log("Response",o),console.groupEnd()}}function A(t){return(e,a,n={})=>new rt(t,e,a,n)}const J={all:A(/.+/),head:A(j.HEAD),get:A(j.GET),post:A(j.POST),put:A(j.PUT),delete:A(j.DELETE),patch:A(j.PATCH),options:A(j.OPTIONS)},st=Symbol("bodyType");class N extends ee{[st]=null;constructor(e,a){const n=_(a);super(e,n),xe(this,n)}static error(){return super.error()}static text(e,a){const n=_(a);return n.headers.has("Content-Type")||n.headers.set("Content-Type","text/plain"),n.headers.has("Content-Length")||n.headers.set("Content-Length",e?new Blob([e]).size.toString():"0"),new N(e,n)}static json(e,a){const n=_(a);n.headers.has("Content-Type")||n.headers.set("Content-Type","application/json");const o=JSON.stringify(e);return n.headers.has("Content-Length")||n.headers.set("Content-Length",o?new Blob([o]).size.toString():"0"),new N(o,n)}static xml(e,a){const n=_(a);return n.headers.has("Content-Type")||n.headers.set("Content-Type","text/xml"),new N(e,n)}static html(e,a){const n=_(a);return n.headers.has("Content-Type")||n.headers.set("Content-Type","text/html"),new N(e,n)}static arrayBuffer(e,a){const n=_(a);return n.headers.has("Content-Type")||n.headers.set("Content-Type","application/octet-stream"),e&&!n.headers.has("Content-Length")&&n.headers.set("Content-Length",e.byteLength.toString()),new N(e,n)}static formData(e,a){return new N(e,_(a))}}const Q=2147483647,ne=100,it=400,ct=5;function oe(){return Te()?ct:Math.floor(Math.random()*(it-ne)+ne)}async function R(t){let e;if(typeof t=="string")switch(t){case"infinite":{e=Q;break}case"real":{e=oe();break}default:throw new Error(`Failed to delay a response: unknown delay mode "${t}". Please make sure you provide one of the supported modes ("real", "infinite") or a number.`)}else if(typeof t>"u")e=oe();else{if(t>Q)throw new Error(`Failed to delay a response: provided delay duration (${t}) exceeds the maximum allowed duration for "setTimeout" (${Q}). This will cause the response to be returned immediately. Please use a number within the allowed range to delay the response by exact duration, or consider the "infinite" delay mode to delay the response indefinitely.`);e=t}return new Promise(a=>setTimeout(a,e))}Ie();function re(t,e){const[a,n]=U.useState(null),[o,r]=U.useState(!0),[s,h]=U.useState(null);function S(){fetch(t,e).then(v=>v.json()).then(v=>{n(v),r(!1)}).catch(v=>{h(v),r(!1)})}return U.useEffect(()=>{S()},[t,e.method]),{data:a,loading:o,error:s,fetchData:S}}async function lt(t,e,a){const n=await fetch(`https://local.dev/form/${t}/submissions/${e}`,{method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(a)}),o=await n.json();if(!n.ok){const r=new Error("Update submission failed");throw r.errors=[o],r}return o}function pe({model:t,submissionId:e}){const a=re(`https://local.dev/form/${t}`,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}),n=re(`https://local.dev/form/${t}/submissions/${e}`,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}});function o(r){return lt(t,e,r.data).then(s=>({...r,data:s}))}return{form:a.data,data:n.data,loading:a.loading||n.loading,error:a.error||n.error,onSubmit:o}}const{expect:c,fn:ut,userEvent:f,waitFor:d,within:k}=__STORYBOOK_MODULE_TEST__,Tt={title:"form/Form",component:X,argTypes:{form:{description:"Instead of loading a form from the `src` url, you can preload the form definition and pass it in with the `form` prop. You should also set `url` if you are using any advanced components like file upload or oauth.",control:"object"},src:{description:"The src of the form definition. This is commonly from a form.io server. When using src, the form will automatically submit the data to that url as well.",control:"text"},url:{description:"The url of the form definition. The form will not be loaded from this url and the submission will not be saved here either. This is used for file upload, oauth and other components or actions that need to know where the server is. Use this in connection with `form`",control:"text"},submission:{description:"Submission data to fill the form. You can either load a previous submission or create a submission with some pre-filled data. If you do not provide a submissions the form will initialize an empty submission using default values from the form.",control:"object"},options:{description:"An options object that can pass options to the formio.js Form that is rendered. You can set options such as `readOnly`, `noAlerts` or `hide`. There are [many options to be found in the formio.js library](https://github.com/formio/formio.js/wiki/Form-Renderer#options).",control:"object"},className:{control:"text"},style:{control:"object"},onPrevPage:{description:'A callback function for Wizard forms that gets called when the "Previous" button is pressed.',action:"onPrevPage"},onNextPage:{description:'A callback function for Wizard forms that gets called when the "Next" button is pressed.',action:"onNextPage"},onCancelSubmit:{description:"A callback function that gets called when the submission has been canceled.",action:"onCancelSubmit"},onCancelComponent:{description:"A callback function that gets called when a component has been canceled.",action:"onCancelComponent"},onCustomEvent:{description:'A callback function that is triggered from a button component configured with "Event" type.',action:"onCustomEvent"},onSubmit:{description:"A callback function that gets called when the submission has started. If src is not a Form.io server URL, this will be the final submit event.",action:"onSubmit"},onSubmitDone:{description:"A callback function that gets called when the submission has successfully been made to the server. This will only fire if src is set to a Form.io server URL.",action:"onSubmitDone"},onSubmitError:{description:"A callback function that gets called when an error occurs during submission (e.g. a validation error).",action:"onSubmitError"},onFormLoad:{description:"A callback function that gets called when the form is finished loading.",action:"onFormLoad"},onError:{description:"A callback function that gets called when an error occurs during submission (e.g. a validation error).",action:"onError"},onRender:{description:"A callback function that gets called when the form is finished rendering. param will depend on the form and display type.",action:"onRender"},onAttach:{description:"Event",action:"onAttach"},onBuild:{description:"Event",action:"onBuild"},onInitialized:{description:"Event",action:"onInitialized"},onLanguageChanged:{description:"Event",action:"onLanguageChanged"},onBeforeSetSubmission:{description:"Event",action:"onBeforeSetSubmission"},onSaveDraftBegin:{description:"Event",action:"onSaveDraftBegin"},onSaveDraft:{description:"Event",action:"onSaveDraft"},onRestoreDraft:{description:"Event",action:"onRestoreDraft"},onSubmissionDeleted:{description:"Event",action:"onSubmissionDeleted"},onRequestDone:{description:"Event",action:"onRequestDone"},otherEvents:{description:'A "catch-all" prop for subscribing to other events (for a complete list, see [our documentation](https://help.form.io/developers/form-development/form-renderer#form-events)).',control:"object"}},tags:["autodocs"],parameters:{docs:{description:{component:'The form component is the primary component of the system. It is what takes the form definition (json) and renders the\nform into html. There are multiple ways to send the form to the Form component. The two main ways are to pass the `src`\nprop with an url to the form definition, usually a form.io server. The other is to pass the `form` prop with the json\ndefinition and optionally a `url` prop with the location of the form.\n\n```tsx\nimport {Form} from "@tsed/react-formio/organisms/form/Form";\n```'}}}},V={args:{form:Ee,onFormReady:ut(),options:{template:"tailwind",iconset:"lu"}},async play({canvasElement:t,args:e}){const a=k(t);await d(()=>{c(a.getByTestId("formio-container")).toBeInTheDocument()}),await d(()=>{c(a.getByTestId("formio-container")).toHaveClass("formio-form-ready")}),c(e.onFormReady).toHaveBeenCalled(),c(a.getByRole("textbox",{name:"Text Field"})).toBeInTheDocument()}},$={args:{src:"https://example.form.io/example",options:{template:"tailwind",iconset:"lu"}},async play({canvasElement:t}){const e=k(t);await d(()=>{c(e.getByTestId("formio-container")).toBeInTheDocument()}),await d(()=>{c(e.getByTestId("formio-container")).toHaveClass("formio-form-ready")}),c(e.getByRole("textbox",{name:"First Name"})).toBeInTheDocument()}},W={args:{form:G,options:{template:"tailwind",iconset:"lu"},submission:{data:{firstName:"John",lastName:"Doe"}}},async play({canvasElement:t}){const e=k(t);await d(()=>{c(e.getByTestId("formio-container")).toBeInTheDocument()}),await d(()=>{c(e.getByTestId("formio-container")).toHaveClass("formio-form-ready")});const a=e.getByRole("textbox",{name:"First name"}),n=e.getByRole("textbox",{name:"Last name"});c(a).toHaveValue("John"),c(n).toHaveValue("Doe")}},z={render(t){const[e,a]=U.useState(()=>t.submission.data);return U.useEffect(()=>{a(t.submission.data)},[t.submission]),y.jsxs(y.Fragment,{children:[y.jsx(X,{...t,submission:{data:e},onSubmit:n=>{setTimeout(()=>{a(n.data)},1e3)}}),y.jsxs("div",{className:"flex flex-col space-y-5 pt-5",children:[y.jsx("strong",{children:"Preview:"}),y.jsx("pre",{className:"bg-gray-200 p-5 rounded-sm text-sm",children:y.jsx("code",{children:JSON.stringify(e,null,2)})}),y.jsx(Se,{name:"raw-firstName",label:"Raw First name",value:e.firstName,onChange:(n,o)=>a({...e,firstName:o})})]})]})},args:{form:G,options:{template:"tailwind",iconset:"lu"},submission:{data:{firstName:"John",lastName:"Doe"}}},async play({canvasElement:t}){const e=k(t);await d(()=>{c(e.getByTestId("formio-container")).toBeInTheDocument()}),await d(()=>{c(e.getByTestId("formio-container")).toHaveClass("formio-form-ready")});let a=e.getByRole("textbox",{name:"First name"}),n=e.getByRole("textbox",{name:"Last name"});c(a).toHaveValue("John"),c(n).toHaveValue("Doe"),await f.clear(a),await f.type(a,"Jane",{delay:100}),await d(()=>{c(a).toHaveValue("Jane")}),await f.clear(n),await f.type(n,"Smith",{delay:100}),await d(()=>{c(n).toHaveValue("Smith")});let o=e.getByRole("button",{name:"Submit"});f.click(o),await R(1200),a=e.getByRole("textbox",{name:"First name"}),n=e.getByRole("textbox",{name:"Last name"}),f.clear(n),f.type(n,"Endo",{delay:100}),await R(1100),await d(()=>{c(n).toHaveValue("Endo")}),o=e.getByRole("button",{name:"Submit"}),f.click(o),await R(1200);const r=e.getByRole("textbox",{name:"Raw First name"});await d(()=>{c(r).toHaveValue("Jane")}),f.clear(r),await R(100),f.type(r,"Romeo",{delay:100}),await d(()=>{c(r).toHaveValue("Romeo")}),a=e.getByRole("textbox",{name:"First name"}),await d(()=>{c(a).toHaveValue("Romeo")})}},q={parameters:{},args:{form:G,options:{hooks:{async customValidation(t,e){setTimeout(()=>{e({message:"My custom message about this field",type:"custom",path:["firstName"],level:"error"})},200)}}}},play:async({canvasElement:t})=>{const e=k(t);await d(()=>{c(e.getByTestId("formio-container")).toBeInTheDocument()}),await d(()=>{c(e.getByTestId("formio-container")).toHaveClass("formio-form-ready")});let a=e.getByRole("textbox",{name:"First name"}),n=e.getByRole("textbox",{name:"Last name"});await f.clear(a),await f.type(a,"Jane",{delay:100}),await d(()=>{c(a).toHaveValue("Jane")}),await f.clear(n),await f.type(n,"Smith",{delay:100}),await d(()=>{c(n).toHaveValue("Smith")});let o=e.getByRole("button",{name:"Submit"});await f.click(o),await d(async()=>{c(e.getByText("Please fix the following errors before submitting.")).toBeInTheDocument()})}},M={args:{options:{template:"tailwind",iconset:"lu"}},parameters:{chromatic:{disableSnapshot:!1},msw:{handlers:[J.get("https://local.dev/form/Test",async()=>(await R(200),N.json(JSON.parse(JSON.stringify(G))))),J.get("https://local.dev/form/Test/submissions/1",async()=>(await R(300),N.json({firstName:"Jane",lastName:"Doe"}))),J.put("https://local.dev/form/Test/submissions/1",async()=>(await R(800),N.json({firstName:"Jane",lastName:"Doe"})))]}},render(t){const{loading:e,form:a,data:n,onSubmit:o}=pe({model:"Test",submissionId:"1"});return e||!a?y.jsx("div",{"data-testid":"loading",children:"Loading..."}):y.jsxs("div",{className:"flex flex-col space-y-5",children:[y.jsx(X,{...t,form:a,submission:{data:n},onAsyncSubmit:o}),y.jsxs("div",{className:"flex flex-col space-y-5",children:[y.jsx("strong",{children:"Preview:"}),y.jsx("pre",{className:"bg-gray-200 p-5 rounded-sm text-sm",children:y.jsx("code",{children:JSON.stringify(n,null,2)})})]})]})},play:async({canvasElement:t})=>{const e=k(t);await d(()=>{c(e.getByTestId("loading")).toBeInTheDocument()}),await d(()=>{c(e.getByTestId("formio-container")).toBeInTheDocument()}),await d(()=>{c(e.getByTestId("formio-container")).toHaveClass("formio-form-ready")}),await R(200);let a=e.getByRole("textbox",{name:"First name"}),n=e.getByRole("textbox",{name:"Last name"});await f.clear(a),await d(()=>{c(a).toHaveValue("")}),await f.type(a,"Jane",{delay:100}),await d(()=>{c(a).toHaveValue("Jane")}),await f.clear(n),await f.type(n,"Smith",{delay:100}),await d(()=>{c(n).toHaveValue("Smith")});let o=e.getByRole("button",{name:"Submit"});await f.click(o),await R(1e3),await d(()=>{o=e.getByRole("button",{name:"Submit"}),c(o.children).toHaveLength(1)})}},Y={args:{options:{template:"tailwind",iconset:"lu"}},parameters:{chromatic:{disableSnapshot:!1},msw:{handlers:[J.get("https://local.dev/form/Test2",async()=>(await R(200),N.json(JSON.parse(JSON.stringify(G))))),J.get("https://local.dev/form/Test2/submissions/2",async()=>(await R(300),N.json({firstName:"John",lastName:"Doe"}))),J.put("https://local.dev/form/Test2/submissions/2",async()=>(await R(800),N.json({message:"My custom message about this field",type:"custom",path:["firstName"],level:"error"},{status:400})))]}},render(t){const{loading:e,form:a,data:n,onSubmit:o}=pe({model:"Test2",submissionId:"2"});return e||!a?y.jsx("div",{"data-testid":"loading",children:"Loading..."}):y.jsxs("div",{className:"flex flex-col space-y-5",children:[y.jsx(X,{...t,form:a,submission:{data:n},onAsyncSubmit:o}),y.jsxs("div",{className:"flex flex-col space-y-5",children:[y.jsx("strong",{children:"Preview:"}),y.jsx("pre",{className:"bg-gray-200 p-5 rounded-sm text-sm",children:y.jsx("code",{children:JSON.stringify(n,null,2)})})]})]})},play:async({canvasElement:t})=>{const e=k(t);await d(()=>{c(e.getByTestId("loading")).toBeInTheDocument()}),await d(()=>{c(e.getByTestId("formio-container")).toBeInTheDocument()}),await d(()=>{c(e.getByTestId("formio-container")).toHaveClass("formio-form-ready")}),await R(200);let a=e.getByRole("textbox",{name:"First name"}),n=e.getByRole("textbox",{name:"Last name"});await f.clear(a),await d(()=>{c(a).toHaveValue("")}),await f.type(a,"Jane",{delay:100}),await d(()=>{c(a).toHaveValue("Jane")}),await f.clear(n),await f.type(n,"Smith",{delay:100}),await d(()=>{c(n).toHaveValue("Smith")});let o=e.getByRole("button",{name:"Submit"});await f.click(o),await R(1e3),await d(async()=>{c(e.getByText("Please fix the following errors before submitting.")).toBeInTheDocument()})}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
    return <>
        <Form {...args} submission={{
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
}`,...M.parameters?.docs?.source},description:{story:"Fetch submission data from a server then use the custom `onAsyncSubmit` event to update the submission\ndata on a non form.io server.\n\nFormio support `form.action` property to send the form data to a custom server.\nBut here we want to handle the submission data manually and perform some custom action before sending the data to the server.",...M.parameters?.docs?.description}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}};const St=["BasicUsageWithForm","BasicUsageWithSrc","WithSubmissionData","WithOnSubmit","CustomValidation","FetchSubmissionWithCustomAction","ErrorOnSubmitServer"];export{V as BasicUsageWithForm,$ as BasicUsageWithSrc,q as CustomValidation,Y as ErrorOnSubmitServer,M as FetchSubmissionWithCustomAction,z as WithOnSubmit,W as WithSubmissionData,St as __namedExportsOrder,Tt as default};
