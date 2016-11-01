/**
 * Created by wangxiaobo on 16/9/23.
 */
let util = require('../../js/app/util');

function postServiceList(data){
    //let url = 'http://123.57.83.122:8080/front.irito.server/inform/informList';
    let url = '/front.irito.server/inform/informList';
    return util.postRequest(url, data);
}

function postAdd(data){
    let url = '/front.irito.server/inform/addInform';
    return util.postRequest(url, data);
}

const SERVICE_LIST = "SERVICE_LIST";

function serviceList(data){
    return {
        type: SERVICE_LIST,
        data
    }
}



module.exports = {
    serviceData:function(data){
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
    addInform:function(data){
        let info = data;
        return function (dispatch) {
            return postAdd(info).then(
                function (res) {
                    res.json().then(function (json) {
                        console.log(json);
                    })
                }
            )
        }
    },
    SERVICE_LIST:"SERVICE_LIST"
};