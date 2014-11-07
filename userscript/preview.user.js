// ==UserScript==
// @name         preview
// @namespace    http://huugle.org/userscript/
// @version      0.2
// @description  preview
// @author       huugle
// @match        http://www.dressbee-ceshi.com/all-you-need-know*
// ==/UserScript==
$(function(){
	var templ=['<style>',
'/*',
'    CodeMirror',
'    ',
' */',
'.CodeMirror{font-family:monospace;height:600px;background-color: #fff;}',
'.CodeMirror-scroll{overflow:auto}',
'.CodeMirror-lines{padding:4px 0;line-height:1.2em}',
'.CodeMirror pre{padding:0 4px}',
'.CodeMirror-scrollbar-filler{background-color:#fff}',
'.CodeMirror-gutters{border-right:1px solid #eee;background-color:#fbfbfb}',
'.CodeMirror-linenumbers{}',
'.CodeMirror-linenumber{padding:0 3px 0 5px;min-width:20px;text-align:right;color:#999}',
'.CodeMirror pre.CodeMirror-cursor{border-left:1px solid black}',
'.CodeMirror pre.CodeMirror-secondarycursor{border-left:1px solid silver}',
'.cm-keymap-fat-cursor pre.CodeMirror-cursor{width:auto;border:0;background:transparent;background:rgba(0,200,0,.4);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#6600c800,endColorstr=#4c00c800)}',
'.cm-keymap-fat-cursor pre.CodeMirror-cursor:not(#nonsense_id){filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}',
'.CodeMirror pre.CodeMirror-cursor.CodeMirror-overwrite{}',
'.cm-s-default .cm-keyword{color:#708}',
'.cm-s-default .cm-atom{color:#70a145}',
'.cm-s-default .cm-number{color:#70a145}',
'.cm-s-default .cm-def{color:#00f}',
'.cm-s-default .cm-variable{color:#000}',
'.cm-s-default .cm-variable-2{color:#05a}',
'.cm-s-default .cm-variable-3{color:#085}',
'.cm-s-default .cm-property{color:#d1431c}',
'.cm-s-default .cm-operator{color:#000}',
'.cm-s-default .cm-comment{color:#b2b2b2;font-weight:400}',
'.cm-s-default .cm-string{color:#d44950}',
'.cm-s-default .cm-string-2{color:#9d937c}',
'.cm-s-default .cm-meta{color:#b2b2b2}',
'.cm-s-default .cm-error{color:red}',
'.cm-s-default .cm-qualifier{color:#2F6F9F}',
'.cm-s-default .cm-builtin{color:#30a}',
'.cm-s-default .cm-bracket{color:#997}',
'.cm-s-default .cm-tag{color:#2F6F9F}',
'.cm-s-default .cm-attribute{color:#4F9FCF}',
'.cm-s-default .cm-header{color:blue}',
'.cm-s-default .cm-quote{color:#090}',
'.cm-s-default .cm-hr{color:#999}',
'.cm-s-default .cm-link{color:#00c}',
'.cm-negative{color:#d44}',
'.cm-positive{color:#292}',
'.cm-header,.cm-strong{font-weight:700}',
'.cm-em{font-style:italic}',
'.cm-emstrong{font-style:italic;font-weight:700}',
'.cm-link{text-decoration:underline}',
'.cm-invalidchar{color:red}',
'div.CodeMirror span.CodeMirror-matchingbracket{color:#0f0}',
'div.CodeMirror span.CodeMirror-nonmatchingbracket{color:#f22}',
'.CodeMirror{line-height:1;position:relative;overflow:hidden}',
'.CodeMirror-scroll{margin-bottom:-30px;margin-right:-30px;padding-bottom:30px;padding-right:30px;height:100%;outline:0;position:relative}',
'.CodeMirror-sizer{position:relative}',
'.CodeMirror-vscrollbar,.CodeMirror-hscrollbar,.CodeMirror-scrollbar-filler{position:absolute;z-index:6;display:none}',
'.CodeMirror-vscrollbar{right:0;top:0;overflow-x:hidden;overflow-y:scroll}',
'.CodeMirror-hscrollbar{bottom:0;left:0;overflow-y:hidden;overflow-x:scroll}',
'.CodeMirror-scrollbar-filler{right:0;bottom:0;z-index:6}',
'.CodeMirror-gutters{position:absolute;left:0;top:0;height:100%;z-index:3}',
'.CodeMirror-gutter{height:100%;display:inline-block;*zoom:1;*display:inline}',
'.CodeMirror-gutter-elt{position:absolute;cursor:default;z-index:4}',
'.CodeMirror-lines{cursor:text}',
'.CodeMirror pre{-moz-border-radius:0;-webkit-border-radius:0;-o-border-radius:0;border-radius:0;border-width:0;background:transparent;font-family:inherit;font-size:inherit;margin:0;white-space:pre;word-wrap:normal;line-height:inherit;color:inherit;z-index:2;position:relative;overflow:visible}',
'.CodeMirror-wrap pre{word-wrap:break-word;white-space:pre-wrap;word-break:normal}',
'.CodeMirror-linebackground{position:absolute;left:0;right:0;top:0;bottom:0;z-index:0}',
'.CodeMirror-linewidget{position:relative;z-index:2}',
'.CodeMirror-wrap .CodeMirror-scroll{overflow-x:hidden}',
'.CodeMirror-measure{position:absolute;width:100%;height:0;overflow:hidden;visibility:hidden}',
'.CodeMirror-measure pre{position:static}',
'.CodeMirror pre.CodeMirror-cursor{position:absolute;visibility:hidden;border-right:0;width:0}',
'.CodeMirror-focused pre.CodeMirror-cursor{visibility:visible}',
'.CodeMirror-selected{background:#d9d9d9}',
'.CodeMirror-focused .CodeMirror-selected{background:#d7d4f0}',
'.CodeMirror-searching{background:#ffa;background:rgba(255,255,0,.4)}',
'.CodeMirror span{*vertical-align:text-bottom}',
'@media print{.CodeMirror pre.CodeMirror-cursor{visibility:hidden}}',
' .user-preview{position: fixed;right:-45px;top:0;bottom:0;background-color: rgba(0,0,0,0.85);z-index: 9999;width:30px;padding: 5px;',
'    -webkit-transition: 0.35s;',
'    -moz-transition: 0.35s;',
'         transition: 0.35s;',
' } ',
' #user-preview-open{',
'        position: absolute;',
'        left: -45px;',
'        bottom: 0;',
'        display: block; /* show this only on small screens */',
'        background: rgba(0,0,0,0.7);',
'        font-size: 11px;',
'        width: 30px;',
'        height:30px;',
'        padding:10px;',
'    }  ',
' .user-preview.open{width: 600px;padding:0 10px;right:0;}',
' .user-preview.open #user-preview-open{}',
'   .user-preview.open #user-preview-open span {',
'            background: transparent;',
'        }',
'       .user-preview.open #user-preview-open span:before {',
'                -webkit-transform: rotate(45deg) translate(8px,8px);',
'                   -moz-transform: rotate(45deg) translate(8px,8px);',
'                        transform: rotate(45deg) translate(8px,8px);',
'            }',
'        .user-preview.open #user-preview-open span:after {',
'                -webkit-transform: rotate(-45deg) translate(8px,-6px);',
'                   -moz-transform: rotate(-45deg) translate(8px,-6px);',
'                        transform: rotate(-45deg) translate(8px,-6px);',
'            }',
'        #text{position: absolute;margin-top: 10px;width:99%;min-height:80%;background-color:rgba(255,255,255,0.85);}',
'</style>',
'<script src="http://sally.huugle.org/assets/plugins/sallyedit/codemirror.min.js"></script>',
'<script src="http://sally.huugle.org/assets/plugins/sallyedit/emmet.min.js"></script>',
'<div class="user-preview" id="user-preview">',
'    <i id="user-preview-open" class="btn-open" ><span></span></i>',
'    <div class="tit">输入内容即可看到效果</div>',
'    <div class="user-preview-box">',
'        <textarea name="" cols="" rows="" id="text"></textarea>',
'    </div>',
'</div>'].join("");
var tem=document.createElement("div");
tem.innerHTML=templ;
document.body.appendChild(tem);
	$(document).on("click","#user-preview-open",function(e){
		$("#user-preview").toggleClass("open");
	});

//代码高亮
var item=$(".tab-bd .tab-item").eq(0);
var edit = {
    add: function(e, type, upe) {
      var editor = CodeMirror.fromTextArea(e, {
        mode: type,
        lineNumbers: true,
        tabMode: 'indent'
      });
      editor.on("change", function() {
        clearTimeout(this.delay);
        this.delay = setTimeout(updatehtml, 300);
      });
      function updatehtml() {
      	var text=editor.getValue();
      	var templHTML=$("<div>"+text+"</div>").find(".templ");
      	if(templHTML.length){
            $tar.html(templ.html());
         }else{
         	item.html(text);
         }
      }
      setTimeout(updatehtml, 300);
      return editor;
    }
  }
  // 初始化设置
  var code = document.getElementById('text'),
      previewFrame = document.getElementById('text');
  var html = edit.add(code, 'text/html', item);
})