/*! For license information please see 0713a927.32179e30.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[17042],{55787:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var t=n(85893),s=n(11151);const i={sidebar_label:"ChromeSettings"},o="ChromeSettings interface",d={id:"api/puppeteer.chromesettings",title:"ChromeSettings interface",description:"Signature",source:"@site/../docs/api/puppeteer.chromesettings.md",sourceDirName:"api",slug:"/api/puppeteer.chromesettings",permalink:"/next/api/puppeteer.chromesettings",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"ChromeSettings"},sidebar:"api",previous:{title:"ChromeReleaseChannel",permalink:"/next/api/puppeteer.chromereleasechannel"},next:{title:"ClickOptions",permalink:"/next/api/puppeteer.clickoptions"}},c={},l=[{value:"Signature",id:"signature",level:3},{value:"Properties",id:"properties",level:2}];function p(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"chromesettings-interface",children:"ChromeSettings interface"}),"\n",(0,t.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export interface ChromeSettings\n"})}),"\n",(0,t.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Property"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Modifiers"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Description"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Default"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"downloadbaseurl",children:"downloadBaseUrl"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"string"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)(r.p,{children:"Specifies the URL prefix that is used to download the browser."}),(0,t.jsxs)(r.p,{children:["Can be overridden by ",(0,t.jsx)(r.code,{children:"PUPPETEER_CHROME_DOWNLOAD_BASE_URL"}),"."]}),(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Remarks:"})}),(0,t.jsx)(r.p,{children:"This must include the protocol and may even need a path prefix."})]}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://storage.googleapis.com/chrome-for-testing-public",children:"https://storage.googleapis.com/chrome-for-testing-public"})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"skipdownload",children:"skipDownload"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"boolean"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)(r.p,{children:"Tells Puppeteer to not download the browser during installation."}),(0,t.jsxs)(r.p,{children:["Can be overridden by ",(0,t.jsx)(r.code,{children:"PUPPETEER_CHROME_SKIP_DOWNLOAD"}),"."]})]}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"false"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"version",children:"version"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"string"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)(r.p,{children:"Specifies a certain version of the browser you'd like Puppeteer to use."}),(0,t.jsxs)(r.p,{children:["Can be overridden by ",(0,t.jsx)(r.code,{children:"PUPPETEER_CHROME_VERSION"})," or ",(0,t.jsx)(r.code,{children:"PUPPETEER_SKIP_CHROME_DOWNLOAD"}),"."]}),(0,t.jsxs)(r.p,{children:["See ",(0,t.jsx)(r.a,{href:"/next/api/puppeteer.puppeteernode.launch",children:"puppeteer.launch"})," on how executable path is inferred."]})]}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"The pinned browser version supported by the current Puppeteer version."})})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},75251:(e,r,n)=>{var t=n(67294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,i={},l=null,p=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(p=r.ref),r)o.call(r,t)&&!c.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:s,type:e,key:l,ref:p,props:i,_owner:d.current}}r.Fragment=i,r.jsx=l,r.jsxs=l},85893:(e,r,n)=>{e.exports=n(75251)},11151:(e,r,n)=>{n.d(r,{Z:()=>d,a:()=>o});var t=n(67294);const s={},i=t.createContext(s);function o(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);