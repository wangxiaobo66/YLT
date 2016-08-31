/**
 * @file
 * @author jinguangguo
 * @date 2016/5/27
 */

var path = require('path');
var entrys = require('../../webpack.entry.js');

console.log(entrys);

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
                test: /(\.css|\.less)$/,
                loader: 'style?sourceMap!css?sourceMap!less?sourceMap!autoprefixer?{browsers:["last 2 versions"]}'
            }
        ]
    }
};