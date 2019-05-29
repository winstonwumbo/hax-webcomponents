!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/polymer/lib/utils/render-status.js"),require("@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js"),require("@lrnwebcomponents/chartist-render/chartist-render.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/polymer/lib/utils/render-status.js","@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@lrnwebcomponents/simple-colors/simple-colors.js","@lrnwebcomponents/chartist-render/chartist-render.js"],t):t((e=e||self).ProgressDonut={},e.polymerElement_js,e.renderStatus_js,e.HAXWiring_js,e.schemaBehaviors_js,e.simpleColors_js)}(this,function(e,t,n,r,i,o){"use strict";function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=a(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function h(){var e,t,n=(e=['\n      <style>\n        :host {\n          background-color: var(--simple-colors-background1, #ffffff);\n          overflow: visible;\n          display: block;\n        }\n        :host #wrapper {\n          margin: 0 auto;\n          position: relative;\n        }\n        :host #wrapper > * {\n          position: absolute;\n        }\n        :host #wrapper #chart {\n          left: 0;\n          top: 0;\n        }\n        :host #wrapper,\n        :host #wrapper #chart {\n          width: 250px;\n          height: 250px;\n        }\n        :host([size="xs"]) #wrapper,\n        :host([size="xs"]) #wrapper #chart {\n          width: 150px;\n          height: 150px;\n        }\n        :host([size="sm"]) #wrapper,\n        :host([size="sm"]) #wrapper #chart {\n          width: 200px;\n          height: 200px;\n        }\n        :host([size="lg"]) #wrapper,\n        :host([size="lg"]) #wrapper #chart {\n          width: 300px;\n          height: 300px;\n        }\n        :host([size="xl"]) #wrapper,\n        :host([size="xl"]) #wrapper #chart {\n          width: 400px;\n          height: 400px;\n        }\n        :host #wrapper > #image {\n          left: 20%;\n          top: 20%;\n          width: 60%;\n          height: 60%;\n          -webkit-clip-path: circle(50% at 50% 50%);\n          clip-path: circle(50% at 50% 50%);\n        }\n      </style>\n      <div id="wrapper">\n        <img\n          id="image"\n          alt$="[[imageAlt]]"\n          aria-hidden="true"\n          hidden$="[[!imageSrc]]"\n          src$="[[imageSrc]]"\n          style$="[[imageStyle]]"\n        />\n        <chartist-render\n          id="chart"\n          data$="[[data]]"\n          chart-desc$="[[desc]]"\n          chart-title="[[title]]"\n          scale="ct-square"\n          options$="[[options]]"\n          title$="[[title]]"\n          type="pie"\n        >\n        </chartist-render>\n      </div>\n    '],(t=['\n      <style>\n        :host {\n          background-color: var(--simple-colors-background1, #ffffff);\n          overflow: visible;\n          display: block;\n        }\n        :host #wrapper {\n          margin: 0 auto;\n          position: relative;\n        }\n        :host #wrapper > * {\n          position: absolute;\n        }\n        :host #wrapper #chart {\n          left: 0;\n          top: 0;\n        }\n        :host #wrapper,\n        :host #wrapper #chart {\n          width: 250px;\n          height: 250px;\n        }\n        :host([size="xs"]) #wrapper,\n        :host([size="xs"]) #wrapper #chart {\n          width: 150px;\n          height: 150px;\n        }\n        :host([size="sm"]) #wrapper,\n        :host([size="sm"]) #wrapper #chart {\n          width: 200px;\n          height: 200px;\n        }\n        :host([size="lg"]) #wrapper,\n        :host([size="lg"]) #wrapper #chart {\n          width: 300px;\n          height: 300px;\n        }\n        :host([size="xl"]) #wrapper,\n        :host([size="xl"]) #wrapper #chart {\n          width: 400px;\n          height: 400px;\n        }\n        :host #wrapper > #image {\n          left: 20%;\n          top: 20%;\n          width: 60%;\n          height: 60%;\n          -webkit-clip-path: circle(50% at 50% 50%);\n          clip-path: circle(50% at 50% 50%);\n        }\n      </style>\n      <div id="wrapper">\n        <img\n          id="image"\n          alt\\$="[[imageAlt]]"\n          aria-hidden="true"\n          hidden\\$="[[!imageSrc]]"\n          src\\$="[[imageSrc]]"\n          style\\$="[[imageStyle]]"\n        />\n        <chartist-render\n          id="chart"\n          data\\$="[[data]]"\n          chart-desc\\$="[[desc]]"\n          chart-title="[[title]]"\n          scale="ct-square"\n          options\\$="[[options]]"\n          title\\$="[[title]]"\n          type="pie"\n        >\n        </chartist-render>\n      </div>\n    '])||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return h=function(){return n},n}var u=function(e){function u(){var e,t,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),t=this,e=!(i=a(u).call(this))||"object"!=typeof i&&"function"!=typeof i?p(t):i,n.afterNextRender(p(e),function(){this.HAXWiring=new r.HAXWiring,this.HAXWiring.setup(u.haxProperties,u.tag,this)}),e}var d,f,g;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(u,i.SchemaBehaviors(t.PolymerElement)),d=u,g=[{key:"template",get:function(){return t.html(h())}},{key:"tag",get:function(){return"progress-donut"}},{key:"properties",get:function(){var e={complete:{type:Array,value:[]},donutThickness:{type:Number},colors:{type:Array,value:null},data:{type:Array,computed:"_getData(complete)"},desc:{type:String,value:null},options:{type:Array,computed:"_getOptions(complete,total,size,colors,accentColor,dark)"},imageSrc:{type:String,value:null,reflectToAttribute:!0},imageAlt:{type:String,value:null,reflectToAttribute:!0},imageStyle:{type:String,computed:"_getImageStyle(size)"},size:{type:String,value:"md",reflectToAttribute:!0},title:{type:String},accentColor:{type:String,value:"grey",reflectToAttribute:!0},total:{type:Number,value:100}};return c(a(u),"properties",this)&&(e=Object.assign(e,c(a(u),"properties",this))),e}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Sample gizmo",description:"The user will be able to see this for selection in a UI.",icon:"av:play-circle-filled",color:"grey",groups:["Video","Media"],handles:[{type:"video",url:"source"}],meta:{author:"Your organization on github"}},settings:{quick:[{property:"title",title:"Title",description:"The title of the element",inputMethod:"textfield",icon:"editor:title"}],configure:[{property:"title",title:"Title",description:"The title of the element",inputMethod:"textfield",icon:"editor:title"}],advanced:[]}}}}],(f=[{key:"connectedCallback",value:function(){c(a(u.prototype),"connectedCallback",this).call(this),n.afterNextRender(this,function(){this.addEventListener("chartist-render-draw",this._onCreated.bind(this))})}},{key:"disconnectedCallback",value:function(){this.removeEventListener("chartist-render-draw",this._onCreated.bind(this)),c(a(u.prototype),"disconnectedCallback",this).call(this)}},{key:"_getData",value:function(e){return{series:e}}},{key:"_getImageStyle",value:function(e){var t="22%",n="56%";return"xs"===this.size?(t="32%",n="36%"):"sm"===this.size?(t="26%",n="48%"):"lg"===this.size?(t="20%",n="60%"):"xl"===this.size&&(t="17%",n="66%"),"left: "+t+"; top: "+t+"; width: "+n+"; height: "+n+";"}},{key:"_getOptions",value:function(e,t,n,r,i,o){for(var s=0,a=0;a<e.length;a++)s+=parseFloat(e[a]);return{donut:!0,showLabel:!1,startAngle:0,total:Math.max(s,t)}}},{key:"_onCreated",value:function(e){this.__chart=e.detail,this.makeChart(this.__chart)}},{key:"makeChart",value:function(e){if(void 0!==e){var t=this.colors,n="10%",r=o.SimpleColors.colors,i=null!==this.accentColor?this.accentColor.replace(/-([a-z])/g,function(e){return e[1].toUpperCase()}):null;return null!=t&&0!==t.length||(t=null!==i&&null!==r[i]?this.dark?[r[i][9],r[i][6],r[i][3],r[i][7],r[i][4]]:[r[i][0],r[i][3],r[i][5],r[i][2],r[i][4]]:this.dark?[r.orange[6],r.pink[4],r.purple[5],r.cyan[6],r.lime[5]]:[r.pink[5],r.deepPurple[4],r.blue[3],r.teal[4],r.yellow[5]]),"xs"===this.size?n="8%":"sm"===this.size?n="9%":"lg"===this.size?n="11%":"xl"===this.size&&(n="12%"),e.on("draw",function(e){if(e.element._node.style.strokeWidth=n,e.element._node.style.stroke=t[e.index%t.length],"slice"===e.type){var r=e.element._node.getTotalLength();e.element.attr({"stroke-dasharray":r+"px "+r+"px"});var i={"stroke-dashoffset":{id:"anim"+e.index,dur:500,from:-r+"px",to:"0px",easing:Chartist.Svg.Easing.easeOutQuint,fill:"freeze"}};0!==e.index&&(i["stroke-dashoffset"].begin="anim"+(e.index-1)+".end"),e.element.attr({"stroke-dashoffset":-r+"px"}),e.element.animate(i,!1)}}),e}}}])&&s(d.prototype,f),g&&s(d,g),u}();window.customElements.define(u.tag,u),e.ProgressDonut=u,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=progress-donut.umd.js.map
