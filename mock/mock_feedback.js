/**
 * @file
 * @auth jinguangguo
 * @date 2016/11/4
 */

export default [

    // 我的消息总列表
    {
        path: '/feedback/interestList',
        method: 'POST',
        handler: function (request, reply) {
            reply({
                "state": 1,
                "reason": "success",
                "result": {
                    list: [
                        {
                            "id": 1,
                            "typeId": 1,
                            "imgUrl": 'http://img.gsxservice.com/4926824_cu79hsqz.png',
                            "userId": '123',
                            "content": '反馈内容1'
                        },
                        {
                            "id": 2,
                            "typeId": 1,
                            "imgUrl": 'http://img.gsxservice.com/4926824_cu79hsqz.png',
                            "userId": '123',
                            "content": '反馈内容2'
                        },
                        {
                            "id": 3,
                            "typeId": 2,
                            "imgUrl": 'http://img.gsxservice.com/4926824_cu79hsqz.png',
                            "userId": '123',
                            "content": '反馈内容3'
                        }
                    ]
                }
            });
        }
    },

    {
        path: '/feedback/addFeedback',
        method: 'POST',
        handler: function (request, reply) {
            reply({
                "state": 1,
                "reason": "success",
                "result": {

                }
            });
        }
    },

    {
        path: '/feedback/updateFeedback',
        method: 'POST',
        handler: function (request, reply) {
            reply({
                "state": 1,
                "reason": "success",
                "result": {}
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
        path: '/feedback/delFeedback',
        method: 'POST',
        handler: function (request, reply) {
            reply({
                "state": 1,
                "reason": "success",
                "result": {}
            });
        }
    }

]