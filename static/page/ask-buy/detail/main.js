/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/6
 */

import React from 'react';
import {Link} from 'react-router';
import {LOGIN_USER_KEY} from '../../../js/app/contants';//用户key

import Title from '../../../component/Title/Title';
import Text from '../../../component/Text/Text';

let { orderDetail } = require('./../actions.js');//从actions里拿到方法
import userKey from '../../index/actions';//判断是否有userid

import {Bottom} from '../../../component/Bottom/Bottom';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list:null
        };
    }
    sendMsg() {
        window.location.href = `./mine.html#/msg_chat/${this.state.list.userId}`;
    }
    render() {
        let that = this;
        let { list } = this.state;
        console.log(list);
        return (
            <div className="module-detail">
                <div className="detail-box">
                    <Title content="基本规格" tip={list!=null?moment(list.updateTime).format('YYYY-MM-DD hh:mm:ss'):null} />
                    <div className="content">
                        <div className="content-row">
                            {
                                list!= null?
                                    list.treetypeName + list.goodstypeName + list.lengthName
                                    :
                                    null
                            }
                        </div>
                        <Text label="树种" text={list!=null?list.treetypeName:null} half={true} border={false} />
                        <Text label="货种" text={list!=null?list.goodstypeName:null} half={true} border={false} />
                        <Text label="长度" text={list!=null?list.lengthName:null} half={true} border={false} />
                        <Text label="口岸" text={list!=null?list.portName:null} half={true} border={false} />
                        <Text label="价格" text={list!=null?list.price:null} half={true} border={false} />
                        <Text label="总重量" text={list!=null?list.amount:null} half={true} border={false}/>
                    </div>
                </div>

                <div className="content">
                    <div className="content-row">
                        <div className="item">{}</div>
                    </div>
                    <div className="content-row">
                        <div className="item item-half">
                            <label>联系人: </label>
                            <span className="text">{list!=null?list.buyer:null}</span>
                        </div>
                        <div className="item item-half">
                            <label>联系电话: </label>
                            <span className="text">{list!=null?list.mobile:null}</span>
                        </div>
                    </div>
                </div>
                <div className="desc">
                    <div className="ui-title">
                        <div className="text">详细内容</div>
                    </div>
                    <div className="body">
                        <div className="text">
                            {
                                list!=null?
                                    list.content
                                    :
                                    null
                            }
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="ui-tab ui-tab-white ui-tab-fixed">
                        {/*
                         <a href={`./shop.html#/home/${list.storeId}`} className="item">店铺</a>
                         */}
                        <a href={"tel:"+(list!=null?list.mobile:null)} className="item">电话联系</a>
                        <a href="javascript:;" onClick={this.sendMsg.bind(this)} className="item">发送消息</a>
                    </div>
                </div>
                <Bottom />
            </div>
        );
    }
    componentDidMount() {
        //判断是否登录
        let userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        if(JSON.stringify(userId)==='null'){
            userKey.user().then(rep => {
                window.sessionStorage.setItem(LOGIN_USER_KEY, rep.result.data);
            })
        }
        //显示求购详情
        orderDetail({
            buyingOrderId:this.props.params.id
        }).then(rep => {
            this.setState({
                list:rep.result.data
            })
        });
        /*
        let { dispatch} = this.props;
        let data= {"buyingOrderId":this.props.params.id};
        dispatch(orderDetail(data));
        */
    }
    componentWillReceiveProps(nextProps) {
        /*
        let detail = nextProps.askBuy.detail;
        this.setState({
            list:detail
        })
        */
    }
}