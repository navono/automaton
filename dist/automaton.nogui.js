// Automaton v1.1.3 - MIT License
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Automaton = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),_clock=require("./clock"),_clock2=_interopRequireDefault(_clock);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var AutomatonClockFrame=function(e){function t(e,r){_classCallCheck(this,t);var o=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.frame=0,o.fps=r,o}return _inherits(t,_clock2.default),_createClass(t,[{key:"update",value:function(){this.isPlaying?(this.frame++,this.time=this.frame/this.fps,this.deltaTime=1/this.fps):this.deltaTime=0}}]),t}();exports.default=AutomatonClockFrame;

},{"./clock":3}],2:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),_clock=require("./clock"),_clock2=_interopRequireDefault(_clock);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var AutomatonClockRealtime=function(e){function t(e){_classCallCheck(this,t);var r=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.rtTime=0,r.rtDate=+new Date,r}return _inherits(t,_clock2.default),_createClass(t,[{key:"update",value:function(){if(this.isPlaying){var e=this.time,t=Date.now()-this.rtDate;this.time=this.rtTime+t/1e3,this.deltaTime=this.time-e}else this.rtTime=this.time,this.rtDate=+new Date,this.deltaTime=0}},{key:"setTime",value:function(e){this.time=e,this.rtTime=this.time,this.rtDate=+new Date}}]),t}();exports.default=AutomatonClockRealtime;

},{"./clock":3}],3:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var AutomatonClock=function(){function e(t){_classCallCheck(this,e),this.automaton=t,this.time=0,this.deltaTime=0,this.isPlaying=!0}return _createClass(e,[{key:"update",value:function(e){var t=this.time;this.time=e,this.deltaTime=this.time-t}},{key:"play",value:function(){this.isPlaying=!0}},{key:"pause",value:function(){this.isPlaying=!1}},{key:"setTime",value:function(e){this.time=e}}]),e}();exports.default=AutomatonClock;

},{}],4:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_noise=require("./noise"),_noise2=_interopRequireDefault(_noise);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var cloneObj=function(e){var r={};for(var o in e)r[o]=e[o];return r},def=function(e,r){return"number"==typeof e?e:r},Interpolator={MODE_HOLD:0,MODE_LINEAR:1,MODE_SMOOTH:2,MODE_EXP:3,MODE_SPRING:4,MODE_GRAVITY:5,MODES:6,modeNames:["Hold","Linear","Smoothstep","Exp. Smooth","Critically Damped Spring","Gravity and Bounce"],MOD_RESET:0,MOD_SIN:1,MOD_NOISE:2,MOD_LOFI:3,MODS:4,modNames:["Reset","Sine Curve","Perlin Noise","Lo-Fi"],generate:function(e){for(var r="object"===(void 0===e?"undefined":_typeof(e))?e:{},o=def(r.mode,Interpolator.MODE_LINEAR),t=def(r.start,0),n=def(r.end,1),a=def(r.length,32),f=def(r.deltaTime,.01),l="object"===_typeof(r.mods)?cloneObj(r.mods):[],O=0;O<Interpolator.MODS;O++)l[O]=!!l[O]&&l[O];var i=[t];if(o===Interpolator.MODE_HOLD){for(var p=1;p<a;p++)i[p]=t;i[a-1]=n}else if(o===Interpolator.MODE_LINEAR)for(var I=1;I<a;I++){var d=I/(a-1);i[I]=t+(n-t)*d}else if(o===Interpolator.MODE_SMOOTH)for(var M=1;M<a;M++){var _=M/(a-1),s=_*_*(3-2*_);i[M]=t+(n-t)*s}else if(o===Interpolator.MODE_EXP)for(var D=def(r.factor,10),u=1;u<a;u++){var E=u*f,S=1-Math.exp(-D*E);i[u]=t+(n-t)*S}else if(o===Interpolator.MODE_SPRING)for(var v=def(r.rate,500),c=def(r.damp,1),m=def(r.vel,0),y=t,N=1;N<a;N++)y+=(m+=(-v*(y-n)-2*m*Math.sqrt(v)*c)*f)*f,i[N]=y;else if(o===Interpolator.MODE_GRAVITY)for(var b=def(r.gravity,70),h=def(r.bounce,.3),R=def(r.vel,0),L=Math.sign(n-t),q=t,g=1;g<a;g++)q+=(R+=b*L*f)*f,L!==Math.sign(n-q)&&(q=n+(n-q)*h,R*=-h),i[g]=q;if(l[Interpolator.MOD_SIN])for(var P=def(l[Interpolator.MOD_SIN].freq,2),T=def(l[Interpolator.MOD_SIN].amp,.5),j=def(l[Interpolator.MOD_SIN].phase,0),A=0;A<a;A++)i[A]+=Math.sin(j*Math.PI*2)*T,j=(j+1/(a-1)*P)%1;if(l[Interpolator.MOD_NOISE])for(var G=def(l[Interpolator.MOD_NOISE].amp,1),H=(0,_noise2.default)({length:a,recursion:def(l[Interpolator.MOD_NOISE].recursion,3),freq:def(l[Interpolator.MOD_NOISE].freq,1)*a/(a-1),reso:def(l[Interpolator.MOD_NOISE].reso,4),seed:def(l[Interpolator.MOD_NOISE].seed,175)}),x=0;x<a;x++)i[x]+=H[x]*G;if(l[Interpolator.MOD_LOFI])for(var F=(a-1)/def(l[Interpolator.MOD_LOFI].freq,4),C=0;C<a;C++)i[C]=i[Math.ceil(Math.floor(C/F)*F)];return i}};exports.default=Interpolator;

},{"./noise":6}],5:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),_clock=require("./clock"),_clock2=_interopRequireDefault(_clock),_clockFrame=require("./clock-frame"),_clockFrame2=_interopRequireDefault(_clockFrame),_clockRealtime=require("./clock-realtime"),_clockRealtime2=_interopRequireDefault(_clockRealtime),_param=require("./param"),_param2=_interopRequireDefault(_param);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Automaton=function(){function e(t){var a=this;_classCallCheck(this,e),this.version="1.1.3",this.loadProps(t),this.auto=function(e){return a.__auto(e)}}return _createClass(e,[{key:"loadProps",value:function(e){this.props=e,this.data=JSON.parse(this.props.data),this.clock=this.props.fps?new _clockFrame2.default(this,fps):this.props.realtime?new _clockRealtime2.default(this):new _clock2.default(this),this.params={};for(var t in this.data.params){var a=new _param2.default(this);a.load(this.data.params[t]),this.params[t]=a}}},{key:"seek",value:function(e){this.clock.setTime(e),"function"==typeof it.props.onSeek&&this.props.onSeek(time)}},{key:"play",value:function(){this.clock.play(),"function"==typeof this.props.onPlay&&this.props.onPlay()}},{key:"pause",value:function(){this.clock.pause(),"function"==typeof this.props.onPause&&this.props.onPause()}},{key:"update",value:function(e){this.clock.update(e),this.props.loop&&this.data.length<this.clock.time&&this.clock.setTime(this.clock.time-Math.floor(this.clock.time/this.data.length)*this.data.length);for(var t in this.params)this.params[t].currentValue=this.params[t].getValue(this.clock.time)}},{key:"__auto",value:function(e){return this.params[e].currentValue}}]),e}();exports.default=Automaton;

},{"./clock":3,"./clock-frame":1,"./clock-realtime":2,"./param":7}],6:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_xorshift=require("./xorshift"),_xorshift2=_interopRequireDefault(_xorshift);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var int=function(e,r,o){return e+(r-e)*(o*o*(3-2*o))},genNoise=function(e){var r="object"===(void 0===e?"undefined":_typeof(e))?e:{length:32,recursion:6,freq:1,reso:4,seed:0};r.length=parseInt(r.length),r.recursion=parseInt(r.recursion),r.reso=parseInt(r.reso),r.seed=parseInt(r.seed);var o=[0];(0,_xorshift2.default)(r.seed);for(var t=1;t<r.reso;t++)o[t]=2*(0,_xorshift2.default)()-1;o.push(o[0]);for(var n=[],s=0;s<r.length;s++){n[s]=0;for(var f=s/r.length,u=0;u<r.recursion;u++){var i=f*r.freq*r.reso*Math.pow(2,u)%r.reso,a=Math.floor(i),l=i%1,p=Math.pow(2,-u-1);n[s]+=p*int(o[a],o[a+1],l)}}return n};exports.default=genNoise;

},{"./xorshift":8}],7:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,o,a){return o&&e(t.prototype,o),a&&e(t,a),t}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_interpolator=require("./interpolator"),_interpolator2=_interopRequireDefault(_interpolator);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var cloneObj=function(e){if("object"!==(void 0===e?"undefined":_typeof(e)))return e;var t={};for(var o in e)t[o]=e[o];return t},AutomatonParam=function(){function e(t){_classCallCheck(this,e),this.automaton=t,this.values=[];for(var o=Math.ceil(this.automaton.data.resolution*this.automaton.data.length)+1,a=0;a<o;a++)this.values[a]=0;this.nodes=[],this.addNode(0,0),this.addNode(this.automaton.data.length,0),this.currentValue=0,this.render()}return _createClass(e,[{key:"load",value:function(e){this.nodes=e,this.render()}},{key:"sortNodes",value:function(){this.nodes.sort(function(e,t){return e.time-t.time})}},{key:"render",value:function(e){var t=this;t.values=[];for(var o=1;o<t.nodes.length;o++){var a=t.nodes[o-1].time,n=Math.floor(a*t.automaton.data.resolution),r=t.nodes[o].time,s=Math.floor(r*t.automaton.data.resolution),i=1===o||t.nodes[o].mods[_interpolator2.default.MOD_RESET],l=t.nodes[o].mods[_interpolator2.default.MOD_RESET]?t.nodes[o].mods[_interpolator2.default.MOD_RESET].velocity:0,u=1/t.automaton.data.resolution,d={mode:t.nodes[o].mode,start:i?t.nodes[o-1].value:t.values[n],end:t.nodes[o].value,deltaTime:u,length:s-n+1,vel:!i&&2<t.values.length?(t.values[t.values.length-1]-t.values[t.values.length-2])/u:l,mods:t.nodes[o].mods};for(var f in t.nodes[o].params)d[f]=t.nodes[o].params[f];var m=_interpolator2.default.generate(d);t.values.pop(),t.values=t.values.concat(m)}}},{key:"addNode",value:function(e,t){var o=this,a=o.nodes.filter(function(t){return e<t.time})[0];if(!a){a={mode:_interpolator2.default.MODE_LINEAR,params:{},mods:[]};for(var n=0;n<_interpolator2.default.MODS;n++)a.mods[n]=!1}var r={time:e,value:t,mode:a.mode,params:cloneObj(a.params),mods:a.mods.map(function(e){return cloneObj(e)})};return o.nodes.push(r),o.sortNodes(),o.render(),r}},{key:"setTime",value:function(e,t){var o=this;if(!(e<0||o.nodes.length<=e))return 0!==e&&o.nodes.length-1!==e&&(o.nodes[e].time=Math.min(Math.max(t,o.nodes[e-1].time+1/o.automaton.data.resolution),o.nodes[e+1].time-1/o.automaton.data.resolution),o.render()),o.nodes[e].time}},{key:"setValue",value:function(e,t){if(!(e<0||this.nodes.length<=e))return this.nodes[e].value=t,this.render(),this.nodes[e].value}},{key:"setMode",value:function(e,t){if(!(e<1||this.nodes.length<=e)){var o=this.nodes[e];o.mode=t,t===_interpolator2.default.MODE_HOLD?o.params={}:t===_interpolator2.default.MODE_LINEAR?o.params={}:t===_interpolator2.default.MODE_SMOOTH?o.params={}:t===_interpolator2.default.MODE_EXP?o.params={factor:10}:t===_interpolator2.default.MODE_SPRING?o.params={rate:500,damp:1}:t===_interpolator2.default.MODE_GRAVITY&&(o.params={gravity:70,bounce:.3}),this.render()}}},{key:"setParam",value:function(e,t,o){e<0||this.nodes.length<=e||(this.nodes[e].params[t]=o,this.render())}},{key:"setParams",value:function(e,t){if(!(e<0||this.nodes.length<=e)){for(var o in t)this.nodes[e].params[o]=t[o];this.render()}}},{key:"activeModParams",value:function(e,t,o){var a=this;if(!(e<0||a.nodes.length<=e||t<0||_interpolator2.default.MODS<=t))if(o){a.nodes[e].mods[t]={};var n=void 0;t===_interpolator2.default.MOD_RESET?n={velocity:0}:t===_interpolator2.default.MOD_SIN?n={freq:5,amp:.1,phase:0}:t===_interpolator2.default.MOD_NOISE?n={freq:1,amp:.2,reso:8,recursion:4,seed:1}:t===_interpolator2.default.MOD_LOFI&&(n={freq:10}),a.setModParams(e,t,n)}else a.nodes[e].mods[t]=!1,a.render()}},{key:"toggleMod",value:function(e,t){e<0||this.nodes.length<=e||t<0||_interpolator2.default.MODS<=t||this.activeModParams(e,t,!this.nodes[e].mods[t])}},{key:"setModParam",value:function(e,t,o,a){e<0||this.nodes.length<=e||t<0||_interpolator2.default.MODS<=t||(this.nodes[e].mods[t][o]=a,this.render())}},{key:"setModParams",value:function(e,t,o){if(!(e<0||this.nodes.length<=e||t<0||_interpolator2.default.MODS<=t)){for(var a in o)this.nodes[e].mods[t][a]=o[a];this.render()}}},{key:"removeNode",value:function(e){if(!(e<1||this.nodes.length-1<=e)){var t=this.nodes.splice(e,1);return this.render(),t}}},{key:"getValue",value:function(e){var t=this;if("number"!=typeof e)return t.currentValue;var o=e;if(o<=0)return t.values[0];if(t.automaton.data.length<=o)return t.values[t.values.length-1];var a=o*t.automaton.data.resolution,n=Math.floor(a),r=a%1,s=t.values[n];return s+(t.values[n+1]-s)*r}}]),e}();exports.default=AutomatonParam;

},{"./interpolator":4}],8:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var seed=void 0,xorshift=function(e){return seed=e||seed||1,seed^=seed<<13,seed^=seed>>>17,(seed^=seed<<5)/Math.pow(2,32)+.5};exports.default=xorshift;

},{}]},{},[5])(5)
});