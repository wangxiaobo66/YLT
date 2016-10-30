/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/17
 */

import React from 'react';
import china from 'china-province-city-district';
import Upload from '../../../component/Upload/Upload';
import service from '../service';

export default class ShopAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            provinces: china.query(),
            citys: null,
            districts: null,
            form: {
                imageUrl: '',
                storeName: '',
                phone: '',
                province: '',
                city: '',
                address: '',
                keywords: '',
                introduction: ''
            },
            disabled: true
        };
    }
    add() {
        // 添加
        service.addMyStore(this.state.form).then((rep) => {
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
    checkDisabled(key, event) {
        let disabled = false;
        let form = this.state.form;

        if (key && event) {
            form[key] = event.target.value;
        }

        // if ($.trim(form.imageUrl) === '') {
        //     disabled = true;
        // }

        if ($.trim(form.storeName) === '') {
            disabled = true;
        }

        if ($.trim(form.province) === '') {
            disabled = true;
        }

        if ($.trim(form.city) === '') {
            disabled = true;
        }

        if ($.trim(form.address) === '') {
            disabled = true;
        }

        if ($.trim(form.keywords) === '') {
            disabled = true;
        }

        if ($.trim(form.introduction) === '') {
            disabled = true;
        }

        this.setState({
            disabled: disabled
        });

    }
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
        } else if (key === 'address') {
            form.address = value;
        }
        this.checkDisabled();
    }
    render() {
        let form = this.state.form;
        return(
            <div className="module-shop-add">
                <header className="header">
                    <Upload tip="添加logo" />
                </header>
                <article className="article">
                    <div className="article-box">
                        <div className="ui-title">
                            <h3 className="text">店铺详细信息</h3>
                        </div>
                        <form className="ui-form">
                            <div className="item">
                                <label>
                                    <div className="for">店铺名称</div>
                                    <div className="input-box">
                                        <input className="input input-block"
                                               value={form.storeName}
                                               onChange={this.checkDisabled.bind(this, 'storeName')}
                                               type="text"
                                               placeholder="请输入店铺名称" />
                                    </div>
                                </label>
                            </div>
                            <div className="item">
                                <label>
                                    <div className="for">店铺电话</div>
                                    <div className="input-box">
                                        <input className="input input-block"
                                               type="tel"
                                               value={form.phone}
                                               onChange={this.checkDisabled.bind(this, 'phone')}
                                               placeholder="请输入联系方式" />
                                    </div>
                                </label>
                            </div>
                            <div className="item">
                                <label>
                                    <div className="for">店铺地址</div>
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
                                    <div className="for">&nbsp;</div>
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
                            <div className="item">
                                <label>
                                    <div className="for">&nbsp;</div>
                                    <div className="input-box input-box--select">
                                        <select className="ui-select"
                                                value={this.state.form.address}
                                                onChange={this.checkLocation.bind(this, 'address')}>
                                            <option value="">请选择所在区域(区)</option>
                                            {
                                                this.state.districts !== null ?
                                                    this.state.districts.map((text, index) => {
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
                    </div>
                    <div className="article-box">
                        <div className="ui-title">
                            <h3 className="text">店铺推广</h3>
                        </div>
                        <form className="ui-form">
                            <div className="item">
                                <label>
                                    <div className="for">关键词</div>
                                    <div className="input-box">
                                        <input className="input input-block" type="text" placeholder="用空格间隔关键词" />
                                    </div>
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className="article-box">
                        <div className="ui-title">
                            <h3 className="text">店铺介绍</h3>
                        </div>
                        <form className="ui-form ui-form-textarea">
                            <div className="item">
                                <label>
                                    <div className="input-box">
                                        <textarea rows="8" placeholder="请用简洁的文字对店铺进行简单的介绍，分享店铺时，客户可以第一 时间了解店铺的情况（30字以内）" />
                                    </div>
                                </label>
                            </div>
                        </form>
                    </div>
                </article>
                <footer className="footer">
                    <a href="javascript:;"
                       disabled={this.state.disabled}
                       onClick={this.add.bind(this)}
                       className="ui-btn ui-btn-fixed">发布店铺</a>
                </footer>
            </div>
        );
    }
}