/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/22
 */

let util = require('../../js/app/util');
import {LOGIN_USER_KEY} from '../../js/app/contants';

const URL_ADD_GG = '/subscript/addStandard';
const URL_ADD_CPH = '/subscript/addVehiclenum';

export default {
    addGg(param = {}) {
        param.userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        return util.postRequest(URL_ADD_GG, param);
    },
    addCph(param = {}) {
        param.userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        return util.postRequest(URL_ADD_CPH, param);
    }
}
