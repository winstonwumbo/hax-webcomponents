!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@lrnwebcomponents/moment-element/moment-element.js"),require("@polymer/paper-badge/paper-badge.js"),require("@polymer/marked-element/marked-element.js"),require("@lrnwebcomponents/simple-tooltip/simple-tooltip.js"),require("@polymer/polymer/polymer-element.js"),require("@polymer/polymer/lib/utils/async.js"),require("@polymer/paper-input/paper-textarea.js"),require("@lrnwebcomponents/materializecss-styles/lib/colors.js"),require("@lrnwebcomponents/mtz-marked-editor/mtz-marked-editor.js"),require("@lrnwebcomponents/mtz-marked-editor/lib/mtz-marked-control-generic-line.js"),require("@lrnwebcomponents/mtz-marked-editor/lib/mtz-marked-control-generic-wrap.js"),require("@lrnwebcomponents/mtz-marked-editor/lib/mtz-marked-control-link.js"),require("@lrnwebcomponents/word-count/word-count.js"),require("@lrnwebcomponents/lrnsys-button/lrnsys-button.js"),require("@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/moment-element/moment-element.js","@polymer/paper-badge/paper-badge.js","@polymer/marked-element/marked-element.js","@lrnwebcomponents/simple-tooltip/simple-tooltip.js","@polymer/polymer/polymer-element.js","@polymer/polymer/lib/utils/async.js","@polymer/paper-input/paper-textarea.js","@lrnwebcomponents/materializecss-styles/lib/colors.js","@lrnwebcomponents/mtz-marked-editor/mtz-marked-editor.js","@lrnwebcomponents/mtz-marked-editor/lib/mtz-marked-control-generic-line.js","@lrnwebcomponents/mtz-marked-editor/lib/mtz-marked-control-generic-wrap.js","@lrnwebcomponents/mtz-marked-editor/lib/mtz-marked-control-link.js","@lrnwebcomponents/word-count/word-count.js","@lrnwebcomponents/lrnsys-button/lrnsys-button.js","@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).LrnsysComment={},null,null,null,null,e.polymerElement_js,e.async)}(this,(function(e,n,t,o,r,i,a){"use strict";function l(e){if(e&&e.__esModule)return e;var n=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var o=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,o.get?o:{enumerable:!0,get:function(){return e[t]}})}})),n.default=e,Object.freeze(n)}var c,s=l(a);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,n){return(u=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function b(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function h(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,o=p(e);if(n){var r=p(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return b(this,t)}}function y(e,n,t){return(y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var o=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=p(e)););return e}(e,n);if(o){var r=Object.getOwnPropertyDescriptor(o,n);return r.get?r.get.call(t):r.value}})(e,n,t||e)}var f=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&u(e,n)}(a,e);var n,t,o,r=h(a);function a(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,a),r.call(this)}return n=a,o=[{key:"template",get:function(){return i.html(c||(e=['\n      <style include="materializecss-styles-colors">\n        :host {\n          display: block;\n          padding: 10px 10px 10px 0px;\n        }\n        :host([disabled]) {\n          opacity: 0.5;\n          background-color: #cccccc;\n          pointer-events: none;\n        }\n        :host(:focus),\n        :host(:hover) {\n          z-index: 2;\n        }\n        :host(:focus) .comment-outer,\n        :host(:hover) .comment-outer {\n          border: 1px #0277bd solid;\n        }\n        :host [hidden] {\n          display: none;\n        }\n        .comment-outer {\n          display: table;\n          width: 100%;\n          border: 1px #ddd solid;\n          color: #444;\n        }\n        .comment-outer.new-comment {\n          border: 1px #d81b60 dashed;\n          color: #000;\n        }\n        .comment-inner {\n          display: table-row;\n        }\n        .comment-avatar {\n          padding: 0 7px;\n          width: 40px;\n        }\n        .comment-depth,\n        .comment-avatar,\n        .comment-content {\n          padding-top: 8px;\n          padding-bottom: 8px;\n          display: table-cell;\n          vertical-align: top;\n        }\n        .comment-content {\n          padding-right: 7px;\n          max-width: 300px;\n        }\n        h1,\n        h2,\n        h3,\n        h4 {\n          text-align: left;\n          font-size: 20px;\n          line-height: 20px;\n        }\n        h1.comment-heading,\n        h2.comment-heading,\n        h3.comment-heading,\n        h4.comment-heading {\n          margin-top: 7px;\n        }\n        p {\n          font-size: 14px;\n          line-height: 18px;\n          text-align: left;\n        }\n        #editcomment {\n          background-color: white;\n          padding: 4px;\n        }\n        marked-element {\n          line-height: 16px;\n          font-size: 14.4px;\n        }\n        .nowrap-me marked-element:hover {\n          box-shadow: -1px 0 0 0 black inset;\n          cursor: pointer;\n        }\n        .nowrap-me marked-element ::slotted(#content p.marked-element) {\n          height: 32px;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          margin-bottom: 35px;\n        }\n        .nowrap-me marked-element ::slotted(#content p.marked-element:after) {\n          content: "see more";\n          position: absolute;\n          bottom: 65px;\n          right: 17px;\n          color: #1976d2;\n        }\n        .comment-depth-1 {\n          width: 0;\n        }\n        .comment-depth-2 {\n          width: 54px;\n          border-right: 3px solid #ccc;\n        }\n        .comment-depth-3,\n        .comment-depth-4,\n        .comment-depth-5,\n        .comment-depth-6,\n        .comment-depth-7,\n        .comment-depth-8,\n        .comment-depth-9 {\n          width: 108px;\n          border-right: 3px solid #ccc;\n        }\n        .center {\n          padding: 0;\n        }\n        .circle {\n          border-radius: 50% !important;\n        }\n        .comment-actions {\n          margin: 0;\n          padding: 0;\n          display: block;\n          border-top: 1px solid #ddd;\n        }\n        .comment-actions lrnsys-button {\n          display: inline-flex;\n          --lrnsys-button-height: 30px;\n          padding: 1px;\n        }\n        .comment-actions .comment-actions-group {\n          margin: 0;\n          padding: 0;\n          display: block;\n        }\n        .comment-actions .comment-actions-group.left-actions {\n          float: left;\n        }\n        .comment-actions .comment-actions-group.right-actions {\n          float: right;\n        }\n        moment-element {\n          float: right;\n          font-size: 90%;\n          font-style: italic;\n          font-weight: normal;\n        }\n        paper-badge {\n          display: flex;\n          float: right;\n        }\n        .like-icon-color {\n          color: #2196f3;\n        }\n        .element-invisible {\n          position: absolute;\n          left: -9999px;\n          top: 0;\n          width: 0;\n          height: 0;\n          overflow: hidden;\n        }\n      </style>\n      <div class$="comment-outer [[commentNew]]">\n        <div class="comment-inner">\n          <div\n            class$="comment-depth comment-depth-[[comment.attributes.threadDepth]] grey lighten-3"\n          ></div>\n          <div class="comment-avatar">\n            <lrndesign-avatar\n              id="avatar"\n              label="[[comment.relationships.author.data.name]]"\n              src="[[comment.relationships.author.data.avatar]]"\n              class="float-left ferpa-protect"\n            ></lrndesign-avatar>\n            <simple-tooltip\n              for="avatar"\n              animation-delay="0"\n              class="ferpa-protect"\n              >[[displayName]]</simple-tooltip\n            >\n            <template\n              is="dom-if"\n              if="[[comment.relationships.author.data.visual.icon]]"\n            >\n              <paper-badge\n                icon="[[comment.relationships.author.data.visual.icon]]"\n                for="papercard"\n                label="[[comment.relationships.author.data.visual.label]]"\n              >\n              </paper-badge>\n            </template>\n          </div>\n          <div class="comment-content">\n            <div class="comment-body">\n              <div id="bodyarea" class="nowrap-me">\n                <h4 class="ferpa-protect comment-heading">\n                  <span class="element-invisible">At </span\n                  ><moment-element\n                    datetime$="[[comment.attributes.created]]"\n                    output-format="MMM DD[,] YYYY"\n                  ></moment-element>\n                  [[comment.relationships.author.data.display_name]]\n                  <span class="element-invisible"\n                    >[[comment.relationships.author.data.visual.label]]</span\n                  >\n                  said:\n                </h4>\n                <marked-element\n                  smartypants\n                  id="renderedcomment"\n                  markdown="[[comment.attributes.body]]"\n                >\n                  <word-count\n                    class="markdown-html-slot"\n                    slot="markdown-html"\n                  ></word-count>\n                </marked-element>\n              </div>\n              <mtz-marked-editor id="commenteditor" hidden>\n                <div slot="controls">\n                  <mtz-marked-control-generic-wrap\n                    icon="editor:format-bold"\n                    title="Bold"\n                    syntax-prefix="**"\n                    syntax-suffix="**"\n                    keys="ctrl+b"\n                  ></mtz-marked-control-generic-wrap>\n                  <mtz-marked-control-generic-wrap\n                    icon="editor:format-italic"\n                    title="Italic"\n                    syntax-prefix="_"\n                    syntax-suffix="_"\n                    keys="ctrl+i"\n                  ></mtz-marked-control-generic-wrap>\n                  <mtz-marked-control-generic-line\n                    icon="editor:format-size"\n                    title="Heading 3"\n                    syntax-prefix="### "\n                  ></mtz-marked-control-generic-line>\n                  <mtz-marked-control-generic-line\n                    icon="editor:format-list-numbered"\n                    title="Ordered List"\n                    syntax-prefix="1. "\n                  ></mtz-marked-control-generic-line>\n                  <mtz-marked-control-generic-line\n                    icon="editor:format-list-bulleted"\n                    title="Unordered List"\n                    syntax-prefix="- "\n                  ></mtz-marked-control-generic-line>\n                  <mtz-marked-control-link\n                    icon="editor:insert-link"\n                    title="Link"\n                  ></mtz-marked-control-link>\n                </div>\n                <paper-textarea\n                  char-counter\n                  autofocus\n                  id="editcomment"\n                  label="Comment"\n                  value="{{comment.attributes.body}}"\n                  slot="textarea"\n                ></paper-textarea>\n              </mtz-marked-editor>\n            </div>\n            <div class="comment-actions">\n              <div class="comment-actions-group left-actions">\n                <lrnsys-button\n                  on-click="actionHandler"\n                  id="reply"\n                  no-padding\n                  raised\n                  data-commentid="[[comment.id]]"\n                  icon="reply"\n                  hover-class="[[hoverClass]]"\n                  icon-class="grey-text no-margin"\n                  hidden$="[[!comment.actions.reply]]"\n                  >Reply</lrnsys-button\n                >\n                <lrnsys-button\n                  on-click="actionHandler"\n                  id="like"\n                  no-padding\n                  raised\n                  data-commentid="[[comment.id]]"\n                  icon="thumb-up"\n                  hover-class="[[hoverClass]]"\n                  icon-class="grey-text no-margin"\n                  hidden$="[[!comment.actions.like]]"\n                  >Like</lrnsys-button\n                >\n              </div>\n              <div class="comment-actions-group right-actions">\n                <lrnsys-button\n                  on-click="actionHandler"\n                  id="edit"\n                  data-commentid="[[comment.id]]"\n                  icon="create"\n                  raised\n                  no-padding\n                  hover-class="[[hoverClass]]"\n                  icon-class="grey-text no-margin"\n                  hidden$="[[!comment.actions.edit]]"\n                  >Edit</lrnsys-button\n                >\n                <lrnsys-button\n                  on-click="actionHandler"\n                  id="delete"\n                  no-padding\n                  data-commentid="[[comment.id]]"\n                  icon="delete-forever"\n                  raised\n                  hover-class="[[hoverClass]]"\n                  icon-class="grey-text no-margin"\n                  hidden$="[[!comment.actions.delete]]"\n                  >Delete</lrnsys-button\n                >\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    '],n||(n=e.slice(0)),c=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))));var e,n}},{key:"tag",get:function(){return"lrnsys-comment"}},{key:"properties",get:function(){return{comment:{type:Object,notify:!0,observer:"_commentLoaded"},displayName:{type:String,notify:!0,computed:"_generateName(comment.relationships.author.data.display_name, comment.relationships.author.data.visual)"},commentNew:{type:String,notify:!0,computed:"_isCommentNew(comment.relationships.author.data.visual)"},hoverClass:{type:String,reflectToAttribute:!0},editform:{type:Boolean,notify:!0,observer:"_editTrigger",reflectToAttribute:!0},disabled:{type:Boolean,notify:!0,reflectToAttribute:!0}}}}],(t=[{key:"connectedCallback",value:function(){y(p(a.prototype),"connectedCallback",this).call(this),this.shadowRoot.querySelector("#bodyarea").addEventListener("click",this.bodyToggle.bind(this)),this.shadowRoot.querySelector("#bodyarea").addEventListener("dblclick",this.bodyToggleOn.bind(this))}},{key:"disconnectedCallback",value:function(){y(p(a.prototype),"disconnectedCallback",this).call(this),this.shadowRoot.querySelector("#bodyarea").removeEventListener("click",this.bodyToggle.bind(this)),this.shadowRoot.querySelector("#bodyarea").removeEventListener("dblclick",this.bodyToggleOn.bind(this))}},{key:"_generateName",value:function(e,n){return"undefined"!==m(n)&&!1!==n.label?e+" ("+n.label+")":e}},{key:"_isCommentNew",value:function(e){return"undefined"!==m(e)&&!1!==e.label?"new-comment":""}},{key:"_commentLoaded",value:function(e){this.editform=this.comment.metadata.editing,this.disabled=this.comment.metadata.disabled,this.blockFirstState=!0}},{key:"actionHandler",value:function(e){var n=e.target;null==n.dataCommentid||n.disabled||(n.dataCommentid,"reply"==n.id?this.dispatchEvent(new CustomEvent("comment-reply",{bubbles:!0,cancelable:!0,composed:!0,detail:{comment:this.comment,target:n}})):"like"==n.id?(this.shadowRoot.querySelector("#like").classList.toggle("like-icon-color"),this.dispatchEvent(new CustomEvent("comment-like",{bubbles:!0,cancelable:!0,composed:!0,detail:{comment:this.comment,target:n}}))):"edit"==n.id?this.editform=!this.editform:"delete"==n.id&&this.dispatchEvent(new CustomEvent("comment-delete-dialog",{bubbles:!0,cancelable:!0,composed:!0,detail:{comment:this.comment,target:n}})))}},{key:"_editTrigger",value:function(e){var n=this;"undefined"!==m(this.comment)&&this.comment.actions.edit&&s.microTask.run((function(){n.shadowRoot.querySelector("#renderedcomment").hidden=n.editform,n.shadowRoot.querySelector("#commenteditor").hidden=!n.editform,n.editform?(n.shadowRoot.querySelector("#edit").icon="save",n.shadowRoot.querySelector("#edit").innerText="Save",n.shadowRoot.querySelector("#reply").disabled=!0,n.shadowRoot.querySelector("#editcomment").focus(),n.dispatchEvent(new CustomEvent("comment-editing",{bubbles:!0,cancelable:!0,composed:!0,detail:{comment:n.comment}})),n.blockFirstState=!1):(n.blockFirstState?n.blockFirstState=!1:n.dispatchEvent(new CustomEvent("comment-save",{bubbles:!0,cancelable:!0,composed:!0,detail:{comment:n.comment}})),n.shadowRoot.querySelector("#edit").icon="create",n.shadowRoot.querySelector("#edit").innerText="Edit",n.shadowRoot.querySelector("#reply").disabled=!1)}))}},{key:"bodyToggle",value:function(e){this.shadowRoot.querySelector("#bodyarea").classList.remove("nowrap-me")}},{key:"bodyToggleOn",value:function(e){this.shadowRoot.querySelector("#bodyarea").classList.toggle("nowrap-me")}}])&&d(n.prototype,t),o&&d(n,o),a}(i.PolymerElement);window.customElements.define(f.tag,f),e.LrnsysComment=f,Object.defineProperty(e,"__esModule",{value:!0})}));
