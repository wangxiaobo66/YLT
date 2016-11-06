/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/6
 */

import React from 'react';
import {Link} from 'react-router';
import china from 'china-province-city-district';
import Market from '../../../component/Market/Market';
import commonService from '../../../js/app/commonService';
import {LIMIT_COUNT} from '../../../js/app/contants';
import service from '../service';


export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            provinces: china.query(),
            treetypeList: null,
            goodstypeList: null,
            lengthList: null,
            form: { // 要添加的对象
                treetypeId: '',
                goodstypeId: '',
                lengthId: '',
                pageNo: 1,
                pageSize: LIMIT_COUNT
            },
            list: [
                {
                    "imgSrc": '../../static/images/ys.png',
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
                    "imgSrc": '../../static/images/ys.png',
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
        // 树种
        commonService.treetypeList().then((rep) => {
            this.setState({
                treetypeList: rep.data.list
            });
        });
        // 货种
        commonService.goodstypeList().then((rep) => {
            this.setState({
                goodstypeList: rep.data.list
            });
        });
        // 长度
        commonService.lengthList().then((rep) => {
            this.setState({
                lengthList: rep.data.list
            });
        });
    }
    checkDisabled(key, event) {
        let form = this.state.form;

        if (key && event) {
            form[key] = event.target.value;
        }

        service.unsoldList(this.form).then(rep => {
            this.setState({
                list: rep.data.list
            });
        });

    }
    render() {
        return (
            <div className="module-list">
                <div className="ui-top-select clearfix">
                    <label className="item">
                        <span className="for">口岸</span>
                        <select className="select"
                                value={this.state.form.treetypeId}
                                onChange={this.checkDisabled.bind(this, 'treetypeId')}>
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
                        <span className="for">货种</span>
                        <select className="select"
                                value={this.state.form.goodstypeId}
                                onChange={this.checkDisabled.bind(this, 'goodstypeId')}>
                            <option value="">选择</option>
                            {
                                this.state.goodstypeList !== null ?
                                    this.state.goodstypeList.map((item, index) => {
                                        return <option key={item.id} value={item.id}>{item.name}</option>;
                                    })
                                    :
                                    null
                            }
                        </select>
                    </label>
                    <label className="item">
                        <span className="for">树种</span>
                        <select className="select"
                                value={this.state.form.treetypeId}
                                onChange={this.checkDisabled.bind(this, 'treetypeId')}>
                            <option value="">选择</option>
                            {
                                this.state.treetypeList !== null ?
                                    this.state.treetypeList.map((item, index) => {
                                        return <option key={item.id} value={item.id}>{item.name}</option>;
                                    })
                                    :
                                    null
                            }
                        </select>
                    </label>
                    <label className="item">
                        <span className="for">长度</span>
                        <select className="select"
                                value={this.state.form.lengthId}
                                onChange={this.checkDisabled.bind(this, 'lengthId')}>
                            <option value="">选择</option>
                            {
                                this.state.lengthList !== null ?
                                    this.state.lengthList.map((item, index) => {
                                        return <option key={item.id} value={item.id}>{item.name}</option>;
                                    })
                                    :
                                    null
                            }
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