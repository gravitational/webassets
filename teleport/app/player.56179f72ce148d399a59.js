(self.webpackChunk_gravitational_teleport=self.webpackChunk_gravitational_teleport||[]).push([[35],{1527:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var i=n(917),s=n(7849),r=(n(7757),n(7559));const o=(0,i.ZP)(s.xu)((()=>`\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n\n  .terminal .xterm-viewport {\n    background-color: ${r.O.bgTerminal} !important;\n  }\n`))},7906:function(e,t,n){var i,s,r;s=[n(2784),n(3980),n(8335)],void 0===(r="function"==typeof(i=function(e,t,n){function i(e){return e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),!1}function s(e){return null==e?[]:Array.isArray(e)?e:[e]}function r(e){return null!=e&&1===e.length?e[0]:e}var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};return n({displayName:"ReactSlider",propTypes:{min:t.number,max:t.number,step:t.number,minDistance:t.number,defaultValue:t.oneOfType([t.number,t.arrayOf(t.number)]),value:t.oneOfType([t.number,t.arrayOf(t.number)]),orientation:t.oneOf(["horizontal","vertical"]),className:t.string,handleClassName:t.string,handleActiveClassName:t.string,withBars:t.bool,barClassName:t.string,pearling:t.bool,disabled:t.bool,snapDragDisabled:t.bool,invert:t.bool,onBeforeChange:t.func,onChange:t.func,onAfterChange:t.func,onSliderClick:t.func},getDefaultProps:function(){return{min:0,max:100,step:1,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",handleClassName:"handle",handleActiveClassName:"active",barClassName:"bar",withBars:!1,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1}},getInitialState:function(){var e=this._or(s(this.props.value),s(this.props.defaultValue));this.tempArray=e.slice(),this.pendingResizeTimeouts=[];for(var t=[],n=0;n<e.length;n++)e[n]=this._trimAlignValue(e[n],this.props),t.push(n);return{index:-1,upperBound:0,sliderLength:0,value:e,zIndices:t}},UNSAFE_componentWillReceiveProps:function(e){var t=this._or(s(e.value),this.state.value);this.tempArray=t.slice();for(var n=0;n<t.length;n++)this.state.value[n]=this._trimAlignValue(t[n],e);this.state.value.length>t.length&&(this.state.value.length=t.length),0===this.state.upperBound&&this._resize()},_or:function(t,n){var i=e.Children.count(this.props.children);switch(i){case 0:return t.length>0?t:n;case t.length:return t;case n.length:return n;default:return t.length===i&&n.length===i||window.console.warn(this.constructor.displayName+": Number of values does not match number of children."),function(e,t,n){for(var i=(t-e)/(n-1),s=[],r=0;r<n;r++)s.push(e+i*r);return s}(this.props.min,this.props.max,i)}},componentDidMount:function(){window.addEventListener("resize",this._handleResize),this._resize()},componentWillUnmount:function(){this._clearPendingResizeTimeouts(),window.removeEventListener("resize",this._handleResize)},getValue:function(){return r(this.state.value)},_resize:function(){var e=this.slider,t=this.handle0,n=e.getBoundingClientRect(),i=this._sizeKey(),s=n[this._posMaxKey()],r=n[this._posMinKey()];this.setState({upperBound:e[i]-t[i],sliderLength:Math.abs(s-r),handleSize:t[i],sliderStart:this.props.invert?s:r})},_handleResize:function(){var e=window.setTimeout(function(){this.pendingResizeTimeouts.shift(),this._resize()}.bind(this),0);this.pendingResizeTimeouts.push(e)},_clearPendingResizeTimeouts:function(){do{var e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},_calcOffset:function(e){var t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},_calcValue:function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},_buildHandleStyle:function(e,t){var n={position:"absolute",willChange:this.state.index>=0?this._posMinKey():"",zIndex:this.state.zIndices.indexOf(t)+1};return n[this._posMinKey()]=e+"px",n},_buildBarStyle:function(e,t){var n={position:"absolute",willChange:this.state.index>=0?this._posMinKey()+","+this._posMaxKey():""};return n[this._posMinKey()]=e,n[this._posMaxKey()]=t,n},_getClosestIndex:function(e){for(var t=Number.MAX_VALUE,n=-1,i=this.state.value,s=i.length,r=0;r<s;r++){var o=this._calcOffset(i[r]),a=Math.abs(e-o);a<t&&(t=a,n=r)}return n},_calcOffsetFromPosition:function(e){var t=e-this.state.sliderStart;return this.props.invert&&(t=this.state.sliderLength-t),t-this.state.handleSize/2},_forceValueFromPosition:function(e,t){var n=this._calcOffsetFromPosition(e),i=this._getClosestIndex(n),s=this._trimAlignValue(this._calcValue(n)),r=this.state.value.slice();r[i]=s;for(var o=0;o<r.length-1;o+=1)if(r[o+1]-r[o]<this.props.minDistance)return;this.setState({value:r},t.bind(this,i))},_getMousePosition:function(e){return[e["page"+this._axisKey()],e["page"+this._orthogonalAxisKey()]]},_getTouchPosition:function(e){var t=e.touches[0];return[t["page"+this._axisKey()],t["page"+this._orthogonalAxisKey()]]},_getKeyDownEventMap:function(){return{keydown:this._onKeyDown,focusout:this._onBlur}},_getMouseEventMap:function(){return{mousemove:this._onMouseMove,mouseup:this._onMouseUp}},_getTouchEventMap:function(){return{touchmove:this._onTouchMove,touchend:this._onTouchEnd}},_createOnKeyDown:function(e){return function(t){this.props.disabled||(this._start(e),this._addHandlers(this._getKeyDownEventMap()),i(t))}.bind(this)},_createOnMouseDown:function(e){return function(t){if(!this.props.disabled){var n=this._getMousePosition(t);this._start(e,n[0]),this._addHandlers(this._getMouseEventMap()),i(t)}}.bind(this)},_createOnTouchStart:function(e){return function(t){if(!(this.props.disabled||t.touches.length>1)){var n=this._getTouchPosition(t);this.startPosition=n,this.isScrolling=void 0,this._start(e,n[0]),this._addHandlers(this._getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)}}.bind(this)},_addHandlers:function(e){for(var t in e)document.addEventListener(t,e[t],!1)},_removeHandlers:function(e){for(var t in e)document.removeEventListener(t,e[t],!1)},_start:function(e,t){var n=document.activeElement,i=this["handle"+e];n&&n!=document.body&&n!=i&&n.blur&&n.blur(),this.hasMoved=!1,this._fireChangeEvent("onBeforeChange");var s=this.state.zIndices;s.splice(s.indexOf(e),1),s.push(e),this.setState((function(n){return{startValue:this.state.value[e],startPosition:void 0!==t?t:n.startPosition,index:e,zIndices:s}}))},_onMouseUp:function(){this._onEnd(this._getMouseEventMap())},_onTouchEnd:function(){this._onEnd(this._getTouchEventMap())},_onBlur:function(){this._onEnd(this._getKeyDownEventMap())},_onEnd:function(e){this._removeHandlers(e),this.setState({index:-1},this._fireChangeEvent.bind(this,"onAfterChange"))},_onMouseMove:function(e){var t=this._getMousePosition(e),n=this._getDiffPosition(t[0]),i=this._getValueFromPosition(n);this._move(i)},_onTouchMove:function(e){if(!(e.touches.length>1)){var t=this._getTouchPosition(e);if(void 0===this.isScrolling){var n=t[0]-this.startPosition[0],s=t[1]-this.startPosition[1];this.isScrolling=Math.abs(s)>Math.abs(n)}if(this.isScrolling)this.setState({index:-1});else{i(e);var r=this._getDiffPosition(t[0]),o=this._getValueFromPosition(r);this._move(o)}}},_onKeyDown:function(e){if(!(e.ctrlKey||e.shiftKey||e.altKey))switch(e.key){case"ArrowLeft":case"ArrowUp":return e.preventDefault(),this._moveDownOneStep();case"ArrowRight":case"ArrowDown":return e.preventDefault(),this._moveUpOneStep();case"Home":return this._move(this.props.min);case"End":return this._move(this.props.max);default:return}},_moveUpOneStep:function(){var e=this.state.value[this.state.index]+this.props.step;this._move(Math.min(e,this.props.max))},_moveDownOneStep:function(){var e=this.state.value[this.state.index]-this.props.step;this._move(Math.max(e,this.props.min))},_getValueFromPosition:function(e){var t=e/(this.state.sliderLength-this.state.handleSize)*(this.props.max-this.props.min);return this._trimAlignValue(this.state.startValue+t)},_getDiffPosition:function(e){var t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},_move:function(e){this.hasMoved=!0;var t=this.props,n=this.state,i=n.index,s=n.value,r=s.length,o=s[i],a=t.minDistance;if(!t.pearling){if(i>0){var l=s[i-1];e<l+a&&(e=l+a)}if(i<r-1){var h=s[i+1];e>h-a&&(e=h-a)}}s[i]=e,t.pearling&&r>1&&(e>o?(this._pushSucceeding(s,a,i),this._trimSucceeding(r,s,a,t.max)):e<o&&(this._pushPreceding(s,a,i),this._trimPreceding(r,s,a,t.min))),e!==o&&this.setState({value:s},this._fireChangeEvent.bind(this,"onChange"))},_pushSucceeding:function(e,t,n){var i,s;for(s=e[i=n]+t;null!=e[i+1]&&s>e[i+1];s=e[++i]+t)e[i+1]=this._alignValue(s)},_trimSucceeding:function(e,t,n,i){for(var s=0;s<e;s++){var r=i-s*n;t[e-1-s]>r&&(t[e-1-s]=r)}},_pushPreceding:function(e,t,n){var i,s;for(s=e[i=n]-t;null!=e[i-1]&&s<e[i-1];s=e[--i]-t)e[i-1]=this._alignValue(s)},_trimPreceding:function(e,t,n,i){for(var s=0;s<e;s++){var r=i+s*n;t[s]<r&&(t[s]=r)}},_axisKey:function(){var e=this.props.orientation;return"horizontal"===e?"X":"vertical"===e?"Y":void 0},_orthogonalAxisKey:function(){var e=this.props.orientation;return"horizontal"===e?"Y":"vertical"===e?"X":void 0},_posMinKey:function(){var e=this.props.orientation;return"horizontal"===e?this.props.invert?"right":"left":"vertical"===e?this.props.invert?"bottom":"top":void 0},_posMaxKey:function(){var e=this.props.orientation;return"horizontal"===e?this.props.invert?"left":"right":"vertical"===e?this.props.invert?"top":"bottom":void 0},_sizeKey:function(){var e=this.props.orientation;return"horizontal"===e?"clientWidth":"vertical"===e?"clientHeight":void 0},_trimAlignValue:function(e,t){return this._alignValue(this._trimValue(e,t),t)},_trimValue:function(e,t){return e<=(t=t||this.props).min&&(e=t.min),e>=t.max&&(e=t.max),e},_alignValue:function(e,t){var n=(e-(t=t||this.props).min)%t.step,i=e-n;return 2*Math.abs(n)>=t.step&&(i+=n>0?t.step:-t.step),parseFloat(i.toFixed(5))},_renderHandle:function(t,n,i){var s=this,r=this.props.handleClassName+" "+this.props.handleClassName+"-"+i+" "+(this.state.index===i?this.props.handleActiveClassName:"");return e.createElement("div",{ref:function(e){s["handle"+i]=e},key:"handle"+i,className:r,style:t,onMouseDown:this._createOnMouseDown(i),onTouchStart:this._createOnTouchStart(i),onFocus:this._createOnKeyDown(i),tabIndex:0,role:"slider","aria-valuenow":this.state.value[i],"aria-valuemin":this.props.min,"aria-valuemax":this.props.max,"aria-label":o(this.props.ariaLabel)?this.props.ariaLabel[i]:this.props.ariaLabel,"aria-valuetext":this.props.ariaValuetext},n)},_renderHandles:function(t){for(var n=t.length,i=this.tempArray,s=0;s<n;s++)i[s]=this._buildHandleStyle(t[s],s);var r=[],o=this._renderHandle;if(e.Children.count(this.props.children)>0)e.Children.forEach(this.props.children,(function(e,t){r[t]=o(i[t],e,t)}));else for(s=0;s<n;s++)r[s]=o(i[s],null,s);return r},_renderBar:function(t,n,i){var s=this;return e.createElement("div",{key:"bar"+t,ref:function(e){s["bar"+t]=e},className:this.props.barClassName+" "+this.props.barClassName+"-"+t,style:this._buildBarStyle(n,this.state.upperBound-i)})},_renderBars:function(e){var t=[],n=e.length-1;t.push(this._renderBar(0,0,e[0]));for(var i=0;i<n;i++)t.push(this._renderBar(i+1,e[i],e[i+1]));return t.push(this._renderBar(n+1,e[n],this.state.upperBound)),t},_onSliderMouseDown:function(e){if(!this.props.disabled){if(this.hasMoved=!1,!this.props.snapDragDisabled){var t=this._getMousePosition(e);this._forceValueFromPosition(t[0],function(e){this._start(e,t[0]),this._fireChangeEvent("onChange"),this._addHandlers(this._getMouseEventMap())}.bind(this))}i(e)}},_onSliderClick:function(e){if(!this.props.disabled&&this.props.onSliderClick&&!this.hasMoved){var t=this._getMousePosition(e),n=this._trimAlignValue(this._calcValue(this._calcOffsetFromPosition(t[0])));this.props.onSliderClick(n)}},_fireChangeEvent:function(e){this.props[e]&&this.props[e](r(this.state.value))},render:function(){for(var t=this,n=this.state,i=this.props,s=this.tempArray,r=n.value,o=r.length,a=0;a<o;a++)s[a]=this._calcOffset(r[a],a);var l=i.withBars?this._renderBars(s):null,h=this._renderHandles(s);return e.createElement("div",{ref:function(e){t.slider=e},style:{position:"relative"},className:i.className+(i.disabled?" disabled":""),onMouseDown:this._onSliderMouseDown,onClick:this._onSliderClick},l,h)}})})?i.apply(t,s):i)||(e.exports=r)},3180:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Ee});var i=n(2784),s=n(917),r=n(7849),o=n(9124),a=n(7885),l=n(4852),h=n(7559),c=n(1392),u=n(7933),d=n(3937),p=n(3757),f=n(7278);const m={menuListCss:()=>"\n  width: 250px;\n"},v=function(e){let{onLogout:t}=e;return i.createElement(r.kC,{alignItems:"center"},i.createElement(d.Oq,{buttonIconProps:{mr:2,ml:2,size:0,style:{fontSize:"16px"}},menuProps:m},i.createElement(d.sN,{as:u.OL,to:f.Z.routes.root},i.createElement(d.ZH,{as:p.SK8,mr:"2"}),"Home"),i.createElement(d.sN,null,i.createElement(r.DF,{my:3,block:!0,onClick:t},"Sign Out"))))};var g=n(4696),_=n(1727),y=n(1452),b=n(2282),E=n(7906);const w=n.n(E)();function x(e){const t=e.isPlaying?p.id6:p.rNN;return i.createElement(k,{style:e.style,id:e.id},i.createElement(T,{onClick:e.toggle},i.createElement(t,null)),i.createElement(P,{onChange:e.onPlaySpeedChange}),i.createElement(S,null,e.time),i.createElement(C,null,i.createElement(w,{min:e.min,max:e.max,value:e.current,onChange:e.move,defaultValue:1,withBars:!0,className:"grv-slider"})))}function P(e){return e.onChange?i.createElement(O,{onChange:t=>{e.onChange(parseFloat(t.target.value))},defaultValue:"1.0"},i.createElement("option",{value:"0.25"},"0.25x"),i.createElement("option",{value:"0.5"},"0.5x"),i.createElement("option",{value:"1.0"},"1.0x"),i.createElement("option",{value:"2.0"},"2.0x"),i.createElement("option",{value:"4.0"},"4.0x"),i.createElement("option",{value:"8.0"},"8.0x"),i.createElement("option",{value:"16.0"},"16.0x")):null}const O=s.ZP.select(["margin-left:8px;border:none;background:",";color:",";"],h.O.dark,h.O.light),C=s.ZP.div(["display:flex;flex:1;flex-direction:column;"]),S=s.ZP.div((e=>`\n  text-align: center;\n  font-family: ${e.theme.fonts.mono};\n  font-size: ${e.theme.fontSizes[1]}px;\n  line-height: 24px;\n  width: 80px;\n  opacity: 0.56;\n`)),T=s.ZP.button(["background:",";border:none;color:",";cursor:pointer;font-size:24px;height:24px;outline:none;opacity:0.87;padding:0;text-align:center;transition:all 0.3s;width:24px;&:hover{opacity:1;.icon{color:",";}}.icon{height:24px;width:24px;}"],h.O.dark,h.O.light,h.O.progressBarColor),k=s.ZP.div(["background-color:",";display:flex;color:",";padding:16px;.grv-slider{display:block;padding:0;height:24px;}.grv-slider .bar{border-radius:200px;height:8px;margin:8px 0;}.grv-slider .handle{background-color:",";border-radius:200px;box-shadow:0 0 4px rgba(0,0,0,0.12),0 4px 4px rgba(0,0,0,0.24);width:16px;height:16px;left:-8px;top:4px;}.grv-slider .bar-0{background-color:",";box-shadow:none;}.grv-slider .bar-1{background-color:",";}"],h.O.dark,h.O.light,h.O.light,h.O.success,h.O.text);var A=n(2436),M=n.n(A);function z(e){const t=function(e){const[t,n]=i.useState((()=>D(e)));return i.useEffect((()=>{const t=M()((function(){const t=D(e);n(t)}),Math.max(Math.min(.025*e.duration,500),20));return e.on("change",t),function(){t.cancel(),e.stop(),e.removeAllListeners()}}),[e]),t}(e.tty);return i.createElement(x,t)}function D(e){return{max:e.duration,min:1,time:e.getCurrentTime(),isLoading:e.isLoading(),isPlaying:e.isPlaying(),current:e.current,move:function(t){e.move(t)},toggle:function(){e.isPlaying()?e.stop():e.play()}}}var I=n(9557),N=n(4666);function R(){return R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},R.apply(this,arguments)}function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){Z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const j=e=>{const{playerClient:t,durationMs:n}=e,s=(0,i.useRef)();let r=1;const o=e=>(0,N.Z)((0,I.QH)(new Date(e)),"mm:ss"),[a,l]=(0,i.useState)({max:n,min:0,current:0,time:o(0),isPlaying:!0}),h=(e,t)=>L(L({},e),{},{current:t,time:o(t)});return(0,i.useEffect)((()=>{if(t){const e=e=>{s.current=setInterval((()=>{l((t=>{const s=t.current+25*e;return s<=n?h(t,s):(i(),h(t,n))}))}),25)};e(r);const i=()=>{o.cancel(),clearInterval(s.current)},o=M()((e=>{l((t=>h(t,e)))}),50);return t.addListener(_.OZ.UPDATE_CURRENT_TIME,(e=>o(e))),t.addListener(_.OZ.TOGGLE_PLAY_PAUSE,(()=>{l((t=>(t.isPlaying?i():e(r),L(L({},t),{},{isPlaying:!t.isPlaying}))))})),t.addListener(_.OZ.PLAY_SPEED,(t=>{r=t,l((t=>(t.isPlaying&&(i(),e(r)),L(L({},t),{},{isPlaying:t.isPlaying}))))})),()=>{t.nuke(),i()}}}),[t]),i.createElement(x,R({},a,{toggle:()=>t.togglePlayPause(),onPlaySpeedChange:e=>t.setPlaySpeed(e),move:()=>{},style:e.style,id:e.id}))},V=e=>{let{sid:t,clusterId:n,durationMs:s}=e;const{playerClient:o,tdpCliOnPngFrame:a,tdpCliOnClientScreenSpec:l,tdpCliOnWsClose:h,tdpCliOnTdpError:c,attempt:u}=F({sid:t,clusterId:n}),d="success"===u.status||""===u.status,p="processing"!==u.status;return i.createElement(H,null,"processing"===u.status&&i.createElement(r.xu,{textAlign:"center",m:10},i.createElement(r.z$,null)),"failed"===u.status&&i.createElement(K,{my:4,mx:10,children:u.statusText}),i.createElement(b.Z,{tdpCli:o,tdpCliInit:!0,tdpCliOnPngFrame:a,tdpCliOnClientScreenSpec:l,tdpCliOnWsClose:h,tdpCliOnTdpError:c,onContextMenu:()=>!0,style:{alignSelf:"center",overflow:"hidden",display:d?"flex":"none"}}),i.createElement(j,{playerClient:o,durationMs:s,style:{display:p?"flex":"none"},id:"progressBarDesktop"}))},F=e=>{let{sid:t,clusterId:n}=e;const[s,r]=(0,i.useState)(null),{attempt:o,setAttempt:a}=(0,g.Z)("processing");return(0,i.useEffect)((()=>{r(new _.pz(f.Z.api.desktopPlaybackWsAddr.replace(":fqdn",(0,y.Lp)()).replace(":clusterId",n).replace(":sid",t).replace(":token",(0,y.hP)())))}),[n,t]),(0,i.useEffect)((()=>{if(s)return s.addListener(_.OZ.SESSION_END,(()=>{a({status:""})})),s.addListener(_.OZ.PLAYBACK_ERROR,(e=>{a({status:"failed",statusText:`There was an error while playing this session: ${e.message}`})})),()=>{s.nuke()}}),[s]),{playerClient:s,tdpCliOnPngFrame:(e,t)=>{e.drawImage(t.data,t.left,t.top)},tdpCliOnClientScreenSpec:(e,t)=>{const n=e.parentElement,i=n.children.namedItem("progressBarDesktop"),s=n.clientWidth,r=n.clientHeight-i.clientHeight,o=t.width/t.height,l=s/r;o>l?e.style.height=s*t.height/t.width+"px":o<l&&(e.style.width=r*t.width/t.height+"px"),e.width=t.width,e.height=t.height,a({status:"success"})},tdpCliOnWsClose:()=>{a((e=>""!==e.status&&"failed"!==e.status?{status:"failed",statusText:"connection to the server failed for an unknown reason"}:e))},tdpCliOnTdpError:e=>{const{err:t}=e;a({status:"failed",statusText:t.message})},attempt:o}},H=s.ZP.div(["display:flex;flex-direction:column;justify-content:center;width:100%;height:100%;"]),K=(0,s.ZP)(r.bZ)(["align-self:center;min-width:450px;margin-bottom:auto;"]);var U=n(8834),$=n(2418),W=n(8005),q=n(9175);const G=U.Buffer,Q=5242880;class Y{constructor(e){let{url:t}=e;this.url=t,this.events=[]}getDuration(){const e=this.events.length;return 0===e?0:this.events[e-1].msNormalized}init(){return this._fetchEvents().then((e=>{this.events=e;const t=this.events.filter(J);if(0!==t.length)return this._fetchContent(t).then((e=>{this._populatePrintEvents(e,t)}))}))}_fetchEvents(){const e=this.url+"/events";return y.ZP.get(e).then((e=>e.events?this._createEvents(e.events):[]))}_fetchContent(e){let t=e[0].offset;const n=e.length-1,i=e[n].offset-t+e[n].bytes,s=Math.ceil(i/Q),r=[];for(let e=0;e<s;e++){const e=`${this.url}/stream?offset=${t}&bytes=5242880`;r.push(y.ZP.fetch(e,{Accept:"text/plain","Content-Type":"text/plain; charset=utf-8"}).then((e=>e.text()))),t+=Q}return Promise.all(r).then((e=>{const t=e.reduce(((e,t)=>e+t),"");return new G(t)}))}_populatePrintEvents(e,t){let n=t[0].bytes;t[0].data=e.slice(0,n).toString("utf8");for(var i=1;i<t.length;i++){let{bytes:s}=t[i];t[i].data=e.slice(n,n+s).toString("utf8"),n+=s}}_createEvents(e){let t,n,i=[];for(let s=0;s<e.length;s++){const{ms:r,event:o,offset:a,time:l,bytes:h}=e[s];if(o!==q.by.RESIZE&&o!==q.by.START||([t,n]=e[s].size.split(":")),o===q.by.END){const e=new Date(i[0].time),t=new Date(l).getTime()-e.getTime();i.push({eventType:o,ms:t,time:new Date(l)});break}o===q.by.PRINT&&i.push({eventType:q.by.PRINT,ms:r,bytes:h,offset:a,data:null,w:Number(t),h:Number(n),time:new Date(l)})}return this._normalizeEventsByTime(i)}_normalizeEventsByTime(e){if(!e||0===e.length)return[];e.forEach((e=>{e.displayTime=function(e){if(e<=0)return"00:00";let t=Math.floor(e/1e3)%31536e3%86400,n=Math.floor(t/3600),i=Math.floor(t%3600/60),s=t%3600%60;return i=i>9?i:"0"+i,s=s>9?s:"0"+s,n=n>0?n+":":"",`${n}${i}:${s}`}(e.ms),e.ms=e.ms>0?Math.floor(e.ms/10):0,e.msNormalized=e.ms}));let t=e[0],n=[];for(let s=1;s<e.length;s++){const r=t.w===e[s].w&&t.h===e[s].h,o=e[s].ms-t.ms;o<2&&r?t.bytes+=e[s].bytes:(e[s].msNormalized=t.msNormalized+((i=o)>=25&&i<50?25:i>=50&&i<100?50:i>=100?100:i),n.push(t),t=e[s])}var i;return-1===n.indexOf(t)&&n.push(t),n}}function J(e){return e.eventType===q.by.PRINT}const X=$.Z.create("TtyPlayer"),ee=(U.Buffer,"PLAYING"),te="ERROR",ne="PAUSED",ie="LOADING";class se extends W.Z{constructor(e){super({}),this.currentEventIndex=0,this.current=0,this.duration=0,this.status=ie,this.statusText="",this._posToEventIndexMap=[],this._eventProvider=e,this._chunkQueue=[],this._writeInFlight=!1}send(){}connect(){return this.status=ie,this._change(),this._eventProvider.init().then((()=>{this._init(),this.status=ne})).catch((e=>{X.error("unable to init event provider",e),this._handleError(e)})).finally(this._change.bind(this))}pauseFlow(){this._writeInFlight=!0}resumeFlow(){this._writeInFlight=!1,this._chunkDequeue()}move(e){if(!this.isReady())return;void 0===e&&(e=this.current+1),e<0&&(e=0),e>this.duration&&this.stop();const t=this._getEventIndex(e)+1;if(t===this.currentEventIndex)return this.current=e,void this._change();const n=this.currentEventIndex>t;try{n&&(this._chunkQueue=[],this.emit(q.y2.RESET));const i=n?0:this.currentEventIndex,s=t,r=this._eventProvider.events.slice(i,s).filter(J);this._render(r),this.currentEventIndex=t,this.current=e,this._change()}catch(e){X.error("move",e),this._handleError(e)}}stop(){this.status=ne,this.timer=clearInterval(this.timer),this._change()}play(){this.status!==ee&&(this.status=ee,this.current>=this.duration&&(this.current=0,this.emit(q.y2.RESET)),this.timer=setInterval(this.move.bind(this),10),this._change())}getCurrentTime(){if(this.currentEventIndex){let{displayTime:e}=this._eventProvider.events[this.currentEventIndex-1];return e}return"--:--"}getEventCount(){return this._eventProvider.events.length}isLoading(){return this.status===ie}isPlaying(){return this.status===ee}isError(){return this.status===te}isReady(){return this.status!==ie&&this.status!==te}disconnect(){}_init(){this.duration=this._eventProvider.getDuration(),this._eventProvider.events.forEach((e=>this._posToEventIndexMap.push(e.msNormalized)))}_chunkDequeue(){const e=this._chunkQueue.shift();if(!e)return;const t=e.data.join("");this.emit(q.y2.RESIZE,{h:e.h,w:e.w}),this.emit(q.y2.DATA,t)}_render(e){if(!e||0===e.length)return;const t=[{data:[e[0].data],w:e[0].w,h:e[0].h}];let n=t[0];for(let i=1;i<e.length;i++)n.w===e[i].w&&n.h===e[i].h?n.data.push(e[i].data):(n={data:[e[i].data],w:e[i].w,h:e[i].h},t.push(n));this._chunkQueue=[...this._chunkQueue,...t],this._writeInFlight||this._chunkDequeue()}_getEventIndex(e){const t=this._posToEventIndexMap;for(var n=0,i=t.length-1;i-n>1;){const s=Math.floor((n+i)/2);t[s]<e?n=s:i=s}return e-t[n]<=t[i]-e?n:i}_change(){this.emit("change")}_handleError(e){this.status=te,this.statusText=e.message}}var re=n(3958),oe=n(6209),ae=n(1527);class le extends oe.Z{connect(){this.term.options.scrollback=0}resize(e,t){this.term.focus(),super.resize(e,t)}_requestResize(){}}const he=function(e){let{tty:t}=e;const n=(0,i.useRef)(),r=(0,s.Fg)();return(0,i.useEffect)((()=>{const e=new le(t,{el:n.current,fontFamily:r.fonts.mono,fontSize:(0,re.Z)().isMac?12:14});function i(e){e.stopPropagation()}return e.open(),e.term.focus(),e.tty.on(q.y2.DATA,(()=>{e.term.textarea.scrollIntoView(!1)})),window.addEventListener("wheel",i,!0),function(){e.destroy(),window.removeEventListener("wheel",i,!0)}}),[t]),i.createElement(ae.Z,{style:{overflow:"auto"},ref:n})};function ce(){return ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},ce.apply(this,arguments)}function ue(e){let{sid:t,clusterId:n}=e;const{tty:s}=function(e,t){const n=i.useMemo((()=>{const n=f.Z.getTerminalSessionUrl({clusterId:e,sid:t});return new se(new Y({url:n}))}),[t,e]),[,s]=i.useState(n.status);return i.useEffect((()=>(n.on("change",(function(){s(n.status)})),n.connect().then((()=>{n.play()})),function(){n.stop(),n.removeAllListeners()})),[n]),{tty:n}}(n,t),{statusText:a,status:l}=s,h=s.getEventCount(),c=l===ie;return l===te?i.createElement(de,null,i.createElement(o.b0,{m:10},a||"Error")):c?i.createElement(de,null,i.createElement(r.z$,null)):c||0!==h?i.createElement(pe,null,i.createElement(r.kC,{flex:"1",flexDirection:"column",overflow:"auto"},i.createElement(he,{tty:s})),h>0&&i.createElement(z,{tty:s})):i.createElement(de,null,i.createElement(r.xv,{typography:"h4"},"Recording for this session is not available."))}const de=e=>i.createElement(r.xu,ce({width:"100%",textAlign:"center",p:3},e)),pe=s.ZP.div(["display:flex;height:100%;width:100%;position:absolute;flex-direction:column;flex:1;justify-content:space-between;"]);var fe=n(2865);function me(){return me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},me.apply(this,arguments)}const ve=e=>{let{title:t}=e;return i.createElement(ge,null,t)},ge=(0,s.ZP)(r.xu)(["max-width:200px;height:100%;outline:none;text-transform:uppercase;text-decoration:none;color:inherit;align-items:center;display:flex;font-size:11px;justify-content:center;flex:1;&:hover,&.active,&:focus{color:",";}"," ",""],(e=>e.theme.colors.primary.contrastText),(e=>{let{theme:t}=e;return{backgroundColor:t.colors.bgTerminal,color:t.colors.primary.contrastText,fontWeight:"bold",transition:"none"}}),(e=>{let{theme:t}=e;return{border:"none",borderRight:`1px solid ${t.colors.bgTerminal}`,"&:hover, &:focus":{color:t.colors.primary.contrastText,transition:"color .3s"}}})),_e=(0,s.ZP)(r.kC)(["",""],fe.cp),ye=e=>i.createElement(_e,me({height:"40px",color:"text.secondary",as:"nav"},e)),be=s.ZP.div(["display:flex;height:100%;width:100%;position:absolute;flex-direction:column;.terminal .xterm-viewport{overflow-y:hidden !important;}"]),Ee=function(){const{sid:e,clusterId:t}=(0,a.UO)(),{search:n}=(0,a.TH)(),s=(0,c.r)("recordingType",n),u=Number((0,c.r)("durationMs",n)),d="ssh"===s||"k8s"===s||"desktop"===s,p=Number.isInteger(u)&&u>0;return document.title=`${t} • Play ${e}`,d?"desktop"!==s||p?i.createElement(be,null,i.createElement(r.kC,{bg:h.O.primary.light,height:"38px"},i.createElement(ye,{flex:"1 0"},i.createElement(ve,{title:"Session Player"})),i.createElement(v,{onLogout:function(){l.Z.logout()}})),i.createElement(r.kC,{bg:h.O.bgTerminal,flex:"1",style:{overflow:"auto",position:"relative"}},"desktop"===s?i.createElement(V,{sid:e,clusterId:t,durationMs:u}):i.createElement(ue,{sid:e,clusterId:t}))):i.createElement(be,null,i.createElement(r.xu,{textAlign:"center",mx:10,mt:5},i.createElement(o.b0,{mb:0},"Invalid query parameter durationMs:"," ",(0,c.r)("durationMs",n),", should be an integer."))):i.createElement(be,null,i.createElement(r.xu,{textAlign:"center",mx:10,mt:5},i.createElement(o.b0,{mb:0},"Invalid query parameter recordingType: ",s,", should be 'ssh' or 'desktop'")))}},6209:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var i=n(3363),s=n.n(i),r=n(4073),o=n.n(r),a=(n(7757),n(7289)),l=n(8440),h=n(2418),c=n(9175);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const d=h.Z.create("lib/term/terminal");class p{constructor(e,t){u(this,"term",void 0),u(this,"tty",void 0),u(this,"_el",void 0),u(this,"_scrollBack",void 0),u(this,"_fontFamily",void 0),u(this,"_fontSize",void 0),u(this,"_debouncedResize",void 0),u(this,"_fitAddon",new l.FitAddon);const{el:n,scrollBack:i,fontFamily:s,fontSize:r}=t;this._el=n,this._fontFamily=s||void 0,this._fontSize=r||14,this._scrollBack=i,this.tty=e,this.term=null,this._debouncedResize=o()((()=>{this._requestResize()}),200)}open(){this.term=new a.Terminal({lineHeight:1,fontFamily:this._fontFamily,fontSize:this._fontSize,scrollback:this._scrollBack||1e3,cursorBlink:!1,allowTransparency:!0}),this.term.loadAddon(this._fitAddon),this.term.open(this._el),this._fitAddon.fit(),this.term.focus(),this.term.onData((e=>{this.tty.send(e)})),this.tty.on(c.y2.RESET,(()=>this.reset())),this.tty.on(c.y2.CONN_CLOSE,(e=>this._processClose(e))),this.tty.on(c.y2.DATA,(e=>this._processData(e))),this.tty.on(c.y2.RESIZE,(e=>{let{h:t,w:n}=e;return this.resize(n,t)})),this.connect(),window.addEventListener("resize",this._debouncedResize)}connect(){this.tty.connect(this.term.cols,this.term.rows)}destroy(){var e;this._disconnect(),this._debouncedResize.cancel(),this._fitAddon.dispose(),this._el.innerHTML=null,null===(e=this.term)||void 0===e||e.dispose(),window.removeEventListener("resize",this._debouncedResize)}reset(){this.term.reset()}resize(e,t){try{if(s()(e)&&s()(t)||(e=this.term.cols,t=this.term.rows),e===this.term.cols&&t===this.term.rows)return;this.term.resize(e,t)}catch(n){d.error("xterm.resize",{w:e,h:t},n),this.term.reset()}}_disconnect(){this.tty.disconnect(),this.tty.removeAllListeners()}_requestResize(){this._el.clientWidth&&this._el.clientHeight?(this._fitAddon.fit(),this.tty.requestResize(this.term.cols,this.term.rows)):d.info("unable to resize terminal (container might be hidden)")}_processData(e){try{this.tty.pauseFlow(),this.term.write(e,(()=>this.tty.resumeFlow()))}catch(t){d.error("xterm.write",e,t),this.term.reset(),this.tty.resumeFlow()}}_processClose(e){const{reason:t}=e;let n="disconnected";t&&(n=`${n}: ${t}`),n=`[31m${n}[m\r\n`,this.term.write(n)}}},8005:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var i=n(2418),s=n(8082),r=n(9175),o=n(8834);const a={RAW:"r",AUDIT:"a",SESSION_END:"c",RESIZE:"w",WEBAUTHN_CHALLENGE:"n"},l={payload:{code:26},version:{code:10,length:1,values:{v1:49}},type:{length:1,code:18,values:{resize:a.RESIZE.charCodeAt(0),data:a.RAW.charCodeAt(0),event:a.AUDIT.charCodeAt(0),close:a.SESSION_END.charCodeAt(0)}}};class h{encode(e,t){var n=[];return this.encodeVersion(n),this.encodeType(n,e),this.encodePayload(n,t),n}encodeResizeMessage(e){return this.encode(l.type.values.resize,e)}encodeRawMessage(e){return this.encode(l.type.values.data,e)}encodePayload(e,t){e.push(l.payload.code);var n=this._textToUintArray(t);this.encodeVarint(e,n.length);for(var i=0;i<n.length;i++)e.push(n[i])}encodeVersion(e){e[0]=l.version.code,e[1]=l.version.length,e[2]=l.version.values.v1}encodeType(e,t){e[3]=l.type.code,e[4]=l.type.length,e[5]=t}encodeVarint(e,t){for(var n=t>>>0,i=Math.floor((t-n)/4294967296)>>>0;i>0||n>127;)e.push(127&n|128),n=(n>>>7|i<<25)>>>0,i>>>=7;e.push(n)}decode(e){return{version:this.decodeVersion(e),type:this.decodeType(e),payload:this.decodePayload(e)}}decodeVersion(e){if(e[0]===l.version.code&&e[1]===l.version.length)return String.fromCharCode(e[2]);throw new Error("invalid version field")}decodeType(e){if(e[3]===l.type.code&&e[4]===l.type.length)return String.fromCharCode(e[5]);throw new Error("invalid type field")}decodePayload(e){if(!e[6])return"";if(e[6]!==l.payload.code)throw new Error("invalid payload field");const t=e.slice(7),[n,i]=this.decodeVarint(t),s=t.slice(n,n+i);return this._uintArrayToText(s)}decodeVarint(e){let t=0,n=0;for(let s=0;s<e.length;s++){var i=e[s];if(i<128){if(s>9||9==s&&i>1)throw new Error("unable to decode varint: overflow");return[s+1,t|i<<n]}t|=i&127<<n,n+=7}throw new Error("unable to decode varint: empty array")}_textToUintArray(e){return o.Buffer(e)}_uintArrayToText(e){return window.TextDecoder?new TextDecoder("utf-8").decode(e):o.Buffer(e).toString()}}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Uint8Array.prototype.slice||Object.defineProperty(Uint8Array.prototype,"slice",{value:Array.prototype.slice});const p=i.Z.create("Tty"),f={buffered:!0};class m extends s.j{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super(),d(this,"socket",null),d(this,"_buffered",!0),d(this,"_attachSocketBufferTimer",void 0),d(this,"_attachSocketBuffer",void 0),d(this,"_addressResolver",null),d(this,"_proto",new h);const n=u(u({},f),t);this._addressResolver=e,this._buffered=n.buffered,this._onOpenConnection=this._onOpenConnection.bind(this),this._onCloseConnection=this._onCloseConnection.bind(this),this._onMessage=this._onMessage.bind(this)}disconnect(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.wS.NORMAL;null!==this.socket&&this.socket.close(e)}connect(e,t){const n=this._addressResolver.getConnStr(e,t);this.socket=new WebSocket(n),this.socket.binaryType="arraybuffer",this.socket.onopen=this._onOpenConnection,this.socket.onmessage=this._onMessage,this.socket.onclose=this._onCloseConnection}send(e){if(!this.socket||!e)return;const t=this._proto.encodeRawMessage(e),n=new Uint8Array(t);this.socket.send(n.buffer)}sendWebAuthn(e){this.send(JSON.stringify(e))}pauseFlow(){}resumeFlow(){}requestResize(e,t){if(this.socket){p.info("requesting new screen size",`w:${e} and h:${t}`);var n=JSON.stringify({event:r.by.RESIZE,width:e,height:t,size:`${e}:${t}`}),i=this._proto.encodeResizeMessage(n),s=new Uint8Array(i);this.socket.send(s.buffer)}}_flushBuffer(){this.emit(r.y2.DATA,this._attachSocketBuffer),this._attachSocketBuffer=null,clearTimeout(this._attachSocketBufferTimer),this._attachSocketBufferTimer=null}_pushToBuffer(e){this._attachSocketBuffer?this._attachSocketBuffer+=e:(this._attachSocketBuffer=e,setTimeout(this._flushBuffer.bind(this),10))}_onOpenConnection(){this.emit("open"),p.info("websocket is open")}_onCloseConnection(e){this.socket.onopen=null,this.socket.onmessage=null,this.socket.onclose=null,this.socket=null,this.emit(r.y2.CONN_CLOSE,e),p.info("websocket is closed")}_onMessage(e){try{const t=new Uint8Array(e.data),n=this._proto.decode(t);switch(n.type){case a.WEBAUTHN_CHALLENGE:this.emit(r.y2.WEBAUTHN_CHALLENGE,n.payload);break;case a.AUDIT:this._processAuditPayload(n.payload);break;case a.SESSION_END:this.emit(r.y2.CLOSE,n.payload);break;case a.RAW:this._buffered?this._pushToBuffer(n.payload):this.emit(r.y2.DATA,n.payload);break;default:throw Error(`unknown message type: ${n.type}`)}}catch(e){p.error("failed to parse incoming message.",e)}}_processAuditPayload(e){const t=JSON.parse(e);if(t.event===r.by.RESIZE){let[e,n]=t.size.split(":");e=Number(e),n=Number(n),this.emit(r.y2.RESIZE,{w:e,h:n})}}}const v=m}}]);