/*
* @Author: 12574
* @Date:   2018-04-25 21:20:18
* @Last Modified by:   12574
* @Last Modified time: 2018-04-25 21:31:06
*/
'use strict';

var _mm = require('util/mm.js');

var _payment = {
    // 获取支付信息
    getPaymentInfo : function(orderNumber,resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/order/pay.do'),
            data : {
            	orderNo : orderNumber
            },
            success : resolve,
            error   : reject
        });
    },
    // 获取订单状态
    getPaymentStatus : function(orderNumber,resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/order/query_order_pay_status.do'),
            data : {
                orderNo : orderNumber
            },
            success : resolve,
            error   : reject
        });
    }
}
module.exports = _payment;