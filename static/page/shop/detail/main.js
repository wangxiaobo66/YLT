/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/17
 */

import React from 'react';
import {Link} from 'react-router';

import service from '../service';

import imgLogo from '../img/logo.png';

export default class Chepihao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: null,
            showQrcode: true
        };
    }
    componentDidMount() {
        let storeId = this.props.params.id;

        // 详情
        service.showMyStore({
            storeId: storeId
        }).then((rep) => {
            this.setState({
                detail: rep.data
            });
        });
    }

    showQrcode() {
        this.setState({
            showQrcode: true
        });
    }

    hideQrcode() {
        this.setState({
            showQrcode: false
        });
    }

    render() {
        let detail = this.state.detail;
        return(
            <div className="module-shop-detail">
                {
                    detail !== null ?
                        <div className="shop-box">
                            <div className="header">
                                <div className="img">
                                    <img src={imgLogo} width="60" height="60" alt=""/>
                                </div>
                                <div className="info">
                                    <p className="title">{detail.storeName}</p>
                                    <p className="care">关注人数: {detail.focus_num}</p>
                                </div>
                            </div>
                            <div className="tabs clearfix">
                                <div className="item">
                                    <p className="num">{detail.total}</p>
                                    <p className="tip">全部商品</p>
                                </div>
                                <div className="divide">|</div>
                                <div className="item">
                                    <p className="num">{detail.newest_goods_num}</p>
                                    <p className="tip">最新商品</p>
                                </div>
                            </div>
                            <div className="detail">
                                <div className="ui-card ui-card--right">
                                    <a href={`tel:${detail.phone}`} className="item fn-block">
                                        <label>联系货主</label>
                                        <span className="text">
                                            <i className="icon icon-o-right"></i>
                                        </span>
                                    </a>
                                    <div className="item" onClick={this.showQrcode.bind(this)}>
                                        <label>店铺二维码</label>
                                        <div className="text">
                                            <i className="icon icon-qrcode"></i>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <label>客服电话</label>
                                        <div className="text">
                                            {detail.serviceTel}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="detail">
                                <div className="ui-card">
                                    <div className="item">
                                        <label>所在地区</label>
                                        <div className="text">
                                            {detail.province}{detail.city}{detail.address}
                                        </div>
                                    </div>
                                    <div className="item">
                                        <label>开店时间</label>
                                        <div className="text">
                                            {moment(detail.createTime).format('YYYY-MM-DD hh:mm:ss')}
                                        </div>
                                    </div>
                                    <div className="item">
                                        <label>店铺介绍</label>
                                        <div className="text">
                                            {detail.introduction}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ui-tab ui-tab-fixed">
                                <Link className="item" to={`/home/${detail.id}`}>店铺首页</Link>
                                <a href="javascript;" className="item item--active">店铺详情</a>
                            </div>
                            <div className={this.state.showQrcode === true ? 'qrcode fn-block' : 'qrcode fn-none'}>
                                <div className="qrcode-box">
                                    <img src={detail.qrCode} width="150" height="150" alt=""/>
                                    <div className="qrcode-close" onClick={this.hideQrcode.bind(this)}>
                                        &times;
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        null
                }
                
            </div>
        );
    }
}