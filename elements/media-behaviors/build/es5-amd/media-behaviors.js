define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.MediaBehaviors = void 0;
  function _templateObject_14e2c2d0d6ff11e881ade3c6812c15c3() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_14e2c2d0d6ff11e881ade3c6812c15c3 = function() {
      return data;
    };
    return data;
  }
  var MediaBehaviors = (function(_PolymerElement) {
    babelHelpers.inherits(MediaBehaviors, _PolymerElement);
    function MediaBehaviors() {
      babelHelpers.classCallCheck(this, MediaBehaviors);
      return babelHelpers.possibleConstructorReturn(
        this,
        (
          MediaBehaviors.__proto__ || Object.getPrototypeOf(MediaBehaviors)
        ).apply(this, arguments)
      );
    }
    babelHelpers.createClass(
      MediaBehaviors,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                MediaBehaviors.prototype.__proto__ ||
                  Object.getPrototypeOf(MediaBehaviors.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              MediaBehaviors.haxProperties,
              MediaBehaviors.tag,
              this
            );
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_14e2c2d0d6ff11e881ade3c6812c15c3()
            );
          }
        },
        {
          key: "haxProperties",
          get: function get() {
            return {
              canScale: !0,
              canPosition: !0,
              canEditSource: !1,
              gizmo: {
                title: "Media behaviors",
                description: "Automated conversion of media-behaviors/",
                icon: "icons:android",
                color: "green",
                groups: ["Behaviors"],
                handles: [{ type: "todo:read-the-docs-for-usage" }],
                meta: {
                  author: "btopro",
                  owner: "The Pennsylvania State University"
                }
              },
              settings: { quick: [], configure: [], advanced: [] }
            };
          }
        },
        {
          key: "properties",
          get: function get() {
            return {};
          }
        },
        {
          key: "tag",
          get: function get() {
            return "media-behaviors";
          }
        }
      ]
    );
    return MediaBehaviors;
  })(_polymerElement.PolymerElement);
  _exports.MediaBehaviors = MediaBehaviors;
  window.customElements.define(MediaBehaviors.tag, MediaBehaviors);
});
