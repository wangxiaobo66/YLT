/**
 * Created by wangxiaobo on 16/11/25.
 */
import './style.scss';
import React from 'react';
import Actions from './actions';

import {Bottom} from '../../../component/Bottom/Bottom';

let page = 1;

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            active:true,
            standard:null,
            vehicleNum:null,
            total:null,
            form:{
                limitStart: 0,
                limitCount: 10
            }
        }
    }
    render() {
        let that = this;
        return(
            <div className="modal-MySubscribe">
                <div className="header">
                    <p className="header-p">
                        <span className={"table-span" + (this.state.active?' active':'')} onClick={(e) => this.onclick('standard')}>规格订阅</span>
                        <span className={"table-span" + (this.state.active?'':' active')}onClick={(e) => this.onclick('vehicleNum')}>车次订阅</span>
                    </p>
                </div>
                <div className="main">
                    <ul className="ul">
                        {
                            this.state.active ===true?
                                this.state.standard!=null?
                                    this.state.standard.length!=0?
                                        this.state.standard.map(function(obj){
                                            return(
                                                <li className="li">
                                                    <div className="content">
                                                        <p>订阅规格:<span>{obj.portName + obj.treetypeName + obj.goodstypeName + obj.lengthName}</span></p>
                                                        <p>订阅时间:<span>{moment(obj.startTime).format('YYYY-MM-DD')}</span>到<span>{moment(obj.endTime).format('YYYY-MM-DD')}</span></p>
                                                    </div>
                                                    <div className="delete" onClick={(e) => that.DeleteData(obj.id)}>
                                                        删除订阅
                                                    </div>
                                                </li>
                                            )
                                        })
                                        :<li className="item no-data">暂无数据</li>
                                    :<li className="item no-data">暂无数据</li>
                                :
                                this.state.vehicleNum!=null?
                                    this.state.vehicleNum.length!=0?
                                        this.state.vehicleNum.map(function(obj){
                                            return(
                                                <li className="li">
                                                    <div className="content">
                                                        <p>订阅车次:<span>{obj.vehicleNum}</span></p>
                                                        <p>订阅时间:<span>{moment(obj.startTime).format('YYYY-MM-DD')}</span>到<span>{moment(obj.endTime).format('YYYY-MM-DD')}</span></p>
                                                    </div>
                                                    <div className="delete" onClick={(e) => that.DeleteData(obj.id)}>
                                                        删除订阅
                                                    </div>
                                                </li>
                                            )
                                        })
                                        :<li className="item no-data">暂无数据</li>
                                    :<li className="item no-data">暂无数据</li>
                        }
                        {
                            this.total()
                        }
                        {/*
                            <li className="li">
                                <div className="content">
                                    <p>订阅规格:<span>满洲里 松树 原木 3米</span></p>
                                    <p>订阅时间:<span>2016-11-25</span>到<span>2016-11-30</span></p>
                                </div>
                                <div className="delete">
                                    删除订阅
                                </div>
                            </li>
                            < li className="li">
                            <div className="content">
                            <p>订阅车次:<span>3044</span></p>
                            <p>订阅时间:<span>2016-11-25</span>到<span>2016-11-30</span></p>
                            </div>
                            <div className="delete">
                            删除订阅
                            </div>
                            </li>
                        */}

                    </ul>
                </div>
                <Bottom />
            </div>
        )
    }
    componentDidMount() {
        let active = this.state.active;
        if(active){
            this.standard();
        }else {
            this.vehicleNum();
        }
    }
    DeleteData(id){
        let active = this.state.active;
        if(active){
            Actions.delStandard({
                subscriptId: id
            }).then(rep =>{
                window.toast('删除成功');
                this.standard();
            })
        }else{
            Actions.delVehiclenum({
                subscriptId: id
            }).then(rep =>{
                window.toast('删除成功');
                this.vehicleNum();
            })
        }
    }
    standard(){
        let info = this.state.form;
        Actions.standardList(info).then(rep => {
            this.setState({
                standard:rep.result.list,
                total:rep.result.total
            });
        })
    }
    vehicleNum(){
        let info = this.state.form;
        Actions.vehiclenumList(info).then(rep => {
            this.setState({
                vehicleNum:rep.result.list,
                total:rep.result.total
            });
        })
    }
    onclick(name){
        page = 1;
        let form = this.state.form;
        form.limitStart = 0;
        form.limitCount = 10;
        switch (name){
            case 'standard':
                this.setState({
                    active:true,
                    form:form
                });
                this.standard();
                break;
            case 'vehicleNum':
                this.setState({
                    active:false,
                    form:form
                });
                this.vehicleNum();
                break;
        }
    }
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
        if(page<len) {
            page++;
            form.limitStart = i+10;
            this.setState({
                form:form
            });
            let info = this.state.form;
            if(this.state.active){
                Actions.standardList(info).then(rep => {
                    let list = this.state.standard;
                    list = list.concat(rep.result.list);
                    this.setState({
                        standard:list
                    });
                })
            }else{
                Actions.vehiclenumList(info).then(rep => {
                    let list = this.state.vehicleNum;
                    list = list.concat(rep.result.list);
                    this.setState({
                        vehicleNum:list
                    });
                })
            }
        }
    }
}