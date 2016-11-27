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

let page = 1;

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            portList: null,
            treetypeList: null,
            goodstypeList: null,
            lengthList: null,
            form: { // 要添加的对象
                portId: 0,
                treetypeId: 0,
                goodstypeId: 0,
                lengthId: 0,
                limitStart: 0,
                limitCount: LIMIT_COUNT
            },
            list: null,
            total:null
        };
    }
    componentDidMount() {
        // 口岸
        commonService.portList().then((rep) => {
            this.setState({
                portList: rep.result.list
            });
        });
        // 树种
        commonService.treetypeList().then((rep) => {
            this.setState({
                treetypeList: rep.result.list
            });
        });
        // 货种
        commonService.goodstypeList().then((rep) => {
            this.setState({
                goodstypeList: rep.result.list
            });
        });
        // 长度
        commonService.lengthList().then((rep) => {
            this.setState({
                lengthList: rep.result.list
            });
        });

        service.unsoldList(this.state.form).then(rep => {
            this.setState({
                list: rep.result.list,
                total:rep.result.total
            });
        });
    }
    filterData(key, event) {
        let form = this.state.form;

        if (key && event) {
            form[key] = event.target.value;
        }
        form.limitStart = 0;
        service.unsoldList(form).then(rep => {
            this.setState({
                list: rep.result.list,
                form:form,
                total:rep.result.total
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
                                value={this.state.form.portId}
                                onChange={this.filterData.bind(this, 'portId')}>
                            <option value="0">选择</option>
                            {
                                this.state.portList !== null ?
                                    this.state.portList.map((item, index) => {
                                        return <option key={item.id} value={item.id}>{item.name}</option>;
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
                                onChange={this.filterData.bind(this, 'goodstypeId')}>
                            <option value="0">选择</option>
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
                                onChange={this.filterData.bind(this, 'treetypeId')}>
                            <option value="0">选择</option>
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
                                onChange={this.filterData.bind(this, 'lengthId')}>
                            <option value="0">选择</option>
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
                            this.state.list.length > 0 ?
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
                                <li className="no-data">暂无数据</li>
                            :
                            <li className="no-data">暂无数据</li>
                    }
                    {
                        this.total()
                    }
                </ul>
                <footer className="footer">
                    <a href="#add" className="ui-btn ui-btn-fixed">发布未售信息</a>
                </footer>
            </div>
        );
    }
    //加载更多
    total() {
        if (this.state.total>10&&Math.ceil(this.state.total/10)>page) {
            return (
                <li className="no-data" onClick={(e) => this.click()}>加载更多</li>
            )
        }
    }
    click(){
        let i = this.state.form.limitStart;
        let len = Math.ceil(this.state.total/10);
        let form = this.state.form;
        if(page<len){
            page++;
            form.limitStart = i+10;
            this.setState({
                form:form
            });
            let info = this.state.form;
            service.unsoldList(info).then(rep => {
                let list = this.state.list;
                list = list.concat(rep.result.list);
                this.setState({
                    list: list
                });
            });
        }
    }
}