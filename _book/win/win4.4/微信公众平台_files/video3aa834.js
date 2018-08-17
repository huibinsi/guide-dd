define("tpl/media/product_highline_style.html.js",[],function(){
return'<style>body{margin:0;font-family:"Helvetica Neue","Hiragino Sans GB","Microsoft YaHei","\\9ED1\\4F53",Arial,sans-serif;}</style>';
});define("tpl/media/product_iframe_smart_tips.html.js",[],function(){
return'<section style="position: relative;z-index: 1;margin-bottom: -32px">\n  <div style="height: 32px;background-color: #1AAD19;background-color: rgba(26,173,25,.9);display: inline-block;border-radius: 0 0 10px 10px;font-size: 12px;color: #fff;line-height: 32px;padding: 0 16px;"><span style="display: inline-block;vertical-align: -2px;background: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAARCAYAAAFfvTeYAAAABGdBTUEAALGPC/xhBQAAAmdJREFUOBGNlEtIVVEUhr23dw0qR6FJDzCLkiyhJs0CB4EEYUUDqUnvQRjOhAZNkhooDUKCoiAjkCYJRYGDBj0hgyKzouwl9CRKyazs9v3rrn3c96TVD99ej732Ovvsfc8tKkopoziHPJ9NzadDKq+oHJ1O5ghKLcD5LAe7F/pBsoco+Qs2K+NqTVr4qgnpRLFXPsa+df+cbZigDyo8aSabQbRoh3UwAJVwEmxXFeaMN9CjJmo3Eb8XdkLBuWRJLAWpjGaXvaG6v4duWA0jzK+Cn7CF2LbQSPAcFoFUBa9hkoJII7YgDEwsjyYX4k+B/fAhyuevISwKVsXB/6el+Lp3PIs9AudhyR8LSR4E6ZkmsdstyuVOuZV5CXWa/AG7oQuku1Bi3uhp9hDvU04LjsMLeAjSEBwzb3RQ7iZcte15vhT7Bc6A7mAmhCa4Jt2P7Xm9Qvfr83O5r27tDsK8LfBCFXyHGx6vwL+kQtdgUhwcJoqDH1vy0+J4XJ9C3fgueADXYEEoxv/vCy74JasBixdDO+h9h2AqtMBKaCW/DHRG32RdOoLbcAjWwizmC0VyIzwCaSBvbNQX0QZHQb/fcrgI0h51wW5VEEl/HrFqVKTPUBeha17jC3XtsU54vi5O4g+n4g6vm09eb6oNz1NODyqDdyDpc50Nc6AfJNm50KsA3Yc75v19aLIHhIHaGXDP17zBPoUO0AO2QQNIH6EadHevIEjHWgs9nniCnR76J5ZkBjq96AJWd9ACt0Bvchi0ER1tWl0kDkD4S96UNB7L8WJ9q32wAyaPVacccyWwAfQm+mw/QXNc/xvj7PMZChXlSwAAAABJRU5ErkJggg==\')  0 0 no-repeat;width: 25px;height: 16px;-webkit-background-size: cover;background-size: cover;margin-right: 5px;"></span>非该位置最终商品，以实际推荐为准</div>\n</section>\n';
});define("tpl/media/product_style_dialog_content.html.js",[],function(){
return'<div class="js_content dialog_media_container">\n  <div class="mpui-media-list-wrp">\n    <p class="js_loading icon_loading_small white">加载中</p>\n  </div>\n</div>';
});define("tpl/media/product_style_dialog_list.html.js",[],function(){
return'{each list as item index}\n<label for="product_style_{index}" class="product-style">\n  <div class="js_checkbox_parent product-style__meta">\n    <i class="icon_radio"></i>\n    <span class="product-style__name">{item.name}</span>\n    <input type="radio" class="frm_radio" name="productstyle" data-id="{item.id}" id="product_style_{index}">\n  </div>\n  <div class="product-style__container">\n  	{if item.cover}\n    <img src="{item.cover}" alt="">\n    {else}\n    {=html}\n    {/if}\n  </div>\n</label>\n{/each}';
});define("tpl/media/product_smart_tips.html.js",[],function(){
return"<p>商品将会根据用户特征进行个性化推荐展示，以提升转化。</p>\n<br>	\n<p>此外，包含个性化推荐商品的文章将会被系统分时段推送至用户，以进一步提升转化。</p>";
});define("tpl/media/product_import_select_result.html.js",[],function(){
return'{if errMsg}\n  <span class="filter-fail">{errMsg}</span>\n{else if templateFileLink}\n  <span class="filter-fail">\n  文件格式有误，<a href="{templateFileLink}" target="_blank" download="商品筛选模板.xls">下载商品筛选模板</a>  </span>\n{else}  \n  <span class="filter-fail">\n  成功导入筛选{suc_num}个商品  {if err_num>0}\n  ，{err_num}个商品筛选失败，    {if err_link}\n    <a href="{err_link}" target="_blank" download="筛选失败商品列表.xls">下载筛选失败的商品列表</a>    {/if}\n  {/if}  \n  </span>  \n{/if}\n。&nbsp;&nbsp;<a href="javascript:;" class="js_clear_import">清空筛选</a>';
});define("tpl/media/product_dialog_upload.html.js",[],function(){
return'<div class="product-filter__upload">\n    <a href="javascript:;" class="js_upload btn btn_primary">上传文件</a>\n    <div class="product-filter__upload-description">\n        通过excel上传商品id列表，快速筛选出商品，内容格式请严格参照<a href="{templateFileLink}" target="_blank" download="商品筛选模板.xls">商品筛选模板</a>（请确保商品是已导入商品素材库的）    </div>\n\n    <div class="product-filter__upload-process" style="display: none">\n        文件名.xls <div class="progress_bar"><div class="progress_bar_thumb" style="width:57%"></div></div>\n    </div>\n</div>';
});define("media/product_list.js",["biz_web/ui/checkbox.js","common/wx/pagebar.js","common/wx/dialog.js","media/productCategory.js","tpl/media/product_dialog_list.html.js","tpl/media/product_dialog_loading.html.js","tpl/media/product_pagebar_tpl.html.js","common/wx/Cgi.js","biz_web/utils/upload.js","common/wx/Tips.js"],function(t){
"use strict";
function e(t){
this._o={
pageSize:10,
listContainner:null,
categoryContianer:null,
pagebarContainer:null,
listTpl:n,
listLoadingTpl:l,
PagebarTpl:r,
uploadDom:null,
uploadInfoDom:null,
uploadInfoTpl:null,
clearUploadBtnFilter:"",
selectAllDom:null,
selectedCountDom:null,
cancelSelectBtn:null,
batchDelBtn:null,
jumpAnimateDom:null,
totalCountDom:null,
initData:null,
initTotal:0,
initPageContext:"",
jumpPageSelect:!1,
disabledItem:!1,
canDelCategory:!0,
afterRenderList:function(){},
onUploadEnd:function(){},
onUploadClear:function(){},
afterInitCategory:function(){}
},this._g={
curMod:"polo",
importData:null,
hasDestroy:!1,
uploading:!1,
selectedData:[],
listCompile:null,
loadingHtml:"",
poloTotal:0,
pageContext:"",
curPageContext:"",
prePageContext:"",
queryOpt:{
page_num:1
}
},this._extend(t),this.init(),this.bindEvent();
}
t("biz_web/ui/checkbox.js");
var o=t("common/wx/pagebar.js"),a=t("common/wx/dialog.js"),i=t("media/productCategory.js"),n=t("tpl/media/product_dialog_list.html.js"),l=t("tpl/media/product_dialog_loading.html.js"),r=t("tpl/media/product_pagebar_tpl.html.js"),s=t("common/wx/Cgi.js"),c=t("biz_web/utils/upload.js"),p=t("common/wx/Tips.js"),u={
templateFileLink:wx.url("/cgi-bin/productmaterial?action=download_excel&type=2"),
importMax:200,
delSplitKey:"#$%^",
categoryLimit:i.categoryLimit,
saleStatusMap:{
0:"-",
1:"已下架",
2:"已上架"
},
sourceMap:{
1:"API",
2:"手动添加",
3:"其他",
4:"微信小店"
}
};
return e.prototype={
_extend:function(t){
if(t)for(var e in t)this._o[e]=t[e];
},
init:function(){
var t=this;
this._g.loadingHtml=template.compile(this._o.listLoadingTpl)({}),this._g.listCompile=template.compile(this._o.listTpl),
this._g.PagebarCompile=template.compile(this._o.PagebarTpl);
for(var e=1;e<=u.categoryLimit;e++)this._g.queryOpt["category_name"+e]="";
this._g.categoryObj=new i.myconstructor({
container:this._o.categoryContianer,
defaultLabel:"全部",
initCategoryName:[],
search:!0,
canadd:!1,
candel:this._o.canDelCategory,
afterInitCategory:function(){
"function"==typeof t._o.afterInitCategory&&t._o.afterInitCategory();
},
onChange:function(e){
var o=e.getData();
o.page_num=1,t.getList(o);
}
}),this._o.initData&&this._o.initPageContext?(this._g.prePageContext=this._g.curPageContext=this._g.pageContext=this._o.initPageContext,
this._g.poloTotal=this._o.initTotal,this.renderList({
code:0,
list:this._o.initData,
total:this._g.poloTotal,
page:1
})):this.refresh("cur");
},
bindEvent:function(){
var t=this,e=this._o;
e.selectAllDom&&e.selectAllDom.checkbox({
onChanged:function(e){
var o=e.prop("checked");
t._o.listContainner.find(".js_checkbox").each(function(){
var t=$(this);
o!==t.prop("checked")&&t.trigger("click");
});
}
}),e.cancelSelectBtn&&e.cancelSelectBtn.click(function(){
t.cancelAllSelect();
}),e.batchDelBtn&&e.batchDelBtn.click(function(){
t.batchDel();
}),e.listContainner.on("click",".js_del_product",function(){
var e=$(this).attr("data-pid");
t.delProduct(e);
}),e.uploadDom&&(this._g.myupload=c.uploadFile({
container:e.uploadDom,
url:"/cgi-bin/productmaterial?action=get_product_by_file&need_count=200",
multi:!1,
type:10,
onSelect:function(){
return t._g.uploadResp=null,t._g.hasDestroy||t._g.uploading?!1:void 0;
},
onProgress:function(){
t._g.uploading=!0,t._g.curMod="import",t._g.categoryObj.handle("disable"),t.showLoading(),
t._g.uploadResp=null;
},
onError:function(){
t.importComplete();
},
onAllComplete:function(){},
onComplete:function(e,o,a,i){
t._g.uploadResp=i,t.importComplete();
}
}),e.uploadInfoDom&&e.clearUploadBtnFilter&&e.uploadInfoDom.on("click",e.clearUploadBtnFilter,function(){
var o=t._g;
o.curMod="polo",o.importData=null,o.categoryObj.handle("enable"),o.categoryObj.handle("show"),
e.categoryContianer.show(),t._o.uploadInfoDom.hide(),o.selectedData=[],t.refresh(),
"function"==typeof t._o.onUploadClear&&t._o.onUploadClear();
})),e.pagebarContainer.on("click",function(e){
if("import"!=t._g.curMod){
var o=$(e.target);
if(o.hasClass("js_pagebtn")||(o=o.parents(".js_pagebtn")),o.length>0){
{
var a;
1*o.attr("data-curpage")||1;
}
o.hasClass("js_first")||(o.hasClass("js_prev")?a="pre":o.hasClass("js_next")&&(a="next")),
t.refresh(a);
}
}
});
},
delProduct:function(t){
var e=this;
a.show({
type:"info",
title:"删除确认",
msg:"确定删除商品？",
width:600,
className:"dialog-delete-confirm",
buttons:[{
text:"确定",
click:function(){
if(e._g.delingProduct!==!0){
var o=this,a=o.dom.find(".js_btn").eq(0);
a.btn(!1),e._g.delingProduct=!0,s.post({
url:"/cgi-bin/productmaterial?action=delete_product",
data:{
pids:t
},
mask:!1
},{
done:function(i){
if(a.btn(!0),e._g.delingProduct=!1,i&&i.base_resp&&0==i.base_resp.ret){
p.suc("已删除");
var n=t.split(u.delSplitKey);
e._g.poloTotal=e._g.poloTotal-n.length,e.cancelSelect(n),e.refresh("cur"),e.updateTotalCount(),
o.remove();
}else p.err("系统繁忙，请稍后再试");
},
fail:function(){
a.btn(!0),e._g.delingProduct=!1,p.err("系统繁忙，请稍后再试");
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
},
importComplete:function(){
var t=this,e=this._g;
t._g.uploading=!1,t._o.categoryContianer.hide();
var o=t._g.uploadResp;
if(o&&o.base_resp&&0==o.base_resp.ret&&o.upload_status){
var a="";
o.download_ticket&&(a=wx.url("/cgi-bin/productmaterial?action=download_fail_excel&type=2&download_ticket="+o.download_ticket)),
t._o.uploadInfoDom.html(template.compile(t._o.uploadInfoTpl)({
suc_num:o.upload_status.succ_cnt,
err_num:o.upload_status.fail_cnt,
err_link:a
})).show(),o.upload_status.succ_cnt==u.importMax&&o.upload_status.fail_cnt>0?p.err("已选择前%s个，一篇文章最多支持%s个商品展示".sprintf(u.importMax,u.importMax)):p.suc("已选择%s个商品".sprintf(o.upload_status.succ_cnt)),
e.importData=o.product_info_list&&o.product_info_list.product_info?o.product_info_list.product_info:[];
for(var i=0;i<e.importData.length;i++)e.importData[i]=this.formatData(e.importData[i]);
e.selectedData=[].concat(e.importData),t.renderList({
code:0,
list:t.getImportData(1),
total:e.importData.length,
page:1
});
}else{
e.importData=null,e.selectedData=[];
var n="导入筛选失败",l="导入筛选失败，请稍后再试";
o&&o.base_resp&&0!=o.base_resp.ret?t._o.uploadInfoDom.html(template.compile(t._o.uploadInfoTpl)({
templateFileLink:u.templateFileLink
})).show():t._o.uploadInfoDom.html(template.compile(t._o.uploadInfoTpl)({
errMsg:n
})).show(),t.renderList({
code:-1,
msg:l
}),p.err(n);
}
"function"==typeof t._o.onUploadEnd&&t._o.onUploadEnd();
},
getImportData:function(t){
this.showLoading();
var e=[];
if(!this._g.importData)return e;
var o=(t-1)*this._o.pageSize,a=o+this._o.pageSize-1;
a=Math.min(this._g.importData.length,a),o=Math.max(0,o);
for(var i=o;a>=i;i++)this._g.importData[i]&&e.push(this._g.importData[i]);
return e;
},
refreshUpload:function(){
!this._g.myupload||this._g.uploading||this._g.hasDestroy||this._g.myupload.refresh();
},
showLoading:function(){
var t=this._o;
t.listContainner.html(this._g.loadingHtml),t.pagebarContainer.hide(),t.selectAllDom&&t.selectAllDom.checkbox("checked",!1);
},
checkQueryOpt:function(t){
var e=!0;
for(var o in this._g.queryOpt)if(this._g.queryOpt.hasOwnProperty(o)&&t[o]!==this._g.queryOpt[o])return!1;
return e;
},
getList:function(t){
this.showLoading();
var e=this,o=this._g,a={};
for(var i in o.queryOpt)o.queryOpt.hasOwnProperty(i)&&(o.queryOpt[i]=t[i]||"",a[i]=o.queryOpt[i]);
a.page_size=this._o.pageSize,a.page_num>1&&(a.page_context=t.pageContext),s.post({
url:"/cgi-bin/productmaterial?action=product_list",
data:a,
mask:!1
},{
done:function(o){
if(e.checkQueryOpt(t)===!0)if(o&&o.base_resp&&0==o.base_resp.ret){
1==t.page_num&&(e._g.poloTotal=o.total||0);
var i=[];
if(o.product_info_list&&o.product_info_list.product_info&&(i=o.product_info_list.product_info),
t.page_num>1&&0==i.length)return void e.refresh("pre");
e._g.prePageContext=o.page_context,e._g.curPageContext=t.pageContext,e._g.pageContext=o.page_context,
e.renderList({
code:0,
list:i,
last:0==i.length||i.length<a.page_size?!0:!1,
total:e._g.poloTotal,
page:t.page_num
});
}else{
var n="";
o&&o.base_resp&&200013==o.base_resp.ret&&(n="操作太频繁，请稍后再试"),e.renderList({
code:-1,
msg:n
});
}
},
fail:function(){
e.checkQueryOpt(t)===!0&&(e.renderList({
code:-1
}),p.err("系统繁忙，请稍后再试"));
}
});
},
renderList:function(t){
var e=this,o=this._g,a=this._o;
0==t.code||t.msg?0!=t.code||t.list&&0!=t.list.length||t.msg||(t.msg="import"==o.curMod?"选择失败，列表中所有商品都无法选择":"暂无商品"):t.msg="系统繁忙，请稍后再试",
o.curDataList=t.list||[],a.jumpPageSelect!==!0&&e.cancelAllSelect();
var i=!0,n=this.getSelectedId();
n=","+n.join(",")+",",o.curDataList.each(function(t){
t=e.formatData(t),n.indexOf(","+t.pid+",")>=0?t.selected=!0:(t.selected=!1,i=!1);
}),i&&o.curDataList.length>0&&a.selectAllDom&&!a.selectAllDom.prop("checked")&&a.selectAllDom.checkbox("checked",!0),
this._o.listContainner.html(o.listCompile({
list:o.curDataList,
msg:t.msg
})),this.renderSelectCount(),this.renderTotalCount(t.total),o.curDataList.length>0&&this._o.listContainner.find(".js_checkbox").checkbox({
onChanged:function(t){
var o=t.val(),a=t.attr("data-index");
t.prop("checked")?e.addSelect(o,a):e.cancelSelect(o);
}
}),0==t.code&&"undefined"!=typeof t.page?this.initPageBar({
curPage:t.page,
total:t.total,
last:t.last
}):this._o.pagebarContainer.hide(),"function"==typeof this._o.afterRenderList&&this._o.afterRenderList(),
this._o.jumpAnimateDom&&setTimeout(function(){
$("body").animate({
scrollTop:e._o.jumpAnimateDom.offset().top
});
},100);
},
formatData:function(t){
t.category_name_str=[];
for(var e=1;e<=u.categoryLimit&&t["category_name"+e];e++)t.category_name_str.push(t["category_name"+e]);
return t.titleEncode=t.title.html(!0),t.category_name_str=t.category_name_str.join(";").html(!0),
t.saleStatusStr=u.saleStatusMap[t.sale_status]||"-",t.disabled=this._o.disabledItem===!0&&1==t.sale_status?!0:!1,
t.sourceStr=u.sourceMap[t.source]||"-",t.pidEncode=encodeURIComponent(t.pid),t.str_price=t.min_price,
t.str_original_price=t.min_ori_price,t;
},
getSelectedId:function(){
for(var t=this._g,e=[],o=0,a=t.selectedData.length;a>o;o++)e.push(t.selectedData[o].pid);
return e;
},
addSelect:function(t,e){
var o=this._g,a=this._o;
if(o.curDataList[e]&&o.curDataList[e].pid==t&&o.selectedData.push(o.curDataList[e]),
a.selectAllDom){
var i=0;
this._o.listContainner.find(".js_checkbox").each(function(){
$(this).prop("checked")&&i++;
}),i>0&&i==o.curDataList.length&&a.selectAllDom.checkbox("checked",!0);
}
this.renderSelectCount();
},
cancelSelect:function(t){
if(t){
var e=this._g,o=this._o;
if("[object Array]"===Object.prototype.toString.call(t))for(var a=","+t.join(",")+",",i=0;i<e.selectedData.length;i++)a.indexOf(","+e.selectedData[i].pid+",")>=0&&(e.selectedData.splice(i,1),
i--);else for(var i=0,n=e.selectedData.length;n>i;i++)if(e.selectedData[i].pid==t){
e.selectedData.splice(i,1);
break;
}
o.selectAllDom&&o.selectAllDom.checkbox("checked",!1),this.renderSelectCount();
}
},
batchDel:function(){
var t=this.getSelectedCount();
if(0==t)return void p.err("请选择需要删除的商品");
var e=this.getSelectedId();
e=e.join(u.delSplitKey),this.delProduct(e);
},
updateTotalCount:function(){
if(this._o.totalCountDom&&this._o.totalCountDom.length>0){
var t=this;
this.getTotalCount({
callback:function(e){
"undefined"!=typeof e&&t.renderTotalCount(e);
}
});
}
},
renderTotalCount:function(t){
this._o.totalCountDom&&this._o.totalCountDom.length>0&&this._o.totalCountDom.text(t||0);
},
getTotalCount:function(t){
var e=this._g.categoryObj.getData();
e.page_num=1,e.page_size=this._o.pageSize,s.post({
url:"/cgi-bin/productmaterial?action=product_list",
data:e,
mask:!1
},{
done:function(e){
e&&e.base_resp&&0==e.base_resp.ret&&t.callback(e.total);
},
fail:function(){}
});
},
cancelAllSelect:function(){
var t=this._g,e=this._o;
t.selectedData=[],this._o.listContainner.find(".js_checkbox").checkbox("checked",!1),
e.selectAllDom&&e.selectAllDom.checkbox("checked",!1),this.renderSelectCount();
},
renderSelectCount:function(){
var t=this._o,e=this.getSelectedCount();
e>0?(t.cancelSelectBtn&&t.cancelSelectBtn.removeClass("btn_disabled"),t.batchDelBtn&&t.batchDelBtn.removeClass("btn_disabled")):(t.cancelSelectBtn&&t.cancelSelectBtn.addClass("btn_disabled"),
t.batchDelBtn&&t.batchDelBtn.addClass("btn_disabled")),t.selectedCountDom&&t.selectedCountDom.text(e);
},
initPageBar:function(t){
var e=this;
if("import"==e._g.curMod)new o({
container:this._o.pagebarContainer,
perPage:this._o.pageSize,
initShowPage:t.curPage,
totalItemsNum:t.total,
last:!1,
isNavHide:!0,
callback:function(t){
e.renderList({
code:0,
list:e.getImportData(1*t.currentPage),
total:e._g.importData.length,
page:1*t.currentPage
});
}
});else{
var a=Math.ceil(this._g.poloTotal/this._o.pageSize);
if(1>=a)return void this._o.pagebarContainer.hide();
var i=!1;
(t.last===!0||t.curPage>=a)&&(i=!0),this._o.pagebarContainer.html(this._g.PagebarCompile({
page_num:t.curPage,
totalPage:a,
last:i
})).show();
}
},
getSelectedCount:function(){
return this._g.selectedData.length;
},
getSelectedData:function(){
return this._g.selectedData;
},
refresh:function(t){
var e,o,a=this._g.categoryObj.getData();
"pre"==t?(e=Math.max(1,this._g.queryOpt.page_num-1),o=this._g.prePageContext):"next"==t?(e=this._g.queryOpt.page_num+1,
o=this._g.pageContext):"cur"==t?(e=this._g.queryOpt.page_num,o=this._g.curPageContext):e=1,
e>1&&o?(a.pageContext=o,a.page_num=e):a.page_num=1,this.getList(a);
},
refreshAllData:function(){
this._g.categoryObj.select(1,"");
},
destroy:function(){
this._g.hasDestroy=!0,this._g.myupload&&"function"==typeof this._g.myupload.destroy&&this._g.myupload.destroy(),
this._g.categoryObj&&this._g.categoryObj.handle("destroy");
}
},e;
});define("tpl/media/product_select_dialog.html.js",[],function(){
return'<div>\n\n<!--旧商品选择 begin-->\n<div class="product-filter">\n  <a href="{manageLink}" target="_blank" class="btn btn_default r">管理商品</a>\n	<span class="product-filter__title">商品筛选</span>\n	<div class="product-filter__main">\n		<div class="js_category_main cascade_dropdown" style="display: none;"></div>\n		<a href="javascript:;" class="js_import">导入筛选</a>\n	</div>\n	<div class="js_des_container product-filter__main" style="display: none;">\n	</div>\n</div>\n<div class="product_table_wrp table_wrp with_border">\n    <div class="table_opr">\n        <a href="javascript:;" class="js_cancel_select btn btn_default btn_disabled">取消选择</a>\n        <span class="product-select-count">已选择<span class="js_selected_count">0</span>个商品</span>\n    </div>\n    <table class="table" cellspacing="0">\n        <thead class="thead">\n            <tr>\n                <th class="table_cell product-cell__checkbox">\n                	<label class="frm_checkbox_label">\n                        <i class="icon_checkbox"></i>\n                        <input type="checkbox" class="js_select_all frm_checkbox">\n                    </label>\n                </th>\n                <th class="table_cell product-cell__name">\n                    商品                </th>\n                <th class="table_cell product-cell__kind">类目</th>\n                <th class="table_cell product-cell__status">上架状态</th>\n            </tr>\n        </thead>\n        <tbody class="js_list_body tbody">\n            <tr class="empty_item"><td colspan="4" class="empty_tips"><i class="icon32_loading light"></i></td></tr>\n        </tbody>\n    </table>\n</div>\n<div class="product-select-footer">\n    <div class="js_pagebar pagination_wrp r"></div>\n    {if can_use_smart}\n    <div class="product-promotion__setting">\n        <label class="frm_checkbox_label">\n            <i class="icon_checkbox"></i>\n            <span class="lbl_content">个性化推荐</span>\n            <input type="checkbox" class="js_smart_select frm_checkbox">\n        </label>\n        <span class="js_smart_tips icon_msg_mini ask"></span>\n    </div>\n    <div class="js_smart_desc product-promotion__setting-expand" style="display: none;">\n        在已选的<span class="js_smart_total js_selected_count">0</span>个商品中，系统将个性化推荐<span class="frm_input_box frm_input_product"><input type="number" placeholder="" class="js_smart_count frm_input"></span>个商品展示给用户    </div>\n    {/if}\n</div>\n<!--旧商品选择 end-->\n</div>\n\n\n\n';
});define("tpl/media/videocard.html.js",[],function(){
return'<div id="wxVideoBox{id}" data-errmsg=\'{err_msg}\' class="richvideo with_msg_box Js_videomsg" {if video_ori_status == 1 && is_new_video && status == 3}data-original="1"{else}data-original="0"{/if} data-vid="{video_id}" data-title="{if title_encode}{title_encode}{else}{title}{/if}" data-duration="{duration}" data-cover="{cover}">\n    <div class="richvideo_content" style="z-index: 0">\n        <h4 class="title">\n            {if video_ori_status == 1 && is_new_video && (status == 3 || for_selection)}\n            <i class="icon_tag_default original"></i>\n            {else if video_ori_status == 2 && is_new_video && (status == 3 || for_selection)}\n            <i class="icon_tag_default republish"></i>\n            {/if}\n            {title}\n        </h4>\n        <div class="video_info">\n            <em class="time">{time}</em>\n            <em class="res">{from}</em>\n        </div>\n        <div class="video_extra_info" data-seq="{seq}">\n            <img class="video_thumb" src="{if !cover}{if !!multi_item}{each multi_item as value}{value.cover}{/each}{/if}{else}{cover}{/if}" alt="">\n            {if is_new_video && status != 4}\n            <span class="video_length">{duration}</span>\n            {/if}\n            {if status == 0 || (status == 3 && video_ori_status == 0 && !before_original_video)}\n            <div class="status_mask">\n            <span class="status_msg">\n                审核中            </span>\n            <span class="vm_box"></span>\n            </div>\n            {else if err_msg}\n            <div class="status_mask">\n            <span class="status_msg">\n                {err_msg}\n            </span>\n            <span class="vm_box"></span>\n            </div>\n            {else if status == 1}\n            <div class="status_mask">\n            <span class="status_msg">\n                资料不完整            </span>\n            <span class="vm_box"></span>\n            </div>\n            {else if status == 2}\n            <div class="status_mask">\n            <span class="status_msg mini_tips icon_after">\n                审核不通过                <i class="icon_mini_tips ask_white js_fail_reason" data-seq="{seq}"></i>\n            </span>\n            <span class="vm_box"></span>\n            </div>\n            {else if status == 3 && applyori == 1 && ((video_ori_status == 3 && (ori_fail_reason == 1 || ori_fail_reason == 3 || ori_fail_reason == 5) && is_new_video) || video_ori_status == 2) }\n            <div class="status_mask">\n            <span class="status_msg">\n                原创声明失败<i class="icon_mini_tips ask_white js_declare_fail" data-seq="{seq}" data-url="{url}" data-ori="{video_ori_status}" data-reason="{ori_fail_reason}" data-vid="{content}" data-name="{hit_nickname}"></i>\n            </span>\n            <span class="vm_box"></span>\n            </div>\n            {else if status == 3 && is_new_video}\n            <div class="play_mask">\n                <i class="icon_video_play"> </i>\n                <span class="vm_box"></span>\n            </div>\n\n            {else if status == 4}\n            <div class="status_mask">\n            <span class="status_msg">\n                转码中            </span>\n            <span class="vm_box"></span>\n            </div>\n            {else if status == 5}\n            <div class="status_mask">\n            <span class="status_msg">\n                转码失败<i class="icon_mini_tips ask_white js_fail_code" data-seq="{seq}"></i>\n            </span>\n            <span class="vm_box"></span>\n            </div>            \n            {/if}\n        </div>\n        <div class="video_desc" data-digest="{digest}">{digest}</div>\n    </div>\n\n    {if for_operation}\n    <div class="richvideo_opr">\n        <ul class="grid_line" >\n            {if is_new_video}\n            <li class="richvideo_opr_item grid_item size1of2">\n            <a class="js_tooltip" href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&lang=zh_CN&token={token}&type=15&appmsgid={app_id}" data-seq="{seq}" data-tooltip="编辑">\n                    <i class="icon18_common edit_gray">编辑</i>\n                </a>\n            </li>\n            <li class="richvideo_opr_item grid_item size1of2 no_extra">\n            <a class="js_del js_tooltip" href="javascript:void(0);" data-id="{app_id}" data-tooltip="删除">\n                    <i class="icon18_common del_gray">删除</i>\n                </a>\n            </li>\n            {else if is_new_video==0 && video_url!=""} <!-- 微信视频 -->\n            <li class="richvideo_opr_item grid_item size1of3">\n            <a class="js_tooltip" href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&lang=zh_CN&token={token}&type=15&appmsgid={app_id}" data-seq="{seq}" data-tooltip="编辑">\n                    <i class="icon18_common edit_gray">编辑</i>\n                </a>\n            </li>\n            <li class="richvideo_opr_item grid_item size1of3">\n                <a {if for_transfer}href="javascript:;" class="js_tooltip js_download"{else}href="{video_download_url}" class="js_tooltip"{/if} data-tooltip="下载">\n                    <i class="icon18_common download_gray">下载</i>\n                </a>\n            </li>\n            <li class="richvideo_opr_item grid_item size1of3 no_extra">\n            <a class="js_del js_tooltip" href="javascript:void(0);" data-id="{app_id}" data-tooltip="删除">\n                    <i class="icon18_common del_gray">删除</i>\n                </a>\n            </li>\n            {else } <!-- 微视视频 -->\n            <li class="richvideo_opr_item grid_item size1of2">\n            <a class="js_tooltip" href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&lang=zh_CN&token={token}&type=15&appmsgid={app_id}" data-seq="{seq}" data-tooltip="编辑">\n                    <i class="icon18_common edit_gray">编辑</i>\n                </a>\n            </li>\n            <li class="richvideo_opr_item grid_item size1of2 no_extra">\n            <a class="js_del js_tooltip" href="javascript:void(0);" data-id="{app_id}" data-tooltip="删除">\n                    <i class="icon18_common del_gray">删除</i>\n                </a>\n            </li>\n            {/if}\n        </ul>\n    </div>\n    {/if}\n    {if for_selection && !(status == 3 && video_ori_status == 0 && !before_original_video) && !err_msg}\n    <div class="richvideo_mask"></div>\n    <i class="icon_card_selected">已选择</i>\n    {/if}\n</div>\n<div class="richvideo_msg_box">\n    <p class="mini_tips warn" style="display: none;">\n    {err_msg}\n    </p>\n</div>';
});define("tpl/media/dialog/videomsg_layout.html.js",[],function(){
return'<div class="dialog_media_container">\n    <div class="sub_title_bar in_dialog">\n        <div class="title_tab js_videotab weui-desktop-tab_dialog"></div>\n        <div class="search_bar dn">\n            <span class="frm_input_box search with_del append">\n                <a class="del_btn" href="javascript:"><i class="icon_search_del"></i>&nbsp;</a>\n                <a id="msgSearchBtn" href="javascript:" class="frm_input_append"><i class="icon16_common search_gray">搜索</i>&nbsp;</a>\n                <input id="msgSearchInput" type="text" placeholder="关键字" value="" class="frm_input">\n            </span>\n        </div>\n        <div class="richvideo_create js_video_create">\n            {if showShareDialog}\n            <span class="weui-desktop-tips weui-desktop-tips_icon-after js_look_wording">视频推荐说明<i class="icon-svg-common-ask"></i></span>\n            {/if}\n            <a class="btn btn_primary btn_add" target="_blank" href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&type=15&lang=zh_CN&token={token}">\n                <i class="icon14_common add_white"></i>新建视频            </a>\n        </div>\n    </div>\n    <div class="js_video_status js_video_content dn">\n        <div class="richvideo_list media_dialog" id="js_videomsg_list">\n            <div class="richvideo_col"><div class="inner"></div></div>&nbsp;\n            <div class="richvideo_col"><div class="inner"></div></div>\n        </div>\n    </div>\n    <div class="js_video_status js_video_tencent link_search_video_box dn js_video_search">\n        <div class="video">\n            <div class="frm_control_group">\n                <label for="" class="frm_label">视频/图文网址</label>\n                <div class="frm_controls">\n                    <span class="frm_input_box">\n                        <input type="text" class="frm_input js_video_txurl js_video_url" placeholder="支持插入微信公众号文章链接、视频详情页链接和腾讯视频链接">\n                    </span>\n                    <p class="frm_msg fail js_video_url_tip">只支持已发布的微信公众号链接、视频详情页链接和腾讯视频链接</p>\n                </div>\n            </div>\n			<!-- <div class="video_preview js_video_preview"></div> --><!-- 原来的js_video_preview去掉改成和素材库、小视频一样的方式通过richvideo_list插入视频@lulu -->\n		</div>\n        <div class="richvideo_list media_dialog" id="js_video_search_list">\n            <div class="richvideo_col"><div class="inner"></div></div><!-- 这里能否控制如果是腾讯视频的链接则只显示一个richvideo_col，如需支持多视频才显示两个richvideo_col？@lulu\n            肯定可以啊！ @radeonwu -->\n            <div class="richvideo_col"><div class="inner"></div></div>\n            <!--<div class="pagination_wrp pageNavigator js_video_tencent_pagebar"></div>--><!-- 如果有多视频的情况下才显示分页，视频搜索这里用单独的分页组件，不要使用外面的分页（js_pagebar） @lulu-->\n            <!--图文消息最多出现3个视频，这里不需要分页 @radeonwu-->\n        </div>\n    </div>\n    <div class="js_video_status js_video_loading">\n        <i class="icon_loading_small white">loading...</i>\n    </div>\n    <div class="js_video_status js_video_none dn">\n        <div class="no_media_wrp">\n            <p class="empty_tips js_empty_tips"></p>\n            <!--\n            <div class="richvideo_create js_video_create">\n                <a class="" target="_blank" href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&type=15&lang=zh_CN&token={token}">\n                    <i class="icon_richvideo_small"></i><strong>新建视频消息</strong>\n                </a>\n            </div>\n            -->\n        </div>\n        <span class="vm_box"></span>\n    </div>\n    \n    <div class="pagination_wrp pageNavigator js_pagebar"></div><!-- 在视频搜索的tab下不要使用这个分页组件 @lulu-->\n</div>\n\n';
});define("common/wx/media/video.js",["widget/media/richvideo.css","widget/media.css","biz_web/lib/video.js","common/wx/Cgi.js","common/wx/time.js","common/qq/Class.js","biz_web/lib/swfobject.js","tpl/media/video.html.js","tpl/media/simple_videomsg.html.js","tpl/media/wxvideo.html.js","tpl/media/videomsg.html.js"],function(e){
"use strict";
e("widget/media/richvideo.css"),e("widget/media.css");
var i,o=e("biz_web/lib/video.js"),t=e("common/wx/Cgi.js"),d=e("common/wx/time.js"),s=e("common/qq/Class.js"),n=e("biz_web/lib/swfobject.js"),a=e("tpl/media/video.html.js"),r=wx.T,l=wx.data.t,m=document,c=!!n.ua.pv[0],f=m.createElement("video"),u=navigator.userAgent.toLowerCase(),v=/msie/.test(u),p=/firefox/.test(u);
o.options.flash.swf=wx.path.video;
var w={
id:"",
source:"",
type:"",
file_id:""
},h=5e3,g=function(e){
if(e.video_url){
{
var i="tmp"+(1e5*Math.random()|0);
$('<video id="%s"></video>'.sprintf(i)).appendTo("body");
}
o("#"+i).ready(function(){
$("#"+i).hide();
var o=this;
this.on("error",function(){
o.dispose(),e.dom.find(".loading_tips").show(),e.video_url="",setTimeout(function(){
g(e);
},h);
}),this.on("loadedmetadata",function(){
o.dispose(),$(e.selector).children().remove(),e.for_transfer=!1,e.digest=e.digest?e.digest.html(!1):"",
new x(e);
});
var t=e.video_url;
o.src(f.canPlayType?t:[{
type:"video/x-flv",
src:t+"&trans=1"
}]),o.play();
});
}else t.get({
url:wx.url("/cgi-bin/appmsg?action=get_video_url&videoid=%s".sprintf(e.video_id)),
error:function(){
setTimeout(function(){
g(e);
},h);
}
},function(i){
e.video_url=i.video_url||"",e.video_download_url=i.video_download_url||"",setTimeout(function(){
g(e);
},h);
});
},x=s.declare({
init:function(o){
function t(){
var e=window.navigator.userAgent;
return e.toLowerCase().indexOf("firefox")>-1?!0:e.toLowerCase().indexOf("msie ")>-1&&"Microsoft Internet Explorer"==navigator.appName?!0:!1;
}
var s=this;
if($(o.selector).data("opt",o),o=$.extend(!0,{},w,o),s.id=o.id,s.source=o.source,
s.file_id=o.file_id,s.type=o.type,s.video_url=o.video_url,s.tpl=o.tpl,s.ff_must_flash=o.ff_must_flash,
o.src=s.getVideoURL(),o.token=l||wx.data.t,o.time=o.create_time?d.timeFormat(o.create_time):"",
o.digest=o.digest?o.digest.replace(/<br.*>/g,"\n").html():"",o.for_network="string"==typeof o.video_url?!o.video_url:!o.content,
!o.file_id&&o.multi_item&&o.multi_item.length>0){
var n=o.multi_item[0];
n&&n.cover&&(o.img_url=n.cover);
}
i=e(o.sent?"tpl/media/simple_videomsg.html.js":21==+o.type||9==+o.type||11==+o.type?"tpl/media/wxvideo.html.js":"tpl/media/videomsg.html.js");
var m=$("videomsg"==o.tpl?r(i,o):r(a,o));
s.dom=o.dom=$(o.selector).append(m),"videomsg"==o.tpl&&o.for_transfer&&g(o,s.dom),
s.dom.find(".video_desc").length&&s.dom.find(".video_desc").html(s.dom.find(".video_desc").attr("data-digest").replace(/\n/g,"<br>")),
s.dom.find(".wxVideoScreenshot").on("click",function(){
s.dom.find(".mediaContent").css({
height:"auto"
}),t()?(s.dom.addClass("wxVideoPlaying"),s.dom.find(".wxVideoPlayer").hide(),s.dom.find(".wxVideoNoSupport").show()):s.play(o.play);
}),s.dom.find(".wxNetworkVideo").on("click",function(){
window.open($(this).attr("data-contenturl"));
}),s.dom.find(".video_switch").click(function(){
s.dom.find(".mediaContent").css({
height:"104px"
}),t()?s.dom.removeClass("wxVideoPlaying"):s.pause(o.pause);
});
},
getVideoURL:function(){
var e=this.source,i=this.id,o=(this.msg_id||"",this.file_id);
return e&&(e="&source="+e),this.video_url||"/cgi-bin/getvideodata?msgid={msgid}&fileid={fileid}&token={token}{source}".format({
msgid:i,
fileid:o,
source:e,
token:wx.data.t
});
},
canPlayType:function(){
this.type;
return!f.canPlayType&&!c;
},
play:function(e){
var i=this;
if(i.canPlayType())return void alert("您当前浏览器无法播放视频，请安装Flash插件/更换Chrome浏览器");
var t=this.id,d=this.player;
if(d)return $("#wxVideoBox"+t).addClass("wxVideoPlaying").find(".wxVideoPlayContent").show(),
d.play(),e&&e(this);
var s=i.getVideoURL();
$("#wxVideoBox"+t).addClass("wxVideoPlaying").find(".wxVideoPlayContent").show();
var n="videomsg"==i.tpl?{
width:"100%",
height:"100%"
}:{};
o("#wxVideo"+t,n).ready(function(){
d=this;
var o=0;
return d.on("fullscreenchange",function(){
o?($("#wxVideoPlayer"+t).css({
overflow:"hidden",
zoom:"1"
}),$("#wxVideoBox"+t).css({
"z-index":"0"
})):($("#wxVideoPlayer"+t).css({
overflow:"visible",
zoom:"normal"
}),$("#wxVideoBox"+t).css({
"z-index":"1"
})),o=~o;
}),d.on("ended",function(){
this.currentTime(0);
}),d.src(v||!f.canPlayType||i.ff_must_flash&&p?[{
type:"video/x-flv",
src:s+"&trans=1"
}]:s),d.play(),i.player=d,e&&e(this);
});
},
pause:function(e){
var i=this.player;
i&&i.pause(),$("#wxVideoBox"+this.id).removeClass("wxVideoPlaying").find(".wxVideoPlayContent").hide(),
e&&e(this);
}
});
return x;
});