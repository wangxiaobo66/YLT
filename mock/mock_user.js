/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/30
 */

export default [
    /**
     * request
     *  mobile
     */
    {
        path: '/user/sendCode',
        method: 'POST',
        handler: function (request, reply) {
            reply({
                "state": 1,
                "reason": "success",
                "data": {

                }
            });
        }
    },
    {
        path: '/user/showUser',
        method: 'POST',
        handler: function (request, reply) {
            reply({
                "state": 1,
                "reason": "success",
                "data": {
                    "consumerId": 16,
                    "consumerName": null,
                    "name": '我是名称',
                    "nickname": '这里是昵称',
                    "openid": null,
                    "subscribe": null,
                    "sex": null,
                    "city": '长春',
                    "country": null,
                    "province": '吉林',
                    "language": null,
                    "headimgurl": 'http://img.gsxservice.com/4926824_cu79hsqz.png',
                    "subscribeTime": null,
                    "unionid": null,
                    "remark": null,
                    "groupid": null,
                    "startDate": null,
                    "endDate": null,
                    "isExpiration": null,
                    "createTime": 1476533959800,
                    "messageStatus": null,
                    "idNumber": null,
                    "mobile": "15822223333",
                    "tokenNo": null,
                    "pwd": "",
                    "company": '公司名称1',
                    "portId": null,
                    "code": null,

                    "msgNum": 5
                }
            });
        }
    },
    {
        path: '/user/updateUser',
        method: 'POST',
        handler: function (request, reply) {
            reply({
                "state": 1,
                "reason": "success",
                "data": {
                    "consumerId": 16,
                    "consumerName": null,
                    "name": '我是名称',
                    "nickname": '这里是昵称',
                    "openid": null,
                    "subscribe": null,
                    "sex": null,
                    "city": '长春',
                    "country": null,
                    "province": '吉林',
                    "language": null,
                    "headimgurl": 'http://img.gsxservice.com/4926824_cu79hsqz.png',
                    "subscribeTime": null,
                    "unionid": null,
                    "remark": null,
                    "groupid": null,
                    "startDate": null,
                    "endDate": null,
                    "isExpiration": null,
                    "createTime": 1476533959800,
                    "messageStatus": null,
                    "idNumber": null,
                    "mobile": "15822223333",
                    "tokenNo": null,
                    "pwd": "",
                    "company": '公司名称1',
                    "portId": null,
                    "code": null
                }
            });
        }
    }
]