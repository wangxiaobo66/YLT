/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/4
 */

import React from 'react';
import {Link} from 'react-router';
import Shop from '../../../component/Shop/Shop';
import Market from '../../../component/Market/Market';

const TYPE_ARRIVAL = 1;
const TYPE_SHOP = 2;
const TYPE_MARKET = 3;

export default class MyCare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: TYPE_ARRIVAL,
            list: [
                {
                    "id": 1,
                    "tailNumber":"7788",
                    "length":"3米",
                    "varieties":"樟子松1",
                    "cargo":"原木"
                },
                {
                    "id": 2,
                    "tailNumber":"7788",
                    "length":"3米",
                    "varieties":"樟子松2",
                    "cargo":"原木"
                }
            ],
            markets: [
                {
                    "imgSrc": "../../static/component/Market/img/ys.png",
                    "name": "落叶松1",
                    "size": "六米",
                    "type": "原木",
                    "currentPosition": "明斯克",
                    "Destination": "满洲里",
                    "pubDate": "9-30|10:01",
                    "diam": "20",
                    "level": "一级"
                },
                {
                    "imgSrc": "../../static/component/Market/img/ys.png",
                    "name": "落叶松2",
                    "size": "三米",
                    "type": "原木",
                    "currentPosition": "明斯克",
                    "destination": "满洲里",
                    "pubDate": "9-30|10:01",
                    "diam": "20",
                    "level": "一级"
                }
            ]
        };
    }
    componentDidMount() {

    }
    tab(type) {
        this.setState({
            type: type
        });
    }
    render() {
        return (
            <div className="module-care">
                <ul className="ui-nav">
                    <li className="item">
                        <a href="javascript:;"
                           className={'item-link' + (this.state.type === TYPE_ARRIVAL ? ' item-link--active': '')}
                           onClick={this.tab.bind(this, TYPE_ARRIVAL)}>到货列表</a>
                    </li>
                    <li className="item">
                        <a href="javascript:;"
                           className={'item-link' + (this.state.type === TYPE_SHOP ? ' item-link--active': '')}
                           onClick={this.tab.bind(this, TYPE_SHOP)}>关注店铺</a>
                    </li>
                    <li className="item">
                        <a href="javascript:;"
                           className={'item-link' + (this.state.type === TYPE_MARKET ? ' item-link--active': '')}
                           onClick={this.tab.bind(this, TYPE_MARKET)}>未售市场</a>
                    </li>
                </ul>
                <div className="detail">

                    {/* 关注到货 */}
                    <article className={'detail-module' + (this.state.type !== TYPE_ARRIVAL ? ' fn-none' : '')}>
                        <div className="ui-table ui-table-do">
                            <ul className="tbody">
                                {
                                    this.state.list.map((item, index) => {
                                        return (
                                            <li className="tr" key={index}>
                                                <Link className="link" to={`/item`}>
                                                    <div className="td">{item.tailNumber}</div>
                                                    <div className="td">{item.length}</div>
                                                    <div className="td">{item.varieties}</div>
                                                    <div className="td">{item.cargo}</div>
                                                </Link>
                                                <div className="ui-do">
                                                    <div className="text-box">
                                                        <span className="text">取消关注</span>
                                                    </div>
                                                </div>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </article>

                    {/* 关注的店铺 */}
                    <article className={'detail-module' + (this.state.type !== TYPE_SHOP ? ' fn-none' : '')}>
                        <ul className="list">
                            {
                                this.state.list.map((item, index) => {
                                    return (
                                        <li className="item" key={index}>
                                            <a className="item-link" href="./shop.html#home">
                                                <Shop />
                                            </a>
                                            <div className="ui-do">
                                                <div className="text-box">
                                                    <span className="text">取消关注</span>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </article>

                    {/* 关注的未售市场 */}
                    <article className={'detail-module' + (this.state.type !== TYPE_MARKET ? ' fn-none' : '')}>
                        <ul className="list">
                            {
                                this.state.markets.map((item, index) => {
                                    return (
                                        <li className="item" key={index}>
                                            <a className="item-link" href="./shop.html#home">
                                                <Market obj={item} />
                                            </a>
                                            <div className="ui-do">
                                                <div className="text-box">
                                                    <span className="text">取消关注</span>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })
                            }
                        </ul>

                    </article>


                </div>
            </div>
        );
    }
}