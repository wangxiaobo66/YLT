/**
 * Created by wangxiaobo on 16/8/25.
 */
/**路由设置**/
var views = require('co-views');
var render = views(__dirname,{map: {html: 'swig'}});

module.exports = {
    index: function *(next){
        this.body = yield render('../template/index.html');
    },
    detail: function *(next){
        this.body = yield render('../template/detail.html', {
            name: 'king',
            age: 20
        });
    }
};