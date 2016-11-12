/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/6
 */

import React from 'react';
import {Link} from 'react-router';
import {AskBuy} from '../../../component/AskBuy/AskBuy';

const { optionsList , askBuyList } = require('./../actions.js');//从actions里拿到方法

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[]
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
        let list = nextProps.askBuy.list;
        this.setState({
            list:list
        })
    }
    render() {
        let { askBuy } = this.props;
        return (
            <div className="module-list">
                <div className="ui-top-select clearfix">
                    <label className="item">
                        <span className="for">地区</span>
                        <select className="select">
                            <option value="">选择</option>
                            {
                                askBuy.port !="" ?
                                    askBuy.port.map(function (obj) {
                                        return <option value={obj.id}>{obj.name}</option>
                                    })
                                    :
                                    null
                            }
                        </select>
                    </label>
                    <label className="item">
                        <span className="for">货种</span>
                        <select className="select">
                            <option value="">选择</option>
                            {
                                askBuy.tree !="" ?
                                    askBuy.tree.map(function (obj) {
                                        return <option value={obj.id}>{obj.name}</option>
                                    })
                                    :
                                    null
                            }
                        </select>
                    </label>
                    <label className="item">
                        <span className="for">树种</span>
                        <select className="select">
                            <option value="">选择</option>
                            {
                                askBuy.goods !="" ?
                                    askBuy.goods.map(function (obj) {
                                        return <option value={obj.id}>{obj.name}</option>
                                    })
                                    :
                                    null
                            }
                        </select>
                    </label>
                    <label className="item">
                        <span className="for">长度</span>
                        <select className="select">
                            <option value="">选择</option>
                            {
                                askBuy.length !="" ?
                                    askBuy.length.map(function (obj) {
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
                        this.state.list.length!=0?
                            this.state.list.map(function (obj, index) {
                                return (
                                    <li className="item clearfix" key={index}>
                                        <Link className="item-link" to={"detail/"+obj.orderId}>
                                            <AskBuy obj={obj} />
                                        </Link>
                                    </li>
                                );
                            })
                            :
                            null
                    }
                </ul>
                <footer className="footer">
                    <a href="#add" className="ui-btn ui-btn-fixed">发布求购信息</a>
                </footer>
            </div>
        );
    }
    port(){
        let data = {"limitStart":"0","limitCount":"10","type":"5"};
        let { dispatch } = this.props;
        dispatch(optionsList(data,'port'));
    }
    tree(){
        let data = {"limitStart":"0","limitCount":"10","type":"1"};
        let { dispatch } = this.props;
        dispatch(optionsList(data,'tree'));
    }
    goods(){
        let data = {"limitStart":"0","limitCount":"10","type":"3"};
        let { dispatch } = this.props;
        dispatch(optionsList(data,'goods'));
    }
    length(){
        let data = {"limitStart":"0","limitCount":"10","type":"4"};
        let { dispatch } = this.props;
        dispatch(optionsList(data,'length'));
    }
    list(){
        let { dispatch } = this.props;
        let data = {"limitStart":"0","limitCount":"10","type":"0"};
        dispatch(askBuyList(data));
    }
}