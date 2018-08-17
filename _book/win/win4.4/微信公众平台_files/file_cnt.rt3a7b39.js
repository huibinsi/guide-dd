define("tpl/media/preview/video.html.js",[],function(){
return'<div class="wx_phone_hd">\n  <button class="js_back_btn wx_phone_goback_btn">返回</button>\n  {data.nickName}\n</div>\n<div class="wx_phone_bd">\n    <div class="wx_phone_preview_appmsg appmsg_wap page_share_video">\n      <div class="video_info_mod video_overview_info_context">\n        <div class="flex_context account_info">\n          <div class="flex_hd">\n            <span class="radius_avatar account_avatar">\n              <img class="account_avatar" src="{data.avatar}" alt="">\n            </span>\n          </div>\n          <div class="flex_bd">\n            <div class="account_nickname">\n              <strong class=" account_nickname_inner">{data.nickName}</strong>\n            </div>\n            <div class="account_desc">\n              <div class="account_desc_inner">\n                <span id="publish_time">{data.time}</span>\n                分享              </div>\n            </div>\n          </div>\n        </div>\n        <p class="share_notice">\n          {=data.guide_words.html(true).replace(/\\r/g,"").replace(/\\n/g,"<br>").replace(/\\s/g,"&nbsp;")}\n        </p>\n\n        <div class="video_card_context">\n          <div id="js_mpvedio" class="mpvideo_wrp">\n            <iframe class="video_iframe wx_video_iframe" allowfullscreen="" frameborder="0" src="https://v.qq.com/iframe/preview.html?vid={=data.share_videoinfo[0].video_id}&width=267&height=150&auto=0" style="width:267px;height:150px;"></iframe>\n          </div>\n          <div class="video_card_ft">\n            <h2 class="video_info_title">\n              <span id="video_title">{data.title}</span>\n            </h2>\n            <!--\n            <div class="video_info_overview">\n              <span class="video_info_overview_meta">视频来源&nbsp;\n                <a href="javascript:void(0);">腾讯视频</a>\n              </span>\n            </div>\n          -->\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n<!--wx_phone_bd-->\n<!--pulgin-->\n<div>\n    <ul class="wx_view_list">\n        <li class="wx_view_item jsPhoneViewLink" data-id="card">会话消息</li>\n        <!--<li class="wx_view_item jsPhoneViewLink selected" data-id="appmsg">消息正文</li>-->\n        <li class="wx_view_item jsPhoneViewLink" data-id="moments">分享到朋友圈</li>\n        <li class="wx_view_item jsPhoneViewLink" data-id="chat">发送给朋友</li>\n    </ul>\n    {if length>1}\n    <!--\n    <ul class="wx_article_crtl">        \n        <li class="crtl_btn crtl_pre_btn {if (index-1)<0}disabled{/if} jsPhoneViewCard" data-index="{index-1}">上一篇</li>        \n        <li class="crtl_btn crtl_next_btn {if (index+1)>=length}disabled{/if} jsPhoneViewCard" data-index="{index+1}">下一篇</li>\n    </ul>\n    -->\n    {/if}\n    <div class="btn_wx_phone_preview_wrp">\n        <a class="btn btn_default btn_wx_phone_preview jsPhoneViewPub">发送到手机预览</a>\n    </div>\n</div>\n\n';
});define("tpl/media/preview/audio.html.js",[],function(){
return'<div class="wx_phone_hd">\n  <button class="js_back_btn wx_phone_goback_btn">返回</button>\n  {data.nickName}\n</div>\n<div class="wx_phone_bd">\n    <div class="wx_phone_preview_appmsg appmsg_wap page_share_audio">\n      <div class="share_mod_context share_global_info">\n        <div class="flex_context account_info">\n          <div class="js_go_profile flex_hd">\n            <span  class="radius_avatar account_avatar">\n              <img class="account_avatar" src="{data.avatar}" alt="">\n            </span>\n          </div>\n          <div class="flex_bd">\n            <div class="js_go_profile account_nickname"><strong class="account_nickname_inner">{data.nickName}</strong></div>\n            <div class="account_desc">\n              <div class="account_desc_inner">\n                <span id="publish_time">{data.time}</span>\n                分享              </div>\n            </div>\n          </div>\n        </div>\n        <p class="share_notice">\n          {=data.guide_words.html(true).replace(/\\r/g,"").replace(/\\n/g,"<br>").replace(/\\s/g,"&nbsp;")}\n        </p>\n        <div id="voice_parent" class="share_media">\n          <span class="db">\n            <span aria-labelledby="语音" id="voice_frame" class="share_audio_context flex_context pages_reset">\n              <span id="voice_play" class="share_audio_switch db" aria-labelledby="播放开关"><em role="button" class="icon_share_audio_switch"></em></span>\n              <span class="share_audio_info flex_bd db">\n                <strong class="share_audio_title" aria-describedby="语音标题" role="link">{data.title}</strong>\n                <span id="voice_seekRange" class="share_audio_progress_wrp db">\n                  <span class="db share_audio_progress">\n                    <span id="voice_progress" style="width:0%" class="share_audio_progress_inner"></span>\n                    <span id="voice_buffer" class="share_audio_progress_buffer" style="width:0%;"></span>\n                    <span id="voice_loading" class="share_audio_progress_loading" style="display:none;">\n                      <span class="share_audio_progress_loading_inner"></span>\n                    </span>\n                  </span>\n                  <span id="voice_playdot" class="share_audio_progress_handle" style="left:0%;display:none;"></span>\n                </span>\n                <span class="db share_audio_desc">\n                  <em id="voice_playtime" class="share_audio_length_current">00:00</em>\n                  <em class="share_audio_length_total">{data.share_voiceinfo[0].duration}</em>\n                </span>\n              </span>\n            </span>\n          </span>\n        </div>\n      </div>\n    </div>\n</div>\n<!--wx_phone_bd-->\n<!--pulgin-->\n<div>\n    <ul class="wx_view_list">\n        <li class="wx_view_item jsPhoneViewLink" data-id="card">会话消息</li>\n        <!--<li class="wx_view_item jsPhoneViewLink selected" data-id="appmsg">消息正文</li>-->\n        <li class="wx_view_item jsPhoneViewLink" data-id="moments">分享到朋友圈</li>\n        <li class="wx_view_item jsPhoneViewLink" data-id="chat">发送给朋友</li>\n    </ul>\n    {if length>1}\n    <!--\n    <ul class="wx_article_crtl">        \n        <li class="crtl_btn crtl_pre_btn {if (index-1)<0}disabled{/if} jsPhoneViewCard" data-index="{index-1}">上一篇</li>        \n        <li class="crtl_btn crtl_next_btn {if (index+1)>=length}disabled{/if} jsPhoneViewCard" data-index="{index+1}">下一篇</li>\n    </ul>\n    -->\n    {/if}\n    <div class="btn_wx_phone_preview_wrp">\n        <a class="btn btn_default btn_wx_phone_preview jsPhoneViewPub">发送到手机预览</a>\n    </div>\n</div>\n\n';
});define("common/wx/phoneView.js",["tpl/media/preview/layout.html.js","widget/wx_phone_preview/wx_phone_preview.css"],function(t,e){
"use strict";
function i(t){
var e=t.html.split("<!--pulgin-->")[0],i=t.html.split("<!--pulgin-->")[1],p=template.compile(n)({
content:e,
plugin:i
});
this.$dom=$(template.compile(p)(t.data)).appendTo("body"),o(),t.todo&&"function"==typeof t.todo&&t.todo.apply(this,[t.data,t.html]);
var l=this;
this.$dom.find(".jsPhoneViewClose").click(function(){
l.remove();
});
}
function o(){
$("img").each(function(){
$(this).data("src")&&$(this).attr("src",$(this).data("src"));
});
}
{
var n=t("tpl/media/preview/layout.html.js");
t("widget/wx_phone_preview/wx_phone_preview.css");
}
return i.prototype.hide=function(){
this.$dom.hide();
},i.prototype.remove=function(){
this.$dom.remove();
},i.prototype.render=function(t,e){
var i=t.split("<!--pulgin-->")[0],o=t.split("<!--pulgin-->")[1];
this.$dom.find(".jsPhoneViewMain").html(template.compile(i)(e)),this.$dom.find(".jsPhoneViewMain").on("click","a.weapp_text_link,a.weapp_image_link",function(){
return alert("将在微信端打开小程序"),!1;
}),o&&this.$dom.find(".jsPhoneViewPlugin").html(template.compile(o)(e)).show();
},e.module=i;
});define("tpl/media/appmsg_list.html.js",[],function(){
return'{each data as item}\n<ul class="s_row"  data-id="{item.id}" data-index="{item.index}">\n    <li class="s_cell last_child">\n        <label class="frm_radio_label {if !item.cover||!item.title}disabled {/if}">\n            <i class="icon_radio"></i>\n            <span class="lbl_content">\n              {if (item.cover||item.share_page_type == 7)&&item.title }\n              <a class="select_appmsg_title jsTempLink" href="javascript:;">{=item.title}</a>\n              {else}\n              <span class="select_appmsg_title">{=item.title}</span>\n              {/if}\n              {if item.info}<span class="weui-desktop-tips">{item.info}</span>{/if}\n              <span class="select_appmsg_date">{item.time}</span>\n            </span>\n            <input type="radio"  class="frm_radio jsAppmsgRadio"  >\n        </label>\n    </li>\n</ul>\n{/each}\n';
});define("tpl/media/appmsg_dialog.html.js",[],function(){
return'<div class="appmsg_list_wrp js_content js_appmsg">\n  <div class="search_wrp">\n    <span class="frm_input_box search append with_del">\n      <a class="del_btn  js_search_clear_btn" style="display: none;" href="javascript:;"><i class="icon_search_del"></i>&nbsp;</a>\n      <a href="javascript:void(0);" class="frm_input_append js_search_btn" onclick="return false;">\n        <i class="icon16_common search_gray">\n          搜索        </i>\n        &nbsp;\n      </a>\n      <input type="text" placeholder="标题" value="" class="frm_input js_search">\n    </span>\n  </div>\n  <div class="s_table_wrp js_appmsg_list js_list">\n    <div class="s_table">\n      <ul class="s_thead">\n        <li class="s_th s_cell">文章标题</li>\n        <li class="s_th s_cell last_child">最近修改时间</li>\n      </ul>\n      <div class="s_tbody ">\n        <div class="s_tbody_inner js_tbody">\n        </div>\n        <div class="js_loading empty_tips" style="display:none">\n          <i class="icon_loading_small white"></i>\n        </div>\n        <div class="empty_tips js_empty" style="display:none">\n          暂无素材库文章        </div>\n      </div>\n    </div>\n  </div>\n  <div class="pagination_wrp js_pagebar"></div>\n</div>\n';
});define("common/wx/top.js",["tpl/top.html.js"],function(a,e,t){
"use strict";
function i(a,e,t){
return this.dom=$(a),this.dom.addClass("title_tab"),e&&"string"==typeof e&&(e=[{
name:"",
url:"javascript:;",
className:"selected"
}]),$.each(e,function(a,e){
e.url=e.url&&[e.url,wx.data.param].join("")||"javascript:;";
}),this.dom.html(template.compile(n)({
data:e
})),t&&t.render&&"function"==typeof t.render?$.each(this.dom.find("li"),function(a,i){
t.render.apply($(i),[e[a],t&&t.data]);
}):this.dom.html(template.compile(n)({
data:e
})),this.dom.on("click",".top_item",function(){
$(this).addClass("selected").siblings().removeClass("selected");
}),this;
}
var n=a("tpl/top.html.js"),s=wx.acl;
i.prototype.selected=function(a){
this.dom.find(".js_top").removeClass("selected"),"number"==typeof a?this.dom.find(".js_top:eq("+a+")").addClass("selected"):this.dom.find(".js_top[data-id="+a+"]").addClass("selected");
},i.DATA={
setting:[{
id:"info",
name:"帐号详情",
url:"/cgi-bin/settingpage?t=setting/index&action=index"
},{
id:"function",
name:"功能设置",
url:"/cgi-bin/settingpage?t=setting/function&action=function"
},{
id:"auth_plugins",
name:"授权管理",
url:"/cgi-bin/component_unauthorize?action=list"
}],
mass:[{
id:"send",
name:"新建群发消息",
url:"/cgi-bin/masssendpage?t=mass/send"
},{
id:"jurisdiction",
name:"授权申请",
acl:s&&s.msg_acl&&s.msg_acl.can_use_reprintapply_list,
url:"/cgi-bin/copyrightlib?action=reprint_article&begin=0&count=10&auth_status=0&lang=zh_CN"
}],
message:[{
id:"total",
name:"全部消息",
url:"/cgi-bin/message?t=message/list&count=20&day=7"
},{
id:"star",
name:"已收藏的消息",
url:"/cgi-bin/message?t=message/list&count=20&action=star"
},{
id:"search",
name:"搜索结果"
}],
media:[{
id:"media11",
name:"商品消息",
acl:s&&s.material_acl&&s.material_acl.can_commodity_app_msg,
url:"/cgi-bin/appmsg?begin=0&count=10&t=media/appmsg_list&type=11&action=list"
},{
id:"media10",
name:"图文消息",
acl:s&&s.material_acl&&s.material_acl.can_app_msg,
url:"/cgi-bin/appmsg?begin=0&count=10&t=media/appmsg_list2&type=10&action=list_card"
},{
id:"media2",
name:"图片",
acl:s&&s.material_acl&&s.material_acl.can_image_msg,
url:"/cgi-bin/filepage?type=2&begin=0&count=12&t=media/img_list"
},{
id:"media3",
name:"语音",
acl:s&&s.material_acl&&s.material_acl.can_voice_msg,
url:"/cgi-bin/filepage?type=3&begin=0&count=21&t=media/list"
},{
id:"media15",
name:"视频",
acl:s&&s.material_acl&&s.material_acl.can_video_msg,
url:"/cgi-bin/appmsg?begin=0&count=9&t=media/video_list&action=list_video&type=15"
},{
id:"product",
name:"商品",
acl:s&&s.product_acl&&s.product_acl.can_see_product,
url:"/cgi-bin/productmaterial?action=product_list"
}],
business:[{
id:"overview",
name:"数据概览",
url:"/merchant/business?t=business/overview&action=overview"
},{
id:"order",
name:"订单流水",
url:"/merchant/business?t=business/order&action=order"
},{
id:"info",
name:"商户信息",
url:"/merchant/business?t=business/info&action=info"
},{
id:"test",
name:"支付测试",
url:"/merchant/business?t=business/whitelist&action=whitelist"
},{
id:"rights",
name:"维权仲裁",
url:"/merchant/shop_rights?t=business/rights_list&action=batchgetpayfeedback"
},{
id:"course",
name:"使用教程",
url:"/merchant/business?t=business/course&action=course"
}],
user:[{
id:"useradmin",
name:"已关注",
url:"/cgi-bin/contactmanage?t=user/index&pagesize=10&pageidx=0&type=0&groupid=0"
}],
statistics:{
user:[{
id:"summary",
name:"用户增长",
url:"/misc/pluginloginpage?action=stat_user_summary&pluginid=luopan&t=statistics/index"
},{
id:"attr",
name:"用户属性",
url:"/misc/pluginloginpage?action=stat_user_attr&pluginid=luopan&t=statistics/index"
}],
article:[{
id:"detail",
name:"图文群发",
url:"/misc/pluginloginpage?action=stat_article_detail&pluginid=luopan&t=statistics/index"
},{
id:"analyse",
name:"图文统计",
url:"/misc/pluginloginpage?action=stat_article_analyse&pluginid=luopan&t=statistics/index"
}],
message:[{
id:"message",
name:"消息分析",
url:"/misc/pluginloginpage?action=stat_message&pluginid=luopan&t=statistics/index"
},{
id:"key",
name:"消息关键词",
url:"/misc/pluginloginpage?action=ctr_keyword&pluginid=luopan&t=statistics/index"
}],
"interface":[{
id:"interface",
name:"接口分析",
url:"/misc/pluginloginpage?action=stat_interface&pluginid=luopan&t=statistics/index"
}]
},
notification:[{
id:"notification",
name:"通知中心",
url:"/cgi-bin/frame?t=notification/index_frame"
}],
templateMessage:[{
id:"my_template",
name:"我的模版",
url:"/advanced/tmplmsg?action=list&t=tmplmsg/list"
},{
id:"template_message",
name:"模版库",
url:"/advanced/tmplmsg?action=tmpl_store&t=tmplmsg/store"
}],
assistant:[{
id:"mphelper",
name:"公众号助手",
url:"/misc/assistant?t=setting/mphelper&action=mphelper"
},{
id:"warning",
name:"接口告警",
url:"/misc/assistant?t=setting/warning&action=warning"
}],
shop:[{
id:"shopoverview",
name:"小店概况",
url:"/merchant/merchantstat?t=shop/overview&action=getoverview"
},{
id:"addGoods",
name:"添加商品",
url:"/merchant/goods?type=11&t=shop/precreate",
target:"_blank"
},{
id:"goodsManagement",
name:"商品管理",
url:"/merchant/goodsgroup?t=shop/category&type=1"
},{
id:"shelfManagement",
name:"货架管理",
url:"/merchant/shelf?status=0&action=get_shelflist&t=shop/myshelf&offset=0&count=5"
},{
id:"orderManagement",
name:"订单管理",
url:"/merchant/productorder?action=getlist&t=shop/order_list&last_days=30&count=10&offset=0"
},{
id:"deliverylist",
name:"运费管理",
url:"/merchant/delivery?action=globalfee&t=shop/delivery_global"
},{
id:"images",
name:"图片库",
url:"/merchant/goodsimage?action=getimage&t=shop/shop_img&count=20&offset=0"
}],
adClient:[{
id:"adclientreport",
name:"报表统计",
url:"/merchant/ad_client_report?t=ad_system/client_report&action=list"
},{
id:"adclientmanage",
name:"广告管理",
url:"/merchant/advert?t=ad_system/promotion_list&action=get_advert_count"
},{
id:"materialmanage",
name:"推广页管理",
url:"/merchant/ad_material?t=material/list&action=get_material_list"
},{
id:"adclientpay",
name:"财务管理",
url:"/cgi-bin/frame?nav=10026&t=ad_system/host_frame"
},{
id:"adservice",
name:"广告服务商",
acl:s&&s.ad_system&&s.ad_system.can_use_sp,
url:"/cgi-bin/frame?nav=10026&t=ad_system/client_service_frame"
}],
adHost:[{
id:"adhostreport",
name:"报表统计",
url:"/merchant/ad_host_report?t=ad_system/host_report"
},{
id:"adhostmanage",
name:"流量管理",
url:"/merchant/ad_host_manage?t=ad_system/host_manage"
},{
id:"adhostpay",
name:"财务管理",
url:"/merchant/ad_host_pay?action=ad_host_pay&t=ad_system/host_pay"
}],
advanced:[{
id:"dev",
name:"日志查询",
url:"/advanced/advanced?action=log_home"
},{
id:"group-alert",
name:"接口报警",
url:"/advanced/advanced?action=alarm&t=advanced/alarm"
}],
cardticket:[{
id:"cardmgr",
name:"卡券管理",
url:"/merchant/electroniccardmgr?action=batch&t=cardticket/batch_card"
},{
id:"permission",
name:"卡券核销",
url:"/merchant/carduse?action=listchecker&t=cardticket/permission"
},{
id:"carduse",
name:"核销记录",
url:"/merchant/carduserecord?action=listrecord&t=cardticket/carduse_record"
},{
id:"cardreport",
name:"数据报表",
url:"/merchant/ecardreport?action=overviewpage&t=cardticket/overviewpage"
}],
infringement:[{
id:"infringement",
name:"我要投诉",
url:"/acct/infringement?action=getmanual&t=infringement/manual&type=1"
},{
id:"antiinfringement",
name:"我要申诉",
url:"/acct/infringement?action=getmanual&t=infringement/manual&type=2"
},{
id:"list",
name:"提交记录",
url:"/acct/infringement?action=getlist&t=infringement/ingringement_list&type=1&begin=0&count=10"
}],
scan:[{
id:"overview",
name:"数据概况",
url:"/merchant/scandataoverview?action=keydata"
},{
id:"product_list",
name:"商品管理",
url:"/merchant/scanproductlist?action=list&page=1&status=1"
},{
id:"firmcat_list",
name:"资质管理",
url:"/merchant/scanqualification?action=firmcatpage"
}],
rumor:[{
id:"list",
name:"谣言池",
url:"/misc/rumor?action=rumorlist&t=rumor/list"
},{
id:"result",
name:"辟谣数据",
url:"/misc/rumor?action=summarylist&t=rumor/result"
}],
reward:[{
id:"list",
name:"数据概况",
url:"/merchant/rewardstat?action=getoverview&t=reward/overview"
},{
id:"setting",
name:"赞赏设置",
url:"/merchant/reward?action=rewardsetting"
}],
discuss:[{
id:"list_latest",
name:"留言列表",
url:"/misc/appmsgcomment?action=list_latest_comment&begin=0&count=10&mp_version=7"
},{
id:"index",
name:"群发消息管理",
url:"/misc/appmsgcomment?action=list_app_msg&begin=0&count=10"
}],
search:[{
id:"search",
name:"搜索",
url:"/advanced/componentsearch?action=search"
},{
id:"authorized",
name:"已添加",
url:"/cgi-bin/component_unauthorize?action=list&t=service/auth_plugins"
}],
kf:[{
id:"account",
name:"账号管理",
url:"/misc/kf?t=services/list&action=list"
},{
id:"state",
name:"客服数据",
url:"/misc/kf?t=services/kf_stat&action=getstatpage"
},{
id:"media",
name:"客服素材",
url:"/misc/kf?t=services/kf-public-text&action=publicreplypage"
}],
ibeacon:[{
id:"deviceManagement",
name:"设备管理",
url:"/merchant/beacongetdevices?action=list"
},{
id:"pageManagement",
name:"页面管理",
url:"/merchant/beaconlistpage?action=list&need_dc=1"
},{
id:"dataReport",
name:"数据报表",
url:"/merchant/beaconstatsummary?action=list"
}]
},s&&s.ad_system&&s.ad_system.can_use_new_ad&&(i.DATA.adClient[0].url="/cgi-bin/frame?nav=10026&t=ad_system/client_report_frame",
i.DATA.adClient[1].url="/cgi-bin/frame?nav=10026&t=ad_system/promotion_list_frame"),
s&&s.merchant_acl&&s.merchant_acl.can_use_account_manage&&i.DATA.adClient.push({
id:"adclientaccountmanage",
name:"账户管理",
acl:s&&s.ad_system&&s.ad_system.can_use_account_manage,
url:"/cgi-bin/frame?nav=10026&t=ad_system/account_frame"
}),s&&s.merchant_acl&&s.merchant_acl.can_use_pay_tmpl&&i.DATA.templateMessage.push({
id:"template_pay_list",
name:"支付模板消息",
url:"/advanced/tmplmsg?action=pay_list&t=tmplmsg/payment"
}),s&&s.merchant_acl&&2==s.merchant_acl.wxa_mall_status&&i.DATA.shop.push({
id:"weapp_shop_weapp_management",
name:"小程序管理",
url:"/misc/wxaadmin?action=index"
}),i.RENDER={
setting:function(a,e){
"meeting"==a.id&&15!=e.role&&this.remove();
},
message:function(a,e){
"search"!=a.id||e&&"search"==e.action||this.remove();
},
assistant:function(a,e){
"warning"!=a.id||e&&0!=e.have_service_package||this.remove();
},
reward:function(a,e){
"invite"!=a.id||e&&0!=e.invite_authority||this.remove();
}
},t.exports=i;
});!function(n){
"use strict";
function t(n,t){
var r=(65535&n)+(65535&t),u=(n>>16)+(t>>16)+(r>>16);
return u<<16|65535&r;
}
function r(n,t){
return n<<t|n>>>32-t;
}
function u(n,u,e,o,c,f){
return t(r(t(t(u,n),t(o,f)),c),e);
}
function e(n,t,r,e,o,c,f){
return u(t&r|~t&e,n,t,o,c,f);
}
function o(n,t,r,e,o,c,f){
return u(t&e|r&~e,n,t,o,c,f);
}
function c(n,t,r,e,o,c,f){
return u(t^r^e,n,t,o,c,f);
}
function f(n,t,r,e,o,c,f){
return u(r^(t|~e),n,t,o,c,f);
}
function i(n,r){
n[r>>5]|=128<<r%32,n[(r+64>>>9<<4)+14]=r;
var u,i,h,a,g,l=1732584193,d=-271733879,v=-1732584194,C=271733878;
for(u=0;u<n.length;u+=16)i=l,h=d,a=v,g=C,l=e(l,d,v,C,n[u],7,-680876936),C=e(C,l,d,v,n[u+1],12,-389564586),
v=e(v,C,l,d,n[u+2],17,606105819),d=e(d,v,C,l,n[u+3],22,-1044525330),l=e(l,d,v,C,n[u+4],7,-176418897),
C=e(C,l,d,v,n[u+5],12,1200080426),v=e(v,C,l,d,n[u+6],17,-1473231341),d=e(d,v,C,l,n[u+7],22,-45705983),
l=e(l,d,v,C,n[u+8],7,1770035416),C=e(C,l,d,v,n[u+9],12,-1958414417),v=e(v,C,l,d,n[u+10],17,-42063),
d=e(d,v,C,l,n[u+11],22,-1990404162),l=e(l,d,v,C,n[u+12],7,1804603682),C=e(C,l,d,v,n[u+13],12,-40341101),
v=e(v,C,l,d,n[u+14],17,-1502002290),d=e(d,v,C,l,n[u+15],22,1236535329),l=o(l,d,v,C,n[u+1],5,-165796510),
C=o(C,l,d,v,n[u+6],9,-1069501632),v=o(v,C,l,d,n[u+11],14,643717713),d=o(d,v,C,l,n[u],20,-373897302),
l=o(l,d,v,C,n[u+5],5,-701558691),C=o(C,l,d,v,n[u+10],9,38016083),v=o(v,C,l,d,n[u+15],14,-660478335),
d=o(d,v,C,l,n[u+4],20,-405537848),l=o(l,d,v,C,n[u+9],5,568446438),C=o(C,l,d,v,n[u+14],9,-1019803690),
v=o(v,C,l,d,n[u+3],14,-187363961),d=o(d,v,C,l,n[u+8],20,1163531501),l=o(l,d,v,C,n[u+13],5,-1444681467),
C=o(C,l,d,v,n[u+2],9,-51403784),v=o(v,C,l,d,n[u+7],14,1735328473),d=o(d,v,C,l,n[u+12],20,-1926607734),
l=c(l,d,v,C,n[u+5],4,-378558),C=c(C,l,d,v,n[u+8],11,-2022574463),v=c(v,C,l,d,n[u+11],16,1839030562),
d=c(d,v,C,l,n[u+14],23,-35309556),l=c(l,d,v,C,n[u+1],4,-1530992060),C=c(C,l,d,v,n[u+4],11,1272893353),
v=c(v,C,l,d,n[u+7],16,-155497632),d=c(d,v,C,l,n[u+10],23,-1094730640),l=c(l,d,v,C,n[u+13],4,681279174),
C=c(C,l,d,v,n[u],11,-358537222),v=c(v,C,l,d,n[u+3],16,-722521979),d=c(d,v,C,l,n[u+6],23,76029189),
l=c(l,d,v,C,n[u+9],4,-640364487),C=c(C,l,d,v,n[u+12],11,-421815835),v=c(v,C,l,d,n[u+15],16,530742520),
d=c(d,v,C,l,n[u+2],23,-995338651),l=f(l,d,v,C,n[u],6,-198630844),C=f(C,l,d,v,n[u+7],10,1126891415),
v=f(v,C,l,d,n[u+14],15,-1416354905),d=f(d,v,C,l,n[u+5],21,-57434055),l=f(l,d,v,C,n[u+12],6,1700485571),
C=f(C,l,d,v,n[u+3],10,-1894986606),v=f(v,C,l,d,n[u+10],15,-1051523),d=f(d,v,C,l,n[u+1],21,-2054922799),
l=f(l,d,v,C,n[u+8],6,1873313359),C=f(C,l,d,v,n[u+15],10,-30611744),v=f(v,C,l,d,n[u+6],15,-1560198380),
d=f(d,v,C,l,n[u+13],21,1309151649),l=f(l,d,v,C,n[u+4],6,-145523070),C=f(C,l,d,v,n[u+11],10,-1120210379),
v=f(v,C,l,d,n[u+2],15,718787259),d=f(d,v,C,l,n[u+9],21,-343485551),l=t(l,i),d=t(d,h),
v=t(v,a),C=t(C,g);
return[l,d,v,C];
}
function h(n){
var t,r="";
for(t=0;t<32*n.length;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);
return r;
}
function a(n){
var t,r=[];
for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;
for(t=0;t<8*n.length;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;
return r;
}
function g(n){
return h(i(a(n),8*n.length));
}
function l(n,t){
var r,u,e=a(n),o=[],c=[];
for(o[15]=c[15]=void 0,e.length>16&&(e=i(e,8*n.length)),r=0;16>r;r+=1)o[r]=909522486^e[r],
c[r]=1549556828^e[r];
return u=i(o.concat(a(t)),512+8*t.length),h(i(c.concat(u),640));
}
function d(n){
var t,r,u="0123456789abcdef",e="";
for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),e+=u.charAt(t>>>4&15)+u.charAt(15&t);
return e;
}
function v(n){
return unescape(encodeURIComponent(n));
}
function C(n){
return g(v(n));
}
function s(n){
return d(C(n));
}
function A(n,t){
return l(v(n),v(t));
}
function m(n,t){
return d(A(n,t));
}
n.md5=function(n,t,r){
return t?r?A(t,n):m(t,n):r?C(n):s(n);
};
}("function"==typeof jQuery?jQuery:this);define("media/reprint_article.js",["media/common.js","media/base_article.js"],function(t){
"use strict";
var e=t("media/common.js"),i=t("media/base_article.js"),r=i.inherit({
init:function(){
this.initTextEditorEnv();
},
initData:function(){
var t=i.prototype.initData.call(this);
return t.set("guide_words",t.get("guide_words")),t.set("is_share_copyright",0),t.set("copyright_type",2),
t.set("share_page_type",0),t;
},
getDigestFromContent:function(){
var t=this.data;
return $.trim(t.get("guide_words").text().html(!1).substr(0,120))||$.trim(t.get("content").text().html(!1).substr(0,54));
},
setEditorContent:function(){
var t=this;
t._o.ueditor.ready(function(){
var e=t.data.getData(),i=t._o.ueditor;
i.setContent("");
try{
i.setContent(e.content);
}catch(r){
e.content&&""==i.getUeditor().getContent()&&((new Image).src="//mp.weixin.qq.com/mp/jsmonitor?idkey=%s_%s_1&lc=1&log0=editor_setcontent_error;errmsg:%s,uin:%s".sprintf(28308,0,r.message,wx.data.uin),
window.BJ_REPORT&&"function"==typeof window.BJ_REPORT.report&&r&&r.stack&&(r.stack="editor_setcontent_error|"+r.stack,
window.BJ_REPORT.report(r)),r.stack&&console&&console.error&&console.error("[BJ-REPORT]",r.stack));
}
i.setHistory(t.getHistory());
});
},
flush:function(){
{
var t=this.data;
this._o.$infoContainer,this._o.cgiData;
}
return this.flushField(),this.flushGuidWords(),t.setData(this._o.ueditor.getEditorData(t.getData())),
this.setDigest(),t.set("guide_words",t.get("guide_words")),this.flushCommon(),this;
},
getAllImgData:function(){
var t=this._o.ueditor,e=t.fireEvent("getRemoteList"),i=[];
for(var r in e){
var s=e[r];
i.push(s.uid);
}
i=0==i.length?"":","+i.join(",")+",";
for(var n=t.getDocument(),o=n.getElementsByTagName("*"),a=",",d=[],r=0,c=o.length;c>r;r++){
var s=o[r];
if(/img/i.test(s.nodeName)){
var l=s.getAttribute("_src")||s.src||"",u=s.getAttribute("data-remoteid")||"";
if($(s).hasClass("js_catchremoteimageerror"))continue;
if(!l)continue;
if(a.indexOf(","+l+",")>=0)continue;
var h=!1;
i&&u&&i.indexOf(","+u+",")>=0&&(h=!0),a+=l+",",d.push({
url:this.gif2Img(l),
uid:u,
isRemote:h
});
}else{
var _=s.getAttribute("style")||s.style.cssText||"";
if(_=_.match(/;?\s*(background|background-image)\s*\:[^;]*?url\(([^\)]+)\)/),_&&_[2]){
var l=_[2].replace(/^['"]|['"]$/g,""),u=s.getAttribute("data-remoteid")||"";
if($(s).hasClass("js_catchremoteimageerror"))continue;
if(!l)continue;
if(a.indexOf(","+l+",")>=0)continue;
var h=!1;
i&&u&&i.indexOf(","+u+",")>=0&&(h=!0),a+=l+",",d.push({
url:this.gif2Img(l),
uid:u,
isRemote:h
});
}
}
}
return d;
},
gif2Img:function(t){
return/\/0\?(.*&)?wx_fmt=gif/.test(t)?t.replace(/\/0\?/,"/s640?"):t;
},
validateCatchRemoteImage:function(t){
var e=$("<div>").html(t.content),i=e.find(".js_catchremoteimageerror").length;
if(i){
var r=this._o.$infoContainer.find(".js_catch_tips");
return this.showErrMsg(r,"有%s张图片粘贴失败".sprintf(i)),this.scrollIntoView(r,200),!1;
}
return!0;
},
validateTitle:function(t){
var i=t.item,r=t.$dom,s=e.validate({
key:"title",
content:i.title,
strict:t.strict
});
return s&&s.msg&&(this.showErrMsg(r.find(".js_title_error"),s.msg),t.viewClass=t.viewClass||".js_title_error",
t.isValid=!1,2==s.type&&((new Image).src="https://mp.weixin.qq.com/misc/jslog?id=115&content=badjs&level=error")),
t;
},
validateEditor:function(t,i){
var r=t.item,s=t.$dom,n=e.validate({
key:"content",
content:r.content,
editor:i,
strict:t.strict
});
return n&&n.msg&&(4==n.errType?t.isValid=!1:(this.showErrMsg(s.find(".js_content_error"),n.msg),
t.viewClass=t.viewClass||".js_content_error",t.isValid=!1)),t;
},
validate:function(t){
if(this.validateCatchRemoteImage(t)===!1)return null;
var e=this._o.$infoContainer,i=this._o.ueditor,r={
isValid:!0,
viewClass:"",
item:t,
$dom:e,
strict:!1
};
return t.title||t.content||t.fileid||(this.showErrMsg(e.find(".js_content_error"),"请先输入一段正文（或者标题），再点击保存按钮。"),
i.getUeditor().focus(),r.viewClass=r.viewClass||".js_content_error",r.isValid=!1),
r=this.validateTitle(r),r=this.validateGuideWords(r),r=this.validateEditor(r,i),
r=this.validateCommon(r),this.handleValidateResult(r);
},
validateStrictly:function(t){
if(this.validateCatchRemoteImage(t)===!1)return null;
var e=this._o.ueditor,i={
isValid:!0,
viewClass:"",
item:t,
$dom:this._o.$infoContainer,
strict:!0
};
return i=this.validateTitle(i),i=this.validateGuideWords(i),i=this.validateEditor(i,e),
i=this.validateStrictlyCommon(i),this.handleValidateResult(i);
},
modifyCurrentEditData:function(t){
i.prototype.modifyCurrentEditData.call(this,t),"undefined"!=typeof t.content&&this._o.ueditor.setContent(t.content);
},
render:function(){
var t=this._o.ueditor,e=!1,r=!1,s=!1,n="该转载文章不可编辑",o="";
switch(i.prototype.render.call(this),this.setTextEditorWordlimit(300),this.setEditorContent(),
this.renderGuidWords(),t.getUeditor().focus(),this._o.data.source_reprint_status){
case"EN_SOURCE_REPRINT_STATUS_REJECT_REPRINT":
case"EN_SOURCE_REPRINT_STATUS_REPRINT_WITHOUT_MODIFY":
e=!1,r=!1,s=!1,o="当前为开放转载文章，不支持修改";
break;

case"EN_SOURCE_REPRINT_STATUS_REPRINT_WITH_MODIFY":
e=!1,r=!0,s=!1,o="当前为开放转载文章，不支持修改";
break;

case"EN_SOURCE_REPRINT_STATUS_IN_WHITE_LIST_WITH_SOURCE":
e=!0,r=!0,s=!1,o="当前为白名单转载文章，支持修改";
break;

case"EN_SOURCE_REPRINT_STATUS_IN_WHITE_LIST_WITHOUT_SOURCE":
e=!0,r=!0,s=!0,o="当前为白名单转载文章，支持修改";
}
s||this.renderReprintSource(),this.renderReprintTips(o),t.fireEvent("setCurRenderType",1),
t.fireEvent("setTitleStatus",{
readonly:!r,
readonlyTips:n
}),t.fireEvent("setAuthorStatus",{
status:!0,
readonly:!0,
readonlyTips:e?"转载文章不能修改作者":n,
hideCounter:!0
}),t.fireEvent("switchContentType",{
type:3,
content:{
readonly:!r,
readonlyTips:n
},
guideWords:{
placeholder:"在这里写下对文章和作者的推荐语"
}
}),t.fireEvent("setToolBarStatus",{
status:r,
disabledTips:n
}),t.fireEvent("setArticleUrlStatus",!1),t.fireEvent("setCommentStatus",!0),t.fireEvent("setOriginalStatus",{
status:!0,
type:"reprint"
}),t.fireEvent("setCoverStatus",{
status:!0,
readonly:!r,
tips:r?"":"该转载文章不可修改封面"
}),t.fireEvent("setDescriptionStatus",{
status:!0
}),t.fireEvent("setFoldStatus",!0);
}
});
return r.showDialog=function(t){
t.onOk();
},r;
});define("media/image_article.js",["common/wx/media/imageDialog.js","tpl/media/appmsg_edit/image_article_content.html.js","media/base_article.js","biz_common/jquery.validate.js"],function(i){
"use strict";
var t=i("common/wx/media/imageDialog.js"),e=i("tpl/media/appmsg_edit/image_article_content.html.js"),a=i("media/base_article.js"),n=i("biz_common/jquery.validate.js"),r=(n.rules,
a.inherit({
init:function(){
this.initTextEditorEnv();
},
initData:function(){
var i=this,t=a.prototype.initData.call(this);
return t.set("share_page_type",8),t.get("share_imageinfo")||t.set("share_imageinfo",[]),
this.setTitle(t),this.setShareImageid(t),t.set("author",""),t.set("file_id",""),
setTimeout(function(){
i.getImageWh();
},0),t;
},
handleEditTips:function(){
this._o.$infoContainer.find(".js_edit_tips").show();
},
getEditTipsContent:function(){
return"填写推荐语，上限140个字。不支持插入其他素材。";
},
setTitle:function(i){
i.set("title","分享图片");
},
setShareImageid:function(i){
for(var t=i.get("share_imageinfo")||[],e=[],a=0;a<t.length;a++)e.push(t[a].file_id);
i.set("share_imageid",e.join(","));
},
getImageWh:function(){
var i=this.data.get("share_imageinfo");
if(i&&0!=i.length)for(var t=0;t<i.length;t++){
var e=i[t];
!e.cdn_url||e.height&&e.width||!function(i,t,e){
var a=new window.Image;
a.onload=function(){
var t=this.naturalWidth||this.width||0,e=this.naturalHeight||this.height||0;
i.setImageWh(this.src,t,e);
},a.src=e;
}(this,t,e.cdn_url);
}
},
setImageWh:function(i,t,e){
if(i&&t&&e){
var a=this.data.get("share_imageinfo");
if(a&&a.length>0){
for(var n=0;n<a.length;n++){
var r=a[n];
r.cdn_url===i&&(r.width=t,r.height=e);
}
this.data.set("share_imageinfo",a);
}
}
},
validate:function(i){
var t={
isValid:!0,
viewClass:"",
item:i,
$dom:this._o.$infoContainer,
strict:!1
};
return t=this.validateGuideWords(t),this.handleValidateResult(t);
},
validateStrictly:function(i){
var t={
isValid:!0,
viewClass:"",
item:i,
$dom:this._o.$infoContainer,
strict:!0
};
return t=this.validateGuideWords(t),this.handleValidateResult(t);
},
flush:function(){
this.data,this._o.$infoContainer;
return this.flushField(),this.flushGuidWords(),this.flushCommon(),this;
},
render:function(){
var i=this,t=this._o.ueditor;
a.prototype.render.call(this);
this._o.$infoContainer;
this.renderGuidWords(),this._o.$infoContainer.find(".js_plublish_style").hide(),
this.renderSharePreview({
tpl:e
}),t.fireEvent("renderEditorByType",2),setTimeout(function(){
i.getImageWh();
},0);
},
replaceMedia:function(){
var i=this;
r.showDialog({
onCancel:function(){},
onOk:function(t){
var a=t.data;
i.data.set("share_imageinfo",a.share_imageinfo),i.data.set("cdn_url",a.cdn_url),
i.setTitle(i.data),i.setShareImageid(i.data),i.isCurrentArticle()&&i.renderSharePreview({
tpl:e
}),i.coverChange({
url:a.cdn_url,
file_id:"",
oriUrl:a.cdn_url,
oriFormat:"",
coverPic:0
}),i.titleChange({
title:i.data.get("title")
}),i.getImageWh();
}
});
}
}));
return r.showDialog=function(i){
t({
cropImg:!1,
only_cdn:!1,
maxSelect:1,
onOK:function(t){
this.destroy();
var e=[];
if(t&&t.length>0)for(var a=0;a<t.length;a++)e.push({
file_id:t[a].file_id,
cdn_url:t[a].url,
width:"",
height:""
});
i.onOk({
data:{
cdn_url:e[0]?e[0].cdn_url:"",
share_imageinfo:e,
share_page_type:8
}
});
},
onHide:function(){
i.onCancel();
}
});
},r;
});define("media/audio_article.js",["common/wx/media/audio.js","common/wx/media/videoUtils.js","common/wx/media/audioMusicDialog.js","tpl/media/appmsg_edit/voice_article_content.html.js","media/base_article.js","biz_common/jquery.validate.js"],function(i){
"use strict";
var e=i("common/wx/media/audio.js"),t=i("common/wx/media/videoUtils.js"),o=i("common/wx/media/audioMusicDialog.js"),a=(i("tpl/media/appmsg_edit/voice_article_content.html.js"),
i("media/base_article.js")),n=i("biz_common/jquery.validate.js"),s=(n.rules,a.inherit({
init:function(){
this.initTextEditorEnv();
},
initData:function(){
var i=a.prototype.initData.call(this);
i.set("share_page_type",7);
var e=i.get("share_voiceinfo");
return e=e[0]||{},e.file_id?(e.title=i.get("title"),e.duration=t.changeTime(e.play_length),
i.set("share_voiceinfo",[e]),i.set("share_voice_id",e.file_id)):(i.set("share_voiceinfo",[]),
i.set("share_voice_id","")),i;
},
handleEditTips:function(){
this._o.$infoContainer.find(".js_edit_tips").show();
},
getEditTipsContent:function(){
return"语音消息标题与语音素材一致，不支持当前修改。填写推荐语，上限140个字。不支持插入其他素材。";
},
validate:function(i){
var e={
isValid:!0,
viewClass:"",
item:i,
$dom:this._o.$infoContainer,
strict:!1
};
return e=this.validateGuideWords(e),this.handleValidateResult(e);
},
validateStrictly:function(i){
var e={
isValid:!0,
viewClass:"",
item:i,
$dom:this._o.$infoContainer,
strict:!0
};
return e=this.validateGuideWords(e),this.handleValidateResult(e);
},
flush:function(){
this.data,this._o.$infoContainer;
return this.flushField(),this.flushGuidWords(),this.flushCommon(),this;
},
render:function(){
var i=this._o.ueditor;
a.prototype.render.call(this);
this._o.$infoContainer;
this.renderGuidWords(),this._o.$infoContainer.find(".js_plublish_style").hide(),
this.renderVoiceCard(),i.fireEvent("renderEditorByType",2);
},
renderVoiceCard:function(){
var i=$("#reprint_article_main").html("").show(),t=this.data.get("share_voiceinfo")[0];
this._g.player=new e({
selector:i,
shareTpl:!0,
file_id:t.file_id,
title:t.title,
play_length:1e3*t.play_length,
qqmusicurl:t.play_url
});
},
replaceMedia:function(){
var i=this;
s.showDialog({
onCancel:function(){},
onOk:function(e){
var t=e.data;
i.data.set("share_voice_id",t.share_voice_id),i.data.set("share_voiceinfo",t.share_voiceinfo),
i.data.set("title",t.title),i.isCurrentArticle()&&(i.stopPlay(),i.renderVoiceCard()),
i.titleChange({
title:t.title
});
}
});
},
stopPlay:function(){
this._g.player&&"function"==typeof this._g.player.stop&&this._g.player.stop();
},
destroy:function(){
this.stopPlay();
}
}));
return s.showDialog=function(i){
o.show({
allowAudio:!0,
allowMusic:!1,
audioDisabled:!1,
onOK:function(e){
return e?void i.onOk({
data:{
share_voice_id:e.file_id+"",
share_voiceinfo:[{
file_id:e.file_id+"",
duration:e.duration,
title:e.title,
play_length:parseInt(e.play_length/1e3),
play_url:"https://res.wx.qq.com/voice/getvoice?mediaid="+e.voice_encode_fileid
}],
title:e.title,
share_page_type:7
}
}):void i.onCancel();
},
onCancel:function(){
i.onCancel();
}
});
},s;
});define("media/video_article.js",["common/wx/media/videoUtils.js","common/wx/media/videoDialog.js","tpl/media/appmsg_edit/video_article_content.html.js","media/base_article.js","biz_common/jquery.validate.js"],function(i){
"use strict";
var e=i("common/wx/media/videoUtils.js"),t=i("common/wx/media/videoDialog.js"),o=i("tpl/media/appmsg_edit/video_article_content.html.js"),n=i("media/base_article.js"),a=i("biz_common/jquery.validate.js"),d=(a.rules,
n.inherit({
init:function(){
this.initTextEditorEnv();
},
initData:function(){
var i=n.prototype.initData.call(this);
i.set("share_page_type",5);
var t=i.get("share_videoinfo");
return t=t[0]||{},t.video_id?(t.title=i.get("title"),t.cover=i.get("cover"),t.duration=e.changeTime(t.play_length),
i.set("share_videoinfo",[t]),i.set("share_video_id",t.video_id)):(i.set("share_videoinfo",[]),
i.set("share_video_id","")),i;
},
handleEditTips:function(){
this._o.$infoContainer.find(".js_edit_tips").show();
},
getEditTipsContent:function(){
return"视频消息封面和标题都与视频素材一致，不支持当前修改。填写推荐语，上限140个字。不支持插入其他素材。";
},
validate:function(i){
var e={
isValid:!0,
viewClass:"",
item:i,
$dom:this._o.$infoContainer,
strict:!1
};
return e=this.validateGuideWords(e),this.handleValidateResult(e);
},
validateStrictly:function(i){
var e={
isValid:!0,
viewClass:"",
item:i,
$dom:this._o.$infoContainer,
strict:!0
};
return e=this.validateGuideWords(e),this.handleValidateResult(e);
},
flush:function(){
this.data,this._o.$infoContainer;
return this.flushField(),this.flushGuidWords(),this.flushCommon(),this;
},
render:function(){
var i=this._o.ueditor;
n.prototype.render.call(this);
this._o.$infoContainer;
this.renderGuidWords(),this._o.$infoContainer.find(".js_plublish_style").hide(),
this.renderSharePreview({
tpl:o
}),i.fireEvent("renderEditorByType",2);
},
previewVideoPlay:function(){
var i=this.data.get("share_video_id");
i&&e.showVideoPreviewDialog({
vid:i,
onClose:function(){}
});
},
replaceMedia:function(){
var i=this;
d.showDialog({
can_use_txvideo:this._o.cgiData.can_use_txvideo,
onCancel:function(){},
onOk:function(e){
var t=e.data;
i.data.set("share_video_id",t.share_video_id),i.data.set("share_videoinfo",t.share_videoinfo),
i.data.set("cdn_url",t.cdn_url),i.data.set("title",t.title),i.isCurrentArticle()&&i.renderSharePreview({
tpl:o
}),i.coverChange({
url:t.cdn_url,
file_id:"",
oriUrl:t.cdn_url,
oriFormat:"",
coverPic:0
}),i.titleChange({
title:t.title
});
}
});
}
}));
return d.showDialog=function(i){
new t({
can_use_txvideo:i.can_use_txvideo,
scene:"ueditor",
onOK:function(e,t){
return t?(i.onOk({
data:{
share_video_id:t.vid,
share_videoinfo:[{
title:t.title,
cover:t.cover,
video_id:t.vid,
duration:t.duration,
play_length:t.play_length
}],
cdn_url:t.cover,
title:t.title.html(!1),
share_page_type:5
}
}),!0):(i.onCancel(),!0);
},
onHide:function(){
i.onCancel();
}
});
},d;
});define("media/share_article.js",["media/common.js","common/wx/media/shareCopyrightDialog.js","tpl/media/appmsg_edit/share_article_content.html.js","media/base_article.js","biz_common/jquery.validate.js"],function(e){
"use strict";
var t=(e("media/common.js"),e("common/wx/media/shareCopyrightDialog.js")),i=e("tpl/media/appmsg_edit/share_article_content.html.js"),r=e("media/base_article.js"),a=e("biz_common/jquery.validate.js"),s=(a.rules,
r.inherit({
init:function(){
this.initTextEditorEnv();
},
initData:function(){
var e=r.prototype.initData.call(this);
e.set("guide_words",e.get("guide_words")||"分享一篇文章。"),e.set("author",""),e.set("file_id",""),
e.set("is_share_copyright",1),e.set("share_page_type",9);
var t=e.get("content").html(!1).replace(/<img[^>]*>/g,"<p>[图片]</p>").replace(/<iframe [^>]*?class=\"res_iframe card_iframe js_editor_card\"[^>]*?data-cardid=\"\"[^>]*?><\/iframe>/gi,"<p>[卡券]</p>").replace(/<mpvoice([^>]*?)js_editor_audio([^>]*?)><\/mpvoice>/g,"<p>[语音]</p>").replace(/<qqmusic([^>]*?)js_editor_qqmusic([^>]*?)><\/qqmusic>/g,"<p>[音乐]</p>").replace(/<mpgongyi([^>]*?)js_editor_gy([^>]*?)><\/mpgongyi>/g,"<p>[公益]</p>").replace(/<mpshop([^>]*?)js_editor_shop([^>]*?)><\/mpshop>/g,"<p>[小店]</p>").replace(/<iframe([^>]*?)class=[\'\"][^\'\"]*video_iframe([^>]*?)><\/iframe>/g,"<p>[视频]</p>").replace(/(<iframe[^>]*?js_editor_vote_card[^<]*?<\/iframe>)/gi,"<p>[投票]</p>").replace(/<mp-weapp([^>]*?)weapp_element([^>]*?)><\/mp-weapp>/g,"<p>[小程序]</p>"),i=document.createElement("div");
return i.innerHTML=t,t=i.innerText.trim().substr(0,140),t=t.split("\n").map(function(e){
return"<p>"+e+"</p>";
}),e.set("content",t.join("")),e;
},
getDigestFromContent:function(){
var e=this.data;
return $.trim(e.get("guide_words").substr(0,120));
},
flush:function(){
{
var e=this.data;
this._o.$infoContainer;
}
return this.flushField(),this.flushGuidWords(),this.setDigest(),e.set("guide_words",e.get("guide_words")||"分享一篇文章。"),
e.set("file_id",""),e.set("author",""),this.flushCommon(),this;
},
validate:function(e){
var t={
isValid:!0,
viewClass:"",
item:e,
$dom:this._o.$infoContainer,
strict:!1
};
return t=this.validateGuideWords(t),this.handleValidateResult(t);
},
validateStrictly:function(e){
var t={
isValid:!0,
viewClass:"",
item:e,
$dom:this._o.$infoContainer,
strict:!0
};
return t=this.validateGuideWords(t),this.handleValidateResult(t);
},
render:function(){
var e=this._o.ueditor;
r.prototype.render.call(this);
this._o.$infoContainer;
this.renderGuidWords(),this.renderSharePreview({
tpl:i
}),e.fireEvent("renderEditorByType",2,function(){
e.fireEvent("setCoverStatus",{
status:!0,
readonly:!0,
tips:"分享图文不可设置封面"
});
});
}
}));
return s.showDialog=function(e){
new t({
onOK:function(t){
e.onOk({
data:{
title:t.title,
author:t.author,
cover:t.cover_url,
cdn_url:t.cover_url,
content:t.content,
copyright_headimg:t.head_img_url,
copyright_nickname:t.nickname,
share_page_type:0===t.pubType?11:9,
share_copyright_url:t.url,
source_reprint_status:t.source_reprint_status,
source_article_type:t.article_type
}
});
},
onCancel:function(){
e.onCancel();
}
});
},s;
});define("media/appmsg_article.js",["media/common.js","media/base_article.js"],function(t){
"use strict";
var e=t("media/common.js"),i=t("media/base_article.js"),r=i.inherit({
init:function(){},
getDigestFromContent:function(){
var t=this.data;
return $.trim(t.get("content").text().html(!1).substr(0,54));
},
setEditorContent:function(){
var t=this;
t._o.ueditor.ready(function(){
var e=t.data.getData(),i=t._o.ueditor;
i.setContent("");
try{
i.setContent(e.content);
}catch(r){
e.content&&""==i.getUeditor().getContent()&&((new Image).src="//mp.weixin.qq.com/mp/jsmonitor?idkey=%s_%s_1&lc=1&log0=editor_setcontent_error;errmsg:%s,uin:%s".sprintf(28308,0,r.message,wx.data.uin),
window.BJ_REPORT&&"function"==typeof window.BJ_REPORT.report&&r&&r.stack&&(r.stack="editor_setcontent_error|"+r.stack,
window.BJ_REPORT.report(r)),r.stack&&console&&console.error&&console.error("[BJ-REPORT]",r.stack));
}
i.setHistory(t.getHistory());
});
},
flush:function(){
{
var t=this.data;
this._o.$infoContainer,this._o.cgiData;
}
return this.flushField(),t.setData(this._o.ueditor.getEditorData(t.getData())),this.setDigest(),
this.flushCommon(),this;
},
getAllImgData:function(){
var t=this._o.ueditor,e=t.fireEvent("getRemoteList"),i=[];
for(var r in e){
var s=e[r];
i.push(s.uid);
}
i=0==i.length?"":","+i.join(",")+",";
for(var o=t.getDocument(),n=o.getElementsByTagName("*"),a=",",d=[],r=0,c=n.length;c>r;r++){
var s=n[r];
if(/img/i.test(s.nodeName)){
var l=s.getAttribute("_src")||s.src||"",u=s.getAttribute("data-remoteid")||"";
if($(s).hasClass("js_catchremoteimageerror"))continue;
if(!l)continue;
if(a.indexOf(","+l+",")>=0)continue;
var h=!1;
i&&u&&i.indexOf(","+u+",")>=0&&(h=!0),a+=l+",",d.push({
url:this.gif2Img(l),
uid:u,
isRemote:h
});
}else{
var m=s.getAttribute("style")||s.style.cssText||"";
if(m=m.match(/;?\s*(background|background-image)\s*\:[^;]*?url\(([^\)]+)\)/),m&&m[2]){
var l=m[2].replace(/^['"]|['"]$/g,""),u=s.getAttribute("data-remoteid")||"";
if($(s).hasClass("js_catchremoteimageerror"))continue;
if(!l)continue;
if(a.indexOf(","+l+",")>=0)continue;
var h=!1;
i&&u&&i.indexOf(","+u+",")>=0&&(h=!0),a+=l+",",d.push({
url:this.gif2Img(l),
uid:u,
isRemote:h
});
}
}
}
return d;
},
gif2Img:function(t){
return/\/0\?(.*&)?wx_fmt=gif/.test(t)?t.replace(/\/0\?/,"/s640?"):t;
},
validateCatchRemoteImage:function(t){
var e=$("<div>").html(t.content),i=e.find(".js_catchremoteimageerror").length;
if(i){
var r=this._o.$infoContainer.find(".js_catch_tips");
return this.showErrMsg(r,"有%s张图片粘贴失败".sprintf(i)),this.scrollIntoView(r,200),!1;
}
return!0;
},
validateTitle:function(t){
var i=t.item,r=t.$dom,s=e.validate({
key:"title",
content:i.title,
strict:t.strict
});
return s&&s.msg&&(this.showErrMsg(r.find(".js_title_error"),s.msg),t.viewClass=t.viewClass||".js_title_error",
t.isValid=!1,2==s.type&&((new Image).src="https://mp.weixin.qq.com/misc/jslog?id=115&content=badjs&level=error")),
t;
},
validateAuthor:function(t){
var e=t.item,i=t.$dom;
return!this.data.get("writerid")&&e.author.len()>16&&(this.showErrMsg(i.find(".js_author_error"),"作者不能超过8个字"),
t.viewClass=t.viewClass||".js_author_error",t.isValid=!1),t;
},
validateEditor:function(t,i){
var r=t.item,s=t.$dom,o=e.validate({
key:"content",
content:r.content,
editor:i,
strict:t.strict
});
return o&&o.msg&&(4==o.errType?t.isValid=!1:(this.showErrMsg(s.find(".js_content_error"),o.msg),
t.viewClass=t.viewClass||".js_content_error",t.isValid=!1)),t;
},
validate:function(t){
if(this.validateCatchRemoteImage(t)===!1)return null;
var e=this._o.$infoContainer,i=this._o.ueditor,r={
isValid:!0,
viewClass:"",
item:t,
$dom:e,
strict:!1
};
return t.title||t.content||t.fileid||(this.showErrMsg(e.find(".js_content_error"),"请先输入一段正文（或者标题），再点击保存按钮。"),
i.getUeditor().focus(),r.viewClass=r.viewClass||".js_content_error",r.isValid=!1),
r=this.validateTitle(r),this.data.get("writerid")||(r=this.validateAuthor(r)),r=this.validateEditor(r,i),
r=this.validateCommon(r),this.handleValidateResult(r);
},
validateStrictly:function(t){
if(this.validateCatchRemoteImage(t)===!1)return null;
var e=this._o.ueditor,i={
isValid:!0,
viewClass:"",
item:t,
$dom:this._o.$infoContainer,
strict:!0
};
return i=this.validateTitle(i),this.data.get("writerid")||(i=this.validateAuthor(i)),
i=this.validateEditor(i,e),i=this.validateStrictlyCommon(i),this.handleValidateResult(i);
},
modifyCurrentEditData:function(t){
i.prototype.modifyCurrentEditData.call(this,t),"undefined"!=typeof t.content&&this._o.ueditor.setContent(t.content);
},
render:function(){
var t=this._o.ueditor;
t.fireEvent("renderEditorByType",1),i.prototype.render.call(this),this.setEditorContent(),
t.getUeditor().focus();
}
});
return r.showDialog=function(t){
t.onOk();
},r;
});define("resp_types/file_cnt.rt.js",[],function(){
"use strict";
return{
file_cnt_R:{
total:"number",
img_cnt:"number",
voice_cnt:"number",
video_cnt:"number",
app_msg_cnt:"number",
commondity_msg_cnt:"number",
video_msg_cnt:"number",
short_video_cnt:"number",
app_msg_sent_cnt:"number"
}
};
});