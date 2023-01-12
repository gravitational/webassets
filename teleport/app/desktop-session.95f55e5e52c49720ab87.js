"use strict";(self.webpackChunk_gravitational_teleport=self.webpackChunk_gravitational_teleport||[]).push([[456],{"2pVA":(e,t,n)=>{n.r(t),n.d(t,{default:()=>F});var r=n("ERkP"),o=n("CIn/"),a=n("pH/e"),s=n("Ok3c"),i=n("SagJ"),c=n("dd6b"),l=n("mPIB"),u=n("oGse"),d=n("fZr9"),p=n("AWnD"),h=n("gVU5"),b=n("MBdU"),f=n("23ay"),g=n("lr/o"),m=n("igdO"),y=n("qpCD"),S=n("Qm3L"),w=n("yLdc"),E=n("lwEh"),C=n("Qjlk");function O(e){const{showShareDirectory:t,onShareDirectory:n,onDisconnect:a}=e;return r.createElement(o.kC,{alignItems:"center"},r.createElement(C.Oq,{buttonIconProps:{ml:4,size:0,color:"text.secondary",style:{fontSize:"20px"}},menuProps:D},t&&r.createElement(C.sN,{onClick:n},r.createElement(C.ZH,{as:w.GSs,mr:"2"}),"Share Directory (preview)"),r.createElement(C.sN,{onClick:a},r.createElement(C.ZH,{as:w.Lk_,mr:"2"}),"Disconnect")))}const D={menuListCss:()=>"\n  width: 250px;\n"};function v(e){const{userHost:t,clipboardSharingEnabled:n,onDisconnect:a,canShareDirectory:s,isSharingDirectory:i,onShareDirectory:c}=e,l=(0,S.Fg)(),u=e=>({color:e?l.colors.text.primary:l.colors.text.secondary});return r.createElement(o.tD,{height:`${P}px`,bg:E.O.dark,style:{justifyContent:"space-between"}},r.createElement(o.xv,{px:3,style:{color:l.colors.text.secondary}},t),r.createElement(o.kC,{px:3},r.createElement(o.kC,{alignItems:"center"},r.createElement(j,{style:u(i),pr:3,title:i?"Directory Sharing Enabled":"Directory Sharing Disabled"}),r.createElement(x,{style:u(n),pr:3,title:n?"Clipboard Sharing Enabled":"Clipboard Sharing Disabled"})),r.createElement(O,{onDisconnect:a,showShareDirectory:s&&!i,onShareDirectory:c})))}const P=40,x=(0,S.ZP)(w.TUt)(["font-weight:",";font-size:",";align-self:'center';"],(e=>{let{theme:t}=e;return t.fontWeights.bold}),(e=>{let{theme:t}=e;return t.fontSizes[4]+"px"})),j=(0,S.ZP)(w.ot9)(["font-weight:",";font-size:",";align-self:'center';"],(e=>{let{theme:t}=e;return t.fontWeights.bold}),(e=>{let{theme:t}=e;return t.fontSizes[6]+"px"}));function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){T(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(){return{width:window.innerWidth,height:window.innerHeight-P}}function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){I(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z(){return Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z.apply(this,arguments)}function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){K(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function K(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e){const{directorySharingState:t,setDirectorySharingState:n,fetchAttempt:i,tdpConnection:c,disconnected:l,wsConnection:u,setTdpConnection:d,showAnotherSessionActiveDialog:p,setShowAnotherSessionActiveDialog:h}=e,b="processing"===i.status||"processing"===c.status,f=()=>{d((e=>""===e.status?{status:"success"}:e)),n((e=>L(L({},e),{},{browserError:!1})))},g=(()=>{const e="closed"===u&&!l&&("success"===c.status||""===c.status);let n="";return"failed"===i.status?n=i.statusText||"fetch attempt failed":"failed"===c.status?n=c.statusText||"tdp connection failed":""===c.status?n=c.statusText||"encountered a non-fatal error":e?n="Session disconnected for an unknown reason.":t.browserError?n='Your user role supports directory sharing over desktop access,       however this feature is only available by default on some Chromium       based browsers like Google Chrome or Microsoft Edge. Brave users can       use the feature by navigating to brave://flags/#file-system-access-api       and selecting "Enable". Please switch to a supported browser.':"processing"===i.status&&"success"===c.status&&(n="The application has detected an invalid internal application state.         Please file a bug report for this issue at         https://github.com/gravitational/teleport/issues/new?assignees=&labels=bug&template=bug_report.md"),{open:""!==n,text:n,fatal:!(""===c.status||t.browserError)}})();if(g.open){const t=!g.fatal;return r.createElement(R,Z({},e,{initTdpCli:t,displayCanvas:t}),r.createElement(s.ZP,{dialogCss:()=>({width:"484px"}),onClose:f,open:g.open},r.createElement(s.fK,{style:{flexDirection:"column"}},g.fatal&&r.createElement(s.$N,null,"Fatal Error"),!g.fatal&&r.createElement(s.$N,null,"Unsupported Action")),r.createElement(s.cZ,null,g.fatal&&r.createElement(r.Fragment,null,r.createElement(a.b0,{children:r.createElement(r.Fragment,null,g.text)}),"Refresh the page to try again."),!g.fatal&&r.createElement(a.v3,{my:2,children:g.text})),r.createElement(s.cN,null,!g.fatal&&r.createElement(o.PL,{size:"large",width:"30%",onClick:f},"Dismiss"),g.fatal&&r.createElement(o.PL,{size:"large",width:"30%",onClick:()=>{window.location.reload()}},"Refresh"))))}if(p){const t=!1;return r.createElement(R,Z({},e,{initTdpCli:t,displayCanvas:!1}),r.createElement(s.ZP,{dialogCss:()=>({width:"484px"}),onClose:()=>{},open:!0},r.createElement(s.fK,{style:{flexDirection:"column"}},r.createElement(s.$N,null,"Another Session Is Active")),r.createElement(s.cZ,null,"This desktop has an active session, connecting to it may close the other session. Do you wish to continue?"),r.createElement(s.cN,null,r.createElement(o.DF,{mr:3,onClick:()=>{window.close()}},"Abort"),r.createElement(o.PL,{onClick:()=>{h(!1)}},"Continue"))))}if(l)return r.createElement(R,Z({},e,{initTdpCli:!1,displayCanvas:!1}),r.createElement(o.xu,{textAlign:"center",m:10},r.createElement(o.xv,null,"Session successfully disconnected")));if(b){const t="processing"!==i.status;return r.createElement(R,Z({},e,{initTdpCli:t,displayCanvas:!1}),r.createElement(o.xu,{textAlign:"center",m:10},r.createElement(o.z$,null)))}return r.createElement(R,Z({},e,{initTdpCli:!0,displayCanvas:!0}))}function R(e){const{setDisconnected:t,webauthn:n,tdpClient:a,username:s,hostname:l,clipboardSharingEnabled:u,setClipboardSharingEnabled:d,directorySharingState:p,setDirectorySharingState:h,onPngFrame:b,onClipboardData:f,onTdpError:g,onWsClose:m,onWsOpen:y,onKeyDown:S,onKeyUp:w,onMouseMove:E,onMouseDown:C,onMouseUp:O,onMouseWheelScroll:D,onContextMenu:P,initTdpCli:x,displayCanvas:j}=e,k=u;return r.createElement(o.kC,{flexDirection:"column"},r.createElement(v,{onDisconnect:()=>{t(!0),d(!1),h((e=>L(L({},e),{},{isSharing:!1}))),a.shutdown()},userHost:`${s}@${l}`,clipboardSharingEnabled:k,canShareDirectory:p.canShare,isSharingDirectory:p.isSharing,onShareDirectory:()=>{try{window.showDirectoryPicker().then((e=>{h((e=>L(L({},e),{},{isSharing:!0}))),a.addSharedDirectory(e),a.sendSharedDirectoryAnnounce()})).catch((()=>{h((e=>L(L({},e),{},{isSharing:!1})))}))}catch(e){h((e=>L(L({},e),{},{browserError:!0})))}}}),e.children,n.requested&&r.createElement(c.Z,{onContinue:n.authenticate,onCancel:()=>{n.setState((e=>L(L({},e),{},{errorText:'This session requires multi factor authentication to continue. Please hit "Retry" and follow the prompts given by your browser to complete authentication.'})))},errorText:n.errorText}),r.createElement(i.Z,{style:{display:j?"flex":"none",flex:1},tdpCli:a,tdpCliInit:x,tdpCliOnPngFrame:b,tdpCliOnClipboardData:f,tdpCliOnTdpError:g,tdpCliOnWsClose:m,tdpCliOnWsOpen:y,onKeyDown:S,onKeyUp:w,onMouseMove:E,onMouseDown:C,onMouseUp:O,onMouseWheelScroll:D,onContextMenu:P}))}const F=function(){const e=function(){const{attempt:e,run:t}=(0,u.Z)("processing"),{attempt:n,setAttempt:o}=(0,u.Z)("processing"),[a,s]=(0,r.useState)("closed"),[i,c]=(0,r.useState)(!1),[S,w]=(0,r.useState)({canShare:!1,isSharing:!1,browserError:!1}),{username:E,desktopName:C,clusterId:O}=(0,l.UO)(),[D,v]=(0,r.useState)(""),P=navigator.userAgent.includes("Chrome"),[x,j]=(0,r.useState)(!1),[k,T]=(0,r.useState)(!1);document.title=(0,r.useMemo)((()=>`${O} • ${E}@${D}`),[D]),(0,r.useEffect)((()=>{t((()=>Promise.all([p.Z.fetchDesktop(O,C).then((e=>v(e.name))),h.ZP.fetchUserContext().then((e=>{j(e.acl.clipboardSharingEnabled&&P),w((t=>N(N({},t),{},{canShare:e.acl.directorySharingEnabled})))})),p.Z.checkDesktopIsActive(O,C).then((e=>{T(e)}))])))}),[O,C]);const W=function(e){const{username:t,desktopName:n,clusterId:o,setTdpConnection:a,setWsConnection:s,setClipboardSharingEnabled:i,setDirectorySharingState:c,clipboardSharingEnabled:l}=e,[u,d]=(0,r.useState)(null),p=(0,r.useRef)(!1),h=(0,r.useRef)(new TextEncoder),S=(0,r.useRef)("");(0,r.useEffect)((()=>{const{width:e,height:r}=A(),a=m.Z.api.desktopWsAddr.replace(":fqdn",(0,g.Lp)()).replace(":clusterId",o).replace(":desktopName",n).replace(":token",(0,g.hP)()).replace(":username",t).replace(":width",e.toString()).replace(":height",r.toString());d(new f.pe(a))}),[o,t,n]);const{isMac:w}=(0,b.Z)(),E=(e,t)=>!("CapsLock"!==t.code||!w||(e.sendKeyboardInput(t.code,f.BN.DOWN),e.sendKeyboardInput(t.code,f.BN.UP),0)),C=e=>{l&&document.hasFocus()&&navigator.clipboard.readText().then((t=>{(0,y.Kp)(t,h.current).then((n=>{t&&n!==S.current&&(e.sendClipboardData({data:t}),S.current=n)}))}))};return{tdpClient:u,onPngFrame:(e,t)=>{p.current||((e=>{const{width:t,height:n}=A();e.width=t,e.height=n})(e.canvas),a({status:"success"}),p.current=!0),e.drawImage(t.data,t.left,t.top)},onTdpError:e=>{const{err:t,isFatal:n}=e;c((e=>M(M({},e),{},{isSharing:!1}))),i(!1),a({status:n?"failed":"",statusText:t.message})},onClipboardData:async e=>{if(l&&document.hasFocus()&&e.data){navigator.clipboard.writeText(e.data);let t=await(0,y.Kp)(e.data,h.current);S.current=t}},onWsClose:()=>{s("closed")},onWsOpen:()=>{s("open")},onKeyDown:(e,t)=>{t.preventDefault(),E(e,t)||(e.sendKeyboardInput(t.code,f.BN.DOWN),"MetaRight"!==t.code&&"MetaLeft"!==t.code&&"AltRight"!==t.code&&"AltLeft"!==t.code&&C(e))},onKeyUp:(e,t)=>{t.preventDefault(),E(e,t)||e.sendKeyboardInput(t.code,f.BN.UP)},onMouseMove:(e,t,n)=>{const r=t.getBoundingClientRect(),o=n.clientX-r.left,a=n.clientY-r.top;e.sendMouseMove(o,a)},onMouseDown:(e,t)=>{0!==t.button&&1!==t.button&&2!==t.button||e.sendMouseButton(t.button,f.BN.DOWN),C(e)},onMouseUp:(e,t)=>{0!==t.button&&1!==t.button&&2!==t.button||e.sendMouseButton(t.button,f.BN.UP)},onMouseWheelScroll:(e,t)=>{t.preventDefault(),t.deltaMode===WheelEvent.DOM_DELTA_PIXEL&&(t.deltaX&&e.sendMouseWheelScroll(f.Yc.HORIZONTAL,-t.deltaX),t.deltaY&&e.sendMouseWheelScroll(f.Yc.VERTICAL,-t.deltaY))},onContextMenu:()=>!1}}({username:E,desktopName:C,clusterId:O,setTdpConnection:o,setWsConnection:s,setClipboardSharingEnabled:j,setDirectorySharingState:w,clipboardSharingEnabled:x}),I=(0,d.Z)(W.tdpClient);return N({hostname:D,username:E,clipboardSharingEnabled:x,setClipboardSharingEnabled:j,directorySharingState:S,setDirectorySharingState:w,isUsingChrome:P,fetchAttempt:e,tdpConnection:n,wsConnection:a,disconnected:i,setDisconnected:c,webauthn:I,setTdpConnection:o,showAnotherSessionActiveDialog:k,setShowAnotherSessionActiveDialog:T},W)}();return r.createElement(B,e)}}}]);