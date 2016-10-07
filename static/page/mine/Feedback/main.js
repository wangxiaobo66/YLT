/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/4
 */

import React from 'react';
import {Link} from 'react-router';
import Upload from '../../../component/Upload/Upload';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className="module-feedback">
                <form className="ui-form">
                    <div className="item">
                        <label>
                            <div className="for">反馈类型</div>
                            <div className="input-box input-box--select">
                                <select className="ui-select">
                                    <option value="">请选择反馈类型</option>
                                    <option value="1">优化建议</option>
                                    <option value="2">错误</option>
                                    <option value="3">验证问题</option>
                                </select>
                            </div>
                        </label>
                    </div>
                </form>
                <Upload tip="添加图片" />
                <div className="ui-title fn-mt10">
                    <h3 className="text">具体描述</h3>
                </div>
                <form className="ui-form ui-form-textarea">
                    <div className="item">
                        <label>
                            <div className="input-box">
                                <textarea rows="8" placeholder="请输入具体描述, 200字以内" />
                            </div>
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}