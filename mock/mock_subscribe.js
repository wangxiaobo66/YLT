/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/22
 */

export default [

    // 规格订阅列表
    // type: 1求购;2未售;
    {
        // path: '/subscript/standardList/{limitStart}/{limitCount}/{type}',
        path: '/subscript/standardList/1/20/1', // 求购
        method: 'POST',
        handler: function (request, reply) {
            reply({
                "state": 1,
                "reason": "success",
                "result": {
                    list: [
                        {
                            "id": 1,
                            "userId": 1,
                            "consumerId": 1,
                            "treetypeId": 1,    // 树种id
                            "goodstypeId": 1,   // 货种id
                            "lengthId": 1,  // 长度id
                            "portId": 1,
                            "startTime": 1477109735182,
                            "endTime": 1477109735182,
                            "diameterStart": null,
                            "diameterEnd": null,
                            "thickStart": null,
                            "thickEnd": null,
                            "widthStart": null,
                            "widthEnd": null,
                            "type": 1
                        },
                        {
                            "id": 1,
                            "userId": 1,
                            "consumerId": 1,
                            "treetypeId": 1,    // 树种id
                            "goodstypeId": 1,   // 货种id
                            "lengthId": 1,  // 长度id
                            "portId": 1,
                            "startTime": 1477109735182,
                            "endTime": 1477109735182,
                            "diameterStart": null,
                            "diameterEnd": null,
                            "thickStart": null,
                            "thickEnd": null,
                            "widthStart": null,
                            "widthEnd": null,
                            "type": 1
                        }
                    ]
                }
            });
        }
    },
    // 未售订阅列表
    {
        path: '/subscript/standardList/1/20/2', // 未售
        method: 'POST',
        handler: function (request, reply) {
            reply({
                "state": 1,
                "reason": "success",
                "result": {
                    list: [
                        {
                            name: 'king',
                            age: 18
                        },
                        {
                            name: 'xiaobo',
                            age: 18
                        }
                    ]
                }
            });
        }
    },
    // 新增规格订阅
    {
        path: '/subscript/addStandard',
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
    // 新增车皮号订阅
    {
        path: '/subscript/addVehiclenum',
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
    // 更新规格订阅
    {
        path: '/subscript/updateStandard',
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
    // 更新车皮号订阅
    {
        path: '/subscript/updateVehiclenum',
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
    // 删除规格订阅
    {
        path: '/subscript/delStandard/1',
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
    // 删除车皮号订阅
    {
        path: '/subscript/delVehiclenum/1',
        method: 'POST',
        handler: function (request, reply) {
            reply({
                "state": 1,
                "reason": "success",
                "result": {

                }
            });
        }
    }
]