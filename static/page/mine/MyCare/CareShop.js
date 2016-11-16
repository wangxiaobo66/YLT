/**
 * @file
 * @auth jinguangguo
 * @date 2016/11/4
 */

import React from 'react';
import {Link} from 'react-router';
import Shop from '../../../component/Shop/Shop';
import {LIMIT_COUNT} from '../../../js/app/contants';
import service from '../service';
import {TYPE_SHOP} from './config';

export default class CareShop extends React.Component {
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
            type: TYPE_SHOP,
            limitStart: 0,
            limitCount: LIMIT_COUNT
        }).then(rep => {
            this.setState({
                list: rep.result.list
            });
        });
    }

    doNotCare(storeId) {
        let that = this;
        service.delInterest({
            type: TYPE_SHOP,
            storeId: storeId
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
                                            <a className="item-link" href={`./shop.html#home/${item.id}`}>
                                                <Shop obj={item} />
                                            </a>
                                            <div className="ui-do" onClick={this.doNotCare.bind(this, item.id)}>
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

CareShop.propTypes = {
    list: React.PropTypes.array
};

CareShop.defaultProps = {
    list: null
};