/**
 * Created by wangxiaobo on 16/9/4.
 */
let util = require('../../js/app/util');
import {LOGIN_USER_KEY} from '../../js/app/contants';

//登录
function postLogin(data) {
    let url = '/user/login/phone';
    return util.postRequest(url, data);
}
//补录信息
function postLoginW(data){
    let url = '/user/login/update';
    return util.postRequest(url, data);
}

module.exports = {
    userOutLogin: function (data) {
        let info = data;
        return function (dispatch) {
            return postLogin(info).then(
                function (res) {
                    console.log(res);
                    if (res.reason === "success") {
                        window.sessionStorage.setItem(LOGIN_USER_KEY, res.result.data.consumerId);
                        window.setTimeout(function () {
                            window.location.href = './index.html';
                        }, 100);
                    } else {
                        window.toast('请输入正确的账号密码!');
                    }
                }
            )
        }
    },
    userLogin:function (data){
        let info = data;
        return function(dispatch) {
            return postLoginW(info).then(
                function (res) {
                    alert(res);
                    console.log(res);
                    if (res.reason === "success") {
                        window.sessionStorage.setItem(LOGIN_USER_KEY, res.result.data.consumerId);
                        window.setTimeout(function () {
                            window.location.href = './index.html';
                        }, 100);
                    }
                }
            )
        }
    }
};