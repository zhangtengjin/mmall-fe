/*
* @Author: 12574
* @Date:   2018-04-23 17:04:03
* @Last Modified by:   12574
* @Last Modified time: 2018-04-25 13:41:24
*/
'use strict';

var _mm = require('util/mm.js');

var _address = {
    // 获取地址列表
    getAddressList : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/shipping/list.do'),
            data    : {
            	pageSize : 50
            },
            success : resolve,
            error   : reject
        });
    },
    // 新建收件人地址
    save : function(addressInfo,resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/shipping/add.do'),
            data    :addressInfo,
            success : resolve,
            error   : reject
        });
    },
    // 更新收件人信息
    update : function(addressInfo,resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/shipping/update.do'),
            data    :addressInfo,
            success : resolve,
            error   : reject
        });
    },
    // 删除收件人
    deleteAddress : function(shippingId,resolve, reject){
         _mm.request({
            url     : _mm.getServerUrl('/shipping/del.do'),
            data    : {
                shippingId : shippingId
            },
            success : resolve,
            error   : reject
        });
    },
    // 获取收件人信息
    getAddress : function(shippingId,resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/shipping/select.do'),
            data    : {
                shippingId : shippingId
            },
            success : resolve,
            error   : reject
        });
    }
}
module.exports = _address;