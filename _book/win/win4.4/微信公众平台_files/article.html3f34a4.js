define("tpl/step.html.js",[],function(){
return'<ul class="weui-desktop-steps">\n    {each stepArr as item index}\n    <li class="weui-desktop-step {item.cls}">\n        {item.name}\n    </li>\n    {/each}\n</ul>\n';
});define("tpl/biz_web/ui/checkbox.html.js",[],function(){
return'<label for="_checkbox_{index}" class="frm_{type}_label">\n	<i class="icon_{type}"></i>\n	<input type="{type}" class="frm_{type}" name="{name}" id="_checkbox_{index}">\n	<span class="lbl_content">{label}</span>\n</label>';
});define("tpl/uploader.html.js",[],function(){
return'<li id="uploadItem{id}" data-status="{className}" class="upload_file">\n    <strong class="upload_file_name">{fileName}</strong>\n    <span class="upload_file_size">({size})</span>\n    <div class="progress_bar"><div class="progress_bar_thumb" style="width:0%"></div></div>\n    <a href="javascript:;" data-id="{id}" class="upload_file_cancel js_cancel">取消</a>\n</li>\n';
});define("tpl/media/dialog/image_crop.html.js",[],function(){
return'<!-- 步骤条同级加个img_crop_panel把两个步骤的内容都包起来\n<div class="img_crop_area group">\n    <div class="img_crop_origin_area">\n        <div class="img_crop_hd">\n            <h4 class="img_crop_title">原图</h4>\n        </div>\n        <div class="img_crop_wrp">\n            <img class="img_crop_origin" src="{url}">\n        </div>\n    </div>\n    <div class="img_crop_edit_area">\n        <div class="img_crop_hd">\n            <h4 class="img_crop_title">封面展示区域</h4>\n            <p class="tips_global img_crop_tips">{tips}</p>\n        </div>\n        <div class="js_crop_wrp img_crop_wrp">\n            <img src="{url}">\n        </div>\n    </div>\n</div>\n -->\n<div class="img_crop_area group">\n    <div class="img_crop_edit_area">\n        <div class="img_crop_hd">\n            <h4 class="img_crop_title">封面展示区域</h4>\n        </div>\n        <div class="js_crop_wrp img_crop_wrp">\n            <img src="{url}">\n        </div>\n        <div class="img_crop_ft">\n            <!--\n            <p class="tips_global img_crop_tips">{tips}</p>\n            -->\n        </div>\n    </div>\n    <div class="img_crop_preview_area">\n      <ul class="img_crop_preview_list">\n        {if articleIndex==0}\n        <li class="img_crop_preview_item preivew_ratio_1">\n          <span class="js_preview img_crop_preview_hd" style="background-image:url();"></span>\n          <div class="img_crop_preview_bd">\n            <strong class="img_crop_preview_title">图文封面（16:9）</strong>\n            <p class="img_crop_preview_desc">使用微信6.7.0之前版本的微信用户，将看到此封面。</p>\n          </div>\n        </li>\n        <li class="img_crop_preview_item preivew_ratio_2">\n          <span class="js_preview img_crop_preview_hd" style="background-image:url();"></span>\n          <div class="img_crop_preview_bd">\n            <strong class="img_crop_preview_title">图文封面（2.35:1）</strong>\n            <p class="img_crop_preview_desc">使用微信6.7.0及后续版本的微信用户，将看到此封面。</p>\n          </div>\n        </li>\n        {/if}\n        <li class="img_crop_preview_item preivew_ratio_3">\n          <span class="js_preview img_crop_preview_hd" style="background-image:url();"></span>\n          <div class="img_crop_preview_bd">\n            <strong class="img_crop_preview_title">\n              {if articleIndex==0}\n              转发封面（1:1）              {else}\n              图文和转发封面（1:1）              {/if}            \n            </strong>\n            <p class="img_crop_preview_desc">\n              {if articleIndex==0}\n              发送给朋友、分享到朋友圈，用户将看到此封面。              {else}\n              群发、发送给朋友、分享到朋友圈，用户将看到此封面。              {/if}\n            </p>\n          </div>\n        </li>\n      </ul>\n    </div>\n</div>\n';
});define("common/wx/mpEditor/common/cropImgCgi.js",["common/wx/Cgi.js"],function(o){
"use strict";
function r(o){
n.post({
url:"/cgi-bin/cropimage?",
data:{
imgurl:o.imgurl,
x1:o.x1,
y1:o.y1,
x2:o.x2,
y2:o.y2
}
},{
done:function(r){
r&&r.base_resp&&0==r.base_resp.ret&&r.imgurl?"function"==typeof o.onsuccess&&o.onsuccess({
oriUrl:o.imgurl,
url:r.imgurl,
file_id:r.file_id||""
}):"function"==typeof o.onerror&&o.onerror(r||{});
},
fail:function(){
"function"==typeof o.onerror&&o.onerror({
retcode:-2
});
}
});
}
var n=o("common/wx/Cgi.js");
return{
getUrl:r
};
});define("common/lib/jquery.Jcrop.js",["jquery.Jcrop.min.css"],function(e){
e("jquery.Jcrop.min.css"),function(e){
e.Jcrop=function(t,n){
function o(e){
return Math.round(e)+"px";
}
function r(e){
return R.baseClass+"-"+e;
}
function a(){
return e.fx.step.hasOwnProperty("backgroundColor");
}
function i(t){
var n=e(t).offset();
return[n.left,n.top];
}
function s(e){
return[e.pageX-A[0]+R.offsetX,e.pageY-A[1]+R.offsetY];
}
function c(t){
"object"!=typeof t&&(t={}),R=e.extend(R,t),e.each(["onChange","onSelect","onRelease","onDblClick"],function(e,t){
"function"!=typeof R[t]&&(R[t]=function(){});
});
}
function u(e,t,n){
if(A=i(N),Ct.setCursor("move"===e?e:e+"-resize"),"move"===e)return Ct.activateHandlers(l(t),b,n);
var o=yt.getFixed(),r=f(e),a=yt.getCorner(f(r));
yt.setPressed(yt.getCorner(r)),yt.setCurrent(a),Ct.activateHandlers(d(e,o),b,n);
}
function d(e,t){
return function(n){
if(R.aspectRatio)switch(e){
case"e":
n[1]=t.y+1;
break;

case"w":
n[1]=t.y+1;
break;

case"n":
n[0]=t.x+1;
break;

case"s":
n[0]=t.x+1;
}else switch(e){
case"e":
n[1]=t.y2;
break;

case"w":
n[1]=t.y2;
break;

case"n":
n[0]=t.x2;
break;

case"s":
n[0]=t.x2;
}
yt.setCurrent(n),xt.update();
};
}
function l(e){
var t=e;
return St.watchKeys(),function(e){
yt.moveOffset([e[0]-t[0],e[1]-t[1]]),t=e,xt.update();
};
}
function f(e){
switch(e){
case"n":
return"sw";

case"s":
return"nw";

case"e":
return"nw";

case"w":
return"ne";

case"ne":
return"sw";

case"nw":
return"se";

case"se":
return"nw";

case"sw":
return"ne";
}
}
function h(e){
return function(t){
return R.disabled?!1:"move"!==e||R.allowMove?(A=i(N),lt=!0,u(e,s(t)),t.stopPropagation(),
t.preventDefault(),!1):!1;
};
}
function p(e,t){
var n=e.width(),o=e.height();
n=t,o=t/e.width()*e.height(),ut=e.width()/n,dt=e.height()/o,e.width(n).height(o);
}
function g(e){
return{
x:e.x*ut,
y:e.y*dt,
x2:e.x2*ut,
y2:e.y2*dt,
w:e.w*ut,
h:e.h*dt
};
}
function b(){
var e=yt.getFixed();
e.w>R.minSelect[0]&&e.h>R.minSelect[1]?(xt.enableHandles(),xt.done()):xt.release(),
Ct.setCursor(R.allowSelect?"crosshair":"default");
}
function w(e){
if(R.disabled)return!1;
if(!R.allowSelect)return!1;
lt=!0,A=i(N),xt.disableHandles(),Ct.setCursor("crosshair");
var t=s(e);
return yt.setPressed(t),xt.update(),Ct.activateHandlers(v,b,"touch"===e.type.substring(0,5)),
St.watchKeys(),e.stopPropagation(),e.preventDefault(),!1;
}
function v(e){
yt.setCurrent(e),xt.update();
}
function y(){
var t=e("<div></div>").addClass(r("tracker"));
return K&&t.css({
opacity:0,
backgroundColor:"white"
}),t;
}
function m(e){
et.removeClass().addClass(r("holder")).addClass(e);
}
function x(e,t){
function n(){
window.setTimeout(v,l);
}
var o=e[0]/ut,r=e[1]/dt,a=e[2]/ut,i=e[3]/dt;
if(!ft){
var s=yt.flipCoords(o,r,a,i),c=yt.getFixed(),u=[c.x,c.y,c.x2,c.y2],d=u,l=R.animationDelay,f=s[0]-u[0],h=s[1]-u[1],p=s[2]-u[2],g=s[3]-u[3],b=0,w=R.swingSpeed;
o=d[0],r=d[1],a=d[2],i=d[3],xt.animMode(!0);
var v=function(){
return function(){
b+=(100-b)/w,d[0]=Math.round(o+b/100*f),d[1]=Math.round(r+b/100*h),d[2]=Math.round(a+b/100*p),
d[3]=Math.round(i+b/100*g),b>=99.8&&(b=100),100>b?(S(d),n()):(xt.done(),xt.animMode(!1),
"function"==typeof t&&t.call(kt));
};
}();
n();
}
}
function C(e){
S([e[0]/ut,e[1]/dt,e[2]/ut,e[3]/dt]),R.onSelect.call(kt,g(yt.getFixed())),xt.enableHandles();
}
function S(e){
yt.setPressed([e[0],e[1]]),yt.setCurrent([e[2],e[3]]),xt.update();
}
function k(){
var e=yt.getFixed();
return g({
x:e.x-R.offsetX,
y:e.y-R.offsetY,
x2:e.x2-R.offsetX,
y2:e.y2-R.offsetY,
w:e.w,
h:e.h
});
}
function M(){
var e=yt.getFixed();
return{
x:e.x-R.offsetX,
y:e.y-R.offsetY,
x2:e.x2-R.offsetX,
y2:e.y2-R.offsetY,
w:e.w,
h:e.h
};
}
function z(e,t){
c(e),t!==!0&&X();
}
function O(){
R.disabled=!0,xt.disableHandles(),xt.setCursor("default"),Ct.setCursor("default");
}
function j(){
R.disabled=!1,X();
}
function B(){
xt.done(),Ct.activateHandlers(null,null);
}
function F(){
et.remove(),W.show(),W.css("visibility","visible"),e(t).removeData("Jcrop");
}
function H(){
return{
w:N.width(),
h:N.height()
};
}
function I(){
var e=H(),t=e.w,n=e.h,o=R.offsetX,r=R.offsetY,a=o+t,i=r+n;
U=o,Z=r,$=a,_=i,R.maxBound&&4==R.maxBound.length&&(U=Math.max(U,R.maxBound[0]),Z=Math.max(Z,R.maxBound[1]),
$=Math.min($,R.maxBound[2]),_=Math.min(_,R.maxBound[3]));
}
function P(e){
R.offsetX=e.offsetX,R.offsetY=e.offsetY,I();
}
function D(e){
ut=e.xscale,dt=e.yscale,I(),yt.setPressed([e.selectionPos[0],e.selectionPos[1]]),
yt.setCurrent([e.selectionPos[2],e.selectionPos[3]]),X();
}
function J(e,t){
xt.release(),O();
var n=new Image;
n.onload=function(){
var o=n.width,r=n.height,a=R.boxWidth,i=R.boxHeight;
N.width(o).height(r),N.attr("src",e),tt.attr("src",e),p(N,a,i);
var s=N.width(),c=N.height();
tt.width(s).height(c),gt.width(s+2*pt).height(c+2*pt),et.width(s).height(c),I(),
mt.resize(s,c),j(),"function"==typeof t&&t.call(kt);
},n.src=e;
}
function Y(e,t,n){
var o=t||R.bgColor;
R.bgFade&&a()&&R.fadeTime&&!n?e.animate({
backgroundColor:o
},{
queue:!1,
duration:R.fadeTime
}):e.css("backgroundColor",o);
}
function X(e){
if(R.allowResize?e?xt.enableOnly():xt.enableHandles():xt.disableHandles(),Ct.setCursor(R.allowSelect?"crosshair":"default"),
xt.setCursor(R.allowMove?"move":"default"),R.hasOwnProperty("trueSize")){
var t=H();
ut=R.trueSize[0]/t.w,dt=R.trueSize[1]/t.h;
}
R.hasOwnProperty("setSelect")&&(C(R.setSelect),xt.done(),delete R.setSelect),mt.refresh(),
R.bgColor!=bt&&(Y(R.shade?mt.getShades():et,R.shade?R.shadeColor||R.bgColor:R.bgColor),
bt=R.bgColor),wt!=R.bgOpacity&&(wt=R.bgOpacity,R.shade?mt.refresh():xt.setBgOpacity(wt)),
at=R.maxSize[0]||0,it=R.maxSize[1]||0,st=R.minSize[0]||0,ct=R.minSize[1]||0,R.hasOwnProperty("outerImage")&&(N.attr("src",R.outerImage),
delete R.outerImage),xt.refresh();
}
var A,R=e.extend({},e.Jcrop.defaults),T=navigator.userAgent.toLowerCase(),K=/msie/.test(T),q=/msie [1-6]\./.test(T);
"object"!=typeof t&&(t=e(t)[0]),"object"!=typeof n&&(n={}),c(n);
var E={
border:"none",
visibility:"visible",
margin:0,
padding:0,
position:"absolute",
top:0,
left:0
},W=e(t),L=!0;
if("IMG"==t.tagName){
if(0!=W[0].width&&0!=W[0].height)W.width(W[0].width),W.height(W[0].height);else{
var G=new Image;
G.src=W[0].src,W.width(G.width),W.height(G.height);
}
var N=W.clone().removeAttr("id").css(E).show();
N.width(W.width()),N.height(W.height()),W.after(N).hide();
}else N=W.css(E).show(),L=!1,null===R.shade&&(R.shade=!0);
p(N,R.boxWidth,R.boxHeight);
var V=N.width(),Q=N.height(),U=0,Z=0,$=V+U,_=Q+Z,et=e("<div />").width(V).height(Q).addClass(r("holder")).css({
position:"relative",
backgroundColor:R.bgColor
}).insertAfter(W).append(N);
I(),R.addClass&&et.addClass(R.addClass);
var tt=e("<div />"),nt=e("<div />").width("100%").height("100%").css({
zIndex:310,
position:"absolute",
overflow:"hidden"
}),ot=e("<div />").width("100%").height("100%").css("zIndex",320),rt=e("<div />").css({
position:"absolute",
zIndex:600
}).dblclick(function(){
var e=yt.getFixed();
R.onDblClick.call(kt,e);
}).insertBefore(N).append(nt,ot);
L&&(tt=e("<img />").attr("src",N.attr("src")).css(E).width(V).height(Q),nt.append(tt)),
q&&rt.css({
overflowY:"hidden"
});
var at,it,st,ct,ut,dt,lt,ft,ht,pt=R.boundary,gt=y().width(V+2*pt).height(Q+2*pt).css({
position:"absolute",
top:o(-pt),
left:o(-pt),
zIndex:290
}).mousedown(w),bt=R.bgColor,wt=R.bgOpacity;
A=i(N);
var vt=function(){
function e(){
var e,t={},n=["touchstart","touchmove","touchend"],o=document.createElement("div");
try{
for(e=0;e<n.length;e++){
var r=n[e];
r="on"+r;
var a=r in o;
a||(o.setAttribute(r,"return;"),a="function"==typeof o[r]),t[n[e]]=a;
}
return t.touchstart&&t.touchend&&t.touchmove;
}catch(i){
return!1;
}
}
function t(){
return R.touchSupport===!0||R.touchSupport===!1?R.touchSupport:e();
}
return{
createDragger:function(e){
return function(t){
return R.disabled?!1:"move"!==e||R.allowMove?(A=i(N),lt=!0,u(e,s(vt.cfilter(t)),!0),
t.stopPropagation(),t.preventDefault(),!1):!1;
};
},
newSelection:function(e){
return w(vt.cfilter(e));
},
cfilter:function(e){
return e.pageX=e.originalEvent.changedTouches[0].pageX,e.pageY=e.originalEvent.changedTouches[0].pageY,
e;
},
isSupported:e,
support:t()
};
}(),yt=function(){
function e(e){
e=i(e),p=f=e[0],g=h=e[1];
}
function t(e){
e=i(e),d=e[0]-p,l=e[1]-g,p=e[0],g=e[1];
}
function n(){
return[d,l];
}
function o(e){
var t=e[0],n=e[1];
U>f+t&&(t=U-f),Z>h+n&&(n=Z-h),g+n>_&&(n=_-g),p+t>$&&(t=$-p),f+=t,p+=t,h+=n,g+=n;
}
function r(e){
var t=a();
switch(e){
case"ne":
return[t.x2,t.y];

case"nw":
return[t.x,t.y];

case"se":
return[t.x2,t.y2];

case"sw":
return[t.x,t.y2];
}
}
function a(){
if(!R.aspectRatio)return c();
var e,t,n,o,r=R.aspectRatio,a=R.minSize[0]/ut,i=R.maxSize[0]/ut,d=R.maxSize[1]/dt,l=p-f,b=g-h,w=Math.abs(l),v=Math.abs(b),y=w/v;
return 0===i&&(i=10*($-U)),0===d&&(d=10*(_-Z)),r>y?(t=g,n=v*r,e=0>l?f-n:n+f,0>e?(e=0,
o=Math.abs((e-f)/r),t=0>b?h-o:o+h):e>$&&(e=$,o=Math.abs((e-f)/r),t=0>b?h-o:o+h)):(e=p,
o=w/r,t=0>b?h-o:h+o,0>t?(t=0,n=Math.abs((t-h)*r),e=0>l?f-n:n+f):t>_&&(t=_,n=Math.abs(t-h)*r,
e=0>l?f-n:n+f)),e>f?(a>e-f?e=f+a:e-f>i&&(e=f+i),t=t>h?h+(e-f)/r:h-(e-f)/r):f>e&&(a>f-e?e=f-a:f-e>i&&(e=f-i),
t=t>h?h+(f-e)/r:h-(f-e)/r),0>e?(f-=e,e=0):e>$&&(f-=e-$,e=$),0>t?(h-=t,t=0):t>_&&(h-=t-_,
t=_),u(s(f,h,e,t));
}
function i(e){
return e[0]<U&&(e[0]=U),e[1]<Z&&(e[1]=Z),e[0]>$&&(e[0]=$),e[1]>_&&(e[1]=_),[Math.round(e[0]),Math.round(e[1])];
}
function s(e,t,n,o){
var r=e,a=n,i=t,s=o;
return e>n&&(r=n,a=e),t>o&&(i=o,s=t),[r,i,a,s];
}
function c(){
var e,t=p-f,n=g-h;
return at&&Math.abs(t)>at&&(p=t>0?f+at:f-at),it&&Math.abs(n)>it&&(g=n>0?h+it:h-it),
ct/dt&&Math.abs(n)<ct/dt&&(g=n>0?h+ct/dt:h-ct/dt),st/ut&&Math.abs(t)<st/ut&&(p=t>0?f+st/ut:f-st/ut),
p>$&&(e=p-$,f-=e,p-=e),g>_&&(e=g-_,h-=e,g-=e),f>$&&(e=f-_,g-=e,h-=e),h>_&&(e=h-_,
g-=e,h-=e),u(s(f,h,p,g));
}
function u(e){
return{
x:e[0],
y:e[1],
x2:e[2],
y2:e[3],
w:e[2]-e[0],
h:e[3]-e[1]
};
}
var d,l,f=0,h=0,p=0,g=0;
return{
flipCoords:s,
setPressed:e,
setCurrent:t,
getOffset:n,
moveOffset:o,
getCorner:r,
getFixed:a
};
}(),mt=function(){
function t(e,t){
p.left.css({
height:o(t)
}),p.right.css({
height:o(t)
});
}
function n(){
return r(yt.getFixed());
}
function r(e){
p.top.css({
left:o(e.x),
width:o(e.w),
height:o(e.y)
}),p.bottom.css({
top:o(e.y2),
left:o(e.x),
width:o(e.w),
height:o(_-e.y2)
}),p.right.css({
left:o(e.x2),
width:o($-e.x2)
}),p.left.css({
width:o(e.x)
});
}
function a(){
return e("<div />").css({
position:"absolute",
backgroundColor:R.shadeColor||R.bgColor
}).appendTo(h);
}
function i(){
f||(f=!0,h.insertBefore(N),n(),xt.setBgOpacity(1,0,1),tt.hide(),s(R.shadeColor||R.bgColor,1),
xt.isAwake()?u(R.bgOpacity,1):u(1,1));
}
function s(e,t){
Y(l(),e,t);
}
function c(){
f&&(h.remove(),tt.show(),f=!1,xt.isAwake()?xt.setBgOpacity(R.bgOpacity,1,1):(xt.setBgOpacity(1,1,1),
xt.disableHandles()),Y(et,0,1));
}
function u(e,t){
f&&(R.bgFade&&!t?h.animate({
opacity:1-e
},{
queue:!1,
duration:R.fadeTime
}):h.css({
opacity:1-e
}));
}
function d(){
R.shade?i():c(),xt.isAwake()&&u(R.bgOpacity);
}
function l(){
return h.children();
}
var f=!1,h=e("<div />").css({
position:"absolute",
zIndex:240,
opacity:0
}),p={
top:a(),
left:a().height(_-Z),
right:a().height(_-Z),
bottom:a()
};
return{
update:n,
updateRaw:r,
getShades:l,
setBgColor:s,
enable:i,
disable:c,
resize:t,
refresh:d,
opacity:u
};
}(),xt=function(){
function t(t){
var n=e("<div />").css({
position:"absolute",
opacity:R.borderOpacity
}).addClass(r(t));
return nt.append(n),n;
}
function n(t,n){
var o=e("<div />").mousedown(h(t)).css({
cursor:t+"-resize",
position:"absolute",
zIndex:n
}).addClass("ord-"+t);
return vt.support&&o.bind("touchstart.jcrop",vt.createDragger(t)),ot.append(o),o;
}
function a(e){
var t=R.handleSize,o=n(e,O++).css({
opacity:R.handleOpacity
}).addClass(r("handle"));
return t&&o.width(t).height(t),o;
}
function i(e){
return n(e,O++).addClass("jcrop-dragbar");
}
function s(e){
var t;
for(t=0;t<e.length;t++)F[e[t]]=i(e[t]);
}
function c(e){
var n,o;
for(o=0;o<e.length;o++){
switch(e[o]){
case"n":
n="hline";
break;

case"s":
n="hline bottom";
break;

case"e":
n="vline right";
break;

case"w":
n="vline";
}
j[e[o]]=t(n);
}
}
function u(e){
var t;
for(t=0;t<e.length;t++)B[e[t]]=a(e[t]);
}
function d(e,t){
R.shade||tt.css({
top:o(-t+R.offsetY||0),
left:o(-e+R.offsetX||0)
}),rt.css({
top:o(t),
left:o(e)
});
}
function l(e,t){
rt.width(Math.round(e)).height(Math.round(t));
}
function f(){
var e=yt.getFixed();
yt.setPressed([e.x,e.y]),yt.setCurrent([e.x2,e.y2]),p();
}
function p(e){
return z?b(e):void 0;
}
function b(e){
var t=yt.getFixed();
l(t.w,t.h),d(t.x,t.y),R.shade&&mt.updateRaw(t),z||v(),e?R.onSelect.call(kt,g(t)):R.onChange.call(kt,g(t),t);
}
function w(e,t,n){
(z||t)&&(R.bgFade&&!n?N.animate({
opacity:e
},{
queue:!1,
duration:R.fadeTime
}):N.css("opacity",e));
}
function v(){
rt.show(),R.shade?mt.opacity(wt):w(wt,!0),z=!0;
}
function m(){
S(),rt.hide(),R.shade?mt.opacity(1):w(1),z=!1,R.onRelease.call(kt);
}
function x(){
H&&ot.show();
}
function C(){
return H=!0,R.allowResize?(ot.show(),!0):void 0;
}
function S(){
H=!1,ot.hide();
}
function k(e){
e?(ft=!0,S()):(ft=!1,C());
}
function M(){
k(!1),f();
}
var z,O=370,j={},B={},F={},H=!1;
R.dragEdges&&e.isArray(R.createDragbars)&&s(R.createDragbars),e.isArray(R.createHandles)&&u(R.createHandles),
R.drawBorders&&e.isArray(R.createBorders)&&c(R.createBorders),e(document).bind("touchstart.jcrop-ios",function(t){
e(t.currentTarget).hasClass("jcrop-tracker")&&t.stopPropagation();
});
var I=y().mousedown(h("move")).css({
cursor:"move",
position:"absolute",
zIndex:360
});
return vt.support&&I.bind("touchstart.jcrop",vt.createDragger("move")),nt.append(I),
S(),{
updateVisible:p,
update:b,
release:m,
refresh:f,
isAwake:function(){
return z;
},
setCursor:function(e){
I.css("cursor",e);
},
enableHandles:C,
enableOnly:function(){
H=!0;
},
showHandles:x,
disableHandles:S,
animMode:k,
setBgOpacity:w,
done:M
};
}(),Ct=function(){
function t(t){
gt.css({
zIndex:450
}),t?e(document).bind("touchmove.jcrop",i).bind("touchend.jcrop",c):f&&e(document).bind("mousemove.jcrop",o).bind("mouseup.jcrop",r);
}
function n(){
gt.css({
zIndex:290
}),e(document).unbind(".jcrop");
}
function o(e){
return d&&d(s(e)),!1;
}
function r(e){
return e.preventDefault(),e.stopPropagation(),lt&&(lt=!1,l&&l(s(e)),xt.isAwake()&&R.onSelect.call(kt,g(yt.getFixed())),
n(),d=function(){},l=function(){}),!1;
}
function a(e,n,o){
return lt=!0,d=e,l=n,t(o),!1;
}
function i(e){
return d&&d(s(vt.cfilter(e))),!1;
}
function c(e){
return r(vt.cfilter(e));
}
function u(e){
gt.css("cursor",e);
}
var d=function(){},l=function(){},f=R.trackDocument;
return f||gt.mousemove(o).mouseup(r).mouseout(r),N.before(gt),{
activateHandlers:a,
setCursor:u
};
}(),St=function(){
function t(){
R.keySupport&&(a.show(),a.focus());
}
function n(){
a.hide();
}
function o(e,t,n){
R.allowMove&&(yt.moveOffset([t,n]),xt.updateVisible(!0)),e.preventDefault(),e.stopPropagation();
}
function r(e){
if(e.ctrlKey||e.metaKey)return!0;
ht=e.shiftKey?!0:!1;
var t=ht?10:1;
switch(e.keyCode){
case 37:
o(e,-t,0);
break;

case 39:
o(e,t,0);
break;

case 38:
o(e,0,-t);
break;

case 40:
o(e,0,t);
break;

case 27:
R.allowSelect&&xt.release();
break;

case 9:
return!0;
}
return!1;
}
var a=e('<input type="radio" />').css({
position:"fixed",
left:"-120px",
width:"12px"
}).addClass("jcrop-keymgr"),i=e("<div />").css({
position:"absolute",
overflow:"hidden"
}).append(a);
return R.keySupport&&(a.keydown(r).blur(n),q||!R.fixedSupport?(a.css({
position:"absolute",
left:"-20px"
}),i.append(a).insertBefore(N)):a.insertBefore(N)),{
watchKeys:t
};
}();
vt.support&&gt.bind("touchstart.jcrop",vt.newSelection),ot.hide(),X(!0);
var kt={
updateOffset:P,
changeImgScale:D,
setImage:J,
animateTo:x,
setSelect:C,
setOptions:z,
tellSelect:k,
tellScaled:M,
setClass:m,
disable:O,
enable:j,
cancel:B,
release:xt.release,
destroy:F,
focus:St.watchKeys,
getBounds:function(){
return[($-U)*ut,(_-Z)*dt];
},
getWidgetSize:function(){
return[$-U,_-Z];
},
getScaleFactor:function(){
return[ut,dt];
},
getOptions:function(){
return R;
},
ui:{
botImg:N,
topImg:tt,
trk:gt,
holder:et,
selection:rt
}
};
return K&&et.bind("selectstart",function(){
return!1;
}),W.data("Jcrop",kt),kt;
},e.fn.Jcrop=function(t,n){
var o;
return this.each(function(){
if(e(this).data("Jcrop")){
if("api"===t)return e(this).data("Jcrop");
e(this).data("Jcrop").setOptions(t);
}else"IMG"==this.tagName?e.Jcrop.Loader(this,function(){
e(this).css({
display:"block",
visibility:"hidden"
}),o=e.Jcrop(this,t),e.isFunction(n)&&n.call(o);
}):(e(this).css({
display:"block",
visibility:"hidden"
}),o=e.Jcrop(this,t),e.isFunction(n)&&n.call(o));
}),this;
},e.Jcrop.Loader=function(t,n,o){
function r(){
i.complete?(a.unbind(".jcloader"),e.isFunction(n)&&n.call(i)):window.setTimeout(r,50);
}
var a=e(t),i=a[0];
a.bind("load.jcloader",r).bind("error.jcloader",function(){
a.unbind(".jcloader"),e.isFunction(o)&&o.call(i);
}),i.complete&&e.isFunction(n)&&(a.unbind(".jcloader"),n.call(i));
},e.Jcrop.defaults={
allowSelect:!0,
allowMove:!0,
allowResize:!0,
trackDocument:!0,
offsetX:0,
offsetY:0,
baseClass:"jcrop",
addClass:null,
bgColor:"transparent",
bgOpacity:.6,
bgFade:!1,
borderOpacity:.4,
handleOpacity:.5,
handleSize:null,
aspectRatio:0,
keySupport:!0,
createHandles:["n","s","e","w","nw","ne","se","sw"],
createDragbars:["n","s","e","w"],
createBorders:["n","s","e","w"],
drawBorders:!0,
dragEdges:!0,
fixedSupport:!0,
touchSupport:null,
shade:null,
boxWidth:0,
boxHeight:0,
boundary:2,
fadeTime:400,
animationDelay:20,
swingSpeed:3,
minSelect:[0,0],
maxSize:[0,0],
minSize:[0,0],
maxBound:null,
onChange:function(){},
onSelect:function(){},
onDblClick:function(){},
onRelease:function(){}
};
}(jQuery);
});define("author/author_info.js",["biz_common/utils/string/html.js","author/author_popover.js","tpl/author/author_select.html.js","common/wx/popup.js","widget/weui-desktop/author/author_select.css"],function(t,o,i){
"use strict";
function n(t){
this._init(t);
}
function e(t){
s.$dom.find(t.target).length||s.destroy();
}
function c(t,o){
if(t&&o)for(var i=o.html(!0),n=new RegExp("(("+i+")+)","gi"),e=0,c=t.length;c>e;e++){
var h=t[e];
h.nicknameHighline=(h.nickname||"").html(!0),h.nicknameHighline=h.nicknameHighline.replace(n,'<em class="highlight">$1</em>');
}
}
t("biz_common/utils/string/html.js");
var h=t("author/author_popover.js"),r=t("tpl/author/author_select.html.js");
t("common/wx/popup.js"),t("widget/weui-desktop/author/author_select.css");
var s=null,l={
info:[],
container:"",
showLoading:!0,
highlineStr:"",
inviteAuthorLink:"",
botTips:"",
onHide:null,
onShow:null
};
n.prototype._init=function(t){
var o=this;
return o.opt=$.extend(!0,{},l,t),t.highlineStr&&o.opt.info&&o.opt.info[0]&&!o.opt.info[0].nicknameHighline&&c(o.opt.info,t.highlineStr),
o.$container=$(this.opt.container),this.$container&&0!=this.$container.length?(o.$dom=$(template.compile(r)(o.opt)),
o.$dom.appendTo(o.$container),"function"==typeof o.opt.onItemClick&&(o._itemClickEvent=function(){
var t=$(this).data("idx");
o.opt.onItemClick.call(o,t,o.opt.info);
},o.$dom.on("click",".js_item",o._itemClickEvent)),h.init({
$container:o.$dom
}),void("function"==typeof this.opt.onShow&&this.opt.onShow.call(this))):(console.error('[OPTION] "container" is empty which expect dom'),
!1);
},n.prototype.reInit=function(t){
this.destroy(),this._init(t);
},n.prototype.destroy=function(){
this._itemClickEvent&&this.$dom.off("click",this._itemClickEvent),this.$dom.remove(),
$(document).off("click",e),"function"==typeof this.opt.onHide&&this.opt.onHide.call(this);
},i.exports={
show:function(t){
return s?s.reInit(t):s=new n(t),$(document).on("click",e),s;
},
remove:function(){
s&&s.destroy();
}
};
});define("tpl/author/qrcode_popover.html.js",[],function(){
return'<div style="display:none;position: absolute;" class="popover author_card_popover">\n  <div class="popover_inner">\n    <div class="popover_content">\n      <p class="js_author_popover_desc weui-desktop-tips author_card_qrcode_nickname"></p>\n      <img class="js_author_popover_qrcode author_card_qrcode" src="" alt="">\n      <div class="js_author_popover_botTips author_card_qrcode_desc"></div>\n    </div>\n  </div>\n  <i class="popover_arrow popover_arrow_out"></i>\n  <i class="popover_arrow popover_arrow_in"></i>\n</div>\n';
});define("biz_common/utils/wxgspeedsdk.js",[],function(){
function e(e){
if(!e.pid||!e.speeds)return-1;
if(!e.speeds.length>0){
var n=e.speeds;
e.speeds=[],e.speeds.push(n);
}
for(var t=d(e),o=0;o<e.speeds.length;o++){
var r=e.speeds[o];
r.time=parseInt(r.time),r.sid>20&&r.time>=0&&i(t,r.sid,r.time);
}
}
function n(){
s(function(){
setTimeout(function(){
for(var e in p)r({
pid_uin_rid:e,
speeds:p[e]
},c);
p={};
},100);
});
}
function t(e){
s(function(){
if(!e.pid||!e.time)return-1;
var n=d(e);
i(n,9,e.time);
});
}
function o(e){
s(function(){
var n=d(e);
p[n]||(p[n]=[]);
var t=window.performance||window.msPerformance||window.webkitPerformance||{};
if(t&&t.timing){
var o=t.timing||{};
i(n,1,o.domainLookupEnd-o.domainLookupStart),i(n,2,"https:"==location.protocol&&0!=o.secureConnectionStart?o.connectEnd-o.secureConnectionStart:0),
i(n,3,o.connectEnd-o.connectStart),i(n,4,o.responseStart-o.requestStart),i(n,5,o.responseEnd-o.responseStart),
i(n,6,o.domContentLoadedEventStart-o.domLoading),i(n,7,0==o.domComplete?0:o.domComplete-o.domLoading),
i(n,8,0==o.loadEventEnd?0:o.loadEventEnd-o.loadEventStart),function(){
setTimeout(function(){
o.loadEventEnd&&(i(n,7,0==o.domComplete?0:o.domComplete-o.domLoading),i(n,8,0==o.loadEventEnd?0:o.loadEventEnd-o.loadEventStart));
},0);
}(p),p[n][9]||i(n,9,o.domContentLoadedEventStart-o.navigationStart),i(n,10,o.redirectEnd-o.redirectStart),
i(n,11,o.domainLookupStart-o.fetchStart),i(n,12,o.domLoading-o.responseStart);
}
});
}
function i(e,n,t){
p[e]=p[e]||[],p[e][n]=p[e][n]||[],0>t||(21>n?p[e][n][0]=t:p[e][n].push(t));
}
function d(e){
return e&&e.pid?e.pid+"_"+(e.uin||0)+"_"+(e.rid||0):void(console&&console.error("Must provide a pid"));
}
function r(e,n){
var t=e.pid_uin_rid.split("_");
if(3!=t.length)return void(console&&console.error("pid,uin,rid, invalid args"));
for(var o="pid="+t[0]+"&uin="+t[1]+"&rid="+t[2],i=n+o+"&speeds=",d="",r=[],s=1;s<e.speeds.length;s++)if(e.speeds[s]){
for(var a=0;a<e.speeds[s].length;a++){
var p=s+"_"+e.speeds[s][a];
i.length+d.length+p.length<1024?d=d+p+";":(d.length&&r.push(i+d.substring(0,d.length-1)),
d=p+";");
}
s==e.speeds.length-1&&r.push(i+d.substring(0,d.length-1));
}
for(var s=0;s<r.length;s++)(new Image).src=r[s];
}
function s(e){
"complete"==document.readyState?e():u.push(e);
}
function a(){
for(var e=0;e<u.length;e++)u[e]();
u=[];
}
var p={},c="https://badjs.weixinbridge.com/frontend/reportspeed?",u=[];
return window.addEventListener?window.addEventListener("load",a,!1):window.attachEvent&&window.attachEvent("onload",a),
{
saveSpeeds:e,
send:n,
setFirstViewTime:t,
setBasicTime:o
};
});define("tpl/media/audit_fail_tip.html.js",[],function(){
return'<div>\n        <!--cps审核不通过不能群发 begin-->\n        <div class="page_msg small default js_no_commission_tip">\n            <div class="inner group">\n                <span class="msg_icon_wrp">\n                    <i class="icon_msg warn"></i>\n                </span>\n                <div class="msg_content">\n                    <h4>文章内容有审核不通过商品，无法群发</h4>\n                </div>\n            </div>\n        </div>\n        <!--无法获得推广收益 end-->\n    </div>\n    \n    ';
});define("media/report.js",["biz_common/utils/monitor.js","common/wx/Cgi.js"],function(e){
"use strict";
function t(e,t){
s.pv[e]&&(t=t||1,s.pv[e].count+=t,s.debug&&console.log("addpv:"+e+" count:"+s.pv[e].count));
}
function o(e){
s.uv[e]&&(s.uv[e].count=1,s.debug&&console.log("addUv:"+e+" count:"+s.uv[e].count));
}
function n(e,n){
t(e,n),o(e);
}
function i(e){
var t=s.id[e]||s.id[0];
for(var o in s.pv){
var n=s.pv[o];
n.count>0&&c.setSum(t,n.key,n.count);
}
for(var o in s.uv){
var n=s.uv[o];
n.count>0&&c.setSum(t,n.key,n.count);
}
for(var o in s.ohterData){
var n=s.ohterData[o];
if(n.count>0){
var i=o.split("_");
c.setSum(i[0],i[1],n.count);
}
}
}
function r(){
c.send();
}
function a(e,t,o){
s.ohterData[e+"_"+t]||(s.ohterData[e+"_"+t]={
count:0
}),s.ohterData[e+"_"+t].count+=o||1,s.debug&&console.log("addNum:"+(e+"_"+t+"_"+s.ohterData[e+"_"+t].count));
}
function u(e,t,o){
var n=0,i=[],r={};
if(t&&"[object String]"==Object.prototype.toString.call(t))n=1,"img"==o&&(t=encodeURIComponent(t)),
i.push("log0="+t),r.log0=t;else if(t&&"[object Array]"==Object.prototype.toString.call(t)){
n=t.length;
for(var a=0;n>a;a++){
var u="img"==o?encodeURIComponent(t[a]):t[a];
i.push("log"+a+"="+u),r["log"+a]=u;
}
}
if("img"==o){
var c=new Image,s="//mp.weixin.qq.com/mp/jsmonitor?idkey="+e;
n>0&&(s+="&lc="+n+"&"+i.join("&")),s+="&t="+Math.random(),c.src=s;
}else{
var l={};
n>0&&(l=r),l.idkey=e,l.lc=n,m.post({
url:"//mp.weixin.qq.com/mp/jsmonitor?",
data:l,
dataType:"json"
});
}
}
var c=e("biz_common/utils/monitor.js"),m=e("common/wx/Cgi.js"),s={
debug:window.location.href.indexOf("&_debug=1")>-1?!0:!1,
id:["28146","28305","65080"],
keyConf:["autowidth","fontsize","blockquote","horizontal","removeformat","link","unlink","mpvideo","qqvideo","wxvideo","insertimage","insertvote","insertmusic","insertaudio","insertcard","bold","italic","underline","forecolor","backcolor","justifyleft","justifycenter","justifyright","rowspacingtop","rowspacingbottom","lineheight","insertorderedlist","insertunorderedlist","imagefloatnone","imagefloatleft","imagefloatright","imagefloatcenter","usecache","cover_from_article","showlink","hidelink","remoteimgsuc","remoteimgerr","cancel_autowidth","paste","formatmatch","contextmenu","menu_selectall","menu_cleardoc","menu_justifyleft","menu_justifyright","menu_justifycenter","menu_justifyjustify","menu_inserttable","menu_copy","menu_paste","menu_unlink","insertshop","menu_insertparagraphtrue","menu_insertparagraph","img_popup","link_popup","del_img","remoteimg_img","remoteimg_style","screen_shot_suc","screen_shot_fail","not_cur_img_count","save_remoting_img"],
pv:{},
uv:{},
ohterData:{}
};
return function(){
for(var e=0,t=s.keyConf.length;t>e;e++){
var o=2*e,n=2*e+1,i=s.keyConf[e];
s.pv[i]={
key:o,
count:0
},s.uv[i]={
key:n,
count:0
};
}
}(),{
logReport:u,
addPv:t,
addUv:o,
addPvUv:n,
setData:i,
addNum:a,
send:r,
reportId:s.id
};
});define("media/media_static_data.js",[],function(w,e){
"use strict";
e.article_type=[{
name:"文学",
value:"文学"
},{
name:"金融财经",
value:"金融财经"
},{
name:"房产",
value:"房产"
},{
name:"时事政治",
value:"时事政治"
},{
name:"社会新闻",
value:"社会新闻"
},{
name:"工业农业",
value:"工业农业"
},{
name:"汽车",
value:"汽车"
},{
name:"科技互联网",
value:"科技互联网"
},{
name:"教育培训",
value:"教育培训"
},{
name:"艺术文化",
value:"艺术文化"
},{
name:"美妆时尚",
value:"美妆时尚"
},{
name:"娱乐",
value:"娱乐"
},{
name:"旅游",
value:"旅游"
},{
name:"健康医疗",
value:"健康医疗"
},{
name:"体育",
value:"体育"
},{
name:"餐饮美食",
value:"餐饮美食"
},{
name:"母婴育儿",
value:"母婴育儿"
},{
name:"情感",
value:"情感"
},{
name:"历史",
value:"历史"
},{
name:"军事",
value:"军事"
},{
name:"宗教",
value:"宗教"
},{
name:"星座占卜",
value:"星座占卜"
},{
name:"幽默笑话",
value:"幽默笑话"
},{
name:"图片",
value:"图片"
},{
name:"视频",
value:"视频"
},{
name:"其他",
value:"其他"
}],e.URL_PLATFORM_MAP={
"www.guokr.com":"果壳",
"www.zhihu.com":"知乎",
"blog.sina.com.cn":"新浪博客",
"www.huxiu.com":"虎嗅网",
"www.dreamore.com":"追梦网",
"cn.engadget.com":"瘾科技",
"www.cnbeta.com":"cnBeta",
"www.199it.com":"199IT",
"www.36kr.com":"36氪",
"www.tmtpost.com":"钛媒体",
"www.iheima.com":"i黑马",
"www.cyzone.cn":"创业邦",
"www.ikanchai.com":"砍柴网",
"www.iresearch.cn":"艾瑞网",
"xianguo.com":"鲜果网",
"www.myzaker.com":"ZAKER",
"jandan.net":"煎蛋网",
"pianke.me":"片刻网",
"www.techweb.com.cn":" TechWeb",
"www.leiphone.com":"雷锋网",
"www.douban.com":"豆瓣",
"www.mop.com":"猫扑",
"www.tianya.cn":"天涯",
"jingyan.baidu.com":"百度经验",
"baike.baidu.com":"百度百科",
"wenku.baidu.com":"百度文库",
"tieba.baidu.com":"百度贴吧",
"zhidao.baidu.com":"百度知道",
"news.sina.com.cn":" 新浪新闻",
"news.qq.com":"腾讯新闻",
"news.ifeng.com":"凤凰资讯",
"news.163.com":"网易新闻",
"www.xinhuanet.com":"新华社",
"www.people.com.cn":"人民网",
"www.huanqiu.com":"环球时报",
"www.gov.cn":"中国政府网",
"www.china.com":"中华网",
"www.takungpao.com":"大公网",
"www.81.cn":"中国军网",
"www.zaobao.com":"联合早报",
"d.weibo.com":"新浪微博",
"weibo.com":"新浪微博",
"www.baidu.com":"百度",
"www.sina.com.cn":"新浪",
"www.163.com":"网易",
"news.sohu.com":"搜狐新闻",
"www.sohu.com":"搜狐",
"www.ifeng.com":"凤凰网",
"qzone.qq.com":"QQ空间"
};
});define("media/article_list.js",["common/wx/media/previewDialog.js","media/common.js","common/wx/media/shareCopyrightDialog.js","common/wx/media/keywordDialog.js","biz_common/utils/wxgspeedsdk.js","common/qq/events.js","common/wx/mpEditor/common/base_class.js","common/wx/time.js","biz_web/lib/store.js","common/wx/Tips.js","common/wx/dialog.js","common/wx/popover.js","common/wx/mpEditor/plugin/remoteimg.js","common/wx/mpEditor/plugin/filter.js","biz_common/moment.js","common/wx/Cgi.js","media/media_cgi.js","media/article_interface.js","media/draft.js","media/report.js","media/appmsg_dialog.js","media/preview.js"],function(e){
"use strict";
function t(){
if("-1"==E.navigatorType)return"";
if(!E.navigatorType){
var e=window.navigator.userAgent;
E.navigatorType=/360se/i.test(e)?"360":/metasr/i.test(e)?"搜狗":/LBBROWSER/i.test(e)?"猎豹":/QQBrowser/i.test(e)?"QQ":/Edge/i.test(e)?"Edge":/Opera/i.test(e)||/Opr\//i.test(e)?"Opera":/chrome/i.test(e)?"Chrome":/Safari/i.test(e)?"Safari":/Firefox/i.test(e)?"Firefox":/MSIE/i.test(e)||/Trident\//i.test(e)?"IE":"-1";
}
return E.navigatorType;
}
function i(e){
var t=e&&e.multi_item;
return t&&t.length?($.each(t,function(e,t){
$.each(t,function(e,i){
i.html&&(t[e]=i.html(!1));
});
}),t):null;
}
function r(e,t,i){
(t||1)>T&&$.post("/misc/jslog?1=1"+wx.data.param,{
id:e,
level:i||"error",
content:"[file=media/appmsg_edit]"
});
}
var a=e("common/wx/media/previewDialog.js"),n=e("media/common.js"),o=(e("common/wx/media/shareCopyrightDialog.js"),
e("common/wx/media/keywordDialog.js")),s=e("biz_common/utils/wxgspeedsdk.js"),c=e("common/qq/events.js")(!0),l=e("common/wx/mpEditor/common/base_class.js"),u=e("common/wx/time.js"),f=e("biz_web/lib/store.js"),m=e("common/wx/Tips.js"),p=e("common/wx/dialog.js"),_=e("common/wx/popover.js"),g=e("common/wx/mpEditor/plugin/remoteimg.js"),v=(e("common/wx/mpEditor/plugin/filter.js"),
e("biz_common/moment.js")),h=e("common/wx/Cgi.js"),w=e("media/media_cgi.js"),y=e("media/article_interface.js"),x=e("media/draft.js"),b=e("media/report.js"),j=e("media/appmsg_dialog.js"),D=e("media/preview.js"),k=["一","二","三","四","五","六","七","八","九","十"],E={
navigatorType:"",
debug:window.location.href.indexOf("&_debug=1")>0?!0:!1,
draftTipsreportList:["2397429400","3086281409","2398460220"]
},T=Math.random(),I=n.eq,q=l.inherit({
init:function(e){
var t=this;
if($.extend(!0,t,e),t.editor=t.ueditor,t.domUtils=t.editor.getDomUtils(),t._g={
delPopover:null
},t.opt=e,t.data_seq=(e.appmsg_data.data_seq||"0")+"",t.activeData=!1,t.crop_img_ing=!1,
t.$list=$(e.appmsg_selector),t.canAddArticleMoveLog=-1,t.isshare=1!=wx.cgiData.share||e.app_id?0:1,
t.gid=0,t.readOnlyType=0,t.defineEvent(),t.is_illegal)t.draft=null,t.readOnlyType="3_1",
t.list=i(e.appmsg_data);else if(t.is_rumor||t.is_malicious)t.draft=null,t.readOnlyType="3_2",
t.list=i(e.appmsg_data);else if(1==wx.cgiData.conflict){
t.readOnlyType="3_3",t.draft=null,t.list=x.getReadOnlyDraft(e.app_id),x.clearReadOnlyDraft(e.app_id);
var r="65080_99_1";
t.list||(r+=";65080_100_1"),b.logReport(r,"","img");
}else wx.cgiData.bizmediaid?(t.draft=null,t.readOnlyType="1_6",t.list=i(e.appmsg_data)):(t.ueditor.fireEvent("reportAddNum",65080,107,1),
t.draft=new x.constructor(e.app_id,t.data_seq,t.ueditor),e.app_id||t.data_seq&&"0"!=t.data_seq?(t.list=i(e.appmsg_data),
t.draft.seq=t.data_seq,t.conflict_ls_seq=t.conflict_ls_seq):t.list=!1);
t._bindEvent(),t.list?($.each(t.list,function(e,i){
t.add({
data:i,
isNew:!1
}),t.select(e,0,1);
}),wx.cgiData.bizmediaid?(t.select(wx.cgiData.idx,0,1),$("#nav").text(wx.cgiData.appmsg_data.history_time?"正在查看历史版本："+v.unix(wx.cgiData.appmsg_data.update_time).format("YYYY-MM-DD HH:mm:ss")+"由"+(wx.cgiData.appmsg_data.operator_name||"未知")+"保存":"正在查看历史版本")):t.select(0,0,1)):1!=t.isshare?(t.add({
isNew:!0
}),t.select(0,0,1)):t.createArticle({
type:9,
onCancel:function(){
t.add({
isNew:!0
}),t.select(0,0,1);
}
}),t.lastData=t.getData()||!1,t.hasConfirmed=!1,1!=t.isshare&&(t._renderReadOnly(),
t._warnDraft()),t._initDraftSyn(),t.renderCreateBtn();
},
_deserializeReadOnlyType:function(){
var e={
right:0,
index:0
};
if(this.readOnlyType){
var t=this.readOnlyType.split("_");
return e.right=1*t[0],e.index=1*t[1],e;
}
return e;
},
_warnDraft:function(){
var e=this;
if(this.draft&&this.draft.data){
if(I(this.lastData,this.draft.data))return void e.draft.clear();
e.ueditor.fireEvent("reportAddNum",65080,108,1);
var t=!0;
1*!e.app_id&&1*!e.draft.seq&&(t=!1),e.readOnlyType="0_5";
{
x.saveReadOnlyDraft(this.draft.data,e.app_id||0,e.draft.seq||0);
}
e.draft.clear();
var i=e._deserializeReadOnlyType();
e.ueditor.fireEvent("renderReadOnly",{
right:i.right,
type:i.index,
showTips:t
});
try{
var r=window.wx.data.uin;
if(E.debug||50==Math.floor(100*Math.random())||(","+E.draftTipsreportList.join(",")+",").indexOf(","+r+",")>=0){
var a=["draft_tips_",r,";time:",+new Date,";uin:",window.wx.data.uin||"",";app_id:",e.app_id||"",";service_ori:",JSON.stringify(e.list),";service:",JSON.stringify(e.lastData),";draft:",JSON.stringify(d)].join("");
b.logReport("",a,"ajax"),f.set("draft_tips",a),console.log("draft_tips,service:"),
console.log(e.lastData),console.log("draft_tips,draft:"),console.log(d);
}
}catch(n){}
}
},
_initDraftSyn:function(){
function e(){
r.surportFocusReport||(r.ueditor.fireEvent("reportAddNum",65080,95,1),r.surportFocusReport=!0),
r.surportWinFocus=!0,t();
}
function t(){
o&&(clearTimeout(o),o=null),r.draft&&(r.ueditor.ueditor.eventLog&&r.ueditor.ueditor.eventLog.push("editor active"),
r.draft.active());
}
function i(){
o||(o=setTimeout(function(){
if(o=null,r.draft&&0!=r.draft.activeId&&("function"!=typeof document.hasFocus||document.hasFocus()!==!0&&r.ueditor.getDocument().hasFocus()!==!0)){
var e=r.activeData||!1,t=r.getData()||!1,i=r.ueditor.fireEvent("checkRemoteList"),a=r.ueditor.fireEvent("checkdomAsynList");
if(r._saving===!0||r.crop_img_ing===!0||i!==!0||a!==!0);else if(!I(e,t)){
r.draft.save(t,1);
}
r.draft.silent(),r.activeData=!1,r.ueditor.ueditor.eventLog&&r.ueditor.ueditor.eventLog.push("editor silent");
}
},200));
}
var r=this,a=r.ueditor.getWindow(),o=null;
if(r.draft){
this.ueditor.fireEvent("reportAddNum",65080,94,1),r.ueditor.addListener("syn_draft",function(){
if(r.draft&&r.draft.data){
var e=r.draft.data||!1,t=r.ueditor.fireEvent("checkRemoteList"),i=r.ueditor.fireEvent("checkdomAsynList");
if(!E.debug&&r.draft&&r._saving!==!0&&r.crop_img_ing!==!0&&0!=r.draft.activeId&&t===!0&&i===!0&&!I(r.activeData||!1,e)&&"gt"!=n.dataSeqCompare(r.data_seq,r.draft.seq)){
r.ueditor.fireEvent("reportAddNum",65080,105,1),r.ueditor.fireEvent("syn_draft_start");
var a,o=0;
r.$current&&(o=r.$current.index()||0,a=r.ueditor.getSelectionRange().createDomAddress(!1,!0));
for(var s=r.$list.find(".js_appmsg_item"),d=[],c=[];s.length>0;){
r.select(0,0,1),r.ueditor.fireEvent("saveScene");
var l=r.remove(0,!0);
d.push(l.getHistory()||null),c.push(l.getScrollTop()||0),s=r.$list.find(".js_appmsg_item");
}
r.list=r.draft.data,r.data_seq=r.draft.seq,r.lastData=r.list,$.each(r.list,function(e,t){
var i=r.add({
data:t,
isNew:!1
}),a=i.data("article");
a&&(d&&d[e]&&a.setHistory(d[e]),c&&"undefined"!=typeof c[e]&&a.setScrollTop(c[e])),
i.data("article",a),r.select(e,0,1),r.ueditor.fireEvent("saveScene");
});
var u=r.$list.find(".js_appmsg_item").length;
r.select(Math.min(o,u-1)),r.renderCreateBtn(),setTimeout(function(){
r.activeData=r.getData(),a&&r.ueditor.getSelectionRange().moveToDomAddress(a,!1).select(!0);
},0);
}
}
}),this.ueditor.addListener("active_state_change",function(){
r.draft&&(0==r.draft.activeId?r._clearIntervalSave():r.draft.activeId>0&&(r._activeIntervalSave(),
r.activeData=r.getData()));
});
var s,d;
"undefined"!=typeof document.hidden?(s="hidden",d="visibilitychange"):"undefined"!=typeof document.msHidden?(s="msHidden",
d="msvisibilitychange"):"undefined"!=typeof document.webkitHidden?(s="webkitHidden",
d="webkitvisibilitychange"):"undefined"!=typeof document.mozHidden&&(s="mozHidden",
d="mozvisibilitychange"),s&&r.ueditor.fireEvent("reportAddNum",65080,102,1),$(document).on("visibilitychange",function(){
document[s]&&i();
}),$(window).on("focus",e),$(a).on("focus",e),$(window).on("blur",i),$(a).on("blur",i);
var c="before_add_article before_del_article focus mousedown keydown";
r.ueditor.addListener(c,t),r.ueditor.addListener("blur",i),"function"==typeof document.hasFocus?(r.ueditor.fireEvent("reportAddNum",65080,97,1),
r.surportHasFocus=!0,setTimeout(function(){
try{
(r.draft&&document.hasFocus()===!0||r.ueditor.isReady&&r.ueditor.getDocument().hasFocus()===!0)&&(r.draft.active(!0),
r.activeData=r.getData());
}catch(e){
r.surportHasFocus=!1;
}
},0)):(r.activeData=r.getData(),r.surportHasFocus=!1);
}
},
_renderReadOnly:function(e,t,i){
var r=this,a=r._deserializeReadOnlyType();
if(4==a.index){
var n=r.getData()||!1;
r.draft=null,x.clear(r.app_id),x.saveConflict(n,r.app_id,r.data_seq,r.conflict_ls_seq);
}
1&a.right&&r.ueditor.fireEvent("renderReadOnly",{
right:a.right,
type:a.index,
time:e||"",
name:t||"",
ua:i||""
});
},
_clearIntervalSave:function(){
this.draftSaveId&&clearInterval(this.draftSaveId);
},
_activeIntervalSave:function(){
var e=this;
e._clearIntervalSave(),this.draftSaveId=setInterval(function(){
if(e._clearIntervalSave(),e.draft){
var t=e.getData()||!1;
I(e.lastData,t)||e.draft.save(t);
}
e._activeIntervalSave();
},6e4);
},
defineEvent:function(){
var e=this;
this._g.event={
delPopoverScroll:function(){
e._g.delPopover&&e._g.delPopover.resetPosition();
}
};
},
_bindEvent:function(){
var e=this;
e.$list.on("click",".js_appmsg_item",function(){
var t=$(this).closest(".js_appmsg_item").index();
t!=e.$current.index()&&e.select(t),wx.cgiData.idx=t;
}),e.$list.on("click",".js_del",function(){
if(e._saving!==!0&&e.ueditor.fireEvent("before_del_article")!==!1){
var t=$(this).closest(".js_appmsg_item").index();
return t!=e.$current.index()&&e.select(t),e.remove(t),!1;
}
}),e.$list.on("click",".js_up",function(){
if(e._saving!==!0){
var t=$(this).closest(".js_appmsg_item"),i=t.prev();
t.insertBefore(i),e._updateTitleTips();
}
}),e.$list.on("click",".js_down",function(){
if(e._saving!==!0){
var t=$(this).closest(".js_appmsg_item"),i=t.next();
i.insertBefore(t),e._updateTitleTips();
}
}),$("body").on("click","a",function(t){
var i=$(this).attr("href"),r=$(this).attr("target");
if("_blank"!==r&&"string"==typeof i&&0!==i.indexOf("javascript:")&&0!==i.indexOf("#")){
var a=e.getData()||!1,n=e._deserializeReadOnlyType();
if(2&n.right)return t.preventDefault(),void p.show({
type:"warn",
msg:"如果离开此页面，当前页面数据将丢失！",
buttons:[{
text:"留在此页面",
click:function(){
this.remove();
}
},{
text:"离开此页面",
type:"normal",
click:function(){
window.onbeforeunload=null,4==n.index&&x.saveConflict(a,e.app_id,e.data_seq,e.conflict_ls_seq),
location.href=i,this.remove();
}
}]
});
if(I(a,e.lastData))return void(e.draft&&e.draft.clear());
t.preventDefault();
var o=1==wx.cgiData.isNew?"是否保存当前图文消息内容？":"是否保存此次修改？";
p.show({
type:"info",
msg:o,
buttons:[{
text:"保存",
click:function(){
e.save($("#js_submit"),function(){
window.onbeforeunload=null,m.remove(),$("#js_save_success").show(),location.href=i;
}),this.remove();
}
},{
text:"不保存",
type:"normal",
click:function(){
e.draft&&e.draft.clear(),window.onbeforeunload=null,location.href=i,this.remove();
}
}]
});
}
}),e.ueditor.addListener("can_add_article",function(t,i){
i.on("click",".js_create_article",function(){
if(e._saving!==!0&&e.ueditor.fireEvent("before_add_article")!==!1){
var t=e.$list.children().length;
if(t>=e.maxNum)return void m.err("你最多只可以加入%s条消息".sprintf(e.maxNum));
var i=1*$(this).attr("data-type");
if(100==i){
var r=new Image;
r.src="/cgi-bin/reportmaterialoper?oper=2&token="+wx.data.t,new j({
link:1,
onOK:function(t){
var i=e.add({
data:t,
isNew:!0
});
e.select(i.index());
var r=new Image;
r.src="/cgi-bin/reportmaterialoper?oper=3&token="+wx.data.t;
}
});
}else e.createArticle({
type:i,
onOk:function(t){
if(t&&(e.renderCreateBtn(),e.ueditor.fireEvent("after_add_article"),e.app_id)){
var i=new Image;
i.src="/cgi-bin/reportmaterialoper?oper=0&idx="+t.index()+"&msgid="+e.app_id+"&token="+wx.data.t;
}
}
});
}
});
}),e.ueditor.addListener("contentchange",function(){
$("#js_import_tips,#js_draft_tips").hide();
}),e._activeIntervalSave(),window.onbeforeunload=function(t){
var i=e.getData()||!1,r="--------------------------------------------\n如果离开此页面，当前页面数据将丢失！\n--------------------------------------------",a=e._deserializeReadOnlyType();
if(2&a.right){
4==a.index&&x.saveConflict(i,e.app_id,e.data_seq,e.conflict_ls_seq);
try{
t.returnValue=r;
}catch(t){}
return r;
}
if(e.draft){
if(I(i,e.lastData))return void e.draft.clear();
try{
t.returnValue=r;
}catch(t){}
return r;
}
},$(window).on("unload",function(){
e.draft&&e.draft.clear();
}),e.ueditor.addListener("is_article_alive",function(e,t){
return t&&t.data("article")&&t.data("article").data&&"function"==typeof t.data("article").data.getData?!0:!1;
}),e.ueditor.addListener("is_article_editing",function(e,t){
return t.hasClass("current")?!0:!1;
}),e.ueditor.addListener("draft_force_save",function(){
if(e.draft){
var t=e.getData();
e.draft.activeId>0&&(e.activeData=t),e.draft.forceSave(t,e.draft.activeId);
}
}),e.ueditor.addListener("get_current_article",function(){
return e.getCurrentArticle();
}),e.ueditor.addListener("get_current_article_all_img",function(){
var t=e.$current?e.$current.data("article"):null;
return t&&"function"==typeof t.getAllImgData?t.getAllImgData():[];
}),e.ueditor.addListener("article_item_list_scroll",function(){
e._g.event.delPopoverScroll();
}),e.ueditor.addListener("update_remote_img",function(t,i){
e.updateRemoteImg(i);
}),e.ueditor.addListener("end_crop_img",function(){
e.crop_img_ing=!1;
}),e.ueditor.addListener("start_crop_img",function(){
e.crop_img_ing=!0;
}),c.on("_preview",function(){
e._preview();
});
},
renderCreateBtn:function(){
var e=this.$list.children().length;
e>=this.maxNum?$("#add_appmsg_container").hide():$("#add_appmsg_container").show();
},
createArticle:function(e){
var t=this,i=e.type;
y.showDialog({
ueditor:t.ueditor,
can_use_txvideo:wx.cgiData.can_use_txvideo,
type:i,
onOk:function(r){
var a;
a=t.add(0==i?{
isNew:!0
}:{
data:r.data,
isNew:!0
}),t.select(a.index()),"function"==typeof e.onOk&&e.onOk(a);
},
onCancel:function(){
"function"==typeof e.onCancel&&e.onCancel();
}
});
},
_getArticleDiffData:function(){
var e=200,t=this.getData(),i=[],r=null;
if(t){
for(var a=!0,n=0,o=t.length;o>n;n++)i.push({
content:t[n].content.text().substr(0,e),
title:t[n].title
});
for(var n=0,o=i.length;o>n;n++){
var s=i[n];
if(!s.title||!s.content||s.content.length!=e){
a=!1;
break;
}
for(var d=n+1;o>d;d++){
var c=i[d];
if(!c.title||!c.content||c.content.length!=e){
a=!1;
break;
}
if(s.title==c.title||s.content==c.content){
a=!1;
break;
}
}
if(a===!1)break;
}
a===!0&&i.length>0&&(r=i);
}
return r;
},
_getCurrentIndex:function(){
return this.$current&&this.$current.data("article")?this.$current.data("article").getIndex():0;
},
_updateTitleTips:function(){
var e=0;
this.$list.children().each(function(){
var t=$(this);
t.data("msgindex",e),t.children().attr("title","第%s篇图文".sprintf(k[e]));
var i=t.data("article");
i&&i.updateIndex(e),e++;
});
},
_checkHmltDeep:function(e){
function t(e,a){
var n=e.children(),o=n.length;
if(0==o)return void(a>=i&&r.push({
sid:21,
time:a-1
}));
for(var s=0,d=o;d>s;s++)t(n.eq(s),a+1);
}
try{
var i=31,r=[],a=$.map(e,function(e,t){
return 0==t.indexOf("content")?e:void 0;
});
$.each(a,function(e,i){
t($("<div></div>").html(i),1);
}),r.length>0&&(s.saveSpeeds({
uin:window.wx.uin,
pid:34,
speeds:r
}),s.send());
}catch(n){}
},
_checkExternalLink:function(e){
var t=[],i=$.map(e,function(e,t){
return 0==t.indexOf("content")?e:void 0;
});
if($.each(i,function(e,i){
for(var r=/http\:\/\/([\w-]+\.)+[\w-]+(\:\d*)?(\/[\w\- \.\/\?%&=]*)?/gi,a=null,n="";null!=(a=r.exec(i));)n=i.substring(a.index,r.lastIndex),
g.isLocalDomain(n)||t.push(i.substring(Math.max(0,a.index-20),r.lastIndex));
}),t.length){
var r=(t.length,{
lc:t.length
});
$.each(t,function(e,t){
r["log"+e]=encodeURIComponent(t);
}),$.post("//mp.weixin.qq.com/mp/jsmonitor?idkey=28308_7_1",r);
}
},
getCurrentArticle:function(){
return this.$current||null;
},
getCurrentArticleObject:function(){
return this.$current?this.$current.data("article"):null;
},
add:function(e){
var t=this,i=t.$list.children().length;
i==t.maxNum-1&&t.$list.parent().siblings("a").hide();
var r=new y.create({
isNew:e.isNew===!1?!1:!0,
app_id:t.app_id||"",
$infoContainer:$(t.opt.editor_selector),
$articleList:t.$list,
data:e.data,
index:i,
ueditor:t.ueditor,
$freeUEditor:t.freeUEditor,
$navigator:$(".js_main_title"),
cgiData:window.wx.cgiData,
formItemsOpt:t.opt.formItemsOpt
});
return $(".js_scrollbar").scrollbar.updateScrollbars(!0),t._updateTitleTips(),r.getListItem();
},
removeDelPopover:function(){
this._g.delPopover&&(this.$list.find(".appmsg_edit_mask").css("display",""),this._g.delPopover.remove(),
this._g.delPopover=null,this.unbindSpecifyEvent({
dom:window,
type:"domUtils",
eventName:"scroll",
fun:this._g.event.delPopoverScroll
}));
},
remove:function(e,t){
var i=this,r=i.$list.children().eq(e);
i.$current&&e!=i.$current.index()&&i.select(e);
var a=r.data("article").flush();
return t===!0?i.drop(e):(this.removeDelPopover(),r.find(".appmsg_edit_mask").css("display","block"),
this._g.delPopover=new _({
dom:r.find(".js_del"),
content:"确定删除此篇图文？",
hideIfBlur:!0,
buttons:[{
text:"确定",
click:function(){
if(i.drop(e),i.renderCreateBtn(),i.app_id){
var t=new Image;
t.src="/cgi-bin/reportmaterialoper?oper=1&idx="+e+"&msgid="+i.app_id+"&token="+wx.data.t;
}
i.removeDelPopover();
},
type:"primary"
},{
text:"取消",
click:function(){
i.removeDelPopover();
}
}]
}),this.bindEventInterface({
dom:window,
type:"domUtils",
eventName:"scroll",
fun:i._g.event.delPopoverScroll
})),a;
},
drop:function(e){
var t=this;
0!=e&&t.select(Math.max(0,e-1));
var i=t.$list.children().eq(e),r=i.data("article");
r&&"function"==typeof r.destroy&&r.destroy(),t.$list.children().eq(e).remove(),t.$list.parent().siblings("a").show(),
$(".js_scrollbar").scrollbar.updateScrollbars(!0),t._updateTitleTips();
},
select:function(e,t,i){
var r=this,a="number"!=typeof e?e:r.$list.find(".js_appmsg_item").eq(e);
a.addClass("current");
var n=null;
if(a.siblings().removeClass("current"),r.$current){
if(e==r.$current.index())return;
n=r.$current.data("article"),n&&(n.flush(),n.destroy()),r._checkRepeat();
}
n=a.data("article"),n&&(!t&&n.hideErrorTips(),r.$current=a,n.render());
var o=$("html"),s=n.getScrollTop(),d=o.scrollTop(),c=Math.max(o.height()-$(window).height(),0);
!i&&s!=d&&c>=s&&setTimeout(function(){
o.animate({
scrollTop:s
}),$("div.appmsg_edit_box").css({
overflow:"hidden"
}),setTimeout(function(){
$("div.appmsg_edit_box").css({
overflow:""
});
},0);
},100),$("#js_appmsg_upload_cover").siblings("ul").hide(),r.removeDelPopover(),r.ueditor.fireEvent("afterArticleSelect",e);
},
updateRemoteImg:function(e){
var t=e.article;
if(this.ueditor.fireEvent("is_article_alive",t)===!0){
var i,r=t.data("article").data,a=t.hasClass("current")?!0:!1,o=$("<div>"),s=(e.type,
e.uid);
if(a)i=$(this.ueditor.getDocument()).find("[data-remoteid="+s+"]");else{
if(this.ueditor.funcPvUvReport("not_cur_img_count"),!r.get("content"))return;
i=o.html(r.get("content")).find("[data-remoteid="+s+"]");
}
if(i){
n.changeRemoteImgUrl({
imgDom:i,
remoteType:e.remoteType,
format:e.format,
img_url:e.img_url,
editor:this.ueditor
});
var d=$("body").find("div.dialog_wrp").find(".js_imgItemSrc[data-remoteid="+s+"]");
d&&d.length>0&&(n.changeRemoteImgUrl({
imgDom:d,
remoteType:e.remoteType,
img_url:e.img_url,
errDefaultStyle:!0,
editor:this.ueditor
}),d.parents(".js_imgItem").removeClass("loading_item"),d.siblings(".js_title_img_mask").remove()),
a||(r.set("content",o.html()),t.data("article").data.setData(r.getData()));
}
}
},
_checkRepeat:function(){
try{
var e=function(e,t,i){
var r={};
return e=$.extend(e,t),$.each(i,function(t,i){
r[i]=e[i];
}),r;
},t=this,i=t.$current.index(),r=t.$current.data("article").data,a=["author","digest","file_id","source_url","title","content"],n=e({},r.getData(),a);
if(""==r.get("content")||""==r.get("title"))return;
var o=!0;
if($.each(a,function(e,t){
n[t]&&(o=!1);
}),o)return;
t.$list.find(".js_appmsg_item").each(function(r){
if(r!=i){
var o=e({},$(this).data("article").data.getData(),a);
I(n,o,null,null,!0)&&((new Image).src="//mp.weixin.qq.com/mp/jsmonitor?idkey=%s_%s_1&lc=1&log0=[repeat][appid:%s,idx:%s,bizuin:%s]".sprintf(28308,1,t.app_id||0,r,wx.data.uin));
}
});
}catch(s){}
},
getData:function(e,t){
var i=this,r=[],a=null,n=i.$current;
n&&(a=n.data("article"),a&&a.flush());
var o=!0;
return i.$list.find(".js_appmsg_item").each(function(a){
var n=$(this).data("article");
if(n){
var s=n.getData(e,t);
return null==s?(i.select(a,!0,!0),o=!1,!1):void r.push(s);
}
}),0==r.length?!1:o&&r;
},
getPostData:function(e){
var i=this,r=i.getData(!0,e);
if(!r)return null;
var a={
AppMsgId:i.app_id,
count:r.length,
data_seq:(i.data_seq||"0")+"",
operate_from:t()
};
return $.each(r,function(e,t){
var i={};
$.each(t,function(t,r){
"writerid"==t&&""==r&&(r=0),i[t+e]=r;
}),$.extend(a,i);
}),a;
},
_checkSeqError:function(e,t){
try{
if(!t||0==t.length)return;
for(var i=[],r=0;r<e.count;r++){
var a=e["content"+r];
i.push(a?a.text():"");
}
for(var r=0,n=t.length;n>r;r++){
var a=t[r];
if(a&&"undefined"!=typeof a.content){
var o=a.content.text();
if(o&&i[r]&&o!=i[r])for(var s=0,d=i.length;d>s;s++)if(s!=r&&i[s]&&o==i[s]){
var c=new Image,l=["appmsgid:",e.AppMsgId||"",";operate_from:",e.operate_from,";web_index:",s,";cgi_index:",r,";title:",e["title"+s]||""];
c.src=["https://badjs.weixinbridge.com/badjs?level=4&id=114&msg=",encodeURIComponent(l.join("")),"&uin=",window.wx.data.uin||"","&from=1&t=",Math.random()].join("");
}
}
}
}catch(u){}
},
update:function(e){
if(e&&0!=e.length){
var t;
this.$current&&(t=this.$current.index()||0);
for(var i=["content","title","author","digest"],r=0,a=e.length;a>r;r++){
var n=e[r];
if(n){
for(var o=!1,s={},d=0;d<i.length;d++)"undefined"!=typeof n[i[d]]&&(o=!0,s[i[d]]=n[i[d]]);
if(o!==!1)if(this.$current&&this.$current.index()==r){
var c=this.$current.data("article");
c&&c.data&&"function"==typeof c.data.get&&1*c.data.get("is_share_copyright")!=1&&c.modifyCurrentEditData(s);
}else{
var c=this.$list.find(".js_appmsg_item").eq(r).data("article");
if(c&&c.data&&"function"==typeof c.data.set&&1*c.data.get("is_share_copyright")!=1){
for(var l in s)c.data.set(l,s[l]);
this.select(r,0,0);
}
}
}
}
this.$current&&this.$current.index()!=t&&this.select(t,0,0);
}
},
save:function(e,t,i,a,s,d){
var c=this._deserializeReadOnlyType();
if(!(1&c.right||this._saving===!0)){
var l=0,f=this;
try{
l=3;
{
f.getData();
}
l=4;
var _=f.getPostData(i||d);
if(l=5,!_)return;
f.hasConfirmed&&(f.hasConfirmed=!1,_.confirm=1),"undefined"!=typeof f.confirm_treatment&&(_.confirm_treatment=f.confirm_treatment),
"undefined"!=typeof f.cover_word&&(_.cover_word=f.cover_word),"undefined"!=typeof f.hint_word&&(_.hint_word=f.hint_word),
e.btn(!1),f._saving=!0,r(30,.1,"error"),n.waitAsynAction({
editor:f.ueditor,
callback:function(){
var n=f.getPostData(i||d);
return n?(1===_.confirm&&(n.confirm=1),_.confirm_treatment&&(n.confirm_treatment=_.confirm_treatment),
_.cover_word&&(n.cover_word=_.cover_word),_.hint_word&&(n.hint_word=_.hint_word),
n=f.filtercharCode(n),r(31,.1,"error"),f.ueditor.fireEvent("reportAddNum",65080,91,1),
void w.appmsg.save(!0,10,n,function(i){
f.confirm_treatment=void 0,f.cover_word=void 0,f._saving=!1,e.btn(!0),f.app_id=i.appMsgId,
f.data_seq=i.data_seq+"",f.update(i.filter_content_html),f.lastData=f.getData()||!1,
f.draft&&(f.draft.clear(),f.draft._updateAppid(f.app_id,f.data_seq)),t(i,n),f._checkExternalLink(n),
f._checkHmltDeep(n),f._checkSeqError(n,i.filter_content_html);
},function(t,r,s,d){
switch(f._saving=!1,e.btn(!0),0!=t&&f.select(1*t),+r){
case 64515:
f.ueditor.fireEvent("reportAddNum",65080,92,1),f.readOnlyType="3_4",f.conflict_ls_seq=f.data_seq+"",
f.data_seq=d.data_seq+"",f._renderReadOnly(u.timeFormat(d.update_time),d.operator_name,d.operate_from);
break;

case 200041:
m.err(d.myErrMsg),f.draft=null,f.readOnlyType="3_1",f._renderReadOnly();
break;

case 1530503:
$(".frm_msg.js_warn").text(d.myErrMsg).show(),$("input[name='source_url']").focus();
break;

case 1530504:
$(".page_msg.js_warn").show().find(".profile_link_msg_global").text(d.myErrMsg),
$(window).scrollTop(0);
break;

case 1530510:
$(".frm_msg.js_warn").text(d.myErrMsg).show(),$("input[name='source_url']").focus();
break;

case 1530511:
$(".page_msg.js_warn").show().find(".profile_link_msg_global").text(d.myErrMsg),
$(window).scrollTop(0);
break;

case 153007:
case 153008:
case 153009:
case 200042:
case 200043:
case 64601:
case 64602:
case 64603:
case 64604:
case 64605:
case 153010:
p.show({
width:750,
type:"warn",
msg:d.myErrMsg,
buttons:[{
text:"确定",
click:function(){
this.remove();
}
}]
});
break;

case 10811:
case 10812:
case 10813:
case 10814:
f.hint_word=d.hint_word.join("|"),new o({
hint_word:d.hint_word,
remind_wording:d.remind_wording,
onHide:function(){
f.confirm_treatment=void 0,f.cover_word=void 0;
},
onChange:function(e,t){
e.find(".js_btn_p").eq(0).enable(),f.cover_word=0==t.checkbox("value")?0:1;
},
buttons:[{
text:"继续保存",
type:"primary",
click:function(){
this.remove(),f.confirm_treatment=d.confirm_treatment,e.trigger("click");
}
},{
text:"取消",
click:function(){
f.confirm_treatment=void 0,f.cover_word=void 0,this.remove();
}
}]
});
break;

case 13002:
$(".js_ad_tips_wording").text(d.myErrMsg),$(".js_ad_error_tips").parent().show(),
$(".js_ad_error_tips").show(),a&&a.fireEvent("scrollIntoView",$(".js_ad_preview"),$(window).height()-$(".js_ad_preview").height()-72-30);
break;

case 13003:
var c="/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&lang=zh_CN&token="+wx.data.t+"&type=10&appmsgid="+d.ad_article_msgid+"&isMul=1";
$(".js_ad_tips_wording").html('已有文章<a href="%s" target="_blank">《%s》</a>过该广告卡片，一个广告卡片仅可插入一篇文章'.sprintf(c,d.ad_article_title)),
$(".js_ad_error_tips").parent().show(),$(".js_ad_error_tips").show(),a&&a.fireEvent("scrollIntoView",$(".js_ad_preview"),$(window).height()-$(".js_ad_preview").height()-72-30);
break;

case 13004:
$(".js_ad_tips_wording").text(d.myErrMsg),$(".js_ad_error_tips").parent().show(),
$(".js_ad_error_tips").show(),a&&a.fireEvent("scrollIntoView",$(".js_ad_preview"),$(window).height()-$(".js_ad_preview").height()-72-30);
break;

case 15801:
case 15802:
case 15803:
case 15804:
case 15805:
case 15806:
p.show({
type:"info",
msg:s||"你所编辑的图文消息可能含有违反微信公众平台平台协议、相关法律法规和政策的内容|你可以继续保存或发布该图文消息，若保存或发布后，经核实涉嫌含有上述相关内容的，将可能被作删除、屏蔽等处理。<br/><a href='https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN&token=2056316619' target='_blank'>对应规则</a>",
buttons:[{
text:i?"继续预览":"继续保存",
click:function(){
this.remove(),f.hasConfirmed=!0,f.confirm_treatment=d.confirm_treatment,e.trigger("click"),
i||f._remindReport(1,d.remind_type,JSON.stringify(d.hint_word));
}
},{
text:"取消",
type:"normal",
click:function(){
f._remindReport(2,d.remind_type,JSON.stringify(d.hint_word)),f.confirm_treatment=void 0,
f.cover_word=void 0,this.remove();
}
}],
close:function(){
return f._remindReport(0,d.remind_type,JSON.stringify(d.hint_word)),f.confirm_treatment=void 0,
f.cover_word=void 0,!0;
}
});
break;

case 153012:
setTimeout(function(){
$("html, body").animate({
scrollTop:$(".origined").offset().top-60
});
},100),$("#original_type_msg").show();
break;

case 64518:
m.err("保存失败，不允许包含多个投票");
break;

case 64519:
m.err("保存失败，包含了不属于该公众号的投票");
break;

case 64520:
m.err("保存失败，包含了未发布的投票");
break;

case 353001:
for(var l=[],_=0;20>_;_++){
var g="content"+_;
if(!n[g])break;
l.push({
content:n[g]
});
}
f.update(l),p.show({
type:"warn",
msg:"文章内商品存在违规，请删除后群发",
buttons:[{
text:"返回编辑",
type:"primary",
click:function(){
this.remove();
}
}],
onHide:function(){
this.remove();
}
});
break;

default:
var t=d&&d.myErrMsg?d.myErrMsg:"保存失败";
m.err(t);
}
})):(f._saving=!1,void e.btn(!0));
}
}),l=6;
}catch(g){
f._saving=!1,e.btn(!0),m.err("保存失败，请稍后再试"),l&&((new Image).src="//mp.weixin.qq.com/mp/jsmonitor?idkey=%s_%s_1&lc=1&log0=editor_save_error;errmsg:%s,appid:%s,bizuin:%s".sprintf(28308,l,g.message,f.app_id||0,wx.data.uin)),
window.BJ_REPORT&&"function"==typeof window.BJ_REPORT.report&&g&&g.stack&&(g.stack="editor_save_error|"+g.stack,
window.BJ_REPORT.report(g)),g.stack&&console&&console.error&&console.error("[BJ-REPORT]",g.stack);
}
}
},
_remindReport:function(e,t,i){
var r=this;
h.post({
url:"/cgi-bin/appmsg?action=remind_report",
data:{
appmsgid:r.app_id,
operate_type:e,
remind_type:t,
hint_words:i
}
});
},
filtercharCode:function(e){
var t=!1;
for(var i in e)e.hasOwnProperty(i)&&"function"==typeof e[i].replace&&(e[i]=e[i].replace(/[\ud800-\uDFFF]/g,function(e,i,r){
return/[\ud800-\udbff]/.test(e)&&/[\uDC00-\uDFFF]/.test(r.charAt(i+1)||"")?e:/[\ud800-\udbff]/.test(r.charAt(i-1)||"")&&/[\uDC00-\uDFFF]/.test(e)?e:(t=!0,
"");
}));
return t&&((new Image).src="//mp.weixin.qq.com/mp/jsmonitor?idkey=28308_11_1"),e;
},
preview:function(e,t){
var i=this;
i.save($("#js_preview"),function(r){
for(var a=i.getPostData(),n=i.getData(),o=0;8>o;o++)a["content"+o]&&(a["content"+o]=e.handlerContent(a["content"+o],!0),
a["content"+o]=a["content"+o].replace("/cgi-bin/readtemplate?t=tmpl/cpc_tmpl","/cgi-bin/readtemplate?t=tmpl/cpc_tmpl&preview=1")),
n&&n[o]&&(a["ad_info"+o]=n[o].ad_info);
D.show(a,i.$current.index(),n,e),"function"==typeof t&&t(r);
},!0,e,i.$current.index());
},
_preview:function(){
var e=this,t=e.getPostData();
new a({
AppMsgId:t.AppMsgId,
type:2,
hasConfirmed:e.hasConfirmed,
selectFun:e.select,
uin:wx.data.uin,
token:wx.data.t,
nickname:wx.data.nick_name
});
}
});
return q;
});define("tpl/media/appmsg_edit/article.html.js",[],function(){
return'<div id="read_only_container" class="page_msg mini" style="display:none;">\n    <div class="inner">\n        <span class="msg_icon_wrp"><i class="icon_msg_mini warn"></i></span>\n        <div class="msg_content">\n            <p></p>\n            <span class="js_close msg_closed" style="display:none;">关闭</span>\n        </div>\n    </div>\n</div>\n<div class="appmsg_editor">\n    <div class="appmsg_editor_inner">\n        <!-- BEGIN UEDITOR -->\n        <div id="js_ueditor" class="appmsg_edit_item content_edit">\n            <label for="" class="frm_label" style="display:none;">\n                <strong class="title">正文</strong>\n\n                <p class="tips l">\n                    <em id="js_auto_tips"></em>\n                    <a id="js_cancle" style="display:none;" href="javascript:void(0);"\n                       onclick="return false;">取消</a>\n                </p>\n            </label>\n<!--        <div class="frm_msg fail js_catch_tips" style="display:none;">有5张图片粘贴失败</div>\n            <div class="frm_msg fail js_content_error" style="display:none;">正文不能为空且长度不能超过20000字</div> -->\n            <div id="js_editor" class="edui_editor_wrp"></div>\n        </div>\n        <!-- END UEDITOR -->\n\n        <!-- BEGIN 转载来源 -->\n        <div id="js_reprint_source" class="reprint_content_wrap">\n            <div class="reprint_content_wrap2">\n                <span class="reprint_content_tips">文章转载自公众号</span>\n                <div class="reprint_content_author">\n                    <img class="reprint_content_author-image js_reprint_biz_avatar" src="">\n                    <span class="js_reprint_biz_nickname reprint_content_author-nickname"></span>\n                </div>\n            </div>\n        </div>\n        <!-- END 转载来源 -->\n\n        <!-- BEGIN 原创文章预览 -->\n        <div id="reprint_article_main" style="display:none;" class="appmsg_edit_origin_preview">\n        </div>\n        <!-- END 原创文章预览 -->\n\n        <!-- BEGIN 广告预览 -->\n        <div class="appmsg_edit_ad_preview js_readonly" style="display: none;">\n            <div class="page_msg mini js_ad_error_tips" style="display: none;">\n                <div class="inner">\n                    <span class="msg_icon_wrp"><i class="icon_msg_mini warn"></i></span>\n                    <div class="msg_content">\n                        <p class="js_ad_tips_wording">该广告为头条广告位，不能插入在非头条文章中。</p>\n                    </div>\n                </div>\n                <span class="msg_closed js_msg_close">关闭</span>\n            </div>\n            <div class="ad_preview_box js_ad_preview"></div>\n            <div class="mpda_preview_ft_tips">\n                <span class="radius_tag js_tag">广告推荐</span><span class="tips_global">文章编辑后需发送给广告主预览，操作请进入<a class="js_jumpToOrder" target="_blank" href="javascript:void(0);">广告订单页面</a></span>\n            </div>\n        </div>\n        <!-- END 广告预览-->\n\n        <div class="appmsg_edit_function_area js_readonly">\n            <!-- BEGIN 原文链接 -->\n            <div id="js_article_url_area" class="js_url_area appmsg_edit_item origin_url_area">\n                <label for="" class="frm_label">\n                    <label class="frm_checkbox_label" for="js_url_checkbox">\n                        <input type="checkbox" class="frm_checkbox js_url_checkbox js_field" name="source_url_checked">\n                        <i class="icon_checkbox"></i>\n                        <span class="lbl_content">\n                            原文链接                        </span>\n                    </label>\n                </label>\n                <span class="frm_input_box" style="display:none;"><input type="text" class="js_url frm_input js_field" name="source_url"></span>\n                <span class="js_url_ban_wording" style="position:relative; top:1em;"></span>\n                <div class="profile_link_msg_global source_url frm_msg fail js_warn" style="display:none;">请勿添加其他公众号的主页链接</div>\n                <div class="frm_msg fail js_url_error" style="display:none;">链接不合法</div>\n            </div>\n            <!-- END 原文链接 -->\n            <!--BEGIN 留言 -->\n            {if can_use_comment}\n            <div id="js_comment_area" class="appmsg_edit_item ">\n                <label class="frm_checkbox_label comment_checkbox" for="">\n                    <input type="checkbox" class="frm_checkbox js_comment js_field" checked name="need_open_comment">\n                    <i class="icon_checkbox"></i>\n                    <span class="lbl_content">留言</span>\n                </label>\n                <div class="comment_radio_wrp" id="js_comment_setting_wrp" style="display:none;">\n                    <input data-label="所有人可留言" class="frm_radio js_comment_setting" type="radio" value="0">\n                    <input data-label="仅关注后可留言" class="frm_radio js_comment_setting" type="radio" value="1">\n                </div>\n            </div>\n            {/if}\n            <!-- END 留言-->\n            {if has_invited_original}\n            <!--如果可以使用原创功能-->\n            <div id="js_original" class="appmsg_edit_item original_area">\n                <!--BEGIN 未开通原创-->\n                {if can_use_copyright}\n                <div class="unorigin js_original_type">\n                    <div class="cont">\n                        <h4 class="subtitle">原创：未声明</h4>\n                        <!--\n                        <p class="tips_global original_title_tips">原创声明是公众平台关于支持原创者的功能</p>\n                        -->\n                    </div>\n                    <div class="opt">\n                        <a href="javascript:;" onclick="return false;" class="btn btn_default js_original_apply">声明原创</a>\n                    </div>\n                </div>\n                {else}\n                <div class="unorigin js_original_type">\n                    <div class="cont">\n                        {if orginal_apply_stat == 0}\n                        <h4 class="subtitle">原创声明：未开通</h4>\n                        {else if orginal_apply_stat == 1}\n                        <h4 class="subtitle">原创声明：审核中</h4>\n                        {else if orginal_apply_stat == 2}\n                        <h4 class="subtitle">原创声明：申请失败</h4>\n                        {else if orginal_apply_stat == 3}\n                        {/if}\n                    </div>\n                    {if orginal_apply_stat == 0}\n                    <div class="opt">\n                        <div class="description">\n                            <p class="desc">原创声明是公众平台为维护原创作者权益推出的功能。</p>\n                            <p class="desc">1. 开通后，你可以选择文章是否允许被转载；</p>\n                            <p class="desc">2. 声明原创的文章被转载时，系统会自动注明文章出处。</p>\n                        </div>\n                        <a href="javascript:;" onclick="return false;" class="btn btn_default" id="js_original_func_open">开通</a>\n                    </div>\n                    {/if}\n                </div>\n                {/if}\n                <!--END 未开通原创-->\n                <!--BEGIN 开通原创-->\n                <div class="origined js_original_type" style="display:none;">\n                    <label class="frm_label" id="js_original_open">\n                        <span class="js_original_title mini_tips icon_before l">\n                            原创：已声明                        </span>\n                        <a href="javascript:;" onclick="return false;" class="js_original_btn js_original_cancel r">撤销声明</a>\n                        <a href="javascript:;" onclick="return false;" class="js_original_btn js_original_apply r">编辑声明</a>\n                    </label>\n\n                    <div class="normal_flow js_original_content" style="display:none">\n                        <!--添加.js_original_content元素 .open类名，小箭头向上，不添加则向下-->\n                        <div id="js_original_detail" class="preview_hd">\n                            原创详情<i class="icon_arrow"></i>\n                        </div>\n                        <ul class="simple_preview_list tips_global">\n                            <!--\n                            <li class="simple_preview_item">\n                                <label class="simple_preview_label" for="">原文链接</label>\n\n                                <div class="simple_preview_value js_url"></div>\n                            </li>\n                            <li class="simple_preview_item">\n                                <label class="simple_preview_label" for="">首发平台</label>\n\n                                <div class="simple_preview_value js_platform"></div>\n                            </li>\n                            -->\n                            <li class="simple_preview_item">\n                                <label class="simple_preview_label" for="">作者</label>\n\n                                <div class="simple_preview_value js_author"></div>\n                            </li>\n                            <li class="simple_preview_item">\n                                <label class="simple_preview_label" for="">文章类别</label>\n\n                                <div class="simple_preview_value js_classify"></div>\n                            </li>\n\n                            <!-- 一般图文用到的 -->\n                            {if can_use_original_reprint}\n                                <li class="simple_preview_item js_original_item js_article">\n                                    <label class="simple_preview_label" for="">开放转载</label>\n\n                                    <div class="simple_preview_value js_can_reprint"></div>\n                                </li>\n                                <li class="simple_preview_item" style="display: none;">\n                                    <label class="simple_preview_label" for="">允许修改</label>\n\n                                    <div class="simple_preview_value js_can_modify"></div>\n                                </li>\n                            {/if}\n\n                            <li class="simple_preview_item js_original_item js_article">\n                                <label class="simple_preview_label mini_tips icon_after" for="">白名单<i class="icon_msg_mini ask js_whitelist_tips"></i></label>\n                                <div class="simple_preview_value">\n                                    <div class="original_user_list js_whitelist"></div>\n                                </div>\n                            </li>\n\n                            <!-- 转载类型用到的 -->\n                            <!-- <li class="simple_preview_item js_original_item js_reprint">\n                                <label class="simple_preview_label" for="">开放转载</label>\n\n                                <div class="simple_preview_value">已开启</div>\n                            </li> -->\n                        </ul>\n\n                        <!--如果可以使用赞赏功能-->\n                        <div class="js_reward_container reward_edit_item">\n                            <!-- 一般图文用到的 -->\n                            {if can_use_reward}\n                              <div class="js_original_item js_article">\n                                <div class="preview_hd">赞赏设置</div>\n                                <ul class="js_reward_preview_list simple_preview_list tips_global">\n                                  <li class="simple_preview_item">\n                                    <label class="simple_preview_label" for="">赞赏归属</label>\n                                    <div class="simple_preview_value js_author_username"></div>\n                                  </li>\n                                  <li class="simple_preview_item">\n                                    <label class="simple_preview_label" for="">赞赏金额</label>\n                                    <div class="simple_preview_value">由赞赏账户设置</div>\n                                  </li>\n                                </ul>\n\n                                <ul class="js_no_reward_list simple_preview_list tips_global">\n                                  <li class="simple_preview_item">\n                                    <label class="simple_preview_label" for="">赞赏未开启</label>\n                                  </li>\n                                </ul>\n                              </div>\n                            {/if}\n\n                            <!-- 转载图文用到的 -->\n                            <!-- <div class="js_original_item js_reprint">\n                              <div class="preview_hd">赞赏设置</div>\n                              <ul class="simple_preview_list tips_global">\n                                <li class="simple_preview_item">\n                                  <label class="simple_preview_label" for="">赞赏归属</label>\n                                  <div class="simple_preview_value js_author_username"></div>\n                                </li>\n                                <li class="simple_preview_item">\n                                  <label class="simple_preview_label" for="">赞赏金额</label>\n                                  <div class="simple_preview_value">由作者设置</div>\n                                </li>\n                              </ul>\n                            </div> -->\n\n                            <div class="frm_msg fail js_reward_error reward_edit_msg" style="display:none;"></div>\n                        </div>\n\n\n\n                        {if can_use_payforread}\n                        <!--如果可以使用付费阅读功能-->\n                        <div class="payread">\n                            <label class="frm_checkbox_label" for="js_pay">\n                                <input name="payforread_enabled" type="checkbox" id="js_pay" class="frm_checkbox js_field" value="1">\n                                <i class="icon_checkbox"></i>\n                                <span class="lbl_content">\n                                    付费阅读                                    <span class="mini_tips weak_text js_pay_tips">（只有“禁止转载”的原创文章才可以设置付费阅读）</span>\n                                </span>\n                                <p class="pay_seting js_pay_setting" style=\'display:none\'>\n                                    <label class="frm_fee">金额：<span class="js_fee"></span>元</label>\n                                    <a onclick="return false;" href="javascript:;" class="js_pay_edit">修改</a>\n                                </p>\n                            </label>\n                        </div>\n                        {/if}\n                        <!--<input type="hidden" class="js_original_publish">-->\n                        <input type="hidden" class="js_reprint_frm">\n                    </div>\n\n                    <p class="frm_msg fail js_error_msg" id="original_type_msg" style=\'display:none\'>请设置转载类型</p>\n                </div>\n                <!--END 开通原创-->\n            </div>\n            {/if}\n        </div>\n\n        <div class="js_plublish_style appmsg_edit_highlight_area js_readonly">\n\n            <div class="appmsg_edit_title">发布样式编辑</div>\n            <!-- EBGIN 封面 -->\n            <div id="js_cover_area" class="appmsg_edit_item gap_left">\n                <label for="" class="frm_label">\n                    <strong class="title">封面</strong>\n\n                    <p class="js_cover_tip tips gap_left"></p>\n                </label>\n                <div class="upload_wrap">\n                    <div class="js_cover_btn_area">\n                        <!--\n                        <div class="upload_box">\n                            <div class="upload_area">\n                                <a id="js_appmsg_upload_cover" href="javascript:void(0);" onclick="return false;"\n                                   class="btn btn_upload">\n                                    本地上传                                </a>\n                            </div>\n                        </div>-->\n                        <a id="js_selectCoverFromContent" href="javascript:void(0);" onclick="return false;"\n                           class="btn btn_upload">从正文选择</a>\n                        &nbsp;&nbsp;\n                        <a id="js_imagedialog" href="javascript:void(0);" onclick="return false;"\n                                       class="btn btn_upload">从图片库选择</a>\n                    </div>\n\n\n                    <div class="cover_preview_wrp js_cover">\n                        <!-- 20160415 -->\n                        <!-- 这里的js_cover先去掉了，要改dom，不能用img，改用span加背景图片方式 -->\n                        <!-- cover_preview默认隐藏，有数据了才显示 -->\n                        <span class="cover_preview js_cover_preview">\n                            <div id="js_cover_mask" class="card_mask_global js_tip_mask hover_mask">\n                                <!--\n                                <p class="js_tip_mask_msg cover_error_msg">源图片已被删除<br>请<a href="javascript:void(0);">重新设置</a>封面</p>\n                                -->\n                                <!--修改封面 -->\n                                <a class="js_modifyCover icon20_common edit_media_white" title="修改封面" href="javascript:void(0);" onclick="return false;">修改封面</a>\n\n                                <a class="js_removeCover icon20_common del_media_white" title="删除封面" href="javascript:void(0);" onclick="return false;">删除</a>\n                            </div>\n                        </span>\n                        <input type="hidden" class="js_field js_file_id" name="file_id">\n                        <input type="hidden" class="js_field js_cdn_url" name="cdn_url">\n                        <input type="hidden" class="js_field js_cdn_url_back" name="cdn_url_back">\n                        <input type="hidden" class="js_show_cover_pic js_field" data-type=\'checkbox\' name="show_cover_pic">\n                    </div>\n                </div>\n\n                <!-- <p class="frm_tips">\n                    <label for="" class="frm_checkbox_label">\n                        <i class="icon_checkbox"></i>\n                        <input type="checkbox" class="frm_checkbox js_show_cover_pic js_field" name="show_cover_pic" checked>\n                        封面图片显示在正文中                    </label>\n                </p> -->\n                <div class="frm_msg js_show_cover_pic_tips" style="display: none;">\n                    <span class="tips js_msg_content">在正文顶部插入封面图原图片</span>\n                </div>\n                <div class="frm_msg fail js_cover_error js_error_msg" style="display:none;">\n                    <span class="js_msg_content"></span>\n                </div>\n            </div>\n            <!-- END 封面 -->\n            <!-- BEGIN 摘要 -->\n            <div id="js_description_area" class="js_desc_area appmsg_edit_item gap_left align_counter appmsg_description">\n                <label for="" class="frm_label">\n                    <strong class="title">摘要</strong>\n                </label>\n                <span class="frm_textarea_box with_counter counter_out">\n                    <textarea id="js_description" placeholder="选填，如果不填写会默认抓取正文前54个字" class="frm_textarea js_desc js_counter js_field" name="digest" max-length="120"></textarea>\n                    <em class="frm_input_append frm_counter">0/120</em>\n                </span>\n\n                <div class="frm_msg fail js_desc_error" style="display:none;"></div>\n            </div>\n            <!-- END 摘要 -->\n        </div>\n    </div>\n</div>\n';
});