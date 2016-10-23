/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/22
 */

let util = require('../../js/app/util');

export const ADD_GG = 'ADD_GG';
export const ADD_CPH = 'ADD_CPH';

const URL_ADD_GG = '/subscript/addStandard';
const URL_ADD_CPH = '/subscript/addVehiclenum';

export const service = {
    addGg(param = {}) {
        return util.postRequest(URL_ADD_GG, param);
    },
    addCph(param = {}) {
        return util.postRequest(URL_ADD_CPH, param);
    }
};

export default {
    addGg(param = {}) {
        return function (dispatch) {
            return util.postRequest(URL_ADD_GG, param).then((res) => {
                res.json().then((json) => {
                    return dispatch({
                        type: ADD_GG,
                        data: json.data
                    });
                });
            });
        };
    },
    addCph(param = {}) {
        return function (dispatch) {
            return util.postRequest(URL_ADD_CPH, param).then((res) => {
                res.json().then((json) => {
                    return dispatch({
                        type: ADD_CPH,
                        data: json.data
                    });
                });
            });
        };
    }
}
