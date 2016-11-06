/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/6
 */

import React from 'react';
import {Link} from 'react-router';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [

            ]
        };
    }
    componentDidMount() {

    }
    render() {
        let that = this;
        return (
            <div className="module-add fn-mt10">
                <form className="ui-form">
                    <div className="item">
                        <label>
                            <div className="for">口岸</div>
                            <div className="input-box input-box--select">
                                <select className="ui-select">
                                    <option value="请选择口岸">请选择口岸</option>
                                    <option value="1">满洲里</option>
                                    <option value="2">缨芬河</option>
                                    <option value="2">二连浩特</option>
                                    <option value="2">其他</option>
                                </select>
                            </div>
                        </label>
                    </div>
                    <div className="item">
                        <label>
                            <div className="for">树种</div>
                            <div className="input-box input-box--select">
                                <select className="ui-select">
                                    <option value="请选择树种">请选择树种</option>
                                    <option>松树</option>
                                    <option>杨树</option>
                                    <option>柳树</option>
                                </select>
                            </div>
                        </label>
                    </div>
                    <div className="item">
                        <label>
                            <div className="for">货种</div>
                            <div className="input-box input-box--select">
                                <select className="ui-select">
                                    <option value="请选择货种">请选择货种</option>
                                    <option>板材</option>
                                    <option>原木</option>
                                    <option>地板</option>
                                </select>
                            </div>
                        </label>
                    </div>
                    <div className="item">
                        <label>
                            <div className="for">长度</div>
                            <div className="input-box input-box--select">
                                <select className="ui-select">
                                    <option value="请选择长度">请选择长度</option>
                                    <option>三米</option>
                                    <option>四米</option>
                                    <option>五米</option>
                                </select>
                            </div>
                        </label>
                    </div>
                </form>
                <form className="ui-form fn-mt10">
                    <div className="item">
                        <label>
                            <div className="for">买家</div>
                            <div className="input-box">
                                <input className="input input-block"
                                       type="text"
                                       placeholder="请输入货主姓名" />
                            </div>
                        </label>
                    </div>
                    <div className="item">
                        <label>
                            <div className="for">手机号</div>
                            <div className="input-box">
                                <input className="input input-block" type="tel"
                                       placeholder="请输入手机号" />
                            </div>
                        </label>
                    </div>
                </form>
                <form className="ui-form fn-mt10">
                    <div className="item">
                        <label>
                            <div className="for">价格</div>
                            <div className="input-box">
                                <input className="input input-block"
                                       type="text"
                                       placeholder="请输入价格" />
                            </div>
                        </label>
                    </div>
                    <div className="item">
                        <label>
                            <div className="for">总货量</div>
                            <div className="input-box">
                                <input className="input input-block"
                                       type="text"
                                       placeholder="50-120立方米" />
                            </div>
                        </label>
                    </div>
                </form>
                <div className="ui-title fn-mt10">
                    <h3 className="text">求购内容</h3>
                </div>
                <form className="ui-form ui-form-textarea">
                    <div className="item">
                        <label>
                            <div className="input-box">
                                <textarea rows="8" placeholder="请输入求购内容, 200字以内" />
                            </div>
                        </label>
                    </div>
                </form>
                <div className="ui-check-tip fn-mt10">
                    <label>
                        <div className="tip-box">
                            <input type="checkbox" />
                            <i className="icon icon-o-check"></i>
                            <span className="text">订阅匹配未售市场信息</span>
                        </div>
                    </label>
                </div>
                <footer className="footer">
                    <a href="#add" className="ui-btn ui-btn-fixed">发布求购</a>
                </footer>
            </div>
        );
    }
}