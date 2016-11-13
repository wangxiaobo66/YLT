/**
 * Created by wangxiaobo on 16/9/21.
 */
let util = require('../../js/app/util');

//获取头部四个码表信息
function postOptions(data){//获取口岸,树种,货种,长度信息
    let url = '/base/options';
    return util.postRequest(url, data);
}

//创建添加求购信息
function postAddAskBuy(data){
    let url = '/buying/addBuyingOrder';
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
    askBuyList:function(data){//获取未售list
        let info = data;
        return function (dispatch) {
            return postAskBuyList(info).then(
                function (res) {
                    res.json().then(function (json) {
                        dispatch(list(json.result.list));
                    })
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
                            res.json().then(function (json) {
                                dispatch(port(json.result.list));
                            })
                        }
                    )
                };
                break;
            case 'tree':
                return function (dispatch) {
                    return postOptions(info).then(
                        function (res) {
                            res.json().then(function (json) {
                                dispatch(tree(json.result.list));
                            })
                        }
                    )
                };
                break;
            case 'goods':
                return function (dispatch) {
                    return postOptions(info).then(
                        function (res) {
                            res.json().then(function (json) {
                                dispatch(goods(json.result.list));
                            })
                        }
                    )
                };
                break;
            case 'length':
                return function (dispatch) {
                    return postOptions(info).then(
                        function (res) {
                            res.json().then(function (json) {
                                dispatch(length(json.result.list));
                            })
                        }
                    )
                };
                break;
        }
    },
    askBuy:function(data){//添加未售
        let info = data;
        return function (dispatch) {
            return postAddAskBuy(info).then(
                function (res) {
                    res.json().then(function (json) {
                        if(json.reason==="SUCCESS"){
                            window.location.href = './ask-buy.html';
                        }
                    })
                }
            )
        };
    },
    orderDetail:function(data){//显示某一未售信息
        let info = data;
        return function (dispatch) {
            return postOrderDetail(info).then(
                function (res) {
                    res.json().then(function (json) {
                        dispatch(detail(json.result.data));
                    })
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