/**
 * Created by wangxiaobo on 16/9/21.
 */
let util = require('../../js/app/util');

//获取头部四个码表信息
function postOptions(data){//获取口岸,树种,货种,长度信息
    let url = '/front.irito.server/base/options';
    return util.postRequest(url, data);
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

module.exports = {
    optionsList:function(data,name){
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
    PORT:"PORT",
    TREE:"TREE",
    GOODS:"GOODS",
    LENGTH:"LENGTH"
};