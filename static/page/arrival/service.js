/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/23
 */

import util from '../../js/app/util';
import {LOGIN_USER_KEY} from '../../js/app/contants';

export default {
    /**
     * 到货车次列表
     * */
    arrivalList(param = {}) {
        return util.postRequest('/bureau/trains', param);
    },
    /**
     * 到货车次车皮号列表
     * */
    arrival(param = {}){
        return util.postRequest('/bureau/carriages', param);
    },
    /**
     * 详情
     * */
    detail(param = {}){
        return util.postRequest('/bureau/showData', param);
    }
}