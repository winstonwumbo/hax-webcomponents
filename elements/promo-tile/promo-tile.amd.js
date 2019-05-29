define(["exports","require","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@polymer/polymer/lib/utils/render-status.js","./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"],function(_exports,_require,_polymerElement,_renderStatus,_schemaBehaviors,_HAXWiring){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.PromoTile=void 0;_require=babelHelpers.interopRequireWildcard(_require);function _templateObject_4b1b754081c211e9af2059c6c8f1717e(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n          --tile-image: \"\";\n          --front-title-text-shadow: #363533;\n          --title-font-size: 34px;\n          --title-font-weight: 400;\n          --back-content-font-size: 18px;\n          --back-content-font-weight: 100;\n          --font-color: #fff;\n          --hover-background-color: #e2801e;\n          --button-hover-color: #363533;\n        }\n\n        a {\n          text-decoration: none;\n        }\n\n        #container {\n          width: 100%;\n          height: auto;\n        }\n\n        .back_card {\n          background-color: var(--hover-background-color);\n          height: 460px;\n          opacity: 0;\n          display: flex;\n          flex-direction: column;\n        }\n\n        :host([hover]) #container .back_card {\n          opacity: 0.9;\n          transition: all 0.3s ease-in-out;\n        }\n\n        :host([hover]) #container .front_card .front_title {\n          opacity: 0;\n          transition: all 0.3s ease-in-out;\n        }\n\n        .image {\n          display: flex;\n          justify-content: center;\n          background-image: var(--tile-image);\n          background-position: top center;\n          background-repeat: no-repeat;\n          background-size: cover;\n          width: 100%;\n          height: 100%;\n        }\n\n        .front_title {\n          opacity: 1;\n          position: absolute;\n          display: flex;\n          align-self: flex-end;\n          padding-bottom: 25px;\n        }\n\n        .front_title h1 {\n          color: var(--font-color);\n          font-size: var(--title-font-size);\n          font-weight: var(--title-font-weight);\n          text-shadow: 1px 1px 3px var(--front-title-text-shadow);\n        }\n\n        .back_title {\n          opacity: 1;\n          display: flex;\n          justify-content: center;\n          padding: 20px 0 0;\n        }\n\n        .back_title h1 {\n          color: var(--font-color);\n          font-size: var(--title-font-size);\n          font-weight: var(--title-font-weight);\n        }\n\n        .back_content {\n          color: var(--font-color);\n          font-size: var(--back-content-font-size);\n          font-weight: var(--back-content-font-weight);\n          padding: 0 20px;\n        }\n\n        paper-button#learn {\n          display: flex;\n          margin-top: 180px;\n          font-size: 16px;\n          color: var(--font-color);\n          border: solid 1px #fff;\n          border-radius: 0;\n          width: 50%;\n          margin-left: auto;\n          margin-right: auto;\n        }\n\n        paper-button#learn:hover,\n        paper-button#learn:focus {\n          background-color: var(--button-hover-color);\n        }\n      </style>\n\n      <div id=\"container\">\n        <div class=\"front_card\">\n          <div id=\"front_image\" class=\"image\" alt=\"[[alt]]\">\n            <div class=\"front_title\">\n              <h1>[[title]]</h1>\n            </div>\n            <div class=\"back_card\" id=\"cardBack\" on-click=\"activateBtn\">\n              <div class=\"back_title\">\n                <h1>[[title]]</h1>\n              </div>\n              <div class=\"back_content\">\n                <slot></slot>\n              </div>\n              <div class=\"learn_more\">\n                <a\n                  tabindex=\"-1\"\n                  href=\"[[url]]\"\n                  id=\"link\"\n                  target$=\"[[_urlTarget(url)]]\"\n                >\n                  <paper-button id=\"learn\" no-ink\n                    >[[label]]\n                    <iron-icon icon=\"chevron-right\"></iron-icon>\n                  </paper-button>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    "]);_templateObject_4b1b754081c211e9af2059c6c8f1717e=function _templateObject_4b1b754081c211e9af2059c6c8f1717e(){return data};return data}/**
 * `promo-tile`
 * @demo demo/index.html
 */var PromoTile=/*#__PURE__*/function(_SchemaBehaviors){babelHelpers.inherits(PromoTile,_SchemaBehaviors);function PromoTile(){var _this;babelHelpers.classCallCheck(this,PromoTile);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PromoTile).call(this));new Promise(function(res,rej){return _require.default(["./node_modules/@polymer/paper-button/paper-button.js"],res,rej)});new Promise(function(res,rej){return _require.default(["./node_modules/@polymer/iron-icon/iron-icon.js"],res,rej)});new Promise(function(res,rej){return _require.default(["./node_modules/@polymer/iron-icons/iron-icons.js"],res,rej)});(0,_renderStatus.afterNextRender)(babelHelpers.assertThisInitialized(_this),function(){this.HAXWiring=new _HAXWiring.HAXWiring;this.HAXWiring.setup(PromoTile.haxProperties,PromoTile.tag,this)});return _this}babelHelpers.createClass(PromoTile,[{key:"connectedCallback",/**
   * Attached to the DOM, now fire.
   */value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(PromoTile.prototype),"connectedCallback",this).call(this);(0,_renderStatus.afterNextRender)(this,function(){this.addEventListener("mouseover",this.__hoverIn.bind(this));this.addEventListener("mouseout",this.__hoverOut.bind(this));this.addEventListener("focusin",this.__hoverIn.bind(this));this.addEventListener("focusout",this.__hoverOut.bind(this))})}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.removeEventListener("mouseover",this.__hoverIn.bind(this));this.removeEventListener("mouseout",this.__hoverOut.bind(this));this.removeEventListener("focusin",this.__hoverIn.bind(this));this.removeEventListener("focusout",this.__hoverOut.bind(this));babelHelpers.get(babelHelpers.getPrototypeOf(PromoTile.prototype),"disconnectedCallback",this).call(this)}},{key:"__updateStyles",value:function __updateStyles(image){this.updateStyles({"--tile-image":"url(".concat(image,")")})}/**
   * Internal function to check if a url is external
   */},{key:"_outsideLink",value:function _outsideLink(url){if(0!=url.indexOf("http"))return!1;var loc=location.href,path=location.pathname,root=loc.substring(0,loc.indexOf(path));return 0!=url.indexOf(root)}/**
   * If url is external, open link in new window, otherwise open link in same window.
   */},{key:"_urlTarget",value:function _urlTarget(url){if(url){var external=this._outsideLink(url);if(external){return"_blank"}}return!1}},{key:"activateBtn",value:function activateBtn(){if(this.hover){var link=this.shadowRoot.querySelector("#link");if(700<window.innerWidth){link.click()}}}},{key:"__hoverIn",value:function __hoverIn(){this.hover=!0}},{key:"__hoverOut",value:function __hoverOut(){this.hover=!1}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_4b1b754081c211e9af2059c6c8f1717e())}},{key:"tag",get:function get(){return"promo-tile"}},{key:"properties",get:function get(){var props={/**
       * Image source
       */image:{type:String,value:"",reflectToAttribute:!0},/**
       * Alt text for image
       */alt:{type:String,value:"",reflectToAttribute:!0},/**
       * Label for button
       */label:{type:String,value:"",reflectToAttribute:!0},/**
       * Title of tile
       */title:{type:String,value:"",reflectToAttribute:!0},/**
       * Url for tile
       */url:{type:String,value:"",reflectToAttribute:!0},/**
       * Hover state
       */hover:{type:Boolean,value:!1,reflectToAttribute:!0}};if(babelHelpers.get(babelHelpers.getPrototypeOf(PromoTile),"properties",this)){props=Object.assign(props,babelHelpers.get(babelHelpers.getPrototypeOf(PromoTile),"properties",this))}return props}},{key:"observers",get:function get(){return["__updateStyles(image)"]}},{key:"haxProperties",get:function get(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Promo-Tile",description:"A tile element for promoting content.",icon:"icons:dashboard",color:"orange",groups:["Content","Media"],handles:[{type:"content",source:"image",title:"citation",url:"source"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"title",title:"Title",description:"The title of the tile",inputMethod:"textfield",icon:"editor:title"},{property:"image",title:"Image",description:"The image of the tile",inputMethod:"textfield",icon:"editor:insert-photo"},{property:"url",title:"Link",description:"The link of the tile",inputMethod:"textfield",icon:"editor:insert-link"}],configure:[{property:"title",title:"Title",description:"The title of the tile",inputMethod:"textfield",icon:"editor:title"},{property:"image",title:"Image",description:"The image of the tile",inputMethod:"textfield",icon:"editor:insert-photo"},{property:"alt",title:"Alt",description:"The alt text for the image",inputMethod:"textfield",icon:"editor:mode-edit"},{property:"url",title:"Link",description:"The link of the tile",inputMethod:"textfield",icon:"editor:insert-link"},{property:"label",title:"Label",description:"The label for the button",inputMethod:"textfield",icon:"editor:title"}],advanced:[]}}}}]);return PromoTile}((0,_schemaBehaviors.SchemaBehaviors)(_polymerElement.PolymerElement));_exports.PromoTile=PromoTile;window.customElements.define(PromoTile.tag,PromoTile)});