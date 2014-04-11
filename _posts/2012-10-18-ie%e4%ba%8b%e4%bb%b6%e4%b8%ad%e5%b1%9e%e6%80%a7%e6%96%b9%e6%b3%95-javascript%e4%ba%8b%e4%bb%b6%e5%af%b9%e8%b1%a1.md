---
title: IE事件中属性/方法 -JavaScript事件对象
author: admin
layout: post
permalink: /?p=22
categories:
  - 转载的
---
文章编辑： 国粹小生

文章发表于: 2010-10-22 20:10

下面是IE中事件的属性和方法(注意：仅应用于IE技术和特征的事件的属性和方法末列出来)：

特性/方法：altKey、类型：Bolean、可读/可写：R/W、描述：true表示按下ALT键；false表示没有

特性/方法：button、类型：Integer、可读/可写：R/W、描述：对于特定的鼠标事件，表示按下的鼠标按钮：

0-未按下按钮  
1-按下左键  
2-按下右键  
3-同时按下左右按钮  
4-按下中键  
5-按下左键和中键  
6-按下右键和中键  
7-同时按下左中右键

特性/方法：cancelBubble、类型：Boolean、可读/可写：R/W、描述：开发人员将其设为true时，将会停止事件向上冒泡

特性/方法：clientX、类型：Integer、可读/可写：R/W、描述：事件发生时，鼠标在客户端区域(不包含工具栏、滚动条等)的x坐标

特性/方法：clientY、类型：Integer、可读/可写：R/W、描述：事件发生时，鼠标在客户端区域(不包含工具栏、滚动条等)的y坐标

特性/方法：ctrlKey、类型：Boolean、可读/可写：R/W、描述：true表示按下CTRL键，false表示没有

特性/方法：fromElement、类型：Element、可读/可写：R/W、描述：某些鼠标事件中，鼠标所离开的元素

特性/方法：keyCode、类型：Integer、可读/可写：R/W、描述：对于keypress事件，表示按下按钮的Unicode字符；对于keydown/keyup事件，表示按下按钮的数字代号

特性/方法：offsetX、类型：Integer、可读/可写：R/W、描述：鼠标相对于引起事件的对象的x坐标

特性/方法：offsetY、类型：Integer、可读/可写：R/W、描述：鼠标相对于引起事件的对象的y坐标

特性/方法：repeat、类型：Boolean、可读/可写：R、描述：如果不断触发keydown事件，则为true，否则为false

特性/方法：returnValue、类型：Boolean、可读/可写：R/W、描述：开发人员将其设置为false以取消时间的默认动作

特性/方法：screenX、类型：Integer、可读/可写：R/W、描述：相对于整个计算机屏幕的鼠标x坐标

特性/方法：screenY、类型：Integer、可读/可写：R/W、描述：相对于整个计算机屏幕的鼠标y坐标

特性/方法：shiftKey、类型：Boolean、可读/可写：R/W、描述：true表示按下Shift键；否则为false

特性/方法：srcElment、类型：Element、可读/可写：R/W、描述：引起事件的元素

特性/方法：toElement、类型：Element、可读/可写：R/W、描述：在鼠标事件中，鼠标正在进入的元素

特性/方法：type、类型：String、可读/可写：R/W、描述：事件的名称

特性/方法：x、类型：Integer、可读/可写：R/W、描述：鼠标相对于引起事件的元素的父元素的x坐标

特性/方法：y、类型：Integer、可读/可写：R/W、描述：鼠标相对于引起事件的元素的父元素的y坐标