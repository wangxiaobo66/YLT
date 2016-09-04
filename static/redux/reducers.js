import { combineReducers } from 'redux'

const {INDEX_NUM} = require('../page/index/actions');
function index(state={num:1},action){
    switch (action.type) {
        case INDEX_NUM:
            let num = {num:0};
            return Object.assign({},state,num);
        default:
            return state;
    }
}

export const YLT = combineReducers({
    index
});