/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/4
 */

import React from 'react';
import {Link} from 'react-router';
import {Arrival} from '../../../component/Arrival/Arrival';
import TipSuccess from '../../../component/TipSuccess/TipSuccess';

import arrivalService from '../service';//到货

import userKey from '../../index/actions';//判断是否有userid
import {LOGIN_USER_KEY} from '../../../js/app/contants';//用户key

import {Bottom} from '../../../component/Bottom/Bottom';

let page = 1;

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list:null,
            total:null,
            form:{
                limitStart:0,
                limitCount:10,
                cc:this.props.params.id
            }
        };
    }
    componentDidMount() {
        //判断是否登录
        let userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        if(JSON.stringify(userId)==='null'){
            userKey.user().then(rep => {
                window.sessionStorage.setItem(LOGIN_USER_KEY, rep.result.data);
            })
        }
        //获取某一车次的车皮数据
        arrivalService.arrival({
            limitStart:0,
            limitCount:10,
            cc:this.props.params.id
        }).then(rep => {
            this.setState({
                list:rep.result.list,
                total:rep.result.total
            })
        })
    }
    render() {
        return(
            <div className="module-item clearfix">
                <div key="div-head" className="div-head">
                    <span>车号</span>
                    <span>顺位号</span>
                    <span>股道</span>
                </div>
                <div className="li-list">
                {
                    this.state.list !== null ?
                        this.state.list.length>0 ?
                            this.state.list.map(function(obj,index){
                                return(
                                    <Link to={`/detail/`+obj.id}>
                                        <div key={"div-head" + index} className="div-col">
                                            <span>{obj.ch}</span>
                                            <span>{obj.swh}</span>
                                            <span>{obj.gdm}</span>
                                        </div>
                                    </Link>
                                )
                            })
                            :null
                        :null
                }
                <TipSuccess msg={this.props.params.id} />
                {
                    this.total()
                }
                </div>
                <Bottom />
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
            arrivalService.arrival(info).then(rep => {
                let list = this.state.list;
                list = list.concat(rep.result.list);
                this.setState({
                    list: list
                });
            });
        }
    }
}