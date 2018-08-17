define("common/wx/mpEditor/utils.js",[],function(){
"use strict";
function e(){
return s.uid++;
}
function t(e,t){
return(s.ie&&s.version<9?"":"<!DOCTYPE html>")+"<html xmlns='http://www.w3.org/1999/xhtml' style='overflow:hidden;'><head></head><body></body><script type='text/javascript'  id='_initialScript'>setTimeout(function(){top.window.__templateCardIframeReady(document,'"+e+"','"+(t||"")+"');var _tmpScript = document.getElementById('_initialScript');if(_tmpScript&&_tmpScript.parentNode){_tmpScript.parentNode.removeChild(_tmpScript);}},0)</script></html>";
}
function n(t){
var n=e();
a(t,n);
var i="";
if(t.attr)for(var o in t.attr)t.attr.hasOwnProperty(o)&&(i+=" "+o+'="'+t.attr[o]+'"');
var d="<iframe "+i+' data-uid="'+n+'" src="#src#"></iframe>';
return t.noSrc===!0?d.replace("#src#","about:blank"):d.replace("#src#",r(n,t.uid));
}
function r(e,t){
return"javascript:void(function(){document.domain='qq.com';top.window.__templateCardIframeWrite(document,'"+e+"','"+(t||"")+"');}())";
}
function i(e){
try{
delete s.iframeReadyFunc[e];
}catch(t){}
}
function a(e,t){
function n(e){
return function(t){
var n,r=t.uid,i=e.$dom;
return i||(i=$(t.win.parent.document.body)),i&&i.length>0&&(n=i.find("iframe[data-uid="+r+"]"),
n=n&&n.length>0?n[0]:null),n||(n=$(document.body).find("iframe[data-uid="+r+"]"),
n=n&&n.length>0?n[0]:null),n&&("function"==typeof e.onIframeReadyFunc&&e.onIframeReadyFunc({
doc:t.doc,
win:t.win,
iframe:n
}),e.iframeSelect===!0&&top.window.__editorIframeSelect&&$(t.doc.body).on("click",function(){
var e=this.ownerDocument,t=e?e.defaultView||e.parentWindow:null;
t&&top.window.__editorIframeSelect(t);
})),e;
};
}
e&&(e.uid?s.iframeReadyFunc[e.uid]&&e.force!==!0||(s.iframeReadyFunc[e.uid]=n(e)):t&&(s.iframeReadyFunc[t]=n(e)));
}
function o(e){
e.prototype.bindEventInterface=function(e){
return this.domUtils&&this.editor?("domUtils"==e.type?this.domUtils.on(e.dom,e.eventName,e.fun):"editor"==e.type&&this.editor.addListener(e.eventName,e.fun),
this.__EventInterfaceCache||(this.__EventInterfaceCache=[]),void this.__EventInterfaceCache.push(e)):!1;
},e.prototype.unbindEventInterface=function(){
if(!this.domUtils||!this.editor)return!1;
if(this.__EventInterfaceCache)for(;this.__EventInterfaceCache.length>0;){
var e=this.__EventInterfaceCache[0];
"domUtils"==e.type?this.domUtils.un(e.dom,e.eventName,e.fun):"editor"==e.type&&this.editor.removeListener(e.eventName,e.fun),
this.__EventInterfaceCache.shift();
}
this.__EventInterfaceCache=[];
},e.prototype.unbindSpecifyEvent=function(e){
if(!this.domUtils||!this.editor)return!1;
if(this.__EventInterfaceCache&&e)for(var t=0,n=this.__EventInterfaceCache.length;n>t;t++){
var r=this.__EventInterfaceCache[t];
if(r.type===e.type&&r.eventName===e.eventName&&r.fun===e.fun&&(!e.dom||e.dom&&r.dom===e.dom)){
"domUtils"==r.type?this.domUtils.un(r.dom,r.eventName,r.fun):"editor"==r.type&&this.editor.removeListener(r.eventName,r.fun),
this.__EventInterfaceCache.splice(t,1);
break;
}
}
};
}
function d(e){
if(e&&0!=e.length){
var t=s.asynRenderIframeKey++;
s.asynRenderIframeId[t]=null,f(e,t,function(e){
e.replaceTagName("iframe");
});
}
}
function c(e){
if(e&&0!=e.length){
var t=s.asynRenderIframeKey++;
s.asynRenderIframeId[t]=null,f(e,t,function(e){
e.attr("src",e.attr("src"));
});
}
}
function f(e,t,n){
if(e&&0!=e.length){
var r=function(){
var r=+new Date;
if(e&&e.length>0)if(s.asynRenderIframeId[t]){
var i=r-s.asynRenderIframeId[t];
if(s.asynRenderIframeId[t]=r,120>i){
var a=e.shift(),o=a.parent();
o&&o.length>0?n(a):e=[];
}
}else s.asynRenderIframeId[t]=r;
f(e,t,n);
};
window.requestAnimationFrame(r);
}else try{
delete s.asynRenderIframeId[t];
}catch(i){}
}
function m(e){
for(var t,n=[/^http(s)?:\/\/vpic\.video\.qq\.com([\/?].*)*$/i,/^http(s)?:\/\/shp\.qpic\.cn([\/?].*)*$/i],r=0;t=n[r++];)if(t.test(e))return!0;
return!1;
}
var u=navigator.userAgent.toLowerCase(),s={
uid:+new Date,
iframeReadyFunc:{},
ie:/(msie\s|trident.*rv:)([\w.]+)/.test(u),
version:0,
edge:/edge\/([\w.]+)/i.test(u),
asynRenderIframeKey:+new Date,
asynRenderIframeId:{}
};
return function(e,t){
if(e.ie){
var n=t.match(/(?:msie\s([\w.]+))/),r=t.match(/(?:trident.*rv:([\w.]+))/);
e.version=n&&r&&n[1]&&r[1]?Math.max(1*n[1],1*r[1]):n&&n[1]?1*n[1]:r&&r[1]?1*r[1]:0;
}
}(s,u,window),function(e,t){
"function"!=typeof e.__templateCardIframeWrite&&(e.__templateCardIframeWrite=function(e,n,r){
e.open(),e.domain="qq.com",e.write(t(n,r)),e.close();
});
}(top.window,t),function(e,t){
"function"!=typeof e.__templateCardIframeReady&&(e.__templateCardIframeReady=function(e,n,r){
var i,a;
if(a=r?t[r]:t[n],"function"==typeof a&&e){
var o=e.defaultView||e.parentWindow;
o&&(i=a({
uid:n,
customerUid:r,
doc:e,
win:o
}));
}
if(!i||i.notClear!==!0)try{
delete t[n];
}catch(d){}
});
}(top.window,s.iframeReadyFunc),{
getuid:e,
getIframeSrc:r,
createIframeReadyFunc:a,
createLocalIframe:n,
clearIframeReadyFunc:i,
initEventInterface:o,
createAsynRenderIframe:d,
createAsynIframeReload:c,
isOuterWhiteDomain:m
};
});define("common/wx/mpEditor/plugin/productUtils.js",["tpl/media/product_iframe_smart_tips.html.js","tpl/media/product_highline_style.html.js","common/wx/Cgi.js"],function(t){
"use strict";
function a(){
return++v.datakeyUid+"_"+Math.random();
}
function e(t){
return t=(t||"").toLowerCase(),/^#[0-9a-f]{6}$/.test(t)?!0:!1;
}
function r(t){
if(!t)return"";
var a=o(t),e="";
if(a&&a.templateId){
var r=a.productData;
if(r&&r.length>0)if(2==a.type){
var l=i(a.templateId);
if(l){
var n=[];
for(r=[].concat(a.productData);r.length>0;)n.push(r.splice(0,l.loop));
for(var p=0,d=n.length;d>p;p++){
var c="";
c=v.smartTipsCompile({
smart_num:a.smartNum
}),e+=c,e+=u(n[p],a.templateId,a.color);
}
}
}else e=u(r,a.templateId,a.color);
}
return g+e;
}
function o(t,a){
if(!t)return null;
var e=t.getAttribute("data-datakey")||"";
if(!e||!v.iframeProductData[e])return null;
if(a!==!0)return v.iframeProductData[e];
try{
return JSON.parse(JSON.stringify(v.iframeProductData[e]));
}catch(r){
return null;
}
}
function i(t){
var a=v.templateData||null;
if(!a||!a.template_list)return null;
for(var e=null,r=0,o=a.template_list.length;o>r;r++)if(a.template_list[r].template_id==t){
e=a.template_list[r];
break;
}
return e&&e.loop&&e.template_xml?e:null;
}
function l(t){
return t=t||{},v.templateData&&"function"==typeof t.callback?void t.callback(v.templateData):void h.post({
url:"/cgi-bin/productmaterial?action=get_template_list",
mask:!1
},{
done:function(a){
if(a&&a.base_resp&&0==a.base_resp.ret&&a.template_info_list&&a.template_info_list.template_list&&a.template_info_list.template_list.length>0){
v.templateData=a.template_info_list,v.templateData.default_template_id||(v.templateData.default_template_id=v.templateData.template_list[0].template_id),
v.templateData.default_color||(v.templateData.default_color=v.defaultColor);
var e=!1;
0==location.href.indexOf("http://dev")&&(e=!0);
for(var r=0,o=v.templateData.template_list.length;o>r;r++){
var i=v.templateData.template_list[r];
i.name||(i.name="模板"+(r+1)),i.color=v.defaultColor,i.pic_cover_url=i.pic_cover_url||"",
0==i.pic_cover_url.indexOf("http")||e||(i.pic_cover_url="https://res.wx.qq.com"+i.pic_cover_url);
}
"function"==typeof t.callback&&t.callback(v.templateData);
}else"function"==typeof t.onError&&t.onError();
},
fail:function(){
"function"==typeof t.onError&&t.onError();
}
});
}
function n(t,a,e){
$(a).find("img").each(function(){
this.onload=p(t,a,e),this.onerror=p(t,a,e);
var r=this.getAttribute("data-src");
this.src=r;
});
}
function p(t,a,e){
return function(){
var r=this;
r.onload=null,r.onerror=null,setTimeout(function(){
var r=a.ownerDocument,o=r?r.defaultView||r.parentWindow:null;
if(o&&t&&t.contentWindow===o){
var i=$(a).outerHeight();
if($(t).css({
height:i+"px"
}),"undefined"!=typeof e){
var l=window.UE.instants["ueditorInstant"+e];
l&&(v.adjustheightId&&(clearTimeout(v.adjustheightId),v.adjustheightId=null),v.adjustheightId=setTimeout(function(){
l.fireEvent("adjustheight");
},50));
}
}
},0);
};
}
function u(t,a,e){
var r=i(a);
if(!r)return"";
for(var o=r.template_xml,l=Math.min(r.loop,t.length),n={
url:"url",
title:"title",
img_url:"img_url",
str_price:"str_price",
str_original_price:"str_original_price",
sub_title:"sub_title",
color:e||v.defaultColor
},p=0;l>p;p++){
var u=t[p];
for(var d in n){
var c=new RegExp("\\{\\{"+d+(p+1)+"\\}\\}","g"),s="";
s="undefined"!=typeof u[n[d]]?u[n[d]]:n[d],"str_original_price"==d&&1*s===0?s="<span class='js_delparent'></span>":"[object String]"==Object.prototype.toString.call(s)&&(s=s.html(!0)),
o=o.replace(c,s);
}
}
var m=$("<div>").html(o),f=1;
return m.find("."+v.appmsgLoopClass).each(function(){
f>l&&$(this).remove(),f++;
}),m.find(".js_delparent").parent().remove(),m.html();
}
function d(t){
if(!t||!t.productData)return null;
for(var e=[],r=0;r<t.productData.length;r++){
var o=m(t.productData[r]);
e.push(o);
}
var i=a();
return v.iframeProductData[i]={
type:t.type,
productData:e,
templateId:t.templateId,
productId:t.productId,
packId:t.packId,
smartNum:t.smartNum,
color:t.color
},i;
}
function c(t){
var e=t.getAttribute("data-product")||"";
try{
e=decodeURIComponent(e),e=JSON.parse(e);
}catch(r){
e=null;
}
var o,i;
if(e&&e.productData&&e.productData.length>0){
o=[];
for(var l=0;l<e.productData.length;l++){
var n=m(e.productData[l]);
o.push(n);
}
var p=t.getAttribute("data-datakey")||"";
p||(p=a(),t.setAttribute("data-datakey",p)),i={
productData:o,
type:t.getAttribute("data-type"),
color:t.getAttribute("data-color"),
smartNum:t.getAttribute("data-smartnum"),
packId:t.getAttribute("data-packid"),
productId:t.getAttribute("data-pid"),
templateId:t.getAttribute("data-templateid")
};
try{
i.productId=decodeURIComponent(i.productId).split(v.pidSplitKey);
}catch(r){
i.productId=i.productId.split(v.pidSplitKey);
}
v.iframeProductData[p]=i;
for(var l in i)if(i.hasOwnProperty(l)){
var u=l;
"productData"==l?u="product":"productId"==l&&(u="pid"),t.removeAttribute("data-"+u.toLowerCase());
}
}else i=null;
return i;
}
function s(t){
var a=t.getAttribute("data-datakey")||"";
if(a&&v.iframeProductData[a]){
var e=v.iframeProductData[a];
for(var r in e)if(e.hasOwnProperty(r)){
var o=e[r];
if("productData"==r)try{
t.setAttribute("data-product",encodeURIComponent(JSON.stringify({
productData:o
})));
}catch(i){
t.setAttribute("data-product","");
}else"productId"==r?t.setAttribute("data-pid",encodeURIComponent(o.join(v.pidSplitKey))):t.setAttribute("data-"+r.toLowerCase(),o);
}
}
}
function m(t){
return t&&t.pid?(v.productData[t.pid]=t,v.productData[t.pid]):null;
}
function f(t){
var a=t.getAttribute("data-datakey")||"";
if(a&&v.iframeProductData[a])try{
delete v.iframeProductData[a];
}catch(e){}
}
var _=t("tpl/media/product_iframe_smart_tips.html.js"),g=t("tpl/media/product_highline_style.html.js"),h=t("common/wx/Cgi.js"),v={
datakeyUid:+new Date,
templateData:null,
adjustheightId:null,
smartTipsCompile:template.compile(_),
productData:{},
iframeProductData:{},
appmsgContainerClass:"js_product_container",
appmsgLoopClass:"js_product_loop_content",
appmsgProductErrClass:"js_product_err_container",
defaultColor:"#fa7834",
pidSplitKey:",#%$&"
};
return{
validColor:e,
defaultColor:v.defaultColor,
pidSplitKey:v.pidSplitKey,
appmsgContainerClass:v.appmsgContainerClass,
appmsgLoopClass:v.appmsgLoopClass,
appmsgProductErrClass:v.appmsgProductErrClass,
getIframeContentByIframe:r,
getIframeContent:u,
getOptionsFromIframe:o,
getTemplateDataById:i,
getTemplate:l,
addIframeImgLoadEvent:n,
getDataFromCustomTag:c,
setData2CustomTag:s,
cacheIframeData:d,
clearIframeProductDataByDom:f
};
});define("common/wx/media/productTemplateDialog.js",["common/wx/popup.js","common/wx/Tips.js","common/wx/mpEditor/plugin/productUtils.js","common/wx/mpEditor/utils.js","tpl/media/product_style_dialog_list.html.js","tpl/media/product_style_dialog_content.html.js"],function(t){
"use strict";
function o(t){
this._o={
color:i.defaultColor,
templateId:"",
productData:null,
editor:null
},this._g={
dom:{}
},this._extend(t),this.initDialog();
}
t("common/wx/popup.js");
var e=t("common/wx/Tips.js"),i=t("common/wx/mpEditor/plugin/productUtils.js"),n=t("common/wx/mpEditor/utils.js"),s=t("tpl/media/product_style_dialog_list.html.js"),d=t("tpl/media/product_style_dialog_content.html.js");
return o.prototype={
_extend:function(t){
for(var o in t)this._o[o]=t[o];
},
renderList:function(t){
for(var o=[],e=0,d=t.template_list.length;d>e;e++){
for(var l=t.template_list[e],c=l.template_id,a=l.loop,r=[],m=0;a>m;m++)r.push(this._o.productData);
o.push({
name:l.name,
id:c,
cover:l.pic_cover_url||"",
html:function(t,o,e){
return n.createLocalIframe({
attr:{
style:"width:100%"
},
$dom:o,
onIframeReadyFunc:function(o){
o.doc.body.innerHTML=t,e(o.iframe,o.doc.body);
}
});
}(i.getIframeContent(r,c,this._o.color),this._g.dom.$content,i.addIframeImgLoadEvent)
});
}
this._g.dom.$content.html(wx.T(s,{
list:o
})),this.bindEvent();
},
initDialog:function(){
var t=this,o=this._o,n=this._g,s=n.dom;
o.editor&&o.editor.fireEvent("handleWinScroll",!1),s.$dialog=$(wx.T(d,{})).popup({
width:960,
title:"选择卡片模板",
autoShow:!0,
className:"dialog_product_template",
buttons:[{
text:"确定",
type:"primary",
classWrap:"js_save_btn",
click:function(){
if(!t._g.selected)return void e.err("请选择卡片模板");
var o=this;
t.destory(o),t._o.callback({
id:t._g.selected
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
}),s.$saveBtn=s.$dialog.find(".js_save_btn"),s.$cancelBtn=s.$dialog.find(".js_cancel_btn"),
s.$content=s.$dialog.find(".js_content"),i.getTemplate({
callback:function(o){
t.hasLive&&t.renderList(o);
}
});
},
bindEvent:function(){
var t=this;
this._g.dom.$content.on("click","input[type=radio]",function(){
t._g.dom.$content.find(".js_checkbox_parent").parents().closest(".product-style").removeClass("selected");
var o=$(this);
if(o.prop("checked")){
o.parents().closest(".product-style").addClass("selected");
var e=o.attr("data-id");
t.select(e);
}
}),setTimeout(function(){
var o=t._g.dom.$content.find('input[type=radio][data-id="'+t._o.templateId+'"]');
o&&1==o.length||(o=t._g.dom.$content.find("input[type=radio]").eq(0)),o.prop("checked",!0).trigger("click");
},0);
},
select:function(t){
this._g.selected=t;
},
hasLive:function(){
return this._g.dom&&this._g.dom.$dialog?!0:!1;
},
destory:function(t){
t&&t.remove(),this._g.dom=null,this._g.productListObj=null,this._o.editor&&this._o.editor.fireEvent("handleWinScroll",!0);
}
},{
myclass:o
};
});define("common/wx/media/productDialog.js",["common/wx/popup.js","common/wx/Tips.js","common/wx/Cgi.js","tpl/media/product_select_dialog.html.js","common/wx/mpEditor/plugin/productUtils.js","media/product_list.js","tpl/media/product_dialog_upload.html.js","tpl/media/product_import_select_result.html.js","common/wx/tooltips.js","tpl/media/product_smart_tips.html.js"],function(t){
"use strict";
function i(t){
this._o={
can_use_smart:!1,
maxLen:100,
editor:null,
callback:function(){}
},this._g={
dom:{}
},this._extend(t);
var i=this;
p.templateData?this.initDialog():n.getTemplate({
callback:function(t){
p.templateData=t,i.initDialog();
}
});
}
t("common/wx/popup.js");
var e=t("common/wx/Tips.js"),o=t("common/wx/Cgi.js"),a=t("tpl/media/product_select_dialog.html.js"),n=t("common/wx/mpEditor/plugin/productUtils.js"),s=t("media/product_list.js"),l=t("tpl/media/product_dialog_upload.html.js"),r=t("tpl/media/product_import_select_result.html.js"),d=t("common/wx/tooltips.js"),c=t("tpl/media/product_smart_tips.html.js"),p={
templateFileLink:wx.url("/cgi-bin/productmaterial?action=download_excel&type=2"),
templateData:null,
maxImportLen:1e3
};
return i.prototype={
_extend:function(t){
for(var i in t)this._o[i]=t[i];
},
initDialog:function(){
var t=this,i=this._o,e=this._g,o=e.dom;
i.editor&&i.editor.fireEvent("handleWinScroll",!1),o.$dialog=$(wx.T(a,{
can_use_smart:this._o.can_use_smart,
manageLink:wx.url("/cgi-bin/productmaterial?action=product_list")
})).popup({
width:925,
title:"选择商品",
autoShow:!0,
className:"dialog-select-product",
buttons:[{
text:"确定",
type:"primary",
classWrap:"js_save_btn",
click:function(){
t.getResourceId({
dialog:this,
$btn:t._g.dom.$saveBtn,
callback:function(i){
o.$saveBtn.btn(!1),t._o.callback(i);
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
}),o.$saveBtn=o.$dialog.find(".js_save_btn"),o.$cancelBtn=o.$dialog.find(".js_cancel_btn"),
o.$selectAllBtn=o.$dialog.find(".js_select_all"),o.$importBtn=o.$dialog.find(".js_import"),
o.$smartBtn=o.$dialog.find(".js_smart_select"),o.$smartInput=o.$dialog.find(".js_smart_count"),
o.$smartDesc=o.$dialog.find(".js_smart_desc"),o.$smartTotal=o.$dialog.find(".js_smart_total"),
o.$imporSelectFailMain=o.$dialog.find(".js_impor_select_fail_main"),o.$imporSelectFailLink=o.$dialog.find(".js_link"),
o.$pagebar=o.$dialog.find(".js_pagebar"),o.$listBody=o.$dialog.find(".js_list_body"),
o.$categoryMain=o.$dialog.find(".js_category_main"),o.$selectedCount=o.$dialog.find(".js_selected_count"),
o.$cancelSelectBtn=o.$dialog.find(".js_cancel_select"),this.beforeInitList(),this.initList(),
this.afterInitList();
},
initList:function(){
var t=this,i=this._g,e=i.dom;
i.productListObj=new s({
uploadDom:this._g.canUploadTips.$dom.find(".js_upload"),
uploadInfoDom:e.$dialog.find(".js_des_container"),
uploadInfoTpl:r,
clearUploadBtnFilter:".js_clear_import",
pageSize:5,
listContainner:e.$listBody,
categoryContianer:e.$categoryMain,
pagebarContainer:e.$pagebar,
selectAllDom:e.$selectAllBtn,
selectedCountDom:e.$selectedCount,
cancelSelectBtn:e.$cancelSelectBtn,
jumpPageSelect:!0,
disabledItem:!0,
canDelCategory:!1,
afterRenderList:function(){
e&&e.$dialog&&e.$dialog.popup("resetPosition");
},
onUploadEnd:function(){
t._g.dom.$importBtn.hide(),t._g.canUploadTips.hide();
},
onUploadClear:function(){
t._g.dom.$importBtn.show();
},
afterInitCategory:function(){
t._g.dom.$categoryMain.show();
}
});
},
beforeInitList:function(){
var t=this;
this._g.canUploadTips=new d({
container:this._g.dom.$importBtn,
position:{
left:-119
},
reposition:!0,
content:template.compile(l)({
templateFileLink:p.templateFileLink
}),
onshow:function(){
this.show(),t._g.productListObj.refreshUpload();
}
});
},
afterInitList:function(){
var t=this,i=this._g.dom;
i.$smartBtn.checkbox({
onChanged:function(i){
i.prop("checked")?t._g.dom.$smartDesc.show():t._g.dom.$smartDesc.hide();
}
}),this._g.smartTips=new d({
container:i.$dialog.find(".js_smart_tips"),
position:{
left:-137
},
reposition:!0,
content:template.compile(c)({})
});
},
getData:function(){
var t=this._g,i=t.dom,o=t.productListObj.getSelectedData();
if(!o||0==o.length)return e.err("请选择商品"),!1;
var a=o.length,n=1,s=0;
if(i.$smartBtn.prop("checked")){
var l=o.length;
if(s=parseInt(i.$smartInput.val())||0,0>=s)return e.err("个性化推荐的数量必须大于0"),!1;
if(l>200)return e.err("个性化推荐时，单次选择商品总数不能超过200"),!1;
if(1==l)return e.err("个性化推荐时，商品总数必须大于1"),!1;
if(s>l)return e.err("个性化推荐展示商品数不能大于选择的商品总数"),!1;
if(s>this._o.maxLen)return e.err("最多还能在文章中展示%s个推荐商品".sprintf(this._o.maxLen)),!1;
n=2;
}else if(a>this._o.maxLen)return e.err("最多还能选择%s个商品插入文章".sprintf(this._o.maxLen)),
!1;
var r={
type:n,
templateId:p.templateData.default_template_id,
productData:o,
productId:t.productListObj.getSelectedId(),
packId:"",
smartNum:""
};
return 2==n&&(r.smartNum=s),r;
},
getResourceId:function(t){
var i=this;
if(this._g.gettingResource!==!0){
var a=this.getData();
if(a){
if(1==a.type)return t.callback(a),void i.destory(t.dialog);
i._g.gettingResource=!0,t.$btn.btn(!1),o.post({
url:"/cgi-bin/productmaterial?action=add_product_resource",
data:{
template_id:a.templateId,
product_list:a.productId.join(n.pidSplitKey),
typenum:a.smartNum
},
mask:!1
},{
done:function(o){
t.$btn.btn(!0),i._g.gettingResource=!1,o&&o.base_resp&&0==o.base_resp.ret&&o.pack_info&&o.pack_info.pack_id?(a.packId=o.pack_info.pack_id,
t.callback(a),i.destory(t.dialog)):e.err("系统繁忙，请稍后再试");
},
fail:function(){
t.$btn.btn(!0),i._g.gettingResource=!1,e.err("系统繁忙，获取资源ID失败，请稍后再试");
}
});
}
}
},
destory:function(t){
t&&t.remove(),this._g.dom=null,this._g.smartTips&&(this._g.smartTips.destroy(),this._g.smartTips=null),
this._g.canUploadTips&&(this._g.canUploadTips.destroy(),this._g.canUploadTips=null),
this._g.productListObj&&(this._g.productListObj.destroy(),this._g.productListObj=null),
this._o.editor&&this._o.editor.fireEvent("handleWinScroll",!0);
}
},i;
});define("common/wx/media/videoDialog.js",["common/wx/popup.js","page/smallvideo/dialog_select_video.css","widget/media/media_dialog.css","common/wx/media/videoUtils.js","common/wx/getVinfo.js","common/wx/top.js","common/wx/Tips.js","common/wx/media/video.js","common/wx/pagebar.js","common/wx/time.js","media/media_cgi.js","common/wx/Cgi.js","common/wx/tooltips.js","tpl/media/dialog/videomsg_layout.html.js","tpl/media/videocard.html.js"],function(e){
"use strict";
function i(e){
return e&&e.substr&&"04"==e.substr(1,2)?!0:!1;
}
function t(e,i,t,o){
e=e.replace(/^\s+|\s+$/g,""),e=e.replace(/^http:/,"https:"),e=e.replace(/^v\.qq\.com/,"https://v.qq.com");
var n=t||{};
-1!=e.indexOf("http://v.qq.com")||-1!=e.indexOf("https://v.qq.com")||-1!=e.indexOf("v.qq.com")?d(e,i,n,o):/mp\.weixin\.qq\.com\/s/.test(e)?s(e,i):/mp\.weixin\.qq\.com\/mp\/video\?/.test(e)&&a(e,i);
}
function o(e,i){
var i=i||document.location.toString(),t=e+"=",o=i.indexOf(t);
if(-1!=o){
var n=i.indexOf("&",o),d=i.indexOf("?",o);
return-1!=d&&(-1==n||n>d)&&(n=d),d=i.indexOf("#",o),-1!=d&&(-1==n||n>d)&&(n=d),-1==n?i.substring(o+t.length):i.substring(o+t.length,n);
}
return"";
}
function n(e){
e=e||window.location.toString();
var i,t=o("vid",e);
return t||(i=e.match(/\/\w{15}\/(\w+)\.html/))&&(t=i[1]),t||((i=e.match(/\/page\/\w{1}\/\w{1}\/\w{1}\/(\w+)\.html/))?t=i[1]:(i=e.match(/\/(page|play)\/+(\w{11})\.html/))?t=i[2]:(i=e.match(/\/(page)\/(\w+)\.html/))&&(t=i[2])),
t||(i=e.match(/\/boke\/gplay\/\w+_\w+_(\w+)\.html/))&&(t=i[1]),encodeURIComponent(t);
}
function d(e,i,t,o){
var d,s="",a=t.width,r=t.height;
if(d=e.match(new RegExp("(^|&|\\\\?)vid=([^&]*)(&|$|#)")))s=encodeURIComponent(d[2]),
-1!=s.indexOf("_")&&(s=s.split("_")[0]),/[a-zA-Z0-9]{11}/.test(s)||BJ_REPORT.monitor(94,"vid:"+s+";url="+e,39),
t.vid=s,t.return_url="https://v.qq.com/iframe/preview.html?vid="+s+"&width="+a+"&height="+r+"&auto=0",
i(t);else if((d=e.match(new RegExp("(http://)?v\\.qq\\.com/cover[^/]*/\\w+/([^/]*)\\.html")))||(d=e.match(new RegExp("(http://)?v\\.qq\\.com/prev[^/]*/\\w+/([^/]*)\\.html")))||(d=e.match(/\/(\w{15})\.html/))){
if(d.length>=3)var m=encodeURIComponent(d[2]);else var m=encodeURIComponent(d[1]);
var l="https://data.video.qq.com/fcgi-bin/data?tid=554&appid=20001184&appkey=85a707e3a07cc44d&otype=json&idlist="+m,c=document.getElementsByTagName("head")[0],_=document.createElement("script");
_.type="text/javascript",_.src=l,_.async=!0,void 0!==_.onreadystatechange?_.onreadystatechange=function(){
if("loaded"==_.readyState)try{
s=QZOutputJson.results[0].fields.video_ids[0],-1!=s.indexOf("_")&&(s=s.split("_")[0]),
/[a-zA-Z0-9]{11}/.test(s)||BJ_REPORT.monitor(94,"vid:"+s+";url="+e,39),t.vid=s,t.return_url="https://v.qq.com/iframe/preview.html?vid="+s+"&width="+a+"&height="+r+"&auto=0",
i(t);
}catch(o){}
}:_.onload=function(){
try{
s=QZOutputJson.results[0].fields.video_ids[0],-1!=s.indexOf("_")&&(s=s.split("_")[0]),
/[a-zA-Z0-9]{11}/.test(s)||BJ_REPORT.monitor(94,"vid:"+s+";url="+e,39),t.vid=s,t.return_url="https://v.qq.com/iframe/preview.html?vid="+s+"&width="+a+"&height="+r+"&auto=0",
i(t);
}catch(o){}
},c.appendChild(_);
}else s=n(e),""!=s?(-1!=s.indexOf("_")&&(s=s.split("_")[0]),/[a-zA-Z0-9]{11}/.test(s)||BJ_REPORT.monitor(94,"vid:"+s+";url="+e,39),
t.vid=s,t.return_url="https://v.qq.com/iframe/preview.html?vid="+s+"&width="+a+"&height="+r+"&auto=0",
i(t)):!!o&&o(-1);
}
function s(e,i){
f.get({
url:"/cgi-bin/video_mgr?action=get_vid_list&url="+window.encodeURIComponent(e),
success:function(e){
i({
vid:e.vid_list
});
}
});
}
function a(e,i){
var t=e.match(/[\?&]vid\=([^&]*)/);
if(null!=t&&t[1]){
var o=t[1];
i({
vid:o
});
}
}
function r(e,i,t,o){
i.hide();
var n=t[o],d=e.eq(o%2),s=$("<div></div>").appendTo(d);
s.html(wx.T(j,n)),n.err_msg&&s.find(".warn").text(n.err_msg).show();
}
e("common/wx/popup.js"),e("page/smallvideo/dialog_select_video.css"),e("widget/media/media_dialog.css");
var m=e("common/wx/media/videoUtils.js"),l=e("common/wx/getVinfo.js"),c=e("common/wx/top.js"),_=e("common/wx/Tips.js"),v=e("common/wx/media/video.js"),p=e("common/wx/pagebar.js"),h=e("common/wx/time.js"),u=e("media/media_cgi.js"),f=e("common/wx/Cgi.js"),g=e("common/wx/tooltips.js"),w=e("tpl/media/dialog/videomsg_layout.html.js"),j=e("tpl/media/videocard.html.js"),x=15,q=21,b=0,y={};
y[x]="video_msg_cnt",y[q]="short_video_cnt";
var O=function(e,i){
var t=$.extend({},i.multi_item?i.multi_item[0]:i);
t.selector=e,t.id=i.app_id,t.app_id=i.app_id,t.tpl="videomsg",t.for_selection=1!=t.is_new_video?!0:3==t.status,
t.for_transfer=!!t.content,t.hide_transfer=!!t.content,t.video_id=t.content,t.vid=t.video_id,
t.play_length=m.durationStr2Sec(t.duration),t.source="file",1==t.is_new_video?(t.time=i.create_time?h.timeFormat(i.create_time):"",
t.before_original_video=i.create_time<1453914e3?1:0,e.html(wx.T(j,t))):(t.create_time=i.create_time,
t.img_url=i.img_url,new v(t)),$("#wxVideoBox"+t.id).data("opt",t);
},C=function(e){
console.log(e),this.scene=e.scene||"default",this.onOK=e.onOK,this.show_share_dialog=e.show_share_dialog,
this.onHide=e.onHide,this.can_use_txvideo=e.can_use_txvideo,this.allowLinks="ueditor"===e.scene||"masssend"===e.scene,
this.create(),new g({
container:$(".js_look_wording"),
parentClass:"",
position:{
left:-52
},
reposition:!0,
content:"插入文章的视频，在图文群发成功后有可能被“微信看一看”功能等推荐。",
type:"hover"
}),console.log("dialog created");
},R={
create:function(){
var e=this,t=$.parseHTML(wx.T(w,{
scene:e.scene,
token:wx.data.t,
showShareDialog:e.show_share_dialog
}));
e.dialog&&e.dialog.popup("remove"),e.dialog=$(t[0]).popup({
title:"选择视频",
className:"dialog_select_video",
width:960,
onOK:function(){
var t=this,o=e.$dom.find(".js_top.selected").data("id"),n=e.$dom.find(".Js_videomsg.selected").data("opt")||e.$dom.find(".Js_videomsg.selected").parent().data("opt"),d=e.$dom.find(".js_video_url").val();
if(o&&n&&1==n.is_new_video&&3!=n.status)return _.err("该视频目前无法被选择，请选择其它视频"),!0;
if(o&&n&&0==n.is_new_video&&(0!=n.is_new_video||!n.content_url))return _.err("该视频转码未完成，请选择其它视频"),
!0;
if(o){
if(!n)return _.err("请选择视频"),!0;
if(e.onOK&&!e.onOK(o,n))return!0;
t.remove(),e.dialog=null;
}else{
if(o=15,!d)return _.err("请输入视频网址"),!0;
if(!/v\.qq\.com/.test(d.replace("http://","").replace("https://",""))&&!/mp\.weixin\.qq\.com\/s/.test(d)&&!/mp\.weixin\.qq\.com\/mp\/video\?/.test(d))return _.err("只支持已发布的微信公众号链接、视频详情页链接和腾讯视频链接"),
!0;
var s=e.$dom.find(".js_video_search").find(".Js_videomsg.selected"),a=s.data("vid");
if(!a)return _.err("请选择视频"),!0;
if(0==d.indexOf("http://v.qq.com/")||0==d.indexOf("https://v.qq.com/")){
if(i(a))return _.err("该链接为腾讯微博视频网址，此处引用视频只支持已发布的微信公众号链接、视频详情链接或者腾讯视频链接"),!1;
e.onOK&&e.onOK(o,{
align:"none",
height:375,
width:500,
vid:a,
subtype:0,
url:"https://v.qq.com/iframe/preview.html?width=500&height=375&auto=0&vid="+a,
title:decodeURIComponent(s.data("title")),
duration:s.data("duration"),
play_length:m.durationStr2Sec(s.data("duration")),
cover:s.data("cover"),
video_id:a,
content:a
});
}else e.onOK&&e.onOK(o,{
align:"none",
height:375,
width:500,
vid:a,
subtype:/mp\.weixin\.qq\.com\/mp\/video\?/.test(d)?1:2,
url:"https://v.qq.com/iframe/preview.html?width=500&height=375&auto=0&vid="+a,
title:decodeURIComponent(s.data("title")),
duration:s.data("duration"),
play_length:m.durationStr2Sec(s.data("duration")),
cover:s.data("cover"),
video_id:a,
content:a
}),t.remove(),e.dialog=null;
}
},
onCancel:function(){
"function"==typeof e.onHide&&e.onHide(),this.remove(),e.dialog=null;
},
onHide:function(){
"function"==typeof e.onHide&&e.onHide(),this.remove(),e.dialog=null;
}
}),e.$dom=e.dialog.popup("get"),e.$dom.find(".js_btn_p").eq(0).addClass("btn_disabled"),
e.init(),e.dialog.popup("resetPosition");
},
init:function(){
var e=this,i=[];
e.allowLinks&&(i.unshift({
name:"视频链接"
}),e.initVideoUrl(),e.$dom.find(".js_video_search").hide()),"ueditor"==e.scene?b=1:(i.unshift({
name:"素材库",
id:x
}),e.getList(x,0,10)),"ueditor"==e.scene&&1==e.can_use_txvideo?(i.unshift({
name:"素材库",
id:x
}),e.getList(x,0,10)):$(".js_video_status").find(".frm_tips").html("只支持已发布的微信公众号链接、视频详情页链接和腾讯视频链接"),
e.tab=new c(e.$dom.find(".js_videotab"),i),e.tab.selected(0),e.tab.dom.find("a").on("click",function(e){
e.preventDefault();
}),e.$dom.on("click",".js_top",function(){
var i=$(this).data("id");
e.$dom.find(".js_video_status").hide(),e.$dom.find(".js_video_create").hide(),e.$dom.find(".js_pagebar").empty(),
e.$dom.find(".js_btn_p").eq(0).addClass("btn_disabled"),i?(i==x&&e.$dom.find(".js_video_create").show(),
e.getList(i,0,10)):e.$dom.find(".js_video_search").show(),e.tab.selected($(this).data("index"));
}),e.$dom.on("click",".Js_videomsg",function(){
$(this).data("errmsg")?_.err("无法选择该视频"):(e.$dom.find(".Js_videomsg.selected").removeClass("selected"),
e.$dom.find(".js_btn_p").eq(0).removeClass("btn_disabled"),$(this).addClass("selected"));
}),e.$dom.find(".js_btn_p").eq(0).removeClass("btn_disabled"),e.$dom.on("mousewheel","#js_videomsg_list, #js_video_search_list",function(e){
this.scrollTop-=e.originalEvent.wheelDelta>0?60:-60,e.preventDefault();
}).on("DOMMouseScroll","#js_videomsg_list, #js_video_search_list",function(e){
this.scrollTop+=e.originalEvent.detail>0?60:-60,e.preventDefault();
});
},
initVideoUrl:function(){
var e=this,i=e.$dom.find(".js_video_loading").hide();
e.$dom.find(".js_video_search").show();
var o=null;
e.$dom.find(".js_video_url").on("input propertychange",function(){
i.show(),e.$dom.find(".js_video_url_tip").hide();
var n=$(this).val(),d=e.$dom.find("#js_video_search_list").find(".inner").empty();
n?(clearTimeout(o),o=setTimeout(function(){
return-1==n.indexOf("v.qq.com/")&&!/mp\.weixin\.qq\.com\/s/.test(n)&&!/mp\.weixin\.qq\.com\/mp\/video\?/.test(n)||-1!=n.indexOf("v.qq.com/")&&/(.+)\.v\.qq\.com/.test(n)?(i.hide(),
e.$dom.find(".js_video_url_tip").show(),!0):void clearTimeout(o);
},1e3),i.show(),e.$dom.find(".js_btn_p").eq(0).removeClass("btn_disabled"),t(n,function(t){
var o=t.vid,n={
title:"",
cover:"",
duration:"",
for_operation:!1,
for_selection:!0,
for_transfer:!0,
hide_transfer:!0,
is_new_video:!0,
video_ori_status:4,
status:3,
source:"file"
};
if("string"==typeof o&&(o=[o]),!o||0==o.length)return _.err("查无视频"),i.hide(),!0;
for(var s=0,a=[],c=0;c<o.length;c++)!function(t){
l.getInfoByVid({
vid:o[t],
onSuccess:function(l){
s++,a.push($.extend({},n,{
id:s,
title:l.data.title,
title_encode:encodeURIComponent(l.data.title),
play_length:l.data.time,
duration:m.changeTime(l.data.time),
cover:l.data.p16_9,
video_id:o[t],
err_msg:l.err_msg
})),80==l.ret_code&&1==l.oriData.exem&&(a[a.length-1].err_msg=""),r(d,i,a,a.length-1),
1===o.length&&d.find(".Js_videomsg").eq(0).trigger("click"),e.dialog.popup("resetPosition");
},
onError:function(){
s++,wx.jslog({
src:"common/wx/media/videoDialog.js"
},null,52),s==o.length&&0==a.length&&(_.err("获取视频失败，请重试"),i.hide());
}
});
}(c);
},null,function(){
i.hide(),_.err("该网址存在错误，请填写正确的腾讯视频网址");
})):(i.hide(),e.$dom.find("#js_video_search_list").find(".inner").empty(),e.$dom.find(".js_btn_p").eq(0).addClass("btn_disabled"));
});
},
initPagebar:function(e,i,t){
var o=this,n=e/i+1;
return i>=t?void o.$dom.find(".js_pagebar").hide():void new p({
container:o.$dom.find(".js_pagebar").show(),
perPage:i,
first:!1,
last:!1,
isSimple:!0,
initShowPage:n,
totalItemsNum:t,
callback:function(t){
var d=t.currentPage,s=o.$dom.find(".js_top.selected").data("id");
d!=n&&s&&(e=i*--d,o.getList(s,e,i));
}
});
},
getList:function(e,i,t){
var o=this,n=e==x?u.appmsg:u;
o.$dom.find(".js_video_content").hide(),o.$dom.find(".js_video_loading").show(),
n.getList(e,i,t,function(n){
if(o.dialog&&e==o.$dom.find(".js_top.selected").data("id")){
var d=n.file_item||n.item,s=o.$dom.find("#js_videomsg_list").find(".inner").empty();
d.length?(d.each(function(e,i){
var t=s.eq(i%2),o=$('<div id="appmsg%s"></div>'.sprintf(e.app_id||e.file_id),t).appendTo(t);
O(o,e);
}),o.$dom.find(".js_video_content").show(),o.dialog.popup("resetPosition")):o.$dom.find(".js_video_none").show().find(".js_empty_tips").html(e==q?"暂无素材<br />（素材来源：通过微信用户上传给公众帐号）":"暂无素材"),
o.$dom.find(".js_video_loading").hide(),o.initPagebar(i,t,n.file_cnt[y[e]]||n.file_cnt.video_cnt);
}
},"",b);
}
};
return $.extend(C.prototype,R),C;
});define("common/wx/getVinfo.js",["common/wx/Cgi.js","common/wx/loadscript.js"],function(e){
"use strict";
function a(e,a){
var t="视频加载失败",r="";
switch(1*e){
case-4:
r="因版权限制，该视频不支持添加";
break;

case-5:
r="因版权限制，该视频不支持添加";
break;

case-3:
r="因版权限制，该视频不支持添加";
break;

case 61:
r="该视频不存在";
break;

case 62:
r="该视频已下架";
break;

case 63:
r="视频加载失败";
break;

case 65:
r="视频加载失败";
break;

case 67:
r="视频加载失败";
break;

case 69:
r="视频格式不支持移动端观看";
break;

case 71:
r="视频加载失败";
break;

case 73:
r="视频加载失败";
break;

case 74:
r="视频加载失败";
break;

case 80:
switch(1*a){
case 1:
r="IP地址所在地区暂不支持播放";
break;

case 2:
r="因版权限制，该视频不支持添加";
break;

default:
r="因版权限制，该视频不支持添加";
}
break;

case 81:
r="视频加载失败";
break;

case 82:
r="视频加载失败";
break;

case 83:
switch(1*a){
case-1:
r=t;
break;

case-2:
r="因版权限制，该视频不支持添加";
break;

default:
r="因版权限制，该视频不支持添加";
}
break;

case 84:
r="视频加载失败";
break;

default:
r=t;
}
return r;
}
function t(e){
document.domain="qq.com";
var a="",t=encodeURIComponent(top.window.location.href.replace(/(\?|&)(key|uin)=([\S\s]*?)(&|$)/g,"$1").replace(/&$/,"")),r=["http://btrace.qq.com/kvcollect?BossId=2973&Pwd=1557019983&step=1009&vid=","undefined"!=typeof e.vid?e.vid:"","&platform=","&val=","undefined"!=typeof e.val?e.val:"","&val1=","undefined"!=typeof e.val1?e.val1:"","&vurl=",encodeURIComponent(e.vurl),"&t=",Math.random(),"&url=",t,"&wx_openid=",a].join(""),c=new Image;
c.src=r.substr(0,1024);
}
function r(e){
var a,t;
a="function"==typeof e.onSuccess?e.onSuccess:function(){},t="function"==typeof e.onError?e.onError:function(){},
o.post({
url:wx.url("/cgi-bin/getvideockey?"),
data:{
vid:e.vid
}
},{
done:function(r){
r&&r.base_resp&&0==r.base_resp.ret&&r.ckey?n({
vid:e.vid,
ckey:r.ckey,
onSuc:function(t){
t=t||{},t.data||(t.data={}),t.data.p4_3=c(e.vid,4/3),t.data.p16_9=c(e.vid,16/9),
a(t);
},
onError:function(){
t({
code:3
});
}
}):t({
code:2,
ckeyResp:r
});
},
fail:function(){
t({
code:1
});
}
});
}
function c(e,a){
return a&&a!=16/9?"http://shp.qpic.cn/qqvideo/0/"+e+"/400":"http://shp.qpic.cn/qqvideo_ori/0/"+e+"_496_280/0";
}
var o=e("common/wx/Cgi.js"),i=e("common/wx/loadscript.js"),n=function(e){
var r="https://h5vv.video.qq.com/getvinfo?vid=#vid#&dtype=1&otype=json&callback=video_dynamic_callback&appVer=1&encryptVer=6.3&platform=61001&cKey=#ckey#&sdtfrom=v3060";
r=r.replace("#vid#",e.vid).replace("#ckey#",e.ckey),r+="&device=60401&use_proxy_sdk=0";
var c=+new Date;
i({
url:r,
timeout:1e4,
callbackName:"video_dynamic_callback",
callback:function(r){
var o=+new Date,i=o-c;
r=r||{},"undefined"==typeof r.em&&(r.em=0);
var n,v="",l=r.em;
if(0==r.em){
if(r.exem>0?l=-4:0==r.exem&&r.vl&&r.vl.vi&&r.vl.vi[0]&&8==r.vl.vi[0].st&&(l=r.preview>0?-5:-3),
0!=l||r.vl&&r.vl.vi&&r.vl.vi[0]||(l=-2),0!=l&&(v=a(1*l,1*r.exem)),r.vl&&r.vl.vi&&r.vl.vi[0]){
var d=r.vl.vi[0];
if(n={
newVid:d.lnk,
time:d.td,
title:d.ti,
width:d.vw,
height:d.vh,
file_size:d.fs,
rate:Math.round(d.fs/1024*8/d.td)
},d.ul&&d.ul.ui&&d.ul.ui[0]){
var s=d.ul.ui[0],f=s.url+d.fn,u=r.fl,m="";
if(u&&u.cnt>0)for(var p=u.fi,k=0,b=p.length;b>k;k++)if(1*p[k].sl===1){
m=p[k].name,n.resolution=(p[k].cname||"").replace(/^.*;\((:?.*)P\)$/,"$1")||0;
break;
}
n.format=m,n.vt=s.vt,n.totalUrl=[f,-1!=f.indexOf("?")?"&":"?","vkey=",d.fvkey,"&sdtfrom=","&type=",1==s.dt?"tflv":2==s.dt||0==s.dt?"mp4":"","&platform=","&fmt=",m,"&level=",d.level,"&br=",d.br,"&sp=",d.sp].join("");
}
}
}else v=a(1*l,1*r.exem);
t({
vid:e.vid,
val:i,
val1:r.em,
vurl:n&&n.totalUrl?n.totalUrl:""
}),e.onSuc({
data:n,
oriData:r,
c_time:i,
err_msg:v||"",
ret_code:l
});
},
onerror:function(a){
var r,o=+new Date,i=o-c;
switch(1*a){
case 400:
r=-22;
break;

case 500:
r=-21;
break;

default:
r=-23;
}
"function"==typeof e.onError&&e.onError(r,{
ret_code:r,
c_time:i,
err_msg:""
}),t({
vid:e.vid,
val:i,
val1:r,
vurl:""
});
}
});
};
return{
get:n,
getInfoByVid:r
};
});define("common/wx/media/videoUtils.js",["common/wx/popup.js"],function(e){
"use strict";
function i(e){
e=parseInt(e,10);
var i="";
if(60>e)10>e&&(e="0"+e),i="00:"+e;else if(e>=60){
var t=Math.floor(e/60),o=(e-60*t)%60;
10>t&&(t="0"+t),10>o&&(o="0"+o),i=t+":"+o;
}
return i;
}
function t(e){
if(!e)return 0;
e=e.replace(/：/g,":");
for(var i=e.split(":"),t=0,o=1,r=i.length-1;r>=0;r--)t+=i[r]*o,o*=60;
return t;
}
function o(e){
var i;
i=$(r({
vid:e.vid,
editFrame:!1,
ratio:e.ratio||n.ratio
})).popup({
title:"预览视频",
className:e.className||"align_edge wx_video_dialog",
width:"960",
buttons:[{
text:"关闭",
click:function(){
this.remove(),"function"==typeof e.onClose&&e.onClose();
}
}],
onClose:function(){
i.popup("remove"),i=null,"function"==typeof e.onClose&&e.onClose();
}
});
}
function r(e){
if(e.editFrame)return['<iframe class="video_iframe wx_video_iframe',e.className?" "+e.className+'"':'"',e.attr?" "+e.attr+" ":"",' allowfullscreen frameborder=0 style="position:relative; z-index:1;" '," height=",e.height," width=",e.width,'  src="/cgi-bin/readtemplate?t=tmpl/video_tmpl&vid=',e.vid,'"'," ></iframe><br/>"].join("");
var i=e.width||500,t=Math.round(i/(e.ratio||n.ratio));
return['<iframe class="wx_video_iframe ',e.className?" "+e.className+'"':'"'," frameborder=0 "," height=",t," width=",i,'  src="https://v.qq.com/iframe/preview.html?vid='+e.vid+"&width="+i+"&height="+t+'&auto=1"'," ></iframe>"].join("");
}
function a(){
return 267;
}
e("common/wx/popup.js");
var n={
ratio:16/9
};
return{
changeTime:i,
durationStr2Sec:t,
showVideoPreviewDialog:o,
creatInsertStr:r,
getPreviewPhoneWidth:a
};
});define("biz_common/utils/url/parse.js",[],function(){
function r(r){
var e=r.length,n=r.indexOf("?"),t=r.indexOf("#");
t=-1==t?e:t,n=-1==n?t:n;
var a=r.substr(0,n),i=r.substr(n+1,t-n-1),o=r.substr(t+1);
return{
host:a,
query_str:i,
hash:o
};
}
function e(e,n){
var t=r(e),a=t.query_str,i=[];
for(var o in n)n.hasOwnProperty(o)&&i.push(o+"="+encodeURIComponent(n[o]));
return i.length>0&&(a+=(""!=a?"&":"")+i.join("&")),t.host+(""!=a?"?"+a:"")+(""!=t.hash?"#"+t.hash:"");
}
function n(r,e,n,t){
r=r||location.href;
var a=r.indexOf("&"),i=r.length,o=r.replace(/^[\w\d]+:[\/\\]+/g,"").split("").reverse();
Array.prototype.indexOf||(Array.prototype.indexOf=function(r,e){
var n;
if(null==this)throw new TypeError('"this" is null or not defined');
var t=Object(this),a=t.length>>>0;
if(0===a)return-1;
var i=+e||0;
if(1/0===Math.abs(i)&&(i=0),i>=a)return-1;
for(n=Math.max(i>=0?i:a-Math.abs(i),0);a>n;){
if(n in t&&t[n]===r)return n;
n++;
}
return-1;
});
var s=i-1-o.indexOf("/");
-1!=a&&-1==r.indexOf("?")&&a>s&&(r=r.replace("&","?"));
var u=new RegExp("([\\?&]"+e+"=)[^&#]*");
if(!r.match(u)){
var h=r.indexOf("?");
return-1==h?r+"?"+e+"="+n:h==r.length-1?r+e+"="+n:r+"&"+e+"="+n;
}
return t===!0?r.replace(u,"$1"+n):r;
}
function t(r){
var e=arguments[1]||window.location.search,n=new RegExp("(^|&)"+r+"=([^&]*)(&|$)"),t=e.substr(e.indexOf("?")+1).match(n);
return null!=t?t[2]:"";
}
return{
parseUrl:r,
join:e,
addParam:n,
getQuery:t
};
});define("common/wx/media/adDialog.js",["common/wx/popup.js","common/wx/Cgi.js","biz_common/moment.js","common/wx/pagebar.js","common/wx/Step.js","common/wx/Tips.js","biz_web/ui/checkbox.js","common/wx/tooltips.js","tpl/media/dialog/admsg_dialog.html.js","tpl/media/admsg.html.js","tpl/media/adtips.html.js","tpl/media/adcpc.html.js","tpl/media/adcpc_cat.html.js","tpl/media/adcpc_catitem.html.js","tpl/media/adcpc_singleitem.html.js"],function(t){
"use strict";
t("common/wx/popup.js");
var e=t("common/wx/Cgi.js"),i=t("biz_common/moment.js"),a=t("common/wx/pagebar.js"),s=t("common/wx/Step.js"),n=t("common/wx/Tips.js"),_=(t("biz_web/ui/checkbox.js"),
t("common/wx/tooltips.js")),d=t("tpl/media/dialog/admsg_dialog.html.js"),o=t("tpl/media/admsg.html.js"),c=t("tpl/media/adtips.html.js"),r=t("tpl/media/adcpc.html.js"),l=t("tpl/media/adcpc_cat.html.js"),p=t("tpl/media/adcpc_catitem.html.js"),h=t("tpl/media/adcpc_singleitem.html.js");
template.helper("$changeTime",function(t){
return i.unix(t).format("YYYY年MM月DD日");
});
var g=function(t){
var e=document.createElement("div");
return $(e).text(t),$(e).html();
},m=function(t){
this.onOK=t.onOK,this.idx=t.idx,this.cpc_edit_data=t.cpc_edit_data,this.ad={},this.init();
};
return m.prototype.init=function(){
var t=this;
this.data={},this.dialog&&this.dialog.remove(),this.dialog=$(d).popup({
title:"选择广告",
width:960,
className:"admsg_dialog_wrp",
onShow:function(){
t.$dom=this.$dialogWrp.eq(0),t._popup=this,t._initEvent(),t.cpc_edit_data&&t.cpc_edit_data.single_aids?t._getEditAgainData():t._getAdList(0,10,function(){
t._initPagebar();
});
},
onHide:function(){
this.remove(),t.dialog=null;
}
});
},m.prototype._getAdList=function(t,i,a){
var s=this;
s.$dom.find(".js_loading").show(),s.$dom.find(".js_ad_list").hide(),e.get({
url:"/merchant/ad_seller_manager?action=get_agreetment_ad",
data:{
begin:t,
count:i
}
},function(t){
s.$dom.find(".js_loading").hide(),t&&t.base_resp&&0==t.base_resp.ret?(s._parseCpc(t),
s.cpc_edit_data||s._parseSponsor(t),a&&a()):n.err("系统错误");
});
},m.prototype._getEditAgainData=function(){
var t=this;
t.$dom.find(".js_loading").show(),t.$dom.find(".js_ad_list").hide(),e.get({
url:"/merchant/ad_seller_manager?action=get_editagain_data&category_id="+this.cpc_edit_data.single_category_id+"&aids="+this.cpc_edit_data.single_aids
},function(e){
t.$dom.find(".js_loading").hide(),0==e.base_resp.ret&&(t._getEditAgainDataOK=!0,
e.can_use_single_ad=1,t._getEditAgainDataData=e,t._parseCpc(e)),console.log(e);
});
},m.prototype._parseCpc=function(t){
!t.category_list||t.category_list.length<1||(this.category_list=t.category_list,
this.can_use_single_ad=t.can_use_single_ad,t.ad_info_list.length>0&&!this.cpc_edit_data?this._renderCpc("step1"):(this.$dom.find(".js_prev").hide(),
this._renderCpc("step2")),console.log(t.selected_single_ad_info,t.single_ad_info));
},m.prototype._renderCpc=function(t){
var e=this;
if("step1"==t)this.$dom.find(".js_cpc_area").show(),this.$dom.find(".js_cpc_area .js_admsg_item")[0].category_list=this.category_list;else if("step2"==t){
var i=this.$dom;
if(this.$dom.find(".js_step2_view").show(),this.ad_type=0,this.cpc_edit_data){
var a=[];
this.cpc_edit_data.category_id_list?a=String(this.cpc_edit_data.category_id_list).split("|"):(a.push(this.cpc_edit_data.single_category_id),
this.ad_type=1);
for(var s=0;s<this.category_list.length;s++)for(var n=0;n<a.length;n++)a[n]==this.category_list[s].category_id&&(this.category_list[s].selected=!0);
}
i.find(".js_adtips").html(wx.T(r,{
category_list:this.category_list,
ad_type:this.ad_type,
can_use_single_ad:this.can_use_single_ad
}));
var d=i.find(".js_cpc_type");
d.filter("[value="+this.ad_type+"]").attr("checked",!0);
var o=d.checkbox({
type:"radio",
onChanged:function(){
var t=o.values()[0];
e.cpc_edit_data=void 0;
for(var i=0;i<e.category_list.length;i++)e.category_list[i].selected=!1;
e.ad_type=t,e._renderCpcCat();
}
});
new _({
container:"#js_ad_mini_ask",
content:"仅限定商品类目指的是展示在文章内的广告卡片被限定在流量主选择的类目内",
reposition:!0,
type:"hover",
position:{
left:-50
},
onshow:function(){
this.show();
}
}),this._renderCpcCat();
}
},m.prototype._renderCpcCat=function(){
var t=this.$dom,e=this,i=0==this.ad_type?"checkbox":"radio";
t.find(".js_cpc_cat_container").html(wx.T(l,{
category_list:this.category_list,
ad_type:this.ad_type,
checkbox_type:i
})),t.find(".js_single_ad_container").hide();
var a=0;
this.cpc_edit_data&&this.cpc_edit_data.single_aids&&(a=this.cpc_edit_data.single_aids.split("|").length),
1==this.ad_type?this._changeMiniTips(!0,a):this._changeMiniTips(!1);
var s=t.find(".js_cat_choose_dp"),n=t.find(".js_cpc_cat_item");
s.show();
var _=n.checkbox({
type:i,
onChanged:function(){
var t=_.values();
0==e.ad_type?e._renderCpcCatItem(t):(e._changeMiniTips(!0,0),e._renderCpcItemDetail(t));
}
});
if(this.cpc_edit_data){
{
_.values();
}
0==e.ad_type?e._renderCpcCatItem(this.cpc_edit_data.category_id_list):e._renderCpcItemDetail(this.cpc_edit_data.single_category_id);
}
},m.prototype._changeMiniTips=function(t,e){
t?$(".js_dialog_mini_tips").html("已选择%s个，可选择5个".sprintf(e)).show():$(".js_dialog_mini_tips").html("").hide();
},m.prototype._renderCpcItemDetail=function(t){
var i=this.$dom,a=this;
i.find(".js_single_ad_container").show(),"string"==typeof t&&(t=t.split("|"));
var s=this.category_list.filter(function(e){
return t.indexOf(String(e.category_id))>-1;
});
if($(".js_cat_choose_list").html('<span class="js_single_category_id" data-single_category_id="'+s[0].category_id+'">'+s[0].name+"</span>"),
$(".js_cat_choose_dp").hide(),this._getEditAgainDataOK){
this._getEditAgainDataOK=void 0;
for(var n=a._getEditAgainDataData,_=[],d=[],o=0;o<n.selected_single_ad_info.length;o++)n.selected_single_ad_info[o].selected=!0,
d.push(n.selected_single_ad_info[o]),_.push(n.selected_single_ad_info[o].aid);
for(var o=0;o<n.single_ad_info.length;o++)-1==_.indexOf(n.single_ad_info[o].aid)&&d.push(n.single_ad_info[o]);
d=d.slice(0,20);
for(var o=0;o<d.length;o++)d[o].path_encode=encodeURIComponent(d[o].path);
i.find(".js_single_ad_container").html(wx.T(h,{
single_ad_list:d,
token:wx.data.t
}));
}else a.$dom.find(".js_single_loading").show(),a.$dom.find(".js_single_ad_container").hide(),
e.get({
url:"/merchant/ad_seller_manager?action=get_single_ad_list&category_id="+s[0].category_id,
success:function(t){
a.$dom.find(".js_single_loading").hide();
for(var e=t.single_ad_info,s=0;s<e.length;s++)e[s].path_encode=encodeURIComponent(e[s].path);
i.find(".js_single_ad_container").html(wx.T(h,{
single_ad_list:e,
token:wx.data.t
})).show();
}
});
},m.prototype._renderCpcCatItem=function(t){
var e=this.$dom;
"string"==typeof t&&(t=t.split("|"));
var i=this.category_list.filter(function(e){
return t.indexOf(String(e.category_id))>-1;
});
e.find(".js_cat_choose_list").html(wx.T(p,{
sel_item:i
})),i&&0!=i.length||e.find(".js_cat_choose_list").html('<span class="tips_global">若不限定具体商品类目则按全类目展示广告</span>');
},m.prototype._renderCpcItem=function(){
console.log("render cpc_item");
},m.prototype._parseSponsor=function(t){
var e=t.ad_info_list;
if(!(e.length<1)){
for(var i=this,a=0;a<e.length;a++)if(e[a].ad_tips=e[a].ad_tips.replace(/(\r\n|\n|\r)/gm,"<br />"),
e[a].background=e[a].background.replace(/(\r\n|\n|\r)/gm,"<br />"),e[a].video_info&&(e[a].ad_img=e[a].video_info.thumbUrl),
e[a].ad_request.length>0){
e[a].ad_request=JSON.parse(e[a].ad_request);
for(var s=0;s<e[a].ad_request.length;s++)e[a].ad_request[s].title=g(e[a].ad_request[s].title),
e[a].ad_request[s].content=g(e[a].ad_request[s].content),("no_compete"==e[a].ad_request[s].field||"no_policy"==e[a].ad_request[s].field)&&(e[a].ad_request[s].content=e[a].ad_request[s].content.split(", "));
}else e[a].ad_request=[];
i.total_num=t.total_num,i._initStep(),i._setStep(1),i._renderSponsor(e),i.$dom.find(".js_ad_list").show();
}
},m.prototype._renderSponsor=function(t){
var e=this.$dom,i=e.find(".admsg_col");
e.find(".js_step1_view").show(),i.empty();
for(var a=0;a<t.length;a++){
t[a].insert_status=t[a].idx!=this.idx+1?1:3==t[a].status?4:3==t[a].ad_status||4==t[a].ad_status?2:0;
var s=$(wx.T(o,t[a]));
s[0].ad_data=t[a],i.eq(a%2).append(s[0]);
}
},m.prototype._setStep=function(t){
this.stepNav.setStep(t),this.$dom.find(".js_step"+(3-t)+"_view").hide(),this.$dom.find(".js_step"+t+"_view").show();
},m.prototype._initStep=function(){
this.stepNav=new s({
container:".js_step",
selected:1,
names:["1.选择广告","2.广告详情"]
});
},m.prototype._initPagebar=function(){
var t=this;
t.total_num>10&&new a({
container:t.$dom.find(".js_pagebar").show(),
perPage:10,
first:!1,
last:!1,
isSimple:!0,
totalItemsNum:t.total_num,
callback:function(e){
t.ad={};
var i=e.currentPage;
t._getAdList(10*(i-1),10);
}
});
},m.prototype._initEvent=function(){
var t=this,e=this.$dom;
e.on("click",".js_admsg_item",function(){
$(".js_admsg_item.selected").removeClass("selected"),$(this).addClass("selected"),
t.ad=$(this)[0].ad_data,t.ad||(t.ad=$(this)[0].category_list);
}),e.on("click",".js_next",function(){
return $.isEmptyObject(t.ad)?(n.err("请选择广告"),!1):(t._setStep(2),void(t.ad.ad_id?e.find(".js_adtips").html(wx.T(c,{
ad_info:t.ad,
title:wx.cgiData.nick_name
})):t._renderCpc("step2")));
}),e.on("click",".js_prev",function(){
t._setStep(1);
}),e.on("click",".js_submit",function(){
if(!t.ad.ad_id)if(0==t.ad_type){
for(var i=e.find(".js_cpc_cat_item[checked=checked]"),a=[],s=0;s<i.length;s++)a.push($(i[s]).attr("data-category_id"));
if(a.length<1)for(var i=e.find(".js_cpc_cat_item"),a=[],s=0;s<i.length;s++)a.push($(i[s]).attr("data-category_id"));
t.ad={
ad_type:0,
category_id_list:a
};
}else{
var _=e.find(".js_single_category_id").attr("data-single_category_id"),d="",o=e.find(".js_cpc_single_item.selected");
if(o.each(function(){
d+=$(this).attr("data-single_aid")+"|";
}),!d)return void n.err("请至少选择一个单品");
d=d.substring(0,d.length-1),t.ad={
ad_type:1,
single_category_id:_,
single_aids:d,
single_aids_length:o.length,
image_url:o.attr("data-image_url")
};
}
t._popup.remove(),t.dialog=null,t.onOK&&t.onOK(t.ad);
}),e.on("click",".js_cat_choose_del",function(t){
1==$(this).parent().parent().find(".js_cat_choose_del").length?$(this).parent().parent().html('<span class="tips_global">若不限定具体商品类目则按全类目展示广告</span>'):$(this).parent().remove();
var i=$(t.target).attr("data-category_id");
e.find(".js_cpc_cat_item[value="+i+"]").checkbox("checked",!1);
}),e.on("click",".js_clear_all",function(){
return $(this).parent().html('<span class="tips_global">若不限定具体商品类目则按全类目展示广告</span>'),
e.find(".js_cpc_cat_item[checked=checked]").checkbox("checked",!1),!1;
}),e.on("click",".js_cat_choose_list",function(t){
t.target&&t.target.className.indexOf("js_cat_choose_del")>-1||(e.find(".js_cat_choose_dp").is(":hidden")?e.find(".js_cat_choose_dp").show():e.find(".js_cat_choose_dp").hide());
}),e.on("click",".js_cpc_single_item",function(){
var i=e.find(".js_cpc_single_item.selected"),a=i.length;
if($(this).hasClass("selected"))$(this).removeClass("selected"),a-=1;else{
if(a>=5)return void n.err("最多只能选择5个单品");
$(this).addClass("selected"),a+=1;
}
t._changeMiniTips(!0,a);
});
},m;
});define("tpl/mpEditor/plugin/img_popup.html.js",[],function(){
return'<div class="js_img_popup edui_mask_edit_group">\n    {if hasCropimg}\n    <div class="edui-clickable edui_mask_edit_meta first_child" onclick="$$._cropImg()">\n        <div class="edui_mask_edit_meta_inner">\n            <i class="icon_edui_mask_img icon_edui_mask_img_crop"></i>\n            裁剪        </div>\n    </div>\n    {/if}\n    <div class="edui-clickable edui_mask_edit_meta" onclick="$$._imgReplace()">\n        <div class="edui_mask_edit_meta_inner">\n            <i class="icon_edui_mask_img icon_edui_mask_img_replace"></i>\n            图片替换        </div>\n    </div>\n	<div class="js_canceladapt edui-clickable edui_mask_edit_meta tips_global" onclick="$$._imgAutoWidth(false)" style="{if !hasadapt}display:none;{/if}">\n        <div class="edui_mask_edit_meta_inner">\n            <i class="icon_edui_mask_img icon_edui_mask_img_canceladapt"></i>\n            取消自适应        </div>\n    </div>\n	<div class="js_adapt edui-clickable edui_mask_edit_meta" onclick="$$._imgAutoWidth(true)" style="{if hasadapt}display:none;{/if}">\n        <div class="edui_mask_edit_meta_inner">\n            <i class="icon_edui_mask_img icon_edui_mask_img_adapt"></i>\n            自适应手机屏幕宽度        </div>\n    </div>\n</div>\n\n\n';
});define("common/wx/media/weappDialog.js",["common/wx/popup.js","biz_web/ui/checkbox.js","common/lib/jquery.Jcrop.js","tpl/media/weapp_dialog.html.js","tpl/media/weapp_dialog_content.html.js","common/wx/Cgi.js","common/wx/mpEditor/common/cropImgCgi.js","common/wx/upload.js","common/wx/Step.js","common/wx/Tips.js"],function(e){
"use strict";
e("common/wx/popup.js"),e("biz_web/ui/checkbox.js"),e("common/lib/jquery.Jcrop.js");
var i=e("tpl/media/weapp_dialog.html.js"),t=e("tpl/media/weapp_dialog_content.html.js"),n=e("common/wx/Cgi.js"),s=e("common/wx/mpEditor/common/cropImgCgi.js"),a=e("common/wx/upload.js"),_=e("common/wx/Step.js"),p=e("common/wx/Tips.js"),l=function(e,l){
var r=void 0,c=null,o={
appid:e.appid,
main_page:e.main_page,
nick_name:e.nick_name,
content:e.content,
image:e.image
};
void 0!==e.selected&&(r=e.selected);
var d=$(i).popup({
title:"选择小程序",
width:960,
className:"weapp_select_dialog",
buttons:[],
onOK:function(){},
onCancel:function(){
this.remove();
},
onHide:function(){
this.remove();
}
}),w=new _({
container:".js_weapp_select_step",
selected:e.step||1,
names:["选择小程序","填写详细信息"]
});
d.find(".dialog_ft").hide(),d.find(".js_weapp_select_cancel").click(function(){
d.find(".pop_closed").click(),l();
});
var m,f,h,g=function(e){
if(parseInt(e.w)>0){
j.c=e;
var i=$(".js_after_preview").width()/e.w,t=$(".js_after_preview").height()/e.h;
console.log(e.w,e.h),$(".js_after_preview_img").css({
width:Math.round(i*m)+"px",
height:Math.round(t*f)+"px",
marginLeft:"-"+Math.round(i*e.x)+"px",
marginTop:"-"+Math.round(t*e.y)+"px"
});
}
},j={
fid:null,
share:null,
c:{},
lar:{}
};
a.uploadCdnFile({
container:"#weapp_select_upload_reset",
multi:!1,
type:2,
fileSingleSizeLimit:2097152,
imageSize:!0,
onComplete:function(e,i,t,n){
var s=n.content,a=new Image;
a.onload=function(){
h&&h.destroy(),d.find("[name=imageUrl]").val(s),d.find(".js_weapp_select_step4").find(".js_weapp_select_cover").show(),
d.find(".js_weapp_select_step4").find(".js_weapp_select_cover_preview").css("background-image",'url("'+s+'")'),
d.find(".js_review-image-url").removeAttr("style"),d.find(".js_review-image-url").attr("src",s),
d.find(".js_after_preview_img").attr("src",s),d.find(".js_js_review-box").show();
var e,i,t,n,a,_,p,l=$(".js_review-image-url").width()/5*4;
e=l>$(".js_review-image-url").height()?$(".js_review-image-url").height()/4*5:$(".js_review-image-url").width(),
_=($(".js_review-image-url").width()-e)/2,p=($(".js_review-image-url").height()-l)/2,
i=_,t=p,n=$(".js_review-image-url").width()-_,a=$(".js_review-image-url").height()-p,
console.log(i,t,n,a),$(".js_review-image-url").Jcrop({
onChange:g,
onSelect:g,
setSelect:[i,t,n,a],
createHandles:["nw","ne","se","sw"],
aspectRatio:1.25,
boxWidth:$(".js_review-image-url").width(),
boxHeight:$(".js_review-image-url").height(),
allowSelect:!1,
allowResize:!0,
shade:!0,
bgOpacity:.5,
bgColor:"black"
},function(){
var e=this.getBounds();
m=e[0],f=e[1],h=this,$(".js_before_preview").hide(),$(".js_after_preview").show(),
console.log(h.tellSelect()),console.log(h.tellScaled());
var i=$(".js_after_preview").width()/h.tellSelect().w,t=$(".js_after_preview").height()/h.tellSelect().h;
$(".js_after_preview_img").css({
width:Math.round(i*m)+"px",
height:Math.round(t*f)+"px",
marginLeft:"-"+Math.round(i*h.tellSelect().x)+"px",
marginTop:"-"+Math.round(t*h.tellSelect().y)+"px"
}),$(".jcrop-handle",this.ui.selection).css({
width:"7px",
height:"7px"
});
});
},a.onerror=function(){
p.err("图片上传失败");
},a.src=s;
}
});
var u=function(){
a.uploadCdnFile({
container:"#weapp_select_upload",
multi:!1,
type:2,
fileSingleSizeLimit:2097152,
imageSize:!0,
onComplete:function(e,i,t,n){
var s=n.content,a=new Image;
a.onload=function(){
h&&h.destroy(),d.find("[name=imageUrl]").val(s),d.find(".js_weapp_select_step4").find(".js_weapp_select_cover").show(),
d.find(".js_weapp_select_step4").find(".js_weapp_select_cover_preview").css("background-image",'url("'+s+'")'),
d.find(".js_review-image-url").removeAttr("style"),d.find(".js_review-image-url").attr("src",s),
d.find(".js_after_preview_img").attr("src",s),d.find(".js_js_review-box").show();
var e,i,t,n,a,_,p,l=$(".js_review-image-url").width()/5*4;
e=l>$(".js_review-image-url").height()?$(".js_review-image-url").height()/4*5:$(".js_review-image-url").width(),
_=($(".js_review-image-url").width()-e)/2,p=($(".js_review-image-url").height()-l)/2,
i=_,t=p,n=$(".js_review-image-url").width()-_,a=$(".js_review-image-url").height()-p,
console.log(i,t,n,a),$(".js_review-image-url").Jcrop({
onChange:g,
onSelect:g,
setSelect:[i,t,n,a],
createHandles:["nw","ne","se","sw"],
aspectRatio:1.25,
boxWidth:$(".js_review-image-url").width(),
boxHeight:$(".js_review-image-url").height(),
allowSelect:!1,
allowResize:!0,
shade:!0,
bgOpacity:.5,
bgColor:"black"
},function(){
var e=this.getBounds();
m=e[0],f=e[1],h=this,$(".js_before_preview").hide(),$(".js_after_preview").show(),
console.log(h.tellSelect()),console.log(h.tellScaled());
var i=$(".js_after_preview").width()/h.tellSelect().w,t=$(".js_after_preview").height()/h.tellSelect().h;
$(".js_after_preview_img").css({
width:Math.round(i*m)+"px",
height:Math.round(t*f)+"px",
marginLeft:"-"+Math.round(i*h.tellSelect().x)+"px",
marginTop:"-"+Math.round(t*h.tellSelect().y)+"px"
}),$(".jcrop-handle",this.ui.selection).css({
width:"7px",
height:"7px"
});
});
},a.onerror=function(){
p.err("图片上传失败");
},a.src=s;
}
});
},v=function(){
a.uploadCdnFile({
container:"#js_weapp_link_image_upload",
multi:!1,
type:2,
fileSingleSizeLimit:2097152,
imageSize:!0,
onComplete:function(e,i,t,n){
var s=n.content;
d.find("[name=image]").val(s),d.find(".js_weapp_select_step4").find(".js_weapp_link_image_cover").show(),
d.find(".js_weapp_select_step4").find(".js_weapp_link_image_preview").css("background-image",'url("'+s+'")');
}
});
},x=function(){
d.find(".js_weapp_select_step1").show(),d.find(".js_weapp_select_step2").hide(),
d.find(".js_weapp_select_step4").hide(),w.setStep(1);
var e=d.find(".js_weapp_select_step1");
r||e.find(".js_weapp_select_next_step").addClass("btn_disabled");
var i=function(e){
if(e.find(".js_weapplink_loading").hide(),c.length){
$.each(c,function(e,i){
i.pic_url=i.pic_url||"http://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0";
}),e.find(".js_weapplink_hint_select").show(),e.find(".js_weapplink_list").html(wx.T(t,{
list:c
})).show();
var i=e.find(".js_weapplink_item_inner").click(function(){
i.find(".js_weapplink_select_mask").hide(),$(this).find(".js_weapplink_select_mask").show(),
r=$(this).data("appid");
for(var t=0;t<c.length;t++)c[t].appid===r&&(o=c[t]);
4==o.service_type?d.find(".js_weapp_select_step4 .js_weapp_type4").show():d.find(".js_weapp_select_step4 .js_weapp_type4").hide(),
e.find(".js_weapp_select_next_step").removeClass("btn_disabled");
}).each(function(){
r===$(this).data("appid")&&$(this).find(".js_weapplink_select_mask").show();
});
}else e.find(".js_weapplink_hint_none").show();
};
c?i(e,l):n.get({
url:"/advanced/operselfmenu?action=get_bind_wxopen_info"
},function(t){
return 0==t.base_resp.ret&&t.bind_info?(c=JSON.parse(t.bind_info).bind_list,void i(e,l)):(n.handleRet(t,{
id:"64524",
key:"2",
msg:"系统繁忙"
}),l());
});
},k=function(){
d.find(".js_weapp_select_step1").hide(),d.find(".js_weapp_select_step2").hide(),
d.find(".js_weapp_select_step4").show(),w.setStep(2);
var e=d.find(".js_weapp_select_step4");
console.log(o),e.find('[name="path"]').val(o.main_page),e.find(".js_name").text(o.nick_name),
o.image?(e.find(".js_weapp_display_way").eq(1).click(),e.find("[name=image]").val(o.image),
e.find(".js_weapp_link_image_cover").show(),e.find(".js_weapp_link_image_preview").css("background-image",'url("'+o.image+'")')):e.find("[name=content]").val(o.content||""),
d.find(".js_weapp_icon").attr("src",o.pic_url),d.find(".js_weapp_name").text(o.nick_name),
d.find(".js_weapp_card_title").text("");
};
d.find(".js_weapp_select_step4").find(".js_weapp_select_cover_remove").click(function(){
d.find("[name=imageUrl]").val(""),d.find(".js_weapp_select_step4").find(".js_weapp_select_cover").hide(),
d.find(".js_weapp_select_step4").find(".js_weapp_select_cover_preview").css("background-image","");
}),d.find(".js_weapp_select_step4").find(".js_weapp_select_cover").hide(),d.find(".js_weapp_select_step4").find(".js_weapp_link_image_remove").click(function(){
d.find("[name=image]").val(""),d.find(".js_weapp_select_step4").find(".js_weapp_link_image_cover").hide(),
d.find(".js_weapp_select_step4").find(".js_weapp_link_image_preview").css("background-image","");
}),d.find(".js_weapp_select_step4").find(".js_weapp_link_image_cover").hide(),d.find(".js_weapp_select_step1").find(".js_weapp_select_next_step").click(function(){
$(this).hasClass("btn_disabled")||k();
}),d.find("#js_weapp_card_title_input").keyup(function(){
$(".js_weapp_card_title").text($(this).val());
}),d.find(".js_weapp_select_step2").find(".js_weapp_select_prev_step").click(x),
d.find(".js_weapp_select_step2").find(".js_weapp_select_next_step").click(k),d.find(".js_weapp_select_step4").find(".js_weapp_select_prev_step").click(x),
d.find(".js_weapp_select_step4").find(".js_weapp_select_confirm").click(function(){
var e=d.find(".js_weapp_display_way:checked").val(),i=d.find("[name=path]").val(),t=this;
if("card"==e){
var n=d.find("[name=title]").val(),a=d.find("[name=imageUrl]").val();
if(!n)return p.err("标题不能为空");
if(n.length>35)return p.err("标题不能多于35个字");
if(!a)return p.err("请上传卡片图片");
}else if("text"==e){
var _=$.trim(d.find("[name=content]").val());
if(!_)return p.err("文字内容不能为空");
}else if("image"==e){
var c=d.find("[name=image]").val();
if(!c)return p.err("请上传图片");
}
return i||4==o.service_type?4==o.service_type&&i&&!/^\?/.test(i)?p.err("小程序路径参数请以?开头"):i.length>1024?p.err("小程序路径长度不能大于1024字符"):void("card"==e?($(t).btn(!1),
s.getUrl({
imgurl:a,
x1:j.c.x/$(".js_review-image-url").width(),
y1:j.c.y/$(".js_review-image-url").height(),
x2:j.c.x2/$(".js_review-image-url").width(),
y2:j.c.y2/$(".js_review-image-url").height(),
onerror:function(e){
$(t).btn(!0),console.error(e);
},
onsuccess:function(s){
console.info(s),$(t).btn(!0),d.popup("hide"),l(o.appid||r,o,{
title:n,
description:"",
path:i,
imageUrl:s.url,
image:c,
content:_,
type:e
});
}
})):(d.popup("hide"),l(o.appid||r,o,{
title:n,
description:"",
path:i,
imageUrl:a,
image:c,
content:_,
type:e
}))):p.err("小程序路径不能为空");
}),d.find(".js_weapp_select_step4").find(".js_weapp_display_way").checkbox({
multi:!1,
onChanged:function(e){
var i=d.find(".js_weapp_select_step4"),t=e.val();
i.find(".js_weapp_way").hide(),i.find(".js_weapp_"+t+"_way").show(),"image"==t?setTimeout(function(){
v(),v=function(){};
},100):"card"==t&&setTimeout(function(){
u(),u=function(){};
},100);
}
}),4==e.step?k():x();
};
return{
show:l
};
});define("common/wx/media/audioMusicDialog.js",["tpl/media/audioMusicDialog.html.js","tpl/media/plugin/audioItem.html.js","tpl/media/dialog/audiomsg_layout.html.js","common/wx/Cgi.js","biz_common/moment.js","common/wx/media/audio.js","common/wx/pagebar.js","common/wx/Tips.js"],function(e,i,a){
"use strict";
var t=e("tpl/media/audioMusicDialog.html.js"),n=e("tpl/media/plugin/audioItem.html.js"),o=e("tpl/media/dialog/audiomsg_layout.html.js"),s=e("common/wx/Cgi.js"),c=e("biz_common/moment.js"),l=e("common/wx/media/audio.js"),u=e("common/wx/pagebar.js"),d=e("common/wx/Tips.js"),r={
qqsearchInfo:{},
curSearchKey:"",
musicLoading:!1,
musicList:[],
musicPerpage:10,
audioObj:null
},_=10,m=null,f=function(e){
$("#audio_music_dialog_content").closest(".dialog").find(".dialog_ft .js_btn_p").eq(0).toggleClass("btn_disabled",e);
},h=[],g=function(e){
return e?/K$/i.test(e)?1*e.replace(/K$/i,""):/M$/i.test(e)?1024*e.replace(/M$/i,""):/G$/i.test(e)?1024*e.replace(/G$/i,"")*1024:0:0;
},p=function(e,i,a,t,o,d){
f(!0),s.get({
url:"/cgi-bin/filepage?action=select",
dataType:"json",
data:{
type:3,
begin:i,
count:a
},
mask:!1
},function(i){
if(0==i.base_resp.ret){
var a=i.page_info.file_item;
h=[],a.each(function(e){
if(1==e.trans_state){
var i={
is_aac:1*e.accept_aac?1:0,
name:e.name,
title:e.title||e.name,
update_time:c.unix(e.update_time).format("YYYY-MM-DD"),
play_length:e.play_length,
file_id:e.file_id,
voice_encode_fileid:e.voice_encode_fileid,
disabled:o||t&&e.play_length>6e4,
format_play_length:c.unix(e.play_length/1e3).format("mm:ss"),
low_size:1*(1*e.voice_low_media_size/1024).toFixed(2)||0,
high_size:1*(1*e.voice_high_media_size/1024).toFixed(2)||0,
source_size:g(e.size)
};
1*i.high_size===0&&1*i.source_size!==0&&(i.high_size=i.source_size),1*i.low_size===0&&1*i.source_size!==0&&(i.low_size=i.source_size),
h.push(i);
}
});
var m=wx.T(n,{
list:h
});
e.find(".jsPluginAudioList").html(m),e.find(".jsPluginAudioRadio").checkbox(),t&&$(".jsAudioTips").show(),
e.find(".jsPluginAudioPlay").each(function(e,i){
var a=h[e];
return a.selector="#"+$(i).attr("id"),a.source="file",r.audioObj=new l($.extend({},a,{
qqmusictpl:!0
})),r.audioObj;
}),d||new u({
container:".jsPluginAudioPage",
totalItemsNum:i.page_info.file_cnt.voice_cnt,
callback:function(i){
p(e,(i.currentPage-1)*_,_,t,o,!0);
}
});
}else s.show(i);
});
},b=null,v=function(e){
var i="";
if(60>e)i="00:"+(10>e?"0":"")+e;else{
var a=Math.floor(e/60),t=e-60*a;
i=(10>a?"0":"")+a+":"+(10>t?"0":"")+t;
}
return i;
},j=function(e){
e.find(".js_qqmusic_audioplay").each(function(){
var e=1*$(this).data("index"),i=r.musicList[e];
r.audioObj=new l({
selector:$(this),
qqmusicurl:i.playurl,
id:i.docID,
qqmusictpl:!0
});
}),e.find(".js_audio_music_item_radio").checkbox({
multi:!1,
onChanged:function(e){
var i=r.musicList[e.val()];
i&&(b={
musictype:i.vendor,
musicid:i.docID,
songname:i.songname,
singername:i.singername,
albumname:i.albumname||"",
url:i.playurl,
mid:1==i.vendor?i.otherID:"",
play_length:i.duration,
albumurl:i.picurl,
albumid:i.albumID||"",
otherid:i.otherID,
jumpurlkey:i.jumpurlkey
});
}
});
},y=function(e){
e&&(r.qqsearchInfo[encodeURIComponent(e)]={
hasReport:!1,
hasRetData:!1,
hasSelected:!1
});
},w=function(e){
var i=encodeURIComponent(e);
return r.qqsearchInfo[i]?r.qqsearchInfo[i]:null;
},k=function(e){
var i=encodeURIComponent(e);
r.qqsearchInfo.hasOwnProperty(i)&&delete r.qqsearchInfo[i];
},x=function(){
var e=r.qqsearchInfo;
if(!m){
r.curSearchKey="",r.musicLoading=!1;
var i=[],a=0,t=0,n=0;
for(var o in e)e[o].hasReport===!0?delete e[o]:e[o].hasRetData===!0&&e[o].hasSelected===!0?(a+=1,
t+=1,e[o].hasReport=!0,delete e[o]):e[o].hasRetData===!0&&e[o].hasSelected===!1&&(a+=1,
n+=1,e[o].hasReport=!0,delete e[o]);
a>0&&i.push("67292_18_"+a),t>0&&i.push("67292_21_"+t),n>0&&i.push("67292_23_"+n),
i&&z(i.join(";"));
}
},C=function(e){
m&&e&&(r.musicLoading=!0,e.find(".js_music_loading").show(),e.find("#dialog_audio_container").hide(),
f(!0),b={});
},I=function(e){
m&&e&&(r.musicLoading=!1,e.find(".js_music_loading").hide(),e.find("#dialog_audio_container").show());
},q=function(){
return r.musicLoading;
},z=function(e){
var i=new Image;
i.src="//mp.weixin.qq.com/mp/jsmonitor?idkey="+e+"&t="+Math.random();
},D=function(e){
return 500>=e?"67292_25_1":e>500&&1e3>=e?"67292_27_1":e>1e3&&2e3>=e?"67292_29_1":e>2e3&&5e3>=e?"67292_31_1":e>5e3?"67292_33_1":void 0;
},P=function(e){
r.musicPageBar&&r.musicPageBar.destroy();
var i=e.nextOffset;
r.musicPageBar=new u({
container:e.$dom.find(".js_music_pagebar"),
perPage:r.musicPerpage,
initShowPage:Math.floor(i/r.musicPerpage),
totalItemsNum:e.total,
first:!1,
last:!1,
isSimple:!0,
callback:function(i){
R(e.$dom,{
keyword:e.searchKey,
offset:(i.currentPage-1)*r.musicPerpage,
searchId:e.searchId
});
}
});
},K=function(e){
if(!m)return void x();
var i="";
0==e.code||e.msg?0!=e.code||e.list&&0!=e.list.length||e.msg||(i="暂无搜索结果"):i="系统繁忙，请稍后再试",
r.musicList=e.list||[];
for(var a=0,t=r.musicList.length;t>a;a++){
var n=r.musicList[a];
n.duration_str=v(n.duration),n.singername=($("<div>").html(n.singername).html()||"").html(!1),
n.songname=($("<div>").html(n.songname).html()||"").html(!1),n.albumname=($("<div>").html(n.albumname).html()||"").html(!1),
n.albumname&&(n.singername=n.singername+" - "+n.albumname),n.vendor_str=1*n.vendor==2?"酷狗音乐":"QQ音乐";
}
b={},e.$dom.find("#dialog_audio_container").html(wx.T(o,{
list:r.musicList,
msg:i
})),0==e.code&&r.musicList.length>0&&(j(e.$dom),P({
$dom:e.$dom,
total:e.total,
nextOffset:e.nextOffset,
searchKey:e.searchKey,
searchId:e.searchId
}));
},R=function(e,i){
if(!q()){
C(e);
var a=i.keyword||"";
r.curSearchKey=a,w(a)||y(a);
var t=+new Date;
s.get({
url:"/cgi-bin/searchmpmusic?",
dataType:"json",
data:{
query:a,
offset:i.offset||0,
size:r.musicPerpage,
search_id:i.searchId||""
}
},{
done:function(i){
I(e);
var n=new Date-t,o="67292_13_1;67292_14_1;"+D(n),s=w(a);
if(s.hasReport===!1&&(i&&i.base_resp&&0==i.base_resp.ret&&i.count>0?s.hasRetData=!0:(s.hasRetData=!1,
s.hasReport=!0,o+=";67292_18_1;67292_19_1",k(a))),z(o),i&&i.base_resp&&0==i.base_resp.ret)K({
code:0,
list:i.items||[],
total:1*i.total_count,
nextOffset:i.offset,
searchKey:a,
$dom:e,
searchId:i.search_id
});else{
var c="";
i&&i.base_resp&&200013==i.base_resp.ret&&(c="操作太频繁，请稍后再试"),K({
msg:c,
code:-1,
searchKey:a,
$dom:e
});
}
},
fail:function(){
I(e),r.curSearchKey="";
var i=new Date-t,n="67292_13_1;67292_16_1;"+D(i);
z(n),K({
code:-1,
searchKey:a,
$dom:e
});
}
});
}
},O={
show:function(e){
if(!m){
var i=wx.T(t,e);
m=$(i).popup({
className:"align_edge audio_dialog js_audio_music_dialog",
width:"960",
title:"选择音频",
buttons:[{
text:"确定",
click:function(){
var i=this,t=O.getCurrentValue();
if(t){
var n=a.closest(".js_audio_music_dialog").find(".js_btn_p").eq(0);
if(n.hasClass("btn_loading"))return;
if(n.btn(0),"audio"===t.type)e.onOK&&e.onOK.call(m,t),m=null,x(),r.audioObj.stopCur(),
i.remove();else{
if(r.curSearchKey){
var o=w(r.curSearchKey);
o&&o.hasReport===!1&&o.hasRetData===!0&&(o.hasSelected=!0);
}
e.onOK&&e.onOK.call(m,t),m=null,x(),r.audioObj.stopCur(),i.remove();
}
}else d.err("请选择需要插入的语音或音乐");
},
type:"primary"
},{
text:"取消",
click:function(){
m=null,x(),this.remove(),r.audioObj.stopCur(),e.onCancel&&e.onCancel.call(m);
}
}],
onHide:function(){
m=null,x(),this.remove(),r.audioObj.stopCur(),e.onCancel&&e.onCancel.call(m);
}
});
var a=$("#audio_music_dialog_content");
if(f(!0),a.on("change","input.js_audio_music_item_radio",function(){
f(!1);
}),e.allowAudio&&(a.find(".jsPluginAudioNew").click(function(){
window.open(wx.url("/cgi-bin/operate_voice?oper=voice_get&t=media/audio_add"),"_blank");
}),p(a,0,_,e.hasAudioLengthLimit,e.audioDisabled)),e.allowMusic){
b={};
var n=a.find("#searchDiv");
n.find("#keyInput").keydown(function(e){
var i="which"in e?e.which:e.keyCode;
13==i&&n.find("#searchBt").trigger("click");
}),n.find("#searchCloseBt").click(function(){
n.find("#keyInput").val(""),r.curSearchKey="",a.find("#dialog_audio_container").html(""),
I(a),b={},f(!0);
}),n.find("#searchBt").click(function(){
var e=n.find("#keyInput").val();
e.length>0?R(a,{
keyword:e,
offset:0
}):d.err("请输入搜索条件");
}),n.find("#reload").click(function(){
n.find("#searchCloseBt").trigger("click");
});
}
a.find(".js_audio_tab_btn").click(O.selectAudio),a.find(".js_music_tab_btn").click(O.selectMusic),
e.allowAudio?O.selectAudio():e.allowMusic&&O.selectMusic();
}
},
selectAudio:function(){
var e=$("#audio_music_dialog_content");
e.find(".js_audio_block").show(),e.find(".js_music_block").hide(),e.find(".js_audio_tab_btn").addClass("selected"),
e.find(".js_music_tab_btn").removeClass("selected"),f(!O.getCurrentValue());
},
selectMusic:function(){
var e=$("#audio_music_dialog_content");
e.find(".js_music_block").show(),e.find(".js_audio_block").hide(),e.find(".js_music_tab_btn").addClass("selected"),
e.find(".js_audio_tab_btn").removeClass("selected"),f(!O.getCurrentValue());
},
getCurrentValue:function(){
var e=$("#audio_music_dialog_content");
if(e.find(".js_audio_tab_btn").hasClass("selected")){
var i=e.find(".jsPluginAudioRadio[checked=checked]").data("index"),a=h[i];
if(!a)return;
return a={
type:"audio",
is_aac:a.is_aac,
name:a.name,
title:a.title,
update_time:a.update_time,
play_length:a.play_length,
file_id:a.file_id,
voice_encode_fileid:a.voice_encode_fileid,
duration:a.format_play_length,
format_play_length:a.format_play_length,
low_size:a.low_size,
high_size:a.high_size,
source_size:a.source_size
};
}
if(e.find(".js_music_tab_btn").hasClass("selected")){
if("undefined"==typeof b.musicid)return;
return b.type="music",b;
}
}
};
a.exports=O;
});define("tpl/mpEditor/plugin/link_popup.html.js",[],function(){
return'{if needBreak}\n<div style="height:5px;display:none"></div>\n{/if}\n<div class="js_link_popup edui_mask_edit_group with_line">\n    <a class="edui_mask_edit_meta" target="_blank" href="{url}" {if !isWeapp}title="{url}"{/if}>{txt}</a>\n    <div class="primary edui_mask_edit_meta no_extra edui-clickable" \n        {if !isWeapp}onclick="$$._execCommandAndHide(\'link\');"{else}onclick="$$._execCommandAndHide(\'insertweapp\', 4);"{/if}>\n        <div class="edui_mask_edit_meta_inner">\n        修改        </div>\n    </div>\n	<div class="primary edui_mask_edit_meta edui-clickable" onclick="$$._execCommandAndHide(\'unlink\');">\n        <div class="edui_mask_edit_meta_inner">\n        清除        </div>\n    </div>\n</div>\n';
});