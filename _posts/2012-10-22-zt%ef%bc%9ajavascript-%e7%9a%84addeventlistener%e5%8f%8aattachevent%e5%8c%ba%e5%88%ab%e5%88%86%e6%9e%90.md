---
layout: post
title: zt：Javascript 的addEventListener()及attachEvent()区别分析
date: 2012-10-22 16:36
author: admin
comments: true
categories: [转载的]
tags: []
---
<div id="art_demo">大家都知道事件的用法就是当某个事件(状况)被触发了之后就会去执行某个Function, 尤其是Javascript, 在当红AJAX的催化下, 了解Javascript的Event用法更加重要, 在这里就大概介绍一下avascript的Event用法.</div>
<div id="con_all">
<div id="con_da1"></div>
<div id="con_da8"><strong><strong>Mozilla中：</strong></strong>addEventListener的使用方式：target.addEventListener(type, listener, useCapture);

target： 文档节点、document、window 或 XMLHttpRequest。
type： 字符串，事件名称，不含“on”，比如“click”、“mouseover”、“keydown”等。
listener ：实现了 EventListener 接口或者是 JavaScript 中的函数。
useCapture ：是否使用捕捉，一般用 false 。例如：document.getElementById("testText").addEventListener("keydown", function (event) { alert(event.keyCode); }, false);

<strong>IE中：</strong>

target.attachEvent(type, listener);
target： 文档节点、document、window 或 XMLHttpRequest。
type： 字符串，事件名称，含“on”，比如“onclick”、“onmouseover”、“onkeydown”等。
listener ：实现了 EventListener 接口或者是 JavaScript 中的函数。 例如：document.getElementById("txt").attachEvent("onclick",function(event){alert(event.keyCode);});

W3C 及 IE 同时支持移除指定的事件, 用途是移除设定的事件, 格式分别如下:

<strong>W3C格式:
</strong>
removeEventListener(event,function,capture/bubble);

Windows IE的格式如下:

detachEvent(event,function);

target.addEventListener(type, listener, useCapture);
target 文档节点、document、window 或 XMLHttpRequest。
type 字符串，事件名称，不含“on”，比如“click”、“mouseover”、“keydown”等。
listener 实现了 EventListener 接口或者是 JavaScript 中的函数。
useCapture 是否使用捕捉，看了后面的事件流一节后就明白了，一般用 false
事件触发时，会将一个 Event 对象传递给事件处理程序，比如：
document.getElementById("testText").addEventListener("keydown", function (event) { alert(event.keyCode); }, false);
适应的浏览器版本不同，同时在使用的过程中要注意
attachEvent方法 按钮onclick IE中使用
addEventListener方法 按钮click fox中使用
两者使用的原理：可对执行的优先级不一样，下面实例讲解如下：
attachEvent方法，为某一事件附加其它的处理事件。（不支持Mozilla系列）
addEventListener方法 用于 Mozilla系列
举例: document.getElementById("btn").onclick = method1;
document.getElementById("btn").onclick = method2;
document.getElementById("btn").onclick = method3;如果这样写,那么将会只有medhot3被执行
写成这样：
var btn1Obj = document.getElementById("btn1"); //object.attachEvent(event,function);
btn1Obj.attachEvent("onclick",method1);
btn1Obj.attachEvent("onclick",method2);
btn1Obj.attachEvent("onclick",method3);执行顺序为method3-&gt;method2-&gt;method1
如果是Mozilla系列，并不支持该方法，需要用到addEventListener var btn1Obj = document.getElementById("btn1");
//element.addEventListener(type,listener,useCapture);
btn1Obj.addEventListener("click",method1,false);
btn1Obj.addEventListener("click",method2,false);
btn1Obj.addEventListener("click",method3,false);执行顺序为method1-&gt;method2-&gt;method3
实例：(要注意的是div必须放到js前面才行)
<div><span style="text-decoration: underline;">复制代码</span>代码如下:</div>
<div id="code29546">&lt;html&gt;
&lt;head&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="name1" style="border:1px solid red;padding:10px 10px 10px 10px;" style="border:1px solid red;padding:10px 10px 10px 10px;"&gt;
&lt;div id="name2" style="border:1px solid green;padding:10px 10px 10px 10px;" style="border:1px solid green;padding:10px 10px 10px 10px;"&gt;点击&lt;/div&gt;
&lt;/div&gt;
&lt;div id="info"&gt;&lt;/div&gt;
&lt;script type="text/javascript"&gt;&lt;!--
var name1=document.getElementById('name1'); //要注意
var name2=document.getElementById('name2'); //要注意
var info=document.getElementById('info');
if(name1.attachEvent){ //对于attachEvent前面的target我们一定要保证不为空
name1.attachEvent('onclick',function () { info.innerHTML += "红色" + "&lt;br&gt;"; });
name2.attachEvent('onclick',function () { info.innerHTML += "绿色" + "&lt;br&gt;"; });
}else{
name1.addEventListener('click',function () { info.innerHTML += "红色" + "&lt;br&gt;"; },false);
name2.addEventListener('click',function () { info.innerHTML += "绿色" + "&lt;br&gt;"; },false);
}
// --&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</div>
<p align="left">从W3C的发展时间轴来看, DOM(Document Object Model)的模型可以分为两种, DOM 0 及 DOM 2. 从数字来看就可以知道DOM 0 当然是比较旧的协议, 我们可以从以下的表格来看:</p>
<p align="left">DOM1 协定:</p>

<table border="1" cellpadding="0">
<thead>
<tr>
<td colspan="2"></td>
</tr>
<tr>
<td valign="top">
<p align="left"><strong>Event Name</strong></p>
</td>
<td valign="top">
<p align="left"><strong>Description</strong></p>
</td>
</tr>
</thead>
<tbody>
<tr>
<td valign="top">
<p align="left"><em>onblur()</em></p>
</td>
<td valign="top">
<p align="left">The element has lost focus (that is, it is not selected by the user).</p>
</td>
</tr>
<tr>
<td valign="top">
<p align="left"><em>onchange0</em></p>
</td>
<td valign="top">
<p align="left">The element has either changed (such as by typing into a text field) or the element has lost focus.</p>
</td>
</tr>
<tr>
<td valign="top">
<p align="left"><em>onclick0</em></p>
</td>
<td valign="top">
<p align="left">The mouse has been clicked on an element.</p>
</td>
</tr>
<tr>
<td valign="top">
<p align="left"><em>ondblclick()</em></p>
</td>
<td valign="top">
<p align="left">The mouse has been double-clicked on an element.</p>
</td>
</tr>
<tr>
<td valign="top">
<p align="left"><em>onfocus()</em></p>
</td>
<td valign="top">
<p align="left">The element has gotten focus.</p>
</td>
</tr>
<tr>
<td valign="top">
<p align="left"><em>onkeydown()</em></p>
</td>
<td valign="top">
<p align="left">A keyboard key has been pressed down (as opposed to released) while the element has focus.</p>
</td>
</tr>
<tr>
<td valign="top">
<p align="left"><em>onkeypress()</em></p>
</td>
<td valign="top">
<p align="left">A keyboard key has been pressed while the element has focus.</p>
</td>
</tr>
<tr>
<td valign="top">
<p align="left"><em>onkeyup()</em></p>
</td>
<td valign="top">
<p align="left">A keyboard key has been released while the element has focus.</p>
</td>
</tr>
<tr>
<td valign="top">
<p align="left"><em>onload()</em></p>
</td>
<td valign="top">
<p align="left">The element has loaded (document, frameset, or image).</p>
</td>
</tr>
<tr>
<td valign="top">
<p align="left"><em>onmousedown()</em></p>
</td>
<td valign="top">
<p align="left">A mouse button has been pressed.</p>
</td>
</tr>
<tr>
<td valign="top">
<p align="left"><em>onmousemove()</em></p>
</td>
<td valign="top">
<p align="left">The mouse has been moved.</p>
</td>
</tr>
<tr>
<td valign="top">
<p align="left"><em>onmouseout()</em></p>
</td>
<td valign="top">
<p align="left">The mouse has been moved off of or away from an element.</p>
</td>
</tr>
<tr>
<td valign="top">
<p align="left"><em>onmouseover()</em></p>
</td>
<td valign="top">
<p align="left">The mouse has moved over an element.</p>
</td>
</tr>
<tr>
<td valign="top">
<p align="left"><em>onmouseup()</em></p>
</td>
<td valign="top">
<p align="left">A mouse button has been released.</p>
</td>
</tr>
<tr>
<td valign="top">
<p align="left"><em>onreset()</em></p>
</td>
<td valign="top">
<p align="left">The form element has been reset, such as when a form reset button is pressed.</p>
</td>
</tr>
<tr>
<td valign="top">
<p align="left"><em>onresize()</em></p>
</td>
<td valign="top">
<p align="left">The window's size has been changed.</p>
</td>
</tr>
<tr>
<td valign="top">
<p align="left"><em>onselect()</em></p>
</td>
<td valign="top">
<p align="left">The text of a form element has been selected.</p>
</td>
</tr>
<tr>
<td valign="top">
<p align="left"><em>onsubmit()</em></p>
</td>
<td valign="top">
<p align="left">The form has been submitted.</p>
</td>
</tr>
<tr>
<td valign="top">
<p align="left"><em>onunload()</em></p>
</td>
<td valign="top">
<p align="left">The document or frameset has been unloaded.</p>
</td>
</tr>
</tbody>
</table>
<p align="left">DOM2 的进化:</p>

<table border="1" cellpadding="0">
<tbody>
<tr>
<td>
<p align="left"><strong>DOM 0 Event</strong></p>
</td>
<td>
<p align="left"><strong>DOM 2 Event</strong></p>
</td>
</tr>
<tr>
<td valign="top">
<p align="left"><em>onblur()</em></p>
</td>
<td valign="top">
<p align="left"><em>blur</em></p>
</td>
</tr>
<tr>
<td valign="top">
<p align="left"><em>onfocus()</em></p>
</td>
<td valign="top">
<p align="left"><em>focus</em></p>
</td>
</tr>
<tr>
<td valign="top">
<p align="left"><em>onchange()</em></p>
</td>
<td valign="top">
<p align="left"><em>change</em></p>
</td>
</tr>
<tr>
<td valign="top">
<p align="left"><em>onmouseover()</em></p>
</td>
<td valign="top">
<p align="left"><em>mouseover</em></p>
</td>
</tr>
<tr>
<td valign="top">
<p align="left"><em>onmouseout()</em></p>
</td>
<td valign="top">
<p align="left"><em>mouseout</em></p>
</td>
</tr>
<tr>
<td valign="top">
<p align="left"><em>onmousemove()</em></p>
</td>
<td valign="top">
<p align="left"><em>mousemove</em></p>
</td>
</tr>
<tr>
<td valign="top">
<p align="left"><em>onmousedown()</em></p>
</td>
<td valign="top">
<p align="left"><em>mousedown</em></p>
</td>
</tr>
<tr>
<td valign="top">
<p align="left"><em>onmouseup()</em></p>
</td>
<td valign="top">
<p align="left"><em>mouseup</em></p>
</td>
</tr>
<tr>
<td valign="top">
<p align="left"><em>onclick()</em></p>
</td>
<td valign="top">
<p align="left"><em>click</em></p>
</td>
</tr>
<tr>
<td valign="top">
<p align="left"><em>ondblclick()</em></p>
</td>
<td valign="top">
<p align="left"><em>dblclick</em></p>
</td>
</tr>
<tr>
<td valign="top">
<p align="left"><em>onkeydown()</em></p>
</td>
<td valign="top">
<p align="left"><em>keydown</em></p>
</td>
</tr>
<tr>
<td valign="top">
<p align="left"><em>onkeyup()</em></p>
</td>
<td valign="top">
<p align="left"><em>keyup</em></p>
</td>
</tr>
<tr>
<td valign="top">
<p align="left"><em>onkeypress()</em></p>
</td>
<td valign="top">
<p align="left"><em>keypress</em></p>
</td>
</tr>
<tr>
<td valign="top">
<p align="left"><em>onsubmit()</em></p>
</td>
<td valign="top">
<p align="left"><em>submit</em></p>
</td>
</tr>
<tr>
<td valign="top">
<p align="left"><em>onload()</em></p>
</td>
<td valign="top">
<p align="left"><em>load</em></p>
</td>
</tr>
<tr>
<td valign="top">
<p align="left"><em>onunload()</em></p>
</td>
<td valign="top">
<p align="left"><em>unload</em></p>
</td>
</tr>
</tbody>
</table>
<p align="left">新的DOM2 用法可以addEventListener()这个函数来观察到:</p>
<p align="left">addEventListener(event,function,capture/bubble);</p>
<p align="left">参数event如上表所示, function是要执行的函数, capture与bubble分别是W3C制定得两种时间模式,简单来说capture就是从document的开始读到最后一行, 再执行事件, 而bubble则是先寻找指定的位置再执行事件.
capture/bubble的参数是布尔值, True表示用capture, False则是bubble.Windows Internet Explorer也有制定一种EventHandler, 是 attachEvent(), 格式如下:</p>
<p align="left">window.attachEvent(”submit”,myFunction());</p>
<p align="left">比较特别的是attachEvent不需要指定capture/bubble的参数, 因为在windows IE环境下都是使用Bubble的模式.这里用图像的Rollover例子来表现事件的用法:</p>
<p align="left">&lt;!DOCTYPE HTML PUBLIC “-//W3C//DTD HTML 4.01//EN”
“<a href="http://www.w3.org/TR/html4/strict.dtd" target="_top">http://www.w3.org/TR/html4/strict.dtd</a>“&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Rollover&lt;/title&gt;
&lt;script type=”text/javascript”&gt;function moveOver(imgObj) {
if (typeof window.addEventListener != “undefined”) {
imgObj.addEventListener(”mouseover”,function(){imgObj.src = imgObj.id +
“_over.png”;}, false);
imgObj.addEventListener(”mouseout”, function(){imgObj.src = imgObj.id +
“_default.png”;}, false);
} else {
imgObj.attachEvent(”onmouseover”,function(){imgObj.src = imgObj.id +
“_over.png”;});
imgObj.attachEvent(”onmouseout”, function(){imgObj.src = imgObj.id +
“_default.png”;});
}
}</p>
<p align="left">function rollover() {
var images = document.getElementsByTagName(”img”);
var roll = new RegExp (”rollover”);
var preload = [];
for (var i = 0; i &lt; images.length; i++) {
if (images[i].id.match(roll)) {
preload[i] = new Image();
preload[i].src = images[i].id + “_over.png”;</p>
moveOver(images[i]);
}
}
}
if (typeof window.addEventListener != “undefined”) {
window.addEventListener(”load”,rollover,false);
} else {
window.attachEvent(”onload”,rollover)
}
&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;p&gt;&lt;img id=”rollover_home” name=”img_home” src=”rollover_home_default.png”
alt=”Home”&gt;&lt;/p&gt;
&lt;p&gt;&lt;img id=”rollover_about” name=”img_about” src=”rollover_about_default.png”
alt=”About”&gt;&lt;/p&gt;
&lt;p&gt;&lt;img id=”rollover_blog” name=”img_blog” src=”rollover_blog_default.png”
alt=”Blog”&gt;&lt;/p&gt;
&lt;p&gt;&lt;img id=”logo” name=”img_logo” src=”logo.png” alt=”Braingia Logo”&gt;&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
<p align="left">上述的 typeof window.addEventListener != “undefined” 程序代码可以判断使用者的浏览器是否支持AddEventListener这个事件模型, 如果不支持就使用attachEvent.</p>
<p align="left">W3C 及 IE 同时支持移除指定的事件, 用途是移除设定的事件, 格式分别如下:</p>
<p align="left">W3C格式:</p>
<p align="left">removeEventListener(event,function,capture/bubble);</p>
<p align="left">Windows IE的格式如下:</p>
<p align="left">detachEvent(event,function);</p>
<p align="left">数据参考: Chapter 14 - Browsers and JavaScript, JavaScript Step by Step, by Steve Suehring</p>

</div>
</div>
