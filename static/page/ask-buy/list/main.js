/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/6
 */

import React from 'react';
import {Link} from 'react-router';
import {AskBuy} from '../../../component/AskBuy/AskBuy';

const { askBuyList } = require('./../actions.js');//从actions里拿到方法

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[]
        };
    }
    componentDidMount() {
        this.list();
    }
    componentWillReceiveProps(nextProps) {
        let list = nextProps.askBuy.list;
        this.setState({
            list:list
        })
    }
    render() {
        return (
            <div className="module-list">
                <div className="ui-top-select clearfix">
                    <label className="item">
                        <span className="for">地区</span>
                        <select className="select">
                            <option value="">选择</option>
                            <option value="1">满洲里</option>
                            <option value="2">缨芬河</option>
                            <option value="2">二连浩特</option>
                            <option value="2">其他</option>
                        </select>
                    </label>
                    <label className="item">
                        <span className="for">货种</span>
                        <select className="select">
                            <option>选择</option>
                            <option>板材</option>
                            <option>原木</option>
                            <option>地板</option>
                        </select>
                    </label>
                    <label className="item">
                        <span className="for">树种</span>
                        <select className="select">
                            <option>选择</option>
                            <option>松树</option>
                            <option>杨树</option>
                            <option>柳树</option>
                        </select>
                    </label>
                    <label className="item">
                        <span className="for">长度</span>
                        <select className="select">
                            <option>选择</option>
                            <option>三米</option>
                            <option>四米</option>
                            <option>五米</option>
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
    list(){
        let { dispatch } = this.props;
        let data = {"limitStart":"0","limitCount":"10","type":"0"};
        dispatch(askBuyList(data));
    }
}