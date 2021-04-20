!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).UserAction={})}(this,function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function a(e,t,n){return(a=u()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&o(i,n.prototype),i}).apply(null,arguments)}function c(e){var t="function"==typeof Map?new Map:void 0;return(c=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return a(e,arguments,i(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),o(r,e)})(e)}function s(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return u=e.done,e},e:function(e){a=!0,o=e},f:function(){try{u||null==n.return||n.return()}finally{if(a)throw o}}}}var h=new(function(){function e(){t(this,e)}return r(e,[{key:"valid",value:function(e){return["click","hover","mousedown","mouseup","visibility","keypress","keydown","keyup","focusin","focusout"].includes(e)}},{key:"fire",value:function(e,t,n,r){n.eventType=t,r.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,cancelable:!0,detail:n}))}}]),e}()),d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(d,c(HTMLElement));var n,a,f=(n=d,a=u(),function(){var e,t=i(n);if(a){var r=i(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return s(this,e)});function d(){var e;return t(this,d),(e=f.call(this)).tag=d.tag,e.fired=!1,e.track="visibility",e.eventname="user-engagement",e.every=!1,e.visiblelimit=.5,e}return r(d,null,[{key:"tag",get:function(){return"user-action"}}]),r(d,[{key:"connectedCallback",value:function(){this.__ready=!0}},{key:"attributeChangedCallback",value:function(e,t,n){if("track"===e&&n)switch(n){case"visibility":this.observer=new IntersectionObserver(this.handleIntersectionCallback.bind(this),{root:document.rootElement,rootMargin:"0px",threshold:[0,.25,.5,.75,1]}),this.observer.observe(this);break;default:this.addEventListener(n,this.userActionEvent.bind(this))}}},{key:"handleIntersectionCallback",value:function(e){var t,n=l(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;Number(r.intersectionRatio).toFixed(2)>=this.visiblelimit&&this.__ready&&this.userActionEvent({detail:"visible"})}}catch(e){n.e(e)}finally{n.f()}}},{key:"userActionEvent",value:function(e){this._haxstate||this.fired&&!this.every||!h.valid(this.track)?h.valid(this.track)||console.warn(this.track+" was not valid"):(h.fire(this.eventname,this.track,e,this),this.fired=!0)}},{key:"haxHooks",value:function(){return{editModeChanged:"haxeditModeChanged",activeElementChanged:"haxactiveElementChanged",gizmoRegistration:"haxgizmoRegistration"}}},{key:"haxgizmoRegistration",value:function(e){window.dispatchEvent(new CustomEvent("i18n-manager-register-element",{detail:{namespace:"".concat(this.tag,".haxProperties"),localesPath:new URL("./locales","undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("user-action.umd.js",document.baseURI).href).href,locales:["es"]}}))}},{key:"haxactiveElementChanged",value:function(e,t){t&&(this._haxstate=t)}},{key:"haxeditModeChanged",value:function(e){this._haxstate=e}},{key:"every",get:function(){return this.getAttribute("every")},set:function(e){e&&this.setAttribute("every",e)}}],[{key:"observedAttributes",get:function(){return["track","eventname","every"]}},{key:"haxProperties",get:function(){return new URL("./lib/".concat(this.tag,".haxProperties.json"),"undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("user-action.umd.js",document.baseURI).href).href}}]),d}();customElements.define(d.tag,d),e.UserAction=d,Object.defineProperty(e,"__esModule",{value:!0})});
