/**
 * @file
 * @auth jinguangguo
 * @date 2016/8/14
 */

import React from 'react';

import renderTpl from './tpl.js';
import service from './service';

export default React.createClass({

    /**
     *
     * @returns {{list: null}}
     */
    getInitialState() {
        return {
            list: []
        };
    },

    componentDidMount() {
        this._fetchList();
    },

    /**
     * 获取数据列表
     * @private
     */
    _fetchList() {
        let that = this;

        service.list().done(function(rep) {
            that.setState({
                list: rep.data.list
            });
        });

    },

    alert() {
        YLT.alert('这里是alert...');
    },

    confirm() {
        YLT.confirm('这里是confirm...');
    },

    render: renderTpl

});