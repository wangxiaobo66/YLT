/**
 * @file
 * @auth jinguangguo
 * @date 2016/11/4
 */

import React from 'react';
import {Link} from 'react-router';
import Shop from '../../../component/Shop/Shop';
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
            type: TYPE_SHOP
        }).then(rep => {
            this.setState({
                list: rep.result.list
            });
        });
    }

    doNotCare(id) {
        let that = this;
        service.interestList({
            type: TYPE_SHOP,
            id: id
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
                            list.map((item, index) => {
                                return (
                                    <li className="item" key={index}>
                                        <a className="item-link" href={`./shop.html#home/${item.storeId}`}>
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