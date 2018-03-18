// Automaton v1.1.1 - MIT License
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Automaton = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var defObj=function(){return{length:1,resolution:1e3,params:[]}},compat=function(e){if(!e)return defObj();var r=void 0;try{r=JSON.parse(e)}catch(e){return console.error("Automaton: Loaded data is invalid"),defObj()}var t=parseFloat(r.v);if(!t&&!r.rev){if(!r.gui)return console.error("Automaton: Loaded data is not compatible with this revision"),defObj();delete r.gui}return r.rev&&(t=1),r};exports.default=compat;

},{}],2:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_noise=require("./noise"),_noise2=_interopRequireDefault(_noise);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var cloneObj=function(e){var r={};for(var o in e)r[o]=e[o];return r},def=function(e,r){return"number"==typeof e?e:r},Interpolator={MODE_HOLD:0,MODE_LINEAR:1,MODE_SMOOTH:2,MODE_EXP:3,MODE_SPRING:4,MODE_GRAVITY:5,MODES:6,modeNames:["Hold","Linear","Smoothstep","Exp. Smooth","Critically Damped Spring","Gravity and Bounce"],MOD_RESET:0,MOD_SIN:1,MOD_NOISE:2,MOD_LOFI:3,MODS:4,modNames:["Reset","Sine Curve","Perlin Noise","Lo-Fi"],generate:function(e){for(var r="object"===(void 0===e?"undefined":_typeof(e))?e:{},o=def(r.mode,Interpolator.MODE_LINEAR),t=def(r.start,0),n=def(r.end,1),a=def(r.length,32),f=def(r.deltaTime,.01),l="object"===_typeof(r.mods)?cloneObj(r.mods):[],O=0;O<Interpolator.MODS;O++)l[O]=!!l[O]&&l[O];var i=[t];if(o===Interpolator.MODE_HOLD){for(var p=1;p<a;p++)i[p]=t;i[a-1]=n}else if(o===Interpolator.MODE_LINEAR)for(var I=1;I<a;I++){var d=I/(a-1);i[I]=t+(n-t)*d}else if(o===Interpolator.MODE_SMOOTH)for(var M=1;M<a;M++){var _=M/(a-1),s=_*_*(3-2*_);i[M]=t+(n-t)*s}else if(o===Interpolator.MODE_EXP)for(var D=def(r.factor,10),u=1;u<a;u++){var E=u*f,S=1-Math.exp(-D*E);i[u]=t+(n-t)*S}else if(o===Interpolator.MODE_SPRING)for(var v=def(r.rate,500),c=def(r.damp,1),m=def(r.vel,0),y=t,N=1;N<a;N++)y+=(m+=(-v*(y-n)-2*m*Math.sqrt(v)*c)*f)*f,i[N]=y;else if(o===Interpolator.MODE_GRAVITY)for(var b=def(r.gravity,70),h=def(r.bounce,.3),R=def(r.vel,0),L=Math.sign(n-t),q=t,g=1;g<a;g++)q+=(R+=b*L*f)*f,L!==Math.sign(n-q)&&(q=n+(n-q)*h,R*=-h),i[g]=q;if(l[Interpolator.MOD_SIN])for(var P=def(l[Interpolator.MOD_SIN].freq,2),T=def(l[Interpolator.MOD_SIN].amp,.5),j=def(l[Interpolator.MOD_SIN].phase,0),A=0;A<a;A++)i[A]+=Math.sin(j*Math.PI*2)*T,j=(j+1/(a-1)*P)%1;if(l[Interpolator.MOD_NOISE])for(var G=def(l[Interpolator.MOD_NOISE].amp,1),H=(0,_noise2.default)({length:a,recursion:def(l[Interpolator.MOD_NOISE].recursion,3),freq:def(l[Interpolator.MOD_NOISE].freq,1)*a/(a-1),reso:def(l[Interpolator.MOD_NOISE].reso,4),seed:def(l[Interpolator.MOD_NOISE].seed,175)}),x=0;x<a;x++)i[x]+=H[x]*G;if(l[Interpolator.MOD_LOFI])for(var F=(a-1)/def(l[Interpolator.MOD_LOFI].freq,4),C=0;C<a;C++)i[C]=i[Math.ceil(Math.floor(C/F)*F)];return i}};exports.default=Interpolator;

},{"./noise":4}],3:[function(require,module,exports){
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_compat=require("./compat"),_compat2=_interopRequireDefault(_compat),_param2=require("./param"),_param3=_interopRequireDefault(_param2);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var Vue=void 0,GUI=void 0;var mod=function(e,t){return e-Math.floor(e/t)*t},Automaton=function(e){var t={version:"1.1.1"},a="object"===(void 0===e?"undefined":_typeof(e))?e:{},r=(0,_compat2.default)(a.data);t.time=0,t.deltaTime=0,t.isPlaying=!0,t.length=r.length,t.resolution=r.resolution,t.setLength=function(e){if(!isNaN(e)){for(var a in t.params){for(var r=t.params[a],n=r.nodes.length-1;0<n;n--){e<r.nodes[n].time&&r.nodes.splice(n,1)}r.nodes[r.nodes.length-1].time!==e&&r.addNode(e,0)}t.length=e}},t.params={},t.createParam=function(e){var a=new _param3.default(t);return t.params[e]=a,a},t.deleteParam=function(e){delete t.params[e]},t.getParamNames=function(){var e=[];for(var a in t.params)e.push(a);return e=e.sort()},t.countParams=function(){var e=0;for(var a in t.params)e++;return e};for(var n in r.params){t.createParam(n).load(r.params[n])}return t.setLength(t.length),t.seek=function(e){var r=e-Math.floor(e/t.length)*t.length;t.update(r),"function"==typeof a.onseek&&a.onseek(r)},t.play=function(){t.isPlaying=!0,"function"==typeof a.onplay&&a.onplay()},t.pause=function(){t.isPlaying=!1,"function"==typeof a.onpause&&a.onpause()},t.renderAll=function(){for(var e in t.params)t.params[e].render()},t.update=function(e){var r=t.time;if(a.fps){"number"==typeof e?t.frame=Math.floor(e*a.fps):"number"!=typeof t.frame&&(t.frame=Math.floor(t.time*a.fps));var n=Math.floor(t.length*a.fps),o=t.isPlaying?1:0;t.frame=(t.frame+o)%n,t.time=t.frame/a.fps}else if(a.realtime){var i=+new Date;"number"!=typeof e&&t.rtDate&&t.isPlaying||(t.rtTime=e||t.time,t.rtDate=i);var f=t.rtTime+.001*(i-t.rtDate);t.time=f-Math.floor(f/t.length)*t.length}else{var m="number"==typeof e?e:t.time;t.time=mod(m,t.length)}var u=t.time-r,l=t.length/2;t.deltaTime=mod(u+l,t.length)-l},t.auto=function(e){var a=t.params[e];return a||(a=t.createParam(e)),a.used=!0,a.getValue()},t.bye=function(){t=null},t};module.exports=Automaton;

},{"./compat":1,"./param":5}],4:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_xorshift=require("./xorshift"),_xorshift2=_interopRequireDefault(_xorshift);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var int=function(e,r,o){return e+(r-e)*(o*o*(3-2*o))},genNoise=function(e){var r="object"===(void 0===e?"undefined":_typeof(e))?e:{length:32,recursion:6,freq:1,reso:4,seed:0};r.length=parseInt(r.length),r.recursion=parseInt(r.recursion),r.reso=parseInt(r.reso),r.seed=parseInt(r.seed);var o=[0];(0,_xorshift2.default)(r.seed);for(var t=1;t<r.reso;t++)o[t]=2*(0,_xorshift2.default)()-1;o.push(o[0]);for(var n=[],s=0;s<r.length;s++){n[s]=0;for(var f=s/r.length,u=0;u<r.recursion;u++){var i=f*r.freq*r.reso*Math.pow(2,u)%r.reso,a=Math.floor(i),l=i%1,p=Math.pow(2,-u-1);n[s]+=p*int(o[a],o[a+1],l)}}return n};exports.default=genNoise;

},{"./xorshift":6}],5:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_interpolator=require("./interpolator"),_interpolator2=_interopRequireDefault(_interpolator);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var cloneObj=function(e){if("object"!==(void 0===e?"undefined":_typeof(e)))return e;var t={};for(var o in e)t[o]=e[o];return t},AutomatonParam=function(){function e(t){_classCallCheck(this,e);var o=this;o.automaton=t,o.values=[];for(var n=Math.ceil(o.automaton.resolution*o.automaton.length)+1,a=0;a<n;a++)o.values[a]=0;o.nodes=[],o.addNode(0,0),o.addNode(o.automaton.length,1),o.render()}return _createClass(e,[{key:"load",value:function(e){this.nodes=e,this.render()}},{key:"sortNodes",value:function(){this.nodes.sort(function(e,t){return e.time-t.time})}},{key:"render",value:function(e){var t=this;t.values=[];for(var o=1;o<t.nodes.length;o++){var n=t.nodes[o-1].time,a=Math.floor(n*t.automaton.resolution),r=t.nodes[o].time,s=Math.floor(r*t.automaton.resolution),l=1===o||t.nodes[o].mods[_interpolator2.default.MOD_RESET],i=t.nodes[o].mods[_interpolator2.default.MOD_RESET]?t.nodes[o].mods[_interpolator2.default.MOD_RESET].velocity:0,u=1/t.automaton.resolution,d={mode:t.nodes[o].mode,start:l?t.nodes[o-1].value:t.values[a],end:t.nodes[o].value,deltaTime:u,length:s-a+1,vel:!l&&2<t.values.length?(t.values[t.values.length-1]-t.values[t.values.length-2])/u:i,mods:t.nodes[o].mods};for(var f in t.nodes[o].params)d[f]=t.nodes[o].params[f];var m=_interpolator2.default.generate(d);t.values.pop(),t.values=t.values.concat(m)}}},{key:"addNode",value:function(e,t){var o=this,n=o.nodes.filter(function(t){return e<t.time})[0];if(!n){n={mode:_interpolator2.default.MODE_LINEAR,params:{},mods:[]};for(var a=0;a<_interpolator2.default.MODS;a++)n.mods[a]=!1}var r={time:e,value:t,mode:n.mode,params:cloneObj(n.params),mods:n.mods.map(function(e){return cloneObj(e)})};return o.nodes.push(r),o.sortNodes(),o.render(),r}},{key:"setTime",value:function(e,t){var o=this;if(!(e<0||o.nodes.length<=e))return 0!==e&&o.nodes.length-1!==e&&(o.nodes[e].time=Math.min(Math.max(t,o.nodes[e-1].time+1/o.automaton.resolution),o.nodes[e+1].time-1/o.automaton.resolution),o.render()),o.nodes[e].time}},{key:"setValue",value:function(e,t){if(!(e<0||this.nodes.length<=e))return this.nodes[e].value=t,this.render(),this.nodes[e].value}},{key:"setMode",value:function(e,t){if(!(e<1||this.nodes.length<=e)){var o=this.nodes[e];o.mode=t,t===_interpolator2.default.MODE_HOLD?o.params={}:t===_interpolator2.default.MODE_LINEAR?o.params={}:t===_interpolator2.default.MODE_SMOOTH?o.params={}:t===_interpolator2.default.MODE_EXP?o.params={factor:10}:t===_interpolator2.default.MODE_SPRING?o.params={rate:500,damp:1}:t===_interpolator2.default.MODE_GRAVITY&&(o.params={gravity:70,bounce:.3}),this.render()}}},{key:"setParam",value:function(e,t,o){e<0||this.nodes.length<=e||(this.nodes[e].params[t]=o,this.render())}},{key:"setParams",value:function(e,t){if(!(e<0||this.nodes.length<=e)){for(var o in t)this.nodes[e].params[o]=t[o];this.render()}}},{key:"activeModParams",value:function(e,t,o){var n=this;if(!(e<0||n.nodes.length<=e||t<0||_interpolator2.default.MODS<=t))if(o){n.nodes[e].mods[t]={};var a=void 0;t===_interpolator2.default.MOD_RESET?a={velocity:0}:t===_interpolator2.default.MOD_SIN?a={freq:5,amp:.1,phase:0}:t===_interpolator2.default.MOD_NOISE?a={freq:1,amp:.2,reso:8,recursion:4,seed:1}:t===_interpolator2.default.MOD_LOFI&&(a={freq:10}),n.setModParams(e,t,a)}else n.nodes[e].mods[t]=!1,n.render()}},{key:"toggleMod",value:function(e,t){e<0||this.nodes.length<=e||t<0||_interpolator2.default.MODS<=t||this.activeModParams(e,t,!this.nodes[e].mods[t])}},{key:"setModParam",value:function(e,t,o,n){e<0||this.nodes.length<=e||t<0||_interpolator2.default.MODS<=t||(this.nodes[e].mods[t][o]=n,this.render())}},{key:"setModParams",value:function(e,t,o){if(!(e<0||this.nodes.length<=e||t<0||_interpolator2.default.MODS<=t)){for(var n in o)this.nodes[e].mods[t][n]=o[n];this.render()}}},{key:"removeNode",value:function(e){if(!(e<1||this.nodes.length-1<=e)){var t=this.nodes.splice(e,1);return this.render(),t}}},{key:"getValue",value:function(e){var t=this,o="number"==typeof e?e:t.automaton.time;if(o<=0)return t.values[0];if(t.automaton.length<=o)return t.values[t.values.length-1];var n=o*t.automaton.resolution,a=Math.floor(n),r=n%1,s=t.values[a];return s+(t.values[a+1]-s)*r}}]),e}();exports.default=AutomatonParam;

},{"./interpolator":2}],6:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var seed=void 0,xorshift=function(e){return seed=e||seed||1,seed^=seed<<13,seed^=seed>>>17,(seed^=seed<<5)/Math.pow(2,32)+.5};exports.default=xorshift;

},{}]},{},[3])(3)
});