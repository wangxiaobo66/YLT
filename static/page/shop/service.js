/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/23
 */

import util from '../../js/app/util';
import {LOGIN_USER_KEY} from '../../js/app/contants';

export default {

    /**
     * 店铺列表
     * @param param
     * @returns {Promise.<TResult>|*}
     */
    storeList(param = {}) {
        return util.postRequest('/store/storeList', param);
    },

    /**
     * 店铺主页列表分页时, 用到这个接口
     * @param param
     * @returns {*|Promise.<TResult>}
     */
    unsoldList(param = {}) {
        return util.postRequest('/unsold/unsoldList', param);
    },

    /**
     * 添加店铺
     * @param param
     * @returns {Promise.<TResult>|*}
     */
    addMyStore(param = {}) {
        param.userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        return util.postRequest('/store/addStore', param);
    },

    /**
     * 更新店铺
     * @param param
     * @returns {Promise.<TResult>|*}
     */
    updateMyStore(param = {}) {
        param.userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        return util.postRequest('/store/updateStore', param);
    },

    /**
     * 删除店铺
     * @param param
     * @returns {Promise.<TResult>|*}
     */
    delMyStore(param = {}) {
        param.userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        return util.postRequest('/store/delStore', param);
    },

    showStore(param = {}) {
        return util.postRequest('/store/showStore', param);
    },

    /**
     * 详情
     * @param param
     * @returns {*|Promise.<TResult>}
     */
    showMyStore(param = {}) {
        param.userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        return util.postRequest('/store/showMyStore', param);
    }

}