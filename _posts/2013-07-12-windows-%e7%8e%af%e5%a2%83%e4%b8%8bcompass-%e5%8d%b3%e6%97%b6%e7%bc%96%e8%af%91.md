---
title: windows 环境下compass 即时编译
author: admin
layout: post
permalink: /?p=382
categories:
  - 随笔
---
首先是下载ruby : http://rubyinstaller.org/

然后安装compass:  
win+r cmd 命令行:  
gem install compass 

compass 就安装好了

然后是配置sublime_text插件;  
直接插件库搜索compass 安装

具体看这里:https://github.com/WhatWeDo/Sublime-Text-2-Compass-Build-System 

config.rb的写法:

<pre>http_path = "/"
css_dir = "stylesheets"
sass_dir = "sass"
images_dir = "images"
javascripts_dir = "javascripts"
</pre>

对应路径放在文件夹里,信息信息看这里:

https://github.com/thesassway/sass-test/blob/master/config.rb

编译出现:  
出现[Decode error - output not utf-8]错误的

配置文件里,增加gbk或者bg2312的配置

<pre>{"cmd": ["compasswatch.bat", "${project_path:${folder}}", "${file_path}"],
 "encoding": "gb2312"
	}
</pre>

关于compass的教程看这里:http://www.ruanyifeng.com/blog/2012/11/compass.html

工具推荐:http://koala-app.com/index-zh.html