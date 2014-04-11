---
layout: post
title: javascript中的数据类型、Object与Function
date: 2013-03-27 15:58
author: admin
comments: true
categories: [转载的]
tags: []
---
<strong>1. 数据类型</strong>

javascript中包含6种数据类型：undefined、null、string、number、boolean和object。其中，前5 种是原始数据类型，object是对象类型。

object类型中包括Object、Function、String、Number、Boolean、Array、Regexp、Date、 Globel、Math、Error，以及宿主环境提供的object类型。

<strong> 2. 类型判断</strong>

通常在javascript中进行类型判断主要通过3种方式：typeof、instanceof、constructor。

<strong> 2.1 typeof</strong>

typeof操作可能返回的类型为undefined、object、number、string、function、boolean。但是会有一些情况并不能完全判断准确。比如typeof new String('')的值为object。

<strong> 2.2 constructor</strong>

有时候我们可能会很偷懒的使用a.constructor == String进行类型判断，但是constructor其实是不靠谱的东西。因为当我们调用a.constructor的时候，内部操作其实是 ToObject(a).prototype.constructor（ToObject是什么，看下文分解）。

看下面一段代码就能明白：
<pre>String.prototype.constructor=Number;

 	alert('test'.constructor==String);//Result：false</pre>
或者
<pre>function MyClass(){}

 	MyClass.prototype={};

 	alert((newMyClass).constructor==MyClass);//Result：false</pre>
而且，通过constructor并不能判断出对象实例类型的继承关系。因为javascript的继承其实是通过原型链实现的（原型链是什么，看下文分解）。

另外，null.constructor会抛出运行时的TypeError，所以使用constructor除了不靠谱外，还可能伴随着异常的风险。

<strong> 2.3 instanceof</strong>

例子：a instanceof String

关于object类型的判断，使用instanceof判断是比较靠谱的方法。instanceof所做的事情是，先取出类型对象(String) 的prototype成员(String.prototype)，然后和要判断类型的对象(a)的原型链中的对象逐个比较。当发现是一个对象的时候返回 true，原型链中当前节点是null的时候返回false。

类型判断示例：判断一个变量是否是字符串类型
<pre>functionis String(str){
	return(typeofstr=='string'||strinstanceofString);
	}</pre>
<strong>3. 类型转换</strong>

ecma262中描述了以下几种类型转换的操作：（还有其他的比如ToInt32等，这里就不列了） ToNumber：转换成number型 ToString：转换成string型 ToBoolean：转换成boolean型 ToObject：转换成object型 ToPrimitive：转换成原始类型

每种操作都描述了从什么类型转换成该类型的映射。比如上文的'a'.constructor中，就包含解析器使用ToObject将‘a’转换成 object的一个隐式操作。

这里想要主要说的是ToPrimitive。ToPrimitive用于转换成原始数据类型。当要转换的量已经是原始类型时，会直接返回。如果要转换的是一个Object，那会调用[[DefaultValue]]方法做转换。（[[DefaultValue]]是什么，下文分解）该方法可以传入一个hint参数，说明需要将Object转换成字符串或数字。如果要转换成字符串，则调用Object的toString方法，如果要转换成数字，则调用 Object的valueOf方法。具体在运行时什么时候应该转换成什么类型，请参考ecma262中关于expression的描述部分。

<strong>4. Object</strong>

除了5种原始类型外，一切都是Object，包括Object、Function、Array等等，他们的实例和构造器，都是Object。那 Object是一个什么东西呢？

Object是一个：无序的成员集合

它是一个集合，说明它包含0-n个成员。而它是无序的。

每一个成员由以下3个部分组成：名称、值、特征集合

下面的代码中： var obj={'key':'value'};

key就是成员名称，value就是值，obj这个Object从代码上看起来包含了一个成员，注意，是从代码上看而已。这里我们不去深究它先。

那特征集合是个什么东西呢？

javascript的对象成员可能包含下面几种特征的0个或多个：ReadOnly、DontEnum、DontDelete、 Internal。
<ul>
	<li>ReadOnly：拥有这个特征的成员是不能被程序修改的。</li>
	<li>DontEnum：拥有这个特征的成员是不能被for in遍历的。</li>
	<li>DontDelete：拥有这个特征的成员是不能被delete操作删除的。</li>
	<li>Internal：代表这个成员是内部成员。通常内部成员不能被程序以任何方式访问，但是有些javascript的引擎实现将它以特殊方式暴露，使得可以访问对象的某些内部成员。</li>
</ul>
一个对象的Internal成员以[[xxxx]]的方式来表示。

下面列一些和本博有关的的Object可能包含的internal成员。
<ul>
	<li>[[Class]]：表示该对象的类型。比如function Object的[[Class]]成员的值是"Function"</li>
	<li>[[Get]](PropertyName)：获取对象的属性值。</li>
	<li>[[DefaultValue]] (Hint)：用于ToPrimitive进行类型转换时调用。hint参数可能的值为"string"或"number"</li>
	<li>[[Prototype]]：[[Prototype]]成员实现了javascript中所谓的“原型链”。一个对象的[[Prototype]]成员可能是object对象，或者是null。只有Object.[[prototype]]为null，其他任何对象的[[Prototype]]成员都是一个Object</li>
	<li>[[Call]]：function Object特有的成员，在函数被调用的时候，就是调用的[[Call]]。</li>
	<li>[[Construct]]：function Object特有的成员，在函数作为构造器，被new操作符用于创建对象的时候，就是调用的[[Construct]]。</li>
	<li>[[Scope]]：[[Prototype]]成员实现了javascript中所谓的“作用域链”。</li>
</ul>
<strong>5. function Object的创建过程</strong>

解析器在遇到function declaration或者function expression的时候，会创建一个function Object。步骤大致如下：
<ol>
	<li>解析形参和函数体</li>
	<li>创建一个native ECMAScript Object：F</li>
	<li>设置F的[[Class]]、[[Prototype]]、[[Call]]、[[Construct]]、[[Scope]]、length属性</li>
	<li>创建一个new Object()：O</li>
	<li>设置O的constructor属性为F</li>
	<li>设置F的prototype属性为O</li>
</ol>
在这个创建过程里，要说明的几点是：
<ol>
	<li>步骤3中F的[[Prototype]]被设置为Function.prototype</li>
	<li>用户自定义的function，都会同时具有[[Call]]和[[Construct]]这两个internal属性</li>
	<li>解析器会自动给每一个function Object初始化一个prototype成员。而F.prototype.constructor == F，所以，当我们没有重新定义这个F的prototype成员的时候，F的实例的constructor成员是靠谱的。因为(new F).constructor其实方位的是F.prototype.constructor，而解析器默认初始化给你的 F.prototype.constructor就是F。</li>
	<li>关于[[scope]]和作用域链的问题，下文分解</li>
</ol>
还要提的一点是，function declaration和function expression是不一样的
<pre>function declaration： functionfn(){}

	function expression： vara=function(){};

	function(){};</pre>
<strong>6. 原型链</strong>
首先要澄清的一点是，我们通常会使用myfunction.prototype的方式进行原型扩展，所以我们在听到“原型链”这个词的时候，会觉得这里的“原型”指的是myfunction.prototype。其实不是，“原型”指的是对象的[[Prototype]]。当然，对象的 [[Prototype]]就是其真实构造器当前的prototype成员对象。

上文中有提过，一个我们通过程序创建的function Object，一定会包含[[Call]]和[[Construct]]这2个internal成员。它们做了什么事情呢？

[[Call]]:
<ol>
	<li>Establish a new execution context using F's FormalParameterList, the passed arguments list, and the this value as described in 10.2.3.</li>
	<li>Evaluate F's FunctionBody.</li>
	<li>Exit the execution context established in step 1, restoring the previous execution context.</li>
	<li>If Result(2). type is throw then throw Result(2). value.</li>
	<li>If Result(2). type is return then return Result(2). value.</li>
	<li>(Result(2). type must be normal.) Return undefined.</li>
</ol>
[[Construct]]：
<ol>
	<li>Create a new native ECMAScript object.</li>
	<li>Set the [[Class]] property of Result(1) to "Object".</li>
	<li>Get the value of the prototype property of F.</li>
	<li>If Result(3) is an object, set the [[Prototype]] property of Result(1) to Result(3).</li>
	<li>If Result(3) is not an object, set the [[Prototype]] property of Result(1) to the original Object prototype object as described in 15.2.3.1.</li>
	<li>Invoke the [[Call]] property of F, providing Result(1) as the this value and providing the argument list passed into [[Construct]] as the argument values.</li>
	<li>If Type(Result(6)) is Object then return Result(6).</li>
	<li>Return Result(1).</li>
</ol>
一切都很清楚了。当我们创建一个对象，也就是我们new的时候，调用的是function Object的[[Construct]]成员方法。在上面的描述中，3、4步描述了[[Prototype]]成员的创建过程，就是构造器的 prototype成员。

好的，那回到之前，我们使用obj.property来获取obj对象的属性的时候，其实调用的是obj对象的internal方法 [[Get]]。那我们看看[[Get]]方法调用做了哪些事情： If O doesn't have a property with name P, go to step 4. Get the value of the property. Return Result(2). If the [[Prototype]] of O is null, return undefined. Call the [[Get]] method of [[Prototype]] with property name P. Return Result(5).

可以看出来，当我们获取对象obj的某个成员的时候，会在obj对象自身成员里查找是否存在该成员。如果不包含，则到obj. [[Prototype]]这个对象中查找名字成员，如果还不存在，则到obj.[[Prototype]].[[Prototype]]这个对象里找，直到某个[[Prototype]]是null为止。查找的过程就是一个顺藤摸瓜的事情，这个藤就是我们所谓的“原型链”。

我不想说太多原型链和继承之间的关系与实现，这方面的资料在网络上已经太多太多。我只想把原型链脱光了告诉大家，原型链是什么。

<strong> 7. 函数调用过程与作用域链</strong>

讲到作用域链，就要扯到函数的调用。当我们有一个函数 functionfn(param){}

我们去调用它 fn(1);

这个时候解析器为我们做了什么呢？

有一定经验的javascript工程师也许会用过arguments、用过闭包、知道作用域，这一切的一切，都和execution context有关。

当我们进入一个函数调用的时候，解析器会为我们创建一个活动对象（Activation Object ），假设这里把这个活动对象叫做ac（为什么不叫ao呢，因为喜欢c）。然后做下面的事情：
<ol>
	<li>初始化arguments对象，并将它添加到这个ac中。这个时候，对象ac就拥有了一个name为arguments的成员。这里arguments初始化过程就不具体说了，感兴趣的可以看ecma262的章节10.1.8。</li>
	<li>解析形参，并使用函数调用时传递的参数初始化。在上面的调用例子fn(1)中，这个时候，ac就拥有了一个name为param的成员，这个成员的值为 1。</li>
	<li>对function declaration进行初始化，为所有FunctionBody中的function declaration，创建function Object，并添加到对象ac中作为ac的成员。在这一步，假设ac中已经包含了同名属性，会被覆盖掉。</li>
	<li>对var声明进行初始化，为所有var声明，在对象ac中创建同名成员，并初始化为undefined。在这一步，假设ac中已经包含了同名属性，不会被覆盖掉。</li>
	<li>初始化作用域链，并将这个作用域链与当前的执行上下文相关联。这个作用域链是一个链式列表，最前段是进入函数调用时初始化出来的活动对象ac，然后后面跟着的是该函数的[[scope]]的成员。[[scope]]是个什么东西呢，就是这个链。假如函数体中有创建function Object，叫做innerFn，那innerFn的[[scope]]成员，就是这个作用域链。当innerFn被调用时，会初始化新的活动对象，新的作用域链。新的作用域链就是初始化自这个新的活动对象和innerFn的[[scope]]。</li>
</ol>
那scope chain是什么作用呢？看下面的描述，来自10.1.4

During execution, the syntactic production PrimaryExpression : Identifier is evaluated using the following algorithm:
<ol>
	<li>Get the next object in the scope chain. If there isn't one, go to step 5.</li>
	<li>Call the [[HasProperty]] method of Result(1), passing the Identifier as the property name.</li>
	<li>If Result(2) is true, return a value of type Reference whose base object is Result(1) and whose property name is the Identifier.</li>
	<li>Go to step 1.</li>
	<li>Return a value of type Reference whose base object is null and whose property name is the Identifier. 可以看出，我们在访问一个变量的时候，其实是从和当前执行上下文相关的作用域链中查找成员。</li>
</ol>
在程序正常在全局下的函数，其[[scope]]成员的值是global object，所以无论任何调用，在作用域链的尾端，一定会是global object。在浏览器宿主环境下，就是window。

<strong>8. 函数调用过程中的this</strong>

在函数的调用中，this是个什么东西，又是由什么决定的呢？在ecma262中，这是个比较绕的东西，其描述散落在世界各地。

首先，在10.2.3中告诉我们： The caller provides the this value. If the this value provided by the caller is not an object (note that null is not an object), then the this value is the global object. 我们可以知道，caller可以提供给我们this。如果没有提供，则this为global object。问题又来了，caller是怎么提供this的？

在11.2.3中，找到如下关于Function calls的描述：The production CallExpression :MemberExpression Arguments is evaluated as follows:
<ol>
	<li>Evaluate MemberExpression.</li>
	<li>Evaluate Arguments, producing an internal list of argument values (see 11.2.4).</li>
	<li>Call GetValue(Result(1)).</li>
	<li>If Type(Result(3)) is not Object, throw a TypeError exception.</li>
	<li>If Result(3) does not implement the internal [[Call]] method, throw a TypeError exception.</li>
	<li>If Type(Result(1)) is Reference, Result(6) is GetBase(Result(1)). Otherwise, Result(6) is null.</li>
	<li>If Result(6) is an activation object, Result(7) is null. Otherwise, Result(7) is the same as Result(6).</li>
	<li>Call the [[Call]] method on Result(3), providing Result(7) as the this value and providing the list Result(2) as the argument values.</li>
	<li>Return Result(8).</li>
</ol>
从步骤6、7中可以看出来，如果MemberExpression的结果是一个Reference的话，提供的this应该是 GetBase(Reference)，否则是空。步骤7中还有描述了6的结果是活动对象的情况，我们这里忽略。 又有疑问了，Reference？Reference是什么，GetBase又是什么？

我们在8.7中，找到了Reference的答案。这里的描述比较长，我只摘了可以满足我们需要的一段： A Reference is a reference to a property of an object. A Reference consists of two components, the base object and the property name.

The following abstract operations are used in this specification to access the components of references:

GetBase(V). Returns the base object component of the reference V.

GetPropertyName(V). Returns the property name component of the reference V.

已经很明显了，一个Reference必须引用一个对象的一个属性。所以我们通过obj.method()来调用的时候，obj.method这个表达式生成了一个中间态的Reference，这个Reference的base object就是obj，所以GetBase的结果就是obj，于是obj被caller提供作this

我曾经看到很多文章，举了类似obj.method()这样的调用例子，认为obj就是caller，来解释这番话：

The caller provides the this value. If the this value provided by the caller is not an object (note that null is not an object), then the this value is the global object.

这其实是说不通的。

caller绝不可能是obj，否则被attachEvent的函数或对象方法，他们运行时的this就解释不通了。 所以，通过我们自己代码调用的函数，caller由脚本引擎执行控制所决定；在浏览器宿主环境通过事件触发的，caller由浏览器控制的行为所决定。

<strong>9. 关于原型链的补充——原型链会不会是圆形链</strong>
这个问题是telei同学提出的。答案是：不会

回头看看[[Construct]]的步骤，我们可以发现，创建一个对象obj时，obj.[[prototype]]成员被赋予其构造器的 prototype成员。但是当构造器的prototype成员被指向为另外一个对象的引用时，obj.[[prototype]]依然是其构造器的前 prototype对象。

描述代码如下：（注释里是说明）
<pre>functionA(){

 	this.testA=newFunction();

 	}

 	functionB(){

 	this.testB=newFunction();

 	}

 	vara=newA();

 	B.prototype=a;

 	//a.[[prototype]] == {};(不是真的等，{}表示的是Function A初始的prototype object。下同)

 	varb=newB();

 	//b.[[prototype]] == a;

 	//b.[[prototype]].[[prototype]] == a.[[prototype]] == {};

 	A.prototype=b;

 	vara2=newA();

 	//a2.[[prototype]] == b;

 	//a2.[[prototype]].[[prototype]] == b.[[prototype]] == a;

 	//a2.[[prototype]].[[prototype]].[[prototype]] == b.[[prototype]].[[prototype]] == a.[[prototype]] == {};</pre>
//最后测试一下，很搞笑的

alert(ainstanceofA);

最后特殊的解释：好吧，上面代码的最后出现了很搞笑的事情，合乎语言的实现，但不合乎正常以及不正常地球人的逻辑。 我们知道，a对象是被A构造器创建出来的，所以a是A的实例。 但是，上面类型判断那里有讲，instanceof是通过构造器prototype成员与对象原型链的比较来判断的。所以当对象a被创建后，如果创建它的构造器的prototype发生了变化，a就和他妈（构造器）没任何关系了。 看到这里，你确定你还想要在实例化对象后，修改构造器的prototype成另外一个对象吗？

http://blog.csdn.net/baiduforum/article/details/5381869
