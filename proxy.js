/**
 * @file 用于进行线上调试使用
 * @auth jinguangguo@new4g.cn
 * @date 2016/8/14
 */

module.exports = [
    // http://test-marketing-m.ctest.baijiahulian.com/
    // http://test-marketing-m.ctest.baijiahulian.com/build/referral.js
    {
        pattern: /^http:\/\/test-marketing-m.ctest.baijiahulian.com\/build\/(.*)\.js$/,
        responder: 'http://localhost:8009/build/$1.js'
    }
    //{
    //    // http://test-marketing-m.ctest.baijiahulian.com/build/referral.js
    //    pattern: 'http://test-marketing-m.ctest.baijiahulian.com/build/referral.js',
    //    responder: 'http://localhost:8009/build/referral.js'
    //},
    //{
    //    pattern: /^http:\/\/qian.genshuixue.com\/asset\/(.*)_\w{10}\.(js|css)$/,
    //    responder: 'http://localhost:8009/build/referral.js'
    //}
];

// 安装:
// npm install nproxy -g
// 启动：
// nproxy -l proxy.js -p 9999
