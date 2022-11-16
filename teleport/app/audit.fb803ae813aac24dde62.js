"use strict";(self.webpackChunk_gravitational_teleport=self.webpackChunk_gravitational_teleport||[]).push([[426],{4221:(e,t,E)=>{E.d(t,{Z:()=>_});var S=E(2784),n=E(8069),s=E.n(n);E(8170),E(8074),E(6110),E(997);const I=E(917).ZP.div(["overflow:hidden;border-radius:4px;flex:1;display:flex;position:relative;border:none;background:",";.ace-monokai{background:",";}.ace-monokai .ace_gutter,.ace-monokai .ace_gutter-cell{color:rgba(255,255,255,0.56);background:",";}> .ace_editor{position:absolute;top:8px;right:0px;bottom:0px;left:0px;}"],(e=>e.theme.colors.bgTerminal),(e=>e.theme.colors.bgTerminal),(e=>e.theme.colors.bgTerminal)),{UndoManager:r}=s().require("ace/undomanager");class o extends S.Component{constructor(){var e,t;super(...arguments),t=()=>{const e=this.editor.session.getUndoManager().isClean();this.props.onDirty&&this.props.onDirty(!e);const t=this.editor.session.getValue();this.props.onChange&&this.props.onChange(t)},(e="onChange")in this?Object.defineProperty(this,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):this[e]=t}getData(){return this.sessions.map((e=>e.getValue()))}componentDidUpdate(e){e.activeIndex!==this.props.activeIndex&&this.setActiveSession(this.props.activeIndex),this.editor.resize()}createSession(e){let{content:t,type:E,tabSize:S=2}=e;const n="json"===E?"ace/mode/json":"ace/mode/yaml";let I=new(s().EditSession)(t),o=new r;return o.markClean(),I.setUndoManager(o),I.setUseWrapMode(!1),I.setOptions({tabSize:S,useSoftTabs:!0,useWorker:!1}),I.setMode(n),I}setActiveSession(e){let t=this.sessions[e];t||(t=this.createSession({content:""})),this.editor.setSession(t),this.editor.focus()}initSessions(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.isDirty=!1,this.sessions=e.map((e=>this.createSession(e))),this.setActiveSession(0)}componentDidMount(){const{data:e,readOnly:t,theme:E="ace/theme/monokai"}=this.props;this.editor=s().edit(this.ace_viewer),this.editor.setFadeFoldWidgets(!0),this.editor.setWrapBehavioursEnabled(!0),this.editor.setHighlightActiveLine(!1),this.editor.setShowInvisibles(!1),this.editor.renderer.setShowGutter(!1),this.editor.renderer.setShowPrintMargin(!1),this.editor.renderer.setShowGutter(!0),this.editor.on("input",this.onChange),this.editor.setReadOnly(t),this.editor.setTheme(E),this.initSessions(e),this.editor.focus()}componentWillUnmount(){this.editor.destroy(),this.editor=null,this.session=null}render(){return S.createElement(I,null,S.createElement("div",{ref:e=>this.ace_viewer=e}))}}const _=o},8287:(e,t,E)=>{E.r(t),E.d(t,{default:()=>b});var S=E(2784),n=E(9124),s=E(7849),I=E(4025),r=E(7067),o=E(2398),_=E(6828),i=E(3652),a=E(4217),T=E(3980),c=E.n(T),R=E(4221),A=E(9161);function l(e){const{event:t,onClose:E}=e,n=JSON.stringify(t.raw,null,2),I=t.codeDesc||"Event Details";return S.createElement(A.ZP,{dialogCss:D,disableEscapeKeyDown:!1,onClose:E,open:!0},S.createElement(A.fK,null,S.createElement(A.$N,{typography:"body1",caps:!0,bold:!0},I)),S.createElement(A.cZ,null,S.createElement(R.Z,{readOnly:!0,data:[{content:n,type:"json"}]})),S.createElement(A.cN,null,S.createElement(s.PL,{onClick:E},"Close")))}l.propTypes={event:c().object.isRequired,onClose:c().func.isRequired};const D=()=>"\n  min-height: 400px;\n  max-width: 600px;\n  width: 100%;\n",O=l;var C=E(917),d=E(8862),h=E(4133),L=E(7278);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var E=arguments[t];for(var S in E)Object.prototype.hasOwnProperty.call(E,S)&&(e[S]=E[S])}return e},u.apply(this,arguments)}const P={[h.I.AUTH_ATTEMPT_FAILURE]:d.kIV,[h.I.EXEC_FAILURE]:d.zlj,[h.I.EXEC]:d.zlj,[h.I.TRUSTED_CLUSTER_TOKEN_CREATED]:d.kIV,[h.I.TRUSTED_CLUSTER_CREATED]:d.kIV,[h.I.TRUSTED_CLUSTER_DELETED]:d.kIV,[h.I.GITHUB_CONNECTOR_CREATED]:d.kIV,[h.I.GITHUB_CONNECTOR_DELETED]:d.kIV,[h.I.OIDC_CONNECTOR_CREATED]:d.kIV,[h.I.OIDC_CONNECTOR_DELETED]:d.kIV,[h.I.SAML_CONNECTOR_CREATED]:d.kIV,[h.I.SAML_CONNECTOR_CREATED]:d.kIV,[h.I.SAML_CONNECTOR_DELETED]:d.kIV,[h.I.ROLE_CREATED]:d.kIV,[h.I.ROLE_DELETED]:d.kIV,[h.I.SCP_DOWNLOAD_FAILURE]:d.UWx,[h.I.SCP_DOWNLOAD]:d.UWx,[h.I.SCP_UPLOAD_FAILURE]:d.gqx,[h.I.SCP_UPLOAD]:d.gqx,[h.I.SFTP_OPEN_FAILURE]:d.GSs,[h.I.SFTP_OPEN]:d.GSs,[h.I.SFTP_CLOSE_FAILURE]:d.GSs,[h.I.SFTP_CLOSE]:d.GSs,[h.I.SFTP_READ_FAILURE]:d.GSs,[h.I.SFTP_READ]:d.GSs,[h.I.SFTP_WRITE_FAILURE]:d.GSs,[h.I.SFTP_WRITE]:d.GSs,[h.I.SFTP_LSTAT_FAILURE]:d.GSs,[h.I.SFTP_LSTAT]:d.GSs,[h.I.SFTP_FSTAT_FAILURE]:d.GSs,[h.I.SFTP_FSTAT]:d.GSs,[h.I.SFTP_SETSTAT_FAILURE]:d.GSs,[h.I.SFTP_SETSTAT]:d.GSs,[h.I.SFTP_FSETSTAT_FAILURE]:d.GSs,[h.I.SFTP_FSETSTAT]:d.GSs,[h.I.SFTP_OPENDIR_FAILURE]:d.GSs,[h.I.SFTP_OPENDIR]:d.GSs,[h.I.SFTP_READDIR_FAILURE]:d.GSs,[h.I.SFTP_READDIR]:d.GSs,[h.I.SFTP_REMOVE_FAILURE]:d.GSs,[h.I.SFTP_REMOVE]:d.GSs,[h.I.SFTP_MKDIR_FAILURE]:d.GSs,[h.I.SFTP_MKDIR]:d.GSs,[h.I.SFTP_RMDIR_FAILURE]:d.GSs,[h.I.SFTP_RMDIR]:d.GSs,[h.I.SFTP_REALPATH_FAILURE]:d.GSs,[h.I.SFTP_REALPATH]:d.GSs,[h.I.SFTP_STAT_FAILURE]:d.GSs,[h.I.SFTP_STAT]:d.GSs,[h.I.SFTP_RENAME_FAILURE]:d.GSs,[h.I.SFTP_RENAME]:d.GSs,[h.I.SFTP_READLINK_FAILURE]:d.GSs,[h.I.SFTP_READLINK]:d.GSs,[h.I.SFTP_SYMLINK_FAILURE]:d.GSs,[h.I.SFTP_SYMLINK]:d.GSs,[h.I.APP_SESSION_CHUNK]:d.kIV,[h.I.APP_SESSION_START]:d.kIV,[h.I.APP_SESSION_END]:d.kIV,[h.I.APP_CREATED]:d.EKh,[h.I.APP_UPDATED]:d.EKh,[h.I.APP_DELETED]:d.EKh,[h.I.SESSION_END]:d.zlj,[h.I.SESSION_JOIN]:d.zlj,[h.I.SESSION_LEAVE]:d.zlj,[h.I.SESSION_START]:d.zlj,[h.I.SESSION_UPLOAD]:d.zlj,[h.I.SESSION_REJECT]:d.zlj,[h.I.TERMINAL_RESIZE]:d.zlj,[h.I.SESSION_DATA]:d.zlj,[h.I.SESSION_NETWORK]:d.zlj,[h.I.SESSION_DISK]:d.zlj,[h.I.SESSION_COMMAND]:d.zlj,[h.I.SESSION_PROCESS_EXIT]:d.zlj,[h.I.SESSION_CONNECT]:d.zlj,[h.I.USER_CREATED]:d.kIV,[h.I.USER_UPDATED]:d.kIV,[h.I.USER_DELETED]:d.kIV,[h.I.RESET_PASSWORD_TOKEN_CREATED]:d.kIV,[h.I.USER_PASSWORD_CHANGED]:d.kIV,[h.I.ACCESS_REQUEST_CREATED]:d.kIV,[h.I.ACCESS_REQUEST_UPDATED]:d.kIV,[h.I.ACCESS_REQUEST_REVIEWED]:d.kIV,[h.I.ACCESS_REQUEST_DELETED]:d.kIV,[h.I.ACCESS_REQUEST_RESOURCE_SEARCH]:d.kIV,[h.I.USER_LOCAL_LOGIN]:d.kIV,[h.I.USER_LOCAL_LOGINFAILURE]:d.kIV,[h.I.USER_SSO_LOGIN]:d.kIV,[h.I.USER_SSO_LOGINFAILURE]:d.kIV,[h.I.USER_SSO_TEST_FLOW_LOGIN]:d.kIV,[h.I.USER_SSO_TEST_FLOW_LOGINFAILURE]:d.kIV,[h.I.KUBE_REQUEST]:d.YJo,[h.I.KUBE_CREATED]:d.YJo,[h.I.KUBE_UPDATED]:d.YJo,[h.I.KUBE_DELETED]:d.YJo,[h.I.DATABASE_SESSION_STARTED]:d.voY,[h.I.DATABASE_SESSION_STARTED_FAILURE]:d.voY,[h.I.DATABASE_SESSION_ENDED]:d.voY,[h.I.DATABASE_SESSION_QUERY]:d.voY,[h.I.DATABASE_SESSION_QUERY_FAILURE]:d.voY,[h.I.DATABASE_SESSION_MALFORMED_PACKET]:d.voY,[h.I.DATABASE_CREATED]:d.voY,[h.I.DATABASE_UPDATED]:d.voY,[h.I.DATABASE_DELETED]:d.voY,[h.I.POSTGRES_PARSE]:d.voY,[h.I.POSTGRES_BIND]:d.voY,[h.I.POSTGRES_EXECUTE]:d.voY,[h.I.POSTGRES_CLOSE]:d.voY,[h.I.POSTGRES_FUNCTION_CALL]:d.voY,[h.I.MYSQL_STATEMENT_PREPARE]:d.voY,[h.I.MYSQL_STATEMENT_EXECUTE]:d.voY,[h.I.MYSQL_STATEMENT_SEND_LONG_DATA]:d.voY,[h.I.MYSQL_STATEMENT_CLOSE]:d.voY,[h.I.MYSQL_STATEMENT_RESET]:d.voY,[h.I.MYSQL_STATEMENT_FETCH]:d.voY,[h.I.MYSQL_STATEMENT_BULK_EXECUTE]:d.voY,[h.I.MYSQL_INIT_DB]:d.voY,[h.I.MYSQL_CREATE_DB]:d.voY,[h.I.MYSQL_DROP_DB]:d.voY,[h.I.MYSQL_SHUT_DOWN]:d.voY,[h.I.MYSQL_PROCESS_KILL]:d.voY,[h.I.MYSQL_DEBUG]:d.voY,[h.I.MYSQL_REFRESH]:d.voY,[h.I.SQLSERVER_RPC_REQUEST]:d.voY,[h.I.CASSANDRA_BATCH_EVENT]:d.voY,[h.I.CASSANDRA_EXECUTE_EVENT]:d.voY,[h.I.CASSANDRA_PREPARE_EVENT]:d.voY,[h.I.CASSANDRA_REGISTER_EVENT]:d.voY,[h.I.ELASTICSEARCH_REQUEST]:d.voY,[h.I.DESKTOP_SESSION_STARTED]:d.Hi7,[h.I.DESKTOP_SESSION_STARTED_FAILED]:d.Hi7,[h.I.DESKTOP_SESSION_ENDED]:d.Hi7,[h.I.DESKTOP_CLIPBOARD_SEND]:d.TUt,[h.I.DESKTOP_CLIPBOARD_RECEIVE]:d.TUt,[h.I.DESKTOP_SHARED_DIRECTORY_START]:d.ot9,[h.I.DESKTOP_SHARED_DIRECTORY_START_FAILURE]:d.ot9,[h.I.DESKTOP_SHARED_DIRECTORY_READ]:d.ot9,[h.I.DESKTOP_SHARED_DIRECTORY_READ_FAILURE]:d.ot9,[h.I.DESKTOP_SHARED_DIRECTORY_WRITE]:d.ot9,[h.I.DESKTOP_SHARED_DIRECTORY_WRITE_FAILURE]:d.ot9,[h.I.MFA_DEVICE_ADD]:d.kIV,[h.I.MFA_DEVICE_DELETE]:d.kIV,[h.I.BILLING_CARD_CREATE]:d.Qyo,[h.I.BILLING_CARD_DELETE]:d.Qyo,[h.I.BILLING_CARD_UPDATE]:d.Qyo,[h.I.BILLING_INFORMATION_UPDATE]:d.Qyo,[h.I.CLIENT_DISCONNECT]:d.kIV,[h.I.PORTFORWARD]:d.kIV,[h.I.PORTFORWARD_FAILURE]:d.kIV,[h.I.SUBSYSTEM]:d.kIV,[h.I.SUBSYSTEM_FAILURE]:d.kIV,[h.I.LOCK_CREATED]:d.HEZ,[h.I.LOCK_DELETED]:d.Slr,[h.I.RECOVERY_TOKEN_CREATED]:d.kIV,[h.I.RECOVERY_CODE_GENERATED]:d.RGo,[h.I.RECOVERY_CODE_USED]:d.s2m,[h.I.RECOVERY_CODE_USED_FAILURE]:d.s2m,[h.I.PRIVILEGE_TOKEN_CREATED]:d.kIV,[h.I.X11_FORWARD]:d.kIV,[h.I.X11_FORWARD_FAILURE]:d.kIV,[h.I.CERTIFICATE_CREATED]:d.RGo,[h.I.UPGRADE_WINDOW_UPDATED]:d.kIV,[h.I.SESSION_RECORDING_ACCESS]:d.kIV,[h.I.SSMRUN_SUCCESS]:d.kIV,[h.I.SSMRUN_FAIL]:d.kIV,[h.I.UNKNOWN]:d.HNF},N=(0,C.ZP)(d.zlj)((e=>`\n  background: ${e.theme.colors.dark};\n  border: 2px solid ${e.theme.colors.accent};\n  color: ${e.theme.colors.text.primary};\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  padding: 0;\n  border-radius: 100px;\n  transition: all 0.3s;\n\n  &:hover,\n  &:active,\n  &:focus {\n    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.24);\n    color: ${e.theme.colors.light};\n  }\n\n  &:active {\n    box-shadow: none;\n    opacity: 0.56;\n  }\n`)),p=C.ZP.div(["display:flex;align-items:center;min-width:130px;font-size:12px;font-weight:500;line-height:24px;white-space:nowrap;"]),U=e=>{let{time:t}=e;return S.createElement(i.bL,{style:{minWidth:"120px"}},t)};function m(e){let{message:t}=e;return S.createElement(i.bL,{style:{wordBreak:"break-word"}},t)}const F=function(e){const{clusterId:t,events:E=[],fetchMore:n,fetchStatus:I,pageSize:r=50}=e,[o,_]=(0,S.useState)();return S.createElement(S.Fragment,null,S.createElement(i.ZP,{data:E,columns:[{key:"codeDesc",headerText:"Type",isSortable:!0,render:e=>function(e,t){const E=P[e.code]||d.aVo,n={p:"1",mr:"3",fontSize:"3"};return e.code===h.I.SESSION_END&&e.raw.interactive&&"off"!==e.raw.session_recording?S.createElement(i.bL,{style:{verticalAlign:"inherit"}},S.createElement(p,null,S.createElement("a",{title:"Open Session Player",href:L.Z.getPlayerRoute({clusterId:t,sid:e.raw.sid},{recordingType:"ssh"}),target:"_blank",style:{textDecoration:"none"}},S.createElement(N,n)),e.codeDesc)):S.createElement(i.bL,{style:{verticalAlign:"inherit"}},S.createElement(p,null,S.createElement(d.ZPm,u({},n,{as:E})),e.codeDesc))}(e,t)},{key:"message",headerText:"Description",render:m},{key:"time",headerText:"Created (UTC)",isSortable:!0,render:U},{altKey:"show-details-btn",render:e=>((e,t)=>S.createElement(i.bL,{align:"right"},S.createElement(s.ku,{size:"small",onClick:()=>t(e),width:"87px"},"Details")))(e,_)}],emptyText:"No Events Found",isSearchable:!0,searchableProps:["code","codeDesc","time","user","message","id"],customSearchMatchers:[(0,a.vq)(["time"])],initialSort:{key:"time",dir:"DESC"},pagination:{pageSize:r},fetching:{onFetchMore:n,fetchStatus:I}}),o&&S.createElement(O,{event:o,onClose:()=>_(null)}))};var v=E(4696);function g(e,t){var E=Object.keys(e);if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(e);t&&(S=S.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),E.push.apply(E,S)}return E}function f(e){for(var t=1;t<arguments.length;t++){var E=null!=arguments[t]?arguments[t]:{};t%2?g(Object(E),!0).forEach((function(t){k(e,t,E[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(E)):g(Object(E)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(E,t))}))}return e}function k(e,t,E){return t in e?Object.defineProperty(e,t,{value:E,enumerable:!0,configurable:!0,writable:!0}):e[t]=E,e}function y(e){const{attempt:t,range:E,setRange:o,rangeOptions:_,events:i,clusterId:a,fetchMore:T,fetchStatus:c}=e;return S.createElement(r.Ob,null,S.createElement(r.OX,{alignItems:"center"},S.createElement(r.u4,{mr:"8"},"Audit Log"),S.createElement(I.Z,{ml:"auto",range:E,ranges:_,onChangeRange:o})),"failed"===t.status&&S.createElement(n.b0,null," ",t.statusText," "),"processing"===t.status&&S.createElement(s.xu,{textAlign:"center",m:10},S.createElement(s.z$,null)),"success"===t.status&&S.createElement(F,{events:i,clusterId:a,fetchMore:T,fetchStatus:c}))}const b=function(){const e=(0,o.Z)(),{clusterId:t}=(0,_.Z)(),E=function(e,t,E){const n=(0,S.useMemo)((()=>(0,I.n)()),[]),[s,r]=(0,S.useState)(n[0]),{attempt:o,setAttempt:_,run:i}=(0,v.Z)("processing"),[a,T]=(0,S.useState)({events:[],fetchStartKey:"",fetchStatus:""}),c=E?h.$0[E].type:"";return(0,S.useEffect)((()=>{i((()=>e.auditService.fetchEvents(t,f(f({},s),{},{filterBy:c})).then((e=>T({events:e.events,fetchStartKey:e.startKey,fetchStatus:e.startKey?"":"disabled"})))))}),[t,s]),f(f({},a),{},{fetchMore:function(){T(f(f({},a),{},{fetchStatus:"loading"})),e.auditService.fetchEvents(t,f(f({},s),{},{filterBy:c,startKey:a.fetchStartKey})).then((e=>T({events:[...a.events,...e.events],fetchStartKey:e.startKey,fetchStatus:e.startKey?"":"disabled"}))).catch((e=>{_({status:"failed",statusText:e.message})}))},clusterId:t,attempt:o,range:s,setRange:r,rangeOptions:n})}(e,t);return S.createElement(y,E)}}}]);