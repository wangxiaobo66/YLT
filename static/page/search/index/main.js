/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/7
 */

import React from 'react';
import {Link} from 'react-router';

import service from '../actions.js';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            portOptions:null,
            treeOptions:null,
            goodsOptions:null,
            lengthOptions:null,
            goodstypeId:'',
            lengthId:'',
            portId:'',
            treetypeId:''
        };
    }

    render() {
        let {goodstypeId,lengthId,portId,treetypeId} = this.state;
        return(
            <div className="module-index">
                <p className="search-p">按选定木材规格订阅信息，当有新消息产生后，会将消息推送给您</p>
                <form className="ui-form info-ft">
                    <div className="item">
                        <label>
                            <div className="for">树种</div>
                            <div className="input-box input-box--select">
                                <select className="ui-select"
                                        onChange={(e) => this.onchange(e,'tree')}
                                        value={treetypeId!=''?treetypeId:''}>
                                    <option value="0">请选择</option>
                                    {
                                        this.state.treeOptions!==null?
                                            this.state.treeOptions.map(function(obj){
                                                return <option value={obj.id}>{obj.name}</option>
                                            })
                                            :null
                                    }
                                </select>
                            </div>
                        </label>
                    </div>
                    <div className="item">
                        <label>
                            <div className="for">货种</div>
                            <div className="input-box input-box--select">
                                <select className="ui-select"
                                        onChange={(e) => this.onchange(e,'goods')}
                                        value={goodstypeId!=""?goodstypeId:""}>>
                                    <option value="0">请选择</option>
                                    {
                                        this.state.goodsOptions!==null?
                                            this.state.goodsOptions.map(function(obj){
                                                return <option value={obj.id}>{obj.name}</option>
                                            })
                                            :null
                                    }
                                </select>
                            </div>
                        </label>
                    </div>
                    <div className="item">
                        <label>
                            <div className="for">长度</div>
                            <div className="input-box input-box--select">
                                <select className="ui-select"
                                        onChange={(e) => this.onchange(e,'length')}
                                        value={lengthId!=""?lengthId:""}>
                                    <option value="0">请选择</option>
                                    {
                                        this.state.lengthOptions!==null?
                                            this.state.lengthOptions.map(function(obj){
                                                return <option value={obj.id}>{obj.name}</option>
                                            })
                                            :null
                                    }
                                </select>
                            </div>
                        </label>
                    </div>
                    <div className="item">
                        <label>
                            <div className="for">口岸</div>
                            <div className="input-box input-box--select">
                                <select className="ui-select"
                                        onChange={(e) => this.onchange(e,'port')}
                                        value={portId!=""?portId:""}>
                                    <option value="0">请选择</option>
                                    {
                                        this.state.portOptions!==null?
                                            this.state.portOptions.map(function(obj){
                                                return <option value={obj.id}>{obj.name}</option>
                                            })
                                            :null
                                    }
                                </select>
                            </div>
                        </label>
                    </div>
                </form>
                <footer className="footer">
                    <a className="ui-btn ui-btn-fixed" href="javascript:;" onClick={(e) => this.onclick()}>添加</a>
                </footer>
            </div>
        );
    }
    componentDidMount() {
        this.port();
        this.tree();
        this.goods();
        this.length();
    }
    onchange(e,name){
        let val = e.target.value;
        switch (name){
            case 'port':
                this.setState({
                    portId: val
                });
                break;
            case 'tree':
                this.setState({
                    treetypeId: val
                });
                break;
            case 'goods':
                this.setState({
                    goodstypeId: val
                });
                break;
            case 'length':
                this.setState({
                    lengthId: val
                });
                break;
        }
    }
    port() {
        service.optionList({
            limitStart:0,
            limitCount:10,
            type:5
        }).then(rep => {
            this.setState({
                portOptions:rep.result.list
            })
        })
    }

    tree() {
        service.optionList({
            limitStart:0,
            limitCount:10,
            type:1
        }).then(rep => {
            this.setState({
                treeOptions:rep.result.list
            })
        })
    }

    goods() {
        service.optionList({
            limitStart:0,
            limitCount:10,
            type:3
        }).then(rep => {
            this.setState({
                goodsOptions:rep.result.list
            })
        })
    }

    length() {
        service.optionList({
            limitStart:0,
            limitCount:10,
            type:4
        }).then(rep => {
            this.setState({
                lengthOptions:rep.result.list
            })
        })
    }
    onclick(){
        let { portId , treetypeId , goodstypeId , lengthId } =this.state;
        if(portId!=''&&treetypeId!=''&&goodstypeId!=''&&lengthId!=''){
            let data = {portId:portId,treetypeId:treetypeId,goodstypeId:goodstypeId,lengthId:lengthId};
            service.addSubscript(data).then(rep =>{
                console.log(rep);
            })
        }else {
            window.toast('请选择必须的订阅规格')
        }
    }
}