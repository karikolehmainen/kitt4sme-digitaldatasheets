
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (crypto) {
	'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var crypto__default = /*#__PURE__*/_interopDefaultLegacy(crypto);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var react = {exports: {}};

	var react_production_min = {};

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty$g = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject$3(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject$3(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty$g.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

	/** @license React v17.0.2
	 * react.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var l$1=objectAssign,n$1=60103,p$1=60106;react_production_min.Fragment=60107;react_production_min.StrictMode=60108;react_production_min.Profiler=60114;var q$1=60109,r$2=60110,t$1=60112;react_production_min.Suspense=60113;var u=60115,v$1=60116;
	if("function"===typeof Symbol&&Symbol.for){var w$1=Symbol.for;n$1=w$1("react.element");p$1=w$1("react.portal");react_production_min.Fragment=w$1("react.fragment");react_production_min.StrictMode=w$1("react.strict_mode");react_production_min.Profiler=w$1("react.profiler");q$1=w$1("react.provider");r$2=w$1("react.context");t$1=w$1("react.forward_ref");react_production_min.Suspense=w$1("react.suspense");u=w$1("react.memo");v$1=w$1("react.lazy");}var x$1="function"===typeof Symbol&&Symbol.iterator;
	function y$2(a){if(null===a||"object"!==typeof a)return null;a=x$1&&a[x$1]||a["@@iterator"];return "function"===typeof a?a:null}function z$1(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
	var A$1={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B$1={};function C(a,b,c){this.props=a;this.context=b;this.refs=B$1;this.updater=c||A$1;}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z$1(85));this.updater.enqueueSetState(this,a,b,"setState");};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};
	function D$1(){}D$1.prototype=C.prototype;function E$1(a,b,c){this.props=a;this.context=b;this.refs=B$1;this.updater=c||A$1;}var F$1=E$1.prototype=new D$1;F$1.constructor=E$1;l$1(F$1,C.prototype);F$1.isPureReactComponent=!0;var G$1={current:null},H$1=Object.prototype.hasOwnProperty,I$1={key:!0,ref:!0,__self:!0,__source:!0};
	function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H$1.call(b,e)&&!I$1.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f;}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return {$$typeof:n$1,type:a,key:k,ref:h,props:d,_owner:G$1.current}}
	function K(a,b){return {$$typeof:n$1,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return "object"===typeof a&&null!==a&&a.$$typeof===n$1}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var M$1=/\/+/g;function N$1(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
	function O$1(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n$1:case p$1:h=!0;}}if(h)return h=a,d=d(h),a=""===e?"."+N$1(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M$1,"$&/")+"/"),O$1(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M$1,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
	0;g<a.length;g++){k=a[g];var f=e+N$1(k,g);h+=O$1(k,b,c,f,d);}else if(f=y$2(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N$1(k,g++),h+=O$1(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z$1(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P$1(a,b,c){if(null==a)return a;var e=[],d=0;O$1(a,e,"","",function(a){return b.call(c,a,d++)});return e}
	function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b);},function(b){0===a._status&&(a._status=2,a._result=b);});}if(1===a._status)return a._result;throw a._result;}var R$1={current:null};function S$1(){var a=R$1.current;if(null===a)throw Error(z$1(321));return a}var T$1={ReactCurrentDispatcher:R$1,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G$1,IsSomeRendererActing:{current:!1},assign:l$1};
	react_production_min.Children={map:P$1,forEach:function(a,b,c){P$1(a,function(){b.apply(this,arguments);},c);},count:function(a){var b=0;P$1(a,function(){b++;});return b},toArray:function(a){return P$1(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z$1(143));return a}};react_production_min.Component=C;react_production_min.PureComponent=E$1;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T$1;
	react_production_min.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z$1(267,a));var e=l$1({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G$1.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H$1.call(b,f)&&!I$1.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g;}return {$$typeof:n$1,type:a.type,
	key:d,ref:k,props:e,_owner:h}};react_production_min.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r$2,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q$1,_context:a};return a.Consumer=a};react_production_min.createElement=J;react_production_min.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};react_production_min.forwardRef=function(a){return {$$typeof:t$1,render:a}};react_production_min.isValidElement=L;
	react_production_min.lazy=function(a){return {$$typeof:v$1,_payload:{_status:-1,_result:a},_init:Q}};react_production_min.memo=function(a,b){return {$$typeof:u,type:a,compare:void 0===b?null:b}};react_production_min.useCallback=function(a,b){return S$1().useCallback(a,b)};react_production_min.useContext=function(a,b){return S$1().useContext(a,b)};react_production_min.useDebugValue=function(){};react_production_min.useEffect=function(a,b){return S$1().useEffect(a,b)};react_production_min.useImperativeHandle=function(a,b,c){return S$1().useImperativeHandle(a,b,c)};
	react_production_min.useLayoutEffect=function(a,b){return S$1().useLayoutEffect(a,b)};react_production_min.useMemo=function(a,b){return S$1().useMemo(a,b)};react_production_min.useReducer=function(a,b,c){return S$1().useReducer(a,b,c)};react_production_min.useRef=function(a){return S$1().useRef(a)};react_production_min.useState=function(a){return S$1().useState(a)};react_production_min.version="17.0.2";

	{
	  react.exports = react_production_min;
	}

	var React = react.exports;

	var reactDom = {exports: {}};

	var reactDom_production_min = {};

	var scheduler = {exports: {}};

	var scheduler_production_min = {};

	/** @license React v0.20.2
	 * scheduler.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	(function (exports) {
	var f,g,h,k;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()};}else {var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q};}
	if("undefined"===typeof window||"function"!==typeof MessageChannel){var t=null,u=null,w=function(){if(null!==t)try{var a=exports.unstable_now();t(!0,a);t=null;}catch(b){throw setTimeout(w,0),b;}};f=function(a){null!==t?setTimeout(f,0,a):(t=a,setTimeout(w,0));};g=function(a,b){u=setTimeout(a,b);};h=function(){clearTimeout(u);};exports.unstable_shouldYield=function(){return !1};k=exports.unstable_forceFrameRate=function(){};}else {var x=window.setTimeout,y=window.clearTimeout;if("undefined"!==typeof console){var z=
	window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");"function"!==typeof z&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");}var A=!1,B=null,C=-1,D=5,E=0;exports.unstable_shouldYield=function(){return exports.unstable_now()>=
	E};k=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<a?Math.floor(1E3/a):5;};var F=new MessageChannel,G=F.port2;F.port1.onmessage=function(){if(null!==B){var a=exports.unstable_now();E=a+D;try{B(!0,a)?G.postMessage(null):(A=!1,B=null);}catch(b){throw G.postMessage(null),b;}}else A=!1;};f=function(a){B=a;A||(A=!0,G.postMessage(null));};g=function(a,b){C=
	x(function(){a(exports.unstable_now());},b);};h=function(){y(C);C=-1;};}function H(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<I(e,b))a[d]=b,a[c]=e,c=d;else break a}}function J(a){a=a[0];return void 0===a?null:a}
	function K(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>I(n,c))void 0!==r&&0>I(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>I(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function I(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var L=[],M=[],N=1,O=null,P=3,Q=!1,R=!1,S=!1;
	function T(a){for(var b=J(M);null!==b;){if(null===b.callback)K(M);else if(b.startTime<=a)K(M),b.sortIndex=b.expirationTime,H(L,b);else break;b=J(M);}}function U(a){S=!1;T(a);if(!R)if(null!==J(L))R=!0,f(V);else {var b=J(M);null!==b&&g(U,b.startTime-a);}}
	function V(a,b){R=!1;S&&(S=!1,h());Q=!0;var c=P;try{T(b);for(O=J(L);null!==O&&(!(O.expirationTime>b)||a&&!exports.unstable_shouldYield());){var d=O.callback;if("function"===typeof d){O.callback=null;P=O.priorityLevel;var e=d(O.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?O.callback=e:O===J(L)&&K(L);T(b);}else K(L);O=J(L);}if(null!==O)var m=!0;else {var n=J(M);null!==n&&g(U,n.startTime-b);m=!1;}return m}finally{O=null,P=c,Q=!1;}}var W=k;exports.unstable_IdlePriority=5;
	exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null;};exports.unstable_continueExecution=function(){R||Q||(R=!0,f(V));};exports.unstable_getCurrentPriorityLevel=function(){return P};exports.unstable_getFirstCallbackNode=function(){return J(L)};
	exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P;}var c=P;P=b;try{return a()}finally{P=c;}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=W;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=P;P=a;try{return b()}finally{P=c;}};
	exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3;}e=c+e;a={id:N++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,H(M,a),null===J(L)&&a===J(M)&&(S?h():S=!0,g(U,c-d))):(a.sortIndex=e,H(L,a),R||Q||(R=!0,f(V)));return a};
	exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c;}}};
	}(scheduler_production_min));

	{
	  scheduler.exports = scheduler_production_min;
	}

	/** @license React v17.0.2
	 * react-dom.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var aa=react.exports,m$1=objectAssign,r$1=scheduler.exports;function y$1(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(y$1(227));var ba=new Set,ca={};function da(a,b){ea(a,b);ea(a+"Capture",b);}
	function ea(a,b){ca[a]=b;for(a=0;a<b.length;a++)ba.add(b[a]);}
	var fa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ha=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia=Object.prototype.hasOwnProperty,
	ja={},ka={};function la(a){if(ia.call(ka,a))return !0;if(ia.call(ja,a))return !1;if(ha.test(a))return ka[a]=!0;ja[a]=!0;return !1}function ma(a,b,c,d){if(null!==c&&0===c.type)return !1;switch(typeof b){case "function":case "symbol":return !0;case "boolean":if(d)return !1;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return !1}}
	function na(a,b,c,d){if(null===b||"undefined"===typeof b||ma(a,b,c,d))return !0;if(d)return !1;if(null!==c)switch(c.type){case 3:return !b;case 4:return !1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return !1}function B(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g;}var D={};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new B(a,0,!1,a,null,!1,!1);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new B(b,1,!1,a[1],null,!1,!1);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new B(a,2,!1,a.toLowerCase(),null,!1,!1);});
	["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new B(a,2,!1,a,null,!1,!1);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new B(a,3,!1,a.toLowerCase(),null,!1,!1);});
	["checked","multiple","muted","selected"].forEach(function(a){D[a]=new B(a,3,!0,a,null,!1,!1);});["capture","download"].forEach(function(a){D[a]=new B(a,4,!1,a,null,!1,!1);});["cols","rows","size","span"].forEach(function(a){D[a]=new B(a,6,!1,a,null,!1,!1);});["rowSpan","start"].forEach(function(a){D[a]=new B(a,5,!1,a.toLowerCase(),null,!1,!1);});var oa=/[\-:]([a-z])/g;function pa(a){return a[1].toUpperCase()}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(oa,
	pa);D[b]=new B(b,1,!1,a,null,!1,!1);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1);});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!1,!1);});
	D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!0,!0);});
	function qa(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(na(b,c,e,d)&&(c=null),d||null===e?la(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))));}
	var ra=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=60103,ta=60106,ua=60107,wa=60108,xa=60114,ya=60109,za=60110,Aa=60112,Ba=60113,Ca=60120,Da=60115,Ea=60116,Fa=60121,Ga=60128,Ha=60129,Ia=60130,Ja=60131;
	if("function"===typeof Symbol&&Symbol.for){var E=Symbol.for;sa=E("react.element");ta=E("react.portal");ua=E("react.fragment");wa=E("react.strict_mode");xa=E("react.profiler");ya=E("react.provider");za=E("react.context");Aa=E("react.forward_ref");Ba=E("react.suspense");Ca=E("react.suspense_list");Da=E("react.memo");Ea=E("react.lazy");Fa=E("react.block");E("react.scope");Ga=E("react.opaque.id");Ha=E("react.debug_trace_mode");Ia=E("react.offscreen");Ja=E("react.legacy_hidden");}
	var Ka="function"===typeof Symbol&&Symbol.iterator;function La(a){if(null===a||"object"!==typeof a)return null;a=Ka&&a[Ka]||a["@@iterator"];return "function"===typeof a?a:null}var Ma;function Na(a){if(void 0===Ma)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Ma=b&&b[1]||"";}return "\n"+Ma+a}var Oa=!1;
	function Pa(a,b){if(!a||Oa)return "";Oa=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[]);}catch(k){var d=k;}Reflect.construct(a,[],b);}else {try{b.call();}catch(k){d=k;}a.call(b.prototype);}else {try{throw Error();}catch(k){d=k;}a();}}catch(k){if(k&&d&&"string"===typeof k.stack){for(var e=k.stack.split("\n"),
	f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h])return "\n"+e[g].replace(" at new "," at ");while(1<=g&&0<=h)}break}}}finally{Oa=!1,Error.prepareStackTrace=c;}return (a=a?a.displayName||a.name:"")?Na(a):""}
	function Qa(a){switch(a.tag){case 5:return Na(a.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return a=Pa(a.type,!1),a;case 11:return a=Pa(a.type.render,!1),a;case 22:return a=Pa(a.type._render,!1),a;case 1:return a=Pa(a.type,!0),a;default:return ""}}
	function Ra(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ua:return "Fragment";case ta:return "Portal";case xa:return "Profiler";case wa:return "StrictMode";case Ba:return "Suspense";case Ca:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case za:return (a.displayName||"Context")+".Consumer";case ya:return (a._context.displayName||"Context")+".Provider";case Aa:var b=a.render;b=b.displayName||b.name||"";
	return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case Da:return Ra(a.type);case Fa:return Ra(a._render);case Ea:b=a._payload;a=a._init;try{return Ra(a(b))}catch(c){}}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return ""}}function Ta(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
	function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return {getValue:function(){return d},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=
	null;delete a[b];}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a));}function Wa(a){if(!a)return !1;var b=a._valueTracker;if(!b)return !0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
	function Ya(a,b){var c=b.checked;return m$1({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function $a(a,b){b=b.checked;null!=b&&qa(a,"checked",b,!1);}
	function ab(a,b){$a(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?bb(a,b.type,c):b.hasOwnProperty("defaultValue")&&bb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}
	function cb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}
	function bb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}function db(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a);});return b}function eb(a,b){a=m$1({children:void 0},b);if(b=db(b.children))a.children=b;return a}
	function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0);}else {c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=!0);}}
	function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(y$1(91));return m$1({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(y$1(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(y$1(93));c=c[0];}b=c;}null==b&&(b="");c=b;}a._wrapperState={initialValue:Sa(c)};}
	function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b);}var kb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
	function lb(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}function mb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?lb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
	var nb,ob=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if(a.namespaceURI!==kb.svg||"innerHTML"in a)a.innerHTML=b;else {nb=nb||document.createElement("div");nb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=nb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});
	function pb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;}
	var qb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
	floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rb=["Webkit","ms","Moz","O"];Object.keys(qb).forEach(function(a){rb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);qb[b]=qb[a];});});function sb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||qb.hasOwnProperty(a)&&qb[a]?(""+b).trim():b+"px"}
	function tb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=sb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var ub=m$1({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
	function vb(a,b){if(b){if(ub[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(y$1(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(y$1(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(y$1(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(y$1(62));}}
	function wb(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return !1;default:return !0}}function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
	function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(y$1(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b));}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a;}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a]);}}function Gb(a,b){return a(b)}function Hb(a,b,c,d,e){return a(b,c,d,e)}function Ib(){}var Jb=Gb,Kb=!1,Lb=!1;function Mb(){if(null!==zb||null!==Ab)Ib(),Fb();}
	function Nb(a,b,c){if(Lb)return a(b,c);Lb=!0;try{return Jb(a,b,c)}finally{Lb=!1,Mb();}}
	function Ob(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1;}if(a)return null;if(c&&"function"!==
	typeof c)throw Error(y$1(231,b,typeof c));return c}var Pb=!1;if(fa)try{var Qb={};Object.defineProperty(Qb,"passive",{get:function(){Pb=!0;}});window.addEventListener("test",Qb,Qb);window.removeEventListener("test",Qb,Qb);}catch(a){Pb=!1;}function Rb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l);}catch(n){this.onError(n);}}var Sb=!1,Tb=null,Ub=!1,Vb=null,Wb={onError:function(a){Sb=!0;Tb=a;}};function Xb(a,b,c,d,e,f,g,h,k){Sb=!1;Tb=null;Rb.apply(Wb,arguments);}
	function Yb(a,b,c,d,e,f,g,h,k){Xb.apply(this,arguments);if(Sb){if(Sb){var l=Tb;Sb=!1;Tb=null;}else throw Error(y$1(198));Ub||(Ub=!0,Vb=l);}}function Zb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else {a=b;do b=a,0!==(b.flags&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function $b(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function ac(a){if(Zb(a)!==a)throw Error(y$1(188));}
	function bc(a){var b=a.alternate;if(!b){b=Zb(a);if(null===b)throw Error(y$1(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return ac(e),a;if(f===d)return ac(e),b;f=f.sibling;}throw Error(y$1(188));}if(c.return!==d.return)c=e,d=f;else {for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===
	c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling;}if(!g)throw Error(y$1(189));}}if(c.alternate!==d)throw Error(y$1(190));}if(3!==c.tag)throw Error(y$1(188));return c.stateNode.current===c?a:b}function cc(a){a=bc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else {if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return null}
	function dc(a,b){for(var c=a.alternate;null!==b;){if(b===a||b===c)return !0;b=b.return;}return !1}var ec,fc,gc,hc,ic=!1,jc=[],kc=null,lc=null,mc=null,nc=new Map,oc=new Map,pc=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
	function rc(a,b,c,d,e){return {blockedOn:a,domEventName:b,eventSystemFlags:c|16,nativeEvent:e,targetContainers:[d]}}function sc(a,b){switch(a){case "focusin":case "focusout":kc=null;break;case "dragenter":case "dragleave":lc=null;break;case "mouseover":case "mouseout":mc=null;break;case "pointerover":case "pointerout":nc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":oc.delete(b.pointerId);}}
	function tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=rc(b,c,d,e,f),null!==b&&(b=Cb(b),null!==b&&fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
	function uc(a,b,c,d,e){switch(b){case "focusin":return kc=tc(kc,a,b,c,d,e),!0;case "dragenter":return lc=tc(lc,a,b,c,d,e),!0;case "mouseover":return mc=tc(mc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;nc.set(f,tc(nc.get(f)||null,a,b,c,d,e));return !0;case "gotpointercapture":return f=e.pointerId,oc.set(f,tc(oc.get(f)||null,a,b,c,d,e)),!0}return !1}
	function vc(a){var b=wc(a.target);if(null!==b){var c=Zb(b);if(null!==c)if(b=c.tag,13===b){if(b=$b(c),null!==b){a.blockedOn=b;hc(a.lanePriority,function(){r$1.unstable_runWithPriority(a.priority,function(){gc(c);});});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null;}
	function xc(a){if(null!==a.blockedOn)return !1;for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c)return b=Cb(c),null!==b&&fc(b),a.blockedOn=c,!1;b.shift();}return !0}function zc(a,b,c){xc(a)&&c.delete(b);}
	function Ac(){for(ic=!1;0<jc.length;){var a=jc[0];if(null!==a.blockedOn){a=Cb(a.blockedOn);null!==a&&ec(a);break}for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c){a.blockedOn=c;break}b.shift();}null===a.blockedOn&&jc.shift();}null!==kc&&xc(kc)&&(kc=null);null!==lc&&xc(lc)&&(lc=null);null!==mc&&xc(mc)&&(mc=null);nc.forEach(zc);oc.forEach(zc);}
	function Bc(a,b){a.blockedOn===b&&(a.blockedOn=null,ic||(ic=!0,r$1.unstable_scheduleCallback(r$1.unstable_NormalPriority,Ac)));}
	function Cc(a){function b(b){return Bc(b,a)}if(0<jc.length){Bc(jc[0],a);for(var c=1;c<jc.length;c++){var d=jc[c];d.blockedOn===a&&(d.blockedOn=null);}}null!==kc&&Bc(kc,a);null!==lc&&Bc(lc,a);null!==mc&&Bc(mc,a);nc.forEach(b);oc.forEach(b);for(c=0;c<pc.length;c++)d=pc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<pc.length&&(c=pc[0],null===c.blockedOn);)vc(c),null===c.blockedOn&&pc.shift();}
	function Dc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ec={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},Fc={},Gc={};
	fa&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete Ec.animationend.animation,delete Ec.animationiteration.animation,delete Ec.animationstart.animation),"TransitionEvent"in window||delete Ec.transitionend.transition);function Hc(a){if(Fc[a])return Fc[a];if(!Ec[a])return a;var b=Ec[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Gc)return Fc[a]=b[c];return a}
	var Ic=Hc("animationend"),Jc=Hc("animationiteration"),Kc=Hc("animationstart"),Lc=Hc("transitionend"),Mc=new Map,Nc=new Map,Oc=["abort","abort",Ic,"animationEnd",Jc,"animationIteration",Kc,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart",
	"lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Lc,"transitionEnd","waiting","waiting"];function Pc(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1];e="on"+(e[0].toUpperCase()+e.slice(1));Nc.set(d,b);Mc.set(d,e);da(e,[d]);}}var Qc=r$1.unstable_now;Qc();var F=8;
	function Rc(a){if(0!==(1&a))return F=15,1;if(0!==(2&a))return F=14,2;if(0!==(4&a))return F=13,4;var b=24&a;if(0!==b)return F=12,b;if(0!==(a&32))return F=11,32;b=192&a;if(0!==b)return F=10,b;if(0!==(a&256))return F=9,256;b=3584&a;if(0!==b)return F=8,b;if(0!==(a&4096))return F=7,4096;b=4186112&a;if(0!==b)return F=6,b;b=62914560&a;if(0!==b)return F=5,b;if(a&67108864)return F=4,67108864;if(0!==(a&134217728))return F=3,134217728;b=805306368&a;if(0!==b)return F=2,b;if(0!==(1073741824&a))return F=1,1073741824;
	F=8;return a}function Sc(a){switch(a){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Tc(a){switch(a){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(y$1(358,a));}}
	function Uc(a,b){var c=a.pendingLanes;if(0===c)return F=0;var d=0,e=0,f=a.expiredLanes,g=a.suspendedLanes,h=a.pingedLanes;if(0!==f)d=f,e=F=15;else if(f=c&134217727,0!==f){var k=f&~g;0!==k?(d=Rc(k),e=F):(h&=f,0!==h&&(d=Rc(h),e=F));}else f=c&~g,0!==f?(d=Rc(f),e=F):0!==h&&(d=Rc(h),e=F);if(0===d)return 0;d=31-Vc(d);d=c&((0>d?0:1<<d)<<1)-1;if(0!==b&&b!==d&&0===(b&g)){Rc(b);if(e<=F)return b;F=e;}b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-Vc(b),e=1<<c,d|=a[c],b&=~e;return d}
	function Wc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Xc(a,b){switch(a){case 15:return 1;case 14:return 2;case 12:return a=Yc(24&~b),0===a?Xc(10,b):a;case 10:return a=Yc(192&~b),0===a?Xc(8,b):a;case 8:return a=Yc(3584&~b),0===a&&(a=Yc(4186112&~b),0===a&&(a=512)),a;case 2:return b=Yc(805306368&~b),0===b&&(b=268435456),b}throw Error(y$1(358,a));}function Yc(a){return a&-a}function Zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
	function $c(a,b,c){a.pendingLanes|=b;var d=b-1;a.suspendedLanes&=d;a.pingedLanes&=d;a=a.eventTimes;b=31-Vc(b);a[b]=c;}var Vc=Math.clz32?Math.clz32:ad,bd=Math.log,cd=Math.LN2;function ad(a){return 0===a?32:31-(bd(a)/cd|0)|0}var dd=r$1.unstable_UserBlockingPriority,ed=r$1.unstable_runWithPriority,fd=!0;function gd(a,b,c,d){Kb||Ib();var e=hd,f=Kb;Kb=!0;try{Hb(e,a,b,c,d);}finally{(Kb=f)||Mb();}}function id$1(a,b,c,d){ed(dd,hd.bind(null,a,b,c,d));}
	function hd(a,b,c,d){if(fd){var e;if((e=0===(b&4))&&0<jc.length&&-1<qc.indexOf(a))a=rc(null,a,b,c,d),jc.push(a);else {var f=yc(a,b,c,d);if(null===f)e&&sc(a,d);else {if(e){if(-1<qc.indexOf(a)){a=rc(f,a,b,c,d);jc.push(a);return}if(uc(f,a,b,c,d))return;sc(a,d);}jd(a,b,d,null,c);}}}}
	function yc(a,b,c,d){var e=xb(d);e=wc(e);if(null!==e){var f=Zb(e);if(null===f)e=null;else {var g=f.tag;if(13===g){e=$b(f);if(null!==e)return e;e=null;}else if(3===g){if(f.stateNode.hydrate)return 3===f.tag?f.stateNode.containerInfo:null;e=null;}else f!==e&&(e=null);}}jd(a,b,d,e,c);return null}var kd=null,ld=null,md=null;
	function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return !0}function qd(){return !1}
	function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}m$1(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
	(a.returnValue=!1),this.isDefaultPrevented=pd);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd);},persist:function(){},isPersistent:pd});return b}
	var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=m$1({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=m$1({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
	a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return "movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=m$1({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=m$1({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=m$1({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=m$1({},sd,{clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=m$1({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
	Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
	119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
	var Qd=m$1({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return "keypress"===a.type?od(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===
	a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=m$1({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=m$1({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=m$1({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=m$1({},Ad,{deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
	deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=fa&&"CompositionEvent"in window,be=null;fa&&"documentMode"in document&&(be=document.documentMode);var ce=fa&&"TextEvent"in window&&!be,de=fa&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
	function ge(a,b){switch(a){case "keyup":return -1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return !0;default:return !1}}function he(a){a=a.detail;return "object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
	function ke(a,b){if(ie)return "compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
	var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}));}var pe=null,qe=null;function re(a){se(a,0);}function te(a){var b=ue(a);if(Wa(b))return a}
	function ve(a,b){if("change"===a)return b}var we=!1;if(fa){var xe;if(fa){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput;}xe=ye;}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode);}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null);}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));a=re;if(Kb)a(b);else {Kb=!0;try{Gb(a,b);}finally{Kb=!1,Mb();}}}}
	function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae();}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge,Ie=Object.prototype.hasOwnProperty;
	function Je(a,b){if(He(a,b))return !0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return !1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return !1;for(d=0;d<c.length;d++)if(!Ie.call(b,c[d])||!He(a[c[d]],b[c[d]]))return !1;return !0}function Ke(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
	function Le(a,b){var c=Ke(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=Ke(c);}}function Me(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Me(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
	function Ne(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=!1;}if(c)a=b.contentWindow;else break;b=Xa(a.document);}return b}function Oe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
	var Pe=fa&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
	function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Oe(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Je(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)));}
	Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
	0);Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Pc(Oc,2);for(var Ve="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),We=0;We<Ve.length;We++)Nc.set(Ve[We],0);ea("onMouseEnter",["mouseout","mouseover"]);
	ea("onMouseLeave",["mouseout","mouseover"]);ea("onPointerEnter",["pointerout","pointerover"]);ea("onPointerLeave",["pointerout","pointerover"]);da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));da("onBeforeInput",["compositionend","keypress","textInput","paste"]);da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));
	da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xe="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ye=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
	function Ze(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Yb(d,b,void 0,a);a.currentTarget=null;}
	function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k;}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k;}}}if(Ub)throw a=Vb,Ub=!1,Vb=null,a;}
	function G(a,b){var c=$e(b),d=a+"__bubble";c.has(d)||(af(b,a,2,!1),c.add(d));}var bf="_reactListening"+Math.random().toString(36).slice(2);function cf(a){a[bf]||(a[bf]=!0,ba.forEach(function(b){Ye.has(b)||df(b,!1,a,null);df(b,!0,a,null);}));}
	function df(a,b,c,d){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,f=c;"selectionchange"===a&&9!==c.nodeType&&(f=c.ownerDocument);if(null!==d&&!b&&Ye.has(a)){if("scroll"!==a)return;e|=2;f=d;}var g=$e(f),h=a+"__"+(b?"capture":"bubble");g.has(h)||(b&&(e|=4),af(f,a,e,b),g.add(h));}
	function af(a,b,c,d){var e=Nc.get(b);switch(void 0===e?2:e){case 0:e=gd;break;case 1:e=id$1;break;default:e=hd;}c=e.bind(null,b,c,a);e=void 0;!Pb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1);}
	function jd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return;}for(;null!==h;){g=wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode;}}d=d.return;}Nb(function(){var d=f,e=xb(c),g=[];
	a:{var h=Mc.get(a);if(void 0!==h){var k=td,x=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":x="focus";k=Fd;break;case "focusout":x="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
	Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case Ic:case Jc:case Kc:k=Hd;break;case Lc:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td;}var w=0!==(b&4),z=!w&&"scroll"===a,u=w?null!==h?h+"Capture":null:h;w=[];for(var t=d,q;null!==
	t;){q=t;var v=q.stateNode;5===q.tag&&null!==v&&(q=v,null!==u&&(v=Ob(t,u),null!=v&&w.push(ef(t,v,q))));if(z)break;t=t.return;}0<w.length&&(h=new k(h,x,null,c,e),g.push({event:h,listeners:w}));}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&0===(b&16)&&(x=c.relatedTarget||c.fromElement)&&(wc(x)||x[ff]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(x=c.relatedTarget||c.toElement,k=d,x=x?wc(x):null,null!==
	x&&(z=Zb(x),x!==z||5!==x.tag&&6!==x.tag))x=null;}else k=null,x=d;if(k!==x){w=Bd;v="onMouseLeave";u="onMouseEnter";t="mouse";if("pointerout"===a||"pointerover"===a)w=Td,v="onPointerLeave",u="onPointerEnter",t="pointer";z=null==k?h:ue(k);q=null==x?h:ue(x);h=new w(v,t+"leave",k,c,e);h.target=z;h.relatedTarget=q;v=null;wc(e)===d&&(w=new w(u,t+"enter",x,c,e),w.target=q,w.relatedTarget=z,v=w);z=v;if(k&&x)b:{w=k;u=x;t=0;for(q=w;q;q=gf(q))t++;q=0;for(v=u;v;v=gf(v))q++;for(;0<t-q;)w=gf(w),t--;for(;0<q-t;)u=
	gf(u),q--;for(;t--;){if(w===u||null!==u&&w===u.alternate)break b;w=gf(w);u=gf(u);}w=null;}else w=null;null!==k&&hf(g,h,k,w,!1);null!==x&&null!==z&&hf(g,z,x,w,!0);}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var J=ve;else if(me(h))if(we)J=Fe;else {J=De;var K=Ce;}else (k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(J=Ee);if(J&&(J=J(a,d))){ne(g,J,c,e);break a}K&&K(a,h,d);"focusout"===a&&(K=h._wrapperState)&&
	K.controlled&&"number"===h.type&&bb(h,"number",h.value);}K=d?ue(d):window;switch(a){case "focusin":if(me(K)||"true"===K.contentEditable)Qe=K,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e);}var Q;if(ae)b:{switch(a){case "compositionstart":var L="onCompositionStart";break b;case "compositionend":L="onCompositionEnd";break b;
	case "compositionupdate":L="onCompositionUpdate";break b}L=void 0;}else ie?ge(a,c)&&(L="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(L="onCompositionStart");L&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==L?"onCompositionEnd"===L&&ie&&(Q=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),K=oe(d,L),0<K.length&&(L=new Ld(L,a,null,c,e),g.push({event:L,listeners:K}),Q?L.data=Q:(Q=he(c),null!==Q&&(L.data=Q))));if(Q=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),0<d.length&&(e=new Ld("onBeforeInput",
	"beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=Q);}se(g,b);});}function ef(a,b,c){return {instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Ob(a,c),null!=f&&d.unshift(ef(a,f,e)),f=Ob(a,b),null!=f&&d.push(ef(a,f,e)));a=a.return;}return d}function gf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
	function hf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Ob(c,f),null!=k&&g.unshift(ef(c,k,h))):e||(k=Ob(c,f),null!=k&&g.push(ef(c,k,h))));c=c.return;}0!==g.length&&a.push({event:b,listeners:g});}function jf(){}var kf=null,lf=null;function mf(a,b){switch(a){case "button":case "input":case "select":case "textarea":return !!b.autoFocus}return !1}
	function nf(a,b){return "textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var of="function"===typeof setTimeout?setTimeout:void 0,pf="function"===typeof clearTimeout?clearTimeout:void 0;function qf(a){1===a.nodeType?a.textContent="":9===a.nodeType&&(a=a.body,null!=a&&(a.textContent=""));}
	function rf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}function sf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--;}else "/$"===c&&b++;}a=a.previousSibling;}return null}var tf=0;function uf(a){return {$$typeof:Ga,toString:a,valueOf:a}}var vf=Math.random().toString(36).slice(2),wf="__reactFiber$"+vf,xf="__reactProps$"+vf,ff="__reactContainer$"+vf,yf="__reactEvents$"+vf;
	function wc(a){var b=a[wf];if(b)return b;for(var c=a.parentNode;c;){if(b=c[ff]||c[wf]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=sf(a);null!==a;){if(c=a[wf])return c;a=sf(a);}return b}a=c;c=a.parentNode;}return null}function Cb(a){a=a[wf]||a[ff];return !a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(y$1(33));}function Db(a){return a[xf]||null}
	function $e(a){var b=a[yf];void 0===b&&(b=a[yf]=new Set);return b}var zf=[],Af=-1;function Bf(a){return {current:a}}function H(a){0>Af||(a.current=zf[Af],zf[Af]=null,Af--);}function I(a,b){Af++;zf[Af]=a.current;a.current=b;}var Cf={},M=Bf(Cf),N=Bf(!1),Df=Cf;
	function Ef(a,b){var c=a.type.contextTypes;if(!c)return Cf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function Ff(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Gf(){H(N);H(M);}function Hf(a,b,c){if(M.current!==Cf)throw Error(y$1(168));I(M,b);I(N,c);}
	function If(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(y$1(108,Ra(b)||"Unknown",e));return m$1({},c,d)}function Jf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Cf;Df=M.current;I(M,a);I(N,N.current);return !0}function Kf(a,b,c){var d=a.stateNode;if(!d)throw Error(y$1(169));c?(a=If(a,b,Df),d.__reactInternalMemoizedMergedChildContext=a,H(N),H(M),I(M,a)):H(N);I(N,c);}
	var Lf=null,Mf=null,Nf=r$1.unstable_runWithPriority,Of=r$1.unstable_scheduleCallback,Pf=r$1.unstable_cancelCallback,Qf=r$1.unstable_shouldYield,Rf=r$1.unstable_requestPaint,Sf=r$1.unstable_now,Tf=r$1.unstable_getCurrentPriorityLevel,Uf=r$1.unstable_ImmediatePriority,Vf=r$1.unstable_UserBlockingPriority,Wf=r$1.unstable_NormalPriority,Xf=r$1.unstable_LowPriority,Yf=r$1.unstable_IdlePriority,Zf={},$f=void 0!==Rf?Rf:function(){},ag=null,bg=null,cg=!1,dg=Sf(),O=1E4>dg?Sf:function(){return Sf()-dg};
	function eg(){switch(Tf()){case Uf:return 99;case Vf:return 98;case Wf:return 97;case Xf:return 96;case Yf:return 95;default:throw Error(y$1(332));}}function fg(a){switch(a){case 99:return Uf;case 98:return Vf;case 97:return Wf;case 96:return Xf;case 95:return Yf;default:throw Error(y$1(332));}}function gg(a,b){a=fg(a);return Nf(a,b)}function hg(a,b,c){a=fg(a);return Of(a,b,c)}function ig(){if(null!==bg){var a=bg;bg=null;Pf(a);}jg();}
	function jg(){if(!cg&&null!==ag){cg=!0;var a=0;try{var b=ag;gg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});ag=null;}catch(c){throw null!==ag&&(ag=ag.slice(a+1)),Of(Uf,ig),c;}finally{cg=!1;}}}var kg=ra.ReactCurrentBatchConfig;function lg(a,b){if(a&&a.defaultProps){b=m$1({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var mg=Bf(null),ng=null,og=null,pg=null;function qg(){pg=og=ng=null;}
	function rg(a){var b=mg.current;H(mg);a.type._context._currentValue=b;}function sg(a,b){for(;null!==a;){var c=a.alternate;if((a.childLanes&b)===b)if(null===c||(c.childLanes&b)===b)break;else c.childLanes|=b;else a.childLanes|=b,null!==c&&(c.childLanes|=b);a=a.return;}}function tg(a,b){ng=a;pg=og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(ug=!0),a.firstContext=null);}
	function vg(a,b){if(pg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)pg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===og){if(null===ng)throw Error(y$1(308));og=b;ng.dependencies={lanes:0,firstContext:b,responders:null};}else og=og.next=b;}return a._currentValue}var wg=!1;function xg(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null};}
	function yg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects});}function zg(a,b){return {eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}function Ag(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b;}}
	function Bg(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next;}while(null!==c);null===f?e=f=b:f=f.next=b;}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
	b;c.lastBaseUpdate=b;}
	function Cg(a,b,c,d){var e=a.updateQueue;wg=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var n=a.alternate;if(null!==n){n=n.updateQueue;var A=n.lastBaseUpdate;A!==g&&(null===A?n.firstBaseUpdate=l:A.next=l,n.lastBaseUpdate=k);}}if(null!==f){A=e.baseState;g=0;n=l=k=null;do{h=f.lane;var p=f.eventTime;if((d&h)===h){null!==n&&(n=n.next={eventTime:p,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,
	next:null});a:{var C=a,x=f;h=b;p=c;switch(x.tag){case 1:C=x.payload;if("function"===typeof C){A=C.call(p,A,h);break a}A=C;break a;case 3:C.flags=C.flags&-4097|64;case 0:C=x.payload;h="function"===typeof C?C.call(p,A,h):C;if(null===h||void 0===h)break a;A=m$1({},A,h);break a;case 2:wg=!0;}}null!==f.callback&&(a.flags|=32,h=e.effects,null===h?e.effects=[f]:h.push(f));}else p={eventTime:p,lane:h,tag:f.tag,payload:f.payload,callback:f.callback,next:null},null===n?(l=n=p,k=A):n=n.next=p,g|=h;f=f.next;if(null===
	f)if(h=e.shared.pending,null===h)break;else f=h.next,h.next=null,e.lastBaseUpdate=h,e.shared.pending=null;}while(1);null===n&&(k=A);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=n;Dg|=g;a.lanes=g;a.memoizedState=A;}}function Eg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(y$1(191,e));e.call(d);}}}var Fg=(new aa.Component).refs;
	function Gg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:m$1({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c);}
	var Kg={isMounted:function(a){return (a=a._reactInternals)?Zb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d);},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d);},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=Hg(),d=Ig(a),e=zg(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=
	b);Ag(a,e);Jg(a,d,c);}};function Lg(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Je(c,d)||!Je(e,f):!0}
	function Mg(a,b,c){var d=!1,e=Cf;var f=b.contextType;"object"===typeof f&&null!==f?f=vg(f):(e=Ff(b)?Df:M.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Ef(a,e):Cf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Kg;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
	function Ng(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Kg.enqueueReplaceState(b,b.state,null);}
	function Og(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Fg;xg(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=vg(f):(f=Ff(b)?Df:M.current,e.context=Ef(a,f));Cg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Gg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
	(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Kg.enqueueReplaceState(e,e.state,null),Cg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4);}var Pg=Array.isArray;
	function Qg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(y$1(309));var d=c.stateNode;}if(!d)throw Error(y$1(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Fg&&(b=d.refs={});null===a?delete b[e]:b[e]=a;};b._stringRef=e;return b}if("string"!==typeof a)throw Error(y$1(284));if(!c._owner)throw Error(y$1(290,a));}return a}
	function Rg(a,b){if("textarea"!==a.type)throw Error(y$1(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b));}
	function Sg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.flags=8;}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Tg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags=2,
	c):d;b.flags=2;return c}function g(b){a&&null===b.alternate&&(b.flags=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Ug(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Qg(a,b,c),d.return=a,d;d=Vg(c.type,c.key,c.props,null,a.mode,d);d.ref=Qg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
	Wg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=Xg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function A(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Ug(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case sa:return c=Vg(b.type,b.key,b.props,null,a.mode,c),c.ref=Qg(a,null,b),c.return=a,c;case ta:return b=Wg(b,a.mode,c),b.return=a,b}if(Pg(b)||La(b))return b=Xg(b,
	a.mode,c,null),b.return=a,b;Rg(a,b);}return null}function p(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case sa:return c.key===e?c.type===ua?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case ta:return c.key===e?l(a,b,c,d):null}if(Pg(c)||La(c))return null!==e?null:n(a,b,c,d,null);Rg(a,c);}return null}function C(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||
	null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case sa:return a=a.get(null===d.key?c:d.key)||null,d.type===ua?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case ta:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Pg(d)||La(d))return a=a.get(c)||null,n(b,a,d,e,null);Rg(b,d);}return null}function x(e,g,h,k){for(var l=null,t=null,u=g,z=g=0,q=null;null!==u&&z<h.length;z++){u.index>z?(q=u,u=null):q=u.sibling;var n=p(e,u,h[z],k);if(null===n){null===u&&(u=q);break}a&&u&&null===
	n.alternate&&b(e,u);g=f(n,g,z);null===t?l=n:t.sibling=n;t=n;u=q;}if(z===h.length)return c(e,u),l;if(null===u){for(;z<h.length;z++)u=A(e,h[z],k),null!==u&&(g=f(u,g,z),null===t?l=u:t.sibling=u,t=u);return l}for(u=d(e,u);z<h.length;z++)q=C(u,e,z,h[z],k),null!==q&&(a&&null!==q.alternate&&u.delete(null===q.key?z:q.key),g=f(q,g,z),null===t?l=q:t.sibling=q,t=q);a&&u.forEach(function(a){return b(e,a)});return l}function w(e,g,h,k){var l=La(h);if("function"!==typeof l)throw Error(y$1(150));h=l.call(h);if(null==
	h)throw Error(y$1(151));for(var t=l=null,u=g,z=g=0,q=null,n=h.next();null!==u&&!n.done;z++,n=h.next()){u.index>z?(q=u,u=null):q=u.sibling;var w=p(e,u,n.value,k);if(null===w){null===u&&(u=q);break}a&&u&&null===w.alternate&&b(e,u);g=f(w,g,z);null===t?l=w:t.sibling=w;t=w;u=q;}if(n.done)return c(e,u),l;if(null===u){for(;!n.done;z++,n=h.next())n=A(e,n.value,k),null!==n&&(g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);return l}for(u=d(e,u);!n.done;z++,n=h.next())n=C(u,e,z,n.value,k),null!==n&&(a&&null!==n.alternate&&
	u.delete(null===n.key?z:n.key),g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);a&&u.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ua&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case sa:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ua){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,k.sibling);
	d=e(k,f.props);d.ref=Qg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling;}f.type===ua?(d=Xg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Vg(f.type,f.key,f.props,null,a.mode,h),h.ref=Qg(a,d,f),h.return=a,a=h);}return g(a);case ta:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else {c(a,d);break}else b(a,d);d=d.sibling;}d=
	Wg(f,a.mode,h);d.return=a;a=d;}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Ug(f,a.mode,h),d.return=a,a=d),g(a);if(Pg(f))return x(a,d,f,h);if(La(f))return w(a,d,f,h);l&&Rg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 22:case 0:case 11:case 15:throw Error(y$1(152,Ra(a.type)||"Component"));}return c(a,d)}}var Yg=Sg(!0),Zg=Sg(!1),$g={},ah=Bf($g),bh=Bf($g),ch=Bf($g);
	function dh(a){if(a===$g)throw Error(y$1(174));return a}function eh(a,b){I(ch,b);I(bh,a);I(ah,$g);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:mb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=mb(b,a);}H(ah);I(ah,b);}function fh(){H(ah);H(bh);H(ch);}function gh(a){dh(ch.current);var b=dh(ah.current);var c=mb(b,a.type);b!==c&&(I(bh,a),I(ah,c));}function hh(a){bh.current===a&&(H(ah),H(bh));}var P=Bf(0);
	function ih(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}return null}var jh=null,kh=null,lh=!1;
	function mh(a,b){var c=nh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.flags=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c;}function oh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return !1;default:return !1}}
	function ph(a){if(lh){var b=kh;if(b){var c=b;if(!oh(a,b)){b=rf(c.nextSibling);if(!b||!oh(a,b)){a.flags=a.flags&-1025|2;lh=!1;jh=a;return}mh(jh,c);}jh=a;kh=rf(b.firstChild);}else a.flags=a.flags&-1025|2,lh=!1,jh=a;}}function qh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;jh=a;}
	function rh(a){if(a!==jh)return !1;if(!lh)return qh(a),lh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!nf(b,a.memoizedProps))for(b=kh;b;)mh(a,b),b=rf(b.nextSibling);qh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(y$1(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){kh=rf(a.nextSibling);break a}b--;}else "$"!==c&&"$!"!==c&&"$?"!==c||b++;}a=a.nextSibling;}kh=null;}}else kh=jh?rf(a.stateNode.nextSibling):null;return !0}
	function sh(){kh=jh=null;lh=!1;}var th=[];function uh(){for(var a=0;a<th.length;a++)th[a]._workInProgressVersionPrimary=null;th.length=0;}var vh=ra.ReactCurrentDispatcher,wh=ra.ReactCurrentBatchConfig,xh=0,R=null,S=null,T=null,yh=!1,zh=!1;function Ah(){throw Error(y$1(321));}function Bh(a,b){if(null===b)return !1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return !1;return !0}
	function Ch(a,b,c,d,e,f){xh=f;R=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;vh.current=null===a||null===a.memoizedState?Dh:Eh;a=c(d,e);if(zh){f=0;do{zh=!1;if(!(25>f))throw Error(y$1(301));f+=1;T=S=null;b.updateQueue=null;vh.current=Fh;a=c(d,e);}while(zh)}vh.current=Gh;b=null!==S&&null!==S.next;xh=0;T=S=R=null;yh=!1;if(b)throw Error(y$1(300));return a}function Hh(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===T?R.memoizedState=T=a:T=T.next=a;return T}
	function Ih(){if(null===S){var a=R.alternate;a=null!==a?a.memoizedState:null;}else a=S.next;var b=null===T?R.memoizedState:T.next;if(null!==b)T=b,S=a;else {if(null===a)throw Error(y$1(310));S=a;a={memoizedState:S.memoizedState,baseState:S.baseState,baseQueue:S.baseQueue,queue:S.queue,next:null};null===T?R.memoizedState=T=a:T=T.next=a;}return T}function Jh(a,b){return "function"===typeof b?b(a):b}
	function Kh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y$1(311));c.lastRenderedReducer=a;var d=S,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g;}d.baseQueue=e=f;c.pending=null;}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.lane;if((xh&l)===l)null!==h&&(h=h.next={lane:0,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),d=k.eagerReducer===a?k.eagerState:a(d,k.action);else {var n={lane:l,action:k.action,eagerReducer:k.eagerReducer,
	eagerState:k.eagerState,next:null};null===h?(g=h=n,f=d):h=h.next=n;R.lanes|=l;Dg|=l;}k=k.next;}while(null!==k&&k!==e);null===h?f=d:h.next=g;He(d,b.memoizedState)||(ug=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d;}return [b.memoizedState,c.dispatch]}
	function Lh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y$1(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f;}return [f,d]}
	function Mh(a,b,c){var d=b._getVersion;d=d(b._source);var e=b._workInProgressVersionPrimary;if(null!==e)a=e===d;else if(a=a.mutableReadLanes,a=(xh&a)===a)b._workInProgressVersionPrimary=d,th.push(b);if(a)return c(b._source);th.push(b);throw Error(y$1(350));}
	function Nh(a,b,c,d){var e=U;if(null===e)throw Error(y$1(349));var f=b._getVersion,g=f(b._source),h=vh.current,k=h.useState(function(){return Mh(e,b,c)}),l=k[1],n=k[0];k=T;var A=a.memoizedState,p=A.refs,C=p.getSnapshot,x=A.source;A=A.subscribe;var w=R;a.memoizedState={refs:p,source:b,subscribe:d};h.useEffect(function(){p.getSnapshot=c;p.setSnapshot=l;var a=f(b._source);if(!He(g,a)){a=c(b._source);He(n,a)||(l(a),a=Ig(w),e.mutableReadLanes|=a&e.pendingLanes);a=e.mutableReadLanes;e.entangledLanes|=a;for(var d=
	e.entanglements,h=a;0<h;){var k=31-Vc(h),v=1<<k;d[k]|=a;h&=~v;}}},[c,b,d]);h.useEffect(function(){return d(b._source,function(){var a=p.getSnapshot,c=p.setSnapshot;try{c(a(b._source));var d=Ig(w);e.mutableReadLanes|=d&e.pendingLanes;}catch(q){c(function(){throw q;});}})},[b,d]);He(C,c)&&He(x,b)&&He(A,d)||(a={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:n},a.dispatch=l=Oh.bind(null,R,a),k.queue=a,k.baseQueue=null,n=Mh(e,b,c),k.memoizedState=k.baseState=n);return n}
	function Ph(a,b,c){var d=Ih();return Nh(d,a,b,c)}function Qh(a){var b=Hh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:a};a=a.dispatch=Oh.bind(null,R,a);return [b.memoizedState,a]}
	function Rh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=R.updateQueue;null===b?(b={lastEffect:null},R.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Sh(a){var b=Hh();a={current:a};return b.memoizedState=a}function Th(){return Ih().memoizedState}function Uh(a,b,c,d){var e=Hh();R.flags|=a;e.memoizedState=Rh(1|b,c,void 0,void 0===d?null:d);}
	function Vh(a,b,c,d){var e=Ih();d=void 0===d?null:d;var f=void 0;if(null!==S){var g=S.memoizedState;f=g.destroy;if(null!==d&&Bh(d,g.deps)){Rh(b,c,f,d);return}}R.flags|=a;e.memoizedState=Rh(1|b,c,f,d);}function Wh(a,b){return Uh(516,4,a,b)}function Xh(a,b){return Vh(516,4,a,b)}function Yh(a,b){return Vh(4,2,a,b)}function Zh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;}}
	function $h(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Vh(4,2,Zh.bind(null,b,a),c)}function ai(){}function bi(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function ci(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}
	function di(a,b){var c=eg();gg(98>c?98:c,function(){a(!0);});gg(97<c?97:c,function(){var c=wh.transition;wh.transition=1;try{a(!1),b();}finally{wh.transition=c;}});}
	function Oh(a,b,c){var d=Hg(),e=Ig(a),f={lane:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.pending;null===g?f.next=f:(f.next=g.next,g.next=f);b.pending=f;g=a.alternate;if(a===R||null!==g&&g===R)zh=yh=!0;else {if(0===a.lanes&&(null===g||0===g.lanes)&&(g=b.lastRenderedReducer,null!==g))try{var h=b.lastRenderedState,k=g(h,c);f.eagerReducer=g;f.eagerState=k;if(He(k,h))return}catch(l){}finally{}Jg(a,e,d);}}
	var Gh={readContext:vg,useCallback:Ah,useContext:Ah,useEffect:Ah,useImperativeHandle:Ah,useLayoutEffect:Ah,useMemo:Ah,useReducer:Ah,useRef:Ah,useState:Ah,useDebugValue:Ah,useDeferredValue:Ah,useTransition:Ah,useMutableSource:Ah,useOpaqueIdentifier:Ah,unstable_isNewReconciler:!1},Dh={readContext:vg,useCallback:function(a,b){Hh().memoizedState=[a,void 0===b?null:b];return a},useContext:vg,useEffect:Wh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Uh(4,2,Zh.bind(null,
	b,a),c)},useLayoutEffect:function(a,b){return Uh(4,2,a,b)},useMemo:function(a,b){var c=Hh();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Hh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Oh.bind(null,R,a);return [d.memoizedState,a]},useRef:Sh,useState:Qh,useDebugValue:ai,useDeferredValue:function(a){var b=Qh(a),c=b[0],d=b[1];Wh(function(){var b=wh.transition;
	wh.transition=1;try{d(a);}finally{wh.transition=b;}},[a]);return c},useTransition:function(){var a=Qh(!1),b=a[0];a=di.bind(null,a[1]);Sh(a);return [a,b]},useMutableSource:function(a,b,c){var d=Hh();d.memoizedState={refs:{getSnapshot:b,setSnapshot:null},source:a,subscribe:c};return Nh(d,a,b,c)},useOpaqueIdentifier:function(){if(lh){var a=!1,b=uf(function(){a||(a=!0,c("r:"+(tf++).toString(36)));throw Error(y$1(355));}),c=Qh(b)[1];0===(R.mode&2)&&(R.flags|=516,Rh(5,function(){c("r:"+(tf++).toString(36));},
	void 0,null));return b}b="r:"+(tf++).toString(36);Qh(b);return b},unstable_isNewReconciler:!1},Eh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Kh,useRef:Th,useState:function(){return Kh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Kh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a);}finally{wh.transition=b;}},[a]);return c},useTransition:function(){var a=Kh(Jh)[0];return [Th().current,
	a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Kh(Jh)[0]},unstable_isNewReconciler:!1},Fh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Lh,useRef:Th,useState:function(){return Lh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Lh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a);}finally{wh.transition=b;}},[a]);return c},useTransition:function(){var a=Lh(Jh)[0];return [Th().current,
	a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Lh(Jh)[0]},unstable_isNewReconciler:!1},ei=ra.ReactCurrentOwner,ug=!1;function fi(a,b,c,d){b.child=null===a?Zg(b,null,c,d):Yg(b,a.child,c,d);}function gi(a,b,c,d,e){c=c.render;var f=b.ref;tg(b,e);d=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,d,e);return b.child}
	function ii(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!ji(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ki(a,b,g,d,e,f);a=Vg(c.type,null,d,b,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(0===(e&f)&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Je,c(e,d)&&a.ref===b.ref))return hi(a,b,f);b.flags|=1;a=Tg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
	function ki(a,b,c,d,e,f){if(null!==a&&Je(a.memoizedProps,d)&&a.ref===b.ref)if(ug=!1,0!==(f&e))0!==(a.flags&16384)&&(ug=!0);else return b.lanes=a.lanes,hi(a,b,f);return li(a,b,c,d,f)}
	function mi(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode||"unstable-defer-without-hiding"===d.mode)if(0===(b.mode&4))b.memoizedState={baseLanes:0},ni(b,c);else if(0!==(c&1073741824))b.memoizedState={baseLanes:0},ni(b,null!==f?f.baseLanes:c);else return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a},ni(b,a),null;else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,ni(b,d);fi(a,b,e,c);return b.child}
	function oi(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=128;}function li(a,b,c,d,e){var f=Ff(c)?Df:M.current;f=Ef(b,f);tg(b,e);c=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,c,e);return b.child}
	function pi(a,b,c,d,e){if(Ff(c)){var f=!0;Jf(b);}else f=!1;tg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),Mg(b,c,d),Og(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=vg(l):(l=Ff(c)?Df:M.current,l=Ef(b,l));var n=c.getDerivedStateFromProps,A="function"===typeof n||"function"===typeof g.getSnapshotBeforeUpdate;A||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
	"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Ng(b,g,d,l);wg=!1;var p=b.memoizedState;g.state=p;Cg(b,d,g,e);k=b.memoizedState;h!==d||p!==k||N.current||wg?("function"===typeof n&&(Gg(b,c,n,d),k=b.memoizedState),(h=wg||Lg(b,c,h,d,p,k,l))?(A||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
	typeof g.componentDidMount&&(b.flags|=4)):("function"===typeof g.componentDidMount&&(b.flags|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4),d=!1);}else {g=b.stateNode;yg(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:lg(b.type,h);g.props=l;A=b.pendingProps;p=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=vg(k):(k=Ff(c)?Df:M.current,k=Ef(b,k));var C=c.getDerivedStateFromProps;(n="function"===typeof C||
	"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==A||p!==k)&&Ng(b,g,d,k);wg=!1;p=b.memoizedState;g.state=p;Cg(b,d,g,e);var x=b.memoizedState;h!==A||p!==x||N.current||wg?("function"===typeof C&&(Gg(b,c,C,d),x=b.memoizedState),(l=wg||Lg(b,c,l,d,p,x,k))?(n||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
	x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||
	h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),d=!1);}return qi(a,b,c,d,f,e)}
	function qi(a,b,c,d,e,f){oi(a,b);var g=0!==(b.flags&64);if(!d&&!g)return e&&Kf(b,c,!1),hi(a,b,f);d=b.stateNode;ei.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Yg(b,a.child,null,f),b.child=Yg(b,null,h,f)):fi(a,b,h,f);b.memoizedState=d.state;e&&Kf(b,c,!0);return b.child}function ri(a){var b=a.stateNode;b.pendingContext?Hf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Hf(a,b.context,!1);eh(a,b.containerInfo);}
	var si={dehydrated:null,retryLane:0};
	function ti(a,b,c){var d=b.pendingProps,e=P.current,f=!1,g;(g=0!==(b.flags&64))||(g=null!==a&&null===a.memoizedState?!1:0!==(e&2));g?(f=!0,b.flags&=-65):null!==a&&null===a.memoizedState||void 0===d.fallback||!0===d.unstable_avoidThisFallback||(e|=1);I(P,e&1);if(null===a){void 0!==d.fallback&&ph(b);a=d.children;e=d.fallback;if(f)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},b.memoizedState=si,a;if("number"===typeof d.unstable_expectedLoadTime)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},
	b.memoizedState=si,b.lanes=33554432,a;c=vi({mode:"visible",children:a},b.mode,c,null);c.return=b;return b.child=c}if(null!==a.memoizedState){if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:
	{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}function ui(a,b,c,d){var e=a.mode,f=a.child;b={mode:"hidden",children:b};0===(e&2)&&null!==f?(f.childLanes=0,f.pendingProps=b):f=vi(b,e,0,null);c=Xg(c,e,d,null);f.return=a;c.return=a;f.sibling=c;a.child=f;return c}
	function xi(a,b,c,d){var e=a.child;a=e.sibling;c=Tg(e,{mode:"visible",children:c});0===(b.mode&2)&&(c.lanes=d);c.return=b;c.sibling=null;null!==a&&(a.nextEffect=null,a.flags=8,b.firstEffect=b.lastEffect=a);return b.child=c}
	function wi(a,b,c,d,e){var f=b.mode,g=a.child;a=g.sibling;var h={mode:"hidden",children:c};0===(f&2)&&b.child!==g?(c=b.child,c.childLanes=0,c.pendingProps=h,g=c.lastEffect,null!==g?(b.firstEffect=c.firstEffect,b.lastEffect=g,g.nextEffect=null):b.firstEffect=b.lastEffect=null):c=Tg(g,h);null!==a?d=Tg(a,d):(d=Xg(d,f,e,null),d.flags|=2);d.return=b;c.return=b;c.sibling=d;b.child=c;return d}function yi(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);sg(a.return,b);}
	function zi(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailMode=e,g.lastEffect=f);}
	function Ai(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;fi(a,b,d.children,c);d=P.current;if(0!==(d&2))d=d&1|2,b.flags|=64;else {if(null!==a&&0!==(a.flags&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&yi(a,c);else if(19===a.tag)yi(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}d&=1;}I(P,d);if(0===(b.mode&2))b.memoizedState=
	null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===ih(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);zi(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===ih(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a;}zi(b,!0,c,null,f,b.lastEffect);break;case "together":zi(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null;}return b.child}
	function hi(a,b,c){null!==a&&(b.dependencies=a.dependencies);Dg|=b.lanes;if(0!==(c&b.childLanes)){if(null!==a&&b.child!==a.child)throw Error(y$1(153));if(null!==b.child){a=b.child;c=Tg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Tg(a,a.pendingProps),c.return=b;c.sibling=null;}return b.child}return null}var Bi,Ci,Di,Ei;
	Bi=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};Ci=function(){};
	Di=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;dh(ah.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "option":e=eb(a,e);d=eb(a,d);f=[];break;case "select":e=m$1({},e,{value:void 0});d=m$1({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=jf);}vb(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===
	l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="");}else "dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ca.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||
	(c={}),c[g]=k[g]);}else c||(f||(f=[]),f.push(l,c)),c=k;else "dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ca.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&G("scroll",a),f||h===k||(f=[])):"object"===typeof k&&null!==k&&k.$$typeof===Ga?k.toString():(f=f||[]).push(l,k));}c&&(f=f||[]).push("style",
	c);var l=f;if(b.updateQueue=l)b.flags|=4;}};Ei=function(a,b,c,d){c!==d&&(b.flags|=4);};function Fi(a,b){if(!lh)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null;}}
	function Gi(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ff(b.type)&&Gf(),null;case 3:fh();H(N);H(M);uh();d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)rh(b)?b.flags|=4:d.hydrate||(b.flags|=256);Ci(b);return null;case 5:hh(b);var e=dh(ch.current);c=b.type;if(null!==a&&null!=b.stateNode)Di(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=128);else {if(!d){if(null===
	b.stateNode)throw Error(y$1(166));return null}a=dh(ah.current);if(rh(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[wf]=b;d[xf]=f;switch(c){case "dialog":G("cancel",d);G("close",d);break;case "iframe":case "object":case "embed":G("load",d);break;case "video":case "audio":for(a=0;a<Xe.length;a++)G(Xe[a],d);break;case "source":G("error",d);break;case "img":case "image":case "link":G("error",d);G("load",d);break;case "details":G("toggle",d);break;case "input":Za(d,f);G("invalid",d);break;case "select":d._wrapperState=
	{wasMultiple:!!f.multiple};G("invalid",d);break;case "textarea":hb(d,f),G("invalid",d);}vb(c,f);a=null;for(var g in f)f.hasOwnProperty(g)&&(e=f[g],"children"===g?"string"===typeof e?d.textContent!==e&&(a=["children",e]):"number"===typeof e&&d.textContent!==""+e&&(a=["children",""+e]):ca.hasOwnProperty(g)&&null!=e&&"onScroll"===g&&G("scroll",d));switch(c){case "input":Va(d);cb(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=
	jf);}d=a;b.updateQueue=d;null!==d&&(b.flags|=4);}else {g=9===e.nodeType?e:e.ownerDocument;a===kb.html&&(a=lb(c));a===kb.html?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[wf]=b;a[xf]=d;Bi(a,b,!1,!1);b.stateNode=a;g=wb(c,d);switch(c){case "dialog":G("cancel",a);G("close",a);
	e=d;break;case "iframe":case "object":case "embed":G("load",a);e=d;break;case "video":case "audio":for(e=0;e<Xe.length;e++)G(Xe[e],a);e=d;break;case "source":G("error",a);e=d;break;case "img":case "image":case "link":G("error",a);G("load",a);e=d;break;case "details":G("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);G("invalid",a);break;case "option":e=eb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=m$1({},d,{value:void 0});G("invalid",a);break;case "textarea":hb(a,d);e=
	gb(a,d);G("invalid",a);break;default:e=d;}vb(c,e);var h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?tb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&ob(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&pb(a,k):"number"===typeof k&&pb(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ca.hasOwnProperty(f)?null!=k&&"onScroll"===f&&G("scroll",a):null!=k&&qa(a,f,k,g));}switch(c){case "input":Va(a);cb(a,d,!1);
	break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&(a.onclick=jf);}mf(c,d)&&(b.flags|=4);}null!==b.ref&&(b.flags|=128);}return null;case 6:if(a&&null!=b.stateNode)Ei(a,b,a.memoizedProps,d);else {if("string"!==typeof d&&null===b.stateNode)throw Error(y$1(166));
	c=dh(ch.current);dh(ah.current);rh(b)?(d=b.stateNode,c=b.memoizedProps,d[wf]=b,d.nodeValue!==c&&(b.flags|=4)):(d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[wf]=b,b.stateNode=d);}return null;case 13:H(P);d=b.memoizedState;if(0!==(b.flags&64))return b.lanes=c,b;d=null!==d;c=!1;null===a?void 0!==b.memoizedProps.fallback&&rh(b):c=null!==a.memoizedState;if(d&&!c&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(P.current&1))0===V&&(V=3);else {if(0===V||3===V)V=
	4;null===U||0===(Dg&134217727)&&0===(Hi&134217727)||Ii(U,W);}if(d||c)b.flags|=4;return null;case 4:return fh(),Ci(b),null===a&&cf(b.stateNode.containerInfo),null;case 10:return rg(b),null;case 17:return Ff(b.type)&&Gf(),null;case 19:H(P);d=b.memoizedState;if(null===d)return null;f=0!==(b.flags&64);g=d.rendering;if(null===g)if(f)Fi(d,!1);else {if(0!==V||null!==a&&0!==(a.flags&64))for(a=b.child;null!==a;){g=ih(a);if(null!==g){b.flags|=64;Fi(d,!1);f=g.updateQueue;null!==f&&(b.updateQueue=f,b.flags|=4);
	null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=2,f.nextEffect=null,f.firstEffect=null,f.lastEffect=null,g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,
	f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;I(P,P.current&1|2);return b.child}a=a.sibling;}null!==d.tail&&O()>Ji&&(b.flags|=64,f=!0,Fi(d,!1),b.lanes=33554432);}else {if(!f)if(a=ih(g),null!==a){if(b.flags|=64,f=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Fi(d,!0),null===d.tail&&"hidden"===d.tailMode&&!g.alternate&&!lh)return b=b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*O()-d.renderingStartTime>Ji&&1073741824!==c&&(b.flags|=
	64,f=!0,Fi(d,!1),b.lanes=33554432);d.isBackwards?(g.sibling=b.child,b.child=g):(c=d.last,null!==c?c.sibling=g:b.child=g,d.last=g);}return null!==d.tail?(c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=O(),c.sibling=null,b=P.current,I(P,f?b&1|2:b&1),c):null;case 23:case 24:return Ki(),null!==a&&null!==a.memoizedState!==(null!==b.memoizedState)&&"unstable-defer-without-hiding"!==d.mode&&(b.flags|=4),null}throw Error(y$1(156,b.tag));}
	function Li(a){switch(a.tag){case 1:Ff(a.type)&&Gf();var b=a.flags;return b&4096?(a.flags=b&-4097|64,a):null;case 3:fh();H(N);H(M);uh();b=a.flags;if(0!==(b&64))throw Error(y$1(285));a.flags=b&-4097|64;return a;case 5:return hh(a),null;case 13:return H(P),b=a.flags,b&4096?(a.flags=b&-4097|64,a):null;case 19:return H(P),null;case 4:return fh(),null;case 10:return rg(a),null;case 23:case 24:return Ki(),null;default:return null}}
	function Mi(a,b){try{var c="",d=b;do c+=Qa(d),d=d.return;while(d);var e=c;}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack;}return {value:a,source:b,stack:e}}function Ni(a,b){try{console.error(b.value);}catch(c){setTimeout(function(){throw c;});}}var Oi="function"===typeof WeakMap?WeakMap:Map;function Pi(a,b,c){c=zg(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Qi||(Qi=!0,Ri=d);Ni(a,b);};return c}
	function Si(a,b,c){c=zg(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ni(a,b);return d(e)};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ti?Ti=new Set([this]):Ti.add(this),Ni(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""});});return c}var Ui="function"===typeof WeakSet?WeakSet:Set;
	function Vi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null);}catch(c){Wi(a,c);}else b.current=null;}function Xi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.flags&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:lg(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b;}return;case 3:b.flags&256&&qf(b.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(y$1(163));}
	function Yi(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{if(3===(a.tag&3)){var d=a.create;a.destroy=d();}a=a.next;}while(a!==b)}b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{var e=a;d=e.next;e=e.tag;0!==(e&4)&&0!==(e&1)&&(Zi(c,a),$i(c,a));a=d;}while(a!==b)}return;case 1:a=c.stateNode;c.flags&4&&(null===b?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:lg(c.type,b.memoizedProps),a.componentDidUpdate(d,
	b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)));b=c.updateQueue;null!==b&&Eg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode;}Eg(c,b,a);}return;case 5:a=c.stateNode;null===b&&c.flags&4&&mf(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Cc(c))));
	return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(y$1(163));}
	function aj(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d=d.style,"function"===typeof d.setProperty?d.setProperty("display","none","important"):d.display="none";else {d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=sb("display",e);}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if((23!==c.tag&&24!==c.tag||null===c.memoizedState||c===a)&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===
	a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}}
	function bj(a,b){if(Mf&&"function"===typeof Mf.onCommitFiberUnmount)try{Mf.onCommitFiberUnmount(Lf,b);}catch(f){}switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var c=a=a.next;do{var d=c,e=d.destroy;d=d.tag;if(void 0!==e)if(0!==(d&4))Zi(b,c);else {d=b;try{e();}catch(f){Wi(d,f);}}c=c.next;}while(c!==a)}break;case 1:Vi(b);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount();}catch(f){Wi(b,
	f);}break;case 5:Vi(b);break;case 4:cj(a,b);}}function dj(a){a.alternate=null;a.child=null;a.dependencies=null;a.firstEffect=null;a.lastEffect=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.return=null;a.updateQueue=null;}function ej(a){return 5===a.tag||3===a.tag||4===a.tag}
	function fj(a){a:{for(var b=a.return;null!==b;){if(ej(b))break a;b=b.return;}throw Error(y$1(160));}var c=b;b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(y$1(161));}c.flags&16&&(pb(b,""),c.flags&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||ej(c.return)){c=null;break a}c=c.return;}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.flags&2)continue b;if(null===
	c.child||4===c.tag)continue b;else c.child.return=c,c=c.child;}if(!(c.flags&2)){c=c.stateNode;break a}}d?gj(a,c,b):hj(a,c,b);}
	function gj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=jf));else if(4!==d&&(a=a.child,null!==a))for(gj(a,b,c),a=a.sibling;null!==a;)gj(a,b,c),a=a.sibling;}
	function hj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(hj(a,b,c),a=a.sibling;null!==a;)hj(a,b,c),a=a.sibling;}
	function cj(a,b){for(var c=b,d=!1,e,f;;){if(!d){d=c.return;a:for(;;){if(null===d)throw Error(y$1(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return;}d=!0;}if(5===c.tag||6===c.tag){a:for(var g=a,h=c,k=h;;)if(bj(g,k),null!==k.child&&4!==k.tag)k.child.return=k,k=k.child;else {if(k===h)break a;for(;null===k.sibling;){if(null===k.return||k.return===h)break a;k=k.return;}k.sibling.return=k.return;k=k.sibling;}f?(g=e,h=c.stateNode,
	8===g.nodeType?g.parentNode.removeChild(h):g.removeChild(h)):e.removeChild(c.stateNode);}else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(bj(a,c),null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;4===c.tag&&(d=!1);}c.sibling.return=c.return;c=c.sibling;}}
	function ij(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:var c=b.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do 3===(d.tag&3)&&(a=d.destroy,d.destroy=void 0,void 0!==a&&a()),d=d.next;while(d!==c)}return;case 1:return;case 5:c=b.stateNode;if(null!=c){d=b.memoizedProps;var e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[xf]=d;"input"===a&&"radio"===d.type&&null!=d.name&&$a(c,d);wb(a,e);b=wb(a,d);for(e=0;e<f.length;e+=
	2){var g=f[e],h=f[e+1];"style"===g?tb(c,h):"dangerouslySetInnerHTML"===g?ob(c,h):"children"===g?pb(c,h):qa(c,g,h,b);}switch(a){case "input":ab(c,d);break;case "textarea":ib(c,d);break;case "select":a=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?fb(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?fb(c,!!d.multiple,d.defaultValue,!0):fb(c,!!d.multiple,d.multiple?[]:"",!1));}}}return;case 6:if(null===b.stateNode)throw Error(y$1(162));b.stateNode.nodeValue=
	b.memoizedProps;return;case 3:c=b.stateNode;c.hydrate&&(c.hydrate=!1,Cc(c.containerInfo));return;case 12:return;case 13:null!==b.memoizedState&&(jj=O(),aj(b.child,!0));kj(b);return;case 19:kj(b);return;case 17:return;case 23:case 24:aj(b,null!==b.memoizedState);return}throw Error(y$1(163));}function kj(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Ui);b.forEach(function(b){var d=lj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d));});}}
	function mj(a,b){return null!==a&&(a=a.memoizedState,null===a||null!==a.dehydrated)?(b=b.memoizedState,null!==b&&null===b.dehydrated):!1}var nj=Math.ceil,oj=ra.ReactCurrentDispatcher,pj=ra.ReactCurrentOwner,X=0,U=null,Y=null,W=0,qj=0,rj=Bf(0),V=0,sj=null,tj=0,Dg=0,Hi=0,uj=0,vj=null,jj=0,Ji=Infinity;function wj(){Ji=O()+500;}var Z=null,Qi=!1,Ri=null,Ti=null,xj=!1,yj=null,zj=90,Aj=[],Bj=[],Cj=null,Dj=0,Ej=null,Fj=-1,Gj=0,Hj=0,Ij=null,Jj=!1;function Hg(){return 0!==(X&48)?O():-1!==Fj?Fj:Fj=O()}
	function Ig(a){a=a.mode;if(0===(a&2))return 1;if(0===(a&4))return 99===eg()?1:2;0===Gj&&(Gj=tj);if(0!==kg.transition){0!==Hj&&(Hj=null!==vj?vj.pendingLanes:0);a=Gj;var b=4186112&~Hj;b&=-b;0===b&&(a=4186112&~a,b=a&-a,0===b&&(b=8192));return b}a=eg();0!==(X&4)&&98===a?a=Xc(12,Gj):(a=Sc(a),a=Xc(a,Gj));return a}
	function Jg(a,b,c){if(50<Dj)throw Dj=0,Ej=null,Error(y$1(185));a=Kj(a,b);if(null===a)return null;$c(a,b,c);a===U&&(Hi|=b,4===V&&Ii(a,W));var d=eg();1===b?0!==(X&8)&&0===(X&48)?Lj(a):(Mj(a,c),0===X&&(wj(),ig())):(0===(X&4)||98!==d&&99!==d||(null===Cj?Cj=new Set([a]):Cj.add(a)),Mj(a,c));vj=a;}function Kj(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}
	function Mj(a,b){for(var c=a.callbackNode,d=a.suspendedLanes,e=a.pingedLanes,f=a.expirationTimes,g=a.pendingLanes;0<g;){var h=31-Vc(g),k=1<<h,l=f[h];if(-1===l){if(0===(k&d)||0!==(k&e)){l=b;Rc(k);var n=F;f[h]=10<=n?l+250:6<=n?l+5E3:-1;}}else l<=b&&(a.expiredLanes|=k);g&=~k;}d=Uc(a,a===U?W:0);b=F;if(0===d)null!==c&&(c!==Zf&&Pf(c),a.callbackNode=null,a.callbackPriority=0);else {if(null!==c){if(a.callbackPriority===b)return;c!==Zf&&Pf(c);}15===b?(c=Lj.bind(null,a),null===ag?(ag=[c],bg=Of(Uf,jg)):ag.push(c),
	c=Zf):14===b?c=hg(99,Lj.bind(null,a)):(c=Tc(b),c=hg(c,Nj.bind(null,a)));a.callbackPriority=b;a.callbackNode=c;}}
	function Nj(a){Fj=-1;Hj=Gj=0;if(0!==(X&48))throw Error(y$1(327));var b=a.callbackNode;if(Oj()&&a.callbackNode!==b)return null;var c=Uc(a,a===U?W:0);if(0===c)return null;var d=c;var e=X;X|=16;var f=Pj();if(U!==a||W!==d)wj(),Qj(a,d);do try{Rj();break}catch(h){Sj(a,h);}while(1);qg();oj.current=f;X=e;null!==Y?d=0:(U=null,W=0,d=V);if(0!==(tj&Hi))Qj(a,0);else if(0!==d){2===d&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),c=Wc(a),0!==c&&(d=Tj(a,c)));if(1===d)throw b=sj,Qj(a,0),Ii(a,c),Mj(a,O()),b;a.finishedWork=
	a.current.alternate;a.finishedLanes=c;switch(d){case 0:case 1:throw Error(y$1(345));case 2:Uj(a);break;case 3:Ii(a,c);if((c&62914560)===c&&(d=jj+500-O(),10<d)){if(0!==Uc(a,0))break;e=a.suspendedLanes;if((e&c)!==c){Hg();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=of(Uj.bind(null,a),d);break}Uj(a);break;case 4:Ii(a,c);if((c&4186112)===c)break;d=a.eventTimes;for(e=-1;0<c;){var g=31-Vc(c);f=1<<g;g=d[g];g>e&&(e=g);c&=~f;}c=e;c=O()-c;c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>
	c?4320:1960*nj(c/1960))-c;if(10<c){a.timeoutHandle=of(Uj.bind(null,a),c);break}Uj(a);break;case 5:Uj(a);break;default:throw Error(y$1(329));}}Mj(a,O());return a.callbackNode===b?Nj.bind(null,a):null}function Ii(a,b){b&=~uj;b&=~Hi;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-Vc(b),d=1<<c;a[c]=-1;b&=~d;}}
	function Lj(a){if(0!==(X&48))throw Error(y$1(327));Oj();if(a===U&&0!==(a.expiredLanes&W)){var b=W;var c=Tj(a,b);0!==(tj&Hi)&&(b=Uc(a,b),c=Tj(a,b));}else b=Uc(a,0),c=Tj(a,b);0!==a.tag&&2===c&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),b=Wc(a),0!==b&&(c=Tj(a,b)));if(1===c)throw c=sj,Qj(a,0),Ii(a,b),Mj(a,O()),c;a.finishedWork=a.current.alternate;a.finishedLanes=b;Uj(a);Mj(a,O());return null}
	function Vj(){if(null!==Cj){var a=Cj;Cj=null;a.forEach(function(a){a.expiredLanes|=24&a.pendingLanes;Mj(a,O());});}ig();}function Wj(a,b){var c=X;X|=1;try{return a(b)}finally{X=c,0===X&&(wj(),ig());}}function Xj(a,b){var c=X;X&=-2;X|=8;try{return a(b)}finally{X=c,0===X&&(wj(),ig());}}function ni(a,b){I(rj,qj);qj|=b;tj|=b;}function Ki(){qj=rj.current;H(rj);}
	function Qj(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,pf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Gf();break;case 3:fh();H(N);H(M);uh();break;case 5:hh(d);break;case 4:fh();break;case 13:H(P);break;case 19:H(P);break;case 10:rg(d);break;case 23:case 24:Ki();}c=c.return;}U=a;Y=Tg(a.current,null);W=qj=tj=b;V=0;sj=null;uj=Hi=Dg=0;}
	function Sj(a,b){do{var c=Y;try{qg();vh.current=Gh;if(yh){for(var d=R.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next;}yh=!1;}xh=0;T=S=R=null;zh=!1;pj.current=null;if(null===c||null===c.return){V=1;sj=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=W;h.flags|=2048;h.firstEffect=h.lastEffect=null;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k;if(0===(h.mode&2)){var n=h.alternate;n?(h.updateQueue=n.updateQueue,h.memoizedState=n.memoizedState,h.lanes=n.lanes):
	(h.updateQueue=null,h.memoizedState=null);}var A=0!==(P.current&1),p=g;do{var C;if(C=13===p.tag){var x=p.memoizedState;if(null!==x)C=null!==x.dehydrated?!0:!1;else {var w=p.memoizedProps;C=void 0===w.fallback?!1:!0!==w.unstable_avoidThisFallback?!0:A?!1:!0;}}if(C){var z=p.updateQueue;if(null===z){var u=new Set;u.add(l);p.updateQueue=u;}else z.add(l);if(0===(p.mode&2)){p.flags|=64;h.flags|=16384;h.flags&=-2981;if(1===h.tag)if(null===h.alternate)h.tag=17;else {var t=zg(-1,1);t.tag=2;Ag(h,t);}h.lanes|=1;break a}k=
	void 0;h=b;var q=f.pingCache;null===q?(q=f.pingCache=new Oi,k=new Set,q.set(l,k)):(k=q.get(l),void 0===k&&(k=new Set,q.set(l,k)));if(!k.has(h)){k.add(h);var v=Yj.bind(null,f,l,h);l.then(v,v);}p.flags|=4096;p.lanes=b;break a}p=p.return;}while(null!==p);k=Error((Ra(h.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");}5!==V&&(V=2);k=Mi(k,h);p=
	g;do{switch(p.tag){case 3:f=k;p.flags|=4096;b&=-b;p.lanes|=b;var J=Pi(p,f,b);Bg(p,J);break a;case 1:f=k;var K=p.type,Q=p.stateNode;if(0===(p.flags&64)&&("function"===typeof K.getDerivedStateFromError||null!==Q&&"function"===typeof Q.componentDidCatch&&(null===Ti||!Ti.has(Q)))){p.flags|=4096;b&=-b;p.lanes|=b;var L=Si(p,f,b);Bg(p,L);break a}}p=p.return;}while(null!==p)}Zj(c);}catch(va){b=va;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}
	function Pj(){var a=oj.current;oj.current=Gh;return null===a?Gh:a}function Tj(a,b){var c=X;X|=16;var d=Pj();U===a&&W===b||Qj(a,b);do try{ak();break}catch(e){Sj(a,e);}while(1);qg();X=c;oj.current=d;if(null!==Y)throw Error(y$1(261));U=null;W=0;return V}function ak(){for(;null!==Y;)bk(Y);}function Rj(){for(;null!==Y&&!Qf();)bk(Y);}function bk(a){var b=ck(a.alternate,a,qj);a.memoizedProps=a.pendingProps;null===b?Zj(a):Y=b;pj.current=null;}
	function Zj(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&2048)){c=Gi(c,b,qj);if(null!==c){Y=c;return}c=b;if(24!==c.tag&&23!==c.tag||null===c.memoizedState||0!==(qj&1073741824)||0===(c.mode&4)){for(var d=0,e=c.child;null!==e;)d|=e.lanes|e.childLanes,e=e.sibling;c.childLanes=d;}null!==a&&0===(a.flags&2048)&&(null===a.firstEffect&&(a.firstEffect=b.firstEffect),null!==b.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=b.firstEffect),a.lastEffect=b.lastEffect),1<b.flags&&(null!==
	a.lastEffect?a.lastEffect.nextEffect=b:a.firstEffect=b,a.lastEffect=b));}else {c=Li(b);if(null!==c){c.flags&=2047;Y=c;return}null!==a&&(a.firstEffect=a.lastEffect=null,a.flags|=2048);}b=b.sibling;if(null!==b){Y=b;return}Y=b=a;}while(null!==b);0===V&&(V=5);}function Uj(a){var b=eg();gg(99,dk.bind(null,a,b));return null}
	function dk(a,b){do Oj();while(null!==yj);if(0!==(X&48))throw Error(y$1(327));var c=a.finishedWork;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(y$1(177));a.callbackNode=null;var d=c.lanes|c.childLanes,e=d,f=a.pendingLanes&~e;a.pendingLanes=e;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=e;a.mutableReadLanes&=e;a.entangledLanes&=e;e=a.entanglements;for(var g=a.eventTimes,h=a.expirationTimes;0<f;){var k=31-Vc(f),l=1<<k;e[k]=0;g[k]=-1;h[k]=-1;f&=~l;}null!==
	Cj&&0===(d&24)&&Cj.has(a)&&Cj.delete(a);a===U&&(Y=U=null,W=0);1<c.flags?null!==c.lastEffect?(c.lastEffect.nextEffect=c,d=c.firstEffect):d=c:d=c.firstEffect;if(null!==d){e=X;X|=32;pj.current=null;kf=fd;g=Ne();if(Oe(g)){if("selectionStart"in g)h={start:g.selectionStart,end:g.selectionEnd};else a:if(h=(h=g.ownerDocument)&&h.defaultView||window,(l=h.getSelection&&h.getSelection())&&0!==l.rangeCount){h=l.anchorNode;f=l.anchorOffset;k=l.focusNode;l=l.focusOffset;try{h.nodeType,k.nodeType;}catch(va){h=null;
	break a}var n=0,A=-1,p=-1,C=0,x=0,w=g,z=null;b:for(;;){for(var u;;){w!==h||0!==f&&3!==w.nodeType||(A=n+f);w!==k||0!==l&&3!==w.nodeType||(p=n+l);3===w.nodeType&&(n+=w.nodeValue.length);if(null===(u=w.firstChild))break;z=w;w=u;}for(;;){if(w===g)break b;z===h&&++C===f&&(A=n);z===k&&++x===l&&(p=n);if(null!==(u=w.nextSibling))break;w=z;z=w.parentNode;}w=u;}h=-1===A||-1===p?null:{start:A,end:p};}else h=null;h=h||{start:0,end:0};}else h=null;lf={focusedElem:g,selectionRange:h};fd=!1;Ij=null;Jj=!1;Z=d;do try{ek();}catch(va){if(null===
	Z)throw Error(y$1(330));Wi(Z,va);Z=Z.nextEffect;}while(null!==Z);Ij=null;Z=d;do try{for(g=a;null!==Z;){var t=Z.flags;t&16&&pb(Z.stateNode,"");if(t&128){var q=Z.alternate;if(null!==q){var v=q.ref;null!==v&&("function"===typeof v?v(null):v.current=null);}}switch(t&1038){case 2:fj(Z);Z.flags&=-3;break;case 6:fj(Z);Z.flags&=-3;ij(Z.alternate,Z);break;case 1024:Z.flags&=-1025;break;case 1028:Z.flags&=-1025;ij(Z.alternate,Z);break;case 4:ij(Z.alternate,Z);break;case 8:h=Z;cj(g,h);var J=h.alternate;dj(h);null!==
	J&&dj(J);}Z=Z.nextEffect;}}catch(va){if(null===Z)throw Error(y$1(330));Wi(Z,va);Z=Z.nextEffect;}while(null!==Z);v=lf;q=Ne();t=v.focusedElem;g=v.selectionRange;if(q!==t&&t&&t.ownerDocument&&Me(t.ownerDocument.documentElement,t)){null!==g&&Oe(t)&&(q=g.start,v=g.end,void 0===v&&(v=q),"selectionStart"in t?(t.selectionStart=q,t.selectionEnd=Math.min(v,t.value.length)):(v=(q=t.ownerDocument||document)&&q.defaultView||window,v.getSelection&&(v=v.getSelection(),h=t.textContent.length,J=Math.min(g.start,h),g=void 0===
	g.end?J:Math.min(g.end,h),!v.extend&&J>g&&(h=g,g=J,J=h),h=Le(t,J),f=Le(t,g),h&&f&&(1!==v.rangeCount||v.anchorNode!==h.node||v.anchorOffset!==h.offset||v.focusNode!==f.node||v.focusOffset!==f.offset)&&(q=q.createRange(),q.setStart(h.node,h.offset),v.removeAllRanges(),J>g?(v.addRange(q),v.extend(f.node,f.offset)):(q.setEnd(f.node,f.offset),v.addRange(q))))));q=[];for(v=t;v=v.parentNode;)1===v.nodeType&&q.push({element:v,left:v.scrollLeft,top:v.scrollTop});"function"===typeof t.focus&&t.focus();for(t=
	0;t<q.length;t++)v=q[t],v.element.scrollLeft=v.left,v.element.scrollTop=v.top;}fd=!!kf;lf=kf=null;a.current=c;Z=d;do try{for(t=a;null!==Z;){var K=Z.flags;K&36&&Yi(t,Z.alternate,Z);if(K&128){q=void 0;var Q=Z.ref;if(null!==Q){var L=Z.stateNode;switch(Z.tag){case 5:q=L;break;default:q=L;}"function"===typeof Q?Q(q):Q.current=q;}}Z=Z.nextEffect;}}catch(va){if(null===Z)throw Error(y$1(330));Wi(Z,va);Z=Z.nextEffect;}while(null!==Z);Z=null;$f();X=e;}else a.current=c;if(xj)xj=!1,yj=a,zj=b;else for(Z=d;null!==Z;)b=
	Z.nextEffect,Z.nextEffect=null,Z.flags&8&&(K=Z,K.sibling=null,K.stateNode=null),Z=b;d=a.pendingLanes;0===d&&(Ti=null);1===d?a===Ej?Dj++:(Dj=0,Ej=a):Dj=0;c=c.stateNode;if(Mf&&"function"===typeof Mf.onCommitFiberRoot)try{Mf.onCommitFiberRoot(Lf,c,void 0,64===(c.current.flags&64));}catch(va){}Mj(a,O());if(Qi)throw Qi=!1,a=Ri,Ri=null,a;if(0!==(X&8))return null;ig();return null}
	function ek(){for(;null!==Z;){var a=Z.alternate;Jj||null===Ij||(0!==(Z.flags&8)?dc(Z,Ij)&&(Jj=!0):13===Z.tag&&mj(a,Z)&&dc(Z,Ij)&&(Jj=!0));var b=Z.flags;0!==(b&256)&&Xi(a,Z);0===(b&512)||xj||(xj=!0,hg(97,function(){Oj();return null}));Z=Z.nextEffect;}}function Oj(){if(90!==zj){var a=97<zj?97:zj;zj=90;return gg(a,fk)}return !1}function $i(a,b){Aj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}));}function Zi(a,b){Bj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}));}
	function fk(){if(null===yj)return !1;var a=yj;yj=null;if(0!==(X&48))throw Error(y$1(331));var b=X;X|=32;var c=Bj;Bj=[];for(var d=0;d<c.length;d+=2){var e=c[d],f=c[d+1],g=e.destroy;e.destroy=void 0;if("function"===typeof g)try{g();}catch(k){if(null===f)throw Error(y$1(330));Wi(f,k);}}c=Aj;Aj=[];for(d=0;d<c.length;d+=2){e=c[d];f=c[d+1];try{var h=e.create;e.destroy=h();}catch(k){if(null===f)throw Error(y$1(330));Wi(f,k);}}for(h=a.current.firstEffect;null!==h;)a=h.nextEffect,h.nextEffect=null,h.flags&8&&(h.sibling=
	null,h.stateNode=null),h=a;X=b;ig();return !0}function gk(a,b,c){b=Mi(c,b);b=Pi(a,b,1);Ag(a,b);b=Hg();a=Kj(a,1);null!==a&&($c(a,1,b),Mj(a,b));}
	function Wi(a,b){if(3===a.tag)gk(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){gk(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d))){a=Mi(b,a);var e=Si(c,a,1);Ag(c,e);e=Hg();c=Kj(c,1);if(null!==c)$c(c,1,e),Mj(c,e);else if("function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d)))try{d.componentDidCatch(b,a);}catch(f){}break}}c=c.return;}}
	function Yj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=Hg();a.pingedLanes|=a.suspendedLanes&c;U===a&&(W&c)===c&&(4===V||3===V&&(W&62914560)===W&&500>O()-jj?Qj(a,0):uj|=c);Mj(a,b);}function lj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=a.mode,0===(b&2)?b=1:0===(b&4)?b=99===eg()?1:2:(0===Gj&&(Gj=tj),b=Yc(62914560&~Gj),0===b&&(b=4194304)));c=Hg();a=Kj(a,b);null!==a&&($c(a,b,c),Mj(a,c));}var ck;
	ck=function(a,b,c){var d=b.lanes;if(null!==a)if(a.memoizedProps!==b.pendingProps||N.current)ug=!0;else if(0!==(c&d))ug=0!==(a.flags&16384)?!0:!1;else {ug=!1;switch(b.tag){case 3:ri(b);sh();break;case 5:gh(b);break;case 1:Ff(b.type)&&Jf(b);break;case 4:eh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;var e=b.type._context;I(mg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){if(0!==(c&b.child.childLanes))return ti(a,b,c);I(P,P.current&1);b=hi(a,b,c);return null!==
	b?b.sibling:null}I(P,P.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&64)){if(d)return Ai(a,b,c);b.flags|=64;}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);I(P,P.current);if(d)break;else return null;case 23:case 24:return b.lanes=0,mi(a,b,c)}return hi(a,b,c)}else ug=!1;b.lanes=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;e=Ef(b,M.current);tg(b,c);e=Ch(null,b,d,a,e,c);b.flags|=1;if("object"===
	typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(Ff(d)){var f=!0;Jf(b);}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;xg(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Gg(b,d,g,a);e.updater=Kg;b.stateNode=e;e._reactInternals=b;Og(b,d,a,c);b=qi(null,b,d,!0,f,c);}else b.tag=0,fi(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);
	a=b.pendingProps;f=e._init;e=f(e._payload);b.type=e;f=b.tag=hk(e);a=lg(e,a);switch(f){case 0:b=li(null,b,e,a,c);break a;case 1:b=pi(null,b,e,a,c);break a;case 11:b=gi(null,b,e,a,c);break a;case 14:b=ii(null,b,e,lg(e.type,a),d,c);break a}throw Error(y$1(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),li(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),pi(a,b,d,e,c);case 3:ri(b);d=b.updateQueue;if(null===a||null===d)throw Error(y$1(282));
	d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;yg(a,b);Cg(b,d,null,c);d=b.memoizedState.element;if(d===e)sh(),b=hi(a,b,c);else {e=b.stateNode;if(f=e.hydrate)kh=rf(b.stateNode.containerInfo.firstChild),jh=b,f=lh=!0;if(f){a=e.mutableSourceEagerHydrationData;if(null!=a)for(e=0;e<a.length;e+=2)f=a[e],f._workInProgressVersionPrimary=a[e+1],th.push(f);c=Zg(b,null,d,c);for(b.child=c;c;)c.flags=c.flags&-3|1024,c=c.sibling;}else fi(a,b,d,c),sh();b=b.child;}return b;case 5:return gh(b),null===a&&
	ph(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,nf(d,e)?g=null:null!==f&&nf(d,f)&&(b.flags|=16),oi(a,b),fi(a,b,g,c),b.child;case 6:return null===a&&ph(b),null;case 13:return ti(a,b,c);case 4:return eh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Yg(b,null,d,c):fi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),gi(a,b,d,e,c);case 7:return fi(a,b,b.pendingProps,c),b.child;case 8:return fi(a,b,b.pendingProps.children,
	c),b.child;case 12:return fi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(mg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=He(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!N.current){b=hi(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=
	k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=zg(-1,c&-c),l.tag=2,Ag(h,l));h.lanes|=c;l=h.alternate;null!==l&&(l.lanes|=c);sg(h.return,c);k.lanes|=c;break}l=l.next;}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return;}h=g;}fi(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,tg(b,c),e=vg(e,
	f.unstable_observedBits),d=d(e),b.flags|=1,fi(a,b,d,c),b.child;case 14:return e=b.type,f=lg(e,b.pendingProps),f=lg(e.type,f),ii(a,b,e,f,d,c);case 15:return ki(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,Ff(d)?(a=!0,Jf(b)):a=!1,tg(b,c),Mg(b,d,e),Og(b,d,e,c),qi(null,b,d,!0,a,c);case 19:return Ai(a,b,c);case 23:return mi(a,b,c);case 24:return mi(a,b,c)}throw Error(y$1(156,b.tag));
	};function ik(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.flags=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childLanes=this.lanes=0;this.alternate=null;}function nh(a,b,c,d){return new ik(a,b,c,d)}function ji(a){a=a.prototype;return !(!a||!a.isReactComponent)}
	function hk(a){if("function"===typeof a)return ji(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Aa)return 11;if(a===Da)return 14}return 2}
	function Tg(a,b){var c=a.alternate;null===c?(c=nh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
	c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
	function Vg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)ji(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ua:return Xg(c.children,e,f,b);case Ha:g=8;e|=16;break;case wa:g=8;e|=1;break;case xa:return a=nh(12,c,b,e|8),a.elementType=xa,a.type=xa,a.lanes=f,a;case Ba:return a=nh(13,c,b,e),a.type=Ba,a.elementType=Ba,a.lanes=f,a;case Ca:return a=nh(19,c,b,e),a.elementType=Ca,a.lanes=f,a;case Ia:return vi(c,e,f,b);case Ja:return a=nh(24,c,b,e),a.elementType=Ja,a.lanes=f,a;default:if("object"===
	typeof a&&null!==a)switch(a.$$typeof){case ya:g=10;break a;case za:g=9;break a;case Aa:g=11;break a;case Da:g=14;break a;case Ea:g=16;d=null;break a;case Fa:g=22;break a}throw Error(y$1(130,null==a?a:typeof a,""));}b=nh(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Xg(a,b,c,d){a=nh(7,a,d,b);a.lanes=c;return a}function vi(a,b,c,d){a=nh(23,a,d,b);a.elementType=Ia;a.lanes=c;return a}function Ug(a,b,c){a=nh(6,a,null,b);a.lanes=c;return a}
	function Wg(a,b,c){b=nh(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
	function jk(a,b,c){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=0;this.eventTimes=Zc(0);this.expirationTimes=Zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=Zc(0);this.mutableSourceEagerHydrationData=null;}
	function kk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:ta,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
	function lk(a,b,c,d){var e=b.current,f=Hg(),g=Ig(e);a:if(c){c=c._reactInternals;b:{if(Zb(c)!==c||1!==c.tag)throw Error(y$1(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(Ff(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return;}while(null!==h);throw Error(y$1(171));}if(1===c.tag){var k=c.type;if(Ff(k)){c=If(c,k,h);break a}}c=h;}else c=Cf;null===b.context?b.context=c:b.pendingContext=c;b=zg(f,g);b.payload={element:a};d=void 0===d?null:d;null!==
	d&&(b.callback=d);Ag(e,b);Jg(e,g,f);return g}function mk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function nk(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b;}}function ok(a,b){nk(a,b);(a=a.alternate)&&nk(a,b);}function pk(){return null}
	function qk(a,b,c){var d=null!=c&&null!=c.hydrationOptions&&c.hydrationOptions.mutableSources||null;c=new jk(a,b,null!=c&&!0===c.hydrate);b=nh(3,null,null,2===b?7:1===b?3:0);c.current=b;b.stateNode=c;xg(b);a[ff]=c.current;cf(8===a.nodeType?a.parentNode:a);if(d)for(a=0;a<d.length;a++){b=d[a];var e=b._getVersion;e=e(b._source);null==c.mutableSourceEagerHydrationData?c.mutableSourceEagerHydrationData=[b,e]:c.mutableSourceEagerHydrationData.push(b,e);}this._internalRoot=c;}
	qk.prototype.render=function(a){lk(a,this._internalRoot,null,null);};qk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;lk(null,a,null,function(){b[ff]=null;});};function rk(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}
	function sk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new qk(a,0,b?{hydrate:!0}:void 0)}
	function tk(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=mk(g);h.call(a);};}lk(b,g,a,e);}else {f=c._reactRootContainer=sk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=mk(g);k.call(a);};}Xj(function(){lk(b,g,a,e);});}return mk(g)}ec=function(a){if(13===a.tag){var b=Hg();Jg(a,4,b);ok(a,4);}};fc=function(a){if(13===a.tag){var b=Hg();Jg(a,67108864,b);ok(a,67108864);}};
	gc=function(a){if(13===a.tag){var b=Hg(),c=Ig(a);Jg(a,c,b);ok(a,c);}};hc=function(a,b){return b()};
	yb=function(a,b,c){switch(b){case "input":ab(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(y$1(90));Wa(d);ab(d,e);}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1);}};Gb=Wj;
	Hb=function(a,b,c,d,e){var f=X;X|=4;try{return gg(98,a.bind(null,b,c,d,e))}finally{X=f,0===X&&(wj(),ig());}};Ib=function(){0===(X&49)&&(Vj(),Oj());};Jb=function(a,b){var c=X;X|=2;try{return a(b)}finally{X=c,0===X&&(wj(),ig());}};function uk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!rk(b))throw Error(y$1(200));return kk(a,b,null,c)}var vk={Events:[Cb,ue,Db,Eb,Fb,Oj,{current:!1}]},wk={findFiberByHostInstance:wc,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"};
	var xk={bundleType:wk.bundleType,version:wk.version,rendererPackageName:wk.rendererPackageName,rendererConfig:wk.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ra.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=cc(a);return null===a?null:a.stateNode},findFiberByHostInstance:wk.findFiberByHostInstance||
	pk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var yk=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yk.isDisabled&&yk.supportsFiber)try{Lf=yk.inject(xk),Mf=yk;}catch(a){}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vk;reactDom_production_min.createPortal=uk;
	reactDom_production_min.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(y$1(188));throw Error(y$1(268,Object.keys(a)));}a=cc(b);a=null===a?null:a.stateNode;return a};reactDom_production_min.flushSync=function(a,b){var c=X;if(0!==(c&48))return a(b);X|=1;try{if(a)return gg(99,a.bind(null,b))}finally{X=c,ig();}};reactDom_production_min.hydrate=function(a,b,c){if(!rk(b))throw Error(y$1(200));return tk(null,a,b,!0,c)};
	reactDom_production_min.render=function(a,b,c){if(!rk(b))throw Error(y$1(200));return tk(null,a,b,!1,c)};reactDom_production_min.unmountComponentAtNode=function(a){if(!rk(a))throw Error(y$1(40));return a._reactRootContainer?(Xj(function(){tk(null,null,a,!1,function(){a._reactRootContainer=null;a[ff]=null;});}),!0):!1};reactDom_production_min.unstable_batchedUpdates=Wj;reactDom_production_min.unstable_createPortal=function(a,b){return uk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
	reactDom_production_min.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!rk(c))throw Error(y$1(200));if(null==a||void 0===a._reactInternals)throw Error(y$1(38));return tk(a,b,c,!1,d)};reactDom_production_min.version="17.0.2";

	var schedulerTracing_production_min = {};

	/** @license React v0.20.2
	 * scheduler-tracing.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var b$1=0;schedulerTracing_production_min.__interactionsRef=null;schedulerTracing_production_min.__subscriberRef=null;schedulerTracing_production_min.unstable_clear=function(a){return a()};schedulerTracing_production_min.unstable_getCurrent=function(){return null};schedulerTracing_production_min.unstable_getThreadID=function(){return ++b$1};schedulerTracing_production_min.unstable_subscribe=function(){};schedulerTracing_production_min.unstable_trace=function(a,d,c){return c()};schedulerTracing_production_min.unstable_unsubscribe=function(){};schedulerTracing_production_min.unstable_wrap=function(a){return a};

	function checkDCE() {
	  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	  if (
	    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
	    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
	  ) {
	    return;
	  }
	  try {
	    // Verify that the code above has been dead code eliminated (DCE'd).
	    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	  } catch (err) {
	    // DevTools shouldn't crash React, no matter what.
	    // We should still report in case we break this code.
	    console.error(err);
	  }
	}

	{
	  // DCE check should happen before ReactDOM bundle executes so that
	  // DevTools can report bad minification during injection.
	  checkDCE();
	  reactDom.exports = reactDom_production_min;
	}

	var ReactDOM = reactDom.exports;

	var propTypes = {exports: {}};

	var reactIs = {exports: {}};

	var reactIs_production_min = {};

	/** @license React v16.13.1
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
	reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
	reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;

	{
	  reactIs.exports = reactIs_production_min;
	}

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	Function.call.bind(Object.prototype.hasOwnProperty);

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = ReactPropTypesSecret_1;

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	var factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	{
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  propTypes.exports = factoryWithThrowingShims();
	}

	var PropTypes = propTypes.exports;

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */

	var isArray$j = Array.isArray;

	var isArray_1 = isArray$j;

	/** Detect free variable `global` from Node.js. */

	var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	var _freeGlobal = freeGlobal$1;

	var freeGlobal = _freeGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root$8 = freeGlobal || freeSelf || Function('return this')();

	var _root = root$8;

	var root$7 = _root;

	/** Built-in value references. */
	var Symbol$8 = root$7.Symbol;

	var _Symbol = Symbol$8;

	var Symbol$7 = _Symbol;

	/** Used for built-in method references. */
	var objectProto$h = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$f = objectProto$h.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString$1 = objectProto$h.toString;

	/** Built-in value references. */
	var symToStringTag$1 = Symbol$7 ? Symbol$7.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag$1(value) {
	  var isOwn = hasOwnProperty$f.call(value, symToStringTag$1),
	      tag = value[symToStringTag$1];

	  try {
	    value[symToStringTag$1] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString$1.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag$1] = tag;
	    } else {
	      delete value[symToStringTag$1];
	    }
	  }
	  return result;
	}

	var _getRawTag = getRawTag$1;

	/** Used for built-in method references. */

	var objectProto$g = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto$g.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString$1(value) {
	  return nativeObjectToString.call(value);
	}

	var _objectToString = objectToString$1;

	var Symbol$6 = _Symbol,
	    getRawTag = _getRawTag,
	    objectToString = _objectToString;

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol$6 ? Symbol$6.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag$7(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	var _baseGetTag = baseGetTag$7;

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */

	function isObjectLike$a(value) {
	  return value != null && typeof value == 'object';
	}

	var isObjectLike_1 = isObjectLike$a;

	var baseGetTag$6 = _baseGetTag,
	    isObjectLike$9 = isObjectLike_1;

	/** `Object#toString` result references. */
	var symbolTag$3 = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol$8(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike$9(value) && baseGetTag$6(value) == symbolTag$3);
	}

	var isSymbol_1 = isSymbol$8;

	var isArray$i = isArray_1,
	    isSymbol$7 = isSymbol_1;

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey$3(value, object) {
	  if (isArray$i(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol$7(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	var _isKey = isKey$3;

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */

	function isObject$h(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	var isObject_1 = isObject$h;

	var baseGetTag$5 = _baseGetTag,
	    isObject$g = isObject_1;

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag$2 = '[object Function]',
	    genTag$1 = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction$6(value) {
	  if (!isObject$g(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag$5(value);
	  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
	}

	var isFunction_1 = isFunction$6;

	var root$6 = _root;

	/** Used to detect overreaching core-js shims. */
	var coreJsData$1 = root$6['__core-js_shared__'];

	var _coreJsData = coreJsData$1;

	var coreJsData = _coreJsData;

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked$1(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	var _isMasked = isMasked$1;

	/** Used for built-in method references. */

	var funcProto$2 = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$2 = funcProto$2.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource$2(func) {
	  if (func != null) {
	    try {
	      return funcToString$2.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	var _toSource = toSource$2;

	var isFunction$5 = isFunction_1,
	    isMasked = _isMasked,
	    isObject$f = isObject_1,
	    toSource$1 = _toSource;

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto$1 = Function.prototype,
	    objectProto$f = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$1 = funcProto$1.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$e = objectProto$f.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString$1.call(hasOwnProperty$e).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative$1(value) {
	  if (!isObject$f(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction$5(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource$1(value));
	}

	var _baseIsNative = baseIsNative$1;

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */

	function getValue$2(object, key) {
	  return object == null ? undefined : object[key];
	}

	var _getValue = getValue$2;

	var baseIsNative = _baseIsNative,
	    getValue$1 = _getValue;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative$7(object, key) {
	  var value = getValue$1(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	var _getNative = getNative$7;

	var getNative$6 = _getNative;

	/* Built-in method references that are verified to be native. */
	var nativeCreate$4 = getNative$6(Object, 'create');

	var _nativeCreate = nativeCreate$4;

	var nativeCreate$3 = _nativeCreate;

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear$1() {
	  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
	  this.size = 0;
	}

	var _hashClear = hashClear$1;

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */

	function hashDelete$1(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _hashDelete = hashDelete$1;

	var nativeCreate$2 = _nativeCreate;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto$e = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$d = objectProto$e.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet$1(key) {
	  var data = this.__data__;
	  if (nativeCreate$2) {
	    var result = data[key];
	    return result === HASH_UNDEFINED$2 ? undefined : result;
	  }
	  return hasOwnProperty$d.call(data, key) ? data[key] : undefined;
	}

	var _hashGet = hashGet$1;

	var nativeCreate$1 = _nativeCreate;

	/** Used for built-in method references. */
	var objectProto$d = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$c = objectProto$d.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas$1(key) {
	  var data = this.__data__;
	  return nativeCreate$1 ? (data[key] !== undefined) : hasOwnProperty$c.call(data, key);
	}

	var _hashHas = hashHas$1;

	var nativeCreate = _nativeCreate;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet$1(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
	  return this;
	}

	var _hashSet = hashSet$1;

	var hashClear = _hashClear,
	    hashDelete = _hashDelete,
	    hashGet = _hashGet,
	    hashHas = _hashHas,
	    hashSet = _hashSet;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash$1(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash$1.prototype.clear = hashClear;
	Hash$1.prototype['delete'] = hashDelete;
	Hash$1.prototype.get = hashGet;
	Hash$1.prototype.has = hashHas;
	Hash$1.prototype.set = hashSet;

	var _Hash = Hash$1;

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */

	function listCacheClear$1() {
	  this.__data__ = [];
	  this.size = 0;
	}

	var _listCacheClear = listCacheClear$1;

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */

	function eq$6(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	var eq_1 = eq$6;

	var eq$5 = eq_1;

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf$4(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq$5(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	var _assocIndexOf = assocIndexOf$4;

	var assocIndexOf$3 = _assocIndexOf;

	/** Used for built-in method references. */
	var arrayProto$1 = Array.prototype;

	/** Built-in value references. */
	var splice$1 = arrayProto$1.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete$1(key) {
	  var data = this.__data__,
	      index = assocIndexOf$3(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice$1.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	var _listCacheDelete = listCacheDelete$1;

	var assocIndexOf$2 = _assocIndexOf;

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet$1(key) {
	  var data = this.__data__,
	      index = assocIndexOf$2(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	var _listCacheGet = listCacheGet$1;

	var assocIndexOf$1 = _assocIndexOf;

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas$1(key) {
	  return assocIndexOf$1(this.__data__, key) > -1;
	}

	var _listCacheHas = listCacheHas$1;

	var assocIndexOf = _assocIndexOf;

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet$1(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	var _listCacheSet = listCacheSet$1;

	var listCacheClear = _listCacheClear,
	    listCacheDelete = _listCacheDelete,
	    listCacheGet = _listCacheGet,
	    listCacheHas = _listCacheHas,
	    listCacheSet = _listCacheSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache$4(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache$4.prototype.clear = listCacheClear;
	ListCache$4.prototype['delete'] = listCacheDelete;
	ListCache$4.prototype.get = listCacheGet;
	ListCache$4.prototype.has = listCacheHas;
	ListCache$4.prototype.set = listCacheSet;

	var _ListCache = ListCache$4;

	var getNative$5 = _getNative,
	    root$5 = _root;

	/* Built-in method references that are verified to be native. */
	var Map$4 = getNative$5(root$5, 'Map');

	var _Map = Map$4;

	var Hash = _Hash,
	    ListCache$3 = _ListCache,
	    Map$3 = _Map;

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear$1() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map$3 || ListCache$3),
	    'string': new Hash
	  };
	}

	var _mapCacheClear = mapCacheClear$1;

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */

	function isKeyable$1(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	var _isKeyable = isKeyable$1;

	var isKeyable = _isKeyable;

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData$4(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	var _getMapData = getMapData$4;

	var getMapData$3 = _getMapData;

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete$1(key) {
	  var result = getMapData$3(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _mapCacheDelete = mapCacheDelete$1;

	var getMapData$2 = _getMapData;

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet$1(key) {
	  return getMapData$2(this, key).get(key);
	}

	var _mapCacheGet = mapCacheGet$1;

	var getMapData$1 = _getMapData;

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas$1(key) {
	  return getMapData$1(this, key).has(key);
	}

	var _mapCacheHas = mapCacheHas$1;

	var getMapData = _getMapData;

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet$1(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	var _mapCacheSet = mapCacheSet$1;

	var mapCacheClear = _mapCacheClear,
	    mapCacheDelete = _mapCacheDelete,
	    mapCacheGet = _mapCacheGet,
	    mapCacheHas = _mapCacheHas,
	    mapCacheSet = _mapCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache$3(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache$3.prototype.clear = mapCacheClear;
	MapCache$3.prototype['delete'] = mapCacheDelete;
	MapCache$3.prototype.get = mapCacheGet;
	MapCache$3.prototype.has = mapCacheHas;
	MapCache$3.prototype.set = mapCacheSet;

	var _MapCache = MapCache$3;

	var MapCache$2 = _MapCache;

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize$1(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize$1.Cache || MapCache$2);
	  return memoized;
	}

	// Expose `MapCache`.
	memoize$1.Cache = MapCache$2;

	var memoize_1 = memoize$1;

	var memoize = memoize_1;

	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;

	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped$1(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });

	  var cache = result.cache;
	  return result;
	}

	var _memoizeCapped = memoizeCapped$1;

	var memoizeCapped = _memoizeCapped;

	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath$2 = memoizeCapped(function(string) {
	  var result = [];
	  if (string.charCodeAt(0) === 46 /* . */) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, subString) {
	    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	var _stringToPath = stringToPath$2;

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */

	function arrayMap$8(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	var _arrayMap = arrayMap$8;

	var Symbol$5 = _Symbol,
	    arrayMap$7 = _arrayMap,
	    isArray$h = isArray_1,
	    isSymbol$6 = isSymbol_1;

	/** Used as references for various `Number` constants. */
	var INFINITY$3 = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto$2 = Symbol$5 ? Symbol$5.prototype : undefined,
	    symbolToString = symbolProto$2 ? symbolProto$2.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString$1(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray$h(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap$7(value, baseToString$1) + '';
	  }
	  if (isSymbol$6(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY$3) ? '-0' : result;
	}

	var _baseToString = baseToString$1;

	var baseToString = _baseToString;

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString$4(value) {
	  return value == null ? '' : baseToString(value);
	}

	var toString_1 = toString$4;

	var isArray$g = isArray_1,
	    isKey$2 = _isKey,
	    stringToPath$1 = _stringToPath,
	    toString$3 = toString_1;

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath$4(value, object) {
	  if (isArray$g(value)) {
	    return value;
	  }
	  return isKey$2(value, object) ? [value] : stringToPath$1(toString$3(value));
	}

	var _castPath = castPath$4;

	var isSymbol$5 = isSymbol_1;

	/** Used as references for various `Number` constants. */
	var INFINITY$2 = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey$6(value) {
	  if (typeof value == 'string' || isSymbol$5(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY$2) ? '-0' : result;
	}

	var _toKey = toKey$6;

	var castPath$3 = _castPath,
	    toKey$5 = _toKey;

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet$4(object, path) {
	  path = castPath$3(path, object);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey$5(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	var _baseGet = baseGet$4;

	var getNative$4 = _getNative;

	var defineProperty$3 = (function() {
	  try {
	    var func = getNative$4(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	var _defineProperty$d = defineProperty$3;

	var defineProperty$2 = _defineProperty$d;

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue$3(object, key, value) {
	  if (key == '__proto__' && defineProperty$2) {
	    defineProperty$2(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	var _baseAssignValue = baseAssignValue$3;

	var baseAssignValue$2 = _baseAssignValue,
	    eq$4 = eq_1;

	/** Used for built-in method references. */
	var objectProto$c = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$b = objectProto$c.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue$3(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty$b.call(object, key) && eq$4(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue$2(object, key, value);
	  }
	}

	var _assignValue = assignValue$3;

	/** Used as references for various `Number` constants. */

	var MAX_SAFE_INTEGER$1 = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex$4(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER$1 : length;

	  return !!length &&
	    (type == 'number' ||
	      (type != 'symbol' && reIsUint.test(value))) &&
	        (value > -1 && value % 1 == 0 && value < length);
	}

	var _isIndex = isIndex$4;

	var assignValue$2 = _assignValue,
	    castPath$2 = _castPath,
	    isIndex$3 = _isIndex,
	    isObject$e = isObject_1,
	    toKey$4 = _toKey;

	/**
	 * The base implementation of `_.set`.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @param {Function} [customizer] The function to customize path creation.
	 * @returns {Object} Returns `object`.
	 */
	function baseSet$1(object, path, value, customizer) {
	  if (!isObject$e(object)) {
	    return object;
	  }
	  path = castPath$2(path, object);

	  var index = -1,
	      length = path.length,
	      lastIndex = length - 1,
	      nested = object;

	  while (nested != null && ++index < length) {
	    var key = toKey$4(path[index]),
	        newValue = value;

	    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
	      return object;
	    }

	    if (index != lastIndex) {
	      var objValue = nested[key];
	      newValue = customizer ? customizer(objValue, key, nested) : undefined;
	      if (newValue === undefined) {
	        newValue = isObject$e(objValue)
	          ? objValue
	          : (isIndex$3(path[index + 1]) ? [] : {});
	      }
	    }
	    assignValue$2(nested, key, newValue);
	    nested = nested[key];
	  }
	  return object;
	}

	var _baseSet = baseSet$1;

	var baseGet$3 = _baseGet,
	    baseSet = _baseSet,
	    castPath$1 = _castPath;

	/**
	 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} paths The property paths to pick.
	 * @param {Function} predicate The function invoked per property.
	 * @returns {Object} Returns the new object.
	 */
	function basePickBy$1(object, paths, predicate) {
	  var index = -1,
	      length = paths.length,
	      result = {};

	  while (++index < length) {
	    var path = paths[index],
	        value = baseGet$3(object, path);

	    if (predicate(value, path)) {
	      baseSet(result, castPath$1(path, object), value);
	    }
	  }
	  return result;
	}

	var _basePickBy = basePickBy$1;

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */

	function baseHasIn$1(object, key) {
	  return object != null && key in Object(object);
	}

	var _baseHasIn = baseHasIn$1;

	var baseGetTag$4 = _baseGetTag,
	    isObjectLike$8 = isObjectLike_1;

	/** `Object#toString` result references. */
	var argsTag$3 = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments$1(value) {
	  return isObjectLike$8(value) && baseGetTag$4(value) == argsTag$3;
	}

	var _baseIsArguments = baseIsArguments$1;

	var baseIsArguments = _baseIsArguments,
	    isObjectLike$7 = isObjectLike_1;

	/** Used for built-in method references. */
	var objectProto$b = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$a = objectProto$b.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable$1 = objectProto$b.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments$6 = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike$7(value) && hasOwnProperty$a.call(value, 'callee') &&
	    !propertyIsEnumerable$1.call(value, 'callee');
	};

	var isArguments_1 = isArguments$6;

	/** Used as references for various `Number` constants. */

	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength$3(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	var isLength_1 = isLength$3;

	var castPath = _castPath,
	    isArguments$5 = isArguments_1,
	    isArray$f = isArray_1,
	    isIndex$2 = _isIndex,
	    isLength$2 = isLength_1,
	    toKey$3 = _toKey;

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath$1(object, path, hasFunc) {
	  path = castPath(path, object);

	  var index = -1,
	      length = path.length,
	      result = false;

	  while (++index < length) {
	    var key = toKey$3(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength$2(length) && isIndex$2(key, length) &&
	    (isArray$f(object) || isArguments$5(object));
	}

	var _hasPath = hasPath$1;

	var baseHasIn = _baseHasIn,
	    hasPath = _hasPath;

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn$2(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	var hasIn_1 = hasIn$2;

	var basePickBy = _basePickBy,
	    hasIn$1 = hasIn_1;

	/**
	 * The base implementation of `_.pick` without support for individual
	 * property identifiers.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} paths The property paths to pick.
	 * @returns {Object} Returns the new object.
	 */
	function basePick$1(object, paths) {
	  return basePickBy(object, paths, function(value, path) {
	    return hasIn$1(object, path);
	  });
	}

	var _basePick = basePick$1;

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */

	function arrayPush$3(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	var _arrayPush = arrayPush$3;

	var Symbol$4 = _Symbol,
	    isArguments$4 = isArguments_1,
	    isArray$e = isArray_1;

	/** Built-in value references. */
	var spreadableSymbol = Symbol$4 ? Symbol$4.isConcatSpreadable : undefined;

	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable$1(value) {
	  return isArray$e(value) || isArguments$4(value) ||
	    !!(spreadableSymbol && value && value[spreadableSymbol]);
	}

	var _isFlattenable = isFlattenable$1;

	var arrayPush$2 = _arrayPush,
	    isFlattenable = _isFlattenable;

	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten$4(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;

	  predicate || (predicate = isFlattenable);
	  result || (result = []);

	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten$4(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush$2(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	var _baseFlatten = baseFlatten$4;

	var baseFlatten$3 = _baseFlatten;

	/**
	 * Flattens `array` a single level deep.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to flatten.
	 * @returns {Array} Returns the new flattened array.
	 * @example
	 *
	 * _.flatten([1, [2, [3, [4]], 5]]);
	 * // => [1, 2, [3, [4]], 5]
	 */
	function flatten$2(array) {
	  var length = array == null ? 0 : array.length;
	  return length ? baseFlatten$3(array, 1) : [];
	}

	var flatten_1 = flatten$2;

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */

	function apply$4(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	var _apply = apply$4;

	var apply$3 = _apply;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest$2(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply$3(func, this, otherArgs);
	  };
	}

	var _overRest = overRest$2;

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */

	function constant$1(value) {
	  return function() {
	    return value;
	  };
	}

	var constant_1 = constant$1;

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */

	function identity$5(value) {
	  return value;
	}

	var identity_1 = identity$5;

	var constant = constant_1,
	    defineProperty$1 = _defineProperty$d,
	    identity$4 = identity_1;

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString$1 = !defineProperty$1 ? identity$4 : function(func, string) {
	  return defineProperty$1(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};

	var _baseSetToString = baseSetToString$1;

	/** Used to detect hot functions by number of calls within a span of milliseconds. */

	var HOT_COUNT = 800,
	    HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut$1(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	var _shortOut = shortOut$1;

	var baseSetToString = _baseSetToString,
	    shortOut = _shortOut;

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString$2 = shortOut(baseSetToString);

	var _setToString = setToString$2;

	var flatten$1 = flatten_1,
	    overRest$1 = _overRest,
	    setToString$1 = _setToString;

	/**
	 * A specialized version of `baseRest` which flattens the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @returns {Function} Returns the new function.
	 */
	function flatRest$1(func) {
	  return setToString$1(overRest$1(func, undefined, flatten$1), func + '');
	}

	var _flatRest = flatRest$1;

	var basePick = _basePick,
	    flatRest = _flatRest;

	/**
	 * Creates an object composed of the picked `object` properties.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {...(string|string[])} [paths] The property paths to pick.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': '2', 'c': 3 };
	 *
	 * _.pick(object, ['a', 'c']);
	 * // => { 'a': 1, 'c': 3 }
	 */
	var pick = flatRest(function(object, paths) {
	  return object == null ? {} : basePick(object, paths);
	});

	var pick_1 = pick;

	var baseGet$2 = _baseGet;

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get$2(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet$2(object, path);
	  return result === undefined ? defaultValue : result;
	}

	var get_1 = get$2;

	/** Used for built-in method references. */

	var objectProto$a = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype$4(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$a;

	  return value === proto;
	}

	var _isPrototype = isPrototype$4;

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */

	function overArg$2(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	var _overArg = overArg$2;

	var overArg$1 = _overArg;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys$1 = overArg$1(Object.keys, Object);

	var _nativeKeys = nativeKeys$1;

	var isPrototype$3 = _isPrototype,
	    nativeKeys = _nativeKeys;

	/** Used for built-in method references. */
	var objectProto$9 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$9 = objectProto$9.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys$2(object) {
	  if (!isPrototype$3(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty$9.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _baseKeys = baseKeys$2;

	var getNative$3 = _getNative,
	    root$4 = _root;

	/* Built-in method references that are verified to be native. */
	var DataView$1 = getNative$3(root$4, 'DataView');

	var _DataView = DataView$1;

	var getNative$2 = _getNative,
	    root$3 = _root;

	/* Built-in method references that are verified to be native. */
	var Promise$2 = getNative$2(root$3, 'Promise');

	var _Promise = Promise$2;

	var getNative$1 = _getNative,
	    root$2 = _root;

	/* Built-in method references that are verified to be native. */
	var Set$3 = getNative$1(root$2, 'Set');

	var _Set = Set$3;

	var getNative = _getNative,
	    root$1 = _root;

	/* Built-in method references that are verified to be native. */
	var WeakMap$2 = getNative(root$1, 'WeakMap');

	var _WeakMap = WeakMap$2;

	var DataView = _DataView,
	    Map$2 = _Map,
	    Promise$1 = _Promise,
	    Set$2 = _Set,
	    WeakMap$1 = _WeakMap,
	    baseGetTag$3 = _baseGetTag,
	    toSource = _toSource;

	/** `Object#toString` result references. */
	var mapTag$6 = '[object Map]',
	    objectTag$4 = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag$6 = '[object Set]',
	    weakMapTag$2 = '[object WeakMap]';

	var dataViewTag$4 = '[object DataView]';

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map$2),
	    promiseCtorString = toSource(Promise$1),
	    setCtorString = toSource(Set$2),
	    weakMapCtorString = toSource(WeakMap$1);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag$5 = baseGetTag$3;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag$5(new DataView(new ArrayBuffer(1))) != dataViewTag$4) ||
	    (Map$2 && getTag$5(new Map$2) != mapTag$6) ||
	    (Promise$1 && getTag$5(Promise$1.resolve()) != promiseTag) ||
	    (Set$2 && getTag$5(new Set$2) != setTag$6) ||
	    (WeakMap$1 && getTag$5(new WeakMap$1) != weakMapTag$2)) {
	  getTag$5 = function(value) {
	    var result = baseGetTag$3(value),
	        Ctor = result == objectTag$4 ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag$4;
	        case mapCtorString: return mapTag$6;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag$6;
	        case weakMapCtorString: return weakMapTag$2;
	      }
	    }
	    return result;
	  };
	}

	var _getTag = getTag$5;

	var isFunction$4 = isFunction_1,
	    isLength$1 = isLength_1;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike$7(value) {
	  return value != null && isLength$1(value.length) && !isFunction$4(value);
	}

	var isArrayLike_1 = isArrayLike$7;

	var isBuffer$5 = {exports: {}};

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */

	function stubFalse() {
	  return false;
	}

	var stubFalse_1 = stubFalse;

	(function (module, exports) {
	var root = _root,
	    stubFalse = stubFalse_1;

	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;
	}(isBuffer$5, isBuffer$5.exports));

	var baseGetTag$2 = _baseGetTag,
	    isLength = isLength_1,
	    isObjectLike$6 = isObjectLike_1;

	/** `Object#toString` result references. */
	var argsTag$2 = '[object Arguments]',
	    arrayTag$2 = '[object Array]',
	    boolTag$4 = '[object Boolean]',
	    dateTag$3 = '[object Date]',
	    errorTag$2 = '[object Error]',
	    funcTag$1 = '[object Function]',
	    mapTag$5 = '[object Map]',
	    numberTag$3 = '[object Number]',
	    objectTag$3 = '[object Object]',
	    regexpTag$3 = '[object RegExp]',
	    setTag$5 = '[object Set]',
	    stringTag$3 = '[object String]',
	    weakMapTag$1 = '[object WeakMap]';

	var arrayBufferTag$3 = '[object ArrayBuffer]',
	    dataViewTag$3 = '[object DataView]',
	    float32Tag$2 = '[object Float32Array]',
	    float64Tag$2 = '[object Float64Array]',
	    int8Tag$2 = '[object Int8Array]',
	    int16Tag$2 = '[object Int16Array]',
	    int32Tag$2 = '[object Int32Array]',
	    uint8Tag$2 = '[object Uint8Array]',
	    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
	    uint16Tag$2 = '[object Uint16Array]',
	    uint32Tag$2 = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] =
	typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] =
	typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] =
	typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] =
	typedArrayTags[uint32Tag$2] = true;
	typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] =
	typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$4] =
	typedArrayTags[dataViewTag$3] = typedArrayTags[dateTag$3] =
	typedArrayTags[errorTag$2] = typedArrayTags[funcTag$1] =
	typedArrayTags[mapTag$5] = typedArrayTags[numberTag$3] =
	typedArrayTags[objectTag$3] = typedArrayTags[regexpTag$3] =
	typedArrayTags[setTag$5] = typedArrayTags[stringTag$3] =
	typedArrayTags[weakMapTag$1] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray$1(value) {
	  return isObjectLike$6(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag$2(value)];
	}

	var _baseIsTypedArray = baseIsTypedArray$1;

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */

	function baseUnary$7(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	var _baseUnary = baseUnary$7;

	var _nodeUtil = {exports: {}};

	(function (module, exports) {
	var freeGlobal = _freeGlobal;

	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;

	    if (types) {
	      return types;
	    }

	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;
	}(_nodeUtil, _nodeUtil.exports));

	var baseIsTypedArray = _baseIsTypedArray,
	    baseUnary$6 = _baseUnary,
	    nodeUtil$2 = _nodeUtil.exports;

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil$2 && nodeUtil$2.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray$4 = nodeIsTypedArray ? baseUnary$6(nodeIsTypedArray) : baseIsTypedArray;

	var isTypedArray_1 = isTypedArray$4;

	var baseKeys$1 = _baseKeys,
	    getTag$4 = _getTag,
	    isArguments$3 = isArguments_1,
	    isArray$d = isArray_1,
	    isArrayLike$6 = isArrayLike_1,
	    isBuffer$4 = isBuffer$5.exports,
	    isPrototype$2 = _isPrototype,
	    isTypedArray$3 = isTypedArray_1;

	/** `Object#toString` result references. */
	var mapTag$4 = '[object Map]',
	    setTag$4 = '[object Set]';

	/** Used for built-in method references. */
	var objectProto$8 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$8 = objectProto$8.hasOwnProperty;

	/**
	 * Checks if `value` is an empty object, collection, map, or set.
	 *
	 * Objects are considered empty if they have no own enumerable string keyed
	 * properties.
	 *
	 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
	 * jQuery-like collections are considered empty if they have a `length` of `0`.
	 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	 * @example
	 *
	 * _.isEmpty(null);
	 * // => true
	 *
	 * _.isEmpty(true);
	 * // => true
	 *
	 * _.isEmpty(1);
	 * // => true
	 *
	 * _.isEmpty([1, 2, 3]);
	 * // => false
	 *
	 * _.isEmpty({ 'a': 1 });
	 * // => false
	 */
	function isEmpty(value) {
	  if (value == null) {
	    return true;
	  }
	  if (isArrayLike$6(value) &&
	      (isArray$d(value) || typeof value == 'string' || typeof value.splice == 'function' ||
	        isBuffer$4(value) || isTypedArray$3(value) || isArguments$3(value))) {
	    return !value.length;
	  }
	  var tag = getTag$4(value);
	  if (tag == mapTag$4 || tag == setTag$4) {
	    return !value.size;
	  }
	  if (isPrototype$2(value)) {
	    return !baseKeys$1(value).length;
	  }
	  for (var key in value) {
	    if (hasOwnProperty$8.call(value, key)) {
	      return false;
	    }
	  }
	  return true;
	}

	var isEmpty_1 = isEmpty;

	function ErrorList$1(props) {
	  var errors = props.errors;
	  return React.createElement("div", {
	    className: "panel panel-danger errors"
	  }, React.createElement("div", {
	    className: "panel-heading"
	  }, React.createElement("h3", {
	    className: "panel-title"
	  }, "Errors")), React.createElement("ul", {
	    className: "list-group"
	  }, errors.map(function (error, i) {
	    return React.createElement("li", {
	      key: i,
	      className: "list-group-item text-danger"
	    }, error.stack);
	  })));
	}

	var ListCache$2 = _ListCache;

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear$1() {
	  this.__data__ = new ListCache$2;
	  this.size = 0;
	}

	var _stackClear = stackClear$1;

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */

	function stackDelete$1(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	var _stackDelete = stackDelete$1;

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */

	function stackGet$1(key) {
	  return this.__data__.get(key);
	}

	var _stackGet = stackGet$1;

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */

	function stackHas$1(key) {
	  return this.__data__.has(key);
	}

	var _stackHas = stackHas$1;

	var ListCache$1 = _ListCache,
	    Map$1 = _Map,
	    MapCache$1 = _MapCache;

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE$2 = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet$1(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache$1) {
	    var pairs = data.__data__;
	    if (!Map$1 || (pairs.length < LARGE_ARRAY_SIZE$2 - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache$1(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	var _stackSet = stackSet$1;

	var ListCache = _ListCache,
	    stackClear = _stackClear,
	    stackDelete = _stackDelete,
	    stackGet = _stackGet,
	    stackHas = _stackHas,
	    stackSet = _stackSet;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack$4(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack$4.prototype.clear = stackClear;
	Stack$4.prototype['delete'] = stackDelete;
	Stack$4.prototype.get = stackGet;
	Stack$4.prototype.has = stackHas;
	Stack$4.prototype.set = stackSet;

	var _Stack = Stack$4;

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */

	function arrayEach$2(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	var _arrayEach = arrayEach$2;

	var assignValue$1 = _assignValue,
	    baseAssignValue$1 = _baseAssignValue;

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject$5(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue$1(object, key, newValue);
	    } else {
	      assignValue$1(object, key, newValue);
	    }
	  }
	  return object;
	}

	var _copyObject = copyObject$5;

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */

	function baseTimes$1(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	var _baseTimes = baseTimes$1;

	var baseTimes = _baseTimes,
	    isArguments$2 = isArguments_1,
	    isArray$c = isArray_1,
	    isBuffer$3 = isBuffer$5.exports,
	    isIndex$1 = _isIndex,
	    isTypedArray$2 = isTypedArray_1;

	/** Used for built-in method references. */
	var objectProto$7 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$7 = objectProto$7.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys$2(value, inherited) {
	  var isArr = isArray$c(value),
	      isArg = !isArr && isArguments$2(value),
	      isBuff = !isArr && !isArg && isBuffer$3(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray$2(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty$7.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex$1(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _arrayLikeKeys = arrayLikeKeys$2;

	var arrayLikeKeys$1 = _arrayLikeKeys,
	    baseKeys = _baseKeys,
	    isArrayLike$5 = isArrayLike_1;

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys$7(object) {
	  return isArrayLike$5(object) ? arrayLikeKeys$1(object) : baseKeys(object);
	}

	var keys_1 = keys$7;

	var copyObject$4 = _copyObject,
	    keys$6 = keys_1;

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign$1(object, source) {
	  return object && copyObject$4(source, keys$6(source), object);
	}

	var _baseAssign = baseAssign$1;

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */

	function nativeKeysIn$1(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _nativeKeysIn = nativeKeysIn$1;

	var isObject$d = isObject_1,
	    isPrototype$1 = _isPrototype,
	    nativeKeysIn = _nativeKeysIn;

	/** Used for built-in method references. */
	var objectProto$6 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$6 = objectProto$6.hasOwnProperty;

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn$1(object) {
	  if (!isObject$d(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype$1(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty$6.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _baseKeysIn = baseKeysIn$1;

	var arrayLikeKeys = _arrayLikeKeys,
	    baseKeysIn = _baseKeysIn,
	    isArrayLike$4 = isArrayLike_1;

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn$6(object) {
	  return isArrayLike$4(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}

	var keysIn_1 = keysIn$6;

	var copyObject$3 = _copyObject,
	    keysIn$5 = keysIn_1;

	/**
	 * The base implementation of `_.assignIn` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssignIn$1(object, source) {
	  return object && copyObject$3(source, keysIn$5(source), object);
	}

	var _baseAssignIn = baseAssignIn$1;

	var _cloneBuffer = {exports: {}};

	(function (module, exports) {
	var root = _root;

	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

	  buffer.copy(result);
	  return result;
	}

	module.exports = cloneBuffer;
	}(_cloneBuffer, _cloneBuffer.exports));

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */

	function copyArray$4(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	var _copyArray = copyArray$4;

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */

	function arrayFilter$1(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	var _arrayFilter = arrayFilter$1;

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */

	function stubArray$2() {
	  return [];
	}

	var stubArray_1 = stubArray$2;

	var arrayFilter = _arrayFilter,
	    stubArray$1 = stubArray_1;

	/** Used for built-in method references. */
	var objectProto$5 = Object.prototype;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols$3 = !nativeGetSymbols$1 ? stubArray$1 : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};

	var _getSymbols = getSymbols$3;

	var copyObject$2 = _copyObject,
	    getSymbols$2 = _getSymbols;

	/**
	 * Copies own symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols$1(source, object) {
	  return copyObject$2(source, getSymbols$2(source), object);
	}

	var _copySymbols = copySymbols$1;

	var overArg = _overArg;

	/** Built-in value references. */
	var getPrototype$3 = overArg(Object.getPrototypeOf, Object);

	var _getPrototype = getPrototype$3;

	var arrayPush$1 = _arrayPush,
	    getPrototype$2 = _getPrototype,
	    getSymbols$1 = _getSymbols,
	    stubArray = stubArray_1;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own and inherited enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbolsIn$2 = !nativeGetSymbols ? stubArray : function(object) {
	  var result = [];
	  while (object) {
	    arrayPush$1(result, getSymbols$1(object));
	    object = getPrototype$2(object);
	  }
	  return result;
	};

	var _getSymbolsIn = getSymbolsIn$2;

	var copyObject$1 = _copyObject,
	    getSymbolsIn$1 = _getSymbolsIn;

	/**
	 * Copies own and inherited symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbolsIn$1(source, object) {
	  return copyObject$1(source, getSymbolsIn$1(source), object);
	}

	var _copySymbolsIn = copySymbolsIn$1;

	var arrayPush = _arrayPush,
	    isArray$b = isArray_1;

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys$2(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray$b(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	var _baseGetAllKeys = baseGetAllKeys$2;

	var baseGetAllKeys$1 = _baseGetAllKeys,
	    getSymbols = _getSymbols,
	    keys$5 = keys_1;

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys$2(object) {
	  return baseGetAllKeys$1(object, keys$5, getSymbols);
	}

	var _getAllKeys = getAllKeys$2;

	var baseGetAllKeys = _baseGetAllKeys,
	    getSymbolsIn = _getSymbolsIn,
	    keysIn$4 = keysIn_1;

	/**
	 * Creates an array of own and inherited enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeysIn$1(object) {
	  return baseGetAllKeys(object, keysIn$4, getSymbolsIn);
	}

	var _getAllKeysIn = getAllKeysIn$1;

	/** Used for built-in method references. */

	var objectProto$4 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$5 = objectProto$4.hasOwnProperty;

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray$1(array) {
	  var length = array.length,
	      result = new array.constructor(length);

	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty$5.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	var _initCloneArray = initCloneArray$1;

	var root = _root;

	/** Built-in value references. */
	var Uint8Array$3 = root.Uint8Array;

	var _Uint8Array = Uint8Array$3;

	var Uint8Array$2 = _Uint8Array;

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer$3(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array$2(result).set(new Uint8Array$2(arrayBuffer));
	  return result;
	}

	var _cloneArrayBuffer = cloneArrayBuffer$3;

	var cloneArrayBuffer$2 = _cloneArrayBuffer;

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView$1(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer$2(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	var _cloneDataView = cloneDataView$1;

	/** Used to match `RegExp` flags from their coerced string values. */

	var reFlags = /\w*$/;

	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp$1(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	var _cloneRegExp = cloneRegExp$1;

	var Symbol$3 = _Symbol;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto$1 = Symbol$3 ? Symbol$3.prototype : undefined,
	    symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : undefined;

	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol$1(symbol) {
	  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
	}

	var _cloneSymbol = cloneSymbol$1;

	var cloneArrayBuffer$1 = _cloneArrayBuffer;

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray$2(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer$1(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	var _cloneTypedArray = cloneTypedArray$2;

	var cloneArrayBuffer = _cloneArrayBuffer,
	    cloneDataView = _cloneDataView,
	    cloneRegExp = _cloneRegExp,
	    cloneSymbol = _cloneSymbol,
	    cloneTypedArray$1 = _cloneTypedArray;

	/** `Object#toString` result references. */
	var boolTag$3 = '[object Boolean]',
	    dateTag$2 = '[object Date]',
	    mapTag$3 = '[object Map]',
	    numberTag$2 = '[object Number]',
	    regexpTag$2 = '[object RegExp]',
	    setTag$3 = '[object Set]',
	    stringTag$2 = '[object String]',
	    symbolTag$2 = '[object Symbol]';

	var arrayBufferTag$2 = '[object ArrayBuffer]',
	    dataViewTag$2 = '[object DataView]',
	    float32Tag$1 = '[object Float32Array]',
	    float64Tag$1 = '[object Float64Array]',
	    int8Tag$1 = '[object Int8Array]',
	    int16Tag$1 = '[object Int16Array]',
	    int32Tag$1 = '[object Int32Array]',
	    uint8Tag$1 = '[object Uint8Array]',
	    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
	    uint16Tag$1 = '[object Uint16Array]',
	    uint32Tag$1 = '[object Uint32Array]';

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag$1(object, tag, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag$2:
	      return cloneArrayBuffer(object);

	    case boolTag$3:
	    case dateTag$2:
	      return new Ctor(+object);

	    case dataViewTag$2:
	      return cloneDataView(object, isDeep);

	    case float32Tag$1: case float64Tag$1:
	    case int8Tag$1: case int16Tag$1: case int32Tag$1:
	    case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
	      return cloneTypedArray$1(object, isDeep);

	    case mapTag$3:
	      return new Ctor;

	    case numberTag$2:
	    case stringTag$2:
	      return new Ctor(object);

	    case regexpTag$2:
	      return cloneRegExp(object);

	    case setTag$3:
	      return new Ctor;

	    case symbolTag$2:
	      return cloneSymbol(object);
	  }
	}

	var _initCloneByTag = initCloneByTag$1;

	var isObject$c = isObject_1;

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate$1 = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject$c(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());

	var _baseCreate = baseCreate$1;

	var baseCreate = _baseCreate,
	    getPrototype$1 = _getPrototype,
	    isPrototype = _isPrototype;

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject$2(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype$1(object))
	    : {};
	}

	var _initCloneObject = initCloneObject$2;

	var getTag$3 = _getTag,
	    isObjectLike$5 = isObjectLike_1;

	/** `Object#toString` result references. */
	var mapTag$2 = '[object Map]';

	/**
	 * The base implementation of `_.isMap` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	 */
	function baseIsMap$1(value) {
	  return isObjectLike$5(value) && getTag$3(value) == mapTag$2;
	}

	var _baseIsMap = baseIsMap$1;

	var baseIsMap = _baseIsMap,
	    baseUnary$5 = _baseUnary,
	    nodeUtil$1 = _nodeUtil.exports;

	/* Node.js helper references. */
	var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;

	/**
	 * Checks if `value` is classified as a `Map` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	 * @example
	 *
	 * _.isMap(new Map);
	 * // => true
	 *
	 * _.isMap(new WeakMap);
	 * // => false
	 */
	var isMap$1 = nodeIsMap ? baseUnary$5(nodeIsMap) : baseIsMap;

	var isMap_1 = isMap$1;

	var getTag$2 = _getTag,
	    isObjectLike$4 = isObjectLike_1;

	/** `Object#toString` result references. */
	var setTag$2 = '[object Set]';

	/**
	 * The base implementation of `_.isSet` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 */
	function baseIsSet$1(value) {
	  return isObjectLike$4(value) && getTag$2(value) == setTag$2;
	}

	var _baseIsSet = baseIsSet$1;

	var baseIsSet = _baseIsSet,
	    baseUnary$4 = _baseUnary,
	    nodeUtil = _nodeUtil.exports;

	/* Node.js helper references. */
	var nodeIsSet = nodeUtil && nodeUtil.isSet;

	/**
	 * Checks if `value` is classified as a `Set` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 * @example
	 *
	 * _.isSet(new Set);
	 * // => true
	 *
	 * _.isSet(new WeakSet);
	 * // => false
	 */
	var isSet$1 = nodeIsSet ? baseUnary$4(nodeIsSet) : baseIsSet;

	var isSet_1 = isSet$1;

	var Stack$3 = _Stack,
	    arrayEach$1 = _arrayEach,
	    assignValue = _assignValue,
	    baseAssign = _baseAssign,
	    baseAssignIn = _baseAssignIn,
	    cloneBuffer$1 = _cloneBuffer.exports,
	    copyArray$3 = _copyArray,
	    copySymbols = _copySymbols,
	    copySymbolsIn = _copySymbolsIn,
	    getAllKeys$1 = _getAllKeys,
	    getAllKeysIn = _getAllKeysIn,
	    getTag$1 = _getTag,
	    initCloneArray = _initCloneArray,
	    initCloneByTag = _initCloneByTag,
	    initCloneObject$1 = _initCloneObject,
	    isArray$a = isArray_1,
	    isBuffer$2 = isBuffer$5.exports,
	    isMap = isMap_1,
	    isObject$b = isObject_1,
	    isSet = isSet_1,
	    keys$4 = keys_1,
	    keysIn$3 = keysIn_1;

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG$1 = 1,
	    CLONE_FLAT_FLAG = 2,
	    CLONE_SYMBOLS_FLAG$1 = 4;

	/** `Object#toString` result references. */
	var argsTag$1 = '[object Arguments]',
	    arrayTag$1 = '[object Array]',
	    boolTag$2 = '[object Boolean]',
	    dateTag$1 = '[object Date]',
	    errorTag$1 = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag$1 = '[object Map]',
	    numberTag$1 = '[object Number]',
	    objectTag$2 = '[object Object]',
	    regexpTag$1 = '[object RegExp]',
	    setTag$1 = '[object Set]',
	    stringTag$1 = '[object String]',
	    symbolTag$1 = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag$1 = '[object ArrayBuffer]',
	    dataViewTag$1 = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] =
	cloneableTags[arrayBufferTag$1] = cloneableTags[dataViewTag$1] =
	cloneableTags[boolTag$2] = cloneableTags[dateTag$1] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag$1] =
	cloneableTags[numberTag$1] = cloneableTags[objectTag$2] =
	cloneableTags[regexpTag$1] = cloneableTags[setTag$1] =
	cloneableTags[stringTag$1] = cloneableTags[symbolTag$1] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag$1] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Deep clone
	 *  2 - Flatten inherited properties
	 *  4 - Clone symbols
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone$1(value, bitmask, customizer, key, object, stack) {
	  var result,
	      isDeep = bitmask & CLONE_DEEP_FLAG$1,
	      isFlat = bitmask & CLONE_FLAT_FLAG,
	      isFull = bitmask & CLONE_SYMBOLS_FLAG$1;

	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject$b(value)) {
	    return value;
	  }
	  var isArr = isArray$a(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray$3(value, result);
	    }
	  } else {
	    var tag = getTag$1(value),
	        isFunc = tag == funcTag || tag == genTag;

	    if (isBuffer$2(value)) {
	      return cloneBuffer$1(value, isDeep);
	    }
	    if (tag == objectTag$2 || tag == argsTag$1 || (isFunc && !object)) {
	      result = (isFlat || isFunc) ? {} : initCloneObject$1(value);
	      if (!isDeep) {
	        return isFlat
	          ? copySymbolsIn(value, baseAssignIn(result, value))
	          : copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack$3);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  if (isSet(value)) {
	    value.forEach(function(subValue) {
	      result.add(baseClone$1(subValue, bitmask, customizer, subValue, value, stack));
	    });
	  } else if (isMap(value)) {
	    value.forEach(function(subValue, key) {
	      result.set(key, baseClone$1(subValue, bitmask, customizer, key, value, stack));
	    });
	  }

	  var keysFunc = isFull
	    ? (isFlat ? getAllKeysIn : getAllKeys$1)
	    : (isFlat ? keysIn$3 : keys$4);

	  var props = isArr ? undefined : keysFunc(value);
	  arrayEach$1(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    assignValue(result, key, baseClone$1(subValue, bitmask, customizer, key, value, stack));
	  });
	  return result;
	}

	var _baseClone = baseClone$1;

	var baseClone = _baseClone;

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1,
	    CLONE_SYMBOLS_FLAG = 4;

	/**
	 * This method is like `_.clone` except that it recursively clones `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.0.0
	 * @category Lang
	 * @param {*} value The value to recursively clone.
	 * @returns {*} Returns the deep cloned value.
	 * @see _.clone
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var deep = _.cloneDeep(objects);
	 * console.log(deep[0] === objects[0]);
	 * // => false
	 */
	function cloneDeep$1(value) {
	  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
	}

	var cloneDeep_1 = cloneDeep$1;

	/** Used to stand-in for `undefined` hash values. */

	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd$1(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	var _setCacheAdd = setCacheAdd$1;

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */

	function setCacheHas$1(value) {
	  return this.__data__.has(value);
	}

	var _setCacheHas = setCacheHas$1;

	var MapCache = _MapCache,
	    setCacheAdd = _setCacheAdd,
	    setCacheHas = _setCacheHas;

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache$4(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache$4.prototype.add = SetCache$4.prototype.push = setCacheAdd;
	SetCache$4.prototype.has = setCacheHas;

	var _SetCache = SetCache$4;

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */

	function arraySome$1(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	var _arraySome = arraySome$1;

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */

	function cacheHas$4(cache, key) {
	  return cache.has(key);
	}

	var _cacheHas = cacheHas$4;

	var SetCache$3 = _SetCache,
	    arraySome = _arraySome,
	    cacheHas$3 = _cacheHas;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$5 = 1,
	    COMPARE_UNORDERED_FLAG$3 = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays$2(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Check that cyclic values are equal.
	  var arrStacked = stack.get(array);
	  var othStacked = stack.get(other);
	  if (arrStacked && othStacked) {
	    return arrStacked == other && othStacked == array;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG$3) ? new SetCache$3 : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas$3(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	var _equalArrays = equalArrays$2;

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */

	function mapToArray$1(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	var _mapToArray = mapToArray$1;

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */

	function setToArray$3(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	var _setToArray = setToArray$3;

	var Symbol$2 = _Symbol,
	    Uint8Array$1 = _Uint8Array,
	    eq$3 = eq_1,
	    equalArrays$1 = _equalArrays,
	    mapToArray = _mapToArray,
	    setToArray$2 = _setToArray;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$4 = 1,
	    COMPARE_UNORDERED_FLAG$2 = 2;

	/** `Object#toString` result references. */
	var boolTag$1 = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol$2 ? Symbol$2.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
	        return false;
	      }
	      return true;

	    case boolTag$1:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq$3(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
	      convert || (convert = setToArray$2);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG$2;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays$1(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	var _equalByTag = equalByTag$1;

	var getAllKeys = _getAllKeys;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$3 = 1;

	/** Used for built-in method references. */
	var objectProto$3 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$4 = objectProto$3.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3,
	      objProps = getAllKeys(object),
	      objLength = objProps.length,
	      othProps = getAllKeys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty$4.call(other, key))) {
	      return false;
	    }
	  }
	  // Check that cyclic values are equal.
	  var objStacked = stack.get(object);
	  var othStacked = stack.get(other);
	  if (objStacked && othStacked) {
	    return objStacked == other && othStacked == object;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	var _equalObjects = equalObjects$1;

	var Stack$2 = _Stack,
	    equalArrays = _equalArrays,
	    equalByTag = _equalByTag,
	    equalObjects = _equalObjects,
	    getTag = _getTag,
	    isArray$9 = isArray_1,
	    isBuffer$1 = isBuffer$5.exports,
	    isTypedArray$1 = isTypedArray_1;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$2 = 1;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag$1 = '[object Object]';

	/** Used for built-in method references. */
	var objectProto$2 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$3 = objectProto$2.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray$9(object),
	      othIsArr = isArray$9(other),
	      objTag = objIsArr ? arrayTag : getTag(object),
	      othTag = othIsArr ? arrayTag : getTag(other);

	  objTag = objTag == argsTag ? objectTag$1 : objTag;
	  othTag = othTag == argsTag ? objectTag$1 : othTag;

	  var objIsObj = objTag == objectTag$1,
	      othIsObj = othTag == objectTag$1,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer$1(object)) {
	    if (!isBuffer$1(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack$2);
	    return (objIsArr || isTypedArray$1(object))
	      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
	    var objIsWrapped = objIsObj && hasOwnProperty$3.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty$3.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack$2);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack$2);
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}

	var _baseIsEqualDeep = baseIsEqualDeep$1;

	var baseIsEqualDeep = _baseIsEqualDeep,
	    isObjectLike$3 = isObjectLike_1;

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual$3(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike$3(value) && !isObjectLike$3(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$3, stack);
	}

	var _baseIsEqual = baseIsEqual$3;

	var baseIsEqual$2 = _baseIsEqual;

	/**
	 * Performs a deep comparison between two values to determine if they are
	 * equivalent.
	 *
	 * **Note:** This method supports comparing arrays, array buffers, booleans,
	 * date objects, error objects, maps, numbers, `Object` objects, regexes,
	 * sets, strings, symbols, and typed arrays. `Object` objects are compared
	 * by their own, not inherited, enumerable properties. Functions and DOM
	 * nodes are compared by strict equality, i.e. `===`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.isEqual(object, other);
	 * // => true
	 *
	 * object === other;
	 * // => false
	 */
	function isEqual$2(value, other) {
	  return baseIsEqual$2(value, other);
	}

	var isEqual_1 = isEqual$2;

	var Stack$1 = _Stack,
	    baseIsEqual$1 = _baseIsEqual;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$1 = 1,
	    COMPARE_UNORDERED_FLAG$1 = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch$1(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack$1;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	var _baseIsMatch = baseIsMatch$1;

	var isObject$a = isObject_1;

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable$2(value) {
	  return value === value && !isObject$a(value);
	}

	var _isStrictComparable = isStrictComparable$2;

	var isStrictComparable$1 = _isStrictComparable,
	    keys$3 = keys_1;

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData$1(object) {
	  var result = keys$3(object),
	      length = result.length;

	  while (length--) {
	    var key = result[length],
	        value = object[key];

	    result[length] = [key, value, isStrictComparable$1(value)];
	  }
	  return result;
	}

	var _getMatchData = getMatchData$1;

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */

	function matchesStrictComparable$2(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}

	var _matchesStrictComparable = matchesStrictComparable$2;

	var baseIsMatch = _baseIsMatch,
	    getMatchData = _getMatchData,
	    matchesStrictComparable$1 = _matchesStrictComparable;

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches$1(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable$1(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	var _baseMatches = baseMatches$1;

	var baseIsEqual = _baseIsEqual,
	    get$1 = get_1,
	    hasIn = hasIn_1,
	    isKey$1 = _isKey,
	    isStrictComparable = _isStrictComparable,
	    matchesStrictComparable = _matchesStrictComparable,
	    toKey$2 = _toKey;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty$1(path, srcValue) {
	  if (isKey$1(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey$2(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get$1(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
	  };
	}

	var _baseMatchesProperty = baseMatchesProperty$1;

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */

	function baseProperty$1(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	var _baseProperty = baseProperty$1;

	var baseGet$1 = _baseGet;

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep$1(path) {
	  return function(object) {
	    return baseGet$1(object, path);
	  };
	}

	var _basePropertyDeep = basePropertyDeep$1;

	var baseProperty = _baseProperty,
	    basePropertyDeep = _basePropertyDeep,
	    isKey = _isKey,
	    toKey$1 = _toKey;

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property$1(path) {
	  return isKey(path) ? baseProperty(toKey$1(path)) : basePropertyDeep(path);
	}

	var property_1 = property$1;

	var baseMatches = _baseMatches,
	    baseMatchesProperty = _baseMatchesProperty,
	    identity$3 = identity_1,
	    isArray$8 = isArray_1,
	    property = property_1;

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee$1(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity$3;
	  }
	  if (typeof value == 'object') {
	    return isArray$8(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}

	var _baseIteratee = baseIteratee$1;

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */

	function createBaseFor$1(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	var _createBaseFor = createBaseFor$1;

	var createBaseFor = _createBaseFor;

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor$2 = createBaseFor();

	var _baseFor = baseFor$2;

	var baseFor$1 = _baseFor,
	    keys$2 = keys_1;

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn$1(object, iteratee) {
	  return object && baseFor$1(object, iteratee, keys$2);
	}

	var _baseForOwn = baseForOwn$1;

	var isArrayLike$3 = isArrayLike_1;

	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach$1(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike$3(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);

	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}

	var _createBaseEach = createBaseEach$1;

	var baseForOwn = _baseForOwn,
	    createBaseEach = _createBaseEach;

	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach$2 = createBaseEach(baseForOwn);

	var _baseEach = baseEach$2;

	var baseEach$1 = _baseEach,
	    isArrayLike$2 = isArrayLike_1;

	/**
	 * The base implementation of `_.map` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function baseMap$1(collection, iteratee) {
	  var index = -1,
	      result = isArrayLike$2(collection) ? Array(collection.length) : [];

	  baseEach$1(collection, function(value, key, collection) {
	    result[++index] = iteratee(value, key, collection);
	  });
	  return result;
	}

	var _baseMap = baseMap$1;

	/**
	 * The base implementation of `_.sortBy` which uses `comparer` to define the
	 * sort order of `array` and replaces criteria objects with their corresponding
	 * values.
	 *
	 * @private
	 * @param {Array} array The array to sort.
	 * @param {Function} comparer The function to define sort order.
	 * @returns {Array} Returns `array`.
	 */

	function baseSortBy$1(array, comparer) {
	  var length = array.length;

	  array.sort(comparer);
	  while (length--) {
	    array[length] = array[length].value;
	  }
	  return array;
	}

	var _baseSortBy = baseSortBy$1;

	var isSymbol$4 = isSymbol_1;

	/**
	 * Compares values to sort them in ascending order.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {number} Returns the sort order indicator for `value`.
	 */
	function compareAscending$1(value, other) {
	  if (value !== other) {
	    var valIsDefined = value !== undefined,
	        valIsNull = value === null,
	        valIsReflexive = value === value,
	        valIsSymbol = isSymbol$4(value);

	    var othIsDefined = other !== undefined,
	        othIsNull = other === null,
	        othIsReflexive = other === other,
	        othIsSymbol = isSymbol$4(other);

	    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
	        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
	        (valIsNull && othIsDefined && othIsReflexive) ||
	        (!valIsDefined && othIsReflexive) ||
	        !valIsReflexive) {
	      return 1;
	    }
	    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
	        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
	        (othIsNull && valIsDefined && valIsReflexive) ||
	        (!othIsDefined && valIsReflexive) ||
	        !othIsReflexive) {
	      return -1;
	    }
	  }
	  return 0;
	}

	var _compareAscending = compareAscending$1;

	var compareAscending = _compareAscending;

	/**
	 * Used by `_.orderBy` to compare multiple properties of a value to another
	 * and stable sort them.
	 *
	 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
	 * specify an order of "desc" for descending or "asc" for ascending sort order
	 * of corresponding values.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {boolean[]|string[]} orders The order to sort by for each property.
	 * @returns {number} Returns the sort order indicator for `object`.
	 */
	function compareMultiple$1(object, other, orders) {
	  var index = -1,
	      objCriteria = object.criteria,
	      othCriteria = other.criteria,
	      length = objCriteria.length,
	      ordersLength = orders.length;

	  while (++index < length) {
	    var result = compareAscending(objCriteria[index], othCriteria[index]);
	    if (result) {
	      if (index >= ordersLength) {
	        return result;
	      }
	      var order = orders[index];
	      return result * (order == 'desc' ? -1 : 1);
	    }
	  }
	  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
	  // that causes it, under certain circumstances, to provide the same value for
	  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
	  // for more details.
	  //
	  // This also ensures a stable sort in V8 and other engines.
	  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
	  return object.index - other.index;
	}

	var _compareMultiple = compareMultiple$1;

	var arrayMap$6 = _arrayMap,
	    baseGet = _baseGet,
	    baseIteratee = _baseIteratee,
	    baseMap = _baseMap,
	    baseSortBy = _baseSortBy,
	    baseUnary$3 = _baseUnary,
	    compareMultiple = _compareMultiple,
	    identity$2 = identity_1,
	    isArray$7 = isArray_1;

	/**
	 * The base implementation of `_.orderBy` without param guards.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	 * @param {string[]} orders The sort orders of `iteratees`.
	 * @returns {Array} Returns the new sorted array.
	 */
	function baseOrderBy$1(collection, iteratees, orders) {
	  if (iteratees.length) {
	    iteratees = arrayMap$6(iteratees, function(iteratee) {
	      if (isArray$7(iteratee)) {
	        return function(value) {
	          return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
	        }
	      }
	      return iteratee;
	    });
	  } else {
	    iteratees = [identity$2];
	  }

	  var index = -1;
	  iteratees = arrayMap$6(iteratees, baseUnary$3(baseIteratee));

	  var result = baseMap(collection, function(value, key, collection) {
	    var criteria = arrayMap$6(iteratees, function(iteratee) {
	      return iteratee(value);
	    });
	    return { 'criteria': criteria, 'index': ++index, 'value': value };
	  });

	  return baseSortBy(result, function(object, other) {
	    return compareMultiple(object, other, orders);
	  });
	}

	var _baseOrderBy = baseOrderBy$1;

	var identity$1 = identity_1,
	    overRest = _overRest,
	    setToString = _setToString;

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest$8(func, start) {
	  return setToString(overRest(func, start, identity$1), func + '');
	}

	var _baseRest = baseRest$8;

	var eq$2 = eq_1,
	    isArrayLike$1 = isArrayLike_1,
	    isIndex = _isIndex,
	    isObject$9 = isObject_1;

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall$3(value, index, object) {
	  if (!isObject$9(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike$1(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq$2(object[index], value);
	  }
	  return false;
	}

	var _isIterateeCall = isIterateeCall$3;

	var baseFlatten$2 = _baseFlatten,
	    baseOrderBy = _baseOrderBy,
	    baseRest$7 = _baseRest,
	    isIterateeCall$2 = _isIterateeCall;

	/**
	 * Creates an array of elements, sorted in ascending order by the results of
	 * running each element in a collection thru each iteratee. This method
	 * performs a stable sort, that is, it preserves the original sort order of
	 * equal elements. The iteratees are invoked with one argument: (value).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {...(Function|Function[])} [iteratees=[_.identity]]
	 *  The iteratees to sort by.
	 * @returns {Array} Returns the new sorted array.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'fred',   'age': 48 },
	 *   { 'user': 'barney', 'age': 36 },
	 *   { 'user': 'fred',   'age': 30 },
	 *   { 'user': 'barney', 'age': 34 }
	 * ];
	 *
	 * _.sortBy(users, [function(o) { return o.user; }]);
	 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
	 *
	 * _.sortBy(users, ['user', 'age']);
	 * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
	 */
	var sortBy$2 = baseRest$7(function(collection, iteratees) {
	  if (collection == null) {
	    return [];
	  }
	  var length = iteratees.length;
	  if (length > 1 && isIterateeCall$2(collection, iteratees[0], iteratees[1])) {
	    iteratees = [];
	  } else if (length > 2 && isIterateeCall$2(iteratees[0], iteratees[1], iteratees[2])) {
	    iteratees = [iteratees[0]];
	  }
	  return baseOrderBy(collection, baseFlatten$2(iteratees, 1), []);
	});

	var sortBy_1 = sortBy$2;

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */

	function baseFindIndex$1(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}

	var _baseFindIndex = baseFindIndex$1;

	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */

	function baseIsNaN$1(value) {
	  return value !== value;
	}

	var _baseIsNaN = baseIsNaN$1;

	/**
	 * A specialized version of `_.indexOf` which performs strict equality
	 * comparisons of values, i.e. `===`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */

	function strictIndexOf$1(array, value, fromIndex) {
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	var _strictIndexOf = strictIndexOf$1;

	var baseFindIndex = _baseFindIndex,
	    baseIsNaN = _baseIsNaN,
	    strictIndexOf = _strictIndexOf;

	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf$2(array, value, fromIndex) {
	  return value === value
	    ? strictIndexOf(array, value, fromIndex)
	    : baseFindIndex(array, baseIsNaN, fromIndex);
	}

	var _baseIndexOf = baseIndexOf$2;

	var baseIndexOf$1 = _baseIndexOf;

	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes$4(array, value) {
	  var length = array == null ? 0 : array.length;
	  return !!length && baseIndexOf$1(array, value, 0) > -1;
	}

	var _arrayIncludes = arrayIncludes$4;

	/**
	 * This function is like `arrayIncludes` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */

	function arrayIncludesWith$3(array, value, comparator) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}

	var _arrayIncludesWith = arrayIncludesWith$3;

	/**
	 * This method returns `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Util
	 * @example
	 *
	 * _.times(2, _.noop);
	 * // => [undefined, undefined]
	 */

	function noop$2() {
	  // No operation performed.
	}

	var noop_1 = noop$2;

	var Set$1 = _Set,
	    noop$1 = noop_1,
	    setToArray$1 = _setToArray;

	/** Used as references for various `Number` constants. */
	var INFINITY$1 = 1 / 0;

	/**
	 * Creates a set object of `values`.
	 *
	 * @private
	 * @param {Array} values The values to add to the set.
	 * @returns {Object} Returns the new set.
	 */
	var createSet$1 = !(Set$1 && (1 / setToArray$1(new Set$1([,-0]))[1]) == INFINITY$1) ? noop$1 : function(values) {
	  return new Set$1(values);
	};

	var _createSet = createSet$1;

	var SetCache$2 = _SetCache,
	    arrayIncludes$3 = _arrayIncludes,
	    arrayIncludesWith$2 = _arrayIncludesWith,
	    cacheHas$2 = _cacheHas,
	    createSet = _createSet,
	    setToArray = _setToArray;

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE$1 = 200;

	/**
	 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new duplicate free array.
	 */
	function baseUniq$3(array, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes$3,
	      length = array.length,
	      isCommon = true,
	      result = [],
	      seen = result;

	  if (comparator) {
	    isCommon = false;
	    includes = arrayIncludesWith$2;
	  }
	  else if (length >= LARGE_ARRAY_SIZE$1) {
	    var set = iteratee ? null : createSet(array);
	    if (set) {
	      return setToArray(set);
	    }
	    isCommon = false;
	    includes = cacheHas$2;
	    seen = new SetCache$2;
	  }
	  else {
	    seen = iteratee ? [] : result;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var seenIndex = seen.length;
	      while (seenIndex--) {
	        if (seen[seenIndex] === computed) {
	          continue outer;
	        }
	      }
	      if (iteratee) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	    else if (!includes(seen, computed, comparator)) {
	      if (seen !== result) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}

	var _baseUniq = baseUniq$3;

	var baseUniq$2 = _baseUniq;

	/**
	 * Creates a duplicate-free version of an array, using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons, in which only the first occurrence of each element
	 * is kept. The order of result values is determined by the order they occur
	 * in the array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @returns {Array} Returns the new duplicate free array.
	 * @example
	 *
	 * _.uniq([2, 1, 2]);
	 * // => [2, 1]
	 */
	function uniq$2(array) {
	  return (array && array.length) ? baseUniq$2(array) : [];
	}

	var uniq_1 = uniq$2;

	var baseUniq$1 = _baseUniq;

	/**
	 * This method is like `_.uniq` except that it accepts `comparator` which
	 * is invoked to compare elements of `array`. The order of result values is
	 * determined by the order they occur in the array.The comparator is invoked
	 * with two arguments: (arrVal, othVal).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new duplicate free array.
	 * @example
	 *
	 * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
	 *
	 * _.uniqWith(objects, _.isEqual);
	 * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
	 */
	function uniqWith$2(array, comparator) {
	  comparator = typeof comparator == 'function' ? comparator : undefined;
	  return (array && array.length) ? baseUniq$1(array, undefined, comparator) : [];
	}

	var uniqWith_1 = uniqWith$2;

	var baseRest$6 = _baseRest,
	    eq$1 = eq_1,
	    isIterateeCall$1 = _isIterateeCall,
	    keysIn$2 = keysIn_1;

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$2 = objectProto$1.hasOwnProperty;

	/**
	 * Assigns own and inherited enumerable string keyed properties of source
	 * objects to the destination object for all destination properties that
	 * resolve to `undefined`. Source objects are applied from left to right.
	 * Once a property is set, additional values of the same property are ignored.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.defaultsDeep
	 * @example
	 *
	 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	 * // => { 'a': 1, 'b': 2 }
	 */
	var defaults$1 = baseRest$6(function(object, sources) {
	  object = Object(object);

	  var index = -1;
	  var length = sources.length;
	  var guard = length > 2 ? sources[2] : undefined;

	  if (guard && isIterateeCall$1(sources[0], sources[1], guard)) {
	    length = 1;
	  }

	  while (++index < length) {
	    var source = sources[index];
	    var props = keysIn$2(source);
	    var propsIndex = -1;
	    var propsLength = props.length;

	    while (++propsIndex < propsLength) {
	      var key = props[propsIndex];
	      var value = object[key];

	      if (value === undefined ||
	          (eq$1(value, objectProto$1[key]) && !hasOwnProperty$2.call(object, key))) {
	        object[key] = source[key];
	      }
	    }
	  }

	  return object;
	});

	var defaults_1 = defaults$1;

	var SetCache$1 = _SetCache,
	    arrayIncludes$2 = _arrayIncludes,
	    arrayIncludesWith$1 = _arrayIncludesWith,
	    arrayMap$5 = _arrayMap,
	    baseUnary$2 = _baseUnary,
	    cacheHas$1 = _cacheHas;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMin = Math.min;

	/**
	 * The base implementation of methods like `_.intersection`, without support
	 * for iteratee shorthands, that accepts an array of arrays to inspect.
	 *
	 * @private
	 * @param {Array} arrays The arrays to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of shared values.
	 */
	function baseIntersection$2(arrays, iteratee, comparator) {
	  var includes = comparator ? arrayIncludesWith$1 : arrayIncludes$2,
	      length = arrays[0].length,
	      othLength = arrays.length,
	      othIndex = othLength,
	      caches = Array(othLength),
	      maxLength = Infinity,
	      result = [];

	  while (othIndex--) {
	    var array = arrays[othIndex];
	    if (othIndex && iteratee) {
	      array = arrayMap$5(array, baseUnary$2(iteratee));
	    }
	    maxLength = nativeMin(array.length, maxLength);
	    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
	      ? new SetCache$1(othIndex && array)
	      : undefined;
	  }
	  array = arrays[0];

	  var index = -1,
	      seen = caches[0];

	  outer:
	  while (++index < length && result.length < maxLength) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    value = (comparator || value !== 0) ? value : 0;
	    if (!(seen
	          ? cacheHas$1(seen, computed)
	          : includes(result, computed, comparator)
	        )) {
	      othIndex = othLength;
	      while (--othIndex) {
	        var cache = caches[othIndex];
	        if (!(cache
	              ? cacheHas$1(cache, computed)
	              : includes(arrays[othIndex], computed, comparator))
	            ) {
	          continue outer;
	        }
	      }
	      if (seen) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}

	var _baseIntersection = baseIntersection$2;

	var isArrayLike = isArrayLike_1,
	    isObjectLike$2 = isObjectLike_1;

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject$4(value) {
	  return isObjectLike$2(value) && isArrayLike(value);
	}

	var isArrayLikeObject_1 = isArrayLikeObject$4;

	var isArrayLikeObject$3 = isArrayLikeObject_1;

	/**
	 * Casts `value` to an empty array if it's not an array like object.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array|Object} Returns the cast array-like object.
	 */
	function castArrayLikeObject$2(value) {
	  return isArrayLikeObject$3(value) ? value : [];
	}

	var _castArrayLikeObject = castArrayLikeObject$2;

	/**
	 * Gets the last element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the last element of `array`.
	 * @example
	 *
	 * _.last([1, 2, 3]);
	 * // => 3
	 */

	function last$1(array) {
	  var length = array == null ? 0 : array.length;
	  return length ? array[length - 1] : undefined;
	}

	var last_1 = last$1;

	var arrayMap$4 = _arrayMap,
	    baseIntersection$1 = _baseIntersection,
	    baseRest$5 = _baseRest,
	    castArrayLikeObject$1 = _castArrayLikeObject,
	    last = last_1;

	/**
	 * This method is like `_.intersection` except that it accepts `comparator`
	 * which is invoked to compare elements of `arrays`. The order and references
	 * of result values are determined by the first array. The comparator is
	 * invoked with two arguments: (arrVal, othVal).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of intersecting values.
	 * @example
	 *
	 * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
	 * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
	 *
	 * _.intersectionWith(objects, others, _.isEqual);
	 * // => [{ 'x': 1, 'y': 2 }]
	 */
	var intersectionWith$2 = baseRest$5(function(arrays) {
	  var comparator = last(arrays),
	      mapped = arrayMap$4(arrays, castArrayLikeObject$1);

	  comparator = typeof comparator == 'function' ? comparator : undefined;
	  if (comparator) {
	    mapped.pop();
	  }
	  return (mapped.length && mapped[0] === arrays[0])
	    ? baseIntersection$1(mapped, undefined, comparator)
	    : [];
	});

	var intersectionWith_1 = intersectionWith$2;

	var baseGetTag$1 = _baseGetTag,
	    getPrototype = _getPrototype,
	    isObjectLike$1 = isObjectLike_1;

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$1 = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject$3(value) {
	  if (!isObjectLike$1(value) || baseGetTag$1(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty$1.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	var isPlainObject_1 = isPlainObject$3;

	var baseGetTag = _baseGetTag,
	    isObjectLike = isObjectLike_1;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]';

	/**
	 * Checks if `value` is classified as a boolean primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
	 * @example
	 *
	 * _.isBoolean(false);
	 * // => true
	 *
	 * _.isBoolean(null);
	 * // => false
	 */
	function isBoolean$1(value) {
	  return value === true || value === false ||
	    (isObjectLike(value) && baseGetTag(value) == boolTag);
	}

	var isBoolean_1 = isBoolean$1;

	var isEqual$1 = isEqual_1;
	var sortBy$1 = sortBy_1;
	var uniq$1 = uniq_1;
	var uniqWith$1 = uniqWith_1;
	var defaults = defaults_1;
	var intersectionWith$1 = intersectionWith_1;
	var isPlainObject$2 = isPlainObject_1;
	var isBoolean = isBoolean_1;

	var normalizeArray = val => Array.isArray(val)
	  ? val : [val];
	var undef = val => val === undefined;
	var keys$1 = obj => isPlainObject$2(obj) || Array.isArray(obj) ? Object.keys(obj) : [];
	var has = (obj, key) => obj.hasOwnProperty(key);
	var stringArray$1 = arr => sortBy$1(uniq$1(arr));
	var undefEmpty = val => undef(val) || (Array.isArray(val) && val.length === 0);
	var keyValEqual = (a, b, key, compare) => b && has(b, key) && a && has(a, key) && compare(a[key], b[key]);
	var undefAndZero = (a, b) => (undef(a) && b === 0) || (undef(b) && a === 0) || isEqual$1(a, b);
	var falseUndefined = (a, b) => (undef(a) && b === false) || (undef(b) && a === false) || isEqual$1(a, b);
	var emptySchema = schema => undef(schema) || isEqual$1(schema, {}) || schema === true;
	var emptyObjUndef = schema => undef(schema) || isEqual$1(schema, {});
	var isSchema$1 = val => undef(val) || isPlainObject$2(val) || val === true || val === false;

	function undefArrayEqual(a, b) {
	  if (undefEmpty(a) && undefEmpty(b)) {
	    return true
	  } else {
	    return isEqual$1(stringArray$1(a), stringArray$1(b))
	  }
	}

	function unsortedNormalizedArray(a, b) {
	  a = normalizeArray(a);
	  b = normalizeArray(b);
	  return isEqual$1(stringArray$1(a), stringArray$1(b))
	}

	function schemaGroup(a, b, key, compare) {
	  var allProps = uniq$1(keys$1(a).concat(keys$1(b)));
	  if (emptyObjUndef(a) && emptyObjUndef(b)) {
	    return true
	  } else if (emptyObjUndef(a) && keys$1(b).length) {
	    return false
	  } else if (emptyObjUndef(b) && keys$1(a).length) {
	    return false
	  }

	  return allProps.every(function(key) {
	    var aVal = a[key];
	    var bVal = b[key];
	    if (Array.isArray(aVal) && Array.isArray(bVal)) {
	      return isEqual$1(stringArray$1(a), stringArray$1(b))
	    } else if (Array.isArray(aVal) && !Array.isArray(bVal)) {
	      return false
	    } else if (Array.isArray(bVal) && !Array.isArray(aVal)) {
	      return false
	    }
	    return keyValEqual(a, b, key, compare)
	  })
	}

	function items$1(a, b, key, compare) {
	  if (isPlainObject$2(a) && isPlainObject$2(b)) {
	    return compare(a, b)
	  } else if (Array.isArray(a) && Array.isArray(b)) {
	    return schemaGroup(a, b, key, compare)
	  } else {
	    return isEqual$1(a, b)
	  }
	}

	function unsortedArray(a, b, key, compare) {
	  var uniqueA = uniqWith$1(a, compare);
	  var uniqueB = uniqWith$1(b, compare);
	  var inter = intersectionWith$1(uniqueA, uniqueB, compare);
	  return inter.length === Math.max(uniqueA.length, uniqueB.length)
	}

	var comparers = {
	  title: isEqual$1,
	  uniqueItems: falseUndefined,
	  minLength: undefAndZero,
	  minItems: undefAndZero,
	  minProperties: undefAndZero,
	  required: undefArrayEqual,
	  enum: undefArrayEqual,
	  type: unsortedNormalizedArray,
	  items: items$1,
	  anyOf: unsortedArray,
	  allOf: unsortedArray,
	  oneOf: unsortedArray,
	  properties: schemaGroup,
	  patternProperties: schemaGroup,
	  dependencies: schemaGroup
	};

	var acceptsUndefined = [
	  'properties',
	  'patternProperties',
	  'dependencies',
	  'uniqueItems',
	  'minLength',
	  'minItems',
	  'minProperties',
	  'required'
	];

	var schemaProps$1 = ['additionalProperties', 'additionalItems', 'contains', 'propertyNames', 'not'];

	function compare$1(a, b, options) {
	  options = defaults(options, {
	    ignore: []
	  });

	  if (emptySchema(a) && emptySchema(b)) {
	    return true
	  }

	  if (!isSchema$1(a) || !isSchema$1(b)) {
	    throw new Error('Either of the values are not a JSON schema.')
	  }
	  if (a === b) {
	    return true
	  }

	  if (isBoolean(a) && isBoolean(b)) {
	    return a === b
	  }

	  if ((a === undefined && b === false) || (b === undefined && a === false)) {
	    return false
	  }

	  if ((undef(a) && !undef(b)) || (!undef(a) && undef(b))) {
	    return false
	  }

	  var allKeys = uniq$1(Object.keys(a).concat(Object.keys(b)));

	  if (options.ignore.length) {
	    allKeys = allKeys.filter(k => options.ignore.indexOf(k) === -1);
	  }

	  if (!allKeys.length) {
	    return true
	  }

	  function innerCompare(a, b) {
	    return compare$1(a, b, options)
	  }

	  return allKeys.every(function(key) {
	    var aValue = a[key];
	    var bValue = b[key];

	    if (schemaProps$1.indexOf(key) !== -1) {
	      return compare$1(aValue, bValue, options)
	    }

	    var comparer = comparers[key];
	    if (!comparer) {
	      comparer = isEqual$1;
	    }

	    // do simple lodash check first
	    if (isEqual$1(aValue, bValue)) {
	      return true
	    }

	    if (acceptsUndefined.indexOf(key) === -1) {
	      if ((!has(a, key) && has(b, key)) || (has(a, key) && !has(b, key))) {
	        return aValue === bValue
	      }
	    }

	    var result = comparer(aValue, bValue, key, innerCompare);
	    if (!isBoolean(result)) {
	      throw new Error('Comparer must return true or false')
	    }
	    return result
	  })
	}

	var src$1 = compare$1;

	/**
	* FUNCTION: isArray( value )
	*	Validates if a value is an array.
	*
	* @param {*} value - value to be validated
	* @returns {Boolean} boolean indicating whether value is an array
	*/
	function isArray$6( value ) {
		return Object.prototype.toString.call( value ) === '[object Array]';
	} // end FUNCTION isArray()

	// EXPORTS //

	var lib$6 = Array.isArray || isArray$6;

	/**
	*
	*	VALIDATE: number
	*
	*
	*	DESCRIPTION:
	*		- Validates if a value is a number.
	*
	*
	*	NOTES:
	*		[1]
	*
	*
	*	TODO:
	*		[1]
	*
	*
	*	LICENSE:
	*		MIT
	*
	*	Copyright (c) 2014. Athan Reines.
	*
	*
	*	AUTHOR:
	*		Athan Reines. kgryte@gmail.com. 2014.
	*
	*/

	/**
	* FUNCTION: isNumber( value )
	*	Validates if a value is a number.
	*
	* @param {*} value - value to be validated
	* @returns {Boolean} boolean indicating whether value is a number
	*/
	function isNumber$1( value ) {
		return ( typeof value === 'number' || Object.prototype.toString.call( value ) === '[object Number]' ) && value.valueOf() === value.valueOf();
	} // end FUNCTION isNumber()


	// EXPORTS //

	var lib$5 = isNumber$1;

	/**
	*
	*	VALIDATE: integer
	*
	*
	*	DESCRIPTION:
	*		- Validates if a value is an integer.
	*
	*
	*	NOTES:
	*		[1]
	*
	*
	*	TODO:
	*		[1]
	*
	*
	*	LICENSE:
	*		MIT
	*
	*	Copyright (c) 2014. Athan Reines.
	*
	*
	*	AUTHOR:
	*		Athan Reines. kgryte@gmail.com. 2014.
	*
	*/

	// MODULES //

	var isNumber = lib$5;


	// ISINTEGER //

	/**
	* FUNCTION: isInteger( value )
	*	Validates if a value is an integer.
	*
	* @param {Number} value - value to be validated
	* @returns {Boolean} boolean indicating whether value is an integer
	*/
	function isInteger$1( value ) {
		return isNumber( value ) && value%1 === 0;
	} // end FUNCTION isInteger()


	// EXPORTS //

	var lib$4 = isInteger$1;

	/**
	*
	*	VALIDATE: integer-array
	*
	*
	*	DESCRIPTION:
	*		- Validates if a value is an integer array.
	*
	*
	*	NOTES:
	*		[1]
	*
	*
	*	TODO:
	*		[1]
	*
	*
	*	LICENSE:
	*		MIT
	*
	*	Copyright (c) 2015. Athan Reines.
	*
	*
	*	AUTHOR:
	*		Athan Reines. kgryte@gmail.com. 2015.
	*
	*/

	// MODULES //

	var isArray$5 = lib$6,
		isInteger = lib$4;


	// IS INTEGER ARRAY //

	/**
	* FUNCTION: isIntegerArray( value )
	*	Validates if a value is an integer array.
	*
	* @param {*} value - value to be validated
	* @returns {Boolean} boolean indicating if a value is an integer array
	*/
	function isIntegerArray$2( value ) {
		var len;
		if ( !isArray$5( value ) ) {
			return false;
		}
		len = value.length;
		if ( !len ) {
			return false;
		}
		for ( var i = 0; i < len; i++ ) {
			if ( !isInteger( value[i] ) ) {
				return false;
			}
		}
		return true;
	} // end FUNCTION isIntegerArray()


	// EXPORTS //

	var lib$3 = isIntegerArray$2;

	/**
	*
	*	VALIDATE: function
	*
	*
	*	DESCRIPTION:
	*		- Validates if a value is a function.
	*
	*
	*	NOTES:
	*		[1]
	*
	*
	*	TODO:
	*		[1]
	*
	*
	*	LICENSE:
	*		MIT
	*
	*	Copyright (c) 2014. Athan Reines.
	*
	*
	*	AUTHOR:
	*		Athan Reines. kgryte@gmail.com. 2014.
	*
	*/

	/**
	* FUNCTION: isFunction( value )
	*	Validates if a value is a function.
	*
	* @param {*} value - value to be validated
	* @returns {Boolean} boolean indicating whether value is a function
	*/
	function isFunction$3( value ) {
		return ( typeof value === 'function' );
	} // end FUNCTION isFunction()


	// EXPORTS //

	var lib$2 = isFunction$3;

	// MODULES //

	var isArray$4 = lib$6,
		isIntegerArray$1 = lib$3,
		isFunction$2 = lib$2;


	// VARIABLES //

	var MAXINT = Math.pow( 2, 31 ) - 1;


	// FUNCTIONS //

	/**
	* FUNCTION: gcd( a, b )
	*	Computes the greatest common divisor of two integers `a` and `b`, using the binary GCD algorithm.
	*
	* @param {Number} a - integer
	* @param {Number} b - integer
	* @returns {Number} greatest common divisor
	*/
	function gcd$1( a, b ) {
		var k = 1,
			t;
		// Simple cases:
		if ( a === 0 ) {
			return b;
		}
		if ( b === 0 ) {
			return a;
		}
		// Reduce `a` and/or `b` to odd numbers and keep track of the greatest power of 2 dividing both `a` and `b`...
		while ( a%2 === 0 && b%2 === 0 ) {
			a = a / 2; // right shift
			b = b / 2; // right shift
			k = k * 2; // left shift
		}
		// Reduce `a` to an odd number...
		while ( a%2 === 0 ) {
			a = a / 2; // right shift
		}
		// Henceforth, `a` is always odd...
		while ( b ) {
			// Remove all factors of 2 in `b`, as they are not common...
			while ( b%2 === 0 ) {
				b = b / 2; // right shift
			}
			// `a` and `b` are both odd. Swap values such that `b` is the larger of the two values, and then set `b` to the difference (which is even)...
			if ( a > b ) {
				t = b;
				b = a;
				a = t;
			}
			b = b - a; // b=0 iff b=a
		}
		// Restore common factors of 2...
		return k * a;
	} // end FUNCTION gcd()

	/**
	* FUNCTION: bitwise( a, b )
	*	Computes the greatest common divisor of two integers `a` and `b`, using the binary GCD algorithm and bitwise operations.
	*
	* @param {Number} a - safe integer
	* @param {Number} b - safe integer
	* @returns {Number} greatest common divisor
	*/
	function bitwise( a, b ) {
		var k = 0,
			t;
		// Simple cases:
		if ( a === 0 ) {
			return b;
		}
		if ( b === 0 ) {
			return a;
		}
		// Reduce `a` and/or `b` to odd numbers and keep track of the greatest power of 2 dividing both `a` and `b`...
		while ( (a & 1) === 0 && (b & 1) === 0 ) {
			a >>>= 1; // right shift
			b >>>= 1; // right shift
			k++;
		}
		// Reduce `a` to an odd number...
		while ( (a & 1) === 0 ) {
			a >>>= 1; // right shift
		}
		// Henceforth, `a` is always odd...
		while ( b ) {
			// Remove all factors of 2 in `b`, as they are not common...
			while ( (b & 1) === 0 ) {
				b >>>= 1; // right shift
			}
			// `a` and `b` are both odd. Swap values such that `b` is the larger of the two values, and then set `b` to the difference (which is even)...
			if ( a > b ) {
				t = b;
				b = a;
				a = t;
			}
			b = b - a; // b=0 iff b=a
		}
		// Restore common factors of 2...
		return a << k;
	} // end FUNCTION bitwise()


	// GREATEST COMMON DIVISOR //

	/**
	* FUNCTION: compute( arr[, clbk] )
	*	Computes the greatest common divisor.
	*
	* @param {Number[]|Number} arr - input array of integers
	* @param {Function|Number} [clbk] - accessor function for accessing array values
	* @returns {Number|Null} greatest common divisor or null
	*/
	function compute() {
		var nargs = arguments.length,
			args,
			clbk,
			arr,
			len,
			a, b,
			i;

		// Copy the input arguments to an array...
		args = new Array( nargs );
		for ( i = 0; i < nargs; i++ ) {
			args[ i ] = arguments[ i ];
		}
		// Have we been provided with integer arguments?
		if ( isIntegerArray$1( args ) ) {
			if ( nargs === 2 ) {
				a = args[ 0 ];
				b = args[ 1 ];
				if ( a < 0 ) {
					a = -a;
				}
				if ( b < 0 ) {
					b = -b;
				}
				if ( a <= MAXINT && b <= MAXINT ) {
					return bitwise( a, b );
				} else {
					return gcd$1( a, b );
				}
			}
			arr = args;
		}
		// If not integers, ensure the first argument is an array...
		else if ( !isArray$4( args[ 0 ] ) ) {
			throw new TypeError( 'gcd()::invalid input argument. Must provide an array of integers. Value: `' + args[ 0 ] + '`.' );
		}
		// Have we been provided with more than one argument? If so, ensure that the accessor argument is a function...
		else if ( nargs > 1 ) {
			arr = args[ 0 ];
			clbk = args[ 1 ];
			if ( !isFunction$2( clbk ) ) {
				throw new TypeError( 'gcd()::invalid input argument. Accessor must be a function. Value: `' + clbk + '`.' );
			}
		}
		// We have been provided an array...
		else {
			arr = args[ 0 ];
		}
		len = arr.length;

		// Check if a sufficient number of values have been provided...
		if ( len < 2 ) {
			return null;
		}
		// If an accessor is provided, extract the array values...
		if ( clbk ) {
			a = new Array( len );
			for ( i = 0; i < len; i++ ) {
				a[ i ] = clbk( arr[ i ], i );
			}
			arr = a;
		}
		// Given an input array, ensure all array values are integers...
		if ( nargs < 3 ) {
			if ( !isIntegerArray$1( arr ) ) {
				throw new TypeError( 'gcd()::invalid input argument. Accessed array values must be integers. Value: `' + arr + '`.' );
			}
		}
		// Convert any negative integers to positive integers...
		for ( i = 0; i < len; i++ ) {
			a = arr[ i ];
			if ( a < 0 ) {
				arr[ i ] = -a;
			}
		}
		// Exploit the fact that the gcd is an associative function...
		a = arr[ 0 ];
		for ( i = 1; i < len; i++ ) {
			b = arr[ i ];
			if ( b <= MAXINT && a <= MAXINT ) {
				a = bitwise( a, b );
			} else {
				a = gcd$1( a, b );
			}
		}
		return a;
	} // end FUNCTION compute()


	// EXPORTS //

	var lib$1 = compute;

	// MODULES //

	var gcd = lib$1,
		isArray$3 = lib$6,
		isIntegerArray = lib$3,
		isFunction$1 = lib$2;


	// LEAST COMMON MULTIPLE //

	/**
	* FUNCTION: lcm( arr[, clbk] )
	*	Computes the least common multiple (lcm).
	*
	* @param {Number[]|Number} arr - input array of integers
	* @param {Function|Number} [accessor] - accessor function for accessing array values
	* @returns {Number|Null} least common multiple or null
	*/
	function lcm() {
		var nargs = arguments.length,
			args,
			clbk,
			arr,
			len,
			a, b,
			i;

		// Copy the input arguments to an array...
		args = new Array( nargs );
		for ( i = 0; i < nargs; i++ ) {
			args[ i ] = arguments[ i ];
		}
		// Have we been provided with integer arguments?
		if ( isIntegerArray( args ) ) {
			if ( nargs === 2 ) {
				a = args[ 0 ];
				b = args[ 1 ];
				if ( a < 0 ) {
					a = -a;
				}
				if ( b < 0 ) {
					b = -b;
				}
				if ( a === 0 || b === 0 ) {
					return 0;
				}
				return ( a/gcd(a,b) ) * b;
			}
			arr = args;
		}
		// If not integers, ensure that the first argument is an array...
		else if ( !isArray$3( args[ 0 ] ) ) {
			throw new TypeError( 'lcm()::invalid input argument. Must provide an array of integers. Value: `' + args[ 0 ] + '`.' );
		}
		// Have we been provided with more than one argument? If so, ensure that the accessor argument is a function...
		else if ( nargs > 1 ) {
			arr = args[ 0 ];
			clbk = args[ 1 ];
			if ( !isFunction$1( clbk ) ) {
				throw new TypeError( 'lcm()::invalid input argument. Accessor must be a function. Value: `' + clbk + '`.' );
			}
		}
		// We have been provided an array...
		else {
			arr = args[ 0 ];
		}
		len = arr.length;

		// Check if a sufficient number of values have been provided...
		if ( len < 2 ) {
			return null;
		}
		// If an accessor is provided, extract the array values...
		if ( clbk ) {
			a = new Array( len );
			for ( i = 0; i < len; i++ ) {
				a[ i ] = clbk( arr[ i ], i );
			}
			arr = a;
		}
		// Given an input array, ensure all array values are integers...
		if ( nargs < 3 ) {
			if ( !isIntegerArray( arr ) ) {
				throw new TypeError( 'lcm()::invalid input argument. Accessed array values must be integers. Value: `' + arr + '`.' );
			}
		}
		// Convert any negative integers to positive integers...
		for ( i = 0; i < len; i++ ) {
			a = arr[ i ];
			if ( a < 0 ) {
				arr[ i ] = -a;
			}
		}
		// Exploit the fact that the lcm is an associative function...
		a = arr[ 0 ];
		for ( i = 1; i < len; i++ ) {
			b = arr[ i ];
			if ( a === 0 || b === 0 ) {
				return 0;
			}
			a = ( a/gcd(a,b) ) * b;
		}
		return a;
	} // end FUNCTION lcm()


	// EXPORTS //

	var lib = lcm;

	var baseAssignValue = _baseAssignValue,
	    eq = eq_1;

	/**
	 * This function is like `assignValue` except that it doesn't assign
	 * `undefined` values.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignMergeValue$2(object, key, value) {
	  if ((value !== undefined && !eq(object[key], value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	var _assignMergeValue = assignMergeValue$2;

	/**
	 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */

	function safeGet$2(object, key) {
	  if (key === 'constructor' && typeof object[key] === 'function') {
	    return;
	  }

	  if (key == '__proto__') {
	    return;
	  }

	  return object[key];
	}

	var _safeGet = safeGet$2;

	var copyObject = _copyObject,
	    keysIn$1 = keysIn_1;

	/**
	 * Converts `value` to a plain object flattening inherited enumerable string
	 * keyed properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject$1(value) {
	  return copyObject(value, keysIn$1(value));
	}

	var toPlainObject_1 = toPlainObject$1;

	var assignMergeValue$1 = _assignMergeValue,
	    cloneBuffer = _cloneBuffer.exports,
	    cloneTypedArray = _cloneTypedArray,
	    copyArray$2 = _copyArray,
	    initCloneObject = _initCloneObject,
	    isArguments$1 = isArguments_1,
	    isArray$2 = isArray_1,
	    isArrayLikeObject$2 = isArrayLikeObject_1,
	    isBuffer = isBuffer$5.exports,
	    isFunction = isFunction_1,
	    isObject$8 = isObject_1,
	    isPlainObject$1 = isPlainObject_1,
	    isTypedArray = isTypedArray_1,
	    safeGet$1 = _safeGet,
	    toPlainObject = toPlainObject_1;

	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMergeDeep$1(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	  var objValue = safeGet$1(object, key),
	      srcValue = safeGet$1(source, key),
	      stacked = stack.get(srcValue);

	  if (stacked) {
	    assignMergeValue$1(object, key, stacked);
	    return;
	  }
	  var newValue = customizer
	    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
	    : undefined;

	  var isCommon = newValue === undefined;

	  if (isCommon) {
	    var isArr = isArray$2(srcValue),
	        isBuff = !isArr && isBuffer(srcValue),
	        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

	    newValue = srcValue;
	    if (isArr || isBuff || isTyped) {
	      if (isArray$2(objValue)) {
	        newValue = objValue;
	      }
	      else if (isArrayLikeObject$2(objValue)) {
	        newValue = copyArray$2(objValue);
	      }
	      else if (isBuff) {
	        isCommon = false;
	        newValue = cloneBuffer(srcValue, true);
	      }
	      else if (isTyped) {
	        isCommon = false;
	        newValue = cloneTypedArray(srcValue, true);
	      }
	      else {
	        newValue = [];
	      }
	    }
	    else if (isPlainObject$1(srcValue) || isArguments$1(srcValue)) {
	      newValue = objValue;
	      if (isArguments$1(objValue)) {
	        newValue = toPlainObject(objValue);
	      }
	      else if (!isObject$8(objValue) || isFunction(objValue)) {
	        newValue = initCloneObject(srcValue);
	      }
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    stack.set(srcValue, newValue);
	    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	    stack['delete'](srcValue);
	  }
	  assignMergeValue$1(object, key, newValue);
	}

	var _baseMergeDeep = baseMergeDeep$1;

	var Stack = _Stack,
	    assignMergeValue = _assignMergeValue,
	    baseFor = _baseFor,
	    baseMergeDeep = _baseMergeDeep,
	    isObject$7 = isObject_1,
	    keysIn = keysIn_1,
	    safeGet = _safeGet;

	/**
	 * The base implementation of `_.merge` without support for multiple sources.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMerge$2(object, source, srcIndex, customizer, stack) {
	  if (object === source) {
	    return;
	  }
	  baseFor(source, function(srcValue, key) {
	    stack || (stack = new Stack);
	    if (isObject$7(srcValue)) {
	      baseMergeDeep(object, source, key, srcIndex, baseMerge$2, customizer, stack);
	    }
	    else {
	      var newValue = customizer
	        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
	        : undefined;

	      if (newValue === undefined) {
	        newValue = srcValue;
	      }
	      assignMergeValue(object, key, newValue);
	    }
	  }, keysIn);
	}

	var _baseMerge = baseMerge$2;

	var baseMerge$1 = _baseMerge,
	    isObject$6 = isObject_1;

	/**
	 * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
	 * objects into destination objects that are passed thru.
	 *
	 * @private
	 * @param {*} objValue The destination value.
	 * @param {*} srcValue The source value.
	 * @param {string} key The key of the property to merge.
	 * @param {Object} object The parent object of `objValue`.
	 * @param {Object} source The parent object of `srcValue`.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 * @returns {*} Returns the value to assign.
	 */
	function customDefaultsMerge$1(objValue, srcValue, key, object, source, stack) {
	  if (isObject$6(objValue) && isObject$6(srcValue)) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    stack.set(srcValue, objValue);
	    baseMerge$1(objValue, srcValue, undefined, customDefaultsMerge$1, stack);
	    stack['delete'](srcValue);
	  }
	  return objValue;
	}

	var _customDefaultsMerge = customDefaultsMerge$1;

	var baseRest$4 = _baseRest,
	    isIterateeCall = _isIterateeCall;

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner$1(assigner) {
	  return baseRest$4(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	var _createAssigner = createAssigner$1;

	var baseMerge = _baseMerge,
	    createAssigner = _createAssigner;

	/**
	 * This method is like `_.merge` except that it accepts `customizer` which
	 * is invoked to produce the merged values of the destination and source
	 * properties. If `customizer` returns `undefined`, merging is handled by the
	 * method instead. The `customizer` is invoked with six arguments:
	 * (objValue, srcValue, key, object, source, stack).
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} sources The source objects.
	 * @param {Function} customizer The function to customize assigned values.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * function customizer(objValue, srcValue) {
	 *   if (_.isArray(objValue)) {
	 *     return objValue.concat(srcValue);
	 *   }
	 * }
	 *
	 * var object = { 'a': [1], 'b': [2] };
	 * var other = { 'a': [3], 'b': [4] };
	 *
	 * _.mergeWith(object, other, customizer);
	 * // => { 'a': [1, 3], 'b': [2, 4] }
	 */
	var mergeWith$1 = createAssigner(function(object, source, srcIndex, customizer) {
	  baseMerge(object, source, srcIndex, customizer);
	});

	var mergeWith_1 = mergeWith$1;

	var apply$2 = _apply,
	    baseRest$3 = _baseRest,
	    customDefaultsMerge = _customDefaultsMerge,
	    mergeWith = mergeWith_1;

	/**
	 * This method is like `_.defaults` except that it recursively assigns
	 * default properties.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.10.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.defaults
	 * @example
	 *
	 * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
	 * // => { 'a': { 'b': 2, 'c': 3 } }
	 */
	var defaultsDeep$1 = baseRest$3(function(args) {
	  args.push(undefined, customDefaultsMerge);
	  return apply$2(mergeWith, undefined, args);
	});

	var defaultsDeep_1 = defaultsDeep$1;

	var baseFlatten$1 = _baseFlatten;

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Recursively flattens `array`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Array
	 * @param {Array} array The array to flatten.
	 * @returns {Array} Returns the new flattened array.
	 * @example
	 *
	 * _.flattenDeep([1, [2, [3, [4]], 5]]);
	 * // => [1, 2, 3, 4, 5]
	 */
	function flattenDeep$1(array) {
	  var length = array == null ? 0 : array.length;
	  return length ? baseFlatten$1(array, INFINITY) : [];
	}

	var flattenDeep_1 = flattenDeep$1;

	var arrayMap$3 = _arrayMap,
	    baseIntersection = _baseIntersection,
	    baseRest$2 = _baseRest,
	    castArrayLikeObject = _castArrayLikeObject;

	/**
	 * Creates an array of unique values that are included in all given arrays
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons. The order and references of result values are
	 * determined by the first array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @returns {Array} Returns the new array of intersecting values.
	 * @example
	 *
	 * _.intersection([2, 1], [2, 3]);
	 * // => [2]
	 */
	var intersection$1 = baseRest$2(function(arrays) {
	  var mapped = arrayMap$3(arrays, castArrayLikeObject);
	  return (mapped.length && mapped[0] === arrays[0])
	    ? baseIntersection(mapped)
	    : [];
	});

	var intersection_1 = intersection$1;

	/**
	 * This function is like `baseIndexOf` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */

	function baseIndexOfWith$1(array, value, fromIndex, comparator) {
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (comparator(array[index], value)) {
	      return index;
	    }
	  }
	  return -1;
	}

	var _baseIndexOfWith = baseIndexOfWith$1;

	var arrayMap$2 = _arrayMap,
	    baseIndexOf = _baseIndexOf,
	    baseIndexOfWith = _baseIndexOfWith,
	    baseUnary$1 = _baseUnary,
	    copyArray$1 = _copyArray;

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * The base implementation of `_.pullAllBy` without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to remove.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns `array`.
	 */
	function basePullAll$1(array, values, iteratee, comparator) {
	  var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
	      index = -1,
	      length = values.length,
	      seen = array;

	  if (array === values) {
	    values = copyArray$1(values);
	  }
	  if (iteratee) {
	    seen = arrayMap$2(array, baseUnary$1(iteratee));
	  }
	  while (++index < length) {
	    var fromIndex = 0,
	        value = values[index],
	        computed = iteratee ? iteratee(value) : value;

	    while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
	      if (seen !== array) {
	        splice.call(seen, fromIndex, 1);
	      }
	      splice.call(array, fromIndex, 1);
	    }
	  }
	  return array;
	}

	var _basePullAll = basePullAll$1;

	var basePullAll = _basePullAll;

	/**
	 * This method is like `_.pull` except that it accepts an array of values to remove.
	 *
	 * **Note:** Unlike `_.difference`, this method mutates `array`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Array
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to remove.
	 * @returns {Array} Returns `array`.
	 * @example
	 *
	 * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
	 *
	 * _.pullAll(array, ['a', 'c']);
	 * console.log(array);
	 * // => ['b', 'b']
	 */
	function pullAll$1(array, values) {
	  return (array && array.length && values && values.length)
	    ? basePullAll(array, values)
	    : array;
	}

	var pullAll_1 = pullAll$1;

	var identity = identity_1;

	/**
	 * Casts `value` to `identity` if it's not a function.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Function} Returns cast function.
	 */
	function castFunction$1(value) {
	  return typeof value == 'function' ? value : identity;
	}

	var _castFunction = castFunction$1;

	var arrayEach = _arrayEach,
	    baseEach = _baseEach,
	    castFunction = _castFunction,
	    isArray$1 = isArray_1;

	/**
	 * Iterates over elements of `collection` and invokes `iteratee` for each element.
	 * The iteratee is invoked with three arguments: (value, index|key, collection).
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * **Note:** As with other "Collections" methods, objects with a "length"
	 * property are iterated like arrays. To avoid this behavior use `_.forIn`
	 * or `_.forOwn` for object iteration.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @alias each
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 * @see _.forEachRight
	 * @example
	 *
	 * _.forEach([1, 2], function(value) {
	 *   console.log(value);
	 * });
	 * // => Logs `1` then `2`.
	 *
	 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
	 *   console.log(key);
	 * });
	 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	 */
	function forEach$1(collection, iteratee) {
	  var func = isArray$1(collection) ? arrayEach : baseEach;
	  return func(collection, castFunction(iteratee));
	}

	var forEach_1 = forEach$1;

	var SetCache = _SetCache,
	    arrayIncludes$1 = _arrayIncludes,
	    arrayIncludesWith = _arrayIncludesWith,
	    arrayMap$1 = _arrayMap,
	    baseUnary = _baseUnary,
	    cacheHas = _cacheHas;

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of methods like `_.difference` without support
	 * for excluding multiple arrays or iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference$1(array, values, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes$1,
	      isCommon = true,
	      length = array.length,
	      result = [],
	      valuesLength = values.length;

	  if (!length) {
	    return result;
	  }
	  if (iteratee) {
	    values = arrayMap$1(values, baseUnary(iteratee));
	  }
	  if (comparator) {
	    includes = arrayIncludesWith;
	    isCommon = false;
	  }
	  else if (values.length >= LARGE_ARRAY_SIZE) {
	    includes = cacheHas;
	    isCommon = false;
	    values = new SetCache(values);
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee == null ? value : iteratee(value);

	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === computed) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (!includes(values, computed, comparator)) {
	      result.push(value);
	    }
	  }
	  return result;
	}

	var _baseDifference = baseDifference$1;

	var baseDifference = _baseDifference,
	    baseRest$1 = _baseRest,
	    isArrayLikeObject$1 = isArrayLikeObject_1;

	/**
	 * Creates an array excluding all given values using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * **Note:** Unlike `_.pull`, this method returns a new array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {...*} [values] The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 * @see _.difference, _.xor
	 * @example
	 *
	 * _.without([2, 1, 2, 3], 1, 2);
	 * // => [3]
	 */
	var without$1 = baseRest$1(function(array, values) {
	  return isArrayLikeObject$1(array)
	    ? baseDifference(array, values)
	    : [];
	});

	var without_1 = without$1;

	var cloneDeep = cloneDeep_1;
	var compare = src$1;
	var computeLcm = lib;
	var defaultsDeep = defaultsDeep_1;
	var flatten = flatten_1;
	var flattenDeep = flattenDeep_1;
	var intersection = intersection_1;
	var intersectionWith = intersectionWith_1;
	var isEqual = isEqual_1;
	var isPlainObject = isPlainObject_1;
	var pullAll = pullAll_1;
	var sortBy = sortBy_1;
	var forEach = forEach_1;
	var uniq = uniq_1;
	var uniqWith = uniqWith_1;
	var without = without_1;

	var withoutArr = (arr, ...rest) => without.apply(null, [arr].concat(flatten(rest)));
	var isPropertyRelated = (key) => contains$1(propertyRelated, key);
	var isItemsRelated = (key) => contains$1(itemsRelated, key);
	var contains$1 = (arr, val) => arr.indexOf(val) !== -1;
	var isEmptySchema = (obj) => (!keys(obj).length) && obj !== false && obj !== true;
	var isSchema = (val) => isPlainObject(val) || val === true || val === false;
	var isFalse = (val) => val === false;
	var isTrue = (val) => val === true;
	var schemaResolver = (compacted, key, mergeSchemas) => mergeSchemas(compacted);
	var stringArray = (values) => sortBy(uniq(flattenDeep(values)));
	var notUndefined = (val) => val !== undefined;
	var allUniqueKeys = (arr) => uniq(flattenDeep(arr.map(keys)));

	// resolvers
	var first = compacted => compacted[0];
	var required$2 = compacted => stringArray(compacted);
	var maximumValue = compacted => Math.max.apply(Math, compacted);
	var minimumValue = compacted => Math.min.apply(Math, compacted);
	var uniqueItems$1 = compacted => compacted.some(isTrue);
	var examples = compacted => uniqWith(flatten(compacted), isEqual);

	function compareProp(key) {
	  return function(a, b) {
	    return compare({
	      [key]: a
	    }, {[key]: b})
	  }
	}

	function getAllOf(schema) {
	  if (Array.isArray(schema.allOf)) {
	    var allOf = schema.allOf;
	    delete schema.allOf;
	    return [schema].concat(allOf.map(function(allSchema) {
	      return getAllOf(allSchema)
	    }))
	  } else {
	    return [schema]
	  }
	}

	function getValues(schemas, key) {
	  return schemas.map(function(schema) {
	    return schema && schema[key]
	  })
	}

	function getItemSchemas(subSchemas, key) {
	  return subSchemas.map(function(sub) {
	    if (!sub) {
	      return
	    }

	    if (Array.isArray(sub.items)) {
	      var schemaAtPos = sub.items[key];
	      if (isSchema(schemaAtPos)) {
	        return schemaAtPos
	      } else if (sub.hasOwnProperty('additionalItems')) {
	        return sub.additionalItems
	      }
	    } else {
	      return sub.items
	    }
	  })
	}

	function tryMergeSchemaGroups(schemaGroups, mergeSchemas) {
	  return schemaGroups.map(function(schemas, index) {
	    try {
	      return mergeSchemas(schemas, index)
	    } catch (e) {
	      return undefined
	    }
	  }).filter(notUndefined)
	}

	function getAdditionalSchemas(subSchemas) {
	  return subSchemas.map(function(sub) {
	    if (!sub) {
	      return
	    }
	    if (Array.isArray(sub.items)) {
	      return sub.additionalItems
	    }
	    return sub.items
	  })
	}

	function keys(obj) {
	  if (isPlainObject(obj) || Array.isArray(obj)) {
	    return Object.keys(obj)
	  } else {
	    return []
	  }
	}

	function getAnyOfCombinations(arrOfArrays, combinations) {
	  combinations = combinations || [];
	  if (!arrOfArrays.length) {
	    return combinations
	  }

	  var values = arrOfArrays.slice(0).shift();
	  var rest = arrOfArrays.slice(1);
	  if (combinations.length) {
	    return getAnyOfCombinations(rest, flatten(combinations.map(combination => values.map(item => ([item].concat(combination))))))
	  }
	  return getAnyOfCombinations(rest, values.map(item => (item)))
	}

	function mergeWithArray(base, newItems) {
	  if (Array.isArray(base)) {
	    base.splice.apply(base, [0, 0].concat(newItems));
	    return base
	  } else {
	    return newItems
	  }
	}

	function throwIncompatible(values, paths) {
	  var asJSON;
	  try {
	    asJSON = values.map(function(val) {
	      return JSON.stringify(val, null, 2)
	    }).join('\n');
	  } catch (variable) {
	    asJSON = values.join(', ');
	  }
	  throw new Error('Could not resolve values for path:"' + paths.join('.') + '". They are probably incompatible. Values: \n' + asJSON)
	}

	function cleanupReturnValue(returnObject) {
	  // cleanup empty
	  for (var prop in returnObject) {
	    if (returnObject.hasOwnProperty(prop) && isEmptySchema(returnObject[prop])) {
	      delete returnObject[prop];
	    }
	  }
	  return returnObject
	}

	function createRequiredSubMerger(mergeSchemas, key, parents) {
	  return function(schemas, subKey) {
	    if (subKey === undefined) {
	      throw new Error('You need to call merger with a key for the property name or index if array.')
	    }
	    subKey = String(subKey);
	    return mergeSchemas(schemas, null, parents.concat(key, subKey))
	  }
	}

	function callGroupResolver(keys, resolverName, schemas, mergeSchemas, options, parents) {
	  if (keys.length) {
	    var resolver = options.resolvers[resolverName];
	    if (!resolver) {
	      throw new Error('No resolver found for ' + resolverName)
	    }

	    var compacted = uniqWith(schemas.map(function(schema) {
	      return keys.reduce(function(all, key) {
	        if (schema[key] !== undefined) {
	          all[key] = schema[key];
	        }
	        return all
	      }, {})
	    }).filter(notUndefined), compare);

	    var related = resolverName === 'properties'
	      ? propertyRelated
	      : itemsRelated;

	    var mergers = related.reduce(function(all, key) {
	      if (contains$1(schemaGroupProps, key)) {
	        all[key] = createRequiredSubMerger(mergeSchemas, key, parents);
	      } else {
	        all[key] = function(schemas) {
	          return mergeSchemas(schemas, null, parents.concat(key))
	        };
	      }
	      return all
	    }, {});

	    if (resolverName === 'items') {
	      mergers.itemsArray = createRequiredSubMerger(mergeSchemas, 'items', parents);
	      mergers.items = function(schemas) {
	        return mergeSchemas(schemas, null, parents.concat('items'))
	      };
	    }

	    var result = resolver(compacted, parents.concat(resolverName), mergers, options);

	    if (!isPlainObject(result)) {
	      throwIncompatible(compacted, parents.concat(resolverName));
	    }

	    return cleanupReturnValue(result)
	  }
	}

	// Provide source when array
	function mergeSchemaGroup(group, mergeSchemas, source) {
	  var allKeys = allUniqueKeys(source || group);
	  var extractor = source
	    ? getItemSchemas
	    : getValues;
	  return allKeys.reduce(function(all, key) {
	    var schemas = extractor(group, key);
	    var compacted = uniqWith(schemas.filter(notUndefined), compare);
	    all[key] = mergeSchemas(compacted, key);
	    return all
	  }, source
	    ? []
	    : {})
	}

	function removeFalseSchemas(target) {
	  forEach(target, function(schema, prop) {
	    if (schema === false) {
	      delete target[prop];
	    }
	  });
	}

	function removeFalseSchemasFromArray(target) {
	  forEach(target, function(schema, index) {
	    if (schema === false) {
	      target.splice(index, 1);
	    }
	  });
	}

	function createRequiredMetaArray(arr) {
	  return {required: arr}
	}

	var propertyRelated = ['properties', 'patternProperties', 'additionalProperties'];
	var itemsRelated = ['items', 'additionalItems'];
	var schemaGroupProps = ['properties', 'patternProperties', 'definitions', 'dependencies'];
	var schemaArrays = ['anyOf', 'oneOf'];
	var schemaProps = [
	  'additionalProperties',
	  'additionalItems',
	  'contains',
	  'propertyNames',
	  'not',
	  'items'
	];

	var defaultResolvers = {
	  type(compacted) {
	    if (compacted.some(Array.isArray)) {
	      var normalized = compacted.map(function(val) {
	        return Array.isArray(val)
	          ? val
	          : [val]
	      });
	      var common = intersection.apply(null, normalized);

	      if (common.length === 1) {
	        return common[0]
	      } else if (common.length > 1) {
	        return uniq(common)
	      }
	    }
	  },
	  properties(values, key, mergers, options) {
	    // first get rid of all non permitted properties
	    if (!options.ignoreAdditionalProperties) {
	      values.forEach(function(subSchema) {
	        var otherSubSchemas = values.filter(s => s !== subSchema);
	        var ownKeys = keys(subSchema.properties);
	        var ownPatternKeys = keys(subSchema.patternProperties);
	        var ownPatterns = ownPatternKeys.map(k => new RegExp(k));
	        otherSubSchemas.forEach(function(other) {
	          var allOtherKeys = keys(other.properties);
	          var keysMatchingPattern = allOtherKeys.filter(k => ownPatterns.some(pk => pk.test(k)));
	          var additionalKeys = withoutArr(allOtherKeys, ownKeys, keysMatchingPattern);
	          additionalKeys.forEach(function(key) {
	            other.properties[key] = mergers.properties([
	              other.properties[key], subSchema.additionalProperties
	            ], key);
	          });
	        });
	      });

	      // remove disallowed patternProperties
	      values.forEach(function(subSchema) {
	        var otherSubSchemas = values.filter(s => s !== subSchema);
	        var ownPatternKeys = keys(subSchema.patternProperties);
	        if (subSchema.additionalProperties === false) {
	          otherSubSchemas.forEach(function(other) {
	            var allOtherPatterns = keys(other.patternProperties);
	            var additionalPatternKeys = withoutArr(allOtherPatterns, ownPatternKeys);
	            additionalPatternKeys.forEach(key => delete other.patternProperties[key]);
	          });
	        }
	      });
	    }

	    var returnObject = {
	      additionalProperties: mergers.additionalProperties(values.map(s => s.additionalProperties)),
	      patternProperties: mergeSchemaGroup(values.map(s => s.patternProperties), mergers.patternProperties),
	      properties: mergeSchemaGroup(values.map(s => s.properties), mergers.properties)
	    };

	    if (returnObject.additionalProperties === false) {
	      removeFalseSchemas(returnObject.properties);
	    }

	    return returnObject
	  },
	  dependencies(compacted, paths, mergeSchemas) {
	    var allChildren = allUniqueKeys(compacted);

	    return allChildren.reduce(function(all, childKey) {
	      var childSchemas = getValues(compacted, childKey);
	      var innerCompacted = uniqWith(childSchemas.filter(notUndefined), isEqual);

	      // to support dependencies
	      var innerArrays = innerCompacted.filter(Array.isArray);

	      if (innerArrays.length) {
	        if (innerArrays.length === innerCompacted.length) {
	          all[childKey] = stringArray(innerCompacted);
	        } else {
	          var innerSchemas = innerCompacted.filter(isSchema);
	          var arrayMetaScheams = innerArrays.map(createRequiredMetaArray);
	          all[childKey] = mergeSchemas(innerSchemas.concat(arrayMetaScheams), childKey);
	        }
	        return all
	      }

	      innerCompacted = uniqWith(innerCompacted, compare);

	      all[childKey] = mergeSchemas(innerCompacted, childKey);
	      return all
	    }, {})
	  },
	  items(values, paths, mergers) {
	    var items = values.map(s => s.items);
	    var itemsCompacted = items.filter(notUndefined);
	    var returnObject = {};

	    if (itemsCompacted.every(isSchema)) {
	      returnObject.items = mergers.items(items);
	    } else {
	      returnObject.items = mergeSchemaGroup(values, mergers.itemsArray, items);
	    }

	    var schemasAtLastPos;
	    if (itemsCompacted.every(Array.isArray)) {
	      schemasAtLastPos = values.map(s => s.additionalItems);
	    } else if (itemsCompacted.some(Array.isArray)) {
	      schemasAtLastPos = getAdditionalSchemas(values);
	    }

	    if (schemasAtLastPos) {
	      returnObject.additionalItems = mergers.additionalItems(schemasAtLastPos);
	    }

	    if (returnObject.additionalItems === false && Array.isArray(returnObject.items)) {
	      removeFalseSchemasFromArray(returnObject.items);
	    }

	    return returnObject
	  },
	  oneOf(compacted, paths, mergeSchemas) {
	    var combinations = getAnyOfCombinations(cloneDeep(compacted));
	    var result = tryMergeSchemaGroups(combinations, mergeSchemas);
	    var unique = uniqWith(result, compare);

	    if (unique.length) {
	      return unique
	    }
	  },
	  not(compacted) {
	    return {anyOf: compacted}
	  },
	  pattern(compacted, paths, mergeSchemas, options, reportUnresolved) {
	    var key = paths.pop();
	    reportUnresolved(compacted.map(function(regexp) {
	      return {[key]: regexp}
	    }));
	  },
	  multipleOf(compacted) {
	    var integers = compacted.slice(0);
	    var factor = 1;
	    while (integers.some(n => !Number.isInteger(n))) {
	      integers = integers.map(n => n * 10);
	      factor = factor * 10;
	    }
	    return computeLcm(integers) / factor
	  },
	  enum(compacted) {
	    var enums = intersectionWith.apply(null, compacted.concat(isEqual));
	    if (enums.length) {
	      return sortBy(enums)
	    }
	  }
	};

	defaultResolvers.$id = first;
	defaultResolvers.$ref = first;
	defaultResolvers.$schema = first;
	defaultResolvers.additionalItems = schemaResolver;
	defaultResolvers.additionalProperties = schemaResolver;
	defaultResolvers.anyOf = defaultResolvers.oneOf;
	defaultResolvers.contains = schemaResolver;
	defaultResolvers.default = first;
	defaultResolvers.definitions = defaultResolvers.dependencies;
	defaultResolvers.description = first;
	defaultResolvers.examples = examples;
	defaultResolvers.exclusiveMaximum = minimumValue;
	defaultResolvers.exclusiveMinimum = maximumValue;
	defaultResolvers.maximum = minimumValue;
	defaultResolvers.maxItems = minimumValue;
	defaultResolvers.maxLength = minimumValue;
	defaultResolvers.maxProperties = minimumValue;
	defaultResolvers.minimum = maximumValue;
	defaultResolvers.minItems = maximumValue;
	defaultResolvers.minLength = maximumValue;
	defaultResolvers.minProperties = maximumValue;
	defaultResolvers.propertyNames = schemaResolver;
	defaultResolvers.required = required$2;
	defaultResolvers.title = first;
	defaultResolvers.uniqueItems = uniqueItems$1;

	function merger(rootSchema, options, totalSchemas) {
	  options = defaultsDeep(options, {
	    ignoreAdditionalProperties: false,
	    resolvers: defaultResolvers
	  });

	  function mergeSchemas(schemas, base, parents) {
	    schemas = cloneDeep(schemas.filter(notUndefined));
	    parents = parents || [];
	    var merged = isPlainObject(base)
	      ? base
	      : {};

	    // return undefined, an empty schema
	    if (!schemas.length) {
	      return
	    }

	    if (schemas.some(isFalse)) {
	      return false
	    }

	    if (schemas.every(isTrue)) {
	      return true
	    }

	    // there are no false and we don't need the true ones as they accept everything
	    schemas = schemas.filter(isPlainObject);

	    var allKeys = allUniqueKeys(schemas);

	    if (contains$1(allKeys, 'allOf')) {
	      return merger({
	        allOf: schemas
	      }, options)
	    }

	    var propertyKeys = allKeys.filter(isPropertyRelated);
	    pullAll(allKeys, propertyKeys);

	    var itemKeys = allKeys.filter(isItemsRelated);
	    pullAll(allKeys, itemKeys);

	    allKeys.forEach(function(key) {
	      var values = getValues(schemas, key);
	      var compacted = uniqWith(values.filter(notUndefined), compareProp(key));

	      // arrayprops like anyOf and oneOf must be merged first, as they contains schemas
	      // allOf is treated differently alltogether
	      if (compacted.length === 1 && contains$1(schemaArrays, key)) {
	        merged[key] = compacted[0].map(function(schema) {
	          return mergeSchemas([schema], schema)
	        });
	        // prop groups must always be resolved
	      } else if (compacted.length === 1 && !contains$1(schemaGroupProps, key) && !contains$1(schemaProps, key)) {
	        merged[key] = compacted[0];
	      } else {
	        var resolver = options.resolvers[key] || options.resolvers.defaultResolver;

	        if (!resolver) {
	          throw new Error('No resolver found for key ' + key + '. You can provide a resolver for this keyword in the options, or provide a default resolver.')
	        }

	        var merger;
	        // get custom merger for groups
	        if (contains$1(schemaGroupProps, key) || contains$1(schemaArrays, key)) {
	          merger = createRequiredSubMerger(mergeSchemas, key, parents);
	        } else {
	          merger = function(schemas) {
	            return mergeSchemas(schemas, null, parents.concat(key))
	          };
	        }

	        var calledWithArray = false;
	        merged[key] = resolver(compacted, parents.concat(key), merger, options, function(unresolvedSchemas) {
	          calledWithArray = Array.isArray(unresolvedSchemas);
	          return addToAllOf(unresolvedSchemas)
	        });

	        if (merged[key] === undefined && !calledWithArray) {
	          throwIncompatible(compacted, parents.concat(key));
	        } else if (merged[key] === undefined) {
	          delete merged[key];
	        }
	      }
	    });

	    Object.assign(merged, callGroupResolver(propertyKeys, 'properties', schemas, mergeSchemas, options, parents));
	    Object.assign(merged, callGroupResolver(itemKeys, 'items', schemas, mergeSchemas, options, parents));

	    function addToAllOf(unresolvedSchemas) {
	      merged.allOf = mergeWithArray(merged.allOf, unresolvedSchemas);
	    }

	    return merged
	  }

	  var allSchemas = flattenDeep(getAllOf(rootSchema));
	  var merged = mergeSchemas(allSchemas, rootSchema);

	  return merged
	}

	merger.options = {
	  resolvers: defaultResolvers
	};

	var src = merger;

	var check = function (it) {
	  return it && it.Math == Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global$i =
	  // eslint-disable-next-line es/no-global-this -- safe
	  check(typeof globalThis == 'object' && globalThis) ||
	  check(typeof window == 'object' && window) ||
	  // eslint-disable-next-line no-restricted-globals -- safe
	  check(typeof self == 'object' && self) ||
	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  // eslint-disable-next-line no-new-func -- fallback
	  (function () { return this; })() || Function('return this')();

	var FunctionPrototype$1 = Function.prototype;
	var apply$1 = FunctionPrototype$1.apply;
	var bind$3 = FunctionPrototype$1.bind;
	var call$5 = FunctionPrototype$1.call;

	// eslint-disable-next-line es/no-reflect -- safe
	var functionApply = typeof Reflect == 'object' && Reflect.apply || (bind$3 ? call$5.bind(apply$1) : function () {
	  return call$5.apply(apply$1, arguments);
	});

	var FunctionPrototype = Function.prototype;
	var bind$2 = FunctionPrototype.bind;
	var call$4 = FunctionPrototype.call;
	var callBind = bind$2 && bind$2.bind(call$4);

	var functionUncurryThis = bind$2 ? function (fn) {
	  return fn && callBind(call$4, fn);
	} : function (fn) {
	  return fn && function () {
	    return call$4.apply(fn, arguments);
	  };
	};

	// `IsCallable` abstract operation
	// https://tc39.es/ecma262/#sec-iscallable
	var isCallable$7 = function (argument) {
	  return typeof argument == 'function';
	};

	var objectGetOwnPropertyDescriptor = {};

	var fails$5 = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	var fails$4 = fails$5;

	// Detect IE8's incomplete defineProperty implementation
	var descriptors = !fails$4(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
	});

	var call$3 = Function.prototype.call;

	var functionCall = call$3.bind ? call$3.bind(call$3) : function () {
	  return call$3.apply(call$3, arguments);
	};

	var objectPropertyIsEnumerable = {};

	var $propertyIsEnumerable = {}.propertyIsEnumerable;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
	objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor$1(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable;

	var createPropertyDescriptor$2 = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var uncurryThis$6 = functionUncurryThis;

	var toString$2 = uncurryThis$6({}.toString);
	var stringSlice = uncurryThis$6(''.slice);

	var classofRaw = function (it) {
	  return stringSlice(toString$2(it), 8, -1);
	};

	var global$h = global$i;
	var uncurryThis$5 = functionUncurryThis;
	var fails$3 = fails$5;
	var classof = classofRaw;

	var Object$3 = global$h.Object;
	var split = uncurryThis$5(''.split);

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var indexedObject = fails$3(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return !Object$3('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof(it) == 'String' ? split(it, '') : Object$3(it);
	} : Object$3;

	var global$g = global$i;

	var TypeError$6 = global$g.TypeError;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.es/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible$2 = function (it) {
	  if (it == undefined) throw TypeError$6("Can't call method on " + it);
	  return it;
	};

	// toObject with fallback for non-array-like ES3 strings
	var IndexedObject = indexedObject;
	var requireObjectCoercible$1 = requireObjectCoercible$2;

	var toIndexedObject$2 = function (it) {
	  return IndexedObject(requireObjectCoercible$1(it));
	};

	var isCallable$6 = isCallable$7;

	var isObject$5 = function (it) {
	  return typeof it == 'object' ? it !== null : isCallable$6(it);
	};

	var path$2 = {};

	var path$1 = path$2;
	var global$f = global$i;
	var isCallable$5 = isCallable$7;

	var aFunction = function (variable) {
	  return isCallable$5(variable) ? variable : undefined;
	};

	var getBuiltIn$3 = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(path$1[namespace]) || aFunction(global$f[namespace])
	    : path$1[namespace] && path$1[namespace][method] || global$f[namespace] && global$f[namespace][method];
	};

	var uncurryThis$4 = functionUncurryThis;

	var objectIsPrototypeOf = uncurryThis$4({}.isPrototypeOf);

	var getBuiltIn$2 = getBuiltIn$3;

	var engineUserAgent = getBuiltIn$2('navigator', 'userAgent') || '';

	var global$e = global$i;
	var userAgent = engineUserAgent;

	var process = global$e.process;
	var Deno = global$e.Deno;
	var versions = process && process.versions || Deno && Deno.version;
	var v8 = versions && versions.v8;
	var match, version;

	if (v8) {
	  match = v8.split('.');
	  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
	  // but their correct versions are not interesting for us
	  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
	}

	// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
	// so check `userAgent` even if `.v8` exists, but 0
	if (!version && userAgent) {
	  match = userAgent.match(/Edge\/(\d+)/);
	  if (!match || match[1] >= 74) {
	    match = userAgent.match(/Chrome\/(\d+)/);
	    if (match) version = +match[1];
	  }
	}

	var engineV8Version = version;

	/* eslint-disable es/no-symbol -- required for testing */

	var V8_VERSION = engineV8Version;
	var fails$2 = fails$5;

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
	var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$2(function () {
	  var symbol = Symbol();
	  // Chrome 38 Symbol has incorrect toString conversion
	  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
	  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
	    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
	    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
	});

	/* eslint-disable es/no-symbol -- required for testing */

	var NATIVE_SYMBOL$1 = nativeSymbol;

	var useSymbolAsUid = NATIVE_SYMBOL$1
	  && !Symbol.sham
	  && typeof Symbol.iterator == 'symbol';

	var global$d = global$i;
	var getBuiltIn$1 = getBuiltIn$3;
	var isCallable$4 = isCallable$7;
	var isPrototypeOf = objectIsPrototypeOf;
	var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

	var Object$2 = global$d.Object;

	var isSymbol$3 = USE_SYMBOL_AS_UID$1 ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn$1('Symbol');
	  return isCallable$4($Symbol) && isPrototypeOf($Symbol.prototype, Object$2(it));
	};

	var global$c = global$i;

	var String$2 = global$c.String;

	var tryToString$1 = function (argument) {
	  try {
	    return String$2(argument);
	  } catch (error) {
	    return 'Object';
	  }
	};

	var global$b = global$i;
	var isCallable$3 = isCallable$7;
	var tryToString = tryToString$1;

	var TypeError$5 = global$b.TypeError;

	// `Assert: IsCallable(argument) is true`
	var aCallable$2 = function (argument) {
	  if (isCallable$3(argument)) return argument;
	  throw TypeError$5(tryToString(argument) + ' is not a function');
	};

	var aCallable$1 = aCallable$2;

	// `GetMethod` abstract operation
	// https://tc39.es/ecma262/#sec-getmethod
	var getMethod$1 = function (V, P) {
	  var func = V[P];
	  return func == null ? undefined : aCallable$1(func);
	};

	var global$a = global$i;
	var call$2 = functionCall;
	var isCallable$2 = isCallable$7;
	var isObject$4 = isObject$5;

	var TypeError$4 = global$a.TypeError;

	// `OrdinaryToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-ordinarytoprimitive
	var ordinaryToPrimitive$1 = function (input, pref) {
	  var fn, val;
	  if (pref === 'string' && isCallable$2(fn = input.toString) && !isObject$4(val = call$2(fn, input))) return val;
	  if (isCallable$2(fn = input.valueOf) && !isObject$4(val = call$2(fn, input))) return val;
	  if (pref !== 'string' && isCallable$2(fn = input.toString) && !isObject$4(val = call$2(fn, input))) return val;
	  throw TypeError$4("Can't convert object to primitive value");
	};

	var shared$1 = {exports: {}};

	var global$9 = global$i;

	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var defineProperty = Object.defineProperty;

	var setGlobal$1 = function (key, value) {
	  try {
	    defineProperty(global$9, key, { value: value, configurable: true, writable: true });
	  } catch (error) {
	    global$9[key] = value;
	  } return value;
	};

	var global$8 = global$i;
	var setGlobal = setGlobal$1;

	var SHARED = '__core-js_shared__';
	var store$1 = global$8[SHARED] || setGlobal(SHARED, {});

	var sharedStore = store$1;

	var store = sharedStore;

	(shared$1.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.19.3',
	  mode: 'pure' ,
	  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
	});

	var global$7 = global$i;
	var requireObjectCoercible = requireObjectCoercible$2;

	var Object$1 = global$7.Object;

	// `ToObject` abstract operation
	// https://tc39.es/ecma262/#sec-toobject
	var toObject$2 = function (argument) {
	  return Object$1(requireObjectCoercible(argument));
	};

	var uncurryThis$3 = functionUncurryThis;
	var toObject$1 = toObject$2;

	var hasOwnProperty = uncurryThis$3({}.hasOwnProperty);

	// `HasOwnProperty` abstract operation
	// https://tc39.es/ecma262/#sec-hasownproperty
	var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty(toObject$1(it), key);
	};

	var uncurryThis$2 = functionUncurryThis;

	var id = 0;
	var postfix = Math.random();
	var toString$1 = uncurryThis$2(1.0.toString);

	var uid$1 = function (key) {
	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$1(++id + postfix, 36);
	};

	var global$6 = global$i;
	var shared = shared$1.exports;
	var hasOwn$2 = hasOwnProperty_1;
	var uid = uid$1;
	var NATIVE_SYMBOL = nativeSymbol;
	var USE_SYMBOL_AS_UID = useSymbolAsUid;

	var WellKnownSymbolsStore = shared('wks');
	var Symbol$1 = global$6.Symbol;
	var symbolFor = Symbol$1 && Symbol$1['for'];
	var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

	var wellKnownSymbol$1 = function (name) {
	  if (!hasOwn$2(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
	    var description = 'Symbol.' + name;
	    if (NATIVE_SYMBOL && hasOwn$2(Symbol$1, name)) {
	      WellKnownSymbolsStore[name] = Symbol$1[name];
	    } else if (USE_SYMBOL_AS_UID && symbolFor) {
	      WellKnownSymbolsStore[name] = symbolFor(description);
	    } else {
	      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
	    }
	  } return WellKnownSymbolsStore[name];
	};

	var global$5 = global$i;
	var call$1 = functionCall;
	var isObject$3 = isObject$5;
	var isSymbol$2 = isSymbol$3;
	var getMethod = getMethod$1;
	var ordinaryToPrimitive = ordinaryToPrimitive$1;
	var wellKnownSymbol = wellKnownSymbol$1;

	var TypeError$3 = global$5.TypeError;
	var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

	// `ToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-toprimitive
	var toPrimitive$1 = function (input, pref) {
	  if (!isObject$3(input) || isSymbol$2(input)) return input;
	  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
	  var result;
	  if (exoticToPrim) {
	    if (pref === undefined) pref = 'default';
	    result = call$1(exoticToPrim, input, pref);
	    if (!isObject$3(result) || isSymbol$2(result)) return result;
	    throw TypeError$3("Can't convert object to primitive value");
	  }
	  if (pref === undefined) pref = 'number';
	  return ordinaryToPrimitive(input, pref);
	};

	var toPrimitive = toPrimitive$1;
	var isSymbol$1 = isSymbol$3;

	// `ToPropertyKey` abstract operation
	// https://tc39.es/ecma262/#sec-topropertykey
	var toPropertyKey$2 = function (argument) {
	  var key = toPrimitive(argument, 'string');
	  return isSymbol$1(key) ? key : key + '';
	};

	var global$4 = global$i;
	var isObject$2 = isObject$5;

	var document$1 = global$4.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS = isObject$2(document$1) && isObject$2(document$1.createElement);

	var documentCreateElement = function (it) {
	  return EXISTS ? document$1.createElement(it) : {};
	};

	var DESCRIPTORS$3 = descriptors;
	var fails$1 = fails$5;
	var createElement = documentCreateElement;

	// Thank's IE8 for his funny defineProperty
	var ie8DomDefine = !DESCRIPTORS$3 && !fails$1(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
	  return Object.defineProperty(createElement('div'), 'a', {
	    get: function () { return 7; }
	  }).a != 7;
	});

	var DESCRIPTORS$2 = descriptors;
	var call = functionCall;
	var propertyIsEnumerableModule = objectPropertyIsEnumerable;
	var createPropertyDescriptor$1 = createPropertyDescriptor$2;
	var toIndexedObject$1 = toIndexedObject$2;
	var toPropertyKey$1 = toPropertyKey$2;
	var hasOwn$1 = hasOwnProperty_1;
	var IE8_DOM_DEFINE$1 = ie8DomDefine;

	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
	objectGetOwnPropertyDescriptor.f = DESCRIPTORS$2 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject$1(O);
	  P = toPropertyKey$1(P);
	  if (IE8_DOM_DEFINE$1) try {
	    return $getOwnPropertyDescriptor(O, P);
	  } catch (error) { /* empty */ }
	  if (hasOwn$1(O, P)) return createPropertyDescriptor$1(!call(propertyIsEnumerableModule.f, O, P), O[P]);
	};

	var fails = fails$5;
	var isCallable$1 = isCallable$7;

	var replacement = /#|\.prototype\./;

	var isForced$1 = function (feature, detection) {
	  var value = data$1[normalize(feature)];
	  return value == POLYFILL ? true
	    : value == NATIVE ? false
	    : isCallable$1(detection) ? fails(detection)
	    : !!detection;
	};

	var normalize = isForced$1.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data$1 = isForced$1.data = {};
	var NATIVE = isForced$1.NATIVE = 'N';
	var POLYFILL = isForced$1.POLYFILL = 'P';

	var isForced_1 = isForced$1;

	var uncurryThis$1 = functionUncurryThis;
	var aCallable = aCallable$2;

	var bind$1 = uncurryThis$1(uncurryThis$1.bind);

	// optional / simple context binding
	var functionBindContext = function (fn, that) {
	  aCallable(fn);
	  return that === undefined ? fn : bind$1 ? bind$1(fn, that) : function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var objectDefineProperty = {};

	var global$3 = global$i;
	var isObject$1 = isObject$5;

	var String$1 = global$3.String;
	var TypeError$2 = global$3.TypeError;

	// `Assert: Type(argument) is Object`
	var anObject$1 = function (argument) {
	  if (isObject$1(argument)) return argument;
	  throw TypeError$2(String$1(argument) + ' is not an object');
	};

	var global$2 = global$i;
	var DESCRIPTORS$1 = descriptors;
	var IE8_DOM_DEFINE = ie8DomDefine;
	var anObject = anObject$1;
	var toPropertyKey = toPropertyKey$2;

	var TypeError$1 = global$2.TypeError;
	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var $defineProperty = Object.defineProperty;

	// `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty
	objectDefineProperty.f = DESCRIPTORS$1 ? $defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPropertyKey(P);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return $defineProperty(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError$1('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var DESCRIPTORS = descriptors;
	var definePropertyModule = objectDefineProperty;
	var createPropertyDescriptor = createPropertyDescriptor$2;

	var createNonEnumerableProperty$1 = DESCRIPTORS ? function (object, key, value) {
	  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var global$1 = global$i;
	var apply = functionApply;
	var uncurryThis = functionUncurryThis;
	var isCallable = isCallable$7;
	var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	var isForced = isForced_1;
	var path = path$2;
	var bind = functionBindContext;
	var createNonEnumerableProperty = createNonEnumerableProperty$1;
	var hasOwn = hasOwnProperty_1;

	var wrapConstructor = function (NativeConstructor) {
	  var Wrapper = function (a, b, c) {
	    if (this instanceof Wrapper) {
	      switch (arguments.length) {
	        case 0: return new NativeConstructor();
	        case 1: return new NativeConstructor(a);
	        case 2: return new NativeConstructor(a, b);
	      } return new NativeConstructor(a, b, c);
	    } return apply(NativeConstructor, this, arguments);
	  };
	  Wrapper.prototype = NativeConstructor.prototype;
	  return Wrapper;
	};

	/*
	  options.target      - name of the target object
	  options.global      - target is the global object
	  options.stat        - export as static methods of target
	  options.proto       - export as prototype methods of target
	  options.real        - real prototype method for the `pure` version
	  options.forced      - export even if the native feature is available
	  options.bind        - bind methods to the target, required for the `pure` version
	  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
	  options.sham        - add a flag to not completely full polyfills
	  options.enumerable  - export as enumerable property
	  options.noTargetGet - prevent calling a getter on target
	  options.name        - the .name of the function if it does not match the key
	*/
	var _export = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var PROTO = options.proto;

	  var nativeSource = GLOBAL ? global$1 : STATIC ? global$1[TARGET] : (global$1[TARGET] || {}).prototype;

	  var target = GLOBAL ? path : path[TARGET] || createNonEnumerableProperty(path, TARGET, {})[TARGET];
	  var targetPrototype = target.prototype;

	  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
	  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

	  for (key in source) {
	    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contains in native
	    USE_NATIVE = !FORCED && nativeSource && hasOwn(nativeSource, key);

	    targetProperty = target[key];

	    if (USE_NATIVE) if (options.noTargetGet) {
	      descriptor = getOwnPropertyDescriptor(nativeSource, key);
	      nativeProperty = descriptor && descriptor.value;
	    } else nativeProperty = nativeSource[key];

	    // export native or implementation
	    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

	    if (USE_NATIVE && typeof targetProperty == typeof sourceProperty) continue;

	    // bind timers to global for call from export context
	    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global$1);
	    // wrap global constructors for prevent changs in this version
	    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
	    // make static versions for prototype methods
	    else if (PROTO && isCallable(sourceProperty)) resultProperty = uncurryThis(sourceProperty);
	    // default case
	    else resultProperty = sourceProperty;

	    // add a flag to not completely full polyfills
	    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty(resultProperty, 'sham', true);
	    }

	    createNonEnumerableProperty(target, key, resultProperty);

	    if (PROTO) {
	      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
	      if (!hasOwn(path, VIRTUAL_PROTOTYPE)) {
	        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
	      }
	      // export virtual prototype methods
	      createNonEnumerableProperty(path[VIRTUAL_PROTOTYPE], key, sourceProperty);
	      // export real prototype methods
	      if (options.real && targetPrototype && !targetPrototype[key]) {
	        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
	      }
	    }
	  }
	};

	var ceil = Math.ceil;
	var floor = Math.floor;

	// `ToIntegerOrInfinity` abstract operation
	// https://tc39.es/ecma262/#sec-tointegerorinfinity
	var toIntegerOrInfinity$2 = function (argument) {
	  var number = +argument;
	  // eslint-disable-next-line no-self-compare -- safe
	  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
	};

	var toIntegerOrInfinity$1 = toIntegerOrInfinity$2;

	var max = Math.max;
	var min$1 = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	var toAbsoluteIndex$2 = function (index, length) {
	  var integer = toIntegerOrInfinity$1(index);
	  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
	};

	var toIntegerOrInfinity = toIntegerOrInfinity$2;

	var min = Math.min;

	// `ToLength` abstract operation
	// https://tc39.es/ecma262/#sec-tolength
	var toLength$1 = function (argument) {
	  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var toLength = toLength$1;

	// `LengthOfArrayLike` abstract operation
	// https://tc39.es/ecma262/#sec-lengthofarraylike
	var lengthOfArrayLike$2 = function (obj) {
	  return toLength(obj.length);
	};

	var toObject = toObject$2;
	var toAbsoluteIndex$1 = toAbsoluteIndex$2;
	var lengthOfArrayLike$1 = lengthOfArrayLike$2;

	// `Array.prototype.fill` method implementation
	// https://tc39.es/ecma262/#sec-array.prototype.fill
	var arrayFill = function fill(value /* , start = 0, end = @length */) {
	  var O = toObject(this);
	  var length = lengthOfArrayLike$1(O);
	  var argumentsLength = arguments.length;
	  var index = toAbsoluteIndex$1(argumentsLength > 1 ? arguments[1] : undefined, length);
	  var end = argumentsLength > 2 ? arguments[2] : undefined;
	  var endPos = end === undefined ? length : toAbsoluteIndex$1(end, length);
	  while (endPos > index) O[index++] = value;
	  return O;
	};

	var $$1 = _export;
	var fill$3 = arrayFill;

	// `Array.prototype.fill` method
	// https://tc39.es/ecma262/#sec-array.prototype.fill
	$$1({ target: 'Array', proto: true }, {
	  fill: fill$3
	});

	var getBuiltIn = getBuiltIn$3;

	var entryUnbind$2 = getBuiltIn;

	var entryUnbind$1 = entryUnbind$2;

	var fill$2 = entryUnbind$1('Array', 'fill');

	var parent$1 = fill$2;

	var fill$1 = parent$1;

	var parent = fill$1;

	var fill = parent;

	var baseFlatten = _baseFlatten,
	    baseRest = _baseRest,
	    baseUniq = _baseUniq,
	    isArrayLikeObject = isArrayLikeObject_1;

	/**
	 * Creates an array of unique values, in order, from all given arrays using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @returns {Array} Returns the new array of combined values.
	 * @example
	 *
	 * _.union([2], [1, 2]);
	 * // => [2, 1]
	 */
	var union = baseRest(function(arrays) {
	  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
	});

	var union_1 = union;

	var jsonpointer = {};

	var hasExcape = /~/;
	var escapeMatcher = /~[01]/g;
	function escapeReplacer (m) {
	  switch (m) {
	    case '~1': return '/'
	    case '~0': return '~'
	  }
	  throw new Error('Invalid tilde escape: ' + m)
	}

	function untilde (str) {
	  if (!hasExcape.test(str)) return str
	  return str.replace(escapeMatcher, escapeReplacer)
	}

	function setter (obj, pointer, value) {
	  var part;
	  var hasNextPart;

	  for (var p = 1, len = pointer.length; p < len;) {
	    if (pointer[p] === 'constructor' || pointer[p] === 'prototype' || pointer[p] === '__proto__') return obj

	    part = untilde(pointer[p++]);
	    hasNextPart = len > p;

	    if (typeof obj[part] === 'undefined') {
	      // support setting of /-
	      if (Array.isArray(obj) && part === '-') {
	        part = obj.length;
	      }

	      // support nested objects/array when setting values
	      if (hasNextPart) {
	        if ((pointer[p] !== '' && pointer[p] < Infinity) || pointer[p] === '-') obj[part] = [];
	        else obj[part] = {};
	      }
	    }

	    if (!hasNextPart) break
	    obj = obj[part];
	  }

	  var oldValue = obj[part];
	  if (value === undefined) delete obj[part];
	  else obj[part] = value;
	  return oldValue
	}

	function compilePointer (pointer) {
	  if (typeof pointer === 'string') {
	    pointer = pointer.split('/');
	    if (pointer[0] === '') return pointer
	    throw new Error('Invalid JSON pointer.')
	  } else if (Array.isArray(pointer)) {
	    for (const part of pointer) {
	      if (typeof part !== 'string' && typeof part !== 'number') {
	        throw new Error('Invalid JSON pointer. Must be of type string or number.')
	      }
	    }
	    return pointer
	  }

	  throw new Error('Invalid JSON pointer.')
	}

	function get (obj, pointer) {
	  if (typeof obj !== 'object') throw new Error('Invalid input object.')
	  pointer = compilePointer(pointer);
	  var len = pointer.length;
	  if (len === 1) return obj

	  for (var p = 1; p < len;) {
	    obj = obj[untilde(pointer[p++])];
	    if (len === p) return obj
	    if (typeof obj !== 'object') return undefined
	  }
	}

	function set (obj, pointer, value) {
	  if (typeof obj !== 'object') throw new Error('Invalid input object.')
	  pointer = compilePointer(pointer);
	  if (pointer.length === 0) throw new Error('Invalid JSON pointer for set.')
	  return setter(obj, pointer, value)
	}

	function compile$2 (pointer) {
	  var compiled = compilePointer(pointer);
	  return {
	    get: function (object) {
	      return get(object, compiled)
	    },
	    set: function (object, value) {
	      return set(object, compiled, value)
	    }
	  }
	}

	jsonpointer.get = get;
	jsonpointer.set = set;
	jsonpointer.compile = compile$2;

	function _extends$g() { _extends$g = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$g.apply(this, arguments); }

	function _objectWithoutProperties$8(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$8(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

	function _objectWithoutPropertiesLoose$8(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
	function IconButton(props) {
	  var _props$type = props.type,
	      type = _props$type === void 0 ? "default" : _props$type,
	      icon = props.icon,
	      className = props.className,
	      otherProps = _objectWithoutProperties$8(props, ["type", "icon", "className"]);

	  return React.createElement("button", _extends$g({
	    type: "button",
	    className: "btn btn-".concat(type, " ").concat(className)
	  }, otherProps), React.createElement("i", {
	    className: "glyphicon glyphicon-".concat(icon)
	  }));
	}

	function AddButton(_ref) {
	  var className = _ref.className,
	      onClick = _ref.onClick,
	      disabled = _ref.disabled;
	  return React.createElement("div", {
	    className: "row"
	  }, React.createElement("p", {
	    className: "col-xs-3 col-xs-offset-9 text-right ".concat(className)
	  }, React.createElement(IconButton, {
	    type: "info",
	    icon: "plus",
	    className: "btn-add col-xs-12",
	    "aria-label": "Add",
	    tabIndex: "0",
	    onClick: onClick,
	    disabled: disabled
	  })));
	}

	var toIndexedObject = toIndexedObject$2;
	var toAbsoluteIndex = toAbsoluteIndex$2;
	var lengthOfArrayLike = lengthOfArrayLike$2;

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject($this);
	    var length = lengthOfArrayLike(O);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare -- NaN check
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare -- NaN check
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var arrayIncludes = {
	  // `Array.prototype.includes` method
	  // https://tc39.es/ecma262/#sec-array.prototype.includes
	  includes: createMethod(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod(false)
	};

	var $ = _export;
	var $includes = arrayIncludes.includes;

	// `Array.prototype.includes` method
	// https://tc39.es/ecma262/#sec-array.prototype.includes
	$({ target: 'Array', proto: true }, {
	  includes: function includes(el /* , fromIndex = 0 */) {
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var entryUnbind = entryUnbind$2;

	var includes = entryUnbind('Array', 'includes');

	var registry = PropTypes.shape({
	  ArrayFieldTemplate: PropTypes.elementType,
	  FieldTemplate: PropTypes.elementType,
	  ObjectFieldTemplate: PropTypes.elementType,
	  definitions: PropTypes.object.isRequired,
	  rootSchema: PropTypes.object,
	  fields: PropTypes.objectOf(PropTypes.elementType).isRequired,
	  formContext: PropTypes.object.isRequired,
	  widgets: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired
	});
	({
	  autofocus: PropTypes.bool,
	  disabled: PropTypes.bool,
	  errorSchema: PropTypes.object,
	  formData: PropTypes.any,
	  idSchema: PropTypes.object,
	  onBlur: PropTypes.func,
	  onChange: PropTypes.func.isRequired,
	  onFocus: PropTypes.func,
	  rawErrors: PropTypes.arrayOf(PropTypes.string),
	  readonly: PropTypes.bool,
	  registry: registry.isRequired,
	  required: PropTypes.bool,
	  schema: PropTypes.object.isRequired,
	  uiSchema: PropTypes.shape({
	    "ui:options": PropTypes.shape({
	      addable: PropTypes.bool,
	      orderable: PropTypes.bool,
	      removable: PropTypes.bool
	    })
	  })
	});

	let urlAlphabet =
	  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';

	const POOL_SIZE_MULTIPLIER = 128;
	let pool, poolOffset;
	let fillPool = bytes => {
	  if (!pool || pool.length < bytes) {
	    pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER);
	    crypto__default["default"].randomFillSync(pool);
	    poolOffset = 0;
	  } else if (poolOffset + bytes > pool.length) {
	    crypto__default["default"].randomFillSync(pool);
	    poolOffset = 0;
	  }
	  poolOffset += bytes;
	};
	let nanoid = (size = 21) => {
	  fillPool(size);
	  let id = '';
	  for (let i = poolOffset - size; i < poolOffset; i++) {
	    id += urlAlphabet[pool[i] & 63];
	  }
	  return id
	};

	function _typeof$9(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$9 = function _typeof(obj) { return typeof obj; }; } else { _typeof$9 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$9(obj); }

	function _objectWithoutProperties$7(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$7(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

	function _objectWithoutPropertiesLoose$7(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

	function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$c(target, key, source[key]); }); } return target; }

	function _toConsumableArray$4(arr) { return _arrayWithoutHoles$4(arr) || _iterableToArray$4(arr) || _nonIterableSpread$4(); }

	function _nonIterableSpread$4() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

	function _iterableToArray$4(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

	function _arrayWithoutHoles$4(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

	function _classCallCheck$8(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties$8(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass$8(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$8(Constructor.prototype, protoProps); if (staticProps) _defineProperties$8(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn$8(self, call) { if (call && (_typeof$9(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$8(self); }

	function _getPrototypeOf$8(o) { _getPrototypeOf$8 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$8(o); }

	function _assertThisInitialized$8(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _inherits$8(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$8(subClass, superClass); }

	function _setPrototypeOf$8(o, p) { _setPrototypeOf$8 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$8(o, p); }

	function _defineProperty$c(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function ArrayFieldTitle(_ref) {
	  var TitleField = _ref.TitleField,
	      idSchema = _ref.idSchema,
	      title = _ref.title,
	      required = _ref.required;

	  if (!title) {
	    return null;
	  }

	  var id = "".concat(idSchema.$id, "__title");
	  return React.createElement(TitleField, {
	    id: id,
	    title: title,
	    required: required
	  });
	}

	function ArrayFieldDescription(_ref2) {
	  var DescriptionField = _ref2.DescriptionField,
	      idSchema = _ref2.idSchema,
	      description = _ref2.description;

	  if (!description) {
	    return null;
	  }

	  var id = "".concat(idSchema.$id, "__description");
	  return React.createElement(DescriptionField, {
	    id: id,
	    description: description
	  });
	} // Used in the two templates


	function DefaultArrayItem(props) {
	  var btnStyle = {
	    flex: 1,
	    paddingLeft: 6,
	    paddingRight: 6,
	    fontWeight: "bold"
	  };
	  return React.createElement("div", {
	    key: props.key,
	    className: props.className
	  }, React.createElement("div", {
	    className: props.hasToolbar ? "col-xs-9" : "col-xs-12"
	  }, props.children), props.hasToolbar && React.createElement("div", {
	    className: "col-xs-3 array-item-toolbox"
	  }, React.createElement("div", {
	    className: "btn-group",
	    style: {
	      display: "flex",
	      justifyContent: "space-around"
	    }
	  }, (props.hasMoveUp || props.hasMoveDown) && React.createElement(IconButton, {
	    icon: "arrow-up",
	    "aria-label": "Move up",
	    className: "array-item-move-up",
	    tabIndex: "-1",
	    style: btnStyle,
	    disabled: props.disabled || props.readonly || !props.hasMoveUp,
	    onClick: props.onReorderClick(props.index, props.index - 1)
	  }), (props.hasMoveUp || props.hasMoveDown) && React.createElement(IconButton, {
	    icon: "arrow-down",
	    className: "array-item-move-down",
	    "aria-label": "Move down",
	    tabIndex: "-1",
	    style: btnStyle,
	    disabled: props.disabled || props.readonly || !props.hasMoveDown,
	    onClick: props.onReorderClick(props.index, props.index + 1)
	  }), props.hasRemove && React.createElement(IconButton, {
	    type: "danger",
	    icon: "remove",
	    "aria-label": "Remove",
	    className: "array-item-remove",
	    tabIndex: "-1",
	    style: btnStyle,
	    disabled: props.disabled || props.readonly,
	    onClick: props.onDropIndexClick(props.index)
	  }))));
	}

	function DefaultFixedArrayFieldTemplate(props) {
	  return React.createElement("fieldset", {
	    className: props.className,
	    id: props.idSchema.$id
	  }, React.createElement(ArrayFieldTitle, {
	    key: "array-field-title-".concat(props.idSchema.$id),
	    TitleField: props.TitleField,
	    idSchema: props.idSchema,
	    title: props.uiSchema["ui:title"] || props.title,
	    required: props.required
	  }), (props.uiSchema["ui:description"] || props.schema.description) && React.createElement("div", {
	    className: "field-description",
	    key: "field-description-".concat(props.idSchema.$id)
	  }, props.uiSchema["ui:description"] || props.schema.description), React.createElement("div", {
	    className: "row array-item-list",
	    key: "array-item-list-".concat(props.idSchema.$id)
	  }, props.items && props.items.map(DefaultArrayItem)), props.canAdd && React.createElement(AddButton, {
	    className: "array-item-add",
	    onClick: props.onAddClick,
	    disabled: props.disabled || props.readonly
	  }));
	}

	function DefaultNormalArrayFieldTemplate(props) {
	  return React.createElement("fieldset", {
	    className: props.className,
	    id: props.idSchema.$id
	  }, React.createElement(ArrayFieldTitle, {
	    key: "array-field-title-".concat(props.idSchema.$id),
	    TitleField: props.TitleField,
	    idSchema: props.idSchema,
	    title: props.uiSchema["ui:title"] || props.title,
	    required: props.required
	  }), (props.uiSchema["ui:description"] || props.schema.description) && React.createElement(ArrayFieldDescription, {
	    key: "array-field-description-".concat(props.idSchema.$id),
	    DescriptionField: props.DescriptionField,
	    idSchema: props.idSchema,
	    description: props.uiSchema["ui:description"] || props.schema.description
	  }), React.createElement("div", {
	    className: "row array-item-list",
	    key: "array-item-list-".concat(props.idSchema.$id)
	  }, props.items && props.items.map(function (p) {
	    return DefaultArrayItem(p);
	  })), props.canAdd && React.createElement(AddButton, {
	    className: "array-item-add",
	    onClick: props.onAddClick,
	    disabled: props.disabled || props.readonly
	  }));
	}

	function generateRowId() {
	  return nanoid();
	}

	function generateKeyedFormData(formData) {
	  return !Array.isArray(formData) ? [] : formData.map(function (item) {
	    return {
	      key: generateRowId(),
	      item: item
	    };
	  });
	}

	function keyedToPlainFormData(keyedFormData) {
	  return keyedFormData.map(function (keyedItem) {
	    return keyedItem.item;
	  });
	}

	var ArrayField =
	/*#__PURE__*/
	function (_Component) {
	  _inherits$8(ArrayField, _Component);

	  function ArrayField(props) {
	    var _this;

	    _classCallCheck$8(this, ArrayField);

	    _this = _possibleConstructorReturn$8(this, _getPrototypeOf$8(ArrayField).call(this, props));

	    _defineProperty$c(_assertThisInitialized$8(_this), "_getNewFormDataRow", function () {
	      var _this$props = _this.props,
	          schema = _this$props.schema,
	          _this$props$registry = _this$props.registry,
	          registry = _this$props$registry === void 0 ? getDefaultRegistry() : _this$props$registry;
	      var rootSchema = registry.rootSchema;
	      var itemSchema = schema.items;

	      if (isFixedItems(schema) && allowAdditionalItems(schema)) {
	        itemSchema = schema.additionalItems;
	      }

	      return getDefaultFormState(itemSchema, undefined, rootSchema);
	    });

	    _defineProperty$c(_assertThisInitialized$8(_this), "onAddClick", function (event) {
	      if (event) {
	        event.preventDefault();
	      }

	      var onChange = _this.props.onChange;
	      var newKeyedFormDataRow = {
	        key: generateRowId(),
	        item: _this._getNewFormDataRow()
	      };
	      var newKeyedFormData = [].concat(_toConsumableArray$4(_this.state.keyedFormData), [newKeyedFormDataRow]);

	      _this.setState({
	        keyedFormData: newKeyedFormData,
	        updatedKeyedFormData: true
	      }, function () {
	        return onChange(keyedToPlainFormData(newKeyedFormData));
	      });
	    });

	    _defineProperty$c(_assertThisInitialized$8(_this), "onAddIndexClick", function (index) {
	      return function (event) {
	        if (event) {
	          event.preventDefault();
	        }

	        var onChange = _this.props.onChange;
	        var newKeyedFormDataRow = {
	          key: generateRowId(),
	          item: _this._getNewFormDataRow()
	        };

	        var newKeyedFormData = _toConsumableArray$4(_this.state.keyedFormData);

	        newKeyedFormData.splice(index, 0, newKeyedFormDataRow);

	        _this.setState({
	          keyedFormData: newKeyedFormData,
	          updatedKeyedFormData: true
	        }, function () {
	          return onChange(keyedToPlainFormData(newKeyedFormData));
	        });
	      };
	    });

	    _defineProperty$c(_assertThisInitialized$8(_this), "onDropIndexClick", function (index) {
	      return function (event) {
	        if (event) {
	          event.preventDefault();
	        }

	        var onChange = _this.props.onChange;
	        var keyedFormData = _this.state.keyedFormData; // refs #195: revalidate to ensure properly reindexing errors

	        var newErrorSchema;

	        if (_this.props.errorSchema) {
	          newErrorSchema = {};
	          var errorSchema = _this.props.errorSchema;

	          for (var i in errorSchema) {
	            i = parseInt(i);

	            if (i < index) {
	              newErrorSchema[i] = errorSchema[i];
	            } else if (i > index) {
	              newErrorSchema[i - 1] = errorSchema[i];
	            }
	          }
	        }

	        var newKeyedFormData = keyedFormData.filter(function (_, i) {
	          return i !== index;
	        });

	        _this.setState({
	          keyedFormData: newKeyedFormData,
	          updatedKeyedFormData: true
	        }, function () {
	          return onChange(keyedToPlainFormData(newKeyedFormData), newErrorSchema);
	        });
	      };
	    });

	    _defineProperty$c(_assertThisInitialized$8(_this), "onReorderClick", function (index, newIndex) {
	      return function (event) {
	        if (event) {
	          event.preventDefault();
	          event.target.blur();
	        }

	        var onChange = _this.props.onChange;
	        var newErrorSchema;

	        if (_this.props.errorSchema) {
	          newErrorSchema = {};
	          var errorSchema = _this.props.errorSchema;

	          for (var i in errorSchema) {
	            if (i == index) {
	              newErrorSchema[newIndex] = errorSchema[index];
	            } else if (i == newIndex) {
	              newErrorSchema[index] = errorSchema[newIndex];
	            } else {
	              newErrorSchema[i] = errorSchema[i];
	            }
	          }
	        }

	        var keyedFormData = _this.state.keyedFormData;

	        function reOrderArray() {
	          // Copy item
	          var _newKeyedFormData = keyedFormData.slice(); // Moves item from index to newIndex


	          _newKeyedFormData.splice(index, 1);

	          _newKeyedFormData.splice(newIndex, 0, keyedFormData[index]);

	          return _newKeyedFormData;
	        }

	        var newKeyedFormData = reOrderArray();

	        _this.setState({
	          keyedFormData: newKeyedFormData
	        }, function () {
	          return onChange(keyedToPlainFormData(newKeyedFormData), newErrorSchema);
	        });
	      };
	    });

	    _defineProperty$c(_assertThisInitialized$8(_this), "onChangeForIndex", function (index) {
	      return function (value, errorSchema) {
	        var _this$props2 = _this.props,
	            formData = _this$props2.formData,
	            onChange = _this$props2.onChange;
	        var newFormData = formData.map(function (item, i) {
	          // We need to treat undefined items as nulls to have validation.
	          // See https://github.com/tdegrunt/jsonschema/issues/206
	          var jsonValue = typeof value === "undefined" ? null : value;
	          return index === i ? jsonValue : item;
	        });
	        onChange(newFormData, errorSchema && _this.props.errorSchema && _objectSpread$8({}, _this.props.errorSchema, _defineProperty$c({}, index, errorSchema)));
	      };
	    });

	    _defineProperty$c(_assertThisInitialized$8(_this), "onSelectChange", function (value) {
	      _this.props.onChange(value);
	    });

	    var _formData = props.formData;

	    var _keyedFormData = generateKeyedFormData(_formData);

	    _this.state = {
	      keyedFormData: _keyedFormData,
	      updatedKeyedFormData: false
	    };
	    return _this;
	  }

	  _createClass$8(ArrayField, [{
	    key: "isItemRequired",
	    value: function isItemRequired(itemSchema) {
	      if (Array.isArray(itemSchema.type)) {
	        // While we don't yet support composite/nullable jsonschema types, it's
	        // future-proof to check for requirement against these.
	        return !includes(itemSchema.type, "null");
	      } // All non-null array item types are inherently required by design


	      return itemSchema.type !== "null";
	    }
	  }, {
	    key: "canAddItem",
	    value: function canAddItem(formItems) {
	      var _this$props3 = this.props,
	          schema = _this$props3.schema,
	          uiSchema = _this$props3.uiSchema;

	      var _getUiOptions = getUiOptions(uiSchema),
	          addable = _getUiOptions.addable;

	      if (addable !== false) {
	        // if ui:options.addable was not explicitly set to false, we can add
	        // another item if we have not exceeded maxItems yet
	        if (schema.maxItems !== undefined) {
	          addable = formItems.length < schema.maxItems;
	        } else {
	          addable = true;
	        }
	      }

	      return addable;
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this$props4 = this.props,
	          schema = _this$props4.schema,
	          uiSchema = _this$props4.uiSchema,
	          idSchema = _this$props4.idSchema,
	          _this$props4$registry = _this$props4.registry,
	          registry = _this$props4$registry === void 0 ? getDefaultRegistry() : _this$props4$registry;
	      var rootSchema = registry.rootSchema;

	      if (!schema.hasOwnProperty("items")) {
	        var fields = registry.fields;
	        var UnsupportedField = fields.UnsupportedField;
	        return React.createElement(UnsupportedField, {
	          schema: schema,
	          idSchema: idSchema,
	          reason: "Missing items definition"
	        });
	      }

	      if (isFixedItems(schema)) {
	        return this.renderFixedArray();
	      }

	      if (isFilesArray(schema, uiSchema, rootSchema)) {
	        return this.renderFiles();
	      }

	      if (isMultiSelect(schema, rootSchema)) {
	        return this.renderMultiSelect();
	      }

	      return this.renderNormalArray();
	    }
	  }, {
	    key: "renderNormalArray",
	    value: function renderNormalArray() {
	      var _this2 = this;

	      var _this$props5 = this.props,
	          schema = _this$props5.schema,
	          uiSchema = _this$props5.uiSchema,
	          errorSchema = _this$props5.errorSchema,
	          idSchema = _this$props5.idSchema,
	          name = _this$props5.name,
	          required = _this$props5.required,
	          disabled = _this$props5.disabled,
	          readonly = _this$props5.readonly,
	          autofocus = _this$props5.autofocus,
	          _this$props5$registry = _this$props5.registry,
	          registry = _this$props5$registry === void 0 ? getDefaultRegistry() : _this$props5$registry,
	          onBlur = _this$props5.onBlur,
	          onFocus = _this$props5.onFocus,
	          idPrefix = _this$props5.idPrefix,
	          rawErrors = _this$props5.rawErrors;
	      var title = schema.title === undefined ? name : schema.title;
	      var ArrayFieldTemplate = registry.ArrayFieldTemplate,
	          rootSchema = registry.rootSchema,
	          fields = registry.fields,
	          formContext = registry.formContext;
	      var TitleField = fields.TitleField,
	          DescriptionField = fields.DescriptionField;
	      var itemsSchema = retrieveSchema(schema.items, rootSchema);
	      var formData = keyedToPlainFormData(this.state.keyedFormData);
	      var arrayProps = {
	        canAdd: this.canAddItem(formData),
	        items: this.state.keyedFormData.map(function (keyedItem, index) {
	          var key = keyedItem.key,
	              item = keyedItem.item;
	          var itemSchema = retrieveSchema(schema.items, rootSchema, item);
	          var itemErrorSchema = errorSchema ? errorSchema[index] : undefined;
	          var itemIdPrefix = idSchema.$id + "_" + index;
	          var itemIdSchema = toIdSchema(itemSchema, itemIdPrefix, rootSchema, item, idPrefix);
	          return _this2.renderArrayFieldItem({
	            key: key,
	            index: index,
	            canMoveUp: index > 0,
	            canMoveDown: index < formData.length - 1,
	            itemSchema: itemSchema,
	            itemIdSchema: itemIdSchema,
	            itemErrorSchema: itemErrorSchema,
	            itemData: item,
	            itemUiSchema: uiSchema.items,
	            autofocus: autofocus && index === 0,
	            onBlur: onBlur,
	            onFocus: onFocus
	          });
	        }),
	        className: "field field-array field-array-of-".concat(itemsSchema.type),
	        DescriptionField: DescriptionField,
	        disabled: disabled,
	        idSchema: idSchema,
	        uiSchema: uiSchema,
	        onAddClick: this.onAddClick,
	        readonly: readonly,
	        required: required,
	        schema: schema,
	        title: title,
	        TitleField: TitleField,
	        formContext: formContext,
	        formData: formData,
	        rawErrors: rawErrors,
	        registry: registry
	      }; // Check if a custom render function was passed in

	      var Component = uiSchema["ui:ArrayFieldTemplate"] || ArrayFieldTemplate || DefaultNormalArrayFieldTemplate;
	      return React.createElement(Component, arrayProps);
	    }
	  }, {
	    key: "renderMultiSelect",
	    value: function renderMultiSelect() {
	      var _this$props6 = this.props,
	          schema = _this$props6.schema,
	          idSchema = _this$props6.idSchema,
	          uiSchema = _this$props6.uiSchema,
	          formData = _this$props6.formData,
	          disabled = _this$props6.disabled,
	          readonly = _this$props6.readonly,
	          required = _this$props6.required,
	          placeholder = _this$props6.placeholder,
	          autofocus = _this$props6.autofocus,
	          onBlur = _this$props6.onBlur,
	          onFocus = _this$props6.onFocus,
	          _this$props6$registry = _this$props6.registry,
	          registry = _this$props6$registry === void 0 ? getDefaultRegistry() : _this$props6$registry,
	          rawErrors = _this$props6.rawErrors,
	          name = _this$props6.name;
	      var items = this.props.formData;
	      var widgets = registry.widgets,
	          rootSchema = registry.rootSchema,
	          formContext = registry.formContext;
	      var itemsSchema = retrieveSchema(schema.items, rootSchema, formData);
	      var title = schema.title || name;
	      var enumOptions = optionsList(itemsSchema);

	      var _getUiOptions$enumOpt = _objectSpread$8({}, getUiOptions(uiSchema), {
	        enumOptions: enumOptions
	      }),
	          _getUiOptions$enumOpt2 = _getUiOptions$enumOpt.widget,
	          widget = _getUiOptions$enumOpt2 === void 0 ? "select" : _getUiOptions$enumOpt2,
	          options = _objectWithoutProperties$7(_getUiOptions$enumOpt, ["widget"]);

	      var Widget = getWidget(schema, widget, widgets);
	      return React.createElement(Widget, {
	        id: idSchema && idSchema.$id,
	        multiple: true,
	        onChange: this.onSelectChange,
	        onBlur: onBlur,
	        onFocus: onFocus,
	        options: options,
	        schema: schema,
	        registry: registry,
	        value: items,
	        disabled: disabled,
	        readonly: readonly,
	        required: required,
	        label: title,
	        placeholder: placeholder,
	        formContext: formContext,
	        autofocus: autofocus,
	        rawErrors: rawErrors
	      });
	    }
	  }, {
	    key: "renderFiles",
	    value: function renderFiles() {
	      var _this$props7 = this.props,
	          schema = _this$props7.schema,
	          uiSchema = _this$props7.uiSchema,
	          idSchema = _this$props7.idSchema,
	          name = _this$props7.name,
	          disabled = _this$props7.disabled,
	          readonly = _this$props7.readonly,
	          autofocus = _this$props7.autofocus,
	          onBlur = _this$props7.onBlur,
	          onFocus = _this$props7.onFocus,
	          _this$props7$registry = _this$props7.registry,
	          registry = _this$props7$registry === void 0 ? getDefaultRegistry() : _this$props7$registry,
	          rawErrors = _this$props7.rawErrors;
	      var title = schema.title || name;
	      var items = this.props.formData;
	      var widgets = registry.widgets,
	          formContext = registry.formContext;

	      var _getUiOptions2 = getUiOptions(uiSchema),
	          _getUiOptions2$widget = _getUiOptions2.widget,
	          widget = _getUiOptions2$widget === void 0 ? "files" : _getUiOptions2$widget,
	          options = _objectWithoutProperties$7(_getUiOptions2, ["widget"]);

	      var Widget = getWidget(schema, widget, widgets);
	      return React.createElement(Widget, {
	        options: options,
	        id: idSchema && idSchema.$id,
	        multiple: true,
	        onChange: this.onSelectChange,
	        onBlur: onBlur,
	        onFocus: onFocus,
	        schema: schema,
	        title: title,
	        value: items,
	        disabled: disabled,
	        readonly: readonly,
	        formContext: formContext,
	        autofocus: autofocus,
	        rawErrors: rawErrors
	      });
	    }
	  }, {
	    key: "renderFixedArray",
	    value: function renderFixedArray() {
	      var _this3 = this;

	      var _this$props8 = this.props,
	          schema = _this$props8.schema,
	          uiSchema = _this$props8.uiSchema,
	          formData = _this$props8.formData,
	          errorSchema = _this$props8.errorSchema,
	          idPrefix = _this$props8.idPrefix,
	          idSchema = _this$props8.idSchema,
	          name = _this$props8.name,
	          required = _this$props8.required,
	          disabled = _this$props8.disabled,
	          readonly = _this$props8.readonly,
	          autofocus = _this$props8.autofocus,
	          _this$props8$registry = _this$props8.registry,
	          registry = _this$props8$registry === void 0 ? getDefaultRegistry() : _this$props8$registry,
	          onBlur = _this$props8.onBlur,
	          onFocus = _this$props8.onFocus,
	          rawErrors = _this$props8.rawErrors;
	      var title = schema.title || name;
	      var items = this.props.formData;
	      var ArrayFieldTemplate = registry.ArrayFieldTemplate,
	          rootSchema = registry.rootSchema,
	          fields = registry.fields,
	          formContext = registry.formContext;
	      var TitleField = fields.TitleField;
	      var itemSchemas = schema.items.map(function (item, index) {
	        return retrieveSchema(item, rootSchema, formData[index]);
	      });
	      var additionalSchema = allowAdditionalItems(schema) ? retrieveSchema(schema.additionalItems, rootSchema, formData) : null;

	      if (!items || items.length < itemSchemas.length) {
	        // to make sure at least all fixed items are generated
	        items = items || [];
	        items = items.concat(new Array(itemSchemas.length - items.length));
	      } // These are the props passed into the render function


	      var arrayProps = {
	        canAdd: this.canAddItem(items) && additionalSchema,
	        className: "field field-array field-array-fixed-items",
	        disabled: disabled,
	        idSchema: idSchema,
	        formData: formData,
	        items: this.state.keyedFormData.map(function (keyedItem, index) {
	          var key = keyedItem.key,
	              item = keyedItem.item;
	          var additional = index >= itemSchemas.length;
	          var itemSchema = additional ? retrieveSchema(schema.additionalItems, rootSchema, item) : itemSchemas[index];
	          var itemIdPrefix = idSchema.$id + "_" + index;
	          var itemIdSchema = toIdSchema(itemSchema, itemIdPrefix, rootSchema, item, idPrefix);
	          var itemUiSchema = additional ? uiSchema.additionalItems || {} : Array.isArray(uiSchema.items) ? uiSchema.items[index] : uiSchema.items || {};
	          var itemErrorSchema = errorSchema ? errorSchema[index] : undefined;
	          return _this3.renderArrayFieldItem({
	            key: key,
	            index: index,
	            canRemove: additional,
	            canMoveUp: index >= itemSchemas.length + 1,
	            canMoveDown: additional && index < items.length - 1,
	            itemSchema: itemSchema,
	            itemData: item,
	            itemUiSchema: itemUiSchema,
	            itemIdSchema: itemIdSchema,
	            itemErrorSchema: itemErrorSchema,
	            autofocus: autofocus && index === 0,
	            onBlur: onBlur,
	            onFocus: onFocus
	          });
	        }),
	        onAddClick: this.onAddClick,
	        readonly: readonly,
	        required: required,
	        schema: schema,
	        uiSchema: uiSchema,
	        title: title,
	        TitleField: TitleField,
	        formContext: formContext,
	        rawErrors: rawErrors
	      }; // Check if a custom template template was passed in

	      var Template = uiSchema["ui:ArrayFieldTemplate"] || ArrayFieldTemplate || DefaultFixedArrayFieldTemplate;
	      return React.createElement(Template, arrayProps);
	    }
	  }, {
	    key: "renderArrayFieldItem",
	    value: function renderArrayFieldItem(props) {
	      var key = props.key,
	          index = props.index,
	          _props$canRemove = props.canRemove,
	          canRemove = _props$canRemove === void 0 ? true : _props$canRemove,
	          _props$canMoveUp = props.canMoveUp,
	          canMoveUp = _props$canMoveUp === void 0 ? true : _props$canMoveUp,
	          _props$canMoveDown = props.canMoveDown,
	          canMoveDown = _props$canMoveDown === void 0 ? true : _props$canMoveDown,
	          itemSchema = props.itemSchema,
	          itemData = props.itemData,
	          itemUiSchema = props.itemUiSchema,
	          itemIdSchema = props.itemIdSchema,
	          itemErrorSchema = props.itemErrorSchema,
	          autofocus = props.autofocus,
	          onBlur = props.onBlur,
	          onFocus = props.onFocus,
	          rawErrors = props.rawErrors;
	      var _this$props9 = this.props,
	          disabled = _this$props9.disabled,
	          readonly = _this$props9.readonly,
	          uiSchema = _this$props9.uiSchema,
	          _this$props9$registry = _this$props9.registry,
	          registry = _this$props9$registry === void 0 ? getDefaultRegistry() : _this$props9$registry;
	      var SchemaField = registry.fields.SchemaField;

	      var _orderable$removable$ = _objectSpread$8({
	        orderable: true,
	        removable: true
	      }, uiSchema["ui:options"]),
	          orderable = _orderable$removable$.orderable,
	          removable = _orderable$removable$.removable;

	      var has = {
	        moveUp: orderable && canMoveUp,
	        moveDown: orderable && canMoveDown,
	        remove: removable && canRemove
	      };
	      has.toolbar = Object.keys(has).some(function (key) {
	        return has[key];
	      });
	      return {
	        children: React.createElement(SchemaField, {
	          index: index,
	          schema: itemSchema,
	          uiSchema: itemUiSchema,
	          formData: itemData,
	          errorSchema: itemErrorSchema,
	          idSchema: itemIdSchema,
	          required: this.isItemRequired(itemSchema),
	          onChange: this.onChangeForIndex(index),
	          onBlur: onBlur,
	          onFocus: onFocus,
	          registry: this.props.registry,
	          disabled: this.props.disabled,
	          readonly: this.props.readonly,
	          autofocus: autofocus,
	          rawErrors: rawErrors
	        }),
	        className: "array-item",
	        disabled: disabled,
	        hasToolbar: has.toolbar,
	        hasMoveUp: has.moveUp,
	        hasMoveDown: has.moveDown,
	        hasRemove: has.remove,
	        index: index,
	        key: key,
	        onAddIndexClick: this.onAddIndexClick,
	        onDropIndexClick: this.onDropIndexClick,
	        onReorderClick: this.onReorderClick,
	        readonly: readonly
	      };
	    }
	  }, {
	    key: "itemTitle",
	    get: function get() {
	      var schema = this.props.schema;
	      return schema.items.title || schema.items.description || "Item";
	    }
	  }], [{
	    key: "getDerivedStateFromProps",
	    value: function getDerivedStateFromProps(nextProps, prevState) {
	      // Don't call getDerivedStateFromProps if keyed formdata was just updated.
	      if (prevState.updatedKeyedFormData) {
	        return {
	          updatedKeyedFormData: false
	        };
	      }

	      var nextFormData = nextProps.formData || [];
	      var previousKeyedFormData = prevState.keyedFormData || [];
	      var newKeyedFormData = nextFormData.length === previousKeyedFormData.length ? previousKeyedFormData.map(function (previousKeyedFormDatum, index) {
	        return {
	          key: previousKeyedFormDatum.key,
	          item: nextFormData[index]
	        };
	      }) : generateKeyedFormData(nextFormData);
	      return {
	        keyedFormData: newKeyedFormData
	      };
	    }
	  }]);

	  return ArrayField;
	}(react.exports.Component);

	_defineProperty$c(ArrayField, "defaultProps", {
	  uiSchema: {},
	  formData: [],
	  idSchema: {},
	  required: false,
	  disabled: false,
	  readonly: false,
	  autofocus: false
	});

	function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$b(target, key, source[key]); }); } return target; }

	function _defineProperty$b(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties$6(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$6(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

	function _objectWithoutPropertiesLoose$6(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

	function BooleanField(props) {
	  var schema = props.schema,
	      name = props.name,
	      uiSchema = props.uiSchema,
	      idSchema = props.idSchema,
	      formData = props.formData,
	      _props$registry = props.registry,
	      registry = _props$registry === void 0 ? getDefaultRegistry() : _props$registry,
	      required = props.required,
	      disabled = props.disabled,
	      readonly = props.readonly,
	      autofocus = props.autofocus,
	      onChange = props.onChange,
	      onFocus = props.onFocus,
	      onBlur = props.onBlur,
	      rawErrors = props.rawErrors;
	  var title = schema.title;
	  var widgets = registry.widgets,
	      formContext = registry.formContext,
	      fields = registry.fields;

	  var _getUiOptions = getUiOptions(uiSchema),
	      _getUiOptions$widget = _getUiOptions.widget,
	      widget = _getUiOptions$widget === void 0 ? "checkbox" : _getUiOptions$widget,
	      options = _objectWithoutProperties$6(_getUiOptions, ["widget"]);

	  var Widget = getWidget(schema, widget, widgets);
	  var enumOptions;

	  if (Array.isArray(schema.oneOf)) {
	    enumOptions = optionsList({
	      oneOf: schema.oneOf.map(function (option) {
	        return _objectSpread$7({}, option, {
	          title: option.title || (option["const"] === true ? "Yes" : "No")
	        });
	      })
	    });
	  } else {
	    enumOptions = optionsList({
	      "enum": schema["enum"] || [true, false],
	      enumNames: schema.enumNames || (schema["enum"] && schema["enum"][0] === false ? ["No", "Yes"] : ["Yes", "No"])
	    });
	  }

	  return React.createElement(Widget, {
	    options: _objectSpread$7({}, options, {
	      enumOptions: enumOptions
	    }),
	    schema: schema,
	    uiSchema: uiSchema,
	    id: idSchema && idSchema.$id,
	    onChange: onChange,
	    onFocus: onFocus,
	    onBlur: onBlur,
	    label: title === undefined ? name : title,
	    value: formData,
	    required: required,
	    disabled: disabled,
	    readonly: readonly,
	    registry: registry,
	    formContext: formContext,
	    autofocus: autofocus,
	    rawErrors: rawErrors,
	    DescriptionField: fields.DescriptionField
	  });
	}

	BooleanField.defaultProps = {
	  uiSchema: {},
	  disabled: false,
	  readonly: false,
	  autofocus: false
	};

	function DescriptionField(props) {
	  var id = props.id,
	      description = props.description;

	  if (!description) {
	    return null;
	  }

	  if (typeof description === "string") {
	    return React.createElement("p", {
	      id: id,
	      className: "field-description"
	    }, description);
	  } else {
	    return React.createElement("div", {
	      id: id,
	      className: "field-description"
	    }, description);
	  }
	}

	function _typeof$8(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$8 = function _typeof(obj) { return typeof obj; }; } else { _typeof$8 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$8(obj); }

	function _extends$f() { _extends$f = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$f.apply(this, arguments); }

	function _objectWithoutProperties$5(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$5(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

	function _objectWithoutPropertiesLoose$5(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

	function _classCallCheck$7(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties$7(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass$7(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$7(Constructor.prototype, protoProps); if (staticProps) _defineProperties$7(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn$7(self, call) { if (call && (_typeof$8(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$7(self); }

	function _getPrototypeOf$7(o) { _getPrototypeOf$7 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$7(o); }

	function _assertThisInitialized$7(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _inherits$7(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$7(subClass, superClass); }

	function _setPrototypeOf$7(o, p) { _setPrototypeOf$7 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$7(o, p); }

	function _defineProperty$a(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var AnyOfField =
	/*#__PURE__*/
	function (_Component) {
	  _inherits$7(AnyOfField, _Component);

	  function AnyOfField(props) {
	    var _this;

	    _classCallCheck$7(this, AnyOfField);

	    _this = _possibleConstructorReturn$7(this, _getPrototypeOf$7(AnyOfField).call(this, props));

	    _defineProperty$a(_assertThisInitialized$7(_this), "onOptionChange", function (option) {
	      var selectedOption = parseInt(option, 10);
	      var _this$props = _this.props,
	          formData = _this$props.formData,
	          onChange = _this$props.onChange,
	          options = _this$props.options,
	          registry = _this$props.registry;
	      var rootSchema = registry.rootSchema;
	      var newOption = retrieveSchema(options[selectedOption], rootSchema, formData); // If the new option is of type object and the current data is an object,
	      // discard properties added using the old option.

	      var newFormData = undefined;

	      if (guessType(formData) === "object" && (newOption.type === "object" || newOption.properties)) {
	        newFormData = Object.assign({}, formData);
	        var optionsToDiscard = options.slice();
	        optionsToDiscard.splice(selectedOption, 1); // Discard any data added using other options

	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = optionsToDiscard[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var _option = _step.value;

	            if (_option.properties) {
	              for (var key in _option.properties) {
	                if (newFormData.hasOwnProperty(key)) {
	                  delete newFormData[key];
	                }
	              }
	            }
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
	              _iterator["return"]();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }
	      } // Call getDefaultFormState to make sure defaults are populated on change.


	      onChange(getDefaultFormState(options[selectedOption], newFormData, rootSchema));

	      _this.setState({
	        selectedOption: parseInt(option, 10)
	      });
	    });

	    var _this$props2 = _this.props,
	        _formData = _this$props2.formData,
	        _options = _this$props2.options;
	    _this.state = {
	      selectedOption: _this.getMatchingOption(_formData, _options)
	    };
	    return _this;
	  }

	  _createClass$7(AnyOfField, [{
	    key: "componentDidUpdate",
	    value: function componentDidUpdate(prevProps, prevState) {
	      if (!deepEquals(this.props.formData, prevProps.formData) && this.props.idSchema.$id === prevProps.idSchema.$id) {
	        var matchingOption = this.getMatchingOption(this.props.formData, this.props.options);

	        if (!prevState || matchingOption === this.state.selectedOption) {
	          return;
	        }

	        this.setState({
	          selectedOption: matchingOption
	        });
	      }
	    }
	  }, {
	    key: "getMatchingOption",
	    value: function getMatchingOption$1(formData, options) {
	      var rootSchema = this.props.registry.rootSchema;

	      var option = getMatchingOption(formData, options, rootSchema);

	      if (option !== 0) {
	        return option;
	      } // If the form data matches none of the options, use the currently selected
	      // option, assuming it's available; otherwise use the first option


	      return this && this.state ? this.state.selectedOption : 0;
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this$props3 = this.props,
	          baseType = _this$props3.baseType,
	          disabled = _this$props3.disabled,
	          errorSchema = _this$props3.errorSchema,
	          formData = _this$props3.formData,
	          idPrefix = _this$props3.idPrefix,
	          idSchema = _this$props3.idSchema,
	          onBlur = _this$props3.onBlur,
	          onChange = _this$props3.onChange,
	          onFocus = _this$props3.onFocus,
	          options = _this$props3.options,
	          registry = _this$props3.registry,
	          uiSchema = _this$props3.uiSchema,
	          schema = _this$props3.schema;
	      var _SchemaField = registry.fields.SchemaField;
	      var widgets = registry.widgets;
	      var selectedOption = this.state.selectedOption;

	      var _getUiOptions = getUiOptions(uiSchema),
	          _getUiOptions$widget = _getUiOptions.widget,
	          widget = _getUiOptions$widget === void 0 ? "select" : _getUiOptions$widget,
	          uiOptions = _objectWithoutProperties$5(_getUiOptions, ["widget"]);

	      var Widget = getWidget({
	        type: "number"
	      }, widget, widgets);
	      var option = options[selectedOption] || null;
	      var optionSchema;

	      if (option) {
	        // If the subschema doesn't declare a type, infer the type from the
	        // parent schema
	        optionSchema = option.type ? option : Object.assign({}, option, {
	          type: baseType
	        });
	      }

	      var enumOptions = options.map(function (option, index) {
	        return {
	          label: option.title || "Option ".concat(index + 1),
	          value: index
	        };
	      });
	      return React.createElement("div", {
	        className: "panel panel-default panel-body"
	      }, React.createElement("div", {
	        className: "form-group"
	      }, React.createElement(Widget, _extends$f({
	        id: "".concat(idSchema.$id).concat(schema.oneOf ? "__oneof_select" : "__anyof_select"),
	        schema: {
	          type: "number",
	          "default": 0
	        },
	        onChange: this.onOptionChange,
	        onBlur: onBlur,
	        onFocus: onFocus,
	        value: selectedOption,
	        options: {
	          enumOptions: enumOptions
	        }
	      }, uiOptions))), option !== null && React.createElement(_SchemaField, {
	        schema: optionSchema,
	        uiSchema: uiSchema,
	        errorSchema: errorSchema,
	        idSchema: idSchema,
	        idPrefix: idPrefix,
	        formData: formData,
	        onChange: onChange,
	        onBlur: onBlur,
	        onFocus: onFocus,
	        registry: registry,
	        disabled: disabled
	      }));
	    }
	  }]);

	  return AnyOfField;
	}(react.exports.Component);

	AnyOfField.defaultProps = {
	  disabled: false,
	  errorSchema: {},
	  idSchema: {},
	  uiSchema: {}
	};

	function _typeof$7(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$7 = function _typeof(obj) { return typeof obj; }; } else { _typeof$7 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$7(obj); }

	function _extends$e() { _extends$e = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$e.apply(this, arguments); }

	function _objectWithoutProperties$4(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

	function _objectWithoutPropertiesLoose$4(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

	function _classCallCheck$6(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties$6(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass$6(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$6(Constructor.prototype, protoProps); if (staticProps) _defineProperties$6(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn$6(self, call) { if (call && (_typeof$7(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$6(self); }

	function _getPrototypeOf$6(o) { _getPrototypeOf$6 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$6(o); }

	function _assertThisInitialized$6(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _inherits$6(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$6(subClass, superClass); }

	function _setPrototypeOf$6(o, p) { _setPrototypeOf$6 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$6(o, p); }

	function _defineProperty$9(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	// digits followed by any number of 0 characters up until the end of the line.
	// Ensuring that there is at least one prefixed character is important so that
	// you don't incorrectly match against "0".

	var trailingCharMatcherWithPrefix = /\.([0-9]*0)*$/; // This is used for trimming the trailing 0 and . characters without affecting
	// the rest of the string. Its possible to use one RegEx with groups for this
	// functionality, but it is fairly complex compared to simply defining two
	// different matchers.

	var trailingCharMatcher = /[0.]0*$/;
	/**
	 * The NumberField class has some special handling for dealing with trailing
	 * decimal points and/or zeroes. This logic is designed to allow trailing values
	 * to be visible in the input element, but not be represented in the
	 * corresponding form data.
	 *
	 * The algorithm is as follows:
	 *
	 * 1. When the input value changes the value is cached in the component state
	 *
	 * 2. The value is then normalized, removing trailing decimal points and zeros,
	 *    then passed to the "onChange" callback
	 *
	 * 3. When the component is rendered, the formData value is checked against the
	 *    value cached in the state. If it matches the cached value, the cached
	 *    value is passed to the input instead of the formData value
	 */

	var NumberField =
	/*#__PURE__*/
	function (_React$Component) {
	  _inherits$6(NumberField, _React$Component);

	  function NumberField(props) {
	    var _this;

	    _classCallCheck$6(this, NumberField);

	    _this = _possibleConstructorReturn$6(this, _getPrototypeOf$6(NumberField).call(this, props));

	    _defineProperty$9(_assertThisInitialized$6(_this), "handleChange", function (value) {
	      // Cache the original value in component state
	      _this.setState({
	        lastValue: value
	      }); // Normalize decimals that don't start with a zero character in advance so
	      // that the rest of the normalization logic is simpler


	      if ("".concat(value).charAt(0) === ".") {
	        value = "0".concat(value);
	      } // Check that the value is a string (this can happen if the widget used is a
	      // <select>, due to an enum declaration etc) then, if the value ends in a
	      // trailing decimal point or multiple zeroes, strip the trailing values


	      var processed = typeof value === "string" && value.match(trailingCharMatcherWithPrefix) ? asNumber(value.replace(trailingCharMatcher, "")) : asNumber(value);

	      _this.props.onChange(processed);
	    });

	    _this.state = {
	      lastValue: props.value
	    };
	    return _this;
	  }

	  _createClass$6(NumberField, [{
	    key: "render",
	    value: function render() {
	      var StringField = this.props.registry.fields.StringField;

	      var _this$props = this.props,
	          formData = _this$props.formData,
	          props = _objectWithoutProperties$4(_this$props, ["formData"]);

	      var lastValue = this.state.lastValue;
	      var value = formData;

	      if (typeof lastValue === "string" && typeof value === "number") {
	        // Construct a regular expression that checks for a string that consists
	        // of the formData value suffixed with zero or one '.' characters and zero
	        // or more '0' characters
	        var re = new RegExp("".concat(value).replace(".", "\\.") + "\\.?0*$"); // If the cached "lastValue" is a match, use that instead of the formData
	        // value to prevent the input value from changing in the UI

	        if (lastValue.match(re)) {
	          value = lastValue;
	        }
	      }

	      return React.createElement(StringField, _extends$e({}, props, {
	        formData: value,
	        onChange: this.handleChange
	      }));
	    }
	  }]);

	  return NumberField;
	}(React.Component);

	NumberField.defaultProps = {
	  uiSchema: {}
	};

	function _typeof$6(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$6 = function _typeof(obj) { return typeof obj; }; } else { _typeof$6 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$6(obj); }

	function _extends$d() { _extends$d = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$d.apply(this, arguments); }

	function _toConsumableArray$3(arr) { return _arrayWithoutHoles$3(arr) || _iterableToArray$3(arr) || _nonIterableSpread$3(); }

	function _nonIterableSpread$3() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

	function _iterableToArray$3(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

	function _arrayWithoutHoles$3(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

	function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$8(target, key, source[key]); }); } return target; }

	function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties$5(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass$5(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$5(Constructor.prototype, protoProps); if (staticProps) _defineProperties$5(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn$5(self, call) { if (call && (_typeof$6(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$5(self); }

	function _getPrototypeOf$5(o) { _getPrototypeOf$5 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$5(o); }

	function _assertThisInitialized$5(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _inherits$5(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$5(subClass, superClass); }

	function _setPrototypeOf$5(o, p) { _setPrototypeOf$5 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$5(o, p); }

	function _defineProperty$8(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function DefaultObjectFieldTemplate(props) {
	  var TitleField = props.TitleField,
	      DescriptionField = props.DescriptionField;
	  return React.createElement("fieldset", {
	    id: props.idSchema.$id
	  }, (props.uiSchema["ui:title"] || props.title) && React.createElement(TitleField, {
	    id: "".concat(props.idSchema.$id, "__title"),
	    title: props.title || props.uiSchema["ui:title"],
	    required: props.required,
	    formContext: props.formContext
	  }), props.description && React.createElement(DescriptionField, {
	    id: "".concat(props.idSchema.$id, "__description"),
	    description: props.description,
	    formContext: props.formContext
	  }), props.properties.map(function (prop) {
	    return prop.content;
	  }), canExpand(props.schema, props.uiSchema, props.formData) && React.createElement(AddButton, {
	    className: "object-property-expand",
	    onClick: props.onAddClick(props.schema),
	    disabled: props.disabled || props.readonly
	  }));
	}

	var ObjectField =
	/*#__PURE__*/
	function (_Component) {
	  _inherits$5(ObjectField, _Component);

	  function ObjectField() {
	    var _getPrototypeOf2;

	    var _this;

	    _classCallCheck$5(this, ObjectField);

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _possibleConstructorReturn$5(this, (_getPrototypeOf2 = _getPrototypeOf$5(ObjectField)).call.apply(_getPrototypeOf2, [this].concat(args)));

	    _defineProperty$8(_assertThisInitialized$5(_this), "state", {
	      wasPropertyKeyModified: false,
	      additionalProperties: {}
	    });

	    _defineProperty$8(_assertThisInitialized$5(_this), "onPropertyChange", function (name) {
	      var addedByAdditionalProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	      return function (value, errorSchema) {
	        if (value === undefined && addedByAdditionalProperties) {
	          // Don't set value = undefined for fields added by
	          // additionalProperties. Doing so removes them from the
	          // formData, which causes them to completely disappear
	          // (including the input field for the property name). Unlike
	          // fields which are "mandated" by the schema, these fields can
	          // be set to undefined by clicking a "delete field" button, so
	          // set empty values to the empty string.
	          value = "";
	        }

	        var newFormData = _objectSpread$6({}, _this.props.formData, _defineProperty$8({}, name, value));

	        _this.props.onChange(newFormData, errorSchema && _this.props.errorSchema && _objectSpread$6({}, _this.props.errorSchema, _defineProperty$8({}, name, errorSchema)));
	      };
	    });

	    _defineProperty$8(_assertThisInitialized$5(_this), "onDropPropertyClick", function (key) {
	      return function (event) {
	        event.preventDefault();
	        var _this$props = _this.props,
	            onChange = _this$props.onChange,
	            formData = _this$props.formData;

	        var copiedFormData = _objectSpread$6({}, formData);

	        delete copiedFormData[key];
	        onChange(copiedFormData);
	      };
	    });

	    _defineProperty$8(_assertThisInitialized$5(_this), "getAvailableKey", function (preferredKey, formData) {
	      var index = 0;
	      var newKey = preferredKey;

	      while (formData.hasOwnProperty(newKey)) {
	        newKey = "".concat(preferredKey, "-").concat(++index);
	      }

	      return newKey;
	    });

	    _defineProperty$8(_assertThisInitialized$5(_this), "onKeyChange", function (oldValue) {
	      return function (value, errorSchema) {
	        if (oldValue === value) {
	          return;
	        }

	        value = _this.getAvailableKey(value, _this.props.formData);

	        var newFormData = _objectSpread$6({}, _this.props.formData);

	        var newKeys = _defineProperty$8({}, oldValue, value);

	        var keyValues = Object.keys(newFormData).map(function (key) {
	          var newKey = newKeys[key] || key;
	          return _defineProperty$8({}, newKey, newFormData[key]);
	        });
	        var renamedObj = Object.assign.apply(Object, [{}].concat(_toConsumableArray$3(keyValues)));

	        _this.setState({
	          wasPropertyKeyModified: true
	        });

	        _this.props.onChange(renamedObj, errorSchema && _this.props.errorSchema && _objectSpread$6({}, _this.props.errorSchema, _defineProperty$8({}, value, errorSchema)));
	      };
	    });

	    _defineProperty$8(_assertThisInitialized$5(_this), "handleAddClick", function (schema) {
	      return function () {
	        var type = schema.additionalProperties.type;

	        var newFormData = _objectSpread$6({}, _this.props.formData);

	        if (schema.additionalProperties.hasOwnProperty("$ref")) {
	          var _this$props$registry = _this.props.registry,
	              registry = _this$props$registry === void 0 ? getDefaultRegistry() : _this$props$registry;
	          var refSchema = retrieveSchema({
	            $ref: schema.additionalProperties["$ref"]
	          }, registry.rootSchema, _this.props.formData);
	          type = refSchema.type;
	        }

	        newFormData[_this.getAvailableKey("newKey", newFormData)] = _this.getDefaultValue(type);

	        _this.props.onChange(newFormData);
	      };
	    });

	    return _this;
	  }

	  _createClass$5(ObjectField, [{
	    key: "isRequired",
	    value: function isRequired(name) {
	      var schema = this.props.schema;
	      return Array.isArray(schema.required) && schema.required.indexOf(name) !== -1;
	    }
	  }, {
	    key: "getDefaultValue",
	    value: function getDefaultValue(type) {
	      switch (type) {
	        case "string":
	          return "New Value";

	        case "array":
	          return [];

	        case "boolean":
	          return false;

	        case "null":
	          return null;

	        case "number":
	          return 0;

	        case "object":
	          return {};

	        default:
	          // We don't have a datatype for some reason (perhaps additionalProperties was true)
	          return "New Value";
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;

	      var _this$props2 = this.props,
	          uiSchema = _this$props2.uiSchema,
	          formData = _this$props2.formData,
	          errorSchema = _this$props2.errorSchema,
	          idSchema = _this$props2.idSchema,
	          name = _this$props2.name,
	          required = _this$props2.required,
	          disabled = _this$props2.disabled,
	          readonly = _this$props2.readonly,
	          idPrefix = _this$props2.idPrefix,
	          onBlur = _this$props2.onBlur,
	          onFocus = _this$props2.onFocus,
	          _this$props2$registry = _this$props2.registry,
	          registry = _this$props2$registry === void 0 ? getDefaultRegistry() : _this$props2$registry;
	      var rootSchema = registry.rootSchema,
	          fields = registry.fields,
	          formContext = registry.formContext;
	      var SchemaField = fields.SchemaField,
	          TitleField = fields.TitleField,
	          DescriptionField = fields.DescriptionField;
	      var schema = retrieveSchema(this.props.schema, rootSchema, formData);
	      var title = schema.title === undefined ? name : schema.title;
	      var description = uiSchema["ui:description"] || schema.description;
	      var orderedProperties;

	      try {
	        var properties = Object.keys(schema.properties || {});
	        orderedProperties = orderProperties(properties, uiSchema["ui:order"]);
	      } catch (err) {
	        return React.createElement("div", null, React.createElement("p", {
	          className: "config-error",
	          style: {
	            color: "red"
	          }
	        }, "Invalid ", name || "root", " object field configuration:", React.createElement("em", null, err.message), "."), React.createElement("pre", null, JSON.stringify(schema)));
	      }

	      var Template = uiSchema["ui:ObjectFieldTemplate"] || registry.ObjectFieldTemplate || DefaultObjectFieldTemplate;
	      var templateProps = {
	        title: uiSchema["ui:title"] || title,
	        description: description,
	        TitleField: TitleField,
	        DescriptionField: DescriptionField,
	        properties: orderedProperties.map(function (name) {
	          var addedByAdditionalProperties = schema.properties[name].hasOwnProperty(ADDITIONAL_PROPERTY_FLAG);
	          var fieldUiSchema = addedByAdditionalProperties ? uiSchema.additionalProperties : uiSchema[name];
	          var hidden = fieldUiSchema && fieldUiSchema["ui:widget"] === "hidden";
	          return {
	            content: React.createElement(SchemaField, {
	              key: name,
	              name: name,
	              required: _this2.isRequired(name),
	              schema: schema.properties[name],
	              uiSchema: fieldUiSchema,
	              errorSchema: errorSchema[name],
	              idSchema: idSchema[name],
	              idPrefix: idPrefix,
	              formData: (formData || {})[name],
	              wasPropertyKeyModified: _this2.state.wasPropertyKeyModified,
	              onKeyChange: _this2.onKeyChange(name),
	              onChange: _this2.onPropertyChange(name, addedByAdditionalProperties),
	              onBlur: onBlur,
	              onFocus: onFocus,
	              registry: registry,
	              disabled: disabled,
	              readonly: readonly,
	              onDropPropertyClick: _this2.onDropPropertyClick
	            }),
	            name: name,
	            readonly: readonly,
	            disabled: disabled,
	            required: required,
	            hidden: hidden
	          };
	        }),
	        readonly: readonly,
	        disabled: disabled,
	        required: required,
	        idSchema: idSchema,
	        uiSchema: uiSchema,
	        schema: schema,
	        formData: formData,
	        formContext: formContext,
	        registry: registry
	      };
	      return React.createElement(Template, _extends$d({}, templateProps, {
	        onAddClick: this.handleAddClick
	      }));
	    }
	  }]);

	  return ObjectField;
	}(react.exports.Component);

	_defineProperty$8(ObjectField, "defaultProps", {
	  uiSchema: {},
	  formData: {},
	  errorSchema: {},
	  idSchema: {},
	  required: false,
	  disabled: false,
	  readonly: false
	});

	function _typeof$5(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$5 = function _typeof(obj) { return typeof obj; }; } else { _typeof$5 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$5(obj); }

	function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties$4(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass$4(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$4(Constructor.prototype, protoProps); if (staticProps) _defineProperties$4(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn$4(self, call) { if (call && (_typeof$5(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$4(self); }

	function _assertThisInitialized$4(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf$4(o) { _getPrototypeOf$4 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$4(o); }

	function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$4(subClass, superClass); }

	function _setPrototypeOf$4(o, p) { _setPrototypeOf$4 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$4(o, p); }

	function _extends$c() { _extends$c = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$c.apply(this, arguments); }

	function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$7(target, key, source[key]); }); } return target; }

	function _defineProperty$7(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties$3(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

	function _objectWithoutPropertiesLoose$3(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
	var REQUIRED_FIELD_SYMBOL$1 = "*";
	var COMPONENT_TYPES = {
	  array: "ArrayField",
	  "boolean": "BooleanField",
	  integer: "NumberField",
	  number: "NumberField",
	  object: "ObjectField",
	  string: "StringField",
	  "null": "NullField"
	};

	function getFieldComponent(schema, uiSchema, idSchema, fields) {
	  var field = uiSchema["ui:field"];

	  if (typeof field === "function") {
	    return field;
	  }

	  if (typeof field === "string" && field in fields) {
	    return fields[field];
	  }

	  var componentName = COMPONENT_TYPES[getSchemaType(schema)]; // If the type is not defined and the schema uses 'anyOf' or 'oneOf', don't
	  // render a field and let the MultiSchemaField component handle the form display

	  if (!componentName && (schema.anyOf || schema.oneOf)) {
	    return function () {
	      return null;
	    };
	  }

	  return componentName in fields ? fields[componentName] : function () {
	    var UnsupportedField = fields.UnsupportedField;
	    return React.createElement(UnsupportedField, {
	      schema: schema,
	      idSchema: idSchema,
	      reason: "Unknown field type ".concat(schema.type)
	    });
	  };
	}

	function Label(props) {
	  var label = props.label,
	      required = props.required,
	      id = props.id;

	  if (!label) {
	    return null;
	  }

	  return React.createElement("label", {
	    className: "control-label",
	    htmlFor: id
	  }, label, required && React.createElement("span", {
	    className: "required"
	  }, REQUIRED_FIELD_SYMBOL$1));
	}

	function LabelInput(props) {
	  var id = props.id,
	      label = props.label,
	      onChange = props.onChange;
	  return React.createElement("input", {
	    className: "form-control",
	    type: "text",
	    id: id,
	    onBlur: function onBlur(event) {
	      return onChange(event.target.value);
	    },
	    defaultValue: label
	  });
	}

	function Help(props) {
	  var id = props.id,
	      help = props.help;

	  if (!help) {
	    return null;
	  }

	  if (typeof help === "string") {
	    return React.createElement("p", {
	      id: id,
	      className: "help-block"
	    }, help);
	  }

	  return React.createElement("div", {
	    id: id,
	    className: "help-block"
	  }, help);
	}

	function ErrorList(props) {
	  var _props$errors = props.errors,
	      errors = _props$errors === void 0 ? [] : _props$errors;

	  if (errors.length === 0) {
	    return null;
	  }

	  return React.createElement("div", null, React.createElement("ul", {
	    className: "error-detail bs-callout bs-callout-info"
	  }, errors.filter(function (elem) {
	    return !!elem;
	  }).map(function (error, index) {
	    return React.createElement("li", {
	      className: "text-danger",
	      key: index
	    }, error);
	  })));
	}

	function DefaultTemplate(props) {
	  var id = props.id,
	      label = props.label,
	      children = props.children,
	      errors = props.errors,
	      help = props.help,
	      description = props.description,
	      hidden = props.hidden,
	      required = props.required,
	      displayLabel = props.displayLabel;

	  if (hidden) {
	    return React.createElement("div", {
	      className: "hidden"
	    }, children);
	  }

	  return React.createElement(WrapIfAdditional, props, displayLabel && React.createElement(Label, {
	    label: label,
	    required: required,
	    id: id
	  }), displayLabel && description ? description : null, children, errors, help);
	}

	DefaultTemplate.defaultProps = {
	  hidden: false,
	  readonly: false,
	  required: false,
	  displayLabel: true
	};

	function WrapIfAdditional(props) {
	  var id = props.id,
	      classNames = props.classNames,
	      disabled = props.disabled,
	      label = props.label,
	      onKeyChange = props.onKeyChange,
	      onDropPropertyClick = props.onDropPropertyClick,
	      readonly = props.readonly,
	      required = props.required,
	      schema = props.schema;
	  var keyLabel = "".concat(label, " Key"); // i18n ?

	  var additional = schema.hasOwnProperty(ADDITIONAL_PROPERTY_FLAG);

	  if (!additional) {
	    return React.createElement("div", {
	      className: classNames
	    }, props.children);
	  }

	  return React.createElement("div", {
	    className: classNames
	  }, React.createElement("div", {
	    className: "row"
	  }, React.createElement("div", {
	    className: "col-xs-5 form-additional"
	  }, React.createElement("div", {
	    className: "form-group"
	  }, React.createElement(Label, {
	    label: keyLabel,
	    required: required,
	    id: "".concat(id, "-key")
	  }), React.createElement(LabelInput, {
	    label: label,
	    required: required,
	    id: "".concat(id, "-key"),
	    onChange: onKeyChange
	  }))), React.createElement("div", {
	    className: "form-additional form-group col-xs-5"
	  }, props.children), React.createElement("div", {
	    className: "col-xs-2"
	  }, React.createElement(IconButton, {
	    type: "danger",
	    icon: "remove",
	    className: "array-item-remove btn-block",
	    tabIndex: "-1",
	    style: {
	      border: "0"
	    },
	    disabled: disabled || readonly,
	    onClick: onDropPropertyClick(label)
	  }))));
	}

	function SchemaFieldRender(props) {
	  var uiSchema = props.uiSchema,
	      formData = props.formData,
	      errorSchema = props.errorSchema,
	      idPrefix = props.idPrefix,
	      name = props.name,
	      onChange = props.onChange,
	      onKeyChange = props.onKeyChange,
	      onDropPropertyClick = props.onDropPropertyClick,
	      required = props.required,
	      _props$registry = props.registry,
	      registry = _props$registry === void 0 ? getDefaultRegistry() : _props$registry,
	      _props$wasPropertyKey = props.wasPropertyKeyModified,
	      wasPropertyKeyModified = _props$wasPropertyKey === void 0 ? false : _props$wasPropertyKey;
	  var rootSchema = registry.rootSchema,
	      fields = registry.fields,
	      formContext = registry.formContext;
	  var FieldTemplate = uiSchema["ui:FieldTemplate"] || registry.FieldTemplate || DefaultTemplate;
	  var idSchema = props.idSchema;
	  var schema = retrieveSchema(props.schema, rootSchema, formData);
	  idSchema = mergeObjects(toIdSchema(schema, null, rootSchema, formData, idPrefix), idSchema);
	  var FieldComponent = getFieldComponent(schema, uiSchema, idSchema, fields);
	  var DescriptionField = fields.DescriptionField;
	  var disabled = Boolean(props.disabled || uiSchema["ui:disabled"]);
	  var readonly = Boolean(props.readonly || uiSchema["ui:readonly"] || props.schema.readOnly || schema.readOnly);
	  var autofocus = Boolean(props.autofocus || uiSchema["ui:autofocus"]);

	  if (Object.keys(schema).length === 0) {
	    return null;
	  }

	  var displayLabel = getDisplayLabel(schema, uiSchema, rootSchema);

	  var __errors = errorSchema.__errors,
	      fieldErrorSchema = _objectWithoutProperties$3(errorSchema, ["__errors"]); // See #439: uiSchema: Don't pass consumed class names to child components


	  var field = React.createElement(FieldComponent, _extends$c({}, props, {
	    idSchema: idSchema,
	    schema: schema,
	    uiSchema: _objectSpread$5({}, uiSchema, {
	      classNames: undefined
	    }),
	    disabled: disabled,
	    readonly: readonly,
	    autofocus: autofocus,
	    errorSchema: fieldErrorSchema,
	    formContext: formContext,
	    rawErrors: __errors
	  }));
	  var id = idSchema.$id; // If this schema has a title defined, but the user has set a new key/label, retain their input.

	  var label;

	  if (wasPropertyKeyModified) {
	    label = name;
	  } else {
	    label = uiSchema["ui:title"] || props.schema.title || schema.title || name;
	  }

	  var description = uiSchema["ui:description"] || props.schema.description || schema.description;
	  var errors = __errors;
	  var help = uiSchema["ui:help"];
	  var hidden = uiSchema["ui:widget"] === "hidden";
	  var classNames = ["form-group", "field", "field-".concat(schema.type), errors && errors.length > 0 ? "field-error has-error has-danger" : "", uiSchema.classNames].join(" ").trim();
	  var fieldProps = {
	    description: React.createElement(DescriptionField, {
	      id: id + "__description",
	      description: description,
	      formContext: formContext
	    }),
	    rawDescription: description,
	    help: React.createElement(Help, {
	      id: id + "__help",
	      help: help
	    }),
	    rawHelp: typeof help === "string" ? help : undefined,
	    errors: React.createElement(ErrorList, {
	      errors: errors
	    }),
	    rawErrors: errors,
	    id: id,
	    label: label,
	    hidden: hidden,
	    onChange: onChange,
	    onKeyChange: onKeyChange,
	    onDropPropertyClick: onDropPropertyClick,
	    required: required,
	    disabled: disabled,
	    readonly: readonly,
	    displayLabel: displayLabel,
	    classNames: classNames,
	    formContext: formContext,
	    formData: formData,
	    fields: fields,
	    schema: schema,
	    uiSchema: uiSchema,
	    registry: registry
	  };
	  var _AnyOfField = registry.fields.AnyOfField;
	  var _OneOfField = registry.fields.OneOfField;
	  return React.createElement(FieldTemplate, fieldProps, React.createElement(React.Fragment, null, field, schema.anyOf && !isSelect(schema) && React.createElement(_AnyOfField, {
	    disabled: disabled,
	    errorSchema: errorSchema,
	    formData: formData,
	    idPrefix: idPrefix,
	    idSchema: idSchema,
	    onBlur: props.onBlur,
	    onChange: props.onChange,
	    onFocus: props.onFocus,
	    options: schema.anyOf.map(function (_schema) {
	      return retrieveSchema(_schema, rootSchema, formData);
	    }),
	    baseType: schema.type,
	    registry: registry,
	    schema: schema,
	    uiSchema: uiSchema
	  }), schema.oneOf && !isSelect(schema) && React.createElement(_OneOfField, {
	    disabled: disabled,
	    errorSchema: errorSchema,
	    formData: formData,
	    idPrefix: idPrefix,
	    idSchema: idSchema,
	    onBlur: props.onBlur,
	    onChange: props.onChange,
	    onFocus: props.onFocus,
	    options: schema.oneOf.map(function (_schema) {
	      return retrieveSchema(_schema, rootSchema, formData);
	    }),
	    baseType: schema.type,
	    registry: registry,
	    schema: schema,
	    uiSchema: uiSchema
	  })));
	}

	var SchemaField =
	/*#__PURE__*/
	function (_React$Component) {
	  _inherits$4(SchemaField, _React$Component);

	  function SchemaField() {
	    _classCallCheck$4(this, SchemaField);

	    return _possibleConstructorReturn$4(this, _getPrototypeOf$4(SchemaField).apply(this, arguments));
	  }

	  _createClass$4(SchemaField, [{
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return !deepEquals(this.props, nextProps);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return SchemaFieldRender(this.props);
	    }
	  }]);

	  return SchemaField;
	}(React.Component);

	SchemaField.defaultProps = {
	  uiSchema: {},
	  errorSchema: {},
	  idSchema: {},
	  disabled: false,
	  readonly: false,
	  autofocus: false
	};

	function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$6(target, key, source[key]); }); } return target; }

	function _defineProperty$6(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties$2(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

	function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

	function StringField(props) {
	  var schema = props.schema,
	      name = props.name,
	      uiSchema = props.uiSchema,
	      idSchema = props.idSchema,
	      formData = props.formData,
	      required = props.required,
	      disabled = props.disabled,
	      readonly = props.readonly,
	      autofocus = props.autofocus,
	      onChange = props.onChange,
	      onBlur = props.onBlur,
	      onFocus = props.onFocus,
	      _props$registry = props.registry,
	      registry = _props$registry === void 0 ? getDefaultRegistry() : _props$registry,
	      rawErrors = props.rawErrors;
	  var title = schema.title,
	      format = schema.format;
	  var widgets = registry.widgets,
	      formContext = registry.formContext;
	  var enumOptions = isSelect(schema) && optionsList(schema);
	  var defaultWidget = enumOptions ? "select" : "text";

	  if (format && hasWidget(schema, format, widgets)) {
	    defaultWidget = format;
	  }

	  var _getUiOptions = getUiOptions(uiSchema),
	      _getUiOptions$widget = _getUiOptions.widget,
	      widget = _getUiOptions$widget === void 0 ? defaultWidget : _getUiOptions$widget,
	      _getUiOptions$placeho = _getUiOptions.placeholder,
	      placeholder = _getUiOptions$placeho === void 0 ? "" : _getUiOptions$placeho,
	      options = _objectWithoutProperties$2(_getUiOptions, ["widget", "placeholder"]);

	  var Widget = getWidget(schema, widget, widgets);
	  return React.createElement(Widget, {
	    options: _objectSpread$4({}, options, {
	      enumOptions: enumOptions
	    }),
	    schema: schema,
	    uiSchema: uiSchema,
	    id: idSchema && idSchema.$id,
	    label: title === undefined ? name : title,
	    value: formData,
	    onChange: onChange,
	    onBlur: onBlur,
	    onFocus: onFocus,
	    required: required,
	    disabled: disabled,
	    readonly: readonly,
	    formContext: formContext,
	    autofocus: autofocus,
	    registry: registry,
	    placeholder: placeholder,
	    rawErrors: rawErrors
	  });
	}

	StringField.defaultProps = {
	  uiSchema: {},
	  disabled: false,
	  readonly: false,
	  autofocus: false
	};

	var REQUIRED_FIELD_SYMBOL = "*";

	function TitleField(props) {
	  var id = props.id,
	      title = props.title,
	      required = props.required;
	  return React.createElement("legend", {
	    id: id
	  }, title, required && React.createElement("span", {
	    className: "required"
	  }, REQUIRED_FIELD_SYMBOL));
	}

	function _typeof$4(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$4 = function _typeof(obj) { return typeof obj; }; } else { _typeof$4 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$4(obj); }

	function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties$3(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass$3(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$3(Constructor.prototype, protoProps); if (staticProps) _defineProperties$3(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn$3(self, call) { if (call && (_typeof$4(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$3(self); }

	function _assertThisInitialized$3(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf$3(o) { _getPrototypeOf$3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$3(o); }

	function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$3(subClass, superClass); }

	function _setPrototypeOf$3(o, p) { _setPrototypeOf$3 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$3(o, p); }

	var NullField =
	/*#__PURE__*/
	function (_Component) {
	  _inherits$3(NullField, _Component);

	  function NullField() {
	    _classCallCheck$3(this, NullField);

	    return _possibleConstructorReturn$3(this, _getPrototypeOf$3(NullField).apply(this, arguments));
	  }

	  _createClass$3(NullField, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      if (this.props.formData === undefined) {
	        this.props.onChange(null);
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return null;
	    }
	  }]);

	  return NullField;
	}(react.exports.Component);

	function UnsupportedField(_ref) {
	  var schema = _ref.schema,
	      idSchema = _ref.idSchema,
	      reason = _ref.reason;
	  return React.createElement("div", {
	    className: "unsupported-field"
	  }, React.createElement("p", null, "Unsupported field schema", idSchema && idSchema.$id && React.createElement("span", null, " for", " field ", React.createElement("code", null, idSchema.$id)), reason && React.createElement("em", null, ": ", reason), "."), schema && React.createElement("pre", null, JSON.stringify(schema, null, 2)));
	}

	var fields = {
	  AnyOfField: AnyOfField,
	  ArrayField: ArrayField,
	  BooleanField: BooleanField,
	  DescriptionField: DescriptionField,
	  NumberField: NumberField,
	  ObjectField: ObjectField,
	  OneOfField: AnyOfField,
	  SchemaField: SchemaField,
	  StringField: StringField,
	  TitleField: TitleField,
	  NullField: NullField,
	  UnsupportedField: UnsupportedField
	};

	function _typeof$3(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$3 = function _typeof(obj) { return typeof obj; }; } else { _typeof$3 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$3(obj); }

	function _extends$b() { _extends$b = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$b.apply(this, arguments); }

	function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties$2(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass$2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$2(Constructor.prototype, protoProps); if (staticProps) _defineProperties$2(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn$2(self, call) { if (call && (_typeof$3(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$2(self); }

	function _getPrototypeOf$2(o) { _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$2(o); }

	function _assertThisInitialized$2(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$2(subClass, superClass); }

	function _setPrototypeOf$2(o, p) { _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$2(o, p); }

	function _defineProperty$5(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function rangeOptions(start, stop) {
	  var options = [];

	  for (var i = start; i <= stop; i++) {
	    options.push({
	      value: i,
	      label: pad(i, 2)
	    });
	  }

	  return options;
	}

	function readyForChange(state) {
	  return Object.keys(state).every(function (key) {
	    return state[key] !== -1;
	  });
	}

	function DateElement(props) {
	  var type = props.type,
	      range = props.range,
	      value = props.value,
	      select = props.select,
	      rootId = props.rootId,
	      disabled = props.disabled,
	      readonly = props.readonly,
	      autofocus = props.autofocus,
	      registry = props.registry,
	      onBlur = props.onBlur;
	  var id = rootId + "_" + type;
	  var SelectWidget = registry.widgets.SelectWidget;
	  return React.createElement(SelectWidget, {
	    schema: {
	      type: "integer"
	    },
	    id: id,
	    className: "form-control",
	    options: {
	      enumOptions: rangeOptions(range[0], range[1])
	    },
	    placeholder: type,
	    value: value,
	    disabled: disabled,
	    readonly: readonly,
	    autofocus: autofocus,
	    onChange: function onChange(value) {
	      return select(type, value);
	    },
	    onBlur: onBlur
	  });
	}

	var AltDateWidget =
	/*#__PURE__*/
	function (_Component) {
	  _inherits$2(AltDateWidget, _Component);

	  function AltDateWidget(props) {
	    var _this;

	    _classCallCheck$2(this, AltDateWidget);

	    _this = _possibleConstructorReturn$2(this, _getPrototypeOf$2(AltDateWidget).call(this, props));

	    _defineProperty$5(_assertThisInitialized$2(_this), "onChange", function (property, value) {
	      _this.setState(_defineProperty$5({}, property, typeof value === "undefined" ? -1 : value), function () {
	        // Only propagate to parent state if we have a complete date{time}
	        if (readyForChange(_this.state)) {
	          _this.props.onChange(toDateString(_this.state, _this.props.time));
	        }
	      });
	    });

	    _defineProperty$5(_assertThisInitialized$2(_this), "setNow", function (event) {
	      event.preventDefault();
	      var _this$props = _this.props,
	          time = _this$props.time,
	          disabled = _this$props.disabled,
	          readonly = _this$props.readonly,
	          onChange = _this$props.onChange;

	      if (disabled || readonly) {
	        return;
	      }

	      var nowDateObj = parseDateString(new Date().toJSON(), time);

	      _this.setState(nowDateObj, function () {
	        return onChange(toDateString(_this.state, time));
	      });
	    });

	    _defineProperty$5(_assertThisInitialized$2(_this), "clear", function (event) {
	      event.preventDefault();
	      var _this$props2 = _this.props,
	          time = _this$props2.time,
	          disabled = _this$props2.disabled,
	          readonly = _this$props2.readonly,
	          onChange = _this$props2.onChange;

	      if (disabled || readonly) {
	        return;
	      }

	      _this.setState(parseDateString("", time), function () {
	        return onChange(undefined);
	      });
	    });

	    _this.state = parseDateString(props.value, props.time);
	    return _this;
	  }

	  _createClass$2(AltDateWidget, [{
	    key: "componentDidUpdate",
	    value: function componentDidUpdate(prevProps, prevState) {
	      if (prevProps.value && prevProps.value !== parseDateString(this.props.value, this.props.time)) {
	        this.setState(parseDateString(this.props.value, this.props.time));
	      }
	    }
	  }, {
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return shouldRender(this, nextProps, nextState);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;

	      var _this$props3 = this.props,
	          id = _this$props3.id,
	          disabled = _this$props3.disabled,
	          readonly = _this$props3.readonly,
	          autofocus = _this$props3.autofocus,
	          registry = _this$props3.registry,
	          onBlur = _this$props3.onBlur,
	          options = _this$props3.options;
	      return React.createElement("ul", {
	        className: "list-inline"
	      }, this.dateElementProps.map(function (elemProps, i) {
	        return React.createElement("li", {
	          key: i
	        }, React.createElement(DateElement, _extends$b({
	          rootId: id,
	          select: _this2.onChange
	        }, elemProps, {
	          disabled: disabled,
	          readonly: readonly,
	          registry: registry,
	          onBlur: onBlur,
	          autofocus: autofocus && i === 0
	        })));
	      }), (options.hideNowButton !== "undefined" ? !options.hideNowButton : true) && React.createElement("li", null, React.createElement("a", {
	        href: "#",
	        className: "btn btn-info btn-now",
	        onClick: this.setNow
	      }, "Now")), (options.hideClearButton !== "undefined" ? !options.hideClearButton : true) && React.createElement("li", null, React.createElement("a", {
	        href: "#",
	        className: "btn btn-warning btn-clear",
	        onClick: this.clear
	      }, "Clear")));
	    }
	  }, {
	    key: "dateElementProps",
	    get: function get() {
	      var _this$props4 = this.props,
	          time = _this$props4.time,
	          options = _this$props4.options;
	      var _this$state = this.state,
	          year = _this$state.year,
	          month = _this$state.month,
	          day = _this$state.day,
	          hour = _this$state.hour,
	          minute = _this$state.minute,
	          second = _this$state.second;
	      var data = [{
	        type: "year",
	        range: options.yearsRange,
	        value: year
	      }, {
	        type: "month",
	        range: [1, 12],
	        value: month
	      }, {
	        type: "day",
	        range: [1, 31],
	        value: day
	      }];

	      if (time) {
	        data.push({
	          type: "hour",
	          range: [0, 23],
	          value: hour
	        }, {
	          type: "minute",
	          range: [0, 59],
	          value: minute
	        }, {
	          type: "second",
	          range: [0, 59],
	          value: second
	        });
	      }

	      return data;
	    }
	  }]);

	  return AltDateWidget;
	}(react.exports.Component);

	_defineProperty$5(AltDateWidget, "defaultProps", {
	  time: false,
	  disabled: false,
	  readonly: false,
	  autofocus: false,
	  options: {
	    yearsRange: [1900, new Date().getFullYear() + 2]
	  }
	});

	function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$4(target, key, source[key]); }); } return target; }

	function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _extends$a() { _extends$a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }

	function AltDateTimeWidget(props) {
	  var AltDateWidget = props.registry.widgets.AltDateWidget;
	  return React.createElement(AltDateWidget, _extends$a({
	    time: true
	  }, props));
	}

	AltDateTimeWidget.defaultProps = _objectSpread$3({}, AltDateWidget.defaultProps, {
	  time: true
	});

	function _toConsumableArray$2(arr) { return _arrayWithoutHoles$2(arr) || _iterableToArray$2(arr) || _nonIterableSpread$2(); }

	function _nonIterableSpread$2() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

	function _iterableToArray$2(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

	function _arrayWithoutHoles$2(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

	function _extends$9() { _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }

	function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

	function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

	function BaseInput(props) {
	  // Note: since React 15.2.0 we can't forward unknown element attributes, so we
	  // exclude the "options" and "schema" ones here.
	  if (!props.id) {
	    console.log("No id for", props);
	    throw new Error("no id for props ".concat(JSON.stringify(props)));
	  }

	  var value = props.value,
	      readonly = props.readonly,
	      disabled = props.disabled,
	      autofocus = props.autofocus,
	      onBlur = props.onBlur,
	      onFocus = props.onFocus,
	      options = props.options,
	      schema = props.schema;
	      props.uiSchema;
	      props.formContext;
	      props.registry;
	      props.rawErrors;
	      var inputProps = _objectWithoutProperties$1(props, ["value", "readonly", "disabled", "autofocus", "onBlur", "onFocus", "options", "schema", "uiSchema", "formContext", "registry", "rawErrors"]); // If options.inputType is set use that as the input type


	  if (options.inputType) {
	    inputProps.type = options.inputType;
	  } else if (!inputProps.type) {
	    // If the schema is of type number or integer, set the input type to number
	    if (schema.type === "number") {
	      inputProps.type = "number"; // Setting step to 'any' fixes a bug in Safari where decimals are not
	      // allowed in number inputs

	      inputProps.step = "any";
	    } else if (schema.type === "integer") {
	      inputProps.type = "number"; // Since this is integer, you always want to step up or down in multiples
	      // of 1

	      inputProps.step = "1";
	    } else {
	      inputProps.type = "text";
	    }
	  }

	  if (options.autocomplete) {
	    inputProps.autoComplete = options.autocomplete;
	  } // If multipleOf is defined, use this as the step value. This mainly improves
	  // the experience for keyboard users (who can use the up/down KB arrows).


	  if (schema.multipleOf) {
	    inputProps.step = schema.multipleOf;
	  }

	  if (typeof schema.minimum !== "undefined") {
	    inputProps.min = schema.minimum;
	  }

	  if (typeof schema.maximum !== "undefined") {
	    inputProps.max = schema.maximum;
	  }

	  var _onChange = function _onChange(_ref) {
	    var value = _ref.target.value;
	    return props.onChange(value === "" ? options.emptyValue : value);
	  };

	  return [React.createElement("input", _extends$9({
	    key: inputProps.id,
	    className: "form-control",
	    readOnly: readonly,
	    disabled: disabled,
	    autoFocus: autofocus,
	    value: value == null ? "" : value
	  }, inputProps, {
	    list: schema.examples ? "examples_".concat(inputProps.id) : null,
	    onChange: _onChange,
	    onBlur: onBlur && function (event) {
	      return onBlur(inputProps.id, event.target.value);
	    },
	    onFocus: onFocus && function (event) {
	      return onFocus(inputProps.id, event.target.value);
	    }
	  })), schema.examples ? React.createElement("datalist", {
	    key: "datalist_".concat(inputProps.id),
	    id: "examples_".concat(inputProps.id)
	  }, _toConsumableArray$2(new Set(schema.examples.concat(schema["default"] ? [schema["default"]] : []))).map(function (example) {
	    return React.createElement("option", {
	      key: example,
	      value: example
	    });
	  })) : null];
	}

	BaseInput.defaultProps = {
	  required: false,
	  disabled: false,
	  readonly: false,
	  autofocus: false
	};

	function CheckboxWidget(props) {
	  var schema = props.schema,
	      id = props.id,
	      value = props.value,
	      disabled = props.disabled,
	      readonly = props.readonly,
	      label = props.label,
	      autofocus = props.autofocus,
	      onBlur = props.onBlur,
	      onFocus = props.onFocus,
	      _onChange = props.onChange,
	      DescriptionField = props.DescriptionField; // Because an unchecked checkbox will cause html5 validation to fail, only add
	  // the "required" attribute if the field value must be "true", due to the
	  // "const" or "enum" keywords

	  var required = schemaRequiresTrueValue(schema);
	  return React.createElement("div", {
	    className: "checkbox ".concat(disabled || readonly ? "disabled" : "")
	  }, schema.description && React.createElement(DescriptionField, {
	    description: schema.description
	  }), React.createElement("label", null, React.createElement("input", {
	    type: "checkbox",
	    id: id,
	    checked: typeof value === "undefined" ? false : value,
	    required: required,
	    disabled: disabled || readonly,
	    autoFocus: autofocus,
	    onChange: function onChange(event) {
	      return _onChange(event.target.checked);
	    },
	    onBlur: onBlur && function (event) {
	      return onBlur(id, event.target.checked);
	    },
	    onFocus: onFocus && function (event) {
	      return onFocus(id, event.target.checked);
	    }
	  }), React.createElement("span", null, label)));
	}

	CheckboxWidget.defaultProps = {
	  autofocus: false
	};

	function selectValue(value, selected, all) {
	  var at = all.indexOf(value);
	  var updated = selected.slice(0, at).concat(value, selected.slice(at)); // As inserting values at predefined index positions doesn't work with empty
	  // arrays, we need to reorder the updated selection to match the initial order

	  return updated.sort(function (a, b) {
	    return all.indexOf(a) > all.indexOf(b);
	  });
	}

	function deselectValue(value, selected) {
	  return selected.filter(function (v) {
	    return v !== value;
	  });
	}

	function CheckboxesWidget(props) {
	  var id = props.id,
	      disabled = props.disabled,
	      options = props.options,
	      value = props.value,
	      autofocus = props.autofocus,
	      readonly = props.readonly,
	      _onChange = props.onChange;
	  var enumOptions = options.enumOptions,
	      enumDisabled = options.enumDisabled,
	      inline = options.inline;
	  return React.createElement("div", {
	    className: "checkboxes",
	    id: id
	  }, enumOptions.map(function (option, index) {
	    var checked = value.indexOf(option.value) !== -1;
	    var itemDisabled = enumDisabled && enumDisabled.indexOf(option.value) != -1;
	    var disabledCls = disabled || itemDisabled || readonly ? "disabled" : "";
	    var checkbox = React.createElement("span", null, React.createElement("input", {
	      type: "checkbox",
	      id: "".concat(id, "_").concat(index),
	      checked: checked,
	      disabled: disabled || itemDisabled || readonly,
	      autoFocus: autofocus && index === 0,
	      onChange: function onChange(event) {
	        var all = enumOptions.map(function (_ref) {
	          var value = _ref.value;
	          return value;
	        });

	        if (event.target.checked) {
	          _onChange(selectValue(option.value, value, all));
	        } else {
	          _onChange(deselectValue(option.value, value));
	        }
	      }
	    }), React.createElement("span", null, option.label));
	    return inline ? React.createElement("label", {
	      key: index,
	      className: "checkbox-inline ".concat(disabledCls)
	    }, checkbox) : React.createElement("div", {
	      key: index,
	      className: "checkbox ".concat(disabledCls)
	    }, React.createElement("label", null, checkbox));
	  }));
	}

	CheckboxesWidget.defaultProps = {
	  autofocus: false,
	  options: {
	    inline: false
	  }
	};

	function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }

	function ColorWidget(props) {
	  var disabled = props.disabled,
	      readonly = props.readonly,
	      BaseInput = props.registry.widgets.BaseInput;
	  return React.createElement(BaseInput, _extends$8({
	    type: "color"
	  }, props, {
	    disabled: disabled || readonly
	  }));
	}

	function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

	function DateWidget(props) {
	  var _onChange = props.onChange,
	      BaseInput = props.registry.widgets.BaseInput;
	  return React.createElement(BaseInput, _extends$7({
	    type: "date"
	  }, props, {
	    onChange: function onChange(value) {
	      return _onChange(value || undefined);
	    }
	  }));
	}

	function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

	function DateTimeWidget(props) {
	  var value = props.value,
	      _onChange = props.onChange,
	      BaseInput = props.registry.widgets.BaseInput;
	  return React.createElement(BaseInput, _extends$6({
	    type: "datetime-local"
	  }, props, {
	    value: utcToLocal(value),
	    onChange: function onChange(value) {
	      return _onChange(localToUTC(value));
	    }
	  }));
	}

	function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

	function EmailWidget(props) {
	  var BaseInput = props.registry.widgets.BaseInput;
	  return React.createElement(BaseInput, _extends$5({
	    type: "email"
	  }, props));
	}

	function _typeof$2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$2 = function _typeof(obj) { return typeof obj; }; } else { _typeof$2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$2(obj); }

	function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn$1(self, call) { if (call && (_typeof$2(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$1(self); }

	function _getPrototypeOf$1(o) { _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$1(o); }

	function _assertThisInitialized$1(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$1(subClass, superClass); }

	function _setPrototypeOf$1(o, p) { _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$1(o, p); }

	function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function addNameToDataURL(dataURL, name) {
	  return dataURL.replace(";base64", ";name=".concat(encodeURIComponent(name), ";base64"));
	}

	function processFile(file) {
	  var name = file.name,
	      size = file.size,
	      type = file.type;
	  return new Promise(function (resolve, reject) {
	    var reader = new window.FileReader();
	    reader.onerror = reject;

	    reader.onload = function (event) {
	      resolve({
	        dataURL: addNameToDataURL(event.target.result, name),
	        name: name,
	        size: size,
	        type: type
	      });
	    };

	    reader.readAsDataURL(file);
	  });
	}

	function processFiles(files) {
	  return Promise.all([].map.call(files, processFile));
	}

	function FilesInfo(props) {
	  var filesInfo = props.filesInfo;

	  if (filesInfo.length === 0) {
	    return null;
	  }

	  return React.createElement("ul", {
	    className: "file-info"
	  }, filesInfo.map(function (fileInfo, key) {
	    var name = fileInfo.name,
	        size = fileInfo.size,
	        type = fileInfo.type;
	    return React.createElement("li", {
	      key: key
	    }, React.createElement("strong", null, name), " (", type, ", ", size, " bytes)");
	  }));
	}

	function extractFileInfo(dataURLs) {
	  return dataURLs.filter(function (dataURL) {
	    return typeof dataURL !== "undefined";
	  }).map(function (dataURL) {
	    var _dataURItoBlob = dataURItoBlob(dataURL),
	        blob = _dataURItoBlob.blob,
	        name = _dataURItoBlob.name;

	    return {
	      name: name,
	      size: blob.size,
	      type: blob.type
	    };
	  });
	}

	var FileWidget =
	/*#__PURE__*/
	function (_Component) {
	  _inherits$1(FileWidget, _Component);

	  function FileWidget(props) {
	    var _this;

	    _classCallCheck$1(this, FileWidget);

	    _this = _possibleConstructorReturn$1(this, _getPrototypeOf$1(FileWidget).call(this, props));

	    _defineProperty$3(_assertThisInitialized$1(_this), "onChange", function (event) {
	      var _this$props = _this.props,
	          multiple = _this$props.multiple,
	          onChange = _this$props.onChange;
	      processFiles(event.target.files).then(function (filesInfo) {
	        var state = {
	          values: filesInfo.map(function (fileInfo) {
	            return fileInfo.dataURL;
	          }),
	          filesInfo: filesInfo
	        };

	        _this.setState(state, function () {
	          if (multiple) {
	            onChange(state.values);
	          } else {
	            onChange(state.values[0]);
	          }
	        });
	      });
	    });

	    var value = props.value;
	    var values = Array.isArray(value) ? value : [value];
	    _this.state = {
	      values: values,
	      filesInfo: extractFileInfo(values)
	    };
	    return _this;
	  }

	  _createClass$1(FileWidget, [{
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return shouldRender(this, nextProps, nextState);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;

	      var _this$props2 = this.props,
	          multiple = _this$props2.multiple,
	          id = _this$props2.id,
	          readonly = _this$props2.readonly,
	          disabled = _this$props2.disabled,
	          autofocus = _this$props2.autofocus,
	          options = _this$props2.options;
	      var filesInfo = this.state.filesInfo;
	      return React.createElement("div", null, React.createElement("p", null, React.createElement("input", {
	        ref: function ref(_ref) {
	          return _this2.inputRef = _ref;
	        },
	        id: id,
	        type: "file",
	        disabled: readonly || disabled,
	        onChange: this.onChange,
	        defaultValue: "",
	        autoFocus: autofocus,
	        multiple: multiple,
	        accept: options.accept
	      })), React.createElement(FilesInfo, {
	        filesInfo: filesInfo
	      }));
	    }
	  }]);

	  return FileWidget;
	}(react.exports.Component);

	FileWidget.defaultProps = {
	  autofocus: false
	};

	function HiddenWidget(_ref) {
	  var id = _ref.id,
	      value = _ref.value;
	  return React.createElement("input", {
	    type: "hidden",
	    id: id,
	    value: typeof value === "undefined" ? "" : value
	  });
	}

	function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

	function PasswordWidget(props) {
	  var BaseInput = props.registry.widgets.BaseInput;
	  return React.createElement(BaseInput, _extends$4({
	    type: "password"
	  }, props));
	}

	function RadioWidget(props) {
	  var options = props.options,
	      value = props.value,
	      required = props.required,
	      disabled = props.disabled,
	      readonly = props.readonly,
	      autofocus = props.autofocus,
	      onBlur = props.onBlur,
	      onFocus = props.onFocus,
	      _onChange = props.onChange,
	      id = props.id; // Generating a unique field name to identify this set of radio buttons

	  var name = Math.random().toString();
	  var enumOptions = options.enumOptions,
	      enumDisabled = options.enumDisabled,
	      inline = options.inline; // checked={checked} has been moved above name={name}, As mentioned in #349;
	  // this is a temporary fix for radio button rendering bug in React, facebook/react#7630.

	  return React.createElement("div", {
	    className: "field-radio-group",
	    id: id
	  }, enumOptions.map(function (option, i) {
	    var checked = option.value === value;
	    var itemDisabled = enumDisabled && enumDisabled.indexOf(option.value) != -1;
	    var disabledCls = disabled || itemDisabled || readonly ? "disabled" : "";
	    var radio = React.createElement("span", null, React.createElement("input", {
	      type: "radio",
	      checked: checked,
	      name: name,
	      required: required,
	      value: option.value,
	      disabled: disabled || itemDisabled || readonly,
	      autoFocus: autofocus && i === 0,
	      onChange: function onChange(_) {
	        return _onChange(option.value);
	      },
	      onBlur: onBlur && function (event) {
	        return onBlur(id, event.target.value);
	      },
	      onFocus: onFocus && function (event) {
	        return onFocus(id, event.target.value);
	      }
	    }), React.createElement("span", null, option.label));
	    return inline ? React.createElement("label", {
	      key: i,
	      className: "radio-inline ".concat(disabledCls)
	    }, radio) : React.createElement("div", {
	      key: i,
	      className: "radio ".concat(disabledCls)
	    }, React.createElement("label", null, radio));
	  }));
	}

	RadioWidget.defaultProps = {
	  autofocus: false
	};

	function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

	function RangeWidget(props) {
	  var schema = props.schema,
	      value = props.value,
	      BaseInput = props.registry.widgets.BaseInput;
	  return React.createElement("div", {
	    className: "field-range-wrapper"
	  }, React.createElement(BaseInput, _extends$3({
	    type: "range"
	  }, props, rangeSpec(schema))), React.createElement("span", {
	    className: "range-view"
	  }, value));
	}

	var nums = new Set(["number", "integer"]);
	/**
	 * This is a silly limitation in the DOM where option change event values are
	 * always retrieved as strings.
	 */

	function processValue(schema, value) {
	  // "enum" is a reserved word, so only "type" and "items" can be destructured
	  var type = schema.type,
	      items = schema.items;

	  if (value === "") {
	    return undefined;
	  } else if (type === "array" && items && nums.has(items.type)) {
	    return value.map(asNumber);
	  } else if (type === "boolean") {
	    return value === "true";
	  } else if (type === "number") {
	    return asNumber(value);
	  } // If type is undefined, but an enum is present, try and infer the type from
	  // the enum values


	  if (schema["enum"]) {
	    if (schema["enum"].every(function (x) {
	      return guessType(x) === "number";
	    })) {
	      return asNumber(value);
	    } else if (schema["enum"].every(function (x) {
	      return guessType(x) === "boolean";
	    })) {
	      return value === "true";
	    }
	  }

	  return value;
	}

	function getValue(event, multiple) {
	  if (multiple) {
	    return [].slice.call(event.target.options).filter(function (o) {
	      return o.selected;
	    }).map(function (o) {
	      return o.value;
	    });
	  } else {
	    return event.target.value;
	  }
	}

	function SelectWidget(props) {
	  var schema = props.schema,
	      id = props.id,
	      options = props.options,
	      value = props.value,
	      required = props.required,
	      disabled = props.disabled,
	      readonly = props.readonly,
	      multiple = props.multiple,
	      autofocus = props.autofocus,
	      _onChange = props.onChange,
	      onBlur = props.onBlur,
	      onFocus = props.onFocus,
	      placeholder = props.placeholder;
	  var enumOptions = options.enumOptions,
	      enumDisabled = options.enumDisabled;
	  var emptyValue = multiple ? [] : "";
	  return React.createElement("select", {
	    id: id,
	    multiple: multiple,
	    className: "form-control",
	    value: typeof value === "undefined" ? emptyValue : value,
	    required: required,
	    disabled: disabled || readonly,
	    autoFocus: autofocus,
	    onBlur: onBlur && function (event) {
	      var newValue = getValue(event, multiple);
	      onBlur(id, processValue(schema, newValue));
	    },
	    onFocus: onFocus && function (event) {
	      var newValue = getValue(event, multiple);
	      onFocus(id, processValue(schema, newValue));
	    },
	    onChange: function onChange(event) {
	      var newValue = getValue(event, multiple);

	      _onChange(processValue(schema, newValue));
	    }
	  }, !multiple && schema["default"] === undefined && React.createElement("option", {
	    value: ""
	  }, placeholder), enumOptions.map(function (_ref, i) {
	    var value = _ref.value,
	        label = _ref.label;
	    var disabled = enumDisabled && enumDisabled.indexOf(value) != -1;
	    return React.createElement("option", {
	      key: i,
	      value: value,
	      disabled: disabled
	    }, label);
	  }));
	}

	SelectWidget.defaultProps = {
	  autofocus: false
	};

	function TextareaWidget(props) {
	  var id = props.id,
	      options = props.options,
	      placeholder = props.placeholder,
	      value = props.value,
	      required = props.required,
	      disabled = props.disabled,
	      readonly = props.readonly,
	      autofocus = props.autofocus,
	      onChange = props.onChange,
	      onBlur = props.onBlur,
	      onFocus = props.onFocus;

	  var _onChange = function _onChange(_ref) {
	    var value = _ref.target.value;
	    return onChange(value === "" ? options.emptyValue : value);
	  };

	  return React.createElement("textarea", {
	    id: id,
	    className: "form-control",
	    value: value ? value : "",
	    placeholder: placeholder,
	    required: required,
	    disabled: disabled,
	    readOnly: readonly,
	    autoFocus: autofocus,
	    rows: options.rows,
	    onBlur: onBlur && function (event) {
	      return onBlur(id, event.target.value);
	    },
	    onFocus: onFocus && function (event) {
	      return onFocus(id, event.target.value);
	    },
	    onChange: _onChange
	  });
	}

	TextareaWidget.defaultProps = {
	  autofocus: false,
	  options: {}
	};

	function TextWidget(props) {
	  var BaseInput = props.registry.widgets.BaseInput;
	  return React.createElement(BaseInput, props);
	}

	function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

	function URLWidget(props) {
	  var BaseInput = props.registry.widgets.BaseInput;
	  return React.createElement(BaseInput, _extends$2({
	    type: "url"
	  }, props));
	}

	function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

	function UpDownWidget(props) {
	  var BaseInput = props.registry.widgets.BaseInput;
	  return React.createElement(BaseInput, _extends$1({
	    type: "number"
	  }, props, rangeSpec(props.schema)));
	}

	var widgets = {
	  BaseInput: BaseInput,
	  PasswordWidget: PasswordWidget,
	  RadioWidget: RadioWidget,
	  UpDownWidget: UpDownWidget,
	  RangeWidget: RangeWidget,
	  SelectWidget: SelectWidget,
	  TextWidget: TextWidget,
	  DateWidget: DateWidget,
	  DateTimeWidget: DateTimeWidget,
	  AltDateWidget: AltDateWidget,
	  AltDateTimeWidget: AltDateTimeWidget,
	  EmailWidget: EmailWidget,
	  URLWidget: URLWidget,
	  TextareaWidget: TextareaWidget,
	  HiddenWidget: HiddenWidget,
	  ColorWidget: ColorWidget,
	  FileWidget: FileWidget,
	  CheckboxWidget: CheckboxWidget,
	  CheckboxesWidget: CheckboxesWidget
	};

	var arrayMap = _arrayMap,
	    copyArray = _copyArray,
	    isArray = isArray_1,
	    isSymbol = isSymbol_1,
	    stringToPath = _stringToPath,
	    toKey = _toKey,
	    toString = toString_1;

	/**
	 * Converts `value` to a property path array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Util
	 * @param {*} value The value to convert.
	 * @returns {Array} Returns the new property path array.
	 * @example
	 *
	 * _.toPath('a.b.c');
	 * // => ['a', 'b', 'c']
	 *
	 * _.toPath('a[0].b.c');
	 * // => ['a', '0', 'b', 'c']
	 */
	function toPath(value) {
	  if (isArray(value)) {
	    return arrayMap(value, toKey);
	  }
	  return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
	}

	var toPath_1 = toPath;

	var uri_all = {exports: {}};

	/** @license URI.js v4.4.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */

	(function (module, exports) {
	(function (global, factory) {
		factory(exports) ;
	}(commonjsGlobal, (function (exports) {
	function merge() {
	    for (var _len = arguments.length, sets = Array(_len), _key = 0; _key < _len; _key++) {
	        sets[_key] = arguments[_key];
	    }

	    if (sets.length > 1) {
	        sets[0] = sets[0].slice(0, -1);
	        var xl = sets.length - 1;
	        for (var x = 1; x < xl; ++x) {
	            sets[x] = sets[x].slice(1, -1);
	        }
	        sets[xl] = sets[xl].slice(1);
	        return sets.join('');
	    } else {
	        return sets[0];
	    }
	}
	function subexp(str) {
	    return "(?:" + str + ")";
	}
	function typeOf(o) {
	    return o === undefined ? "undefined" : o === null ? "null" : Object.prototype.toString.call(o).split(" ").pop().split("]").shift().toLowerCase();
	}
	function toUpperCase(str) {
	    return str.toUpperCase();
	}
	function toArray(obj) {
	    return obj !== undefined && obj !== null ? obj instanceof Array ? obj : typeof obj.length !== "number" || obj.split || obj.setInterval || obj.call ? [obj] : Array.prototype.slice.call(obj) : [];
	}
	function assign(target, source) {
	    var obj = target;
	    if (source) {
	        for (var key in source) {
	            obj[key] = source[key];
	        }
	    }
	    return obj;
	}

	function buildExps(isIRI) {
	    var ALPHA$$ = "[A-Za-z]",
	        DIGIT$$ = "[0-9]",
	        HEXDIG$$ = merge(DIGIT$$, "[A-Fa-f]"),
	        PCT_ENCODED$ = subexp(subexp("%[EFef]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%" + HEXDIG$$ + HEXDIG$$)),
	        //expanded
	    GEN_DELIMS$$ = "[\\:\\/\\?\\#\\[\\]\\@]",
	        SUB_DELIMS$$ = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",
	        RESERVED$$ = merge(GEN_DELIMS$$, SUB_DELIMS$$),
	        UCSCHAR$$ = isIRI ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]",
	        //subset, excludes bidi control characters
	    IPRIVATE$$ = isIRI ? "[\\uE000-\\uF8FF]" : "[]",
	        //subset
	    UNRESERVED$$ = merge(ALPHA$$, DIGIT$$, "[\\-\\.\\_\\~]", UCSCHAR$$);
	        subexp(ALPHA$$ + merge(ALPHA$$, DIGIT$$, "[\\+\\-\\.]") + "*");
	        subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:]")) + "*");
	        var DEC_OCTET_RELAXED$ = subexp(subexp("25[0-5]") + "|" + subexp("2[0-4]" + DIGIT$$) + "|" + subexp("1" + DIGIT$$ + DIGIT$$) + "|" + subexp("0?[1-9]" + DIGIT$$) + "|0?0?" + DIGIT$$),
	        //relaxed parsing rules
	    IPV4ADDRESS$ = subexp(DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$),
	        H16$ = subexp(HEXDIG$$ + "{1,4}"),
	        LS32$ = subexp(subexp(H16$ + "\\:" + H16$) + "|" + IPV4ADDRESS$),
	        IPV6ADDRESS1$ = subexp(subexp(H16$ + "\\:") + "{6}" + LS32$),
	        //                           6( h16 ":" ) ls32
	    IPV6ADDRESS2$ = subexp("\\:\\:" + subexp(H16$ + "\\:") + "{5}" + LS32$),
	        //                      "::" 5( h16 ":" ) ls32
	    IPV6ADDRESS3$ = subexp(subexp(H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{4}" + LS32$),
	        //[               h16 ] "::" 4( h16 ":" ) ls32
	    IPV6ADDRESS4$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,1}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{3}" + LS32$),
	        //[ *1( h16 ":" ) h16 ] "::" 3( h16 ":" ) ls32
	    IPV6ADDRESS5$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,2}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{2}" + LS32$),
	        //[ *2( h16 ":" ) h16 ] "::" 2( h16 ":" ) ls32
	    IPV6ADDRESS6$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,3}" + H16$) + "?\\:\\:" + H16$ + "\\:" + LS32$),
	        //[ *3( h16 ":" ) h16 ] "::"    h16 ":"   ls32
	    IPV6ADDRESS7$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,4}" + H16$) + "?\\:\\:" + LS32$),
	        //[ *4( h16 ":" ) h16 ] "::"              ls32
	    IPV6ADDRESS8$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,5}" + H16$) + "?\\:\\:" + H16$),
	        //[ *5( h16 ":" ) h16 ] "::"              h16
	    IPV6ADDRESS9$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,6}" + H16$) + "?\\:\\:"),
	        //[ *6( h16 ":" ) h16 ] "::"
	    IPV6ADDRESS$ = subexp([IPV6ADDRESS1$, IPV6ADDRESS2$, IPV6ADDRESS3$, IPV6ADDRESS4$, IPV6ADDRESS5$, IPV6ADDRESS6$, IPV6ADDRESS7$, IPV6ADDRESS8$, IPV6ADDRESS9$].join("|")),
	        ZONEID$ = subexp(subexp(UNRESERVED$$ + "|" + PCT_ENCODED$) + "+");
	        //RFC 6874, with relaxed parsing rules
	    subexp("[vV]" + HEXDIG$$ + "+\\." + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:]") + "+");
	        //RFC 6874
	    subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$)) + "*");
	        var PCHAR$ = subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@]"));
	        subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\@]")) + "+");
	        subexp(subexp(PCHAR$ + "|" + merge("[\\/\\?]", IPRIVATE$$)) + "*");
	    return {
	        NOT_SCHEME: new RegExp(merge("[^]", ALPHA$$, DIGIT$$, "[\\+\\-\\.]"), "g"),
	        NOT_USERINFO: new RegExp(merge("[^\\%\\:]", UNRESERVED$$, SUB_DELIMS$$), "g"),
	        NOT_HOST: new RegExp(merge("[^\\%\\[\\]\\:]", UNRESERVED$$, SUB_DELIMS$$), "g"),
	        NOT_PATH: new RegExp(merge("[^\\%\\/\\:\\@]", UNRESERVED$$, SUB_DELIMS$$), "g"),
	        NOT_PATH_NOSCHEME: new RegExp(merge("[^\\%\\/\\@]", UNRESERVED$$, SUB_DELIMS$$), "g"),
	        NOT_QUERY: new RegExp(merge("[^\\%]", UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@\\/\\?]", IPRIVATE$$), "g"),
	        NOT_FRAGMENT: new RegExp(merge("[^\\%]", UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@\\/\\?]"), "g"),
	        ESCAPE: new RegExp(merge("[^]", UNRESERVED$$, SUB_DELIMS$$), "g"),
	        UNRESERVED: new RegExp(UNRESERVED$$, "g"),
	        OTHER_CHARS: new RegExp(merge("[^\\%]", UNRESERVED$$, RESERVED$$), "g"),
	        PCT_ENCODED: new RegExp(PCT_ENCODED$, "g"),
	        IPV4ADDRESS: new RegExp("^(" + IPV4ADDRESS$ + ")$"),
	        IPV6ADDRESS: new RegExp("^\\[?(" + IPV6ADDRESS$ + ")" + subexp(subexp("\\%25|\\%(?!" + HEXDIG$$ + "{2})") + "(" + ZONEID$ + ")") + "?\\]?$") //RFC 6874, with relaxed parsing rules
	    };
	}
	var URI_PROTOCOL = buildExps(false);

	var IRI_PROTOCOL = buildExps(true);

	var slicedToArray = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;

	    try {
	      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);

	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }

	    return _arr;
	  }

	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if (Symbol.iterator in Object(arr)) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();













	var toConsumableArray = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

	    return arr2;
	  } else {
	    return Array.from(arr);
	  }
	};

	/** Highest positive signed 32-bit float value */

	var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	var base = 36;
	var tMin = 1;
	var tMax = 26;
	var skew = 38;
	var damp = 700;
	var initialBias = 72;
	var initialN = 128; // 0x80
	var delimiter = '-'; // '\x2D'

	/** Regular expressions */
	var regexPunycode = /^xn--/;
	var regexNonASCII = /[^\0-\x7E]/; // non-ASCII chars
	var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g; // RFC 3490 separators

	/** Error messages */
	var errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	};

	/** Convenience shortcuts */
	var baseMinusTMin = base - tMin;
	var floor = Math.floor;
	var stringFromCharCode = String.fromCharCode;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error$1(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var result = [];
		var length = array.length;
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [];
		var counter = 0;
		var length = string.length;
		while (counter < length) {
			var value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// It's a high surrogate, and there is a next character.
				var extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) {
					// Low surrogate.
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// It's an unmatched surrogate; only append this code unit, in case the
					// next code unit is the high surrogate of a surrogate pair.
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	var ucs2encode = function ucs2encode(array) {
		return String.fromCodePoint.apply(String, toConsumableArray(array));
	};

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	var basicToDigit = function basicToDigit(codePoint) {
		if (codePoint - 0x30 < 0x0A) {
			return codePoint - 0x16;
		}
		if (codePoint - 0x41 < 0x1A) {
			return codePoint - 0x41;
		}
		if (codePoint - 0x61 < 0x1A) {
			return codePoint - 0x61;
		}
		return base;
	};

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	var digitToBasic = function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	};

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	var adapt = function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (; /* no initialization */delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	};

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	var decode = function decode(input) {
		// Don't use UCS-2.
		var output = [];
		var inputLength = input.length;
		var i = 0;
		var n = initialN;
		var bias = initialBias;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		var basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (var j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error$1('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (var index = basic > 0 ? basic + 1 : 0; index < inputLength;) /* no final expression */{

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			var oldi = i;
			for (var w = 1, k = base;; /* no condition */k += base) {

				if (index >= inputLength) {
					error$1('invalid-input');
				}

				var digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error$1('overflow');
				}

				i += digit * w;
				var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

				if (digit < t) {
					break;
				}

				var baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error$1('overflow');
				}

				w *= baseMinusT;
			}

			var out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error$1('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output.
			output.splice(i++, 0, n);
		}

		return String.fromCodePoint.apply(String, output);
	};

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	var encode = function encode(input) {
		var output = [];

		// Convert the input in UCS-2 to an array of Unicode code points.
		input = ucs2decode(input);

		// Cache the length.
		var inputLength = input.length;

		// Initialize the state.
		var n = initialN;
		var delta = 0;
		var bias = initialBias;

		// Handle the basic code points.
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = input[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var _currentValue2 = _step.value;

				if (_currentValue2 < 0x80) {
					output.push(stringFromCharCode(_currentValue2));
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		var basicLength = output.length;
		var handledCPCount = basicLength;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string with a delimiter unless it's empty.
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			var m = maxInt;
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = input[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var currentValue = _step2.value;

					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}

				// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
				// but guard against overflow.
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			var handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error$1('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = input[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var _currentValue = _step3.value;

					if (_currentValue < n && ++delta > maxInt) {
						error$1('overflow');
					}
					if (_currentValue == n) {
						// Represent delta as a generalized variable-length integer.
						var q = delta;
						for (var k = base;; /* no condition */k += base) {
							var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
							if (q < t) {
								break;
							}
							var qMinusT = q - t;
							var baseMinusT = base - t;
							output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
							q = floor(qMinusT / baseMinusT);
						}

						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3.return) {
						_iterator3.return();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}

			++delta;
			++n;
		}
		return output.join('');
	};

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	var toUnicode = function toUnicode(input) {
		return mapDomain(input, function (string) {
			return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
		});
	};

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	var toASCII = function toASCII(input) {
		return mapDomain(input, function (string) {
			return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
		});
	};

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	var punycode = {
		/**
	  * A string representing the current Punycode.js version number.
	  * @memberOf punycode
	  * @type String
	  */
		'version': '2.1.0',
		/**
	  * An object of methods to convert from JavaScript's internal character
	  * representation (UCS-2) to Unicode code points, and back.
	  * @see <https://mathiasbynens.be/notes/javascript-encoding>
	  * @memberOf punycode
	  * @type Object
	  */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/**
	 * URI.js
	 *
	 * @fileoverview An RFC 3986 compliant, scheme extendable URI parsing/validating/resolving library for JavaScript.
	 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
	 * @see http://github.com/garycourt/uri-js
	 */
	/**
	 * Copyright 2011 Gary Court. All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without modification, are
	 * permitted provided that the following conditions are met:
	 *
	 *    1. Redistributions of source code must retain the above copyright notice, this list of
	 *       conditions and the following disclaimer.
	 *
	 *    2. Redistributions in binary form must reproduce the above copyright notice, this list
	 *       of conditions and the following disclaimer in the documentation and/or other materials
	 *       provided with the distribution.
	 *
	 * THIS SOFTWARE IS PROVIDED BY GARY COURT ``AS IS'' AND ANY EXPRESS OR IMPLIED
	 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
	 * FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL GARY COURT OR
	 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
	 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
	 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
	 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
	 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
	 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 *
	 * The views and conclusions contained in the software and documentation are those of the
	 * authors and should not be interpreted as representing official policies, either expressed
	 * or implied, of Gary Court.
	 */
	var SCHEMES = {};
	function pctEncChar(chr) {
	    var c = chr.charCodeAt(0);
	    var e = void 0;
	    if (c < 16) e = "%0" + c.toString(16).toUpperCase();else if (c < 128) e = "%" + c.toString(16).toUpperCase();else if (c < 2048) e = "%" + (c >> 6 | 192).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();else e = "%" + (c >> 12 | 224).toString(16).toUpperCase() + "%" + (c >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();
	    return e;
	}
	function pctDecChars(str) {
	    var newStr = "";
	    var i = 0;
	    var il = str.length;
	    while (i < il) {
	        var c = parseInt(str.substr(i + 1, 2), 16);
	        if (c < 128) {
	            newStr += String.fromCharCode(c);
	            i += 3;
	        } else if (c >= 194 && c < 224) {
	            if (il - i >= 6) {
	                var c2 = parseInt(str.substr(i + 4, 2), 16);
	                newStr += String.fromCharCode((c & 31) << 6 | c2 & 63);
	            } else {
	                newStr += str.substr(i, 6);
	            }
	            i += 6;
	        } else if (c >= 224) {
	            if (il - i >= 9) {
	                var _c = parseInt(str.substr(i + 4, 2), 16);
	                var c3 = parseInt(str.substr(i + 7, 2), 16);
	                newStr += String.fromCharCode((c & 15) << 12 | (_c & 63) << 6 | c3 & 63);
	            } else {
	                newStr += str.substr(i, 9);
	            }
	            i += 9;
	        } else {
	            newStr += str.substr(i, 3);
	            i += 3;
	        }
	    }
	    return newStr;
	}
	function _normalizeComponentEncoding(components, protocol) {
	    function decodeUnreserved(str) {
	        var decStr = pctDecChars(str);
	        return !decStr.match(protocol.UNRESERVED) ? str : decStr;
	    }
	    if (components.scheme) components.scheme = String(components.scheme).replace(protocol.PCT_ENCODED, decodeUnreserved).toLowerCase().replace(protocol.NOT_SCHEME, "");
	    if (components.userinfo !== undefined) components.userinfo = String(components.userinfo).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_USERINFO, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
	    if (components.host !== undefined) components.host = String(components.host).replace(protocol.PCT_ENCODED, decodeUnreserved).toLowerCase().replace(protocol.NOT_HOST, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
	    if (components.path !== undefined) components.path = String(components.path).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(components.scheme ? protocol.NOT_PATH : protocol.NOT_PATH_NOSCHEME, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
	    if (components.query !== undefined) components.query = String(components.query).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_QUERY, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
	    if (components.fragment !== undefined) components.fragment = String(components.fragment).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_FRAGMENT, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
	    return components;
	}

	function _stripLeadingZeros(str) {
	    return str.replace(/^0*(.*)/, "$1") || "0";
	}
	function _normalizeIPv4(host, protocol) {
	    var matches = host.match(protocol.IPV4ADDRESS) || [];

	    var _matches = slicedToArray(matches, 2),
	        address = _matches[1];

	    if (address) {
	        return address.split(".").map(_stripLeadingZeros).join(".");
	    } else {
	        return host;
	    }
	}
	function _normalizeIPv6(host, protocol) {
	    var matches = host.match(protocol.IPV6ADDRESS) || [];

	    var _matches2 = slicedToArray(matches, 3),
	        address = _matches2[1],
	        zone = _matches2[2];

	    if (address) {
	        var _address$toLowerCase$ = address.toLowerCase().split('::').reverse(),
	            _address$toLowerCase$2 = slicedToArray(_address$toLowerCase$, 2),
	            last = _address$toLowerCase$2[0],
	            first = _address$toLowerCase$2[1];

	        var firstFields = first ? first.split(":").map(_stripLeadingZeros) : [];
	        var lastFields = last.split(":").map(_stripLeadingZeros);
	        var isLastFieldIPv4Address = protocol.IPV4ADDRESS.test(lastFields[lastFields.length - 1]);
	        var fieldCount = isLastFieldIPv4Address ? 7 : 8;
	        var lastFieldsStart = lastFields.length - fieldCount;
	        var fields = Array(fieldCount);
	        for (var x = 0; x < fieldCount; ++x) {
	            fields[x] = firstFields[x] || lastFields[lastFieldsStart + x] || '';
	        }
	        if (isLastFieldIPv4Address) {
	            fields[fieldCount - 1] = _normalizeIPv4(fields[fieldCount - 1], protocol);
	        }
	        var allZeroFields = fields.reduce(function (acc, field, index) {
	            if (!field || field === "0") {
	                var lastLongest = acc[acc.length - 1];
	                if (lastLongest && lastLongest.index + lastLongest.length === index) {
	                    lastLongest.length++;
	                } else {
	                    acc.push({ index: index, length: 1 });
	                }
	            }
	            return acc;
	        }, []);
	        var longestZeroFields = allZeroFields.sort(function (a, b) {
	            return b.length - a.length;
	        })[0];
	        var newHost = void 0;
	        if (longestZeroFields && longestZeroFields.length > 1) {
	            var newFirst = fields.slice(0, longestZeroFields.index);
	            var newLast = fields.slice(longestZeroFields.index + longestZeroFields.length);
	            newHost = newFirst.join(":") + "::" + newLast.join(":");
	        } else {
	            newHost = fields.join(":");
	        }
	        if (zone) {
	            newHost += "%" + zone;
	        }
	        return newHost;
	    } else {
	        return host;
	    }
	}
	var URI_PARSE = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i;
	var NO_MATCH_IS_UNDEFINED = "".match(/(){0}/)[1] === undefined;
	function parse(uriString) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    var components = {};
	    var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
	    if (options.reference === "suffix") uriString = (options.scheme ? options.scheme + ":" : "") + "//" + uriString;
	    var matches = uriString.match(URI_PARSE);
	    if (matches) {
	        if (NO_MATCH_IS_UNDEFINED) {
	            //store each component
	            components.scheme = matches[1];
	            components.userinfo = matches[3];
	            components.host = matches[4];
	            components.port = parseInt(matches[5], 10);
	            components.path = matches[6] || "";
	            components.query = matches[7];
	            components.fragment = matches[8];
	            //fix port number
	            if (isNaN(components.port)) {
	                components.port = matches[5];
	            }
	        } else {
	            //IE FIX for improper RegExp matching
	            //store each component
	            components.scheme = matches[1] || undefined;
	            components.userinfo = uriString.indexOf("@") !== -1 ? matches[3] : undefined;
	            components.host = uriString.indexOf("//") !== -1 ? matches[4] : undefined;
	            components.port = parseInt(matches[5], 10);
	            components.path = matches[6] || "";
	            components.query = uriString.indexOf("?") !== -1 ? matches[7] : undefined;
	            components.fragment = uriString.indexOf("#") !== -1 ? matches[8] : undefined;
	            //fix port number
	            if (isNaN(components.port)) {
	                components.port = uriString.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? matches[4] : undefined;
	            }
	        }
	        if (components.host) {
	            //normalize IP hosts
	            components.host = _normalizeIPv6(_normalizeIPv4(components.host, protocol), protocol);
	        }
	        //determine reference type
	        if (components.scheme === undefined && components.userinfo === undefined && components.host === undefined && components.port === undefined && !components.path && components.query === undefined) {
	            components.reference = "same-document";
	        } else if (components.scheme === undefined) {
	            components.reference = "relative";
	        } else if (components.fragment === undefined) {
	            components.reference = "absolute";
	        } else {
	            components.reference = "uri";
	        }
	        //check for reference errors
	        if (options.reference && options.reference !== "suffix" && options.reference !== components.reference) {
	            components.error = components.error || "URI is not a " + options.reference + " reference.";
	        }
	        //find scheme handler
	        var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()];
	        //check if scheme can't handle IRIs
	        if (!options.unicodeSupport && (!schemeHandler || !schemeHandler.unicodeSupport)) {
	            //if host component is a domain name
	            if (components.host && (options.domainHost || schemeHandler && schemeHandler.domainHost)) {
	                //convert Unicode IDN -> ASCII IDN
	                try {
	                    components.host = punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase());
	                } catch (e) {
	                    components.error = components.error || "Host's domain name can not be converted to ASCII via punycode: " + e;
	                }
	            }
	            //convert IRI -> URI
	            _normalizeComponentEncoding(components, URI_PROTOCOL);
	        } else {
	            //normalize encodings
	            _normalizeComponentEncoding(components, protocol);
	        }
	        //perform scheme specific parsing
	        if (schemeHandler && schemeHandler.parse) {
	            schemeHandler.parse(components, options);
	        }
	    } else {
	        components.error = components.error || "URI can not be parsed.";
	    }
	    return components;
	}

	function _recomposeAuthority(components, options) {
	    var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
	    var uriTokens = [];
	    if (components.userinfo !== undefined) {
	        uriTokens.push(components.userinfo);
	        uriTokens.push("@");
	    }
	    if (components.host !== undefined) {
	        //normalize IP hosts, add brackets and escape zone separator for IPv6
	        uriTokens.push(_normalizeIPv6(_normalizeIPv4(String(components.host), protocol), protocol).replace(protocol.IPV6ADDRESS, function (_, $1, $2) {
	            return "[" + $1 + ($2 ? "%25" + $2 : "") + "]";
	        }));
	    }
	    if (typeof components.port === "number" || typeof components.port === "string") {
	        uriTokens.push(":");
	        uriTokens.push(String(components.port));
	    }
	    return uriTokens.length ? uriTokens.join("") : undefined;
	}

	var RDS1 = /^\.\.?\//;
	var RDS2 = /^\/\.(\/|$)/;
	var RDS3 = /^\/\.\.(\/|$)/;
	var RDS5 = /^\/?(?:.|\n)*?(?=\/|$)/;
	function removeDotSegments(input) {
	    var output = [];
	    while (input.length) {
	        if (input.match(RDS1)) {
	            input = input.replace(RDS1, "");
	        } else if (input.match(RDS2)) {
	            input = input.replace(RDS2, "/");
	        } else if (input.match(RDS3)) {
	            input = input.replace(RDS3, "/");
	            output.pop();
	        } else if (input === "." || input === "..") {
	            input = "";
	        } else {
	            var im = input.match(RDS5);
	            if (im) {
	                var s = im[0];
	                input = input.slice(s.length);
	                output.push(s);
	            } else {
	                throw new Error("Unexpected dot segment condition");
	            }
	        }
	    }
	    return output.join("");
	}

	function serialize(components) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    var protocol = options.iri ? IRI_PROTOCOL : URI_PROTOCOL;
	    var uriTokens = [];
	    //find scheme handler
	    var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()];
	    //perform scheme specific serialization
	    if (schemeHandler && schemeHandler.serialize) schemeHandler.serialize(components, options);
	    if (components.host) {
	        //if host component is an IPv6 address
	        if (protocol.IPV6ADDRESS.test(components.host)) ;
	        //TODO: normalize IPv6 address as per RFC 5952

	        //if host component is a domain name
	        else if (options.domainHost || schemeHandler && schemeHandler.domainHost) {
	                //convert IDN via punycode
	                try {
	                    components.host = !options.iri ? punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase()) : punycode.toUnicode(components.host);
	                } catch (e) {
	                    components.error = components.error || "Host's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
	                }
	            }
	    }
	    //normalize encoding
	    _normalizeComponentEncoding(components, protocol);
	    if (options.reference !== "suffix" && components.scheme) {
	        uriTokens.push(components.scheme);
	        uriTokens.push(":");
	    }
	    var authority = _recomposeAuthority(components, options);
	    if (authority !== undefined) {
	        if (options.reference !== "suffix") {
	            uriTokens.push("//");
	        }
	        uriTokens.push(authority);
	        if (components.path && components.path.charAt(0) !== "/") {
	            uriTokens.push("/");
	        }
	    }
	    if (components.path !== undefined) {
	        var s = components.path;
	        if (!options.absolutePath && (!schemeHandler || !schemeHandler.absolutePath)) {
	            s = removeDotSegments(s);
	        }
	        if (authority === undefined) {
	            s = s.replace(/^\/\//, "/%2F"); //don't allow the path to start with "//"
	        }
	        uriTokens.push(s);
	    }
	    if (components.query !== undefined) {
	        uriTokens.push("?");
	        uriTokens.push(components.query);
	    }
	    if (components.fragment !== undefined) {
	        uriTokens.push("#");
	        uriTokens.push(components.fragment);
	    }
	    return uriTokens.join(""); //merge tokens into a string
	}

	function resolveComponents(base, relative) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    var skipNormalization = arguments[3];

	    var target = {};
	    if (!skipNormalization) {
	        base = parse(serialize(base, options), options); //normalize base components
	        relative = parse(serialize(relative, options), options); //normalize relative components
	    }
	    options = options || {};
	    if (!options.tolerant && relative.scheme) {
	        target.scheme = relative.scheme;
	        //target.authority = relative.authority;
	        target.userinfo = relative.userinfo;
	        target.host = relative.host;
	        target.port = relative.port;
	        target.path = removeDotSegments(relative.path || "");
	        target.query = relative.query;
	    } else {
	        if (relative.userinfo !== undefined || relative.host !== undefined || relative.port !== undefined) {
	            //target.authority = relative.authority;
	            target.userinfo = relative.userinfo;
	            target.host = relative.host;
	            target.port = relative.port;
	            target.path = removeDotSegments(relative.path || "");
	            target.query = relative.query;
	        } else {
	            if (!relative.path) {
	                target.path = base.path;
	                if (relative.query !== undefined) {
	                    target.query = relative.query;
	                } else {
	                    target.query = base.query;
	                }
	            } else {
	                if (relative.path.charAt(0) === "/") {
	                    target.path = removeDotSegments(relative.path);
	                } else {
	                    if ((base.userinfo !== undefined || base.host !== undefined || base.port !== undefined) && !base.path) {
	                        target.path = "/" + relative.path;
	                    } else if (!base.path) {
	                        target.path = relative.path;
	                    } else {
	                        target.path = base.path.slice(0, base.path.lastIndexOf("/") + 1) + relative.path;
	                    }
	                    target.path = removeDotSegments(target.path);
	                }
	                target.query = relative.query;
	            }
	            //target.authority = base.authority;
	            target.userinfo = base.userinfo;
	            target.host = base.host;
	            target.port = base.port;
	        }
	        target.scheme = base.scheme;
	    }
	    target.fragment = relative.fragment;
	    return target;
	}

	function resolve(baseURI, relativeURI, options) {
	    var schemelessOptions = assign({ scheme: 'null' }, options);
	    return serialize(resolveComponents(parse(baseURI, schemelessOptions), parse(relativeURI, schemelessOptions), schemelessOptions, true), schemelessOptions);
	}

	function normalize(uri, options) {
	    if (typeof uri === "string") {
	        uri = serialize(parse(uri, options), options);
	    } else if (typeOf(uri) === "object") {
	        uri = parse(serialize(uri, options), options);
	    }
	    return uri;
	}

	function equal(uriA, uriB, options) {
	    if (typeof uriA === "string") {
	        uriA = serialize(parse(uriA, options), options);
	    } else if (typeOf(uriA) === "object") {
	        uriA = serialize(uriA, options);
	    }
	    if (typeof uriB === "string") {
	        uriB = serialize(parse(uriB, options), options);
	    } else if (typeOf(uriB) === "object") {
	        uriB = serialize(uriB, options);
	    }
	    return uriA === uriB;
	}

	function escapeComponent(str, options) {
	    return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.ESCAPE : IRI_PROTOCOL.ESCAPE, pctEncChar);
	}

	function unescapeComponent(str, options) {
	    return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.PCT_ENCODED : IRI_PROTOCOL.PCT_ENCODED, pctDecChars);
	}

	var handler = {
	    scheme: "http",
	    domainHost: true,
	    parse: function parse(components, options) {
	        //report missing host
	        if (!components.host) {
	            components.error = components.error || "HTTP URIs must have a host.";
	        }
	        return components;
	    },
	    serialize: function serialize(components, options) {
	        var secure = String(components.scheme).toLowerCase() === "https";
	        //normalize the default port
	        if (components.port === (secure ? 443 : 80) || components.port === "") {
	            components.port = undefined;
	        }
	        //normalize the empty path
	        if (!components.path) {
	            components.path = "/";
	        }
	        //NOTE: We do not parse query strings for HTTP URIs
	        //as WWW Form Url Encoded query strings are part of the HTML4+ spec,
	        //and not the HTTP spec.
	        return components;
	    }
	};

	var handler$1 = {
	    scheme: "https",
	    domainHost: handler.domainHost,
	    parse: handler.parse,
	    serialize: handler.serialize
	};

	function isSecure(wsComponents) {
	    return typeof wsComponents.secure === 'boolean' ? wsComponents.secure : String(wsComponents.scheme).toLowerCase() === "wss";
	}
	//RFC 6455
	var handler$2 = {
	    scheme: "ws",
	    domainHost: true,
	    parse: function parse(components, options) {
	        var wsComponents = components;
	        //indicate if the secure flag is set
	        wsComponents.secure = isSecure(wsComponents);
	        //construct resouce name
	        wsComponents.resourceName = (wsComponents.path || '/') + (wsComponents.query ? '?' + wsComponents.query : '');
	        wsComponents.path = undefined;
	        wsComponents.query = undefined;
	        return wsComponents;
	    },
	    serialize: function serialize(wsComponents, options) {
	        //normalize the default port
	        if (wsComponents.port === (isSecure(wsComponents) ? 443 : 80) || wsComponents.port === "") {
	            wsComponents.port = undefined;
	        }
	        //ensure scheme matches secure flag
	        if (typeof wsComponents.secure === 'boolean') {
	            wsComponents.scheme = wsComponents.secure ? 'wss' : 'ws';
	            wsComponents.secure = undefined;
	        }
	        //reconstruct path from resource name
	        if (wsComponents.resourceName) {
	            var _wsComponents$resourc = wsComponents.resourceName.split('?'),
	                _wsComponents$resourc2 = slicedToArray(_wsComponents$resourc, 2),
	                path = _wsComponents$resourc2[0],
	                query = _wsComponents$resourc2[1];

	            wsComponents.path = path && path !== '/' ? path : undefined;
	            wsComponents.query = query;
	            wsComponents.resourceName = undefined;
	        }
	        //forbid fragment component
	        wsComponents.fragment = undefined;
	        return wsComponents;
	    }
	};

	var handler$3 = {
	    scheme: "wss",
	    domainHost: handler$2.domainHost,
	    parse: handler$2.parse,
	    serialize: handler$2.serialize
	};

	var O = {};
	//RFC 3986
	var UNRESERVED$$ = "[A-Za-z0-9\\-\\.\\_\\~" + ("\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF" ) + "]";
	var HEXDIG$$ = "[0-9A-Fa-f]"; //case-insensitive
	var PCT_ENCODED$ = subexp(subexp("%[EFef]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%" + HEXDIG$$ + HEXDIG$$)); //expanded
	//RFC 5322, except these symbols as per RFC 6068: @ : / ? # [ ] & ; =
	//const ATEXT$$ = "[A-Za-z0-9\\!\\#\\$\\%\\&\\'\\*\\+\\-\\/\\=\\?\\^\\_\\`\\{\\|\\}\\~]";
	//const WSP$$ = "[\\x20\\x09]";
	//const OBS_QTEXT$$ = "[\\x01-\\x08\\x0B\\x0C\\x0E-\\x1F\\x7F]";  //(%d1-8 / %d11-12 / %d14-31 / %d127)
	//const QTEXT$$ = merge("[\\x21\\x23-\\x5B\\x5D-\\x7E]", OBS_QTEXT$$);  //%d33 / %d35-91 / %d93-126 / obs-qtext
	//const VCHAR$$ = "[\\x21-\\x7E]";
	//const WSP$$ = "[\\x20\\x09]";
	//const OBS_QP$ = subexp("\\\\" + merge("[\\x00\\x0D\\x0A]", OBS_QTEXT$$));  //%d0 / CR / LF / obs-qtext
	//const FWS$ = subexp(subexp(WSP$$ + "*" + "\\x0D\\x0A") + "?" + WSP$$ + "+");
	//const QUOTED_PAIR$ = subexp(subexp("\\\\" + subexp(VCHAR$$ + "|" + WSP$$)) + "|" + OBS_QP$);
	//const QUOTED_STRING$ = subexp('\\"' + subexp(FWS$ + "?" + QCONTENT$) + "*" + FWS$ + "?" + '\\"');
	var ATEXT$$ = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]";
	var QTEXT$$ = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]";
	var VCHAR$$ = merge(QTEXT$$, "[\\\"\\\\]");
	var SOME_DELIMS$$ = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]";
	var UNRESERVED = new RegExp(UNRESERVED$$, "g");
	var PCT_ENCODED = new RegExp(PCT_ENCODED$, "g");
	var NOT_LOCAL_PART = new RegExp(merge("[^]", ATEXT$$, "[\\.]", '[\\"]', VCHAR$$), "g");
	var NOT_HFNAME = new RegExp(merge("[^]", UNRESERVED$$, SOME_DELIMS$$), "g");
	var NOT_HFVALUE = NOT_HFNAME;
	function decodeUnreserved(str) {
	    var decStr = pctDecChars(str);
	    return !decStr.match(UNRESERVED) ? str : decStr;
	}
	var handler$4 = {
	    scheme: "mailto",
	    parse: function parse$$1(components, options) {
	        var mailtoComponents = components;
	        var to = mailtoComponents.to = mailtoComponents.path ? mailtoComponents.path.split(",") : [];
	        mailtoComponents.path = undefined;
	        if (mailtoComponents.query) {
	            var unknownHeaders = false;
	            var headers = {};
	            var hfields = mailtoComponents.query.split("&");
	            for (var x = 0, xl = hfields.length; x < xl; ++x) {
	                var hfield = hfields[x].split("=");
	                switch (hfield[0]) {
	                    case "to":
	                        var toAddrs = hfield[1].split(",");
	                        for (var _x = 0, _xl = toAddrs.length; _x < _xl; ++_x) {
	                            to.push(toAddrs[_x]);
	                        }
	                        break;
	                    case "subject":
	                        mailtoComponents.subject = unescapeComponent(hfield[1], options);
	                        break;
	                    case "body":
	                        mailtoComponents.body = unescapeComponent(hfield[1], options);
	                        break;
	                    default:
	                        unknownHeaders = true;
	                        headers[unescapeComponent(hfield[0], options)] = unescapeComponent(hfield[1], options);
	                        break;
	                }
	            }
	            if (unknownHeaders) mailtoComponents.headers = headers;
	        }
	        mailtoComponents.query = undefined;
	        for (var _x2 = 0, _xl2 = to.length; _x2 < _xl2; ++_x2) {
	            var addr = to[_x2].split("@");
	            addr[0] = unescapeComponent(addr[0]);
	            if (!options.unicodeSupport) {
	                //convert Unicode IDN -> ASCII IDN
	                try {
	                    addr[1] = punycode.toASCII(unescapeComponent(addr[1], options).toLowerCase());
	                } catch (e) {
	                    mailtoComponents.error = mailtoComponents.error || "Email address's domain name can not be converted to ASCII via punycode: " + e;
	                }
	            } else {
	                addr[1] = unescapeComponent(addr[1], options).toLowerCase();
	            }
	            to[_x2] = addr.join("@");
	        }
	        return mailtoComponents;
	    },
	    serialize: function serialize$$1(mailtoComponents, options) {
	        var components = mailtoComponents;
	        var to = toArray(mailtoComponents.to);
	        if (to) {
	            for (var x = 0, xl = to.length; x < xl; ++x) {
	                var toAddr = String(to[x]);
	                var atIdx = toAddr.lastIndexOf("@");
	                var localPart = toAddr.slice(0, atIdx).replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_LOCAL_PART, pctEncChar);
	                var domain = toAddr.slice(atIdx + 1);
	                //convert IDN via punycode
	                try {
	                    domain = !options.iri ? punycode.toASCII(unescapeComponent(domain, options).toLowerCase()) : punycode.toUnicode(domain);
	                } catch (e) {
	                    components.error = components.error || "Email address's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
	                }
	                to[x] = localPart + "@" + domain;
	            }
	            components.path = to.join(",");
	        }
	        var headers = mailtoComponents.headers = mailtoComponents.headers || {};
	        if (mailtoComponents.subject) headers["subject"] = mailtoComponents.subject;
	        if (mailtoComponents.body) headers["body"] = mailtoComponents.body;
	        var fields = [];
	        for (var name in headers) {
	            if (headers[name] !== O[name]) {
	                fields.push(name.replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFNAME, pctEncChar) + "=" + headers[name].replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFVALUE, pctEncChar));
	            }
	        }
	        if (fields.length) {
	            components.query = fields.join("&");
	        }
	        return components;
	    }
	};

	var URN_PARSE = /^([^\:]+)\:(.*)/;
	//RFC 2141
	var handler$5 = {
	    scheme: "urn",
	    parse: function parse$$1(components, options) {
	        var matches = components.path && components.path.match(URN_PARSE);
	        var urnComponents = components;
	        if (matches) {
	            var scheme = options.scheme || urnComponents.scheme || "urn";
	            var nid = matches[1].toLowerCase();
	            var nss = matches[2];
	            var urnScheme = scheme + ":" + (options.nid || nid);
	            var schemeHandler = SCHEMES[urnScheme];
	            urnComponents.nid = nid;
	            urnComponents.nss = nss;
	            urnComponents.path = undefined;
	            if (schemeHandler) {
	                urnComponents = schemeHandler.parse(urnComponents, options);
	            }
	        } else {
	            urnComponents.error = urnComponents.error || "URN can not be parsed.";
	        }
	        return urnComponents;
	    },
	    serialize: function serialize$$1(urnComponents, options) {
	        var scheme = options.scheme || urnComponents.scheme || "urn";
	        var nid = urnComponents.nid;
	        var urnScheme = scheme + ":" + (options.nid || nid);
	        var schemeHandler = SCHEMES[urnScheme];
	        if (schemeHandler) {
	            urnComponents = schemeHandler.serialize(urnComponents, options);
	        }
	        var uriComponents = urnComponents;
	        var nss = urnComponents.nss;
	        uriComponents.path = (nid || options.nid) + ":" + nss;
	        return uriComponents;
	    }
	};

	var UUID = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/;
	//RFC 4122
	var handler$6 = {
	    scheme: "urn:uuid",
	    parse: function parse(urnComponents, options) {
	        var uuidComponents = urnComponents;
	        uuidComponents.uuid = uuidComponents.nss;
	        uuidComponents.nss = undefined;
	        if (!options.tolerant && (!uuidComponents.uuid || !uuidComponents.uuid.match(UUID))) {
	            uuidComponents.error = uuidComponents.error || "UUID is not valid.";
	        }
	        return uuidComponents;
	    },
	    serialize: function serialize(uuidComponents, options) {
	        var urnComponents = uuidComponents;
	        //normalize UUID
	        urnComponents.nss = (uuidComponents.uuid || "").toLowerCase();
	        return urnComponents;
	    }
	};

	SCHEMES[handler.scheme] = handler;
	SCHEMES[handler$1.scheme] = handler$1;
	SCHEMES[handler$2.scheme] = handler$2;
	SCHEMES[handler$3.scheme] = handler$3;
	SCHEMES[handler$4.scheme] = handler$4;
	SCHEMES[handler$5.scheme] = handler$5;
	SCHEMES[handler$6.scheme] = handler$6;

	exports.SCHEMES = SCHEMES;
	exports.pctEncChar = pctEncChar;
	exports.pctDecChars = pctDecChars;
	exports.parse = parse;
	exports.removeDotSegments = removeDotSegments;
	exports.serialize = serialize;
	exports.resolveComponents = resolveComponents;
	exports.resolve = resolve;
	exports.normalize = normalize;
	exports.equal = equal;
	exports.escapeComponent = escapeComponent;
	exports.unescapeComponent = unescapeComponent;

	Object.defineProperty(exports, '__esModule', { value: true });

	})));

	}(uri_all, uri_all.exports));

	// do not edit .js files directly - edit src/index.jst



	var fastDeepEqual = function equal(a, b) {
	  if (a === b) return true;

	  if (a && b && typeof a == 'object' && typeof b == 'object') {
	    if (a.constructor !== b.constructor) return false;

	    var length, i, keys;
	    if (Array.isArray(a)) {
	      length = a.length;
	      if (length != b.length) return false;
	      for (i = length; i-- !== 0;)
	        if (!equal(a[i], b[i])) return false;
	      return true;
	    }



	    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
	    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
	    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

	    keys = Object.keys(a);
	    length = keys.length;
	    if (length !== Object.keys(b).length) return false;

	    for (i = length; i-- !== 0;)
	      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

	    for (i = length; i-- !== 0;) {
	      var key = keys[i];

	      if (!equal(a[key], b[key])) return false;
	    }

	    return true;
	  }

	  // true if both NaN, false otherwise
	  return a!==a && b!==b;
	};

	// https://mathiasbynens.be/notes/javascript-encoding
	// https://github.com/bestiejs/punycode.js - punycode.ucs2.decode
	var ucs2length$1 = function ucs2length(str) {
	  var length = 0
	    , len = str.length
	    , pos = 0
	    , value;
	  while (pos < len) {
	    length++;
	    value = str.charCodeAt(pos++);
	    if (value >= 0xD800 && value <= 0xDBFF && pos < len) {
	      // high surrogate, and there is a next character
	      value = str.charCodeAt(pos);
	      if ((value & 0xFC00) == 0xDC00) pos++; // low surrogate
	    }
	  }
	  return length;
	};

	var util$5 = {
	  copy: copy,
	  checkDataType: checkDataType,
	  checkDataTypes: checkDataTypes,
	  coerceToTypes: coerceToTypes,
	  toHash: toHash$1,
	  getProperty: getProperty,
	  escapeQuotes: escapeQuotes,
	  equal: fastDeepEqual,
	  ucs2length: ucs2length$1,
	  varOccurences: varOccurences,
	  varReplace: varReplace,
	  schemaHasRules: schemaHasRules,
	  schemaHasRulesExcept: schemaHasRulesExcept,
	  schemaUnknownRules: schemaUnknownRules,
	  toQuotedString: toQuotedString,
	  getPathExpr: getPathExpr,
	  getPath: getPath,
	  getData: getData,
	  unescapeFragment: unescapeFragment,
	  unescapeJsonPointer: unescapeJsonPointer,
	  escapeFragment: escapeFragment,
	  escapeJsonPointer: escapeJsonPointer
	};


	function copy(o, to) {
	  to = to || {};
	  for (var key in o) to[key] = o[key];
	  return to;
	}


	function checkDataType(dataType, data, strictNumbers, negate) {
	  var EQUAL = negate ? ' !== ' : ' === '
	    , AND = negate ? ' || ' : ' && '
	    , OK = negate ? '!' : ''
	    , NOT = negate ? '' : '!';
	  switch (dataType) {
	    case 'null': return data + EQUAL + 'null';
	    case 'array': return OK + 'Array.isArray(' + data + ')';
	    case 'object': return '(' + OK + data + AND +
	                          'typeof ' + data + EQUAL + '"object"' + AND +
	                          NOT + 'Array.isArray(' + data + '))';
	    case 'integer': return '(typeof ' + data + EQUAL + '"number"' + AND +
	                           NOT + '(' + data + ' % 1)' +
	                           AND + data + EQUAL + data +
	                           (strictNumbers ? (AND + OK + 'isFinite(' + data + ')') : '') + ')';
	    case 'number': return '(typeof ' + data + EQUAL + '"' + dataType + '"' +
	                          (strictNumbers ? (AND + OK + 'isFinite(' + data + ')') : '') + ')';
	    default: return 'typeof ' + data + EQUAL + '"' + dataType + '"';
	  }
	}


	function checkDataTypes(dataTypes, data, strictNumbers) {
	  switch (dataTypes.length) {
	    case 1: return checkDataType(dataTypes[0], data, strictNumbers, true);
	    default:
	      var code = '';
	      var types = toHash$1(dataTypes);
	      if (types.array && types.object) {
	        code = types.null ? '(': '(!' + data + ' || ';
	        code += 'typeof ' + data + ' !== "object")';
	        delete types.null;
	        delete types.array;
	        delete types.object;
	      }
	      if (types.number) delete types.integer;
	      for (var t in types)
	        code += (code ? ' && ' : '' ) + checkDataType(t, data, strictNumbers, true);

	      return code;
	  }
	}


	var COERCE_TO_TYPES = toHash$1([ 'string', 'number', 'integer', 'boolean', 'null' ]);
	function coerceToTypes(optionCoerceTypes, dataTypes) {
	  if (Array.isArray(dataTypes)) {
	    var types = [];
	    for (var i=0; i<dataTypes.length; i++) {
	      var t = dataTypes[i];
	      if (COERCE_TO_TYPES[t]) types[types.length] = t;
	      else if (optionCoerceTypes === 'array' && t === 'array') types[types.length] = t;
	    }
	    if (types.length) return types;
	  } else if (COERCE_TO_TYPES[dataTypes]) {
	    return [dataTypes];
	  } else if (optionCoerceTypes === 'array' && dataTypes === 'array') {
	    return ['array'];
	  }
	}


	function toHash$1(arr) {
	  var hash = {};
	  for (var i=0; i<arr.length; i++) hash[arr[i]] = true;
	  return hash;
	}


	var IDENTIFIER$1 = /^[a-z$_][a-z$_0-9]*$/i;
	var SINGLE_QUOTE = /'|\\/g;
	function getProperty(key) {
	  return typeof key == 'number'
	          ? '[' + key + ']'
	          : IDENTIFIER$1.test(key)
	            ? '.' + key
	            : "['" + escapeQuotes(key) + "']";
	}


	function escapeQuotes(str) {
	  return str.replace(SINGLE_QUOTE, '\\$&')
	            .replace(/\n/g, '\\n')
	            .replace(/\r/g, '\\r')
	            .replace(/\f/g, '\\f')
	            .replace(/\t/g, '\\t');
	}


	function varOccurences(str, dataVar) {
	  dataVar += '[^0-9]';
	  var matches = str.match(new RegExp(dataVar, 'g'));
	  return matches ? matches.length : 0;
	}


	function varReplace(str, dataVar, expr) {
	  dataVar += '([^0-9])';
	  expr = expr.replace(/\$/g, '$$$$');
	  return str.replace(new RegExp(dataVar, 'g'), expr + '$1');
	}


	function schemaHasRules(schema, rules) {
	  if (typeof schema == 'boolean') return !schema;
	  for (var key in schema) if (rules[key]) return true;
	}


	function schemaHasRulesExcept(schema, rules, exceptKeyword) {
	  if (typeof schema == 'boolean') return !schema && exceptKeyword != 'not';
	  for (var key in schema) if (key != exceptKeyword && rules[key]) return true;
	}


	function schemaUnknownRules(schema, rules) {
	  if (typeof schema == 'boolean') return;
	  for (var key in schema) if (!rules[key]) return key;
	}


	function toQuotedString(str) {
	  return '\'' + escapeQuotes(str) + '\'';
	}


	function getPathExpr(currentPath, expr, jsonPointers, isNumber) {
	  var path = jsonPointers // false by default
	              ? '\'/\' + ' + expr + (isNumber ? '' : '.replace(/~/g, \'~0\').replace(/\\//g, \'~1\')')
	              : (isNumber ? '\'[\' + ' + expr + ' + \']\'' : '\'[\\\'\' + ' + expr + ' + \'\\\']\'');
	  return joinPaths(currentPath, path);
	}


	function getPath(currentPath, prop, jsonPointers) {
	  var path = jsonPointers // false by default
	              ? toQuotedString('/' + escapeJsonPointer(prop))
	              : toQuotedString(getProperty(prop));
	  return joinPaths(currentPath, path);
	}


	var JSON_POINTER$1 = /^\/(?:[^~]|~0|~1)*$/;
	var RELATIVE_JSON_POINTER$1 = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
	function getData($data, lvl, paths) {
	  var up, jsonPointer, data, matches;
	  if ($data === '') return 'rootData';
	  if ($data[0] == '/') {
	    if (!JSON_POINTER$1.test($data)) throw new Error('Invalid JSON-pointer: ' + $data);
	    jsonPointer = $data;
	    data = 'rootData';
	  } else {
	    matches = $data.match(RELATIVE_JSON_POINTER$1);
	    if (!matches) throw new Error('Invalid JSON-pointer: ' + $data);
	    up = +matches[1];
	    jsonPointer = matches[2];
	    if (jsonPointer == '#') {
	      if (up >= lvl) throw new Error('Cannot access property/index ' + up + ' levels up, current level is ' + lvl);
	      return paths[lvl - up];
	    }

	    if (up > lvl) throw new Error('Cannot access data ' + up + ' levels up, current level is ' + lvl);
	    data = 'data' + ((lvl - up) || '');
	    if (!jsonPointer) return data;
	  }

	  var expr = data;
	  var segments = jsonPointer.split('/');
	  for (var i=0; i<segments.length; i++) {
	    var segment = segments[i];
	    if (segment) {
	      data += getProperty(unescapeJsonPointer(segment));
	      expr += ' && ' + data;
	    }
	  }
	  return expr;
	}


	function joinPaths (a, b) {
	  if (a == '""') return b;
	  return (a + ' + ' + b).replace(/([^\\])' \+ '/g, '$1');
	}


	function unescapeFragment(str) {
	  return unescapeJsonPointer(decodeURIComponent(str));
	}


	function escapeFragment(str) {
	  return encodeURIComponent(escapeJsonPointer(str));
	}


	function escapeJsonPointer(str) {
	  return str.replace(/~/g, '~0').replace(/\//g, '~1');
	}


	function unescapeJsonPointer(str) {
	  return str.replace(/~1/g, '/').replace(/~0/g, '~');
	}

	var util$4 = util$5;

	var schema_obj = SchemaObject$2;

	function SchemaObject$2(obj) {
	  util$4.copy(obj, this);
	}

	var jsonSchemaTraverse = {exports: {}};

	var traverse$1 = jsonSchemaTraverse.exports = function (schema, opts, cb) {
	  // Legacy support for v0.3.1 and earlier.
	  if (typeof opts == 'function') {
	    cb = opts;
	    opts = {};
	  }

	  cb = opts.cb || cb;
	  var pre = (typeof cb == 'function') ? cb : cb.pre || function() {};
	  var post = cb.post || function() {};

	  _traverse(opts, pre, post, schema, '', schema);
	};


	traverse$1.keywords = {
	  additionalItems: true,
	  items: true,
	  contains: true,
	  additionalProperties: true,
	  propertyNames: true,
	  not: true
	};

	traverse$1.arrayKeywords = {
	  items: true,
	  allOf: true,
	  anyOf: true,
	  oneOf: true
	};

	traverse$1.propsKeywords = {
	  definitions: true,
	  properties: true,
	  patternProperties: true,
	  dependencies: true
	};

	traverse$1.skipKeywords = {
	  default: true,
	  enum: true,
	  const: true,
	  required: true,
	  maximum: true,
	  minimum: true,
	  exclusiveMaximum: true,
	  exclusiveMinimum: true,
	  multipleOf: true,
	  maxLength: true,
	  minLength: true,
	  pattern: true,
	  format: true,
	  maxItems: true,
	  minItems: true,
	  uniqueItems: true,
	  maxProperties: true,
	  minProperties: true
	};


	function _traverse(opts, pre, post, schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
	  if (schema && typeof schema == 'object' && !Array.isArray(schema)) {
	    pre(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
	    for (var key in schema) {
	      var sch = schema[key];
	      if (Array.isArray(sch)) {
	        if (key in traverse$1.arrayKeywords) {
	          for (var i=0; i<sch.length; i++)
	            _traverse(opts, pre, post, sch[i], jsonPtr + '/' + key + '/' + i, rootSchema, jsonPtr, key, schema, i);
	        }
	      } else if (key in traverse$1.propsKeywords) {
	        if (sch && typeof sch == 'object') {
	          for (var prop in sch)
	            _traverse(opts, pre, post, sch[prop], jsonPtr + '/' + key + '/' + escapeJsonPtr(prop), rootSchema, jsonPtr, key, schema, prop);
	        }
	      } else if (key in traverse$1.keywords || (opts.allKeys && !(key in traverse$1.skipKeywords))) {
	        _traverse(opts, pre, post, sch, jsonPtr + '/' + key, rootSchema, jsonPtr, key, schema);
	      }
	    }
	    post(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
	  }
	}


	function escapeJsonPtr(str) {
	  return str.replace(/~/g, '~0').replace(/\//g, '~1');
	}

	var URI$1 = uri_all.exports
	  , equal$1 = fastDeepEqual
	  , util$3 = util$5
	  , SchemaObject$1 = schema_obj
	  , traverse = jsonSchemaTraverse.exports;

	var resolve_1 = resolve$3;

	resolve$3.normalizeId = normalizeId;
	resolve$3.fullPath = getFullPath;
	resolve$3.url = resolveUrl;
	resolve$3.ids = resolveIds;
	resolve$3.inlineRef = inlineRef;
	resolve$3.schema = resolveSchema$1;

	/**
	 * [resolve and compile the references ($ref)]
	 * @this   Ajv
	 * @param  {Function} compile reference to schema compilation funciton (localCompile)
	 * @param  {Object} root object with information about the root schema for the current schema
	 * @param  {String} ref reference to resolve
	 * @return {Object|Function} schema object (if the schema can be inlined) or validation function
	 */
	function resolve$3(compile, root, ref) {
	  /* jshint validthis: true */
	  var refVal = this._refs[ref];
	  if (typeof refVal == 'string') {
	    if (this._refs[refVal]) refVal = this._refs[refVal];
	    else return resolve$3.call(this, compile, root, refVal);
	  }

	  refVal = refVal || this._schemas[ref];
	  if (refVal instanceof SchemaObject$1) {
	    return inlineRef(refVal.schema, this._opts.inlineRefs)
	            ? refVal.schema
	            : refVal.validate || this._compile(refVal);
	  }

	  var res = resolveSchema$1.call(this, root, ref);
	  var schema, v, baseId;
	  if (res) {
	    schema = res.schema;
	    root = res.root;
	    baseId = res.baseId;
	  }

	  if (schema instanceof SchemaObject$1) {
	    v = schema.validate || compile.call(this, schema.schema, root, undefined, baseId);
	  } else if (schema !== undefined) {
	    v = inlineRef(schema, this._opts.inlineRefs)
	        ? schema
	        : compile.call(this, schema, root, undefined, baseId);
	  }

	  return v;
	}


	/**
	 * Resolve schema, its root and baseId
	 * @this Ajv
	 * @param  {Object} root root object with properties schema, refVal, refs
	 * @param  {String} ref  reference to resolve
	 * @return {Object} object with properties schema, root, baseId
	 */
	function resolveSchema$1(root, ref) {
	  /* jshint validthis: true */
	  var p = URI$1.parse(ref)
	    , refPath = _getFullPath(p)
	    , baseId = getFullPath(this._getId(root.schema));
	  if (Object.keys(root.schema).length === 0 || refPath !== baseId) {
	    var id = normalizeId(refPath);
	    var refVal = this._refs[id];
	    if (typeof refVal == 'string') {
	      return resolveRecursive.call(this, root, refVal, p);
	    } else if (refVal instanceof SchemaObject$1) {
	      if (!refVal.validate) this._compile(refVal);
	      root = refVal;
	    } else {
	      refVal = this._schemas[id];
	      if (refVal instanceof SchemaObject$1) {
	        if (!refVal.validate) this._compile(refVal);
	        if (id == normalizeId(ref))
	          return { schema: refVal, root: root, baseId: baseId };
	        root = refVal;
	      } else {
	        return;
	      }
	    }
	    if (!root.schema) return;
	    baseId = getFullPath(this._getId(root.schema));
	  }
	  return getJsonPointer.call(this, p, baseId, root.schema, root);
	}


	/* @this Ajv */
	function resolveRecursive(root, ref, parsedRef) {
	  /* jshint validthis: true */
	  var res = resolveSchema$1.call(this, root, ref);
	  if (res) {
	    var schema = res.schema;
	    var baseId = res.baseId;
	    root = res.root;
	    var id = this._getId(schema);
	    if (id) baseId = resolveUrl(baseId, id);
	    return getJsonPointer.call(this, parsedRef, baseId, schema, root);
	  }
	}


	var PREVENT_SCOPE_CHANGE = util$3.toHash(['properties', 'patternProperties', 'enum', 'dependencies', 'definitions']);
	/* @this Ajv */
	function getJsonPointer(parsedRef, baseId, schema, root) {
	  /* jshint validthis: true */
	  parsedRef.fragment = parsedRef.fragment || '';
	  if (parsedRef.fragment.slice(0,1) != '/') return;
	  var parts = parsedRef.fragment.split('/');

	  for (var i = 1; i < parts.length; i++) {
	    var part = parts[i];
	    if (part) {
	      part = util$3.unescapeFragment(part);
	      schema = schema[part];
	      if (schema === undefined) break;
	      var id;
	      if (!PREVENT_SCOPE_CHANGE[part]) {
	        id = this._getId(schema);
	        if (id) baseId = resolveUrl(baseId, id);
	        if (schema.$ref) {
	          var $ref = resolveUrl(baseId, schema.$ref);
	          var res = resolveSchema$1.call(this, root, $ref);
	          if (res) {
	            schema = res.schema;
	            root = res.root;
	            baseId = res.baseId;
	          }
	        }
	      }
	    }
	  }
	  if (schema !== undefined && schema !== root.schema)
	    return { schema: schema, root: root, baseId: baseId };
	}


	var SIMPLE_INLINED = util$3.toHash([
	  'type', 'format', 'pattern',
	  'maxLength', 'minLength',
	  'maxProperties', 'minProperties',
	  'maxItems', 'minItems',
	  'maximum', 'minimum',
	  'uniqueItems', 'multipleOf',
	  'required', 'enum'
	]);
	function inlineRef(schema, limit) {
	  if (limit === false) return false;
	  if (limit === undefined || limit === true) return checkNoRef(schema);
	  else if (limit) return countKeys(schema) <= limit;
	}


	function checkNoRef(schema) {
	  var item;
	  if (Array.isArray(schema)) {
	    for (var i=0; i<schema.length; i++) {
	      item = schema[i];
	      if (typeof item == 'object' && !checkNoRef(item)) return false;
	    }
	  } else {
	    for (var key in schema) {
	      if (key == '$ref') return false;
	      item = schema[key];
	      if (typeof item == 'object' && !checkNoRef(item)) return false;
	    }
	  }
	  return true;
	}


	function countKeys(schema) {
	  var count = 0, item;
	  if (Array.isArray(schema)) {
	    for (var i=0; i<schema.length; i++) {
	      item = schema[i];
	      if (typeof item == 'object') count += countKeys(item);
	      if (count == Infinity) return Infinity;
	    }
	  } else {
	    for (var key in schema) {
	      if (key == '$ref') return Infinity;
	      if (SIMPLE_INLINED[key]) {
	        count++;
	      } else {
	        item = schema[key];
	        if (typeof item == 'object') count += countKeys(item) + 1;
	        if (count == Infinity) return Infinity;
	      }
	    }
	  }
	  return count;
	}


	function getFullPath(id, normalize) {
	  if (normalize !== false) id = normalizeId(id);
	  var p = URI$1.parse(id);
	  return _getFullPath(p);
	}


	function _getFullPath(p) {
	  return URI$1.serialize(p).split('#')[0] + '#';
	}


	var TRAILING_SLASH_HASH = /#\/?$/;
	function normalizeId(id) {
	  return id ? id.replace(TRAILING_SLASH_HASH, '') : '';
	}


	function resolveUrl(baseId, id) {
	  id = normalizeId(id);
	  return URI$1.resolve(baseId, id);
	}


	/* @this Ajv */
	function resolveIds(schema) {
	  var schemaId = normalizeId(this._getId(schema));
	  var baseIds = {'': schemaId};
	  var fullPaths = {'': getFullPath(schemaId, false)};
	  var localRefs = {};
	  var self = this;

	  traverse(schema, {allKeys: true}, function(sch, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
	    if (jsonPtr === '') return;
	    var id = self._getId(sch);
	    var baseId = baseIds[parentJsonPtr];
	    var fullPath = fullPaths[parentJsonPtr] + '/' + parentKeyword;
	    if (keyIndex !== undefined)
	      fullPath += '/' + (typeof keyIndex == 'number' ? keyIndex : util$3.escapeFragment(keyIndex));

	    if (typeof id == 'string') {
	      id = baseId = normalizeId(baseId ? URI$1.resolve(baseId, id) : id);

	      var refVal = self._refs[id];
	      if (typeof refVal == 'string') refVal = self._refs[refVal];
	      if (refVal && refVal.schema) {
	        if (!equal$1(sch, refVal.schema))
	          throw new Error('id "' + id + '" resolves to more than one schema');
	      } else if (id != normalizeId(fullPath)) {
	        if (id[0] == '#') {
	          if (localRefs[id] && !equal$1(sch, localRefs[id]))
	            throw new Error('id "' + id + '" resolves to more than one schema');
	          localRefs[id] = sch;
	        } else {
	          self._refs[id] = fullPath;
	        }
	      }
	    }
	    baseIds[jsonPtr] = baseId;
	    fullPaths[jsonPtr] = fullPath;
	  });

	  return localRefs;
	}

	var resolve$2 = resolve_1;

	var error_classes = {
	  Validation: errorSubclass(ValidationError$1),
	  MissingRef: errorSubclass(MissingRefError$1)
	};


	function ValidationError$1(errors) {
	  this.message = 'validation failed';
	  this.errors = errors;
	  this.ajv = this.validation = true;
	}


	MissingRefError$1.message = function (baseId, ref) {
	  return 'can\'t resolve reference ' + ref + ' from id ' + baseId;
	};


	function MissingRefError$1(baseId, ref, message) {
	  this.message = message || MissingRefError$1.message(baseId, ref);
	  this.missingRef = resolve$2.url(baseId, ref);
	  this.missingSchema = resolve$2.normalizeId(resolve$2.fullPath(this.missingRef));
	}


	function errorSubclass(Subclass) {
	  Subclass.prototype = Object.create(Error.prototype);
	  Subclass.prototype.constructor = Subclass;
	  return Subclass;
	}

	var fastJsonStableStringify = function (data, opts) {
	    if (!opts) opts = {};
	    if (typeof opts === 'function') opts = { cmp: opts };
	    var cycles = (typeof opts.cycles === 'boolean') ? opts.cycles : false;

	    var cmp = opts.cmp && (function (f) {
	        return function (node) {
	            return function (a, b) {
	                var aobj = { key: a, value: node[a] };
	                var bobj = { key: b, value: node[b] };
	                return f(aobj, bobj);
	            };
	        };
	    })(opts.cmp);

	    var seen = [];
	    return (function stringify (node) {
	        if (node && node.toJSON && typeof node.toJSON === 'function') {
	            node = node.toJSON();
	        }

	        if (node === undefined) return;
	        if (typeof node == 'number') return isFinite(node) ? '' + node : 'null';
	        if (typeof node !== 'object') return JSON.stringify(node);

	        var i, out;
	        if (Array.isArray(node)) {
	            out = '[';
	            for (i = 0; i < node.length; i++) {
	                if (i) out += ',';
	                out += stringify(node[i]) || 'null';
	            }
	            return out + ']';
	        }

	        if (node === null) return 'null';

	        if (seen.indexOf(node) !== -1) {
	            if (cycles) return JSON.stringify('__cycle__');
	            throw new TypeError('Converting circular structure to JSON');
	        }

	        var seenIndex = seen.push(node) - 1;
	        var keys = Object.keys(node).sort(cmp && cmp(node));
	        out = '';
	        for (i = 0; i < keys.length; i++) {
	            var key = keys[i];
	            var value = stringify(node[key]);

	            if (!value) continue;
	            if (out) out += ',';
	            out += JSON.stringify(key) + ':' + value;
	        }
	        seen.splice(seenIndex, 1);
	        return '{' + out + '}';
	    })(data);
	};

	var validate$1 = function generate_validate(it, $keyword, $ruleType) {
	  var out = '';
	  var $async = it.schema.$async === true,
	    $refKeywords = it.util.schemaHasRulesExcept(it.schema, it.RULES.all, '$ref'),
	    $id = it.self._getId(it.schema);
	  if (it.opts.strictKeywords) {
	    var $unknownKwd = it.util.schemaUnknownRules(it.schema, it.RULES.keywords);
	    if ($unknownKwd) {
	      var $keywordsMsg = 'unknown keyword: ' + $unknownKwd;
	      if (it.opts.strictKeywords === 'log') it.logger.warn($keywordsMsg);
	      else throw new Error($keywordsMsg);
	    }
	  }
	  if (it.isTop) {
	    out += ' var validate = ';
	    if ($async) {
	      it.async = true;
	      out += 'async ';
	    }
	    out += 'function(data, dataPath, parentData, parentDataProperty, rootData) { \'use strict\'; ';
	    if ($id && (it.opts.sourceCode || it.opts.processCode)) {
	      out += ' ' + ('/\*# sourceURL=' + $id + ' */') + ' ';
	    }
	  }
	  if (typeof it.schema == 'boolean' || !($refKeywords || it.schema.$ref)) {
	    var $keyword = 'false schema';
	    var $lvl = it.level;
	    var $dataLvl = it.dataLevel;
	    var $schema = it.schema[$keyword];
	    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	    var $breakOnError = !it.opts.allErrors;
	    var $errorKeyword;
	    var $data = 'data' + ($dataLvl || '');
	    var $valid = 'valid' + $lvl;
	    if (it.schema === false) {
	      if (it.isTop) {
	        $breakOnError = true;
	      } else {
	        out += ' var ' + ($valid) + ' = false; ';
	      }
	      var $$outStack = $$outStack || [];
	      $$outStack.push(out);
	      out = ''; /* istanbul ignore else */
	      if (it.createErrors !== false) {
	        out += ' { keyword: \'' + ($errorKeyword || 'false schema') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
	        if (it.opts.messages !== false) {
	          out += ' , message: \'boolean schema is false\' ';
	        }
	        if (it.opts.verbose) {
	          out += ' , schema: false , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	        }
	        out += ' } ';
	      } else {
	        out += ' {} ';
	      }
	      var __err = out;
	      out = $$outStack.pop();
	      if (!it.compositeRule && $breakOnError) {
	        /* istanbul ignore if */
	        if (it.async) {
	          out += ' throw new ValidationError([' + (__err) + ']); ';
	        } else {
	          out += ' validate.errors = [' + (__err) + ']; return false; ';
	        }
	      } else {
	        out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	      }
	    } else {
	      if (it.isTop) {
	        if ($async) {
	          out += ' return data; ';
	        } else {
	          out += ' validate.errors = null; return true; ';
	        }
	      } else {
	        out += ' var ' + ($valid) + ' = true; ';
	      }
	    }
	    if (it.isTop) {
	      out += ' }; return validate; ';
	    }
	    return out;
	  }
	  if (it.isTop) {
	    var $top = it.isTop,
	      $lvl = it.level = 0,
	      $dataLvl = it.dataLevel = 0,
	      $data = 'data';
	    it.rootId = it.resolve.fullPath(it.self._getId(it.root.schema));
	    it.baseId = it.baseId || it.rootId;
	    delete it.isTop;
	    it.dataPathArr = [""];
	    if (it.schema.default !== undefined && it.opts.useDefaults && it.opts.strictDefaults) {
	      var $defaultMsg = 'default is ignored in the schema root';
	      if (it.opts.strictDefaults === 'log') it.logger.warn($defaultMsg);
	      else throw new Error($defaultMsg);
	    }
	    out += ' var vErrors = null; ';
	    out += ' var errors = 0;     ';
	    out += ' if (rootData === undefined) rootData = data; ';
	  } else {
	    var $lvl = it.level,
	      $dataLvl = it.dataLevel,
	      $data = 'data' + ($dataLvl || '');
	    if ($id) it.baseId = it.resolve.url(it.baseId, $id);
	    if ($async && !it.async) throw new Error('async schema in sync schema');
	    out += ' var errs_' + ($lvl) + ' = errors;';
	  }
	  var $valid = 'valid' + $lvl,
	    $breakOnError = !it.opts.allErrors,
	    $closingBraces1 = '',
	    $closingBraces2 = '';
	  var $errorKeyword;
	  var $typeSchema = it.schema.type,
	    $typeIsArray = Array.isArray($typeSchema);
	  if ($typeSchema && it.opts.nullable && it.schema.nullable === true) {
	    if ($typeIsArray) {
	      if ($typeSchema.indexOf('null') == -1) $typeSchema = $typeSchema.concat('null');
	    } else if ($typeSchema != 'null') {
	      $typeSchema = [$typeSchema, 'null'];
	      $typeIsArray = true;
	    }
	  }
	  if ($typeIsArray && $typeSchema.length == 1) {
	    $typeSchema = $typeSchema[0];
	    $typeIsArray = false;
	  }
	  if (it.schema.$ref && $refKeywords) {
	    if (it.opts.extendRefs == 'fail') {
	      throw new Error('$ref: validation keywords used in schema at path "' + it.errSchemaPath + '" (see option extendRefs)');
	    } else if (it.opts.extendRefs !== true) {
	      $refKeywords = false;
	      it.logger.warn('$ref: keywords ignored in schema at path "' + it.errSchemaPath + '"');
	    }
	  }
	  if (it.schema.$comment && it.opts.$comment) {
	    out += ' ' + (it.RULES.all.$comment.code(it, '$comment'));
	  }
	  if ($typeSchema) {
	    if (it.opts.coerceTypes) {
	      var $coerceToTypes = it.util.coerceToTypes(it.opts.coerceTypes, $typeSchema);
	    }
	    var $rulesGroup = it.RULES.types[$typeSchema];
	    if ($coerceToTypes || $typeIsArray || $rulesGroup === true || ($rulesGroup && !$shouldUseGroup($rulesGroup))) {
	      var $schemaPath = it.schemaPath + '.type',
	        $errSchemaPath = it.errSchemaPath + '/type';
	      var $schemaPath = it.schemaPath + '.type',
	        $errSchemaPath = it.errSchemaPath + '/type',
	        $method = $typeIsArray ? 'checkDataTypes' : 'checkDataType';
	      out += ' if (' + (it.util[$method]($typeSchema, $data, it.opts.strictNumbers, true)) + ') { ';
	      if ($coerceToTypes) {
	        var $dataType = 'dataType' + $lvl,
	          $coerced = 'coerced' + $lvl;
	        out += ' var ' + ($dataType) + ' = typeof ' + ($data) + '; var ' + ($coerced) + ' = undefined; ';
	        if (it.opts.coerceTypes == 'array') {
	          out += ' if (' + ($dataType) + ' == \'object\' && Array.isArray(' + ($data) + ') && ' + ($data) + '.length == 1) { ' + ($data) + ' = ' + ($data) + '[0]; ' + ($dataType) + ' = typeof ' + ($data) + '; if (' + (it.util.checkDataType(it.schema.type, $data, it.opts.strictNumbers)) + ') ' + ($coerced) + ' = ' + ($data) + '; } ';
	        }
	        out += ' if (' + ($coerced) + ' !== undefined) ; ';
	        var arr1 = $coerceToTypes;
	        if (arr1) {
	          var $type, $i = -1,
	            l1 = arr1.length - 1;
	          while ($i < l1) {
	            $type = arr1[$i += 1];
	            if ($type == 'string') {
	              out += ' else if (' + ($dataType) + ' == \'number\' || ' + ($dataType) + ' == \'boolean\') ' + ($coerced) + ' = \'\' + ' + ($data) + '; else if (' + ($data) + ' === null) ' + ($coerced) + ' = \'\'; ';
	            } else if ($type == 'number' || $type == 'integer') {
	              out += ' else if (' + ($dataType) + ' == \'boolean\' || ' + ($data) + ' === null || (' + ($dataType) + ' == \'string\' && ' + ($data) + ' && ' + ($data) + ' == +' + ($data) + ' ';
	              if ($type == 'integer') {
	                out += ' && !(' + ($data) + ' % 1)';
	              }
	              out += ')) ' + ($coerced) + ' = +' + ($data) + '; ';
	            } else if ($type == 'boolean') {
	              out += ' else if (' + ($data) + ' === \'false\' || ' + ($data) + ' === 0 || ' + ($data) + ' === null) ' + ($coerced) + ' = false; else if (' + ($data) + ' === \'true\' || ' + ($data) + ' === 1) ' + ($coerced) + ' = true; ';
	            } else if ($type == 'null') {
	              out += ' else if (' + ($data) + ' === \'\' || ' + ($data) + ' === 0 || ' + ($data) + ' === false) ' + ($coerced) + ' = null; ';
	            } else if (it.opts.coerceTypes == 'array' && $type == 'array') {
	              out += ' else if (' + ($dataType) + ' == \'string\' || ' + ($dataType) + ' == \'number\' || ' + ($dataType) + ' == \'boolean\' || ' + ($data) + ' == null) ' + ($coerced) + ' = [' + ($data) + ']; ';
	            }
	          }
	        }
	        out += ' else {   ';
	        var $$outStack = $$outStack || [];
	        $$outStack.push(out);
	        out = ''; /* istanbul ignore else */
	        if (it.createErrors !== false) {
	          out += ' { keyword: \'' + ($errorKeyword || 'type') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { type: \'';
	          if ($typeIsArray) {
	            out += '' + ($typeSchema.join(","));
	          } else {
	            out += '' + ($typeSchema);
	          }
	          out += '\' } ';
	          if (it.opts.messages !== false) {
	            out += ' , message: \'should be ';
	            if ($typeIsArray) {
	              out += '' + ($typeSchema.join(","));
	            } else {
	              out += '' + ($typeSchema);
	            }
	            out += '\' ';
	          }
	          if (it.opts.verbose) {
	            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	          }
	          out += ' } ';
	        } else {
	          out += ' {} ';
	        }
	        var __err = out;
	        out = $$outStack.pop();
	        if (!it.compositeRule && $breakOnError) {
	          /* istanbul ignore if */
	          if (it.async) {
	            out += ' throw new ValidationError([' + (__err) + ']); ';
	          } else {
	            out += ' validate.errors = [' + (__err) + ']; return false; ';
	          }
	        } else {
	          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	        }
	        out += ' } if (' + ($coerced) + ' !== undefined) {  ';
	        var $parentData = $dataLvl ? 'data' + (($dataLvl - 1) || '') : 'parentData',
	          $parentDataProperty = $dataLvl ? it.dataPathArr[$dataLvl] : 'parentDataProperty';
	        out += ' ' + ($data) + ' = ' + ($coerced) + '; ';
	        if (!$dataLvl) {
	          out += 'if (' + ($parentData) + ' !== undefined)';
	        }
	        out += ' ' + ($parentData) + '[' + ($parentDataProperty) + '] = ' + ($coerced) + '; } ';
	      } else {
	        var $$outStack = $$outStack || [];
	        $$outStack.push(out);
	        out = ''; /* istanbul ignore else */
	        if (it.createErrors !== false) {
	          out += ' { keyword: \'' + ($errorKeyword || 'type') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { type: \'';
	          if ($typeIsArray) {
	            out += '' + ($typeSchema.join(","));
	          } else {
	            out += '' + ($typeSchema);
	          }
	          out += '\' } ';
	          if (it.opts.messages !== false) {
	            out += ' , message: \'should be ';
	            if ($typeIsArray) {
	              out += '' + ($typeSchema.join(","));
	            } else {
	              out += '' + ($typeSchema);
	            }
	            out += '\' ';
	          }
	          if (it.opts.verbose) {
	            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	          }
	          out += ' } ';
	        } else {
	          out += ' {} ';
	        }
	        var __err = out;
	        out = $$outStack.pop();
	        if (!it.compositeRule && $breakOnError) {
	          /* istanbul ignore if */
	          if (it.async) {
	            out += ' throw new ValidationError([' + (__err) + ']); ';
	          } else {
	            out += ' validate.errors = [' + (__err) + ']; return false; ';
	          }
	        } else {
	          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	        }
	      }
	      out += ' } ';
	    }
	  }
	  if (it.schema.$ref && !$refKeywords) {
	    out += ' ' + (it.RULES.all.$ref.code(it, '$ref')) + ' ';
	    if ($breakOnError) {
	      out += ' } if (errors === ';
	      if ($top) {
	        out += '0';
	      } else {
	        out += 'errs_' + ($lvl);
	      }
	      out += ') { ';
	      $closingBraces2 += '}';
	    }
	  } else {
	    var arr2 = it.RULES;
	    if (arr2) {
	      var $rulesGroup, i2 = -1,
	        l2 = arr2.length - 1;
	      while (i2 < l2) {
	        $rulesGroup = arr2[i2 += 1];
	        if ($shouldUseGroup($rulesGroup)) {
	          if ($rulesGroup.type) {
	            out += ' if (' + (it.util.checkDataType($rulesGroup.type, $data, it.opts.strictNumbers)) + ') { ';
	          }
	          if (it.opts.useDefaults) {
	            if ($rulesGroup.type == 'object' && it.schema.properties) {
	              var $schema = it.schema.properties,
	                $schemaKeys = Object.keys($schema);
	              var arr3 = $schemaKeys;
	              if (arr3) {
	                var $propertyKey, i3 = -1,
	                  l3 = arr3.length - 1;
	                while (i3 < l3) {
	                  $propertyKey = arr3[i3 += 1];
	                  var $sch = $schema[$propertyKey];
	                  if ($sch.default !== undefined) {
	                    var $passData = $data + it.util.getProperty($propertyKey);
	                    if (it.compositeRule) {
	                      if (it.opts.strictDefaults) {
	                        var $defaultMsg = 'default is ignored for: ' + $passData;
	                        if (it.opts.strictDefaults === 'log') it.logger.warn($defaultMsg);
	                        else throw new Error($defaultMsg);
	                      }
	                    } else {
	                      out += ' if (' + ($passData) + ' === undefined ';
	                      if (it.opts.useDefaults == 'empty') {
	                        out += ' || ' + ($passData) + ' === null || ' + ($passData) + ' === \'\' ';
	                      }
	                      out += ' ) ' + ($passData) + ' = ';
	                      if (it.opts.useDefaults == 'shared') {
	                        out += ' ' + (it.useDefault($sch.default)) + ' ';
	                      } else {
	                        out += ' ' + (JSON.stringify($sch.default)) + ' ';
	                      }
	                      out += '; ';
	                    }
	                  }
	                }
	              }
	            } else if ($rulesGroup.type == 'array' && Array.isArray(it.schema.items)) {
	              var arr4 = it.schema.items;
	              if (arr4) {
	                var $sch, $i = -1,
	                  l4 = arr4.length - 1;
	                while ($i < l4) {
	                  $sch = arr4[$i += 1];
	                  if ($sch.default !== undefined) {
	                    var $passData = $data + '[' + $i + ']';
	                    if (it.compositeRule) {
	                      if (it.opts.strictDefaults) {
	                        var $defaultMsg = 'default is ignored for: ' + $passData;
	                        if (it.opts.strictDefaults === 'log') it.logger.warn($defaultMsg);
	                        else throw new Error($defaultMsg);
	                      }
	                    } else {
	                      out += ' if (' + ($passData) + ' === undefined ';
	                      if (it.opts.useDefaults == 'empty') {
	                        out += ' || ' + ($passData) + ' === null || ' + ($passData) + ' === \'\' ';
	                      }
	                      out += ' ) ' + ($passData) + ' = ';
	                      if (it.opts.useDefaults == 'shared') {
	                        out += ' ' + (it.useDefault($sch.default)) + ' ';
	                      } else {
	                        out += ' ' + (JSON.stringify($sch.default)) + ' ';
	                      }
	                      out += '; ';
	                    }
	                  }
	                }
	              }
	            }
	          }
	          var arr5 = $rulesGroup.rules;
	          if (arr5) {
	            var $rule, i5 = -1,
	              l5 = arr5.length - 1;
	            while (i5 < l5) {
	              $rule = arr5[i5 += 1];
	              if ($shouldUseRule($rule)) {
	                var $code = $rule.code(it, $rule.keyword, $rulesGroup.type);
	                if ($code) {
	                  out += ' ' + ($code) + ' ';
	                  if ($breakOnError) {
	                    $closingBraces1 += '}';
	                  }
	                }
	              }
	            }
	          }
	          if ($breakOnError) {
	            out += ' ' + ($closingBraces1) + ' ';
	            $closingBraces1 = '';
	          }
	          if ($rulesGroup.type) {
	            out += ' } ';
	            if ($typeSchema && $typeSchema === $rulesGroup.type && !$coerceToTypes) {
	              out += ' else { ';
	              var $schemaPath = it.schemaPath + '.type',
	                $errSchemaPath = it.errSchemaPath + '/type';
	              var $$outStack = $$outStack || [];
	              $$outStack.push(out);
	              out = ''; /* istanbul ignore else */
	              if (it.createErrors !== false) {
	                out += ' { keyword: \'' + ($errorKeyword || 'type') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { type: \'';
	                if ($typeIsArray) {
	                  out += '' + ($typeSchema.join(","));
	                } else {
	                  out += '' + ($typeSchema);
	                }
	                out += '\' } ';
	                if (it.opts.messages !== false) {
	                  out += ' , message: \'should be ';
	                  if ($typeIsArray) {
	                    out += '' + ($typeSchema.join(","));
	                  } else {
	                    out += '' + ($typeSchema);
	                  }
	                  out += '\' ';
	                }
	                if (it.opts.verbose) {
	                  out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	                }
	                out += ' } ';
	              } else {
	                out += ' {} ';
	              }
	              var __err = out;
	              out = $$outStack.pop();
	              if (!it.compositeRule && $breakOnError) {
	                /* istanbul ignore if */
	                if (it.async) {
	                  out += ' throw new ValidationError([' + (__err) + ']); ';
	                } else {
	                  out += ' validate.errors = [' + (__err) + ']; return false; ';
	                }
	              } else {
	                out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	              }
	              out += ' } ';
	            }
	          }
	          if ($breakOnError) {
	            out += ' if (errors === ';
	            if ($top) {
	              out += '0';
	            } else {
	              out += 'errs_' + ($lvl);
	            }
	            out += ') { ';
	            $closingBraces2 += '}';
	          }
	        }
	      }
	    }
	  }
	  if ($breakOnError) {
	    out += ' ' + ($closingBraces2) + ' ';
	  }
	  if ($top) {
	    if ($async) {
	      out += ' if (errors === 0) return data;           ';
	      out += ' else throw new ValidationError(vErrors); ';
	    } else {
	      out += ' validate.errors = vErrors; ';
	      out += ' return errors === 0;       ';
	    }
	    out += ' }; return validate;';
	  } else {
	    out += ' var ' + ($valid) + ' = errors === errs_' + ($lvl) + ';';
	  }

	  function $shouldUseGroup($rulesGroup) {
	    var rules = $rulesGroup.rules;
	    for (var i = 0; i < rules.length; i++)
	      if ($shouldUseRule(rules[i])) return true;
	  }

	  function $shouldUseRule($rule) {
	    return it.schema[$rule.keyword] !== undefined || ($rule.implements && $ruleImplementsSomeKeyword($rule));
	  }

	  function $ruleImplementsSomeKeyword($rule) {
	    var impl = $rule.implements;
	    for (var i = 0; i < impl.length; i++)
	      if (it.schema[impl[i]] !== undefined) return true;
	  }
	  return out;
	};

	var resolve$1 = resolve_1
	  , util$2 = util$5
	  , errorClasses$1 = error_classes
	  , stableStringify$1 = fastJsonStableStringify;

	var validateGenerator = validate$1;

	/**
	 * Functions below are used inside compiled validations function
	 */

	var ucs2length = util$2.ucs2length;
	var equal = fastDeepEqual;

	// this error is thrown by async schemas to return validation errors via exception
	var ValidationError = errorClasses$1.Validation;

	var compile_1 = compile$1;


	/**
	 * Compiles schema to validation function
	 * @this   Ajv
	 * @param  {Object} schema schema object
	 * @param  {Object} root object with information about the root schema for this schema
	 * @param  {Object} localRefs the hash of local references inside the schema (created by resolve.id), used for inline resolution
	 * @param  {String} baseId base ID for IDs in the schema
	 * @return {Function} validation function
	 */
	function compile$1(schema, root, localRefs, baseId) {
	  /* jshint validthis: true, evil: true */
	  /* eslint no-shadow: 0 */
	  var self = this
	    , opts = this._opts
	    , refVal = [ undefined ]
	    , refs = {}
	    , patterns = []
	    , patternsHash = {}
	    , defaults = []
	    , defaultsHash = {}
	    , customRules = [];

	  root = root || { schema: schema, refVal: refVal, refs: refs };

	  var c = checkCompiling.call(this, schema, root, baseId);
	  var compilation = this._compilations[c.index];
	  if (c.compiling) return (compilation.callValidate = callValidate);

	  var formats = this._formats;
	  var RULES = this.RULES;

	  try {
	    var v = localCompile(schema, root, localRefs, baseId);
	    compilation.validate = v;
	    var cv = compilation.callValidate;
	    if (cv) {
	      cv.schema = v.schema;
	      cv.errors = null;
	      cv.refs = v.refs;
	      cv.refVal = v.refVal;
	      cv.root = v.root;
	      cv.$async = v.$async;
	      if (opts.sourceCode) cv.source = v.source;
	    }
	    return v;
	  } finally {
	    endCompiling.call(this, schema, root, baseId);
	  }

	  /* @this   {*} - custom context, see passContext option */
	  function callValidate() {
	    /* jshint validthis: true */
	    var validate = compilation.validate;
	    var result = validate.apply(this, arguments);
	    callValidate.errors = validate.errors;
	    return result;
	  }

	  function localCompile(_schema, _root, localRefs, baseId) {
	    var isRoot = !_root || (_root && _root.schema == _schema);
	    if (_root.schema != root.schema)
	      return compile$1.call(self, _schema, _root, localRefs, baseId);

	    var $async = _schema.$async === true;

	    var sourceCode = validateGenerator({
	      isTop: true,
	      schema: _schema,
	      isRoot: isRoot,
	      baseId: baseId,
	      root: _root,
	      schemaPath: '',
	      errSchemaPath: '#',
	      errorPath: '""',
	      MissingRefError: errorClasses$1.MissingRef,
	      RULES: RULES,
	      validate: validateGenerator,
	      util: util$2,
	      resolve: resolve$1,
	      resolveRef: resolveRef,
	      usePattern: usePattern,
	      useDefault: useDefault,
	      useCustomRule: useCustomRule,
	      opts: opts,
	      formats: formats,
	      logger: self.logger,
	      self: self
	    });

	    sourceCode = vars(refVal, refValCode) + vars(patterns, patternCode)
	                   + vars(defaults, defaultCode) + vars(customRules, customRuleCode$1)
	                   + sourceCode;

	    if (opts.processCode) sourceCode = opts.processCode(sourceCode, _schema);
	    // console.log('\n\n\n *** \n', JSON.stringify(sourceCode));
	    var validate;
	    try {
	      var makeValidate = new Function(
	        'self',
	        'RULES',
	        'formats',
	        'root',
	        'refVal',
	        'defaults',
	        'customRules',
	        'equal',
	        'ucs2length',
	        'ValidationError',
	        sourceCode
	      );

	      validate = makeValidate(
	        self,
	        RULES,
	        formats,
	        root,
	        refVal,
	        defaults,
	        customRules,
	        equal,
	        ucs2length,
	        ValidationError
	      );

	      refVal[0] = validate;
	    } catch(e) {
	      self.logger.error('Error compiling schema, function code:', sourceCode);
	      throw e;
	    }

	    validate.schema = _schema;
	    validate.errors = null;
	    validate.refs = refs;
	    validate.refVal = refVal;
	    validate.root = isRoot ? validate : _root;
	    if ($async) validate.$async = true;
	    if (opts.sourceCode === true) {
	      validate.source = {
	        code: sourceCode,
	        patterns: patterns,
	        defaults: defaults
	      };
	    }

	    return validate;
	  }

	  function resolveRef(baseId, ref, isRoot) {
	    ref = resolve$1.url(baseId, ref);
	    var refIndex = refs[ref];
	    var _refVal, refCode;
	    if (refIndex !== undefined) {
	      _refVal = refVal[refIndex];
	      refCode = 'refVal[' + refIndex + ']';
	      return resolvedRef(_refVal, refCode);
	    }
	    if (!isRoot && root.refs) {
	      var rootRefId = root.refs[ref];
	      if (rootRefId !== undefined) {
	        _refVal = root.refVal[rootRefId];
	        refCode = addLocalRef(ref, _refVal);
	        return resolvedRef(_refVal, refCode);
	      }
	    }

	    refCode = addLocalRef(ref);
	    var v = resolve$1.call(self, localCompile, root, ref);
	    if (v === undefined) {
	      var localSchema = localRefs && localRefs[ref];
	      if (localSchema) {
	        v = resolve$1.inlineRef(localSchema, opts.inlineRefs)
	            ? localSchema
	            : compile$1.call(self, localSchema, root, localRefs, baseId);
	      }
	    }

	    if (v === undefined) {
	      removeLocalRef(ref);
	    } else {
	      replaceLocalRef(ref, v);
	      return resolvedRef(v, refCode);
	    }
	  }

	  function addLocalRef(ref, v) {
	    var refId = refVal.length;
	    refVal[refId] = v;
	    refs[ref] = refId;
	    return 'refVal' + refId;
	  }

	  function removeLocalRef(ref) {
	    delete refs[ref];
	  }

	  function replaceLocalRef(ref, v) {
	    var refId = refs[ref];
	    refVal[refId] = v;
	  }

	  function resolvedRef(refVal, code) {
	    return typeof refVal == 'object' || typeof refVal == 'boolean'
	            ? { code: code, schema: refVal, inline: true }
	            : { code: code, $async: refVal && !!refVal.$async };
	  }

	  function usePattern(regexStr) {
	    var index = patternsHash[regexStr];
	    if (index === undefined) {
	      index = patternsHash[regexStr] = patterns.length;
	      patterns[index] = regexStr;
	    }
	    return 'pattern' + index;
	  }

	  function useDefault(value) {
	    switch (typeof value) {
	      case 'boolean':
	      case 'number':
	        return '' + value;
	      case 'string':
	        return util$2.toQuotedString(value);
	      case 'object':
	        if (value === null) return 'null';
	        var valueStr = stableStringify$1(value);
	        var index = defaultsHash[valueStr];
	        if (index === undefined) {
	          index = defaultsHash[valueStr] = defaults.length;
	          defaults[index] = value;
	        }
	        return 'default' + index;
	    }
	  }

	  function useCustomRule(rule, schema, parentSchema, it) {
	    if (self._opts.validateSchema !== false) {
	      var deps = rule.definition.dependencies;
	      if (deps && !deps.every(function(keyword) {
	        return Object.prototype.hasOwnProperty.call(parentSchema, keyword);
	      }))
	        throw new Error('parent schema must have all required keywords: ' + deps.join(','));

	      var validateSchema = rule.definition.validateSchema;
	      if (validateSchema) {
	        var valid = validateSchema(schema);
	        if (!valid) {
	          var message = 'keyword schema is invalid: ' + self.errorsText(validateSchema.errors);
	          if (self._opts.validateSchema == 'log') self.logger.error(message);
	          else throw new Error(message);
	        }
	      }
	    }

	    var compile = rule.definition.compile
	      , inline = rule.definition.inline
	      , macro = rule.definition.macro;

	    var validate;
	    if (compile) {
	      validate = compile.call(self, schema, parentSchema, it);
	    } else if (macro) {
	      validate = macro.call(self, schema, parentSchema, it);
	      if (opts.validateSchema !== false) self.validateSchema(validate, true);
	    } else if (inline) {
	      validate = inline.call(self, it, rule.keyword, schema, parentSchema);
	    } else {
	      validate = rule.definition.validate;
	      if (!validate) return;
	    }

	    if (validate === undefined)
	      throw new Error('custom keyword "' + rule.keyword + '"failed to compile');

	    var index = customRules.length;
	    customRules[index] = validate;

	    return {
	      code: 'customRule' + index,
	      validate: validate
	    };
	  }
	}


	/**
	 * Checks if the schema is currently compiled
	 * @this   Ajv
	 * @param  {Object} schema schema to compile
	 * @param  {Object} root root object
	 * @param  {String} baseId base schema ID
	 * @return {Object} object with properties "index" (compilation index) and "compiling" (boolean)
	 */
	function checkCompiling(schema, root, baseId) {
	  /* jshint validthis: true */
	  var index = compIndex.call(this, schema, root, baseId);
	  if (index >= 0) return { index: index, compiling: true };
	  index = this._compilations.length;
	  this._compilations[index] = {
	    schema: schema,
	    root: root,
	    baseId: baseId
	  };
	  return { index: index, compiling: false };
	}


	/**
	 * Removes the schema from the currently compiled list
	 * @this   Ajv
	 * @param  {Object} schema schema to compile
	 * @param  {Object} root root object
	 * @param  {String} baseId base schema ID
	 */
	function endCompiling(schema, root, baseId) {
	  /* jshint validthis: true */
	  var i = compIndex.call(this, schema, root, baseId);
	  if (i >= 0) this._compilations.splice(i, 1);
	}


	/**
	 * Index of schema compilation in the currently compiled list
	 * @this   Ajv
	 * @param  {Object} schema schema to compile
	 * @param  {Object} root root object
	 * @param  {String} baseId base schema ID
	 * @return {Integer} compilation index
	 */
	function compIndex(schema, root, baseId) {
	  /* jshint validthis: true */
	  for (var i=0; i<this._compilations.length; i++) {
	    var c = this._compilations[i];
	    if (c.schema == schema && c.root == root && c.baseId == baseId) return i;
	  }
	  return -1;
	}


	function patternCode(i, patterns) {
	  return 'var pattern' + i + ' = new RegExp(' + util$2.toQuotedString(patterns[i]) + ');';
	}


	function defaultCode(i) {
	  return 'var default' + i + ' = defaults[' + i + '];';
	}


	function refValCode(i, refVal) {
	  return refVal[i] === undefined ? '' : 'var refVal' + i + ' = refVal[' + i + '];';
	}


	function customRuleCode$1(i) {
	  return 'var customRule' + i + ' = customRules[' + i + '];';
	}


	function vars(arr, statement) {
	  if (!arr.length) return '';
	  var code = '';
	  for (var i=0; i<arr.length; i++)
	    code += statement(i, arr);
	  return code;
	}

	var cache = {exports: {}};

	var Cache$1 = cache.exports = function Cache() {
	  this._cache = {};
	};


	Cache$1.prototype.put = function Cache_put(key, value) {
	  this._cache[key] = value;
	};


	Cache$1.prototype.get = function Cache_get(key) {
	  return this._cache[key];
	};


	Cache$1.prototype.del = function Cache_del(key) {
	  delete this._cache[key];
	};


	Cache$1.prototype.clear = function Cache_clear() {
	  this._cache = {};
	};

	var util$1 = util$5;

	var DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
	var DAYS = [0,31,28,31,30,31,30,31,31,30,31,30,31];
	var TIME = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;
	var HOSTNAME = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i;
	var URI = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
	var URIREF = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
	// uri-template: https://tools.ietf.org/html/rfc6570
	var URITEMPLATE = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i;
	// For the source: https://gist.github.com/dperini/729294
	// For test cases: https://mathiasbynens.be/demo/url-regex
	// @todo Delete current URL in favour of the commented out URL rule when this issue is fixed https://github.com/eslint/eslint/issues/7983.
	// var URL = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u{00a1}-\u{ffff}0-9]+-)*[a-z\u{00a1}-\u{ffff}0-9]+)(?:\.(?:[a-z\u{00a1}-\u{ffff}0-9]+-)*[a-z\u{00a1}-\u{ffff}0-9]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu;
	var URL = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i;
	var UUID = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
	var JSON_POINTER = /^(?:\/(?:[^~/]|~0|~1)*)*$/;
	var JSON_POINTER_URI_FRAGMENT = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i;
	var RELATIVE_JSON_POINTER = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;


	var formats_1 = formats$1;

	function formats$1(mode) {
	  mode = mode == 'full' ? 'full' : 'fast';
	  return util$1.copy(formats$1[mode]);
	}


	formats$1.fast = {
	  // date: http://tools.ietf.org/html/rfc3339#section-5.6
	  date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/,
	  // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
	  time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,
	  'date-time': /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,
	  // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
	  uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
	  'uri-reference': /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
	  'uri-template': URITEMPLATE,
	  url: URL,
	  // email (sources from jsen validator):
	  // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
	  // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'willful violation')
	  email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
	  hostname: HOSTNAME,
	  // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
	  ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
	  // optimized http://stackoverflow.com/questions/53497/regular-expression-that-matches-valid-ipv6-addresses
	  ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
	  regex: regex,
	  // uuid: http://tools.ietf.org/html/rfc4122
	  uuid: UUID,
	  // JSON-pointer: https://tools.ietf.org/html/rfc6901
	  // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
	  'json-pointer': JSON_POINTER,
	  'json-pointer-uri-fragment': JSON_POINTER_URI_FRAGMENT,
	  // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
	  'relative-json-pointer': RELATIVE_JSON_POINTER
	};


	formats$1.full = {
	  date: date,
	  time: time,
	  'date-time': date_time,
	  uri: uri,
	  'uri-reference': URIREF,
	  'uri-template': URITEMPLATE,
	  url: URL,
	  email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
	  hostname: HOSTNAME,
	  ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
	  ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
	  regex: regex,
	  uuid: UUID,
	  'json-pointer': JSON_POINTER,
	  'json-pointer-uri-fragment': JSON_POINTER_URI_FRAGMENT,
	  'relative-json-pointer': RELATIVE_JSON_POINTER
	};


	function isLeapYear(year) {
	  // https://tools.ietf.org/html/rfc3339#appendix-C
	  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
	}


	function date(str) {
	  // full-date from http://tools.ietf.org/html/rfc3339#section-5.6
	  var matches = str.match(DATE);
	  if (!matches) return false;

	  var year = +matches[1];
	  var month = +matches[2];
	  var day = +matches[3];

	  return month >= 1 && month <= 12 && day >= 1 &&
	          day <= (month == 2 && isLeapYear(year) ? 29 : DAYS[month]);
	}


	function time(str, full) {
	  var matches = str.match(TIME);
	  if (!matches) return false;

	  var hour = matches[1];
	  var minute = matches[2];
	  var second = matches[3];
	  var timeZone = matches[5];
	  return ((hour <= 23 && minute <= 59 && second <= 59) ||
	          (hour == 23 && minute == 59 && second == 60)) &&
	         (!full || timeZone);
	}


	var DATE_TIME_SEPARATOR = /t|\s/i;
	function date_time(str) {
	  // http://tools.ietf.org/html/rfc3339#section-5.6
	  var dateTime = str.split(DATE_TIME_SEPARATOR);
	  return dateTime.length == 2 && date(dateTime[0]) && time(dateTime[1], true);
	}


	var NOT_URI_FRAGMENT = /\/|:/;
	function uri(str) {
	  // http://jmrware.com/articles/2009/uri_regexp/URI_regex.html + optional protocol + required "."
	  return NOT_URI_FRAGMENT.test(str) && URI.test(str);
	}


	var Z_ANCHOR = /[^\\]\\Z/;
	function regex(str) {
	  if (Z_ANCHOR.test(str)) return false;
	  try {
	    new RegExp(str);
	    return true;
	  } catch(e) {
	    return false;
	  }
	}

	var ref = function generate_ref(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $data = 'data' + ($dataLvl || '');
	  var $valid = 'valid' + $lvl;
	  var $async, $refCode;
	  if ($schema == '#' || $schema == '#/') {
	    if (it.isRoot) {
	      $async = it.async;
	      $refCode = 'validate';
	    } else {
	      $async = it.root.schema.$async === true;
	      $refCode = 'root.refVal[0]';
	    }
	  } else {
	    var $refVal = it.resolveRef(it.baseId, $schema, it.isRoot);
	    if ($refVal === undefined) {
	      var $message = it.MissingRefError.message(it.baseId, $schema);
	      if (it.opts.missingRefs == 'fail') {
	        it.logger.error($message);
	        var $$outStack = $$outStack || [];
	        $$outStack.push(out);
	        out = ''; /* istanbul ignore else */
	        if (it.createErrors !== false) {
	          out += ' { keyword: \'' + ('$ref') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { ref: \'' + (it.util.escapeQuotes($schema)) + '\' } ';
	          if (it.opts.messages !== false) {
	            out += ' , message: \'can\\\'t resolve reference ' + (it.util.escapeQuotes($schema)) + '\' ';
	          }
	          if (it.opts.verbose) {
	            out += ' , schema: ' + (it.util.toQuotedString($schema)) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	          }
	          out += ' } ';
	        } else {
	          out += ' {} ';
	        }
	        var __err = out;
	        out = $$outStack.pop();
	        if (!it.compositeRule && $breakOnError) {
	          /* istanbul ignore if */
	          if (it.async) {
	            out += ' throw new ValidationError([' + (__err) + ']); ';
	          } else {
	            out += ' validate.errors = [' + (__err) + ']; return false; ';
	          }
	        } else {
	          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	        }
	        if ($breakOnError) {
	          out += ' if (false) { ';
	        }
	      } else if (it.opts.missingRefs == 'ignore') {
	        it.logger.warn($message);
	        if ($breakOnError) {
	          out += ' if (true) { ';
	        }
	      } else {
	        throw new it.MissingRefError(it.baseId, $schema, $message);
	      }
	    } else if ($refVal.inline) {
	      var $it = it.util.copy(it);
	      $it.level++;
	      var $nextValid = 'valid' + $it.level;
	      $it.schema = $refVal.schema;
	      $it.schemaPath = '';
	      $it.errSchemaPath = $schema;
	      var $code = it.validate($it).replace(/validate\.schema/g, $refVal.code);
	      out += ' ' + ($code) + ' ';
	      if ($breakOnError) {
	        out += ' if (' + ($nextValid) + ') { ';
	      }
	    } else {
	      $async = $refVal.$async === true || (it.async && $refVal.$async !== false);
	      $refCode = $refVal.code;
	    }
	  }
	  if ($refCode) {
	    var $$outStack = $$outStack || [];
	    $$outStack.push(out);
	    out = '';
	    if (it.opts.passContext) {
	      out += ' ' + ($refCode) + '.call(this, ';
	    } else {
	      out += ' ' + ($refCode) + '( ';
	    }
	    out += ' ' + ($data) + ', (dataPath || \'\')';
	    if (it.errorPath != '""') {
	      out += ' + ' + (it.errorPath);
	    }
	    var $parentData = $dataLvl ? 'data' + (($dataLvl - 1) || '') : 'parentData',
	      $parentDataProperty = $dataLvl ? it.dataPathArr[$dataLvl] : 'parentDataProperty';
	    out += ' , ' + ($parentData) + ' , ' + ($parentDataProperty) + ', rootData)  ';
	    var __callValidate = out;
	    out = $$outStack.pop();
	    if ($async) {
	      if (!it.async) throw new Error('async schema referenced by sync schema');
	      if ($breakOnError) {
	        out += ' var ' + ($valid) + '; ';
	      }
	      out += ' try { await ' + (__callValidate) + '; ';
	      if ($breakOnError) {
	        out += ' ' + ($valid) + ' = true; ';
	      }
	      out += ' } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ';
	      if ($breakOnError) {
	        out += ' ' + ($valid) + ' = false; ';
	      }
	      out += ' } ';
	      if ($breakOnError) {
	        out += ' if (' + ($valid) + ') { ';
	      }
	    } else {
	      out += ' if (!' + (__callValidate) + ') { if (vErrors === null) vErrors = ' + ($refCode) + '.errors; else vErrors = vErrors.concat(' + ($refCode) + '.errors); errors = vErrors.length; } ';
	      if ($breakOnError) {
	        out += ' else { ';
	      }
	    }
	  }
	  return out;
	};

	var allOf = function generate_allOf(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $it = it.util.copy(it);
	  var $closingBraces = '';
	  $it.level++;
	  var $nextValid = 'valid' + $it.level;
	  var $currentBaseId = $it.baseId,
	    $allSchemasEmpty = true;
	  var arr1 = $schema;
	  if (arr1) {
	    var $sch, $i = -1,
	      l1 = arr1.length - 1;
	    while ($i < l1) {
	      $sch = arr1[$i += 1];
	      if ((it.opts.strictKeywords ? (typeof $sch == 'object' && Object.keys($sch).length > 0) || $sch === false : it.util.schemaHasRules($sch, it.RULES.all))) {
	        $allSchemasEmpty = false;
	        $it.schema = $sch;
	        $it.schemaPath = $schemaPath + '[' + $i + ']';
	        $it.errSchemaPath = $errSchemaPath + '/' + $i;
	        out += '  ' + (it.validate($it)) + ' ';
	        $it.baseId = $currentBaseId;
	        if ($breakOnError) {
	          out += ' if (' + ($nextValid) + ') { ';
	          $closingBraces += '}';
	        }
	      }
	    }
	  }
	  if ($breakOnError) {
	    if ($allSchemasEmpty) {
	      out += ' if (true) { ';
	    } else {
	      out += ' ' + ($closingBraces.slice(0, -1)) + ' ';
	    }
	  }
	  return out;
	};

	var anyOf = function generate_anyOf(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $data = 'data' + ($dataLvl || '');
	  var $valid = 'valid' + $lvl;
	  var $errs = 'errs__' + $lvl;
	  var $it = it.util.copy(it);
	  var $closingBraces = '';
	  $it.level++;
	  var $nextValid = 'valid' + $it.level;
	  var $noEmptySchema = $schema.every(function($sch) {
	    return (it.opts.strictKeywords ? (typeof $sch == 'object' && Object.keys($sch).length > 0) || $sch === false : it.util.schemaHasRules($sch, it.RULES.all));
	  });
	  if ($noEmptySchema) {
	    var $currentBaseId = $it.baseId;
	    out += ' var ' + ($errs) + ' = errors; var ' + ($valid) + ' = false;  ';
	    var $wasComposite = it.compositeRule;
	    it.compositeRule = $it.compositeRule = true;
	    var arr1 = $schema;
	    if (arr1) {
	      var $sch, $i = -1,
	        l1 = arr1.length - 1;
	      while ($i < l1) {
	        $sch = arr1[$i += 1];
	        $it.schema = $sch;
	        $it.schemaPath = $schemaPath + '[' + $i + ']';
	        $it.errSchemaPath = $errSchemaPath + '/' + $i;
	        out += '  ' + (it.validate($it)) + ' ';
	        $it.baseId = $currentBaseId;
	        out += ' ' + ($valid) + ' = ' + ($valid) + ' || ' + ($nextValid) + '; if (!' + ($valid) + ') { ';
	        $closingBraces += '}';
	      }
	    }
	    it.compositeRule = $it.compositeRule = $wasComposite;
	    out += ' ' + ($closingBraces) + ' if (!' + ($valid) + ') {   var err =   '; /* istanbul ignore else */
	    if (it.createErrors !== false) {
	      out += ' { keyword: \'' + ('anyOf') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
	      if (it.opts.messages !== false) {
	        out += ' , message: \'should match some schema in anyOf\' ';
	      }
	      if (it.opts.verbose) {
	        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	      }
	      out += ' } ';
	    } else {
	      out += ' {} ';
	    }
	    out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	    if (!it.compositeRule && $breakOnError) {
	      /* istanbul ignore if */
	      if (it.async) {
	        out += ' throw new ValidationError(vErrors); ';
	      } else {
	        out += ' validate.errors = vErrors; return false; ';
	      }
	    }
	    out += ' } else {  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; } ';
	    if (it.opts.allErrors) {
	      out += ' } ';
	    }
	  } else {
	    if ($breakOnError) {
	      out += ' if (true) { ';
	    }
	  }
	  return out;
	};

	var comment = function generate_comment(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $schema = it.schema[$keyword];
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  !it.opts.allErrors;
	  var $comment = it.util.toQuotedString($schema);
	  if (it.opts.$comment === true) {
	    out += ' console.log(' + ($comment) + ');';
	  } else if (typeof it.opts.$comment == 'function') {
	    out += ' self._opts.$comment(' + ($comment) + ', ' + (it.util.toQuotedString($errSchemaPath)) + ', validate.root.schema);';
	  }
	  return out;
	};

	var _const = function generate_const(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $data = 'data' + ($dataLvl || '');
	  var $valid = 'valid' + $lvl;
	  var $isData = it.opts.$data && $schema && $schema.$data;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	  }
	  if (!$isData) {
	    out += ' var schema' + ($lvl) + ' = validate.schema' + ($schemaPath) + ';';
	  }
	  out += 'var ' + ($valid) + ' = equal(' + ($data) + ', schema' + ($lvl) + '); if (!' + ($valid) + ') {   ';
	  var $$outStack = $$outStack || [];
	  $$outStack.push(out);
	  out = ''; /* istanbul ignore else */
	  if (it.createErrors !== false) {
	    out += ' { keyword: \'' + ('const') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { allowedValue: schema' + ($lvl) + ' } ';
	    if (it.opts.messages !== false) {
	      out += ' , message: \'should be equal to constant\' ';
	    }
	    if (it.opts.verbose) {
	      out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	    }
	    out += ' } ';
	  } else {
	    out += ' {} ';
	  }
	  var __err = out;
	  out = $$outStack.pop();
	  if (!it.compositeRule && $breakOnError) {
	    /* istanbul ignore if */
	    if (it.async) {
	      out += ' throw new ValidationError([' + (__err) + ']); ';
	    } else {
	      out += ' validate.errors = [' + (__err) + ']; return false; ';
	    }
	  } else {
	    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	  }
	  out += ' }';
	  if ($breakOnError) {
	    out += ' else { ';
	  }
	  return out;
	};

	var contains = function generate_contains(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $data = 'data' + ($dataLvl || '');
	  var $valid = 'valid' + $lvl;
	  var $errs = 'errs__' + $lvl;
	  var $it = it.util.copy(it);
	  var $closingBraces = '';
	  $it.level++;
	  var $nextValid = 'valid' + $it.level;
	  var $idx = 'i' + $lvl,
	    $dataNxt = $it.dataLevel = it.dataLevel + 1,
	    $nextData = 'data' + $dataNxt,
	    $currentBaseId = it.baseId,
	    $nonEmptySchema = (it.opts.strictKeywords ? (typeof $schema == 'object' && Object.keys($schema).length > 0) || $schema === false : it.util.schemaHasRules($schema, it.RULES.all));
	  out += 'var ' + ($errs) + ' = errors;var ' + ($valid) + ';';
	  if ($nonEmptySchema) {
	    var $wasComposite = it.compositeRule;
	    it.compositeRule = $it.compositeRule = true;
	    $it.schema = $schema;
	    $it.schemaPath = $schemaPath;
	    $it.errSchemaPath = $errSchemaPath;
	    out += ' var ' + ($nextValid) + ' = false; for (var ' + ($idx) + ' = 0; ' + ($idx) + ' < ' + ($data) + '.length; ' + ($idx) + '++) { ';
	    $it.errorPath = it.util.getPathExpr(it.errorPath, $idx, it.opts.jsonPointers, true);
	    var $passData = $data + '[' + $idx + ']';
	    $it.dataPathArr[$dataNxt] = $idx;
	    var $code = it.validate($it);
	    $it.baseId = $currentBaseId;
	    if (it.util.varOccurences($code, $nextData) < 2) {
	      out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
	    } else {
	      out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
	    }
	    out += ' if (' + ($nextValid) + ') break; }  ';
	    it.compositeRule = $it.compositeRule = $wasComposite;
	    out += ' ' + ($closingBraces) + ' if (!' + ($nextValid) + ') {';
	  } else {
	    out += ' if (' + ($data) + '.length == 0) {';
	  }
	  var $$outStack = $$outStack || [];
	  $$outStack.push(out);
	  out = ''; /* istanbul ignore else */
	  if (it.createErrors !== false) {
	    out += ' { keyword: \'' + ('contains') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
	    if (it.opts.messages !== false) {
	      out += ' , message: \'should contain a valid item\' ';
	    }
	    if (it.opts.verbose) {
	      out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	    }
	    out += ' } ';
	  } else {
	    out += ' {} ';
	  }
	  var __err = out;
	  out = $$outStack.pop();
	  if (!it.compositeRule && $breakOnError) {
	    /* istanbul ignore if */
	    if (it.async) {
	      out += ' throw new ValidationError([' + (__err) + ']); ';
	    } else {
	      out += ' validate.errors = [' + (__err) + ']; return false; ';
	    }
	  } else {
	    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	  }
	  out += ' } else { ';
	  if ($nonEmptySchema) {
	    out += '  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; } ';
	  }
	  if (it.opts.allErrors) {
	    out += ' } ';
	  }
	  return out;
	};

	var dependencies = function generate_dependencies(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $data = 'data' + ($dataLvl || '');
	  var $errs = 'errs__' + $lvl;
	  var $it = it.util.copy(it);
	  var $closingBraces = '';
	  $it.level++;
	  var $nextValid = 'valid' + $it.level;
	  var $schemaDeps = {},
	    $propertyDeps = {},
	    $ownProperties = it.opts.ownProperties;
	  for ($property in $schema) {
	    if ($property == '__proto__') continue;
	    var $sch = $schema[$property];
	    var $deps = Array.isArray($sch) ? $propertyDeps : $schemaDeps;
	    $deps[$property] = $sch;
	  }
	  out += 'var ' + ($errs) + ' = errors;';
	  var $currentErrorPath = it.errorPath;
	  out += 'var missing' + ($lvl) + ';';
	  for (var $property in $propertyDeps) {
	    $deps = $propertyDeps[$property];
	    if ($deps.length) {
	      out += ' if ( ' + ($data) + (it.util.getProperty($property)) + ' !== undefined ';
	      if ($ownProperties) {
	        out += ' && Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($property)) + '\') ';
	      }
	      if ($breakOnError) {
	        out += ' && ( ';
	        var arr1 = $deps;
	        if (arr1) {
	          var $propertyKey, $i = -1,
	            l1 = arr1.length - 1;
	          while ($i < l1) {
	            $propertyKey = arr1[$i += 1];
	            if ($i) {
	              out += ' || ';
	            }
	            var $prop = it.util.getProperty($propertyKey),
	              $useData = $data + $prop;
	            out += ' ( ( ' + ($useData) + ' === undefined ';
	            if ($ownProperties) {
	              out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
	            }
	            out += ') && (missing' + ($lvl) + ' = ' + (it.util.toQuotedString(it.opts.jsonPointers ? $propertyKey : $prop)) + ') ) ';
	          }
	        }
	        out += ')) {  ';
	        var $propertyPath = 'missing' + $lvl,
	          $missingProperty = '\' + ' + $propertyPath + ' + \'';
	        if (it.opts._errorDataPathProperty) {
	          it.errorPath = it.opts.jsonPointers ? it.util.getPathExpr($currentErrorPath, $propertyPath, true) : $currentErrorPath + ' + ' + $propertyPath;
	        }
	        var $$outStack = $$outStack || [];
	        $$outStack.push(out);
	        out = ''; /* istanbul ignore else */
	        if (it.createErrors !== false) {
	          out += ' { keyword: \'' + ('dependencies') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { property: \'' + (it.util.escapeQuotes($property)) + '\', missingProperty: \'' + ($missingProperty) + '\', depsCount: ' + ($deps.length) + ', deps: \'' + (it.util.escapeQuotes($deps.length == 1 ? $deps[0] : $deps.join(", "))) + '\' } ';
	          if (it.opts.messages !== false) {
	            out += ' , message: \'should have ';
	            if ($deps.length == 1) {
	              out += 'property ' + (it.util.escapeQuotes($deps[0]));
	            } else {
	              out += 'properties ' + (it.util.escapeQuotes($deps.join(", ")));
	            }
	            out += ' when property ' + (it.util.escapeQuotes($property)) + ' is present\' ';
	          }
	          if (it.opts.verbose) {
	            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	          }
	          out += ' } ';
	        } else {
	          out += ' {} ';
	        }
	        var __err = out;
	        out = $$outStack.pop();
	        if (!it.compositeRule && $breakOnError) {
	          /* istanbul ignore if */
	          if (it.async) {
	            out += ' throw new ValidationError([' + (__err) + ']); ';
	          } else {
	            out += ' validate.errors = [' + (__err) + ']; return false; ';
	          }
	        } else {
	          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	        }
	      } else {
	        out += ' ) { ';
	        var arr2 = $deps;
	        if (arr2) {
	          var $propertyKey, i2 = -1,
	            l2 = arr2.length - 1;
	          while (i2 < l2) {
	            $propertyKey = arr2[i2 += 1];
	            var $prop = it.util.getProperty($propertyKey),
	              $missingProperty = it.util.escapeQuotes($propertyKey),
	              $useData = $data + $prop;
	            if (it.opts._errorDataPathProperty) {
	              it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
	            }
	            out += ' if ( ' + ($useData) + ' === undefined ';
	            if ($ownProperties) {
	              out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
	            }
	            out += ') {  var err =   '; /* istanbul ignore else */
	            if (it.createErrors !== false) {
	              out += ' { keyword: \'' + ('dependencies') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { property: \'' + (it.util.escapeQuotes($property)) + '\', missingProperty: \'' + ($missingProperty) + '\', depsCount: ' + ($deps.length) + ', deps: \'' + (it.util.escapeQuotes($deps.length == 1 ? $deps[0] : $deps.join(", "))) + '\' } ';
	              if (it.opts.messages !== false) {
	                out += ' , message: \'should have ';
	                if ($deps.length == 1) {
	                  out += 'property ' + (it.util.escapeQuotes($deps[0]));
	                } else {
	                  out += 'properties ' + (it.util.escapeQuotes($deps.join(", ")));
	                }
	                out += ' when property ' + (it.util.escapeQuotes($property)) + ' is present\' ';
	              }
	              if (it.opts.verbose) {
	                out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	              }
	              out += ' } ';
	            } else {
	              out += ' {} ';
	            }
	            out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ';
	          }
	        }
	      }
	      out += ' }   ';
	      if ($breakOnError) {
	        $closingBraces += '}';
	        out += ' else { ';
	      }
	    }
	  }
	  it.errorPath = $currentErrorPath;
	  var $currentBaseId = $it.baseId;
	  for (var $property in $schemaDeps) {
	    var $sch = $schemaDeps[$property];
	    if ((it.opts.strictKeywords ? (typeof $sch == 'object' && Object.keys($sch).length > 0) || $sch === false : it.util.schemaHasRules($sch, it.RULES.all))) {
	      out += ' ' + ($nextValid) + ' = true; if ( ' + ($data) + (it.util.getProperty($property)) + ' !== undefined ';
	      if ($ownProperties) {
	        out += ' && Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($property)) + '\') ';
	      }
	      out += ') { ';
	      $it.schema = $sch;
	      $it.schemaPath = $schemaPath + it.util.getProperty($property);
	      $it.errSchemaPath = $errSchemaPath + '/' + it.util.escapeFragment($property);
	      out += '  ' + (it.validate($it)) + ' ';
	      $it.baseId = $currentBaseId;
	      out += ' }  ';
	      if ($breakOnError) {
	        out += ' if (' + ($nextValid) + ') { ';
	        $closingBraces += '}';
	      }
	    }
	  }
	  if ($breakOnError) {
	    out += '   ' + ($closingBraces) + ' if (' + ($errs) + ' == errors) {';
	  }
	  return out;
	};

	var _enum = function generate_enum(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $data = 'data' + ($dataLvl || '');
	  var $valid = 'valid' + $lvl;
	  var $isData = it.opts.$data && $schema && $schema.$data;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	  }
	  var $i = 'i' + $lvl,
	    $vSchema = 'schema' + $lvl;
	  if (!$isData) {
	    out += ' var ' + ($vSchema) + ' = validate.schema' + ($schemaPath) + ';';
	  }
	  out += 'var ' + ($valid) + ';';
	  if ($isData) {
	    out += ' if (schema' + ($lvl) + ' === undefined) ' + ($valid) + ' = true; else if (!Array.isArray(schema' + ($lvl) + ')) ' + ($valid) + ' = false; else {';
	  }
	  out += '' + ($valid) + ' = false;for (var ' + ($i) + '=0; ' + ($i) + '<' + ($vSchema) + '.length; ' + ($i) + '++) if (equal(' + ($data) + ', ' + ($vSchema) + '[' + ($i) + '])) { ' + ($valid) + ' = true; break; }';
	  if ($isData) {
	    out += '  }  ';
	  }
	  out += ' if (!' + ($valid) + ') {   ';
	  var $$outStack = $$outStack || [];
	  $$outStack.push(out);
	  out = ''; /* istanbul ignore else */
	  if (it.createErrors !== false) {
	    out += ' { keyword: \'' + ('enum') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { allowedValues: schema' + ($lvl) + ' } ';
	    if (it.opts.messages !== false) {
	      out += ' , message: \'should be equal to one of the allowed values\' ';
	    }
	    if (it.opts.verbose) {
	      out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	    }
	    out += ' } ';
	  } else {
	    out += ' {} ';
	  }
	  var __err = out;
	  out = $$outStack.pop();
	  if (!it.compositeRule && $breakOnError) {
	    /* istanbul ignore if */
	    if (it.async) {
	      out += ' throw new ValidationError([' + (__err) + ']); ';
	    } else {
	      out += ' validate.errors = [' + (__err) + ']; return false; ';
	    }
	  } else {
	    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	  }
	  out += ' }';
	  if ($breakOnError) {
	    out += ' else { ';
	  }
	  return out;
	};

	var format = function generate_format(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $data = 'data' + ($dataLvl || '');
	  if (it.opts.format === false) {
	    if ($breakOnError) {
	      out += ' if (true) { ';
	    }
	    return out;
	  }
	  var $isData = it.opts.$data && $schema && $schema.$data,
	    $schemaValue;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	    $schemaValue = 'schema' + $lvl;
	  } else {
	    $schemaValue = $schema;
	  }
	  var $unknownFormats = it.opts.unknownFormats,
	    $allowUnknown = Array.isArray($unknownFormats);
	  if ($isData) {
	    var $format = 'format' + $lvl,
	      $isObject = 'isObject' + $lvl,
	      $formatType = 'formatType' + $lvl;
	    out += ' var ' + ($format) + ' = formats[' + ($schemaValue) + ']; var ' + ($isObject) + ' = typeof ' + ($format) + ' == \'object\' && !(' + ($format) + ' instanceof RegExp) && ' + ($format) + '.validate; var ' + ($formatType) + ' = ' + ($isObject) + ' && ' + ($format) + '.type || \'string\'; if (' + ($isObject) + ') { ';
	    if (it.async) {
	      out += ' var async' + ($lvl) + ' = ' + ($format) + '.async; ';
	    }
	    out += ' ' + ($format) + ' = ' + ($format) + '.validate; } if (  ';
	    if ($isData) {
	      out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'string\') || ';
	    }
	    out += ' (';
	    if ($unknownFormats != 'ignore') {
	      out += ' (' + ($schemaValue) + ' && !' + ($format) + ' ';
	      if ($allowUnknown) {
	        out += ' && self._opts.unknownFormats.indexOf(' + ($schemaValue) + ') == -1 ';
	      }
	      out += ') || ';
	    }
	    out += ' (' + ($format) + ' && ' + ($formatType) + ' == \'' + ($ruleType) + '\' && !(typeof ' + ($format) + ' == \'function\' ? ';
	    if (it.async) {
	      out += ' (async' + ($lvl) + ' ? await ' + ($format) + '(' + ($data) + ') : ' + ($format) + '(' + ($data) + ')) ';
	    } else {
	      out += ' ' + ($format) + '(' + ($data) + ') ';
	    }
	    out += ' : ' + ($format) + '.test(' + ($data) + '))))) {';
	  } else {
	    var $format = it.formats[$schema];
	    if (!$format) {
	      if ($unknownFormats == 'ignore') {
	        it.logger.warn('unknown format "' + $schema + '" ignored in schema at path "' + it.errSchemaPath + '"');
	        if ($breakOnError) {
	          out += ' if (true) { ';
	        }
	        return out;
	      } else if ($allowUnknown && $unknownFormats.indexOf($schema) >= 0) {
	        if ($breakOnError) {
	          out += ' if (true) { ';
	        }
	        return out;
	      } else {
	        throw new Error('unknown format "' + $schema + '" is used in schema at path "' + it.errSchemaPath + '"');
	      }
	    }
	    var $isObject = typeof $format == 'object' && !($format instanceof RegExp) && $format.validate;
	    var $formatType = $isObject && $format.type || 'string';
	    if ($isObject) {
	      var $async = $format.async === true;
	      $format = $format.validate;
	    }
	    if ($formatType != $ruleType) {
	      if ($breakOnError) {
	        out += ' if (true) { ';
	      }
	      return out;
	    }
	    if ($async) {
	      if (!it.async) throw new Error('async format in sync schema');
	      var $formatRef = 'formats' + it.util.getProperty($schema) + '.validate';
	      out += ' if (!(await ' + ($formatRef) + '(' + ($data) + '))) { ';
	    } else {
	      out += ' if (! ';
	      var $formatRef = 'formats' + it.util.getProperty($schema);
	      if ($isObject) $formatRef += '.validate';
	      if (typeof $format == 'function') {
	        out += ' ' + ($formatRef) + '(' + ($data) + ') ';
	      } else {
	        out += ' ' + ($formatRef) + '.test(' + ($data) + ') ';
	      }
	      out += ') { ';
	    }
	  }
	  var $$outStack = $$outStack || [];
	  $$outStack.push(out);
	  out = ''; /* istanbul ignore else */
	  if (it.createErrors !== false) {
	    out += ' { keyword: \'' + ('format') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { format:  ';
	    if ($isData) {
	      out += '' + ($schemaValue);
	    } else {
	      out += '' + (it.util.toQuotedString($schema));
	    }
	    out += '  } ';
	    if (it.opts.messages !== false) {
	      out += ' , message: \'should match format "';
	      if ($isData) {
	        out += '\' + ' + ($schemaValue) + ' + \'';
	      } else {
	        out += '' + (it.util.escapeQuotes($schema));
	      }
	      out += '"\' ';
	    }
	    if (it.opts.verbose) {
	      out += ' , schema:  ';
	      if ($isData) {
	        out += 'validate.schema' + ($schemaPath);
	      } else {
	        out += '' + (it.util.toQuotedString($schema));
	      }
	      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	    }
	    out += ' } ';
	  } else {
	    out += ' {} ';
	  }
	  var __err = out;
	  out = $$outStack.pop();
	  if (!it.compositeRule && $breakOnError) {
	    /* istanbul ignore if */
	    if (it.async) {
	      out += ' throw new ValidationError([' + (__err) + ']); ';
	    } else {
	      out += ' validate.errors = [' + (__err) + ']; return false; ';
	    }
	  } else {
	    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	  }
	  out += ' } ';
	  if ($breakOnError) {
	    out += ' else { ';
	  }
	  return out;
	};

	var _if = function generate_if(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $data = 'data' + ($dataLvl || '');
	  var $valid = 'valid' + $lvl;
	  var $errs = 'errs__' + $lvl;
	  var $it = it.util.copy(it);
	  $it.level++;
	  var $nextValid = 'valid' + $it.level;
	  var $thenSch = it.schema['then'],
	    $elseSch = it.schema['else'],
	    $thenPresent = $thenSch !== undefined && (it.opts.strictKeywords ? (typeof $thenSch == 'object' && Object.keys($thenSch).length > 0) || $thenSch === false : it.util.schemaHasRules($thenSch, it.RULES.all)),
	    $elsePresent = $elseSch !== undefined && (it.opts.strictKeywords ? (typeof $elseSch == 'object' && Object.keys($elseSch).length > 0) || $elseSch === false : it.util.schemaHasRules($elseSch, it.RULES.all)),
	    $currentBaseId = $it.baseId;
	  if ($thenPresent || $elsePresent) {
	    var $ifClause;
	    $it.createErrors = false;
	    $it.schema = $schema;
	    $it.schemaPath = $schemaPath;
	    $it.errSchemaPath = $errSchemaPath;
	    out += ' var ' + ($errs) + ' = errors; var ' + ($valid) + ' = true;  ';
	    var $wasComposite = it.compositeRule;
	    it.compositeRule = $it.compositeRule = true;
	    out += '  ' + (it.validate($it)) + ' ';
	    $it.baseId = $currentBaseId;
	    $it.createErrors = true;
	    out += '  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; }  ';
	    it.compositeRule = $it.compositeRule = $wasComposite;
	    if ($thenPresent) {
	      out += ' if (' + ($nextValid) + ') {  ';
	      $it.schema = it.schema['then'];
	      $it.schemaPath = it.schemaPath + '.then';
	      $it.errSchemaPath = it.errSchemaPath + '/then';
	      out += '  ' + (it.validate($it)) + ' ';
	      $it.baseId = $currentBaseId;
	      out += ' ' + ($valid) + ' = ' + ($nextValid) + '; ';
	      if ($thenPresent && $elsePresent) {
	        $ifClause = 'ifClause' + $lvl;
	        out += ' var ' + ($ifClause) + ' = \'then\'; ';
	      } else {
	        $ifClause = '\'then\'';
	      }
	      out += ' } ';
	      if ($elsePresent) {
	        out += ' else { ';
	      }
	    } else {
	      out += ' if (!' + ($nextValid) + ') { ';
	    }
	    if ($elsePresent) {
	      $it.schema = it.schema['else'];
	      $it.schemaPath = it.schemaPath + '.else';
	      $it.errSchemaPath = it.errSchemaPath + '/else';
	      out += '  ' + (it.validate($it)) + ' ';
	      $it.baseId = $currentBaseId;
	      out += ' ' + ($valid) + ' = ' + ($nextValid) + '; ';
	      if ($thenPresent && $elsePresent) {
	        $ifClause = 'ifClause' + $lvl;
	        out += ' var ' + ($ifClause) + ' = \'else\'; ';
	      } else {
	        $ifClause = '\'else\'';
	      }
	      out += ' } ';
	    }
	    out += ' if (!' + ($valid) + ') {   var err =   '; /* istanbul ignore else */
	    if (it.createErrors !== false) {
	      out += ' { keyword: \'' + ('if') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { failingKeyword: ' + ($ifClause) + ' } ';
	      if (it.opts.messages !== false) {
	        out += ' , message: \'should match "\' + ' + ($ifClause) + ' + \'" schema\' ';
	      }
	      if (it.opts.verbose) {
	        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	      }
	      out += ' } ';
	    } else {
	      out += ' {} ';
	    }
	    out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	    if (!it.compositeRule && $breakOnError) {
	      /* istanbul ignore if */
	      if (it.async) {
	        out += ' throw new ValidationError(vErrors); ';
	      } else {
	        out += ' validate.errors = vErrors; return false; ';
	      }
	    }
	    out += ' }   ';
	    if ($breakOnError) {
	      out += ' else { ';
	    }
	  } else {
	    if ($breakOnError) {
	      out += ' if (true) { ';
	    }
	  }
	  return out;
	};

	var items = function generate_items(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $data = 'data' + ($dataLvl || '');
	  var $valid = 'valid' + $lvl;
	  var $errs = 'errs__' + $lvl;
	  var $it = it.util.copy(it);
	  var $closingBraces = '';
	  $it.level++;
	  var $nextValid = 'valid' + $it.level;
	  var $idx = 'i' + $lvl,
	    $dataNxt = $it.dataLevel = it.dataLevel + 1,
	    $nextData = 'data' + $dataNxt,
	    $currentBaseId = it.baseId;
	  out += 'var ' + ($errs) + ' = errors;var ' + ($valid) + ';';
	  if (Array.isArray($schema)) {
	    var $additionalItems = it.schema.additionalItems;
	    if ($additionalItems === false) {
	      out += ' ' + ($valid) + ' = ' + ($data) + '.length <= ' + ($schema.length) + '; ';
	      var $currErrSchemaPath = $errSchemaPath;
	      $errSchemaPath = it.errSchemaPath + '/additionalItems';
	      out += '  if (!' + ($valid) + ') {   ';
	      var $$outStack = $$outStack || [];
	      $$outStack.push(out);
	      out = ''; /* istanbul ignore else */
	      if (it.createErrors !== false) {
	        out += ' { keyword: \'' + ('additionalItems') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { limit: ' + ($schema.length) + ' } ';
	        if (it.opts.messages !== false) {
	          out += ' , message: \'should NOT have more than ' + ($schema.length) + ' items\' ';
	        }
	        if (it.opts.verbose) {
	          out += ' , schema: false , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	        }
	        out += ' } ';
	      } else {
	        out += ' {} ';
	      }
	      var __err = out;
	      out = $$outStack.pop();
	      if (!it.compositeRule && $breakOnError) {
	        /* istanbul ignore if */
	        if (it.async) {
	          out += ' throw new ValidationError([' + (__err) + ']); ';
	        } else {
	          out += ' validate.errors = [' + (__err) + ']; return false; ';
	        }
	      } else {
	        out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	      }
	      out += ' } ';
	      $errSchemaPath = $currErrSchemaPath;
	      if ($breakOnError) {
	        $closingBraces += '}';
	        out += ' else { ';
	      }
	    }
	    var arr1 = $schema;
	    if (arr1) {
	      var $sch, $i = -1,
	        l1 = arr1.length - 1;
	      while ($i < l1) {
	        $sch = arr1[$i += 1];
	        if ((it.opts.strictKeywords ? (typeof $sch == 'object' && Object.keys($sch).length > 0) || $sch === false : it.util.schemaHasRules($sch, it.RULES.all))) {
	          out += ' ' + ($nextValid) + ' = true; if (' + ($data) + '.length > ' + ($i) + ') { ';
	          var $passData = $data + '[' + $i + ']';
	          $it.schema = $sch;
	          $it.schemaPath = $schemaPath + '[' + $i + ']';
	          $it.errSchemaPath = $errSchemaPath + '/' + $i;
	          $it.errorPath = it.util.getPathExpr(it.errorPath, $i, it.opts.jsonPointers, true);
	          $it.dataPathArr[$dataNxt] = $i;
	          var $code = it.validate($it);
	          $it.baseId = $currentBaseId;
	          if (it.util.varOccurences($code, $nextData) < 2) {
	            out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
	          } else {
	            out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
	          }
	          out += ' }  ';
	          if ($breakOnError) {
	            out += ' if (' + ($nextValid) + ') { ';
	            $closingBraces += '}';
	          }
	        }
	      }
	    }
	    if (typeof $additionalItems == 'object' && (it.opts.strictKeywords ? (typeof $additionalItems == 'object' && Object.keys($additionalItems).length > 0) || $additionalItems === false : it.util.schemaHasRules($additionalItems, it.RULES.all))) {
	      $it.schema = $additionalItems;
	      $it.schemaPath = it.schemaPath + '.additionalItems';
	      $it.errSchemaPath = it.errSchemaPath + '/additionalItems';
	      out += ' ' + ($nextValid) + ' = true; if (' + ($data) + '.length > ' + ($schema.length) + ') {  for (var ' + ($idx) + ' = ' + ($schema.length) + '; ' + ($idx) + ' < ' + ($data) + '.length; ' + ($idx) + '++) { ';
	      $it.errorPath = it.util.getPathExpr(it.errorPath, $idx, it.opts.jsonPointers, true);
	      var $passData = $data + '[' + $idx + ']';
	      $it.dataPathArr[$dataNxt] = $idx;
	      var $code = it.validate($it);
	      $it.baseId = $currentBaseId;
	      if (it.util.varOccurences($code, $nextData) < 2) {
	        out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
	      } else {
	        out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
	      }
	      if ($breakOnError) {
	        out += ' if (!' + ($nextValid) + ') break; ';
	      }
	      out += ' } }  ';
	      if ($breakOnError) {
	        out += ' if (' + ($nextValid) + ') { ';
	        $closingBraces += '}';
	      }
	    }
	  } else if ((it.opts.strictKeywords ? (typeof $schema == 'object' && Object.keys($schema).length > 0) || $schema === false : it.util.schemaHasRules($schema, it.RULES.all))) {
	    $it.schema = $schema;
	    $it.schemaPath = $schemaPath;
	    $it.errSchemaPath = $errSchemaPath;
	    out += '  for (var ' + ($idx) + ' = ' + (0) + '; ' + ($idx) + ' < ' + ($data) + '.length; ' + ($idx) + '++) { ';
	    $it.errorPath = it.util.getPathExpr(it.errorPath, $idx, it.opts.jsonPointers, true);
	    var $passData = $data + '[' + $idx + ']';
	    $it.dataPathArr[$dataNxt] = $idx;
	    var $code = it.validate($it);
	    $it.baseId = $currentBaseId;
	    if (it.util.varOccurences($code, $nextData) < 2) {
	      out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
	    } else {
	      out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
	    }
	    if ($breakOnError) {
	      out += ' if (!' + ($nextValid) + ') break; ';
	    }
	    out += ' }';
	  }
	  if ($breakOnError) {
	    out += ' ' + ($closingBraces) + ' if (' + ($errs) + ' == errors) {';
	  }
	  return out;
	};

	var _limit = function generate__limit(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $errorKeyword;
	  var $data = 'data' + ($dataLvl || '');
	  var $isData = it.opts.$data && $schema && $schema.$data,
	    $schemaValue;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	    $schemaValue = 'schema' + $lvl;
	  } else {
	    $schemaValue = $schema;
	  }
	  var $isMax = $keyword == 'maximum',
	    $exclusiveKeyword = $isMax ? 'exclusiveMaximum' : 'exclusiveMinimum',
	    $schemaExcl = it.schema[$exclusiveKeyword],
	    $isDataExcl = it.opts.$data && $schemaExcl && $schemaExcl.$data,
	    $op = $isMax ? '<' : '>',
	    $notOp = $isMax ? '>' : '<',
	    $errorKeyword = undefined;
	  if (!($isData || typeof $schema == 'number' || $schema === undefined)) {
	    throw new Error($keyword + ' must be number');
	  }
	  if (!($isDataExcl || $schemaExcl === undefined || typeof $schemaExcl == 'number' || typeof $schemaExcl == 'boolean')) {
	    throw new Error($exclusiveKeyword + ' must be number or boolean');
	  }
	  if ($isDataExcl) {
	    var $schemaValueExcl = it.util.getData($schemaExcl.$data, $dataLvl, it.dataPathArr),
	      $exclusive = 'exclusive' + $lvl,
	      $exclType = 'exclType' + $lvl,
	      $exclIsNumber = 'exclIsNumber' + $lvl,
	      $opExpr = 'op' + $lvl,
	      $opStr = '\' + ' + $opExpr + ' + \'';
	    out += ' var schemaExcl' + ($lvl) + ' = ' + ($schemaValueExcl) + '; ';
	    $schemaValueExcl = 'schemaExcl' + $lvl;
	    out += ' var ' + ($exclusive) + '; var ' + ($exclType) + ' = typeof ' + ($schemaValueExcl) + '; if (' + ($exclType) + ' != \'boolean\' && ' + ($exclType) + ' != \'undefined\' && ' + ($exclType) + ' != \'number\') { ';
	    var $errorKeyword = $exclusiveKeyword;
	    var $$outStack = $$outStack || [];
	    $$outStack.push(out);
	    out = ''; /* istanbul ignore else */
	    if (it.createErrors !== false) {
	      out += ' { keyword: \'' + ($errorKeyword || '_exclusiveLimit') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
	      if (it.opts.messages !== false) {
	        out += ' , message: \'' + ($exclusiveKeyword) + ' should be boolean\' ';
	      }
	      if (it.opts.verbose) {
	        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	      }
	      out += ' } ';
	    } else {
	      out += ' {} ';
	    }
	    var __err = out;
	    out = $$outStack.pop();
	    if (!it.compositeRule && $breakOnError) {
	      /* istanbul ignore if */
	      if (it.async) {
	        out += ' throw new ValidationError([' + (__err) + ']); ';
	      } else {
	        out += ' validate.errors = [' + (__err) + ']; return false; ';
	      }
	    } else {
	      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	    }
	    out += ' } else if ( ';
	    if ($isData) {
	      out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
	    }
	    out += ' ' + ($exclType) + ' == \'number\' ? ( (' + ($exclusive) + ' = ' + ($schemaValue) + ' === undefined || ' + ($schemaValueExcl) + ' ' + ($op) + '= ' + ($schemaValue) + ') ? ' + ($data) + ' ' + ($notOp) + '= ' + ($schemaValueExcl) + ' : ' + ($data) + ' ' + ($notOp) + ' ' + ($schemaValue) + ' ) : ( (' + ($exclusive) + ' = ' + ($schemaValueExcl) + ' === true) ? ' + ($data) + ' ' + ($notOp) + '= ' + ($schemaValue) + ' : ' + ($data) + ' ' + ($notOp) + ' ' + ($schemaValue) + ' ) || ' + ($data) + ' !== ' + ($data) + ') { var op' + ($lvl) + ' = ' + ($exclusive) + ' ? \'' + ($op) + '\' : \'' + ($op) + '=\'; ';
	    if ($schema === undefined) {
	      $errorKeyword = $exclusiveKeyword;
	      $errSchemaPath = it.errSchemaPath + '/' + $exclusiveKeyword;
	      $schemaValue = $schemaValueExcl;
	      $isData = $isDataExcl;
	    }
	  } else {
	    var $exclIsNumber = typeof $schemaExcl == 'number',
	      $opStr = $op;
	    if ($exclIsNumber && $isData) {
	      var $opExpr = '\'' + $opStr + '\'';
	      out += ' if ( ';
	      if ($isData) {
	        out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
	      }
	      out += ' ( ' + ($schemaValue) + ' === undefined || ' + ($schemaExcl) + ' ' + ($op) + '= ' + ($schemaValue) + ' ? ' + ($data) + ' ' + ($notOp) + '= ' + ($schemaExcl) + ' : ' + ($data) + ' ' + ($notOp) + ' ' + ($schemaValue) + ' ) || ' + ($data) + ' !== ' + ($data) + ') { ';
	    } else {
	      if ($exclIsNumber && $schema === undefined) {
	        $exclusive = true;
	        $errorKeyword = $exclusiveKeyword;
	        $errSchemaPath = it.errSchemaPath + '/' + $exclusiveKeyword;
	        $schemaValue = $schemaExcl;
	        $notOp += '=';
	      } else {
	        if ($exclIsNumber) $schemaValue = Math[$isMax ? 'min' : 'max']($schemaExcl, $schema);
	        if ($schemaExcl === ($exclIsNumber ? $schemaValue : true)) {
	          $exclusive = true;
	          $errorKeyword = $exclusiveKeyword;
	          $errSchemaPath = it.errSchemaPath + '/' + $exclusiveKeyword;
	          $notOp += '=';
	        } else {
	          $exclusive = false;
	          $opStr += '=';
	        }
	      }
	      var $opExpr = '\'' + $opStr + '\'';
	      out += ' if ( ';
	      if ($isData) {
	        out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
	      }
	      out += ' ' + ($data) + ' ' + ($notOp) + ' ' + ($schemaValue) + ' || ' + ($data) + ' !== ' + ($data) + ') { ';
	    }
	  }
	  $errorKeyword = $errorKeyword || $keyword;
	  var $$outStack = $$outStack || [];
	  $$outStack.push(out);
	  out = ''; /* istanbul ignore else */
	  if (it.createErrors !== false) {
	    out += ' { keyword: \'' + ($errorKeyword || '_limit') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { comparison: ' + ($opExpr) + ', limit: ' + ($schemaValue) + ', exclusive: ' + ($exclusive) + ' } ';
	    if (it.opts.messages !== false) {
	      out += ' , message: \'should be ' + ($opStr) + ' ';
	      if ($isData) {
	        out += '\' + ' + ($schemaValue);
	      } else {
	        out += '' + ($schemaValue) + '\'';
	      }
	    }
	    if (it.opts.verbose) {
	      out += ' , schema:  ';
	      if ($isData) {
	        out += 'validate.schema' + ($schemaPath);
	      } else {
	        out += '' + ($schema);
	      }
	      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	    }
	    out += ' } ';
	  } else {
	    out += ' {} ';
	  }
	  var __err = out;
	  out = $$outStack.pop();
	  if (!it.compositeRule && $breakOnError) {
	    /* istanbul ignore if */
	    if (it.async) {
	      out += ' throw new ValidationError([' + (__err) + ']); ';
	    } else {
	      out += ' validate.errors = [' + (__err) + ']; return false; ';
	    }
	  } else {
	    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	  }
	  out += ' } ';
	  if ($breakOnError) {
	    out += ' else { ';
	  }
	  return out;
	};

	var _limitItems = function generate__limitItems(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $errorKeyword;
	  var $data = 'data' + ($dataLvl || '');
	  var $isData = it.opts.$data && $schema && $schema.$data,
	    $schemaValue;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	    $schemaValue = 'schema' + $lvl;
	  } else {
	    $schemaValue = $schema;
	  }
	  if (!($isData || typeof $schema == 'number')) {
	    throw new Error($keyword + ' must be number');
	  }
	  var $op = $keyword == 'maxItems' ? '>' : '<';
	  out += 'if ( ';
	  if ($isData) {
	    out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
	  }
	  out += ' ' + ($data) + '.length ' + ($op) + ' ' + ($schemaValue) + ') { ';
	  var $errorKeyword = $keyword;
	  var $$outStack = $$outStack || [];
	  $$outStack.push(out);
	  out = ''; /* istanbul ignore else */
	  if (it.createErrors !== false) {
	    out += ' { keyword: \'' + ($errorKeyword || '_limitItems') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { limit: ' + ($schemaValue) + ' } ';
	    if (it.opts.messages !== false) {
	      out += ' , message: \'should NOT have ';
	      if ($keyword == 'maxItems') {
	        out += 'more';
	      } else {
	        out += 'fewer';
	      }
	      out += ' than ';
	      if ($isData) {
	        out += '\' + ' + ($schemaValue) + ' + \'';
	      } else {
	        out += '' + ($schema);
	      }
	      out += ' items\' ';
	    }
	    if (it.opts.verbose) {
	      out += ' , schema:  ';
	      if ($isData) {
	        out += 'validate.schema' + ($schemaPath);
	      } else {
	        out += '' + ($schema);
	      }
	      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	    }
	    out += ' } ';
	  } else {
	    out += ' {} ';
	  }
	  var __err = out;
	  out = $$outStack.pop();
	  if (!it.compositeRule && $breakOnError) {
	    /* istanbul ignore if */
	    if (it.async) {
	      out += ' throw new ValidationError([' + (__err) + ']); ';
	    } else {
	      out += ' validate.errors = [' + (__err) + ']; return false; ';
	    }
	  } else {
	    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	  }
	  out += '} ';
	  if ($breakOnError) {
	    out += ' else { ';
	  }
	  return out;
	};

	var _limitLength = function generate__limitLength(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $errorKeyword;
	  var $data = 'data' + ($dataLvl || '');
	  var $isData = it.opts.$data && $schema && $schema.$data,
	    $schemaValue;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	    $schemaValue = 'schema' + $lvl;
	  } else {
	    $schemaValue = $schema;
	  }
	  if (!($isData || typeof $schema == 'number')) {
	    throw new Error($keyword + ' must be number');
	  }
	  var $op = $keyword == 'maxLength' ? '>' : '<';
	  out += 'if ( ';
	  if ($isData) {
	    out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
	  }
	  if (it.opts.unicode === false) {
	    out += ' ' + ($data) + '.length ';
	  } else {
	    out += ' ucs2length(' + ($data) + ') ';
	  }
	  out += ' ' + ($op) + ' ' + ($schemaValue) + ') { ';
	  var $errorKeyword = $keyword;
	  var $$outStack = $$outStack || [];
	  $$outStack.push(out);
	  out = ''; /* istanbul ignore else */
	  if (it.createErrors !== false) {
	    out += ' { keyword: \'' + ($errorKeyword || '_limitLength') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { limit: ' + ($schemaValue) + ' } ';
	    if (it.opts.messages !== false) {
	      out += ' , message: \'should NOT be ';
	      if ($keyword == 'maxLength') {
	        out += 'longer';
	      } else {
	        out += 'shorter';
	      }
	      out += ' than ';
	      if ($isData) {
	        out += '\' + ' + ($schemaValue) + ' + \'';
	      } else {
	        out += '' + ($schema);
	      }
	      out += ' characters\' ';
	    }
	    if (it.opts.verbose) {
	      out += ' , schema:  ';
	      if ($isData) {
	        out += 'validate.schema' + ($schemaPath);
	      } else {
	        out += '' + ($schema);
	      }
	      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	    }
	    out += ' } ';
	  } else {
	    out += ' {} ';
	  }
	  var __err = out;
	  out = $$outStack.pop();
	  if (!it.compositeRule && $breakOnError) {
	    /* istanbul ignore if */
	    if (it.async) {
	      out += ' throw new ValidationError([' + (__err) + ']); ';
	    } else {
	      out += ' validate.errors = [' + (__err) + ']; return false; ';
	    }
	  } else {
	    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	  }
	  out += '} ';
	  if ($breakOnError) {
	    out += ' else { ';
	  }
	  return out;
	};

	var _limitProperties = function generate__limitProperties(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $errorKeyword;
	  var $data = 'data' + ($dataLvl || '');
	  var $isData = it.opts.$data && $schema && $schema.$data,
	    $schemaValue;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	    $schemaValue = 'schema' + $lvl;
	  } else {
	    $schemaValue = $schema;
	  }
	  if (!($isData || typeof $schema == 'number')) {
	    throw new Error($keyword + ' must be number');
	  }
	  var $op = $keyword == 'maxProperties' ? '>' : '<';
	  out += 'if ( ';
	  if ($isData) {
	    out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
	  }
	  out += ' Object.keys(' + ($data) + ').length ' + ($op) + ' ' + ($schemaValue) + ') { ';
	  var $errorKeyword = $keyword;
	  var $$outStack = $$outStack || [];
	  $$outStack.push(out);
	  out = ''; /* istanbul ignore else */
	  if (it.createErrors !== false) {
	    out += ' { keyword: \'' + ($errorKeyword || '_limitProperties') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { limit: ' + ($schemaValue) + ' } ';
	    if (it.opts.messages !== false) {
	      out += ' , message: \'should NOT have ';
	      if ($keyword == 'maxProperties') {
	        out += 'more';
	      } else {
	        out += 'fewer';
	      }
	      out += ' than ';
	      if ($isData) {
	        out += '\' + ' + ($schemaValue) + ' + \'';
	      } else {
	        out += '' + ($schema);
	      }
	      out += ' properties\' ';
	    }
	    if (it.opts.verbose) {
	      out += ' , schema:  ';
	      if ($isData) {
	        out += 'validate.schema' + ($schemaPath);
	      } else {
	        out += '' + ($schema);
	      }
	      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	    }
	    out += ' } ';
	  } else {
	    out += ' {} ';
	  }
	  var __err = out;
	  out = $$outStack.pop();
	  if (!it.compositeRule && $breakOnError) {
	    /* istanbul ignore if */
	    if (it.async) {
	      out += ' throw new ValidationError([' + (__err) + ']); ';
	    } else {
	      out += ' validate.errors = [' + (__err) + ']; return false; ';
	    }
	  } else {
	    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	  }
	  out += '} ';
	  if ($breakOnError) {
	    out += ' else { ';
	  }
	  return out;
	};

	var multipleOf = function generate_multipleOf(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $data = 'data' + ($dataLvl || '');
	  var $isData = it.opts.$data && $schema && $schema.$data,
	    $schemaValue;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	    $schemaValue = 'schema' + $lvl;
	  } else {
	    $schemaValue = $schema;
	  }
	  if (!($isData || typeof $schema == 'number')) {
	    throw new Error($keyword + ' must be number');
	  }
	  out += 'var division' + ($lvl) + ';if (';
	  if ($isData) {
	    out += ' ' + ($schemaValue) + ' !== undefined && ( typeof ' + ($schemaValue) + ' != \'number\' || ';
	  }
	  out += ' (division' + ($lvl) + ' = ' + ($data) + ' / ' + ($schemaValue) + ', ';
	  if (it.opts.multipleOfPrecision) {
	    out += ' Math.abs(Math.round(division' + ($lvl) + ') - division' + ($lvl) + ') > 1e-' + (it.opts.multipleOfPrecision) + ' ';
	  } else {
	    out += ' division' + ($lvl) + ' !== parseInt(division' + ($lvl) + ') ';
	  }
	  out += ' ) ';
	  if ($isData) {
	    out += '  )  ';
	  }
	  out += ' ) {   ';
	  var $$outStack = $$outStack || [];
	  $$outStack.push(out);
	  out = ''; /* istanbul ignore else */
	  if (it.createErrors !== false) {
	    out += ' { keyword: \'' + ('multipleOf') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { multipleOf: ' + ($schemaValue) + ' } ';
	    if (it.opts.messages !== false) {
	      out += ' , message: \'should be multiple of ';
	      if ($isData) {
	        out += '\' + ' + ($schemaValue);
	      } else {
	        out += '' + ($schemaValue) + '\'';
	      }
	    }
	    if (it.opts.verbose) {
	      out += ' , schema:  ';
	      if ($isData) {
	        out += 'validate.schema' + ($schemaPath);
	      } else {
	        out += '' + ($schema);
	      }
	      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	    }
	    out += ' } ';
	  } else {
	    out += ' {} ';
	  }
	  var __err = out;
	  out = $$outStack.pop();
	  if (!it.compositeRule && $breakOnError) {
	    /* istanbul ignore if */
	    if (it.async) {
	      out += ' throw new ValidationError([' + (__err) + ']); ';
	    } else {
	      out += ' validate.errors = [' + (__err) + ']; return false; ';
	    }
	  } else {
	    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	  }
	  out += '} ';
	  if ($breakOnError) {
	    out += ' else { ';
	  }
	  return out;
	};

	var not = function generate_not(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $data = 'data' + ($dataLvl || '');
	  var $errs = 'errs__' + $lvl;
	  var $it = it.util.copy(it);
	  $it.level++;
	  var $nextValid = 'valid' + $it.level;
	  if ((it.opts.strictKeywords ? (typeof $schema == 'object' && Object.keys($schema).length > 0) || $schema === false : it.util.schemaHasRules($schema, it.RULES.all))) {
	    $it.schema = $schema;
	    $it.schemaPath = $schemaPath;
	    $it.errSchemaPath = $errSchemaPath;
	    out += ' var ' + ($errs) + ' = errors;  ';
	    var $wasComposite = it.compositeRule;
	    it.compositeRule = $it.compositeRule = true;
	    $it.createErrors = false;
	    var $allErrorsOption;
	    if ($it.opts.allErrors) {
	      $allErrorsOption = $it.opts.allErrors;
	      $it.opts.allErrors = false;
	    }
	    out += ' ' + (it.validate($it)) + ' ';
	    $it.createErrors = true;
	    if ($allErrorsOption) $it.opts.allErrors = $allErrorsOption;
	    it.compositeRule = $it.compositeRule = $wasComposite;
	    out += ' if (' + ($nextValid) + ') {   ';
	    var $$outStack = $$outStack || [];
	    $$outStack.push(out);
	    out = ''; /* istanbul ignore else */
	    if (it.createErrors !== false) {
	      out += ' { keyword: \'' + ('not') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
	      if (it.opts.messages !== false) {
	        out += ' , message: \'should NOT be valid\' ';
	      }
	      if (it.opts.verbose) {
	        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	      }
	      out += ' } ';
	    } else {
	      out += ' {} ';
	    }
	    var __err = out;
	    out = $$outStack.pop();
	    if (!it.compositeRule && $breakOnError) {
	      /* istanbul ignore if */
	      if (it.async) {
	        out += ' throw new ValidationError([' + (__err) + ']); ';
	      } else {
	        out += ' validate.errors = [' + (__err) + ']; return false; ';
	      }
	    } else {
	      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	    }
	    out += ' } else {  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; } ';
	    if (it.opts.allErrors) {
	      out += ' } ';
	    }
	  } else {
	    out += '  var err =   '; /* istanbul ignore else */
	    if (it.createErrors !== false) {
	      out += ' { keyword: \'' + ('not') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
	      if (it.opts.messages !== false) {
	        out += ' , message: \'should NOT be valid\' ';
	      }
	      if (it.opts.verbose) {
	        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	      }
	      out += ' } ';
	    } else {
	      out += ' {} ';
	    }
	    out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	    if ($breakOnError) {
	      out += ' if (false) { ';
	    }
	  }
	  return out;
	};

	var oneOf = function generate_oneOf(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $data = 'data' + ($dataLvl || '');
	  var $valid = 'valid' + $lvl;
	  var $errs = 'errs__' + $lvl;
	  var $it = it.util.copy(it);
	  var $closingBraces = '';
	  $it.level++;
	  var $nextValid = 'valid' + $it.level;
	  var $currentBaseId = $it.baseId,
	    $prevValid = 'prevValid' + $lvl,
	    $passingSchemas = 'passingSchemas' + $lvl;
	  out += 'var ' + ($errs) + ' = errors , ' + ($prevValid) + ' = false , ' + ($valid) + ' = false , ' + ($passingSchemas) + ' = null; ';
	  var $wasComposite = it.compositeRule;
	  it.compositeRule = $it.compositeRule = true;
	  var arr1 = $schema;
	  if (arr1) {
	    var $sch, $i = -1,
	      l1 = arr1.length - 1;
	    while ($i < l1) {
	      $sch = arr1[$i += 1];
	      if ((it.opts.strictKeywords ? (typeof $sch == 'object' && Object.keys($sch).length > 0) || $sch === false : it.util.schemaHasRules($sch, it.RULES.all))) {
	        $it.schema = $sch;
	        $it.schemaPath = $schemaPath + '[' + $i + ']';
	        $it.errSchemaPath = $errSchemaPath + '/' + $i;
	        out += '  ' + (it.validate($it)) + ' ';
	        $it.baseId = $currentBaseId;
	      } else {
	        out += ' var ' + ($nextValid) + ' = true; ';
	      }
	      if ($i) {
	        out += ' if (' + ($nextValid) + ' && ' + ($prevValid) + ') { ' + ($valid) + ' = false; ' + ($passingSchemas) + ' = [' + ($passingSchemas) + ', ' + ($i) + ']; } else { ';
	        $closingBraces += '}';
	      }
	      out += ' if (' + ($nextValid) + ') { ' + ($valid) + ' = ' + ($prevValid) + ' = true; ' + ($passingSchemas) + ' = ' + ($i) + '; }';
	    }
	  }
	  it.compositeRule = $it.compositeRule = $wasComposite;
	  out += '' + ($closingBraces) + 'if (!' + ($valid) + ') {   var err =   '; /* istanbul ignore else */
	  if (it.createErrors !== false) {
	    out += ' { keyword: \'' + ('oneOf') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { passingSchemas: ' + ($passingSchemas) + ' } ';
	    if (it.opts.messages !== false) {
	      out += ' , message: \'should match exactly one schema in oneOf\' ';
	    }
	    if (it.opts.verbose) {
	      out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	    }
	    out += ' } ';
	  } else {
	    out += ' {} ';
	  }
	  out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	  if (!it.compositeRule && $breakOnError) {
	    /* istanbul ignore if */
	    if (it.async) {
	      out += ' throw new ValidationError(vErrors); ';
	    } else {
	      out += ' validate.errors = vErrors; return false; ';
	    }
	  }
	  out += '} else {  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; }';
	  if (it.opts.allErrors) {
	    out += ' } ';
	  }
	  return out;
	};

	var pattern = function generate_pattern(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $data = 'data' + ($dataLvl || '');
	  var $isData = it.opts.$data && $schema && $schema.$data,
	    $schemaValue;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	    $schemaValue = 'schema' + $lvl;
	  } else {
	    $schemaValue = $schema;
	  }
	  var $regexp = $isData ? '(new RegExp(' + $schemaValue + '))' : it.usePattern($schema);
	  out += 'if ( ';
	  if ($isData) {
	    out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'string\') || ';
	  }
	  out += ' !' + ($regexp) + '.test(' + ($data) + ') ) {   ';
	  var $$outStack = $$outStack || [];
	  $$outStack.push(out);
	  out = ''; /* istanbul ignore else */
	  if (it.createErrors !== false) {
	    out += ' { keyword: \'' + ('pattern') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { pattern:  ';
	    if ($isData) {
	      out += '' + ($schemaValue);
	    } else {
	      out += '' + (it.util.toQuotedString($schema));
	    }
	    out += '  } ';
	    if (it.opts.messages !== false) {
	      out += ' , message: \'should match pattern "';
	      if ($isData) {
	        out += '\' + ' + ($schemaValue) + ' + \'';
	      } else {
	        out += '' + (it.util.escapeQuotes($schema));
	      }
	      out += '"\' ';
	    }
	    if (it.opts.verbose) {
	      out += ' , schema:  ';
	      if ($isData) {
	        out += 'validate.schema' + ($schemaPath);
	      } else {
	        out += '' + (it.util.toQuotedString($schema));
	      }
	      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	    }
	    out += ' } ';
	  } else {
	    out += ' {} ';
	  }
	  var __err = out;
	  out = $$outStack.pop();
	  if (!it.compositeRule && $breakOnError) {
	    /* istanbul ignore if */
	    if (it.async) {
	      out += ' throw new ValidationError([' + (__err) + ']); ';
	    } else {
	      out += ' validate.errors = [' + (__err) + ']; return false; ';
	    }
	  } else {
	    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	  }
	  out += '} ';
	  if ($breakOnError) {
	    out += ' else { ';
	  }
	  return out;
	};

	var properties$2 = function generate_properties(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $data = 'data' + ($dataLvl || '');
	  var $errs = 'errs__' + $lvl;
	  var $it = it.util.copy(it);
	  var $closingBraces = '';
	  $it.level++;
	  var $nextValid = 'valid' + $it.level;
	  var $key = 'key' + $lvl,
	    $idx = 'idx' + $lvl,
	    $dataNxt = $it.dataLevel = it.dataLevel + 1,
	    $nextData = 'data' + $dataNxt,
	    $dataProperties = 'dataProperties' + $lvl;
	  var $schemaKeys = Object.keys($schema || {}).filter(notProto),
	    $pProperties = it.schema.patternProperties || {},
	    $pPropertyKeys = Object.keys($pProperties).filter(notProto),
	    $aProperties = it.schema.additionalProperties,
	    $someProperties = $schemaKeys.length || $pPropertyKeys.length,
	    $noAdditional = $aProperties === false,
	    $additionalIsSchema = typeof $aProperties == 'object' && Object.keys($aProperties).length,
	    $removeAdditional = it.opts.removeAdditional,
	    $checkAdditional = $noAdditional || $additionalIsSchema || $removeAdditional,
	    $ownProperties = it.opts.ownProperties,
	    $currentBaseId = it.baseId;
	  var $required = it.schema.required;
	  if ($required && !(it.opts.$data && $required.$data) && $required.length < it.opts.loopRequired) {
	    var $requiredHash = it.util.toHash($required);
	  }

	  function notProto(p) {
	    return p !== '__proto__';
	  }
	  out += 'var ' + ($errs) + ' = errors;var ' + ($nextValid) + ' = true;';
	  if ($ownProperties) {
	    out += ' var ' + ($dataProperties) + ' = undefined;';
	  }
	  if ($checkAdditional) {
	    if ($ownProperties) {
	      out += ' ' + ($dataProperties) + ' = ' + ($dataProperties) + ' || Object.keys(' + ($data) + '); for (var ' + ($idx) + '=0; ' + ($idx) + '<' + ($dataProperties) + '.length; ' + ($idx) + '++) { var ' + ($key) + ' = ' + ($dataProperties) + '[' + ($idx) + ']; ';
	    } else {
	      out += ' for (var ' + ($key) + ' in ' + ($data) + ') { ';
	    }
	    if ($someProperties) {
	      out += ' var isAdditional' + ($lvl) + ' = !(false ';
	      if ($schemaKeys.length) {
	        if ($schemaKeys.length > 8) {
	          out += ' || validate.schema' + ($schemaPath) + '.hasOwnProperty(' + ($key) + ') ';
	        } else {
	          var arr1 = $schemaKeys;
	          if (arr1) {
	            var $propertyKey, i1 = -1,
	              l1 = arr1.length - 1;
	            while (i1 < l1) {
	              $propertyKey = arr1[i1 += 1];
	              out += ' || ' + ($key) + ' == ' + (it.util.toQuotedString($propertyKey)) + ' ';
	            }
	          }
	        }
	      }
	      if ($pPropertyKeys.length) {
	        var arr2 = $pPropertyKeys;
	        if (arr2) {
	          var $pProperty, $i = -1,
	            l2 = arr2.length - 1;
	          while ($i < l2) {
	            $pProperty = arr2[$i += 1];
	            out += ' || ' + (it.usePattern($pProperty)) + '.test(' + ($key) + ') ';
	          }
	        }
	      }
	      out += ' ); if (isAdditional' + ($lvl) + ') { ';
	    }
	    if ($removeAdditional == 'all') {
	      out += ' delete ' + ($data) + '[' + ($key) + ']; ';
	    } else {
	      var $currentErrorPath = it.errorPath;
	      var $additionalProperty = '\' + ' + $key + ' + \'';
	      if (it.opts._errorDataPathProperty) {
	        it.errorPath = it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
	      }
	      if ($noAdditional) {
	        if ($removeAdditional) {
	          out += ' delete ' + ($data) + '[' + ($key) + ']; ';
	        } else {
	          out += ' ' + ($nextValid) + ' = false; ';
	          var $currErrSchemaPath = $errSchemaPath;
	          $errSchemaPath = it.errSchemaPath + '/additionalProperties';
	          var $$outStack = $$outStack || [];
	          $$outStack.push(out);
	          out = ''; /* istanbul ignore else */
	          if (it.createErrors !== false) {
	            out += ' { keyword: \'' + ('additionalProperties') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { additionalProperty: \'' + ($additionalProperty) + '\' } ';
	            if (it.opts.messages !== false) {
	              out += ' , message: \'';
	              if (it.opts._errorDataPathProperty) {
	                out += 'is an invalid additional property';
	              } else {
	                out += 'should NOT have additional properties';
	              }
	              out += '\' ';
	            }
	            if (it.opts.verbose) {
	              out += ' , schema: false , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	            }
	            out += ' } ';
	          } else {
	            out += ' {} ';
	          }
	          var __err = out;
	          out = $$outStack.pop();
	          if (!it.compositeRule && $breakOnError) {
	            /* istanbul ignore if */
	            if (it.async) {
	              out += ' throw new ValidationError([' + (__err) + ']); ';
	            } else {
	              out += ' validate.errors = [' + (__err) + ']; return false; ';
	            }
	          } else {
	            out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	          }
	          $errSchemaPath = $currErrSchemaPath;
	          if ($breakOnError) {
	            out += ' break; ';
	          }
	        }
	      } else if ($additionalIsSchema) {
	        if ($removeAdditional == 'failing') {
	          out += ' var ' + ($errs) + ' = errors;  ';
	          var $wasComposite = it.compositeRule;
	          it.compositeRule = $it.compositeRule = true;
	          $it.schema = $aProperties;
	          $it.schemaPath = it.schemaPath + '.additionalProperties';
	          $it.errSchemaPath = it.errSchemaPath + '/additionalProperties';
	          $it.errorPath = it.opts._errorDataPathProperty ? it.errorPath : it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
	          var $passData = $data + '[' + $key + ']';
	          $it.dataPathArr[$dataNxt] = $key;
	          var $code = it.validate($it);
	          $it.baseId = $currentBaseId;
	          if (it.util.varOccurences($code, $nextData) < 2) {
	            out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
	          } else {
	            out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
	          }
	          out += ' if (!' + ($nextValid) + ') { errors = ' + ($errs) + '; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete ' + ($data) + '[' + ($key) + ']; }  ';
	          it.compositeRule = $it.compositeRule = $wasComposite;
	        } else {
	          $it.schema = $aProperties;
	          $it.schemaPath = it.schemaPath + '.additionalProperties';
	          $it.errSchemaPath = it.errSchemaPath + '/additionalProperties';
	          $it.errorPath = it.opts._errorDataPathProperty ? it.errorPath : it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
	          var $passData = $data + '[' + $key + ']';
	          $it.dataPathArr[$dataNxt] = $key;
	          var $code = it.validate($it);
	          $it.baseId = $currentBaseId;
	          if (it.util.varOccurences($code, $nextData) < 2) {
	            out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
	          } else {
	            out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
	          }
	          if ($breakOnError) {
	            out += ' if (!' + ($nextValid) + ') break; ';
	          }
	        }
	      }
	      it.errorPath = $currentErrorPath;
	    }
	    if ($someProperties) {
	      out += ' } ';
	    }
	    out += ' }  ';
	    if ($breakOnError) {
	      out += ' if (' + ($nextValid) + ') { ';
	      $closingBraces += '}';
	    }
	  }
	  var $useDefaults = it.opts.useDefaults && !it.compositeRule;
	  if ($schemaKeys.length) {
	    var arr3 = $schemaKeys;
	    if (arr3) {
	      var $propertyKey, i3 = -1,
	        l3 = arr3.length - 1;
	      while (i3 < l3) {
	        $propertyKey = arr3[i3 += 1];
	        var $sch = $schema[$propertyKey];
	        if ((it.opts.strictKeywords ? (typeof $sch == 'object' && Object.keys($sch).length > 0) || $sch === false : it.util.schemaHasRules($sch, it.RULES.all))) {
	          var $prop = it.util.getProperty($propertyKey),
	            $passData = $data + $prop,
	            $hasDefault = $useDefaults && $sch.default !== undefined;
	          $it.schema = $sch;
	          $it.schemaPath = $schemaPath + $prop;
	          $it.errSchemaPath = $errSchemaPath + '/' + it.util.escapeFragment($propertyKey);
	          $it.errorPath = it.util.getPath(it.errorPath, $propertyKey, it.opts.jsonPointers);
	          $it.dataPathArr[$dataNxt] = it.util.toQuotedString($propertyKey);
	          var $code = it.validate($it);
	          $it.baseId = $currentBaseId;
	          if (it.util.varOccurences($code, $nextData) < 2) {
	            $code = it.util.varReplace($code, $nextData, $passData);
	            var $useData = $passData;
	          } else {
	            var $useData = $nextData;
	            out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ';
	          }
	          if ($hasDefault) {
	            out += ' ' + ($code) + ' ';
	          } else {
	            if ($requiredHash && $requiredHash[$propertyKey]) {
	              out += ' if ( ' + ($useData) + ' === undefined ';
	              if ($ownProperties) {
	                out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
	              }
	              out += ') { ' + ($nextValid) + ' = false; ';
	              var $currentErrorPath = it.errorPath,
	                $currErrSchemaPath = $errSchemaPath,
	                $missingProperty = it.util.escapeQuotes($propertyKey);
	              if (it.opts._errorDataPathProperty) {
	                it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
	              }
	              $errSchemaPath = it.errSchemaPath + '/required';
	              var $$outStack = $$outStack || [];
	              $$outStack.push(out);
	              out = ''; /* istanbul ignore else */
	              if (it.createErrors !== false) {
	                out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
	                if (it.opts.messages !== false) {
	                  out += ' , message: \'';
	                  if (it.opts._errorDataPathProperty) {
	                    out += 'is a required property';
	                  } else {
	                    out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
	                  }
	                  out += '\' ';
	                }
	                if (it.opts.verbose) {
	                  out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	                }
	                out += ' } ';
	              } else {
	                out += ' {} ';
	              }
	              var __err = out;
	              out = $$outStack.pop();
	              if (!it.compositeRule && $breakOnError) {
	                /* istanbul ignore if */
	                if (it.async) {
	                  out += ' throw new ValidationError([' + (__err) + ']); ';
	                } else {
	                  out += ' validate.errors = [' + (__err) + ']; return false; ';
	                }
	              } else {
	                out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	              }
	              $errSchemaPath = $currErrSchemaPath;
	              it.errorPath = $currentErrorPath;
	              out += ' } else { ';
	            } else {
	              if ($breakOnError) {
	                out += ' if ( ' + ($useData) + ' === undefined ';
	                if ($ownProperties) {
	                  out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
	                }
	                out += ') { ' + ($nextValid) + ' = true; } else { ';
	              } else {
	                out += ' if (' + ($useData) + ' !== undefined ';
	                if ($ownProperties) {
	                  out += ' &&   Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
	                }
	                out += ' ) { ';
	              }
	            }
	            out += ' ' + ($code) + ' } ';
	          }
	        }
	        if ($breakOnError) {
	          out += ' if (' + ($nextValid) + ') { ';
	          $closingBraces += '}';
	        }
	      }
	    }
	  }
	  if ($pPropertyKeys.length) {
	    var arr4 = $pPropertyKeys;
	    if (arr4) {
	      var $pProperty, i4 = -1,
	        l4 = arr4.length - 1;
	      while (i4 < l4) {
	        $pProperty = arr4[i4 += 1];
	        var $sch = $pProperties[$pProperty];
	        if ((it.opts.strictKeywords ? (typeof $sch == 'object' && Object.keys($sch).length > 0) || $sch === false : it.util.schemaHasRules($sch, it.RULES.all))) {
	          $it.schema = $sch;
	          $it.schemaPath = it.schemaPath + '.patternProperties' + it.util.getProperty($pProperty);
	          $it.errSchemaPath = it.errSchemaPath + '/patternProperties/' + it.util.escapeFragment($pProperty);
	          if ($ownProperties) {
	            out += ' ' + ($dataProperties) + ' = ' + ($dataProperties) + ' || Object.keys(' + ($data) + '); for (var ' + ($idx) + '=0; ' + ($idx) + '<' + ($dataProperties) + '.length; ' + ($idx) + '++) { var ' + ($key) + ' = ' + ($dataProperties) + '[' + ($idx) + ']; ';
	          } else {
	            out += ' for (var ' + ($key) + ' in ' + ($data) + ') { ';
	          }
	          out += ' if (' + (it.usePattern($pProperty)) + '.test(' + ($key) + ')) { ';
	          $it.errorPath = it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
	          var $passData = $data + '[' + $key + ']';
	          $it.dataPathArr[$dataNxt] = $key;
	          var $code = it.validate($it);
	          $it.baseId = $currentBaseId;
	          if (it.util.varOccurences($code, $nextData) < 2) {
	            out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
	          } else {
	            out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
	          }
	          if ($breakOnError) {
	            out += ' if (!' + ($nextValid) + ') break; ';
	          }
	          out += ' } ';
	          if ($breakOnError) {
	            out += ' else ' + ($nextValid) + ' = true; ';
	          }
	          out += ' }  ';
	          if ($breakOnError) {
	            out += ' if (' + ($nextValid) + ') { ';
	            $closingBraces += '}';
	          }
	        }
	      }
	    }
	  }
	  if ($breakOnError) {
	    out += ' ' + ($closingBraces) + ' if (' + ($errs) + ' == errors) {';
	  }
	  return out;
	};

	var propertyNames = function generate_propertyNames(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $data = 'data' + ($dataLvl || '');
	  var $errs = 'errs__' + $lvl;
	  var $it = it.util.copy(it);
	  var $closingBraces = '';
	  $it.level++;
	  var $nextValid = 'valid' + $it.level;
	  out += 'var ' + ($errs) + ' = errors;';
	  if ((it.opts.strictKeywords ? (typeof $schema == 'object' && Object.keys($schema).length > 0) || $schema === false : it.util.schemaHasRules($schema, it.RULES.all))) {
	    $it.schema = $schema;
	    $it.schemaPath = $schemaPath;
	    $it.errSchemaPath = $errSchemaPath;
	    var $key = 'key' + $lvl,
	      $idx = 'idx' + $lvl,
	      $i = 'i' + $lvl,
	      $invalidName = '\' + ' + $key + ' + \'',
	      $dataNxt = $it.dataLevel = it.dataLevel + 1,
	      $nextData = 'data' + $dataNxt,
	      $dataProperties = 'dataProperties' + $lvl,
	      $ownProperties = it.opts.ownProperties,
	      $currentBaseId = it.baseId;
	    if ($ownProperties) {
	      out += ' var ' + ($dataProperties) + ' = undefined; ';
	    }
	    if ($ownProperties) {
	      out += ' ' + ($dataProperties) + ' = ' + ($dataProperties) + ' || Object.keys(' + ($data) + '); for (var ' + ($idx) + '=0; ' + ($idx) + '<' + ($dataProperties) + '.length; ' + ($idx) + '++) { var ' + ($key) + ' = ' + ($dataProperties) + '[' + ($idx) + ']; ';
	    } else {
	      out += ' for (var ' + ($key) + ' in ' + ($data) + ') { ';
	    }
	    out += ' var startErrs' + ($lvl) + ' = errors; ';
	    var $passData = $key;
	    var $wasComposite = it.compositeRule;
	    it.compositeRule = $it.compositeRule = true;
	    var $code = it.validate($it);
	    $it.baseId = $currentBaseId;
	    if (it.util.varOccurences($code, $nextData) < 2) {
	      out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
	    } else {
	      out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
	    }
	    it.compositeRule = $it.compositeRule = $wasComposite;
	    out += ' if (!' + ($nextValid) + ') { for (var ' + ($i) + '=startErrs' + ($lvl) + '; ' + ($i) + '<errors; ' + ($i) + '++) { vErrors[' + ($i) + '].propertyName = ' + ($key) + '; }   var err =   '; /* istanbul ignore else */
	    if (it.createErrors !== false) {
	      out += ' { keyword: \'' + ('propertyNames') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { propertyName: \'' + ($invalidName) + '\' } ';
	      if (it.opts.messages !== false) {
	        out += ' , message: \'property name \\\'' + ($invalidName) + '\\\' is invalid\' ';
	      }
	      if (it.opts.verbose) {
	        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	      }
	      out += ' } ';
	    } else {
	      out += ' {} ';
	    }
	    out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	    if (!it.compositeRule && $breakOnError) {
	      /* istanbul ignore if */
	      if (it.async) {
	        out += ' throw new ValidationError(vErrors); ';
	      } else {
	        out += ' validate.errors = vErrors; return false; ';
	      }
	    }
	    if ($breakOnError) {
	      out += ' break; ';
	    }
	    out += ' } }';
	  }
	  if ($breakOnError) {
	    out += ' ' + ($closingBraces) + ' if (' + ($errs) + ' == errors) {';
	  }
	  return out;
	};

	var required$1 = function generate_required(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $data = 'data' + ($dataLvl || '');
	  var $valid = 'valid' + $lvl;
	  var $isData = it.opts.$data && $schema && $schema.$data;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	  }
	  var $vSchema = 'schema' + $lvl;
	  if (!$isData) {
	    if ($schema.length < it.opts.loopRequired && it.schema.properties && Object.keys(it.schema.properties).length) {
	      var $required = [];
	      var arr1 = $schema;
	      if (arr1) {
	        var $property, i1 = -1,
	          l1 = arr1.length - 1;
	        while (i1 < l1) {
	          $property = arr1[i1 += 1];
	          var $propertySch = it.schema.properties[$property];
	          if (!($propertySch && (it.opts.strictKeywords ? (typeof $propertySch == 'object' && Object.keys($propertySch).length > 0) || $propertySch === false : it.util.schemaHasRules($propertySch, it.RULES.all)))) {
	            $required[$required.length] = $property;
	          }
	        }
	      }
	    } else {
	      var $required = $schema;
	    }
	  }
	  if ($isData || $required.length) {
	    var $currentErrorPath = it.errorPath,
	      $loopRequired = $isData || $required.length >= it.opts.loopRequired,
	      $ownProperties = it.opts.ownProperties;
	    if ($breakOnError) {
	      out += ' var missing' + ($lvl) + '; ';
	      if ($loopRequired) {
	        if (!$isData) {
	          out += ' var ' + ($vSchema) + ' = validate.schema' + ($schemaPath) + '; ';
	        }
	        var $i = 'i' + $lvl,
	          $propertyPath = 'schema' + $lvl + '[' + $i + ']',
	          $missingProperty = '\' + ' + $propertyPath + ' + \'';
	        if (it.opts._errorDataPathProperty) {
	          it.errorPath = it.util.getPathExpr($currentErrorPath, $propertyPath, it.opts.jsonPointers);
	        }
	        out += ' var ' + ($valid) + ' = true; ';
	        if ($isData) {
	          out += ' if (schema' + ($lvl) + ' === undefined) ' + ($valid) + ' = true; else if (!Array.isArray(schema' + ($lvl) + ')) ' + ($valid) + ' = false; else {';
	        }
	        out += ' for (var ' + ($i) + ' = 0; ' + ($i) + ' < ' + ($vSchema) + '.length; ' + ($i) + '++) { ' + ($valid) + ' = ' + ($data) + '[' + ($vSchema) + '[' + ($i) + ']] !== undefined ';
	        if ($ownProperties) {
	          out += ' &&   Object.prototype.hasOwnProperty.call(' + ($data) + ', ' + ($vSchema) + '[' + ($i) + ']) ';
	        }
	        out += '; if (!' + ($valid) + ') break; } ';
	        if ($isData) {
	          out += '  }  ';
	        }
	        out += '  if (!' + ($valid) + ') {   ';
	        var $$outStack = $$outStack || [];
	        $$outStack.push(out);
	        out = ''; /* istanbul ignore else */
	        if (it.createErrors !== false) {
	          out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
	          if (it.opts.messages !== false) {
	            out += ' , message: \'';
	            if (it.opts._errorDataPathProperty) {
	              out += 'is a required property';
	            } else {
	              out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
	            }
	            out += '\' ';
	          }
	          if (it.opts.verbose) {
	            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	          }
	          out += ' } ';
	        } else {
	          out += ' {} ';
	        }
	        var __err = out;
	        out = $$outStack.pop();
	        if (!it.compositeRule && $breakOnError) {
	          /* istanbul ignore if */
	          if (it.async) {
	            out += ' throw new ValidationError([' + (__err) + ']); ';
	          } else {
	            out += ' validate.errors = [' + (__err) + ']; return false; ';
	          }
	        } else {
	          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	        }
	        out += ' } else { ';
	      } else {
	        out += ' if ( ';
	        var arr2 = $required;
	        if (arr2) {
	          var $propertyKey, $i = -1,
	            l2 = arr2.length - 1;
	          while ($i < l2) {
	            $propertyKey = arr2[$i += 1];
	            if ($i) {
	              out += ' || ';
	            }
	            var $prop = it.util.getProperty($propertyKey),
	              $useData = $data + $prop;
	            out += ' ( ( ' + ($useData) + ' === undefined ';
	            if ($ownProperties) {
	              out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
	            }
	            out += ') && (missing' + ($lvl) + ' = ' + (it.util.toQuotedString(it.opts.jsonPointers ? $propertyKey : $prop)) + ') ) ';
	          }
	        }
	        out += ') {  ';
	        var $propertyPath = 'missing' + $lvl,
	          $missingProperty = '\' + ' + $propertyPath + ' + \'';
	        if (it.opts._errorDataPathProperty) {
	          it.errorPath = it.opts.jsonPointers ? it.util.getPathExpr($currentErrorPath, $propertyPath, true) : $currentErrorPath + ' + ' + $propertyPath;
	        }
	        var $$outStack = $$outStack || [];
	        $$outStack.push(out);
	        out = ''; /* istanbul ignore else */
	        if (it.createErrors !== false) {
	          out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
	          if (it.opts.messages !== false) {
	            out += ' , message: \'';
	            if (it.opts._errorDataPathProperty) {
	              out += 'is a required property';
	            } else {
	              out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
	            }
	            out += '\' ';
	          }
	          if (it.opts.verbose) {
	            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	          }
	          out += ' } ';
	        } else {
	          out += ' {} ';
	        }
	        var __err = out;
	        out = $$outStack.pop();
	        if (!it.compositeRule && $breakOnError) {
	          /* istanbul ignore if */
	          if (it.async) {
	            out += ' throw new ValidationError([' + (__err) + ']); ';
	          } else {
	            out += ' validate.errors = [' + (__err) + ']; return false; ';
	          }
	        } else {
	          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	        }
	        out += ' } else { ';
	      }
	    } else {
	      if ($loopRequired) {
	        if (!$isData) {
	          out += ' var ' + ($vSchema) + ' = validate.schema' + ($schemaPath) + '; ';
	        }
	        var $i = 'i' + $lvl,
	          $propertyPath = 'schema' + $lvl + '[' + $i + ']',
	          $missingProperty = '\' + ' + $propertyPath + ' + \'';
	        if (it.opts._errorDataPathProperty) {
	          it.errorPath = it.util.getPathExpr($currentErrorPath, $propertyPath, it.opts.jsonPointers);
	        }
	        if ($isData) {
	          out += ' if (' + ($vSchema) + ' && !Array.isArray(' + ($vSchema) + ')) {  var err =   '; /* istanbul ignore else */
	          if (it.createErrors !== false) {
	            out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
	            if (it.opts.messages !== false) {
	              out += ' , message: \'';
	              if (it.opts._errorDataPathProperty) {
	                out += 'is a required property';
	              } else {
	                out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
	              }
	              out += '\' ';
	            }
	            if (it.opts.verbose) {
	              out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	            }
	            out += ' } ';
	          } else {
	            out += ' {} ';
	          }
	          out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (' + ($vSchema) + ' !== undefined) { ';
	        }
	        out += ' for (var ' + ($i) + ' = 0; ' + ($i) + ' < ' + ($vSchema) + '.length; ' + ($i) + '++) { if (' + ($data) + '[' + ($vSchema) + '[' + ($i) + ']] === undefined ';
	        if ($ownProperties) {
	          out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', ' + ($vSchema) + '[' + ($i) + ']) ';
	        }
	        out += ') {  var err =   '; /* istanbul ignore else */
	        if (it.createErrors !== false) {
	          out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
	          if (it.opts.messages !== false) {
	            out += ' , message: \'';
	            if (it.opts._errorDataPathProperty) {
	              out += 'is a required property';
	            } else {
	              out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
	            }
	            out += '\' ';
	          }
	          if (it.opts.verbose) {
	            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	          }
	          out += ' } ';
	        } else {
	          out += ' {} ';
	        }
	        out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ';
	        if ($isData) {
	          out += '  }  ';
	        }
	      } else {
	        var arr3 = $required;
	        if (arr3) {
	          var $propertyKey, i3 = -1,
	            l3 = arr3.length - 1;
	          while (i3 < l3) {
	            $propertyKey = arr3[i3 += 1];
	            var $prop = it.util.getProperty($propertyKey),
	              $missingProperty = it.util.escapeQuotes($propertyKey),
	              $useData = $data + $prop;
	            if (it.opts._errorDataPathProperty) {
	              it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
	            }
	            out += ' if ( ' + ($useData) + ' === undefined ';
	            if ($ownProperties) {
	              out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
	            }
	            out += ') {  var err =   '; /* istanbul ignore else */
	            if (it.createErrors !== false) {
	              out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
	              if (it.opts.messages !== false) {
	                out += ' , message: \'';
	                if (it.opts._errorDataPathProperty) {
	                  out += 'is a required property';
	                } else {
	                  out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
	                }
	                out += '\' ';
	              }
	              if (it.opts.verbose) {
	                out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	              }
	              out += ' } ';
	            } else {
	              out += ' {} ';
	            }
	            out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ';
	          }
	        }
	      }
	    }
	    it.errorPath = $currentErrorPath;
	  } else if ($breakOnError) {
	    out += ' if (true) {';
	  }
	  return out;
	};

	var uniqueItems = function generate_uniqueItems(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $data = 'data' + ($dataLvl || '');
	  var $valid = 'valid' + $lvl;
	  var $isData = it.opts.$data && $schema && $schema.$data,
	    $schemaValue;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	    $schemaValue = 'schema' + $lvl;
	  } else {
	    $schemaValue = $schema;
	  }
	  if (($schema || $isData) && it.opts.uniqueItems !== false) {
	    if ($isData) {
	      out += ' var ' + ($valid) + '; if (' + ($schemaValue) + ' === false || ' + ($schemaValue) + ' === undefined) ' + ($valid) + ' = true; else if (typeof ' + ($schemaValue) + ' != \'boolean\') ' + ($valid) + ' = false; else { ';
	    }
	    out += ' var i = ' + ($data) + '.length , ' + ($valid) + ' = true , j; if (i > 1) { ';
	    var $itemType = it.schema.items && it.schema.items.type,
	      $typeIsArray = Array.isArray($itemType);
	    if (!$itemType || $itemType == 'object' || $itemType == 'array' || ($typeIsArray && ($itemType.indexOf('object') >= 0 || $itemType.indexOf('array') >= 0))) {
	      out += ' outer: for (;i--;) { for (j = i; j--;) { if (equal(' + ($data) + '[i], ' + ($data) + '[j])) { ' + ($valid) + ' = false; break outer; } } } ';
	    } else {
	      out += ' var itemIndices = {}, item; for (;i--;) { var item = ' + ($data) + '[i]; ';
	      var $method = 'checkDataType' + ($typeIsArray ? 's' : '');
	      out += ' if (' + (it.util[$method]($itemType, 'item', it.opts.strictNumbers, true)) + ') continue; ';
	      if ($typeIsArray) {
	        out += ' if (typeof item == \'string\') item = \'"\' + item; ';
	      }
	      out += ' if (typeof itemIndices[item] == \'number\') { ' + ($valid) + ' = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ';
	    }
	    out += ' } ';
	    if ($isData) {
	      out += '  }  ';
	    }
	    out += ' if (!' + ($valid) + ') {   ';
	    var $$outStack = $$outStack || [];
	    $$outStack.push(out);
	    out = ''; /* istanbul ignore else */
	    if (it.createErrors !== false) {
	      out += ' { keyword: \'' + ('uniqueItems') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { i: i, j: j } ';
	      if (it.opts.messages !== false) {
	        out += ' , message: \'should NOT have duplicate items (items ## \' + j + \' and \' + i + \' are identical)\' ';
	      }
	      if (it.opts.verbose) {
	        out += ' , schema:  ';
	        if ($isData) {
	          out += 'validate.schema' + ($schemaPath);
	        } else {
	          out += '' + ($schema);
	        }
	        out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	      }
	      out += ' } ';
	    } else {
	      out += ' {} ';
	    }
	    var __err = out;
	    out = $$outStack.pop();
	    if (!it.compositeRule && $breakOnError) {
	      /* istanbul ignore if */
	      if (it.async) {
	        out += ' throw new ValidationError([' + (__err) + ']); ';
	      } else {
	        out += ' validate.errors = [' + (__err) + ']; return false; ';
	      }
	    } else {
	      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	    }
	    out += ' } ';
	    if ($breakOnError) {
	      out += ' else { ';
	    }
	  } else {
	    if ($breakOnError) {
	      out += ' if (true) { ';
	    }
	  }
	  return out;
	};

	//all requires must be explicit because browserify won't work with dynamic requires
	var dotjs = {
	  '$ref': ref,
	  allOf: allOf,
	  anyOf: anyOf,
	  '$comment': comment,
	  const: _const,
	  contains: contains,
	  dependencies: dependencies,
	  'enum': _enum,
	  format: format,
	  'if': _if,
	  items: items,
	  maximum: _limit,
	  minimum: _limit,
	  maxItems: _limitItems,
	  minItems: _limitItems,
	  maxLength: _limitLength,
	  minLength: _limitLength,
	  maxProperties: _limitProperties,
	  minProperties: _limitProperties,
	  multipleOf: multipleOf,
	  not: not,
	  oneOf: oneOf,
	  pattern: pattern,
	  properties: properties$2,
	  propertyNames: propertyNames,
	  required: required$1,
	  uniqueItems: uniqueItems,
	  validate: validate$1
	};

	var ruleModules = dotjs
	  , toHash = util$5.toHash;

	var rules$1 = function rules() {
	  var RULES = [
	    { type: 'number',
	      rules: [ { 'maximum': ['exclusiveMaximum'] },
	               { 'minimum': ['exclusiveMinimum'] }, 'multipleOf', 'format'] },
	    { type: 'string',
	      rules: [ 'maxLength', 'minLength', 'pattern', 'format' ] },
	    { type: 'array',
	      rules: [ 'maxItems', 'minItems', 'items', 'contains', 'uniqueItems' ] },
	    { type: 'object',
	      rules: [ 'maxProperties', 'minProperties', 'required', 'dependencies', 'propertyNames',
	               { 'properties': ['additionalProperties', 'patternProperties'] } ] },
	    { rules: [ '$ref', 'const', 'enum', 'not', 'anyOf', 'oneOf', 'allOf', 'if' ] }
	  ];

	  var ALL = [ 'type', '$comment' ];
	  var KEYWORDS = [
	    '$schema', '$id', 'id', '$data', '$async', 'title',
	    'description', 'default', 'definitions',
	    'examples', 'readOnly', 'writeOnly',
	    'contentMediaType', 'contentEncoding',
	    'additionalItems', 'then', 'else'
	  ];
	  var TYPES = [ 'number', 'integer', 'string', 'array', 'object', 'boolean', 'null' ];
	  RULES.all = toHash(ALL);
	  RULES.types = toHash(TYPES);

	  RULES.forEach(function (group) {
	    group.rules = group.rules.map(function (keyword) {
	      var implKeywords;
	      if (typeof keyword == 'object') {
	        var key = Object.keys(keyword)[0];
	        implKeywords = keyword[key];
	        keyword = key;
	        implKeywords.forEach(function (k) {
	          ALL.push(k);
	          RULES.all[k] = true;
	        });
	      }
	      ALL.push(keyword);
	      var rule = RULES.all[keyword] = {
	        keyword: keyword,
	        code: ruleModules[keyword],
	        implements: implKeywords
	      };
	      return rule;
	    });

	    RULES.all.$comment = {
	      keyword: '$comment',
	      code: ruleModules.$comment
	    };

	    if (group.type) RULES.types[group.type] = group;
	  });

	  RULES.keywords = toHash(ALL.concat(KEYWORDS));
	  RULES.custom = {};

	  return RULES;
	};

	var KEYWORDS = [
	  'multipleOf',
	  'maximum',
	  'exclusiveMaximum',
	  'minimum',
	  'exclusiveMinimum',
	  'maxLength',
	  'minLength',
	  'pattern',
	  'additionalItems',
	  'maxItems',
	  'minItems',
	  'uniqueItems',
	  'maxProperties',
	  'minProperties',
	  'required',
	  'additionalProperties',
	  'enum',
	  'format',
	  'const'
	];

	var data = function (metaSchema, keywordsJsonPointers) {
	  for (var i=0; i<keywordsJsonPointers.length; i++) {
	    metaSchema = JSON.parse(JSON.stringify(metaSchema));
	    var segments = keywordsJsonPointers[i].split('/');
	    var keywords = metaSchema;
	    var j;
	    for (j=1; j<segments.length; j++)
	      keywords = keywords[segments[j]];

	    for (j=0; j<KEYWORDS.length; j++) {
	      var key = KEYWORDS[j];
	      var schema = keywords[key];
	      if (schema) {
	        keywords[key] = {
	          anyOf: [
	            schema,
	            { $ref: 'https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#' }
	          ]
	        };
	      }
	    }
	  }

	  return metaSchema;
	};

	var MissingRefError = error_classes.MissingRef;

	var async = compileAsync;


	/**
	 * Creates validating function for passed schema with asynchronous loading of missing schemas.
	 * `loadSchema` option should be a function that accepts schema uri and returns promise that resolves with the schema.
	 * @this  Ajv
	 * @param {Object}   schema schema object
	 * @param {Boolean}  meta optional true to compile meta-schema; this parameter can be skipped
	 * @param {Function} callback an optional node-style callback, it is called with 2 parameters: error (or null) and validating function.
	 * @return {Promise} promise that resolves with a validating function.
	 */
	function compileAsync(schema, meta, callback) {
	  /* eslint no-shadow: 0 */
	  /* global Promise */
	  /* jshint validthis: true */
	  var self = this;
	  if (typeof this._opts.loadSchema != 'function')
	    throw new Error('options.loadSchema should be a function');

	  if (typeof meta == 'function') {
	    callback = meta;
	    meta = undefined;
	  }

	  var p = loadMetaSchemaOf(schema).then(function () {
	    var schemaObj = self._addSchema(schema, undefined, meta);
	    return schemaObj.validate || _compileAsync(schemaObj);
	  });

	  if (callback) {
	    p.then(
	      function(v) { callback(null, v); },
	      callback
	    );
	  }

	  return p;


	  function loadMetaSchemaOf(sch) {
	    var $schema = sch.$schema;
	    return $schema && !self.getSchema($schema)
	            ? compileAsync.call(self, { $ref: $schema }, true)
	            : Promise.resolve();
	  }


	  function _compileAsync(schemaObj) {
	    try { return self._compile(schemaObj); }
	    catch(e) {
	      if (e instanceof MissingRefError) return loadMissingSchema(e);
	      throw e;
	    }


	    function loadMissingSchema(e) {
	      var ref = e.missingSchema;
	      if (added(ref)) throw new Error('Schema ' + ref + ' is loaded but ' + e.missingRef + ' cannot be resolved');

	      var schemaPromise = self._loadingSchemas[ref];
	      if (!schemaPromise) {
	        schemaPromise = self._loadingSchemas[ref] = self._opts.loadSchema(ref);
	        schemaPromise.then(removePromise, removePromise);
	      }

	      return schemaPromise.then(function (sch) {
	        if (!added(ref)) {
	          return loadMetaSchemaOf(sch).then(function () {
	            if (!added(ref)) self.addSchema(sch, ref, undefined, meta);
	          });
	        }
	      }).then(function() {
	        return _compileAsync(schemaObj);
	      });

	      function removePromise() {
	        delete self._loadingSchemas[ref];
	      }

	      function added(ref) {
	        return self._refs[ref] || self._schemas[ref];
	      }
	    }
	  }
	}

	var custom = function generate_custom(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $errorKeyword;
	  var $data = 'data' + ($dataLvl || '');
	  var $valid = 'valid' + $lvl;
	  var $errs = 'errs__' + $lvl;
	  var $isData = it.opts.$data && $schema && $schema.$data,
	    $schemaValue;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	    $schemaValue = 'schema' + $lvl;
	  } else {
	    $schemaValue = $schema;
	  }
	  var $rule = this,
	    $definition = 'definition' + $lvl,
	    $rDef = $rule.definition,
	    $closingBraces = '';
	  var $compile, $inline, $macro, $ruleValidate, $validateCode;
	  if ($isData && $rDef.$data) {
	    $validateCode = 'keywordValidate' + $lvl;
	    var $validateSchema = $rDef.validateSchema;
	    out += ' var ' + ($definition) + ' = RULES.custom[\'' + ($keyword) + '\'].definition; var ' + ($validateCode) + ' = ' + ($definition) + '.validate;';
	  } else {
	    $ruleValidate = it.useCustomRule($rule, $schema, it.schema, it);
	    if (!$ruleValidate) return;
	    $schemaValue = 'validate.schema' + $schemaPath;
	    $validateCode = $ruleValidate.code;
	    $compile = $rDef.compile;
	    $inline = $rDef.inline;
	    $macro = $rDef.macro;
	  }
	  var $ruleErrs = $validateCode + '.errors',
	    $i = 'i' + $lvl,
	    $ruleErr = 'ruleErr' + $lvl,
	    $asyncKeyword = $rDef.async;
	  if ($asyncKeyword && !it.async) throw new Error('async keyword in sync schema');
	  if (!($inline || $macro)) {
	    out += '' + ($ruleErrs) + ' = null;';
	  }
	  out += 'var ' + ($errs) + ' = errors;var ' + ($valid) + ';';
	  if ($isData && $rDef.$data) {
	    $closingBraces += '}';
	    out += ' if (' + ($schemaValue) + ' === undefined) { ' + ($valid) + ' = true; } else { ';
	    if ($validateSchema) {
	      $closingBraces += '}';
	      out += ' ' + ($valid) + ' = ' + ($definition) + '.validateSchema(' + ($schemaValue) + '); if (' + ($valid) + ') { ';
	    }
	  }
	  if ($inline) {
	    if ($rDef.statements) {
	      out += ' ' + ($ruleValidate.validate) + ' ';
	    } else {
	      out += ' ' + ($valid) + ' = ' + ($ruleValidate.validate) + '; ';
	    }
	  } else if ($macro) {
	    var $it = it.util.copy(it);
	    var $closingBraces = '';
	    $it.level++;
	    var $nextValid = 'valid' + $it.level;
	    $it.schema = $ruleValidate.validate;
	    $it.schemaPath = '';
	    var $wasComposite = it.compositeRule;
	    it.compositeRule = $it.compositeRule = true;
	    var $code = it.validate($it).replace(/validate\.schema/g, $validateCode);
	    it.compositeRule = $it.compositeRule = $wasComposite;
	    out += ' ' + ($code);
	  } else {
	    var $$outStack = $$outStack || [];
	    $$outStack.push(out);
	    out = '';
	    out += '  ' + ($validateCode) + '.call( ';
	    if (it.opts.passContext) {
	      out += 'this';
	    } else {
	      out += 'self';
	    }
	    if ($compile || $rDef.schema === false) {
	      out += ' , ' + ($data) + ' ';
	    } else {
	      out += ' , ' + ($schemaValue) + ' , ' + ($data) + ' , validate.schema' + (it.schemaPath) + ' ';
	    }
	    out += ' , (dataPath || \'\')';
	    if (it.errorPath != '""') {
	      out += ' + ' + (it.errorPath);
	    }
	    var $parentData = $dataLvl ? 'data' + (($dataLvl - 1) || '') : 'parentData',
	      $parentDataProperty = $dataLvl ? it.dataPathArr[$dataLvl] : 'parentDataProperty';
	    out += ' , ' + ($parentData) + ' , ' + ($parentDataProperty) + ' , rootData )  ';
	    var def_callRuleValidate = out;
	    out = $$outStack.pop();
	    if ($rDef.errors === false) {
	      out += ' ' + ($valid) + ' = ';
	      if ($asyncKeyword) {
	        out += 'await ';
	      }
	      out += '' + (def_callRuleValidate) + '; ';
	    } else {
	      if ($asyncKeyword) {
	        $ruleErrs = 'customErrors' + $lvl;
	        out += ' var ' + ($ruleErrs) + ' = null; try { ' + ($valid) + ' = await ' + (def_callRuleValidate) + '; } catch (e) { ' + ($valid) + ' = false; if (e instanceof ValidationError) ' + ($ruleErrs) + ' = e.errors; else throw e; } ';
	      } else {
	        out += ' ' + ($ruleErrs) + ' = null; ' + ($valid) + ' = ' + (def_callRuleValidate) + '; ';
	      }
	    }
	  }
	  if ($rDef.modifying) {
	    out += ' if (' + ($parentData) + ') ' + ($data) + ' = ' + ($parentData) + '[' + ($parentDataProperty) + '];';
	  }
	  out += '' + ($closingBraces);
	  if ($rDef.valid) {
	    if ($breakOnError) {
	      out += ' if (true) { ';
	    }
	  } else {
	    out += ' if ( ';
	    if ($rDef.valid === undefined) {
	      out += ' !';
	      if ($macro) {
	        out += '' + ($nextValid);
	      } else {
	        out += '' + ($valid);
	      }
	    } else {
	      out += ' ' + (!$rDef.valid) + ' ';
	    }
	    out += ') { ';
	    $errorKeyword = $rule.keyword;
	    var $$outStack = $$outStack || [];
	    $$outStack.push(out);
	    out = '';
	    var $$outStack = $$outStack || [];
	    $$outStack.push(out);
	    out = ''; /* istanbul ignore else */
	    if (it.createErrors !== false) {
	      out += ' { keyword: \'' + ($errorKeyword || 'custom') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { keyword: \'' + ($rule.keyword) + '\' } ';
	      if (it.opts.messages !== false) {
	        out += ' , message: \'should pass "' + ($rule.keyword) + '" keyword validation\' ';
	      }
	      if (it.opts.verbose) {
	        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	      }
	      out += ' } ';
	    } else {
	      out += ' {} ';
	    }
	    var __err = out;
	    out = $$outStack.pop();
	    if (!it.compositeRule && $breakOnError) {
	      /* istanbul ignore if */
	      if (it.async) {
	        out += ' throw new ValidationError([' + (__err) + ']); ';
	      } else {
	        out += ' validate.errors = [' + (__err) + ']; return false; ';
	      }
	    } else {
	      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	    }
	    var def_customError = out;
	    out = $$outStack.pop();
	    if ($inline) {
	      if ($rDef.errors) {
	        if ($rDef.errors != 'full') {
	          out += '  for (var ' + ($i) + '=' + ($errs) + '; ' + ($i) + '<errors; ' + ($i) + '++) { var ' + ($ruleErr) + ' = vErrors[' + ($i) + ']; if (' + ($ruleErr) + '.dataPath === undefined) ' + ($ruleErr) + '.dataPath = (dataPath || \'\') + ' + (it.errorPath) + '; if (' + ($ruleErr) + '.schemaPath === undefined) { ' + ($ruleErr) + '.schemaPath = "' + ($errSchemaPath) + '"; } ';
	          if (it.opts.verbose) {
	            out += ' ' + ($ruleErr) + '.schema = ' + ($schemaValue) + '; ' + ($ruleErr) + '.data = ' + ($data) + '; ';
	          }
	          out += ' } ';
	        }
	      } else {
	        if ($rDef.errors === false) {
	          out += ' ' + (def_customError) + ' ';
	        } else {
	          out += ' if (' + ($errs) + ' == errors) { ' + (def_customError) + ' } else {  for (var ' + ($i) + '=' + ($errs) + '; ' + ($i) + '<errors; ' + ($i) + '++) { var ' + ($ruleErr) + ' = vErrors[' + ($i) + ']; if (' + ($ruleErr) + '.dataPath === undefined) ' + ($ruleErr) + '.dataPath = (dataPath || \'\') + ' + (it.errorPath) + '; if (' + ($ruleErr) + '.schemaPath === undefined) { ' + ($ruleErr) + '.schemaPath = "' + ($errSchemaPath) + '"; } ';
	          if (it.opts.verbose) {
	            out += ' ' + ($ruleErr) + '.schema = ' + ($schemaValue) + '; ' + ($ruleErr) + '.data = ' + ($data) + '; ';
	          }
	          out += ' } } ';
	        }
	      }
	    } else if ($macro) {
	      out += '   var err =   '; /* istanbul ignore else */
	      if (it.createErrors !== false) {
	        out += ' { keyword: \'' + ($errorKeyword || 'custom') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { keyword: \'' + ($rule.keyword) + '\' } ';
	        if (it.opts.messages !== false) {
	          out += ' , message: \'should pass "' + ($rule.keyword) + '" keyword validation\' ';
	        }
	        if (it.opts.verbose) {
	          out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	        }
	        out += ' } ';
	      } else {
	        out += ' {} ';
	      }
	      out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	      if (!it.compositeRule && $breakOnError) {
	        /* istanbul ignore if */
	        if (it.async) {
	          out += ' throw new ValidationError(vErrors); ';
	        } else {
	          out += ' validate.errors = vErrors; return false; ';
	        }
	      }
	    } else {
	      if ($rDef.errors === false) {
	        out += ' ' + (def_customError) + ' ';
	      } else {
	        out += ' if (Array.isArray(' + ($ruleErrs) + ')) { if (vErrors === null) vErrors = ' + ($ruleErrs) + '; else vErrors = vErrors.concat(' + ($ruleErrs) + '); errors = vErrors.length;  for (var ' + ($i) + '=' + ($errs) + '; ' + ($i) + '<errors; ' + ($i) + '++) { var ' + ($ruleErr) + ' = vErrors[' + ($i) + ']; if (' + ($ruleErr) + '.dataPath === undefined) ' + ($ruleErr) + '.dataPath = (dataPath || \'\') + ' + (it.errorPath) + ';  ' + ($ruleErr) + '.schemaPath = "' + ($errSchemaPath) + '";  ';
	        if (it.opts.verbose) {
	          out += ' ' + ($ruleErr) + '.schema = ' + ($schemaValue) + '; ' + ($ruleErr) + '.data = ' + ($data) + '; ';
	        }
	        out += ' } } else { ' + (def_customError) + ' } ';
	      }
	    }
	    out += ' } ';
	    if ($breakOnError) {
	      out += ' else { ';
	    }
	  }
	  return out;
	};

	var $schema$1 = "http://json-schema.org/draft-07/schema#";
	var $id$1 = "http://json-schema.org/draft-07/schema#";
	var title = "Core schema meta-schema";
	var definitions = {
		schemaArray: {
			type: "array",
			minItems: 1,
			items: {
				$ref: "#"
			}
		},
		nonNegativeInteger: {
			type: "integer",
			minimum: 0
		},
		nonNegativeIntegerDefault0: {
			allOf: [
				{
					$ref: "#/definitions/nonNegativeInteger"
				},
				{
					"default": 0
				}
			]
		},
		simpleTypes: {
			"enum": [
				"array",
				"boolean",
				"integer",
				"null",
				"number",
				"object",
				"string"
			]
		},
		stringArray: {
			type: "array",
			items: {
				type: "string"
			},
			uniqueItems: true,
			"default": [
			]
		}
	};
	var type$1 = [
		"object",
		"boolean"
	];
	var properties$1 = {
		$id: {
			type: "string",
			format: "uri-reference"
		},
		$schema: {
			type: "string",
			format: "uri"
		},
		$ref: {
			type: "string",
			format: "uri-reference"
		},
		$comment: {
			type: "string"
		},
		title: {
			type: "string"
		},
		description: {
			type: "string"
		},
		"default": true,
		readOnly: {
			type: "boolean",
			"default": false
		},
		examples: {
			type: "array",
			items: true
		},
		multipleOf: {
			type: "number",
			exclusiveMinimum: 0
		},
		maximum: {
			type: "number"
		},
		exclusiveMaximum: {
			type: "number"
		},
		minimum: {
			type: "number"
		},
		exclusiveMinimum: {
			type: "number"
		},
		maxLength: {
			$ref: "#/definitions/nonNegativeInteger"
		},
		minLength: {
			$ref: "#/definitions/nonNegativeIntegerDefault0"
		},
		pattern: {
			type: "string",
			format: "regex"
		},
		additionalItems: {
			$ref: "#"
		},
		items: {
			anyOf: [
				{
					$ref: "#"
				},
				{
					$ref: "#/definitions/schemaArray"
				}
			],
			"default": true
		},
		maxItems: {
			$ref: "#/definitions/nonNegativeInteger"
		},
		minItems: {
			$ref: "#/definitions/nonNegativeIntegerDefault0"
		},
		uniqueItems: {
			type: "boolean",
			"default": false
		},
		contains: {
			$ref: "#"
		},
		maxProperties: {
			$ref: "#/definitions/nonNegativeInteger"
		},
		minProperties: {
			$ref: "#/definitions/nonNegativeIntegerDefault0"
		},
		required: {
			$ref: "#/definitions/stringArray"
		},
		additionalProperties: {
			$ref: "#"
		},
		definitions: {
			type: "object",
			additionalProperties: {
				$ref: "#"
			},
			"default": {
			}
		},
		properties: {
			type: "object",
			additionalProperties: {
				$ref: "#"
			},
			"default": {
			}
		},
		patternProperties: {
			type: "object",
			additionalProperties: {
				$ref: "#"
			},
			propertyNames: {
				format: "regex"
			},
			"default": {
			}
		},
		dependencies: {
			type: "object",
			additionalProperties: {
				anyOf: [
					{
						$ref: "#"
					},
					{
						$ref: "#/definitions/stringArray"
					}
				]
			}
		},
		propertyNames: {
			$ref: "#"
		},
		"const": true,
		"enum": {
			type: "array",
			items: true,
			minItems: 1,
			uniqueItems: true
		},
		type: {
			anyOf: [
				{
					$ref: "#/definitions/simpleTypes"
				},
				{
					type: "array",
					items: {
						$ref: "#/definitions/simpleTypes"
					},
					minItems: 1,
					uniqueItems: true
				}
			]
		},
		format: {
			type: "string"
		},
		contentMediaType: {
			type: "string"
		},
		contentEncoding: {
			type: "string"
		},
		"if": {
			$ref: "#"
		},
		then: {
			$ref: "#"
		},
		"else": {
			$ref: "#"
		},
		allOf: {
			$ref: "#/definitions/schemaArray"
		},
		anyOf: {
			$ref: "#/definitions/schemaArray"
		},
		oneOf: {
			$ref: "#/definitions/schemaArray"
		},
		not: {
			$ref: "#"
		}
	};
	var require$$13 = {
		$schema: $schema$1,
		$id: $id$1,
		title: title,
		definitions: definitions,
		type: type$1,
		properties: properties$1,
		"default": true
	};

	var metaSchema = require$$13;

	var definition_schema = {
	  $id: 'https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js',
	  definitions: {
	    simpleTypes: metaSchema.definitions.simpleTypes
	  },
	  type: 'object',
	  dependencies: {
	    schema: ['validate'],
	    $data: ['validate'],
	    statements: ['inline'],
	    valid: {not: {required: ['macro']}}
	  },
	  properties: {
	    type: metaSchema.properties.type,
	    schema: {type: 'boolean'},
	    statements: {type: 'boolean'},
	    dependencies: {
	      type: 'array',
	      items: {type: 'string'}
	    },
	    metaSchema: {type: 'object'},
	    modifying: {type: 'boolean'},
	    valid: {type: 'boolean'},
	    $data: {type: 'boolean'},
	    async: {type: 'boolean'},
	    errors: {
	      anyOf: [
	        {type: 'boolean'},
	        {const: 'full'}
	      ]
	    }
	  }
	};

	var IDENTIFIER = /^[a-z_$][a-z0-9_$-]*$/i;
	var customRuleCode = custom;
	var definitionSchema = definition_schema;

	var keyword = {
	  add: addKeyword,
	  get: getKeyword,
	  remove: removeKeyword,
	  validate: validateKeyword
	};


	/**
	 * Define custom keyword
	 * @this  Ajv
	 * @param {String} keyword custom keyword, should be unique (including different from all standard, custom and macro keywords).
	 * @param {Object} definition keyword definition object with properties `type` (type(s) which the keyword applies to), `validate` or `compile`.
	 * @return {Ajv} this for method chaining
	 */
	function addKeyword(keyword, definition) {
	  /* jshint validthis: true */
	  /* eslint no-shadow: 0 */
	  var RULES = this.RULES;
	  if (RULES.keywords[keyword])
	    throw new Error('Keyword ' + keyword + ' is already defined');

	  if (!IDENTIFIER.test(keyword))
	    throw new Error('Keyword ' + keyword + ' is not a valid identifier');

	  if (definition) {
	    this.validateKeyword(definition, true);

	    var dataType = definition.type;
	    if (Array.isArray(dataType)) {
	      for (var i=0; i<dataType.length; i++)
	        _addRule(keyword, dataType[i], definition);
	    } else {
	      _addRule(keyword, dataType, definition);
	    }

	    var metaSchema = definition.metaSchema;
	    if (metaSchema) {
	      if (definition.$data && this._opts.$data) {
	        metaSchema = {
	          anyOf: [
	            metaSchema,
	            { '$ref': 'https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#' }
	          ]
	        };
	      }
	      definition.validateSchema = this.compile(metaSchema, true);
	    }
	  }

	  RULES.keywords[keyword] = RULES.all[keyword] = true;


	  function _addRule(keyword, dataType, definition) {
	    var ruleGroup;
	    for (var i=0; i<RULES.length; i++) {
	      var rg = RULES[i];
	      if (rg.type == dataType) {
	        ruleGroup = rg;
	        break;
	      }
	    }

	    if (!ruleGroup) {
	      ruleGroup = { type: dataType, rules: [] };
	      RULES.push(ruleGroup);
	    }

	    var rule = {
	      keyword: keyword,
	      definition: definition,
	      custom: true,
	      code: customRuleCode,
	      implements: definition.implements
	    };
	    ruleGroup.rules.push(rule);
	    RULES.custom[keyword] = rule;
	  }

	  return this;
	}


	/**
	 * Get keyword
	 * @this  Ajv
	 * @param {String} keyword pre-defined or custom keyword.
	 * @return {Object|Boolean} custom keyword definition, `true` if it is a predefined keyword, `false` otherwise.
	 */
	function getKeyword(keyword) {
	  /* jshint validthis: true */
	  var rule = this.RULES.custom[keyword];
	  return rule ? rule.definition : this.RULES.keywords[keyword] || false;
	}


	/**
	 * Remove keyword
	 * @this  Ajv
	 * @param {String} keyword pre-defined or custom keyword.
	 * @return {Ajv} this for method chaining
	 */
	function removeKeyword(keyword) {
	  /* jshint validthis: true */
	  var RULES = this.RULES;
	  delete RULES.keywords[keyword];
	  delete RULES.all[keyword];
	  delete RULES.custom[keyword];
	  for (var i=0; i<RULES.length; i++) {
	    var rules = RULES[i].rules;
	    for (var j=0; j<rules.length; j++) {
	      if (rules[j].keyword == keyword) {
	        rules.splice(j, 1);
	        break;
	      }
	    }
	  }
	  return this;
	}


	/**
	 * Validate keyword definition
	 * @this  Ajv
	 * @param {Object} definition keyword definition object.
	 * @param {Boolean} throwError true to throw exception if definition is invalid
	 * @return {boolean} validation result
	 */
	function validateKeyword(definition, throwError) {
	  validateKeyword.errors = null;
	  var v = this._validateKeyword = this._validateKeyword
	                                  || this.compile(definitionSchema, true);

	  if (v(definition)) return true;
	  validateKeyword.errors = v.errors;
	  if (throwError)
	    throw new Error('custom keyword definition is invalid: '  + this.errorsText(v.errors));
	  else
	    return false;
	}

	var $schema = "http://json-schema.org/draft-07/schema#";
	var $id = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#";
	var description = "Meta-schema for $data reference (JSON Schema extension proposal)";
	var type = "object";
	var required = [
		"$data"
	];
	var properties = {
		$data: {
			type: "string",
			anyOf: [
				{
					format: "relative-json-pointer"
				},
				{
					format: "json-pointer"
				}
			]
		}
	};
	var additionalProperties = false;
	var require$$12 = {
		$schema: $schema,
		$id: $id,
		description: description,
		type: type,
		required: required,
		properties: properties,
		additionalProperties: additionalProperties
	};

	var compileSchema = compile_1
	  , resolve = resolve_1
	  , Cache = cache.exports
	  , SchemaObject = schema_obj
	  , stableStringify = fastJsonStableStringify
	  , formats = formats_1
	  , rules = rules$1
	  , $dataMetaSchema = data
	  , util = util$5;

	var ajv$1 = Ajv;

	Ajv.prototype.validate = validate;
	Ajv.prototype.compile = compile;
	Ajv.prototype.addSchema = addSchema;
	Ajv.prototype.addMetaSchema = addMetaSchema;
	Ajv.prototype.validateSchema = validateSchema;
	Ajv.prototype.getSchema = getSchema;
	Ajv.prototype.removeSchema = removeSchema;
	Ajv.prototype.addFormat = addFormat;
	Ajv.prototype.errorsText = errorsText;

	Ajv.prototype._addSchema = _addSchema;
	Ajv.prototype._compile = _compile;

	Ajv.prototype.compileAsync = async;
	var customKeyword = keyword;
	Ajv.prototype.addKeyword = customKeyword.add;
	Ajv.prototype.getKeyword = customKeyword.get;
	Ajv.prototype.removeKeyword = customKeyword.remove;
	Ajv.prototype.validateKeyword = customKeyword.validate;

	var errorClasses = error_classes;
	Ajv.ValidationError = errorClasses.Validation;
	Ajv.MissingRefError = errorClasses.MissingRef;
	Ajv.$dataMetaSchema = $dataMetaSchema;

	var META_SCHEMA_ID = 'http://json-schema.org/draft-07/schema';

	var META_IGNORE_OPTIONS = [ 'removeAdditional', 'useDefaults', 'coerceTypes', 'strictDefaults' ];
	var META_SUPPORT_DATA = ['/properties'];

	/**
	 * Creates validator instance.
	 * Usage: `Ajv(opts)`
	 * @param {Object} opts optional options
	 * @return {Object} ajv instance
	 */
	function Ajv(opts) {
	  if (!(this instanceof Ajv)) return new Ajv(opts);
	  opts = this._opts = util.copy(opts) || {};
	  setLogger(this);
	  this._schemas = {};
	  this._refs = {};
	  this._fragments = {};
	  this._formats = formats(opts.format);

	  this._cache = opts.cache || new Cache;
	  this._loadingSchemas = {};
	  this._compilations = [];
	  this.RULES = rules();
	  this._getId = chooseGetId(opts);

	  opts.loopRequired = opts.loopRequired || Infinity;
	  if (opts.errorDataPath == 'property') opts._errorDataPathProperty = true;
	  if (opts.serialize === undefined) opts.serialize = stableStringify;
	  this._metaOpts = getMetaSchemaOptions(this);

	  if (opts.formats) addInitialFormats(this);
	  if (opts.keywords) addInitialKeywords(this);
	  addDefaultMetaSchema(this);
	  if (typeof opts.meta == 'object') this.addMetaSchema(opts.meta);
	  if (opts.nullable) this.addKeyword('nullable', {metaSchema: {type: 'boolean'}});
	  addInitialSchemas(this);
	}



	/**
	 * Validate data using schema
	 * Schema will be compiled and cached (using serialized JSON as key. [fast-json-stable-stringify](https://github.com/epoberezkin/fast-json-stable-stringify) is used to serialize.
	 * @this   Ajv
	 * @param  {String|Object} schemaKeyRef key, ref or schema object
	 * @param  {Any} data to be validated
	 * @return {Boolean} validation result. Errors from the last validation will be available in `ajv.errors` (and also in compiled schema: `schema.errors`).
	 */
	function validate(schemaKeyRef, data) {
	  var v;
	  if (typeof schemaKeyRef == 'string') {
	    v = this.getSchema(schemaKeyRef);
	    if (!v) throw new Error('no schema with key or ref "' + schemaKeyRef + '"');
	  } else {
	    var schemaObj = this._addSchema(schemaKeyRef);
	    v = schemaObj.validate || this._compile(schemaObj);
	  }

	  var valid = v(data);
	  if (v.$async !== true) this.errors = v.errors;
	  return valid;
	}


	/**
	 * Create validating function for passed schema.
	 * @this   Ajv
	 * @param  {Object} schema schema object
	 * @param  {Boolean} _meta true if schema is a meta-schema. Used internally to compile meta schemas of custom keywords.
	 * @return {Function} validating function
	 */
	function compile(schema, _meta) {
	  var schemaObj = this._addSchema(schema, undefined, _meta);
	  return schemaObj.validate || this._compile(schemaObj);
	}


	/**
	 * Adds schema to the instance.
	 * @this   Ajv
	 * @param {Object|Array} schema schema or array of schemas. If array is passed, `key` and other parameters will be ignored.
	 * @param {String} key Optional schema key. Can be passed to `validate` method instead of schema object or id/ref. One schema per instance can have empty `id` and `key`.
	 * @param {Boolean} _skipValidation true to skip schema validation. Used internally, option validateSchema should be used instead.
	 * @param {Boolean} _meta true if schema is a meta-schema. Used internally, addMetaSchema should be used instead.
	 * @return {Ajv} this for method chaining
	 */
	function addSchema(schema, key, _skipValidation, _meta) {
	  if (Array.isArray(schema)){
	    for (var i=0; i<schema.length; i++) this.addSchema(schema[i], undefined, _skipValidation, _meta);
	    return this;
	  }
	  var id = this._getId(schema);
	  if (id !== undefined && typeof id != 'string')
	    throw new Error('schema id must be string');
	  key = resolve.normalizeId(key || id);
	  checkUnique(this, key);
	  this._schemas[key] = this._addSchema(schema, _skipValidation, _meta, true);
	  return this;
	}


	/**
	 * Add schema that will be used to validate other schemas
	 * options in META_IGNORE_OPTIONS are alway set to false
	 * @this   Ajv
	 * @param {Object} schema schema object
	 * @param {String} key optional schema key
	 * @param {Boolean} skipValidation true to skip schema validation, can be used to override validateSchema option for meta-schema
	 * @return {Ajv} this for method chaining
	 */
	function addMetaSchema(schema, key, skipValidation) {
	  this.addSchema(schema, key, skipValidation, true);
	  return this;
	}


	/**
	 * Validate schema
	 * @this   Ajv
	 * @param {Object} schema schema to validate
	 * @param {Boolean} throwOrLogError pass true to throw (or log) an error if invalid
	 * @return {Boolean} true if schema is valid
	 */
	function validateSchema(schema, throwOrLogError) {
	  var $schema = schema.$schema;
	  if ($schema !== undefined && typeof $schema != 'string')
	    throw new Error('$schema must be a string');
	  $schema = $schema || this._opts.defaultMeta || defaultMeta(this);
	  if (!$schema) {
	    this.logger.warn('meta-schema not available');
	    this.errors = null;
	    return true;
	  }
	  var valid = this.validate($schema, schema);
	  if (!valid && throwOrLogError) {
	    var message = 'schema is invalid: ' + this.errorsText();
	    if (this._opts.validateSchema == 'log') this.logger.error(message);
	    else throw new Error(message);
	  }
	  return valid;
	}


	function defaultMeta(self) {
	  var meta = self._opts.meta;
	  self._opts.defaultMeta = typeof meta == 'object'
	                            ? self._getId(meta) || meta
	                            : self.getSchema(META_SCHEMA_ID)
	                              ? META_SCHEMA_ID
	                              : undefined;
	  return self._opts.defaultMeta;
	}


	/**
	 * Get compiled schema from the instance by `key` or `ref`.
	 * @this   Ajv
	 * @param  {String} keyRef `key` that was passed to `addSchema` or full schema reference (`schema.id` or resolved id).
	 * @return {Function} schema validating function (with property `schema`).
	 */
	function getSchema(keyRef) {
	  var schemaObj = _getSchemaObj(this, keyRef);
	  switch (typeof schemaObj) {
	    case 'object': return schemaObj.validate || this._compile(schemaObj);
	    case 'string': return this.getSchema(schemaObj);
	    case 'undefined': return _getSchemaFragment(this, keyRef);
	  }
	}


	function _getSchemaFragment(self, ref) {
	  var res = resolve.schema.call(self, { schema: {} }, ref);
	  if (res) {
	    var schema = res.schema
	      , root = res.root
	      , baseId = res.baseId;
	    var v = compileSchema.call(self, schema, root, undefined, baseId);
	    self._fragments[ref] = new SchemaObject({
	      ref: ref,
	      fragment: true,
	      schema: schema,
	      root: root,
	      baseId: baseId,
	      validate: v
	    });
	    return v;
	  }
	}


	function _getSchemaObj(self, keyRef) {
	  keyRef = resolve.normalizeId(keyRef);
	  return self._schemas[keyRef] || self._refs[keyRef] || self._fragments[keyRef];
	}


	/**
	 * Remove cached schema(s).
	 * If no parameter is passed all schemas but meta-schemas are removed.
	 * If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
	 * Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
	 * @this   Ajv
	 * @param  {String|Object|RegExp} schemaKeyRef key, ref, pattern to match key/ref or schema object
	 * @return {Ajv} this for method chaining
	 */
	function removeSchema(schemaKeyRef) {
	  if (schemaKeyRef instanceof RegExp) {
	    _removeAllSchemas(this, this._schemas, schemaKeyRef);
	    _removeAllSchemas(this, this._refs, schemaKeyRef);
	    return this;
	  }
	  switch (typeof schemaKeyRef) {
	    case 'undefined':
	      _removeAllSchemas(this, this._schemas);
	      _removeAllSchemas(this, this._refs);
	      this._cache.clear();
	      return this;
	    case 'string':
	      var schemaObj = _getSchemaObj(this, schemaKeyRef);
	      if (schemaObj) this._cache.del(schemaObj.cacheKey);
	      delete this._schemas[schemaKeyRef];
	      delete this._refs[schemaKeyRef];
	      return this;
	    case 'object':
	      var serialize = this._opts.serialize;
	      var cacheKey = serialize ? serialize(schemaKeyRef) : schemaKeyRef;
	      this._cache.del(cacheKey);
	      var id = this._getId(schemaKeyRef);
	      if (id) {
	        id = resolve.normalizeId(id);
	        delete this._schemas[id];
	        delete this._refs[id];
	      }
	  }
	  return this;
	}


	function _removeAllSchemas(self, schemas, regex) {
	  for (var keyRef in schemas) {
	    var schemaObj = schemas[keyRef];
	    if (!schemaObj.meta && (!regex || regex.test(keyRef))) {
	      self._cache.del(schemaObj.cacheKey);
	      delete schemas[keyRef];
	    }
	  }
	}


	/* @this   Ajv */
	function _addSchema(schema, skipValidation, meta, shouldAddSchema) {
	  if (typeof schema != 'object' && typeof schema != 'boolean')
	    throw new Error('schema should be object or boolean');
	  var serialize = this._opts.serialize;
	  var cacheKey = serialize ? serialize(schema) : schema;
	  var cached = this._cache.get(cacheKey);
	  if (cached) return cached;

	  shouldAddSchema = shouldAddSchema || this._opts.addUsedSchema !== false;

	  var id = resolve.normalizeId(this._getId(schema));
	  if (id && shouldAddSchema) checkUnique(this, id);

	  var willValidate = this._opts.validateSchema !== false && !skipValidation;
	  var recursiveMeta;
	  if (willValidate && !(recursiveMeta = id && id == resolve.normalizeId(schema.$schema)))
	    this.validateSchema(schema, true);

	  var localRefs = resolve.ids.call(this, schema);

	  var schemaObj = new SchemaObject({
	    id: id,
	    schema: schema,
	    localRefs: localRefs,
	    cacheKey: cacheKey,
	    meta: meta
	  });

	  if (id[0] != '#' && shouldAddSchema) this._refs[id] = schemaObj;
	  this._cache.put(cacheKey, schemaObj);

	  if (willValidate && recursiveMeta) this.validateSchema(schema, true);

	  return schemaObj;
	}


	/* @this   Ajv */
	function _compile(schemaObj, root) {
	  if (schemaObj.compiling) {
	    schemaObj.validate = callValidate;
	    callValidate.schema = schemaObj.schema;
	    callValidate.errors = null;
	    callValidate.root = root ? root : callValidate;
	    if (schemaObj.schema.$async === true)
	      callValidate.$async = true;
	    return callValidate;
	  }
	  schemaObj.compiling = true;

	  var currentOpts;
	  if (schemaObj.meta) {
	    currentOpts = this._opts;
	    this._opts = this._metaOpts;
	  }

	  var v;
	  try { v = compileSchema.call(this, schemaObj.schema, root, schemaObj.localRefs); }
	  catch(e) {
	    delete schemaObj.validate;
	    throw e;
	  }
	  finally {
	    schemaObj.compiling = false;
	    if (schemaObj.meta) this._opts = currentOpts;
	  }

	  schemaObj.validate = v;
	  schemaObj.refs = v.refs;
	  schemaObj.refVal = v.refVal;
	  schemaObj.root = v.root;
	  return v;


	  /* @this   {*} - custom context, see passContext option */
	  function callValidate() {
	    /* jshint validthis: true */
	    var _validate = schemaObj.validate;
	    var result = _validate.apply(this, arguments);
	    callValidate.errors = _validate.errors;
	    return result;
	  }
	}


	function chooseGetId(opts) {
	  switch (opts.schemaId) {
	    case 'auto': return _get$IdOrId;
	    case 'id': return _getId;
	    default: return _get$Id;
	  }
	}

	/* @this   Ajv */
	function _getId(schema) {
	  if (schema.$id) this.logger.warn('schema $id ignored', schema.$id);
	  return schema.id;
	}

	/* @this   Ajv */
	function _get$Id(schema) {
	  if (schema.id) this.logger.warn('schema id ignored', schema.id);
	  return schema.$id;
	}


	function _get$IdOrId(schema) {
	  if (schema.$id && schema.id && schema.$id != schema.id)
	    throw new Error('schema $id is different from id');
	  return schema.$id || schema.id;
	}


	/**
	 * Convert array of error message objects to string
	 * @this   Ajv
	 * @param  {Array<Object>} errors optional array of validation errors, if not passed errors from the instance are used.
	 * @param  {Object} options optional options with properties `separator` and `dataVar`.
	 * @return {String} human readable string with all errors descriptions
	 */
	function errorsText(errors, options) {
	  errors = errors || this.errors;
	  if (!errors) return 'No errors';
	  options = options || {};
	  var separator = options.separator === undefined ? ', ' : options.separator;
	  var dataVar = options.dataVar === undefined ? 'data' : options.dataVar;

	  var text = '';
	  for (var i=0; i<errors.length; i++) {
	    var e = errors[i];
	    if (e) text += dataVar + e.dataPath + ' ' + e.message + separator;
	  }
	  return text.slice(0, -separator.length);
	}


	/**
	 * Add custom format
	 * @this   Ajv
	 * @param {String} name format name
	 * @param {String|RegExp|Function} format string is converted to RegExp; function should return boolean (true when valid)
	 * @return {Ajv} this for method chaining
	 */
	function addFormat(name, format) {
	  if (typeof format == 'string') format = new RegExp(format);
	  this._formats[name] = format;
	  return this;
	}


	function addDefaultMetaSchema(self) {
	  var $dataSchema;
	  if (self._opts.$data) {
	    $dataSchema = require$$12;
	    self.addMetaSchema($dataSchema, $dataSchema.$id, true);
	  }
	  if (self._opts.meta === false) return;
	  var metaSchema = require$$13;
	  if (self._opts.$data) metaSchema = $dataMetaSchema(metaSchema, META_SUPPORT_DATA);
	  self.addMetaSchema(metaSchema, META_SCHEMA_ID, true);
	  self._refs['http://json-schema.org/schema'] = META_SCHEMA_ID;
	}


	function addInitialSchemas(self) {
	  var optsSchemas = self._opts.schemas;
	  if (!optsSchemas) return;
	  if (Array.isArray(optsSchemas)) self.addSchema(optsSchemas);
	  else for (var key in optsSchemas) self.addSchema(optsSchemas[key], key);
	}


	function addInitialFormats(self) {
	  for (var name in self._opts.formats) {
	    var format = self._opts.formats[name];
	    self.addFormat(name, format);
	  }
	}


	function addInitialKeywords(self) {
	  for (var name in self._opts.keywords) {
	    var keyword = self._opts.keywords[name];
	    self.addKeyword(name, keyword);
	  }
	}


	function checkUnique(self, id) {
	  if (self._schemas[id] || self._refs[id])
	    throw new Error('schema with key or id "' + id + '" already exists');
	}


	function getMetaSchemaOptions(self) {
	  var metaOpts = util.copy(self._opts);
	  for (var i=0; i<META_IGNORE_OPTIONS.length; i++)
	    delete metaOpts[META_IGNORE_OPTIONS[i]];
	  return metaOpts;
	}


	function setLogger(self) {
	  var logger = self._opts.logger;
	  if (logger === false) {
	    self.logger = {log: noop, warn: noop, error: noop};
	  } else {
	    if (logger === undefined) logger = console;
	    if (!(typeof logger == 'object' && logger.log && logger.warn && logger.error))
	      throw new Error('logger must implement log, warn and error methods');
	    self.logger = logger;
	  }
	}


	function noop() {}

	function _toConsumableArray$1(arr) { return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _nonIterableSpread$1(); }

	function _nonIterableSpread$1() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

	function _iterableToArray$1(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

	function _arrayWithoutHoles$1(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

	function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } return target; }

	function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	var ajv = createAjvInstance();
	var formerCustomFormats = null;
	var formerMetaSchema = null;
	var ROOT_SCHEMA_PREFIX = "__rjsf_rootSchema";

	function createAjvInstance() {
	  var ajv = new ajv$1({
	    errorDataPath: "property",
	    allErrors: true,
	    multipleOfPrecision: 8,
	    schemaId: "auto",
	    unknownFormats: "ignore"
	  }); // add custom formats

	  ajv.addFormat("data-url", /^data:([a-z]+\/[a-z0-9-+.]+)?;(?:name=(.*);)?base64,(.*)$/);
	  ajv.addFormat("color", /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/);
	  return ajv;
	}

	function toErrorSchema(errors) {
	  // Transforms a ajv validation errors list:
	  // [
	  //   {property: ".level1.level2[2].level3", message: "err a"},
	  //   {property: ".level1.level2[2].level3", message: "err b"},
	  //   {property: ".level1.level2[4].level3", message: "err b"},
	  // ]
	  // Into an error tree:
	  // {
	  //   level1: {
	  //     level2: {
	  //       2: {level3: {errors: ["err a", "err b"]}},
	  //       4: {level3: {errors: ["err b"]}},
	  //     }
	  //   }
	  // };
	  if (!errors.length) {
	    return {};
	  }

	  return errors.reduce(function (errorSchema, error) {
	    var property = error.property,
	        message = error.message;
	    var path = toPath_1(property);
	    var parent = errorSchema; // If the property is at the root (.level1) then toPath creates
	    // an empty array element at the first index. Remove it.

	    if (path.length > 0 && path[0] === "") {
	      path.splice(0, 1);
	    }

	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = path.slice(0)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var segment = _step.value;

	        if (!(segment in parent)) {
	          parent[segment] = {};
	        }

	        parent = parent[segment];
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
	          _iterator["return"]();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }

	    if (Array.isArray(parent.__errors)) {
	      // We store the list of errors for this node in a property named __errors
	      // to avoid name collision with a possible sub schema field named
	      // "errors" (see `validate.createErrorHandler`).
	      parent.__errors = parent.__errors.concat(message);
	    } else {
	      if (message) {
	        parent.__errors = [message];
	      }
	    }

	    return errorSchema;
	  }, {});
	}

	function toErrorList(errorSchema) {
	  var fieldName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "root";
	  // XXX: We should transform fieldName as a full field path string.
	  var errorList = [];

	  if ("__errors" in errorSchema) {
	    errorList = errorList.concat(errorSchema.__errors.map(function (stack) {
	      return {
	        stack: "".concat(fieldName, ": ").concat(stack)
	      };
	    }));
	  }

	  return Object.keys(errorSchema).reduce(function (acc, key) {
	    if (key !== "__errors") {
	      acc = acc.concat(toErrorList(errorSchema[key], key));
	    }

	    return acc;
	  }, errorList);
	}

	function createErrorHandler(formData) {
	  var handler = {
	    // We store the list of errors for this node in a property named __errors
	    // to avoid name collision with a possible sub schema field named
	    // "errors" (see `utils.toErrorSchema`).
	    __errors: [],
	    addError: function addError(message) {
	      this.__errors.push(message);
	    }
	  };

	  if (isObject(formData)) {
	    return Object.keys(formData).reduce(function (acc, key) {
	      return _objectSpread$2({}, acc, _defineProperty$2({}, key, createErrorHandler(formData[key])));
	    }, handler);
	  }

	  if (Array.isArray(formData)) {
	    return formData.reduce(function (acc, value, key) {
	      return _objectSpread$2({}, acc, _defineProperty$2({}, key, createErrorHandler(value)));
	    }, handler);
	  }

	  return handler;
	}

	function unwrapErrorHandler(errorHandler) {
	  return Object.keys(errorHandler).reduce(function (acc, key) {
	    if (key === "addError") {
	      return acc;
	    } else if (key === "__errors") {
	      return _objectSpread$2({}, acc, _defineProperty$2({}, key, errorHandler[key]));
	    }

	    return _objectSpread$2({}, acc, _defineProperty$2({}, key, unwrapErrorHandler(errorHandler[key])));
	  }, {});
	}
	/**
	 * Transforming the error output from ajv to format used by jsonschema.
	 * At some point, components should be updated to support ajv.
	 */


	function transformAjvErrors() {
	  var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	  if (errors === null) {
	    return [];
	  }

	  return errors.map(function (e) {
	    var dataPath = e.dataPath,
	        keyword = e.keyword,
	        message = e.message,
	        params = e.params,
	        schemaPath = e.schemaPath;
	    var property = "".concat(dataPath); // put data in expected format

	    return {
	      name: keyword,
	      property: property,
	      message: message,
	      params: params,
	      // specific to ajv
	      stack: "".concat(property, " ").concat(message).trim(),
	      schemaPath: schemaPath
	    };
	  });
	}
	/**
	 * This function processes the formData with a user `validate` contributed
	 * function, which receives the form data and an `errorHandler` object that
	 * will be used to add custom validation errors for each field.
	 */


	function validateFormData(formData, schema, customValidate, transformErrors) {
	  var additionalMetaSchemas = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
	  var customFormats = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
	  // Include form data with undefined values, which is required for validation.
	  var rootSchema = schema;
	  formData = getDefaultFormState(schema, formData, rootSchema, true);
	  var newMetaSchemas = !deepEquals(formerMetaSchema, additionalMetaSchemas);
	  var newFormats = !deepEquals(formerCustomFormats, customFormats);

	  if (newMetaSchemas || newFormats) {
	    ajv = createAjvInstance();
	  } // add more schemas to validate against


	  if (additionalMetaSchemas && newMetaSchemas && Array.isArray(additionalMetaSchemas)) {
	    ajv.addMetaSchema(additionalMetaSchemas);
	    formerMetaSchema = additionalMetaSchemas;
	  } // add more custom formats to validate against


	  if (customFormats && newFormats && isObject(customFormats)) {
	    Object.keys(customFormats).forEach(function (formatName) {
	      ajv.addFormat(formatName, customFormats[formatName]);
	    });
	    formerCustomFormats = customFormats;
	  }

	  var validationError = null;

	  try {
	    ajv.validate(schema, formData);
	  } catch (err) {
	    validationError = err;
	  }

	  var errors = transformAjvErrors(ajv.errors); // Clear errors to prevent persistent errors, see #1104

	  ajv.errors = null;
	  var noProperMetaSchema = validationError && validationError.message && typeof validationError.message === "string" && validationError.message.includes("no schema with key or ref ");

	  if (noProperMetaSchema) {
	    errors = [].concat(_toConsumableArray$1(errors), [{
	      stack: validationError.message
	    }]);
	  }

	  if (typeof transformErrors === "function") {
	    errors = transformErrors(errors);
	  }

	  var errorSchema = toErrorSchema(errors);

	  if (noProperMetaSchema) {
	    errorSchema = _objectSpread$2({}, errorSchema, {
	      $schema: {
	        __errors: [validationError.message]
	      }
	    });
	  }

	  if (typeof customValidate !== "function") {
	    return {
	      errors: errors,
	      errorSchema: errorSchema
	    };
	  }

	  var errorHandler = customValidate(formData, createErrorHandler(formData));
	  var userErrorSchema = unwrapErrorHandler(errorHandler);
	  var newErrorSchema = mergeObjects(errorSchema, userErrorSchema, true); // XXX: The errors list produced is not fully compliant with the format
	  // exposed by the jsonschema lib, which contains full field paths and other
	  // properties.

	  var newErrors = toErrorList(newErrorSchema);
	  return {
	    errors: newErrors,
	    errorSchema: newErrorSchema
	  };
	}
	/**
	 * Recursively prefixes all $ref's in a schema with `ROOT_SCHEMA_PREFIX`
	 * This is used in isValid to make references to the rootSchema
	 */

	function withIdRefPrefix(schemaNode) {
	  var obj = schemaNode;

	  if (schemaNode.constructor === Object) {
	    obj = _objectSpread$2({}, schemaNode);

	    for (var key in obj) {
	      var value = obj[key];

	      if (key === "$ref" && typeof value === "string" && value.startsWith("#")) {
	        obj[key] = ROOT_SCHEMA_PREFIX + value;
	      } else {
	        obj[key] = withIdRefPrefix(value);
	      }
	    }
	  } else if (Array.isArray(schemaNode)) {
	    obj = _toConsumableArray$1(schemaNode);

	    for (var i = 0; i < obj.length; i++) {
	      obj[i] = withIdRefPrefix(obj[i]);
	    }
	  }

	  return obj;
	}
	/**
	 * Validates data against a schema, returning true if the data is valid, or
	 * false otherwise. If the schema is invalid, then this function will return
	 * false.
	 */

	function isValid(schema, data, rootSchema) {
	  try {
	    // add the rootSchema ROOT_SCHEMA_PREFIX as id.
	    // then rewrite the schema ref's to point to the rootSchema
	    // this accounts for the case where schema have references to models
	    // that lives in the rootSchema but not in the schema in question.
	    return ajv.addSchema(rootSchema, ROOT_SCHEMA_PREFIX).validate(withIdRefPrefix(schema), data);
	  } catch (e) {
	    return false;
	  } finally {
	    // make sure we remove the rootSchema from the global ajv instance
	    ajv.removeSchema(ROOT_SCHEMA_PREFIX);
	  }
	}

	function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof$1(key) === "symbol" ? key : String(key); }

	function _toPrimitive(input, hint) { if (_typeof$1(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof$1(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

	function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

	function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

	function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

	function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

	function _typeof$1(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

	function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } return target; }

	function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

	function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
	var ADDITIONAL_PROPERTY_FLAG = "__additional_property";
	var widgetMap = {
	  "boolean": {
	    checkbox: "CheckboxWidget",
	    radio: "RadioWidget",
	    select: "SelectWidget",
	    hidden: "HiddenWidget"
	  },
	  string: {
	    text: "TextWidget",
	    password: "PasswordWidget",
	    email: "EmailWidget",
	    hostname: "TextWidget",
	    ipv4: "TextWidget",
	    ipv6: "TextWidget",
	    uri: "URLWidget",
	    "data-url": "FileWidget",
	    radio: "RadioWidget",
	    select: "SelectWidget",
	    textarea: "TextareaWidget",
	    hidden: "HiddenWidget",
	    date: "DateWidget",
	    datetime: "DateTimeWidget",
	    "date-time": "DateTimeWidget",
	    "alt-date": "AltDateWidget",
	    "alt-datetime": "AltDateTimeWidget",
	    color: "ColorWidget",
	    file: "FileWidget"
	  },
	  number: {
	    text: "TextWidget",
	    select: "SelectWidget",
	    updown: "UpDownWidget",
	    range: "RangeWidget",
	    radio: "RadioWidget",
	    hidden: "HiddenWidget"
	  },
	  integer: {
	    text: "TextWidget",
	    select: "SelectWidget",
	    updown: "UpDownWidget",
	    range: "RangeWidget",
	    radio: "RadioWidget",
	    hidden: "HiddenWidget"
	  },
	  array: {
	    select: "SelectWidget",
	    checkboxes: "CheckboxesWidget",
	    files: "FileWidget",
	    hidden: "HiddenWidget"
	  }
	};
	function canExpand(schema, uiSchema, formData) {
	  if (!schema.additionalProperties) {
	    return false;
	  }

	  var _getUiOptions = getUiOptions(uiSchema),
	      expandable = _getUiOptions.expandable;

	  if (expandable === false) {
	    return expandable;
	  } // if ui:options.expandable was not explicitly set to false, we can add
	  // another property if we have not exceeded maxProperties yet


	  if (schema.maxProperties !== undefined) {
	    return Object.keys(formData).length < schema.maxProperties;
	  }

	  return true;
	}
	function getDefaultRegistry() {
	  return {
	    fields: fields,
	    widgets: widgets,
	    definitions: {},
	    rootSchema: {},
	    formContext: {}
	  };
	}
	/* Gets the type of a given schema. */

	function getSchemaType(schema) {
	  var type = schema.type;

	  if (!type && schema["const"]) {
	    return guessType(schema["const"]);
	  }

	  if (!type && schema["enum"]) {
	    return "string";
	  }

	  if (!type && (schema.properties || schema.additionalProperties)) {
	    return "object";
	  }

	  if (type instanceof Array && type.length === 2 && type.includes("null")) {
	    return type.find(function (type) {
	      return type !== "null";
	    });
	  }

	  return type;
	}
	function getWidget(schema, widget) {
	  var registeredWidgets = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var type = getSchemaType(schema);

	  function mergeOptions(Widget) {
	    // cache return value as property of widget for proper react reconciliation
	    if (!Widget.MergedWidget) {
	      var defaultOptions = Widget.defaultProps && Widget.defaultProps.options || {};

	      Widget.MergedWidget = function (_ref) {
	        var _ref$options = _ref.options,
	            options = _ref$options === void 0 ? {} : _ref$options,
	            props = _objectWithoutProperties(_ref, ["options"]);

	        return React.createElement(Widget, _extends({
	          options: _objectSpread$1({}, defaultOptions, options)
	        }, props));
	      };
	    }

	    return Widget.MergedWidget;
	  }

	  if (typeof widget === "function" || reactIs.exports.isForwardRef(React.createElement(widget)) || reactIs.exports.isMemo(widget)) {
	    return mergeOptions(widget);
	  }

	  if (typeof widget !== "string") {
	    throw new Error("Unsupported widget definition: ".concat(_typeof$1(widget)));
	  }

	  if (registeredWidgets.hasOwnProperty(widget)) {
	    var registeredWidget = registeredWidgets[widget];
	    return getWidget(schema, registeredWidget, registeredWidgets);
	  }

	  if (!widgetMap.hasOwnProperty(type)) {
	    throw new Error("No widget for type \"".concat(type, "\""));
	  }

	  if (widgetMap[type].hasOwnProperty(widget)) {
	    var _registeredWidget = registeredWidgets[widgetMap[type][widget]];
	    return getWidget(schema, _registeredWidget, registeredWidgets);
	  }

	  throw new Error("No widget \"".concat(widget, "\" for type \"").concat(type, "\""));
	}
	function hasWidget(schema, widget) {
	  var registeredWidgets = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	  try {
	    getWidget(schema, widget, registeredWidgets);
	    return true;
	  } catch (e) {
	    if (e.message && (e.message.startsWith("No widget") || e.message.startsWith("Unsupported widget"))) {
	      return false;
	    }

	    throw e;
	  }
	}

	function computeDefaults(_schema, parentDefaults, rootSchema) {
	  var rawFormData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	  var includeUndefinedValues = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
	  var schema = isObject(_schema) ? _schema : {};
	  var formData = isObject(rawFormData) ? rawFormData : {}; // Compute the defaults recursively: give highest priority to deepest nodes.

	  var defaults = parentDefaults;

	  if (isObject(defaults) && isObject(schema["default"])) {
	    // For object defaults, only override parent defaults that are defined in
	    // schema.default.
	    defaults = mergeObjects(defaults, schema["default"]);
	  } else if ("default" in schema) {
	    // Use schema defaults for this node.
	    defaults = schema["default"];
	  } else if ("$ref" in schema) {
	    // Use referenced schema defaults for this node.
	    var refSchema = findSchemaDefinition(schema.$ref, rootSchema);
	    return computeDefaults(refSchema, defaults, rootSchema, formData, includeUndefinedValues);
	  } else if ("dependencies" in schema) {
	    var resolvedSchema = resolveDependencies(schema, rootSchema, formData);
	    return computeDefaults(resolvedSchema, defaults, rootSchema, formData, includeUndefinedValues);
	  } else if (isFixedItems(schema)) {
	    defaults = schema.items.map(function (itemSchema, idx) {
	      return computeDefaults(itemSchema, Array.isArray(parentDefaults) ? parentDefaults[idx] : undefined, rootSchema, formData, includeUndefinedValues);
	    });
	  } else if ("oneOf" in schema) {
	    schema = schema.oneOf[getMatchingOption(undefined, schema.oneOf, rootSchema)];
	  } else if ("anyOf" in schema) {
	    schema = schema.anyOf[getMatchingOption(undefined, schema.anyOf, rootSchema)];
	  } // Not defaults defined for this node, fallback to generic typed ones.


	  if (typeof defaults === "undefined") {
	    defaults = schema["default"];
	  }

	  switch (getSchemaType(schema)) {
	    // We need to recur for object schema inner default values.
	    case "object":
	      return Object.keys(schema.properties || {}).reduce(function (acc, key) {
	        // Compute the defaults for this node, with the parent defaults we might
	        // have from a previous run: defaults[key].
	        var computedDefault = computeDefaults(schema.properties[key], (defaults || {})[key], rootSchema, (formData || {})[key], includeUndefinedValues);

	        if (includeUndefinedValues || computedDefault !== undefined) {
	          acc[key] = computedDefault;
	        }

	        return acc;
	      }, {});

	    case "array":
	      // Inject defaults into existing array defaults
	      if (Array.isArray(defaults)) {
	        defaults = defaults.map(function (item, idx) {
	          return computeDefaults(schema.items[idx] || schema.additionalItems || {}, item, rootSchema);
	        });
	      } // Deeply inject defaults into already existing form data


	      if (Array.isArray(rawFormData)) {
	        defaults = rawFormData.map(function (item, idx) {
	          return computeDefaults(schema.items, (defaults || {})[idx], rootSchema, item);
	        });
	      }

	      if (schema.minItems) {
	        if (!isMultiSelect(schema, rootSchema)) {
	          var defaultsLength = defaults ? defaults.length : 0;

	          if (schema.minItems > defaultsLength) {
	            var defaultEntries = defaults || []; // populate the array with the defaults

	            var fillerSchema = Array.isArray(schema.items) ? schema.additionalItems : schema.items;
	            var fillerEntries = fill(new Array(schema.minItems - defaultsLength), computeDefaults(fillerSchema, fillerSchema.defaults, rootSchema)); // then fill up the rest with either the item default or empty, up to minItems

	            return defaultEntries.concat(fillerEntries);
	          }
	        } else {
	          return defaults ? defaults : [];
	        }
	      }

	  }

	  return defaults;
	}

	function getDefaultFormState(_schema, formData) {
	  var rootSchema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var includeUndefinedValues = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	  if (!isObject(_schema)) {
	    throw new Error("Invalid schema: " + _schema);
	  }

	  var schema = retrieveSchema(_schema, rootSchema, formData);
	  var defaults = computeDefaults(schema, _schema["default"], rootSchema, formData, includeUndefinedValues);

	  if (typeof formData === "undefined") {
	    // No form data? Use schema defaults.
	    return defaults;
	  }

	  if (isObject(formData) || Array.isArray(formData)) {
	    return mergeDefaultsWithFormData(defaults, formData);
	  }

	  if (formData === 0 || formData === false || formData === "") {
	    return formData;
	  }

	  return formData || defaults;
	}
	/**
	 * When merging defaults and form data, we want to merge in this specific way:
	 * - objects are deeply merged
	 * - arrays are merged in such a way that:
	 *   - when the array is set in form data, only array entries set in form data
	 *     are deeply merged; additional entries from the defaults are ignored
	 *   - when the array is not set in form data, the default is copied over
	 * - scalars are overwritten/set by form data
	 */

	function mergeDefaultsWithFormData(defaults, formData) {
	  if (Array.isArray(formData)) {
	    if (!Array.isArray(defaults)) {
	      defaults = [];
	    }

	    return formData.map(function (value, idx) {
	      if (defaults[idx]) {
	        return mergeDefaultsWithFormData(defaults[idx], value);
	      }

	      return value;
	    });
	  } else if (isObject(formData)) {
	    var acc = Object.assign({}, defaults); // Prevent mutation of source object.

	    return Object.keys(formData).reduce(function (acc, key) {
	      acc[key] = mergeDefaultsWithFormData(defaults ? defaults[key] : {}, formData[key]);
	      return acc;
	    }, acc);
	  } else {
	    return formData;
	  }
	}
	function getUiOptions(uiSchema) {
	  // get all passed options from ui:widget, ui:options, and ui:<optionName>
	  return Object.keys(uiSchema).filter(function (key) {
	    return key.indexOf("ui:") === 0;
	  }).reduce(function (options, key) {
	    var value = uiSchema[key];

	    if (key === "ui:widget" && isObject(value)) {
	      console.warn("Setting options via ui:widget object is deprecated, use ui:options instead");
	      return _objectSpread$1({}, options, value.options || {}, {
	        widget: value.component
	      });
	    }

	    if (key === "ui:options" && isObject(value)) {
	      return _objectSpread$1({}, options, value);
	    }

	    return _objectSpread$1({}, options, _defineProperty$1({}, key.substring(3), value));
	  }, {});
	}
	function getDisplayLabel(schema, uiSchema, rootSchema) {
	  var uiOptions = getUiOptions(uiSchema);
	  var _uiOptions$label = uiOptions.label,
	      displayLabel = _uiOptions$label === void 0 ? true : _uiOptions$label;
	  var schemaType = getSchemaType(schema);

	  if (schemaType === "array") {
	    displayLabel = isMultiSelect(schema, rootSchema) || isFilesArray(schema, uiSchema, rootSchema);
	  }

	  if (schemaType === "object") {
	    displayLabel = false;
	  }

	  if (schemaType === "boolean" && !uiSchema["ui:widget"]) {
	    displayLabel = false;
	  }

	  if (uiSchema["ui:field"]) {
	    displayLabel = false;
	  }

	  return displayLabel;
	}
	function isObject(thing) {
	  if (typeof File !== "undefined" && thing instanceof File) {
	    return false;
	  }

	  return _typeof$1(thing) === "object" && thing !== null && !Array.isArray(thing);
	}
	function mergeObjects(obj1, obj2) {
	  var concatArrays = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	  // Recursively merge deeply nested objects.
	  var acc = Object.assign({}, obj1); // Prevent mutation of source object.

	  return Object.keys(obj2).reduce(function (acc, key) {
	    var left = obj1 ? obj1[key] : {},
	        right = obj2[key];

	    if (obj1 && obj1.hasOwnProperty(key) && isObject(right)) {
	      acc[key] = mergeObjects(left, right, concatArrays);
	    } else if (concatArrays && Array.isArray(left) && Array.isArray(right)) {
	      acc[key] = left.concat(right);
	    } else {
	      acc[key] = right;
	    }

	    return acc;
	  }, acc);
	}
	function asNumber(value) {
	  if (value === "") {
	    return undefined;
	  }

	  if (value === null) {
	    return null;
	  }

	  if (/\.$/.test(value)) {
	    // "3." can't really be considered a number even if it parses in js. The
	    // user is most likely entering a float.
	    return value;
	  }

	  if (/\.0$/.test(value)) {
	    // we need to return this as a string here, to allow for input like 3.07
	    return value;
	  }

	  var n = Number(value);
	  var valid = typeof n === "number" && !Number.isNaN(n);

	  if (/\.\d*0$/.test(value)) {
	    // It's a number, that's cool - but we need it as a string so it doesn't screw
	    // with the user when entering dollar amounts or other values (such as those with
	    // specific precision or number of significant digits)
	    return value;
	  }

	  return valid ? n : value;
	}
	function orderProperties(properties, order) {
	  if (!Array.isArray(order)) {
	    return properties;
	  }

	  var arrayToHash = function arrayToHash(arr) {
	    return arr.reduce(function (prev, curr) {
	      prev[curr] = true;
	      return prev;
	    }, {});
	  };

	  var errorPropList = function errorPropList(arr) {
	    return arr.length > 1 ? "properties '".concat(arr.join("', '"), "'") : "property '".concat(arr[0], "'");
	  };

	  var propertyHash = arrayToHash(properties);
	  var orderFiltered = order.filter(function (prop) {
	    return prop === "*" || propertyHash[prop];
	  });
	  var orderHash = arrayToHash(orderFiltered);
	  var rest = properties.filter(function (prop) {
	    return !orderHash[prop];
	  });
	  var restIndex = orderFiltered.indexOf("*");

	  if (restIndex === -1) {
	    if (rest.length) {
	      throw new Error("uiSchema order list does not contain ".concat(errorPropList(rest)));
	    }

	    return orderFiltered;
	  }

	  if (restIndex !== orderFiltered.lastIndexOf("*")) {
	    throw new Error("uiSchema order list contains more than one wildcard item");
	  }

	  var complete = _toConsumableArray(orderFiltered);

	  complete.splice.apply(complete, [restIndex, 1].concat(_toConsumableArray(rest)));
	  return complete;
	}
	/**
	 * This function checks if the given schema matches a single
	 * constant value.
	 */

	function isConstant(schema) {
	  return Array.isArray(schema["enum"]) && schema["enum"].length === 1 || schema.hasOwnProperty("const");
	}
	function toConstant(schema) {
	  if (Array.isArray(schema["enum"]) && schema["enum"].length === 1) {
	    return schema["enum"][0];
	  } else if (schema.hasOwnProperty("const")) {
	    return schema["const"];
	  } else {
	    throw new Error("schema cannot be inferred as a constant");
	  }
	}
	function isSelect(_schema) {
	  var rootSchema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var schema = retrieveSchema(_schema, rootSchema);
	  var altSchemas = schema.oneOf || schema.anyOf;

	  if (Array.isArray(schema["enum"])) {
	    return true;
	  } else if (Array.isArray(altSchemas)) {
	    return altSchemas.every(function (altSchemas) {
	      return isConstant(altSchemas);
	    });
	  }

	  return false;
	}
	function isMultiSelect(schema) {
	  var rootSchema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (!schema.uniqueItems || !schema.items) {
	    return false;
	  }

	  return isSelect(schema.items, rootSchema);
	}
	function isFilesArray(schema, uiSchema) {
	  var rootSchema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	  if (uiSchema["ui:widget"] === "files") {
	    return true;
	  } else if (schema.items) {
	    var itemsSchema = retrieveSchema(schema.items, rootSchema);
	    return itemsSchema.type === "string" && itemsSchema.format === "data-url";
	  }

	  return false;
	}
	function isFixedItems(schema) {
	  return Array.isArray(schema.items) && schema.items.length > 0 && schema.items.every(function (item) {
	    return isObject(item);
	  });
	}
	function allowAdditionalItems(schema) {
	  if (schema.additionalItems === true) {
	    console.warn("additionalItems=true is currently not supported");
	  }

	  return isObject(schema.additionalItems);
	}
	function optionsList(schema) {
	  if (schema["enum"]) {
	    return schema["enum"].map(function (value, i) {
	      var label = schema.enumNames && schema.enumNames[i] || String(value);
	      return {
	        label: label,
	        value: value
	      };
	    });
	  } else {
	    var altSchemas = schema.oneOf || schema.anyOf;
	    return altSchemas.map(function (schema, i) {
	      var value = toConstant(schema);
	      var label = schema.title || String(value);
	      return {
	        schema: schema,
	        label: label,
	        value: value
	      };
	    });
	  }
	}
	function findSchemaDefinition($ref) {
	  var rootSchema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var origRef = $ref;

	  if ($ref.startsWith("#")) {
	    // Decode URI fragment representation.
	    $ref = decodeURIComponent($ref.substring(1));
	  } else {
	    throw new Error("Could not find a definition for ".concat(origRef, "."));
	  }

	  var current = jsonpointer.get(rootSchema, $ref);

	  if (current === undefined) {
	    throw new Error("Could not find a definition for ".concat(origRef, "."));
	  }

	  if (current.hasOwnProperty("$ref")) {
	    return findSchemaDefinition(current.$ref, rootSchema);
	  }

	  return current;
	} // In the case where we have to implicitly create a schema, it is useful to know what type to use
	//  based on the data we are defining

	var guessType = function guessType(value) {
	  if (Array.isArray(value)) {
	    return "array";
	  } else if (typeof value === "string") {
	    return "string";
	  } else if (value == null) {
	    return "null";
	  } else if (typeof value === "boolean") {
	    return "boolean";
	  } else if (!isNaN(value)) {
	    return "number";
	  } else if (_typeof$1(value) === "object") {
	    return "object";
	  } // Default to string if we can't figure it out


	  return "string";
	}; // This function will create new "properties" items for each key in our formData

	function stubExistingAdditionalProperties(schema) {
	  var rootSchema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var formData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  // Clone the schema so we don't ruin the consumer's original
	  schema = _objectSpread$1({}, schema, {
	    properties: _objectSpread$1({}, schema.properties)
	  }); // make sure formData is an object

	  formData = isObject(formData) ? formData : {};
	  Object.keys(formData).forEach(function (key) {
	    if (schema.properties.hasOwnProperty(key)) {
	      // No need to stub, our schema already has the property
	      return;
	    }

	    var additionalProperties;

	    if (schema.additionalProperties.hasOwnProperty("$ref")) {
	      additionalProperties = retrieveSchema({
	        $ref: schema.additionalProperties["$ref"]
	      }, rootSchema, formData);
	    } else if (schema.additionalProperties.hasOwnProperty("type")) {
	      additionalProperties = _objectSpread$1({}, schema.additionalProperties);
	    } else {
	      additionalProperties = {
	        type: guessType(formData[key])
	      };
	    } // The type of our new key should match the additionalProperties value;


	    schema.properties[key] = additionalProperties; // Set our additional property flag so we know it was dynamically added

	    schema.properties[key][ADDITIONAL_PROPERTY_FLAG] = true;
	  });
	  return schema;
	}
	function resolveSchema(schema) {
	  var rootSchema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var formData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	  if (schema.hasOwnProperty("$ref")) {
	    return resolveReference(schema, rootSchema, formData);
	  } else if (schema.hasOwnProperty("dependencies")) {
	    var resolvedSchema = resolveDependencies(schema, rootSchema, formData);
	    return retrieveSchema(resolvedSchema, rootSchema, formData);
	  } else if (schema.hasOwnProperty("allOf")) {
	    return _objectSpread$1({}, schema, {
	      allOf: schema.allOf.map(function (allOfSubschema) {
	        return retrieveSchema(allOfSubschema, rootSchema, formData);
	      })
	    });
	  } else {
	    // No $ref or dependencies attribute found, returning the original schema.
	    return schema;
	  }
	}

	function resolveReference(schema, rootSchema, formData) {
	  // Retrieve the referenced schema definition.
	  var $refSchema = findSchemaDefinition(schema.$ref, rootSchema); // Drop the $ref property of the source schema.

	  schema.$ref;
	      var localSchema = _objectWithoutProperties(schema, ["$ref"]); // Update referenced schema definition with local schema properties.


	  return retrieveSchema(_objectSpread$1({}, $refSchema, localSchema), rootSchema, formData);
	}

	function retrieveSchema(schema) {
	  var rootSchema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var formData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	  if (!isObject(schema)) {
	    return {};
	  }

	  var resolvedSchema = resolveSchema(schema, rootSchema, formData);

	  if ("allOf" in schema) {
	    try {
	      resolvedSchema = src(_objectSpread$1({}, resolvedSchema, {
	        allOf: resolvedSchema.allOf
	      }));
	    } catch (e) {
	      console.warn("could not merge subschemas in allOf:\n" + e);

	      var _resolvedSchema = resolvedSchema;
	          _resolvedSchema.allOf;
	          var resolvedSchemaWithoutAllOf = _objectWithoutProperties(_resolvedSchema, ["allOf"]);

	      return resolvedSchemaWithoutAllOf;
	    }
	  }

	  var hasAdditionalProperties = resolvedSchema.hasOwnProperty("additionalProperties") && resolvedSchema.additionalProperties !== false;

	  if (hasAdditionalProperties) {
	    return stubExistingAdditionalProperties(resolvedSchema, rootSchema, formData);
	  }

	  return resolvedSchema;
	}

	function resolveDependencies(schema, rootSchema, formData) {
	  // Drop the dependencies from the source schema.
	  var _schema$dependencies = schema.dependencies,
	      dependencies = _schema$dependencies === void 0 ? {} : _schema$dependencies,
	      resolvedSchema = _objectWithoutProperties(schema, ["dependencies"]);

	  if ("oneOf" in resolvedSchema) {
	    resolvedSchema = resolvedSchema.oneOf[getMatchingOption(formData, resolvedSchema.oneOf, rootSchema)];
	  } else if ("anyOf" in resolvedSchema) {
	    resolvedSchema = resolvedSchema.anyOf[getMatchingOption(formData, resolvedSchema.anyOf, rootSchema)];
	  }

	  return processDependencies(dependencies, resolvedSchema, rootSchema, formData);
	}

	function processDependencies(dependencies, resolvedSchema, rootSchema, formData) {
	  // Process dependencies updating the local schema properties as appropriate.
	  for (var dependencyKey in dependencies) {
	    // Skip this dependency if its trigger property is not present.
	    if (formData[dependencyKey] === undefined) {
	      continue;
	    } // Skip this dependency if it is not included in the schema (such as when dependencyKey is itself a hidden dependency.)


	    if (resolvedSchema.properties && !(dependencyKey in resolvedSchema.properties)) {
	      continue;
	    }

	    var dependencyValue = dependencies[dependencyKey],
	        remainingDependencies = _objectWithoutProperties(dependencies, [dependencyKey].map(_toPropertyKey));

	    if (Array.isArray(dependencyValue)) {
	      resolvedSchema = withDependentProperties(resolvedSchema, dependencyValue);
	    } else if (isObject(dependencyValue)) {
	      resolvedSchema = withDependentSchema(resolvedSchema, rootSchema, formData, dependencyKey, dependencyValue);
	    }

	    return processDependencies(remainingDependencies, resolvedSchema, rootSchema, formData);
	  }

	  return resolvedSchema;
	}

	function withDependentProperties(schema, additionallyRequired) {
	  if (!additionallyRequired) {
	    return schema;
	  }

	  var required = Array.isArray(schema.required) ? Array.from(new Set([].concat(_toConsumableArray(schema.required), _toConsumableArray(additionallyRequired)))) : additionallyRequired;
	  return _objectSpread$1({}, schema, {
	    required: required
	  });
	}

	function withDependentSchema(schema, rootSchema, formData, dependencyKey, dependencyValue) {
	  var _retrieveSchema = retrieveSchema(dependencyValue, rootSchema, formData),
	      oneOf = _retrieveSchema.oneOf,
	      dependentSchema = _objectWithoutProperties(_retrieveSchema, ["oneOf"]);

	  schema = mergeSchemas(schema, dependentSchema); // Since it does not contain oneOf, we return the original schema.

	  if (oneOf === undefined) {
	    return schema;
	  } else if (!Array.isArray(oneOf)) {
	    throw new Error("invalid: it is some ".concat(_typeof$1(oneOf), " instead of an array"));
	  } // Resolve $refs inside oneOf.


	  var resolvedOneOf = oneOf.map(function (subschema) {
	    return subschema.hasOwnProperty("$ref") ? resolveReference(subschema, rootSchema, formData) : subschema;
	  });
	  return withExactlyOneSubschema(schema, rootSchema, formData, dependencyKey, resolvedOneOf);
	}

	function withExactlyOneSubschema(schema, rootSchema, formData, dependencyKey, oneOf) {
	  var validSubschemas = oneOf.filter(function (subschema) {
	    if (!subschema.properties) {
	      return false;
	    }

	    var conditionPropertySchema = subschema.properties[dependencyKey];

	    if (conditionPropertySchema) {
	      var conditionSchema = {
	        type: "object",
	        properties: _defineProperty$1({}, dependencyKey, conditionPropertySchema)
	      };

	      var _validateFormData = validateFormData(formData, conditionSchema),
	          errors = _validateFormData.errors;

	      return errors.length === 0;
	    }
	  });

	  if (validSubschemas.length !== 1) {
	    console.warn("ignoring oneOf in dependencies because there isn't exactly one subschema that is valid");
	    return schema;
	  }

	  var subschema = validSubschemas[0];

	  var _subschema$properties = subschema.properties;
	      _subschema$properties[dependencyKey];
	      var dependentSubschema = _objectWithoutProperties(_subschema$properties, [dependencyKey].map(_toPropertyKey));

	  var dependentSchema = _objectSpread$1({}, subschema, {
	    properties: dependentSubschema
	  });

	  return mergeSchemas(schema, retrieveSchema(dependentSchema, rootSchema, formData));
	} // Recursively merge deeply nested schemas.
	// The difference between mergeSchemas and mergeObjects
	// is that mergeSchemas only concats arrays for
	// values under the "required" keyword, and when it does,
	// it doesn't include duplicate values.


	function mergeSchemas(obj1, obj2) {
	  var acc = Object.assign({}, obj1); // Prevent mutation of source object.

	  return Object.keys(obj2).reduce(function (acc, key) {
	    var left = obj1 ? obj1[key] : {},
	        right = obj2[key];

	    if (obj1 && obj1.hasOwnProperty(key) && isObject(right)) {
	      acc[key] = mergeSchemas(left, right);
	    } else if (obj1 && obj2 && (getSchemaType(obj1) === "object" || getSchemaType(obj2) === "object") && key === "required" && Array.isArray(left) && Array.isArray(right)) {
	      // Don't include duplicate values when merging
	      // "required" fields.
	      acc[key] = union_1(left, right);
	    } else {
	      acc[key] = right;
	    }

	    return acc;
	  }, acc);
	}

	function isArguments(object) {
	  return Object.prototype.toString.call(object) === "[object Arguments]";
	}

	function deepEquals(a, b) {
	  var ca = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	  var cb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

	  // Partially extracted from node-deeper and adapted to exclude comparison
	  // checks for functions.
	  // https://github.com/othiym23/node-deeper
	  if (a === b) {
	    return true;
	  } else if (typeof a === "function" || typeof b === "function") {
	    // Assume all functions are equivalent
	    // see https://github.com/rjsf-team/react-jsonschema-form/issues/255
	    return true;
	  } else if (_typeof$1(a) !== "object" || _typeof$1(b) !== "object") {
	    return false;
	  } else if (a === null || b === null) {
	    return false;
	  } else if (a instanceof Date && b instanceof Date) {
	    return a.getTime() === b.getTime();
	  } else if (a instanceof RegExp && b instanceof RegExp) {
	    return a.source === b.source && a.global === b.global && a.multiline === b.multiline && a.lastIndex === b.lastIndex && a.ignoreCase === b.ignoreCase;
	  } else if (isArguments(a) || isArguments(b)) {
	    if (!(isArguments(a) && isArguments(b))) {
	      return false;
	    }

	    var slice = Array.prototype.slice;
	    return deepEquals(slice.call(a), slice.call(b), ca, cb);
	  } else {
	    if (a.constructor !== b.constructor) {
	      return false;
	    }

	    var ka = Object.keys(a);
	    var kb = Object.keys(b); // don't bother with stack acrobatics if there's nothing there

	    if (ka.length === 0 && kb.length === 0) {
	      return true;
	    }

	    if (ka.length !== kb.length) {
	      return false;
	    }

	    var cal = ca.length;

	    while (cal--) {
	      if (ca[cal] === a) {
	        return cb[cal] === b;
	      }
	    }

	    ca.push(a);
	    cb.push(b);
	    ka.sort();
	    kb.sort();

	    for (var j = ka.length - 1; j >= 0; j--) {
	      if (ka[j] !== kb[j]) {
	        return false;
	      }
	    }

	    var _key;

	    for (var k = ka.length - 1; k >= 0; k--) {
	      _key = ka[k];

	      if (!deepEquals(a[_key], b[_key], ca, cb)) {
	        return false;
	      }
	    }

	    ca.pop();
	    cb.pop();
	    return true;
	  }
	}
	function shouldRender(comp, nextProps, nextState) {
	  var props = comp.props,
	      state = comp.state;
	  return !deepEquals(props, nextProps) || !deepEquals(state, nextState);
	}
	function toIdSchema(schema, id, rootSchema) {
	  var formData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	  var idPrefix = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "root";
	  var idSchema = {
	    $id: id || idPrefix
	  };

	  if ("$ref" in schema || "dependencies" in schema || "allOf" in schema) {
	    var _schema = retrieveSchema(schema, rootSchema, formData);

	    return toIdSchema(_schema, id, rootSchema, formData, idPrefix);
	  }

	  if ("items" in schema && !schema.items.$ref) {
	    return toIdSchema(schema.items, id, rootSchema, formData, idPrefix);
	  }

	  if (schema.type !== "object") {
	    return idSchema;
	  }

	  for (var name in schema.properties || {}) {
	    var field = schema.properties[name];
	    var fieldId = idSchema.$id + "_" + name;
	    idSchema[name] = toIdSchema(isObject(field) ? field : {}, fieldId, rootSchema, // It's possible that formData is not an object -- this can happen if an
	    // array item has just been added, but not populated with data yet
	    (formData || {})[name], idPrefix);
	  }

	  return idSchema;
	}
	function toPathSchema(schema) {
	  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
	  var rootSchema = arguments.length > 2 ? arguments[2] : undefined;
	  var formData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	  var pathSchema = {
	    $name: name.replace(/^\./, "")
	  };

	  if ("$ref" in schema || "dependencies" in schema || "allOf" in schema) {
	    var _schema = retrieveSchema(schema, rootSchema, formData);

	    return toPathSchema(_schema, name, rootSchema, formData);
	  }

	  if (schema.hasOwnProperty("additionalProperties")) {
	    pathSchema.__rjsf_additionalProperties = true;
	  }

	  if (schema.hasOwnProperty("items") && Array.isArray(formData)) {
	    formData.forEach(function (element, i) {
	      pathSchema[i] = toPathSchema(schema.items, "".concat(name, ".").concat(i), rootSchema, element);
	    });
	  } else if (schema.hasOwnProperty("properties")) {
	    for (var property in schema.properties) {
	      pathSchema[property] = toPathSchema(schema.properties[property], "".concat(name, ".").concat(property), rootSchema, // It's possible that formData is not an object -- this can happen if an
	      // array item has just been added, but not populated with data yet
	      (formData || {})[property]);
	    }
	  }

	  return pathSchema;
	}
	function parseDateString(dateString) {
	  var includeTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	  if (!dateString) {
	    return {
	      year: -1,
	      month: -1,
	      day: -1,
	      hour: includeTime ? -1 : 0,
	      minute: includeTime ? -1 : 0,
	      second: includeTime ? -1 : 0
	    };
	  }

	  var date = new Date(dateString);

	  if (Number.isNaN(date.getTime())) {
	    throw new Error("Unable to parse date " + dateString);
	  }

	  return {
	    year: date.getUTCFullYear(),
	    month: date.getUTCMonth() + 1,
	    // oh you, javascript.
	    day: date.getUTCDate(),
	    hour: includeTime ? date.getUTCHours() : 0,
	    minute: includeTime ? date.getUTCMinutes() : 0,
	    second: includeTime ? date.getUTCSeconds() : 0
	  };
	}
	function toDateString(_ref2) {
	  var year = _ref2.year,
	      month = _ref2.month,
	      day = _ref2.day,
	      _ref2$hour = _ref2.hour,
	      hour = _ref2$hour === void 0 ? 0 : _ref2$hour,
	      _ref2$minute = _ref2.minute,
	      minute = _ref2$minute === void 0 ? 0 : _ref2$minute,
	      _ref2$second = _ref2.second,
	      second = _ref2$second === void 0 ? 0 : _ref2$second;
	  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	  var utcTime = Date.UTC(year, month - 1, day, hour, minute, second);
	  var datetime = new Date(utcTime).toJSON();
	  return time ? datetime : datetime.slice(0, 10);
	}
	function utcToLocal(jsonDate) {
	  if (!jsonDate) {
	    return "";
	  } // required format of `"yyyy-MM-ddThh:mm" followed by optional ":ss" or ":ss.SSS"
	  // https://html.spec.whatwg.org/multipage/input.html#local-date-and-time-state-(type%3Ddatetime-local)
	  // > should be a _valid local date and time string_ (not GMT)
	  // Note - date constructor passed local ISO-8601 does not correctly
	  // change time to UTC in node pre-8


	  var date = new Date(jsonDate);
	  var yyyy = pad(date.getFullYear(), 4);
	  var MM = pad(date.getMonth() + 1, 2);
	  var dd = pad(date.getDate(), 2);
	  var hh = pad(date.getHours(), 2);
	  var mm = pad(date.getMinutes(), 2);
	  var ss = pad(date.getSeconds(), 2);
	  var SSS = pad(date.getMilliseconds(), 3);
	  return "".concat(yyyy, "-").concat(MM, "-").concat(dd, "T").concat(hh, ":").concat(mm, ":").concat(ss, ".").concat(SSS);
	}
	function localToUTC(dateString) {
	  if (dateString) {
	    return new Date(dateString).toJSON();
	  }
	}
	function pad(num, size) {
	  var s = String(num);

	  while (s.length < size) {
	    s = "0" + s;
	  }

	  return s;
	}
	function dataURItoBlob(dataURI) {
	  // Split metadata from data
	  var splitted = dataURI.split(","); // Split params

	  var params = splitted[0].split(";"); // Get mime-type from params

	  var type = params[0].replace("data:", ""); // Filter the name property from params

	  var properties = params.filter(function (param) {
	    return param.split("=")[0] === "name";
	  }); // Look for the name and use unknown if no name property.

	  var name;

	  if (properties.length !== 1) {
	    name = "unknown";
	  } else {
	    // Because we filtered out the other property,
	    // we only have the name case here.
	    name = properties[0].split("=")[1];
	  } // Built the Uint8Array Blob parameter from the base64 string.


	  var binary = atob(splitted[1]);
	  var array = [];

	  for (var _i = 0; _i < binary.length; _i++) {
	    array.push(binary.charCodeAt(_i));
	  } // Create the blob object


	  var blob = new window.Blob([new Uint8Array(array)], {
	    type: type
	  });
	  return {
	    blob: blob,
	    name: name
	  };
	}
	function rangeSpec(schema) {
	  var spec = {};

	  if (schema.multipleOf) {
	    spec.step = schema.multipleOf;
	  }

	  if (schema.minimum || schema.minimum === 0) {
	    spec.min = schema.minimum;
	  }

	  if (schema.maximum || schema.maximum === 0) {
	    spec.max = schema.maximum;
	  }

	  return spec;
	}
	function getMatchingOption(formData, options, rootSchema) {
	  for (var _i2 = 0; _i2 < options.length; _i2++) {
	    var option = options[_i2]; // If the schema describes an object then we need to add slightly more
	    // strict matching to the schema, because unless the schema uses the
	    // "requires" keyword, an object will match the schema as long as it
	    // doesn't have matching keys with a conflicting type. To do this we use an
	    // "anyOf" with an array of requires. This augmentation expresses that the
	    // schema should match if any of the keys in the schema are present on the
	    // object and pass validation.

	    if (option.properties) {
	      // Create an "anyOf" schema that requires at least one of the keys in the
	      // "properties" object
	      var requiresAnyOf = {
	        anyOf: Object.keys(option.properties).map(function (key) {
	          return {
	            required: [key]
	          };
	        })
	      };
	      var augmentedSchema = void 0; // If the "anyOf" keyword already exists, wrap the augmentation in an "allOf"

	      if (option.anyOf) {
	        // Create a shallow clone of the option
	        var shallowClone = _extends({}, option);

	        if (!shallowClone.allOf) {
	          shallowClone.allOf = [];
	        } else {
	          // If "allOf" already exists, shallow clone the array
	          shallowClone.allOf = shallowClone.allOf.slice();
	        }

	        shallowClone.allOf.push(requiresAnyOf);
	        augmentedSchema = shallowClone;
	      } else {
	        augmentedSchema = Object.assign({}, option, requiresAnyOf);
	      } // Remove the "required" field as it's likely that not all fields have
	      // been filled in yet, which will mean that the schema is not valid


	      delete augmentedSchema.required;

	      if (isValid(augmentedSchema, formData, rootSchema)) {
	        return _i2;
	      }
	    } else if (isValid(option, formData, rootSchema)) {
	      return _i2;
	    }
	  }

	  return 0;
	} // Check to see if a schema specifies that a value must be true

	function schemaRequiresTrueValue(schema) {
	  // Check if const is a truthy value
	  if (schema["const"]) {
	    return true;
	  } // Check if an enum has a single value of true


	  if (schema["enum"] && schema["enum"].length === 1 && schema["enum"][0] === true) {
	    return true;
	  } // If anyOf has a single value, evaluate the subschema


	  if (schema.anyOf && schema.anyOf.length === 1) {
	    return schemaRequiresTrueValue(schema.anyOf[0]);
	  } // If oneOf has a single value, evaluate the subschema


	  if (schema.oneOf && schema.oneOf.length === 1) {
	    return schemaRequiresTrueValue(schema.oneOf[0]);
	  } // Evaluate each subschema in allOf, to see if one of them requires a true
	  // value


	  if (schema.allOf) {
	    return schema.allOf.some(schemaRequiresTrueValue);
	  }

	  return false;
	}

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var Form =
	/*#__PURE__*/
	function (_Component) {
	  _inherits(Form, _Component);

	  function Form(props) {
	    var _this;

	    _classCallCheck(this, Form);

	    _this = _possibleConstructorReturn(this, _getPrototypeOf(Form).call(this, props));

	    _defineProperty(_assertThisInitialized(_this), "getUsedFormData", function (formData, fields) {
	      //for the case of a single input form
	      if (fields.length === 0 && _typeof(formData) !== "object") {
	        return formData;
	      }

	      var data = pick_1(formData, fields);

	      if (Array.isArray(formData)) {
	        return Object.keys(data).map(function (key) {
	          return data[key];
	        });
	      }

	      return data;
	    });

	    _defineProperty(_assertThisInitialized(_this), "getFieldNames", function (pathSchema, formData) {
	      var getAllPaths = function getAllPaths(_obj) {
	        var acc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	        var paths = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [""];
	        Object.keys(_obj).forEach(function (key) {
	          if (_typeof(_obj[key]) === "object") {
	            var newPaths = paths.map(function (path) {
	              return "".concat(path, ".").concat(key);
	            }); // If an object is marked with additionalProperties, all its keys are valid

	            if (_obj[key].__rjsf_additionalProperties && _obj[key].$name !== "") {
	              acc.push(_obj[key].$name);
	            } else {
	              getAllPaths(_obj[key], acc, newPaths);
	            }
	          } else if (key === "$name" && _obj[key] !== "") {
	            paths.forEach(function (path) {
	              path = path.replace(/^\./, "");

	              var formValue = get_1(formData, path); // adds path to fieldNames if it points to a value
	              // or an empty object/array


	              if (_typeof(formValue) !== "object" || isEmpty_1(formValue)) {
	                acc.push(path);
	              }
	            });
	          }
	        });
	        return acc;
	      };

	      return getAllPaths(pathSchema);
	    });

	    _defineProperty(_assertThisInitialized(_this), "onChange", function (formData, newErrorSchema) {
	      if (isObject(formData) || Array.isArray(formData)) {
	        var newState = _this.getStateFromProps(_this.props, formData);

	        formData = newState.formData;
	      }

	      var mustValidate = !_this.props.noValidate && _this.props.liveValidate;
	      var state = {
	        formData: formData
	      };
	      var newFormData = formData;

	      if (_this.props.omitExtraData === true && _this.props.liveOmit === true) {
	        var retrievedSchema = retrieveSchema(_this.state.schema, _this.state.schema, formData);
	        var pathSchema = toPathSchema(retrievedSchema, "", _this.state.schema, formData);

	        var fieldNames = _this.getFieldNames(pathSchema, formData);

	        newFormData = _this.getUsedFormData(formData, fieldNames);
	        state = {
	          formData: newFormData
	        };
	      }

	      if (mustValidate) {
	        var schemaValidation = _this.validate(newFormData);

	        var errors = schemaValidation.errors;
	        var errorSchema = schemaValidation.errorSchema;
	        var schemaValidationErrors = errors;
	        var schemaValidationErrorSchema = errorSchema;

	        if (_this.props.extraErrors) {
	          errorSchema = mergeObjects(errorSchema, _this.props.extraErrors, !!"concat arrays");
	          errors = toErrorList(errorSchema);
	        }

	        state = {
	          formData: newFormData,
	          errors: errors,
	          errorSchema: errorSchema,
	          schemaValidationErrors: schemaValidationErrors,
	          schemaValidationErrorSchema: schemaValidationErrorSchema
	        };
	      } else if (!_this.props.noValidate && newErrorSchema) {
	        var _errorSchema = _this.props.extraErrors ? mergeObjects(newErrorSchema, _this.props.extraErrors, !!"concat arrays") : newErrorSchema;

	        state = {
	          formData: newFormData,
	          errorSchema: _errorSchema,
	          errors: toErrorList(_errorSchema)
	        };
	      }

	      _this.setState(state, function () {
	        return _this.props.onChange && _this.props.onChange(_this.state);
	      });
	    });

	    _defineProperty(_assertThisInitialized(_this), "onBlur", function () {
	      if (_this.props.onBlur) {
	        var _this$props;

	        (_this$props = _this.props).onBlur.apply(_this$props, arguments);
	      }
	    });

	    _defineProperty(_assertThisInitialized(_this), "onFocus", function () {
	      if (_this.props.onFocus) {
	        var _this$props2;

	        (_this$props2 = _this.props).onFocus.apply(_this$props2, arguments);
	      }
	    });

	    _defineProperty(_assertThisInitialized(_this), "onSubmit", function (event) {
	      event.preventDefault();

	      if (event.target !== event.currentTarget) {
	        return;
	      }

	      event.persist();
	      var newFormData = _this.state.formData;

	      if (_this.props.omitExtraData === true) {
	        var retrievedSchema = retrieveSchema(_this.state.schema, _this.state.schema, newFormData);
	        var pathSchema = toPathSchema(retrievedSchema, "", _this.state.schema, newFormData);

	        var fieldNames = _this.getFieldNames(pathSchema, newFormData);

	        newFormData = _this.getUsedFormData(newFormData, fieldNames);
	      }

	      if (!_this.props.noValidate) {
	        var schemaValidation = _this.validate(newFormData);

	        var _errors = schemaValidation.errors;
	        var _errorSchema2 = schemaValidation.errorSchema;
	        var schemaValidationErrors = _errors;
	        var schemaValidationErrorSchema = _errorSchema2;

	        if (Object.keys(_errors).length > 0) {
	          if (_this.props.extraErrors) {
	            _errorSchema2 = mergeObjects(_errorSchema2, _this.props.extraErrors, !!"concat arrays");
	            _errors = toErrorList(_errorSchema2);
	          }

	          _this.setState({
	            errors: _errors,
	            errorSchema: _errorSchema2,
	            schemaValidationErrors: schemaValidationErrors,
	            schemaValidationErrorSchema: schemaValidationErrorSchema
	          }, function () {
	            if (_this.props.onError) {
	              _this.props.onError(_errors);
	            } else {
	              console.error("Form validation failed", _errors);
	            }
	          });

	          return;
	        }
	      } // There are no errors generated through schema validation.
	      // Check for user provided errors and update state accordingly.


	      var errorSchema;
	      var errors;

	      if (_this.props.extraErrors) {
	        errorSchema = _this.props.extraErrors;
	        errors = toErrorList(errorSchema);
	      } else {
	        errorSchema = {};
	        errors = [];
	      }

	      _this.setState({
	        formData: newFormData,
	        errors: errors,
	        errorSchema: errorSchema,
	        schemaValidationErrors: [],
	        schemaValidationErrorSchema: {}
	      }, function () {
	        if (_this.props.onSubmit) {
	          _this.props.onSubmit(_objectSpread({}, _this.state, {
	            formData: newFormData,
	            status: "submitted"
	          }), event);
	        }
	      });
	    });

	    _this.state = _this.getStateFromProps(props, props.formData);

	    if (_this.props.onChange && !deepEquals(_this.state.formData, _this.props.formData)) {
	      _this.props.onChange(_this.state);
	    }

	    _this.formElement = null;
	    return _this;
	  }

	  _createClass(Form, [{
	    key: "UNSAFE_componentWillReceiveProps",
	    value: function UNSAFE_componentWillReceiveProps(nextProps) {
	      var nextState = this.getStateFromProps(nextProps, nextProps.formData);

	      if (!deepEquals(nextState.formData, nextProps.formData) && !deepEquals(nextState.formData, this.state.formData) && this.props.onChange) {
	        this.props.onChange(nextState);
	      }

	      this.setState(nextState);
	    }
	  }, {
	    key: "getStateFromProps",
	    value: function getStateFromProps(props, inputFormData) {
	      var state = this.state || {};
	      var schema = "schema" in props ? props.schema : this.props.schema;
	      var uiSchema = "uiSchema" in props ? props.uiSchema : this.props.uiSchema;
	      var edit = typeof inputFormData !== "undefined";
	      var liveValidate = "liveValidate" in props ? props.liveValidate : this.props.liveValidate;
	      var mustValidate = edit && !props.noValidate && liveValidate;
	      var rootSchema = schema;
	      var formData = getDefaultFormState(schema, inputFormData, rootSchema);
	      var retrievedSchema = retrieveSchema(schema, rootSchema, formData);
	      var customFormats = props.customFormats;
	      var additionalMetaSchemas = props.additionalMetaSchemas;

	      var getCurrentErrors = function getCurrentErrors() {
	        if (props.noValidate) {
	          return {
	            errors: [],
	            errorSchema: {}
	          };
	        } else if (!props.liveValidate) {
	          return {
	            errors: state.schemaValidationErrors || [],
	            errorSchema: state.schemaValidationErrorSchema || {}
	          };
	        }

	        return {
	          errors: state.errors || [],
	          errorSchema: state.errorSchema || {}
	        };
	      };

	      var errors, errorSchema, schemaValidationErrors, schemaValidationErrorSchema;

	      if (mustValidate) {
	        var schemaValidation = this.validate(formData, schema, additionalMetaSchemas, customFormats);
	        errors = schemaValidation.errors;
	        errorSchema = schemaValidation.errorSchema;
	        schemaValidationErrors = errors;
	        schemaValidationErrorSchema = errorSchema;
	      } else {
	        var currentErrors = getCurrentErrors();
	        errors = currentErrors.errors;
	        errorSchema = currentErrors.errorSchema;
	        schemaValidationErrors = state.schemaValidationErrors;
	        schemaValidationErrorSchema = state.schemaValidationErrorSchema;
	      }

	      if (props.extraErrors) {
	        errorSchema = mergeObjects(errorSchema, props.extraErrors, !!"concat arrays");
	        errors = toErrorList(errorSchema);
	      }

	      var idSchema = toIdSchema(retrievedSchema, uiSchema["ui:rootFieldId"], rootSchema, formData, props.idPrefix);
	      var nextState = {
	        schema: schema,
	        uiSchema: uiSchema,
	        idSchema: idSchema,
	        formData: formData,
	        edit: edit,
	        errors: errors,
	        errorSchema: errorSchema,
	        additionalMetaSchemas: additionalMetaSchemas
	      };

	      if (schemaValidationErrors) {
	        nextState.schemaValidationErrors = schemaValidationErrors;
	        nextState.schemaValidationErrorSchema = schemaValidationErrorSchema;
	      }

	      return nextState;
	    }
	  }, {
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return shouldRender(this, nextProps, nextState);
	    }
	  }, {
	    key: "validate",
	    value: function validate(formData) {
	      var schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props.schema;
	      var additionalMetaSchemas = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.props.additionalMetaSchemas;
	      var customFormats = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.props.customFormats;
	      var _this$props3 = this.props,
	          validate = _this$props3.validate,
	          transformErrors = _this$props3.transformErrors;

	      var _this$getRegistry = this.getRegistry(),
	          rootSchema = _this$getRegistry.rootSchema;

	      var resolvedSchema = retrieveSchema(schema, rootSchema, formData);
	      return validateFormData(formData, resolvedSchema, validate, transformErrors, additionalMetaSchemas, customFormats);
	    }
	  }, {
	    key: "renderErrors",
	    value: function renderErrors() {
	      var _this$state = this.state,
	          errors = _this$state.errors,
	          errorSchema = _this$state.errorSchema,
	          schema = _this$state.schema,
	          uiSchema = _this$state.uiSchema;
	      var _this$props4 = this.props,
	          ErrorList = _this$props4.ErrorList,
	          showErrorList = _this$props4.showErrorList,
	          formContext = _this$props4.formContext;

	      if (errors.length && showErrorList != false) {
	        return React.createElement(ErrorList, {
	          errors: errors,
	          errorSchema: errorSchema,
	          schema: schema,
	          uiSchema: uiSchema,
	          formContext: formContext
	        });
	      }

	      return null;
	    }
	  }, {
	    key: "getRegistry",
	    value: function getRegistry() {
	      // For BC, accept passed SchemaField and TitleField props and pass them to
	      // the "fields" registry one.
	      var _getDefaultRegistry = getDefaultRegistry(),
	          fields = _getDefaultRegistry.fields,
	          widgets = _getDefaultRegistry.widgets;

	      return {
	        fields: _objectSpread({}, fields, this.props.fields),
	        widgets: _objectSpread({}, widgets, this.props.widgets),
	        ArrayFieldTemplate: this.props.ArrayFieldTemplate,
	        ObjectFieldTemplate: this.props.ObjectFieldTemplate,
	        FieldTemplate: this.props.FieldTemplate,
	        definitions: this.props.schema.definitions || {},
	        rootSchema: this.props.schema,
	        formContext: this.props.formContext || {}
	      };
	    }
	  }, {
	    key: "submit",
	    value: function submit() {
	      if (this.formElement) {
	        this.formElement.dispatchEvent(new CustomEvent("submit", {
	          cancelable: true
	        }));
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;

	      var _this$props5 = this.props,
	          children = _this$props5.children,
	          id = _this$props5.id,
	          idPrefix = _this$props5.idPrefix,
	          className = _this$props5.className,
	          tagName = _this$props5.tagName,
	          name = _this$props5.name,
	          method = _this$props5.method,
	          target = _this$props5.target,
	          action = _this$props5.action,
	          deprecatedAutocomplete = _this$props5.autocomplete,
	          currentAutoComplete = _this$props5.autoComplete,
	          enctype = _this$props5.enctype,
	          acceptcharset = _this$props5.acceptcharset,
	          noHtml5Validate = _this$props5.noHtml5Validate,
	          disabled = _this$props5.disabled,
	          readonly = _this$props5.readonly,
	          formContext = _this$props5.formContext;
	      var _this$state2 = this.state,
	          schema = _this$state2.schema,
	          uiSchema = _this$state2.uiSchema,
	          formData = _this$state2.formData,
	          errorSchema = _this$state2.errorSchema,
	          idSchema = _this$state2.idSchema;
	      var registry = this.getRegistry();
	      var _SchemaField = registry.fields.SchemaField;
	      var FormTag = tagName ? tagName : "form";

	      if (deprecatedAutocomplete) {
	        console.warn("Using autocomplete property of Form is deprecated, use autoComplete instead.");
	      }

	      var autoComplete = currentAutoComplete ? currentAutoComplete : deprecatedAutocomplete;
	      return React.createElement(FormTag, {
	        className: className ? className : "rjsf",
	        id: id,
	        name: name,
	        method: method,
	        target: target,
	        action: action,
	        autoComplete: autoComplete,
	        encType: enctype,
	        acceptCharset: acceptcharset,
	        noValidate: noHtml5Validate,
	        onSubmit: this.onSubmit,
	        ref: function ref(form) {
	          _this2.formElement = form;
	        }
	      }, this.renderErrors(), React.createElement(_SchemaField, {
	        schema: schema,
	        uiSchema: uiSchema,
	        errorSchema: errorSchema,
	        idSchema: idSchema,
	        idPrefix: idPrefix,
	        formContext: formContext,
	        formData: formData,
	        onChange: this.onChange,
	        onBlur: this.onBlur,
	        onFocus: this.onFocus,
	        registry: registry,
	        disabled: disabled,
	        readonly: readonly
	      }), children ? children : React.createElement("div", null, React.createElement("button", {
	        type: "submit",
	        className: "btn btn-info"
	      }, "Submit")));
	    }
	  }]);

	  return Form;
	}(react.exports.Component);

	_defineProperty(Form, "defaultProps", {
	  uiSchema: {},
	  noValidate: false,
	  liveValidate: false,
	  disabled: false,
	  readonly: false,
	  noHtml5Validate: false,
	  ErrorList: ErrorList$1,
	  omitExtraData: false
	});

	({
	  widgets: PropTypes.object,
	  fields: PropTypes.object
	});

	var schema = {
	  type: "object",
	  title: "KITT4SME Digital Datasheet",
	  properties: {
	    information: {
	      $ref: "#/information"
	    },
	    hardware_dependencies: {
	      type: "array",
	      title: "Component hardware dependencies",
	      items: {
	        $ref: "#/hardware_dependency"
	      }
	    },
	    software_dependencies: {
	      type: "array",
	      title: "Component software dependencies",
	      items: {
	        $ref: "#/software_dependency"
	      }
	    },
	    module_properties: {
	      type: "object",
	      title: "Critical issues that the AI module provides soltions for",
	      $ref: "#/module_property"
	    },
	    public_endpoints: {
	      type: "array",
	      title: "Module public end points",
	      items: {
	        $ref: "#/public_endpoint"
	      }
	    }
	  },
	  information: {
	    type: "object",
	    title: "Component information",
	    properties: {
	      component_name: {
	        type: "string",
	        description: "Component name as it is found in the RAMP Marketplace"
	      },
	      component_uuid: {
	        type: "string",
	        description: "Component UUID hash that uniquely identifies component"
	      },
	      provider: {
	        type: "string",
	        description: "Link to the component provider information"
	      },
	      version: {
	        type: "string",
	        description: "Latest version number of the component"
	      },
	      description: {
	        type: "string",
	        description: "Description of the component outlining the indented use and high level features of the component"
	      },
	      datamodel: {
	        type: "string",
	        description: "Link to schema defining components datamodel"
	      },
	      multiuser_support: {
	        type: "boolean",
	        title: "Supports multiple users",
	        default: false
	      },
	      multtenancy_support: {
	        type: "boolean",
	        title: "Supports multitenancy",
	        default: false
	      },
	      dashboard: {
	        type: "string",
	        description: "Link to component dashboard"
	      }
	    }
	  },
	  hardware_dependency: {
	    type: "object",
	    title: "Hardware dependency",
	    properties: {
	      device_link: {
	        type: "string",
	        description: "Link to device resource that can be link to device data sheet or website further describ-ing device"
	      },
	      device_text: {
	        type: "string",
	        description: "Description of  the device manufacturer and model"
	      },
	      mandatory: {
	        type: "boolean",
	        default: false,
	        description: "Device is necessary for operation of the module"
	      }
	    }
	  },
	  software_dependency: {
	    type: "object",
	    title: "Software dependency",
	    properties: {
	      module_link: {
	        type: "string",
	        description: "Link to software resource that can be link to device data sheet or website further describ-ing device"
	      },
	      module_text: {
	        type: "string",
	        description: "Description of  the software manufacturer and model"
	      },
	      mandatory: {
	        type: "boolean",
	        default: false,
	        description: "Device is necessary for operation of the module"
	      }
	    }
	  },
	  module_property: {
	    type: "object",
	    title: "Component Critical Issues",
	    description: "Does the component help with issues related to:",
	    properties: {
	      machine_parameters: {
	        type: "boolean",
	        title: "wrong machine parameters",
	        default: false
	      },
	      automatic_product_quality_ctrl: {
	        type: "boolean",
	        title: "inaccurate automatic product quality control system",
	        default: false
	      },
	      stressful_manual_activities: {
	        type: "boolean",
	        title: "physically stressful manual activities",
	        default: false
	      },
	      lowskil_manual_operations: {
	        type: "boolean",
	        title: "low-skilled operations in specific manual activities",
	        default: false
	      },
	      stressful_cognitive_qualityctrl_activity: {
	        type: "boolean",
	        title: "stressful cognitive activity in the product quality control activity",
	        default: false
	      },
	      lim_human_skills_in_qualityctrl: {
	        type: "boolean",
	        title: "limited human skills in the product quality control activity",
	        default: false
	      },
	      handle_heavy_loads: {
	        type: "boolean",
	        title: "heavy loads to handle by operator",
	        default: false
	      },
	      manual_task_repetitiveness: {
	        type: "boolean",
	        title: "high repetitiveness of manual tasks",
	        default: false
	      },
	      working_environment_conditions: {
	        type: "boolean",
	        title: "unsustainability of the working environment conditions",
	        default: false
	      },
	      robotic_systems_collision: {
	        type: "boolean",
	        title: "collisions with robotic systems",
	        default: false
	      },
	      high_mental_effort_task: {
	        type: "boolean",
	        title: "activities that require high mental effort",
	        default: false
	      },
	      predictive_maintenance_signal_events: {
	        type: "boolean",
	        title: "lack of predictive maintenance & Lack of signal for unexpected events",
	        default: false
	      },
	      parameters_setup: {
	        type: "boolean",
	        title: "inaccurate setup of parameters",
	        default: false
	      },
	      system_configuration_definition: {
	        type: "boolean",
	        title: "difficulty in defining the appropriate system configuration",
	        default: false
	      },
	      machine_setup: {
	        type: "boolean",
	        title: "slow machine setup",
	        default: false
	      },
	      machinery_performance_monitoring: {
	        type: "boolean",
	        title: "lack of systems/methods to monitor the machinery performance",
	        default: false
	      }
	    }
	  },
	  public_endpoint: {
	    type: "object",
	    title: "Public API endpoints",
	    properties: {
	      endpoint: {
	        type: "string",
	        description: "Link to the module endpoint"
	      },
	      protocol: {
	        type: "string",
	        description: "Protocol that the endpoint expects like MQTT, REST, etc"
	      },
	      method: {
	        type: "string",
	        default: "",
	        description: "For REST this would be one of GET, POST, DELETE, PUT, PATCH"
	      },
	      headers: {
	        type: "array",
	        items: {
	          $ref: "#/headers"
	        }
	      },
	      payload: {
	        type: "string",
	        description: "Endpoint payload definition as JSON or other structured format"
	      }
	    }
	  },
	  headers: {
	    type: "object",
	    title: "HTML Header",
	    properties: {
	      key: {
	        type: "string",
	        description: "header key"
	      },
	      value: {
	        type: "string",
	        description: "header value"
	      }
	    }
	  }
	};
	ReactDOM.render( /*#__PURE__*/React.createElement(Form, {
	  schema: schema
	}), document.getElementById("app"));

})(crypto);
