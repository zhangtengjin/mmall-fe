/*
* @Author: 12574
* @Date:   2018-04-18 23:17:09
* @Last Modified by:   12574
* @Last Modified time: 2018-04-20 16:25:44
*/
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _mm = require('util/mm.js');

// _mm.request({
// 	url:'/product/list.do?keyword=1',
// 	success: function(res){
// 		console.log(res);
// 	},
// 	error: function(errMsg){
// 		console.log(errMsg);
// 	}
// });
navSide.init({
	name: 'pass-update'
});

