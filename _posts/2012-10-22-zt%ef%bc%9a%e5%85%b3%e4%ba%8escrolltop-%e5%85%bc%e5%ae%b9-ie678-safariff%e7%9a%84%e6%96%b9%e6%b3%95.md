---
title: zt：关于scrolltop 兼容 IE6/7/8, Safari,FF的方法
author: admin
layout: post
permalink: /?p=32
categories:
  - 转载的
---
1、各浏览器下 scrollTop的差异  
IE6/7/8：  
对于没有doctype声明的页面里可以使用 document.body.scrollTop 来获取 scrollTop高度 ；  
对于有doctype声明的页面则可以使用 document.documentElement.scrollTop ；  
Safari:  
safari 比较特别，有自己获取scrollTop的函数 ： window.pageYOffset ；  
Firefox:  
火狐等等相对标准些的浏览器就省心多了，直接用 document.documentElement.scrollTop ；  
2、获取scrollTop值  
完美的获取scrollTop 赋值短语 ：  
var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

通过这句赋值就能在任何情况下获得scrollTop 值。  
仔细观察这句赋值，你发现啥了没？？  
没错， 就是 window.pageYOffset (Safari) 被放置在 || 的中间位置。  
因为当 数字0 与 undefine 进行 或运算时，系统默认返回最后一个值。即或运算中 0 == undefine ;  
当页面滚动条刚好在最顶端，即scrollTop值为 0 时。 IE 下 window.pageYOffset (Safari) 返回为 undefine ，此时将 window.pageYOffset (Safari) 放在或运算最后面时， scrollTop 返回 undefine , undefine 用在接下去的运算就会报错咯。  
而其他浏览器 无论 scrollTop 赋值或运算顺序如何都不会返回 undefine. 可以安全使用..  
所以说到头还是IE的问题咯. 杯具…  
精神有点恍惚，不知道有没有表达清楚。  
不过最后总结出来这句实验过OK，大家放心使用；

**var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;**