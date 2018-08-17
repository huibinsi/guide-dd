define("biz_common/utils/string/html.js",[],function(){
return String.prototype.html=function(t){
var e=["&#96;","`","&#39;","'","&quot;",'"',"&nbsp;"," ","&gt;",">","&lt;","<","&yen;","¥","&amp;","&"];
t&&e.reverse();
for(var n=0,r=this;n<e.length;n+=2)r=r.replace(new RegExp(e[n],"g"),e[n+1]);
return r;
},String.prototype.htmlEncode=function(){
return this.html(!0);
},String.prototype.htmlDecode=function(){
return this.html(!1);
},String.prototype.getPureText=function(){
return this.replace(/<\/?[^>]*\/?>/g,"");
},String.prototype.htmlLite=function(t){
var e=["&#96;","`","&#39;","'","&quot;",'"',"&gt;",">","&lt;","<","&amp;","&"];
t&&e.reverse();
for(var n=0,r=this;n<e.length;n+=2)r=r.replace(new RegExp(e[n],"g"),e[n+1]);
return r;
},String.prototype.htmlEncodeLite=function(){
return this.htmlLite(!0);
},String.prototype.htmlDecodeLite=function(){
return this.htmlLite(!1);
},{
htmlDecode:function(t){
return t.htmlDecode();
},
htmlEncode:function(t){
return t.htmlEncode();
},
getPureText:function(t){
return t.getPureText();
},
htmlEncodeLite:function(t){
return t.htmlEncodeLite();
},
htmlDecodeLite:function(t){
return t.htmlDecodeLite();
}
};
});define("media/preview.js",["common/qq/events.js","common/wx/phoneView.js","biz_common/moment.js","tpl/media/preview/audio.html.js","tpl/media/preview/video.html.js","tpl/media/preview/img.html.js","tpl/media/preview/appmsg.html.js","tpl/media/preview/card.html.js","tpl/media/preview/moments.html.js","tpl/media/preview/chat.html.js"],function(e,i){
"use strict";
function a(e,i){
var a=wx.data.time;
wx.cgiData.appmsg_data&&wx.cgiData.appmsg_data.create_time&&(a=wx.cgiData.appmsg_data.create_time);
for(var t=[],n=0;8>n&&e["title"+n];n++)t.push({
copyright_type:i[n].copyright_type,
copyright_headimg:i[n].copyright_headimg,
copyright_nickname:i[n].copyright_nickname,
title:e["title"+n],
time:s.unix(a).format("YYYY-MM-DD"),
unix:a,
avatar:wx.url("/misc/getheadimg?fakeid="+wx.data.uin),
author:e["author"+n],
nickName:wx.data.nick_name,
content:e["content"+n],
digest:e["digest"+n],
img:e["cdn_url"+n]||e["fileid"+n]&&wx.url("/cgi-bin/getimgdata?mode=large&source=file&fileId="+e["fileid"+n])||"",
show_cover:e["show_cover_pic"+n],
sourceurl:e["sourceurl"+n],
ad_info:e["ad_info"+n],
is_share_copyright:e["is_share_copyright"+n],
guide_words:e["guide_words"+n],
share_copyright_url:e["share_copyright_url"+n],
share_page_type:e["share_page_type"+n],
share_imageinfo:i[n].share_imageinfo,
share_videoinfo:i[n].share_videoinfo,
share_voiceinfo:i[n].share_voiceinfo
});
return t;
}
var t=e("common/qq/events.js")(!0),n=e("common/wx/phoneView.js"),s=e("biz_common/moment.js"),d=null,m={
appmsg_audio:e("tpl/media/preview/audio.html.js"),
appmsg_video:e("tpl/media/preview/video.html.js"),
appmsg_img:e("tpl/media/preview/img.html.js"),
appmsg:e("tpl/media/preview/appmsg.html.js"),
card:e("tpl/media/preview/card.html.js"),
moments:e("tpl/media/preview/moments.html.js"),
chat:e("tpl/media/preview/chat.html.js")
};
i.show=function(i,o,r,p){
if(o=o||0,d=a(i,r),d.index=o,0!=d.length){
d[0].date=s.unix(d[0].unix).format("MM月DD日");
{
new n({
html:e("tpl/media/preview/card.html.js"),
data:d.length>1?{
list:d,
nickName:wx.data.nick_name
}:d[0],
todo:function(){
var e=this;
e.$dom.find(".jsPhoneViewPlugin").on("click",".jsPhoneViewLink",function(){
$(this).hasClass("selected")||($(this).addClass("selected").siblings().removeClass("selected"),
"appmsg"==$(this).data("id")?(e.render(m.appmsg,{
data:d[o],
index:o,
length:d.length
}),p.afterSetContent(e.$dom)):"card"==$(this).data("id")?d.length>1?e.render(m.card,{
list:d,
nickName:wx.data.nick_name
}):e.render(m.card,d[0]):"moments"==$(this).data("id")?e.render(m.moments,{
list:d
}):"chat"==$(this).data("id")&&e.render(m.chat,{
list:d
}));
}),e.$dom.on("click",".js_back_btn",function(){
e.$dom.find('.jsPhoneViewLink[data-id="card"]').trigger("click");
}),e.$dom.on("click",".jsPhoneViewCard",function(){
var i=$(this);
if(!i.hasClass("disabled")){
"undefined"!=typeof i.data("index")&&(o=i.data("index"));
var a;
a=5==d[o].share_page_type?m.appmsg_video:7==d[o].share_page_type?m.appmsg_audio:8==d[o].share_page_type?m.appmsg_img:m.appmsg,
e.render(a,{
data:d[o],
index:o,
length:d.length
}),console.log(d[o]),p.afterSetContent(e.$dom);
}
}),e.$dom.on("click",".jsPhoneViewPub",function(){
t.trigger("_preview");
});
}
});
}
}
};
});define("media/appmsg_dialog.js",["widget/media/appmsg_dialog.css","common/wx/popup.js","common/wx/top.js","common/wx/Tips.js","common/wx/Cgi.js","common/wx/pagebar.js","common/wx/time.js","tpl/media/appmsg_dialog.html.js","tpl/media/appmsg_list.html.js","biz_web/ui/checkbox.js","biz_common/moment.js"],function(i){
"use strict";
function e(i){
this.opt=i,this.onOK=i.onOK,this.createDialog();
}
i("widget/media/appmsg_dialog.css"),i("common/wx/popup.js");
var t=(i("common/wx/top.js"),i("common/wx/Tips.js")),n=i("common/wx/Cgi.js"),s=i("common/wx/pagebar.js"),o=(i("common/wx/time.js"),
i("tpl/media/appmsg_dialog.html.js")),a=i("tpl/media/appmsg_list.html.js"),p=(i("biz_web/ui/checkbox.js"),
i("biz_common/moment.js")),d=0,m=[],r={},g=[],l={
createDialog:function(){
var i=this,e=$.parseHTML(wx.T(o,{}));
this.dialog&&this.dialog.popup("remove"),this.dialog=$(e[0]).popup({
title:"从素材库选择图文",
className:"align_edge appmsg_dialog",
width:960,
onOK:function(){
return i.$btn.hasClass("btn_disabled")?(t.err("请选择图文消息"),!0):void(i.onOK&&i.onOK(r));
},
onCancel:function(){
this.hide(),i.dialog=null;
},
onHide:function(){
i.$dom.off(),this.remove(),i.dialog=null;
}
}),i.$dom=i.dialog.popup("get"),i.$btn=i.$dom.find(".js_btn_p").eq(0).addClass("btn_disabled"),
i.init();
},
init:function(){
var i=this;
i.initEvent(),i.initAppMsg();
},
initEvent:function(){
var i=this;
i.$dom.on("click","a",function(i){
i.preventDefault();
}),i.$dom.on("click",".jsTempLink",function(){
var i=$(this).parents("ul").data("id"),e=$(this).parents("ul").data("index"),s=window.open();
n.get({
url:"/cgi-bin/appmsg?action=get_temp_url",
data:{
appmsgid:i,
itemidx:e+1
},
success:function(i){
i.base_resp&&0===i.base_resp.ret?s&&s.location&&(s.location.href=i.temp_url):(t.err("生成临时链接失败，请重试"),
s.close());
},
error:function(){
t.err("生成临时链接失败，请重试");
}
});
});
},
initAppMsg:function(){
var i=this;
if(!i.appMsgInited){
var e=i.$dom.find(".js_search_clear_btn"),t=i.$dom.find(".js_search");
i.getAppMsgList(),i.$dom.on("click",".js_search_btn",function(){
""==t.val()?e.hide():e.show(),i.getAppMsgList({
query:t.val()
});
}),i.$dom.on("keyup",".js_search",function(n){
wx.isHotkey(n,"enter")&&(""==t.val()?e.hide():e.show(),i.getAppMsgList({
query:t.val(),
highlight:0
}));
}),e.on("click",function(){
t.val(""),e.hide(),i.getAppMsgList({
query:""
});
}),i.appMsgInited=!0;
}
},
getAppMsgList:function(i){
var e=this,s=$.extend({
begin:0,
count:7
},i||{}),o=e.loadingFlag=++d;
e.$dom.find(".js_loading").show().siblings().hide(),e.resetPos(),n.post({
url:"/cgi-bin/appmsg?type=10&action=list_card",
data:s,
complete:function(){
e.$dom.find(".js_loading").hide(),e.resetPos();
}
},{
done:function(i){
if(o==e.loadingFlag)if(i&&i.base_resp){
if(0==i.base_resp.ret){
var a=i.app_msg_info.item;
return m=[],a.each(function(i){
i.multi_item.each(function(e,t){
e.title=e.title.replace(/<em>/g,"#em#").replace(/<(\/)em>/g,"#/em#").html(!0).replace(/#em#/g,"<em>").replace(/#\/em#/g,"</em>");
var n={
title:e.title,
cover:e.cover,
share_page_type:e.share_page_type,
id:i.app_id,
index:t,
time:p.unix(i.update_time).format("YYYY-MM-DD"),
info:""
};
n.title?n.cover||7==n.share_page_type||(n.info="(未设置封面，无法预览)"):n.info="(未命名图文，无法预览)",
s.query?n.title.indexOf("<em>")>-1&&m.push(n):m.push(n);
});
}),e.renderAppMsg(m),void(s.query?e.renderPageBar(s.begin,i.app_msg_info.search_cnt):e.renderPageBar(s.begin,i.app_msg_info.file_cnt.app_msg_cnt));
}
n.show(i);
}else t.err("系统错误");
},
fail:function(){
t.err("系统错误");
}
});
},
renderAppMsg:function(i){
var e=this;
i.length?(g=i,e.$dom.find(".js_appmsg_list").show().find(".js_tbody").html(wx.T(a,{
data:i
})).show().siblings().hide()):e.$dom.find(".js_appmsg_list").show().find(".js_empty").show().siblings().hide(),
e.$btn.addClass("btn_disabled"),e.$dom.find(".jsAppmsgRadio").checkbox({
multi:!1,
onChanged:function(i){
var t=$(i).parents("ul");
t&&(n.get({
url:"/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&type=10&&isMul=1&appmsgid="+t.data("id")
},function(i){
if(0==i.base_resp.ret){
var e=JSON.parse(i.app_msg_info);
r=e.item[0].multi_item[t.data("index")];
}
}),e.$btn.removeClass("btn_disabled"));
}
}),e.resetPos();
},
renderPageBar:function(i,e,t){
var n=this;
i=i||0,0==e&&n.$dom.find(".js_pagebar").hide(),new s({
container:n.$dom.find(".js_pagebar"),
perPage:10,
initShowPage:(i/10|0)+1,
totalItemsNum:e,
first:!1,
last:!1,
isSimple:!0,
callback:function(i){
var e=i.currentPage;
9==t?n.getSentList({
begin:10*(e-1),
query:n.$dom.find(".js_search").val()
}):n.getAppMsgList({
begin:10*(e-1),
query:n.$dom.find(".js_search").val()
});
}
});
},
resetPos:function(){
this.dialog&&this.dialog.popup("resetPosition");
}
};
return $.extend(e.prototype,l),e;
});define("media/draft.js",["biz_common/jquery.md5.js","media/common.js","common/qq/Class.js","biz_web/lib/store.js","biz_common/moment.js","media/report.js"],function(t){
"use strict";
function e(t,e){
return"draft_ls|%s|bizuin:%s|appid:%s|ua:%s|start_write:%s|start_read:%s|start_write_err_STK:%s|start_read_err_STK:%s".sprintf(t||"",wx.data.uin||"",e||0,window.navigator.userAgent,h.lsStartWriteEnable,h.lsStartReadEnable,h.lsStartWriteErrLog,h.lsStartReadErrLog);
}
function a(t){
var e=t.stack||t.toString()||"";
try{
e=e.replace(/http(s)?:\/\/res\.wx\.qq\.com/g,"");
for(var a=/\/([^.]+)\/js\/(\S+?)\.js(\,|:)?/g;a.test(e);)e=e.replace(a,"$2$3");
}catch(t){
e=t.stack?t.stack:"";
}
return e.replace(/\n/g,"");
}
function r(){
if(!u.isLocalStorageNameSupported()){
var t=e("notsupport");
return v.logReport("65080_44_1;65080_45_1",t,"img"),void(h.lsSupport=!1);
}
v.logReport("65080_44_1","","img"),h.lsSupport=!0;
var r=+new Date+"";
try{
window.localStorage.setItem(h.namespace,r);
}catch(i){
h.lsStartWriteEnable=0,h.lsStartWriteErrLog=a(i);
}
var s="";
try{
s=window.localStorage.getItem(h.namespace);
}catch(i){
h.lsStartReadEnable=0,h.lsStartReadErrLog=a(i);
}
window.localStorage.removeItem(h.namespace),s==r&&(h.lsStartWriteEnable=1,h.lsStartWriteErrLog="",
h.lsStartReadEnable=1,h.lsStartReadErrLog="");
}
function i(t,e,a,r){
return d(t,e,a,3,0,r);
}
function s(t,e,a){
return d(t,e,a,4);
}
function n(t){
var e=c(t);
e.appKey+=h.readOnlyDraftName;
var a=_(e.appKey);
return a&&a.list?a.list||!1:!1;
}
function o(t){
var e=c(t);
e.appKey+=h.readOnlyDraftName,u.remove(e.appKey);
}
function _(t){
var e=!1,a=!1;
if(e=u.get(t,function(){
a=!0;
}),a===!0||!e||"v2"!=e.v)return!1;
if(e.md5===$.md5(e.data)){
try{
e=JSON.parse(e.data);
}catch(r){
return!1;
}
return e?(e.seq=(e.seq||"0")+"",e):!1;
}
return!1;
}
function d(t,r,i,s,n,o){
if(h.lsSupport!==!0||!t)return!1;
i=i+""||"0",o=o+""||"0";
var _=c(r);
3==s&&(_.appKey+=h.conflictName),4==s&&(_.appKey+=h.readOnlyDraftName);
var d=1,l=[],p="65080_31_1",f="",m={
data:"",
md5:"",
v:g
},S=+new Date,y={
list:t,
seq:i,
write_t:S,
active_id:n
};
3==s&&(y.ls_seq=o);
try{
m.data=JSON.stringify(y),m.md5=$.md5(m.data);
}catch(q){
d=-6,p+=";65080_86_1",l.push("serialize_err_STK:"+a(q));
}
if(1==d&&u.set(_.appKey,m,function(t){
d=-1,p+=";65080_34_1",l.push("write_err_STK:"+a(t));
}),1==d&&(f=u.get(_.appKey,function(t){
d=-2,p+=";65080_36_1",l.push("read_err_STK:"+a(t));
})),1==d&&m.md5!=f.md5&&(p+=";65080_38_1",d=-3),1==d)return 2==s&&(p+=";65080_47_1"),
3==s?(p+=";65080_88_1",v.logReport(p,e("conflict_data",r)+("|data:"+m.data),"ajax")):v.logReport(p,"","img"),
$("#js_autosave").attr("title"," 已自动保存").fadeIn(500),!0;
var K=e("writeerr",r)+"|handle_type："+d+"|"+l.join("|");
return p+=";65080_32_1",p+=h.lsStartWriteEnable&&h.lsStartReadEnable?";65080_40_1":";65080_42_1",
2==s?(p+=";65080_48_1",K+="|leave_data:"+m.data):3==s&&(p+=";65080_88_1",K+="|conflict_data:"+m.data),
v.logReport(p,K,"ajax"),!1;
}
function l(t){
if(h.lsSupport!==!0)return!1;
var r=c(t);
u.remove(r.timeKey);
var i=1,s=[],n="65080_63_1";
u.remove(r.appKey,function(t){
n+=";65080_70_1",i=-4,s.push("clear_err_STK:"+a(t));
});
var o="";
if(1==i&&(o=u.get(r.appKey,function(t){
n+=";65080_72_1",i=-2,s.push("read_err_STK:"+a(t));
})),1==i&&o&&(n+=";65080_74_1",i=-3),1==i)return v.logReport(n,"","img"),!0;
n+=";65080_64_1",n+=h.lsStartWriteEnable&&h.lsStartReadEnable?";65080_66_1":";65080_68_1";
var _=e("clearerr",t)+"|handle_type："+i+"|"+s.join("|");
return v.logReport(n,_,"ajax"),!1;
}
function c(t){
var e={
draftId:wx.data.uin+(t?t:"")
};
return e.timeKey="Time"+e.draftId,e.appKey="App"+e.draftId,e;
}
t("biz_common/jquery.md5.js");
var p=t("media/common.js"),f=t("common/qq/Class.js"),u=t("biz_web/lib/store.js"),m=t("biz_common/moment.js"),v=t("media/report.js"),g="v2",h={
lsStartWriteEnable:0,
lsStartReadEnable:0,
lsStartWriteErrLog:"",
lsStartReadErrLog:"",
namespace:"__editordraft__",
conflictName:"__conflict",
readOnlyDraftName:"__readonlydraft",
lsSupport:!1,
diffTime:Math.floor(wx.cgiData.svr_time-new Date/1e3)
};
r();
var S=f.declare({
init:function(t,e,a){
var r=this;
r.app_id=t;
var i=c(t);
r.draftId=i.draftId,r.timeKey=i.timeKey,r.appKey=i.appKey,r.seq=e+"",r.editor=a,
r.isDropped=!1,r.conflict=!1,r.activeId=0,r.data=r.get();
},
_updateAppid:function(t,e){
this.app_id=t;
var a=c(t);
this.draftId=a.draftId,this.timeKey=a.timeKey,this.appKey=a.appKey,this.seq=e;
},
_supportUserData:function(){
try{
var t=document.createElement("input");
t.addBehavior("#default#userData");
}catch(e){
return!1;
}
return!0;
},
_getSaveTime:function(){
return u.get(this.timeKey);
},
_showTips:function(t){
$("#js_autosave").attr("title",t+" 已自动保存").show(),$("#js_draft_tips").show().find(".js_msg_content").html("已从本地读取' + time + '的草稿");
},
_getDefaultLog:function(t){
return e(t,this.app_id);
},
_getErrorMessage:function(t){
return a(t);
},
_validateMutilWin:function(t,e){
"undefined"==typeof e&&(e=this.activeId);
var a=this,r=_(this.appKey);
return a.editor.fireEvent("reportAddNum",65080,104,1),r&&r.list?"gt"==p.dataSeqCompare(this.seq,r.seq)?!0:"lt"==!p.dataSeqCompare(this.seq,r.seq)?(this.data=r.list||!1,
this.seq=r.seq+"",t!==!0&&a.editor.fireEvent("syn_draft"),!1):!r.active_id||1*r.active_id<1*e?!0:1*r.active_id>1*e?(this.data=r.list||!1,
this.seq=r.seq+"",t!==!0&&a.editor.fireEvent("syn_draft"),!1):!0:!0;
},
showTips:function(){
$("#js_draft_tips").show().find(".js_msg_content").html('<span class="js_msg_content">点击<span class="link_global" id="js_draft_cancel">撤消</span>刚刚的导入操作。</span>');
},
active:function(t){
var e=this;
return this.activeId>0?!0:(this.activeId=+new Date,this.editor.fireEvent("active_state_change"),
setTimeout(function(){
e._validateMutilWin(t,0);
},1e3),!0);
},
silent:function(){
this.activeId=0,this.editor.fireEvent("active_state_change");
},
clear:function(){
return l(this.app_id);
},
save:function(t,e){
var a=this._validateMutilWin();
return a===!1?(this.silent(),!1):d(t,this.app_id,this.seq,e,this.activeId);
},
forceSave:function(t,e){
return d(t,this.app_id,this.seq,1,e||+new Date);
},
get:function(){
if(h.lsSupport!==!0)return!1;
var t=this,e=1,a=[],r="65080_50_1",i=!1,s="",n="";
if(s=u.get(t.appKey,function(i){
e=-2,r+=";65080_76_1",a.push("read_err_STK:"+t._getErrorMessage(i));
}),1==e&&s)if(r+=";65080_57_1","v2"==s.v)if(r+=";65080_82_1",n="",s.md5===$.md5(s.data)){
try{
s=JSON.parse(s.data);
}catch(o){
r+=";65080_80_1",e=-5;
}
1==e&&("gt"==p.dataSeqCompare(s.seq,t.seq)?(i=!1,e=-8,r+=";65080_90_1"):"gt"==p.dataSeqCompare(t.seq,s.seq)?(t.conflict=!0,
t.conflict_ls_seq=s.seq+"",i=s.list||!1):(t.conflict_ls_seq=s.seq+"",i=s.list||!1));
}else e=-3,r+=";65080_78_1";else"v1"==s.v?(r+=";65080_59_1",n=s.t||"",i=s.list||!1,
t.conflict_ls_seq="0"):(n=u.get(t.timeKey),r+=";65080_61_1",i=s||!1,t.conflict_ls_seq="0");
if(1==e&&n)try{
Number(wx.cgiData.updateTime)>m(n,"YYYY-MM-DD HH:mm:ss").unix()+h.diffTime&&(t.conflict=!0);
}catch(o){}
if(t.conflict===!0&&(r+=";65080_84_1"),1==e)return v.logReport(r,"","img"),i||!1;
r+=";65080_51_1",r+=h.lsStartWriteEnable&&h.lsStartReadEnable?";65080_53_1":";65080_55_1";
var _=t._getDefaultLog("readerr")+"|handle_type："+e+"|"+a.join("|");
return v.logReport(r,_,"ajax"),!1;
}
});
return{
constructor:S,
clear:l,
saveConflict:i,
saveReadOnlyDraft:s,
getReadOnlyDraft:n,
clearReadOnlyDraft:o
};
});define("media/article_interface.js",["media/appmsg_article.js","media/share_article.js","media/video_article.js","media/audio_article.js","media/image_article.js","media/reprint_article.js"],function(e){
"use strict";
function i(e){
var i=e.data||{},a=(i.share_page_type||0)+"";
"0"===a&&(1==i.is_share_copyright?a="9":0==i.is_share_copyright&&2==i.copyright_type&&(a="11"));
var r=new t[a](e);
return r;
}
function a(e){
var i=(e.type||0)+"";
"function"==typeof t[i].showDialog&&(e.ueditor&&e.ueditor.fireEvent("handleWinScroll",!1),
t[i].showDialog({
can_use_txvideo:e.can_use_txvideo,
onOk:function(i){
e.ueditor&&e.ueditor.fireEvent("handleWinScroll",!0),"function"==typeof e.onOk&&e.onOk(i);
},
onCancel:function(){
e.ueditor&&e.ueditor.fireEvent("handleWinScroll",!0),"function"==typeof e.onCancel&&e.onCancel();
}
}));
}
var t={
0:e("media/appmsg_article.js"),
9:e("media/share_article.js"),
5:e("media/video_article.js"),
7:e("media/audio_article.js"),
8:e("media/image_article.js"),
11:e("media/reprint_article.js")
};
return{
create:i,
showDialog:a
};
});define("media/media_cgi.js",["media/common.js","common/wx/Tips.js","common/wx/Cgi.js","resp_types/base_resp.rt.js","resp_types/file_cnt.rt.js"],function(e){
"use strict";
var r=e("media/common.js"),s=e("common/wx/Tips.js"),t=e("common/wx/Cgi.js"),i=e("resp_types/base_resp.rt.js"),n=e("resp_types/file_cnt.rt.js"),a={
del:function(e,r){
t.post({
mask:!1,
url:wx.url("/cgi-bin/operate_appmsg?sub=del&t=ajax-response"),
data:{
AppMsgId:e
},
rtDesc:i,
error:function(){
s.err("删除失败");
}
},function(e){
"0"==e.ret?(s.suc("删除成功"),r&&r(e)):s.err("删除失败");
});
},
del_sv:function(e,r){
t.post({
mask:!1,
url:wx.url("/cgi-bin/modifyfile?oper=del&t=ajax-response"),
data:{
fileid:e
},
rtDesc:i,
error:function(){
s.err("删除失败");
}
},function(e){
e.base_resp&&0==+e.base_resp.ret?(s.suc("删除成功"),r.suc&&r.suc(e)):(s.err("删除失败"),
r.fail&&r.fail(e));
});
},
edit_sv:function(e,r){
t.post({
mask:!1,
url:wx.url("/cgi-bin/modifyfile?oper=rename&t=ajax-response"),
data:{
fileid:e.id,
filename:e.name
},
rtDesc:i,
error:function(){
s.err("编辑失败");
}
},function(e){
e.base_resp&&0==+e.base_resp.ret?(s.suc("编辑成功"),r.suc&&r.suc(e)):(s.err("编辑失败"),
r.fail&&r.fail(e));
});
},
save:function(e,i,n,a,o,p){
var c=wx.url(n.AppMsgId?"/cgi-bin/operate_appmsg?t=ajax-response&sub=update&type=%s".sprintf(i):"/cgi-bin/operate_appmsg?t=ajax-response&sub=create&type=%s".sprintf(i));
n.ajax=1,t.post({
url:c,
data:n,
dataType:"json",
rtDesc:{
ret_R:"string",
appMsgId_R:"number"
},
error:function(e,r){
"timeout"!=r&&s.err("保存失败"),o&&o(!1,-1,"",{
myErrMsg:"保存失败"
});
},
complete:p
},function(e){
if("0"==e.ret)s.suc("保存成功"),a&&a(e);else{
var t=r.articleRetCode(e),i=t.index;
e.myErrMsg=t.errmsg,o&&o(i,e.ret,e.remind_wording,e);
}
});
},
preview:function(e,i,n,a,o){
t.post({
url:wx.url("/cgi-bin/operate_appmsg?sub=preview&t=ajax-appmsg-preview&type=%s".sprintf(i)),
data:n,
dataType:"json",
rtDesc:{
ret_R:"string"
},
error:function(){
s.err("发送失败，请稍后重试"),o&&o({
word:"发送失败，请稍后重试"
});
}
},function(e){
if("0"==e.ret)s.suc("发送预览成功，请留意你的手机微信"),a&&a(e);else{
var t=r.articleRetCode(e);
e.word=t.errmsg,e.antispam=t.index,15==i&&s.err(e.word),o&&o(e);
}
});
},
modifyPreview:function(e,i,n){
t.post({
url:wx.url("/cgi-bin/masssendmodify?action=preview"),
data:e,
dataType:"json",
rtDesc:{
ret_R:"string"
},
error:function(){
s.err("发送失败，请稍后重试"),n&&n({
word:"发送失败，请稍后重试"
});
}
},function(e){
if("0"==e.ret)s.suc("发送预览成功，请留意你的手机微信"),i&&i(e);else{
var t=r.articleRetCode(e);
e.word=t.errmsg,e.antispam=t.index,15==type&&s.err(e.word),n&&n(e);
}
});
},
getList:function(e,r,a,o,p,c){
var u="";
u=wx.url(p?"/cgi-bin/appmsg?type=%s&action=list&begin=%s&count=%s&query=%s&f=json".sprintf(e,r,a,p):"/cgi-bin/appmsg?type=%s&action=list&begin=%s&count=%s&f=json".sprintf(e,r,a)),
0==c?u=wx.url("/cgi-bin/appmsg?type=%s&action=list&begin=%s&count=%s&f=json".sprintf(e,r,a)):1==c&&(u=wx.url("/cgi-bin/video_mgr?type=%s&action=get_video_list&begin=%s&offset=%s&f=json".sprintf(e,r,a))),
t.get({
mask:!1,
url:u,
rtDesc:$.extend({},i,{
app_msg_info:$.extend({},n,{
item_R:[],
search_cnt:"number"
})
}),
error:function(){
s.err("获取列表失败");
}
},function(e){
e&&e.base_resp&&0==e.base_resp.ret?o&&o(e.app_msg_info):s.err("获取列表失败");
});
},
getSingleList:function(e,r,i,n){
t.get({
mask:!1,
url:wx.url("/cgi-bin/appmsg?type=%s&action=for_advert&begin=%s&count=%s&f=json".sprintf(e,r,i)),
error:function(){
s.err("获取列表失败");
}
},function(e){
e&&e.base_resp&&0==e.base_resp.ret?n&&n(e.app_msg_info):s.err("获取列表失败");
});
}
},o={
save:function(e,r,i){
var n=wx.url("/cgi-bin/operate_vote");
e.ajax=1,t.post({
url:n,
data:e,
error:function(){
s.err("保存失败"),i&&i();
}
},function(e){
e&&e.base_resp&&0==e.base_resp.ret?(s.suc("保存成功"),r&&r(e)):(s.err("保存失败"),i&&i(e));
});
}
};
return{
rename:function(e,r,i){
t.post({
mask:!1,
url:wx.url("/cgi-bin/modifyfile?oper=rename&t=ajax-response"),
data:{
fileid:e,
fileName:r
},
error:function(){
s.err("重命名失败");
}
},function(e){
if(!e||!e.base_resp)return void s.err("重命名失败");
var r=e.base_resp.ret;
if("0"==r)s.suc("重命名成功"),i&&i(e);else switch(r){
case"200002":
s.err("素材名不能包含空格");
break;

default:
s.err("重命名失败");
}
});
},
del:function(e,r){
t.post({
mask:!1,
url:wx.url("/cgi-bin/modifyfile?oper=del&t=ajax-response"),
data:{
fileid:e
},
error:function(){
s.err("删除失败");
}
},function(e){
if(!e||!e.base_resp)return void s.err("删除失败");
var t=e.base_resp.ret;
"0"==t?(s.suc("删除成功"),r&&r(e)):s.err("删除失败");
});
},
getList:function(e,r,a,o){
(2==e||3==e)&&(e+="&action=select"),t.get({
mask:!1,
url:wx.url("/cgi-bin/filepage?type=%s&begin=%s&count=%s&f=json".sprintf(e,r,a)),
rtDesc:$.extend({},i,{
page_info_R:$.extend({},n,{
file_item_R:[{
file_id_R:"number",
name_R:"string",
size_R:"string",
update_time_R:"number",
type_R:"number"
}]
})
}),
error:function(){
s.err("获取列表失败");
}
},function(e){
e&&e.base_resp&&0==e.base_resp.ret?o&&o(e.page_info):s.err("获取列表失败");
});
},
appmsg:a,
vote:o
};
});define("common/wx/time.js",[],function(){
"use strict";
function e(e){
var t=new Date(1e3*e),r=new Date,g=t.getTime(),a=r.getTime(),u=864e5;
return u>a-g&&r.getDate()==t.getDate()?"%s:%s".sprintf(n(t.getHours()),n(t.getMinutes())):2*u>a-g&&new Date(1*t+u).getDate()==r.getDate()?"昨天 %s:%s".sprintf(n(t.getHours()),n(t.getMinutes())):6*u>=a-g?"%s %s:%s".sprintf(s[t.getDay()],n(t.getHours()),n(t.getMinutes())):t.getFullYear()==r.getFullYear()?"%s月%s日".sprintf(n(t.getMonth()+1),n(t.getDate())):"%s年%s月%s日".sprintf(t.getFullYear(),n(t.getMonth()+1),n(t.getDate()));
}
function t(e){
var t=new Date(1e3*e);
return"%s-%s-%s %s:%s:%s".sprintf(t.getFullYear(),n(t.getMonth()+1),n(t.getDate()),n(t.getHours()),n(t.getMinutes()),n(t.getSeconds()));
}
function r(e,t){
var r=["日","一","二","三","四","五","六"],n=t.replace(/yyyy|YYYY/,e.getFullYear()).replace(/yy|YY/,g(e.getFullYear()%100,2)).replace(/mm|MM/,g(e.getMonth()+1,2)).replace(/m|M/g,e.getMonth()+1).replace(/dd|DD/,g(e.getDate(),2)).replace(/d|D/g,e.getDate()).replace(/hh|HH/,g(e.getHours(),2)).replace(/h|H/g,e.getHours()).replace(/ii|II/,g(e.getMinutes(),2)).replace(/i|I/g,e.getMinutes()).replace(/ss|SS/,g(e.getSeconds(),2)).replace(/s|S/g,e.getSeconds()).replace(/w/g,e.getDay()).replace(/W/g,r[e.getDay()]);
return n;
}
function g(e,t){
for(var r=0,g=t-(e+"").length;g>r;r++)e="0"+e;
return e+"";
}
var n=function(e){
return e+="",e.length>=2?e:"0"+e;
},s=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
return{
timeFormat:e,
getFullTime:t,
formatDate:r
};
});define("common/wx/mpEditor/common/base_class.js",["common/qq/Class.js"],function(e){
"use strict";
var t=e("common/qq/Class.js"),n=t.declare({
extend:function(e){
for(var t=1,n=arguments.length;n>t;t++)for(var i in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],i)&&(e[i]=arguments[t][i]);
return e;
},
bindEventInterface:function(e){
return this.domUtils&&this.editor?("domUtils"==e.type?this.domUtils.on(e.dom,e.eventName,e.fun):"editor"==e.type&&this.editor.addListener(e.eventName,e.fun),
this.__EventInterfaceCache||(this.__EventInterfaceCache=[]),void this.__EventInterfaceCache.push(e)):!1;
},
unbindEventInterface:function(){
if(!this.domUtils||!this.editor)return!1;
if(this.__EventInterfaceCache)for(;this.__EventInterfaceCache.length>0;){
var e=this.__EventInterfaceCache[0];
"domUtils"==e.type?this.domUtils.un(e.dom,e.eventName,e.fun):"editor"==e.type&&this.editor.removeListener(e.eventName,e.fun),
this.__EventInterfaceCache.shift();
}
this.__EventInterfaceCache=[];
},
unbindSpecifyEvent:function(e){
if(!this.domUtils||!this.editor)return!1;
if(this.__EventInterfaceCache&&e)for(var t=0,n=this.__EventInterfaceCache.length;n>t;t++){
var i=this.__EventInterfaceCache[t];
if(i.type===e.type&&i.eventName===e.eventName&&i.fun===e.fun&&(!e.dom||e.dom&&i.dom===e.dom)){
"domUtils"==i.type?this.domUtils.un(i.dom,i.eventName,i.fun):"editor"==i.type&&this.editor.removeListener(i.eventName,i.fun),
this.__EventInterfaceCache.splice(t,1);
break;
}
}
}
});
return n;
});define("common/wx/media/keywordDialog.js",["biz_web/ui/checkbox.js","common/wx/popup.js","tpl/media/keyword_dialog.html.js"],function(i){
"use strict";
i("biz_web/ui/checkbox.js"),i("common/wx/popup.js");
var t=i("tpl/media/keyword_dialog.html.js"),n=function(i){
this.hint_word=i.hint_word||[],this.remind_wording=i.remind_wording||"你所编辑的图文消息可能含有违反微信公众平台平台协议、相关法律法规和政策的内容|你可以继续保存或发布该图文消息，若保存或发布后，经核实涉嫌含有上述相关内容的，将可能被作删除、屏蔽等处理。<br/><a href='https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN&token=2056316619' target='_blank'>对应规则</a>",
this.buttons=i.buttons,this.onChange=i.onChange,this.onHide=i.onHide,this._initData(),
this._init();
};
return n.prototype._initData=function(){
for(var i=[],t=0;t<this.hint_word.length;t++)-1==i.indexOf(this.hint_word[t])&&i.push(this.hint_word[t]);
this.words=i;
},n.prototype._init=function(){
var i=this;
$(wx.T(t,{
words:i.words,
title:i.remind_wording.split("|")[0],
desc:i.remind_wording.split("|")[1]
})).popup({
title:"关键词提示",
buttons:i.buttons,
onShow:function(){
i.$dialog=this.get(),this.get().find(".js_btn_p").eq(0).disable(),i.$dialog.find(".js_checkbox").checkbox({
multi:!1,
onChanged:function(t){
i.onChange(i.$dialog,t);
}
});
},
onHide:i.onHide
});
},n;
});define("common/wx/media/shareCopyrightDialog.js",["biz_web/ui/checkbox.js","common/wx/Cgi.js","common/wx/Tips.js","common/wx/popup.js","common/wx/popover.js","tpl/media/sharecopyright_dialog.html.js","tpl/media/sharecopyright_item.html.js","tpl/media/reprint_tips_popover.html.js","common/wx/pagebar.js","common/wx/media/chooseOriArticlePubPopover.js","common/wx/media/reprintArticleData.js"],function(e){
"use strict";
e("biz_web/ui/checkbox.js");
var t=e("common/wx/Cgi.js"),i=e("common/wx/Tips.js"),a=(e("common/wx/popup.js"),
e("common/wx/popover.js")),n=e("tpl/media/sharecopyright_dialog.html.js"),o=e("tpl/media/sharecopyright_item.html.js"),s=e("tpl/media/reprint_tips_popover.html.js"),r=e("common/wx/pagebar.js"),c=e("common/wx/media/chooseOriArticlePubPopover.js"),l=e("common/wx/media/reprintArticleData.js"),d=(template.render,
function(e){
return new h(e);
}),h=function(e){
this.options=e,this._g={
perPage:3
},this.events=[],this.curData=[],this.seletedIndex=void 0,p.init.call(this);
},p={
init:function(){
var e=this,t=e.options=$.extend(!0,{
dialogTpl:n,
itemTpl:o,
className:"share_article_dialog",
title:"转载图文消息",
onOK:null,
onCancel:null
},e.options);
t.dialogTpl=template.compile(t.dialogTpl)(t),e.on("ok",function(){
return e.curData&&0!=e.curData.length?"undefined"!=typeof e.seletedIndex&&e.curData[e.seletedIndex]?("function"==typeof t.onOK&&(e.curData[e.seletedIndex].pubType=1*$(e._g.dom.$articleContent.find("input[type=radio][name=ori_article_item]").get(e.seletedIndex)).data("pub"),
t.onOK.call(this,e.curData[e.seletedIndex])),this.destroy(),void(this.dialog=null)):void i.err("请选择原创文章"):void i.err("请搜索原创文章");
}),e.on("cancel",function(){
this.destroy(),"function"==typeof t.onCancel&&t.onCancel.call(this),this.dialog=null;
}),e.dialog=$(t.dialogTpl.trim()).popup({
title:t.title,
className:"share_article_dialog",
width:900,
autoShow:!0,
buttons:[{
text:"确定",
type:"disabled",
click:function(){
e._g.dom.$ok.hasClass("btn_disabled")||e.trigger("ok");
}
},{
text:"取消",
click:function(){
e.trigger("cancel");
}
}],
onHide:function(){
e.trigger("cancel");
}
});
var a=e._g,s=e.dialog.popup("get");
a.dom={
$dialogDom:s,
$ok:s.find(".js_btn_p").eq(0),
$searchInput:s.find(".js_search_input"),
$searchBtn:s.find(".js_search_btn"),
$searchDel:s.find(".js_search_del"),
$searchTips:s.find(".js_search_tips"),
$tipsMain:s.find(".js_tips_main"),
$articleContent:s.find(".js_article_content"),
$loading:s.find(".js_loading"),
$pageBar:s.find(".js_pagebar"),
$adArea:$("#js_open_ad_reprint_area"),
$checkbox:s.find("#js_open_ad_reprint_checkbox"),
$shareArticleArea:s.find(".js_share_article_area")
},a.dom.$ok.addClass("btn_primary"),p.initEvent.call(e);
},
initEvent:function(){
{
var e=this,t=this._g,i=t.dom;
this.options;
}
i.$searchBtn.click(function(){
var t=i.$searchInput.val().trim();
t&&(i.$searchTips.text(""),p.getSearchData.call(e,{
val:t,
page:0
}));
}),i.$checkbox.checkbox({
multi:!0,
onChanged:function(e){
i.$ok[e.prop("checked")?"enable":"disable"]();
}
}),i.$searchInput.keyup(function(t){
var a=i.$searchInput.val().trim();
a?(i.$searchDel.show(),i.$searchTips.text(""),i.$tipsMain.hide()):p.resetSearch.call(e);
var n=t.keyCode||t.which||0;
13==n&&a&&p.getSearchData.call(e,{
val:a,
page:0
});
}),i.$searchDel.click(function(){
p.resetSearch.call(e);
}),i.$articleContent.click(function(t){
var a=$(t.target);
a.parents(".js_choosePublishWay").length&&(a=a.parents(".js_choosePublishWay")),
a.hasClass("js_choosePublishWay")&&a.hasClass("js_enable")&&(c({
type:"initiative",
target:a,
textDom:a.find(".js_publishWayText"),
grayDom:a.siblings(".js_gray"),
value:1*a.data("pub"),
sourceReprintStatus:a.data("source_reprint_status"),
openAdReprintStatus:a.data("open_ad_reprint_status"),
source_type:a.data("source_type"),
source_url_encode:a.data("source_url_encode"),
article_url_encode:a.data("article_url_encode"),
article_title_encode:a.data("article_title_encode"),
change:function(t,n,o){
var s=a.data("pub",t).parents("tr").find("input[type=radio][name=ori_article_item]"),r=s.data("index");
if(s.data("pub",t),0===t)switch(n){
case"EN_SOURCE_REPRINT_STATUS_REPRINT_WITH_MODIFY":
case"EN_SOURCE_REPRINT_STATUS_REPRINT_WITHOUT_MODIFY":
e.seletedIndex===r&&i.$ok.find("button").text("转载"),"EN_CAN_OPEN_AD_REPRINT"===o&&p.showAdArea.call(e,r);
break;

case"EN_SOURCE_REPRINT_STATUS_IN_WHITE_LIST_WITH_SOURCE":
case"EN_SOURCE_REPRINT_STATUS_IN_WHITE_LIST_WITHOUT_SOURCE":
e.seletedIndex===r&&i.$ok.find("button").text("转载"),p.hideAdArea.call(e,r);
}else e.seletedIndex===r&&i.$ok.find("button").text("分享"),p.hideAdArea.call(e,r);
}
}),p.scrollToSee.call(e,a[0],i.$shareArticleArea[0],"top",!0));
});
},
resetSearch:function(){
var e=this._g,t=e.dom;
t.$searchInput.val(""),t.$searchDel.hide(),t.$searchTips.text(""),t.$tipsMain.hide();
},
checkLoading:function(){
return this._g.gettingData;
},
showLoading:function(){
var e=this._g,t=e.dom;
e.gettingData=!0,t.$loading.show(),t.$articleContent.hide();
},
hideLoading:function(){
var e=this._g,t=e.dom;
e.gettingData=!1,t.$loading.hide(),t.$articleContent.show();
},
getSearchData:function(e){
var i=this,a=(this.options,this._g),n=a.dom;
if(p.checkLoading.call(this)!==!0){
if(!/mp\.weixin\.qq\.com/.test(e.val)&&p.getByteLen.call(this,e.val)>160)return void p.renderArticle.call(i,{
code:-1,
msg:"输入文字超长，请保持在40个汉字字符以内"
});
p.showLoading.call(this),i.seletedIndex=void 0,n.$pageBar.hide(),n.$adArea.hide(),
n.$ok.disable().find("button").text("确定"),t.post({
url:"/cgi-bin/operate_appmsg?sub=check_appmsg_copyright_stat",
data:{
url:e.val,
begin:e.page*a.perPage,
count:a.perPage
},
mask:!1
},{
done:function(t){
p.hideLoading.call(i);
var a="";
if(t&&t.base_resp){
if(0==t.base_resp.ret)return void p.renderArticle.call(i,{
code:0,
list:t.list||[],
total:1*t.total,
openAdReprintStatus:"EN_ALREADY_OPEN_AD_REPRINT",
page:e.page,
searchKey:e.val
});
switch(1*t.base_resp.ret){
case 64701:
a="不是有效的公众号原创文章链接";
break;

case 200013:
a="你的操作太频繁，请稍后再试";
break;

default:
a="系统繁忙，请稍后再试";
}
return void p.renderArticle.call(i,{
code:-1,
msg:a
});
}
return void p.renderArticle.call(i,{
code:-1
});
},
fail:function(){
p.hideLoading.call(i),p.renderArticle.call(i,{
code:-1
});
}
});
}
},
renderArticle:function(e){
if(this.dialog){
var t=this,i=this._g,a=i.dom,n=e.msg||"";
if(0==e.code||e.msg?0!=e.code||e.list&&0!=e.list.length||e.msg||(n="暂无搜索结果"):n="系统繁忙，请稍后再试",
this.curData=e.list||[],this.seletedIndex=void 0,a.$ok.disable(),a.$loading.hide(),
n?(a.$searchTips.text(n),a.$tipsMain.show(),a.$articleContent.hide()):(this.curData=l({
type:"initiative",
list:this.curData,
openAdReprintStatus:e.openAdReprintStatus
}),a.$articleContent.show(),a.$articleContent.html(template.compile(this.options.itemTpl)({
data:this.curData,
openAdReprintStatus:e.openAdReprintStatus
}).trim())),this.curData.length>0){
var o=a.$articleContent.find("input[type=radio][name=ori_article_item]"),s=e.openAdReprintStatus;
o.checkbox({
onChanged:function(e){
t.seletedIndex=1*e.data("index");
var i=a.$ok.find("button"),n=e.data("source_reprint_status"),o=1*e.data("pub");
i.text(0===o?"转载":"分享"),"EN_CAN_OPEN_AD_REPRINT"!==s||"EN_SOURCE_REPRINT_STATUS_REPRINT_WITHOUT_MODIFY"!==n&&"EN_SOURCE_REPRINT_STATUS_REPRINT_WITH_MODIFY"!==n||0!==o?p.hideAdArea.call(t):p.showAdArea.call(t);
}
}),o&&1==o.length&&o.trigger("click");
}
0==e.code&&e.total>0&&"undefined"!=typeof e.page?p.initPageBar.call(t,{
curPage:e.page+1,
total:e.total,
searchKey:e.searchKey
}):a.$pageBar.hide(),this.dialog.popup("resetPosition"),p.bindArticleEvent.call(t,a.$articleContent);
}
},
showAdArea:function(e){
if(void 0!==this.seletedIndex&&(void 0===e||e===this.seletedIndex)){
var t=this._g.dom;
t.$adArea.show(),t.$ok[t.$checkbox.prop("checked")?"enable":"disable"]();
}
},
hideAdArea:function(e){
if(void 0!==this.seletedIndex&&(void 0===e||e===this.seletedIndex)){
var t=this._g.dom;
t.$adArea.hide(),t.$ok.enable();
}
},
bindArticleEvent:function(e){
e.find(".js_open_reprint_tips").each(function(){
new a({
dom:this,
container:this,
content:s,
isToggle:!0,
defaultOpen:!1
});
});
},
initPageBar:function(e){
var t=this,i=this._g,a=i.dom;
t.pageBar&&t.pageBar.destroy(),t.pageBar=new r({
container:a.$pageBar,
perPage:i.perPage,
initShowPage:e.curPage,
totalItemsNum:Math.min(e.total,2e3),
first:!1,
last:!1,
isSimple:!0,
callback:function(i){
p.getSearchData.call(t,{
val:e.searchKey,
page:1*i.currentPage-1
});
}
});
},
getByteLen:function(e){
return e.replace(/[^\x00-\xff]/g,"****").length;
},
scrollToSee:function(e,t,i,a){
var n=e.getBoundingClientRect()[i],o=t.getBoundingClientRect()[i];
if(!a)switch(i){
case"top":
case"left":
if(n>o)return;
break;

case"bottom":
case"right":
if(o>n)return;
}
t[["top","bottom"].indexOf(i)>-1?"scrollTop":"scrollLeft"]+=n-o;
}
},_={
on:function(e,t){
if(t){
var i=this.events;
return i[e]=i[e]||[],i[e].push(t),this;
}
},
trigger:function(e){
var t=this,i=arguments,a=t.events[e];
return a?($.each(a,function(e,a){
a.apply(t,Array.prototype.slice.call(i,1));
}),this):void 0;
},
hide:function(){
return this.dialog.popup("hide"),this;
},
show:function(){
return this.dialog.popup("show"),this;
},
destroy:function(){
!!this.dialog&&this.dialog.popup("remove"),this.dialog=null,this._tooltips&&this._tooltips.$dom&&(this._tooltips.$dom.remove(),
this._tooltips=null),this.pageBar&&this.pageBar.destroy(),this.curData=[],this.seletedIndex=void 0,
this._g.dom={};
}
};
return $.extend(h.prototype,_),d;
});define("media/common.js",["media/article_data_key.js","biz_common/jquery.validate.js","common/wx/mpEditor/plugin/filter.js"],function(e){
"use strict";
function r(e){
var r=e.key+(e.strict===!0?"Strict":"");
return"function"==typeof u[r]?u[r](e):!0;
}
function a(e){
function r(){
a&&a.fireEvent("checkRemoteList")&&a.fireEvent("checkdomAsynList")&&(a.removeListener("remoteimg_all_complete domasyn_all_complete",r),
s());
}
var a=e.editor,s=e.callback;
return a.fireEvent("checkRemoteList")&&a.fireEvent("checkdomAsynList")?void s():(a.addListener("remoteimg_all_complete domasyn_all_complete",r),
void a.funcPvUvReport("save_remoting_img"));
}
function s(e){
var r,a,s=$(e.imgDom),t=e.remoteType,c=e.format,m=e.img_url,n=e.editor;
if(s&&0!=s.length){
if(a=/^img$/i.test(s[0].nodeName)?"img":"bg",s.removeClass("js_catchingremoteimage"),
"img"==a)r=s.attr("src"),s.attr({
src:m
}).removeAttr("_src").removeAttr("data-src").data("src",""),"success"==t&&c?s.attr({
"data-type":c
}):"error"==t&&s.addClass("js_catchremoteimageerror");else if("bg"==a){
var g=s[0].getAttribute("style")||s[0].style.cssText||"";
g=g.match(/;?\s*(background|background-image)\s*\:[^;]*?url\(([^\)]+)\)/),g&&g[2]&&(r=g[2].replace(/^['"]|['"]$/g,"")),
s.css({
"background-image":"url("+m+")"
}),"error"==t&&s.addClass("js_catchremoteimageerror");
}
if(s.removeAttr("data-remoteid").data("remoteid",""),/^blob:/.test(r))try{
var i=n.getWindow(),o=i.window.URL||i.window.webkitURL;
o.revokeObjectURL(r);
}catch(b){}
}
}
function t(e){
var r,a={
errmsg:"",
index:!1
};
switch("undefined"!=typeof e.ret?r=1*e.ret:e.base_resp&&"undefined"!=typeof e.base_resp.ret&&(r=1*e.base_resp.ret),
1*r){
case-8:
case-6:
e.ret="-6",a.errmsg="请输入验证码";
break;

case 62752:
a.errmsg="可能含有具备安全风险的链接，请检查";
break;

case 64505:
a.errmsg="发送预览失败，请稍后再试";
break;

case 64504:
a.errmsg="保存图文消息发送错误，请稍后再试";
break;

case 64518:
a.errmsg="正文只能包含一个投票";
break;

case 10704:
case 10705:
a.errmsg="该素材已被删除";
break;

case 10701:
a.errmsg="用户已被加入黑名单，无法向其发送消息";
break;

case 10703:
a.errmsg="对方关闭了接收消息";
break;

case 10700:
case 64503:
a.errmsg="1.接收预览消息的微信尚未关注公众号，请先扫码关注<br /> 2.如果已经关注公众号，请查看微信的隐私设置（在手机微信的“我->设置->隐私->添加我的方式”中），并开启“可通过以下方式找到我”的“手机号”、“微信号”、“QQ号”，否则可能接收不到预览消息";
break;

case 64502:
a.errmsg="你输入的微信号不存在，请重新输入";
break;

case 64501:
a.errmsg="你输入的帐号不存在，请重新输入";
break;

case 412:
a.errmsg="图文中含非法外链";
break;

case 64515:
a.errmsg="当前素材非最新内容，请重新打开并编辑";
break;

case 320001:
a.errmsg="该素材已被删除，无法保存";
break;

case 64702:
a.errmsg="标题超出64字长度限制";
break;

case 64703:
a.errmsg="摘要超出120字长度限制";
break;

case 64704:
a.errmsg="推荐语超出300字长度限制";
break;

case 64708:
a.errmsg="推荐语超出140字长度限制";
break;

case 64515:
a.errmsg="当前素材非最新内容";
break;

case 200041:
a.errmsg="此素材有文章存在违规，无法编辑";
break;

case 64506:
a.errmsg="保存失败,链接不合法";
break;

case 64507:
a.errmsg="内容不能包含链接，请调整";
break;

case 64510:
a.errmsg="内容不能包含语音，请调整";
break;

case 64511:
a.errmsg="内容不能包多个语音，请调整";
break;

case 64512:
a.errmsg="文章中语音错误,请使用语音添加按钮重新添加。";
break;

case 64508:
a.errmsg="查看原文链接可能具备安全风险，请检查";
break;

case 64550:
a.errmsg="请勿插入不合法的图文消息链接";
break;

case 64558:
a.errmsg="请勿插入图文消息临时链接，链接会在短期失效";
break;

case 64559:
a.errmsg="请勿插入未群发的图文消息链接";
break;

case-99:
a.errmsg="内容超出字数，请调整";
break;

case 64705:
a.errmsg="内容超出字数，请调整";
break;

case-1:
a.errmsg="系统错误，请注意备份内容后重试";
break;

case-2:
case 200002:
a.errmsg="参数错误，请注意备份内容后重试";
break;

case 64509:
a.errmsg="正文中不能包含超过3个视频，请重新编辑正文后再保存。";
break;

case-5:
a.errmsg="服务错误，请注意备份内容后重试。";
break;

case 64513:
a.errmsg="请从正文中选择封面，再尝试保存。";
break;

case-206:
a.errmsg="目前，服务负荷过大，请稍后重试。";
break;

case 10801:
a.errmsg="标题不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。",a.index=1*e.msg;
break;

case 10802:
a.errmsg="作者不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。",a.index=1*e.msg;
break;

case 10803:
a.errmsg="敏感链接，请重新添加。",a.index=1*e.msg;
break;

case 10804:
a.errmsg="摘要不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。",a.index=1*e.msg;
break;

case 10806:
a.errmsg="正文不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。",a.index=1*e.msg;
break;

case 10808:
a.errmsg="推荐语不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。",a.index=1*e.msg;
break;

case 10807:
a.errmsg="内容不能违反公众平台协议、相关法律法规和政策，请重新编辑。";
break;

case-2e4:
a.errmsg="登录态超时，请重新登录。";
break;

case 64513:
a.errmsg="封面必须存在正文中，请检查封面";
break;

case 64551:
a.errmsg="请检查图文消息中的微视链接后重试。";
break;

case 64552:
a.errmsg="请检查阅读原文中的链接后重试。";
break;

case 64553:
a.errmsg="请不要在图文消息中插入超过5张卡券。请删减卡券后重试。";
break;

case 64554:
a.errmsg="在当前情况下不允许在图文消息中插入卡券，请删除卡券后重试。";
break;

case 64555:
a.errmsg="请检查图文消息卡片跳转的链接后重试。";
break;

case 64556:
a.errmsg="卡券不属于该公众号，请删除后重试";
break;

case 64557:
a.errmsg="卡券无效，请删除后重试。";
break;

case 13002:
a.errmsg="该广告卡片已过期，删除后才可保存成功",a.index=1*e.msg;
break;

case 13003:
a.errmsg="已有文章插入过该广告卡片，一个广告卡片仅可插入一篇文章",a.index=1*e.msg;
break;

case 13004:
a.errmsg="该广告卡片与图文消息位置不一致",a.index=1*e.msg;
break;

case 15801:
case 15802:
case 15803:
case 15804:
case 15805:
case 15806:
a.errmsg=e.remind_wording||"你所编辑的内容可能含有违反微信公众平台平台协议、相关法律法规和政策的内容";
break;

case 1530503:
a.errmsg="请勿添加其他公众号的主页链接";
break;

case 1530504:
a.errmsg="请勿添加其他公众号的主页链接";
break;

case 1530510:
a.errmsg="链接已失效，请在手机端重新复制链接";
break;

case 153007:
a.errmsg="很抱歉，原创声明不成功|你的文章内容未达到声明原创的要求，满足以下任一条件可发起声明：<br />1、文章文字大于300字<br />2、文章文字小于300字，视频均为你已成功声明原创的视频<br />3、文章文字小于300字，无视频，图片（包括封面图）均为你已成功声明原创的图片";
break;

case 153008:
a.errmsg="很抱歉，原创声明不成功|你的文章内容少于300字，未达到申请原创内容声明的字数要求。";
break;

case 153009:
a.errmsg="很抱歉，原创声明不成功|你的文章内容未达到声明原创的要求，满足以下任一条件可发起声明：<br />1、文章文字大于300字<br />2、文章文字小于300字，无视频，图片（包括封面图）均为你已成功声明原创的图片";
break;

case 153010:
a.errmsg="很抱歉，原创声明不成功|你的文章内容未达到声明原创的要求，满足以下任一条件可发起声明：<br />1、文章文字大于300字<br />2、文章文字小于300字，视频均为你已成功声明原创的视频";
break;

case 1530511:
a.errmsg="链接已失效，请在手机端重新复制链接";
break;

case 220001:
a.errmsg='"素材管理"中的存储数量已达到上限，请删除后再操作。';
break;

case 220002:
a.errmsg="你的图片库已达到存储上限，请进行清理。";
break;

case 153012:
a.errmsg="请设置转载类型";
break;

case 200042:
a.errmsg="图文中包含的小程序卡片不能多于50个";
break;

case 200043:
a.errmsg="图文中包含没有关联的小程序，请删除后再保存";
break;

case 64601:
a.errmsg="一篇文章只能插入一个广告卡片";
break;

case 64602:
a.errmsg="尚未开通文中广告位，但文章中有广告";
break;

case 64603:
a.errmsg="文中广告前不足300字";
break;

case 64604:
a.errmsg="文中广告后不足300字";
break;

case 64605:
a.errmsg="文中不能同时插入文中广告和互选广告";
break;

case 65101:
a.errmsg="图文模版数量已达到上限，请删除后再操作";
break;

case 64560:
a.errmsg="请勿插入历史图文消息页链接";
break;

case 64561:
a.errmsg="请勿插入mp.weixin.qq.com域名下的非图文消息链接";
break;

case 64562:
a.errmsg="请勿插入非mp.weixin.qq.com域名的链接";
break;

case 153013:
a.errmsg="文章内含有投票，不能设置为开放转载";
break;

case 153014:
a.errmsg="文章内含有卡券，不能设置为开放转载";
break;

case 153015:
a.errmsg="文章内含有小程序链接，不能设置为开放转载";
break;

case 153016:
a.errmsg="文章内含有小程序链接，不能设置为开放转载";
break;

case 153017:
a.errmsg="文章内含有小程序卡片，不能设置为开放转载";
break;

case 153018:
a.errmsg="文章内含有商品，不能设置为开放转载";
break;

case 153019:
a.errmsg="文章内含有广告卡片，不能设置为开放转载";
break;

case 153020:
a.errmsg="文章内含有广告卡片，不能设置为开放转载";
break;

case 153021:
a.errmsg="文章内含有广告卡片，不能设置为开放转载";
break;

case 153101:
a.errmsg="含有原文已删除的转载文章，请删除后重试";
break;

case 64707:
a.errmsg="赞赏账户授权失效或者状态异常";
break;

case 420001:
a.errmsg="封面图不支持GIF，请更换";
break;

default:
a.errmsg="系统繁忙，请稍后重试";
}
return a;
}
function c(e,r,a,s,t){
if(t=t===!0?!0:!1,e===r)return 0!==e||1/e===1/r;
if(null==e||null==r)return e===r;
var n=Object.prototype.toString.call(e);
if(n!==Object.prototype.toString.call(r))return!1;
switch(n){
case"[object RegExp]":
case"[object String]":
return""+e==""+r;

case"[object Number]":
return+e!==+e?+r!==+r:0===+e?1/+e===1/r:+e===+r;

case"[object Date]":
case"[object Boolean]":
return+e===+r;
}
var g="[object Array]"===n;
if(!g&&("object"!=typeof e||"object"!=typeof r))return!1;
a=a||[],s=s||[];
for(var i=a.length;i--;)if(a[i]===e)return s[i]===r;
if(a.push(e),s.push(r),g){
if(i=e.length,i!==r.length)return!1;
for(;i--;)if(!c(e[i],r[i],a,s,t))return!1;
}else for(var o in e)if(e.hasOwnProperty(o)&&(t||p.eqWhiteKey[o])&&!(!t&&1*e.is_share_copyright==1&&p.shareCopyrightIgnoreKey.indexOf(","+o+",")>=0||"undefined"==typeof e[o]&&"undefined"==typeof r[o])){
var b=e[o],k=r[o];
if("cdn_url"==o?(b=b.http2https().replace(/\?$/,""),k=k.http2https().replace(/\?$/,"")):"content"==o&&(b=m(b),
k=m(k)),!r.hasOwnProperty(o)||!c(b,k,a,s,t))return!1;
}
return a.pop(),s.pop(),!0;
}
function m(e){
return UE&&(e=e.replace(UE.dom.domUtils.fillCharReg,"")),e=e.replace(/\s/g," "),
e=e.replace(/<br([^>]*?)>/g,""),e=e.replace('<span data-fillchar="1"></span>',""),
e=b.removeAttribute(e,[["*","class"],["*","scrolling"],["*","frameborder"],["*","data-(?:[^'\"\\s=<>]*?)"]]),
e=e.replace(/<img\s([^>]*?)>/g,function(e,r){
return"<img "+$.trim(r)+" />";
}),e=e.replace(/<input\s([^>]*?)>/g,function(e,r){
return"<input "+$.trim(r)+" />";
});
}
function n(e,r){
var e=(e||"0")+"",r=(r||"0")+"";
return e===r?"eq":e.length>r.length?"gt":e.length<r.length?"lt":e>r?"gt":"lt";
}
var g=/[\u2600-\u27BF]|[\u2B00-\u2BFF]|[\u3291-\u32B0]|[\uD83C\uD83D][\uDC00-\uDFFF]/,i=e("media/article_data_key.js"),o=e("biz_common/jquery.validate.js"),b=e("common/wx/mpEditor/plugin/filter.js"),k=o.rules,l=wx&&"3071959254"==wx.uin?1e5:5e4,u={},p={
eqWhiteKey:i.getCompareWhiteKey(),
shareCopyrightIgnoreKey:i.getShareArticleIgnoreKey()
};
return u.title=function(e){
var r=e.content||"",a=e.maxlen||64;
return k.rangelength(r,[0,a])?g.test(r)?{
msg:"%s中不能含有特殊字符".sprintf(e.label||"标题"),
errType:2
}:!0:{
msg:"%s长度不能超过%s字".sprintf(e.label||"标题",a),
errType:1
};
},u.titleStrict=function(e){
var r=e.content||"",a=e.maxlen||64;
return k.rangelength(r,[1,a])?g.test(r)?{
msg:"%s中不能含有特殊字符".sprintf(e.label||"标题"),
errType:2
}:!0:{
msg:"%s不能为空且长度不能超过%s字".sprintf(e.label||"标题",a),
errType:1
};
},u.templateContent=function(e){
var r=u.content(e);
if(r!==!0)return r;
var a=e.content||"";
return a?!0:{
msg:"正文必须有内容",
errType:100
};
},u.content=function(e){
var r=e.content||"",a=e.maxlen||1e7;
if(!k.rangelength(r,[0,a]))return{
msg:"正文总大小不得超过%sM字节".sprintf(a/1e6),
errType:1
};
if(!k.rangelength(r.text(),[0,l]))return{
msg:"正文不能超过%s字，请删减部分内容后重试".sprintf(l),
errType:2
};
var s=$("<div>").html(r);
return e.editor.checkPlugins(s)?!0:{
msg:"多媒体插件校验出错",
errType:4
};
},u.contentStrict=function(e){
var r=e.content||"",a=r.text()||"";
if(!a)return{
msg:"正文必须有文字，请在正文中至少输入1个汉字后重试",
errType:3
};
if(!k.rangelength(a,[1,l]))return{
msg:"正文不能超过%s字，请删减部分内容后重试".sprintf(l),
errType:2
};
var s=e.maxlen||1e7;
if(!k.rangelength(r,[1,s]))return{
msg:"正文总大小不得超过%sM字节".sprintf(s/1e6),
errType:1
};
var t=$("<div>").html(r);
return e.editor.checkPlugins(t)?!0:{
msg:"多媒体插件校验出错",
errType:4
};
},{
articleRetCode:t,
validate:r,
waitAsynAction:a,
changeRemoteImgUrl:s,
eq:c,
dataSeqCompare:n
};
});define("common/wx/media/previewDialog.js",["common/wx/popup.js","media/template_common.js","media/media_cgi.js","tpl/media/appmsg_edit/previewDialog.html.js","common/wx/Tips.js","biz_web/lib/store.js"],function(e){
"use strict";
e("common/wx/popup.js");
var t=e("media/template_common.js"),i=e("media/media_cgi.js"),n=e("tpl/media/appmsg_edit/previewDialog.html.js"),s=e("common/wx/Tips.js"),c=e("biz_web/lib/store.js"),o={
cacheKey:"previewAccounts",
uin:window.wx&&window.wx.data&&window.wx.data.uin?window.wx.data.uin:""
},r=function(e){
this._o={
appmsgid:"",
AppMsgId:"",
tpl:n,
type:1,
hasConfirmed:!1,
selectFun:null,
uin:"",
token:"",
nickname:"",
isModify:!1
},this._g={
rememberAccounts:[],
original_type:0,
word:"",
vObj:null,
vArea:null
},this._extend(e),this._init();
};
return r.prototype={
_extend:function(e){
for(var t in e)this._o[t]=e[t];
},
_init:function(){
var e=this._o,t=this._g;
1==e.type?t.word="图文模版":2==e.type&&(t.word="图文消息"),e.appmsgid||(e.appmsgid=e.AppMsgId),
e.AppMsgId||(e.AppMsgId=e.appmsgid),this._initCache(),this._initDialog();
},
_initCache:function(){
var e=this,t=c.get(o.uin+o.cacheKey);
if(t)try{
e._g.rememberAccounts=t.split("|");
}catch(i){
e._g.rememberAccounts=[];
}
},
_cache:function(e){
var t=this._g,i=[];
t.rememberAccounts.each(function(t){
t!=e&&i.push(t);
}),t.rememberAccounts=i,t.rememberAccounts.length<3?t.rememberAccounts.push(e):(t.rememberAccounts.shift(),
t.rememberAccounts[2]=e),c.set(o.uin+o.cacheKey,t.rememberAccounts.join("|"));
},
_initDialog:function(){
var e=this,n=this._o,c=this._g,o={
appmsgid:n.appmsgid,
AppMsgId:n.AppMsgId
};
c.$popup=$(wx.T(n.tpl,{
label:"请输入微信号，此%s将发送至该微信号预览。".sprintf(c.word),
accounts:c.rememberAccounts,
uin:n.uin,
token:n.token,
nickname:n.nickname
})).popup({
title:"发送预览",
className:"simple label_block",
onHide:function(){
e.destory(this);
},
onOK:function(){
var r=this,a=r.get(),u=a.find(".frm_input"),p=a.find(".js_preview_dialog_content"),m=u.val().trim();
if(p.removeClass("with_qrcheck"),a.find(".jsAccountFail").html("").hide(),o.preusername=m,
0==m.length)return $(".jsAccountFail").text("请输入预览的账号").show(),!0;
if(null!=c.vObj&&c.vObj.getCode().trim().length<=0)return s.err("请输入验证码"),c.vObj.focus(),
!0;
var l=a.find(".btn_primary>.js_btn").btn(!1);
o.imgcode=c.vObj&&c.vObj.getCode().trim(),n.hasConfirmed&&(o.confirm=1),s.remove(),
o.is_preview=1;
var d=function(){
e.checkDialogAlive()&&(s.suc("发送预览成功，请留意你的手机微信"),setTimeout(function(){
l.btn(!0);
},500),e._cache(m),e.destory(r));
},h=function(t){
if(e.checkDialogAlive()&&(l.btn(!0),u.focus(),t))switch("undefined"==typeof t.ret&&t.base_resp&&"undefined"!=typeof t.base_resp.ret&&(t.ret=t.base_resp.ret),
!t||"-6"!=t.ret&&"-8"!=t.ret||(c.vArea=a.find(".js_verifycode"),c.vObj=c.vArea.html("").removeClass("dn").verifycode().data("verifycode"),
c.vObj.focus()),t&&t.antispam!==!1&&"function"==typeof n.selectFun&&n.selectFun(1*t.msg),
+t.ret){
case 15801:
case 15802:
case 15803:
case 15804:
case 15805:
case 15806:
Dialog.show({
type:"warn",
msg:t.remind_wording||"你所编辑的图文消息可能含有违反微信公众平台平台协议、相关法律法规和政策的内容|你可以继续保存或发布该图文消息，若保存或发布后，经核实涉嫌含有上述相关内容的，将可能被作删除、屏蔽等处理。<br/>                                <a href='https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN&token=2056316619' target='_blank'>对应规则</a>",
buttons:[{
text:"继续发送",
click:function(){
this.remove(),n.hasConfirmed=!0,l.trigger("click");
}
},{
text:"取消",
type:"normal",
click:function(){
this.remove();
}
}]
});
break;

case 64503:
p.addClass("with_qrcheck"),a.find(".jsAccountFail").html(t.word||"").show();
break;

default:
a.find(".jsAccountFail").html(t.word||"").show();
}
};
return 2==n.type?i.appmsg.preview(!0,10,o,d,h):t.preview({
postData:o,
onSuccess:d,
onError:h
}),!0;
}
}),this._initEvent();
},
_initEvent:function(){
var e=this._g,t=this._g.$popup;
t.find(".jsAccount").click(function(){
$(this).hasClass("selected")?($(this).removeClass("selected"),$(".jsAccountInput").val("")):($(this).addClass("selected"),
$(".jsAccountInput").val($(this).data("value")));
}),t.find(".jsAccountInput").keyup(function(e){
$(".jsAccountFail").hide(),$(".jsAccount").removeClass("selected");
var t="which"in e?e.which:e.keyCode;
13==t&&$(this).parents(".dialog").find("button.js_btn:eq(0)").trigger("click");
}).placeholder(),t.find(".jsAccountDel").click(function(){
var t=$(this).data("index");
return e.rememberAccounts.length>t&&e.rememberAccounts.splice(t,1),$(this).parent().remove(),
c.set(o.uin+o.cacheKey,e.rememberAccounts.join("|")),!1;
}),e.rememberAccounts.length>0&&t.find(".jsAccount").last().click();
},
checkDialogAlive:function(){
return this._g.$popup?!0:!1;
},
destory:function(e){
e&&e.remove(),this._g.$popup=null,this._g.$vObj=null,this._g.$vArea=null,this._o.selectFun=null;
}
},r;
});define("biz_common/utils/monitor.js",[],function(){
var n=[],e={};
return e.setAvg=function(t,i,r){
return n.push(t+"_"+i+"_"+r),n.push(t+"_"+(i-1)+"_1"),e;
},e.setSum=function(t,i,r){
return n.push(t+"_"+i+"_"+r),e;
},e.send=function(){
if(0!=n.length){
var e=[];
for(e.push(n.splice(0,60));n.length>0;)e.push(n.splice(0,60));
n=[];
for(var t=0,i=e.length;i>t;t++){
var r=new Image;
r.src="//mp.weixin.qq.com/mp/jsmonitor?idkey="+e[t].join(";")+"&t="+Math.random();
}
}
},e;
});define("tpl/tooltip.html.js",[],function(){
return'<div class="tooltip">\n    <div class="tooltip_inner">{content}</div>\n    <i class="tooltip_arrow"></i>\n</div>\n';
});