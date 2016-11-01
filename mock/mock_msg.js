/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/30
 */

export default [

    // 我的消息总列表
    {
        path: '/msg/allList',
        method: 'POST',
        handler: function (request, reply) {
            reply({
                "state": 1,
                "reason": "success",
                "data": {
                    list: [
                        {
                            "id": 1,
                            "userId": 1,
                            "consumerId": 1,
                            "fromUserId": 2,
                            "toUserId": 2,
                            "toConsumerId": 2,
                            "nickname": '用户1',
                            "creatTime": 1477814360657,
                            "content": '我这里是消息的内容啊内容',
                            "msgNum": 23,
                            "headimgurl": 'http://img.gsxservice.com/4926824_cu79hsqz.png'
                        },
                        {
                            "id": 2,
                            "userId": 3,
                            "consumerId": 3,
                            "fromUserId": 2,
                            "toUserId": 4,
                            "toConsumerId": 4,
                            "creatTime": 1477814360657,
                            "nickname": '用户2',
                            "content": '我这里是消息的内容啊内容1',
                            "msgNum": 234,
                            "headimgurl": 'http://img.gsxservice.com/4926824_cu79hsqz.png'
                        },
                        {
                            "id": 1,
                            "userId": 3,
                            "consumerId": 3,
                            "fromUserId": 2,
                            "toUserId": 4,
                            "toConsumerId": 4,
                            "creatTime": 1477814360657,
                            "nickname": '用户3',
                            "msgNum": 123,
                            "content": '我这里是消息的内容啊内容2',
                            "headimgurl": 'http://img.gsxservice.com/4926824_cu79hsqz.png'
                        }
                    ]
                }
            });
        }
    },

    // 消息详情列表
    {
        path: '/msg/msgList',
        method: 'POST',
        handler: function (request, reply) {
            reply({
                "state": 1,
                "reason": "success",
                "data": {
                    list: [
                        {
                            "id": 1,
                            "userId": 1,
                            "consumerId": 1,
                            "fromUserId": 1,
                            "toUserId": 2,
                            "toConsumerId": 2,
                            "nickname": '用户3',
                            "creatTime": 1477814360657,
                            "content": '我这里是消息的内容啊内容',
                            "headimgurl": 'http://img.gsxservice.com/4926824_cu79hsqz.png'
                        },
                        {
                            "id": 2,
                            "userId": 3,
                            "consumerId": 3,
                            "fromUserId": 1,
                            "toUserId": 2,
                            "toConsumerId": 4,
                            "nickname": '用户3',
                            "creatTime": 1477814360657,
                            "content": '我这里是消息的内容啊内容1',
                            "headimgurl": 'http://img.gsxservice.com/4926824_cu79hsqz.png'
                        },
                        {
                            "id": 2,
                            "userId": 3,
                            "consumerId": 3,
                            "fromUserId": 2,
                            "toUserId": 2,
                            "nickname": '这是我自己',
                            "toConsumerId": 4,
                            "creatTime": 1477814360657,
                            "content": '我这里是消息的内容啊内容1',
                            "headimgurl": 'http://img.gsxservice.com/4926824_cu79hsqz.png'
                        }
                    ]
                }
            });
        }
    },

    {
        path: '/msg/addMsg',
        method: 'POST',
        handler: function (request, reply) {
            reply({
                "state": 1,
                "reason": "success",
                "data": {}
            });
        }
    },

    /**
     * request
     * {
     *  id
     * }
     */
    {
        path: '/msg/delMsg',
        method: 'POST',
        handler: function (request, reply) {
            reply({
                "state": 1,
                "reason": "success",
                "data": {}
            });
        }
    }

]