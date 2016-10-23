/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/22
 */

let util = require('../../js/app/util');

const URL_ADD_GG = '/subscript/addStandard';
const URL_ADD_CPH = '/subscript/addVehiclenum';

export default {
    addGg(param = {}) {
        return util.postRequest(URL_ADD_GG, param).then((rep) => {
            return rep.json();
        });
    },
    addCph(param = {}) {
        return util.postRequest(URL_ADD_CPH, param).then((rep) => {
            return rep.json();
        });
    }
}
