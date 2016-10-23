/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/17
 */

import React from 'react';
import {Link} from 'react-router';
import china from 'china-province-city-district';
import {LIMIT_COUNT} from '../../../js/app/contants';
import Shop from '../../../component/Shop/Shop';
import commonService from '../../../js/app/commonService';
import service from '../service';
import CONFIG from '../config'

export default class Chepihao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typeList: null,
            list: null,
            repData: null,
            provinces: china.query()
        };
    }
    componentDidMount() {

        // 店铺列表
        service.myStoreList({
            province: '',
            storetypeId: CONFIG.TYPE_STORE_JIXIE.CODE,
            limitStart: 1,
            limitCount: LIMIT_COUNT
        }).then((rep) => {
            this.setState({
                repData: rep.data,
                list: rep.data.list
            });
        });

        // 店铺类型
        commonService.storeTypeList().then((rep) => {
            this.setState({
                typeList: rep.data.list
            });
        });

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
                            {
                                this.state.typeList !== null ?
                                    this.state.typeList.map((item, index) => {
                                        return <option key={item.id} value={item.id}>{item.name}</option>;
                                    })
                                    :
                                    null
                            }
                        </select>
                    </label>
                </div>
                <div className="list-box">
                    <ul className="ui-list">
                        {
                            this.state.list !== null ?
                                this.state.list.map((item, index) => {
                                    item.list = this.state.repData['order' + item.id];
                                    return (
                                        <li className="item" key={index}>
                                            <Link className="item-link" to="home">
                                                <Shop obj={item} />
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