define(["exports","require","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@polymer/polymer/lib/utils/render-status.js"],function(_exports,_require,_polymerElement,_renderStatus){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.RandomImage=void 0;_require=babelHelpers.interopRequireWildcard(_require);function _templateObject_202f901081c111e9861f313666e24f38(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n        }\n        .is-circle {\n          border: 1px solid grey;\n          border-radius: 50%;\n          box-shadow: 0px 5px 10px #ccc;\n        }\n      </style>\n      <iron-image\n        style=\"width:200px; height:200px;\"\n        class$=\"[[mode]]\"\n        sizing=\"contain\"\n        src$=\"[[imgSrc]]\"\n        title$=\"[[imgTitle]]\"\n      ></iron-image>\n    "]);_templateObject_202f901081c111e9861f313666e24f38=function _templateObject_202f901081c111e9861f313666e24f38(){return data};return data}/**
`random-image`
Element to show random image from a given group.

* @demo demo/index.html
*/var RandomImage=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(RandomImage,_PolymerElement);function RandomImage(){var _this;babelHelpers.classCallCheck(this,RandomImage);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(RandomImage).call(this));new Promise(function(res,rej){return _require.default(["./node_modules/@polymer/iron-image/iron-image.js"],res,rej)});return _this}babelHelpers.createClass(RandomImage,[{key:"_pickRandomProperty",value:function _pickRandomProperty(obj){var result,count=0;for(var prop in obj){if(Math.random()<1/++count)result=prop}return result}},{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(RandomImage.prototype),"ready",this).call(this);var randomPos=this._pickRandomProperty(this.imagesList);this.imgSrc=this.imagesList[randomPos].path;this.imgTitle=this.imagesList[randomPos].title}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_202f901081c111e9861f313666e24f38())}},{key:"tag",get:function get(){return"random-image"}},{key:"properties",get:function get(){return{mode:{type:String,notify:!0,value:""},imgSrc:{type:String},imgTitle:{type:String},imagesList:{type:Object,notify:!0,// When initializing a property to an object or array value, use a function to ensure that each element
// gets its own copy of the value, rather than having an object or array shared across all instances of the element
value:function value(){return[]}}}}}]);return RandomImage}(_polymerElement.PolymerElement);_exports.RandomImage=RandomImage;window.customElements.define(RandomImage.tag,RandomImage)});