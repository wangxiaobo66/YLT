/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/17
 */

import React from 'react';
import {Link} from 'react-router';
import Shop from '../../../component/Shop/Shop';

export default class Chepihao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {

                },
                {

                }
            ]
        };
    }
    componentDidMount() {

    }
    render() {
        return(
            <div className="module-shop-list">
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
                        <span className="for">类型</span>
                        <select className="select">
                            <option value="">选择</option>
                            <option value="1">机械设备</option>
                            <option value="2">器材销售</option>
                        </select>
                    </label>
                </div>
                <div className="list-box">
                    <ul className="ui-list">
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <li className="item" key={index}>
                                        <Link className="item-link" to="home">
                                            <Shop />
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
                <Link className="ui-btn ui-btn-fixed" to={`/add`}>我要开店</Link>
            </div>
        );
    }
}