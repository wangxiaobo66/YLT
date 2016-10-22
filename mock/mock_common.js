/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/22
 */
 
export default [
    // 树种列表
    /**
     * <option value="">请选择</option>
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
        path: '/treetypeList',
        method: 'POST',
        handler: function (request, reply) {
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
        }
    },

    // 货种列表
    /**
     * <option value="1">原木</option>
     <option value="2">条子</option>
     <option value="2">口料</option>
     <option value="2">大方</option>
     <option value="2">板</option>
     <option value="2">防腐材</option>
     <option value="2">其他</option>
     */
    {
        path: '/goodstypeList',
        method: 'POST',
        handler: function (request, reply) {
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
        }
    },

    // 长度列表
    /**
     * <option value="1">2米</option>
     <option value="2">2.5米</option>
     <option value="2">3米</option>
     <option value="2">4米</option>
     <option value="2">6米</option>
     <option value="2">其他</option>
     */
    {
        path: '/lengthList',
        method: 'POST',
        handler: function (request, reply) {
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
        }
    },

    // 口岸列表
    /**
     * <option value="1">满洲里</option>
     <option value="2">缨芬河</option>
     <option value="2">二连浩特</option>
     <option value="2">其他</option>
     */
    {
        path: '/portList',
        method: 'POST',
        handler: function (request, reply) {
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
        }
    }

]