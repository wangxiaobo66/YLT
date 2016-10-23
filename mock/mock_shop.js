/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/23
 */

export default [
    // 店铺列表
    {
        // path: '/store/myStoreList/{limitStart}/{limitCount}/provinceId/typeId',
        path: '/store/myStoreList/1/20/1/1',
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
                        {
                            "id": 1,
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
                    ]
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
        path: '/store/delMyStore/1',
        method: 'POST',
        handler: function (request, reply) {
            reply({
                "state": 1,
                "reason": "success",
                "data": {

                }
            });
        }
    }
]