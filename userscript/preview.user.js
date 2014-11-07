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
	  function setnav(_this){
        var topnav=_this.find(".topnav");
        if(topnav.length==0){
         _this.prepend('<div class="topnav-box" data-toggle-click="anchor"><div class="topnav" data-toggle-click="actived" data-roll="follow"></div></div>');   
         topnav=_this.find(".topnav");
          var temphtml="";
          var _id=_this.find("[id]");
           _id.each(function (index, elem) {
            var id=$(this).attr("id"); 
            var title=$(this).attr("title");
           temphtml+= '<a href="#'+id+'">'+title+' </a>';
        })
        topnav.html(temphtml);
        topnav.roll();
        }      
    }
	var timeout;
	$("#text").on("keyup change",function(e){
		var _this=$(this);
		clearTimeout(timeout)
		timeout=setTimeout(function(){
			var text=_this.val();
		 var templHTML=$("<div>"+text+"</div>").find(".templ");
        $(".tab-bd .tab-item").eq(0).html(templHTML.html());
      },250)
	})
})