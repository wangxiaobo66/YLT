/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/24
 */

import React from 'react';
import {Link} from 'react-router';
import Tab from './Tab';
import {TAB_SEAT} from '../constants';

import arrivalService from '../service';//到货

let page = 1;
export default class ListLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form:{
                limitStart: 0,
                limitCount: 10
            },
            list:null,
            total:null
        };
    }
    componentDidMount() {
        arrivalService.arrivalList({
            limitStart: 0,
            limitCount: 10
        }).then(rep => {
            this.setState({
                list:rep.result.list,
                total:rep.result.total
            })
        });
    }
    goToItem(id) {
        
    }
    render() {
        return(
            <div className="module-list-seat clearfix">
                <div className="ui-table">
                    <ul className="thead">
                        <li className="th">
                            <span className="text">口岸</span>
                        </li>
                        <li className="th">
                            <span className="text">抵达车次</span>
                        </li>
                        <li className="th">
                            <span className="text">时间</span>
                        </li>
                    </ul>
                    <ul className="tbody">
                        {
                            this.state.list!==null ?
                                this.state.list.length>0?
                                    this.state.list.map((item, index) => {
                                        return (
                                            <li className="tr" key={index}>
                                                <a href={"./arrival.html#item/"+item.cc} className="link">
                                                    <div className="td">{item.portName}</div>
                                                    <div className="td">{item.cc}</div>
                                                    <div className="td">{moment(item.dfrq).format('YYYY-MM-DD')}</div>
                                                </a>
                                            </li>
                                        );
                                    })
                                :null
                                :null
                        }
                        {
                            this.total()
                        }
                    </ul>
                </div>
            </div>
        );
    }
    total(){
        if (this.state.total>10&&Math.ceil(this.state.total/10)>page) {
            return (
                <div className="no-data" onClick={(e) => this.click()}>加载更多</div>
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
            arrivalService.arrivalList(info).then(rep => {
                let list = this.state.list;
                list = list.concat(rep.result.list);
                this.setState({
                    list: list
                });
            });
        }
    }
}