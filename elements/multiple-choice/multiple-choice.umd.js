!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-fields/lib/simple-fields-field.js"),require("@lrnwebcomponents/simple-toast/simple-toast.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@lrnwebcomponents/simple-colors/simple-colors.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-fields/lib/simple-fields-field.js","@lrnwebcomponents/simple-toast/simple-toast.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).MultipleChoice={},e.litElement_js,e.schemaBehaviors_js,e.simpleColors_js,null,null,null,e.simpleToast_js)}(this,(function(e,t,n,i,r,o,s,a){"use strict";function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t,n,i,r,o,s){try{var a=e[o](s),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(i,r)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function h(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function g(e,t,n){return(g=w()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var r=new(Function.bind.apply(e,i));return n&&v(r,n.prototype),r}).apply(null,arguments)}function x(e){var t="function"==typeof Map?new Map:void 0;return(x=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return g(e,arguments,b(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),v(i,e)})(e)}function k(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){var t=w();return function(){var n,i=b(e);if(t){var r=b(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return k(this,n)}}function A(e,t,n){return(A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}(e,t);if(i){var r=Object.getOwnPropertyDescriptor(i,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function C(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}!function(){var e=function(e,t){return Math.random()*(t-e)+e},t=[{front:"#52A7DD",back:"#2287BD"},{front:"#f07178",back:"#c04148"},{front:"#ffcb6b",back:"#cf9b3b"}];function n(n,i){var r,o,s,a,c;this.options=i,this.randomModifier=e(0,99),this.color=t[Math.floor(e(0,t.length))],this.dimensions={x:e(8,16),y:e(8,14)},this.position={x:e(n.width/2,n.width/2),y:e(n.height/2,n.height/2)},this.rotation=e(0,2*Math.PI),this.scale={x:1,y:1},this.velocity=(o=[6,11],s=e((r=[-9,9])[0],r[1]),a=o[1]-o[0]+1,(c=o[1]-Math.abs(e(0,a)+e(0,a)-a))>=o[1]-1&&(c+=Math.random()<.25?e(1,3):0),{x:s,y:-c})}function i(n,i){this.options=i,this.color=t[Math.floor(e(0,t.length))].back,this.radius=e(1,2),this.position={x:e(n.width/2,n.width/2),y:e(n.height/2,n.height/2)},this.velocity={x:e(-6,6),y:e(-8,-12)}}n.prototype.update=function(){this.velocity.x-=this.velocity.x*this.options.dragConfetti,this.velocity.y=Math.min(this.velocity.y+this.options.gravityConfetti,this.options.terminalVelocity),this.velocity.x+=Math.random()>.5?Math.random():-Math.random(),this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.scale.y=Math.cos(.09*(this.position.y+this.randomModifier))},i.prototype.update=function(){this.velocity.x-=this.velocity.x*this.options.dragSequins,this.velocity.y=this.velocity.y+this.options.gravitySequins,this.position.x+=this.velocity.x,this.position.y+=this.velocity.y};var r=function(e){m(r,e);var t=j(r);function r(){var e;return u(this,r),(e=t.call(this)).canvas=null,e.confetti=[],e.sequins=[],e.options={confettiCount:55,sequinCount:30,gravityConfetti:.25,gravitySequins:.35,dragConfetti:.025,dragSequins:.02,terminalVelocity:4},e}return h(r,[{key:"connectedCallback",value:function(){this.style="display: block; position: relative;",this.canvas=document.createElement("canvas"),this.canvas.id="confetti-container-canvas-🎉",this.ctx=this.canvas.getContext("2d"),this.canvas.width=this.offsetWidth,this.canvas.height=this.offsetHeight,this.canvas.style="pointer-events: none; position: absolute; top:0; left: 0; width: 100%; height: 100%; z-index: 1000; image-rendering: crisp-edges;",this.prepend(this.canvas)}},{key:"attributeChangedCallback",value:function(e,t,n){"popped"===e&&null===t&&this.popConfetti()}},{key:"popConfetti",value:function(){for(var e=0;e<this.options.confettiCount;e++)this.confetti.push(new n(this.canvas,this.options));for(var t=0;t<this.options.sequinCount;t++)this.sequins.push(new i(this.canvas,this.options));this.render()}},{key:"render",value:function(){var e=this;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.confetti.forEach((function(t,n){var i=t.dimensions.x*t.scale.x,r=t.dimensions.y*t.scale.y;e.ctx.translate(t.position.x,t.position.y),e.ctx.rotate(t.rotation),t.update(),e.ctx.fillStyle=t.scale.y>0?t.color.front:t.color.back,e.ctx.fillRect(-i/2,-r/2,i,r),e.ctx.setTransform(1,0,0,1,0,0)})),this.sequins.forEach((function(t,n){e.ctx.translate(t.position.x,t.position.y),t.update(),e.ctx.fillStyle=t.color,e.ctx.beginPath(),e.ctx.arc(0,0,t.radius,0,2*Math.PI),e.ctx.fill(),e.ctx.setTransform(1,0,0,1,0,0)})),this.confetti.forEach((function(t,n){t.position.y-25>=e.canvas.height&&e.confetti.splice(n,1)})),this.sequins.forEach((function(t,n){t.position.y-25>=e.canvas.height&&e.sequins.splice(n,1)})),this.sequins.length||this.confetti.length?window.requestAnimationFrame(this.render.bind(this)):this.removeAttribute("popped")}}],[{key:"observedAttributes",get:function(){return["popped"]}}]),r}(x(HTMLElement));window.customElements&&window.customElements.define&&customElements.define("confetti-container",r)}();var S,P,E,q,M,T,R,I=Object.freeze({__proto__:null}),B=function(e){m(o,e);var n,i,r=j(o);function o(){var e;if(u(this,o),(e=r.call(this)).randomize=!1,e.hideButtons=!1,e.disabled=!1,e.singleOption=!1,e.checkLabel="Check answer",e.resetLabel="Reset",e.question="",e.displayedAnswers=[],e.correctText="Great job!",e.correctIcon="icons:thumb-up",e.incorrectText="Better luck next time!",e.incorrectIcon="icons:thumb-down",e.quizName="default",e.children.length>0){var t=Array.from(e.querySelectorAll("input")),n=[];for(var i in t){var s={label:t[i].value,correct:null!=t[i].getAttribute("correct")};n.push(s)}e.answers=n,e.innerHTML=""}else e.answers=[];return e}return h(o,[{key:"updated",value:function(e){var t=this;A(b(o.prototype),"updated",this)&&A(b(o.prototype),"updated",this).call(this,e),e.forEach((function(e,n){if(["answers","displayedAnswers"].includes(n)){var i="".concat(n.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase(),"-changed");t.dispatchEvent(new CustomEvent(i,{detail:{value:t[n]}}))}"answers"==n&&t.answers&&t.answers.length>0&&(t.displayedAnswers=_(t._computeDisplayedAnswers(t.answers,t.randomize)))}))}},{key:"render",value:function(){var e=this;return t.html(S||(S=C(['\n      <confetti-container id="confetti">\n        <meta property="oer:assessing" content="','" />\n        <h3><span property="oer:name">',"</span></h3>\n        ","\n        ","\n      </confetti-container>\n    "])),this.relatedResource,this.question,this.singleOption?t.html(P||(P=C(["\n              ","\n            "])),this.displayedAnswers.map((function(n,i){return t.html(E||(E=C(['\n                  <simple-fields-field\n                    ?disabled="','"\n                    property="oer:answer"\n                    type="radio"\n                    name="','"\n                    .value="','"\n                    @value-changed="','"\n                    label="','"\n                  ></simple-fields-field>\n                '])),e.disabled,i,n.userGuess,e.checkedEvent,n.label?n.label:"")}))):t.html(q||(q=C(["\n              <ul>\n                ","\n              </ul>\n            "])),this.displayedAnswers.map((function(n,i){return t.html(M||(M=C(['\n                    <li>\n                      <simple-fields-field\n                        ?disabled="','"\n                        property="oer:answer"\n                        name="','"\n                        type="checkbox"\n                        label="','"\n                        .value="','"\n                        @value-changed="','"\n                      ></simple-fields-field>\n                    </li>\n                  '])),e.disabled,i,n.label?n.label:"",n.userGuess,e.checkedEvent)}))),this.hideButtons?"":t.html(T||(T=C(['\n              <div id="buttons">\n                <button\n                  id="check"\n                  ?disabled="','"\n                  @click="','"\n                >\n                  ','\n                </button>\n                <button\n                  id="reset"\n                  ?disabled="','"\n                  @click="','"\n                >\n                  ',"\n                </button>\n              </div>\n            "])),this.disabled,this._verifyAnswers,this.checkLabel,this.disabled,this.resetAnswers,this.resetLabel))}},{key:"checkedEvent",value:function(e){var t=this.displayedAnswers;t[e.target.name].userGuess=e.detail.value,this.displayedAnswers=_(t)}},{key:"resetAnswers",value:function(e){a.SimpleToastStore.hide(),this.displayedAnswers=[];var t=this.answers;this.answers.forEach((function(e){e.userGuess=!1})),this.answers=_(t)}},{key:"checkAnswers",value:function(){var e=!0;for(var t in this.displayedAnswers)0!=e&&this.displayedAnswers[t].correct&&this.displayedAnswers[t].userGuess?e=!0:(this.displayedAnswers[t].correct&&!this.displayedAnswers[t].userGuess||!this.displayedAnswers[t].correct&&this.displayedAnswers[t].userGuess)&&(e=!1);return e}},{key:"_verifyAnswers",value:function(e){var t=this;a.SimpleToastStore.hide();var n=this.checkAnswers();n?(this.__toastColor="green",this.__toastIcon=this.correctIcon,this.__toastText=this.correctText,Promise.resolve(I).then((function(e){setTimeout((function(){t.shadowRoot.querySelector("#confetti").setAttribute("popped","")}),0)}))):(this.__toastColor="red",this.__toastIcon=this.incorrectIcon,this.__toastText=this.incorrectText);var i=document.createElement("simple-icon");i.icon=this.__toastIcon,i.style.marginLeft="16px",i.accentColor=this.__toastColor,i.dark=!0,a.SimpleToastStore.showSimpleToast({detail:{duration:3e3,text:this.__toastText,slot:i,accentColor:this.__toastColor}});var r={activityDisplay:"answered",objectName:this.quizName,resultSuccess:n};this.dispatchEvent(new CustomEvent("user-engagement",{bubbles:!0,composed:!0,cancelable:!1,detail:r}))}},{key:"createRenderRoot",value:function(){return this.attachShadow({mode:"open",delegatesFocus:!0})}},{key:"_computeDisplayedAnswers",value:function(e,t){if("undefined"!==c(e)&&null!=e&&e.length>0&&t&&!this._haxstate){for(var n,i,r=e,o=r.length;0!==o;)i=Math.floor(Math.random()*o),n=r[o-=1],r[o]=r[i],r[i]=n;return r}return e}},{key:"haxHooks",value:function(){return{editModeChanged:"haxeditModeChanged",activeElementChanged:"haxactiveElementChanged",preProcessNodeToContent:"haxpreProcessNodeToContent",preProcessInsertContent:"haxpreProcessInsertContent",inlineContextMenu:"haxinlineContextMenu"}}},{key:"haxactiveElementChanged",value:function(e,t){t&&(this._haxstate=t)}},{key:"haxeditModeChanged",value:function(e){this._haxstate=e}},{key:"haxinlineContextMenu",value:function(e){e.ceButtons=[{icon:"icons:add",callback:"haxClickInlineAdd",label:"Add answer"},{icon:"icons:remove",callback:"haxClickInlineRemove",label:"Remove answer"}]}},{key:"haxClickInlineAdd",value:function(e){this.resetAnswers();var t=this.answers;return t.push({label:"New answer",correct:!1}),this.answers=_(t),!0}},{key:"haxClickInlineRemove",value:function(e){if(this.answers.length>0){this.resetAnswers();var t=this.answers;return t.pop(),this.answers=_(t),!0}}},{key:"haxpreProcessNodeToContent",value:(n=regeneratorRuntime.mark((function e(t){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.answers)for(n in t.answers)(i=document.createElement("input")).setAttribute("type","checkbox"),i.value=t.answers[n].label,t.answers[n].correct&&i.setAttribute("correct","correct"),t.appendChild(i);return e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})),i=function(){var e=this,t=arguments;return new Promise((function(i,r){var o=n.apply(e,t);function s(e){l(o,i,r,s,a,"next",e)}function a(e){l(o,i,r,s,a,"throw",e)}s(void 0)}))},function(e){return i.apply(this,arguments)})},{key:"haxpreProcessInsertContent",value:function(e){return e.properties.answers&&(e.properties.answers=e.properties.answers.map((function(e){return e.userGuess&&delete e.userGuess,e}))),e}},{key:"firstUpdated",value:function(e){A(b(o.prototype),"firstUpdated",this)&&A(b(o.prototype),"firstUpdated",this).call(this,e),this.setAttribute("typeof","oer:Assessment")}}],[{key:"styles",get:function(){return[].concat(_(A(b(o),"styles",this)),[t.css(R||(R=C(["\n        :host {\n          display: block;\n          min-width: 160px;\n          padding: 16px 16px 54px 16px;\n          color: var(--simple-colors-default-theme-grey-12);\n          --simple-fields-field-color: var(\n            --simple-colors-default-theme-grey-12\n          );\n          --simple-fields-field-ink-color: var(\n            --simple-colors-default-theme-grey-12\n          );\n          --simple-fields-field-checked-color: var(\n            --simple-colors-default-theme-accent-8\n          );\n          --simple-fields-field-checked-ink-color: var(\n            --simple-colors-default-theme-accent-8\n          );\n          --simple-fields-field-checkmark-color: var(\n            --simple-colors-default-theme-grey-1\n          );\n          --simple-fields-field-label-color: var(\n            --simple-colors-default-theme-grey-12\n          );\n          --simple-fields-field-error-color: var(\n            --simple-colors-default-theme-red-8\n          );\n        }\n\n        :host button {\n          background-color: var(--simple-colors-default-theme-grey-1);\n          color: var(--simple-colors-default-theme-grey-12);\n        }\n        :host button:hover,\n        :host button:focus,\n        :host button:active {\n          cursor: pointer;\n          background-color: var(--simple-colors-default-theme-grey-2);\n          color: var(--simple-colors-default-theme-grey-12);\n        }\n        h3 {\n          margin: 8px;\n        }\n        ul {\n          list-style: none;\n          padding: 0;\n          margin: 0;\n        }\n        ul li {\n          padding: 0;\n        }\n        simple-fields-field {\n          padding: 8px;\n          margin: 2px;\n        }\n        simple-fields-field::part(option-inner) {\n          position: absolute;\n          right: 0px;\n          bottom: 50%;\n          top: 50%;\n          padding: 0px;\n          margin: 0px;\n        }\n        simple-icon {\n          display: inline-flex;\n        }\n      "])))])}},{key:"tag",get:function(){return"multiple-choice"}},{key:"properties",get:function(){return y(y({},A(b(o),"properties",this)),{},{disabled:{type:Boolean},singleOption:{type:Boolean,attribute:"single-option"},checkLabel:{type:String,attribute:"check-label"},resetLabel:{type:String,attribute:"reset-label"},relatedResource:{type:String,attribute:"related-resource"},question:{type:String},answers:{type:Array},displayedAnswers:{type:Array},correctText:{type:String,attribute:"correct-text"},incorrectText:{type:String,attribute:"incorrect-text"},correctIcon:{type:String,attribute:"correct-icon"},incorrectIcon:{type:String,attribute:"incorrect-icon"},quizName:{type:String,attribute:"quiz-name"},randomize:{type:Boolean,reflect:!0},hideButtons:{type:Boolean,attribute:"hide-buttons"}})}},{key:"haxProperties",get:function(){return decodeURIComponent("undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("multiple-choice.umd.js",document.baseURI).href)+"/../lib/".concat(this.tag,".haxProperties.json")}}]),o}(n.SchemaBehaviors(i.SimpleColors));window.customElements.define(B.tag,B),e.MultipleChoice=B,Object.defineProperty(e,"__esModule",{value:!0})}));
