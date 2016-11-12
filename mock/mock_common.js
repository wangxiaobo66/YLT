/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/22
 */


/**
 * 1树种;2物种;3货种;4长度;5口岸;
 * 6产地;7当前位置;8产地;9材料;10服务类型;
 * 11反馈类型;12店铺类型;13举报类型
 */
export default [
    // 树种列表
    /*
     <option value="">请选择</option>
     <option value="1">樟子松</option>
     <option value="2">落叶松</option>
     <option value="2">白松</option>
     <option value="2">鱼鳞松</option>
     <option value="2">臭白</option>
     <option value="2">白桦</option>
     <option value="2">枫桦</option>
     <option value="2">红松</option>
     <option value="2">椴木</option>
     <option value="2">柞木</option>
     <option value="2">水曲柳</option>
     <option value="2">杨木</option>
     <option value="2">辐射松</option>
     <option value="2">花旗松</option>
     <option value="2">铁杉</option>
     <option value="2">加松</option>
     <option value="2">雪松</option>
     <option value="2">其他</option>
     */
    {
        path: '/base/options',
        method: 'POST',
        handler: function (request, reply) {
            let params = request.payload;
            // console.log('params:' + params);
            let type = params.type;
            if (+type === 1) {
                reply({
                    "state": 1,
                    "reason": "success",
                    "data": {
                        list: [
                            {
                                "id": 1,
                                "name": '章子树'
                            },
                            {
                                "id": 2,
                                "name": '落叶松'
                            },
                            {
                                "id": 3,
                                "name": '白松'
                            }
                        ]
                    }
                });
            } else if (+type === 2) {
                reply({
                    "state": 1,
                    "reason": "success",
                    "data": {
                        list: [
                            {
                                "id": 1,
                                "name": '原木'
                            },
                            {
                                "id": 2,
                                "name": '条子'
                            },
                            {
                                "id": 3,
                                "name": '口料'
                            }
                        ]
                    }
                });
            } else if (+type === 4) {
                reply({
                    "state": 1,
                    "reason": "success",
                    "data": {
                        list: [
                            {
                                "id": 1,
                                "name": '2米'
                            },
                            {
                                "id": 2,
                                "name": '3米'
                            },
                            {
                                "id": 3,
                                "name": '4米'
                            }
                        ]
                    }
                });
            } else if (+type === 5) {
                reply({
                    "state": 1,
                    "reason": "success",
                    "data": {
                        list: [
                            {
                                "id": 1,
                                "name": '满洲里'
                            },
                            {
                                "id": 2,
                                "name": '缨芬河'
                            },
                            {
                                "id": 3,
                                "name": '二连浩特'
                            },
                            {
                                "id": 4,
                                "name": '其他'
                            }
                        ]
                    }
                });
            } else if (+type === 12) {
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

            } else if (+type === 13) {
                reply({
                    "state": 1,
                    "reason": "success",
                    "data": {
                        list: [
                            {
                                "id": 1,
                                "name": '商品有误'
                            },
                            {
                                "id": 2,
                                "name": '电话有误'
                            },
                            {
                                "id": 3,
                                "name": '位置不符'
                            },
                            {
                                "id": 4,
                                "name": '照片不符'
                            },
                            {
                                "id": 5,
                                "name": '其他有误'
                            },
                            {
                                "id": 6,
                                "name": '全部错误'
                            }
                        ]
                    }
                });
            } else  {
                // throw new Error('[/base/optns] The type is error!');
            }

        }
    }

    // 货种列表
    /*
     <option value="1">原木</option>
     <option value="2">条子</option>
     <option value="2">口料</option>
     <option value="2">大方</option>
     <option value="2">板</option>
     <option value="2">防腐材</option>
     <option value="2">其他</option>
     */
    // {
    //     path: '/base/optns?type=2',
    //     method: 'GET',
    //     handler: function (request, reply) {
    //         reply({
    //             "state": 1,
    //             "reason": "success",
    //             "data": {
    //                 list: [
    //                     {
    //                         "id": 1,
    //                         "name": '原木'
    //                     },
    //                     {
    //                         "id": 2,
    //                         "name": '条子'
    //                     },
    //                     {
    //                         "id": 3,
    //                         "name": '口料'
    //                     }
    //                 ]
    //             }
    //         });
    //     }
    // },

    // 长度列表
    /**
     * <option value="1">2米</option>
     <option value="2">2.5米</option>
     <option value="2">3米</option>
     <option value="2">4米</option>
     <option value="2">6米</option>
     <option value="2">其他</option>
     */
    // {
    //     path: '/base/optns?type=3',
    //     method: 'POST',
    //     handler: function (request, reply) {
    //         reply({
    //             "state": 1,
    //             "reason": "success",
    //             "data": {
    //                 list: [
    //                     {
    //                         "id": 1,
    //                         "name": '2米'
    //                     },
    //                     {
    //                         "id": 2,
    //                         "name": '3米'
    //                     },
    //                     {
    //                         "id": 3,
    //                         "name": '4米'
    //                     }
    //                 ]
    //             }
    //         });
    //     }
    // },

    // 口岸列表
    /**
     * <option value="1">满洲里</option>
     <option value="2">缨芬河</option>
     <option value="2">二连浩特</option>
     <option value="2">其他</option>
     */
    // {
    //     path: '/base/optns?type=4',
    //     method: 'POST',
    //     handler: function (request, reply) {
    //         reply({
    //             "state": 1,
    //             "reason": "success",
    //             "data": {
    //                 list: [
    //                     {
    //                         "id": 1,
    //                         "name": '满洲里'
    //                     },
    //                     {
    //                         "id": 2,
    //                         "name": '缨芬河'
    //                     },
    //                     {
    //                         "id": 3,
    //                         "name": '二连浩特'
    //                     },
    //                     {
    //                         "id": 4,
    //                         "name": '其他'
    //                     }
    //                 ]
    //             }
    //         });
    //     }
    // }

]