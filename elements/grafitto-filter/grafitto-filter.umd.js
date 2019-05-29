!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/polymer/lib/utils/render-status.js"),require("@polymer/polymer/lib/legacy/polymer.dom.js"),require("@polymer/polymer/lib/legacy/templatizer-behavior.js"),require("@polymer/polymer/lib/legacy/mutable-data-behavior.js"),require("@polymer/polymer/lib/legacy/class.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/polymer/lib/utils/render-status.js","@polymer/polymer/lib/legacy/polymer.dom.js","@polymer/polymer/lib/legacy/templatizer-behavior.js","@polymer/polymer/lib/legacy/mutable-data-behavior.js","@polymer/polymer/lib/legacy/class.js"],t):t((e=e||self).GrafittoFilter={},e.polymerElement_js,null,e.polymer_dom_js,e.templatizerBehavior_js,e.mutableDataBehavior_js,e.class_js)}(this,function(e,t,r,o,i,n,l){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e,t,r){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(r):i.value}})(e,t,r||e)}function y(){var e,t,r=(e=['\n      <div id="dom"><slot></slot></div>\n    '],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return y=function(){return r},r}var m=function(e){function r(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),c(this,s(r).apply(this,arguments))}var m,b,h;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(r,l.mixinBehaviors([i.Templatizer,n.OptionalMutableDataBehavior],t.PolymerElement)),m=r,h=[{key:"template",get:function(){return t.html(y())}},{key:"tag",get:function(){return"grafitto-filter"}},{key:"properties",get:function(){var e={items:{type:Array,value:[]},like:{type:String,value:""},where:{type:String,value:"name"},caseSensitive:{type:Boolean,value:!1,reflectToAttribute:!0},as:{type:String,value:"items"},filtered:{type:Array,computed:"_computeFiltered(items, where, like, caseSensitive)",observer:"_onFilter"},f:{type:Function,notify:!0}};return f(s(r),"properties",this)&&(e=Object.assign(e,f(s(r),"properties",this))),e}},{key:"observers",get:function(){return["_populateUserTemplate(filtered)"]}}],(b=[{key:"filter",value:function(){this.where=""}},{key:"_computeFiltered",value:function(e,t,r,o){var i=null;i=o?new RegExp(r):new RegExp(r,"i");var n=[];if(this.f){var l=this.f.bind(this);n=e.filter(l)}else{var u=this._decomposeWhere.bind(this);n=e.filter(function(e){if("object"==a(e)){var r=u(t,e);return void 0===r&&""!=t&&console.warn("grafitto-filter was unable to find a property in '"+t+"'"),i.test(r)}return"string"==typeof e?i.test(e):"number"==typeof e?i.test(e.toString()):void 0})}return n}},{key:"_populateUserTemplate",value:function(e){this.ctor?this.__clone[this.as]=e:(this._userTemplate=this.querySelector("template"),this._userTemplate||console.warn("grafitto-filter requires a template to be provided in light-dom"),this.templatize(this._userTemplate),this.__clone=this.stamp(null),this.__clone[this.as]=e,o.dom(this).appendChild(this.__clone.root))}},{key:"_decomposeWhere",value:function(e,t){return e.split(".").reduce(function(e,t){return e&&e[t]},t)}},{key:"_onFilter",value:function(){this.dispatchEvent(new CustomEvent("filter",{bubbles:!0,cancelable:!0,composed:!0,detail:!0}))}}])&&u(m.prototype,b),h&&u(m,h),r}();window.customElements.define(m.tag,m),e.GrafittoFilter=m,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=grafitto-filter.umd.js.map
