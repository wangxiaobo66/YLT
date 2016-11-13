/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/23
 */

import util from './util';
import {TYPE_TREE, TYPE_GOODS, TYPE_LENGTH, TYPE_PORT, TYPE_STORE, TYPE_REPORT, LOGIN_USER_KEY} from './contants';

export default {
    treetypeList(param = {}) {
        return util.postRequest('/base/options', {
            type: TYPE_TREE
        });
    },
    goodstypeList(param = {}) {
        return util.postRequest('/base/options', {
            type: TYPE_GOODS
        });
    },
    lengthList(param = {}) {
        return util.postRequest('/base/options', {
            type: TYPE_LENGTH
        });
    },
    portList(param = {}) {
        return util.postRequest('/base/options', {
            type: TYPE_PORT
        });
    },
    /**
     * 店铺类型
     * @param param
     * @returns {Promise.<TResult>|*}
     */
    storeTypeList(param = {}) {
        return util.postRequest('/base/options', {
            type: TYPE_STORE
        });
    },
    /**
     * 举报类型
     * @param param
     * @returns {*|Promise.<TResult>}
     */
    reportTypeList(param = {}) {
        return util.postRequest('/base/options', {
            type: TYPE_REPORT
        });
    },


    // =====关注相关
    /**
     * 添加关注
     * @param param
     * @returns {Promise.<TResult>|*}
     */
    addInterest(param = {}) {
        param.userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        return util.postRequest('/interest/addInterest', param);
    },

    /**
     * 判断是否已关注
     * @param param
     * @returns {*|Promise.<TResult>}
     */
    showFocus(param = {}) {
        param.userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        return util.postRequest('/interest/showFocus', param);
    }
}