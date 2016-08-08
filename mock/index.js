/**
 * @file
 * @author jinguangguo
 * @date 2016/6/14
 */

export default [
    {
        method: 'GET',
        path: '/test.json',
        handler: function (request, reply) {
            return reply(
                {
                    "code": 0,
                    "msg": "",
                    "data": {
                        name: 'king'
                    }
                }
            );
        }
    }
]