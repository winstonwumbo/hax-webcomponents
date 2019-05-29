define(["exports","require","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@polymer/polymer/lib/utils/render-status.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js"],function(_exports,_require,_polymerElement,_renderStatus,_HAXWiring,_schemaBehaviors){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.MediaImage=void 0;_require=babelHelpers.interopRequireWildcard(_require);function _templateObject_1cd6367081c211e9853b1353b9bbc933(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n          font-family: \"Roboto\", sans-serif;\n          width: 100%;\n          --box-background-color: #f7f6ef;\n        }\n\n        :host([card]) {\n          box-shadow: 0 1px 5px rgba(0, 0, 0, 0.14);\n          padding: 20px;\n        }\n\n        :host([box]) {\n          background-color: var(--box-background-color);\n          padding: 20px;\n        }\n\n        :host([round]) iron-image {\n          border-radius: 50%;\n        }\n\n        @media screen and (min-width: 450px) {\n          :host([size=\"small\"]) {\n            max-width: 50%;\n          }\n        }\n\n        @media screen and (min-width: 650px) {\n          :host([size=\"small\"]) {\n            max-width: 35%;\n          }\n        }\n\n        @media screen and (min-width: 900px) {\n          :host([size=\"small\"]) {\n            max-width: 25%;\n          }\n        }\n\n        .citation {\n          font-size: 12.8px;\n          font-style: italic;\n          color: #4c4c4c;\n          margin: 15px 0 15px;\n        }\n\n        .caption {\n          padding-bottom: 25px;\n          border-bottom: dashed 2px lightgray;\n          margin-bottom: 25px;\n          line-height: 1.5;\n          font-size: 18px;\n        }\n\n        iron-image {\n          width: 100%;\n          --iron-image-width: 100%;\n        }\n      </style>\n\n      <iron-image\n        resource$=\"[[schemaResourceID]]-image\"\n        src$=\"[[source]]\"\n        alt$=\"[[alt]]\"\n      ></iron-image>\n      <div class=\"citation\">[[citation]]<slot name=\"citation\"></slot></div>\n      <div class=\"caption\">[[caption]]<slot name=\"caption\"></slot></div>\n    "],["\n      <style>\n        :host {\n          display: block;\n          font-family: \"Roboto\", sans-serif;\n          width: 100%;\n          --box-background-color: #f7f6ef;\n        }\n\n        :host([card]) {\n          box-shadow: 0 1px 5px rgba(0, 0, 0, 0.14);\n          padding: 20px;\n        }\n\n        :host([box]) {\n          background-color: var(--box-background-color);\n          padding: 20px;\n        }\n\n        :host([round]) iron-image {\n          border-radius: 50%;\n        }\n\n        @media screen and (min-width: 450px) {\n          :host([size=\"small\"]) {\n            max-width: 50%;\n          }\n        }\n\n        @media screen and (min-width: 650px) {\n          :host([size=\"small\"]) {\n            max-width: 35%;\n          }\n        }\n\n        @media screen and (min-width: 900px) {\n          :host([size=\"small\"]) {\n            max-width: 25%;\n          }\n        }\n\n        .citation {\n          font-size: 12.8px;\n          font-style: italic;\n          color: #4c4c4c;\n          margin: 15px 0 15px;\n        }\n\n        .caption {\n          padding-bottom: 25px;\n          border-bottom: dashed 2px lightgray;\n          margin-bottom: 25px;\n          line-height: 1.5;\n          font-size: 18px;\n        }\n\n        iron-image {\n          width: 100%;\n          --iron-image-width: 100%;\n        }\n      </style>\n\n      <iron-image\n        resource\\$=\"[[schemaResourceID]]-image\"\n        src\\$=\"[[source]]\"\n        alt\\$=\"[[alt]]\"\n      ></iron-image>\n      <div class=\"citation\">[[citation]]<slot name=\"citation\"></slot></div>\n      <div class=\"caption\">[[caption]]<slot name=\"caption\"></slot></div>\n    "]);_templateObject_1cd6367081c211e9853b1353b9bbc933=function _templateObject_1cd6367081c211e9853b1353b9bbc933(){return data};return data}/**
 * `media-image`
 * `A simple image presentaiton with minor documented options`
 * @demo demo/index.html
 */var MediaImage=/*#__PURE__*/function(_SchemaBehaviors){babelHelpers.inherits(MediaImage,_SchemaBehaviors);function MediaImage(){var _this;babelHelpers.classCallCheck(this,MediaImage);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(MediaImage).call(this));new Promise(function(res,rej){return _require.default(["./node_modules/@polymer/iron-image/iron-image.js"],res,rej)});new Promise(function(res,rej){return _require.default(["./node_modules/@polymer/iron-icons/iron-icons.js"],res,rej)});(0,_renderStatus.afterNextRender)(babelHelpers.assertThisInitialized(_this),function(){this.HAXWiring=new _HAXWiring.HAXWiring;this.HAXWiring.setup(MediaImage.haxProperties,MediaImage.tag,this)});return _this}babelHelpers.createClass(MediaImage,null,[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_1cd6367081c211e9853b1353b9bbc933())}},{key:"tag",get:function get(){return"media-image"}},{key:"properties",get:function get(){var props={/**
       * Image source.
       */source:{type:String,value:""},/**
       * Image citation.
       */citation:{type:String,value:""},/**
       * Image caption.
       */caption:{type:String,value:""},/**
       * Image alt.
       */alt:{type:String,value:""},/**
       * The size of the image (small, wide).
       */size:{type:String,value:"wide",reflectToAttribute:!0},/**
       * The shape of the image (round).
       */round:{type:Boolean,value:!1,reflectToAttribute:!0},/**
       * Applies card styling.
       */card:{type:Boolean,value:!1,reflectToAttribute:!0},/**
       * Applies box styling.
       */box:{type:Boolean,value:!1,reflectToAttribute:!0}};if(babelHelpers.get(babelHelpers.getPrototypeOf(MediaImage),"properties",this)){props=Object.assign(props,babelHelpers.get(babelHelpers.getPrototypeOf(MediaImage),"properties",this))}return props}},{key:"haxProperties",get:function get(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Styled image",descrption:"An image gizmo with the ability to provide simple, consistent styling and accessibility options.",icon:"editor:insert-photo",color:"indigo",groups:["Image","Media"],handles:[{type:"image",source:"source",title:"alt",alt:"alt",citation:"citation",caption:"caption"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"source",title:"Source",description:"The URL for the image.",inputMethod:"textfield",icon:"link",required:!0},{property:"alt",title:"Alternative text",description:"Text to describe the image to non-sighted users.",inputMethod:"alt",icon:"accessibility",required:!0}],configure:[{property:"source",title:"Source",description:"The URL for the image.",inputMethod:"haxupload",icon:"link",required:!0},{property:"caption",title:"Caption",description:"A caption to describe the image usage",inputMethod:"haxupload",icon:"av:call-to-action"},{property:"alt",title:"Alternative text",description:"Text to describe the image to non-sighted users.",inputMethod:"alt",icon:"accessibility",required:!0},{property:"round",title:"Round image",description:"Crops the image appearance to be circle in shape.",inputMethod:"boolean",icon:"account",required:!1},{property:"card",title:"Card",description:"Apply a drop shadow to give the appearance of being a raised card.",inputMethod:"boolean",icon:"check-box-outline-blank",required:!1},{property:"box",title:"Box",description:"Apply a visual box around the image.",inputMethod:"boolean",icon:"image:crop-square",required:!1}],advanced:[{property:"citation",title:"Citation",description:"Citation for the image.",inputMethod:"textfield",icon:"text-format",required:!1}]}}}}]);return MediaImage}((0,_schemaBehaviors.SchemaBehaviors)(_polymerElement.PolymerElement));_exports.MediaImage=MediaImage;window.customElements.define(MediaImage.tag,MediaImage)});