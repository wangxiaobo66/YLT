/**
 * @file
 * @auth jinguangguo
 * @date 2016/11/5
 */

export default [

    // 未售列表
    {
        path: '/unsold/unsoldList',
        method: 'POST',
        handler: function (request, reply) {

            reply({
                "state": 1,
                "reason": "success",
                "data": {
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
                            "goodstypeId": 1,
                            "lengthId": 1,
                            "userId": 1,
                            "consumerId": 1,
                            "orderId": 1
                        },
                        {
                            "specId": 1,
                            "treetypeId": 1,
                            "goodstypeId": 1,
                            "lengthId": 1,
                            "userId": 1,
                            "consumerId": 1,
                            "orderId": 1
                        }
                    ]
                }
            });


        }
    },

    {
        path: '/unsold/addUnsold',
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
        path: '/unsold/updateUnsold',
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
        path: '/unsold/delUnsold',
        method: 'POST',
        handler: function (request, reply) {
            reply({
                "state": 1,
                "reason": "success",
                "data": {}
            });
        }
    },

    {
        path: '/unsold/showUnsold',
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