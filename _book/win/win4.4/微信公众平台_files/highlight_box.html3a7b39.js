define("common/wx/mpEditor/plugin/card.js",["common/wx/Tips.js","cardticket/send_card.js","common/wx/Cgi.js","cardticket/parse_data.js"],function(t){
"use strict";
function e(t){
var e=t.key,r=t.content,i=(t.ifrmName,new RegExp("<iframe[^>]*?"+t.ifrmName+"[^>]*?"+e+"=('|\")(.*?)('|\").*?>","g"));
return i.test(r)?RegExp.$2:null;
}
function r(t){
return t.replace(/<iframe class="res_iframe card_iframe js_editor_card"[^>]*>[^<>]*?<\/iframe>/g,function(t){
var r=e({
content:t,
key:"data-cardid",
ifrmName:"js_editor_card"
}),i=e({
content:t,
key:"data-num",
ifrmName:"js_editor_card"
}),a=e({
content:t,
key:"data-display-src",
ifrmName:"js_editor_card"
}),n=e({
content:t,
key:"src",
ifrmName:"js_editor_card"
}),d=e({
content:t,
key:"data-src",
ifrmName:"js_editor_card"
});
a=n||a,a=a?a.indexOf("cardid=")>=0?a:a+"&cardid="+r:"";
var c="";
return window.wx&&window.wx.data&&window.wx.data.t&&(c=window.wx.data.t),a=a?a.indexOf("token=")>=0?a.replace(/token=([^&]*|$)/,"token="+c):a+"&token="+c:"",
'<iframe class="res_iframe card_iframe js_editor_card" data-cardid="%s"                 data-num="%s" %s %s></iframe>'.sprintf(r,i,a?'src="'+a+'"':"",d?'data-src="'+d+'"':"");
});
}
var i=t("common/wx/Tips.js"),a=t("cardticket/send_card.js"),n=t("common/wx/Cgi.js"),d=wx.cgiData,c=t("cardticket/parse_data.js"),o=function(t){
t&&t.container&&(this.domid=t.container,this.container=$(t.container).show(),t.can_show_reddot&&this.container.children(".weui-desktop-icon-reddot").css("display","inline-block")),
this.redbit=t.redbit||16,this.biz_uin=t.biz_uin||"",this.can_use_card=t.can_use_card||!1;
var e=this;
e.report_vid_type=[],e._init();
};
return o.beforeSetContent=function(t){
return t.html?r(t.html):"";
},o.prototype={
getName:function(){
return"insertcard";
},
noCommandReprot:function(){
return!0;
},
getExecCommand:function(){
var t=this;
return function(){
var e=t.editor,r=this;
if(e){
{
e.getDocument();
}
t._openCardSelect(r);
}
};
},
_init:function(){
var t=this;
d.cardid&&n.get({
url:"/merchant/electroniccardmgr?action=get&card_id=%s".sprintf(d.cardid)
},function(e){
e.base_resp&&0==e.base_resp.ret&&(t.card_data=$.parseJSON(e.card_detail),t.card_data=c.parse_cardticket(t.card_data),
t._initCard());
});
},
_initCard:function(){
if(this.hasSetContent&&this.card_data&&!this.isInit){
var t=this.editor.getUeditor().getContent(),e=/<iframe [^>]*?class=\"res_iframe card_iframe js_editor_card\"[^>]*?data-cardid=\"\"[^>]*?><\/iframe>/gi;
if(e.test(t))return void(this.isInit=!0);
this._insertCard(this.editor,this.card_data,d.cardnum),this.isInit=!0;
}
},
_checkCard:function(t,e){
var r=$(t).find("iframe"),a=0,n=5;
return $.each(r,function(t,e){
$(e).hasClass("js_editor_card")&&a++;
}),a>n||e&&a>=n?(i.err("正文只能包含%s个卡券".sprintf(n)),!1):!0;
},
_getCardIframe:function(t,e){
return['<iframe class="res_iframe card_iframe js_editor_card" scrolling="no" frameborder="0" ','data-cardid="%s" data-num="%s" '.sprintf(t.id,e),'src="/cgi-bin/readtemplate?t=cardticket/card_preview_tmpl&logo_url=%s&brand_name=%s&title=%s&color=%s&lang=zh_CN&cardid=%s&token=%s&lang=zh_CN"'.sprintf(encodeURIComponent(t.logo_url),encodeURIComponent(t.brand_name),encodeURIComponent(t.title),encodeURIComponent(t.color),t.id,wx.data.t),' data-src="http://mp.weixin.qq.com/bizmall/appmsgcard?action=show&biz=%s&cardid=%s&wechat_card_js=1#wechat_redirect" '.sprintf(this.biz_uin,t.id),"></iframe>"].join("");
},
_insertCard:function(t,e,r){
var i=this._getCardIframe(e,r);
t.execCommand("inserthtml",i,!0),this.editor.fireEvent("funcPvUvReport","insertcard");
},
_openCardSelect:function(t){
if(this._checkCard(this.editor.getDocument(),!0)){
var e=this,r=new a({
multi:!1,
param:{
need_member_card:1
},
selectComplete:function(r,i){
e._insertCard(t,r,i);
},
source:"嵌入图文消息素材"
});
r.show();
}
},
check:function(t){
return this._checkCard(t);
},
getQueryCommandState:function(){
return function(){
var t=this,e=t.selection.getRange().getClosedNode(),r=e&&"edui-faked-video"==e.className;
return r?1:0;
};
},
getContainer:function(){
return this.domid;
},
initPluginData:function(){
return["cardid","cardquantity","cardlimit"];
},
getPluginData:function(t){
var r=t.init(this.initPluginData()),i=e({
content:r.get("content"),
key:"data-cardid",
ifrmName:"js_editor_card"
});
if(i){
var a=e({
content:r.get("content"),
key:"data-num",
ifrmName:"js_editor_card"
});
r.set("cardid",i),r.set("cardquantity",a),r.set("cardlimit",0==a?0:1);
}
},
addListener:function(t){
this.__g;
this.can_use_card&&t.addListener("beforepaste",function(t,e){
e.html=r(e.html);
});
},
beforeSetContent:function(t){
return o.beforeSetContent({
html:t
});
},
afterSetContent:function(){
this.hasSetContent=!0,this._initCard();
}
},o;
});define("common/wx/mpEditor/plugin/vote.js",["biz_web/widget/date_range.css","page/vote/dialog_vote_table.css","widget/date_select.css","common/wx/Tips.js","common/wx/pagebar.js","common/wx/Cgi.js","tpl/vote/vote_table.html.js"],function(require,exports,module){
"use strict";
function iframeUrlSwitcher(e){
for(var t=e.content,o=e.returnValue||"content",n=e.wrapper||"add",i=t.split(/<\/?iframe/),a="",r=" TMP_NAME=",s=[],c=[],l=[],d=0;d<i.length;d++){
if(-1!==i[d].indexOf("js_editor_vote_card")||-1!==i[d].indexOf("js_editor_card")){
i[d]=i[d].replace(" src=",r).replace(" data-display-src="," src=").replace(r," data-display-src="),
i[d]=i[d].replace(" style=",r).replace(" data-display-style="," style=").replace(r," data-display-style=");
var u=i[d].match(/data-voteid=\"([^\"]*)/);
u&&u[1]&&s.push(u[1]);
var p=i[d].match(/isMlt=(\d)/);
p&&p[1]&&c.push(p[1]),i[d]=i[d].replace(/token=(\d+)&/gi,"token="+wx.getUrl("token")+"&");
var m=i[d].match(/data-supervoteid=\"([^\"]*)/);
m&&m[1]&&l.push(m[1]);
}
a+=i[d],d<i.length-1&&(a+=(d%2?"</":"<")+"iframe");
}
switch(a="add"===n?a.replace(/(<iframe[^>]*?js_editor_vote_card[^<]*?<\/iframe>)/gi,function(e){
return['<span class="vote_area">',e,'<span class="vote_box skin_help po_left"></span>','<span class="vote_box skin_help po_right"></span>',"</span>"].join("");
}):a.replace(/<span class="vote_area">/g,"").replace(/<span class="vote_box skin_help po_left"><\/span><span class="vote_box skin_help po_right"><\/span><\/span>/g,"").replace(/<span class="vote_box skin_help po_left"><\/span><span class="vote_box skin_help po_right"><\/span>/g,""),
o){
case"voteid":
return s;

case"isMlt":
return c;

case"supervoteid":
return l;

case"content":
default:
return a;
}
}
function setVoteIframeHeight(e){
var t=e.getDocument();
$(t).find("iframe").each(function(){
var t=this;
$(t).hasClass("js_editor_vote_card")&&$(t).on("load",function(){
$(t.contentWindow.document).on("finished",function(){
var o=$(this).height();
t.contentDocument&&t.contentDocument.body.offsetHeight?o=t.contentDocument.body.offsetHeight:t.Document&&t.Document.body&&t.Document.body.scrollHeight?o=t.Document.body.scrollHeight:t.document&&t.document.body&&t.document.body.scrollHeight&&(o=t.document.body.scrollHeight),
$(t).height(o).off("finished"),e.fireEvent("contentchange");
}),$(t).off("load");
});
});
}
require("biz_web/widget/date_range.css"),require("page/vote/dialog_vote_table.css"),
require("widget/date_select.css");
var Tips=require("common/wx/Tips.js"),Pagebar=require("common/wx/pagebar.js"),Cgi=require("common/wx/Cgi.js");
template.helper("datestring",function(e){
function t(e,t){
for(var o=0,n=t-(e+"").length;n>o;o++)e="0"+e;
return e+"";
}
var o=new Date(e),n=["日","一","二","三","四","五","六"],i="yyyy-mm-dd".replace(/yyyy|YYYY/,o.getFullYear()).replace(/yy|YY/,t(o.getFullYear()%100,2)).replace(/mm|MM/,t(o.getMonth()+1,2)).replace(/m|M/g,o.getMonth()+1).replace(/dd|DD/,t(o.getDate(),2)).replace(/d|D/g,o.getDate()).replace(/hh|HH/,t(o.getHours(),2)).replace(/h|H/g,o.getHours()).replace(/ii|II/,t(o.getMinutes(),2)).replace(/i|I/g,o.getMinutes()).replace(/ss|SS/,t(o.getSeconds(),2)).replace(/s|S/g,o.getSeconds()).replace(/w/g,o.getDay()).replace(/W/g,n[o.getDay()]);
return i;
});
var Vote=function(e){
e&&e.container&&(this.domid=e.container,this.container=$(e.container).show(),e.can_show_reddot&&this.container.children(".weui-desktop-icon-reddot").css("display","inline-block")),
this.redbit=e.redbit||8,this.can_use_vote=e.can_use_vote||!1;
};
return Vote.beforeSetContent=function(e){
var t=iframeUrlSwitcher({
content:e.html,
wrapper:"remove"
});
return t;
},Vote.prototype={
getName:function(){
return"insertvote";
},
noCommandReprot:function(){
return!0;
},
getExecCommand:function(){
var e=this;
return function(){
var t=this,o=e.editor;
o&&e.openVotePopup(t);
};
},
doCommand:function(e,t,o){
o&&console.log("insert vote");
},
getContainer:function(){
return this.domid;
},
initPluginData:function(){
return["voteid","voteismlt","supervoteid"];
},
getPluginData:function(e){
var t=e.init(this.initPluginData());
t.set("content",iframeUrlSwitcher({
content:t.get("content"),
wrapper:"add"
}));
var o=iframeUrlSwitcher({
content:t.get("content"),
returnValue:"voteid"
})[0],n=iframeUrlSwitcher({
content:t.get("content"),
returnValue:"isMlt"
})[0],i=iframeUrlSwitcher({
content:t.get("content"),
returnValue:"supervoteid"
});
o&&"undefined"!=typeof n&&(t.set("voteid",o),t.set("voteismlt",n||store.get("appmsg_vote_"+o))),
i&&t.set("supervoteid",i[0]||"");
},
beforeSetContent:function(e){
return Vote.beforeSetContent({
html:e
});
},
afterSetContent:function(){
setVoteIframeHeight(this.editor);
},
insertVoteIframe:function(e,t){
var o=this.editor;
e.execCommand("inserthtml",t.join(""),!0),o.fireEvent("funcPvUvReport","insertvote");
},
_setIframeHeight:function(){
var e=this;
setTimeout(function(){
var t=e.editor.getDocument().getElementsByTagName("iframe");
if(t&&t.length>0)for(var o=0;o<t.length;o++)if($(t[o]).hasClass("js_editor_vote_card")){
var n=t[o],i=$(n).height();
n.contentDocument&&n.contentDocument.body.offsetHeight?i=n.contentDocument.body.offsetHeight:n.Document&&n.Document.body&&n.Document.body.scrollHeight?i=n.Document.body.scrollHeight:n.document&&n.document.body&&n.document.body.scrollHeight&&(i=n.document.body.scrollHeight),
n.style.height=i+"px";
}
},5e3);
},
_checkIframe:function(e,t){
var o=$(e).find("iframe"),n=0;
return $.each(o,function(e,t){
$(t).hasClass("js_editor_vote_card")&&n++;
}),n>1||t&&n>=1?(Tips.err("正文只能包含%s个投票".sprintf(1)),!1):!0;
},
check:function(e){
return this._checkIframe(e);
},
openVotePopup:function(ueditor){
function renderList(begin){
$.ajax({
url:wx.url("/cgi-bin/newoperatevote?action=list&vote_status=1&is_editing=0&f=json&count=6&begin="+begin),
type:"get",
dataType:"json",
success:function(data){
if(data.data){
for(var voteData=eval("("+data.data+")"),iframeH=0,i=0;i<voteData.super_vote_info.length;i++)voteData.super_vote_info[i].height=150*voteData.super_vote_info[i].vote_id_list.vote_id.length,
voteData.super_vote_info[i].title=voteData.super_vote_info[i].title.html(!1);
$(".js_vote_list").html(compile_html({
loading:!1,
data:voteData,
iframeH:iframeH,
biz:data.bizuin,
token:wx.data.param
})),$(".js_select").checkbox({
multi:!1
});
var total_count=voteData.total_count,count=6,showpage=begin/count+1,pagebar=new Pagebar({
container:".js_pager",
perPage:count,
first:!1,
last:!1,
isSimple:!0,
initShowPage:showpage,
totalItemsNum:total_count,
callback:function(e){
var t=e.currentPage;
if(t!=showpage)return t--,renderList(t*count),!1;
}
});
}else $(".js_vote_list").html(compile_html({
loading:!1,
data:{
super_vote_info:[]
}
}));
},
error:function(){}
});
}
var that=this;
if(!that._checkIframe(this.editor.getDocument(),!0))return null;
document.body.style.overflow=document.documentElement.style.overflow="hidden";
var pop=$("<div class='' id='js_vote_menu'><div class='vote_list js_vote_list'></div></div>").popup({
title:"发起投票",
className:"vote_edit tc_dialog dialog_normal_form",
buttons:[{
text:"确定",
click:function(){},
type:"primary"
}],
close:function(){
this.remove(),document.body.style.overflow=document.documentElement.style.overflow="auto";
}
}),_vote_list_tpl=require("tpl/vote/vote_table.html.js"),compile_html=template.compile(_vote_list_tpl);
$(".js_vote_list").html(compile_html({
loading:!0
})),$("#js_vote_list").parent().addClass("selected"),renderList(0),$(".js_vote_list").on("click",".js_new_vote",function(){
window.open(wx.url("/cgi-bin/newoperatevote?action=create&t=vote/vote_edit"));
}),$(".js_vote_list").on("click",".js_manage_vote",function(){
window.open(wx.url("/cgi-bin/newoperatevote?action=list"));
}),$(".vote_edit button").click(function(){
var iframeH=0,saveBtn=pop.find(":button").last();
saveBtn.removeClass("btn_loading");
var supervoteid=0,biz=0;
if("none"==$(".js_vote_list").css("display")){
var data=vote.getFullData();
if(data){
var tempData=eval("("+data+")"),optionL=0;
iframeH+=70*tempData.vote_subject.length;
for(var i=0;i<tempData.vote_subject.length;i++)optionL+=tempData.vote_subject[i].options.length;
iframeH+=30*optionL,saveBtn.btn(!1),Cgi.post({
url:wx.url("/cgi-bin/newoperatevote?action=create"),
dataType:"json",
data:{
action:"create",
json:data
},
mask:!1
},function(e){
0==e.base_resp.ret?(Tips.suc("操作成功"),supervoteid=e.super_vote_id,biz=e.bizuin,that.insertVoteIframe(ueditor,['<iframe scrolling="no" frameborder="0" class="vote_iframe js_editor_vote_card" style="height:0px;" ','src="',wx.url("/cgi-bin/readtemplate?t=vote/vote-new_tmpl&__biz="+biz+"&supervoteid=%s".sprintf(supervoteid)),'"','data-src="',"/mp/newappmsgvote?action=show&__biz=",biz,"&supervoteid=%s#wechat_redirect".sprintf(supervoteid),'"','data-supervoteid="%s"'.sprintf(supervoteid)," allowfullscreen >","</iframe>"]),
setVoteIframeHeight(that.editor),pop.remove(),document.body.style.overflow=document.documentElement.style.overflow="auto",
$(".mask").hide()):(Tips.err(e.base_resp.err_msg),saveBtn.btn(!0));
});
}
}else saveBtn.btn(!1),1==$(".js_select:checked").length?(supervoteid=$(".js_select:checked").val(),
biz=$(".js_select:checked").data("biz"),iframeH=$(".js_select:checked").data("height"),
that.insertVoteIframe(ueditor,['<iframe scrolling="no" frameborder="0" class="vote_iframe js_editor_vote_card" style="height:0px;" ','src="',wx.url("/cgi-bin/readtemplate?t=vote/vote-new_tmpl&__biz="+biz+"&supervoteid=%s".sprintf(supervoteid)),'"','data-src="',"/mp/newappmsgvote?action=show&__biz=",biz,"&supervoteid=%s#wechat_redirect".sprintf(supervoteid),'"','data-supervoteid="%s"'.sprintf(supervoteid)," allowfullscreen >","</iframe>"]),
setVoteIframeHeight(that.editor),pop.remove(),document.body.style.overflow=document.documentElement.style.overflow="auto",
saveBtn.btn(!0),$(".mask").hide()):(Tips.err("请选择投票"),saveBtn.btn(!0));
});
}
},Vote;
});define("tpl/pagebar.html.js",[],function(){
return'<div class="pagination">\n    <span class="page_nav_area">\n        <a href="javascript:void(0);" class="btn page_first">{firstButtonText}</a>\n        <a href="javascript:void(0);" class="btn page_prev"><i class="arrow"></i></a>\n        {if isSimple}\n            <span class="page_num">\n                <label>{initShowPage}</label>\n                <span class="num_gap">/</span>\n                <label>{endPage}</label>\n            </span>\n        {else}\n            {each startRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav">{pageIndex}</a>\n            {/each}\n            <span class="gap_prev">...</span>\n            {each midRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav js_mid">{pageIndex}</a>\n            {/each}\n            <span class="gap_next">...</span>\n            {each endRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav">{pageIndex}</a>\n            {/each}\n        {/if}\n        <a href="javascript:void(0);" class="btn page_next"><i class="arrow"></i></a>\n        <a href="javascript:void(0);" class="btn page_last">{lastButtonText}</a>            \n    </span>\n    {if (endPage>1)}\n    <span class="goto_area">\n        <input type="text">\n        <a href="javascript:void(0);" class="btn page_go">跳转</a>\n    </span>\n    {/if}\n</div>\n';
});define("original/tpl/whitelist_search.html.js",[],function(){
return'{each list as item}\n<div class="search_user_item tj_item js_search_item {if (item.status == 2 || item .status == 3)}disabled{/if}" data-openid="{item.openid}">\n    <img class="search_user_thumb" src="{item.pic_url}" alt="">\n    <div class="search_user_info">\n        <strong class="search_user_nickname js_nickname">{item.nickname}</strong>\n        <p class="search_user_desc js_wx_name">{item.wx_name}</p>\n    </div>\n    <!-- 3自己 2是已添加 -->\n    {if (item.status == 2)}\n    <div class="card_mask_global wording_container">\n        已添加过该账号    </div>\n    {else if (item.status == 3)}\n    <div class="card_mask_global wording_container">\n        不能添加本账号    </div>\n    {else}\n    <div class="card_mask_global">\n        <i class="icon_card_selected_global"></i>\n    </div>\n    {/if}\n</div>\n{/each}';
});define("original/tpl/whitelist_record.html.js",[],function(){
return'<label class="frm_checkbox_label tj_item js_record_item {selected ? \'selected\' : \'\'}" data-openid="{openid}">\n    <i class="icon_checkbox"></i>\n    <span class="lbl_content">{nickname}</span>\n    <input type="checkbox" class="frm_checkbox js_record_checkbox">\n</label>&nbsp;\n';
});define("original/tpl/whitelist.html.js",[],function(){
return'<div class="account_panel">\n    <div class="account_area search_account_area">\n        <div class="account_area_hd">请输入公众号的昵称或微信号</div>\n        <div class="account_area_bd">\n            <span class="frm_input_box search append">\n                <a href="javascript:;" class="frm_input_append js_btn_search"><i class="icon16_common search_gray">搜索</i>&nbsp;</a>\n                <input value="" name="query" type="text" class="frm_input js_input_search valid" placeholder="">\n            </span>\n            <div class="frm_msg fail js_search_fail">搜索失败提示</div>\n            <p class="empty_tips js_search_msg">暂无记录</p>\n            <div class="search_user_list js_search_list"></div>\n        </div>\n    </div>\n    <div class="account_area history_account_area">\n        <div class="account_area_hd"><span>添加记录</span><a href="javascript:;" class="global_link_opr js_select_all" style="display: none;">全选</a></div>\n        <div class="account_area_bd js_record_list"><p class="empty_tips js_empty">暂无记录</p></div>\n    </div>\n</div>\n';
});define("original/whitepop.js",["original/tpl/whitepop.html.js","common/wx/popover.js"],function(o){
"use strict";
function e(o){
var e=this;
e.opt=$.extend(!0,{},p,o);
var n=e.opt.dom;
n.html(template.compile(i)({
showAllowRe:!1,
showModify:!1,
showHideSor:!1
})),n.find(".js_popinput").checkbox({
multi:!0,
onChanged:function(){
if(this.values().length>0||e.opt.showAllowRe){
var o=this.values(),i=o.indexOf("md")>-1?"1":"0",p=Number(i)&&o.indexOf("hs")>-1?"1":"0";
if(!Number(i))return n.find(".js_popinput").eq(1).checkbox("disabled",!0),n.find(".js_popinput").eq(1).checkbox("checked",!1),
void e.opt.bad();
n.find(".js_popinput").eq(1).checkbox("disabled",!1),e.opt.done({
can_modify:i,
can_hide_source:p
});
}else 0==this.values().length?(n.find(".js_popinput").eq(1).checkbox("disabled",!0),
n.find(".js_popinput").eq(1).checkbox("checked",!1),e.opt.bad()):e.opt.bad();
}
}),n.find(".js_popinput").eq(1).checkbox("disabled",!0);
}
var i=o("original/tpl/whitepop.html.js"),p=(o("common/wx/popover.js"),{
dom:null,
showAllowRe:!1,
done:$.noop,
bad:$.noop
});
return e;
});define("original/MultiStepDialog.js",["common/wx/Step.js","common/wx/popup.js","original/tpl/MultiStepDialog.html.js"],function(t){
"use strict";
function n(t){
var n=this;
n.opt=$.extend(!0,{},s,t),n.stepCount=0,n.currentStep=0,n.btnsConfig=[],n.btnCountMap={
0:0
},n.steps=[],n.initer=[],n.dialog=null,n.$dialog=null,n.$step=null,n.$stepDom=[],
n.$btns=[];
}
var e=t("common/wx/Step.js"),o=(t("common/wx/popup.js"),t("original/tpl/MultiStepDialog.html.js")),s={
title:"",
className:""
};
return n.prototype={
register:function(t){
var n=this;
n.steps.push(t.stepName||"Step"+(n.stepCount+1));
for(var e=t.buttons.length,o=0;e>o;o++)n.btnsConfig.push(t.buttons[o]);
return n.btnCountMap[n.stepCount+1]=n.btnCountMap[n.stepCount]+e,n.initer.push(t.init),
n.stepCount++,n;
},
show:function(){
for(var t=this,n=[],s=0,i=t.btnsConfig.length;i>s;s++){
var r={},p=t.btnsConfig[s];
for(var u in p)p.hasOwnProperty(u)&&"click"!=u&&(r[u]=p[u]);
r.click=function(n){
return function(){
n&&n.call(t);
};
}(p.click),n.push(r),t.$btns.push({
click:p.click
});
}
var a=template.compile(o)({
steps:t.steps
});
t.dialog=$(a).popup({
title:t.opt.title,
className:t.opt.className,
onShow:function(){
t.$dialog=this;
},
close:function(){
this.remove();
},
buttons:n
});
for(var l=[],s=0;s<t.stepCount;s++)l.push(s+1+" "+t.steps[s]),t.$stepDom.push(t.dialog.find(".js_step"+s));
t.$step=l.length>1?new e({
container:t.dialog.find(".js_process"),
selected:1,
names:l
}):null;
var c=t.dialog.find(".js_btn_p");
c.hide();
for(var s=0,i=t.$btns.length;i>s;s++)t.$btns[s].dom=c.eq(s),s<t.btnCountMap[1]&&t.$btns[s].dom.show();
return t.initer[0](t.$stepDom[0]),t.$stepDom[0].data("inited",!0),t.$dialog.resetPosition(),
t;
},
next:function(){
var t=this;
if(t.stepCount>t.currentStep+1){
t.$step.go(t.currentStep+2),t.$stepDom[t.currentStep].hide(),t.$stepDom[t.currentStep+1].show();
for(var n=0,e=t.$btns.length;e>n;n++)n>=t.btnCountMap[t.currentStep+1]&&n<t.btnCountMap[t.currentStep+2]?t.$btns[n].dom.show():t.$btns[n].dom.hide();
t.$stepDom[t.currentStep+1].data("inited")||(t.initer[t.currentStep+1](t.$stepDom[t.currentStep+1]),
t.$stepDom[t.currentStep+1].data("inited",!0),t.$dialog.resetPosition()),t.currentStep++;
}
return this;
},
pre:function(){
var t=this;
if(t.currentStep>0){
t.$step.go(t.currentStep),t.$stepDom[t.currentStep].hide(),t.$stepDom[t.currentStep-1].show();
for(var n=0,e=t.$btns.length;e>n;n++)n>=t.btnCountMap[t.currentStep-1]&&n<t.btnCountMap[t.currentStep]?t.$btns[n].dom.show():t.$btns[n].dom.hide();
t.currentStep--;
}
return this;
},
enableBtn:function(t,n){
var e=this,o=e.btnCountMap[t]+n;
return e.$btns[o].dom.removeClass("btn_disabled").addClass("btn_primary"),e;
},
disableBtn:function(t,n){
var e=this,o=e.btnCountMap[t]+n;
return e.$btns[o].dom.removeClass("btn_primary").addClass("btn_disabled"),e;
},
hide:function(){
return this.$dialog&&this.$dialog.hide(),!1;
},
remove:function(){
this.dialog&&(this.dialog.popup("remove"),this.dialog=null);
}
},n;
});define("common/qq/events.js",[],function(t,n,a){
"use strict";
function i(t){
this.data=t===!0?window.wx.events||{}:{};
}
i.prototype={
on:function(t,n){
return this.data[t]=this.data[t]||[],this.data[t].push(n),this;
},
off:function(t,n){
return this.data[t]&&this.data[t].length>0&&(n&&"function"==typeof n?$.each(this.data[t],function(a,i){
i===n&&this.data[t].splice(a,1);
}):this.data[t]=[]),this;
},
trigger:function(t){
var n=arguments;
return this.data[t]&&this.data[t].length>0&&$.each(this.data[t],function(t,a){
var i=a.apply(this,Array.prototype.slice.call(n,1));
return i===!1?!1:void 0;
}),this;
}
},a.exports=function(t){
return new i(t);
};
});define("common/lib/MockJax.js",[],function(){
!function(e){
function t(t){
void 0==window.DOMParser&&window.ActiveXObject&&(DOMParser=function(){},DOMParser.prototype.parseFromString=function(e){
var t=new ActiveXObject("Microsoft.XMLDOM");
return t.async="false",t.loadXML(e),t;
});
try{
var n=(new DOMParser).parseFromString(t,"text/xml");
if(!e.isXMLDoc(n))throw"Unable to parse XML";
var s=e("parsererror",n);
if(1==s.length)throw"Error: "+e(n).text();
return n;
}catch(o){
var r=void 0==o.name?o:o.name+": "+o.message;
return void e(document).trigger("xmlParseError",[r]);
}
}
function n(t,n,s){
(t.context?e(t.context):e.event).trigger(n,s);
}
function s(t,n){
var o=!0;
return"string"==typeof n?e.isFunction(t.test)?t.test(n):t==n:(e.each(t,function(r){
return void 0===n[r]?o=!1:void(o="object"==typeof n[r]?o&&s(t[r],n[r]):e.isFunction(t[r].test)?o&&t[r].test(n[r]):o&&t[r]==n[r]);
}),o);
}
function o(t,n){
if(e.isFunction(t))return t(n);
if(e.isFunction(t.url.test)){
if(!t.url.test(n.url))return null;
}else{
var o=t.url.indexOf("*");
if(t.url!==n.url&&-1===o||!new RegExp(t.url.replace(/[-[\]{}()+?.,\\^$|#\s]/g,"\\$&").replace(/\*/g,".+")).test(n.url))return null;
}
return t.data&&n.data&&!s(t.data,n.data)?null:t&&t.type&&t.type.toLowerCase()!=n.type.toLowerCase()?null:t;
}
function r(n,s,o){
var r=function(r){
return function(){
return function(){
var r;
this.status=n.status,this.statusText=n.statusText,this.readyState=4,e.isFunction(n.response)&&n.response(o),
"json"==s.dataType&&"object"==typeof n.responseText?this.responseText=JSON.stringify(n.responseText):"xml"==s.dataType?"string"==typeof n.responseXML?(this.responseXML=t(n.responseXML),
this.responseText=n.responseXML):this.responseXML=n.responseXML:this.responseText=n.responseText,
("number"==typeof n.status||"string"==typeof n.status)&&(this.status=n.status),"string"==typeof n.statusText&&(this.statusText=n.statusText),
r=this.onreadystatechange||this.onload,e.isFunction(r)?(n.isTimeout&&(this.status=-1),
r.call(this,n.isTimeout?"timeout":void 0)):n.isTimeout&&(this.status=-1);
}.apply(r);
};
}(this);
n.proxy?g({
global:!1,
url:n.proxy,
type:n.proxyType,
data:n.data,
dataType:"script"===s.dataType?"text/plain":s.dataType,
complete:function(e){
n.responseXML=e.responseXML,n.responseText=e.responseText,n.status=e.status,n.statusText=e.statusText,
this.responseTimer=setTimeout(r,n.responseTime||0);
}
}):s.async===!1?r():this.responseTimer=setTimeout(r,n.responseTime||50);
}
function a(t,n,s,o){
return t=e.extend(!0,{},e.mockjaxSettings,t),"undefined"==typeof t.headers&&(t.headers={}),
t.contentType&&(t.headers["content-type"]=t.contentType),{
status:t.status,
statusText:t.statusText,
readyState:1,
open:function(){},
send:function(){
o.fired=!0,r.call(this,t,n,s);
},
abort:function(){
clearTimeout(this.responseTimer);
},
setRequestHeader:function(e,n){
t.headers[e]=n;
},
getResponseHeader:function(e){
return t.headers&&t.headers[e]?t.headers[e]:"last-modified"==e.toLowerCase()?t.lastModified||(new Date).toString():"etag"==e.toLowerCase()?t.etag||"":"content-type"==e.toLowerCase()?t.contentType||"text/plain":void 0;
},
getAllResponseHeaders:function(){
var n="";
return e.each(t.headers,function(e,t){
n+=e+": "+t+"\n";
}),n;
}
};
}
function i(e,t,n){
if(u(e),e.dataType="json",e.data&&T.test(e.data)||T.test(e.url)){
c(e,t,n);
var s=/^(\w+:)?\/\/([^\/?#]+)/,o=s.exec(e.url),r=o&&(o[1]&&o[1]!==location.protocol||o[2]!==location.host);
if(e.dataType="script","GET"===e.type.toUpperCase()&&r){
var a=l(e,t,n);
return a?a:!0;
}
}
return null;
}
function u(e){
"GET"===e.type.toUpperCase()?T.test(e.url)||(e.url+=(/\?/.test(e.url)?"&":"?")+(e.jsonp||"callback")+"=?"):e.data&&T.test(e.data)||(e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?");
}
function l(t,n,s){
var o=s&&s.context||t,r=null;
return n.response&&e.isFunction(n.response)?n.response(s):e.globalEval("object"==typeof n.responseText?"("+JSON.stringify(n.responseText)+")":"("+n.responseText+")"),
p(t,o,n),d(t,o,n),e.Deferred&&(r=new e.Deferred,"object"==typeof n.responseText?r.resolveWith(o,[n.responseText]):r.resolveWith(o,[e.parseJSON(n.responseText)])),
r;
}
function c(e,t,n){
var s=n&&n.context||e,o=e.jsonpCallback||"jsonp"+m++;
e.data&&(e.data=(e.data+"").replace(T,"="+o+"$1")),e.url=e.url.replace(T,"="+o+"$1"),
window[o]=window[o]||function(n){
data=n,p(e,s,t),d(e,s,t),window[o]=void 0;
try{
delete window[o];
}catch(r){}
head&&head.removeChild(script);
};
}
function p(e,t,s){
e.success&&e.success.call(t,s.responseText||"",status,{}),e.global&&n(e,"ajaxSuccess",[{},e]);
}
function d(t,s){
t.complete&&t.complete.call(s,{},status),t.global&&n("ajaxComplete",[{},t]),t.global&&!--e.active&&e.event.trigger("ajaxStop");
}
function f(t,n){
var s,r,u;
"object"==typeof t?(n=t,t=void 0):n.url=t,r=e.extend(!0,{},e.ajaxSettings,n);
for(var l=0;l<h.length;l++)if(h[l]&&(u=o(h[l],r)))return y.push(r),e.mockjaxSettings.log(u,r),
"jsonp"===r.dataType&&(s=i(r,u,n))?s:(u.cache=r.cache,u.timeout=r.timeout,u.global=r.global,
x(u,n),function(t,n,o,r){
s=g.call(e,e.extend(!0,{},o,{
xhr:function(){
return a(t,n,o,r);
}
}));
}(u,r,n,h[l]),s);
return g.apply(e,[n]);
}
function x(e,t){
if(e.url instanceof RegExp&&e.hasOwnProperty("urlParams")){
var n=e.url.exec(t.url);
if(1!==n.length){
n.shift();
var s=0,o=n.length,r=e.urlParams.length,a=Math.min(o,r),i={};
for(s;a>s;s++){
var u=e.urlParams[s];
i[u]=n[s];
}
t.urlParams=i;
}
}
}
var g=e.ajax,h=[],y=[],T=/=\?(&|$)/,m=(new Date).getTime();
e.extend({
ajax:f
}),e.mockjaxSettings={
log:function(t,n){
if(t.logging!==!1&&("undefined"!=typeof t.logging||e.mockjaxSettings.logging!==!1)&&window.console&&console.log){
var s="MOCK "+n.type.toUpperCase()+": "+n.url,o=e.extend({},n);
if("function"==typeof console.log)console.log(s,o);else try{
console.log(s+" "+JSON.stringify(o));
}catch(r){
console.log(s);
}
}
},
logging:!0,
status:200,
statusText:"OK",
responseTime:500,
isTimeout:!1,
contentType:"text/plain",
response:"",
responseText:"",
responseXML:"",
proxy:"",
proxyType:"GET",
lastModified:null,
etag:"",
headers:{
etag:"IJF@H#@923uf8023hFO@I#H#",
"content-type":"text/plain"
}
},e.mockjax=function(e){
var t=h.length;
return h[t]=e,t;
},e.mockjaxClear=function(e){
1==arguments.length?h[e]=null:h=[],y=[];
},e.mockjax.handler=function(e){
return 1==arguments.length?h[e]:void 0;
},e.mockjax.mockedAjaxCalls=function(){
return y;
};
}(jQuery);
});define("common/wx/cgiReport.js",["common/wx/Tips.js"],function(e,a){
"use strict";
var r=e("common/wx/Tips.js");
a.error=function(e,a,t){
t.responseText=t.responseText||"";
var s=-1!==location.href.indexOf("/cgi-bin/home")&&(-1!==a.url.indexOf("/misc/safeassistant")||-1!==a.url.indexOf("/safe/safeuuid")),n=11;
switch(e){
case"timeout":
n=7;
break;

case"error":
n=8;
break;

case"notmodified":
n=9;
break;

case"parsererror":
n=10;
}
a.data.lang&&delete a.data.lang,a.data.random&&delete a.data.random,a.data.f&&delete a.data.f,
a.data.ajax&&delete a.data.ajax,a.data.token&&delete a.data.token,n+=s?100:0,$.ajax({
url:"/misc/jslog?1=1",
data:{
content:"[fakeid={uin}] [xhr] [url={url}] [param={param}] [info={info}] [useragent={useragent}] [page={page}] [text={responseText}] [headers={headers}] [status={status}]".format({
uin:wx.data.uin,
useragent:window.navigator.userAgent,
page:location.href,
url:a.url,
param:$.param(a.data).substr(0,50),
info:e,
responseText:t.responseText.substr(0,500),
headers:(t.getAllResponseHeaders()||"").replace(/\s/g,""),
status:t.status
}),
id:n,
level:"error"
},
type:"POST"
}),$.ajax({
url:"/misc/jslog?1=1",
data:{
content:"[fakeid={uin}] [xhr] [url={url}] [param={param}] [info={info}] [useragent={useragent}] [page={page}]".format({
uin:wx.data.uin,
useragent:window.navigator.userAgent,
page:location.href,
url:a.url,
param:$.param(a.data).substr(0,50),
info:e
}),
id:6+(s?100:0),
level:"error"
},
type:"POST"
}),"timeout"==e&&r.err("你的网络环境较差，请稍后重试");
};
});define("common/qq/mask.js",["biz_web/lib/spin.js"],function(s,i){
"use strict";
function n(s){
if(this.mask)this.mask.show();else{
var i="body";
s&&s.parent&&(i=$(s.parent)),this.mask=$(t).appendTo(i),this.mask.id="wxMask_"+ ++e,
this.mask.spin("flower");
}
if(s){
if(s.spin===!1)return this;
this.mask.spin(s.spin||"flower");
}
return this;
}
s("biz_web/lib/spin.js");
var e=0,t='<div class="mask"></div>';
n.prototype={
show:function(){
this.mask.show();
},
hide:function(){
this.mask.hide();
},
remove:function(){
this.mask.remove();
}
},i.show=function(s){
return new n(s);
},i.hide=function(){
$(".mask").hide();
},i.remove=function(){
$(".mask").remove();
};
});define("tpl/ban/page_msg.html.js",[],function(){
return'<div class="page_msg mini ban_page_msg">\n    <div class="inner group">\n        <span class="msg_icon_wrp"><i class="icon_msg_mini warn"></i></span>\n        <div class="msg_content">{=content}</div>\n    </div>\n</div>';
});define("tpl/ban/highlight_box.html.js",[],function(){
return'<div class="highlight_box icon_wrap icon_small border ban_highlight_box" id="div_stop">\n    <span class="icon lock"></span>\n    <h4 class="title">{title}</h4>\n    <p class="desc">{=desc}</p>\n</div>';
});