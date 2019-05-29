define(["exports","require","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@polymer/polymer/lib/utils/render-status.js","./node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js","./node_modules/@lrnwebcomponents/simple-modal/simple-modal.js"],function(_exports,_require,_polymerElement,_renderStatus,_flattenedNodesObserver,_HAXWiring,_schemaBehaviors,_simpleModal){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.LrnVocab=void 0;_require=babelHelpers.interopRequireWildcard(_require);function _templateObject_b8f3ebf081c311e99875818c0cef0f11(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: inline-flex;\n          --lrn-vocab-border: 1px dashed #ccc;\n        }\n        paper-button {\n          text-transform: none;\n          padding: 0;\n          margin: 0;\n          position: relative;\n          top: 0px;\n          border-radius: 0;\n          border-bottom: var(--lrn-vocab-border);\n          background: #f5f5f5;\n          @apply --lrn-vocab-button;\n        }\n        paper-button:hover {\n          background: #bbdefb;\n          border-bottom: 1px dashed #2196f3;\n          @apply --lrn-vocab-button-hover;\n        }\n      </style>\n      <paper-button id=\"button\" noink on-click=\"openDialog\"\n        >[[term]]</paper-button\n      >\n    "]);_templateObject_b8f3ebf081c311e99875818c0cef0f11=function _templateObject_b8f3ebf081c311e99875818c0cef0f11(){return data};return data}/**
`lrn-vocab`
Vocabulary term with visual treatment and semantic meaning.

* @demo demo/index.html
*/var LrnVocab=/*#__PURE__*/function(_SchemaBehaviors){babelHelpers.inherits(LrnVocab,_SchemaBehaviors);function LrnVocab(){var _this;babelHelpers.classCallCheck(this,LrnVocab);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(LrnVocab).call(this));new Promise(function(res,rej){return _require.default(["./node_modules/@polymer/paper-button/paper-button.js"],res,rej)});return _this}babelHelpers.createClass(LrnVocab,[{key:"openDialog",/**
   * Request the singleton dialog open
   */value:function openDialog(e){var children=_flattenedNodesObserver.FlattenedNodesObserver.getFlattenedNodes(this).filter(function(n){return n.nodeType===Node.ELEMENT_NODE}),c=document.createElement("div");for(var child in children){c.appendChild(children[child].cloneNode(!0))}var evt=new CustomEvent("simple-modal-show",{bubbles:!0,cancelable:!0,detail:{title:this.term,elements:{content:c},invokedBy:this.shadowRoot.querySelector("#button")}});window.dispatchEvent(evt)}/**
   * Attached life cycle
   */},{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(LrnVocab.prototype),"connectedCallback",this).call(this);(0,_renderStatus.afterNextRender)(this,function(){window.SimpleModal.requestAvailability();this.HAXWiring=new _HAXWiring.HAXWiring;this.HAXWiring.setup(LrnVocab.haxProperties,LrnVocab.tag,this)})}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_b8f3ebf081c311e99875818c0cef0f11())}},{key:"tag",get:function get(){return"lrn-vocab"}},{key:"properties",get:function get(){var props={/**
       * Term to highlight / display
       */term:{type:String,reflectToAttribute:!0}};if(babelHelpers.get(babelHelpers.getPrototypeOf(LrnVocab),"properties",this)){props=Object.assign(props,babelHelpers.get(babelHelpers.getPrototypeOf(LrnVocab),"properties",this))}return props}},{key:"haxProperties",get:function get(){return{canScale:!1,canPosition:!1,canEditSource:!1,gizmo:{title:"Vocab",description:"Vocabulary term",icon:"image:details",color:"red",groups:["Vocab"],handles:[{type:"inline",text:"term"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"term",title:"Term",description:"The word or words to make clickable for more detail.",inputMethod:"textfield",icon:"editor:title",required:!0}],configure:[{property:"term",title:"Term",description:"The word or words to make clickable for more detail.",inputMethod:"textfield",icon:"editor:title",required:!0},{slot:"",title:"Contents",description:"Contents to display in the pop up.",inputMethod:"code-editor",required:!0}],advanced:[]}}}}]);return LrnVocab}((0,_schemaBehaviors.SchemaBehaviors)(_polymerElement.PolymerElement));_exports.LrnVocab=LrnVocab;window.customElements.define(LrnVocab.tag,LrnVocab)});