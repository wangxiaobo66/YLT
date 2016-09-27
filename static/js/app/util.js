const eventEmitter = require('event-emitter');
module.exports = {
    events: eventEmitter({}),
    //wxbjiami
    base64encode: function(str){
        var out, i, len;
        var c1, c2, c3;

        len = str.length;
        i = 0;
        out = "";
        while(i < len) {
            c1 = str.charCodeAt(i++) & 0xff;
            if(i === len)
            {
                out += base64EncodeChars.charAt(c1 >> 2);
                out += base64EncodeChars.charAt((c1 & 0x3) << 4);
                out += "==";
                break;
            }
            c2 = str.charCodeAt(i++);
            if(i === len)
            {
                out += base64EncodeChars.charAt(c1 >> 2);
                out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
                out += base64EncodeChars.charAt((c2 & 0xF) << 2);
                out += "=";
                break;
            }
            c3 = str.charCodeAt(i++);
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >>6));
            out += base64EncodeChars.charAt(c3 & 0x3F);
        }
        return out;
    },
    //封装fetch
    getRequest: function(url, data) {
        var fullUrl = this.objToUrlString(url, data);
        return fetch(fullUrl, {
            headers: {
                "x-csrf-token": scoreweb.token
            },
            credentials: 'include'
        });
    },
    postRequest: function(url, data) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/javascript, */*; q=0.01', //接受数据格式
                'Content-Type': 'application/json; charset=UTF-8', //请求数据格式
                "x-csrf-token": scoreweb.token
            },
            credentials: 'include', //使用cookie  默认不使用cookie
            body: JSON.stringify(data)
        })
    },
    //hash
    getHash: function(url){
        return url.substring((url.indexOf("#") + 1), url.length);
    }
};