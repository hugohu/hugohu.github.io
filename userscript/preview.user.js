// ==UserScript==
// @name         preview
// @namespace    http://huugle.org/userscript/
// @version      0.1
// @description  preview
// @author       huugle
// @match        http://www.dressbee-ceshi.com/all-you-need-know*
// ==/UserScript==
$(function(){
	var templ=['<style>',
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
'<div class="user-preview" id="user-preview">',
'    <i id="user-preview-open" class="btn-open" ><span></span></i>',
'    <div class="tit">输入内容即可看到效果</div>',
'    <div class="user-preview-box">',
'        <textarea name="" cols="" rows="" id="text"></textarea>',
'    </div>',
'</div>'].join("");
$('body').append(templ);
	$(document).on("click","#user-preview-open",function(e){
		$("#user-preview").toggleClass("open");
	});
	$("#text").on("keyup",function(e){
		var text=$(this).val();
		$(".tab-bd .tab-item").eq(0).html(text);
		$("nav li").eq(0).trigger("click");
	})
})