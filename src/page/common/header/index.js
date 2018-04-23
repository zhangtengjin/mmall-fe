/*
* @Author: 12574
* @Date:   2018-04-19 19:23:28
* @Last Modified by:   12574
* @Last Modified time: 2018-04-22 18:29:18
*/
require('./index.css');
var _mm     = require('util/mm.js');
// 通用页面头部
var header = {
    init : function(){
      this.onload();
      this.bindEvent();
      return this;
    },
    onload: function(){
    	var keyword = _mm.getUrlParam('keyword');
    	// keyword存在，则回填
    	if (keyword) {
    		$('#search-input').val(keyword);
    	};
    },
    bindEvent : function(){
    	var _this = this;
    	// 点击搜索按钮以后，做搜索提交
       $("#search-btn").click(function(){
       		_this.searchSubmit();
       });
       // 输入回车后，做搜索提交
       $('#search-input').keyup(function(e){
       		if (e.keyCode === 13) {
       			_this.searchSubmit();
       		}
       });
    },
    // 搜索提交
    searchSubmit : function(){
    	var keyword = $.trim($("#search-input").val());
    	//如果提交有keyword，正常跳转到list页
    	if (keyword) {
    		window.location.href = './list.html?keyword=' + keyword;
    	}
    	//如果为空，直接返回首页
    	else{
    		_mm.goHome();
    	}
    }
};
header.init();

