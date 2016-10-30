/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/4
 */

import React from 'react';
import {Link} from 'react-router';
import china from 'china-province-city-district';
import mixins from './mixins';
import service from './service';

export default React.createClass({
    mixins: [mixins],
    /**
     * 初始化
     */
    getInitialState() {
        return {
            provinces: china.query(),
            citys: null,
            form: {
                province: '',
                city: ''
            },
            disabled: true
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
    checkLocation(key, event) {
        let form = this.state.form;
        let value = event.target.value;
        if (key === 'province') {
            form.province = value;
            this.state.citys = china.query(value);
            this.state.districts = null;
        } else if (key === 'city') {
            form.city = value;
            this.state.districts = china.query(value);
        }
        this.checkDisabled();
    },
    checkDisabled(key, event) {
        let disabled = false;
        let form = this.state.form;

        if (key && event) {
            form[key] = event.target.value;
        }

        if ($.trim(form.province) === '') {
            disabled = true;
        }

        if ($.trim(form.city) === '') {
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
                            <div className="for">省份</div>
                            <div className="input-box input-box--select">
                                <select className="ui-select"
                                        value={this.state.form.province}
                                        placeholder="请选择所在区域(省)"
                                        onChange={this.checkLocation.bind(this, 'province')}>
                                    <option value="">请选择所在区域(省)</option>
                                    {
                                        this.state.provinces !== null ?
                                            this.state.provinces.map((text, index) => {
                                                return <option key={text} value={text}>{text}</option>;
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
                            <div className="for">城市</div>
                            <div className="input-box input-box--select">
                                <select className="ui-select"
                                        value={this.state.form.city}
                                        onChange={this.checkLocation.bind(this, 'city')}>
                                    <option value="">请选择所在区域(市)</option>
                                    {
                                        this.state.citys !== null ?
                                            this.state.citys.map((text, index) => {
                                                return <option key={text} value={text}>{text}</option>;
                                            })
                                            :
                                            null
                                    }
                                </select>
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
