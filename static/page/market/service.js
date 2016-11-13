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
    unsoldList(param = {}) {
        return util.postRequest('/unsold/unsoldList', param).then((rep) => {
            return rep.json();
        });
    },

    /**
     * 添加未售
     * @param param
     * @returns {Promise.<TResult>|*}
     */
    addUnsold(param = {}) {
        param.userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        return util.postRequest('/unsold/addUnsold', param).then((rep) => {
            return rep.json();
        });
    },

    /**
     * 更新未售
     * @param param
     * @returns {Promise.<TResult>|*}
     */
    updateUnsold(param = {}) {
        param.userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        return util.postRequest('/unsold/updateUnsold', param).then((rep) => {
            return rep.json();
        });
    },

    /**
     * 删除未售
     * @param param
     * @returns {Promise.<TResult>|*}
     */
    delUnsold(param = {}) {
        param.userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        return util.postRequest('/unsold/delUnsold', param).then((rep) => {
            return rep.json();
        });
    },

    /**
     * 详情
     * @param param
     * @returns {*|Promise.<TResult>}
     */
    showUnsold(param = {}) {
        return util.postRequest('/unsold/showUnsold', param).then((rep) => {
            return rep.json();
        });
    },

    
    /**
     * 规格列表
     * @param param
     * @returns {*|Promise.<TResult>}
     */
    dimList(param = {}) {
        param.userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        return util.postRequest('/unsold/dimList', param).then((rep) => {
            return rep.json();
        });
    },

    /**
     * 添加规格
     * @param param
     * @returns {*|Promise.<TResult>}
     */
    addDimension(param = {}) {
        param.userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        return util.postRequest('/unsold/addDimension', param).then((rep) => {
            return rep.json();
        });
    },

    /**
     * 删除规格
     * @param param
     * @returns {*|Promise.<TResult>}
     */
    delDimension(param = {}) {
        param.userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        return util.postRequest('/unsold/delDimension', param).then((rep) => {
            return rep.json();
        });
    },

    /**
     * 添加举报
     * @param param
     * @returns {*|Promise.<TResult>}
     */
    addUnsoldReport(param = {}) {
        param.userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        return util.postRequest('/unsold/addUnsoldReport', param).then((rep) => {
            return rep.json();
        });
    },

    /**
     * 添加关注
     * @param param
     * @returns {Promise.<TResult>|*}
     */
    addInterest(param = {}) {
        return util.postRequest('/interest/addInterest', param).then((rep) => {
            return rep.json();
        });
    },

    /**
     * 是否已关注
     * @param param
     * @returns {*|Promise.<TResult>}
     */
    showFocus(param = {}) {
        return util.postRequest('/interest/showFocus', param).then((rep) => {
            return rep.json();
        });
    }


}