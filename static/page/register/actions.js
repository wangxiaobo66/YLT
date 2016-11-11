/**
 * Created by wangxiaobo on 16/9/4.
 */
let util = require('../../js/app/util');

//站外注册,站内补充信息

function postRegister(data){
    let url = 'http://www.albatross168.com//user/login/register';
    return util.postRequest(url, data);
}
const USER_REGISTER = 'USER_REGISTER';
function userRegister(data){
    return {
        type: USER_REGISTER,
        data
    }
}

module.exports = {
    loginRegister:function(data){
        let info = data;
        return function (dispatch) {
            return postRegister(info).then(
                function (res) {
                    res.json().then(function (json) {
                        dispatch(userRegister(json.result))
                    })
                }
            )
        }
    },
    USER_REGISTER:"USER_REGISTER"
};