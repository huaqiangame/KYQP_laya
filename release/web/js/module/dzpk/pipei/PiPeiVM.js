var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function i(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(i.prototype=o.prototype,new i)}}();define(["require","exports","./PiPeiView","../../../mbase/base/MViewModel"],function(e,t,o,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){function t(){var t=e.call(this)||this;return t.setAtlasName="1",t.setClass=o.PiPeiView,t.setViewPath="pipei/PiPeiView",t}return __extends(t,e),t.prototype.cancelPiPei=function(){this.sendData(16778282,[0]),this.closeNow()},t.prototype.onCloseMe=function(){0==this.playerData.queueRoomType&&this.closeNow()},t.prototype.eventInit=function(){this.regist("server_Client_syncProperty_Player_queueRoomType",this.onCloseMe)},t}(i.MViewModel);t.PiPeiVM=n});