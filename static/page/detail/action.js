/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/4
 */

export const setName = function(name) {
    return function (dispatch) {
        debugger;
        return dispatch({
            type: 'SET_NAME',
            name: name
        });
    }
};

export const setAge = function (age) {
    return function (dispatch) {
        return {
            type: 'SET_AGE',
            age: age
        };
    }
};

export const SET_NAME = 'SET_NAME';
export const SET_AGE = 'SET_AGE';