/**
 * @file
 * @auth jinguangguo
 * @date 2016/11/6
 */

import React from 'react';
import commonService from '../../../js/app/commonService';
import service from '../service';

export default class AddUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            treetypeList: null,
            goodstypeList: null,
            lengthList: null,
            form: {
                treetypeId: '',
                goodstypeId: '',
                lengthId: ''
            },
            disabled: true
        };
    }
    componentDidMount() {
        // 树种
        commonService.treetypeList().then((rep) => {
            this.setState({
                treetypeList: rep.data.list
            });
        });
        // 货种
        commonService.goodstypeList().then((rep) => {
            this.setState({
                goodstypeList: rep.data.list
            });
        });
        // 长度
        commonService.lengthList().then((rep) => {
            this.setState({
                lengthList: rep.data.list
            });
        });
    }
    checkDisabled(key, event) {
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

        this.setState({
            disabled: disabled
        });

    }
    add() {
        let that = this;
        // 添加
        service.addDimension(this.state.form).then((rep) => {
            if (rep.state === 1) {
                window.toast('添加成功', {
                    callback() {
                        that.props.history.push({
                            pathname: '/add'
                        });
                    }
                });
            } else {
                window.toast('添加失败, 请稍候重试');
            }
        });
    }
    render() {
        return (
            <div className="module-standard">
                <div className="content">
                    <form className="ui-form fn-mt10">
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
                    </form>
                </div>
                <footer className="footer">
                    <a href="javascript:;"
                       disabled={this.state.disabled}
                       onClick={this.add.bind(this)}
                       className="ui-btn ui-btn-fixed">添加</a>
                </footer>
            </div>
        );
    }
}