/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/24
 */

import React from 'react';

export default class Report extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {

    }
    render() {
        return(
            <div className="module-report">
                <form className="ui-form">
                    <div className="item">
                        <label>
                            <div className="for">举报类型</div>
                            <div className="input-box input-box--select">
                                <select className="ui-select">
                                    <option value="请选择举报类型">请选择举报类型</option>
                                    <option value="1">车号有误</option>
                                    <option value="2">规格错误</option>
                                    <option value="2">电话有误</option>
                                    <option value="2">位置不符</option>
                                    <option value="2">照片不符</option>
                                    <option value="2">其他有误</option>
                                    <option value="2">全部错误</option>
                                </select>
                            </div>
                        </label>
                    </div>
                </form>
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
                <footer className="footer">
                    <a href="javascript:;" className="ui-btn ui-btn-fixed">提交</a>
                </footer>
            </div>
        );
    }
}