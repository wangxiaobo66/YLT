/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/6
 */

import React from 'react';
import {Link} from 'react-router';

import Title from '../../../component/Title/Title';
import Text from '../../../component/Text/Text';

let { orderDetail } = require('./../actions.js');//从actions里拿到方法

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
        let { dispatch} = this.props;
        let data= {"buyingOrderId":this.props.params.id};
        console.log(data);
        dispatch(orderDetail(data));
    }
    componentWillReceiveProps(nextProps) {
        let detail = nextProps.askBuy.detail;
        this.setState({
            list:detail
        })
    }
    render() {
        let that = this;
        let { list } = this.state;
        return (
            <div className="module-detail">
                <div className="detail-box">
                    <Title content="基本规格" tip="0803 12:12" />
                    <div className="content">
                        <div className="content-row">
                            {(list.treetypeName) (list.goodstypeName) (list.lengthName)}
                        </div>
                        <Text label="树种" text={list.treetypeName} half={true} border={false} />
                        <Text label="货种" text={list.goodstypeName} half={true} border={false} />
                        <Text label="长度" text={list.lengthName} half={true} border={false} />
                        <Text label="口岸" text={list.portName} half={true} border={false} />
                        <Text label="价格" text={list.price} half={true} border={false} />
                        <Text label="总重量" text={list.amount} />
                    </div>
                </div>

                <div className="content">
                    <div className="content-row">
                        <div className="item">{}</div>
                    </div>
                    <div className="content-row">
                        <div className="item item-half">
                            <label>联系人: </label>
                            <span className="text">{list.buyer}</span>
                        </div>
                        <div className="item item-half">
                            <label>联系电话: </label>
                            <span className="text">{list.mobile}</span>
                        </div>
                    </div>
                </div>
                <div className="desc">
                    <div className="ui-title">
                        <div className="text">详细内容</div>
                    </div>
                    <div className="body">
                        <div className="text">
                            这里是内容
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="ui-tab ui-tab-white ui-tab-fixed">
                        <a href="/shop.html#/home" className="item">店铺</a>
                        <a href="tel:15811112222" className="item">电话联系</a>
                        <a href="javascript;" className="item">发送消息</a>
                    </div>
                </div>
            </div>
        );
    }
}