/**
 * Created by wangxiaobo on 16/9/4.
 */
let util = require('../../js/app/util');

//登录
function postLogin(data){
    let url = '/user/login/phone';
    return util.postRequest(url, data);
}

module.exports = {
    userOutLogin:function(data){
        let info = data;
        return function (dispatch) {
            return postLogin(info).then(
                function (res) {
                    res.json().then(function (json) {
                       if(json.reason==="success"){
                           window.location.href = './index.html';
                       }else {
                           window.toast('请输入正确的账号密码!');
                       }
                    })
                }
            )
        }
    }
};