/**
 * @file
 * @author jinguangguo
 * @date 2016/5/27
 */

var path = require('path');
var entrys = require('../../webpack.entry.js');
var PUBLIC_PATH = '/dist/';

var CommonsVersionPlugin = require('commons-version-webpack-plugin');

module.exports = {
    entry: entrys,
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