---
title: sublime text2 Emmet(原zen coding)快捷键
author: admin
layout: post
permalink: /?p=237
categories:
  - 转载的
---
可用的操作

展开缩写 &#8211; Tab键或按Ctrl + E

互动“展开缩写” &#8211; 按Ctrl + Alt + Enter键

对外的标签匹配对 &#8211; ^ D（MAC）/ Ctrl键 + ,（PC）

作用：选中光标所在的标签或文本,每多按一次都会向外层元素扩展选择。

标签匹配对向内 &#8211; ^ J / 按Ctrl + Alt +，

作用：选中光标所在的标签或文本,每多按一次都会向内层元素收缩选择。

对匹配 &#8211; ⇧^ T / 按Ctrl + Alt + J

作用：在标签的开始<>和结束</>来回跳转。

使用缩写包裹 &#8211; ^ W / Shift键+ Ctrl键+ G

ul.nav>li.nav-item$*>a|t |t能够去掉ul,ol等列表项的包裹内容标记，比如排序的数字。

ul>li[title=$#]*>{$#}+img[alt=$#] $#可以控制包裹内容位置

转到编辑点 &#8211; 按Ctrl + Alt +→或按Ctrl + Alt +←

使用缩写包裹 &#8211; ^ W / Shift键+ Ctrl键+ G

选择“属性值”html和css都可以选 &#8211; “ ⇧⌘。或⇧⌘ / 按Ctrl + Shift +。或Shift + Ctrl + ,

切换注释 &#8211; ⇧⌘/ / Shift + Ctrl键+ /

拆分/加入标签 &#8211; ⇧⌘ / Shift + Ctrl +\`

删掉标签间的内容，并合并标签开始和结束符。生成标签的开始和结束符。

删除标记 &#8211; ⌘&#8217; / Ctrl + Shift +;

快速删掉标签并保留标签中的内容调整缩进。

更新图片大小 &#8211; ⇧^ I / 按Ctrl + U

html和css中设置默认图片大小

评估数学表达式 &#8211; ⇧⌘Ÿ / Shift键+ Ctrl键+ Y

2*4 or 10/2 做简单的加减乘除算术

体现价值CSS &#8211; ⇧⌘直径 / 按Ctrl + Shift + R

统一修改css3数据，修改透明数值。

编码/解码图像数据：URL &#8211; ⇧^ D / 按Ctrl +&#8217;

图片转编码

递增/递减编号操作：

改变数值

增量为1：按Ctrl +↑

减1：按Ctrl +↓

增量0.1：Alt +↑

递减0.1：Alt +↓

10增量：⌥⌘↑ / Shift键+ Alt +↑

递减10：⌥⌘↓ / Shift键+ Alt +↓  
扩展支持

您可以轻松地扩展埃米特新的行动和过滤器或自定义现有的。在Emmet.sublime设置，定义extensions_path设置和Emmet将加载所有的js和JSON文件在启动时指定的文件夹中。  
覆盖键盘快捷键

崇高的文本是一个伟大的文本编辑器的功能和操作。这些行动必然的键盘快捷键，所以它几乎是不可能的第三方插件提供便利的插件的快捷方式。

如果你不喜欢默认的键盘对应，您可以禁用单独的键盘快捷键，disabled\_keymap\_actions偏好Emmet.sublime设置文件。

使用逗号分隔的列表中的动作的名称，缺省键盘快捷键应该被禁用。例如，如果你想释放Ctrl + E组合键（“展开缩写”），按Ctrl + U（“更新图像大小”）的快捷方式，你必须设置以下值：  
的“disabled\_keymap\_actions”：“expand\_abbreviation，update\_image_size”

您应该参考默认（您的操作系统的名称）。崇高的键盘映射文件的操作ID（ARGS /动作键）。

要禁用所有默认的快捷键，设定值：  
“disabled\_keymap\_actions”：“所有的”

这并不是说，如果你禁用了任何行动，像这样和你创建自己的键盘快捷键，你不应该使用emmet\_action\_enabled.ACTION_NAME情况下，因为这是关键，禁用行动。  
“救命啊！我的片段不工作了HTML / CSS文件！“

默认情况下，埃米特覆盖Tab键的行为，并扩大自己的缩写，而不是原生代码片段。您可以禁用此功能，在用户首选项（添加“disable\_tab\_abbreviations” 设置-设置用户文件），使用Ctrl + E组合键或按Ctrl + Alt + Enter键，扩大埃米特abbeviations或移动您的片段埃米特这里所描述的。我调查的可能性，以扩大本地的片段通过埃米特Tab键处理程序。

Ctrl+L

选择整行(按住-继续选择下行)

Ctrl+KK

从光标处删除至行尾

Ctrl+Shift+K

删除整行

Ctrl+Shift+D

复制光标所在整行，插入在该行之前

Ctrl+J

合并行(已选择需要合并的多行时)

Ctrl+KU

改为大写

Ctrl+KL

改为小写

Ctrl+D

选词(按住-继续选择下个相同的字符串)

Ctrl+M

光标移动至括号内开始或结束的位置

Ctrl+Shift+M

选择括号内的内容(按住-继续选择父括号)

Ctrl+/

注释整行(如已选择内容，同“Ctrl+Shift+/”效果)

Ctrl+Shift+/

注释已选择内容

Ctrl+Space

自动完成(win与系统快捷键冲突，需修改)

Ctrl+Z

撤销

Ctrl+Y

恢复撤销

Ctrl+Shift+V

粘贴并自动缩进(其它兄弟写的，实测win系统自动缩进无效)

Ctrl+M

光标跳至对应的括号

Alt+.

闭合当前标签

Ctrl+Shift+A

选择光标位置父标签对儿

Ctrl+Shift+[

折叠代码

Ctrl+Shift+]

展开代码

Ctrl+KT

折叠属性

Ctrl+K0

展开所有

Ctrl+U

软撤销

Ctrl+T

词互换

Ctrl+Enter

插入行后

Ctrl+Shift Enter

插入行前

Ctrl+K Backspace

从光标处删除至行首

Ctrl+Shift+UP

与上行互换

Ctrl+Shift+DOWN

与下行互换

Shift+Tab

去除缩进

Tab

缩进

F9

行排序(按a-z)