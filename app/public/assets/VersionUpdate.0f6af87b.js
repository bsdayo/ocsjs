import{ak as f,d as O,r as R,ac as S,o as m,c as g,b as o,w as s,a as l,t as h,u as i,k,l as d,m as B,ag as w,al as T,P as L,aj as M,aa as x,O as G,a0 as z}from"./vendor.cc63ba10.js";/* empty css              *//* empty css               *//* empty css               */import{_ as V}from"./Card.6f780f26.js";import{R as H,s as W}from"./index.3aeb4558.js";var v={},F={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.registerRemoteEventNames=t.IPCEventTypes=t.OCSEventTypes=void 0,function(e){e.CX="cx",e.CX_LOGIN="cx-login",e.ZHS="zhs",e.ZHS_LOGIN="zhs-login",e.DEBUG="debug",e.INFO="info",e.WARN="warn",e.SUCCESS="success",e.ERROR="error",e.NOTIFY="notify"}(t.OCSEventTypes||(t.OCSEventTypes={})),function(e){e.APP_UPDATE="app-update",e.CANCEL_APP_UPDATE="cancel-app-update",e.IS_NEED_UPDATE="is-need-update",e.SCRIPT_LOGIN="script-login"}(t.IPCEventTypes||(t.IPCEventTypes={}));function u(e){return{get:e+"-get",set:e+"-set",call:e+"-call",on:e+"-on",once:e+"-once"}}t.registerRemoteEventNames=u})(F);var y={};Object.defineProperty(y,"__esModule",{value:!0});var C={};Object.defineProperty(C,"__esModule",{value:!0});var D={};Object.defineProperty(D,"__esModule",{value:!0});(function(t){var u=f&&f.__createBinding||(Object.create?function(n,c,a,_){_===void 0&&(_=a),Object.defineProperty(n,_,{enumerable:!0,get:function(){return c[a]}})}:function(n,c,a,_){_===void 0&&(_=a),n[_]=c[a]}),e=f&&f.__exportStar||function(n,c){for(var a in n)a!=="default"&&!Object.prototype.hasOwnProperty.call(c,a)&&u(c,n,a)};Object.defineProperty(t,"__esModule",{value:!0}),e(F,t),e(y,t),e(C,t),e(D,t)})(v);const X={class:"space-10 flex"},Z={key:1},q=d("\u9700\u8981\u66F4\u65B0"),Y={key:2},$=d("\u5DF2\u7ECF\u662F\u6700\u65B0\u7248\u672C"),J={class:"space-10"},K=l("span",null,"\u5C0F\u65F6",-1),Q={class:"space-10"},ee=d("\u66F4\u65B0\u68C0\u6D4B"),te=d(" \u66F4\u65B0 "),_e=O({setup(t){const{update:u}=W,{ipcRenderer:e}=require("electron"),n=R(-1);function c(){n.value=-1,n.value=e.sendSync(v.IPCEventTypes.IS_NEED_UPDATE)?1:0,n.value===1?B.warn("\u9700\u8981\u66F4\u65B0"):B.success("\u5DF2\u7ECF\u662F\u6700\u65B0\u7248\u672C")}function a(){e.send(v.IPCEventTypes.APP_UPDATE)}return S(()=>{n.value=e.sendSync(v.IPCEventTypes.IS_NEED_UPDATE)?1:0}),(_,r)=>{const j=w,E=T,p=L,A=M,N=x,U=G,P=z,I=V;return m(),g("div",null,[o(I,{bordered:!1,color:"blue",style:{"text-align":"right"},title:"\u66F4\u65B0\u8BBE\u7F6E"},{body:s(()=>[o(U,{column:1,labelStyle:{fontWeight:"bold",height:"32px"}},{default:s(()=>[o(p,{label:"\u5F53\u524D\u7248\u672C"},{default:s(()=>[l("span",X,[l("span",null,h(i(H).app.call("getVersion")),1),n.value===-1?(m(),k(j,{key:0})):n.value===1?(m(),g("div",Z,[o(E,{color:"#f50"},{default:s(()=>[q]),_:1})])):(m(),g("div",Y,[o(E,{color:"#87d068"},{default:s(()=>[$]),_:1})]))])]),_:1}),o(p,{label:"\u4E0A\u6B21\u68C0\u6D4B\u65F6\u95F4"},{default:s(()=>[d(h(new Date(i(u).lastTime).toLocaleString()),1)]),_:1}),o(p,{label:"\u81EA\u52A8\u66F4\u65B0"},{default:s(()=>[o(A,{checked:i(u).autoUpdate,"onUpdate:checked":r[0]||(r[0]=b=>i(u).autoUpdate=b)},null,8,["checked"])]),_:1}),o(p,{label:"\u81EA\u52A8\u66F4\u65B0\u95F4\u9694"},{default:s(()=>[l("div",J,[o(N,{size:"small",min:1,max:24,"default-value":1,value:i(u).hour,"onUpdate:value":r[1]||(r[1]=b=>i(u).hour=b),disabled:!i(u).autoUpdate},null,8,["value","disabled"]),K])]),_:1})]),_:1}),l("div",Q,[o(P,{type:"primary",onClick:c},{default:s(()=>[ee]),_:1}),o(P,{type:"primary",onClick:a},{default:s(()=>[te]),_:1})])]),_:1})])}}});export{_e as default};
