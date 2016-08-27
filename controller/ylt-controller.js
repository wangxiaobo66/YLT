/**
 * Created by wangxiaobo on 16/8/25.
 */
/**接口设置**/
var fetch = require('node-fetch');

module.exports = {
    user: function *(next){
        this.body = {name:'wangxiaobo',id:'123'};
    }
}