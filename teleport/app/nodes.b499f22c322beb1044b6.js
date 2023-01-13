"use strict";(self.webpackChunk_gravitational_teleport=self.webpackChunk_gravitational_teleport||[]).push([[509],{9038:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var n=r(2784),o=r(7849),a=r(7067),s=r(6900),c=r(5769),i=r(6189),l=r(2499),u=r(2398),p=r(6828),m=r(2479),d=r(8604);function f(e){const{results:t,getNodeLoginOptions:r,startSshSession:u,attempt:p,canCreate:d,isLeafCluster:f,clusterId:h,fetchNext:x,fetchPrev:b,from:y,to:v,pageSize:E,params:C,setParams:w,startKeys:O,setSort:Z,pathname:P,replaceHistory:S,fetchStatus:k,isSearchEmpty:j,onLabelClick:I}=e,L=0===t.nodes.length&&j;return n.createElement(a.Ob,null,n.createElement(a.OX,{alignItems:"center",justifyContent:"space-between"},n.createElement(a.u4,null,"Servers"),"success"===p.status&&!L&&n.createElement(o.kC,{alignItems:"center"},n.createElement(s.Z,{width:"280px",onPress:function(e,t){u(e,t)},mr:3}),n.createElement(m.Z,{agent:"server",beginsWithVowel:!1,isLeafCluster:f,canCreate:d}))),"failed"===p.status&&n.createElement(l.Z,{message:p.statusText}),"processing"===p.status&&n.createElement(o.xu,{textAlign:"center",m:10},n.createElement(o.z$,null)),"processing"!==p.status&&!L&&n.createElement(i.Z,{nodes:t.nodes,totalCount:t.totalCount,onLoginMenuOpen:r,onLoginSelect:function(e,t,r){e.preventDefault(),u(t,r)},fetchNext:x,fetchPrev:b,fetchStatus:k,from:y,to:v,pageSize:E,params:C,setParams:w,startKeys:O,setSort:Z,pathname:P,replaceHistory:S,onLabelClick:I}),"success"===p.status&&L&&n.createElement(c.Z,{clusterId:h,canCreate:d&&!f,emptyStateInfo:g}))}const g={title:"Add your first server to Teleport",byline:"Teleport Server Access consolidates SSH access across all environments.",docsURL:"https://goteleport.com/docs/server-access/getting-started/",resourceType:"server",readOnly:{title:"No Servers Found",resource:"servers"}},h=function(){const e=(0,u.Z)(),t=(0,p.Z)(),r=(0,d.Z)(e,t);return n.createElement(f,r)}},2479:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(2784),o=r(7933),a=r(7849),s=r(7278);const c=function(e){const{canCreate:t,isLeafCluster:r,onClick:c,agent:i,beginsWithVowel:l}=e,u=r||!t;let p="";return t||(p=`You do not have access to add ${l?"an":"a"} ${i}`),r&&(p=`Adding ${l?"an":"a"} ${i} to a leaf cluster is not supported`),n.createElement(o.rU,{to:{pathname:`${s.Z.routes.root}/discover`,state:{entity:i}},style:{textDecoration:"none"}},n.createElement(a.DF,{title:p,disabled:u,width:"240px",onClick:c},"Add ",i))}},5769:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(2784),o=r(7933),a=r(7849),s=r(9049),c=r(7278);const i=r.p+"assets/img/img-b7a4b8.png",l=r.p+"assets/img/img-6693d4.png",u=r.p+"assets/img/img-7ba430.png",p=r.p+"assets/img/img-73fbbf.png";function m(e){return{application:i,database:l,desktop:u,kubernetes:p,server:p}[e]}const d=function(e){const{canCreate:t,clusterId:r,emptyStateInfo:i}=e,{byline:l,docsURL:u,resourceType:p,readOnly:d,title:f}=i;return t?n.createElement(a.xu,{p:8,pt:5,as:a.kC,width:"100%",mx:"auto",alignItems:"center",justifyContent:"center"},n.createElement(a.xu,{maxWidth:600},n.createElement(a.xu,{mb:4,textAlign:"center"},n.createElement(s.Z,{src:m(p),ml:"auto",mr:"auto",mb:4,height:"160px"}),n.createElement(a.xv,{typography:"h5",mb:2,fontWeight:700,fontSize:24},f),n.createElement(a.xv,{fontWeight:400,fontSize:14,style:{opacity:"0.6"}},l)),n.createElement(a.xu,{textAlign:"center"},n.createElement(o.rU,{to:{pathname:`${c.Z.routes.root}/discover`,state:{entity:p}},style:{textDecoration:"none"}},n.createElement(a.DF,{width:"224px"},"Add ",p)),n.createElement(a.JU,{size:"medium",as:"a",href:u,target:"_blank",width:"224px",ml:4,rel:"noreferrer"},"View Documentation")))):n.createElement(a.xu,{p:8,mx:"auto",maxWidth:"664px",textAlign:"center",color:"text.primary",borderRadius:"12px"},n.createElement(a.xv,{typography:"h2",mb:"3"},d.title),n.createElement(a.xv,null,"Either there are no ",d.resource,' in the "',n.createElement(a.xv,{as:"span",bold:!0},r),"\" cluster, or your roles don't grant you access."))}},7067:(e,t,r)=>{r.d(t,{Ob:()=>p,OX:()=>l,u4:()=>u,E2:()=>m});var n=r(917),o=r(7849),a=r(135);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const l=(0,n.ZP)(o.kC)(["flex-shrink:0;border-bottom:1px solid ",";height:56px;margin-left:-40px;margin-right:-40px;padding-left:40px;padding-right:40px;"],(e=>e.theme.colors.primary.main));l.defaultProps={alignItems:"center",mb:4};const u=(0,n.ZP)(o.xv)(["white-space:nowrap;"]);u.defaultProps=c(c({},o.xv.defaultProps),{},{typography:"h3"});const p=(0,n.ZP)(o.kC)(["width:100%;height:100%;flex-direction:column;::after{content:' ';padding-bottom:24px;}"]);p.defaultProps={theme:a.Z,px:6},n.ZP.div(["position:absolute;width:100%;height:100%;display:flex;"]),n.ZP.div(["display:flex;flex-direction:column;width:100%;"]);const m=n.ZP.button(["color:",";cursor:pointer;display:inline-flex;font-size:14px;padding:12px 40px;position:relative;text-decoration:none;font-weight:500;&:hover{background:",";}&.active{color:",";}&.active:after{background-color:",";content:'';position:absolute;bottom:0;left:0;width:100%;height:4px;}"],(e=>e.theme.colors.text.secondary),(e=>e.active?e.theme.colors.primary.light:"rgba(255, 255, 255, .06)"),(e=>e.theme.colors.light),(e=>e.theme.colors.accent))},6828:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(4517),o=r(2784),a=r(7278);function s(){var e;const t=(0,o.useRef)({clusterId:a.Z.proxyCluster,hasClusterUrl:!1,isLeafCluster:!1}),r=(0,n.$B)(a.Z.routes.cluster),s=null==r||null===(e=r.params)||void 0===e?void 0:e.clusterId;return s&&(t.current.clusterId=s,t.current.isLeafCluster=s!==a.Z.proxyCluster),t.current.hasClusterUrl=!!s,t.current}},2398:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(2784),o=r(3665);function a(){const e=n.useContext(o.U);if(!e)throw new Error("Unable to retrieve Teleport Context");return window.teleContext=e}}}]);