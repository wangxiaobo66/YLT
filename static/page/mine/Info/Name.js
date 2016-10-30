/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/4
 */

import React from 'react';
import {Link} from 'react-router';
import mixins from './mixins';
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
                name: ''
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

        if ($.trim(form.name) === '') {
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
                            <div className="for">姓名</div>
                            <div className="input-box">
                                <input className="input input-block"
                                       onChange={this.checkDisabled.bind(this, 'name')}
                                       maxLength="30"
                                       type="text"
                                       placeholder="请输入姓名" />
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
                       onClick={this.goBack.bind(this)}>取消</a>
                </div>
            </div>
        );
    }
});
