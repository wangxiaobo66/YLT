/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/6
 */

import React from 'react';
import {Link} from 'react-router';

const { optionsList , askBuy , orderDetail , update } = require('./../actions.js');//从actions里拿到方法

import buyingService from './..//actions';//求购

import {Bottom} from '../../../component/Bottom/Bottom';

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
            subscript: '0',//是否订阅,默认不订阅
            //码表信息
            portOptions:null,
            treeOptions:null,
            goodsOptions:null,
            lengthOptions:null,
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
                                        this.state.portOptions != null ?
                                            this.state.portOptions.map(function (obj) {
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
                                        this.state.treeOptions != null ?
                                            this.state.treeOptions.map(function (obj) {
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
                                        this.state.goodsOptions != null ?
                                            this.state.goodsOptions.map(function (obj) {
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
                                        this.state.lengthOptions != null ?
                                            this.state.lengthOptions.map(function (obj) {
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
                <Bottom />
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

    tree() {
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

    goods() {
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

    length() {
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
        let dataUpdate = {
            "orderId":orderId,
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
        let dataAdd = {
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
        switch (name) {
            case 'update':
                if(dataUpdate.portId!=''&&dataUpdate.treetypeId!=''&&dataUpdate.goodstypeId!=''
                    &&dataUpdate.lengthId!=''&&dataUpdate.buyer!=''&&dataUpdate.mobile!=''
                    &&dataUpdate.price!=''&&dataUpdate.amount!=''){
                    dispatch(update(dataUpdate));
                }else if(dataUpdate.portId===''){
                    window.toast('请选择口岸!');
                }else if(dataUpdate.treetypeId===''){
                    window.toast('请选择树种!');
                }else if(dataUpdate.goodstypeId===''){
                    window.toast('请选择货种!');
                }else if(dataUpdate.lengthId===''){
                    window.toast('请选择长度!');
                }else if(dataUpdate.buyer===''){
                    window.toast('请填写买家姓名!');
                }else if(dataUpdate.mobile===''){
                    window.toast('请填写买家手机号!');
                }else if(dataUpdate.price===''){
                    window.toast('请填写期望价格!');
                }else if(dataUpdate.amount===''){
                    window.toast('请填写求购数量!');
                }
                break;
            case 'add':
                if(dataAdd.portId!=''&&dataAdd.treetypeId!=''&&dataAdd.goodstypeId!=''
                    &&dataAdd.lengthId!=''&&dataAdd.buyer!=''&&dataAdd.mobile!=''
                    &&dataAdd.price!=''&&dataAdd.amount!=''){
                    dispatch(askBuy(dataAdd));
                }else if(dataAdd.portId===''){
                    window.toast('请选择口岸!');
                }else if(dataAdd.treetypeId===''){
                    window.toast('请选择树种!');
                }else if(dataAdd.goodstypeId===''){
                    window.toast('请选择货种!');
                }else if(dataAdd.lengthId===''){
                    window.toast('请选择长度!');
                }else if(dataAdd.buyer===''){
                    window.toast('请填写买家姓名!');
                }else if(dataAdd.mobile===''){
                    window.toast('请填写买家手机号!');
                }else if(dataAdd.price===''){
                    window.toast('请填写期望价格!');
                }else if(dataAdd.amount===''){
                    window.toast('请填写求购数量!');
                }
                break;
        }
    }
}