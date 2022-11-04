!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("@polymer/polymer/polymer-element.js"),require("@polymer/polymer/lib/elements/dom-module.js"),require("@polymer/iron-flex-layout/iron-flex-layout-classes.js")):"function"==typeof define&&define.amd?define(["@polymer/polymer/polymer-element.js","@polymer/polymer/lib/elements/dom-module.js","@polymer/iron-flex-layout/iron-flex-layout-classes.js"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).polymerElement_js)}(this,(function(e){"use strict";var n,l,i,o=document.createElement("dom-module"),t=e.html(n||(l=['\n   <style include="iron-flex iron-flex-alignment">\n     /**\n      * Normalizes simple-icon and lrn-icon.\n      */\n     lrn-icon,\n     simple-icon,\n     simple-icon-lite {\n       --layout-inline: {\n         display: inline-flex;\n       }\n     }\n     /**\n      * Visible to screenreaders only.\n      */\n     .sr-only {\n       position: absolute;\n       left: -9999999px;\n       top: 0;\n       height: 0;\n       width: 0;\n       overflow: hidden;\n     }\n     /**\n     * Hide elements from all users.\n     *\n     * Used for elements which should not be immediately displayed to any user. An\n     * example would be a collapsible fieldset that will be expanded with a click\n     * from a user. The effect of this class can be toggled with the jQuery show()\n     * and hide() functions.\n     */\n     .element-hidden {\n       display: none;\n     }\n \n     /**\n     * Hide elements visually, but keep them available for screen-readers.\n     *\n     * Used for information required for screen-reader users to understand and use\n     * the site where visual display is undesirable. Information provided in this\n     * manner should be kept concise, to avoid unnecessary burden on the user.\n     * "!important" is used to prevent unintentional overrides.\n     */\n     .element-invisible {\n       position: absolute !important;\n       clip: rect(1px 1px 1px 1px); /* IE6, IE7 */\n       clip: rect(1px, 1px, 1px, 1px);\n       overflow: hidden;\n       height: 1px;\n     }\n \n     /**\n     * The .element-focusable class extends the .element-invisible class to allow\n     * the element to be focusable when navigated to via the keyboard.\n     */\n     .element-invisible.element-focusable:active,\n     .element-invisible.element-focusable:focus {\n       position: static !important;\n       clip: auto;\n       overflow: visible;\n       height: auto;\n     }\n     @media screen {\n       /**\n        * Visible only when printed. Invisible on screen.\n        */\n       .print-only {\n         display: none;\n       }\n     }\n     @media print {\n       /**\n        * Visible only on screen. Invisible when printed.\n        */\n       .screen-only {\n         display: none;\n       }\n     }\n   </style>\n '],i||(i=l.slice(0)),n=Object.freeze(Object.defineProperties(l,{raw:{value:Object.freeze(i)}}))));o.appendChild(t),o.register("lrn-shared-styles")}));
