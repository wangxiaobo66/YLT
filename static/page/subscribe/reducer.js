/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/22
 */

import {ADD_GG, ADD_CPH} from './action';

export default function (state = {}, action) {
    switch (action.type) {
        case ADD_GG:
            return Object.assign({}, state, {
                data: action.data
            });
        case ADD_CPH:
            return Object.assign({}, state, {
                data: action.data
            });
        default:
            return state;
    }
};