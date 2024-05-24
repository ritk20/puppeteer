/*! For license information please see 0cc88b30.ce41cd27.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[33109],{1640:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var t=r(85893),o=r(11151);const s={},a="Browser management",c={id:"guides/browser-management",title:"Browser management",description:"Usually, you start working with Puppeteer by either launching launching or connecting to a browser.",source:"@site/versioned_docs/version-22.10.0/guides/browser-management.md",sourceDirName:"guides",slug:"/guides/browser-management",permalink:"/guides/browser-management",draft:!1,unlisted:!1,tags:[],version:"22.10.0",frontMatter:{},sidebar:"docs",previous:{title:"Core concepts",permalink:"/category/core-concepts"},next:{title:"Page interactions",permalink:"/guides/page-interactions"}},i={},p=[{value:"Launching a browser",id:"launching-a-browser",level:2},{value:"Closing a browser",id:"closing-a-browser",level:2},{value:"Browser contexts",id:"browser-contexts",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Connecting to a running browser",id:"connecting-to-a-running-browser",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"browser-management",children:"Browser management"}),"\n",(0,t.jsxs)(n.p,{children:["Usually, you start working with Puppeteer by either launching ",(0,t.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.puppeteernode.launch",children:"launching"})," or ",(0,t.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.puppeteernode.connect",children:"connecting"})," to a browser."]}),"\n",(0,t.jsx)(n.h2,{id:"launching-a-browser",children:"Launching a browser"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch();\n\nconst page = await browser.newPage();\n\n// ...\n"})}),"\n",(0,t.jsx)(n.h2,{id:"closing-a-browser",children:"Closing a browser"}),"\n",(0,t.jsxs)(n.p,{children:["To gracefully close the browser, you the ",(0,t.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.browser.close",children:(0,t.jsx)(n.code,{children:"browser.close()"})})," method:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch();\n\nconst page = await browser.newPage();\n\nawait browser.close();\n"})}),"\n",(0,t.jsx)(n.h2,{id:"browser-contexts",children:"Browser contexts"}),"\n",(0,t.jsxs)(n.p,{children:["If you need to isolate your automation taks, use ",(0,t.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.browser.createbrowsercontext/",children:"BrowserContexts"}),". Cookies and local storage are not shared between browser contexts. Also, you can close all pages in the context by closing the context."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch();\n\nconst context = await browser.createBrowserContext();\n\nconst page1 = await context.newPage();\nconst page2 = await context.newPage();\n\nawait context.close();\n"})}),"\n",(0,t.jsx)(n.h2,{id:"permissions",children:"Permissions"}),"\n",(0,t.jsx)(n.p,{children:"You can also configure permissions for a browser context:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch();\nconst context = browser.defaultBrowserContext();\n\nawait context.overridePermissions('https://html5demos.com', ['geolocation']);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"connecting-to-a-running-browser",children:"Connecting to a running browser"}),"\n",(0,t.jsxs)(n.p,{children:["If you launched a browser outside of Puppeteer, you can connect to it using ",(0,t.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.puppeteernode.connect/",children:(0,t.jsx)(n.code,{children:"connect"})})," method. Usually, you can grab a WebSocket endpoint URL from the browser output:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const browser = await puppeteer.connect({\n  browserWSEndpoint: 'ws://127.0.0.1:9222/...',\n});\n\nconst page = await browser.newPage();\n\nbrowser.disconnect();\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Unlike ",(0,t.jsx)(n.code,{children:"browser.close()"}),", ",(0,t.jsx)(n.code,{children:"browser.disconnect()"})," does not shut down the browser or close any pages."]})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},75251:(e,n,r)=>{var t=r(67294),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,r){var t,s={},p=null,l=null;for(t in void 0!==r&&(p=""+r),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,t)&&!i.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:o,type:e,key:p,ref:l,props:s,_owner:c.current}}n.Fragment=s,n.jsx=p,n.jsxs=p},85893:(e,n,r)=>{e.exports=r(75251)},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>a});var t=r(67294);const o={},s=t.createContext(o);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);