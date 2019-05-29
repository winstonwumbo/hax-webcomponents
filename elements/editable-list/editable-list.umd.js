!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@lrnwebcomponents/simple-modal/simple-modal.js"),require("@polymer/iron-list/iron-list.js"),require("@polymer/iron-icons/iron-icons.js"),require("@polymer/paper-icon-button/paper-icon-button.js"),require("@polymer/paper-input/paper-input.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@lrnwebcomponents/simple-modal/simple-modal.js","@polymer/iron-list/iron-list.js","@polymer/iron-icons/iron-icons.js","@polymer/paper-icon-button/paper-icon-button.js","@polymer/paper-input/paper-input.js","@lrnwebcomponents/simple-colors/simple-colors.js"],t):t((e=e||self).EditableList={},e.polymerElement_js)}(this,function(e,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function l(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e,t,n){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=a(e)););return e}(e,t);if(i){var o=Object.getOwnPropertyDescriptor(i,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function p(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function u(){var e=p(['\n      <style>\n        :host {\n          display: block;\n        }\n\n        :host([hidden]) {\n          display: none;\n        }\n        :host([can-edit]) #edit {\n          visibility: visible;\n          opacity: 1;\n        }\n        :host([can-delete]) #delete {\n          visibility: visible;\n          opacity: 1;\n        }\n        :host #add,\n        #duplicate {\n          visibility: visible;\n          opacity: 1;\n        }\n        paper-icon-button {\n          visibility: hidden;\n          opacity: 0;\n          transition: 0.3s all linear;\n        }\n        paper-input {\n          --paper-input-container-shared-input-style: {\n            height: 40px;\n            padding: 0;\n            margin: 0;\n          }\n        }\n        .input {\n          display: block;\n          height: 40px;\n          padding: 0;\n          margin: 0;\n          line-height: 40px;\n        }\n        .input[hidden] {\n          display: none;\n        }\n        div.input {\n          z-index: 1;\n        }\n        .ops {\n          position: absolute;\n          display: block;\n          right: 0;\n          top: 0;\n          z-index: 2;\n          background-color: white;\n        }\n        .ops paper-icon-button {\n          border-radius: 50%;\n          height: 32px;\n          width: 32px;\n          padding: 4px;\n          margin: 0px;\n        }\n        .ops[hidden] {\n          display: none;\n        }\n        #edit {\n          color: white;\n          background-color: var(--simple-colors-default-theme-green-8, #ddffdd);\n        }\n        #delete {\n          color: white;\n          background-color: var(--simple-colors-default-theme-red-6, #ff5555);\n        }\n      </style>\n      <paper-input\n        id="input"\n        class="input"\n        value="{{value}}"\n        hidden$="[[!editing]]"\n      ></paper-input>\n      <div class="input" hidden$="[[editing]]">[[value]]</div>\n      <div class="ops" hidden$="[[!editMode]]">\n        <paper-icon-button\n          on-click="_editToggle"\n          id="edit"\n          icon="icons:create"\n        ></paper-icon-button>\n        <paper-icon-button\n          on-click="_editToggle"\n          id="add"\n          icon="icons:add"\n        ></paper-icon-button>\n        <paper-icon-button\n          on-click="_editToggle"\n          id="duplicate"\n          icon="icons:content-copy"\n        ></paper-icon-button>\n        <paper-icon-button\n          on-click="_deleteModal"\n          id="delete"\n          icon="icons:delete"\n        ></paper-icon-button>\n      </div>\n    ']);return u=function(){return e},e}var m=function(e){function o(){return i(this,o),c(this,a(o).apply(this,arguments))}return r(o,t.PolymerElement),l(o,[{key:"connectedCallback",value:function(){s(a(o.prototype),"connectedCallback",this).call(this)}},{key:"_editToggle",value:function(e){this.editing=!this.editing,this.editing&&this.$.input.focus()}},{key:"_deleteModal",value:function(e){var t=new CustomEvent("editable-list-item-delete",{bubbles:!0,cancelable:!0,detail:{element:this}});this.dispatchEvent(t)}},{key:"_editModeChanged",value:function(e,t){"undefined"!==n(e)&&(this.$.edit.icon=e?"icons:save":"icons:create")}}],[{key:"template",get:function(){return t.html(u())}},{key:"properties",get:function(){return{value:{name:"value",type:"String"},editMode:{name:"editMode",type:"Boolean",value:!1,notify:!0,reflectToAttribute:!0},editing:{name:"editing",type:"Boolean",value:!1,observer:"_editModeChanged"},canEdit:{name:"canEdit",type:"Boolean",value:!1,reflectToAttribute:!0},canDelete:{name:"canDelete",type:"Boolean",value:!1,reflectToAttribute:!0}}}},{key:"tag",get:function(){return"editable-list-item"}}]),o}();function f(){var e=p(['\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\niron-list {\n  height: 100%;\n}</style>\n<iron-list id="list" items="[[items]]" as="item" mutable-data>\n  <template>\n    <editable-list-item edit-mode="[[item.metadata.canEdit]]" can-edit="[[item.metadata.canEdit]]" can-delete="[[item.metadata.canDelete]]" value="[[item.title]]"></editable-list-item>\n  </template>\n</iron-list>']);return f=function(){return e},e}window.customElements.define(m.tag,m);var y=function(e){function o(){return i(this,o),c(this,a(o).apply(this,arguments))}return r(o,t.PolymerElement),l(o,[{key:"connectedCallback",value:function(){s(a(o.prototype),"connectedCallback",this).call(this);window.SimpleModal.requestAvailability();this.$.list.addEventListener("editable-list-item-delete",this.triggerDeleteModal.bind(this))}},{key:"disconnectedCallback",value:function(){this.$.list.removeEventListener("editable-list-item-delete",this.triggerDeleteModal.bind(this))}},{key:"triggerDeleteModal",value:function(e){this.activeElement=e.detail.element;var t=document.createElement("div");t.innerHTML="<div>Are you sure you want to delete <strong>".concat(e.detail.element.value,"</strong>?</div>");var n=document.createElement("paper-button");n.raised=!0,n.addEventListener("click",this._deleteItemConfirm.bind(this)),n.appendChild(document.createTextNode("Delete"));var i=document.createElement("paper-button");i.raised=!0,i.setAttribute("dialog-dismiss","dialog-dismiss"),i.appendChild(document.createTextNode("cancel"));var o=document.createElement("div");o.appendChild(n),o.appendChild(i);var l=new CustomEvent("simple-modal-show",{bubbles:!0,cancelable:!0,detail:{title:"Delete ".concat(e.detail.element.value),elements:{content:t,buttons:o},invokedBy:e.detail.element.$.delete,clone:!1}});this.dispatchEvent(l)}},{key:"_deleteItemConfirm",value:function(e){var t=new CustomEvent("simple-modal-hide",{bubbles:!0,cancelable:!0,detail:{}});this.dispatchEvent(t)}},{key:"_editModeChanged",value:function(e,t){if("undefined"!==n(e))for(var i in this._itemsChanged(this.items),this.items)this.items[i].metadata&&(this.items[i].metadata.canEdit=e,this.notifyPath("items.".concat(i,".metadata.canEdit")))}},{key:"_itemsChanged",value:function(e,t){"undefined"!==n(e)&&"string"==typeof e&&this.set("items",JSON.parse(e))}}],[{key:"template",get:function(){return t.html(f())}},{key:"properties",get:function(){return{editMode:{name:"editMode",type:"Boolean",value:!1,notify:!0,reflectToAttribute:!0,observer:"_editModeChanged"},items:{name:"items",type:"Array",value:[],reflectToAttribute:!1,observer:"_itemsChanged"},activeElement:{name:"activeElement",type:"Object"}}}},{key:"tag",get:function(){return"editable-list"}}]),o}();window.customElements.define(y.tag,y),e.EditableList=y,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=editable-list.umd.js.map
