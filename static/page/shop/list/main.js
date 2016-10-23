/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/17
 */

import React from 'react';
import {Link} from 'react-router';
import Shop from '../../../component/Shop/Shop';
import china from 'china-province-city-district';
import service from '../service';

export default class Chepihao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: null,
            provinces: china.query()
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
                            {
                                this.state.provinces !== null ?
                                    this.state.provinces.map((province, index) => {
                                        return <option key={province} value={province}>{province}</option>;
                                    })
                                    :
                                    null
                            }
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
                            this.state.list !== null ?
                                this.state.list.map((item, index) => {
                                    return (
                                        <li className="item" key={index}>
                                            <Link className="item-link" to="home">
                                                <Shop />
                                            </Link>
                                        </li>
                                    );
                                })
                                :
                                null
                        }
                    </ul>
                </div>
                <Link className="ui-btn ui-btn-fixed" to={`/add`}>我要开店</Link>
            </div>
        );
    }
}