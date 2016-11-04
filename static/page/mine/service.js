/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/30
 */

import util from '../../js/app/util';

export default {

    /**
     * 显示用户消息
     * @param param
     * @returns {*|Promise.<TResult>}
     */
    detail(param = {}) {
        return util.postRequest('/user/showUser', param).then((rep) => {
            return rep.json();
        });
    },

    /**
     * 更新
     * @param param
     * @returns {*|Promise.<TResult>}
     */
    update(param = {}) {
        return util.postRequest('/user/updateUser', param).then((rep) => {
            return rep.json();
        });
    },

    /**
     * 获取验证码
     * @param param
     * @returns {*|Promise.<TResult>}
     */
    sendVerifyCode(param = {}) {
        return util.postRequest('/user/sendCode', param).then((rep) => {
            return rep.json();
        });
    },

    /**
     * 消息列表
     * @param param
     * @returns {*|Promise.<TResult>}
     */
    allList(param = {}) {
        return util.postRequest('/msg/allList', param).then((rep) => {
            return rep.json();
        });
    },

    /**
     * 消息会话列表
     * @param param
     * @returns {*|Promise.<TResult>}
     */
    msgList(param = {}) {
        return util.postRequest('/msg/msgList', param).then((rep) => {
            return rep.json();
        });
    },

    /**
     * 发送消息
     * @param param
     * @returns {*|Promise.<TResult>}
     */
    addMsg(param = {}) {
        return util.postRequest('/msg/addMsg', param).then((rep) => {
            return rep.json();
        });
    },

    /**
     * 添加用户反馈
     * @param param
     * @returns {*|Promise.<TResult>}
     */
    addFeedback(param = {}) {
        return util.postRequest('/feedback/addFeedback', param).then((rep) => {
            return rep.json();
        });
    }
    
}