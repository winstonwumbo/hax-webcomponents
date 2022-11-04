!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/schema-behaviors/schema-behaviors.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).LicenseElement={},e.lit,e.schemaBehaviors_js)}(this,(function(e,t,n){"use strict";function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function l(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}function f(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return f(this,n)}}function d(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var i=d(e,t);if(i){var r=Object.getOwnPropertyDescriptor(i,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},m.apply(this,arguments)}function y(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var b,g,v,k,O=l((function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"full";c(this,e);var n={by:{name:"Attribution",link:"https://creativecommons.org/licenses/by/4.0/",image:"https://i.creativecommons.org/l/by/4.0/88x31.png"},"by-sa":{name:"Attribution Share a like",link:"https://creativecommons.org/licenses/by-sa/4.0/",image:"https://i.creativecommons.org/l/by-sa/4.0/88x31.png"},"by-nd":{name:"Attribution No derivatives",link:"https://creativecommons.org/licenses/by-nd/4.0/",image:"https://i.creativecommons.org/l/by-nd/4.0/88x31.png"},"by-nc":{name:"Attribution non-commercial",link:"https://creativecommons.org/licenses/by-nc/4.0/",image:"https://i.creativecommons.org/l/by-nc/4.0/88x31.png"},"by-nc-sa":{name:"Attribution non-commercial share a like",link:"https://creativecommons.org/licenses/by-nc-sa/4.0/",image:"https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"},"by-nc-nd":{name:"Attribution Non-commercial No derivatives",link:"https://creativecommons.org/licenses/by-nc-nd/4.0/",image:"https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png"}};if("select"==t){var i={};for(var r in n)i[r]=n[r].name;return i}return n})),w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(i,e);var n=h(i);function i(){var e;return c(this,i),(e=n.call(this)).licenseList=new O,e.moreLabel="on the licensing details page",e}return l(i,[{key:"render",value:function(){return t.html(b||(b=y(['\n      <meta\n        rel="cc:license"\n        href="','"\n        content="License: ','"\n      />\n      <div\n        class="license-body"\n        xmlns:cc="','"\n        xmlns:dc="http://purl.org/dc/elements/1.1/"\n      >\n        ','\n        <span\n          class="work-title"\n          rel="dc:type"\n          href="http://purl.org/dc/dcmitype/Text"\n          property="dc:title"\n          >','</span\n        >\n        by\n        <a\n          rel="cc:attributionURL"\n          property="cc:attributionName"\n          href="','"\n          >','</a\n        >\n        is licensed under a\n        <a class="license-link" target="_blank" href="','"\n          >','</a\n        >. <span rel="dc:source" href="','"></span>\n        ',"\n      </div>\n    "])),this.licenseLink,this.licenseName,this.licenseLink,this.licenseImage?t.html(g||(g=y(['\n              <a\n                class="big-license-link"\n                target="_blank"\n                href="','"\n                rel="noopener noreferrer"\n                ><img\n                  loading="lazy"\n                  alt="',' graphic"\n                  src="','"\n              /></a>\n            '])),this.licenseLink,this.licenseName,this.licenseImage):"",this.title,this.source,this.creator,this.licenseLink,this.licenseName,this.source,this.hasMore?t.html(v||(v=y(['\n              <span\n                >Permissions beyond the scope of this license are available\n                <a\n                  rel="cc:morePermissions"\n                  target="_blank"\n                  href="','"\n                  rel="noopener noreferrer"\n                  >',"</a\n                >.</span\n              >\n            "])),this.moreLink,this.moreLabel):"")}},{key:"updated",value:function(e){var t=this;e.forEach((function(e,n){"license"==n&&t._licenseUpdated(t[n]),"moreLink"==n&&(t.hasMode=t._computeHasMore(t.moreLink))}))}},{key:"_computeHasMore",value:function(e){return"undefined"!==o(e)&&""!==e}},{key:"_licenseUpdated",value:function(e){"undefined"!==o(e)&&"undefined"!==o(this.licenseList[e])&&(this.licenseName=this.licenseList[e].name,this.licenseLink=this.licenseList[e].link,this.licenseImage=this.licenseList[e].image)}}],[{key:"styles",get:function(){return[t.css(k||(k=y(['\n        :host {\n          display: block;\n          font-size: 16px;\n          line-height: 32px;\n          --license-text-color: #222222;\n          --license-background-color: #f2f2f2;\n          background-color: var(--license-background-color);\n        }\n        :host:after {\n          content: "License";\n          position: relative;\n          float: right;\n          bottom: 36px;\n          right: 8px;\n          font-size: 28px;\n          color: #dddddd;\n          font-style: italic;\n        }\n        .license-body {\n          padding: 32px;\n          font-style: italic;\n          background-color: var(--license-background-color);\n          color: var(--license-text-color);\n        }\n\n        :host([display-method="footnote"]) {\n          visibility: hidden;\n          opacity: 0;\n        }\n        :host([display-method="popup"]) {\n          display: block;\n        }\n        .license-link {\n          font-style: italic;\n        }\n        .big-license-link img {\n          margin-right: 8px;\n          margin-bottom: 8px;\n          width: 88px;\n          height: 31px;\n          vertical-align: middle;\n        }\n        .work-title {\n          font-weight: bold;\n        }\n      '])))]}},{key:"tag",get:function(){return"license-element"}},{key:"properties",get:function(){return r(r({},m(p(i),"properties",this)),{},{title:{type:String},creator:{type:String},source:{type:String},licenseName:{type:String,attribute:"license-name"},licenseImage:{type:String,attribute:"license-image"},licenseLink:{type:String,attribute:"license-link"},license:{type:String},moreLabel:{type:String,attribute:"more-label"},moreLink:{type:String,attribute:"more-link"},hasMore:{type:Boolean,attribute:"has-more"}})}},{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!1,canEditSource:!0,gizmo:{title:"License",description:"Provide a license for you rwork",icon:"icons:copyright",color:"grey",groups:["Content","Copyright"],handles:[{type:"license",source:"source",title:"title",author:"creator",license:"license"}],meta:{author:"ELMS:LN"}},settings:{configure:[{property:"title",title:"Title",description:"The title of the work being cited.",inputMethod:"textfield",icon:"editor:title"},{property:"source",title:"Source link",description:"The source url for the element this is citing.",inputMethod:"textfield",icon:"link",validationType:"url"},{property:"license",title:"License",description:"The source url for the element this is citing.",inputMethod:"select",options:new O("select"),icon:"link"},{property:"creator",title:"Creator",description:"Who made or owns this.",inputMethod:"textfield",icon:"link"}],advanced:[{property:"moreLink",title:"Source link",description:"Link to additional licensing details",inputMethod:"textfield",validationType:"url"},{property:"moreLabel",title:"more label",description:"Label for more licensing details",inputMethod:"textfield"}]},demoSchema:[{tag:"license-element",properties:{title:"Wonderland",creator:"Mad Hatter",source:"https://haxtheweb.org/",license:"by"},content:""}]}}}]),i}(n.SchemaBehaviors(t.LitElement));customElements.define(w.tag,w),e.LicenseElement=w,e.licenseList=O,Object.defineProperty(e,"__esModule",{value:!0})}));
