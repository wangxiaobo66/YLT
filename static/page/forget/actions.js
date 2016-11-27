/**
 * Created by wangxiaobo on 16/11/26.
 */
let util = require('../../js/app/util');
import {LOGIN_USER_KEY} from '../../js/app/contants';

module.exports = {
    update(param = {}) {//忘记密码
        return util.postRequest('/user/pwd/update', param);
    },
    postSms(param = {}){
        return util.postRequest('/user/code/create', param);
    }
};