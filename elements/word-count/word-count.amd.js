define(["exports","./node_modules/lit-element/lit-element.js"],function(_exports,_litElement){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.WordCount=void 0;function _templateObject2_5266064081c111e9ab2259a090cadb48(){var data=babelHelpers.taggedTemplateLiteral(["\n        :host {\n          display: block;\n        }\n        :host:after {\n          content: attr(words-text);\n          position: var(--word-count-position, relative);\n          display: var(--word-count-display, flex);\n          flex-direction: var(--word-count-flex-direction, row-reverse);\n          margin: var(--word-count-margin, 12px);\n          font-size: var(--word-count-font-size, 10px);\n          transition: var(--word-count-transition, 0.3s font-size, color ease);\n          line-height: var(--word-count-line-height, 16px);\n          color: var(--word-count-color, #888888);\n        }\n        :host(:hover):after,\n        :host(:focus):after,\n        :host(:active):after {\n          font-size: var(--word-count-font-size-hover, 12px);\n          font-weight: var(--word-count-font-weight-hover, bold);\n          color: var(--word-count-color-hover, #000000);\n        }\n        .screen-reader-text {\n          border: 0;\n          clip: rect(1px, 1px, 1px, 1px);\n          clip-path: inset(50%);\n          height: 1px;\n          margin: -1px;\n          width: 1px;\n          overflow: hidden;\n          position: absolute !important;\n          word-wrap: normal !important;\n        }\n      "]);_templateObject2_5266064081c111e9ab2259a090cadb48=function _templateObject2_5266064081c111e9ab2259a090cadb48(){return data};return data}function _templateObject_5266064081c111e9ab2259a090cadb48(){var data=babelHelpers.taggedTemplateLiteral(["\n      <slot></slot>\n      <div class=\"screen-reader-text\">"," ","</div>\n    "]);_templateObject_5266064081c111e9ab2259a090cadb48=function _templateObject_5266064081c111e9ab2259a090cadb48(){return data};return data}/**
 * `word-count`
 * `Count the words on whatever this wraps`
 *
 * @demo demo/index.html
 */var WordCount=/*#__PURE__*/function(_LitElement){babelHelpers.inherits(WordCount,_LitElement);babelHelpers.createClass(WordCount,[{key:"render",value:function render(){return(0,_litElement.html)(_templateObject_5266064081c111e9ab2259a090cadb48(),this.wordsPrefix,this.words)}}],[{key:"styles",get:function get(){return[(0,_litElement.css)(_templateObject2_5266064081c111e9ab2259a090cadb48())]}},{key:"tag",get:function get(){return"word-count"}}]);function WordCount(){var _this;babelHelpers.classCallCheck(this,WordCount);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(WordCount).call(this));_this.wordsPrefix="Word count:";_this.__observer=new MutationObserver(_this._updateWords.bind(babelHelpers.assertThisInitialized(_this)));_this.__observer.observe(babelHelpers.assertThisInitialized(_this),{attributes:!0,characterData:!0,childList:!0,subtree:!0});return _this}babelHelpers.createClass(WordCount,[{key:"disconnectedCallback",value:function disconnectedCallback(){this.__observer.disconnect();babelHelpers.get(babelHelpers.getPrototypeOf(WordCount.prototype),"disconnectedCallback",this).call(this)}},{key:"update",value:function update(changedProperties){babelHelpers.get(babelHelpers.getPrototypeOf(WordCount.prototype),"update",this).call(this,changedProperties);if(changedProperties.has("wordsPrefix")||changedProperties.has("words")){this.setAttribute("words-text","".concat(this.wordsPrefix," ").concat(this.words))}}},{key:"_updateWords",/**
   * Update words based on data in the slot.
   */value:function _updateWords(mutations){if(""!==this.textContent){this.words=parseInt(this.textContent.split(/\s+/g).length-1)}else{this.words=0}}}],[{key:"properties",get:function get(){return{words:{type:Number},wordsPrefix:{type:String}}}}]);return WordCount}(_litElement.LitElement);_exports.WordCount=WordCount;window.customElements.define(WordCount.tag,WordCount)});