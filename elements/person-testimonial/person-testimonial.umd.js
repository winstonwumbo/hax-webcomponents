!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/polymer/lib/utils/render-status.js"),require("@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/polymer/lib/utils/render-status.js","@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","@lrnwebcomponents/simple-colors/simple-colors.js"],n):n((e=e||self).PersonTestimonial={},e.polymerElement_js,e.renderStatus_js,e.HAXWiring_js,e.simpleColors_js)}(this,function(e,n,t,o,i){"use strict";function r(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,n){return(a=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,n,t){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var o=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=s(e)););return e}(e,n);if(o){var i=Object.getOwnPropertyDescriptor(o,n);return i.get?i.get.call(t):i.value}})(e,n,t||e)}function c(){var e,n,t=(e=['\n      <style>\n        :host {\n          display: block;\n          --person-testimonial-font-family: sans-serif;\n          --person-testimonial-bg: var(--simple-colors-default-theme-grey-1);\n          --person-testimonial-color: var(\n            --simple-colors-default-theme-accent-7\n          );\n          --person-testimonial-text: var(--simple-colors-default-theme-grey-12);\n        }\n\n        paper-card {\n          display: inline-flex;\n          background-color: var(--person-testimonial-bg);\n          color: var(--person-testimonial-text);\n          font-family: var(--person-testimonial-font-family);\n        }\n\n        iron-image {\n          display: block;\n          width: 150px;\n          height: 100%;\n        }\n        .image {\n          padding-right: 5px;\n          background-color: var(--person-testimonial-color);\n        }\n\n        iron-icon {\n          --iron-icon-height: 24px;\n          --iron-icon-width: 24px;\n          --iron-icon-fill-color: var(--person-testimonial-color);\n        }\n\n        .wrap {\n          margin: 15px;\n        }\n\n        .testimonial {\n          line-height: 24px;\n          font-size: 16px;\n          font-style: italic;\n        }\n\n        .name {\n          font-size: 21px;\n          text-transform: uppercase;\n          font-weight: bold;\n          margin-top: 20px;\n        }\n\n        .position {\n          font-size: 14px;\n          margin-top: 5px;\n        }\n\n        .arrow_right {\n          width: 0;\n          height: 0;\n          border-top: 15px solid var(--person-testimonial-bg);\n          border-bottom: 15px solid var(--person-testimonial-bg);\n          border-left: solid 15px transparent;\n          background-color: var(--person-testimonial-color);\n          position: relative;\n          top: 55px;\n        }\n\n        #quotestart {\n          display: inline-flex;\n          transform: rotateY(180deg);\n        }\n\n        #quoteend {\n          display: inline-flex;\n        }\n\n        @media screen and (max-width: 850px) {\n          paper-card {\n            display: flex;\n            flex-wrap: wrap;\n          }\n          iron-image {\n            display: block;\n            border-radius: 50%;\n            width: 200px;\n            height: 200px;\n          }\n          .image {\n            margin-top: 25px;\n            border-radius: 50%;\n            padding: 5px;\n            margin-left: auto;\n            margin-right: auto;\n          }\n          .arrow_right {\n            display: none;\n          }\n          .name,\n          .position {\n            text-align: center;\n          }\n        }\n      </style>\n      <paper-card elevation="[[elevation]]">\n        <div class="image">\n          <iron-image\n            src="[[image]]"\n            sizing="cover"\n            preload=""\n            fade=""\n          ></iron-image>\n        </div>\n        <div class="arrow_right"></div>\n        <div class="wrap">\n          <div class="testimonial">\n            <iron-icon\n              id="quotestart"\n              icon="persontestimonial:format-quote"\n            ></iron-icon>\n            <slot></slot>\n            <iron-icon\n              id="quoteend"\n              icon="persontestimonial:format-quote"\n            ></iron-icon>\n          </div>\n          <div class="name">[[name]]</div>\n          <div class="position">[[position]]</div>\n        </div>\n      </paper-card>\n    '],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return c=function(){return t},t}var d=function(e){function d(){var e,n,i;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,d),n=this,e=!(i=s(d).call(this))||"object"!=typeof i&&"function"!=typeof i?l(n):i,import("@polymer/paper-card/paper-card.js"),import("@polymer/iron-image/iron-image.js"),import("@polymer/iron-icon/iron-icon.js"),import("@lrnwebcomponents/person-testimonial/lib/person-testimonial-icon.js"),t.afterNextRender(l(e),function(){this.HAXWiring=new o.HAXWiring,this.HAXWiring.setup(d.haxProperties,d.tag,this)}),e}var m,u,f;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&a(e,n)}(d,i.SimpleColors),m=d,f=[{key:"template",get:function(){return n.html(c())}},{key:"tag",get:function(){return"person-testimonial"}},{key:"properties",get:function(){var e={elevation:{type:Number,value:1,reflectToAttribute:!0},image:{type:String},name:{type:String},position:{type:String}};return p(s(d),"properties",this)&&(e=Object.assign(e,p(s(d),"properties",this))),e}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Testimonial",description:"A person saying a nice thing about us",icon:"editor:format-quote",color:"orange",groups:["Content","Presentation"],handles:[{type:"image",source:"image",title:"name",caption:"position"}],meta:{author:"EberlyODL / LRNWebComponents"}},settings:{quick:[{property:"image",title:"Image",description:"Adds image to this testimonial",inputMethod:"textfield",icon:"editor:insert-photo"},{property:"name",title:"Full Name",description:"Credit the person making the testimonial",inputMethod:"textfield",icon:"account-circle"},{property:"position",title:"Position or Job Title",description:"List the position and job title",inputMethod:"textfield",icon:"icons:work"},{property:"accentColor",title:"Accent color",description:"Select the accent color use",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"dark",title:"Dark",description:"Use dark theme",inputMethod:"boolean",icon:"invert-colors"}],configure:[{property:"image",title:"Image",description:"Adds image to testimonial",inputMethod:"haxupload",icon:"editor:insert-photo"},{property:"accentColor",title:"Accent color",description:"Select the accent color use",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"dark",title:"Dark",description:"Use dark theme",inputMethod:"boolean",icon:"invert-colors"},{slot:"",title:"User's testimonial:",description:"This is where you enter your testimonial.",inputMethod:"code-editor",required:!0},{property:"name",title:"Full Name",description:"Credit the person making the testimonial",inputMethod:"textfield",icon:"account-circle"},{property:"position",title:"Position or Job Title",description:"List the position and job title",inputMethod:"textfield",icon:"icons:work"}],advanced:[]}}}}],(u=null)&&r(m.prototype,u),f&&r(m,f),d}();window.customElements.define(d.tag,d),e.PersonTestimonial=d,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=person-testimonial.umd.js.map
