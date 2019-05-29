!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@polymer/polymer/polymer-element.js"),require("@lrnwebcomponents/haxcms-elements/lib/core/HAXCMSThemeWiring.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@lrnwebcomponents/haxcms-elements/lib/core/HAXCMSThemeWiring.js","@lrnwebcomponents/simple-colors/simple-colors.js"],e):e((n=n||self).LearnTwoTheme={},n.polymerElement_js,n.HAXCMSThemeWiring_js)}(this,function(n,e,t){"use strict";function o(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function i(n,e,t){return e&&o(n.prototype,e),t&&o(n,t),n}function r(n){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function a(n,e){return(a=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function s(n,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function l(n,e,t){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(n,e,t){var o=function(n,e){for(;!Object.prototype.hasOwnProperty.call(n,e)&&null!==(n=r(n)););return n}(n,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(t):i.value}})(n,e,t||n)}function p(){var n,e,t=(n=['\n<style>:host {\n  display: block;\n  font-family: "Muli","Helvetica","Tahoma","Geneva","Arial",sans-serif;\n  letter-spacing: -.03rem;\n  font-weight:400;\n  background: #FAFAFA;\n}\nh1,h2,h3,h4,h5,h6 {\n  font-family:"Montserrat","Helvetica","Tahoma","Geneva","Arial",sans-serif;\n  font-weight:400;\n  text-rendering:optimizeLegibility;\n  line-height:150%;\n  letter-spacing:0\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n:host([edit-mode]) #slot {\n  display: none;\n}\n\n#contentcontainer {\n  background: #FAFAFA;\n  padding: 48px 96px;\n}\n\n.header {\n  background: #747474;\n  color: #FAFAFA;\n  text-align: center;\n  padding: 0rem 1rem 2rem 1rem;\n}\n\nsite-active-title {\n  --site-active-title-heading: {\n    font-family: "Montserrat", "Helvetica", "Tahoma", "Geneva", "Arial", sans-serif;\n    font-size: 52px;\n    letter-spacing: -3px;\n    line-height: 78px;\n    margin-bottom: 27.2px;\n    margin-top: 13.6px;\n    text-align: center;\n    text-rendering: optimizelegibility;\n    font-weight: 100;\n  };\n}\nsite-title {\n  position: relative;\n  overflow: hidden;\n  --site-title-link: {\n    display: inline-block;\n    color: #FAFAFA;\n    text-decoration: none;\n  };\n  --site-title-heading: {\n    font-family: "Montserrat", "Helvetica", "Tahoma", "Geneva", "Arial", sans-serif;\n    font-size: 28px;\n    margin: 0;\n    padding: 0;\n    letter-spacing: -3px;\n    line-height: 78px;\n    text-align: center;\n    text-rendering: optimizelegibility;\n    font-weight: 100;\n  };\n}\nsite-menu {\n  background-color: #383F45;\n  color: #FFFFFF;\n  padding: 0;\n  overflow: scroll;\n  max-height: calc(100vh - 200px);\n  --site-menu-active-color: #FFFFFF;\n  --site-menu: {\n    background-color: #383F45;\n    color: #FFFFFF;\n  }\n  --site-menu-container: {\n    padding: 0;\n    background-color: #2d3237;\n  }\n  --site-menu-item-active-item: {\n    color: #2d3237;\n  }\n}\n\nsite-menu::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 4px rgba(56, 63, 69, 0.9);\n  border-radius: 0;\n  background-color: #383F45;\n}\nsite-menu::-webkit-scrollbar {\n  width: 2px;\n  background-color: #383F45;\n}\nsite-menu::-webkit-scrollbar-thumb {\n  border-radius: 1px;\n  -webkit-box-shadow: inset 0 0 4px #747474;\n  background-color: #383F45;\n}\napp-drawer-layout {\n  min-height: 100vh;\n  min-height: -moz-available; \n  min-height: -webkit-fill-available; \n  min-height: fill-available;\n  --app-drawer-width: 300px;\n  --app-drawer-scrim-background: rgba(80, 80, 80, 0.8);\n  --app-drawer-width: 300px;\n  --app-drawer-content-container: {\n    overflow: hidden;\n    background-color: #383F45;\n  }\n}\n.rss-buttons {\n  justify-content: space-evenly;\n  display: flex;\n}\nsite-print-button {\n  --site-print-button-button: {\n    color: white;\n  }\n}\n\napp-drawer {\n  box-shadow: 0 0 6px -3px var(--haxcms-color, black);\n  overflow: hidden;\n  width: 300px;\n}\napp-drawer-layout[narrow] #contentcontainer {\n  padding: 0 16px;\n}\n#menubutton,#menubutton2 {\n  display: none;\n}\napp-drawer-layout[narrow] #menubutton {\n  display: block;\n}\napp-drawer-layout[narrow] #menubutton2 {\n  display: block;\n  position: absolute;\n  z-index: 1;\n}\napp-drawer-layout[narrow] .header {\n  padding: 0;\n}\nsite-menu-button {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 300px;\n  --site-menu-button-icon: {\n    width: 64px;\n    height: 64px;\n    color: #2d3237;\n  };\n  --site-menu-button-button: {\n    background-color: rgba(0,0,0,0);\n    width: 64px;\n    height: 100vh;\n    border-radius: 0;\n    transition: .4s all ease-in-out;\n    transition-delay: .2s;\n    margin: 0;\n    padding: 0;\n    opacity: .8;\n    -webkit-transition: .4s all ease-in-out;\n    -moz-transition: .4s all ease-in-out;\n    -ms-transition: .4s all ease-in-out;\n    -o-transition: .4s all ease-in-out;\n  };\n}\nsite-menu-button:not([disabled]):hover,\nsite-menu-button:not([disabled]):active,\nsite-menu-button:not([disabled]):focus {\n  opacity: 1;\n  background-color: rgba(0,0,0,.1);\n}\napp-drawer-layout[narrow] site-menu {\n  max-height: calc(100vh - 160px);\n}\napp-drawer-layout[narrow] site-menu-button {\n  bottom: 0;\n  top: unset;\n  --site-menu-button-button: {\n    background-color: transparent !important;\n    width: 64px;\n    height: 64px;\n  };\n}\nsite-menu-button[type="next"] {\n  right: 0;\n  left: unset;\n}\napp-drawer-layout[narrow] site-menu-button[type="prev"] {\n  left: unset;\n}\n:host([opened]) app-drawer-layout[narrow] site-menu-button[type="prev"],\n:host([opened]) app-drawer-layout[narrow] site-menu-button[type="next"] {\n  display: none;\n}</style>\n<style>\n  html,body {\n    background-color: #FAFAFA;\n  }\n  </style>\n\n<app-drawer-layout>\n  <paper-icon-button id="menubutton" icon="menu" on-click="toggleDrawer"></paper-icon-button>\n  <app-drawer swipe-open slot="drawer" opened="{{opened}}">\n    <paper-icon-button id="menubutton2" icon="menu" on-click="toggleDrawer"></paper-icon-button>\n    <div class="header-wrapper">\n      <div class="header">\n        <site-title></site-title>\n        <site-modal icon="icons:search" title="Search site" button-label="Search">\n          <site-search></site-search>\n        </site-modal>\n      </div>\n    </div>\n    <site-menu></site-menu>\n    <div class="rss-buttons">\n      <site-rss-button type="atom"></site-rss-button>\n      <site-rss-button type="rss"></site-rss-button>\n      <site-print-button position="top"></site-print-button>\n    </div>\n  </app-drawer>\n  <div>\n    <site-menu-button type="prev"></site-menu-button>\n    <div id="contentcontainer">\n      <site-breadcrumb></site-breadcrumb>\n      <site-active-title></site-active-title>\n      <div id="slot">\n        <slot></slot>\n      </div>\n    </div>\n    <site-menu-button type="next"></site-menu-button>\n  </div>\n</app-drawer-layout>'],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return p=function(){return t},t}var u=function(n){function o(){var n;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),n=s(this,r(o).call(this)),import("@polymer/app-layout/app-drawer/app-drawer.js"),import("@polymer/app-layout/app-drawer-layout/app-drawer-layout.js"),import("@polymer/paper-icon-button/paper-icon-button.js"),import("@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-breadcrumb.js"),import("@lrnwebcomponents/haxcms-elements/lib/ui-components/active-item/site-active-title.js"),import("@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-title.js"),import("@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-rss-button.js"),import("@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-print-button.js"),import("@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-menu.js"),import("@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-menu-button.js"),import("@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-search.js"),import("@lrnwebcomponents/haxcms-elements/lib/ui-components/layout/site-modal.js"),n}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&a(n,e)}(o,t.HAXCMSTheme(e.PolymerElement)),i(o,null,[{key:"template",get:function(){return e.html(p())}},{key:"properties",get:function(){return{}}}]),i(o,[{key:"toggleDrawer",value:function(n){this.shadowRoot.querySelector("app-drawer").toggle()}}],[{key:"tag",get:function(){return"learn-two-theme"}},{key:"properties",get:function(){var n=l(r(o),"properties",this);return n.opened={type:Boolean,reflectToAttribute:!0},n}}]),o}();window.customElements.define(u.tag,u),n.LearnTwoTheme=u,Object.defineProperty(n,"__esModule",{value:!0})});
//# sourceMappingURL=learn-two-theme.umd.js.map
