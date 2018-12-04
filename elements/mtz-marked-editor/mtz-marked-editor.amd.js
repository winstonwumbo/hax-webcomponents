define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js","./node_modules/@polymer/iron-form-element-behavior/iron-form-element-behavior.js","./node_modules/@polymer/iron-validatable-behavior/iron-validatable-behavior.js"],function(_exports,_polymerLegacy,_polymerDom,_ironFormElementBehavior,_ironValidatableBehavior){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.MtzMarkedEditor=void 0;function _templateObject_a37d5d20f77011e89983178fc401ba2f(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n\n    <slot name=\"controls\"></slot> <slot name=\"textarea\"></slot>\n    <slot name=\"footer\"></slot>\n  "]);_templateObject_a37d5d20f77011e89983178fc401ba2f=function _templateObject_a37d5d20f77011e89983178fc401ba2f(){return data};return data}var MtzMarkedEditor=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_a37d5d20f77011e89983178fc401ba2f()),is:"mtz-marked-editor",properties:{autofocus:Boolean,readonly:Boolean,textareaSelector:{type:String,value:"textarea"},__textarea:Object},ready:function ready(){this.__bindControlToEditor=this.__bindControlToEditor.bind(this)},attached:function attached(){this.addEventListener("register-control",this.__bindControlToEditor);this.__textarea=(0,_polymerDom.dom)(this).queryDistributedElements("[slot=\"textarea\"]")[0]},detached:function detached(){this.removeEventListener("register-control",this.__bindControlToEditor)},getTextarea:function getTextarea(){return this.__textarea},getLines:function getLines(){return this.getContent().split(/(?=\n|\r\n)$/gm)},getContent:function getContent(){if(babelHelpers.typeof(this.getTextarea())!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){return this.getTextarea().value}return""},setContent:function setContent(content){this.getTextarea().value=content},getSelection:function getSelection(){var textarea=0<arguments.length&&arguments[0]!==void 0?arguments[0]:this.getTextarea(),start=textarea.selectionStart,end=textarea.selectionEnd;return{start:start,end:end,length:end-start,text:textarea.value.substring(start,end)}},setSelection:function setSelection(start,end){var textarea=2<arguments.length&&arguments[2]!==void 0?arguments[2]:this.getTextarea();textarea.selectionStart=start;textarea.selectionEnd=end},replaceSelection:function replaceSelection(text){var textarea=1<arguments.length&&arguments[1]!==void 0?arguments[1]:this.getTextarea(),selection=2<arguments.length&&arguments[2]!==void 0?arguments[2]:this.getSelection(),val=textarea.value;textarea.value="".concat(val.substr(0,selection.start)).concat(text).concat(val.substr(selection.end,val.length))},__bindControlToEditor:function __bindControlToEditor(event){event.stopPropagation();(0,_polymerDom.dom)(event).rootTarget.__editor=this}});_exports.MtzMarkedEditor=MtzMarkedEditor});