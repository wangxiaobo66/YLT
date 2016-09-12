/**
 * @file
 * @author jinguangguo
 * @date 2016/5/27
 */

var path = require('path');
var entrys = require('../../webpack.entry.js');
var PUBLIC_PATH = '/dist/';

module.exports = {
    entry: entrys,
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: PUBLIC_PATH,
        filename: 'js/[name].js'
    },
    module: {
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
                test: /(\.css|\.scss)$/,
                loader: 'style?sourceMap!css?sourceMap!sass?sourceMap!autoprefixer?{browsers:["last 2 versions"]}'
            },
            {
                test: /\.(jpe?g|png|gif|svg|woff|ttf|eot)$/i,
                loaders: ['url-loader?limit=1000&name=[path][name][hash:8].[ext]', 'img?minimize']
            }
        ]
    }
};