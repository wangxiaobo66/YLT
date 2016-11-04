/**
 * @file
 * @auth jinguangguo
 * @date 2016/11/4
 */

export default [
    // 我的消息总列表
    {
        path: '/interest/interestList',
        method: 'POST',
        handler: function (request, reply) {

            let params = request.payload;
            // console.log('params:' + params);
            let type = +params.type;

            // 0到货列表;1关注店铺;2未售市场;
            if (type === 0) {
                reply({
                    "state": 1,
                    "reason": "success",
                    "data": {
                        list: [
                            {
                                "id": 1,
                                "tailNumber":"7788",
                                "length":"3米",
                                "varieties":"樟子松",
                                "cargo":"原木"
                            },
                            {
                                "id": 2,
                                "tailNumber":"7788",
                                "length":"3米",
                                "varieties":"樟子松",
                                "cargo":"原木"
                            },
                            {
                                "id": 3,
                                "tailNumber":"7788",
                                "length":"3米",
                                "varieties":"樟子松",
                                "cargo":"原木"
                            },
                            {
                                "id": 4,
                                "tailNumber":"7788",
                                "length":"3米",
                                "varieties":"樟子松",
                                "cargo":"原木"
                            }
                        ]
                    }
                });
            } else if (type === 1) {
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
            } else if (type === 2) {    // 未售市场
                reply({
                    "state": 1,
                    "reason": "success",
                    "data": {
                        list: [
                            {
                                "imgSrc": "http://img.gsxservice.com/21891568_7qr3z9zm.png",
                                "name": "落叶松1",
                                "size": "六米",
                                "type": "原木",
                                "currentPosition": "明斯克",
                                "Destination": "满洲里",
                                "pubDate": "9-30|10:01",
                                "diam": "20",
                                "level": "一级"
                            },
                            {
                                "imgSrc": "http://img.gsxservice.com/21891568_7qr3z9zm.png",
                                "name": "落叶松2",
                                "size": "三米",
                                "type": "原木",
                                "currentPosition": "明斯克",
                                "destination": "满洲里",
                                "pubDate": "9-30|10:01",
                                "diam": "20",
                                "level": "一级"
                            }
                        ]
                    }
                });
            }


        }
    },

    {
        path: '/interest/addInterest',
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
        path: '/interest/updateInterest',
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
        path: '/interest/delInterest',
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