/*! For license information please see b14c3ded.d6fdf0f2.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53390],{89151:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var s=t(85893),n=t(11151);const o={sidebar_label:"Page.hover"},i="Page.hover() method",a={id:"api/puppeteer.page.hover",title:"Page.hover() method",description:"This method fetches an element with selector, scrolls it into view if needed, and then uses Page.mouse to hover over the center of the element. If there's no element matching selector, the method throws an error.",source:"@site/versioned_docs/version-22.12.0/api/puppeteer.page.hover.md",sourceDirName:"api",slug:"/api/puppeteer.page.hover",permalink:"/api/puppeteer.page.hover",draft:!1,unlisted:!1,tags:[],version:"22.12.0",frontMatter:{sidebar_label:"Page.hover"},sidebar:"api",previous:{title:"Page.goto",permalink:"/api/puppeteer.page.goto"},next:{title:"Page.isClosed",permalink:"/api/puppeteer.page.isclosed"}},l={},h=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"pagehover-method",children:"Page.hover() method"}),"\n",(0,s.jsxs)(r.p,{children:["This method fetches an element with ",(0,s.jsx)(r.code,{children:"selector"}),", scrolls it into view if needed, and then uses ",(0,s.jsx)(r.a,{href:"/api/puppeteer.page#mouse",children:"Page.mouse"})," to hover over the center of the element. If there's no element matching ",(0,s.jsx)(r.code,{children:"selector"}),", the method throws an error."]}),"\n",(0,s.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class Page {\n  hover(selector: string): Promise<void>;\n}\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"selector"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"string"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["A ",(0,s.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",children:"selector"})," to search for element to hover. If there are multiple elements satisfying the selector, the first will be hovered."]})})]})})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,s.jsxs)(r.p,{children:["Promise which resolves when the element matching ",(0,s.jsx)(r.code,{children:"selector"})," is successfully hovered. Promise gets rejected if there's no element matching ",(0,s.jsx)(r.code,{children:"selector"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(r.p,{children:["Shortcut for ",(0,s.jsx)(r.a,{href:"/api/puppeteer.page.hover",children:"page.mainFrame().hover(selector)"}),"."]})]})}function d(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},75251:(e,r,t)=>{var s=t(67294),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(e,r,t){var s,o={},h=null,c=null;for(s in void 0!==t&&(h=""+t),void 0!==r.key&&(h=""+r.key),void 0!==r.ref&&(c=r.ref),r)i.call(r,s)&&!l.hasOwnProperty(s)&&(o[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===o[s]&&(o[s]=r[s]);return{$$typeof:n,type:e,key:h,ref:c,props:o,_owner:a.current}}r.Fragment=o,r.jsx=h,r.jsxs=h},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>i});var s=t(67294);const n={},o=s.createContext(n);function i(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);