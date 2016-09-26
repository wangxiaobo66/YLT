/**
 * Created by wangxiaobo on 16/9/4.
 */
const INDEX_NUM = "INDEX_NUM";

function indexNum(num){
    return {
        type: INDEX_NUM,
        num
    }
}

module.exports = {
    change:function(num){
        return function(dispatch){
            dispatch(indexNum(num));
        }
    },
    INDEX_NUM:"INDEX_NUM"
};