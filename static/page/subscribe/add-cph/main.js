/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/15
 */

import './style.scss';

import React from 'react';
import appUtil from '../../../js/app/util';
import service from '../service';
import util from '../util';

export default class Chepihao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                no: '',
                startTime: '',
                endTime: ''
            },
            disabled: true
        };
    }
    add() {
        // 添加
        service.addCph(this.state.form).then((rep) => {
            if (rep.state === 1) {
                window.toast('添加成功', {
                    callback() {
                        // TODO 跳转到我的订阅
                        // window.location.href = './mine.html';
                    }
                });
            } else {
                window.toast('添加失败, 请稍候重试');
            }
        });
    }
    componentDidMount() {

    }
    checkTime(key, event) {
        util.checkTime.call(this, key, event.target.value);
    }
    checkDisabled(key, event) {
        let disabled = false;
        let form = this.state.form;

        if (key && event) {
            form[key] = event.target.value;
        }

        if ($.trim(form.no) === '') {
            disabled = true;
        }

        if ($.trim(form.startTime) === '') {
            disabled = true;
        }

        if ($.trim(form.endTime) === '') {
            disabled = true;
        }

        this.setState({
            disabled: disabled
        });

    }
    render() {
        return(
            <div className="module-cph">
                <div className="ui-title">输入您要订阅的车皮号，该车皮的木材到货后，会将信息推送给您</div>
                <form className="ui-form">
                    <div className="item">
                        <label>
                            <div className="for">车皮号</div>
                            <div className="input-box">
                                <input className="input input-block"
                                       type="text"
                                       value={this.state.form.no}
                                       onChange={this.checkDisabled.bind(this, 'no')}
                                       maxLength="100"
                                       placeholder="请输入车皮号" />
                            </div>
                        </label>
                    </div>
                    <div className="item">
                        <label>
                            <div className="for">订阅时间</div>
                            <div className="input-box">
                                <input className="input input-inline col-xs-5"
                                       value={appUtil.formatTime(this.state.form.startTime)}
                                       onChange={this.checkTime.bind(this, 'startTime')}
                                       type="date"
                                       placeholder="开始时间" />
                                <span className="col-xs-1">到</span>
                                <input className="input input-inline col-xs-5"
                                       value={appUtil.formatTime(this.state.form.endTime)}
                                       onChange={this.checkTime.bind(this, 'endTime')}
                                       type="date"
                                       placeholder="结束时间" />
                            </div>
                        </label>
                    </div>
                </form>
                <div className="oper">
                    <a href="javascript:;"
                       className="ui-btn ui-btn-fixed"
                       disabled={this.state.disabled}
                       onClick={this.add.bind(this)}>新增订阅</a>
                </div>
            </div>
        );
    }
}