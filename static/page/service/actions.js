/**
 * Created by wangxiaobo on 16/9/23.
 */
let util = require('../../js/app/util');

function postServiceList(data){//获取服务列表
    //let url = 'http://123.57.83.122:8080/inform/informList';
    let url = '/inform/informList';
    return util.postRequest(url, data);
}

function postAdd(data){//添加服务
    let url = '/inform/addInform';
    return util.postRequest(url, data);
}

function postDetail(data){//获取服务内容
    let url = '/inform/showInform';
    return util.postRequest(url, data);
}

const SERVICE_LIST = "SERVICE_LIST";//服务列表

function serviceList(data){
    return {
        type: SERVICE_LIST,
        data
    }
}

const SERVICE_DETAIL = "SERVICE_DETAIL";//服务内容

function serviceDetail(data){
    return {
        type:SERVICE_DETAIL,
        data
    }
}

const SERVICE_EXPORT = 'SERVICE_EXPORT';//调用接口返回状态

function serviceExport(data){
    return {
        type:SERVICE_EXPORT,
        data
    }
}

module.exports = {
    serviceData:function(data){//服务list
        let info = data;
        return function (dispatch) {
            return postServiceList(info).then(
                function (res) {
                    res.json().then(function (json) {
                        dispatch(serviceList(json.result))
                    })
                }
            )
        }
    },
    addInform:function(data){//添加服务
        let info = data;
        return function (dispatch) {
            return postAdd(info).then(
                function (res) {
                    res.json().then(function (json) {
                        dispatch(serviceExport(json.state))
                    })
                }
            )
        }
    },
    detailData:function(data){//服务内容
        let info = data;
        return function (dispatch) {
            return postDetail(info).then(
                function (res) {
                    res.json().then(function (json) {
                        dispatch(serviceDetail(json.result))
                    })
                }
            )
        }
    },
    SERVICE_LIST:"SERVICE_LIST",
    SERVICE_DETAIL:"SERVICE_DETAIL",
    SERVICE_EXPORT:"SERVICE_EXPORT"
};