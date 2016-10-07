/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/7
 */

import React from 'react';
import {Link} from 'react-router';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: null
        };
    }
    componentDidMount() {

    }
    render() {
        return(
            <div className="module-result">
                {
                    this.state.list && this.state.list.length > 0 ?
                        <div className="ui-table fn-mt10">
                            <ul className="thead">
                                <li className="th">
                                    <span className="text">车皮号尾号</span>
                                </li>
                                <li className="th">
                                    <span className="text">长度(米)</span>
                                </li>
                                <li className="th">
                                    <span className="text">树种</span>
                                </li>
                                <li className="th">
                                    <span className="text">货种</span>
                                </li>
                            </ul>
                            <ul className="tbody">
                                {
                                    this.state.list.map((item, index) => {
                                        return (
                                            <li className="tr" key={index}>
                                                <a href="/template/arrival/arrival.html#item" className="link">
                                                    <div className="td">{item.tailNumber}</div>
                                                    <div className="td">{item.length}</div>
                                                    <div className="td">{item.varieties}</div>
                                                    <div className="td">{item.cargo}</div>
                                                </a>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                        :
                        <div className="no-data">
                            <div className="tip">
                                <p className="text">暂无搜索结果</p>
                                <p className="text">您可以订阅搜索内容或发布求购信息</p>
                            </div>
                            <div className="do">
                                <div className="ui-btn-groups">
                                    <a href="/template/subscribe/subscribe.html#/gg"
                                       className="ui-btn ui-btn-default">添加到按“规格订阅”</a>
                                    <a href="/template/ask-buy/ask-buy.html#/add"
                                       className="ui-btn ui-btn-default">发布求购信息</a>
                                </div>
                            </div>
                        </div>
                }



            </div>
        );
    }
}