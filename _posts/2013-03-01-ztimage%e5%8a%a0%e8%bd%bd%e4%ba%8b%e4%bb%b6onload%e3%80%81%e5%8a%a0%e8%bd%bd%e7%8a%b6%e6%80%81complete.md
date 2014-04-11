---
layout: post
title: zt:Image加载事件(onload)、加载状态(complete)
date: 2013-03-01 15:50
author: admin
comments: true
categories: [转载的]
tags: []
---
通过js操纵DOM很多情况下都是为了实现和当前页html元素的异步载入，我谈谈对Image对象的一些认识。

看个例子：

&lt;input type="button" name="" value="载入图片" onclick="addImg('tt.jpg')" /&gt;
<pre>  function addImg(isrc) 
  { 
  var Img = new Image(); 
  Img.src = isrc; 
  Img.onload = function () 
  { 
  document.body.appendChild(Img); 
  } 
  } 
</pre>
当包含上述代码的页面打开时并不载入“tt.jpg”，当点击按钮时候才载入。当载入完成后触发onload事件显示到页面上。如果你是第一次加载 “tt.jpg" 这张图片的话，运行正常。点击按钮加载并显示一张图片，如果重复点击会怎么样呢？

IE、Opera中，除了第一次加载 图片时候显示正常，之后再点击就没有反应了，刷新也一样。难道它们只触发一次 “onload”事件？是缓存机制？

FF、Chrom中，每点击一次加载一张该图片。

稍微修改下：

&lt;input type="button" name="" value="载入图片" onclick="addImg('tt.jpg')" /&gt;
<pre>  function addImg(isrc) 
  { 
  var Img = new Image(); 
  Img.onload = function () 
  { 
  document.body.appendChild(Img); 
  } 
  Img.src = isrc; 
  } 
</pre>
运行后发现，奇怪的事情发生了。

所有的浏览器都一致了，都是每点击一次加载一张图片。这又是什么原因？由此可以见 IE、Opera 执行过程中并不是只触发一次 onload 事件！

联想一下 Image 对象的一些属性看看，complete、readyState(IE专属值[uninitialized,complete]) （为防止缓存影响效果请更换图片名称！）



&lt;input type="button" name="" value="complete" onclick='alert("complete : "+Img.complete +"nreadyState : "+Img.readyState)' /&gt;

&lt;input type="button" name="" value="载入图片" onclick="addImg('mtm.jpg')" /&gt;
<pre>  var Img; 
  function addImg(isrc) 
  { 
  Img = new Image(); 
  //Img.src = isrc; 
  Img.onload = function () 
  { 
  alert("complete : "+Img.complete +"nreadyState : "+Img.readyState) 
  document.body.appendChild(Img); 
  } 
  Img.src = isrc; 
  } 
</pre>
经过以上测试，可以看出一些不同点，对于 complete 属性来讲，IE是根据图片是否显示过来判断，就是说当加载的图片显示出来后，complete 属性的值才为 true ，否则一直是 false ，和以前是否加载过该张图片没有关系，即和缓存没有关系！但是其它浏览器表现出来的确不一样，只要以前加载过该图，浏览器有缓存，complete 就为 true ，这和IE的 readyState 属性的表现一致！

至此，可以肯定的是所有的浏览器都会缓存图片！可是上面的问题到底是什么原因导致的呢？

众所周知，从缓存里加载东西的速度是很快的，那么在
<pre>  ... 
  Img.src = isrc; 
  Img.onload = ... 
  ... 
</pre>
的过程中，难道 IE、Opera 加载的速度快到，来不及追加事件？

这回加载一张根本不存在的图片看看效果：

&lt;input type="button" name="" value="complete" onclick='alert("complete : "+Imgttmt.complete +"nreadyState : "+Imgttmt.readyState)' /&gt;

&lt;input type="button" name="" value="载入图片" onclick="addImg('mtmttyt.jpg')" /&gt;
<pre>  var Imgttmt; 
  function addImg(isrc) 
  { 
  Imgttmt = new Image(); 
  Imgttmt.src = isrc; 
  alert("complete : "+Imgttmt.complete +"nreadyState : "+Imgttmt.readyState) 
  Imgttmt.onload = function () 
  { 
  alert("impossible") 
  } 
  } 
</pre>
可以肯定的是所有浏览器都不触发 onload 事件。

从是否缓存或已经加载过图片的角度讲，IE、Opera表现正常，complete 始终为 false ；IE的 readyState 始终为uninitialized 。

令人疑惑的是FF，其中 Imgttmt.complete 的值一直是 true ；

更令人困惑的是 Chrom，它是在最初 new Imgttmt() 的时候 Imgttmt.complete 值为 false。而之后 Imgttmt.complete 值就一直为 true 了！

如果换一张从来没有加载过的图片，FF和Chrom 的行为就一致了，都是一开始加载时， Imgttmt.complete 值为false， 之后为 true！

测试的过程中还发现，脚本的执行顺序的确会影响到类似于 onload 等事件的追加，如果在其显示后在追加事件就没有什么实际意义了！

基于 javascript 这种解释性语言的特性，在追加事件的时候一定要注意把事件追加在触发该事件的句柄之前。
