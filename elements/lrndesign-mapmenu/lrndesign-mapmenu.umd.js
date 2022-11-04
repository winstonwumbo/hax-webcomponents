!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@polymer/polymer/polymer-element.js"),require("lit"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@polymer/polymer/lib/utils/flattened-nodes-observer.js"),require("@lrnwebcomponents/a11y-collapse/a11y-collapse.js"),require("@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js"),require("@polymer/iron-behaviors/iron-button-state.js"),require("@polymer/polymer/lib/legacy/class.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","lit","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@polymer/polymer/lib/utils/flattened-nodes-observer.js","@lrnwebcomponents/a11y-collapse/a11y-collapse.js","@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js","@polymer/iron-behaviors/iron-button-state.js","@polymer/polymer/lib/legacy/class.js"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).LrndesignMapmenu={},e.polymerElement_js,e.lit,null,null,e.flattenedNodesObserver_js,null,null,e.ironButtonState_js,e.class_js)}(this,(function(e,n,t,r,i,o,l,a,s,c){"use strict";function u(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function p(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,n,t){return n&&p(e.prototype,n),t&&p(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function f(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&m(e,n)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function m(e,n){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},m(e,n)}function b(e,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=y(e);if(n){var i=y(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return b(this,t)}}function g(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=y(e)););return e}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,n,t){var r=g(e,n);if(r){var i=Object.getOwnPropertyDescriptor(r,n);return i.get?i.get.call(arguments.length<3?e:t):i.value}},v.apply(this,arguments)}function j(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function w(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function k(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return w(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?w(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,a=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return l=e.done,e},e:function(e){a=!0,o=e},f:function(){try{l||null==t.return||t.return()}finally{if(a)throw o}}}}var O,x,S,_,E=function(e){f(r,e);var n=h(r);function r(){var e;return u(this,r),(e=n.call(this)).icon="",e.title="",e.url="",e}return d(r,[{key:"render",value:function(){return t.html(O||(O=j(["\n      ",'\n      <span id="title">',"</span>\n    "])),this.icon?t.html(x||(x=j([' <simple-icon icon="','"></simple-icon> '])),this.icon):"",this.title)}}],[{key:"styles",get:function(){return[t.css(S||(S=j(["\n        :host {\n          display: block;\n          --lrndesign-mapmenu-item-height: 16px;\n        }\n        simple-icon {\n          --simple-icon-height: var(--lrndesign-mapmenu-item-height);\n          display: inline-flex;\n        }\n      "])))]}},{key:"tag",get:function(){return"lrndesign-mapmenu-item"}},{key:"properties",get:function(){return{icon:{type:String},title:{type:String},url:{type:String}}}}]),r}(t.LitElement);customElements.define(E.tag,E);var P,C,L=function(e){f(r,e);var t=h(r);function r(){return u(this,r),t.apply(this,arguments)}return d(r,[{key:"connectedCallback",value:function(){v(y(r.prototype),"connectedCallback",this).call(this),this.setAttribute("role","button"),this.setAttribute("tabindex","0")}}],[{key:"template",get:function(){return n.html(_||(_=j(['\n      <style>\n        :host {\n          display: block;\n        }\n        #container {\n          display: flex;\n          align-items: center;\n        }\n        #icon {\n          margin-right: 10px;\n        }\n        #center {\n          flex: 1 1 auto;\n        }\n        lrndesign-avatar {\n          display: inline-block;\n          position: relative;\n        }\n        lrndesign-avatar ::slotted(*) {\n          transform: translateY(2px);\n        }\n        #title {\n          font-size: 19.2px;\n        }\n        #right simple-icon {\n          color: gray;\n          display: inline-flex;\n        }\n      </style>\n      <div id="container">\n        <template is="dom-if" if="[[avatarLabel]]">\n          <div id="icon">\n            <lrndesign-avatar label="[[avatarLabel]]"></lrndesign-avatar>\n          </div>\n        </template>\n        <div id="center">\n          <div id="label">[[label]]</div>\n          <div id="title">[[title]]</div>\n        </div>\n        <div id="right">\n          <template is="dom-if" if="[[!opened]]">\n            <simple-icon icon="arrow-drop-down"></simple-icon>\n          </template>\n          <template is="dom-if" if="[[opened]]">\n            <simple-icon icon="arrow-drop-up"></simple-icon>\n          </template>\n        </div>\n      </div>\n    '])))}},{key:"tag",get:function(){return"lrndesign-mapmenu-header"}},{key:"properties",get:function(){return{title:{type:String},label:{type:String},avatarLabel:{type:String,value:""},opened:{type:Boolean}}}}]),r}(c.mixinBehaviors([s.IronButtonState],n.PolymerElement));customElements.define(L.tag,L);var R,q=function(e){f(r,e);var n=h(r);function r(){var e;return u(this,r),(e=n.call(this)).label="",e.title="",e.avatarLabel="",e.opened=!1,e.collapsable=!0,e.expandChildren=!1,e}return d(r,[{key:"render",value:function(){return t.html(P||(P=j(['\n      <a11y-collapse id="container">\n        <lrndesign-mapmenu-header\n          avatar-label="','"\n          title="','"\n          label="','"\n          slot="heading"\n        ></lrndesign-mapmenu-header>\n        <slot></slot>\n      </a11y-collapse>\n    '])),this.avatarLabel,this.title,this.label)}},{key:"_openChanged",value:function(e){var n=this.shadowRoot.querySelector("#container");e&&n.show(),e||n.hide()}},{key:"_headerClickHandler",value:function(e){this.collapsable&&(this.opened=!this.opened)}},{key:"connectedCallback",value:function(){var e=this;v(y(r.prototype),"connectedCallback",this).call(this),this._observer=new o.FlattenedNodesObserver(this,(function(n){var t=n.addedNodes.filter((function(e){return"LRNDESIGN-MAPMENU-SUBMENU"===e.nodeName}));if(e.expandChildren){var r,i=k(t);try{for(i.s();!(r=i.n()).done;){r.value.setAttribute("opened",!0)}}catch(e){i.e(e)}finally{i.f()}}}))}},{key:"disconnectedCallback",value:function(){this._observer.disconnect(),v(y(r.prototype),"disconnectedCallback",this).call(this)}}],[{key:"styles",get:function(){return[t.css(C||(C=j(["\n        :host {\n          display: block;\n        }\n        :host([collapsable]) > lrndesign-mapmenu-header {\n          cursor: pointer;\n          display: block;\n        }\n        #container {\n          padding: 16px;\n        }\n        #container ::slotted(lrndesign-mapmenu-item) {\n          margin-top: 6.4px;\n        }\n        a11y-collapse {\n          border: 0;\n        }\n      "])))]}},{key:"tag",get:function(){return"lrndesign-mapmenu-submenu"}},{key:"properties",get:function(){return{title:{type:String},avatarLabel:{type:String,attribute:"avatar-label"},label:{type:String},opened:{type:Boolean},collapsable:{type:Boolean,reflect:!0},expandChildren:{type:Boolean,attribute:"expand-children"}}}}]),r}(t.LitElement);customElements.define(q.tag,q);var A=function(e){f(r,e);var t=h(r);function r(){return u(this,r),t.apply(this,arguments)}return d(r,null,[{key:"template",get:function(){return n.html(R||(R=j(["\n      <style>\n        :host {\n          display: block;\n        }\n        #container {\n          padding: 16px 32px;\n        }\n        :host\n          > ::slotted(lrndesign-mapmenu-submenu + lrndesign-mapmenu-submenu) {\n          margin-top: 16px;\n        }\n      </style>\n      <slot></slot>\n    "])))}},{key:"tag",get:function(){return"lrndesign-mapmenu"}},{key:"properties",get:function(){return{}}}]),r}(n.PolymerElement);customElements.define(A.tag,A),e.LrndesignMapmenu=A,Object.defineProperty(e,"__esModule",{value:!0})}));
