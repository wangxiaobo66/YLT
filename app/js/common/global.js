/**
 * @file
 * @auth jinguangguo
 * @date 2016/8/14
 */

import React from 'react';
import ReactDOM from 'react-dom';

import EventEmitter from 'wolfy87-eventemitter';

import '../../component/Toast/Toast';
import {Alert} from '../../component/Alert/Alert';
import {Confirm} from '../../component/Confirm/Confirm';

window.loading();

// 添加自定义事件处理器
window.eventEmitter = new EventEmitter();

// 开放一个命名空间can
let YLT = {
    console: window.console || {},
    eventEmitter: window.eventEmitter,
    ee: window.eventEmitter
};

// toast方法
YLT.toast = window.toast;
YLT.untoast = window.untoast;
YLT.loading = window.loading;
YLT.unloading = window.unloading;

YLT.alert = function(message, onSure) {
    window.eventEmitter.trigger('component.alert', [message, onSure]);
};

YLT.confirm = function(message, onSure, onCancel) {
    window.eventEmitter.trigger('component.confirm', [message, onSure, onCancel]);
};

window.YLT = YLT;

$(document.body).append('<article id="component"></article>');

// 加载组件
ReactDOM.render((
    <div className="module-component">
        <Alert />
        <Confirm />
    </div>
), document.getElementById('component'));