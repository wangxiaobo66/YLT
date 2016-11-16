/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/4
 */

import React from 'react';
import {Link} from 'react-router';
import mixins from './mixins';
import VerifyCode from '../_common/VerifyCode/VerifyCode';
import service from '../service';

export default React.createClass({
    mixins: [mixins],
    /**
     * 初始化
     */
    getInitialState() {
        return {
            disabled: true,
            form: {
                mobile: '',
                code: ''
            }
        };
    },
    componentDidMount() {

    },
    sure() {
        let that = this;
        service.update(this.state.form).then((rep) => {
            window.toast('修改成功', {
                callback() {
                    that.props.history.push({
                        pathname: '/info'
                    });
                }
            });

        });
    },
    checkDisabled(key, event) {
        let disabled = false;
        let form = this.state.form;

        if (key && event) {
            form[key] = event.target.value;
        }

        if ($.trim(form.mobile) === '') {
            disabled = true;
        }

        if ($.trim(form.code) === '' || $.trim(form.code).length !== 6) {
            disabled = true;
        }

        this.setState({
            disabled: disabled
        });

    },
    render() {
        return (
            <div className="module-info-detail">
                <form className="ui-form">
                    <div className="item">
                        <label>
                            <div className="for">手机号</div>
                            <div className="input-box">
                                <input className="input input-block"
                                       type="tel"
                                       maxLength="11"
                                       onChange={this.checkDisabled.bind(this, 'mobile')}
                                       placeholder="请输入手机号" />
                            </div>
                        </label>
                    </div>
                    <div className="item">
                        <label>
                            <div className="for">验证码</div>
                            <div className="input-box">
                                <VerifyCode mobile={this.state.form.mobile} />
                                <input className="input input-block"
                                       type="tel"
                                       maxLength="6"
                                       onChange={this.checkDisabled.bind(this, 'code')}
                                       placeholder="请输入验证码" />
                            </div>
                        </label>
                    </div>
                </form>
                <div className="ui-btn-groups">
                    <a href="javascript:;"
                       disabled={this.state.disabled === true}
                       onClick={this.sure.bind(this)}
                       className="ui-btn ui-btn-confirm">确定</a>
                    <a href="javascript:;" className="ui-btn ui-btn-default"
                       onClick={this.goBack}>取消</a>
                </div>
            </div>
        );
    }
});
