/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/17
 */

import React from 'react';
import {Link} from 'react-router';

import imgLogo from '../img/logo.png';
import imgE1 from '../img/example.png';

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
            <div className="module-shop-list">
                <div className="ui-top-select">
                    <label className="item">
                        <span className="for">地区</span>
                        <select className="select">
                            <option value="">选择</option>
                            <option value="1">满洲里</option>
                            <option value="2">缨芬河</option>
                            <option value="2">二连浩特</option>
                            <option value="2">其他</option>
                        </select>
                    </label>
                    <label className="item">
                        <span className="for">类型</span>
                        <select className="select">
                            <option value="">选择</option>
                            <option value="1">机械设备</option>
                            <option value="2">器材销售</option>
                        </select>
                    </label>
                </div>
                <div className="list-box">
                    <ul className="list">
                        <li className="item">
                            <Link className="item-link" to={`/home`}>
                                <div className="item-info">
                                    <img className="img" src={imgLogo} width="45" height="45" alt=""/>
                                    <div className="info-detail">
                                        <div className="title">
                                            <div className="title-location">
                                                <i className="icon icon-location"></i>
                                                <span className="text">满洲里</span>
                                            </div>
                                            <div className="title-name">公司名称</div>
                                        </div>
                                        <div className="sub-title">这里暂时是副标题</div>
                                        <div className="desc">公司介绍内容</div>
                                    </div>
                                </div>
                                <div className="goods-box">
                                    <ul className="goods clearfix">
                                        <li className="item">
                                            <img src={imgE1} width="123" height="63" alt=""/>
                                        </li>
                                        <li className="item">
                                            <img src={imgE1} width="123" height="63" alt=""/>
                                        </li>
                                        <li className="item">
                                            <img src={imgE1} width="123" height="63" alt=""/>
                                        </li>
                                    </ul>
                                </div>
                            </Link>
                        </li>
                        <li className="item">
                            <Link className="item-link" to={`/home`}>
                                <div className="item-info">
                                    <img className="img" src={imgLogo} width="45" height="45" alt=""/>
                                    <div className="info-detail">
                                        <div className="title">
                                            <div className="title-location">
                                                <i className="icon icon-location"></i>
                                                <span className="text">满洲里</span>
                                            </div>
                                            <div className="title-name">公司名称</div>
                                        </div>
                                        <div className="sub-title">这里暂时是副标题</div>
                                        <div className="desc">公司介绍内容</div>
                                    </div>
                                </div>
                                <div className="goods-box">
                                    <ul className="goods clearfix">
                                        <li className="item">
                                            <img src={imgE1} width="123" height="63" alt=""/>
                                        </li>
                                        <li className="item">
                                            <img src={imgE1} width="123" height="63" alt=""/>
                                        </li>
                                        <li className="item">
                                            <img src={imgE1} width="123" height="63" alt=""/>
                                        </li>
                                    </ul>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link className="ui-btn ui-btn-fixed" to={`/add`}>我要开店</Link>
            </div>
        );
    }
}