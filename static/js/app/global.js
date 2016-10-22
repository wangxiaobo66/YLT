/**
 * @file
 * @auth jinguangguo
 * @date 2016/8/14
 */

import EventEmitter from 'wolfy87-eventemitter';
import '../../component/Toast/Toast';

// 添加自定义事件处理器
const eventEmitter = new EventEmitter();

// 开放一个命名空间can
let YLT = {
    eventEmitter: eventEmitter,
    ee: eventEmitter
};

// toast方法
YLT.toast = window.toast;
YLT.untoast = window.untoast;
YLT.loading = window.loading;
YLT.unloading = window.unloading;

YLT.alert = function(message, onSure) {
    // TODO
};

YLT.confirm = function(message, onSure, onCancel) {
    // TODO
};

window.YLT = YLT;
