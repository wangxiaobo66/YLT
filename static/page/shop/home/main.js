/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/17
 */

import React from 'react';
import {Link} from 'react-router';
import {LIMIT_COUNT} from '../../../js/app/contants';
import service from '../service';
import CONFIG from '../config';
import commonService from '../../../js/app/commonService';
import {CARE_TYPE_STORE, STORE_LOGO_DEFAULT} from '../../../js/app/contants';

import imgTop from '../img/home-top.png';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: null,
            list: null,
            cared: 'false'
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
        service.showStore(param).then((rep) => {
            this.setState({
                detail: rep.result.data
            });
        });

        let listParam = {
            storeId: storeId,
            limitStart: 0,
            limitCount: LIMIT_COUNT
        };
        // 商品列表
        service.unsoldList(listParam).then((rep) => {
            this.setState({
                list: rep.result.list
            });
        });

        // 是否已关注
        commonService.showFocus({
            id: storeId,
            type: CARE_TYPE_STORE
        }).then((rep) => {
            this.setState({
                cared: rep.result.data
            });
        });

    }

    care() {
        let that = this;

        commonService.addInterest({
            type: CARE_TYPE_STORE,
            storeId: this.props.params.id
        }).then(rep => {
            if (rep.state === 1) {
                window.toast('关注成功', {
                    callback() {
                        that.setState({
                            cared: true
                        });
                    }
                });
            } else {
                window.toast('添加失败, 请稍候重试');
            }
        });
    }

    render() {
        return (
            <div className="module-shop-home">
                {
                    this.state.detail !== null ?
                        <div className="header">
                            <div className="header-tp">
                                <img src={imgTop} width="100%" alt=""/>
                                <div className="info">
                                    <p className="title">{this.state.detail.storeName}</p>
                                    {
                                        this.state.cared === 'false'?
                                            <a href="javascript:;"
                                               onClick={this.care.bind(this)}
                                               className="ui-btn ui-btn-small">+关注</a>
                                            :
                                            <a href="javascript:;"
                                               className="ui-btn ui-btn-small">已关注</a>
                                    }
                                </div>
                                <div className="logo">
                                    <img src={this.state.detail.logoUrl || STORE_LOGO_DEFAULT} width="62" height="62"/>
                                </div>
                            </div>
                            <div className="header-bd">
                                <div className="bd-tab">
                                    <div className="tab tab-nums">全部商品: {this.state.detail.total}</div>
                                    <div className="tab tab-divide"></div>
                                    <div className="tab tab-location">
                                        <i className="icon icon-location"></i>
                                        <span
                                            className="text">{this.state.detail.province} {this.state.detail.city}</span>
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
                    <ul className="list">
                        {
                            this.state.list !== null ?
                                this.state.list.length > 0 ?
                                    this.state.list.map((item, index) => {
                                        return (
                                            <li className="item">
                                                <a className="item-link" href={`./market.html#/detail/${item.orderId}`}>
                                                    <img src={item.iconUrl} className="img" width="123" height="62" alt=""/>
                                                    <div className="info">
                                                        <p className="title">
                                                            <span className="name">{item.dim.treetypeName}&nbsp;</span>
                                                            <span className="length">{item.dim.lengthName}&nbsp;</span>
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
                                                </a>
                                            </li>
                                        );
                                    })
                                    :
                                    <li className="item no-data">暂无数据</li>
                                :
                                null
                        }
                    </ul>
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
