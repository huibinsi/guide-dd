define("cardticket/select_sub_merchant_table.js",["tpl/cardticket/select_sub_merchant_table.html.js","common/wx/popup.js","common/wx/Cgi.js","common/wx/pagebar.js","common/wx/Tips.js","biz_web/ui/checkbox.js","page/cardticket/dialog_choose_sub_store.css","cardticket/common_template_helper.js"],function(t){
"use strict";
function e(t){
var e,a=t.opt;
e=t.$container,e.html(c({
loading:!0,
param:a.param
})),a.resetPosition&&a.resetPosition();
}
function a(t,a){
var o=a.opt,r=$.extend(!0,{
action:"list",
offset:o.pageInfo.begin,
limit:o.pageInfo.count
},o.param);
f=!0,e(a),l.get({
url:o.url||"/merchant/cardhelpmakesend",
data:r,
complete:function(){
f=!1;
}
},function(t){
if(0==t.base_resp.ret||-1==t.base_resp.ret){
var e=$.parseJSON(t.bind_list),r=$.parseJSON(t.sub_merchant_remain_quota);
if(o.data=e.List,o.remain_data=r.list,o.is_sns_card)for(var i=0;i<e.List.length;i++){
var s=e.List[i];
s.can_not_use_sns_card=!p.can_category_use_sns_card(s.PrimaryCategoryId,s.SecondaryCategoryId);
}
o.pageInfo.total_count=t.total_count||0,n(o.pageInfo,a);
}else l.show(t);
});
}
function n(t,e){
for(var a,n=e.opt,s=0;s<n.data.length;s++)$.extend(n.data[s],n.remain_data[s]);
return a=e.$container,a.html(c(n)),n.resetPosition&&n.resetPosition(),n.data.length?(e.pagebar=null,
i(n.pageInfo,e),r(e,n.data,a),o(e,a),void(n.getDataComplete&&n.getDataComplete(n.data))):(r(e,n.data,a),
void o(e,a));
}
function o(t,e){
function n(e){
o.param.keyword=e,a(o.pageInfo,t);
}
var o=t.opt,r=$(".js_search_input",e).on("keyup",function(t){
var e=$.trim($(this).val());
wx.isHotkey(t,"enter")&&n(e);
});
$(".js_search_btn",e).click(function(){
var t=$.trim(r.val());
n(t);
});
}
function r(t){
var e=t.opt;
$(".js_merchant_item").click(function(){
var t=$(this).hasClass("js_merchant_disabled");
t||($(".js_merchant_item").removeClass("selected"),$(this).addClass("selected"));
}),e.resetPosition&&e.resetPosition();
}
function i(t,e){
var n=t.total_count,o=e.$container;
if(t.count&&n>t.count){
var r=t.begin/t.count;
e.pagebar=new u({
container:$(".js_pager",o),
first:!1,
last:!1,
midRange:5,
initShowPage:r+1,
perPage:t.count,
totalItemsNum:n,
callback:function(n){
if(f)return!1;
var o=n.currentPage;
return o!=r+1&&(t.begin=(o-1)*t.count,a(t,e)),!0;
}
});
}
}
function s(t,e){
for(var a=0;a<t.length;a++)if(t[a].Id==e)return t[a];
return null;
}
{
var c=t("tpl/cardticket/select_sub_merchant_table.html.js"),l=(t("common/wx/popup.js"),
t("common/wx/Cgi.js")),u=t("common/wx/pagebar.js"),m=t("common/wx/Tips.js");
t("biz_web/ui/checkbox.js");
}
t("page/cardticket/dialog_choose_sub_store.css");
var p=t("cardticket/common_template_helper.js");
c=template.compile(c);
var _={
pageInfo:{
begin:0,
count:12,
total_count:0
},
param:{
status_list:1,
keyword:""
},
url:null,
data:null,
is_sns_card:!1,
selectComplete:$.noop,
onHide:$.noop
},d=function(t){
this.opt=$.extend(!0,{},_,t),this.init();
},f=!1;
return d.prototype={
init:function(){
var t=this.opt,e=this;
e.$container=$(t.container),t.data?n(t.pageInfo,e):a(t.pageInfo,e);
},
get:function(){
return this.$container;
},
selectedValue:function(){
var t=this.opt;
if(!t.data||!t.data.length)return!1;
var e=this.get(),a=e.find(".js_merchant_item.selected");
if(!a.length)return m.err("请选择子商户"),!1;
var n=a.attr("data-id"),o=s(t.data,n);
return o;
}
},d;
});define("cardticket/add/msg_operate_type_html.js",["tpl/media/cardmsg.html.js"],function(a){
"use strict";
var s={
1:'{if msg_operation.appmsg_title}<div class="appmsg single">                <div class="appmsg_content">                    <div class="appmsg_info">                        <em class="appmsg_date">{msg_operation.appmsg_update_time}</em>                    </div>                    <div class="appmsg_item">                        <h4 class="appmsg_title">                            <a href="{msg_operation.url}" target="_blank">{msg_operation.appmsg_title}</a>                        </h4>                        <div class="appmsg_thumb_wrp" style="background-image:url(\'{msg_operation.appmsg_cover}\')"></div>                        <p class="appmsg_desc">{msg_operation.appmsg_digest}</p>                    </div>                    {if msg_operation.appmsg_type == 10}<a href="" class="edit_mask preview_mask js_preview" data-msgid="{msg_operation.appmsg_appmsgid}" data-idx="{msg_operation.appmsg_itemidx-1}">                        <div class="edit_mask_content">                            <p class="">                                预览文章                            </p>                        </div>                        <span class="vm_box"></span>                    </a>{/if}                </div>             </div>             {else}            <a href="{msg_operation.url}" target="_blank">{msg_operation.text}</a>             {/if}',
2:'<a target="_blank" href="{msg_operation.url}">{msg_operation.url}</a>',
5:a("tpl/media/cardmsg.html.js"),
4:'<a target="_blank" href="{msg_operation.url}">{msg_operation.url}</a>',
0:""
};
return s;
});define("common/wx/tooltipsManager.js",["common/wx/tooltips.js"],function(t){
"use strict";
var o=t("common/wx/tooltips.js"),i={
tooltips:[],
init:function(t,i){
var n=this;
$(t).each(function(){
i.container=this,n.add(new o(i));
});
},
add:function(t){
this.tooltips.push(t);
},
hideAll:function(){
for(var t=0;t<this.tooltips.length;t++)this.tooltips[t].hide();
},
removeItem:function(t){
for(var o=0;o<this.tooltips.length;o++)if(this.tooltips[o]===t)return this.tooltips.splice(o,1),
t.$dom.remove(),!0;
return!1;
},
removeIndex:function(t){
if(!(t>=this.tooltips.length||0>t)){
var o=this.tooltips[t];
this.tooltips.splice(t,1),o.$dom.remove();
}
},
current:function(){},
hide:function(){},
removeAll:function(){
for(var t=0;t<this.tooltips.length;t++)this.tooltips[t].$dom.remove();
this.tooltips=[];
}
};
return i;
});define("tpl/media/appmsg_edit/article_list_item.html.js",[],function(){
return'<div id="appmsgItem{id}" data-fileId="{file_id}" data-id="{id}" data-msgindex="{msg_index}" class="js_appmsg_item appmsg_item_wrp {if cover}has_thumb{/if} {if !isFirst}sub_card_media{/if}" >\n  <div class="appmsg_item">\n    {if share_page_type==5}\n    <div class="card_video_wrp">\n      <div class="card_video">\n        <div class="card_video_inner">\n          <div class="weui-desktop-vm_primary card_video_hd">\n            <strong class="card_video_title js_appmsg_title">{title || \'标题\'}</strong>\n            <i class="card_video_length">{share_videoinfo[0].duration}</i>\n          </div>\n          <div class="weui-desktop-vm_default card_video_bd">\n            <div class="card_video_thumb js_appmsg_thumb" style="background-image:url(\'{share_videoinfo[0].cover}\');">\n              <i class="card_video_player"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    {else if share_page_type==7}\n    <div class="card_audio">\n      <div class="card_audio_inner">\n        <div class="weui-desktop-vm_primary card_audio_hd">\n          <strong class="card_audio_title js_appmsg_title">{title || \'标题\'}</strong>\n        </div>\n        <div class="weui-desktop-vm_default card_audio_bd">\n          <i class="card_audio_player"></i>\n        </div>\n      </div>\n    </div>\n    {else if share_page_type==8}\n    <div class="card_img">\n      <div class="card_img_inner">\n        <div class="weui-desktop-vm_primary card_img_hd">\n          <strong class="card_img_title js_appmsg_title">{title || \'标题\'}</strong>\n        </div>\n        <div class="weui-desktop-vm_default card_img_bd">\n          <i class="card_img_thumb js_appmsg_thumb" style="background-image: url(\'{share_imageinfo[0].cdn_url}\');"></i>\n        </div>\n      </div>\n    </div>\n    {else}\n    <div class="card_appmsg">\n      <div class="card_appmsg_inner">\n        <div class="weui-desktop-vm_primary card_appmsg_hd">\n          <strong class="card_appmsg_title js_appmsg_title">{title || \'标题\'}</strong>\n        </div>\n        <div class="weui-desktop-vm_default card_appmsg_bd">\n          <div class="card_appmsg_thumb js_appmsg_thumb" style="background-image:url(\'{cover.nogif()}\');"></div>\n        </div>\n      </div>\n    </div>\n    {/if}\n    <div class="appmsg_edit_mask js_readonly">\n      <a onclick="return false;" style="{if isFirst}display:none;{/if}" class="icon20_common sort_up_white   js_up"   data-id="{id}" href="javascript:;" title="上移">向上</a>\n      <a onclick="return false;" style="{if isFirst}display:none;{/if}" class="icon20_common sort_down_white js_down" data-id="{id}" href="javascript:;" title="下移">向下</a>\n      <a onclick="return false;" style="{if isFirst}display:none;{/if}" class="icon20_common del_media_white js_del"  data-id="{id}" href="javascript:;" title="删除">删除</a>\n    </div>\n  </div>\n</div>\n';
});define("common/wx/mpEditor/text_editor.js",["widget/text_editor.css","common/wx/richEditor/emotionEditor.js","tpl/media/appmsg_edit/text_editor.html.js","tpl/media/appmsg_edit/text_editor_word_tips.html.js"],function(t){
"use strict";
function i(t){
return n.hasInit?!0:(n.$dom=t.$dom,void(n.wordlimit=t.wordlimit));
}
function o(t,i){
return n.$dom?(n.myEditor||d(t,i),n.myEditor):null;
}
function d(t,i){
return n.$dom?void(n.myEditor=new e(n.$dom,{
wordlimit:n.wordlimit,
linebreak:!0,
hideEmotion:!0,
hideUpload:!0,
hideOprTips:!0,
editorTpl:r,
editorTipsTpl:m,
ueditor:t,
formItemsOpt:i
})):null;
}
t("widget/text_editor.css");
var e=t("common/wx/richEditor/emotionEditor.js"),r=t("tpl/media/appmsg_edit/text_editor.html.js"),m=t("tpl/media/appmsg_edit/text_editor_word_tips.html.js"),n={
hasInit:!1,
$dom:null,
myEditor:null,
wordlimit:0
};
return{
initEnv:i,
getEditor:o
};
});define("tpl/author/authority_warn.html.js",[],function(){
return'<i style="display:block;" data-type="2" data-desc="{text}" class="js_show_author_qrcode_popover js_author_warn icon-svg-helper-tips_warn edui-default"></i>';
});define("tpl/media/product_pagebar_tpl.html.js",[],function(){
return'<div class="pagination">\n    <span class="page_nav_area">\n        {if page_num!=1}\n        <a href="javascript:void(0);" data-curpage="{page_num}" class="js_pagebtn js_first btn page_first">首页</a>\n        <a href="javascript:void(0);" data-curpage="{page_num}" class="js_pagebtn js_prev btn page_prev" title="上一页"><i class="arrow"></i></a>\n        {/if}\n        <span class="page_num">\n          <label>{page_num}</label>\n          <span class="num_gap">/</span>\n          <label>{totalPage}</label>\n        </span>\n        {if !last}\n        <a href="javascript:void(0);" data-curpage="{page_num}" class="js_pagebtn js_next btn page_next" title="下一页"><i class="arrow"></i></a>\n        {/if}\n    </span>\n</div>';
});define("tpl/media/product_dialog_loading.html.js",[],function(){
return'<tr class="empty_item"><td colspan="4" class="empty_tips"><i class="icon_loading_small white"></i></td></tr>';
});define("tpl/media/product_dialog_list.html.js",[],function(){
return'{if msg}\n<tr class="empty_item"><td colspan="4" class="empty_tips">{msg}</td></tr>\n{else}\n{each list as item index}\n<tr {if item.disabled}class="product-cell__disabled"{/if}>\n    <td class="table_cell">\n        <label class="frm_checkbox_label {if item.selected}selected{/if} {if item.disabled}disabled{/if}">\n            <i class="icon_checkbox"></i>\n            <input type="checkbox" {if item.selected}checked="true"{/if} value="{item.pid}" data-index="{index}" {if item.disabled}disabled{/if} class="js_checkbox frm_checkbox">\n        </label></td>\n    <td class="table_cell product-cell__name">\n        <div class="product-cell-item">\n            <div class="product-cell-item__info">\n                <div class="product-cell-item__image"><img style="width:50px;height:50px" src="{item.img_url}" alt="{item.title}"></div>\n                <div class="product-cell-item__name">{=item.titleEncode}</div>\n                <div class="product-cell-item__price">￥{item.min_price}</div>\n            </div>\n        </div>\n    </td>\n    <td class="table_cell product-cell__kind">{=item.category_name_str}</td>\n    <td class="table_cell">{item.saleStatusStr}</td>\n</tr>\n{/each}\n{/if}';
});define("media/productCategory.js",["common/wx/Tips.js","common/wx/Cgi.js","common/wx/dialog.js","tpl/media/product_category_frame.html.js","media/productDropdown.js"],function(e){
"use strict";
function t(e){
this._o={
container:"",
category_loading_img:"",
defaultLabel:"请选择",
initCategoryName:[],
formObj:null,
search:!0,
canadd:!0,
candel:!0,
onChange:function(){}
},this._g={
hasInitCategory:!1
},this._extend(e),this.initData(),this.render();
}
function n(e){
m.data&&e.callback(m.data),m.getting!==!0&&(m.getting=!0,u.post({
url:"/cgi-bin/productmaterial?action=get_all_category"
},{
done:function(t){
m.getting=!1,t&&t.base_resp&&0==t.base_resp.ret&&t.category_list&&t.category_list.length>=1&&t.category_list[0].children_node&&t.category_list[0].children_node.length>=0&&(m.data={
isNew:!1,
canDel:!1,
isRoot:!0,
children_node:t.category_list[0].children_node
},a(m.data.children_node,1,"","")),e.callback(m.data);
},
fail:function(){
m.getting=!1,e.callback(m.data);
}
}));
}
function a(e,t,n,o){
for(var r=0,i=e.length;i>r;r++){
var c=e[r];
m.dataMap["c"+t]||(m.dataMap["c"+t]={});
var d=n?n+c.category_name:c.category_name,l=o?o+r:r+"";
m.dataMap["c"+t][d]={
index:l,
name:c.category_name
},c.children_node&&c.children_node.length>0&&a(c.children_node,t+1,d+m.splitKey,l+",");
}
}
function o(e,t){
var n,a=[{
name:t,
value:"",
canDel:!1
}];
if(!e)return a;
if(n="[object Array]"===Object.prototype.toString.call(e)?e:e.children_node,!n)return a;
for(var o=0,r=n.length;r>o;o++)a.push({
value:n[o].category_name,
name:n[o].category_name,
canDel:n[o].canDel===!0?!0:!1
});
return a;
}
function r(e,t){
if(0==e||!t)return m.data;
if(e="c"+e,m.dataMap&&m.dataMap[e]&&m.dataMap[e][t]){
for(var n=m.data.children_node,a=(m.dataMap[e][t].index+"").split(","),o=0,r=a.length;r>o;o++){
var c=1*a[o];
if(o==r-1)n=n&&n[c]?n[c]:null;else{
if(!n||!i(n[c])){
n=null;
break;
}
n=n[c].children_node;
}
}
return n;
}
return null;
}
function i(e){
return e&&e.children_node&&e.children_node.length>0?!0:!1;
}
function c(e){
var t=e.categoryIndex,n=e.key,a=e.callback,o=t+m.splitKey+n;
if(m.checkCategoryDel[o]!==!0){
var i=r(t,n);
if("undefined"!=typeof i.canDel)return void a(i.canDel);
m.checkCategoryDel[o]=!0;
for(var c={},d=n.split(m.splitKey),l=0,g=d.length;g>l;l++)c["category_name"+(l+1)]=d[l];
u.post({
url:"/cgi-bin/productmaterial?action=check_delete_category",
data:c
},{
done:function(e){
if(m.checkCategoryDel[o]=!1,e&&e.base_resp&&0==e.base_resp.ret){
var i=r(t,n);
i.canDel=1*e.can_delete===1?!0:!1,a(i.canDel);
}else a(-1);
},
fail:function(){
m.checkCategoryDel[o]=!1,a(-1);
}
});
}
}
function d(e,t){
if(m.dataMap["c"+e]&&m.dataMap["c"+e][t]){
var n=m.dataMap["c"+e][t].index.split(",");
if(0!=n.length){
n=n[n.length-1];
var o;
if(1==e)o=m.data;else{
var i=t.split(m.splitKey);
i=i.splice(0,i.length-1).join(m.splitKey),o=r(e-1,i);
}
o&&o.children_node&&o.children_node[n]&&(o.children_node.splice(n,1),m.dataMap={},
a(m.data.children_node,1,"",""));
}
}
}
function l(e){
var t=r(e.categoryIndex,e.key);
if(t&&t.isNew===!0)return d(e.categoryIndex,e.key),void("function"==typeof e.onSuccess&&e.onSuccess({
base_resp:{
ret:0
}
},"删除类目成功"));
if(m.delCategory[e.key]!==!0){
m.delCategory[e.key]=!0;
for(var t={},n=e.key.split(m.splitKey),a=0,o=n.length;o>a;a++)t["category_name"+(a+1)]=n[a];
u.post({
url:"/cgi-bin/productmaterial?action=delete_category",
data:t
},{
done:function(t){
m.delCategory[e.key]=!1,t&&t.base_resp&&0==t.base_resp.ret?"function"==typeof e.onSuccess&&(d(e.categoryIndex,e.key),
e.onSuccess(t,"删除类目成功")):"function"==typeof e.onError&&e.onError(t,"删除类目失败");
},
fail:function(){
m.delCategory[e.key]=!1,"function"==typeof e.onError&&e.onError(null,"系统繁忙，请稍后再试");
}
});
}
}
function g(e,t){
if(!e||!t)return!1;
for(var n=0,a=e.length;a>n;n++)if(e[n].category_name===t)return!0;
return!1;
}
function f(e,t,n){
var a=r(e-1,t);
if(a=a.children_node,g(a,n))return-1;
a.push({
category_name:n,
isNew:!0,
canDel:!0,
children_node:[]
});
var o=a.length,i=t?t+m.splitKey+n:n,c="";
if(t&&e>=2){
var d=m.dataMap["c"+(e-1)][t];
if(!d)return!1;
c=d.index;
}
return m.dataMap["c"+e]||(m.dataMap["c"+e]={}),m.dataMap["c"+e][i]={
name:n,
index:c?c+","+(o-1):o-1+""
},a[o-1];
}
function y(e,t){
if(!t||!e||0==e.length)return void 0;
for(var n=void 0,a=0,o=e.length;o>a;a++)if(e[a].value==t){
n=a;
break;
}
return n;
}
var s=e("common/wx/Tips.js"),u=e("common/wx/Cgi.js"),_=e("common/wx/dialog.js"),h=e("tpl/media/product_category_frame.html.js"),p=e("media/productDropdown.js"),m={
categoryLimit:5,
checkCategoryDel:{},
delCategory:{},
data:null,
dataMap:{},
getting:!1,
splitKey:"#$%^"
};
return t.prototype={
_extend:function(e){
if(e)for(var t in e)this._o[t]=e[t];
},
initData:function(){
for(var e=this._g,t=this._o,a=this,r=1;r<=m.categoryLimit;r++)e["category_name"+r]=t.initCategoryName[r-1]||"";
n({
callback:function(n){
if(n)if(n.children_node&&0!=n.children_node.length){
e.categoryData=n;
var r=o(e.categoryData,t.defaultLabel),i=void 0;
e.category_name1&&(i=y(r,e.category_name1),e.category_name1=""),a.initCategory(1,"",r,i),
e.hasInitCategory=!0,"function"==typeof t.afterInitCategory&&t.afterInitCategory();
}else;else s.err("获取类目数据失败");
}
});
},
render:function(){
for(var e=1;e<=m.categoryLimit;e++)this._o.container.append(wx.T(h,{
index:e
}));
},
delSubCategoryDropdown:function(e){
for(var t=e;t<=m.categoryLimit;t++)this.delCategoryDropdown(t);
},
delCategoryDropdown:function(e){
var t=this._g,n=this.getDropdownKeyByIndex(e);
t[n]&&"function"==typeof t[n].destroy&&(t[n].destroy(),t[n]=null);
var a=$("#category_"+e+"_hidden").val("");
t.hasInitCategory&&this._o.formObj&&this._o.formObj.element(a);
},
initCategory:function(e,t,n,a){
var i=this._g,d=this._o,g=this;
if(this.delSubCategoryDropdown(e),d.canadd||n&&!(n.length<=1)){
var u=$("#category_"+e);
if(u&&u.length>0){
var h=this.getDropdownKeyByIndex(e);
i[h]=new p({
loading_img:d.category_loading_img,
container:u,
label:d.defaultLabel,
data:n,
callback:function(n,a){
var i=e+1;
if(""===n){
g.delSubCategoryDropdown(i);
var c=$("#category_"+e+"_hidden").val("");
return g._o.formObj&&g._o.formObj.element(c),void("function"==typeof g._o.onChange&&g._o.onChange(g));
}
var c=$("#category_"+e+"_hidden").val(a),d=t?t+m.splitKey+a:a;
g._o.formObj&&g._o.formObj.element(c);
var l=r(e,d),f=o(l,g._o.defaultLabel),s=void 0;
g._g["category_name"+i]&&(s=y(f,g._g["category_name"+i]),g._g["category_name"+i]=""),
g.initCategory(e+1,d,f,s),"function"==typeof g._o.onChange&&g._o.onChange(g);
},
search:d.search,
canadd:d.canadd,
add:function(n,a){
if(n){
var r=f(e,t,n);
return-1===r?void s.err("同一级类目不能重名"):(r&&(a.add(o([r],g._o.defaultLabel)[1]),a.selected(a.opt.data.length-1)),
!0);
}
},
del:function(n,a){
n&&_.show({
type:"info",
width:600,
msg:"确定删除类目？",
className:"dialog-delete-confirm",
buttons:[{
text:"确定",
click:function(){
if(g._g.delingCategory!==!0){
var n=this,i=n.dom.find(".js_btn").eq(0);
i.btn(!1),g._g.delingCategory=!0,l({
categoryIndex:e,
key:t?t+m.splitKey+a:a,
onSuccess:function(){
i.btn(!0),g._g.delingCategory=!1,g.delSubCategoryDropdown(e);
var a=r(e-1,t);
g.initCategory(e,t,o(a,g._o.defaultLabel),0),s.suc("删除类目成功"),n.remove();
},
onError:function(e,t){
i.btn(!0),g._g.delingCategory=!1,s.err(t||"系统繁忙，请稍后再试");
}
});
}
}
},{
text:"取消",
type:"normal",
click:function(){
this.remove();
}
}]
});
}
}),d.candel&&u.find("ul").on("mouseover","li.js_dropdown_item_li",function(){
var n=$(this),a=n.find("a.jsDropdownItem");
if(a&&a.length>0){
var o=a.attr("data-name"),r=a.attr("data-value");
if(!r)return;
var i=n.find(".js_loading").show(),d=n.find(".js_del");
c({
categoryIndex:e,
key:t?t+m.splitKey+o:o,
callback:function(e){
e===!0?(d.show(),i.hide()):e===!1&&i.hide();
}
});
}
}),"undefined"!=typeof a&&i[h].selected(a);
}
}
},
getData:function(){
for(var e={},t=1;t<=m.categoryLimit;t++){
var n=($("#category_"+t+"_hidden").val()||"").trim();
e["category_name"+t]=n||"";
}
return e;
},
handle:function(e){
for(var t=this._g,n=1;n<=m.categoryLimit;n++){
var a=this.getDropdownKeyByIndex(n);
t[a]&&"function"==typeof t[a][e]&&t[a][e]();
}
},
select:function(e,t){
var n=this._g[this.getDropdownKeyByIndex(e)];
n&&"function"==typeof n.selected&&n.selected(t);
},
getDropdownKeyByIndex:function(e){
return"category_"+e+"_dropdown";
}
},{
myconstructor:t,
categoryLimit:m.categoryLimit
};
});define("tpl/media/videomsg.html.js",[],function(){
return'<div id="wxVideoBox{id}" class="richvideo Js_videomsg">\n    <div class="richvideo_content" style="z-index: 0">\n        <h4 class="title">{title}</h4>\n        <div class="video_info">\n            <em class="time">{time}</em>\n            <!--#0001#-->\n            <em class="res">{from}</em>\n            <!--%0001%-->\n        </div>\n        <div class="video_wrp Js_videoContent">\n            <div id="wxVideoPlayer{id}" class="wxVideoPlayContent video_player">\n                <video id="wxVideo{id}" class="video-js vjs-default-skin"  \n                    preload="auto" controls="controls" data-src="{video_url}"></video>\n            </div>\n            {if for_network}\n            <div class="wxNetworkVideo video_shot" data-contenturl="{content_url}">\n            {else}\n            <div class="{if !for_transfer}wxVideoScreenshot {/if}video_shot">\n            {/if}\n                <!--#0002#-->\n                {if img_url}\n                    <img src="{img_url}"/>\n                {else}\n                    <img src="/cgi-bin/getimgdata?token={token}&msgid={app_id}&mode=large&source=file&fileId={file_id}"/>\n                {/if}\n                <!--%0002%-->\n                <!-- <i class="icon_video"></i> -->\n                <!-- <span class="video_duration"><em>{play_length}"</em></span> -->\n                {if for_transfer}\n                <div class="loading_tips" {if hide_transfer}style="display:none"{/if}>\n                    <i class="icon32_loading dark"></i>\n                    <p>转码中</p>\n                </div>\n                {/if}\n            </div>\n        </div>\n        <div class="video_desc" data-digest="{digest}">{digest}</div>\n    </div>\n    {if for_operation}\n    <div class="richvideo_opr">\n        <ul class="grid_line">\n            {if for_network}\n            <li class="richvideo_opr_item grid_item size1of2">\n                <a class="js_edit js_tooltip" href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&lang=zh_CN&token={token}&type=15&appmsgid={app_id}" data-tooltip="编辑">\n                    <i class="icon18_common edit_gray">编辑</i>\n                </a>\n            </li>\n            <li class="richvideo_opr_item grid_item size1of2 no_extra">\n                <a class="js_del js_tooltip" data-id="{id}" href="javascript:void(0);" data-tooltip="删除">\n                    <i class="icon18_common del_gray">删除</i>\n                </a>\n            </li>\n            {else}\n            <li class="richvideo_opr_item grid_item size1of3">\n                <a class="js_edit js_tooltip" href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&lang=zh_CN&token={token}&type=15&appmsgid={app_id}" data-tooltip="编辑">\n                    <i class="icon18_common edit_gray">编辑</i>\n                </a>\n            </li>\n            <li class="richvideo_opr_item grid_item size1of3">\n                <a {if for_transfer}href="javascript:;" class="js_tooltip js_download"{else}href="{video_download_url}" class="js_tooltip"{/if} data-tooltip="下载">\n                    <i class="icon18_common download_gray">下载</i>\n                </a>\n            </li>\n            <li class="richvideo_opr_item grid_item size1of3 no_extra">\n                <a class="js_del js_tooltip" data-id="{app_id}" href="javascript:void(0);" data-tooltip="删除">\n                    <i class="icon18_common del_gray">删除</i>\n                </a>\n            </li>\n            {/if}\n        </ul>\n    </div>\n    {/if}\n    {if for_selection}\n    <div class="richvideo_mask"></div>\n    <i class="icon_card_selected">已选择</i>\n    <div class="richvideo_tips">\n        <i class="icon_richvideo_error"></i>\n        <p>该素材没有标题，<a href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&lang=zh_CN&token={token}&type=15&appmsgid={app_id}">马上编辑</a></p>\n    </div>\n    {/if}\n    {if for_notitle}\n    <div class="richvideo_mask"></div>\n    <div class="richvideo_tips">\n        <i class="icon_richvideo_error"></i>\n        <p>该素材没有标题，<a href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&lang=zh_CN&token={token}&type=15&appmsgid={app_id}">马上编辑</a></p>\n    </div>\n    {/if}\n</div>';
});define("tpl/media/wxvideo.html.js",[],function(){
return'<div id="wxVideoBox{id}" class="richvideo smallvideo with_msg_box Js_videomsg">\n	<div class="richvideo_content" style="z-index: 0">\n		<h4 class="title">{name}</h4>\n        <div class="video_wrp Js_videoContent">\n            <div id="wxVideoPlayer{id}" class="wxVideoPlayContent video_player">\n                <video id="wxVideo{id}" class="video-js vjs-default-skin"  \n                    preload="auto" controls="controls" data-src="{video_url}"></video>\n            </div>\n			<div class="wxVideoScreenshot video_shot">\n                {if video_thumb_cdn_url}\n                <img src="{video_thumb_cdn_url}">\n                {else}\n                <!--#00001#-->\n				<img src="/cgi-bin/getimgdata?token={token}&msgid={id}&mode=small&source=file&fileId={file_id}">\n                <!--%00001%-->\n                {/if}\n				<div class="video_mask">\n					<span class="ic_play"></span>\n				</div>\n			</div>\n        </div>\n	</div>\n    {if for_operation}\n    <div class="richvideo_opr">\n        <ul class="grid_line">\n            <li class="richvideo_opr_item grid_item size1of2">\n                <a class="js_popedit js_tooltip" data-id="{id}" data-name="{name}" href="javascript:void(0);" data-tooltip="编辑">\n                    <i class="icon18_common edit_gray">编辑</i>\n                </a>\n            </li>\n            <li class="richvideo_opr_item grid_item size1of2 no_extra">\n                <a class="js_del js_tooltip" data-id="{id}" data-type="sv" href="javascript:void(0);" data-tooltip="删除">\n                    <i class="icon18_common del_gray">删除</i>\n                </a>\n            </li>\n        </ul>\n    </div>\n    {/if}\n    {if for_selection}\n    <div class="richvideo_mask"></div>\n    <i class="icon_card_selected">已选择</i>\n    {/if}\n</div>\n<div class="richvideo_msg_box">\n    <p class="mini_tips warn" style="display: none;">该视频由于版权问题无法在微信中播放</p>\n</div>';
});