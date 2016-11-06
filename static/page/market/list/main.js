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
                limitStart: 0,
                limitCount: LIMIT_COUNT
            },
            list: null
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

        service.unsoldList(this.state.form).then(rep => {
            this.setState({
                list: rep.data.list
            });
        });
    }
    setForm(key, event) {
        let form = this.state.form;

        if (key && event) {
            form[key] = event.target.value;
        }

        service.unsoldList(form).then(rep => {
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
                                onChange={this.setForm.bind(this, 'treetypeId')}>
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
                                onChange={this.setForm.bind(this, 'goodstypeId')}>
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
                                onChange={this.setForm.bind(this, 'treetypeId')}>
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
                                onChange={this.setForm.bind(this, 'lengthId')}>
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
                        this.state.list !== null ?
                            this.state.list.map(function (item, index) {
                                return (
                                    <li className="item clearfix" key={index}>
                                        <Link className="item-link" to={`/detail/${item.orderId}`}>
                                            <Market obj={item} />
                                        </Link>
                                    </li>
                                );
                            })
                            :
                            null
                    }
                </ul>
                <footer className="footer">
                    <a href="#add" className="ui-btn ui-btn-fixed">发布未售信息</a>
                </footer>
            </div>
        );
    }
}