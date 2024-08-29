/*! For license information please see a7896125.1bb51d05.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76838],{5073:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=n(74848),s=n(28453);const o={},i="Docker",a={id:"guides/docker",title:"Docker",description:"Puppeteer offers a Docker image that includes Chrome for Testing along with the required",source:"@site/versioned_docs/version-23.2.1/guides/docker.md",sourceDirName:"guides",slug:"/guides/docker",permalink:"/guides/docker",draft:!1,unlisted:!1,tags:[],version:"23.2.1",frontMatter:{},sidebar:"docs",previous:{title:"Angular",permalink:"/guides/ng-schematics"},next:{title:"Community",permalink:"/category/community"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"dbus",id:"dbus",level:2}];function p(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"docker",children:"Docker"})}),"\n",(0,t.jsxs)(r.p,{children:["Puppeteer offers a Docker image that includes ",(0,t.jsx)(r.a,{href:"https://developer.chrome.com/blog/chrome-for-testing/",children:"Chrome for Testing"})," along with the required\ndependencies and a pre-installed Puppeteer version. The image is available via\nthe\n",(0,t.jsx)(r.a,{href:"https://github.com/puppeteer/puppeteer/pkgs/container/puppeteer",children:"GitHub Container Registry"}),".\nThe latest image is tagged as ",(0,t.jsx)(r.code,{children:"latest"})," and other tags match Puppeteer versions.\nFor example,"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"docker pull ghcr.io/puppeteer/puppeteer:latest # pulls the latest\ndocker pull ghcr.io/puppeteer/puppeteer:16.1.0 # pulls the image that contains Puppeteer v16.1.0\n"})}),"\n",(0,t.jsxs)(r.p,{children:["The image is meant for running the browser in sandbox mode and therefore,\nrunning the image requires the ",(0,t.jsx)(r.code,{children:"SYS_ADMIN"})," capability."]}),"\n",(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(r.p,{children:"To use the docker image directly, run:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'docker run -i --init --cap-add=SYS_ADMIN --rm ghcr.io/puppeteer/puppeteer:latest node -e "$(cat path/to/script.js)"\n'})}),"\n",(0,t.jsxs)(r.p,{children:["where ",(0,t.jsx)(r.code,{children:"path/to/script.js"})," is the path relative to your working directory. Note\nthe image requires the ",(0,t.jsx)(r.code,{children:"SYS_ADMIN"})," capability since the browser runs in sandbox\nmode."]}),"\n",(0,t.jsxs)(r.p,{children:["If you need to build an image based on a different base image, you can use our\n",(0,t.jsx)(r.a,{href:"https://github.com/puppeteer/puppeteer/blob/main/docker/Dockerfile",children:(0,t.jsx)(r.code,{children:"Dockerfile"})}),"\nas the starting point."]}),"\n",(0,t.jsx)(r.admonition,{type:"caution",children:(0,t.jsxs)(r.p,{children:["Make sure to specify a init process via the ",(0,t.jsx)(r.code,{children:"--init"})," flag or a custom ",(0,t.jsx)(r.code,{children:"ENTRYPOINT"}),"\nto make sure all processes started by Puppeteer are managed properly."]})}),"\n",(0,t.jsx)(r.h2,{id:"dbus",children:"dbus"}),"\n",(0,t.jsx)(r.p,{children:"The image installs and configures dbus for Chrome. Usually you would not\nneed dbus in the headless mode but you might see warnings in the browser\nconsole. You can start the dbus service before launching\nyour application:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"sudo service dbus start\n"})}),"\n",(0,t.jsxs)(r.p,{children:["See ",(0,t.jsx)(r.a,{href:"https://docs.docker.com/config/containers/multi-service_container/",children:"https://docs.docker.com/config/containers/multi-service_container/"}),"\nfor instructions how to start multiple processes in a container."]})]})}function l(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},21020:(e,r,n)=>{var t=n(96540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var t,o={},d=null,p=null;for(t in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(p=r.ref),r)i.call(r,t)&&!c.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:s,type:e,key:d,ref:p,props:o,_owner:a.current}}r.Fragment=o,r.jsx=d,r.jsxs=d},74848:(e,r,n)=>{e.exports=n(21020)},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>a});var t=n(96540);const s={},o=t.createContext(s);function i(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);