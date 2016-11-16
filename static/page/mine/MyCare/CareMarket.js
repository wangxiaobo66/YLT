/**
 * @file
 * @auth jinguangguo
 * @date 2016/11/4
 */

import React from 'react';
import {Link} from 'react-router';
import Market from '../../../component/Market/Market';
import {LIMIT_COUNT} from '../../../js/app/contants';
import service from '../service';
import {TYPE_MARKET} from './config';

export default class CareMarket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: null
        };
    }

    componentDidMount() {
        this.fetchList();
    }

    fetchList() {
        service.interestList({
            type: TYPE_MARKET,
            limitStart: 0,
            limitCount: LIMIT_COUNT
        }).then(rep => {
            this.setState({
                list: rep.result.list
            });
        });
    }

    doNotCare(orderId) {
        let that = this;
        service.delInterest({
            type: TYPE_MARKET,
            unsoldOrderId: orderId
        }).then(rep => {
            window.toast('取消关注成功', {
                callback() {
                    that.fetchList();
                }
            });
        });
    }

    render() {
        let list = this.state.list;
        return (
            <article className="detail-module">
                <ul className="list">
                    {
                        list !== null ?
                            list.length > 0 ?
                                list.map((item, index) => {
                                    return (
                                        <li className="item" key={index}>
                                            <a className="item-link" href={`./market.html#/detail/${item.orderId}`}>
                                                <Market obj={item} />
                                            </a>
                                            <div className="ui-do" onClick={this.doNotCare.bind(this, item.orderId)}>
                                                <div className="text-box">
                                                    <span className="text">取消关注</span>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })
                                :
                                <li className="no-data">暂无数据</li>
                            :
                            null
                    }
                </ul>
            </article>
        );
    }
}

CareMarket.propTypes = {
    list: React.PropTypes.array
};

CareMarket.defaultProps = {
    list: null
};