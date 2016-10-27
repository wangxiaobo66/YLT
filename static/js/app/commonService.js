/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/23
 */

import util from './util';
import {TYPE_TREE, TYPE_GOODS, TYPE_LENGTH, TYPE_PORT, TYPE_STORE} from './contants';

export default {
    treetypeList(param = {}) {
        return util.postRequest('/base/optns', {
            type: TYPE_TREE
        }).then((rep) => {
            return rep.json();
        });
    },
    goodstypeList(param = {}) {
        return util.postRequest('/base/optns', {
            type: TYPE_GOODS
        }).then((rep) => {
            return rep.json();
        });
    },
    lengthList(param = {}) {
        return util.postRequest('/base/optns', {
            type: TYPE_LENGTH
        }).then((rep) => {
            return rep.json();
        });
    },
    portList(param = {}) {
        return util.postRequest('/base/optns', {
            type: TYPE_PORT
        }).then((rep) => {
            return rep.json();
        });
    },
    /**
     * 店铺类型
     * @param param
     * @returns {Promise.<TResult>|*}
     */
    storeTypeList(param = {}) {
        return util.postRequest('/base/optns', {
            type: TYPE_STORE
        }).then((rep) => {
            return rep.json();
        });
    }
}