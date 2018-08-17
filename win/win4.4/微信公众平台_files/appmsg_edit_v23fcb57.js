define("common/wx/tooltips.js",["tpl/tooltips.html.js"],function(o,t,n){
"use strict";
var i={
position:{},
container:"",
type:"hover",
buttons:[],
delay:300,
disabled:!1,
reposition:!1,
container_close:!1,
parentClass:"",
container_mode:"absolute"
},s=wx.T,e=o("tpl/tooltips.html.js"),c="btn_disabled",p="hover",h="show",l=function(o){
if(this.options=o=$.extend(!0,{},i,o),this.$container=$(this.options.container),
this.$container&&0!=this.$container.length){
var t=this.$container.offset(),n=this.$container.height(),l=this.options.position.left||this.$container.data("x")||0,d=n+(this.options.position.top||this.$container.data("y")||0);
this.options.offset={
left:t.left+l,
top:t.top+d,
left_x:l,
top_y:d
},!o.content&&(o.content=this.$container.data("tips")||""),this.$dom=$(s(e,o)).appendTo("body"),
this.options.disabled&&this.$container.addClass(c);
var a=this,f=this.options.type===p||"click"===this.options.type?this.options.type:p;
if(f==p){
var r=null;
this.$container.hover(function(){
a.options.onshow&&"function"==typeof a.options.onshow?a.options.onshow.apply(a):!a.options.disabled&&a.show();
},function(){
r=window.setTimeout(function(){
a.hide();
},a.options.delay);
}),this.$dom.hover(function(){
r&&window.clearTimeout(r);
},function(){
a.hide();
});
}else this.$container.click(function(){
return a.options.disabled||a.options.onbeforeclick&&"function"==typeof a.options.onbeforeclick&&a.options.onbeforeclick.apply(a)===!1?void 0:(a.$dom.data(h)?a.options.onclose&&"function"==typeof a.options.onclose?a.options.onclose.apply(a):a.hide():a.options.onshow&&"function"==typeof a.options.onshow?a.options.onshow.apply(a):a.show(),
!1);
});
a.documentClickEvent=function(o){
a.$dom.find(o.target).length||(a.options.onclose&&"function"==typeof a.options.onclose?a.options.onclose.apply(a,[o]):a.hide());
},$(document).on("click",a.documentClickEvent),a.$dom.find(".js_popover_close").on("click",function(o){
return a.options.onclose&&"function"==typeof a.options.onclose?a.options.onclose.apply(a,[o]):a.hide(),
!1;
}),this.$dom.hide(),function(){
$.each(a.$dom.find(".js_btn"),function(o,t){
a.options.buttons[o].click&&$(t).on("click",function(){
a.options.buttons[o].click.apply(a);
});
});
}();
}
};
l.prototype={
constructor:l,
show:function(){
if(this.options.reposition){
var o=this.$container.offset(),t=o.left+this.options.offset.left_x,n=o.top+this.options.offset.top_y;
this.$dom.css({
left:t,
top:n
}).show();
}else this.$dom.show();
this.$dom.data(h,!0);
},
hide:function(){
this.$dom.hide(),this.$dom.data(h,!1);
},
enable:function(){
return this.options.disabled=!1,this.$container.removeClass(c),this;
},
disable:function(){
return this.options.disabled=!0,this.$container.addClass(c),this;
},
destroy:function(){
this.$dom.remove(),$(document).off("click",this.documentClickEvent);
},
changeContent:function(o){
this.$dom.find(".js_content").html(o);
}
},n.exports=l;
});define("common/wx/dropdownClassify.js",["biz_web/widget/dropdown.css","tpl/dropdownClassify.html.js"],function(t,e,n){
"use strict";
function a(t){
t=$.extend(!0,{},s,t);
var e=this;
e.opt=t,e.container=$(e.opt.container),e.selectedItems=[],e.opt.disabled?e.container.addClass("disabled"):e.container.removeClass("disabled"),
e.container.html(template.compile(o)(e.opt)),e.bt=e.container.find(".jsDropdownBt"),
e.dropdown=e.container.find(".jsDropdownList"),e.btLabel=e.bt.find(".jsBtLabel"),
e.bt.on("click",function(){
return e.opt.disabled?!1:void e.show();
}),$(document).on("click",function(t){
$(t.target).parents(".js_dropdownClassify").length||e.hide();
}),e.dropdown.on("click",".jsDropdownItem",function(){
var n=$(this);
if(n.hasClass("disabled"))return!1;
var a=n.data("value"),o=n.data("name"),s=n.data("index"),i=e.btLabel.attr("data-value");
if(!e.value||e.value&&e.value!==a){
var d="";
d="function"==typeof t.callback?t.callback(a,o,s,i)||o:o,e.btLabel.attr("data-value",a),
e.selected(a,d);
}
e.hide();
});
}
t("biz_web/widget/dropdown.css");
var o=t("tpl/dropdownClassify.html.js"),s={
label:"请选择",
data:[],
callback:$.noop,
disabled:!1
};
a.prototype={
show:function(){
this.dropdown.show(),this.container.addClass("open"),"function"==typeof this.opt.show&&this.opt.show(this.container);
},
hide:function(){
this.dropdown.hide(),this.container.removeClass("open");
},
selected:function(t,e){
var n=this;
return $.each(n.selectedItems,function(t,e){
e.removeClass("checked");
}),n.selectedItems=[],$.each(this.opt.data,function(a,o){
var s=n.dropdown.find(".jsDropdownGroup:eq("+a+")");
$.each(o.data,function(a,o){
t===o.value&&(n.value=o.value,n.name=o.name,n.btLabel.html(e||o.name),n.selectedItems.push(s.find(".jsDropdownItem:eq("+a+")").addClass("checked")));
});
}),this;
},
reset:function(){
return this.btLabel.html(this.opt.label),this.value=null,this.name=null,this;
},
destroy:function(){
return this.opt.disabled&&this.container.removeClass("disabled"),this.container.children().remove(),
this.container.off(),this;
},
enable:function(){
return this.opt.disabled=!1,this.container.removeClass("disabled"),this;
},
disable:function(){
return this.opt.disabled=!0,this.container.addClass("disabled"),this;
}
},n.exports=a;
});define("biz_web/ui/dropdown.js",["biz_web/widget/dropdown.css","tpl/biz_web/ui/dropdown.html.js"],function(e){
"use strict";
function t(e){
e.render&&(e.renderHtml="",$.each(e.data,function(t,a){
e.renderHtml+=e.render(a);
})),e=$.extend(!0,{},d,e);
var t=this;
t.container=$(e.container),t.container.addClass(e.search?o+" search":o),this.isDisabled=e.disabled,
e.disabled?t.container.addClass("disabled"):t.container.removeClass("disabled"),
t.opt=e,t.container.html(template.compile(n)(e)).find(".jsDropdownList").hide(),
t.bt=t.container.find(".jsDropdownBt"),t.dropdown=t.container.find(".jsDropdownList"),
$.each(e.data,function(e,a){
$.data(t.dropdown.find(".jsDropdownItem")[e],"value",a.value),$.data(t.dropdown.find(".jsDropdownItem")[e],"name",a.name),
$.data(t.dropdown.find(".jsDropdownItem")[e],"item",a);
}),"undefined"!=typeof e.index&&0!==e.data.length&&(t.bt.find(".jsBtLabel").html(e.data[e.index].name||e.label),
t.value=e.data[e.index].value),t.bt.on("click",function(){
return a(),e.disabled||(t.dropdown.show(),t.container.addClass("open")),!1;
}),e.search&&t.bt.find(".jsBtLabel").on("keyup input",function(a){
if(t.dropdown.find(".dropdown_data_list").scrollTop(0),!t.disabled){
var n=$(this);
if(13==a.keyCode)if(t.value){
if(e.is_mobilePrefix){
var d=n.data("name").indexOf("+"),o=n.data("name");
n.html(o.substr(d+1)).removeClass("error");
}else n.html(n.data("name")).removeClass("error");
t.dropdown.hide();
}else n.find("div").remove();else{
var i=n.html().trim(),s=[];
t.value=null,t.dropdown.show().find(".jsDropdownItem").each(function(){
var e=$(this);
e.hasClass("js_empty")||(e.data("name").toLowerCase().indexOf(i.toLowerCase())>-1?(e.parent().show(),
s.push({
name:e.data("name"),
value:e.data("value")
})):e.parent().hide());
}),0==s.length?0==t.dropdown.find(".js_empty").length&&t.dropdown.find(".dropdown_data_list").append('<li class="jsDropdownItem js_empty empty">未找到</li>'):(t.dropdown.find(".js_empty").remove(),
1==s.length&&(s[0].name==i?n.removeClass("error"):n.data("name",s[0].name),t.value=s[0].value));
}
e.keyupHandle&&e.keyupHandle(n.html().trim(),n);
}
}).on("blur",function(){
if(!t.disabled){
var a=$(this);
if(t.value?$(this).html()!=$(this).data("name")&&(a.addClass("error"),t.value=null):""!=a.html()?a.addClass("error"):(a.html(e.label).removeClass("error"),
t.value=null),e.blurHandle){
var n=e.blurHandle(a.html().trim());
n&&a.removeClass("error");
}
}
}).on("focus",function(){
if(!t.disabled){
var a=$(this),n=$(this).html().trim();
n==e.label&&a.html("").removeClass("error"),""==n&&a.removeClass("error"),t.dropdown.show(),
t.container.addClass("open");
}
}),$(document).on("click",a),t.dropdown.on("click",".jsDropdownItem",function(){
if("disabled"==$(this).attr("disabled"))return!1;
var a=$(this).data("value"),n=$(this).data("name"),d=$(this).data("index"),o=$(this).parents(".jsDropdownList").siblings(".jsDropdownBt").find(".jsBtLabel").attr("data-value");
if((!t.value||t.value&&t.value!=a)&&(t.value=a,t.name=n,e.callback&&"function"==typeof e.callback)){
var i=e.callback(a,n,d,$(this).data("item"),o)||n,s=$(this).data("value");
e.search?t.bt.find(".jsBtLabel").html(i).data("name",i).removeClass("error"):t.bt.find(".jsBtLabel").attr("data-value",s).html(i);
}
t.dropdown.hide();
});
}
function a(){
$(".jsDropdownList").hide(),$(".dropdown_menu").each(function(){
!$(this).hasClass("dropdown_checkbox")&&$(this).removeClass("open");
});
}
e("biz_web/widget/dropdown.css");
var n=e("tpl/biz_web/ui/dropdown.html.js"),d={
label:"请选择",
data:[],
callback:$.noop,
render:$.noop,
keyupHandle:$.noop,
delay:500,
disabled:!1,
search:!1,
is_mobilePrefix:!1,
blurHandle:$.noop
},o="dropdown_menu";
return t.prototype={
selected:function(e,t){
var a=this;
if("number"==typeof e){
if(this.opt.data&&this.opt.data[e]){
var n=this.opt.data[e].name,d=this.opt.data[e].value;
0==t||this.dropdown.find(".jsDropdownItem:eq("+e+")").trigger("click",d),this.bt.find(".jsBtLabel").html(n);
}
}else $.each(this.opt.data,function(n,o){
return e==o.value||e==o.name?(0==t||a.dropdown.find(".jsDropdownItem:eq("+n+")").trigger("click",d),
a.bt.find(".jsBtLabel").html(o.name),!1):void 0;
});
return this;
},
reset:function(){
return this.bt.find(".jsBtLabel").html(this.opt.label),this.value=null,this;
},
hidegreater:function(e){
var t=this;
return"number"==typeof e&&t.opt.data&&t.opt.data[e]&&(t.dropdown.find(".jsDropdownItem").show(),
t.dropdown.find(".jsDropdownItem:gt("+e+")").hide()),this;
},
destroy:function(){
return this.isDisabled&&this.container.removeClass("disabled"),this.container.children().remove(),
this.container.off(),this;
},
enable:function(){
return this.opt.disabled=!1,this.container.removeClass("disabled"),this.opt.search&&this.bt.find(".jsBtLabel").attr("contenteditable",!0),
this;
},
disable:function(){
return this.opt.disabled=!0,this.container.addClass("disabled"),this.opt.search&&this.bt.find(".jsBtLabel").attr("contenteditable",!1),
this;
}
},t;
});define("common/wx/Step.js",["widget/processor_bar.css","tpl/step.html.js"],function(e,t,s){
"use strict";
function n(e){
this.opts=$.extend(!0,{},i,e),this.init();
}
var r=wx.T,o=(e("widget/processor_bar.css"),e("tpl/step.html.js")),i={
selected:1
},p=function(){
var e=navigator.userAgent.toLowerCase(),t=/(msie) ([\w.]+)/.exec(e)||[],s=t[1]||"";
return"msie"==s;
};
n.prototype.init=function(){
var e,t,s=this.opts,i=s.names.length,a=parseInt(s.selected,10),c=[];
for(a=0>a?0:a>i?i:a,e=0;i>e;e++)t=n.getClass(e+1,a),c.push({
name:s.names[e],
cls:t
});
this.$dom=$(r(o,{
stepArr:c,
length:i
})).appendTo(s.container),p()&&this.$dom.addClass("ie");
},n.prototype.setStep=n.prototype.go=function(e){
var t=this.$dom.find("li.weui-desktop-step"),s=t.length;
return e=0>e?0:e>s?s:e,t.each(function(t,s){
s.className=t+1==e?"weui-desktop-step current ":"weui-desktop-step";
}),this;
},n.getClass=function(e,t){
var s;
return t-1>e?s="pprev":e===t-1?s="prev":e===t?s="current":e===t+1?s="next":e>t+1&&(s="nnext"),
s;
},s.exports=n;
});define("common/wx/inputCounter.js",[],function(t,n,e){
"use strict";
function o(t,n){
this.$input=$(t),this.opts=$.extend(!0,{},i,n),this._init();
}
var i={
minLength:0,
maxLength:20,
showCounter:!0,
useGBKLength:!1,
GBKBased:!1
};
o.prototype._init=function(){
var t=this;
t.$input&&t.$input.length>0?(t.$inputBox=t.$input.parent("textarea"==t.$input.prop("tagName").toLowerCase()?".frm_textarea_box":".frm_input_box"),
t.$inputBox&&0!=t.$inputBox.length||(t.$inputBox=t.$input.parent(".js_input_counter_container")),
t.count=t._getLen(t.getValue()),t.$counter=t.$inputBox.find(".frm_counter"),t.counterExist=!0,
0==t.$counter.length&&(t.$counter=t.$inputBox.find(".js_counter_em")),0==t.$counter.length&&(t.counterExist=!1,
t.$counter=$('<em class="frm_input_append frm_counter"></em>'),t.$inputBox.append(t.$counter)),
1==t.opts.showCounter?t.show():t.hide(),t.setCount(t.count),t.inputEvent=function(){
t.setCount(t._getLen(t.getValue()));
},t.$input.on("keydown keyup",t.inputEvent)):console.log("inputCounter Err: input does not exist.");
},o.prototype.getValue=function(){
var t="";
switch(this.$input.prop("tagName")){
case"INPUT":
case"TEXTAREA":
t=this.$input.val();
break;

default:
t=this.$input.text();
}
return t;
},o.prototype._getLen=function(t){
var n=0;
return t=t||"",n=this.opts.useGBKLength?t.replace(/[^\x00-\xff]/g,"**").length:t.length,
this.opts.GBKBased&&(n=Math.ceil(n/2)),n;
},o.prototype.getCount=function(){
return this.count||0;
},o.prototype.setCount=function(t){
this.count=t,this.$counter.html(this.count+"&#47;"+this.opts.maxLength),this.count>this.opts.maxLength?(this.overflowed=!0,
this.$inputBox.addClass("warn")):this.count>0&&this.count<this.opts.minLength?(this.overflowed=!0,
this.$inputBox.addClass("warn")):(this.overflowed=!1,this.$inputBox.removeClass("warn"));
},o.prototype.hasOverflowed=function(){
return this.overflowed;
},o.prototype.show=function(){
this.$inputBox.addClass("with_counter counter_in append count"),this.$counter.show();
},o.prototype.hide=function(){
this.$inputBox.removeClass("with_counter counter_in append count warn"),this.$counter.hide();
},o.prototype.hideWithAppend=function(){
this.$inputBox.removeClass("with_counter counter_in count warn"),this.$counter.hide();
},o.prototype.destroy=function(){
this.$input.off("keydown keyup",this.inputEvent),0==this.counterExist&&(this.hide(),
this.$counter.remove());
},e.exports=o;
});define("biz_web/ui/checkbox.js",["tpl/biz_web/ui/checkbox.html.js"],function(t){
"use strict";
function e(t){
var e=$(t);
e.each(function(){
var t=$(this),e=t.prop("checked"),n=t.parent();
e?n.addClass("selected"):n.removeClass("selected");
});
}
function n(t){
var e=$(t);
e.each(function(){
var t=$(this).prop("disabled"),e=$(this).parent();
t?e.addClass("disabled"):e.removeClass("disabled");
});
}
function i(){
return"checkbox"+s++;
}
var a={
container:null,
label:"",
name:"",
type:"checkbox"
},c=t("tpl/biz_web/ui/checkbox.html.js"),r=wx.T,s=1,o=1,p=function(t){
this.options=$.extend(!0,{},a,t),this.options.index=o++,this.$container=$(this.options.container),
this.$dom=$(r(c,this.options)).appendTo(this.$container),this.$input=this.$dom.find("input"),
this.$input.checkbox();
};
return p.prototype={
checked:function(t){
return"undefined"!=typeof t&&(this.$input.prop("checked",t),e(this.$input)),this.$input.prop("checked");
},
disabled:function(t){
return"undefined"!=typeof t&&(this.$input.prop("disabled",t),n(this.$input)),this.$input.prop("disabled");
}
},$.fn.checkbox=function(t){
var a,c,r,s,o=!1;
"boolean"==typeof t?a=t:$.isPlainObject(t)?(a=t.multi,c=t.onChanged):"string"==typeof t?(o=!0,
r=t,s=[].slice.call(arguments,1)):"undefined"==typeof t&&(t={}),"undefined"==typeof a&&(a=this.is("input[type=checkbox]"));
var p=this,d=a?"checkbox":"radio",h={
checked:function(t){
return p.attr("checked",t),p.prop("checked",t),e(p),p;
},
disabled:function(t){
return p.attr("disabled",t),p.prop("disabled",t),n(p),p;
},
value:function(){
var t=p.eq(0);
return t.prop("checked")?t.val():"";
},
values:function(){
var t=[];
return p.each(function(){
$(this).prop("checked")&&t.push($(this).val());
}),t;
},
adjust:function(t){
var n;
return n="string"==typeof t?t.split(","):t,n&&n.length>0&&p.each(function(){
var t=$(this);
n.indexOf(t.val())>=0&&(t.attr("checked",!0),e(t));
}),this;
},
disable:function(t){
var e;
return e="string"==typeof t?t.split(","):t,e&&e.length>0&&p.each(function(){
var t=$(this);
e.indexOf(t.val())>=0&&(t.attr("disabled",!0),n(t));
}),this;
},
setall:function(t){
p.each(function(){
var e=$(this);
e.attr("disabled",t?!1:!0),n(e);
});
},
enable:function(t){
var e;
return e="string"==typeof t?t.split(","):t,e&&e.length>0&&p.each(function(){
var t=$(this);
e.indexOf(t.val())>=0&&(t.attr("disabled",!1),n(t));
}),this;
},
label:function(t){
return t&&(p.parent().find(".lbl_content").text(t),p.attr("data-label",t)),p;
}
};
return o&&"function"==typeof h[r]?h[r].apply(h,s):(this.addClass("frm_"+d).each(function(){
var t=$(this),e=t.parent();
if(!e.is("label")){
var n=t.attr("data-label")||"";
e=$('<label class="frm_{type}_label"><i class="icon_{type}"></i></label>'.format({
type:d
})).append("<span class='lbl_content'>{content}</span>".format({
content:n.html(!0)
})),e.insertBefore(t).prepend(t);
}
if(!this.id){
var a=i();
this.id=a;
}
e.attr("for",this.id);
}),e(this),n(this),t&&t.initOnChanged&&"function"==typeof c&&p.parent().find("input[type=checkbox],input[type=radio]").each(function(){
c.call(h,$(this));
}),this.parent().delegate("input[type=checkbox],input[type=radio]","click",function(){
var t=$(this),n=t.prop("checked");
a?(t.attr("checked",n),e(t)):(p.attr("checked",!1),t.attr("checked",!0).prop("checked",!0),
e(p)),"function"==typeof c&&c.call(h,t);
}).addClass("frm_"+d+"_label"),h);
},p;
});define("biz_web/utils/upload.js",["widget/upload.css","biz_web/lib/webuploader.js","common/wx/dialog.js","common/wx/Tips.js","tpl/uploader.html.js"],function(e){
"use strict";
function i(e){
g.src="http://isdspeed.qq.com/cgi-bin/r.cgi?flag1=7839&flag2=4&flag3=5&1="+e;
}
e("widget/upload.css");
var n=e("biz_web/lib/webuploader.js"),a=e("common/wx/dialog.js"),t=e("common/wx/Tips.js"),o=e("tpl/uploader.html.js"),r=wx.T,s=wx.path.webuploader,p=~location.hostname.search(/^mp/)?"https://mp.weixin.qq.com":"",l={
2:{
accept:{
extensions:"bmp,png,jpeg,jpg,gif",
mimeTypes:"image/bmp,image/png,image/jpeg,image/jpg,image/gif"
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
mimeTypes:"image/bmp,image/png,image/jpeg,image/jpg,image/gif,application/pdf"
},
fileSingleSizeLimit:5242880
},
7:{
accept:{
extensions:"bmp,png,jpeg,jpg,gif",
mimeTypes:"image/bmp,image/png,image/jpeg,image/jpg,image/gif"
},
fileSingleSizeLimit:5242880
},
8:{
accept:{
extensions:"bmp,png,jpeg,jpg",
mimeTypes:"image/bmp,image/png,image/jpeg,image/jpg"
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
mimeTypes:"image/bmp,image/png,image/jpeg,image/jpg"
},
fileSingleSizeLimit:5242880
},
12:{
accept:{
extensions:"mp3,wma,wav,amr",
mimeTypes:"audio/mp3,audio/wma,audio/wav,audio/amr"
},
fileSingleSizeLimit:31457280
},
13:{
accept:{
extensions:"png,bmp,jpeg,jpg,gif",
mimeTypes:"image/png,image/bmp,image/jpeg,image/jpg,image/gif"
},
fileSingleSizeLimit:2097152
}
};
l[15]=l[4];
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
},g=new Image,f={},h=function(e){
if(!e.url)throw"missing url";
var a,s,p,m=$('<ul class="upload_file_box" style="display:none"></ul>'),g=$(e.container);
g.on("click",function(){
Math.random()<.1&&d(12),c(a);
}).parent().append(m),function(){
n&&0==n.Uploader.support("html5")&&0==n.Uploader.support("flash")&&((new Image).src="/misc/jslog?level=error&id=36&content=[pageurl:"+encodeURIComponent(location.href)+",ua:"+encodeURIComponent(window.navigator.userAgent)+"]");
}(),e.only_cdn&&(e.url+="&only_cdn=1"),s={
server:wx.url(e.url+"&ticket_id="+wx.data.user_name+"&ticket="+wx.data.ticket+"&svr_time="+wx.data.time),
pick:{
id:g,
multiple:e.multi
},
fileNumLimit:e.queueSizeLimit
},p=l[e.type]||l[2],e=$.extend(!0,{},u,s,p,e);
e.server;
n&&0==n.Uploader.support("html5")&&e.compress&&(e.compress.quality=70);
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
f[e.id]=+new Date;
}),a.on("uploadSuccess",function(n,a,o){
if(Math.random()<.1&&d(16),a&&a.base_resp){
var r=+a.base_resp.ret;
if(0==r)Math.random()<.1&&(d(17),f[n.id]&&i(+new Date-f[n.id]));else switch(n.setStatus("invalid"),
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
this.reset(),m.fadeOut().html(""),f={},0==i.numOfInvalid&&i.numOfSuccess>0&&e.onAllComplete&&e.onAllComplete(null,{
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
t.err("图片尺寸太大，压缩后不能超过%s，请缩小图片尺寸再试".sprintf(e.compress.afterCompressSizeLimit?e.compress.afterCompressSizeLimit/1048576+"M":"2M")),
d(42);
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
uploadBizFile:b(p+"/cgi-bin/filetransfer?action=upload_material&f=json"),
uploadTmpFile:b(p+"/cgi-bin/filetransfer?action=preview&f=json"),
uploadCdnFile:b(p+"/cgi-bin/filetransfer?action=upload_cdn&f=json"),
uploadShopFile:b(p+"/merchant/goodsimage?action=uploadimage"),
uploadShopUnsaveFile:b(p+"/merchant/goodsimage?action=uploadimage&save=0"),
uploadVideoCdnFile:b(p+"/cgi-bin/filetransfer?action=upload_video_cdn&f=json"),
uploadRegisterFile:b(p+"/acct/realnamesubmit?type=2&action=file_set"),
uploadUpgradeFile:b(p+"/acct/servicetypeupgrade?type=2&action=file_set"),
uploadPoiFile:b(p+"/misc/setlocation?action=upload"),
mediaFile:b(p+"/cgi-bin/filetransfer?action=bizmedia"),
uploadBbsCdnFile:b(p+"/filetransfer?action=upload_cdn&f=json"),
uploadCdnFileFromAd:function(e){
return b(p+"/cgi-bin/filetransfer?action=upload_cdn_check_size&f=json&width="+e.w+"&height="+e.h+"&limit_size="+e.size);
},
uploadImageLibFile:function(e){
return e.url=p+"/cgi-bin/filetransfer?action=upload_material&f=json","undefined"!=typeof e.scene&&(e.url+="&scene="+e.scene),
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
return b(p+"/cgi-bin/filetransfer?action=upload_cdn_check_range&f=json&"+n.join("&"),"tmpfile");
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
return b(p+"/cgi-bin/filetransfer?action=preview_check_range&f=json&"+n.join("&"));
},
tmpFileUrl:w(p+"/cgi-bin/filetransfer?action=preview"),
mediaFileUrl:w(p+"/cgi-bin/filetransfer?action=bizmedia"),
multimediaFileUrl:w(p+"/cgi-bin/filetransfer?action=multimedia")
};
});define("common/wx/media/cropimg.js",["common/lib/jquery.Jcrop.js","common/wx/mpEditor/common/cropImgCgi.js","tpl/media/dialog/image_crop.html.js"],function(t){
"use strict";
function i(t){
var i=this;
this.opt=t,this.opt.jsCut=!0,this.$cotainer=$(t.container),this.url=t.url,this.cropRatio=t.cropRatio||1,
this.$cotainer.html(wx.T(r,{
url:t.url,
tips:t.tips||"",
articleIndex:t.articleIndex
})),this.$cropWrp=this.$cotainer.find(".js_crop_wrp"),this.$cropWrp.find("img").Jcrop({
allowSelect:!1,
createHandles:["nw","ne","se","sw"],
aspectRatio:this.cropRatio,
boxWidth:this.$cropWrp.width(),
boxHeight:this.$cropWrp.height(),
onChange:function(){
i.cropChange();
},
onSelect:function(){
i.cropChange();
}
},function(){
i._ImgCropper=this,$(".jcrop-handle",this.ui.selection).css({
width:"7px",
height:"7px"
}),i._ImgCropper.setImage(i.url,function(){
var t=i._ImgCropper.getBounds();
i._ImgCropper.setSelect([0,0,t[0],t[1]/i.cropRatio]);
});
}),this.initJsCut();
}
t("common/lib/jquery.Jcrop.js");
var o=t("common/wx/mpEditor/common/cropImgCgi.js"),r=t("tpl/media/dialog/image_crop.html.js");
return i.prototype={
initJsCut:function(){
if(this.opt.jsCut){
var t=this;
this.myCanvas=document.createElement("canvas"),this.mycrossOriginImg=document.createElement("img"),
this.mycrossOriginImg.crossOrigin="anonymous",this.mycrossOriginImg.src=this.url+"&t="+Math.random(),
this.mycrossOriginImg.loadSuc=null,this.mycrossOriginImg.onload=function(){
this.loadSuc=!0,t.cropChange();
},this.mycrossOriginImg.onerror=function(){
this.loadSuc=!1,t.initJsCut();
};
}
},
cropChange:function(){
var t=this;
if(t._ImgCropper&&t.opt.jsCut&&t.mycrossOriginImg.loadSuc){
var i=t._ImgCropper.tellSelect(),o=t._ImgCropper.getScaleFactor(),r=(t._ImgCropper.ui.botImg.width()*o[0],
t._ImgCropper.ui.botImg.height()*o[1],t.myCanvas),e=r.getContext("2d");
r.style.width=i.w+"px",r.width=i.w,r.style.height=i.h+"px",r.height=i.h,e.drawImage(t.mycrossOriginImg,i.x,i.y,i.w,i.h,0,0,i.w,i.h);
try{
var s=r.toDataURL();
this.$cotainer.find(".js_preview").each(function(){
this.style.backgroundImage='url("'+s+'")';
});
}catch(n){}
}
},
getUrl:function(t){
if(!this._ImgCropper)return void("function"==typeof t.onerror&&t.onerror({
retcode:-1
}));
var i=this._ImgCropper.tellSelect(),r=this._ImgCropper.getScaleFactor(),e=this._ImgCropper.ui.botImg.width()*r[0],s=this._ImgCropper.ui.botImg.height()*r[1];
o.getUrl({
imgurl:this.url,
x1:i.x/e,
y1:i.y/s,
x2:i.x2/e,
y2:i.y2/s,
onerror:function(i){
t.onerror(i||{});
},
onsuccess:function(i){
t.onsuccess(i);
}
});
}
},i;
});define("author/author_utils.js",["common/wx/Cgi.js","biz_web/lib/store.js"],function(t){
"use strict";
function r(t){
var r=[];
if(t.nickname)f.authorListByNickname&&f.authorListByNickname[t.nickname]&&r.push(f.authorListByNickname[t.nickname]);else if(t.idArray&&t.idArray.length>0)for(var e=0,i=t.idArray.length;i>e;e++){
var o=t.idArray[e];
f.authorListById[o]&&r.push(f.authorListById[o]);
}
return r;
}
function e(t){
if(t)for(var r=0,e=t.length;e>r;r++){
var i=t[r];
i.can_reward&&0==i.author_status&&(f.authorListById[i.writerid]=i,f.authorListByNickname[i.nickname]=i);
}
}
function i(t){
t=t||{};
var i="function"==typeof t.onError?t.onError:function(){},n="function"==typeof t.onSuccess?t.onSuccess:function(){},a=r(t);
return t.idArray&&a.length!=t.idArray&&(a=[]),a&&a.length>0?void n({
writerlist:a,
nickname:t.nickname
}):void u.get({
url:"/acct/writermgr?action=search",
data:{
author:t.nickname,
writerids:t.idArray?t.idArray.join("_"):""
}
},{
done:function(r){
if(r.base_resp&&0===r.base_resp.ret){
var a=r.pageinfo&&r.pageinfo.writerlist?r.pageinfo.writerlist:[];
"[object Object]"==Object.prototype.toString.call(a)?a=o([a]):"[object Array]"==Object.prototype.toString.call(a)&&(a=o(a)),
e(a),n({
writerlist:a,
nickname:t.nickname
});
}else i();
},
fail:function(){
i();
}
});
}
function o(t){
for(var r=0;r<t.length;r++)t[r].homepageqrcode=wx.url("/acct/writermgr?action=homepageqrcode&writerid="+t[r].writerid),
t[r].nickname_encode=encodeURIComponent(t[r].nickname);
return t;
}
function n(){
var t=s.get(f.cacheKey)||{};
return"[object Object]"!==Object.prototype.toString.call(t)&&(t={}),t;
}
function a(t){
var r=[],e=[],i={},o=function(t,r,e){
if(t)for(var o=0,n=t.length;n>o;o++){
var a=t[o];
a[r]&&!i[a[r]]&&(e.push(a),i[a[r]]=1);
}
},a=t.author||[],c=t.customerAuthor||[];
o(a,"writerid",r),o(c,"nickname",e);
var u=n(),h=u.author||[],l=u.customerAuthor||[];
o(h,"writerid",r),o(l,"nickname",e),r=r.splice(0,f.authorMax),e=e.splice(0,f.customerAuthorMax),
s.set(f.cacheKey,{
author:r,
customerAuthor:e
});
}
function c(t){
t=t||{};
var r="function"==typeof t.onError?t.onError:function(){},i="function"==typeof t.onSuccess?t.onSuccess:function(){};
u.get({
url:"/acct/writermgr?action=page"
},{
done:function(t){
if(t.base_resp&&0===t.base_resp.ret){
var n=t.pageinfo&&t.pageinfo.writerlist?t.pageinfo.writerlist:[];
"[object Object]"==Object.prototype.toString.call(n)?n=o([n]):"[object Array]"==Object.prototype.toString.call(n)&&(n=o(n)),
e(n),i({
writerlist:n,
totalCnt:t.pageinfo&&t.pageinfo.total_cnt?t.pageinfo.total_cnt:0
});
}else r();
},
fail:function(){
r();
}
});
}
var u=t("common/wx/Cgi.js"),s=t("biz_web/lib/store.js"),f={
cacheKey:"editoHitoryrAuthorList_"+wx.data.uin,
authorMax:4,
customerAuthorMax:5,
authorListByNickname:{},
authorListById:{}
};
return{
searchAuthorList:i,
getAuthorList:c,
getHistory:n,
setHistory:a
};
});define("tpl/media/reward_swtich_tips.html.js",[],function(){
return'{if type == 1}\n{else if type == 2}\n{else if type == 3}\n{else if type==5||type==6}\n无法开启赞赏，因为还没有赞赏账户授权给本公众号<br>\n如果要取得授权，请到<a data-type="2" class="js_show_author_qrcode_popover" href="javascript:;">赞赏账户小程序</a>-赞赏账户设置-可收款公众号中添加本公众号。 {if type==5}\n <br>\n 如果要创建赞赏账户，你可以发送<a target="_blank" href="{inviteAuthorLink}">赞赏账户邀请</a>。 {/if}\n{/if}\n';
});define("author/author_info_list.js",["author/author_info.js","author/author_popover.js","author/author_utils.js"],function(t){
"use strict";
function i(t){
t.$inputContainer.on("blur",function(){
t.$inputContainer.val()&&t.$inputContainer.trigger("click",{
frm:"blur"
});
}),t.$inputContainer.on("keyup click",function(i,n){
e(),c.getAuthorListId&&(clearTimeout(c.getAuthorListId),c.getAuthorListId=null),
c.authorLoadingId&&(clearTimeout(c.authorLoadingId),c.authorLoadingId=null),"click"!=i.type&&(o({
$highline:t.$highline,
highlineClass:t.highlineClass
}),"function"==typeof t.stateChange&&t.stateChange());
var s=$(this),u=s.val()||"";
if(!u)return void a(t);
(13==i.keyCode||n&&13==n.keyCode)&&(c.authorLoadingId=setTimeout(function(){
r({
listDomOpt:{
info:null,
container:t.$listContainer[0]
},
$author:s
});
},800));
var d=function(o){
c.authorLoadingId&&(clearTimeout(c.authorLoadingId),c.authorLoadingId=null);
var a=s.val()||"";
if(a&&o.nickname==a){
var u=o.writerlist;
u&&1==u.length&&!(1*u[0].author_status)&&1*u[0].can_reward&&"function"==typeof t.stateChange&&t.stateChange(u[0]),
u&&u.length>0&&(!n||n&&"blur"!=n.frm)||13==i.keyCode||n&&13==n.keyCode||(!u||0==u.length)&&n&&"blur"==n.frm?r({
listDomOpt:{
info:u,
container:t.$listContainer[0],
inviteAuthorLink:t.inviteAuthorLink,
onItemClick:h({
$highline:t.$highline,
highlineClass:t.highlineClass,
stateChange:t.stateChange
})
}
}):e(s);
}
};
c.getAuthorListId=setTimeout(function(){
l.searchAuthorList({
nickname:u,
onError:function(){
d({
nickname:u
});
},
onSuccess:function(t){
d(t);
}
});
},200);
}),u.init({
$container:t.$inputContainer.parent()
});
}
function e(){
c.searchListObj&&(c.searchListObj=null,s.remove());
}
function r(t){
c.searchListObj=s.show(t.listDomOpt),t.$author&&t.$author.length>0&&u.stopPopover({
$container:t.$author
});
}
function n(t){
t.$highline&&t.highlineClass&&t.$highline.addClass(t.highlineClass),t.$authorQrcode&&(t.$authorQrcode.addClass("js_show_author_qrcode_popover ").attr("data-writerid",t.data.writerid).attr("data-type","1").attr("data-desc",encodeURIComponent(t.data.author)),
u.resetPopover({
$container:t.$authorQrcode
})),t.$highline&&t.$authorQrcode&&t.$highline[0].contains(t.$authorQrcode[0])?u.init({
$container:t.$highline
}):t.$authorQrcode&&u.init({
$container:t.$authorQrcode
});
}
function o(t){
t.$highline&&t.highlineClass&&t.$highline.removeClass(t.highlineClass),t.$authorQrcode&&t.$authorQrcode.removeClass("js_show_author_qrcode_popover ").removeAttr("data-writerid").removeAttr("data-type","1").removeAttr("data-desc");
}
function a(t){
var i=l.getHistory().author,e=[],n=0,o=1;
i&&i.length>0&&o++;
var a=0,s=function(i,s){
if("[object Array]"===Object.prototype.toString.call(i))for(var u=0,l=i.length;l>u;u++)e.push(i[u]);else if("[object Object]"===Object.prototype.toString.call(i))for(var u=0;u<e.length;u++){
var c=e[u];
c.isHistory&&(i[c.writerid]?e[u]=i[c.writerid]:(e.splice(u,1),u--));
}
if(s>0&&(n=s),a==o&&t.$inputContainer&&0!=t.$inputContainer.length&&!t.$inputContainer.val()){
if(0==e.length)e=null;else{
for(var d={},u=0;u<e.length;u++){
var c=e[u];
d[c.writerid]?(e.splice(u,1),u--):d[c.writerid]=1;
}
e=e.splice(0,4);
}
r({
listDomOpt:{
showLoading:!1,
info:e,
inviteAuthorLink:t.inviteAuthorLink,
botTips:"可以搜索已经授权给你的作者（共%s个）".sprintf(n),
container:t.$listContainer[0],
onItemClick:h({
$highline:t.$highline,
highlineClass:t.highlineClass,
stateChange:t.stateChange
})
}
});
}
};
if(i&&i.length>0){
for(var u=[],c=0,d=i.length;d>c;c++)u.push(i[c].writerid),e.push({
isHistory:!0,
writerid:i[c].writerid
});
l.searchAuthorList({
idArray:u,
onError:function(){
a++,s();
},
onSuccess:function(t){
for(var i={},e=0,r=t.writerlist.length;r>e;e++){
var n=t.writerlist[e];
!n||1*n.author_status||(i[n.writerid]=n);
}
a++,s(i);
}
});
}
l.getAuthorList({
onError:function(){
a++,s();
},
onSuccess:function(t){
for(var i=[],e=0,r=t.writerlist.length;r>e;e++){
var n=t.writerlist[e];
!n||1*n.author_status||i.push(n);
}
a++,s(i,t.totalCnt);
}
});
}
function h(t){
return function(i,e){
c.hideSearchListId&&(clearTimeout(c.hideSearchListId),c.hideSearchListId=null);
var r=e[i];
!r||1*r.author_status||1*r.can_reward==0||(n({
data:r,
$highline:t.$highline,
highlineClass:t.highlineClass
}),"function"==typeof t.stateChange&&t.stateChange(r),this.destroy());
};
}
var s=t("author/author_info.js"),u=t("author/author_popover.js"),l=t("author/author_utils.js"),c={
authorLoadingId:null,
getAuthorListId:null,
hideSearchListId:null,
searchListObj:null
};
return{
initAuthorSearchList:i,
highlineAuthor:n,
resetHighlineAuthor:o,
removeAuthorListDom:e
};
});define("author/author_popover.js",["tpl/author/qrcode_popover.html.js","widget/weui-desktop/author/author_qrcode.css"],function(o){
"use strict";
function t(o){
var t=o.$container||$("body");
t.off("mouseover","."+n.eventClass,p),t.off("mouseout","."+n.eventClass,i),t.on("mouseover","."+n.eventClass,p),
t.on("mouseout","."+n.eventClass,i);
}
function e(o){
var t=o.$container.filter("."+n.eventClass).add(o.$container.find("."+n.eventClass));
t.attr(n.stopPopoverAttr,"1"),d(0);
}
function r(o){
var t=o.$container.filter("."+n.eventClass).add(o.$container.find("."+n.eventClass));
t.removeAttr(n.stopPopoverAttr);
}
var a=o("tpl/author/qrcode_popover.html.js");
o("widget/weui-desktop/author/author_qrcode.css");
var n={
canShow:!0,
hidePopoverId:null,
$authorPopover:null,
$curBindShowtarget:null,
eventClass:"js_show_author_qrcode_popover",
stopPopoverAttr:"data-authorpopoverstop"
},d=function(o){
n.hidePopoverId&&(clearTimeout(n.hidePopoverId),n.hidePopoverId=null),"undefined"==typeof o&&(o=300),
n.hidePopoverId=setTimeout(function(){
n.$authorPopover&&n.$authorPopover.hide(),n.$curBindShowtarget=null;
},o);
},i=function(o){
var t=$(o.target||o.srcElement);
n.$authorPopover&&!$.contains(n.$authorPopover,t)&&n.$curBindShowtarget&&!$.contains(n.$curBindShowtarget,t)&&d();
},p=function(){
if(n.canShow){
var o=$(this);
if("1"!=o.attr(n.stopPopoverAttr)){
n.$curBindShowtarget=o,n.hidePopoverId&&(clearTimeout(n.hidePopoverId),n.hidePopoverId=null);
var t=n.$curBindShowtarget.attr("data-type");
if("2"==t){
var e=decodeURIComponent(n.$curBindShowtarget.attr("data-desc")||""),r=decodeURIComponent(n.$curBindShowtarget.attr("data-bottips")||""),d=n.$curBindShowtarget.attr("data-writerid"),p=n.$curBindShowtarget.attr("data-src");
1==t?(r||(r="扫码查看赞赏账户"),p||(p="/acct/writermgr?action=homepageqrcode&writerid="+d)):2==t&&(e||(e="扫码进入赞赏账户小程序"),
r||(r=""),p||(p="https://res.wx.qq.com/op_res/a2Vp5jslVRea9g69UX4IEmW-K80_Hs_OVRZVSNPJB4HFhB6mnYgtEgqlDpoMyyDu")),
n.$authorPopover||(n.$authorPopover=$(wx.T(a,{})).appendTo($("body")),n.$authorPopover.hover(function(){
n.hidePopoverId&&(clearTimeout(n.hidePopoverId),n.hidePopoverId=null);
},i)),n.$authorPopover.find(".js_author_popover_desc").text(e),n.$authorPopover.find(".js_author_popover_botTips").text(r),
n.$authorPopover.find(".js_author_popover_qrcode").attr("src",wx.url(p)),n.$authorPopover.show();
var u=n.$curBindShowtarget[0].getBoundingClientRect(),s=$(window).height(),h=n.$authorPopover.height(),v=n.$authorPopover.width(),c=0;
c="input"==n.$curBindShowtarget[0].tagName.toLowerCase()?u.left-v/2+20:u.left-v/2+u.width/2,
u.bottom+h>s?n.$authorPopover.css({
top:u.top-h+$(window).scrollTop()-20,
left:c
}).addClass("pos_down_center"):n.$authorPopover.css({
top:u.bottom+$(window).scrollTop(),
left:c
}).removeClass("pos_down_center");
}
}
}
};
return{
init:t,
stopPopover:e,
resetPopover:r
};
});define("biz_web/ui/jquery.scrollbar.js",["biz_web/widget/jquery.scrollbar.css"],function(l){
"use strict";
function e(l){
if(t.webkit&&!l)return{
height:0,
width:0
};
if(!t.data.outer){
var e={
border:"none",
"box-sizing":"content-box",
height:"200px",
margin:"0",
padding:"0",
width:"200px"
};
t.data.inner=$("<div>").css($.extend({},e)),t.data.outer=$("<div>").css($.extend({
left:"-1000px",
overflow:"scroll",
position:"absolute",
top:"-1000px"
},e)).append(t.data.inner).appendTo("body");
}
return t.data.outer.scrollLeft(1e3).scrollTop(1e3),{
height:Math.ceil(t.data.outer.offset().top-t.data.inner.offset().top||0),
width:Math.ceil(t.data.outer.offset().left-t.data.inner.offset().left||0)
};
}
function s(){
var l=e(!0);
return!(l.height||l.width);
}
function o(l){
var e=l.originalEvent;
return e.axis&&e.axis===e.HORIZONTAL_AXIS?!1:e.wheelDeltaX?!1:!0;
}
l("biz_web/widget/jquery.scrollbar.css");
var r=!1,t={
data:{
index:0,
name:"scrollbar"
},
macosx:/mac/i.test(navigator.platform),
mobile:/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),
overlay:null,
scroll:null,
scrolls:[],
webkit:/webkit/i.test(navigator.userAgent)&&!/edge\/\d+/i.test(navigator.userAgent)
};
t.scrolls.add=function(l){
this.remove(l).push(l);
},t.scrolls.remove=function(l){
for(;$.inArray(l,this)>=0;)this.splice($.inArray(l,this),1);
return this;
};
var i={
autoScrollSize:!0,
autoUpdate:!0,
debug:!1,
disableBodyScroll:!1,
duration:200,
ignoreMobile:!1,
ignoreOverlay:!1,
scrollStep:30,
showArrows:!1,
stepScrolling:!0,
scrollx:null,
scrolly:null,
onDestroy:null,
onInit:null,
onScroll:null,
onUpdate:null
},n=function(l){
t.scroll||(t.overlay=s(),t.scroll=e(),a(),$(window).resize(function(){
var l=!1;
if(t.scroll&&(t.scroll.height||t.scroll.width)){
var s=e();
(s.height!==t.scroll.height||s.width!==t.scroll.width)&&(t.scroll=s,l=!0);
}
a(l);
})),this.container=l,this.namespace=".scrollbar_"+t.data.index++,this.options=$.extend({},i,window.jQueryScrollbarOptions||{}),
this.scrollTo=null,this.scrollx={},this.scrolly={},l.data(t.data.name,this),t.scrolls.add(this);
};
n.prototype={
destroy:function(){
if(this.wrapper){
this.container.removeData(t.data.name),t.scrolls.remove(this);
var l=this.container.scrollLeft(),e=this.container.scrollTop();
this.container.insertBefore(this.wrapper).css({
height:"",
margin:"",
"max-height":""
}).removeClass("scroll-content scroll-scrollx_visible scroll-scrolly_visible").off(this.namespace).scrollLeft(l).scrollTop(e),
this.scrollx.scroll.removeClass("scroll-scrollx_visible").find("div").andSelf().off(this.namespace),
this.scrolly.scroll.removeClass("scroll-scrolly_visible").find("div").andSelf().off(this.namespace),
this.wrapper.remove(),$(document).add("body").off(this.namespace),$.isFunction(this.options.onDestroy)&&this.options.onDestroy.apply(this,[this.container]);
}
},
init:function(l){
var e=this,s=this.container,r=this.containerWrapper||s,i=this.namespace,n=$.extend(this.options,l||{}),c={
x:this.scrollx,
y:this.scrolly
},a=this.wrapper,d={
scrollLeft:s.scrollLeft(),
scrollTop:s.scrollTop()
};
if(t.mobile&&n.ignoreMobile||t.overlay&&n.ignoreOverlay||t.macosx&&!t.webkit)return!1;
if(a)r.css({
height:"auto",
"margin-bottom":-1*t.scroll.height+"px",
"margin-right":-1*t.scroll.width+"px",
"max-height":""
});else{
if(this.wrapper=a=$("<div>").addClass("scroll-wrapper").addClass(s.attr("class")).css("position","absolute"==s.css("position")?"absolute":"relative").insertBefore(s).append(s),
s.is("textarea")&&(this.containerWrapper=r=$("<div>").insertBefore(s).append(s),
a.addClass("scroll-textarea")),r.addClass("scroll-content").css({
height:"auto",
"margin-bottom":-1*t.scroll.height+"px",
"margin-right":-1*t.scroll.width+"px",
"max-height":""
}),s.on("scroll"+i,function(){
$.isFunction(n.onScroll)&&n.onScroll.call(e,{
maxScroll:c.y.maxScrollOffset,
scroll:s.scrollTop(),
size:c.y.size,
visible:c.y.visible
},{
maxScroll:c.x.maxScrollOffset,
scroll:s.scrollLeft(),
size:c.x.size,
visible:c.x.visible
}),c.x.isVisible&&c.x.scroll.bar.css("left",s.scrollLeft()*c.x.kx+"px"),c.y.isVisible&&c.y.scroll.bar.css("top",s.scrollTop()*c.y.kx+"px");
}),a.on("scroll"+i,function(){
a.scrollTop(0).scrollLeft(0);
}),n.disableBodyScroll){
var h=function(l){
o(l)?c.y.isVisible&&c.y.mousewheel(l):c.x.isVisible&&c.x.mousewheel(l);
};
a.on("MozMousePixelScroll"+i,h),a.on("mousewheel"+i,h),t.mobile&&a.on("touchstart"+i,function(l){
var e=l.originalEvent.touches&&l.originalEvent.touches[0]||l,o={
pageX:e.pageX,
pageY:e.pageY
},r={
left:s.scrollLeft(),
top:s.scrollTop()
};
$(document).on("touchmove"+i,function(l){
var e=l.originalEvent.targetTouches&&l.originalEvent.targetTouches[0]||l;
s.scrollLeft(r.left+o.pageX-e.pageX),s.scrollTop(r.top+o.pageY-e.pageY),l.preventDefault();
}),$(document).on("touchend"+i,function(){
$(document).off(i);
});
});
}
$.isFunction(n.onInit)&&n.onInit.apply(this,[s]);
}
$.each(c,function(l,r){
var t=null,a=1,d="x"===l?"scrollLeft":"scrollTop",h=n.scrollStep,p=function(){
var l=s[d]();
s[d](l+h),1==a&&l+h>=u&&(l=s[d]()),-1==a&&u>=l+h&&(l=s[d]()),s[d]()==l&&t&&t();
},u=0;
r.scroll||(r.scroll=e._getScroll(n["scroll"+l]).addClass("scroll-"+l),n.showArrows&&r.scroll.addClass("scroll-element_arrows_visible"),
r.mousewheel=function(t){
if(!r.isVisible||"x"===l&&o(t))return!0;
if("y"===l&&!o(t))return c.x.mousewheel(t),!0;
var i=-1*t.originalEvent.wheelDelta||t.originalEvent.detail,n=r.size-r.visible-r.offset;
return(i>0&&n>u||0>i&&u>0)&&(u+=i,0>u&&(u=0),u>n&&(u=n),e.scrollTo=e.scrollTo||{},
e.scrollTo[d]=u,setTimeout(function(){
e.scrollTo&&(s.stop().animate(e.scrollTo,240,"linear",function(){
u=s[d]();
}),e.scrollTo=null);
},1)),t.preventDefault(),!1;
},r.scroll.on("MozMousePixelScroll"+i,r.mousewheel).on("mousewheel"+i,r.mousewheel).on("mouseenter"+i,function(){
u=s[d]();
}),r.scroll.find(".scroll-arrow, .scroll-element_track").on("mousedown"+i,function(o){
if(1!=o.which)return!0;
a=1;
var i={
eventOffset:o["x"===l?"pageX":"pageY"],
maxScrollValue:r.size-r.visible-r.offset,
scrollbarOffset:r.scroll.bar.offset()["x"===l?"left":"top"],
scrollbarSize:r.scroll.bar["x"===l?"outerWidth":"outerHeight"]()
},c=0,f=0;
return $(this).hasClass("scroll-arrow")?(a=$(this).hasClass("scroll-arrow_more")?1:-1,
h=n.scrollStep*a,u=a>0?i.maxScrollValue:0):(a=i.eventOffset>i.scrollbarOffset+i.scrollbarSize?1:i.eventOffset<i.scrollbarOffset?-1:0,
h=Math.round(.75*r.visible)*a,u=i.eventOffset-i.scrollbarOffset-(n.stepScrolling?1==a?i.scrollbarSize:0:Math.round(i.scrollbarSize/2)),
u=s[d]()+u/r.kx),e.scrollTo=e.scrollTo||{},e.scrollTo[d]=n.stepScrolling?s[d]()+h:u,
n.stepScrolling&&(t=function(){
u=s[d](),clearInterval(f),clearTimeout(c),c=0,f=0;
},c=setTimeout(function(){
f=setInterval(p,40);
},n.duration+100)),setTimeout(function(){
e.scrollTo&&(s.animate(e.scrollTo,n.duration),e.scrollTo=null);
},1),e._handleMouseDown(t,o);
}),r.scroll.bar.on("mousedown"+i,function(o){
if(1!=o.which)return!0;
var t=o["x"===l?"pageX":"pageY"],n=s[d]();
return r.scroll.addClass("scroll-draggable"),$(document).on("mousemove"+i,function(e){
var o=parseInt((e["x"===l?"pageX":"pageY"]-t)/r.kx,10);
s[d](n+o);
}),e._handleMouseDown(function(){
r.scroll.removeClass("scroll-draggable"),u=s[d]();
},o);
}));
}),$.each(c,function(l,e){
var s="scroll-scroll"+l+"_visible",o="x"==l?c.y:c.x;
e.scroll.removeClass(s),o.scroll.removeClass(s),r.removeClass(s);
}),$.each(c,function(l,e){
$.extend(e,"x"==l?{
offset:parseInt(s.css("left"),10)||0,
size:s.prop("scrollWidth"),
visible:a.width()
}:{
offset:parseInt(s.css("top"),10)||0,
size:s.prop("scrollHeight"),
visible:a.height()
});
}),this._updateScroll("x",this.scrollx),this._updateScroll("y",this.scrolly),$.isFunction(n.onUpdate)&&n.onUpdate.apply(this,[s]),
$.each(c,function(l,e){
var o="x"===l?"left":"top",r="x"===l?"outerWidth":"outerHeight",t="x"===l?"width":"height",i=parseInt(s.css(o),10)||0,c=e.size,a=e.visible+i,d=e.scroll.size[r]()+(parseInt(e.scroll.size.css(o),10)||0);
n.autoScrollSize&&(e.scrollbarSize=parseInt(d*a/c,10),e.scroll.bar.css(t,e.scrollbarSize+"px")),
e.scrollbarSize=e.scroll.bar[r](),e.kx=(d-e.scrollbarSize)/(c-a)||1,e.maxScrollOffset=c-a;
}),s.scrollLeft(d.scrollLeft).scrollTop(d.scrollTop);
},
_getScroll:function(l){
var e={
advanced:['<div class="scroll-element">','<div class="scroll-element_corner"></div>','<div class="scroll-arrow scroll-arrow_less"></div>','<div class="scroll-arrow scroll-arrow_more"></div>','<div class="scroll-element_outer">','<div class="scroll-element_size"></div>','<div class="scroll-element_inner-wrapper">','<div class="scroll-element_inner scroll-element_track">','<div class="scroll-element_inner-bottom"></div>',"</div>","</div>",'<div class="scroll-bar">','<div class="scroll-bar_body">','<div class="scroll-bar_body-inner"></div>',"</div>",'<div class="scroll-bar_bottom"></div>','<div class="scroll-bar_center"></div>',"</div>","</div>","</div>"].join(""),
simple:['<div class="scroll-element">','<div class="scroll-element_outer">','<div class="scroll-element_size"></div>','<div class="scroll-element_track"></div>','<div class="scroll-bar"></div>',"</div>","</div>"].join("")
};
return e[l]&&(l=e[l]),l||(l=e.simple),l="string"==typeof l?$(l).appendTo(this.wrapper):$(l),
$.extend(l,{
bar:l.find(".scroll-bar"),
size:l.find(".scroll-element_size"),
track:l.find(".scroll-element_track")
}),l;
},
_handleMouseDown:function(l,e){
var s=this.namespace;
return $(document).on("blur"+s,function(){
$(document).add("body").off(s),l&&l();
}),$(document).on("dragstart"+s,function(l){
return l.preventDefault(),!1;
}),$(document).on("mouseup"+s,function(){
$(document).add("body").off(s),l&&l();
}),$("body").on("selectstart"+s,function(l){
return l.preventDefault(),!1;
}),e&&e.preventDefault(),!1;
},
_updateScroll:function(l,e){
var s=this.container,o=this.containerWrapper||s,r="scroll-scroll"+l+"_visible",i="x"===l?this.scrolly:this.scrollx,n=parseInt(this.container.css("x"===l?"left":"top"),10)||0,c=this.wrapper,a=e.size,d=e.visible+n;
e.isVisible=a-d>1,e.isVisible?(e.scroll.addClass(r),i.scroll.addClass(r),o.addClass(r)):(e.scroll.removeClass(r),
i.scroll.removeClass(r),o.removeClass(r)),"y"===l&&o.css(s.is("textarea")||d>a?{
height:d+t.scroll.height+"px",
"max-height":"none"
}:{
"max-height":d+t.scroll.height+"px"
}),(e.size!=s.prop("scrollWidth")||i.size!=s.prop("scrollHeight")||e.visible!=c.width()||i.visible!=c.height()||e.offset!=(parseInt(s.css("left"),10)||0)||i.offset!=(parseInt(s.css("top"),10)||0))&&($.extend(this.scrollx,{
offset:parseInt(s.css("left"),10)||0,
size:s.prop("scrollWidth"),
visible:c.width()
}),$.extend(this.scrolly,{
offset:parseInt(s.css("top"),10)||0,
size:this.container.prop("scrollHeight"),
visible:c.height()
}),this._updateScroll("x"===l?"y":"x",i));
}
};
var c=n;
$.fn.scrollbar=function(l,e){
return"string"!=typeof l&&(e=l,l="init"),"undefined"==typeof e&&(e=[]),$.isArray(e)||(e=[e]),
this.not("body, .scroll-wrapper").each(function(){
var s=$(this),o=s.data(t.data.name);
(o||"init"===l)&&(o||(o=new c(s)),o[l]&&o[l].apply(o,e));
}),this;
},$.fn.scrollbar.options=i;
var a=$.fn.scrollbar.updateScrollbars=function(){
var l=0,e=0;
return function(s){
var o,i,n,c,d,h,p;
for(o=0;o<t.scrolls.length;o++)c=t.scrolls[o],i=c.container,n=c.options,d=c.wrapper,
h=c.scrollx,p=c.scrolly,(s||n.autoUpdate&&d&&d.is(":visible")&&(i.prop("scrollWidth")!=h.size||i.prop("scrollHeight")!=p.size||d.width()!=h.visible||d.height()!=p.visible))&&(c.init(),
r&&(window.console&&console.log({
scrollHeight:i.prop("scrollHeight")+":"+c.scrolly.size,
scrollWidth:i.prop("scrollWidth")+":"+c.scrollx.size,
visibleHeight:d.height()+":"+c.scrolly.visible,
visibleWidth:d.width()+":"+c.scrollx.visible
},!0),e++));
r&&e>10?(window.console&&console.log("Scroll updates exceed 10"),a=function(){}):(clearTimeout(l),
l=setTimeout(a,300));
};
}();
});define("media/appmsg_edit_v2.js",["biz_web/ui/jquery.scrollbar.js","author/author_popover.js","author/author_info_list.js","tpl/media/reward_swtich_tips.html.js","author/author_utils.js","common/wx/media/cropimg.js","common/qq/Class.js","biz_web/utils/upload.js","biz_web/ui/checkbox.js","common/wx/inputCounter.js","common/wx/Step.js","biz_web/ui/dropdown.js","common/wx/dropdownClassify.js","common/wx/tooltips.js","biz_common/jquery.validate.js","common/wx/Tips.js","biz_common/moment.js","common/wx/media/imageDialog.js","common/wx/preview.js","common/wx/dialog.js","common/wx/popover.js","common/wx/media/imgsDialogByUrls.js","common/wx/ban.js","common/wx/Cgi.js","original/whitelist_dialog.js","common/wx/pagebar.js","common/wx/mpEditor/pluginsList.js","common/wx/mpEditor/plugin/insertTemplate.js","common/wx/mpEditor/plugin/templateList.js","biz_web/lib/store.js","common/wx/mpEditor/editor.js","tpl/media/appmsg_edit/article.html.js","media/article_list.js","media/media_static_data.js","media/report.js","tpl/media/audit_fail_tip.html.js","biz_common/utils/wxgspeedsdk.js"],function(t){
"use strict";
function e(t,e,i){
(e||1)>U&&$.post("/misc/jslog?1=1"+wx.data.param,{
id:t,
val:1,
level:i||"error",
content:"[file=media/appmsg_edit]"
});
}
function i(t,e){
var i=$(t);
return i.find(".vote_area").length>0?"投票":i.find(".card_iframe").length>0?"卡券":i.find(".weapp_text_link").length>0?"小程序链接":i.find(".weapp_image_link").length>0?"小程序链接":i.find(".miniprogram_element").length>0?"小程序卡片":i.find(".js_editor_product").length>0?"商品":i.find(".js_editor_cps").length>0?"广告卡片":e&&e.ad_info&&e.ad_info.ad_id?"广告卡片":"";
}
t("biz_web/ui/jquery.scrollbar.js");
var n,a=t("author/author_popover.js"),r=t("author/author_info_list.js"),o=t("tpl/media/reward_swtich_tips.html.js"),s=t("author/author_utils.js"),d=t("common/wx/media/cropimg.js"),c=t("common/qq/Class.js"),_=(t("biz_web/utils/upload.js"),
t("biz_web/ui/checkbox.js"),t("common/wx/inputCounter.js")),l=t("common/wx/Step.js"),u=(t("biz_web/ui/dropdown.js"),
t("common/wx/dropdownClassify.js")),p=t("common/wx/tooltips.js"),h=t("biz_common/jquery.validate.js").rules,m=t("common/wx/Tips.js"),f=t("biz_common/moment.js"),g=t("common/wx/media/imageDialog.js"),w=t("common/wx/preview.js"),j=t("common/wx/dialog.js"),y=t("common/wx/popover.js"),v=t("common/wx/media/imgsDialogByUrls.js"),b=t("common/wx/ban.js"),x=t("common/wx/Cgi.js"),k=(t("original/whitelist_dialog.js"),
t("common/wx/pagebar.js")),C=t("common/wx/mpEditor/pluginsList.js"),T=t("common/wx/mpEditor/plugin/insertTemplate.js"),S=t("common/wx/mpEditor/plugin/templateList.js"),D=t("biz_web/lib/store.js"),L=t("common/wx/mpEditor/editor.js"),I=t("tpl/media/appmsg_edit/article.html.js"),O=t("media/article_list.js"),A=t("media/media_static_data.js"),E=t("media/report.js"),P=(A.URL_PLATFORM_MAP,
A.article_type),R=wx.cgiData,q=document.referrer,B=(t("tpl/media/audit_fail_tip.html.js"),
{
originalProtoKey:"mpeditor_original_reward_proto_"+wx.data.uin,
curRenderType:1,
$addPanel:null,
hideAddPanelId:null,
canShowAddPanel:!0
});
!function(t){
t.fn.placeholder2=function(){
if(!("placeholder"in document.createElement("input"))){
var e=t(this).siblings(".tips_global");
t(this).on("focus",function(){
e.hide();
}).on("blur",function(){
""===this.value?e.show():e.hide();
}).trigger("blur");
}
},t.extend(t.easing,{
easeOutCubic:function(t,e,i,n,a){
return n*((e=e/a-1)*e*e+1)+i;
}
});
}(jQuery);
var U=Math.random(),z=c.declare({
init:function(t){
var e=this;
e.opt=t,$.extend(!0,e,t),e.$editor=$(e.editor_selector).html(wx.T(I,{
can_use_copyright:R.can_use_copyright,
can_use_reward:R.can_use_reward,
can_use_payforread:R.can_use_payforread,
can_use_comment:R.can_use_comment,
can_use_appmsg_source_url:R.can_use_appmsg_source_url,
is_ios_reward_open:R.is_ios_reward_open,
has_invited_original:R.has_invited_original,
orginal_apply_stat:R.orginal_apply_stat,
can_use_original_reprint:R.can_use_original_reprint,
token:wx.data.t,
is_illegal:1*e.appmsg_data.is_illegal||0
})),e._initUEditor(),$("#media_item_list_scrollbar").scrollbar({
autoUpdate:!1
}),$("#article_item_list_scrollbar").scrollbar({
autoUpdate:!1,
onScroll:function(){
e.ueditor.fireEvent("article_item_list_scroll");
}
}),e.formItemsOpt={
title:{
readonly:!1,
readonlyTips:""
},
author:{
counter:null,
readonly:!1,
readonlyTips:""
},
content:{
readonly:!1,
readonlyTips:""
},
guideWords:{
readonly:!1,
readonlyTips:""
},
description:{
readonly:!1,
readonlyTips:""
}
};
},
_renderReadOnly:function(t){
var e=t.type,i=t.time,a=t.name,r=t.ua,o=$("#read_only_container"),s=o.find(".js_close");
if(5==e){
var d=location.href+"&conflict=1",c="你有未保存的草稿，%s点击查看%s".sprintf("<a href='javascript:;'>","</a>");
return o.find("p").html(c),o.find("a").click(function(){
o.hide(),window.open(d);
}),t.showTips===!0&&j.show({
type:"warn",
msg:"你有未保存的草稿",
buttons:[{
text:"查看草稿",
click:function(){
o.hide(),window.open(d),this.remove();
}
},{
text:"编辑当前内容",
type:"normal",
click:function(){
this.remove();
}
}]
}),o.show(),void s.show();
}
if(1==e||2==e)o.find("p").text("此素材有文章存在违规，无法编辑"),o.show(),s.hide();else if(4==e){
var c="当前素材并非最新内容，你可以%s打开最新素材%s".sprintf("<a target='_blank' href='"+location.href+"'>","</a>");
o.find("p").html(c);
var _="当前素材非最新内容，是否打开重新编辑？";
i&&(_+="<br />最新素材更新时间：%s".sprintf(i)),a&&(_+="<br />操作人：%s".sprintf(a.html(!0))),
r&&(_+="<br />保存于：%s".sprintf((r+"浏览器").html(!0))),j.show({
type:"warn",
msg:_,
buttons:[{
text:"编辑新内容",
click:function(){
window.open(location.href),this.remove();
}
},{
text:"查看当前内容",
type:"normal",
click:function(){
this.remove();
}
}]
}),o.show(),s.hide();
}else(3==e||6==e)&&(o.hide(),s.hide());
n.fireEvent("stop_toolbar_float");
var l=$(this.editor_selector);
if(l.find(".js_title_main").addClass("without_margin"),l.find(".js_readonly").hide(),
$(this.appmsg_selector).find(".js_readonly").hide(),$("#editor_pannel").addClass("appmsg_input_area_pull_right"),
$("#js_add_appmsg").hide(),$("#bottom_main").hide(),$("#right_pannel").hide(),this.articleList){
var u=this.articleList.getCurrentArticle();
if(u){
var p=u.data("article");
p&&"function"==typeof p.setGuideWordsReadOnly&&p.setGuideWordsReadOnly();
}
}
this.ueditor&&this.ueditor.fireEvent("scrollIntoView",$("#read_only_container"),150);
},
_renderEditorByType:function(t,e){
switch(1*t){
case 1:
this._setCurRenderType(1),this._setTitleStatus({
readonly:!1
}),this._setAuthorStatus({
status:!0
}),this._switchContentType({
type:1
}),this._setToolBarStatus({
status:!0
}),this._setArticleUrlStatus(!0),this._setCommentStatus(!0),this._setOriginalStatus({
status:!0
}),this._setCoverStatus({
status:!0
}),this._setDescriptionStatus({
status:!0
}),this._setFoldStatus(!0);
break;

case 2:
this._setCurRenderType(2),this._setTitleStatus({
readonly:!0,
readonlyTips:"分享图文标题不可编辑"
}),this._setAuthorStatus({
status:!1
}),this._switchContentType({
type:2
}),this._setToolBarStatus({
status:!1,
disabledTips:"分享图文中不能插入多媒体素材"
}),this._setArticleUrlStatus(!1),this._setCommentStatus(!0),this._setOriginalStatus({
status:!1
}),this._setCoverStatus({
status:!1
}),this._setDescriptionStatus({
status:!0
}),this._setFoldStatus(!1);
}
"function"==typeof e&&e();
},
_setTitleStatus:function(t){
t.readonly?($("#title").attr("readonly","true"),this.formItemsOpt.title.readonlyTips=t.readonlyTips||""):$("#title").removeAttr("readonly"),
this.formItemsOpt.title.readonly=!!t.readonly;
},
_setAuthorStatus:function(t){
t.status?($("#js_author_area").show(),t.readonly?($("#author").attr("readonly","true"),
this.formItemsOpt.author.readonlyTips=t.readonlyTips||""):$("#author").removeAttr("readonly")):$("#js_author_area").hide(),
this.formItemsOpt.author.readonly=!!t.readonly,this.formItemsOpt.author.counter[t.hideCounter?"hideWithAppend":"show"]();
},
_switchContentType:function(t){
switch(1*t.type){
case 1:
$($("#edui1_iframeholder").show().find("iframe")[0].contentWindow.document.getElementsByTagName("body")[0]).attr("contenteditable",!t.readonly),
$("#guide_words_main").hide(),this.formItemsOpt.content.readonly=!!t.readonly,this.formItemsOpt.content.readonlyTips=t.readonlyTips||"";
break;

case 2:
$("#edui1_iframeholder").hide(),$("#guide_words_main").show().find(".js_editorArea").attr("contenteditable",!t.readonly).attr("placeholder",t.placeholder||"从这里开始输入推荐语，可以不填"),
this.formItemsOpt.guideWords.readonly=!!t.readonly,this.formItemsOpt.guideWords.readonlyTips=t.readonlyTips||"";
break;

case 3:
$($("#edui1_iframeholder").show().find("iframe")[0].contentWindow.document.getElementsByTagName("body")[0]).attr("contenteditable",!t.content.readonly),
this.formItemsOpt.content.readonly=!!t.content.readonly,this.formItemsOpt.content.readonlyTips=t.content.readonlyTips||"",
$("#guide_words_main").hide(),this.formItemsOpt.guideWords.readonly=!!t.guideWords.readonly,
this.formItemsOpt.guideWords.readonlyTips=t.guideWords.readonlyTips||"";
}
},
_setToolBarStatus:function(t){
function e(){
"string"==typeof t.disabledTips&&m.err(t.disabledTips);
}
t.status?(this.ueditor.fireEvent("star_toolbar_float"),$(this.editor_selector).find(".js_title_main").removeClass("without_margin"),
$("#edui1_toolbarbox").show(),$("#js_media_list").find("li").removeClass("disabled"),
$("#media_list_mask").hide().off("click",e)):(this.ueditor.fireEvent("stop_toolbar_float"),
$(this.editor_selector).find(".js_title_main").addClass("without_margin"),$("#edui1_toolbarbox").hide(),
$("#js_media_list").find("li").addClass("disabled"),$("#media_list_mask").show().on("click",e));
},
_setArticleUrlStatus:function(t){
t?$("#js_article_url_area").show():$("#js_article_url_area").hide();
},
_setCommentStatus:function(t){
var e=$("#js_comment_area");
e&&(t?e.show():e.hide());
},
_setOriginalStatus:function(t){
var e=$("#js_original");
if(e)if(t.status){
var i=e.find("#js_original_open"),n=e.find(".js_original_content");
switch(t.type){
case"reprint":
i.find(".js_original_title").text("转载文章：原文已声明原创"),i.find(".js_original_btn").hide(),
n.find(".js_original_item").hide().filter(".js_reprint").show();
break;

case"article":
default:
i.find(".js_original_title").text("原创：已声明"),i.find(".js_original_btn").show(),n.find(".js_original_item").hide().filter(".js_article").show();
}
e.show();
}else e.hide();
},
_setCoverStatus:function(t){
var e=$("#js_cover_area");
t.status?(e.show(),t.readonly?(e.find(".js_cover_btn_area").hide(),$("#js_cover_mask").removeClass("hover_mask")):(e.find(".js_cover_btn_area").show(),
$("#js_cover_mask").addClass("hover_mask")),t.tips?e.find(".js_cover_tip").html(t.tips).show():e.find(".js_cover_tip").html("").hide()):e.hide();
},
_setDescriptionStatus:function(t){
t.status?($("#js_description_area").show(),t.readonly?($("#js_description").attr("readonly","true"),
this.formItemsOpt.description.readonlyTips=t.readonlyTips||""):$("#js_description").removeAttr("readonly")):$("#js_description_area").hide(),
this.formItemsOpt.description.readonly=!!t.readonly;
},
_setFoldStatus:function(t){
t?$("#js_fold").show():$("#js_fold").hide();
},
_setCurRenderType:function(t){
B.curRenderType=1*t;
},
_initEditArea:function(){
var t=this,e=t.$editor;
e.find(".js_field").each(function(){
{
var t=$(this).attr("name");
$(this).attr("keyup");
}
$(this).on("keyup",function(){
e.find(".js_%s_error".sprintf(t)).hide();
});
}),e.find(".js_url").on("change",function(){
$(".js_warn.frm_msg").hide();
}),e.find(".js_title").on("keyup",function(){
var i=$.trim($(this).val()).html(!0),n=t.articleList.getCurrentArticle();
n&&n.find(".js_appmsg_title").html(i||"标题"),e.find(".js_title_error").hide(),$("#js_draft_tips").hide();
}).on("focus",function(){
t.ueditor.fireEvent("title_focus"),t.ueditor.disableToolbar(),$(this).siblings("em").show();
}).on("blur",function(){
$(this).parent().hasClass("warn")||$(this).siblings("em").hide();
}).on("click",function(){
t.formItemsOpt.title.readonly&&t.formItemsOpt.title.readonlyTips&&m.err(t.formItemsOpt.title.readonlyTips);
}).placeholder2();
{
var i=e.find("input.js_author");
e.find("input.js_writerid");
}
i.on("focus",function(){
t.ueditor.fireEvent("author_focus"),t.ueditor.disableToolbar(),$(this).siblings("em").show();
}).on("blur",function(){
$(this).parent().hasClass("warn")||$(this).siblings("em").hide();
}).on("keyup",function(){
$("#js_draft_tips").hide();
}).on("click",function(){
t.formItemsOpt.author.readonly&&t.formItemsOpt.author.readonlyTips&&m.err(t.formItemsOpt.author.readonlyTips);
}).placeholder2(),$(e.find("#edui1_iframeholder iframe")[0].contentWindow.document.getElementsByTagName("body")[0]).on("click",function(){
t.formItemsOpt.content.readonly&&t.formItemsOpt.content.readonlyTips&&m.err(t.formItemsOpt.content.readonlyTips);
}),e.find(".js_desc").on("keyup",function(){
var i=$.trim($(this).val()).html(!0),n=t.articleList.getCurrentArticle(),a=n.data("article");
a.data.set("auto_gen_digest",0),n&&n.find(".appmsg_desc").html(i),e.find(".js_desc_error").hide();
}),e.find("textarea.js_desc[name='digest']").on("change",function(){
var e,i=t.articleList.getCurrentArticle();
i&&(e=i.data("article"))&&e.setAutoDigest(!1);
}),e.find(".js_comment").checkbox({
multi:!0,
initOnChanged:!0,
onChanged:function(t){
t.checkbox("value")?$("#js_comment_setting_wrp").show():$("#js_comment_setting_wrp").hide();
}
}),e.find(".js_comment_setting").checkbox({
multi:!1
}),e.find(".js_url_checkbox").checkbox({
multi:!0,
onChanged:function(i){
i.checkbox("value")?(e.find(".js_url_area .frm_input_box").show(),t.ueditor.funcPvUvReport("showlink")):(e.find(".js_url_area .frm_input_box").hide(),
t.ueditor.funcPvUvReport("hidelink")),e.find(".js_url_error").hide(),e.find(".frm_msg.js_warn").hide();
}
}),e.find(".js_url").on("input change",function(){
var t=$(this),e=t.val();
e.match(/\:\/\/mp\.weixin\.qq\.com\/.*[\?&]tempkey=/)&&new y({
dom:this,
content:"检测到此链接为预览链接，将在短期内失效，是否仍然使用此链接？",
hideIfBlur:!0,
buttons:[{
text:"仍然使用",
type:"primary",
click:function(){
this.remove();
}
},{
text:"取消",
type:"default",
click:function(){
t.val(""),this.remove();
}
}]
});
}),t._initUploadCover(),e.find("#js_description").on("click",function(){
t.formItemsOpt.description.readonly&&t.formItemsOpt.description.readonlyTips&&m.err(t.formItemsOpt.description.readonlyTips);
}),e.find(".js_counter").each(function(){
$(this).hasClass("js_author")?t.formItemsOpt.author.counter=new _(this,{
maxLength:$(this).attr("max-length"),
useGBKLength:!0,
GBKBased:!0
}):new _(this,{
maxLength:$(this).attr("max-length")
});
}),t._initOriginal(),t.freeUEditor=e.find(".js_fp_editor_empty_none"),t._initBan(),
t._initAd();
},
_initUploadCover:function(){
var t=this,i=t.$editor;
$("#js_selectCoverFromContent").on("click",function(){
var i=t.ueditor.fireEvent("get_current_article_all_img")||[];
document.body.style.overflow=document.documentElement.style.overflow="hidden";
var n=t.articleList._getCurrentIndex();
new v({
cropImgtips:t._getCropImgTips(n),
cropRatio:t._getCropImgRatio(n),
urls:i,
articleIndex:n,
onOk:function(i){
document.body.style.overflow=document.documentElement.style.overflow="auto";
var n=i.length>0?i[0]:"";
n&&(t._coverChange(n),E.addNum(E.reportId[2],0,1),E.addNum(E.reportId[2],1,100)),
e(38,1,"trace");
},
onHide:function(){
document.body.style.overflow=document.documentElement.style.overflow="auto";
}
});
}),$("#js_imagedialog").on("click",function(){
document.body.style.overflow=document.documentElement.style.overflow="hidden";
var n=t.articleList._getCurrentIndex();
g({
cropImg:!0,
cropImgtips:t._getCropImgTips(n),
cropRatio:t._getCropImgRatio(n),
coverPicCheckbox:!0,
coverPic:1*i.find(".js_show_cover_pic").val()||0,
scene:"biz",
only_cdn:!1,
maxSelect:1,
articleIndex:n,
onOK:function(i){
var n=i[0];
t._coverChange(n),E.addNum(E.reportId[2],0,1),E.addNum(E.reportId[2],2,100),e(38,1,"trace"),
this.destroy(),document.body.style.overflow=document.documentElement.style.overflow="auto";
},
onHide:function(){
document.body.style.overflow=document.documentElement.style.overflow="auto";
}
});
}),i.on("click",".js_removeCover",function(){
var e=t.articleList.getCurrentArticleObject();
e&&e.removeCover();
}),i.on("click",".js_modifyCover",function(){
var e,n,a=!1,r=!0,o=$('<div class="js_main">').popup({
width:800,
title:"选择封面",
autoShow:!1,
className:"appmsg_content_img_dialog",
onHide:function(){
this.remove(),r=!1;
},
buttons:[{
text:"完成",
type:"primary",
classWrap:"js_crop_done_btn",
click:function(){
if(!a){
var i=this;
a=!0,n.btn(!1),e.getUrl({
onsuccess:function(e){
r&&(a=!1,n.btn(!0),i.remove(),t._coverChange({
oriUrl:e.oriUrl,
file_id:e.file_id||"",
url:e.url
}));
},
onerror:function(t){
r&&(a=!1,n.btn(!0),m.err(-1==t.retcode?"请选择裁剪区域":"系统繁忙，请稍后再试"));
}
});
}
}
},{
text:"取消",
type:"default",
click:function(){
this.remove(),r=!1;
}
}]
});
n=o.find(".js_crop_done_btn");
var s=t.articleList._getCurrentIndex(),c=i.find(".js_cover"),_=c.find("input.js_cdn_url").val(),l=c.find("input.js_cdn_url_back").val();
l||(l=_),e=new d({
container:o.find(".js_main"),
cropRatio:t._getCropImgRatio(s),
url:l,
tips:t._getCropImgTips(s),
articleIndex:s,
jsCut:!0
}),o.popup("show"),o.popup("resetPosition");
});
},
_getCropImgRatio:function(t){
return 0==t?16/9:1;
},
_coverChange:function(t){
var e=this.articleList.getCurrentArticleObject();
e&&e.coverChange(t);
},
_getCropImgTips:function(t){
return 0==t?"首篇图文封面图片长宽比只能为16：9，拖拽裁剪框调整展示区域":"次篇图文封面图片长宽比只能为1：1，拖拽裁剪框调整展示区域";
},
_initUEditor:function(){
var t=this,e=C.getEditorPluginsObject({
can_use_txvideo:wx.cgiData.can_use_txvideo,
show_share_dialog:wx.cgiData.can_pub_video,
can_use_vote:wx.cgiData.can_use_vote,
can_use_card:wx.cgiData.can_use_card,
biz_uin:R.biz_uin,
can_see_ad:wx.cgiData.can_see_ad,
has_ad:wx.cgiData.has_ad,
can_use_voice:wx.cgiData.can_use_voice,
qqmusic_flag:wx.cgiData.qqmusic_flag,
can_use_weapp_card:wx.cgiData.can_use_weapp_card,
can_use_hyperlink:wx.cgiData.can_use_hyperlink,
can_use_appmsg_outer_url:wx.cgiData.can_use_appmsg_outer_url,
token:wx.data.t,
appmsg_template_cnt:wx.cgiData.appmsg_template_cnt,
can_see_product:1===wx.cgiData.can_see_product?!0:!1,
can_use_smart:1===wx.cgiData.can_use_smart?!0:!1,
can_use_product:1===wx.cgiData.can_use_product?!0:!1,
can_use_wxopen_link:1===wx.cgiData.can_use_wxopen_link?!0:!1,
can_use_cps:1===wx.cgiData.can_use_cps?!0:!1,
cpsTipStatus:{
choiceNoCommissionNeedTip:!0
},
red_dot_flag:wx.cgiData.red_dot_flag
}),i=["undo","redo","|","fontsize","|","blockquote","horizontal","|","removeformat","formatmatch","inserttemplate","templatelist","|","link","unlink","mpemotion"],a=["bold","italic","underline","forecolor","backcolor","|","indent","|","justifyleft","justifycenter","justifyright","justifyjustify","justifyindent","|","rowspacingtop","rowspacingbottom","lineheight","letterspacing","|","insertorderedlist","insertunorderedlist","|","imagenone","imageleft","imageright","imagecenter"];
e.push(new T({
token:wx.data.t,
appmsg_template_cnt:wx.cgiData.appmsg_template_cnt,
can_use_vote:wx.cgiData.can_use_vote,
can_use_card:wx.cgiData.can_use_card,
biz_uin:R.biz_uin,
can_use_voice:wx.cgiData.can_use_voice,
qqmusic_flag:wx.cgiData.qqmusic_flag,
can_use_weapp_card:wx.cgiData.can_use_weapp_card,
can_use_txvideo:wx.cgiData.can_use_txvideo,
show_share_dialog:wx.cgiData.can_pub_video,
can_use_hyperlink:wx.cgiData.can_use_hyperlink,
can_use_appmsg_outer_url:wx.cgiData.can_use_appmsg_outer_url,
can_see_ad:!1
})),e.push(new S({
token:wx.data.t
})),n=t.ueditor=new L({
plugins:e,
autoHeightEnabled:!0,
topOffset:62,
is_illegal:1*t.appmsg_data.is_illegal||0,
toolbars:[i,a],
onReady:function(){
t._initEditArea(),t.articleList=new O($.extend({
maxNum:8,
ueditor:t.ueditor,
freeUEditor:t.freeUEditor,
is_illegal:1*t.appmsg_data.is_illegal||0,
is_rumor:1*t.appmsg_data.is_rumor||0,
formItemsOpt:t.formItemsOpt,
is_malicious:1*t.appmsg_data.is_malicious||0
},t.opt)),t._bindEvent();
}
}),n.render("js_editor"),n.addListener("begincatchimage",function(){
m.suc("内容已上传完成");
}),n.addListener("after_add_article",function(){
B.canShowAddPanel=!1,B.$addPanel&&B.$addPanel.hide(),setTimeout(function(){
B.canShowAddPanel=!0;
},500);
}),n.addListener("showEditorMsgTips",function(e,i){
$(".js_catch_tips",t.$editor).show().find(".js_msg_content").text(i.msg);
}),n.addListener("catchremotesuccess",function(e,i,a,r){
n.fireEvent("update_remote_img",{
article:i.article,
remoteType:"success",
uid:i.uid,
format:r,
img_url:a
});
var o=$(n.getDocument()).find(".js_catchremoteimageerror").length;
0==o?$(".js_catch_tips",t.$editor).hide():$(".js_catch_tips",t.$editor).show().find(".js_msg_content").text("有%s张图片粘贴失败".sprintf(o));
}),n.addListener("catchremoteerror",function(e,i,a){
if(i&&n.fireEvent("update_remote_img",{
article:i.article,
remoteType:"error",
uid:i.uid,
img_url:i.defaultRemoteImg
}),a)$(".js_catch_tips",t.$editor).show().find(".js_msg_content").text(a);else{
var r=$(n.getDocument()).find(".js_catchremoteimageerror").length;
0==r?$(".js_catch_tips",t.$editor).hide():$(".js_catch_tips",t.$editor).show().find(".js_msg_content").text("有%s张图片粘贴失败".sprintf(r));
}
}),n.addListener("scrollIntoView",function(t,e,i){
setTimeout(function(){
$("html, body").animate({
scrollTop:$(e).offset().top-(i||50)
});
},100);
}),n.addListener("showErrMsg",function(t,e,i){
$(e).show().find(".js_msg_content").text(i);
}),n.addListener("hideAllErrMsg",function(){
t.$editor.find(".js_error_msg,.js_tip_mask_msg").hide(),t.$editor.find(".js_tip_mask").removeClass("error_mask"),
$("#js_labels_error").hide();
}),n.addListener("keyup aftersetcontent",function(){
var e=n.getDocument(),i=$(e).find(".js_catchremoteimageerror").length;
i>0?$(".js_catch_tips",t.$editor).show().find(".js_msg_content").text("有%s张图片粘贴失败".sprintf(i)):$(".js_catch_tips",t.$editor).hide();
}),n.addListener("keyup",function(){
$(".js_content_error",t.$editor).hide(),$(".page_msg.js_warn").hide(),$("#js_draft_tips").hide();
}),n.addListener("heightChanged",function(){
$(window).trigger("scroll",!1);
}),n.addListener("focus",function(){
$(".page_msg.js_warn").hide(),n.enableToolbar();
}),n.addListener("renderReadOnly",function(e,i){
t._renderReadOnly(i);
}),n.addListener("renderEditorByType",function(e,i,n){
t._renderEditorByType(i,n);
}),n.addListener("setTitleStatus",function(e,i){
t._setTitleStatus(i);
}),n.addListener("setAuthorStatus",function(e,i){
t._setAuthorStatus(i);
}),n.addListener("switchContentType",function(e,i){
t._switchContentType(i);
}),n.addListener("setToolBarStatus",function(e,i){
t._setToolBarStatus(i);
}),n.addListener("setArticleUrlStatus",function(e,i){
t._setArticleUrlStatus(i);
}),n.addListener("setCommentStatus",function(e,i){
t._setCommentStatus(i);
}),n.addListener("setOriginalStatus",function(e,i){
t._setOriginalStatus(i);
}),n.addListener("setCoverStatus",function(e,i){
t._setCoverStatus(i);
}),n.addListener("setDescriptionStatus",function(e,i){
t._setDescriptionStatus(i);
}),n.addListener("setFoldStatus",function(e,i){
t._setFoldStatus(i);
}),n.addListener("setCurRenderType",function(e,i){
t._setCurRenderType(i);
}),n.addListener("afterArticleSelect",function(){
$(window).trigger("scroll",!1);
});
},
renderRewardSwtich:function(t){
var e=0,i=!1,n=!1;
t.authorTotalCount?t.writerid?1*t.can_open_reward?(1*t.can_reward?(i=!0,e=3):(i=!1,
e=4),n=!1):(n=!0,i=!1,e=2):(n=!1,i=!1,e=1):(n=!0,i=!1,e=wx.cgiData.totalInviteAuthorCnt>0&&wx.cgiData.inviteAuthorCnt>0?5:6),
t.$tipsDom.html(wx.T(o,{
inviteAuthorLink:t.inviteAuthorLink,
type:e,
author_username:t.author_username,
author:t.author,
author_encode:encodeURIComponent(t.author)
})).show(),t.$inputDom&&t.$inputDom.length&&(t.$inputDom.prop("disabled",n).prop("checked",i),
t.updateReprint&&this.updateReprintSwitchByReward({
multiMediaText:t.multiMediaText,
rewardChecked:i,
$reprintSwitchDom:t.$reprintSwitchDom,
$reprintTipDom:t.$reprintTipDom,
reprintOptions:t.reprintOptions
})),t.$authorityContainer&&t.$customerauthorContainer&&this.showOriginInputDom(e>=2&&4>=e?{
$authorityLabel:t.$authorityLabel,
$customerauthorLabel:t.$customerauthorLabel,
$authorityContainer:t.$authorityContainer,
$customerauthorContainer:t.$customerauthorContainer,
$authorityTips:t.$authorityTips,
showAuthority:!0,
author:t.author,
writerid:t.writerid
}:{
$authorityLabel:t.$authorityLabel,
$customerauthorLabel:t.$customerauthorLabel,
$authorityContainer:t.$authorityContainer,
$customerauthorContainer:t.$customerauthorContainer,
$authorityTips:t.$authorityTips,
showAuthority:!1,
author:t.author,
writerid:t.writerid,
trigger:!0
}),a.init({
$container:t.$tipsDom
});
},
updateReprintSwitchByReward:function(t){
t.multiMediaText||(t.rewardChecked?(t.$reprintSwitchDom.prop("disabled",!1),t.$reprintTipDom.text("开启后，所有公众号都可以转载此文章，并支持赞赏文章作者。")):(t.$reprintSwitchDom.prop("disabled",!0).prop("checked",!1),
t.$reprintTipDom.text("开启赞赏之后才能开启开放转载。")));
},
showOriginInputDom:function(t){
if(t.showAuthority){
t.$authorityContainer.show(),t.$customerauthorContainer.hide(),t.$authorityLabel.show(),
t.$customerauthorLabel.hide(),t.writerid?(r.highlineAuthor({
$highline:t.$authorityContainer,
highlineClass:"author_active"
}),t.$authorityTips.show()):(r.resetHighlineAuthor({
$highline:t.$authorityContainer,
highlineClass:"author_active"
}),t.$authorityTips.hide());
var e=t.$authorityContainer.find("input.js_author");
e.val(t.author),t.trigger&&e.trigger("keyup",{
keyCode:13
});
}else{
t.$authorityTips.hide(),t.$authorityContainer.hide(),t.$customerauthorContainer.show(),
t.$authorityLabel.hide(),t.$customerauthorLabel.show(),r.resetHighlineAuthor({
$highline:t.$authorityContainer,
highlineClass:"author_active"
});
var i=t.$customerauthorContainer.find("input.js_author");
i.val(t.author),t.trigger&&i.trigger("keyup");
}
},
_initOriginal:function(){
var t,e=this,n=e.$editor,a=0,o=!1;
e.rencentArticleType=[{
name:"全部类别",
data:P
}],x.get({
url:"/cgi-bin/operate_appmsg?t=ajax-response&sub=get_recently_article_type",
data:{}
},function(t){
if(t&&t.items&&t.items.length){
var i={
name:"最近使用",
data:[]
};
$.each(t.items,function(t,e){
i.data.push({
name:e.article_type,
value:e.article_type,
disabled:!1
});
}),e.rencentArticleType.unshift(i);
}
}),$(document).on("click",".js_original_apply",function(d){
function c(){
function o(t){
M=t,ie.html(template.render("js_recently_article_whitelist_tpl",{
list:"recent"===t?F:W,
type:t
})).show();
}
function d(){
ie.hide();
}
function c(t){
if(t){
var e=Number(v.prop("checked"));
$.each(N,function(t,i){
i.can_reward=e,i.title=w(i);
});
}
$("#js_article_whitelist_added").html(template.render("js_article_whitelist_added_tpl",{
list:N
})).show();
}
function p(t){
return N.length>0&&$.each(t.list,function(e,i){
$.each(N,function(e,n){
h(i,n.openid,t.type);
}),"function"==typeof t.cb&&t.cb(i);
}),t.list;
}
function h(t,e,i){
t.openid===e&&(t.status="recent"===i?1:2);
}
function f(t){
J||(J=!0,x.post({
url:"/cgi-bin/appmsgcopyright?action=searchacct",
data:{
username:t
},
complete:function(){
J=!1;
}
},function(t){
t.base_resp&&0==t.base_resp.ret&&t.search_list?(W=p({
list:t.search_list,
type:"search",
cb:function(t){
t.pic_url&&(t.pic_url=t.pic_url.endsWith("/0")?t.pic_url:t.pic_url+"/0");
}
}),o("search")):m.err(t.base_resp&&200013==t.base_resp.ret?"操作频繁，请稍后重试":"系统错误，请稍候再试");
}));
}
function g(t){
t.direction=t.direction||"bottom";
var e=t.target.getBoundingClientRect()[t.direction],i=t.container.getBoundingClientRect()[t.direction];
switch(t.direction){
case"top":
case"left":
if(!t.isForce&&e>i)return;
break;

case"bottom":
case"right":
if(!t.isForce&&i>e)return;
}
t.container[["top","bottom"].indexOf(t.direction)>-1?"scrollTop":"scrollLeft"]+=e-i+t.offset;
}
function w(t){
var e=[];
return t.can_modify&&e.push("可修改文章"),t.can_hide_source&&e.push("不显示转载来源"),e.join("，");
}
var j,v,b,k,C,T,S,L,I,O,A,E=$("#js_original"),P=e.articleList.getCurrentArticleObject(),q=P.getAuthorInfo(),U=n.find("input.js_author").val(),z=wx.cgiData.inviteAuthorCnt>0?wx.url("/cgi-bin/safecenterstatus?action=inviteauthor"):"",M="",N=[],W=[],F=[],H="",Y=e.articleList.getCurrentArticle().data("article").flush().getData(),K=Y&&Y.content?Y.content:"";
H=i(K,Y),x.get({
url:"/cgi-bin/appmsgcopyright?action=get_recently_add"
},function(t){
t.base_resp&&0==t.base_resp.ret&&t.white_list&&(F=t.white_list,F=p({
list:F,
type:"recent"
}));
}),E.find(".js_whitelist .js_whitelist_item").each(function(t,e){
var i=$(e);
N.push({
nickname:i.data("nickname"),
title:i.attr("title"),
openid:i.data("openid"),
wx_name:i.data("wx_name"),
username:i.data("username"),
avatar:i.data("avatar"),
can_modify:1*i.data("can_modify"),
can_hide_source:1*i.data("can_hide_source"),
can_reward:1*i.data("can_reward")
});
});
var G=JSON.parse(localStorage.getItem("reprintOptions")),V="none"!==$("#js_original .js_original_type")[0].style.display;
null===G&&(G={
canReprint:!0,
canModify:!1
},localStorage.setItem("reprintOptions",JSON.stringify(G)));
var J=!1,Q=$("#tpl_original").popup({
title:"声明原创",
width:960,
className:"simple align_edge original_dialog",
data:{
author:U||"",
frm:E.find(".js_reprint_frm").val()||1,
can_use_appmsg_source_url:R.can_use_appmsg_source_url,
biz_can_use_reward:1*R.can_use_reward,
canReprint:V?G.canReprint:"开启"===E.find(".js_can_reprint").text(),
canModify:V?G.canModify:"开启"===E.find(".js_can_modify").text(),
canUseOriginalReprint:R.can_use_original_reprint,
multiMediaText:H,
whitelist:N
},
buttons:[{
text:"下一步",
type:"primary",
click:function(){
t.find(".js_step_panel").hide().eq(1).show();
var i=new u({
container:"#js_original_article_type",
label:"请选择",
data:e.rencentArticleType,
show:function(t){
g({
target:t.find(".jsDropdownList > div")[0],
container:ne,
offset:10
});
},
callback:function(e){
e&&t.find(".js_article_type_error").hide();
}
});
i.selected(E.find(".js_classify").text()),N.length&&c(),t.find(".js_btn_p").eq(0).hide(),
t.find(".js_btn_p").eq(1).show(),t.find(".js_btn_p").eq(2).show(),re.setStep(2);
}
},{
text:"上一步",
click:function(){
t.find(".js_step_panel").hide().eq(0).show(),t.find(".js_btn_p").eq(0).show(),t.find(".js_btn_p").eq(1).hide(),
t.find(".js_btn_p").eq(2).hide(),re.setStep(1);
}
},{
text:"确定",
type:"primary",
click:function(){
if(e._checkOriginal(t)){
$(".js_original_type").hide().eq(1).show(),$(".js_original_content").show(),$.each(N,function(t,e){
e.title=w(e);
}),$("#js_original").find(".js_whitelist").html(template.render("tpl_whitelist",{
list:N
}));
var i=t.data("author_info");
v.prop("checked")||(i.writerid="",i.author_username="",i.author_status=1,i.can_open_reward=0,
i.can_reward=0),P.setAuthorInfo({
copyright_type:1,
writerid:i.writerid||"",
author_username:i.author_username||"",
author:i.author,
author_status:1*i.author_status,
can_open_reward:1*i.can_open_reward,
can_reward:1*i.can_open_reward&&v.prop("checked")?1:0
}),D.set(B.originalProtoKey,"1"),this.remove();
}
}
}],
onHide:function(){
this.remove();
}
});
t=Q.popup("get");
var X=Q.popup("mask"),Z=t.find(".js_add_whitelist_btn"),te=t.find(".js_search_wrap"),ee=$("#js_article_whitelist_search"),ie=$("#js_article_whitelist_search_result"),ne=document.getElementById("js_original_edit_box");
t.find(".js_btn_p").eq(1).hide(),t.find(".js_btn_p").eq(2).hide(),j=t.find(".js_reward_tips"),
v=t.find("input.js_reward_switch"),b=t.find(".js_authority_label"),k=t.find(".js_customerauthor_label"),
S=t.find(".js_authority_container"),C=t.find(".js_search_del_btn"),T=t.find(".js_search_btn"),
L=S.find("input"),I=t.find(".js_customerauthor_container"),O=I.find("input"),A=t.find(".js_authority_tips");
var ae=function(i,n){
if(i.author=$.trim(i.author||""),t.data("author_info",i),n!==!0){
var r={
$authorityLabel:b,
$customerauthorLabel:k,
$authorityContainer:S,
$customerauthorContainer:I,
$authorityTips:A,
$tipsDom:j,
$inputDom:v,
authorTotalCount:a,
author:i.author,
writerid:i.writerid,
author_username:i.author_username,
can_open_reward:i.can_open_reward,
can_reward:i.can_reward,
inviteAuthorLink:z,
multiMediaText:H,
$reprintSwitchDom:$("#js_enable_reprint"),
$reprintTipDom:t.find(".js_reprint_tip"),
reprintOptions:G,
updateReprint:i.updateReprint
};
e.renderRewardSwtich(r);
}
};
ae({
author:U,
writerid:q.writerid,
author_username:q.author_username,
can_open_reward:q.can_open_reward,
author_status:q.author_status,
can_reward:q.copyright_type?q.can_reward:1,
updateReprint:!0
});
var re=new l({
container:t.find(".js_step"),
selected:1,
names:["1 须知","2 原创声明信息"]
});
t.find(".js_btn_p").eq(0).disable(),t.find("#js_copyright_agree").checkbox({
onChanged:function(){
t.find("#js_copyright_agree").prop("checked")?t.find(".js_btn_p").enable():t.find(".js_btn_p").disable();
}
}),t.find(".js_reprint_frm").checkbox({
multi:!1
}),r.initAuthorSearchList({
$inputContainer:L,
$listContainer:t.find(".js_author_list"),
$highline:S,
highlineClass:"author_active",
inviteAuthorLink:z,
stateChange:function(e){
v.prop("checked")&&(L.val()?C.show():C.hide(),e?(ae({
author:e.nickname,
writerid:e.writerid,
author_username:e.username,
can_open_reward:1*e.can_reward,
author_status:1*e.author_status,
can_reward:1*e.can_reward?1:0
}),t.find(".js_authority_tips").show(),s.setHistory({
author:[{
writerid:e.writerid
}]
})):(ae({
author:"",
writerid:"",
author_username:"",
can_open_reward:0,
author_status:1,
can_reward:0
},!0),t.find(".js_authority_tips").hide()),t.find(".js_author_error").hide());
}
}),v.on("change",function(){
var i,n,a=$(this).prop("checked");
a?(i=O.val(),n=!0):(i=L.val(),n=!1),e.updateReprintSwitchByReward({
multiMediaText:H,
rewardChecked:a,
$reprintSwitchDom:$("#js_enable_reprint"),
$reprintTipDom:t.find(".js_reprint_tip"),
reprintOptions:G
}),e.showOriginInputDom({
$authorityContainer:S,
$customerauthorContainer:I,
$authorityTips:A,
showAuthority:n,
$authorityLabel:b,
$customerauthorLabel:k,
author:i,
trigger:!0
});
var r={
author:i,
writerid:"",
author_username:"",
can_open_reward:0,
can_reward:0,
author_status:1,
updateReprint:!0
};
ae(r,!0),t.find(".js_author_error").hide(),t.find(".js_authority_tips").hide(),c(!0);
});
var oe=D.get(B.originalProtoKey,"1");
"1"==oe&&(t.find("#js_copyright_agree").trigger("click"),t.find(".js_btn").eq(0).trigger("click")),
new _(O,{
maxLength:O.attr("max-length"),
useGBKLength:!0,
GBKBased:!0
}),O.on("keyup",function(){
var e={
author:$(this).val()||"",
writerid:"",
author_username:"",
can_open_reward:0,
can_reward:0,
author_status:1
};
ae(e,!0),t.find(".js_author_error").hide();
}),C.on("click",function(){
r.removeAuthorListDom(),L.val("").trigger("keyup"),C.hide();
}),T.on("click",function(){
L.trigger("keyup",{
keyCode:13
});
}),t.find(".js_article_whitelist").hover(function(){
new y({
dom:this,
content:"通过添加白名单，授权某些公众帐号可以转载文章，并允许修改或不显示转载来源，在文章群发后生效。如果文章开启了赞赏，转载文也会支持赞赏作者。",
isToggle:!0
});
}),t.find(".js_edit_whitelist").click(function(){
showWhiteList(),g({
target:ee[0],
container:ne
});
}),Z.on("click",function(){
te.show(),Z.remove();
}),ee.on("focus",function(){
""===$.trim(ee.val())&&o("recent"),g({
target:ie[0],
container:ne
});
}),ee.on("keyup",function(t){
var e=$.trim(t.target.value);
""===e?($("#js_article_whitelist_clear").hide(),o("recent")):($("#js_article_whitelist_clear").show(),
d(),13===t.keyCode&&f(e)),g({
target:ie[0],
container:ne
});
}),$("#js_article_whitelist_clear").click(function(){
ee.val(""),$("#js_article_whitelist_clear").hide();
}),t.find(".js_search").click(function(){
var t=$.trim(ee.val());
""!==t&&f(t);
}),ie.click(function(t){
for(var e=$(t.target);"js_article_whitelist_search_result"!==e.attr("id")&&!e.hasClass("js_add");)e=e.parent();
if(e.hasClass("js_add")){
var i={
nickname:e.data("nickname"),
openid:e.data("openid"),
wx_name:e.data("wx_name"),
username:e.data("username"),
avatar:e.data("avatar"),
can_modify:1,
can_reward:Number(v.prop("checked")),
can_hide_source:0
};
return i.title=w(i),N.push(i),("recent"===M?F:W).forEach(function(t){
h(t,e.data("openid"),M);
}),o(M),c(),!1;
}
}),$("#js_article_whitelist_added").click(function(t){
var e=$(t.target);
if(e.hasClass("js_remove"))N.splice(Number(e.data("index")),1),c(),F.forEach(function(t){
t.openid==e.data("openid")&&(t.status=0);
}),o("recent");else if(e.hasClass("js_edit_right")){
var i=e.siblings(".js_title_wrap"),n=i.find(".js_title"),a=new y({
dom:i,
container:i,
content:template.render("js_article_whitelist_edit_right_tpl",{
canReward:1==e.data("can_reward"),
canHideSource:1==e.data("can_hide_source")
}),
hideIfBlur:!0,
onShow:function(){
this.resetPosition();
},
onHide:function(){
this.remove();
}
}),r=a.getDom();
r.find(".js_can_hide_source").on("change",function(t){
var i=$(t.target),r=i.prop("checked");
r?i.parent().addClass("selected"):i.parent().removeClass("selected");
var o=Number(e.data("index")),s=N[o];
s.can_hide_source=Number(r),s.title=w(s),n.html(s.title),e.data("can_hide_source",s.can_hide_source),
a.remove();
}),g({
target:r[0],
container:ne
});
}
}),t.click(function(t){
"js_article_whitelist_search"===t.target.id||"js_article_whitelist_search_result"===t.target.id||$(t.target).parents("#js_article_whitelist_search_result").length||d();
}),$(X.find("iframe")[0].contentWindow.document.getElementsByTagName("body")[0]).click(d);
}
o||(0==a?(o=!0,s.getAuthorList({
onError:function(){
o=!1;
},
onSuccess:function(t){
o=!1,a=t.totalCnt,c(d);
}
})):c(d));
}),$(".js_original_cancel").on("click",function(){
var t=$("#js_original");
t.find(".js_author").text(""),e.formItemsOpt.author.counter.setCount(0),n.find(".js_original_type").hide().eq(0).show(),
n.find(".js_original_content").hide(),n.find(".js_whitelist").empty();
var i=e.articleList.getCurrentArticleObject();
i.setAuthorInfo({
copyright_type:0,
writerid:"",
author_username:"",
author:"",
author_status:0,
can_open_reward:0,
can_reward:0
});
}),$("#js_original").find(".js_whitelist_tips").length&&new y({
dom:$("#js_original").find(".js_whitelist_tips"),
content:"<p>通过添加白名单，授权某些公众帐号可以转载文章，并允许修改或不显示转载来源，在文章群发后生效。如果文章开启了赞赏，转载文也会支持赞赏作者。</p>",
isToggle:!0,
onShow:function(){
this.resetPosition();
}
}).hide(),$(".js_reward_ios_tips").length&&new y({
dom:$(".js_reward_ios_tips"),
content:"<p>赞赏功能在iOS上将改为转账，iOS用户可以向你转账任意金额或你设置的固定金额，固定金额只对此篇图文生效。仍保持T+7结算到原收款人的微信零钱包，仍可在赞赏功能里查看流水。</p>",
isToggle:!0,
onShow:function(){
this.resetPosition();
}
}).hide(),$("#js_original").on("click",".js_del_whitelist",function(){
$(this).parent().remove();
}),$("#js_original_detail").on("click",function(){
$(this).parent().toggleClass("open"),$(this).siblings("ul").toggle();
});
var d=!0,c=R.orginal_apply_stat,p=1==R.has_invited_original?"/acct/copyrightapply?action=apply":"/acct/selfapply?action=apply";
p=wx.url(p);
var h=$("#js_original_func_open").closest(".js_original_type"),f=function(){
x.post({
url:"/cgi-bin/appmsg?action=get_original_stat"
},function(t){
if(t.base_resp&&0==t.base_resp.ret){
var e="";
switch(+t.orginal_apply_stat){
case 0:
e="原创声明：未开通";
break;

case 1:
e="原创声明：审核中",h.find(".opt").hide();
break;

case 2:
e="原创声明：申请失败",h.find(".opt").hide();
break;

case 3:
e="原创：未声明",h.find(".opt").html('<a href="javascript:;" onclick="return false;" class="btn btn_default js_original_apply">声明原创</a>').show();
}
h.find(".subtitle").text(e),c=t.orginal_apply_stat;
}
3!=t.orginal_apply_stat&&setTimeout(f,2e3);
});
};
$("#js_original_func_open").on("click",function(){
0==c&&window.open(p),d&&(d=!1,setTimeout(f,2e3));
});
},
_initPay:function(){
var t=this,e=t.$editor,i=t._createPayDialog();
$("#js_pay",e).checkbox({
multi:!0,
onChanged:function(n){
n.checkbox("value")?t._showPayDialog(i):(i.popup("hide"),$(".js_pay_setting",e).hide());
}
}),$(".js_pay_edit",e).on("click",function(){
t._showPayDialog(i);
});
},
_initBan:function(){
var t=this.$editor,e=t.find(".js_url_area"),i=17,n=function(){
var t;
$.each(R.func_ban_info,function(e,n){
n.func_id==i&&(t=n);
});
var n=b.getReason(t.reason_id),a='你的帐号<a href="'+(n.pc_url?n.pc_url:defaultReason.pc_url)+'">'+n.reason_description+"</a>，",r=new Date(1e3*t.unlock_time);
t.ban_time==t.unlock_time?a+="已被永久屏蔽阅读原文功能。":(a+="已被屏蔽阅读原文功能至",a+=r.getFullYear()+"/"+(r.getMonth()+1)+"/"+r.getDate(),
a+="，期间阅读原文将不可用。"),e.find(".js_url_checkbox").attr("disabled",!0).attr("checked",!1).parent().addClass("disabled"),
e.find(".js_url").attr("disabled",!0).parent().addClass("disabled"),e.find(".js_url_ban_wording").html(a);
};
b(R.func_ban_info,"source-url")?R.can_use_appmsg_source_url||e.hide():n();
},
_initAd:function(){
var t=this.$editor;
t.on("click",".js_del_ad",function(){
t.find(".js_ad_preview").html(""),t.find(".js_ad_preview").parent().hide(),$("#js_editor_insertad").removeClass("disabled");
});
},
_showPayDialog:function(t){
var e=this,i=e.$editor,n=t.popup("get");
n.find(".js_fee").val($(".js_fee",i).text()),n.find(".js_step_panel").hide().eq(0).show(),
n.find(".js_btn_p").hide(),n.find(".js_btn_p").eq(0).show(),n.find(".js_btn_p").eq(1).show(),
t._step.setStep(1),t.popup("show");
},
_createPayDialog:function(){
var t=this,e=t.$editor,i=$("#tpl_pay").popup({
title:"付费阅读设置",
width:960,
className:"simple align_edge pay_dialog",
autoShow:!1,
data:{},
buttons:[{
text:"取消",
click:function(){
$(".js_pay_setting",e).is(":visible")||$("#js_pay",e).checkbox("checked",!1),this.hide();
}
},{
text:"下一步",
type:"primary",
click:function(){
var i=t.freeUEditor.val(),r=n.find(".js_fee").val();
return""==i?void m.err("免费区域不能为空"):h.rangelength(i,[20,200])?!r||!/^\d*(\.\d+)?$/.test(r)||r.toString().match(/\.\d{3,}/)||.01>r?void m.err("请输入正确的金额"):.01>r?void m.err("金额必须大于零"):r>200?void m.err("金额不能超过200元"):(n.find(".js_content").html(i),
n.find(".js_content_count").text(t.ueditor.getUeditor().getContent().text().length),
n.find(".js_fee_preview").text(parseFloat(r).toFixed(2)),n.find(".js_nickname").text(wx.data.nick_name),
n.find(".js_title").text($.trim($(".js_title",e).val())),n.find(".js_author").text($.trim($(".js_author",e).val())),
n.find(".js_date").text(f().format("YYYY-MM-DD")),n.find(".js_step_panel").hide().eq(1).show(),
n.find(".js_btn_p").hide(),n.find(".js_btn_p").eq(2).show(),n.find(".js_btn_p").eq(3).show(),
n.find(".js_preview").scrollTop(1e8),a.setStep(2),void this.resetPosition()):void m.err("正文字数要多于20字且不能超过200字");
}
},{
text:"上一步",
click:function(){
n.find(".js_step_panel").hide().eq(0).show(),n.find(".js_btn_p").hide(),n.find(".js_btn_p").eq(0).show(),
n.find(".js_btn_p").eq(1).show(),a.setStep(1),this.resetPosition();
}
},{
text:"确定",
type:"primary",
click:function(){
$(".js_pay_setting",e).show().find(".js_fee").text((+n.find(".js_fee").val()).toFixed(2)),
$(".js_pay_tips",e).hide(),this.hide();
}
}],
onClose:function(){
$(".js_pay_setting",e).is(":visible")||$("#js_pay",e).checkbox("checked",!1),i.popup("hide");
},
onShow:function(){
this.resetPosition();
}
}),n=i.popup("get");
n.find(".js_btn_p").eq(2).hide(),n.find(".js_btn_p").eq(3).hide();
var a=new l({
container:n.find(".js_step"),
selected:1,
names:["设置","预览并确认"]
});
return t.freeUEditor=n.find(".js_editor"),new _(t.freeUEditor,{
minLength:20,
maxLength:200
}),n.find(".js_fee").on("input propertychange",function(){
var t=$(this).val();
t&&/^\d*(\.\d+)?$/.test(t)&&!t.toString().match(/\.\d{3,}/)?.01>t?$(this).parent().addClass("error"):t>200?$(this).parent().addClass("error"):$(this).parent().removeClass("error"):$(this).parent().addClass("error");
}),i.popup("resetPosition"),i._step=a,i;
},
_checkOriginal:function(t){
var e=!0,i="",n="checked"==t.find(".js_forIEbug_frm").attr("checked")?1:t.find(".js_reprint_frm:checked").val(),a=t.data("author_info"),r=a.author,o=a.writerid,s=!!t.find("#js_enable_reprint").prop("checked"),d=!1,c=t.find("#js_original_article_type .dropdown_switch label").text();
t.find("input.js_reward_switch").prop("checked")?r&&o?t.find(".js_author_error").hide():(t.find(".js_author_error").text("请选择赞赏账户").show(),
i=i||"请选择赞赏账户",e=!1):r.len()>16||r.len()<=0?(t.find(".js_author_error").text("作者不能为空且不超过8个字").show(),
i=i||"作者不能为空且不超过8个字",e=!1):t.find(".js_author_error").hide();
for(var _=!1,l=0;l<P.length;l++)c==P[l].name&&(_=!0);
if(0==_?(t.find(".js_article_type_error").show(),e=!1,i=i||"请选择文章类别"):t.find(".js_article_type_error").hide(),
e){
var u=$("#js_original");
u.find(".js_author").text(r),u.find(".js_reprint_frm").val(n),$("#original_type_msg").hide(),
u.find(".js_classify").text(c),u.find(".js_can_reprint").text(s?"开启":"关闭"),R.can_use_original_reprint&&localStorage.setItem("reprintOptions",JSON.stringify({
canReprint:s,
canModify:d
})),this._updateWhitelist(n);
}else m.err(i);
return e;
},
_updateWhitelist:function(t){
$("#js_original").find(".js_whitelist").children().each(function(){
var e=1*$(this).attr("data-can_modify"),i=1*$(this).attr("data-can_reward"),n=1*$(this).attr("data-can_hide_source");
1==t&&(e||i||n||$(this).remove());
});
},
_updateCurUrl:function(t){
if(t){
wx.cgiData.app_id=t,window.history&&history.replaceState?history.replaceState(history.state,document.title,wx.url("/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&type=10&appmsgid=%s".sprintf(t))):1==R.isNew&&(location.href=wx.url("/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&type=10&appmsgid=%s".sprintf(t)));
var e=new RegExp("^"+location.protocol+"//"+location.hostname+"(:8080)?"+location.pathname+"?.*action=(list_card|list_list)");
q.match(e)&&window.opener&&opener.location&&(opener.location=q);
}
},
_bindEvent:function(){
function t(e,i,n){
x.post({
url:"/cgi-bin/appmsg?action=get_appmsg_update_history&appmsgid="+wx.cgiData.app_id+"&offset="+e+"&limit="+i
},function(e){
if(0==e.base_resp.ret){
var i=e.list;
i.each(function(t){
t.time=f.unix(t.update_time).format("YYYY-MM-DD HH:mm:ss"),t.action=0==t.operate_type?"保存":"群发",
""==t.operator_name&&(t.operator_name="未知"),wx.cgiData.bizmediaid&&wx.cgiData.bizmediaid==t.bizmediaid&&(t.current=!0),
t.url=wx.url("/cgi-bin/appmsg?t=media/appmsg_edit&action=get_history_appmsg&bizmediaid="+t.bizmediaid+"&type="+wx.cgiData.type+"&appmsgid="+wx.cgiData.app_id);
}),$("#history_list").html(template.render("history_tpl",{
list:i
})),n&&new k({
container:"#history_page",
perPage:4,
first:!1,
last:!1,
isSimple:!0,
totalItemsNum:e.total,
callback:function(e){
t(4*(e.currentPage-1),4);
}
}),$("#history_bt").addClass("appmsg_history_active"),$("#history_pop").show();
}
});
}
var e=this,i=function(){
B.hideAddPanelId&&(clearTimeout(B.hideAddPanelId),B.hideAddPanelId=null),B.hideAddPanelId=setTimeout(function(){
B.$addPanel&&B.$addPanel.hide(),B.hideAddPanelId=null;
},300);
},a=function(t){
var e=$(t.target||t.srcElement),n=$("#js_add_appmsg");
!B.$addPanel||$.contains(B.$addPanel,e)||$.contains(n,e)||i();
},r=function(){
B.canShowAddPanel&&(B.hideAddPanelId&&(clearTimeout(B.hideAddPanelId),B.hideAddPanelId=null),
B.$addPanel||(B.$addPanel=$(template.render("tpl_add_panel",{})).appendTo($("body")),
B.$addPanel.hover(function(){
B.hideAddPanelId&&(clearTimeout(B.hideAddPanelId),B.hideAddPanelId=null);
},a),e.ueditor&&e.ueditor.fireEvent("can_add_article",B.$addPanel)),B.$addPanel.show(),
o());
},o=function(){
var t=$("#js_add_appmsg")[0].getBoundingClientRect(),e=$(window).height(),i=B.$addPanel.height(),n=10,a=t.bottom-n;
a+i>e?B.$addPanel.css({
top:t.top-i+$(window).scrollTop()-30,
left:t.left+t.width/2
}).addClass("preview_media_add_panel_up"):B.$addPanel.css({
top:a+$(window).scrollTop(),
left:t.left+t.width/2
}).removeClass("preview_media_add_panel_up");
},s=function(){
if(B.$addPanel){
var t=$("#js_add_appmsg")[0].getBoundingClientRect(),e=$("#article_item_list")[0].getBoundingClientRect();
e.top+e.height<t.top?i():B.$addPanel.is(":hidden")||o();
}
};
$("#js_add_appmsg").click(r).hover(r,a),$(window).on("scroll",function(){
s();
}),e.ueditor.addListener("article_item_list_scroll",function(){
s();
}),$("#history_bt").click(function(){
$(this).hasClass("appmsg_history_active")?($(this).removeClass("appmsg_history_active"),
$("#history_pop").hide()):t(0,4,!0);
}),$("#history_list").on("click",".js_history_link",function(){
wx.cgiData.bizmediaid?window.location=$(this).data("url")+"&idx"+wx.cgiData.idx:window.open($(this).data("url")+"&idx"+wx.cgiData.idx);
}),$(document).on("click",function(t){
var e=t.target;
$.contains($("#history_bt")[0],e)||$.contains($("#history_pop")[0],e)?($("#history_pop").show(),
$("#history_bt").addClass("appmsg_history_active")):($("#history_pop").hide(),$("#history_bt").removeClass("appmsg_history_active"));
}),$("#read_only_container").find(".js_close").click(function(){
$("#read_only_container").hide();
}),e.$editor.on("click",".js_msg_close",function(){
$(this).closest(".page_msg").hide();
}),e.$editor.find(".js_cover").on("click","img",function(){
var t=$(this).attr("src");
t&&w.show({
imgdata:[{
imgsrc:t
}]
});
});
var d=!1;
$("#js_fold").on("click",function(){
e.ueditor.fireEvent(d?"adjustheight":"foldcontentarea");
}),e.$editor.on("click",".js_unfold_editor",function(){
e.ueditor.fireEvent("adjustheight");
}),e.ueditor.addListener("heightChanged",function(t,i){
60==i?($("#js_fold").children("span").text("展开正文"),e.$editor.find(".js_unfold_editor").show(),
d=!0,$(window).scrollTop($(".js_title").parent().offset().top-$(".js_main_title").height()-$(".edui-editor-toolbarbox").height())):($("#js_fold").children("span").text("收起正文"),
e.$editor.find(".js_unfold_editor").hide(),d=!1);
});
var c=$("#reprint_article_main");
c.on("click",".js_replace_media",function(){
var t=e.articleList.getCurrentArticleObject();
t&&"function"==typeof t.replaceMedia&&t.replaceMedia();
}),c.on("click",".js_preview_hd",function(){
var t=e.articleList.getCurrentArticleObject();
t&&"function"==typeof t.previewVideoPlay&&t.previewVideoPlay();
}),new p({
container:e.$editor.find(".js_edit_tips"),
content:"",
parentClass:"",
position:{
left:-136
},
reposition:!0,
onshow:function(){
var t=e.articleList.getCurrentArticleObject();
t&&"function"==typeof t.getEditTipsContent&&(this.changeContent(t.getEditTipsContent()),
this.show());
},
type:"hover"
}),$("#js_submit").on("click",function(){
if(1*e.appmsg_data.is_illegal!=1){
var t=$(this);
$("#js_import_tips,#js_draft_tips").hide(),$(".js_warn").hide(),$(".js_ad_error_tips").hide(),
e.articleList.save(t,function(i,n){
for(var a=0,r=0;r<n.count;r++)if(n["ad_id"+r]){
a=1;
break;
}
t.btn(!0),m.remove(),i.is_ad_optioal?$("#js_save_success_with_ad_op").show().delay(2e3).fadeOut(300):a?$("#js_save_success_with_ad").show().delay(2e3).fadeOut(300):$("#js_save_success").show().delay(2e3).fadeOut(300),
e._updateCurUrl(i.appMsgId);
},!1,n);
}
}),$("#js_submit_close").on("click",function(){
var t=$(this);
e.articleList.save(t,function(){
m.suc("保存成功"),window.close();
},!1,n);
}),$("#js_send").on("click",function(){
if(1*e.appmsg_data.is_illegal!=1){
var t=$(this);
$("#js_import_tips,#js_draft_tips").hide(),$(".js_warn").hide(),e.articleList.save(t,function(t){
e.articleList.draft.isDropped=!0,e._updateCurUrl(t.appMsgId),location.href=wx.url("/cgi-bin/masssendpage?t=mass/send&type=10&appmsgid=%s".sprintf(t.appMsgId));
},!1,n,void 0,!0);
}
}),$("#js_preview").on("click",function(){
if(1*e.appmsg_data.is_illegal!=1&&($("#js_import_tips,#js_draft_tips").hide(),$(".js_warn").hide(),
b(R.func_ban_info,"preview"))){
{
$(this);
}
e.articleList.preview(n,function(t){
e._updateCurUrl(t.appMsgId);
});
}
}),e.$editor.on("click",".js_jumpToOrder",function(){
j.show({
type:"info",
msg:"是否保存文章并跳转至广告订单页面？",
buttons:[{
text:"确定",
click:function(){
$("#js_import_tips,#js_draft_tips").hide(),$(".js_warn").hide(),$(".js_ad_error_tips").hide();
var t=$("#js_submit"),i=this,a=$(".js_ad_msg").data("ad_id");
i.remove(),e.articleList.save(t,function(t){
e._updateCurUrl(t.appMsgId),window.location.href=wx.url("/cgi-bin/frame?t=ad_system/common_simple_frame&t1=publisher/freetrade_item_detail&aid="+a);
},!1,n);
}
},{
text:"取消",
type:"normal",
click:function(){
this.remove();
}
}]
});
});
var _,l,u=$(".main_bd"),h=$(".js_aside"),g=$(".js_main_title"),y=g.offset().top,v=$(".js_main_inner"),C=$("body"),T="edit_fixed";
$(window).on("scroll",function(){
l&&(clearTimeout(l),l=null),_&&(clearTimeout(_),_=null);
var t,i,n=!0,a=e.articleList.getCurrentArticle();
if(a){
var r=a.data("article");
r&&r.getArticleType&&(i=r.getArticleType());
}
0==i||11==i?(t=y,n=!0):n=!1;
var o,s=$(window).scrollTop(),d=u[0].getBoundingClientRect();
n&&s>t?(C.addClass(T),g.width(v.width()),o=d.bottom-g.outerHeight()):(C.removeClass(T),
o=d.height),h.height(o).find(".js_scrollbar").css("max-height",o),n&&(l=setTimeout(function(){
e.ueditor&&e.ueditor.fireEvent("toolbar_fixed_change");
},100)),setTimeout(function(){
$(".js_scrollbar").scrollbar.updateScrollbars(!0);
});
}).trigger("scroll",!1);
var S=$(window).width();
1200>S&&$("#body").width(S),$(window).on("resize",function(){
var t=$(window).width();
1200>t?$("#body").width(t).find(".js_main_title").width(t):$("#body").width(1200).css({
"margin-left":"auto",
"margin-right":"auto"
}).find(".js_main_title").width(1200),1==B.curRenderType&&e.ueditor.fireEvent("star_toolbar_float"),
$(window).trigger("scroll",!1);
}),$(window).on("unload",function(){
E.setData(1),E.send(1);
});
}
}),M=(new z({
app_id:R.app_id,
editor_selector:"#js_appmsg_editor",
appmsg_selector:"#js_appmsg_preview",
appmsg_data:R.appmsg_data
}),t("biz_common/utils/wxgspeedsdk.js"));
M.setBasicTime({
uin:wx&&wx.data&&wx.data.uin||0,
pid:34
}),M.send();
});