/*! For license information please see 84ccbd8a.34f7bb8a.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[10298],{48418:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var n=r(74848),d=r(28453);const i={sidebar_label:"LaunchOptions"},t="LaunchOptions interface",c={id:"browsers-api/browsers.launchoptions",title:"LaunchOptions interface",description:"Signature",source:"@site/versioned_docs/version-23.2.1/browsers-api/browsers.launchoptions.md",sourceDirName:"browsers-api",slug:"/browsers-api/browsers.launchoptions",permalink:"/browsers-api/browsers.launchoptions",draft:!1,unlisted:!1,tags:[],version:"23.2.1",frontMatter:{sidebar_label:"LaunchOptions"},sidebar:"browsersApi",previous:{title:"InstallOptions",permalink:"/browsers-api/browsers.installoptions"},next:{title:"makeProgressCallback",permalink:"/browsers-api/browsers.makeprogresscallback"}},l={},o=[{value:"Signature",id:"signature",level:3},{value:"Properties",id:"properties",level:2}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"launchoptions-interface",children:"LaunchOptions interface"})}),"\n",(0,n.jsx)(s.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"export interface LaunchOptions\n"})}),"\n",(0,n.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Property"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Modifiers"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Description"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Default"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"args",children:"args"})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"string[]"})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"Additional arguments to pass to the executable when launching."})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"detached",children:"detached"})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"boolean"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:["Whether to spawn process in the ",(0,n.jsx)(s.a,{href:"https://nodejs.org/api/child_process.html#optionsdetached",children:"detached"})," mode."]})}),(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"true"})," except on Windows."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"dumpio",children:"dumpio"})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"boolean"})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"If true, forwards the browser's process stdout and stderr to the Node's process stdout and stderr."})}),(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"false"}),"."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"env",children:"env"})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"Record<string, string | undefined>"})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"Environment variables to set for the browser process."})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"executablepath",children:"executablePath"})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"string"})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"Absolute path to the browser's executable."})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"handlesighup",children:"handleSIGHUP"})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"boolean"})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"Handles SIGHUP in the Node process and tries to gracefully close the browser process."})}),(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"true"}),"."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"handlesigint",children:"handleSIGINT"})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"boolean"})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"Handles SIGINT in the Node process and tries to kill the browser process."})}),(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"true"}),"."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"handlesigterm",children:"handleSIGTERM"})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"boolean"})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"Handles SIGTERM in the Node process and tries to gracefully close the browser process."})}),(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"true"}),"."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"onexit",children:"onExit"})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"() => Promise<void>"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:["A callback to run after the browser process exits or before the process will be closed via the ",(0,n.jsx)(s.a,{href:"/browsers-api/browsers.process.close",children:"Process.close()"})," call (including when handling signals). The callback is only run once."]})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"pipe",children:"pipe"})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"boolean"})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"Configures stdio streams to open two additional streams for automation over those streams instead of WebSocket."})}),(0,n.jsx)("td",{children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"false"}),"."]})})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},21020:(e,s,r)=>{var n=r(96540),d=Symbol.for("react.element"),i=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,s,r){var n,i={},o=null,h=null;for(n in void 0!==r&&(o=""+r),void 0!==s.key&&(o=""+s.key),void 0!==s.ref&&(h=s.ref),s)t.call(s,n)&&!l.hasOwnProperty(n)&&(i[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===i[n]&&(i[n]=s[n]);return{$$typeof:d,type:e,key:o,ref:h,props:i,_owner:c.current}}s.Fragment=i,s.jsx=o,s.jsxs=o},74848:(e,s,r)=>{e.exports=r(21020)},28453:(e,s,r)=>{r.d(s,{R:()=>t,x:()=>c});var n=r(96540);const d={},i=n.createContext(d);function t(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);