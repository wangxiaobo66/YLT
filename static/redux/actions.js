/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/4
 */

const util = require('util');

/**
 * Created by jin on 16/4/14.
 */
//list-frame组件
export const LIST_FRAME = 'LIST_FRAME';
export function listFrame(listFrame) {
    return {
        type: LIST_FRAME,
        listFrame
    }
}
