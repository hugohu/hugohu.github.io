---
title: zt：Javascript 的addEventListener()及attachEvent()区别分析
author: admin
layout: post
permalink: /?p=59
categories:
  - 转载的
---
<div id="art_demo">
  大家都知道事件的用法就是当某个事件(状况)被触发了之后就会去执行某个Function, 尤其是Javascript, 在当红AJAX的催化下, 了解Javascript的Event用法更加重要, 在这里就大概介绍一下avascript的Event用法.
</div>

<div id="con_all">
  <div id="con_da1">
  </div>
  
  <div id="con_da8">
    <strong><strong>Mozilla中：</strong></strong>addEventListener的使用方式：target.addEventListener(type, listener, useCapture);</p> <p>
      target： 文档节点、document、window 或 XMLHttpRequest。<br /> type： 字符串，事件名称，不含“on”，比如“click”、“mouseover”、“keydown”等。<br /> listener ：实现了 EventListener 接口或者是 JavaScript 中的函数。<br /> useCapture ：是否使用捕捉，一般用 false 。例如：document.getElementById(&#8220;testText&#8221;).addEventListener(&#8220;keydown&#8221;, function (event) { alert(event.keyCode); }, false);
    </p>
    
    <p>
      <strong>IE中：</strong>
    </p>
    
    <p>
      target.attachEvent(type, listener);<br /> target： 文档节点、document、window 或 XMLHttpRequest。<br /> type： 字符串，事件名称，含“on”，比如“onclick”、“onmouseover”、“onkeydown”等。<br /> listener ：实现了 EventListener 接口或者是 JavaScript 中的函数。 例如：document.getElementById(&#8220;txt&#8221;).attachEvent(&#8220;onclick&#8221;,function(event){alert(event.keyCode);});
    </p>
    
    <p>
      W3C 及 IE 同时支持移除指定的事件, 用途是移除设定的事件, 格式分别如下:
    </p>
    
    <p>
      <strong>W3C格式:<br /> </strong><br /> removeEventListener(event,function,capture/bubble);
    </p>
    
    <p>
      Windows IE的格式如下:
    </p>
    
    <p>
      detachEvent(event,function);
    </p>
    
    <p>
      target.addEventListener(type, listener, useCapture);<br /> target 文档节点、document、window 或 XMLHttpRequest。<br /> type 字符串，事件名称，不含“on”，比如“click”、“mouseover”、“keydown”等。<br /> listener 实现了 EventListener 接口或者是 JavaScript 中的函数。<br /> useCapture 是否使用捕捉，看了后面的事件流一节后就明白了，一般用 false<br /> 事件触发时，会将一个 Event 对象传递给事件处理程序，比如：<br /> document.getElementById(&#8220;testText&#8221;).addEventListener(&#8220;keydown&#8221;, function (event) { alert(event.keyCode); }, false);<br /> 适应的浏览器版本不同，同时在使用的过程中要注意<br /> attachEvent方法 按钮onclick IE中使用<br /> addEventListener方法 按钮click fox中使用<br /> 两者使用的原理：可对执行的优先级不一样，下面实例讲解如下：<br /> attachEvent方法，为某一事件附加其它的处理事件。（不支持Mozilla系列）<br /> addEventListener方法 用于 Mozilla系列<br /> 举例: document.getElementById(&#8220;btn&#8221;).onclick = method1;<br /> document.getElementById(&#8220;btn&#8221;).onclick = method2;<br /> document.getElementById(&#8220;btn&#8221;).onclick = method3;如果这样写,那么将会只有medhot3被执行<br /> 写成这样：<br /> var btn1Obj = document.getElementById(&#8220;btn1&#8243;); //object.attachEvent(event,function);<br /> btn1Obj.attachEvent(&#8220;onclick&#8221;,method1);<br /> btn1Obj.attachEvent(&#8220;onclick&#8221;,method2);<br /> btn1Obj.attachEvent(&#8220;onclick&#8221;,method3);执行顺序为method3->method2->method1<br /> 如果是Mozilla系列，并不支持该方法，需要用到addEventListener var btn1Obj = document.getElementById(&#8220;btn1&#8243;);<br /> //element.addEventListener(type,listener,useCapture);<br /> btn1Obj.addEventListener(&#8220;click&#8221;,method1,false);<br /> btn1Obj.addEventListener(&#8220;click&#8221;,method2,false);<br /> btn1Obj.addEventListener(&#8220;click&#8221;,method3,false);执行顺序为method1->method2->method3<br /> 实例：(要注意的是div必须放到js前面才行)
    </p>
    
    <div>
      <span style="text-decoration: underline;">复制代码</span>代码如下:
    </div>
    
    <div id="code29546">
      <html><br /> <head><br /> </head><br /> <body><br /> <div id=&#8221;name1&#8243; style=&#8221;border:1px solid red;padding:10px 10px 10px 10px;&#8221; style=&#8221;border:1px solid red;padding:10px 10px 10px 10px;&#8221;><br /> <div id=&#8221;name2&#8243; style=&#8221;border:1px solid green;padding:10px 10px 10px 10px;&#8221; style=&#8221;border:1px solid green;padding:10px 10px 10px 10px;&#8221;>点击</div><br /> </div><br /> <div id=&#8221;info&#8221;></div><br /> <script type=&#8221;text/javascript&#8221;><!&#8211;<br /> var name1=document.getElementById(&#8216;name1&#8242;); //要注意<br /> var name2=document.getElementById(&#8216;name2&#8242;); //要注意<br /> var info=document.getElementById(&#8216;info&#8217;);<br /> if(name1.attachEvent){ //对于attachEvent前面的target我们一定要保证不为空<br /> name1.attachEvent(&#8216;onclick&#8217;,function () { info.innerHTML += &#8220;红色&#8221; + &#8220;<br>&#8221;; });<br /> name2.attachEvent(&#8216;onclick&#8217;,function () { info.innerHTML += &#8220;绿色&#8221; + &#8220;<br>&#8221;; });<br /> }else{<br /> name1.addEventListener(&#8216;click&#8217;,function () { info.innerHTML += &#8220;红色&#8221; + &#8220;<br>&#8221;; },false);<br /> name2.addEventListener(&#8216;click&#8217;,function () { info.innerHTML += &#8220;绿色&#8221; + &#8220;<br>&#8221;; },false);<br /> }<br /> // &#8211;></script><br /> </body><br /> </html>
    </div>
    
    <p align="left">
      从W3C的发展时间轴来看, DOM(Document Object Model)的模型可以分为两种, DOM 0 及 DOM 2. 从数字来看就可以知道DOM 0 当然是比较旧的协议, 我们可以从以下的表格来看:
    </p>
    
    <p align="left">
      DOM1 协定:
    </p>
    
    <table border="1" cellpadding="0">
      <tr>
        <td colspan="2">
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <strong>Event Name</strong>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            <strong>Description</strong>
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>onblur()</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            The element has lost focus (that is, it is not selected by the user).
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>onchange0</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            The element has either changed (such as by typing into a text field) or the element has lost focus.
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>onclick0</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            The mouse has been clicked on an element.
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>ondblclick()</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            The mouse has been double-clicked on an element.
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>onfocus()</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            The element has gotten focus.
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>onkeydown()</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            A keyboard key has been pressed down (as opposed to released) while the element has focus.
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>onkeypress()</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            A keyboard key has been pressed while the element has focus.
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>onkeyup()</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            A keyboard key has been released while the element has focus.
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>onload()</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            The element has loaded (document, frameset, or image).
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>onmousedown()</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            A mouse button has been pressed.
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>onmousemove()</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            The mouse has been moved.
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>onmouseout()</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            The mouse has been moved off of or away from an element.
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>onmouseover()</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            The mouse has moved over an element.
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>onmouseup()</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            A mouse button has been released.
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>onreset()</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            The form element has been reset, such as when a form reset button is pressed.
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>onresize()</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            The window&#8217;s size has been changed.
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>onselect()</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            The text of a form element has been selected.
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>onsubmit()</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            The form has been submitted.
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>onunload()</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            The document or frameset has been unloaded.
          </p>
        </td>
      </tr>
    </table>
    
    <p align="left">
      DOM2 的进化:
    </p>
    
    <table border="1" cellpadding="0">
      <tr>
        <td>
          <p align="left">
            <strong>DOM 0 Event</strong>
          </p>
        </td>
        
        <td>
          <p align="left">
            <strong>DOM 2 Event</strong>
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>onblur()</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            <em>blur</em>
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>onfocus()</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            <em>focus</em>
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>onchange()</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            <em>change</em>
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>onmouseover()</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            <em>mouseover</em>
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>onmouseout()</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            <em>mouseout</em>
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>onmousemove()</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            <em>mousemove</em>
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>onmousedown()</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            <em>mousedown</em>
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>onmouseup()</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            <em>mouseup</em>
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>onclick()</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            <em>click</em>
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>ondblclick()</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            <em>dblclick</em>
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>onkeydown()</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            <em>keydown</em>
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>onkeyup()</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            <em>keyup</em>
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>onkeypress()</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            <em>keypress</em>
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>onsubmit()</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            <em>submit</em>
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>onload()</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            <em>load</em>
          </p>
        </td>
      </tr>
      
      <tr>
        <td valign="top">
          <p align="left">
            <em>onunload()</em>
          </p>
        </td>
        
        <td valign="top">
          <p align="left">
            <em>unload</em>
          </p>
        </td>
      </tr>
    </table>
    
    <p align="left">
      新的DOM2 用法可以addEventListener()这个函数来观察到:
    </p>
    
    <p align="left">
      addEventListener(event,function,capture/bubble);
    </p>
    
    <p align="left">
      参数event如上表所示, function是要执行的函数, capture与bubble分别是W3C制定得两种时间模式,简单来说capture就是从document的开始读到最后一行, 再执行事件, 而bubble则是先寻找指定的位置再执行事件.<br /> capture/bubble的参数是布尔值, True表示用capture, False则是bubble.Windows Internet Explorer也有制定一种EventHandler, 是 attachEvent(), 格式如下:
    </p>
    
    <p align="left">
      window.attachEvent(”submit”,myFunction());
    </p>
    
    <p align="left">
      比较特别的是attachEvent不需要指定capture/bubble的参数, 因为在windows IE环境下都是使用Bubble的模式.这里用图像的Rollover例子来表现事件的用法:
    </p>
    
    <p align="left">
      <!DOCTYPE HTML PUBLIC “-//W3C//DTD HTML 4.01//EN”<br /> “<a href="http://www.w3.org/TR/html4/strict.dtd" target="_top">http://www.w3.org/TR/html4/strict.dtd</a>“><br /> <html><br /> <head><br /> <title>Rollover</title><br /> <script type=”text/javascript”>function moveOver(imgObj) {<br /> if (typeof window.addEventListener != “undefined”) {<br /> imgObj.addEventListener(”mouseover”,function(){imgObj.src = imgObj.id +<br /> “_over.png”;}, false);<br /> imgObj.addEventListener(”mouseout”, function(){imgObj.src = imgObj.id +<br /> “_default.png”;}, false);<br /> } else {<br /> imgObj.attachEvent(”onmouseover”,function(){imgObj.src = imgObj.id +<br /> “_over.png”;});<br /> imgObj.attachEvent(”onmouseout”, function(){imgObj.src = imgObj.id +<br /> “_default.png”;});<br /> }<br /> }
    </p>
    
    <p align="left">
      function rollover() {<br /> var images = document.getElementsByTagName(”img”);<br /> var roll = new RegExp (”rollover”);<br /> var preload = [];<br /> for (var i = 0; i < images.length; i++) {<br /> if (images[i].id.match(roll)) {<br /> preload[i] = new Image();<br /> preload[i].src = images[i].id + “_over.png”;
    </p>
    
    <p>
      moveOver(images[i]);<br /> }<br /> }<br /> }<br /> if (typeof window.addEventListener != “undefined”) {<br /> window.addEventListener(”load”,rollover,false);<br /> } else {<br /> window.attachEvent(”onload”,rollover)<br /> }<br /> </script><br /> </head><br /> <body><br /> <p><img id=”rollover_home” name=”img_home” src=”rollover_home_default.png”<br /> alt=”Home”></p><br /> <p><img id=”rollover_about” name=”img_about” src=”rollover_about_default.png”<br /> alt=”About”></p><br /> <p><img id=”rollover_blog” name=”img_blog” src=”rollover_blog_default.png”<br /> alt=”Blog”></p><br /> <p><img id=”logo” name=”img_logo” src=”logo.png” alt=”Braingia Logo”></p><br /> </body><br /> </html>
    </p>
    
    <p align="left">
      上述的 typeof window.addEventListener != “undefined” 程序代码可以判断使用者的浏览器是否支持AddEventListener这个事件模型, 如果不支持就使用attachEvent.
    </p>
    
    <p align="left">
      W3C 及 IE 同时支持移除指定的事件, 用途是移除设定的事件, 格式分别如下:
    </p>
    
    <p align="left">
      W3C格式:
    </p>
    
    <p align="left">
      removeEventListener(event,function,capture/bubble);
    </p>
    
    <p align="left">
      Windows IE的格式如下:
    </p>
    
    <p align="left">
      detachEvent(event,function);
    </p>
    
    <p align="left">
      数据参考: Chapter 14 &#8211; Browsers and JavaScript, JavaScript Step by Step, by Steve Suehring
    </p>
  </div>
</div>