!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit")):"function"==typeof define&&define.amd?define(["exports","lit"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).SimpleDatetime={},t.lit)}(this,(function(t,e){"use strict";function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}function o(t,e){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},o(t,e)}function i(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=r(t);if(e){var u=r(this).constructor;n=Reflect.construct(o,arguments,u)}else n=o.apply(this,arguments);return i(this,n)}}function a(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var s,f;(function(){Date.shortMonths=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Date.longMonths=["January","February","March","April","May","June","July","August","September","October","November","December"],Date.shortDays=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],Date.longDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];var t={d:function(){var t=this.getDate();return(t<10?"0":"")+t},D:function(){return Date.shortDays[this.getDay()]},j:function(){return this.getDate()},l:function(){return Date.longDays[this.getDay()]},N:function(){var t=this.getDay();return 0===t?7:t},S:function(){var t=this.getDate();return t%10==1&&11!==t?"st":t%10==2&&12!==t?"nd":t%10==3&&13!==t?"rd":"th"},w:function(){return this.getDay()},z:function(){var t=new Date(this.getFullYear(),0,1);return Math.ceil((this-t)/864e5)},W:function(){var t=new Date(this.valueOf()),e=(this.getDay()+6)%7;t.setDate(t.getDate()-e+3);var n=t.valueOf();t.setMonth(0,1),4!==t.getDay()&&t.setMonth(0,1+(4-t.getDay()+7)%7);var r=1+Math.ceil((n-t)/6048e5);return r<10?"0"+r:r},F:function(){return Date.longMonths[this.getMonth()]},m:function(){var t=this.getMonth();return(t<9?"0":"")+(t+1)},M:function(){return Date.shortMonths[this.getMonth()]},n:function(){return this.getMonth()+1},t:function(){var t=this.getFullYear(),e=this.getMonth()+1;return 12===e&&(t=t++,e=0),new Date(t,e,0).getDate()},L:function(){var t=this.getFullYear();return t%400==0||t%100!=0&&t%4==0},o:function(){var t=new Date(this.valueOf());return t.setDate(t.getDate()-(this.getDay()+6)%7+3),t.getFullYear()},Y:function(){return this.getFullYear()},y:function(){return(""+this.getFullYear()).substr(2)},a:function(){return this.getHours()<12?"am":"pm"},A:function(){return this.getHours()<12?"AM":"PM"},B:function(){return Math.floor(1e3*((this.getUTCHours()+1)%24+this.getUTCMinutes()/60+this.getUTCSeconds()/3600)/24)},g:function(){return this.getHours()%12||12},G:function(){return this.getHours()},h:function(){var t=this.getHours();return((t%12||12)<10?"0":"")+(t%12||12)},H:function(){var t=this.getHours();return(t<10?"0":"")+t},i:function(){var t=this.getMinutes();return(t<10?"0":"")+t},s:function(){var t=this.getSeconds();return(t<10?"0":"")+t},v:function(){var t=this.getMilliseconds();return(t<10?"00":t<100?"0":"")+t},e:function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},I:function(){for(var t=null,e=0;e<12;++e){var n=new Date(this.getFullYear(),e,1).getTimezoneOffset();if(null===t)t=n;else{if(n<t){t=n;break}if(n>t)break}}return this.getTimezoneOffset()===t|0},O:function(){var t=this.getTimezoneOffset();return(-t<0?"-":"+")+(Math.abs(t/60)<10?"0":"")+Math.floor(Math.abs(t/60))+(0===Math.abs(t%60)?"00":(Math.abs(t%60)<10?"0":"")+Math.abs(t%60))},P:function(){var t=this.getTimezoneOffset();return(-t<0?"-":"+")+(Math.abs(t/60)<10?"0":"")+Math.floor(Math.abs(t/60))+":"+(0===Math.abs(t%60)?"00":(Math.abs(t%60)<10?"0":"")+Math.abs(t%60))},T:function(){var t=this.toLocaleTimeString(navigator.language,{timeZoneName:"short"}).split(" ");return t[t.length-1]},Z:function(){return 60*-this.getTimezoneOffset()},c:function(){return this.format("Y-m-d\\TH:i:sP")},r:function(){return this.toString()},U:function(){return Math.floor(this.getTime()/1e3)}};Date.prototype.format=function(e){var n=this;return e.replace(/(\\?)(.)/g,(function(e,r,o){return""===r&&t[o]?t[o].call(n):o}))}}).call(void 0);var c=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&o(t,e)}(h,t);var r,i,c,l=u(h);function h(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,h),(t=l.call(this)).format="M jS, Y",t.unix=!1,t}return r=h,c=[{key:"styles",get:function(){return[e.css(f||(f=a(["\n        :host {\n          display: block;\n          font-size: 14px;\n          color: #b3b3b1;\n          line-height: 30px;\n        }\n      "])))]}},{key:"tag",get:function(){return"simple-datetime"}},{key:"properties",get:function(){return{timestamp:{type:Number},format:{type:String},date:{type:String},unix:{type:Boolean}}}}],(i=[{key:"render",value:function(){return e.html(s||(s=a([' <time datetime="','">',"</time> "])),this.date,this.date)}},{key:"updated",value:function(t){var e=this;t.forEach((function(t,n){["timestamp","format","unix"].includes(n)&&(e.date=e.formatDate(e.timestamp,e.format,e.unix))}))}},{key:"formatDate",value:function(t,e,n){return n&&(t*=1e3),new Date(t).format(e)}}])&&n(r.prototype,i),c&&n(r,c),Object.defineProperty(r,"prototype",{writable:!1}),h}(e.LitElement);customElements.define(c.tag,c),t.SimpleDatetime=c,Object.defineProperty(t,"__esModule",{value:!0})}));
