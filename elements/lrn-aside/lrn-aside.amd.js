define(["exports","require","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@polymer/polymer/lib/utils/render-status.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"],function(_exports,_require,_polymerElement,_renderStatus,_HAXWiring){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.LrnAside=void 0;_require=babelHelpers.interopRequireWildcard(_require);function _templateObject_70f1a04081c311e9a008a91e725ccefb(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: flex;\n          padding: 8px;\n        }\n        :host([sticky]) {\n          top: 0;\n          position: sticky;\n        }\n        :host([direction=\"left\"]) {\n          float: left;\n          max-width: 480px;\n        }\n        :host([direction=\"right\"]) {\n          float: right;\n          max-width: 480px;\n        }\n      </style>\n      <aside>\n        <lrndesign-panelcard title=\"[[title]]\">\n          <slot></slot>\n        </lrndesign-panelcard>\n      </aside>\n    "]);_templateObject_70f1a04081c311e9a008a91e725ccefb=function _templateObject_70f1a04081c311e9a008a91e725ccefb(){return data};return data}/**
 * `lrn-aside`
 * A content aside as a panel
 *
 * @demo demo/index.html
 */var LrnAside=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(LrnAside,_PolymerElement);function LrnAside(){var _this;babelHelpers.classCallCheck(this,LrnAside);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(LrnAside).call(this));new Promise(function(res,rej){return _require.default(["./node_modules/@lrnwebcomponents/lrndesign-panelcard/lrndesign-panelcard.js"],res,rej)});(0,_renderStatus.afterNextRender)(babelHelpers.assertThisInitialized(_this),function(){this.HAXWiring=new _HAXWiring.HAXWiring;this.HAXWiring.setup(LrnAside.haxProperties,LrnAside.tag,this)});return _this}babelHelpers.createClass(LrnAside,null,[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_70f1a04081c311e9a008a91e725ccefb())}},{key:"tag",get:function get(){return"lrn-aside"}},{key:"properties",get:function get(){return{/**
       * Title for the aside.
       */title:{type:String,value:"Related content"},/**
       * Apply CSS sticky styling
       */sticky:{type:Boolean,value:!1,reflectToAttribute:!0},/**
       * Direction to hang off UI if sticky, left or right.
       */direction:{type:String,value:"",reflectToAttribute:!0}}}/**
   * Attached to the DOM, now fire.
   */},{key:"haxProperties",get:function get(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Sticky note",description:"A sticky note to present some basic info offset on the page.",icon:"av:note",color:"yellow",groups:["Content"],handles:[{type:"text",title:"title"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"title",title:"Title",description:"Enter title for sticky note",inputMethod:"textfield",required:!0}],configure:[{property:"title",title:"Title",description:"Enter title for sticky note.",inputMethod:"textfield",required:!0},{slot:"",title:"Content",description:"Content of the sticky note",inputMethod:"code-editor",required:!0},{property:"sticky",title:"Stick to page on scroll",description:"Appear sticky when the user scrolls past it",inputMethod:"boolean"},{property:"direction",title:"Direction to hang",description:"Location of the sticky note to hang",inputMethod:"select",options:{"":"none",right:"Right",left:"Left"}}],advanced:[]}}}}]);return LrnAside}(_polymerElement.PolymerElement);_exports.LrnAside=LrnAside;window.customElements.define(LrnAside.tag,LrnAside)});