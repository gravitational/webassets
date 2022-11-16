"use strict";(self.webpackChunk_gravitational_teleport=self.webpackChunk_gravitational_teleport||[]).push([[384,179],{9161:(e,t,r)=>{r.d(t,{cZ:()=>Z,cN:()=>D,fK:()=>E,$N:()=>g,ZP:()=>$});var n=r(2784),o=r(3980),a=r.n(o),s=r(917),c=r(3502);const l=["children","dialogCss"];function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m.apply(this,arguments)}class d extends n.Component{render(){const e=this.props,{children:t,dialogCss:r}=e,o=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,l);return n.createElement(c.Z,m({role:"dialog"},o),n.createElement(b,null,n.createElement(f,{"data-testid":"dialogbox",dialogCss:r},t)))}}d.defaultProps={disableBackdropClick:!0,disableEscapeKeyDown:!0},d.propTypes=u(u({},c.Z.propTypes),{},{children:a().node,dialogCss:a().func});const b=s.ZP.div(["height:100%;outline:none;color:black;display:flex;align-items:center;justify-content:center;opacity:1;will-change:opacity;transition:opacity 225ms cubic-bezier(0.4,0,0.2,1) 0ms;"]),f=s.ZP.div(["padding:32px;padding-top:24px;background:",";color:",";border-radius:8px;box-shadow:0 8px 32px rgba(0,0,0,0.24);display:flex;flex-direction:column;position:relative;overflow-y:auto;max-height:calc(100% - 96px);",";"],(e=>e.theme.colors.primary.main),(e=>e.theme.colors.text.primary),(e=>e.dialogCss&&e.dialogCss(e)));var y=r(7294);function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},h.apply(this,arguments)}function g(e){return n.createElement(y.Z,h({typography:"h3",color:"text.primary",caps:!0},e))}var x=r(2865),O=r(9097);function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},v.apply(this,arguments)}function E(e){return n.createElement(w,v({minHeight:"32px",mb:"3",alignItems:"center"},e))}const w=(0,s.ZP)(O.Z)(["",""],x.cp);var P=r(7849);function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const S=(0,s.ZP)(P.kC)([""]);S.defaultProps=k(k({},P.kC.defaultProps),{},{mb:"5",flex:"1",flexDirection:"column"});const Z=S;function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const T=(0,s.ZP)(P.xu)([""]);T.defaultProps=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){I(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},P.xu.defaultProps);const D=T,$=d},5070:(e,t,r)=>{function n(e){return navigator.clipboard.writeText(e).catch((e=>{window.prompt("Cannot copy to clipboard. Use ctrl/cmd + c",e)}))}r.d(t,{Z:()=>n})},3388:(e,t,r)=>{function n(e){let t,r;window.getSelection&&document.createRange&&(r=window.getSelection(),t=document.createRange(),t.selectNodeContents(e),r.removeAllRanges(),r.addRange(t))}r.d(t,{Z:()=>n})},7225:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Z});var n=r(2784),o=r(7849),a=r(3652),s=r(8388),c=r(9161),l=r(1347),i=r(3228);const u=()=>"\n  min-height: 400px;\n  max-width: 600px;\n  width: 100%;\n",p=function(e){const{onClose:t,username:r,authType:a,kubeConnectName:s,clusterId:p,accessRequestId:m}=e;return n.createElement(c.ZP,{dialogCss:u,disableEscapeKeyDown:!1,onClose:t,open:!0},n.createElement(c.fK,null,n.createElement(c.$N,null,"connect to kubernetes cluster")),n.createElement(c.cZ,null,n.createElement(o.xu,{mb:4},n.createElement(o.xv,{bold:!0,as:"span"},"Step 1")," - Login to Teleport",n.createElement(l.Z,{mt:"2",text:(0,i.Sl)({authType:a,username:r,clusterId:p})})),n.createElement(o.xu,{mb:4},n.createElement(o.xv,{bold:!0,as:"span"},"Optional")," ","- To write kubectl configuration to a separate file instead of having your global kubectl configuration modified, run the following command:",n.createElement(l.Z,{mt:"2",text:"export KUBECONFIG=${HOME?}/teleport-kubeconfig.yaml"})),n.createElement(o.xu,{mb:4},n.createElement(o.xv,{bold:!0,as:"span"},"Step 2")," - Select the Kubernetes cluster",n.createElement(l.Z,{mt:"2",text:`tsh kube login ${s}`})),n.createElement(o.xu,{mb:1},n.createElement(o.xv,{bold:!0,as:"span"},"Step 3")," - Connect to the Kubernetes cluster",n.createElement(l.Z,{mt:"2",text:"kubectl get pods"})),m&&n.createElement(o.xu,{mb:1,mt:3},n.createElement(o.xv,{bold:!0,as:"span"},"Step 4 (Optional)")," - When finished, drop the assumed role",n.createElement(l.Z,{mt:"2",text:"tsh request drop"}))),n.createElement(c.cN,null,n.createElement(o.PL,{onClick:t},"Close")))},m=function(e){const{kubes:t=[],pageSize:r,username:c,authType:l,clusterId:i,totalCount:u,fetchNext:m,fetchPrev:d,fetchStatus:b,from:f,to:y,params:h,setParams:g,startKeys:x,setSort:O,pathname:v,replaceHistory:E,onLabelClick:w,accessRequestId:P}=e,[C,k]=(0,n.useState)("");return n.createElement(n.Fragment,null,n.createElement(a.ZP,{data:t,columns:[{key:"name",headerText:"Name",isSortable:!0},{key:"labels",headerText:"Labels",render:e=>{let{labels:t}=e;return n.createElement(a.aW,{labels:t,onClick:w})}},{altKey:"connect-btn",render:e=>((e,t)=>{let{name:r}=e;return n.createElement(a.bL,{align:"right"},n.createElement(o.ku,{size:"small",onClick:()=>t(r)},"Connect"))})(e,k)}],fetching:{onFetchNext:m,onFetchPrev:d,fetchStatus:b},serversideProps:{sort:h.sort,setSort:O,startKeys:x,serversideSearchPanel:n.createElement(s.Z,{from:f,to:y,count:u,params:h,setParams:g,pathname:v,replaceHistory:E})},isSearchable:!0,emptyText:"No Kubernetes Clusters Found",pagination:{pageSize:r}}),C&&n.createElement(p,{onClose:()=>k(""),username:c,authType:l,kubeConnectName:C,clusterId:i,accessRequestId:P}))};var d=r(7067),b=r(5769),f=r(2499),y=r(2398),h=r(2479),g=r(4517),x=r(4696),O=r(1392),v=r(6828),E=r(321),w=r(7773);function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e){const{attempt:t,username:r,authType:a,isLeafCluster:s,clusterId:c,canCreate:l,results:i,fetchNext:u,fetchPrev:p,from:y,to:g,pageSize:x,params:O,setParams:v,startKeys:E,setSort:w,pathname:P,replaceHistory:C,fetchStatus:k,isSearchEmpty:j,onLabelClick:Z,accessRequestId:K}=e,I=0===i.kubes.length&&j;return n.createElement(d.Ob,null,n.createElement(d.OX,{alignItems:"center",justifyContent:"space-between"},n.createElement(d.u4,null,"Kubernetes"),"success"===t.status&&!I&&n.createElement(h.Z,{agent:"kubernetes",beginsWithVowel:!1,isLeafCluster:s,canCreate:l})),"failed"===t.status&&n.createElement(f.Z,{message:t.statusText}),"processing"===t.status&&n.createElement(o.xu,{textAlign:"center",m:10},n.createElement(o.z$,null)),"processing"!==t.status&&!I&&n.createElement(m,{kubes:i.kubes,username:r,authType:a,clusterId:c,fetchNext:u,fetchPrev:p,fetchStatus:k,from:y,to:g,totalCount:i.totalCount,pageSize:x,params:O,setParams:v,startKeys:E,setSort:w,pathname:P,replaceHistory:C,onLabelClick:Z,accessRequestId:K}),"success"===t.status&&I&&n.createElement(b.Z,{clusterId:c,canCreate:l&&!s,emptyStateInfo:S}))}const S={title:"Add your first Kubernetes cluster to Teleport",byline:"Teleport Kubernetes Access provides secure access to Kubernetes clusters.",docsURL:"https://goteleport.com/docs/kubernetes-access/guides",resourceType:"kubernetes",readOnly:{title:"No Kubernetes Clusters Found",resource:"kubernetes clusters"}},Z=function(){const e=function(e){const{clusterId:t,isLeafCluster:r}=(0,v.Z)(),{username:o,authType:a}=e.storeUser.state,{search:s,pathname:c}=(0,g.TH)(),[l,i]=(0,n.useState)([]),u=e.storeUser.getTokenAccess().create,p=e.storeUser.getAccessRequestId(),{attempt:m,setAttempt:d}=(0,x.Z)("processing"),[b,f]=(0,n.useState)(""),[y,h]=(0,n.useState)(C({sort:{fieldName:"name",dir:"ASC"}},(0,E.Z)(s))),P=!(null!=y&&y.query||null!=y&&y.search),[k,j]=(0,n.useState)({kubes:[],startKey:"",totalCount:0}),S=k.totalCount>0?15*(l.length-2)+1:0,Z=k.totalCount>0?S+k.kubes.length-1:0;function K(e){O.Z.replace(e)}return(0,n.useEffect)((()=>{d({status:"processing"}),e.kubeService.fetchKubernetes(t,C(C({},y),{},{limit:15})).then((e=>{j({kubes:e.agents,startKey:e.startKey,totalCount:e.totalCount}),f(e.startKey?"":"disabled"),i(["",e.startKey]),d({status:"success"})})).catch((e=>{d({status:"failed",statusText:e.message}),j(C(C({},k),{},{kubes:[],totalCount:0})),i([""])}))}),[t,s]),{attempt:m,username:o,authType:a,isLeafCluster:r,clusterId:t,canCreate:u,results:k,fetchNext:()=>{f("loading"),e.kubeService.fetchKubernetes(t,C(C({},y),{},{limit:15,startKey:k.startKey})).then((e=>{j(C(C({},k),{},{kubes:e.agents,startKey:e.startKey})),f(e.startKey?"":"disabled"),i([...l,e.startKey])})).catch((e=>{d({status:"failed",statusText:e.message})}))},fetchPrev:()=>{f("loading"),e.kubeService.fetchKubernetes(t,C(C({},y),{},{limit:15,startKey:l[l.length-3]})).then((e=>{const t=l;t.pop(),i(t),j(C(C({},k),{},{kubes:e.agents,startKey:e.startKey})),f("")})).catch((e=>{d({status:"failed",statusText:e.message})}))},pageSize:15,from:S,to:Z,params:y,setParams:h,startKeys:l,setSort:function(e){h(C(C({},y),{},{sort:e}))},pathname:c,replaceHistory:K,fetchStatus:b,isSearchEmpty:P,onLabelClick:e=>(0,w.Z)(e,y,h,c,K),accessRequestId:p}}((0,y.Z)());return n.createElement(j,e)}},2479:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(2784),o=r(7933),a=r(7849),s=r(7278);const c=function(e){const{canCreate:t,isLeafCluster:r,onClick:c,agent:l,beginsWithVowel:i}=e,u=r||!t;let p="";return t||(p=`You do not have access to add ${i?"an":"a"} ${l}`),r&&(p=`Adding ${i?"an":"a"} ${l} to a leaf cluster is not supported`),n.createElement(o.rU,{to:{pathname:`${s.Z.routes.root}/discover`,state:{entity:l}},style:{textDecoration:"none"}},n.createElement(a.DF,{title:p,disabled:u,width:"240px",onClick:c},"Add ",l))}},5769:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(2784),o=r(7933),a=r(7849),s=r(9049),c=r(7278);const l=r.p+"assets/img/img-b7a4b8.png",i=r.p+"assets/img/img-6693d4.png",u=r.p+"assets/img/img-7ba430.png",p=r.p+"assets/img/img-73fbbf.png";function m(e){return{application:l,database:i,desktop:u,kubernetes:p,server:p}[e]}const d=function(e){const{canCreate:t,clusterId:r,emptyStateInfo:l}=e,{byline:i,docsURL:u,resourceType:p,readOnly:d,title:b}=l;return t?n.createElement(a.xu,{p:8,pt:5,as:a.kC,width:"100%",mx:"auto",alignItems:"center",justifyContent:"center"},n.createElement(a.xu,{maxWidth:600},n.createElement(a.xu,{mb:4,textAlign:"center"},n.createElement(s.Z,{src:m(p),ml:"auto",mr:"auto",mb:4,height:"160px"}),n.createElement(a.xv,{typography:"h5",mb:2,fontWeight:700,fontSize:24},b),n.createElement(a.xv,{fontWeight:400,fontSize:14,style:{opacity:"0.6"}},i)),n.createElement(a.xu,{textAlign:"center"},n.createElement(o.rU,{to:{pathname:`${c.Z.routes.root}/discover`,state:{entity:p}},style:{textDecoration:"none"}},n.createElement(a.DF,{width:"224px"},"Add ",p)),n.createElement(a.JU,{size:"medium",as:"a",href:u,target:"_blank",width:"224px",ml:4,rel:"noreferrer"},"View Documentation")))):n.createElement(a.xu,{p:8,mx:"auto",maxWidth:"664px",textAlign:"center",color:"text.primary",borderRadius:"12px"},n.createElement(a.xv,{typography:"h2",mb:"3"},d.title),n.createElement(a.xv,null,"Either there are no ",d.resource,' in the "',n.createElement(a.xv,{as:"span",bold:!0},r),"\" cluster, or your roles don't grant you access."))}},7067:(e,t,r)=>{r.d(t,{Ob:()=>p,OX:()=>i,u4:()=>u,E2:()=>m});var n=r(917),o=r(7849),a=r(135);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const i=(0,n.ZP)(o.kC)(["flex-shrink:0;border-bottom:1px solid ",";height:56px;margin-left:-40px;margin-right:-40px;padding-left:40px;padding-right:40px;"],(e=>e.theme.colors.primary.main));i.defaultProps={alignItems:"center",mb:4};const u=(0,n.ZP)(o.xv)(["white-space:nowrap;"]);u.defaultProps=c(c({},o.xv.defaultProps),{},{typography:"h3"});const p=(0,n.ZP)(o.kC)(["width:100%;height:100%;flex-direction:column;::after{content:' ';padding-bottom:24px;}"]);p.defaultProps={theme:a.Z,px:6},n.ZP.div(["position:absolute;width:100%;height:100%;display:flex;"]),n.ZP.div(["display:flex;flex-direction:column;width:100%;"]);const m=n.ZP.button(["color:",";cursor:pointer;display:inline-flex;font-size:14px;padding:12px 40px;position:relative;text-decoration:none;font-weight:500;&:hover{background:",";}&.active{color:",";}&.active:after{background-color:",";content:'';position:absolute;bottom:0;left:0;width:100%;height:4px;}"],(e=>e.theme.colors.text.secondary),(e=>e.active?e.theme.colors.primary.light:"rgba(255, 255, 255, .06)"),(e=>e.theme.colors.light),(e=>e.theme.colors.accent))},1347:(e,t,r)=>{r.d(t,{r:()=>p,Z:()=>g});var n=r(2784),o=r(5070),a=r(3388),s=r(7849),c=r(917);const l=["text","fontFamily","allowMultiline","onCopy","bash"];function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}var u=r(3757);function p(e){var t,r;let{lines:c,bash:l=!0}=e;const i=(0,n.useRef)([]),p=null===(t=window.navigator)||void 0===t||null===(r=t.userAgent)||void 0===r?void 0:r.toLowerCase().includes("firefox");return n.createElement(y,{bg:"bgTerminal",pl:3,pt:2,pr:7,borderRadius:2,pb:p?3:2},n.createElement(f,{mr:1},c.map(((e,t)=>{const r=t===c.length-1;return n.createElement(s.xu,{pt:2,pb:r?0:2,key:t,ref:e=>i.current[t]=e},e.comment&&n.createElement(d,null,e.comment),n.createElement(s.kC,null,n.createElement(s.kC,null,l&&n.createElement(s.xu,{mr:"1"},"$"),n.createElement("div",{className:"text-to-copy"},e.text)),n.createElement(h,{pr:3},n.createElement(b,{onClick:()=>function(e){(0,o.Z)(c[e].text).then((()=>{const t=i.current[e].getElementsByClassName("icon-container")[0];t.classList.toggle("copied"),setTimeout((()=>{t.classList.toggle("copied")}),1e3)}));const t=i.current[e].getElementsByClassName("text-to-copy")[0];(0,a.Z)(t)}(t)},n.createElement(m,{className:"icon-container"},n.createElement(u.CKM,{"data-testid":"btn-copy"}),n.createElement(u.JrY,{"data-testid":"btn-check"}))))))}))))}const m=c.ZP.div([".icon-check{display:none;}.icon-copy{display:block;}&.copied{.icon-check{display:block;}.icon-copy{display:none;}}"]),d=c.ZP.div(["color:rgb(117 113 94 / 80%);"]),b=(0,c.ZP)(s.PL)(["height:28px;width:28px;border-radius:20px;min-height:auto;padding:0;margin-top:-4px;"]),f=(0,c.ZP)(s.xu)(["white-space:pre;word-break:break-all;font-size:12px;font-family:",";overflow:scroll;line-height:20px;"],(e=>{let{theme:t}=e;return t.fonts.mono}));var y=(0,c.ZP)(s.xu)({position:"relative"}),h=(0,c.ZP)(s.xu)(["position:absolute;right:0px;"]);const g=function(e){let{text:t,fontFamily:r,allowMultiline:u,onCopy:p,bash:m=!0}=e,d=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,l);const b=r||(0,c.Fg)().fonts.mono,f=n.useRef(),[y,h]=n.useState((()=>"Copy")),g=m&&!u?{overflow:"auto",whiteSpace:"pre",wordBreak:"break-all",fontSize:"12px",fontFamily:b}:{wordBreak:"break-all",fontSize:"12px",fontFamily:b};return n.createElement(s.kC,i({bg:"bgTerminal",p:"2",alignItems:"center",justifyContent:"space-between",borderRadius:2},d),n.createElement(s.kC,{mr:"2",style:g},m&&n.createElement(s.xu,{mr:"1",style:{userSelect:"none"}},"$"),n.createElement("div",{ref:f},t)),n.createElement(s.DF,{onClick:function(){(0,o.Z)(t).then((()=>h("Copied"))),(0,a.Z)(f.current),p&&p()},style:{maxWidth:"48px",width:"100%",padding:"4px 8px",minHeight:"10px",fontSize:"10px"}},y))}},3228:(e,t,r)=>{r.d(t,{ES:()=>s,Kp:()=>o,RB:()=>n,Sl:()=>a});const n=e=>{const t=document.createElement("a");t.setAttribute("href",`${e}`),t.setAttribute("target","_blank"),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)};async function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new TextEncoder;const r=t.encode(e),n=await crypto.subtle.digest("SHA-256",r),o=Array.from(new Uint8Array(n)),a=o.map((e=>e.toString(16).padStart(2,"0"))).join("");return a}function a(e){let{authType:t,clusterId:r,username:n,accessRequestId:o}=e;const{hostname:a,port:s}=window.location;return`tsh login --proxy=${a}:${s||"443"} ${"local"===t?`--auth=${t} --user=${n} `:""}${r}${o?` --request-id=${o}`:""}`}function s(e,t){return e&&t?e.filter((e=>!t.includes(e))):[]}},6828:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(4517),o=r(2784),a=r(7278);function s(){var e;const t=(0,o.useRef)({clusterId:a.Z.proxyCluster,hasClusterUrl:!1,isLeafCluster:!1}),r=(0,n.$B)(a.Z.routes.cluster),s=null==r||null===(e=r.params)||void 0===e?void 0:e.clusterId;return s&&(t.current.clusterId=s,t.current.isLeafCluster=s!==a.Z.proxyCluster),t.current.hasClusterUrl=!!s,t.current}},2398:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(2784),o=r(3665);function a(){const e=n.useContext(o.U);if(!e)throw new Error("Unable to retrieve Teleport Context");return window.teleContext=e}}}]);