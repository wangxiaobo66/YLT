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
/*
function login(state={},action){
    switch (action.type){

    }
}
*/
export const YLT = combineReducers({
    index,
    //login
});