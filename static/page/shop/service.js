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
    myStoreList(param = {}) {
        return util.postRequest('/store/myStoreList', param).then((rep) => {
            return rep.json();
        });
    },

    unsoldOrdersInStore(param = {}) {
        return util.postRequest('/store/unsoldOrdersInStore', param).then((rep) => {
            return rep.json();
        });
    },

    /**
     * 添加店铺
     * @param param
     * @returns {Promise.<TResult>|*}
     */
    addMyStore(param = {}) {
        return util.postRequest('/store/addMyStore', param).then((rep) => {
            return rep.json();
        });
    },

    /**
     * 更新店铺
     * @param param
     * @returns {Promise.<TResult>|*}
     */
    updateMyStore(param = {}) {
        return util.postRequest('/store/addMyStore', param).then((rep) => {
            return rep.json();
        });
    },

    /**
     * 删除店铺
     * @param param
     * @returns {Promise.<TResult>|*}
     */
    delMyStore(param = {}) {
        return util.postRequest('/store/addMyStore', param).then((rep) => {
            return rep.json();
        });
    },

    /**
     * 详情
     * @param param
     * @returns {*|Promise.<TResult>}
     */
    showMyStore(param = {}) {
        return util.postRequest('/store/showMyStore', param).then((rep) => {
            return rep.json();
        });
    }

}