/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/26
 */
 
import path from 'path';
var PUBLIC_PATH = '/dist/';

var CommonsVersionPlugin = require('commons-version-webpack-plugin');

module.exports = {
    entry: {
        'page-login': ['./static/page/login/login.js'],//登陆
        'page-out-login':['./static/page/out-login/out-login.js'],//登录站外
        'page-forget':['./static/page/forget/forget.js'],//忘记密码
        'page-register':['./static/page/register/register.js'],//注册
        'page-index': ['./static/page/index/index.js'],//首页
        'page-ask-buy':['./static/page/ask-buy/ask-buy.js'],//求购
        'page-market':['./static/page/market/market.js'],//未售
        'page-service':['./static/page/service/main.js'],//服务
        'page-subscribe': ['./static/page/subscribe/main.js'],  // 新增订阅
        'page-railway': ['./static/page/railway/main.js'],  // 铁路运费
        'page-shop': ['./static/page/shop/main.js'],   // 全部店铺
        'page-arrival': ['./static/page/arrival/main.js'],  // 到货列表
        'page-mine': ['./static/page/mine/main.js'],    // 我的
        'page-address': ['./static/page/address/main.js'],    // 货场位置
        'page-search': ['./static/page/search/main.js'] // 精准搜索
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: PUBLIC_PATH,
        filename: 'js/[name].js'
    },
    // externals: {
    //     'react': 'React',
    //     'react-dom': 'ReactDOM',
    //     'react-router': 'ReactRouter',
    //     'react-bootstrap': 'ReactBootstrap',
    //     'redux': 'Redux',
    //     'react-redux': 'ReactRedux'
    // },
    // module: {
    //     loaders: [
    //         {
    //             test: /\.js$/,
    //             exclude: /node_modules/,
    //             loader: 'babel',
    //             query: {
    //                 presets: ['react', 'es2015']
    //             }
    //         },
    //         {
    //             test: /(\.css|\.scss)$/,
    //             loader: 'style?sourceMap!css?sourceMap!sass?sourceMap!autoprefixer?{browsers:["last 2 versions"]}'
    //         },
    //         {
    //             test: /\.(jpe?g|png|gif|svg|woff|ttf|eot)$/i,
    //             loaders: ['url?limit=10000&name=img/[name].[hash:8].[ext]']
    //             // loaders: ['url-loader?limit=1000&name=img/[name][hash:8].[ext]', 'img?minimize']
    //         }
    //     ]
    // },

    module: {
        resolve: {
            root: path.resolve('static'),
            modulesDirectorie: ['node_modules'],
            extensions: ['', '.js', '.css', '.scss', '.png', '.jpg']
        },
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                // loader: 'style?sourceMap!css?sourceMap!sass?sourceMap!autoprefixer?{browsers:["last 2 versions"]}'
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: ['url?limit=10000&name=img/[name].[ext]']
            },
            {
                test: /\.(svg|woff|ttf|eot)$/i,
                loaders: [
                    'file-loader?name=font/[name].[ext]'
                ]
            },
            {
                test: /\.(mp3|wav)$/,
                loader: "file-loader?name=audio/[name].[ext]"
            }
        ],
        noParse: ['react','react-bootstrap', 'react-dom', 'react-router', 'redux', 'react-redux'],
        plugins: [
            // new CommonsVersionPlugin({
            //     commonsName: 'commons',
            //     onFileName: function (hash) {
            //         console.log('onFileName');
            //         return 'js/[name].js';
            //     }
            // })
        ]
    }
};