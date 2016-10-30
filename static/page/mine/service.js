/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/30
 */

import util from '../../js/app/util';

export default {

    sendVerifyCode(param = {}) {
        return util.postRequest('/user/code', param).then((rep) => {
            return rep.json();
        });
    }

}