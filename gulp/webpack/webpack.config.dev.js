/**
 * @file
 * @author jinguangguo
 * @date 2016/5/27
 */

import config from './webpack.config.base';
import entry from './webpack.entry';

config.entry = entry;

//config.devtool = 'source-map';

export default config;