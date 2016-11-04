/**
 * @file
 * @auth jinguangguo
 * @date 2016/11/4
 */

import React from 'react';
import {Link} from 'react-router';
import Market from '../../../component/Market/Market';
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
        service.interestList({
            type: TYPE_MARKET
        }).then(rep => {
            this.setState({
                list: rep.data.list
            });
        });
    }

    doNotCare(id) {
        service.interestList({
            type: TYPE_MARKET,
            id: id
        }).then(rep => {
            window.toast('取消关注成功', {
                callback() {
                    window.location.reload();
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
                                        <a className="item-link" href="./market.html">
                                            <Market obj={item} />
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

CareMarket.propTypes = {
    list: React.PropTypes.array
};

CareMarket.defaultProps = {
    list: null
};