import {reqUserLogin,reqAllpage} from '@/api' 
//登录与注册的模块
const state = {
    id:0,
    str:''
};

const mutations = {
    GETDETAILID(state,id){
        state.id = id
    },
    TOSEARCH(state,str){
        state.str = str
    }
};

const actions = {

    //  用户登录注册接口
    async Login({commit},data){
        //params形参,是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
        let result = await reqUserLogin(data)
        // console.log(result);
        if(result.code == 200){
            commit('Login',result.data)
        }
    },

    getEassy({commit},data){
        let result = reqAllpage(data)
        console.log(result);
    },
    getDetailId({commit},id){
        commit('GETDETAILID',id)
    },
    toSearch({commit},str){
            commit('TOSEARCH',str)
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