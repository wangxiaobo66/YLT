/**
 * @file
 * @auth jinguangguo
 * @date 2016/8/14
 */

export default [
    {
        path: '/api/home/list.json',
        method: 'GET',
        handler: function (request, reply) {
            reply({
                "errno": 0,
                "msg": "success",
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
    }
]