/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/30
 */

export default [

    // 我的消息会话
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
                            "toUserId": 2,
                            "toConsumerId": 2,
                            "creatTime": 1477814360657,
                            "content": '我这里是消息的内容啊内容'
                        },
                        {
                            "id": 2,
                            "userId": 3,
                            "consumerId": 3,
                            "toUserId": 4,
                            "toConsumerId": 4,
                            "creatTime": 1477814360657,
                            "content": '我这里是消息的内容啊内容1'
                        },
                        {
                            "id": 1,
                            "userId": 3,
                            "consumerId": 3,
                            "toUserId": 4,
                            "toConsumerId": 4,
                            "creatTime": 1477814360657,
                            "content": '我这里是消息的内容啊内容2'
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
                            "toUserId": 2,
                            "toConsumerId": 2,
                            "creatTime": 1477814360657,
                            "content": '我这里是消息的内容啊内容'
                        },
                        {
                            "id": 2,
                            "userId": 3,
                            "consumerId": 3,
                            "toUserId": 4,
                            "toConsumerId": 4,
                            "creatTime": 1477814360657,
                            "content": '我这里是消息的内容啊内容1'
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