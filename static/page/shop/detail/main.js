/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/17
 */

import React from 'react';
import {Link} from 'react-router';

import imgLogo from '../img/logo.png';

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
            <div className="module-shop-detail">
                <div className="header">
                    <div className="img">
                        <img src={imgLogo} width="60" height="60" alt=""/>
                    </div>
                    <div className="info">
                        <p className="title">这里是公司名称</p>
                        <p className="sub-title">这里是副标题</p>
                        <p className="care">关注人数: 21</p>
                    </div>
                </div>
                <div className="tabs clearfix">
                    <div className="item">
                        <p className="num">21</p>
                        <p className="tip">全部商品</p>
                    </div>
                    <div className="divide">|</div>
                    <div className="item">
                        <p className="num">22</p>
                        <p className="tip">最新商品</p>
                    </div>
                </div>
                <div className="detail">
                    <div className="ui-card ui-card--right">
                        <div className="item">
                            <label>联系货主</label>
                            <div className="text">
                                <i className="icon icon-right"></i>
                            </div>
                        </div>
                        <div className="item">
                            <label>店铺二维码</label>
                            <div className="text">
                                <img src={imgLogo} width="22" height="22" alt=""/>
                            </div>
                        </div>
                        <div className="item">
                            <label>客服电话</label>
                            <div className="text">
                                18711112222
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detail">
                    <div className="ui-card">
                        <div className="item">
                            <label>所在地区</label>
                            <div className="text">
                                内蒙古呼伦贝尔满洲里市
                            </div>
                        </div>
                        <div className="item">
                            <label>开店时间</label>
                            <div className="text">
                                2016-08-03   17：23
                            </div>
                        </div>
                        <div className="item">
                            <label>店铺介绍</label>
                            <div className="text">
                                本公司常年生产加工俄罗斯樟子松，代理俄 罗斯木材进口业务
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui-tab ui-tab-fixed">
                    <Link className="item" to={`/home`}>店铺首页</Link>
                    <a href="javascript;" className="item item--active">店铺详情</a>
                </div>
            </div>
        );
    }
}