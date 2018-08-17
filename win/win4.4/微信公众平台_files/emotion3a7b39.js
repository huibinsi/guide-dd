define("common/wx/media/templateDialog.js",["common/wx/popup.js","common/wx/inputCounter.js","media/common.js","media/template_common.js","common/wx/Tips.js","tpl/media/templateDialog.html.js","tpl/mpEditor/templateDialogLayout.html.js","common/wx/mpEditor/pluginsList.js","common/wx/mpEditor/editor.js"],function(t){
"use strict";
function e(t){
this._o={
token:"",
formatContent:!0,
can_use_txvideo:!1,
show_share_dialog:!1,
can_use_hyperlink:!1,
can_use_appmsg_outer_url:!1,
can_use_vote:!1,
can_use_card:!1,
biz_uin:"",
can_use_voice:!1,
qqmusic_flag:!1,
can_use_weapp_card:!1,
content:"",
onSuccess:function(){}
},this._g={
dom:{}
},this._extend(t),this.initDialog();
}
t("common/wx/popup.js");
var i=t("common/wx/inputCounter.js"),o=t("media/common.js"),n=t("media/template_common.js"),s=t("common/wx/Tips.js"),a=t("tpl/media/templateDialog.html.js"),r=t("tpl/mpEditor/templateDialogLayout.html.js"),l=t("common/wx/mpEditor/pluginsList.js"),c=t("common/wx/mpEditor/editor.js");
return e.prototype={
_extend:function(t){
for(var e in t)this._o[e]=t[e];
},
initDialog:function(){
var t=this,e=this._o,i=this._g,o=i.dom;
document.body.style.overflow=document.documentElement.style.overflow="hidden",o.$dialog=$(wx.T(a,{
token:e.token||""
})).popup({
width:865,
title:"添加图文模版",
autoShow:!0,
className:"align_edge appmsg_tmpl_edit_dialog",
buttons:[{
text:"保存",
type:"primary",
classWrap:"js_save_btn",
click:function(){
var i=this;
t.saveTemplate({
callback:function(){
"function"==typeof e.onSuccess&&e.onSuccess(),t.destory(i);
}
});
}
},{
text:"取消",
type:"default",
classWrap:"js_cancel_btn",
click:function(){
t.destory(this);
}
}],
onHide:function(){
t.destory(this);
}
}),o.$js_editor=o.$dialog.find(".js_editor"),o.$js_title_fail=o.$dialog.find(".js_title_fail"),
o.$js_content_fail=o.$dialog.find(".js_content_fail"),o.$title=o.$dialog.find(".js_title"),
o.$saveBtn=o.$dialog.find(".js_save_btn"),o.$cancelBtn=o.$dialog.find(".js_cancel_btn"),
this.initTitle(),this.createEditor();
},
initTitle:function(){
new i(this._g.dom.$title,{
maxLength:64
});
},
getPostData:function(){
this.hideAllErrMsg();
var t=this._g.dom,e=$(this.editor.getDocument()).find(".js_catchremoteimageerror").length;
if(e)return this.showCatchError(),null;
var i=this._g.dom.$title.val(),n=o.validate({
key:"title",
label:"名称",
content:i,
strict:!0
});
if(n&&n.msg)return t.$js_title_fail.text(n.msg).show(),null;
var s=this.editor.getEditorData();
if(n=o.validate({
key:"templateContent",
content:s.content,
strict:!1,
editor:this.editor
}),n&&n.msg)return 4==n.errType||t.$js_content_fail.text(n.msg).show(),null;
var a={
content:s.content,
title:i
};
return a;
},
saveTemplate:function(t){
var e=this,i=this,a=this._g.dom;
if(!i.submiting){
var r=e.getPostData();
r&&(i.submiting=!0,a.$saveBtn.btn(!1),o.waitAsynAction({
editor:this.editor,
callback:function(){
if(e.checkDialogAlive()){
var o=e.getPostData();
return o?void n.handleTemplate({
action:"create",
postData:o,
onError:function(t){
e.checkDialogAlive()&&(i.submiting=!1,a.$saveBtn.btn(!0),s.err(t));
},
onSuccess:function(){
e.checkDialogAlive()&&(i.submiting=!1,a.$saveBtn.btn(!0),s.suc("保存成功"),t.callback());
}
}):(i.submiting=!1,void a.$saveBtn.btn(!0));
}
}
}));
}
},
checkDialogAlive:function(){
var t=this._g.dom;
return t&&t.$dialog?!0:!1;
},
createEditor:function(){
var t=this,e=this._o,i=this._g.dom,o=l.getTemplateEditorPluginsObject(e),n=t.editor=new c({
needPopup:!1,
imgScale:!1,
canChangeIframeHeight:!1,
scaleimgWheelScroll:!0,
cropimgWheelScroll:!0,
iframeCssUrl:wx.EditorRes.template_iframe,
layout:r,
plugins:o,
autoHeightEnabled:!0,
autoFloatEnabled:!1,
toolbars:[],
focus:!0
});
n.render(i.$js_editor[0]),n.addListener("catchremotesuccess",function(e,i,o,n){
i&&t.updateRemoteImg({
remoteType:"success",
uid:i.uid,
format:n,
img_url:o
}),t.showCatchError();
}),n.addListener("catchremoteerror",function(e,o,n){
o&&t.updateRemoteImg({
remoteType:"error",
uid:o.uid,
img_url:o.defaultRemoteImg
}),n?i.$js_content_fail.text(n).show():t.showCatchError();
}),n.addListener("hideAllErrMsg",function(){
t.hideAllErrMsg();
}),n.addListener("aftersetcontent",function(){
t.showCatchError();
}),n.addListener("keyup",function(){
i.$js_content_fail.hide();
}),n.addListener("before_show_img_replace_dialog",function(){
n.hasDestory||(n.fireEvent("handleWinScroll",!1),i.$saveBtn.hide(),i.$cancelBtn.hide());
}),n.addListener("after_close_show_img_replace_dialog",function(){
n.hasDestory||(n.fireEvent("handleWinScroll",!1),i.$saveBtn.show(),i.$cancelBtn.show());
}),n.ready(function(){
try{
e.formatContent?this.setContent(e.content):this.setContent(e.content,!1,!0);
}catch(t){}
});
},
hideAllErrMsg:function(){
var t=this._g.dom;
t.$js_content_fail.hide(),t.$js_title_fail.hide();
},
showCatchError:function(){
if(this.checkDialogAlive()){
var t=this._g.dom,e=this.editor,i=$(e.getDocument()).find(".js_catchremoteimageerror").length;
0==i?t.$js_content_fail.hide():t.$js_content_fail.text("有%s张图片粘贴失败".sprintf(i)).show();
}
},
updateRemoteImg:function(t){
if(this.checkDialogAlive()){
var e=$(this.editor.getDocument()).find("[data-remoteid="+t.uid+"]");
o.changeRemoteImgUrl({
imgDom:e,
remoteType:t.remoteType,
format:t.format,
img_url:t.img_url,
editor:this.editor
});
}
},
destory:function(t){
t&&t.remove(),this.editor.fireEvent("handleWinScroll",!0),this.editor.destory(),
this.editor=null,this._g.dom=null;
}
},e;
});define("media/template_common.js",["media/common.js","common/wx/Cgi.js","common/wx/time.js","tpl/media/appmsg_tmpl.html.js","common/wx/mpEditor/utils.js","common/wx/mpEditor/pluginsList.js"],function(e){
"use strict";
function t(e,t){
var a=t.canSelect===!1?!1:!0,o=t.canPreview===!1?!1:!0,n=t.showUpdateTime===!1?!1:!0,i=t.showEdit===!1?!1:!0,m=t.showEdit===!0?!0:!1,r=t.token||"";
!r&&window.wx&&window.wx.data&&window.wx.data.t&&(r=window.wx.data.t);
for(var _=0,u=e.length;u>_;_++){
var g=e[_];
g.token=r,g.canSelect=a,g.canPreview=o,g.showUpdateTime=n,g.showEdit=i,g.highLine=m,
g.update_time&&(g.update_time_str=s.timeFormat(g.update_time)),g.title_encode=g.title,
g.title_encode=m?g.title_encode.replace(/<em>/g,"__em_start__").replace(/<\/em>/g,"__em_end__").html(!0).replace(/__em_start__/g,"<em>").replace(/__em_end__/g,"</em>"):g.title_encode.html(!0),
g.content=l.formatTemplateContent({
content:g.content,
appmsgTmplVideoWidth:d
}),g.iframeHtml=function(e,t){
return c.createLocalIframe({
$dom:$(document.body),
onIframeReadyFunc:function(a){
a.doc.body.innerHTML=e[t].content;
}
});
}(e,_),g.contentHtml=template.compile(p)(g);
}
return e;
}
function a(e){
var t="";
t="undefined"!=typeof e.postData.appmsgid?"update":"create",r.post({
url:"/cgi-bin/appmsgtemplate?action="+t,
data:e.postData
},{
done:function(t){
if(t&&t.base_resp&&0==t.base_resp.ret)return void e.onSuccess(t);
var a;
if(t&&t.base_resp){
var o=m.articleRetCode(t);
a=o.errmsg||"系统繁忙，请稍后再试";
}else a="系统繁忙，请稍后再试";
e.onError(a,t||{});
},
fail:function(t){
e.onError("系统繁忙，请稍后再试",t||{});
}
});
}
function o(e){
var t=e.page||0,a=e.perPage||6;
r.post({
url:"/cgi-bin/appmsgtemplate?action=list",
data:{
begin:t*a,
count:a
},
mask:!1
},{
done:function(a){
if(a&&a.base_resp&&0==a.base_resp.ret)e.callback({
code:0,
list:a.appmsg_template||[],
total:1*a.total,
page:t
});else{
var o="";
a&&a.base_resp&&200013==a.base_resp.ret&&(o="操作太频繁，请稍后再试"),e.callback({
code:-1,
msg:o
});
}
},
fail:function(){
e.callback({
code:-1
});
}
});
}
function n(e){
r.post({
url:"/cgi-bin/appmsgtemplate?action=delete",
data:{
appmsgid:e.id
},
mask:!1
},{
done:function(t){
t&&t.base_resp&&0==t.base_resp.ret?e.onSuccess():e.onError({
resp:t||{},
msg:"系统繁忙，请稍后再试"
});
},
fail:function(t){
e.onError({
resp:t||{},
msg:"系统繁忙，请稍后再试"
});
}
});
}
function i(e){
r.post({
url:"/cgi-bin/appmsgtemplate?action=preview",
data:e.postData,
mask:!1
},{
done:function(t){
if(t&&t.base_resp&&0==t.base_resp.ret)e.onSuccess(t);else{
var a=m.articleRetCode(t);
t.word=a.errmsg,t.antispam=a.index,e.onError(t);
}
},
fail:function(){
e.onError({
word:"系统繁忙，请稍后再试"
});
}
});
}
var m=e("media/common.js"),r=e("common/wx/Cgi.js"),s=e("common/wx/time.js"),p=e("tpl/media/appmsg_tmpl.html.js"),c=e("common/wx/mpEditor/utils.js"),l=e("common/wx/mpEditor/pluginsList.js"),d=400,_=20;
return{
formatTemplateData:t,
maxTemplateNum:_,
handleTemplate:a,
getTemplateList:o,
delTemplateList:n,
preview:i
};
});define("common/wx/mpEditor/plugin/cps.js",["common/wx/dialog.js","common/wx/media/cpsDialog.js","common/wx/media/cpsTemplateDialog.js","common/wx/media/cpsUtils.js","common/wx/mpEditor/utils.js","tpl/mpEditor/plugin/cps_template_popup.html.js","common/wx/Tips.js","biz_web/lib/store.js"],function(e){
"use strict";
function t(){
C.mpcpsReg=new RegExp("<mpcps([^>]*?)"+C.className+"([^>]*?)><\\/mpcps>","g"),C.mpcpsRegReplace="<iframe $1"+C.className+"$2></iframe>",
C.iframeReg=new RegExp("<iframe([^>]*?)"+C.className+"([^>]*?)><\\/iframe>","g"),
C.iframeRegReplace="<mpcps $1"+C.className+"$2></mpcps>";
}
function i(e){
return e.find("iframe."+C.className).remove(),e.find("mpcps").remove(),e.find("."+p.appmsgContainerClass).remove(),
e.find("."+p.appmsgLoopClass).remove(),e.find("."+p.appmsgProductErrClass).remove(),
e.find("section").each(function(){
this.firstChild||this.style.cssText||$(this).remove();
}),e;
}
function r(){
if(C.hasTemplateData&&0!=C.updateCpsDataStatus){
for(var e=0,t=C.afterTemplateQueue.length;t>e;e++){
var i=C.afterTemplateQueue[e];
"function"==typeof i&&i();
}
C.afterTemplateQueue=[];
}
}
function a(e){
this._o={
container:null,
redbit:1,
red_dot_flag:0,
can_use_cps:!1,
clearProduct:!1,
tipStatus:{
choiceNoCommissionNeedTip:!1
},
can_use_wxopen_link:!1
},this._g={
highlineCacheIframe:[],
highlineTarget:null,
highlineTimeoutId:null
},this._extend(e),this._o.container&&this._o.can_use_cps&&($(this._o.container).show(),
e.can_show_reddot&&this._o.container.children(".weui-desktop-icon-reddot").css("display","inline-block")),
this.initTemplate(),this.redbit=e.redbit||256,this.editor=null;
}
function n(e,t,i){
for(var r=window.UE.dom.domUtils,a=e,n=!0;a;){
if(r.isBody(a)){
n=!1;
break;
}
var d=r["find"+i+"Sibling"](a,s(t),!1);
if(d&&!r.isBody(d)){
var l=r["find"+i+"Sibling"](a,c(d),!1);
if(l&&l!==d&&!r.isBody(l)){
n=!1;
break;
}
if(d===t){
n=!0;
break;
}
var u="";
if("Next"==i?u="Previous":"Previous"==i&&(u="Next"),o(t,d,u)){
n=!1;
break;
}
n=!0;
break;
}
if(d=r["find"+i+"Sibling"](a,c(),!1),d&&!r.isBody(d)){
n=!1;
break;
}
a=a.parentNode;
}
return n;
}
function o(e,t,i){
for(var r=window.UE.dom.domUtils,a=e,n=!1;a&&a!==t;){
var o=r["find"+i+"Sibling"](a,c(),!1);
if(o&&!r.isBody(o)){
n=!0;
break;
}
a=a.parentNode;
}
return n;
}
function s(e){
var t=window.UE.dom.domUtils,i=e.getAttribute("data-uid");
return function(r){
if(t.isBody(r))return!0;
if(1==r.nodeType){
if(e===r)return!0;
var a=$(r).find("."+C.className+"[data-uid="+i+"]");
return a&&a.length>0?!0:!1;
}
return!1;
};
}
function c(e){
var t=window.UE.dom.domUtils;
return function(i){
if(t.isBody(i))return!0;
if("undefined"!=typeof e&&i===e)return!0;
if(1==i.nodeType){
if("br"==i.nodeName.toLowerCase())return!1;
var r=i.innerText.replace(/[\r\n\s]/g,"").replace(t.fillCharReg,"");
if(i.style.cssText||r.length>0)return!0;
var a=["p","section","span"],n=","+a.join(",")+",",o=i.nodeName.toLowerCase();
if(n.indexOf(","+o+",")>=0){
if(0==i.childElementCount)return!1;
var s=$(i.cloneNode(!0));
s.find("br").remove();
for(var c=[],d=0,l=a.length;l>d;d++){
var u=a[d];
s.find(u).each(function(){
0!=this.childElementCount||this.style.cssText||c.push(this);
});
}
for(var d=0,l=c.length;l>d;d++)$(c[d]).remove();
return 0===s[0].childElementCount?!1:!0;
}
return!0;
}
if(3==i.nodeType){
var r=i.nodeValue.replace(/[\r\n\s]/g,"").replace(t.fillCharReg,"");
return r.length>0?!0:!1;
}
return!1;
};
}
function d(e,t){
for(var i=window.UE.dom.domUtils,r=e;r&&!i.isBody(r);){
var a=i["find"+t+"Sibling"](r,u,!1);
if(a){
r=a;
break;
}
r=r.parentNode;
}
if(r&&!i.isBody(r)&&1==r.nodeType){
if(l(r)===!0)return r;
var n=$(r).find("."+C.className).eq(0)[0];
if(n){
var o;
"Next"==t?o="Previous":"Previous"==t&&(o="Next");
for(var s=n;s&&!i.isBody(s)&&s!==r;){
var a=i["find"+o+"Sibling"](s,u,!1);
if(a){
s=a;
break;
}
s=s.parentNode;
}
return s&&!i.isBody(s)&&s!==r?null:n;
}
}
return null;
}
function l(e){
return e&&1==e.nodeType&&/^iframe$/i.test(e.nodeName)&&(e.className||"").indexOf(C.className)>=0?!0:!1;
}
function u(e){
var t=window.UE.dom.domUtils;
return t.isBody(e)||3==e.nodeType&&0==(e.nodeValue||"").replace(t.fillCharReg,"").length?!1:!0;
}
var m=(e("common/wx/dialog.js"),e("common/wx/media/cpsDialog.js")),f=e("common/wx/media/cpsTemplateDialog.js"),p=e("common/wx/media/cpsUtils.js"),h=e("common/wx/mpEditor/utils.js"),g=e("tpl/mpEditor/plugin/cps_template_popup.html.js"),v=e("common/wx/Tips.js"),y=e("biz_web/lib/store.js"),C={
updateCpsDataStatus:0,
hasTemplateData:!1,
afterTemplateQueue:[],
maxLen:10,
curColor:p.defaultColor,
colorCacheMax:10,
curTemplateId:"",
PopupTplCompile:template.compile(g),
iframeUid:"insert_cps_iframe_ready",
className:"js_editor_cps",
cacheProductKey:"editorCpsInfo_"+window.wx.data.uin,
defaultColorList:["#fa7834","#09BB07","#D54036","#9058CB"],
productStyleText:"width:100% !important;border:0;"
};
return t(),a.afterSetContent=function(e){
var t=[],i=e.$dom,r=e.funcUid;
i.find("mpcps").each(function(){
var e=$(this),i=e.attr("data-uid")||"";
i||(i=h.getuid(),e.attr("data-uid",i)),e.attr("src",h.getIframeSrc(i,r)),t.push(e);
}),h.createAsynRenderIframe(t);
},a.beforeSetContent=function(e){
if(C.updateCpsDataStatus=0,!e.html)return C.updateCpsDataStatus=1,"";
if(-1==e.html.indexOf("<mpcps")&&(C.updateCpsDataStatus=1),e.clearProduct===!0){
var t=$("<div>").html(e.html);
return t=i(t),t.html();
}
if(/<mpcps\s/.test(e.html)){
var a,t=$("<div>").html(e.html),n=[],o=[];
t.find("mpcps").each(function(){
var t,i=$(this);
e.isPreview===!0?(t=h.getuid(),i.attr("data-uid",t)):a=i.attr("data-color");
var r=i.parents("p");
if(r&&r.length>0)for(var s=0,c=r.length;c>s;s++)n.push(r[s]);
var d=p.getDataFromCustomTag(this);
o.push(d);
});
p.updateCpsData({
dataList:o,
onSuccess:function(){
C.updateCpsDataStatus=1,r();
},
onError:function(){
C.updateCpsDataStatus=-1,r();
}
}),a&&p.validColor(a)&&(C.curColor=a);
for(var s=0,c=n.length;c>s;s++){
var d=n[s];
d&&1==d.nodeType&&"p"==d.nodeName.toLowerCase()&&d.parentNode&&$(d).replaceTagName("section");
}
return e.html=t.html(),e.html;
}
return e.html;
},a.prototype={
_extend:function(e){
for(var t in e)this._o[t]=e[t];
},
getName:function(){
return"insertcpsmoviebook";
},
noCommandReprot:function(){
return!0;
},
getExecCommand:function(){
{
var e=this;
this._o;
}
return function(){
var t=e.editor;
if(t){
var i=e.getCurProductCount();
return i>=C.maxLen?void v.err("最多插入%s个商品".sprintf(C.maxLen)):void new m({
maxLen:C.maxLen-i,
editor:t,
tipStatus:e._o.tipStatus||{},
callback:function(t){
t.categoryidList[0]==p.getBookCategoryId()?t.templateId="list":C.curTemplateId&&p.getTemplateDataById(C.curTemplateId)&&(t.templateId=C.curTemplateId),
e.insertHtml(t);
}
});
}
};
},
initTemplate:function(){
C.hasTemplateData!==!0&&p.getTemplate({
callback:function(){
C.hasTemplateData=!0,r();
}
});
},
addListener:function(e){
if(this._o.clearProduct!==!0){
var t=this;
this.domUtils=this.editor.getDomUtils(),this.createIframeReadyFunc(),this.showPopup(e),
e.addListener("beforesavescene",function(e,t){
t&&t.content&&(t.content=t.content.replace(C.iframeReg,C.iframeRegReplace));
}),e.addListener("afterscencerestore",function(){
t.afterSetContent();
}),e.addListener("show_cps_template_dialog",function(e,i,r){
t.showCpsTemplateDialog(r);
}),e.addListener("beforepaste",function(e,i){
var r=$("<div></div>").html(i.html);
r=t.filterData(r),i.html=r.html();
}),e.addListener("common_popup_mouseover",function(e,i,r,a){
if(l(a)){
var n=t._g,o=$(r).find(".js_template")[0];
if(o){
var s=o.getBoundingClientRect();
i.clientX<parseInt(s.left)||i.clientX>parseInt(s.right)||i.clientY<parseInt(s.top)||i.clientY>parseInt(s.bottom)?t.cancelHighline():(n.highlineTimeoutId&&(clearTimeout(n.highlineTimeoutId),
n.highlineTimeoutId=null),(0==n.highlineCacheIframe.length||n.highlineTarget!==a)&&(n.highlineTarget=a,
n.highlineCacheIframe=a,n.highlineCacheIframe=t.getNeighbor(a).iframeList||[],t.highLineIframe(!0)));
}else t.cancelHighline();
}
}),e.addListener("common_popup_mouseout",function(e,i,r,a){
l(a)&&t.cancelHighline();
}),e.addListener("beforekeydown",function(e,i){
if(i=i||window.event,i&&i.type){
var r=i.keyCode||i.which;
if(8==r||46==r){
var a=this.selection.getRange();
if(a.collapsed){
var n;
if(8==r){
if(1==a.startContainer.nodeType)n=a.startContainer.childNodes[a.startOffset-1];else if(3==a.startContainer.nodeType){
var o=a.startContainer.nodeValue.charAt(a.startOffset-1)||"";
o=o.replace(t.domUtils.fillCharReg,""),o&&(n=a.startContainer);
}
n||(n=d(a.startContainer,"Previous"));
}else if(46==r){
if(1==a.startContainer.nodeType)n=a.startContainer.childNodes[a.startOffset];else if(3==a.startContainer.nodeType){
var o=a.startContainer.nodeValue.charAt(a.startOffset)||"";
o=o.replace(t.domUtils.fillCharReg,""),o&&(n=a.startContainer);
}
n||(n=d(a.startContainer,"Next"));
}
if(n&&l(n)===!0)return this.selection.getRange().selectNode(n).select(!0),i.stopPropagation?(i.stopPropagation(),
i.preventDefault()):i.cancelBubble=!0,!1;
}
}
}
});
}
},
cancelHighline:function(){
this._g.highlineTimeoutId&&(clearTimeout(this._g.highlineTimeoutId),this._g.highlineTimeoutId=null);
var e=this;
this._g.highlineTimeoutId=setTimeout(function(){
e.highLineIframe(!1),e._g.highlineTarget=null,e._g.highlineCacheIframe=[];
},100);
},
getContainer:function(){
return this._o.container;
},
getTitle:function(){
return"添加商品";
},
beforeSetContent:function(e,t){
return a.beforeSetContent({
isPreview:t,
html:e,
clearProduct:this._o.clearProduct
});
},
afterSetContent:function(e){
a.afterSetContent({
$dom:e||$(this.editor.getUeditor().body),
funcUid:this.getIframeFuncUid()
});
},
getPluginData:function(e){
var t=e.init(),i=t.get("content");
if(i=i.replace(C.iframeReg,C.iframeRegReplace),this._o.clearProduct===!0){
var r=$("<div>").html(i);
return r=this.filterData(r),i=r.html(),t.set("content",i),t;
}
if(/<mpcps\s/.test(i)){
var r=$("<div>").html(i),a=[];
r.find("mpcps").each(function(){
var e=$(this),t=e.parents("p");
if(t&&t.length>0)for(var i=0,r=t.length;r>i;i++)a.push(t[i]);
e.attr("style",C.productStyleText),e.removeAttr("src"),p.setData2CustomTag(this);
});
for(var n=0,o=a.length;o>n;n++){
var s=a[n];
s&&1==s.nodeType&&"p"==s.nodeName.toLowerCase()&&s.parentNode&&$(s).replaceTagName("section");
}
i=r.html();
}
return t.set("content",i),t;
},
filterData:function(e){
return i(e);
},
getIframeFuncUid:function(){
var e=this.editor.getUeditor().uid;
return C.iframeUid+"_"+e;
},
beforeEditorDestory:function(){
h.clearIframeReadyFunc(this.getIframeFuncUid());
},
highLineIframe:function(e){
var t=this._g.highlineCacheIframe;
if(t){
{
this.initHighlineDom();
}
e?(this.showHighlineDom(),this.attachToHighline(t)):this.hideHighlineDom();
}
},
initHighlineDom:function(){
if(this._g.highlineDom)return this._g.highlineDom;
var e=this.editor.getUeditor(),t=document.createElement("div");
return t.id=e.ui.id+"_product_highline",t.style.cssText="position: absolute;border: 2px solid #43b548;box-sizing: border-box;display:none;z-index:"+e.options.zIndex+";",
e.ui.getDom().appendChild(t),this._g.highlineDom=t,t;
},
showHighlineDom:function(){
this._g.highlineDom.style.display="block";
},
hideHighlineDom:function(){
this._g.highlineDom.style.display="none";
},
attachToHighline:function(e){
if(e&&0!=e.length){
var t=UE.ui.uiUtils,i=this.editor.getUeditor(),r=this.editor.getDomUtils(),a=this._g.highlineDom,n=e[0],o=e[e.length-1],s=r.getXY(n),c=(t.getClientRect(n),
t.getClientRect(o),r.getXY(i.iframe)),d=r.getXY(this._g.highlineDom.parentNode);
r.setStyles(a,{
height:n.getBoundingClientRect().height+8+"px",
top:c.y+s.y-i.document.body.scrollTop-d.y-parseInt(a.style.borderTopWidth)-2+"px",
left:n.getBoundingClientRect().left-7+"px",
right:n.getBoundingClientRect().right+7+"px",
width:n.getBoundingClientRect().width+14+"px"
});
}
},
pickColor:function(e,t,i){
if(p.validColor(t)){
e.find("input").val(t),e.find(".js_fail").hide();
var r=y.get(C.cacheProductKey)||{},a=[];
r.color&&(a=r.color||[]);
var n=a.length>0?","+a.join(",")+",":"",o=","+C.defaultColorList.join(",")+",",s=","+t+",";
return-1!=o.indexOf(s)||n&&-1!=n.indexOf(s)||(a.unshift(t),a.length>C.colorCacheMax&&a.splice(C.colorCacheMax),
r.color=a,y.set(C.cacheProductKey,r)),this.changeProductColor(t,i),!0;
}
return!1;
},
changeProductColor:function(e,t){
var i=p.validColor(e);
if(i){
C.curColor=e;
var r=$(this.editor.getUeditor().body),a=0,n=0,o=[];
r.find("."+C.className).each(function(){
var i=$(this),r=p.getOptionsFromIframe(this);
r.color=e,o.push(i),t&&this===t&&(n=a),a++;
});
var s=[];
if(n>0){
s.push(o[n]);
for(var c=n-1,d=n+1;c>=0||d<o.length;)o[c]&&s.push(o[c]),o[d]&&s.push(o[d]),c--,
d++;
}else s=o;
this.editor.fireEvent("saveScene"),h.createAsynIframeReload(s);
}
},
createIframeReadyFunc:function(){
var e=this.editor.getUeditor().uid;
h.createIframeReadyFunc({
uid:this.getIframeFuncUid(),
force:!0,
notClear:!0,
iframeSelect:!0,
onIframeReadyFunc:function(e,t,i){
return function(r){
var a=function(){
var a=t(r.iframe);
a&&(r.doc.body.innerHTML=a,i(r.iframe,r.doc.body,e));
};
C.hasTemplateData===!0&&0!=C.updateCpsDataStatus?a():C.afterTemplateQueue.push(a);
};
}(e,p.getIframeContentByIframe,p.addIframeImgLoadEvent)
});
},
insertHtml:function(e){
var t=p.getTemplateDataById(e.templateId);
if(t){
t.loop=1;
var i=y.get(C.cacheProductKey)||{};
i.templateId=e.templateId,y.set(C.cacheProductKey,i),C.curTemplateId=e.templateId;
var r=[],a=[],n=[],o=[];
for(r=[].concat(e.productData),a=[].concat(e.productId);r.length>0;)n.push(r.splice(0,t.loop)),
o.push(a.splice(0,t.loop));
e.appid&&(e.appidList=[e.appid]),e.categoryid&&(e.categoryidList=[e.categoryid]);
for(var s=[],c=0,d=n.length;d>c;c++){
var l=["<section>","","</section>"],u=e.templateId;
"banner"==u&&e.categoryidList[c]>2&&(u="card"),"card"==u&&2==e.categoryidList[c]&&(u="banner"),
1==e.categoryidList[c]&&(u="list");
var m=p.cacheIframeData({
type:e.type,
productData:n[c],
templateId:u,
productId:o[c],
packId:e.packId,
smartNum:e.smartNum,
color:e.color||C.curColor,
categoryid:e.categoryidList[c],
appid:e.appidList[c]
});
l[1]=this.createLocalIframe({
datakey:m
}),s.push(l.join(""));
}
s=s.join("").replace(/<iframe /g,"<mpcps ").replace(/<\/iframe>/g,"</mpcps>");
var f=this.editor.execCommand("insertHtml",s),g=[],v=this.getIframeFuncUid();
$(f).find("mpcps").each(function(){
var e=$(this),t=e.attr("data-uid")||"";
t||(t=h.getuid(),e.attr("data-uid",t)),e.attr("src",h.getIframeSrc(t,v)),g.push(e);
}),h.createAsynRenderIframe(g);
}
},
createLocalIframe:function(e){
var t=this.getIframeFuncUid();
return function(t,i,r){
return h.createLocalIframe({
noSrc:!0,
uid:i,
attr:{
" frameborder":"0",
"class":r,
"data-datakey":e.datakey,
style:C.productStyleText
}
});
}(e,t,C.className);
},
getCurProductCount:function(){
var e=$(this.editor.getUeditor().body),t=0;
return e.find("."+C.className).each(function(){
var e=p.getOptionsFromIframe(this),i=($(this),e.type),r=1*e.smartNum,a=e.productId||[];
t+=2==i?r:a.length;
}),t;
},
getNotRenderProductCount:function(){
return $(this.editor.getUeditor().body).find("mpcps").length;
},
showPopup:function(e){
{
var t=this;
e.getUeditor();
}
e.addListener("cancel_common_popup_mouseover_event",function(){}),e.addListener("mouseout",function(e,t){
var i=t.target||t.srcElement;
l(i)===!0&&($(i.contentDocument).find(".js_product_container").removeClass("hover"),
$(i.contentDocument).find(".js_change_cps_tmpl_a").unbind(),$(i.contentDocument).find(".js_del_cps_card_a").unbind());
}),e.addListener("mouseover",function(e,i){
var r=i.target||i.srcElement;
if(l(r)===!0){
$(r.contentDocument).find(".js_product_container").addClass("hover"),$(r.contentDocument).find(".js_change_cps_tmpl_a").click(function(){
t.showCpsTemplateDialog(r);
});
var a=p.getOptionsFromIframe(r)||{};
a.categoryid==p.getBookCategoryId()&&$(r.contentDocument).find(".js_change_cps_tmpl").hide(),
$(r.contentDocument).find(".js_del_cps_card_a").click(function(){
$(r).remove();
});
}
}),e.addListener("mouseover_common_popup",function(e,t,i){
return;
});
},
getProductIframeFromRange:function(e,t){
if(e){
var i=e[t+"Container"];
if(i&&1==i.nodeType){
var r=i.childNodes[e[t+"Offset"]];
if(r&&1==r.nodeType){
if(l(r)===!0)return r;
for(var a,n=r.getElementsByTagName("iframe"),o=0,s=n.length;s>o;o++){
var c=n[o];
if(l(c)===!0){
a=c;
break;
}
}
return a;
}
}
}
},
showCpsTemplateDialog:function(e){
var t=p.getOptionsFromIframe(e);
if(t&&t.templateId){
var i=t.productData;
if(i&&i.length>0){
var r=this,a=(t.type,"card");
i[0].category_id==p.getMovieCategoryId()&&(a="banner"),new f.myclass({
color:C.curColor||"",
templateId:t.templateId,
showType:a,
productData:i[0],
editor:this.editor,
callback:function(t){
var i=r.editor.getDomUtils(),a=r.getNeighbor(e);
if(a&&a.opts&&a.iframeList&&0!=a.iframeList.length){
a.opts.templateId=t.id;
for(var n=this.editor.getUeditor(),o=a.iframeList.length-1;o>=0;o--){
var s=a.iframeList[o];
if(0==o){
var d=n.selection.getRange().selectNode(s).select();
d&&d.collapse(!0);
}
var l=s.parentNode;
if(p.clearIframeProductDataByDom(s),$(s).remove(),l&&!i.isBody(l)){
var u=c()(l);
if(u===!1){
if(0==o){
var d=n.selection.getRange().selectNode(l).select();
d&&d.collapse(!0);
}
$(l).remove();
}
}
}
r.insertHtml(a.opts);
}
}
});
}
}
},
getNeighbor:function(e){
var t=(this.editor.getDomUtils(),{
iframeList:[],
opts:null
});
if(!e)return t;
var i=e.getAttribute("data-uid"),r=$(this.editor.getUeditor().body);
if(e=r.find("."+C.className+"[data-uid="+i+"]"),!i||!e||0==e.length)return t;
if(e=e[0],t.opts=p.getOptionsFromIframe(e,!0),!t.opts)return t;
var a=1*t.opts.type;
if(2===a)return t.iframeList.push(e),t;
var o=0,s=void 0,c=[];
if(r.find("."+C.className).each(function(){
this===e&&(s=o),o++,c.push(this);
}),"undefined"==typeof s)return t;
for(var d=[],l=s-1;l>=0;l--){
var u=p.getOptionsFromIframe(c[l]);
if(1*u.type===2)break;
d.push(c[l]);
}
d.reverse();
for(var m=[],l=s+1,f=c.length;f>l;l++){
var u=p.getOptionsFromIframe(c[l]);
if(1*u.type===2)break;
m.push(c[l]);
}
var d=[],m=[],h=[].concat(d,c[s],m);
s=d.length;
var g={},v={
Previous:{
ratio:-1
},
Next:{
ratio:1
}
};
for(var y in v){
var a=y;
g[a]=[];
for(var _=v[y].ratio,o=s+_,I=h[s],T=h[o];T&&n(I,T,a)===!0;)g[a].push(T),I=T,o+=_,
T=h[o];
}
g.Previous.reverse(),t.iframeList=[].concat(g.Previous,h[s],g.Next),t.opts.productData=this.mergeProduct(t.iframeList);
for(var b=[],l=0,f=t.opts.productData.length;f>l;l++)b.push(t.opts.productData[l].pid);
return t.opts.productId=b,t;
},
mergeProduct:function(e){
for(var t=[],i=0,r=e.length;r>i;i++){
var a=p.getOptionsFromIframe(e[i]);
a&&a.productData&&(t=t.concat(a.productData));
}
return t;
}
},h.initEventInterface(a),a;
});define("common/wx/mpEditor/plugin/insert_product.js",["common/wx/dialog.js","common/wx/media/productDialog.js","common/wx/media/productTemplateDialog.js","common/wx/mpEditor/plugin/productUtils.js","common/wx/mpEditor/utils.js","tpl/mpEditor/plugin/product_popup.html.js","tpl/mpEditor/plugin/product_popup_icon.html.js","common/wx/Tips.js","biz_web/lib/store.js"],function(e){
"use strict";
function t(){
C.mpproductReg=new RegExp("<mpproduct([^>]*?)"+C.className+"([^>]*?)><\\/mpproduct>","g"),
C.mpproductRegReplace="<iframe $1"+C.className+"$2></iframe>",C.iframeReg=new RegExp("<iframe([^>]*?)"+C.className+"([^>]*?)><\\/iframe>","g"),
C.iframeRegReplace="<mpproduct $1"+C.className+"$2></mpproduct>";
var e=y.get(C.cacheProductKey)||{};
e.templateId&&(C.curTemplateId=e.templateId);
}
function r(e){
return e.find("iframe."+C.className).remove(),e.find("mpproduct").remove(),e.find("."+f.appmsgContainerClass).remove(),
e.find("."+f.appmsgLoopClass).remove(),e.find("."+f.appmsgProductErrClass).remove(),
e.find("section").each(function(){
this.firstChild||this.style.cssText||$(this).remove();
}),e;
}
function i(e){
this._o={
container:null,
clearProduct:!1,
can_see_product:!1,
can_use_smart:!1,
can_use_product:!1,
can_use_wxopen_link:!1
},this._g={
highlineCacheIframe:[],
highlineTarget:null,
highlineTimeoutId:null
},this._extend(e),this._o.container&&this._o.can_see_product===!0&&($(this._o.container).show(),
e.can_show_reddot&&this._o.container.children(".weui-desktop-icon-reddot").css("display","inline-block")),
this._o.can_see_product!==!0||this._o.can_use_product!==!0?this._o.clearProduct=!0:this.initTemplate(),
this.redbit=e.redbit||128,this.editor=null;
}
function o(e,t,r){
for(var i=window.UE.dom.domUtils,o=e,c=!0;o;){
if(i.isBody(o)){
c=!1;
break;
}
var d=i["find"+r+"Sibling"](o,a(t),!1);
if(d&&!i.isBody(d)){
var l=i["find"+r+"Sibling"](o,s(d),!1);
if(l&&l!==d&&!i.isBody(l)){
c=!1;
break;
}
if(d===t){
c=!0;
break;
}
var u="";
if("Next"==r?u="Previous":"Previous"==r&&(u="Next"),n(t,d,u)){
c=!1;
break;
}
c=!0;
break;
}
if(d=i["find"+r+"Sibling"](o,s(),!1),d&&!i.isBody(d)){
c=!1;
break;
}
o=o.parentNode;
}
return c;
}
function n(e,t,r){
for(var i=window.UE.dom.domUtils,o=e,n=!1;o&&o!==t;){
var a=i["find"+r+"Sibling"](o,s(),!1);
if(a&&!i.isBody(a)){
n=!0;
break;
}
o=o.parentNode;
}
return n;
}
function a(e){
var t=window.UE.dom.domUtils,r=e.getAttribute("data-uid");
return function(i){
if(t.isBody(i))return!0;
if(1==i.nodeType){
if(e===i)return!0;
var o=$(i).find("."+C.className+"[data-uid="+r+"]");
return o&&o.length>0?!0:!1;
}
return!1;
};
}
function s(e){
var t=window.UE.dom.domUtils;
return function(r){
if(t.isBody(r))return!0;
if("undefined"!=typeof e&&r===e)return!0;
if(1==r.nodeType){
if("br"==r.nodeName.toLowerCase())return!1;
var i=r.innerText.replace(/[\r\n\s]/g,"").replace(t.fillCharReg,"");
if(r.style.cssText||i.length>0)return!0;
var o=["p","section","span"],n=","+o.join(",")+",",a=r.nodeName.toLowerCase();
if(n.indexOf(","+a+",")>=0){
if(0==r.childElementCount)return!1;
var s=$(r.cloneNode(!0));
s.find("br").remove();
for(var c=[],d=0,l=o.length;l>d;d++){
var u=o[d];
s.find(u).each(function(){
0!=this.childElementCount||this.style.cssText||c.push(this);
});
}
for(var d=0,l=c.length;l>d;d++)$(c[d]).remove();
return 0===s[0].childElementCount?!1:!0;
}
return!0;
}
if(3==r.nodeType){
var i=r.nodeValue.replace(/[\r\n\s]/g,"").replace(t.fillCharReg,"");
return i.length>0?!0:!1;
}
return!1;
};
}
function c(e,t){
for(var r=window.UE.dom.domUtils,i=e;i&&!r.isBody(i);){
var o=r["find"+t+"Sibling"](i,l,!1);
if(o){
i=o;
break;
}
i=i.parentNode;
}
if(i&&!r.isBody(i)&&1==i.nodeType){
if(d(i)===!0)return i;
var n=$(i).find("."+C.className).eq(0)[0];
if(n){
var a;
"Next"==t?a="Previous":"Previous"==t&&(a="Next");
for(var s=n;s&&!r.isBody(s)&&s!==i;){
var o=r["find"+a+"Sibling"](s,l,!1);
if(o){
s=o;
break;
}
s=s.parentNode;
}
return s&&!r.isBody(s)&&s!==i?null:n;
}
}
return null;
}
function d(e){
return e&&1==e.nodeType&&/^iframe$/i.test(e.nodeName)&&(e.className||"").indexOf(C.className)>=0?!0:!1;
}
function l(e){
var t=window.UE.dom.domUtils;
return t.isBody(e)||3==e.nodeType&&0==(e.nodeValue||"").replace(t.fillCharReg,"").length?!1:!0;
}
var u=e("common/wx/dialog.js"),p=e("common/wx/media/productDialog.js"),m=e("common/wx/media/productTemplateDialog.js"),f=e("common/wx/mpEditor/plugin/productUtils.js"),h=e("common/wx/mpEditor/utils.js"),g=e("tpl/mpEditor/plugin/product_popup.html.js"),v=e("tpl/mpEditor/plugin/product_popup_icon.html.js"),_=e("common/wx/Tips.js"),y=e("biz_web/lib/store.js"),C={
hasTemplateData:!1,
afterTemplateQueue:[],
maxLen:200,
curColor:f.defaultColor,
colorCacheMax:10,
curTemplateId:"",
PopupTplCompile:template.compile(g),
PopupIconTplCompile:template.compile(v),
iframeUid:"insert_product_iframe_ready",
className:"js_editor_product",
cacheProductKey:"editorProductInfo_"+window.wx.data.uin,
defaultColorList:["#fa7834","#09BB07","#D54036","#9058CB"],
productStyleText:"width:100% !important;border:0;"
};
return t(),i.afterSetContent=function(e){
var t=[],r=e.$dom,i=e.funcUid;
r.find("mpproduct").each(function(){
var e=$(this),r=e.attr("data-uid")||"";
r||(r=h.getuid(),e.attr("data-uid",r)),e.attr("src",h.getIframeSrc(r,i)),t.push(e);
}),h.createAsynRenderIframe(t);
},i.beforeSetContent=function(e){
if(!e.html)return"";
if(e.clearProduct===!0){
var t=$("<div>").html(e.html);
return t=r(t),t.html();
}
if(/<mpproduct\s/.test(e.html)){
var i,t=$("<div>").html(e.html),o=[];
t.find("mpproduct").each(function(){
var t,r=$(this);
e.isPreview===!0?(t=h.getuid(),r.attr("data-uid",t)):i=r.attr("data-color");
var n=r.parents("p");
if(n&&n.length>0)for(var a=0,s=n.length;s>a;a++)o.push(n[a]);
f.getDataFromCustomTag(this);
}),i&&f.validColor(i)&&(C.curColor=i);
for(var n=0,a=o.length;a>n;n++){
var s=o[n];
s&&1==s.nodeType&&"p"==s.nodeName.toLowerCase()&&s.parentNode&&$(s).replaceTagName("section");
}
return e.html=t.html(),e.html;
}
return e.html;
},i.prototype={
_extend:function(e){
for(var t in e)this._o[t]=e[t];
},
getName:function(){
return"insertproduct";
},
noCommandReprot:function(){
return!0;
},
getExecCommand:function(){
{
var e=this;
this._o;
}
return function(){
var t=e.editor;
if(t){
if(e._o.can_use_product!==!0){
var r="未关联开通微信支付的小程序，暂无法使用商品组件能力%s去关联%s",i="";
return i=e._o.can_use_wxopen_link===!0?"<p style='text-align:center'><a href='"+wx.url("/cgi-bin/wxopen?action=list")+"' target='_blank'>":"<p style='text-align:center'><a href='"+wx.url("/cgi-bin/wxopen?action=apply_page")+"' target='_blank'>",
void u.show({
title:"选择商品",
type:"info",
msg:r.sprintf(i,"</a></p>"),
className:"dialog-product-not-support",
buttons:[{
text:"确定",
click:function(){
this.remove();
}
}]
});
}
var o=e.getCurProductCount();
return o>=C.maxLen?void _.err("最多插入%s个商品".sprintf(C.maxLen)):void new p({
can_use_smart:e._o.can_use_smart,
maxLen:C.maxLen-o,
editor:t,
callback:function(t){
C.curTemplateId&&f.getTemplateDataById(C.curTemplateId)&&(t.templateId=C.curTemplateId),
e.insertHtml(t);
}
});
}
};
},
initTemplate:function(){
C.hasTemplateData!==!0&&f.getTemplate({
callback:function(){
C.hasTemplateData=!0;
for(var e=0,t=C.afterTemplateQueue.length;t>e;e++){
var r=C.afterTemplateQueue[e];
"function"==typeof r&&r();
}
C.afterTemplateQueue=[];
}
});
},
addListener:function(e){
if(this._o.clearProduct!==!0){
var t=this;
this.domUtils=this.editor.getDomUtils(),this.createIframeReadyFunc(),this.showPopup(e),
e.addListener("beforesavescene",function(e,t){
t&&t.content&&(t.content=t.content.replace(C.iframeReg,C.iframeRegReplace));
}),e.addListener("afterscencerestore",function(){
t.afterSetContent();
}),e.addListener("show_product_template_dialog",function(e,r,i){
$(r).parents(".js_product_popup").find(".js_color_picker").hide(),t.showProductTemplateDialog(i);
}),e.addListener("beforepaste",function(e,r){
var i=$("<div></div>").html(r.html);
i=t.filterData(i),r.html=i.html();
}),e.addListener("toggle_product_color",function(e,t,r){
t=t||window.event;
var i=$(t.target||t.srcElement);
if(i.hasClass("js_toggle")){
var o=$(r).find(".js_color_picker");
o.is(":hidden")?o.show():o.hide();
}
}),e.addListener("product_color_pick",function(e,r,i,o){
r=r||window.event;
var n=$(r.target||r.srcElement);
if(n.hasClass("js_color_icon")){
var a=n.attr("data-color"),s=n.parents(".js_color_picker"),c=t.pickColor(s,a,o);
c===!0&&this.fireEvent("hide_common_popup");
}
}),e.addListener("product_color_change",function(e,r,i,o){
var n=$(i),a=n.parents(".js_color_picker"),s=a.find("input.js_color_input").val(),c=a.find(".js_fail");
if(s&&f.validColor(s)){
c.hide(),r=r||window.event;
var d=r.keyCode||r.which||0;
if("click"==r.type||"keyup"==r.type&&13==d){
var l=t.pickColor(a,s,o);
l===!0&&this.fireEvent("hide_common_popup");
}
}else s?c.show().find(".js_fail_msg").text("请输入合法颜色值，如#666666"):c.hide();
}),e.addListener("common_popup_mouseover",function(e,r,i,o){
if(d(o)){
var n=t._g,a=$(i).find(".js_template")[0];
if(a){
var s=a.getBoundingClientRect();
r.clientX<parseInt(s.left)||r.clientX>parseInt(s.right)||r.clientY<parseInt(s.top)||r.clientY>parseInt(s.bottom)?t.cancelHighline():(n.highlineTimeoutId&&(clearTimeout(n.highlineTimeoutId),
n.highlineTimeoutId=null),(0==n.highlineCacheIframe.length||n.highlineTarget!==o)&&(n.highlineTarget=o,
n.highlineCacheIframe=t.getNeighbor(o).iframeList||[],t.highLineIframe(!0)));
}else t.cancelHighline();
}
}),e.addListener("common_popup_mouseout",function(e,r,i,o){
d(o)&&t.cancelHighline();
}),e.addListener("beforekeydown",function(e,r){
if(r=r||window.event,r&&r.type){
var i=r.keyCode||r.which;
if(8==i||46==i){
var o=this.selection.getRange();
if(o.collapsed){
var n;
if(8==i){
if(1==o.startContainer.nodeType)n=o.startContainer.childNodes[o.startOffset-1];else if(3==o.startContainer.nodeType){
var a=o.startContainer.nodeValue.charAt(o.startOffset-1)||"";
a=a.replace(t.domUtils.fillCharReg,""),a&&(n=o.startContainer);
}
n||(n=c(o.startContainer,"Previous"));
}else if(46==i){
if(1==o.startContainer.nodeType)n=o.startContainer.childNodes[o.startOffset];else if(3==o.startContainer.nodeType){
var a=o.startContainer.nodeValue.charAt(o.startOffset)||"";
a=a.replace(t.domUtils.fillCharReg,""),a&&(n=o.startContainer);
}
n||(n=c(o.startContainer,"Next"));
}
if(n&&d(n)===!0)return this.selection.getRange().selectNode(n).select(!0),r.stopPropagation?(r.stopPropagation(),
r.preventDefault()):r.cancelBubble=!0,!1;
}
}
}
});
}
},
cancelHighline:function(){
this._g.highlineTimeoutId&&(clearTimeout(this._g.highlineTimeoutId),this._g.highlineTimeoutId=null);
var e=this;
this._g.highlineTimeoutId=setTimeout(function(){
e.highLineIframe(!1),e._g.highlineTarget=null,e._g.highlineCacheIframe=[];
},100);
},
getContainer:function(){
return this._o.container;
},
getTitle:function(){
return"添加商品";
},
beforeSetContent:function(e,t){
return i.beforeSetContent({
isPreview:t,
html:e,
clearProduct:this._o.clearProduct
});
},
afterSetContent:function(e){
i.afterSetContent({
$dom:e||$(this.editor.getUeditor().body),
funcUid:this.getIframeFuncUid()
});
},
getPluginData:function(e){
var t=e.init(),r=t.get("content");
if(r=r.replace(C.iframeReg,C.iframeRegReplace),this._o.clearProduct===!0){
var i=$("<div>").html(r);
return i=this.filterData(i),r=i.html(),t.set("content",r),t;
}
if(/<mpproduct\s/.test(r)){
var i=$("<div>").html(r),o=[];
i.find("mpproduct").each(function(){
var e=$(this),t=e.parents("p");
if(t&&t.length>0)for(var r=0,i=t.length;i>r;r++)o.push(t[r]);
e.attr("style",C.productStyleText),e.removeAttr("src"),f.setData2CustomTag(this);
});
for(var n=0,a=o.length;a>n;n++){
var s=o[n];
s&&1==s.nodeType&&"p"==s.nodeName.toLowerCase()&&s.parentNode&&$(s).replaceTagName("section");
}
r=i.html();
}
return t.set("content",r),t;
},
filterData:function(e){
return r(e);
},
getIframeFuncUid:function(){
var e=this.editor.getUeditor().uid;
return C.iframeUid+"_"+e;
},
beforeEditorDestory:function(){
h.clearIframeReadyFunc(this.getIframeFuncUid());
},
highLineIframe:function(e){
var t=this._g.highlineCacheIframe;
if(t){
{
this.initHighlineDom();
}
e?(this.showHighlineDom(),this.attachToHighline(t)):this.hideHighlineDom();
}
},
initHighlineDom:function(){
if(this._g.highlineDom)return this._g.highlineDom;
var e=this.editor.getUeditor(),t=document.createElement("div");
return t.id=e.ui.id+"_product_highline",t.style.cssText="position: absolute;left: 72px;border: 2px solid #43b548;box-sizing: border-box;right: 72px;display:none;z-index:"+e.options.zIndex+";",
e.ui.getDom().appendChild(t),this._g.highlineDom=t,t;
},
showHighlineDom:function(){
this._g.highlineDom.style.display="block";
},
hideHighlineDom:function(){
this._g.highlineDom.style.display="none";
},
attachToHighline:function(e){
if(e&&0!=e.length){
var t=UE.ui.uiUtils,r=this.editor.getUeditor(),i=this.editor.getDomUtils(),o=this._g.highlineDom,n=e[0],a=e[e.length-1],s=i.getXY(n),c=t.getClientRect(n),d=t.getClientRect(a),l=i.getXY(r.iframe),u=i.getXY(this._g.highlineDom.parentNode);
i.setStyles(o,{
height:d.bottom-c.top+"px",
top:l.y+s.y-r.document.body.scrollTop-u.y-parseInt(o.style.borderTopWidth)+"px"
});
}
},
pickColor:function(e,t,r){
if(f.validColor(t)){
e.find("input").val(t),e.find(".js_fail").hide();
var i=y.get(C.cacheProductKey)||{},o=[];
i.color&&(o=i.color||[]);
var n=o.length>0?","+o.join(",")+",":"",a=","+C.defaultColorList.join(",")+",",s=","+t+",";
return-1!=a.indexOf(s)||n&&-1!=n.indexOf(s)||(o.unshift(t),o.length>C.colorCacheMax&&o.splice(C.colorCacheMax),
i.color=o,y.set(C.cacheProductKey,i)),this.changeProductColor(t,r),!0;
}
return!1;
},
changeProductColor:function(e,t){
var r=f.validColor(e);
if(r){
C.curColor=e;
var i=$(this.editor.getUeditor().body),o=0,n=0,a=[];
i.find("."+C.className).each(function(){
var r=$(this),i=f.getOptionsFromIframe(this);
i.color=e,a.push(r),t&&this===t&&(n=o),o++;
});
var s=[];
if(n>0){
s.push(a[n]);
for(var c=n-1,d=n+1;c>=0||d<a.length;)a[c]&&s.push(a[c]),a[d]&&s.push(a[d]),c--,
d++;
}else s=a;
this.editor.fireEvent("saveScene"),h.createAsynIframeReload(s);
}
},
createIframeReadyFunc:function(){
var e=this.editor.getUeditor().uid;
h.createIframeReadyFunc({
uid:this.getIframeFuncUid(),
force:!0,
notClear:!0,
iframeSelect:!0,
onIframeReadyFunc:function(e,t,r){
return function(i){
var o=function(){
var o=t(i.iframe);
o&&(i.doc.body.innerHTML=o,r(i.iframe,i.doc.body,e));
};
C.hasTemplateData===!0?o():C.afterTemplateQueue.push(o);
};
}(e,f.getIframeContentByIframe,f.addIframeImgLoadEvent)
});
},
insertHtml:function(e){
var t=f.getTemplateDataById(e.templateId);
if(t&&t.loop){
var r=y.get(C.cacheProductKey)||{};
r.templateId=e.templateId,y.set(C.cacheProductKey,r),C.curTemplateId=e.templateId;
var i=[],o=[],n=[],a=[];
if(2==e.type)i=[].concat(e.productData.splice(0,e.smartNum)),n.push(i),a.push(e.productId);else for(i=[].concat(e.productData),
o=[].concat(e.productId);i.length>0;)n.push(i.splice(0,t.loop)),a.push(o.splice(0,t.loop));
for(var s=[],c=0,d=n.length;d>c;c++){
var l=["<section>","","</section>"],u=f.cacheIframeData({
type:e.type,
productData:n[c],
templateId:e.templateId,
productId:a[c],
packId:e.packId,
smartNum:e.smartNum,
color:e.color||C.curColor
});
l[1]=this.createLocalIframe({
datakey:u
}),s.push(l.join(""));
}
s=s.join("").replace(/<iframe /g,"<mpproduct ").replace(/<\/iframe>/g,"</mpproduct>");
var p=this.editor.execCommand("insertHtml",s),m=[],g=this.getIframeFuncUid();
$(p).find("mpproduct").each(function(){
var e=$(this),t=e.attr("data-uid")||"";
t||(t=h.getuid(),e.attr("data-uid",t)),e.attr("src",h.getIframeSrc(t,g)),m.push(e);
}),h.createAsynRenderIframe(m);
}
},
createLocalIframe:function(e){
var t=this.getIframeFuncUid();
return function(t,r,i){
return h.createLocalIframe({
noSrc:!0,
uid:r,
attr:{
" frameborder":"0",
"class":i,
"data-datakey":e.datakey,
style:C.productStyleText
}
});
}(e,t,C.className);
},
getCurProductCount:function(){
var e=$(this.editor.getUeditor().body),t=0;
return e.find("."+C.className).each(function(){
var e=f.getOptionsFromIframe(this),r=($(this),e.type),i=1*e.smartNum,o=e.productId||[];
t+=2==r?i:o.length;
}),t;
},
getNotRenderProductCount:function(){
return $(this.editor.getUeditor().body).find("mpproduct").length;
},
showPopup:function(e){
e.getUeditor();
e.addListener("mouseover_common_popup",function(e,t,r){
var i=r.target||r.srcElement;
if(d(i)===!0){
var o=y.get(C.cacheProductKey)||{};
o=o.color?o.color||[]:[],o=[].concat(o,C.defaultColorList);
var n=C.PopupIconTplCompile({
list:o
});
t.html+=C.PopupTplCompile({
colorList:n
}),t.adjust=!0,t.node=i;
}
});
},
getProductIframeFromRange:function(e,t){
if(e){
var r=e[t+"Container"];
if(r&&1==r.nodeType){
var i=r.childNodes[e[t+"Offset"]];
if(i&&1==i.nodeType){
if(d(i)===!0)return i;
for(var o,n=i.getElementsByTagName("iframe"),a=0,s=n.length;s>a;a++){
var c=n[a];
if(d(c)===!0){
o=c;
break;
}
}
return o;
}
}
}
},
showProductTemplateDialog:function(e){
var t=f.getOptionsFromIframe(e);
if(t&&t.templateId){
var r=t.productData;
if(r&&r.length>0){
{
var i=this;
t.type;
}
new m.myclass({
color:C.curColor||"",
templateId:t.templateId,
productData:r[0],
editor:this.editor,
callback:function(t){
var r=i.editor.getDomUtils(),o=i.getNeighbor(e);
if(delete o.iframeList,o.iframeList=[],o.iframeList.push(e),o&&o.opts&&o.iframeList&&0!=o.iframeList.length){
o.opts.templateId=t.id;
for(var n=this.editor.getUeditor(),a=o.iframeList.length-1;a>=0;a--){
var c=o.iframeList[a];
if(0==a){
var d=n.selection.getRange().selectNode(c).select();
d&&d.collapse(!0);
}
var l=c.parentNode;
if(f.clearIframeProductDataByDom(c),$(c).remove(),l&&!r.isBody(l)){
var u=s()(l);
if(u===!1){
if(0==a){
var d=n.selection.getRange().selectNode(l).select();
d&&d.collapse(!0);
}
$(l).remove();
}
}
}
i.insertHtml(o.opts);
}
}
});
}
}
},
getNeighbor:function(e){
var t=(this.editor.getDomUtils(),{
iframeList:[],
opts:null
});
if(!e)return t;
var r=e.getAttribute("data-uid"),i=$(this.editor.getUeditor().body);
if(e=i.find("."+C.className+"[data-uid="+r+"]"),!r||!e||0==e.length)return t;
if(e=e[0],t.opts=f.getOptionsFromIframe(e,!0),!t.opts)return t;
var n=1*t.opts.type;
if(2===n)return t.iframeList.push(e),t;
var a=0,s=void 0,c=[];
if(i.find("."+C.className).each(function(){
this===e&&(s=a),a++,c.push(this);
}),"undefined"==typeof s)return t;
for(var d=[],l=s-1;l>=0;l--){
var u=f.getOptionsFromIframe(c[l]);
if(1*u.type===2)break;
d.push(c[l]);
}
d.reverse();
for(var p=[],l=s+1,m=c.length;m>l;l++){
var u=f.getOptionsFromIframe(c[l]);
if(1*u.type===2)break;
p.push(c[l]);
}
var h=[].concat(d,c[s],p);
s=d.length;
var g={},v={
Previous:{
ratio:-1
},
Next:{
ratio:1
}
};
for(var _ in v){
var n=_;
g[n]=[];
for(var y=v[_].ratio,a=s+y,I=h[s],T=h[a];T&&o(I,T,n)===!0;)g[n].push(T),I=T,a+=y,
T=h[a];
}
g.Previous.reverse(),t.iframeList=[].concat(g.Previous,h[s],g.Next),t.opts.productData=this.mergeProduct(t.iframeList);
for(var b=[],l=0,m=t.opts.productData.length;m>l;l++)b.push(t.opts.productData[l].pid);
return t.opts.productId=b,t;
},
mergeProduct:function(e){
for(var t=[],r=0,i=e.length;i>r;r++){
var o=f.getOptionsFromIframe(e[r]);
o&&o.productData&&(t=t.concat(o.productData));
}
return t;
}
},h.initEventInterface(i),i;
});define("common/wx/mpEditor/plugin/video.js",["common/wx/popup.js","biz_common/utils/url/parse.js","common/wx/media/videoUtils.js","common/wx/dialog.js","common/wx/Tips.js","common/wx/getVinfo.js","common/wx/media/videoDialog.js","common/wx/Cgi.js","common/wx/mpEditor/plugin/filter.js"],function(t){
"use strict";
function e(t){
var e=27,r=wx.getBanInfo&&wx.getBanInfo(e);
return r&&t&&m.show({
msg:"经用户投诉，你的帐号上传的视频%s，已封禁添加视频能力至%s。".sprintf(r.reason_desc,r.ban_time==r.unlock_time?"永久":i(r.unlock_time)),
buttons:[{
text:"返回",
click:function(){
this.remove();
}
}]
}),r;
}
function i(t){
var e=new Date(1e3*t);
return e.getFullYear()+"年"+(e.getMonth()+1)+"月"+e.getDate()+"日";
}
function r(t){
if(!t)return f.ratio;
for(var e=[4/3,16/9],i=e[0],r=Math.abs(i-t),o=1,n=e.length;n>o;o++){
var a=Math.abs(e[o]-t);
r>a&&(r=a,i=e[o]);
}
return i;
}
function o(t){
var e=arguments[1]||window.location.search,i=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),r=e.substr(e.indexOf("?")+1).match(i);
return null!=r?r[2]:"";
}
function n(t,e){
var i,r=$(t).find("iframe");
return r.each(function(){
var t=$(this),r=t.attr("src")||t.attr("data-src");
return o("vid",r)==e?(i=t,!1):void 0;
}),i;
}
function a(t,e,i){
return t.find("iframe").each(function(){
var t=$(this),n=d(t),a=t.attr("data-src")||t.attr("src")||"",m=t.attr("data-vidtype");
if(1==n)t.remove();else if(2==n)t.remove();else if(3==n){
var v=o("vid",a);
if(v){
var c=this.attributes;
if(c&&c.length>0){
for(var u=[],h=","+f.attrList.join(",")+",",l=0,w=c.length;w>l;l++)-1==h.indexOf(c[l].name)&&u.push(c[l].name);
for(var l=0,w=u.length;w>l;l++)t.removeAttr(u[l]);
}
t.addClass("video_iframe wx_video_iframe"),t.removeAttr("data-src");
var p=e?s.getPreviewPhoneWidth():i,g=1*t.data("ratio");
g=g?r(g):f.ratio;
var _=Math.round(p/g);
e?t.css({
width:p,
height:_
}):t.removeAttr("style"),e===!0?(t.attr("width",p),t.attr("height","auto"),t.attr("src","https://v.qq.com/iframe/preview.html?vid="+v+"&width="+p+"&height=auto&auto=0")):(t.attr("width",p),
t.attr("height",_),t.attr("src","/cgi-bin/readtemplate?t=tmpl/video_tmpl&vid="+v)),
m||t.attr("data-vidtype","-1");
}else t.remove();
}else t.removeClass("video_iframe");
}),t;
}
function d(t){
var e=$(t),i=e.attr("data-src")||e.attr("src")||"";
return i.indexOf("//mp.weixin.qq.com/mp/getcdnvideourl?")>=0?1:/^http(s)*:\/\/z\.weishi\.com\/weixin\/player\.html/.test(i)?2:/http(s)*\:\/\/v\.qq\.com\/iframe\/(preview|player)\.html\?/.test(i)||i.indexOf("/cgi-bin/readtemplate?t=tmpl/video_tmpl")>=0?3:-1;
}
t("common/wx/popup.js");
var s=(t("biz_common/utils/url/parse.js"),t("common/wx/media/videoUtils.js")),m=t("common/wx/dialog.js"),v=t("common/wx/Tips.js"),c=t("common/wx/getVinfo.js"),u=t("common/wx/media/videoDialog.js"),h=(t("common/wx/Cgi.js"),
t("common/wx/mpEditor/plugin/filter.js")),f={
ratio:16/9,
maxLength:3,
attrList:["data-src","class","data-vidtype","allowfullscreen","frameborder","style","height","width","src","data-ratio","data-w","scrolling","data-vh","data-vw"]
},l=(wx.cgiData,function(t){
t&&t.container&&(this.domid=t.container,this.container=$(t.container).show(),t.can_show_reddot&&this.container.children(".weui-desktop-icon-reddot").css("display","inline-block")),
this.redbit=t.redbit||2;
var e=this;
e.report_vid_type=[],e.can_use_txvideo=t.can_use_txvideo,e.show_share_dialog=t.show_share_dialog;
});
return l.beforeSetContent=function(t){
var e=a($("<div></div>").html(t.html),t.isPreview,t.width);
return e.html();
},l.prototype={
getName:function(){
return"insertvideo";
},
noCommandReprot:function(){
return!0;
},
getExecCommand:function(){
var t=this;
return function(){
var i=t.editor,r=this;
if(i){
var o=e(!0);
o||(t.getIframeLen()<f.maxLength?new u({
can_use_txvideo:t.can_use_txvideo,
show_share_dialog:t.show_share_dialog,
scene:"ueditor",
onOK:function(e,o){
return 21==e||(15==e?(o.height=375,o.width=500,o.vid=o.content,o.vidtype=2,o.url="https://v.qq.com/iframe/preview.html?vid="+o.vid+"&width=500&height=375&auto=0",
t.doCommand(r,"insertvideo",o),i.funcPvUvReport("mpvideo")):(0==o.subtype?o.vidtype=1:1==o.subtype?o.vidtype=4:2==o.subtype&&(o.vidtype=5),
t.doCommand(r,"insertvideo",o),i.funcPvUvReport("qqvideo"))),!0;
}
}):v.err("最多添加3个素材库视频，微信小视频（帐号需认证）或腾讯视频"));
}
};
},
doCommand:function(t,e,i){
console.log("insert video");
var r=t;
i=UE.utils.isArray(i)?i:[i];
for(var o,n=[],a=$(this.editor.getDocument().body).width(),d=Math.round(a/f.ratio),m=0,v=i.length;v>m;m++){
o=i[m];
var c="";
o.vidtype&&(c="data-vidtype='"+o.vidtype+"'"),n.push(s.creatInsertStr({
vid:o.vid,
width:a,
height:d,
attr:c,
editFrame:!0
}));
}
r.execCommand("inserthtml",n.join(""),!0);
},
addListener:function(t){
var i=this;
t.addListener("beforepaste",function(t,r){
var o=i.filterInputData($("<div></div>").html(r.html)),n=o.find("iframe.video_iframe").length;
if(o.find(".img_loading[data-vid]").remove(),n){
var a=e(!0);
if(a)return r.html="",!0;
}
return i.getIframeLen()+n>f.maxLength?(v.err("最多添加3个素材库视频，微信小视频（帐号需认证）或腾讯视频"),r.html="",
!0):void(r.html=o.html());
}),t.addListener("afterpaste aftersetcontent afterinserthtml",function(e,i,r){
var n=$(r),a=n.filter("iframe.video_iframe").add(n.find("iframe.video_iframe"));
a.each(function(){
var e=$(this);
if(!e.attr("data-ratio")||!e.attr("data-w")){
var i=e.data("src")||e.attr("src")||"";
if(i){
var r=o("vid",i);
r&&!function(t,e){
e.delegateDomAsyn({
dom:t,
timeout:15e3,
requsetFun:function(){
var t=this;
c.getInfoByVid({
vid:r,
onSuccess:function(e){
t.requsetSucFun(e);
},
onError:function(){
t.requsetFailFun();
}
});
},
requsetSucFun:function(t,e){
if(t&&t.newDom){
var i,r;
e&&e.data&&(i=e.data.width||0,r=e.data.height||0),0!=i&&0!=r&&(t.newDom.attr("data-ratio",i/r),
t.newDom.attr("data-w",i));
}
},
requsetFailFun:function(t){
t&&t.newDom&&t.newDom.removeAttr("data-ratio").removeAttr("data-w");
}
});
}(e,t,r);
}
}
});
});
},
getIframeLen:function(){
var t=this.editor.getDocument();
return $(t).find("iframe.video_iframe").length;
},
getContainer:function(){
return this.domid;
},
getQueryCommandState:function(){
return function(){
var t=this,e=t.selection.getRange().getClosedNode(),i=e&&"edui-faked-video"==e.className;
return i?1:0;
};
},
initPluginData:function(){
return["video_id","vid_type","shortvideofileid"];
},
getPluginData:function(t){
var e=t.init(this.initPluginData());
if(e.get("content")){
var i=this,r=$("<div></div>"),n=[],a=[],d=[];
return r.html(e.get("content")).find("iframe").each(function(){
var t=$(this),e=i.getTypeByDom(t),r=(t.attr("data-shortvideofileid"),t.attr("src")||t.attr("data-src")||""),d=t.attr("data-vidtype");
if(1==e)t.remove();else if(2==e)t.remove();else if(3==e){
var s=o("vid",r);
s&&(t.attr("data-src","https://v.qq.com/iframe/preview.html?vid="+s+"&width=500&height=375&auto=0"),
t.removeAttr("src"),t.addClass("video_iframe"),t.removeClass("wx_video_iframe"),
t.removeAttr("width"),t.removeAttr("height"),t.removeAttr("data-vh"),t.removeAttr("data-vw"),
h.filterStyleAttr(t,["width","height"]),n.push(s),a.push(d||"-1"));
}else t.removeClass("video_iframe");
}),e.set("content",r.html()),e.set("video_id",n.join(",")),e.set("vid_type",a.join(",")),
e.set("shortvideofileid",d.join("|")),e;
}
},
getTypeByDom:function(t){
return d(t);
},
filterInputData:function(t,e){
var i=$(this.editor.getDocument().body).width();
return a(t,e,i);
},
beforeSetContent:function(t,e){
var i=$(this.editor.getDocument().body).width();
return l.beforeSetContent({
html:t,
isPreview:e,
width:i
});
}
},function(){
top.window.__crossFun||(top.window.__crossFun={});
var t=top.window.__crossFun;
t.__videoFrameClick||(t.__videoFrameClick=function(t){
var e=t.event.target||t.event.srcElement;
if(e){
var i=$(e);
if(i.hasClass("js_play_btn")&&!f.previewVideo){
var o,a;
t.win&&t.win.parent&&t.win.parent.document&&(o=n(t.win.parent.document,t.vid)),o&&o.length>0&&(a=o.attr("data-ratio")),
a=r(a),f.previewVideo=!0,s.showVideoPreviewDialog({
vid:t.vid,
radio:a,
onClose:function(){
f.previewVideo=!1,setTimeout(function(){
window.__editorIframeSelect(t.win);
},0);
}
});
}else!!window.__editorIframeSelect&&window.__editorIframeSelect(t.win);
}
});
}(),l;
});define("common/wx/mpEditor/plugin/adv.js",["common/wx/media/adDialog.js","common/wx/Tips.js"],function(e){
"use strict";
var t=e("common/wx/media/adDialog.js"),i=e("common/wx/Tips.js"),a=function(e){
e&&e.container&&(this.domid=e.container,this.container=$(e.container).show(),e.can_show_reddot&&this.container.children(".weui-desktop-icon-reddot").css("display","inline-block")),
this.redbit=e.redbit||32,0==e.has_ad&&this.container&&this.container.length>0&&this.container.addClass("disabled"),
this.can_see_ad=e.can_see_ad||!1,this.redbit=e.redbit||1;
var t=this;
document.addEventListener("EditorCpcEdit",function(){
console.log("触发iframe EditorCpcEdit"),t._editCpc();
}),document.addEventListener("EditorCpcDel",function(){
console.log("触发iframe EditorCpcDel"),t._delCpc();
});
};
return a.beforeSetContent=function(e){
if(!e.html)return"";
var t=e.html.replace(/<mpcpc([^>]*?)js_editor_cpcad([^>]*?)><\/mpcpc>/g,"<iframe $1js_editor_cpcad$2></iframe>"),i=$("<div>"+t+"</div>");
return e.can_see_ad||(i=a.filterData(i)),i.html();
},a.filterData=function(e){
return e.find("mpcpc").remove(),e.find("iframe.js_cpc_area").remove(),e;
},a.prototype={
getName:function(){
return"insertad";
},
getContainer:function(){
return this.domid;
},
noCommandReprot:function(){
return!0;
},
getExecCommand:function(){
var e=this;
return function(){
console.log("insert ad");
var a=e.editor,r=this;
return a?$(a.ueditor.getContent()).find("iframe.js_cpc_area").length>0||"block"==$(".appmsg_edit_ad_preview").css("display")?(i.err("每篇图文消息只可插入一个广告卡片"),
!1):wx.cgiData.has_ad?void new t({
idx:$(".js_appmsg_item.current").data("msgindex"),
onOK:function(t){
e.doCommand(r,t);
}
}):(i.err("暂无可插入的广告卡片"),!1):!1;
};
},
doCommand:function(e,t){
var i=this;
t.ad_id?i._insertSponsor(e,t):0==t.ad_type?this._insertCpcCatsItems(e,t.category_id_list):1==t.ad_type&&this._insertCpcSingleItem(e,t);
},
initPluginData:function(){},
beforeSetContent:function(e){
return a.beforeSetContent({
html:e,
can_see_ad:this.can_see_ad
});
},
addListener:function(e){
var t=this;
e.addListener("beforepaste",function(e,i){
var a=$("<div>"+i.html+"</div>");
a=t._filterData(a),i.html=a.html();
});
},
getPluginData:function(e){
var t=e.init(this.initPluginData()),i=t.get("content");
if(i){
var a=$("<div>"+i+"</div>");
this.can_see_ad||(a=this._filterData(a)),t.set("content",a.html().replace(/<iframe([^>]*?)js_editor_cpcad([^>]*?)><\/iframe>/g,"<mpcpc $1js_editor_cpcad$2></mpcpc>"));
}
},
check:function(e){
if(-1==e.html().indexOf("js_editor_cpcad"))return!0;
var t=e.html().split("js_editor_cpcad")[0]+">",i="<"+e.html().split("js_editor_cpcad")[1];
return t.replace(/<[^>]*>/g,"").replace(/ /g,"").length<300?(this._showErrMsg("文中广告卡片前未满300个字符"),
!1):i.replace(/<[^>]*>/g,"").replace(/ /g,"").length<300?(this._showErrMsg("文中广告卡片后未满300个字符"),
!1):!0;
},
_showErrMsg:function(e){
var t=$(this.editor.getDom()).find(".js_content_error");
this.editor.fireEvent("showErrMsg",t,e),this.editor.fireEvent("scrollIntoView",t,200);
},
_editCpc:function(){
var e=this,i=(e.editor.getDom(),$(this.editor.getDocument()).find("iframe.js_cpc_area").attr("data-category_id_list")||""),a=$(this.editor.getDocument()).find("iframe.js_cpc_area").attr("data-single_category_id")||"",r=$(this.editor.getDocument()).find("iframe.js_cpc_area").attr("data-single_aids")||"";
new t({
idx:$(".js_appmsg_item.current").data("msgindex"),
cpc_edit_data:{
category_id_list:i,
single_category_id:a,
single_aids:r
},
onOK:function(t){
$(e.editor.getDocument()).find("iframe.js_cpc_area").removeAttr("data-category_id_list"),
$(e.editor.getDocument()).find("iframe.js_cpc_area").removeAttr("data-single_category_id"),
$(e.editor.getDocument()).find("iframe.js_cpc_area").removeAttr("data-single_aids");
var i="/cgi-bin/readtemplate?t=tmpl/cpc_tmpl";
if($(e.editor.getDocument()).find("iframe.js_cpc_area").attr("src",i),0==t.ad_type)$(e.editor.getDocument()).find("iframe.js_cpc_area").attr("data-category_id_list",t.category_id_list.join("|"));else{
$(e.editor.getDocument()).find("iframe.js_cpc_area").attr("data-single_category_id",t.single_category_id),
$(e.editor.getDocument()).find("iframe.js_cpc_area").attr("data-single_aids",t.single_aids);
var i="/cgi-bin/readtemplate?t=tmpl/cpc_tmpl&image_url="+encodeURIComponent(t.image_url)+"&aids_length="+t.single_aids_length;
$(e.editor.getDocument()).find("iframe.js_cpc_area").attr("src",i);
}
}
}),console.log("_editCpc");
},
_delCpc:function(){
$(this.editor.getDocument()).find("iframe.js_cpc_area").remove(),console.log("_delCpc");
},
_filterData:function(e){
return a.filterData(e);
},
_insertCpcCatsItems:function(e,t){
var i=e,a="/cgi-bin/readtemplate?t=tmpl/cpc_tmpl",r=t.join("|"),n='<iframe js_editor_cpcad class="js_cpc_area res_iframe cpc_iframe" data-category_id_list="'+r+'" src="'+a+'"></iframe>';
i.execCommand("insertHtml",n);
},
_insertCpcSingleItem:function(e,t){
var i=e,a="/cgi-bin/readtemplate?t=tmpl/cpc_tmpl&image_url="+encodeURIComponent(t.image_url)+"&aids_length="+t.single_aids_length,r='<iframe js_editor_cpcad class="js_cpc_area res_iframe cpc_iframe" data-single_category_id="'+t.single_category_id+'" data-single_aids="'+t.single_aids+'"  src="'+a+'"></iframe>';
i.execCommand("insertHtml",r);
},
_insertSponsor:function(e,t){
var i=e,a=$(".js_ad_preview");
a.html(template.render("js_ad_preview_tpl",t)).parent().show(),a.parent().find(".js_tag").text(0==t.trade_mode?"广告推荐":"内容定制");
var r=new UE.dom.Range(i.document);
r.selectNode(i.body.childNodes[i.body.childNodes.length-1]).select().setCursor(!0,!1);
for(var n=$(i.body),c=n.height()-16,d="",o=0;o<n.children().length;o++)c-=n.children().eq(o).outerHeight(!0);
if(c>=0)for(var o=0;o<Math.floor(c/25);o++)d+="<br/>";
0==t.trade_mode&&i.execCommand("inserthtml","<p>"+d+t.ad_tips+"</p>",!0),i.fireEvent("scrollIntoView",a,$(window).height()-a.height()-72-30);
}
},a;
});define("common/wx/mpEditor/plugin/img.js",["tpl/mpEditor/plugin/img_popup.html.js","common/wx/media/imageDialog.js","common/wx/mpEditor/plugin/remoteimg.js"],function(t){
"use strict";
var e=t("tpl/mpEditor/plugin/img_popup.html.js"),i=t("common/wx/media/imageDialog.js"),a=t("common/wx/mpEditor/plugin/remoteimg.js"),o={
attrWhiteList:",data-remoteid,data-asynid,src,data-src,_src,align,alt,border,class,data-ratio,data-s,data-type,data-w,height,hspace,ismap,opacity,sizes,style,title,type,usemap,vspace,width,data-width,data-height,data-croporisrc,data-cropx1,data-cropx2,data-cropy1,data-cropy2,data-cropselx1,data-cropselx2,data-cropsely1,data-cropsely2,data-backw,data-backh,data-copyright,data-oversubscription-url,data-before-oversubscription-url,"
},r=function(t){
t&&t.container&&(this.domid=t.container,this.container=$(t.container).show(),t.can_show_reddot&&this.container.children(".weui-desktop-icon-reddot").css("display","inline-block")),
this.redbit=t.redbit||1;
};
return r.beforeSetContent=function(t){
var e=t.html.replace(/<img(.*?)\s+data\-src="/g,'<img$1 src="').replace(/http:\/\/mmbiz\.qpic\.cn\//g,"https://mmbiz.qlogo.cn/")||"";
return e;
},r.formatHTML=function(t){
var e="300,640";
if(t=UE.utils.isArray(t)?t:[t],t.length){
var i,a=[],o="";
if(i=t[0],1==t.length){
var r=i.format||"";
"gif"==r&&(i.src+="/mmbizgif");
var n=' data-s="'+e+'" ';
i.src&&/\/mmbizgif$/.test(i.src)&&(i.src=i.src.replace(/\/mmbizgif$/,""),n=" "),
n+=r?' data-type="'+r+'" ':"",o="<img "+n+' src="'+i.src+'"'+("undefined"!=typeof i.copyright_status?' data-copyright="'+i.copyright_status+'"':"")+(i.title&&""!=i.title?' title="'+i.title+'"':"")+(i.border&&"0"!=i.border?' border="'+i.border+'"':"")+(i.alt&&""!=i.alt?' alt="'+i.alt+'"':"")+(i.hspace&&"0"!=i.hspace?' hspace = "'+i.hspace+'"':"")+(i.vspace&&"0"!=i.vspace?' vspace = "'+i.vspace+'"':"")+' style="'+(i.width?"width:"+i.width+"px;":"")+(i.height?" height:"+i.height+"px;":"")+("left"==i.floatStyle||"right"==i.floatStyle?"float:"+i.floatStyle+";":"")+'" />',
o="center"==i.floatStyle?'<p style="text-align: center">'+o+"</p>":"<p>"+o+"</p>",
a.push(o);
}else for(var s=0;i=t[s++];){
"gif"==i.format&&(i.src+="/mmbizgif");
var n=' data-s="'+e+'" ';
i.src&&/\/mmbizgif$/.test(i.src)&&(i.src=i.src.replace(/\/mmbizgif$/,""),n=" "),
n+=i.format?' data-type="'+i.format+'" ':"",o="<p "+("center"==i.floatStyle?'style="text-align: center" ':"")+"><img "+n+' src="'+i.src+'" '+("undefined"!=typeof i.copyright_status?' data-copyright="'+i.copyright_status+'"':"")+(i.title&&""!=i.title?' title="'+i.title+'"':"")+(i.border&&"0"!=i.border?' border="'+i.border+'"':"")+(i.alt&&""!=i.alt?' alt="'+i.alt+'"':"")+(i.hspace&&"0"!=i.hspace?' hspace = "'+i.hspace+'"':"")+(i.vspace&&"0"!=i.vspace?' vspace = "'+i.vspace+'"':"")+' style="'+(i.width?"width:"+i.width+"px;":"")+(i.height?" height:"+i.height+"px;":"")+("left"==i.floatStyle||"right"==i.floatStyle?"float:"+i.floatStyle+";":"")+'" /></p>',
a.push(o);
}
return a;
}
},r.prototype={
getName:function(){
return"insertimage";
},
noCommandReprot:function(){
return!0;
},
getExecCommand:function(){
var t=this;
return function(){
var e=this,a=t.editor;
a&&i({
maxSelect:100,
doselected:!0,
uploadGroupId:3,
completeUploadMinSelectNum:1,
onOK:function(i){
t.doCommand(e,"insertimage",i.map(function(t){
return t.src=t.url,t;
}));
var o=0,r=0;
$.each(i,function(t,e){
"upload"==e.source?o++:r++;
}),o>0&&$.post("/misc/jslog?1=1"+wx.data.param,{
id:39,
val:o,
level:"trace",
content:"[file=media/appmsg_edit]"
}),r>0&&$.post("/misc/jslog?1=1"+wx.data.param,{
id:40,
val:r,
level:"trace",
content:"[file=media/appmsg_edit]"
});
var n=i.length;
n>0&&a.funcPvUvReport("insertimage",n),this.destroy(),document.body.style.overflow=document.documentElement.style.overflow="auto";
},
onHide:function(){
this.destroy(),document.body.style.overflow=document.documentElement.style.overflow="auto";
}
});
};
},
doCommand:function(t,e,i){
if(i){
console.log("insert image");
var a=t,o=r.formatHTML(i);
return a.execCommand("insertHtml",o.join(""));
}
},
getContainer:function(){
return this.domid;
},
getPluginData:function(t){
var e=t.init(),i=e.get("content");
e.set("content",i.replace(/<img(.*?)\s+src="/g,'<img$1 data-src="').replace(/https:\/\/mmbiz\.qlogo\.cn\//g,"http://mmbiz.qpic.cn/"));
},
addListener:function(t){
var e=this,i=t.getUeditor();
t.getBrowser().ie?this._showPopup(t):t.addListener("click",function(e,a){
var o=a.target||a.srcElement;
if(o&&"IMG"==o.tagName&&"false"!=i.body.contentEditable){
var r=new UE.dom.Range(i.document);
r.selectNode(a.target).select(),t.fireEvent("img_selected",a,o);
}
}),t.addListener("get_img_popup_html",function(t,i){
return e._getImgPopupHtml(i);
}),t.addListener("afterpaste",function(t,e,i){
$(i).find(".gif_bg_tips_wrp").each(function(){
$(this).remove();
}),$(i).find(".gif_img_tips_group").each(function(){
$(this).remove();
}),$(i).find(".gif_img_tips").each(function(){
$(this).remove();
}),$(i).find(".load_img_tips").each(function(){
$(this).remove();
}),$(i).find(".load_img_wrp").each(function(){
$(this).remove();
}),$(i).find(".js_img_tips").each(function(){
$(this).remove();
}),$.each(i,function(){
$(this).find("img").each(function(){
var t=$(this).attr("src")||"";
t.indexOf("/s640?")>-1&&t.indexOf("wx_fmt=gif")>-1&&$(this).parent().hasClass("gif_img_wrp")&&$(this).parent().before(this).remove(),
$(this).removeAttr("data-forceheight").removeAttr("data-nopreviewclick");
}),$(this).hasClass("js_img_tips")&&$(this).remove();
});
}),t.addListener("insertMaterialImg",function(t,a){
return e.doCommand(i,"insertimage",a);
}),t.addListener("afterpaste",function(t,i,a){
e.filterLinkImgIcon(a);
}),t.addListener("afterpasteimg aftersetcontent afterinserthtml afterCropImg",function(i,a,o){
var r=$(t.getDocument()).find("body").width(),n=$(o),s=n.filter("img").add(n.find("img"));
s.each(function(){
var i=$(this);
e.filterAttr(i),i.attr("data-ratio")&&i.attr("data-w")||!function(t,e){
var i=new Image,a=t.attr("src");
e.delegateDomAsyn({
dom:t,
timeout:1e4,
requsetFun:function(){
i.onload=this.requsetSucFun,i.onerror=this.requsetFailFun,i.src=a;
},
requsetSucFun:function(t){
if(i){
if(t&&t.newDom){
var e=i.naturalWidth||i.width||0,a=i.naturalHeight||i.height||0;
0!=e&&0!=a&&(t.newDom.attr("data-ratio",a/e),t.newDom.attr("data-w",r==e?"":e));
}
i.onload=null,i.onerror=null,i=null;
}
},
requsetFailFun:function(t){
i&&(t&&t.newDom&&t.newDom.removeAttr("data-ratio").removeAttr("data-w"),i.onload=null,
i.onerror=null,i=null);
}
});
}(i,t),e.handlerH5LinkImg(i[0]);
});
}),t.addListener("handlerH5LinkImg",function(t,i){
e.handlerH5LinkImg(i);
});
},
filterAttr:function(t){
if(t&&0!=t.length)for(var e=t[0].attributes,i=0;i<e.length;i++){
var a=","+e[i].name+",";
-1==o.attrWhiteList.indexOf(a)&&(t.removeAttr(e[i].name),i--);
}
},
filterLinkImgIcon:function(t){
var e=$(t),i=e.filter("span.js_jump_icon").add(e.find("span.js_jump_icon")),a=this.editor.getDomUtils();
i.each(function(){
0==this.getElementsByTagName("img").length&&a.remove(this,!0);
});
},
handlerH5LinkImg:function(t){
function e(t,e){
var i=t.ownerDocument,a=i.defaultView||i.parentWindow,r=a.getComputedStyle(t);
for(var n in o)("position"!=n||"position"==n&&/^(absolute)|(fixed)|(sticky)$/.test(r[n]))&&(e.style[n]=r[n]);
"span"==e.tagName.toLowerCase()&&e.setAttribute("data-positionback",r.position),
t.style.margin="0px",t.style.position="static";
}
function i(t){
var e={};
for(var i in o)e[i]=t.style[i];
return t.getAttribute("data-positionback")&&(e.position=t.getAttribute("data-positionback")),
e;
}
var a=$(t);
if(a&&0!=a.length&&"img"==a[0].tagName.toLowerCase()){
var o={
position:"",
top:"",
left:"",
margin:"",
right:"",
bottom:""
},r=this.editor.getUeditor(),n=this.editor.getDomUtils(),s=a.parents("a"),c=!1;
s.each(function(){
var t=this.getAttribute("href");
return/^http(s)?:\/\//i.test(t)?(c=!0,!1):void 0;
});
var m=null;
if(a.parents("span.js_jump_icon").each(function(){
(1!=this.childElementCount||"img"!=this.firstElementChild.tagName.toLowerCase())&&this.parentNode&&(m||(m=i(this,{})),
n.remove(this,!0));
}),m)for(var l in m)a[0].style[l]=m[l];
var d=!1,p=a.parent();
if(p.length>0&&"span"==p[0].tagName.toLowerCase()&&p.hasClass("js_jump_icon")&&(d=!0),
c){
if(!d){
p=a.parent();
var h=r.document.createElement("span");
h.className="js_jump_icon h5_image_link",e(a[0],h),p[0].insertBefore(h,a[0]),h.appendChild(a[0]);
}
}else if(d){
for(p=a.parent(),e(p[0],a[0]);p[0].firstChild;)p[0].parentNode.insertBefore(p[0].firstChild,p[0]);
a[0].style.position=p[0].getAttribute("data-positionback"),p[0].parentNode.removeChild(p[0]);
}
}
},
beforeSetContent:function(t){
return r.beforeSetContent({
html:t
});
},
_showPopup:function(t){
var e=this,i=t.getUeditor();
t.addListener("handle_common_popup",function(t,a){
var o=i.selection.getRange().getClosedNode(),r=e._getImgPopupHtml(o,a);
r&&(a.html+=r,a.node=o);
});
},
_getImgPopupHtml:function(t,i){
var o=$(t),r="";
if(t&&/^img$/i.test(t.tagName)&&!o.hasClass("js_noimgpopup")&&!this._filterPopup(t)){
var n=!1;
"100%"==t.style.width&&"auto"==t.style.height&&(n=!0);
var s=!0,c=a.defaultRemoteImg.replace("http://","").replace("https://","");
(!a.isLocalDomain(t.src)||t.src.indexOf(c)>0)&&(s=!1),r=wx.T(e,{
hasCropimg:s,
needBreak:i&&i.html?!0:!1,
hasadapt:n
});
}
return r;
},
_filterPopup:function(t){
if(!t)return!1;
var e=t.src||"";
return/^http(s)?:\/\/res\.wx\.qq\.com\/mpres\/htmledition\/images\/icon\/common\/emotion_panel/.test(e)?!0:/http(s)?:\/\/res\.wx\.qq\.com\/mpres\/zh_CN\/htmledition\/comm_htmledition\/images\/pic\/common\/pic_blank\.gif/.test(e)?!0:void 0;
}
},r;
});define("common/wx/mpEditor/plugin/weapp.js",["common/wx/popup.js","biz_web/ui/checkbox.js","common/wx/media/weappDialog.js","tpl/mpEditor/plugin/link_popup.html.js","common/wx/mpEditor/plugin/img.js"],function(a){
"use strict";
function t(a,t){
var i={};
for(var r in t)i[r]=encodeURIComponent(t[r]);
return a.replace(/\{(.+?)\}/g,function(a,t){
return i[t]||t;
});
}
function i(a,t){
var i=t;
for(var r in t)i[r]=(t[r]||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
return a.format(i);
}
function r(a){
var i=$("<div>"+a+"</div>");
return i.find("mp-miniprogram,mp-weapp").replaceWith(function(){
var a=$(this),i=a.attr("data-miniprogram-appid")||a.attr("data-weapp-appid")||"",r=a.attr("data-miniprogram-title")||a.attr("data-weapp-title")||"",e=a.attr("data-miniprogram-imageUrl")||a.attr("data-weapp-imageUrl")||"",n=a.attr("data-miniprogram-nickname")||a.attr("data-weapp-nickname")||"",p=a.attr("data-miniprogram-avatar")||a.attr("data-weapp-avatar")||"",m=a.attr("data-miniprogram-path")||a.attr("data-weapp-path")||"";
return $('<iframe class="res_iframe weapp_app_iframe js_editor_weapp" frameborder="0">').attr("src",t("/cgi-bin/readtemplate?t=tmpl/weapp_tmpl&title={title}&imageUrl={imageUrl}&avatar={avatar}&nickname={nickname}",{
nickname:n,
avatar:p,
title:r,
imageUrl:e
})).attr("data-miniprogram-appid",i).attr("data-miniprogram-path",m).attr("data-miniprogram-nickname",n).attr("data-miniprogram-avatar",p).attr("data-miniprogram-title",r).attr("data-miniprogram-imageUrl",e);
}),i.find("a.weapp_text_link,a.weapp_image_link").each(function(){
$(this).attr("href",""),$(this).attr("_href","");
}),i.find("span.js_weapp_display_element").remove(),i.html();
}
function e(a){
var t=$("<div>"+a+"</div>");
return t.find("iframe.js_editor_weapp").replaceWith(function(){
var a=$(this),t=a.attr("data-miniprogram-appid"),i=a.attr("data-miniprogram-title"),r=a.attr("data-miniprogram-imageUrl"),e=a.attr("data-miniprogram-nickname"),n=a.attr("data-miniprogram-avatar"),p=a.attr("data-miniprogram-path");
return $("<mp-miniprogram>").attr("class","miniprogram_element").attr("data-miniprogram-appid",t).attr("data-miniprogram-path",p).attr("data-miniprogram-nickname",e).attr("data-miniprogram-avatar",n).attr("data-miniprogram-title",i).attr("data-miniprogram-imageUrl",r);
}),t.html();
}
function n(a){
this.__o={
container:""
},this.editor=null,this.__init(a||{}),a&&a.container&&($(a.container).show(),a.can_show_reddot&&$(a.container).children(".weui-desktop-icon-reddot").css("display","inline-block")),
this.redbit=a.redbit||64,this.can_use_weapp_card=a.can_use_weapp_card||!1;
}
a("common/wx/popup.js"),a("biz_web/ui/checkbox.js"),a("common/wx/popup.js");
var p=a("common/wx/media/weappDialog.js"),m=a("tpl/mpEditor/plugin/link_popup.html.js"),o=a("common/wx/mpEditor/plugin/img.js");
return n.beforeSetContent=function(a){
if(!a.html)return"";
var t=r(a.html);
return t;
},n.prototype={
getName:function(){
return"insertweapp";
},
noCommandReprot:function(){
return!0;
},
getExecCommand:function(){
var a=this;
return function(t,i){
var r=a.editor.queryCommandValue("insertweapp"),e={};
if(r){
{
r.getAttribute("data-miniprogram-appid");
}
e={
content:r.innerText,
main_page:r.getAttribute("data-miniprogram-path"),
nick_name:r.getAttribute("data-miniprogram-nickname"),
appid:r.getAttribute("data-miniprogram-appid"),
image:$(r).find("img").attr("src"),
step:i||1
};
}
p.show(e,function(t,r,e){
t&&a.__insert(r,e,4==i);
});
};
},
getContainer:function(){
return this.__o.container;
},
getQueryCommandValue:function(){
var a=this;
return function(){
var t=a.editor;
if(t){
var i,r=t.getSelectionRange(),e=t.getDomUtils();
if(!r.collapsed){
r.shrinkBoundary();
var n=3!=r.startContainer.nodeType&&r.startContainer.childNodes[r.startOffset]?r.startContainer.childNodes[r.startOffset]:r.startContainer,p=3==r.endContainer.nodeType||0==r.endOffset?r.endContainer:r.endContainer.childNodes[r.endOffset-1],m=r.getCommonAncestor();
if(i=e.findParentByTagName(m,"a",!0),!i&&1==m.nodeType)for(var o,d,c,g=m.getElementsByTagName("a"),s=0;c=g[s++];)if(o=e.getPosition(c,n),
d=e.getPosition(c,p),(o&e.POSITION_FOLLOWING||o&e.POSITION_CONTAINS)&&(d&e.POSITION_PRECEDING||d&e.POSITION_CONTAINS)){
i=c;
break;
}
return i;
}
return i=r.startContainer,i=1==i.nodeType?i:i.parentNode,i&&(i=e.findParentByTagName(i,"a",!0))&&!e.isInNodeEndBoundary(r,i)?i:void 0;
}
};
},
addListener:function(a){
a.addListener("beforepaste",function(a,t){
t.html=r(t.html);
}),a.addListener("handle_common_popup",function(t,i){
var r=a.queryCommandValue("insertweapp");
if(r&&-1==(r.href||"").indexOf("javascript:")){
if(!r.getAttribute("data-miniprogram-appid"))return;
var e=r.getAttribute("data-miniprogram-nickname")||"";
e.length>30&&(e=e.substring(0,20)+"..."),i.html+=wx.T(m,{
needBreak:i.html?!0:!1,
url:"javascript:;",
txt:e,
isWeapp:!0
}),i.node=r;
}
});
},
beforeSetContent:function(a){
return n.beforeSetContent({
html:a
});
},
getPluginData:function(a){
var t=a.init(),i=t.get("content");
return i?(i=e(i),t.set("content",i),t):void 0;
},
__init:function(a){
var t=this.__o;
for(var i in a)Object.prototype.hasOwnProperty.call(t,i)&&(t[i]=a[i]);
},
__insert:function(a,r,e){
console.log(a,r);
var n=r.type,p="",m={
appid:a.appid,
nickname:a.nick_name,
avatar:a.pic_url,
title:r.title,
imageUrl:r.imageUrl,
path:r.path,
content:r.content
};
if(m.src=t("/cgi-bin/readtemplate?t=tmpl/weapp_tmpl&title={title}&imageUrl={imageUrl}&avatar={avatar}&nickname={nickname}",m),
"card"==n)p='<p><iframe class="res_iframe weapp_app_iframe js_editor_weapp" frameborder="0" src="{src}" data-miniprogram-appid="{appid}" data-miniprogram-nickname="{nickname}" data-miniprogram-title="{title}" data-miniprogram-imageUrl="{imageUrl}" data-miniprogram-avatar="{avatar}" data-miniprogram-path="{path}"></iframe></p>';else if("text"==n){
var d=this.editor.queryCommandValue("fontsize");
if(p='<a class="weapp_text_link" '+(d?'style="font-size:'+d+';"':"")+' data-miniprogram-appid="{appid}" data-miniprogram-path="{path}" data-miniprogram-nickname="{nickname}" href="">{content}</a>',
e){
var c=this.editor.queryCommandValue("insertweapp");
if(c)return void $(c).replaceWith(function(){
return $(i(p,m));
});
}
}else"image"==n&&(p=o.formatHTML({
src:r.image,
_src:r.image
}).join(""),p=$(p).find("img").get(0).outerHTML,p='<p><a class="weapp_image_link" data-miniprogram-appid="{appid}" data-miniprogram-path="{path}" data-miniprogram-nickname="{nickname}" href="">'+p+"</a></p>");
p=i(p,m);
var g=this.editor,s=g.execCommand("inserthtml",p,!0);
console.log("execCommand",s);
}
},n;
});define("common/wx/mpEditor/plugin/audio_music.js",["common/wx/popup.js","biz_web/ui/checkbox.js","common/wx/media/audioMusicDialog.js","common/wx/Tips.js"],function(i){
"use strict";
function e(i,e){
if(!e){
var t=i.getUeditor();
e=$(t.body);
}
return e.find("iframe.js_editor_audio").length;
}
function t(i){
return i.find("iframe.js_editor_audio").removeAttr("isaac"),i.find("mpvoice").remove(),
i.find(".js_audio_frame").remove(),i.find("qqmusic").addClass("res_iframe qqmusic_iframe js_editor_qqmusic"),
i.find("span.qqmusic_area").remove(),i;
}
function n(i){
this.__o={
container:"",
allowAudio:!1,
allowMusic:!1
},this.redbit=i.redbit||2,this.editor=null,this.__init(i||{}),i&&i.container&&($(i.container).show(),
i.can_show_reddot&&$(i.container).children(".weui-desktop-icon-reddot").css("display","inline-block")),
this.redbit=i.redbit||4;
}
i("common/wx/popup.js"),i("biz_web/ui/checkbox.js");
var o=i("common/wx/media/audioMusicDialog.js"),r=i("common/wx/Tips.js"),a=1;
return n.beforeSetContent=function(i){
if(!i.html)return"";
var e=$("<div>").html(i.html);
return e.find("mpvoice.js_editor_audio").replaceTagName("iframe"),e=t(e),e.find("qqmusic.js_editor_qqmusic").replaceTagName("iframe"),
e.html();
},n.prototype={
getName:function(){
return"insertaudio";
},
noCommandReprot:function(){
return!0;
},
getExecCommand:function(){
var i=this;
return function(){
var t=i.__o.allowAudio,n=i.__o.allowMusic,m=!1;
if(t&&e(i.editor)>=a){
if(!n)return void r.err("每篇图文消息只能添加一个语音");
m=!0;
}
o.show({
allowAudio:t,
allowMusic:n,
audioDisabled:m,
onOK:function(e){
i.__insert(e);
},
onCancel:function(){}
});
};
},
getContainer:function(){
return this.__o.container;
},
addListener:function(i){
var n=this;
i.addListener("beforepaste",function(i,o){
var m=$("<div></div>").html(o.html),s=m.find("iframe.js_editor_audio").length;
return e(n.editor)+s>a?(r.err("每篇图文消息只能添加一个语音"),o.html="",!0):(m=t(m),m.find("qqmusic.js_editor_qqmusic").replaceTagName("iframe"),
void(o.html=m.html()));
});
},
beforeSetContent:function(i){
return n.beforeSetContent({
html:i
});
},
initPluginData:function(){
return["music_id"];
},
getPluginData:function(i){
var e=i.init(this.initPluginData()),n=e.get("content");
if(n){
var o=$("<div></div>").html(n);
o=t(o),o.find("iframe.js_editor_audio").replaceTagName("mpvoice"),o.find("iframe.js_editor_qqmusic").replaceTagName("qqmusic"),
n=o.html(),e.set("content",n),n=e.get("content");
for(var r=/<qqmusic\s(?:[\s\S]*?)musicid=['"]([\d]*?)['"](?:[\s\S]*?)>/g,a=[],m="",s=null;null!=(s=r.exec(n));)s[1]&&-1==m.indexOf(s[1]+",")&&(a.push(s[1]),
m+=s[1]+",");
return e.set("music_id",a.join(",")),e;
}
},
check:function(i){
return i.find("mpvoice").length>a?(r.err("每篇图文消息只能添加一个语音"),!1):!0;
},
__init:function(i){
var e=this.__o;
for(var t in i)Object.prototype.hasOwnProperty.call(e,t)&&(e[t]=i[t]);
},
__insertAudio:function(i){
i.uri_encoded_name=encodeURIComponent(i.name),i.uri_encoded_title=encodeURIComponent(i.title),
i.title_encode=i.title.html(!0),i.src="/cgi-bin/readtemplate?t=tmpl/audio_tmpl&name={uri_encoded_title}&play_length={duration}".format(i);
var e='<p><iframe frameborder="0" class="res_iframe js_editor_audio audio_iframe" src="{src}" isaac2={is_aac} low_size="{low_size}" source_size="{source_size}" high_size="{high_size}" name="{title_encode}" play_length="{play_length}" voice_encode_fileid="{voice_encode_fileid}"></iframe></p>';
e=e.format(i);
var t=this.editor;
t.execCommand("inserthtml",e,!0),t.funcPvUvReport("insertaudio");
},
__insertMusic:function(i){
var e=i.musicid,t=i.mid,n=i.url,o=i.songname,r=i.albumurl,a=i.singername,m=i.play_length,s=(i.commentid||"",
"/cgi-bin/readtemplate?t=tmpl/qqmusic_tmpl&singer="+encodeURIComponent(a)+"&music_name="+encodeURIComponent(o)+"&albumurl="+encodeURIComponent(r)+"&musictype="+encodeURIComponent(i.musictype)),c=['<iframe class="res_iframe qqmusic_iframe js_editor_qqmusic" scrolling="no" frameborder="0"',' musicid="'+e.html(!0)+'"',' mid="'+t.html(!0)+'"',' albumurl="'+r.html(!0)+'"',' audiourl="'+n.html(!0)+'"',' music_name="'+o.html(!0)+'"',' singer="'+a.html(!0)+'"',' play_length="'+m+'"',' src="'+s+'"',' musictype="'+i.musictype+'"',' otherid="'+i.otherid+'"',' albumid="'+i.albumid+'"',' jumpurlkey="'+i.jumpurlkey+'"',"></iframe>"].join(""),u=this.editor;
u.execCommand("inserthtml",c,!0),u.funcPvUvReport("insertmusic");
},
__insert:function(i){
"audio"===i.type?this.__insertAudio(i):this.__insertMusic(i);
}
},n;
});define("common/wx/mpEditor/plugin/unlink.js",[],function(){
"use strict";
function t(){
this.editor=null,this.__g={
name:"unlink",
title:"取消超链接"
};
}
return t.beforeSetContent=function(t){
return t.html;
},t.prototype={
getName:function(){
return this.__g.name;
},
getExecCommand:function(){
var t=this;
return function(){
if(t.editor){
var e,n=t.editor,i=n.getSelectionRange(),r=n.getDomUtils(),o=r.findParentByTagName(i.startContainer,"a",!0);
if(!i.collapsed||o){
var a;
o&&(a=o.getElementsByTagName("img")[0]),e=i.createBookmark(),this.fireEvent("link_optimize",i),
i.removeInlineStyle("a"),a&&this.fireEvent("handlerH5LinkImg",a),i.moveToBookmark(e).select();
}
}
};
},
beforeSetContent:function(e){
return t.beforeSetContent({
html:e
});
},
getType:function(){
return 1;
},
getTitle:function(){
return this.__g.title;
},
getQueryCommandState:function(){
var t=this;
return function(){
var e=t.editor;
return e&&!e.isHighlight()&&e.queryCommandValue("link")?0:-1;
};
},
getContextMenu:function(){
var t=this.__g,e={
label:t.title,
cmdName:t.name
};
return e;
}
},t;
});define("common/wx/mpEditor/plugin/link.js",["common/wx/popup.js","biz_web/ui/checkbox.js","biz_common/jquery.validate.js","common/wx/Cgi.js","tpl/mpEditor/plugin/link_dialog.html.js","tpl/mpEditor/plugin/link_appmsg.html.js","tpl/mpEditor/plugin/link_acc_item.html.js","tpl/mpEditor/plugin/link_popup.html.js","biz_common/moment.js","common/wx/Tips.js","common/wx/popover.js","common/wx/ban.js","common/wx/pagebar.js"],function(e){
"use strict";
function t(e){
this.editor=null,this.__g={
dom:{},
form:{},
canWriteBack:!1,
articlePerPage:5,
accPerPage:5,
can_use_hyperlink:e.can_use_hyperlink,
can_use_appmsg_outer_url:e.can_use_appmsg_outer_url
},i.addMethod("inner_link",function(e){
return/http(s)?:\/\/mp\.weixin\.qq\.com\/(s\?|s\/|mp\/appmsg\/show\?)/.test(e)?!0:!1;
},"请输入公众号文章链接"),i.addMethod("temp_link",function(e){
return/^https?\:\/\/mp\.weixin\.qq\.com\/.*[\?&]tempkey=/.test(e)?!1:!0;
},"不能输入公众号文章的预览链接");
}
e("common/wx/popup.js"),e("biz_web/ui/checkbox.js");
var i=e("biz_common/jquery.validate.js"),a=e("common/wx/Cgi.js"),n=e("tpl/mpEditor/plugin/link_dialog.html.js"),r=e("tpl/mpEditor/plugin/link_appmsg.html.js"),c=e("tpl/mpEditor/plugin/link_acc_item.html.js"),s=e("tpl/mpEditor/plugin/link_popup.html.js"),o=e("biz_common/moment.js"),l=e("common/wx/Tips.js"),_=(e("common/wx/popover.js"),
e("common/wx/ban.js")),d=e("common/wx/pagebar.js"),u={
service_type:{
0:"订阅号",
1:"订阅号",
2:"服务号",
"-1":"服务号"
}
};
return t.beforeSetContent=function(e){
return e.html;
},t.prototype={
getName:function(){
return"link";
},
noCommandReprot:function(){
return!0;
},
getExecCommand:function(){
var e=this;
return function(){
e.editor&&e.__openDialog();
};
},
addListener:function(e){
var t=this;
e.addListener("link_optimize",function(e,i){
t.__optimize(i);
}),e.addListener("handle_common_popup",function(t,i){
var a,n=e.queryCommandValue("link",i.node||null);
if(n&&(a=n.getAttribute("_href")||n.getAttribute("href",2))){
var r=a;
a.length>30&&(r=a.substring(0,20)+"..."),i.html+=wx.T(s,{
needBreak:i.html?!0:!1,
url:a,
txt:r
}),i.node=n;
}
}),e.addListener("keydown",function(t,i){
var a=i.keyCode||i.which;
if(13==a){
var n=this.selection.getRange();
if(n.collapsed){
var r=e.getDomUtils(),c=r.findParentByTagName(n.startContainer,"A");
c&&(n.selectNode(c).collapse().select(),setTimeout(function(){
var e=r.findNextSibling(c,function(e){
return r.isFillChar(e);
});
e&&e.parentNode&&e.parentNode.removeChild(e);
},0));
}
}else if(46==a||8==a){
var r=e.getDomUtils(),n=this.selection.getRange(),c=r.findParentByTagName(n.startContainer,"A",!0);
if(c){
var s=c.innerHTML.text().replace(r.fillCharReg,"");
!s&&(0==c.childElementCount||1==c.childElementCount&&c.firstElementChild.className.indexOf("js_jump_icon")>=0&&0==c.firstElementChild.childElementCount)&&(n.selectNode(c).collapse().select(),
r.remove(c));
}
}
});
},
beforeSetContent:function(e){
return t.beforeSetContent({
html:e
});
},
getType:function(){
return 1;
},
getTitle:function(){
return"超链接";
},
getQueryCommandState:function(){
var e=this;
return function(){
var t=e.editor;
if(!t)return 0;
var i=t.getSelectionRange().getClosedNode(),a=i&&"edui-faked-video"==i.className;
return a?-1:0;
};
},
getQueryCommandValue:function(){
var e=this;
return function(t,i){
var a=e.editor;
if(a){
var n,r,c=a.getDomUtils();
if(i||(n=a.getSelectionRange()),n&&n.collapsed){
if(r=n.startContainer,r=1==r.nodeType?r:r.parentNode,r&&(r=c.findParentByTagName(r,"a",!0))&&!c.isInNodeEndBoundary(n,r))return r;
}else{
if(n){
n.shrinkBoundary();
var s=3!=n.startContainer.nodeType&&n.startContainer.childNodes[n.startOffset]?n.startContainer.childNodes[n.startOffset]:n.startContainer,o=3==n.endContainer.nodeType||0==n.endOffset?n.endContainer:n.endContainer.childNodes[n.endOffset-1],l=n.getCommonAncestor();
if(r=c.findParentByTagName(l,"a",!0),!r&&1==l.nodeType)for(var _,d,u,p=l.getElementsByTagName("a"),h=0;u=p[h++];)if(_=c.getPosition(u,s),
d=c.getPosition(u,o),(_&c.POSITION_FOLLOWING||_&c.POSITION_CONTAINS)&&(d&c.POSITION_PRECEDING||d&c.POSITION_CONTAINS)){
r=u;
break;
}
return r;
}
if(i){
if(r=c.findParentByTagName(i,"a",!0),!r&&1==i.nodeType){
var p=i.getElementsByTagName("a");
if(p&&p[0])return p[0];
}
return r;
}
}
}
};
},
__openDialog:function(){
this.__DialogInit(),this.__initDialogData(),this.__DialogEvent();
},
__DialogEvent:function(){
{
var e=this,t=this.__g,i=t.dom,a=t._linkDialog;
t._perPage;
}
i.$innerMain.find("input[name=link_type][type=radio]").checkbox({
onChanged:function(e){
var t=e.val();
i.$innerMain.find(".js_link_type").hide(),i.$innerMain.find(".js_link_type_"+t).show(),
a.popup("resetPosition");
}
}),t.form=i.$dialogDom.find("#myform").validate({
rules:{
innerLink:{
required:function(){
return i.$innerTabItem.hasClass("selected")&&i.$innerMain.find("input[name=link_type][type=radio][value=1]").prop("checked")?!0:!1;
},
url:!0,
inner_link:!0,
temp_link:!0
},
outerLink:{
required:function(){
return i.$outerTabItem.hasClass("selected")?!0:!1;
},
url:!0
},
outerTitle:{
required:function(){
return i.$outerTabItem.hasClass("selected")?!0:!1;
}
},
innerTitle:{
required:function(){
return i.$innerTabItem.hasClass("selected")?!0:!1;
}
}
},
messages:{
innerLink:{
required:"链接地址不能为空",
url:"请输入公众号文章链接，且必须以http://或https://开头",
inner_link:"请输入公众号文章链接，且必须以http://或https://开头",
temp_link:"不能输入公众号文章的预览链接"
},
outerLink:{
required:"链接地址不能为空",
url:"请输入有效的链接(必须以http://或https://开头)"
},
outerTitle:{
required:"请输入链接标题"
},
innerTitle:{
required:"请输入链接标题"
}
}
}),i.$tabMain.on("click",".js_tab_item",function(){
var e=$(this),a=e.data("tab");
"inner"==a?(i.$innerTabItem.addClass("selected"),i.$outerTabItem.removeClass("selected"),
i.$innerMain.show(),i.$outerMain.hide(),t._linkDialog.popup("resetPosition")):(i.$innerTabItem.removeClass("selected"),
i.$outerTabItem.addClass("selected"),i.$innerMain.hide(),i.$outerMain.show(),t._linkDialog.popup("resetPosition"));
}),i.$jsSelfAcc.click(function(){
e.__selectAcc({
nickname:wx.data.nick_name||wx.data.user_name||"",
fakeid:""
});
}),i.$dialogDom.find(".js_reset_acc").click(function(){
e.__resetAcc();
}),i.$accSearchDel.click(function(){
$(this).hide(),e.__resetAcc();
}),i.$accSearchInput.keyup(function(t){
i.$accSearchInput.val().trim()?i.$accSearchDel.show():(i.$accSearchDel.hide(),e.__resetAcc());
var a=t.keyCode||t.which||0;
13==a&&i.$accSearchBtn.trigger("click");
}),i.$accSearchBtn.click(function(){
var t=i.$accSearchInput.val().trim();
t&&e.__searchAcc(t);
}),i.$articleSearchDel.click(function(){
$(this).hide(),e.__resetArticle();
}),i.$articleSearchInput.keyup(function(t){
i.$articleSearchInput.val().trim()?i.$articleSearchDel.show():(i.$articleSearchDel.hide(),
e.__resetArticle());
var a=t.keyCode||t.which||0;
13==a&&i.$articleSearchBtn.trigger("click");
}),i.$articleSearchBtn.click(function(){
var t=i.$articleSearchInput.val().trim()||"";
e.__searchArticle(t);
}),i.$accList.on("click",".js_acc_item",function(){
var t=$(this),i=t.data("fakeid"),a=t.data("nickname");
e.__selectAcc({
fakeid:i,
nickname:a
});
});
},
__searchAcc:function(e){
var t=this.__g.dom;
t.$accSearchTips.hide(),t.$jsSelfAcc.parent().hide(),this.__getAccList({
searchKey:e,
page:0
});
},
__searchArticle:function(e){
this.__getArticleList({
searchKey:e,
page:0
});
},
__checkAccLoading:function(e){
return this.__g["getting_"+e+"_data"];
},
__showLoading:function(e){
var t=this.__g,i=t.dom;
t["getting_"+e+"_data"]=!0,i["$"+e+"Content"].show(),i["$"+e+"Loading"].show(),i["$"+e+"List"].hide(),
i["$"+e+"Pagebar"].hide();
},
__hideLoading:function(e){
var t=this.__g,i=t.dom;
t["getting_"+e+"_data"]=!1,i["$"+e+"Loading"].hide();
},
__getArticleList:function(e){
var t=this,i=this.__g;
t.__checkAccLoading("article")!==!0&&(t.__showLoading("article"),e.searchKey=e.searchKey||"",
a.get({
url:"/cgi-bin/appmsg",
data:{
action:"list_ex",
begin:e.page*i.articlePerPage,
count:i.articlePerPage,
query:e.searchKey,
fakeid:i.currentFakeid||"",
type:9
},
mask:!1
},{
done:function(a){
if(i._linkDialog)if(t.__hideLoading("article"),a&&a.base_resp&&0==a.base_resp.ret)t.__renderArticleList({
code:0,
list:a.app_msg_list||[],
total:1*a.app_msg_cnt,
page:e.page,
searchKey:e.searchKey
});else{
var n="";
a&&a.base_resp&&200013==a.base_resp.ret&&(n="操作太频繁，请稍后再试"),t.__renderArticleList({
code:-1,
msg:n,
searchKey:e.searchKey
});
}
},
fail:function(){
i._linkDialog&&(t.__hideLoading("article"),t.__renderArticleList({
code:-1,
searchKey:e.searchKey
}));
}
}));
},
__getAccList:function(e){
var t=this,i=this.__g;
e.searchKey&&t.__checkAccLoading("acc")!==!0&&(t.__showLoading("acc"),a.get({
url:"/cgi-bin/searchbiz?action=search_biz",
data:{
query:e.searchKey,
begin:e.page*i.accPerPage,
count:i.accPerPage
},
mask:!1
},{
done:function(a){
if(i._linkDialog)if(t.__hideLoading("acc"),a&&a.base_resp&&0==a.base_resp.ret)t.__renderAccList({
code:0,
list:a.list||[],
total:1*a.total,
page:e.page,
searchKey:e.searchKey
});else{
var n="";
a&&a.base_resp&&200013==a.base_resp.ret&&(n="操作太频繁，请稍后再试"),t.__renderAccList({
code:-1,
msg:n,
searchKey:e.searchKey
});
}
},
fail:function(){
i._linkDialog&&(t.__hideLoading("acc"),t.__renderAccList({
code:-1,
searchKey:e.searchKey
}));
}
}));
},
__renderArticleList:function(e){
var t=this.__g,i=t.dom;
t._linkDialog&&(0==e.code||e.msg?0!=e.code||e.list&&0!=e.list.length||e.msg||(e.msg="暂无搜索结果"):e.msg="系统繁忙，请稍后再试",
t.curArticleList=e.list||[],t.selectedArticle=void 0,t.curArticleList.each(function(e){
e.update_time_str=o.unix(e.update_time).format("YYYY-MM-DD"),e.link=$.trim(e.link.replace("#rd","&scene=21#wechat_redirect")),
e.title=$.trim(e.title||"无标题");
}),i.$articleList.html(template.compile(r)({
list:t.curArticleList,
service_type:u.service_type,
msg:e.msg
})).show(),i.$articleLoading.hide(),t.curArticleList.length>0&&i.$articleList.on("click",".js_article_i",function(){
var e=$(this);
i.$articleList.find(".js_article_label.selected").removeClass("selected").find("input[type=radio]").attr("checked",!1).prop("checked",!1),
e.parents(".js_article_label").addClass("selected").find("input[type=radio]").attr("checked",!0).prop("checked",!0),
t.selectedArticle=e.data("index");
}),0==e.code&&e.total>0&&"undefined"!=typeof e.page?this.__initPageBar({
type:"article",
curPage:e.page+1,
total:e.total,
searchKey:e.searchKey
}):i.$accPagebar.hide(),t._linkDialog.popup("resetPosition"));
},
__renderAccList:function(e){
var t=this.__g,i=t.dom;
t._linkDialog&&(0==e.code||e.msg?0!=e.code||e.list&&0!=e.list.length||e.msg||(e.msg="不存在该公众号"):e.msg="系统繁忙，请稍后再试",
e.msg?(i.$accSearchTips.show().find("span").text(e.msg),i.$accContent.hide()):(i.$accSearchTips.hide(),
i.$accContent.show(),i.$accList.html(template.compile(c)({
list:e.list,
service_type:u.service_type
})).show()),i.$accLoading.hide(),0==e.code&&e.total>0&&"undefined"!=typeof e.page?this.__initPageBar({
type:"acc",
curPage:e.page+1,
total:e.total,
searchKey:e.searchKey
}):i.$accPagebar.hide(),t._linkDialog.popup("resetPosition"));
},
__initPageBar:function(e){
var t=this,i=this.__g,a=i.dom,n=e.type+"_pagebar";
i[n]&&i[n].destroy(),i[n]=new d({
container:a["$"+e.type+"Pagebar"],
perPage:i[e.type+"PerPage"],
initShowPage:e.curPage,
totalItemsNum:Math.min(e.total,2e3),
first:!1,
last:!1,
isSimple:!0,
callback:function(i){
var a=e.type.substr(0,1).toUpperCase()+e.type.substr(1);
t["__get"+a+"List"]({
searchKey:e.searchKey,
page:1*i.currentPage-1
});
}
});
},
__resetArticle:function(){
var e=this.__g.dom;
e.$articleSearchInput.val("");
},
__resetAcc:function(){
var e=this.__g,t=e.dom;
e.currentFakeid="",e.curArticleList=[],e.selectedArticle=void 0,t.$accText.html(""),
t.$accDesc.hide(),t.$accSearchInput.val(""),t.$accSearchTips.hide().find("span").text(""),
t.$accSearchMain.show().parents(".frm_control_group").removeClass("show_value"),
t.$jsSelfAcc.parent().show(),t.$accContent.hide(),t.$articleContent.hide(),e._linkDialog.popup("resetPosition");
},
__selectAcc:function(e){
this.__g.currentFakeid=e.fakeid||"";
var t=this.__g.dom;
t.$accSearchMain.hide().parents(".frm_control_group").addClass("show_value"),t.$jsSelfAcc.parent().hide(),
t.$accContent.hide(),t.$accText.html((e.nickname||"").html(!0)),t.$accDesc.show(),
t.$articleContent.show(),t.$articleList.hide(),t.$articlePagebar.hide(),this.__resetArticle(),
this.__getArticleList({
searchKey:"",
page:0
});
},
__initDialogData:function(){
var e=this.__g,t=e.dom,i=(e._linkDialog,this.editor),a=i.getDomUtils(),n=i.getSelectionRange(),r=n.collapsed?i.queryCommandValue("link"):i.getSelectionStart();
if(e.tempLinkWarn=!0,e.getting_acc_data=!1,e.getting_article_data=!1,r){
a.findParentByTagName(r,"a",!0)&&(r=a.findParentByTagName(r,"a",!0));
var c=r.text||"你已选中了添加链接的文本内容";
t.$outerTitle.val(c).attr("disabled",!0).parent().addClass("disabled"),t.$innerTitle.val(c).attr("disabled",!0).parent().addClass("disabled"),
t.$outerLinkInput.val(r.href||"http://"),t.$innerLinkInput.val(r.href||"http://"),
e.canWriteBack=!1;
}else e.canWriteBack=!0;
if(window.wx&&window.wx.cgiData&&"undefined"!=typeof window.wx.cgiData.func_ban_info&&!_(wx.cgiData.func_ban_info,"outer-url")){
var s,o=18;
$.each(wx.cgiData.func_ban_info,function(e,t){
return t.func_id==o?(s=t,!1):void 0;
});
var l=_.getReason(s.reason_id),d='你的帐号<a target="_blank" href="'+(l.pc_url?l.pc_url:defaultReason.pc_url)+'">'+l.reason_description+"</a>，",u=new Date(1e3*s.unlock_time);
s.ban_time==s.unlock_time?d+="已被永久屏蔽图文消息外链功能。":(d+="已被屏蔽图文消息外链功能至",d+=u.getFullYear()+"/"+(u.getMonth()+1)+"/"+u.getDate(),
d+="，期间图文消息外链功能将不可用。"),t.$outerLinkInput.attr("disabled",!0).parent().addClass("disabled"),
t.$ok.disable(),t.$warnTips.show().find(".js_tips").html(d);
}
e._linkDialog.popup("show");
},
__destroy:function(){
var e=this.__g;
e._linkDialog&&(e._linkDialog.popup("remove"),e._linkDialog=null),this._popover&&(this._popover.remove(),
this._popover=null),e.acc_pagebar&&(e.acc_pagebar.destroy(),e.acc_pagebar=null),
e.article_pagebar&&(e.article_pagebar.destroy(),e.article_pagebar=null),e.dom={},
e.form={},e.currentFakeid="",e.selectedArticle=void 0,e.curArticleList=[];
},
__DialogInit:function(){
var e=this,t=this.__g,i=wx.T(n,{
flag:t.can_use_hyperlink&&0!=t.can_use_appmsg_outer_url
});
t._linkDialog=$(i).popup({
title:"编辑超链接",
className:"align_edge link_dialog_wrap",
width:"800",
autoShow:!1,
buttons:[{
text:"确定",
type:"primary",
click:function(){
t._linkDialog;
if(e.__checkAccLoading("acc")!==!0&&e.__checkAccLoading("article")!==!0){
if(!t.form.form())return void l.err("请完善表单内容");
if(t.dom.$innerTabItem.hasClass("selected")){
var i;
if(t.dom.$innerMain.find("input[name=link_type][type=radio][value=1]").prop("checked"))i={
href:t.dom.$innerLinkInput.val().trim(),
target:"_blank"
},t.canWriteBack&&(i.textValue=t.dom.$innerTitle.val().trim());else{
if(!t.curArticleList||0==t.curArticleList.length)return void l.err("请搜索公众号文章");
if("undefined"==typeof t.selectedArticle||!t.curArticleList[t.selectedArticle])return void l.err("请选择公众号文章");
var a=t.curArticleList[t.selectedArticle];
i={
href:a.link,
target:"_blank"
},t.canWriteBack&&(i.textValue=a.title.replace(/<em>/g,"").replace(/<\/em>/g,""));
}
i&&e.__insertLink(i);
}else t.dom.$outerTabItem.hasClass("selected")&&(i={
href:t.dom.$outerLinkInput.val().trim(),
target:"_blank"
},t.canWriteBack&&(i.textValue=t.dom.$outerTitle.val().trim()),e.__insertLink(i));
e.__destroy();
}
}
},{
text:"取消",
click:function(){
e.__destroy();
}
}],
onHide:function(){
e.__destroy();
}
});
var a=t._linkDialog.popup("get");
t.dom={
$dialogDom:a,
$ok:a.find(".js_btn").eq(0),
$tabMain:a.find(".js_tab_main"),
$innerTabItem:a.find(".js_tab_item[data-tab=inner]"),
$outerTabItem:a.find(".js_tab_item[data-tab=outer]"),
$innerMain:a.find(".js_inner_main"),
$outerMain:a.find(".js_outer_main"),
$accPagebar:a.find(".js_acc_pagebar"),
$articlePagebar:a.find(".js_article_pagebar"),
$accLoading:a.find(".js_acc_loading"),
$articleLoading:a.find(".js_article_loading"),
$articleContent:a.find(".js_article_content"),
$accContent:a.find(".js_acc_content"),
$articleList:a.find(".js_article_list"),
$accList:a.find(".js_acc_list"),
$warnTips:a.find(".js_warn_tips"),
$outerTitle:a.find(".js_outer_title"),
$innerTitle:a.find(".js_inner_title"),
$innerLinkInput:a.find(".js_inner_link_input"),
$outerLinkInput:a.find(".js_outer_link_input"),
$accSearchMain:a.find(".js_acc_search_main"),
$jsSelfAcc:a.find(".js_self_acc"),
$accSearchBtn:a.find(".js_acc_search_btn"),
$accSearchDel:a.find(".js_acc_search_del"),
$accSearchInput:a.find(".js_acc_search_input"),
$accSearchTips:a.find(".js_acc_search_tips"),
$articleSearchBtn:a.find(".js_article_search_btn"),
$articleSearchDel:a.find(".js_article_search_del"),
$articleSearchInput:a.find(".js_article_search_input"),
$accDesc:a.find(".js_acc_desc"),
$accText:a.find(".js_acc_Text")
};
},
__insertLink:function(e){
var t,i=this.editor,a=i.getUtils();
i.fireEvent("funcPvUvReport","link"),e._href&&(e._href=a.unhtml(e._href,/[<">]/g)),
e.href&&(e.href=a.unhtml(e.href,/[<">]/g)),e.textValue&&(e.textValue=a.unhtml(e.textValue,/[<">]/g)),
this.__doLink(t=i.getSelectionRange(),e),t.collapse().select(!0);
},
__optimize:function(e){
var t=this.editor.getDomUtils(),i=e.startContainer,a=e.endContainer;
(i=t.findParentByTagName(i,"a",!0))&&e.setStartBefore(i),(a=t.findParentByTagName(a,"a",!0))&&e.setEndAfter(a);
},
__doLink:function(e,t){
var i=this.editor,a=e.cloneRange(),n=i.getBrowser(),r=i.getDomUtils(),c=i.queryCommandValue("link"),s=i.getUtils();
this.__optimize(e=e.adjustmentBoundary());
var o=e.startContainer;
if(1==o.nodeType&&c&&(o=o.childNodes[e.startOffset],o&&1==o.nodeType&&"A"==o.tagName&&/^(?:https?|ftp|file)\s*:\s*\/\//.test(o[n.ie?"innerText":"textContent"])&&(o[n.ie?"innerText":"textContent"]=s.html(t.textValue||t.href))),
(!a.collapsed||c)&&(e.removeInlineStyle("a"),a=e.cloneRange()),a.collapsed){
var l=e.document.createElement("a"),_="";
t.textValue?(_=s.html(t.textValue),delete t.textValue):_=s.html(t.href),r.setAttributes(l,t),
o=r.findParentByTagName(a.startContainer,"a",!0),o&&r.isInNodeEndBoundary(a,o)&&e.setStartAfter(o).collapse(!0),
l[n.ie?"innerText":"textContent"]=_,e.insertNode(l).selectNode(l);
}else{
e.applyInlineStyle("a",t);
var d=e.startContainer.getElementsByTagName("img");
if(d&&d.length>0)for(var u=0,p=d.length;p>u;u++)i.fireEvent("handlerH5LinkImg",d[u]);
}
}
},t;
});define("common/wx/mpEditor/plugin/emotion.js",["common/wx/mpEditor/plugin/emotionButton.js"],function(t){
"use strict";
function e(){
this.__o={},this.editor=null;
}
var n=(t("common/wx/mpEditor/plugin/emotionButton.js"),{
defaultImg:"https://res.wx.qq.com/mpres/zh_CN/htmledition/comm_htmledition/images/pic/common/pic_blank.gif"
});
return e.beforeSetContent=function(t){
return t.html;
},e.prototype={
getName:function(){
return"mpemotion";
},
noCommandReprot:function(){
return!0;
},
beforeSetContent:function(t){
return e.beforeSetContent({
html:t
});
},
getExecCommand:function(){
var t=this;
return function(e,n){
var o=t.editor;
if(o&&n&&n.name){
var i=o.execCommand("insertHtml",t.formatHtml(n.name)),r=$(i[0]),m=r.css("backgroundImage").match(/url\(([^\)]+)\)/);
if(m&&m[1]){
m=m[1].replace(/^['"]|['"]$/g,"");
var a=6;
/^http(s)?:\/\/.+\.mp.weixin.qq.com(\:\d+)?/.test(m)&&(a=0),m=m.replace(/^http(s)?:\/\/.*\.mp.weixin.qq.com(\:\d+)?/,"https://res.wx.qq.com"),
m=m.split(".");
var c=m[m.length-2];
m[m.length-2]=c.substring(0,c.length-a),r.removeAttr("class").removeAttr("_src").attr({
src:m.join("."),
style:"display:inline-block;width:20px;vertical-align:text-bottom;"
});
}
}
};
},
getType:function(){
return 1;
},
getTitle:function(){
return"表情";
},
formatHtml:function(t){
return'<img class="'+t+'" src="'+n.defaultImg+'" data-ratio="1" data-w="20" style="width:20px;height:20px;vertical-align:middle;display:inline-block;-webkit-background-size:20px auto;background-size:20px auto;" />';
},
initToolBar:function(t){
var e=t.getUi(),n=this.getTitle(),o=this.getName();
e[o]=function(t){
return function(o){
var i=new e.EmotionButton({
useArrow:!1,
title:n,
editor:o,
_onEmotionSelect:function(t){
o.execCommand("mpemotion",t);
}
});
return e.buttons[t]=i,o.addListener("selectionchange",function(){
i.setDisabled(-1==o.queryCommandState(t));
}),i;
};
}(o);
}
},e;
});