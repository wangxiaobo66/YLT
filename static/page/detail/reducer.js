/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/4
 */

import {SET_NAME, SET_AGE} from './action';

let initState = {
    name: '111',
    age: 18
};

export default function (state = initState, action) {
    switch (action.type) {
        case SET_NAME:
            return Object.assign({}, state, {
                name: action.name
            });
        case SET_AGE:
            return Object.assign({}, state, {
                age: action.age
            });
        default:
            return state;
    }
};