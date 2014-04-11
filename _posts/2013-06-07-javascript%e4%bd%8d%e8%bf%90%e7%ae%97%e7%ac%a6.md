---
layout: post
title: javascript位运算符
date: 2013-06-07 10:31
author: admin
comments: true
categories: [转载的]
tags: []
---
javascript的位操作在整数的二进制数字（或位）上进行。

<b>位与&":</b>对操作数进行二进制与的操作，如果两个操作数的某一位都为1，将对应的结果位设为1。因此0x0007&0x0003的结果为0x003。此操作可用于检查一个对象是否有一组属性或标记。表1-4显示了一个宠物对象的标记。一个小型、年
老、棕色的狗可以用64+16十8+2 = 90来标记。
<img src="http://huugle.org/meta/img/20130607100357.png" alt="" />
搜索一个有特定标记的宠物，只需要和搜索值进行位与操作。下面的代码搜索大型、年轻和白色的宠物（猫狗都可以〉：
<pre>
var searchFlags = 128 + 32 + 4;
var pets = []; // This is an array full of pet objects.
var numPets = pets.length;
for (var i = 0; i < numPets; i++) {
	if (searchFlags & pets[i].flags === searchFlags) {
		/* Found a Match! Do something. */
	}
}
</pre>
整型有32位来表示不同的标记，而相比之下其他方法，如分开表示标记或其他类型的条件测试，要慢许多。比如:
<pre>
var search ={'big','young','white'};
var pets = []; // This is an array full of pet objects.
var numPets = pets.length;
for (var i = 0; i < numPets; i++) {
	// The following inner loop makes things much slower.
	for (var c = 0; c < search.length; c++) {
		// Check if the property exists in the pet object,
		if (pets[i][search[c]] = * undefined) break;
	}
	if (c == search.length) {
		/* Found a Match! Do something. */
	}
}
</pre>
&运箅符也可达到类似取余运箅符（%）的效果，也就是返回除法后的余数。下面的代码将保证变量value总是在0到7之间：
<pre>
value &= 7; // Equivalent to value % 8;
</pre>
不过这种等价性只有在&后面的值是2的幂-1 (1， 3， 6, 15, 31，...）时才成立。
位或（x|y):对操作数进行二进制或的操作，如果两个操作数的某一位至少有一个为1，将对应的结果位设为1。因此0\0007|^0003的结果为^0007。

<b>位异或（i^y):</b>对操作数进行二进制异或的操作，如果两个操作的某一位只有一个为1，将对应的结果位设为1。因此0x000^0x0001的结果是0x0001,而0x0001^0x0001的结果是0\0000。这可以用于方便地切换变量：
<pre>
toggle ^= 1;
</pre>
每次执行toggle^=1;，toggle值将在1和0值之间转换（假设原来的值是1或0)。下面是等价的if-else代码：
<pre>
if (toggle) {
	toggle = 0;
} else {
	toggle = i;
}
</pre>
或者：
<pre>
toggle = toggle ? 0:1;
</pre>
<b>位非（~x):</b>对所有位进行取反。例如11100111将变为00011000。如果操作数是有符号整数（最左位为符号位），则〜操作符等于取负减1 (前面提过补码中取负对应各位取反加1)。


位左移（x << numBits):对x的二进制向左移 numBits 位。所有位向左移，最左的位丢失，0填补最右的位。这等价于无符号整数的乘法x*2^mimBits。例如：
<pre>
y = 5 << 1; // y =10; Equivalent to Math.floor(5 * (2^l)).
y = 5 << 2; // y = 20; Equivalent to Math.floor(5 * (2^2)).
y =5 << 3; // y =40; Equivalent to Math.floor(5 * (2^3)).
</pre>
测试显示左移位运算和对应的乘法运算符（*)相比没有性能提升。算术位右移（x>>numBits)-对x的二进制向右移叫numBits位。除了 （最左）符号位，所有位向右移，最右位丢失。这相当于有符号整数除法x/2^numBits。例如:
<pre>
y = 10 >>1; // y = 5； Equivalent to Math.floor(5 I (2^l)).
y = 10 >> 2; // y=2; Equivalent to Math.floor(5 / (2^2)).
y - 10 >> 3;// y = 1； Equivalent to Math.floor(5 I (2^3)).
</pre>
测试显示右移位运算和对应的除法运箅符（/)相比没有性能提升。

下面的代码看起来毫无用处：
<pre>
x = y >> 0;
</pre>
但是它使得javascript调用其内部的整数转换函数，剔除数字的小数部分。这实际上是一个快速的Math.floorO函数。图1-4显示其在IE8、Google Chrome和Safari 5.0中都有速度提升。
<b>逻辑位右移（x>>>y):</b>很少用到，类似>>操作符，但符号位不保留而填补为0。对正数来说，这和>>操作符没两样；对负数来说，逻辑位右移的结果将成正数。例如:
<pre>
y = 10 >>> 1; // y=5;
y = -10 >>> 2； // y = 1073741821;
y = -10 >>> 3； // y = 536870910;
</pre>
<img src="http://huugle.org/meta/img/20130607102021.png" alt="" />
