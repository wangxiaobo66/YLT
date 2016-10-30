/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/30
 */

import util from '../../../js/app/util';

export default {

    detail(param = {}) {
        return util.postRequest('/user/detail', param).then((rep) => {
            return rep.json();
        });
    },

    update(param = {}) {
        return util.postRequest('/user/update', param).then((rep) => {
            return rep.json();
        });
    }

}