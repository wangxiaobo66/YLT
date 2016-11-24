/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/4
 */

import React from 'react';
import {Link} from 'react-router';
import Upload from '../../../component/Upload/Upload';
import commonService from '../../../js/app/commonService';

import service from '../service';

export default class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typeList: null,
            form: {
                typeId: '',
                imgUrl: '',
                content: ''
            },
            disabled: true
        };
    }
    componentDidMount() {
        // 举报类型
        commonService.reportTypeList().then((rep) => {
            this.setState({
                typeList: rep.result.list
            });
        });
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

        // if ($.trim(form.imgUrl) === '') {
        //     disabled = true;
        // }

        if ($.trim(form.content) === '') {
            disabled = true;
        }

        this.setState({
            disabled: disabled
        });

    }
    onUploadSuccess(imgUrl , fileId , iconUrl ) {
        let form = this.state.form;
        form.imgUrl = imgUrl;
        form.fileId = fileId;
        form.iconUrl = iconUrl;
        this.checkDisabled();
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
                                        value={this.state.form.typeId}
                                        onChange={this.checkDisabled.bind(this, 'typeId')}>
                                    <option value="">请选择</option>
                                    {
                                        this.state.typeList !== null ?
                                            this.state.typeList.map((item, index) => {
                                                return <option key={item.id} value={item.id}>{item.name}</option>;
                                            })
                                            :
                                            null
                                    }
                                </select>
                            </div>
                        </label>
                    </div>
                </form>
                <Upload tip="添加图片"
                        onUploadSuccess={this.onUploadSuccess.bind(this)}
                        url="/feedback/filesUpload" />
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