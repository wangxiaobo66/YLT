/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/30
 */
 
export default [
    // 图片上传
    {
        path: '/arrival/uploadOutsideSingle/fileupload',
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
    // 上传境外码单
    {
        path: '/arrival/addUploadOutsideSingle',
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