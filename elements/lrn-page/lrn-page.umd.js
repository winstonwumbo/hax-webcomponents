!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@lrnwebcomponents/oer-schema/oer-schema.js"),require("lit-element/lit-element.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/oer-schema/oer-schema.js","lit-element/lit-element.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).LrnPage={},null,e.litElement_js)}(this,(function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=o(e);if(t){var c=o(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return i(this,n)}}function f(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var l,s,a=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(p,e);var t,o,i,a=u(p);function p(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),a.call(this)}return t=p,i=[{key:"styles",get:function(){return[n.css(s||(s=f(["\n        :host {\n          display: block;\n        }\n      "])))]}},{key:"tag",get:function(){return"lrn-page"}}],(o=[{key:"render",value:function(){return n.html(l||(l=f([" <oer-schema><slot></slot></oer-schema> "])))}}])&&r(t.prototype,o),i&&r(t,i),p}(n.LitElement);window.customElements.define(a.tag,a),e.LrnPage=a,Object.defineProperty(e,"__esModule",{value:!0})}));
