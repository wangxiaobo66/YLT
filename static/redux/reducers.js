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

const { } = require('../page/out-login/actions');
function outLogin(state={},action){
    switch (action.type){
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

const { SERVICE_LIST , SERVICE_DETAIL , SERVICE_EXPORT } = require('../page/service/actions');//服务
function service(state={data:"",detail:"",type:""},action){
    switch (action.type){
        case SERVICE_LIST:
            let data = {data:action.data};
            return Object.assign({},state,data);
        case SERVICE_DETAIL:
            let detail = {detail:action.data};
            return Object.assign({},state,detail);
        case SERVICE_EXPORT:
            let type = {type:action.data};
            return Object.assign({},state,type);
        default:
            return state;
    }
}

const { PORT , TREE , GOODS , LENGTH , LIST , DETAIL } = require('../page/ask-buy/actions');//求购
function askBuy(state={port:"",tree:"",goods:"",length:"",list:"",detail:""},action){
    switch (action.type){
        case PORT:
            let port = {port:action.data};
            return Object.assign({},state,port);
        case TREE:
            let tree = {tree:action.data};
            return Object.assign({},state,tree);
        case GOODS:
            let goods = {goods:action.data};
            return Object.assign({},state,goods);
        case LENGTH:
            let length = {length:action.data};
            return Object.assign({},state,length);
        case LIST:
            let list = {list:action.data};
            return Object.assign({},state,list);
        case DETAIL:
            let detail = {detail:action.data};
            return Object.assign({},state,detail);
        default:
            return state;
    }
}
export const YLT = combineReducers({
    index,//首页
    outLogin,//站外登录
    register,//站外注册,站内补充
    service,//服务列表
    askBuy//求购
});