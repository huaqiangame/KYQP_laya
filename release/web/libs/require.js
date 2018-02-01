var requirejs,require,define;!function(global,setTimeout){function commentReplace(e,t){return t||""}function isFunction(e){return"[object Function]"===ostring.call(e)}function isArray(e){return"[object Array]"===ostring.call(e)}function each(e,t){if(e){var i;for(i=0;i<e.length&&(!e[i]||!t(e[i],i,e));i+=1);}}function eachReverse(e,t){if(e){var i;for(i=e.length-1;i>-1&&(!e[i]||!t(e[i],i,e));i-=1);}}function hasProp(e,t){return hasOwn.call(e,t)}function getOwn(e,t){return hasProp(e,t)&&e[t]}function eachProp(e,t){var i;for(i in e)if(hasProp(e,i)&&t(e[i],i))break}function mixin(e,t,i,r){return t&&eachProp(t,function(t,n){!i&&hasProp(e,n)||(!r||"object"!=typeof t||!t||isArray(t)||isFunction(t)||t instanceof RegExp?e[n]=t:(e[n]||(e[n]={}),mixin(e[n],t,i,r)))}),e}function bind(e,t){return function(){return t.apply(e,arguments)}}function scripts(){return document.getElementsByTagName("script")}function defaultOnError(e){throw e}function getGlobal(e){if(!e)return e;var t=global;return each(e.split("."),function(e){t=t[e]}),t}function makeError(e,t,i,r){var n=new Error(t+"\nhttp://requirejs.org/docs/errors.html#"+e);return n.requireType=e,n.requireModules=r,i&&(n.originalError=i),n}function newContext(e){function t(e,t,i){var r,n,o,a,s,u,c,d,p,f,l=t&&t.split("/"),h=w.map,m=h&&h["*"];if(e&&(u=(e=e.split("/")).length-1,w.nodeIdCompat&&jsSuffixRegExp.test(e[u])&&(e[u]=e[u].replace(jsSuffixRegExp,"")),"."===e[0].charAt(0)&&l&&(e=l.slice(0,l.length-1).concat(e)),function(e){var t,i;for(t=0;t<e.length;t++)if("."===(i=e[t]))e.splice(t,1),t-=1;else if(".."===i){if(0===t||1===t&&".."===e[2]||".."===e[t-1])continue;t>0&&(e.splice(t-1,2),t-=2)}}(e),e=e.join("/")),i&&h&&(l||m)){e:for(o=(n=e.split("/")).length;o>0;o-=1){if(s=n.slice(0,o).join("/"),l)for(a=l.length;a>0;a-=1)if((r=getOwn(h,l.slice(0,a).join("/")))&&(r=getOwn(r,s))){c=r,d=o;break e}!p&&m&&getOwn(m,s)&&(p=getOwn(m,s),f=o)}!c&&p&&(c=p,d=f),c&&(n.splice(0,d,c),e=n.join("/"))}return getOwn(w.pkgs,e)||e}function i(e){isBrowser&&each(scripts(),function(t){if(t.getAttribute("data-requiremodule")===e&&t.getAttribute("data-requirecontext")===b.contextName)return t.parentNode.removeChild(t),!0})}function r(e){var t=getOwn(w.paths,e);if(t&&isArray(t)&&t.length>1)return t.shift(),b.require.undef(e),b.makeRequire(null,{skipMap:!0})([e]),!0}function n(e){var t,i=e?e.indexOf("!"):-1;return i>-1&&(t=e.substring(0,i),e=e.substring(i+1,e.length)),[t,e]}function o(e,i,r,o){var a,s,u,c,d=null,p=i?i.name:null,f=e,l=!0,h="";return e||(l=!1,e="_@r"+(R+=1)),c=n(e),d=c[0],e=c[1],d&&(d=t(d,p,o),s=getOwn(O,d)),e&&(d?h=r?e:s&&s.normalize?s.normalize(e,function(e){return t(e,p,o)}):-1===e.indexOf("!")?t(e,p,o):e:(d=(c=n(h=t(e,p,o)))[0],h=c[1],r=!0,a=b.nameToUrl(h))),u=!d||s||r?"":"_unnormalized"+(T+=1),{prefix:d,name:h,parentMap:i,unnormalized:!!u,url:a,originalName:f,isDefine:l,id:(d?d+"!"+h:h)+u}}function a(e){var t=e.id,i=getOwn(y,t);return i||(i=y[t]=new b.Module(e)),i}function s(e,t,i){var r=e.id,n=getOwn(y,r);!hasProp(O,r)||n&&!n.defineEmitComplete?(n=a(e)).error&&"error"===t?i(n.error):n.on(t,i):"defined"===t&&i(O[r])}function u(e,t){var i=e.requireModules,r=!1;t?t(e):(each(i,function(t){var i=getOwn(y,t);i&&(i.error=e,i.events.error&&(r=!0,i.emit("error",e)))}),r||req.onError(e))}function c(){globalDefQueue.length&&(each(globalDefQueue,function(e){var t=e[0];"string"==typeof t&&(b.defQueueMap[t]=!0),M.push(e)}),globalDefQueue=[])}function d(e){delete y[e],delete S[e]}function p(e,t,i){var r=e.map.id;e.error?e.emit("error",e.error):(t[r]=!0,each(e.depMaps,function(r,n){var o=r.id,a=getOwn(y,o);!a||e.depMatched[n]||i[o]||(getOwn(t,o)?(e.defineDep(n,O[o]),e.check()):p(a,t,i))}),i[r]=!0)}function f(){var e,t,n=1e3*w.waitSeconds,o=n&&b.startTime+n<(new Date).getTime(),a=[],s=[],c=!1,d=!0;if(!v){if(v=!0,eachProp(S,function(e){var n=e.map,u=n.id;if(e.enabled&&(n.isDefine||s.push(e),!e.error))if(!e.inited&&o)r(u)?(t=!0,c=!0):(a.push(u),i(u));else if(!e.inited&&e.fetched&&n.isDefine&&(c=!0,!n.prefix))return d=!1}),o&&a.length)return e=makeError("timeout","Load timeout for modules: "+a,null,a),e.contextName=b.contextName,u(e);d&&each(s,function(e){p(e,{},{})}),o&&!t||!c||!isBrowser&&!isWebWorker||E||(E=setTimeout(function(){E=0,f()},50)),v=!1}}function l(e){hasProp(O,e[0])||a(o(e[0],null,!0)).init(e[1],e[2])}function h(e,t,i,r){e.detachEvent&&!isOpera?r&&e.detachEvent(r,t):e.removeEventListener(i,t,!1)}function m(e){var t=e.currentTarget||e.srcElement;return h(t,b.onScriptLoad,"load","onreadystatechange"),h(t,b.onScriptError,"error"),{node:t,id:t&&t.getAttribute("data-requiremodule")}}function g(){var e;for(c();M.length;){if(null===(e=M.shift())[0])return u(makeError("mismatch","Mismatched anonymous define() module: "+e[e.length-1]));l(e)}b.defQueueMap={}}var v,x,b,q,E,w={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},y={},S={},k={},M=[],O={},j={},P={},R=1,T=1;return q={require:function(e){return e.require?e.require:e.require=b.makeRequire(e.map)},exports:function(e){if(e.usingExports=!0,e.map.isDefine)return e.exports?O[e.map.id]=e.exports:e.exports=O[e.map.id]={}},module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,config:function(){return getOwn(w.config,e.map.id)||{}},exports:e.exports||(e.exports={})}}},x=function(e){this.events=getOwn(k,e.id)||{},this.map=e,this.shim=getOwn(w.shim,e.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0},x.prototype={init:function(e,t,i,r){r=r||{},this.inited||(this.factory=t,i?this.on("error",i):this.events.error&&(i=bind(this,function(e){this.emit("error",e)})),this.depMaps=e&&e.slice(0),this.errback=i,this.inited=!0,this.ignore=r.ignore,r.enabled||this.enabled?this.enable():this.check())},defineDep:function(e,t){this.depMatched[e]||(this.depMatched[e]=!0,this.depCount-=1,this.depExports[e]=t)},fetch:function(){if(!this.fetched){this.fetched=!0,b.startTime=(new Date).getTime();var e=this.map;if(!this.shim)return e.prefix?this.callPlugin():this.load();b.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],bind(this,function(){return e.prefix?this.callPlugin():this.load()}))}},load:function(){var e=this.map.url;j[e]||(j[e]=!0,b.load(this.map.id,e))},check:function(){if(this.enabled&&!this.enabling){var e,t,i=this.map.id,r=this.depExports,n=this.exports,o=this.factory;if(this.inited){if(this.error)this.emit("error",this.error);else if(!this.defining){if(this.defining=!0,this.depCount<1&&!this.defined){if(isFunction(o)){if(this.events.error&&this.map.isDefine||req.onError!==defaultOnError)try{n=b.execCb(i,o,r,n)}catch(t){e=t}else n=b.execCb(i,o,r,n);if(this.map.isDefine&&void 0===n&&((t=this.module)?n=t.exports:this.usingExports&&(n=this.exports)),e)return e.requireMap=this.map,e.requireModules=this.map.isDefine?[this.map.id]:null,e.requireType=this.map.isDefine?"define":"require",u(this.error=e)}else n=o;if(this.exports=n,this.map.isDefine&&!this.ignore&&(O[i]=n,req.onResourceLoad)){var a=[];each(this.depMaps,function(e){a.push(e.normalizedMap||e)}),req.onResourceLoad(b,this.map,a)}d(i),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else hasProp(b.defQueueMap,i)||this.fetch()}},callPlugin:function(){var e=this.map,i=e.id,r=o(e.prefix);this.depMaps.push(r),s(r,"defined",bind(this,function(r){var n,c,p,f=getOwn(P,this.map.id),l=this.map.name,h=this.map.parentMap?this.map.parentMap.name:null,m=b.makeRequire(e.parentMap,{enableBuildCallback:!0});return this.map.unnormalized?(r.normalize&&(l=r.normalize(l,function(e){return t(e,h,!0)})||""),c=o(e.prefix+"!"+l,this.map.parentMap,!0),s(c,"defined",bind(this,function(e){this.map.normalizedMap=c,this.init([],function(){return e},null,{enabled:!0,ignore:!0})})),void((p=getOwn(y,c.id))&&(this.depMaps.push(c),this.events.error&&p.on("error",bind(this,function(e){this.emit("error",e)})),p.enable()))):f?(this.map.url=b.nameToUrl(f),void this.load()):((n=bind(this,function(e){this.init([],function(){return e},null,{enabled:!0})})).error=bind(this,function(e){this.inited=!0,this.error=e,e.requireModules=[i],eachProp(y,function(e){0===e.map.id.indexOf(i+"_unnormalized")&&d(e.map.id)}),u(e)}),n.fromText=bind(this,function(t,r){var s=e.name,c=o(s),d=useInteractive;r&&(t=r),d&&(useInteractive=!1),a(c),hasProp(w.config,i)&&(w.config[s]=w.config[i]);try{req.exec(t)}catch(e){return u(makeError("fromtexteval","fromText eval for "+i+" failed: "+e,e,[i]))}d&&(useInteractive=!0),this.depMaps.push(c),b.completeLoad(s),m([s],n)}),void r.load(e.name,m,n,w))})),b.enable(r,this),this.pluginMaps[r.id]=r},enable:function(){S[this.map.id]=this,this.enabled=!0,this.enabling=!0,each(this.depMaps,bind(this,function(e,t){var i,r,n;if("string"==typeof e){if(e=o(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[t]=e,n=getOwn(q,e.id))return void(this.depExports[t]=n(this));this.depCount+=1,s(e,"defined",bind(this,function(e){this.undefed||(this.defineDep(t,e),this.check())})),this.errback?s(e,"error",bind(this,this.errback)):this.events.error&&s(e,"error",bind(this,function(e){this.emit("error",e)}))}i=e.id,r=y[i],hasProp(q,i)||!r||r.enabled||b.enable(e,this)})),eachProp(this.pluginMaps,bind(this,function(e){var t=getOwn(y,e.id);t&&!t.enabled&&b.enable(e,this)})),this.enabling=!1,this.check()},on:function(e,t){var i=this.events[e];i||(i=this.events[e]=[]),i.push(t)},emit:function(e,t){each(this.events[e],function(e){e(t)}),"error"===e&&delete this.events[e]}},b={config:w,contextName:e,registry:y,defined:O,urlFetched:j,defQueue:M,defQueueMap:{},Module:x,makeModuleMap:o,nextTick:req.nextTick,onError:u,configure:function(e){if(e.baseUrl&&"/"!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+="/"),"string"==typeof e.urlArgs){var t=e.urlArgs;e.urlArgs=function(e,i){return(-1===i.indexOf("?")?"?":"&")+t}}var i=w.shim,r={paths:!0,bundles:!0,config:!0,map:!0};eachProp(e,function(e,t){r[t]?(w[t]||(w[t]={}),mixin(w[t],e,!0,!0)):w[t]=e}),e.bundles&&eachProp(e.bundles,function(e,t){each(e,function(e){e!==t&&(P[e]=t)})}),e.shim&&(eachProp(e.shim,function(e,t){isArray(e)&&(e={deps:e}),!e.exports&&!e.init||e.exportsFn||(e.exportsFn=b.makeShimExports(e)),i[t]=e}),w.shim=i),e.packages&&each(e.packages,function(e){var t;t=(e="string"==typeof e?{name:e}:e).name,e.location&&(w.paths[t]=e.location),w.pkgs[t]=e.name+"/"+(e.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")}),eachProp(y,function(e,t){e.inited||e.map.unnormalized||(e.map=o(t,null,!0))}),(e.deps||e.callback)&&b.require(e.deps||[],e.callback)},makeShimExports:function(e){return function(){var t;return e.init&&(t=e.init.apply(global,arguments)),t||e.exports&&getGlobal(e.exports)}},makeRequire:function(r,n){function s(t,i,c){var d,p,l;return n.enableBuildCallback&&i&&isFunction(i)&&(i.__requireJsBuild=!0),"string"==typeof t?isFunction(i)?u(makeError("requireargs","Invalid require call"),c):r&&hasProp(q,t)?q[t](y[r.id]):req.get?req.get(b,t,r,s):(p=o(t,r,!1,!0),d=p.id,hasProp(O,d)?O[d]:u(makeError("notloaded",'Module name "'+d+'" has not been loaded yet for context: '+e+(r?"":". Use require([])")))):(g(),b.nextTick(function(){g(),(l=a(o(null,r))).skipMap=n.skipMap,l.init(t,i,c,{enabled:!0}),f()}),s)}return n=n||{},mixin(s,{isBrowser:isBrowser,toUrl:function(e){var i,n=e.lastIndexOf("."),o=e.split("/")[0];return-1!==n&&(!("."===o||".."===o)||n>1)&&(i=e.substring(n,e.length),e=e.substring(0,n)),b.nameToUrl(t(e,r&&r.id,!0),i,!0)},defined:function(e){return hasProp(O,o(e,r,!1,!0).id)},specified:function(e){return e=o(e,r,!1,!0).id,hasProp(O,e)||hasProp(y,e)}}),r||(s.undef=function(e){c();var t=o(e,r,!0),n=getOwn(y,e);n.undefed=!0,i(e),delete O[e],delete j[t.url],delete k[e],eachReverse(M,function(t,i){t[0]===e&&M.splice(i,1)}),delete b.defQueueMap[e],n&&(n.events.defined&&(k[e]=n.events),d(e))}),s},enable:function(e){getOwn(y,e.id)&&a(e).enable()},completeLoad:function(e){var t,i,n,o=getOwn(w.shim,e)||{},a=o.exports;for(c();M.length;){if(null===(i=M.shift())[0]){if(i[0]=e,t)break;t=!0}else i[0]===e&&(t=!0);l(i)}if(b.defQueueMap={},n=getOwn(y,e),!t&&!hasProp(O,e)&&n&&!n.inited){if(!(!w.enforceDefine||a&&getGlobal(a)))return r(e)?void 0:u(makeError("nodefine","No define call for "+e,null,[e]));l([e,o.deps||[],o.exportsFn])}f()},nameToUrl:function(e,t,i){var r,n,o,a,s,u,c,d=getOwn(w.pkgs,e);if(d&&(e=d),c=getOwn(P,e))return b.nameToUrl(c,t,i);if(req.jsExtRegExp.test(e))s=e+(t||"");else{for(r=w.paths,o=(n=e.split("/")).length;o>0;o-=1)if(a=n.slice(0,o).join("/"),u=getOwn(r,a)){isArray(u)&&(u=u[0]),n.splice(0,o,u);break}s=n.join("/"),s=("/"===(s+=t||(/^data\:|^blob\:|\?/.test(s)||i?"":".js")).charAt(0)||s.match(/^[\w\+\.\-]+:/)?"":w.baseUrl)+s}return w.urlArgs&&!/^blob\:/.test(s)?s+w.urlArgs(e,s):s},load:function(e,t){req.load(b,e,t)},execCb:function(e,t,i,r){return t.apply(r,i)},onScriptLoad:function(e){if("load"===e.type||readyRegExp.test((e.currentTarget||e.srcElement).readyState)){interactiveScript=null;var t=m(e);b.completeLoad(t.id)}},onScriptError:function(e){var t=m(e);if(!r(t.id)){var i=[];return eachProp(y,function(e,r){0!==r.indexOf("_@r")&&each(e.depMaps,function(e){if(e.id===t.id)return i.push(r),!0})}),u(makeError("scripterror",'Script error for "'+t.id+(i.length?'", needed by: '+i.join(", "):'"'),e,[t.id]))}}},b.require=b.makeRequire(),b}function getInteractiveScript(){return interactiveScript&&"interactive"===interactiveScript.readyState?interactiveScript:(eachReverse(scripts(),function(e){if("interactive"===e.readyState)return interactiveScript=e}),interactiveScript)}var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.3.5",commentRegExp=/\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/gm,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,isBrowser=!("undefined"==typeof window||"undefined"==typeof navigator||!window.document),isWebWorker=!isBrowser&&"undefined"!=typeof importScripts,readyRegExp=isBrowser&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),contexts={},cfg={},globalDefQueue=[],useInteractive=!1;if(void 0===define){if(void 0!==requirejs){if(isFunction(requirejs))return;cfg=requirejs,requirejs=void 0}void 0===require||isFunction(require)||(cfg=require,require=void 0),req=requirejs=function(e,t,i,r){var n,o,a=defContextName;return isArray(e)||"string"==typeof e||(o=e,isArray(t)?(e=t,t=i,i=r):e=[]),o&&o.context&&(a=o.context),(n=getOwn(contexts,a))||(n=contexts[a]=req.s.newContext(a)),o&&n.configure(o),n.require(e,t,i)},req.config=function(e){return req(e)},req.nextTick=void 0!==setTimeout?function(e){setTimeout(e,4)}:function(e){e()},require||(require=req),req.version=version,req.jsExtRegExp=/^\/|:|\?|\.js$/,req.isBrowser=isBrowser,s=req.s={contexts:contexts,newContext:newContext},req({}),each(["toUrl","undef","defined","specified"],function(e){req[e]=function(){var t=contexts[defContextName];return t.require[e].apply(t,arguments)}}),isBrowser&&(head=s.head=document.getElementsByTagName("head")[0],(baseElement=document.getElementsByTagName("base")[0])&&(head=s.head=baseElement.parentNode)),req.onError=defaultOnError,req.createNode=function(e,t,i){var r=e.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");return r.type=e.scriptType||"text/javascript",r.charset="utf-8",r.async=!0,r},req.load=function(e,t,i){var r,n=e&&e.config||{};if(isBrowser)return(r=req.createNode(n,t,i)).setAttribute("data-requirecontext",e.contextName),r.setAttribute("data-requiremodule",t),!r.attachEvent||r.attachEvent.toString&&r.attachEvent.toString().indexOf("[native code")<0||isOpera?(r.addEventListener("load",e.onScriptLoad,!1),r.addEventListener("error",e.onScriptError,!1)):(useInteractive=!0,r.attachEvent("onreadystatechange",e.onScriptLoad)),r.src=i,n.onNodeCreated&&n.onNodeCreated(r,n,t,i),currentlyAddingScript=r,baseElement?head.insertBefore(r,baseElement):head.appendChild(r),currentlyAddingScript=null,r;if(isWebWorker)try{setTimeout(function(){},0),importScripts(i),e.completeLoad(t)}catch(r){e.onError(makeError("importscripts","importScripts failed for "+t+" at "+i,r,[t]))}},isBrowser&&!cfg.skipDataMain&&eachReverse(scripts(),function(e){if(head||(head=e.parentNode),dataMain=e.getAttribute("data-main"))return mainScript=dataMain,cfg.baseUrl||-1!==mainScript.indexOf("!")||(src=mainScript.split("/"),mainScript=src.pop(),subPath=src.length?src.join("/")+"/":"./",cfg.baseUrl=subPath),mainScript=mainScript.replace(jsSuffixRegExp,""),req.jsExtRegExp.test(mainScript)&&(mainScript=dataMain),cfg.deps=cfg.deps?cfg.deps.concat(mainScript):[mainScript],!0}),define=function(e,t,i){var r,n;"string"!=typeof e&&(i=t,t=e,e=null),isArray(t)||(i=t,t=null),!t&&isFunction(i)&&(t=[],i.length&&(i.toString().replace(commentRegExp,commentReplace).replace(cjsRequireRegExp,function(e,i){t.push(i)}),t=(1===i.length?["require"]:["require","exports","module"]).concat(t))),useInteractive&&(r=currentlyAddingScript||getInteractiveScript())&&(e||(e=r.getAttribute("data-requiremodule")),n=contexts[r.getAttribute("data-requirecontext")]),n?(n.defQueue.push([e,t,i]),n.defQueueMap[e]=!0):globalDefQueue.push([e,t,i])},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg)}}(this,"undefined"==typeof setTimeout?void 0:setTimeout);