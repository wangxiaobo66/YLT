/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/22
 */

let util = require('../../js/app/util');

const URL_ADD_GG = '/subscript/addStandard';
const URL_ADD_CPH = '/subscript/addVehiclenum';

export default {
    treetypeList(param = {}) {
        return util.postRequest('/treetypeList', param).then((rep) => {
            return rep.json();
        });
    },
    goodstypeList(param = {}) {
        return util.postRequest('/goodstypeList', param).then((rep) => {
            return rep.json();
        });
    },
    lengthList(param = {}) {
        return util.postRequest('/lengthList', param).then((rep) => {
            return rep.json();
        });
    },
    portList(param = {}) {
        return util.postRequest('/portList', param).then((rep) => {
            return rep.json();
        });
    },
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
