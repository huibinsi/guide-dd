define("tpl/cardticket/card_preview.html.js",[],function(){
return'<div class="pop_card_preview js_pop_card_preview">\n	<span class="hook hook_right_top js_arrow">\n	<!--\n		箭头位置 \n		hook_right_top      右偏上\n		\n	-->\n		<span class="hook_top"></span>\n		<span class="hook_btm"></span>\n	</span>\n	<div class="card_preview">\n		<div class="client_side">\n			<div class="banner">{convert_type card.type}</div>\n			<div class="wrp">\n				<div class="top" style="background-color: {card.color};border-bottom-color: {card.color};">\n					<div class="logo group">\n						<div class="avartar l"><img src="{http2https card.logo_url}"></div>\n						<p>{card.brand_name}</p>\n					</div>\n					<div class="msg">\n						<div class="main_msg">\n							<p>{card.title}</p>\n							<p class="title_sub">{card.sub_title}</p>\n						</div>\n						<p class="time">有效期 {validtime card \'YYYY-MM-DD\'}</p>\n					</div>\n					<div class="deco"></div>\n				</div>\n				<div class="wrp_content">\n					<div class="wrp_section section_dispose">\n						{if card.code_type==0}\n							<div class="main_msg sn">1513-2290-1878</div>\n						{else if card.code_type==1}\n							<div class="bar_code_panel">\n								<div class="main_msg bar_code"></div>\n								<p class="sn">1513-2290-1878</p>\n							</div>\n						{else if card.code_type==2}\n							<div class="qr_code_panel">\n								<div class="main_msg qr_code"></div>\n								<p class="sn">1513-2290-1878</p>\n							</div>\n						{/if}\n						<p>{card.notice}</p>\n					</div>\n					<div class="wrp_section">\n						<ul class="info_list">\n							<li class="info_li">\n								<p class="info">{convert_type card.type}详情</p>\n								<span class="supply_area"><i class="ic ic_go"></i></span>\n							</li>\n							<li class="info_li">\n								<p class="info">适用门店</p>\n								<span class="supply_area">{card.location_id_list.length}家<i class="ic ic_go"></i></span>\n							</li>\n						</ul>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>';
});define("tpl/cardticket/card_table.html.js",[],function(){
return'<div class="release_method js_card_container send_card">\n	{if loading}\n	<div class="loading"><i class="icon_loading_small white">loading...</i></div>\n	{else}\n	<div class="sub_title_bar group">\n		{if sns_card_type==2}<a href="javascript:void(0);" class="js_add_card_link r btn btn_primary">新建朋友的券 </a>{/if}\n		<!-- <span class="frm_input_box search append">\n			<a href="javascript:void(0);" class="js_search frm_input_append">\n				<i class="icon16_common search_gray">搜索</i>\n				&nbsp;\n			</a>\n			<input type="text" placeholder="请输入卡券名称" class="frm_input js_keyword">\n		</span>  -->\n	</div>\n	<div class="table_wrp release_method_select_table_wrp">\n		<table class="table" cellspacing="0">\n			<thead class="thead">\n				<tr>\n					<th class="table_cell release_method_select_box">&nbsp;</th>\n					{if view_mode==2}\n					<th class="table_cell">商户名</th>\n					{/if}\n					<th class="table_cell release_method_kind"><div class="td_panel">卡券类型</div></th>\n					<th class="table_cell release_method_name"><div class="td_panel"><div class="js_filter_tag">卡券名称</div></div></th>\n					{if !hide_valid_date}\n					<th class="table_cell release_method_time"><div class="td_panel">卡券有效期</div></th>\n					{/if}\n					<th class="table_cell release_method_stock"><div class="td_panel">库存</div></th>\n					{if (payflag==1||payflag==2) && sns_card_type!=2}<th class="table_cell release_method_price"><div class="td_panel">微信价(元)</div></th>{/if}\n					<!-- <th class="table_cell release_method_preview"><div class="td_panel">预览</div></th> -->\n					<th class="table_cell release_method_state"><div class="td_panel">卡券状态</div></th>\n				</tr>\n			</thead>\n			<tbody class="tbody">\n			{if !data.length}\n				<tr>\n					<td class="empty_tips" colspan="6">暂无卡券</td>\n				</tr>\n			{else}\n			{each data as card i}\n            <tr  class="{if hasdata && (i<pageInfo.begin||i>=pageInfo.begin+pageInfo.count)}dn{/if}{if (sns_card_type==2 && !card.is_sns_card) || (sns_card_type==1 && card.is_sns_card) || card.is_sub_merchant_disabled} disabled_item{/if}" id="js_ct_tr_{card.id}">\n					<td class="table_cell release_method_select_box"><div class="td_panel">\n						{if !multi}\n						<label class="frm_radio_label">\n							<i class="icon_radio"></i>\n							<input type="radio" data-id="{card.id}" value="{card.id}" class="frm_radio js_select{if sns_card_type}{if card.is_sns_card} js_select_disabled_1{else} js_select_disabled_2{/if}{/if}">\n						</label>\n						{else}\n						<label class="frm_checkbox_label">\n							<i class="icon_checkbox"></i>\n							<input type="checkbox" data-id="{card.id}" value="{card.id}" class="frm_checkbox js_select{if sns_card_type}{if card.is_sns_card} js_select_disabled_1{else} js_select_disabled_2{/if}{/if}">\n						</label>\n						{/if}\n					</div></td>\n					{if view_mode==2}\n					<td class="table_cell release_method_kind"><div class="td_panel">{card.brand_name}</div></td>\n					{/if}\n					<td class="table_cell release_method_kind"><div class="td_panel">{convert_type card.type}</div></td>\n					<td class="table_cell release_method_name"><div class="td_panel">{card.title}{if card.is_sns_card}<i class="ic_social">共享</i>{/if}{if card.is_intercomm}<i class="icon18 ic_intercomm"></i>{/if}</div></td>\n					{if !hide_valid_date}\n					<td class="table_cell release_method_time"><div class="td_panel">{validtime card \'YYYY-MM-DD\'}</div></td>\n					{/if}\n					<td class="table_cell release_method_stock"><div class="td_panel"><span class="js_sendcard_quantity{if card.quantity==0} text_weak{/if}">{card.quantity}</span>\n						{if editquantity && !card.is_from_intercomm && card.can_edit_quantity}<a class="icon14_common edit_gray js_modify_quantity" href="javascript:;" data-new="{if card.isnew}1{/if}" data-cid="{card.id}" data-x="-161" title="修改库存"></a>{else}<span class="w20"></span>{/if}</div>\n					</td>\n					{if (payflag==1||payflag==2) && sns_card_type!=2}<td class="table_cell release_method_price"><div class="td_panel">{if card.ispay}{card.price}{else}--{/if}</div></td>{/if}\n					<!-- <td class="table_cell release_method_preview"><div class="td_panel"><a data-cid="{card.id}" data-x="-125" class="js_card_preview" href="javascript:void(0);">预览</a></div></td> -->\n					<td class="table_cell release_method_state"><div class="td_panel"><span class="fail pass"><i></i>{convert_state card.status}</span></div></td></td>\n				</tr>\n			{/each}\n			{/if}\n			</tbody>\n		</table>\n		{if !hide_tips}\n			{if tips_wording}\n				<div class="mini_tips l">{=tips_wording}</div>\n			{else if sns_card_type==1}\n				<div class="mini_tips l">只能投放普通券</div>\n			{else if sns_card_type==2}\n				<div class="mini_tips l">\n					{if use_scene==2}\n						只能投放商户的其它可共享优惠券					{else}\n						只能投放可共享优惠券					{/if}\n				</div>\n			{/if}\n		{/if}\n        <div class="js_pager"></div>\n        {if multi}\n        <p class="dialog_bt_tip">已选<span class="js_selectcount">{defaultValues.length||0}</span>个</p>\n        {/if}\n	</div>\n	{/if}\n</div>\n';
});define("cardticket/create_card_select.js",["biz_web/ui/checkbox.js","common/wx/Tips.js","common/wx/popup.js","common/wx/dialog.js","cardticket/select_sub_merchant_table.js","cardticket/common_template_helper.js","tpl/cardticket/choose_card_type.html.js","common/wx/Step.js"],function(e){
"use strict";
function t(e){
return 1==window.view_mode&&(1==c||2==c)||2==window.view_mode&&e&&h.can_category_use_sns_card(e.PrimaryCategoryId,e.SecondaryCategoryId);
}
function i(e,t){
var i=$(e.step2container).html(f({
flag:e.ispay,
is_sns_card:e.is_sns_card,
show_all_card:e.show_all_card,
view_mode:window.view_mode
})),n=$(".frm_tab").height();
$(".js_is_friend_type_1 .js_card_type",i).checkbox({
onChanged:function(e){
t.card_type1=$(e).val();
var s=$(e).attr("data-not_has_condition");
t.has_condition=1==s?!1:!0;
var o=$(".frm_tab .selected",i).index(),_=0-o*n;
$(".tab_items",i).css("top",_);
}
}),$(".js_is_friend_type_2 .js_card_type",i).checkbox({
onChanged:function(e){
t.card_type2=$(e).val();
var i=$(e).attr("data-not_has_condition");
t.has_condition=1==i?!1:!0;
}
}),i.find(".js_is_friend").checkbox({
onChanged:function(e){
$(".js_is_friend_type",i).hide(),$(".js_is_friend_type_"+$(e).val(),i).show(),1==$(e).val()?(t.is_friend=!0,
setTimeout(function(){
n=$(".frm_tab",i).height();
var e=$(".js_is_friend_type_1 .frm_radio_label",i).length;
$(".choose_card_type,.frm_tab_item",i).css("height",n),$(".tab_items",i).css("height",n*e);
})):t.is_friend=!1,$(".js_is_friend_type_"+$(e).val(),i).find(".js_card_type:checked").click(),
t.$popup.popup("resetPosition");
}
}),"undefined"!=typeof c&&_(e,t,i);
}
function n(e,i){
var n=$(m()).popup({
title:"创建优惠券",
autoShow:!1,
width:956,
buttons:[{
text:"取消",
type:"default",
click:function(){
this.hide();
}
},{
text:"下一步",
type:"primary",
click:function(){
var e=i.merchantSelector.selectedValue();
e&&(i.merchant_data=e,o(i));
}
},{
text:"上一步",
type:"default",
click:function(){
s(i);
}
},{
text:"确定",
type:"primary",
click:function(){
return i.is_friend&&"undefined"==typeof c?!0:(i.is_friend&&!t(i.merchant_data)&&(p.show({
msg:'本公众号子商户类目不支持制作朋友的券|<a href="https://mp.weixin.qq.com/cgi-bin/readtemplate?t=cardticket/faq_tmpl&type=info&lang=zh_CN#1dot1" target="_blank">查看朋友的券类目开放范围</a>',
type:"info",
buttons:[{
text:"取消",
click:function(e){
this.remove(e);
},
type:"normal"
},{
text:"配置子商户",
click:function(e){
window.open(wx.url("/merchant/cardhelpmakesend?action=list")),this.remove(e);
},
type:"primary"
}]
}),this.hide()),i.is_friend&&i.card_type1||!i.is_friend&&i.card_type2?(window.open(wx.url("/merchant/electroniccardmgr?action=%s&type=%s&flag=%s&is_sns_card=%s&has_condition=%s%s".sprintf(i.is_friend?"addsnspage":"addpage",i.is_friend?i.card_type1:i.card_type2,1==e.ispay?1:"0",i.is_friend?1:"0",i.has_condition?1:"0",i.merchant_data?"&sub_merchant_id="+i.merchant_data.Id:""))),
void this.hide()):void d.err(i.is_friend?"请选择其他卡券类型":"请选择卡券类型"));
}
}],
onHide:function(){
e.onHide&&e.onHide.call(i),this.remove();
},
className:"align_edge"
});
i.$popup=n,i.step=new l({
container:n.find(".js_step_container"),
names:["1 选择代制的子商户","2 选择券类型"]
}),i.$popup.popup("show");
var _=n.popup("get").find(".js_step_content");
i.opt.step2container=_[1],i.opt.container=$(_[0]).find(".js_sub_merchant_list");
}
function s(e){
var t=e.$popup,i=t.popup("get").find(".js_step_content"),n=t.popup("get").find(".js_btn_p");
$(n[0]).show(),$(n[1]).show(),$(n[2]).hide(),$(n[3]).hide(),e.step.go(1),$(i[0]).show(),
$(i[1]).hide(),t.popup("resetPosition");
}
function o(e){
var t=e.$popup,n=t.popup("get").find(".js_step_content"),s=t.popup("get").find(".js_btn_p");
$(s[0]).hide(),$(s[1]).hide(),$(s[2]).show(),$(s[3]).show(),$(n[0]).hide(),$(n[1]).show(),
e.step.go(2),e.opt.merchant_data=e.merchant_data,i(e.opt,e),t.popup("resetPosition");
}
function _(e,i,n){
$(".js_is_friend_tips",n).hide(),!t(i.merchant_data)&&e.show_all_card?($(n.find(".js_is_friend")[0]).click(),
$(n.find(".js_is_friend")[1]).checkbox().disabled(!0),$(".js_is_friend_view_mode"+(window.view_mode||1)+"_tips",n).show()):($(n.find(".js_is_friend")[1]).checkbox().disabled(!1),
$(n.find(".js_is_friend")[0]).click(),$(".js_is_friend_support_tips",n).show());
}
function a(e){
var t=this;
this.opt=e,n(e,t);
var i=t.$popup.popup("get");
if(1==window.view_mode){
o(t);
var i=t.$popup.popup("get");
i.find(".js_step_container").hide();
var a=i.find(".js_btn_p");
$(a[2]).hide();
}else s(t);
var d={
resetPosition:function(){
t.$popup.popup("resetPosition");
},
getDataComplete:function(e){
var i=t.$popup.popup("get");
e&&e.length?$(i.find(".js_btn_p")[0]).removeClass("btn_disabled"):$(i.find(".js_btn_p")[0]).addClass("btn_disabled");
},
container:e.container,
is_sns_card:!1,
max_card:e.max_card
};
t.merchantSelector=new r(d),"undefined"==typeof c&&h.check_assist_brand_name_type(function(n){
c=n,_(e,t,i);
});
}
var c,d=(e("biz_web/ui/checkbox.js"),e("common/wx/Tips.js")),p=(e("common/wx/popup.js"),
e("common/wx/dialog.js")),r=e("cardticket/select_sub_merchant_table.js"),h=e("cardticket/common_template_helper.js"),f=template.compile(e("tpl/cardticket/choose_card_type.html.js")),m=template.compile('<div>			<div class="wrp_processor js_step_container"></div>			<div class="first_step js_step_content js_step1">				<div class="js_sub_merchant_list select_subshop"></div>			</div>			<div class="second_step js_step_content js_step2"></div>			</div>'),l=e("common/wx/Step.js");
return window.view_mode||(window.view_mode=1),a;
});define("cardticket/common_template_helper.js",["common/wx/upload.js","common/wx/Cgi.js","biz_common/moment.js","cardticket/add/msg_operate_type_html.js"],function(e){
"use strict";
function t(e){
for(var t,r,n,a,i=[],_=0;_<e.length;_++){
var s=e[_];
"object"==typeof s&&(s=d[s.type]),a=h[s],s?_==e.length-1?n&&s-n!=1?(i.push(t+(r?"至"+r:"")),
i.push(a)):i.push(t?t+"至"+a:a):n&&s-n!=1?(i.push(t+(r?"至"+r:"")),t=a,r="",n=s):(t?r=a:t=a,
n=s):(s=8,_==e.length-1&&t&&i.push(t+"至"+r),i.push(a),t=r=n="");
}
return i.join("、");
}
function r(e){
return e.replace(/\r\n|\\n|\n/g,"<br/>");
}
function n(e){
var t="YYYY-MM-DD HH:mm:ss",r=l(e,t);
return r?r.format("YYYY-MM-DD"):"";
}
function a(e){
return 1==e||3==e||2==e;
}
function i(e,t){
return 1==e&&119>=t?!0:(2!=e||215!=t&&210!=t&&208!=t&&207!=t&&206!=t&&204!=t&&203!=t&&211!=t&&201!=t&&202!=t)&&(3!=e||308!=t&&309!=t&&306!=t&&305!=t&&304!=t&&303!=t&&314!=t&&316!=t&&317!=t)&&(6!=e||601!=t&&602!=t&&603!=t)?4==e&&402==t?!0:7==e&&701==t?!0:(5!=e||501!=t&&502!=t&&503!=t)&&(8!=e||812!=t&&811!=t&&808!=t&&817!=t&&818!=t&&827!=t&&804!=t&&803!=t&&802!=t&&801!=t&&824!=t&&822!=t&&823!=t&&821!=t&&828!=t&&814!=t&&825!=t&&826!=t&&809!=t&&807!=t&&816!=t&&819!=t&&813!=t)?!1:!0:!0;
}
function _(e){
for(var t=0;t<M.length;t++){
var r=M[t];
"function"!=typeof r&&(r=$.noop),r(e);
}
M=[];
}
function s(e){
return M.push(e),"undefined"!=typeof I?(_(I),!0):U?!1:(U=!0,u.get({
url:"/merchant/cardhelpmakesend",
data:{
action:"list",
begin:0,
count:9999999,
status_list:1
},
complete:function(){
U=!1;
}
},function(e){
if(0==e.base_resp.ret||-1==e.base_resp.ret){
for(var t=$.parseJSON(e.bind_list),r=t.List,n=!1,a=!1,s=0;s<r.length;s++){
var p=r[s];
if(i(p.PrimaryCategoryId,p.SecondaryCategoryId)){
a=!0;
break;
}
}
e.attr&&e.attr.merchant_info&&(n=i(e.attr.merchant_info.primary_category_id,e.attr.merchant_info.secondary_category_id)),
n&&a&&(I=1),n&&!a&&(I=2),!n&&a&&(I=3),n||a||(I=4),4==I&&e.is_can_use_sns_card&&!e.is_can_use_help_make_and_send&&(I=5),
_(I);
}
}),!1);
}
function p(e,t){
var r=!1;
e.create_time&&e.create_time<1463648400&&(r=!0),"undefined"==typeof t&&(t=!0);
var n="",a=!1;
return 4==e.type||2==e.type?(t&&e.reduce_cost&&(n="价值%s元代金券一张".sprintf(e.reduce_cost)),
r?n:(e.use_condition_least_cost?(n&&(n+="，"),n+="消费满%s元可用".sprintf(e.use_condition_least_cost)):4!=e.type||"1"!=e.is_sns_card&&e.is_sns_card!==!0||(n&&(n+="；"),
n+="无最低消费限制"),e.accept_category&&(n&&(n+="；"),n+="适用于%s".sprintf(e.accept_category),
a=!0),e.reject_category&&(n&&(n+="；"),n+="不适用于%s".sprintf(e.reject_category),a=!0),
"1"!=e.is_sns_card&&e.is_sns_card!==!0||4!=e.type||a||(n&&(n+="；"),n+="全场通用，不限品类"),
!(4!=e.type||"1"!=e.is_sns_card&&e.is_sns_card!==!0||e.has_condition||"0"!=e.uncheckcount&&!e.id),
n)):3==e.type?(t&&(e.title||e.gift_title)&&(n="%s%s%s%s".sprintf("1"==e.is_sns_card||e.is_sns_card===!0?"兑换":"",e.gift_title||e.title,e.gift_num||"",e.gift_unit||"")),
r?n:(2==e.use_condition_least_cost_type&&e.object_use_for&&(n&&(n+="；"),n+="购买%s可用".sprintf(e.object_use_for),
a=!0),1==e.use_condition_least_cost_type&&e.use_condition_least_cost&&(n&&(n+="，"),
n+="消费满%s元可用".sprintf(e.use_condition_least_cost),a=!0),"1"!=e.is_sns_card&&e.is_sns_card!==!0||a||(n&&(n+="；"),
n+="无最低消费限制"),n)):void 0;
}
function o(e){
if(!e.begin_time||!e.end_time)return"";
var t="YYYY.MM.DD";
return l.unix(e.begin_time).format(t)+"-"+l.unix(e.end_time).format(t);
}
var c=e("common/wx/upload.js"),u=e("common/wx/Cgi.js"),l=e("biz_common/moment.js"),m={
10:"会员卡",
21:"门票",
22:"电影票",
4:"代金券",
1:"团购券",
2:"折扣券",
3:"兑换券",
0:"优惠券"
},f={
1:"审核中",
2:"未通过",
3:"待投放",
4:"已删除",
5:"待投放",
6:"已投放",
8:"已过期",
7:"违规下架"
},d={
MONDAY:"1",
TUESDAY:"2",
WEDNESDAY:"3",
THURSDAY:"4",
FRIDAY:"5",
SATURDAY:"6",
SUNDAY:"7"
};
template.helper("$has_day",function(e,t){
if(!e)return"";
for(var r=0;r<e.length;r++){
var n=d[e[r].type];
if(n||(n=8),n==t)return"checked";
}
return"";
});
var h={
1:"周一",
2:"周二",
3:"周三",
4:"周四",
5:"周五",
6:"周六",
7:"周日",
8:"节假日"
};
template.helper("convert_time_limit",function(e){
return t(e);
});
var v={
1:"免费WIFI",
2:"可带宠物",
4:"免费停车",
8:"可外卖"
};
template.helper("convert_business_service",function(e){
if(!e)return"无";
var t=[];
for(var r in v){
var n=parseInt(r);
(e&n)>0&&t.push(v[r]);
}
return t.join("&nbsp;&nbsp;");
});
var l=e("biz_common/moment.js");
template.helper("convert_state",function(e){
return f[e]||e;
}),template.helper("convert_type",function(e){
return m[e]||e;
}),template.helper("card_type_map",function(e){
return e;
}),template.helper("unixFormat",function(e,t){
return t&&(t=t.replace(","," ")),l.unix(e).format(t);
}),template.helper("validtime",function(e,t){
if(1==e.time_type){
var r=l.unix(e.begin_time).format(t)+"至"+l.unix(e.end_time).format(t);
return e.end_time<l().unix()&&(r+="(已过期)"),r;
}
return 2==e.time_type?0==e.from_day?"领取后当天生效%s天有效".sprintf(e.fixed_term):"领取后%s天生效%s天有效".sprintf(e.from_day,e.fixed_term):"";
}),template.helper("addtoken",function(e){
return wx.url(e);
}),template.helper("nl2br",function(e){
return r(e.html(!0));
});
var g={
1:"50万以下",
2:"50-100万",
3:"100-500万",
4:"500-1000万",
5:"1000万以上"
};
template.helper("convert_business_volume_type",function(e){
return g[e]||e;
});
var y={
0:"已提交",
2:"已提交",
3:"生效",
4:"不通过"
};
template.helper("convert_store_state",function(e){
return y[e]||e;
}),template.helper("$preview",function(e){
if(!e)return"无";
var t;
return 0===e.indexOf("temp_")?(e=e.replace(/^temp_/,""),t=c.tmpFileUrl(e)):t=c.multimediaFileUrl(e),
"<a href='%s' target='_blank'><img src='%s' /></a>".sprintf(t,t);
}),template.helper("$upload_preview",function(e){
if(!e)return"";
var t;
return 0===e.indexOf("temp_")?(e=e.replace(/^temp_/,""),t=c.tmpFileUrl(e)):t=c.multimediaFileUrl(e),
"<img src='%s' style='width:260px;' />".sprintf(t);
}),template.helper("$preview_stuffs",function(e){
for(var t=[],r=e.stuffs,n=0;n<r.length;n++){
var a=r[n]+"_preview_tpl";
$("#"+a).length&&t.push(template.render(a,e));
}
return t.join("");
});
var x={
2:"女",
1:"男"
};
template.helper("convert_gender",function(e){
return x[e]||"未知";
}),template.helper("percentage",function(e,t,r,n){
var r=e/t*100;
return n&&r>n&&(r=n),r.toFixed(2);
});
var b={
"":"全部",
0:"API渠道",
1:"嵌入图文消息",
2:"直接群发卡券",
3:"下载二维码"
};
template.helper("convert_channel",function(e){
return b[e]||e;
}),template.helper("convert_provide_time",n),template.helper("http2https",function(e){
return e?(e+"").http2https():"";
}),template.helper("https2http",function(e){
return e?(e+"").https2http():"";
}),template.helper("codepad",function(e){
var t=new RegExp("([^s]{4})(?=([^s])+$)","ig");
return e.replace(t,"$1-");
}),template.helper("yuan",function(e){
if(!e)return"--";
var e=e/100;
return e.toFixed(2);
}),template.helper("is_paycard",function(){
return window.wx_is_paycard;
});
var w={
0:"等待接收",
1:"已接收",
3:"过期退回",
2:"已拒绝"
},j={
0:"等待接收",
2:"已拒绝",
1:"已接收",
3:"过期退回"
};
template.helper("convert_intercard_status",function(e){
return w[e]||e;
}),template.helper("convert_intercard_rec_status",function(e){
return j[e]||e;
});
var Y={
0:"无",
1:"图文消息",
2:"卡券货架",
3:"小店货架",
4:"网页链接",
5:"卡券"
};
template.helper("convert_msg_operate_type",function(e){
return Y[e]||"无";
});
var k=e("cardticket/add/msg_operate_type_html.js"),u=e("common/wx/Cgi.js");
template.helper("msg_operate_content",function(e){
return 5===e._type?"":e._notexist?"无":template.compile(k[e._type])({
msg_operation:e
})||"";
});
var D={
CHECKING:"审核中",
APPROVED:"已通过",
REJECTED:"未通过",
EXPIRED:"已过期"
};
template.helper("convert_sub_merchant_status",function(e){
return D[e]||e;
}),template.helper("$is_can_use_help_make_and_send",function(){
return 1==window.wx_is_can_use_help_make_and_send;
}),template.helper("wx_url",function(e){
return wx.url(e);
});
var A={
".*?_4":"激活"
};
template.helper("convert_use_source",function(e,t){
var r=e+"_"+t;
return 4==t?"激活":1==t||6==t||7==t?"自助买单":5==t?"自助核销":2==t?"收款":3==e?"手机核销":1==e?"网页核销":2==e?"API核销":3==t?"积分变更":A[r]||"";
}),template.helper("convert_fee_coin",function(e,t){
return 0==t?"--":a(e)?'<span class="number_add">+%s</span>'.sprintf(t/100):'<span class="number_degress">-%s</span>'.sprintf(t/100);
});
var E={
1:"平台赠送",
2:"充值",
3:"退还券点",
4:"支出",
5:"平台扣减"
};
template.helper("convert_fee_order_type",function(e){
return E[e]||e;
});
var F={
2:{
1:"等待确认",
2:"充值成功",
3:"充值成功",
8:"充值成功"
},
3:"已退券点",
4:{
1:"等待确认",
3:"库存发放中",
4:"库存已发放",
7:"库存添加失败, 已返还券点",
6:"库存已发放",
5:"库存已发放"
}
};
template.helper("convert_fee_order_status",function(e,t){
var r=F[t];
return r?"string"==typeof r?r:r[e]||e:e;
}),template.helper("addhttp",function(e){
return/^http:\/\//.test(e)?e:"http://"+e;
});
var I,C=[],U=!1,M=[];
template.helper("$fix_abstract4friendcard",function(e,t){
return p(e,t);
}),template.helper("$gen_use_time",function(e){
return o(e);
});
var R={
0:"生效",
1:"已使用",
2:"过期",
3:"转赠中",
4:"已转赠",
5:"转赠过期",
6:"已删除"
};
template.helper("convert_user_card_state",function(e){
return R[e]||e;
});
var S={
0:"审核通过",
1:"待商户审核",
2:"审核不通过",
3:"待激活",
4:"请添加库存"
};
return template.helper("convert_swipe_card_status",function(e){
return S[e]||e;
}),{
type_map:m,
status_map:f,
store_status:y,
gender_map:x,
source_map:b,
convert_provide_time:n,
nl2br:r,
sub_merchant_status_map:D,
fix_money:function(e){
var t=/(\.\d{2}).+$/,r=e;
return r=parseFloat((r+"").replace(t,"$1"));
},
parse_assistsend_quota:function(e,t){
for(var r=0,n=0,a=0;a<e.length;a++){
var i=e[a];
i.quota_name==(t||"merchant_auth_create_card")&&(r=i.value),i.quota_name==(t?t+"_max_sku":"merchant_auth_create_card_max_sku")&&(n=i.value);
}
return{
max_card:r,
max_sku:n
};
},
check_friend_card_word:function(e,t){
if(!e)return!0;
for(var r=0;r<C.length;r++)if(e.indexOf(C[r])>=0)return t?t():!0;
return!0;
},
check_assist_brand_name_type:s,
can_category_use_sns_card:i,
fix_abstract4friendcard:p,
strlen:function(e){
for(var t=0,r=0;r<e.length;r++){
var n=e.charCodeAt(r);
128>n?t++:t+=2;
}
return t;
},
gen_use_time:o,
gen_time_limit:t
};
});define("cardticket/store_cgi.js",["common/wx/Cgi.js","common/wx/Tips.js","common/wx/tooltips.js","common/wx/tooltipsManager.js","common/wx/dialog.js"],function(t){
"use strict";
var e=t("common/wx/Cgi.js"),s=t("common/wx/Tips.js"),o=t("common/wx/tooltips.js"),c=t("common/wx/tooltipsManager.js"),n=(t("common/wx/dialog.js"),
{
deleteStore:function(t){
e.post({
url:"/merchant/entityshop?action=delete",
data:{
id:t.store_id
},
btn:t.btn
},function(o){
0==o.base_resp.ret?(s.suc("删除门店成功"),t.success&&t.success()):e.show(o);
});
},
deleteWithConfirm:function(t){
if(3==t.state||4==t.state){
var e=new o({
container:t.container,
content:"删除将影响在用此门店的卡券功能、微信连Wi-Fi、摇一摇周边、LBS广告等相关业务。<br />你确定要删除吗？",
type:"click",
buttons:[{
text:"确定",
type:"btn_primary",
click:function(){
if(t.success){
var e=t.success;
t.success=function(){
e&&e(),c.removeAll();
};
}
n.deleteStore(t);
}
},{
text:"取消",
type:"btn_default",
click:function(){
c.removeAll();
}
}]
});
e.show(),c.removeAll(),c.add(e);
}
},
listStore:function(t){
var s=$.extend({},{
action:"list",
begin:0,
count:9999999,
keyword:t.keyword,
task_id:t.task_id,
audit_state:t.audit_state||3
},t.getDataExtra);
e.get({
url:"/merchant/entityshop",
data:s
},function(s){
var o,c=s?1*s.base_resp.ret:-1;
if(0===c){
var n=$.parseJSON(s.data);
o={
shop_list:n.store_location,
total_num:s.total_count,
is_from_wxapoi:"true"===s.is_from_wxapoi
};
}else{
if(-7!==c&&200007!==c)return void e.show(s);
o={
shop_list:[],
total_num:0,
access_deny:!0
};
}
t.success&&t.success(o),wx.cgiData&&!wx.cgiData._store_data&&(wx.cgiData._store_data=o);
});
},
canSendCard:function(t){
t.success&&t.success(!0);
}
});
return n;
});define("tpl/media/preview/layout.html.js",[],function(){
return'<div class="wx_phone_preview_wrp jsPhoneView">\n    <div class="wx_phone_preview">\n        <span class="btn btn_default btn_phone_preview_closed jsPhoneViewClose">关闭</span>\n        <div class="wx_phone jsPhoneViewMain">\n            {=content} \n        </div>\n        <!--jsPhoneViewMain-->\n        {if plugin}<div class="wx_view_container jsPhoneViewPlugin">{=plugin}</div>\n        {else}<div class="wx_view_container jsPhoneViewPlugin dn">{=plugin}</div>\n        {/if}\n    </div>\n    <div class="mask"></div>\n</div>\n';
});define("tpl/top.html.js",[],function(){
return'<div class="weui-desktop-tab weui-desktop-tab_title">\n  <ul class="weui-desktop-tab__navs" data-index="{itemIndex=0}">\n    {each data as o index}\n    {if (typeof o.acl == "undefined" || o.acl == 1)}\n    <li data-index="{itemIndex++}" class="weui-desktop-tab__nav {if (itemIndex == 1)}first{/if} js_top {o.className}" data-id="{o.id}"><a title="{o.name}" href="{o.url}" {if o.target==\'_blank\'}target="_blank"{/if}>{o.name}</a></li>\n    {/if}\n    {/each}\n  </ul>\n</div>\n';
});define("tpl/media/appmsg_edit/image_article_content.html.js",[],function(){
return'<div class="preview_media_context">\n  {each share_imageinfo as d}\n  <div class="preview_img_context">\n    {if d.cdn_url}\n    <img class="preview_img" src="{d.cdn_url}" alt="">\n    {else}\n    <img class="preview_img" src="http://shp.qpic.cn/qqvideo/0/m0564d1uhq6/400" alt="">\n    {/if}\n    <button class="js_replace_media preview_media_replace_btn">\n      <svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"><path d="M4.05 11H16a1 1 0 0 0 0-2H4.015l-.017-.988a.5.5 0 0 0-.811-.383L.565 9.711a.5.5 0 0 0 .014.793l2.693 1.989a.5.5 0 0 0 .797-.411L4.049 11zm9.02-9H2a1 1 0 1 0 0 2h11.035l-.017 1.002a.5.5 0 0 0 .794.413l2.684-1.953a.5.5 0 0 0 .014-.798L13.895.618a.5.5 0 0 0-.808.386L13.07 2z"/></svg>\n      替换素材    </button>\n  </div>\n  {/each}\n</div>';
});define("tpl/media/appmsg_edit/voice_article_content.html.js",[],function(){
return'{each share_voiceinfo as d}\n<div class="preview_media_context">\n  <div class="preview_audio_context">\n    <div class="preview_audio_hd">\n      <em class="preview_audio_player">这是一个语音</em>\n    </div>\n    <div class="preview_audio_bd">\n      <strong class="preview_audio_title">{d.title}</strong>\n      <p class="preview_audio_desc">{d.duration}</p>\n    </div>\n    <button class="js_replace_media preview_media_replace_btn">\n      <svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"><path d="M4.05 11H16a1 1 0 0 0 0-2H4.015l-.017-.988a.5.5 0 0 0-.811-.383L.565 9.711a.5.5 0 0 0 .014.793l2.693 1.989a.5.5 0 0 0 .797-.411L4.049 11zm9.02-9H2a1 1 0 1 0 0 2h11.035l-.017 1.002a.5.5 0 0 0 .794.413l2.684-1.953a.5.5 0 0 0 .014-.798L13.895.618a.5.5 0 0 0-.808.386L13.07 2z"/></svg>\n      替换素材    </button>\n  </div>\n</div>\n{/each}\n';
});define("tpl/media/appmsg_edit/video_article_content.html.js",[],function(){
return'{each share_videoinfo as d}\n<div class="preview_media_context">\n  <div class="preview_video_context">\n    <div class="js_preview_hd preview_video_hd" style="background-image: url(\'{d.cover}\');">\n      <i class="js_preview_video_play preview_video_length">{d.duration}</i>\n    </div>\n    <div class="preview_video_ft">\n      <strong class="preview_video_title">{d.title}</strong>\n    </div>\n    <button class="js_replace_media preview_media_replace_btn">\n      <svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"><path d="M4.05 11H16a1 1 0 0 0 0-2H4.015l-.017-.988a\n        .5.5 0 0 0-.811-.383L.565 9.711a.5.5 0 0 0 .014.793l2.693 1.989a.5.5 0 0 0 .797-.411L4.049 11zm9.02-9H2a1 1 0 1 0 0 2h11.035l-.017 1.002a.5.5 0\n        0 0 .794.413l2.684-1.953a.5.5 0 0 0 .014-.798L13.895.618a.5.5 0 0 0-.808.386L13.07 2z"/></svg> \n      替换素材    </button>\n  </div>\n</div>\n{/each}\n';
});define("tpl/media/appmsg_edit/share_article_content.html.js",[],function(){
return'<div class="share_media">\n    <div class="original_panel" lang="en">\n        <div class="flex_context original_account">\n            <div class="js_head_img flex_hd">\n                <span class="radius_avatar original_account_avatar">\n                    <img class="account_avatar" src="{copyright_headimg}" alt="{copyright_nickname}">\n                </span>\n            </div>\n            <div class="flex_bd">\n                <div class="original_account_nickname">{copyright_nickname}</div>\n            </div>\n        </div>\n        <div class="original_panel_title">{title}</div>\n        <div class="original_panel_content">{=content}</div>\n        <div class="original_panel_tool">\n            <a target="_blank" href="{share_copyright_url}">阅读全文</a>\n        </div>\n    </div>\n</div>';
});define("media/base_article.js",["tpl/author/authority_warn.html.js","common/wx/mpEditor/utils.js","author/author_popover.js","media/common.js","biz_common/jquery.validate.js","common/wx/Tips.js","common/wx/mpEditor/plugin/remoteimg.js","common/wx/mpEditor/common/base_class.js","media/article_data_key.js","common/wx/mpEditor/text_editor.js","tpl/media/appmsg_edit/article_list_item.html.js"],function(t){
"use strict";
var e=t("tpl/author/authority_warn.html.js"),i=t("common/wx/mpEditor/utils.js"),r=t("author/author_popover.js"),a=(t("media/common.js"),
t("biz_common/jquery.validate.js")),s=(t("common/wx/Tips.js"),t("common/wx/mpEditor/plugin/remoteimg.js")),n=a.rules,o=t("common/wx/mpEditor/common/base_class.js"),d=t("media/article_data_key.js"),_=t("common/wx/mpEditor/text_editor.js"),h=t("tpl/media/appmsg_edit/article_list_item.html.js"),c=["一","二","三","四","五","六","七","八","九","十"],l={
submitKey:d.getSubmitKey()
},u=o.inherit({
init:function(t){
this._o={
isNew:!0,
app_id:"",
$infoContainer:null,
$articleList:null,
data:null,
index:0,
ueditor:null,
$freeUEditor:null,
$navigator:null,
cgiData:null,
defaultGuideWordlimit:140,
guideWordlimit:140
},this._o=this.extend(this._o,t),this.editor=this._o.ueditor,this.domUtils=this.editor.getDomUtils(),
this.initG(),this.data=this.initData(),this.renderArticleItem();
},
initTextEditorEnv:function(){
_.initEnv({
$dom:$("#guide_words_main"),
wordlimit:this._o.defaultGuideWordlimit
});
},
setTextEditorWordlimit:function(t){
if("number"==typeof t){
this._o.guideWordlimit=t;
var e=_.getEditor(this._o.ueditor,this._o.formItemsOpt);
e&&e.setWordlimit(t);
}
},
initG:function(){
this._g={
undoHistory:null,
$item:null,
isAutoDigest:!0,
scrollTop:this._o.$navigator.offset().top,
maxDigest:120
};
},
initData:function(){
var t=this._o.data,e=this._o.index,i=this._o.cgiData,r=d.getLocalKey(e);
for(var a in t)t.hasOwnProperty(a)&&"undefined"!=typeof r[a]&&(r[a]="[object Number]"===Object.prototype.toString.call(r[a])?1*t[a]:"[object String]"===Object.prototype.toString.call(r[a])?t[a]?t[a]+"":"":t[a]);
return r.file_id=1*r.file_id===0?"":r.file_id+"",r.writerid||(r.authority=0,r.author_status=1),
r.can_reward=1*i.can_use_reward?r.can_reward:0,i&&0==i.can_use_comment&&(r.need_open_comment=0),
0==r.need_open_comment&&(r.only_fans_can_comment=0),r.title_tips="第%s篇图文".sprintf(c[e]),
r.cdn_url_back||(r.cdn_url_back=r.cdn_url),r.cdn_url?r.cover=r.cdn_url=r.cdn_url.nogif():r.file_id&&(i&&i.appmsg_data.multi_item&&$.each(i.appmsg_data.multi_item,function(t,e){
e.file_id==r.file_id&&(r.cover=e.cover);
}),r.cover||(r.cover=wx.url("/cgi-bin/getimgdata?mode=large&source=file&fileId=%s".sprintf(r.file_id)))),
r.source_url_checked=r.source_url?1:0,r=this._o.ueditor.initPluginData(r),{
set:function(t,e){
"undefined"!=typeof r[t]&&(r[t]=e);
},
get:function(t){
return r[t];
},
getData:function(){
return r;
},
setData:function(t){
r=t;
}
};
},
renderArticleItem:function(){
var t=$.parseHTML(wx.T(h,this.data.getData()))[0],e=$(t).appendTo(this._o.$articleList);
this._g.$item=e,e.data("article",this),this.changeMoveBtnCss();
},
getListItem:function(){
return this._g.$item;
},
getDigestFromContent:function(){
return"";
},
setAutoDigest:function(t){
this.data.set("auto_gen_digest",t?1:0);
},
setDigest:function(){
var t=this.data,e=$.trim(t.get("digest"));
this.data.get("auto_gen_digest")?t.set("digest",this.getDigestFromContent()):t.set("digest",e);
},
updateIndex:function(t){
this.data.set("seq",t),this.data.set("msg_index",t),this.data.set("isFirst",0==t),
this.data.set("title_tips","第%s篇图文".sprintf(c[t])),this.changeCoverPreviewCss(),
this.changeArticleItemCss();
},
changeArticleItemCss:function(){
this.data.get("isFirst")?this._g.$item.removeClass("sub_card_media"):this._g.$item.addClass("sub_card_media"),
this.data.get("cover")?this._g.$item.addClass("has_thumb"):this._g.$item.removeClass("has_thumb"),
this.changeMoveBtnCss();
},
changeMoveBtnCss:function(){
var t=this._g.$item.find(".js_down"),e=this._g.$item.find(".js_up"),i=this._g.$item.find(".js_del");
this.data.get("isFirst")?(e.hide(),t.show(),i.hide()):(e.show(),t.show(),i.show()),
this._g.$item.is(":last-child")&&t.hide();
},
getIndex:function(){
return 1*this.data.get("seq");
},
showErrMsg:function(t,e){
this._o.ueditor.fireEvent("showErrMsg",t,e);
},
scrollIntoView:function(t,e){
this._o.ueditor.fireEvent("scrollIntoView",t,e);
},
hideAllErrMsg:function(){
this.hideErrorTips(),this._o.ueditor.fireEvent("hideAllErrMsg");
},
setHistory:function(t){
this._g.undoHistory=t;
},
getHistory:function(){
return this._g.undoHistory;
},
renderOriginal:function(){
var t=this,e=t.data.getData(),i=t._o.$infoContainer,r=$("#js_original");
if(r.find(".js_original_type").hide().eq(1==e.copyright_type||2==e.copyright_type?1:0).show(),
this.renderReward(),1==e.copyright_type||2==e.copyright_type){
if(r.find(".js_original_content").show(),r.find(".js_original_publish").val(e.releasefirst),
r.find(".js_reprint_frm").val(e.reprint_permit_type),r.find(".js_url").text(e.source_url).closest("li")[e.source_url?"show":"hide"](),
r.find(".js_author").text(e.author),r.find(".js_platform").text(+e.releasefirst?"微信公众平台":e.platform),
r.find(".js_can_reprint").text(e.allow_reprint?"开启":"关闭"),r.find(".js_classify").text(e.original_article_type||e.source_article_type),
"object"!=typeof e.ori_white_list)try{
e.ori_white_list=$.parseJSON(e.ori_white_list.html(!1)).white_list;
}catch(a){
e.ori_white_list=[];
}
$.each(e.ori_white_list,function(t,e){
e.title=[],1*e.can_modify&&e.title.push("可修改文章"),1*e.can_hide_source&&e.title.push("可不显示转载来源"),
e.title=e.title.join("，");
});
var s=template.render("tpl_whitelist",{
list:e.ori_white_list
});
r.find(".js_whitelist").html(s);
}else r.find(".js_original_content").hide(),r.find(".js_whitelist").html(""),i.find(".js_author").closest(".appmsg_edit_item").eq(0).show();
},
handlePay:function(){},
renderPay:function(){},
renderAd:function(){
var t=this,e=t.data.getData(),i=t._o.$infoContainer;
if(e.ad_info&&e.ad_info.ad_id){
$("#js_editor_insertad").addClass("disabled"),i.find(".js_ad_preview").empty(),i.find(".js_ad_preview").parent().show(),
e.ad_info.video_info&&(e.ad_info.ad_img=e.ad_info.video_info.thumbUrl);
var r=template.render("js_ad_preview_tpl",{
ad_id:e.ad_info.ad_id,
ad_img:e.ad_info.ad_img,
img:e.ad_info.img,
nick_name:e.ad_info.nick_name,
pt:e.ad_info.pt
});
i.find(".js_ad_preview").html(r),i.find(".js_tag").text(0==e.ad_info.trade_mode?"广告推荐":"内容定制");
}else $("#js_editor_insertad").removeClass("disabled"),i.find(".js_ad_preview").empty(),
i.find(".js_ad_preview").parent().hide();
},
hideErrorTips:function(){
var t=this._o.$infoContainer;
t.find(".js_reward_error,.js_title_error,.js_author_error,.js_desc_error,.js_tip_mask_msg,.js_cover_error,.js_url_error,.js_content_error,.js_platform_error,.js_ad_error_tips").hide(),
t.find(".js_tip_mask").removeClass("error_mask");
},
flushGuidWords:function(){
var t=_.getEditor(this._o.ueditor,this._o.formItemsOpt),e=t.getContent();
this.data.set("guide_words",e||"");
},
flushPay:function(){},
flushField:function(){
var t=this.data,e=this._o.$infoContainer;
e.find(".js_field").each(function(){
var e=$(this),i=e.attr("name"),r=e.attr("type");
"checkbox"==r?t.set(i,e.checkbox("value")?1:0):"checkbox"==e.data("type")?t.set(i,1*e.val()?1:0):"guide_words"==i?t.set(i,e.val()):t.set(i,$.trim(e.val()));
});
},
flushCommon:function(){
var t=this.data,e=this._o.$infoContainer,i=this._o.cgiData;
e.find('.js_desc[name="digest"]').val(t.get("digest")),t.set("source_url",t.get("source_url_checked")?t.get("source_url"):"");
var r=t.get("source_url");
r&&!/:\/\//.test(r)&&t.set("source_url","http://"+r);
var a=e.find("#js_original");
if(1==t.get("copyright_type")||2==t.get("copyright_type")){
t.set("releasefirst",a.find(".js_original_publish").val()),t.set("author",a.find(".js_author").text()),
t.set("platform",+t.get("releasefirst")?"":a.find(".js_platform").text()),t.set("reprint_permit_type",a.find(".js_reprint_frm").val()),
t.set("original_article_type",a.find(".js_classify").text()),t.set("allow_reprint",Number("开启"===a.find(".js_can_reprint").text())),
t.set("allow_reprint_modify",Number("开启"===a.find(".js_can_modify").text()));
var s=[];
a.find(".js_whitelist .js_whitelist_item").each(function(){
var t=$(this);
s.push({
nickname:t.attr("data-nickname"),
title:t.attr("title"),
openid:t.attr("data-openid"),
wx_name:t.attr("data-wx_name"),
username:t.attr("data-username"),
avatar:t.attr("data-avatar"),
can_modify:t.attr("data-can_modify"),
can_hide_source:t.attr("data-can_hide_source"),
can_reward:t.attr("data-can_reward")
});
}),t.set("ori_white_list",JSON.stringify2({
white_list:s
}));
}
var n=$(".js_ad_msg");
if(t.set("ad_info",{
ad_id:n.data("ad_id")||"",
ad_img:n.data("ad_img")||"",
img:n.data("img")||"",
nick_name:n.data("nick_name")||"",
pt:n.data("pt")||"",
trade_mode:n.data("trade_mode")||""
}),0==t.get("need_open_comment")?t.set("only_fans_can_comment",0):t.set("only_fans_can_comment",1*$(".js_comment_setting:checked").val()||0),
1==i.can_use_hyperlink){
var o=t.get("content").match(/<a([^>]*)>(.*?)<\/a>/g);
o&&t.set("link_count",o.length);
}
var d=t.get("cdn_url"),_=t.get("file_id");
if(d)d=d.nogif(),t.set("cdn_url",d),t.set("cover",d);else if(_){
var h,i=this._o.cgiData;
i&&i.appmsg_data&&i.appmsg_data.multi_item&&$.each(i.appmsg_data.multi_item,function(t,e){
e.file_id==_&&(h=e.cover);
}),h||(h=wx.url("/cgi-bin/getimgdata?mode=large&source=file&fileId=%s".sprintf(_))),
t.set("cover",h);
}else t.set("cover","");
t.set("isFirst",0==this.getListItem().index()),this.setScrollTop(),this.setHistory(this._o.ueditor.getHistory());
},
setScrollTop:function(){
this._g.scrollTop=Math.max($(window).scrollTop(),this._o.$navigator.offset().top);
},
getScrollTop:function(){
return this._g.scrollTop;
},
flush:function(){
return this;
},
getData:function(t,e){
var i=this,r=i.data.getData(),a={},s=l.submitKey;
$.each(s,function(t,e){
switch(e){
case"fileid":
a.fileid=r.file_id;
break;

case"sourceurl":
a.sourceurl=r.source_url;
break;

case"cdn_url":
a.cdn_url=(r.cdn_url||"").https2http().nogif();
break;

case"cover":
break;

case"ad_info":
a.ad_id=r.ad_info&&r.ad_info.ad_id||"";
break;

case"share_imageinfo":
a.share_imageinfo=JSON.stringify2({
list:r.share_imageinfo
});
break;

default:
a[e]=r[e];
}
});
var n=t?e?i.validateStrictly(a):i.validate(a):$.extend(!0,{},r);
return!!n&&(n.cover=void 0),n;
},
isCurrentArticle:function(){
var t=this._o.ueditor.fireEvent("get_current_article");
return t&&t.data("article")===this?!0:!1;
},
removeCover:function(){
if(this.isCurrentArticle()){
var t=this._o.$infoContainer.find(".js_cover");
t.hide().find("input").val(""),t.find(".js_show_cover_pic").val("0"),this._g.$item.find("div.js_appmsg_thumb").css("backgroundImage",'url("")'),
this._g.$item.removeClass("has_thumb");
}
this.data.set("file_id",""),this.data.set("cdn_url",""),this.data.set("cdn_url_back",""),
this.data.set("show_cover_pic",0);
},
handleEditTips:function(){
this._o.$infoContainer.find(".js_edit_tips").hide();
},
getEditTipsContent:function(){
return"";
},
validateCommon:function(t){
{
var e=t.$dom,i=t.item;
this.data.getData();
}
return this.checkSourceUrl(t),n.rangelength(i.digest,[0,this._g.maxDigest])||(e.find(".js_desc_error").text("摘要长度不能超过%s字".sprintf(this._g.maxDigest)).show(),
t.viewClass=t.viewClass||".js_desc",t.isValid=!1),this.validateReward(t),1==i.can_reward&&i.reward_money>0&&(i.reward_money<1||i.reward_money>256||i.reward_money.toString().indexOf(".")>-1)&&(e.find(".js_reward_money_error").text("赞赏金额范围为1-256，只能是整数").show(),
t.viewClass=t.viewClass||".js_reward_ios_money",t.isValid=!1),t;
},
validateStrictlyCommon:function(t){
{
var e=t.$dom,i=t.item;
this.data.getData();
}
return i.fileid||i.cdn_url||(this.showErrMsg(e.find(".js_cover_error"),"必须插入一张图片"),
t.viewClass=t.viewClass||".js_cover_error",t.isValid=!1),this.checkSourceUrl(t),
n.rangelength(i.digest,[0,this._g.maxDigest])||(e.find(".js_desc_error").text("摘要长度不能超过%s字".sprintf(this._g.maxDigest)).show(),
t.viewClass=t.viewClass||".js_desc",t.isValid=!1),this.validateReward(t),t;
},
validateReward:function(t){
var e=this.getRewardErrorText();
e&&(t.$dom.find(".js_reward_error").text(e).show(),t.viewClass=t.viewClass||".js_reward_error",
t.isValid=!1);
},
checkSourceUrl:function(t){
var e=t.$dom,i=t.item,r=this.data.getData();
r.source_url_checked&&""==i.sourceurl&&(e.find(".js_url_error").text("请输入原文链接").show(),
t.viewClass=t.viewClass||".js_url",t.isValid=!1),i.sourceurl&&!n.url(i.sourceurl)&&(e.find(".js_url_error").text("链接不合法").show(),
t.viewClass=t.viewClass||".js_url",t.isValid=!1);
},
getRewardErrorText:function(){
if(0==this.data.get("copyright_type")||2==this.data.get("copyright_type"))return"";
var t="",e=this.data.get("can_reward"),i=this.data.get("can_open_reward"),r=this.data.get("writerid"),a=this.data.get("authority"),s=this.data.get("author_status");
return r&&!a?t="赞赏账户授权已失效，请编辑原创声明重新设置。":e&&!r?t="因未选择赞赏账户，无法开启赞赏。请编辑原创声明重新设置。":r&&s?t="因未选择赞赏账户，无法开启赞赏。请编辑原创声明重新设置。":e&&r&&!i&&(t="选择的赞赏账户异常，请编辑原创声明重新设置。"),
t;
},
validateGuideWords:function(t){
return n.rangelength(t.item.guide_words,[0,this._o.guideWordlimit])||(this.showErrMsg(t.$dom.find(".js_content_error"),"推荐语长度不能超过"+this._o.guideWordlimit+"字"),
t.viewClass=t.viewClass||".js_content_error",t.isValid=!1),t;
},
handleValidateResult:function(t){
return t.isValid?(this.hideAllErrMsg(),t.item):(t.viewClass&&this.scrollIntoView(t.$dom.find(t.viewClass),250),
null);
},
validate:function(t){
return t;
},
validateStrictly:function(t){
return t;
},
setGuideWordsReadOnly:function(){},
modifyCurrentEditData:function(t){
this.renderFieldData(t);
},
renderFieldData:function(t){
this._o.$infoContainer.find(".js_field").each(function(){
var e=$(this),i=e.attr("name"),r=e.attr("type");
"undefined"!=typeof t[i]&&("checkbox"==r?e.checkbox("checked",!!t[i]):e.val(t[i]||"").trigger("blur keydown "));
});
},
renderGuidWords:function(){
var t=_.getEditor(this._o.ueditor,this._o.formItemsOpt);
t.setContent(this.data.get("guide_words")),$("#guide_words_main").show();
},
renderSharePreview:function(t){
var e=this.data,i=$("#reprint_article_main");
i.html(wx.T(t.tpl,e.getData())),i.show();
},
getArticleType:function(){
return this.data.get("share_page_type");
},
renderSourceUrl:function(){
var t=this._o.$infoContainer,e=this.data.getData();
e.source_url_checked?t.find(".js_url_area .frm_input_box").show():t.find(".js_url_area .frm_input_box").hide();
},
replaceMedia:function(){},
setAuthorInfo:function(t){
var e=this.data;
e.set("writerid",t.writerid),"undefined"!=typeof t.copyright_type&&e.set("copyright_type",1*t.copyright_type),
t.writerid?("undefined"==typeof t.author_status?e.set("author_status",0):e.set("author_status",1*t.author_status),
"undefined"==typeof t.authority?e.set("authority",1):e.set("authority",1*t.authority)):(e.set("author_status",1),
e.set("authority",0)),e.set("author_username",t.author_username),e.set("author",t.author),
e.set("can_open_reward",1*t.can_open_reward),e.set("can_reward",1*t.can_reward),
this.isCurrentArticle()&&(this._o.$infoContainer.find('input[name="writerid"]').val(t.writerid),
this._o.$infoContainer.find('input[name="author_username"]').val(t.author_username),
this._o.$infoContainer.find('input[name="author"]').val(t.author),this._o.$infoContainer.find('input[name="can_open_reward"]').val(1*t.can_open_reward),
this._o.$infoContainer.find('input[name="can_reward"]').val(1*t.can_reward),this.renderReward());
},
getAuthorInfo:function(){
var t=this.data,e=1*t.get("author_status"),i=t.get("writerid"),r=t.get("authority"),a=t.get("author_username"),s=1*t.get("can_open_reward"),n=1*t.get("can_reward"),o=t.get("author");
return!i||r&&!e&&s||(e=0,r=0,i="",a="",s=0,n=0,o=""),{
writerid:i,
author_username:a,
author:o,
can_open_reward:s,
author_status:e,
can_reward:n,
authority:r,
copyright_type:t.get("copyright_type")
};
},
renderCover:function(){
var t=this._o.$infoContainer,e=this.data.getData(),r=e.cover,a=t.find(".js_cover");
if(a.find("img").remove(),r&&(s.isLocalDomain(r)||i.isOuterWhiteDomain(r))){
var n=a.show().find(".js_cover_preview").css("backgroundImage",'url("'+r+'")');
n.find(".js_tip_mask_msg").hide(),n.find(".js_tip_mask").removeClass("error_mask");
}else this._g.$item.removeClass("has_thumb").find(".js_appmsg_thumb").css("backgroundImage",'url("")'),
t.find(".js_cover").hide(),t.find(".js_cdn_url").val(""),t.find(".js_file_id").val(""),
t.find(".js_cdn_url_back").val("");
this.changeCoverPreviewCss(n);
},
changeCoverPreviewCss:function(t){
if(this.isCurrentArticle()){
var e=this.getIndex();
t||(t=this._o.$infoContainer.find(".js_cover").find(".js_cover_preview")),0==e?t.addClass("first_appmsg_cover"):t.removeClass("first_appmsg_cover");
}
},
titleChange:function(t){
this.isCurrentArticle()&&(this._o.$infoContainer.find('.js_field[name="title"]').val(t.title).trigger("blur keydown "),
this._g.$item.find(".js_appmsg_title").text(t.title)),this.data.set("title",t.title);
},
coverChange:function(t){
var e=this._o.$infoContainer,i=t.url,r=t.file_id,a="";
a=i?i.http2https().nogif():wx.url("/cgi-bin/getimgdata?mode=large&source=file&fileId=%s".sprintf(r));
var s=t.oriUrl||a;
if(this.isCurrentArticle()){
var n=e.find(".js_cover");
n.find("img").remove(),n.show();
var o=n.find(".js_cover_preview").css("backgroundImage",'url("'+a+'")');
if(o.find(".js_tip_mask_msg").hide(),o.find(".js_tip_mask").addClass("hover_mask").removeClass("error_mask"),
n.find("input.js_file_id").val(r),n.find("input.js_cdn_url").val(a),n.find("input.js_cdn_url_back").val(s),
1*t.coverPic===1&&s){
var d=this._o.ueditor.getUeditor(),_=d.selection.getRange(),h=_.createBookmark(),c=d.body.firstChild;
_.setEndBefore(c),_.setStartBefore(c),d.fireEvent("insertMaterialImg",{
format:t.oriFormat,
src:s
}),_.moveToBookmark(h),_.select(),d.fireEvent("contentchange",!0),d.fireEvent("scrollIntoView",$("#author"),200);
}
e.find(".js_show_cover_pic").val("0"),this._g.$item.find(".js_appmsg_thumb").css("backgroundImage",'url("'+a+'")'),
this._g.$item.addClass("has_thumb"),e.find(".js_cover_error").hide(),this.changeCoverPreviewCss(o);
}
this.data.set("file_id",r),this.data.set("cdn_url",a),this.data.set("cover",a),this.data.set("cdn_url_back",s),
this.data.set("show_cover_pic",0);
},
renderComment:function(){
var t=this._o.$infoContainer,e=this.data.getData();
t.find(".js_comment").checkbox("checked",0==e.need_open_comment?!1:!0),t.find(".js_comment_setting").each(function(t){
t==Number(e.only_fans_can_comment||0)?$(this).checkbox("checked",!0):$(this).checkbox("checked",!1);
}),0==e.need_open_comment?$("#js_comment_setting_wrp").hide():$("#js_comment_setting_wrp").show();
},
renderReward:function(){
var t=this._o.$infoContainer,i=this._o.$infoContainer.find(".js_reward_container"),a=this.data.get("author"),s=this.data.get("can_reward"),n=this.data.get("can_open_reward"),o=this.data.get("writerid"),d=this.data.get("authority"),_=this.data.get("author_status"),h=this.data.get("copyright_type"),c=this.data.get("is_share_copyright"),l=t.find(".js_author_container"),u=t.find("input.js_author");
if(1==h&&o||0==c&&2==h?l.addClass("author_active"):l.removeClass("author_active"),
1==h&&!d&&o){
var f=wx.T(e,{
text:encodeURIComponent("赞赏账户授权已失效，要重新获得授权，请前往赞赏账户小程序添加本公众号")
});
l.addClass("author_status_warn"),u.siblings(".js_author_warn").remove(),$(f).insertBefore(u),
r.init({
$container:l
});
}else l.removeClass("author_status_warn"),u.siblings(".js_author_warn").remove();
1==h?(l.addClass("author_original"),this.editor.fireEvent("setAuthorStatus",{
status:!0,
readonly:!0,
hideCounter:!0,
readonlyTips:"原创作者请在原创声明编辑中修改"
})):(l.removeClass("author_original"),this.editor.fireEvent("setAuthorStatus",{
status:!0
}));
var m=this.getRewardErrorText();
!m&&s&&o&&d&&!_&&n||0==c&&2==h?(i.find(".js_author_username").text(a),i.find(".js_reward_preview_list").show(),
i.find(".js_no_reward_list").hide(),i.find(".js_reward_error").hide()):(m?i.find(".js_reward_error").text(m).show():i.find(".js_reward_error").hide(),
i.find(".js_reward_preview_list").hide(),i.find(".js_no_reward_list").show());
},
triggerInputValidate:function(){
var t=this._o.$infoContainer,e=["input.js_title","input.js_author","textarea.js_desc"];
e=e.join(","),t.find(e).trigger("keydown"),t.find(e).trigger("blur");
},
renderReprintSource:function(){
var t=this._o.$infoContainer.find("#js_reprint_source"),e=this.data.getData();
t.find(".js_reprint_biz_avatar").attr("src",e.copyright_headimg||"http://mmbiz.qpic.cn/mmbiz/a5icZrUmbV8p5jb6RZ8aYfjfS2AVle8URwBt8QIu6XbGewB9wiaWYWkPwq4R7pfdsFibuLkic16UcxDSNYtB8HnC1Q/0"),
t.find(".js_reprint_biz_nickname").html(e.copyright_nickname),t.show();
},
renderReprintTips:function(t){
if(t){
var e=this._o.$infoContainer.find("#js_reprint_article_tips");
e.find(".js_content").text(t),e.show();
}
},
renderCommon:function(){
var t=this.data.getData();
this.renderFieldData(t),this.renderComment(),this.renderCover(),this.renderSourceUrl(),
this.renderOriginal(),this.renderAd(),this.triggerInputValidate();
},
resetBeforeRender:function(){
$("#guide_words_main").hide(),$("#reprint_article_main").hide(),$("#js_reprint_source").hide(),
$("#js_reprint_article_tips").hide(),this._o.$infoContainer.find(".js_plublish_style").show(),
this._o.$infoContainer.find(".js_cover_tip").html("").hide(),this.handleEditTips(),
this.setTextEditorWordlimit(this._o.defaultGuideWordlimit);
},
render:function(){
this.resetBeforeRender(),this.renderCommon();
},
destroy:function(){}
});
return u;
});