define("tpl/media/simple_videomsg.html.js",[],function(){
return'<!--群发功能-已发送页面视频模版-->\n<div class="appmsgSendedItem simple_videomsg" data-id="{id}" data-src="{video_url}">\n    {if for_network}\n    <a href="{content_url}" class="title_wrp" data-contenturl="{content_url}" target="_blank">\n    {else}\n    <a href="javascript:;" class="title_wrp js_video">\n    {/if}\n        <!-- <img class="icon icon_lh" src="/cgi-bin/getimgdata?token={token}&msgid={app_id}&mode=large&source=file&fileId={file_id}"/> -->\n        <span class="icon icon_lh cover" style="background-image:url("/cgi-bin/getimgdata?token={token}&msgid={app_id}&mode=large&source=file&fileId={file_id}");"></span>\n        <span class="title">[视频]{title}</span>\n    </a>\n    <p class="desc">{if for_transfer}{if !hide_transfer}转码中{/if}{/if} {digest}</p>\n</div>\n';
});define("tpl/media/video.html.js",[],function(){
return'<div id="wxVideoBox{id}" class="mediaBox videoBox{if type == 62} smallvideo_box{/if}">\n	<div class="mediaContent">\n		<div class="wxVideoPlayContent">\n            <div class="wxVideoBoxAction{id}">\n                <a id="wxVideoBoxFold{id}" class="video_switch"><i class="icon14_common switch_gray"></i>收起</a>\n			</div>\n            <div id="wxVideoPlayer{id}" class="wxVideoPlayer">\n                <video id="wxVideo{id}" class="video-js vjs-default-skin" width="260" height="195" preload="auto"  loop controls="controls" src="{src}" poster="/cgi-bin/getimgdata?token={token}&msgid={id}&mode=small&source={source}&fileId={file_id}"></video>\n            </div>\n            <div class="wxVideoNoSupport" style="display: none">\n                当前浏览器暂不支持播放视频，建议更换至Chrome浏览器            </div>\n		</div>\n        <div class="wxVideoScreenshot" data-vid="{id}" data-fid="{fileid}" data-source="{source}">\n            {if video_thumb_url}\n            <img class="wxImg" src="{video_thumb_url}">\n            {else}\n            <img class="wxImg" src="/cgi-bin/getimgdata?token={token}&msgid={id}&mode=small&source={source}&fileId={file_id}" alt="" title=\'点击播放视频\' />\n            {/if}\n			<span class="iconVideo" title=\'点击播放视频\'></span>\n            <div class="videoDuration"><em>{play_length}"</em></div>\n		</div>\n    </div>\n</div>\n';
});define("biz_web/lib/swfobject.js",[],function(){
var e=function(){
function t(){
if(!G){
try{
var e=V.getElementsByTagName("body")[0].appendChild(m("span"));
e.parentNode.removeChild(e);
}catch(t){
return;
}
G=!0;
for(var n=D.length,a=0;n>a;a++)D[a]();
}
}
function n(e){
G?e():D[D.length]=e;
}
function a(e){
if(typeof M.addEventListener!=k)M.addEventListener("load",e,!1);else if(typeof V.addEventListener!=k)V.addEventListener("load",e,!1);else if(typeof M.attachEvent!=k)g(M,"onload",e);else if("function"==typeof M.onload){
var t=M.onload;
M.onload=function(){
t(),e();
};
}else M.onload=e;
}
function i(){
R?r():o();
}
function r(){
var e=V.getElementsByTagName("body")[0],t=m(B);
t.setAttribute("type",F);
var n=e.appendChild(t);
if(n){
var a=0;
!function(){
if(typeof n.GetVariable!=k){
var i=n.GetVariable("$version");
i&&(i=i.split(" ")[1].split(","),X.pv=[parseInt(i[0],10),parseInt(i[1],10),parseInt(i[2],10)]);
}else if(10>a)return a++,void setTimeout(arguments.callee,10);
e.removeChild(t),n=null,o();
}();
}else o();
}
function o(){
var e=W.length;
if(e>0)for(var t=0;e>t;t++){
var n=W[t].id,a=W[t].callbackFn,i={
success:!1,
id:n
};
if(X.pv[0]>0){
var r=h(n);
if(r)if(!w(W[t].swfVersion)||X.wk&&X.wk<312)if(W[t].expressInstall&&s()){
var o={};
o.data=W[t].expressInstall,o.width=r.getAttribute("width")||"0",o.height=r.getAttribute("height")||"0",
r.getAttribute("class")&&(o.styleclass=r.getAttribute("class")),r.getAttribute("align")&&(o.align=r.getAttribute("align"));
for(var f={},u=r.getElementsByTagName("param"),p=u.length,v=0;p>v;v++)"movie"!=u[v].getAttribute("name").toLowerCase()&&(f[u[v].getAttribute("name")]=u[v].getAttribute("value"));
c(o,f,n,a);
}else d(r),a&&a(i);else C(n,!0),a&&(i.success=!0,i.ref=l(n),a(i));
}else if(C(n,!0),a){
var y=l(n);
y&&typeof y.SetVariable!=k&&(i.success=!0,i.ref=y),a(i);
}
}
}
function l(e){
var t=null,n=h(e);
if(n&&"OBJECT"==n.nodeName)if(typeof n.SetVariable!=k)t=n;else{
var a=n.getElementsByTagName(B)[0];
a&&(t=a);
}
return t;
}
function s(){
return!J&&w("6.0.65")&&(X.win||X.mac)&&!(X.wk&&X.wk<312);
}
function c(e,t,n,a){
J=!0,N=a||null,T={
success:!1,
id:n
};
var i=h(n);
if(i){
"OBJECT"==i.nodeName?(S=f(i),A=null):(S=i,A=n),e.id=$,(typeof e.width==k||!/%$/.test(e.width)&&parseInt(e.width,10)<310)&&(e.width="310"),
(typeof e.height==k||!/%$/.test(e.height)&&parseInt(e.height,10)<137)&&(e.height="137"),
V.title=V.title.slice(0,47)+" - Flash Player Installation";
var r=X.ie&&X.win?"ActiveX":"PlugIn",o="MMredirectURL="+M.location.toString().replace(/&/g,"%26")+"&MMplayerType="+r+"&MMdoctitle="+V.title;
if(typeof t.flashvars!=k?t.flashvars+="&"+o:t.flashvars=o,X.ie&&X.win&&4!=i.readyState){
var l=m("div");
n+="SWFObjectNew",l.setAttribute("id",n),i.parentNode.insertBefore(l,i),i.style.display="none",
function(){
4==i.readyState?i.parentNode.removeChild(i):setTimeout(arguments.callee,10);
}();
}
u(e,t,n);
}
}
function d(e){
if(X.ie&&X.win&&4!=e.readyState){
var t=m("div");
e.parentNode.insertBefore(t,e),t.parentNode.replaceChild(f(e),t),e.style.display="none",
function(){
4==e.readyState?e.parentNode.removeChild(e):setTimeout(arguments.callee,10);
}();
}else e.parentNode.replaceChild(f(e),e);
}
function f(e){
var t=m("div");
if(X.win&&X.ie)t.innerHTML=e.innerHTML;else{
var n=e.getElementsByTagName(B)[0];
if(n){
var a=n.childNodes;
if(a)for(var i=a.length,r=0;i>r;r++)1==a[r].nodeType&&"PARAM"==a[r].nodeName||8==a[r].nodeType||t.appendChild(a[r].cloneNode(!0));
}
}
return t;
}
function u(e,t,n){
var a,i=h(n);
if(X.wk&&X.wk<312)return a;
if(i)if(typeof e.id==k&&(e.id=n),X.ie&&X.win){
var r="";
for(var o in e)e[o]!=Object.prototype[o]&&("data"==o.toLowerCase()?t.movie=e[o]:"styleclass"==o.toLowerCase()?r+=' class="'+e[o]+'"':"classid"!=o.toLowerCase()&&(r+=" "+o+'="'+e[o]+'"'));
var l="";
for(var s in t)t[s]!=Object.prototype[s]&&(l+='<param name="'+s+'" value="'+t[s]+'" />');
i.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+r+">"+l+"</object>",
H[H.length]=e.id,a=h(e.id);
}else{
var c=m(B);
c.setAttribute("type",F);
for(var d in e)e[d]!=Object.prototype[d]&&("styleclass"==d.toLowerCase()?c.setAttribute("class",e[d]):"classid"!=d.toLowerCase()&&c.setAttribute(d,e[d]));
for(var f in t)t[f]!=Object.prototype[f]&&"movie"!=f.toLowerCase()&&p(c,f,t[f]);
i.parentNode.replaceChild(c,i),a=c;
}
return a;
}
function p(e,t,n){
var a=m("param");
a.setAttribute("name",t),a.setAttribute("value",n),e.appendChild(a);
}
function v(e){
var t=h(e);
t&&"OBJECT"==t.nodeName&&(X.ie&&X.win?(t.style.display="none",function(){
4==t.readyState?y(e):setTimeout(arguments.callee,10);
}()):t.parentNode.removeChild(t));
}
function y(e){
var t=h(e);
if(t){
for(var n in t)"function"==typeof t[n]&&(t[n]=null);
t.parentNode.removeChild(t);
}
}
function h(e){
var t=null;
try{
t=V.getElementById(e);
}catch(n){}
return t;
}
function m(e){
return V.createElement(e);
}
function g(e,t,n){
e.attachEvent(t,n),z[z.length]=[e,t,n];
}
function w(e){
var t=X.pv,n=e.split(".");
return n[0]=parseInt(n[0],10),n[1]=parseInt(n[1],10)||0,n[2]=parseInt(n[2],10)||0,
t[0]>n[0]||t[0]==n[0]&&t[1]>n[1]||t[0]==n[0]&&t[1]==n[1]&&t[2]>=n[2]?!0:!1;
}
function b(e,t,n,a){
if(!X.ie||!X.mac){
var i=V.getElementsByTagName("head")[0];
if(i){
var r=n&&"string"==typeof n?n:"screen";
if(a&&(I=null,L=null),!I||L!=r){
var o=m("style");
o.setAttribute("type","text/css"),o.setAttribute("media",r),I=i.appendChild(o),X.ie&&X.win&&typeof V.styleSheets!=k&&V.styleSheets.length>0&&(I=V.styleSheets[V.styleSheets.length-1]),
L=r;
}
X.ie&&X.win?I&&typeof I.addRule==B&&I.addRule(e,t):I&&typeof V.createTextNode!=k&&I.appendChild(V.createTextNode(e+" {"+t+"}"));
}
}
}
function C(e,t){
if(U){
var n=t?"visible":"hidden";
G&&h(e)?h(e).style.visibility=n:b("#"+e,"visibility:"+n);
}
}
function E(e){
var t=/[\\\"<>\.;]/,n=null!=t.exec(e);
return n&&typeof encodeURIComponent!=k?encodeURIComponent(e):e;
}
{
var S,A,N,T,I,L,k="undefined",B="object",O="Shockwave Flash",j="ShockwaveFlash.ShockwaveFlash",F="application/x-shockwave-flash",$="SWFObjectExprInst",x="onreadystatechange",M=window,V=document,P=navigator,R=!1,D=[i],W=[],H=[],z=[],G=!1,J=!1,U=!0,X=function(){
var e=typeof V.getElementById!=k&&typeof V.getElementsByTagName!=k&&typeof V.createElement!=k,t=P.userAgent.toLowerCase(),n=P.platform.toLowerCase(),a=/win/.test(n?n:t),i=/mac/.test(n?n:t),r=/webkit/.test(t)?parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,o=!1,l=[0,0,0],s=null;
if(typeof P.plugins!=k&&typeof P.plugins[O]==B)s=P.plugins[O].description,!s||typeof P.mimeTypes!=k&&P.mimeTypes[F]&&!P.mimeTypes[F].enabledPlugin||(R=!0,
o=!1,s=s.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),l[0]=parseInt(s.replace(/^(.*)\..*$/,"$1"),10),
l[1]=parseInt(s.replace(/^.*\.(.*)\s.*$/,"$1"),10),l[2]=/[a-zA-Z]/.test(s)?parseInt(s.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof M.ActiveXObject!=k)try{
var c=new ActiveXObject(j);
c&&(s=c.GetVariable("$version"),s&&(o=!0,s=s.split(" ")[1].split(","),l=[parseInt(s[0],10),parseInt(s[1],10),parseInt(s[2],10)]));
}catch(d){}
return{
w3:e,
pv:l,
wk:r,
ie:o,
win:a,
mac:i
};
}();
!function(){
X.w3&&((typeof V.readyState!=k&&"complete"==V.readyState||typeof V.readyState==k&&(V.getElementsByTagName("body")[0]||V.body))&&t(),
G||(typeof V.addEventListener!=k&&V.addEventListener("DOMContentLoaded",t,!1),X.ie&&X.win&&(V.attachEvent(x,function(){
"complete"==V.readyState&&(V.detachEvent(x,arguments.callee),t());
}),M==top&&!function(){
if(!G){
try{
V.documentElement.doScroll("left");
}catch(e){
return void setTimeout(arguments.callee,0);
}
t();
}
}()),X.wk&&!function(){
return G?void 0:/loaded|complete/.test(V.readyState)?void t():void setTimeout(arguments.callee,0);
}(),a(t)));
}(),function(){
X.ie&&X.win&&window.attachEvent("onunload",function(){
for(var t=z.length,n=0;t>n;n++)z[n][0].detachEvent(z[n][1],z[n][2]);
for(var a=H.length,i=0;a>i;i++)v(H[i]);
for(var r in X)X[r]=null;
X=null;
for(var o in e)e[o]=null;
e=null;
});
}();
}
return{
registerObject:function(e,t,n,a){
if(X.w3&&e&&t){
var i={};
i.id=e,i.swfVersion=t,i.expressInstall=n,i.callbackFn=a,W[W.length]=i,C(e,!1);
}else a&&a({
success:!1,
id:e
});
},
getObjectById:function(e){
return X.w3?l(e):void 0;
},
embedSWF:function(e,t,a,i,r,o,l,d,f,p){
var v={
success:!1,
id:t
};
X.w3&&!(X.wk&&X.wk<312)&&e&&t&&a&&i&&r?(C(t,!1),n(function(){
a+="",i+="";
var n={};
if(f&&typeof f===B)for(var y in f)n[y]=f[y];
n.data=e,n.width=a,n.height=i;
var h={};
if(d&&typeof d===B)for(var m in d)h[m]=d[m];
if(l&&typeof l===B)for(var g in l)typeof h.flashvars!=k?h.flashvars+="&"+g+"="+l[g]:h.flashvars=g+"="+l[g];
if(w(r)){
var b=u(n,h,t);
n.id==t&&C(t,!0),v.success=!0,v.ref=b;
}else{
if(o&&s())return n.data=o,void c(n,h,t,p);
C(t,!0);
}
p&&p(v);
})):p&&p(v);
},
switchOffAutoHideShow:function(){
U=!1;
},
ua:X,
getFlashPlayerVersion:function(){
return{
major:X.pv[0],
minor:X.pv[1],
release:X.pv[2]
};
},
hasFlashPlayerVersion:w,
createSWF:function(e,t,n){
return X.w3?u(e,t,n):void 0;
},
showExpressInstall:function(e,t,n,a){
X.w3&&s()&&c(e,t,n,a);
},
removeSWF:function(e){
X.w3&&v(e);
},
createCSS:function(e,t,n,a){
X.w3&&b(e,t,n,a);
},
addDomLoadEvent:n,
addLoadEvent:a,
getQueryParamValue:function(e){
var t=V.location.search||V.location.hash;
if(t){
if(/\?/.test(t)&&(t=t.split("?")[1]),null==e)return E(t);
for(var n=t.split("&"),a=0;a<n.length;a++)if(n[a].substring(0,n[a].indexOf("="))==e)return E(n[a].substring(n[a].indexOf("=")+1));
}
return"";
},
expressInstallCallback:function(){
if(J){
var e=h($);
e&&S&&(e.parentNode.replaceChild(S,e),A&&(C(A,!0),X.ie&&X.win&&(S.style.display="block")),
N&&N(T)),J=!1;
}
}
};
}();
return e;
});define("biz_web/lib/video.js",[],function(require,exports,module){
function createMethod(t){
return function(){
throw new Error('The "'+t+"\" method is not available on the playback technology's API");
};
}
document.createElement("video"),document.createElement("audio"),document.createElement("track");
var vjs=function(t,e,s){
var n;
if("string"==typeof t){
if(0===t.indexOf("#")&&(t=t.slice(1)),vjs.players[t])return vjs.players[t];
n=vjs.el(t);
}else n=t;
if(!n||!n.nodeName)throw new TypeError("The element or ID supplied is not valid. (videojs)");
return n.player||new vjs.Player(n,e,s);
},videojs=vjs;
window.videojs=window.vjs=vjs,vjs.CDN_VERSION="4.1",vjs.ACCESS_PROTOCOL="https:"==document.location.protocol?"https://":"http://",
vjs.options={
techOrder:["html5","flash"],
html5:{},
flash:{},
width:300,
height:150,
defaultVolume:0,
children:{
mediaLoader:{},
posterImage:{},
textTrackDisplay:{},
loadingSpinner:{},
bigPlayButton:{},
controlBar:{}
}
},"GENERATED_CDN_VSN"!==vjs.CDN_VERSION&&(videojs.options.flash.swf=vjs.ACCESS_PROTOCOL+"vjs.zencdn.net/"+vjs.CDN_VERSION+"/video-js.swf"),
vjs.players={},vjs.CoreObject=vjs.CoreObject=function(){},vjs.CoreObject.extend=function(t){
var e,s;
t=t||{},e=t.init||t.init||this.prototype.init||this.prototype.init||function(){},
s=function(){
e.apply(this,arguments);
},s.prototype=vjs.obj.create(this.prototype),s.prototype.constructor=s,s.extend=vjs.CoreObject.extend,
s.create=vjs.CoreObject.create;
for(var n in t)t.hasOwnProperty(n)&&(s.prototype[n]=t[n]);
return s;
},vjs.CoreObject.create=function(){
var t=vjs.obj.create(this.prototype);
return this.apply(t,arguments),t;
},vjs.on=function(t,e,s){
var n=vjs.getData(t);
n.handlers||(n.handlers={}),n.handlers[e]||(n.handlers[e]=[]),s.guid||(s.guid=vjs.guid++),
n.handlers[e].push(s),n.dispatcher||(n.disabled=!1,n.dispatcher=function(e){
if(!n.disabled){
e=vjs.fixEvent(e);
var s=n.handlers[e.type];
if(s)for(var o=s.slice(0),i=0,r=o.length;r>i&&!e.isImmediatePropagationStopped();i++)o[i].call(t,e);
}
}),1==n.handlers[e].length&&(document.addEventListener?t.addEventListener(e,n.dispatcher,!1):document.attachEvent&&t.attachEvent("on"+e,n.dispatcher));
},vjs.off=function(t,e,s){
if(vjs.hasData(t)){
var n=vjs.getData(t);
if(n.handlers){
var o=function(e){
n.handlers[e]=[],vjs.cleanUpEvents(t,e);
};
if(e){
var i=n.handlers[e];
if(i){
if(!s)return void o(e);
if(s.guid)for(var r=0;r<i.length;r++)i[r].guid===s.guid&&i.splice(r--,1);
vjs.cleanUpEvents(t,e);
}
}else for(var a in n.handlers)o(a);
}
}
},vjs.cleanUpEvents=function(t,e){
var s=vjs.getData(t);
0===s.handlers[e].length&&(delete s.handlers[e],document.removeEventListener?t.removeEventListener(e,s.dispatcher,!1):document.detachEvent&&t.detachEvent("on"+e,s.dispatcher)),
vjs.isEmpty(s.handlers)&&(delete s.handlers,delete s.dispatcher,delete s.disabled),
vjs.isEmpty(s)&&vjs.removeData(t);
},vjs.fixEvent=function(t){
function e(){
return!0;
}
function s(){
return!1;
}
if(!t||!t.isPropagationStopped){
var n=t||window.event;
t={};
for(var o in n)"layerX"!==o&&"layerY"!==o&&(t[o]=n[o]);
if(t.target||(t.target=t.srcElement||document),t.relatedTarget=t.fromElement===t.target?t.toElement:t.fromElement,
t.preventDefault=function(){
n.preventDefault&&n.preventDefault(),t.returnValue=!1,t.isDefaultPrevented=e;
},t.isDefaultPrevented=s,t.stopPropagation=function(){
n.stopPropagation&&n.stopPropagation(),t.cancelBubble=!0,t.isPropagationStopped=e;
},t.isPropagationStopped=s,t.stopImmediatePropagation=function(){
n.stopImmediatePropagation&&n.stopImmediatePropagation(),t.isImmediatePropagationStopped=e,
t.stopPropagation();
},t.isImmediatePropagationStopped=s,null!=t.clientX){
var i=document.documentElement,r=document.body;
t.pageX=t.clientX+(i&&i.scrollLeft||r&&r.scrollLeft||0)-(i&&i.clientLeft||r&&r.clientLeft||0),
t.pageY=t.clientY+(i&&i.scrollTop||r&&r.scrollTop||0)-(i&&i.clientTop||r&&r.clientTop||0);
}
t.which=t.charCode||t.keyCode,null!=t.button&&(t.button=1&t.button?0:4&t.button?1:2&t.button?2:0);
}
return t;
},vjs.trigger=function(t,e){
var s=vjs.hasData(t)?vjs.getData(t):{},n=t.parentNode||t.ownerDocument;
if("string"==typeof e&&(e={
type:e,
target:t
}),e=vjs.fixEvent(e),s.dispatcher&&s.dispatcher.call(t,e),n&&!e.isPropagationStopped())vjs.trigger(n,e);else if(!n&&!e.isDefaultPrevented()){
var o=vjs.getData(e.target);
e.target[e.type]&&(o.disabled=!0,"function"==typeof e.target[e.type]&&e.target[e.type](),
o.disabled=!1);
}
return!e.isDefaultPrevented();
},vjs.one=function(t,e,s){
vjs.on(t,e,function(){
vjs.off(t,e,arguments.callee),s.apply(this,arguments);
});
};
var hasOwnProp=Object.prototype.hasOwnProperty;
vjs.createEl=function(t,e){
var s=document.createElement(t||"div");
for(var n in e)hasOwnProp.call(e,n)&&(-1!==n.indexOf("aria-")||"role"==n?s.setAttribute(n,e[n]):s[n]=e[n]);
return s;
},vjs.capitalize=function(t){
return t.charAt(0).toUpperCase()+t.slice(1);
},vjs.obj={},vjs.obj.create=Object.create||function(t){
function e(){}
return e.prototype=t,new e;
},vjs.obj.each=function(t,e,s){
for(var n in t)hasOwnProp.call(t,n)&&e.call(s||this,n,t[n]);
},vjs.obj.merge=function(t,e){
if(!e)return t;
for(var s in e)hasOwnProp.call(e,s)&&(t[s]=e[s]);
return t;
},vjs.obj.deepMerge=function(t,e){
var s,n,o,i;
i="[object Object]",t=vjs.obj.copy(t);
for(s in e)hasOwnProp.call(e,s)&&(n=t[s],o=e[s],t[s]=vjs.obj.isPlain(n)&&vjs.obj.isPlain(o)?vjs.obj.deepMerge(n,o):e[s]);
return t;
},vjs.obj.copy=function(t){
return vjs.obj.merge({},t);
},vjs.obj.isPlain=function(t){
return!!t&&"object"==typeof t&&"[object Object]"===t.toString()&&t.constructor===Object;
},vjs.bind=function(t,e,s){
e.guid||(e.guid=vjs.guid++);
var n=function(){
return e.apply(t,arguments);
};
return n.guid=s?s+"_"+e.guid:e.guid,n;
},vjs.cache={},vjs.guid=1,vjs.expando="vdata"+(new Date).getTime(),vjs.getData=function(t){
var e=t[vjs.expando];
return e||(e=t[vjs.expando]=vjs.guid++,vjs.cache[e]={}),vjs.cache[e];
},vjs.hasData=function(t){
var e=t[vjs.expando];
return!(!e||vjs.isEmpty(vjs.cache[e]));
},vjs.removeData=function(t){
var e=t[vjs.expando];
if(e){
delete vjs.cache[e];
try{
delete t[vjs.expando];
}catch(s){
t.removeAttribute?t.removeAttribute(vjs.expando):t[vjs.expando]=null;
}
}
},vjs.isEmpty=function(t){
for(var e in t)if(null!==t[e])return!1;
return!0;
},vjs.addClass=function(t,e){
-1==(" "+t.className+" ").indexOf(" "+e+" ")&&(t.className=""===t.className?e:t.className+" "+e);
},vjs.removeClass=function(t,e){
if(-1!=t.className.indexOf(e)){
for(var s=t.className.split(" "),n=s.length-1;n>=0;n--)s[n]===e&&s.splice(n,1);
t.className=s.join(" ");
}
},vjs.TEST_VID=vjs.createEl("video"),vjs.USER_AGENT=navigator.userAgent,vjs.IS_IPHONE=/iPhone/i.test(vjs.USER_AGENT),
vjs.IS_IPAD=/iPad/i.test(vjs.USER_AGENT),vjs.IS_IPOD=/iPod/i.test(vjs.USER_AGENT),
vjs.IS_IOS=vjs.IS_IPHONE||vjs.IS_IPAD||vjs.IS_IPOD,vjs.IOS_VERSION=function(){
var t=vjs.USER_AGENT.match(/OS (\d+)_/i);
return t&&t[1]?t[1]:void 0;
}(),vjs.IS_ANDROID=/Android/i.test(vjs.USER_AGENT),vjs.ANDROID_VERSION=function(){
var t,e,s=vjs.USER_AGENT.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
return s?(t=s[1]&&parseFloat(s[1]),e=s[2]&&parseFloat(s[2]),t&&e?parseFloat(s[1]+"."+s[2]):t?t:null):null;
}(),vjs.IS_OLD_ANDROID=vjs.IS_ANDROID&&/webkit/i.test(vjs.USER_AGENT)&&vjs.ANDROID_VERSION<2.3,
vjs.IS_FIREFOX=/Firefox/i.test(vjs.USER_AGENT),vjs.IS_CHROME=/Chrome/i.test(vjs.USER_AGENT),
vjs.getAttributeValues=function(t){
var e={},s=",autoplay,controls,loop,muted,default,";
if(t&&t.attributes&&t.attributes.length>0)for(var n,o,i=t.attributes,r=i.length-1;r>=0;r--)n=i[r].name,
o=i[r].value,("boolean"==typeof t[n]||-1!==s.indexOf(","+n+","))&&(o=null!==o?!0:!1),
e[n]=o;
return e;
},vjs.getComputedDimension=function(t,e){
var s="";
return document.defaultView&&document.defaultView.getComputedStyle?s=document.defaultView.getComputedStyle(t,"").getPropertyValue(e):t.currentStyle&&(s=t["client"+e.substr(0,1).toUpperCase()+e.substr(1)]+"px"),
s;
},vjs.insertFirst=function(t,e){
e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t);
},vjs.support={},vjs.el=function(t){
return 0===t.indexOf("#")&&(t=t.slice(1)),document.getElementById(t);
},vjs.formatTime=function(t,e){
e=e||t;
var s=Math.floor(t%60),n=Math.floor(t/60%60),o=Math.floor(t/3600),i=Math.floor(e/60%60),r=Math.floor(e/3600);
return o=o>0||r>0?o+":":"",n=((o||i>=10)&&10>n?"0"+n:n)+":",s=10>s?"0"+s:s,o+n+s;
},vjs.blockTextSelection=function(){
document.body.focus(),document.onselectstart=function(){
return!1;
};
},vjs.unblockTextSelection=function(){
document.onselectstart=function(){
return!0;
};
},vjs.trim=function(t){
return t.toString().replace(/^\s+/,"").replace(/\s+$/,"");
},vjs.round=function(t,e){
return e||(e=0),Math.round(t*Math.pow(10,e))/Math.pow(10,e);
},vjs.createTimeRange=function(t,e){
return{
length:1,
start:function(){
return t;
},
end:function(){
return e;
}
};
},vjs.get=function(t,e,s){
var n=0===t.indexOf("file:")||0===window.location.href.indexOf("file:")&&-1===t.indexOf("http");
"undefined"==typeof XMLHttpRequest&&(window.XMLHttpRequest=function(){
try{
return new window.ActiveXObject("Msxml2.XMLHTTP.6.0");
}catch(t){}
try{
return new window.ActiveXObject("Msxml2.XMLHTTP.3.0");
}catch(e){}
try{
return new window.ActiveXObject("Msxml2.XMLHTTP");
}catch(s){}
throw new Error("This browser does not support XMLHttpRequest.");
});
var o=new XMLHttpRequest;
try{
o.open("GET",t);
}catch(i){
s(i);
}
o.onreadystatechange=function(){
4===o.readyState&&(200===o.status||n&&0===o.status?e(o.responseText):s&&s());
};
try{
o.send();
}catch(i){
s&&s(i);
}
},vjs.setLocalStorage=function(t,e){
try{
var s=window.localStorage||!1;
if(!s)return;
s[t]=e;
}catch(n){
22==n.code||1014==n.code?vjs.log("LocalStorage Full (VideoJS)",n):18==n.code?vjs.log("LocalStorage not allowed (VideoJS)",n):vjs.log("LocalStorage Error (VideoJS)",n);
}
},vjs.getAbsoluteURL=function(t){
return t.match(/^https?:\/\//)||(t=vjs.createEl("div",{
innerHTML:'<a href="'+t+'">x</a>'
}).firstChild.href),t;
},vjs.log=function(){
vjs.log.history=vjs.log.history||[],vjs.log.history.push(arguments),window.console&&window.console.log(Array.prototype.slice.call(arguments));
},vjs.findPosition=function(t){
var e,s,n,o,i,r,a,l,c;
return t.getBoundingClientRect&&t.parentNode&&(e=t.getBoundingClientRect()),e?(s=document.documentElement,
n=document.body,o=s.clientLeft||n.clientLeft||0,i=window.pageXOffset||n.scrollLeft,
r=e.left+i-o,a=s.clientTop||n.clientTop||0,l=window.pageYOffset||n.scrollTop,c=e.top+l-a,
{
left:r,
top:c
}):{
left:0,
top:0
};
},vjs.Component=vjs.CoreObject.extend({
init:function(t,e,s){
this.player_=t,this.options_=vjs.obj.copy(this.options_),e=this.options(e),this.id_=e.id||(e.el&&e.el.id?e.el.id:t.id()+"_component_"+vjs.guid++),
this.name_=e.name||null,this.el_=e.el||this.createEl(),this.children_=[],this.childIndex_={},
this.childNameIndex_={},this.initChildren(),this.ready(s);
}
}),vjs.Component.prototype.dispose=function(){
if(this.children_)for(var t=this.children_.length-1;t>=0;t--)this.children_[t].dispose&&this.children_[t].dispose();
this.children_=null,this.childIndex_=null,this.childNameIndex_=null,this.off(),this.el_.parentNode&&this.el_.parentNode.removeChild(this.el_),
vjs.removeData(this.el_),this.el_=null;
},vjs.Component.prototype.player_,vjs.Component.prototype.player=function(){
return this.player_;
},vjs.Component.prototype.options_,vjs.Component.prototype.options=function(t){
return void 0===t?this.options_:this.options_=vjs.obj.deepMerge(this.options_,t);
},vjs.Component.prototype.el_,vjs.Component.prototype.createEl=function(t,e){
return vjs.createEl(t,e);
},vjs.Component.prototype.el=function(){
return this.el_;
},vjs.Component.prototype.contentEl_,vjs.Component.prototype.contentEl=function(){
return this.contentEl_||this.el_;
},vjs.Component.prototype.id_,vjs.Component.prototype.id=function(){
return this.id_;
},vjs.Component.prototype.name_,vjs.Component.prototype.name=function(){
return this.name_;
},vjs.Component.prototype.children_,vjs.Component.prototype.children=function(){
return this.children_;
},vjs.Component.prototype.childIndex_,vjs.Component.prototype.getChildById=function(t){
return this.childIndex_[t];
},vjs.Component.prototype.childNameIndex_,vjs.Component.prototype.getChild=function(t){
return this.childNameIndex_[t];
},vjs.Component.prototype.addChild=function(t,e){
var s,n,o;
return"string"==typeof t?(o=t,e=e||{},n=e.componentClass||vjs.capitalize(o),e.name=o,
s=new window.videojs[n](this.player_||this,e)):s=t,this.children_.push(s),"function"==typeof s.id&&(this.childIndex_[s.id()]=s),
o=o||s.name&&s.name(),o&&(this.childNameIndex_[o]=s),"function"==typeof s.el&&s.el()&&this.contentEl().appendChild(s.el()),
s;
},vjs.Component.prototype.removeChild=function(t){
if("string"==typeof t&&(t=this.getChild(t)),t&&this.children_){
for(var e=!1,s=this.children_.length-1;s>=0;s--)if(this.children_[s]===t){
e=!0,this.children_.splice(s,1);
break;
}
if(e){
this.childIndex_[t.id]=null,this.childNameIndex_[t.name]=null;
var n=t.el();
n&&n.parentNode===this.contentEl()&&this.contentEl().removeChild(t.el());
}
}
},vjs.Component.prototype.initChildren=function(){
var t=this.options_;
if(t&&t.children){
var e=this;
vjs.obj.each(t.children,function(t,s){
if(s!==!1){
var n=function(){
e[t]=e.addChild(t,s);
};
s.loadEvent||n();
}
});
}
},vjs.Component.prototype.buildCSSClass=function(){
return"";
},vjs.Component.prototype.on=function(t,e){
return vjs.on(this.el_,t,vjs.bind(this,e)),this;
},vjs.Component.prototype.off=function(t,e){
return vjs.off(this.el_,t,e),this;
},vjs.Component.prototype.one=function(t,e){
return vjs.one(this.el_,t,vjs.bind(this,e)),this;
},vjs.Component.prototype.trigger=function(t,e){
return vjs.trigger(this.el_,t,e),this;
},vjs.Component.prototype.isReady_,vjs.Component.prototype.isReadyOnInitFinish_=!0,
vjs.Component.prototype.readyQueue_,vjs.Component.prototype.ready=function(t){
return t&&(this.isReady_?t.call(this):(void 0===this.readyQueue_&&(this.readyQueue_=[]),
this.readyQueue_.push(t))),this;
},vjs.Component.prototype.triggerReady=function(){
this.isReady_=!0;
var t=this.readyQueue_;
if(t&&t.length>0){
for(var e=0,s=t.length;s>e;e++)t[e].call(this);
this.readyQueue_=[],this.trigger("ready");
}
},vjs.Component.prototype.addClass=function(t){
return vjs.addClass(this.el_,t),this;
},vjs.Component.prototype.removeClass=function(t){
return vjs.removeClass(this.el_,t),this;
},vjs.Component.prototype.show=function(){
return this.el_.style.display="block",this;
},vjs.Component.prototype.hide=function(){
return this.el_.style.display="none",this;
},vjs.Component.prototype.fadeIn=function(){
return this.removeClass("vjs-fade-out"),this.addClass("vjs-fade-in"),this;
},vjs.Component.prototype.fadeOut=function(){
return this.removeClass("vjs-fade-in"),this.addClass("vjs-fade-out"),this;
},vjs.Component.prototype.lockShowing=function(){
return this.addClass("vjs-lock-showing"),this;
},vjs.Component.prototype.unlockShowing=function(){
return this.removeClass("vjs-lock-showing"),this;
},vjs.Component.prototype.disable=function(){
this.hide(),this.show=function(){},this.fadeIn=function(){};
},vjs.Component.prototype.width=function(t,e){
return this.dimension("width",t,e);
},vjs.Component.prototype.height=function(t,e){
return this.dimension("height",t,e);
},vjs.Component.prototype.dimensions=function(t,e){
return this.width(t,!0).height(e);
},vjs.Component.prototype.dimension=function(t,e,s){
if(void 0!==e)return this.el_.style[t]=-1!==(""+e).indexOf("%")||-1!==(""+e).indexOf("px")?e:"auto"===e?"":e+"px",
s||this.trigger("resize"),this;
if(!this.el_)return 0;
var n=this.el_.style[t],o=n.indexOf("px");
return-1!==o?parseInt(n.slice(0,o),10):parseInt(this.el_["offset"+vjs.capitalize(t)],10);
},vjs.Button=vjs.Component.extend({
init:function(t,e){
vjs.Component.call(this,t,e);
var s=!1;
this.on("touchstart",function(){
s=!0;
}),this.on("touchmove",function(){
s=!1;
});
var n=this;
this.on("touchend",function(t){
s&&n.onClick(t),t.preventDefault(),t.stopPropagation();
}),this.on("click",this.onClick),this.on("focus",this.onFocus),this.on("blur",this.onBlur);
}
}),vjs.Button.prototype.createEl=function(t,e){
return e=vjs.obj.merge({
className:this.buildCSSClass(),
innerHTML:'<div class="vjs-control-content"><span class="vjs-control-text">'+(this.buttonText||"Need Text")+"</span></div>",
role:"button",
"aria-live":"polite",
tabIndex:0
},e),vjs.Component.prototype.createEl.call(this,t,e);
},vjs.Button.prototype.buildCSSClass=function(){
return"vjs-control "+vjs.Component.prototype.buildCSSClass.call(this);
},vjs.Button.prototype.onClick=function(){},vjs.Button.prototype.onFocus=function(){
vjs.on(document,"keyup",vjs.bind(this,this.onKeyPress));
},vjs.Button.prototype.onKeyPress=function(t){
(32==t.which||13==t.which)&&(t.preventDefault(),this.onClick());
},vjs.Button.prototype.onBlur=function(){
vjs.off(document,"keyup",vjs.bind(this,this.onKeyPress));
},vjs.Slider=vjs.Component.extend({
init:function(t,e){
vjs.Component.call(this,t,e),this.bar=this.getChild(this.options_.barName),this.handle=this.getChild(this.options_.handleName),
t.on(this.playerEvent,vjs.bind(this,this.update)),this.on("mousedown",this.onMouseDown),
this.on("touchstart",this.onMouseDown),this.on("focus",this.onFocus),this.on("blur",this.onBlur),
this.on("click",this.onClick),this.player_.on("controlsvisible",vjs.bind(this,this.update)),
t.ready(vjs.bind(this,this.update)),this.boundEvents={};
}
}),vjs.Slider.prototype.createEl=function(t,e){
return e=e||{},e.className=e.className+" vjs-slider",e=vjs.obj.merge({
role:"slider",
"aria-valuenow":0,
"aria-valuemin":0,
"aria-valuemax":100,
tabIndex:0
},e),vjs.Component.prototype.createEl.call(this,t,e);
},vjs.Slider.prototype.onMouseDown=function(t){
t.preventDefault(),vjs.blockTextSelection(),this.boundEvents.move=vjs.bind(this,this.onMouseMove),
this.boundEvents.end=vjs.bind(this,this.onMouseUp),vjs.on(document,"mousemove",this.boundEvents.move),
vjs.on(document,"mouseup",this.boundEvents.end),vjs.on(document,"touchmove",this.boundEvents.move),
vjs.on(document,"touchend",this.boundEvents.end),this.onMouseMove(t);
},vjs.Slider.prototype.onMouseUp=function(){
vjs.unblockTextSelection(),vjs.off(document,"mousemove",this.boundEvents.move,!1),
vjs.off(document,"mouseup",this.boundEvents.end,!1),vjs.off(document,"touchmove",this.boundEvents.move,!1),
vjs.off(document,"touchend",this.boundEvents.end,!1),this.update();
},vjs.Slider.prototype.update=function(){
if(this.el_){
var t,e=this.getPercent(),s=this.handle,n=this.bar;
if(isNaN(e)&&(e=0),t=e,s){
var o=this.el_,i=o.offsetWidth,r=s.el().offsetWidth,a=r?r/i:0,l=1-a,c=e*l;
t=c+a/2,s.el().style.left=vjs.round(100*c,2)+"%";
}
n.el().style.width=vjs.round(100*t,2)+"%";
}
},vjs.Slider.prototype.calculateDistance=function(t){
var e,s,n,o,i,r,a,l,c;
if(e=this.el_,s=vjs.findPosition(e),i=r=e.offsetWidth,a=this.handle,this.options_.vertical){
if(o=s.top,c=t.changedTouches?t.changedTouches[0].pageY:t.pageY,a){
var u=a.el().offsetHeight;
o+=u/2,r-=u;
}
return Math.max(0,Math.min(1,(o-c+r)/r));
}
if(n=s.left,l=t.changedTouches?t.changedTouches[0].pageX:t.pageX,a){
var p=a.el().offsetWidth;
n+=p/2,i-=p;
}
return Math.max(0,Math.min(1,(l-n)/i));
},vjs.Slider.prototype.onFocus=function(){
vjs.on(document,"keyup",vjs.bind(this,this.onKeyPress));
},vjs.Slider.prototype.onKeyPress=function(t){
37==t.which?(t.preventDefault(),this.stepBack()):39==t.which&&(t.preventDefault(),
this.stepForward());
},vjs.Slider.prototype.onBlur=function(){
vjs.off(document,"keyup",vjs.bind(this,this.onKeyPress));
},vjs.Slider.prototype.onClick=function(t){
t.stopImmediatePropagation(),t.preventDefault();
},vjs.SliderHandle=vjs.Component.extend(),vjs.SliderHandle.prototype.defaultValue=0,
vjs.SliderHandle.prototype.createEl=function(t,e){
return e=e||{},e.className=e.className+" vjs-slider-handle",e=vjs.obj.merge({
innerHTML:'<span class="vjs-control-text">'+this.defaultValue+"</span>"
},e),vjs.Component.prototype.createEl.call(this,"div",e);
},vjs.Menu=vjs.Component.extend(),vjs.Menu.prototype.addItem=function(t){
this.addChild(t),t.on("click",vjs.bind(this,function(){
this.unlockShowing();
}));
},vjs.Menu.prototype.createEl=function(){
var t=this.options().contentElType||"ul";
this.contentEl_=vjs.createEl(t,{
className:"vjs-menu-content"
});
var e=vjs.Component.prototype.createEl.call(this,"div",{
append:this.contentEl_,
className:"vjs-menu"
});
return e.appendChild(this.contentEl_),vjs.on(e,"click",function(t){
t.preventDefault(),t.stopImmediatePropagation();
}),e;
},vjs.MenuItem=vjs.Button.extend({
init:function(t,e){
vjs.Button.call(this,t,e),this.selected(e.selected);
}
}),vjs.MenuItem.prototype.createEl=function(t,e){
return vjs.Button.prototype.createEl.call(this,"li",vjs.obj.merge({
className:"vjs-menu-item",
innerHTML:this.options_.label
},e));
},vjs.MenuItem.prototype.onClick=function(){
this.selected(!0);
},vjs.MenuItem.prototype.selected=function(t){
t?(this.addClass("vjs-selected"),this.el_.setAttribute("aria-selected",!0)):(this.removeClass("vjs-selected"),
this.el_.setAttribute("aria-selected",!1));
},vjs.MenuButton=vjs.Button.extend({
init:function(t,e){
vjs.Button.call(this,t,e),this.menu=this.createMenu(),this.addChild(this.menu),this.items&&0===this.items.length&&this.hide(),
this.on("keyup",this.onKeyPress),this.el_.setAttribute("aria-haspopup",!0),this.el_.setAttribute("role","button");
}
}),vjs.MenuButton.prototype.buttonPressed_=!1,vjs.MenuButton.prototype.createMenu=function(){
var t=new vjs.Menu(this.player_);
if(this.options().title&&t.el().appendChild(vjs.createEl("li",{
className:"vjs-menu-title",
innerHTML:vjs.capitalize(this.kind_),
tabindex:-1
})),this.items=this.createItems(),this.items)for(var e=0;e<this.items.length;e++)t.addItem(this.items[e]);
return t;
},vjs.MenuButton.prototype.createItems=function(){},vjs.MenuButton.prototype.buildCSSClass=function(){
return this.className+" vjs-menu-button "+vjs.Button.prototype.buildCSSClass.call(this);
},vjs.MenuButton.prototype.onFocus=function(){},vjs.MenuButton.prototype.onBlur=function(){},
vjs.MenuButton.prototype.onClick=function(){
this.one("mouseout",vjs.bind(this,function(){
this.menu.unlockShowing(),this.el_.blur();
})),this.buttonPressed_?this.unpressButton():this.pressButton();
},vjs.MenuButton.prototype.onKeyPress=function(t){
t.preventDefault(),32==t.which||13==t.which?this.buttonPressed_?this.unpressButton():this.pressButton():27==t.which&&this.buttonPressed_&&this.unpressButton();
},vjs.MenuButton.prototype.pressButton=function(){
this.buttonPressed_=!0,this.menu.lockShowing(),this.el_.setAttribute("aria-pressed",!0),
this.items&&this.items.length>0&&this.items[0].el().focus();
},vjs.MenuButton.prototype.unpressButton=function(){
this.buttonPressed_=!1,this.menu.unlockShowing(),this.el_.setAttribute("aria-pressed",!1);
},vjs.Player=vjs.Component.extend({
init:function(t,e,s){
this.tag=t,e=vjs.obj.merge(this.getTagSettings(t),e),this.cache_={},this.poster_=e.poster,
this.controls_=e.controls,e.customControlsOnMobile!==!0&&(vjs.IS_IOS||vjs.IS_ANDROID)?(t.controls=e.controls,
this.controls_=!1):t.controls=!1,vjs.Component.call(this,this,e,s),this.one("play",function(t){
var e={
type:"firstplay",
target:this.el_
},s=vjs.trigger(this.el_,e);
s||(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation());
}),this.on("ended",this.onEnded),this.on("play",this.onPlay),this.on("firstplay",this.onFirstPlay),
this.on("pause",this.onPause),this.on("progress",this.onProgress),this.on("durationchange",this.onDurationChange),
this.on("error",this.onError),this.on("fullscreenchange",this.onFullscreenChange),
vjs.players[this.id_]=this,e.plugins&&vjs.obj.each(e.plugins,function(t,e){
this[t](e);
},this);
}
}),vjs.Player.prototype.options_=vjs.options,vjs.Player.prototype.dispose=function(){
vjs.players[this.id_]=null,this.tag&&this.tag.player&&(this.tag.player=null),this.el_&&this.el_.player&&(this.el_.player=null),
this.stopTrackingProgress(),this.stopTrackingCurrentTime(),this.tech&&this.tech.dispose(),
vjs.Component.prototype.dispose.call(this);
},vjs.Player.prototype.getTagSettings=function(t){
var e={
sources:[],
tracks:[]
};
if(vjs.obj.merge(e,vjs.getAttributeValues(t)),t.hasChildNodes()){
var s,n,o,i,r;
for(s=t.childNodes,i=0,r=s.length;r>i;i++)n=s[i],o=n.nodeName.toLowerCase(),"source"===o?e.sources.push(vjs.getAttributeValues(n)):"track"===o&&e.tracks.push(vjs.getAttributeValues(n));
}
return e;
},vjs.Player.prototype.createEl=function(){
var t=this.el_=vjs.Component.prototype.createEl.call(this,"div"),e=this.tag;
if(e.removeAttribute("width"),e.removeAttribute("height"),e.hasChildNodes()){
var s,n,o,i,r,a;
for(s=e.childNodes,n=s.length,a=[];n--;)i=s[n],r=i.nodeName.toLowerCase(),("source"===r||"track"===r)&&a.push(i);
for(o=0;o<a.length;o++)e.removeChild(a[o]);
}
return e.id=e.id||"vjs_video_"+vjs.guid++,t.id=e.id,t.className=e.className,e.id+="_html5_api",
e.className="vjs-tech",e.player=t.player=this,this.addClass("vjs-paused"),this.width(this.options_.width,!0),
this.height(this.options_.height,!0),e.parentNode&&e.parentNode.insertBefore(t,e),
vjs.insertFirst(e,t),t;
},vjs.Player.prototype.loadTech=function(t,e){
this.tech?this.unloadTech():"Html5"!==t&&this.tag&&(this.el_.removeChild(this.tag),
this.tag.player=null,this.tag=null),this.techName=t,this.isReady_=!1;
var s=function(){
this.player_.triggerReady(),this.features.progressEvents||this.player_.manualProgressOn(),
this.features.timeupdateEvents||this.player_.manualTimeUpdatesOn();
},n=vjs.obj.merge({
source:e,
parentEl:this.el_
},this.options_[t.toLowerCase()]);
e&&(e.src==this.cache_.src&&this.cache_.currentTime>0&&(n.startTime=this.cache_.currentTime),
this.cache_.src=e.src),this.tech=new window.videojs[t](this,n),this.tech.ready(s);
},vjs.Player.prototype.unloadTech=function(){
this.isReady_=!1,this.tech.dispose(),this.manualProgress&&this.manualProgressOff(),
this.manualTimeUpdates&&this.manualTimeUpdatesOff(),this.tech=!1;
},vjs.Player.prototype.manualProgressOn=function(){
this.manualProgress=!0,this.trackProgress(),this.tech.one("progress",function(){
this.features.progressEvents=!0,this.player_.manualProgressOff();
});
},vjs.Player.prototype.manualProgressOff=function(){
this.manualProgress=!1,this.stopTrackingProgress();
},vjs.Player.prototype.trackProgress=function(){
this.progressInterval=setInterval(vjs.bind(this,function(){
this.cache_.bufferEnd<this.buffered().end(0)?this.trigger("progress"):1==this.bufferedPercent()&&(this.stopTrackingProgress(),
this.trigger("progress"));
}),500);
},vjs.Player.prototype.stopTrackingProgress=function(){
clearInterval(this.progressInterval);
},vjs.Player.prototype.manualTimeUpdatesOn=function(){
this.manualTimeUpdates=!0,this.on("play",this.trackCurrentTime),this.on("pause",this.stopTrackingCurrentTime),
this.tech.one("timeupdate",function(){
this.features.timeupdateEvents=!0,this.player_.manualTimeUpdatesOff();
});
},vjs.Player.prototype.manualTimeUpdatesOff=function(){
this.manualTimeUpdates=!1,this.stopTrackingCurrentTime(),this.off("play",this.trackCurrentTime),
this.off("pause",this.stopTrackingCurrentTime);
},vjs.Player.prototype.trackCurrentTime=function(){
this.currentTimeInterval&&this.stopTrackingCurrentTime(),this.currentTimeInterval=setInterval(vjs.bind(this,function(){
this.trigger("timeupdate");
}),250);
},vjs.Player.prototype.stopTrackingCurrentTime=function(){
clearInterval(this.currentTimeInterval);
},vjs.Player.prototype.onEnded=function(){
this.options_.loop&&(this.currentTime(0),this.play());
},vjs.Player.prototype.onPlay=function(){
vjs.removeClass(this.el_,"vjs-paused"),vjs.addClass(this.el_,"vjs-playing");
},vjs.Player.prototype.onFirstPlay=function(){
this.options_.starttime&&this.currentTime(this.options_.starttime);
},vjs.Player.prototype.onPause=function(){
vjs.removeClass(this.el_,"vjs-playing"),vjs.addClass(this.el_,"vjs-paused");
},vjs.Player.prototype.onProgress=function(){
1==this.bufferedPercent()&&this.trigger("loadedalldata");
},vjs.Player.prototype.onDurationChange=function(){
this.duration(this.techGet("duration"));
},vjs.Player.prototype.onError=function(t){
vjs.log("Video Error",t);
},vjs.Player.prototype.onFullscreenChange=function(){
this.isFullScreen?this.addClass("vjs-fullscreen"):this.removeClass("vjs-fullscreen");
},vjs.Player.prototype.cache_,vjs.Player.prototype.getCache=function(){
return this.cache_;
},vjs.Player.prototype.techCall=function(t,e){
if(this.tech&&!this.tech.isReady_)this.tech.ready(function(){
this[t](e);
});else try{
this.tech[t](e);
}catch(s){
throw vjs.log(s),s;
}
},vjs.Player.prototype.techGet=function(t){
if(this.tech.isReady_)try{
return this.tech[t]();
}catch(e){
throw void 0===this.tech[t]?vjs.log("Video.js: "+t+" method not defined for "+this.techName+" playback technology.",e):"TypeError"==e.name?(vjs.log("Video.js: "+t+" unavailable on "+this.techName+" playback technology element.",e),
this.tech.isReady_=!1):vjs.log(e),e;
}
},vjs.Player.prototype.play=function(){
return this.techCall("play"),this;
},vjs.Player.prototype.pause=function(){
return this.techCall("pause"),this;
},vjs.Player.prototype.paused=function(){
return this.techGet("paused")===!1?!1:!0;
},vjs.Player.prototype.currentTime=function(t){
return void 0!==t?(this.cache_.lastSetCurrentTime=t,this.techCall("setCurrentTime",t),
this.manualTimeUpdates&&this.trigger("timeupdate"),this):this.cache_.currentTime=this.techGet("currentTime")||0;
},vjs.Player.prototype.duration=function(t){
return void 0!==t?(this.cache_.duration=parseFloat(t),this):this.cache_.duration;
},vjs.Player.prototype.remainingTime=function(){
return this.duration()-this.currentTime();
},vjs.Player.prototype.buffered=function(){
var t=this.techGet("buffered"),e=0,s=this.cache_.bufferEnd=this.cache_.bufferEnd||0;
return t&&t.length>0&&t.end(0)!==s&&(s=t.end(0),this.cache_.bufferEnd=s),vjs.createTimeRange(e,s);
},vjs.Player.prototype.bufferedPercent=function(){
return this.duration()?this.buffered().end(0)/this.duration():0;
},vjs.Player.prototype.volume=function(t){
var e;
return void 0!==t?(e=Math.max(0,Math.min(1,parseFloat(t))),this.cache_.volume=e,
this.techCall("setVolume",e),vjs.setLocalStorage("volume",e),this):(e=parseFloat(this.techGet("volume")),
isNaN(e)?1:e);
},vjs.Player.prototype.muted=function(t){
return void 0!==t?(this.techCall("setMuted",t),this):this.techGet("muted")||!1;
},vjs.Player.prototype.supportsFullScreen=function(){
return this.techGet("supportsFullScreen")||!1;
},vjs.Player.prototype.requestFullScreen=function(){
var t=vjs.support.requestFullScreen;
return this.isFullScreen=!0,t?(vjs.on(document,t.eventName,vjs.bind(this,function(){
this.isFullScreen=document[t.isFullScreen],this.isFullScreen===!1&&vjs.off(document,t.eventName,arguments.callee),
this.trigger("fullscreenchange");
})),this.el_[t.requestFn]()):this.tech.supportsFullScreen()?this.techCall("enterFullScreen"):(this.enterFullWindow(),
this.trigger("fullscreenchange")),this;
},vjs.Player.prototype.cancelFullScreen=function(){
var t=vjs.support.requestFullScreen;
return this.isFullScreen=!1,t?document[t.cancelFn]():this.tech.supportsFullScreen()?this.techCall("exitFullScreen"):(this.exitFullWindow(),
this.trigger("fullscreenchange")),this;
},vjs.Player.prototype.enterFullWindow=function(){
this.isFullWindow=!0,this.docOrigOverflow=document.documentElement.style.overflow,
vjs.on(document,"keydown",vjs.bind(this,this.fullWindowOnEscKey)),document.documentElement.style.overflow="hidden",
vjs.addClass(document.body,"vjs-full-window"),this.trigger("enterFullWindow");
},vjs.Player.prototype.fullWindowOnEscKey=function(t){
27===t.keyCode&&(this.isFullScreen===!0?this.cancelFullScreen():this.exitFullWindow());
},vjs.Player.prototype.exitFullWindow=function(){
this.isFullWindow=!1,vjs.off(document,"keydown",this.fullWindowOnEscKey),document.documentElement.style.overflow=this.docOrigOverflow,
vjs.removeClass(document.body,"vjs-full-window"),this.trigger("exitFullWindow");
},vjs.Player.prototype.selectSource=function(t){
for(var e=0,s=this.options_.techOrder;e<s.length;e++){
var n=vjs.capitalize(s[e]),o=window.videojs[n];
if(o.isSupported())for(var i=0,r=t;i<r.length;i++){
var a=r[i];
if(o.canPlaySource(a))return{
source:a,
tech:n
};
}
}
return!1;
},vjs.Player.prototype.src=function(t){
if(t instanceof Array){
var e,s=this.selectSource(t);
s?(t=s.source,e=s.tech,e==this.techName?this.src(t):this.loadTech(e,t)):this.el_.appendChild(vjs.createEl("p",{
innerHTML:'Sorry, no compatible source and playback technology were found for this video. Try using another browser like <a href="http://bit.ly/ccMUEC">Chrome</a> or download the latest <a href="http://adobe.ly/mwfN1">Adobe Flash Player</a>.'
}));
}else t instanceof Object?this.src(window.videojs[this.techName].canPlaySource(t)?t.src:[t]):(this.cache_.src=t,
this.isReady_?(this.techCall("src",t),"auto"==this.options_.preload&&this.load(),
this.options_.autoplay&&this.play()):this.ready(function(){
this.src(t);
}));
return this;
},vjs.Player.prototype.load=function(){
return this.techCall("load"),this;
},vjs.Player.prototype.currentSrc=function(){
return this.techGet("currentSrc")||this.cache_.src||"";
},vjs.Player.prototype.preload=function(t){
return void 0!==t?(this.techCall("setPreload",t),this.options_.preload=t,this):this.techGet("preload");
},vjs.Player.prototype.autoplay=function(t){
return void 0!==t?(this.techCall("setAutoplay",t),this.options_.autoplay=t,this):this.techGet("autoplay",t);
},vjs.Player.prototype.loop=function(t){
return void 0!==t?(this.techCall("setLoop",t),this.options_.loop=t,this):this.techGet("loop");
},vjs.Player.prototype.poster_,vjs.Player.prototype.poster=function(t){
return void 0!==t&&(this.poster_=t),this.poster_;
},vjs.Player.prototype.controls_,vjs.Player.prototype.controls=function(t){
return void 0!==t&&this.controls_!==t&&(this.controls_=!!t,this.trigger("controlschange")),
this.controls_;
},vjs.Player.prototype.error=function(){
return this.techGet("error");
},vjs.Player.prototype.ended=function(){
return this.techGet("ended");
},function(){
var t,e,s;
s=document.createElement("div"),e={},void 0!==s.cancelFullscreen?(e.requestFn="requestFullscreen",
e.cancelFn="exitFullscreen",e.eventName="fullscreenchange",e.isFullScreen="fullScreen"):(document.mozCancelFullScreen?(t="moz",
e.isFullScreen=t+"FullScreen"):(t="webkit",e.isFullScreen=t+"IsFullScreen"),s[t+"RequestFullScreen"]&&(e.requestFn=t+"RequestFullScreen",
e.cancelFn=t+"CancelFullScreen"),e.eventName=t+"fullscreenchange"),document[e.cancelFn]&&(vjs.support.requestFullScreen=e);
}(),vjs.ControlBar=vjs.Component.extend({
init:function(t,e){
vjs.Component.call(this,t,e),t.controls()||this.disable(),t.one("play",vjs.bind(this,function(){
var t,e=vjs.bind(this,this.fadeIn),s=vjs.bind(this,this.fadeOut);
this.fadeIn(),"ontouchstart"in window||(this.player_.on("mouseover",e),this.player_.on("mouseout",s),
this.player_.on("pause",vjs.bind(this,this.lockShowing)),this.player_.on("play",vjs.bind(this,this.unlockShowing))),
t=!1,this.player_.on("touchstart",function(){
t=!0;
}),this.player_.on("touchmove",function(){
t=!1;
}),this.player_.on("touchend",vjs.bind(this,function(e){
var s;
t&&(s=this.el().className.search("fade-in"),-1!==s?this.fadeOut():this.fadeIn()),
t=!1,this.player_.paused()||e.preventDefault();
}));
}));
}
}),vjs.ControlBar.prototype.options_={
loadEvent:"play",
children:{
playToggle:{},
currentTimeDisplay:{},
timeDivider:{},
durationDisplay:{},
remainingTimeDisplay:{},
progressControl:{},
fullscreenToggle:{},
volumeControl:{},
muteToggle:{}
}
},vjs.ControlBar.prototype.createEl=function(){
return vjs.createEl("div",{
className:"vjs-control-bar"
});
},vjs.ControlBar.prototype.fadeIn=function(){
vjs.Component.prototype.fadeIn.call(this),this.player_.trigger("controlsvisible");
},vjs.ControlBar.prototype.fadeOut=function(){
vjs.Component.prototype.fadeOut.call(this),this.player_.trigger("controlshidden");
},vjs.PlayToggle=vjs.Button.extend({
init:function(t,e){
vjs.Button.call(this,t,e),t.on("play",vjs.bind(this,this.onPlay)),t.on("pause",vjs.bind(this,this.onPause));
}
}),vjs.PlayToggle.prototype.buttonText="Play",vjs.PlayToggle.prototype.buildCSSClass=function(){
return"vjs-play-control "+vjs.Button.prototype.buildCSSClass.call(this);
},vjs.PlayToggle.prototype.onClick=function(){
this.player_.paused()?this.player_.play():this.player_.pause();
},vjs.PlayToggle.prototype.onPlay=function(){
vjs.removeClass(this.el_,"vjs-paused"),vjs.addClass(this.el_,"vjs-playing"),this.el_.children[0].children[0].innerHTML="Pause";
},vjs.PlayToggle.prototype.onPause=function(){
vjs.removeClass(this.el_,"vjs-playing"),vjs.addClass(this.el_,"vjs-paused"),this.el_.children[0].children[0].innerHTML="Play";
},vjs.CurrentTimeDisplay=vjs.Component.extend({
init:function(t,e){
vjs.Component.call(this,t,e),t.on("timeupdate",vjs.bind(this,this.updateContent));
}
}),vjs.CurrentTimeDisplay.prototype.createEl=function(){
var t=vjs.Component.prototype.createEl.call(this,"div",{
className:"vjs-current-time vjs-time-controls vjs-control"
});
return this.content=vjs.createEl("div",{
className:"vjs-current-time-display",
innerHTML:'<span class="vjs-control-text">Current Time </span>0:00',
"aria-live":"off"
}),t.appendChild(vjs.createEl("div").appendChild(this.content)),t;
},vjs.CurrentTimeDisplay.prototype.updateContent=function(){
var t=this.player_.scrubbing?this.player_.getCache().currentTime:this.player_.currentTime();
this.content.innerHTML='<span class="vjs-control-text">Current Time </span>'+vjs.formatTime(t,this.player_.duration());
},vjs.DurationDisplay=vjs.Component.extend({
init:function(t,e){
vjs.Component.call(this,t,e),t.on("timeupdate",vjs.bind(this,this.updateContent));
}
}),vjs.DurationDisplay.prototype.createEl=function(){
var t=vjs.Component.prototype.createEl.call(this,"div",{
className:"vjs-duration vjs-time-controls vjs-control"
});
return this.content=vjs.createEl("div",{
className:"vjs-duration-display",
innerHTML:'<span class="vjs-control-text">Duration Time </span>0:00',
"aria-live":"off"
}),t.appendChild(vjs.createEl("div").appendChild(this.content)),t;
},vjs.DurationDisplay.prototype.updateContent=function(){
this.player_.duration()&&(this.content.innerHTML='<span class="vjs-control-text">Duration Time </span>'+vjs.formatTime(this.player_.duration()));
},vjs.TimeDivider=vjs.Component.extend({
init:function(t,e){
vjs.Component.call(this,t,e);
}
}),vjs.TimeDivider.prototype.createEl=function(){
return vjs.Component.prototype.createEl.call(this,"div",{
className:"vjs-time-divider",
innerHTML:"<div><span>/</span></div>"
});
},vjs.RemainingTimeDisplay=vjs.Component.extend({
init:function(t,e){
vjs.Component.call(this,t,e),t.on("timeupdate",vjs.bind(this,this.updateContent));
}
}),vjs.RemainingTimeDisplay.prototype.createEl=function(){
var t=vjs.Component.prototype.createEl.call(this,"div",{
className:"vjs-remaining-time vjs-time-controls vjs-control"
});
return this.content=vjs.createEl("div",{
className:"vjs-remaining-time-display",
innerHTML:'<span class="vjs-control-text">Remaining Time </span>-0:00',
"aria-live":"off"
}),t.appendChild(vjs.createEl("div").appendChild(this.content)),t;
},vjs.RemainingTimeDisplay.prototype.updateContent=function(){
this.player_.duration()&&this.player_.duration()&&(this.content.innerHTML='<span class="vjs-control-text">Remaining Time </span>-'+vjs.formatTime(this.player_.remainingTime()));
},vjs.FullscreenToggle=vjs.Button.extend({
init:function(t,e){
vjs.Button.call(this,t,e);
}
}),vjs.FullscreenToggle.prototype.buttonText="Fullscreen",vjs.FullscreenToggle.prototype.buildCSSClass=function(){
return"vjs-fullscreen-control "+vjs.Button.prototype.buildCSSClass.call(this);
},vjs.FullscreenToggle.prototype.onClick=function(){
this.player_.isFullScreen?(this.player_.cancelFullScreen(),this.el_.children[0].children[0].innerHTML="Fullscreen"):(this.player_.requestFullScreen(),
this.el_.children[0].children[0].innerHTML="Non-Fullscreen");
},vjs.ProgressControl=vjs.Component.extend({
init:function(t,e){
vjs.Component.call(this,t,e);
}
}),vjs.ProgressControl.prototype.options_={
children:{
seekBar:{}
}
},vjs.ProgressControl.prototype.createEl=function(){
return vjs.Component.prototype.createEl.call(this,"div",{
className:"vjs-progress-control vjs-control"
});
},vjs.SeekBar=vjs.Slider.extend({
init:function(t,e){
vjs.Slider.call(this,t,e),t.on("timeupdate",vjs.bind(this,this.updateARIAAttributes)),
t.ready(vjs.bind(this,this.updateARIAAttributes));
}
}),vjs.SeekBar.prototype.options_={
children:{
loadProgressBar:{},
playProgressBar:{},
seekHandle:{}
},
barName:"playProgressBar",
handleName:"seekHandle"
},vjs.SeekBar.prototype.playerEvent="timeupdate",vjs.SeekBar.prototype.createEl=function(){
return vjs.Slider.prototype.createEl.call(this,"div",{
className:"vjs-progress-holder",
"aria-label":"video progress bar"
});
},vjs.SeekBar.prototype.updateARIAAttributes=function(){
var t=this.player_.scrubbing?this.player_.getCache().currentTime:this.player_.currentTime();
this.el_.setAttribute("aria-valuenow",vjs.round(100*this.getPercent(),2)),this.el_.setAttribute("aria-valuetext",vjs.formatTime(t,this.player_.duration()));
},vjs.SeekBar.prototype.getPercent=function(){
return this.player_.currentTime()/this.player_.duration();
},vjs.SeekBar.prototype.onMouseDown=function(t){
vjs.Slider.prototype.onMouseDown.call(this,t),this.player_.scrubbing=!0,this.videoWasPlaying=!this.player_.paused(),
this.player_.pause();
},vjs.SeekBar.prototype.onMouseMove=function(t){
var e=this.calculateDistance(t)*this.player_.duration();
e==this.player_.duration()&&(e-=.1),this.player_.currentTime(e);
},vjs.SeekBar.prototype.onMouseUp=function(t){
vjs.Slider.prototype.onMouseUp.call(this,t),this.player_.scrubbing=!1,this.videoWasPlaying&&this.player_.play();
},vjs.SeekBar.prototype.stepForward=function(){
this.player_.currentTime(this.player_.currentTime()+5);
},vjs.SeekBar.prototype.stepBack=function(){
this.player_.currentTime(this.player_.currentTime()-5);
},vjs.LoadProgressBar=vjs.Component.extend({
init:function(t,e){
vjs.Component.call(this,t,e),t.on("progress",vjs.bind(this,this.update));
}
}),vjs.LoadProgressBar.prototype.createEl=function(){
return vjs.Component.prototype.createEl.call(this,"div",{
className:"vjs-load-progress",
innerHTML:'<span class="vjs-control-text">Loaded: 0%</span>'
});
},vjs.LoadProgressBar.prototype.update=function(){
this.el_.style&&(this.el_.style.width=vjs.round(100*this.player_.bufferedPercent(),2)+"%");
},vjs.PlayProgressBar=vjs.Component.extend({
init:function(t,e){
vjs.Component.call(this,t,e);
}
}),vjs.PlayProgressBar.prototype.createEl=function(){
return vjs.Component.prototype.createEl.call(this,"div",{
className:"vjs-play-progress",
innerHTML:'<span class="vjs-control-text">Progress: 0%</span>'
});
},vjs.SeekHandle=vjs.SliderHandle.extend(),vjs.SeekHandle.prototype.defaultValue="00:00",
vjs.SeekHandle.prototype.createEl=function(){
return vjs.SliderHandle.prototype.createEl.call(this,"div",{
className:"vjs-seek-handle"
});
},vjs.VolumeControl=vjs.Component.extend({
init:function(t,e){
vjs.Component.call(this,t,e),t.tech&&t.tech.features&&t.tech.features.volumeControl===!1&&this.addClass("vjs-hidden"),
t.on("loadstart",vjs.bind(this,function(){
t.tech.features&&t.tech.features.volumeControl===!1?this.addClass("vjs-hidden"):this.removeClass("vjs-hidden");
}));
}
}),vjs.VolumeControl.prototype.options_={
children:{
volumeBar:{}
}
},vjs.VolumeControl.prototype.createEl=function(){
return vjs.Component.prototype.createEl.call(this,"div",{
className:"vjs-volume-control vjs-control"
});
},vjs.VolumeBar=vjs.Slider.extend({
init:function(t,e){
vjs.Slider.call(this,t,e),t.on("volumechange",vjs.bind(this,this.updateARIAAttributes)),
t.ready(vjs.bind(this,this.updateARIAAttributes)),setTimeout(vjs.bind(this,this.update),0);
}
}),vjs.VolumeBar.prototype.updateARIAAttributes=function(){
this.el_.setAttribute("aria-valuenow",vjs.round(100*this.player_.volume(),2)),this.el_.setAttribute("aria-valuetext",vjs.round(100*this.player_.volume(),2)+"%");
},vjs.VolumeBar.prototype.options_={
children:{
volumeLevel:{},
volumeHandle:{}
},
barName:"volumeLevel",
handleName:"volumeHandle"
},vjs.VolumeBar.prototype.playerEvent="volumechange",vjs.VolumeBar.prototype.createEl=function(){
return vjs.Slider.prototype.createEl.call(this,"div",{
className:"vjs-volume-bar",
"aria-label":"volume level"
});
},vjs.VolumeBar.prototype.onMouseMove=function(t){
this.player_.volume(this.calculateDistance(t));
},vjs.VolumeBar.prototype.getPercent=function(){
return this.player_.muted()?0:this.player_.volume();
},vjs.VolumeBar.prototype.stepForward=function(){
this.player_.volume(this.player_.volume()+.1);
},vjs.VolumeBar.prototype.stepBack=function(){
this.player_.volume(this.player_.volume()-.1);
},vjs.VolumeLevel=vjs.Component.extend({
init:function(t,e){
vjs.Component.call(this,t,e);
}
}),vjs.VolumeLevel.prototype.createEl=function(){
return vjs.Component.prototype.createEl.call(this,"div",{
className:"vjs-volume-level",
innerHTML:'<span class="vjs-control-text"></span>'
});
},vjs.VolumeHandle=vjs.SliderHandle.extend(),vjs.VolumeHandle.prototype.defaultValue="00:00",
vjs.VolumeHandle.prototype.createEl=function(){
return vjs.SliderHandle.prototype.createEl.call(this,"div",{
className:"vjs-volume-handle"
});
},vjs.MuteToggle=vjs.Button.extend({
init:function(t,e){
vjs.Button.call(this,t,e),t.on("volumechange",vjs.bind(this,this.update)),t.tech&&t.tech.features&&t.tech.features.volumeControl===!1&&this.addClass("vjs-hidden"),
t.on("loadstart",vjs.bind(this,function(){
t.tech.features&&t.tech.features.volumeControl===!1?this.addClass("vjs-hidden"):this.removeClass("vjs-hidden");
}));
}
}),vjs.MuteToggle.prototype.createEl=function(){
return vjs.Button.prototype.createEl.call(this,"div",{
className:"vjs-mute-control vjs-control",
innerHTML:'<div><span class="vjs-control-text">Mute</span></div>'
});
},vjs.MuteToggle.prototype.onClick=function(){
this.player_.muted(this.player_.muted()?!1:!0);
},vjs.MuteToggle.prototype.update=function(){
var t=this.player_.volume(),e=3;
0===t||this.player_.muted()?e=0:.33>t?e=1:.67>t&&(e=2),this.player_.muted()?"Unmute"!=this.el_.children[0].children[0].innerHTML&&(this.el_.children[0].children[0].innerHTML="Unmute"):"Mute"!=this.el_.children[0].children[0].innerHTML&&(this.el_.children[0].children[0].innerHTML="Mute");
for(var s=0;4>s;s++)vjs.removeClass(this.el_,"vjs-vol-"+s);
vjs.addClass(this.el_,"vjs-vol-"+e);
},vjs.VolumeMenuButton=vjs.MenuButton.extend({
init:function(t,e){
vjs.MenuButton.call(this,t,e),t.on("volumechange",vjs.bind(this,this.update)),t.tech&&t.tech.features&&t.tech.features.volumeControl===!1&&this.addClass("vjs-hidden"),
t.on("loadstart",vjs.bind(this,function(){
t.tech.features&&t.tech.features.volumeControl===!1?this.addClass("vjs-hidden"):this.removeClass("vjs-hidden");
})),this.addClass("vjs-menu-button");
}
}),vjs.VolumeMenuButton.prototype.createMenu=function(){
var t=new vjs.Menu(this.player_,{
contentElType:"div"
}),e=new vjs.VolumeBar(this.player_,vjs.obj.merge({
vertical:!0
},this.options_.volumeBar));
return t.addChild(e),t;
},vjs.VolumeMenuButton.prototype.onClick=function(){
vjs.MuteToggle.prototype.onClick.call(this),vjs.MenuButton.prototype.onClick.call(this);
},vjs.VolumeMenuButton.prototype.createEl=function(){
return vjs.Button.prototype.createEl.call(this,"div",{
className:"vjs-volume-menu-button vjs-menu-button vjs-control",
innerHTML:'<div><span class="vjs-control-text">Mute</span></div>'
});
},vjs.VolumeMenuButton.prototype.update=vjs.MuteToggle.prototype.update,vjs.PosterImage=vjs.Button.extend({
init:function(t,e){
vjs.Button.call(this,t,e),t.poster()&&t.controls()||this.hide(),t.on("play",vjs.bind(this,this.hide));
}
}),vjs.PosterImage.prototype.createEl=function(){
var t=vjs.createEl("div",{
className:"vjs-poster",
tabIndex:-1
}),e=this.player_.poster();
return e&&("backgroundSize"in t.style?t.style.backgroundImage='url("'+e+'")':t.appendChild(vjs.createEl("img",{
src:e
}))),t;
},vjs.PosterImage.prototype.onClick=function(){
this.player_.play();
},vjs.LoadingSpinner=vjs.Component.extend({
init:function(t,e){
vjs.Component.call(this,t,e),t.on("canplay",vjs.bind(this,this.hide)),t.on("canplaythrough",vjs.bind(this,this.hide)),
t.on("playing",vjs.bind(this,this.hide)),t.on("seeked",vjs.bind(this,this.hide)),
t.on("seeking",vjs.bind(this,this.show)),t.on("seeked",vjs.bind(this,this.hide)),
t.on("error",vjs.bind(this,this.show)),t.on("waiting",vjs.bind(this,this.show));
}
}),vjs.LoadingSpinner.prototype.createEl=function(){
return vjs.Component.prototype.createEl.call(this,"div",{
className:"vjs-loading-spinner"
});
},vjs.BigPlayButton=vjs.Button.extend({
init:function(t,e){
vjs.Button.call(this,t,e),t.controls()||this.hide(),t.on("play",vjs.bind(this,this.hide));
}
}),vjs.BigPlayButton.prototype.createEl=function(){
return vjs.Button.prototype.createEl.call(this,"div",{
className:"vjs-big-play-button",
innerHTML:"<span></span>",
"aria-label":"play video"
});
},vjs.BigPlayButton.prototype.onClick=function(){
this.player_.play();
},vjs.MediaTechController=vjs.Component.extend({
init:function(t,e,s){
vjs.Component.call(this,t,e,s);
}
}),vjs.MediaTechController.prototype.onClick=function(){
return vjs.IS_ANDROID?function(){}:function(){
this.player_.controls()&&(this.player_.paused()?this.player_.play():this.player_.pause());
};
}(),vjs.MediaTechController.prototype.features={
volumeControl:!0,
fullscreenResize:!1,
progressEvents:!1,
timeupdateEvents:!1
},vjs.media={},vjs.media.ApiMethods="play,pause,paused,currentTime,setCurrentTime,duration,buffered,volume,setVolume,muted,setMuted,width,height,supportsFullScreen,enterFullScreen,src,load,currentSrc,preload,setPreload,autoplay,setAutoplay,loop,setLoop,error,networkState,readyState,seeking,initialTime,startOffsetTime,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks,defaultPlaybackRate,playbackRate,mediaGroup,controller,controls,defaultMuted".split(",");
for(var i=vjs.media.ApiMethods.length-1;i>=0;i--){
var methodName=vjs.media.ApiMethods[i];
vjs.MediaTechController.prototype[vjs.media.ApiMethods[i]]=createMethod(methodName);
}
vjs.Html5=vjs.MediaTechController.extend({
init:function(t,e,s){
this.features.volumeControl=vjs.Html5.canControlVolume(),this.features.movingMediaElementInDOM=!vjs.IS_IOS,
this.features.fullscreenResize=!0,vjs.MediaTechController.call(this,t,e,s);
var n=e.source;
n&&this.el_.currentSrc==n.src?t.trigger("loadstart"):n&&(this.el_.src=n.src),t.ready(function(){
this.tag&&this.options_.autoplay&&this.paused()&&(delete this.tag.poster,this.play());
}),this.on("click",this.onClick),this.setupTriggers(),this.triggerReady();
}
}),vjs.Html5.prototype.dispose=function(){
vjs.MediaTechController.prototype.dispose.call(this);
},vjs.Html5.prototype.createEl=function(){
var t=this.player_,e=t.tag;
e&&this.features.movingMediaElementInDOM!==!1||(e?(e.player=null,t.tag=null,t.el().removeChild(e),
e=e.cloneNode(!1)):e=vjs.createEl("video",{
id:t.id()+"_html5_api",
className:"vjs-tech"
}),e.player=t,vjs.insertFirst(e,t.el()));
for(var s=["autoplay","preload","loop","muted"],n=s.length-1;n>=0;n--){
var o=s[n];
null!==t.options_[o]&&(e[o]=t.options_[o]);
}
return e;
},vjs.Html5.prototype.setupTriggers=function(){
for(var t=vjs.Html5.Events.length-1;t>=0;t--)vjs.on(this.el_,vjs.Html5.Events[t],vjs.bind(this.player_,this.eventHandler));
},vjs.Html5.prototype.eventHandler=function(t){
this.trigger(t),t.stopPropagation();
},vjs.Html5.prototype.play=function(){
this.el_.play();
},vjs.Html5.prototype.pause=function(){
this.el_.pause();
},vjs.Html5.prototype.paused=function(){
return this.el_.paused;
},vjs.Html5.prototype.currentTime=function(){
return this.el_.currentTime;
},vjs.Html5.prototype.setCurrentTime=function(t){
try{
this.el_.currentTime=t;
}catch(e){
vjs.log(e,"Video is not ready. (Video.js)");
}
},vjs.Html5.prototype.duration=function(){
return this.el_.duration||0;
},vjs.Html5.prototype.buffered=function(){
return this.el_.buffered;
},vjs.Html5.prototype.volume=function(){
return this.el_.volume;
},vjs.Html5.prototype.setVolume=function(t){
this.el_.volume=t;
},vjs.Html5.prototype.muted=function(){
return this.el_.muted;
},vjs.Html5.prototype.setMuted=function(t){
this.el_.muted=t;
},vjs.Html5.prototype.width=function(){
return this.el_.offsetWidth;
},vjs.Html5.prototype.height=function(){
return this.el_.offsetHeight;
},vjs.Html5.prototype.supportsFullScreen=function(){
return"function"!=typeof this.el_.webkitEnterFullScreen||!/Android/.test(vjs.USER_AGENT)&&/Chrome|Mac OS X 10.5/.test(vjs.USER_AGENT)?!1:!0;
},vjs.Html5.prototype.enterFullScreen=function(){
var t=this.el_;
t.paused&&t.networkState<=t.HAVE_METADATA?(this.el_.play(),setTimeout(function(){
t.pause(),t.webkitEnterFullScreen();
},0)):t.webkitEnterFullScreen();
},vjs.Html5.prototype.exitFullScreen=function(){
this.el_.webkitExitFullScreen();
},vjs.Html5.prototype.src=function(t){
this.el_.src=t;
},vjs.Html5.prototype.load=function(){
this.el_.load();
},vjs.Html5.prototype.currentSrc=function(){
return this.el_.currentSrc;
},vjs.Html5.prototype.preload=function(){
return this.el_.preload;
},vjs.Html5.prototype.setPreload=function(t){
this.el_.preload=t;
},vjs.Html5.prototype.autoplay=function(){
return this.el_.autoplay;
},vjs.Html5.prototype.setAutoplay=function(t){
this.el_.autoplay=t;
},vjs.Html5.prototype.loop=function(){
return this.el_.loop;
},vjs.Html5.prototype.setLoop=function(t){
this.el_.loop=t;
},vjs.Html5.prototype.error=function(){
return this.el_.error;
},vjs.Html5.prototype.seeking=function(){
return this.el_.seeking;
},vjs.Html5.prototype.ended=function(){
return this.el_.ended;
},vjs.Html5.prototype.defaultMuted=function(){
return this.el_.defaultMuted;
},vjs.Html5.isSupported=function(){
return!!vjs.TEST_VID.canPlayType;
},vjs.Html5.canPlaySource=function(t){
try{
return!!vjs.TEST_VID.canPlayType(t.type);
}catch(e){
return"";
}
},vjs.Html5.canControlVolume=function(){
var t=vjs.TEST_VID.volume;
return vjs.TEST_VID.volume=t/2+.1,t!==vjs.TEST_VID.volume;
},vjs.Html5.Events="loadstart,suspend,abort,error,emptied,stalled,loadedmetadata,loadeddata,canplay,canplaythrough,playing,waiting,seeking,seeked,ended,durationchange,timeupdate,progress,play,pause,ratechange,volumechange".split(","),
vjs.IS_OLD_ANDROID&&(document.createElement("video").constructor.prototype.canPlayType=function(t){
return t&&-1!=t.toLowerCase().indexOf("video/mp4")?"maybe":"";
}),vjs.Flash=vjs.MediaTechController.extend({
init:function(t,e,s){
vjs.MediaTechController.call(this,t,e,s);
var n=e.source,o=e.parentEl,i=this.el_=vjs.createEl("div",{
id:t.id()+"_temp_flash"
}),r=t.id()+"_flash_api",a=t.options_,l=vjs.obj.merge({
readyFunction:"videojs.Flash.onReady",
eventProxyFunction:"videojs.Flash.onEvent",
errorEventProxyFunction:"videojs.Flash.onError",
autoplay:a.autoplay,
preload:a.preload,
loop:a.loop,
muted:a.muted
},e.flashVars),c=vjs.obj.merge({
wmode:"transparent",
bgcolor:"#000000"
},e.params),u=vjs.obj.merge({
id:r,
name:r,
"class":"vjs-tech"
},e.attributes);
if(n&&(l.src=encodeURIComponent(vjs.getAbsoluteURL(n.src))),vjs.insertFirst(i,o),
e.startTime&&this.ready(function(){
this.load(),this.play(),this.currentTime(e.startTime);
}),e.iFrameMode!==!0||vjs.IS_FIREFOX)vjs.Flash.embed(e.swf,i,l,c,u);else{
var p=vjs.createEl("iframe",{
id:r+"_iframe",
name:r+"_iframe",
className:"vjs-tech",
scrolling:"no",
marginWidth:0,
marginHeight:0,
frameBorder:0
});
l.readyFunction="ready",l.eventProxyFunction="events",l.errorEventProxyFunction="errors",
vjs.on(p,"load",vjs.bind(this,function(){
var t,s=p.contentWindow;
t=p.contentDocument?p.contentDocument:p.contentWindow.document,t.write(vjs.Flash.getEmbedCode(e.swf,l,c,u)),
s.player=this.player_,s.ready=vjs.bind(this.player_,function(e){
var s=t.getElementById(e),n=this,o=n.tech;
o.el_=s,vjs.on(s,"click",o.bind(o.onClick)),vjs.Flash.checkReady(o);
}),s.events=vjs.bind(this.player_,function(t,e){
var s=this;
s&&"flash"===s.techName&&s.trigger(e);
}),s.errors=vjs.bind(this.player_,function(t,e){
vjs.log("Flash Error",e);
});
})),i.parentNode.replaceChild(p,i);
}
}
}),vjs.Flash.prototype.dispose=function(){
vjs.MediaTechController.prototype.dispose.call(this);
},vjs.Flash.prototype.play=function(){
this.el_.vjs_play();
},vjs.Flash.prototype.pause=function(){
this.el_.vjs_pause();
},vjs.Flash.prototype.src=function(t){
if(t=vjs.getAbsoluteURL(t),this.el_.vjs_src(t),this.player_.autoplay()){
var e=this;
setTimeout(function(){
e.play();
},0);
}
},vjs.Flash.prototype.load=function(){
this.el_.vjs_load();
},vjs.Flash.prototype.poster=function(){
this.el_.vjs_getProperty("poster");
},vjs.Flash.prototype.buffered=function(){
return vjs.createTimeRange(0,this.el_.vjs_getProperty("buffered"));
},vjs.Flash.prototype.supportsFullScreen=function(){
return!1;
},vjs.Flash.prototype.enterFullScreen=function(){
return!1;
};
var api=vjs.Flash.prototype,readWrite="preload,currentTime,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted".split(","),readOnly="error,currentSrc,networkState,readyState,seeking,initialTime,duration,startOffsetTime,paused,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks".split(","),createSetter=function(t){
var e=t.charAt(0).toUpperCase()+t.slice(1);
api["set"+e]=function(e){
return this.el_.vjs_setProperty(t,e);
};
},createGetter=function(t){
api[t]=function(){
return this.el_.vjs_getProperty(t);
};
};
if(function(){
var t;
for(t=0;t<readWrite.length;t++)createGetter(readWrite[t]),createSetter(readWrite[t]);
for(t=0;t<readOnly.length;t++)createGetter(readOnly[t]);
}(),vjs.Flash.isSupported=function(){
return vjs.Flash.version()[0]>=10;
},vjs.Flash.canPlaySource=function(t){
return t.type in vjs.Flash.formats?"maybe":void 0;
},vjs.Flash.formats={
"video/flv":"FLV",
"video/x-flv":"FLV",
"video/mp4":"MP4",
"video/m4v":"MP4"
},vjs.Flash.onReady=function(t){
var e=vjs.el(t),s=e.player||e.parentNode.player,n=s.tech;
e.player=s,n.el_=e,n.on("click",n.onClick),vjs.Flash.checkReady(n);
},vjs.Flash.checkReady=function(t){
t.el().vjs_getProperty?t.triggerReady():setTimeout(function(){
vjs.Flash.checkReady(t);
},50);
},vjs.Flash.onEvent=function(t,e){
var s=vjs.el(t).player;
s.trigger(e);
},vjs.Flash.onError=function(t,e){
var s=vjs.el(t).player;
s.trigger("error"),vjs.log("Flash Error",e,t);
},vjs.Flash.version=function(){
var t="0,0,0";
try{
t=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1];
}catch(e){
try{
navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin&&(t=(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1]);
}catch(s){}
}
return t.split(",");
},vjs.Flash.embed=function(t,e,s,n,o){
var i=vjs.Flash.getEmbedCode(t,s,n,o),r=vjs.createEl("div",{
innerHTML:i
}).childNodes[0],a=e.parentNode;
e.parentNode.replaceChild(r,e);
var l=a.childNodes[0];
return setTimeout(function(){
l.style.display="block";
},1e3),r;
},vjs.Flash.getEmbedCode=function(t,e,s,n){
var o='<object type="application/x-shockwave-flash"',i="",r="",a="";
return e&&vjs.obj.each(e,function(t,e){
i+=t+"="+e+"&amp;";
}),s=vjs.obj.merge({
movie:t,
flashvars:i,
allowScriptAccess:"always",
allowNetworking:"all"
},s),vjs.obj.each(s,function(t,e){
r+='<param name="'+t+'" value="'+e+'" />';
}),n=vjs.obj.merge({
data:t,
width:"100%",
height:"100%"
},n),vjs.obj.each(n,function(t,e){
a+=t+'="'+e+'" ';
}),o+a+">"+r+"</object>";
},vjs.MediaLoader=vjs.Component.extend({
init:function(t,e,s){
if(vjs.Component.call(this,t,e,s),t.options_.sources&&0!==t.options_.sources.length)t.src(t.options_.sources);else for(var n=0,o=t.options_.techOrder;n<o.length;n++){
var i=vjs.capitalize(o[n]),r=window.videojs[i];
if(r&&r.isSupported()){
t.loadTech(i);
break;
}
}
}
}),vjs.Player.prototype.textTracks_,vjs.Player.prototype.textTracks=function(){
return this.textTracks_=this.textTracks_||[],this.textTracks_;
},vjs.Player.prototype.addTextTrack=function(t,e,s,n){
var o=this.textTracks_=this.textTracks_||[];
n=n||{},n.kind=t,n.label=e,n.language=s;
var i=vjs.capitalize(t||"subtitles"),r=new window.videojs[i+"Track"](this,n);
return o.push(r),r;
},vjs.Player.prototype.addTextTracks=function(t){
for(var e,s=0;s<t.length;s++)e=t[s],this.addTextTrack(e.kind,e.label,e.language,e);
return this;
},vjs.Player.prototype.showTextTrack=function(t,e){
for(var s,n,o,i=this.textTracks_,r=0,a=i.length;a>r;r++)s=i[r],s.id()===t?(s.show(),
n=s):e&&s.kind()==e&&s.mode()>0&&s.disable();
return o=n?n.kind():e?e:!1,o&&this.trigger(o+"trackchange"),this;
},vjs.TextTrack=vjs.Component.extend({
init:function(t,e){
vjs.Component.call(this,t,e),this.id_=e.id||"vjs_"+e.kind+"_"+e.language+"_"+vjs.guid++,
this.src_=e.src,this.dflt_=e["default"]||e.dflt,this.title_=e.title,this.language_=e.srclang,
this.label_=e.label,this.cues_=[],this.activeCues_=[],this.readyState_=0,this.mode_=0,
this.player_.on("fullscreenchange",vjs.bind(this,this.adjustFontSize));
}
}),vjs.TextTrack.prototype.kind_,vjs.TextTrack.prototype.kind=function(){
return this.kind_;
},vjs.TextTrack.prototype.src_,vjs.TextTrack.prototype.src=function(){
return this.src_;
},vjs.TextTrack.prototype.dflt_,vjs.TextTrack.prototype.dflt=function(){
return this.dflt_;
},vjs.TextTrack.prototype.title_,vjs.TextTrack.prototype.title=function(){
return this.title_;
},vjs.TextTrack.prototype.language_,vjs.TextTrack.prototype.language=function(){
return this.language_;
},vjs.TextTrack.prototype.label_,vjs.TextTrack.prototype.label=function(){
return this.label_;
},vjs.TextTrack.prototype.cues_,vjs.TextTrack.prototype.cues=function(){
return this.cues_;
},vjs.TextTrack.prototype.activeCues_,vjs.TextTrack.prototype.activeCues=function(){
return this.activeCues_;
},vjs.TextTrack.prototype.readyState_,vjs.TextTrack.prototype.readyState=function(){
return this.readyState_;
},vjs.TextTrack.prototype.mode_,vjs.TextTrack.prototype.mode=function(){
return this.mode_;
},vjs.TextTrack.prototype.adjustFontSize=function(){
this.el_.style.fontSize=this.player_.isFullScreen?screen.width/this.player_.width()*1.4*100+"%":"";
},vjs.TextTrack.prototype.createEl=function(){
return vjs.Component.prototype.createEl.call(this,"div",{
className:"vjs-"+this.kind_+" vjs-text-track"
});
},vjs.TextTrack.prototype.show=function(){
this.activate(),this.mode_=2,vjs.Component.prototype.show.call(this);
},vjs.TextTrack.prototype.hide=function(){
this.activate(),this.mode_=1,vjs.Component.prototype.hide.call(this);
},vjs.TextTrack.prototype.disable=function(){
2==this.mode_&&this.hide(),this.deactivate(),this.mode_=0;
},vjs.TextTrack.prototype.activate=function(){
0===this.readyState_&&this.load(),0===this.mode_&&(this.player_.on("timeupdate",vjs.bind(this,this.update,this.id_)),
this.player_.on("ended",vjs.bind(this,this.reset,this.id_)),("captions"===this.kind_||"subtitles"===this.kind_)&&this.player_.getChild("textTrackDisplay").addChild(this));
},vjs.TextTrack.prototype.deactivate=function(){
this.player_.off("timeupdate",vjs.bind(this,this.update,this.id_)),this.player_.off("ended",vjs.bind(this,this.reset,this.id_)),
this.reset(),this.player_.getChild("textTrackDisplay").removeChild(this);
},vjs.TextTrack.prototype.load=function(){
0===this.readyState_&&(this.readyState_=1,vjs.get(this.src_,vjs.bind(this,this.parseCues),vjs.bind(this,this.onError)));
},vjs.TextTrack.prototype.onError=function(t){
this.error=t,this.readyState_=3,this.trigger("error");
},vjs.TextTrack.prototype.parseCues=function(t){
for(var e,s,n,o,i=t.split("\n"),r="",a=1,l=i.length;l>a;a++)if(r=vjs.trim(i[a])){
for(-1==r.indexOf("-->")?(o=r,r=vjs.trim(i[++a])):o=this.cues_.length,e={
id:o,
index:this.cues_.length
},s=r.split(" --> "),e.startTime=this.parseCueTime(s[0]),e.endTime=this.parseCueTime(s[1]),
n=[];i[++a]&&(r=vjs.trim(i[a]));)n.push(r);
e.text=n.join("<br/>"),this.cues_.push(e);
}
this.readyState_=2,this.trigger("loaded");
},vjs.TextTrack.prototype.parseCueTime=function(t){
var e,s,n,o,i,r=t.split(":"),a=0;
return 3==r.length?(e=r[0],s=r[1],n=r[2]):(e=0,s=r[0],n=r[1]),n=n.split(/\s+/),o=n.splice(0,1)[0],
o=o.split(/\.|,/),i=parseFloat(o[1]),o=o[0],a+=3600*parseFloat(e),a+=60*parseFloat(s),
a+=parseFloat(o),i&&(a+=i/1e3),a;
},vjs.TextTrack.prototype.update=function(){
if(this.cues_.length>0){
var t=this.player_.currentTime();
if(void 0===this.prevChange||t<this.prevChange||this.nextChange<=t){
var e,s,n,o,i=this.cues_,r=this.player_.duration(),a=0,l=!1,c=[];
for(t>=this.nextChange||void 0===this.nextChange?o=void 0!==this.firstActiveIndex?this.firstActiveIndex:0:(l=!0,
o=void 0!==this.lastActiveIndex?this.lastActiveIndex:i.length-1);;){
if(n=i[o],n.endTime<=t)a=Math.max(a,n.endTime),n.active&&(n.active=!1);else if(t<n.startTime){
if(r=Math.min(r,n.startTime),n.active&&(n.active=!1),!l)break;
}else l?(c.splice(0,0,n),void 0===s&&(s=o),e=o):(c.push(n),void 0===e&&(e=o),s=o),
r=Math.min(r,n.endTime),a=Math.max(a,n.startTime),n.active=!0;
if(l){
if(0===o)break;
o--;
}else{
if(o===i.length-1)break;
o++;
}
}
this.activeCues_=c,this.nextChange=r,this.prevChange=a,this.firstActiveIndex=e,this.lastActiveIndex=s,
this.updateDisplay(),this.trigger("cuechange");
}
}
},vjs.TextTrack.prototype.updateDisplay=function(){
for(var t=this.activeCues_,e="",s=0,n=t.length;n>s;s++)e+='<span class="vjs-tt-cue">'+t[s].text+"</span>";
this.el_.innerHTML=e;
},vjs.TextTrack.prototype.reset=function(){
this.nextChange=0,this.prevChange=this.player_.duration(),this.firstActiveIndex=0,
this.lastActiveIndex=0;
},vjs.CaptionsTrack=vjs.TextTrack.extend(),vjs.CaptionsTrack.prototype.kind_="captions",
vjs.SubtitlesTrack=vjs.TextTrack.extend(),vjs.SubtitlesTrack.prototype.kind_="subtitles",
vjs.ChaptersTrack=vjs.TextTrack.extend(),vjs.ChaptersTrack.prototype.kind_="chapters",
vjs.TextTrackDisplay=vjs.Component.extend({
init:function(t,e,s){
vjs.Component.call(this,t,e,s),t.options_.tracks&&t.options_.tracks.length>0&&this.player_.addTextTracks(t.options_.tracks);
}
}),vjs.TextTrackDisplay.prototype.createEl=function(){
return vjs.Component.prototype.createEl.call(this,"div",{
className:"vjs-text-track-display"
});
},vjs.TextTrackMenuItem=vjs.MenuItem.extend({
init:function(t,e){
var s=this.track=e.track;
e.label=s.label(),e.selected=s.dflt(),vjs.MenuItem.call(this,t,e),this.player_.on(s.kind()+"trackchange",vjs.bind(this,this.update));
}
}),vjs.TextTrackMenuItem.prototype.onClick=function(){
vjs.MenuItem.prototype.onClick.call(this),this.player_.showTextTrack(this.track.id_,this.track.kind());
},vjs.TextTrackMenuItem.prototype.update=function(){
this.selected(2==this.track.mode());
},vjs.OffTextTrackMenuItem=vjs.TextTrackMenuItem.extend({
init:function(t,e){
e.track={
kind:function(){
return e.kind;
},
player:t,
label:function(){
return e.kind+" off";
},
dflt:function(){
return!1;
},
mode:function(){
return!1;
}
},vjs.TextTrackMenuItem.call(this,t,e),this.selected(!0);
}
}),vjs.OffTextTrackMenuItem.prototype.onClick=function(){
vjs.TextTrackMenuItem.prototype.onClick.call(this),this.player_.showTextTrack(this.track.id_,this.track.kind());
},vjs.OffTextTrackMenuItem.prototype.update=function(){
for(var t,e=this.player_.textTracks(),s=0,n=e.length,o=!0;n>s;s++)t=e[s],t.kind()==this.track.kind()&&2==t.mode()&&(o=!1);
this.selected(o);
},vjs.TextTrackButton=vjs.MenuButton.extend({
init:function(t,e){
vjs.MenuButton.call(this,t,e),this.items.length<=1&&this.hide();
}
}),vjs.TextTrackButton.prototype.createItems=function(){
var t,e=[];
e.push(new vjs.OffTextTrackMenuItem(this.player_,{
kind:this.kind_
}));
for(var s=0;s<this.player_.textTracks().length;s++)t=this.player_.textTracks()[s],
t.kind()===this.kind_&&e.push(new vjs.TextTrackMenuItem(this.player_,{
track:t
}));
return e;
},vjs.CaptionsButton=vjs.TextTrackButton.extend({
init:function(t,e,s){
vjs.TextTrackButton.call(this,t,e,s),this.el_.setAttribute("aria-label","Captions Menu");
}
}),vjs.CaptionsButton.prototype.kind_="captions",vjs.CaptionsButton.prototype.buttonText="Captions",
vjs.CaptionsButton.prototype.className="vjs-captions-button",vjs.SubtitlesButton=vjs.TextTrackButton.extend({
init:function(t,e,s){
vjs.TextTrackButton.call(this,t,e,s),this.el_.setAttribute("aria-label","Subtitles Menu");
}
}),vjs.SubtitlesButton.prototype.kind_="subtitles",vjs.SubtitlesButton.prototype.buttonText="Subtitles",
vjs.SubtitlesButton.prototype.className="vjs-subtitles-button",vjs.ChaptersButton=vjs.TextTrackButton.extend({
init:function(t,e,s){
vjs.TextTrackButton.call(this,t,e,s),this.el_.setAttribute("aria-label","Chapters Menu");
}
}),vjs.ChaptersButton.prototype.kind_="chapters",vjs.ChaptersButton.prototype.buttonText="Chapters",
vjs.ChaptersButton.prototype.className="vjs-chapters-button",vjs.ChaptersButton.prototype.createItems=function(){
for(var t,e=[],s=0;s<this.player_.textTracks().length;s++)t=this.player_.textTracks()[s],
t.kind()===this.kind_&&e.push(new vjs.TextTrackMenuItem(this.player_,{
track:t
}));
return e;
},vjs.ChaptersButton.prototype.createMenu=function(){
for(var t,e,s=this.player_.textTracks(),n=0,o=s.length,i=this.items=[];o>n;n++)if(t=s[n],
t.kind()==this.kind_&&t.dflt()){
if(t.readyState()<2)return this.chaptersTrack=t,void t.on("loaded",vjs.bind(this,this.createMenu));
e=t;
break;
}
var r=this.menu=new vjs.Menu(this.player_);
if(r.el_.appendChild(vjs.createEl("li",{
className:"vjs-menu-title",
innerHTML:vjs.capitalize(this.kind_),
tabindex:-1
})),e){
var a,l,c=e.cues_;
for(n=0,o=c.length;o>n;n++)a=c[n],l=new vjs.ChaptersTrackMenuItem(this.player_,{
track:e,
cue:a
}),i.push(l),r.addChild(l);
}
return this.items.length>0&&this.show(),r;
},vjs.ChaptersTrackMenuItem=vjs.MenuItem.extend({
init:function(t,e){
var s=this.track=e.track,n=this.cue=e.cue,o=t.currentTime();
e.label=n.text,e.selected=n.startTime<=o&&o<n.endTime,vjs.MenuItem.call(this,t,e),
s.on("cuechange",vjs.bind(this,this.update));
}
}),vjs.ChaptersTrackMenuItem.prototype.onClick=function(){
vjs.MenuItem.prototype.onClick.call(this),this.player_.currentTime(this.cue.startTime),
this.update(this.cue.startTime);
},vjs.ChaptersTrackMenuItem.prototype.update=function(){
var t=this.cue,e=this.player_.currentTime();
this.selected(t.startTime<=e&&e<t.endTime);
},vjs.obj.merge(vjs.ControlBar.prototype.options_.children,{
subtitlesButton:{},
captionsButton:{},
chaptersButton:{}
}),vjs.JSON,"undefined"!=typeof window.JSON&&"function"===window.JSON.parse)vjs.JSON=window.JSON;else{
vjs.JSON={};
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
vjs.JSON.parse=function(text,reviver){
function walk(t,e){
var s,n,o=t[e];
if(o&&"object"==typeof o)for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(n=walk(o,s),
void 0!==n?o[s]=n:delete o[s]);
return reviver.call(t,e,o);
}
var j;
if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(t){
return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4);
})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),
"function"==typeof reviver?walk({
"":j
},""):j;
throw new SyntaxError("JSON.parse(): invalid or malformed JSON data");
};
}
return vjs.autoSetup=function(){
var t,e,s,n=document.getElementsByTagName("video");
if(n&&n.length>0)for(var o=0,i=n.length;i>o;o++){
if(e=n[o],!e||!e.getAttribute){
vjs.autoSetupTimeout(1);
break;
}
void 0===e.player&&(t=e.getAttribute("data-setup"),null!==t&&(t=vjs.JSON.parse(t||"{}"),
s=videojs(e,t)));
}else vjs.windowLoaded||vjs.autoSetupTimeout(1);
},vjs.autoSetupTimeout=function(t){
setTimeout(vjs.autoSetup,t);
},vjs.one(window,"load",function(){
vjs.windowLoaded=!0;
}),vjs.autoSetupTimeout(1),vjs.plugin=function(t,e){
vjs.Player.prototype[t]=e;
},videojs;
});define("tpl/media/qqmusicaudio.html.js",[],function(){
return'<div class="qqmusic_audio " id="wxAudioBox{id}" data-aid="{id}">\n    <a class="audio_switch" href="javascript:;"  onclick=\'return false;\' title="点击播放">\n        <i class="icon_qqmusic"></i>\n    </a>\n</div>\n';
});define("tpl/media/audio.html.js",[],function(){
return'<div class="audio_msg" id="wxAudioBox{id}" data-aid="{id}" data-fid="{file_id}" data-source="{source}">\n    <div class="icon_audio_wrp"><span class="icon_audio_msg"></span></div>\n    <div class="audio_content">\n        <div class="audio_title">{title}</div>\n        <div class="audio_length">{play_length}</div>\n        {if showTime==true}<div class="audio_date">{update_time}</div>{/if}\n    </div>\n</div>\n';
});define("biz_web/lib/soundmanager2.js",[],function(){
"use strict";
function e(e,n){
function o(e){
return pt.preferFlash&&rt&&!pt.ignoreFlash&&pt.flash[e]!==t&&pt.flash[e];
}
function i(e){
return function(t){
var n,o=this._s;
return o&&o._a?n=e.call(this,t):(pt._wD(o&&o.id?o.id+": Ignoring "+t.type:wt+"Ignoring "+t.type),
n=null),n;
};
}
this.setupOptions={
url:e||null,
flashVersion:8,
debugMode:!1,
debugFlash:!1,
useConsole:!1,
consoleOnly:!0,
waitForWindowLoad:!1,
bgColor:"#ffffff",
useHighPerformance:!1,
flashPollingInterval:null,
html5PollingInterval:null,
flashLoadTimeout:1e3,
wmode:null,
allowScriptAccess:"always",
useFlashBlock:!1,
useHTML5Audio:!0,
html5Test:/^(probably|maybe)$/i,
preferFlash:!0,
noSWFCache:!1,
idPrefix:"sound"
},this.defaultOptions={
autoLoad:!1,
autoPlay:!1,
from:null,
loops:1,
onid3:null,
onload:null,
whileloading:null,
onplay:null,
onpause:null,
onresume:null,
whileplaying:null,
onposition:null,
onstop:null,
onfailure:null,
onfinish:null,
multiShot:!0,
multiShotEvents:!1,
position:null,
pan:0,
stream:!0,
to:null,
type:null,
usePolicyFile:!1,
volume:100
},this.flash9Options={
isMovieStar:null,
usePeakData:!1,
useWaveformData:!1,
useEQData:!1,
onbufferchange:null,
ondataerror:null
},this.movieStarOptions={
bufferTime:3,
serverURL:null,
onconnect:null,
duration:null
},this.audioFormats={
mp3:{
type:['audio/mpeg; codecs="mp3"',"audio/mpeg","audio/mp3","audio/MPA","audio/mpa-robust"],
required:!0
},
mp4:{
related:["aac","m4a","m4b"],
type:['audio/mp4; codecs="mp4a.40.2"',"audio/aac","audio/x-m4a","audio/MP4A-LATM","audio/mpeg4-generic"],
required:!1
},
ogg:{
type:["audio/ogg; codecs=vorbis"],
required:!1
},
opus:{
type:["audio/ogg; codecs=opus","audio/opus"],
required:!1
},
wav:{
type:['audio/wav; codecs="1"',"audio/wav","audio/wave","audio/x-wav"],
required:!1
}
},this.movieID="sm2-container",this.id=n||"sm2movie",this.debugID="soundmanager-debug",
this.debugURLParam=/([#?&])debug=1/i,this.versionNumber="V2.97a.20130512",this.version=null,
this.movieURL=null,this.altURL=null,this.swfLoaded=!1,this.enabled=!1,this.oMC=null,
this.sounds={},this.soundIDs=[],this.muted=!1,this.didFlashBlock=!1,this.filePattern=null,
this.filePatterns={
flash8:/\.mp3(\?.*)?$/i,
flash9:/\.mp3(\?.*)?$/i
},this.features={
buffering:!1,
peakData:!1,
waveformData:!1,
eqData:!1,
movieStar:!1
},this.sandbox={
type:null,
types:{
remote:"remote (domain-based) rules",
localWithFile:"local with file access (no internet access)",
localWithNetwork:"local with network (internet access only, no local access)",
localTrusted:"local, trusted (local+internet access)"
},
description:null,
noRemote:null,
noLocal:null
},this.html5={
usingFlash:null
},this.flash={},this.html5Only=!1,this.ignoreFlash=!1;
var a,s,r,l,u,d,f,h,c,p,m,_,g,y,w,v,b,O,D,M,L,T,P,S,F,I,H,E,A,k,C,x,R,N,U,B,W,j,q,V,Q,$,K,J,X,z,G,Z,Y,et,tt,nt,ot,it,at,st,rt,lt,ut,dt,ft,ht,ct,pt=this,mt=null,_t=null,gt="soundManager",yt=gt+": ",wt="HTML5::",vt=navigator.userAgent,bt=window.location.href.toString(),Ot=document,Dt=[],Mt=!0,Lt=!1,Tt=!1,Pt=!1,St=!1,Ft=!1,It=0,Ht=["log","info","warn","error"],Et=8,At=null,kt=null,Ct=!1,xt=!1,Rt=0,Nt=null,Ut=[],Bt=null,Wt=Array.prototype.slice,jt=!1,qt=0,Vt=vt.match(/(ipad|iphone|ipod)/i),Qt=vt.match(/android/i),$t=vt.match(/msie/i),Kt=vt.match(/webkit/i),Jt=vt.match(/safari/i)&&!vt.match(/chrome/i),Xt=vt.match(/opera/i),zt=vt.match(/firefox/i),Gt=vt.match(/(mobile|pre\/|xoom)/i)||Vt||Qt,Zt=!bt.match(/usehtml5audio/i)&&!bt.match(/sm2\-ignorebadua/i)&&Jt&&!vt.match(/silk/i)&&vt.match(/OS X 10_6_([3-7])/i),Yt=window.console!==t&&console.log!==t,en=Ot.hasFocus!==t?Ot.hasFocus():null,tn=Jt&&(Ot.hasFocus===t||!Ot.hasFocus()),nn=!tn,on=/(mp3|mp4|mpa|m4a|m4b)/i,an=1e3,sn="about:blank",rn=Ot.location?Ot.location.protocol.match(/http/i):null,ln=rn?"":"http://",un=/^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,dn=["mpeg4","aac","flv","mov","mp4","m4v","f4v","m4a","m4b","mp4v","3gp","3g2"],fn=new RegExp("\\.("+dn.join("|")+")(\\?.*)?$","i");
this.mimePattern=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i,this.useAltURL=!rn,
W={
swfBox:"sm2-object-box",
swfDefault:"movieContainer",
swfError:"swf_error",
swfTimedout:"swf_timedout",
swfLoaded:"swf_loaded",
swfUnblocked:"swf_unblocked",
sm2Debug:"sm2_debug",
highPerf:"high_performance",
flashDebug:"flash_debug"
},this.hasHTML5=function(){
try{
return Audio!==t&&(Xt&&opera!==t&&opera.version()<10?new Audio(null):new Audio).canPlayType!==t;
}catch(e){
return!1;
}
}(),this.setup=function(e){
var n=!pt.url;
return e!==t&&Pt&&Bt&&pt.ok()&&(e.flashVersion!==t||e.url!==t||e.html5Test!==t)&&Q(N("setupLate")),
m(e),e&&(n&&F&&e.url!==t&&pt.beginDelayedInit(),F||e.url===t||"complete"!==Ot.readyState||setTimeout(P,1)),
pt;
},this.ok=function(){
return Bt?Pt&&!St:pt.useHTML5Audio&&pt.hasHTML5;
},this.supported=this.ok,this.getMovie=function(e){
return s(e)||Ot[e]||window[e];
},this.createSound=function(e,n){
function o(){
return r=q(r),pt.sounds[r.id]=new a(r),pt.soundIDs.push(r.id),pt.sounds[r.id];
}
var i,s,r,l=null;
if(i=gt+".createSound(): ",s=i+N(Pt?"notOK":"notReady"),!Pt||!pt.ok())return Q(s),
!1;
if(n!==t&&(e={
id:e,
url:n
}),r=p(e),r.url=z(r.url),void 0===r.id&&(r.id=pt.setupOptions.idPrefix+qt++),r.id.toString().charAt(0).match(/^[0-9]$/)&&pt._wD(i+N("badID",r.id),2),
pt._wD(i+r.id+(r.url?" ("+r.url+")":""),1),$(r.id,!0))return pt._wD(i+r.id+" exists",1),
pt.sounds[r.id];
if(Y(r))l=o(),pt._wD(r.id+": Using HTML5"),l._setup_html5(r);else{
if(pt.html5Only)return pt._wD(r.id+": No HTML5 support for this sound, and no Flash. Exiting."),
o();
if(pt.html5.usingFlash&&r.url&&r.url.match(/data\:/i))return pt._wD(r.id+": data: URIs not supported via Flash. Exiting."),
o();
d>8&&(null===r.isMovieStar&&(r.isMovieStar=!!(r.serverURL||(r.type?r.type.match(un):!1)||r.url&&r.url.match(fn))),
r.isMovieStar&&(pt._wD(i+"using MovieStar handling"),r.loops>1&&h("noNSLoop"))),
r=V(r,i),l=o(),8===d?_t._createSound(r.id,r.loops||1,r.usePolicyFile):(_t._createSound(r.id,r.url,r.usePeakData,r.useWaveformData,r.useEQData,r.isMovieStar,r.isMovieStar?r.bufferTime:!1,r.loops||1,r.serverURL,r.duration||null,r.autoPlay,!0,r.autoLoad,r.usePolicyFile),
r.serverURL||(l.connected=!0,r.onconnect&&r.onconnect.apply(l))),r.serverURL||!r.autoLoad&&!r.autoPlay||l.load(r);
}
return!r.serverURL&&r.autoPlay&&l.play(),l;
},this.destroySound=function(e,t){
if(!$(e))return!1;
var n,o=pt.sounds[e];
for(o._iO={},o.stop(),o.unload(),n=0;n<pt.soundIDs.length;n++)if(pt.soundIDs[n]===e){
pt.soundIDs.splice(n,1);
break;
}
return t||o.destruct(!0),o=null,delete pt.sounds[e],!0;
},this.load=function(e,t){
return $(e)?pt.sounds[e].load(t):!1;
},this.unload=function(e){
return $(e)?pt.sounds[e].unload():!1;
},this.onPosition=function(e,t,n,o){
return $(e)?pt.sounds[e].onposition(t,n,o):!1;
},this.onposition=this.onPosition,this.clearOnPosition=function(e,t,n){
return $(e)?pt.sounds[e].clearOnPosition(t,n):!1;
},this.play=function(e,t){
var n=null,o=t&&!(t instanceof Object);
if(!Pt||!pt.ok())return Q(gt+".play(): "+N(Pt?"notOK":"notReady")),!1;
if($(e,o))o&&(t={
url:t
});else{
if(!o)return!1;
o&&(t={
url:t
}),t&&t.url&&(pt._wD(gt+'.play(): Attempting to create "'+e+'"',1),t.id=e,n=pt.createSound(t).play());
}
return null===n&&(n=pt.sounds[e].play(t)),n;
},this.start=this.play,this.setPosition=function(e,t){
return $(e)?pt.sounds[e].setPosition(t):!1;
},this.stop=function(e){
return $(e)?(pt._wD(gt+".stop("+e+")",1),pt.sounds[e].stop()):!1;
},this.stopAll=function(){
var e;
pt._wD(gt+".stopAll()",1);
for(e in pt.sounds)pt.sounds.hasOwnProperty(e)&&pt.sounds[e].stop();
},this.pause=function(e){
return $(e)?pt.sounds[e].pause():!1;
},this.pauseAll=function(){
var e;
for(e=pt.soundIDs.length-1;e>=0;e--)pt.sounds[pt.soundIDs[e]].pause();
},this.resume=function(e){
return $(e)?pt.sounds[e].resume():!1;
},this.resumeAll=function(){
var e;
for(e=pt.soundIDs.length-1;e>=0;e--)pt.sounds[pt.soundIDs[e]].resume();
},this.togglePause=function(e){
return $(e)?pt.sounds[e].togglePause():!1;
},this.setPan=function(e,t){
return $(e)?pt.sounds[e].setPan(t):!1;
},this.setVolume=function(e,t){
return $(e)?pt.sounds[e].setVolume(t):!1;
},this.mute=function(e){
var t=0;
if(e instanceof String&&(e=null),e)return $(e)?(pt._wD(gt+'.mute(): Muting "'+e+'"'),
pt.sounds[e].mute()):!1;
for(pt._wD(gt+".mute(): Muting all sounds"),t=pt.soundIDs.length-1;t>=0;t--)pt.sounds[pt.soundIDs[t]].mute();
return pt.muted=!0,!0;
},this.muteAll=function(){
pt.mute();
},this.unmute=function(e){
var t;
if(e instanceof String&&(e=null),e)return $(e)?(pt._wD(gt+'.unmute(): Unmuting "'+e+'"'),
pt.sounds[e].unmute()):!1;
for(pt._wD(gt+".unmute(): Unmuting all sounds"),t=pt.soundIDs.length-1;t>=0;t--)pt.sounds[pt.soundIDs[t]].unmute();
return pt.muted=!1,!0;
},this.unmuteAll=function(){
pt.unmute();
},this.toggleMute=function(e){
return $(e)?pt.sounds[e].toggleMute():!1;
},this.getMemoryUse=function(){
var e=0;
return _t&&8!==d&&(e=parseInt(_t._getMemoryUse(),10)),e;
},this.disable=function(e){
var n;
if(e===t&&(e=!1),St)return!1;
for(St=!0,h("shutdown",1),n=pt.soundIDs.length-1;n>=0;n--)C(pt.sounds[pt.soundIDs[n]]);
return c(e),at.remove(window,"load",w),!0;
},this.canPlayMIME=function(e){
var t;
return pt.hasHTML5&&(t=et({
type:e
})),!t&&Bt&&(t=e&&pt.ok()?!!((d>8?e.match(un):null)||e.match(pt.mimePattern)):null),
t;
},this.canPlayURL=function(e){
var t;
return pt.hasHTML5&&(t=et({
url:e
})),!t&&Bt&&(t=e&&pt.ok()?!!e.match(pt.filePattern):null),t;
},this.canPlayLink=function(e){
return e.type!==t&&e.type&&pt.canPlayMIME(e.type)?!0:pt.canPlayURL(e.href);
},this.getSoundById=function(e,t){
if(!e)return null;
var n=pt.sounds[e];
return n||t||pt._wD(gt+'.getSoundById(): Sound "'+e+'" not found.',2),n;
},this.onready=function(e,t){
var n="onready",o=!1;
if("function"!=typeof e)throw N("needFunction",n);
return Pt&&pt._wD(N("queue",n)),t||(t=window),g(n,e,t),y(),o=!0,o;
},this.ontimeout=function(e,t){
var n="ontimeout",o=!1;
if("function"!=typeof e)throw N("needFunction",n);
return Pt&&pt._wD(N("queue",n)),t||(t=window),g(n,e,t),y({
type:n
}),o=!0,o;
},this._writeDebug=function(e,n){
var o,i,a="soundmanager-debug";
return pt.debugMode?Yt&&pt.useConsole&&(n&&"object"==typeof n?console.log(e,n):Ht[n]!==t?console[Ht[n]](e):console.log(e),
pt.consoleOnly)?!0:(o=s(a))?(i=Ot.createElement("div"),++It%2===0&&(i.className="sm2-alt"),
n=n===t?0:parseInt(n,10),i.appendChild(Ot.createTextNode(e)),n&&(n>=2&&(i.style.fontWeight="bold"),
3===n&&(i.style.color="#ff3333")),o.insertBefore(i,o.firstChild),o=null,!0):!1:!1;
},-1!==bt.indexOf("sm2-debug=alert")&&(this._writeDebug=function(e){
window.alert(e);
}),this._wD=this._writeDebug,this._debug=function(){
var e,t;
for(h("currentObj",1),e=0,t=pt.soundIDs.length;t>e;e++)pt.sounds[pt.soundIDs[e]]._debug();
},this.reboot=function(e,t){
pt.soundIDs.length&&pt._wD("Destroying "+pt.soundIDs.length+" SMSound object"+(1!==pt.soundIDs.length?"s":"")+"...");
var n,o,i;
for(n=pt.soundIDs.length-1;n>=0;n--)pt.sounds[pt.soundIDs[n]].destruct();
if(_t)try{
$t&&(kt=_t.innerHTML),At=_t.parentNode.removeChild(_t);
}catch(a){
h("badRemove",2);
}
if(kt=At=Bt=_t=null,pt.enabled=F=Pt=Ct=xt=Lt=Tt=St=jt=pt.swfLoaded=!1,pt.soundIDs=[],
pt.sounds={},qt=0,e)Dt=[];else for(n in Dt)if(Dt.hasOwnProperty(n))for(o=0,i=Dt[n].length;i>o;o++)Dt[n][o].fired=!1;
return t||pt._wD(gt+": Rebooting..."),pt.html5={
usingFlash:null
},pt.flash={},pt.html5Only=!1,pt.ignoreFlash=!1,window.setTimeout(function(){
T(),t||pt.beginDelayedInit();
},20),pt;
},this.reset=function(){
return h("reset"),pt.reboot(!0,!0);
},this.getMoviePercent=function(){
return _t&&"PercentLoaded"in _t?_t.PercentLoaded():null;
},this.beginDelayedInit=function(){
Ft=!0,P(),setTimeout(function(){
return xt?!1:(H(),L(),xt=!0,!0);
},20),v();
},this.destruct=function(){
pt._wD(gt+".destruct()"),pt.disable(!0);
},a=function(e){
var n,o,i,a,s,r,l,u,c,m,_=this,g=!1,y=[],w=0,v=null;
c={
duration:null,
time:null
},this.id=e.id,this.sID=this.id,this.url=e.url,this.options=p(e),this.instanceOptions=this.options,
this._iO=this.instanceOptions,this.pan=this.options.pan,this.volume=this.options.volume,
this.isHTML5=!1,this._a=null,m=this.url?!1:!0,this.id3={},this._debug=function(){
pt._wD(_.id+": Merged options:",_.options);
},this.load=function(e){
var n,o=null;
if(e!==t?_._iO=p(e,_.options):(e=_.options,_._iO=e,v&&v!==_.url&&(h("manURL"),_._iO.url=_.url,
_.url=null)),_._iO.url||(_._iO.url=_.url),_._iO.url=z(_._iO.url),_.instanceOptions=_._iO,
n=_._iO,pt._wD(_.id+": load ("+n.url+")"),!n.url&&!_.url)return pt._wD(_.id+": load(): url is unassigned. Exiting.",2),
_;
if(_.isHTML5||8!==d||_.url||n.autoPlay||pt._wD(_.id+": Flash 8 load() limitation: Wait for onload() before calling play().",1),
n.url===_.url&&0!==_.readyState&&2!==_.readyState)return h("onURL",1),3===_.readyState&&n.onload&&ct(_,function(){
n.onload.apply(_,[!!_.duration]);
}),_;
if(_.loaded=!1,_.readyState=1,_.playState=0,_.id3={},Y(n))o=_._setup_html5(n),o._called_load?pt._wD(_.id+": Ignoring request to load again"):(_._html5_canplay=!1,
_.url!==n.url&&(pt._wD(h("manURL")+": "+n.url),_._a.src=n.url,_.setPosition(0)),
_._a.autobuffer="auto",_._a.preload="auto",_._a._called_load=!0,n.autoPlay&&_.play());else{
if(pt.html5Only)return pt._wD(_.id+": No flash support. Exiting."),_;
if(_._iO.url&&_._iO.url.match(/data\:/i))return pt._wD(_.id+": data: URIs not supported via Flash. Exiting."),
_;
try{
_.isHTML5=!1,_._iO=V(q(n)),n=_._iO,8===d?_t._load(_.id,n.url,n.stream,n.autoPlay,n.usePolicyFile):_t._load(_.id,n.url,!!n.stream,!!n.autoPlay,n.loops||1,!!n.autoLoad,n.usePolicyFile);
}catch(i){
h("smError",2),f("onload",!1),E({
type:"SMSOUND_LOAD_JS_EXCEPTION",
fatal:!0
});
}
}
return _.url=n.url,_;
},this.unload=function(){
return 0!==_.readyState&&(pt._wD(_.id+": unload()"),_.isHTML5?(a(),_._a&&(_._a.pause(),
v=nt(_._a))):8===d?_t._unload(_.id,sn):_t._unload(_.id),n()),_;
},this.destruct=function(e){
pt._wD(_.id+": Destruct"),_.isHTML5?(a(),_._a&&(_._a.pause(),nt(_._a),jt||i(),_._a._s=null,
_._a=null)):(_._iO.onfailure=null,_t._destroySound(_.id)),e||pt.destroySound(_.id,!0);
},this.play=function(e,n){
var o,i,a,l,f,h,c,y=!0,w=null;
if(o=_.id+": play(): ",n=n===t?!0:n,e||(e={}),_.url&&(_._iO.url=_.url),_._iO=p(_._iO,_.options),
_._iO=p(e,_._iO),_._iO.url=z(_._iO.url),_.instanceOptions=_._iO,!_.isHTML5&&_._iO.serverURL&&!_.connected)return _.getAutoPlay()||(pt._wD(o+" Netstream not connected yet - setting autoPlay"),
_.setAutoPlay(!0)),_;
if(Y(_._iO)&&(_._setup_html5(_._iO),s()),1!==_.playState||_.paused||(i=_._iO.multiShot,
i?pt._wD(o+"Already playing (multi-shot)",1):(pt._wD(o+"Already playing (one-shot)",1),
_.isHTML5&&_.setPosition(_._iO.position),w=_)),null!==w)return w;
if(e.url&&e.url!==_.url&&(_.readyState||_.isHTML5||8!==d||!m?_.load(_._iO):m=!1),
_.loaded?pt._wD(o.substr(0,o.lastIndexOf(":"))):0===_.readyState?(pt._wD(o+"Attempting to load"),
_.isHTML5||pt.html5Only?_.isHTML5?_.load(_._iO):(pt._wD(o+"Unsupported type. Exiting."),
w=_):(_._iO.autoPlay=!0,_.load(_._iO)),_.instanceOptions=_._iO):2===_.readyState?(pt._wD(o+"Could not load - exiting",2),
w=_):pt._wD(o+"Loading - attempting to play..."),null!==w)return w;
if(!_.isHTML5&&9===d&&_.position>0&&_.position===_.duration&&(pt._wD(o+"Sound at end, resetting to position:0"),
e.position=0),_.paused&&_.position>=0&&(!_._iO.serverURL||_.position>0))pt._wD(o+"Resuming from paused state",1),
_.resume();else{
if(_._iO=p(e,_._iO),null!==_._iO.from&&null!==_._iO.to&&0===_.instanceCount&&0===_.playState&&!_._iO.serverURL){
if(l=function(){
_._iO=p(e,_._iO),_.play(_._iO);
},_.isHTML5&&!_._html5_canplay?(pt._wD(o+"Beginning load for from/to case"),_.load({
oncanplay:l
}),w=!1):_.isHTML5||_.loaded||_.readyState&&2===_.readyState||(pt._wD(o+"Preloading for from/to case"),
_.load({
onload:l
}),w=!1),null!==w)return w;
_._iO=u();
}
(!_.instanceCount||_._iO.multiShotEvents||_.isHTML5&&_._iO.multiShot&&!jt||!_.isHTML5&&d>8&&!_.getAutoPlay())&&_.instanceCount++,
_._iO.onposition&&0===_.playState&&r(_),_.playState=1,_.paused=!1,_.position=_._iO.position===t||isNaN(_._iO.position)?0:_._iO.position,
_.isHTML5||(_._iO=V(q(_._iO))),_._iO.onplay&&n&&(_._iO.onplay.apply(_),g=!0),_.setVolume(_._iO.volume,!0),
_.setPan(_._iO.pan,!0),_.isHTML5?_.instanceCount<2?(s(),a=_._setup_html5(),_.setPosition(_._iO.position),
a.play()):(pt._wD(_.id+": Cloning Audio() for instance #"+_.instanceCount+"..."),
f=new Audio(_._iO.url),h=function(){
at.remove(f,"onended",h),_._onfinish(_),nt(f),f=null;
},c=function(){
at.remove(f,"canplay",c);
try{
f.currentTime=_._iO.position/an;
}catch(e){
Q(_.id+": multiShot play() failed to apply position of "+_._iO.position/an);
}
f.play();
},at.add(f,"ended",h),_._iO.position?at.add(f,"canplay",c):f.play()):(y=_t._start(_.id,_._iO.loops||1,9===d?_.position:_.position/an,_._iO.multiShot||!1),
9!==d||y||(pt._wD(o+"No sound hardware, or 32-sound ceiling hit",2),_._iO.onplayerror&&_._iO.onplayerror.apply(_)));
}
return _;
},this.start=this.play,this.stop=function(e){
var t,n=_._iO;
return 1===_.playState&&(pt._wD(_.id+": stop()"),_._onbufferchange(0),_._resetOnPosition(0),
_.paused=!1,_.isHTML5||(_.playState=0),l(),n.to&&_.clearOnPosition(n.to),_.isHTML5?_._a&&(t=_.position,
_.setPosition(0),_.position=t,_._a.pause(),_.playState=0,_._onTimer(),a()):(_t._stop(_.id,e),
n.serverURL&&_.unload()),_.instanceCount=0,_._iO={},n.onstop&&n.onstop.apply(_)),
_;
},this.setAutoPlay=function(e){
pt._wD(_.id+": Autoplay turned "+(e?"on":"off")),_._iO.autoPlay=e,_.isHTML5||(_t._setAutoPlay(_.id,e),
e&&(_.instanceCount||1!==_.readyState||(_.instanceCount++,pt._wD(_.id+": Incremented instance count to "+_.instanceCount))));
},this.getAutoPlay=function(){
return _._iO.autoPlay;
},this.setPosition=function(e){
e===t&&(e=0);
var n,o,i=_.isHTML5?Math.max(e,0):Math.min(_.duration||_._iO.duration,Math.max(e,0));
if(_.position=i,o=_.position/an,_._resetOnPosition(_.position),_._iO.position=i,
_.isHTML5){
if(_._a){
if(_._html5_canplay){
if(_._a.currentTime!==o){
pt._wD(_.id+": setPosition("+o+")");
try{
_._a.currentTime=o,(0===_.playState||_.paused)&&_._a.pause();
}catch(a){
pt._wD(_.id+": setPosition("+o+") failed: "+a.message,2);
}
}
}else if(o)return pt._wD(_.id+": setPosition("+o+"): Cannot seek yet, sound not ready",2),
_;
_.paused&&_._onTimer(!0);
}
}else n=9===d?_.position:o,_.readyState&&2!==_.readyState&&_t._setPosition(_.id,n,_.paused||!_.playState,_._iO.multiShot);
return _;
},this.pause=function(e){
return _.paused||0===_.playState&&1!==_.readyState?_:(pt._wD(_.id+": pause()"),_.paused=!0,
_.isHTML5?(_._setup_html5().pause(),a()):(e||e===t)&&_t._pause(_.id,_._iO.multiShot),
_._iO.onpause&&_._iO.onpause.apply(_),_);
},this.resume=function(){
var e=_._iO;
return _.paused?(pt._wD(_.id+": resume()"),_.paused=!1,_.playState=1,_.isHTML5?(_._setup_html5().play(),
s()):(e.isMovieStar&&!e.serverURL&&_.setPosition(_.position),_t._pause(_.id,e.multiShot)),
!g&&e.onplay?(e.onplay.apply(_),g=!0):e.onresume&&e.onresume.apply(_),_):_;
},this.togglePause=function(){
return pt._wD(_.id+": togglePause()"),0===_.playState?(_.play({
position:9!==d||_.isHTML5?_.position/an:_.position
}),_):(_.paused?_.resume():_.pause(),_);
},this.setPan=function(e,n){
return e===t&&(e=0),n===t&&(n=!1),_.isHTML5||_t._setPan(_.id,e),_._iO.pan=e,n||(_.pan=e,
_.options.pan=e),_;
},this.setVolume=function(e,n){
return e===t&&(e=100),n===t&&(n=!1),_.isHTML5?_._a&&(_._a.volume=Math.max(0,Math.min(1,e/100))):_t._setVolume(_.id,pt.muted&&!_.muted||_.muted?0:e),
_._iO.volume=e,n||(_.volume=e,_.options.volume=e),_;
},this.mute=function(){
return _.muted=!0,_.isHTML5?_._a&&(_._a.muted=!0):_t._setVolume(_.id,0),_;
},this.unmute=function(){
_.muted=!1;
var e=_._iO.volume!==t;
return _.isHTML5?_._a&&(_._a.muted=!1):_t._setVolume(_.id,e?_._iO.volume:_.options.volume),
_;
},this.toggleMute=function(){
return _.muted?_.unmute():_.mute();
},this.onPosition=function(e,n,o){
return y.push({
position:parseInt(e,10),
method:n,
scope:o!==t?o:_,
fired:!1
}),_;
},this.onposition=this.onPosition,this.clearOnPosition=function(e,t){
var n;
if(e=parseInt(e,10),isNaN(e))return!1;
for(n=0;n<y.length;n++)e===y[n].position&&(t&&t!==y[n].method||(y[n].fired&&w--,
y.splice(n,1)));
},this._processOnPosition=function(){
var e,t,n=y.length;
if(!n||!_.playState||w>=n)return!1;
for(e=n-1;e>=0;e--)t=y[e],!t.fired&&_.position>=t.position&&(t.fired=!0,w++,t.method.apply(t.scope,[t.position]));
return!0;
},this._resetOnPosition=function(e){
var t,n,o=y.length;
if(!o)return!1;
for(t=o-1;t>=0;t--)n=y[t],n.fired&&e<=n.position&&(n.fired=!1,w--);
return!0;
},u=function(){
var e,t,n=_._iO,o=n.from,i=n.to;
return t=function(){
pt._wD(_.id+': "To" time of '+i+" reached."),_.clearOnPosition(i,t),_.stop();
},e=function(){
pt._wD(_.id+': Playing "from" '+o),null===i||isNaN(i)||_.onPosition(i,t);
},null===o||isNaN(o)||(n.position=o,n.multiShot=!1,e()),n;
},r=function(){
var e,t=_._iO.onposition;
if(t)for(e in t)t.hasOwnProperty(e)&&_.onPosition(parseInt(e,10),t[e]);
},l=function(){
var e,t=_._iO.onposition;
if(t)for(e in t)t.hasOwnProperty(e)&&_.clearOnPosition(parseInt(e,10));
},s=function(){
_.isHTML5&&K(_);
},a=function(){
_.isHTML5&&J(_);
},n=function(e){
e||(y=[],w=0),g=!1,_._hasTimer=null,_._a=null,_._html5_canplay=!1,_.bytesLoaded=null,
_.bytesTotal=null,_.duration=_._iO&&_._iO.duration?_._iO.duration:null,_.durationEstimate=null,
_.buffered=[],_.eqData=[],_.eqData.left=[],_.eqData.right=[],_.failures=0,_.isBuffering=!1,
_.instanceOptions={},_.instanceCount=0,_.loaded=!1,_.metadata={},_.readyState=0,
_.muted=!1,_.paused=!1,_.peakData={
left:0,
right:0
},_.waveformData={
left:[],
right:[]
},_.playState=0,_.position=null,_.id3={};
},n(),this._onTimer=function(e){
var t,n,o=!1,i={};
return _._hasTimer||e?(_._a&&(e||(_.playState>0||1===_.readyState)&&!_.paused)&&(t=_._get_html5_duration(),
t!==c.duration&&(c.duration=t,_.duration=t,o=!0),_.durationEstimate=_.duration,n=_._a.currentTime*an||0,
n!==c.time&&(c.time=n,o=!0),(o||e)&&_._whileplaying(n,i,i,i,i)),o):void 0;
},this._get_html5_duration=function(){
var e=_._iO,t=_._a&&_._a.duration?_._a.duration*an:e&&e.duration?e.duration:null,n=t&&!isNaN(t)&&1/0!==t?t:null;
return n;
},this._apply_loop=function(e,t){
!e.loop&&t>1&&pt._wD("Note: Native HTML5 looping is infinite.",1),e.loop=t>1?"loop":"";
},this._setup_html5=function(e){
var t,i=p(_._iO,e),a=jt?mt:_._a,s=decodeURI(i.url);
if(jt?s===decodeURI(st)&&(t=!0):s===decodeURI(v)&&(t=!0),a){
if(a._s)if(jt)a._s&&a._s.playState&&!t&&a._s.stop();else if(!jt&&s===decodeURI(v))return _._apply_loop(a,i.loops),
a;
t||(n(!1),a.src=i.url,_.url=i.url,v=i.url,st=i.url,a._called_load=!1);
}else _._a=i.autoLoad||i.autoPlay?new Audio(i.url):Xt&&opera.version()<10?new Audio(null):new Audio,
a=_._a,a._called_load=!1,jt&&(mt=a);
return _.isHTML5=!0,_._a=a,a._s=_,o(),_._apply_loop(a,i.loops),i.autoLoad||i.autoPlay?_.load():(a.autobuffer=!1,
a.preload="auto"),a;
},o=function(){
function e(e,t,n){
return _._a?_._a.addEventListener(e,t,n||!1):null;
}
if(_._a._added_events)return!1;
var t;
_._a._added_events=!0;
for(t in dt)dt.hasOwnProperty(t)&&e(t,dt[t]);
return!0;
},i=function(){
function e(e,t,n){
return _._a?_._a.removeEventListener(e,t,n||!1):null;
}
var t;
pt._wD(_.id+": Removing event listeners"),_._a._added_events=!1;
for(t in dt)dt.hasOwnProperty(t)&&e(t,dt[t]);
},this._onload=function(e){
var t,n=!!e||!_.isHTML5&&8===d&&_.duration;
return t=_.id+": ",pt._wD(t+(n?"onload()":"Failed to load / invalid sound?"+(_.duration?" -":" Zero-length duration reported.")+" ("+_.url+")"),n?1:2),
n||_.isHTML5||(pt.sandbox.noRemote===!0&&pt._wD(t+N("noNet"),1),pt.sandbox.noLocal===!0&&pt._wD(t+N("noLocal"),1)),
_.loaded=n,_.readyState=n?3:2,_._onbufferchange(0),_._iO.onload&&ct(_,function(){
_._iO.onload.apply(_,[n]);
}),!0;
},this._onbufferchange=function(e){
return 0===_.playState?!1:e&&_.isBuffering||!e&&!_.isBuffering?!1:(_.isBuffering=1===e,
_._iO.onbufferchange&&(pt._wD(_.id+": Buffer state change: "+e),_._iO.onbufferchange.apply(_)),
!0);
},this._onsuspend=function(){
return _._iO.onsuspend&&(pt._wD(_.id+": Playback suspended"),_._iO.onsuspend.apply(_)),
!0;
},this._onfailure=function(e,t,n){
_.failures++,pt._wD(_.id+": Failures = "+_.failures),_._iO.onfailure&&1===_.failures?_._iO.onfailure(_,e,t,n):pt._wD(_.id+": Ignoring failure");
},this._onfinish=function(){
var e=_._iO.onfinish;
_._onbufferchange(0),_._resetOnPosition(0),_.instanceCount&&(_.instanceCount--,_.instanceCount||(l(),
_.playState=0,_.paused=!1,_.instanceCount=0,_.instanceOptions={},_._iO={},a(),_.isHTML5&&(_.position=0)),
(!_.instanceCount||_._iO.multiShotEvents)&&e&&(pt._wD(_.id+": onfinish()"),ct(_,function(){
e.apply(_);
})));
},this._whileloading=function(e,t,n,o){
var i=_._iO;
_.bytesLoaded=e,_.bytesTotal=t,_.duration=Math.floor(n),_.bufferLength=o,_.durationEstimate=_.isHTML5||i.isMovieStar?_.duration:i.duration?_.duration>i.duration?_.duration:i.duration:parseInt(_.bytesTotal/_.bytesLoaded*_.duration,10),
_.isHTML5||(_.buffered=[{
start:0,
end:_.duration
}]),(3!==_.readyState||_.isHTML5)&&i.whileloading&&i.whileloading.apply(_);
},this._whileplaying=function(e,n,o,i,a){
var s,r=_._iO;
return isNaN(e)||null===e?!1:(_.position=Math.max(0,e),_._processOnPosition(),!_.isHTML5&&d>8&&(r.usePeakData&&n!==t&&n&&(_.peakData={
left:n.leftPeak,
right:n.rightPeak
}),r.useWaveformData&&o!==t&&o&&(_.waveformData={
left:o.split(","),
right:i.split(",")
}),r.useEQData&&a!==t&&a&&a.leftEQ&&(s=a.leftEQ.split(","),_.eqData=s,_.eqData.left=s,
a.rightEQ!==t&&a.rightEQ&&(_.eqData.right=a.rightEQ.split(",")))),1===_.playState&&(_.isHTML5||8!==d||_.position||!_.isBuffering||_._onbufferchange(0),
r.whileplaying&&r.whileplaying.apply(_)),!0);
},this._oncaptiondata=function(e){
pt._wD(_.id+": Caption data received."),_.captiondata=e,_._iO.oncaptiondata&&_._iO.oncaptiondata.apply(_,[e]);
},this._onmetadata=function(e,t){
pt._wD(_.id+": Metadata received.");
var n,o,i={};
for(n=0,o=e.length;o>n;n++)i[e[n]]=t[n];
_.metadata=i,_._iO.onmetadata&&_._iO.onmetadata.apply(_);
},this._onid3=function(e,t){
pt._wD(_.id+": ID3 data received.");
var n,o,i=[];
for(n=0,o=e.length;o>n;n++)i[e[n]]=t[n];
_.id3=p(_.id3,i),_._iO.onid3&&_._iO.onid3.apply(_);
},this._onconnect=function(e){
e=1===e,pt._wD(_.id+": "+(e?"Connected.":"Failed to connect? - "+_.url),e?1:2),_.connected=e,
e&&(_.failures=0,$(_.id)&&(_.getAutoPlay()?_.play(t,_.getAutoPlay()):_._iO.autoLoad&&_.load()),
_._iO.onconnect&&_._iO.onconnect.apply(_,[e]));
},this._ondataerror=function(e){
_.playState>0&&(pt._wD(_.id+": Data error: "+e),_._iO.ondataerror&&_._iO.ondataerror.apply(_));
},this._debug();
},I=function(){
return Ot.body||Ot._docElement||Ot.getElementsByTagName("div")[0];
},s=function(e){
return Ot.getElementById(e);
},p=function(e,n){
var o,i,a=e||{};
o=n===t?pt.defaultOptions:n;
for(i in o)o.hasOwnProperty(i)&&a[i]===t&&(a[i]="object"!=typeof o[i]||null===o[i]?o[i]:p(a[i],o[i]));
return a;
},ct=function(e,t){
e.isHTML5||8!==d?t():window.setTimeout(t,0);
},_={
onready:1,
ontimeout:1,
defaultOptions:1,
flash9Options:1,
movieStarOptions:1
},m=function(e,n){
var o,i=!0,a=n!==t,s=pt.setupOptions,r=_;
if(e===t){
i=[];
for(o in s)s.hasOwnProperty(o)&&i.push(o);
for(o in r)r.hasOwnProperty(o)&&i.push("object"==typeof pt[o]?o+": {...}":pt[o]instanceof Function?o+": function() {...}":o);
return pt._wD(N("setup",i.join(", "))),!1;
}
for(o in e)if(e.hasOwnProperty(o))if("object"!=typeof e[o]||null===e[o]||e[o]instanceof Array||e[o]instanceof RegExp)a&&r[n]!==t?pt[n][o]=e[o]:s[o]!==t?(pt.setupOptions[o]=e[o],
pt[o]=e[o]):r[o]===t?(Q(N(pt[o]===t?"setupUndef":"setupError",o),2),i=!1):pt[o]instanceof Function?pt[o].apply(pt,e[o]instanceof Array?e[o]:[e[o]]):pt[o]=e[o];else{
if(r[o]!==t)return m(e[o],o);
Q(N(pt[o]===t?"setupUndef":"setupError",o),2),i=!1;
}
return i;
},at=function(){
function e(e){
var t=Wt.call(e),n=t.length;
return i?(t[1]="on"+t[1],n>3&&t.pop()):3===n&&t.push(!1),t;
}
function t(e,t){
var n=e.shift(),o=[a[t]];
i?n[o](e[0],e[1]):n[o].apply(n,e);
}
function n(){
t(e(arguments),"add");
}
function o(){
t(e(arguments),"remove");
}
var i=window.attachEvent,a={
add:i?"attachEvent":"addEventListener",
remove:i?"detachEvent":"removeEventListener"
};
return{
add:n,
remove:o
};
}(),dt={
abort:i(function(){
pt._wD(this._s.id+": abort");
}),
canplay:i(function(){
var e,n=this._s;
if(n._html5_canplay)return!0;
if(n._html5_canplay=!0,pt._wD(n.id+": canplay"),n._onbufferchange(0),e=n._iO.position===t||isNaN(n._iO.position)?null:n._iO.position/an,
n.position&&this.currentTime!==e){
pt._wD(n.id+": canplay: Setting position to "+e);
try{
this.currentTime=e;
}catch(o){
pt._wD(n.id+": canplay: Setting position of "+e+" failed: "+o.message,2);
}
}
n._iO._oncanplay&&n._iO._oncanplay();
}),
canplaythrough:i(function(){
var e=this._s;
e.loaded||(e._onbufferchange(0),e._whileloading(e.bytesLoaded,e.bytesTotal,e._get_html5_duration()),
e._onload(!0));
}),
ended:i(function(){
var e=this._s;
pt._wD(e.id+": ended"),e._onfinish();
}),
error:i(function(){
pt._wD(this._s.id+": HTML5 error, code "+this.error.code),this._s._onload(!1);
}),
loadeddata:i(function(){
var e=this._s;
pt._wD(e.id+": loadeddata"),e._loaded||Jt||(e.duration=e._get_html5_duration());
}),
loadedmetadata:i(function(){
pt._wD(this._s.id+": loadedmetadata");
}),
loadstart:i(function(){
pt._wD(this._s.id+": loadstart"),this._s._onbufferchange(1);
}),
play:i(function(){
this._s._onbufferchange(0);
}),
playing:i(function(){
pt._wD(this._s.id+": playing"),this._s._onbufferchange(0);
}),
progress:i(function(e){
var t,n,o,i=this._s,a=0,s="progress"===e.type,r=e.target.buffered,l=e.loaded||0,u=e.total||1;
if(i.buffered=[],r&&r.length){
for(t=0,n=r.length;n>t;t++)i.buffered.push({
start:r.start(t)*an,
end:r.end(t)*an
});
if(a=(r.end(0)-r.start(0))*an,l=Math.min(1,a/(e.target.duration*an)),s&&r.length>1){
for(o=[],n=r.length,t=0;n>t;t++)o.push(e.target.buffered.start(t)*an+"-"+e.target.buffered.end(t)*an);
pt._wD(this._s.id+": progress, timeRanges: "+o.join(", "));
}
s&&!isNaN(l)&&pt._wD(this._s.id+": progress, "+Math.floor(100*l)+"% loaded");
}
isNaN(l)||(i._onbufferchange(0),i._whileloading(l,u,i._get_html5_duration()),l&&u&&l===u&&dt.canplaythrough.call(this,e));
}),
ratechange:i(function(){
pt._wD(this._s.id+": ratechange");
}),
suspend:i(function(e){
var t=this._s;
pt._wD(this._s.id+": suspend"),dt.progress.call(this,e),t._onsuspend();
}),
stalled:i(function(){
pt._wD(this._s.id+": stalled");
}),
timeupdate:i(function(){
this._s._onTimer();
}),
waiting:i(function(){
var e=this._s;
pt._wD(this._s.id+": waiting"),e._onbufferchange(1);
})
},Y=function(e){
var t;
return t=e&&(e.type||e.url||e.serverURL)?e.serverURL||e.type&&o(e.type)?!1:e.type?et({
type:e.type
}):et({
url:e.url
})||pt.html5Only||e.url.match(/data\:/i):!1;
},nt=function(e){
var t;
return e&&(t=Jt&&!Vt?null:zt?sn:null,e.removeAttribute("src"),void 0!==e._called_unload&&(e._called_load=!1)),
jt&&(st=null),t;
},et=function(e){
if(!pt.useHTML5Audio||!pt.hasHTML5)return!1;
var n,i,a,s,r=e.url||null,l=e.type||null,u=pt.audioFormats;
if(l&&pt.html5[l]!==t)return pt.html5[l]&&!o(l);
if(!tt){
tt=[];
for(s in u)u.hasOwnProperty(s)&&(tt.push(s),u[s].related&&(tt=tt.concat(u[s].related)));
tt=new RegExp("\\.("+tt.join("|")+")(\\?.*)?$","i");
}
return a=r?r.toLowerCase().match(tt):null,a&&a.length?a=a[1]:l?(i=l.indexOf(";"),
a=(-1!==i?l.substr(0,i):l).substr(6)):n=!1,a&&pt.html5[a]!==t?n=pt.html5[a]&&!o(a):(l="audio/"+a,
n=pt.html5.canPlayType({
type:l
}),pt.html5[a]=n,n=n&&pt.html5[l]&&!o(l)),n;
},it=function(){
function e(e){
var t,n,o,i=!1,a=!1;
if(!s||"function"!=typeof s.canPlayType)return i;
if(e instanceof Array){
for(n=0,o=e.length;o>n;n++)(pt.html5[e[n]]||s.canPlayType(e[n]).match(pt.html5Test))&&(a=!0,
pt.html5[e[n]]=!0,pt.flash[e[n]]=!!e[n].match(on));
i=a;
}else t=s&&"function"==typeof s.canPlayType?s.canPlayType(e):!1,i=!(!t||!t.match(pt.html5Test));
return i;
}
if(!pt.useHTML5Audio||!pt.hasHTML5)return pt.html5.usingFlash=!0,Bt=!0,!1;
var n,o,i,a,s=Audio!==t?Xt&&opera.version()<10?new Audio(null):new Audio:null,r={};
i=pt.audioFormats;
for(n in i)if(i.hasOwnProperty(n)&&(o="audio/"+n,r[n]=e(i[n].type),r[o]=r[n],n.match(on)?(pt.flash[n]=!0,
pt.flash[o]=!0):(pt.flash[n]=!1,pt.flash[o]=!1),i[n]&&i[n].related))for(a=i[n].related.length-1;a>=0;a--)r["audio/"+i[n].related[a]]=r[n],
pt.html5[i[n].related[a]]=r[n],pt.flash[i[n].related[a]]=r[n];
return r.canPlayType=s?e:null,pt.html5=p(pt.html5,r),pt.html5.usingFlash=Z(),Bt=pt.html5.usingFlash,
!0;
},M={
notReady:"Unavailable - wait until onready() has fired.",
notOK:"Audio support is not available.",
domError:gt+"exception caught while appending SWF to DOM.",
spcWmode:"Removing wmode, preventing known SWF loading issue(s)",
swf404:yt+"Verify that %s is a valid path.",
tryDebug:"Try "+gt+".debugFlash = true for more security details (output goes to SWF.)",
checkSWF:"See SWF output for more debug info.",
localFail:yt+"Non-HTTP page ("+Ot.location.protocol+" URL?) Review Flash player security settings for this special case:\nhttp://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html\nMay need to add/allow path, eg. c:/sm2/ or /users/me/sm2/",
waitFocus:yt+"Special case: Waiting for SWF to load with window focus...",
waitForever:yt+"Waiting indefinitely for Flash (will recover if unblocked)...",
waitSWF:yt+"Waiting for 100% SWF load...",
needFunction:yt+"Function object expected for %s",
badID:'Sound ID "%s" should be a string, starting with a non-numeric character',
currentObj:yt+"_debug(): Current sound objects",
waitOnload:yt+"Waiting for window.onload()",
docLoaded:yt+"Document already loaded",
onload:yt+"initComplete(): calling soundManager.onload()",
onloadOK:gt+".onload() complete",
didInit:yt+"init(): Already called?",
secNote:"Flash security note: Network/internet URLs will not load due to security restrictions. Access can be configured via Flash Player Global Security Settings Page: http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html",
badRemove:yt+"Failed to remove Flash node.",
shutdown:gt+".disable(): Shutting down",
queue:yt+"Queueing %s handler",
smError:"SMSound.load(): Exception: JS-Flash communication failed, or JS error.",
fbTimeout:"No flash response, applying ."+W.swfTimedout+" CSS...",
fbLoaded:"Flash loaded",
fbHandler:yt+"flashBlockHandler()",
manURL:"SMSound.load(): Using manually-assigned URL",
onURL:gt+".load(): current URL already assigned.",
badFV:gt+'.flashVersion must be 8 or 9. "%s" is invalid. Reverting to %s.',
as2loop:"Note: Setting stream:false so looping can work (flash 8 limitation)",
noNSLoop:"Note: Looping not implemented for MovieStar formats",
needfl9:"Note: Switching to flash 9, required for MP4 formats.",
mfTimeout:"Setting flashLoadTimeout = 0 (infinite) for off-screen, mobile flash case",
needFlash:yt+"Fatal error: Flash is needed to play some required formats, but is not available.",
gotFocus:yt+"Got window focus.",
policy:"Enabling usePolicyFile for data access",
setup:gt+".setup(): allowed parameters: %s",
setupError:gt+'.setup(): "%s" cannot be assigned with this method.',
setupUndef:gt+'.setup(): Could not find option "%s"',
setupLate:gt+".setup(): url, flashVersion and html5Test property changes will not take effect until reboot().",
noURL:yt+"Flash URL required. Call soundManager.setup({url:...}) to get started.",
sm2Loaded:"SoundManager 2: Ready.",
reset:gt+".reset(): Removing event callbacks",
mobileUA:"Mobile UA detected, preferring HTML5 by default.",
globalHTML5:"Using singleton HTML5 Audio() pattern for this device."
},N=function(){
var e,t,n=Wt.call(arguments),o=n.shift(),i=M&&M[o]?M[o]:"";
if(i&&n&&n.length)for(e=0,t=n.length;t>e;e++)i=i.replace("%s",n[e]);
return i;
},q=function(e){
return 8===d&&e.loops>1&&e.stream&&(h("as2loop"),e.stream=!1),e;
},V=function(e,t){
return e&&!e.usePolicyFile&&(e.onid3||e.usePeakData||e.useWaveformData||e.useEQData)&&(pt._wD((t||"")+N("policy")),
e.usePolicyFile=!0),e;
},Q=function(e){
Yt&&console.warn!==t?console.warn(e):pt._wD(e);
},r=function(){
return!1;
},C=function(e){
var t;
for(t in e)e.hasOwnProperty(t)&&"function"==typeof e[t]&&(e[t]=r);
t=null;
},x=function(e){
e===t&&(e=!1),(St||e)&&pt.disable(e);
},R=function(e){
var t,n=null;
if(e)if(e.match(/\.swf(\?.*)?$/i)){
if(n=e.substr(e.toLowerCase().lastIndexOf(".swf?")+4))return e;
}else e.lastIndexOf("/")!==e.length-1&&(e+="/");
return t=(e&&-1!==e.lastIndexOf("/")?e.substr(0,e.lastIndexOf("/")+1):"./")+pt.movieURL,
pt.noSWFCache&&(t+="?ts="+(new Date).getTime()),t;
},O=function(){
d=parseInt(pt.flashVersion,10),8!==d&&9!==d&&(pt._wD(N("badFV",d,Et)),pt.flashVersion=d=Et);
var e=pt.debugMode||pt.debugFlash?"_debug.swf":".swf";
pt.useHTML5Audio&&!pt.html5Only&&pt.audioFormats.mp4.required&&9>d&&(pt._wD(N("needfl9")),
pt.flashVersion=d=9),pt.version=pt.versionNumber+(pt.html5Only?" (HTML5-only mode)":9===d?" (AS3/Flash 9)":" (AS2/Flash 8)"),
d>8?(pt.defaultOptions=p(pt.defaultOptions,pt.flash9Options),pt.features.buffering=!0,
pt.defaultOptions=p(pt.defaultOptions,pt.movieStarOptions),pt.filePatterns.flash9=new RegExp("\\.(mp3|"+dn.join("|")+")(\\?.*)?$","i"),
pt.features.movieStar=!0):pt.features.movieStar=!1,pt.filePattern=pt.filePatterns[8!==d?"flash9":"flash8"],
pt.movieURL=(8===d?"soundmanager2.swf":"soundmanager2_flash9.swf").replace(".swf",e),
pt.features.peakData=pt.features.waveformData=pt.features.eqData=d>8;
},A=function(e,t){
return _t?void _t._setPolling(e,t):!1;
},k=function(){
if(pt.debugURLParam.test(bt)&&(pt.debugMode=!0),s(pt.debugID))return!1;
var e,t,n,o,i;
if(!(!pt.debugMode||s(pt.debugID)||Yt&&pt.useConsole&&pt.consoleOnly)){
e=Ot.createElement("div"),e.id=pt.debugID+"-toggle",o={
position:"fixed",
bottom:"0px",
right:"0px",
width:"1.2em",
height:"1.2em",
lineHeight:"1.2em",
margin:"2px",
textAlign:"center",
border:"1px solid #999",
cursor:"pointer",
background:"#fff",
color:"#333",
zIndex:10001
},e.appendChild(Ot.createTextNode("-")),e.onclick=j,e.title="Toggle SM2 debug console",
vt.match(/msie 6/i)&&(e.style.position="absolute",e.style.cursor="hand");
for(i in o)o.hasOwnProperty(i)&&(e.style[i]=o[i]);
if(t=Ot.createElement("div"),t.id=pt.debugID,t.style.display=pt.debugMode?"block":"none",
pt.debugMode&&!s(e.id)){
try{
n=I(),n.appendChild(e);
}catch(a){
throw new Error(N("domError")+" \n"+a.toString());
}
n.appendChild(t);
}
}
n=null;
},$=this.getSoundById,h=function(e,t){
return e?pt._wD(N(e),t):"";
},j=function(){
var e=s(pt.debugID),t=s(pt.debugID+"-toggle");
return e?(Mt?(t.innerHTML="+",e.style.display="none"):(t.innerHTML="-",e.style.display="block"),
void(Mt=!Mt)):!1;
},f=function(e,n,o){
if(window.sm2Debugger!==t)try{
sm2Debugger.handleEvent(e,n,o);
}catch(i){
return!1;
}
return!0;
},B=function(){
var e=[];
return pt.debugMode&&e.push(W.sm2Debug),pt.debugFlash&&e.push(W.flashDebug),pt.useHighPerformance&&e.push(W.highPerf),
e.join(" ");
},U=function(){
var e=N("fbHandler"),t=pt.getMoviePercent(),n=W,o={
type:"FLASHBLOCK"
};
return pt.html5Only?!1:void(pt.ok()?(pt.didFlashBlock&&pt._wD(e+": Unblocked"),pt.oMC&&(pt.oMC.className=[B(),n.swfDefault,n.swfLoaded+(pt.didFlashBlock?" "+n.swfUnblocked:"")].join(" "))):(Bt&&(pt.oMC.className=B()+" "+n.swfDefault+" "+(null===t?n.swfTimedout:n.swfError),
pt._wD(e+": "+N("fbTimeout")+(t?" ("+N("fbLoaded")+")":""))),pt.didFlashBlock=!0,
y({
type:"ontimeout",
ignoreInit:!0,
error:o
}),E(o)));
},g=function(e,n,o){
Dt[e]===t&&(Dt[e]=[]),Dt[e].push({
method:n,
scope:o||null,
fired:!1
});
},y=function(e){
if(e||(e={
type:pt.ok()?"onready":"ontimeout"
}),!Pt&&e&&!e.ignoreInit)return!1;
if("ontimeout"===e.type&&(pt.ok()||St&&!e.ignoreInit))return!1;
var t,n,o={
success:e&&e.ignoreInit?pt.ok():!St
},i=e&&e.type?Dt[e.type]||[]:[],a=[],s=[o],r=Bt&&!pt.ok();
for(e.error&&(s[0].error=e.error),t=0,n=i.length;n>t;t++)i[t].fired!==!0&&a.push(i[t]);
if(a.length)for(t=0,n=a.length;n>t;t++)a[t].scope?a[t].method.apply(a[t].scope,s):a[t].method.apply(this,s),
r||(a[t].fired=!0);
return!0;
},w=function(){
window.setTimeout(function(){
pt.useFlashBlock&&U(),y(),"function"==typeof pt.onload&&(h("onload",1),pt.onload.apply(window),
h("onloadOK",1)),pt.waitForWindowLoad&&at.add(window,"load",w);
},1);
},lt=function(){
if(rt!==t)return rt;
var e,n,o,i=!1,a=navigator,s=a.plugins,r=window.ActiveXObject;
if(s&&s.length)n="application/x-shockwave-flash",o=a.mimeTypes,o&&o[n]&&o[n].enabledPlugin&&o[n].enabledPlugin.description&&(i=!0);else if(r!==t&&!vt.match(/MSAppHost/i)){
try{
e=new r("ShockwaveFlash.ShockwaveFlash");
}catch(l){
e=null;
}
i=!!e,e=null;
}
return rt=i,i;
},Z=function(){
var e,t,n=pt.audioFormats,o=Vt&&!!vt.match(/os (1|2|3_0|3_1)/i);
if(o?(pt.hasHTML5=!1,pt.html5Only=!0,pt.oMC&&(pt.oMC.style.display="none")):pt.useHTML5Audio&&(pt.html5&&pt.html5.canPlayType||(pt._wD("SoundManager: No HTML5 Audio() support detected."),
pt.hasHTML5=!1),Zt&&pt._wD(yt+"Note: Buggy HTML5 Audio in Safari on this OS X release, see https://bugs.webkit.org/show_bug.cgi?id=32159 - "+(rt?"will use flash fallback for MP3/MP4, if available":" would use flash fallback for MP3/MP4, but none detected."),1)),
pt.useHTML5Audio&&pt.hasHTML5){
G=!0;
for(t in n)n.hasOwnProperty(t)&&n[t].required&&(pt.html5.canPlayType(n[t].type)?pt.preferFlash&&(pt.flash[t]||pt.flash[n[t].type])&&(e=!0):(G=!1,
e=!0));
}
return pt.ignoreFlash&&(e=!1,G=!0),pt.html5Only=pt.hasHTML5&&pt.useHTML5Audio&&!e,
!pt.html5Only;
},z=function(e){
var t,n,o,i=0;
if(e instanceof Array){
for(t=0,n=e.length;n>t;t++)if(e[t]instanceof Object){
if(pt.canPlayMIME(e[t].type)){
i=t;
break;
}
}else if(pt.canPlayURL(e[t])){
i=t;
break;
}
e[i].url&&(e[i]=e[i].url),o=e[i];
}else o=e;
return o;
},K=function(e){
e._hasTimer||(e._hasTimer=!0,!Gt&&pt.html5PollingInterval&&(null===Nt&&0===Rt&&(Nt=setInterval(X,pt.html5PollingInterval)),
Rt++));
},J=function(e){
e._hasTimer&&(e._hasTimer=!1,!Gt&&pt.html5PollingInterval&&Rt--);
},X=function(){
var e;
if(null!==Nt&&!Rt)return clearInterval(Nt),Nt=null,!1;
for(e=pt.soundIDs.length-1;e>=0;e--)pt.sounds[pt.soundIDs[e]].isHTML5&&pt.sounds[pt.soundIDs[e]]._hasTimer&&pt.sounds[pt.soundIDs[e]]._onTimer();
},E=function(e){
e=e!==t?e:{},"function"==typeof pt.onerror&&pt.onerror.apply(window,[{
type:e.type!==t?e.type:null
}]),e.fatal!==t&&e.fatal&&pt.disable();
},ut=function(){
if(!Zt||!lt())return!1;
var e,t,n=pt.audioFormats;
for(t in n)if(n.hasOwnProperty(t)&&("mp3"===t||"mp4"===t)&&(pt._wD(gt+": Using flash fallback for "+t+" format"),
pt.html5[t]=!1,n[t]&&n[t].related))for(e=n[t].related.length-1;e>=0;e--)pt.html5[n[t].related[e]]=!1;
},this._setSandboxType=function(e){
var n=pt.sandbox;
n.type=e,n.description=n.types[n.types[e]!==t?e:"unknown"],"localWithFile"===n.type?(n.noRemote=!0,
n.noLocal=!1,h("secNote",2)):"localWithNetwork"===n.type?(n.noRemote=!1,n.noLocal=!0):"localTrusted"===n.type&&(n.noRemote=!1,
n.noLocal=!1);
},this._externalInterfaceOK=function(e){
if(pt.swfLoaded)return!1;
var t;
return f("swf",!0),f("flashtojs",!0),pt.swfLoaded=!0,tn=!1,Zt&&ut(),e&&e.replace(/\+dev/i,"")===pt.versionNumber.replace(/\+dev/i,"")?void setTimeout(u,$t?100:1):(t=gt+': Fatal: JavaScript file build "'+pt.versionNumber+'" does not match Flash SWF build "'+e+'" at '+pt.url+". Ensure both are up-to-date.",
setTimeout(function(){
throw new Error(t);
},0),!1);
},H=function(e,n){
function o(){
var e,t=[],n=[],o=" + ";
e="SoundManager "+pt.version+(!pt.html5Only&&pt.useHTML5Audio?pt.hasHTML5?" + HTML5 audio":", no HTML5 audio support":""),
pt.html5Only?pt.html5PollingInterval&&t.push("html5PollingInterval ("+pt.html5PollingInterval+"ms)"):(pt.preferFlash&&t.push("preferFlash"),
pt.useHighPerformance&&t.push("useHighPerformance"),pt.flashPollingInterval&&t.push("flashPollingInterval ("+pt.flashPollingInterval+"ms)"),
pt.html5PollingInterval&&t.push("html5PollingInterval ("+pt.html5PollingInterval+"ms)"),
pt.wmode&&t.push("wmode ("+pt.wmode+")"),pt.debugFlash&&t.push("debugFlash"),pt.useFlashBlock&&t.push("flashBlock")),
t.length&&(n=n.concat([t.join(o)])),pt._wD(e+(n.length?o+n.join(", "):""),1),ft();
}
function i(e,t){
return'<param name="'+e+'" value="'+t+'" />';
}
if(Lt&&Tt)return!1;
if(pt.html5Only)return O(),o(),pt.oMC=s(pt.movieID),u(),Lt=!0,Tt=!0,!1;
var a,r,l,d,f,h,c,p,m=n||pt.url,_=pt.altURL||m,g="JS/Flash audio component (SoundManager 2)",y=I(),w=B(),v=null,b=Ot.getElementsByTagName("html")[0];
if(v=b&&b.dir&&b.dir.match(/rtl/i),e=e===t?pt.id:e,O(),pt.url=R(rn?m:_),n=pt.url,
pt.wmode=!pt.wmode&&pt.useHighPerformance?"transparent":pt.wmode,null!==pt.wmode&&(vt.match(/msie 8/i)||!$t&&!pt.useHighPerformance)&&navigator.platform.match(/win32|win64/i)&&(Ut.push(M.spcWmode),
pt.wmode=null),a={
name:e,
id:e,
src:n,
quality:"high",
allowScriptAccess:pt.allowScriptAccess,
bgcolor:pt.bgColor,
pluginspage:ln+"www.macromedia.com/go/getflashplayer",
title:g,
type:"application/x-shockwave-flash",
wmode:pt.wmode,
hasPriority:"true"
},pt.debugFlash&&(a.FlashVars="debug=1"),pt.wmode||delete a.wmode,$t)r=Ot.createElement("div"),
d=['<object id="'+e+'" data="'+n+'" type="'+a.type+'" title="'+a.title+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="'+ln+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">',i("movie",n),i("AllowScriptAccess",pt.allowScriptAccess),i("quality",a.quality),pt.wmode?i("wmode",pt.wmode):"",i("bgcolor",pt.bgColor),i("hasPriority","true"),pt.debugFlash?i("FlashVars",a.FlashVars):"","</object>"].join("");else{
r=Ot.createElement("embed");
for(l in a)a.hasOwnProperty(l)&&r.setAttribute(l,a[l]);
}
if(k(),w=B(),y=I())if(pt.oMC=s(pt.movieID)||Ot.createElement("div"),pt.oMC.id)p=pt.oMC.className,
pt.oMC.className=(p?p+" ":W.swfDefault)+(w?" "+w:""),pt.oMC.appendChild(r),$t&&(f=pt.oMC.appendChild(Ot.createElement("div")),
f.className=W.swfBox,f.innerHTML=d),Tt=!0;else{
if(pt.oMC.id=pt.movieID,pt.oMC.className=W.swfDefault+" "+w,h=null,f=null,pt.useFlashBlock||(pt.useHighPerformance?h={
position:"fixed",
width:"8px",
height:"8px",
bottom:"0px",
left:"0px",
overflow:"hidden"
}:(h={
position:"absolute",
width:"6px",
height:"6px",
top:"-9999px",
left:"-9999px"
},v&&(h.left=Math.abs(parseInt(h.left,10))+"px"))),Kt&&(pt.oMC.style.zIndex=1e4),
!pt.debugFlash)for(c in h)h.hasOwnProperty(c)&&(pt.oMC.style[c]=h[c]);
try{
$t||pt.oMC.appendChild(r),y.appendChild(pt.oMC),$t&&(f=pt.oMC.appendChild(Ot.createElement("div")),
f.className=W.swfBox,f.innerHTML=d),Tt=!0;
}catch(D){
throw new Error(N("domError")+" \n"+D.toString());
}
}
return Lt=!0,o(),!0;
},L=function(){
return pt.html5Only?(H(),!1):_t?!1:pt.url?(_t=pt.getMovie(pt.id),_t||(At?($t?pt.oMC.innerHTML=kt:pt.oMC.appendChild(At),
At=null,Lt=!0):H(pt.id,pt.url),_t=pt.getMovie(pt.id)),"function"==typeof pt.oninitmovie&&setTimeout(pt.oninitmovie,1),
ht(),!0):(h("noURL"),!1);
},v=function(){
setTimeout(b,1e3);
},b=function(){
var e,t=!1;
return pt.url?Ct?!1:(Ct=!0,at.remove(window,"load",v),tn&&!en?(h("waitFocus"),!1):(Pt||(e=pt.getMoviePercent(),
e>0&&100>e&&(t=!0)),void setTimeout(function(){
return e=pt.getMoviePercent(),t?(Ct=!1,pt._wD(N("waitSWF")),window.setTimeout(v,1),
!1):(Pt||(pt._wD(gt+": No Flash response within expected time. Likely causes: "+(0===e?"SWF load failed, ":"")+"Flash blocked or JS-Flash security error."+(pt.debugFlash?" "+N("checkSWF"):""),2),
!rn&&e&&(h("localFail",2),pt.debugFlash||h("tryDebug",2)),0===e&&pt._wD(N("swf404",pt.url),1),
f("flashtojs",!1," (Check flash security or flash blockers)")),void(!Pt&&nn&&(null===e?pt.useFlashBlock||0===pt.flashLoadTimeout?(pt.useFlashBlock&&U(),
h("waitForever")):!pt.useFlashBlock&&G?window.setTimeout(function(){
Q(yt+"useFlashBlock is false, 100% HTML5 mode is possible. Rebooting with preferFlash: false..."),
pt.setup({
preferFlash:!1
}).reboot(),pt.didFlashBlock=!0,pt.beginDelayedInit();
},1):(h("waitForever"),y({
type:"ontimeout",
ignoreInit:!0
})):0===pt.flashLoadTimeout?h("waitForever"):x(!0))));
},pt.flashLoadTimeout))):!1;
},D=function(){
function e(){
at.remove(window,"focus",D);
}
return en||!tn?(e(),!0):(nn=!0,en=!0,h("gotFocus"),Ct=!1,v(),e(),!0);
},ht=function(){
Ut.length&&(pt._wD("SoundManager 2: "+Ut.join(" "),1),Ut=[]);
},ft=function(){
ht();
var e,t=[];
if(pt.useHTML5Audio&&pt.hasHTML5){
for(e in pt.audioFormats)pt.audioFormats.hasOwnProperty(e)&&t.push(e+" = "+pt.html5[e]+(!pt.html5[e]&&Bt&&pt.flash[e]?" (using flash)":pt.preferFlash&&pt.flash[e]&&Bt?" (preferring flash)":pt.html5[e]?"":" ("+(pt.audioFormats[e].required?"required, ":"")+"and no flash support)"));
pt._wD("SoundManager 2 HTML5 support: "+t.join(", "),1);
}
},c=function(e){
if(Pt)return!1;
if(pt.html5Only)return h("sm2Loaded"),Pt=!0,w(),f("onload",!0),!0;
var t,n=pt.useFlashBlock&&pt.flashLoadTimeout&&!pt.getMoviePercent(),o=!0;
return n||(Pt=!0,St&&(t={
type:!rt&&Bt?"NO_FLASH":"INIT_TIMEOUT"
})),pt._wD("SoundManager 2 "+(St?"failed to load":"loaded")+" ("+(St?"Flash security/load error":"OK")+")",St?2:1),
St||e?(pt.useFlashBlock&&pt.oMC&&(pt.oMC.className=B()+" "+(null===pt.getMoviePercent()?W.swfTimedout:W.swfError)),
y({
type:"ontimeout",
error:t,
ignoreInit:!0
}),f("onload",!1),E(t),o=!1):f("onload",!0),St||(pt.waitForWindowLoad&&!Ft?(h("waitOnload"),
at.add(window,"load",w)):(pt.waitForWindowLoad&&Ft&&h("docLoaded"),w())),o;
},l=function(){
var e,n=pt.setupOptions;
for(e in n)n.hasOwnProperty(e)&&(pt[e]===t?pt[e]=n[e]:pt[e]!==n[e]&&(pt.setupOptions[e]=pt[e]));
},u=function(){
function e(){
at.remove(window,"load",pt.beginDelayedInit);
}
if(Pt)return h("didInit"),!1;
if(pt.html5Only)return Pt||(e(),pt.enabled=!0,c()),!0;
L();
try{
_t._externalInterfaceTest(!1),A(!0,pt.flashPollingInterval||(pt.useHighPerformance?10:50)),
pt.debugMode||_t._disableDebug(),pt.enabled=!0,f("jstoflash",!0),pt.html5Only||at.add(window,"unload",r);
}catch(t){
return pt._wD("js/flash exception: "+t.toString()),f("jstoflash",!1),E({
type:"JS_TO_FLASH_EXCEPTION",
fatal:!0
}),x(!0),c(),!1;
}
return c(),e(),!0;
},P=function(){
return F?!1:(F=!0,l(),k(),function(){
var e="sm2-usehtml5audio=",t="sm2-preferflash=",n=null,o=null,i=bt.toLowerCase();
-1!==i.indexOf(e)&&(n="1"===i.charAt(i.indexOf(e)+e.length),Yt&&console.log((n?"Enabling ":"Disabling ")+"useHTML5Audio via URL parameter"),
pt.setup({
useHTML5Audio:n
})),-1!==i.indexOf(t)&&(o="1"===i.charAt(i.indexOf(t)+t.length),Yt&&console.log((o?"Enabling ":"Disabling ")+"preferFlash via URL parameter"),
pt.setup({
preferFlash:o
}));
}(),!rt&&pt.hasHTML5&&(pt._wD("SoundManager: No Flash detected"+(pt.useHTML5Audio?". Trying HTML5-only mode.":", enabling HTML5."),1),
pt.setup({
useHTML5Audio:!0,
preferFlash:!1
})),it(),!rt&&Bt&&(Ut.push(M.needFlash),pt.setup({
flashLoadTimeout:1
})),Ot.removeEventListener&&Ot.removeEventListener("DOMContentLoaded",P,!1),L(),
!0);
},ot=function(){
return"complete"===Ot.readyState&&(P(),Ot.detachEvent("onreadystatechange",ot)),
!0;
},S=function(){
Ft=!0,at.remove(window,"load",S);
},T=function(){
Gt&&((!pt.setupOptions.useHTML5Audio||pt.setupOptions.preferFlash)&&Ut.push(M.mobileUA),
pt.setupOptions.useHTML5Audio=!0,pt.setupOptions.preferFlash=!1,(Vt||Qt&&!vt.match(/android\s2\.3/i))&&(Ut.push(M.globalHTML5),
Vt&&(pt.ignoreFlash=!0),jt=!0));
},T(),lt(),at.add(window,"focus",D),at.add(window,"load",v),at.add(window,"load",S),
Ot.addEventListener?Ot.addEventListener("DOMContentLoaded",P,!1):Ot.attachEvent?Ot.attachEvent("onreadystatechange",ot):(f("onload",!1),
E({
type:"NO_DOM2_EVENTS",
fatal:!0
}));
}
var t,n=null;
return void 0!==window.SM2_DEFER&&SM2_DEFER||(n=new e),window.soundManager=n,n;
});define("tpl/richEditor/emotion.html.js",[],function(){
return'<span class="hook">\n	<span class="hook_dec hook_top"></span>\n	<span class="hook_dec hook_btm"></span>\n</span>\n<ul class="emotions" onselectstart="return false;">\n    {each edata as e index}\n        <li class="emotions_item">\n            <span class="icon_emotion_sprite js_emotion_i" data-name=\'{e.name}\'\n                data-title=\'{e.title}\' style=\'{e.bp}\'></span>\n        </li>\n    {/each}\n</ul>\n<span class="emotions_preview js_emotionPreviewArea"></span>\n';
});define("biz_common/utils/emoji_panel_data.js",[],function(){
return[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20,21,22,23,25,26,27,28,29,30,31,32,33,34,36,37,38,39,40,41,42,44,45,46,47,48,49,50,51,52,54,55,56,57,60,62,63,64,65,66,67,68,70,74,75,76,78,79,80,81,82,83,84,85,89,92,93,94,95,300,301,302,303,304,305,306,307,204,205,202,206,212,211,308,309,310,311,312,209,214];
});define("biz_common/utils/emoji_data.js",[],function(){
return[{
id:0,
cn:"[微笑]",
hk:"[微笑]",
us:"[Smile]",
code:"/::)",
web_code:"/微笑",
style:"icon_smiley_0"
},{
id:1,
cn:"[撇嘴]",
hk:"[撇嘴]",
us:"[Grimace]",
code:"/::~",
web_code:"/撇嘴",
style:"icon_smiley_1"
},{
id:2,
cn:"[色]",
hk:"[色]",
us:"[Drool]",
code:"/::B",
web_code:"/色",
style:"icon_smiley_2"
},{
id:3,
cn:"[发呆]",
hk:"[發呆]",
us:"[Scowl]",
code:"/::|",
web_code:"/发呆",
style:"icon_smiley_3"
},{
id:4,
cn:"[得意]",
hk:"[得意]",
us:"[CoolGuy]",
code:"/:8-)",
web_code:"/得意",
style:"icon_smiley_4"
},{
id:5,
cn:"[流泪]",
hk:"[流淚]",
us:"[Sob]",
code:"/::<",
web_code:"/流泪",
style:"icon_smiley_5"
},{
id:6,
cn:"[害羞]",
hk:"[害羞]",
us:"[Shy]",
code:"/::$",
web_code:"/害羞",
style:"icon_smiley_6"
},{
id:7,
cn:"[闭嘴]",
hk:"[閉嘴]",
us:"[Silent]",
code:"/::X",
web_code:"/闭嘴",
style:"icon_smiley_7"
},{
id:8,
cn:"[睡]",
hk:"[睡]",
us:"[Sleep]",
code:"/::Z",
web_code:"/睡",
style:"icon_smiley_8"
},{
id:9,
cn:"[大哭]",
hk:"[大哭]",
us:"[Cry]",
code:"/::'(",
web_code:"/大哭",
style:"icon_smiley_9"
},{
id:10,
cn:"[尴尬]",
hk:"[尷尬]",
us:"[Awkward]",
code:"/::-|",
web_code:"/尴尬",
style:"icon_smiley_10"
},{
id:11,
cn:"[发怒]",
hk:"[發怒]",
us:"[Angry]",
code:"/::@",
web_code:"/发怒",
style:"icon_smiley_11"
},{
id:12,
cn:"[调皮]",
hk:"[調皮]",
us:"[Tongue]",
code:"/::P",
web_code:"/调皮",
style:"icon_smiley_12"
},{
id:13,
cn:"[呲牙]",
hk:"[呲牙]",
us:"[Grin]",
code:"/::D",
web_code:"/呲牙",
style:"icon_smiley_13"
},{
id:14,
cn:"[惊讶]",
hk:"[驚訝]",
us:"[Surprise]",
code:"/::O",
web_code:"/惊讶",
style:"icon_smiley_14"
},{
id:15,
cn:"[难过]",
hk:"[難過]",
us:"[Frown]",
code:"/::(",
web_code:"/难过",
style:"icon_smiley_15"
},{
id:16,
cn:"[酷]",
hk:"[酷]",
us:"[Ruthless]",
code:"/::+",
web_code:"/酷",
style:"icon_smiley_16"
},{
id:17,
cn:"[冷汗]",
hk:"[冷汗]",
us:"[Blush]",
code:"/:--b",
web_code:"/冷汗",
style:"icon_smiley_17"
},{
id:18,
cn:"[抓狂]",
hk:"[抓狂]",
us:"[Scream]",
code:"/::Q",
web_code:"/抓狂",
style:"icon_smiley_18"
},{
id:19,
cn:"[吐]",
hk:"[吐]",
us:"[Puke]",
code:"/::T",
web_code:"/吐",
style:"icon_smiley_19"
},{
id:20,
cn:"[偷笑]",
hk:"[偷笑]",
us:"[Chuckle]",
code:"/:,@P",
web_code:"/偷笑",
style:"icon_smiley_20"
},{
id:21,
cn:"[愉快]",
hk:"[愉快]",
us:"[Joyful]",
code:"/:,@-D",
web_code:"/可爱",
style:"icon_smiley_21"
},{
id:22,
cn:"[白眼]",
hk:"[白眼]",
us:"[Slight]",
code:"/::d",
web_code:"/白眼",
style:"icon_smiley_22"
},{
id:23,
cn:"[傲慢]",
hk:"[傲慢]",
us:"[Smug]",
code:"/:,@o",
web_code:"/傲慢",
style:"icon_smiley_23"
},{
id:24,
cn:"[饥饿]",
hk:"[饑餓]",
us:"[Hungry]",
code:"/::g",
web_code:"/饥饿",
style:"icon_smiley_24"
},{
id:25,
cn:"[困]",
hk:"[累]",
us:"[Drowsy]",
code:"/:|-)",
web_code:"/困",
style:"icon_smiley_25"
},{
id:26,
cn:"[惊恐]",
hk:"[驚恐]",
us:"[Panic]",
code:"/::!",
web_code:"/惊恐",
style:"icon_smiley_26"
},{
id:27,
cn:"[流汗]",
hk:"[流汗]",
us:"[Sweat]",
code:"/::L",
web_code:"/流汗",
style:"icon_smiley_27"
},{
id:28,
cn:"[憨笑]",
hk:"[大笑]",
us:"[Laugh]",
code:"/::>",
web_code:"/憨笑",
style:"icon_smiley_28"
},{
id:29,
cn:"[悠闲]",
hk:"[悠閑]",
us:"[Commando]",
code:"/::,@",
web_code:"/大兵",
style:"icon_smiley_29"
},{
id:30,
cn:"[奋斗]",
hk:"[奮鬥]",
us:"[Determined]",
code:"/:,@f",
web_code:"/奋斗",
style:"icon_smiley_30"
},{
id:31,
cn:"[咒骂]",
hk:"[咒罵]",
us:"[Scold]",
code:"/::-S",
web_code:"/咒骂",
style:"icon_smiley_31"
},{
id:32,
cn:"[疑问]",
hk:"[疑問]",
us:"[Shocked]",
code:"/:?",
web_code:"/疑问",
style:"icon_smiley_32"
},{
id:33,
cn:"[嘘]",
hk:"[噓]",
us:"[Shhh]",
code:"/:,@x",
web_code:"/嘘",
style:"icon_smiley_33"
},{
id:34,
cn:"[晕]",
hk:"[暈]",
us:"[Dizzy]",
code:"/:,@@",
web_code:"/晕",
style:"icon_smiley_34"
},{
id:35,
cn:"[疯了]",
hk:"[瘋了]",
us:"[Tormented]",
code:"/::8",
web_code:"/折磨",
style:"icon_smiley_35"
},{
id:36,
cn:"[衰]",
hk:"[衰]",
us:"[Toasted]",
code:"/:,@!",
web_code:"/衰",
style:"icon_smiley_36"
},{
id:37,
cn:"[骷髅]",
hk:"[骷髏頭]",
us:"[Skull]",
code:"/:!!!",
web_code:"/骷髅",
style:"icon_smiley_37"
},{
id:38,
cn:"[敲打]",
hk:"[敲打]",
us:"[Hammer]",
code:"/:xx",
web_code:"/敲打",
style:"icon_smiley_38"
},{
id:39,
cn:"[再见]",
hk:"[再見]",
us:"[Wave]",
code:"/:bye",
web_code:"/再见",
style:"icon_smiley_39"
},{
id:40,
cn:"[擦汗]",
hk:"[擦汗]",
us:"[Speechless]",
code:"/:wipe",
web_code:"/擦汗",
style:"icon_smiley_40"
},{
id:41,
cn:"[抠鼻]",
hk:"[摳鼻]",
us:"[NosePick]",
code:"/:dig",
web_code:"/抠鼻",
style:"icon_smiley_41"
},{
id:42,
cn:"[鼓掌]",
hk:"[鼓掌]",
us:"[Clap]",
code:"/:handclap",
web_code:"/鼓掌",
style:"icon_smiley_42"
},{
id:43,
cn:"[糗大了]",
hk:"[羞辱]",
us:"[Shame]",
code:"/:&-(",
web_code:"/糗大了",
style:"icon_smiley_43"
},{
id:44,
cn:"[坏笑]",
hk:"[壞笑]",
us:"[Trick]",
code:"/:B-)",
web_code:"/坏笑",
style:"icon_smiley_44"
},{
id:45,
cn:"[左哼哼]",
hk:"[左哼哼]",
us:"[Bah！L]",
code:"/:<@",
web_code:"/左哼哼",
style:"icon_smiley_45"
},{
id:46,
cn:"[右哼哼]",
hk:"[右哼哼]",
us:"[Bah！R]",
code:"/:@>",
web_code:"/右哼哼",
style:"icon_smiley_46"
},{
id:47,
cn:"[哈欠]",
hk:"[哈欠]",
us:"[Yawn]",
code:"/::-O",
web_code:"/哈欠",
style:"icon_smiley_47"
},{
id:48,
cn:"[鄙视]",
hk:"[鄙視]",
us:"[Pooh-pooh]",
code:"/:>-|",
web_code:"/鄙视",
style:"icon_smiley_48"
},{
id:49,
cn:"[委屈]",
hk:"[委屈]",
us:"[Shrunken]",
code:"/:P-(",
web_code:"/委屈",
style:"icon_smiley_49"
},{
id:50,
cn:"[快哭了]",
hk:"[快哭了]",
us:"[TearingUp]",
code:"/::'|",
web_code:"/快哭了",
style:"icon_smiley_50"
},{
id:51,
cn:"[阴险]",
hk:"[陰險]",
us:"[Sly]",
code:"/:X-)",
web_code:"/阴险",
style:"icon_smiley_51"
},{
id:52,
cn:"[亲亲]",
hk:"[親親]",
us:"[Kiss]",
code:"/::*",
web_code:"/亲亲",
style:"icon_smiley_52"
},{
id:53,
cn:"[吓]",
hk:"[嚇]",
us:"[Wrath]",
code:"/:@x",
web_code:"/吓",
style:"icon_smiley_53"
},{
id:54,
cn:"[可怜]",
hk:"[可憐]",
us:"[Whimper]",
code:"/:8*",
web_code:"/可怜",
style:"icon_smiley_54"
},{
id:55,
cn:"[菜刀]",
hk:"[菜刀]",
us:"[Cleaver]",
code:"/:pd",
web_code:"/菜刀",
style:"icon_smiley_55"
},{
id:56,
cn:"[西瓜]",
hk:"[西瓜]",
us:"[Watermelon]",
code:"/:<W>",
web_code:"/西瓜",
style:"icon_smiley_56"
},{
id:57,
cn:"[啤酒]",
hk:"[啤酒]",
us:"[Beer]",
code:"/:beer",
web_code:"/啤酒",
style:"icon_smiley_57"
},{
id:58,
cn:"[篮球]",
hk:"[籃球]",
us:"[Basketball]",
code:"/:basketb",
web_code:"/篮球",
style:"icon_smiley_58"
},{
id:59,
cn:"[乒乓]",
hk:"[乒乓]",
us:"[PingPong]",
code:"/:oo",
web_code:"/乒乓",
style:"icon_smiley_59"
},{
id:60,
cn:"[咖啡]",
hk:"[咖啡]",
us:"[Coffee]",
code:"/:coffee",
web_code:"/咖啡",
style:"icon_smiley_60"
},{
id:61,
cn:"[饭]",
hk:"[飯]",
us:"[Rice]",
code:"/:eat",
web_code:"/饭",
style:"icon_smiley_61"
},{
id:62,
cn:"[猪头]",
hk:"[豬頭]",
us:"[Pig]",
code:"/:pig",
web_code:"/猪头",
style:"icon_smiley_62"
},{
id:63,
cn:"[玫瑰]",
hk:"[玫瑰]",
us:"[Rose]",
code:"/:rose",
web_code:"/玫瑰",
style:"icon_smiley_63"
},{
id:64,
cn:"[凋谢]",
hk:"[枯萎]",
us:"[Wilt]",
code:"/:fade",
web_code:"/凋谢",
style:"icon_smiley_64"
},{
id:65,
cn:"[嘴唇]",
hk:"[嘴唇]",
us:"[Lips]",
code:"/:showlove",
web_code:"/示爱",
style:"icon_smiley_65"
},{
id:66,
cn:"[爱心]",
hk:"[愛心]",
us:"[Heart]",
code:"/:heart",
web_code:"/爱心",
style:"icon_smiley_66"
},{
id:67,
cn:"[心碎]",
hk:"[心碎]",
us:"[BrokenHeart]",
code:"/:break",
web_code:"/心碎",
style:"icon_smiley_67"
},{
id:68,
cn:"[蛋糕]",
hk:"[蛋糕]",
us:"[Cake]",
code:"/:cake",
web_code:"/蛋糕",
style:"icon_smiley_68"
},{
id:69,
cn:"[闪电]",
hk:"[閃電]",
us:"[Lightning]",
code:"/:li",
web_code:"/闪电",
style:"icon_smiley_69"
},{
id:70,
cn:"[炸弹]",
hk:"[炸彈]",
us:"[Bomb]",
code:"/:bome",
web_code:"/炸弹",
style:"icon_smiley_70"
},{
id:71,
cn:"[刀]",
hk:"[刀]",
us:"[Dagger]",
code:"/:kn",
web_code:"/刀",
style:"icon_smiley_71"
},{
id:72,
cn:"[足球]",
hk:"[足球]",
us:"[Soccer]",
code:"/:footb",
web_code:"/足球",
style:"icon_smiley_72"
},{
id:73,
cn:"[瓢虫]",
hk:"[甲蟲]",
us:"[Ladybug]",
code:"/:ladybug",
web_code:"/瓢虫",
style:"icon_smiley_73"
},{
id:74,
cn:"[便便]",
hk:"[便便]",
us:"[Poop]",
code:"/:shit",
web_code:"/便便",
style:"icon_smiley_74"
},{
id:75,
cn:"[月亮]",
hk:"[月亮]",
us:"[Moon]",
code:"/:moon",
web_code:"/月亮",
style:"icon_smiley_75"
},{
id:76,
cn:"[太阳]",
hk:"[太陽]",
us:"[Sun]",
code:"/:sun",
web_code:"/太阳",
style:"icon_smiley_76"
},{
id:77,
cn:"[礼物]",
hk:"[禮物]",
us:"[Gift]",
code:"/:gift",
web_code:"/礼物",
style:"icon_smiley_77"
},{
id:78,
cn:"[拥抱]",
hk:"[擁抱]",
us:"[Hug]",
code:"/:hug",
web_code:"/拥抱",
style:"icon_smiley_78"
},{
id:79,
cn:"[强]",
hk:"[強]",
us:"[ThumbsUp]",
code:"/:strong",
web_code:"/强",
style:"icon_smiley_79"
},{
id:80,
cn:"[弱]",
hk:"[弱]",
us:"[ThumbsDown]",
code:"/:weak",
web_code:"/弱",
style:"icon_smiley_80"
},{
id:81,
cn:"[握手]",
hk:"[握手]",
us:"[Shake]",
code:"/:share",
web_code:"/握手",
style:"icon_smiley_81"
},{
id:82,
cn:"[胜利]",
hk:"[勝利]",
us:"[Peace]",
code:"/:v",
web_code:"/胜利",
style:"icon_smiley_82"
},{
id:83,
cn:"[抱拳]",
hk:"[抱拳]",
us:"[Fight]",
code:"/:@)",
web_code:"/抱拳",
style:"icon_smiley_83"
},{
id:84,
cn:"[勾引]",
hk:"[勾引]",
us:"[Beckon]",
code:"/:jj",
web_code:"/勾引",
style:"icon_smiley_84"
},{
id:85,
cn:"[拳头]",
hk:"[拳頭]",
us:"[Fist]",
code:"/:@@",
web_code:"/拳头",
style:"icon_smiley_85"
},{
id:86,
cn:"[差劲]",
hk:"[差勁]",
us:"[Pinky]",
code:"/:bad",
web_code:"/差劲",
style:"icon_smiley_86"
},{
id:87,
cn:"[爱你]",
hk:"[愛你]",
us:"[RockOn]",
code:"/:lvu",
web_code:"/爱你",
style:"icon_smiley_87"
},{
id:88,
cn:"[NO]",
hk:"[NO]",
us:"[Nuh-uh]",
code:"/:no",
web_code:"/NO",
style:"icon_smiley_88"
},{
id:89,
cn:"[OK]",
hk:"[OK]",
us:"[OK]",
code:"/:ok",
web_code:"/OK",
style:"icon_smiley_89"
},{
id:90,
cn:"[爱情]",
hk:"[愛情]",
us:"[InLove]",
code:"/:love",
web_code:"/爱情",
style:"icon_smiley_90"
},{
id:91,
cn:"[飞吻]",
hk:"[飛吻]",
us:"[Blowkiss]",
code:"/:<L>",
web_code:"/飞吻",
style:"icon_smiley_91"
},{
id:92,
cn:"[跳跳]",
hk:"[跳跳]",
us:"[Waddle]",
code:"/:jump",
web_code:"/跳跳",
style:"icon_smiley_92"
},{
id:93,
cn:"[发抖]",
hk:"[發抖]",
us:"[Tremble]",
code:"/:shake",
web_code:"/发抖",
style:"icon_smiley_93"
},{
id:94,
cn:"[怄火]",
hk:"[噴火]",
us:"[Aaagh!]",
code:"/:<O>",
web_code:"/怄火",
style:"icon_smiley_94"
},{
id:95,
cn:"[转圈]",
hk:"[轉圈]",
us:"[Twirl]",
code:"/:circle",
web_code:"/转圈",
style:"icon_smiley_95"
},{
id:96,
cn:"[磕头]",
hk:"[磕頭]",
us:"[Kotow]",
code:"/:kotow",
web_code:"/磕头",
style:"icon_smiley_96"
},{
id:97,
cn:"[回头]",
hk:"[回頭]",
us:"[Dramatic]",
code:"/:turn",
web_code:"/回头",
style:"icon_smiley_97"
},{
id:98,
cn:"[跳绳]",
hk:"[跳繩]",
us:"[JumpRope]",
code:"/:skip",
web_code:"/跳绳",
style:"icon_smiley_98"
},{
id:99,
cn:"[投降]",
hk:"[投降]",
us:"[Surrender]",
code:"/:oY",
web_code:"/挥手",
style:"icon_smiley_99"
},{
id:100,
cn:"[激动]",
hk:"[激動]",
us:"[Hooray]",
code:"/:#-0",
web_code:"/激动",
style:"icon_smiley_100"
},{
id:101,
cn:"[乱舞]",
hk:"[亂舞]",
us:"[Meditate]",
code:"/:hiphot",
web_code:"/街舞",
style:"icon_smiley_101"
},{
id:102,
cn:"[献吻]",
hk:"[獻吻]",
us:"[Smooch]",
code:"/:kiss",
web_code:"/献吻",
style:"icon_smiley_102"
},{
id:103,
cn:"[左太极]",
hk:"[左太極]",
us:"[TaiChi L]",
code:"/:<&",
web_code:"/左太极",
style:"icon_smiley_103"
},{
id:104,
cn:"[右太极]",
hk:"[右太極]",
us:"[TaiChi R]",
code:"/:&>",
web_code:"/右太极",
style:"icon_smiley_104"
},{
id:204,
cn:"[嘿哈]",
hk:"[吼嘿]",
us:"[Hey]",
code:"",
web_code:"",
style:"icon_emoji_wx_4"
},{
id:205,
cn:"[捂脸]",
hk:"[掩面]",
us:"[Facepalm]",
code:"",
web_code:"",
style:"icon_emoji_wx_5"
},{
id:202,
cn:"[奸笑]",
hk:"[奸笑]",
us:"[Smirk]",
code:"",
web_code:"",
style:"icon_emoji_wx_2"
},{
id:206,
cn:"[机智]",
hk:"[機智]",
us:"[Smart]",
code:"",
web_code:"",
style:"icon_emoji_wx_6"
},{
id:212,
cn:"[皱眉]",
hk:"[皺眉]",
us:"[Moue]",
code:"",
web_code:"",
style:"icon_emoji_wx_12"
},{
id:211,
cn:"[耶]",
hk:"[歐耶]",
us:"[Yeah!]",
code:"",
web_code:"",
style:"icon_emoji_wx_11"
},{
id:207,
cn:"[茶]",
hk:"[茶]",
us:"[Tea]",
code:"",
web_code:"",
style:"icon_emoji_wx_7"
},{
id:209,
cn:"[红包]",
hk:"[Packet]",
us:"[Packet]",
code:"",
web_code:"",
style:"icon_emoji_wx_9"
},{
id:210,
cn:"[蜡烛]",
hk:"[蠟燭]",
us:"[Candle]",
code:"",
web_code:"",
style:"icon_emoji_wx_10"
},{
id:215,
cn:"[福]",
hk:"[福]",
us:"[Blessing]",
code:"",
web_code:"",
style:"icon_emoji_wx_15"
},{
id:214,
cn:"[鸡]",
hk:"[小雞]",
us:"[Chick]",
code:"",
web_code:"",
style:"icon_emoji_wx_14"
},{
id:300,
cn:"[笑脸]",
emoji:"😄",
hk:"",
us:"",
code:"\\ue415",
web_code:"",
style:"icon_emoji_ios_0"
},{
id:301,
cn:"[生病]",
emoji:"😷",
hk:"",
us:"",
code:"\\ue40c",
web_code:"",
style:"icon_emoji_ios_1"
},{
id:302,
cn:"[破涕为笑]",
emoji:"😂",
hk:"",
us:"",
code:"\\ue412",
web_code:"",
style:"icon_emoji_ios_2"
},{
id:303,
cn:"[吐舌]",
emoji:"😝",
hk:"",
us:"",
code:"\\ue409",
web_code:"",
style:"icon_emoji_ios_3"
},{
id:304,
cn:"[脸红]",
emoji:"😳",
hk:"",
us:"",
code:"\\ue40d",
web_code:"",
style:"icon_emoji_ios_4"
},{
id:305,
cn:"[恐惧]",
emoji:"😱",
hk:"",
us:"",
code:"\\ue107",
web_code:"",
style:"icon_emoji_ios_5"
},{
id:306,
cn:"[失望]",
emoji:"😔",
hk:"",
us:"",
code:"\\ue403",
web_code:"",
style:"icon_emoji_ios_6"
},{
id:307,
cn:"[无语]",
emoji:"😒",
hk:"",
us:"",
code:"\\ue40e",
web_code:"",
style:"icon_emoji_ios_7"
},{
id:308,
cn:"[鬼魂]",
emoji:"👻",
hk:"",
us:"",
code:"\\ue11b",
web_code:"",
style:"icon_emoji_ios_8"
},{
id:309,
cn:"[合十]",
emoji:"🙏",
hk:"",
us:"",
code:"\\ue41d",
web_code:"",
style:"icon_emoji_ios_9"
},{
id:310,
cn:"[强壮]",
emoji:"💪",
hk:"",
us:"",
code:"\\ue14c",
web_code:"",
style:"icon_emoji_ios_10"
},{
id:311,
cn:"[庆祝]",
emoji:"🎉",
hk:"",
us:"",
code:"\\ue312",
web_code:"",
style:"icon_emoji_ios_11"
},{
id:312,
cn:"[礼物]",
hk:"",
us:"",
code:"\\ue112",
web_code:"",
style:"icon_emoji_ios_12"
},{
id:"17_1",
cn:"[囧]",
hk:"[囧]",
us:"[Blush]",
code:"",
web_code:"",
style:"icon_smiley_17"
},{
id:"39_1",
cn:"[再见]",
hk:"[再見]",
us:"[Bye]",
code:"",
web_code:"",
style:"icon_smiley_39"
},{
id:"83_1",
cn:"[抱拳]",
hk:"[抱拳]",
us:"[Salute]",
code:"",
web_code:"",
style:"icon_smiley_83"
},{
id:"212_1",
cn:"[皱眉]",
hk:"[皺眉]",
us:"[Concerned]",
code:"",
web_code:"",
style:"icon_emoji_wx_12"
}];
});define("common/qq/emoji.js",["widget/emoji.css","biz_common/utils/emoji_data.js"],function(f){
f("widget/emoji.css");
var e='<span class="emoji emoji%s"></span>',a=f("biz_common/utils/emoji_data.js"),b='<img class="icon_emotion_single %s" src="/mpres/zh_CN/htmledition/comm_htmledition/images/pic/common/pic_blank.gif"></img>',c={
"☀":"2600",
"☁":"2601",
"☔":"2614",
"⛄":"26c4",
"⚡":"26a1",
"🌀":"1f300",
"🌁":"1f301",
"🌂":"1f302",
"🌃":"1f303",
"🌄":"1f304",
"🌅":"1f305",
"🌆":"1f306",
"🌇":"1f307",
"🌈":"1f308",
"❄":"2744",
"⛅":"26c5",
"🌉":"1f309",
"🌊":"1f30a",
"🌋":"1f30b",
"🌌":"1f30c",
"🌏":"1f30f",
"🌑":"1f311",
"🌔":"1f314",
"🌓":"1f313",
"🌙":"1f319",
"🌕":"1f315",
"🌛":"1f31b",
"🌟":"1f31f",
"🌠":"1f320",
"🕐":"1f550",
"🕑":"1f551",
"🕒":"1f552",
"🕓":"1f553",
"🕔":"1f554",
"🕕":"1f555",
"🕖":"1f556",
"🕗":"1f557",
"🕘":"1f558",
"🕙":"1f559",
"🕚":"1f55a",
"🕛":"1f55b",
"⌚":"231a",
"⌛":"231b",
"⏰":"23f0",
"⏳":"23f3",
"♈":"2648",
"♉":"2649",
"♊":"264a",
"♋":"264b",
"♌":"264c",
"♍":"264d",
"♎":"264e",
"♏":"264f",
"♐":"2650",
"♑":"2651",
"♒":"2652",
"♓":"2653",
"⛎":"26ce",
"🍀":"1f340",
"🌷":"1f337",
"🌱":"1f331",
"🍁":"1f341",
"🌸":"1f338",
"🌹":"1f339",
"🍂":"1f342",
"🍃":"1f343",
"🌺":"1f33a",
"🌻":"1f33b",
"🌴":"1f334",
"🌵":"1f335",
"🌾":"1f33e",
"🌽":"1f33d",
"🍄":"1f344",
"🌰":"1f330",
"🌼":"1f33c",
"🌿":"1f33f",
"🍒":"1f352",
"🍌":"1f34c",
"🍎":"1f34e",
"🍊":"1f34a",
"🍓":"1f353",
"🍉":"1f349",
"🍅":"1f345",
"🍆":"1f346",
"🍈":"1f348",
"🍍":"1f34d",
"🍇":"1f347",
"🍑":"1f351",
"🍏":"1f34f",
"👀":"1f440",
"👂":"1f442",
"👃":"1f443",
"👄":"1f444",
"👅":"1f445",
"💄":"1f484",
"💅":"1f485",
"💆":"1f486",
"💇":"1f487",
"💈":"1f488",
"👤":"1f464",
"👦":"1f466",
"👧":"1f467",
"👨":"1f468",
"👩":"1f469",
"👪":"1f46a",
"👫":"1f46b",
"👮":"1f46e",
"👯":"1f46f",
"👰":"1f470",
"👱":"1f471",
"👲":"1f472",
"👳":"1f473",
"👴":"1f474",
"👵":"1f475",
"👶":"1f476",
"👷":"1f477",
"👸":"1f478",
"👹":"1f479",
"👺":"1f47a",
"👻":"1f47b",
"👼":"1f47c",
"👽":"1f47d",
"👾":"1f47e",
"👿":"1f47f",
"💀":"1f480",
"💁":"1f481",
"💂":"1f482",
"💃":"1f483",
"🐌":"1f40c",
"🐍":"1f40d",
"🐎":"1f40e",
"🐔":"1f414",
"🐗":"1f417",
"🐫":"1f42b",
"🐘":"1f418",
"🐨":"1f428",
"🐒":"1f412",
"🐑":"1f411",
"🐙":"1f419",
"🐚":"1f41a",
"🐛":"1f41b",
"🐜":"1f41c",
"🐝":"1f41d",
"🐞":"1f41e",
"🐠":"1f420",
"🐡":"1f421",
"🐢":"1f422",
"🐤":"1f424",
"🐥":"1f425",
"🐦":"1f426",
"🐣":"1f423",
"🐧":"1f427",
"🐩":"1f429",
"🐟":"1f41f",
"🐬":"1f42c",
"🐭":"1f42d",
"🐯":"1f42f",
"🐱":"1f431",
"🐳":"1f433",
"🐴":"1f434",
"🐵":"1f435",
"🐶":"1f436",
"🐷":"1f437",
"🐻":"1f43b",
"🐹":"1f439",
"🐺":"1f43a",
"🐮":"1f42e",
"🐰":"1f430",
"🐸":"1f438",
"🐾":"1f43e",
"🐲":"1f432",
"🐼":"1f43c",
"🐽":"1f43d",
"😠":"1f620",
"😩":"1f629",
"😲":"1f632",
"😞":"1f61e",
"😵":"1f635",
"😰":"1f630",
"😒":"1f612",
"😍":"1f60d",
"😤":"1f624",
"😜":"1f61c",
"😝":"1f61d",
"😋":"1f60b",
"😘":"1f618",
"😚":"1f61a",
"😷":"1f637",
"😳":"1f633",
"😃":"1f603",
"😅":"1f605",
"😆":"1f606",
"😁":"1f601",
"😂":"1f602",
"😊":"1f60a",
"☺":"263a",
"😄":"1f604",
"😢":"1f622",
"😭":"1f62d",
"😨":"1f628",
"😣":"1f623",
"😡":"1f621",
"😌":"1f60c",
"😖":"1f616",
"😔":"1f614",
"😱":"1f631",
"😪":"1f62a",
"😏":"1f60f",
"😓":"1f613",
"😥":"1f625",
"😫":"1f62b",
"😉":"1f609",
"😺":"1f63a",
"😸":"1f638",
"😹":"1f639",
"😽":"1f63d",
"😻":"1f63b",
"😿":"1f63f",
"😾":"1f63e",
"😼":"1f63c",
"🙀":"1f640",
"🙅":"1f645",
"🙆":"1f646",
"🙇":"1f647",
"🙈":"1f648",
"🙊":"1f64a",
"🙉":"1f649",
"🙋":"1f64b",
"🙌":"1f64c",
"🙍":"1f64d",
"🙎":"1f64e",
"🙏":"1f64f",
"🏠":"1f3e0",
"🏡":"1f3e1",
"🏢":"1f3e2",
"🏣":"1f3e3",
"🏥":"1f3e5",
"🏦":"1f3e6",
"🏧":"1f3e7",
"🏨":"1f3e8",
"🏩":"1f3e9",
"🏪":"1f3ea",
"🏫":"1f3eb",
"⛪":"26ea",
"⛲":"26f2",
"🏬":"1f3ec",
"🏯":"1f3ef",
"🏰":"1f3f0",
"🏭":"1f3ed",
"⚓":"2693",
"🏮":"1f3ee",
"🗻":"1f5fb",
"🗼":"1f5fc",
"🗽":"1f5fd",
"🗾":"1f5fe",
"🗿":"1f5ff",
"👞":"1f45e",
"👟":"1f45f",
"👠":"1f460",
"👡":"1f461",
"👢":"1f462",
"👣":"1f463",
"👓":"1f453",
"👕":"1f455",
"👖":"1f456",
"👑":"1f451",
"👔":"1f454",
"👒":"1f452",
"👗":"1f457",
"👘":"1f458",
"👙":"1f459",
"👚":"1f45a",
"👛":"1f45b",
"👜":"1f45c",
"👝":"1f45d",
"💰":"1f4b0",
"💱":"1f4b1",
"💹":"1f4b9",
"💲":"1f4b2",
"💳":"1f4b3",
"💴":"1f4b4",
"💵":"1f4b5",
"💸":"1f4b8",
"🇨🇳":"1f1e81f1f3",
"🇩🇪":"1f1e91f1ea",
"🇪🇸":"1f1ea1f1f8",
"🇫🇷":"1f1eb1f1f7",
"🇬🇧":"1f1ec1f1e7",
"🇮🇹":"1f1ee1f1f9",
"🇯🇵":"1f1ef1f1f5",
"🇰🇷":"1f1f01f1f7",
"🇷🇺":"1f1f71f1fa",
"🇺🇸":"1f1fa1f1f8",
"🔥":"1f525",
"🔦":"1f526",
"🔧":"1f527",
"🔨":"1f528",
"🔩":"1f529",
"🔪":"1f52a",
"🔫":"1f52b",
"🔮":"1f52e",
"🔯":"1f52f",
"🔰":"1f530",
"🔱":"1f531",
"💉":"1f489",
"💊":"1f48a",
"🅰":"1f170",
"🅱":"1f171",
"🆎":"1f18e",
"🅾":"1f17e",
"🎀":"1f380",
"🎁":"1f381",
"🎂":"1f382",
"🎄":"1f384",
"🎅":"1f385",
"🎌":"1f38c",
"🎆":"1f386",
"🎈":"1f388",
"🎉":"1f389",
"🎍":"1f38d",
"🎎":"1f38e",
"🎓":"1f393",
"🎒":"1f392",
"🎏":"1f38f",
"🎇":"1f387",
"🎐":"1f390",
"🎃":"1f383",
"🎊":"1f38a",
"🎋":"1f38b",
"🎑":"1f391",
"📟":"1f4df",
"☎":"260e",
"📞":"1f4de",
"📱":"1f4f1",
"📲":"1f4f2",
"📝":"1f4dd",
"📠":"1f4e0",
"✉":"2709",
"📨":"1f4e8",
"📩":"1f4e9",
"📪":"1f4ea",
"📫":"1f4eb",
"📮":"1f4ee",
"📰":"1f4f0",
"📢":"1f4e2",
"📣":"1f4e3",
"📡":"1f4e1",
"📤":"1f4e4",
"📥":"1f4e5",
"📦":"1f4e6",
"📧":"1f4e7",
"🔠":"1f520",
"🔡":"1f521",
"🔢":"1f522",
"🔣":"1f523",
"🔤":"1f524",
"✒":"2712",
"💺":"1f4ba",
"💻":"1f4bb",
"✏":"270f",
"📎":"1f4ce",
"💼":"1f4bc",
"💽":"1f4bd",
"💾":"1f4be",
"💿":"1f4bf",
"📀":"1f4c0",
"✂":"2702",
"📍":"1f4cd",
"📃":"1f4c3",
"📄":"1f4c4",
"📅":"1f4c5",
"📁":"1f4c1",
"📂":"1f4c2",
"📓":"1f4d3",
"📖":"1f4d6",
"📔":"1f4d4",
"📕":"1f4d5",
"📗":"1f4d7",
"📘":"1f4d8",
"📙":"1f4d9",
"📚":"1f4da",
"📛":"1f4db",
"📜":"1f4dc",
"📋":"1f4cb",
"📆":"1f4c6",
"📊":"1f4ca",
"📈":"1f4c8",
"📉":"1f4c9",
"📇":"1f4c7",
"📌":"1f4cc",
"📒":"1f4d2",
"📏":"1f4cf",
"📐":"1f4d0",
"📑":"1f4d1",
"🎽":"1f3bd",
"⚾":"26be",
"⛳":"26f3",
"🎾":"1f3be",
"⚽":"26bd",
"🎿":"1f3bf",
"🏀":"1f3c0",
"🏁":"1f3c1",
"🏂":"1f3c2",
"🏃":"1f3c3",
"🏄":"1f3c4",
"🏆":"1f3c6",
"🏈":"1f3c8",
"🏊":"1f3ca",
"🚃":"1f683",
"🚇":"1f687",
"Ⓜ":"24c2",
"🚄":"1f684",
"🚅":"1f685",
"🚗":"1f697",
"🚙":"1f699",
"🚌":"1f68c",
"🚏":"1f68f",
"🚢":"1f6a2",
"✈":"2708",
"⛵":"26f5",
"🚉":"1f689",
"🚀":"1f680",
"🚤":"1f6a4",
"🚕":"1f695",
"🚚":"1f69a",
"🚒":"1f692",
"🚑":"1f691",
"🚓":"1f693",
"⛽":"26fd",
"🅿":"1f17f",
"🚥":"1f6a5",
"🚧":"1f6a7",
"🚨":"1f6a8",
"♨":"2668",
"⛺":"26fa",
"🎠":"1f3a0",
"🎡":"1f3a1",
"🎢":"1f3a2",
"🎣":"1f3a3",
"🎤":"1f3a4",
"🎥":"1f3a5",
"🎦":"1f3a6",
"🎧":"1f3a7",
"🎨":"1f3a8",
"🎩":"1f3a9",
"🎪":"1f3aa",
"🎫":"1f3ab",
"🎬":"1f3ac",
"🎭":"1f3ad",
"🎮":"1f3ae",
"🀄":"1f004",
"🎯":"1f3af",
"🎰":"1f3b0",
"🎱":"1f3b1",
"🎲":"1f3b2",
"🎳":"1f3b3",
"🎴":"1f3b4",
"🃏":"1f0cf",
"🎵":"1f3b5",
"🎶":"1f3b6",
"🎷":"1f3b7",
"🎸":"1f3b8",
"🎹":"1f3b9",
"🎺":"1f3ba",
"🎻":"1f3bb",
"🎼":"1f3bc",
"〽":"303d",
"📷":"1f4f7",
"📹":"1f4f9",
"📺":"1f4fa",
"📻":"1f4fb",
"📼":"1f4fc",
"💋":"1f48b",
"💌":"1f48c",
"💍":"1f48d",
"💎":"1f48e",
"💏":"1f48f",
"💐":"1f490",
"💑":"1f491",
"💒":"1f492",
"🔞":"1f51e",
"©":"a9",
"®":"ae",
"™":"2122",
"ℹ":"2139",
"#⃣":"2320e3",
"1⃣":"3120e3",
"2⃣":"3220e3",
"3⃣":"3320e3",
"4⃣":"3420e3",
"5⃣":"3520e3",
"6⃣":"3620e3",
"7⃣":"3720e3",
"8⃣":"3820e3",
"9⃣":"3920e3",
"0⃣":"3020e3",
"🔟":"1f51f",
"📶":"1f4f6",
"📳":"1f4f3",
"📴":"1f4f4",
"🍔":"1f354",
"🍙":"1f359",
"🍰":"1f370",
"🍜":"1f35c",
"🍞":"1f35e",
"🍳":"1f373",
"🍦":"1f366",
"🍟":"1f35f",
"🍡":"1f361",
"🍘":"1f358",
"🍚":"1f35a",
"🍝":"1f35d",
"🍛":"1f35b",
"🍢":"1f362",
"🍣":"1f363",
"🍱":"1f371",
"🍲":"1f372",
"🍧":"1f367",
"🍖":"1f356",
"🍥":"1f365",
"🍠":"1f360",
"🍕":"1f355",
"🍗":"1f357",
"🍨":"1f368",
"🍩":"1f369",
"🍪":"1f36a",
"🍫":"1f36b",
"🍬":"1f36c",
"🍭":"1f36d",
"🍮":"1f36e",
"🍯":"1f36f",
"🍤":"1f364",
"🍴":"1f374",
"☕":"2615",
"🍸":"1f378",
"🍺":"1f37a",
"🍵":"1f375",
"🍶":"1f376",
"🍷":"1f377",
"🍻":"1f37b",
"🍹":"1f379",
"↗":"2197",
"↘":"2198",
"↖":"2196",
"↙":"2199",
"⤴":"2934",
"⤵":"2935",
"↔":"2194",
"↕":"2195",
"⬆":"2b06",
"⬇":"2b07",
"➡":"27a1",
"⬅":"2b05",
"▶":"25b6",
"◀":"25c0",
"⏩":"23e9",
"⏪":"23ea",
"⏫":"23eb",
"⏬":"23ec",
"🔺":"1f53a",
"🔻":"1f53b",
"🔼":"1f53c",
"🔽":"1f53d",
"⭕":"2b55",
"❌":"274c",
"❎":"274e",
"❗":"2757",
"⁉":"2049",
"‼":"203c",
"❓":"2753",
"❔":"2754",
"❕":"2755",
"〰":"3030",
"➰":"27b0",
"➿":"27bf",
"❤":"2764",
"💓":"1f493",
"💔":"1f494",
"💕":"1f495",
"💖":"1f496",
"💗":"1f497",
"💘":"1f498",
"💙":"1f499",
"💚":"1f49a",
"💛":"1f49b",
"💜":"1f49c",
"💝":"1f49d",
"💞":"1f49e",
"💟":"1f49f",
"♥":"2665",
"♠":"2660",
"♦":"2666",
"♣":"2663",
"🚬":"1f6ac",
"🚭":"1f6ad",
"♿":"267f",
"🚩":"1f6a9",
"⚠":"26a0",
"⛔":"26d4",
"♻":"267b",
"🚲":"1f6b2",
"🚶":"1f6b6",
"🚹":"1f6b9",
"🚺":"1f6ba",
"🛀":"1f6c0",
"🚻":"1f6bb",
"🚽":"1f6bd",
"🚾":"1f6be",
"🚼":"1f6bc",
"🚪":"1f6aa",
"🚫":"1f6ab",
"✔":"2714",
"🆑":"1f191",
"🆒":"1f192",
"🆓":"1f193",
"🆔":"1f194",
"🆕":"1f195",
"🆖":"1f196",
"🆗":"1f197",
"🆘":"1f198",
"🆙":"1f199",
"🆚":"1f19a",
"🈁":"1f201",
"🈂":"1f202",
"🈲":"1f232",
"🈳":"1f233",
"🈴":"1f234",
"🈵":"1f235",
"🈶":"1f236",
"🈚":"1f21a",
"🈷":"1f237",
"🈸":"1f238",
"🈹":"1f239",
"🈯":"1f22f",
"🈺":"1f23a",
"㊙":"3299",
"㊗":"3297",
"🉐":"1f250",
"🉑":"1f251",
"➕":"2795",
"➖":"2796",
"✖":"2716",
"➗":"2797",
"💠":"1f4a0",
"💡":"1f4a1",
"💢":"1f4a2",
"💣":"1f4a3",
"💤":"1f4a4",
"💥":"1f4a5",
"💦":"1f4a6",
"💧":"1f4a7",
"💨":"1f4a8",
"💩":"1f4a9",
"💪":"1f4aa",
"💫":"1f4ab",
"💬":"1f4ac",
"✨":"2728",
"✴":"2734",
"✳":"2733",
"⚪":"26aa",
"⚫":"26ab",
"🔴":"1f534",
"🔵":"1f535",
"🔲":"1f532",
"🔳":"1f533",
"⭐":"2b50",
"⬜":"2b1c",
"⬛":"2b1b",
"▫":"25ab",
"▪":"25aa",
"◽":"25fd",
"◾":"25fe",
"◻":"25fb",
"◼":"25fc",
"🔶":"1f536",
"🔷":"1f537",
"🔸":"1f538",
"🔹":"1f539",
"❇":"2747",
"💮":"1f4ae",
"💯":"1f4af",
"↩":"21a9",
"↪":"21aa",
"🔃":"1f503",
"🔊":"1f50a",
"🔋":"1f50b",
"🔌":"1f50c",
"🔍":"1f50d",
"🔎":"1f50e",
"🔒":"1f512",
"🔓":"1f513",
"🔏":"1f50f",
"🔐":"1f510",
"🔑":"1f511",
"🔔":"1f514",
"☑":"2611",
"🔘":"1f518",
"🔖":"1f516",
"🔗":"1f517",
"🔙":"1f519",
"🔚":"1f51a",
"🔛":"1f51b",
"🔜":"1f51c",
"🔝":"1f51d",
" ":"2003",
" ":"2002",
" ":"2005",
"✅":"2705",
"✊":"270a",
"✋":"270b",
"✌":"270c",
"👊":"1f44a",
"👍":"1f44d",
"☝":"261d",
"👆":"1f446",
"👇":"1f447",
"👈":"1f448",
"👉":"1f449",
"👋":"1f44b",
"👏":"1f44f",
"👌":"1f44c",
"👎":"1f44e",
"👐":"1f450",
"":"2600",
"":"2601",
"":"2614",
"":"26c4",
"":"26a1",
"":"1f300",
"[霧]":"1f301",
"":"1f302",
"":"1f30c",
"":"1f304",
"":"1f305",
"":"1f306",
"":"1f307",
"":"1f308",
"[雪結晶]":"2744",
"":"26c5",
"":"1f30a",
"[火山]":"1f30b",
"[地球]":"1f30f",
"●":"1f311",
"":"1f31b",
"○":"1f315",
"":"1f31f",
"☆彡":"1f320",
"":"1f550",
"":"1f551",
"":"1f552",
"":"1f553",
"":"1f554",
"":"1f555",
"":"1f556",
"":"1f557",
"":"1f558",
"":"23f0",
"":"1f55a",
"":"1f55b",
"[腕時計]":"231a",
"[砂時計]":"23f3",
"":"2648",
"":"2649",
"":"264a",
"":"264b",
"":"264c",
"":"264d",
"":"264e",
"":"264f",
"":"2650",
"":"2651",
"":"2652",
"":"2653",
"":"26ce",
"":"1f33f",
"":"1f337",
"":"1f341",
"":"1f338",
"":"1f339",
"":"1f342",
"":"1f343",
"":"1f33a",
"":"1f33c",
"":"1f334",
"":"1f335",
"":"1f33e",
"[とうもろこし]":"1f33d",
"[キノコ]":"1f344",
"[栗]":"1f330",
"[さくらんぼ]":"1f352",
"[バナナ]":"1f34c",
"":"1f34f",
"":"1f34a",
"":"1f353",
"":"1f349",
"":"1f345",
"":"1f346",
"[メロン]":"1f348",
"[パイナップル]":"1f34d",
"[ブドウ]":"1f347",
"[モモ]":"1f351",
"":"1f440",
"":"1f442",
"":"1f443",
"":"1f444",
"":"1f61d",
"":"1f484",
"":"1f485",
"":"1f486",
"":"1f487",
"":"1f488",
"〓":"2005",
"":"1f466",
"":"1f467",
"":"1f468",
"":"1f469",
"[家族]":"1f46a",
"":"1f46b",
"":"1f46e",
"":"1f46f",
"[花嫁]":"1f470",
"":"1f471",
"":"1f472",
"":"1f473",
"":"1f474",
"":"1f475",
"":"1f476",
"":"1f477",
"":"1f478",
"[なまはげ]":"1f479",
"[天狗]":"1f47a",
"":"1f47b",
"":"1f47c",
"":"1f47d",
"":"1f47e",
"":"1f47f",
"":"1f480",
"":"1f481",
"":"1f482",
"":"1f483",
"[カタツムリ]":"1f40c",
"":"1f40d",
"":"1f40e",
"":"1f414",
"":"1f417",
"":"1f42b",
"":"1f418",
"":"1f428",
"":"1f412",
"":"1f411",
"":"1f419",
"":"1f41a",
"":"1f41b",
"[アリ]":"1f41c",
"[ミツバチ]":"1f41d",
"[てんとう虫]":"1f41e",
"":"1f420",
"":"1f3a3",
"[カメ]":"1f422",
"":"1f423",
"":"1f426",
"":"1f427",
"":"1f436",
"":"1f42c",
"":"1f42d",
"":"1f42f",
"":"1f431",
"":"1f433",
"":"1f434",
"":"1f435",
"":"1f43d",
"":"1f43b",
"":"1f439",
"":"1f43a",
"":"1f42e",
"":"1f430",
"":"1f438",
"":"1f463",
"[辰]":"1f432",
"[パンダ]":"1f43c",
"":"1f620",
"":"1f64d",
"":"1f632",
"":"1f61e",
"":"1f62b",
"":"1f630",
"":"1f612",
"":"1f63b",
"":"1f63c",
"":"1f61c",
"":"1f60a",
"":"1f63d",
"":"1f61a",
"":"1f637",
"":"1f633",
"":"1f63a",
"":"1f605",
"":"1f60c",
"":"1f639",
"":"263a",
"":"1f604",
"":"1f63f",
"":"1f62d",
"":"1f628",
"":"1f64e",
"":"1f4ab",
"":"1f631",
"":"1f62a",
"":"1f60f",
"":"1f613",
"":"1f625",
"":"1f609",
"":"1f645",
"":"1f646",
"":"1f647",
"(/_＼)":"1f648",
"(・×・)":"1f64a",
"|(・×・)|":"1f649",
"":"270b",
"":"1f64c",
"":"1f64f",
"":"1f3e1",
"":"1f3e2",
"":"1f3e3",
"":"1f3e5",
"":"1f3e6",
"":"1f3e7",
"":"1f3e8",
"":"1f3e9",
"":"1f3ea",
"":"1f3eb",
"":"26ea",
"":"26f2",
"":"1f3ec",
"":"1f3ef",
"":"1f3f0",
"":"1f3ed",
"":"1f6a2",
"":"1f376",
"":"1f5fb",
"":"1f5fc",
"":"1f5fd",
"[日本地図]":"1f5fe",
"[モアイ]":"1f5ff",
"":"1f45f",
"":"1f460",
"":"1f461",
"":"1f462",
"[メガネ]":"1f453",
"":"1f45a",
"[ジーンズ]":"1f456",
"":"1f451",
"":"1f454",
"":"1f452",
"":"1f457",
"":"1f458",
"":"1f459",
"[財布]":"1f45b",
"":"1f45c",
"[ふくろ]":"1f45d",
"":"1f4b5",
"":"1f4b1",
"":"1f4c8",
"[カード]":"1f4b3",
"￥":"1f4b4",
"[飛んでいくお金]":"1f4b8",
"":"1f1e81f1f3",
"":"1f1e91f1ea",
"":"1f1ea1f1f8",
"":"1f1eb1f1f7",
"":"1f1ec1f1e7",
"":"1f1ee1f1f9",
"":"1f1ef1f1f5",
"":"1f1f01f1f7",
"":"1f1f71f1fa",
"":"1f1fa1f1f8",
"":"1f525",
"[懐中電灯]":"1f526",
"[レンチ]":"1f527",
"":"1f528",
"[ネジ]":"1f529",
"[包丁]":"1f52a",
"":"1f52b",
"":"1f52f",
"":"1f530",
"":"1f531",
"":"1f489",
"":"1f48a",
"":"1f170",
"":"1f171",
"":"1f18e",
"":"1f17e",
"":"1f380",
"":"1f4e6",
"":"1f382",
"":"1f384",
"":"1f385",
"":"1f38c",
"":"1f386",
"":"1f388",
"":"1f389",
"":"1f38d",
"":"1f38e",
"":"1f393",
"":"1f392",
"":"1f38f",
"":"1f387",
"":"1f390",
"":"1f383",
"[オメデトウ]":"1f38a",
"[七夕]":"1f38b",
"":"1f391",
"[ポケベル]":"1f4df",
"":"1f4de",
"":"1f4f1",
"":"1f4f2",
"":"1f4d1",
"":"1f4e0",
"":"1f4e7",
"":"1f4eb",
"":"1f4ee",
"[新聞]":"1f4f0",
"":"1f4e2",
"":"1f4e3",
"":"1f4e1",
"[送信BOX]":"1f4e4",
"[受信BOX]":"1f4e5",
"[ABCD]":"1f520",
"[abcd]":"1f521",
"[1234]":"1f522",
"[記号]":"1f523",
"[ABC]":"1f524",
"[ペン]":"2712",
"":"1f4ba",
"":"1f4bb",
"[クリップ]":"1f4ce",
"":"1f4bc",
"":"1f4be",
"":"1f4bf",
"":"1f4c0",
"":"2702",
"[画びょう]":"1f4cc",
"[カレンダー]":"1f4c6",
"[フォルダ]":"1f4c2",
"":"1f4d2",
"[名札]":"1f4db",
"[スクロール]":"1f4dc",
"[グラフ]":"1f4c9",
"[定規]":"1f4cf",
"[三角定規]":"1f4d0",
"":"26be",
"":"26f3",
"":"1f3be",
"":"26bd",
"":"1f3bf",
"":"1f3c0",
"":"1f3c1",
"[スノボ]":"1f3c2",
"":"1f3c3",
"":"1f3c4",
"":"1f3c6",
"":"1f3c8",
"":"1f3ca",
"":"1f683",
"":"24c2",
"":"1f684",
"":"1f685",
"":"1f697",
"":"1f699",
"":"1f68c",
"":"1f68f",
"":"2708",
"":"26f5",
"":"1f689",
"":"1f680",
"":"1f6a4",
"":"1f695",
"":"1f69a",
"":"1f692",
"":"1f691",
"":"1f6a8",
"":"26fd",
"":"1f17f",
"":"1f6a5",
"":"26d4",
"":"2668",
"":"26fa",
"":"1f3a1",
"":"1f3a2",
"":"1f3a4",
"":"1f4f9",
"":"1f3a6",
"":"1f3a7",
"":"1f3a8",
"":"1f3ad",
"[イベント]":"1f3aa",
"":"1f3ab",
"":"1f3ac",
"[ゲーム]":"1f3ae",
"":"1f004",
"":"1f3af",
"":"1f3b0",
"":"1f3b1",
"[サイコロ]":"1f3b2",
"[ボーリング]":"1f3b3",
"[花札]":"1f3b4",
"[ジョーカー]":"1f0cf",
"":"1f3b5",
"":"1f3bc",
"":"1f3b7",
"":"1f3b8",
"[ピアノ]":"1f3b9",
"":"1f3ba",
"[バイオリン]":"1f3bb",
"":"303d",
"":"1f4f7",
"":"1f4fa",
"":"1f4fb",
"":"1f4fc",
"":"1f48b",
"":"1f48c",
"":"1f48d",
"":"1f48e",
"":"1f48f",
"":"1f490",
"":"1f491",
"":"1f492",
"":"1f51e",
"":"a9",
"":"ae",
"":"2122",
"[ｉ]":"2139",
"":"2320e3",
"":"3120e3",
"":"3220e3",
"":"3320e3",
"":"3420e3",
"":"3520e3",
"":"3620e3",
"":"3720e3",
"":"3820e3",
"":"3920e3",
"":"3020e3",
"[10]":"1f51f",
"":"1f4f6",
"":"1f4f3",
"":"1f4f4",
"":"1f354",
"":"1f359",
"":"1f370",
"":"1f35c",
"":"1f35e",
"":"1f373",
"":"1f366",
"":"1f35f",
"":"1f361",
"":"1f358",
"":"1f35a",
"":"1f35d",
"":"1f35b",
"":"1f362",
"":"1f363",
"":"1f371",
"":"1f372",
"":"1f367",
"[肉]":"1f356",
"[なると]":"1f365",
"[やきいも]":"1f360",
"[ピザ]":"1f355",
"[チキン]":"1f357",
"[アイスクリーム]":"1f368",
"[ドーナツ]":"1f369",
"[クッキー]":"1f36a",
"[チョコ]":"1f36b",
"[キャンディ]":"1f36d",
"[プリン]":"1f36e",
"[ハチミツ]":"1f36f",
"[エビフライ]":"1f364",
"":"1f374",
"":"2615",
"":"1f379",
"":"1f37a",
"":"1f375",
"":"1f37b",
"":"2934",
"":"2935",
"":"2196",
"":"2199",
"⇔":"2194",
"↑↓":"1f503",
"":"2b06",
"":"2b07",
"":"27a1",
"":"1f519",
"":"25b6",
"":"25c0",
"":"23e9",
"":"23ea",
"▲":"1f53c",
"▼":"1f53d",
"":"2b55",
"":"2716",
"":"2757",
"！？":"2049",
"！！":"203c",
"":"2753",
"":"2754",
"":"2755",
"～":"27b0",
"":"27bf",
"":"2764",
"":"1f49e",
"":"1f494",
"":"1f497",
"":"1f498",
"":"1f499",
"":"1f49a",
"":"1f49b",
"":"1f49c",
"":"1f49d",
"":"1f49f",
"":"2665",
"":"2660",
"":"2666",
"":"2663",
"":"1f6ac",
"":"1f6ad",
"":"267f",
"[旗]":"1f6a9",
"":"26a0",
"":"1f6b2",
"":"1f6b6",
"":"1f6b9",
"":"1f6ba",
"":"1f6c0",
"":"1f6bb",
"":"1f6bd",
"":"1f6be",
"":"1f6bc",
"[ドア]":"1f6aa",
"[禁止]":"1f6ab",
"[チェックマーク]":"2705",
"[CL]":"1f191",
"":"1f192",
"[FREE]":"1f193",
"":"1f194",
"":"1f195",
"[NG]":"1f196",
"":"1f197",
"[SOS]":"1f198",
"":"1f199",
"":"1f19a",
"":"1f201",
"":"1f202",
"[禁]":"1f232",
"":"1f233",
"[合]":"1f234",
"":"1f235",
"":"1f236",
"":"1f21a",
"":"1f237",
"":"1f238",
"":"1f239",
"":"1f22f",
"":"1f23a",
"":"3299",
"":"3297",
"":"1f250",
"[可]":"1f251",
"[＋]":"2795",
"[－]":"2796",
"[÷]":"2797",
"":"1f4a1",
"":"1f4a2",
"":"1f4a3",
"":"1f4a4",
"[ドンッ]":"1f4a5",
"":"1f4a7",
"":"1f4a8",
"":"1f4a9",
"":"1f4aa",
"[フキダシ]":"1f4ac",
"":"2747",
"":"2734",
"":"2733",
"":"1f534",
"":"25fc",
"":"1f539",
"":"2b50",
"[花丸]":"1f4ae",
"[100点]":"1f4af",
"←┘":"21a9",
"└→":"21aa",
"":"1f50a",
"[電池]":"1f50b",
"[コンセント]":"1f50c",
"":"1f50e",
"":"1f510",
"":"1f513",
"":"1f511",
"":"1f514",
"[ラジオボタン]":"1f518",
"[ブックマーク]":"1f516",
"[リンク]":"1f517",
"[end]":"1f51a",
"[ON]":"1f51b",
"[SOON]":"1f51c",
"":"1f51d",
"":"270a",
"":"270c",
"":"1f44a",
"":"1f44d",
"":"261d",
"":"1f446",
"":"1f447",
"":"1f448",
"":"1f449",
"":"1f44b",
"":"1f44f",
"":"1f44c",
"":"1f44e",
"":"1f450"
};
String.prototype.emoji=function(){
for(var f=this.toString(),d=0;d<a.length;d++){
for(;a[d].cn&&-1!=f.indexOf(a[d].cn);)f=f.replace(a[d].cn,b.sprintf(a[d].style));
for(;a[d].hk&&-1!=f.indexOf(a[d].hk);)f=f.replace(a[d].hk,b.sprintf(a[d].style));
for(;a[d].us&&-1!=f.indexOf(a[d].us);)f=f.replace(a[d].us,b.sprintf(a[d].style));
for(;a[d].code&&-1!=f.indexOf(a[d].code);)f=f.replace(a[d].code,b.sprintf(a[d].style));
for(;a[d].web_code&&-1!=f.indexOf(a[d].web_code);)f=f.replace(a[d].web_code,b.sprintf(a[d].style));
for(;a[d].emoji&&-1!=f.indexOf(a[d].emoji);)f=f.replace(a[d].emoji,b.sprintf(a[d].style));
}
for(var i in c)for(;-1!=f.indexOf(i);)f=f.replace(i,e.sprintf(c[i]));
return f;
};
});define("common/lib/colorpicker.js",["widget/colorpicker/colorpicker.css"],function(t){
t("widget/colorpicker/colorpicker.css");
var e;
return function(t,o,i){
function s(e){
if(t.event&&t.event.contentOverflow!==i)return{
x:t.event.offsetX,
y:t.event.offsetY
};
if(e.offsetX!==i&&e.offsetY!==i)return{
x:e.offsetX,
y:e.offsetY
};
var o=e.target.parentNode.parentNode;
return{
x:e.layerX-o.offsetLeft,
y:e.layerY-o.offsetTop
};
}
function r(t,e,i){
t=o.createElementNS(y,t);
for(var s in e)t.setAttribute(s,e[s]);
"[object Array]"!=Object.prototype.toString.call(i)&&(i=[i]);
for(var r=0,n=i[0]&&i.length||0;n>r;r++)t.appendChild(i[r]);
return t;
}
function n(t){
var e,o,i,s,r,n=t.h%360/60;
r=t.v*t.s,s=r*(1-Math.abs(n%2-1)),e=o=i=t.v-r,n=~~n,e+=[r,s,0,0,s,r][n],o+=[s,r,r,s,0,0][n],
i+=[0,0,s,r,r,s][n];
var l=Math.floor(255*e),a=Math.floor(255*o),c=Math.floor(255*i);
return{
r:l,
g:a,
b:c,
hex:"#"+(16777216|c|a<<8|l<<16).toString(16).slice(1)
};
}
function l(t){
var e=t.r,o=t.g,i=t.b;
(t.r>1||t.g>1||t.b>1)&&(e/=255,o/=255,i/=255);
var s,r,n,l;
return n=Math.max(e,o,i),l=n-Math.min(e,o,i),s=0==l?null:n==e?(o-i)/l+(i>o?6:0):n==o?(i-e)/l+2:(e-o)/l+4,
s=s%6*60,r=0==l?0:l/n,{
h:s,
s:r,
v:n
};
}
function a(e,o,r){
return function(l){
l=l||t.event;
var a=s(l);
e.h=a.y/o.offsetHeight*360+g;
var c=n({
h:e.h,
s:1,
v:1
}),f=n({
h:e.h,
s:e.s,
v:e.v
});
return r.style.backgroundColor=c.hex,e.callback&&e.callback(f.hex,{
h:e.h-g,
s:e.s,
v:e.v
},{
r:f.r,
g:f.g,
b:f.b
},i,a),l.stopPropagation?(l.stopPropagation(),l.preventDefault()):l.cancelBubble=!0,
!1;
};
}
function c(e,o){
return function(i){
i=i||t.event;
var r=s(i),l=o.offsetWidth,a=o.offsetHeight;
e.s=r.x/l,e.v=(a-r.y)/a;
var c=n(e);
return e.callback&&e.callback(c.hex,{
h:e.h-g,
s:e.s,
v:e.v
},{
r:c.r,
g:c.g,
b:c.b
},r),i.stopPropagation?(i.stopPropagation(),i.preventDefault()):i.cancelBubble=!0,
!1;
};
}
function f(t,e,o){
t.attachEvent?t.attachEvent("on"+e,o):t.addEventListener&&t.addEventListener(e,o,!1);
}
function p(t,e,o){
var i=!1;
f(e,"mousedown",function(){
i=!0;
}),f(e,"mouseup",function(){
i=!1;
}),f(e,"mouseout",function(){
i=!1;
}),f(e,"mousemove",function(t){
i&&o(t);
});
}
function h(t,e,o,i){
t.h=e.h%360,t.s=e.s,t.v=e.v;
var s=n(t),r={
y:t.h*t.slideElement.offsetHeight/360,
x:0
},l=t.pickerElement.offsetHeight,a={
x:t.s*t.pickerElement.offsetWidth,
y:l-t.v*l
};
return t.pickerElement.style.backgroundColor=n({
h:t.h,
s:1,
v:1
}).hex,t.callback&&t.callback(i||s.hex,{
h:t.h,
s:t.s,
v:t.v
},o||{
r:s.r,
g:s.g,
b:s.b
},a,r),t;
}
var d,v,u=t.SVGAngle||o.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML",g=15,y="http://www.w3.org/2000/svg",m=['<div class="picker-wrapper">','<div class="picker"></div>','<div class="picker-indicator"></div>',"</div>",'<div class="slide-wrapper">','<div class="slide"></div>','<div class="slide-indicator"></div>',"</div>"].join("");
"SVG"==u?(v=r("svg",{
xmlns:"http://www.w3.org/2000/svg",
version:"1.1",
width:"100%",
height:"100%"
},[r("defs",{},r("linearGradient",{
id:"gradient-hsv",
x1:"0%",
y1:"100%",
x2:"0%",
y2:"0%"
},[r("stop",{
offset:"0%",
"stop-color":"#FF0000",
"stop-opacity":"1"
}),r("stop",{
offset:"13%",
"stop-color":"#FF00FF",
"stop-opacity":"1"
}),r("stop",{
offset:"25%",
"stop-color":"#8000FF",
"stop-opacity":"1"
}),r("stop",{
offset:"38%",
"stop-color":"#0040FF",
"stop-opacity":"1"
}),r("stop",{
offset:"50%",
"stop-color":"#00FFFF",
"stop-opacity":"1"
}),r("stop",{
offset:"63%",
"stop-color":"#00FF40",
"stop-opacity":"1"
}),r("stop",{
offset:"75%",
"stop-color":"#0BED00",
"stop-opacity":"1"
}),r("stop",{
offset:"88%",
"stop-color":"#FFFF00",
"stop-opacity":"1"
}),r("stop",{
offset:"100%",
"stop-color":"#FF0000",
"stop-opacity":"1"
})])),r("rect",{
x:"0",
y:"0",
width:"100%",
height:"100%",
fill:"url(#gradient-hsv)"
})]),d=r("svg",{
xmlns:"http://www.w3.org/2000/svg",
version:"1.1",
width:"100%",
height:"100%"
},[r("defs",{},[r("linearGradient",{
id:"gradient-black",
x1:"0%",
y1:"100%",
x2:"0%",
y2:"0%"
},[r("stop",{
offset:"0%",
"stop-color":"#000000",
"stop-opacity":"1"
}),r("stop",{
offset:"100%",
"stop-color":"#CC9A81",
"stop-opacity":"0"
})]),r("linearGradient",{
id:"gradient-white",
x1:"0%",
y1:"100%",
x2:"100%",
y2:"100%"
},[r("stop",{
offset:"0%",
"stop-color":"#FFFFFF",
"stop-opacity":"1"
}),r("stop",{
offset:"100%",
"stop-color":"#CC9A81",
"stop-opacity":"0"
})])]),r("rect",{
x:"0",
y:"0",
width:"100%",
height:"100%",
fill:"url(#gradient-white)"
}),r("rect",{
x:"0",
y:"0",
width:"100%",
height:"100%",
fill:"url(#gradient-black)"
})])):"VML"==u&&(v=['<DIV style="position: relative; width: 100%; height: 100%">','<v:rect style="position: absolute; top: 0; left: 0; width: 100%; height: 100%" stroked="f" filled="t">','<v:fill type="gradient" method="none" angle="0" color="red" color2="red" colors="8519f fuchsia;.25 #8000ff;24903f #0040ff;.5 aqua;41287f #00ff40;.75 #0bed00;57671f yellow"></v:fill>',"</v:rect>","</DIV>"].join(""),
d=['<DIV style="position: relative; width: 100%; height: 100%">','<v:rect style="position: absolute; left: -1px; top: -1px; width: 101%; height: 101%" stroked="f" filled="t">','<v:fill type="gradient" method="none" angle="270" color="#FFFFFF" opacity="100%" color2="#CC9A81" o:opacity2="0%"></v:fill>',"</v:rect>",'<v:rect style="position: absolute; left: 0px; top: 0px; width: 100%; height: 101%" stroked="f" filled="t">','<v:fill type="gradient" method="none" angle="0" color="#000000" opacity="100%" color2="#CC9A81" o:opacity2="0%"></v:fill>',"</v:rect>","</DIV>"].join(""),
o.namespaces.v||o.namespaces.add("v","urn:schemas-microsoft-com:vml","#default#VML"));
var b=0;
e=function(t,o,i){
if(!(this instanceof e))return new e(t,o,i);
if(this.h=0,this.s=1,this.v=1,i)this.callback=i,this.pickerElement=o,this.slideElement=t;else{
var s=t;
s.innerHTML=m,this.slideElement=s.getElementsByClassName("slide")[0],this.pickerElement=s.getElementsByClassName("picker")[0];
var r=s.getElementsByClassName("slide-indicator")[0],n=s.getElementsByClassName("picker-indicator")[0];
e.fixIndicators(r,n),this.callback=function(t,i,s,l,a){
e.positionIndicators(r,n,a,l),o(t,i,s);
};
}
if("SVG"==u){
var l=v.cloneNode(!0),h=d.cloneNode(!0),g=l.getElementById("gradient-hsv"),y=l.getElementsByTagName("rect")[0];
g.id="gradient-hsv-"+b,y.setAttribute("fill","url(#"+g.id+")");
var x=[h.getElementById("gradient-black"),h.getElementById("gradient-white")],k=h.getElementsByTagName("rect");
x[0].id="gradient-black-"+b,x[1].id="gradient-white-"+b,k[0].setAttribute("fill","url(#"+x[1].id+")"),
k[1].setAttribute("fill","url(#"+x[0].id+")"),this.slideElement.appendChild(l),this.pickerElement.appendChild(h),
b++;
}else this.slideElement.innerHTML=v,this.pickerElement.innerHTML=d;
f(this.slideElement,"click",a(this,this.slideElement,this.pickerElement)),f(this.pickerElement,"click",c(this,this.pickerElement)),
p(this,this.slideElement,a(this,this.slideElement,this.pickerElement)),p(this,this.pickerElement,c(this,this.pickerElement));
},e.hsv2rgb=function(t){
var e=n(t);
return delete e.hex,e;
},e.hsv2hex=function(t){
return n(t).hex;
},e.rgb2hsv=l,e.rgb2hex=function(t){
return n(l(t)).hex;
},e.hex2hsv=function(t){
return l(e.hex2rgb(t));
},e.hex2rgb=function(t){
return{
r:parseInt(t.substr(1,2),16),
g:parseInt(t.substr(3,2),16),
b:parseInt(t.substr(5,2),16)
};
},e.prototype.setHsv=function(t){
return h(this,t);
},e.prototype.setRgb=function(t){
return h(this,l(t),t);
},e.prototype.setHex=function(t){
return h(this,e.hex2hsv(t),i,t);
},e.positionIndicators=function(t,e,o,i){
o&&(t.style.top=o.y-t.offsetHeight/2+"px"),i&&(e.style.top=i.y-e.offsetHeight/2+"px",
e.style.left=i.x-e.offsetWidth/2+"px");
},e.fixIndicators=function(t,e){
e.style.pointerEvents="none",t.style.pointerEvents="none";
};
}(window,window.document),e;
});define("common/wx/mpEditor/common/clear_dom.js",[],function(){
"use strict";
function e(e){
r.data=[],n(e.dom,r.data);
for(var t=0,o=0,i=0,d=r.data.length;d>i;i++){
var p=r.data[i];
if(p.parent&&p.end&&p.deep>=r.deepLen){
t++,o+=p.deep;
var l=a(p.end);
p.parent.innerHTML="",p.parent.appendChild(l);
}
}
return r.data=[],{
count:t,
perDeepLen:parseInt(o/t)
};
}
function n(e,n){
n.push({});
for(var a=0;a<e.childNodes.length;a++){
var o=e.childNodes[a];
1==o.nodeType&&t(o,n);
}
}
function t(e,a){
var o=a[a.length-1];
1==e.nodeType&&r.tagName.indexOf(","+e.nodeName.toLowerCase()+",")>=0&&1==e.childElementCount?(o.parent?o.deep++:(o.parent=e,
o.deep=0),t(e.firstElementChild,a)):o.parent&&o.deep>=r.deepLen?(o.end=1==e.nodeType?e:e.parentElement,
a.push({})):(a.splice(a.length-1,1),n(e,a));
}
function a(e){
var n=e.cloneNode(!0),t=o(e);
return n.style.cssText=t,n;
}
function o(e){
for(var n={},t=window.getComputedStyle(e),a=0,o=r.styleKey.length;o>a;a++){
for(var i=r.styleKey[a],d=i.replace(/^\-/,"").split("-"),p=1;p<d.length;p++)d[p]=d[p].charAt(0).toUpperCase()+d[p].substr(1);
var l=d.join("");
("backgroundColor"!=l||"rgba(0,0,0,0)"!=t[l].replace(/\s/g,""))&&(n[i]=t[l]);
}
var s=[];
for(var a in n)s.push(a+":"+n[a]);
return s.join(";");
}
var r={
styleKey:["line-height","max-width","letter-spacing","color","font-weight","box-sizing","word-wrap","-webkit-box-sizing","margin","padding","font-family","background-color","white-space","min-height","font-size","background-image","background-clip","background-position","background-repeat","background-size","border","bottom","display","float","height","left","max-height","min-width","text-align","text-decoration","top","position","z-index","visibility"],
tagName:","+["strong","span","section","br"].join(",")+",",
deepLen:20,
data:[]
};
return{
init:e
};
});define("cardticket/card_quantity.js",["common/wx/Cgi.js","common/wx/Tips.js","biz_web/ui/checkbox.js","cardticket/common_template_helper.js","tpl/cardticket/card_quantity.html.js","common/wx/tooltips.js","common/wx/tooltipsManager.js"],function(t){
"use strict";
var e=t("common/wx/Cgi.js"),a=t("common/wx/Tips.js"),i=(t("biz_web/ui/checkbox.js"),
t("cardticket/common_template_helper.js")),o=template.compile(t("tpl/cardticket/card_quantity.html.js")),s={
container:"",
quantityChange:$.noop,
max_sku_for_eachcard:1e4,
setquantity:!0
},n=t("common/wx/tooltips.js"),r=t("common/wx/tooltipsManager.js"),c=function(t){
t=$.extend(!0,{},s,t),this.opt=t;
var c=this;
t.data||(t.data={}),$(t.container).on("click",function(s){
function l(i,o){
$(".js_state_quantity",c.tooltip.$dom).hide();
var s=$(".js_state_"+i,c.tooltip.$dom).show(),n=s.attr("isinit");
if(0==i)e.get({
url:"/merchant/cardmoneymgr?action=get_card_price",
data:{
card_id:_
},
success:function(t){
if(0==t.base_resp.ret){
var a=$.parseJSON(t.result_json);
a.items[0].total_coin_balance=t.total_coin_balance,l(1,a.items[0]);
}else e.show(t);
}
});else if(1==i){
var d=o.price,m=o.total_coin_balance;
if(!n){
var p=$(".js_error",s),f=$(".js_total_price",s),h=$(".js_total_price_container",s),y=$(".js_value",s).keyup(function(){
var t=$(this),e=$.trim($(this).val());
if(!/^[0-9]+$/.test(e)||isNaN(e)||0>=e)return p.text("库存必须是不小于1的整数").show().addClass("fail"),
t.focus(),h.hide(),!1;
var a=1e9;
return e>=a?(p.text("库存不能大于10亿").show().addClass("fail"),t.focus(),!1):d*e>m?(p.html('券点余额：%s 余额不足，<a target="_blank" href="%s">去充值</a>'.sprintf(m/100,wx.url("/merchant/cardmoneymgr?action=get_order_flow"))).show().addClass("fail"),
t.focus(),h.show(),f.text(d*e/100),!1):(p.text("券点余额：%s，优先使用免费券点".sprintf(m/100)).show().removeClass("fail"),
h.show(),void f.text(d*e/100));
});
$(".js_confirm",s).click(function(){
var t=$.trim(y.val());
if(!/^[0-9]+$/.test(t)||isNaN(t)||0>=t)return p.text("库存必须是不小于1的整数").show().addClass("fail"),
y.focus(),h.hide(),!1;
var a=1e9;
return t>=a?(p.text("库存不能大于10亿").show().addClass("fail"),y.focus(),!1):d*t>m?(p.html('券点余额：%s 余额不足，<a target="_blank" href="%s">去充值</a>'.sprintf(m/100,wx.url("/merchant/cardmoneymgr?action=get_order_flow"))).show().addClass("fail"),
y.focus(),!1):($(this).btn(!1),t=parseInt(t),void e.get({
url:"/merchant/cardmoneymgr?action=get_card_pay_price",
data:{
card_id:_,
quantity:t
},
success:function(a){
0==a.base_resp.ret?(a.quantity=t,l(2,a)):e.show(a);
}
}));
}),$(".js_cancel",s).click(function(){
c.tooltip.hide(),r.removeAll(),c.tooltip=null;
});
}
s.find(".js_price").text(o.price/100);
}else if(2==i){
if(!n){
var v=!1;
$(".js_confirm",s).click(function(){
v||($(this).btn(!1),v=!0,e.post({
url:"/merchant/cardmoneymgr?action=confirm_card_coin_pay",
data:{
card_id:_,
quantity:o.quantity,
free_coin:o.free_coin,
pay_coin:o.pay_coin,
order_id:o.order_id,
price:o.price
},
complete:function(){
v=!1;
},
success:function(t){
$(this).btn(!0),0==t.base_resp.ret?(t.addquantity=o.quantity,u.pay_info.is_swipe_card?l(9,t):l(3,t)):26==t.base_resp.ret?(t.is_fail=!1,
l(4,t)):10039==t.base_resp.ret||76==t.base_resp.ret?l(8,t):(t.is_fail=!0,l(4,t));
}
}));
}),$(".js_cancel",s).click(function(){
c.tooltip.hide(),r.removeAll(),c.tooltip=null;
});
}
s.find(".js_price").text(o.price/100),s.find(".js_quantity").text(o.quantity),s.find(".js_freecoin").text(o.free_coin/100),
s.find(".js_paycoin").text(o.pay_coin/100);
}else if(3==i||9==i){
n||$(".js_close_quantity",s).click(function(){
r.removeAll();
});
var w=o.addquantity;
s.find(".js_quantity").text(w),$(t.container).data("isswipe")||a.suc("设置库存成功"),setTimeout(function(){
3==i&&r.removeAll();
},1500),t.quantityChange&&t.quantityChange.call(c,_,w);
}else 4==i||7==i||8==i?(n||$(".js_close_quantity",s).click(function(){
r.removeAll();
}),8==i&&$(".js_quantity_exceed_msg h4",s).text(t.max_sku_for_eachcard>0?" 子商户每张券累计只可发放%s份 ".sprintf(t.max_sku_for_eachcard):" 账号违规，不能改动库存，详请查看通知中心 ")):5==i?n||$(".js_go_activate",s).click(function(){
r.removeAll(),location.href=wx.url("/merchant/cardstat?action=overviewpage");
}):6==i&&e.get({
url:"/merchant/cardmoneymgr?action=check_is_card_money_acct_open"
},function(t){
0==t.base_resp.ret?l(1==t.is_acct_open?0:5):e.handleRet(t,{
id:64463,
key:25,
url:"/merchant/cardmoneymgr?action=check_is_card_money_acct_open"
});
});
s.attr("isinit",1);
}
var d,_=$(this).data("cid");
if(t.before&&t.before(_)===!1)return!1;
var u=t.data;
if(t.cache_card&&(u=t.cache_card[_]),u.is_sns_card&&3!=u.status&&5!=u.status&&6!=u.status)return a.err("审核中的朋友的券无法修改库存"),
!1;
if(u.is_sns_card){
if(c.tooltip=new n({
container:this,
content:o({
setquantity:t.setquantity,
data:u
}),
container_mode:t.mode||"absolute",
reposition:!0,
type:"click",
onclose:function(t){
if(t){
for(var e=this.$dom.get(0),a=t.target,i=!1;a&&a!==document.body;){
if(a==e){
i=!0;
break;
}
a=a.parentNode;
}
i?this.show():this.hide();
}
}
}),l(6),c.tooltip.show(),r.removeAll(),r.add(c.tooltip),$(".popover").css({
"z-index":"10000",
width:"326px"
}),"fixed"==t.mode){
var m=parseInt(c.tooltip.$dom.css("top"))||0;
c.tooltip.$dom.css("top",m-($(document.documentElement||document.body).scrollTop()||0));
}
s.stopPropagation();
}else{
var p=new n({
container:this,
content:o({
setquantity:t.setquantity,
data:u
}),
container_mode:t.mode||"absolute",
type:"click",
reposition:!0,
onclose:function(t){
if(t){
for(var e=this.$dom.get(0),a=t.target,i=!1;a&&a!==document.body;){
if(a==e){
i=!0;
break;
}
a=a.parentNode;
}
i?this.show():this.hide();
}
},
buttons:[{
text:"确定",
type:"btn_primary",
click:function(){
var o=p.$dom,s=o.find(".js_value"),n=parseInt($.trim(s.val()));
if(isNaN(n)||0>=n)return a.err("库存必须是不能小于1的整数"),!1;
var l=1e9;
return n>=l?(a.err("库存不能大于10亿"),s.focus(),!1):void e.post({
url:"/merchant/electroniccardmgr",
data:{
action:t.setquantity?"modifyquantity":"setquantity",
card_id:_,
value:n,
isadd:d.value()
}
},function(o){
if(0==o.base_resp.ret)$(t.container).data("isswipe")||a.suc("设置库存成功"),r.removeAll(),
t.quantityChange&&t.quantityChange.call(c,_,!t.setquantity||d.value()?n:-n);else if(10039==o.base_resp.ret||76==o.base_resp.ret){
var s=$.parseJSON(o.biz_quota_json),l=i.parse_assistsend_quota(s.quota_list);
a.err(l.max_sku>0?"子商户每张券累计只可发放%s份".sprintf(l.max_sku):"账号违规，不能改动库存，详请查看通知中心");
}else 1e4==o.base_resp.ret?a.err("库存不能小于0"):e.show(o);
});
}
},{
text:"取消",
type:"btn_default",
click:function(){
r.removeAll();
}
}]
});
if(p.show(),r.removeAll(),r.add(p),$(".popover").css({
"z-index":"10000",
width:"326px"
}),d=p.$dom.find(".js_quantity_type").checkbox(),p.$dom.find(".js_value").focus(),
"fixed"==t.mode){
var m=parseInt(p.$dom.css("top"))||0;
p.$dom.css("top",m-($(document.documentElement||document.body).scrollTop()||0));
}
s.stopPropagation();
}
window.report_click_ele&&window.report_click_ele(this);
});
};
return c;
});