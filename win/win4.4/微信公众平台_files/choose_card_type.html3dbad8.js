define("common/wx/richEditor/editorRange.js",[],function(n,e,t){
"use strict";
var r=function(){
return document.selection?document.selection:(window.getSelection||document.getSelection)();
},o=function(n,e,t){
if(!t&&n===e)return!1;
if(n.compareDocumentPosition){
var r=n.compareDocumentPosition(e);
if(20==r||0==r)return!0;
}else if(n.contains(e))return!0;
return!1;
},i=function(n,e){
var t=e.commonAncestorContainer||e.parentElement&&e.parentElement()||null;
return t?o(n,t,!0):!1;
},c=function(n){
var e=r();
if(!e)return null;
var t=e.getRangeAt?e.rangeCount?e.getRangeAt(0):null:e.createRange();
return t?n?i(n,t)?t:null:t:null;
},u=function(n){
return n.parentElement?n.parentElement():n.commonAncestorContainer;
};
t.exports={
getSelection:r,
getRange:c,
containsRange:i,
parentContainer:u
};
});define("common/wx/richEditor/wysiwyg.js",["common/wx/richEditor/editorRange.js","common/qq/Class.js"],function(e,t,n){
"use strict";
var i=/msie/.test(navigator.userAgent.toLowerCase()),a="Wysiwyg",r=e("common/wx/richEditor/editorRange.js"),o="​",s=new RegExp(o,"g"),l=e("common/qq/Class.js"),c=l.declare({
init:function(e,t){
var n=e,i=$('<div class="edit_area"></div>');
this._dom$=n,this._val="",this._lastRange=null,this._editArea$=i,$.extend(this,t),
this._initEditArea(),this._initEvent();
},
_initEvent:function(){
var e=this,t=function(){
e.__tid&&clearTimeout(e.__tid),e.__tid=setTimeout(function(){
e._filterNode();
},10);
};
e._editArea$.bind({
keydown:function(t){
e._keydown(t);
},
keyup:function(t){
e._keyup(t);
},
compositionend:function(t){
e._compositionend(t);
},
mouseup:function(t){
e._mouseup(t);
},
drop:t,
paste:t
});
},
_keydown:function(e){
var t=this,n=wx.isHotkey;
if(n(e,"backspace")){
"<br>"==$.trim(t._editArea$.html()).replace(s,"")&&t._editArea$.html(o);
var i=r.getSelection();
i.type&&"control"===i.type.toLowerCase()&&(e.preventDefault(),i.clear());
}
(n(e,"ctrlenter")||n(e,"altenter")||n(e,"enter"))&&(e.preventDefault(),t.insertHTML("<br/>")._saveRang()),
t.keydown&&t.keydown(e);
},
_keyup:function(e){
var t=this,n=$.trim(t._editArea$.html()).replace(s,"");
n||t._editArea$.html(o),t._saveRang(),t.keyup&&t.keyup(e),t.save();
},
_compositionend:function(e){
var t=this;
t._saveRang(),t.keyup&&t.keyup(e),t.save();
},
_mouseup:function(e){
var t=this;
setTimeout(function(){
t._saveRang();
},0),t.mouseup&&t.mouseup(e);
},
focus:function(){
this._editArea$.focus(),this._resotreRange();
},
_setCursorToEnd:function(e){
if(i&&e){
var t=r.getSelection();
t.extend&&(t.extend(e,e.length),t.collapseToEnd&&t.collapseToEnd());
}
},
insertHTML:function(e){
var t=this;
t.focus();
var n=r.getRange();
if(!n)return t;
if(n.createContextualFragment){
e+='<img style="width:1px;height:1px;"></img>';
var a=n.createContextualFragment(e),o=a.lastChild;
n.deleteContents(),n.insertNode(a),n.setEndAfter(o),n.setStartAfter(o);
var s=r.getSelection();
s.removeAllRanges(),s.addRange(n),document.execCommand("Delete",!1,null);
}else i&&/>$/.test(e),!!e&&n.pasteHTML&&n.pasteHTML(e),n.collapse&&n.collapse(!1),
n.select();
return t._saveRang().save(),t;
},
save:function(e){
var t=this,e=e||this.textFilter,n=t._editArea$.html();
return n=n.replace(s,""),t.val="function"==typeof e?e(n):n,t.change&&t.change(),
t;
},
_filterNode:function(e){
for(var t,n=this,e=e||this.nodeFilter,i=n._editArea$.get(0),a=i.childNodes,r=a.length-1;r>=0;r--){
var o=a[r];
switch(o.nodeType){
case 1:
if("BR"!==o.nodeName.toUpperCase()){
var s,l=!1;
if((s=e&&e(o))||(s=o.textContent||o.innerText||"",l=!0),s){
var c=l?document.createTextNode(s):s;
!t&&(t=c),i.replaceChild(c,o);
}else i.removeChild(o);
}
break;

case 3:
break;

default:
i.removeChild(o);
}
}
return n._setCursorToEnd(t),n._saveRang().save();
},
getHTML:function(){
return this._editArea$.html();
},
getText:function(){
return this.getHTML().text();
},
getContent:function(){
var e=this,t=this.textFilter,n=e._editArea$.html();
return n=n.replace(s,""),e.val="function"==typeof t?t(n):n,this.val;
},
setContent:function(e,t){
if(this.clear(),e=e||o,this._editArea$.html(e),!t)if("function"==typeof this.textFilter){
var n=this._editArea$.html().replace(s,"");
t=this.textFilter(n);
}else t=e;
this.val=t,this.change&&this.change();
},
clear:function(){
this.val="",this._editArea$.html(o);
},
_initEditArea:function(){
var e=this;
e._editArea$.attr("class",e._dom$.attr("class")).attr("placeholder",e._dom$.attr("placeholder")).attr("contentEditable",!0).css({
"overflow-y":"auto",
"overflow-x":"hidden"
}),e._dom$.after(e._editArea$).hide().data(a,e),e.init&&e.init();
},
_saveRang:function(){
return this._lastRange=r.getRange(),this;
},
_resotreRange:function(){
var e=this._lastRange;
if(e){
var t=r.getSelection();
if(t.addRange)t.removeAllRanges(),t.addRange(e);else{
var n=r.getRange();
n.setEndPoint&&(n.setEndPoint("EndToEnd",e),n.setEndPoint("StartToStart",e)),n.select();
}
}
return this;
}
}),d=function(e,t){
return e.data(a)||new c(e,t);
};
n.exports=d;
});define("tpl/richEditor/emotionEditor.html.js",[],function(){
return'<div class="emotion_editor">\n    <div class="edit_area js_editorArea"></div>\n    <div class="editor_toolbar">\n        {if !hideEmotion}\n        <a href="javascript:void(0);" class="icon_emotion emotion_switch js_switch">表情</a>\n        {/if}\n        {if !hideUpload}\n        <div class="upload_box">\n            <div class="upload_area">\n                <a id="emotionEditor_{gid}_" href="javascript:void(0);" class="js_upload upload_access">\n                    <i class="icon18_common upload_gray"></i>\n                    上传图片                </a>\n            </div>\n        </div>\n        {/if}\n        {if !hideOprTips}\n        <p class="editor_tip opr_tips">，按下Shift+Enter键换行</p>\n        {/if}\n        <p class="editor_tip js_editorTip"></p>\n        {if !hideEmotion}\n        <div class="emotion_wrp js_emotionArea">			\n		</div>\n        {/if}\n    </div>\n</div>\n\n';
});define("tpl/cardticket/select_sub_merchant_table.html.js",[],function(){
return'{if loading}<i class="icon_loading_small white"></i>\n{else}\n<div class="sub_title_bar">\n    <span class="frm_input_box search append l">\n        <a href="javascript:void(0);" class="js_search_btn frm_input_append">\n            <i class="icon16_common search_gray">\n                搜索            </i>\n            &nbsp;\n        </a>\n        <input type="text" placeholder="请输入商户名" value="{param.keyword}" class="frm_input js_search_input">\n    </span>\n    <div class="tr">\n        <a data-actionid="2014" class="btn btn_primary r" href="{wx_url \'/merchant/cardhelpmakesend?action=addpage\'}" target="_blank"><i class="icon14_common add_white"></i>添加子商户</a>\n    </div>\n</div>\n<div class="in_bd">\n	{if !data.length}\n	<div class="account_list empty js_empty">\n		{if param.keyword}\n		你输入的名称未搜索到，请确认否输入正确或未添加该子商户。		{else}\n		您还没有添加子商户，请点击右上角按钮添加子商户		{/if}\n		<!-- 抱歉，未找到符合公众号 -->\n	</div>\n	{else}\n	<ul class="account_list js_merchant_item_p">\n		{each data as sub i}\n		<li class="list_item js_merchant_item{if check_remain_quota && (sub.remain_quota==0||sub.can_not_use_sns_card)} js_merchant_disabled disabled{/if}" data-id="{sub.Id}">\n	        <div class="inner_list_item">\n	            <img class="pic" src="{http2https sub.Logo}" width="100px">\n				<div class="item_txt">\n					<p class="nick_name">{sub.BrandName}</p>\n                    {if check_remain_quota}{if max_card===0}<p>账号违规，暂停制券</p>{else}{if sub.remain_quota==0}<p>已超出制券量</p>{else if sub.can_not_use_sns_card}<p>该商户类目不可创建朋友的券</p>{/if}{/if}{/if}\n				</div>\n			</div>\n			<a href="javascript:;" class="account_selected"></a>\n			<div class="list_mask"></div>\n	    </li>\n	    {/each}\n	</ul>\n	<div class="js_pager"></div>\n	{/if}\n	<!-- <div class="loading_box empty dn" id="js_loading">\n		<img src="<%@GetResFullName($images_comm_path$icon/common/icon32_loading_light.gif)%>">\n		<p>加载中，请稍候</p>\n	</div> -->\n</div>\n{/if}\n';
});define("tpl/media/cardmsg.html.js",[],function(){
return'<div class="msg_card{if _className} {_className}{/if}">\n	<div class="card_content" style="background-color: {color};">\n		<img class="logo js_logourl" data-src="{logo_url}" />\n		<div class="card_info">\n			<h4 class="card_title">{title}</h4>\n		</div>\n		<div class="deco"></div>\n	</div>\n	<p class="store">{brand_name}</p>\n</div>\n';
});define("tpl/media/appmsg_edit/text_editor_word_tips.html.js",[],function(){
return'<em class="share-text__counter">\n  <span class="share-text__counter_current{if curCount>wordlimit} share-text__counter_warn{/if}">{curCount}</span>/{wordlimit}\n</em>';
});define("tpl/media/appmsg_edit/text_editor.html.js",[],function(){
return'<div class="share-text__area">\n    <span class="share-text__wrp">\n        <div class="share-text__input js_editorArea" contenteditable="true" placeholder="从这里开始输入推荐语，可以不填"></div>\n    </span>\n    <span class="share-text__append-in js_editorTip">\n    </span>\n</div>\n';
});define("common/wx/richEditor/emotionEditor.js",["biz_common/utils/string/html.js","widget/emotion_editor.css","tpl/richEditor/emotionEditor.html.js","common/wx/richEditor/wysiwyg.js","common/wx/richEditor/emotion.js","biz_web/utils/upload.js","common/wx/Tips.js","common/qq/Class.js"],function(t,i,o){
"use strict";
t("biz_common/utils/string/html.js");
var e=wx.T,n=(t("widget/emotion_editor.css"),t("tpl/richEditor/emotionEditor.html.js")),r=t("common/wx/richEditor/wysiwyg.js"),s=t("common/wx/richEditor/emotion.js"),l=t("biz_web/utils/upload.js"),m=t("common/wx/Tips.js"),d=l.uploadCdnFile,c="##__linebreaktag__##",p=new RegExp(c,"g"),a=t("common/qq/Class.js"),h="share-text__input_placeholder",u={
isHTML:!0,
wordlimit:500,
hideUpload:!0,
hideEmotion:!1,
hideOprTips:!1,
editorTpl:n,
editorTipsTpl:"",
placeholder:""
},w=1,f=a.declare({
init:function(t,i){
var o=this;
this.opt=$.extend(!0,{},u,i),this.opt.formItemsOpt=i.formItemsOpt,i=this.opt,o.selector$=t,
i.gid=w++,o.selector$.html(e(i.editorTpl,i)),o.emotion=new s(t.find(".js_emotionArea")),
o.wysiwyg=new r(t.find(".js_editorArea"),{
init:function(){
t.find(".js_editorTip").html(i.editorTipsTpl?e(i.editorTipsTpl,{
wordlimit:i.wordlimit,
curCount:0
}):"还可以输入<em>{l}</em>字".format({
l:i.wordlimit
}));
},
textFilter:function(t){
return t=o.emotion.getEmotionText(t).replace(/<br.*?>/gi,"\n").replace(/\n/g,c).replace(/<.*?>/g,"").replace(p,"\n"),
t=t.html(!1);
},
nodeFilter:function(t){
var i="";
return"IMG"===t.nodeName.toUpperCase()&&(i=t),i;
},
change:function(){
var n=o.getContent(),r=i.wordlimit-n.length,s=t.find(".js_editorArea"),l=t.find(".js_editorTip");
s.attr("placeholder")&&(n?s.removeClass(h):s.addClass(h)),l.html(i.editorTipsTpl?e(i.editorTipsTpl,{
wordlimit:i.wordlimit,
curCount:n.length
}):0>r?"已超出<em{cls}>{l}</em>字".format({
l:-r,
cls:' class="warn"'
}):"还可以输入<em>{l}</em>字".format({
l:r
}));
}
}),this.opt.hideUpload||(o.upload=d({
container:t.find(".js_upload"),
type:2,
multi:!1,
onComplete:function(t,i,e,n){
if(n&&n.base_resp&&0==n.base_resp.ret){
var r=n.content;
m.suc("上传成功"),o.wysiwyg.insertHTML(r);
}
}
})),o._initEvent(),o.insertHTML(i.text);
},
_initEvent:function(){
var t=this,i=$(".js_switch",this.selector$),o=this.emotion,e=this.wysiwyg;
this.opt.hideEmotion||(o.click(function(t){
return e.insertHTML(o.getEmotionHTML(t)),!1;
}),o.hide(),i.click(function(){
$(this).parents(".js_editor").hasClass("disabled")||o.show();
}),$(document).on("click","*",function(t){
var i=$(t.target),e=i.filter(".js_switch"),n=i.filter(".js_emotion_i"),r=i.filter(".emotions_item");
e.length||n.length||r.length||o.hide();
})),this.selector$.find(".js_editorArea").on("focus",function(){
t.opt.ueditor&&t.opt.ueditor.disableToolbar();
}).on("click",function(){
t.opt.formItemsOpt&&t.opt.formItemsOpt.guideWords.readonly&&t.opt.formItemsOpt.guideWords.readonlyTips&&m.err(t.opt.formItemsOpt.guideWords.readonlyTips);
});
},
setContent:function(t){
t=(t||"").html(!0),t=this.opt.linebreak?t.replace(/\n/g,"<br>"):t,t=s.emoji(t),this.wysiwyg.setContent(t);
},
insertHTML:function(t){
t=t||"",this.wysiwyg.insertHTML(t);
},
getContent:function(){
var t=this.wysiwyg.getContent();
return t="string"==typeof t?t.trim():"";
},
getHTML:function(){
var t=this.wysiwyg.getHTML().html(!1);
return"string"==typeof t?t.trim():"";
},
focus:function(){
this.wysiwyg.focus();
},
setWordlimit:function(t){
"number"==typeof t&&(this.opt.wordlimit=t);
}
});
o.exports=f;
});define("media/productDropdown.js",["biz_web/widget/dropdown.css","tpl/media/product_dropdown.html.js","tpl/media/product_dropdown_item.html.js","common/wx/Tips.js"],function(e){
"use strict";
function t(e){
e.render&&(e.renderHtml="",$.each(e.data,function(t,a){
e.renderHtml+=e.render(a);
})),e=$.extend(!0,{},d,e);
var t=this;
if(t.container=$(e.container),t.container.addClass(e.search?o+" search":o),this.isDisabled=e.disabled,
e.disabled&&t.container.addClass("disabled"),t.opt=e,e.itemHtml=template.compile(n)(e),
t.container.html(template.compile(a)(e)),t.bt=t.container.find(".jsDropdownBt"),
t.dropdown=t.container.find(".jsDropdownList"),t.addform=t.container.find(".js_addform"),
$.each(e.data,function(e,a){
$.data(t.dropdown.find(".jsDropdownItem")[e],"value",a.value),$.data(t.dropdown.find(".jsDropdownItem")[e],"name",a.name),
$.data(t.dropdown.find(".jsDropdownItem")[e],"item",a);
}),"undefined"!=typeof e.index&&0!==e.data.length&&(t.bt.find(".jsBtLabel").text(e.data[e.index].name||e.label),
t.value=e.data[e.index].value),t.hideDropdowns=function(e){
t.container.find(e.target).length||t.hideMenu();
},t.bt.on("click",function(){
t.hideMenu(),t.isDisabled||t.showMenu();
}),e.search&&t.bt.find(".jsBtLabel").on("keyup",function(a){
if(!t.isDisabled){
var n=$(this);
if(13==a.keyCode)if(t.value){
var i=n.data("name"),d=n.data("index");
if(n.removeClass("error"),t.hideMenu(),n.find("div").remove(),e.callback&&"function"==typeof e.callback){
var o=t.value;
e.callback(o,i,d);
}
}else n.find("div").remove();else{
var s=n.text().trim(),r=[];
t.value=null,n.data("name",""),n.data("index",""),t.dropdown.show().find(".jsDropdownItem").each(function(){
var e=$(this);
e.hasClass("js_empty")||(e.data("name").indexOf(s)>-1?(e.parent().show(),r.push({
name:e.data("name"),
value:e.data("value"),
index:e.data("index")
})):e.parent().hide());
}),0==r.length?(t.dropdown.find(".js_empty").text("未找到"+s).show(),n.addClass("error")):(t.dropdown.find(".js_empty").hide(),
n.removeClass("error"),1==r.length&&r[0].name==s&&(n.data("name",r[0].name),n.data("index",r[0].index),
t.value=r[0].value));
}
}
}).on("blur",function(){
if(!t.isDisabled){
var a=$(this);
t.value?$(this).html()!=$(this).data("name")&&($(this).data("name",""),$(this).data("index",""),
a.addClass("error"),t.value=null):""!=a.html()?a.addClass("error"):a.html(e.label).removeClass("error");
}
}).on("focus",function(){
if(!t.isDisabled){
var a=$(this),n=$(this).html().trim();
n==e.label&&a.html("").removeClass("error"),""==n&&a.removeClass("error"),t.showMenu();
}
}),e.canadd){
var s=t.addform;
s.find(".js_btn").on("click",function(){
if(!t.isDisabled){
var e=t.container.find(".js_addform");
e.find(".js_btn").hide(),e.find(".js_additem").show(),e.parent().scrollTop(e.parent().scrollTop()+60);
}
}),s.find(".js_cancel").on("click",function(){
if(!t.isDisabled){
var e=t.container.find(".js_addform");
e.find(".js_additem").hide(),e.find(".js_btn").show();
}
}),s.find("input").on("click",function(){}),s.find("input").on("keyup",function(e){
var a=$(this),n=a.val().trim(),i=n.bytes(),d=(i+i%2)/2,o=a.siblings(".js_addnum");
o.text(d+"/15"),d>15?!o.hasClass("error")&&o.addClass("error"):(o.hasClass("error")&&o.removeClass("error"),
13==e.keyCode&&t.addform.find(".js_sure").trigger("click"));
}),s.find(".js_sure").on("click",function(){
if(!t.isDisabled){
var a=t.container.find(".js_addform"),n=a.find(".js_addnum");
if(n.hasClass("error"))i.err("超过长度限制");else{
var d=a.find("input").val();
d||i.err("类目不能为空");
var o=e.add(d,t);
o===!0&&t.addform.find(".js_cancel").trigger("click");
}
}
});
}
t.container.on("click",".js_del",function(a){
if(!t.isDisabled){
var n=$(this);
e.del(n.attr("data-value"),n.attr("data-name"),n.attr("data-index"),n);
}
return a.stopPropagation(),a.preventDefault(),!1;
}),$(document).on("click",t.hideDropdowns),t.dropdown.on("click",".jsDropdownItem",function(a){
if(!t.isDisabled&&!$(a.target).hasClass("js_empty")&&!$(a.target).hasClass("js_del")){
var n=$(this).data("value")+"",i=$(this).data("name")+"",d=$(this).data("index");
if((!t.value||t.value&&t.value!=n)&&(t.value=n,t.name=i,e.callback&&"function"==typeof e.callback)){
var o=e.callback(n,i,d,$(this).data("item"))||i;
e.search?t.bt.find(".jsBtLabel").text(o).data("name",i).data("index",d).removeClass("error"):t.bt.find(".jsBtLabel").text(o);
}
t.hideMenu();
}
});
}
e("biz_web/widget/dropdown.css");
var a=e("tpl/media/product_dropdown.html.js"),n=e("tpl/media/product_dropdown_item.html.js"),i=e("common/wx/Tips.js"),d={
label:"请选择",
data:[],
callback:$.noop,
render:$.noop,
delay:500,
disabled:!1,
search:!1,
canadd:!1,
add:$.noop,
del:$.noop
},o="dropdown_menu";
return t.prototype={
selected:function(e){
var t=this;
if("number"==typeof e){
if(this.opt.data&&this.opt.data[e]){
var a=this.opt.data[e].name,n=this.opt.data[e].value;
this.dropdown.find(".jsDropdownItem:eq("+e+")").trigger("click",n),this.bt.find(".jsBtLabel").text(a);
}
}else $.each(this.opt.data,function(i,d){
return e==d.value||e==d.name?(t.dropdown.find(".jsDropdownItem:eq("+i+")").trigger("click",n),
t.bt.find(".jsBtLabel").text(a),!1):void 0;
});
return this;
},
hideMenu:function(){
this.dropdown.hide(),this.container.removeClass("open");
},
showMenu:function(){
this.dropdown.show(),this.container.addClass("open");
},
hide:function(){
this.container.hide();
},
show:function(){
this.container.show();
},
reset:function(){
return this.bt.find(".jsBtLabel").text(this.opt.label),this.value=null,this;
},
add:function(e){
this.opt.data.push(e);
var t=template.compile(n)({
data:[e],
loading_img:this.opt.loading_img
});
this.container.find(".js_empty").before(t);
},
hidegreater:function(e){
var t=this;
return"number"==typeof e&&t.opt.data&&t.opt.data[e]&&(t.dropdown.find(".jsDropdownItem").show(),
t.dropdown.find(".jsDropdownItem:gt("+e+")").hide()),this;
},
destroy:function(){
return $(document).off("click",this.hideDropdowns),this.isDisabled&&this.container.removeClass("disabled"),
this.container.children().remove(),this.container.off(),this;
},
enable:function(){
return this.hideMenu(),this.isDisabled=!1,this.container.removeClass("disabled"),
this.opt.search&&this.bt.find(".jsBtLabel").attr("contenteditable",!0),this;
},
disable:function(){
return this.isDisabled=!0,this.container.addClass("disabled"),this.opt.search&&this.bt.find(".jsBtLabel").attr("contenteditable",!1),
this;
}
},t;
});define("tpl/media/product_category_frame.html.js",[],function(){
return'<span id="category_{index}"></span>\n<input type="hidden" id="category_{index}_hidden" name="category_{index}_hidden" value="{value}" />';
});define("tpl/cardticket/card_quantity.html.js",[],function(){
return'<div class="pop_store">\n	{if !data.is_sns_card}\n	{if data.quantity==0}\n	<p class="frm_msg fail" style="display:block;">库存为0，请先增加库存</p>\n	{/if}\n	<!-- 普通卡券增减库存 -->\n	<div class="pop_card_normal">\n		<!--增减库存-->\n		{if setquantity}\n		<!-- 这一部分貌似要废弃掉 -->\n		<div class="frm_control_group">\n			<div class="frm_controls">\n				<label class="frm_radio_label selected">\n					<i class="icon_radio"></i>\n					<span class="lbl_content">增加</span>\n					<input type="radio" name="isadd" checked value="1" class="frm_radio js_quantity_type">\n				</label>\n				<label class="frm_radio_label">\n					<i class="icon_radio"></i>\n					<span class="lbl_content">减少</span>\n					<input type="radio" name="isadd" value="0" class="frm_radio js_quantity_type">\n				</label>\n			</div>\n		</div>\n		{/if}\n		<div class="frm_control_group">                        \n			<div class="frm_controls">\n				<div class="frm_controls_hint group">\n					<span class="frm_input_box"><input type="text" class="frm_input js_value"></span>\n					<span class="frm_hint">份</span>\n				</div>\n				<p class="frm_tips fail">库存不能少于1</p>\n			</div>\n		</div>\n		<!--增减库存 end-->\n	</div>\n	{else}\n	<!-- 朋友券增加库存 -->\n	<!-- message fail-->\n	<div class="js_state_5 js_state_quantity pop_card_quantity page_msg small default" style="display:none">\n        <div class="inner group">\n            <div class="msg_content">\n                <br>\n                <h4> 朋友的券功能将在近期暂停使用，并进行玩法升级 </h4>\n                <p> 目前已暂停券点充值、新券创建及更改库存，敬请留意朋友的券后续动态 </p>\n                <br>\n            </div>\n        </div>\n		<div class="popover_bar tc">\n			<a href="javascript:;" class="btn btn_default js_cancel">确定</a>\n        </div>\n    </div>\n	<i class="loading js_satate_0 js_state_quantity" style="display:none"></i>\n	<div class="js_state_1 js_state_quantity pop_card_quantity" style="display:none">\n		<div class="inner group">\n            <div class="msg_content">\n                <br>\n                <h4> 朋友的券功能将在近期暂停使用，并进行玩法升级 </h4>\n                <p> 目前已暂停券点充值、新券创建及更改库存，敬请留意朋友的券后续动态 </p>\n                <br>\n            </div>\n        </div>\n		<div class="popover_bar tc">\n			<a href="javascript:;" class="btn btn_default js_cancel">确定</a>\n        </div>\n	</div>\n	<!-- 朋友券 确认预览 -->\n	<div class="js_state_2 js_state_quantity pop_card_quantity" style="display:none">\n		<div class="inner group">\n            <div class="msg_content">\n                <br>\n                <h4> 朋友的券功能将在近期暂停使用，并进行玩法升级 </h4>\n                <p> 目前已暂停券点充值、新券创建及更改库存，敬请留意朋友的券后续动态 </p>\n                <br>\n            </div>\n        </div>\n		<div class="popover_bar tc">\n			<a href="javascript:;" class="btn btn_default js_cancel">确定</a>\n        </div>\n	</div>\n	<!-- message success-->\n	<div class="js_state_3 js_state_quantity pop_card_quantity page_msg small msg_success default" style="display:none">\n        <div class="inner group">\n            <div class="msg_content">\n                <br>\n                <h4> 朋友的券功能将在近期暂停使用，并进行玩法升级 </h4>\n                <p> 目前已暂停券点充值、新券创建及更改库存，敬请留意朋友的券后续动态 </p>\n                <br>\n            </div>\n        </div>\n		<div class="popover_bar tc">\n			<a href="javascript:;" class="btn btn_default js_cancel">确定</a>\n        </div>\n    </div>\n	<!-- message success-->\n	<div class="js_state_9 js_state_quantity pop_card_quantity page_msg small msg_success default" style="display:none">\n        <div class="inner group">\n            <div class="msg_content">\n                <br>\n                <h4> 朋友的券功能将在近期暂停使用，并进行玩法升级 </h4>\n                <p> 目前已暂停券点充值、新券创建及更改库存，敬请留意朋友的券后续动态 </p>\n                <br>\n            </div>\n        </div>\n		<div class="popover_bar tc">\n			<a href="javascript:;" class="btn btn_default js_cancel">确定</a>\n        </div>\n    </div>\n	<!-- message fail-->\n	<div class="js_state_4 js_state_quantity pop_card_quantity page_msg small default" style="display:none">\n        <div class="inner group">\n            <div class="msg_content">\n                <br>\n                <h4> 朋友的券功能将在近期暂停使用，并进行玩法升级 </h4>\n                <p> 目前已暂停券点充值、新券创建及更改库存，敬请留意朋友的券后续动态 </p>\n                <br>\n            </div>\n        </div>\n		<div class="popover_bar tc">\n			<a href="javascript:;" class="btn btn_default js_cancel">确定</a>\n        </div>\n    </div>\n    <!-- 子商户库存提示-->\n	<div class="js_state_8 js_state_quantity pop_card_quantity page_msg small default" style="display:none">\n        <div class="inner group">\n            <div class="msg_content">\n                <br>\n                <h4> 朋友的券功能将在近期暂停使用，并进行玩法升级 </h4>\n                <p> 目前已暂停券点充值、新券创建及更改库存，敬请留意朋友的券后续动态 </p>\n                <br>\n            </div>\n        </div>\n		<div class="popover_bar tc">\n			<a href="javascript:;" class="btn btn_default js_cancel">确定</a>\n        </div>\n    </div>\n	<!-- message fail-->\n	<div class="js_state_7 js_state_quantity pop_card_quantity page_msg small default" style="display:none">\n        <div class="inner group">\n            <div class="msg_content">\n                <br>\n                <h4> 朋友的券功能将在近期暂停使用，并进行玩法升级 </h4>\n                <p> 目前已暂停券点充值、新券创建及更改库存，敬请留意朋友的券后续动态 </p>\n                <br>\n            </div>\n        </div>\n		<div class="popover_bar tc">\n			<a href="javascript:;" class="btn btn_default js_cancel">确定</a>\n        </div>\n    </div>\n    {/if}\n</div>\n';
});define("tpl/cardticket/choose_card_type.html.js",[],function(){
return'{if is_sns_card}<div class="proc_put_tick">\n{if show_all_card}\n	<div class="choose_card_normal">\n	    <div class="frm_control_group frm_card_normal">\n	        <label class="frm_radio_label selected">\n	            <i class="icon_radio"></i>\n	            <span class="lbl_content">我要创建普通优惠券</span>\n	            <input type="radio" value="2" class="frm_radio js_is_friend">\n	        </label>\n	        <div class="frm_tips">传统优惠券的电子版，可在微信中收纳、传播和使用。只可领取到我的卡券自己使用</div>\n	        <div class="frm_control_group radio_row js_is_friend_type js_is_friend_type_2" style="display:none">\n				<div class="frm_controls frm_vertical_lh">\n					{if flag==0}\n					<label class="frm_radio_label">\n						<i class="icon_radio"></i>\n						<span class="lbl_content">折扣券</span>\n						<input type="radio" value="2" class="frm_radio js_card_type">\n		                <p class="frm_tips">可为用户提供消费折扣{if is_paycard()}，支持优惠抵扣快速买单{/if}</p>\n					</label>\n					<label class="frm_radio_label">\n						<i class="icon_radio"></i>\n						<span class="lbl_content">代金券</span>\n						<input type="radio" value="4" class="frm_radio js_card_type">\n		                <p class="frm_tips">可为用户提供抵扣现金服务。可设置成为“满*元，减*元”{if is_paycard()}，支持优惠抵扣快速买单{/if}</p>\n					</label>\n					<label class="frm_radio_label">\n						<i class="icon_radio"></i>\n						<span class="lbl_content">兑换券</span>\n						<input type="radio" value="3" class="frm_radio js_card_type">\n						<p class="frm_tips">可为用户提供消费送赠品服务</p>\n					</label>\n					{/if}\n					<label class="frm_radio_label selected">\n						<i class="icon_radio"></i>\n						<span class="lbl_content">团购券</span>\n						<input type="radio" value="1" class="frm_radio js_card_type">\n						<p class="frm_tips">可为用户提供团购套餐服务</p>\n					</label>\n					<label class="frm_radio_label">\n						<i class="icon_radio"></i>\n						<span class="lbl_content">优惠券</span>\n						<input type="radio" value="0" class="frm_radio js_card_type">\n						<p class="frm_tips">{if flag==0}即“通用券”，建议当以上四种无法满足需求时采用{else}即“通用券”，建议当团购券无法满足需求时适用{/if}</p>\n					</label>\n				</div>\n			</div>\n	    </div>\n    </div>\n{/if} \n	<div class="choose_card_friend">\n	    <div class="frm_control_group">\n	        <label class="frm_radio_label ">\n	            <i class="icon_radio"></i>\n	            <span class="lbl_content">创建朋友共享的优惠券</span> \n	            <input type="radio" value="1" checked class="frm_radio js_is_friend">\n	        </label>\n	        <div class="frm_tips js_is_friend_tips js_is_friend_support_tips">朋友的券玩法升级中，当前暂停创建，请创建其他类型卡券</div>\n	        <div style="display:none;" class="frm_tips js_is_friend_tips js_is_friend_view_mode2_tips">所选子商户类目不支持制作朋友的券，<a target="_blank" href="/cgi-bin/readtemplate?t=cardticket/faq_tmpl&type=info&lang=zh_CN#0dot2">查看类目要求</a></div>\n	        <div style="display:none;" class="frm_tips js_is_friend_tips js_is_friend_view_mode1_tips">当前商户类目不支持制作朋友的券，<a target="_blank" href="/cgi-bin/readtemplate?t=cardticket/faq_tmpl&type=info&lang=zh_CN#0dot2">查看类目要求</a></div>\n	    </div>\n	</div>   \n</div>\n{else}<div class="proc_put_tick js_is_friend_type_2">\n<div class="choose_card_normal">\n	<div class="frm_control_group radio_row frm_card_normal">\n		<label for="" class="frm_label">选择你要创建的卡券类型</label>\n		<div class="frm_controls frm_vertical_lh">\n		{if flag==0}\n			<label class="frm_radio_label selected">\n				<i class="icon_radio"></i>\n				<span class="lbl_content">折扣券</span>\n				<input type="radio" value="2" class="frm_radio js_card_type">\n                <p class="frm_tips">可为用户提供消费折扣{if is_paycard()}，支持优惠抵扣快速买单{/if}</p>\n			</label>\n			<label class="frm_radio_label">\n				<i class="icon_radio"></i>\n				<span class="lbl_content">代金券</span>\n				<input type="radio" value="4" class="frm_radio js_card_type">\n                <p class="frm_tips">可为用户提供抵扣现金服务。可设置成为“满*元，减*元”{if is_paycard()}，支持优惠抵扣快速买单{/if}</p>\n			</label>\n			<label class="frm_radio_label">\n				<i class="icon_radio"></i>\n				<span class="lbl_content">兑换券</span>\n				<input type="radio" value="3" class="frm_radio js_card_type">\n				<p class="frm_tips">可为用户提供消费送赠品服务</p>\n			</label>\n		{/if}\n			<label class="frm_radio_label selected">\n				<i class="icon_radio"></i>\n				<span class="lbl_content">团购券</span>\n				<input type="radio" value="1" class="frm_radio js_card_type">\n				<p class="frm_tips">可为用户提供团购套餐服务</p>\n			</label>\n		\n			<label class="frm_radio_label">\n				<i class="icon_radio"></i>\n				<span class="lbl_content">优惠券</span>\n				<input type="radio" value="0" class="frm_radio js_card_type">\n				<p class="frm_tips">{if flag==0}即“通用券”，建议当以上四种无法满足需求时采用{else}即“通用券”，建议当团购券无法满足需求时适用{/if}</p>\n			</label>\n		</div>\n	</div>\n</div>\n</div>\n{/if}';
});