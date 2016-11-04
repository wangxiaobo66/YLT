/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/4
 */

import React from 'react';
import {Link} from 'react-router';
import Upload from '../../../component/Upload/Upload';

import service from '../service';

export default class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                typeId: '',
                imgUrl: '',
                content: ''
            },
            disabled: true
        };
    }
    componentDidMount() {

    }
    add() {
        let that = this;

        // 添加
        service.addFeedback(this.state.form).then((rep) => {
            if (rep.state === 1) {
                window.toast('添加成功', {
                    callback() {
                        window.location.href = './index.html';
                    }
                });
            } else {
                window.toast('添加失败, 请稍候重试');
            }
        });
    }
    checkDisabled(key, event) {
        let disabled = false;
        let form = this.state.form;

        if (key && event) {
            form[key] = event.target.value;
        }

        if ($.trim(form.typeId) === '') {
            disabled = true;
        }

        if ($.trim(form.imgUrl) === '') {
            disabled = true;
        }

        if ($.trim(form.content) === '') {
            disabled = true;
        }

        this.setState({
            disabled: disabled
        });

    }
    render() {
        let form = this.state.form;
        return (
            <div className="module-feedback">
                <form className="ui-form">
                    <div className="item">
                        <label>
                            <div className="for">反馈类型</div>
                            <div className="input-box input-box--select">
                                <select className="ui-select"
                                        onChange={this.checkDisabled.bind(this, 'typeId')}
                                        value={this.state.form.typeId}>
                                    <option value="">请选择反馈类型</option>
                                    <option value="1">优化建议</option>
                                    <option value="2">错误</option>
                                    <option value="3">验证问题</option>
                                </select>
                            </div>
                        </label>
                    </div>
                </form>
                <Upload tip="添加图片" url={form.imgUrl} />
                <div className="ui-title fn-mt10">
                    <h3 className="text">具体描述</h3>
                </div>
                <form className="ui-form ui-form-textarea">
                    <div className="item">
                        <label>
                            <div className="input-box">
                                <textarea rows="8"
                                          type="text"
                                          value={form.content}
                                          onChange={this.checkDisabled.bind(this, 'content')}
                                          placeholder="请输入具体描述, 200字以内" />
                            </div>
                        </label>
                    </div>
                </form>
                <div className="oper">
                    <a href="javascript:;"
                       className="ui-btn ui-btn-fixed"
                       disabled={this.state.disabled}
                       onClick={this.add.bind(this)}>提交</a>
                </div>
            </div>
        );
    }
}