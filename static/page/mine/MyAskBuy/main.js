/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/4
 */

import React from 'react';
import {Link} from 'react-router';
import {AskBuy} from '../../../component/AskBuy/AskBuy';
import service from '../service';

let page = 1;
export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: '',
            total:null,
            from:{
                limitStart: 0,
                limitCount: 10
            }
        };
    }
    componentDidMount() {
        this.fetchList();
    }
    fetchList() {
        service.askBuyList({
            goodstypeId:0,
            lengthId:0,
            portId:0,
            treetypeId:0,
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
    render() {
        let {list} = this.state;
        let that = this;
        return (
            <div className="module-ask-buy">
                <ul className="list">
                    {   this.state.list!=''?
                        this.state.list.map(function (item, index) {
                            return (
                                <li className="item clearfix" key={index}>
                                    <div className="item-link">
                                        <AskBuy obj={item} />
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
                                    <div className={'ui-tab ui-tab-normal' + (!item.isOperating === true ? ' fn-none' : '')}>
                                        {/*<a href="javascript:;" className="item">刷新</a>*/}
                                        <a href={"./ask-buy.html#/update/"+item.orderId} className="item">修改</a>
                                        <a href="javascript:;" className="item" onClick={(e) => that.click(item.orderId)}>删除</a>
                                    </div>
                                </li>
                            );
                        })
                        :<li className="item no-data">暂无数据</li>
                    }
                    {
                        this.total()
                    }
                </ul>

            </div>
        );
    }
    total() {
        if (this.state.total>10&&Math.ceil(this.state.total/10)>page) {
            return (
                <li className="no-data" onClick={(e) => this.onclick()}>加载更多</li>
            )
        }
    }
    onclick(){
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
            service.askBuyList(info).then(rep => {
                let list = this.state.list;
                list = list.concat(rep.result.list);
                this.setState({
                    list: list
                });
            });
        }
    }
    click(id){
        service.deleteAskBuy({
            buyingOrderId:id
        }).then(rep => {
            if(rep.reason==="success"){
                window.toast('删除成功!');
                this.reload();
            }
        });
    }
}