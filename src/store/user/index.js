import {reqUserLogin} from '@/api' 
//登录与注册的模块
const state = {

};

const mutations = {

};

const actions = {
    async Login({commit},data){
        //params形参,是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
        let result = await reqUserLogin(data)
        console.log(result);
        if(result.code == 200){
            commit('Login',result.data)
        }
    }
};

const getters = {
    
};

export default{
    state,
    mutations,
    actions,
    getters
};