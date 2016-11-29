/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/15
 */

import './style.scss';

import React from 'react';
import appUtil from '../../../js/app/util';
import commonService from '../../../js/app/commonService';
import service from '../service';
import util from '../util';

export default class Guige extends React.Component {
    constructor(props) {
        super(props);
        let date = new Date();
        this.state = {
            treetypeList: null,
            goodstypeList: null,
            lengthList: null,
            portList: null,
            form: { // 要添加的对象
                treetypeId: '',
                goodstypeId: '',
                lengthId: '',
                portId: '',
                startTime: date,
                endTime: ''
            },
            disabled: true
        };
    }
    add() {
        let that = this;
        // 添加
        service.addGg(this.state.form).then((rep) => {
            if (rep.state === 1) {
                window.toast('添加成功', {
                    callback() {
                        that.props.history.push({
                            pathname: '/'
                        });
                    }
                });
            } else {
                window.toast('添加失败, 请稍候重试');
            }
        });
    }
    componentDidMount() {
        // 树种
        commonService.treetypeList().then((rep) => {
            this.setState({
                treetypeList: rep.result.list
            });
        });
        // 货种
        commonService.goodstypeList().then((rep) => {
            this.setState({
                goodstypeList: rep.result.list
            });
        });
        // 长度
        commonService.lengthList().then((rep) => {
            this.setState({
                lengthList: rep.result.list
            });
        });
        // 口岸
        commonService.portList().then((rep) => {
            this.setState({
                portList: rep.result.list
            });
        });
    }
    checkTime(key, event) {
        util.checkTime.call(this, key, event.target.value);
    }
    checkDisabled(key, event) {
        let date = new Date();
        let disabled = false;
        let form = this.state.form;

        if (key && event) {
            form[key] = event.target.value;
        }

        if ($.trim(form.treetypeId) === '') {
            disabled = true;
        }

        if ($.trim(form.goodstypeId) === '') {
            disabled = true;
        }

        if ($.trim(form.lengthId) === '') {
            disabled = true;
        }

        if ($.trim(form.portId) === '') {
            disabled = true;
        }

        if ($.trim(form.endTime) === '') {
            disabled = true;
        }

        if ($.trim(form.endTime)<date) {
            window.toast('结束时间必须大于开始时间');
            disabled = true;
        }

        this.setState({
            disabled: disabled
        });

    }
    render() {
        return(
            <div className="module-gg">
                <div className="ui-title">选择您要订阅的货物规格，该规格的货物到货后，会将信息推送给您</div>
                <form className="ui-form">
                    <div className="item">
                        <label>
                            <div className="for">树种</div>
                            <div className="input-box input-box--select">
                                <select className="ui-select"
                                        value={this.state.form.treetypeId}
                                        onChange={this.checkDisabled.bind(this, 'treetypeId')}>
                                    <option value="">请选择</option>
                                    {
                                        this.state.treetypeList !== null ?
                                            this.state.treetypeList.map((item, index) => {
                                                return <option key={item.id} value={item.id}>{item.name}</option>;
                                            })
                                            :
                                            null
                                    }
                                </select>
                            </div>
                        </label>
                    </div>
                    <div className="item">
                        <label>
                            <div className="for">货种</div>
                            <div className="input-box input-box--select">
                                <select className="ui-select"
                                        value={this.state.form.goodstypeId}
                                        onChange={this.checkDisabled.bind(this, 'goodstypeId')}>
                                    <option value="">请选择</option>
                                    {
                                        this.state.goodstypeList !== null ?
                                            this.state.goodstypeList.map((item, index) => {
                                                return <option key={item.id} value={item.id}>{item.name}</option>;
                                            })
                                            :
                                            null
                                    }
                                </select>
                            </div>
                        </label>
                    </div>
                    <div className="item">
                        <label>
                            <div className="for">长度</div>
                            <div className="input-box input-box--select">
                                <select className="ui-select"
                                        value={this.state.form.lengthId}
                                        onChange={this.checkDisabled.bind(this, 'lengthId')}>
                                    <option value="">请选择</option>
                                    {
                                        this.state.lengthList !== null ?
                                            this.state.lengthList.map((item, index) => {
                                                return <option key={item.id} value={item.id}>{item.name}</option>;
                                            })
                                            :
                                            null
                                    }
                                </select>
                            </div>
                        </label>
                    </div>
                    <div className="item">
                        <label>
                            <div className="for">口岸</div>
                            <div className="input-box input-box--select">
                                <select className="ui-select"
                                        value={this.state.form.portId}
                                        onChange={this.checkDisabled.bind(this, 'portId')}>
                                    <option value="">请选择</option>
                                    {
                                        this.state.portList !== null ?
                                            this.state.portList.map((item, index) => {
                                                return <option key={item.id} value={item.id}>{item.name}</option>;
                                            })
                                            :
                                            null
                                    }
                                </select>
                            </div>
                        </label>
                    </div>
                    <div className="item">
                        <label>
                            <div className="for">订阅时间</div>
                            <div className="input-box">
                                <p className="p col-xs-5">{appUtil.formatTime(this.state.form.startTime)}</p>
                                <span className="col-xs-1">到</span>
                                <input className="input input-inline col-xs-5"
                                       value={appUtil.formatTime(this.state.form.endTime)}
                                       onChange={(e) => this.onchange(e,'endTime')}
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
    onchange(e,name){
        let val = e.target.value;
        let form = this.state.form;
        switch (name) {
            case 'endTime':
                form.endTime = val;
                this.setState({
                    form:form
                });
                break;
        }
    }
}