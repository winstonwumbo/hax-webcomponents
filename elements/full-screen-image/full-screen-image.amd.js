define(["exports","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","./node_modules/@polymer/paper-icon-button/paper-icon-button.js","./node_modules/@polymer/iron-icons/hardware-icons.js"],function(_exports,_polymerElement,_HAXWiring,_paperIconButton,_hardwareIcons){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.FullScreenImage=void 0;function _templateObject_a426859081c111e98b0a9fb752169ecb(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: block;\n  font-variant-ligatures: common-ligatures;\n}\n:host([hidden]) {\n  display: none;\n}\nh2 {\n  font-size: 4em;\n  font-weight: 200;\n  margin: 0px !important;\n  line-height: 1em;\n  text-transform: lowercase;\n  color: white;\n  letter-spacing: -0.04em;\n  font-family: \"Source Sans Pro\", Arial, Helvetica, sans-serif;\n}\np {\n  font-weight: 400;\n  color: white;\n  line-height: 1.0em;\n  font-family: \"Source Sans Pro\", Arial, Helvetica, sans-serif;\n  font-size: 1em;\n  letter-spacing: 0.01em;\n  margin-top: 0;\n  margin-bottom: 1em;\n}\nimg {\n  position: absolute;\n  margin: 0px;\n  padding: 0px;\n  border: none;\n  width: 1239px;\n  height: 774.375px;\n  max-width: none;\n  z-index: -999999;\n  left: 0px;\n  top: -57.1875px;\n}\npaper-icon-button {\n  width: 75px;\n  height: 45px;\n  line-height: 45px;\n  bottom: 1px;\n  right: 0px;\n  display: block;\n  position: absolute;\n  text-align: center;\n  color: white;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.fullpage-container {\n  display: block;\n}\n.image-wrapper {\n  left: 0px;\n  top: 0px;\n  bottom: 0px;\n  right: 0px;\n  overflow: hidden;\n  margin: 0px;\n  padding: 0px;\n  width: 100%;\n  z-index: -999998;\n  position: absolute;\n}\n.overlay-container {\n  display: block;\n  position: absolute;\n  text-align: right;\n  padding: 0.1em 1.5em 0.1em 6.0em;\n  bottom: 60px;\n  right: 0px;\n  background-color: rgba(191, 147, 45, 0.7)\n}</style>\n<div class=\"fullpage-container\">\n  <div class=\"overlay-container\">\n    <h2>[[title]]</h2>\n    <p>[[subtitle]]</p>\n  </div>\n  <paper-icon-button id=\"down\" icon=\"hardware:keyboard-arrow-down\"></paper-icon-button>\n  <div class=\"image-wrapper\">\n    <img id=\"img\" src=\"[[source]]\" />\n  </div>\n</div>"]);_templateObject_a426859081c111e98b0a9fb752169ecb=function _templateObject_a426859081c111e98b0a9fb752169ecb(){return data};return data}/**
 * `full-screen-image`
 * `full screen banner image with down arrow`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */var FullScreenImage=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(FullScreenImage,_PolymerElement);function FullScreenImage(){babelHelpers.classCallCheck(this,FullScreenImage);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(FullScreenImage).apply(this,arguments))}babelHelpers.createClass(FullScreenImage,[{key:"connectedCallback",/**
   * life cycle, element is afixed to the DOM
   */value:function connectedCallback(){var _this=this;babelHelpers.get(babelHelpers.getPrototypeOf(FullScreenImage.prototype),"connectedCallback",this).call(this);this.HAXWiring=new _HAXWiring.HAXWiring;this.HAXWiring.setup(FullScreenImage.haxProperties,FullScreenImage.tag,this);this.$.down.addEventListener("click",function(e){_this.nextElementSibling.scrollIntoView({block:"start",inline:"nearest",behavior:"smooth"})})}/**
   * life cycle, element is removed from the DOM
   */},{key:"disconnectedCallback",value:function disconnectedCallback(){var _this2=this;babelHelpers.get(babelHelpers.getPrototypeOf(FullScreenImage.prototype),"disconnectedCallback",this).call(this);this.$.down.removeEventListener("click",function(e){_this2.nextElementSibling.scrollIntoView({block:"start",inline:"nearest",behavior:"smooth"})})}}],[{key:"template",// render function
get:function get(){return(0,_polymerElement.html)(_templateObject_a426859081c111e98b0a9fb752169ecb())}// haxProperty definition
},{key:"haxProperties",get:function get(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Full screen-image",description:"full screen banner image with down arrow",icon:"icons:android",color:"green",groups:["Screen"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{quick:[{property:"source",description:"",inputMethod:"textfield",required:!0,icon:"icons:link",validationType:"url"}],configure:[{property:"title",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"},{property:"subtitle",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"},{property:"source",description:"",inputMethod:"textfield",required:!0,icon:"icons:link",validationType:"url"}],advanced:[]}}}// properties available to the custom element for data binding
},{key:"properties",get:function get(){return{title:{name:"title",type:"String",value:"",reflectToAttribute:!1,observer:!1},subtitle:{name:"subtitle",type:"String",value:"",reflectToAttribute:!1,observer:!1},source:{name:"source",type:"String",value:"",reflectToAttribute:!1,observer:!1}}}/**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */},{key:"tag",get:function get(){return"full-screen-image"}}]);return FullScreenImage}(_polymerElement.PolymerElement);_exports.FullScreenImage=FullScreenImage;window.customElements.define(FullScreenImage.tag,FullScreenImage)});