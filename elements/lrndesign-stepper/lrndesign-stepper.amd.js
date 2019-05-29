define(["exports","require","./node_modules/@polymer/polymer/polymer-element.js"],function(_exports,_require,_polymerElement){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.LrndesignStepper=void 0;_require=babelHelpers.interopRequireWildcard(_require);function _templateObject_fe064b0081c011e9b4d9092663f6b17b(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n        }\n      </style>\n      <div class=\"buttons\"><slot id=\"stepper-children\"> </slot></div>\n    "]);_templateObject_fe064b0081c011e9b4d9092663f6b17b=function _templateObject_fe064b0081c011e9b4d9092663f6b17b(){return data};return data}/**
`lrndesign-stepper`
visualization of steps

* @demo demo/index.html
*/var LrndesignStepper=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(LrndesignStepper,_PolymerElement);function LrndesignStepper(){var _this;babelHelpers.classCallCheck(this,LrndesignStepper);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(LrndesignStepper).call(this));new Promise(function(res,rej){return _require.default(["./node_modules/@lrnwebcomponents/lrndesign-stepper/lib/lrndesign-stepper-button.js"],res,rej)});return _this}babelHelpers.createClass(LrndesignStepper,[{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(LrndesignStepper.prototype),"ready",this).call(this);var root=this,children=root.getContentChildren("#stepper-children");if(1<children.length){children.forEach(function(child,index){if(0===index){child.setAttribute("location","start")}else if(index===children.length-1){child.setAttribute("location","end")}else{child.setAttribute("location","middle")}console.log(child,index)})}}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_fe064b0081c011e9b4d9092663f6b17b())}},{key:"tag",get:function get(){return"lrndesign-stepper"}}]);return LrndesignStepper}(_polymerElement.PolymerElement);_exports.LrndesignStepper=LrndesignStepper;window.customElements.define(LrndesignStepper.tag,LrndesignStepper)});