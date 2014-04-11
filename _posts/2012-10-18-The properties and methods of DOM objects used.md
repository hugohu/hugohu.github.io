---
layout: post
title: zt：DOM常用对象的属性和方法
date: 2012-10-18 10:19
author: admin
comments: true
categories: [转载的]
tags: []
---
<h5>Image 对象的属性</h5>
<a href="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182333573635.png"><img title="image" src="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182333572240.png" alt="image" width="611" height="427" border="0" /></a>
<h5>标准属性</h5>
<a href="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182333571160.png"><img title="image" src="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182333575304.png" alt="image" width="611" height="85" border="0" /></a>
<h5>Image 对象的事件句柄</h5>
<a href="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/20120418233358637.png"><img title="image" src="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182333582829.png" alt="image" width="611" height="109" border="0" /></a>

&nbsp;

&nbsp;
<h3>HTML DOM Button 对象</h3>
Button 对象代表 HTML 文档中的一个按钮。该元素没有默认的行为，但是必须有一个 onclick 事件句柄以便使用。
<h5><a href="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182333586209.png"><img title="image" src="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182333586766.png" alt="image" width="611" height="267" border="0" /></a></h5>
&nbsp;
<h3>HTML DOM Checkbox 对象</h3>
<a href="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182333583734.png"><img title="image" src="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182333584291.png" alt="image" width="611" height="328" border="0" /></a>

&nbsp;
<h3>HTML DOM FileUpload 对象</h3>
该元素包含一个文本输入字段，用来输入文件名，还有一个按钮，用来打开文件选择对话框以便图形化选择文件。

<strong>该元素的 value 属性保存了用户指定的文件的名称，但是当包含一个 file-upload 元素的表单被提交的时候，浏览器会向服务器发送选中的文件的内容而不仅仅是发送文件名。</strong>

<strong>为安全起见，file-upload 元素不允许 HTML 作者或 JavaScript 程序员指定一个默认的文件名。HTML value 属性被忽略，并且对于此类元素来说，value 属性是只读的，这意味着只有用户可以输入一个文件名。当用户选择或编辑一个文件名，file-upload 元素触发 onchange 事件句柄。</strong>

<a href="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182333589307.png"><img title="image" src="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182333586276.png" alt="image" width="611" height="328" border="0" /></a>

&nbsp;
<h3>HTML DOM Hidden 对象</h3>
Hidden 对象代表一个 HTML 表单中的某个隐藏输入域。

这种类型的输入元素实际上是隐藏的。这个不可见的表单元素的 value 属性保存了一个要提交给 Web 服务器的任意字符串。如果想要提交并非用户直接输入的数据的话，就是用这种类型的元素。

<a href="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182333596832.png"><img title="image" src="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182333597388.png" alt="image" width="611" height="189" border="0" /></a>

&nbsp;
<h3>HTML DOM Password 对象</h3>
该文本输入字段供用户输入某些敏感的数据，比如密码等。当用户输入的时候，他的输入是被掩盖的（例如使用星号*），以防止旁边的人从他背后看到输入的内容。不过需要注意的是，当表单提交时，输入是用明文发送的。

<a href="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182333594357.png"><img title="image" src="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182333592961.png" alt="image" width="611" height="372" border="0" /></a>

&nbsp;
<h3>HTML DOM Radio 对象</h3>
单选按钮是表示一组互斥选项按钮中的一个。当一个按钮被选中，之前选中的按钮就变为非选中的。

<a href="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182333591881.png"><img title="image" src="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182333592438.png" alt="image" width="611" height="320" border="0" /></a>

&nbsp;
<h3>HTML DOM Reset 对象</h3>
当重置按钮被点击，包含它的表单中所有输入元素的值都重置为它们的默认值。<strong>默认值由 HTML value 属性或 JavaScript 的 defaultValue 属性指定</strong>。

<strong>重置按钮在重置表单之前触发 onclick 句柄，并且这个句柄可以通过返回 fasle 来取消。</strong>

<a href="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182333595818.png"><img title="image" src="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182333594423.png" alt="image" width="611" height="267" border="0" /></a>

&nbsp;
<h3>HTML DOM Submit 对象</h3>
在表单提交之前，触发 onclick 事件句柄，并且一个句柄可以通过返回 fasle 来取消表单提交。

<a href="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182333591391.png"><img title="image" src="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182334001947.png" alt="image" width="611" height="267" border="0" /></a>

&nbsp;
<h3>HTML DOM Text 对象</h3>
<a href="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182334008916.png"><img title="image" src="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182334003932.png" alt="image" width="611" height="372" border="0" /></a>

&nbsp;
<h3>HTML DOM Option 对象</h3>
Option 对象代表 HTML 表单中下拉列表中的一个选项。

<a href="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/20120418235016922.png"><img title="image" src="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182350167890.png" alt="image" width="611" height="269" border="0" /></a>

&nbsp;
<h3>HTML DOM Select 对象</h3>
Select 对象代表 HTML 表单中的一个下拉列表。
<h5>Select 对象集合</h5>
<a href="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182350174543.png"><img title="image" src="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182350179875.png" alt="image" width="611" height="57" border="0" /></a>
<h5>Select 对象属性</h5>
<a href="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182350172068.png"><img title="image" src="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182350177400.png" alt="image" width="611" height="293" border="0" /></a>
<h5>Select 对象方法</h5>
<a href="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182350171545.png"><img title="image" src="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182350172101.png" alt="image" width="611" height="135" border="0" /></a>

&nbsp;
<h3>HTML DOM Table 对象</h3>
<h5>Table 对象集合</h5>
<a href="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182350171021.png"><img title="image" src="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182350173529.png" alt="image" width="611" height="83" border="0" /></a>
<h5>Table 对象属性</h5>
<a href="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182350172134.png"><img title="image" src="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182350187466.png" alt="image" width="611" height="373" border="0" /></a>
<h5>Table 对象方法</h5>
<a href="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182350188023.png"><img title="image" src="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182350184991.png" alt="image" width="611" height="245" border="0" /></a>

&nbsp;
<h3>HTML DOM TableCell 对象</h3>
<a href="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182350187183.png"><img title="image" src="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182350184152.png" alt="image" width="611" height="397" border="0" /></a>

&nbsp;
<h3>HTML DOM TableRow 对象</h3>
<h5>TableRow 对象集合</h5>
<a href="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182350185024.png"><img title="image" src="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182350187532.png" alt="image" width="611" height="56" border="0" /></a>
<h5>TableRow 对象属性</h5>
<a href="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182350186137.png"><img title="image" src="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182350185057.png" alt="image" width="611" height="243" border="0" /></a>
<h5>TableRow 对象方法</h5>
<a href="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182350193661.png"><img title="image" src="http://images.cnblogs.com/cnblogs_com/SkySoot/201204/201204182350196170.png" alt="image" width="611" height="85" border="0" /></a>
