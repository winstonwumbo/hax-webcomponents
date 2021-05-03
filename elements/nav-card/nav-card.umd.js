!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit-element"),require("@lrnwebcomponents/accent-card/accent-card.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js"),require("@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js")):"function"==typeof define&&define.amd?define(["exports","lit-element","@lrnwebcomponents/accent-card/accent-card.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js","@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).NavCard={},t.litElement,t.accentCard_js)}(this,(function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var i=s(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return u(this,n)}}function f(t,e,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=s(t)););return t}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function v(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function h(t){return function(t){if(Array.isArray(t))return b(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var m,y,g,k,w,j,O=function(t){c(i,t);var n=p(i);function i(){var t;return r(this,i),(t=n.call(this)).tag=i.tag,t.accentColor="grey",t.allowGrey=!1,t.dark=!1,t.invert=!1,t}return o(i,[{key:"render",value:function(){return e.html(m||(m=v(["\n      ",'\n      <div>\n        <slot name="label"></slot>\n        <slot name="description"></slot>\n      </div>\n      ',"\n    "])),this.avatar||this.initials?e.html(y||(y=v(['\n            <lrndesign-avatar\n              .accentColor="','"\n              ?allow-grey="','"\n              ?dark="','"\n              .icon="','"\n              ?invert="','"\n              .src="','"\n              .label="','"\n              ?two-chars="','"\n            >\n            </lrndesign-avatar>\n          '])),this.accentColor||"",this.allowGrey,this.dark,this.ico,this.invert,this.src,this.label,this.twoChars):"",this.icon?e.html(g||(g=v([' <simple-icon-lite icon="','"></simple-icon-lite> '])),this.icon):"")}},{key:"twoChars",get:function(){return this.label&&this.label.split(/\s*/).length>1}},{key:"label",get:function(){var t=this.initials&&this.initials.split(" ");return t&&t[0]?"".concat(t[0][0]," ").concat(t[1]?t[1][0]:t[0][1]||"","}"):this.initials}},{key:"ico",get:function(){return this.avatar&&!this._validURL(this.avatar)?this.avatar:""}},{key:"src",get:function(){return this.avatar&&this._validURL(this.avatar)?this.avatar:""}},{key:"_validURL",value:function(t){return console.log(),!!new RegExp("^((https?:)?\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(data:image)?(\\#[-a-z\\d_]*)?$","i").test(t)}}],[{key:"tag",get:function(){return"nav-card-item"}},{key:"properties",get:function(){return{accentColor:{type:String,attribute:"accent-color"},allowGrey:{type:Boolean,attribute:"allow-grey"},avatar:{type:String,attribute:"avatar"},dark:{type:Boolean,attribute:"dark"},icon:{type:String,attribute:"icon"},initials:{type:String,attribute:"initials"},invert:{type:Boolean,attribute:"invert"}}}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Nav card",description:"an accent card of link lists",icon:"av:playlist-play",color:"pink",groups:["Card","Nav","List"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"nikkimk",owner:"The Pennsylvania State University"}},settings:{configure:[{property:"accentColor",title:"Accent Color",description:"Select an accent color.",inputMethod:"colorpicker",required:!1},{property:"dark",title:"Dark",description:"Display the card as dark theme?",inputMethod:"boolean",required:!1},{property:"icon",title:"Icon",description:"Select an icon.",inputMethod:"iconpicker",required:!1},{property:"initials",title:"Initials",description:"Initials to display if there is no icon.",inputMethod:"textfield",required:!1},{property:"avatar",title:"Avatar Image",description:"Select an image",inputMethod:"haxupload",required:!1},{slot:"label",title:"Button or Link",inputMethod:"code-editor",required:!1},{slot:"description",title:"Additional description",inputMethod:"code-editor",required:!1}],advanced:[{property:"allowGrey",title:"Allow Grey",description:"Allows grey if set. Otherwise a color will be assigned.",inputMethod:"boolean"},{property:"avatar",title:"Avatar Icon",description:"Select an icon.",inputMethod:"iconpicker",required:!1},{property:"invert",title:"Invert",description:"Inverts icon coloring.",inputMethod:"boolean"}]}}}},{key:"styles",get:function(){return[e.css(k||(k=v(['\n        :host {\n          position: relative;\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          text-decoration: none;\n          padding: 5px 0;\n          margin-bottom: 1px;\n          color: var(--nav-card-item-color, unset);\n          background-color: var(--nav-card-item-background-color, unset);\n          border-bottom: var(\n            --nav-card-linklist-border-bottom,\n            1px solid var(--simple-colors-default-theme-grey-4, #666)\n          );\n        }\n        :host(:last-of-type) {\n          border-bottom: none;\n        }\n        :host([hidden]) {\n          display: none;\n        }\n        :host div {\n          flex: 1 1 auto;\n        }\n        ::slotted([slot="label"]:hover),\n        ::slotted([slot="label"]:focus),\n        :host(:hover) ::slotted([slot="label"]),\n        :host(:focus-within) ::slotted([slot="label"]) {\n          text-decoration: underline;\n        }\n        ::slotted(*) {\n          display: block;\n        }\n        ::slotted([slot="label"]),\n        ::slotted([slot="description"]) {\n          color: inherit;\n          font-family: inherit;\n        }\n        ::slotted([slot="label"]) {\n          text-decoration: inherit;\n          outline: none;\n          border: none;\n          padding: 0;\n          text-align: left;\n          color: var(--nav-card-item-color, unset);\n          background-color: var(--nav-card-item-background-color, unset);\n          font-size: var(--nav-card-item-label-font-size, inherit);\n          font-weight: var(--nav-card-item-label-font-weight, bold);\n        }\n        ::slotted([slot="description"]) {\n          font-size: var(--nav-card-item-label-font-size, 11px);\n          font-weight: var(--nav-card-item-label-font-weight, normal);\n        }\n        ::slotted([slot="label"]):after {\n          content: "";\n          position: absolute;\n          left: 0;\n          top: 0;\n          right: 0;\n          bottom: 0;\n        }\n        ::slotted([slot="label"]:focus):after {\n          outline: 1px solid blue;\n        }\n        lrndesign-avatar {\n          margin-right: 10px;\n          --lrndesign-avatar-width: var(\n            --nav-card-item-avatar-width,\n            var(--nav-card-item-avatar-size, 36px)\n          );\n          --lrndesign-avatar-height: var(\n            --nav-card-item-avatar-height,\n            var(--nav-card-item-avatar-size, 36px)\n          );\n          --lrndesign-avatar-border-radius: var(\n            --nav-card-item-avatar-border-radius,\n            50%\n          );\n        }\n        simple-icon-lite {\n          margin-left: 10px;\n          --simple-icon-width: var(\n            --nav-card-item-icon-width,\n            var(--nav-card-item-icon-size, 24px)\n          );\n          --simple-icon-height: var(\n            --nav-card-item-icon-height,\n            var(--nav-card-item-icon-size, 24px)\n          );\n        }\n      '])))]}}]),i}(e.LitElement);customElements.define("nav-card-item",O);var x=function(t){c(i,t);var n=p(i);function i(){var t;return r(this,i),(t=n.call(this)).tag=i.tag,t}return o(i,[{key:"render",value:function(){return e.html(w||(w=v(['\n\n<article id="card">\n  <div class="image-outer" ?hidden="','">\n    <div\n      class="image"\n      .style="','"\n    ></div>\n  </div>\n  <div class="body">\n    <h1 id="heading"><slot name="heading"></slot></h1>\n    <div id="subheading"><slot name="subheading"></slot></div>\n    <div id="content">\n      <slot name="body"></slot>\n      <div id="linklist">\n        <slot name="linklist"></slot>\n      </div>\n    </div>\n    <div id="footer"><slot name="footer"></slot></div>\n  </div>\n</article>'])),!this.imageSrc,this.imageSrc?"background-image: url(".concat(this.imageSrc,");"):"display: none;")}}],[{key:"styles",get:function(){return[].concat(h(f(s(i),"styles",this)),[e.css(j||(j=v(["\n:host {\n  display: block;\n  --accent-card-content-padding-bottom: 0px;\n}\n\n::slotted([slot=linklist]){\n  --nav-card-item-color: var(--accent-card-color);\n  --nav-card-item-background-color: var(--accent-card-background-color);\n  margin-top: var(--nav-card-linklist-margin-top, 20px);\n  margin-bottom: var(--nav-card-linklist-margin-bottom, 20px);\n}\n      "])))])}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Nav card",description:"an accent card of link lists",icon:"av:playlist-play",color:"pink",groups:["Card","Nav","List"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"nikkimk",owner:"The Pennsylvania State University"}},settings:{configure:[{property:"accentColor",title:"Accent Color",description:"Select an accent color.",inputMethod:"colorpicker",required:!1},{property:"dark",title:"Dark",description:"Display the card as dark theme?",inputMethod:"boolean",required:!1},{property:"imageSrc",title:"Image",description:"Optional image",inputMethod:"haxupload"},{slot:"heading",title:"Heading",inputMethod:"code-editor",required:!1},{slot:"subheading",title:"Subheading",inputMethod:"code-editor",required:!1},{slot:"body",title:"Body",inputMethod:"code-editor",required:!1},{property:"linkIcon",title:"Link Icon",description:"Select an icon.",inputMethod:"iconpicker",required:!1},{slot:"linklist",title:"Link List",inputMethod:"code-editor",required:!1},{slot:"footer",title:"Footer",inputMethod:"code-editor",required:!1}],advanced:[]}}}},{key:"properties",get:function(){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},f(s(i),"properties",this))}},{key:"tag",get:function(){return"nav-card"}}]),i}(n.AccentCard);customElements.define("nav-card",x),t.NavCard=x,Object.defineProperty(t,"__esModule",{value:!0})}));
