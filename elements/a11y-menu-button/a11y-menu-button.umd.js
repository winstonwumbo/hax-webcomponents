!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/absolute-position-behavior/absolute-position-behavior.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/absolute-position-behavior/absolute-position-behavior.js"],e):e((t=t||self).A11yMenuButton={},t.litElement_js)}(this,function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,o=u(t);if(e){var r=u(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return s(this,n)}}function c(t,e,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function d(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function b(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function m(){var t=d(['\n        <li role="none">\n          <button\n            role="menuitem"\n            controls="','"\n            ?disabled="','"\n          >\n            <slot></slot>\n          </button>\n        </li>\n      ']);return m=function(){return t},t}function f(){var t=d([' <li role="none">\n        <a role="menuitem" href="','" ?disabled="','">\n          <slot></slot>\n        </a>\n      </li>']);return f=function(){return t},t}function y(){var t=d(['\n          :host {\n            margin: 0;\n            padding: 0;\n            display: block;\n          }\n          :host([hidden]) {\n            display: none;\n          }\n          *[role="menuitem"][disabled] {\n            cursor: not-allowed;\n          }\n\n          *[role="menuitem"],\n          *[role="menuitem"]:visited {\n            display: block;\n            margin: 0;\n            border-radius: 0;\n            font-family: inherit;\n            font-size: inherit;\n            text-decoration: var(--a11y-menu-button-item-text-decoration, none);\n            color: var(\n              --a11y-menu-button-item-color,\n              var(--a11y-menu-button-color, currentColor)\n            );\n            width: calc(\n              100% - 2 *\n                var(\n                  --a11y-menu-button-item-horizontal-padding,\n                  var(--a11y-menu-button-horizontal-padding, 5px)\n                )\n            );\n            text-align: var(--a11y-menu-button-item-text-align, left);\n            padding: var(\n                --a11y-menu-button-item-vertical-padding,\n                var(--a11y-menu-button-vertical-padding, 0)\n              )\n              var(\n                --a11y-menu-button-item-horizontal-padding,\n                var(--a11y-menu-button-horizontal-padding, 5px)\n              );\n            background-color: var(\n              --a11y-menu-button-item-bg-color,\n              var(--a11y-menu-button-bg-color, white)\n            );\n            border-left: var(--a11y-menu-button-item-border-left, none);\n            border-right: var(--a11y-menu-button-item-border-right, none);\n            border-top: var(--a11y-menu-button-item-border-top, none);\n            border-bottom: var(--a11y-menu-button-item-border-bottom, none);\n            border: var(--a11y-menu-button-item-border, none);\n            transition: all 0.25s ease-in-out;\n          }\n          button[role="menuitem"],\n          button[role="menuitem"]:visited {\n            width: 100%;\n          }\n\n          :host(:focus-within) *[role="button"],\n          *[role="menuitem"]:focus,\n          *[role="menuitem"]:hover {\n            text-decoration: var(\n              --a11y-menu-button-item-focus-text-decoration,\n              none\n            );\n            color: var(--a11y-menu-button-item-focus-color, currentColor);\n            background-color: var(\n              --a11y-menu-button-item-focus-bg-color,\n              #e0e0ff\n            );\n            border-left: var(--a11y-menu-button-item-focus-border-left, unset);\n            border-right: var(\n              --a11y-menu-button-item-focus-border-right,\n              unset\n            );\n            border-top: var(--a11y-menu-button-item-focus-border-top, unset);\n            border-bottom: var(\n              --a11y-menu-button-item-focus-border-bottom,\n              unset\n            );\n            border: var(--a11y-menu-button-item-focus-border, unset);\n          }\n        ']);return y=function(){return t},t}var v=function(t){return function(o){i(s,t);var a=l(s);function s(){return n(this,s),a.call(this)}return r(s,[{key:"render",value:function(){return this.href&&""!==this.href.trim()?this.linkTemplate:this.buttonTemplate}}],[{key:"styles",get:function(){return[e.css(y())]}},{key:"tag",get:function(){return"a11y-menu-button-item"}},{key:"properties",get:function(){return{disabled:{attribute:"disabled",type:Boolean},hidden:{attribute:"hidden",type:Boolean,reflect:!0},href:{attribute:"href",type:String},controls:{attribute:"controls",type:String},slot:{type:String,attribute:"menuitem",reflect:!0}}}}]),r(s,[{key:"focus",value:function(){this.shadowRoot&&this.shadowRoot.querySelector("[role=menuitem]")&&this.shadowRoot.querySelector("[role=menuitem]").focus()}},{key:"connectedCallback",value:function(){c(u(s.prototype),"connectedCallback",this).call(this),this.dispatchEvent(new CustomEvent("add-a11y-menu-button-item",{bubbles:!0,cancelable:!0,composed:!0,detail:this}))}},{key:"disconnectedCallback",value:function(){c(u(s.prototype),"disconnectedCallback",this).call(this),this.dispatchEvent(new CustomEvent("remove-a11y-menu-button-item",{bubbles:!0,cancelable:!0,composed:!0,detail:this}))}},{key:"linkTemplate",get:function(){return e.html(f(),this.href,this.disabled)}},{key:"buttonTemplate",get:function(){return e.html(m(),this.controls,this.disabled)}}]),s}()},p=function(t){i(r,v(e.LitElement));var o=l(r);function r(){return n(this,r),o.apply(this,arguments)}return r}();function g(){var t=d(["<slot></slot>"]);return g=function(){return t},t}function k(){var t=d(['\n        <button\n          id="menubutton"\n          aria-haspopup="true"\n          aria-controls="menu"\n          aria-expanded="','"\n        >\n          <slot name="button"></slot>\n        </button>\n      ']);return k=function(){return t},t}function w(){var t=d(['\n        <absolute-position-behavior\n          ?auto="','"\n          for="menubutton"\n          position="','"\n          position-align="','"\n          .offset="','"\n          fit-to-visible-bounds\n          part="menu-outer"\n        >\n          <ul\n            id="menu"\n            role="menu"\n            aria-labelledby="menubutton"\n            ?hidden="','"\n            @mousover="','"\n            @mousout="','"\n            part="menu"\n          >\n            ',"\n          </ul>\n        </absolute-position-behavior>\n      "]);return w=function(){return t},t}function E(){var t=d(['\n          button[part="button"] {\n            padding: var(--a11y-menu-button-vertical-padding, 2px)\n              var(--a11y-menu-button-horizontal-padding, 5px);\n            text-align: var(--a11y-menu-button-text-align, center);\n            background-color: var(--a11y-menu-button-bg-color, white);\n            color: var(--a11y-menu-button-color, currentColor);\n            background-color: var(--a11y-menu-button-bg-color, white);\n            border-radius: var(--a11y-menu-button-border-radius, 0);\n            border-left: var(--a11y-menu-button-border-left, unset);\n            border-top: var(--a11y-menu-button-border-top, unset);\n            border-right: var(--a11y-menu-button-border-right, unset);\n            border-bottom: var(--a11y-menu-button-border-bottom, unset);\n            border: var(--a11y-menu-button-border, 1px solid #ddd);\n            box-shadow: var(--a11y-menu-button-box-shadow, unset);\n            transition: all 0.25s ease-in-out;\n          }\n          button[part="button"]:focus,\n          button[part="button"]:hover {\n            color: var(\n              --a11y-menu-button-focus-color,\n              var(--a11y-menu-button-color, currentColor)\n            );\n            background-color: var(\n              --a11y-menu-button-focus-bg-color,\n              var(--a11y-menu-button-bg-color, white)\n            );\n            border-left: var(\n              --a11y-menu-button-focus-border-left,\n              var(--a11y-menu-button-border-left, unset)\n            );\n            border-top: var(\n              --a11y-menu-button-focus-border-top,\n              var(--a11y-menu-button-border-top, unset)\n            );\n            border-right: var(\n              --a11y-menu-button-focus-border-right,\n              var(--a11y-menu-button-border-right, unset)\n            );\n            border-bottom: var(\n              --a11y-menu-button-focus-border-bottom,\n              var(--a11y-menu-button-border-bottom, unset)\n            );\n            border: var(\n              --a11y-menu-button-focus-border,\n              var(--a11y-menu-button-border, 1px solid #ddd)\n            );\n            box-shadow: var(\n              --a11y-menu-button-box-shadow,\n              var(--a11y-menu-button-focus-box-shadow, unset)\n            );\n          }\n          :host([expanded]) absolute-position-behavior {\n            width: var(--a11y-menu-button-list-width, unset);\n            height: var(--a11y-menu-button-list-height, unset);\n            border: var(\n              --a11y-menu-button-list-border,\n              var(--a11y-menu-button-border, 1px solid #ddd)\n            );\n            background-color: var(\n              --a11y-menu-button-bg-color,\n              var(--a11y-menu-button-list-bg-color, white)\n            );\n            box-shadow: var(--a11y-menu-button-list-box-shadow, unset);\n          }\n        ']);return E=function(){return t},t}function _(){var t=d(['\n          :host {\n            padding: 0;\n            display: inline-block;\n            position: relative;\n            z-index: 1;\n          }\n          :host([expanded]) {\n            z-index: var(--a11y-menu-button-focus-z-index, 1000);\n          }\n          button[part="button"] {\n            display: block;\n            text-decoration: inherit;\n            font-family: inherit;\n            font-size: inherit;\n            margin: 0;\n            width: 100%;\n          }\n          absolute-position-behavior {\n            z-index: -1;\n            overflow: hidden;\n          }\n          :host([expanded]) absolute-position-behavior {\n            z-index: var(--a11y-menu-button-focus-z-index, 1000);\n          }\n          :host(:not([expanded])) absolute-position-behavior {\n            border-color: none !important;\n          }\n          ul {\n            margin: 0;\n            padding: 0;\n            list-style: none;\n          }\n        ']);return _=function(){return t},t}function C(){var t=d([" "," "," "]);return C=function(){return t},t}window.customElements.define(p.tag,p);var x=function(t){return function(o){i(a,t);var u=l(a);function a(){var t;return n(this,a),(t=u.call(this)).__menuItems=[],t.position="bottom",t.positionAlign="start",t.offset=0,t.addEventListener("keydown",t._handleKeydown),t.addEventListener("click",t._handleClick),t.addEventListener("focus",t._handleFocus),t.addEventListener("blur",t._handleBlur),t.addEventListener("mouseover",t._handleMouseover),t.addEventListener("mouseout",t._handleMouseout),t.addEventListener("add-a11y-menu-button-item",t._handleAddItem),t.addEventListener("remove-a11y-menu-button-item",t._handleRemoveItem),t}return r(a,[{key:"render",value:function(){return e.html(C(),this.buttonTemplate,this.menuTemplate)}}],[{key:"menuButtonCoreStyles",get:function(){return[e.css(_())]}},{key:"menuButtonThemeStyles",get:function(){return[e.css(E())]}},{key:"styles",get:function(){return[].concat(b(this.menuButtonCoreStyles),b(this.menuButtonThemeStyles))}},{key:"tag",get:function(){return"a11y-menu-button"}},{key:"properties",get:function(){return{currentItem:{type:Object},disabled:{attribute:"disabled",type:Boolean},expanded:{attribute:"expanded",type:Boolean,reflect:!0},focused:{attribute:"focused",type:Boolean},hovered:{attribute:"hovered",type:Boolean},offset:{type:Number,attribute:"offset"},position:{type:String,attribute:"position",reflect:!0},positionAlign:{type:String,attribute:"position-align",reflect:!0},__menuItems:{type:Array}}}}]),r(a,[{key:"close",value:function(t){(t||!this.focused&&!this.hovered)&&(this.expanded=!1,this.dispatchEvent(new CustomEvent("close",{bubbles:!0,cancelable:!0,composed:!0,detail:event})))}},{key:"open",value:function(){this.expanded=!0,this.dispatchEvent(new CustomEvent("open",{bubbles:!0,cancelable:!0,composed:!0,detail:event}))}},{key:"focus",value:function(){this.shadowRoot&&this.shadowRoot.querySelector("#menubutton")&&this.shadowRoot.querySelector("#menubutton").focus()}},{key:"focusOn",value:function(t){(t=t||this.firstItem())&&(this.open(),this.focused=!0,this.currentItem=t,t.focus())}},{key:"focusByCharacter",value:function(t){var e,n,o=this,r=(t=t.toLowerCase(),function(t,e){for(var n=t;n<o.firstChars.length;n++)if(e===o.firstChars[n])return n;return-1});(e=this.__menuItems.indexOf(this.currentItem)+1)===this.__menuItems.length&&(e=0),-1===(n=r(e,t))&&(n=r(0,t)),n>-1&&this.__menuItems[n].focus()}},{key:"firstItem",value:function(){return this.querySelector("a11y-menu-button-item")}},{key:"previousItem",value:function(){return this.currentItem?this.currentItem.previousElementSibling:void 0}},{key:"nextItem",value:function(){return this.currentItem?this.currentItem.nextElementSibling:void 0}},{key:"lastItem",value:function(){return this.querySelector("a11y-menu-button-item:last-child")}},{key:"_handleAddItem",value:function(t){var e=this;t.stopPropagation(),this.__menuItems=this.querySelectorAll("a11y-menu-button-item"),t.detail&&(t.detail.addEventListener("keydown",function(n){return e._handleItemKeydown(n,t.detail)}),t.detail.addEventListener("click",this._handleItemClick.bind(this)),t.detail.addEventListener("focus",this._handleFocus.bind(this)),t.detail.addEventListener("blur",this._handleBlur.bind(this)),t.detail.addEventListener("mouseover",this._handleMouseover.bind(this)),t.detail.addEventListener("mouseout",this._handleMouseout.bind(this)))}},{key:"_handleRemoveItem",value:function(t){var e=this;t.stopPropagation(),this.__menuItems=this.querySelectorAll("a11y-menu-button-item"),t.detail&&(t.detail.removeEventListener("keydown",function(n){return e._handleItemKeydown(n,t.detail)}),t.detail.removeEventListener("click",this._handleItemClick.bind(this)),t.detail.removeEventListener("focus",this._handleFocus.bind(this)),t.detail.removeEventListener("blur",this._handleItemBlur.bind(this)),t.detail.removeEventListener("mouseover",this._handleMouseover.bind(this)),t.detail.removeEventListener("mouseout",this._handleMouseout.bind(this)))}},{key:"_handleItemClick",value:function(t){this.focus(),this.close(!0),this.dispatchEvent(new CustomEvent("item-click",{bubbles:!0,cancelable:!0,composed:!0,detail:t}))}},{key:"_handleItemKeydown",value:function(t,e){var n=!1,o=t.key,r=function(t){return 1===t.length&&t.match(/\S/)};if(!(t.ctrlKey||t.altKey||t.metaKey||t.keyCode===this.keyCode.SPACE||t.keyCode===this.keyCode.RETURN)){if(t.shiftKey)r(o)&&(this.menu.setFocusByFirstCharacter(this,o),n=!0),t.keyCode===this.keyCode.TAB&&(this.focus(),this.close(!0));else switch(t.keyCode){case this.keyCode.ESC:this.focus(),this.close(!0),n=!0;break;case this.keyCode.UP:this.focusOn(this.previousItem()||this.lastItem()),n=!0;break;case this.keyCode.DOWN:this.focusOn(this.nextItem()||this.firstItem()),n=!0;break;case this.keyCode.HOME:case this.keyCode.PAGEUP:this.currentItem=this.firstItem(),n=!0;break;case this.keyCode.END:case this.keyCode.PAGEDOWN:this.currentItem=this.lastItem(),n=!0;break;case this.keyCode.TAB:this.focus(),this.close(!0);break;default:r(o)&&this.menu.setFocusByFirstCharacter(this,o)}n&&(t.stopPropagation(),t.preventDefault())}}},{key:"_handleItemBlur",value:function(t){this.focused=!1,setTimeout(this.close(),300)}},{key:"_handleKeydown",value:function(t){var e=!1;switch(t.keyCode){case this.keyCode.SPACE:case this.keyCode.RETURN:case this.keyCode.DOWN:this.focusOn(this.firstItem()),e=!0;break;case this.keyCode.UP:this.popupMenu&&(this.focusOn(this.lastItem()),e=!0)}e&&(t.stopPropagation(),t.preventDefault())}},{key:"_handleClick",value:function(t){this.expanded?this.close(!0):this.focusOn(this.firstItem())}},{key:"_handleFocus",value:function(t){this.focused=!0}},{key:"_handleBlur",value:function(t){this.focused=!1}},{key:"_handleMouseover",value:function(t){this.hovered=!0,this.open()}},{key:"_handleMouseout",value:function(t){this.hovered=!1,setTimeout(this.close(),300)}},{key:"menuTemplate",get:function(){var t=this;return e.html(w(),this.expanded,this.position,this.positionAlign,this.offset,!this.expanded,function(e){return t.hover=!0},function(e){return t.hover=!1},this.listItemTemplate)}},{key:"buttonTemplate",get:function(){return e.html(k(),this.expanded?"true":"false")}},{key:"listItemTemplate",get:function(){return e.html(g())}},{key:"keyCode",get:function(){return{TAB:9,RETURN:13,ESC:27,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40}}}]),a}()},I=function(t){i(r,x(e.LitElement));var o=l(r);function r(){return n(this,r),o.apply(this,arguments)}return r}();window.customElements.define(I.tag,I),t.A11yMenuButton=I,t.A11yMenuButtonBehaviors=x,Object.defineProperty(t,"__esModule",{value:!0})});
