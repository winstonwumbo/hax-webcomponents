!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@lrnwebcomponents/simple-tooltip/simple-tooltip.js"),require("@lrnwebcomponents/hexagon-loader/hexagon-loader.js"),require("lit"),require("@lrnwebcomponents/simple-colors/simple-colors.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-button-lite.js"),require("@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/simple-tooltip/simple-tooltip.js","@lrnwebcomponents/hexagon-loader/hexagon-loader.js","lit","@lrnwebcomponents/simple-colors/simple-colors.js","@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-icon/lib/simple-icon-button-lite.js","@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).CsvRender={},null,null,t.lit,t.simpleColors_js,null,null,null,t.IntersectionObserverMixin_js)}(this,(function(t,e,n,r,o,i,a,c,l){"use strict";function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
f=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new k(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return _()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=x(a,n);if(c){if(c===u)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(t,n,a),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var u={};function p(){}function h(){}function d(){}var b={};c(b,o,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(E([])));m&&m!==e&&n.call(m,o)&&(b=m);var v=d.prototype=p.prototype=Object.create(b);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function r(o,i,a,c){var l=s(t[o],t,i);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(l.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=s(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,u;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:_}}function _(){return{value:void 0,done:!0}}return h.prototype=d,c(v,"constructor",d),c(d,"constructor",h),h.displayName=c(d,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,a,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},g(w.prototype),c(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new w(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(v),c(v,a,"Generator"),c(v,o,(function(){return this})),c(v,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=E,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},t}function p(t,e,n,r,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(r,o)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}function y(t,e){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},y(t,e)}function m(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=b(t);if(e){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function g(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=b(t)););return t}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=g(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},w.apply(this,arguments)}function x(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function j(t){return function(t){if(Array.isArray(t))return O(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return O(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var k,E,_,P,S,L,A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&y(t,e)}(l,t);var e,n,o,i,a,c=v(l);function l(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),(t=c.call(this)).loading=!1,t.table=[],t.tableHeadings=[],t.tableData="",t}return e=l,n=[{key:"updated",value:function(t){var e=this;w(b(l.prototype),"updated",this)&&w(b(l.prototype),"updated",this).call(this,t),t.forEach((function(t,n){"elementVisible"==n&&e.elementVisible,["dataSource","elementVisible"].includes(n)&&e.dataSource&&e.elementVisible&&(clearTimeout(e.__debouce),e.loading=!0,e.__debouce=setTimeout((function(){e.loadCSVData()}),500))}))}},{key:"render",value:function(){return r.html(k||(k=x(['\n      <hexagon-loader\n        id="loading"\n        accent-color="','"\n        ?loading="','"\n        item-count="4"\n        size="small"\n      ></hexagon-loader>\n      <a href="','" id="download" tabindex="-1">\n        <simple-icon-button-lite\n          id="ficon"\n          icon="file-download"\n        ></simple-icon-button-lite>\n      </a>\n      <simple-tooltip for="ficon" offset="14" position="top"\n        >Download table data</simple-tooltip\n      >\n      <table class="table" summary="','">\n        ',"\n        <thead>\n          <tr>\n            ","\n          </tr>\n        </thead>\n        <tbody>\n          ","\n        </tbody>\n      </table>\n    "])),this.accentColor,this.loading,this.dataSource,this.summary,this.caption?r.html(E||(E=x(["\n              <caption>\n                ","\n              </caption>\n            "])),this.caption):"",this.tableHeadings.map((function(t){return r.html(_||(_=x([' <th scope="col">',"</th> "])),t)})),this.table.map((function(t){return r.html(P||(P=x(["\n              <tr>\n                ","\n              </tr>\n            "])),t.map((function(t){return r.html(S||(S=x([" <td>","</td> "])),t)})))})))}},{key:"handleResponse",value:function(){this.table=this.CSVtoArray(this.tableData),this.tableHeadings=this.table.shift(),this.loading=!1}},{key:"CSVtoArray",value:function(t){var e,n="",r=[""],o=[r],i=0,a=0,c=!0;for(e in t)'"'===(e=t[e])?(c&&e===n&&(r[i]+=e),c=!c):","===e&&c?e=r[++i]="":"\n"===e&&c?("\r"===n&&(r[i]=r[i].slice(0,-1)),r=o[++a]=[e=""],i=0):r[i]+=e,n=e;return o}},{key:"loadCSVData",value:(i=f().mark((function t(){var e=this;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(this.dataSource,{method:this.method}).then((function(t){if(t.ok)return t.text()})).then((function(t){e.tableData=t,e.handleResponse()}));case 2:case"end":return t.stop()}}),t,this)})),a=function(){var t=this,e=arguments;return new Promise((function(n,r){var o=i.apply(t,e);function a(t){p(o,n,r,a,c,"next",t)}function c(t){p(o,n,r,a,c,"throw",t)}a(void 0)}))},function(){return a.apply(this,arguments)})}],o=[{key:"styles",get:function(){return[].concat(j(w(b(l),"styles",this)),[r.css(L||(L=x(['\n        :host {\n          display: block;\n        }\n        .table {\n          width: 100%;\n          border: 1px solid var(--simple-colors-default-theme-accent-6);\n          border-collapse: collapse;\n          white-space: nowrap;\n          font-size: 16px;\n          background-color: var(--simple-colors-default-theme-grey-1);\n        }\n        .table thead {\n          padding-bottom: 0.16px;\n          position: sticky;\n        }\n        .table caption {\n          background-color: var(--simple-colors-default-theme-accent-1);\n          font-weight: bold;\n          padding: 8px;\n          border: 1px solid var(--simple-colors-default-theme-accent-6);\n          border-bottom: none;\n        }\n        :host(:not([accent-color])) .table caption,\n        :host([accent-color="grey"]) .table caption {\n          background-color: var(--simple-colors-default-theme-accent-2);\n        }\n        .table tbody tr {\n          position: relative;\n          height: 48px;\n          -webkit-transition-duration: 0.28s;\n          transition-duration: 0.28s;\n          -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n          -webkit-transition-property: background-color;\n          transition-property: background-color;\n        }\n        .table tbody tr:hover {\n          background-color: var(--simple-colors-default-theme-accent-1);\n        }\n        :host(:not([accent-color])) .table tbody tr:hover,\n        :host([accent-color="grey"]) .table tbody tr:hover {\n          background-color: var(--simple-colors-default-theme-accent-2);\n        }\n        .table td,\n        .table thead th,\n        .table th {\n          padding: 0 1.125em;\n          text-align: left;\n        }\n        .table td {\n          border-top: 1px solid var(--simple-colors-default-theme-accent-6);\n          border-bottom: 1px solid var(--simple-colors-default-theme-accent-6);\n        }\n        .table th {\n          position: relative;\n          vertical-align: bottom;\n          text-overflow: ellipsis;\n          font-size: 16px;\n          font-weight: bold;\n          line-height: 24px;\n          letter-spacing: 0;\n          color: rgba(0, 0, 0, 0.54);\n          height: 48px;\n          padding-bottom: 8px;\n          box-sizing: border-box;\n        }\n        #loading {\n          position: absolute;\n          left: calc(50% - 70px);\n        }\n        simple-icon-lite {\n          display: inline-flex;\n          margin: 0;\n          padding: 0;\n        }\n        #download button:hover,\n        #download button:focus,\n        #download button:active {\n          color: var(--simple-colors-default-theme-accent-8);\n          outline: 2px solid var(--simple-colors-default-theme-accent-6);\n        }\n      '])))])}},{key:"tag",get:function(){return"csv-render"}},{key:"properties",get:function(){return u(u({},w(b(l),"properties",this)),{},{dataSource:{type:String,attribute:"data-source"},loading:{type:Boolean},caption:{type:String},summary:{type:String},table:{type:Array},tableHeadings:{type:Array},tableData:{type:String,attribute:"table-data"}})}}],n&&h(e.prototype,n),o&&h(e,o),Object.defineProperty(e,"prototype",{writable:!1}),l}(l.IntersectionObserverMixin(o.SimpleColors));customElements.define(A.tag,A),t.CsvRender=A,Object.defineProperty(t,"__esModule",{value:!0})}));
