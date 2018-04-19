/*
* @Author: 12574
* @Date:   2018-04-19 21:11:19
* @Last Modified by:   12574
* @Last Modified time: 2018-04-19 22:16:12
*/
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function(){
	var type = _mm.getUrlParam('type') || 'default';
	$element = $('.' + type + '-success');
	//显示对应提示元素
	$element.show();
})