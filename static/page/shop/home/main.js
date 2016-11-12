/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/17
 */

import React from 'react';
import {Link} from 'react-router';
import {LIMIT_COUNT} from '../../../js/app/contants';
import service from '../service';
import CONFIG from '../config'

import imgTop from '../img/home-top.png';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: null,
            repData: null
        };
    }
    componentDidMount() {
        let storeId = this.props.params.id;

        let param = {};
        // -1代表的是当前登录用户的主页
        if (+storeId !== -1) {
            param.storeId = storeId;
        }

        // 详情
        service.showMyStore(param).then((rep) => {
            this.setState({
                detail: rep.result.data
            });
        });

        // 商品列表
        service.unsoldOrdersInStore({
            storeId: storeId,
            limitStart: 0,
            limitCount: LIMIT_COUNT
        }).then((rep) => {
            this.setState({
                repData: rep.result.data
            });
        });

    }
    render() {
        return(
            <div className="module-shop-home">
                {
                    this.state.detail !== null ?
                        <div className="header">
                            <div className="header-tp">
                                <img src={imgTop} width="100%" alt=""/>
                                <div className="info">
                                    <p className="title">{this.state.detail.storeName}</p>
                                    <a href="javascript:;" className="ui-btn ui-btn-small">+关注</a>
                                </div>
                                <div className="logo">
                                    <img src={this.state.detail.store_icon} width="62" height="62" />
                                </div>
                            </div>
                            <div className="header-bd">
                                <div className="bd-tab">
                                    <div className="tab tab-nums">全部商品: {this.state.detail.total}</div>
                                    <div className="tab tab-divide"></div>
                                    <div className="tab tab-location">
                                        <i className="icon icon-location"></i>
                                        <span className="text">{this.state.detail.address}</span>
                                    </div>
                                </div>
                                <div className="bd-desc">{this.state.detail.introduction}</div>
                            </div>
                        </div>
                        :
                        null
                }
                <div className="content">
                    <div className="ui-title">
                        <h3 className="text">店铺商品</h3>
                    </div>
                    {
                        this.state.repData !== null ?
                            <ul className="list">
                                {
                                    this.state.repData.list !== null ?
                                        this.state.repData.list.map((item, index) => {
                                            item.dim = this.state.repData['dim' + item.orderId];
                                            return (
                                                <li className="item">
                                                    <img src={item.imageUrl} className="img" width="123" height="62" alt=""/>
                                                    <div className="info">
                                                        <p className="title">
                                                            <span className="name">{item.dim.treetypeName}</span>
                                                            <span className="length">{item.dim.lengthName}</span>
                                                            <span className="type">{item.dim.goodstypeName}</span>
                                                        </p>
                                                        <p className="info-item info-item--big">
                                                            <label>价格:</label>
                                                            <span className="text">{item.price}</span>
                                                        </p>
                                                        <p className="info-item info-item--dgree">
                                                            <label>数量:</label>
                                                            <span className="text">{item.amount}</span>
                                                        </p>
                                                        <p className="info-item info-item--address">
                                                            <label>口岸:</label>
                                                            <span className="text">{item.locationName}</span>
                                                        </p>
                                                    </div>
                                                </li>
                                            );
                                        })
                                        :
                                        null
                                }
                            </ul>
                            :
                            null
                    }
                </div>
                <div className="ui-tab ui-tab-fixed">
                    <a href="javascript;" className="item item--active">店铺首页</a>
                    <Link className="item" to={`/detail/${this.props.params.id}`}>店铺详情</Link>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    obj: React.PropTypes.object
};
