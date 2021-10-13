import{d as D,r as x,o as f,c as V,a as v,t as L,u as a,b as s,w as i,M as q,m as h,_ as z,e as H,f as K,g as G,h as M,i as W,j as O,k as y,l as b,n as X,p as Y,q as Z,s as J,v as Q,x as ee,y as te,z as ne,A as oe,B as C,T as se,K as ue,C as ce,L as re,D as ie,E as ae,F as le,G as pe,H as _e,I as de,J as me}from"./vendor.cc63ba10.js";const fe=function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}};fe();const ve="online-course-script",ge="1.0.0",Fe="./app/lib/electron/index.js",Ee={dev:'cd ./app && tsc && cd .. &&   concurrently vite "ehmr -i app/**/*.js " ',build:"vue-tsc --noEmit && vite build",pack:"  cd app  && tsc && npm run pack",dist:"  cd app  && tsc && npm run dist",bp:"npm run build && npm run pack",bd:"npm run build && npm run dist",serve:"vite preview","pup:test":"cd ./app && tsc && node lib/test.js"},he={"@ant-design/icons-vue":"^6.0.1","@rollup/plugin-commonjs":"^21.0.0","@rollup/plugin-node-resolve":"^13.0.5","ant-design-vue":"^2.2.8",axios:"^0.22.0","electron-store":"^8.0.1","mark-ui":"^1.1.6","puppeteer-core":"^10.4.0",uuid:"^8.3.2",vue:"^3.2.6","vue-router":"^4.0.11"},ye={"@types/electron":"^1.6.10","@types/node":"^16.9.1","@vitejs/plugin-vue":"^1.9.3","@vue/cli-plugin-router":"~4.5.0","@vue/compiler-sfc":"^3.2.6",chalk:"^4.1.2",concurrently:"^6.2.1",electron:"^15.0.0","electron-builder":"^22.11.7","electron-hmr":"^1.1.7",less:"^4.1.1","less-loader":"^10.0.1",typescript:"^4.3.2",vite:"^2.6.3","vite-plugin-components":"^0.13.3","vue-tsc":"^0.3.0"},Ae="ocs - \u5728\u7EBF\u7F51\u7EDC\u8BFE\u7A0B\u8F85\u52A9\u5DE5\u5177",Ce={type:"git",url:"git+https://github.com/enncy/online-course-script.git"},Be=["ocs","script","puppeteer","electron","vue3","antdv"],De="enncy",be="Apache-2.0",ke={url:"https://github.com/enncy/online-course-script/issues"},we="https://github.com/enncy/online-course-script#readme";var P={name:ve,version:ge,main:Fe,scripts:Ee,dependencies:he,devDependencies:ye,description:Ae,repository:Ce,keywords:Be,author:De,license:be,bugs:ke,homepage:we};const Re={class:"font-v4 flex nowrap height-24"},xe={class:"flex nowrap space-10 jc-flex-start ai-center"},Le={class:"flex nowrap space-10 jc-flex-end ai-center ac-center"},Oe={style:{cursor:"pointer",display:"flex"}},Pe={style:{cursor:"pointer",display:"flex"}},$e=v("pre",null,`  \r
                     - \u672C\u8F6F\u4EF6\u5B8C\u5168\u5F00\u6E90\u514D\u8D39\uFF0C**\u8C28\u9632\u4E0A\u5F53\u53D7\u9A97** \uFF0C\u7981\u6B62\u7528\u4E8E\u5546\u4E1A\u7528\u9014\uFF0C\u4EC5\u4F9B\u5B66\u4E60\u4EA4\u6D41\u4F7F\u7528\r
                     - \u6B64\u8F6F\u4EF6\u4E0D\u4F1A\u6536\u96C6\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\uFF0C\u6240\u6709\u4FE1\u606F\u5747\u4FDD\u5B58\u5230\u672C\u5730\r
                     - \u6B64\u8F6F\u4EF6\u6D89\u53CA\u5230\u7684\u811A\u672C\u5982\u6709\u4EFB\u4F55\u4FB5\u6743\u884C\u4E3A\uFF0C\u8BF7\u8054\u7CFB\u4F5C\u8005\u8FDB\u884C\u5220\u9664\r
                     - \u5982\u6709\u4EFB\u4F55\u7591\u95EE\uFF0C\u8BF7\u5230BUG\u53CD\u9988\u5904\u53CD\u9988\uFF0C\u6216\u8005\u76F4\u63A5\u8054\u7CFB\u4F5C\u8005\u90AE\u7BB1 **enncyemail@qq.com**\r
                    `,-1),Ne=D({setup(n){function u(){h.success("\u590D\u5236\u6210\u529F!")}const o=x(!1),t=()=>{o.value=!0},e=r=>{console.log(r),o.value=!1};return(r,c)=>{const p=z,_=H,E=K;return f(),V("div",Re,[v("div",xe,[v("li",null,L(a(P).name)+" - v"+L(a(P).version),1)]),v("div",Le,[v("span",Oe,[s(p,{title:"\u9996\u9875",class:"font-v2",onClick:c[0]||(c[0]=d=>r.$router.push("/"))})]),v("span",Pe,[s(_,{title:"\u5173\u4E8E",class:"font-v2",onClick:t})])]),s(E,{visible:o.value,"onUpdate:visible":c[1]||(c[1]=d=>o.value=d),title:"\u4F7F\u7528\u987B\u77E5",onOk:e,footer:!1},{default:i(()=>[v("p",null,[s(a(q),{codeStyle:"github-dark",renderKey:"1",style:{"text-align":"left","letter-spacing":"1px"},raw:"",onCopy:u},{default:i(()=>[$e]),_:1})])]),_:1},8,["visible"])])}}}),je=require("electron-store"),$=new je,A=G($.store);M(A,()=>{console.log("config change",A),A.setting,$.store=W(A)});const Ie=A.setting;var g;(function(n){n.CX="cx",n.CX_LOGIN="cx-login",n.ZHS="zhs",n.ZHS_LOGIN="zhs-login",n.DEBUG="debug",n.INFO="info",n.WARN="warn",n.SUCCESS="success",n.ERROR="error",n.NOTIFY="notify"})(g||(g={}));var B;(function(n){n.APP_UPDATE="app-update",n.CANCEL_APP_UPDATE="cancel-app-update",n.IS_NEED_UPDATE="is-need-update",n.SCRIPT_LOGIN="script-login"})(B||(B={}));function Se(n){return{get:n+"-get",set:n+"-set",call:n+"-call",on:n+"-on",once:n+"-once"}}const{ipcRenderer:F}=require("electron"),N=require("uuid");function k(n){const u=Se(n);return{get(o){return F.sendSync(u.get,[o])},set(o,t){return F.sendSync(u.set,[o,t])},call(o,...t){return F.sendSync(u.call,[o,...t])},on(o,t){const e=o+"-"+N.v4().replace(/-/g,"");F.send(u.on,e),F.on(e,t)},once(o,t){const e=o+"-"+N.v4().replace(/-/g,"");F.send(u.once,e),F.once(e,t)}}}const j={win:k("win"),app:k("app"),dialog:k("dialog")};const Ue=b(" \u8D26\u53F7\u7BA1\u7406 "),Te=b(" \u4EFB\u52A1\u5217\u8868 "),Ve=b(" \u8BBE\u7F6E "),qe=D({setup(n){const u=x(["1"]),{system:o}=Ie;return(t,e)=>{const r=X,c=Y,p=Z,_=J,E=Q,d=ee,R=O("IconFont"),S=te,U=ne,T=oe;return f(),y(T,null,{default:i(()=>[s(d,{span:20,class:"font-v3"},{default:i(()=>[s(E,{theme:"light",mode:"horizontal",selectedKeys:u.value,"onUpdate:selectedKeys":e[3]||(e[3]=m=>u.value=m)},{default:i(()=>[s(c,{key:"1",onClick:e[0]||(e[0]=m=>t.$router.push("/users"))},{default:i(()=>[s(r,{class:"icon"}),Ue]),_:1}),s(c,{key:"2",onClick:e[1]||(e[1]=m=>t.$router.push("/task"))},{default:i(()=>[s(p,{class:"icon"}),Te]),_:1}),s(c,{key:"3",onClick:e[2]||(e[2]=m=>t.$router.push("/setting/script"))},{default:i(()=>[s(_,{class:"icon"}),Ve]),_:1})]),_:1},8,["selectedKeys"])]),_:1}),s(d,{span:4},{default:i(()=>[s(E,{theme:"light",mode:"horizontal",id:"operations",class:"flex jc-flex-end",selectable:!1},{default:i(()=>[s(c,{onClick:e[4]||(e[4]=m=>a(o).win.isAlwaysOnTop=!a(o).win.isAlwaysOnTop)},{default:i(()=>[a(o).win.isAlwaysOnTop?(f(),y(R,{key:0,title:"\u7F6E\u9876",type:"icon-relieve-full"})):(f(),y(R,{key:1,title:"\u53D6\u6D88\u7F6E\u9876",type:"icon-relieve"}))]),_:1}),s(c,{onClick:e[5]||(e[5]=m=>a(j).win.call("minimize")),title:"\u6700\u5C0F\u5316"},{default:i(()=>[s(S)]),_:1}),s(c,{onClick:e[6]||(e[6]=m=>a(j).win.call("close")),title:"\u6700\u5927\u5316"},{default:i(()=>[s(U)]),_:1})]),_:1})]),_:1})]),_:1})}}});const ze=D({setup(n){const{ipcRenderer:u}=require("electron");return u.on(g.INFO,(o,t)=>{h.info(t)}),u.on(g.WARN,(o,t)=>{h.warn(t)}),u.on(g.SUCCESS,(o,t)=>{h.success(t)}),u.on(g.ERROR,(o,t)=>{h.error(t)}),u.on(g.NOTIFY,(o,t)=>{console.log(t);const e=t.name===B.APP_UPDATE,r={duration:e&&t.type==="info"?0:5,placement:"bottomRight",key:t.name,message:t.title,description:t.message,style:{padding:"12px"},class:"notification-message",onClose:()=>{e&&u.send(B.CANCEL_APP_UPDATE),C.close(t.name)}};e&&t.type==="success"?(C[t.type](r),setTimeout(()=>{C.close(t.name)},5e3)):C[t.type](r)}),(o,t)=>{const e=re,r=O("router-view"),c=ie,p=Ne,_=ae,E=le;return f(),y(E,{class:"layout",style:{height:"100%"}},{default:i(()=>[s(e,{id:"layout-header"},{default:i(()=>[s(qe)]),_:1}),s(c,{id:"layout-content"},{default:i(()=>[s(se,{name:"fade"},{default:i(()=>[s(r,null,{default:i(({Component:d})=>[(f(),y(ue,null,[(f(),y(ce(d)))],1024))]),_:1})]),_:1})]),_:1}),s(_,{id:"layout-footer"},{default:i(()=>[s(p)]),_:1})]),_:1})}}}),He="modulepreload",I={},Ke="/",l=function(u,o){return!o||o.length===0?u():Promise.all(o.map(t=>{if(t=`${Ke}${t}`,t in I)return;I[t]=!0;const e=t.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${r}`))return;const c=document.createElement("link");if(c.rel=e?"stylesheet":He,e||(c.as="script",c.crossOrigin=""),c.href=t,document.head.appendChild(c),e)return new Promise((p,_)=>{c.addEventListener("load",p),c.addEventListener("error",_)})})).then(()=>u())},w=pe({history:_e(),routes:[{path:"/",name:"index",component:()=>l(()=>import("./index.e810b100.js"),["assets/index.e810b100.js","assets/index.14b7ba40.css","assets/index.3b784651.css","assets/vendor.cc63ba10.js","assets/vendor.56b6d3f7.css"]),meta:{desc:"\u5173\u4E8E"}},{path:"/task",name:"task",component:()=>l(()=>import("./index.fe324afa.js"),["assets/index.fe324afa.js","assets/index.c5d3e8d1.css","assets/index.28f6fdd0.css","assets/index.11a12e90.css","assets/index.3b784651.css","assets/vendor.cc63ba10.js","assets/vendor.56b6d3f7.css","assets/Card.6f780f26.js","assets/Card.480ecee3.css"]),meta:{desc:"\u4EFB\u52A1\u5217\u8868"}},{path:"/setting",name:"setting",component:()=>l(()=>import("./index.0db66d99.js"),["assets/index.0db66d99.js","assets/index.e1c83149.css","assets/vendor.cc63ba10.js","assets/vendor.56b6d3f7.css"]),children:[{path:"common",name:"setting-common",component:()=>l(()=>import("./CommonSetting.2ac04377.js"),["assets/CommonSetting.2ac04377.js","assets/index.a0e6257f.css","assets/index.11a12e90.css","assets/index.3b784651.css","assets/vendor.cc63ba10.js","assets/vendor.56b6d3f7.css","assets/Card.6f780f26.js","assets/Card.480ecee3.css"]),meta:{desc:"\u901A\u7528\u8BBE\u7F6E"}},{path:"script",name:"setting-script",component:()=>l(()=>import("./ScriptSetting.cfbfe5c6.js"),["assets/ScriptSetting.cfbfe5c6.js","assets/ScriptSetting.9559232e.css","assets/index.11a12e90.css","assets/index.3b784651.css","assets/index.21f94949.css","assets/vendor.cc63ba10.js","assets/vendor.56b6d3f7.css","assets/Card.6f780f26.js","assets/Card.480ecee3.css"]),meta:{desc:"\u811A\u672C\u8BBE\u7F6E"}},{path:"system",name:"setting-system",component:()=>l(()=>import("./SystemSetting.b58719bf.js"),["assets/SystemSetting.b58719bf.js","assets/SystemSetting.e2fd3f98.css","assets/index.0d501aef.css","assets/index.3b784651.css","assets/vendor.cc63ba10.js","assets/vendor.56b6d3f7.css","assets/Card.6f780f26.js","assets/Card.480ecee3.css"]),meta:{desc:"\u7CFB\u7EDF\u8BBE\u7F6E"}},{path:"version",name:"setting-version-update",component:()=>l(()=>import("./VersionUpdate.0f6af87b.js"),["assets/VersionUpdate.0f6af87b.js","assets/VersionUpdate.0f274453.css","assets/index.3b784651.css","assets/index.0d501aef.css","assets/index.a0e6257f.css","assets/vendor.cc63ba10.js","assets/vendor.56b6d3f7.css","assets/Card.6f780f26.js","assets/Card.480ecee3.css"]),meta:{desc:"\u7248\u672C\u66F4\u65B0"}}],meta:{desc:"\u8BBE\u7F6E"}},{path:"/users",name:"users",component:()=>l(()=>import("./index.b2c30029.js"),["assets/index.b2c30029.js","assets/index.82bd7524.css","assets/index.28f6fdd0.css","assets/index.21f94949.css","assets/index.11a12e90.css","assets/vendor.cc63ba10.js","assets/vendor.56b6d3f7.css"]),meta:{desc:"\u8D26\u53F7\u7BA1\u7406"}},{path:"/:catchAll(.*)",name:"404",redirect:"/"}]});w.beforeEach((n,u)=>!!n.name&&w.hasRoute(n.name));const Ge=de({scriptUrl:"https://at.alicdn.com/t/font_2849771_3az41crtc9.js"});h.config({top:"74px",duration:2,maxCount:3});me(ze).use(w).component("IconFont",Ge).mount("#app");export{j as R,A as c,P as j,Ie as s};
