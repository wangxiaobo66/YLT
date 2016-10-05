/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/5
 */

import React from 'react';
import {Link} from 'react-router';
import Upload from '../../../component/Upload/Upload';
import mixins from './mixins';

export default React.createClass({
    mixins: [mixins],
    /**
     * 初始化
     */
    getInitialState() {
        return {

        };
    },
    componentDidMount() {

    },
    render() {
        return (
            <div className="module-info-detail">
                <Upload tip="上传图片" />
                <div className="ui-btn-groups">
                    <a href="javascript:;" className="ui-btn ui-btn-confirm">确定</a>
                    <a href="javascript:;" className="ui-btn ui-btn-default"
                       onClick={this.goBack}>取消</a>
                </div>
            </div>
        );
    }
});
