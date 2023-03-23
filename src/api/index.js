//当前模块：API接口进行统一管理
import requests from './request';
import mockRequests from './mockAjax'
// import { get, method } from 'lodash';

export const reqGetSearchInfo = (params) => {
    return requests({
        url: "/list",
        method: "post",
        data: params
    })
}

//获取产品详细信息的接口 URL: /api/item/{ skuId } 请求方式：get

export const reqGoodsInfo = (skuId) => {
    return requests({ url: `/item/${skuId}`, method: 'get' })
}

