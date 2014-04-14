---
layout: post
title: zt:javascript keycode大全
comments: 'true'
categories:
  - 转载的
---
keycode 8 = BackSpace BackSpace  
keycode 9 = Tab Tab  
keycode 12 = Clear  
keycode 13 = Enter  
keycode 16 = Shift_L  
keycode 17 = Control_L  
keycode 18 = Alt_L  
keycode 19 = Pause  
keycode 20 = Caps_Lock  
keycode 27 = Escape Escape  
keycode 32 = space space  
keycode 33 = Prior  
keycode 34 = Next  
keycode 35 = End  
keycode 36 = Home  
keycode 37 = Left  
keycode 38 = Up  
keycode 39 = Right  
keycode 40 = Down  
keycode 41 = Select  
keycode 42 = Print  
keycode 43 = Execute  
keycode 45 = Insert  
keycode 46 = Delete  
keycode 47 = Help  
keycode 48 = 0 equal braceright  
keycode 49 = 1 exclam onesuperior  
keycode 50 = 2 quotedbl twosuperior  
keycode 51 = 3 section threesuperior  
keycode 52 = 4 dollar  
keycode 53 = 5 percent  
keycode 54 = 6 ampersand  
keycode 55 = 7 slash braceleft  
keycode 56 = 8 parenleft bracketleft  
keycode 57 = 9 parenright bracketright  
keycode 65 = a A  
keycode 66 = b B  
keycode 67 = c C  
keycode 68 = d D  
keycode 69 = e E EuroSign  
keycode 70 = f F  
keycode 71 = g G  
keycode 72 = h H  
keycode 73 = i I  
keycode 74 = j J  
keycode 75 = k K  
keycode 76 = l L  
keycode 77 = m M mu  
keycode 78 = n N  
keycode 79 = o O  
keycode 80 = p P  
keycode 81 = q Q at  
keycode 82 = r R  
keycode 83 = s S  
keycode 84 = t T  
keycode 85 = u U  
keycode 86 = v V  
keycode 87 = w W  
keycode 88 = x X  
keycode 89 = y Y  
keycode 90 = z Z  
keycode 96 = KP\_0 KP\_0  
keycode 97 = KP\_1 KP\_1  
keycode 98 = KP\_2 KP\_2  
keycode 99 = KP\_3 KP\_3  
keycode 100 = KP\_4 KP\_4  
keycode 101 = KP\_5 KP\_5  
keycode 102 = KP\_6 KP\_6  
keycode 103 = KP\_7 KP\_7  
keycode 104 = KP\_8 KP\_8  
keycode 105 = KP\_9 KP\_9  
keycode 106 = KP\_Multiply KP\_Multiply  
keycode 107 = KP\_Add KP\_Add  
keycode 108 = KP\_Separator KP\_Separator  
keycode 109 = KP\_Subtract KP\_Subtract  
keycode 110 = KP\_Decimal KP\_Decimal  
keycode 111 = KP\_Divide KP\_Divide  
keycode 112 = F1  
keycode 113 = F2  
keycode 114 = F3  
keycode 115 = F4  
keycode 116 = F5  
keycode 117 = F6  
keycode 118 = F7  
keycode 119 = F8  
keycode 120 = F9  
keycode 121 = F10  
keycode 122 = F11  
keycode 123 = F12  
keycode 124 = F13  
keycode 125 = F14  
keycode 126 = F15  
keycode 127 = F16  
keycode 128 = F17  
keycode 129 = F18  
keycode 130 = F19  
keycode 131 = F20  
keycode 132 = F21  
keycode 133 = F22  
keycode 134 = F23  
keycode 135 = F24  
keycode 136 = Num_Lock  
keycode 137 = Scroll_Lock  
keycode 187 = acute grave  
keycode 188 = comma semicolon  
keycode 189 = minus underscore  
keycode 190 = period colon  
keycode 192 = numbersign apostrophe  
keycode 210 = plusminus hyphen macron  
keycode 211 =  
keycode 212 = copyright registered  
keycode 213 = guillemotleft guillemotright  
keycode 214 = masculine ordfeminine  
keycode 215 = ae AE  
keycode 216 = cent yen  
keycode 217 = questiondown exclamdown  
keycode 218 = onequarter onehalf threequarters  
keycode 220 = less greater bar  
keycode 221 = plus asterisk asciitilde  
keycode 227 = multiply division  
keycode 228 = acircumflex Acircumflex  
keycode 229 = ecircumflex Ecircumflex  
keycode 230 = icircumflex Icircumflex  
keycode 231 = ocircumflex Ocircumflex  
keycode 232 = ucircumflex Ucircumflex  
keycode 233 = ntilde Ntilde  
keycode 234 = yacute Yacute  
keycode 235 = oslash Ooblique  
keycode 236 = aring Aring  
keycode 237 = ccedilla Ccedilla  
keycode 238 = thorn THORN  
keycode 239 = eth ETH  
keycode 240 = diaeresis cedilla currency  
keycode 241 = agrave Agrave atilde Atilde  
keycode 242 = egrave Egrave  
keycode 243 = igrave Igrave  
keycode 244 = ograve Ograve otilde Otilde  
keycode 245 = ugrave Ugrave  
keycode 246 = adiaeresis Adiaeresis  
keycode 247 = ediaeresis Ediaeresis  
keycode 248 = idiaeresis Idiaeresis  
keycode 249 = odiaeresis Odiaeresis  
keycode 250 = udiaeresis Udiaeresis  
keycode 251 = ssharp question backslash  
keycode 252 = asciicircum degree  
keycode 253 = 3 sterling  
keycode 254 = Mode_switch

使用  
<script language=&#8221;javascript&#8221;>  
function keyevent(){  
if(event.keyCode==13)  
alert(&#8220;#$%#%#^^%&#8221;);  
}  
document.onkeydown = keyevent;  
</script>  
event.keyCode值為37﹐38﹐39﹐40對應按下的方向鍵分別是 左﹐上﹐右﹐下

&#8220;javascript:if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;&#8221;);

if(event.keycode==13)就代表按下的是回车键盘

&#8220;javascript:if (event.keyCode > 45 && event.keyCode < 57) event.returnValue = false;&#8221;);

<html>  
<!&#8211;//this code by hongseheike&#8211;>  
<head>  
<script language=&#8221;javascript&#8221;>  
ns4 = (document.layers) ? true : false;  
ie4 = (document.all) ? true : false;  
function keyDown(e){  
if(ns4){  
var nkey=e.which;  
var iekey=&#8217;现在是ns浏览器&#8217;;  
var realkey=String.fromCharCode(e.which);  
}  
if(ie4){  
var iekey=event.keyCode;  
var nkey=&#8217;现在是ie浏览器&#8217;;  
var realkey=String.fromCharCode(event.keyCode);  
if(event.keyCode==32){realkey=&#8221; 空格&#8221;}  
if(event.keyCode==13){realkey=&#8221; 回车&#8221;}  
if(event.keyCode==27){realkey=&#8221; Esc&#8221;}  
if(event.keyCode==16){realkey=&#8221; Shift&#8221;}  
if(event.keyCode==17){realkey=&#8221; Ctrl&#8221;}  
if(event.keyCode==18){realkey=&#8221; Alt&#8221;}  
}  
alert(&#8216;ns浏览器中键值:&#8217;+nkey+&#8217;n'+&#8217;ie浏览器中键值:&#8217;+iekey+&#8217;n'+&#8217;实际键为&#8217;+realkey);  
}  
document.onkeydown = keyDown;  
if(ns4){  
document.captureEvents(Event.KEYDOWN);}  
</script>  
</head>  
<body>  
//Javascript Document  
<hr>  
<center>  
<h3>请按任意一个键。。。。</h3>  
</center>  
</body>  
</html>

\***\***\***\***\***\***\***\***\***\***\***\***\***\***\***\***\***\***\***\***\***\***\****  
使用javascript在WEB页面中截获键盘输入  
使用event对象的keyCode属性判断输入的键值  
if(event.keyCode==13)alert(“enter!”);  
键值对应表  
A　　0X65 　U 　　0X85  
B　　0X66　 V　　 0X86  
C　　0X67　 W　　 0X87  
D　　0X68　 X 　　0X88  
E　　0X69　 Y　　 0X89  
F　　0X70　 Z　　 0X90  
G　　0X71　 0　　 0X48  
H　　0X72　 1　　 0X49  
I　　0X73　 2　　 0X50  
J　　0X74　 3 　　0X51  
K　　0X75　 4 　　0X52  
L　　0X76　 5 　　0X53  
M　　0X77　 6　　 0X54  
N　　0X78 　7 　　0X55  
O　　0X79 　8 　　0X56  
P　　0X80 　9 　　0X57  
Q　　0X81　ESC　　0X1B  
R　　0X82　CTRL 　0X11  
S　　0X83　SHIFT　0X10  
T　　0X84　ENTER　0XD

如果要使用组合键，则可以利用event.ctrlKey，event.shiftKey，event .altKey判断是否按下了ctrl键、shift键以及alt键

http://unixpapa.com/js/key.html

&nbsp;