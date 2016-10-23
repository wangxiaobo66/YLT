import { combineReducers } from 'redux'

const {INDEX_NUM} = require('../page/index/actions');
function index(state={num:1},action){
    switch (action.type) {
        case INDEX_NUM:
            let num = {num:action.num};
            return Object.assign({},state,num);
        default:
            return state;
    }
}

const { USER_LOGIN } = require('../page/out-login/actions');
function outLogin(state={},action){
    switch (action.type){
        case USER_LOGIN:
            let data = {data:action.data};
            return Object.assign({},state,data);
        default:
            return state;
    }
}

const { USER_REGISTER } = require('../page/register/actions');
function register(state={},action){
    switch (action.type){
        case USER_REGISTER:
            let data = {data:action.data};
            return Object.assign({},state,data);
        default:
            return state;
    }
}

export const YLT = combineReducers({
    index,//首页
    outLogin,//站外登录
    register//站外注册,站内补充
});