!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/polymer/lib/utils/render-status.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/polymer/lib/utils/render-status.js"],t):t((e=e||self).AwesomeExplosion={},e.polymerElement_js,e.renderStatus_js)}(this,function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e,t,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function l(){var e,t,n=(e=['\n      <style>\n        :host {\n          display: inline-block;\n        }\n        :host([size="tiny"]) #image {\n          width: 80px;\n          height: 80px;\n        }\n        :host([size="small"]) #image {\n          width: 160px;\n          height: 160px;\n        }\n        :host([size="medium"]) #image {\n          width: 240px;\n          height: 240px;\n        }\n        :host([size="large"]) #image {\n          width: 320px;\n          height: 320px;\n        }\n        :host([size="epic"]) #image {\n          width: 720px;\n          height: 720px;\n        }\n\n        :host([color="red"]) #image {\n          filter: sepia() saturate(10000%) hue-rotate(30deg);\n        }\n        :host([color="purple"]) #image {\n          filter: sepia() saturate(10000%) hue-rotate(290deg);\n        }\n        :host([color="blue"]) #image {\n          filter: sepia() saturate(10000%) hue-rotate(210deg);\n        }\n        :host([color="orange"]) #image {\n          filter: sepia() saturate(10000%) hue-rotate(320deg);\n        }\n        :host([color="yellow"]) #image {\n          filter: sepia() saturate(10000%) hue-rotate(70deg);\n        }\n        #image {\n          width: 240px;\n          height: 240px;\n        }\n      </style>\n      <img src="[[image]]" id="image" class="image-tag" alt="" />\n    '],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return l=function(){return n},n}var p=function(e){function p(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),a(this,s(p).apply(this,arguments))}var c,d,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(p,t.PolymerElement),c=p,f=[{key:"template",get:function(){return t.html(l())}},{key:"tag",get:function(){return"awesome-explosion"}},{key:"properties",get:function(){return{state:{type:String,value:"stop",reflectToAttribute:!0},stopped:{type:Boolean,computed:"_calculateStopped(state)"},playing:{type:Boolean,computed:"_calculatePlaying(state)"},paused:{type:Boolean,computed:"_calculatePaused(state)"},image:{type:String,value:"assets/explode.gif",reflectToAttribute:!0},sound:{type:String,value:"assets/273320__clagnut__fireworks.mp3",reflectToAttribute:!0},size:{type:String,value:"medium",reflectToAttribute:!0},color:{type:String,value:"",reflectToAttribute:!0},resetSound:{type:Boolean,value:!1,reflectToAttribute:!0}}}}],(d=[{key:"connectedCallback",value:function(){u(s(p.prototype),"connectedCallback",this).call(this),n.afterNextRender(this,function(){this.addEventListener("click",this._setPlaySound.bind(this)),this.addEventListener("mouseover",this._setPlaySound.bind(this)),this.addEventListener("mouseout",this._setStopSound.bind(this))})}},{key:"disconnectedCallback",value:function(){this.removeEventListener("click",this._setPlaySound.bind(this)),this.removeEventListener("mouseover",this._setPlaySound.bind(this)),this.removeEventListener("mouseout",this._setStopSound.bind(this)),u(s(p.prototype),"disconnectedCallback",this).call(this)}},{key:"_calculateStopped",value:function(e,t){"stop"==e?(this.stopped=!0,"undefined"!==o(window.audio)&&(window.audio.currentTime=0),this._stopSound(),this.dispatchEvent(new CustomEvent("awesome-event",{bubbles:!0,cancelable:!0,composed:!0,detail:{message:"Sound stopped"}}))):this.stopped=!1}},{key:"_calculatePlaying",value:function(e,t){"play"==e?(this.playing=!0,this._playSound(),this.dispatchEvent(new CustomEvent("awesome-event",{bubbles:!0,cancelable:!0,composed:!0,detail:{message:"Sound played"}}))):this.playing=!1}},{key:"_calculatePaused",value:function(e,t){"pause"==e?(this.paused=!0,this._stopSound(),this.dispatchEvent(new CustomEvent("awesome-event",{bubbles:!0,cancelable:!0,composed:!0,detail:{message:"Sound paused"}}))):this.paused=!1}},{key:"_stopSound",value:function(){"undefined"!==o(window.audio)&&(window.audio.pause(),this.resetSound&&(window.audio.currentTime=0))}},{key:"_setPlaySound",value:function(e){this.state="play"}},{key:"_setStopSound",value:function(e){this.state="pause"}},{key:"_playSound",value:function(){"undefined"===o(window.audio)&&(window.audio=new Audio(this.sound)),window.audio.play()}}])&&i(c.prototype,d),f&&i(c,f),p}();window.customElements.define(p.tag,p),e.AwesomeExplosion=p,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=awesome-explosion.umd.js.map
