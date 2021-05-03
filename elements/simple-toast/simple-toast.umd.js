!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js"),require("lit-element")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/simple-colors/simple-colors.js","lit-element"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).SimpleToast={},t.litElement_js,t.simpleColors_js,t.litElement)}(this,(function(t,e,n,o){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=p(t);if(e){var i=p(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return f(this,n)}}function m(t,e,n){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=p(t)););return t}(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function y(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function b(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var w,g,k,x,S=function(t){u(n,t);var e=h(n);function n(){var t;return i(this,n),(t=e.call(this)).text="",t.duration=3e3,t.opened=!1,t.addEventListener("animationend",(function(e){"fadeout"==e.animationName&&(t.opened=!1)})),t}return s(n,[{key:"updated",value:function(t){var e=this;m(p(n.prototype),"updated",this).call(this,t),t.forEach((function(t,n){"opened"===n&&(e.dispatchEvent(new CustomEvent("opened-changed",{detail:{value:e[n]}})),e[n]?e.show(e.text):e.hide()),"duration"===n&&e[n]&&(e.style.animation="fadein 0.2s, fadeout 0.2s "+e[n]/1e3+"s")}))}},{key:"render",value:function(){return o.html(w||(w=y(["<span><span>","</span><slot></slot></span>"])),this.text)}},{key:"firstUpdated",value:function(t){m(p(n.prototype),"updated",this).call(this,t),this.style.setProperty("aria-live","assertive"),this.style.setProperty("role","alert"),this.style.setProperty("aria-atomic","true"),this.style.setProperty("aria-relevant","all")}},{key:"hide",value:function(){this.classList.remove("show")}},{key:"show",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.text=t,this.classList.add("show")}}],[{key:"tag",get:function(){return"simple-toast-el"}},{key:"styles",get:function(){return[].concat(b(m(p(n),"styles",this)),[o.css(g||(g=y(["\n        :host {\n          display: none;\n          justify-content: center;\n          position: fixed;\n          min-width: 100px;\n          text-align: center;\n          color: var(--simple-colors-default-theme-accent-1, white);\n          background-color: var(--simple-colors-default-theme-accent-12, black);\n          border-radius: var(--simple-toast-border-radius, 2px);\n          border: var(--simple-toast-border, none);\n          font-size: var(--simple-toast-font-size, 1em);\n          font-family: var(--simple-toast-font-family, sans-serif);\n        }\n        :host(.show) {\n          display: flex;\n        }\n        @-webkit-keyframes fadein {\n          from {\n            bottom: 0;\n            opacity: 0;\n          }\n          to {\n            bottom: var(--simple-toast-bottom, 40px);\n            opacity: 1;\n          }\n        }\n        @keyframes fadein {\n          from {\n            bottom: 0;\n            opacity: 0;\n          }\n          to {\n            bottom: var(--simple-toast-bottom, 40px);\n            opacity: 1;\n          }\n        }\n        @-webkit-keyframes fadeout {\n          from {\n            bottom: var(--simple-toast-bottom, 40px);\n            opacity: 1;\n          }\n          to {\n            bottom: 0;\n            opacity: 0;\n          }\n        }\n        @keyframes fadeout {\n          from {\n            bottom: var(--simple-toast-bottom, 40px);\n            opacity: 1;\n          }\n          to {\n            bottom: 0;\n            opacity: 0;\n          }\n        }\n      "])))])}},{key:"properties",get:function(){return c(c({},m(p(n),"properties",this)),{},{text:{type:String},duration:{type:Number},opened:{type:Boolean}})}}]),n}(n.SimpleColors);customElements.define(S.tag,S),window.SimpleToast=window.SimpleToast||{},window.SimpleToast.requestAvailability=function(){return window.SimpleToast.instance||(window.SimpleToast.instance=document.createElement("simple-toast"),document.body.appendChild(window.SimpleToast.instance)),window.SimpleToast.instance};var O=window.SimpleToast.requestAvailability(),j=function(t){u(o,t);var n=h(o);function o(){var t;return i(this,o),(t=n.call(this)).setDefaultToast(),t}return s(o,[{key:"render",value:function(){return e.html(k||(k=y(['\n\n<simple-toast-el\nid="toast"\naccent-color="','"\n?dark="','"\ntext="','"\nduration="','"\n?opened="','"\n@opened-changed="','"\n.class="','">\n  <slot></slot>\n  <button .hidden="','" @click="','">',"</button>\n</simple-toast-el>"])),this.accentColor,this.dark,this.text,this.duration,this.opened,this.openedChanged,this.classStyle,!this.closeButton,this.hide,this.closeText)}},{key:"connectedCallback",value:function(){m(p(o.prototype),"connectedCallback",this).call(this),window.addEventListener("simple-toast-hide",this.hideSimpleToast.bind(this)),window.addEventListener("simple-toast-show",this.showSimpleToast.bind(this))}},{key:"disconnectedCallback",value:function(){window.removeEventListener("simple-toast-hide",this.hideSimpleToast.bind(this)),window.removeEventListener("simple-toast-show",this.showSimpleToast.bind(this)),m(p(o.prototype),"disconnectedCallback",this).call(this)}},{key:"hideSimpleToast",value:function(t){this.hide()}},{key:"openedChanged",value:function(t){this.opened=t.detail.value}},{key:"setDefaultToast",value:function(){for(this.opened=!1,this.text="Saved",this.classStyle="",this.closeText="Close",this.duration=3e3,this.accentColor="grey",this.dark=!1,this.eventCallback=null,this.closeButton=!0;null!==this.firstChild;)this.removeChild(this.firstChild)}},{key:"showSimpleToast",value:function(t){this.setDefaultToast(),t.detail.duration&&(this.duration=t.detail.duration),t.detail.text&&(this.text=t.detail.text),t.detail.classStyle&&(this.classStyle=t.detail.classStyle),t.detail.closeText&&(this.closeText=t.detail.closeText),t.detail.closeButton&&(this.closeButton=t.detail.closeButton),t.detail.eventCallback&&(this.eventCallback=t.detail.eventCallback),t.detail.slot&&this.appendChild(t.detail.slot),t.detail.accentColor&&(this.accentColor=t.detail.accentColor),t.detail.dark&&(this.dark=t.detail.dark),this.show()}},{key:"show",value:function(t){this.opened=!0}},{key:"hide",value:function(t){if(this.eventCallback){var e=new CustomEvent(this.eventCallback,{bubbles:!0,cancelable:!0,detail:!0,composed:!0});this.dispatchEvent(e)}this.opened=!1}}],[{key:"styles",get:function(){return[].concat(b(m(p(o),"styles",this)),[e.css(x||(x=y(["\n:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\nsimple-toast-el {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  width: var(--simple-toast-width, auto);\n  color: var(--simple-toast-color, var(--simple-colors-default-theme-accent-1, white));\n  background-color: var(--simple-toast-bg, var(--simple-colors-default-theme-accent-12, black));\n  top: var(--simple-toast-top);\n  margin: var(--simple-toast-margin, 8px);\n  padding: var(--simple-toast-padding, 16px);\n  left: var(--simple-toast-left, 36px);\n  bottom: var(--simple-toast-bottom, 36px);\n  right: var(--simple-toast-right);\n  border: var(--simple-toast-border);\n  z-index: var(--simple-toast-z-index, 1000);\n  font-size: var(--simple-toast-font-size);\n}\n\nbutton {\n  margin-left: 8px;\n}\n      "])))])}},{key:"properties",get:function(){return c(c({},m(p(o),"properties",this)),{},{opened:{type:Boolean,reflect:!0},text:{type:String},classStyle:{type:String,attribute:"class-style"},closeText:{type:String,attribute:"close-text"},duration:{type:Number},eventCallback:{type:String,attribute:"event-callback"},closeButton:{type:Boolean,reflect:!0,attribute:"close-button"}})}},{key:"tag",get:function(){return"simple-toast"}}]),o}(n.SimpleColors);window.customElements.define(j.tag,j),t.SimpleToast=j,t.SimpleToastStore=O,Object.defineProperty(t,"__esModule",{value:!0})}));
