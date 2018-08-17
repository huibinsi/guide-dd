define("tpl/media/plugin/audioItem.html.js",[],function(){
return'{each list as data i}\n<label class="frm_radio_label audio_item {if data.enable==true}disabled{/if}">\n    <i class="icon_radio"></i>\n    <span class="lbl_content">\n        <span class="audio_meta audio_title">{data.title}</span>\n        <span class="audio_meta audio_date">{data.update_time}</span>\n        <span class="audio_meta audio_length">{data.format_play_length}</span>\n        <span class=\'audio_meta audio_play jsPluginAudioPlay audio_default\' id="pluginAudioPlay_{i}">\n        </span>\n    </span>\n    <input type="radio" {if data.disabled}disabled="disabled"{/if}  data-label="{data.name}" data-value="{data.file_id}" data-index="{i}" class="frm_radio jsPluginAudioRadio js_audio_music_item_radio" >\n</label>\n{/each}\n';
});define("tpl/media/audioMusicDialog.html.js",[],function(){
return'<div id="audio_music_dialog_content" class="audio_music_dialog_content">\n  <div class="weui-desktop-tab weui-desktop-tab_title weui-desktop-tab_dialog title_tab">\n    <ul class="weui-desktop-tab__navs">\n      {if allowAudio}<li class="js_audio_tab_btn weui-desktop-tab__nav first js_top"><a href="javascript:;">素材库</a></li>{/if}\n      {if allowMusic}<li class="js_music_tab_btn weui-desktop-tab__nav first js_top"><a href="javascript:;">音乐</a></li>{/if}\n    </ul>\n  </div>\n  <div>\n\n    {if allowAudio}<div class="js_audio_block audio_box" style="display:none">\n        {if audioDisabled}\n        <div class="page_msg mini audio_global_msg">\n            <div class="inner">\n                <span class="msg_icon_wrp"><i class="icon_msg_mini info"></i></span>\n                <div class="msg_content">\n                    <p>每篇图文消息只能添加一个语音</p>\n                </div>\n            </div>\n        </div>\n        {/if}\n      <div class="global_mod audio_box_hd float_layout gap_top" id="">\n          <p class="global_info gap_top_item tips_global jsAudioTips" {if !hasAudioLengthLimit}style="display:none;"{/if}>由于版本兼容的原因,你暂时只可以选择60秒内的语音发送</p>\n          <p class="global_extra">\n              <a class="btn btn_primary btn_add jsPluginAudioNew" href="javascript:;"><i class="icon14_common add_white"></i>新建语音</a>\n          </p>\n      </div>\n      <div class="audio_box_bd audio_list_container" id="">\n          <div class="media_list_tips_wrp tips_global" style="display:none;">\n              <span class="tips">暂无素材</span>\n              <span class="vm_box"></span>\n          </div>\n          <div class="media_list_tips_wrp" style="display:none;">\n              <i class="icon_loading_small white">loading...</i>\n              <span class="vm_box"></span>\n          </div>\n          <div class="audio_list jsPluginAudioList"></div>\n          <div class="pagination_wrp jsPluginAudioPage"></div>\n      </div>\n    </div>{/if}\n\n    {if allowMusic}<div class="js_music_block" style="display:none">\n      <div class="global_mod qqmusic_box_hd float_layout gap_top" id="searchDiv">\n          <span class="global_info frm_input_box search with_del append">\n              <a class="del_btn" onclick="return false" href="javascript:;" id="searchCloseBt"><i class="icon_search_del"></i>&nbsp;</a>\n              <a onclick="return false" id="searchBt" href="javascript:;" class="frm_input_append"><i class="icon16_common search_gray">搜索</i>&nbsp;</a>\n              <input id="keyInput" type="text" placeholder="歌名/作者" value="" class="frm_input">\n          </span>\n      </div>\n      <div class="qqmusic_box_bd qqmusic_list_container">\n        <div class="media_list_tips_wrp js_music_loading" style="display:none;">\n          <i class="icon_loading_small white">loading...</i>\n          <span class="vm_box"></span>\n        </div>\n        <div id="dialog_audio_container">\n        </div>\n      </div>\n    </div>{/if}\n\n  </div>\n</div>\n';
});define("tpl/mpEditor/plugin/emotion.html.js",[],function(){
return'<ul class="emotions" onselectstart="return false;" onclick="$$._onEmotionClick(event)">\n    {each edata as e index}\n        <li data-name=\'{e.name}\' data-title=\'{e.title}\' class="emotions_item js_emotion_li">\n            <span class="icon_emotion_sprite" style=\'{e.bp}\'></span>\n        </li>\n    {/each}\n</ul>\n';
});define("common/wx/richEditor/emotion.js",["common/qq/emoji.js","widget/emotion_panel.css","biz_common/utils/emoji_data.js","biz_common/utils/emoji_panel_data.js","tpl/richEditor/emotion.html.js","common/qq/Class.js"],function(t,i,e){
"use strict";
function o(t){
return k.format(t);
}
var n=wx.T;
t("common/qq/emoji.js"),t("widget/emotion_panel.css");
for(var m=t("biz_common/utils/emoji_data.js"),s=t("biz_common/utils/emoji_panel_data.js"),a=[],c=0;c<s.length;c++)for(var r=0;r<m.length;r++)if(m[r].id==s[c]){
a[c]=m[r];
break;
}
for(var l=t("tpl/richEditor/emotion.html.js"),u=t("common/qq/Class.js"),h=20,f=16,d=7,_=[],j=h,g=f,p=d,r=0;p>r;++r)for(var v=0;g>v;++v){
var b=r*g+v;
_.push(a[b]?{
name:a[b].style,
title:a[b].emoji?a[b].emoji:a[b].cn,
bp:"background-position:0 -"+b*j+"px;"
}:{
name:"",
title:"",
bp:"background-position:0 -"+m.length*j+"px;"
});
}
var k='<img src="/mpres/zh_CN/htmledition/comm_htmledition/images/pic/common/pic_blank.gif" class="icon_emotion_single {name}" alt="mo-{title}"></img>',E=u.declare({
init:function(t){
this.selector$=t,this.selector$.html(n(l,{
edata:_
})),this._previewArea$=this.selector$.find(".js_emotionPreviewArea"),this._initEvent();
},
getEmotionText:function(t){
return t.replace(/<img.*?alt=["]{0,1}mo-([^"\s]*).*?>/gi,"$1");
},
getEmotionHTML:function(t){
return o(t);
},
_getData:function(t){
return{
title:t.data("title"),
name:t.data("name")
};
},
_initEvent:function(){
var t=this;
t.selector$.click(function(i){
var e=t._getData($(i.target));
e.name&&t.clickCB&&t.clickCB(e);
});
},
click:function(t){
this.clickCB=t;
},
mouseleave:function(t){
return this.mouseleaveCB=t,this;
},
mouseover:function(t){
return this.mouseoverCB=t,this;
},
show:function(){
this.selector$.fadeIn();
},
hide:function(){
this.selector$.fadeOut();
}
});
E.emoji=function(t){
return t=t||"",t.emoji();
},E.getEdata=function(){
return _;
},E.getEmotionHtml=o,e.exports=E;
});define("common/wx/mpEditor/editor_all_min.js",["common/wx/mpEditor/common/clear_dom.js","biz_web/lib/store.js","common/lib/colorpicker.js"],function(e){
function t(e,t,n){
var i;
return t=t.toLowerCase(),(i=e.__allListeners||n&&(e.__allListeners={}))&&(i[t]||n&&(i[t]=[]));
}
function n(e,t,i,o,r,a){
var s,l=o&&e[t];
for(!l&&(l=e[i]);!l&&(s=(s||e).parentNode);){
if("BODY"==s.tagName||a&&!a(s))return null;
l=s[i];
}
return l&&r&&!r(l)?n(l,t,i,!1,r):l;
}
var i=e("common/wx/mpEditor/common/clear_dom.js"),o=e("biz_web/lib/store.js"),r=e("common/lib/colorpicker.js"),a=window.baidu||{};
window.baidu=a,window.UE=a.editor={},UE.plugins={},UE.commands={},UE.instants={},
UE.I18N={},UE.version="1.2.6.3";
var s=UE.dom={},l=UE.browser=function(){
var e=navigator.userAgent.toLowerCase(),t=window.opera,n={
edge:/edge\/([\w.]+)/i.test(e),
ie:/(msie\s|trident.*rv:)([\w.]+)/.test(e),
opera:!!t&&t.version,
webkit:e.indexOf(" applewebkit/")>-1,
mac:e.indexOf("macintosh")>-1,
quirks:"BackCompat"==document.compatMode
};
n.gecko="Gecko"==navigator.product&&!n.webkit&&!n.opera&&!n.ie;
var i=0;
if(n.ie){
var o=e.match(/(?:msie\s([\w.]+))/),r=e.match(/(?:trident.*rv:([\w.]+))/);
i=o&&r&&o[1]&&r[1]?Math.max(1*o[1],1*r[1]):o&&o[1]?1*o[1]:r&&r[1]?1*r[1]:0,n.ie11Compat=11==document.documentMode,
n.ie9Compat=9==document.documentMode,n.ie8=!!document.documentMode,n.ie8Compat=8==document.documentMode,
n.ie7Compat=7==i&&!document.documentMode||7==document.documentMode,n.ie6Compat=7>i||n.quirks,
n.ie9above=i>8,n.ie9below=9>i,n.ie11above=i>10,n.ie11below=11>i;
}
if(n.gecko){
var a=e.match(/rv:([\d\.]+)/);
a&&(a=a[1].split("."),i=1e4*a[0]+100*(a[1]||0)+1*(a[2]||0));
}
return/chrome\/(\d+\.\d)/i.test(e)&&(n.chrome=+RegExp.$1),/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(e)&&!/chrome/i.test(e)&&(n.safari=+(RegExp.$1||RegExp.$2)),
n.opera&&(i=parseFloat(t.version())),n.webkit&&(i=parseFloat(e.match(/ applewebkit\/(\d+)/)[1])),
n.version=i,n.isCompatible=!n.mobile&&(n.ie&&i>=6||n.gecko&&i>=10801||n.opera&&i>=9.5||n.air&&i>=1||n.webkit&&i>=522||!1),
n;
}(),d=l.ie,c=(l.webkit,l.gecko,l.opera),u=UE.utils={
each:function(e,t,n){
if(null!=e)if(e.length===+e.length){
for(var i=0,o=e.length;o>i;i++)if(t.call(n,e[i],i,e)===!1)return!1;
}else for(var r in e)if(e.hasOwnProperty(r)&&t.call(n,e[r],r,e)===!1)return!1;
},
makeInstance:function(e){
var t=new Function;
return t.prototype=e,e=new t,t.prototype=null,e;
},
extend:function(e,t,n){
if(t)for(var i in t)n&&e.hasOwnProperty(i)||(e[i]=t[i]);
return e;
},
extend2:function(e){
for(var t=arguments,n=1;n<t.length;n++){
var i=t[n];
for(var o in i)e.hasOwnProperty(o)||(e[o]=i[o]);
}
return e;
},
inherits:function(e,t){
var n=e.prototype,i=u.makeInstance(t.prototype);
return u.extend(i,n,!0),e.prototype=i,i.constructor=e;
},
bind:function(e,t){
return function(){
return e.apply(t,arguments);
};
},
defer:function(e,t,n){
var i;
return function(){
n&&clearTimeout(i),i=setTimeout(e,t);
};
},
indexOf:function(e,t,n){
var i=-1;
return n=this.isNumber(n)?n:0,this.each(e,function(e,o){
return o>=n&&e===t?(i=o,!1):void 0;
}),i;
},
removeItem:function(e,t){
for(var n=0,i=e.length;i>n;n++)e[n]===t&&(e.splice(n,1),n--);
},
trim:function(e){
return e.replace(/(^[ \t\n\r]+)|([ \t\n\r]+$)/g,"");
},
listToMap:function(e){
if(!e)return{};
e=u.isArray(e)?e:e.split(",");
for(var t,n=0,i={};t=e[n++];)i[t.toUpperCase()]=i[t]=1;
return i;
},
unhtml:function(e,t){
return e?e.replace(t||/[&<">'](?:(amp|lt|quot|gt|#39|nbsp);)?/g,function(e,t){
return t?e:{
"<":"&lt;",
"&":"&amp;",
'"':"&quot;",
">":"&gt;",
"'":"&#39;"
}[e];
}):"";
},
html:function(e){
return e?e.replace(/&((g|l|quo)t|amp|#39);/g,function(e){
return{
"&lt;":"<",
"&amp;":"&",
"&quot;":'"',
"&gt;":">",
"&#39;":"'"
}[e];
}):"";
},
cssStyleToDomStyle:function(){
var e=document.createElement("div").style,t={
"float":void 0!=e.cssFloat?"cssFloat":void 0!=e.styleFloat?"styleFloat":"float"
};
return function(e){
return t[e]||(t[e]=e.toLowerCase().replace(/-./g,function(e){
return e.charAt(1).toUpperCase();
}));
};
}(),
loadFile:function(){
function e(e,n){
try{
for(var i,o=0;i=t[o++];)if(i.doc===e&&i.url==(n.src||n.href))return i;
}catch(r){
return null;
}
}
var t=[];
return function(n,i,o){
i.src&&(i.src+="?v="+UE.version),i.href&&(i.href+="?v="+UE.version);
var r=e(n,i);
if(r)return void(r.ready?o&&o():r.funs.push(o));
if(t.push({
doc:n,
url:i.src||i.href,
funs:[o]
}),!n.body){
var a=[];
for(var s in i)"tag"!=s&&a.push(s+'="'+i[s]+'"');
return void n.write("<"+i.tag+" "+a.join(" ")+" ></"+i.tag+">");
}
if(!i.id||!n.getElementById(i.id)){
var l=n.createElement(i.tag);
delete i.tag;
for(var s in i)l.setAttribute(s,i[s]);
l.onload=l.onreadystatechange=function(){
if(!this.readyState||/loaded|complete/.test(this.readyState)){
if(r=e(n,i),r.funs.length>0){
r.ready=1;
for(var t;t=r.funs.pop();)t();
}
l.onload=l.onreadystatechange=null;
}
},l.onerror=function(){
throw Error("The load "+(i.href||i.src)+" fails,check the url settings of file ueditor.config.js ");
},n.getElementsByTagName("head")[0].appendChild(l);
}
};
}(),
isEmptyObject:function(e){
if(null==e)return!0;
if(this.isArray(e)||this.isString(e))return 0===e.length;
for(var t in e)if(e.hasOwnProperty(t))return!1;
return!0;
},
fixColor:function(e,t){
if(/color/i.test(e)&&/rgba?/.test(t)){
var n=t.split(",");
if(n.length>3)return"";
t="#";
for(var i,o=0;i=n[o++];)i=parseInt(i.replace(/[^\d]/gi,""),10).toString(16),t+=1==i.length?"0"+i:i;
t=t.toUpperCase();
}
return t;
},
optCss:function(e){
function t(e,t){
if(!e)return"";
var n=e.top,i=e.bottom,o=e.left,r=e.right,a="";
if(n&&o&&i&&r)a+=";"+t+":"+(n==i&&i==o&&o==r?n:n==i&&o==r?n+" "+o:o==r?n+" "+o+" "+i:n+" "+r+" "+i+" "+o)+";";else for(var s in e)a+=";"+t+"-"+s+":"+e[s]+";";
return a;
}
var n,i;
return e=e.replace(/(padding|margin|border)\-([^:]+):([^;]+);?/gi,function(e,t,o,r){
if(1==r.split(" ").length)switch(t){
case"padding":
return!n&&(n={}),n[o]=r,"";

case"margin":
return!i&&(i={}),i[o]=r,"";

case"border":
return"initial"==r?"":e;
}
return e;
}),e+=t(n,"padding")+t(i,"margin"),e.replace(/^[ \n\r\t;]*|[ \n\r\t]*$/,"").replace(/;([ \n\r\t]+)|\1;/g,";").replace(/(&((l|g)t|quot|#39))?;{2,}/g,function(e,t){
return t?t+";;":";";
});
},
clone:function(e,t){
var n;
t=t||{};
for(var i in e)e.hasOwnProperty(i)&&(n=e[i],"object"==typeof n?(t[i]=u.isArray(n)?[]:{},
u.clone(e[i],t[i])):t[i]=n);
return t;
},
transUnitToPx:function(e){
if(!/(pt|cm)/.test(e))return e;
var t;
switch(e.replace(/([\d.]+)(\w+)/,function(n,i,o){
e=i,t=o;
}),t){
case"cm":
e=25*parseFloat(e);
break;

case"pt":
e=Math.round(96*parseFloat(e)/72);
}
return e+(e?"px":"");
},
domReady:function(){
function e(e){
e.isReady=!0;
for(var n;n=t.pop();n());
}
var t=[];
return function(n,i){
function o(){
r.removeEventListener("DOMContentLoaded",o,!1),e(r);
}
i=i||window;
var r=i.document;
n&&t.push(n),"complete"===r.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?e(r):(r.isReady&&e(r),
i.addEventListener?(r.addEventListener("DOMContentLoaded",o,!1),i.addEventListener("load",function(){
e(r);
},!1)):(!function(){
if(!r.isReady){
try{
r.documentElement.doScroll("left");
}catch(t){
return void setTimeout(arguments.callee,0);
}
e(r);
}
}(),i.attachEvent("onload",function(){
e(r);
})));
};
}(),
cssRule:l.ie&&11!=l.version&&document.createStyleSheet?function(e,t,n){
var i,o;
n=n||document,i=n.indexList?n.indexList:n.indexList={};
var r;
if(i[e])r=n.styleSheets[i[e]];else{
if(void 0===t)return"";
r=n.createStyleSheet("",o=n.styleSheets.length),i[e]=o;
}
return void 0===t?r.cssText:void(r.cssText=t||"");
}:function(e,t,n){
n=n||document;
var i,o=n.getElementsByTagName("head")[0];
if(!(i=n.getElementById(e))){
if(void 0===t)return"";
i=n.createElement("style"),i.id=e,o.appendChild(i);
}
return void 0===t?i.innerHTML:void(""!==t?i.innerHTML=t:o.removeChild(i));
},
sort:function(e,t){
t=t||function(e,t){
return e.localeCompare(t);
};
for(var n=0,i=e.length;i>n;n++)for(var o=n,r=e.length;r>o;o++)if(t(e[n],e[o])>0){
var a=e[n];
e[n]=e[o],e[o]=a;
}
return e;
}
};
u.each(["String","Function","Array","Number","RegExp","Object"],function(e){
UE.utils["is"+e]=function(t){
return Object.prototype.toString.apply(t)=="[object "+e+"]";
};
});
var f=UE.EventBase=function(){};
f.prototype={
addListener:function(e,n){
e=u.trim(e).split(" ");
for(var i,o=0;i=e[o++];)t(this,i,!0).push(n);
},
removeListener:function(e,n){
e=u.trim(e).split(" ");
for(var i,o=0;i=e[o++];)u.removeItem(t(this,i)||[],n);
},
fireEvent:function(){
var e=arguments[0];
e=u.trim(e).split(" ");
for(var n,i=0;n=e[i++];){
try{
this.options.debug&&u.isArray(this.eventLog)&&this.eventLog.push({
time:+new Date,
name:n,
param:JSON.stringify(arguments).substr(0,200),
error:!1,
errorLog:""
});
}catch(o){}
var r,a,s,l=t(this,n);
if(l)for(s=l.length;s--;)if(l[s]){
try{
a=l[s].apply(this,arguments);
}catch(d){
if(this.options.debug&&u.isArray(this.eventLog)){
var c=this.eventLog.length,f=this.eventLog[c-1];
f&&f.name==n&&(f.error=!0,f.errorLog+=d&&d.stack?d.stack:"");
}
window.BJ_REPORT&&"function"==typeof window.BJ_REPORT.report&&d&&d.stack&&(d.stack="editor_fireEvent|"+n+"|"+d.stack,
window.BJ_REPORT.report(d)),d.stack&&console&&console.error&&console.error("[BJ-REPORT]",d.stack);
}
if(a===!0)return a;
void 0!==a&&(r=a);
}
if(a=this["on"+n.toLowerCase()])try{
r=a.apply(this,arguments);
}catch(d){
window.BJ_REPORT&&"function"==typeof window.BJ_REPORT.report&&d&&d.stack&&(d.stack="editor_fireEvent|on"+n.toLowerCase()+"|"+d.stack,
window.BJ_REPORT.report(d)),d.stack&&console&&console.error&&console.error("[BJ-REPORT]",d.stack);
}
}
return r;
}
};
var m=s.dtd=function(){
function e(e){
for(var t in e)e[t.toUpperCase()]=e[t];
return e;
}
var t=u.extend2,n=e({
isindex:1,
fieldset:1
}),i=e({
input:1,
button:1,
select:1,
textarea:1,
label:1
}),o=t(e({
a:1
}),i),r=t({
iframe:1
},o),a=e({
hr:1,
ul:1,
menu:1,
div:1,
blockquote:1,
noscript:1,
table:1,
center:1,
address:1,
dir:1,
pre:1,
h5:1,
dl:1,
h4:1,
noframes:1,
h6:1,
ol:1,
h1:1,
h3:1,
h2:1
}),s=e({
ins:1,
del:1,
script:1,
style:1
}),l=t(e({
b:1,
acronym:1,
bdo:1,
"var":1,
"#":1,
abbr:1,
code:1,
br:1,
i:1,
cite:1,
kbd:1,
u:1,
strike:1,
s:1,
tt:1,
strong:1,
q:1,
samp:1,
em:1,
dfn:1,
span:1
}),s),d=t(e({
sub:1,
img:1,
embed:1,
object:1,
sup:1,
basefont:1,
map:1,
applet:1,
font:1,
big:1,
small:1
}),l),c=t(e({
p:1
}),d),f=t(e({
iframe:1
}),d,i),m=e({
img:1,
embed:1,
noscript:1,
br:1,
kbd:1,
center:1,
button:1,
basefont:1,
h5:1,
h4:1,
samp:1,
h6:1,
ol:1,
h1:1,
h3:1,
h2:1,
form:1,
font:1,
"#":1,
select:1,
menu:1,
ins:1,
abbr:1,
label:1,
code:1,
table:1,
script:1,
cite:1,
input:1,
iframe:1,
strong:1,
textarea:1,
noframes:1,
big:1,
small:1,
span:1,
hr:1,
sub:1,
bdo:1,
"var":1,
div:1,
object:1,
sup:1,
strike:1,
dir:1,
map:1,
dl:1,
applet:1,
del:1,
isindex:1,
fieldset:1,
ul:1,
b:1,
acronym:1,
a:1,
blockquote:1,
i:1,
u:1,
s:1,
tt:1,
address:1,
q:1,
pre:1,
p:1,
em:1,
dfn:1
}),h=t(e({
a:0
}),f),p=e({
tr:1
}),g=e({
"#":1
}),v=t(e({
param:1
}),m),b=t(e({
form:1
}),n,r,a,c),y=e({
li:1,
ol:1,
ul:1
}),C=e({
style:1,
script:1
}),N=e({
base:1,
link:1,
meta:1,
title:1
}),x=t(N,C),w=e({
head:1,
body:1
}),E=e({
html:1
}),T=e({
address:1,
blockquote:1,
center:1,
dir:1,
div:1,
dl:1,
fieldset:1,
form:1,
h1:1,
h2:1,
h3:1,
h4:1,
h5:1,
h6:1,
hr:1,
isindex:1,
menu:1,
noframes:1,
ol:1,
p:1,
pre:1,
table:1,
ul:1
}),S=e({
figure:1,
output:1,
hgroup:1,
video:1,
footer:1,
header:1,
canvas:1,
audio:1,
aside:1,
figcaption:1,
section:1,
address:1,
blockquote:1,
center:1,
dir:1,
div:1,
dl:1,
fieldset:1,
form:1,
h1:1,
h2:1,
h3:1,
h4:1,
h5:1,
h6:1,
hr:1,
isindex:1,
menu:1,
noframes:1,
ol:1,
p:1,
pre:1,
table:1,
ul:1
}),k=e({
area:1,
base:1,
basefont:1,
br:1,
col:1,
command:1,
dialog:1,
embed:1,
hr:1,
img:1,
input:1,
isindex:1,
keygen:1,
link:1,
meta:1,
param:1,
source:1,
track:1,
wbr:1
});
return e({
$nonBodyContent:t(E,w,N),
$block:T,
$block2:S,
$inline:h,
$inlineWithA:t(e({
a:1
}),h),
$body:t(e({
script:1,
style:1
}),T),
$cdata:e({
script:1,
style:1
}),
$empty:k,
$nonChild:e({
iframe:1,
textarea:1
}),
$listItem:e({
dd:1,
dt:1,
li:1
}),
$list:e({
ul:1,
ol:1,
dl:1
}),
$isNotEmpty:e({
table:1,
ul:1,
ol:1,
dl:1,
iframe:1,
area:1,
base:1,
col:1,
hr:1,
img:1,
embed:1,
input:1,
link:1,
meta:1,
param:1,
h1:1,
h2:1,
h3:1,
h4:1,
h5:1,
h6:1
}),
$removeEmpty:e({
a:1,
abbr:1,
acronym:1,
address:1,
b:1,
bdo:1,
big:1,
cite:1,
code:1,
del:1,
dfn:1,
em:1,
font:1,
i:1,
ins:1,
label:1,
kbd:1,
q:1,
s:1,
samp:1,
small:1,
span:1,
strike:1,
strong:1,
sub:1,
sup:1,
tt:1,
u:1,
"var":1
}),
$removeEmptyBlock:e({
p:1,
div:1
}),
$tableContent:e({
caption:1,
col:1,
colgroup:1,
tbody:1,
td:1,
tfoot:1,
th:1,
thead:1,
tr:1,
table:1
}),
$notTransContent:e({
pre:1,
script:1,
style:1,
textarea:1
}),
html:w,
head:x,
style:g,
script:g,
body:b,
base:{},
link:{},
meta:{},
title:g,
col:{},
tr:e({
td:1,
th:1
}),
img:{},
embed:{},
colgroup:e({
thead:1,
col:1,
tbody:1,
tr:1,
tfoot:1
}),
noscript:b,
td:b,
br:{},
th:b,
center:b,
kbd:h,
button:t(c,a),
basefont:{},
h5:h,
h4:h,
samp:h,
h6:h,
ol:y,
h1:h,
h3:h,
option:g,
h2:h,
form:t(n,r,a,c),
select:e({
optgroup:1,
option:1
}),
font:h,
ins:h,
menu:y,
abbr:h,
label:h,
table:e({
thead:1,
col:1,
tbody:1,
tr:1,
colgroup:1,
caption:1,
tfoot:1
}),
code:h,
tfoot:p,
cite:h,
li:b,
input:{},
iframe:b,
strong:h,
textarea:g,
noframes:b,
big:h,
small:h,
span:e({
"#":1,
br:1,
b:1,
strong:1,
u:1,
i:1,
em:1,
sub:1,
sup:1,
strike:1,
span:1
}),
hr:h,
dt:h,
sub:h,
optgroup:e({
option:1
}),
param:{},
bdo:h,
"var":h,
div:b,
object:v,
sup:h,
dd:b,
strike:h,
area:{},
dir:y,
map:t(e({
area:1,
form:1,
p:1
}),n,s,a),
applet:v,
dl:e({
dt:1,
dd:1
}),
del:h,
isindex:{},
fieldset:t(e({
legend:1
}),m),
thead:p,
ul:y,
acronym:h,
b:h,
a:t(e({
a:1
}),f),
blockquote:t(e({
td:1,
tr:1,
tbody:1,
li:1
}),b),
caption:h,
i:h,
u:h,
tbody:p,
s:h,
address:t(r,c),
tt:h,
legend:h,
q:h,
pre:t(l,o),
p:t(e({
a:1
}),h),
em:h,
dfn:h
});
}(),h=d&&l.version<9?{
tabindex:"tabIndex",
readonly:"readOnly",
"for":"htmlFor",
"class":"className",
maxlength:"maxLength",
cellspacing:"cellSpacing",
cellpadding:"cellPadding",
rowspan:"rowSpan",
colspan:"colSpan",
usemap:"useMap",
frameborder:"frameBorder"
}:{
tabindex:"tabIndex",
readonly:"readOnly"
},p=u.listToMap(["inline","inline-block","inline-table"]);
styleBlock=u.listToMap(["-webkit-box","-moz-box","block","list-item","table","table-row-group","table-header-group","table-footer-group","table-row","table-column-group","table-column","table-cell","table-caption"]);
var g=d&&"6"==l.version?"﻿":"​",v=d&&"6"==l.version?"&#65279;":"&#8203;",b=s.domUtils={
NODE_ELEMENT:1,
NODE_DOCUMENT:9,
NODE_TEXT:3,
NODE_COMMENT:8,
NODE_DOCUMENT_FRAGMENT:11,
POSITION_IDENTICAL:0,
POSITION_DISCONNECTED:1,
POSITION_FOLLOWING:2,
POSITION_PRECEDING:4,
POSITION_IS_CONTAINED:8,
POSITION_CONTAINS:16,
fillChar:g,
fillCharEncode:v,
fillCharReg:new RegExp(g,"g"),
keys:{
8:1,
46:1,
16:1,
17:1,
18:1,
37:1,
38:1,
39:1,
40:1,
13:1
},
getPosition:function(e,t){
if(!e||!t)return 1;
if(e===t)return 0;
var n,i=[e],o=[t];
for(n=e;n=n.parentNode;){
if(n===t)return 10;
i.push(n);
}
for(n=t;n=n.parentNode;){
if(n===e)return 20;
o.push(n);
}
if(i.reverse(),o.reverse(),i[0]!==o[0])return 1;
for(var r=-1;r++,i[r]===o[r];);
for(e=i[r],t=o[r];e=e.nextSibling;)if(e===t)return 4;
return 2;
},
createFillcharTextNode:function(e){
return e.createTextNode(g);
},
getNodeIndex:function(e,t){
for(var n=e,i=0;n=n.previousSibling;)t&&3==n.nodeType?n.nodeType!=n.nextSibling.nodeType&&i++:i++;
return i;
},
inDoc:function(e,t){
return 10==b.getPosition(e,t);
},
findParent:function(e,t,n){
if(e&&!b.isBody(e))for(e=n?e:e.parentNode;e;){
if(!t||t(e)||b.isBody(e))return t&&!t(e)&&b.isBody(e)?null:e;
e=e.parentNode;
}
return null;
},
findPreviousSibling:function(e,t,n){
if(e&&!b.isBody(e))for(e=n?e:e.previousSibling;e;){
if(!t||t(e)||b.isBody(e))return t&&!t(e)&&b.isBody(e)?null:e;
e=e.previousSibling;
}
return null;
},
findNextSibling:function(e,t,n){
if(e&&!b.isBody(e))for(e=n?e:e.nextSibling;e;){
if(!t||t(e)||b.isBody(e))return t&&!t(e)&&b.isBody(e)?null:e;
e=e.nextSibling;
}
return null;
},
findParentByTagName:function(e,t,n,i){
return t=u.listToMap(u.isArray(t)?t:[t]),b.findParent(e,function(e){
return t[e.tagName]&&!(i&&i(e));
},n);
},
findParents:function(e,t,n,i){
for(var o=t&&(n&&n(e)||!n)?[e]:[];e=b.findParent(e,n);)o.push(e);
return i?o:o.reverse();
},
insertAfter:function(e,t){
return e&&e.parentNode?e.parentNode.insertBefore(t,e.nextSibling):null;
},
remove:function(e,t){
var n,i=e.parentNode;
if(i){
if(t&&e.hasChildNodes())for(;n=e.firstChild;)i.insertBefore(n,e);
i.removeChild(e);
}
return e;
},
getNextDomNode:function(e,t,i,o){
return n(e,"firstChild","nextSibling",t,i,o);
},
isBookmarkNode:function(e){
return 1==e.nodeType&&e.id&&/^_baidu_bookmark_/i.test(e.id);
},
getWindow:function(e){
var t=e.ownerDocument||e;
return t.defaultView||t.parentWindow;
},
getCommonAncestor:function(e,t){
if(e===t)return e;
for(var n=[e],i=[t],o=e,r=-1;o=o.parentNode;){
if(o===t)return o;
n.push(o);
}
for(o=t;o=o.parentNode;){
if(o===e)return o;
i.push(o);
}
for(n.reverse(),i.reverse();r++,n[r]===i[r];);
return 0==r?null:n[r-1];
},
clearEmptySibling:function(e,t,n){
function i(e,t){
for(var n;e&&!b.isBookmarkNode(e)&&(b.isEmptyInlineElement(e)||!new RegExp("[^	\n\r"+b.fillChar+"]").test(e.nodeValue));)n=e[t],
b.remove(e),e=n;
}
!t&&i(e.nextSibling,"nextSibling"),!n&&i(e.previousSibling,"previousSibling");
},
split:function(e,t){
var n=e.ownerDocument;
if(l.ie&&t==e.nodeValue.length){
var i=n.createTextNode("");
return b.insertAfter(e,i);
}
var o=e.splitText(t);
if(l.ie8){
var r=n.createTextNode("");
b.insertAfter(o,r),b.remove(r);
}
return o;
},
isWhitespace:function(e){
return!new RegExp("[^ 	\n\r"+b.fillChar+"]").test(e.nodeValue);
},
getXY:function(e){
for(var t=0,n=0;e.offsetParent;)n+=e.offsetTop,t+=e.offsetLeft,e=e.offsetParent;
if(0==t&&0==n){
var i=$(e).offset();
t=i.left,n=i.top;
}
return{
x:t,
y:n
};
},
on:function(e,t,n){
var i=u.isArray(t)?t:u.trim(t).split(/\s+/),o=i.length;
if(o)for(;o--;)if(t=i[o],e.addEventListener)e.addEventListener(t,n,!1);else{
n._d||(n._d={
els:[]
});
var r=t+n.toString(),a=u.indexOf(n._d.els,e);
n._d[r]&&-1!=a||(-1==a&&n._d.els.push(e),n._d[r]||(n._d[r]=function(e){
return n.call(e.srcElement,e||window.event);
}),e.attachEvent("on"+t,n._d[r]));
}
e=null;
},
un:function(e,t,n){
var i=u.isArray(t)?t:[t],o=i.length;
if(o)for(;o--;)if(t=i[o],e.removeEventListener)e.removeEventListener(t,n,!1);else{
var r=t+n.toString();
try{
e.detachEvent("on"+t,n._d?n._d[r]:n);
}catch(a){}
if(n._d&&n._d[r]){
var s=u.indexOf(n._d.els,e);
-1!=s&&n._d.els.splice(s,1),0==n._d.els.length&&delete n._d[r];
}
}
},
isSameElement:function(e,t){
if(e.tagName!=t.tagName)return!1;
var n=e.attributes,i=t.attributes;
if(!d&&n.length!=i.length)return!1;
for(var o,r,a=0,s=0,l=0;o=n[l++];){
if("style"==o.nodeName){
if(o.specified&&a++,b.isSameStyle(e,t))continue;
return!1;
}
if(d){
if(!o.specified)continue;
a++,r=i.getNamedItem(o.nodeName);
}else r=t.attributes[o.nodeName];
if(!r.specified||o.nodeValue!=r.nodeValue)return!1;
}
if(d){
for(l=0;r=i[l++];)r.specified&&s++;
if(a!=s)return!1;
}
return!0;
},
isSameStyle:function(e,t){
var n=e.style.cssText.replace(/( ?; ?)/g,";").replace(/( ?: ?)/g,":"),i=t.style.cssText.replace(/( ?; ?)/g,";").replace(/( ?: ?)/g,":");
if(l.opera){
if(n=e.style,i=t.style,n.length!=i.length)return!1;
for(var o in n)if(!/^(\d+|csstext)$/i.test(o)&&n[o]!=i[o])return!1;
return!0;
}
if(!n||!i)return n==i;
if(n=n.split(";"),i=i.split(";"),n.length!=i.length)return!1;
for(var r,a=0;r=n[a++];)if(-1==u.indexOf(i,r))return!1;
return!0;
},
isBlockElm:function(e){
return e?1==e.nodeType&&(m.$block[e.tagName]||styleBlock[b.getComputedStyle(e,"display")])&&!m.$nonChild[e.tagName]:!1;
},
isBlockElm2:function(e){
if(e&&1==e.nodeType){
var t=b.getComputedStyle(e,"display");
return m.$block2[e.tagName]&&!p[t]||styleBlock[t]?!0:!1;
}
return!1;
},
isBody:function(e){
return e&&1==e.nodeType&&"body"==e.tagName.toLowerCase();
},
breakParent:function(e,t){
var n,i,o,r=e,a=e,s=!0,l=!0;
n=e;
for(var d;n&&n!==t&&!(d=this.findPreviousSibling(n,function(e){
return!b.isFillChar(e);
}));)n=n.parentNode;
d||(s=!1);
var c;
for(n=e;n&&n!==t&&!(c=this.findNextSibling(n,function(e){
return!b.isFillChar(e);
}));)n=n.parentNode;
c||(l=!1);
do{
if(r=r.parentNode,s&&(i?(n=r.cloneNode(!1),n.appendChild(i),i=n):(d=this.findPreviousSibling(a,function(e){
return!b.isFillChar(e);
}),d&&(i=r.cloneNode(!1))),i))for(;n=a.previousSibling;)i.insertBefore(n,i.firstChild);
if(l&&(o?(n=r.cloneNode(!1),n.appendChild(o),o=n):(c=this.findNextSibling(a,function(e){
return!b.isFillChar(e);
}),c&&(o=r.cloneNode(!1))),o))for(;n=a.nextSibling;)o.appendChild(n);
a=r;
}while(t!==r);
return n=t.parentNode,i&&n.insertBefore(i,t),n.insertBefore(e,t),o&&n.insertBefore(o,t),
b.remove(t),e;
},
isEmptyInlineElement:function(e){
if(1!=e.nodeType||!m.$removeEmpty[e.tagName])return 0;
for(e=e.firstChild;e;){
if(b.isBookmarkNode(e))return 0;
if(1==e.nodeType&&!b.isEmptyInlineElement(e)||3==e.nodeType&&!b.isWhitespace(e))return 0;
e=e.nextSibling;
}
return 1;
},
trimWhiteTextNode:function(e){
function t(t){
for(var n;(n=e[t])&&3==n.nodeType&&b.isWhitespace(n);)e.removeChild(n);
}
e&&3!=e.nodeType&&(t("firstChild"),t("lastChild"));
},
mergeChild:function(e,t,n){
for(var i,o=b.getElementsByTagName(e,e.tagName.toLowerCase()),r=0;i=o[r++];)if(i.parentNode&&!b.isBookmarkNode(i))if("span"!=i.tagName.toLowerCase())b.isSameElement(e,i)&&b.remove(i,!0);else{
if(e===i.parentNode&&(b.trimWhiteTextNode(e),1==e.childNodes.length)){
e.style.cssText=i.style.cssText+";"+e.style.cssText,b.remove(i,!0);
continue;
}
if(i.style.cssText=e.style.cssText+";"+i.style.cssText,n){
var a=n.style;
if(a){
a=a.split(";");
for(var s,l=0;s=a[l++];)i.style[u.cssStyleToDomStyle(s.split(":")[0])]=s.split(":")[1];
}
}
b.isSameStyle(i,e)&&b.remove(i,!0);
}
},
getElementsByTagName:function(e,t,n){
if(!e)return[];
if(n&&u.isString(n)){
var i=n;
n=function(e){
return b.hasClass(e,i);
};
}
t=u.trim(t).replace(/[ ]{2,}/g," ").split(" ");
for(var o,r=[],a=0;o=t[a++];)for(var s,l=e.getElementsByTagName(o),d=0;s=l[d++];)(!n||n(s))&&r.push(s);
return r;
},
mergeToParent:function(e){
for(var t=e.parentNode;t&&m.$removeEmpty[t.tagName];){
if(t.tagName==e.tagName||"A"==t.tagName){
if(b.trimWhiteTextNode(t),"SPAN"==t.tagName&&!b.isSameStyle(t,e)||"A"==t.tagName&&"SPAN"==e.tagName){
if(t.childNodes.length>1||t!==e.parentNode){
e.style.cssText=t.style.cssText+";"+e.style.cssText,t=t.parentNode;
continue;
}
t.style.cssText+=";"+e.style.cssText,"A"==t.tagName&&(t.style.textDecoration="underline");
}
if("A"!=t.tagName){
t===e.parentNode&&b.remove(e,!0);
break;
}
}
t=t.parentNode;
}
},
mergeSibling:function(e,t,n){
function i(e,t,n){
var i;
if((i=n[e])&&!b.isBookmarkNode(i)&&1==i.nodeType&&b.isSameElement(n,i)){
for(;i.firstChild;)"firstChild"==t?n.insertBefore(i.lastChild,n.firstChild):n.appendChild(i.firstChild);
b.remove(i);
}
}
!t&&i("previousSibling","firstChild",e),!n&&i("nextSibling","lastChild",e);
},
unSelectable:d&&l.ie9below||l.opera?function(e){
e.onselectstart=function(){
return!1;
},e.onclick=e.onkeyup=e.onkeydown=function(){
return!1;
},e.unselectable="on",e.setAttribute("unselectable","on");
for(var t,n=0;t=e.all[n++];)switch(t.tagName.toLowerCase()){
case"iframe":
case"textarea":
case"input":
case"select":
break;

default:
t.unselectable="on",e.setAttribute("unselectable","on");
}
}:function(e){
e.style.MozUserSelect=e.style.webkitUserSelect=e.style.KhtmlUserSelect="none";
},
removeAttributes:function(e,t){
t=u.isArray(t)?t:u.trim(t).replace(/[ ]{2,}/g," ").split(" ");
for(var n,i=0;n=t[i++];){
switch(n=h[n]||n){
case"className":
e[n]="";
break;

case"style":
e.style.cssText="",!l.ie&&!!e.getAttributeNode("style")&&e.removeAttributeNode(e.getAttributeNode("style"));
}
e.removeAttribute(n);
}
},
createElement:function(e,t,n){
return b.setAttributes(e.createElement(t),n);
},
setAttributes:function(e,t){
for(var n in t)if(t.hasOwnProperty(n)){
var i=t[n];
switch(n){
case"class":
e.className=i;
break;

case"style":
e.style.cssText=e.style.cssText+";"+i;
break;

case"innerHTML":
e[n]=i;
break;

case"value":
e.value=i;
break;

default:
e.setAttribute(h[n]||n,i);
}
}
return e;
},
getComputedStyle:function(e,t){
var n="width height top left";
if(n.indexOf(t)>-1)return e["offset"+t.replace(/^\w/,function(e){
return e.toUpperCase();
})]+"px";
if(3==e.nodeType&&(e=e.parentNode),l.ie&&l.version<9&&"font-size"==t&&!e.style.fontSize&&!m.$empty[e.tagName]&&!m.$nonChild[e.tagName]){
var i=e.ownerDocument.createElement("span");
i.style.cssText="padding:0;border:0;font-family:simsun;",i.innerHTML=".",e.appendChild(i);
var o=i.offsetHeight;
return e.removeChild(i),i=null,o+"px";
}
try{
var r=b.getStyle(e,t)||(window.getComputedStyle?b.getWindow(e).getComputedStyle(e,"").getPropertyValue(t):(e.currentStyle||e.style)[u.cssStyleToDomStyle(t)]);
}catch(a){
return"";
}
return u.transUnitToPx(u.fixColor(t,r));
},
removeClasses:function(e,t){
t=u.isArray(t)?t:u.trim(t).replace(/[ ]{2,}/g," ").split(" ");
for(var n,i=0,o=e.className;n=t[i++];)o=o.replace(new RegExp("\\b"+n+"\\b"),"");
o=u.trim(o).replace(/[ ]{2,}/g," "),o?e.className=o:b.removeAttributes(e,["class"]);
},
addClass:function(e,t){
if(e){
t=u.trim(t).replace(/[ ]{2,}/g," ").split(" ");
for(var n,i=0,o=e.className;n=t[i++];)new RegExp("\\b"+n+"\\b").test(o)||(e.className+=" "+n);
}
},
hasClass:function(e,t){
if(!e)return!1;
if(u.isRegExp(t))return t.test(e.className);
t=u.trim(t).replace(/[ ]{2,}/g," ").split(" ");
for(var n,i=0,o=e.className;n=t[i++];)if(!new RegExp("\\b"+n+"\\b","i").test(o))return!1;
return i-1==t.length;
},
preventDefault:function(e){
e.preventDefault?e.preventDefault():e.returnValue=!1;
},
removeStyle:function(e,t){
l.ie?("color"==t&&(t="(^|;)"+t),e.style.cssText=e.style.cssText.replace(new RegExp(t+"[^:]*:[^;]+;?","ig"),"")):e.style.removeProperty?e.style.removeProperty(t):e.style.removeAttribute(u.cssStyleToDomStyle(t)),
e.style.cssText||b.removeAttributes(e,["style"]);
},
getStyle:function(e,t){
var n=e.style[u.cssStyleToDomStyle(t)];
return u.fixColor(t,n);
},
setStyle:function(e,t,n){
e.style[u.cssStyleToDomStyle(t)]=n,u.trim(e.style.cssText)||this.removeAttributes(e,"style");
},
setStyles:function(e,t){
for(var n in t)t.hasOwnProperty(n)&&b.setStyle(e,n,t[n]);
},
removeDirtyAttr:function(e){
for(var t,n=0,i=e.getElementsByTagName("*");t=i[n++];)t.removeAttribute("_moz_dirty");
e.removeAttribute("_moz_dirty");
},
getChildCount:function(e,t){
var n=0,i=e.firstChild;
for(t=t||function(){
return 1;
};i;)t(i)&&n++,i=i.nextSibling;
return n;
},
isEmptyNode:function(e){
return!e.firstChild||0==b.getChildCount(e,function(e){
return!b.isBr(e)&&!b.isBookmarkNode(e)&&!b.isWhitespace(e);
});
},
clearSelectedArr:function(e){
for(var t;t=e.pop();)b.removeAttributes(t,["class"]);
},
scrollToView:function(e,t,n){
var i=function(){
var e=t.document,n="CSS1Compat"==e.compatMode;
return{
width:(n?e.documentElement.clientWidth:e.body.clientWidth)||0,
height:(n?e.documentElement.clientHeight:e.body.clientHeight)||0
};
},o=function(e){
if("pageXOffset"in e)return{
x:e.pageXOffset||0,
y:e.pageYOffset||0
};
var t=e.document;
return{
x:t.documentElement.scrollLeft||t.body.scrollLeft||0,
y:t.documentElement.scrollTop||t.body.scrollTop||0
};
},r=i().height,a=-1*r+n;
a+=e.offsetHeight||0;
var s=b.getXY(e);
a+=s.y;
var l=o(t).y;
(a>l||l-r>a)&&t.scrollTo(0,a+(0>a?-20:20));
},
isBr:function(e){
return 1==e.nodeType&&"BR"==e.tagName;
},
isFillChar:function(e,t){
return 3==e.nodeType&&!e.nodeValue.replace(new RegExp((t?"^":"")+b.fillChar),"").length;
},
isStartInblock:function(e){
var t,n=e.cloneRange(),i=0,o=n.startContainer;
if(1==o.nodeType&&o.childNodes[n.startOffset]){
o=o.childNodes[n.startOffset];
for(var r=o.previousSibling;r&&b.isFillChar(r);)o=r,r=r.previousSibling;
}
for(this.isFillChar(o,!0)&&1==n.startOffset&&(n.setStartBefore(o),o=n.startContainer);o&&b.isFillChar(o);)t=o,
o=o.previousSibling;
for(t&&(n.setStartBefore(t),o=n.startContainer),1==o.nodeType&&b.isEmptyNode(o)&&1==n.startOffset&&n.setStart(o,0).collapse(!0);!n.startOffset;){
if(o=n.startContainer,b.isBlockElm(o)||b.isBody(o)){
i=1;
break;
}
var a,r=n.startContainer.previousSibling;
if(r){
for(;r&&b.isFillChar(r);)a=r,r=r.previousSibling;
n.setStartBefore(a?a:n.startContainer);
}else n.setStartBefore(n.startContainer);
}
return i&&!b.isBody(n.startContainer)?1:0;
},
isEmptyBlock:function(e,t){
if(!e)return 0;
if(1!=e.nodeType)return 0;
if(t=t||new RegExp("[ 	\r\n"+b.fillChar+"]","g"),e[l.ie?"innerText":"textContent"].replace(t,"").length>0)return 0;
for(var n in m.$isNotEmpty)if(e.getElementsByTagName(n).length)return 0;
return 1;
},
setViewportOffset:function(e,t){
var n=0|parseInt(e.style.left),i=0|parseInt(e.style.top),o=e.getBoundingClientRect(),r=t.left-o.left,a=t.top-o.top;
r&&(e.style.left=n+r+"px"),a&&(e.style.top=i+a+"px");
},
fillNode:function(e,t){
var n=l.ie?e.createTextNode(b.fillChar):e.createElement("br");
t.innerHTML="",t.appendChild(n);
},
moveChild:function(e,t,n){
for(;e.firstChild;)n&&t.firstChild?t.insertBefore(e.lastChild,t.firstChild):t.appendChild(e.firstChild);
},
hasNoAttributes:function(e){
return l.ie?/^<\w+\s*?>/.test(e.outerHTML):0==e.attributes.length;
},
isCustomeNode:function(e){
return 1==e.nodeType&&e.getAttribute("_ue_custom_node_");
},
isTagNode:function(e,t){
return 1==e.nodeType&&new RegExp("^"+e.tagName+"$","i").test(t);
},
filterNodeList:function(e,t,n){
var i=[];
if(!u.isFunction(t)){
var o=t;
t=function(e){
return-1!=u.indexOf(u.isArray(o)?o:o.split(" "),e.tagName.toLowerCase());
};
}
return u.each(e,function(e){
t(e)&&i.push(e);
}),0==i.length?null:1!=i.length&&n?i:i[0];
},
isInNodeEndBoundary:function(e,t){
var n=e.startContainer;
if(3==n.nodeType&&e.startOffset!=n.nodeValue.length)return 0;
if(1==n.nodeType&&e.startOffset!=n.childNodes.length)return 0;
for(;n!==t;){
if(n.nextSibling)return 0;
n=n.parentNode;
}
return 1;
},
isBoundaryNode:function(e,t){
for(var n;!b.isBody(e);)if(n=e,e=e.parentNode,n!==e[t])return!1;
return!0;
},
fillHtml:l.ie11below?g:"<br/>"
},y=b.fillCharReg;
!function(){
function e(e){
e.collapsed=e.startContainer&&e.endContainer&&e.startContainer===e.endContainer&&e.startOffset==e.endOffset;
}
function t(e){
return!e.collapsed&&1==e.startContainer.nodeType&&e.startContainer===e.endContainer&&e.endOffset-e.startOffset==1;
}
function n(t,n,i,o){
if(!n)return o;
try{
1==n.nodeType&&(m.$empty[n.tagName]||m.$nonChild[n.tagName])&&(i=b.getNodeIndex(n)+(t?0:1),
n=n.parentNode),t?(o.startContainer=n,o.startOffset=i,o.endContainer||o.collapse(!0)):(o.endContainer=n,
o.endOffset=i,o.startContainer||o.collapse(!1)),e(o);
}catch(r){}
return o;
}
function i(e,t){
var n,i,o=e.startContainer,r=e.endContainer,a=e.startOffset,s=e.endOffset,l=e.document,d=l.createDocumentFragment();
if(1==o.nodeType&&(o=o.childNodes[a]||(n=o.appendChild(l.createTextNode("")))),1==r.nodeType&&(r=r.childNodes[s]||(i=r.appendChild(l.createTextNode("")))),
o===r&&3==o.nodeType)return d.appendChild(l.createTextNode(o.substringData(a,s-a))),
t&&(o.deleteData(a,s-a),e.collapse(!0)),d;
for(var c,u,f=d,m=b.findParents(o,!0),h=b.findParents(r,!0),p=0;m[p]==h[p];)p++;
for(var g,v=p;g=m[v];v++){
for(c=g.nextSibling,g==o?n||(3==e.startContainer.nodeType?(f.appendChild(l.createTextNode(o.nodeValue.slice(a))),
t&&o.deleteData(a,o.nodeValue.length-a)):f.appendChild(t?o:o.cloneNode(!0))):(u=g.cloneNode(!1),
f.appendChild(u));c&&c!==r&&c!==h[v];)g=c.nextSibling,f.appendChild(t?c:c.cloneNode(!0)),
c=g;
f=u;
}
f=d,m[p]||(f.appendChild(m[p-1].cloneNode(!1)),f=f.firstChild);
for(var y,v=p;y=h[v];v++){
if(c=y.previousSibling,y==r?i||3!=e.endContainer.nodeType||(f.appendChild(l.createTextNode(r.substringData(0,s))),
t&&r.deleteData(0,s)):(u=y.cloneNode(!1),f.appendChild(u)),v!=p||!m[p])for(;c&&c!==o;)y=c.previousSibling,
f.insertBefore(t?c:c.cloneNode(!0),f.firstChild),c=y;
f=u;
}
return t&&e.setStartBefore(h[p]?m[p]?h[p]:m[p-1]:h[p-1]).collapse(!0),n&&b.remove(n),
i&&b.remove(i),d;
}
function o(e,t){
try{
if(a&&b.inDoc(a,e))if(a.nodeValue.replace(y,"").length)a.nodeValue=a.nodeValue.replace(y,"");else{
var n=a.parentNode;
for(b.remove(a);n&&b.isEmptyInlineElement(n)&&(l.safari?!(b.getPosition(n,t)&b.POSITION_CONTAINS):!n.contains(t));)a=n.parentNode,
b.remove(n),n=a;
}
}catch(i){}
}
function r(e,t){
var n;
for(e=e[t];e&&b.isFillChar(e);)n=e[t],b.remove(e),e=n;
}
var a,d=0,c=b.fillChar,f=s.Range=function(e){
var t=this;
t.startContainer=t.startOffset=t.endContainer=t.endOffset=null,t.document=e,t.collapsed=!0;
};
f.prototype={
cloneContents:function(){
return this.collapsed?null:i(this,0);
},
deleteContents:function(){
var e;
return this.collapsed||i(this,1),l.webkit&&(e=this.startContainer,3!=e.nodeType||e.nodeValue.length||(this.setStartBefore(e).collapse(!0),
b.remove(e))),this;
},
extractContents:function(){
return this.collapsed?null:i(this,2);
},
setStart:function(e,t){
return n(!0,e,t,this);
},
setEnd:function(e,t){
return n(!1,e,t,this);
},
setStartAfter:function(e){
return this.setStart(e.parentNode,b.getNodeIndex(e)+1);
},
setStartBefore:function(e){
return this.setStart(e.parentNode,b.getNodeIndex(e));
},
setEndAfter:function(e){
return this.setEnd(e.parentNode,b.getNodeIndex(e)+1);
},
setEndBefore:function(e){
return this.setEnd(e.parentNode,b.getNodeIndex(e));
},
setStartAtFirst:function(e){
return this.setStart(e,0);
},
setStartAtLast:function(e){
return this.setStart(e,3==e.nodeType?e.nodeValue.length:e.childNodes.length);
},
setEndAtFirst:function(e){
return this.setEnd(e,0);
},
setEndAtLast:function(e){
return this.setEnd(e,3==e.nodeType?e.nodeValue.length:e.childNodes.length);
},
selectNode:function(e){
return this.setStartBefore(e).setEndAfter(e);
},
selectNodeContents:function(e){
return this.setStart(e,0).setEndAtLast(e);
},
cloneRange:function(){
var e=this;
return new f(e.document).setStart(e.startContainer,e.startOffset).setEnd(e.endContainer,e.endOffset);
},
collapse:function(e){
var t=this;
return e?(t.endContainer=t.startContainer,t.endOffset=t.startOffset):(t.startContainer=t.endContainer,
t.startOffset=t.endOffset),t.collapsed=!0,t;
},
shrinkBoundary:function(e){
function t(e){
return 1==e.nodeType&&!b.isBookmarkNode(e)&&!m.$empty[e.tagName]&&!m.$nonChild[e.tagName];
}
for(var n,i=this,o=i.collapsed;1==i.startContainer.nodeType&&(n=i.startContainer.childNodes[i.startOffset])&&t(n);)i.setStart(n,0);
if(o)return i.collapse(!0);
if(!e)for(;1==i.endContainer.nodeType&&i.endOffset>0&&(n=i.endContainer.childNodes[i.endOffset-1])&&t(n);)i.setEnd(n,n.childNodes.length);
return i;
},
getCommonAncestor:function(e,n){
var i=this,o=i.startContainer,r=i.endContainer;
return o===r?e&&t(this)&&(o=o.childNodes[i.startOffset],1==o.nodeType)?o:n&&3==o.nodeType?o.parentNode:o:b.getCommonAncestor(o,r);
},
trimBoundary:function(e){
this.txtToElmBoundary();
var t=this.startContainer,n=this.startOffset,i=this.collapsed,o=this.endContainer;
if(3==t.nodeType){
if(0==n)this.setStartBefore(t);else if(n>=t.nodeValue.length)this.setStartAfter(t);else{
var r=b.split(t,n);
t===o?this.setEnd(r,this.endOffset-n):t.parentNode===o&&(this.endOffset+=1),this.setStartBefore(r);
}
if(i)return this.collapse(!0);
}
return e||(n=this.endOffset,o=this.endContainer,3==o.nodeType&&(0==n?this.setEndBefore(o):(n<o.nodeValue.length&&b.split(o,n),
this.setEndAfter(o)))),this;
},
txtToElmBoundary:function(e){
function t(e,t){
var n=e[t+"Container"],i=e[t+"Offset"];
3==n.nodeType&&(i?i>=n.nodeValue.length&&e["set"+t.replace(/(\w)/,function(e){
return e.toUpperCase();
})+"After"](n):e["set"+t.replace(/(\w)/,function(e){
return e.toUpperCase();
})+"Before"](n));
}
return(e||!this.collapsed)&&(t(this,"start"),t(this,"end")),this;
},
insertNode:function(e){
var t=e,n=1;
11==e.nodeType&&(t=e.firstChild,n=e.childNodes.length),this.trimBoundary(!0);
var i=this.startContainer,o=this.startOffset,r=i.childNodes[o];
return r?i.insertBefore(e,r):i.appendChild(e),t.parentNode===this.endContainer&&(this.endOffset=this.endOffset+n),
this.setStartBefore(t);
},
setCursor:function(e,t){
return this.collapse(!e).select(t);
},
createBookmark:function(e,t){
var n,i=this.document.createElement("span");
return i.style.cssText="display:none;line-height:0px;",i.appendChild(this.document.createTextNode("‍")),
i.id="_baidu_bookmark_start_"+(t?"":d++),this.collapsed||(n=i.cloneNode(!0),n.id="_baidu_bookmark_end_"+(t?"":d++)),
this.insertNode(i),n&&this.collapse().insertNode(n).setEndBefore(n),this.setStartAfter(i),
{
start:e?i.id:i,
end:n?e?n.id:n:null,
id:e
};
},
moveToBookmark:function(e){
var t=e.id?this.document.getElementById(e.start):e.start,n=e.end&&e.id?this.document.getElementById(e.end):e.end;
return this.setStartBefore(t),b.remove(t),n?(this.setEndBefore(n),b.remove(n)):this.collapse(!0),
this;
},
enlarge:function(e,t){
var n,i,o=b.isBody,r=this.document.createTextNode("");
if(e){
for(i=this.startContainer,1==i.nodeType?i.childNodes[this.startOffset]?n=i=i.childNodes[this.startOffset]:(i.appendChild(r),
n=i=r):n=i;;){
if(b.isBlockElm(i)){
for(i=n;(n=i.previousSibling)&&!b.isBlockElm(n);)i=n;
this.setStartBefore(i);
break;
}
n=i,i=i.parentNode;
}
for(i=this.endContainer,1==i.nodeType?((n=i.childNodes[this.endOffset])?i.insertBefore(r,n):i.appendChild(r),
n=i=r):n=i;;){
if(b.isBlockElm(i)){
for(i=n;(n=i.nextSibling)&&!b.isBlockElm(n);)i=n;
this.setEndAfter(i);
break;
}
n=i,i=i.parentNode;
}
r.parentNode===this.endContainer&&this.endOffset--,b.remove(r);
}
if(!this.collapsed){
for(;!(0!=this.startOffset||t&&t(this.startContainer)||o(this.startContainer));)this.setStartBefore(this.startContainer);
for(;!(this.endOffset!=(1==this.endContainer.nodeType?this.endContainer.childNodes.length:this.endContainer.nodeValue.length)||t&&t(this.endContainer)||o(this.endContainer));)this.setEndAfter(this.endContainer);
}
return this;
},
adjustmentBoundary:function(){
if(!this.collapsed){
for(;!b.isBody(this.startContainer)&&this.startOffset==this.startContainer[3==this.startContainer.nodeType?"nodeValue":"childNodes"].length&&this.startContainer[3==this.startContainer.nodeType?"nodeValue":"childNodes"].length;)this.setStartAfter(this.startContainer);
for(;!b.isBody(this.endContainer)&&!this.endOffset&&this.endContainer[3==this.endContainer.nodeType?"nodeValue":"childNodes"].length;)this.setEndBefore(this.endContainer);
}
return this;
},
applyInlineStyle:function(e,t,n){
if(!e)return this;
if(this.collapsed)return this;
this.trimBoundary().enlarge(!1,function(e){
return 1==e.nodeType&&b.isBlockElm(e);
}).adjustmentBoundary();
for(var i,o,r=this.createBookmark(),a=r.end,s=function(e){
return 1==e.nodeType?"br"!=e.tagName.toLowerCase():!b.isWhitespace(e);
},l=b.getNextDomNode(r.start,!1,s),d=this.cloneRange();l&&b.getPosition(l,a)&b.POSITION_PRECEDING;)if(3==l.nodeType||m[e]&&m[e][l.tagName]){
for(d.setStartBefore(l),i=l;i&&(3==i.nodeType||m[e]&&m[e][i.tagName])&&i!==a;)o=i,
i=b.getNextDomNode(i,1==i.nodeType,null,function(t){
return m[e][t.tagName];
});
var c,u=d.setEndAfter(o).extractContents();
if(n&&n.length>0){
var f,h;
h=f=n[0].cloneNode(!1);
for(var p,g=1;p=n[g++];)f.appendChild(p.cloneNode(!1)),f=f.firstChild;
c=f;
}else c=d.document.createElement(e);
t&&b.setAttributes(c,t),c.appendChild(u),d.insertNode(n?h:c);
var v;
if("span"==e&&t.style&&/text\-decoration/.test(t.style)&&(v=b.findParentByTagName(c,"a",!0))?(b.setAttributes(v,t),
b.remove(c,!0),c=v):(b.mergeSibling(c),b.clearEmptySibling(c)),b.mergeChild(c,t),
l=b.getNextDomNode(c,!1,s),b.mergeToParent(c),i===a)break;
}else l=b.getNextDomNode(l,!0,s);
return this.moveToBookmark(r);
},
removeInlineStyle:function(e){
if(this.collapsed)return this;
e=u.isArray(e)?e:[e],this.shrinkBoundary().adjustmentBoundary();
for(var t=this.startContainer,n=this.endContainer;;){
if(1==t.nodeType){
if(u.indexOf(e,t.tagName.toLowerCase())>-1)break;
if("body"==t.tagName.toLowerCase()){
t=null;
break;
}
}
t=t.parentNode;
}
for(;;){
if(1==n.nodeType){
if(u.indexOf(e,n.tagName.toLowerCase())>-1)break;
if("body"==n.tagName.toLowerCase()){
n=null;
break;
}
}
n=n.parentNode;
}
var i,o,r=this.createBookmark();
t&&(o=this.cloneRange().setEndBefore(r.start).setStartBefore(t),i=o.extractContents(),
o.insertNode(i),b.clearEmptySibling(t,!0),t.parentNode.insertBefore(r.start,t)),
n&&(o=this.cloneRange().setStartAfter(r.end).setEndAfter(n),i=o.extractContents(),
o.insertNode(i),b.clearEmptySibling(n,!1,!0),n.parentNode.insertBefore(r.end,n.nextSibling));
for(var a,s=b.getNextDomNode(r.start,!1,function(e){
return 1==e.nodeType;
});s&&s!==r.end;)a=b.getNextDomNode(s,!0,function(e){
return 1==e.nodeType;
}),u.indexOf(e,s.tagName.toLowerCase())>-1&&b.remove(s,!0),s=a;
return this.moveToBookmark(r);
},
getClosedNode:function(){
var e;
if(!this.collapsed){
var n=this.cloneRange().adjustmentBoundary().shrinkBoundary();
if(t(n)){
var i=n.startContainer.childNodes[n.startOffset];
i&&1==i.nodeType&&(m.$empty[i.tagName]||m.$nonChild[i.tagName])&&(e=i);
}
}
return e;
},
select:l.ie?function(e,t){
var n;
this.collapsed||this.shrinkBoundary();
var i=this.getClosedNode();
if(i&&!t){
try{
n=this.document.body.createControlRange(),n.addElement(i),n.select();
}catch(s){}
return this;
}
var l,d=this.createBookmark(),u=d.start;
if(n=this.document.body.createTextRange(),n.moveToElementText(u),n.moveStart("character",1),
this.collapsed){
if(!e&&3!=this.startContainer.nodeType){
var f=this.document.createTextNode(c),m=this.document.createElement("span");
m.appendChild(this.document.createTextNode(c)),u.parentNode.insertBefore(m,u),u.parentNode.insertBefore(f,u),
o(this.document,f),a=f,r(m,"previousSibling"),r(u,"nextSibling"),n.moveStart("character",-1),
n.collapse(!0);
}
}else{
var h=this.document.body.createTextRange();
l=d.end,h.moveToElementText(l),n.setEndPoint("EndToEnd",h);
}
this.moveToBookmark(d),m&&b.remove(m);
try{
n.select();
}catch(s){}
return this;
}:function(e){
function t(e){
function t(t,n,i){
3==t.nodeType&&t.nodeValue.length<n&&(e[i+"Offset"]=t.nodeValue.length);
}
t(e.startContainer,e.startOffset,"start"),t(e.endContainer,e.endOffset,"end");
}
var n,i=b.getWindow(this.document),s=i.getSelection();
if(l.gecko?this.document.body.focus():i.focus(),s){
if(s.removeAllRanges(),!this.startContainer)return;
if(this.collapsed&&!e){
var d=this.startContainer,u=d;
1==d.nodeType&&(u=d.childNodes[this.startOffset]),3==d.nodeType&&this.startOffset||(u?u.previousSibling&&3==u.previousSibling.nodeType:d.lastChild&&3==d.lastChild.nodeType)||(n=this.document.createTextNode(c),
this.insertNode(n),o(this.document,n),r(n,"previousSibling"),r(n,"nextSibling"),
a=n,this.setStart(n,l.webkit?1:0).collapse(!0));
}
var f=this.document.createRange();
if(this.collapsed&&l.opera&&1==this.startContainer.nodeType){
var u=this.startContainer.childNodes[this.startOffset];
if(u){
for(;u&&b.isBlockElm(u)&&1==u.nodeType&&u.childNodes[0];)u=u.childNodes[0];
u&&this.setStartBefore(u).collapse(!0);
}else u=this.startContainer.lastChild,u&&b.isBr(u)&&this.setStartBefore(u).collapse(!0);
}
if(t(this),!b.isBody(this.startContainer)){
for(var m=this.startContainer.parentElement,h=!1;m;){
if(m===this.document.body){
h=!0;
break;
}
m=m.parentElement;
}
if(!h)return;
}
try{
f.setStart(this.startContainer,this.startOffset),f.setEnd(this.endContainer,this.endOffset),
s.addRange(f);
}catch(p){}
}
return this;
},
scrollToView:function(e,t){
e=e?window:b.getWindow(this.document);
var n=this,i=n.document.createElement("span");
return i.innerHTML="&nbsp;",n.cloneRange().insertNode(i),b.scrollToView(i,e,t),b.remove(i),
n;
},
inFillChar:function(){
var e=this.startContainer;
return this.collapsed&&3==e.nodeType&&e.nodeValue.replace(new RegExp("^"+b.fillChar),"").length+1==e.nodeValue.length?!0:!1;
},
createDomAddress:function(e,t){
function n(e){
for(var t,n=b.findParents(e,!0,function(e){
return!b.isBody(e);
}),i=[],o=0;t=n[o++];)i.push(t.nodeName.toUpperCase());
return i;
}
var i={},o=this;
if(!o.startContainer||!e&&!o.endContainer)return null;
var r=this.createAddress(e,t);
return r.startAddress&&(i.startAddress={
index:r.startAddress,
name:n(o.startContainer)
}),r.endAddress&&(i.endAddress={
index:r.endAddress,
name:n(o.endContainer)
}),i;
},
moveToDomAddress:function(e,t){
function n(e,t){
for(var n,o,r,a=i.document.body,s=0,l=e.index.length;l>s;s++){
if(r=e.index[s],n=a,a=a.childNodes[r],!a){
o=r;
break;
}
if("undefined"!=typeof e.name[s]&&a.nodeName.toUpperCase()!=e.name[s]){
a=null,o=r;
break;
}
}
t?a?i.setStartBefore(a):i.setStart(n,o):a?i.setEndBefore(a):i.setEnd(n,o);
}
var i=this;
return n(e.startAddress,!0),!t&&e.endAddress&&n(e.endAddress),i;
},
createAddress:function(e,t){
function n(e){
for(var n,i=e?o.startContainer:o.endContainer,r=b.findParents(i,!0,function(e){
return!b.isBody(e);
}),a=[],s=0;n=r[s++];)a.push(b.getNodeIndex(n,t));
var l=0;
if(t)if(3==i.nodeType){
for(var d=i.previousSibling;d&&3==d.nodeType;)l+=d.nodeValue.replace(y,"").length,
d=d.previousSibling;
l+=e?o.startOffset:o.endOffset;
}else if(i=i.childNodes[e?o.startOffset:o.endOffset])l=b.getNodeIndex(i,t);else{
i=e?o.startContainer:o.endContainer;
for(var c=i.firstChild;c;)if(b.isFillChar(c))c=c.nextSibling;else if(l++,3==c.nodeType)for(;c&&3==c.nodeType;)c=c.nextSibling;else c=c.nextSibling;
}else l=e?b.isFillChar(i)?0:o.startOffset:o.endOffset;
return 0>l&&(l=0),a.push(l),a;
}
var i={},o=this;
return i.startAddress=n(!0),e||(i.endAddress=o.collapsed?[].concat(i.startAddress):n()),
i;
},
moveToAddress:function(e,t){
function n(e,t){
for(var n,o,r,a=i.document.body,s=0,l=e.length;l>s;s++)if(r=e[s],n=a,a=a.childNodes[r],
!a){
o=r;
break;
}
t?a?i.setStartBefore(a):i.setStart(n,o):a?i.setEndBefore(a):i.setEnd(n,o);
}
var i=this;
return n(e.startAddress,!0),!t&&e.endAddress&&n(e.endAddress),i;
},
equals:function(e){
for(var t in this)if(this.hasOwnProperty(t)&&this[t]!==e[t])return!1;
return!0;
},
traversal:function(e,t){
if(this.collapsed)return this;
for(var n=this.createBookmark(),i=n.end,o=b.getNextDomNode(n.start,!1,t);o&&o!==i&&b.getPosition(o,i)&b.POSITION_PRECEDING;){
var r=b.getNextDomNode(o,!1,t);
e(o),o=r;
}
return this.moveToBookmark(n);
}
};
}(),function(){
function e(e,t){
var n=b.getNodeIndex;
e=e.duplicate(),e.collapse(t);
var i=e.parentElement();
if(!i.hasChildNodes())return{
container:i,
offset:0
};
for(var o,r,a=i.children,s=e.duplicate(),l=0,d=a.length-1,c=-1;d>=l;){
c=Math.floor((l+d)/2),o=a[c],s.moveToElementText(o);
var u=s.compareEndPoints("StartToStart",e);
if(u>0)d=c-1;else{
if(!(0>u))return{
container:i,
offset:n(o)
};
l=c+1;
}
}
if(-1==c){
if(s.moveToElementText(i),s.setEndPoint("StartToStart",e),r=s.text.replace(/(\r\n|\r)/g,"\n").length,
a=i.childNodes,!r)return o=a[a.length-1],{
container:o,
offset:o.nodeValue.length
};
for(var f=a.length;r>0;)r-=a[--f].nodeValue.length;
return{
container:a[f],
offset:-r
};
}
if(s.collapse(u>0),s.setEndPoint(u>0?"StartToStart":"EndToStart",e),r=s.text.replace(/(\r\n|\r)/g,"\n").length,
!r)return m.$empty[o.tagName]||m.$nonChild[o.tagName]?{
container:i,
offset:n(o)+(u>0?0:1)
}:{
container:o,
offset:u>0?0:o.childNodes.length
};
for(;r>0;)try{
var h=o;
o=o[u>0?"previousSibling":"nextSibling"],r-=o.nodeValue.length;
}catch(p){
return{
container:i,
offset:n(h)
};
}
return{
container:o,
offset:u>0?-r:o.nodeValue.length+r
};
}
function t(t,n){
if(t.item)n.selectNode(t.item(0));else{
var i=e(t,!0);
n.setStart(i.container,i.offset),0!=t.compareEndPoints("StartToEnd",t)&&(i=e(t,!1),
n.setEnd(i.container,i.offset));
}
return n;
}
function n(e){
var t;
try{
t=e.getNative().createRange();
}catch(n){
return null;
}
var i=t.item?t.item(0):t.parentElement();
return(i.ownerDocument||i)===e.document?t:null;
}
var i=s.Selection=function(e){
var t,i=this;
i.document=e,l.ie9below&&(t=b.getWindow(e).frameElement,b.on(t,"beforedeactivate",function(){
i._bakIERange=i.getIERange();
}),b.on(t,"activate",function(){
try{
!n(i)&&i._bakIERange&&i._bakIERange.select();
}catch(e){}
i._bakIERange=null;
})),t=e=null;
};
i.prototype={
rangeInBody:function(e,t){
var n=l.ie9below||t?e.item?e.item():e.parentElement():e.startContainer;
return n===this.document.body||b.inDoc(n,this.document);
},
getNative:function(){
var e=this.document;
try{
return e?l.ie9below?e.selection:b.getWindow(e).getSelection():null;
}catch(t){
return null;
}
},
getIERange:function(){
var e=n(this);
return!e&&this._bakIERange?this._bakIERange:e;
},
cache:function(){
this.clear(),this._cachedRange=this.getRange(),this._cachedStartElement=this.getStart(),
this._cachedStartElementPath=this.getStartElementPath();
},
getStartElementPath:function(){
if(this._cachedStartElementPath)return this._cachedStartElementPath;
var e=this.getStart();
return e?b.findParents(e,!0,null,!0):[];
},
clear:function(){
this._cachedStartElementPath=this._cachedRange=this._cachedStartElement=null;
},
isFocus:function(){
try{
if(l.ie9below){
var e=n(this);
return!(!e||!this.rangeInBody(e));
}
return!!this.getNative().rangeCount;
}catch(t){
return!1;
}
},
getRange:function(){
function e(e){
for(var t=n.document.body.firstChild,i=e.collapsed;t&&t.firstChild;)e.setStart(t,0),
t=t.firstChild;
e.startContainer||e.setStart(n.document.body,0),i&&e.collapse(!0);
}
var n=this;
if(null!=n._cachedRange)return this._cachedRange;
var i=new a.editor.dom.Range(n.document);
if(l.ie9below){
var o=n.getIERange();
if(o)try{
t(o,i);
}catch(r){
e(i);
}else e(i);
}else{
var s=n.getNative();
if(s&&s.rangeCount){
var d=s.getRangeAt(0),c=s.getRangeAt(s.rangeCount-1);
i.setStart(d.startContainer,d.startOffset).setEnd(c.endContainer,c.endOffset),i.collapsed&&b.isBody(i.startContainer)&&!i.startOffset&&e(i);
}else{
if(this._bakRange&&b.inDoc(this._bakRange.startContainer,this.document))return this._bakRange;
e(i);
}
}
return this._bakRange=i;
},
getStart:function(){
if(this._cachedStartElement)return this._cachedStartElement;
var e,t,n,i,o=l.ie9below?this.getIERange():this.getRange();
if(l.ie9below){
if(!o)return this.document.body.firstChild;
if(o.item)return o.item(0);
for(e=o.duplicate(),e.text.length>0&&e.moveStart("character",1),e.collapse(1),t=e.parentElement(),
i=n=o.parentElement();n=n.parentNode;)if(n==t){
t=i;
break;
}
}else if(o.shrinkBoundary(),t=o.startContainer,1==t.nodeType&&t.hasChildNodes()&&(t=t.childNodes[Math.min(t.childNodes.length-1,o.startOffset)]),
3==t.nodeType)return t.parentNode;
return t;
},
getText:function(){
var e,t;
return this.isFocus()&&(e=this.getNative())?(t=l.ie9below?e.createRange():e.getRangeAt(0),
l.ie9below?t.text:t.toString()):"";
},
clearRange:function(){
this.getNative()[l.ie9below?"empty":"removeAllRanges"]();
}
};
}(),function(){
function e(e,t){
var n;
if(t.textarea)if(u.isString(t.textarea)){
for(var i,o=0,r=b.getElementsByTagName(e,"textarea");i=r[o++];)if(i.id=="ueditor_textarea_"+t.options.textarea){
n=i;
break;
}
}else n=t.textarea;
n||(e.appendChild(n=b.createElement(document,"textarea",{
name:t.options.textarea,
id:"ueditor_textarea_"+t.options.textarea,
style:"display:none"
})),t.textarea=n),n.value=t.hasContents()?t.options.allHtmlEnabled?t.getAllHtml():t.getContent(null,null,!0):"";
}
function t(e){
for(var t in UE.plugins)UE.plugins[t].call(e);
if(e.options.pluginsContainer)for(var t in e.options.pluginsContainer)e.options.pluginsContainer[t].call(e);
e.langIsReady=!0,e.fireEvent("langReady");
}
function n(e){
for(var t in e)return t;
}
function i(e,t){
if(e.childNodes&&e.childNodes.length)for(var n,i=0;n=e.childNodes[i];)nodeTraversal(n,t),
n.parentNode&&(n.childNodes&&n.childNodes.length&&t(n),n.parentNode&&i++);else t(e);
}
var o,r=0,a=UE.Editor=function(e){
var i=this;
i.uid=r++,f.call(i),i.commands={},i.options=u.clone(e||{}),i.shortcutkeys={},i.inputRules=[],
i.outputRules=[],i.inputNativeNodeRules=[],u.isEmptyObject(UE.I18N)?t(i):(i.options.lang=n(UE.I18N),
t(i)),UE.instants["ueditorInstant"+i.uid]=i;
};
a.prototype={
ready:function(e){
var t=this;
e&&(t.isReady?e.apply(t):t.addListener("ready",e));
},
setOpt:function(e,t){
var n={};
u.isString(e)?n[e]=t:n=e,u.extend(this.options,n,!0);
},
destroy:function(){
var e=this;
e.fireEvent("destroy");
var t=e.container.parentNode,n=e.textarea;
n?n.style.display="":(n=document.createElement("textarea"),t.parentNode.insertBefore(n,t)),
n.style.width=e.iframe.offsetWidth+"px",n.style.height=e.iframe.offsetHeight+"px",
n.value=e.getContent(),n.id=e.key,t.innerHTML="",b.remove(t);
var i=e.key;
for(var o in e)e.hasOwnProperty(o)&&delete this[o];
UE.delEditor(i);
},
render:function(e){
var t=this,n=t.options;
if(u.isString(e)&&(e=document.getElementById(e)),e){
var i="";
i=l.edge?"javascript:void(function(){"+(n.customDomain&&document.domain!=location.hostname?'document.domain="'+document.domain+'";':"")+'window.parent.UE.instants["ueditorInstant'+t.uid+'"]._docWrite(document);}())':"javascript:void(function(){document.open();"+(n.customDomain&&document.domain!=location.hostname?'document.domain="'+document.domain+'";':"")+'document.write("'+t._getIframeHtml()+'");document.close();}())',
e.appendChild(b.createElement(document,"iframe",{
id:"ueditor_"+t.uid,
allowtransparency:"true",
width:"100%",
height:"100%",
frameborder:"0",
src:i
}));
}
},
_getIframeHtml:function(){
var e=this,t=e.options,n=(d&&l.version<9?"":"<!DOCTYPE html>")+"<html xmlns='http://www.w3.org/1999/xhtml' ><head><style type='text/css'>body{font-family:sans-serif;}</style>"+(t.iframeCssUrl?"<link rel='stylesheet' type='text/css' href='"+u.unhtml(t.iframeCssUrl)+"'/>":"")+(t.initialStyle?"<style>"+t.initialStyle+"</style>":"")+"</head><body class='view' lang='en' ></body><script type='text/javascript' "+(d?"defer='defer'":"")+" id='_initialScript'>setTimeout(function(){window.parent.UE.instants['ueditorInstant"+e.uid+"']._setup(document);},0);var _tmpScript = document.getElementById('_initialScript');_tmpScript.parentNode.removeChild(_tmpScript);</script></html>";
return n;
},
_docWrite:function(e){
var t=this,n=t.options;
e.open(),n.customDomain&&document.domain!=location.hostname&&(e.domain=document.domain),
e.write(t._getIframeHtml()),e.close();
},
_setup:function(t){
var n=this,i=n.options;
d?(t.body.disabled=!0,t.body.contentEditable=!0,t.body.disabled=!1):t.body.contentEditable=!0,
t.body.spellcheck=!1,n.document=t,n.window=t.defaultView||t.parentWindow,n.iframe=n.window.frameElement,
n.body=t.body,n.selection=new s.Selection(t);
var o;
l.gecko&&(o=this.selection.getNative())&&o.removeAllRanges(),this._initEvents();
for(var r=this.iframe.parentNode;!b.isBody(r);r=r.parentNode)if("FORM"==r.tagName){
n.form=r,n.options.autoSyncData?b.on(n.window,"blur",function(){
e(r,n);
}):b.on(r,"submit",function(){
e(this,n);
});
break;
}
if(i.initialContent)if(i.autoClearinitialContent){
var a=n.execCommand;
n.execCommand=function(){
return n.fireEvent("firstBeforeExecCommand"),a.apply(n,arguments);
},this._setDefaultContent(i.initialContent);
}else this.setContent(i.initialContent,!1,!0);
b.isEmptyNode(n.body)&&(n.body.innerHTML="<p>"+(l.ie11below?b.fillChar:"<br/>")+"</p>"),
i.focus&&setTimeout(function(){
n.focus(n.options.focusInEnd),!n.options.autoClearinitialContent&&n._selectionChange();
},0),n.container||(n.container=this.iframe.parentNode),i.fullscreen&&n.ui&&n.ui.setFullScreen(!0);
try{
n.document.execCommand("2D-position",!1,!1);
}catch(c){}
try{
n.document.execCommand("enableInlineTableEditing",!1,!1);
}catch(c){}
try{
n.document.execCommand("enableObjectResizing",!1,!1);
}catch(c){}
n._bindshortcutKeys(),n.isReady=1,n.fireEvent("ready"),i.onready&&i.onready.call(n),
l.ie9below||b.on(n.window,["blur","focus"],function(e){
if("blur"==e.type){
n._bakRange=n.selection.getRange();
try{
n._bakNativeRange=n.selection.getNative().getRangeAt(0),n.selection.getNative().removeAllRanges();
}catch(e){
n._bakNativeRange=null;
}
}else try{
n._bakRange&&n._bakRange.select(!0);
}catch(e){}
}),l.gecko&&l.version<=10902&&(n.body.contentEditable=!1,setTimeout(function(){
n.body.contentEditable=!0;
},100),setInterval(function(){
n.body.style.height=n.iframe.offsetHeight-20+"px";
},100)),!i.isShow&&n.setHide(),i.readonly&&n.setDisabled();
},
sync:function(t){
var n=this,i=t?document.getElementById(t):b.findParent(n.iframe.parentNode,function(e){
return"FORM"==e.tagName;
},!0);
i&&e(i,n);
},
setHeight:function(e,t){
this.options.canChangeIframeHeight&&e!==parseInt(this.iframe.parentNode.style.height)&&$(this.iframe).parent().height(e),
!t&&(this.options.minFrameHeight=e),this.options.canChangeIframeHeight&&(this.iframe.style.height=e+"px"),
this.body.style.height=e+"px",this.fireEvent("heightChanged",e);
},
addshortcutkey:function(e,t){
var n={};
t?n[e]=t:n=e,u.extend(this.shortcutkeys,n);
},
_bindshortcutKeys:function(){
var e=this,t=this.shortcutkeys;
e.addListener("keydown",function(n,i){
var o=i.keyCode||i.which;
for(var r in t)for(var a,s=t[r].split(","),l=0;a=s[l++];){
a=a.split(":");
var d=a[0],c=a[1];
(/^(ctrl)(\+shift)?\+(\d+)$/.test(d.toLowerCase())||/^(\d+)$/.test(d))&&(("ctrl"==RegExp.$1?i.ctrlKey||i.metaKey:0)&&(""!=RegExp.$2?i[RegExp.$2.slice(1)+"Key"]:1)&&o==RegExp.$3||o==RegExp.$1)&&(-1!=e.queryCommandState(r,c)&&e.execCommand(r,c),
b.preventDefault(i));
}
});
},
getContent:function(e,t,n,i,o,r){
var a=this;
if(e&&u.isFunction(e)&&(t=e,e=""),t?!t():!this.hasContents())return"";
var s="";
if("range"===r){
var l=this.selection.getRange().cloneContents();
if(l){
var d=document.createElement("div");
d.appendChild(l),s=d.innerHTML;
}
}else s=a.body.innerHTML;
if(a.fireEvent("beforegetcontent"),s){
var c=UE.htmlparser(s,i);
return a.filterOutputRule(c),a.fireEvent("aftergetcontent",e),c.toHtml(o);
}
return"";
},
getAllHtml:function(){
var e=this,t=[];
if(e.fireEvent("getAllHtml",t),l.ie&&l.version>8){
var n="";
u.each(e.document.styleSheets,function(e){
n+=e.href?'<link rel="stylesheet" type="text/css" href="'+e.href+'" />':"<style>"+e.cssText+"</style>";
}),u.each(e.document.getElementsByTagName("script"),function(e){
n+=e.outerHTML;
});
}
return"<html><head>"+(e.options.charset?'<meta http-equiv="Content-Type" content="text/html; charset='+e.options.charset+'"/>':"")+(n||e.document.getElementsByTagName("head")[0].innerHTML)+t.join("\n")+"</head><body "+(d&&l.version<9?'class="view"':"")+">"+e.getContent(null,null,!0)+"</body></html>";
},
getPlainTxt:function(){
var e=new RegExp(b.fillChar,"g"),t=this.body.innerHTML.replace(/[\n\r]/g,"");
return t=t.replace(/<(p|div)[^>]*>(<br\/?>|&nbsp;)<\/\1>/gi,"\n").replace(/<br\/?>/gi,"\n").replace(/<[^>\/]+>/g,"").replace(/(\n)?<\/([^>]+)>/g,function(e,t,n){
return m.$block[n]?"\n":t?t:"";
}),t.replace(e,"").replace(/\u00a0/g," ").replace(/&nbsp;/g," ");
},
getContentTxt:function(){
var e=new RegExp(b.fillChar,"g");
return this.body[l.ie?"innerText":"textContent"].replace(e,"").replace(/\u00a0/g," ");
},
setContent:function(t,n,i){
function o(e){
return"DIV"==e.tagName&&e.getAttribute("cdata_tag");
}
var r=this;
r.fireEvent("beforesetcontent",t);
var a=UE.htmlparser(t,!0);
if(r.filterInputRule(a),t=a.toHtml(),r.body.innerHTML=(n?r.body.innerHTML:"")+t,
"p"==r.options.enterTag){
var s,d=this.body.firstChild;
if(!d||1==d.nodeType&&(m.$cdata[d.tagName]||o(d)||b.isCustomeNode(d))&&d===this.body.lastChild)this.body.innerHTML="<p>"+(l.ie11below?b.fillChar:"<br/>")+"</p>"+this.body.innerHTML;else for(var c=r.document.createElement("p");d;){
for(;d&&(3==d.nodeType||1==d.nodeType&&m.p[d.tagName]&&!m.$cdata[d.tagName]);)s=d.nextSibling,
c.appendChild(d),d=s;
if(c.firstChild){
if(!d){
r.body.appendChild(c);
break;
}
d.parentNode.insertBefore(c,d),c=r.document.createElement("p");
}
d=d.nextSibling;
}
}
r.filterInputNativeNode(r.body),r.fireEvent("aftersetcontent",t,[r.body]),r.fireEvent("contentchange"),
!i&&r._selectionChange(),r._bakRange=r._bakIERange=r._bakNativeRange=null;
var u;
l.gecko&&(u=this.selection.getNative())&&u.removeAllRanges(),r.options.autoSyncData&&r.form&&e(r.form,r);
},
focus:function(e){
try{
var t=this,n=t.selection.getRange();
e?n.setStartAtLast(t.body.lastChild).setCursor(!1,!0):n.select(!0),this.fireEvent("focus");
}catch(i){}
},
_initEvents:function(){
var e=this,t=e.document,n=e.window;
e._proxyDomEvent=u.bind(e._proxyDomEvent,e),b.on(t,["click","contextmenu","mousedown","keydown","keyup","keypress","mouseup","mouseover","mouseout","selectstart"],e._proxyDomEvent),
b.on(n,["focus","blur"],e._proxyDomEvent),b.on(t,["mouseup","keydown"],function(t){
"keydown"==t.type&&(t.ctrlKey||t.metaKey||t.shiftKey||t.altKey)||2!=t.button&&e._selectionChange(250,t);
});
},
_proxyDomEvent:function(e){
return this.fireEvent("before"+e.type.replace(/^on/,"").toLowerCase(),e)===!1?!1:this.fireEvent(e.type.replace(/^on/,""),e)===!1?!1:this.fireEvent("after"+e.type.replace(/^on/,"").toLowerCase(),e);
},
_selectionChange:function(e,t){
var n,i,r=this,a=!1;
if(l.ie&&l.version<9&&t&&"mouseup"==t.type){
var s=this.selection.getRange();
s.collapsed||(a=!0,n=t.clientX,i=t.clientY);
}
clearTimeout(o),o=setTimeout(function(){
if(r.selection&&r.selection.getNative()){
var e;
if(a&&"None"==r.selection.getNative().type){
e=r.document.body.createTextRange();
try{
e.moveToPoint(n,i);
}catch(o){
e=null;
}
}
var s;
e&&(s=r.selection.getIERange,r.selection.getIERange=function(){
return e;
}),r.selection.cache(),s&&(r.selection.getIERange=s),r.selection._cachedRange&&r.selection._cachedStartElement&&(r.fireEvent("beforeselectionchange"),
r.fireEvent("selectionchange",!!t),r.fireEvent("afterselectionchange"),r.selection.clear());
}
},e||50);
},
_callCmdFn:function(e,t){
var n,i,o=t[0].toLowerCase();
return n=this.commands[o]||UE.commands[o],i=n&&n[e],n&&i||"queryCommandState"!=e?i?("execCommand"==e&&n.noCommandReprot!==!0&&this._cmdReport(t),
i.apply(this,t)):void 0:0;
},
_cmdReport:function(e){
var t=e[0];
"justify"==t||"imagefloat"==t?this.fireEvent("funcPvUvReport",t+(e[1]||"")):"rowspacing"==t?this.fireEvent("funcPvUvReport",t+(e[2]||"")):this.fireEvent("funcPvUvReport",t);
},
execCommand:function(e){
arguments[0]=arguments[0].toLowerCase(),e=e.toLowerCase();
var t,n=this,i=n.commands[e]||UE.commands[e];
return i&&i.execCommand?(i.notNeedUndo||n.__hasEnterExecCommand?(t=this._callCmdFn("execCommand",arguments),
!n._ignoreContentChange&&n.fireEvent("contentchange")):(n.__hasEnterExecCommand=!0,
-1!=n.queryCommandState.apply(n,arguments)&&(n.fireEvent("beforeexeccommand",e),
t=this._callCmdFn("execCommand",arguments),!n._ignoreContentChange&&n.fireEvent("contentchange"),
n.fireEvent("afterexeccommand",e)),n.__hasEnterExecCommand=!1),!n._ignoreContentChange&&n._selectionChange(),
t):null;
},
queryCommandState:function(){
return this._callCmdFn("queryCommandState",arguments);
},
queryCommandValue:function(){
return this._callCmdFn("queryCommandValue",arguments);
},
hasContents:function(e){
if(e)for(var t,n=0;t=e[n++];)if(this.document.getElementsByTagName(t).length>0)return!0;
if(!b.isEmptyBlock(this.body))return!0;
for(e=["div"],n=0;t=e[n++];)for(var i,o=b.getElementsByTagName(this.document,t),r=0;i=o[r++];)if(b.isCustomeNode(i))return!0;
return!1;
},
reset:function(){
this.fireEvent("reset");
},
setEnabled:function(){
var e,t=this;
if("false"==t.body.contentEditable){
t.body.contentEditable=!0,e=t.selection.getRange();
try{
e.moveToBookmark(t.lastBk),delete t.lastBk;
}catch(n){
e.setStartAtFirst(t.body).collapse(!0);
}
e.select(!0),t.bkqueryCommandState&&(t.queryCommandState=t.bkqueryCommandState,delete t.bkqueryCommandState),
t.fireEvent("selectionchange");
}
},
enable:function(){
return this.setEnabled();
},
setDisabled:function(e){
var t=this;
e=e?u.isArray(e)?e:[e]:[],"true"==t.body.contentEditable&&(t.lastBk||(t.lastBk=t.selection.getRange().createBookmark(!0)),
t.body.contentEditable=!1,t.bkqueryCommandState=t.queryCommandState,t.queryCommandState=function(n){
return-1!=u.indexOf(e,n)?t.bkqueryCommandState.apply(t,arguments):-1;
},t.fireEvent("selectionchange"));
},
disable:function(e){
return this.setDisabled(e);
},
_setDefaultContent:function(){
function e(){
var t=this;
t.document.getElementById("initContent")&&(t.body.innerHTML="<p>"+(l.ie11below?b.fillChar:"<br/>")+"</p>",
t.removeListener("firstBeforeExecCommand focus",e),setTimeout(function(){
t.focus(),t._selectionChange();
},0));
}
return function(t){
var n=this;
n.body.innerHTML='<p id="initContent">'+t+"</p>",n.addListener("firstBeforeExecCommand focus",e);
};
}(),
setShow:function(){
var e=this,t=e.selection.getRange();
if("none"==e.container.style.display){
try{
t.moveToBookmark(e.lastBk),delete e.lastBk;
}catch(n){
t.setStartAtFirst(e.body).collapse(!0);
}
setTimeout(function(){
t.select(!0);
},100),e.container.style.display="";
}
},
show:function(){
return this.setShow();
},
setHide:function(){
var e=this;
e.lastBk||(e.lastBk=e.selection.getRange().createBookmark(!0)),e.container.style.display="none";
},
hide:function(){
return this.setHide();
},
getLang:function(e){
var t=UE.I18N[this.options.lang];
if(!t)throw Error("not import language file");
e=(e||"").split(".");
for(var n,i=0;(n=e[i++])&&(t=t[n],t););
return t;
},
getContentLength:function(e,t){
var n=this.getContent(!1,!1,!0).length;
if(e){
t=(t||[]).concat(["hr","img","iframe"]),n=this.getContentTxt().replace(/[\t\r\n]+/g,"").length;
for(var i,o=0;i=t[o++];)n+=this.document.getElementsByTagName(i).length;
}
return n;
},
nativeNodeTraversal:function(e){
return e.childNodes&&e.childNodes.length&&i(e),e;
},
addInputRule:function(e){
this.inputRules.push(e);
},
addInputNativeNodeRule:function(e){
this.inputNativeNodeRules.push(e);
},
filterInputNativeNode:function(e){
for(var t,n=0;t=this.inputNativeNodeRules[n++];)t.call(this,e);
},
filterInputRule:function(e){
for(var t,n=0;t=this.inputRules[n++];)t.call(this,e);
},
addOutputRule:function(e){
this.outputRules.push(e);
},
filterOutputRule:function(e){
for(var t,n=0;t=this.outputRules[n++];)t.call(this,e);
}
},u.inherits(a,f);
}(),UE.ajax=function(){
function e(e){
var t=[];
for(var n in e)"method"!=n&&"timeout"!=n&&"async"!=n&&"function"!=(typeof e[n]).toLowerCase()&&"object"!=(typeof e[n]).toLowerCase()&&t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));
return t.join("&");
}
var t="XMLHttpRequest()";
try{
new ActiveXObject("Msxml2.XMLHTTP"),t="ActiveXObject('Msxml2.XMLHTTP')";
}catch(n){
try{
new ActiveXObject("Microsoft.XMLHTTP"),t="ActiveXObject('Microsoft.XMLHTTP')";
}catch(n){}
}
var i=new Function("return new "+t);
return{
request:function(t,n){
var o=i(),r=!1,a={
method:"POST",
timeout:5e3,
async:!0,
data:{},
onsuccess:function(){},
onerror:function(){}
};
if("object"==typeof t&&(n=t,t=n.url),o&&t){
var s=n?u.extend(a,n):a,l=e(s);
u.isEmptyObject(s.data)||(l+=(l?"&":"")+e(s.data));
var d=setTimeout(function(){
4!=o.readyState&&(r=!0,o.abort(),clearTimeout(d));
},s.timeout),c=s.method.toUpperCase(),f=t+(-1==t.indexOf("?")?"?":"&")+("POST"==c?"":l+"&noCache="+ +new Date);
o.open(c,f,s.async),o.onreadystatechange=function(){
4==o.readyState&&(r||200!=o.status?s.onerror(o):s.onsuccess(o));
},"POST"==c?(o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),
o.send(l)):o.send(null);
}
}
};
}();
UE.filterWord=function(){
function e(e){
return/(class="?Mso|style="[^"]*\bmso\-|w:WordDocument|<v:)/gi.test(e);
}
function t(e){
return e=e.replace(/[\d.]+\w+/g,function(e){
return u.transUnitToPx(e);
});
}
function n(e){
return e.replace(/[\t\r\n]+/g,"").replace(/<!--[\s\S]*?-->/gi,"").replace(/<v:shape [^>]*>[\s\S]*?.<\/v:shape>/gi,function(e){
if(l.opera)return"";
try{
var n=e.match(/width:([ \d.]*p[tx])/i)[1],i=e.match(/height:([ \d.]*p[tx])/i)[1],o=e.match(/src=\s*"([^"]*)"/i)[1];
return'<img width="'+t(n)+'" height="'+t(i)+'" src="'+o+'" />';
}catch(r){
return"";
}
}).replace(/<\/?div[^>]*>/g,"").replace(/v:\w+=(["']?)[^'"]+\1/g,"").replace(/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|xml|meta|link|style|\w+:\w+)(?=[\s\/>]))[^>]*>/gi,"").replace(/<p [^>]*class="?MsoHeading"?[^>]*>(.*?)<\/p>/gi,"<p><strong>$1</strong></p>").replace(/\s+(class|lang|align)\s*=\s*(['"]?)([\w-]+)\2/gi,function(e,t,n,i){
return"class"==t&&"MsoListParagraph"==i?e:"";
}).replace(/<(font|span)[^>]*>\s*<\/\1>/gi,"").replace(/(<[a-z][^>]*)\sstyle=(["'])([^\2]*?)\2/gi,function(e,n,i,o){
for(var r,a=[],s=o.replace(/^\s+|\s+$/,"").replace(/&#39;/g,"'").replace(/&quot;/gi,"'").split(/;\s*/g),l=0;r=s[l];l++){
var d,c,u=r.split(":");
if(2==u.length){
if(d=u[0].toLowerCase(),c=u[1].toLowerCase(),/^(background)\w*/.test(d)&&0==c.replace(/(initial|\s)/g,"").length||/^(margin)\w*/.test(d)&&/^0\w+$/.test(c))continue;
switch(d){
case"mso-padding-alt":
case"mso-padding-top-alt":
case"mso-padding-right-alt":
case"mso-padding-bottom-alt":
case"mso-padding-left-alt":
case"mso-margin-alt":
case"mso-margin-top-alt":
case"mso-margin-right-alt":
case"mso-margin-bottom-alt":
case"mso-margin-left-alt":
case"mso-height":
case"mso-width":
case"mso-vertical-align-alt":
/<table/.test(n)||(a[l]=d.replace(/^mso-|-alt$/g,"")+":"+t(c));
continue;

case"horiz-align":
a[l]="text-align:"+c;
continue;

case"vert-align":
a[l]="vertical-align:"+c;
continue;

case"font-color":
case"mso-foreground":
a[l]="color:"+c;
continue;

case"mso-background":
case"mso-highlight":
a[l]="background:"+c;
continue;

case"mso-default-height":
a[l]="min-height:"+t(c);
continue;

case"mso-default-width":
a[l]="min-width:"+t(c);
continue;

case"mso-padding-between-alt":
a[l]="border-collapse:separate;border-spacing:"+t(c);
continue;

case"text-line-through":
("single"==c||"double"==c)&&(a[l]="text-decoration:line-through");
continue;

case"mso-zero-height":
"yes"==c&&(a[l]="display:none");
continue;

case"background":
break;

case"margin":
if(!/[1-9]/.test(c))continue;

case"font-family":
c=u[1].replace(/'([^\s']+)'/g,"$1"),/'([^']+)'/.test(c)||(a[l]="font-family:"+c);
continue;
}
if(/^(mso|column|font-emph|lang|layout|line-break|list-image|nav|panose|punct|row|ruby|sep|size|src|tab-|table-border|text-(?:decor|trans)|top-bar|version|vnd|word-break)/.test(d)||/text\-indent|padding|margin/.test(d)&&/\-[\d.]+/.test(c))continue;
a[l]=d+":"+u[1];
}
}
return n+(a.length?' style="'+a.join(";").replace(/;{2,}/g,";")+'"':"");
}).replace(/[\d]+(\.\d+)?(cm|pt)(?=[^<]*>)/g,function(e){
return u.transUnitToPx(e);
});
}
return function(t){
return e(t)?n(t):t;
};
}();
!function(){
function e(e,t,n){
return e.push(f),t+(n?1:-1);
}
function t(e,t){
for(var n=0;t>n;n++)e.push(c);
}
function n(a,s,l,d){
switch(a.type){
case"root":
for(var c,u=0;c=a.children[u++];)l&&"element"==c.type&&!m.$inlineWithA[c.tagName]&&u>1&&(e(s,d,!0),
t(s,d)),n(c,s,l,d);
break;

case"text":
i(a,s);
break;

case"element":
o(a,s,l,d);
break;

case"comment":
r(a,s,l);
}
return s;
}
function i(e,t){
t.push("pre"==e.parentNode.tagName?e.data:e.data.replace(/[ ]{2}/g," &nbsp;"));
}
function o(i,o,r,a){
var s="";
if(i.attrs){
s=[];
var l=i.attrs;
for(var d in l)s.push(d+(void 0!==l[d]?'="'+u.unhtml(l[d])+'"':""));
s=s.join(" ");
}
if(o.push("<"+i.tagName+(s?" "+s:"")+(m.$empty[i.tagName]?"/":"")+">"),r&&!m.$inlineWithA[i.tagName]&&"pre"!=i.tagName&&i.children&&i.children.length&&(a=e(o,a,!0),
t(o,a)),i.children&&i.children.length)for(var c,f=0;c=i.children[f++];)r&&"element"==c.type&&!m.$inlineWithA[c.tagName]&&f>1&&(e(o,a),
t(o,a)),n(c,o,r,a);
m.$empty[i.tagName]||(r&&!m.$inlineWithA[i.tagName]&&"pre"!=i.tagName&&i.children&&i.children.length&&(a=e(o,a),
t(o,a)),o.push("</"+i.tagName+">"));
}
function r(e,t){
t.push("<!--"+e.data+"-->");
}
function a(e,t){
var n;
if("element"==e.type&&e.getAttr("id")==t)return e;
if(e.children&&e.children.length)for(var i,o=0;i=e.children[o++];)if(n=a(i,t))return n;
}
function s(e,t,n){
if("element"==e.type&&e.tagName==t&&n.push(e),e.children&&e.children.length)for(var i,o=0;i=e.children[o++];)s(i,t,n);
}
function l(e,t){
if(e.children&&e.children.length)for(var n,i=0;n=e.children[i];)l(n,t),n.parentNode&&(n.children&&n.children.length&&t(n),
n.parentNode&&i++);else t(e);
}
var d=UE.uNode=function(e){
this.type=e.type,this.data=e.data,this.tagName=e.tagName,this.parentNode=e.parentNode,
this.attrs=e.attrs||{},this.children=e.children;
},c="    ",f="\n";
d.createElement=function(e){
return/[<>]/.test(e)?UE.htmlparser(e).children[0]:new d({
type:"element",
children:[],
tagName:e
});
},d.createFillChar=function(){
return new UE.uNode({
type:"text",
data:b.fillCharEncode
});
},d.createText=function(e){
return new UE.uNode({
type:"text",
data:u.unhtml(e||"")
});
},d.prototype={
toHtml:function(e){
var t=[];
return n(this,t,e,0),t.join("").replace(new RegExp(b.fillChar,"g"),"");
},
innerHTML:function(e){
if("element"!=this.type||m.$empty[this.tagName])return this;
if(u.isString(e)){
if(this.children)for(var t,n=0;t=this.children[n++];)t.parentNode=null;
this.children=[];
for(var t,i=UE.htmlparser(e),n=0;t=i.children[n++];)this.children.push(t),t.parentNode=this;
return this;
}
var i=new UE.uNode({
type:"root",
children:this.children
});
return i.toHtml();
},
innerText:function(e){
if("element"!=this.type||m.$empty[this.tagName])return this;
if(e){
if(this.children)for(var t,n=0;t=this.children[n++];)t.parentNode=null;
return this.children=[],this.appendChild(d.createText(e)),this;
}
return this.toHtml().replace(/<[^>]+>/g,"");
},
getData:function(){
return"element"==this.type?"":this.data;
},
firstChild:function(){
return this.children?this.children[0]:null;
},
lastChild:function(){
return this.children?this.children[this.children.length-1]:null;
},
previousSibling:function(){
for(var e,t=this.parentNode,n=0;e=t.children[n];n++)if(e===this)return 0==n?null:t.children[n-1];
},
nextSibling:function(){
for(var e,t=this.parentNode,n=0;e=t.children[n++];)if(e===this)return t.children[n];
},
replaceChild:function(e,t){
if(this.children){
e.parentNode&&e.parentNode.removeChild(e);
for(var n,i=0;n=this.children[i];i++)if(n===t)return this.children.splice(i,1,e),
t.parentNode=null,e.parentNode=this,e;
}
},
appendChild:function(e){
if("root"==this.type||"element"==this.type&&!m.$empty[this.tagName]){
this.children||(this.children=[]),e.parentNode&&e.parentNode.removeChild(e);
for(var t,n=0;t=this.children[n];n++)if(t===e){
this.children.splice(n,1);
break;
}
return this.children.push(e),e.parentNode=this,e;
}
},
insertBefore:function(e,t){
if(this.children){
e.parentNode&&e.parentNode.removeChild(e);
for(var n,i=0;n=this.children[i];i++)if(n===t)return this.children.splice(i,0,e),
e.parentNode=this,e;
}
},
insertAfter:function(e,t){
if(this.children){
e.parentNode&&e.parentNode.removeChild(e);
for(var n,i=0;n=this.children[i];i++)if(n===t)return this.children.splice(i+1,0,e),
e.parentNode=this,e;
}
},
removeChild:function(e,t){
if(this.children)for(var n,i=0;n=this.children[i];i++)if(n===e){
if(this.children.splice(i,1),n.parentNode=null,t&&n.children&&n.children.length)for(var o,r=0;o=n.children[r];r++)this.children.splice(i+r,0,o),
o.parentNode=this;
return n;
}
},
getAttr:function(e){
return this.attrs&&this.attrs[e.toLowerCase()];
},
setAttr:function(e,t){
if(!e)return void delete this.attrs;
if(this.attrs||(this.attrs={}),u.isObject(e))for(var n in e)e[n]?this.attrs[n.toLowerCase()]=e[n]:delete this.attrs[n];else t?this.attrs[e.toLowerCase()]=t:delete this.attrs[e];
},
getIndex:function(){
for(var e,t=this.parentNode,n=0;e=t.children[n];n++)if(e===this)return n;
return-1;
},
getNodeById:function(e){
var t;
if(this.children&&this.children.length)for(var n,i=0;n=this.children[i++];)if(t=a(n,e))return t;
},
getNodesByTagName:function(e){
e=u.trim(e).replace(/[ ]{2,}/g," ").split(" ");
var t=[],n=this;
return u.each(e,function(e){
if(n.children&&n.children.length)for(var i,o=0;i=n.children[o++];)s(i,e,t);
}),t;
},
getStyle:function(e){
var t=this.getAttr("style");
if(!t)return"";
var n=new RegExp(e+":([^;]+)","i"),i=t.match(n);
return i&&i[0]?i[1]:"";
},
setStyle:function(e,t){
function n(e,t){
var n=new RegExp(e+":([^;]+;?)","gi");
i=i.replace(n,""),t&&(i=e+":"+u.unhtml(t)+";"+i);
}
var i=this.getAttr("style");
if(i||(i=""),u.isObject(e))for(var o in e)n(o,e[o]);else n(e,t);
this.setAttr("style",u.trim(i));
},
traversal:function(e){
return this.children&&this.children.length&&l(this,e),this;
}
};
}();
UE.htmlparser=function(e,t){
function n(e,t){
if(f[e.tagName]){
var n=d.createElement(f[e.tagName]);
e.appendChild(n),n.appendChild(d.createText(t)),e=n;
}else e.appendChild(d.createText(t));
}
function i(e,t,n){
var o;
if(o=c[t]){
for(var r,s=e;"root"!=s.type;){
if(u.isArray(o)?-1!=u.indexOf(o,s.tagName):o==s.tagName){
e=s,r=!0;
break;
}
s=s.parentNode;
}
r||(e=i(e,u.isArray(o)?o[0]:o));
}
var l=new d({
parentNode:e,
type:"element",
tagName:t.toLowerCase(),
children:m.$empty[t]?null:[]
});
if(n){
for(var f,h={};f=a.exec(n);)h[f[1].toLowerCase()]=u.unhtml(f[2]||f[3]||f[4]);
l.attrs=h;
}
return e.children.push(l),m.$empty[t]?e:l;
}
function o(e,t){
e.children.push(new d({
type:"comment",
data:t,
parentNode:e
}));
}
var r=/<(?:(?:\/([^>]+)>)|(?:!--([\S|\s]*?)-->)|(?:([^\s\/>]+)\s*((?:(?:"[^"]*")|(?:'[^']*')|[^"'<>])*)\/?>))/g,a=/([\w\-:.]+)(?:(?:\s*=\s*(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s>]+)))|(?=\s|$))/g,s={
b:1,
code:1,
i:1,
u:1,
strike:1,
s:1,
tt:1,
strong:1,
q:1,
samp:1,
em:1,
span:1,
sub:1,
img:1,
sup:1,
font:1,
big:1,
small:1,
iframe:1,
a:1,
br:1,
pre:1
};
e=e.replace(new RegExp(b.fillChar,"g"),""),t||(e=e.replace(new RegExp("[\\r\\t\\n"+(t?"":" ")+"]*</?(\\w+)\\s*(?:[^>]*)>[\\r\\t\\n"+(t?"":" ")+"]*","g"),function(e,n){
return n&&s[n.toLowerCase()]?e.replace(/(^[\n\r]+)|([\n\r]+$)/g,""):e.replace(new RegExp("^[\\r\\n"+(t?"":" ")+"]+"),"").replace(new RegExp("[\\r\\n"+(t?"":" ")+"]+$"),"");
}));
for(var l,d=UE.uNode,c={
td:"tr",
tr:["tbody","thead","tfoot"],
tbody:"table",
th:"tr",
thead:"table",
tfoot:"table",
caption:"table",
li:["ul","ol"],
dt:"dl",
dd:"dl",
option:"select"
},f={
ol:"li",
ul:"li"
},h=0,p=0,g=new d({
type:"root",
children:[]
}),v=g;l=r.exec(e);){
h=l.index;
try{
if(h>p&&n(v,e.slice(p,h)),l[3])v=i(v,l[3].toLowerCase(),l[4]);else if(l[1]){
if("root"!=v.type){
for(var y=v;"element"==v.type&&v.tagName!=l[1].toLowerCase();)if(v=v.parentNode,
"root"==v.type)throw v=y,"break";
v=v.parentNode;
}
}else l[2]&&o(v,l[2]);
}catch(C){}
p=r.lastIndex;
}
return p<e.length&&n(v,e.slice(p)),g;
},UE.filterNode=function(){
function e(t,n){
switch(t.type){
case"text":
break;

case"element":
var i;
if(i=n[t.tagName])if("-"===i)t.parentNode.removeChild(t);else if(u.isFunction(i)){
var o=t.parentNode,r=t.getIndex();
if(i(t),t.parentNode){
if(t.children)for(var a,s=0;a=t.children[s];)e(a,n),a.parentNode&&s++;
}else for(var a,s=r;a=o.children[s];)e(a,n),a.parentNode&&s++;
}else{
var l=i.$;
if(l&&t.attrs){
var d,c={};
for(var f in l){
if(d=t.getAttr(f),"style"==f&&u.isArray(l[f])){
var h=[];
u.each(l[f],function(e){
var n;
(n=t.getStyle(e))&&h.push(e+":"+n);
}),d=h.join(";");
}
d&&(c[f]=d);
}
t.attrs=c;
}
if(t.children)for(var a,s=0;a=t.children[s];)e(a,n),a.parentNode&&s++;
}else if(m.$cdata[t.tagName])t.parentNode.removeChild(t);else{
var o=t.parentNode,r=t.getIndex();
t.parentNode.removeChild(t,!0);
for(var a,s=r;a=o.children[s];)e(a,n),a.parentNode&&s++;
}
break;

case"comment":
t.parentNode.removeChild(t);
}
}
return function(t,n){
if(u.isEmptyObject(n))return t;
var i;
(i=n["-"])&&u.each(i.split(" "),function(e){
n[e]="-";
});
for(var o,r=0;o=t.children[r];)e(o,n),o.parentNode&&r++;
return t;
};
}();
UE.plugins.defaultfilter=function(){
var e=this;
e.setOpt("allowDivTransToP",!0),e.addInputRule(function(t){
var n,i=this.options.allowDivTransToP;
t.traversal(function(t){
if("element"==t.type){
if(!m.$cdata[t.tagName]&&e.options.autoClearEmptyNode&&m.$inline[t.tagName]&&!m.$empty[t.tagName]&&(!t.attrs||u.isEmptyObject(t.attrs)))return void(t.firstChild()?"span"!=t.tagName||t.attrs&&!u.isEmptyObject(t.attrs)||t.parentNode.removeChild(t,!0):t.parentNode.removeChild(t));
switch(t.tagName){
case"style":
case"script":
t.setAttr({
cdata_tag:t.tagName,
cdata_data:encodeURIComponent(t.innerText()||"")
}),t.tagName="div",t.removeChild(t.firstChild());
break;

case"a":
(n=t.getAttr("href"))&&t.setAttr("_href",n);
break;

case"img":
n=t.getAttr("src"),/^wewebkit-fake-url:\/\//i.test(n)?t.parentNode.removeChild(t):!/^data:/.test(n);
break;

case"span":
l.webkit&&(n=t.getStyle("white-space"))&&/nowrap|normal/.test(n)&&(t.setStyle("white-space",""),
e.options.autoClearEmptyNode&&u.isEmptyObject(t.attrs)&&t.parentNode.removeChild(t,!0)),
t.getAttr("data-fillchar")&&0==t.innerHTML().replace(b.fillCharReg,"").length&&(l.ie11below?t.appendChild(UE.uNode.createFillChar()):(t.parentNode.insertBefore(UE.uNode.createElement("br"),t),
t.parentNode.removeChild(t)));
break;

case"p":
(n=t.getAttr("align"))&&(t.setAttr("align"),t.setStyle("text-align",n)),t.firstChild()?1==t.children.length&&"br"==t.children[0].tagName&&l.ie11below&&(t.removeChild(t.children[0]),
t.appendChild(UE.uNode.createFillChar())):l.ie11below?t.appendChild(UE.uNode.createFillChar()):t.innerHTML("<br />");
break;

case"div":
if(t.getAttr("cdata_tag"))break;
if(n=t.getAttr("class"),n&&/^line number\d+/.test(n))break;
if(!i)break;
for(var o,r=UE.uNode.createElement("p");o=t.firstChild();)"text"!=o.type&&UE.dom.dtd.$block[o.tagName]?r.firstChild()?(t.parentNode.insertBefore(r,t),
r=UE.uNode.createElement("p")):t.parentNode.insertBefore(o,t):r.appendChild(o);
r.firstChild()&&t.parentNode.insertBefore(r,t),t.parentNode.removeChild(t);
break;

case"dl":
t.tagName="ul";
break;

case"dt":
case"dd":
t.tagName="li";
break;

case"li":
var a=t.getAttr("class");
a&&/list\-/.test(a)||t.setAttr();
var s=t.getNodesByTagName("ol ul");
UE.utils.each(s,function(e){
t.parentNode.insertAfter(e,t);
});
break;

case"td":
case"th":
case"caption":
t.children&&t.children.length||t.appendChild(l.ie11below?UE.uNode.createText(" "):UE.uNode.createElement("br"));
}
}
"comment"==t.type&&t.parentNode.removeChild(t);
});
}),e.addInputNativeNodeRule(function(t){
if(l.ie11below)for(var n=function(e){
return b.isBody(e)||3==e.nodeType&&0==(e.nodeValue||"").replace(b.fillCharReg,"").length?!1:!0;
},i=t.getElementsByTagName("br"),o=0;o<i.length;o++){
var r=i[o];
if(r.parentNode){
var a,s=b.findPreviousSibling(r,n,!1),d=!1,c=b.findNextSibling(r,n,!1),u=!1;
if(!s)for(s=r;s&&(s=b.findParent(s,null,!1));){
if(/^(td|li)$/i.test(s.nodeName)){
s=null;
break;
}
if(a=b.findPreviousSibling(s,n,!1)){
s=a;
break;
}
}
d=!s||b.isBlockElm2(s)?!0:!1;
var a;
if(!c)for(c=r;c&&(c=b.findParent(c,null,!1));){
if(/^(td|li)$/i.test(c.nodeName)){
c=null;
break;
}
if(a=b.findNextSibling(c,n,!1)){
c=a;
break;
}
}
if(u=!c||b.isBlockElm2(c)?!0:!1,u===!1);else if(d===!1)r.parentNode.removeChild(r),
o-=1;else if(d===!0){
var f=e.document.createElement("div");
f.innerHTML='<span data-fillchar="1">'+b.fillChar+"</span>",r.parentNode.insertBefore(f.children[0],r),
r.parentNode.removeChild(r),o-=1;
}
}
}
}),e.addOutputRule(function(t){
var n;
t.traversal(function(t){
if("element"==t.type){
if(e.options.autoClearEmptyNode&&m.$inline[t.tagName]&&!m.$empty[t.tagName]&&(!t.attrs||u.isEmptyObject(t.attrs)))return void(t.firstChild()?"span"!=t.tagName||t.attrs&&!u.isEmptyObject(t.attrs)||t.parentNode.removeChild(t,!0):t.parentNode.removeChild(t));
switch(t.tagName){
case"div":
(n=t.getAttr("cdata_tag"))&&(t.tagName=n,t.appendChild(UE.uNode.createText(t.getAttr("cdata_data"))),
t.setAttr({
cdata_tag:"",
cdata_data:""
}));
break;

case"a":
(n=t.getAttr("_href"))&&t.setAttr({
href:n,
_href:""
});
break;

case"img":
(n=t.getAttr("_src")&&!t.getAttr("src"))&&t.setAttr({
src:t.getAttr("_src")
}),t.setAttr({
_src:""
});
break;

case"span":
l.ie11below&&t.getAttr("data-fillchar")&&0==t.innerHTML().replace(b.fillCharReg,"").length&&(t.parentNode.insertBefore(UE.uNode.createElement("br"),t),
t.parentNode.removeChild(t));
}
}
});
});
},UE.commands.inserthtml={
execCommand:function(e,t,n){
var i,o,r=this;
if(t&&r.fireEvent("beforeinserthtml",t)!==!0){
if(i=r.selection.getRange(),o=i.document.createElement("div"),o.style.display="inline",
!n){
var a=UE.htmlparser(t);
r.options.filterRules&&UE.filterNode(a,r.options.filterRules),r.filterInputRule(a),
t=a.toHtml();
}
o.innerHTML=u.trim(t);
var s=[];
if(!i.collapsed){
var d=i.startContainer;
if(b.isFillChar(d)&&i.setStartBefore(d),d=i.endContainer,b.isFillChar(d)&&i.setEndAfter(d),
i.txtToElmBoundary(),i.endContainer&&1==i.endContainer.nodeType&&(d=i.endContainer.childNodes[i.endOffset],
d&&b.isBr(d)&&i.setEndAfter(d)),0==i.startOffset&&(d=i.startContainer,b.isBoundaryNode(d,"firstChild")&&(d=i.endContainer,
i.endOffset==(3==d.nodeType?d.nodeValue.length:d.childNodes.length)&&b.isBoundaryNode(d,"lastChild")&&(r.body.innerHTML="<p>"+(l.ie11below?b.fillChar:"<br/>")+"</p>",
i.setStart(r.body.firstChild,0).collapse(!0)))),!i.collapsed&&i.deleteContents(),
1==i.startContainer.nodeType){
var c,f=i.startContainer.childNodes[i.startOffset];
if(f&&b.isBlockElm2(f)&&(c=f.previousSibling)&&b.isBlockElm2(c)){
for(i.setEnd(c,c.childNodes.length).collapse();f.firstChild;)c.appendChild(f.firstChild);
b.remove(f);
}
}
}
var f,h,c,p,g,v=0;
i.inFillChar()&&(f=i.startContainer,b.isFillChar(f)?(i.setStartBefore(f).collapse(!0),
b.remove(f)):b.isFillChar(f,!0)&&(f.nodeValue=f.nodeValue.replace(y,""),i.startOffset--,
i.collapsed&&i.collapse(!0)));
var C=b.findParentByTagName(i.startContainer,"li",!0);
if(C){
for(var N,x;f=o.firstChild;){
for(;f&&(3==f.nodeType||!b.isBlockElm2(f)||"HR"==f.tagName);)N=f.nextSibling,i.insertNode(f).collapse(),
s.push(f),x=f,f=N;
if(f)if(/^(ol|ul)$/i.test(f.tagName)){
for(;f.firstChild;)x=f.firstChild,b.insertAfter(C,f.firstChild),s.push(x),C=C.nextSibling;
b.remove(f);
}else{
var w;
N=f.nextSibling,w=r.document.createElement("li"),b.insertAfter(C,w),w.appendChild(f),
x=f,s.push(x),f=N,C=w;
}
}
C=b.findParentByTagName(i.startContainer,"li",!0),b.isEmptyBlock(C)&&b.remove(C),
x&&i.setStartAfter(x).collapse(!0).select(!0);
}else{
for(;f=o.firstChild;){
if(v){
for(var E=r.document.createElement("p");f&&(3==f.nodeType||!m.$block2[f.tagName]);)g=f.nextSibling,
E.appendChild(f),f=g;
E.firstChild&&(f=E);
}
if(i.insertNode(f),s.push(f),g=f.nextSibling,!v&&f.nodeType==b.NODE_ELEMENT&&b.isBlockElm2(f)){
if(f&&1==f.nodeType&&("p"==f.tagName.toLowerCase()||f.getElementsByTagName("p").length>0)){
var T=b.findParentByTagName(f,"p");
h=T&&!b.isBody(T)?T:b.findParent(f,function(e){
return b.isBlockElm2(e);
});
}else h=b.findParent(f,function(e){
return b.isBlockElm2(e);
});
if(h&&"body"!=h.nodeName.toLowerCase()&&(!m[h.nodeName]||!m[h.nodeName][f.nodeName]||f.parentNode!==h)){
if(m[h.nodeName]&&m[h.nodeName][f.nodeName])for(p=f.parentNode;p&&p!==h;)c=p,p=p.parentNode;else c=h;
b.breakParent(f,c||p);
var c=f.previousSibling;
c&&(b.trimWhiteTextNode(c),c.childNodes.length||b.remove(c)),!l.ie&&(N=f.nextSibling)&&b.isBlockElm2(N)&&N.lastChild&&!b.isBr(N.lastChild)&&N.appendChild(r.document.createElement("br")),
v=1;
}
}
var N=f.nextSibling;
if(!o.firstChild&&N&&b.isBlockElm2(N)){
i.setStart(N,0).collapse(!0);
break;
}
i.setEndAfter(f).collapse();
}
if(f=i.startContainer,g&&b.isBr(g)&&b.remove(g),b.isBlockElm2(f)&&b.isEmptyNode(f))if(g=f.nextSibling)b.remove(f),
1==g.nodeType&&m.$block2[g.tagName]&&i.setStart(g,0).collapse(!0).shrinkBoundary();else try{
f.innerHTML=l.ie11below?b.fillChar:"<br/>";
}catch(S){
i.setStartBefore(f),b.remove(f);
}
try{
i.select(!0);
}catch(S){}
}
return setTimeout(function(){
i=r.selection.getRange(),i.scrollToView(r.autoHeightEnabled,r.autoHeightEnabled?b.getXY(r.iframe).y-200:0),
r.fireEvent("afterinserthtml","",s);
},200),s;
}
}
},UE.plugins.autosubmit=function(){
var e=this;
e.commands.autosubmit={
execCommand:function(){
var e=this,t=b.findParentByTagName(e.iframe,"form",!1);
if(t){
if(e.fireEvent("beforesubmit")===!1)return;
e.sync(),t.submit();
}
}
},e.addshortcutkey({
autosubmit:"ctrl+13"
});
},UE.commands.imagefloat={
execCommand:function(e,t){
var n=this,i=n.selection.getRange();
if(!i.collapsed){
var o=i.getClosedNode();
if(o&&"IMG"==o.tagName)switch(t){
case"left":
case"right":
case"none":
for(var r,a,s,l=o.parentNode;m.$inline[l.tagName]||"A"==l.tagName;)l=l.parentNode;
if(r=l,"P"==r.tagName&&"center"==b.getStyle(r,"text-align")){
if(!b.isBody(r)&&1==b.getChildCount(r,function(e){
return!b.isBr(e)&&!b.isWhitespace(e);
}))if(a=r.previousSibling,s=r.nextSibling,a&&s&&1==a.nodeType&&1==s.nodeType&&a.tagName==s.tagName&&b.isBlockElm(a)){
for(a.appendChild(r.firstChild);s.firstChild;)a.appendChild(s.firstChild);
b.remove(r),b.remove(s);
}else b.setStyle(r,"text-align","");
i.selectNode(o).select();
}
b.setStyle(o,"float","none"==t?"":t),"none"==t&&b.removeAttributes(o,"align");
break;

case"center":
if("center"!=n.queryCommandValue("imagefloat")){
for(l=o.parentNode,b.setStyle(o,"float",""),b.removeAttributes(o,"align"),r=o;l&&1==b.getChildCount(l,function(e){
return!b.isBr(e)&&!b.isWhitespace(e);
})&&(m.$inline[l.tagName]||"A"==l.tagName);)r=l,l=l.parentNode;
i.setStartBefore(r).setCursor(!1),l=n.document.createElement("div"),l.appendChild(r),
b.setStyle(r,"float",""),n.execCommand("insertHtml",'<p id="_img_parent_tmp" style="text-align:center">'+l.innerHTML+"</p>"),
r=n.document.getElementById("_img_parent_tmp");
var d=r.getElementsByTagName("img")[0];
r.removeAttribute("id"),r=r.firstChild,i.selectNode(d).select(),s=r.parentNode.nextSibling,
s&&b.isEmptyNode(s)&&b.remove(s);
}
}
}
},
queryCommandValue:function(){
var e,t,n=this.selection.getRange();
return n.collapsed?"none":(e=n.getClosedNode(),e&&1==e.nodeType&&"IMG"==e.tagName?(t=e.getAttribute("align")||b.getComputedStyle(e,"float"),
"none"==t&&(t="center"==b.getComputedStyle(e.parentNode,"text-align")?"center":t),
{
left:1,
right:1,
center:1
}[t]?t:"none"):"none");
},
queryCommandState:function(){
var e,t=this.selection.getRange();
return t.collapsed?-1:(e=t.getClosedNode(),e&&1==e.nodeType&&"IMG"==e.tagName?0:-1);
}
},UE.plugins.justify=function(){
var e=b.isBlockElm,t={
left:1,
right:1,
center:1,
justify:1
},n=function(t,n){
var i=t.createBookmark(),o=function(e){
return 1==e.nodeType?"br"!=e.tagName.toLowerCase()&&!b.isBookmarkNode(e):!b.isWhitespace(e);
};
t.enlarge(!0);
for(var r,a=t.createBookmark(),s=b.getNextDomNode(a.start,!1,o),l=t.cloneRange();s&&!(b.getPosition(s,a.end)&b.POSITION_FOLLOWING);)if(3!=s.nodeType&&e(s))s=b.getNextDomNode(s,!0,o);else{
for(l.setStartBefore(s);s&&s!==a.end&&!e(s);)r=s,s=b.getNextDomNode(s,!1,null,function(t){
return!e(t);
});
l.setEndAfter(r);
var d=l.getCommonAncestor();
if(!b.isBody(d)&&e(d))b.setStyles(d,u.isString(n)?{
"text-align":n
}:n),s=d;else{
var c=t.document.createElement("p");
b.setStyles(c,u.isString(n)?{
"text-align":n
}:n);
var f=l.extractContents();
c.appendChild(f),l.insertNode(c),s=c;
}
s=b.getNextDomNode(s,!1,o);
}
return t.moveToBookmark(a).moveToBookmark(i);
};
UE.commands.justify={
execCommand:function(e,t){
var i,o=this.selection.getRange();
return o.collapsed&&(i=this.document.createTextNode("p"),o.insertNode(i)),n(o,t),
i&&(o.setStartBefore(i).collapse(!0),b.remove(i)),o.select(),!0;
},
queryCommandValue:function(){
var e=this.selection.getStart(),n=b.getComputedStyle(e,"text-align");
return t[n]?n:"left";
},
queryCommandState:function(){
var e=this.selection.getStart(),t=e&&b.findParentByTagName(e,["td","th","caption"],!0);
return t?-1:0;
}
};
},UE.plugins.font=function(){
function e(e){
for(var t;(t=e.parentNode)&&"SPAN"==t.tagName&&1==b.getChildCount(t,function(e){
return!b.isBookmarkNode(e)&&!b.isBr(e);
});)t.style.cssText+=e.style.cssText,b.remove(e,!0),e=t;
}
function t(e,t,n){
if(a[t]&&(e.adjustmentBoundary(),!e.collapsed&&1==e.startContainer.nodeType)){
var i=e.startContainer.childNodes[e.startOffset];
if(i&&b.isTagNode(i,"span")){
var o=e.createBookmark();
u.each(b.getElementsByTagName(i,"span"),function(e){
e.parentNode&&!b.isBookmarkNode(e)&&("backcolor"!=t||b.getComputedStyle(e,"background-color").toLowerCase()!==n)&&(b.removeStyle(e,a[t]),
0==e.style.cssText.replace(/^\s+$/,"").length&&b.remove(e,!0));
}),e.moveToBookmark(o);
}
}
}
function n(n,i,o){
var r,a=n.collapsed,s=n.createBookmark();
if(a)for(r=s.start.parentNode;m.$inline[r.tagName];)r=r.parentNode;else r=b.getCommonAncestor(s.start,s.end);
u.each(b.getElementsByTagName(r,"span"),function(t){
if(t.parentNode&&!b.isBookmarkNode(t)){
if(/\s*border\s*:\s*none;?\s*/i.test(t.style.cssText))return void(/^\s*border\s*:\s*none;?\s*$/.test(t.style.cssText)?b.remove(t,!0):b.removeStyle(t,"border"));
if(/border/i.test(t.style.cssText)&&"SPAN"==t.parentNode.tagName&&/border/i.test(t.parentNode.style.cssText)&&(t.style.cssText=t.style.cssText.replace(/border[^:]*:[^;]+;?/gi,"")),
"fontborder"!=i||"none"!=o)for(var n=t.nextSibling;n&&1==n.nodeType&&"SPAN"==n.tagName;)if(b.isBookmarkNode(n)&&"fontborder"==i)t.appendChild(n),
n=t.nextSibling;else{
if(n.style.cssText==t.style.cssText&&(b.moveChild(n,t),b.remove(n)),t.nextSibling===n)break;
n=t.nextSibling;
}
if(e(t),l.ie&&l.version>8){
var r=b.findParent(t,function(e){
return"SPAN"==e.tagName&&/background-color/.test(e.style.cssText);
});
r&&!/background-color/.test(t.style.cssText)&&(t.style.backgroundColor=r.style.backgroundColor);
}
}
}),n.moveToBookmark(s),t(n,i,o);
}
var i=this,o={
forecolor:"color",
backcolor:"background-color",
letterspacing:"letter-spacing",
fontsize:"font-size",
fontfamily:"font-family",
underline:"text-decoration",
strikethrough:"text-decoration",
fontborder:"border"
},r={
underline:1,
strikethrough:1,
fontborder:1,
forecolor:1,
fontsize:1,
backcolor:1
},a={
forecolor:"color",
backcolor:"background-color",
letterspacing:"letter-spacing",
fontsize:"font-size",
fontfamily:"font-family"
};
i.setOpt({
fontfamily:[{
name:"songti",
val:"宋体,SimSun"
},{
name:"yahei",
val:"微软雅黑,Microsoft YaHei"
},{
name:"kaiti",
val:"楷体,楷体_GB2312, SimKai"
},{
name:"heiti",
val:"黑体, SimHei"
},{
name:"lishu",
val:"隶书, SimLi"
},{
name:"andaleMono",
val:"andale mono"
},{
name:"arial",
val:"arial, helvetica,sans-serif"
},{
name:"arialBlack",
val:"arial black,avant garde"
},{
name:"comicSansMs",
val:"comic sans ms"
},{
name:"impact",
val:"impact,chicago"
},{
name:"timesNewRoman",
val:"times new roman"
}],
fontsize:[12,14,15,16,18,20,24]
}),i.addInputRule(function(e){
u.each(e.getNodesByTagName("u s del font strike"),function(e){
if("font"==e.tagName){
var t=[];
for(var n in e.attrs)switch(n){
case"size":
t.push("font-size:"+e.attrs[n]+"px");
break;

case"color":
t.push("color:"+e.attrs[n]);
break;

case"face":
t.push("font-family:"+e.attrs[n]);
break;

case"style":
t.push(e.attrs[n]);
}
e.attrs={
style:t.join(";")
};
}else{
var i="u"==e.tagName?"underline":"line-through";
e.attrs={
style:(e.getAttr("style")||"")+"text-decoration:"+i+";"
};
}
e.tagName="span";
});
});
for(var s in o)!function(e,t){
UE.commands[e]={
execCommand:function(i,o){
o=o||(this.queryCommandState(i)?"none":"underline"==i?"underline":"fontborder"==i?"1px solid #000":"line-through");
var a,s=this,d=this.selection.getRange(),u=s.fireEvent("getCommonReportIDKey",[i,o+""]);
if(u){
s.fireEvent("reportAddNum",u.id,u.key,1);
var f=s.fireEvent("getCommonReportIDKey",[i,"all"]);
f&&s.fireEvent("reportAddNum",f.id,f.key,1);
}
if("default"==o)d.collapsed&&(a=s.document.createTextNode("font"),d.insertNode(a).select()),
s.execCommand("removeFormat","span,a",t),a&&(d.setStartBefore(a).collapse(!0),b.remove(a)),
n(d,i,o),d.select();else if(d.collapsed){
var m=b.findParentByTagName(d.startContainer,"span",!0);
if(a=s.document.createTextNode("font"),!m||m.children.length||m[l.ie?"innerText":"textContent"].replace(y,"").length){
if(d.insertNode(a),d.selectNode(a).select(),m=d.document.createElement("span"),r[e]){
if(b.findParentByTagName(a,"a",!0))return d.setStartBefore(a).setCursor(),void b.remove(a);
s.execCommand("removeFormat","span,a",t);
}
if(m.style.cssText=t+":"+o,a.parentNode.insertBefore(m,a),!l.ie||l.ie&&9==l.version)for(var h=m.parentNode;!b.isBlockElm(h);)"SPAN"==h.tagName&&(m.style.cssText=h.style.cssText+";"+m.style.cssText),
h=h.parentNode;
c?setTimeout(function(){
d.setStart(m,0).collapse(!0),n(d,i,o),d.select();
}):(d.setStart(m,0).collapse(!0),n(d,i,o),d.select());
}else d.insertNode(a),r[e]&&(d.selectNode(a).select(),s.execCommand("removeFormat","span,a",t,null),
m=b.findParentByTagName(a,"span",!0),d.setStartBefore(a)),m&&(m.style.cssText+=";"+t+":"+o),
d.collapse(!0).select();
b.remove(a);
}else r[e]&&(s.queryCommandValue(e)||"backcolor"==e)&&s.execCommand("removeFormat","span,a",t),
d=s.selection.getRange(),d.applyInlineStyle("span",{
style:t+":"+o
}),n(d,i,o),d.select();
return!0;
},
queryCommandValue:function(e){
var n=this.selection.getStart();
if("underline"==e||"strikethrough"==e){
for(var i,o=n;o&&!b.isBlockElm(o)&&!b.isBody(o);){
if(1==o.nodeType&&(i=b.getComputedStyle(o,t),"none"!=i))return i;
o=o.parentNode;
}
return"none";
}
if("fontborder"==e){
for(var r,a=n;a&&m.$inline[a.tagName];){
if((r=b.getComputedStyle(a,"border"))&&/1px/.test(r)&&/solid/.test(r))return r;
a=a.parentNode;
}
return"";
}
if("fontsize"==e.toLowerCase()){
for(var s,o=n;!b.isBody(o)&&(s=b.getComputedStyle(o,t),!parseInt(s));)o=o.parentNode;
var a=/^([\d\.]+)(\w+)$/.exec(s);
return a?Math.floor(a[1])+a[2]:s;
}
return b.getComputedStyle(n,t);
},
queryCommandState:function(e){
if(!r[e])return 0;
var t=this.queryCommandValue(e);
return"fontborder"==e?/1px/.test(t)&&/solid/.test(t):t==("underline"==e?"underline":"line-through");
}
};
}(s,o[s]);
},UE.plugins.removeformat=function(){
var e=this;
e.setOpt({
removeFormatTags:"b,big,code,del,dfn,em,font,i,ins,kbd,q,samp,small,span,strike,strong,sub,sup,tt,u,var",
removeFormatAttributes:"style,lang,width,height,align,hspace,valign"
}),e.commands.removeformat={
execCommand:function(e,t,n,i,o){
function r(e){
if(3==e.nodeType||"span"!=e.tagName.toLowerCase())return 0;
if(l.ie){
var t=e.attributes;
if(t.length){
for(var n=0,i=t.length;i>n;n++)if(t[n].specified)return 0;
return 1;
}
}
return!e.attributes.length;
}
function a(e){
var t=e.createBookmark();
if(e.collapsed&&e.enlarge(!0),!o){
var i=b.findParentByTagName(e.startContainer,"a",!0);
i&&e.setStartBefore(i),i=b.findParentByTagName(e.endContainer,"a",!0),i&&e.setEndAfter(i);
}
for(d=e.createBookmark(),g=d.start;(c=g.parentNode)&&!b.isBlockElm(c);)b.breakParent(g,c),
b.clearEmptySibling(g);
if(d.end){
for(g=d.end;(c=g.parentNode)&&!b.isBlockElm(c);)b.breakParent(g,c),b.clearEmptySibling(g);
for(var a,s=b.getNextDomNode(d.start,!1,p);s&&s!=d.end;)a=b.getNextDomNode(s,!0,p),
m.$empty[s.tagName.toLowerCase()]||b.isBookmarkNode(s)||(u.test(s.tagName)?n?(b.removeStyle(s,n),
r(s)&&"text-decoration"!=n&&b.remove(s,!0)):b.remove(s,!0):m.$tableContent[s.tagName]||m.$list[s.tagName]||(b.removeAttributes(s,f),
r(s)&&b.remove(s,!0))),s=a;
}
var l=d.start.parentNode;
!b.isBlockElm(l)||m.$tableContent[l.tagName]||m.$list[l.tagName]||b.removeAttributes(l,f),
l=d.end.parentNode,d.end&&b.isBlockElm(l)&&!m.$tableContent[l.tagName]&&!m.$list[l.tagName]&&b.removeAttributes(l,f),
e.moveToBookmark(d).moveToBookmark(t);
for(var h,g=e.startContainer,v=e.collapsed;1==g.nodeType&&b.isEmptyNode(g)&&m.$removeEmpty[g.tagName];)h=g.parentNode,
e.setStartBefore(g),e.startContainer===e.endContainer&&e.endOffset--,b.remove(g),
g=h;
if(!v)for(g=e.endContainer;1==g.nodeType&&b.isEmptyNode(g)&&m.$removeEmpty[g.tagName];)h=g.parentNode,
e.setEndBefore(g),b.remove(g),g=h;
}
var d,c,u=new RegExp("^(?:"+(t||this.options.removeFormatTags).replace(/,/g,"|")+")$","i"),f=n?[]:(i||this.options.removeFormatAttributes).split(","),h=new s.Range(this.document),p=function(e){
return 1==e.nodeType;
};
h=this.selection.getRange(),a(h),h.select();
}
};
},UE.plugins.blockquote=function(){
function e(e){
return b.filterNodeList(e.selection.getStartElementPath(),"blockquote");
}
var t=this;
t.commands.blockquote={
execCommand:function(t,n){
var i=this.selection.getRange(),o=e(this),r=m.blockquote,a=i.createBookmark();
if(o){
var s=i.startContainer,l=b.isBlockElm(s)?s:b.findParent(s,function(e){
return b.isBlockElm(e);
}),d=i.endContainer,c=b.isBlockElm(d)?d:b.findParent(d,function(e){
return b.isBlockElm(e);
});
l=b.findParentByTagName(l,"li",!0)||l,c=b.findParentByTagName(c,"li",!0)||c,"LI"==l.tagName||"TD"==l.tagName||l===o||b.isBody(l)?b.remove(o,!0):b.breakParent(l,o),
l!==c&&(o=b.findParentByTagName(c,"blockquote"),o&&("LI"==c.tagName||"TD"==c.tagName||b.isBody(c)?o.parentNode&&b.remove(o,!0):b.breakParent(c,o)));
for(var u,f=b.getElementsByTagName(this.document,"blockquote"),h=0;u=f[h++];)u.childNodes.length?b.getPosition(u,l)&b.POSITION_FOLLOWING&&b.getPosition(u,c)&b.POSITION_PRECEDING&&b.remove(u,!0):b.remove(u);
}else{
for(var p=i.cloneRange(),g=1==p.startContainer.nodeType?p.startContainer:p.startContainer.parentNode,v=g,y=1;;){
if(b.isBody(g)){
v!==g?i.collapsed?(p.selectNode(v),y=0):p.setStartBefore(v):p.setStart(g,0);
break;
}
if(!r[g.tagName]){
i.collapsed?(p.selectNode(v),y=0):p.setStartBefore(v);
break;
}
v=g,g=g.parentNode;
}
if(y)for(v=g=g=1==p.endContainer.nodeType?p.endContainer:p.endContainer.parentNode;;){
if(b.isBody(g)){
v!==g?p.setEndAfter(v):p.setEnd(g,g.childNodes.length);
break;
}
if(!r[g.tagName]){
p.setEndAfter(v);
break;
}
v=g,g=g.parentNode;
}
g=i.document.createElement("blockquote"),b.setAttributes(g,n),g.appendChild(p.extractContents()),
p.insertNode(g);
for(var C,N=b.getElementsByTagName(g,"blockquote"),h=0;C=N[h++];)C.parentNode&&b.remove(C,!0);
}
i.moveToBookmark(a).select();
},
queryCommandState:function(){
return e(this)?1:0;
}
};
},UE.commands.indent={
execCommand:function(){
var e=this,t=e.queryCommandState("indent")?"0em":e.options.indentValue||"2em";
e.execCommand("Paragraph","p",{
style:"text-indent:"+t
});
},
queryCommandState:function(){
var e=b.filterNodeList(this.selection.getStartElementPath(),"p h1 h2 h3 h4 h5 h6");
return e&&e.style.textIndent&&parseInt(e.style.textIndent)?1:0;
}
},UE.plugins.selectall=function(){
var e=this;
e.commands.selectall={
execCommand:function(){
var e=this,t=e.body,n=e.selection.getRange();
n.selectNodeContents(t),b.isEmptyBlock(t)&&(l.opera&&t.firstChild&&1==t.firstChild.nodeType&&n.setStartAtFirst(t.firstChild),
n.collapse(!0)),n.select(!0);
},
notNeedUndo:1
},e.addshortcutkey({
selectAll:"ctrl+65"
});
},UE.plugins.paragraph=function(){
var e=this,t=b.isBlockElm,n=["TD","LI","PRE"],i=function(e,i,o,r){
var a,s=e.createBookmark(),l=function(e){
return 1==e.nodeType?"br"!=e.tagName.toLowerCase()&&!b.isBookmarkNode(e):!b.isWhitespace(e);
};
e.enlarge(!0);
for(var d,c=e.createBookmark(),f=b.getNextDomNode(c.start,!1,l),m=e.cloneRange();f&&!(b.getPosition(f,c.end)&b.POSITION_FOLLOWING);)if(f&&"justifyindent"==r&&/^(li)|(ol)|(ul)$/i.test(f.nodeName))"li"==f.nodeName.toLowerCase()&&(f=b.findParent(f,function(e){
return e&&/^(ol)|(ul)$/i.test(e.nodeName)?!0:void 0;
})),b.setAttributes(f,o),f=b.getNextDomNode(f,!1,l);else if(3!=f.nodeType&&t(f))f=b.getNextDomNode(f,!0,l);else{
for(m.setStartBefore(f);f&&f!==c.end&&!t(f);)d=f,f=b.getNextDomNode(f,!1,null,function(e){
return!t(e);
});
m.setEndAfter(d),a=e.document.createElement(i),o&&(b.setAttributes(a,o),r&&"customstyle"==r&&o.style&&(a.style.cssText=o.style)),
a.appendChild(m.extractContents()),b.isEmptyNode(a)&&b.fillChar(e.document,a),m.insertNode(a);
var h=a.parentNode;
t(h)&&!b.isBody(a.parentNode)&&-1==u.indexOf(n,h.tagName)&&(r&&"customstyle"==r||(h.getAttribute("dir")&&a.setAttribute("dir",h.getAttribute("dir")),
h.style.cssText&&(a.style.cssText=h.style.cssText+";"+a.style.cssText),h.style.textAlign&&!a.style.textAlign&&(a.style.textAlign=h.style.textAlign),
h.style.textIndent&&!a.style.textIndent&&(a.style.textIndent=h.style.textIndent),
h.style.padding&&!a.style.padding&&(a.style.padding=h.style.padding)),o&&/h\d/i.test(h.tagName)&&!/h\d/i.test(a.tagName)?(b.setAttributes(h,o),
r&&"customstyle"==r&&o.style&&(h.style.cssText=o.style),b.remove(a,!0),a=h):b.remove(a.parentNode,!0)),
f=-1!=u.indexOf(n,h.tagName)?h:a,f=b.getNextDomNode(f,!1,l);
}
return e.moveToBookmark(c).moveToBookmark(s);
};
e.setOpt("paragraph",{
p:"",
h1:"",
h2:"",
h3:"",
h4:"",
h5:"",
h6:""
}),e.commands.paragraph={
execCommand:function(e,t,n,o){
var r=this.selection.getRange();
if(r.collapsed){
var a=this.document.createTextNode("p");
if(r.insertNode(a),l.ie){
var s=a.previousSibling;
s&&b.isWhitespace(s)&&b.remove(s),s=a.nextSibling,s&&b.isWhitespace(s)&&b.remove(s);
}
}
if(r=i(r,t,n,o),a&&(r.setStartBefore(a).collapse(!0),pN=a.parentNode,b.remove(a),
b.isBlockElm(pN)&&b.isEmptyNode(pN)&&b.fillNode(this.document,pN)),l.gecko&&r.collapsed&&1==r.startContainer.nodeType){
var d=r.startContainer.childNodes[r.startOffset];
d&&1==d.nodeType&&d.tagName.toLowerCase()==t&&r.setStart(d,0).collapse(!0);
}
return r.select(),!0;
},
queryCommandValue:function(){
var e=b.filterNodeList(this.selection.getStartElementPath(),"p h1 h2 h3 h4 h5 h6");
return e?e.tagName.toLowerCase():"";
}
};
},UE.plugins.horizontal=function(){
var e=this;
e.commands.horizontal={
execCommand:function(e){
var t=this;
if(-1!==t.queryCommandState(e)){
t.execCommand("insertHtml","<hr>");
var n=t.selection.getRange(),i=n.startContainer;
if(1==i.nodeType&&!i.childNodes[n.startOffset]){
var o;
(o=i.childNodes[n.startOffset-1])&&1==o.nodeType&&"HR"==o.tagName&&("p"==t.options.enterTag?(o=t.document.createElement("p"),
n.insertNode(o),n.setStart(o,0).setCursor()):(o=t.document.createElement("br"),n.insertNode(o),
n.setStartBefore(o).setCursor()));
}
return!0;
}
},
queryCommandState:function(){
return b.filterNodeList(this.selection.getStartElementPath(),"table")?-1:0;
}
},e.addListener("delkeydown",function(e,t){
var n=this.selection.getRange();
if(n.txtToElmBoundary(!0),b.isStartInblock(n)){
var i=n.startContainer,o=i.previousSibling;
if(o&&b.isTagNode(o,"hr"))return b.remove(o),n.select(),b.preventDefault(t),!0;
}
});
},UE.plugins.rowspacing=function(){
var e=this;
e.setOpt({
rowspacingtop:["5","10","15","20","25"],
rowspacingbottom:["5","10","15","20","25"]
}),e.commands.rowspacing={
execCommand:function(e,t,n){
return this.execCommand("paragraph","p",{
style:"margin-"+n+":"+t+"px"
}),!0;
},
queryCommandValue:function(e,t){
var n,i=b.filterNodeList(this.selection.getStartElementPath(),function(e){
return b.isBlockElm(e);
});
return i?(n=b.getComputedStyle(i,"margin-"+t).replace(/[^\d]/g,""),n?n:0):0;
}
};
},UE.plugins.justifyindent=function(){
var e=this;
e.commands.justifyindent={
execCommand:function(e,t){
var n=this.fireEvent("getCommonReportIDKey",[e,t+""]);
if(n){
this.fireEvent("reportAddNum",n.id,n.key,1);
var i=this.fireEvent("getCommonReportIDKey",[e,"all"]);
i&&this.fireEvent("reportAddNum",i.id,i.key,1);
}
return this.execCommand("paragraph","p",{
style:"margin-left:"+t+"px;margin-right:"+t+"px"
},"justifyindent"),!0;
},
queryCommandValue:function(){
var e,t=b.findParents(this.selection.getStart(),!0,function(e){
return/^(ol)|(ul)$/i.test(e.nodeName)?!0:void 0;
},!0);
if(e=t&&t.length>0?t[0]:b.filterNodeList(this.selection.getStartElementPath(),function(e){
return b.isBlockElm(e);
})){
var n=b.getComputedStyle(e,"margin-left").replace(/[^\d]/g,""),i=b.getComputedStyle(e,"margin-right").replace(/[^\d]/g,"");
return n&&n==i?n:0;
}
return 0;
}
};
},UE.plugins.lineheight=function(){
var e=this;
e.setOpt({
lineheight:["1","1.5","1.75","2","3","4","5"]
}),e.commands.lineheight={
execCommand:function(e,t){
return this.execCommand("paragraph","p",{
style:"line-height:"+("1"==t?"normal":t+"em")
}),!0;
},
queryCommandValue:function(){
var e=b.filterNodeList(this.selection.getStartElementPath(),function(e){
return b.isBlockElm(e);
});
if(e){
var t=b.getComputedStyle(e,"line-height");
return"normal"==t?1:t.replace(/[^\d.]*/gi,"");
}
}
};
},UE.plugins.insertcode=function(){
var e=this;
e.ready(function(){
u.cssRule("pre","pre{margin:.5em 0;padding:.4em .6em;border-radius:8px;background:#f8f8f8;}",e.document);
}),e.setOpt("insertcode",{
as3:"ActionScript3",
bash:"Bash/Shell",
cpp:"C/C++",
css:"Css",
cf:"CodeFunction",
"c#":"C#",
delphi:"Delphi",
diff:"Diff",
erlang:"Erlang",
groovy:"Groovy",
html:"Html",
java:"Java",
jfx:"JavaFx",
js:"Javascript",
pl:"Perl",
php:"Php",
plain:"Plain Text",
ps:"PowerShell",
python:"Python",
ruby:"Ruby",
scala:"Scala",
sql:"Sql",
vb:"Vb",
xml:"Xml"
}),e.commands.insertcode={
execCommand:function(e,t){
var n=this,i=n.selection.getRange(),o=b.findParentByTagName(i.startContainer,"pre",!0);
if(o)o.className="brush:"+t+";toolbar:false;";else{
var r="";
if(i.collapsed)r=l.ie&&l.ie11below?l.version<=8?"&nbsp;":"":"<br/>";else{
var a=i.extractContents(),s=n.document.createElement("div");
s.appendChild(a),u.each(UE.filterNode(UE.htmlparser(s.innerHTML.replace(/[\r\t]/g,"")),n.options.filterTxtRules).children,function(e){
if(l.ie&&l.ie11below&&l.version>8)"element"==e.type?"br"==e.tagName?r+="\n":m.$empty[e.tagName]||(u.each(e.children,function(t){
"element"==t.type?"br"==t.tagName?r+="\n":m.$empty[e.tagName]||(r+=t.innerText()):r+=t.data;
}),/\n$/.test(r)||(r+="\n")):r+=e.data+"\n",!e.nextSibling()&&/\n$/.test(r)&&(r=r.replace(/\n$/,""));else if(l.ie&&l.ie11below)"element"==e.type?"br"==e.tagName?r+="<br>":m.$empty[e.tagName]||(u.each(e.children,function(t){
"element"==t.type?"br"==t.tagName?r+="<br>":m.$empty[e.tagName]||(r+=t.innerText()):r+=t.data;
}),/br>$/.test(r)||(r+="<br>")):r+=e.data+"<br>",!e.nextSibling()&&/<br>$/.test(r)&&(r=r.replace(/<br>$/,""));else if(r+="element"==e.type?m.$empty[e.tagName]?"":e.innerText():e.data,
!/br\/?\s*>$/.test(r)){
if(!e.nextSibling())return;
r+="<br>";
}
});
}
n.execCommand("inserthtml",'<pre id="coder"class="brush:'+t+';toolbar:false">'+r+"</pre>",!0),
o=n.document.getElementById("coder"),b.removeAttributes(o,"id");
var d=o.previousSibling;
d&&(3==d.nodeType&&1==d.nodeValue.length&&l.ie&&6==l.version||b.isEmptyBlock(d))&&b.remove(d);
var i=n.selection.getRange();
b.isEmptyBlock(o)?i.setStart(o,0).setCursor(!1,!0):i.selectNodeContents(o).select();
}
},
queryCommandValue:function(){
var e=this.selection.getStartElementPath(),t="";
return u.each(e,function(e){
if("PRE"==e.nodeName){
var n=e.className.match(/brush:([^;]+)/);
return t=n&&n[1]?n[1]:"",!1;
}
}),t;
}
},e.addOutputRule(function(e){
u.each(e.getNodesByTagName("pre"),function(){});
}),e.notNeedCodeQuery={
help:1,
undo:1,
redo:1,
source:1,
print:1,
searchreplace:1,
fullscreen:1,
preview:1,
insertparagraph:1,
elementpath:1,
highlightcode:1,
insertcode:1,
inserthtml:1,
selectall:1
};
e.queryCommandState;
e.queryCommandState=function(e){
var t=this;
return!t.notNeedCodeQuery[e.toLowerCase()]&&t.selection&&t.queryCommandValue("insertcode")?-1:UE.Editor.prototype.queryCommandState.apply(this,arguments);
},e.addListener("beforeenterkeydown",function(){
var t=e.selection.getRange(),n=b.findParentByTagName(t.startContainer,"pre",!0);
if(n){
if(e.fireEvent("saveScene"),t.collapsed||t.deleteContents(),l.ie)if(l.version>8){
var i=e.document.createTextNode("\n"),o=t.startContainer;
if(0==t.startOffset){
var r=o.previousSibling;
if(r){
t.insertNode(i);
var a=e.document.createTextNode(" ");
t.setStartAfter(i).insertNode(a).setStart(a,0).collapse(!0).select(!0);
}
}else{
t.insertNode(i).setStartAfter(i);
var a=e.document.createTextNode(" ");
o=t.startContainer.childNodes[t.startOffset],o&&!/^\n/.test(o.nodeValue)&&t.setStartBefore(i),
t.insertNode(a).setStart(a,0).collapse(!0).select(!0);
}
}else{
var s=e.document.createElement("br");
t.insertNode(s),t.insertNode(e.document.createTextNode(b.fillChar)),t.setStartAfter(s),
n=s.previousSibling;
for(var d;n;)if(d=n,n=n.previousSibling,!n||"BR"==n.nodeName){
n=d;
break;
}
if(n){
for(var c="";n&&"BR"!=n.nodeName&&new RegExp("^[ "+b.fillChar+"]*$").test(n.nodeValue);)c+=n.nodeValue,
n=n.nextSibling;
if("BR"!=n.nodeName){
var u=n.nodeValue.match(new RegExp("^([ "+b.fillChar+"]+)"));
u&&u[1]&&(c+=u[1]);
}
c=e.document.createTextNode(c),t.insertNode(c).setStartAfter(c);
}
t.collapse(!0).select();
}else{
var n,s=e.document.createElement("br");
t.insertNode(s).setStartAfter(s).collapse(!0);
var f=s.nextSibling;
f?t.setStartAfter(s):t.insertNode(s.cloneNode(!1)),n=s.previousSibling;
for(var d;n;)if(d=n,n=n.previousSibling,!n||"BR"==n.nodeName){
n=d;
break;
}
if(n){
for(var c="";n&&"BR"!=n.nodeName&&new RegExp("^[\\s"+b.fillChar+"]*$").test(n.nodeValue);)c+=n.nodeValue,
n=n.nextSibling;
if(n&&n.nodeValue&&n.nodeName&&"BR"!=n.nodeName){
var u=n.nodeValue.match(new RegExp("^([\\s"+b.fillChar+"]+)"));
u&&u[1]&&(c+=u[1]);
}
c&&(c=e.document.createTextNode(c),t.insertNode(c).setStartAfter(c));
}
t.collapse(!0).select(!0);
}
return e.fireEvent("saveScene"),!0;
}
}),e.addListener("tabkeydown",function(t,n){
var i=e.selection.getRange(),o=b.findParentByTagName(i.startContainer,"pre",!0);
if(o){
if(e.fireEvent("saveScene"),n.shiftKey);else if(i.collapsed){
var r=e.document.createTextNode("    ");
i.insertNode(r).setStartAfter(r).collapse(!0).select(!0);
}else{
for(var a=i.createBookmark(),s=a.start.previousSibling;s;){
if(o.firstChild===s&&!b.isBr(s)){
o.insertBefore(e.document.createTextNode("    "),s);
break;
}
if(b.isBr(s)){
o.insertBefore(e.document.createTextNode("    "),s.nextSibling);
break;
}
s=s.previousSibling;
}
var l=a.end;
for(s=a.start.nextSibling,o.firstChild===a.start&&o.insertBefore(e.document.createTextNode("    "),s.nextSibling);s&&s!==l;){
if(b.isBr(s)&&s.nextSibling){
if(s.nextSibling===l)break;
o.insertBefore(e.document.createTextNode("    "),s.nextSibling);
}
s=s.nextSibling;
}
i.moveToBookmark(a).select();
}
return e.fireEvent("saveScene"),!0;
}
}),e.addListener("beforeinserthtml",function(){
{
var e=this,t=e.selection.getRange();
b.findParentByTagName(t.startContainer,"pre",!0);
}
}),e.addListener("keydown",function(e,t){
var n=this,i=t.keyCode||t.which;
if(40==i){
var o,r=n.selection.getRange(),a=r.startContainer;
if(r.collapsed&&(o=b.findParentByTagName(r.startContainer,"pre",!0))&&!o.nextSibling){
for(var s=o.lastChild;s&&"BR"==s.nodeName;)s=s.previousSibling;
(s===a||r.startContainer===o&&r.startOffset==o.childNodes.length)&&(n.execCommand("insertparagraph"),
b.preventDefault(t));
}
}
}),e.addListener("delkeydown",function(t,n){
var i=this.selection.getRange();
i.txtToElmBoundary(!0);
var o=i.startContainer;
if(b.isTagNode(o,"pre")&&i.collapsed&&b.isStartInblock(i)){
var r=e.document.createElement("p");
return b.fillNode(e.document,r),o.parentNode.insertBefore(r,o),b.remove(o),i.setStart(r,0).setCursor(!1,!0),
b.preventDefault(n),!0;
}
});
},UE.commands.cleardoc={
execCommand:function(){
var e=this,t=e.options.enterTag,n=e.selection.getRange();
"br"==t?(e.body.innerHTML="<br/>",n.setStart(e.body,0).setCursor()):(e.body.innerHTML="<p>"+(l.ie11below?b.fillChar:"<br/>")+"</p>",
n.setStart(e.body.firstChild,0).setCursor(!1,!0)),setTimeout(function(){
e.fireEvent("clearDoc");
},0);
}
},UE.plugins.wordcount=function(){
var e=this;
e.addListener("contentchange",function(){
e.fireEvent("wordcount");
});
var t;
e.addListener("ready",function(){
var e=this;
b.on(e.body,"keyup",function(n){
var i=n.keyCode||n.which,o={
16:1,
18:1,
20:1,
37:1,
38:1,
39:1,
40:1
};
i in o||(clearTimeout(t),t=setTimeout(function(){
e.fireEvent("wordcount");
},200));
});
});
},UE.plugins.dragdrop=function(){
var e=this;
e.ready(function(){
b.on(this.body,"dragend",function(){
var t=e.selection.getRange(),n=t.getClosedNode()||e.selection.getStart();
if(n&&"IMG"==n.tagName){
for(var i,o=n.previousSibling;(i=n.nextSibling)&&1==i.nodeType&&"SPAN"==i.tagName&&!i.firstChild;)b.remove(i);
(!o||1!=o.nodeType||b.isEmptyBlock(o))&&o||i&&(!i||b.isEmptyBlock(i))||(o&&"P"==o.tagName&&!b.isEmptyBlock(o)?(o.appendChild(n),
b.moveChild(i,o),b.remove(i)):i&&"P"==i.tagName&&!b.isEmptyBlock(i)&&i.insertBefore(n,i.firstChild),
o&&"P"==o.tagName&&b.isEmptyBlock(o)&&b.remove(o),i&&"P"==i.tagName&&b.isEmptyBlock(i)&&b.remove(i),
t.selectNode(n).select(),e.fireEvent("saveScene"));
}
});
});
},UE.plugins.undo=function(){
function e(e,t){
if(e.length!=t.length)return 0;
for(var n=0,i=e.length;i>n;n++)if(e[n]!=t[n])return 0;
return 1;
}
function t(t,n){
return t.collapsed!=n.collapsed?0:e(t.startAddress,n.startAddress)&&e(t.endAddress,n.endAddress)?1:0;
}
function n(){
var e=a.editor.ui.buttons.undo,t=a.editor.ui.buttons.redo,n=d.queryCommandState("undo"),i=d.queryCommandState("redo");
-1==n?(e.setDisabled(!0),e.setChecked(!1)):(e.setDisabled(!1),e.setChecked(n)),-1==i?(t.setDisabled(!0),
t.setChecked(!1)):(t.setDisabled(!1),t.setChecked(i));
}
function i(){
this.list=[],this.index=0,this.hasUndo=!1,this.hasRedo=!1,this.undo=function(){
if(this.hasUndo){
if(!this.list[this.index-1]&&1==this.list.length)return void this.reset();
for(;this.list[this.index].content==this.list[this.index-1].content;)if(this.index--,
0==this.index)return this.restore(0);
this.restore(--this.index);
}
},this.redo=function(){
if(this.hasRedo){
for(;this.list[this.index].content==this.list[this.index+1].content;)if(this.index++,
this.index==this.list.length-1)return this.restore(this.index);
this.restore(++this.index);
}
},this.restore=function(){
var e=this.editor,t=this.list[this.index],n=UE.htmlparser(t.content.replace(m,""));
e.options.autoClearEmptyNode=!1,e.filterInputRule(n),e.options.autoClearEmptyNode=p,
e.document.body.innerHTML=n.toHtml(),e.fireEvent("afterscencerestore"),l.ie&&u.each(b.getElementsByTagName(e.document,"td th caption p"),function(t){
b.isEmptyNode(t)&&b.fillNode(e.document,t);
});
try{
var i=new s.Range(e.document).moveToAddress(t.address);
i.select(h[i.startContainer.nodeName.toLowerCase()]);
}catch(o){}
this.editor.fireEvent("hide_common_popup"),this.update(),this.clearKey(),e.fireEvent("reset",!0);
},this.getScene=function(){
var e=this.editor,t=e.selection.getRange(),n=t.createAddress(!1,!0);
e.fireEvent("beforegetscene");
var i=UE.htmlparser(e.body.innerHTML);
e.options.autoClearEmptyNode=!1,e.filterOutputRule(i),e.options.autoClearEmptyNode=p;
var o=i.toHtml();
return e.fireEvent("aftergetscene"),{
address:n,
content:o
};
},this.save=function(e,n){
clearTimeout(r);
var i=this.getScene(n),o=this.list[this.index];
this.editor.fireEvent("beforesavescene",i),o&&o.content==i.content&&(e?1:t(o.address,i.address))||(this.list=this.list.slice(0,this.index+1),
this.list.push(i),this.list.length>c&&this.list.shift(),this.index=this.list.length-1,
this.clearKey(),this.update());
},this.update=function(){
this.hasRedo=!!this.list[this.index+1],this.hasUndo=!!this.list[this.index-1],n();
},this.reset=function(){
this.list=[],this.index=0,this.hasUndo=!1,this.hasRedo=!1,this.clearKey(),this.editor.fireEvent("hide_common_popup");
},this.clearKey=function(){
y=0,g=null;
};
}
function o(){
this.undoManger.save();
}
var r,d=this,c=d.options.maxUndoCount||20,f=d.options.maxInputCount||20,m=new RegExp(b.fillChar+"|</hr>","gi"),h={
ol:1,
ul:1,
table:1,
tbody:1,
tr:1,
body:1
},p=d.options.autoClearEmptyNode;
d.undoManger=new i,d.undoManger.editor=d,d.addListener("saveScene",function(){
var e=Array.prototype.splice.call(arguments,1);
this.undoManger.save.apply(this.undoManger,e);
}),d.addListener("beforeexeccommand",o),d.addListener("afterexeccommand",o),d.addListener("reset",function(e,t){
t||this.undoManger.reset();
}),d.commands.redo=d.commands.undo={
execCommand:function(e){
this.undoManger[e]();
},
queryCommandState:function(e){
return this.undoManger["has"+("undo"==e.toLowerCase()?"Undo":"Redo")]?0:-1;
},
notNeedUndo:1
};
var g,v={
16:1,
17:1,
18:1,
37:1,
38:1,
39:1,
40:1
},y=0,C=!1;
d.addListener("ready",function(){
b.on(this.body,"compositionstart",function(){
C=!0;
}),b.on(this.body,"compositionend",function(){
C=!1;
});
}),d.addshortcutkey({
Undo:"ctrl+90",
Redo:"ctrl+89"
});
var N=!0;
d.addListener("keydown",function(e,t){
function n(e){
e.selection.getRange().collapsed&&e.fireEvent("contentchange"),e.undoManger.save(!1,!0),
e.fireEvent("selectionchange");
}
var i=this,o=t.keyCode||t.which;
if(!(v[o]||t.ctrlKey||t.metaKey||t.shiftKey||t.altKey)){
if(C)return;
if(!i.selection.getRange().collapsed)return i.undoManger.save(!1,!0),void(N=!1);
0==i.undoManger.list.length&&i.undoManger.save(!0),clearTimeout(r),r=setTimeout(function(){
if(C)var e=setInterval(function(){
C||(n(i),clearInterval(e));
},300);else n(i);
},200),g=o,y++,y>=f&&n(i);
}
}),d.addListener("keyup",function(e,t){
var n=t.keyCode||t.which;
if(!(v[n]||t.ctrlKey||t.metaKey||t.shiftKey||t.altKey)){
if(C)return;
N||(this.undoManger.save(!1,!0),N=!0);
}
});
},UE.plugins.paste=function(){
function e(e){
var t=this.document;
if(!t.getElementById("baidu_pastebin")){
var n=this.selection.getRange(),i=n.createBookmark(),o=t.createElement("div");
o.id="baidu_pastebin",l.webkit&&o.appendChild(t.createTextNode(b.fillChar+b.fillChar)),
t.body.appendChild(o),i.start.style.display="",o.style.cssText="position:absolute;width:1px;height:1px;overflow:hidden;left:-1000px;white-space:nowrap;top:"+b.getXY(i.start).y+"px",
n.selectNodeContents(o).select(!0),setTimeout(function(){
if(l.webkit)for(var r,a=0,s=t.querySelectorAll("#baidu_pastebin");r=s[a++];){
if(!b.isEmptyNode(r)){
o=r;
break;
}
b.remove(r);
}
try{
o.parentNode.removeChild(o);
}catch(d){}
n.moveToBookmark(i).select(!0),e(o);
},0);
}
}
function t(e){
var t,i;
if(e.firstChild){
for(var d,c=b.getElementsByTagName(e,"span"),f=0;d=c[f++];)("_baidu_cut_start"==d.id||"_baidu_cut_end"==d.id)&&b.remove(d);
if(l.webkit){
for(var m,h=e.querySelectorAll("div br"),f=0;m=h[f++];){
var p=m.parentNode;
"DIV"==p.tagName&&1==p.childNodes.length&&(p.innerHTML="<p><br/></p>",b.remove(p));
}
for(var g,v=e.querySelectorAll("#baidu_pastebin"),f=0;g=v[f++];){
var y=s.document.createElement("p");
for(g.parentNode.insertBefore(y,g);g.firstChild;)y.appendChild(g.firstChild);
b.remove(g);
}
for(var C,N=e.querySelectorAll("meta"),f=0;C=N[f++];)b.remove(C);
var h=e.querySelectorAll("br");
for(f=0;C=h[f++];)/^apple-/i.test(C.className)&&b.remove(C);
}
if(l.gecko){
var x=e.querySelectorAll("[_moz_dirty]");
for(f=0;C=x[f++];)C.removeAttribute("_moz_dirty");
}
if(!l.ie)for(var C,w=e.querySelectorAll("span.Apple-style-span"),f=0;C=w[f++];)b.remove(C,!0);
s.filterInputNativeNode(e),t=e.innerHTML,t=UE.filterWord(t),t=t.replace(/(<[^>]+?style=([\'\"]))([^\2]*?text-decoration-line[\s]*:[^\2]*?)(\2)/gi,function(){
return arguments[1]+arguments[3].replace(/text-decoration-line[\s]*:/g,"text-decoration:")+arguments[4];
});
var E=UE.htmlparser(t);
if(s.options.filterRules&&UE.filterNode(E,s.options.filterRules),s.filterInputRule(E),
l.webkit){
var T=E.lastChild();
T&&"element"==T.type&&"br"==T.tagName&&E.removeChild(T),u.each(s.body.querySelectorAll("div"),function(e){
b.isEmptyBlock(e)&&b.remove(e);
});
}
if(t={
html:E.toHtml()
},s.fireEvent("beforepaste",t,E),!t.html)return;
E=UE.htmlparser(t.html,!0),1===s.queryCommandState("pasteplain")?i=s.execCommand("insertHtml",UE.filterNode(E,s.options.filterTxtRules).toHtml(),!0):(UE.filterNode(E,s.options.filterTxtRules),
o=E.toHtml(),r=t.html,a=s.selection.getRange().createAddress(!0),i=s.execCommand("insertHtml",r,!0)),
n(i),s.fireEvent("funcPvUvReport","paste"),s.fireEvent("afterpaste",t,i);
}
}
function n(e){
for(var t=!1,n=+new Date,o=0,r=e.length;r>o;o++){
var a=i.init({
dom:e[o]
});
a.count>0&&(t=!0);
}
if(s.fireEvent("reportAddNum",67292,94,1),t){
var l=+new Date-n;
s.fireEvent("reportAddNum",67292,95,1),s.fireEvent("reportAddNum",67292,97,l);
}
}
var o,r,a,s=this;
s.addListener("pasteTransfer",function(e,t){
if(a&&o&&r&&o!=r){
var n=s.selection.getRange();
if(n.moveToAddress(a,!0),!n.collapsed){
for(;!b.isBody(n.startContainer);){
var i=n.startContainer;
if(1==i.nodeType){
if(i=i.childNodes[n.startOffset],!i){
n.setStartBefore(n.startContainer);
continue;
}
var l=i.previousSibling;
l&&3==l.nodeType&&new RegExp("^[\n\r	 "+b.fillChar+"]*$").test(l.nodeValue)&&n.setStartBefore(l);
}
if(0!=n.startOffset)break;
n.setStartBefore(n.startContainer);
}
for(;!b.isBody(n.endContainer);){
var d=n.endContainer;
if(1==d.nodeType){
if(d=d.childNodes[n.endOffset],!d){
n.setEndAfter(n.endContainer);
continue;
}
var c=d.nextSibling;
c&&3==c.nodeType&&new RegExp("^[\n\r	"+b.fillChar+"]*$").test(c.nodeValue)&&n.setEndAfter(c);
}
if(n.endOffset!=n.endContainer[3==n.endContainer.nodeType?"nodeValue":"childNodes"].length)break;
n.setEndAfter(n.endContainer);
}
}
n.deleteContents(),n.select(!0),s.__hasEnterExecCommand=!0;
var f=r;
2===t?f=f.replace(/<(\/?)([\w\-]+)([^>]*)>/gi,function(e,t,n,i){
return n=n.toLowerCase(),{
img:1
}[n]?e:(i=i.replace(/([\w\-]*?)\s*=\s*(("([^"]*)")|('([^']*)')|([^\s>]+))/gi,function(e,t,n){
return{
src:1,
href:1,
name:1
}[t.toLowerCase()]?t+"="+n+" ":"";
}),{
span:1,
div:1
}[n]?"":"<"+t+n+" "+u.trim(i)+">");
}):t&&(f=o),s.execCommand("inserthtml",f,!0),s.__hasEnterExecCommand=!1;
for(var m=s.selection.getRange();!b.isBody(m.startContainer)&&!m.startOffset&&m.startContainer[3==m.startContainer.nodeType?"nodeValue":"childNodes"].length;)m.setStartBefore(m.startContainer);
var h=m.createAddress(!0);
a.endAddress=h.startAddress;
}
}),s.addListener("ready",function(){
b.on(s.body,"cut",function(){
var e=s.selection.getRange();
!e.collapsed&&s.undoManger&&s.undoManger.save();
});
var n="onpaste"in s.document;
b.on(s.body,n?"paste":"keydown",function(i){
return(n||(i.ctrlKey||i.metaKey)&&"86"==i.keyCode)&&s.fireEvent("beforepasteEvent")!==!1?s.fireEvent("onpasting",i)===!0?(i.stopPropagation&&(i.stopPropagation(),
i.preventDefault()),!1):void e.call(s,function(e){
t(e);
}):void 0;
});
});
},UE.plugins.list=function(){
function e(e){
var t=[];
for(var n in e)t.push(n);
return t;
}
function t(e){
var t=e.className;
return b.hasClass(e,/custom_/)?t.match(/custom_(\w+)/)[1]:b.getStyle(e,"list-style-type");
}
function n(e,n){
u.each(b.getElementsByTagName(e,"ol ul"),function(r){
if(b.inDoc(r,e)){
var a=r.parentNode;
if(a.tagName==r.tagName){
var s=t(r)||("OL"==r.tagName?"decimal":"disc"),l=t(a)||("OL"==a.tagName?"decimal":"disc");
if(s==l){
var d=u.indexOf(f[r.tagName],s);
d=d+1==f[r.tagName].length?0:d+1,o(r,f[r.tagName][d]);
}
}
var m=0,h=2;
b.hasClass(r,/custom_/)?/[ou]l/i.test(a.tagName)&&b.hasClass(a,/custom_/)||(h=1):/[ou]l/i.test(a.tagName)&&b.hasClass(a,/custom_/)&&(h=3);
var p=b.getStyle(r,"list-style-type"),g=b.getStyle(r,"margin-left"),v=b.getStyle(r,"margin-right"),y="";
p&&(y+="list-style-type:"+p+";"),g&&(y+="margin-left:"+g+";"),v&&(y+="margin-right:"+v+";"),
r.style.cssText=y,r.className=u.trim(r.className.replace(/list-paddingleft-\w+/,""))+" list-paddingleft-"+h,
u.each(b.getElementsByTagName(r,"li"),function(e){
if(e.style.cssText&&(e.style.cssText=""),!e.firstChild)return void b.remove(e);
if(e.parentNode===r){
if(m++,b.hasClass(r,/custom_/)){
var n=1,i=t(r);
if("OL"==r.tagName){
if(i)switch(i){
case"cn":
case"cn1":
case"cn2":
m>10&&(m%10==0||m>10&&20>m)?n=2:m>20&&(n=3);
break;

case"num2":
m>9&&(n=2);
}
e.className="list-"+c[i]+m+" list-"+i+"-paddingleft-"+n;
}else e.className="list-"+c[i]+" list-"+i+"-paddingleft";
}else e.className=e.className.replace(/list-[\w\-]+/gi,"");
var o=e.getAttribute("class");
null===o||o.replace(/\s/g,"")||b.removeAttributes(e,"class");
}
}),!n&&i(r,r.tagName.toLowerCase(),t(r)||b.getStyle(r,"list-style-type"),!0);
}
});
}
function i(e,i,o,r){
var a=e.nextSibling;
a&&1==a.nodeType&&a.tagName.toLowerCase()==i&&(t(a)||b.getStyle(a,"list-style-type")||("ol"==i?"decimal":"disc"))==o&&(b.moveChild(a,e),
0==a.childNodes.length&&b.remove(a)),a&&b.isFillChar(a)&&b.remove(a);
var s=e.previousSibling;
s&&1==s.nodeType&&s.tagName.toLowerCase()==i&&(t(s)||b.getStyle(s,"list-style-type")||("ol"==i?"decimal":"disc"))==o&&b.moveChild(e,s),
s&&b.isFillChar(s)&&b.remove(s),!r&&b.isEmptyBlock(e)&&b.remove(e),t(e)&&n(e.ownerDocument,!0);
}
function o(e,t){
c[t]&&(e.className="custom_"+t);
try{
b.setStyle(e,"list-style-type",t);
}catch(n){}
}
function r(e){
var t=e.previousSibling;
t&&b.isEmptyBlock(t)&&b.remove(t),t=e.nextSibling,t&&b.isEmptyBlock(t)&&b.remove(t);
}
function a(e){
for(;e&&!b.isBody(e);){
if("TABLE"==e.nodeName)return null;
if("LI"==e.nodeName)return e;
e=e.parentNode;
}
}
var s=this,d={
TD:1,
PRE:1,
BLOCKQUOTE:1
},c={
cn:"cn-1-",
cn1:"cn-2-",
cn2:"cn-3-",
num:"num-1-",
num1:"num-2-",
num2:"num-3-",
dash:"dash",
dot:"dot"
};
s.setOpt({
insertorderedlist:{
decimal:"",
"lower-alpha":"",
"lower-roman":"",
"upper-alpha":"",
"upper-roman":""
},
insertunorderedlist:{
circle:"",
disc:"",
square:""
},
listDefaultPaddingLeft:"30",
listiconpath:"http://bs.baidu.com/listicon/",
maxListLevel:-1
});
var f={
OL:e(s.options.insertorderedlist),
UL:e(s.options.insertunorderedlist)
},h=s.options.listiconpath;
for(var p in c)s.options.insertorderedlist.hasOwnProperty(p)||s.options.insertunorderedlist.hasOwnProperty(p)||delete c[p];
s.ready(function(){
var e=[];
for(var t in c){
if("dash"==t||"dot"==t)e.push("li.list-"+c[t]+"{background-image:url("+h+c[t]+".gif)}"),
e.push("ul.custom_"+t+"{list-style:none;}ul.custom_"+t+" li{background-position:0 3px;background-repeat:no-repeat}");else{
for(var n=0;99>n;n++)e.push("li.list-"+c[t]+n+"{background-image:url("+h+"list-"+c[t]+n+".gif)}");
e.push("ol.custom_"+t+"{list-style:none;}ol.custom_"+t+" li{background-position:0 3px;background-repeat:no-repeat}");
}
switch(t){
case"cn":
e.push("li.list-"+t+"-paddingleft-1{padding-left:25px}"),e.push("li.list-"+t+"-paddingleft-2{padding-left:40px}"),
e.push("li.list-"+t+"-paddingleft-3{padding-left:55px}");
break;

case"cn1":
e.push("li.list-"+t+"-paddingleft-1{padding-left:30px}"),e.push("li.list-"+t+"-paddingleft-2{padding-left:40px}"),
e.push("li.list-"+t+"-paddingleft-3{padding-left:55px}");
break;

case"cn2":
e.push("li.list-"+t+"-paddingleft-1{padding-left:40px}"),e.push("li.list-"+t+"-paddingleft-2{padding-left:55px}"),
e.push("li.list-"+t+"-paddingleft-3{padding-left:68px}");
break;

case"num":
case"num1":
e.push("li.list-"+t+"-paddingleft-1{padding-left:25px}");
break;

case"num2":
e.push("li.list-"+t+"-paddingleft-1{padding-left:35px}"),e.push("li.list-"+t+"-paddingleft-2{padding-left:40px}");
break;

case"dash":
e.push("li.list-"+t+"-paddingleft{padding-left:35px}");
break;

case"dot":
e.push("li.list-"+t+"-paddingleft{padding-left:20px}");
}
}
e.push(".list-paddingleft-1{padding-left:0}"),e.push(".list-paddingleft-2{padding-left:"+s.options.listDefaultPaddingLeft+"px}"),
e.push(".list-paddingleft-3{padding-left:"+2*s.options.listDefaultPaddingLeft+"px}"),
u.cssRule("list","ol,ul{margin:0;padding:0;"+(l.ie||l.gecko&&l.version>=11e4?"":"width:95%")+"}li{clear:both;}"+e.join("\n"),s.document);
}),s.ready(function(){
b.on(s.body,"cut",function(){
setTimeout(function(){
var e,t=s.selection.getRange();
if(!t.collapsed&&(e=b.findParentByTagName(t.startContainer,"li",!0))&&!e.nextSibling&&b.isEmptyBlock(e)){
var n,i=e.parentNode;
if(n=i.previousSibling)b.remove(i),t.setStartAtLast(n).collapse(!0),t.select(!0);else if(n=i.nextSibling)b.remove(i),
t.setStartAtFirst(n).collapse(!0),t.select(!0);else{
var o=s.document.createElement("p");
b.fillNode(s.document,o),i.parentNode.insertBefore(o,i),b.remove(i),t.setStart(o,0).collapse(!0),
t.select(!0);
}
}
});
});
}),s.addListener("beforepaste",function(e,n){
var i,o=this,r=o.selection.getRange(),a=UE.htmlparser(n.html,!0);
if(i=b.findParentByTagName(r.startContainer,"li",!0)){
var s=i.parentNode,l="OL"==s.tagName?"ul":"ol";
u.each(a.getNodesByTagName(l),function(n){
if(n.tagName=s.tagName,n.setAttr(),n.parentNode===a)e=t(s)||("OL"==s.tagName?"decimal":"disc");else{
var i=n.parentNode.getAttr("class");
e=i&&/custom_/.test(i)?i.match(/custom_(\w+)/)[1]:n.parentNode.getStyle("list-style-type"),
e||(e="OL"==s.tagName?"decimal":"disc");
}
var o=u.indexOf(f[s.tagName],e);
n.parentNode!==a&&(o=o+1==f[s.tagName].length?0:o+1);
var r=f[s.tagName][o];
c[r]?n.setAttr("class","custom_"+r):n.setStyle("list-style-type",r);
});
}
n.html=a.toHtml();
}),s.addInputRule(function(e){
function t(e,t){
var o=t.firstChild();
if(o&&"element"==o.type&&"span"==o.tagName&&/Wingdings|Symbol/.test(o.getStyle("font-family"))){
for(var r in i)if(i[r]==o.data)return r;
return"disc";
}
for(var r in n)if(n[r].test(e))return r;
}
u.each(e.getNodesByTagName("li"),function(e){
for(var t,n=UE.uNode.createElement("p"),i=0;t=e.children[i];)"text"==t.type||m.p[t.tagName]?n.appendChild(t):n.firstChild()?(e.insertBefore(n,t),
n=UE.uNode.createElement("p"),i+=2):i++;
(n.firstChild()&&!n.parentNode||!e.firstChild())&&e.appendChild(n),n.firstChild()||n.innerHTML(l.ie11below?b.fillChar:"<br/>");
var o=e.firstChild(),r=o.lastChild();
r&&"text"==r.type&&/^\s*$/.test(r.data)&&o.removeChild(r);
});
var n={
num1:/^\d+\)/,
decimal:/^\d+\./,
"lower-alpha":/^[a-z]+\)/,
"upper-alpha":/^[A-Z]+\./,
cn:/^[\u4E00\u4E8C\u4E09\u56DB\u516d\u4e94\u4e03\u516b\u4e5d]+[\u3001]/,
cn2:/^\([\u4E00\u4E8C\u4E09\u56DB\u516d\u4e94\u4e03\u516b\u4e5d]+\)/
},i={
square:"n"
};
u.each(e.getNodesByTagName("p"),function(e){
function i(e,t,i){
if("ol"==e.tagName)if(l.ie){
var o=t.firstChild();
"element"==o.type&&"span"==o.tagName&&n[i].test(o.innerText())&&t.removeChild(o);
}else t.innerHTML(t.innerHTML().replace(n[i],""));else t.removeChild(t.firstChild());
var r=UE.uNode.createElement("li");
r.appendChild(t),e.appendChild(r);
}
if("MsoListParagraph"==e.getAttr("class")){
e.setStyle("margin",""),e.setStyle("margin-left",""),e.setAttr("class","");
var o,r=e,a=e;
if("li"!=e.parentNode.tagName&&(o=t(e.innerText(),e))){
var d=UE.uNode.createElement(s.options.insertorderedlist.hasOwnProperty(o)?"ol":"ul");
for(c[o]?d.setAttr("class","custom_"+o):d.setStyle("list-style-type",o);e&&"li"!=e.parentNode.tagName&&t(e.innerText(),e);)r=e.nextSibling(),
r||e.parentNode.insertBefore(d,e),i(d,e,o),e=r;
!d.parentNode&&e&&e.parentNode&&e.parentNode.insertBefore(d,e);
}
var u=a.firstChild();
u&&"element"==u.type&&"span"==u.tagName&&/^\s*(&nbsp;)+\s*$/.test(u.innerText())&&u.parentNode.removeChild(u);
}
});
}),s.addListener("contentchange",function(){
n(s.document);
}),s.addListener("keydown",function(e,t){
function n(){
t.preventDefault?t.preventDefault():t.returnValue=!1,s.fireEvent("contentchange"),
s.undoManger&&s.undoManger.save();
}
function i(e,t){
for(;e&&!b.isBody(e);){
if(t(e))return null;
if(1==e.nodeType&&/[ou]l/i.test(e.tagName))return e;
e=e.parentNode;
}
return null;
}
var o=t.keyCode||t.which;
if(13==o&&!t.shiftKey){
var a=s.selection.getRange(),l=b.findParent(a.startContainer,function(e){
return b.isBlockElm(e);
},!0),d=b.findParentByTagName(a.startContainer,"li",!0);
if(l&&"PRE"!=l.tagName&&!d){
var c=l.innerHTML.replace(new RegExp(b.fillChar,"g"),"");
/^\s*1\s*\.[^\d]/.test(c)&&(l.innerHTML=c.replace(/^\s*1\s*\./,""),a.setStartAtLast(l).collapse(!0).select(),
s.__hasEnterExecCommand=!0,s.execCommand("insertorderedlist"),s.__hasEnterExecCommand=!1);
}
var u=s.selection.getRange(),f=i(u.startContainer,function(e){
return"TABLE"==e.tagName;
}),h=u.collapsed?f:i(u.endContainer,function(e){
return"TABLE"==e.tagName;
});
if(f&&h&&f===h){
if(!u.collapsed){
if(f=b.findParentByTagName(u.startContainer,"li",!0),h=b.findParentByTagName(u.endContainer,"li",!0),
!f||!h||f!==h){
var p=u.cloneRange(),g=p.collapse(!1).createBookmark();
u.deleteContents(),p.moveToBookmark(g);
var d=b.findParentByTagName(p.startContainer,"li",!0);
return r(d),p.select(),void n();
}
if(u.deleteContents(),d=b.findParentByTagName(u.startContainer,"li",!0),d&&b.isEmptyBlock(d))return w=d.previousSibling,
next=d.nextSibling,C=s.document.createElement("p"),b.fillNode(s.document,C),v=d.parentNode,
w&&next?(u.setStart(next,0).collapse(!0).select(!0),b.remove(d)):((w||next)&&w?d.parentNode.parentNode.insertBefore(C,v.nextSibling):v.parentNode.insertBefore(C,v),
b.remove(d),v.firstChild||b.remove(v),u.setStart(C,0).setCursor()),void n();
}
if(d=b.findParentByTagName(u.startContainer,"li",!0)){
if(b.isEmptyBlock(d)){
g=u.createBookmark();
var v=d.parentNode;
if(d!==v.lastChild?(b.breakParent(d,v),r(d)):(v.parentNode.insertBefore(d,v.nextSibling),
b.isEmptyNode(v)&&b.remove(v)),!m.$list[d.parentNode.tagName])if(b.isBlockElm(d.firstChild))b.remove(d,!0);else{
for(C=s.document.createElement("p"),d.parentNode.insertBefore(C,d);d.firstChild;)C.appendChild(d.firstChild);
b.remove(d);
}
u.moveToBookmark(g).select();
}else{
var y=d.firstChild;
if(!y||!b.isBlockElm(y)){
var C=s.document.createElement("p");
for(!d.firstChild&&b.fillNode(s.document,C);d.firstChild;)C.appendChild(d.firstChild);
d.appendChild(C),y=C;
}
var N=s.document.createElement("span");
u.insertNode(N),b.breakParent(N,d);
var x=N.nextSibling;
y=x.firstChild,y||(C=s.document.createElement("p"),b.fillNode(s.document,C),x.appendChild(C),
y=C),b.isEmptyNode(y)&&(y.innerHTML="",b.fillNode(s.document,y)),u.setStart(y,0).collapse(!0).shrinkBoundary().select(),
b.remove(N);
var w=x.previousSibling;
w&&b.isEmptyBlock(w)&&(w.innerHTML="<p></p>",b.fillNode(s.document,w.firstChild));
}
n();
}
}
}
if(8==o&&(u=s.selection.getRange(),u.collapsed&&b.isStartInblock(u)&&(p=u.cloneRange().trimBoundary(),
d=b.findParentByTagName(u.startContainer,"li",!0),d&&b.isStartInblock(p)))){
if(f=b.findParentByTagName(u.startContainer,"p",!0),f&&f!==d.firstChild){
var v=b.findParentByTagName(f,["ol","ul"]);
return b.breakParent(f,v),r(f),s.fireEvent("contentchange"),u.setStart(f,0).setCursor(!1,!0),
s.fireEvent("saveScene"),void b.preventDefault(t);
}
if(d&&(w=d.previousSibling)){
if(46==o&&d.childNodes.length)return;
if(m.$list[w.tagName]&&(w=w.lastChild),s.undoManger&&s.undoManger.save(),y=d.firstChild,
b.isBlockElm(y))if(b.isEmptyNode(y))for(w.appendChild(y),u.setStart(y,0).setCursor(!1,!0);d.firstChild;)w.appendChild(d.firstChild);else N=s.document.createElement("span"),
u.insertNode(N),b.isEmptyBlock(w)&&(w.innerHTML=""),b.moveChild(d,w),u.setStartBefore(N).collapse(!0).select(!0),
b.remove(N);else if(b.isEmptyNode(d)){
var C=s.document.createElement("p");
w.appendChild(C),u.setStart(C,0).setCursor();
}else for(u.setEnd(w,w.childNodes.length).collapse().select(!0);d.firstChild;)w.appendChild(d.firstChild);
return b.remove(d),s.fireEvent("contentchange"),s.fireEvent("saveScene"),void b.preventDefault(t);
}
if(d&&!d.previousSibling){
var v=d.parentNode,g=u.createBookmark();
if(b.isTagNode(v.parentNode,"ol ul"))v.parentNode.insertBefore(d,v),b.isEmptyNode(v)&&b.remove(v);else{
for(;d.firstChild;)v.parentNode.insertBefore(d.firstChild,v);
b.remove(d),b.isEmptyNode(v)&&b.remove(v);
}
return u.moveToBookmark(g).setCursor(!1,!0),s.fireEvent("contentchange"),s.fireEvent("saveScene"),
void b.preventDefault(t);
}
}
}),s.addListener("keyup",function(e,n){
var o=n.keyCode||n.which;
if(8==o){
var r,a=s.selection.getRange();
(r=b.findParentByTagName(a.startContainer,["ol","ul"],!0))&&i(r,r.tagName.toLowerCase(),t(r)||b.getComputedStyle(r,"list-style-type"),!0);
}
}),s.addListener("tabkeydown",function(){
function e(e){
if(-1!=s.options.maxListLevel){
for(var t=e.parentNode,n=0;/[ou]l/i.test(t.tagName);)n++,t=t.parentNode;
if(n>=s.options.maxListLevel)return!0;
}
}
var n=s.selection.getRange(),r=b.findParentByTagName(n.startContainer,"li",!0);
if(r){
var a;
if(!n.collapsed){
s.fireEvent("saveScene"),a=n.createBookmark();
for(var l,d,c=0,m=b.findParents(r);d=m[c++];)if(b.isTagNode(d,"ol ul")){
l=d;
break;
}
var h=r;
if(a.end)for(;h&&!(b.getPosition(h,a.end)&b.POSITION_FOLLOWING);)if(e(h))h=b.getNextDomNode(h,!1,null,function(e){
return e!==l;
});else{
var p=h.parentNode,g=s.document.createElement(p.tagName),v=u.indexOf(f[g.tagName],t(p)||b.getComputedStyle(p,"list-style-type")),y=v+1==f[g.tagName].length?0:v+1,C=f[g.tagName][y];
for(o(g,C),p.insertBefore(g,h);h&&!(b.getPosition(h,a.end)&b.POSITION_FOLLOWING);){
if(r=h.nextSibling,g.appendChild(h),!r||b.isTagNode(r,"ol ul")){
if(r)for(;(r=r.firstChild)&&"LI"!=r.tagName;);else r=b.getNextDomNode(h,!1,null,function(e){
return e!==l;
});
break;
}
h=r;
}
i(g,g.tagName.toLowerCase(),C),h=r;
}
return s.fireEvent("contentchange"),n.moveToBookmark(a).select(),!0;
}
if(e(r))return!0;
var p=r.parentNode,g=s.document.createElement(p.tagName),v=u.indexOf(f[g.tagName],t(p)||b.getComputedStyle(p,"list-style-type"));
v=v+1==f[g.tagName].length?0:v+1;
var C=f[g.tagName][v];
if(o(g,C),b.isStartInblock(n))return s.fireEvent("saveScene"),a=n.createBookmark(),
p.insertBefore(g,r),g.appendChild(r),i(g,g.tagName.toLowerCase(),C),s.fireEvent("contentchange"),
n.moveToBookmark(a).select(!0),!0;
}
}),s.commands.insertorderedlist=s.commands.insertunorderedlist={
execCommand:function(e,n){
n||(n="insertorderedlist"==e.toLowerCase()?"decimal":"disc");
var r=this,s=this.selection.getRange(),l=function(e){
return 1==e.nodeType?"br"!=e.tagName.toLowerCase():!b.isWhitespace(e);
},c="insertorderedlist"==e.toLowerCase()?"ol":"ul",f=r.document.createDocumentFragment();
s.adjustmentBoundary().shrinkBoundary();
var h,p,g,v,y=s.createBookmark(!0),C=a(r.document.getElementById(y.start)),N=0,x=a(r.document.getElementById(y.end)),w=0;
if(C||x){
if(C&&(h=C.parentNode),y.end||(x=C),x&&(p=x.parentNode),h===p){
for(;C!==x;){
if(v=C,C=C.nextSibling,!b.isBlockElm(v.firstChild)){
for(var E=r.document.createElement("p");v.firstChild;)E.appendChild(v.firstChild);
v.appendChild(E);
}
f.appendChild(v);
}
if(v=r.document.createElement("span"),h.insertBefore(v,x),!b.isBlockElm(x.firstChild)){
for(E=r.document.createElement("p");x.firstChild;)E.appendChild(x.firstChild);
x.appendChild(E);
}
f.appendChild(x),b.breakParent(v,h),b.isEmptyNode(v.previousSibling)&&b.remove(v.previousSibling),
b.isEmptyNode(v.nextSibling)&&b.remove(v.nextSibling);
var T=t(h)||b.getComputedStyle(h,"list-style-type")||("insertorderedlist"==e.toLowerCase()?"decimal":"disc");
if(h.tagName.toLowerCase()==c&&T==n){
for(var S,k=0,B=r.document.createDocumentFragment();S=f.childNodes[k++];)if(b.isTagNode(S,"ol ul"))u.each(b.getElementsByTagName(S,"li"),function(e){
for(;e.firstChild;)B.appendChild(e.firstChild);
});else for(;S.firstChild;)B.appendChild(S.firstChild);
v.parentNode.insertBefore(B,v);
}else g=r.document.createElement(c),o(g,n),g.appendChild(f),v.parentNode.insertBefore(g,v);
return b.remove(v),g&&i(g,c,n),void s.moveToBookmark(y).select();
}
if(C){
for(;C;){
if(v=C.nextSibling,b.isTagNode(C,"ol ul"))f.appendChild(C);else{
for(var _=r.document.createDocumentFragment(),I=0;C.firstChild;)b.isBlockElm(C.firstChild)&&(I=1),
_.appendChild(C.firstChild);
if(I)f.appendChild(_);else{
var R=r.document.createElement("p");
R.appendChild(_),f.appendChild(R);
}
b.remove(C);
}
C=v;
}
h.parentNode.insertBefore(f,h.nextSibling),b.isEmptyNode(h)?(s.setStartBefore(h),
b.remove(h)):s.setStartAfter(h),N=1;
}
if(x&&b.inDoc(p,r.document)){
for(C=p.firstChild;C&&C!==x;){
if(v=C.nextSibling,b.isTagNode(C,"ol ul"))f.appendChild(C);else{
for(_=r.document.createDocumentFragment(),I=0;C.firstChild;)b.isBlockElm(C.firstChild)&&(I=1),
_.appendChild(C.firstChild);
I?f.appendChild(_):(R=r.document.createElement("p"),R.appendChild(_),f.appendChild(R)),
b.remove(C);
}
C=v;
}
var L=b.createElement(r.document,"div",{
tmpDiv:1
});
b.moveChild(x,L),f.appendChild(L),b.remove(x),p.parentNode.insertBefore(f,p),s.setEndBefore(p),
b.isEmptyNode(p)&&b.remove(p),w=1;
}
}
N||s.setStartBefore(r.document.getElementById(y.start)),y.end&&!w&&s.setEndAfter(r.document.getElementById(y.end)),
s.enlarge(!0,function(e){
return d[e.tagName];
}),f=r.document.createDocumentFragment();
for(var A,D=s.createBookmark(),P=b.getNextDomNode(D.start,!1,l),M=s.cloneRange(),O=b.isBlockElm;P&&P!==D.end&&b.getPosition(P,D.end)&b.POSITION_PRECEDING;)if(3==P.nodeType||m.li[P.tagName]){
if(1==P.nodeType&&m.$list[P.tagName]){
for(;P.firstChild;)f.appendChild(P.firstChild);
A=b.getNextDomNode(P,!1,l),b.remove(P),P=A;
continue;
}
for(A=P,M.setStartBefore(P);P&&P!==D.end&&(!O(P)||b.isBookmarkNode(P));)A=P,P=b.getNextDomNode(P,!1,null,function(e){
return!d[e.tagName];
});
P&&O(P)&&(v=b.getNextDomNode(A,!1,l),v&&b.isBookmarkNode(v)&&(P=b.getNextDomNode(v,!1,l),
A=v)),M.setEndAfter(A),P=b.getNextDomNode(A,!1,l);
var U=s.document.createElement("li");
if(U.appendChild(M.extractContents()),b.isEmptyNode(U)){
for(var A=s.document.createElement("p");U.firstChild;)A.appendChild(U.firstChild);
U.appendChild(A);
}
f.appendChild(U);
}else P=b.getNextDomNode(P,!0,l);
s.moveToBookmark(D).collapse(!0),g=r.document.createElement(c),o(g,n),g.appendChild(f),
s.insertNode(g),i(g,c,n);
for(var S,k=0,H=b.getElementsByTagName(g,"div");S=H[k++];)S.getAttribute("tmpDiv")&&b.remove(S,!0);
s.moveToBookmark(y).select();
},
queryCommandState:function(e){
for(var t,n="insertorderedlist"==e.toLowerCase()?"ol":"ul",i=this.selection.getStartElementPath(),o=0;t=i[o++];){
if("TABLE"==t.nodeName)return 0;
if(n==t.nodeName.toLowerCase())return 1;
}
return 0;
},
queryCommandValue:function(e){
for(var n,i,o="insertorderedlist"==e.toLowerCase()?"ol":"ul",r=this.selection.getStartElementPath(),a=0;i=r[a++];){
if("TABLE"==i.nodeName){
n=null;
break;
}
if(o==i.nodeName.toLowerCase()){
n=i;
break;
}
}
return n?t(n)||b.getComputedStyle(n,"list-style-type"):null;
}
};
},UE.plugins.enterkey=function(){
var e,t=this,n=t.options.enterTag;
t.addListener("keyup",function(n,i){
var o=i.keyCode||i.which;
if(13==o){
var r,a=t.selection.getRange(),s=a.startContainer;
if(l.ie)t.fireEvent("saveScene",!0,!0);else{
if(/h\d/i.test(e)){
if(l.gecko){
var d=b.findParentByTagName(s,["h1","h2","h3","h4","h5","h6","blockquote","caption","table"],!0);
d||(t.document.execCommand("formatBlock",!1,"<p>"),r=1);
}else if(1==s.nodeType){
var c,u=t.document.createTextNode("");
if(a.insertNode(u),c=b.findParentByTagName(u,"div",!0)){
for(var f=t.document.createElement("p");c.firstChild;)f.appendChild(c.firstChild);
c.parentNode.insertBefore(f,c),b.remove(c),a.setStartBefore(u).setCursor(),r=1;
}
b.remove(u);
}
t.undoManger&&r&&t.undoManger.save();
}
l.opera&&a.select();
}
}
}),t.addListener("keydown",function(i,o){
var r=o.keyCode||o.which;
if(13==r){
if(t.fireEvent("beforeenterkeydown"))return void b.preventDefault(o);
t.fireEvent("saveScene",!0,!0),e="";
var a=t.selection.getRange();
if(!a.collapsed){
var s=a.startContainer,d=a.endContainer,c=b.findParentByTagName(s,"td",!0),u=b.findParentByTagName(d,"td",!0);
if(c&&u&&c!==u||!c&&u||c&&!u)return void(o.preventDefault?o.preventDefault():o.returnValue=!1);
}
if("p"==n)l.ie||(s=b.findParentByTagName(a.startContainer,["ol","ul","p","h1","h2","h3","h4","h5","h6","blockquote","caption","section"],!0),
s||l.opera?(e=s.tagName,"p"==s.tagName.toLowerCase()&&l.gecko&&b.removeDirtyAttr(s)):(t.document.execCommand("formatBlock",!1,"<p>"),
l.gecko&&(a=t.selection.getRange(),s=b.findParentByTagName(a.startContainer,"p",!0),
s&&b.removeDirtyAttr(s))));else if(o.preventDefault?o.preventDefault():o.returnValue=!1,
a.collapsed){
h=a.document.createElement("br"),a.insertNode(h);
var f=h.parentNode;
f.lastChild===h?(h.parentNode.insertBefore(h.cloneNode(!0),h),a.setStartBefore(h)):a.setStartAfter(h),
a.setCursor();
}else if(a.deleteContents(),s=a.startContainer,1==s.nodeType&&(s=s.childNodes[a.startOffset])){
for(;1==s.nodeType;){
if(m.$empty[s.tagName])return a.setStartBefore(s).setCursor(),t.undoManger&&t.undoManger.save(),
!1;
if(!s.firstChild){
var h=a.document.createElement("br");
return s.appendChild(h),a.setStart(s,0).setCursor(),t.undoManger&&t.undoManger.save(),
!1;
}
s=s.firstChild;
}
s===a.startContainer.childNodes[a.startOffset]?(h=a.document.createElement("br"),
a.insertNode(h).setCursor()):a.setStart(s,0).setCursor();
}else h=a.document.createElement("br"),a.insertNode(h).setStartAfter(h).setCursor();
}
});
},UE.plugins.keystrokes=function(){
var e=this,t=!0;
e.addListener("keydown",function(n,i){
var o=i.keyCode||i.which,r=e.selection.getRange();
if(!r.collapsed&&!(i.ctrlKey||i.shiftKey||i.altKey||i.metaKey)&&(o>=65&&90>=o||o>=48&&57>=o||o>=96&&111>=o||{
13:1,
8:1,
46:1
}[o])){
var a=r.startContainer;
if(b.isFillChar(a)&&r.setStartBefore(a),a=r.endContainer,b.isFillChar(a)&&r.setEndAfter(a),
r.txtToElmBoundary(),r.endContainer&&1==r.endContainer.nodeType&&(a=r.endContainer.childNodes[r.endOffset],
a&&b.isBr(a)&&r.setEndAfter(a)),0==r.startOffset&&(a=r.startContainer,b.isBoundaryNode(a,"firstChild")&&(a=r.endContainer,
r.endOffset==(3==a.nodeType?a.nodeValue.length:a.childNodes.length)&&b.isBoundaryNode(a,"lastChild"))))return e.fireEvent("saveScene"),
e.body.innerHTML="<p>"+(l.ie11below?b.fillChar:"<br/>")+"</p>",r.setStart(e.body.firstChild,0).setCursor(!1,!0),
void e._selectionChange();
}
if(8==o){
if(r=e.selection.getRange(),t=r.collapsed,e.fireEvent("delkeydown",i))return;
var s,d;
if(r.collapsed&&r.inFillChar()&&(s=r.startContainer,b.isFillChar(s)?(r.setStartBefore(s).shrinkBoundary(!0).collapse(!0),
b.remove(s)):(s.nodeValue=s.nodeValue.replace(new RegExp("^"+b.fillChar),""),r.startOffset--,
r.collapse(!0).select(!0))),s=r.getClosedNode())return e.fireEvent("saveScene"),
r.setStartBefore(s),b.remove(s),r.setCursor(),e.fireEvent("saveScene"),void b.preventDefault(i);
if(!l.ie&&(s=b.findParentByTagName(r.startContainer,"table",!0),d=b.findParentByTagName(r.endContainer,"table",!0),
s&&!d||!s&&d||s!==d))return void i.preventDefault();
}
if(9==o){
var c={
ol:1,
ul:1,
table:1
};
if(e.fireEvent("tabkeydown",i))return void b.preventDefault(i);
var u=e.selection.getRange();
e.fireEvent("saveScene");
for(var f=0,m="",h=e.options.tabSize||4,p=e.options.tabNode||"&nbsp;";h>f;f++)m+=p;
var g=e.document.createElement("span");
if(g.innerHTML=m+b.fillChar,u.collapsed)u.insertNode(g.cloneNode(!0).firstChild).setCursor(!0);else if(s=b.findParent(u.startContainer,y),
d=b.findParent(u.endContainer,y),s&&d&&s===d)u.deleteContents(),u.insertNode(g.cloneNode(!0).firstChild).setCursor(!0);else{
var v=u.createBookmark(),y=function(e){
return b.isBlockElm(e)&&!c[e.tagName.toLowerCase()];
};
u.enlarge(!0);
for(var C=u.createBookmark(),N=b.getNextDomNode(C.start,!1,y);N&&!(b.getPosition(N,C.end)&b.POSITION_FOLLOWING);)N.insertBefore(g.cloneNode(!0).firstChild,N.firstChild),
N=b.getNextDomNode(N,!1,y);
u.moveToBookmark(C).moveToBookmark(v).select();
}
b.preventDefault(i);
}
if(l.gecko&&46==o&&(u=e.selection.getRange(),u.collapsed&&(s=u.startContainer,b.isEmptyBlock(s)))){
for(var x=s.parentNode;1==b.getChildCount(x)&&!b.isBody(x);)s=x,x=x.parentNode;
return void(s===x.lastChild&&i.preventDefault());
}
}),e.addListener("keyup",function(e,n){
var i,o=n.keyCode||n.which,r=this;
if(8==o){
if(r.fireEvent("delkeyup"))return;
if(i=r.selection.getRange(),i.collapsed){
var a,s=["h1","h2","h3","h4","h5","h6"];
if((a=b.findParentByTagName(i.startContainer,s,!0))&&b.isEmptyBlock(a)){
var d=a.previousSibling;
if(d&&"TABLE"!=d.nodeName)return b.remove(a),void i.setStartAtLast(d).setCursor(!1,!0);
var c=a.nextSibling;
if(c&&"TABLE"!=c.nodeName)return b.remove(a),void i.setStartAtFirst(c).setCursor(!1,!0);
}
if(b.isBody(i.startContainer)){
var a=b.createElement(r.document,"p",{
innerHTML:l.ie11below?b.fillChar:"<br/>"
});
i.insertNode(a).setStart(a,0).setCursor(!1,!0);
}
}
if(!t&&(3==i.startContainer.nodeType||1==i.startContainer.nodeType&&b.isEmptyBlock(i.startContainer)))if(l.ie){
var u=i.document.createElement("span");
i.insertNode(u).setStartBefore(u).collapse(!0),i.select(),b.remove(u);
}else i.select();
}
});
},UE.plugins.autoheight=function(){
function e(e){
var t=this;
clearTimeout(o),s||(!t.queryCommandState||t.queryCommandState&&1!=t.queryCommandState("source"))&&(o=setTimeout(function(){
for(var n=t.body.lastChild;n&&1!=n.nodeType;)n=n.previousSibling;
n&&1==n.nodeType&&(n.style.clear="both",i=Math.max(b.getXY(n).y+n.offsetHeight+25,a.minFrameHeight),
("adjustheight"==e||i!=r&&i!=$(t.iframe).height())&&(t.setHeight(i,!0),r=i),b.removeStyle(n,"clear"));
},50));
}
var t=this;
if(t.autoHeightEnabled=t.options.autoHeightEnabled!==!1,t.autoHeightEnabled){
var n,i,o,r=0,a=t.options;
t.addListener("foldcontentarea",function(){
r=0,t.setHeight("60",!0);
});
var s;
t.addListener("fullscreenchanged",function(e,t){
s=t;
}),t.addListener("destroy",function(){
t.removeListener("adjustheight contentchange afterinserthtml keyup mouseup",e);
}),t.enableAutoHeight=function(){
var t=this;
if(t.autoHeightEnabled){
var i=t.document;
t.autoHeightEnabled=!0,n=i.body.style.overflowY,i.body.style.overflowY="hidden",
t.addListener("adjustheight contentchange afterinserthtml keyup mouseup",e),setTimeout(function(){
e.call(t);
},l.gecko?100:0),t.fireEvent("autoheightchanged",t.autoHeightEnabled);
}
},t.disableAutoHeight=function(){
t.body.style.overflowY=n||"",t.removeListener("contentchange",e),t.removeListener("keyup",e),
t.removeListener("mouseup",e),t.autoHeightEnabled=!1,t.fireEvent("autoheightchanged",t.autoHeightEnabled);
},t.addListener("ready",function(){
t.enableAutoHeight();
var n;
b.on(l.ie?t.body:t.document,l.webkit?"dragover":"drop",function(){
clearTimeout(n),n=setTimeout(function(){
e.call(t);
},100);
});
});
}
},UE.plugins.autofloat=function(){
function e(){
return UE.ui?1:(alert(a.autofloatMsg),0);
}
function t(){
var e=document.body.style;
e.backgroundImage='url("about:blank")',e.backgroundAttachment="fixed";
}
function n(){
var e=b.getXY(f),t=b.getComputedStyle(f,"position"),n=b.getComputedStyle(f,"left");
f.style.width=f.offsetWidth+"px",f.style.zIndex=1*r.options.zIndex+1,f.parentNode.insertBefore(y,f),
g||v&&l.ie?("absolute"!=f.style.position&&(f.style.position="absolute"),f.style.top=(document.body.scrollTop||document.documentElement.scrollTop)-m+d+"px"):(l.ie7Compat&&C&&(C=!1,
f.style.marginLeft="-45px",f.style.left=b.getXY(f).x-document.documentElement.getBoundingClientRect().left+2+"px"),
"fixed"!=f.style.position&&(f.style.position="fixed",f.style.top=d+"px",("absolute"==t||"relative"==t)&&parseFloat(n)&&(f.style.left=e.x+"px")));
}
function i(){
C=!0,y&&y.parentNode&&y.parentNode.removeChild(y),f&&(f.style.cssText=c,f.style.marginLeft="0px");
}
function o(){
if(h){
var e=h(r.container),t=r.options.toolbarTopOffset||0;
e.top<0&&e.bottom-f.offsetHeight>t?n():i();
}
}
var r=this,a=r.getLang(),s=r.options.autoFloatEnabled!==!1,d=r.options.topOffset;
if(s){
var c,f,m,h,p=UE.ui.uiUtils,g=l.ie&&l.version<=6,v=l.quirks,y=document.createElement("div"),C=!0,N=u.defer(function(){
o();
},l.ie?200:100,!0);
r.addListener("destroy stop_toolbar_float",function(){
i(),b.un(window,["scroll","resize"],o),r.removeListener("keydown",N);
}),r.addListener("star_toolbar_float",function(){
r.fireEvent("stop_toolbar_float"),o(),b.on(window,["scroll","resize"],o),r.addListener("keydown",N);
}),r.addListener("ready",function(){
e(r)&&(h=p.getClientRect,f=r.ui.getDom("toolbarbox"),m=h(f).top,c=f.style.cssText,
y.style.height=f.offsetHeight+53+"px",g&&t(),b.on(window,["scroll","resize"],o),
r.addListener("keydown",N),r.addListener("beforefullscreenchange",function(e,t){
t&&i();
}),r.addListener("fullscreenchanged",function(e,t){
t||o();
}),r.addListener("sourcemodechanged",function(){
setTimeout(function(){
o();
},0);
}),r.addListener("clearDoc",function(){
setTimeout(function(){
o();
},0);
}));
});
}
},UE.plugins.pasteplain=function(){
var e=this;
e.setOpt({
pasteplain:!1,
filterTxtRules:function(){
function e(e){
e.tagName="p",e.setStyle();
}
function t(e){
e.parentNode.removeChild(e,!0);
}
return{
"-":"script style object iframe embed input select",
p:{
$:{}
},
br:{
$:{}
},
div:function(e){
for(var t,n=UE.uNode.createElement("p");t=e.firstChild();)"text"!=t.type&&UE.dom.dtd.$block[t.tagName]?n.firstChild()?(e.parentNode.insertBefore(n,e),
n=UE.uNode.createElement("p")):e.parentNode.insertBefore(t,e):n.appendChild(t);
n.firstChild()&&e.parentNode.insertBefore(n,e),e.parentNode.removeChild(e);
},
ol:t,
ul:t,
dl:t,
dt:t,
dd:t,
li:t,
caption:e,
th:e,
tr:e,
h1:e,
h2:e,
h3:e,
h4:e,
h5:e,
h6:e,
td:function(e){
var t=!!e.innerText();
t&&e.parentNode.insertAfter(UE.uNode.createText(" &nbsp; &nbsp;"),e),e.parentNode.removeChild(e,e.innerText());
}
};
}()
});
var t=e.options.pasteplain;
e.commands.pasteplain={
queryCommandState:function(){
return t?1:0;
},
execCommand:function(){
t=0|!t;
},
notNeedUndo:1
};
},function(){
function e(){}
var t=UE.UETable=function(e){
this.table=e,this.indexTable=[],this.selectedTds=[],this.cellsRange={},this.update(e);
};
t.removeSelectedClass=function(e){
u.each(e,function(e){
b.removeClasses(e,"selectTdClass");
});
},t.addSelectedClass=function(e){
u.each(e,function(e){
b.addClass(e,"selectTdClass");
});
},t.isEmptyBlock=function(e){
var t=new RegExp(b.fillChar,"g");
if(e[l.ie?"innerText":"textContent"].replace(/^\s*$/,"").replace(t,"").length>0)return 0;
for(var n in m.$isNotEmpty)if(m.$isNotEmpty.hasOwnProperty(n)&&e.getElementsByTagName(n).length)return 0;
return 1;
},t.getWidth=function(e){
return e?parseInt(b.getComputedStyle(e,"width"),10):0;
},t.getTableCellAlignState=function(e){
!u.isArray(e)&&(e=[e]);
var t={},n=["align","valign"],i=null,o=!0;
return u.each(e,function(e){
return u.each(n,function(n){
if(i=e.getAttribute(n),!t[n]&&i)t[n]=i;else if(!t[n]||i!==t[n])return o=!1,!1;
}),o;
}),o?t:null;
},t.getTableItemsByRange=function(e){
var t=e.selection.getStart();
t&&t.id&&0===t.id.indexOf("_baidu_bookmark_start_")&&(t=t.nextSibling);
var n=t&&b.findParentByTagName(t,["td","th"],!0),i=n&&n.parentNode,o=t&&b.findParentByTagName(t,"caption",!0),r=o?o.parentNode:i&&i.parentNode.parentNode;
return{
cell:n,
tr:i,
table:r,
caption:o
};
},t.getUETableBySelected=function(e){
var n=t.getTableItemsByRange(e).table;
return n&&n.ueTable&&n.ueTable.selectedTds.length?n.ueTable:null;
},t.getDefaultValue=function(e,t){
var n,i,o,r,a={
thin:"0px",
medium:"1px",
thick:"2px"
};
if(t)return s=t.getElementsByTagName("td")[0],r=b.getComputedStyle(t,"border-left-width"),
n=parseInt(a[r]||r,10),r=b.getComputedStyle(s,"padding-left"),i=parseInt(a[r]||r,10),
r=b.getComputedStyle(s,"border-left-width"),o=parseInt(a[r]||r,10),{
tableBorder:n,
tdPadding:i,
tdBorder:o
};
t=e.document.createElement("table"),t.insertRow(0).insertCell(0).innerHTML="xxx",
e.body.appendChild(t);
var s=t.getElementsByTagName("td")[0];
return r=b.getComputedStyle(t,"border-left-width"),n=parseInt(a[r]||r,10),r=b.getComputedStyle(s,"padding-left"),
i=parseInt(a[r]||r,10),r=b.getComputedStyle(s,"border-left-width"),o=parseInt(a[r]||r,10),
b.remove(t),{
tableBorder:n,
tdPadding:i,
tdBorder:o
};
},t.getUETable=function(e){
var n=e.tagName.toLowerCase();
return e="td"==n||"th"==n||"caption"==n?b.findParentByTagName(e,"table",!0):e,e.ueTable||(e.ueTable=new t(e)),
e.ueTable;
},t.cloneCell=function(e,t,n){
if(!e||u.isString(e))return this.table.ownerDocument.createElement(e||"td");
var i=b.hasClass(e,"selectTdClass");
i&&b.removeClasses(e,"selectTdClass");
var o=e.cloneNode(!0);
return t&&(o.rowSpan=o.colSpan=1),!n&&b.removeAttributes(o,"width height"),!n&&b.removeAttributes(o,"style"),
o.style.borderLeftStyle="",o.style.borderTopStyle="",o.style.borderLeftColor=e.style.borderRightColor,
o.style.borderLeftWidth=e.style.borderRightWidth,o.style.borderTopColor=e.style.borderBottomColor,
o.style.borderTopWidth=e.style.borderBottomWidth,i&&b.addClass(e,"selectTdClass"),
o;
},t.prototype={
getMaxRows:function(){
for(var e,t=this.table.rows,n=1,i=0;e=t[i];i++){
for(var o,r=1,a=0;o=e.cells[a++];)r=Math.max(o.rowSpan||1,r);
n=Math.max(r+i,n);
}
return n;
},
getMaxCols:function(){
for(var e,t=this.table.rows,n=0,i={},o=0;e=t[o];o++){
for(var r,a=0,s=0;r=e.cells[s++];)if(a+=r.colSpan||1,r.rowSpan&&r.rowSpan>1)for(var l=1;l<r.rowSpan;l++)i["row_"+(o+l)]?i["row_"+(o+l)]++:i["row_"+(o+l)]=r.colSpan||1;
a+=i["row_"+o]||0,n=Math.max(a,n);
}
return n;
},
getCellColIndex:function(){},
getHSideCell:function(t,n){
try{
var i,o,r=this.getCellInfo(t),a=this.selectedTds.length,s=this.cellsRange;
return!n&&(a?!s.beginColIndex:!r.colIndex)||n&&(a?s.endColIndex==this.colsNum-1:r.colIndex==this.colsNum-1)?null:(i=a?s.beginRowIndex:r.rowIndex,
o=n?a?s.endColIndex+1:r.colIndex+1:a?s.beginColIndex-1:r.colIndex<1?0:r.colIndex-1,
this.getCell(this.indexTable[i][o].rowIndex,this.indexTable[i][o].cellIndex));
}catch(l){
e(l);
}
},
getTabNextCell:function(e,t){
var n,i=this.getCellInfo(e),o=t||i.rowIndex,r=i.colIndex+1+(i.colSpan-1);
try{
n=this.getCell(this.indexTable[o][r].rowIndex,this.indexTable[o][r].cellIndex);
}catch(a){
try{
o=1*o+1,r=0,n=this.getCell(this.indexTable[o][r].rowIndex,this.indexTable[o][r].cellIndex);
}catch(a){}
}
return n;
},
getVSideCell:function(t,n,i){
try{
var o,r,a=this.getCellInfo(t),s=this.selectedTds.length&&!i,l=this.cellsRange;
return!n&&0==a.rowIndex||n&&(s?l.endRowIndex==this.rowsNum-1:a.rowIndex+a.rowSpan>this.rowsNum-1)?null:(o=n?s?l.endRowIndex+1:a.rowIndex+a.rowSpan:s?l.beginRowIndex-1:a.rowIndex-1,
r=s?l.beginColIndex:a.colIndex,this.getCell(this.indexTable[o][r].rowIndex,this.indexTable[o][r].cellIndex));
}catch(d){
e(d);
}
},
getSameEndPosCells:function(t,n){
try{
for(var i="x"===n.toLowerCase(),o=b.getXY(t)[i?"x":"y"]+t["offset"+(i?"Width":"Height")],r=this.table.rows,a=null,s=[],l=0;l<this.rowsNum;l++){
a=r[l].cells;
for(var d,c=0;d=a[c++];){
var u=b.getXY(d)[i?"x":"y"]+d["offset"+(i?"Width":"Height")];
if(u>o&&i)break;
if((t==d||o==u)&&(1==d[i?"colSpan":"rowSpan"]&&s.push(d),i))break;
}
}
return s;
}catch(f){
e(f);
}
},
setCellContent:function(e,t){
e.innerHTML=t||(l.ie11below?b.fillChar:"<br />");
},
cloneCell:t.cloneCell,
getSameStartPosXCells:function(t){
try{
for(var n,i=b.getXY(t).x+t.offsetWidth,o=this.table.rows,r=[],a=0;a<this.rowsNum;a++){
n=o[a].cells;
for(var s,l=0;s=n[l++];){
var d=b.getXY(s).x;
if(d>i)break;
if(d==i&&1==s.colSpan){
r.push(s);
break;
}
}
}
return r;
}catch(c){
e(c);
}
},
update:function(e){
this.table=e||this.table,this.selectedTds=[],this.cellsRange={},this.indexTable=[];
for(var t=this.table.rows,n=this.getMaxRows(),i=n-t.length,o=this.getMaxCols();i--;)this.table.insertRow(t.length);
this.rowsNum=n,this.colsNum=o;
for(var r=0,a=t.length;a>r;r++)this.indexTable[r]=new Array(o);
for(var s,l=0;s=t[l];l++)for(var d,c=0,f=s.cells;d=f[c];c++){
d.rowSpan>n&&(d.rowSpan=n);
for(var m=c,h=d.rowSpan||1,p=d.colSpan||1;this.indexTable[l][m];)m++;
for(var g=0;h>g;g++)for(var v=0;p>v;v++)this.indexTable[l+g][m+v]={
rowIndex:l,
cellIndex:c,
colIndex:m,
rowSpan:h,
colSpan:p
};
}
for(g=0;n>g;g++)for(v=0;o>v;v++)void 0===this.indexTable[g][v]&&(s=t[g],d=s.cells[s.cells.length-1],
d=d?d.cloneNode(!0):this.table.ownerDocument.createElement("td"),this.setCellContent(d),
1!==d.colSpan&&(d.colSpan=1),1!==d.rowSpan&&(d.rowSpan=1),s.appendChild(d),this.indexTable[g][v]={
rowIndex:g,
cellIndex:d.cellIndex,
colIndex:v,
rowSpan:1,
colSpan:1
});
var y=b.getElementsByTagName(this.table,"td"),C=[];
if(u.each(y,function(e){
b.hasClass(e,"selectTdClass")&&C.push(e);
}),C.length){
var N=C[0],x=C[C.length-1],w=this.getCellInfo(N),E=this.getCellInfo(x);
this.selectedTds=C,this.cellsRange={
beginRowIndex:w.rowIndex,
beginColIndex:w.colIndex,
endRowIndex:E.rowIndex+E.rowSpan-1,
endColIndex:E.colIndex+E.colSpan-1
};
}
},
getCellInfo:function(e){
if(e)for(var t=e.cellIndex,n=e.parentNode.rowIndex,i=this.indexTable[n],o=this.colsNum,r=t;o>r;r++){
var a=i[r];
if(a.rowIndex===n&&a.cellIndex===t)return a;
}
},
getCell:function(e,t){
return e<this.rowsNum&&this.table.rows[e].cells[t]||null;
},
deleteCell:function(e,t){
t="number"==typeof t?t:e.parentNode.rowIndex;
var n=this.table.rows[t];
n.deleteCell(e.cellIndex);
},
getCellsRange:function(e,t){
function n(e,t,o,r){
var a,s,l,d=e,c=t,u=o,f=r;
if(e>0)for(s=t;r>s;s++)a=i.indexTable[e][s],l=a.rowIndex,e>l&&(d=Math.min(l,d));
if(r<i.colsNum)for(l=e;o>l;l++)a=i.indexTable[l][r],s=a.colIndex+a.colSpan-1,s>r&&(f=Math.max(s,f));
if(o<i.rowsNum)for(s=t;r>s;s++)a=i.indexTable[o][s],l=a.rowIndex+a.rowSpan-1,l>o&&(u=Math.max(l,u));
if(t>0)for(l=e;o>l;l++)a=i.indexTable[l][t],s=a.colIndex,t>s&&(c=Math.min(a.colIndex,c));
return d!=e||c!=t||u!=o||f!=r?n(d,c,u,f):{
beginRowIndex:e,
beginColIndex:t,
endRowIndex:o,
endColIndex:r
};
}
try{
var i=this,o=i.getCellInfo(e);
if(e===t)return{
beginRowIndex:o.rowIndex,
beginColIndex:o.colIndex,
endRowIndex:o.rowIndex+o.rowSpan-1,
endColIndex:o.colIndex+o.colSpan-1
};
var r=i.getCellInfo(t),a=Math.min(o.rowIndex,r.rowIndex),s=Math.min(o.colIndex,r.colIndex),l=Math.max(o.rowIndex+o.rowSpan-1,r.rowIndex+r.rowSpan-1),d=Math.max(o.colIndex+o.colSpan-1,r.colIndex+r.colSpan-1);
return n(a,s,l,d);
}catch(c){}
},
getCells:function(e){
this.clearSelected();
for(var t,n,i,o=e.beginRowIndex,r=e.beginColIndex,a=e.endRowIndex,s=e.endColIndex,l={},d=[],c=o;a>=c;c++)for(var u=r;s>=u;u++){
t=this.indexTable[c][u],n=t.rowIndex,i=t.colIndex;
var f=n+"|"+i;
if(!l[f]){
if(l[f]=1,c>n||u>i||n+t.rowSpan-1>a||i+t.colSpan-1>s)return null;
d.push(this.getCell(n,t.cellIndex));
}
}
return d;
},
clearSelected:function(){
t.removeSelectedClass(this.selectedTds),this.selectedTds=[],this.cellsRange={};
},
setSelected:function(e){
var n=this.getCells(e);
t.addSelectedClass(n),this.selectedTds=n,this.cellsRange=e;
},
isFullRow:function(){
var e=this.cellsRange;
return e.endColIndex-e.beginColIndex+1==this.colsNum;
},
isFullCol:function(){
var e=this.cellsRange,t=this.table,n=t.getElementsByTagName("th"),i=e.endRowIndex-e.beginRowIndex+1;
return n.length?i==this.rowsNum||i==this.rowsNum-1:i==this.rowsNum;
},
getNextCell:function(t,n,i){
try{
var o,r,a=this.getCellInfo(t),s=this.selectedTds.length&&!i,l=this.cellsRange;
return!n&&0==a.rowIndex||n&&(s?l.endRowIndex==this.rowsNum-1:a.rowIndex+a.rowSpan>this.rowsNum-1)?null:(o=n?s?l.endRowIndex+1:a.rowIndex+a.rowSpan:s?l.beginRowIndex-1:a.rowIndex-1,
r=s?l.beginColIndex:a.colIndex,this.getCell(this.indexTable[o][r].rowIndex,this.indexTable[o][r].cellIndex));
}catch(d){
e(d);
}
},
getPreviewCell:function(t,n){
try{
var i,o,r=this.getCellInfo(t),a=this.selectedTds.length,s=this.cellsRange;
return!n&&(a?!s.beginColIndex:!r.colIndex)||n&&(a?s.endColIndex==this.colsNum-1:r.rowIndex>this.colsNum-1)?null:(i=n?a?s.beginRowIndex:r.rowIndex<1?0:r.rowIndex-1:a?s.beginRowIndex:r.rowIndex,
o=n?a?s.endColIndex+1:r.colIndex:a?s.beginColIndex-1:r.colIndex<1?0:r.colIndex-1,
this.getCell(this.indexTable[i][o].rowIndex,this.indexTable[i][o].cellIndex));
}catch(l){
e(l);
}
},
moveContent:function(e,n){
if(!t.isEmptyBlock(n)){
if(t.isEmptyBlock(e))return void(e.innerHTML=n.innerHTML);
var i=e.lastChild;
for(3!=i.nodeType&&m.$block[i.tagName]||e.appendChild(e.ownerDocument.createElement("br"));i=n.firstChild;)e.appendChild(i);
}
},
mergeRight:function(e){
var t=this.getCellInfo(e),n=t.colIndex+t.colSpan,i=this.indexTable[t.rowIndex][n],o=this.getCell(i.rowIndex,i.cellIndex);
e.colSpan=t.colSpan+i.colSpan,e.removeAttribute("width"),this.moveContent(e,o),this.deleteCell(o,i.rowIndex),
this.update();
},
mergeDown:function(e){
var t=this.getCellInfo(e),n=t.rowIndex+t.rowSpan,i=this.indexTable[n][t.colIndex],o=this.getCell(i.rowIndex,i.cellIndex);
e.rowSpan=t.rowSpan+i.rowSpan,e.removeAttribute("height"),this.moveContent(e,o),
this.deleteCell(o,i.rowIndex),this.update();
},
mergeRange:function(){
var e=this.cellsRange,t=this.getCell(e.beginRowIndex,this.indexTable[e.beginRowIndex][e.beginColIndex].cellIndex);
if("TH"==t.tagName&&e.endRowIndex!==e.beginRowIndex){
var n=this.indexTable,i=this.getCellInfo(t);
t=this.getCell(1,n[1][i.colIndex].cellIndex),e=this.getCellsRange(t,this.getCell(n[this.rowsNum-1][i.colIndex].rowIndex,n[this.rowsNum-1][i.colIndex].cellIndex));
}
for(var o,r=this.getCells(e),a=0;o=r[a++];)o!==t&&(this.moveContent(t,o),this.deleteCell(o));
if(t.rowSpan=e.endRowIndex-e.beginRowIndex+1,t.rowSpan>1&&t.removeAttribute("height"),
t.colSpan=e.endColIndex-e.beginColIndex+1,t.colSpan>1&&t.removeAttribute("width"),
t.rowSpan==this.rowsNum&&1!=t.colSpan&&(t.colSpan=1),t.colSpan==this.colsNum&&1!=t.rowSpan){
var s=t.parentNode.rowIndex;
if(this.table.deleteRow)for(var a=s+1,l=s+1,d=t.rowSpan;d>a;a++)this.table.deleteRow(l);else for(var a=0,d=t.rowSpan-1;d>a;a++){
var c=this.table.rows[s+1];
c.parentNode.removeChild(c);
}
t.rowSpan=1;
}
this.update();
},
insertRow:function(e,t){
{
var n,i=this.colsNum,o=this.table,r=o.insertRow(e);
parseInt((o.offsetWidth-20*i-i-1)/i,10);
}
if(0==e||e==this.rowsNum)for(var a=0;i>a;a++)n=this.cloneCell(t,!0),this.setCellContent(n),
n.getAttribute("vAlign")&&n.setAttribute("vAlign",n.getAttribute("vAlign")),r.appendChild(n);else{
var s=this.indexTable[e];
for(a=0;i>a;a++){
var l=s[a];
l.rowIndex<e?(n=this.getCell(l.rowIndex,l.cellIndex),n.rowSpan=l.rowSpan+1):(n=this.cloneCell(t,!0),
this.setCellContent(n),r.appendChild(n));
}
}
return this.update(),r;
},
deleteRow:function(e){
for(var t=this.table.rows[e],n=this.indexTable[e],i=this.colsNum,o=0,r=0;i>r;){
var a=n[r],s=this.getCell(a.rowIndex,a.cellIndex);
if(s.rowSpan>1&&a.rowIndex==e){
var l=s.cloneNode(!0);
l.rowSpan=s.rowSpan-1,l.innerHTML="",s.rowSpan=1;
var d,c=e+1,f=this.table.rows[c],m=this.getPreviewMergedCellsNum(c,r)-o;
r>m?(d=r-m-1,b.insertAfter(f.cells[d],l)):f.cells.length&&f.insertBefore(l,f.cells[0]),
o+=1;
}
r+=s.colSpan||1;
}
var h=[],p={};
for(r=0;i>r;r++){
var g=n[r].rowIndex,v=n[r].cellIndex,y=g+"_"+v;
p[y]||(p[y]=1,s=this.getCell(g,v),h.push(s));
}
var C=[];
u.each(h,function(e){
1==e.rowSpan?e.parentNode.removeChild(e):C.push(e);
}),u.each(C,function(e){
e.rowSpan--;
}),t.parentNode.removeChild(t),this.update();
},
insertCol:function(e,t,n){
function i(e,t,n){
if(0==e){
var i=t.nextSibling||t.previousSibling;
"TH"==i.tagName&&(i=t.ownerDocument.createElement("th"),i.appendChild(t.firstChild),
n.insertBefore(i,t),b.remove(t));
}else if("TH"==t.tagName){
var o=t.ownerDocument.createElement("td");
o.appendChild(t.firstChild),n.insertBefore(o,t),b.remove(t);
}
}
var o,r,a,s=this.rowsNum,l=0,d=parseInt((this.table.offsetWidth-20*(this.colsNum+1)-(this.colsNum+1))/(this.colsNum+1),10);
if(0==e||e==this.colsNum)for(;s>l;l++)o=this.table.rows[l],a=o.cells[0==e?e:o.cells.length],
r=this.cloneCell(t,!0),this.setCellContent(r),r.setAttribute("vAlign",r.getAttribute("vAlign")),
a&&r.setAttribute("width",a.getAttribute("width")),e?b.insertAfter(o.cells[o.cells.length-1],r):o.insertBefore(r,o.cells[0]),
i(l,r,o);else for(;s>l;l++){
var c=this.indexTable[l][e];
c.colIndex<e?(r=this.getCell(c.rowIndex,c.cellIndex),r.colSpan=c.colSpan+1):(o=this.table.rows[l],
a=o.cells[c.cellIndex],r=this.cloneCell(t,!0),this.setCellContent(r),r.setAttribute("vAlign",r.getAttribute("vAlign")),
a&&r.setAttribute("width",a.getAttribute("width")),a?o.insertBefore(r,a):o.appendChild(r)),
i(l,r,o);
}
this.update(),this.updateWidth(d,n||{
tdPadding:10,
tdBorder:1
});
},
updateWidth:function(e,n){
var i=this.table,o=t.getWidth(i)-2*n.tdPadding-n.tdBorder+e;
if(o<i.ownerDocument.body.offsetWidth)return void i.setAttribute("width",o);
var r=b.getElementsByTagName(this.table,"td");
u.each(r,function(t){
t.setAttribute("width",e);
});
},
deleteCol:function(e){
for(var t=this.indexTable,n=this.table.rows,i=this.table.getAttribute("width"),o=0,r=this.rowsNum,a={},s=0;r>s;){
var l=t[s],d=l[e],c=d.rowIndex+"_"+d.colIndex;
if(!a[c]){
a[c]=1;
var u=this.getCell(d.rowIndex,d.cellIndex);
o||(o=u&&parseInt(u.offsetWidth/u.colSpan,10).toFixed(0)),u.colSpan>1?u.colSpan--:n[s].deleteCell(d.cellIndex),
s+=d.rowSpan||1;
}
}
this.table.setAttribute("width",i-o),this.update();
},
splitToCells:function(e){
var t=this,n=this.splitToRows(e);
u.each(n,function(e){
t.splitToCols(e);
});
},
splitToRows:function(e){
var t=this.getCellInfo(e),n=t.rowIndex,i=t.colIndex,o=[];
e.rowSpan=1,o.push(e);
for(var r=n,a=n+t.rowSpan;a>r;r++)if(r!=n){
var s=this.table.rows[r],l=s.insertCell(i-this.getPreviewMergedCellsNum(r,i));
l.colSpan=t.colSpan,this.setCellContent(l),l.setAttribute("vAlign",e.getAttribute("vAlign")),
l.setAttribute("align",e.getAttribute("align")),e.style.cssText&&(l.style.cssText=e.style.cssText),
o.push(l);
}
return this.update(),o;
},
getPreviewMergedCellsNum:function(e,t){
for(var n=this.indexTable[e],i=0,o=0;t>o;){
var r=n[o].colSpan,a=n[o].rowIndex;
i+=r-(a==e?1:0),o+=r;
}
return i;
},
splitToCols:function(e){
var t=(e.offsetWidth/e.colSpan-22).toFixed(0),n=this.getCellInfo(e),i=n.rowIndex,o=n.colIndex,r=[];
e.colSpan=1,e.setAttribute("width",t),r.push(e);
for(var a=o,s=o+n.colSpan;s>a;a++)if(a!=o){
var l=this.table.rows[i],d=l.insertCell(this.indexTable[i][a].cellIndex+1);
if(d.rowSpan=n.rowSpan,this.setCellContent(d),d.setAttribute("vAlign",e.getAttribute("vAlign")),
d.setAttribute("align",e.getAttribute("align")),d.setAttribute("width",t),e.style.cssText&&(d.style.cssText=e.style.cssText),
"TH"==e.tagName){
var c=e.ownerDocument.createElement("th");
c.appendChild(d.firstChild),c.setAttribute("vAlign",e.getAttribute("vAlign")),c.rowSpan=d.rowSpan,
l.insertBefore(c,d),b.remove(d);
}
r.push(d);
}
return this.update(),r;
},
isLastCell:function(e,t,n){
t=t||this.rowsNum,n=n||this.colsNum;
var i=this.getCellInfo(e);
return i.rowIndex+i.rowSpan==t&&i.colIndex+i.colSpan==n;
},
getLastCell:function(e){
e=e||this.table.getElementsByTagName("td");
var t,n=(this.getCellInfo(e[0]),this),i=e[0],o=i.parentNode,r=0,a=0;
return u.each(e,function(e){
e.parentNode==o&&(a+=e.colSpan||1),r+=e.rowSpan*e.colSpan||1;
}),t=r/a,u.each(e,function(e){
return n.isLastCell(e,t,a)?(i=e,!1):void 0;
}),i;
},
selectRow:function(e){
var t=this.indexTable[e],n=this.getCell(t[0].rowIndex,t[0].cellIndex),i=this.getCell(t[this.colsNum-1].rowIndex,t[this.colsNum-1].cellIndex),o=this.getCellsRange(n,i);
this.setSelected(o);
},
selectTable:function(){
var e=this.table.getElementsByTagName("td"),t=this.getCellsRange(e[0],e[e.length-1]);
this.setSelected(t);
},
sortTable:function(e,t){
var n=this.table,i=n.rows,o=[],r="TH"===i[0].cells[0].tagName,a=0;
if(this.selectedTds.length){
for(var s=this.cellsRange,l=s.endRowIndex+1,d=s.beginRowIndex;l>d;d++)o[d]=i[d];
o.splice(0,s.beginRowIndex),a=s.endRowIndex+1===this.rowsNum?0:s.endRowIndex+1;
}else for(var d=0,l=i.length;l>d;d++)o[d]=i[d];
r&&o.splice(0,1),o=u.sort(o,function(n,i){
var o=function(e){
return e.innerText||e.textContent;
};
return t?"number"==typeof t?t:t.call(this,n.cells[e],i.cells[e]):function(){
var t=o(n.cells[e]),r=o(i.cells[e]);
return t.localeCompare(r);
}();
});
for(var c=n.ownerDocument.createDocumentFragment(),f=0,l=o.length;l>f;f++)c.appendChild(o[f]);
var m=n.getElementsByTagName("tbody")[0];
a?m.insertBefore(c,i[a-s.endRowIndex+s.beginRowIndex-1]):m.appendChild(c);
},
setBackground:function(e,t){
if("string"==typeof t)u.each(e,function(e){
e.style.backgroundColor=t;
});else if("object"==typeof t){
t=u.extend({
repeat:!0,
colorList:["#ddd","#fff"]
},t);
for(var n,i=this.getCellInfo(e[0]).rowIndex,o=0,r=t.colorList,a=function(e,t,n){
return e[t]?e[t]:n?e[t%e.length]:"";
},s=0;n=e[s++];){
var l=this.getCellInfo(n);
n.style.backgroundColor=a(r,i+o==l.rowIndex?o:++o,t.repeat);
}
}
},
removeBackground:function(e){
u.each(e,function(e){
e.style.backgroundColor="";
});
}
};
}(),function(){
function e(e,n){
var i=e.getElementsByTagName("td");
u.each(i,function(e){
e.removeAttribute("width");
}),e.setAttribute("width",t(n,!0,a(n,e))),setTimeout(function(){
u.each(i,function(e){
1==e.colSpan&&e.setAttribute("width",e.offsetWidth+"");
});
},0);
}
function t(e,t,n){
var i=e.body;
return i.offsetWidth-(t?2*parseInt(b.getComputedStyle(i,"margin-left"),10):0)-2*n.tableBorder-(e.options.offsetWidth||0);
}
function n(e){
var t=o(e).cell;
if(t){
var n=s(t);
return n.selectedTds.length?n.selectedTds:[t];
}
return[];
}
var i=UE.UETable,o=function(e){
return i.getTableItemsByRange(e);
},r=function(e){
return i.getUETableBySelected(e);
},a=function(e,t){
return i.getDefaultValue(e,t);
},s=function(e){
return i.getUETable(e);
};
UE.commands.inserttable={
queryCommandState:function(){
return o(this).table?-1:0;
},
execCommand:function(e,t){
function n(e,t){
for(var n=[],i=e.numRows,o=e.numCols,r=0;i>r;r++){
n.push("<tr>");
for(var a=0;o>a;a++)n.push('<td width="'+t+'"  vAlign="'+e.tdvalign+'" >'+(l.ie11below?b.fillChar:"<br/>")+"</td>");
n.push("</tr>");
}
return"<table><tbody>"+n.join("")+"</tbody></table>";
}
t||(t=u.extend({},{
numCols:this.options.defaultCols,
numRows:this.options.defaultRows,
tdvalign:this.options.tdvalign
}));
var i=this,o=this.selection.getRange(),r=o.startContainer,s=b.findParent(r,function(e){
return b.isBlockElm(e);
},!0)||i.body,d=a(i),c=s.offsetWidth,f=Math.floor(c/t.numCols-2*d.tdPadding-d.tdBorder);
!t.tdvalign&&(t.tdvalign=i.options.tdvalign),i.execCommand("inserthtml",n(t,f));
}
},UE.commands.insertparagraphbeforetable={
queryCommandState:function(){
return o(this).cell?0:-1;
},
execCommand:function(){
var e=o(this).table;
if(e){
var t=this.document.createElement("p");
t.innerHTML=l.ie11below?b.fillChar:"<br />",e.parentNode.insertBefore(t,e),this.selection.getRange().setStart(t,0).setCursor();
}
}
},UE.commands.deletetable={
queryCommandState:function(){
var e=this.selection.getRange();
return b.findParentByTagName(e.startContainer,"table",!0)?0:-1;
},
execCommand:function(e,t){
var n=this.selection.getRange();
if(t=t||b.findParentByTagName(n.startContainer,"table",!0)){
var i=t.nextSibling;
i||(i=b.createElement(this.document,"p",{
innerHTML:l.ie11below?b.fillChar:"<br/>"
}),t.parentNode.insertBefore(i,t)),b.remove(t),n=this.selection.getRange(),3==i.nodeType?n.setStartBefore(i):n.setStart(i,0),
n.setCursor(!1,!0),this.fireEvent("tablehasdeleted");
}
}
},UE.commands.cellalign={
queryCommandState:function(){
return n(this).length?0:-1;
},
execCommand:function(e,t){
var i=n(this);
if(i.length)for(var o,r=0;o=i[r++];)o.setAttribute("align",t);
}
},UE.commands.cellvalign={
queryCommandState:function(){
return n(this).length?0:-1;
},
execCommand:function(e,t){
var i=n(this);
if(i.length)for(var o,r=0;o=i[r++];)o.setAttribute("vAlign",t);
}
},UE.commands.insertcaption={
queryCommandState:function(){
var e=o(this).table;
return e&&0==e.getElementsByTagName("caption").length?1:-1;
},
execCommand:function(){
var e=o(this).table;
if(e){
var t=this.document.createElement("caption");
t.innerHTML=l.ie11below?b.fillChar:"<br/>",e.insertBefore(t,e.firstChild);
var n=this.selection.getRange();
n.setStart(t,0).setCursor();
}
}
},UE.commands.deletecaption={
queryCommandState:function(){
var e=this.selection.getRange(),t=b.findParentByTagName(e.startContainer,"table");
return t?0==t.getElementsByTagName("caption").length?-1:1:-1;
},
execCommand:function(){
var e=this.selection.getRange(),t=b.findParentByTagName(e.startContainer,"table");
if(t){
b.remove(t.getElementsByTagName("caption")[0]);
var n=this.selection.getRange();
n.setStart(t.rows[0].cells[0],0).setCursor();
}
}
},UE.commands.inserttitle={
queryCommandState:function(){
var e=o(this).table;
if(e){
var t=e.rows[0];
return 0==t.getElementsByTagName("th").length?0:-1;
}
return-1;
},
execCommand:function(){
var e=o(this).table;
e&&s(e).insertRow(0,"th");
var t=e.getElementsByTagName("th")[0];
this.selection.getRange().setStart(t,0).setCursor(!1,!0);
}
},UE.commands.deletetitle={
queryCommandState:function(){
var e=o(this).table;
if(e){
var t=e.rows[0];
return t.getElementsByTagName("th").length?0:-1;
}
return-1;
},
execCommand:function(){
var e=o(this).table;
e&&b.remove(e.rows[0]);
var t=e.getElementsByTagName("td")[0];
this.selection.getRange().setStart(t,0).setCursor(!1,!0);
}
},UE.commands.mergeright={
queryCommandState:function(){
var e=o(this);
if(!e.cell)return-1;
var t=s(e.table);
if(t.selectedTds.length)return-1;
var n=t.getCellInfo(e.cell),i=n.colIndex+n.colSpan;
if(i>=t.colsNum)return-1;
var r=t.indexTable[n.rowIndex][i];
return r.rowIndex==n.rowIndex&&r.rowSpan==n.rowSpan?0:-1;
},
execCommand:function(){
var e=this.selection.getRange(),t=e.createBookmark(!0),n=o(this).cell,i=s(n);
i.mergeRight(n),e.moveToBookmark(t).select();
}
},UE.commands.mergedown={
queryCommandState:function(){
var e=o(this),t=e.cell;
if(!t||"TH"==t.tagName)return-1;
var n=s(e.table);
if(n.selectedTds.length)return-1;
var i=n.getCellInfo(e.cell),r=i.rowIndex+i.rowSpan;
if(r>=n.rowsNum)return-1;
var a=n.indexTable[r][i.colIndex];
return a.colIndex==i.colIndex&&a.colSpan==i.colSpan&&"TH"!==e.cell.tagName?0:-1;
},
execCommand:function(){
var e=this.selection.getRange(),t=e.createBookmark(!0),n=o(this).cell,i=s(n);
i.mergeDown(n),e.moveToBookmark(t).select();
}
},UE.commands.mergecells={
queryCommandState:function(){
return r(this)?0:-1;
},
execCommand:function(){
var e=r(this);
if(e&&e.selectedTds.length){
var t=e.selectedTds[0];
e.mergeRange();
var n=this.selection.getRange();
b.isEmptyBlock(t)?n.setStart(t,0).collapse(!0):n.selectNodeContents(t),n.select();
}
}
},UE.commands.insertrow={
queryCommandState:function(){
var e=o(this),t=e.cell;
return t&&"TD"==t.tagName&&s(e.table).rowsNum<this.options.maxRowNum?0:-1;
},
execCommand:function(){
var e=this.selection.getRange(),t=e.createBookmark(!0),n=o(this),i=n.cell,r=n.table,a=s(r),l=a.getCellInfo(i);
if(a.selectedTds.length)for(var d=a.cellsRange,c=0,u=d.endRowIndex-d.beginRowIndex+1;u>c;c++)a.insertRow(d.beginRowIndex,i);else a.insertRow(l.rowIndex,i);
e.moveToBookmark(t).select(),"enabled"===r.getAttribute("interlaced")&&this.fireEvent("interlacetable",r);
}
},UE.commands.insertrownext={
queryCommandState:function(){
var e=o(this),t=e.cell;
return t&&"TD"==t.tagName&&s(e.table).rowsNum<this.options.maxRowNum?0:-1;
},
execCommand:function(){
var e=this.selection.getRange(),t=e.createBookmark(!0),n=o(this),i=n.cell,r=n.table,a=s(r),l=a.getCellInfo(i);
if(a.selectedTds.length)for(var d=a.cellsRange,c=0,u=d.endRowIndex-d.beginRowIndex+1;u>c;c++)a.insertRow(d.endRowIndex+1,i);else a.insertRow(l.rowIndex+l.rowSpan,i);
e.moveToBookmark(t).select(),"enabled"===r.getAttribute("interlaced")&&this.fireEvent("interlacetable",r);
}
},UE.commands.deleterow={
queryCommandState:function(){
var e=o(this);
return e.cell?0:-1;
},
execCommand:function(){
var e=o(this).cell,t=s(e),n=t.cellsRange,i=t.getCellInfo(e),r=t.getVSideCell(e),a=t.getVSideCell(e,!0),l=this.selection.getRange();
if(u.isEmptyObject(n))t.deleteRow(i.rowIndex);else for(var d=n.beginRowIndex;d<n.endRowIndex+1;d++)t.deleteRow(n.beginRowIndex);
var c=t.table;
if(c.getElementsByTagName("td").length)if(1==i.rowSpan||i.rowSpan==n.endRowIndex-n.beginRowIndex+1)(a||r)&&l.selectNodeContents(a||r).setCursor(!1,!0);else{
var f=t.getCell(i.rowIndex,t.indexTable[i.rowIndex][i.colIndex].cellIndex);
f&&l.selectNodeContents(f).setCursor(!1,!0);
}else{
var m=c.nextSibling;
b.remove(c),m&&l.setStart(m,0).setCursor(!1,!0);
}
"enabled"===c.getAttribute("interlaced")&&this.fireEvent("interlacetable",c);
}
},UE.commands.insertcol={
queryCommandState:function(){
var e=o(this),t=e.cell;
return t&&("TD"==t.tagName||"TH"==t.tagName)&&s(e.table).colsNum<this.options.maxColNum?0:-1;
},
execCommand:function(e){
var t=this.selection.getRange(),n=t.createBookmark(!0);
if(-1!=this.queryCommandState(e)){
var i=o(this).cell,r=s(i),a=r.getCellInfo(i);
if(r.selectedTds.length)for(var l=r.cellsRange,d=0,c=l.endColIndex-l.beginColIndex+1;c>d;d++)r.insertCol(l.beginColIndex,i);else r.insertCol(a.colIndex,i);
t.moveToBookmark(n).select(!0);
}
}
},UE.commands.insertcolnext={
queryCommandState:function(){
var e=o(this),t=e.cell;
return t&&s(e.table).colsNum<this.options.maxColNum?0:-1;
},
execCommand:function(){
var e=this.selection.getRange(),t=e.createBookmark(!0),n=o(this).cell,i=s(n),r=i.getCellInfo(n);
if(i.selectedTds.length)for(var a=i.cellsRange,l=0,d=a.endColIndex-a.beginColIndex+1;d>l;l++)i.insertCol(a.endColIndex+1,n);else i.insertCol(r.colIndex+r.colSpan,n);
e.moveToBookmark(t).select();
}
},UE.commands.deletecol={
queryCommandState:function(){
var e=o(this);
return e.cell?0:-1;
},
execCommand:function(){
var e=o(this).cell,t=s(e),n=t.cellsRange,i=t.getCellInfo(e),r=t.getHSideCell(e),a=t.getHSideCell(e,!0);
if(u.isEmptyObject(n))t.deleteCol(i.colIndex);else for(var l=n.beginColIndex;l<n.endColIndex+1;l++)t.deleteCol(n.beginColIndex);
var d=t.table,c=this.selection.getRange();
if(d.getElementsByTagName("td").length)b.inDoc(e,this.document)?c.setStart(e,0).setCursor(!1,!0):a&&b.inDoc(a,this.document)?c.selectNodeContents(a).setCursor(!1,!0):r&&b.inDoc(r,this.document)&&c.selectNodeContents(r).setCursor(!0,!0);else{
var f=d.nextSibling;
b.remove(d),f&&c.setStart(f,0).setCursor(!1,!0);
}
}
},UE.commands.splittocells={
queryCommandState:function(){
var e=o(this),t=e.cell;
if(!t)return-1;
var n=s(e.table);
return n.selectedTds.length>0?-1:t&&(t.colSpan>1||t.rowSpan>1)?0:-1;
},
execCommand:function(){
var e=this.selection.getRange(),t=e.createBookmark(!0),n=o(this).cell,i=s(n);
i.splitToCells(n),e.moveToBookmark(t).select();
}
},UE.commands.splittorows={
queryCommandState:function(){
var e=o(this),t=e.cell;
if(!t)return-1;
var n=s(e.table);
return n.selectedTds.length>0?-1:t&&t.rowSpan>1?0:-1;
},
execCommand:function(){
var e=this.selection.getRange(),t=e.createBookmark(!0),n=o(this).cell,i=s(n);
i.splitToRows(n),e.moveToBookmark(t).select();
}
},UE.commands.splittocols={
queryCommandState:function(){
var e=o(this),t=e.cell;
if(!t)return-1;
var n=s(e.table);
return n.selectedTds.length>0?-1:t&&t.colSpan>1?0:-1;
},
execCommand:function(){
var e=this.selection.getRange(),t=e.createBookmark(!0),n=o(this).cell,i=s(n);
i.splitToCols(n),e.moveToBookmark(t).select();
}
},UE.commands.adaptbytext=UE.commands.adaptbywindow={
queryCommandState:function(){
return o(this).table?0:-1;
},
execCommand:function(t){
var n=o(this),i=n.table;
if(i)if("adaptbywindow"==t)e(i,this);else{
var r=b.getElementsByTagName(i,"td th");
u.each(r,function(e){
e.removeAttribute("width");
}),i.removeAttribute("width");
}
}
},UE.commands.averagedistributecol={
queryCommandState:function(){
var e=r(this);
return e&&(e.isFullRow()||e.isFullCol())?0:-1;
},
execCommand:function(){
function e(){
var e,t=i.table,o=0,r=0,s=a(n,t);
if(i.isFullRow())o=t.offsetWidth,r=i.colsNum;else for(var l,d=i.cellsRange.beginColIndex,c=i.cellsRange.endColIndex,u=d;c>=u;)l=i.selectedTds[u],
o+=l.offsetWidth,u+=l.colSpan,r+=1;
return e=Math.ceil(o/r)-2*s.tdBorder-2*s.tdPadding;
}
function t(e){
u.each(b.getElementsByTagName(i.table,"th"),function(e){
e.setAttribute("width","");
});
var t=i.isFullRow()?b.getElementsByTagName(i.table,"td"):i.selectedTds;
u.each(t,function(t){
1==t.colSpan&&t.setAttribute("width",e);
});
}
var n=this,i=r(n);
i&&i.selectedTds.length&&t(e());
}
},UE.commands.averagedistributerow={
queryCommandState:function(){
var e=r(this);
return e?e.selectedTds&&/th/gi.test(e.selectedTds[0].tagName)?-1:e.isFullRow()||e.isFullCol()?0:-1:-1;
},
execCommand:function(){
function e(){
var e,t,o=0,r=i.table,s=a(n,r),d=parseInt(b.getComputedStyle(r.getElementsByTagName("td")[0],"padding-top"));
if(i.isFullCol()){
var c,u,f=b.getElementsByTagName(r,"caption"),m=b.getElementsByTagName(r,"th");
f.length>0&&(c=f[0].offsetHeight),m.length>0&&(u=m[0].offsetHeight),o=r.offsetHeight-(c||0)-(u||0),
t=0==m.length?i.rowsNum:i.rowsNum-1;
}else{
for(var h=i.cellsRange.beginRowIndex,p=i.cellsRange.endRowIndex,g=0,v=b.getElementsByTagName(r,"tr"),y=h;p>=y;y++)o+=v[y].offsetHeight,
g+=1;
t=g;
}
return e=l.ie&&l.version<9?Math.ceil(o/t):Math.ceil(o/t)-2*s.tdBorder-2*d;
}
function t(e){
var t=i.isFullCol()?b.getElementsByTagName(i.table,"td"):i.selectedTds;
u.each(t,function(t){
1==t.rowSpan&&t.setAttribute("height",e);
});
}
var n=this,i=r(n);
i&&i.selectedTds.length&&t(e());
}
},UE.commands.cellalignment={
queryCommandState:function(){
return o(this).table?0:-1;
},
execCommand:function(e,t){
var n=this,i=r(n);
if(i)u.each(i.selectedTds,function(e){
b.setAttributes(e,t);
});else{
var o=n.selection.getStart(),a=o&&b.findParentByTagName(o,["td","th","caption"],!0);
/caption/gi.test(a.tagName)?(a.style.textAlign=t.align,a.style.verticalAlign=t.vAlign):b.setAttributes(a,t),
n.selection.getRange().setCursor(!0);
}
},
queryCommandValue:function(){
var e=o(this).cell;
if(e||(e=n(this)[0]),e){
var t=UE.UETable.getUETable(e).selectedTds;
return!t.length&&(t=e),UE.UETable.getTableCellAlignState(t);
}
return null;
}
},UE.commands.tablealignment={
queryCommandState:function(){
return l.ie&&l.version<8?-1:o(this).table?0:-1;
},
execCommand:function(e,t){
var n=this,i=n.selection.getStart(),o=i&&b.findParentByTagName(i,["table"],!0);
o&&o.setAttribute("align",t);
}
},UE.commands.edittable={
queryCommandState:function(){
return o(this).table?0:-1;
},
execCommand:function(e,t){
var n=this.selection.getRange(),i=b.findParentByTagName(n.startContainer,"table");
if(i){
var o=b.getElementsByTagName(i,"td").concat(b.getElementsByTagName(i,"th"),b.getElementsByTagName(i,"caption"));
u.each(o,function(e){
e.style.borderColor=t;
});
}
}
},UE.commands.edittd={
queryCommandState:function(){
return o(this).table?0:-1;
},
execCommand:function(e,t){
var n=this,i=r(n);
if(i)u.each(i.selectedTds,function(e){
e.style.backgroundColor=t;
});else{
var o=n.selection.getStart(),a=o&&b.findParentByTagName(o,["td","th","caption"],!0);
a&&(a.style.backgroundColor=t);
}
}
},UE.commands.sorttable={
queryCommandState:function(){
var e=this,t=o(e);
if(!t.cell)return-1;
for(var n,i=t.table,r=i.getElementsByTagName("td"),a=0;n=r[a++];)if(1!=n.rowSpan||1!=n.colSpan)return-1;
return 0;
},
execCommand:function(e,t){
var n=this,i=n.selection.getRange(),r=i.createBookmark(!0),a=o(n),l=a.cell,d=s(a.table),c=d.getCellInfo(l);
d.sortTable(c.cellIndex,t),i.moveToBookmark(r).select();
}
},UE.commands.enablesort=UE.commands.disablesort={
queryCommandState:function(){
return o(this).table?0:-1;
},
execCommand:function(e){
var t=o(this).table;
t.setAttribute("data-sort","enablesort"==e?"sortEnabled":"sortDisabled");
}
},UE.commands.settablebackground={
queryCommandState:function(){
return n(this).length>1?0:-1;
},
execCommand:function(e,t){
var i,o;
i=n(this),o=s(i[0]),o.setBackground(i,t);
}
},UE.commands.cleartablebackground={
queryCommandState:function(){
var e=n(this);
if(!e.length)return-1;
for(var t,i=0;t=e[i++];)if(""!==t.style.backgroundColor)return 0;
return-1;
},
execCommand:function(){
var e=n(this),t=s(e[0]);
t.removeBackground(e);
}
},UE.commands.interlacetable=UE.commands.uninterlacetable={
queryCommandState:function(e){
var t=o(this).table;
if(!t)return-1;
var n=t.getAttribute("interlaced");
return"interlacetable"==e?"enabled"===n?-1:0:n&&"disabled"!==n?0:-1;
},
execCommand:function(e,t){
var n=o(this).table;
"interlacetable"==e?(n.setAttribute("interlaced","enabled"),this.fireEvent("interlacetable",n,t)):(n.setAttribute("interlaced","disabled"),
this.fireEvent("uninterlacetable",n));
}
};
}(),UE.plugins.table=function(){
function e(){}
function t(e){
n(e,"width",!0),n(e,"height",!0);
}
function n(e,t,n){
e.style[t]&&(n&&e.setAttribute(t,parseInt(e.style[t],10)),e.style[t]="");
}
function i(e){
if("TD"==e.tagName||"TH"==e.tagName)return e;
var t;
return(t=b.findParentByTagName(e,"td",!0)||b.findParentByTagName(e,"th",!0))?t:null;
}
function o(e){
var t=new RegExp(b.fillChar,"g");
if(e[l.ie?"innerText":"textContent"].replace(/^\s*$/,"").replace(t,"").length>0)return 0;
for(var n in m.$isNotEmpty)if(e.getElementsByTagName(n).length)return 0;
return 1;
}
function r(e){
return e.pageX||e.pageY?{
x:e.pageX,
y:e.pageY
}:{
x:e.clientX+W.document.body.scrollLeft-W.document.body.clientLeft,
y:e.clientY+W.document.body.scrollTop-W.document.body.clientTop
};
}
function a(t){
if(!R())try{
var n,o=i(t.target||t.srcElement);
if(Y&&(W.body.style.webkitUserSelect="none",(Math.abs(Q.x-t.clientX)>G||Math.abs(Q.y-t.clientY)>G)&&(E(),
Y=!1,J=0,S(t))),st&&ft)return J=0,W.body.style.webkitUserSelect="none",W.selection.getNative()[l.ie9below?"empty":"removeAllRanges"](),
n=r(t),g(W,!0,st,n,o),void("h"==st?ut.style.left=h(ft,t)+"px":"v"==st&&(ut.style.top=p(ft,t)+"px"));
if(o){
if(W.fireEvent("excludetable",o)===!0)return;
n=r(t);
var a=v(o,n),s=b.findParentByTagName(o,"table",!0);
if(f(s,o,t,!0)){
if(W.fireEvent("excludetable",s)===!0)return;
W.body.style.cursor="url("+W.options.cursorpath+"h.png),pointer";
}else if(f(s,o,t)){
if(W.fireEvent("excludetable",s)===!0)return;
W.body.style.cursor="url("+W.options.cursorpath+"v.png),pointer";
}else{
W.body.style.cursor="text";
/\d/.test(a)&&(a=a.replace(/\d/,""),o=tt(o).getPreviewCell(o,"v"==a)),g(W,o?!!a:!1,o?a:"",n,o);
}
}else d(!1,s,W);
}catch(c){
e(c);
}
}
function d(e,t,n){
if(e)c(t,n);else{
if(ct)return;
gt=setTimeout(function(){
!ct&&dt&&dt.parentNode&&dt.parentNode.removeChild(dt);
},2e3);
}
}
function c(e,t){
function n(n,i){
clearTimeout(a),a=setTimeout(function(){
t.fireEvent("tableClicked",e,i);
},300);
}
function i(){
clearTimeout(a);
var n=tt(e),i=e.rows[0].cells[0],o=n.getLastCell(),r=n.getCellsRange(i,o);
t.selection.getRange().setStart(i,0).setCursor(!1,!0),n.setSelected(r);
}
var o=b.getXY(e),r=e.ownerDocument;
if(dt&&dt.parentNode)return dt;
dt=r.createElement("div"),dt.contentEditable=!1,dt.innerHTML="",dt.style.cssText="width:15px;height:15px;background-image:url("+t.options.UEDITOR_HOME_URL+"dialogs/table/dragicon.png);position: absolute;cursor:move;top:"+(o.y-15)+"px;left:"+o.x+"px;",
b.unSelectable(dt),dt.onmouseover=function(){
ct=!0;
},dt.onmouseout=function(){
ct=!1;
},b.on(dt,"click",function(e,t){
n(t,this);
}),b.on(dt,"dblclick",function(e,t){
i(t);
}),b.on(dt,"dragstart",function(e,t){
b.preventDefault(t);
});
var a;
r.body.appendChild(dt);
}
function f(e,t,n,i){
var o=r(n),a=v(t,o);
if(i){
var s=e.getElementsByTagName("caption")[0],l=s?s.offsetHeight:0;
return"v1"==a&&o.y-b.getXY(e).y-l<8;
}
return"h1"==a&&o.x-b.getXY(e).x<8;
}
function h(e,t){
var n=tt(e);
if(n){
var i=n.getSameEndPosCells(e,"x")[0],o=n.getSameStartPosXCells(e)[0],a=r(t).x,s=(i?b.getXY(i).x:b.getXY(n.table).x)+20,l=o?b.getXY(o).x+o.offsetWidth-20:W.body.offsetWidth+5||parseInt(b.getComputedStyle(W.body,"width"),10);
return s+=X,l-=X,s>a?s:a>l?l:a;
}
}
function p(t,n){
try{
var i=b.getXY(t).y,o=r(n).y;
return i>o?i:o;
}catch(a){
e(a);
}
}
function g(t,n,i,o,r){
try{
t.body.style.cursor="h"==i?"col-resize":"v"==i?"row-resize":"text",l.ie&&(!i||mt||nt(t)?H(t):(U(t,t.document),
$(i,r))),lt=n;
}catch(a){
e(a);
}
}
function v(e,t){
var n=b.getXY(e);
return n?n.x+e.offsetWidth-t.x<K?"h":t.x-n.x<K?"h1":n.y+e.offsetHeight-t.y<K?"v":t.y-n.y<K?"v1":"":"";
}
function y(e,t){
if(!R())if(Q={
x:t.clientX,
y:t.clientY
},2==t.button){
var n=nt(W),i=!1;
if(n){
var o=V(W,t);
u.each(n.selectedTds,function(e){
e===o&&(i=!0);
}),i?(o=n.selectedTds[0],setTimeout(function(){
W.selection.getRange().setStart(o,0).setCursor(!1,!0);
},0)):(ot(b.getElementsByTagName(W.body,"th td")),n.clearSelected());
}
}else N(t);
}
function C(e){
J=0,e=e||W.window.event;
var t=i(e.target||e.srcElement);
if(t){
var n;
if(n=v(t,r(e))){
if(H(W),"h1"==n)if(n="h",f(b.findParentByTagName(t,"table"),t,e))W.execCommand("adaptbywindow");else if(t=tt(t).getPreviewCell(t)){
var o=W.selection.getRange();
o.selectNodeContents(t).setCursor(!0,!0);
}
if("h"==n){
var a=tt(t),s=a.table,l=A(t,s,!0);
l=w(l,"left"),a.width=a.offsetWidth;
var d=[],c=[];
u.each(l,function(e){
d.push(e.offsetWidth);
}),u.each(l,function(e){
e.removeAttribute("width");
}),window.setTimeout(function(){
var e=!0;
u.each(l,function(t,n){
var i=t.offsetWidth;
return i>d[n]?(e=!1,!1):void c.push(i);
});
var t=e?c:d;
u.each(l,function(e,n){
e.width=t[n]-O();
});
},0);
}
}
}
}
function N(e){
if(ot(b.getElementsByTagName(W.body,"td th")),u.each(W.document.getElementsByTagName("table"),function(e){
e.ueTable=null;
}),rt=V(W,e)){
var t=b.findParentByTagName(rt,"table",!0),n=tt(t);
n&&n.clearSelected(),lt?x(e):(W.document.body.style.webkitUserSelect="",mt=!0,W.addListener("mouseover",B));
}
}
function x(e){
l.ie&&(e=T(e)),E(),Y=!0,j=setTimeout(function(){
S(e);
},Z);
}
function w(e,t){
for(var n=[],i=null,o=0,r=e.length;r>o;o++)i=e[o][t],i&&n.push(i);
return n;
}
function E(){
j&&clearTimeout(j),j=null;
}
function T(e){
var t=["pageX","pageY","clientX","clientY","srcElement","target"],n={};
if(e)for(var i,o,r=0;i=t[r];r++)o=e[i],o&&(n[i]=o);
return n;
}
function S(e){
if(Y=!1,rt){
var t=Math.abs(Q.x-e.clientX)>=Math.abs(Q.y-e.clientY)?"h":"v";
/\d/.test(t)&&(t=t.replace(/\d/,""),rt=tt(rt).getPreviewCell(rt,"v"==t)),H(W),U(W,W.document),
W.fireEvent("saveScene"),$(t,rt),mt=!0,st=t,ft=rt;
}
}
function k(e,t){
if(!R()){
if(E(),Y=!1,lt&&(J=++J%3,Q={
x:t.clientX,
y:t.clientY
},z=setTimeout(function(){
J>0&&J--;
},Z),2===J))return J=0,void C(t);
if(2!=t.button){
var n=this,i=n.selection.getRange(),o=b.findParentByTagName(i.startContainer,"table",!0),r=b.findParentByTagName(i.endContainer,"table",!0);
if((o||r)&&(o===r?(o=b.findParentByTagName(i.startContainer,["td","th","caption"],!0),
r=b.findParentByTagName(i.endContainer,["td","th","caption"],!0),o!==r&&n.selection.clearRange()):n.selection.clearRange()),
mt=!1,n.document.body.style.webkitUserSelect="",st&&ft){
n.selection.getNative()[l.ie9below?"empty":"removeAllRanges"](),J=0,ut=n.document.getElementById("ue_tableDragLine");
var a=b.getXY(ft),d=b.getXY(ut);
switch(st){
case"h":
I(ft,d.x-a.x);
break;

case"v":
L(ft,d.y-a.y-ft.offsetHeight);
}
return st="",ft=null,H(n),void n.fireEvent("saveScene");
}
if(rt){
var c=tt(rt),u=c?c.selectedTds[0]:null;
if(u)i=new s.Range(n.document),b.isEmptyBlock(u)?i.setStart(u,0).setCursor(!1,!0):i.selectNodeContents(u).shrinkBoundary().setCursor(!1,!0);else if(i=n.selection.getRange().shrinkBoundary(),
!i.collapsed){
var o=b.findParentByTagName(i.startContainer,["td","th"],!0),r=b.findParentByTagName(i.endContainer,["td","th"],!0);
(o&&!r||!o&&r||o&&r&&o!==r)&&i.setCursor(!1,!0);
}
rt=null,n.removeListener("mouseover",B);
}else{
var f=b.findParentByTagName(t.target||t.srcElement,"td",!0);
if(f||(f=b.findParentByTagName(t.target||t.srcElement,"th",!0)),f&&("TD"==f.tagName||"TH"==f.tagName)){
if(n.fireEvent("excludetable",f)===!0)return;
i=new s.Range(n.document),i.setStart(f,0).setCursor(!1,!0);
}
}
n._selectionChange(250,t);
}
}
}
function B(e,t){
if(!R()){
var n=this,i=t.target||t.srcElement;
if(at=b.findParentByTagName(i,"td",!0)||b.findParentByTagName(i,"th",!0),rt&&at&&("TD"==rt.tagName&&"TD"==at.tagName||"TH"==rt.tagName&&"TH"==at.tagName)&&b.findParentByTagName(rt,"table")==b.findParentByTagName(at,"table")){
var o=tt(at);
if(rt!=at){
n.document.body.style.webkitUserSelect="none",n.selection.getNative()[l.ie9below?"empty":"removeAllRanges"]();
var r=o.getCellsRange(rt,at);
o.setSelected(r);
}else n.document.body.style.webkitUserSelect="",o.clearSelected();
}
t.preventDefault?t.preventDefault():t.returnValue=!1;
}
}
function _(e,t,n){
var i=parseInt(b.getComputedStyle(e,"line-height"),10),o=n+t;
t=i>o?i:o,e.style.height&&(e.style.height=""),1==e.rowSpan?e.setAttribute("height",t):e.removeAttribute&&e.removeAttribute("height");
}
function I(e,t){
var n=tt(e);
if(n){
var i=n.table,o=A(e,i);
if(i.style.width="",i.removeAttribute("width"),t=D(t,e,o),e.nextSibling){
u.each(o,function(e){
e.left.width=+e.left.width+t,e.right&&(e.right.width=+e.right.width-t);
});
}else u.each(o,function(e){
e.left.width-=-t;
});
}
}
function R(){
return"false"===W.body.contentEditable;
}
function L(e,t){
if(!(Math.abs(t)<10)){
var n=tt(e);
if(n)for(var i,o=n.getSameEndPosCells(e,"y"),r=o[0]?o[0].offsetHeight:0,a=0;i=o[a++];)_(i,t,r);
}
}
function A(e,t,n){
if(t||(t=b.findParentByTagName(e,"table")),!t)return null;
for(var i=(b.getNodeIndex(e),e),o=t.rows,r=0;i;)1===i.nodeType&&(r+=i.colSpan||1),
i=i.previousSibling;
i=null;
var a=[];
return u.each(o,function(e){
var t=e.cells,i=0;
u.each(t,function(e){
return i+=e.colSpan||1,i===r?(a.push({
left:e,
right:e.nextSibling||null
}),!1):i>r?(n&&a.push({
left:e
}),!1):void 0;
});
}),a;
}
function D(e,t,n){
if(e-=O(),0>e)return 0;
e-=P(t);
var i=0>e?"left":"right";
return e=Math.abs(e),u.each(n,function(t){
var n=t[i];
n&&(e=Math.min(e,P(n)-X));
}),e=0>e?0:e,"left"===i?-e:e;
}
function P(e){
var t=0,t=e.offsetWidth-O();
e.nextSibling||(t-=M(e)),t=0>t?0:t;
try{
e.width=t;
}catch(n){}
return t;
}
function M(e){
if(tab=b.findParentByTagName(e,"table",!1),void 0===tab.offsetVal){
var t=e.previousSibling;
tab.offsetVal=t&&e.offsetWidth-t.offsetWidth===et.borderWidth?et.borderWidth:0;
}
return tab.offsetVal;
}
function O(){
if(void 0===et.tabcellSpace){
var e=W.document.createElement("table"),t=W.document.createElement("tbody"),n=W.document.createElement("tr"),i=W.document.createElement("td"),o=null;
i.style.cssText="border: 0;",i.width=1,n.appendChild(i),n.appendChild(o=i.cloneNode(!1)),
t.appendChild(n),e.appendChild(t),e.style.cssText="visibility: hidden;",W.body.appendChild(e),
et.paddingSpace=i.offsetWidth-1;
var r=e.offsetWidth;
i.style.cssText="",o.style.cssText="",et.borderWidth=(e.offsetWidth-r)/3,et.tabcellSpace=et.paddingSpace+et.borderWidth,
W.body.removeChild(e);
}
return O=function(){
return et.tabcellSpace;
},et.tabcellSpace;
}
function U(e){
mt||(ut=e.document.createElement("div"),b.setAttributes(ut,{
id:"ue_tableDragLine",
unselectable:"on",
contenteditable:!1,
onresizestart:"return false",
ondragstart:"return false",
onselectstart:"return false",
style:"background-color:blue;position:absolute;padding:0;margin:0;background-image:none;border:0px none;opacity:0;filter:alpha(opacity=0)"
}),e.body.appendChild(ut));
}
function H(e){
if(!mt)for(var t;t=e.document.getElementById("ue_tableDragLine");)b.remove(t);
}
function $(e,t){
if(t){
var n,i=b.findParentByTagName(t,"table"),o=i.getElementsByTagName("caption"),r=i.offsetWidth,a=i.offsetHeight-(o.length>0?o[0].offsetHeight:0),s=b.getXY(i),l=b.getXY(t);
switch(e){
case"h":
n="height:"+a+"px;top:"+(s.y+(o.length>0?o[0].offsetHeight:0))+"px;left:"+(l.x+t.offsetWidth),
ut.style.cssText=n+"px;position: absolute;display:block;background-color:blue;width:1px;border:0; color:blue;opacity:.3;filter:alpha(opacity=30)";
break;

case"v":
n="width:"+r+"px;left:"+s.x+"px;top:"+(l.y+t.offsetHeight),ut.style.cssText=n+"px;overflow:hidden;position: absolute;display:block;background-color:blue;height:1px;border:0;color:blue;opacity:.2;filter:alpha(opacity=20)";
}
}
}
function q(e,t){
for(var n,i,o=b.getElementsByTagName(e.body,"table"),r=0;i=o[r++];){
var a=b.getElementsByTagName(i,"td");
a[0]&&(t?(n=a[0].style.borderColor.replace(/\s/g,""),/(#ffffff)|(rgb\(255,f55,255\))/gi.test(n)&&b.addClass(i,"noBorderTable")):b.removeClasses(i,"noBorderTable"));
}
}
function F(e,t,n){
var i=e.body;
return i.offsetWidth-(t?2*parseInt(b.getComputedStyle(i,"margin-left"),10):0)-2*n.tableBorder-(e.options.offsetWidth||0);
}
function V(e,t){
var n=b.findParentByTagName(t.target||t.srcElement,["td","th"],!0),i=null;
if(!n)return null;
if(i=v(n,r(t)),!n)return null;
if("h1"===i&&n.previousSibling){
var o=b.getXY(n),a=n.offsetWidth;
Math.abs(o.x+a-t.clientX)>a/3&&(n=n.previousSibling);
}else if("v1"===i&&n.parentNode.previousSibling){
var o=b.getXY(n),s=n.offsetHeight;
Math.abs(o.y+s-t.clientY)>s/3&&(n=n.parentNode.previousSibling.firstChild);
}
return n&&e.fireEvent("excludetable",n)!==!0?n:null;
}
var W=this,j=null,z=null,X=5,Y=!1,K=5,G=10,J=0,Q=null,Z=360,et=UE.UETable,tt=function(e){
return et.getUETable(e);
},nt=function(e){
return et.getUETableBySelected(e);
},it=function(e,t){
return et.getDefaultValue(e,t);
},ot=function(e){
return et.removeSelectedClass(e);
};
W.ready(function(){
var e=this,t=e.selection.getText;
e.selection.getText=function(){
var n=nt(e);
if(n){
var i="";
return u.each(n.selectedTds,function(e){
i+=e[l.ie?"innerText":"textContent"];
}),i;
}
return t.call(e.selection);
};
});
var rt=null,at=null,st="",lt=!1,dt=null,ct=!1,ut=null,ft=null,mt=!1,ht=!0;
W.setOpt({
maxColNum:20,
maxRowNum:100,
defaultCols:5,
defaultRows:5,
tdvalign:"top",
cursorpath:W.options.UEDITOR_HOME_URL+"themes/default/images/cursor_",
tableDragable:!1,
classList:["ue-table-interlace-color-single","ue-table-interlace-color-double"]
}),W.getUETable=tt;
var pt={
deletetable:1,
inserttable:1,
cellvalign:1,
insertcaption:1,
deletecaption:1,
inserttitle:1,
deletetitle:1,
mergeright:1,
mergedown:1,
mergecells:1,
insertrow:1,
insertrownext:1,
deleterow:1,
insertcol:1,
insertcolnext:1,
deletecol:1,
splittocells:1,
splittorows:1,
splittocols:1,
adaptbytext:1,
adaptbywindow:1,
adaptbycustomer:1,
insertparagraph:1,
insertparagraphbeforetable:1,
averagedistributecol:1,
averagedistributerow:1
};
W.ready(function(){
u.cssRule("table",".selectTdClass{background-color:#edf5fa !important}table.noBorderTable td,table.noBorderTable th,table.noBorderTable caption{border:1px dashed #ddd !important}table{margin-bottom:10px;border-collapse:collapse;display:table;}td,th{padding: 5px 10px;border: 1px solid #DDD;}caption{border:1px dashed #DDD;border-bottom:0;padding:3px;text-align:center;}th{border-top:2px solid #BBB;background:#F7F7F7;}.ue-table-interlace-color-single{ background-color: #fcfcfc; } .ue-table-interlace-color-double{ background-color: #f7faff; }td p{margin:0;padding:0;}",W.document);
var e,n,r;
W.addListener("keydown",function(t,i){
var a=this,s=i.keyCode||i.which;
if(8==s){
var l=nt(a);
l&&l.selectedTds.length&&(l.isFullCol()?a.execCommand("deletecol"):l.isFullRow()?a.execCommand("deleterow"):a.fireEvent("delcells"),
b.preventDefault(i));
var d=b.findParentByTagName(a.selection.getStart(),"caption",!0),c=a.selection.getRange();
if(c.collapsed&&d&&o(d)){
a.fireEvent("saveScene");
var u=d.parentNode;
b.remove(d),u&&c.setStart(u.rows[0].cells[0],0).setCursor(!1,!0),a.fireEvent("saveScene");
}
}
if(46==s){
var l=nt(a);
if(l){
a.fireEvent("saveScene");
for(var f,m=0;f=l.selectedTds[m++];)b.fillNode(a.document,f);
a.fireEvent("saveScene"),b.preventDefault(i);
}
}
if(13==s){
var h=a.selection.getRange(),d=b.findParentByTagName(h.startContainer,"caption",!0);
if(d){
var u=b.findParentByTagName(d,"table");
return h.collapsed?d&&h.setStart(u.rows[0].cells[0],0).setCursor(!1,!0):(h.deleteContents(),
a.fireEvent("saveScene")),void b.preventDefault(i);
}
if(h.collapsed){
var u=b.findParentByTagName(h.startContainer,"table");
if(u){
var p=u.rows[0].cells[0],g=b.findParentByTagName(a.selection.getStart(),["td","th"],!0),v=u.previousSibling;
if(p===g&&(!v||1==v.nodeType&&"TABLE"==v.tagName)&&b.isStartInblock(h)){
var y=b.findParent(a.selection.getStart(),function(e){
return b.isBlockElm(e);
},!0);
y&&(/t(h|d)/i.test(y.tagName)||y===g.firstChild)&&(a.execCommand("insertparagraphbeforetable"),
b.preventDefault(i));
}
}
}
}
if((i.ctrlKey||i.metaKey)&&"67"==i.keyCode){
e=null;
var l=nt(a);
if(l){
var C=l.selectedTds;
n=l.isFullCol(),r=l.isFullRow(),e=[[l.cloneCell(C[0],null,!0)]];
for(var f,m=1;f=C[m];m++)f.parentNode!==C[m-1].parentNode?e.push([l.cloneCell(f,null,!0)]):e[e.length-1].push(l.cloneCell(f,null,!0));
}
}
}),W.addListener("tablehasdeleted",function(){
g(this,!1,"",null),dt&&b.remove(dt);
}),W.addListener("beforepaste",function(i,a){
var s=this,d=s.selection.getRange();
if(b.findParentByTagName(d.startContainer,"caption",!0)){
var c=s.document.createElement("div");
return c.innerHTML=a.html,void(a.html=c[l.ie9below?"innerText":"textContent"]);
}
var f=nt(s);
if(e){
s.fireEvent("saveScene");
var m,h,d=s.selection.getRange(),p=b.findParentByTagName(d.startContainer,["td","th"],!0);
if(p){
var g=tt(p);
if(r){
var v=g.getCellInfo(p).rowIndex;
"TH"==p.tagName&&v++;
for(var y,C=0;y=e[C++];){
for(var N,x=g.insertRow(v++,"td"),w=0;N=y[w];w++){
var E=x.cells[w];
E||(E=x.insertCell(w)),E.innerHTML=N.innerHTML,N.getAttribute("width")&&E.setAttribute("width",N.getAttribute("width")),
N.getAttribute("vAlign")&&E.setAttribute("vAlign",N.getAttribute("vAlign")),N.getAttribute("align")&&E.setAttribute("align",N.getAttribute("align")),
N.style.cssText&&(E.style.cssText=N.style.cssText);
}
for(var N,w=0;(N=x.cells[w])&&y[w];w++)N.innerHTML=y[w].innerHTML,y[w].getAttribute("width")&&N.setAttribute("width",y[w].getAttribute("width")),
y[w].getAttribute("vAlign")&&N.setAttribute("vAlign",y[w].getAttribute("vAlign")),
y[w].getAttribute("align")&&N.setAttribute("align",y[w].getAttribute("align")),y[w].style.cssText&&(N.style.cssText=y[w].style.cssText);
}
}else{
if(n){
k=g.getCellInfo(p);
for(var N,T=0,w=0,y=e[0];N=y[w++];)T+=N.colSpan||1;
for(s.__hasEnterExecCommand=!0,C=0;T>C;C++)s.execCommand("insertcol");
s.__hasEnterExecCommand=!1,p=g.table.rows[0].cells[k.cellIndex],"TH"==p.tagName&&(p=g.table.rows[1].cells[k.cellIndex]);
}
for(var y,C=0;y=e[C++];){
m=p;
for(var N,w=0;N=y[w++];)if(p)p.innerHTML=N.innerHTML,N.getAttribute("width")&&p.setAttribute("width",N.getAttribute("width")),
N.getAttribute("vAlign")&&p.setAttribute("vAlign",N.getAttribute("vAlign")),N.getAttribute("align")&&p.setAttribute("align",N.getAttribute("align")),
N.style.cssText&&(p.style.cssText=N.style.cssText),h=p,p=p.nextSibling;else{
var S=N.cloneNode(!0);
b.removeAttributes(S,["class","rowSpan","colSpan"]),h.parentNode.appendChild(S);
}
if(p=g.getNextCell(m,!0,!0),!e[C])break;
if(!p){
var k=g.getCellInfo(m);
g.table.insertRow(g.table.rows.length),g.update(),p=g.getVSideCell(m,!0);
}
}
}
g.update();
}else{
f=s.document.createElement("table");
for(var y,C=0;y=e[C++];){
for(var N,x=f.insertRow(f.rows.length),w=0;N=y[w++];)S=et.cloneCell(N,null,!0),b.removeAttributes(S,["class"]),
x.appendChild(S);
2==w&&S.rowSpan>1&&(S.rowSpan=1);
}
var B=it(s),_=s.body.offsetWidth-(ht?2*parseInt(b.getComputedStyle(s.body,"margin-left"),10):0)-2*B.tableBorder-(s.options.offsetWidth||0);
s.execCommand("insertHTML","<table  "+(n&&r?'width="'+_+'"':"")+">"+f.innerHTML.replace(/>\s*</g,"><").replace(/\bth\b/gi,"td")+"</table>");
}
return s.fireEvent("contentchange"),s.fireEvent("saveScene"),a.html="",!0;
}
var I,c=s.document.createElement("div");
c.innerHTML=a.html,I=c.getElementsByTagName("table"),b.findParentByTagName(s.selection.getStart(),"table")?(u.each(I,function(e){
b.remove(e);
}),b.findParentByTagName(s.selection.getStart(),"caption",!0)&&(c.innerHTML=c[l.ie?"innerText":"textContent"])):u.each(I,function(e){
t(e,!0),b.removeAttributes(e,["style","border"]),u.each(b.getElementsByTagName(e,"td"),function(e){
o(e)&&b.fillNode(s.document,e),t(e,!0);
});
}),a.html=c.innerHTML;
}),W.addListener("afterpaste",function(){
u.each(b.getElementsByTagName(W.body,"table"),function(e){
if(e.offsetWidth>W.body.offsetWidth){
var t=it(W,e);
e.style.width=W.body.offsetWidth-(ht?2*parseInt(b.getComputedStyle(W.body,"margin-left"),10):0)-2*t.tableBorder-(W.options.offsetWidth||0)+"px";
}
});
}),W.addListener("blur",function(){
e=null;
});
var c;
W.addListener("keydown",function(){
clearTimeout(c),c=setTimeout(function(){
var e=W.selection.getRange(),t=b.findParentByTagName(e.startContainer,["th","td"],!0);
if(t){
var n=t.parentNode.parentNode.parentNode;
n.offsetWidth>n.getAttribute("width")&&(t.style.wordBreak="break-all");
}
},100);
}),W.addListener("selectionchange",function(){
g(W,!1,"",null);
}),W.addListener("contentchange",function(){
var e=this;
if(H(e),!nt(e)){
var t=e.selection.getRange(),n=t.startContainer;
n=b.findParentByTagName(n,["td","th"],!0),u.each(b.getElementsByTagName(e.document,"table"),function(t){
e.fireEvent("excludetable",t)!==!0&&(t.ueTable=new et(t),u.each(b.getElementsByTagName(e.document,"td"),function(t){
b.isEmptyBlock(t)&&t!==n&&(b.fillNode(e.document,t),l.ie&&6==l.version&&(t.innerHTML="&nbsp;"));
}),u.each(b.getElementsByTagName(e.document,"th"),function(t){
b.isEmptyBlock(t)&&t!==n&&(b.fillNode(e.document,t),l.ie&&6==l.version&&(t.innerHTML="&nbsp;"));
}),t.onmouseover=function(){
e.fireEvent("tablemouseover",t);
},t.onmousemove=function(){
e.fireEvent("tablemousemove",t),e.options.tableDragable&&d(!0,this,e);
},t.onmouseout=function(){
e.fireEvent("tablemouseout",t),g(e,!1,"",null),H(e);
},t.onclick=function(t){
t=e.window.event||t;
var n=i(t.target||t.srcElement);
if(n){
var o,r=tt(n),a=r.table,s=r.getCellInfo(n),l=e.selection.getRange();
if(f(a,n,t,!0)){
var d=r.getCell(r.indexTable[r.rowsNum-1][s.colIndex].rowIndex,r.indexTable[r.rowsNum-1][s.colIndex].cellIndex);
return void(t.shiftKey&&r.selectedTds.length?r.selectedTds[0]!==d?(o=r.getCellsRange(r.selectedTds[0],d),
r.setSelected(o)):l&&l.selectNodeContents(d).select():n!==d?(o=r.getCellsRange(n,d),
r.setSelected(o)):l&&l.selectNodeContents(d).select());
}
if(f(a,n,t)){
var c=r.getCell(r.indexTable[s.rowIndex][r.colsNum-1].rowIndex,r.indexTable[s.rowIndex][r.colsNum-1].cellIndex);
t.shiftKey&&r.selectedTds.length?r.selectedTds[0]!==c?(o=r.getCellsRange(r.selectedTds[0],c),
r.setSelected(o)):l&&l.selectNodeContents(c).select():n!==c?(o=r.getCellsRange(n,c),
r.setSelected(o)):l&&l.selectNodeContents(c).select();
}
}
});
}),q(e,!0);
}
}),b.on(W.document,"mousemove",a),b.on(W.document,"mouseout",function(e){
var t=e.target||e.srcElement;
"TABLE"==t.tagName&&g(W,!1,"",null);
}),W.addListener("interlacetable",function(e,t,n){
if(t)for(var i=this,o=t.rows,r=o.length,a=function(e,t,n){
return e[t]?e[t]:n?e[t%e.length]:"";
},s=0;r>s;s++)o[s].className=a(n||i.options.classList,s,!0);
}),W.addListener("uninterlacetable",function(e,t){
if(t)for(var n=this,i=t.rows,o=n.options.classList,r=i.length,a=0;r>a;a++)b.removeClasses(i[a],o);
}),W.addListener("mousedown",y),W.addListener("mouseup",k),b.on(W.body,"dragstart",function(e){
k.call(W,"dragstart",e);
});
var m=0;
W.addListener("mousedown",function(){
m=0;
}),W.addListener("tabkeydown",function(){
var e=this.selection.getRange(),t=e.getCommonAncestor(!0,!0),n=b.findParentByTagName(t,"table");
if(n){
if(b.findParentByTagName(t,"caption",!0)){
var i=b.getElementsByTagName(n,"th td");
i&&i.length&&e.setStart(i[0],0).setCursor(!1,!0);
}else{
var i=b.findParentByTagName(t,["td","th"],!0),r=tt(i);
m=i.rowSpan>1?m:r.getCellInfo(i).rowIndex;
var a=r.getTabNextCell(i,m);
a?o(a)?e.setStart(a,0).setCursor(!1,!0):e.selectNodeContents(a).select():(W.fireEvent("saveScene"),
W.__hasEnterExecCommand=!0,this.execCommand("insertrownext"),W.__hasEnterExecCommand=!1,
e=this.selection.getRange(),e.setStart(n.rows[n.rows.length-1].cells[0],0).setCursor(),
W.fireEvent("saveScene"));
}
return!0;
}
}),l.ie&&W.addListener("selectionchange",function(){
g(this,!1,"",null);
}),W.addListener("keydown",function(e,t){
var n=this,i=t.keyCode||t.which;
if(8!=i&&46!=i){
var o=!(t.ctrlKey||t.metaKey||t.shiftKey||t.altKey);
o&&ot(b.getElementsByTagName(n.body,"td"));
var r=nt(n);
r&&o&&r.clearSelected();
}
}),W.addListener("beforegetcontent",function(){
q(this,!1),l.ie&&u.each(this.document.getElementsByTagName("caption"),function(e){
b.isEmptyNode(e)&&(e.innerHTML="&nbsp;");
});
}),W.addListener("aftergetcontent",function(){
q(this,!0);
}),W.addListener("getAllHtml",function(){
ot(W.document.getElementsByTagName("td"));
}),W.addListener("fullscreenchanged",function(e,t){
if(!t){
var n=this.body.offsetWidth/document.body.offsetWidth,i=b.getElementsByTagName(this.body,"table");
u.each(i,function(e){
if(e.offsetWidth<W.body.offsetWidth)return!1;
var t=b.getElementsByTagName(e,"td"),i=[];
u.each(t,function(e){
i.push(e.offsetWidth);
});
for(var o,r=0;o=t[r];r++)o.setAttribute("width",Math.floor(i[r]*n));
e.setAttribute("width",Math.floor(F(W,ht,it(W))));
});
}
});
var h=W.execCommand;
W.execCommand=function(e){
var t=this;
e=e.toLowerCase();
var n,i,r=nt(t),a=new s.Range(t.document),l=t.commands[e]||UE.commands[e];
if(l){
if(!r||pt[e]||l.notNeedUndo||t.__hasEnterExecCommand)i=h.apply(t,arguments);else{
t.__hasEnterExecCommand=!0,t.fireEvent("beforeexeccommand",e),n=r.selectedTds;
for(var d,c,u,f=-2,m=-2,p=0;u=n[p];p++)o(u)?a.setStart(u,0).setCursor(!1,!0):a.selectNode(u).select(!0),
c=t.queryCommandState(e),d=t.queryCommandValue(e),-1!=c&&((f!==c||m!==d)&&(t._ignoreContentChange=!0,
i=h.apply(t,arguments),t._ignoreContentChange=!1),f=t.queryCommandState(e),m=t.queryCommandValue(e),
b.isEmptyBlock(u)&&b.fillNode(t.document,u));
a.setStart(n[0],0).shrinkBoundary(!0).setCursor(!1,!0),t.fireEvent("contentchange"),
t.fireEvent("afterexeccommand",e),t.__hasEnterExecCommand=!1,t._selectionChange();
}
return i;
}
};
});
var gt;
},UE.plugins.contextmenu=function(){
var e,t=this,n=t.getLang("contextMenu"),i=t.options.contextMenu;
if(i.length){
var o=UE.ui.uiUtils;
t.addListener("contextmenu",function(r,a){
var d=o.getViewportOffsetByEvent(a);
t.fireEvent("beforeselectionchange"),e&&e.destroy();
for(var c,u=0,f=[];c=i[u];u++){
var m;
!function(e){
function i(){
switch(e.icon){
case"table":
return t.getLang("contextMenu.table");

case"justifyjustify":
return t.getLang("contextMenu.paragraph");

case"aligntd":
return t.getLang("contextMenu.aligntd");

case"aligntable":
return t.getLang("contextMenu.aligntable");

case"tablesort":
return n.tablesort;

case"borderBack":
return n.borderbk;

default:
return"";
}
}
if("-"==e)(m=f[f.length-1])&&"-"!==m&&f.push("-");else if(e.hasOwnProperty("group")){
for(var o,r=0,a=[];o=e.subMenu[r];r++)!function(e){
"-"==e?(m=a[a.length-1])&&"-"!==m?a.push("-"):a.splice(a.length-1):(t.commands[e.cmdName]||UE.commands[e.cmdName]||e.query)&&(e.query?e.query():t.queryCommandState(e.cmdName))>-1&&a.push({
label:e.label||t.getLang("contextMenu."+e.cmdName+(e.value||""))||"",
className:"edui-for-"+e.cmdName+(e.className?" edui-for-"+e.cmdName+"-"+e.className:""),
onclick:e.exec?function(){
!!e.cmdName&&t.fireEvent("funcPvUvReport","menu_"+e.cmdName),e.exec.call(t);
}:function(){
t.fireEvent("funcPvUvReport","menu_"+e.cmdName+(e.value||"")),t.execCommand(e.cmdName,e.value);
}
});
}(o);
a.length&&f.push({
label:i(),
className:"edui-for-"+e.icon,
subMenu:{
items:a,
editor:t
}
});
}else if((t.commands[e.cmdName]||UE.commands[e.cmdName]||e.query)&&(e.query?e.query.call(t):t.queryCommandState(e.cmdName))>-1){
if("highlightcode"==e.cmdName){
if(1==t.queryCommandState(e.cmdName)&&"deletehighlightcode"!=e.icon)return;
if(1!=t.queryCommandState(e.cmdName)&&"deletehighlightcode"==e.icon)return;
}
f.push({
label:e.label||t.getLang("contextMenu."+e.cmdName),
className:"edui-for-"+(e.icon?e.icon:e.cmdName+(e.value||"")),
onclick:e.exec?function(){
!!e.cmdName&&t.fireEvent("funcPvUvReport","menu_"+e.cmdName),e.exec.call(t);
}:function(){
t.fireEvent("funcPvUvReport","menu_"+e.cmdName+(e.value||"")),t.execCommand(e.cmdName,e.value);
}
});
}
}(c);
}
if("-"==f[f.length-1]&&f.pop(),e=new UE.ui.Menu({
items:f,
className:"edui-contextmenu",
editor:t
}),e.render(),e.showAt(d),t.fireEvent("funcPvUvReport","contextmenu"),t.fireEvent("aftershowcontextmenu",e),
b.preventDefault(a),l.ie){
var h;
try{
h=t.selection.getNative().createRange();
}catch(p){
return;
}
if(h.item){
var g=new s.Range(t.document);
g.selectNode(h.item(0)).select(!0,!0);
}
}
});
}
},UE.plugins.shortcutmenu=function(){
var e,t=this,n=t.options.shortcutMenu||[];
n.length&&(t.addListener("contextmenu mouseup",function(t,i){
var o=this,r={
type:t,
target:i.target||i.srcElement,
screenX:i.screenX,
screenY:i.screenY,
clientX:i.clientX,
clientY:i.clientY
};
if(setTimeout(function(){
var i=o.selection.getRange();
(i.collapsed===!1||"contextmenu"==t)&&(e||(e=new a.editor.ui.ShortCutMenu({
editor:o,
items:n,
theme:o.options.theme,
className:"edui-shortcutmenu"
}),e.render(),o.fireEvent("afterrendershortcutmenu",e)),e.show(r,!!UE.plugins.contextmenu));
}),"contextmenu"==t&&(b.preventDefault(i),l.ie9below)){
var d;
try{
d=o.selection.getNative().createRange();
}catch(i){
return;
}
if(d.item){
var c=new s.Range(o.document);
c.selectNode(d.item(0)).select(!0,!0);
}
}
"keydown"==t&&e&&!e.isHidden&&e.hide();
}),t.addListener("keydown",function(t){
"keydown"==t&&e&&!e.isHidden&&e.hide();
}));
},UE.plugins.basestyle=function(){
var e={
bold:["strong","b"],
italic:["em","i"],
subscript:["sub"],
superscript:["sup"]
},t=function(e,t){
return b.filterNodeList(e.selection.getStartElementPath(),t);
},n=this;
n.addshortcutkey({
Bold:"ctrl+66",
Italic:"ctrl+73",
Underline:"ctrl+85"
}),n.addInputRule(function(e){
u.each(e.getNodesByTagName("b i"),function(e){
switch(e.tagName){
case"b":
e.tagName="strong";
break;

case"i":
e.tagName="em";
}
});
});
for(var i in e)!function(e,i){
n.commands[e]={
execCommand:function(e){
var o=n.selection.getRange(),r=t(this,i);
if(o.collapsed){
if(r){
var a=n.document.createTextNode("");
o.insertNode(a).removeInlineStyle(i),o.setStartBefore(a),b.remove(a);
}else{
var s=o.document.createElement(i[0]);
("superscript"==e||"subscript"==e)&&(a=n.document.createTextNode(""),o.insertNode(a).removeInlineStyle(["sub","sup"]).setStartBefore(a).collapse(!0)),
o.insertNode(s).setStart(s,0);
}
o.collapse(!0);
}else("superscript"==e||"subscript"==e)&&(r&&r.tagName.toLowerCase()==e||o.removeInlineStyle(["sub","sup"])),
r?o.removeInlineStyle(i):o.applyInlineStyle(i[0]);
o.select();
},
queryCommandState:function(){
return t(this,i)?1:0;
}
};
}(i,e[i]);
},UE.plugins.elementpath=function(){
var e,t,n=this;
n.setOpt("elementPathEnabled",!0),n.options.elementPathEnabled&&(n.commands.elementpath={
execCommand:function(i,o){
var r=t[o],a=n.selection.getRange();
e=1*o,a.selectNode(r).select();
},
queryCommandValue:function(){
var n=[].concat(this.selection.getStartElementPath()).reverse(),i=[];
t=n;
for(var o,r=0;o=n[r];r++)if(3!=o.nodeType){
var a=o.tagName.toLowerCase();
if("img"==a&&o.getAttribute("anchorname")&&(a="anchor"),i[r]=a,e==r){
e=-1;
break;
}
}
return i;
}
});
},UE.plugins.formatmatch=function(){
function e(r,a){
function s(e){
return m&&e.selectNode(m),e.applyInlineStyle(i[i.length-1].tagName,null,i);
}
if(l.webkit)var d="IMG"==a.target.tagName?a.target:null;
n.undoManger&&n.undoManger.save();
var c=n.selection.getRange(),u=d||c.getClosedNode();
if(t&&u&&"IMG"==u.tagName)u.style.cssText+=";float:"+(t.style.cssFloat||t.style.styleFloat||"none")+";display:"+(t.style.display||"inline"),
t=null;else if(!t){
var f=c.collapsed;
if(f){
var m=n.document.createTextNode("match");
c.insertNode(m).select();
}
n.__hasEnterExecCommand=!0;
var h=n.options.removeFormatAttributes;
n.options.removeFormatAttributes="",n.execCommand("removeformat"),n.options.removeFormatAttributes=h,
n.__hasEnterExecCommand=!1,c=n.selection.getRange(),i.length&&s(c),m&&c.setStartBefore(m).collapse(!0),
c.select(),m&&b.remove(m);
}
n.undoManger&&n.undoManger.save(),n.removeListener("mouseup",e),o=0;
}
var t,n=this,i=[],o=0;
n.addListener("reset",function(){
i=[],o=0;
}),n.commands.formatmatch={
execCommand:function(){
if(o)return o=0,i=[],void n.removeListener("mouseup",e);
var r=n.selection.getRange();
if(t=r.getClosedNode(),!t||"IMG"!=t.tagName){
r.collapse(!0).shrinkBoundary();
var a=r.startContainer;
i=b.findParents(a,!0,function(e){
return!b.isBlockElm(e)&&1==e.nodeType;
});
for(var s,l=0;s=i[l];l++)if("A"==s.tagName){
i.splice(l,1);
break;
}
}
n.addListener("mouseup",e),o=1;
},
queryCommandState:function(){
return o;
},
notNeedUndo:1
};
},UE.plugins.customstyle=function(){
var e=this;
e.setOpt({
customstyle:[{
tag:"h1",
name:"tc",
style:"font-size:32px;font-weight:bold;border-bottom:#ccc 2px solid;padding:0 4px 0 0;text-align:center;margin:0 0 20px 0;"
},{
tag:"h1",
name:"tl",
style:"font-size:32px;font-weight:bold;border-bottom:#ccc 2px solid;padding:0 4px 0 0;text-align:left;margin:0 0 10px 0;"
},{
tag:"span",
name:"im",
style:"font-size:16px;font-style:italic;font-weight:bold;line-height:18px;"
},{
tag:"span",
name:"hi",
style:"font-size:16px;font-style:italic;font-weight:bold;color:rgb(51, 153, 204);line-height:18px;"
}]
}),e.commands.customstyle={
execCommand:function(e,t){
var n,i,o=this,r=t.tag,a=b.findParent(o.selection.getStart(),function(e){
return e.getAttribute("label");
},!0),s={};
for(var l in t)void 0!==t[l]&&(s[l]=t[l]);
if(delete s.tag,a&&a.getAttribute("label")==t.label){
if(n=this.selection.getRange(),i=n.createBookmark(),n.collapsed)if(m.$block[a.tagName]){
var d=o.document.createElement("p");
b.moveChild(a,d),a.parentNode.insertBefore(d,a),b.remove(a);
}else b.remove(a,!0);else{
var c=b.getCommonAncestor(i.start,i.end),u=b.getElementsByTagName(c,r);
new RegExp(r,"i").test(c.tagName)&&u.push(c);
for(var f,h=0;f=u[h++];)if(f.getAttribute("label")==t.label){
var p=b.getPosition(f,i.start),g=b.getPosition(f,i.end);
if((p&b.POSITION_FOLLOWING||p&b.POSITION_CONTAINS)&&(g&b.POSITION_PRECEDING||g&b.POSITION_CONTAINS)&&m.$block[r]){
var d=o.document.createElement("p");
b.moveChild(f,d),f.parentNode.insertBefore(d,f);
}
b.remove(f,!0);
}
a=b.findParent(c,function(e){
return e.getAttribute("label")==t.label;
},!0),a&&b.remove(a,!0);
}
n.moveToBookmark(i).select();
}else if(m.$block[r]){
if(this.execCommand("paragraph",r,s,"customstyle"),n=o.selection.getRange(),!n.collapsed){
n.collapse(),a=b.findParent(o.selection.getStart(),function(e){
return e.getAttribute("label")==t.label;
},!0);
var v=o.document.createElement("p");
b.insertAfter(a,v),b.fillNode(o.document,v),n.setStart(v,0).setCursor();
}
}else{
if(n=o.selection.getRange(),n.collapsed)return a=o.document.createElement(r),b.setAttributes(a,s),
void n.insertNode(a).setStart(a,0).setCursor();
i=n.createBookmark(),n.applyInlineStyle(r,s).moveToBookmark(i).select();
}
},
queryCommandValue:function(){
var e=b.filterNodeList(this.selection.getStartElementPath(),function(e){
return e.getAttribute("label");
});
return e?e.getAttribute("label"):"";
}
},e.addListener("keyup",function(t,n){
var i=n.keyCode||n.which;
if(32==i||13==i){
var o=e.selection.getRange();
if(o.collapsed){
var r=b.findParent(e.selection.getStart(),function(e){
return e.getAttribute("label");
},!0);
if(r&&m.$block[r.tagName]&&b.isEmptyNode(r)){
var a=e.document.createElement("p");
b.insertAfter(r,a),b.fillNode(e.document,a),b.remove(r),o.setStart(a,0).setCursor();
}
}
}
});
},UE.commands.insertparagraph={
execCommand:function(e,t){
for(var n,i=this,o=i.selection.getRange(),r=o.startContainer;r&&!b.isBody(r);)n=r,
r=r.parentNode;
if(n){
var a=i.document.createElement("p");
t?n.parentNode.insertBefore(a,n):n.parentNode.insertBefore(a,n.nextSibling),b.fillNode(i.document,a),
o.setStart(a,0).setCursor(!1,!0);
}
}
};
var a=a||{};
a.editor=a.editor||{},a.editor.ui={},function(){
function e(){
var e=document.getElementById("edui_fixedlayer");
d.setViewportOffset(e,{
left:0,
top:0
});
}
function t(){
i.on(window,"scroll",e),i.on(window,"resize",a.editor.utils.defer(e,0,!0));
}
var n=a.editor.browser,i=a.editor.dom.domUtils,o="$EDITORUI",r=window[o]={},s="ID"+o,l=0,d=a.editor.ui.uiUtils={
uid:function(e){
return e?e[s]||(e[s]=++l):++l;
},
hook:function(e,t){
var n;
return e&&e._callbacks?n=e:(n=function(){
var t;
e&&(t=e.apply(this,arguments));
for(var i=n._callbacks,o=i.length;o--;){
var r=i[o].apply(this,arguments);
void 0===t&&(t=r);
}
return t;
},n._callbacks=[]),n._callbacks.push(t),n;
},
createElementByHtml:function(e){
var t=document.createElement("div");
return t.innerHTML=e,t=t.firstChild,t.parentNode.removeChild(t),t;
},
getViewportElement:function(){
return n.ie&&n.quirks?document.body:document.documentElement;
},
getClientRect:function(e){
var t;
try{
t=e.getBoundingClientRect();
}catch(n){
t={
left:0,
top:0,
height:0,
width:0
};
}
for(var o,r={
left:Math.round(t.left),
top:Math.round(t.top),
height:Math.round(t.bottom-t.top),
width:Math.round(t.right-t.left)
};(o=e.ownerDocument)!==document&&(e=i.getWindow(o).frameElement);)t=e.getBoundingClientRect(),
r.left+=t.left,r.top+=t.top;
return r.bottom=r.top+r.height,r.right=r.left+r.width,r;
},
getViewportRect:function(){
var e=d.getViewportElement(),t=0|(window.innerWidth||e.clientWidth),n=0|(window.innerHeight||e.clientHeight);
return{
left:0,
top:0,
height:n,
width:t,
bottom:n,
right:t
};
},
setViewportOffset:function(e,t){
var n=d.getFixedLayer();
e.parentNode===n?(e.style.left=t.left+"px",e.style.top=t.top+"px"):i.setViewportOffset(e,t);
},
getEventOffset:function(e){
var t=e.target||e.srcElement,n=d.getClientRect(t),i=d.getViewportOffsetByEvent(e);
return{
left:i.left-n.left,
top:i.top-n.top
};
},
getViewportOffsetByEvent:function(e){
var t=e.target||e.srcElement,n=i.getWindow(t).frameElement,o={
left:e.clientX,
top:e.clientY
};
if(n&&t.ownerDocument!==document){
var r=d.getClientRect(n);
o.left+=r.left,o.top+=r.top;
}
return o;
},
setGlobal:function(e,t){
return r[e]=t,o+'["'+e+'"]';
},
unsetGlobal:function(e){
delete r[e];
},
copyAttributes:function(e,t){
for(var o=t.attributes,r=o.length;r--;){
var a=o[r];
"style"==a.nodeName||"class"==a.nodeName||n.ie&&!a.specified||e.setAttribute(a.nodeName,a.nodeValue);
}
t.className&&i.addClass(e,t.className),t.style.cssText&&(e.style.cssText+=";"+t.style.cssText);
},
removeStyle:function(e,t){
if(e.style.removeProperty)e.style.removeProperty(t);else{
if(!e.style.removeAttribute)throw"";
e.style.removeAttribute(t);
}
},
contains:function(e,t){
return e&&t&&(e===t?!1:e.contains?e.contains(t):16&e.compareDocumentPosition(t));
},
startDrag:function(e,t,n){
function i(e){
var n=e.clientX-a,i=e.clientY-s;
t.ondragmove(n,i,e),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0;
}
function o(){
n.removeEventListener("mousemove",i,!0),n.removeEventListener("mouseup",o,!0),window.removeEventListener("mouseup",o,!0),
t.ondragstop();
}
function r(){
l.releaseCapture(),l.detachEvent("onmousemove",i),l.detachEvent("onmouseup",r),l.detachEvent("onlosecaptrue",r),
t.ondragstop();
}
var n=n||document,a=e.clientX,s=e.clientY;
if(n.addEventListener)n.addEventListener("mousemove",i,!0),n.addEventListener("mouseup",o,!0),
window.addEventListener("mouseup",o,!0),e.preventDefault();else{
var l=e.srcElement;
l.setCapture(),l.attachEvent("onmousemove",i),l.attachEvent("onmouseup",r),l.attachEvent("onlosecaptrue",r),
e.returnValue=!1;
}
t.ondragstart();
},
getFixedLayer:function(){
var i=document.getElementById("edui_fixedlayer");
return null==i&&(i=document.createElement("div"),i.id="edui_fixedlayer",document.body.appendChild(i),
n.ie&&n.version<=8?(i.style.position="absolute",t(),setTimeout(e)):i.style.position="fixed",
i.style.left="0",i.style.top="0",i.style.width="0",i.style.height="0"),i;
},
makeUnselectable:function(e){
if(n.opera||n.ie&&n.version<9){
if(e.unselectable="on",e.hasChildNodes())for(var t=0;t<e.childNodes.length;t++)1==e.childNodes[t].nodeType&&d.makeUnselectable(e.childNodes[t]);
}else void 0!==e.style.MozUserSelect?e.style.MozUserSelect="none":void 0!==e.style.WebkitUserSelect?e.style.WebkitUserSelect="none":void 0!==e.style.KhtmlUserSelect&&(e.style.KhtmlUserSelect="none");
}
};
}(),function(){
var e=a.editor.utils,t=a.editor.ui.uiUtils,n=a.editor.EventBase,i=a.editor.ui.UIBase=function(){};
i.prototype={
className:"",
uiName:"",
initOptions:function(e){
var n=this;
for(var i in e)n[i]=e[i];
this.id=this.id||"edui"+t.uid();
},
initUIBase:function(){
this._globalKey=e.unhtml(t.setGlobal(this.id,this));
},
render:function(e){
for(var n,i=this.renderHtml(),o=t.createElementByHtml(i),r=b.getElementsByTagName(o,"*"),a="edui-"+(this.theme||this.editor.options.theme),s=document.getElementById("edui_fixedlayer"),l=0;n=r[l++];)b.addClass(n,a);
b.addClass(o,a),s&&(s.className="",b.addClass(s,a));
var d=this.getDom();
null!=d?(d.parentNode.replaceChild(o,d),t.copyAttributes(o,d)):("string"==typeof e&&(e=document.getElementById(e)),
e=e||t.getFixedLayer(),b.addClass(e,a),e.appendChild(o)),this.postRender();
},
getDom:function(e){
return document.getElementById(e?this.id+"_"+e:this.id);
},
postRender:function(){
this.fireEvent("postrender");
},
getHtmlTpl:function(){
return"";
},
formatHtml:function(e){
var t="edui-"+this.uiName;
return e.replace(/##/g,this.id).replace(/%%-/g,this.uiName?t+"-":"").replace(/%%/g,(this.uiName?t:"")+" "+this.className).replace(/\$\$/g,this._globalKey);
},
renderHtml:function(){
return this.formatHtml(this.getHtmlTpl());
},
dispose:function(){
var e=this.getDom();
e&&a.editor.dom.domUtils.remove(e),t.unsetGlobal(this.id);
}
},e.inherits(i,n);
}(),function(){
var e=a.editor.utils,t=a.editor.ui.UIBase,n=a.editor.ui.Separator=function(e){
this.initOptions(e),this.initSeparator();
};
n.prototype={
uiName:"separator",
initSeparator:function(){
this.initUIBase();
},
getHtmlTpl:function(){
return'<div id="##" class="edui-box %%"></div>';
}
},e.inherits(n,t);
}(),function(){
var e=a.editor.utils,t=a.editor.dom.domUtils,n=a.editor.ui.UIBase,i=a.editor.ui.uiUtils,o=a.editor.ui.Mask=function(e){
this.initOptions(e),this.initUIBase();
};
o.prototype={
getHtmlTpl:function(){
return'<div id="##" class="edui-mask %%" onmousedown="return $$._onMouseDown(event, this);"></div>';
},
postRender:function(){
var e=this;
t.on(window,"resize",function(){
setTimeout(function(){
e.isHidden()||e._fill();
});
});
},
show:function(e){
this._fill(),this.getDom().style.display="",this.getDom().style.zIndex=e;
},
hide:function(){
this.getDom().style.display="none",this.getDom().style.zIndex="";
},
isHidden:function(){
return"none"==this.getDom().style.display;
},
_onMouseDown:function(){
return!1;
},
_fill:function(){
var e=this.getDom(),t=i.getViewportRect();
e.style.width=t.width+"px",e.style.height=t.height+"px";
}
},e.inherits(o,n);
}(),function(){
function e(e,t){
for(var n=0;n<s.length;n++){
var i=s[n];
if(!i.isHidden()&&i.queryAutoHide(t)!==!1){
if(e&&/scroll/gi.test(e.type)&&"edui-wordpastepop"==i.className)return;
i.hide();
}
}
s.length&&i.editor.fireEvent("afterhidepop");
}
var t=a.editor.utils,n=a.editor.ui.uiUtils,i=a.editor.dom.domUtils,o=a.editor.ui.UIBase,r=a.editor.ui.Popup=function(e){
this.initOptions(e),this.initPopup();
},s=[];
r.postHide=e;
var l=["edui-anchor-topleft","edui-anchor-topright","edui-anchor-bottomleft","edui-anchor-bottomright"];
r.prototype={
contentClass:"edui-popup-content",
SHADOW_RADIUS:5,
content:null,
_hidden:!1,
autoRender:!0,
canSideLeft:!0,
canSideUp:!0,
initPopup:function(){
this.initUIBase(),s.push(this);
},
getHtmlTpl:function(){
return'<div id="##" class="edui-popup %%"> <div id="##_body" class="edui-popup-body"> <iframe style="position:absolute;z-index:-1;left:0;top:0;background-color: transparent;" frameborder="0" width="100%" height="100%" src="javascript:"></iframe> <div class="edui-shadow"></div> <div id="##_content" class="'+this.contentClass+'">'+this.getContentHtmlTpl()+"  </div> </div></div>";
},
getContentHtmlTpl:function(){
return this.content?"string"==typeof this.content?this.content:this.content.renderHtml():"";
},
_UIBase_postRender:o.prototype.postRender,
postRender:function(){
if(this.content instanceof o&&this.content.postRender(),this.captureWheel&&!this.captured){
this.captured=!0;
for(var e=(document.documentElement.clientHeight||document.body.clientHeight)-80,t=this.getDom().offsetHeight,n=this.combox.getDom().getBoundingClientRect().top,r=this.getDom("content"),a=this;n+t>e;)t-=30;
r.style.height=t+"px",window.XMLHttpRequest?i.on(r,"onmousewheel"in document.body?"mousewheel":"DOMMouseScroll",function(e){
e.preventDefault?e.preventDefault():e.returnValue=!1,r.scrollTop-=e.wheelDelta?e.wheelDelta/120*60:e.detail/-3*60;
}):i.on(this.getDom(),"mousewheel",function(e){
e.returnValue=!1,a.getDom("content").scrollTop-=e.wheelDelta/120*60;
});
}
this.fireEvent("postRenderAfter"),this.hide(!0),this._UIBase_postRender();
},
_doAutoRender:function(){
!this.getDom()&&this.autoRender&&this.render();
},
mesureSize:function(){
var e=this.getDom("content");
return n.getClientRect(e);
},
fitSize:function(){
if(this.captureWheel&&this.sized)return this.__size;
this.sized=!0;
var e=this.getDom("body");
e.style.width="",e.style.height="";
var t=this.mesureSize();
return e.style.width=this.captureWheel?-(-20-t.width)+"px":t.width+"px",e.style.height=t.height+"px",
this.__size=t,this.captureWheel&&(this.getDom("content").style.overflow="auto"),
t;
},
showAnchor:function(e,t){
this.showAnchorRect(n.getClientRect(e),t);
},
showAnchorRect:function(e,t){
this._doAutoRender();
var o=n.getViewportRect();
this._show();
var r,s,d,c,u=this.fitSize();
t?(r=this.canSideLeft&&e.right+u.width>o.right&&e.left>u.width,s=this.canSideUp&&e.top+u.height>o.bottom&&e.bottom>u.height,
d=r?e.left-u.width:e.right,c=s?e.bottom-u.height:e.top):(r=this.canSideLeft&&e.right+u.width>o.right&&e.left>u.width,
s=this.canSideUp&&e.top+u.height>o.bottom&&e.bottom>u.height,d=r?e.right-u.width:e.left,
c=s?e.top-u.height:e.bottom);
var f=this.getDom();
n.setViewportOffset(f,{
left:d,
top:c
}),i.removeClasses(f,l),f.className+=" "+l[2*(s?1:0)+(r?1:0)],this.editor&&(f.style.zIndex=1*this.editor.container.style.zIndex+10,
a.editor.ui.uiUtils.getFixedLayer().style.zIndex=f.style.zIndex-1);
},
showAt:function(e){
var t=e.left,n=e.top,i={
left:t,
top:n,
right:t,
bottom:n,
height:0,
width:0
};
this.showAnchorRect(i,!1,!0);
},
_show:function(){
if(this._hidden){
var e=this.getDom();
e.style.display="",this._hidden=!1,this.fireEvent("show");
}
},
isHidden:function(){
return this._hidden;
},
show:function(){
this._doAutoRender(),this._show();
},
hide:function(e){
!this._hidden&&this.getDom()&&(this.getDom().style.display="none",this._hidden=!0,
e||this.fireEvent("hide"));
},
queryAutoHide:function(e){
return!e||!n.contains(this.getDom(),e);
}
},t.inherits(r,o),i.on(document,"mousedown",function(t){
var n=t.target||t.srcElement;
e(t,n);
}),i.on(window,"scroll",function(t,n){
e(t,n);
});
}(),function(){
function e(e,t,n){
var i='<div unselectable="on" id="##_preview" class="edui-colorpicker-preview" style="display:none;"></div><div class="ue_colorpicker_box" onmouseover="$$._onTableOver(event, this);" onmouseout="$$._onTableOut(event, this);" onclick="return $$._onTableClick(event, this);">';
i+='<div class="ue_colorpicker_group" style="overflow:hidden;"><div class="ue_colorpicker_hd">'+t.getLang("recentlyColor")+'</div><div class="ue_colorpicker_bd" id="##_recently_color" >'+s;
var o=n.recentlyColor;
if(o.length>0)for(var r=0,a=o.length;a>r;r++){
var l=o[r].substr(1);
i+='<span onclick="return false;" title="#'+l+'" data-color="#'+l+'" class="ue_colorpicker_square" style="background-color:#'+l+'"></span>';
}
i+="</div></div>";
var c='<span id="##_colorpicker_tab" class="ue_colorpicker_hd_tab" onclick="return $$._onColorPickerClick(event, this);">更多颜色</span>';
document.getElementsByClassName||(c=""),i+='<div class="ue_colorpicker_group" style="overflow:hidden;"><div class="ue_colorpicker_hd"><span id="##_basiccolor_tab" class="ue_colorpicker_hd_tab selected" onclick="return $$._onBasicColorClick(event, this);">'+t.getLang("basicColor")+"</span>"+c+'</div><div class="ue_colorpicker_bd" id="##_basiccolor">';
for(var r=0,a=d.length;a>r;r++){
var l=d[r];
i+='<span onclick="return false;" title="#'+l+'" data-color="#'+l+'" class="ue_colorpicker_square" style="background-color:#'+l+'"></span>';
}
return i+='</div><div class="ue_colorpicker_bd" id="##_colorpicker" style="display:none;"></div></div><div class="ue_colorpicker_toolbar"><span onclick="return false;" title="#f00" data-color="#f00" class="ue_colorpicker_square" id="##_colorinput_preview" style="background-color:#f00"></span><a href="javascript:void(0);" onclick="return $$._onBtnClick(event, this);" class="btn_ue_colorpicker">确认</a><span class="ue_colorpicker_input_box"><span class="ue_colorpicker_input_append">#</span><span class="ue_colorpicker_input_inner"><input id="##_colorinput" value="ff0000" type="text" onkeyup="return $$._onInputKeyup(event, this);" onclick="return $$._onInputClick(event, this);"></span></span></div></div>';
}
var t=a.editor.utils,n=a.editor.ui.UIBase,i=8,s='<span onclick="return false;" title="清除颜色" class="ue_colorpicker_nocolor ue_colorpicker_square"></span>',l=a.editor.ui.ColorPicker=function(e){
this.initOptions(e),this.noColorText=this.noColorText||this.editor.getLang("clearColor"),
this.initUIBase();
var t=this.storekey="__ue_recentlycolor_"+(e.storekey||""),n=o.get(t);
n=n?n.split(",").slice(0,i):["#000"],this.recentlyColor=n;
};
l.prototype={
getHtmlTpl:function(){
return e(this.noColorText,this.editor,this);
},
_initColorPicker:function(){
var e=this,t=this.getDom("colorpicker"),n=this.getDom("colorinput_preview"),i=e.getDom("colorinput");
$(t).addClass("cp cp-default");
r(t,function(t){
if(t){
t=t.substr(1),i.value=t;
var o=e._getColor(),r=o?o:"#ffffff";
n.style.backgroundColor=r,n.setAttribute("title",r),n.setAttribute("data-color",r);
}
});
},
_onTableClick:function(e){
var t=e.target||e.srcElement,n=t.getAttribute("data-color");
if(n){
this._saveColor(n);
var i=this.getDom("colorinput_preview"),o=this.getDom("colorinput");
i.style.backgroundColor=n,i.setAttribute("title",n),i.setAttribute("data-color",n),
o.value=(n||"").substr(1),this.fireEvent("pickcolor",n);
}else this._onPickNoColor();
},
_saveColor:function(e){
for(var t=this.recentlyColor||["#000"],n=[],r=0,a=t.length;a>r;++r){
var l=t[r];
l!=e&&n.push(l);
}
n.unshift(e),t=n.slice(0,i),this.recentlyColor=t,o.set(this.storekey,t.join(",")),
html=s;
for(var r=0,a=t.length;a>r;r++){
var l=t[r].substr(1);
html+='<span onclick="return false;" title="#'+l+'" data-color="#'+l+'" class="ue_colorpicker_square" style="background-color:#'+l+'"></span>';
}
this.getDom("recently_color").innerHTML=html;
},
_onTableOver:function(e){
var t=e.target||e.srcElement,n=t.getAttribute("data-color");
n&&(this.getDom("preview").style.backgroundColor=n);
},
_getColor:function(){
var e=this.getDom("colorinput"),t=e.value||"";
t=t.toLowerCase();
var n=t.split(""),i=n.length;
if(3!=i&&6!=i)return!1;
for(var o=0;i>o;++o){
var r=n[o];
if(!(r>="0"&&"9">=r||r>="a"&&"f">=r))return!1;
}
return"#"+t;
},
_onBtnClick:function(e){
var t=this._getColor();
return t&&(this._saveColor(t),this.fireEvent("pickcolor",t)),e.stopPropagation?(e.stopPropagation(),
e.preventDefault()):e.cancelBubble=!0,!1;
},
_onInputKeyup:function(e){
var t=this.getDom("colorinput_preview"),n=this._getColor(),i=n?n:"#ffffff",o=e.keyCode||e.which;
t.style.backgroundColor=i,t.setAttribute("title",i),t.setAttribute("data-color",i),
n&&13==o&&(this._saveColor(n),this.fireEvent("pickcolor",n));
},
_onInputClick:function(e){
e.stopPropagation?(e.stopPropagation(),e.preventDefault()):e.cancelBubble=!0;
},
_onTableOut:function(){
this.getDom("preview").style.backgroundColor="";
},
_onPickNoColor:function(){
this.fireEvent("picknocolor");
},
_onBasicColorClick:function(e){
var t=this.getDom("basiccolor"),n=this.getDom("colorpicker");
t.style.display="block",n.style.display="none";
var i=this.getDom("basiccolor_tab"),o=this.getDom("colorpicker_tab");
return $(i).addClass("selected"),$(o).removeClass("selected"),e.stopPropagation?(e.stopPropagation(),
e.preventDefault()):e.cancelBubble=!0,!1;
},
_onColorPickerClick:function(e){
var t=this.getDom("basiccolor"),n=this.getDom("colorpicker");
t.style.display="none",n.style.display="block";
var i=this.getDom("basiccolor_tab"),o=this.getDom("colorpicker_tab");
return $(i).removeClass("selected"),$(o).addClass("selected"),this.__hasInitColorPicker||(this.__hasInitColorPicker=!0,
this._initColorPicker()),e.stopPropagation?(e.stopPropagation(),e.preventDefault()):e.cancelBubble=!0,
!1;
}
},t.inherits(l,n);
var d="ffffff,ffd7d5,ffdaa9,fffed5,d4fa00,73fcd6,a5c8ff,ffacd5,ff7faa,d6d6d6,ffacaa,ffb995,fffb00,73fa79,00fcff,78acfe,d84fa9,ff4f79,b2b2b2,d7aba9,ff6827,ffda51,00d100,00d5ff,0080ff,ac39ff,ff2941,888888,7a4442,ff4c00,ffa900,3da742,3daad6,0052ff,7a4fd6,d92142,000000,7b0c00,ff4c41,d6a841,407600,007aaa,021eaa,797baa,ab1942".split(",");
}(),function(){
var e=a.editor.utils,t=a.editor.ui.uiUtils,n=a.editor.ui.UIBase,i=a.editor.ui.TablePicker=function(e){
this.initOptions(e),this.initTablePicker();
};
i.prototype={
defaultNumRows:10,
defaultNumCols:10,
maxNumRows:20,
maxNumCols:20,
numRows:10,
numCols:10,
lengthOfCellSide:22,
initTablePicker:function(){
this.initUIBase();
},
getHtmlTpl:function(){
return'<div id="##" class="edui-tablepicker %%"><div class="edui-tablepicker-body"><div class="edui-infoarea"><span id="##_label" class="edui-label"></span></div><div class="edui-pickarea" onmousemove="$$._onMouseMove(event, this);" onmouseover="$$._onMouseOver(event, this);" onmouseout="$$._onMouseOut(event, this);" onclick="$$._onClick(event, this);"><div id="##_overlay" class="edui-overlay"></div></div></div></div>';
},
_UIBase_render:n.prototype.render,
render:function(e){
this._UIBase_render(e),this.getDom("label").innerHTML="0"+this.editor.getLang("t_row")+" x 0"+this.editor.getLang("t_col");
},
_track:function(e,t){
var n=this.getDom("overlay").style,i=this.lengthOfCellSide;
n.width=e*i+"px",n.height=t*i+"px";
var o=this.getDom("label");
o.innerHTML=e+this.editor.getLang("t_col")+" x "+t+this.editor.getLang("t_row"),
this.numCols=e,this.numRows=t;
},
_onMouseOver:function(e,n){
var i=e.relatedTarget||e.fromElement;
t.contains(n,i)||n===i||(this.getDom("label").innerHTML="0"+this.editor.getLang("t_col")+" x 0"+this.editor.getLang("t_row"),
this.getDom("overlay").style.visibility="");
},
_onMouseOut:function(e,n){
var i=e.relatedTarget||e.toElement;
t.contains(n,i)||n===i||(this.getDom("label").innerHTML="0"+this.editor.getLang("t_col")+" x 0"+this.editor.getLang("t_row"),
this.getDom("overlay").style.visibility="hidden");
},
_onMouseMove:function(e){
var n=(this.getDom("overlay").style,t.getEventOffset(e)),i=this.lengthOfCellSide,o=Math.ceil(n.left/i),r=Math.ceil(n.top/i);
this._track(o,r);
},
_onClick:function(){
this.fireEvent("picktable",this.numCols,this.numRows);
}
},e.inherits(i,n);
}(),function(){
var e=a.editor.browser,t=a.editor.dom.domUtils,n=a.editor.ui.uiUtils,i='onmousedown="$$.Stateful_onMouseDown(event, this);" onmouseup="$$.Stateful_onMouseUp(event, this);"'+(e.ie?' onmouseenter="$$.Stateful_onMouseEnter(event, this);" onmouseleave="$$.Stateful_onMouseLeave(event, this);"':' onmouseover="$$.Stateful_onMouseOver(event, this);" onmouseout="$$.Stateful_onMouseOut(event, this);"');
a.editor.ui.Stateful={
alwalysHoverable:!1,
target:null,
Stateful_init:function(){
this._Stateful_dGetHtmlTpl=this.getHtmlTpl,this.getHtmlTpl=this.Stateful_getHtmlTpl;
},
Stateful_getHtmlTpl:function(){
var e=this._Stateful_dGetHtmlTpl();
return e.replace(/stateful/g,function(){
return i;
});
},
Stateful_onMouseEnter:function(e,t){
this.target=t,(!this.isDisabled()||this.alwalysHoverable)&&(this.addState("hover"),
this.fireEvent("over"));
},
Stateful_onMouseLeave:function(){
(!this.isDisabled()||this.alwalysHoverable)&&(this.removeState("hover"),this.removeState("active"),
this.fireEvent("out"));
},
Stateful_onMouseOver:function(e,t){
var i=e.relatedTarget;
n.contains(t,i)||t===i||this.Stateful_onMouseEnter(e,t);
},
Stateful_onMouseOut:function(e,t){
var i=e.relatedTarget;
n.contains(t,i)||t===i||this.Stateful_onMouseLeave(e,t);
},
Stateful_onMouseDown:function(){
this.isDisabled()||this.addState("active");
},
Stateful_onMouseUp:function(){
this.isDisabled()||this.removeState("active");
},
Stateful_postRender:function(){
this.disabled&&!this.hasState("disabled")&&this.addState("disabled");
},
hasState:function(e){
return t.hasClass(this.getStateDom(),"edui-state-"+e);
},
addState:function(e){
this.hasState(e)||(this.getStateDom().className+=" edui-state-"+e);
},
removeState:function(e){
this.hasState(e)&&t.removeClasses(this.getStateDom(),["edui-state-"+e]);
},
getStateDom:function(){
return this.getDom("state");
},
isChecked:function(){
return this.hasState("checked");
},
setChecked:function(e){
!this.isDisabled()&&e?this.addState("checked"):this.removeState("checked");
},
isDisabled:function(){
return this.hasState("disabled");
},
setDisabled:function(e){
e?(this.removeState("hover"),this.removeState("checked"),this.removeState("active"),
this.addState("disabled")):this.removeState("disabled");
}
};
}(),function(){
var e=a.editor.utils,t=a.editor.ui.UIBase,n=a.editor.ui.Stateful,i=a.editor.ui.Button=function(e){
this.initOptions(e),this.initButton();
};
i.prototype={
uiName:"button",
label:"",
title:"",
showIcon:!0,
showText:!0,
initButton:function(){
this.initUIBase(),this.Stateful_init();
},
getHtmlTpl:function(){
return'<div id="##" class="edui-box %%"><div id="##_state" stateful><div class="%%-wrap"><div id="##_body" unselectable="on" '+(this.title?'data-tooltip="'+this.title+'"':"")+' class="%%-body js_tooltip" onmousedown="return false;" onclick="return $$._onClick();">'+(this.showIcon?'<div class="edui-box edui-icon"></div>':"")+(this.showText?'<div class="edui-box edui-label">'+this.label+"</div>":"")+"</div></div></div></div>";
},
postRender:function(){
this.Stateful_postRender(),this.setDisabled(this.disabled);
},
_onClick:function(){
this.isDisabled()||this.fireEvent("click");
}
},e.inherits(i,t),e.extend(i.prototype,n);
}(),function(){
var e=a.editor.utils,t=a.editor.ui.uiUtils,n=(a.editor.dom.domUtils,a.editor.ui.UIBase),i=a.editor.ui.Stateful,o=a.editor.ui.SplitButton=function(e){
this.initOptions(e),this.initSplitButton();
};
o.prototype={
popup:null,
uiName:"splitbutton",
title:"",
initSplitButton:function(){
this.initUIBase(),this.Stateful_init();
if(null!=this.popup){
var e=this.popup;
this.popup=null,this.setPopup(e);
}
},
_UIBase_postRender:n.prototype.postRender,
postRender:function(){
this.Stateful_postRender(),this._UIBase_postRender();
},
setPopup:function(n){
this.popup!==n&&(null!=this.popup&&this.popup.dispose(),n.addListener("show",e.bind(this._onPopupShow,this)),
n.addListener("hide",e.bind(this._onPopupHide,this)),n.addListener("postrender",e.bind(function(){
n.getDom("body").appendChild(t.createElementByHtml('<div id="'+this.popup.id+'_bordereraser" class="edui-bordereraser edui-background" style="width:'+(t.getClientRect(this.getDom()).width+20)+'px"></div>')),
n.getDom().className+=" "+this.className;
},this)),this.popup=n);
},
_onPopupShow:function(){
this.addState("opened");
},
_onPopupHide:function(){
this.removeState("opened");
},
getHtmlTpl:function(){
var e='<div id="##_button_body" class="edui-box edui-button-body" onclick="$$._onButtonClick(event, this);"><div class="edui-box edui-icon"></div></div>';
return this.useInput&&(e='<div id="##_button_body" class="edui-box edui-button-body"><input id="##_wx_input" class="edui-box edui-wx-input " type="text" onkeydown="$$._onInputKeydown(event, this);" onclick="$$._onInputClick(event, this);" onblur="$$._onInputBlur(event, this);"></div>'),
this.useArrow!==!1&&(e+='<div class="edui-box edui-splitborder"></div><div class="edui-box edui-arrow" onclick="$$._onArrowClick();"></div>'),
'<div id="##" class="edui-box %%"><div '+(this.title?'data-tooltip="'+this.title+'"':"")+' id="##_state" stateful class="js_tooltip"><div class="%%-body">'+e+"</div></div></div>";
},
showPopup:function(){
var e=t.getClientRect(this.getDom());
e.top-=this.popup.SHADOW_RADIUS,e.height+=this.popup.SHADOW_RADIUS,this.popup.showAnchorRect(e);
},
_onArrowClick:function(){
this.isDisabled()||this.showPopup();
},
_onInputClick:function(){
this.isDisabled()||this.fireEvent("inputclick");
},
_onInputBlur:function(e){
this.isDisabled()||this.fireEvent("inputblur"),e.stopPropagation?(e.stopPropagation(),
e.preventDefault()):e.cancelBubble=!0;
},
_onInputKeydown:function(e){
this.isDisabled()||this.fireEvent("inputkeydown",e);
},
_onButtonClick:function(){
this.isDisabled()||this.fireEvent("buttonclick");
}
},e.inherits(o,n),e.extend(o.prototype,i,!0);
}(),function(){
var e=a.editor.utils,t=a.editor.ui.uiUtils,n=a.editor.ui.ColorPicker,i=a.editor.ui.Popup,o=a.editor.ui.SplitButton,r=a.editor.ui.ColorButton=function(e){
this.initOptions(e),this.initColorButton();
};
r.prototype={
initColorButton:function(){
var e=this;
this.popup=new i({
content:new n({
noColorText:e.editor.getLang("clearColor"),
storekey:e.storekey,
editor:e.editor,
onpickcolor:function(t,n){
e._onPickColor(n);
},
onpicknocolor:function(t,n){
e._onPickNoColor(n);
}
}),
editor:e.editor
}),this.initSplitButton();
},
_SplitButton_postRender:o.prototype.postRender,
postRender:function(){
this._SplitButton_postRender(),this.getDom("button_body").appendChild(t.createElementByHtml('<div id="'+this.id+'_colorlump" class="edui-colorlump"></div>')),
this.getDom().className+=" edui-colorbutton";
},
setColor:function(e){
this.getDom("colorlump").style.backgroundColor=e,this.color=e;
},
_onPickColor:function(e){
this.fireEvent("pickcolor",e)!==!1&&(this.setColor(e),this.popup.hide());
},
_onPickNoColor:function(){
this.fireEvent("picknocolor")!==!1&&this.popup.hide();
}
},e.inherits(r,o);
}(),function(){
var e=a.editor.utils,t=a.editor.ui.Popup,n=a.editor.ui.TablePicker,i=a.editor.ui.SplitButton,o=a.editor.ui.TableButton=function(e){
this.initOptions(e),this.initTableButton();
};
o.prototype={
initTableButton:function(){
var e=this;
this.popup=new t({
content:new n({
editor:e.editor,
onpicktable:function(t,n,i){
e._onPickTable(n,i);
}
}),
editor:e.editor
}),this.initSplitButton();
},
_onPickTable:function(e,t){
this.fireEvent("picktable",e,t)!==!1&&this.popup.hide();
}
},e.inherits(o,i);
}(),function(){
var e=a.editor.utils,t=a.editor.ui.UIBase,n=a.editor.ui.AutoTypeSetPicker=function(e){
this.initOptions(e),this.initAutoTypeSetPicker();
};
n.prototype={
initAutoTypeSetPicker:function(){
this.initUIBase();
},
getHtmlTpl:function(){
var e=this.editor,t=e.options.autotypeset,n=e.getLang("autoTypeSet"),i="textAlignValue"+e.uid,o="imageBlockLineValue"+e.uid;
return'<div id="##" class="edui-autotypesetpicker %%"><div class="edui-autotypesetpicker-body"><table ><tr><td nowrap colspan="2"><input type="checkbox" name="mergeEmptyline" '+(t.mergeEmptyline?"checked":"")+">"+n.mergeLine+'</td><td colspan="2"><input type="checkbox" name="removeEmptyline" '+(t.removeEmptyline?"checked":"")+">"+n.delLine+'</td></tr><tr><td nowrap colspan="2"><input type="checkbox" name="removeClass" '+(t.removeClass?"checked":"")+">"+n.removeFormat+'</td><td colspan="2"><input type="checkbox" name="indent" '+(t.indent?"checked":"")+">"+n.indent+'</td></tr><tr><td nowrap colspan="2"><input type="checkbox" name="textAlign" '+(t.textAlign?"checked":"")+">"+n.alignment+'</td><td colspan="2" id="'+i+'"><input type="radio" name="'+i+'" value="left" '+(t.textAlign&&"left"==t.textAlign?"checked":"")+">"+e.getLang("justifyleft")+'<input type="radio" name="'+i+'" value="center" '+(t.textAlign&&"center"==t.textAlign?"checked":"")+">"+e.getLang("justifycenter")+'<input type="radio" name="'+i+'" value="right" '+(t.textAlign&&"right"==t.textAlign?"checked":"")+">"+e.getLang("justifyright")+' </tr><tr><td nowrap colspan="2"><input type="checkbox" name="imageBlockLine" '+(t.imageBlockLine?"checked":"")+">"+n.imageFloat+'</td><td nowrap colspan="2" id="'+o+'"><input type="radio" name="'+o+'" value="none" '+(t.imageBlockLine&&"none"==t.imageBlockLine?"checked":"")+">"+e.getLang("default")+'<input type="radio" name="'+o+'" value="left" '+(t.imageBlockLine&&"left"==t.imageBlockLine?"checked":"")+">"+e.getLang("justifyleft")+'<input type="radio" name="'+o+'" value="center" '+(t.imageBlockLine&&"center"==t.imageBlockLine?"checked":"")+">"+e.getLang("justifycenter")+'<input type="radio" name="'+o+'" value="right" '+(t.imageBlockLine&&"right"==t.imageBlockLine?"checked":"")+">"+e.getLang("justifyright")+'</tr><tr><td nowrap colspan="2"><input type="checkbox" name="clearFontSize" '+(t.clearFontSize?"checked":"")+">"+n.removeFontsize+'</td><td colspan="2"><input type="checkbox" name="clearFontFamily" '+(t.clearFontFamily?"checked":"")+">"+n.removeFontFamily+'</td></tr><tr><td nowrap colspan="4"><input type="checkbox" name="removeEmptyNode" '+(t.removeEmptyNode?"checked":"")+">"+n.removeHtml+'</td></tr><tr><td nowrap colspan="4"><input type="checkbox" name="pasteFilter" '+(t.pasteFilter?"checked":"")+">"+n.pasteFilter+'</td></tr><tr><td nowrap colspan="4" align="right"><button >'+n.run+"</button></td></tr></table></div></div>";
},
_UIBase_render:t.prototype.render
},e.inherits(n,t);
}(),function(){
function e(e){
for(var t,n=e.editor.options.autotypeset,i=e.getDom(),o=e.editor.uid,r=null,a=null,s=b.getElementsByTagName(i,"input"),l=s.length-1;t=s[l--];)if(r=t.getAttribute("type"),
"checkbox"==r&&(a=t.getAttribute("name"),n[a]&&delete n[a],t.checked)){
var d=document.getElementById(a+"Value"+o);
if(d){
if(/input/gi.test(d.tagName))n[a]=d.value;else for(var c,u=d.getElementsByTagName("input"),f=u.length-1;c=u[f--];)if(c.checked){
n[a]=c.value;
break;
}
}else n[a]=!0;
}
for(var m,h=b.getElementsByTagName(i,"select"),l=0;m=h[l++];){
var p=m.getAttribute("name");
n[p]=n[p]?m.value:"";
}
e.editor.options.autotypeset=n;
}
var t=a.editor.utils,n=a.editor.ui.Popup,i=a.editor.ui.AutoTypeSetPicker,o=a.editor.ui.SplitButton,r=a.editor.ui.AutoTypeSetButton=function(e){
this.initOptions(e),this.initAutoTypeSetButton();
};
r.prototype={
initAutoTypeSetButton:function(){
var t=this;
this.popup=new n({
content:new i({
editor:t.editor
}),
editor:t.editor,
hide:function(){
!this._hidden&&this.getDom()&&(e(this),this.getDom().style.display="none",this._hidden=!0,
this.fireEvent("hide"));
}
});
var o=0;
this.popup.addListener("postRenderAfter",function(){
var n=this;
if(!o){
var i=this.getDom(),r=i.getElementsByTagName("button")[0];
r.onclick=function(){
e(n),t.editor.execCommand("autotypeset"),n.hide();
},o=1;
}
}),this.initSplitButton();
}
},t.inherits(r,o);
}(),function(){
var e=a.editor.utils,t=a.editor.ui.Popup,n=a.editor.ui.Stateful,i=a.editor.ui.UIBase,o=a.editor.ui.CellAlignPicker=function(e){
this.initOptions(e),this.initSelected(),this.initCellAlignPicker();
};
o.prototype={
initSelected:function(){
var e={
valign:{
top:0,
middle:1,
bottom:2
},
align:{
left:0,
center:1,
right:2
},
count:3
};
this.selected&&(this.selectedIndex=e.valign[this.selected.valign]*e.count+e.align[this.selected.align]);
},
initCellAlignPicker:function(){
this.initUIBase(),this.Stateful_init();
},
getHtmlTpl:function(){
for(var e=["left","center","right"],t=9,n=null,i=-1,o=[],r=0;t>r;r++)n=this.selectedIndex===r?' class="edui-cellalign-selected" ':"",
i=r%3,0===i&&o.push("<tr>"),o.push('<td index="'+r+'" '+n+' stateful><div class="edui-icon edui-'+e[i]+'"></div></td>'),
2===i&&o.push("</tr>");
return'<div id="##" class="edui-cellalignpicker %%"><div class="edui-cellalignpicker-body"><table onclick="$$._onClick(event);">'+o.join("")+"</table></div></div>";
},
getStateDom:function(){
return this.target;
},
_onClick:function(e){
var n=e.target||e.srcElement;
/icon/.test(n.className)&&(this.items[n.parentNode.getAttribute("index")].onclick(),
t.postHide(e));
},
_UIBase_render:i.prototype.render
},e.inherits(o,i),e.extend(o.prototype,n,!0);
}(),function(){
var e=a.editor.utils,t=a.editor.ui.Stateful,n=a.editor.ui.uiUtils,i=a.editor.ui.UIBase,o=a.editor.ui.PastePicker=function(e){
this.initOptions(e),this.initPastePicker();
};
o.prototype={
initPastePicker:function(){
this.initUIBase(),this.Stateful_init();
},
getHtmlTpl:function(){
return'<div class="edui-pasteicon" onclick="$$._onClick(this)"></div><div class="edui-pastecontainer"><div class="edui-title">'+this.editor.getLang("pasteOpt")+'</div><div class="edui-button"><div title="'+this.editor.getLang("pasteSourceFormat")+'" onclick="$$.format(false)" stateful><div class="edui-richtxticon"></div></div><div title="'+this.editor.getLang("tagFormat")+'" onclick="$$.format(2)" stateful><div class="edui-tagicon"></div></div><div title="'+this.editor.getLang("pasteTextFormat")+'" onclick="$$.format(true)" stateful><div class="edui-plaintxticon"></div></div></div></div></div>';
},
getStateDom:function(){
return this.target;
},
format:function(e){
this.editor.ui._isTransfer=!0,this.editor.fireEvent("pasteTransfer",e);
},
_onClick:function(e){
var t=b.getNextDomNode(e),i=n.getViewportRect().height,o=n.getClientRect(t);
t.style.top=o.top+o.height>i?-o.height-e.offsetHeight+"px":"",/hidden/gi.test(b.getComputedStyle(t,"visibility"))?(t.style.visibility="visible",
b.addClass(e,"edui-state-opened")):(t.style.visibility="hidden",b.removeClasses(e,"edui-state-opened"));
},
_UIBase_render:i.prototype.render
},e.inherits(o,i),e.extend(o.prototype,t,!0);
}(),function(){
var e=a.editor.utils,t=a.editor.ui.uiUtils,n=a.editor.ui.UIBase,i=a.editor.ui.Toolbar=function(e){
this.initOptions(e),this.initToolbar();
};
i.prototype={
items:null,
initToolbar:function(){
this.items=this.items||[],this.initUIBase();
},
add:function(e){
this.items.push(e);
},
getHtmlTpl:function(){
for(var e=[],t=0;t<this.items.length;t++)e[t]=this.items[t].renderHtml();
return'<div id="##" class="edui-toolbar %%" onselectstart="return false;" onmousedown="return $$._onMouseDown(event, this);">'+e.join("")+"</div>";
},
postRender:function(){
for(var e=this.getDom(),n=0;n<this.items.length;n++)this.items[n].postRender();
t.makeUnselectable(e);
},
_onMouseDown:function(){
return!1;
}
},e.inherits(i,n);
}(),function(){
var e=a.editor.utils,t=a.editor.dom.domUtils,n=a.editor.ui.uiUtils,i=a.editor.ui.UIBase,o=a.editor.ui.Popup,r=a.editor.ui.Stateful,s=a.editor.ui.CellAlignPicker,l=a.editor.ui.Menu=function(e){
this.initOptions(e),this.initMenu();
},d={
renderHtml:function(){
return'<div class="edui-menuitem edui-menuseparator"><div class="edui-menuseparator-inner"></div></div>';
},
postRender:function(){},
queryAutoHide:function(){
return!0;
}
};
l.prototype={
items:null,
uiName:"menu",
initMenu:function(){
this.items=this.items||[],this.initPopup(),this.initItems();
},
initItems:function(){
for(var e=0;e<this.items.length;e++){
var t=this.items[e];
"-"==t?this.items[e]=this.getSeparator():t instanceof c||(t.editor=this.editor,t.theme=this.editor.options.theme,
this.items[e]=this.createItem(t));
}
},
getSeparator:function(){
return d;
},
createItem:function(e){
return e.menu=this,new c(e);
},
_Popup_getContentHtmlTpl:o.prototype.getContentHtmlTpl,
getContentHtmlTpl:function(){
if(0==this.items.length)return this._Popup_getContentHtmlTpl();
for(var e=[],t=0;t<this.items.length;t++){
var n=this.items[t];
e[t]=n.renderHtml();
}
return'<div class="%%-body">'+e.join("")+"</div>";
},
_Popup_postRender:o.prototype.postRender,
postRender:function(){
for(var e=this,i=0;i<this.items.length;i++){
var o=this.items[i];
o.ownerMenu=this,o.postRender();
}
t.on(this.getDom(),"mouseover",function(t){
t=t||event;
var i=t.relatedTarget||t.fromElement,o=e.getDom();
n.contains(o,i)||o===i||e.fireEvent("over");
}),this._Popup_postRender();
},
queryAutoHide:function(e){
if(e){
if(n.contains(this.getDom(),e))return!1;
for(var t=0;t<this.items.length;t++){
var i=this.items[t];
if(i.queryAutoHide(e)===!1)return!1;
}
}
},
clearItems:function(){
for(var e=0;e<this.items.length;e++){
var t=this.items[e];
clearTimeout(t._showingTimer),clearTimeout(t._closingTimer),t.subMenu&&t.subMenu.destroy();
}
this.items=[];
},
destroy:function(){
this.getDom()&&t.remove(this.getDom()),this.clearItems();
},
dispose:function(){
this.destroy();
}
},e.inherits(l,o);
var c=a.editor.ui.MenuItem=function(e){
if(this.initOptions(e),this.initUIBase(),this.Stateful_init(),this.subMenu&&!(this.subMenu instanceof l))if(e.className&&-1!=e.className.indexOf("aligntd")){
var n=this;
this.subMenu.selected=this.editor.queryCommandValue("cellalignment"),this.subMenu=new o({
content:new s(this.subMenu),
parentMenu:n,
editor:n.editor,
destroy:function(){
this.getDom()&&t.remove(this.getDom());
}
}),this.subMenu.addListener("postRenderAfter",function(){
t.on(this.getDom(),"mouseover",function(){
n.addState("opened");
});
});
}else this.subMenu=new l(this.subMenu);
};
c.prototype={
label:"",
subMenu:null,
ownerMenu:null,
uiName:"menuitem",
alwalysHoverable:!0,
getHtmlTpl:function(){
return'<div id="##" class="%%" stateful onclick="$$._onClick(event, this);"><div class="%%-body">'+this.renderLabelHtml()+"</div></div>";
},
postRender:function(){
var e=this;
this.addListener("over",function(){
e.ownerMenu.fireEvent("submenuover",e),e.subMenu&&e.delayShowSubMenu();
}),this.subMenu&&(this.getDom().className+=" edui-hassubmenu",this.subMenu.render(),
this.addListener("out",function(){
e.delayHideSubMenu();
}),this.subMenu.addListener("over",function(){
clearTimeout(e._closingTimer),e._closingTimer=null,e.addState("opened");
}),this.ownerMenu.addListener("hide",function(){
e.hideSubMenu();
}),this.ownerMenu.addListener("submenuover",function(t,n){
n!==e&&e.delayHideSubMenu();
}),this.subMenu._bakQueryAutoHide=this.subMenu.queryAutoHide,this.subMenu.queryAutoHide=function(t){
return t&&n.contains(e.getDom(),t)?!1:this._bakQueryAutoHide(t);
}),this.getDom().style.tabIndex="-1",n.makeUnselectable(this.getDom()),this.Stateful_postRender();
},
delayShowSubMenu:function(){
var e=this;
e.isDisabled()||(e.addState("opened"),clearTimeout(e._showingTimer),clearTimeout(e._closingTimer),
e._closingTimer=null,e._showingTimer=setTimeout(function(){
e.showSubMenu();
},250));
},
delayHideSubMenu:function(){
var e=this;
e.isDisabled()||(e.removeState("opened"),clearTimeout(e._showingTimer),e._closingTimer||(e._closingTimer=setTimeout(function(){
e.hasState("opened")||e.hideSubMenu(),e._closingTimer=null;
},400)));
},
renderLabelHtml:function(){
return'<div class="edui-arrow"></div><div class="edui-box edui-icon"></div><div class="edui-box edui-label %%-label">'+(this.label||"")+"</div>";
},
getStateDom:function(){
return this.getDom();
},
queryAutoHide:function(e){
return this.subMenu&&this.hasState("opened")?this.subMenu.queryAutoHide(e):void 0;
},
_onClick:function(e,t){
this.hasState("disabled")||this.fireEvent("click",e,t)!==!1&&(this.subMenu?this.showSubMenu():o.postHide(e));
},
showSubMenu:function(){
var e=n.getClientRect(this.getDom());
e.right-=5,e.left+=2,e.width-=7,e.top-=4,e.bottom+=4,e.height+=8,this.subMenu.showAnchorRect(e,!0,!0);
},
hideSubMenu:function(){
this.subMenu.hide();
}
},e.inherits(c,i),e.extend(c.prototype,r,!0);
}(),function(){
var e=a.editor.utils,t=a.editor.ui.uiUtils,n=a.editor.ui.Menu,i=a.editor.ui.SplitButton,o=a.editor.ui.Combox=function(e){
this.initOptions(e),this.initCombox();
};
o.prototype={
uiName:"combox",
initCombox:function(){
var e=this;
this.items=this.items||[];
for(var t=0;t<this.items.length;t++){
var i=this.items[t];
i.uiName="listitem",i.index=t,i.onclick=function(){
e.selectByIndex(this.index);
};
}
this.popup=new n({
items:this.items,
uiName:"list",
editor:this.editor,
captureWheel:!0,
combox:this
}),this.initSplitButton();
},
_SplitButton_postRender:i.prototype.postRender,
postRender:function(){
this._SplitButton_postRender(),this.setLabel(this.label||""),this.setValue(this.initValue||"");
},
showPopup:function(){
var e=t.getClientRect(this.getDom());
e.top+=1,e.bottom-=1,e.height-=2,this.popup.showAnchorRect(e);
},
getValue:function(){
return this.value;
},
setValue:function(e){
var t=this.indexByValue(e);
-1!=t?(this.selectedIndex=t,this.setLabel(this.items[t].label),this.value=this.items[t].value):(this.selectedIndex=-1,
this.setLabel(this.getLabelForUnknowValue(e)),this.value=e);
},
setLabel:function(e){
this.useInput?this.getDom("wx_input").value=e:this.getDom("button_body").innerHTML=e,
this.label=e;
},
getLabelForUnknowValue:function(e){
return e;
},
indexByValue:function(e){
for(var t=0;t<this.items.length;t++)if(e==this.items[t].value)return t;
return-1;
},
getItem:function(e){
return this.items[e];
},
selectByIndex:function(e){
e<this.items.length&&this.fireEvent("select",e)!==!1&&(this.selectedIndex=e,this.value=this.items[e].value,
this.setLabel(this.items[e].label));
}
},e.inherits(o,i);
}(),function(){
var e,t,n=a.editor.utils,i=a.editor.dom.domUtils,o=a.editor.ui.uiUtils,r=a.editor.ui.Mask,s=a.editor.ui.UIBase,d=a.editor.ui.Button,c=a.editor.ui.Dialog=function(e){
this.initOptions(n.extend({
autoReset:!0,
draggable:!0,
onok:function(){},
oncancel:function(){},
onclose:function(e,t){
return t?this.onok():this.oncancel();
},
holdScroll:!1
},e)),this.initDialog();
};
c.prototype={
draggable:!1,
uiName:"dialog",
initDialog:function(){
var n=this,i=this.editor.options.theme;
if(this.initUIBase(),this.modalMask=e||(e=new r({
className:"edui-dialog-modalmask",
theme:i
})),this.dragMask=t||(t=new r({
className:"edui-dialog-dragmask",
theme:i
})),this.closeButton=new d({
className:"edui-dialog-closebutton",
title:n.closeDialog,
theme:i,
onclick:function(){
n.close(!1);
}
}),this.buttons)for(var o=0;o<this.buttons.length;o++)this.buttons[o]instanceof d||(this.buttons[o]=new d(this.buttons[o]));
},
fitSize:function(){
var e=this.getDom("body"),t=this.mesureSize();
return e.style.width=t.width+"px",e.style.height=t.height+"px",t;
},
safeSetOffset:function(e){
var t=this,n=t.getDom(),i=o.getViewportRect(),r=o.getClientRect(n),a=e.left;
a+r.width>i.right&&(a=i.right-r.width);
var s=e.top;
s+r.height>i.bottom&&(s=i.bottom-r.height),n.style.left=Math.max(a,0)+"px",n.style.top=Math.max(s,0)+"px";
},
showAtCenter:function(){
this.getDom().style.display="";
var e=o.getViewportRect(),t=this.fitSize(),n=0|this.getDom("titlebar").offsetHeight,r=e.width/2-t.width/2,a=e.height/2-(t.height-n)/2-n,s=this.getDom();
this.safeSetOffset({
left:Math.max(0|r,0),
top:Math.max(0|a,0)
}),i.hasClass(s,"edui-state-centered")||(s.className+=" edui-state-centered"),this._show();
},
getContentHtml:function(){
var e="";
return"string"==typeof this.content?e=this.content:this.iframeUrl&&(e='<span id="'+this.id+'_contmask" class="dialogcontmask"></span><iframe id="'+this.id+'_iframe" class="%%-iframe" height="100%" width="100%" frameborder="0" src="'+this.iframeUrl+'"></iframe>'),
e;
},
getHtmlTpl:function(){
var e="";
if(this.buttons){
for(var t=[],n=0;n<this.buttons.length;n++)t[n]=this.buttons[n].renderHtml();
e='<div class="%%-foot"><div id="##_buttons" class="%%-buttons">'+t.join("")+"</div></div>";
}
return'<div id="##" class="%%"><div class="%%-wrap"><div id="##_body" class="%%-body"><div class="%%-shadow"></div><div id="##_titlebar" class="%%-titlebar"><div class="%%-draghandle" onmousedown="$$._onTitlebarMouseDown(event, this);"><span class="%%-caption">'+(this.title||"")+"</span></div>"+this.closeButton.renderHtml()+'</div><div id="##_content" class="%%-content">'+(this.autoReset?"":this.getContentHtml())+"</div>"+e+"</div></div></div>";
},
postRender:function(){
this.modalMask.getDom()||(this.modalMask.render(),this.modalMask.hide()),this.dragMask.getDom()||(this.dragMask.render(),
this.dragMask.hide());
var e=this;
if(this.addListener("show",function(){
e.modalMask.show(this.getDom().style.zIndex-2);
}),this.addListener("hide",function(){
e.modalMask.hide();
}),this.buttons)for(var t=0;t<this.buttons.length;t++)this.buttons[t].postRender();
i.on(window,"resize",function(){
setTimeout(function(){
e.isHidden()||e.safeSetOffset(o.getClientRect(e.getDom()));
});
}),this.holdScroll&&(e.iframeUrl?e.addListener("dialogafterreset",function(){
window.setTimeout(function(){
var t=document.getElementById(e.id+"_iframe").contentWindow;
if(l.ie)var n=window.setInterval(function(){
t.document&&t.document.body&&(window.clearInterval(n),n=null,i.on(t.document.body,l.gecko?"DOMMouseScroll":"mousewheel",function(e){
i.preventDefault(e);
}));
},100);else i.on(t,l.gecko?"DOMMouseScroll":"mousewheel",function(e){
i.preventDefault(e);
});
},1);
}):i.on(document.getElementById(e.id+"_iframe"),l.gecko?"DOMMouseScroll":"mousewheel",function(e){
i.preventDefault(e);
})),this._hide();
},
mesureSize:function(){
var e=this.getDom("body"),t=o.getClientRect(this.getDom("content")).width,n=e.style;
return n.width=t,o.getClientRect(e);
},
_onTitlebarMouseDown:function(e){
if(this.draggable){
var t,n=(o.getViewportRect(),this);
o.startDrag(e,{
ondragstart:function(){
t=o.getClientRect(n.getDom()),n.getDom("contmask").style.visibility="visible",n.dragMask.show(n.getDom().style.zIndex-1);
},
ondragmove:function(e,i){
var o=t.left+e,r=t.top+i;
n.safeSetOffset({
left:o,
top:r
});
},
ondragstop:function(){
n.getDom("contmask").style.visibility="hidden",i.removeClasses(n.getDom(),["edui-state-centered"]),
n.dragMask.hide();
}
});
}
},
reset:function(){
this.getDom("content").innerHTML=this.getContentHtml(),this.fireEvent("dialogafterreset");
},
_show:function(){
this._hidden&&(this.getDom().style.display="",this.editor.container.style.zIndex&&(this.getDom().style.zIndex=1*this.editor.container.style.zIndex+10),
this._hidden=!1,this.fireEvent("show"),a.editor.ui.uiUtils.getFixedLayer().style.zIndex=this.getDom().style.zIndex-4);
},
isHidden:function(){
return this._hidden;
},
_hide:function(){
this._hidden||(this.getDom().style.display="none",this.getDom().style.zIndex="",
this._hidden=!0,this.fireEvent("hide"));
},
open:function(){
if(this.autoReset)try{
this.reset();
}catch(e){
this.render(),this.open();
}
if(this.showAtCenter(),this.iframeUrl)try{
this.getDom("iframe").focus();
}catch(t){}
},
_onCloseButtonClick:function(){
this.close(!1);
},
close:function(e){
this.fireEvent("close",e)!==!1&&this._hide();
}
},n.inherits(c,s);
}(),function(){
var e=a.editor.utils,t=a.editor.ui.Menu,n=a.editor.ui.SplitButton,i=a.editor.ui.MenuButton=function(e){
this.initOptions(e),this.initMenuButton();
};
i.prototype={
initMenuButton:function(){
var e=this;
this.uiName="menubutton",this.popup=new t({
items:e.items,
className:e.className,
editor:e.editor
}),this.popup.addListener("show",function(){
for(var t=this,n=0;n<t.items.length;n++)t.items[n].removeState("checked"),t.items[n].value==e._value&&(t.items[n].addState("checked"),
this.value=e._value);
}),this.initSplitButton();
},
setValue:function(e){
this._value=e;
}
},e.inherits(i,n);
}(),function(){
var e=a.editor.utils,t=a.editor.ui,n=t.Dialog;
t.buttons={},t.Dialog=function(e){
var t=new n(e);
return t.addListener("hide",function(){
if(t.editor){
var e=t.editor;
try{
if(l.gecko){
var n=e.window.scrollY,i=e.window.scrollX;
e.body.focus(),e.window.scrollTo(i,n);
}else e.focus();
}catch(o){}
}
}),t;
};
for(var i,o={
edittable:"~/dialogs/table/edittable.html",
edittd:"~/dialogs/table/edittd.html"
},r=["undo","redo","formatmatch","bold","italic","underline","fontborder","indent","blockquote","pasteplain","selectall","horizontal","removeformat",,"insertparagraphbeforetable","insertrow","insertcol","mergeright","mergedown","deleterow","deletecol","splittorows","splittocols","splittocells","mergecells","deletetable"],s=0;i=r[s++];)i=i.toLowerCase(),
t[i]=function(e){
return function(n){
var i=new t.Button({
className:"edui-for-"+e,
title:n.options.labelMap[e]||n.getLang("labelMap."+e)||"",
onclick:function(){
n.execCommand(e);
},
theme:n.options.theme,
showText:!1
});
return t.buttons[e]=i,n.addListener("selectionchange",function(t,o,r){
var a=n.queryCommandState(e);
-1==a?(i.setDisabled(!0),i.setChecked(!1)):r||(i.setDisabled(!1),i.setChecked(a));
}),i;
};
}(i);
t.cleardoc=function(e){
var n=new t.Button({
className:"edui-for-cleardoc",
title:e.options.labelMap.cleardoc||e.getLang("labelMap.cleardoc")||"",
theme:e.options.theme,
onclick:function(){
confirm(e.getLang("confirmClear"))&&e.execCommand("cleardoc");
}
});
return t.buttons.cleardoc=n,e.addListener("selectionchange",function(){
n.setDisabled(-1==e.queryCommandState("cleardoc"));
}),n;
};
var d={
justify:["left","right","center","justify"],
imagefloat:["none","left","center","right"]
};
for(var c in d)!function(e,n){
for(var i,o=0;i=n[o++];)!function(n){
t[e.replace("float","")+n]=function(i){
var o=new t.Button({
className:"edui-for-"+e.replace("float","")+n,
title:i.options.labelMap[e.replace("float","")+n]||i.getLang("labelMap."+e.replace("float","")+n)||"",
theme:i.options.theme,
onclick:function(){
i.execCommand(e,n);
}
});
return t.buttons[e]=o,i.addListener("selectionchange",function(t,r,a){
o.setDisabled(-1==i.queryCommandState(e)),o.setChecked(i.queryCommandValue(e)==n&&!a);
}),o;
};
}(i);
}(c,d[c]);
for(var i,s=0;i=["backcolor","forecolor"][s++];)t[i]=function(e){
return function(n){
var i=new t.ColorButton({
className:"edui-for-"+e,
color:"default",
storekey:e,
title:n.options.labelMap[e]||n.getLang("labelMap."+e)||"",
editor:n,
onpickcolor:function(t,i){
n.execCommand(e,i);
},
onpicknocolor:function(){
n.execCommand(e,"default"),this.setColor("transparent"),this.color="default";
},
onbuttonclick:function(){
n.execCommand(e,this.color);
}
});
return t.buttons[e]=i,n.addListener("selectionchange",function(){
i.setDisabled(-1==n.queryCommandState(e));
}),i;
};
}(i);
var u={
noOk:[],
ok:["edittable","edittd"]
};
for(var c in u)!function(n,i){
for(var r,a=0;r=i[a++];)l.opera&&"searchreplace"===r||!function(i){
t[i]=function(r,a,s){
a=a||(r.options.iframeUrlMap||{})[i]||o[i],s=r.options.labelMap[i]||r.getLang("labelMap."+i)||"";
var l;
a&&(l=new t.Dialog(e.extend({
iframeUrl:r.ui.mapUrl(a),
editor:r,
className:"edui-for-"+i,
title:s,
holdScroll:"insertimage"===i,
closeDialog:r.getLang("closeDialog")
},"ok"==n?{
buttons:[{
className:"edui-okbutton",
label:r.getLang("ok"),
editor:r,
onclick:function(){
l.close(!0);
}
},{
className:"edui-cancelbutton",
label:r.getLang("cancel"),
editor:r,
onclick:function(){
l.close(!1);
}
}]
}:{})),r.ui._dialogs[i+"Dialog"]=l);
var d=new t.Button({
className:"edui-for-"+i,
title:s,
onclick:function(){
if(l)switch(i){
case"wordimage":
r.execCommand("wordimage","word_img"),r.word_img&&(l.render(),l.open());
break;

case"scrawl":
-1!=r.queryCommandState("scrawl")&&(l.render(),l.open());
break;

default:
l.render(),l.open();
}
},
theme:r.options.theme,
disabled:"scrawl"==i&&-1==r.queryCommandState("scrawl")
});
return t.buttons[i]=d,r.addListener("selectionchange",function(){
var e={
edittable:1
};
if(!(i in e)){
var t=r.queryCommandState(i);
d.getDom()&&(d.setDisabled(-1==t),d.setChecked(t));
}
}),d;
};
}(r.toLowerCase());
}(c,u[c]);
t.fontfamily=function(n,i,o){
if(i=n.options.fontfamily||[],o=n.options.labelMap.fontfamily||n.getLang("labelMap.fontfamily")||"",
i.length){
for(var r,a=0,s=[];r=i[a];a++){
var l=n.getLang("fontfamily")[r.name]||"";
!function(t,i){
s.push({
label:t,
value:i,
theme:n.options.theme,
renderLabelHtml:function(){
return'<div class="edui-label %%-label" style="font-family:'+e.unhtml(this.value)+'">'+(this.label||"")+"</div>";
}
});
}(r.label||l,r.val);
}
var d=new t.Combox({
editor:n,
items:s,
onselect:function(e,t){
n.execCommand("FontFamily",this.items[t].value);
},
onbuttonclick:function(){
this.showPopup();
},
title:o,
initValue:o,
className:"edui-for-fontfamily",
indexByValue:function(e){
if(e)for(var t,n=0;t=this.items[n];n++)if(-1!=t.value.indexOf(e))return n;
return-1;
}
});
return t.buttons.fontfamily=d,n.addListener("selectionchange",function(e,t,i){
if(!i){
var o=n.queryCommandState("FontFamily");
if(-1==o)d.setDisabled(!0);else{
d.setDisabled(!1);
var r=n.queryCommandValue("FontFamily");
r&&(r=r.replace(/['"]/g,"").split(",")[0]),d.setValue(r);
}
}
}),d;
}
},t.fontsize=function(e,n,i){
if(i=e.options.labelMap.fontsize||e.getLang("labelMap.fontsize")||"",n=n||e.options.fontsize||[],
n.length){
for(var o=[],r=0;r<n.length;r++){
var a=n[r]+"px";
o.push({
label:a,
value:a,
theme:e.options.theme,
renderLabelHtml:function(){
return'<div class="edui-label %%-label" style="line-height:1;font-size:'+this.value+'">'+(this.label||"")+"</div>";
}
});
}
var s={
"10px":9,
"11px":11,
"12px":13,
"14px":15,
"15px":17,
"16px":19,
"18px":21,
"20px":23,
"24px":25,
"36px":27,
other:29
},d=new t.Combox({
editor:e,
items:o,
title:i,
useInput:l.ie&&l.version<9?!1:!0,
initValue:i,
onselect:function(t,n){
var i=this.items[n].value;
this.editor.fireEvent("reportAddNum",65080,8,1),this.editor.fireEvent("reportAddNum",65080,s[i],1),
e.execCommand("FontSize",i);
},
onbuttonclick:function(){
this.showPopup();
},
oninputclick:function(){
var e=this;
setTimeout(function(){
{
var t=e.getDom("wx_input"),n=(parseInt(this.value),t.value);
parseInt(n);
}
l.ie?(t.value="",t.focus()):(t.focus(),t.select());
},100);
},
oninputblur:function(){
var t=this,n=t.getDom("wx_input"),i=n.value,o=parseInt(i),r=parseInt(this.value);
if(""==i)return n.value=r+"px",!1;
if(10>o&&(o=10),o>50&&(o=50),r==o)return!1;
var a,l=this.indexByValue(o+"px");
a=-1==l?s.other:s[o+"px"],this.editor.fireEvent("reportAddNum",65080,8,1),this.editor.fireEvent("reportAddNum",65080,a,1),
e.execCommand("FontSize",o+"px");
},
oninputkeydown:function(e,t){
var n=this,i=t.keyCode||t.which,o=n.getDom("wx_input");
13==i&&(o.blur(),t.stopPropagation?(t.stopPropagation(),t.preventDefault()):t.cancelBubble=!0);
},
className:"edui-for-fontsize"
});
return t.buttons.fontsize=d,e.addListener("selectionchange",function(t,n,i){
if(!i){
var o=e.queryCommandState("FontSize");
-1==o?d.setDisabled(!0):(d.setDisabled(!1),d.setValue(e.queryCommandValue("FontSize")));
}
}),d;
}
},t.paragraph=function(n,i,o){
if(o=n.options.labelMap.paragraph||n.getLang("labelMap.paragraph")||"",i=n.options.paragraph||[],
!e.isEmptyObject(i)){
var r=[];
for(var a in i)r.push({
value:a,
label:i[a]||n.getLang("paragraph")[a],
theme:n.options.theme,
renderLabelHtml:function(){
return'<div class="edui-label %%-label"><span class="edui-for-'+this.value+'">'+(this.label||"")+"</span></div>";
}
});
var s=new t.Combox({
editor:n,
items:r,
title:o,
initValue:o,
className:"edui-for-paragraph",
onselect:function(e,t){
n.execCommand("Paragraph",this.items[t].value);
},
onbuttonclick:function(){
this.showPopup();
}
});
return t.buttons.paragraph=s,n.addListener("selectionchange",function(e,t,i){
if(!i){
var o=n.queryCommandState("Paragraph");
if(-1==o)s.setDisabled(!0);else{
s.setDisabled(!1);
var r=n.queryCommandValue("Paragraph"),a=s.indexByValue(r);
s.setValue(-1!=a?r:s.initValue);
}
}
}),s;
}
},t.customstyle=function(e){
var n=e.options.customstyle||[],i=e.options.labelMap.customstyle||e.getLang("labelMap.customstyle")||"";
if(n.length){
for(var o,r=e.getLang("customstyle"),a=0,s=[];o=n[a++];)!function(t){
var n={};
n.label=t.label?t.label:r[t.name],n.style=t.style,n.className=t.className,n.tag=t.tag,
s.push({
label:n.label,
value:n,
theme:e.options.theme,
renderLabelHtml:function(){
return'<div class="edui-label %%-label"><'+n.tag+" "+(n.className?' class="'+n.className+'"':"")+(n.style?' style="'+n.style+'"':"")+">"+n.label+"</"+n.tag+"></div>";
}
});
}(o);
var l=new t.Combox({
editor:e,
items:s,
title:i,
initValue:i,
className:"edui-for-customstyle",
onselect:function(t,n){
e.execCommand("customstyle",this.items[n].value);
},
onbuttonclick:function(){
this.showPopup();
},
indexByValue:function(e){
for(var t,n=0;t=this.items[n++];)if(t.label==e)return n-1;
return-1;
}
});
return t.buttons.customstyle=l,e.addListener("selectionchange",function(t,n,i){
if(!i){
var o=e.queryCommandState("customstyle");
if(-1==o)l.setDisabled(!0);else{
l.setDisabled(!1);
var r=e.queryCommandValue("customstyle"),a=l.indexByValue(r);
l.setValue(-1!=a?r:l.initValue);
}
}
}),l;
}
},t.inserttable=function(e,n,i){
i=e.options.labelMap.inserttable||e.getLang("labelMap.inserttable")||"";
var o=new t.TableButton({
editor:e,
title:i,
className:"edui-for-inserttable",
onpicktable:function(t,n,i){
e.execCommand("InsertTable",{
numRows:i,
numCols:n,
border:1
});
},
onbuttonclick:function(){
this.showPopup();
}
});
return t.buttons.inserttable=o,e.addListener("selectionchange",function(){
o.setDisabled(-1==e.queryCommandState("inserttable"));
}),o;
},t.lineheight=function(e){
var n=e.options.lineheight||[];
if(n.length){
for(var i,o=0,r=[];i=n[o++];)r.push({
label:i,
value:i,
theme:e.options.theme,
onclick:function(){
e.execCommand("lineheight",this.value);
}
});
var a=new t.MenuButton({
editor:e,
className:"edui-for-lineheight",
title:e.options.labelMap.lineheight||e.getLang("labelMap.lineheight")||"",
items:r,
onbuttonclick:function(){
var t=e.queryCommandValue("LineHeight")||this.value;
e.execCommand("LineHeight",t);
}
});
return t.buttons.lineheight=a,e.addListener("selectionchange",function(){
var t=e.queryCommandState("LineHeight");
if(-1==t)a.setDisabled(!0);else{
a.setDisabled(!1);
var n=e.queryCommandValue("LineHeight");
n&&a.setValue((n+"").replace(/cm/,"")),a.setChecked(t);
}
}),a;
}
},t.justifyindent=function(e){
var n=e.options.justifyindent||[];
if(!n.length)return null;
for(var i,o=0,r=[];i=n[o++];)r.push({
label:i.name,
value:i.val,
theme:e.options.theme,
onclick:function(){
e.execCommand("justifyindent",this.value);
}
});
var a=new t.MenuButton({
editor:e,
className:"edui-for-justifyindent",
title:e.options.labelMap.justifyindent||e.getLang("labelMap.justifyindent")||"",
items:r,
onbuttonclick:function(){
var t=e.queryCommandValue("justifyindent")||this.value;
e.execCommand("justifyindent",t);
}
});
return t.buttons.justifyindent=a,e.addListener("selectionchange",function(){
var t=e.queryCommandState("justifyindent");
if(-1==t)a.setDisabled(!0);else{
a.setDisabled(!1);
var n=e.queryCommandValue("justifyindent");
n&&a.setValue((n+"").replace(/%/,"")),a.setChecked(t);
}
}),a;
};
for(var f,m=["top","bottom"],h=0;f=m[h++];)!function(e){
t["rowspacing"+e]=function(n){
var i=n.options["rowspacing"+e]||[];
if(!i.length)return null;
for(var o,r=0,a=[];o=i[r++];)a.push({
label:o,
value:o,
theme:n.options.theme,
onclick:function(){
n.execCommand("rowspacing",this.value,e);
}
});
var s=new t.MenuButton({
editor:n,
className:"edui-for-rowspacing"+e,
title:n.options.labelMap["rowspacing"+e]||n.getLang("labelMap.rowspacing"+e)||"",
items:a,
onbuttonclick:function(){
var t=n.queryCommandValue("rowspacing",e)||this.value;
n.execCommand("rowspacing",t,e);
}
});
return t.buttons[e]=s,n.addListener("selectionchange",function(){
var t=n.queryCommandState("rowspacing",e);
if(-1==t)s.setDisabled(!0);else{
s.setDisabled(!1);
var i=n.queryCommandValue("rowspacing",e);
i&&s.setValue((i+"").replace(/%/,"")),s.setChecked(t);
}
}),s;
};
}(f);
for(var p,g=["insertorderedlist","insertunorderedlist","letterspacing"],v=0;p=g[v++];)!function(e){
t[e]=function(n){
var i=n.options[e],o=function(){
n.execCommand(e,this.value);
},r=[];
for(var a in i)r.push({
label:i[a]||n.getLang()[e][a]||"",
value:a,
theme:n.options.theme,
onclick:o
});
var s=new t.MenuButton({
editor:n,
className:"edui-for-"+e,
title:n.getLang("labelMap."+e)||"",
items:r,
onbuttonclick:function(){
var t=n.queryCommandValue(e)||this.value;
n.execCommand(e,t);
}
});
return t.buttons[e]=s,n.addListener("selectionchange",function(){
var t=n.queryCommandState(e);
if(-1==t)s.setDisabled(!0);else{
s.setDisabled(!1);
var i=n.queryCommandValue(e);
s.setValue(i),s.setChecked(t);
}
}),s;
};
}(p);
}(),function(){
function e(e){
this.initOptions(e),this.initEditorUI();
}
var t=a.editor.utils,i=a.editor.ui.uiUtils,o=a.editor.ui.UIBase,r=a.editor.dom.domUtils,s=[];
e.prototype={
uiName:"editor",
initEditorUI:function(){
function e(e,t){
e.setOpt({
wordCount:!0,
maximumWords:1e4,
wordCountMsg:e.options.wordCountMsg||e.getLang("wordCountMsg"),
wordOverFlowMsg:e.options.wordOverFlowMsg||e.getLang("wordOverFlowMsg")
});
var n=e.options,i=n.maximumWords,o=n.wordCountMsg,r=n.wordOverFlowMsg,a=t.getDom("wordcount");
if(n.wordCount){
var s=e.getContentLength(!0);
s>i?(a.innerHTML=r,e.fireEvent("wordcountoverflow")):a.innerHTML=o.replace("{#leave}",i-s).replace("{#count}",s);
}
}
this.editor.ui=this,this._dialogs={},this.initUIBase(),this._initToolbars();
var t=this.editor,i=this;
t.addListener("ready",function(){
function n(){
e(t,i),r.un(t.document,"click",n);
}
if(t.getDialog=function(e){
return t.ui._dialogs[e+"Dialog"];
},r.on(t.window,"scroll",function(e){
a.editor.ui.Popup.postHide(e);
}),t.options.elementPathEnabled&&(t.ui.getDom("elementpath").innerHTML='<div class="edui-editor-breadcrumb">'+t.getLang("elementPathTip")+":</div>"),
t.options.wordCount&&(r.on(t.document,"click",n),t.ui.getDom("wordcount").innerHTML=t.getLang("wordCountTip")),
t.options.scaleEnabled?(t.ui._scale(),t.autoHeightEnabled&&t.disableAutoHeight(),
i.enableScale()):"function"==typeof i.disableScale&&i.disableScale(),!t.options.elementPathEnabled&&!t.options.wordCount&&!t.options.scaleEnabled){
var o=t.ui.getDom("elementpath"),s=t.ui.getDom("wordcount"),l=t.ui.getDom("scale");
o&&(o.style.display="none"),s&&(s.style.display="none"),l&&(l.style.display="none");
}
t.selection.isFocus()&&t.fireEvent("selectionchange",!1,!0);
}),t.addListener("mousedown",function(e,t){
var n=t.target||t.srcElement;
a.editor.ui.Popup.postHide(t,n),a.editor.ui.ShortCutMenu.postHide(t);
});
var o,s,l=!1;
t.addListener("afterpaste",function(){
t.queryCommandState("pasteplain")||(a.editor.ui.PastePicker&&(o=new a.editor.ui.Popup({
content:new a.editor.ui.PastePicker({
editor:t
}),
editor:t,
className:"edui-wordpastepop"
}),o.render()),l=!0);
}),t.addListener("afterinserthtml",function(){
clearTimeout(s),s=setTimeout(function(){
if(o&&(l||t.ui._isTransfer)){
if(o.isHidden()){
var e=r.createElement(t.document,"span",{
style:"line-height:0px;",
innerHTML:"﻿"
}),i=t.selection.getRange();
i.insertNode(e);
var a=n(e,"firstChild","previousSibling");
a&&o.showAnchor(3==a.nodeType?a.parentNode:a),r.remove(e);
}else o.show();
delete t.ui._isTransfer,l=!1;
}
},200);
}),t.addListener("contextmenu",function(e,t){
a.editor.ui.Popup.postHide(t);
}),t.addListener("keydown",function(e,t){
o&&o.dispose(t);
var n=t.keyCode||t.which;
t.altKey&&90==n&&UE.ui.buttons.fullscreen&&UE.ui.buttons.fullscreen.onclick();
}),t.addListener("wordcount",function(){
e(this,i);
}),t.addListener("selectionchange",function(){
t.options.elementPathEnabled&&i[(-1==t.queryCommandState("elementpath")?"dis":"en")+"ableElementPath"](),
t.options.scaleEnabled&&i[(-1==t.queryCommandState("scale")?"dis":"en")+"ableScale"]();
});
},
_initToolbars:function(){
for(var e=this.editor,t=this.toolbars||[],n=[],i=["edui-toolbar-primary","edui-toobar-secondary"],o=0;o<t.length;o++){
for(var r=t[o],s=new a.editor.ui.Toolbar({
theme:e.options.theme,
className:i[o],
id:"js_toolbar_"+o
}),l=0;l<r.length;l++){
var d=r[l],c=null;
"string"==typeof d?(d=d.toLowerCase(),"|"==d&&(d="Separator"),"||"==d&&(d="Breakline"),
a.editor.ui[d]&&(c=new a.editor.ui[d](e))):c=d,c&&c.id&&s.add(c);
}
n[o]=s;
}
this.toolbars=n;
},
getHtmlTpl:function(){
return this.layout({
is_illegal:1*this.is_illegal||0,
length:this.toolbars.length,
toolbarBoxHtml:this.renderToolbarBoxHtml(),
clickToUpload:this.editor.getLang("clickToUpload")
});
},
showWordImageDialog:function(){
this.editor.execCommand("wordimage","word_img"),this._dialogs.wordimageDialog.open();
},
renderToolbarBoxHtml:function(){
for(var e=[],t=0;t<this.toolbars.length;t++)e.push(this.toolbars[t].renderHtml());
return e.join("");
},
setFullScreen:function(e){
var t=this.editor,n=t.container.parentNode.parentNode;
if(this._fullscreen!=e){
if(this._fullscreen=e,this.editor.fireEvent("beforefullscreenchange",e),a.editor.browser.gecko)var i=t.selection.getRange().createBookmark();
if(e){
for(;"BODY"!=n.tagName;){
var o=a.editor.dom.domUtils.getComputedStyle(n,"position");
s.push(o),n.style.position="static",n=n.parentNode;
}
this._bakHtmlOverflow=document.documentElement.style.overflow,this._bakBodyOverflow=document.body.style.overflow,
this._bakAutoHeight=this.editor.autoHeightEnabled,this._bakScrollTop=Math.max(document.documentElement.scrollTop,document.body.scrollTop),
this._bakEditorContaninerWidth=t.iframe.parentNode.offsetWidth,this._bakAutoHeight&&(t.autoHeightEnabled=!1,
this.editor.disableAutoHeight()),document.documentElement.style.overflow="hidden",
document.body.style.overflow="hidden",this._bakCssText=this.getDom().style.cssText,
this._bakCssText1=this.getDom("iframeholder").style.cssText,t.iframe.parentNode.style.width="",
this._updateFullScreen();
}else{
for(;"BODY"!=n.tagName;)n.style.position=s.shift(),n=n.parentNode;
this.getDom().style.cssText=this._bakCssText,this.getDom("iframeholder").style.cssText=this._bakCssText1,
this._bakAutoHeight&&(t.autoHeightEnabled=!0,this.editor.enableAutoHeight()),document.documentElement.style.overflow=this._bakHtmlOverflow,
document.body.style.overflow=this._bakBodyOverflow,t.iframe.parentNode.style.width=this._bakEditorContaninerWidth+"px",
window.scrollTo(0,this._bakScrollTop);
}
if(l.gecko&&"true"===t.body.contentEditable){
var r=document.createElement("input");
document.body.appendChild(r),t.body.contentEditable=!1,setTimeout(function(){
r.focus(),setTimeout(function(){
t.body.contentEditable=!0,t.fireEvent("fullscreenchanged",e),t.selection.getRange().moveToBookmark(i).select(!0),
a.editor.dom.domUtils.remove(r),e&&window.scroll(0,0);
},0);
},0);
}
"true"===t.body.contentEditable&&(this.editor.fireEvent("fullscreenchanged",e),this.triggerLayout());
}
},
_updateFullScreen:function(){
if(this._fullscreen){
var e=i.getViewportRect();
if(this.getDom().style.cssText="border:0;position:absolute;left:0;top:"+(this.editor.options.topOffset||0)+"px;width:"+e.width+"px;height:"+e.height+"px;z-index:"+(1*this.getDom().style.zIndex+100),
i.setViewportOffset(this.getDom(),{
left:0,
top:this.editor.options.topOffset||0
}),this.editor.setHeight(e.height-this.getDom("toolbarbox").offsetHeight-this.getDom("bottombar").offsetHeight-(this.editor.options.topOffset||0)),
l.gecko)try{
window.onresize();
}catch(t){}
}
},
_updateElementPath:function(){
var e,t=this.getDom("elementpath");
if(this.elementPathEnabled&&(e=this.editor.queryCommandValue("elementpath"))){
for(var n,i=[],o=0;n=e[o];o++)i[o]=this.formatHtml('<span unselectable="on" onclick="$$.editor.execCommand(&quot;elementpath&quot;, &quot;'+o+'&quot;);">'+n+"</span>");
t.innerHTML='<div class="edui-editor-breadcrumb" onmousedown="return false;">'+this.editor.getLang("elementPathTip")+": "+i.join(" &gt; ")+"</div>";
}else t.style.display="none";
},
disableElementPath:function(){
var e=this.getDom("elementpath");
e.innerHTML="",e.style.display="none",this.elementPathEnabled=!1;
},
enableElementPath:function(){
var e=this.getDom("elementpath");
e.style.display="",this.elementPathEnabled=!0,this._updateElementPath();
},
_scale:function(){
function e(){
p=r.getXY(s),g||(g=a.options.minFrameHeight+c.offsetHeight+u.offsetHeight),m.style.cssText="position:absolute;left:0;display:;top:0;background-color:#41ABFF;opacity:0.4;filter: Alpha(opacity=40);width:"+s.offsetWidth+"px;height:"+s.offsetHeight+"px;z-index:"+(a.options.zIndex+1),
r.on(o,"mousemove",t),r.on(d,"mouseup",n),r.on(o,"mouseup",n);
}
function t(e){
i();
var t=e||window.event;
b=t.pageX||o.documentElement.scrollLeft+t.clientX,y=t.pageY||o.documentElement.scrollTop+t.clientY,
C=b-p.x,N=y-p.y,C>=v&&(h=!0,m.style.width=C+"px"),N>=g&&(h=!0,m.style.height=N+"px");
}
function n(){
h&&(h=!1,a.ui._actualFrameWidth=m.offsetWidth-2,s.style.width=a.ui._actualFrameWidth+"px",
a.setHeight(m.offsetHeight-u.offsetHeight-c.offsetHeight-2)),m&&(m.style.display="none"),
i(),r.un(o,"mousemove",t),r.un(d,"mouseup",n),r.un(o,"mouseup",n);
}
function i(){
l.ie?o.selection.clear():window.getSelection().removeAllRanges();
}
var o=document,a=this.editor,s=a.container,d=a.document,c=this.getDom("toolbarbox"),u=this.getDom("bottombar"),f=this.getDom("scale"),m=this.getDom("scalelayer"),h=!1,p=null,g=0,v=a.options.minFrameWidth,b=0,y=0,C=0,N=0;
this.enableScale=function(){
f&&1!=a.queryCommandState("source")&&(f.style.display="",this.scaleEnabled=!0,r.on(f,"mousedown",e));
},this.disableScale=function(){
f&&(f.style.display="none",this.scaleEnabled=!1,r.un(f,"mousedown",e));
};
},
isFullScreen:function(){
return this._fullscreen;
},
postRender:function(){
o.prototype.postRender.call(this);
for(var e=0;e<this.toolbars.length;e++)this.toolbars[e].postRender();
var t,n=this,i=a.editor.dom.domUtils,r=function(){
clearTimeout(t),t=setTimeout(function(){
n._updateFullScreen();
});
};
i.on(window,"resize",r),n.addListener("destroy",function(){
i.un(window,"resize",r),clearTimeout(t);
});
},
showToolbarMsg:function(e,t){
if(this.getDom("toolbarmsg_label").innerHTML=e,this.getDom("toolbarmsg").style.display="",
!t){
var n=this.getDom("upload_dialog");
n.style.display="none";
}
},
hideToolbarMsg:function(){
this.getDom("toolbarmsg").style.display="none";
},
mapUrl:function(e){
return e?e.replace("~/",this.editor.options.UEDITOR_HOME_URL||""):"";
},
triggerLayout:function(){
var e=this.getDom();
e.style.zoom="1"==e.style.zoom?"100%":"1";
}
},t.inherits(e,a.editor.ui.UIBase);
var d={};
UE.ui.Editor=function(n){
var i=new UE.Editor(n);
i.options.editor=i;
var o=i.render;
return i.render=function(n){
n.constructor===String&&(i.key=n,d[n]=i),t.domReady(function(){
function t(){
if(i.setOpt({
labelMap:i.options.labelMap||i.getLang("labelMap")
}),new e(i.options),n&&(n.constructor===String&&(n=document.getElementById(n)),n&&n.getAttribute("name")&&(i.options.textarea=n.getAttribute("name")),
n&&/script|textarea/gi.test(n.tagName))){
var t=document.createElement("div");
n.parentNode.insertBefore(t,n);
var a=n.value||n.innerHTML;
i.options.initialContent=/^[\t\r\n ]*$/.test(a)?i.options.initialContent:a.replace(/>[\n\r\t]+([ ]{4})+/g,">").replace(/[\n\r\t]+([ ]{4})+</g,"<").replace(/>[\n\r\t]+</g,"><"),
n.className&&(t.className=n.className),n.style.cssText&&(t.style.cssText=n.style.cssText),
/textarea/i.test(n.tagName)?(i.textarea=n,i.textarea.style.display="none"):(n.parentNode.removeChild(n),
n.id&&(t.id=n.id)),n=t,n.innerHTML="";
}
r.addClass(n,"edui-"+i.options.theme),i.ui.render(n);
i.options;
i.container=i.ui.getDom(),i.container.style.cssText="z-index:"+i.options.zIndex,
o.call(i,i.ui.getDom("iframeholder"));
}
i.langIsReady?t():i.addListener("langReady",t);
});
},i;
},UE.getEditor=function(e,t){
var n=d[e];
return n||(n=d[e]=new UE.ui.Editor(t),n.render(e)),n;
},UE.delEditor=function(e){
var t;
(t=d[e])&&(t.key&&t.destroy(),delete d[e]);
};
}(),function(){
var e=a.editor.utils,t=a.editor.ui.Popup,n=a.editor.ui.SplitButton,i=a.editor.ui.MultiMenuPop=function(e){
this.initOptions(e),this.initMultiMenu();
};
i.prototype={
initMultiMenu:function(){
var e=this;
this.popup=new t({
content:"",
editor:e.editor,
iframe_rendered:!1,
onshow:function(){
this.iframe_rendered||(this.iframe_rendered=!0,this.getDom("content").innerHTML='<iframe id="'+e.id+'_iframe" src="'+e.iframeUrl+'" frameborder="0"></iframe>',
e.editor.container.style.zIndex&&(this.getDom().style.zIndex=1*e.editor.container.style.zIndex+1));
}
}),this.onbuttonclick=function(){
this.showPopup();
},this.initSplitButton();
}
},e.inherits(i,n);
}(),function(){
function e(e){
var t=e.target||e.srcElement,n=s.findParent(t,function(e){
return s.hasClass(e,"edui-shortcutmenu")||s.hasClass(e,"edui-popup");
},!0);
if(!n)for(var i,o=0;i=d[o++];)i.hide();
}
var t,n=a.editor.ui,i=n.UIBase,o=n.uiUtils,r=a.editor.utils,s=a.editor.dom.domUtils,d=[],c=!1,u=n.ShortCutMenu=function(e){
this.initOptions(e),this.initShortCutMenu();
};
u.postHide=e,u.prototype={
isHidden:!0,
SPACE:5,
initShortCutMenu:function(){
this.items=this.items||[],this.initUIBase(),this.initItems(),this.initEvent(),d.push(this);
},
initEvent:function(){
var e=this,n=e.editor.document;
s.on(n,"mousemove",function(n){
if(e.isHidden===!1){
if(e.getSubMenuMark()||"contextmenu"==e.eventType)return;
var i=!0,o=e.getDom(),r=o.offsetWidth,a=o.offsetHeight,s=r/2+e.SPACE,l=a/2,d=Math.abs(n.screenX-e.left),c=Math.abs(n.screenY-e.top);
clearTimeout(t),t=setTimeout(function(){
c>0&&l>c?e.setOpacity(o,"1"):c>l&&l+70>c?(e.setOpacity(o,"0.5"),i=!1):c>l+70&&l+140>c&&e.hide(),
i&&d>0&&s>d?e.setOpacity(o,"1"):d>s&&s+70>d?e.setOpacity(o,"0.5"):d>s+70&&s+140>d&&e.hide();
});
}
}),l.chrome&&s.on(n,"mouseout",function(t){
var n=t.relatedTarget||t.toElement;
(null==n||"HTML"==n.tagName)&&e.hide();
}),e.editor.addListener("afterhidepop",function(){
e.isHidden||(c=!0);
});
},
initItems:function(){
if(r.isArray(this.items))for(var e=0,t=this.items.length;t>e;e++){
var i=this.items[e].toLowerCase();
n[i]&&(this.items[e]=new n[i](this.editor),this.items[e].className+=" edui-shortcutsubmenu ");
}
},
setOpacity:function(e,t){
l.ie&&l.version<9?e.style.filter="alpha(opacity = "+100*parseFloat(t)+");":e.style.opacity=t;
},
getSubMenuMark:function(){
c=!1;
for(var e,t=o.getFixedLayer(),n=s.getElementsByTagName(t,"div",function(e){
return s.hasClass(e,"edui-shortcutsubmenu edui-popup");
}),i=0;e=n[i++];)"none"!=e.style.display&&(c=!0);
return c;
},
show:function(e,t){
function n(e){
e.left<0&&(e.left=0),e.top<0&&(e.top=0),l.style.cssText="position:absolute;left:"+e.left+"px;top:"+e.top+"px;";
}
function i(e){
e.tagName||(e=e.getDom()),a.left=parseInt(e.style.left),a.top=parseInt(e.style.top),
a.top-=l.offsetHeight+15,n(a);
}
var r=this,a={},l=this.getDom(),d=o.getFixedLayer();
if(r.eventType=e.type,l.style.cssText="display:block;left:-9999px","contextmenu"==e.type&&t){
var c=s.getElementsByTagName(d,"div","edui-contextmenu")[0];
c?i(c):r.editor.addListener("aftershowcontextmenu",function(e,t){
i(t);
});
}else a=o.getViewportOffsetByEvent(e),a.top-=l.offsetHeight+r.SPACE,a.left+=r.SPACE+20,
n(a),r.setOpacity(l,.2);
r.isHidden=!1,r.left=e.screenX+l.offsetWidth/2-r.SPACE,r.top=e.screenY-l.offsetHeight/2-r.SPACE,
r.editor&&(l.style.zIndex=1*r.editor.container.style.zIndex+10,d.style.zIndex=l.style.zIndex-1);
},
hide:function(){
this.getDom()&&(this.getDom().style.display="none"),this.isHidden=!0;
},
postRender:function(){
if(r.isArray(this.items))for(var e,t=0;e=this.items[t++];)e.postRender();
},
getHtmlTpl:function(){
var e;
if(r.isArray(this.items)){
e=[];
for(var t=0;t<this.items.length;t++)e[t]=this.items[t].renderHtml();
e=e.join("");
}else e=this.items;
return'<div id="##" class="%% edui-toolbar" data-src="shortcutmenu" onmousedown="return false;" onselectstart="return false;" >'+e+"</div>";
}
},r.inherits(u,i),s.on(document,"mousedown",function(t){
e(t);
}),s.on(window,"scroll",function(t){
e(t);
});
}(),function(){
var e=a.editor.utils,t=a.editor.ui.UIBase,n=a.editor.ui.Breakline=function(e){
this.initOptions(e),this.initSeparator();
};
n.prototype={
uiName:"Breakline",
initSeparator:function(){
this.initUIBase();
},
getHtmlTpl:function(){
return"<br/>";
}
},e.inherits(n,t);
}();
});define("cardticket/add/member_info_flag.js",[],function(){
"use strict";
function n(n,f){
for(var i=0;i<n.length;i++)if(n[i]===f)return i;
return-1;
}
var f=[1,4096,2,4,8,0,32,64,128,256,512,1024,2048];
return{
sys_info:["手机号","姓名","性别","所在地区","生日","身份证号","邮箱","详细地址","学历","职业","行业","收入","爱好"],
info_flag:f,
flag2info:function(n){
for(var f=[],i=0;i<this.info_flag.length;i++){
var r=this.info_flag[i];
r&n&&f.push(this.sys_info[i]);
}
return f;
},
info2flag:function(f){
for(var i=0,r=0;r<f.length;r++){
var t=n(this.sys_info,f[r]);
t>=0&&(i|=this.info_flag[t]);
}
return i;
}
};
});define("tpl/cardticket/send_card.html.js",[],function(){
return'<div>\n	<div class="wrp_processor js_step_container"></div>\n	<div class="first_step js_step_content js_step1">\n	    <!--选择投放方式弹窗-->\n		<div class="js_card_list"></div>\n		<!--选择投放方式弹窗 end-->\n	</div>\n	<div class="second_step js_step_content js_step2">\n	</div>\n</div>';
});define("cardticket/send_card_table.js",["common/wx/Tips.js","common/wx/Cgi.js","common/wx/Step.js","common/wx/pagebar.js","cardticket/parse_data.js","biz_web/ui/dropdown.js","cardticket/store_cgi.js","cardticket/common_template_helper.js","cardticket/create_card_select.js","tpl/cardticket/card_table.html.js","tpl/cardticket/card_preview.html.js","page/cardticket/dialog_choose_card.css","biz_web/ui/checkbox.js","cardticket/card_quantity.js"],function(t){
"use strict";
function e(t){
{
var e;
t.opt;
}
e=t.$container,e.find(".js_card_list").html(k({
loading:!0
}));
}
function a(t,a){
var r=a.opt,c=$.extend(!0,{
action:"batch",
begin:t.begin,
count:t.count,
tag_filter:r.tag_filter,
filter_out_expired_card:r.filter_out_expired_card
},r.param);
1==r.view_mode&&(c.sub_merchant_id=0),w=!0,e(a),o.get({
url:r.url||"/merchant/electroniccardmgr",
data:c,
complete:function(){
w=!1;
}
},function(t){
if(0==t.base_resp.ret){
var e=t,n=t.card_dispatching_list;
t="string"==typeof t.batch_card?$.parseJSON(t.batch_card):t.batch_card,r.data=t.card_list;
var s=l.parse_cardlist(r.data);
if(b=s.card_cache,r.data=s.card_list,r.cache_data=b,r.acl={
is_can_shake:e.is_can_shake_card,
is_can_use_sns_card:e.is_can_use_sns_card,
is_intercomm_card:e.is_intercomm_card,
is_can_card_friend:e.is_can_use_sns_card
},n)try{
var _=$.parseJSON(e.card_dispatching_list);
if(_){
_=_.card_dispatching_list;
for(var d=0;d<_.length;d++){
var u=_[d],p=b[u.card_id];
p&&(p.cansend=!u.is_dispatching);
}
}
}catch(h){}
if(r.pageInfo.total_count=t.total_num,e.biz_quota_json){
var m=$.parseJSON(e.biz_quota_json);
m=f.parse_assistsend_quota(m.quota_list),a._quota=m;
}
i(r.pageInfo,a);
}else o.handleRet(t,{
id:64463,
key:33,
url:"/merchant/electroniccardmgr"
}),(new Image).src="https://badjs.weixinbridge.com/badjs?id=33&level=4&from="+encodeURIComponent(location.host)+"&msg="+encodeURIComponent("[card][sendout_err][cgi=/merchant/electroniccardmgr][data="+JSON.stringify(c)+"][ret="+(t?t.base_resp.ret:"null")+"]");
});
}
function i(t,e,a){
var i,_=e.opt;
if(_.payflag=_.param.flag,i=e.$container,a){
var o=i.find(".js_select");
return o.each(function(e){
e>=t.begin&&e<t.begin+t.count?$(this).closest("tr").show():$(this).closest("tr").hide();
}),e.pagebar=null,s(_.pageInfo,e),void(e.opt.getDataComplete&&e.opt.getDataComplete.call(e,a));
}
if(_.data&&"undefined"!=typeof _.sub_merchant_id)for(var d=0;d<_.data.length;d++)_.sub_merchant_id?_.data[d].sub_merchant_id!=_.sub_merchant_id&&(_.data[d].is_sub_merchant_disabled=!0):_.data[d].sub_merchant_id&&(_.data[d].is_sub_merchant_disabled=!0);
i.find(".js_card_list").html(k(_));
var l=_.defaultValues,o=i.find(".js_select");
l.length&&o.each(function(){
for(var t=$(this),e=0;e<l.length;e++)if(l[e]==t.attr("data-id")){
t.prop("checked",!0);
break;
}
}),e.select_card_checkbox=o.checkbox({
onChanged:function(){
if(_.multi){
var t=0;
o.each(function(){
$(this).prop("checked")&&t++;
}),$(".js_selectcount",i).text(t);
}
}
}),e.pagebar=null,s(_.pageInfo,e),c(e),n(e),1==_.no_filter||r(e);
var u,p=[];
1==_.sns_card_type?u=o.filter(".js_select_disabled_1"):2==_.sns_card_type&&(u=o.filter(".js_select_disabled_2")),
u&&(u.each(function(){
p.push($(this).val());
}),e.select_card_checkbox.disable(p)),$(".js_add_card_link",i).click(function(){
return new h({
ispay:_.payflag,
is_sns_card:window.wx_is_can_use_sns_card
}),e.opt.hidePopup&&e.opt.hidePopup(),!1;
}),e.opt.getDataComplete&&e.opt.getDataComplete.call(e,a);
}
function r(t){
var e=t.opt;
if("2"!=e.sns_card_type){
var i=[];
1==e.sns_card_type?i=[{
name:"全部卡券",
value:"friends,0"
}]:0==e.sns_card_type&&(i=[{
name:"全部卡券",
value:""
}],e.acl.is_can_card_friend&&i.push({
name:"朋友共享的券",
value:"friends,1"
})),e.acl.is_can_shake&&i.push({
name:"摇一摇",
value:"shake,1"
}),e.acl.is_intercomm_card;
var r=t.base_tag_filter?"|":"",c={};
if(c[t.base_tag_filter+r+"task,1"]="互通",c[t.base_tag_filter+r+"shake,1"]="摇一摇",c[t.base_tag_filter+r+"friends,1"]="朋友的券",
i.length>1){
new u({
container:$(".js_filter_tag",t.$container),
label:c[e.tag_filter]||"全部卡券",
data:i,
callback:function(i){
var r=t.base_tag_filter+(t.base_tag_filter&&i?"|"+i:i);
r!=e.tag_filter&&(e.tag_filter=r,a(e.pageInfo,t));
}
});
}
}
}
function c(t){
function e(e){
var i=$.trim(c.val());
(!e||e&&wx.isHotkey(e,"enter"))&&(n.param.keyword=i,a(n.pageInfo,t));
}
var i=t.$container,r=$(".js_search",i),c=$(".js_keyword",i),n=t.opt;
r.click(function(){
e();
}),c.keyup(function(t){
e(t);
}),c.val(n.param.keyword);
}
function n(t){
var e=t.$container,a=e.find(".js_modify_quantity");
a.each(function(){
var e=$(this),a=1*e.attr("data-new")||0;
new y({
container:e,
mode:"fixed",
cache_card:t.opt.cache_data,
setquantity:a?!0:!1,
max_sku_for_eachcard:t._quota&&t._quota.max_sku||1e4,
quantityChange:function(t,a){
var i=b[t];
if(i){
if(i.pay_info.is_swipe_card)return i.pay_info.swipe_card_status=1,void e.hide();
i.quantity=this.opt.setquantity?i.quantity+a:a,e.attr("data-new",1),i.isnew=!0,this.opt.setquantity=!0,
$("#js_ct_tr_"+t).find(".js_sendcard_quantity").text(i.quantity);
}
}
});
});
}
function s(t,e){
var r=t.total_count,c=e.$container;
if(t.count&&r>t.count){
var n=t.begin/t.count;
e.pagebar=new d({
container:$(".js_pager",c),
first:!1,
last:!1,
midRange:5,
initShowPage:n+1,
perPage:t.count,
totalItemsNum:r,
callback:function(r){
if(w)return!1;
var c=r.currentPage;
return c!=n+1&&(t.begin=(c-1)*t.count,e.opt.hasdata&&e.opt.data?i(t,e,!0):a(t,e)),
e.opt.pageChanged&&e.opt.pageChanged.call(e),!0;
}
});
}
}
var _=t("common/wx/Tips.js"),o=t("common/wx/Cgi.js"),d=(t("common/wx/Step.js"),t("common/wx/pagebar.js")),l=t("cardticket/parse_data.js"),u=t("biz_web/ui/dropdown.js"),p=t("cardticket/store_cgi.js"),f=t("cardticket/common_template_helper.js"),h=t("cardticket/create_card_select.js"),m={
multi:!1,
pageInfo:{
begin:0,
count:5,
total_count:0
},
param:{
keyword:"",
status:"3|6",
flag:2
},
neednew:!0,
noexpire:!0,
editquantity:!0,
onHide:$.noop,
selectComplete:$.noop,
data:null,
hasdata:!1,
maxcount:10,
sns_card_type:1,
defaultValues:[],
url:"",
removeOnHide:!0,
source:"",
has_sendout:!1,
acl:{},
view_mode:0,
sub_merchant_id:void 0,
filter_out_expired_card:1
},g=t("tpl/cardticket/card_table.html.js"),b=(template.compile(t("tpl/cardticket/card_preview.html.js")),
{});
t("page/cardticket/dialog_choose_card.css"),t("biz_web/ui/checkbox.js");
var v=function(t){
this.opt=$.extend(!0,{},m,t),this.opt.tag_filter=0==this.opt.sns_card_type?"":2==this.opt.sns_card_type?"friends,1":"friends,0",
this.init();
},k=template.compile(g),w=!1,y=t("cardticket/card_quantity.js");
return v.prototype={
_html:g,
init:function(){
var t=this.opt,e=this;
if(this.$container=$(t.container),e.base_tag_filter="",2==t.view_mode&&(e.base_tag_filter="sub_merchant,1",
t.tag_filter=t.tag_filter?e.base_tag_filter+"|"+t.tag_filter:e.base_tag_filter),
t.hasdata&&t.data){
t.pageInfo.total_count=t.data.length,b={};
for(var r=0;r<t.data.length;r++){
var c=t.data[r];
b[c.id]=c;
}
i(t.pageInfo,this);
}else a(t.pageInfo,this);
},
show:function(){
this.$container.show();
},
select:function(){
if(!w){
var t=this,e=this.opt,a=t.select_card_checkbox.values()[0],i=this.$container,r=b[a];
if(!a||!r)return void _.err("请选择卡券");
if(!e.neednew||!r.pay_info.is_swipe_card||0==r.pay_info.swipe_card_status||0!=r.quantity){
if(e.multi)for(var c=t.select_card_checkbox.values(),n=0;n<c.length;n++){
var s=b[c[n]];
if(e.neednew&&(!s.isnew||0==s.quantity))return void _.err("卡券库存不能为0，请先设置库存再投放");
}else if(e.neednew&&(!r.isnew||0==r.quantity))return _.err("卡券库存不能为0，请先设置库存再投放"),
void setTimeout(function(){
var t=i.find("input[data-id="+a+"]");
$(t.closest("tr").find(".js_modify_quantity")[0]).click();
},50);
if(!e.multi&&e.noexpire&&r.is_expire)return void _.err(r.is_sns_card?"卡券已过期":"卡券已过期，无法投放，请到卡券详情去延长有效期再投放");
if(e.multi&&e.noexpire)for(var c=t.select_card_checkbox.values(),n=0;n<c.length;n++){
var s=b[c[n]];
if(s.is_expire)return void _.err("不能选择已过期的卡券，请先到卡券详情去延长有效期");
}
var c=t.select_card_checkbox.values();
return c.length>e.maxcount?void _.err("最多只能选择%s个卡券".sprintf(e.maxcount)):2!=e.sns_card_type||r.is_sns_card?1==e.sns_card_type&&r.is_sns_card?void _.err("朋友的券只能进行社交投放, 请重新选择"):"undefined"!=typeof e.sub_merchant_id&&r.is_sub_merchant_disabled?void _.err("不支持赠送其他商户的“朋友的券”，请重新选择。"):void p.canSendCard({
card_id:a,
success:function(a){
if(a===!1)_.err("没有“审核通过”的门店。确认有至少一个“审核通过”的门店后可进行投放。");else if(a===!0){
var i=t.select_card_checkbox.values(),r=e.multi?i:i,c=[];
if(e.multi)for(var n=0;n<r.length;n++)b[r[n]].cardid=b[r[n]].id,c.push(b[r[n]]);else c=b[r],
c.cardid=b[r].id;
e.selectComplete&&e.selectComplete(c,0);
}
}
}):void _.err("朋友的券才能进行社交投放, 请重新选择");
}
switch(r.pay_info.swipe_card_status){
case 1:
_.err("添加库存暂未生效，待商户审核完成");
break;

case 3:
_.err("请先激活本券");
break;

case 2:
case 4:
_.err("卡券库存不能为0，请先设置库存再投放");
}
}
},
isLoading:function(){
return w;
},
hide:function(){
this.$container.hide();
},
destroy:function(){
this.$container.remove();
}
},v;
});define("tpl/media/preview/chat.html.js",[],function(){
return'<div class="wx_phone_hd">\n	微信团队</div>\n<div class="wx_phone_bd wx_phone_preview_chat_wrp">\n    {each list as item index}\n    <div class="wx_phone_preview_chat">\n        <img class="chat_user_avatar" src="/mpres/zh_CN/htmledition/comm_htmledition/images/pic/common/pic_avatar_wechat.jpg">\n        <div class="chat_content">\n            <div class="chat_appmsg_msg jsPhoneViewCard" data-index="{index}">\n                <div class="chat_appmsg_title" title="{item.title}">{item.title}</div>\n                <div class="chat_appmsg_content">\n                    <img class="chat_appmsg_thumb" src="{item.img||item.avatar}">\n                    <div class="chat_appmsg_desc" title="{item.digest}">{item.digest}</div>\n                </div>\n                <span class="chat_arrow_wrp">\n                    <i class="chat_arrow arrow_out"></i>\n                    <i class="chat_arrow arrow_in"></i>\n                </span>\n            </div>\n        </div>\n    </div>\n    {/each}\n</div>\n<!--pulgin-->\n<div>\n    <ul class="wx_view_list">\n        <li class="wx_view_item jsPhoneViewLink" data-id="card">会话消息</li>\n        <!--<li class="wx_view_item jsPhoneViewLink" data-id="appmsg">消息正文</li>-->\n        <li class="wx_view_item jsPhoneViewLink " data-id="moments">分享到朋友圈</li>\n        <li class="wx_view_item jsPhoneViewLink selected" data-id="chat">发送给朋友</li>\n    </ul>\n    <div class="btn_wx_phone_preview_wrp">\n        <a class="btn btn_default btn_wx_phone_preview jsPhoneViewPub">发送到手机预览</a>\n    </div>\n</div>\n\n\n\n\n\n';
});define("tpl/media/preview/moments.html.js",[],function(){
return'<div class="wx_phone_hd">\n    朋友圈</div>\n<div class="wx_phone_bd">\n    {each list as item index}\n    <div class="wx_phone_preview_moments">\n        <img class="moments_user_avatar" src="/mpres/zh_CN/htmledition/comm_htmledition/images/pic/common/pic_avatar_wechat.jpg" alt="">\n        <div class="moments_content_wrp">\n            <p class="moments_nickname">微信团队</p>\n            <div class="moments_content jsPhoneViewCard" data-index="{index}">\n                <img class="moments_appmsg_thumb" src="{item.img||item.avatar}">\n                <div class="moments_appmsg_title" title="{item.title}">{item.title}</div>\n            </div>\n        </div>\n    </div>\n    {/each}\n</div>\n<!--pulgin-->\n<div>\n    <ul class="wx_view_list">\n        <li class="wx_view_item jsPhoneViewLink" data-id="card">会话消息</li>\n        <!--<li class="wx_view_item jsPhoneViewLink" data-id="appmsg">消息正文</li>-->\n        <li class="wx_view_item jsPhoneViewLink selected" data-id="moments">分享到朋友圈</li>\n        <li class="wx_view_item jsPhoneViewLink" data-id="chat">发送给朋友</li>\n    </ul>\n    <div class="btn_wx_phone_preview_wrp">\n        <a class="btn btn_default btn_wx_phone_preview jsPhoneViewPub">发送到手机预览</a>\n    </div>\n</div>\n\n\n';
});define("tpl/media/preview/card.html.js",[],function(){
return'<div class="wx_phone_hd">\n    {nickName}\n</div>\n<div class="wx_phone_bd wx_phone_preview_card_wrp" > \n{if list}\n<div class="msg_card wx_phone_preview_multi_card {if (list[0].img)}has_first_cover{/if}">\n        <div class="card_media">\n            {each list as d i }\n            <div class="{if i!=0}sub_card_media{/if} jsPhoneViewCard" data-index="{i}">\n                {if d.share_page_type==5}\n                <!-- 视频  -->\n                <div class="card_video_wrp">\n                  <div class="card_video">\n                    <div class="card_video_inner">\n                      <div class="weui-desktop-vm_primary card_video_hd">\n                        <strong class="card_video_title" title="{d.title}">{d.title}</strong>\n                        <i class="card_video_length">{d.share_videoinfo[0].duration}</i>\n                      </div>\n                      <div class="weui-desktop-vm_default card_video_bd">\n                        <div class="card_video_thumb" style="background-image:url(\'{d.img}\');">\n                          <i class="card_video_player"></i>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                {else if d.share_page_type==7}\n                <div class="card_audio">\n                  <div class="card_audio_inner">\n                    <div class="weui-desktop-vm_primary card_audio_hd">\n                      <strong class="card_audio_title" title="{d.title}">{d.title}</strong>\n                      <p class="card_audio_length">{d.share_voiceinfo}</p>\n                    </div>\n                    <div class="weui-desktop-vm_default card_audio_bd">\n                      <i class="card_audio_player"></i>\n                    </div>\n                  </div>\n                </div>\n                {else if d.share_page_type==8}\n                <div class="card_img">\n                  <div class="card_img_inner">\n                    <div class="weui-desktop-vm_primary card_img_hd">\n                      <strong class="card_img_title" title="{d.title}">{d.title}</strong>\n                    </div>\n                    <div class="weui-desktop-vm_default card_img_bd">\n                      <i class="card_img_thumb" style="background-image: url(\'{d.img}\');"></i>\n                    </div>\n                  </div>\n                </div>\n                {else}\n                <div class="card_appmsg">\n                  <div class="card_appmsg_inner">\n                    <div class="weui-desktop-vm_primary card_appmsg_hd">\n                      <strong class="card_appmsg_title" title="{d.title}">{d.title}</strong>\n                      <!--\n                      {if (!list[0].img && list[0].digest)}\n                      <div class="msg_card_cover_desc" title="{list[0].digest}">{list[0].digest}</div>\n                      {/if}\n                      -->\n                    </div>\n                    <div class="weui-desktop-vm_default card_appmsg_bd">\n                      {if (d.img)}\n                      <div class="card_appmsg_thumb" style="background-image:url(\'{d.img}\');"></div>\n                      {/if}\n                    </div>\n                  </div>\n                </div>\n                {/if}\n            </div>\n            {/each}\n        </div>\n    </div>\n{else}\n    <div class="msg_card wx_phone_preview_card jsPhoneViewCard" data-index="0">\n        <div class="card_media simple_card_media">\n          <div class="card_appmsg">\n            <div class="card_appmsg_inner">\n              <div class="weui-desktop-vm_primary card_appmsg_hd">\n                <strong class="card_appmsg_title" title="{title}">{title}</strong>\n                <div class="card_appmsg_desc" title="{digest}">{digest}</div>\n              </div>\n              <div class="weui-desktop-vm_default card_appmsg_bd">\n                {if img}\n                <div class="card_appmsg_thumb" style="background-image:url(\'{img}\');"></div>\n                {/if}\n              </div>\n            </div>\n          </div>\n        </div>\n    </div>\n{/if}\n</div>\n<!--pulgin-->\n<div>\n    <ul class="wx_view_list">\n        <li class="wx_view_item jsPhoneViewLink selected" data-id="card">会话消息</li>\n        <!--<li class="wx_view_item jsPhoneViewLink" data-id="appmsg">消息正文</li>-->\n        <li class="wx_view_item jsPhoneViewLink" data-id="moments">分享到朋友圈</li>\n        <li class="wx_view_item jsPhoneViewLink" data-id="chat">发送给朋友</li>\n    </ul>\n    <div class="btn_wx_phone_preview_wrp">\n        <a class="btn btn_default btn_wx_phone_preview jsPhoneViewPub">发送到手机预览</a>\n    </div>\n</div>\n\n\n\n\n\n\n';
});define("tpl/media/preview/appmsg.html.js",[],function(){
return'<div class="wx_phone_hd">\n    <button class="js_back_btn wx_phone_goback_btn">返回</button>\n    {data.nickName}\n</div>\n\n<div class="wx_phone_bd">\n    <div class="wx_phone_preview_appmsg appmsg_wap">\n        <div class="rich_media">\n            <div class="rich_media_area_primary">\n                {if data.is_share_copyright*1==1}\n                    <div class="flex_context account_info">\n                        <div class="flex_hd">\n                            <span class="radius_avatar account_avatar">\n                                <img class="account_avatar" src="{data.avatar}" alt="">\n                            </span>\n                        </div>\n                        <div class="flex_bd">\n                            <div class="account_nickname">\n                                <strong class="account_nickname_inner">{data.nickName}</strong>\n                            </div>\n                            <div class="account_desc">\n                                <div class="account_desc_inner">\n                                    <span>{data.time}</span>\n                                    分享                                </div>\n                            </div>\n                        </div>\n                    </div>\n                {else}\n                    <h2 class="rich_media_title" title="{data.title}">{data.title}</h2>\n                    <div class="rich_media_meta_list">\n                        <!-- <span class="rich_media_meta meta_original_tag dn">原创</span>\n                        <a class="rich_media_meta meta_enterprise_tag" href="javascript:;"><img src="{data.img}"></a> -->\n                        <em class="rich_media_meta rich_media_meta_text">{data.time}</em>\n                        <em class="rich_media_meta rich_media_meta_text">{data.author}</em>\n                        <span class="rich_media_meta rich_media_meta_link" title="请发送到手机查看完整效果">{data.nickName}</span>\n                    </div>\n\n                    {if (data.show_cover==1 && data.img)}\n                        <div class="rich_media_thumb_wrp">\n                            <img src="{data.img}" class="rich_media_thumb" onerror="this.parentNode.removeChild(this)"/>\n                        </div>\n                    {/if}\n                {/if}\n\n                <!-- 转载文章推荐语 -->\n                {if data.is_share_copyright * 1 === 0 && data.copyright_type * 1 === 2 && data.guide_words !== \'\'}\n                    <!-- <div>\n                        <div>{data.nickName}注：</div>\n                        <div>{=data.guide_words.html(true).replace(/\\r/g,"").replace(/\\n/g,"<br>").replace(/\\s/g,"&nbsp;")}</div>\n                    </div> -->\n                {/if}\n\n                <div class="rich_media_content">\n                    {if data.is_share_copyright * 1 == 1}\n                        {=data.guide_words.html(true).replace(/\\r/g,"").replace(/\\n/g,"<br>").replace(/\\s/g,"&nbsp;")}\n                    {else}\n                        {=data.content}\n                    {/if}\n                </div>\n\n                {if data.is_share_copyright * 1 == 1}\n                    <div class="rich_media_origin_preview">\n                        <div class="original_panel" lang="en">\n                            <div class="flex_context original_account">\n                                <div class="flex_hd">\n                                    <span class="radius_avatar original_account_avatar">\n                                        <img class="account_avatar" src="{data.copyright_headimg}" alt="{data.copyright_nickname}">\n                                    </span>\n                                </div>\n                                <div class="flex_bd">\n                                    <div class="original_account_nickname">{data.copyright_nickname}</div>\n                                </div>\n                            </div>\n                            <div class="original_panel_title">\n                                {data.title}\n                                <span class="icon_original_tag_primary">原创</span>\n                            </div>\n                            <div class="original_panel_content">\n                                {=data.content}\n                            </div>\n                            <div class="original_panel_tool">\n                                <a target="_blank" href="{data.share_copyright_url}">阅读全文</a>\n                            </div>\n                        </div>\n                    </div>\n                {/if}\n\n                {if data.is_share_copyright * 1 == 0 && data.copyright_type == 2}\n                    <!-- 转载来源 -->\n                    <div style="padding:0;width:100%;" class="reprint_content_wrap">\n                        <div class="reprint_content_wrap2">\n                            <span class="reprint_content_tips">文章转载自公众号</span>\n                            <div class="reprint_content_author">\n                                <img class="reprint_content_author-image" style="vertical-align: top;" src="{data.copyright_headimg}">\n                                <span style="margin-left:0;" class="reprint_content_author-nickname">{data.copyright_nickname}</span>\n                            </div>\n                        </div>\n                    </div>\n                {/if}\n\n                {if data.ad_info && data.ad_info.ad_id}\n                    <div class="rich_media_mpda">\n                        <div class="mpda_box">\n                            <div class="mpda_desc tips_global"></div>\n                            <div class="mpda_content">\n                                <div class="mpda_wrp">\n                                    <div class="mpda_area show">\n                                        <div class="mpda_placeholder">\n                                            <p class="mpda_tips">广告，也是生活的一部分</p>\n                                        </div>\n                                        <div class="mpda_inner">\n                                            <div class="mpda_hd">\n                                                <span class="mpda_main_img img_bg_cover" id="" style="background-image:url({data.ad_info.ad_img})"></span>\n                                            </div>\n                                            <div class="mpda_bd">\n                                                <span class="mpda_logo img_bg_cover" style="background-image:url({data.ad_info.img})"></span>\n                                                <div class="mpda_desc_box" id="">\n                                                    <p class="mpda_title">{data.ad_info.nick_name}</p>\n                                                    <p class="mpda_details">提供的广告</p>\n                                                </div>\n                                                <a class="mpda_btn_more">\n                                                    {if data.ad_info.pt == 108||data.ad_info.pt==116}\n                                                    查看详情                                                    {else if data.ad_info.pt == 109}\n                                                    下载应用                                                    {else if data.ad_info.pt == 110 || data.ad_info.pt==117}\n                                                    了解公众号                                                    {/if}\n                                                </a>\n                                                <a class="mpda_btn_about" href="javascript:void(0);">关于赞助广告</a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                {/if}\n\n                {if data.sourceurl}\n                    <div class="rich_media_tool">\n                        <a class="media_tool_meta meta_primary" href="{data.sourceurl}" target="_blank">阅读原文</a>\n                    </div>\n                {/if}\n            </div>\n        </div>\n    </div>\n</div>\n<!--wx_phone_bd-->\n<!--pulgin-->\n<div>\n    <ul class="wx_view_list">\n        <li class="wx_view_item jsPhoneViewLink" data-id="card">会话消息</li>\n        <!--<li class="wx_view_item jsPhoneViewLink selected" data-id="appmsg">消息正文</li>-->\n        <li class="wx_view_item jsPhoneViewLink" data-id="moments">分享到朋友圈</li>\n        <li class="wx_view_item jsPhoneViewLink" data-id="chat">发送给朋友</li>\n    </ul>\n\n    {if length > 1}\n        <!--\n        <ul class="wx_article_crtl">\n            <li class="crtl_btn crtl_pre_btn {if (index-1)<0}disabled{/if} jsPhoneViewCard" data-index="{index-1}">上一篇</li>\n            <li class="crtl_btn crtl_next_btn {if (index+1)>=length}disabled{/if} jsPhoneViewCard" data-index="{index+1}">下一篇</li>\n        </ul>\n        -->\n    {/if}\n\n    <div class="btn_wx_phone_preview_wrp">\n        <a class="btn btn_default btn_wx_phone_preview jsPhoneViewPub">发送到手机预览</a>\n    </div>\n</div>\n\n';
});define("tpl/media/preview/img.html.js",[],function(){
return'<div class="wx_phone_hd">\n  <button class="js_back_btn wx_phone_goback_btn">返回</button>\n  {data.nickName}\n</div>\n<div class="wx_phone_bd">\n    <div class="wx_phone_preview_appmsg appmsg_wap page_share_img">\n      <div class="share_mod_context share_global_info">\n        <div class="flex_context account_info">\n          <div class="js_go_profile flex_hd">\n            <span  class="radius_avatar account_avatar">\n              <img class="account_avatar" src="{data.avatar}" alt="">\n            </span>\n          </div>\n          <div class="flex_bd">\n            <div class="js_go_profile account_nickname"><strong class="account_nickname_inner">{data.nickName}</strong></div>\n            <div class="account_desc">\n              <div class="account_desc_inner">\n                <span id="publish_time">{data.time}</span>\n                分享              </div>\n            </div>\n          </div>\n        </div>\n        <p class="share_notice">\n          {=data.guide_words.html(true).replace(/\\r/g,"").replace(/\\n/g,"<br>").replace(/\\s/g,"&nbsp;")}\n        </p>\n        <div class="share_media">\n          {each data.share_imageinfo as d}\n          <img src="{d.cdn_url}" alt="">\n          {/each}\n        </div>\n      </div>\n    </div>\n</div>\n<!--wx_phone_bd-->\n<!--pulgin-->\n<div>\n    <ul class="wx_view_list">\n        <li class="wx_view_item jsPhoneViewLink" data-id="card">会话消息</li>\n        <!--<li class="wx_view_item jsPhoneViewLink selected" data-id="appmsg">消息正文</li>-->\n        <li class="wx_view_item jsPhoneViewLink" data-id="moments">分享到朋友圈</li>\n        <li class="wx_view_item jsPhoneViewLink" data-id="chat">发送给朋友</li>\n    </ul>\n    {if length>1}\n    <!--\n    <ul class="wx_article_crtl">        \n        <li class="crtl_btn crtl_pre_btn {if (index-1)<0}disabled{/if} jsPhoneViewCard" data-index="{index-1}">上一篇</li>        \n        <li class="crtl_btn crtl_next_btn {if (index+1)>=length}disabled{/if} jsPhoneViewCard" data-index="{index+1}">下一篇</li>\n    </ul>\n    -->\n    {/if}\n    <div class="btn_wx_phone_preview_wrp">\n        <a class="btn btn_default btn_wx_phone_preview jsPhoneViewPub">发送到手机预览</a>\n    </div>\n</div>\n\n';
});