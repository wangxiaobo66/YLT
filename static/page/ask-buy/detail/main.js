/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/6
 */

import React from 'react';
import {Link} from 'react-router';

import Title from '../../../component/Title/Title';
import Text from '../../../component/Text/Text';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [

            ]
        };
    }
    componentDidMount() {

    }
    render() {
        let that = this;
        return (
            <div className="module-detail">
                <div className="detail-box">
                    <Title content="基本规格" tip="0803 12:12" />
                    <div className="content">
                        <div className="content-row">
                            樟子松 4米 原木 16中 选材
                        </div>
                        <Text label="树种" text="樟子松" half={true} border={false} />
                        <Text label="货种" text="原木" half={true} border={false} />
                        <Text label="长度" text="3米" half={true} border={false} />
                        <Text label="口岸" text="满洲里" half={true} border={false} />
                        <Text label="直径" text="0.5" half={true} border={false} />
                        <Text label="价格" text="未知" half={true} border={false} />
                        <Text label="总重量" text="未知" />
                    </div>
                </div>

                <div className="content">
                    <div className="content-row">
                        <div className="item">满洲里到形态13米高地板</div>
                    </div>
                    <div className="content-row">
                        <div className="item item-half">
                            <label>联系人: </label>
                            <span className="text">张三</span>
                        </div>
                        <div className="item item-half">
                            <label>联系电话: </label>
                            <span className="text">15811112222</span>
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