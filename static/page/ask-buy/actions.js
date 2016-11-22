/**
 * Created by wangxiaobo on 16/9/21.
 */
let util = require('../../js/app/util');
import {LOGIN_USER_KEY} from '../../js/app/contants';

//获取头部四个码表信息
function postOptions(data){//获取口岸,树种,货种,长度信息
    let url = '/base/options';
    return util.postRequest(url, data);
}

//创建添加求购信息
function postAddAskBuy(data){
    data.userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
    let url = '/buying/addBuyingOrder';
    return util.postRequest(url,data);
}

//更新修改求购信息
function postUpdate(data){
    data.userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
    let url = '/buying/updateBuyingOrder';
    return util.postRequest(url,data);
}

//获取求购列表
function postAskBuyList(data){
    let url = '/buying/buyingList';
    return util.postRequest(url,data);
}
//获取某一求购单信息
function postOrderDetail(data){
    let url = '/buying/showOrderDetail';
    return util.postRequest(url,data);
}

const LIST = "LIST";//求购list
function list(data){
    return {
        type:LIST,
        data
    }
}

const PORT = "PORT";//头部地区options
function port(data){
    return {
        type: PORT,
        data
    }
}

const TREE = "TREE";//头部树种options
function tree(data){
    return {
        type: TREE,
        data
    }
}

const GOODS = "GOODS";//头部货种options
function goods(data){
    return {
        type: GOODS,
        data
    }
}

const LENGTH = "LENGTH";//头部长度options
function length(data){
    return {
        type: LENGTH,
        data
    }
}

const DETAIL = "DETAIL";
function detail(data){
    return {
        type:DETAIL,
        data
    }
}

module.exports = {
    buyingList(param = {}) {
        return util.postRequest('/buying/buyingList', param);
    },
    optionList(param = {}){
        return util.postRequest('/base/options', param);
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
    optionsList:function(data,name){//四个码表
        let info = data;
        switch (name){
            case 'port':
                return function (dispatch) {
                    return postOptions(info).then(
                        function (res) {
                                dispatch(port(res.result.list));
                        }
                    )
                };
                break;
            case 'tree':
                return function (dispatch) {
                    return postOptions(info).then(
                        function (res) {
                                dispatch(tree(res.result.list));
                        }
                    )
                };
                break;
            case 'goods':
                return function (dispatch) {
                    return postOptions(info).then(
                        function (res) {
                                dispatch(goods(res.result.list));
                        }
                    )
                };
                break;
            case 'length':
                return function (dispatch) {
                    return postOptions(info).then(
                        function (res) {
                                dispatch(length(res.result.list));
                        }
                    )
                };
                break;
        }
    },
    askBuy:function(data){//添加求购
        let info = data;
        return function (dispatch) {
            return postAddAskBuy(info).then(
                function (res) {
                        if(res.reason==="success"){
                            window.location.href = './ask-buy.html';
                        }
                }
            )
        };
    },
    update:function(data){//修改更新求购
        let info = data;
        return function (dispatch) {
            return postUpdate(info).then(
                function (res) {
                    console.log(res);
                    if(res.reason==="success"){
                        window.toast('修改成功!');
                        window.location.href = './mine.html#/askbuy';
                    }
                }
            )
        };
    },
    orderDetail:function(data){//显示某一未售信息
        let info = data;
        return function (dispatch) {
            return postOrderDetail(info).then(
                function (res) {
                        dispatch(detail(res.result.data));
                }
            )
        };
    },
    PORT:"PORT",
    TREE:"TREE",
    GOODS:"GOODS",
    LENGTH:"LENGTH",
    LIST:"LIST",
    DETAIL:"DETAIL"
};