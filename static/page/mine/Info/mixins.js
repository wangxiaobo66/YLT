/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/5
 */

export default {
    goBack() {
        this.props.history.push({
            pathname: '/info'
        });
    }
};