/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/23
 */

import util from '../../js/app/util';
import {LIMIT_COUNT} from '../../js/app/contants';

export default {

    /**
     * 店铺类型列表
     * @param param
     * @returns {Promise.<TResult>|*}
     */
    typeList(param = {}) {
        return util.postRequest('/store/typeList', param).then((rep) => {
            return rep.json();
        });
    },

    /**
     * 店铺列表
     * @param param
     * @returns {Promise.<TResult>|*}
     */
    myStoreList(param = {}, config = {}) {
        let limitCount = config.limitCount || LIMIT_COUNT;
        let limitStart = config.limitStart || 1;
        return util.postRequest(`/store/myStoreList/${limitStart}/${limitCount}`, param).then((rep) => {
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
    }

}