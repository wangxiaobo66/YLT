/**
 * Created by wangxiaobo on 16/8/30.
 */
/**
 * Created by wangxiaobo on 16/6/20.
 */
const path = require('path');
const webpack = require('webpack');
const commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.js'
});
const UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true
    }
});
module.exports = {
    watch: true,
    entry: {
        //配置页面
        vendor: ['react', 'react-dom'],
        'mod-manage': 'mod-manage',
        'user-logs': 'user-logs',
        'early-warning': 'early-warning',
        'query-statistics': 'query-statistics',
        'statistic-details': 'statistic-details',
        'user-info':'user-info',
        'apply-company':'apply-company',
        'business-list':'business-list',
        'create-company':'create-company',
        'reset-password':'reset-password',
        'login':'login'
    },
    output: {
        //   path: 'dist',
        filename: '[name].js',
        publicPath: "",
        chunkFilename: "[name].chunk.js",
        externals: [
            {
                'es5-shim': true,
                'es5-sham': true
            }
        ]
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.jsx'],
        alias: {
            //配置各个路径
            // page的js\css\action文件
            //组件的js\css文件
            //例子
            /*
            * 'login':'js/page/login/login.js',
            * */
        }

    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: '/node_modules/',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg|woff|ttf|eot)$/i,
                loaders: ['url-loader?limit=1000&name=[path][name][hash:8].[ext]', 'img?minimize']
            },
            {
                test: /\.(scss|css)/,
                loaders: ['style', 'css', 'autoprefixer-loader', 'sass']
            },
            {test: /\.js$/, loader: "eslint-loader", exclude: [/node_modules/, /js\/lib/]}
        ],
        noParse: []
    },
    plugins: [
        commonsPlugin],
    imagemin: {
        gifsicle: {interlaced: false},
        jpegtran: {
            progressive: true,
            arithmetic: false
        },
        optipng: {optimizationLevel: 5},
        pngquant: {
            floyd: 0.5,
            speed: 2
        },
        svgo: {
            plugins: [
                {removeTitle: true},
                {convertPathData: false}
            ]
        }
    },
    eslint: {
        configFile: '.eslintrc',
        ignorePath: '.eslintignore'
    }
};

