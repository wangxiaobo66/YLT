/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/24
 */

import React from 'react';
import {Link} from 'react-router';
import Title from '../../../component/Title/Title';
import Text from '../../../component/Text/Text';

export default class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSlide: false
        };
    }
    componentDidMount() {

    }
    toggleSlide() {
        this.setState({
            isSlide: !this.state.isSlide
        });
    }
    render() {
        return(
            <div className="module-detail">
                <div className="detail-box">
                    <div className="img">
                        <img src="../../static/images/ys.png" width="80" height="60" alt=""/>
                    </div>
                    <Title content="基本规格" tip="0803 12:12" />
                    <div className="content">
                        <div className="info">
                            樟子松      4米      原木      16中      选材
                        </div>
                        <Text label="车皮号" text="12345678" half={true} border={false} />
                        <Text label="目标口岸" text="满洲里了啊" half={true} border={false} />
                        <Text label="更新时间" text="08:03" half={true} border={false} />
                        <Text label="当前位置" text="满洲里" half={true} border={false} />
                        <Text label="参考重量" text="未知" half={true} border={false} />
                        <Text label="车类型" text="未知" half={true} border={false} />
                        <Text label="代理公司" text="未知" />
                    </div>
                    <div className="detail">
                        <div className="ui-title-detail">
                            <span className="text">详细信息</span>
                            {/*
                             this.state.isSlide === true ?
                             <i className="icon icon-slide-up" onClick={this.toggleSlide.bind(this)}></i>
                             :
                             <i className="icon icon-slide-down" onClick={this.toggleSlide.bind(this)}></i>
                             */}
                        </div>
                        {/*<div className={'content' + (this.state.isSlide === false ? ' fn-none' : '')}>*/}
                        <div className="content">
                            <Text label="总货量" text="120" />
                            <Text label="参考根数" text="120" />
                            <Text label="新旧" text="新材" />
                            <Text label="蓝变" text="无蓝变" />
                            <Text label="虫眼" text="无虫眼" />
                            <Text label="腐朽眼" text="无腐朽" />
                            <Text label="产地" text="俄罗斯" />
                            <Text label="斜裂" text="无" half={true} />
                            <Text label="环裂" text="五" half={true} />
                            <Text label="抽油" text="五" half={true} />
                            <Text label="黑心" text="五" half={true} />
                        </div>
                    </div>
                    <div className="do">
                        <div className="ui-tab">
                            <a href="javascript:;" className="item">分享</a>
                            <Link className="item" to={`/report`}>举报</Link>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="ui-tab ui-tab-white ui-tab-fixed">
                        <a href="./shop.html#/home" className="item">店铺</a>
                        <a href="tel:15811112222" className="item">电话联系</a>
                        <a href="./mine.html#msg_chat" className="item">发送消息</a>
                        <div className="item">
                            <a href="javascript:;" className="btn-care">+关注</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}