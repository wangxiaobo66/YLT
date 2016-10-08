/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/4
 */

import React from 'react';
import {Link} from 'react-router';
import Nav from '../../../component/Nav/Nav';
import Header from '../_common/Header/Header';
import imgLogo from '../../../images/logo.png';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className="module-index">
                <Header text="昵称/手机号" src={imgLogo} href="/info" />
                <div className="content">
                    <div className="content-grid">
                        <ul className="list clearfix">
                            <li className="item">
                                <Link className="item-link" to={`/msg_list`}>
                                    <span className="text">我的消息<em className="ui-num">2</em></span>
                                </Link>
                            </li>
                            <li className="item">
                                <a href="/template/shop.html#home" className="item-link">
                                    <span className="text">我的店铺</span>
                                </a>
                            </li>
                            <li className="item">
                                <Link className="item-link" to={`/askbuy`}>
                                    <span className="text">我的木材求购</span>
                                </Link>
                            </li>
                            <li className="item">
                                <Link className="item-link" to={`/market`}>
                                    <span className="text">我的未售市场</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="content-row">
                        <ul className="list">
                            <li className="item">
                                <Link className="item-link" to={`/service`}>
                                    <div className="allow">
                                        <i className="icon icon-right"></i>
                                    </div>
                                    <div className="info">
                                        <i className="icon icon-identity"></i>
                                        <span className="text">我的服务</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="item">
                                <Link className="item-link" to={`/care`}>
                                    <div className="allow">
                                        <i className="icon icon-right"></i>
                                    </div>
                                    <div className="info">
                                        <i className="icon icon-love"></i>
                                        <span className="text">我的关注</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="item">
                                <Link className="item-link" to={`/setting`}>
                                    <div className="allow">
                                        <i className="icon icon-right"></i>
                                    </div>
                                    <div className="info">
                                        <i className="icon icon-setting"></i>
                                        <span className="text">设置</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer">
                    <Nav current="mine" />
                </div>
            </div>
        );
    }
}