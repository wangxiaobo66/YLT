import { combineReducers } from 'redux';

import subscribeReducer from '../page/subscribe/reducer';

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

export const YLT = combineReducers({
    index,
    outLogin,
    subscribeReducer
});