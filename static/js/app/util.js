const eventEmitter = require('event-emitter');
import moment from 'moment';
import '../../component/Toast/Toast';
import {LOGIN_USER_KEY} from './contants';
// let fetch = require('node-fetch');

module.exports = {
    events: eventEmitter({}),
    //wxbjiami
    base64encode: function (str) {
        var out, i, len;
        var c1, c2, c3;

        len = str.length;
        i = 0;
        out = "";
        while (i < len) {
            c1 = str.charCodeAt(i++) & 0xff;
            if (i === len) {
                out += base64EncodeChars.charAt(c1 >> 2);
                out += base64EncodeChars.charAt((c1 & 0x3) << 4);
                out += "==";
                break;
            }
            c2 = str.charCodeAt(i++);
            if (i === len) {
                out += base64EncodeChars.charAt(c1 >> 2);
                out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                out += base64EncodeChars.charAt((c2 & 0xF) << 2);
                out += "=";
                break;
            }
            c3 = str.charCodeAt(i++);
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
            out += base64EncodeChars.charAt(c3 & 0x3F);
        }
        return out;
    },
    //封装fetch
    getRequest: function (url, data) {
        var fullUrl = this.objToUrlString(url, data);
        return fetch(fullUrl, {
            headers: {
                //"x-csrf-token": scoreweb.token
            },
            credentials: 'include'
        });
    },
    postRequest: function (url, data) {
        // let currentUserId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        // if (currentUserId) {
        //     data.userId = currentUserId;
        // }
        window.loading('请稍候...');

        let deferred = $.Deferred();
        $.ajax({
            url: url,
            data: JSON.stringify(data),
            type: 'POST',
            dataType: 'JSON',
            contentType: 'application/json; charset=UTF-8',
            async: true,
            timeout: 30000,
            success: function (rep) {
                window.unloading();
                deferred.resolveWith(this, [rep]);
                // if (+rep.status === 200 || +rep.status === 400) {
                //     deferred.resolveWith(this, [rep]);
                // } else {
                //     deferred.rejectWith(this, [rep]);
                //     console.log('*************** ', JSON.stringify(rep), ' ***************');
                // }
            },
            error: function (xhr, type) {
                deferred.rejectWith(this, ['网络异常, 请稍候再试']);
                console.log('【网络异常, 请稍候再试】*************** ', JSON.stringify(xhr), ' ***************');
                // lib.alert('网络异常, 请稍候再试');
                // window.toast('网络异常, 请稍候再试');
            }
        });

        return deferred.promise();

        // return fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json, text/javascript, */*; q=0.01', //接受数据格式
        //         'Content-Type': 'application/json; charset=UTF-8' //请求数据格式
        //         //"x-csrf-token": scoreweb.token
        //     },
        //     credentials: 'include', //使用cookie  默认不使用cookie
        //     body: JSON.stringify(data)
        // }).then(rep => {
        //     window.untoast();
        //     return rep;
        // });

    },
    //hash
    getHash: function (url) {
        return url.substring((url.indexOf("#") + 1), url.length);
    },
    //url取参数
    getQueryString: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    },
    /**
     * 格式化时间
     * @param timestamp
     * @returns {*}
     */
    formatTime(timestamp) {
        return timestamp ? moment(timestamp).format('YYYY-MM-DD') : '';
    },
    //上传图片
    fileUpload(inputId, url){//inputId为document.getElementById('inputId'),url为接口名

        let deferred = $.Deferred();

        var formData = new FormData();
        if (!inputId.value) {
            return false
        } else {
            window.loading('正在上传, 请稍候...');
            formData.append('upImg', inputId.files[0]);
            $.ajax({
                url: url,
                type: "POST",
                data: formData,
                processData: false,
                contentType: false,
                success: function (rep) {
                    window.unloading();
                    deferred.resolveWith(this, [rep]);
                },
                error: function (xhr, type) {
                    deferred.rejectWith(this, ['网络异常, 请稍候再试']);
                    console.log('【网络异常, 请稍候再试】*************** ', JSON.stringify(xhr), ' ***************');
                    // lib.alert('网络异常, 请稍候再试');
                    // window.toast('网络异常, 请稍候再试');
                }
            });
            return deferred.promise();
        }

    },
    scroll(){

    }
};