/**
 * Created by wangxiaobo on 16/9/4.
 */
let util = require('../../js/app/util');
import {LOGIN_USER_KEY} from '../../js/app/contants';

//站外注册,站内补充信息
function postRegister(data){//注册接口
    let url = '/user/login/register';
    return util.postRequest(url, data);
}
function postSms(data){//短信验证码接口
    let url = '/user/code/create';
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
    loginUpdate(param = {}){//站内补录
        return util.postRequest('/user/login/update', param);
    },
    loginRegister:function(data){//提交注册
        let info = data;
        return function (dispatch) {
            return postRegister(info).then(
                function (res) {
                        if(res.reason==="success"){
                            window.sessionStorage.setItem(LOGIN_USER_KEY, res.result.data.consumerId);
                            window.toast('注册成功!');
                            window.setTimeout(function () {
                                window.location.href = './index.html';
                            }, 500);
                        }else {
                            console.log(res);
                            window.toast('验证码错误!');
                        }
                }
            )
        }
    },
    loginSms:function(data){
        let info = data;
        return function (dispatch){
            return postSms(info).then(
                function (res) {
                        console.log(res);

                }
            )
        }
    },
    USER_REGISTER:"USER_REGISTER"
};