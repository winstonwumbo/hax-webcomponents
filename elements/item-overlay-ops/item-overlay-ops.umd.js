!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-button-lite.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-icon/lib/simple-icon-button-lite.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ItemOverlayOps={},e.polymerElement_js)}(this,(function(e,t){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function s(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=r(e);if(t){var o=r(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return s(this,n)}}function a(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r(e)););return e}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var i=a(e,t);if(i){var o=Object.getOwnPropertyDescriptor(i,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}var u,d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(f,e);var s,a,d,h=l(f);function f(){return i(this,f),h.apply(this,arguments)}return s=f,d=[{key:"template",get:function(){return t.html(u||(e=['\n      <style>\n        :host {\n          display: block;\n          outline: none;\n        }\n        #container {\n          display: none;\n          opacity: 0;\n          background-color: transparent;\n          transition: background-color 0.6s linear, visibility 0.6s linear,\n            opacity 0.6s linear;\n          visibility: hidden;\n        }\n        :host([edit-mode]) #container {\n          display: block;\n          opacity: 0.4;\n          visibility: visible;\n          background-color: var(--item-overlay-ops, #999999);\n          position: absolute;\n          z-index: 1;\n          @apply --item-overlay-ops-container;\n        }\n        :host([edit-mode]) #container:hover,\n        :host([edit-mode]) #container:focus,\n        :host([focused]) #container {\n          opacity: 0.8;\n          background-color: var(--item-overlay-ops, #ffffff);\n        }\n        .ops {\n          width: 100%;\n          height: 39px;\n          padding: 0;\n          margin: 0;\n          border-bottom: 1px solid rgba(100, 100, 100, 0.4);\n          text-align: center;\n        }\n        .ops simple-icon-button-lite {\n          display: inline-flex;\n          --simple-icon-width: 26px;\n          --simple-icon-height: 26px;\n          padding: 1px;\n          margin: 6px;\n          color: #999999;\n        }\n        .ops simple-icon-button-lite#cancel {\n          --simple-icon-width: 16px;\n          --simple-icon-height: 16px;\n          padding: 0px;\n          margin: 4px;\n          position: absolute;\n        }\n        .ops simple-icon-button-lite.active {\n          color: #000000;\n          background-color: rgba(255, 255, 255, 0.6);\n          border-radius: 50%;\n        }\n        .active-op {\n          text-transform: capitalize;\n          margin: 0;\n          height: 40px;\n          line-height: 40px;\n          font-size: 20px;\n          text-align: center;\n        }\n        #workingarea {\n          width: 100%;\n          padding: 0;\n          margin: 0 auto;\n          align-content: center;\n        }\n        #workingarea simple-icon-button-lite {\n          --simple-icon-width: 50%;\n          --simple-icon-height: 100%;\n          display: inline-flex;\n          min-width: unset;\n          padding: 16px;\n          margin: 0;\n          border: none;\n          border-radius: 0;\n        }\n        #workingarea #option1 {\n          background-color: rgba(100, 255, 100, 0.6);\n        }\n        #workingarea #option2 {\n          background-color: rgba(255, 100, 100, 0.6);\n        }\n        #workingarea #option1:hover,\n        #workingarea #option1:focus {\n          background-color: rgba(100, 255, 100, 1);\n        }\n        #workingarea #option2:hover,\n        #workingarea #option2:focus {\n          background-color: rgba(255, 100, 100, 1);\n        }\n        #workingarea {\n          display: none;\n        }\n        #workingarea.move {\n          display: flex;\n        }\n        #workingarea.move #option1,\n        #workingarea.move #option2 {\n          background-color: rgba(200, 200, 200, 0.5);\n        }\n        #workingarea.move #option1:hover,\n        #workingarea.move #option1:focus,\n        #workingarea.move #option2:hover,\n        #workingarea.move #option2:focus {\n          background-color: rgba(200, 200, 200, 1);\n        }\n        #workingarea.remove {\n          display: flex;\n        }\n        #workingarea.duplicate {\n          display: flex;\n        }\n      </style>\n      <div id="container">\n        <div class="ops">\n          <simple-icon-button-lite\n            on-click="_opTap"\n            icon="icons:add"\n            id="add"\n            hidden$="[[!add]]"\n            title="Add to this"\n          ></simple-icon-button-lite>\n          <simple-icon-button-lite\n            on-click="_opTap"\n            icon="icons:create"\n            id="edit"\n            hidden$="[[!edit]]"\n            title="Edit this"\n          ></simple-icon-button-lite>\n          <simple-icon-button-lite\n            on-click="_opTap"\n            icon="icons:swap-horiz"\n            id="move"\n            hidden$="[[!move]]"\n            title="Move this"\n          ></simple-icon-button-lite>\n          <simple-icon-button-lite\n            on-click="_opTap"\n            icon="icons:delete"\n            id="remove"\n            hidden$="[[!remove]]"\n            title="Delete this"\n          ></simple-icon-button-lite>\n          <simple-icon-button-lite\n            on-click="_opTap"\n            icon="icons:content-copy"\n            id="duplicate"\n            hidden$="[[!duplicate]]"\n            title="Duplicate this"\n          ></simple-icon-button-lite>\n          <simple-icon-button-lite\n            on-click="_opTap"\n            icon="icons:cancel"\n            id="cancel"\n            hidden$="[[!__anyOp]]"\n            title="Cancel"\n          ></simple-icon-button-lite>\n        </div>\n        <div class="active-op">[[activeTitle]]</div>\n        <div id="workingarea" class$="[[activeOp]]">\n          <simple-icon-button-lite\n            on-click="_optionSelected"\n            id="option1"\n            title="[[__option1Text]]"\n            icon="[[__option1Icon]]"\n          ></simple-icon-button-lite>\n          <simple-icon-button-lite\n            on-click="_optionSelected"\n            id="option2"\n            title="[[__option2Text]]"\n            icon="[[__option2Icon]]"\n          ></simple-icon-button-lite>\n        </div>\n      </div>\n      <slot></slot>\n    '],n||(n=e.slice(0)),u=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))));var e,n}},{key:"tag",get:function(){return"item-overlay-ops"}},{key:"properties",get:function(){return{editMode:{type:Boolean,reflectToAttribute:!0,value:!1},focused:{type:Boolean,reflectToAttribute:!0,value:!1},activeTitle:{type:String},activeOp:{type:String},add:{type:Boolean,value:!1},edit:{type:Boolean,value:!1},move:{type:Boolean,value:!1},fixedHeight:{type:Number,observer:"fixedHeightChanged"},disableAutoHeight:{type:Boolean,value:!1},remove:{type:Boolean,value:!1},duplicate:{type:Boolean,value:!1},__anyOp:{type:Boolean,value:!1}}}}],(a=[{key:"connectedCallback",value:function(){var e=this;p(r(f.prototype),"connectedCallback",this).call(this),setTimeout((function(){e._windowResize()}),5),this.setAttribute("tabindex","0"),window.addEventListener("resize",this._windowResize.bind(this)),this.addEventListener("focusin",this._inFocus.bind(this)),this.addEventListener("focusout",this._outFocus.bind(this))}},{key:"disconnectedCallback",value:function(){this.removeEventListener("focusin",this._inFocus.bind(this)),this.removeEventListener("focusout",this._outFocus.bind(this)),window.removeEventListener("resize",this._windowResize.bind(this)),p(r(f.prototype),"disconnectedCallback",this).call(this)}},{key:"fixedHeightChanged",value:function(e,t){e&&(this.disableAutoHeight||(this.shadowRoot.querySelector("#container").style.height=this.fixedHeight+"px",this.shadowRoot.querySelector("#workingarea").style.height=this.fixedHeight-80+"px"))}},{key:"_windowResize",value:function(e){var t=this.getBoundingClientRect();this.shadowRoot.querySelector("#container").style.width=t.width+"px",this.disableAutoHeight?this.shadowRoot.querySelector("#workingarea").style.height=t.height-80+"px":this.fixedHeight&&"undefined"!==n(this.fixedHeight)?(this.shadowRoot.querySelector("#container").style.height=this.fixedHeight+"px",this.shadowRoot.querySelector("#workingarea").style.height=this.fixedHeight-80+"px"):(this.shadowRoot.querySelector("#container").style.height=t.height+"px",this.shadowRoot.querySelector("#workingarea").style.height=t.height-80+"px")}},{key:"_opTap",value:function(e){var t=e.target;switch(this.activeTitle=t.getAttribute("id"),this.activeOp=t.getAttribute("id"),this._resetActive(),this.__anyOp=!0,t.classList.add("active"),this.activeOp){case"cancel":t.classList.remove("active"),this.activeTitle=null,this.activeOp=null,this.__anyOp=!1;break;case"remove":this.__option1Icon="icons:check",this.__option1Text="Confirm deleting this",this.__option2Icon="icons:clear",this.__option2Text="Cancel";break;case"duplicate":this.__option1Icon="icons:check",this.__option1Text="Confirm duplicating this",this.__option2Icon="icons:clear",this.__option2Text="Cancel";break;case"move":this.__option1Icon="icons:arrow-back",this.__option1Text="Move item left",this.__option2Icon="icons:arrow-forward",this.__option2Text="Move item right"}var n={element:this,operation:this.activeOp};this.dispatchEvent(new CustomEvent("item-overlay-op-changed",{bubbles:!0,cancelable:!0,composed:!0,detail:n}))}},{key:"_inFocus",value:function(e){this.editMode&&(this.focused=!0)}},{key:"_outFocus",value:function(e){this.editMode&&(this.focused=!1)}},{key:"_optionSelected",value:function(e){var t=e.target,n={element:this,operation:this.activeOp,option:t.getAttribute("id")};this.dispatchEvent(new CustomEvent("item-overlay-option-selected",{bubbles:!0,cancelable:!0,composed:!0,detail:n})),"move"!=this.activeOp&&(this._resetActive(),this.activeOp=null)}},{key:"_resetActive",value:function(){this.shadowRoot.querySelector("#add").classList.remove("active"),this.shadowRoot.querySelector("#edit").classList.remove("active"),this.shadowRoot.querySelector("#move").classList.remove("active"),this.shadowRoot.querySelector("#remove").classList.remove("active"),this.shadowRoot.querySelector("#duplicate").classList.remove("active")}}])&&o(s.prototype,a),d&&o(s,d),Object.defineProperty(s,"prototype",{writable:!1}),f}(t.PolymerElement);customElements.define(d.tag,d),e.ItemOverlayOps=d,Object.defineProperty(e,"__esModule",{value:!0})}));
