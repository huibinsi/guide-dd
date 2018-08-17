define("resp_types/base_resp.rt.js",[],function(){
"use strict";
return{
base_resp_R:{
ret_R:"number",
err_msg:"string"
}
};
});define("tpl/media/keyword_dialog.html.js",[],function(){
return'<div class="keywords_dialog">\n    <div class="msg_area">\n        <div class="icon_area">\n            <i class="icon_msg info"></i>\n        </div>\n        <div class="text_area">\n            <h4 class="keyword_tips_title">{=title}</h4>\n            <p class="keyword_tips_desc">{=desc}</p>\n        </div>\n    </div>\n    <div class="keyword_list">\n        {each words as w}\n        <span class="match_keyword">{w}</span>\n        {/each}\n    </div>\n    <div class="keyword_choose">\n        <div class="weui-desktop-form__control-group weui-desktop-form__control-group_offset">\n            <div class="weui-desktop-form__controls">\n                <label class="weui-desktop-form__check-label">\n                <input type="radio" class="weui-desktop-form__radio js_checkbox" value="1">\n                <i class="weui-desktop-icon-radio"></i>\n                <span class="weui-desktop-form__check-content">\n                    关键词打码<br>\n                    <span class="keyword_choose_desc">图文消息中命中内容将被替换为"*****"。你可以继续保存或修改此内容。</span>\n                </span>\n                </label>\n            </div>\n        </div>\n        <div class="weui-desktop-form__control-group weui-desktop-form__control-group_offset">\n            <div class="weui-desktop-form__controls">\n                <label class="weui-desktop-form__check-label">\n                <input type="radio" class="weui-desktop-form__radio js_checkbox" value="0">\n                <i class="weui-desktop-icon-radio"></i>\n                <span class="weui-desktop-form__check-content">\n                    继续保存或发布该图文消息<br>\n                    <span class="keyword_choose_desc">将不会替换图文消息中的命中内容，发出后将可能因此被屏蔽、删除。</span>\n                </span>\n                </label>\n            </div>\n        </div>\n    </div>\n</div>';
});define("common/wx/media/reprintArticleData.js",[],function(){
"use strict";
function e(e,r){
var i=r.source_info?r.source_info.source_can_reward:r.source_can_reward;
return i&&(e+="，赞赏文章作者"),e+="</div>";
}
var r=function(r){
return $.each(r.list,function(i,t){
switch(t.source_info?t.source_info.source_reprint_status:t.source_reprint_status){
case"EN_SOURCE_REPRINT_STATUS_REPRINT_WITH_MODIFY":
case"EN_SOURCE_REPRINT_STATUS_REPRINT_WITHOUT_MODIFY":
t.reprintDesc='<div>开放转载<i class="icon-wenhao js_open_reprint_tips"></i></div>',
"EN_CANNOT_OPEN_AD_REPRINT"===r.openAdReprintStatus?(t.pubType=1,t.reprintDesc+='<div class="gray gray-content">无法转载，不符合开放转载条件</div>'):(t.pubType=0,
t.reprintDesc+='<div class="gray gray-content">不可修改，显示转载来源',t.reprintDesc=e(t.reprintDesc,t),
t.grayText="initiative"===r.type?"用户在转载公众号内进行阅读":"将清空对原文的修改");
break;

case"EN_SOURCE_REPRINT_STATUS_IN_WHITE_LIST_WITH_SOURCE":
t.pubType=0,t.reprintDesc='<div>已纳入白名单</div>                              <div class="gray gray-content">可修改，显示转载来源',
t.reprintDesc=e(t.reprintDesc,t),t.grayText="将保留对原文的修改";
break;

case"EN_SOURCE_REPRINT_STATUS_IN_WHITE_LIST_WITHOUT_SOURCE":
t.pubType=0,t.reprintDesc='<div>已纳入白名单</div>                              <div class="gray gray-content">可修改，不显示转载来源',
t.reprintDesc=e(t.reprintDesc,t),t.grayText="将保留对原文的修改";
break;

case"EN_SOURCE_REPRINT_STATUS_UNDECLARE":
switch(t.pubType=-1,t.source_type){
case 2:
case 3:
t.reprintDesc="<div>时事新闻</div>";
break;

case 4:
t.reprintDesc="<div>违规内容</div>";
break;

case 9:
t.reprintDesc="<div>未声明原创</div>";
}
break;

case"EN_SOURCE_REPRINT_STATUS_REJECT_REPRINT":
t.pubType=1,t.reprintDesc="<div>非开放转载</div>";
break;

case"EN_SOURCE_REPRINT_STATUS_REPRINT_FROM_SELF":
t.pubType=1,t.reprintDesc="<div>无法转载，不能转载自己的文章</div>";
break;

default:
t.pubType=1,t.reprintDesc="";
}
"function"==typeof r.cb&&r.cb(i,t,r.openAdReprintStatus);
}),r.list;
};
return r;
});define("common/wx/media/chooseOriArticlePubPopover.js",["common/wx/popover.js","tpl/media/chooseOriArticlePubPopover.html.js"],function(e){
"use strict";
var _=e("common/wx/popover.js"),t=e("tpl/media/chooseOriArticlePubPopover.html.js");
return function(e){
var T;
switch(e.sourceReprintStatus){
case"EN_SOURCE_REPRINT_STATUS_REPRINT_WITH_MODIFY":
case"EN_SOURCE_REPRINT_STATUS_REPRINT_WITHOUT_MODIFY":
T="initiative"===e.type?"用户在转载公众号内进行阅读":"将清空对原文的修改，在文章底部展示转载来源，并支持赞赏文章作者";
break;

case"EN_SOURCE_REPRINT_STATUS_IN_WHITE_LIST_WITH_SOURCE":
case"EN_SOURCE_REPRINT_STATUS_IN_WHITE_LIST_WITHOUT_SOURCE":
T="将保留对原文的修改";
}
var o=!0;
"EN_SOURCE_REPRINT_STATUS_IN_WHITE_LIST_WITH_SOURCE"===e.sourceReprintStatus||"EN_SOURCE_REPRINT_STATUS_IN_WHITE_LIST_WITHOUT_SOURCE"===e.sourceReprintStatus?o=!1:"EN_CANNOT_OPEN_AD_REPRINT"===e.openAdReprintStatus||"EN_SOURCE_REPRINT_STATUS_REPRINT_WITH_MODIFY"!==e.sourceReprintStatus&&"EN_SOURCE_REPRINT_STATUS_REPRINT_WITHOUT_MODIFY"!==e.sourceReprintStatus||(o=!1);
var r=new _({
dom:e.target,
container:e.target,
content:template.compile(t)({
type:e.type,
reprintMsg:T,
value:e.value,
onlyShare:o,
source_type:e.source_type,
source_url_encode:e.source_url_encode,
article_url_encode:e.article_url_encode,
article_title_encode:e.article_title_encode,
token:wx.data.t,
lang:wx.data.lang
}),
hideIfBlur:!0,
onHide:function(){
this.remove();
}
}),R=r.getDom();
return R.find(".js_pubWay").checkbox({
onChanged:function(_){
var t=1*_.val();
if(R.find(".js_msg").hide().eq(t).show(),0===t)switch(e.textDom&&e.textDom.text("转载"),
e.sourceReprintStatus){
case"EN_SOURCE_REPRINT_STATUS_REPRINT_WITH_MODIFY":
case"EN_SOURCE_REPRINT_STATUS_REPRINT_WITHOUT_MODIFY":
e.grayDom&&e.grayDom.text("initiative"===e.type?"用户在转载公众号内进行阅读":"将清空对原文的修改");
break;

case"EN_SOURCE_REPRINT_STATUS_IN_WHITE_LIST_WITH_SOURCE":
case"EN_SOURCE_REPRINT_STATUS_IN_WHITE_LIST_WITHOUT_SOURCE":
e.grayDom&&e.grayDom.text("将保留对原文的修改");
}else e.textDom&&e.textDom.text("分享"),e.grayDom&&e.grayDom.text("用户须跳转至原文阅读");
"function"==typeof e.change&&e.change(t,e.sourceReprintStatus,e.openAdReprintStatus);
}
}),r;
};
});define("tpl/media/reprint_tips_popover.html.js",[],function(){
return'<p style="color: rgb(34, 34, 34);">符合条件的公众号都可以转载此文章。</p>\n<p style="color: rgb(34, 34, 34);">开放转载将会以原文样式发送，显示转载来源，并支持赞赏文章作者。</p>\n<p><a href="/cgi-bin/announce?action=getannouncement&key=11526652746MV5HH&version=1&lang=zh_CN&platform=2" target="_blank">了解更多转载规则</a></p>';
});define("tpl/media/sharecopyright_item.html.js",[],function(){
return'<table class="weui-desktop-table sharecopyright-table">\n  <thead class="weui-desktop-table__hd">\n    <tr>\n        <th></th>\n        <th>文章</th>\n        <th>原创公众号</th>\n        <th>转载设置</th>\n        <th>发送方式</th>\n    </tr>\n    </thead>\n    <tbody class="weui-desktop-table__bd">\n    {each data as item index}\n        <tr>\n          <td>\n            <input type="radio" name="ori_article_item" data-index="{index}" class="frm_radio" data-pub="{item.pubType}" data-source_reprint_status="{item.source_reprint_status}">\n          </td>\n          <td>\n            <a class="black-link" href="{item.url}" target="_blank">{item.title}</a>\n          </td>\n          <td>\n            <!-- <img class="" src="{item.head_img_url || \'http://mmbiz.qpic.cn/mmbiz/a5icZrUmbV8p5jb6RZ8aYfjfS2AVle8URwBt8QIu6XbGewB9wiaWYWkPwq4R7pfdsFibuLkic16UcxDSNYtB8HnC1Q/0\'}" alt="{item.nickname}"> -->\n            {item.nickname}\n          </td>\n          <td>{=item.reprintDesc}</td>\n          <td>\n            <span class="js_choosePublishWay js_enable" data-open_ad_reprint_status="{openAdReprintStatus}" data-source_reprint_status="{item.source_reprint_status}" data-pub="{item.pubType}" data-source_type="{item.source_type}" data-source_url_encode="{item.source_url_encode}"\n            data-article_url_encode="{item.article_url_encode}" data-article_title_encode={item.article_title_encode}>\n              <span class="js_publishWayText">\n                {if item.pubType === 0}\n                  转载                {else}\n                  分享                {/if}\n              </span>\n              <span class="icon-arrow"></span>\n            </span>\n            <div class="gray js_gray">\n              {if item.pubType === 1}\n                用户需要跳转至原文阅读              {else}\n                {item.grayText}\n              {/if}\n            </div>\n          </td>\n        </tr>\n    {/each}\n    </tbody>\n</table>';
});define("tpl/media/sharecopyright_dialog.html.js",[],function(){
return'<div class="share_appmsg_dialog">\n    <div class="frm_control_group share_appmsg_search_form">\n        <label for="" class="frm_label">\n            查找文章        </label>\n        <div class="frm_controls">\n            <div class="search_wrapper">\n                <span class="frm_input_box search with_del append ">\n                    <a class="del_btn js_search_del" href="javascript:" style="display: none;">\n                        <i class="icon_search_del"></i>&nbsp;\n                    </a>\n                    <a href="javascript:void(0);" class="js_search_btn frm_input_append">\n                        <i class="icon16_common search_gray">\n                            搜索                        </i>\n                        &nbsp;\n                    </a>\n                    <input type="text" class="js_search_input frm_input" placeholder="输入原创文章链接/标题/关键字，按回车查找">\n                </span>\n            </div>\n            <p style="margin-top:10px;">\n              根据<a class="link-color" href="https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=11526652746MV5HH&version=1&lang=<%@GetLanguage()%>&platform=2" target="_blank">原创转载规则</a>，只能搜索并转载原创文章              <!-- <span class="js_tooltips" data-tips=\'原创特指自己写的、独立完成创作的作品。公众平台鼓励用户发表原创文章，平台会对原创声明的文章在群发后进行审核，审核通过后文章会被标识为原创文章。\'></span> -->\n            </p>\n            <p class="js_tips_main frm_msg fail">\n                <span class="js_search_tips frm_msg_content"></span>\n            </p>\n        </div>\n    </div>\n\n    <div class="share_article_area js_share_article_area">\n        <div style="display:none;" class="share_article_loading js_loading">\n            <i class="icon_loading_small white"></i>\n            <span class="vm_box"></span>\n        </div>\n        <div class="js_article_content share_article_list"></div>\n    </div>\n\n    <div class="pagination_wrp js_pagebar"></div>\n\n    <!-- <label style="text-align: center; margin-top: 25px; width: 100%; display: none;" id="js_open_ad_reprint_area">\n      <i class="icon_checkbox"></i>\n      <input type="checkbox" id="js_open_ad_reprint_checkbox" checked />\n      开通转载收益并同意<a href="https://mp.weixin.qq.com/cgi-bin/readtemplate?t=home/adhost_agreement_tmpl" target="_blank">《腾讯微信公众平台广告展示服务协议》</a>    </label> -->\n</div>';
});define("media/article_data_key.js",[],function(){
"use strict";
function e(e){
var i={
is_new_video:{
value:0,
isLocalKey:!0,
isSubmit:!1,
compare:!1
},
tags:{
value:[],
isLocalKey:!0,
isSubmit:!1,
compare:!1
},
can_reward:{
value:0,
isLocalKey:!0,
isSubmit:!0,
compare:!0
},
can_open_reward:{
value:0,
isLocalKey:!0,
isSubmit:!1,
compare:!1
},
title:{
value:"",
isLocalKey:!0,
isSubmit:!0,
compare:!0
},
title_tips:{
value:"",
isLocalKey:!0,
isSubmit:!1,
compare:!1
},
author:{
value:"",
isLocalKey:!0,
isSubmit:!0,
compare:!0
},
authority:{
value:1,
isLocalKey:!0,
isSubmit:!1,
compare:!1
},
writerid:{
value:"",
isLocalKey:!0,
isSubmit:!0,
compare:!0
},
author_username:{
value:"",
isLocalKey:!0,
isSubmit:!1,
compare:!1
},
author_status:{
value:1,
isLocalKey:!0,
isSubmit:!1,
compare:!1
},
file_id:{
value:"",
isLocalKey:!0,
isSubmit:!0,
submitName:"fileid",
compare:!1
},
digest:{
value:"",
isLocalKey:!0,
isSubmit:!0,
compare:!0
},
auto_gen_digest:{
value:1,
isLocalKey:!0,
isSubmit:!0,
compare:!1
},
content:{
value:"",
isLocalKey:!0,
isSubmit:!0,
compare:!0
},
source_url:{
value:"",
isLocalKey:!0,
isSubmit:!0,
submitName:"sourceurl",
compare:!0
},
cover:{
value:"",
isLocalKey:!0,
isSubmit:!1,
compare:!1
},
releasetime:{
value:0,
isLocalKey:!0,
isSubmit:!1,
compare:!1
},
need_open_comment:{
value:1,
isLocalKey:!0,
isSubmit:!0,
compare:!0
},
only_fans_can_comment:{
value:0,
isLocalKey:!0,
isSubmit:!0,
compare:!0
},
isFirst:{
value:0==e,
isLocalKey:!0,
isSubmit:!1,
compare:!1
},
cdn_url:{
value:"",
isLocalKey:!0,
isSubmit:!0,
compare:!0
},
cdn_url_back:{
value:"",
isLocalKey:!0,
isSubmit:!0,
compare:!1
},
music_id:{
value:"",
isLocalKey:!1,
isSubmit:!0,
compare:!1
},
video_id:{
value:"",
isLocalKey:!1,
isSubmit:!0,
compare:!1
},
voteid:{
value:"",
isLocalKey:!1,
isSubmit:!0,
compare:!1
},
voteismlt:{
value:"",
isLocalKey:!1,
isSubmit:!0,
compare:!1
},
supervoteid:{
value:"",
isLocalKey:!1,
isSubmit:!0,
compare:!1
},
cardid:{
value:"",
isLocalKey:!1,
isSubmit:!0,
compare:!1
},
cardquantity:{
value:"",
isLocalKey:!1,
isSubmit:!0,
compare:!1
},
isbn:{
value:"",
isLocalKey:!1,
isSubmit:!0,
compare:!1
},
cardlimit:{
value:"",
isLocalKey:!1,
isSubmit:!0,
compare:!1
},
vid_type:{
value:"",
isLocalKey:!1,
isSubmit:!0,
compare:!1
},
seq:{
value:e,
isLocalKey:!0,
isSubmit:!1,
compare:!1
},
msg_index:{
value:e,
isLocalKey:!0,
isSubmit:!1,
compare:!1
},
source_url_checked:{
value:0,
isLocalKey:!0,
isSubmit:!1,
compare:!0
},
show_cover_pic:{
value:0,
isLocalKey:!0,
isSubmit:!0,
compare:!0
},
shortvideofileid:{
value:0,
isLocalKey:!1,
isSubmit:!0,
compare:!1
},
link_count:{
value:0,
isLocalKey:!0,
isSubmit:!1,
compare:!1
},
copyright_type:{
value:0,
isLocalKey:!0,
isSubmit:!0,
compare:!0
},
releasefirst:{
value:"",
isLocalKey:!0,
isSubmit:!0,
compare:!0
},
platform:{
value:"",
isLocalKey:!0,
isSubmit:!0,
compare:!0
},
reprint_permit_type:{
value:"",
isLocalKey:!0,
isSubmit:!0,
compare:!0
},
allow_reprint:{
value:"",
isLocalKey:!0,
isSubmit:!0,
compare:!0
},
allow_reprint_modify:{
value:"",
isLocalKey:!0,
isSubmit:!0,
compare:!0
},
original_article_type:{
value:"",
isLocalKey:!0,
isSubmit:!0,
compare:!0
},
ori_white_list:{
value:"",
isLocalKey:!0,
isSubmit:!0,
compare:!0
},
free_content:{
value:"",
isLocalKey:!0,
isSubmit:!0,
compare:!0
},
fee:{
value:0,
isLocalKey:!0,
isSubmit:!0,
compare:!0
},
ad_info:{
value:{
ad_id:"",
ad_img:"",
img:"",
nick_name:"",
pt:"",
trade_mode:""
},
isLocalKey:!0,
isSubmit:!0,
compare:["ad_info","ad_id","ad_img","img","nick_name","pt","trade_mode"]
},
copyright_headimg:{
value:"",
isLocalKey:!0,
isSubmit:!1,
compare:!0
},
copyright_nickname:{
value:"",
isLocalKey:!0,
isSubmit:!1,
compare:!0
},
guide_words:{
value:"",
isLocalKey:!0,
isSubmit:!0,
compare:!0
},
is_share_copyright:{
value:0,
isLocalKey:!0,
isSubmit:!0,
compare:!0
},
share_copyright_url:{
value:"",
isLocalKey:!0,
isSubmit:!0,
compare:!0
},
source_article_type:{
value:"",
isLocalKey:!0,
isSubmit:!0,
compare:!0
},
share_page_type:{
value:0,
isLocalKey:!0,
isSubmit:!0,
compare:!0
},
share_imageid:{
value:"",
isLocalKey:!0,
isSubmit:!1,
compare:!0
},
share_imageinfo:{
value:[],
isLocalKey:!0,
isSubmit:!0,
compare:!1
},
share_video_id:{
value:"",
isLocalKey:!0,
isSubmit:!0,
compare:!0
},
share_videoinfo:{
value:[],
isLocalKey:!0,
isSubmit:!1,
compare:!1
},
share_voice_id:{
value:"",
isLocalKey:!0,
isSubmit:!0,
compare:!0
},
share_voiceinfo:{
value:[],
isLocalKey:!0,
isSubmit:!1,
compare:!1
}
};
return i;
}
function i(){
var i=e(0),a=[];
for(var o in i)i.hasOwnProperty(o)&&i[o].isSubmit&&a.push(i[o].submitName?i[o].submitName:o);
return a;
}
function a(i){
var a=e(i),o={};
for(var c in a)a.hasOwnProperty(c)&&a[c].isLocalKey&&(o[c]=a[c].value);
return o;
}
function o(){
var i=e(0),a={};
for(var o in i)if(i.hasOwnProperty(o)&&i[o].compare)if(i[o].compare===!0)a[o]=!0;else if("[object Array]"===Object.prototype.toString.call(i[o].compare))for(var c=i[o].compare,s=0;s<c.length;s++)a[c[s]]=!0;
return a;
}
function c(){
return",content,cover,cdn_url,title,author,";
}
return{
getSubmitKey:i,
getLocalKey:a,
getCompareWhiteKey:o,
getShareArticleIgnoreKey:c
};
});define("tpl/media/appmsg_edit/previewDialog.html.js",[],function(){
return'<div class="js_preview_dialog_content simple_dialog_content send_preview">\n    <div class="preview_form_box">\n        <form class="form"  onSubmit="return false;">\n            <div class="frm_control_group">\n                <label class="frm_label">关注公众号后，才能接收图文消息预览</label>\n                <span class="frm_input_box">\n                    <input type="text" class="frm_input jsAccountInput" placeholder="请输入微信号/QQ号/手机号"/>\n                </span>\n                <p class="frm_tips">预览功能仅用于公众号查看文章效果，不适用于公众传播，预览链接会在短期内失效                </p>\n                <p class="frm_msg fail jsAccountFail" style="display:none"></p>\n            </div>\n            {if accounts.length>0}\n            <div class="user_list jsAccountList">\n            {each accounts as o i}\n                <div class="user jsAccount" data-value="{o}">\n                    {o}\n                    <a href="javascript:;" class="opt jsAccountDel" data-index="{i}">x</a>\n                </div>\n            {/each}\n            </div>\n            {/if}\n        </form>\n    </div>\n    <div class="preview_qrcheck_box">\n        <img class="preview_qrcheck_img" src="/misc/getqrcode?fakeid={uin}&token={token}&style=1">\n        <p>扫描关注{nickname}</p>\n    </div>\n</div>';
});define("tpl/mpEditor/plugin/crop_img.html.js",[],function(){
return'<div class="js_crop_img_wrap img_edit_area" style="position:absolute">\n  <div class="js_crop_area img_edit_wrp" style="overflow:hidden;">\n    <div class="js_img_scale_cover" style="position:absolute;background-color: #fff;" draggable="false">\n    </div>\n    <img src="{url}">\n    <div class="js_img_scale edui-editor-imagescale img_edit_scale" draggable="false" style="display:block;z-index:500;">\n      <span draggable="false" class="edui-editor-imagescale-hand0"></span>\n      <span draggable="false" class="edui-editor-imagescale-hand2"></span>\n      <span draggable="false" class="edui-editor-imagescale-hand5"></span>\n      <span draggable="false" class="edui-editor-imagescale-hand7"></span>\n    </div>\n  </div>\n  <div class="js_tool_bar img_edit_toolbar" style="z-index:{zIndex}">    \n    <div class="weui-slider-box">\n      <div class="weui-slider">\n        <div class="js_drag_bar weui-slider__inner">\n          <div style="width: 0%;" class="js_progress weui-slider__track"></div>\n          <div style="left: 0%;" class="js_dot weui-slider__handler__wrp">\n            <div class="weui-slider__handler"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <a class="js_ok btn btn_primary" href="javascript:;">完成</a>\n    <a class="js_cancel btn btn_default" href="javascript:;">放弃裁剪</a>\n  </div>\n</div>\n';
});define("common/wx/mpEditor/plugin/wheelEventAdapter.js",[],function(){
"use strict";
function e(){
if(r.isIe){
var e=window.navigator.userAgent.toLowerCase(),t=e.match(/(?:msie\s([\w.]+))/),o=e.match(/(?:trident.*rv:([\w.]+))/),n=0;
n=t&&o&&t[1]&&o[1]?Math.max(1*t[1],1*o[1]):t&&t[1]?1*t[1]:o&&o[1]?1*o[1]:0,r.ieVersion=n;
}
try{
return new WheelEvent("wheel"),void(r.support="wheel");
}catch(i){}
if(void 0!==document.onmousewheel)return void(r.support="mousewheel");
try{
return document.createEvent("MouseScrollEvents"),void(r.support="DOMMouseScroll");
}catch(i){}
}
function t(e){
var t={
myDeltaY:void 0,
myWheel:void 0
};
return e=e||window.event,"deltaY"in e?(t.myDeltaY=e.deltaY,t.myWheel=e.deltaY/Math.abs(e.deltaY),
t):"wheelDelta"in e?(t.myWheel=-1*e.wheelDelta/Math.abs(e.wheelDelta),(window.opera&&opera.version()<10||r.isIe&&r.ieVersion<=9)&&(t.myWheel=-1*e.myWheel),
t):"detail"in e?(t.myWheel=-1*e.detail/Math.abs(e.detail),t):t;
}
var r={
support:"",
isIe:/(msie\s|trident.*rv:)([\w.]+)/.test(window.navigator.userAgent.toLowerCase()),
ieVersion:0
};
return e(),{
supportEvent:r.support,
eventAdapter:t
};
});define("common/wx/mpEditor/plugin/basePlugin.js",["common/wx/mpEditor/common/base_class.js"],function(o){
"use strict";
var m=o("common/wx/mpEditor/common/base_class.js"),n=m.inherit({});
return n;
});