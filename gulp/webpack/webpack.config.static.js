/**
 * @file
 * @author jinguangguo
 * @date 2016/5/25
 */

var config = require('./webpack.config.base');
var entry = require('./webpack.entry');

config.entry = entry;
config.devtool = 'source-map';
config.assets = {

    // display no info to console (only warnings and errors)
    noInfo: true,

    // display nothing to the console
    quiet: false,

    // switch into lazy mode
    // that means no watching, but recompilation on every request
    lazy: true,

    // watch options (only lazy: false)
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    },

    // public path to bind the middleware to
    // use the same as in webpack
    publicPath: publicPath,

    // custom headers
    headers: { "X-Custom-Header": "yes" },

    stats: {
        colors: true
    }
};

module.exports = config;

