define("common/wx/loadscript.js",[],function(){
"use strict";
function e(t){
e.counter||(e.counter=1);
var n="number"!=typeof t.retry?1:t.retry,o=document.createElement("script"),r=document.head||document.getElementsByTagName("head")[0]||document.documentElement,d=t.url+"&t="+Math.random(),i=t.callbackName,a="uninitialized",u="undefined"==typeof t.successCode?200:t.successCode,c="undefined"==typeof t.timeoutCode?500:t.timeoutCode,l="undefined"==typeof t.scriptErrorCode?400:t.scriptErrorCode,s=!1,f=null,m=function(e){
o&&!s&&(s=!0,f&&(clearTimeout(f),f=null),o.onload=o.onreadystatechange=o.onerror=null,
r&&o.parentNode&&r.removeChild(o),o=null,i&&-1==i.indexOf(".")&&(window[i]=null),
e!=u&&"loaded"!=a&&"function"==typeof t.onerror&&t.onerror(e));
};
if(i&&"function"==typeof t.callback){
var p=i;
-1==i.indexOf(".")&&(i=window[i]?i+e.counter++:i,window[i]=function(){
a="loaded",t.callback.apply(null,arguments);
}),d=d.replace("="+p,"="+i);
}
o.onload=o.onreadystatechange=function(){
var e=navigator.userAgent.toLowerCase();
(-1!=e.indexOf("opera")||-1==e.indexOf("msie")||/loaded|complete/i.test(this.readyState))&&m("loaded"==a?u:l);
},o.onerror=function(){
return n>0?(t.retry=n-1,f&&(clearTimeout(f),f=null),void e(t)):void m(l);
},t.timeout&&(f=setTimeout(function(){
m(c);
},parseInt(t.timeout,10))),a="loading",o.charset="utf-8",setTimeout(function(){
o.src=d;
try{
r.insertBefore(o,r.lastChild);
}catch(e){}
},0);
}
return e;
});define("tpl/media/adcpc_singleitem.html.js",[],function(){
return'<label for="" class="frm_label">选择广告</label>\n<div class="frm_controls">\n    <div class="mpda_cpc_list ">\n        {each single_ad_list as item idx}\n        <div class="appmsg_card_context mpda_cpc_context tj_item js_cpc_single_item {if item.selected} selected {/if} " data-single_aid="{item.aid}" data-image_url="{if item.status==1}{item.image_url}{else}/mpres/htmledition/images/pic/media/mpda/pic_mpda_cpc_thumb.png{/if}">\n            <div class="appmsg_card_bd mpda_cpc_bd" style="background-image:url({if item.status==1}{item.image_url}{else}/mpres/htmledition/images/pic/media/mpda/pic_mpda_cpc_thumb.png{/if});"></div>\n            <div class="appmsg_card_ft mpda_cpc_ft">\n                <span class="dropdown_opr_tips">\n                    广告\n                    <span class="dropdown_opr_popover">xxxxx</span>\n                </span>\n                <a href="javascript:void(0);" class="appmsg_card_btn">\n                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAV1BMVEUAAAB2h9x4id51iNx1h9x1h9x2h9x2h912iNx9jOB2htx1htx1h9x1htx2h9x3iN94h9yDkup1h9x1htt2htx1h912ht14h9x2id58i+B3iNyAmeZ1htuK6q6xAAAAHHRSTlMAmS969uOvhWYY9/Dn1cw3Pwvp3MJvYVFFIToKgBX0wAAAALVJREFUKM+t0NsKgzAQhGFNk5h4tmfb//2fs2m3i0Txzrka+GBZpjgiU7i29aWctzI4frGntRiLZm0d4O+PqoF6yOSZJHxLdOAzOkEvLcA5oxJKaSPYHaqg25BeptKvb6+FTJ+kjQI+9ag0OaAxIk3q7q0UAS8S29R7sxwcbwLpG51FaUmn32zJwrhDZwjS+vXgHlz8D8czo6GGpnrcPbJOPrjGmmJtVsQNxSZzeanba5iKA/IBYyoQUSgoEyQAAAAASUVORK5CYII=" alt="">\n                    去逛逛                </a>\n            </div>\n            <div class="mpda_cpc_qrcode">\n                <img class="pic_mpda_cpc_qrcode_mini" src="/mpres/htmledition/images/pic/media/mpda/pic_mpda_cpc_qrcode.jpg" alt="">\n                <div class="mpda_cpc_qrcode_pop">\n                    <img class="pic_mpda_cpc_qrcode" src="/merchant/ad_seller_manager?action=get_ad_qrcode&gh_id={item.gh_id}&path={item.path_encode}&token={token}" alt="">\n                    <strong class="mpda_cpc_qrcode_title">扫码查看广告详情页</strong>\n                </div>\n            </div>\n            <div class="card_mask_global vm_helper">\n                <div class="card_mask_content">\n                <i class="icon_card_selected_global"></i>\n                <p>{if item.status==1}  {else} 广告素材尚未审核通过 {/if}</p>\n                </div>\n            </div>\n        </div>&nbsp;\n        {/each}\n        \n        {if single_ad_list.length==0}\n        <p class="empty_tips" >该类目下暂无可选广告卡片</p>\n        {/if}\n        <p class="empty_tips" style="display:none">\n          <i class="icon_loading_small white"></i>\n        </p>\n    </div>\n</div>\n';
});define("tpl/media/adcpc_catitem.html.js",[],function(){
return'<div class="tag_choose_list">\n    {each sel_item as item idx}\n    <span class="tag_choose">{item.name}<span class="tag_choose_del js_cat_choose_del" data-category_id="{item.category_id}">删除</span></span>\n    {/each}\n    {if sel_item.length > 0}\n    <a class="global_link_opr js_clear_all" href="javascript:;" >清空</a>\n    {/if}\n</div>\n';
});define("tpl/media/adcpc_cat.html.js",[],function(){
return'<div class="frm_control_group">\n    <label for="" class="frm_label">商品类目</label>\n    <div class="frm_controls">\n        <div class="tag_choose_dropdown">\n            <div class="tag_choose_dropdown_hd js_cat_choose_list">\n            {if checkbox_type == \'checkbox\'}\n            <span class="tips_global">若不限定具体商品类目则按全类目展示广告</span>\n            {/if}\n            {if checkbox_type == \'radio\'}\n            <p class="tips_global">先单选类目，再选择该类目下广告卡片</p>\n            {/if}\n            </div>\n            <div class="tag_choose_dropdown_bd js_cat_choose_dp">\n                {each category_list as item i}\n                <label class="frm_{checkbox_type}_label tag_choose_label">\n                    <i class="icon_{checkbox_type}"></i>\n                    <span class="lbl_content">{item.name}</span>\n                    <input type="{checkbox_type}" class="frm_{checkbox_type} js_cpc_cat_item" data-category_id="{item.category_id}" value="{item.category_id}" {if item.selected}checked=\'checked\'{/if}>\n                </label>\n                {/each}\n                {if checkbox_type == \'radio\'}\n                <p class="tips_global">仅支持选择同类目下单品，更换类目后会清空已选单品</p>\n                {/if}   \n            </div>\n        </div>\n    </div>\n</div>\n';
});define("tpl/media/adcpc.html.js",[],function(){
return'<div class="mpda_cpc_choose_context">\n    <div class="frm_control_group">\n        <label for="" class="frm_label">广告位内容</label>\n        <div class="frm_controls frm_vertical_pt">\n            <label class="frm_radio_label">\n                <i class="icon_radio"></i>\n                <span class="lbl_content mini_tips icon_after" id="js_ad_mini_ask">仅限定商品类目 <i class="icon_msg_mini ask"></i> </span>\n                <input type="radio" class="frm_radio js_cpc_type" value="0">\n            </label>\n            {if can_use_single_ad == 1}\n            <label class="frm_radio_label selected">\n                <i class="icon_radio"></i>\n                <span class="lbl_content">精选单个商品</span>\n                <input type="radio" class="frm_radio js_cpc_type" value="1">\n            </label>\n            {/if}\n        </div>\n    </div>\n\n    <div class="js_cpc_cat_container"></div>\n\n    <div class="frm_control_group js_single_ad_container"></div>\n    \n    <p class="empty_tips js_single_loading" style="display:none;">\n        <i class="icon_loading_small white"></i>\n    </p>\n</div>\n';
});define("tpl/media/adtips.html.js",[],function(){
return'<div class="mpda_preview_area">\n    <div class="wx_preview_default">\n        <div class="wx_preview_default_hd">\n            <h3 class="wx_preview_default_title">{title}</h3>\n        </div>\n        <div class="mpda_tips_box">\n            <p class="tips_global">{=ad_info.ad_tips}</p>\n        </div>\n        <div class="mpda_wrp">\n            <div class="mpda_area show">\n                <div class="mpda_placeholder">\n                    <p class="mpda_tips">广告，也是生活的一部分</p>\n                </div>\n                <div class="mpda_inner">\n                    <div class="mpda_hd">\n                        <span class="mpda_main_img img_bg_cover" style="background-image:url({ad_info.ad_img})"></span> \n                    </div>\n                    <div class="mpda_bd"> \n                        <span class="mpda_logo img_bg_cover" style="background-image:url({ad_info.img})"></span>\n                        <div class="mpda_desc_box">\n                            <p class="mpda_title">{ad_info.nick_name}</p>\n                            <p class="mpda_details">提供的广告</p>\n                        </div>\n                        <a class="mpda_btn_more">\n                        {if ad_info.pt == 108 || ad_info.pt==116}\n                        查看详情                        {else if ad_info.pt == 109}\n                        下载应用                        {else if ad_info.pt == 110 || ad_info.pt==117}\n                        了解公众号                        {/if}\n                        </a>\n                        <a class="mpda_btn_about" href="javascript:void(0);">关于赞助广告</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class="mpda_msg_area">\n    <div class="admsg_confirm_info">\n        <div class="admsg_info_key">推广要求</div>\n        <div class="admsg_info_value">\n            <!-- {if ad_info.background}\n            {=ad_info.background}\n            {else}\n            无            {/if} -->\n            {if ad_info.background}\n            <div class="admsg_info_faq">\n                <div class="admsg_info_faq_bd">\n                    {=ad_info.background}\n                </div>\n            </div>\n            {/if}\n\n            {if ad_info.ad_request.length}\n            {each ad_info.ad_request as a}\n            {if a.field == \'no_compete\' || a.field == \'no_policy\'}\n            <div class="admsg_info_faq">\n                <div class="admsg_info_faq_hd">\n                    {a.title}\n                </div>\n                <div class="admsg_info_faq_bd">\n                    {each a.content as c}\n                    <span class="radius_tag">{c}</span>\n                    {/each}\n                </div>\n            </div>\n            {else}\n            <div class="admsg_info_faq">\n                <div class="admsg_info_faq_hd">\n                    {a.title}\n                </div>\n                <div class="admsg_info_faq_bd">\n                    {a.content}\n                </div>\n            </div>\n            {/if}\n            {/each}\n            {/if}\n\n            <!-- \n            <div class="admsg_info_faq">\n                <div class="admsg_info_faq_bd">\n                    xxxxxxxxxxxxxxxxxxxxxxx\n                </div>\n            </div>\n            <div class="admsg_info_faq">\n                <div class="admsg_info_faq_hd">\n                    禁止出现竞品\n                </div>\n                <div class="admsg_info_faq_bd">\n                    <span class="radius_tag">华为</span>\n                    <span class="radius_tag">小米</span>\n                </div>\n            </div>\n            <div class="admsg_info_faq">\n                <div class="admsg_info_faq_hd">\n                    禁止涉及敏感内容\n                </div>\n                <div class="admsg_info_faq_bd">\n                    <span class="radius_tag">政治</span>\n                    <span class="radius_tag">宗教</span>\n                </div>\n            </div>\n            <div class="admsg_info_faq">\n                <div class="admsg_info_faq_hd">\n                    其它\n                </div>\n                <div class="admsg_info_faq_bd">\n                    xxxxxxxxxxxxxxxxxxxxxxx\n                </div>\n            </div>\n            -->\n        </div>\n    </div>\n    <!--\n    {if ad_info.ad_request.length}\n    <div class="admsg_confirm_info">\n        <div class="admsg_info_key">服务要求</div>\n        <ol class="admsg_info_value">\n            {each ad_info.ad_request as a}\n            <li class="admsg_value_item">{a.title}：{a.content}</li>\n            {/each}\n        </ol>\n    </div>\n    {/if}\n    -->\n    <div class="admsg_confirm_info">\n        <div class="admsg_info_key">\n            {if ad_info.trade_mode == 1} <!-- 软文广告 -->\n            撰文要点            {else}\n            广告宣传语            {/if}\n        </div>\n        <div class="admsg_info_value">\n            {if ad_info.ad_tips}\n            {=ad_info.ad_tips}\n            {else}\n            无            {/if}\n        </div>\n    </div>\n</div>\n';
});define("tpl/media/admsg.html.js",[],function(){
return'<div class="admsg_item js_admsg_item" data-aid="{ad_id}">\n    <div class="admsg_item_hd">\n        <p class="admsg_info disabled_desc" {if insert_status == 0 || insert_status == 2}style="display: none;"{/if}>\n        {if insert_status == 1}\n            该广告卡片与图文消息位置不一致        {else if insert_status == 3 || insert_status == 4}\n            该广告卡片素材优化中        {/if}\n        </p>\n        <p class="admsg_info start_time">\n            投放时间：<span>{$changeTime play_time}</span>      \n            <span class="radius_tag">\n                {if trade_mode == 0}\n                广告推荐                {else}\n                内容定制                {/if}\n            </span>\n        </p>\n    </div>\n    <div class="admsg_item_bd">\n        <div class="mpda_wrp">\n            <div class="mpda_area show">\n                <div class="mpda_placeholder">\n                    <p class="mpda_tips">广告，也是生活的一部分</p>\n                </div>\n                <div class="mpda_inner">\n                    <div class="mpda_hd">\n                        <span class="mpda_main_img img_bg_cover" style="background-image:url({ad_img})"></span> \n                    </div>\n                    <div class="mpda_bd"> \n                        <span class="mpda_logo img_bg_cover" style="background-image:url({img})"></span>\n                        <div class="mpda_desc_box">\n                            <p class="mpda_title">{nick_name}</p>\n                            <p class="mpda_details">提供的广告</p>\n                        </div>\n                        <a class="mpda_btn_more">\n                        {if pt == 108||pt==116}\n                        了解详情                        {else if pt == 109}\n                        下载应用                        {else if pt == 110||pt==117}\n                        了解公众号                        {/if}\n                        </a>\n                        <a class="mpda_btn_about" href="javascript:void(0);">关于赞助广告</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="admsg_item_ft {if insert_status == 0 || insert_status == 2}js_cover{/if}">\n        <div class="cover_choosable icon_card_selected" {if insert_status != 0 && insert_status != 2}style="display: none;"{/if}></div>\n        <div class="cover_un_choosable" {if insert_status == 0 || insert_status == 2}style="display: none;"{/if}>\n        {if insert_status == 1}\n            该广告卡片与图文消息位置不一致        {else if insert_status == 3 || insert_status == 4}\n            该广告卡片素材优化中        {/if}\n        </div>\n    </div>\n</div> \n';
});define("tpl/media/dialog/admsg_dialog.html.js",[],function(){
return'<div><!-- popup组件也是感人，debug了一个多钟，发现外层没有div会调用3次 -->\n    <div class="processor_bar_wrp js_step">\n        <!-- 初始化进度条 -->\n    </div>\n    <div class="processor_panel">\n        <!-- 第一步：选择广告 -->\n        <div class="loading_box js_loading" style="display: none;">\n            <i class="icon_loading_small white"></i>\n            <span class="vm_box"></span>\n        </div>\n        <div class="processor_content_step admsg_choose js_step1_view" style="display: none;">\n            <div class="admsg_choose_bd">\n                \n                <div class="mpda_list_area">\n                    <div class="js_cpc_area" style="display:none;">\n                        <strong class="mpda_list_title">选择文中广告</strong>\n                        <div class="cpc_area ">\n                            <div class="appmsg_card_context mpda_cpc_context js_admsg_item">\n                                <div class="appmsg_card_bd mpda_cpc_bd" style="background-image:url(/mpres/htmledition/images/pic/media/mpda/pic_mpda_cpc_thumb.png);"></div>\n                                <div class="appmsg_card_ft mpda_cpc_ft">\n                                    <span class="dropdown_opr_tips">\n                                        广告\n                                        <span class="dropdown_opr_popover">xxxxx</span>\n                                    </span>\n                                </div>\n                                <a href="javascript:void(0);" class="appmsg_card_btn">\n                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAV1BMVEUAAAB2h9x4id51iNx1h9x1h9x2h9x2h912iNx9jOB2htx1htx1h9x1htx2h9x3iN94h9yDkup1h9x1htt2htx1h912ht14h9x2id58i+B3iNyAmeZ1htuK6q6xAAAAHHRSTlMAmS969uOvhWYY9/Dn1cw3Pwvp3MJvYVFFIToKgBX0wAAAALVJREFUKM+t0NsKgzAQhGFNk5h4tmfb//2fs2m3i0Txzrka+GBZpjgiU7i29aWctzI4frGntRiLZm0d4O+PqoF6yOSZJHxLdOAzOkEvLcA5oxJKaSPYHaqg25BeptKvb6+FTJ+kjQI+9ag0OaAxIk3q7q0UAS8S29R7sxwcbwLpG51FaUmn32zJwrhDZwjS+vXgHlz8D8czo6GGpnrcPbJOPrjGmmJtVsQNxSZzeanba5iKA/IBYyoQUSgoEyQAAAAASUVORK5CYII=" alt="">\n                                    去逛逛                                </a>\n                                <div class="card_mask_global"><i class="icon_card_selected_global"></i></div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="js_ad_list" style="display: none;">\n                        <strong class="mpda_list_title">选择互选广告</strong>\n                        <div class="admsg_list">\n                        <!-- \n                            admsg_item在js/tpl/media/admsg.html\n                            admsg_col有两列需要像视频消息一样依次堆到这两列中 \n                            ！！示例：\n                            <div class="admsg_col">\n                                <div class="admsg_item">第一个item</div>\n                                <div class="admsg_item">第三个item</div>\n                            </div>\n                            <div class="admsg_col">\n                                <div class="admsg_item">第二个item</div>\n                                <div class="admsg_item">第四个item</div>\n                            </div>\n                            哈哈哈哈这里Radeon你get了就可以删掉了\n                        -->\n                            <div class="admsg_col">\n\n                            </div>\n                            <div class="admsg_col">\n                                \n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="admsg_choose_ft">\n                <div class="pagination_wrp js_pagebar"></div>\n            </div>\n            <div class="processor_step_opr">\n                <span class="btn btn_primary btn_input js_next">\n                    <button type="button">下一步</button>\n                </span>\n            </div>\n        </div>\n        <!-- 第二步：广告条款 -->\n        <div class="processor_content_step admsg_confirm js_step2_view" style="display: none;">\n            <div class="mpda_send_panel js_adtips"></div>\n            <div class="processor_step_opr">\n                <div class="dialog_tool_tips js_dialog_mini_tips" style="display:none;"></div>\n                <span class="btn btn_default btn_input js_prev">\n                    <button type="button">上一步</button>\n                </span>\n                <span class="btn btn_primary btn_input js_submit">\n                    <button type="button">确定</button>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>\n';
});define("common/wx/upload.js",["widget/upload.css","biz_web/lib/webuploader.js","common/wx/dialog.js","common/wx/Tips.js","tpl/uploader.html.js"],function(e){
"use strict";
function i(e){
f.src="http://isdspeed.qq.com/cgi-bin/r.cgi?flag1=7839&flag2=4&flag3=5&1="+e;
}
e("widget/upload.css");
var n=e("biz_web/lib/webuploader.js"),a=e("common/wx/dialog.js"),t=e("common/wx/Tips.js"),o=e("tpl/uploader.html.js"),r=wx.T,s=wx.path.webuploader,l=~location.hostname.search(/^mp/)?"https://mp.weixin.qq.com":"",p={
2:{
accept:{
extensions:"bmp,png,jpeg,jpg,gif",
mimeTypes:"image/bmp,image/png, image/jpeg, image/jpg, image/gif"
},
fileSingleSizeLimit:5242880
},
3:{
accept:{
extensions:"mp3,wma,wav,amr",
mimeTypes:"audio/mp3,audio/wma,audio/wav,audio/amr"
},
fileSingleSizeLimit:5242880
},
4:{
accept:{
extensions:"rm,rmvb,wmv,avi,mpg,mpeg,mp4",
mimeTypes:"video/rm,video/rmvb,video/wmv,video/avi,video/mpg,video/mpeg,video/mp4"
},
fileSingleSizeLimit:20971520
},
5:{
accept:{
extensions:"pdf",
mimeTypes:"application/pdf"
},
fileSingleSizeLimit:10485760
},
6:{
accept:{
extensions:"bmp,png,jpeg,jpg,gif,pdf",
mimeTypes:"image/bmp,image/png, image/jpeg, image/jpg, image/gif,application/pdf"
},
fileSingleSizeLimit:5242880
},
7:{
accept:{
extensions:"bmp,jpeg,jpg,gif",
mimeTypes:"image/bmp, image/jpeg, image/jpg, image/gif"
},
fileSingleSizeLimit:5242880
},
8:{
accept:{
extensions:"bmp,png,jpeg,jpg",
mimeTypes:"image/bmp,image/png, image/jpeg, image/jpg"
},
fileSingleSizeLimit:5242880
},
9:{
accept:{
extensions:"xls",
mimeTypes:"application/vnd.ms-excel"
},
fileSingleSizeLimit:204800
},
10:{
accept:{
extensions:"xls",
mimeTypes:"application/vnd.ms-excel"
},
fileSingleSizeLimit:5242880
},
11:{
accept:{
extensions:"bmp,png,jpeg,jpg",
mimeTypes:"image/bmp,image/png, image/jpeg, image/jpg"
},
fileSingleSizeLimit:5242880
},
12:{
accept:{
extensions:"mp3,wma,wav,amr",
mimeTypes:"audio/mp3,audio/wma,audio/wav,audio/amr"
},
fileSingleSizeLimit:31457280
}
};
p[15]=p[4];
var m=function(e){
a.show({
type:"warn",
msg:"警告|"+e,
mask:!0,
buttons:[{
text:"确定",
click:function(){
this.remove();
}
}]
});
},c=function(e){
var i=n.Uploader;
0==i.support("flash")?m("<p>未安装或未正确配置flash插件，请检查后重试。<br><a href='http://get.adobe.com/cn/flashplayer/' target='_blank'>到adobe去下载flash插件</a></p>"):0==i.support()?m("<p>您的浏览器不支持上传</p>"):e.refresh();
},d=function(e){
e&&wx.jslog({
src:"common/wx/upload.js"
},null,e);
},u={
swf:s,
auto:!0,
pick:{
multiple:!0
},
fileNumLimit:20,
threads:3,
sendAsBinary:!1,
runtimeOrder:"html5,flash",
compress:{
width:1280,
height:1e8,
quality:90,
afterCompressSizeLimit:2097152,
compressSize:0,
resizeSize:2097152,
maxResolution:6e6,
noCompressIfLarger:!0
},
imageSize:!0,
chunked:!1,
duplicate:!0
},f=new Image,g={},h=function(e){
if(!e.url)throw"missing url";
var a,s,l,m=$('<ul class="upload_file_box" style="display:none"></ul>'),f=$(e.container);
f.on("click",function(){
Math.random()<.1&&d(12),c(a);
}).parent().append(m),function(){
0==n.Uploader.support("html5")&&0==n.Uploader.support("flash")&&((new Image).src="/misc/jslog?level=error&id=36&content=[pageurl:"+encodeURIComponent(location.href)+",ua:"+encodeURIComponent(window.navigator.userAgent)+"]");
}(),s={
server:wx.url(e.url+"&ticket_id="+wx.data.user_name+"&ticket="+wx.data.ticket+"&svr_time="+wx.data.time),
pick:{
id:f,
multiple:e.multi
},
fileNumLimit:e.queueSizeLimit
},l=p[e.type]||p[2],e=$.extend(!0,{},u,s,l,e);
e.server;
0==n.Uploader.support("html5")&&e.compress&&(e.compress.quality=70);
try{
a=n.create(e);
}catch(h){
if(!a)return;
}
return m.on("click",".js_cancel",function(){
var e=$(this).data("id");
a.cancelFile(e),$(this).hide();
}),a.on("beforeFileQueued",function(i){
return Math.random()<.1&&d(13),e.canContinueUpload&&!e.canContinueUpload()?!1:!(e.onSelect&&e.onSelect(null,i.id,i)===!1);
}),a.on("fileQueued",function(e){
var i={
id:e.id,
fileName:e.name,
size:n.formatSize(e.size)
};
m.append(r(o,i)).show();
}),a.on("fileDequeued",function(){
Math.random()<.1&&d(14),e.onCancel&&e.onCancel();
}),a.on("uploadProgress",function(i,n){
var a="#uploadItem%s".sprintf(i.id),t=m.find(a).find(".progress_bar_thumb");
t.width("%s%".sprintf(100*n)),1==n&&m.find(a).find(".js_cancel").remove(),e.onProgress&&e.onProgress(null,i.id,i,{
percentage:n
});
}),a.on("uploadStart",function(e){
g[e.id]=+new Date;
}),a.on("uploadSuccess",function(n,a,o){
if(Math.random()<.1&&d(16),a&&a.base_resp){
var r=+a.base_resp.ret;
if(0==r)Math.random()<.1&&(d(17),g[n.id]&&i(+new Date-g[n.id]));else switch(n.setStatus("invalid"),
r){
case-18:
case 200018:
t.err("页面停留时间过久，请刷新页面后重试！");
break;

case-20:
case 200020:
t.err("无法解释该图片，请使用另一图片或截图另存");
break;

case-13:
case 200013:
t.err("上传文件过于频繁，请稍后再试");
break;

case-10:
case 200010:
t.err("上传文件过大");
break;

case-22:
case 200022:
t.err("上传音频文件不能超过60秒");
break;

case-39:
case 200039:
t.err("上传图片高度（像素）与宽度（像素）的乘积不能超过600万");
break;

case 220001:
t.err('"素材管理"中的存储数量已达到上限，请删除后再操作。');
break;

case 220002:
t.err("你的图片库已达到存储上限，请进行清理。");
break;

default:
t.err("上传文件发送出错，请刷新页面后重试！");
}
}
e.onComplete&&e.onComplete(null,n.id,n,a,{
fileCount:o.numOfProgress+o.numOfQueue
});
}),a.on("uploadFinished",function(i){
this.reset(),m.fadeOut().html(""),g={},0==i.numOfInvalid&&i.numOfSuccess>0&&e.onAllComplete&&e.onAllComplete(null,{
errors:i.numOfCancel+i.numOfInvalid+i.numOfUploadFailed+i.numofDeleted+i.numofInterrupt,
filesUploaded:i.numOfSuccess
});
}),a.on("uploadError",function(){
Math.random()<.1&&d(15),e.onError&&e.onError();
}),a.on("error",function(i,a,o){
switch("object"==typeof a&&(o=a),i){
case"Q_EXCEED_NUM_LIMIT":
t.err("一次上传最多只能上传%s个文件".sprintf(a));
break;

case"F_EXCEED_SIZE":
t.err("文件大小不能超过%s".sprintf(n.formatSize(a,"0")));
break;

case"F_EXCEED_COMPRESS_SIZE":
t.err("图片压缩后过大，请缩小图片尺寸再试"),d(42);
break;

case"Q_TYPE_DENIED":
t.err(e.errTypeMsg||"文件必须为以下格式：%s".sprintf(e.accept.extensions).replace(/,/g,", "));
}
}),a;
},b=function(e){
return function(i){
return i.url=e,h(i);
};
},w=function(e){
return function(i){
return wx.url(e+"&ticket_id="+wx.data.user_name+"&ticket="+wx.data.ticket+"&id="+i);
};
};
return{
uploadFile:h,
uploadBizFile:b(l+"/cgi-bin/filetransfer?action=upload_material&f=json"),
uploadTmpFile:b(l+"/cgi-bin/filetransfer?action=preview&f=json"),
uploadCdnFile:b(l+"/cgi-bin/filetransfer?action=upload_cdn&f=json"),
uploadShopFile:b(l+"/merchant/goodsimage?action=uploadimage"),
uploadShopUnsaveFile:b(l+"/merchant/goodsimage?action=uploadimage&save=0"),
uploadVideoCdnFile:b(l+"/cgi-bin/filetransfer?action=upload_video_cdn&f=json"),
uploadRegisterFile:b(l+"/acct/realnamesubmit?type=2&action=file_set"),
uploadUpgradeFile:b(l+"/acct/servicetypeupgrade?type=2&action=file_set"),
uploadPoiFile:b(l+"/misc/setlocation?action=upload"),
mediaFile:b(l+"/cgi-bin/filetransfer?action=bizmedia"),
uploadCdnFileFromAd:function(e){
return b(l+"/cgi-bin/filetransfer?action=upload_cdn_check_size&f=json&width="+e.w+"&height="+e.h+"&limit_size="+e.size);
},
uploadImageLibFile:function(e){
return e.url=l+"/cgi-bin/filetransfer?action=upload_material&f=json","undefined"!=typeof e.scene&&(e.url+="&scene="+e.scene),
1==e.doublewrite&&(e.url+="&writetype=doublewrite&groupid="+(e.groupid||1)),h(e);
},
uploadCdnFileWithCheck:function(e){
var i={
height:0,
width:0,
size:0,
min_height:0,
min_width:0,
min_size:0
};
e=$.extend(!0,i,e);
var n=[];
for(var a in e)n.push(encodeURIComponent(a)+"="+encodeURIComponent(e[a]));
return b(l+"/cgi-bin/filetransfer?action=upload_cdn_check_range&f=json&"+n.join("&"),"tmpfile");
},
uploadTmpFileWithCheck:function(e){
var i={
height:0,
width:0,
size:0,
min_height:0,
min_width:0,
min_size:0
};
e=$.extend(!0,i,e);
var n=[];
for(var a in e)n.push(encodeURIComponent(a)+"="+encodeURIComponent(e[a]));
return b(l+"/cgi-bin/filetransfer?action=preview_check_range&f=json&"+n.join("&"));
},
tmpFileUrl:w(l+"/cgi-bin/filetransfer?action=preview"),
mediaFileUrl:w(l+"/cgi-bin/filetransfer?action=bizmedia"),
multimediaFileUrl:w(l+"/cgi-bin/filetransfer?action=multimedia")
};
});define("tpl/media/weapp_dialog_content.html.js",[],function(){
return'{each list as item}\n<li class="weapplink_item selected">\n    <div class="weapplink_item_inner js_weapplink_item_inner" data-appid="{item.appid}">\n        <div class="weapplink_info">\n            <img class="weapplink_avatar" src="{item.pic_url}">\n            <strong class="weapplink_name" title="">{item.nick_name}</strong>\n        </div>\n        <div class="weapplink_select_mask js_weapplink_select_mask" style="display: none;">\n            <i class="icon_card_selected">已选择</i>\n        </div>\n    </div>\n</li>\n{/each}';
});define("tpl/media/weapp_dialog.html.js",[],function(){
return'<div class="menu_link_weapp js_weapp_select">\n    <div class="processor_bar_wrp js_weapp_select_step">\n        <!-- 初始化进度条 -->\n    </div>\n    <div class="processor_step_content js_weapp_select_step1" style="display: block"><!-- 第一步：选择小程序卡片 -->\n        <div class="step_content_bd">\n            <div class="link_weapp_desc">\n                <span class="js_weapplink_hint_select" style="display: none">请选择已关联的小程序</span><!--\n                --><span class="js_weapplink_hint_none link_weapp_empty_desc" style="display: none">无已关联的小程序</span> &nbsp;\n            </div>\n            <div class="link_weapp_wrp">\n                <div class="link_weapp_loading js_weapplink_loading" style="display: block">\n                    <i class="icon_loading_small white"></i>\n                </div>\n                <div class="link_weapp_box weapplinks_box">\n                    <ul class="wechat_list weapplink_list js_weapplink_list" style="display: none">\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class="step_content_ft">\n            <span class="btn btn_primary btn_input js_weapp_select_next_step">\n                <button type="button">下一步</button>\n            </span>\n            <span class="btn btn_default btn_input js_weapp_select_cancel">\n                <button type="button">取消</button>\n            </span>\n        </div>\n    </div>\n    <div class="processor_step_content step2 js_weapp_select_step2" style="display: none"><!-- 第二步：选择插入卡片的样式 -->\n        <div class="step_content_bd">\n            <div class="" style="display:none">\n                <span class="">请确认插入卡片的样式</span>\n            </div>\n            <div class="weapp_type_select_area" style="text-align: center;margin-right: 0;">\n                <!-- <div class="weapp_type_box">\n                    <label class="frm_radio_label">\n                        <i class="icon_radio"></i>\n                        <span class="lbl_content">小程序首页</span>\n                        <input type="radio" name="add_type" class="frm_radio" value="1">\n                        <span class="type_preview" style="background-image: url(\'https://mmbiz.qlogo.cn/mmbiz_jpg/pxoYvTCGD3UHyRf2omC3RY6g1wVwSDx1qJhy1XZ8UllRFXlvaVO2J3uic2W2qLsjEH8a2qUtHXlicibSN5nk9rgdw/0?wx_fmt=jpeg\');"></span>\n                    </label>\n                </div> -->\n                <span class="type_preview" style="background-image: url(\'https://mmbiz.qlogo.cn/mmbiz_png/0PGibvic5Lia7q2q7KEP2A216OUmc6WjpXq3kuCOINOJ0tVEibrVVhWX4CUc12VrgjibsN0ibeuM10IicNsCsibxx2picww/0?wx_fmt=png\');"></span>\n                <!-- <div class="weapp_type_box">\n                    <label class="frm_radio_label">\n                        <i class="icon_radio"></i>\n                        <span class="lbl_content">自定义路径</span>\n                        <input type="radio" name="add_type" class="frm_radio" value="1">\n                        <span class="type_preview" style="background-image: url(\'https://mmbiz.qlogo.cn/mmbiz_png/pxoYvTCGD3UHyRf2omC3RY6g1wVwSDx1pvgrFExpicZB8pxEhxAv6RaPRyjaD6IYHJ7yUHYFsjA1kx2Ptr5eXgg/0?wx_fmt=png\');"></span>\n                    </label>\n                </div> -->\n            </div>\n        </div>\n        <div class="step_content_ft">\n            <span class="btn btn_default btn_input js_weapp_select_prev_step">\n                <button type="button">上一步</button>\n            </span>\n            <span class="btn btn_primary btn_input js_weapp_select_next_step">\n                <button type="button">下一步</button>\n            </span>\n        </div>\n    </div>\n    <!-- <div class="processor_step_content step3 js_weapp_select_step3" style="display: none">\n        <div class="step_content_bd">\n            <div class="link_weapp_desc">\n                <span class="">订阅者点击小程序卡片会打开小程序首页</span>\n            </div>\n            <div class="frm_control_group show_value">\n                <label for="" class="frm_label">小程序首页</label>\n                <div class="frm_controls">\n                    <span class="frm_input_box">\n                        /weixin/app/com\n                    </span>\n                </div>\n            </div>\n            <div class="frm_control_group">\n                <label for="" class="frm_label">备用网页</label>\n                <div class="frm_controls">\n                    <span class="frm_input_box">\n                        <input type=\'text\' id=\'\' value="" class=\'frm_input\' name=\'\' placeholder=\'请输入网页链接\'>\n                    </span>\n                    <p class=\'frm_msg fail\' id=\'\'>\n                        <span class=\'frm_msg_content\'></span>\n                    </p>\n                    <p class=\'frm_tips\'>旧版微信客户端无法支持小程序，用户点击菜单时将会打开备用网页</p>\n                </div>\n            </div>\n        </div>\n        <div class="step_content_ft">\n            <span class="btn btn_default btn_input js_weapp_select_prev_step">\n                <button type="button">上一步</button>\n            </span>\n            <span class="btn btn_primary btn_input js_weapp_select_confirm">\n                <button type="button">确定</button>\n            </span>\n        </div>\n    </div> -->\n    <div class="processor_step_content step4 js_weapp_select_step4" style="display: none"><!-- 第三步：填写详细信息 打开自定义页面的情况 -->\n        <div class="step_content_bd">\n            <div class="step_content_bd_inner">\n                <div class="link_weapp_desc">\n                    <span class="">点击小程序卡片会打开小程序路径指定的页面</span>\n                </div>\n                <div class="frm_control_group">\n                    <label for="" class="frm_label">小程序名称</label>\n                    <div class="frm_controls frm_vertical_pt js_name"></div>\n                </div>\n                <div class="frm_control_group">\n                    <label for="" class="frm_label">小程序路径<span class="js_weapp_type4">(选填)</span></label>\n                    <div class="frm_controls">\n                        <span class="frm_input_box">\n                            <input type=\'text\' id=\'\' value="" class=\'frm_input\' name=\'path\' placeholder=\'\'>\n                        </span>\n                        <p class=\'frm_msg fail\' id=\'\'>\n                            <span class=\'frm_msg_content\'></span>\n                        </p>\n                        <p class=\'frm_tips js_weapp_type4\' style="display: none;">小程序可按“？参数”格式填入参数或不填写此信息</p>\n                    </div>\n                </div>\n                <div class="frm_control_group">\n                    <label for="" class="frm_label">展示方式</label>\n                    <div class="frm_controls frm_vertical_pt">\n                        <input data-label="文字" class="frm_radio js_weapp_display_way" type="radio" value="text" checked>\n                        <input data-label="图片" class="frm_radio js_weapp_display_way" type="radio" value="image">\n                        <input data-label="小程序卡片" class="frm_radio js_weapp_display_way" type="radio" value="card">\n                        <p class=\'frm_msg fail\' id=\'\'>\n                            <span class=\'frm_msg_content\'></span>\n                        </p>\n                        <p class=\'frm_tips\'></p>\n                    </div>\n                </div>\n                <div class="frm_control_group js_weapp_text_way js_weapp_way">\n                    <label for="" class="frm_label">文字内容</label>\n                    <div class="frm_controls">\n                        <span class="frm_input_box">\n                            <input type=\'text\' id=\'\' value="" class=\'frm_input\' name=\'content\' placeholder=\'\'>\n                        </span>\n                        <p class=\'frm_msg fail\' id=\'\'>\n                            <span class=\'frm_msg_content\'></span>\n                        </p>\n                        <p class=\'frm_tips\'>点击文字会打开小程序指定路径的页面</p>\n                    </div>\n                </div>\n                <div class="frm_control_group js_weapp_image_way js_weapp_way" style="display:none;">\n                    <label for="" class="frm_label">上传图片</label>\n                    <div class="frm_controls file-control frm_vertical_pt">\n                        <div class="upload_box">\n                            <p class="upload_tips">点击图片会打开小程序指定路径的页面。图片规格不限，大小限制为2M。</p>\n                            <span class="upload_area">\n                                <a href="javascript:;" id="js_weapp_link_image_upload" class="btn btn_upload btn_default">上传图片</a>\n                                <input type=\'hidden\' value="" class=\'frm_input\' name=\'image\'>\n                            </span>\n                        </div>\n                        <div class="upload_preview_area js_weapp_link_image_cover" style="display:none">\n                            <span class="cover_preview js_weapp_link_image_preview" style="background-image: url(\'\');" style="display: none;">\n                                <div class="card_mask_global hover_mask">\n                                    <a class="icon20_common del_media_white js_weapp_link_image_remove" href="javascript:;" onclick="return false;">删除</a>\n                                </div>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <div class="frm_control_group js_weapp_card_way js_weapp_way" style="display:none;">\n                    <label for="" class="frm_label">卡片标题</label>\n                    <div class="frm_controls">\n                        <span class="frm_input_box">\n                            <input type=\'text\' id=\'js_weapp_card_title_input\' value="" class=\'frm_input\' name=\'title\' placeholder=\'\'>\n                        </span>\n                        <p class=\'frm_msg fail\' id=\'\'>\n                            <span class=\'frm_msg_content\'></span>\n                        </p>\n                        <p class=\'frm_tips\'></p>\n                    </div>\n                </div>\n                <!-- <div class="frm_control_group js_weapp_card_way js_weapp_way" style="display:none;">\n                    <label for="" class="frm_label">卡片图片</label>\n                    <div class="frm_controls file-control frm_vertical_pt">\n                        <div class="upload_box">\n                            <p class="upload_tips">图片尺寸必须为1080*864像素，文件大小限制为2M</p>\n                            <span class="upload_area">\n                                <a href="javascript:;" data-key="" id="weapp_select_upload" class="btn btn_upload btn_default">上传图片</a>\n                                <input type=\'hidden\' value="" class=\'frm_input\' name=\'imageUrl\'>\n                            </span>\n                        </div>\n                        <div class="upload_preview_area js_weapp_select_cover" style="display:none">\n                            <img id="review-image-url" src="" style="height: 140px; width: 180px;">\n                            <span class="cover_preview js_weapp_select_cover_preview" style="background-image: url(\'\');" style="display: none;">\n                                <div class="card_mask_global hover_mask">\n                                    <a class="js_removeCover icon20_common del_media_white js_weapp_select_cover_remove" title="删除封面图" href="javascript:void(0);" onclick="return false;">删除</a>\n                                </div>\n                            </span>\n                        </div>\n                    </div>\n                </div> -->\n                <div class="frm_control_group frm_weapp-card js_weapp_card_way js_weapp_way" style="display: none;">\n                    <label class="frm_label">卡片样式</label>\n                    <div class="frm_controls">\n                        <div class="card-preview__area">\n                            <span class="weapp_card app_context appmsg_card_context">\n                                <span class="weapp_card_bd">\n                                    <span class="weapp_card_profile flex_context">\n                                        <span class="radius_avatar weapp_card_avatar">\n                                            <img class="js_weapp_icon" src="">\n                                        </span>\n                                        <span class="weapp_card_nickname flex_bd js_weapp_name"></span>\n                                    </span>\n                                    <span class="weapp_card_info">\n                                        <span class="weapp_card_title js_weapp_card_title"></span>\n                                        <!-- 图片预览区域 -->\n                                        <!-- 上传图片前: 显示上传按钮和提示-->\n                                        <span class="weapp_card_thumb_wrp js_before_preview">\n                                            <span class="upload-image_before__wrp">\n                                                <span class="upload_area">\n                                                    <a href="javascript:;" data-key="" id="weapp_select_upload" class="btn btn_primary">上传图片</a>\n                                                    <input type=\'hidden\' value="" class=\'frm_input\' name=\'imageUrl\'>\n                                                </span>\n                                                <p class="upload_tips">建议图片尺寸为5:4，大小不超过2M，暂不支持动图</p>\n                                            </span>\n                                        </span>\n                                        <!-- 上传图片后(默认加了display:none): 显示预览图片, hover显示重新上传按钮 -->\n                                        <span class="weapp_card_thumb_after_wrp js_after_preview" style="display: none; overflow: hidden; width: 240px; height: 180px;">\n                                            <img class="weapp_card_thumb_preview js_after_preview_img" src="http://mmbiz.qpic.cn/mmbiz_jpg/cVgP5bCElFiaydp22DKRJtIZJrjDzvY68ESXv50m84IsdV0cx8p7h9I4gNWLHBCRKmp15uDvicdCLZqicN1DhB3yw/0?wx_fmt=jpeg" alt="">\n                                            <span class="upload-image_after__wrp">\n                                                <span class="upload_area">\n                                                    <a href="javascript:;" data-key="" id="weapp_select_upload_reset" class="btn btn_default">重新上传</a>\n                                                    <input type=\'hidden\' value="" class=\'frm_input\' name=\'imageUrl\'>\n                                                </span>\n                                                <span class="vm_box"></span>\n                                            </span>\n                                        </span>\n                                        <!-- 图片预览区域 end -->\n                                    </span>\n                                </span>\n                                <span class="weapp_card_ft">\n                                    <span class="weapp_card_logo"><img class="icon_weapp_logo_mini" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAb1BMVEUAAAB4it11h9x2h9x2h9x2htx8j+R8i+B1h9x2h9x3h92Snv91htt2h9x1h9x4h9x1h9x1h9x2idx1h9t2h9t1htt1h9x1h9x1htx2h9x1h912h9x4h913iN17juOOjuN1iNx2h9t4h958i+B1htvejBiPAAAAJHRSTlMALPLcxKcVEOXXUgXtspU498sx69DPu5+Yc2JeRDwbCYuIRiGBtoolAAAA3ElEQVQoz62S1xKDIBBFWYiFYImm2DWF///G7DJEROOb58U79zi4O8iOo8zuCRfV8EdFgbYE49qFQs8ksJInajOA1wWfYvLcGSueU/oUGBtPpti09uNS68KTMcrQ5jce4kmN/HKn9XVPAo702JEdx9hTUrWUqVrI3KwUmM1NhIWMKdwiGvpGMWZOAj1PZuzAxHwhVSplrajoseBnbyDHAwvrtvKKhdqTtFBkL8wO5ijcsS3G1JMNvQ5mdW7fc0x0+ZcnlJlZiflAomdEyFaM7qeK2JahEjy5ZyU7jC/q/Rz/DgqEuAAAAABJRU5ErkJggg==" alt="">小程序</span>\n                                </span>\n                            </span>\n                        </div>\n\n                        <!-- 图片编辑区域，默认隐藏，上传图片之后才显示 -->\n                        <div class="edit-image__area js_js_review-box" style="display: none;">\n                            <p class="tips_global edit-image__tips">裁剪图片</p>\n                            <img class="edit-image__preview js_review-image-url" src="http://mmbiz.qpic.cn/mmbiz_jpg/cVgP5bCElFiaydp22DKRJtIZJrjDzvY68ESXv50m84IsdV0cx8p7h9I4gNWLHBCRKmp15uDvicdCLZqicN1DhB3yw/0?wx_fmt=jpeg">\n                        </div>\n                    </div>\n                </div>\n                <!-- <div class="frm_control_group">\n                    <label for="" class="frm_label">备用网页</label>\n                    <div class="frm_controls">\n                        <span class="frm_input_box">\n                            <input type=\'text\' id=\'\' value="" class=\'frm_input\' name=\'\' placeholder=\'请输入网页链接\'>\n                        </span>\n                        <p class=\'frm_msg fail\' id=\'\'>\n                            <span class=\'frm_msg_content\'></span>\n                        </p>\n                        <p class=\'frm_tips\'>旧版微信客户端无法支持小程序，用户点击菜单时将会打开备用网页</p>\n                    </div>\n                </div> -->\n            </div>\n        </div>\n        <div class="step_content_ft">\n            <span class="btn btn_default btn_input js_weapp_select_prev_step">\n                <button type="button">上一步</button>\n            </span>\n            <span class="btn btn_primary btn_input js_weapp_select_confirm">\n                <button type="button">确定</button>\n            </span>\n        </div>\n    </div>\n</div>\n';
});define("common/wx/media/audio.js",["biz_web/lib/soundmanager2.js","tpl/media/audio.html.js","tpl/media/appmsg_edit/voice_article_content.html.js","tpl/media/qqmusicaudio.html.js","widget/media.css","common/qq/Class.js","biz_common/moment.js"],function(i,t,s){
"use strict";
var e=wx.T,o=i("biz_web/lib/soundmanager2.js"),n=i("tpl/media/audio.html.js"),l=i("tpl/media/appmsg_edit/voice_article_content.html.js"),d=i("tpl/media/qqmusicaudio.html.js"),a=(i("widget/media.css"),
i("common/qq/Class.js")),u=i("biz_common/moment.js"),m=null,c=null,h="wxAudioPlaying",r=function(){
c=o,c.setup({
url:"/mpres/zh_CN/htmledition/plprecorder/biz_web/",
preferFlash:!1,
debugMode:!1
});
};
$(window).load(function(){
r();
});
var p={
id:"",
source:"",
file_id:""
},f=a.declare({
init:function(i){
var t=this;
$.extend(!0,t,p,i),this.soundId=this.id||this.file_id,this.title=this.title||this.name,
this.play_length="undefined"==typeof this.play_length||0==this.play_length?"未知时长":u.unix(this.play_length/1e3).format("mm:ss");
var s;
this.qqmusictpl?s=$(e(d,t)):this.shareTpl?(t.share_voiceinfo=[{
title:t.title,
duration:t.play_length
}],h="preview_audio_playing",s=$('<div data-type="3" class="js_previe_media_box"></div>').html(e(l,t))):s=$(e(n,t)),
t.dom=$(i.selector).append(s).data("opt",i),s.click(function(i){
i.target.className.indexOf("js_replace_media")<0&&t.toggle();
});
},
getAudioURL:function(){
if(this.qqmusicurl)return this.qqmusicurl;
var i=this.source,t=this.id,s=this.file_id;
return i&&(i="&source="+i),wx.url(this.voice_encode_fileid?"https://res.wx.qq.com/voice/getvoice?mediaid="+this.voice_encode_fileid:"/cgi-bin/getvoicedata?msgid={id}&fileid={fileid}{source}".format({
id:t,
fileid:s,
source:i
}));
},
isPlaying:function(){
return null!=m&&this==m;
},
toggle:function(){
this.isPlaying()?this.stop():(m&&m.stop(),this.play());
},
play:function(i){
var t=this;
this.isPlaying()||(this.dom.addClass(h),!!m&&m.dom.removeClass(h),m=this,this.sound||(!c&&r(),
this.sound=c.createSound({
id:t.soundId,
url:t.getAudioURL(),
onfinish:function(){
m&&(m.dom.removeClass(h),m=null);
},
onload:function(i){
i||c.unload(t.soundId),!i&&m&&(m.dom.removeClass(h),m.sound=null,m=null);
},
onstop:function(){
t.dom.removeClass(h);
}
})),c.play(this.soundId),i&&i(this));
},
stop:function(i){
this.isPlaying()&&(m=null,this.dom.removeClass(h),c.stop(this.soundId),i&&i(this));
},
stopAll:function(i){
m=null,c.stopAll(),i&&i(this);
},
stopCur:function(i){
m&&m.soundId&&c.stop(m.soundId),m=null,i&&i(this);
}
});
s.exports=f;
});define("tpl/media/dialog/audiomsg_layout.html.js",[],function(){
return'{if msg}\n<div class="media_list_tips_wrp tips_global">\n    <span class="tips">{msg}</span>\n    <span class="vm_box"></span>\n</div>\n{else}\n<div class="qqmusic_list">\n    <div class="thead group">\n        <span class="table_cell qqmusic_thumb_info">歌曲</span>\n        <span class="table_cell qqmusic_songtime">时长</span>\n        <span class="table_cell qqmusic_source">版权来源</span>\n        <span class="table_cell last_child no_extra qqmusic_audioplay">试听</span>\n    </div>\n    {each list as item index}\n    <label class="frm_radio_label qqmusic_item">\n        <i class="icon_radio"></i>\n        <span class="lbl_content">\n            <span class="qqmusic_meta qqmusic_thumb_info">\n                <span class="songname">{item.songname}</span>\n                <span class="singername">{item.singername}</span>\n            </span>\n            <span class="qqmusic_meta qqmusic_songtime">{item.duration_str}</span>\n            <!--begin 版权来源-->\n            <span class="qqmusic_meta qqmusic_source">{item.vendor_str}</span>\n            <!--end 版权来源-->\n            <span class=\'js_qqmusic_audioplay qqmusic_meta qqmusic_audioplay\' data-index="{index}"></span>\n        </span>\n        <input type="radio" class="frm_radio js_audio_music_item_radio" value=\'{index}\'>\n    </label>\n    {/each}\n</div>\n<div class="js_music_pagebar pagination_wrp"></div>\n{/if}\n';
});