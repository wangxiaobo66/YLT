/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/6
 */

import React from 'react';
import {Link} from 'react-router';
import {AskBuy} from '../../../component/AskBuy/AskBuy';

const { optionsList , askBuyList } = require('./../actions.js');//从actions里拿到方法
import buyingService from './..//actions';//求购

let portId=0,treetypeId= 0, goodstypeId=0,lengthId=0,page=1;
export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataAskBuys:null,
            portOptions:null,
            treeOptions:null,
            goodsOptions:null,
            lengthOptions:null,
            form: { // 要添加的对象
                portId: 0,
                treetypeId: 0,
                goodstypeId: 0,
                lengthId: 0
            },
            from:{
                limitStart: 0,
                limitCount: 10,
                portId: portId,
                goodstypeId: goodstypeId,
                treetypeId: treetypeId,
                lengthId: lengthId
            },
            total:null
        };
    }
    componentDidMount() {
        this.list();
        this.port();
        this.tree();
        this.goods();
        this.length();
    }
    componentWillReceiveProps(nextProps) {
        /*
        let list = nextProps.askBuy.list;
        this.setState({
            list:list
        })
        */
    }
    render() {
        return (
            <div className="module-list">
                <div className="ui-top-select clearfix">
                    <label className="item">
                        <span className="for">地区</span>
                        <select className="select"
                                value={portId}
                                onChange={(e) => this.onchange(e,'port')}>
                            <option value="0">选择</option>
                            {
                                this.state.portOptions !=null ?
                                    this.state.portOptions.map(function (obj) {
                                        return <option value={obj.id}>{obj.name}</option>
                                    })
                                    :
                                    null
                            }
                        </select>
                    </label>
                    <label className="item">
                        <span className="for">货种</span>
                        <select className="select"
                                value={goodstypeId}
                                onChange={(e) => this.onchange(e,'goods')}>
                            <option value="0">选择</option>
                            {
                                this.state.goodsOptions !=null ?
                                    this.state.goodsOptions.map(function (obj) {
                                        return <option value={obj.id}>{obj.name}</option>
                                    })
                                    :
                                    null
                            }
                        </select>
                    </label>
                    <label className="item">
                        <span className="for">树种</span>
                        <select className="select"
                                value={treetypeId}
                                onChange={(e) => this.onchange(e,'tree')}>
                            <option value="0">选择</option>
                            {
                                this.state.treeOptions !=null ?
                                    this.state.treeOptions.map(function (obj) {
                                        return <option value={obj.id}>{obj.name}</option>
                                    })
                                    :
                                    null
                            }
                        </select>
                    </label>
                    <label className="item">
                        <span className="for">长度</span>
                        <select className="select"
                                value={lengthId}
                                onChange={(e) => this.onchange(e,'length')}>
                            <option value="0">选择</option>
                            {
                                this.state.lengthOptions !=null ?
                                    this.state.lengthOptions.map(function (obj) {
                                        return <option value={obj.id}>{obj.name}</option>
                                    })
                                    :
                                    null
                            }
                        </select>
                    </label>
                </div>
                <ul className="ui-list">
                    {
                        this.state.dataAskBuys!=null?
                            this.state.dataAskBuys.length > 0 ?
                            this.state.dataAskBuys.map(function (obj, index) {
                                return (
                                    <li className="item clearfix" key={index}>
                                        <Link className="item-link" to={"detail/"+obj.orderId}>
                                            <AskBuy obj={obj} />
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
                    <a href="#add" className="ui-btn ui-btn-fixed">发布求购信息</a>
                </footer>
            </div>
        );
    }
    total() {
        if (this.state.total>10&&Math.ceil(this.state.total/10)>page) {
            return (
                <li className="no-data" onClick={(e) => this.click()}>加载更多</li>
            )
        }
    }
    click(){
        let i = this.state.from.limitStart;
        let len = Math.ceil(this.state.total/10);
        let from = this.state.from;
        if(page<len){
            page++;
            from.limitStart = i+10;
            this.setState({
                from:from
            });
            let info = this.state.from;
            buyingService.buyingList(info).then(rep => {
                let list = this.state.dataAskBuys;
                list = list.concat(rep.result.list);
                this.setState({
                    dataAskBuys: list
                });
            });
        }
    }

    /*portId:'',
    treetypeId:'',
    goodstypeId:'',
    lengthId:''*/
    onchange(e,name){
        let val = e.target.value;
        switch (name){
            case 'port':
                portId=val;
                break;
            case 'goods':
                goodstypeId=val;
                break;
            case 'tree':
                treetypeId=val;
                break;
            case 'length':
                lengthId=val;
                break;
        }
        this.findGet();
    }
    findGet(){
            /*
            let {dispatch} = this.props;
            let info = {"limitStart":"0","limitCount":"10","portId":portId,"goodstypeId":goodstypeId,"treetypeId":treetypeId,"lengthId":lengthId};
            dispatch(askBuyList(info));
            */
            buyingService.buyingList({
                limitStart: 0,
                limitCount: 10,
                portId: portId,
                goodstypeId: goodstypeId,
                treetypeId: treetypeId,
                lengthId: lengthId
            }).then(rep => {
                this.setState({
                    dataAskBuys:rep.result.list,
                    total:rep.result.total
                })
            });
    }
    port(){
        buyingService.optionList({
            limitStart:0,
            limitCount:10,
            type:5
        }).then(rep => {
            this.setState({
                portOptions:rep.result.list
            })
        })
    }

    tree(){
        buyingService.optionList({
            limitStart:0,
            limitCount:10,
            type:1
        }).then(rep => {
            this.setState({
                treeOptions:rep.result.list
            })
        })
    }
    goods(){
        buyingService.optionList({
            limitStart:0,
            limitCount:10,
            type:3
        }).then(rep => {
            this.setState({
                goodsOptions:rep.result.list
            })
        })
    }
    length(){
        buyingService.optionList({
            limitStart:0,
            limitCount:10,
            type:4
        }).then(rep => {
            this.setState({
                lengthOptions:rep.result.list
            })
        })
    }
    list(){
        buyingService.buyingList({
            limitStart: 0,
            limitCount: 10,
            portId: 0,
            goodstypeId: 0,
            treetypeId: 0,
            lengthId: 0
        }).then(rep => {
            this.setState({
                dataAskBuys:rep.result.list,
                total:rep.result.total
            })
        });
    }
}