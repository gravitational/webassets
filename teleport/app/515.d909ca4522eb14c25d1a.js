"use strict";(self.webpackChunk_gravitational_teleport=self.webpackChunk_gravitational_teleport||[]).push([[515],{5070:(M,I,N)=>{function g(M){return navigator.clipboard.writeText(M).catch((M=>{window.prompt("Cannot copy to clipboard. Use ctrl/cmd + c",M)}))}N.d(I,{Z:()=>g})},3388:(M,I,N)=>{function g(M){let I,N;window.getSelection&&document.createRange&&(N=window.getSelection(),I=document.createRange(),I.selectNodeContents(M),N.removeAllRanges(),N.addRange(I))}N.d(I,{Z:()=>g})},9127:(M,I,N)=>{N.d(I,{tg:()=>D.Z,lo:()=>A.Z,d4:()=>g.useEffect,U7:()=>e,eJ:()=>g.useState});var g=N(2784),D=N(4851),A=N(4696);function e(M){const I=(0,g.useRef)();return(0,g.useEffect)((()=>{var N;M.shouldFocus&&(null===(N=I.current)||void 0===N||N.focus())}),[M.shouldFocus,I,...M.refocusDeps||[]]),I}},4851:(M,I,N)=>{N.d(I,{Z:()=>C});var g=N(2784);function D(M,I){var N=Object.keys(M);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(M);I&&(g=g.filter((function(I){return Object.getOwnPropertyDescriptor(M,I).enumerable}))),N.push.apply(N,g)}return N}function A(M){for(var I=1;I<arguments.length;I++){var N=null!=arguments[I]?arguments[I]:{};I%2?D(Object(N),!0).forEach((function(I){e(M,I,N[I])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(N)):D(Object(N)).forEach((function(I){Object.defineProperty(M,I,Object.getOwnPropertyDescriptor(N,I))}))}return M}function e(M,I,N){return I in M?Object.defineProperty(M,I,{value:N,enumerable:!0,configurable:!0,writable:!0}):M[I]=N,M}const c=N(2418).Z.create("shared/hooks/useAttempt"),j={isProcessing:!1,isFailed:!1,isSuccess:!1,message:""};function C(M){const[I,N]=g.useState((()=>A(A({},j),M))),D=g.useMemo((()=>function(M){function I(){let I=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";M(A(A({},j),{},{isSuccess:!0,message:I}))}function N(){M(A(A({},j),{},{isProcessing:!0}))}function g(I){c.error("attempt",I),M(A(A({},j),{},{isFailed:!0,message:I.message}))}return{do:function(M){try{return N(),M().then((()=>{I()})).catch((M=>{throw g(M),M}))}catch(M){g(M)}},stop:I,start:N,clear:function(){M(A({},j))},error:g}}(N)),[N]);return[I,D]}},4696:(M,I,N)=>{N.d(I,{Z:()=>A});var g=N(2784);const D=N(2418).Z.create("shared/hooks/useAttempt");function A(){let M=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const[I,N]=g.useState((()=>({status:M,statusText:""})));function A(M){D.error("attempt",M),N({status:"failed",statusText:M.message})}const e=(0,g.useCallback)((M=>{try{return N({status:"processing"}),M().then((()=>(N({status:"success"}),!0))).catch((M=>(A(M),!1)))}catch(M){return A(M),Promise.resolve(!1)}}),[]);return{attempt:I,setAttempt:N,run:e,handleError:A}}},9750:(M,I,N)=>{function g(M){const{auth2faType:I,required:N=!1}=M,g=[];if("off"===I||!I)return g;const D="on"===I||"optional"===I;return("webauthn"===I||D)&&g.push({value:"webauthn",label:"Hardware Key"}),("otp"===I||D)&&g.push({value:"otp",label:"Authenticator App"}),N||"optional"!==I||g.push({value:"optional",label:"None"}),g}N.d(I,{Z:()=>g})},4116:(M,I,N)=>{N.d(I,{Z:()=>j});var g=N(2784),D=N(9049),A=N(2010);function e(){return e=Object.assign||function(M){for(var I=1;I<arguments.length;I++){var N=arguments[I];for(var g in N)Object.prototype.hasOwnProperty.call(N,g)&&(M[g]=N[g])}return M},e.apply(this,arguments)}const c=M=>{let I=e({},M);return g.createElement(D.Z,I)};c.defaultProps={src:A,maxHeight:"120px",maxWidth:"200px",my:6,mx:"auto"};const j=c},2966:(M,I,N)=>{N.d(I,{n:()=>e});var g=N(2784),D=N(1218),A=(N(9161),N(9124));N(1347);const e=M=>{let{title:I,onRecover:N}=M;return g.createElement(D.Zb,{bg:"primary.light",my:"5",mx:"auto",width:"464px",px:5,pb:4},g.createElement(D.xv,{typography:"h3",pt:4,textAlign:"center",color:"light"},I),g.createElement(A.b0,{my:5},"Web UI Login Disabled"),g.createElement(D.xv,{mb:2,typography:"paragraph2"},"This Teleport Cluster requires that user"," ",g.createElement(D.rU,{color:"light",href:"https://goteleport.com/docs/access-controls/guides/hardware-key-support/",target:"_blank"},"private keys")," ","be stored on hardware authentication devices. Since these keys are not accessible by web browsers, Web UI login has been disabled. Please use"," ",g.createElement(D.rU,{color:"light",href:"https://goteleport.com/docs/connect-your-client/teleport-connect/",target:"_blank"},"Teleport Connect")," ","or"," ",g.createElement(D.rU,{color:"light",href:"https://goteleport.com/docs/connect-your-client/tsh/#installing-tsh",target:"_blank"},"tsh")," ","to log in."),N&&g.createElement(D.xv,{typography:"paragraph2",textAlign:"center",mt:4},g.createElement(D.oD,{onClick:()=>N(!0),style:{padding:"0px",minHeight:0},mr:2},"Forgot Password?"),"or"," ",g.createElement(D.oD,{onClick:N,style:{padding:"0px",minHeight:0},ml:1},"Lost Two-Factor Device?")))}},1347:(M,I,N)=>{N.d(I,{r:()=>t,Z:()=>o});var g=N(2784),D=N(5070),A=N(3388),e=N(1218),c=N(917);const j=["text","fontFamily","allowMultiline","onCopy","bash"];function C(){return C=Object.assign||function(M){for(var I=1;I<arguments.length;I++){var N=arguments[I];for(var g in N)Object.prototype.hasOwnProperty.call(N,g)&&(M[g]=N[g])}return M},C.apply(this,arguments)}var z=N(3757);function t(M){var I,N;let{lines:c,bash:j=!0}=M;const C=(0,g.useRef)([]),t=null===(I=window.navigator)||void 0===I||null===(N=I.userAgent)||void 0===N?void 0:N.toLowerCase().includes("firefox");return g.createElement(y,{bg:"bgTerminal",pl:3,pt:2,pr:7,borderRadius:2,pb:t?3:2},g.createElement(l,{mr:1},c.map(((M,I)=>{const N=I===c.length-1;return g.createElement(e.xu,{pt:2,pb:N?0:2,key:I,ref:M=>C.current[I]=M},M.comment&&g.createElement(T,null,M.comment),g.createElement(e.kC,null,g.createElement(e.kC,null,j&&g.createElement(e.xu,{mr:"1"},"$"),g.createElement("div",{className:"text-to-copy"},g.createElement(n,null,M.text))),g.createElement(u,{pr:3},g.createElement(w,{onClick:()=>function(M){(0,D.Z)(c[M].text).then((()=>{const I=C.current[M].getElementsByClassName("icon-container")[0];I.classList.toggle("copied"),setTimeout((()=>{I.classList.toggle("copied")}),1e3)}));const I=C.current[M].getElementsByClassName("text-to-copy")[0];(0,A.Z)(I)}(I)},g.createElement(i,{className:"icon-container"},g.createElement(z.CKM,{"data-testid":"btn-copy"}),g.createElement(z.JrY,{"data-testid":"btn-check"}))))))}))))}const i=c.ZP.div([".icon-check{display:none;}.icon-copy{display:block;}&.copied{.icon-check{display:block;}.icon-copy{display:none;}}"]),T=c.ZP.div(["color:rgb(117 113 94 / 80%);"]),w=(0,c.ZP)(e.PL)(["height:28px;width:28px;border-radius:20px;min-height:auto;padding:0;margin-top:-4px;"]),l=(0,c.ZP)(e.xu)(["white-space:pre;word-break:break-all;font-size:12px;font-family:",";overflow:scroll;line-height:20px;"],(M=>{let{theme:I}=M;return I.fonts.mono}));var y=(0,c.ZP)(e.xu)({position:"relative"}),n=(0,c.ZP)("pre")({margin:0}),u=(0,c.ZP)(e.xu)(["position:absolute;right:0px;"]);const o=function(M){let{text:I,fontFamily:N,allowMultiline:z,onCopy:t,bash:i=!0}=M,T=function(M,I){if(null==M)return{};var N,g,D=function(M,I){if(null==M)return{};var N,g,D={},A=Object.keys(M);for(g=0;g<A.length;g++)N=A[g],I.indexOf(N)>=0||(D[N]=M[N]);return D}(M,I);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(M);for(g=0;g<A.length;g++)N=A[g],I.indexOf(N)>=0||Object.prototype.propertyIsEnumerable.call(M,N)&&(D[N]=M[N])}return D}(M,j);const w=N||(0,c.Fg)().fonts.mono,l=g.useRef(),[y,n]=g.useState((()=>"Copy")),u=i&&!z?{overflow:"auto",whiteSpace:"pre",wordBreak:"break-all",fontSize:"12px",fontFamily:w}:{wordBreak:"break-all",fontSize:"12px",fontFamily:w};return g.createElement(e.kC,C({bg:"bgTerminal",p:"2",alignItems:"center",justifyContent:"space-between",borderRadius:2},T),g.createElement(e.kC,{mr:"2",style:u},i&&g.createElement(e.xu,{mr:"1",style:{userSelect:"none"}},"$"),g.createElement("div",{ref:l},I)),g.createElement(e.DF,{onClick:function(){(0,D.Z)(I).then((()=>n("Copied"))),(0,A.Z)(l.current),t&&t()},style:{maxWidth:"48px",width:"100%",padding:"4px 8px",minHeight:"10px",fontSize:"10px"}},y))}},2010:M=>{M.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTMwcHgiIGhlaWdodD0iMTM3cHgiIHZpZXdCb3g9IjAgMCAxMzAgMTM3IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1Mi41ICg2NzQ2OSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+dGVsZXBvcnQgbWVkYWxsaW9uIDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxRTI3NTEiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzBDMTQzRCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjAlIiB5MT0iMy4zNDk2MDkzNyUiIHgyPSIxMDAlIiB5Mj0iMTAwJSIgaWQ9ImxpbmVhckdyYWRpZW50LTIiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzg0OUI1IiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxQTIzN0UiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGNpcmNsZSBpZD0icGF0aC0zIiBjeD0iNTcuNSIgY3k9IjU3LjUiIHI9IjU3LjUiPjwvY2lyY2xlPgogICAgICAgIDxmaWx0ZXIgeD0iLTcuMCUiIHk9Ii03LjAlIiB3aWR0aD0iMTEzLjklIiBoZWlnaHQ9IjExNy40JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iZmlsdGVyLTQiPgogICAgICAgICAgICA8ZmVPZmZzZXQgZHg9IjAiIGR5PSI0IiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIj48L2ZlT2Zmc2V0PgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyIiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiPjwvZmVHYXVzc2lhbkJsdXI+CiAgICAgICAgICAgIDxmZUNvbXBvc2l0ZSBpbj0ic2hhZG93Qmx1ck91dGVyMSIgaW4yPSJTb3VyY2VBbHBoYSIgb3BlcmF0b3I9Im91dCIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIj48L2ZlQ29tcG9zaXRlPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC4yNCAwIiB0eXBlPSJtYXRyaXgiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMSI+PC9mZUNvbG9yTWF0cml4PgogICAgICAgICAgICA8ZmVPZmZzZXQgZHg9IjAiIGR5PSIwIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIyIj48L2ZlT2Zmc2V0PgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyIiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIyIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjIiPjwvZmVHYXVzc2lhbkJsdXI+CiAgICAgICAgICAgIDxmZUNvbXBvc2l0ZSBpbj0ic2hhZG93Qmx1ck91dGVyMiIgaW4yPSJTb3VyY2VBbHBoYSIgb3BlcmF0b3I9Im91dCIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIyIj48L2ZlQ29tcG9zaXRlPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC4xMiAwIiB0eXBlPSJtYXRyaXgiIGluPSJzaGFkb3dCbHVyT3V0ZXIyIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMiI+PC9mZUNvbG9yTWF0cml4PgogICAgICAgICAgICA8ZmVNZXJnZT4KICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0ic2hhZG93TWF0cml4T3V0ZXIxIj48L2ZlTWVyZ2VOb2RlPgogICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSJzaGFkb3dNYXRyaXhPdXRlcjIiPjwvZmVNZXJnZU5vZGU+CiAgICAgICAgICAgIDwvZmVNZXJnZT4KICAgICAgICA8L2ZpbHRlcj4KICAgICAgICA8ZmlsdGVyIHg9Ii0xMDYuOSUiIHk9Ii0xMDEuMyUiIHdpZHRoPSIzMTMuOSUiIGhlaWdodD0iMzAyLjYlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJmaWx0ZXItNSI+CiAgICAgICAgICAgIDxmZU9mZnNldCBkeD0iMCIgZHk9IjgiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiPjwvZmVPZmZzZXQ+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjE2IiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiPjwvZmVHYXVzc2lhbkJsdXI+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjI0IDAiIHR5cGU9Im1hdHJpeCIgaW49InNoYWRvd0JsdXJPdXRlcjEiIHJlc3VsdD0ic2hhZG93TWF0cml4T3V0ZXIxIj48L2ZlQ29sb3JNYXRyaXg+CiAgICAgICAgICAgIDxmZU1lcmdlPgogICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSJzaGFkb3dNYXRyaXhPdXRlcjEiPjwvZmVNZXJnZU5vZGU+CiAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49IlNvdXJjZUdyYXBoaWMiPjwvZmVNZXJnZU5vZGU+CiAgICAgICAgICAgIDwvZmVNZXJnZT4KICAgICAgICA8L2ZpbHRlcj4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9Ijc5LjM5ODYwMDMlIiB5MT0iLTg1LjM5ODE3MTIlIiB4Mj0iMTMuNDYwMjg2NSUiIHkyPSIxOTEuOTY2NjY0JSIgaWQ9ImxpbmVhckdyYWRpZW50LTYiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkZGRkZGIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkZGRkYiIG9mZnNldD0iMTguMjI2OTA5MSUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0U4RUFGNiIgc3RvcC1vcGFjaXR5PSIwLjI0IiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxmaWx0ZXIgeD0iLTEwNi45JSIgeT0iLTEwMS4zJSIgd2lkdGg9IjMxMy45JSIgaGVpZ2h0PSIzMDIuNiUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImZpbHRlci03Ij4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PSIwIiBkeT0iOCIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSI+PC9mZU9mZnNldD4KICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTYiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSI+PC9mZUdhdXNzaWFuQmx1cj4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuMjQgMCIgdHlwZT0ibWF0cml4IiBpbj0ic2hhZG93Qmx1ck91dGVyMSIgcmVzdWx0PSJzaGFkb3dNYXRyaXhPdXRlcjEiPjwvZmVDb2xvck1hdHJpeD4KICAgICAgICAgICAgPGZlTWVyZ2U+CiAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMSI+PC9mZU1lcmdlTm9kZT4KICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyI+PC9mZU1lcmdlTm9kZT4KICAgICAgICAgICAgPC9mZU1lcmdlPgogICAgICAgIDwvZmlsdGVyPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlRlbGVwb3J0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iVGVsZXBvcnQtLS1Mb2dpbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY1Ni4wMDAwMDAsIC00My4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0idGVsZXBvcnQtbWVkYWxsaW9uLSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjY0LjAwMDAwMCwgNDcuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iT3ZhbCI+CiAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIxIiBmaWx0ZXI9InVybCgjZmlsdGVyLTQpIiB4bGluazpocmVmPSIjcGF0aC0zIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZT0idXJsKCNsaW5lYXJHcmFkaWVudC0yKSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InNxdWFyZSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgZmlsbC1ydWxlPSJldmVub2RkIiBjeD0iNTcuNSIgY3k9IjU3LjUiIHI9IjU2LjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPGcgaWQ9ImdyYXZpdHkvbG9nby90ZWxlcG9ydCIgZmlsdGVyPSJ1cmwoI2ZpbHRlci01KSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBvdmVybGF5OyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjEuMDAwMDAwLCAxOS4wMDAwMDApIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTYpIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iQ29tYmluZWQtU2hhcGUiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNzEuMzUzNDcxMiw0OC43MzExNzMxIEM3MS44NzI1MDQzLDQ5LjEwMjE5NjEgNzIuMDU4NjQzOSw0OS44MDY5Nzc0IDcxLjc5OTY2NjksNTAuNDAwNTA1NyBDNzAuMzE2NDgzNSw1NC45NjQwMzI0IDY3Ljc1OTYyNDIsNTkuMzA1MDUzNSA2NC42MDg3MzYzLDYyLjkwMzQ4ODMgQzY0LjE2NDY5ODUsNjMuNDIzMDI4NyA2My41MzQ1MjA2LDYzLjYwNzczMDEgNjIuOTQxMDMxNiw2My4zNDg0OTk5IEw1My43ODYxOTE1LDYwLjE1NzgxMTYgQzUxLjUyNDk5NzcsNjIuMDEzNDY1OCA0OC45Njc1OTg1LDYzLjQ5NzAxNyA0Ni4yMjUxMzkyLDY0LjU3MjgyMTMgTDQ0LjQwOTA2MjMsNzQuMDcwODk3NCBDNDQuMjk3OTE3OSw3NC42NjQ0MjU3IDQzLjc3ODg4NDUsNzUuMjIxMjMwMSA0My4xNDgxNjc0LDc1LjI5NTIxODcgQzQwLjc3NjkwODYsNzUuNzQwNzY5OCAzOC40MDQwMzA3LDc2IDM1Ljk1ODMxNTksNzYgQzMzLjUxMTUyMiw3NiAzMS4xMzk3MjMzLDc1Ljc0MDIyOTYgMjguNzY3OTI0Nyw3NS4yOTUyMTg3IEMyOC4xMzcyMDc1LDc1LjIyMTIzMDEgMjcuNjE4NzEzOCw3NC42NjQ0MjU3IDI3LjUwNzU2OTUsNzQuMDcwODk3NCBMMjUuNjkxNDkyNiw2NC41NzI4MjEzIEMyMi45NDkwMzMxLDYzLjQ5NzAxNyAyMC4zMTcxNzgzLDYyLjAxMzQ2NTggMTguMTMwNDQwNCw2MC4xNTc4MTE2IEw4Ljk3NTYwMDEyLDYzLjM0ODQ5OTkgQzguMzgyNjUwNDcsNjMuNjA4MjY5NiA3Ljc1MjQ3Mjg2LDYzLjQyMzAyODcgNy4zMDczNTU5OSw2Mi45MDM0ODgzIEM0LjE1NzAwNzQ4LDU5LjMwNTA1MzUgMS41OTk2MDg2OCw1NC45NjQwMzI0IDAuMTE2OTY0ODAyLDUwLjQwMDUwNTcgQy0wLjE0MjU1MTgyOSw0OS44MDY5Nzc0IDAuMDQzMDQ4NDIzMSw0OS4xMDIxOTYxIDAuNTYxNTQyMTUzLDQ4LjczMTE3MzEgTDcuODI1MzEwMTgsNDIuNDI0ODY1MyBDNy41NjU3OTM1NSw0MS4wMTQyMjI3IDcuNDkxODc3MTcsMzkuNDkzNDA3MiA3LjQ5MTg3NzE3LDM4LjAwOTMxNTggQzcuNDkxODc3MTcsMzYuNTI1NzY0NiA3LjU2NjMzMzA3LDM1LjAwMzg2OSA3LjgyNTMxMDE4LDMzLjU5NDMwNjUgTDAuNTYxMDAyNjE0LDI3LjI4NjkxODcgQzAuMDQyNTA4ODg3MywyNi45MTU4OTU5IC0wLjE0MzA5MTM2NSwyNi4yMTE2NTQ2IDAuMTE2NDI1MjY3LDI1LjYxNzU4NjEgQzEuNTk5MDY5MTQsMjEuMDU0NTk5NiA0LjE1NjQ2Nzk2LDE2LjcxMzU3ODYgNy4zMDY4MTY0MywxMy4xMTUxNDM0IEM3Ljc1MTkzMzMzLDEyLjU5NTYwMzQgOC4zODIxMTA5NSwxMi40MTAzNjIgOC45NzUwNjA1NiwxMi42NzAxMzIgTDE4LjEyOTkwMDksMTUuODYwMjgwMSBDMjAuMzE2NjM4OCwxNC4wMDUxNjYxIDIyLjk0ODQ5MzYsMTIuNTIxNjE0OSAyNS42OTA5NTMxLDExLjQ0NTI3MDcgTDI3LjUwNzAzLDEuOTQ3NzM0NzUgQzI3LjYxODE3NDMsMS4zNTQyMDYyNiAyOC4xMzcyMDc1LDAuNzk3NDAyMDEzIDI4Ljc2NzM4NTEsMC43MjM0MTM0NzUgQzMzLjUxMTUyMiwtMC4yNDExMzc4MjUgMzguNDAzNDkxMiwtMC4yNDExMzc4MjUgNDMuMTQ3NjI3OCwwLjcyMzQxMzQ3NSBDNDMuNzc4MzQ1MiwwLjc5NzQwMjAxMyA0NC4yOTczNzgzLDEuMzU0MjA2MjYgNDQuNDA4NTIzMSwxLjk0NzczNDc1IEw0Ni4yMjQwNjAxLDExLjQ0NDczMDcgQzQ4Ljk2NjUxOTQsMTIuNTIxMDc0OCA1MS41MjQ0NTc4LDE0LjAwNDYyNiA1My43ODUxMTI0LDE1Ljg1OTc0MDEgTDYyLjkzOTk1MjUsMTIuNjY5NTkyIEM2My41MzM0NDE1LDEyLjQwOTI4MTkgNjQuMTYzNjE5NCwxMi41OTUwNjM0IDY0LjYwNzY1NzIsMTMuMTE0NjAzMyBDNjcuNzU4NTQ1MSwxNi43MTMwMzg2IDcwLjMxNTQwNDQsMjEuMDU0MDU5NSA3MS43OTg1ODc4LDI1LjYxNzA0NiBDNzIuMDU4NjQzOSwyNi4yMTExMTQ2IDcxLjg3MjUwNDMsMjYuOTE1MzU1OCA3MS4zNTM0NzEyLDI3LjI4NjM3ODYgTDY0LjA4OTE2MzQsMzMuNTkzNzY2NCBDNjQuMzQ4Njc5OSwzNS4wMDM4NjkgNjQuNDIyNTk2NywzNi41MjUyMjQ4IDY0LjQyMjU5NjcsMzguMDA4Nzc2IEM2NC40MjI1OTY3LDM5LjQ5Mjg2NzMgNjQuMzQ4Njc5OSw0MS4wMTQyMjI3IDY0LjA4OTE2MzQsNDIuNDI0MzI1NSBMNzEuMzUzNDcxMiw0OC43MzExNzMxIFogTTM2LDYyLjUwOTc0MiBDNDkuNTQxNjI4LDYyLjUwOTc0MiA2MC41MTkxMzU0LDUxLjUzNjI3MzQgNjAuNTE5MTM1NCwzOCBDNjAuNTE5MTM1NCwyNC40NjM3MjY2IDQ5LjU0MTYyOCwxMy40OTAyNTggMzYsMTMuNDkwMjU4IEMyMi40NTgzNzIsMTMuNDkwMjU4IDExLjQ4MDg2NDYsMjQuNDYzNzI2NiAxMS40ODA4NjQ2LDM4IEMxMS40ODA4NjQ2LDUxLjUzNjI3MzQgMjIuNDU4MzcyLDYyLjUwOTc0MiAzNiw2Mi41MDk3NDIgWiBNMzYsNTkuNDE3NDEwMyBDMjQuMTY3NDI2NSw1OS40MTc0MTAzIDE0LjU3NTA3OTUsNDkuODI4NTkyNCAxNC41NzUwNzk1LDM4IEMxNC41NzUwNzk1LDI2LjE3MTQwNzYgMjQuMTY3NDI2NSwxNi41ODI1ODk3IDM2LDE2LjU4MjU4OTcgQzQ3LjgzMjU3MzUsMTYuNTgyNTg5NyA1Ny40MjQ5MjA1LDI2LjE3MTQwNzYgNTcuNDI0OTIwNSwzOCBDNTcuNDI0OTIwNSw0OS44Mjg1OTI0IDQ3LjgzMjU3MzUsNTkuNDE3NDEwMyAzNiw1OS40MTc0MTAzIFogTTI0LjAwNTk1MDksMjggTDI0LjAwNTk1MDksMzQuMDAyMTUxNSBMMzMuMDAyOTc1NSwzNC4wMDIxNTE1IEwzMy4wMDI5NzU1LDQ5LjAwODE2MzUgTDQwLDQ5LjAwODE2MzUgTDQwLDM0LjAwMjE1MTUgTDQ5LjAwMzkwNjIsMzQuMDAyMTUxNSBMNDkuMDAzOTA2MiwyOCBMMjQuMDA1OTUwOSwyOCBaIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPGcgaWQ9ImdyYXZpdHkvbG9nby90ZWxlcG9ydCIgZmlsdGVyPSJ1cmwoI2ZpbHRlci03KSIgb3BhY2l0eT0iMC40NDA3Nzg0NiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBvdmVybGF5OyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjEuMDAwMDAwLCAxOS4wMDAwMDApIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTYpIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iQ29tYmluZWQtU2hhcGUiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNzEuMzUzNDcxMiw0OC43MzExNzMxIEM3MS44NzI1MDQzLDQ5LjEwMjE5NjEgNzIuMDU4NjQzOSw0OS44MDY5Nzc0IDcxLjc5OTY2NjksNTAuNDAwNTA1NyBDNzAuMzE2NDgzNSw1NC45NjQwMzI0IDY3Ljc1OTYyNDIsNTkuMzA1MDUzNSA2NC42MDg3MzYzLDYyLjkwMzQ4ODMgQzY0LjE2NDY5ODUsNjMuNDIzMDI4NyA2My41MzQ1MjA2LDYzLjYwNzczMDEgNjIuOTQxMDMxNiw2My4zNDg0OTk5IEw1My43ODYxOTE1LDYwLjE1NzgxMTYgQzUxLjUyNDk5NzcsNjIuMDEzNDY1OCA0OC45Njc1OTg1LDYzLjQ5NzAxNyA0Ni4yMjUxMzkyLDY0LjU3MjgyMTMgTDQ0LjQwOTA2MjMsNzQuMDcwODk3NCBDNDQuMjk3OTE3OSw3NC42NjQ0MjU3IDQzLjc3ODg4NDUsNzUuMjIxMjMwMSA0My4xNDgxNjc0LDc1LjI5NTIxODcgQzQwLjc3NjkwODYsNzUuNzQwNzY5OCAzOC40MDQwMzA3LDc2IDM1Ljk1ODMxNTksNzYgQzMzLjUxMTUyMiw3NiAzMS4xMzk3MjMzLDc1Ljc0MDIyOTYgMjguNzY3OTI0Nyw3NS4yOTUyMTg3IEMyOC4xMzcyMDc1LDc1LjIyMTIzMDEgMjcuNjE4NzEzOCw3NC42NjQ0MjU3IDI3LjUwNzU2OTUsNzQuMDcwODk3NCBMMjUuNjkxNDkyNiw2NC41NzI4MjEzIEMyMi45NDkwMzMxLDYzLjQ5NzAxNyAyMC4zMTcxNzgzLDYyLjAxMzQ2NTggMTguMTMwNDQwNCw2MC4xNTc4MTE2IEw4Ljk3NTYwMDEyLDYzLjM0ODQ5OTkgQzguMzgyNjUwNDcsNjMuNjA4MjY5NiA3Ljc1MjQ3Mjg2LDYzLjQyMzAyODcgNy4zMDczNTU5OSw2Mi45MDM0ODgzIEM0LjE1NzAwNzQ4LDU5LjMwNTA1MzUgMS41OTk2MDg2OCw1NC45NjQwMzI0IDAuMTE2OTY0ODAyLDUwLjQwMDUwNTcgQy0wLjE0MjU1MTgyOSw0OS44MDY5Nzc0IDAuMDQzMDQ4NDIzMSw0OS4xMDIxOTYxIDAuNTYxNTQyMTUzLDQ4LjczMTE3MzEgTDcuODI1MzEwMTgsNDIuNDI0ODY1MyBDNy41NjU3OTM1NSw0MS4wMTQyMjI3IDcuNDkxODc3MTcsMzkuNDkzNDA3MiA3LjQ5MTg3NzE3LDM4LjAwOTMxNTggQzcuNDkxODc3MTcsMzYuNTI1NzY0NiA3LjU2NjMzMzA3LDM1LjAwMzg2OSA3LjgyNTMxMDE4LDMzLjU5NDMwNjUgTDAuNTYxMDAyNjE0LDI3LjI4NjkxODcgQzAuMDQyNTA4ODg3MywyNi45MTU4OTU5IC0wLjE0MzA5MTM2NSwyNi4yMTE2NTQ2IDAuMTE2NDI1MjY3LDI1LjYxNzU4NjEgQzEuNTk5MDY5MTQsMjEuMDU0NTk5NiA0LjE1NjQ2Nzk2LDE2LjcxMzU3ODYgNy4zMDY4MTY0MywxMy4xMTUxNDM0IEM3Ljc1MTkzMzMzLDEyLjU5NTYwMzQgOC4zODIxMTA5NSwxMi40MTAzNjIgOC45NzUwNjA1NiwxMi42NzAxMzIgTDE4LjEyOTkwMDksMTUuODYwMjgwMSBDMjAuMzE2NjM4OCwxNC4wMDUxNjYxIDIyLjk0ODQ5MzYsMTIuNTIxNjE0OSAyNS42OTA5NTMxLDExLjQ0NTI3MDcgTDI3LjUwNzAzLDEuOTQ3NzM0NzUgQzI3LjYxODE3NDMsMS4zNTQyMDYyNiAyOC4xMzcyMDc1LDAuNzk3NDAyMDEzIDI4Ljc2NzM4NTEsMC43MjM0MTM0NzUgQzMzLjUxMTUyMiwtMC4yNDExMzc4MjUgMzguNDAzNDkxMiwtMC4yNDExMzc4MjUgNDMuMTQ3NjI3OCwwLjcyMzQxMzQ3NSBDNDMuNzc4MzQ1MiwwLjc5NzQwMjAxMyA0NC4yOTczNzgzLDEuMzU0MjA2MjYgNDQuNDA4NTIzMSwxLjk0NzczNDc1IEw0Ni4yMjQwNjAxLDExLjQ0NDczMDcgQzQ4Ljk2NjUxOTQsMTIuNTIxMDc0OCA1MS41MjQ0NTc4LDE0LjAwNDYyNiA1My43ODUxMTI0LDE1Ljg1OTc0MDEgTDYyLjkzOTk1MjUsMTIuNjY5NTkyIEM2My41MzM0NDE1LDEyLjQwOTI4MTkgNjQuMTYzNjE5NCwxMi41OTUwNjM0IDY0LjYwNzY1NzIsMTMuMTE0NjAzMyBDNjcuNzU4NTQ1MSwxNi43MTMwMzg2IDcwLjMxNTQwNDQsMjEuMDU0MDU5NSA3MS43OTg1ODc4LDI1LjYxNzA0NiBDNzIuMDU4NjQzOSwyNi4yMTExMTQ2IDcxLjg3MjUwNDMsMjYuOTE1MzU1OCA3MS4zNTM0NzEyLDI3LjI4NjM3ODYgTDY0LjA4OTE2MzQsMzMuNTkzNzY2NCBDNjQuMzQ4Njc5OSwzNS4wMDM4NjkgNjQuNDIyNTk2NywzNi41MjUyMjQ4IDY0LjQyMjU5NjcsMzguMDA4Nzc2IEM2NC40MjI1OTY3LDM5LjQ5Mjg2NzMgNjQuMzQ4Njc5OSw0MS4wMTQyMjI3IDY0LjA4OTE2MzQsNDIuNDI0MzI1NSBMNzEuMzUzNDcxMiw0OC43MzExNzMxIFogTTM2LDYyLjUwOTc0MiBDNDkuNTQxNjI4LDYyLjUwOTc0MiA2MC41MTkxMzU0LDUxLjUzNjI3MzQgNjAuNTE5MTM1NCwzOCBDNjAuNTE5MTM1NCwyNC40NjM3MjY2IDQ5LjU0MTYyOCwxMy40OTAyNTggMzYsMTMuNDkwMjU4IEMyMi40NTgzNzIsMTMuNDkwMjU4IDExLjQ4MDg2NDYsMjQuNDYzNzI2NiAxMS40ODA4NjQ2LDM4IEMxMS40ODA4NjQ2LDUxLjUzNjI3MzQgMjIuNDU4MzcyLDYyLjUwOTc0MiAzNiw2Mi41MDk3NDIgWiBNMzYsNTkuNDE3NDEwMyBDMjQuMTY3NDI2NSw1OS40MTc0MTAzIDE0LjU3NTA3OTUsNDkuODI4NTkyNCAxNC41NzUwNzk1LDM4IEMxNC41NzUwNzk1LDI2LjE3MTQwNzYgMjQuMTY3NDI2NSwxNi41ODI1ODk3IDM2LDE2LjU4MjU4OTcgQzQ3LjgzMjU3MzUsMTYuNTgyNTg5NyA1Ny40MjQ5MjA1LDI2LjE3MTQwNzYgNTcuNDI0OTIwNSwzOCBDNTcuNDI0OTIwNSw0OS44Mjg1OTI0IDQ3LjgzMjU3MzUsNTkuNDE3NDEwMyAzNiw1OS40MTc0MTAzIFogTTI0LjAwNTk1MDksMjggTDI0LjAwNTk1MDksMzQuMDAyMTUxNSBMMzMuMDAyOTc1NSwzNC4wMDIxNTE1IEwzMy4wMDI5NzU1LDQ5LjAwODE2MzUgTDQwLDQ5LjAwODE2MzUgTDQwLDM0LjAwMjE1MTUgTDQ5LjAwMzkwNjIsMzQuMDAyMTUxNSBMNDkuMDAzOTA2MiwyOCBMMjQuMDA1OTUwOSwyOCBaIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="}}]);