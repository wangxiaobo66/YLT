/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/17
 */

import React from 'react';
import {Link} from 'react-router';
import {Button} from 'react-bootstrap';

import imgTop from '../img/home-top.png';
import imgLogo from '../img/logo.png';
import imgExmaple from '../img/example.png';

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
            <div className="module-shop-home">
                <div className="header">
                    <div className="header-tp">
                        <img src={imgTop} width="100%" alt=""/>
                        <div className="info">
                            <p className="title">这里是公司名称</p>
                            <p className="sub-title">这里是副标题</p>
                        </div>
                        <div className="logo">
                            <img src={imgLogo} width="62" height="62" />
                        </div>
                    </div>
                    <div className="header-bd">
                        <div className="bd-tab">
                            <div className="tab tab-nums">全部商品: 21</div>
                            <div className="tab tab-divide"></div>
                            <div className="tab tab-location">
                                <i className="icon icon-location"></i>
                                <span className="text">满洲里</span>
                            </div>
                        </div>
                        <div className="bd-desc">这里是描述</div>
                    </div>
                </div>
                <div className="content">
                    <div className="ui-title">
                        <h3 className="text">店铺商品</h3>
                    </div>
                    <ul className="list">
                        <li className="item">
                            <img src={imgExmaple} className="img" width="123" height="62" alt=""/>
                            <div className="info">
                                <p className="title">
                                    <span className="name">落叶松</span>
                                    <span className="length">6米</span>
                                    <span className="type">原木</span>
                                </p>
                                <p className="info-item info-item--big">
                                    <label>直径:</label>
                                    <span className="text">20中</span>
                                </p>
                                <p className="info-item info-item--dgree">
                                    <label>等级:</label>
                                    <span className="text">一级</span>
                                </p>
                                <p className="info-item info-item--address">
                                    <label>口岸:</label>
                                    <span className="text">满洲里</span>
                                </p>
                            </div>
                        </li>
                        <li className="item">
                            <img src={imgExmaple} className="img" width="123" height="62" alt=""/>
                            <div className="info">
                                <p className="title">
                                    <span className="name">落叶松</span>
                                    <span className="length">6米</span>
                                    <span className="type">原木</span>
                                </p>
                                <p className="info-item info-item--big">
                                    <label>直径:</label>
                                    <span className="text">20中</span>
                                </p>
                                <p className="info-item info-item--dgree">
                                    <label>等级:</label>
                                    <span className="text">一级</span>
                                </p>
                                <p className="info-item info-item--address">
                                    <label>口岸:</label>
                                    <span className="text">满洲里</span>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="ui-tab ui-tab-fixed">
                    <a href="javascript;" className="item item--active">店铺首页</a>
                    <Link className="item" to={`/detail`}>店铺详情</Link>
                </div>
            </div>
        );
    }
}