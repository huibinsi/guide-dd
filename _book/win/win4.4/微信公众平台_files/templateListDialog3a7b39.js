define("common/wx/mpEditor/plugin/checkText.js",[],function(){
"use strict";
function e(){}
function t(e,t,d){
var o=[{
value:"？",
escape:!1
},{
value:"！",
escape:!1
},{
value:"。",
escape:!1
},{
value:"：",
escape:!1
},{
value:"；",
escape:!1
},{
value:"?",
escape:!0
},{
value:"!",
escape:!0
},{
value:":",
escape:!0
},{
value:";",
escape:!0
}],n="mpchecktext",a="<"+n+">###</"+n+">",c=document.createElement(n);
c.innerHTML="###";
for(var s=(new RegExp("("+a+")+","g"),new RegExp(a+"$")),u=e.nodeValue,l=0,h=o.length;h>l;l++){
var p,v=o[l];
p=v.escape?new RegExp("\\"+v.value,"g"):new RegExp(v.value,"g"),u=u.replace(p,v.value+a);
}
if(u!==e.nodeValue){
!s.test(u)&&i(e,t,d)&&(u+=a);
var f=document.createElement("div");
f.innerHTML=u;
for(var m=document.createDocumentFragment();f.childNodes.length>0;)m.appendChild(f.childNodes[0]);
r(m,e),e.parentNode.removeChild(e);
}else i(e,t,d)&&r(c.cloneNode(!0),e);
}
function r(e,t){
var r=t.parentNode;
r&&(r.lastChild===t?r.appendChild(e):r.insertBefore(e,t.nextSibling));
}
function i(e,t,i){
var d=e.parentNode,o=t.parentNode,n="mpchecktexttemp",a=document.createElement(n),c=a.cloneNode(!0);
r(a,e),o.insertBefore(c,t);
var s=i.innerHTML;
d.removeChild(a),o.removeChild(c);
var u=!1,l=new RegExp("<"+n+"></"+n+">(.*)<"+n+"></"+n+">"),h=s.match(l);
if(h&&h[1]){
var p={
p:1,
section:1,
iframe:1,
h1:1,
h2:1,
h3:1,
h4:1,
h5:1,
h6:1,
hr:1,
table:1,
ul:1,
div:1,
dl:1,
ol:1,
pre:1,
form:1,
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
address:1,
blockquote:1,
center:1,
dir:1,
fieldset:1,
isindex:1,
menu:1,
noframes:1
};
for(var v in p)if(p.hasOwnProperty(v)){
var f=new RegExp("(<"+v+">)|(<"+v+" [^>]*>)"),m=new RegExp("</"+v+">");
if(f.test(h[1])||m.test(h[1])){
u=!0;
break;
}
}
}
return u;
}
var d={
hasCheckWalker:!1,
supportWalker:!1,
canCheckTime:window.location.href.indexOf("&_debug=1")>0||parseInt(100*Math.random())<10?!0:!1,
hasCheckTime:!1
};
return e.prototype={
getName:function(){
return"checktext";
},
addListener:function(){
this.ueditor=this.editor.getUeditor(),this.uiUtils=UE.ui.uiUtils,this.domUtils=this.editor.getDomUtils(),
this.checkWalker();
},
checkWalker:function(){
if(!d.hasCheckWalker&&(d.hasCheckWalker=!0,this.editor.fireEvent("reportAddNum",67292,35,1),
"function"==typeof document.createTreeWalker&&window.NodeFilter&&window.NodeFilter.SHOW_ALL&&window.NodeFilter.SHOW_TEXT&&window.NodeFilter.FILTER_ACCEPT&&window.NodeFilter.FILTER_REJECT)){
var e=document.createElement("div");
e.style.display="none",e.innerHTML='<div id="test_walker_accept"></div>a<div id="test_walker_reject"></div>';
var t=[],r=[];
try{
for(var i=document.createTreeWalker(e,window.NodeFilter.SHOW_TEXT,{
acceptNode:function(){
return window.NodeFilter.FILTER_ACCEPT;
}
},!1),o=document.createTreeWalker(e,window.NodeFilter.SHOW_ALL,{
acceptNode:function(e){
return 1==e.nodeType&&"test_walker_accept"==e.id?window.NodeFilter.FILTER_ACCEPT:window.NodeFilter.FILTER_REJECT;
}
},!1);i.nextNode();)t.push(i.currentNode);
for(;o.nextNode();)r.push(o.currentNode);
}catch(n){}
1==t.length&&"a"===t[0].nodeValue&&1==r.length&&"test_walker_accept"===r[0].id&&(this.editor.fireEvent("reportAddNum",67292,36,1),
d.supportWalker=!0);
}
},
beforeSetContent:function(e){
if(d.canCheckTime&&d.supportWalker&&!d.hasCheckTime){
var r=this.domUtils,i=!1,o=+new Date,n=$("<div></div>").html(e)[0],a=n.getElementsByTagName("*").length,c=0;
if(a>0){
d.hasCheckTime=!0;
try{
for(var s=document.createTreeWalker(n,window.NodeFilter.SHOW_TEXT,{
acceptNode:function(e){
var t=e.nodeValue.replace(/\s/g,"").replace(r.fillCharReg,"");
return t?window.NodeFilter.FILTER_ACCEPT:window.NodeFilter.FILTER_REJECT;
}
},!1),u=[];s.nextNode();)u.push(s.currentNode);
c=u.length;
for(var l=0,h=u.length-1;h>l;l++)t(u[l],u[l+1],n);
}catch(p){
i=!0;
}
if(this.editor.fireEvent("reportAddNum",67292,38,1),i)this.editor.fireEvent("reportAddNum",67292,85,1);else{
this.editor.fireEvent("reportAddNum",67292,83,1);
var v=+new Date-o,f=c+a;
switch(!0){
case f>0&&100>=f:
this.editor.fireEvent("reportAddNum",67292,39,1),this.editor.fireEvent("reportAddNum",67292,41,v);
break;

case f>100&&200>=f:
this.editor.fireEvent("reportAddNum",67292,43,1),this.editor.fireEvent("reportAddNum",67292,45,v);
break;

case f>200&&300>=f:
this.editor.fireEvent("reportAddNum",67292,47,1),this.editor.fireEvent("reportAddNum",67292,49,v);
break;

case f>300&&400>=f:
this.editor.fireEvent("reportAddNum",67292,51,1),this.editor.fireEvent("reportAddNum",67292,53,v);
break;

case f>400&&500>=f:
this.editor.fireEvent("reportAddNum",67292,55,1),this.editor.fireEvent("reportAddNum",67292,57,v);
break;

case f>500&&600>=f:
this.editor.fireEvent("reportAddNum",67292,59,1),this.editor.fireEvent("reportAddNum",67292,61,v);
break;

case f>600&&700>=f:
this.editor.fireEvent("reportAddNum",67292,63,1),this.editor.fireEvent("reportAddNum",67292,65,v);
break;

case f>700&&800>=f:
this.editor.fireEvent("reportAddNum",67292,67,1),this.editor.fireEvent("reportAddNum",67292,69,v);
break;

case f>800&&900>=f:
this.editor.fireEvent("reportAddNum",67292,71,1),this.editor.fireEvent("reportAddNum",67292,73,v);
break;

case f>900&&1e3>=f:
this.editor.fireEvent("reportAddNum",67292,75,1),this.editor.fireEvent("reportAddNum",67292,77,v);
break;

case f>1e3:
this.editor.fireEvent("reportAddNum",67292,79,1),this.editor.fireEvent("reportAddNum",67292,81,v);
}
}
}
}
return e;
}
},e;
});define("common/wx/mpEditor/plugin/cropimg.js",["common/lib/jquery.Jcrop.js","media/report.js","common/wx/mpEditor/utils.js","common/wx/dialog.js","common/wx/media/imageDialog.js","common/wx/Tips.js","common/wx/mpEditor/common/cropImgCgi.js","common/wx/mpEditor/plugin/wheelEventAdapter.js","common/wx/media/cropimg.js","tpl/mpEditor/plugin/crop_img.html.js"],function(t){
"use strict";
function e(t){
this._o={
coverWheelScroll:!1,
ratio:1,
selectRatio:0,
wheelStep:.2,
toolbarOffsetTop:10
},this._extend(t),this.uiUtils=null,this.ueditor=null,this.editor=null,this.domUtils=null,
this.event={};
}
t("common/lib/jquery.Jcrop.js");
var o=t("media/report.js"),i=t("common/wx/mpEditor/utils.js"),r=t("common/wx/dialog.js"),n=t("common/wx/media/imageDialog.js"),a=t("common/wx/Tips.js"),s=t("common/wx/mpEditor/common/cropImgCgi.js"),c=t("common/wx/mpEditor/plugin/wheelEventAdapter.js"),p=(t("common/wx/media/cropimg.js"),
t("tpl/mpEditor/plugin/crop_img.html.js"));
return e.prototype={
_extend:function(t){
for(var e in t)this._o[e]=t[e];
},
getName:function(){
return"cropimg";
},
beforeEditorDestory:function(){
this.destory();
},
beforeDefineCommand:function(t,e){
this.editor=e,this.ueditor=t,this.uiUtils=UE.ui.uiUtils,this.domUtils=e.getDomUtils(),
this.initCacheData(),this.defineEvent();
},
initCacheData:function(){
this._g={
fireAdjustHeight:!1,
replaceOpt:{},
type:"crop_img",
targetUrl:"",
minZoomPx:20,
maxZoomPx:3e3,
minZoom:1,
maxZoom:1,
unchangeableRatio:!1,
commiting:!1,
resizerDragId:-1,
resizerMouseStartPos:{
x:0,
y:0
},
trackMouseStartPos:{
x:0,
y:0
},
curSelectionPos:{},
curZoom:1,
target:null,
_ImgCropper:null,
$cropWrp:null,
$cancelBtn:null,
$okBtn:null,
hasRecoverTarget:!1,
oriImgW:0,
oriImgH:0
};
},
defineEvent:function(){
var t=this,e=this._o,i=(this.domUtils,100);
this.editor.getBrowser().mac&&(i=30),this.event={
cancelCrop:function(){
var e=t._g.replaceOpt,i=t.uiUtils.getClientRect(t._g.target);
t.recoverTarget({
copyright_status:e.copyright_status,
url:e.oriSrc,
scaledW:t.px(e.startW),
scaledH:t.px(e.startH),
selectionX1:e.selectionX1,
selectionY1:e.selectionY1,
selectionX2:e.selectionX2,
selectionY2:e.selectionY2
});
var r=t.uiUtils.getClientRect(t._g.targetClone),n=Math.max(i.left-r.left,0),a=Math.max(i.top-r.top,0),s=e.selectionX2-e.selectionX1+n,c=e.selectionY2-e.selectionY1+a;
t._g.targetClone.setAttribute("data-cropselx1",t.px(n)),t._g.targetClone.setAttribute("data-cropselx2",t.px(s)),
t._g.targetClone.setAttribute("data-cropsely1",t.px(a)),t._g.targetClone.setAttribute("data-cropsely2",t.px(c)),
t.destory(),setTimeout(function(){
var e=t.editor.ueditor.eventLog;
if(e&&e.length>0){
for(var i=!1,r=0,n=e.length;n>r;r++)if("syn_draft_start"==e[r].name){
i=!0;
break;
}
if(i){
var a="";
try{
a=JSON.stringify(e),a=["67292_114_1",";uin:"+wx.data.uin,";url:"+window.location.href,";log:"+a].join("");
}catch(s){}
o.logReport("67292_114_1",a,"ajax");
}
}
t.editor.changeUeditorConf({
key:["debug"],
value:[!1]
});
},2e3);
},
destory:function(e){
t.destory(e);
},
mousewheelEvent:function(o){
var i=c.eventAdapter(o);
return i&&i.myWheel?(t.setZoom(t._g.curZoom-e.wheelStep*i.myWheel),o.stopPropagation?(o.stopPropagation(),
o.preventDefault()):o.cancelBubble=!0,!1):void 0;
},
updateCoverPos:function(){
t.showCover();
},
dragBarEvent:function(e){
switch(e.type){
case"mousedown":
t.updateDotPos(e.pageX),t.bindEventInterface({
type:"domUtils",
dom:document,
eventName:"mousemove",
fun:t.event.dragBarMoveEvent
}),t.bindEventInterface({
type:"domUtils",
dom:document,
eventName:"mouseup",
fun:t.event.dragBarEvent
});
break;

case"mouseup":
t.updateDotPos(e.pageX),t.unbindSpecifyEvent({
type:"domUtils",
dom:document,
eventName:"mousemove",
fun:t.event.dragBarMoveEvent
}),t.unbindSpecifyEvent({
type:"domUtils",
dom:document,
eventName:"mouseup",
fun:t.event.dragBarEvent
});
}
},
dragBarMoveEvent:function(e){
t.updateDotPos(e.pageX),t.removeDocRange();
},
updateCropWrpPos:function(){
t.attachTo();
},
trackEvent:function(e){
switch(e.type){
case"mousedown":
var o=t._g,i=e.target||e.srcElement;
-1==o.resizerDragId&&-1==i.className.indexOf("edui-editor-imagescale-hand")&&(o.trackMouseStartPos.x=e.pageX,
o.trackMouseStartPos.y=e.pageY,t.bindEventInterface({
type:"domUtils",
dom:document,
eventName:"mousemove",
fun:t.event.trackMoveEvent
}),t.bindEventInterface({
type:"domUtils",
dom:document,
eventName:"mouseup",
fun:t.event.trackEvent
}));
break;

case"mouseup":
var o=t._g;
-1==o.resizerDragId&&t.updateCropImgPos({
x:e.pageX-o.trackMouseStartPos.x,
y:e.pageY-o.trackMouseStartPos.y
}),t.unbindSpecifyEvent({
type:"domUtils",
dom:document,
eventName:"mousemove",
fun:t.event.trackMoveEvent
}),t.unbindSpecifyEvent({
type:"domUtils",
dom:document,
eventName:"mouseup",
fun:t.event.trackEvent
});
}
},
trackMoveEvent:function(e){
var o=t._g;
-1==o.resizerDragId&&(t.updateCropImgPos({
x:e.pageX-o.trackMouseStartPos.x,
y:e.pageY-o.trackMouseStartPos.y
}),o.trackMouseStartPos.x=e.pageX,o.trackMouseStartPos.y=e.pageY,t.removeDocRange());
},
stopEvent:function(t){
return t.stopPropagation?(t.stopPropagation(),t.preventDefault()):t.cancelBubble=!0,
!1;
},
editorScrollEvent:function(){
t.attachTo();
},
coverWheelEvent:function(e){
var o=c.eventAdapter(e);
if(o&&o.myWheel){
var r=t.ueditor.window;
r.scrollTo(0,r.scrollY+o.myWheel*i),t.attachTo();
}
},
resizerEvent:function(e){
switch(e.type){
case"mousedown":
var o=t._g,i=e.target||e.srcElement;
-1==o.resizerDragId&&-1!=i.className.indexOf("edui-editor-imagescale-hand")&&(o.resizerDragId=i.className.slice(-1),
o.resizerMouseStartPos.x=e.pageX,o.resizerMouseStartPos.y=e.pageY,t.bindEventInterface({
type:"domUtils",
dom:document,
eventName:"mousemove",
fun:t.event.resizerMoveEvent
}),t.bindEventInterface({
type:"domUtils",
dom:document,
eventName:"mouseup",
fun:t.event.resizerEvent
}));
break;

case"mouseup":
var o=t._g;
-1!=o.resizerDragId&&(t.updateContainerStyle(o.resizerDragId,{
x:e.pageX-o.resizerMouseStartPos.x,
y:e.pageY-o.resizerMouseStartPos.y
}),o.resizerDragId=-1),t.unbindSpecifyEvent({
type:"domUtils",
dom:document,
eventName:"mousemove",
fun:t.event.resizerMoveEvent
}),t.unbindSpecifyEvent({
type:"domUtils",
dom:document,
eventName:"mouseup",
fun:t.event.resizerEvent
});
}
},
resizerMoveEvent:function(e){
var o=t._g;
-1!=o.resizerDragId&&(t.updateContainerStyle(o.resizerDragId,{
x:e.pageX-o.resizerMouseStartPos.x,
y:e.pageY-o.resizerMouseStartPos.y
}),t.removeDocRange(),o.resizerMouseStartPos.x=e.pageX,o.resizerMouseStartPos.y=e.pageY);
},
complete:function(e){
if(t._g.commiting!==!0){
t._g.commiting=!0,t._g.$okBtn.btn(!1);
var o=t._g._ImgCropper.tellSelect(),i=t._g._ImgCropper.getScaleFactor(),r=t._g.cropUi.botImg.width()*i[0],n=t._g.cropUi.botImg.height()*i[1];
if(s.getUrl({
imgurl:t._g.targetUrl,
x1:o.x/r,
y1:o.y/n,
x2:o.x2/r,
y2:o.y2/n,
onerror:function(){
t._g._ImgCropper&&(a.err("系统繁忙，请稍后再试"),t._g.commiting=!1,t._g.$okBtn.btn(!0));
},
onsuccess:function(e){
if(t._g._ImgCropper){
t._g.commiting=!1,t._g.$okBtn.btn(!0);
var a=o.x2-o.x,s=o.y2-o.y;
t.recoverTarget({
oriSrc:t._g.targetUrl,
url:e.url,
w:t.px(r),
h:t.px(n),
x1:o.x,
x2:o.x2,
y1:o.y,
y2:o.y2,
scaledW:t.px(a/i[0]),
scaledH:t.px(s/i[1])
}),t.destory();
}
}
}),e&&e.preventDefault){
var c=e.target||e.srcElement;
c&&c.ownerDocument===document&&e.preventDefault();
}
}
}
};
},
initCropFromReplace:function(t,e,o){
var i=this,r=t.getAttribute("data-cropselx2");
if(r){
i._g.type="img_replace";
var n=t.getAttribute("data-cropselx1"),a=t.getAttribute("data-cropsely1"),s=t.getAttribute("data-cropsely2");
i.getStartWH({
targetW:r-n,
targetH:s-a,
url:t.src,
onSuccess:function(e){
var o=$(t).height(),c=i.domUtils.getXY(t),p=i.ueditor.body.lastChild,l=i.domUtils.getXY(p),m=$(p).height(),g=e.startH-o-(l.y+m-(c.y+o))+100;
if(g>0){
var d=$(i.ueditor.body).height();
i.ueditor.setHeight(d+g,!0),i._g.fireAdjustHeight=!0;
}
i.initCropOptions(t,{
oriSrc:t.src,
startW:e.startW,
startH:e.startH,
selectionX1:n,
selectionY1:a,
selectionX2:r,
selectionY2:s
});
}
});
}else i.initCropOptions(t,e,o);
},
initCropOptions:function(t,e,o){
var i=this,r=this.editor;
r.fireEvent("start_crop_img"),$(document.body).addClass("img_editing"),r.disableToolbar();
try{
i.ueditor.selection.getNative().removeAllRanges();
}catch(n){}
if(o)for(var a in o)"undefined"!=typeof i._g[a]&&(i._g[a]=o[a]);
var s,c,p,l,m,g,d,h,u,x,f;
if(e&&e.oriSrc?(i._g.replaceOpt=e,s=e.oriSrc,g=i.px(e.selectionX1),d=i.px(e.selectionX2),
h=i.px(e.selectionY1),u=i.px(e.selectionY2),x=i.px(e.startW),f=i.px(e.startH)):(s=t.getAttribute("data-croporisrc"),
c=t.getAttribute("data-cropx1"),p=t.getAttribute("data-cropy1"),l=t.getAttribute("data-cropx2"),
m=t.getAttribute("data-cropy2")),s){
var v=new Image;
v.onload=function(){
this.onload=null,this.onerror=null,i.init(t,{
oriSrc:s,
trueW:this.naturalWidth||this.width,
trueH:this.naturalHeight||this.height,
x1:c,
x2:l,
y1:p,
y2:m,
selectionX1:g,
selectionX2:d,
selectionY1:h,
selectionY2:u,
startW:x,
startH:f
});
},v.onerror=function(){
this.onload=null,this.onerror=null,i.init(t);
},v.src=s;
}else i.init(t);
},
addListener:function(t){
var e=this;
t.addListener("crop_img",function(t,o,i,n){
o&&o.ownerDocument&&(o.ownerDocument.defaultView||o.ownerDocument.parentWindow)&&("2"==o.getAttribute("data-copyright")?r.show({
title:"温馨提示",
type:"info",
msg:"裁剪原创图片会使原创标志失效，确定裁剪？",
buttons:[{
text:"确定",
click:function(){
e.initCropFromReplace(o,i,n),this.remove();
}
},{
text:"取消",
type:"normal",
click:function(){
this.remove();
}
}]
}):e.initCropFromReplace(o,i,n));
}),t.addListener("img_replace",function(t,o){
e.editor.changeUeditorConf({
key:["debug"],
value:[!0]
}),e.showImgDialog(o);
});
},
init:function(t,e){
{
var o=this._g;
this._o;
}
o.target=t,o.targetClone=t.cloneNode(!0),o.targetUrl=e&&e.oriSrc?e.oriSrc:o.target.src,
this.setOriWh(e),this.setMinMaxZoom(),o.$cropWrp=$("<div>").html(wx.T(p,{
url:o.target.src,
zIndex:this.ueditor.options.zIndex,
type:o.type
})).find(".js_crop_img_wrap"),this.ueditor.ui.getDom().appendChild(o.$cropWrp[0]),
o.$cropArea=o.$cropWrp.find(".js_crop_area"),this.initCrop(e),this.hideTarget();
},
hideTarget:function(){
$(this._g.target).css({
visibility:"hidden"
});
},
getStartWH:function(t){
var e=t.url,o=t.targetW,i=t.targetH,r=new Image;
r.onload=function(){
this.onload=null,this.onerror=null;
var e=this.naturalWidth||this.width,r=this.naturalHeight||this.height,n=o,a=r/e*n;
i>a&&(a=i,n=e/r*a),"function"==typeof t.onSuccess&&t.onSuccess({
startH:a,
startW:n
});
},r.onerror=function(){
this.onload=null,this.onerror=null,"function"==typeof t.onError&&t.onError();
},r.src=e;
},
showImgDialog:function(t){
var e=this;
this.editor.fireEvent("handleWinScroll",!1),this.editor.fireEvent("before_show_img_replace_dialog"),
n({
maxSelect:1,
doselected:!0,
uploadGroupId:3,
completeUploadMinSelectNum:1,
onOK:function(o){
var i=this,r=$(t),n=r.width(),s=r.height();
e.getStartWH({
targetW:n,
targetH:s,
url:o[0].url,
onError:function(){
a.err("图片加载失败，请稍后再试");
},
onSuccess:function(r){
i.destroy(),e.editor.fireEvent("handleWinScroll",!0),e.editor.fireEvent("after_close_show_img_replace_dialog"),
e._g.target=t,e._g.targetClone=e._g.target.cloneNode(!0),e._g.replaceOpt={
copyright_status:o[0].copyright_status,
oriSrc:o[0].url,
startW:e.px(r.startW),
startH:e.px(r.startH),
selectionX1:0,
selectionY1:0,
selectionX2:n,
selectionY2:s
},e.event.cancelCrop();
}
});
},
onHide:function(){
e.editor.changeUeditorConf({
key:["debug"],
value:[!1]
}),this.destroy(),e.editor.fireEvent("handleWinScroll",!0),e.editor.fireEvent("after_close_show_img_replace_dialog");
}
});
},
updateContainerStyle:function(t,e){
var o=this._g,i=(this._o,o.cropUi.botImg),r=i.width(),n=i.height(),a=this.px(parseFloat(i[0].style.left||0)),s=this.px(parseFloat(i[0].style.top||0)),c=a,p=s,l=c+r,m=p+n,g=c,d=p,h=l,u=m,x=1,f=0,v=0,y=this._g.curSelectionPos;
switch(1*t){
case 0:
g=this.px(c+e.x),g>y.x&&(g=y.x),x=Math.max(Math.min(o.maxZoom,(h-g)/o.oriImgW),o.minZoom),
g=this.px(h-x*o.oriImgW),d=this.px(u-o.oriImgH/o.oriImgW*(h-g)),d>y.y&&(d=y.y),x=Math.max(Math.min(o.maxZoom,(u-d)/o.oriImgH),o.minZoom),
d=this.px(u-x*o.oriImgH),g=this.px(h-o.oriImgW/o.oriImgH*(u-d));
break;

case 2:
h=this.px(l+e.x),h<y.x2&&(h=y.x2),x=Math.max(Math.min(o.maxZoom,(h-g)/o.oriImgW),o.minZoom),
h=this.px(g+x*o.oriImgW),d=this.px(u-o.oriImgH/o.oriImgW*(h-g)),d>y.y&&(d=y.y),x=Math.max(Math.min(o.maxZoom,(u-d)/o.oriImgH),o.minZoom),
d=this.px(u-x*o.oriImgH),h=this.px(g+o.oriImgW/o.oriImgH*(u-d));
break;

case 5:
g=this.px(c+e.x),g>y.x&&(g=y.x),x=Math.max(Math.min(o.maxZoom,(h-g)/o.oriImgW),o.minZoom),
g=this.px(h-x*o.oriImgW),u=this.px(d+o.oriImgH/o.oriImgW*(h-g)),u<y.y2&&(u=y.y2),
x=Math.max(Math.min(o.maxZoom,(u-d)/o.oriImgH),o.minZoom),u=this.px(d+x*o.oriImgH),
g=this.px(h-o.oriImgW/o.oriImgH*(u-d));
break;

case 7:
h=this.px(l+e.x),h<y.x2&&(h=y.x2),x=Math.max(Math.min(o.maxZoom,(h-g)/o.oriImgW),o.minZoom),
h=this.px(g+x*o.oriImgW),u=this.px(d+o.oriImgH/o.oriImgW*(h-g)),u<y.y2&&(u=y.y2),
x=Math.max(Math.min(o.maxZoom,(u-d)/o.oriImgH),o.minZoom),u=this.px(d+x*o.oriImgH),
h=this.px(g+o.oriImgW/o.oriImgH*(u-d));
}
f=g-c,v=d-p;
this.updateCropStyle({
h:u-d,
w:h-g,
offsetX:f,
offsetY:v
});
},
updateCropStyle:function(t){
var e=this._g,o=e.cropUi,i=o.holder,r=t.w,n=t.h,a=t.offsetX,s=t.offsetY,c=i.width(),p=i.height(),l=this.px(parseFloat(i[0].style.left||0)),m=this.px(parseFloat(i[0].style.top||0)),g=this.px(parseFloat(o.selection[0].style.left||0)),d=this.px(parseFloat(o.selection[0].style.top||0)),h=g-a,u=d-s,x=l+a,f=m+s,v=e._ImgCropper.getScaleFactor(),y=c*v[0]/r,_=p*v[1]/n,I=e._ImgCropper.getOptions(),b=I.boundary;
e.curZoom=r/e.oriImgW,i.css({
width:r+"px",
height:n+"px",
left:x+"px",
top:f+"px"
}),e.curSelectionPos.x-=a,e.curSelectionPos.x2-=a,e.curSelectionPos.y-=s,e.curSelectionPos.y2-=s,
o.selection.css({
left:e.curSelectionPos.x+"px",
top:e.curSelectionPos.y+"px"
}),o.topImg.css({
width:r+"px",
height:n+"px",
left:-h+"px",
top:-u+"px"
}),o.botImg.width(r).height(n),o.trk.width(r+2*b).height(n+2*b),this.updateImgScaleStyle();
var S=e.$cropArea.width(),w=e.$cropArea.height();
e._ImgCropper.setOptions({
maxBound:[-x,-f,-x+S,-f+w]
},!0),e._ImgCropper.changeImgScale({
selectionPos:[e.curSelectionPos.x,e.curSelectionPos.y,e.curSelectionPos.x2,e.curSelectionPos.y2],
xscale:y,
yscale:_
}),this.changeProgess(e.curZoom);
},
updateImgScaleStyle:function(){
var t=this._g,e=t.cropUi.holder,o=t.cropUi.botImg,i=this.px(parseFloat(e[0].style.left||0)),r=this.px(parseFloat(e[0].style.top||0)),n=this.px(parseFloat(o[0].style.left||0)),a=this.px(parseFloat(o[0].style.top||0));
t.$imgScale.css({
height:o.height()+"px",
width:o.width()+"px",
left:i+n+"px",
top:r+a+"px"
}),t.$imgScaleCover.css({
height:o.height()+"px",
width:o.width()+"px",
left:i+n+"px",
top:r+a+"px"
});
},
removeDocRange:function(){
try{
new UE.dom.Selection(document).getNative().removeAllRanges();
}catch(t){}
},
recoverTarget:function(t){
var e=this,o=this._g;
if(o.target&&!o.hasRecoverTarget){
o.hasRecoverTarget=!0;
var i=o.target.parentNode;
if(i&&(i.insertBefore(o.targetClone,o.target),i.removeChild(o.target)),t&&t.url){
o.fireAdjustHeight=!1,o.targetClone.src=t.url;
for(var r=$(o.targetClone),n=[{
key:"data-croporisrc",
val:t.oriSrc
},{
key:"data-cropx1",
val:t.x1
},{
key:"data-cropx2",
val:t.x2
},{
key:"data-cropy1",
val:t.y1
},{
key:"data-cropy2",
val:t.y2
},{
key:"data-cropselx1",
val:"undefined"!=typeof t.selectionX1?this.px(t.selectionX1):void 0
},{
key:"data-cropselx2",
val:"undefined"!=typeof t.selectionX2?this.px(t.selectionX2):void 0
},{
key:"data-cropsely1",
val:"undefined"!=typeof t.selectionY1?this.px(t.selectionY1):void 0
},{
key:"data-cropsely2",
val:"undefined"!=typeof t.selectionY2?this.px(t.selectionY2):void 0
},{
key:"data-copyright",
val:t.copyright_status
}],a=0,s=n.length;s>a;a++){
var c=n[a];
"undefined"!=typeof c.val?r.attr(c.key,c.val):o.targetClone.removeAttribute(c.key);
}
var p=t.scaledW,l=t.scaledH;
"undefined"!=t.scaledW&&(p=Math.min($(e.ueditor.body).width(),t.scaledW),l=e.px(t.scaledH/t.scaledW*p),
o.targetClone.style.width=p+"px"),"undefined"!=t.scaledH&&(o.targetClone.style.height=l+"px"),
o.targetClone.removeAttribute("data-ratio"),o.targetClone.removeAttribute("data-w"),
o.targetClone.removeAttribute("width"),o.targetClone.removeAttribute("height"),e.ueditor.fireEvent("draft_force_save"),
this.editor.fireEvent("saveScene");
}
setTimeout(function(t,e,o,i){
return function(){
try{
e.focus(),t.focus(),e.selection.getRange().selectNode(t).collapse().select(!0),$(document.body).removeClass("img_editing"),
o.enableToolbar(),i&&(e.fireEvent("afterCropImg","",[t]),e.fireEvent("end_crop_img contentchange"));
}catch(r){}
};
}(o.targetClone,e.ueditor,e.editor,t),0);
}
},
updateToolbarPos:function(){
if(this._g.$toolbar){
var t=this._g.curSelectionPos,e=parseFloat(this._g.cropUi.holder[0].style.top||0),o=this.px(t.y+t.h+e+this._o.toolbarOffsetTop);
this._g.$toolbar[0].style.top=o+"px";
}
},
setMinMaxZoom:function(){
var t=this._g,e=Math.max(t.oriImgH,t.oriImgW),o=Math.min(t.oriImgH,t.oriImgW);
t.minZoomPx=Math.min(o,t.minZoomPx),t.maxZoomPx=Math.max(e,t.maxZoomPx),t.minZoom=t.minZoomPx/o,
t.maxZoom=t.maxZoomPx/e;
},
setOriWh:function(t){
var e=this._g,o=$(e.target),i=e.target.style.width||"",r=e.target.style.height||"";
if(i="auto"==i||i.indexOf("%")>=0||!parseFloat(i)?o.width():parseFloat(i),r="auto"==r||r.indexOf("%")>=0||!parseFloat(r)?o.height():parseFloat(r),
r=this.px(r),i=this.px(i),t){
var n,a;
"undefined"!=typeof t.startW&&"undefined"!=typeof t.startH?(n=t.trueW/t.startW,a=t.trueH/t.startH,
t.x1=t.selectionX1*n,t.x2=t.selectionX2*n,t.y1=t.selectionY1*a,t.y2=t.selectionY2*a):(n=(t.x2-t.x1)/i,
a=(t.y2-t.y1)/r,t.startW=this.px(t.trueW/n),t.startH=this.px(t.trueH/t.trueW*(t.trueW/n)),
t.selectionX1=this.px(t.x1/n),t.selectionX2=this.px(t.x2/n),t.selectionY1=this.px(t.y1/a),
t.selectionY2=this.px(t.y2/a)),e.oriImgW=t.startW,e.oriImgH=t.startH;
}else e.oriImgW=i,e.oriImgH=r;
},
initCrop:function(t){
var e,o=this,i=this._g,r=this._o,n=$(i.target);
i.unchangeableRatio&&(e=n.data("ratio"),e=e?1/e:r.ratio),i.$cropWrp.find("img").Jcrop({
allowSelect:!1,
createHandles:["nw","ne","se","sw"],
keySupport:!1,
aspectRatio:i.unchangeableRatio?e:null,
boxWidth:i.oriImgW,
boxHeight:i.oriImgH,
minSize:[10,10],
onChange:function(t,e){
i.curSelectionPos=e,o.updateToolbarPos();
}
},function(){
i._ImgCropper=this,i._ImgCropper.setImage(i.targetUrl,function(){
if(t)i._ImgCropper.setSelect("img_replace"==i.type?[t.x1,t.y1,t.x2,t.y2]:[0,0,t.x2-t.x1,t.y2-t.y1]);else{
var e=i._ImgCropper.getBounds();
i._ImgCropper.setSelect([e[0]*r.selectRatio,e[1]*r.selectRatio,e[0]*(1-r.selectRatio),e[1]*(1-r.selectRatio)]);
}
o.cacheDom(),i.cropUi.selection.find(".jcrop-handle").css({
width:"7px",
height:"7px"
}),o.initEvent(),o.attachTo({
changeHolder:!0
}),o.changeProgess(i.curZoom),t&&"crop_img"==i.type&&o.updateCropImgPos({
x:-t.selectionX1,
y:-t.selectionY1
}),o.updateToolbarPos();
});
});
},
isInBotImgVisibleArea:function(t,e){
var o=this._g.cropUi.botImg,i=o.width(),r=o.height(),n=this.domUtils.getXY(o[0]),a=this._g.$cropArea,s=a.width(),c=a.height(),p=this.domUtils.getXY(a[0]),l=Math.max(n.x,p.x),m=Math.max(n.y,p.y),g=Math.min(n.x+i,p.x+s),d=Math.min(n.y+r,p.y+c);
return t>=l&&e>=m&&g>=t&&d>=e?!0:!1;
},
updateCropImgPos:function(t){
var e=this._g,o=e.cropUi.botImg,i=e.cropUi.topImg,r=o.width(),n=o.height(),a=this.px(parseFloat(o[0].style.left||0)),s=this.px(parseFloat(i[0].style.left||0)),c=this.px(parseFloat(o[0].style.top||0)),p=this.px(parseFloat(i[0].style.top||0)),l=this.fixCoorBycurSelectionPos({
x1:a+t.x,
y1:c+t.y,
x2:a+t.x+r,
y2:c+t.y+n
}),m=l.x1-a,g=l.y1-c;
o[0].style.left=l.x1+"px",o[0].style.top=l.y1+"px",i[0].style.left=s+m+"px",i[0].style.top=p+g+"px",
this.updateImgScaleStyle(),e._ImgCropper.updateOffset({
offsetX:l.x1,
offsetY:l.y1
});
},
fixCoorBycurSelectionPos:function(t){
var e=this._g.curSelectionPos,o=this.px(t.x1),i=this.px(t.x2),r=this.px(t.y1),n=this.px(t.y2);
return o>e.x?(i-=o-e.x,o=e.x):i<e.x2&&(o+=e.x2-i,i=e.x2),r>e.y?(n-=r-e.y,r=e.y):n<e.y2&&(r+=e.y2-n,
n=e.y2),{
x1:o,
x2:i,
y1:r,
y2:n
};
},
px:function(t){
return Math.round(t);
},
setZoom:function(t){
var e=this._g,o=(this._o,e.cropUi);
t=Math.max(t,e.minZoom),t=Math.min(t,e.maxZoom);
var i=this.px(e.oriImgW*t),r=this.px(e.oriImgH*t),n=o.holder,a=n.width(),s=n.height(),c=this.px((a-i)/2),p=this.px((s-r)/2);
if(i=a-2*c,r=s-2*p,t<e.curZoom){
var l=e.curSelectionPos,m=o.botImg,g=this.px(parseFloat(m[0].style.left||0)),d=this.px(parseFloat(m[0].style.top||0)),h=g+c,u=d+p,x=h+i,f=u+r;
if(h>l.x){
x+=h-l.x,h=l.x;
var v=this.px((e.oriImgH/e.oriImgW*(x-h)-(f-u))/2);
u-=v,f+=v;
}
if(x<l.x2){
h-=l.x2-x,x=l.x2;
var v=this.px((e.oriImgH/e.oriImgW*(x-h)-(f-u))/2);
u-=v,f+=v;
}
if(u>l.y){
f+=u-l.y,u=l.y;
var v=this.px((e.oriImgW/e.oriImgH*(f-u)-(x-h))/2);
h-=v,x+=v;
}
if(f<l.y2){
u-=l.y2-f,f=l.y2;
var v=this.px((e.oriImgW/e.oriImgH*(f-u)-(x-h))/2);
h-=v,x+=v;
}
i=x-h,r=f-u,c=this.px((a-i)/2),p=this.px((s-r)/2),i=a-2*c,r=s-2*p,e.curZoom=i/e.oriImgW;
}else e.curZoom=t;
this.updateCropStyle({
w:i,
h:r,
offsetX:c,
offsetY:p
});
},
changeProgess:function(t){
var e=this._g,o=(t-e.minZoom)/(e.maxZoom-e.minZoom)*100;
this.updateDragBarStyle(o);
},
updateDragBarStyle:function(t){
this._g.$progress[0].style.width=t+"%",this._g.$dot[0].style.left=t+"%";
},
updateDotPos:function(t){
var e=(this._o,this._g),o=e.$dragBar.width(),i=this.domUtils.getXY(e.$dragBar[0]).x,r=Math.max(0,Math.min(t-i,o)),n=r/o*100;
this.updateDragBarStyle(n);
var a=n/100*(e.maxZoom-e.minZoom)+e.minZoom;
this.setZoom(a);
},
attachTo:function(t){
var e=this,o=this._g,i=(this.domUtils,o.target.getBoundingClientRect()),r=e.ueditor.iframe.getBoundingClientRect(),n=o.$cropWrp[0].parentNode.getBoundingClientRect(),a=this.ueditor.document.body.getBoundingClientRect(),s=$(this.ueditor.document.body),c=s.width(),p=10;
if(o.$cropWrp.css({
height:"auto",
width:c,
left:a.left,
top:r.top+i.top-n.top-p+"px"
}),o.$cropArea.css({
height:$(e.ueditor.body).height()-i.top+"px",
width:c
}),t&&t.changeHolder){
var l=i.left-a.left,m=p;
o.cropUi.holder.css({
left:l+"px",
top:m+"px"
}),this.updateImgScaleStyle(),o._ImgCropper.setOptions({
maxBound:[-l,-m,-l+o.$cropArea.width(),-m+o.$cropArea.height()]
},!0);
}
},
cacheDom:function(){
var t=this._g;
t.$cancelBtn=t.$cropWrp.find(".js_cancel"),t.$imgScale=t.$cropWrp.find(".js_img_scale"),
t.$imgScaleCover=t.$cropWrp.find(".js_img_scale_cover"),t.$okBtn=t.$cropWrp.find(".js_ok"),
t.$progress=t.$cropWrp.find(".js_progress"),t.$dot=t.$cropWrp.find(".js_dot"),t.$dragBar=t.$cropWrp.find(".js_drag_bar"),
t.$toolbar=t.$cropWrp.find(".js_tool_bar"),t.cropUi=t._ImgCropper.ui;
},
initEvent:function(){
var t=(this.domUtils,this._g),e=(this.editor,this.event);
this.bindEventInterface({
type:"domUtils",
dom:t.$imgScale[0],
eventName:c.supportEvent,
fun:e.mousewheelEvent
}),this.bindEventInterface({
type:"domUtils",
dom:t.$imgScale[0],
eventName:"mousedown",
fun:e.resizerEvent
}),this.bindEventInterface({
type:"domUtils",
dom:t.$imgScale[0],
eventName:"mousedown",
fun:e.trackEvent
}),this._o.coverWheelScroll&&(this.bindEventInterface({
type:"domUtils",
dom:t.$cropWrp[0],
eventName:c.supportEvent,
fun:e.coverWheelEvent
}),this.bindEventInterface({
type:"domUtils",
dom:t.$cropWrp[0].parentNode,
eventName:c.supportEvent,
fun:e.coverWheelEvent
})),this.bindEventInterface({
type:"editor",
eventName:"scroll",
fun:e.editorScrollEvent
}),this.bindEventInterface({
type:"domUtils",
dom:t.$cancelBtn[0],
eventName:"click",
fun:e.destory
}),this.bindEventInterface({
type:"domUtils",
dom:t.$okBtn[0],
eventName:"click",
fun:e.complete
}),this.bindEventInterface({
type:"editor",
eventName:"heightChanged",
fun:e.updateCoverPos
}),this.bindEventInterface({
type:"domUtils",
dom:this.ueditor.window,
eventName:"scroll",
fun:e.updateCropWrpPos
}),this.bindEventInterface({
type:"domUtils",
dom:window,
eventName:"scroll",
fun:e.updateCropWrpPos
}),this.bindEventInterface({
type:"domUtils",
dom:t.cropUi.holder[0],
eventName:c.supportEvent,
fun:e.mousewheelEvent
}),this.bindEventInterface({
type:"domUtils",
dom:t.$dragBar[0],
eventName:"mousedown",
fun:e.dragBarEvent
}),this.bindEventInterface({
type:"domUtils",
dom:t.cropUi.botImg[0],
eventName:"dragstart",
fun:e.stopEvent
});
},
destory:function(){
{
var t=(this.domUtils,this._g);
this.editor,this.event;
}
t.$cropWrp&&t.$cropWrp.remove(),this.unbindEventInterface(),this.recoverTarget(),
this.initCacheData(),t.fireAdjustHeight&&this.editor.fireEvent("adjustheight");
}
},i.initEventInterface(e),e;
});define("common/wx/mpEditor/plugin/scaleimg.js",["common/wx/mpEditor/plugin/wheelEventAdapter.js"],function(e){
"use strict";
function t(e){
this._o={
wheelScroll:!1
},this._extend(e),this.uiUtils=null,this.editor=null,this.ueditor=null,this.resizer=null,
this.cover=null,this.doc=document,this.prePos={
x:0,
y:0
},this.startPos={
x:0,
y:0
},this.hasInit=!1,this.domUtils=null,this.hasShow=!1,this._g={
hasChange:!1,
minPx:20
};
}
var i=e("common/wx/mpEditor/plugin/wheelEventAdapter.js"),o=[[0,0,-1,-1],[0,0,0,-1],[0,0,1,-1],[0,0,-1,0],[0,0,1,0],[0,0,-1,1],[0,0,0,1],[0,0,1,1]],s=[0,2,5,7],n=!1;
return t.prototype={
_extend:function(e){
if(e)for(var t in e)this._o[t]=e[t];
},
getName:function(){
return"scaleimg";
},
beforeDefineCommand:function(e,t){
var i=e,o=(t.getDomUtils(),t.getBrowser()),s=(UE.dom,this);
this.uiUtils=UE.ui.uiUtils,this.editor=t,o.ie||i.addListener("img_selected",function(e,o,n){
if(!n){
var r=i.selection.getRange();
n=r.getClosedNode();
}
n&&"IMG"==n.tagName&&(s.hasInit||s.init(i,t),s._g.hasChange=!1,s.show(n));
});
},
init:function(e,t){
if(!this.hasInit){
this.hasInit=!0,this.domUtils=t.getDomUtils();
var i=this,o=this.domUtils;
i.ueditor=e,i.startPos=this.prePos={
x:0,
y:0
},i.dragId=-1;
var n=[],r=i.cover=document.createElement("div"),a=i.resizer=document.createElement("div");
r.id=i.ueditor.ui.id+"_imagescale_cover",r.setAttribute("draggable","false"),r.style.cssText="position:absolute;display:none;z-index:"+i.ueditor.options.zIndex+";filter:alpha(opacity=0.01); opacity:0.01;background:#CCC;",
o.on(r,["mousedown","click"],function(e){
i.hide(e);
});
for(var d=0,l=s.length;l>d;d++)n.push('<span draggable="false" class="edui-editor-imagescale-hand'+s[d]+'"></span>');
a.id=i.ueditor.ui.id+"_imagescale",a.className="edui-editor-imagescale",a.setAttribute("draggable","false"),
a.innerHTML=n.join(""),a.style.cssText+=";display:none;border:1px solid #43B548;z-index:"+i.ueditor.options.zIndex+";",
i.ueditor.ui.getDom().appendChild(r),i.ueditor.ui.getDom().appendChild(a),i.initStyle(),
i.initEvents();
}
},
initStyle:function(){
var e=this.editor.getUtils();
e.cssRule("imagescale",".edui-editor-imagescale{display:none;position:absolute;border:1px solid #43B548;cursor:hand;-webkit-box-sizing: content-box;-moz-box-sizing: content-box;box-sizing: content-box;}.edui-editor-imagescale span{position:absolute;width:6px;height:6px;overflow:hidden;font-size:0px;display:block;background-color:#43B548;}.edui-editor-imagescale .edui-editor-imagescale-hand0{cursor:nw-resize;top:0;margin-top:-4px;left:0;margin-left:-4px;}.edui-editor-imagescale .edui-editor-imagescale-hand1{cursor:n-resize;top:0;margin-top:-4px;left:50%;margin-left:-4px;}.edui-editor-imagescale .edui-editor-imagescale-hand2{cursor:ne-resize;top:0;margin-top:-4px;left:100%;margin-left:-3px;}.edui-editor-imagescale .edui-editor-imagescale-hand3{cursor:w-resize;top:50%;margin-top:-4px;left:0;margin-left:-4px;}.edui-editor-imagescale .edui-editor-imagescale-hand4{cursor:e-resize;top:50%;margin-top:-4px;left:100%;margin-left:-3px;}.edui-editor-imagescale .edui-editor-imagescale-hand5{cursor:sw-resize;top:100%;margin-top:-3px;left:0;margin-left:-4px;}.edui-editor-imagescale .edui-editor-imagescale-hand6{cursor:s-resize;top:100%;margin-top:-3px;left:50%;margin-left:-4px;}.edui-editor-imagescale .edui-editor-imagescale-hand7{cursor:se-resize;top:100%;margin-top:-3px;left:100%;margin-left:-3px;}");
},
initEvents:function(){
var e=this._o,t=this,o=this.ueditor,s=this.domUtils;
t.startPos.x=t.startPos.y=0,t.isDraging=!1;
var r=100;
this.editor.getBrowser().mac&&(r=30);
var a=function(){
var e=arguments[0]||window.event;
if(e&&e.type||(e=arguments[1]||window.event),e&&e.type){
var i=e.keyCode||e.which;
8!=i&&46!=i||!t.target||($(t.target).remove(),t.resetPopup());
}
t.hide(e);
},d=function(e,t){
if("beforemousedown"===e)return void a(t);
var i=e.target||e.srcElement;
!i||void 0!==i.className&&-1!=i.className.indexOf("edui-editor-imagescale")||a(e);
},l=function(e){
switch(e.type){
case"mousedown":
t._g.hasChange=!0;
var i=e.target||e.srcElement;
-1!=i.className.indexOf("edui-editor-imagescale-hand")&&-1==t.dragId&&(t.hidePopup(),
t.dragId=i.className.slice(-1),t.startPos.x=t.prePos.x=e.pageX,t.startPos.y=t.prePos.y=e.pageY,
t.showCover(),s.on(t.doc,"mousemove",p));
break;

case"mouseup":
-1!=t.dragId&&(t.updateContainerStyle(t.dragId,{
x:e.pageX-t.prePos.x,
y:e.pageY-t.prePos.y
}),t.updateTargetElement(),t.target.parentNode&&t.attachTo(t.target),t.dragId=-1),
s.un(t.doc,"mousemove",p),t.hideCover(),n&&(n=!1,t.ueditor.fireEvent("contentchange")),
t.popupAttachTo();
}
},p=function(e){
if(-1!=t.dragId){
t.updateContainerStyle(t.dragId,{
x:e.pageX-t.prePos.x,
y:e.pageY-t.prePos.y
}),t.prePos.x=e.pageX,t.prePos.y=e.pageY,n=!0,t.updateTargetElement(),t.hidePopup();
try{
new UE.dom.Selection(t.doc).getNative().removeAllRanges();
}catch(e){}
}
},u=function(e){
-1!=t.dragId&&e.preventDefault();
},h=function(){
t.hasShow&&t.target&&t.attachTo(t.target);
},c=function(){},g=function(e){
var s=i.eventAdapter(e);
if(s&&s.myWheel){
var n=o.window;
n.scrollTo(0,n.scrollY+s.myWheel*r),t.attachTo(t.target);
}
};
o.addListener("afterscaleshow",function(){
this.fireEvent("afterscalehide"),t.setMinPx(),o.addListener("beforekeydown",a),o.addListener("beforemousedown",d),
o.addListener("iframeSelected",a),s.on(o.window,"scroll",h),s.on(window,"scroll",h),
o.addListener("heightChanged",c),s.on(document,"keydown",a),s.on(document,"mousedown",d),
s.on(document,"dragstart",u),s.on(t.resizer,"mousedown",l),s.on(t.doc,"mouseup",l),
e.wheelScroll&&(s.on(t.resizer,i.supportEvent,g),s.on(t.cover,i.supportEvent,g));
}),o.addListener("afterscalehide",function(){
o.removeListener("beforekeydown",a),o.removeListener("beforemousedown",d),o.removeListener("iframeSelected",a),
s.un(o.window,"scroll",h),s.un(window,"scroll",h),o.removeListener("heightChanged",c),
s.un(document,"keydown",a),s.un(document,"mousedown",d),s.un(document,"dragstart",u),
s.un(t.resizer,"mousedown",l),s.un(t.doc,"mouseup",l),e.wheelScroll&&(s.un(t.resizer,i.supportEvent,g),
s.un(t.cover,i.supportEvent,g));
});
},
setMinPx:function(){
var e=$(this.target);
this._g.minPx=Math.min(e.height(),e.width(),this._g.minPx);
},
updateTargetElement:function(){
var e=this,t=this.domUtils;
t.setStyles(e.target,{
width:e.resizer.style.width,
height:e.resizer.style.height
}),e.attachTo(e.target);
},
resetPopup:function(){
this.popupCloseId&&(this.ueditor.fireEvent("reset_common_popup",this.popupCloseId),
this.popupCloseId=null);
},
createPopup:function(){
var e=this.target;
if(e){
this.resetPopup();
var t=this.editor.fireEvent("get_img_popup_html",e);
if(t){
var i={
html:t,
node:e
};
this.editor.fireEvent("handle_common_popup",i),this.popupCloseId=Math.random(),this.editor.fireEvent("show_common_popup",e,i.html,this.popupCloseId);
}
}
},
hidePopup:function(){
this.editor.fireEvent("hide_common_popup",this.popupCloseId);
},
popupAttachTo:function(){
var e=1/0,t=0,i=0,o=this.uiUtils.getClientRect(this.target),s=$("#bottom_main"),n=this.editor.getDom("toolbarbox");
if(s&&s[0]&&(e=this.uiUtils.getClientRect(s[0]).top),n){
var r=this.uiUtils.getClientRect(n);
t=r.top+r.height;
}
i=this.uiUtils.getClientRect(this.ueditor.iframe).bottom,o.bottom<t||o.top>e||100>i?this.editor.fireEvent("hide_common_popup",this.popupCloseId):this.editor.fireEvent("update_common_popup",this.popupCloseId,!0);
},
updateContainerStyle:function(e,t){
var i,s=this,n=s.resizer;
0!=o[e][0]&&(i=parseInt(n.style.left)+t.x,n.style.left=s._validScaledProp("left",i)+"px"),
0!=o[e][1]&&(i=parseInt(n.style.top)+t.y,n.style.top=s._validScaledProp("top",i)+"px"),
0!=o[e][2]&&(i=n.clientWidth+o[e][2]*t.x,n.style.width=s._validScaledProp("width",i)+"px"),
0!=o[e][3]&&(i=n.clientHeight+o[e][3]*t.y,n.style.height=s._validScaledProp("height",i)+"px");
},
_validScaledProp:function(e,t){
var i=this.resizer,o=document,s=this._g.minPx;
switch(t=isNaN(t)?0:t,e){
case"left":
return 0>t?0:t+i.clientWidth>o.clientWidth?o.clientWidth-i.clientWidth:t;

case"top":
return 0>t?0:t+i.clientHeight>o.clientHeight?o.clientHeight-i.clientHeight:t;

case"width":
return s>=t?s:t+i.offsetLeft>o.clientWidth?o.clientWidth-i.offsetLeft:t;

case"height":
return s>=t?s:t+i.offsetTop>o.clientHeight?o.clientHeight-i.offsetTop:t;
}
},
hideCover:function(){
this.cover.style.display="none";
},
showCover:function(){
var e=this,t=this.domUtils,i=t.getXY(e.ueditor.ui.getDom()),o=t.getXY(e.ueditor.iframe);
t.setStyles(e.cover,{
width:e.ueditor.document.body.offsetWidth+"px",
height:e.ueditor.document.body.offsetHeight+"px",
top:o.y-i.y+"px",
left:o.x-i.x+"px",
position:"absolute",
display:""
});
},
show:function(e){
if(e&&(!this.hasShow||this.target!=e)){
this._g.resetPopupId&&(clearTimeout(this._g.resetPopupId),this._g.resetPopupId=null),
this.hasShow=!0;
{
var t=this;
this.domUtils;
}
this.target=e,t.resizer.style.display="block",t.ueditor.fireEvent("cancel_common_popup_mouseover_event cancel_selectionchange_popup"),
this.createPopup(),t.attachTo(),t.ueditor.fireEvent("afterscaleshow",t);
}
},
hide:function(e){
if(-1==this.dragId){
this.hasShow=!1;
{
var t=this;
this.domUtils;
}
if(t.hideCover(),t.resizer.style.display="none",t.ueditor.fireEvent("afterscalehide",t),
t.ueditor.fireEvent("set_common_popup_mouseover_event set_selectionchange_popup"),
t._g.hasChange===!0&&t.ueditor.fireEvent("saveScene"),e&&e.preventDefault){
var i=e.target||e.srcElement;
i&&i.ownerDocument===document&&e.preventDefault(),"keydown"==e.type||i&&i.ownerDocument===document||setTimeout(function(){
t.ueditor.focus(),t.target&&(t.target.focus(),t.ueditor.selection.getRange().selectNode(t.target).collapse().select(!0));
},0);
}
this._g.resetPopupId=setTimeout(function(){
t.resetPopup();
},600);
}
},
attachTo:function(){
{
var e=this,t=this.domUtils,i=this.resizer,o=this.target,s=o.getBoundingClientRect(),n=e.ueditor.iframe.getBoundingClientRect(),r=i.parentNode.getBoundingClientRect();
e.ueditor.document.body.getBoundingClientRect();
}
t.setStyles(i,{
width:o.width+"px",
height:o.height+"px",
left:s.left+(n.left-r.left)-parseInt(i.style.borderLeftWidth)+"px",
top:s.top+(n.top-r.top)-parseInt(i.style.borderTopWidth)+"px"
}),this.popupAttachTo();
}
},t;
});define("common/wx/mpEditor/plugin/filterPlugin.js",["common/wx/mpEditor/plugin/basePlugin.js"],function(e){
"use strict";
function s(e){
var s=new RegExp("^"+n.wapCompressClassname+"\\d");
if(e&&e.className.indexOf(n.wapCompressClassname)>=0){
for(var i=e.className.split(" "),a=!1,t=0;t<i.length;t++)s.test(i[t])&&(i.splice(t,1),
t--,a=!0);
a&&(e.className=i.join(" "));
}
}
var i=e("common/wx/mpEditor/plugin/basePlugin.js"),n={
wapCompressClassname:"bizsvr_"
},a=i.inherit({
init:function(){},
getName:function(){
return"gilterPlugin";
},
addListener:function(){
var e=this;
this.ueditor=this.editor.getUeditor(),this.editor.addListener("afterpaste",function(s,i,n){
e.clearClassName(n);
});
},
clearClassName:function(e){
for(var i=0,a=e.length;a>i;i++){
var t=e[i];
if(1==t.nodeType){
s(t);
var r=t.querySelectorAll("[class*="+n.wapCompressClassname+"]");
if(r&&r.length>0)for(var l=0,o=r.length;o>l;l++)s(r[l]);
}
}
}
});
return a;
});define("common/wx/mpEditor/plugin/remoteimg.js",["common/wx/Tips.js","media/report.js","common/wx/mpEditor/plugin/filter.js"],function(require,exports,module){
"use strict";
function Remoteimg(e){
this.init(e),this.addEvent();
}
var Tips=require("common/wx/Tips.js"),Report=require("media/report.js"),Filter=require("common/wx/mpEditor/plugin/filter.js"),g={
appmsgTmpImg:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",
defaultRemoteImg:"http://mmbiz.qpic.cn/mmbiz/G1lssUsxJOsVVJNUIuKfUP7bLm5EVWxXl5znicMum6Os0CMJHPdeHicicZ4W5MGOVa8ooSXYuE61Ek/0"
};
return Remoteimg.defaultRemoteImg=g.defaultRemoteImg,Remoteimg.prototype.init=function(e){
var t=this;
this.uploadUrl=(~location.hostname.search(/^mp/)?"https://mp.weixin.qq.com":"")+"/cgi-bin/filetransfer?action=upload_material&f=json&scene=8&writetype=doublewrite&groupid=3&ticket_id="+wx.data.user_name+"&ticket="+wx.data.ticket+"&svr_time="+wx.data.time,
this.uploadUrl=wx.url(this.uploadUrl),this.mpeditor=e,this.editor=e.getUeditor(),
this.domUtils=UE.dom.domUtils,this.ajax=UE.ajax,this.localDomain=["127.0.0.1","localhost","mmbiz.qpic.cn","mmbiz.qlogo.cn","m.qpic.cn",/^http\:\/\/(a|b)(\d)+\.photo\.store\.qq\.com/g,"mmsns.qpic.cn"],
this.catcherUrl=this.editor.options.catcherUrl,this.catchFieldName="imgurl",this.separater="ue_separate_ue",
this.id=+new Date,this.remoteList={},this.Blob_obj_support=function(){
try{
return!!window.Blob&&Boolean(new Blob);
}catch(e){
return!1;
}
}(),this.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,
this.dataURLtoBlobSupport=function(){
return(t.BlobBuilder||t.Blob_obj_support)&&window.atob&&window.ArrayBuffer&&window.Uint8Array?!0:!1;
}(),this.Blob_Uint8Array_support=function(){
try{
return!!t.Blob_obj_support&&!!window.Uint8Array&&100===new Blob([new Uint8Array(100)]).size;
}catch(e){
return!1;
}
}();
},Remoteimg.prototype.countSentence=function(e){
var t=0,r=[{
value:"？",
escape:!1
},{
value:"！",
escape:!1
},{
value:"。",
escape:!1
},{
value:"：",
escape:!1
},{
value:"；",
escape:!1
},{
value:"?",
escape:!0
},{
value:"!",
escape:!0
},{
value:":",
escape:!0
},{
value:";",
escape:!0
}],o="=#,@";
try{
for(var i=e.getData("text/plain"),a=i.replace(/ /g,"").replace(/\r/g,"").replace(/\n/g,o),n=0,m=r.length;m>n;n++){
var s,c=r[n];
s=c.escape?new RegExp("\\"+c.value,"g"):new RegExp(c.value,"g"),a=a.replace(s,o);
}
var s=new RegExp("("+o+")+","g"),p=new RegExp("^("+o+")","g"),l=new RegExp("("+o+")$","g");
a=a.replace(s,o).replace(p,"").replace(l,""),t=a.split(o).length;
}catch(u){}
t>0&&(Report.addNum(65080,110,1),Report.addNum(65080,111,t));
},Remoteimg.prototype.addEvent=function(){
var _t=this,me=this.editor,mpeditor=this.mpeditor;
me.addListener("onpasting",function(e,t){
var r=null,o=t.clipboardData?t.clipboardData:t.originalEvent&&t.originalEvent.clipboardData?t.originalEvent.clipboardData:{},i=o.items;
if(i&&i.length>0){
Report.addNum(Report.reportId[2],5,1),1==i.length&&/image/i.test(i[0].type)&&(r=i[0].getAsFile());
for(var a=0,n=i.length;n>a;a++)/text\/rtf/i.test(i[a].type)&&Report.addNum(Report.reportId[2],6,100);
_t.countSentence(o);
}
return _t.catchObjectBlob(r);
}),me.addListener("afterpaste aftersetcontent afterinserthtml",function(e,t,r){
for(var o,i,a,n,m=[],s=0;n=r[s++];)if(n.tagName){
o="img"==n.tagName.toLowerCase()?[n]:_t.domUtils.getElementsByTagName(n,"img");
for(var c,p=0;c=o[p++];){
if(_t.handleDataSrc(c),i=c.getAttribute("style")||c.style.cssText||"",c.getAttribute("src")&&/;?\s*(background|background-image)\s*\:/.test(i)&&($(c).css({
"background-image":"none"
}).removeClass("img_loading"),Filter.filterStyleAttr(c,["background-image"])),c.src===g.appmsgTmpImg){
var l=c.getAttribute("data-src");
l&&_t.isLocalDomain(l)&&(c.src=l,c.removeAttribute("data-src"));
}
_t.http2https("img",c),a=c.getAttribute("_src")||c.src||"",/^(https?|ftp):/i.test(a)&&!_t.isLocalDomain(a)?me.fireEvent("catchRemoteImage",c,"img",a):/^data:image/i.test(a)?_t.catchDataUrl(a,c):/^blob:/i.test(a)?_t.catchObjectUrl(c,a):_t.isLocalDomain(a)||c.parentNode&&c.parentNode.removeChild(c);
}
for("afterpaste"==e&&o.length>0&&me.fireEvent("afterpasteimg","",o),m=[n],m.push.apply(m,_t.domUtils.getElementsByTagName(n,"*")),
p=0;c=m[p++];)if(i=c.getAttribute("style")||c.style.cssText||"",i=i.match(/;?\s*(background|background-image)\s*\:[^;]*?url\(([^\)]+)\)/),
i&&i[2]){
a=i[2].replace(/^['"]|['"]$/g,"");
var u=_t.http2https("bg",c,a);
a=u&&u.url?u.url:a,/^(https?|ftp):/i.test(a)&&!_t.isLocalDomain(a)?me.fireEvent("catchRemoteImage",c,"bg",a):/^data:image/i.test(a)?_t.catchDataUrl(a,c):/^blob:/i.test(a)?_t.catchObjectUrl(c,a):_t.isLocalDomain(a)||(c.style.background="");
}
for(p=0;c=m[p++];)c.style&&(c.style.borderImage="",c.style.borderImageSource="");
}
}),me.addListener("catchRemoteImage",function(cmd,ci,type,url){
var remoteObj=_t.setRemoteTag({
dom:ci,
uid:"c"+_t.getuid()
});
if(remoteObj){
var uid=remoteObj.uid;
"bg"==type?me.fireEvent("funcPvUvReport","remoteimg_style"):"img"==type&&me.fireEvent("funcPvUvReport","remoteimg_img"),
_t.catchremoteimage([url],{
success:function(xhr){
!!_t.remoteList[uid]&&delete _t.remoteList[uid];
try{
var info=eval("("+xhr.responseText+")");
}catch(e){
return me.fireEvent("funcPvUvReport","remoteimgerr"),me.fireEvent("catchremoteerror",remoteObj,""),
void _t.checkRemoteList(!0);
}
info&&0==info.errcode&&info.url?(me.fireEvent("funcPvUvReport","remoteimgsuc"),me.fireEvent("catchremotesuccess",remoteObj,info.url,info.img_format)):(me.fireEvent("funcPvUvReport","remoteimgerr"),
me.fireEvent("catchremoteerror",remoteObj,"")),_t.checkRemoteList(!0);
},
error:function(){
!!_t.remoteList[uid]&&delete _t.remoteList[uid],me.fireEvent("funcPvUvReport","remoteimgerr"),
me.fireEvent("catchremoteerror",remoteObj,""),_t.checkRemoteList(!0);
}
});
}
}),me.addListener("checkRemoteList",function(e,t){
return _t.checkRemoteList(t===!0?!0:!1);
}),me.addListener("getRemoteList",function(){
return _t.remoteList;
});
},Remoteimg.prototype.catchObjectBlob=function(e,t){
var r=this,o=this.editor,i=!1;
if(null!==e&&(i=r.filterImgSize(e)),null!==e&&i!==!0)return r.pasteImageError({
msg:i.msg?i.msg:"图片粘贴失败",
dom:t
}),!0;
if(null!==e&&i===!0){
var a,n=e.type.split("/")[1]||"";
if(a=o.window.URL||o.window.webkitURL){
var m=a.createObjectURL(e);
if("string"==typeof m)return t?r.uploadPasteImg({
image:m,
blob:e,
type:n,
dom:t
}):r.pasteImageInserted({
image:m,
blob:e,
type:n
}),!0;
}
if("function"!=typeof FileReader)return!1;
var s=new FileReader;
return s.onload=function(o){
o.target&&2==o.target.readyState&&(t?r.uploadPasteImg({
image:m,
blob:e,
type:n,
dom:t
}):r.pasteImageInserted({
image:o.target.result,
blob:e,
type:n
}));
},s.onerror=function(){
r.pasteImageError({
msg:"图片粘贴失败",
dom:t
});
},s.readAsDataURL(e),!0;
}
},Remoteimg.prototype.catchObjectUrl=function(e,t){
var r=this,o=this.editor,i=r.setRemoteTag({
dom:e,
uid:"p"+r.getuid()
});
if(i){
var a=i.uid,n=new Image;
n.onerror=function(){
!!r.remoteList[a]&&delete r.remoteList[a],o.fireEvent("catchremoteerror",i,""),r.checkRemoteList(!0);
},n.onload=function(){
!!r.remoteList[a]&&delete r.remoteList[a],n.onerror=null,n.onload=null;
var t=n.width||n.naturalWidth,i=n.height||n.naturalHeight,m=o.document.createElement("canvas"),s=m.getContext("2d");
m.width=t,m.height=i,s.drawImage(n,0,0,t,i);
var c=m.toDataURL();
r.catchDataUrl(c,e);
},n.src=t;
}
},Remoteimg.prototype.catchDataUrl=function(e,t){
var r=this,o=r.dataURLtoBlob(e),i=!1;
if(o&&!r.validImg(o)&&(o=null),o)if(i=r.filterImgSize(o),i===!0){
var a=o.type.split("/")[1]||"";
r.uploadPasteImg({
image:e,
blob:o,
dom:t,
type:a
});
}else r.pasteImageError({
msg:i.msg?i.msg:"图片粘贴失败",
dom:t
});else r.pasteImageError({
msg:"图片粘贴失败",
dom:t
});
},Remoteimg.prototype.objectUrl2Blob=function(e,t,r){
var o=new XMLHttpRequest;
o.onerror=function(){
"function"==typeof r&&r();
},o.onreadystatechange=function(){
4===o.readyState&&(o.onreadystatechange=null,o.onerror=null,o.status>=200&&o.status<300?"function"==typeof t&&t(this.response):"function"==typeof r&&r());
},o.responseType="blob",o.open("GET",e,!0),o.send();
},Remoteimg.prototype.pasteImageError=function(e){
var t=this,r=this.editor;
if(!e.dom)return void r.fireEvent("catchremoteerror",null,e.msg||"");
var o=t.setRemoteTag({
dom:e.dom,
force:!0,
uid:"p_"+this.getuid()
});
!!t.remoteList[o.uid]&&delete t.remoteList[o.uid],r.fireEvent("catchremoteerror",o,e.msg||"");
},Remoteimg.prototype.pasteImageInserted=function(e){
for(var t=this,r=this.editor,o=r.fireEvent("insertMaterialImg",[{
format:e.type,
src:e.image
}]),i=0,a=o.length;a>i;i++){
var n=o[i];
if(/^img$/i.test(n.nodeName)){
e.dom=n;
break;
}
var m=n.getElementsByTagName("img");
if(m&&m.length>0){
e.dom=m[0];
break;
}
}
e.dom&&/^img$/i.test(e.dom.nodeName)&&t.uploadPasteImg(e);
},Remoteimg.prototype.dataURLtoBlob=function(e){
if(!this.dataURLtoBlobSupport)return!1;
try{
var t,r=e.split(",");
t=r[0].indexOf("base64")>=0?window.atob(r[1]):decodeURIComponent(r[1]);
for(var o=new ArrayBuffer(t.length),i=new Uint8Array(o),a=0,n=t.length;n>a;a++)i[a]=t.charCodeAt(a);
var m=r[0].split(":")[1].split(";")[0];
if(this.Blob_obj_support)return this.Blob_Uint8Array_support?new Blob([i],{
type:m
}):new Blob([o],{
type:m
});
var s=new BlobBuilder;
return s.append(o),s.getBlob(m);
}catch(c){
return!1;
}
},Remoteimg.prototype.setRemoteTag=function(e){
var t=this,r=this.editor,o=r.fireEvent("get_current_article");
if(!e.dom||!e.uid)return!1;
var i=e.dom.getAttribute("data-remoteid");
if(i&&t.remoteList[i]){
if(e.force!==!0)return!1;
delete t.remoteList[i];
}
i=i||e.uid;
var a=t.remoteList[i]={
article:o,
uid:i,
defaultRemoteImg:g.defaultRemoteImg
};
return t.domUtils.setAttributes(e.dom,{
"data-remoteid":i
}),a;
},Remoteimg.prototype.uploadPasteImg=function(opt){
var _t=this,me=this.editor;
if("function"!=typeof FormData)return _t.pasteImageError({
msg:"粘贴图片失败",
dom:opt.dom
}),!1;
var id=this.getuid(),remoteObj=_t.setRemoteTag({
dom:opt.dom,
uid:"p_"+id
});
if(remoteObj){
var uid=remoteObj.uid,form=new FormData,extensions=opt.blob.type.split("/")[1]||"",url=this.uploadUrl+"&seq="+id,filename="粘贴图片_"+this.formatDate(new Date,"YYYYMMDDHHIISS")+(extensions?"."+extensions:"");
form.append("id",id),form.append("name",filename),form.append("type",opt.blob.type),
form.append("lastModifiedDate",new Date),form.append("size",opt.blob.size),form.append("file",opt.blob,filename);
var xhr=new XMLHttpRequest;
xhr.onerror=function(){
!!_t.remoteList[uid]&&delete _t.remoteList[uid],me.fireEvent("funcPvUvReport","screen_shot_fail"),
me.fireEvent("catchremoteerror",remoteObj,""),_t.checkRemoteList(!0);
},xhr.onreadystatechange=function(error){
if(4===xhr.readyState)if(xhr.upload.onprogress=null,xhr.onreadystatechange=null,
xhr.onerror=null,!!_t.remoteList[uid]&&delete _t.remoteList[uid],xhr.status>=200&&xhr.status<300){
try{
var info=eval("("+xhr.responseText+")");
}catch(e){
return me.fireEvent("funcPvUvReport","screen_shot_fail"),me.fireEvent("catchremoteerror",remoteObj,""),
void _t.checkRemoteList(!0);
}
if(info&&info.base_resp&&0==info.base_resp.ret&&info.cdn_url){
var cdnUrl=info.cdn_url.http2https();
me.fireEvent("funcPvUvReport","screen_shot_suc"),me.fireEvent("catchremotesuccess",remoteObj,cdnUrl,extensions);
}else info&&info.base_resp&&220001==info.base_resp.ret?Tips.err('"素材管理"中的存储数量已达到上限，请删除后再操作。'):info&&info.base_resp&&220002==info.base_resp.ret?Tips.err("你的图片库已达到存储上限，请进行清理。"):(me.fireEvent("funcPvUvReport","screen_shot_fail"),
me.fireEvent("catchremoteerror",remoteObj,""));
_t.checkRemoteList(!0);
}else me.fireEvent("funcPvUvReport","screen_shot_fail"),me.fireEvent("catchremoteerror",remoteObj,""),
_t.checkRemoteList(!0);
},xhr.open("POST",url),xhr.send(form);
}
},Remoteimg.prototype.validImg=function(e){
return e.size<1024?!1:!0;
},Remoteimg.prototype.filterImgSize=function(e){
var t=5242880,r=",bmp,png,jpeg,jpg,gif,",o=","+(e.type.split("/")[1]||"")+",";
return e.size>t?{
type:1,
msg:"截图的图片大小不能超过5M"
}:-1==r.indexOf(o)?{
type:2,
msg:"截图的图片必须为以下格式：bmp,png,jpeg,jpg,gif"
}:!0;
},Remoteimg.prototype.checkRemoteList=function(e){
var t=0;
for(var r in this.remoteList)this.remoteList.hasOwnProperty(r)&&t++;
return t>0?!1:(e===!0&&(this.editor.fireEvent("draft_force_save"),this.editor.fireEvent("remoteimg_all_complete")),
!0);
},Remoteimg.prototype.handleDataSrc=function(e){
var t=e.getAttribute("src")||"",r=e.getAttribute("data-src")||"";
/^data:image/i.test(t)&&(/^http:\/\/mmbiz\.qpic\.cn/.test(r)||/^https:\/\/mmbiz\.qlogo\.cn/.test(r))&&(e.setAttribute("src",r),
e.removeAttribute("data-src"));
},Remoteimg.prototype.http2https=function(e,t,r){
if("img"==e){
var o=t.getAttribute("src")||"";
if(!this.isCdnImg(o))return;
var i=this.formatUrl(o);
return t.setAttribute("src",i.url),!!i.format&&t.setAttribute("data-type",i.format),
t.removeAttribute("_src"),t.removeAttribute("data-src"),i;
}
if("bg"==e&&r&&this.isCdnImg(r)){
var i=this.formatUrl(r);
return t.style.backgroundImage=i.url,i;
}
return null;
},Remoteimg.prototype.formatUrl=function(e){
e=e||"";
var t=e.match(/(?:\?|&)wx_fmt=(.*?)(?:&|$)/)||[];
return t=t[1]||"",e=e.http2https().replace(/\?.*$/,"?"),t&&e&&(e=e+"wx_fmt="+t),
{
url:e,
format:t
};
},Remoteimg.prototype.catchremoteimage=function(e,t){
var r=e.join(this.separater),o=(this.editor,{
timeout:6e4,
onsuccess:function(){
"function"==typeof t.success&&t.success.apply(this,arguments);
},
onerror:function(){
"function"==typeof t.error&&t.error.apply(this,arguments);
}
});
try{
var i=decodeURIComponent(r);
o[this.catchFieldName]=encodeURI(i);
}catch(a){
o[this.catchFieldName]=r;
}
o.t="ajax-editor-upload-img";
var n=this;
setTimeout(function(){
n.ajax.request(n.catcherUrl,o);
},2e3);
},Remoteimg.prototype.getuid=function(){
return this.id++;
},Remoteimg.isCdnImg=Remoteimg.prototype.isCdnImg=function(e){
for(var t,r=[/^http(s)?:\/\/mmbiz\.qpic\.cn([\/?].*)*$/i,/^http(s)?:\/\/mmbiz\.qlogo\.cn([\/?].*)*$/i,/^http(s)?:\/\/mmsns\.qpic\.cn([\/?].*)*$/i],o=0;t=r[o++];)if(t.test(e))return!0;
return!1;
},Remoteimg.isLocalDomain=Remoteimg.prototype.isLocalDomain=function(e){
for(var t,r=[/^http(s)?:\/\/mmbiz\.qpic\.cn([\/?].*)*$/i,/^http(s)?:\/\/mmbiz\.qlogo\.cn([\/?].*)*$/i,/^http(s)?:\/\/m\.qpic\.cn([\/?].*)*$/i,/^http(s)?:\/\/mmsns\.qpic\.cn([\/?].*)*$/i,/^http(s)?:\/\/mp\.weixin\.qq\.com([\/?].*)*$/i,/^http(s)?:\/\/res\.wx\.qq\.com([\/?].*)*$/i,/^http(s)?:\/\/(a|b)(\d)+\.photo\.store\.qq\.com([\/?].*)*$/i],o=0;t=r[o++];)if(t.test(e))return!0;
return!1;
},Remoteimg.prototype.formatDate=function(e,t){
var r=t.replace(/yyyy|YYYY/,e.getFullYear()).replace(/yy|YY/,this.addZero(e.getFullYear()%100,2)).replace(/mm|MM/,this.addZero(e.getMonth()+1,2)).replace(/m|M/g,e.getMonth()+1).replace(/dd|DD/,this.addZero(e.getDate(),2)).replace(/d|D/g,e.getDate()).replace(/hh|HH/,this.addZero(e.getHours(),2)).replace(/h|H/g,e.getHours()).replace(/ii|II/,this.addZero(e.getMinutes(),2)).replace(/i|I/g,e.getMinutes()).replace(/ss|SS/,this.addZero(e.getSeconds(),2)).replace(/s|S/g,e.getSeconds());
return r;
},Remoteimg.prototype.addZero=function(e,t){
for(var r=0,o=t-(e+"").length;o>r;r++)e="0"+e;
return e+"";
},Remoteimg;
});define("common/wx/mpEditor/plugin/popup.js",["common/wx/mpEditor/utils.js","common/wx/Cgi.js"],function(t){
"use strict";
function e(t){
this.mpeditor=t,this.editor=t.getUeditor(),this.uiUtils=baidu.editor.ui.uiUtils,
this.domUtils=UE.dom.domUtils,this._g={
selectionchangePopup:!0,
mouseoutObj:{},
event:{},
popupMouseoutId:null
},this.init(),this.addEvent();
}
var o=t("common/wx/mpEditor/utils.js"),n=t("common/wx/Cgi.js");
return e.prototype.init=function(){
var t=this,e=t.editor,o=t.mpeditor;
this.popup=new baidu.editor.ui.Popup({
editor:e,
content:"",
className:"edui-bubble",
_execCommand:function(){
for(var t=[],o=0,n=arguments.length;n>o;o++)t.push(arguments[o]);
t.push(this._anchorEl),e.execCommand.apply(e,t);
},
_execCommandAndHide:function(){
for(var t=[],o=0,n=arguments.length;n>o;o++)t.push(arguments[o]);
t.push(this._anchorEl),e.execCommand.apply(e,t),this.hide(this._closeId);
},
_fireEvent:function(){
for(var t=[],o=0,n=arguments.length;n>o;o++)t.push(arguments[o]);
t.push(this._anchorEl),e.fireEvent.apply(e,t);
},
_fireEventAndHide:function(){
for(var t=[],o=0,n=arguments.length;n>o;o++)t.push(arguments[o]);
t.push(this._anchorEl),e.fireEvent.apply(e,t),this.hide(this._closeId);
},
_delRange:function(){
e.fireEvent("saveScene");
var t=$(this._anchorEl),n=t.parent("a");
n.length>0&&(t=n),e.selection.getRange().collapse(!1),t.remove(),this.hide(this._closeId),
e.focus(),e.fireEvent("saveScene"),o.funcPvUvReport("del_img");
},
_cropImg:function(){
this.hide(this._closeId),o.fireEvent("crop_img",this._anchorEl);
},
_imgReplace:function(){
this.hide(this._closeId),o.fireEvent("img_replace",this._anchorEl);
},
_imgAutoWidth:function(t){
e.fireEvent("saveScene");
var i=$(this.getDom("content")),u=i.find(".js_adapt"),s=i.find(".js_canceladapt");
if(t===!0){
var p=$(this._anchorEl),r=p.width(),a=p.height(),c=p.attr("src"),d=p.attr("data-oversubscription-url");
this._anchorEl.style.width="100%",p.attr("data-backw",r),p.attr("data-backh",a),
console.log("beforeSrc",c),p.attr("data-before-oversubscription-url",c),null==d&&n.post({
url:"/cgi-bin/imageoptimize?action=super_solution",
data:{
action:"super_solution",
cdnurl:c
},
mask:!1
},{
done:function(t){
console.log(t),t&&0==t.base_resp.ret&&t.new_cdn_url&&(d=t.new_cdn_url,console.log("afterOverSubUrl",d),
p.attr("src",d),p.attr("data-oversubscription-url",d));
},
fail:function(t){
console.error("over sub fail",t);
}
}),u.hide(),s.show(),o.funcPvUvReport("autowidth");
}else{
var r=this._anchorEl.getAttribute("data-backw"),a=this._anchorEl.getAttribute("data-backh"),c=this._anchorEl.getAttribute("data-before-oversubscription-url");
r&&a?(this._anchorEl.style.width=r+"px",this._anchorEl.style.height=a+"px"):this._anchorEl.style.width="auto",
this._anchorEl.removeAttribute("data-backw"),this._anchorEl.removeAttribute("data-backh"),
console.log("beforeSrc",c),null!=c&&(this._anchorEl.src=c),u.show(),s.hide(),o.funcPvUvReport("cancel_autowidth");
}
this._anchorEl.style.height="auto",e.focus(),e.fireEvent("saveScene");
},
_mouseover:function(o){
var n=t._g.mouseoutObj[this._closeId];
n&&n.timeoutId&&(clearTimeout(n.timeoutId),n.timeoutId=null),t._g.popupMouseoutId&&(clearTimeout(t._g.popupMouseoutId),
t._g.popupMouseoutId=null),e.fireEvent("common_popup_mouseover",o,this.getDom(),this._anchorEl);
},
_mouseout:function(o){
var n=this.getDom();
if(n){
var i=n.getBoundingClientRect();
if(o.clientX<=parseInt(i.left)||o.clientX>=parseInt(i.right)||o.clientY<=parseInt(i.top)||o.clientY>=parseInt(i.bottom)){
var u=t._g.mouseoutObj[this._closeId];
u&&u.func.call(u.target),t._g.popupMouseoutId&&(clearTimeout(t._g.popupMouseoutId),
t._g.popupMouseoutId=null),t._g.popupMouseoutId=setTimeout(function(){
e.fireEvent("common_popup_mouseout",o,n,t.popup._anchorEl);
},100);
}
}
},
getHtmlTpl:function(){
return'<div id="##" onmouseover="$$._mouseover(event);" onmouseout="$$._mouseout(event);" class="edui-popup edui_mask_edit_bar %%"> <div id="##_body" class="edui-popup-body"> <iframe style="position:absolute;z-index:-1;left:0;top:0;background-color: transparent;" frameborder="0" width="100%" height="100%" src="javascript:"></iframe> <div class="edui-shadow"></div> <div id="##_content" class="edui-popup-content">'+this.getContentHtmlTpl()+"  </div> </div></div>";
},
showAnchorRect:function(e){
this._doAutoRender();
t.uiUtils.getViewportRect();
this._show();
var o,n,i=this.fitSize(),u=t.uiUtils.getClientRect(this._anchorEl);
o=u.left,n=u.top-i.height;
var s=this.getDom();
if(s){
if(e){
var p=t.uiUtils.getClientRect($(".edui-editor-toolbarbox")[0]);
n=Math.max(n,p.bottom-i.height),this._adjStatus=!0;
}else this._adjStatus=!1;
t.uiUtils.setViewportOffset(s,{
left:o,
top:n
}),this.editor&&(s.style.zIndex=1*this.editor.container.style.zIndex+10,t.uiUtils.getFixedLayer().style.zIndex=s.style.zIndex-1);
}
t.unbindSpecifyEvent({
type:"editor",
eventName:"afterkeyup",
fun:t._g.event.afterkeyupEvent
}),t.bindEventInterface({
type:"editor",
eventName:"afterkeyup",
fun:t._g.event.afterkeyupEvent
});
},
queryAutoHide:function(o){
return o&&o.ownerDocument==e.document&&("img"==o.tagName.toLowerCase()||t.domUtils.findParentByTagName(o,"a",!0))?o!==t.popup.anchorEl:baidu.editor.ui.Popup.prototype.queryAutoHide.call(this,o);
},
justShow:function(e,o){
(!this._closeId||this._closeId&&this._closeId===e)&&this.getDom()&&t.popup.showAnchorRect(o);
},
hide:function(e){
(!this._closeId||this._closeId&&this._closeId===e)&&!this._hidden&&this.getDom()&&(this.getDom().style.display="none",
this._hidden=!0,t.unbindSpecifyEvent({
type:"editor",
eventName:"afterkeyup",
fun:t._g.event.afterkeyupEvent
}));
},
reset:function(e){
(!this._closeId||this._closeId&&this._closeId===e)&&!this._hidden&&this.getDom()&&(this.getDom().style.display="none",
this._hidden=!0,this._closeId=null,t.unbindSpecifyEvent({
type:"editor",
eventName:"afterkeyup",
fun:t._g.event.afterkeyupEvent
}));
}
}),this.popup.render(),this.initEvent();
},e.prototype.initEvent=function(){
var t=this;
this._g.event={
scrollEvent:function(){
t.popup._hidden!==!0&&t.popup.justShow(t.popup._closeId,t.popup._adjStatus);
},
mouseoverEvent:function(e,n){
var i={
html:"",
node:null,
adjust:!1
};
if(this.fireEvent("mouseover_common_popup",i,n),i.html&&i.node){
var u=o.getuid();
t.popup._closeId=u;
{
t.cacheMouseoutEvent({
closeId:u,
target:i.node
});
}
t.showpopup({
target:i.node,
html:i.html,
adjust:i.adjust
});
}
},
afterkeyupEvent:function(e,o){
o=o||window.event,o&&o.type&&t.popup._anchorEl&&!t.popup._anchorEl.parentNode&&t.popup._hidden!==!0&&t.popup.hide(t.popup._closeId);
}
};
},e.prototype.beforeEditorDestory=function(){
this.unbindEventInterface();
},e.prototype.addEvent=function(){
var t=this,e=t.editor;
t.bindEventInterface({
type:"domUtils",
dom:window,
eventName:"scroll",
fun:this._g.event.scrollEvent
}),e.addListener("set_common_popup_mouseover_event",function(){
this.fireEvent("cancel_common_popup_mouseover_event"),t.bindEventInterface({
type:"editor",
eventName:"mouseover",
fun:t._g.event.mouseoverEvent
});
}),e.addListener("cancel_common_popup_mouseover_event",function(){
t.unbindSpecifyEvent({
type:"editor",
eventName:"mouseover",
fun:t._g.event.mouseoverEvent
});
}),e.fireEvent("set_common_popup_mouseover_event"),e.addListener("cancel_selectionchange_popup",function(){
t._g.selectionchangePopup=!1;
}),e.addListener("set_selectionchange_popup",function(){
t._g.selectionchangePopup=!0;
}),e.addListener("selectionchange",function(e,o){
if(o&&t._g.selectionchangePopup===!0){
var n={
html:"",
node:null
};
this.fireEvent("handle_common_popup",n),n.html&&n.node&&t.showpopup({
target:n.node,
html:n.html
});
}
}),e.addListener("hide_common_popup",function(e,o){
t.popup.hide(o);
}),e.addListener("update_common_popup",function(e,o,n){
t.popup.justShow(o,n);
}),e.addListener("reset_common_popup",function(e,o){
t.popup.reset(o);
}),e.addListener("show_common_popup",function(e,o,n,i){
i&&(t.popup._closeId=i),t.showpopup({
target:o,
html:n,
closeId:i
});
});
},e.prototype.resetMouseoutEvent=function(){
for(var t in this._g.mouseoutObj){
var e=this._g.mouseoutObj[t];
this.unbindSpecifyEvent({
type:"domUtils",
dom:e.target,
eventName:"mouseout",
fun:e.func
});
}
this._g.mouseoutObj={};
},e.prototype.cacheMouseoutEvent=function(t){
this.resetMouseoutEvent(),this._g.mouseoutObj[t.closeId]={
timeoutId:null,
target:t.target,
func:function(t,e){
return function(){
var o=this;
t._g.mouseoutObj[e]&&(t._g.mouseoutObj[e].timeoutId&&(clearTimeout(t._g.mouseoutObj[e].timeoutId),
t._g.mouseoutObj[e].timeoutId=null),t._g.mouseoutObj[e].timeoutId=setTimeout(function(){
t.popup.hide(e);
try{
t.domUtils.un(o,"mouseout",t._g.mouseoutObj[e].func),delete t._g.mouseoutObj[e];
}catch(n){}
},100));
};
}(this,t.closeId)
},this.bindEventInterface({
type:"domUtils",
dom:t.target,
eventName:"mouseout",
fun:this._g.mouseoutObj[t.closeId].func
});
},e.prototype.showpopup=function(t){
var e=t||{},o={
html:e.html||"",
node:e.target||null,
adjust:t.adjust===!0?!0:!1
},n=this,i=n.editor;
if(o.html&&o.node){
n.popup.getDom("content").innerHTML=n.popup.formatHtml(o.html);
var u=$(o.node).find("img");
u.length>0&&(o.node=u[0]),n.popup._anchorEl=o.node,/^img$/i.test(o.node.tagName)||o.adjust===!0?n.popup.showAnchorRect(!0):n.popup.showAnchorRect(),
/js_img_popup/i.test(o.html)&&i.fireEvent("funcPvUvReport","img_popup"),/js_link_popup/i.test(o.html)&&i.fireEvent("funcPvUvReport","link_popup");
}
},o.initEventInterface(e),e;
});define("common/wx/mpEditor/editor_options.js",[],function(){
"use strict";
function n(){
return t;
}
var t={
justifyindent:[{
name:"取消",
val:"0"
},{
name:"8",
val:"8"
},{
name:"16",
val:"16"
},{
name:"32",
val:"32"
},{
name:"48",
val:"48"
}],
letterspacing:{
normal:"默认",
"0.5px":"0.5",
"1px":"1",
"2px":"2"
}
};
return t.commonReportConf={
justifyindent:{
all:"69271_0",
0:"69271_18",
8:"69271_1",
16:"69271_2",
32:"69271_3",
48:"69271_4"
},
letterspacing:{
all:"69271_5",
normal:"69271_6",
"0.5px":"69271_7",
"1px":"69271_8",
"2px":"69271_9"
}
},{
getOptions:n
};
});define("common/wx/mpEditor/contextmenu.js",["common/wx/mpEditor/zh_CN.js"],function(e){
"use strict";
e("common/wx/mpEditor/zh_CN.js");
var t=baidu.editor.browser,l=UE.I18N.zh_CN.contextMenu,a=[{
label:l.selectall,
cmdName:"selectall"
},{
label:l.cleardoc,
cmdName:"cleardoc",
exec:function(){
confirm(l.confirmclear)&&this.execCommand("cleardoc");
}
},"-",{
group:l.paragraph,
icon:"justifyjustify",
subMenu:[{
label:l.justifyleft,
cmdName:"justify",
value:"left"
},{
label:l.justifyright,
cmdName:"justify",
value:"right"
},{
label:l.justifycenter,
cmdName:"justify",
value:"center"
},{
label:l.justifyjustify,
cmdName:"justify",
value:"justify"
}]
},"-",{
group:l.table,
icon:"table",
subMenu:[{
label:l.inserttable,
cmdName:"inserttable"
},{
label:l.deletetable,
cmdName:"deletetable"
},"-",{
label:l.deleterow,
cmdName:"deleterow"
},{
label:l.deletecol,
cmdName:"deletecol"
},{
label:l.insertcol,
cmdName:"insertcol"
},{
label:l.insertcolnext,
cmdName:"insertcolnext"
},{
label:l.insertrow,
cmdName:"insertrow"
},{
label:l.insertrownext,
cmdName:"insertrownext"
},"-",{
label:l.insertcaption,
cmdName:"insertcaption"
},{
label:l.deletecaption,
cmdName:"deletecaption"
},{
label:l.inserttitle,
cmdName:"inserttitle"
},{
label:l.deletetitle,
cmdName:"deletetitle"
},"-",{
label:l.mergecells,
cmdName:"mergecells"
},{
label:l.mergeright,
cmdName:"mergeright"
},{
label:l.mergedown,
cmdName:"mergedown"
},"-",{
label:l.splittorows,
cmdName:"splittorows"
},{
label:l.splittocols,
cmdName:"splittocols"
},{
label:l.splittocells,
cmdName:"splittocells"
},"-",{
label:l.averageDiseRow,
cmdName:"averagedistributerow"
},{
label:l.averageDisCol,
cmdName:"averagedistributecol"
},"-",{
label:l.edittd,
cmdName:"edittd",
exec:function(){
UE.ui.edittd&&new UE.ui.edittd(this),this.getDialog("edittd").open();
}
},{
label:l.edittable,
cmdName:"edittable",
exec:function(){
UE.ui.edittable&&new UE.ui.edittable(this),this.getDialog("edittable").open();
}
}]
},{
group:l.tablesort,
icon:"tablesort",
subMenu:[{
label:l.reversecurrent,
cmdName:"sorttable",
value:1
},{
label:l.orderbyasc,
cmdName:"sorttable"
},{
label:l.reversebyasc,
cmdName:"sorttable",
exec:function(){
this.execCommand("sorttable",function(e,t){
var l=e.innerHTML,a=t.innerHTML;
return a.localeCompare(l);
});
}
},{
label:l.orderbynum,
cmdName:"sorttable",
exec:function(){
this.execCommand("sorttable",function(e,l){
var a=e[t.ie?"innerText":"textContent"].match(/\d+/),n=l[t.ie?"innerText":"textContent"].match(/\d+/);
return a&&(a=+a[0]),n&&(n=+n[0]),(a||0)-(n||0);
});
}
},{
label:l.reversebynum,
cmdName:"sorttable",
exec:function(){
this.execCommand("sorttable",function(e,l){
var a=e[t.ie?"innerText":"textContent"].match(/\d+/),n=l[t.ie?"innerText":"textContent"].match(/\d+/);
return a&&(a=+a[0]),n&&(n=+n[0]),(n||0)-(a||0);
});
}
}]
},{
group:l.borderbk,
icon:"borderBack",
subMenu:[{
label:l.setcolor,
cmdName:"interlacetable",
exec:function(){
this.execCommand("interlacetable");
}
},{
label:l.unsetcolor,
cmdName:"uninterlacetable",
exec:function(){
this.execCommand("uninterlacetable");
}
},{
label:l.setbackground,
cmdName:"settablebackground",
exec:function(){
this.execCommand("settablebackground",{
repeat:!0,
colorList:["#bbb","#ccc"]
});
}
},{
label:l.unsetbackground,
cmdName:"cleartablebackground",
exec:function(){
this.execCommand("cleartablebackground");
}
},{
label:l.redandblue,
cmdName:"settablebackground",
exec:function(){
this.execCommand("settablebackground",{
repeat:!0,
colorList:["red","blue"]
});
}
},{
label:l.threecolorgradient,
cmdName:"settablebackground",
exec:function(){
this.execCommand("settablebackground",{
repeat:!0,
colorList:["#aaa","#bbb","#ccc"]
});
}
}]
},{
group:l.aligntd,
icon:"aligntd",
subMenu:[{
cmdName:"cellalignment",
value:{
align:"left",
vAlign:"top"
}
},{
cmdName:"cellalignment",
value:{
align:"center",
vAlign:"top"
}
},{
cmdName:"cellalignment",
value:{
align:"right",
vAlign:"top"
}
},{
cmdName:"cellalignment",
value:{
align:"left",
vAlign:"middle"
}
},{
cmdName:"cellalignment",
value:{
align:"center",
vAlign:"middle"
}
},{
cmdName:"cellalignment",
value:{
align:"right",
vAlign:"middle"
}
},{
cmdName:"cellalignment",
value:{
align:"left",
vAlign:"bottom"
}
},{
cmdName:"cellalignment",
value:{
align:"center",
vAlign:"bottom"
}
},{
cmdName:"cellalignment",
value:{
align:"right",
vAlign:"bottom"
}
}]
},{
group:l.aligntable,
icon:"aligntable",
subMenu:[{
cmdName:"tablealignment",
className:"left",
label:l.tableleft,
value:"left"
},{
cmdName:"tablealignment",
className:"center",
label:l.tablecenter,
value:"center"
},{
cmdName:"tablealignment",
className:"right",
label:l.tableright,
value:"right"
}]
},"-",{
label:l.insertparagraphbefore,
cmdName:"insertparagraph",
value:!0
},{
label:l.insertparagraphafter,
cmdName:"insertparagraph"
},{
label:l.copy,
cmdName:"copy",
exec:function(){
alert(l.copymsg);
},
query:function(){
return 0;
}
},{
label:l.paste,
cmdName:"paste",
exec:function(){
alert(l.pastemsg);
},
query:function(){
return 0;
}
}];
return a;
});define("common/wx/mpEditor/plugin/filter.js",[],function(){
"use strict";
function e(e){
for(var t=["noscript","iframe"],r=0;r<t.length;r++){
var a="(<#targetName#\\s*[^<>]*?>)[^<\\/]+?<\\/#targetName#>".replace(/#targetName#/g,t[r]),n="$1</#targetName#>".replace(/#targetName#/g,t[r]),l=new RegExp(a,"g");
e=e.replace(l,n);
}
return e;
}
var t=function(e,t){
if(t){
e=$(e);
var r=e.attr("style");
if(r){
var a="(^|;|\\b)[^;]*#attr#\\s*:[^;]*[$;]";
"[object String]"==Object.prototype.toString.call(t)&&(t=[t]);
for(var n=0,l=t.length;l>n;n++){
var c=new RegExp(a.replace("#attr#",t[n]),"g");
r=r.replace(c,"$1");
}
e.attr("style",r);
}
}
},r=function(e){
var t="(<[^<>]*?)\\sstyle=(?:(?:\"([^\"]*?)\")|(?:'([^']*?)')|([^'\"\\s=<>]*?))([\\s\\/>])",r=new RegExp(t,"g");
return e=e.replace(r,function(e,t,r,a,n,l){
var c=r||a||n||"";
if(c){
for(var c=c.split(";"),g=[],i=0,o=c.length;o>i;i++){
var p=c[i].replace(/^\s+/,"").replace(/\s+$/,"");
p&&g.push(p);
}
return t+' style="'+g.join(";")+';"'+l||"";
}
return e;
});
},a=function(e,t){
for(var r="(<#tagName#[^<>]*?)\\s#attribute#=(?:(?:\"([^\"]*?)\")|(?:'([^']*?)')|([^'\"\\s=<>]*?))([\\s\\/>])",a="$1$5",n=0,l=t.length;l>n;n++){
var c=t[n],g=c[0],i=c[1],o="";
o="*"===g?r.replace("#tagName#",""):r.replace("#tagName#",g);
for(var p=new RegExp(o.replace("#attribute#",i),"g");p.test(e);)e=e.replace(p,a);
}
return e;
};
return{
formatRedundancyStr:e,
formatStyle:r,
filterStyleAttr:t,
removeAttribute:a
};
});define("tpl/mpEditor/layout.html.js",[],function(){
return'<div>\n    <div id="##" class="%%">\n        <!-- 转载文章顶部msg -->\n        <div id="js_reprint_article_tips" class="page_msg mini with_closed" style="display: none;">\n          <div class="inner">\n            <span class="msg_icon_wrp"><i class="icon_msg_mini info"></i></span>\n            <div class="msg_content">\n              <p class="js_content">当前为开放转载文章，不支持修改</p>\n            </div>\n            <span class="msg_closed js_msg_close">关闭</span>\n          </div>\n        </div>\n\n        <!-- 工具栏 -->\n        <div id="##_toolbarbox" class="%%-toolbarbox show-edui-more js_readonly">\n            {if length}\n            <div id="##_toolbarboxouter" class="%%-toolbarboxouter">\n                <div class="%%-toolbarboxinner">{=toolbarBoxHtml}</div>\n                <div id="##_toolbar_mask" class="edui_toolbar_mask"></div>\n            </div>\n            {/if}\n            <div id="##_toolbarmsg" class="%%-toolbarmsg" style="display:none;">\n                <div id = "##_upload_dialog" class="%%-toolbarmsg-upload" onclick="$$.showWordImageDialog();">{clickToUpload}</div>\n                <div class="%%-toolbarmsg-close" onclick="$$.hideToolbarMsg();">x</div>\n                <div id="##_toolbarmsg_label" class="%%-toolbarmsg-label"></div>\n                <div style="height:0;overflow:hidden;clear:both;"></div>\n            </div>\n\n            <div class="mpeditor_global_tips">\n                <!-- <span id="##_quote_tips" class="edui_quote_tips" style="display:none;">引用中</span>-->\n                <span id="js_autosave" class="mini_tips icon_after weak_text" style="display:none;">\n                    自动保存<i class="icon16_common waiting_gray"></i>\n                </span>\n            </div>\n        </div>\n\n        <!-- 载入草稿提示 -->\n        <!--\n        <div id="js_draft_tips" class="page_msg mini with_closed" style="display:none;">\n            <div class="inner">\n                <span class="msg_icon_wrp"><i class="icon_msg_mini info"></i></span>\n                <div class="msg_content">\n                    <p class="js_msg_content"><span><span class="link_global" id="js_draft_cancel">撤消</span></span></p>\n                </div>\n            </div>\n            <span class="msg_closed js_msg_close">关闭</span>\n        </div>\n        -->\n        <!-- 有旧草稿，提示下还要不要 -->\n        <!--\n        <div id="js_import_tips" class="page_msg mini with_closed" style="display:none;">\n            <div class="inner">\n                <span class="msg_icon_wrp"><i class="icon_msg_mini info"></i></span>\n                <div class="msg_content">\n                    <p  class="js_msg_content"><span><span class="link_global" id="js_import_draft">导入</span></span></p>\n                </div>\n            </div>\n            <span class="msg_closed js_msg_close">关闭</span>\n        </div>\n        -->\n        <!-- 标题报错 -->\n        <div class="page_msg mini with_closed js_title_error js_error_msg" style="display:none;">\n            <div class="inner">\n                <span class="msg_icon_wrp"><i class="icon_msg_mini info"></i></span>\n                <div class="msg_content">\n                    <p class="js_msg_content">\n                    标题不能为空且长度不能超过64字                    </p>\n                </div>\n            </div>\n            <span class="msg_closed js_msg_close">关闭</span>\n        </div>\n        <!-- 作者报错 -->\n        <div class="page_msg mini with_closed js_author_error" style="display:none;">\n            <div class="inner">\n                <span class="msg_icon_wrp"><i class="icon_msg_mini info"></i></span>\n                <div class="msg_content">\n                    <p class="js_msg_content">作者不能超过8个字</p>\n                </div>\n            </div>\n            <span class="msg_closed js_msg_close">关闭</span>\n        </div>\n        <!-- 标题 -->\n        <div class="js_title_main appmsg_edit_item title frm_input_box">\n            <label for="title" class="tips_global placeholder_tips" style="display:none">请在这里输入标题</label>\n            <input id="title" type="text" placeholder="请在这里输入标题" class="frm_input js_title js_counter js_field" name="title" max-length="64">\n            <span class="js_edit_tips weui-desktop-tips card_media_edit_tips" style="display:none;">\n              <i class="icon-svg-common-ask"></i>\n            </span>\n        </div>\n\n        <!-- 作者 -->\n        <div id="js_author_area" class="js_author_container js_reprint_hide appmsg_edit_item author frm_input_box author_select_pop_wrp">\n            <i class="appmsg_origianl_tag">原创：</i>\n            <label for="author" class="tips_global placeholder_tips" style="display:none">请输入作者</label>\n            <!--#00001#-->\n            <input id="author" type="text" placeholder="请输入作者" class="frm_input js_author js_counter js_field" name="author" max-length="8">\n            <!--%00001%-->\n            <input type="hidden" class="js_field js_writerid" name="writerid" value="">\n            <input type="hidden" class="js_field js_can_reward" name="can_reward" value="0" data-type="checkbox">\n            <input type="hidden" class="js_field js_can_open_reward" name="can_open_reward" value="0" data-type="checkbox">\n            <input type="hidden" class="js_field js_author_username" name="author_username" value="">\n        </div>\n\n        <!-- 原创文章推荐语 -->\n        <div id="guide_words_main" class="appmsg_edit_origin_recommended"></div>\n\n        <!-- 正文 -->\n        <div class="editor_area">\n            <div class="split_line"></div>\n            <!-- 正文报错 -->\n            <div class="page_msg mini with_closed js_catch_tips" style="display:none;">\n                <div class="inner">\n                    <span class="msg_icon_wrp"><i class="icon_msg_mini warn"></i></span>\n                    <div class="msg_content">\n                        <p class="js_msg_content">粘贴失败</p>\n                    </div>\n                </div>\n                <span class="msg_closed js_msg_close">关闭</span>\n            </div>\n            <div class="page_msg mini with_closed js_content_error js_error_msg" style="display:none;">\n                <div class="inner">\n                    <span class="msg_icon_wrp"><i class="icon_msg_mini info"></i></span>\n                    <div class="msg_content">\n                        <p class="js_msg_content">正文不能为空</p>\n                    </div>\n                </div>\n                <span class="msg_closed js_msg_close">关闭</span>\n            </div>\n            <div class="page_msg mini with_closed js_warn" style="display:none;">\n                <div class="inner">\n                    <span class="msg_icon_wrp"><i class="icon_msg_mini info"></i></span>\n                    <div class="msg_content">\n                        <p class="profile_link_msg_global">请勿在图文外链中添加其他公众号的主页链接</p>\n                    </div>\n                </div>\n                <span class="msg_closed js_msg_close">关闭</span>\n            </div>\n            <div id="##_iframeholder" class="%%-iframeholder">\n                <div id="##_contentplaceholder" class="editor_content_placeholder" style="display:none">从这里开始写正文</div>\n            </div>\n            <div class="edui_iframe_switch_tips js_unfold_editor mini_tips weak_text icon_before" style="display:none;"><i class="icon_appmsg_edit_folder"></i>展开正文</div>\n        </div>\n        <!-- 底部 -->\n        <div id="##_bottombar" class="%%-bottomContainer">\n            <table>\n                <tr>\n                    <td id="##_elementpath" class="%%-bottombar"></td>\n                    <td id="##_wordcount" class="%%-wordcount"></td>\n                    <td id="##_scale" class="%%-scale"><div class="%%-icon"></div></td>\n                </tr>\n            </table>\n        </div>\n        <div id="##_scalelayer"></div>\n    </div>\n</div>\n';
});define("biz_web/lib/json.js",[],function(require,exports,module){
return"object"!=typeof JSON&&(JSON={}),function(){
"use strict";
function f(t){
return 10>t?"0"+t:t;
}
function quote(t){
return escapable.lastIndex=0,escapable.test(t)?'"'+t.replace(escapable,function(t){
var e=meta[t];
return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4);
})+'"':'"'+t+'"';
}
function str(t,e){
var r,n,o,f,u,i=gap,p=e[t];
switch(p&&"object"==typeof p&&"function"==typeof p.toJSON&&(p=p.toJSON(t)),"function"==typeof rep&&(p=rep.call(e,t,p)),
typeof p){
case"string":
return quote(p);

case"number":
return isFinite(p)?String(p):"null";

case"boolean":
case"null":
return String(p);

case"object":
if(!p)return"null";
if(gap+=indent,u=[],"[object Array]"===Object.prototype.toString.apply(p)){
for(f=p.length,r=0;f>r;r+=1)u[r]=str(r,p)||"null";
return o=0===u.length?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+i+"]":"["+u.join(",")+"]",
gap=i,o;
}
if(rep&&"object"==typeof rep)for(f=rep.length,r=0;f>r;r+=1)"string"==typeof rep[r]&&(n=rep[r],
o=str(n,p),o&&u.push(quote(n)+(gap?": ":":")+o));else for(n in p)Object.prototype.hasOwnProperty.call(p,n)&&(o=str(n,p),
o&&u.push(quote(n)+(gap?": ":":")+o));
return o=0===u.length?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+i+"}":"{"+u.join(",")+"}",
gap=i,o;
}
}
"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){
return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null;
},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){
return this.valueOf();
});
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={
"\b":"\\b",
"	":"\\t",
"\n":"\\n",
"\f":"\\f",
"\r":"\\r",
'"':'\\"',
"\\":"\\\\"
},rep;
JSON.stringify2=function(t,e,r){
var n;
if(gap="",indent="","number"==typeof r)for(n=0;r>n;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);
if(rep=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");
return str("",{
"":t
});
},"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){
function walk(t,e){
var r,n,o=t[e];
if(o&&"object"==typeof o)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(n=walk(o,r),
void 0!==n?o[r]=n:delete o[r]);
return reviver.call(t,e,o);
}
var j;
if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(t){
return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4);
})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),
"function"==typeof reviver?walk({
"":j
},""):j;
throw new SyntaxError("JSON.parse");
});
}(),JSON;
});define("common/wx/media/templateListDialog.js",["common/wx/popup.js","media/template_common.js","common/wx/Tips.js","common/wx/Cgi.js","tpl/media/templateListDialog.html.js","tpl/media/templateListContent.html.js","common/wx/pagebar.js"],function(t){
"use strict";
function e(t){
this._o={
token:"",
onSuccess:function(){}
},this._g={
perPage:4,
dom:{}
},this._extend(t),this.initDialog();
}
t("common/wx/popup.js");
var o=t("media/template_common.js"),i=t("common/wx/Tips.js"),a=(t("common/wx/Cgi.js"),
t("tpl/media/templateListDialog.html.js")),n=t("tpl/media/templateListContent.html.js"),s=t("common/wx/pagebar.js");
return e.prototype={
_extend:function(t){
if(t)for(var e in t)this._o[e]=t[e];
},
initDialog:function(){
var t=this,e=this._o,o=this._g,n=o.dom;
document.body.style.overflow=document.documentElement.style.overflow="hidden",n.$dialog=$(wx.T(a,{
token:e.token||""
})).popup({
width:680,
title:"图文模版",
autoShow:!0,
className:"align_edge weui-desktop-appmsg-dialog appmsg_tmpl_select_dialog",
buttons:[{
text:"添加到正文",
type:"primary",
classWrap:"js_save_btn",
click:function(){
if(!o.selectedId)return void i.err("请选择图文模版");
var a=t.getSelectData();
e.onSuccess({
content:a?a.content:""
}),t.destory(this);
}
},{
text:"取消",
type:"default",
click:function(){
t.destory(this);
}
}],
onHide:function(){
t.destory(this);
}
}),n.$js_loading=n.$dialog.find(".js_loading"),n.$js_content=n.$dialog.find(".js_content"),
n.$js_pagebar=n.$dialog.find(".js_pagebar"),this.getList({
page:0
});
},
showLoading:function(){
var t=this._g,e=t.dom;
t.gettingData=!0,e.$js_loading.show(),e.$js_content.hide(),e.$js_pagebar.hide();
},
checkDialogAlive:function(){
var t=this._g.dom;
return t&&t.$dialog?!0:!1;
},
hideLoading:function(){
var t=this._g,e=t.dom;
t.gettingData=!1,e.$js_loading.hide();
},
checkAccLoading:function(){
return this._g.gettingData;
},
getList:function(t){
var e=this,i=this._g;
e.checkAccLoading()!==!0&&(e.showLoading(),o.getTemplateList({
page:t.page,
perPage:i.perPage,
callback:function(t){
e.checkDialogAlive()&&(e.hideLoading(),e.renderContent(t));
}
}));
},
getSelectData:function(){
var t=this._g;
if(!t.selectedId)return null;
for(var e=0,o=t.curData.length;o>e;e++){
var i=t.curData[e];
if(i.appmsgid==t.selectedId)return i;
}
return null;
},
renderContent:function(t){
var e=this._g,i=e.dom;
i&&i.$dialog&&(0==t.code||t.msg?0!=t.code||t.list&&0!=t.list.length||t.msg||(t.msg="暂无数据"):t.msg="系统繁忙，请稍后再试",
e.curData=t.list||[],e.selectedId=void 0,o.formatTemplateData(e.curData,{
canPreview:!1,
showUpdateTime:!0,
showEdit:!1,
highLine:!1
}),i.$js_content.html(template.compile(n)({
list:e.curData,
msg:t.msg
})).show(),i.$js_loading.hide(),0==t.code&&t.total>0&&"undefined"!=typeof t.page?(this.initPageBar({
curPage:t.page+1,
total:t.total
}),i.$js_content.on("click",".js_appmsg",function(){
var t=$(this);
e.selectedId=t.data("id"),i.$js_content.find(".js_appmsg").removeClass("selected"),
t.addClass("selected");
})):i.$js_pagebar.hide(),i.$dialog.popup("resetPosition"));
},
initPageBar:function(t){
var e=this,o=this._g,i=o.dom;
o.myPagebar&&o.myPagebar.destroy(),o.myPagebar=new s({
container:i.$js_pagebar,
perPage:o.perPage,
initShowPage:t.curPage,
totalItemsNum:t.total,
first:!1,
last:!1,
isSimple:!0,
callback:function(t){
e.getList({
page:1*t.currentPage-1
});
}
});
},
destory:function(t){
t&&t.remove(),document.body.style.overflow=document.documentElement.style.overflow="auto",
this._g.dom=null;
}
},e;
});