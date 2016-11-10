/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/23
 */

import util from '../../js/app/util';

export default {

    /**
     * 店铺列表
     * @param param
     * @returns {Promise.<TResult>|*}
     */
    unsoldList(param = {}) {
        return util.postRequest('/front.irito.server/unsold/unsoldList', param).then((rep) => {
            return rep.json();
        });
    },

    /**
     * 添加未售
     * @param param
     * @returns {Promise.<TResult>|*}
     */
    addUnsold(param = {}) {
        return util.postRequest('/front.irito.server/unsold/addUnsold', param).then((rep) => {
            return rep.json();
        });
    },

    /**
     * 更新未售
     * @param param
     * @returns {Promise.<TResult>|*}
     */
    updateUnsold(param = {}) {
        return util.postRequest('/front.irito.server/unsold/updateUnsold', param).then((rep) => {
            return rep.json();
        });
    },

    /**
     * 删除未售
     * @param param
     * @returns {Promise.<TResult>|*}
     */
    delUnsold(param = {}) {
        return util.postRequest('/front.irito.server/unsold/delUnsold', param).then((rep) => {
            return rep.json();
        });
    },

    /**
     * 详情
     * @param param
     * @returns {*|Promise.<TResult>}
     */
    showUnsold(param = {}) {
        return util.postRequest('/front.irito.server/unsold/showUnsold', param).then((rep) => {
            return rep.json();
        });
    },




    /**
     * 规格列表
     * @param param
     * @returns {*|Promise.<TResult>}
     */
    dimList(param = {}) {
        return util.postRequest('/front.irito.server/unsold/dimList', param).then((rep) => {
            return rep.json();
        });
    },

    /**
     * 添加规格
     * @param param
     * @returns {*|Promise.<TResult>}
     */
    addDimension(param = {}) {
        return util.postRequest('/front.irito.server/unsold/addDimension', param).then((rep) => {
            return rep.json();
        });
    },

    /**
     * 删除规格
     * @param param
     * @returns {*|Promise.<TResult>}
     */
    delDimension(param = {}) {
        return util.postRequest('/front.irito.server/unsold/delDimension', param).then((rep) => {
            return rep.json();
        });
    },

    /**
     * 添加举报
     * @param param
     * @returns {*|Promise.<TResult>}
     */
    addUnsoldReport(param = {}) {
        return util.postRequest('/front.irito.server/unsold/addUnsoldReport', param).then((rep) => {
            return rep.json();
        });
    },

    /**
     * 添加关注
     * @param param
     * @returns {Promise.<TResult>|*}
     */
    addInterest(param = {}) {
        return util.postRequest('/front.irito.server/interest/addInterest', param).then((rep) => {
            return rep.json();
        });
    }


}