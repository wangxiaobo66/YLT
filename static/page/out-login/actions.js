/**
 * Created by wangxiaobo on 16/9/4.
 */
let util = require('../../js/app/util');

//登录
function postLogin(data){
    let url = 'http://123.57.83.122:8080/front.irito.server/user/login/phone';
    return util.postRequest(url, data);
}

const USER_LOGIN = 'USER_LOGIN';
function userLogin(data){
    return {
        type: USER_LOGIN,
        data
    }
}

module.exports = {
    userOutLogin:function(data){
        let info = data;
        return function (dispatch) {
            return postLogin(info).then(
                function (res) {
                    res.json().then(function (json) {
                        dispatch(userLogin(json.result))
                    })
                }
            )
        }
    },
    USER_LOGIN:"USER_LOGIN"
};