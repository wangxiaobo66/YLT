/**
 * Created by wangxiaobo on 16/11/27.
 */
import util from '../../../js/app/util';
import {LOGIN_USER_KEY} from '../../../js/app/contants';

export default {
    standardList(param = {}) {//规格订阅列表
        param.userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        return util.postRequest('/subscript/standardList', param);
    },
    vehiclenumList(param = {}) {//车次订阅列表
        param.userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        return util.postRequest('/subscript/vehiclenumList', param);
    },
    delStandard(param = {}){//规格订阅删除
        return util.postRequest('/subscript/delStandard', param);
    },
    delVehiclenum(param = {}){//车次订阅列表
        return util.postRequest('/subscript/delVehiclenum', param);
    }
}