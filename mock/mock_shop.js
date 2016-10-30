/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/23
 */

export default [
    {
        path: '/store/typeList',
        method: 'POST',
        handler: function (request, reply) {
            reply({
                "state": 1,
                "reason": "success",
                "data": {
                    list: [
                        {
                            "id": 1,
                            "name": '机械设备'
                        },
                        {
                            "id": 2,
                            "name": '器材销售'
                        }
                    ]
                }
            });
        }
    },
    // 店铺列表
    {
        // path: '/store/myStoreList/{limitStart}/{limitCount}/provinceId/typeId',
        path: '/store/myStoreList',
        method: 'POST',
        handler: function (request, reply) {
            reply({
                "state": 1,
                "reason": "success",
                "data": {
                    total: 123,
                    list: [
                        {
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
                            "introduction": '我这里是店铺的介绍哦我这里是店铺的介绍哦我这里是店铺的介绍哦',
                        },
                        {
                            "id": 2,
                            "userId": 1,
                            "consumerId": 1,
                            "createTime": 1477188760233,
                            "logoUrl": 'http://img.gsxservice.com/21873621_jcfyr2d2.png',
                            "storetypeId": 1,    // 1.机械设备 2.器材销售
                            "storeName": '这里是店铺名称1',
                            "phone": 15811112222,
                            "address": '永吉县万昌镇',
                            "province": '吉林',
                            "city": '长春',
                            "keywords": '关键词3, 关键词4',
                            "qrCode": 'http://img.gsxservice.com/7376327_497prnam.png',
                            "serviceTel": 15822223333,
                            "introduction": '我这里是店铺的介绍哦1我这里是店铺的介绍哦2我这里是店铺的介绍哦3'
                        }
                    ],
                    order1: [
                        {
                            "id": 1,
                            "name": "商品1",
                            "url": "http://img.gsxservice.com/21891568_7qr3z9zm.png"
                        },
                        {
                            "id": 2,
                            "name": "商品2",
                            "url": "http://img.gsxservice.com/21891568_7qr3z9zm.png"
                        }
                    ],
                    order2: [
                        {
                            "id": 1,
                            "name": "商品3",
                            "url": "http://img.gsxservice.com/21891568_7qr3z9zm.png"
                        },
                        {
                            "id": 2,
                            "name": "商品4",
                            "url": "http://img.gsxservice.com/21891568_7qr3z9zm.png"
                        }
                    ]
                }
            });
        }
    },

    // 对应店铺中的所有未售商品
    /**
     * request
     * {
     *  storeId
     *  limitCount
     *  limitStart
     * }
     */
    {
        path: '/store/unsoldOrdersInStore',
        method: 'POST',
        handler: function (request, reply) {
            reply({
                "state": 1,
                "reason": "success",
                "data": {
                    total: 123,

                    /*
                     订单id
                     微信用户id
                     手机用户id
                     价格 -
                     口岸id -
                     当前位置id
                     所有人
                     手机号
                     数量 -
                     参考数量
                     新旧
                     蓝变
                     虫眼
                     腐朽眼
                     始发地id
                     斜裂
                     环裂
                     抽油
                     黑心
                     是否订阅
                     维度id
                     货车号
                     内容
                     */
                    // FIXME
                    list: [
                        {
                            "orderId": 1,
                            "consumerId": 1,
                            "userId": 1,
                            "price": 10.0,  // ok
                            "portId": 1,
                            "locationId": 1,
                            "locationName": '满洲里1',  //ok
                            "owner": '所有人',
                            "mobile": 15811112222,
                            "amount": 123,  // ok
                            "referenceAmount": null,
                            "abrasion": null,
                            "blue": null,
                            "mouthEaten": null,
                            "corrosion": null,
                            "originId": null,
                            "inclinedcrack": null,
                            "cyclecrack": null,
                            "oiled": null,
                            "darkpith": null,
                            "subscript": null,
                            "dimensionId": null,
                            "wagonNo": null,
                            "content": null,
                            "imageUrl": "http://img.gsxservice.com/21891568_7qr3z9zm.png"
                        },
                        {
                            "orderId": 2,
                            "consumerId": 1,
                            "userId": 1,
                            "price": 20.0,  // ok
                            "portId": 1,
                            "locationId": 1,
                            "locationName": '满洲里2',  //ok
                            "owner": '所有人',
                            "mobile": 15811112222,
                            "amount": 1234,  // ok
                            "referenceAmount": null,
                            "abrasion": null,
                            "blue": null,
                            "mouthEaten": null,
                            "corrosion": null,
                            "originId": null,
                            "inclinedcrack": null,
                            "cyclecrack": null,
                            "oiled": null,
                            "darkpith": null,
                            "subscript": null,
                            "dimensionId": null,
                            "wagonNo": null,
                            "content": null,
                            "imageUrl": "http://img.gsxservice.com/21891568_7qr3z9zm.png"
                        }
                    ],
                    dim1: {
                        /**
                         *
                         id
                         树种id
                         货种id
                         长度id
                         手机用户id
                         微信用户id
                         订单id
                         */
                        "specId": null,
                        "treetypeId": null,
                        "treetypeName": '落叶松',
                        "goodstypeId": null,
                        "goodstypeName": '原木',
                        "lengthId": null,
                        "lengthName": '6米',
                        "userId": null,
                        "consumerId": null,
                        "orderId": null
                    },
                    dim2: {
                        "specId": null,
                        "treetypeId": null,
                        "treetypeName": '落叶松1',
                        "goodstypeId": null,
                        "goodstypeName": '原木2',
                        "lengthId": null,
                        "lengthName": '5米',
                        "userId": null,
                        "consumerId": null,
                        "orderId": null
                    }
                }
            });
        }
    },
    // 添加店铺
    {
        // path: '/store/addMyStore',
        path: '/store/addMyStore',
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
    // 更新店铺
    {
        path: '/store/updateMyStore',
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
    // 删除店铺
    {
        // /store/delMyStore/{id}
        path: '/store/delMyStore',
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
    // 查询店铺详情
    // storeId
    // 什么都不传的情况下, 展示的就是当前用户的店铺详情
    {
        path: '/store/showMyStore',
        method: 'POST',
        handler: function (request, reply) {
            reply({
                "state": 1,
                "reason": "success",
                "data": {
                    "id": 1,
                    "userId": 1,
                    "consumerId": 1,
                    "createTime": 1477188760233,
                    "store_icon": 'http://img.gsxservice.com/21873621_jcfyr2d2.png',
                    "storetypeId": 1,    // 1.机械设备 2.器材销售
                    "storeName": '这里是店铺名称',
                    "phone": 15811112222,
                    "address": '永吉县万昌镇',
                    "province": '吉林',
                    "city": '长春',
                    "keywords": '关键词1, 关键词2',
                    "qrCode": 'http://img.gsxservice.com/7376327_497prnam.png',
                    "serviceTel": 15822223333,
                    "introduction": '我这里是店铺的介绍哦我这里是店铺的介绍哦我这里是店铺的介绍哦',

                    total: 123,  // 商品总数
                    focus_num: 34,   // 关注人数
                    newest_goods_num: 12    // 最新商品数量
                }
            });
        }
    }
]