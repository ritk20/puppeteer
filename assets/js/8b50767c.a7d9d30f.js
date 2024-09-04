/*! For license information please see 8b50767c.a7d9d30f.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[27687],{3840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var r=n(74848),s=n(28453);const a={sidebar_label:"JSHandle.getProperties"},o="JSHandle.getProperties() method",p={id:"api/puppeteer.jshandle.getproperties",title:"JSHandle.getProperties() method",description:"Gets a map of handles representing the properties of the current handle.",source:"@site/versioned_docs/version-23.3.0/api/puppeteer.jshandle.getproperties.md",sourceDirName:"api",slug:"/api/puppeteer.jshandle.getproperties",permalink:"/api/puppeteer.jshandle.getproperties",draft:!1,unlisted:!1,tags:[],version:"23.3.0",frontMatter:{sidebar_label:"JSHandle.getProperties"},sidebar:"api",previous:{title:"JSHandle.evaluateHandle",permalink:"/api/puppeteer.jshandle.evaluatehandle"},next:{title:"JSHandle.getProperty",permalink:"/api/puppeteer.jshandle.getproperty"}},l={},i=[{value:"Signature",id:"signature",level:3},{value:"Example",id:"example",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"jshandlegetproperties-method",children:"JSHandle.getProperties() method"})}),"\n",(0,r.jsx)(t.p,{children:"Gets a map of handles representing the properties of the current handle."}),"\n",(0,r.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class JSHandle {\n  getProperties(): Promise<Map<string, JSHandle>>;\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(t.p,{children:["Promise<Map<string, ",(0,r.jsx)(t.a,{href:"/api/puppeteer.jshandle",children:"JSHandle"}),">>"]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const listHandle = await page.evaluateHandle(() => document.body.children);\nconst properties = await listHandle.getProperties();\nconst children = [];\nfor (const property of properties.values()) {\n  const element = property.asElement();\n  if (element) {\n    children.push(element);\n  }\n}\nchildren; // holds elementHandles to all children of document.body\n"})})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},21020:(e,t,n)=>{var r=n(96540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,p=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var r,a={},i=null,d=null;for(r in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,r)&&!l.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:s,type:e,key:i,ref:d,props:a,_owner:p.current}}t.Fragment=a,t.jsx=i,t.jsxs=i},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>p});var r=n(96540);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);