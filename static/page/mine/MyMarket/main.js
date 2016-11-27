/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/4
 */

import React from 'react';
import {Link} from 'react-router';
import Market from '../../../component/Market/Market';
import service from '../service';

let page = 1;
export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form:{
                limitStart: 0,
                limitCount: 10
            },
            list: null,
            total:null
        };
    }
    componentDidMount() {
        this.fetchList();
    }
    /**
     * 切换操作
     */
    toggleOper(item) {
        if (!item.isOperating) {
            item.isOperating = true;
        } else {
            item.isOperating = false;
        }
        this.setState({});
    }
    fetchList() {
        service.showMyUnsoldList({
            limitStart: 0,
            limitCount: 10
        }).then(rep => {
            this.setState({
                list: rep.result.list,
                total:rep.result.total
            });
        });
    }
    reload() {
        this.fetchList();
    }
    del(orderId) {
        let that = this;
        service.delUnsold({
            unsoldOrderId: orderId
        }).then(rep => {
            if (rep.state === 1) {
                window.toast('删除成功', {
                    callback() {
                        that.fetchList();
                    }
                });
            } else {
                window.toast('添加失败, 请稍候重试');
            }
        });
    }
    render() {
        let that = this;
        return (
            <div className="module-market">
                <ul className="list">
                    {
                        this.state.list !== null ?
                            this.state.list.length > 0 ?
                                this.state.list.map(function (item, index) {
                                    return (
                                        <li className="item clearfix" key={index}>
                                            <div className="item-link">
                                                <a className="item-link" href={`./market.html#/detail/${item.orderId}`}>
                                                    <Market obj={item}/>
                                                </a>
                                                {
                                                    !item.isOperating === true ?
                                                        <div className="ui-do"
                                                             onClick={that.toggleOper.bind(that, item)}>
                                                            <div className="text-box">
                                                                <span className="text">操作</span>
                                                            </div>
                                                        </div>
                                                        :
                                                        <div className="ui-do ui-do-cancel"
                                                             onClick={that.toggleOper.bind(that, item)}>
                                                            <div className="text-box">
                                                                <span className="text">取消</span>
                                                            </div>
                                                        </div>
                                                }
                                            </div>
                                            <div
                                                className={'ui-tab ui-tab-normal' + (!item.isOperating === true ? ' fn-none' : '')}>
                                                <a href="javascript:;" className="item" onClick={that.reload.bind(that)}>刷新</a>
                                                <a href={`./market.html#/update/${item.orderId}`} className="item">修改</a>
                                                <a href="javascript:;" className="item" onClick={that.del.bind(that, item.orderId)}>删除</a>
                                            </div>
                                        </li>
                                    );
                                })
                                :
                                <li className="item no-data">暂无数据</li>
                            :
                            null
                    }
                    {
                        this.total()
                    }
                </ul>
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
            service.showMyUnsoldList(info).then(rep => {
                let list = this.state.list;
                list = list.concat(rep.result.list);
                this.setState({
                    list: list
                });
            });
        }
    }
}