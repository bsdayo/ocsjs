import{d as e,o as t,c as n,a as s,t as r,u as o,b as a,_ as l,e as c,w as i,f as u,g as p,h as d,i as m,j as f,M as h,k as g,l as y,m as v,n as b,p as k,q as _,r as x,L as C,K as j,T as w,s as S,v as q,x as E,C as O,y as $,z,D as A,A as G,B as N,E as H,F as L,G as D,H as B,I as K,J as R,N as I}from"./vendor.f43efb55.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var M={name:"online-course-script",version:"1.0.0",main:"./electron/main.js",scripts:{dev:' set NODE_ENV=dev &&  concurrently vite "ehmr -i electron/**/*.js " ',build:"vue-tsc --noEmit && vite build",pack:"electron-builder --dir",dist:"electron-builder",test:"electron ./electron/main.js",serve:"vite preview"},dependencies:{"@ant-design/icons-vue":"^6.0.1","ant-design-vue":"^2.2.8","electron-log":"^4.4.1","electron-store":"^8.0.1","mark-ui":"^1.1.6","update-electron-app":"^2.0.1",uuid:"^8.3.2",vue:"^3.2.6","vue-router":"^4.0.11"},devDependencies:{"@pioneerjs/common":"^1.0.1","@pioneerjs/core":"^1.0.2","@types/node":"^16.9.1","@vitejs/plugin-vue":"^1.6.1","@vitejs/plugin-vue-jsx":"^1.1.8","@vue/cli-plugin-router":"~4.5.0","@vue/compiler-sfc":"^3.2.6",chalk:"^4.1.2",concurrently:"^6.2.1",electron:"^15.0.0","electron-builder":"^22.11.7","electron-hmr":"^1.1.7",less:"^4.1.1","less-loader":"^10.0.1","puppeteer-core":"^10.4.0",typescript:"^4.3.2",vite:"^2.5.4","vite-plugin-components":"^0.13.3","vue-tsc":"^0.2.2"},description:"ocs - 在线网络课程辅助工具",repository:{type:"git",url:"git+https://github.com/enncy/OnlineCourseScript.git"},keywords:["ocs","script","puppeteer","electron","vue3","antdv"],author:"enncy",license:"Apache-2.0",bugs:{url:"https://github.com/enncy/OnlineCourseScript/issues"},homepage:"https://github.com/enncy/OnlineCourseScript#readme"};const U={class:"font-v4 flex nowrap height-24"},F={class:"flex nowrap space-10 jc-flex-start ai-center"},J={class:"flex nowrap space-10 jc-flex-end ai-center"},P={style:{cursor:"pointer"}};var T=e({setup:e=>(e,c)=>{const i=l;return t(),n("div",U,[s("div",F,[s("li",null,r(o(M).name)+" - v"+r(o(M).version),1)]),s("div",J,[s("span",P,[a(i,{title:"关于",class:"font-v2",onClick:c[0]||(c[0]=t=>e.$router.push("/"))})])])])}});const{ipcRenderer:V}=require("electron"),W=require("uuid"),Q={get:e=>V.sendSync("get",[e]),set:(e,t)=>V.sendSync("set",[e,t]),call:(e,...t)=>V.sendSync("call",[e,...t]),on(e,t){const n=e+"-"+W.v4().replace(/-/g,"");V.send("on",n),V.on(n,t)},once(e,t){const n=e+"-"+W.v4().replace(/-/g,"");V.send("once",n),V.once(n,t)}},X=u(" 任务列表 "),Y=u(" 账号管理 "),Z=u(" 设置 ");var ee=e({setup:e=>(e,n)=>{const s=p,r=d,l=m,u=f,k=h,_=g,x=y,C=v,j=b;return t(),c(j,null,{default:i((()=>[a(_,{span:20,class:"font-v3"},{default:i((()=>[a(k,{theme:"light",mode:"horizontal"},{default:i((()=>[a(r,{key:"1",onClick:n[0]||(n[0]=t=>e.$router.push("/task"))},{default:i((()=>[a(s,{class:"icon"}),X])),_:1}),a(r,{key:"2",onClick:n[1]||(n[1]=t=>e.$router.push("/users"))},{default:i((()=>[a(l,{class:"icon"}),Y])),_:1}),a(r,{key:"3",onClick:n[2]||(n[2]=t=>e.$router.push("/setting"))},{default:i((()=>[a(u,{class:"icon"}),Z])),_:1})])),_:1})])),_:1}),a(_,{span:4},{default:i((()=>[a(k,{theme:"light",mode:"horizontal",id:"operations",class:"flex jc-flex-end",selectable:!1},{default:i((()=>[a(r,{onClick:n[3]||(n[3]=e=>o(Q).call("minimize"))},{default:i((()=>[a(x)])),_:1}),a(r,{onClick:n[4]||(n[4]=e=>o(Q).call("close"))},{default:i((()=>[a(C)])),_:1})])),_:1})])),_:1})])),_:1})}}),te=e({setup(e){const{shell:n}=require("electron");return k((()=>{_((()=>{Array.from(document.querySelectorAll("a")).forEach((e=>{e.onclick=function(t){t.preventDefault(),n.openExternal(e.getAttribute("href"))}}))}))})),(e,n)=>{const s=S,r=x("router-view"),o=q,l=T,u=E,p=C;return t(),c(p,{class:"layout",style:{height:"100%"}},{default:i((()=>[a(s,{id:"layout-header"},{default:i((()=>[a(ee)])),_:1}),a(o,{id:"layout-content"},{default:i((()=>[a(w,{name:"fade"},{default:i((()=>[(t(),c(j,null,[a(r)],1024))])),_:1})])),_:1}),a(u,{id:"layout-footer"},{default:i((()=>[a(l)])),_:1})])),_:1})}}});const ne={class:"font-v1",style:{"font-size":"42px",padding:"0px",margin:"0px"}},se=u(" OCS "),re={class:"font-v1"},oe=s("p",{class:"space-8"},[s("img",{alt:"GitHub Repo stars",src:"https://img.shields.io/github/stars/enncy/OnlineCourseScript"}),s("img",{alt:"GitHub",src:"https://img.shields.io/github/license/enncy/onlinecoursescript"}),s("img",{alt:"GitHub package.json version (branch)",src:"https://img.shields.io/github/package-json/v/enncy/onlinecoursescript/v1.0"}),s("img",{alt:"GitHub repo size",src:"https://img.shields.io/github/repo-size/enncy/OnlineCourseScript"})],-1),ae={style:{width:"100%","text-align":"left"}},le={style:{width:"450px",margin:"0 auto"}},ce=["href"],ie=["href"],ue=s("pre",null,"                **** \r\n                # 使用须知\r\n                - 本软件完全开源免费，**谨防上当受骗** ，禁止用于商业用途，仅供学习交流使用\r\n                - 此软件不会收集您的个人信息，所有信息均保存到本地\r\n                - 此软件涉及到的脚本如有任何侵权行为，请联系作者进行删除\r\n                - 如有任何疑问，请到BUG反馈处反馈，或者直接联系作者邮箱 **enncyemail@qq.com**\r\n\r\n                ## **更多详细的使用教程，请移步** : https://ocs.enncy.cn/\r\n            ",-1);var pe=e({setup(e){function n(){z.success("复制成功!")}return(e,l)=>{const p=A,d=G,m=O;return t(),c(m,{class:"box-shadow-base"},{default:i((()=>[s("p",ne,[se,s("span",re,r(o(M).name),1)]),s("p",null,r(o(M).description),1),oe,s("div",ae,[s("div",le,[a(d,{column:1,labelStyle:{fontWeight:"bold"}},{default:i((()=>[a(p,{label:"项目名"},{default:i((()=>[u(r(o(M).name),1)])),_:1}),a(p,{label:"版本"},{default:i((()=>[u(" v"+r(o(M).version),1)])),_:1}),a(p,{label:"作者"},{default:i((()=>[u(r(o(M).author),1)])),_:1}),a(p,{label:"项目地址"},{default:i((()=>[s("a",{href:o(M).homepage},r(o(M).homepage),9,ce)])),_:1}),a(p,{label:"BUG反馈"},{default:i((()=>[s("a",{href:o(M).bugs.url},r(o(M).bugs.url),9,ie)])),_:1})])),_:1})])]),s("p",null,[a(o($),{codeStyle:"github-dark",renderKey:"1",style:{"text-align":"left","letter-spacing":"1px"},raw:"",onCopy:n},{default:i((()=>[ue])),_:1})])])),_:1})}}});const de={};de.render=function(e,s){return t(),n("h1",null,"task")};const me={},fe=u(),he=s("span",null,"通用设置",-1),ge=u(),ye=s("span",null,"脚本设置",-1),ve=u(),be=s("span",null,"系统设置",-1),ke=u(),_e=s("span",null,"版本更新",-1);me.render=function(e,n){const s=N,r=d,o=H,l=L,u=D,p=h,m=B,f=x("router-view"),g=q,y=C;return t(),c(y,{class:"box-shadow-base",style:{padding:"24px 0",background:"#fff"}},{default:i((()=>[a(m,{width:"200",style:{background:"#fff"}},{default:i((()=>[a(p,{mode:"inline",style:{height:"100%"}},{default:i((()=>[a(r,{key:"1",class:"space-12",onClick:n[0]||(n[0]=t=>e.$router.push("/setting/common"))},{default:i((()=>[a(s),fe,he])),_:1}),a(r,{key:"2",class:"space-12",onClick:n[1]||(n[1]=t=>e.$router.push("/setting/script"))},{default:i((()=>[a(o),ge,ye])),_:1}),a(r,{key:"3",class:"space-12",onClick:n[2]||(n[2]=t=>e.$router.push("/setting/system"))},{default:i((()=>[a(l),ve,be])),_:1}),a(r,{key:"4",class:"space-12",onClick:n[3]||(n[3]=t=>e.$router.push("/setting/version"))},{default:i((()=>[a(u),ke,_e])),_:1})])),_:1})])),_:1}),a(g,null,{default:i((()=>[a(f)])),_:1})])),_:1})};const xe={};xe.render=function(e,s){return t(),n("h1",null,"users")};const Ce={};Ce.render=function(e,t){return" 通用设置 "};const je={};je.render=function(e,t){return" 脚本设置 "};const we={};we.render=function(e,t){return" 系统设置 "};const Se={};Se.render=function(e,t){return" 版本更新 "};const qe=K({history:R(),routes:[{path:"/",name:"index",component:pe,meta:{desc:"关于"}},{path:"/task",name:"task",component:de,meta:{desc:"任务列表"}},{path:"/setting",name:"setting",component:me,children:[{path:"common",name:"setting-common",component:Ce,meta:{desc:"通用设置"}},{path:"script",name:"setting-script",component:je,meta:{desc:"脚本设置"}},{path:"system",name:"setting-system",component:we,meta:{desc:"系统设置"}},{path:"version",name:"setting-version-update",component:Se,meta:{desc:"版本更新"}}],meta:{desc:"设置"}},{path:"/users",name:"users",component:xe,meta:{desc:"账号管理"}},{path:"/:catchAll(.*)",name:"404",redirect:"/"}]});qe.beforeEach(((e,t)=>!!e.name&&qe.hasRoute(e.name))),z.config({top:"74px",duration:2,maxCount:3}),I(te).use(qe).mount("#app");
