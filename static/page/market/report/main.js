/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/24
 */

import React from 'react';

import commonService from '../../../js/app/commonService';
import service from '../service';

export default class Report extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typeList: null,
            form: {
                orderType: this.props.params.orderType,
                orderId: this.props.params.orderId,
                typeId: '',
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
    checkDisabled(key, event) {
        let disabled = false;
        let form = this.state.form;

        if (key && event) {
            form[key] = event.target.value;
        }

        if ($.trim(form.typeId) === '') {
            disabled = true;
        }

        if ($.trim(form.content) === '') {
            disabled = true;
        }

        this.setState({
            disabled: disabled
        });

    }
    add() {
        let that = this;
        service.addUnsoldReport(this.state.form).then(rep => {
            if (rep.state === 1) {
                window.toast('添加成功', {
                    callback() {
                        window.history.go(-1);
                    }
                });
            } else {
                window.toast('添加失败, 请稍候重试');
            }
        });
    }
    render() {
        return(
            <div className="module-report">
                <form className="ui-form">
                    <div className="item">
                        <label>
                            <div className="for">举报类型</div>
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
                <div className="ui-title fn-mt10">
                    <h3 className="text">具体描述</h3>
                </div>
                <form className="ui-form ui-form-textarea">
                    <div className="item">
                        <label>
                            <div className="input-box">
                                <textarea rows="8"
                                          value={this.state.form.content}
                                          onChange={this.checkDisabled.bind(this, 'content')}
                                          maxLength="200"
                                          placeholder="请输入具体描述, 200字以内" />
                            </div>
                        </label>
                    </div>
                </form>
                <footer className="footer">
                    <a href="javascript:;"
                       disabled={this.state.disabled}
                       onClick={this.add.bind(this)}
                       className="ui-btn ui-btn-fixed">提交</a>
                </footer>
            </div>
        );
    }
}