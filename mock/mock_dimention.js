/**
 * @file
 * @auth jinguangguo
 * @date 2016/11/6
 */

export default [

    // 规格列表
    {
        path: '/unsold/dimList',
        method: 'POST',
        handler: function (request, reply) {

            reply({
                "state": 1,
                "reason": "success",
                "result": {
                    list: [
                        /*
                         id
                         树种id
                         货种id
                         长度id
                         手机用户id
                         微信用户id
                         订单id
                         */
                        {
                            "specId": 1,
                            "treetypeId": 1,
                            "treetypeName": '章子树',
                            "goodstypeId": 1,
                            "goodstypeName": '原木',
                            "lengthId": 1,
                            "lengthName": '2米',
                            "userId": 1,
                            "consumerId": 1,
                            "orderId": 1
                        },
                        {
                            "specId": 2,
                            "treetypeId": 2,
                            "treetypeName": '落叶松',
                            "goodstypeId": 2,
                            "goodstypeName": '条子',
                            "lengthId": 2,
                            "lengthName": '3米',
                            "userId": 2,
                            "consumerId": 2,
                            "orderId": 2
                        }
                    ]
                }
            });


        }
    },

    // 添加规格
    {
        path: '/unsold/addDimension',
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

    // 我的消息总列表
    {
        path: '/unsold/updateDimension',
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

    /**
     * request
     * {
     *  id
     * }
     */
    {
        path: '/unsold/delDimension',
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