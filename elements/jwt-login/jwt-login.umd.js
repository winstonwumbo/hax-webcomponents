!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/iron-ajax/iron-ajax.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/iron-ajax/iron-ajax.js"],t):t((e=e||self).JwtLogin={},e.polymerElement_js)}(this,function(e,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e,t,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r(e)););return e}(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function a(){var e,t,n=(e=['\n      <style>\n        :host {\n          visibility: hidden;\n        }\n      </style>\n      <iron-ajax\n        id="loginrequest"\n        method="[[method]]"\n        body="[[body]]"\n        url="[[url]]"\n        handle-as="json"\n        content-type="application/json"\n        on-response="loginResponse"\n      >\n      </iron-ajax>\n    '],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return a=function(){return n},n}var c=function(e){function c(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),l(this,r(c).apply(this,arguments))}var s,f,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(c,t.PolymerElement),s=c,p=[{key:"template",get:function(){return t.html(a())}},{key:"tag",get:function(){return"jwt-login"}},{key:"properties",get:function(){return{url:{type:String},method:{type:String,value:"GET"},body:{type:Object,value:{}},key:{type:String,value:"jwt"},jwt:{type:String,notify:!0,observer:"_jwtChanged"}}}}],(f=[{key:"_jwtChanged",value:function(e,t){null!=e&&""!=e||"undefined"===n(t)?e&&(localStorage.setItem(this.key,e),this.dispatchEvent(new CustomEvent("jwt-token",{bubbles:!0,cancelable:!0,composed:!0,detail:e})),this.dispatchEvent(new CustomEvent("jwt-logged-in",{bubbles:!0,cancelable:!0,composed:!0,detail:!0}))):(localStorage.removeItem(this.key),this.dispatchEvent(new CustomEvent("jwt-logged-in",{bubbles:!0,cancelable:!0,composed:!0,detail:!1})))}},{key:"ready",value:function(){u(r(c.prototype),"ready",this).call(this),this.jwt=localStorage.getItem(this.key)}},{key:"toggleLogin",value:function(){null==this.jwt?this.$.loginrequest.generateRequest():(this.set("body",{}),this.jwt=null)}},{key:"loginResponse",value:function(e){this.jwt=e.detail.response}}])&&o(s.prototype,f),p&&o(s,p),c}();window.customElements.define(c.tag,c),e.JwtLogin=c,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=jwt-login.umd.js.map
