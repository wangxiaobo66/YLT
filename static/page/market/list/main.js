/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/6
 */

import React from 'react';
import {Link} from 'react-router';
import Market from '../../../component/Market/Market';
import imgYs from '../../../component/Market/img/ys.png';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    "imgSrc": {imgYs},
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
                    "imgSrc": {imgYs},
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
    render() {
        return (
            <div className="module-list">
                <div className="ui-top-select clearfix">
                    <label className="item">
                        <span className="for">地区</span>
                        <select className="select">
                            <option value="">选择</option>
                            <option value="1">满洲里</option>
                            <option value="2">缨芬河</option>
                            <option value="2">二连浩特</option>
                            <option value="2">其他</option>
                        </select>
                    </label>
                    <label className="item">
                        <span className="for">货种</span>
                        <select className="select">
                            <option>选择</option>
                            <option>板材</option>
                            <option>原木</option>
                            <option>地板</option>
                        </select>
                    </label>
                    <label className="item">
                        <span className="for">树种</span>
                        <select className="select">
                            <option>选择</option>
                            <option>松树</option>
                            <option>杨树</option>
                            <option>柳树</option>
                        </select>
                    </label>
                    <label className="item">
                        <span className="for">长度</span>
                        <select className="select">
                            <option>选择</option>
                            <option>三米</option>
                            <option>四米</option>
                            <option>五米</option>
                        </select>
                    </label>
                </div>
                <ul className="ui-list">
                    {
                        this.state.list.map(function (item, index) {
                            return (
                                <li className="item clearfix" key={index}>
                                    <Link className="item-link" to="detail">
                                        <Market obj={item} />
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>
                <footer className="footer">
                    <a href="#add" className="ui-btn ui-btn-fixed">发布未售信息</a>
                </footer>
            </div>
        );
    }
}