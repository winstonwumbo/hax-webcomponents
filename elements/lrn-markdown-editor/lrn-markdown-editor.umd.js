!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lit"),require("@lrnwebcomponents/a11y-tabs/a11y-tabs.js"),require("@lrnwebcomponents/a11y-tabs/lib/a11y-tab.js"),require("@polymer/marked-element/marked-element.js"),require("@lrnwebcomponents/mtz-marked-editor/mtz-marked-editor.js"),require("@lrnwebcomponents/mtz-marked-editor/lib/mtz-marked-control-generic-wrap.js"),require("@lrnwebcomponents/mtz-marked-editor/lib/mtz-marked-control-generic-line.js"),require("@lrnwebcomponents/mtz-marked-editor/lib/mtz-marked-control-link.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@polymer/paper-input/paper-textarea.js"),require("@polymer/paper-input/paper-input.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/a11y-tabs/a11y-tabs.js","@lrnwebcomponents/a11y-tabs/lib/a11y-tab.js","@polymer/marked-element/marked-element.js","@lrnwebcomponents/mtz-marked-editor/mtz-marked-editor.js","@lrnwebcomponents/mtz-marked-editor/lib/mtz-marked-control-generic-wrap.js","@lrnwebcomponents/mtz-marked-editor/lib/mtz-marked-control-generic-line.js","@lrnwebcomponents/mtz-marked-editor/lib/mtz-marked-control-link.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@polymer/paper-input/paper-textarea.js","@polymer/paper-input/paper-input.js"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).LrnMarkdownEditor={},e.lit)}(this,(function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&l(e,n)}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}function l(e,n){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},l(e,n)}function c(e,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=a(e);if(n){var o=a(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return c(this,t)}}function s(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var p,u,m,f,y=function(e){i(a,e);var r=d(a);function a(){return t(this,a),r.apply(this,arguments)}return o(a,[{key:"render",value:function(){return n.html(p||(p=s(['\n      <mtz-marked-editor id="markededitor">\n        <div slot="controls" class="mtz-controls">\n          <mtz-marked-control-generic-wrap\n            icon="editor:format-bold"\n            title="Bold"\n            syntax-prefix="**"\n            syntax-suffix="**"\n            keys="ctrl+b"\n          ></mtz-marked-control-generic-wrap>\n          <mtz-marked-control-generic-wrap\n            icon="editor:format-italic"\n            title="Italic"\n            syntax-prefix="_"\n            syntax-suffix="_"\n            keys="ctrl+i"\n          ></mtz-marked-control-generic-wrap>\n          <mtz-marked-control-generic-line\n            icon="editor:format-size"\n            title="Heading"\n            syntax-prefix="# "\n          ></mtz-marked-control-generic-line>\n          <mtz-marked-control-generic-line\n            icon="editor:format-list-numbered"\n            title="Ordered List"\n            syntax-prefix="1. "\n          ></mtz-marked-control-generic-line>\n          <mtz-marked-control-generic-line\n            icon="editor:format-list-bulleted"\n            title="Unordered List"\n            syntax-prefix="- "\n          ></mtz-marked-control-generic-line>\n          <mtz-marked-control-link\n            icon="editor:insert-link"\n            title="Link"\n          ></mtz-marked-control-link>\n        </div>\n        <paper-textarea\n          slot="textarea"\n          label="Start typing..."\n          value="','"\n          @value-changed="','"\n        ></paper-textarea>\n      </mtz-marked-editor>\n    '])),this.content,this._contentChanged)}},{key:"_contentChanged",value:function(e){this.content=e.detail.value}},{key:"updated",value:function(e){var n=this;e.forEach((function(e,t){"content"===t&&n.dispatchEvent(new CustomEvent("content-changed",{detail:{value:n[t]}}))}))}},{key:"_changed",value:function(e){var n=this.shadowRoot.querySelector("#markededitor").getContent();this.content=n,this.dispatchEvent(new CustomEvent("content-updated",{bubbles:!0,cancelable:!0,composed:!0,detail:{content:this.content}}))}}],[{key:"styles",get:function(){return[n.css(u||(u=s(["\n        :host {\n          display: block;\n        }\n\n        .mtz-controls {\n          display: flex;\n          width: 100%;\n        }\n\n        .mtz-toolbar {\n          flex-grow: 5;\n        }\n      "])))]}},{key:"tag",get:function(){return"lrn-markdown-editor-editor"}},{key:"properties",get:function(){return{content:{type:String}}}}]),a}(n.LitElement);customElements.define(y.tag,y);var b=function(e){i(a,e);var r=d(a);function a(){var e;return t(this,a),(e=r.call(this)).layout="0",e.content="",e.cookies=!0,e.elReady=!1,e}return o(a,[{key:"render",value:function(){return n.html(m||(m=s(['\n      <div class="mtz-toolbar">\n        <a11y-tabs>\n          <a11y-tab id="tab-0" label="Write">\n            <div class="pane">\n              <lrn-markdown-editor-editor\n                content="','"\n                @content-changed="','"\n              ></lrn-markdown-editor-editor>\n            </div>\n          </a11y-tab>\n          <a11y-tab id="tab-1" label="Preview">\n            <div class="pane">\n              <marked-element\n                markdown="','"\n                @markdown-changed="','"\n              ></marked-element>\n            </div>\n          </a11y-tab>\n          <a11y-tab id="tab-2" label="Split View">\n            <div class="split-pane">\n              <div class="pane">\n                <div class="container-flex">\n                  <lrn-markdown-editor-editor\n                    content="','"\n                    @content-changed="','"\n                  ></lrn-markdown-editor-editor>\n                  <marked-element\n                    class="preview-pane"\n                    markdown="','"\n                    @markdown-changed="','"\n                  ></marked-element>\n                </div>\n              </div>\n            </div>\n          </a11y-tab>\n        </a11y-tabs>\n      </div>\n    '])),this.content,this.__contentChanged,this.content,this.__contentChanged,this.content,this.__contentChanged,this.content,this.__contentChanged)}},{key:"__contentChanged",value:function(e){this.content=e.detail.value}},{key:"updated",value:function(e){var n=this;e.forEach((function(e,t){"content"===t&&n.dispatchEvent(new CustomEvent("content-changed",{detail:{value:n[t]}}))}))}},{key:"_selectedChanged",value:function(e){var n=this._getCookieName();2===e?this._createCookie(n,"true","30"):2!==e&&!0===this.elReady&&this._eraseCookie(n)}},{key:"_createCookie",value:function(e,n,t){var r="";if(t){var o=new Date;o.setTime(o.getTime()+24*t*60*60*1e3),r="; expires="+o.toUTCString()}document.cookie=e+"="+n+r+"; path=/"}},{key:"_readCookie",value:function(e){for(var n=e+"=",t=document.cookie.split(";"),r=0;r<t.length;r++){for(var o=t[r];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(n))return o.substring(n.length,o.length)}return null}},{key:"_eraseCookie",value:function(e){this._createCookie(e,"",-1)}},{key:"_getCookieName",value:function(){return"lrnmarkdowneditorsplitview"}},{key:"firstUpdated",value:function(e){this.elReady=!0;var n=this._getCookieName(),t=this._readCookie(n);t&&"true"===t&&(this.selected=2)}}],[{key:"styles",get:function(){return[n.css(f||(f=s(["\n        :host {\n          display: block;\n        }\n\n        #split-pane {\n          display: flex;\n          width: 100%;\n        }\n\n        .split-pane > * {\n          flex: 1 1 auto;\n          min-height: 160px;\n          width: calc(50% - 16px);\n        }\n\n        .preview-pane {\n          background: lightblue;\n        }\n\n        div.pane {\n          padding: 16px;\n          width: calc(100% - 32px);\n        }\n\n        a11y-tabs {\n          background: #f5f5f5;\n          border-style: solid;\n          border-color: #dcdcdc;\n          border-width: 1px;\n          min-width: 500px;\n        }\n\n        marked-element.lrn-markdown-editor {\n          width: 100%;\n          word-wrap: break-word;\n        }\n\n        .container-flex {\n          display: flex;\n          flex-wrap: nowrap;\n        }\n\n        .split-pane .container-flex > * {\n          width: 50%;\n        }\n\n        .split-pane marked-element {\n          width: calc(100% - 32px);\n          min-width: 150px;\n          margin: 0 16px;\n          padding: 0 16px;\n          background: #fff;\n          border-left: solid #dcdcdc 1px;\n        }\n      "])))]}},{key:"tag",get:function(){return"lrn-markdown-editor"}},{key:"properties",get:function(){return{content:{type:String},layout:{type:String},cookies:{type:Boolean},elReady:{type:Boolean,attribute:"el-ready"}}}}]),a}(n.LitElement);customElements.define(b.tag,b),e.LrnMarkdownEditor=b,Object.defineProperty(e,"__esModule",{value:!0})}));
