//当前模块：API接口进行统一管理
import requests from './request';
import mockRequests from './mockAjax'
// import { get, method } from 'lodash';

//获取产品详细信息的接口 URL: /api/item/{ skuId } 请求方式：get

export const reqUserLogin = (data) => {
    return requests({ url: '/yonghu/login', data, method: 'post' })
}
export const reqUserRegister = (data) => {
    return requests({ url: '/yonghu/register ', data, method: 'post' })
}

export const reqAllpage = (data) => {
    // console.log(123);
    return requests({
        url: `/invitation/page?page=${data.page}&pageSize=${data.pageSize}`, method: 'get'
    });
}
export const reqhotpage = (data) => {
    return requests({ url: `/invitation/hotPage?page=${data.page}&pageSize=${data.pageSize}`, method: 'get' })
}
export const reqElitepage = (data) => {
    return requests({ url: `/invitation/ElitePage?page=${data.page}&pageSize=${data.pageSize}`,method: 'get' })
}
export const reqUserInfo = (id) => {
    return requests({ url: `/user/${id}`,method: 'get' })
}

export const reqSendin = (data) => {
    return requests({ url: `invitation`,data,method: 'post' })
}
// test
// export const reqUserLogin= (data)=>{
//     return requests({url:'/yonghu/login',method:'post',data})
// }
