// Automaton v2.0.1 - MIT License
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Automaton = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),_clock=require("./clock"),_clock2=_interopRequireDefault(_clock);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var ClockFrame=function(e){function t(e,r){_classCallCheck(this,t);var o=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.frame=0,o.fps=r,o}return _inherits(t,_clock2.default),_createClass(t,[{key:"update",value:function(){this.isPlaying?(this.time=this.frame/this.fps,this.deltaTime=1/this.fps,this.frame++):this.deltaTime=0}}]),t}();exports.default=ClockFrame;

},{"./clock":3}],2:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),_clock=require("./clock"),_clock2=_interopRequireDefault(_clock);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var ClockRealtime=function(e){function t(e){_classCallCheck(this,t);var r=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.realtime=!0,r.rtTime=0,r.rtDate=+new Date,r}return _inherits(t,_clock2.default),_createClass(t,[{key:"update",value:function(){if(this.isPlaying){var e=this.time,t=Date.now()-this.rtDate;this.time=this.rtTime+t/1e3,this.deltaTime=this.time-e}else this.rtTime=this.time,this.rtDate=+new Date,this.deltaTime=0}},{key:"setTime",value:function(e){this.time=e,this.rtTime=this.time,this.rtDate=+new Date}}]),t}();exports.default=ClockRealtime;

},{"./clock":3}],3:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Clock=function(){function e(t){_classCallCheck(this,e),this.automaton=t,this.time=0,this.deltaTime=0,this.isPlaying=!0}return _createClass(e,[{key:"update",value:function(e){var t=this.time;this.time=e,this.deltaTime=this.time-t}},{key:"play",value:function(){this.isPlaying=!0}},{key:"pause",value:function(){this.isPlaying=!1}},{key:"setTime",value:function(e){this.time=e}}]),e}();exports.default=Clock;

},{}],4:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var NEWTON_ITER=4,NEWTON_EPSILON=.001,SUBDIV_ITER=10,SUBDIV_EPSILON=1e-6,TABLE_SIZE=21,tab=[],A=function(t,e){return 1-3*e+3*t},B=function(t,e){return 3*e-6*t},C=function(t){return 3*t},saturate=function(t){return Math.min(Math.max(t,0),1)},calc=function(t,e,r){return((A(e,r)*t+B(e,r))*t+C(e))*t},delta=function(t,e,r){return 3*A(e,r)*t*t+2*B(e,r)*t+C(e)},subdiv=function(t,e,r,a,u){for(var n=0,i=0,c=0;c<SUBDIV_ITER&&(0<(n=calc(i=e+(r-e)/2,a,u)-t)?r=i:e=i,!(SUBDIV_EPSILON<Math.abs(n)));c++);return i},newton=function(t,e,r,a){for(var u=0;u<NEWTON_ITER;u++){var n=delta(e,r,a);if(0===n)return e;e-=(calc(e,r,a)-t)/n}return e},rawCubicBezier=function(t,e,r,a,u){if(isNaN(t)||isNaN(e)||isNaN(r)||isNaN(a))return u;if(t===e&&r===a)return u;if(u<=0)return 0;if(1<=u)return 1;t=saturate(t),r=saturate(r);for(var n=0;n<TABLE_SIZE;n++)tab[n]=calc(n/(TABLE_SIZE-1),t,r);for(var i=1,c=1;c<TABLE_SIZE&&(i=c-1,!(u<tab[c]));c++);var E=(i+(u-tab[i])/(tab[i+1]-tab[i]))/(TABLE_SIZE-1),o=delta(E,t,r);return NEWTON_EPSILON<=o?E=newton(u,E,t,r):0!==o&&(E=subdiv(u,i/(TABLE_SIZE-1),(i+1)/(TABLE_SIZE-1),t,r)),calc(E,e,a)},cubicBezier=function(t,e,r){var a=e.time-t.time,u=e.value-t.value,n=t.out.time/a,i=t.out.value/u,c=(e.time+e.in.time-t.time)/a,E=(e.value+e.in.value-t.value)/u,o=(r-t.time)/a;return t.value+rawCubicBezier(n,i,c,E,o)*u};exports.default=cubicBezier;

},{}],5:[function(require,module,exports){
"use strict";var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}}(),_clock=require("./clock"),_clock2=_interopRequireDefault(_clock),_clockFrame=require("./clock-frame"),_clockFrame2=_interopRequireDefault(_clockFrame),_clockRealtime=require("./clock-realtime"),_clockRealtime2=_interopRequireDefault(_clockRealtime),_param=require("./param"),_param2=_interopRequireDefault(_param);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Automaton=function(){function e(t){var i=this;_classCallCheck(this,e),this.__version="2.0.1",this.loop=t.loop||!1,this.__clock=t.fps?new _clockFrame2.default(this,t.fps):t.realtime?new _clockRealtime2.default(this):new _clock2.default(this),this.__listeners={},this.__paramFxDefs={};var a=t.data;this.load(a),this.auto=function(e){return i.__auto(e)}}return _createClass(e,[{key:"createParam",value:function(e,t){this.__params[name]=new _param2.default({automaton:this,data:t})}},{key:"load",value:function(e){for(var t in this.__length=e.length,this.__resolution=e.resolution,this.__params={},e.params)this.createParam(t,e.params[t])}},{key:"seek",value:function(e){this.__clock.setTime(e),this.__emit("seek")}},{key:"play",value:function(){this.__clock.play(),this.__emit("play")}},{key:"pause",value:function(){this.__clock.pause(),this.__emit("pause")}},{key:"addFxDefinition",value:function(e,t){this.__paramFxDefs[e]=t,this.precalcAll()}},{key:"__emit",value:function(e){for(var t=arguments.length,i=Array(t>1?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];this.__listeners[e]&&this.__listeners[e].map(function(e){return e.apply(void 0,i)})}},{key:"on",value:function(e,t){this.__listeners[e]||(this.__listeners[e]=[]),this.__listeners[e].push(t)}},{key:"precalcAll",value:function(){for(var e in this.__params)this.__params[e].precalc()}},{key:"update",value:function(e){for(var t in this.__clock.update(e),this.loop&&(this.time<0||this.length<this.time)&&this.__clock.setTime(this.time-Math.floor(this.time/this.length)*this.length),this.__params)this.__params[t].getValue()}},{key:"__auto",value:function(e){return this.params[e].__currentValue}},{key:"version",get:function(){return this.__version}},{key:"time",get:function(){return this.__clock.time}},{key:"length",get:function(){return this.__length}},{key:"resolution",get:function(){return this.__resolution}},{key:"deltaTime",get:function(){return this.__clock.deltaTime}},{key:"isPlaying",get:function(){return this.__clock.isPlaying}},{key:"progress",get:function(){return this.time/this.length}},{key:"fps",get:function(){return this.__clock.fps?this.__clock.fps:0}},{key:"realtime",get:function(){return Boolean(this.__clock.realtime)}}]),e}();module.exports=Automaton,Automaton.default=Automaton;

},{"./clock":3,"./clock-frame":1,"./clock-realtime":2,"./param":6}],6:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}(),_cubicBezier=require("./cubic-bezier"),_cubicBezier2=_interopRequireDefault(_cubicBezier),_main=require("./main"),_main2=_interopRequireDefault(_main);function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Param=function(){function t(e){_classCallCheck(this,t),this.__automaton=e.automaton,this.__values=new Float32Array(this.__automaton.resolution*this.__automaton.length+1),this.load(e.data),this.__lastValue=0,this.__lastTime=0}return _createClass(t,[{key:"load",value:function(t){this.__nodes=t.nodes,this.__fxs=t.fxs,this.precalc()}},{key:"precalc",value:function(){for(var t=0;t<this.__nodes.length-1;t++){var e=this.__nodes[t],a=this.__nodes[t+1],i=Math.floor(e.time*this.__automaton.resolution),o=Math.floor(a.time*this.__automaton.resolution);this.__values[i]=e.value;for(var s=i+1;s<=o;s++){var n=s/this.__automaton.resolution,_=(0,_cubicBezier2.default)(e,a,n);this.__values[s]=_}}for(var r=0;r<this.__fxs.length;r++){var u=this.__fxs[r];if(!u.bypass){var l=this.__automaton.__paramFxDefs[u.def];if(l){for(var h=Math.ceil(this.__automaton.resolution*u.time),f=Math.floor(this.__automaton.resolution*(u.time+u.length)),m=new Float32Array(f-h),c=m.length,v={i0:h,i1:f,t0:u.time,t1:u.time+u.length,dt:1/this.__automaton.resolution,resolution:this.__automaton.resolution,length:u.length,params:u.params,array:this.__values,getValue:this.getValue.bind(this),init:!0},g=0;g<c;g++)v.i=g+h,v.t=v.i/this.__automaton.resolution,v.v=this.__values[g+h],v.progress=(v.t-u.time)/u.length,m[g]=l.func(v),v.init=!1;this.__values.set(m,h)}}}}},{key:"getValue",value:function(t){var e=t;if("number"!=typeof e&&(e=this.__automaton.time),e===this.__lastTime)return this.__lastValue;if(this.__automaton.loop&&(e-=Math.floor(e/this.__automaton.length)*this.__automaton.length),e<=0)return this.__values[0];if(this.__automaton.length<=e)return this.__values[this.__values.length-1];var a=e*this.__automaton.resolution,i=Math.floor(a),o=a%1,s=this.__values[i],n=s+(this.__values[i+1]-s)*o;return this.__lastTime=e,this.__lastValue=n,n}}]),t}();exports.default=Param;

},{"./cubic-bezier":4,"./main":5}]},{},[5])(5)
});
