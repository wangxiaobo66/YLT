/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/17
 */

import React from 'react';
import {Button} from 'react-bootstrap';

export default class Chepihao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {

    }
    render() {
        return(
            <div className="module-shop-add">
                <header className="header">
                    <div className="logo">
                        <div className="logo-box">
                            <div className="info-box">
                                <div className="info">
                                    <p className="icon-box">
                                        <i className="icon icon-plus"></i>
                                    </p>
                                    <p className="info-tip">添加logo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <article className="article">
                    <div className="article-box">
                        <div className="ui-title">
                            <h3 className="text">店铺详细信息</h3>
                        </div>
                        <form className="ui-form">
                            <div className="item">
                                <label>
                                    <div className="for">店铺分类</div>
                                    <div className="input-box input-box--select">
                                        <select className="ui-select">
                                            <option value="请选择店铺类型">请选择店铺类型</option>
                                            <option value="1">木材销售</option>
                                            <option value="2">机械设备</option>
                                        </select>
                                    </div>
                                </label>
                            </div>
                            <div className="item">
                                <label>
                                    <div className="for">店铺名称</div>
                                    <div className="input-box">
                                        <input className="input input-block" type="text" placeholder="请输入店铺名称" />
                                    </div>
                                </label>
                            </div>
                            <div className="item">
                                <label>
                                    <div className="for">店铺电话</div>
                                    <div className="input-box">
                                        <input className="input input-block" type="text" placeholder="请输入联系方式" />
                                    </div>
                                </label>
                            </div>
                            <div className="item">
                                <label>
                                    <div className="for">店铺地址</div>
                                    <div className="input-box">
                                        <div className="icon-box">
                                            <i className="icon icon-right"></i>
                                        </div>
                                        <input className="input input-block" type="text" placeholder="请输入所在区域(省)" />
                                    </div>
                                </label>
                            </div>
                            <div className="item">
                                <label>
                                    <div className="for">&nbsp;</div>
                                    <div className="input-box">
                                        <div className="icon-box">
                                            <i className="icon icon-right"></i>
                                        </div>
                                        <input className="input input-block" type="text" placeholder="请输入所在区域(市)" />
                                    </div>
                                </label>
                            </div>
                            <div className="item">
                                <label>
                                    <div className="for">&nbsp;</div>
                                    <div className="input-box">
                                        <div className="icon-box">
                                            <i className="icon icon-right"></i>
                                        </div>
                                        <input className="input input-block" type="text" placeholder="请输入所在区域(区)" />
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
                    <a href="javascript:;" className="ui-btn ui-btn-fixed">发布店铺</a>
                </footer>
            </div>
        );
    }
}