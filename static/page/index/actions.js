/**
 * Created by wangxiaobo on 16/9/4.
 */
let util = require('../../js/app/util');
import {LOGIN_USER_KEY} from '../../js/app/contants';

const INDEX_NUM = "INDEX_NUM";

function indexNum(num){
    return {
        type: INDEX_NUM,
        num
    }
}

const ASKBUY_LIST = "ASKBUY_LIST";//求购list
function list(data){
    return {
        type:ASKBUY_LIST,
        data
    }
}
//获取求购列表
function postAskBuyList(data){
    let url = '/buying/buyingList';
    return util.postRequest(url,data);
}

//获取userkey
function postUserKey(data){
    let url = '/user/getUserId';
    return util.postRequest(url,data);
}

module.exports = {
    change:function(num){
        return function(dispatch){
            dispatch(indexNum(num));
        }
    },
    askBuyList:function(data){//获取求购list
        let info = data;
        return function (dispatch) {
            return postAskBuyList(info).then(
                function (res) {
                    dispatch(list(res.result.list));
                }
            )
        };
    },
    userKey:function(data){//获取userkey
        return function (dispatch){
            return postUserKey().then(
                function (res){
                    window.sessionStorage.setItem(LOGIN_USER_KEY, res.result.data);
                }
            )
        }
    },
    INDEX_NUM:"INDEX_NUM",
    ASKBUY_LIST:"ASKBUY_LIST"
};