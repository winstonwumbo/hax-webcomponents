!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"],t):t((e=e||self).FullWidthImage={},e.polymerElement_js,e.HAXWiring_js)}(this,function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e,t,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=i(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function a(){var e,t,n=(e=["\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>\n<div>[[source]]</div>\n<div>[[caption]]</div>\n<div>[[alt]]</div>"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return a=function(){return n},n}var s=function(e){function s(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),u(this,i(s).apply(this,arguments))}var p,f,d;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(s,t.PolymerElement),p=s,d=[{key:"template",get:function(){return t.html(a())}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Full width-image",description:"full width image that flows beyond boundaries",icon:"icons:android",color:"green",groups:["Width"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{quick:[{property:"source",description:"",inputMethod:"textfield",required:!0,icon:"icons:link",validationType:"url"},{property:"alt",description:"",inputMethod:"alt",required:!0,icon:"icons:accessibility"}],configure:[{property:"source",description:"",inputMethod:"textfield",required:!0,icon:"icons:link",validationType:"url"},{property:"caption",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"},{property:"alt",description:"",inputMethod:"alt",required:!0,icon:"icons:accessibility"}],advanced:[]}}}},{key:"properties",get:function(){return{source:{name:"source",type:"String",value:"",reflectToAttribute:!1,observer:"_sourceChanged"},caption:{name:"caption",type:"String",value:"",reflectToAttribute:!1,observer:!1},alt:{name:"alt",type:"String",value:"",reflectToAttribute:!1,observer:!1}}}},{key:"tag",get:function(){return"full-width-image"}}],(f=[{key:"connectedCallback",value:function(){l(i(s.prototype),"connectedCallback",this).call(this),this.HAXWiring=new n.HAXWiring,this.HAXWiring.setup(s.haxProperties,s.tag,this)}},{key:"_sourceChanged",value:function(e,t){"undefined"!==o(e)&&console.log(e)}}])&&r(p.prototype,f),d&&r(p,d),s}();window.customElements.define(s.tag,s),e.FullWidthImage=s,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=full-width-image.umd.js.map
