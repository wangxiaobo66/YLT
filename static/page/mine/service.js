/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/30
 */

import util from '../../js/app/util';
import {LOGIN_USER_KEY} from '../../js/app/contants';

export default {

    /**
     * 显示用户消息
     * @param param
     * @returns {*|Promise.<TResult>}
     */
    detail(param = {}) {
        param.userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        return util.postRequest('/user/mobileUser/show', param);
    },

    /**
     * 更新
     * @param param
     * @returns {*|Promise.<TResult>}
     */
    update(param = {}) {
        param.consumerId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        return util.postRequest('/user/mobileUser/update', param);
    },

    /**
     * 获取验证码
     * @param param
     * @returns {*|Promise.<TResult>}
     */
    sendVerifyCode(param = {}) {
        return util.postRequest('/user/code/create', param);
    },



    /**
     * 消息列表
     * @param param
     * @returns {*|Promise.<TResult>}
     */
    myTopList(param = {}) {
        param.userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        return util.postRequest('/msg/msgTopList', param);
    },

    /**
     * 消息会话列表
     * @param param
     * @returns {*|Promise.<TResult>}
     */
    msgList(param = {}) {
        param.userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        return util.postRequest('/msg/msgList', param);
    },

    /**
     * 发送消息
     * @param param
     * @returns {*|Promise.<TResult>}
     */
    addMsg(param = {}) {
        return util.postRequest('/msg/addMsg', param);
    },




    /**
     * 添加用户反馈
     * @param param
     * @returns {*|Promise.<TResult>}
     */
    addFeedback(param = {}) {
        param.consumerId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        return util.postRequest('/feedback/addFeedback', param);
    },





    /**
     * 关注列表
     * @param param
     * @returns {*|Promise.<TResult>}
     */
    interestList(param = {}) {
        param.userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        return util.postRequest('/interest/interestList', param);
    },

    /**
     * 取消关注
     * @param param
     * @returns {*|Promise.<TResult>}
     */
    delInterest(param = {}) {
        param.userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        return util.postRequest('/interest/delInterest', param);
    },



    /**
     * 我的未售列表
     * @param param
     * @returns {*|Promise.<TResult>}
     */
    showMyUnsoldList(param = {}) {
        param.userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        return util.postRequest('/unsold/unsoldList', param);
    },

    /**
     * 删除店铺
     * @param param
     * @returns {Promise.<TResult>|*}
     */
    delUnsold(param = {}) {
        return util.postRequest('/unsold/delUnsold', param);
    },



    showMyStore(param = {}) {
        param.userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        return util.postRequest('/store/showMyStore', param);
    },

    /**
     * 删除店铺
     * @param param
     * @returns {Promise.<TResult>|*}
     */
    delStore(param = {}) {
        param.userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        return util.postRequest('/store/delStore', param);
    },

    /**我的求购
     *
     */

    askBuyList(param = {}){
        param.userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        return util.postRequest('/buying/buyingList',param);
    },

    /**删除求购
     *
     */
    deleteAskBuy(param = {}){
        param.userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        return util.postRequest('/buying/delBuyingOrder',param);
    },

    /**我的服务
     *
     */
    myService(param = {}){
        param.userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        return util.postRequest('/inform/informList',param);
    },
    /**删除服务
     *
     */
    deleteService(param = {}){
        param.userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        return util.postRequest('/inform/delInform',param);
    },

}