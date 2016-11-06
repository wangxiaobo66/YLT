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
                        {
                            "imgUrl": 'http://img.gsxservice.com/21873621_jcfyr2d2.png',
                            "orderId": 1,
                            "consumerId": 1,
                            "userId": 1,
                            "price": 10,
                            "portId": 1,
                            "portName": '满洲里',
                            "locationId": null,
                            "locationName": '北京',
                            "owner": '利文',
                            "mobile": 15811112222,
                            "amount": 12345,
                            "referenceAmount": 34,
                            "abrasion": '新',
                            "blue": '蓝变',
                            "mouthEaten": '部分虫眼',
                            "corrosion": '部分',
                            "originId": null,
                            "origin": '上海',
                            "inclinedcrack": '有',
                            "cyclecrack": '有',
                            "oiled": '有',
                            "darkpith": '有',
                            "subscript": null,
                            "dimensionId": null,
                            "wagonNo": null,
                            "content": '这里是详细内容',
                            "createTime": 1478403696540,
                            "dimension": {
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
                            }
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
                "data": {
                    "imgUrl": 'http://img.gsxservice.com/21873621_jcfyr2d2.png',
                    "orderId": 1,
                    "consumerId": 1,
                    "userId": 1,
                    "price": 10,
                    "portId": 1,
                    "portName": '满洲里',
                    "locationId": null,
                    "locationName": '北京',
                    "owner": '利文',
                    "mobile": 15811112222,
                    "amount": 12345,
                    "referenceAmount": 34,
                    "abrasion": '新',
                    "blue": '蓝变',
                    "mouthEaten": '部分虫眼',
                    "corrosion": '部分',
                    "originId": null,
                    "origin": '上海',
                    "inclinedcrack": '有',
                    "cyclecrack": '有',
                    "oiled": '有',
                    "darkpith": '有',
                    "subscript": null,
                    "dimensionId": null,
                    "wagonNo": null,
                    "content": '这里是详细内容',
                    "createTime": 1478403696540,
                    // 店铺详情
                    "store": {
                        "id": 1,
                        "userId": 1,
                        "consumerId": 1,
                        "createTime": 1477188760233,
                        "logoUrl": 'http://img.gsxservice.com/21873621_jcfyr2d2.png',
                        "storetypeId": 1,    // 1.机械设备 2.器材销售
                        "storeName": '这里是店铺名称',
                        "phone": 15811112222,
                        "address": '永吉县万昌镇',
                        "province": '吉林',
                        "city": '长春',
                        "keywords": '关键词1, 关键词2',
                        "qrCode": 'http://img.gsxservice.com/7376327_497prnam.png',
                        "serviceTel": 15822223333,
                        "introduction": '我这里是店铺的介绍哦我这里是店铺的介绍哦我这里是店铺的介绍哦'
                    },
                    // 规格对象
                    "dimension": {
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
                    }
                }
            });
        }
    },

    {
        path: '/unsold/addUnsoldReport',
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