!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("@polymer/polymer/polymer-element.js"),require("@lrnwebcomponents/responsive-utility/responsive-utility.js")):"function"==typeof define&&define.amd?define(["@polymer/polymer/polymer-element.js","@lrnwebcomponents/responsive-utility/responsive-utility.js"],n):n((e=e||self).polymerElement_js)}(this,function(e){"use strict";function n(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,n,o){return n&&r(e.prototype,n),o&&r(e,o),e}function s(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&t(e,n)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function t(e,n){return(t=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function l(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function d(e,n,r){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,r){var o=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=i(e)););return e}(e,n);if(o){var s=Object.getOwnPropertyDescriptor(o,n);return s.get?s.get.call(r):s.value}})(e,n,r||e)}function c(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function g(){var e=c(['\n      <style>\n        :host {\n          position: relative;\n          min-height: 1px;\n          float: left;\n        }\n        :host:after {\n          clear: both;\n        }\n        #col-inner {\n          padding-left: 15px;\n          padding-right: 15px;\n          @apply --responsive-grid-col-inner;\n        }\n        /* Hide Print-Only on Screen */\n        @media screen {\n          :host([print-only]) {\n            display: none;\n          }\n        }\n        /* Hide Screen-Only on Print */\n        @media print {\n          :host([screen-only]) {\n            display: none;\n          }\n        }\n      </style>\n      <div id="col-inner"><slot></slot></div>\n    ']);return g=function(){return e},e}var p=function(r){function t(){return n(this,t),l(this,i(t).apply(this,arguments))}return s(t,e.PolymerElement),o(t,null,[{key:"template",get:function(){return e.html(g())}},{key:"tag",get:function(){return"responsive-grid-col"}},{key:"properties",get:function(){return{xl:{type:Number,value:1},lg:{type:Number,value:1},md:{type:Number,value:1},sm:{type:Number,value:1},xs:{type:Number,value:1}}}}]),t}();function w(){var e=c(["\n      <style>\n        :host {\n          display: none;\n          clear: both;\n        }\n      </style>\n    "]);return w=function(){return e},e}window.customElements.define(p.tag,p);var v=function(r){function t(){return n(this,t),l(this,i(t).apply(this,arguments))}return s(t,e.PolymerElement),o(t,null,[{key:"template",get:function(){return e.html(w())}},{key:"tag",get:function(){return"responsive-grid-clear"}},{key:"properties",get:function(){return{xl:{type:Boolean,value:!1},lg:{type:Boolean,value:!1},md:{type:Boolean,value:!1},sm:{type:Boolean,value:!1},xs:{type:Boolean,value:!1}}}}]),t}();function m(){var e=c(['\n      <style>\n        :host {\n          display: block;\n          width: 100%;\n          margin-right: auto;\n          margin-left: auto;\n          -webkit-box-sizing: border-box;\n          -moz-box-sizing: border-box;\n          box-sizing: border-box;\n        }\n        :host:before,\n        :host:after {\n          content: " ";\n          display: table;\n          -webkit-box-sizing: border-box;\n          -moz-box-sizing: border-box;\n          box-sizing: border-box;\n        }\n        #row-inner {\n          margin-left: -15px;\n          margin-right: -15px;\n          @apply --responsive-grid-row-inner;\n        }\n        :host #row-inner:before,\n        :host #row-inner:after {\n          content: " ";\n          display: table;\n        }\n        :host #row-inner:after {\n          clear: both;\n        }\n        :host #row-inner:before,\n        :host #row-inner:after {\n          -webkit-box-sizing: border-box;\n          -moz-box-sizing: border-box;\n          box-sizing: border-box;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-clear[xs]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-clear[sm]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-clear[md]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-clear[lg]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-clear[xl]) {\n          display: block;\n        }\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[xs="0"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[sm="0"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[md="0"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[lg="0"]) {\n          display: inline-block;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="12"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="12"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="12"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="12"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="12"]) {\n          width: 100%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="11"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="11"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="11"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="11"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="11"]) {\n          width: 91.66666667%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="10"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="10"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="10"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="10"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="10"]) {\n          width: 83.33333333%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="9"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="9"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="9"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="9"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="9"]) {\n          width: 75%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="8"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="8"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="8"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="8"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="8"]) {\n          width: 66.66666667%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="7"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="7"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="7"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="7"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="7"]) {\n          width: 58.33333333%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="6"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="6"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="6"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="6"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="6"]) {\n          width: 50%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="5"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="5"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="5"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="5"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="5"]) {\n          width: 41.66666667%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="4"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="4"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="4"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="4"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="4"]) {\n          width: 33.33333333%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="3"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="3"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="3"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="3"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="3"]) {\n          width: 25%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="2"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="2"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="2"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="2"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="2"]) {\n          width: 16.66666667%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="1"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="1"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="1"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="1"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="1"]) {\n          width: 8.33333333%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="0"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="0"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="0"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="0"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="0"]) {\n          display: none;\n        }\n        :host #row-inner ::slotted(* > #col-inner) {\n          padding: 0px;\n        }\n        :host #row-inner[gutter="1"] ::slotted(* > #col-inner) {\n          padding: 5px;\n        }\n        :host #row-inner[gutter="2"] ::slotted(* > #col-inner) {\n          padding: 10px;\n        }\n        :host #row-inner[gutter="3"] ::slotted(* > #col-inner) {\n          padding: 15px;\n        }\n        :host #row-inner[gutter="4"] ::slotted(* > #col-inner) {\n          padding: 20px;\n        }\n      </style>\n      <responsive-utility\n        sm$="[[sm]]"\n        md$="[[sm]]"\n        lg$="[[lg]]"\n        xl$="[[xl]]"\n        responsive-to-parent$="[[responsiveToParent]]"\n      >\n      </responsive-utility>\n      <div id="row-inner" screen$="[[screen]]" gutter$="[[gutter]]">\n        <slot></slot>\n      </div>\n    '],['\n      <style>\n        :host {\n          display: block;\n          width: 100%;\n          margin-right: auto;\n          margin-left: auto;\n          -webkit-box-sizing: border-box;\n          -moz-box-sizing: border-box;\n          box-sizing: border-box;\n        }\n        :host:before,\n        :host:after {\n          content: " ";\n          display: table;\n          -webkit-box-sizing: border-box;\n          -moz-box-sizing: border-box;\n          box-sizing: border-box;\n        }\n        #row-inner {\n          margin-left: -15px;\n          margin-right: -15px;\n          @apply --responsive-grid-row-inner;\n        }\n        :host #row-inner:before,\n        :host #row-inner:after {\n          content: " ";\n          display: table;\n        }\n        :host #row-inner:after {\n          clear: both;\n        }\n        :host #row-inner:before,\n        :host #row-inner:after {\n          -webkit-box-sizing: border-box;\n          -moz-box-sizing: border-box;\n          box-sizing: border-box;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-clear[xs]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-clear[sm]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-clear[md]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-clear[lg]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-clear[xl]) {\n          display: block;\n        }\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[xs="0"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[sm="0"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[md="0"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[lg="0"]) {\n          display: inline-block;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="12"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="12"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="12"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="12"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="12"]) {\n          width: 100%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="11"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="11"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="11"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="11"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="11"]) {\n          width: 91.66666667%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="10"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="10"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="10"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="10"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="10"]) {\n          width: 83.33333333%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="9"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="9"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="9"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="9"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="9"]) {\n          width: 75%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="8"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="8"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="8"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="8"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="8"]) {\n          width: 66.66666667%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="7"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="7"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="7"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="7"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="7"]) {\n          width: 58.33333333%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="6"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="6"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="6"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="6"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="6"]) {\n          width: 50%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="5"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="5"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="5"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="5"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="5"]) {\n          width: 41.66666667%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="4"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="4"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="4"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="4"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="4"]) {\n          width: 33.33333333%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="3"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="3"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="3"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="3"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="3"]) {\n          width: 25%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="2"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="2"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="2"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="2"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="2"]) {\n          width: 16.66666667%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="1"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="1"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="1"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="1"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="1"]) {\n          width: 8.33333333%;\n        }\n        #row-inner[screen="xs"] ::slotted(responsive-grid-col[xs="0"]),\n        #row-inner[screen="sm"] ::slotted(responsive-grid-col[sm="0"]),\n        #row-inner[screen="md"] ::slotted(responsive-grid-col[md="0"]),\n        #row-inner[screen="lg"] ::slotted(responsive-grid-col[lg="0"]),\n        #row-inner[screen="xl"] ::slotted(responsive-grid-col[xl="0"]) {\n          display: none;\n        }\n        :host #row-inner ::slotted(* > #col-inner) {\n          padding: 0px;\n        }\n        :host #row-inner[gutter="1"] ::slotted(* > #col-inner) {\n          padding: 5px;\n        }\n        :host #row-inner[gutter="2"] ::slotted(* > #col-inner) {\n          padding: 10px;\n        }\n        :host #row-inner[gutter="3"] ::slotted(* > #col-inner) {\n          padding: 15px;\n        }\n        :host #row-inner[gutter="4"] ::slotted(* > #col-inner) {\n          padding: 20px;\n        }\n      </style>\n      <responsive-utility\n        sm\\$="[[sm]]"\n        md\\$="[[sm]]"\n        lg\\$="[[lg]]"\n        xl\\$="[[xl]]"\n        responsive-to-parent\\$="[[responsiveToParent]]"\n      >\n      </responsive-utility>\n      <div id="row-inner" screen\\$="[[screen]]" gutter\\$="[[gutter]]">\n        <slot></slot>\n      </div>\n    ']);return m=function(){return e},e}window.customElements.define(v.tag,v);var x=function(r){function t(){return n(this,t),l(this,i(t).apply(this,arguments))}return s(t,e.PolymerElement),o(t,[{key:"connectedCallback",value:function(){d(i(t.prototype),"connectedCallback",this).call(this),window.ResponsiveUtility.requestAvailability(),this.dispatchEvent(new CustomEvent("responsive-element",{bubbles:!0,cancelable:!0,composed:!0,detail:{element:this,attribute:"screen",relativeToParent:this.responsiveToParent}}))}}],[{key:"template",get:function(){return e.html(m())}},{key:"tag",get:function(){return"responsive-grid-row"}},{key:"properties",get:function(){return{sm:{type:Number,value:null},md:{type:Number,value:null},lg:{type:Number,value:null},xl:{type:Number,value:null},gutter:{type:Number,value:0},responsiveToParent:{type:Boolean,value:!1,reflectToAttribute:!0},screen:{type:String,value:"xs",notify:!0,reflectToAttribute:!0}}}}]),t}();window.customElements.define(x.tag,x)});
//# sourceMappingURL=responsive-grid.umd.js.map
