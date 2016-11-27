/**
 * Created by wangxiaobo on 16/11/27.
 */
let util = require('../../js/app/util');
import {LOGIN_USER_KEY} from '../../js/app/contants';

module.exports = {
    optionList(param = {}){//码表信息
        return util.postRequest('/base/options', param);
    },
    addSubscript(param = {}){//添加规格订阅
        param.userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        return util.postRequest('/subscript/addStandard', param);
    }
};