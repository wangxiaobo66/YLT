/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/6
 */

import React from 'react';
import {Link} from 'react-router';

const { optionsList , askBuy , orderDetail , update } = require('./../actions.js');//从actions里拿到方法

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orderId: null,
            portId: '',//口岸
            treetypeId: '',//树种
            goodstypeId: '',//货种
            lengthId: '',//长度
            buyer: '',//买家
            mobile: '',//手机号
            price: '',//价格
            amount: '',//总货量
            content: '',//求购内容
            subscript: '0'//是否订阅,默认不订阅
        };
    }

    render() {
        let { askBuy } = this.props;
        let { orderId , portId , treetypeId , goodstypeId , lengthId ,  buyer , mobile , price , amount , content , subscript } = this.state;
        return (
            <div className="module-add fn-mt10">
                <form className="ui-form">
                    <div className="item">
                        <label>
                            <div className="for">口岸</div>
                            <div className="input-box input-box--select">
                                <select className="ui-select"
                                        value={portId!=""?portId:""}
                                        onChange={(e) => this.onchange(e,'port')}>
                                    <option value="">请选择口岸</option>
                                    {
                                        askBuy.port != "" ?
                                            askBuy.port.map(function (obj) {
                                                return <option value={obj.id}>{obj.name}</option>
                                            })
                                            :
                                            null
                                    }
                                </select>
                            </div>
                        </label>
                    </div>
                    <div className="item">
                        <label>
                            <div className="for">树种</div>
                            <div className="input-box input-box--select">
                                <select className="ui-select"
                                        value={treetypeId!=""?treetypeId:""}
                                        onChange={(e) => this.onchange(e,'tree')}>
                                    <option value="">请选择树种</option>
                                    {
                                        askBuy.tree != "" ?
                                            askBuy.tree.map(function (obj) {
                                                return <option value={obj.id}>{obj.name}</option>
                                            })
                                            :
                                            null
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
                                        value={goodstypeId!=""?goodstypeId:""}
                                        onChange={(e) => this.onchange(e,'goods')}>
                                    <option value="">请选择货种</option>
                                    {
                                        askBuy.goods != "" ?
                                            askBuy.goods.map(function (obj) {
                                                return <option value={obj.id}>{obj.name}</option>
                                            })
                                            :
                                            null
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
                                        value={lengthId!=""?lengthId:""}
                                        onChange={(e) => this.onchange(e,'length')}>
                                    <option value="">请选择长度</option>
                                    {
                                        askBuy.length != "" ?
                                            askBuy.length.map(function (obj) {
                                                return <option value={obj.id}>{obj.name}</option>
                                            })
                                            :
                                            null
                                    }
                                </select>
                            </div>
                        </label>
                    </div>
                </form>
                <form className="ui-form fn-mt10">
                    <div className="item">
                        <label>
                            <div className="for">买家</div>
                            <div className="input-box">
                                <input className="input input-block"
                                       type="text"
                                       placeholder="请输入货主姓名"
                                       value={buyer}
                                       onChange={(e) => this.onchange(e,'buyer')}/>
                            </div>
                        </label>
                    </div>
                    <div className="item">
                        <label>
                            <div className="for">手机号</div>
                            <div className="input-box">
                                <input className="input input-block" type="tel"
                                       placeholder="请输入手机号"
                                       value={mobile}
                                       onChange={(e) => this.onchange(e,'mobile')}/>
                            </div>
                        </label>
                    </div>
                </form>
                <form className="ui-form fn-mt10">
                    <div className="item">
                        <label>
                            <div className="for">价格</div>
                            <div className="input-box">
                                <input className="input input-block"
                                       type="text"
                                       placeholder="请输入价格"
                                       value={price}
                                       onChange={(e) => this.onchange(e,'price')}/>
                            </div>
                        </label>
                    </div>
                    <div className="item">
                        <label>
                            <div className="for">总货量</div>
                            <div className="input-box">
                                <input className="input input-block"
                                       type="text"
                                       placeholder="50-120立方米"
                                       value={amount}
                                       onChange={(e) => this.onchange(e,'amount')}/>
                            </div>
                        </label>
                    </div>
                </form>
                <div className="ui-title fn-mt10">
                    <h3 className="text">求购内容</h3>
                </div>
                <form className="ui-form ui-form-textarea">
                    <div className="item">
                        <label>
                            <div className="input-box">
                                <textarea className="textarea"
                                          rows="8" placeholder="请输入求购内容, 200字以内"
                                          value={content}
                                          onChange={(e) => this.onchange(e,'content')}/>
                            </div>
                        </label>
                    </div>
                </form>
                <div className="ui-check-tip fn-mt10">
                    <label>
                        <div className="tip-box" onClick={(e) => this.subscript(e,'subscript')}>
                            <input type="checkbox" />
                            <i className={"icon icon-o-check" + (parseInt(subscript)?' icon-show':'')}></i>
                            <span className="text">订阅匹配未售市场信息</span>
                        </div>
                    </label>
                </div>
                <footer className="footer">
                    <a href="#add" className="ui-btn ui-btn-fixed"
                       onClick={(e) => this.onclick((orderId!==null?'update':'add'))}>{orderId !== null ? '修改' : '发布求购'}</a>
                </footer>
            </div>
        );
    }

    componentDidMount() {
        this.port();
        this.tree();
        this.goods();
        this.length();
        let orderId = this.props.params.id;
        if (orderId != null) {
            this.detail(orderId);
            this.setState({
                orderId: orderId
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        let detail = nextProps.askBuy.detail;
        if(detail!=""){
            this.setState({
                portId: detail.portId,
                treetypeId: detail.treetypeId,
                goodstypeId: detail.goodstypeId,
                lengthId: detail.lengthId,
                buyer: detail.buyer,
                mobile: detail.mobile,
                price: detail.price,
                amount: detail.amount,
                content: detail.content,
                subscript: detail.subscript
            });
        }
    }

    detail(id) {//获取某一求购数据
        let { dispatch} = this.props;
        let data = {"buyingOrderId": id};
        dispatch(orderDetail(data));
    }

    port() {
        let data = {"limitStart": "0", "limitCount": "10", "type": "5"};
        let { dispatch } = this.props;
        dispatch(optionsList(data, 'port'));
    }

    tree() {
        let data = {"limitStart": "0", "limitCount": "10", "type": "1"};
        let { dispatch } = this.props;
        dispatch(optionsList(data, 'tree'));
    }

    goods() {
        let data = {"limitStart": "0", "limitCount": "10", "type": "3"};
        let { dispatch } = this.props;
        dispatch(optionsList(data, 'goods'));
    }

    length() {
        let data = {"limitStart": "0", "limitCount": "10", "type": "4"};
        let { dispatch } = this.props;
        dispatch(optionsList(data, 'length'));
    }

    onchange(e, name) {
        let val = e.target.value;
        switch (name) {
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
            case 'buyer':
                this.setState({
                    buyer: val
                });
                break;
            case 'mobile':
                this.setState({
                    mobile: val
                });
                break;
            case 'price':
                this.setState({
                    price: val
                });
                break;
            case 'amount':
                this.setState({
                    amount: val
                });
                break;
            case 'content':
                this.setState({
                    content: val
                });
                break;
        }
    }

    subscript(){
        let { subscript } = this.state;
        switch (subscript) {
            case '0':
                this.setState({
                    subscript: '1'
                });
                break;
            case '1':
                this.setState({
                    subscript: '0'
                });
                break;
        }
    }

    onclick(name) {
        let { dispatch } = this.props;
        let { orderId , portId , treetypeId , goodstypeId , lengthId , buyer , mobile , price , amount , content , subscript} = this.state;
        let data = {
            "portId": portId,
            "treetypeId": treetypeId,
            "goodstypeId": goodstypeId,
            "lengthId": lengthId,
            "buyer": buyer,
            "mobile": mobile,
            "price": price,
            "amount": amount,
            "content": content,
            "subscript": subscript
        };
        console.log(data);
        switch (name) {
            case 'update':
                dispatch(update(data));
                break;
            case 'add':
                dispatch(askBuy(data));
                break;
        }
    }
}