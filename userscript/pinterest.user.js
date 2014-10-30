// ==UserScript==
// @name         pinterest 增强
// @namespace    http://huugle.org/
// @version      0.1
// @description  pinterest 显示网站
// @author       huugle
// @match        http://*.pinterest.com/*
// @grant        none
// ==/UserScript==

function addGlobalStyle(css,id) {
	var head, style;
	head = document.getElementsByTagName('head')[0];
	if (!head) { return; }
	style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = css;
	style.id=id;
	head.appendChild(style);
}
var style=".Pin.summary .pinDomain{top:50px;display:block;z-index:999;opacity:1;height:35px;line-height:35px;background:rgba(0,0,0,0.72);}";
addGlobalStyle(style);