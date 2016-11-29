/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/6
 */

import React from 'react';
import {Link} from 'react-router';
import Title from '../../../component/Title/Title';
import Text from '../../../component/Text/Text';
import commonService from '../../../js/app/commonService';
import {REPORT_TYPE_UNSOLD, CARE_TYPE_UNSOLD} from '../../../js/app/contants';
import {LOGIN_USER_KEY} from '../../../js/app/contants';//用户key

import userKey from '../../index/actions';//判断是否有userid

import service from '../service';

import {Bottom} from '../../../component/Bottom/Bottom';

export default class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: null,
            cared: 'false'    // 是否关注
        };
    }
    componentDidMount() {
        //判断是否登录
        let userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        if(JSON.stringify(userId)==='null'){
            userKey.user().then(rep => {
                window.sessionStorage.setItem(LOGIN_USER_KEY, rep.result.data);
            })
        }

        let unsoldId = this.props.params.id;

        service.showUnsold({
            unsoldOrderId: unsoldId
        }).then((rep) => {
            this.setState({
                detail: rep.result.data
            });
        });

        commonService.showFocus({
            id: unsoldId,
            type: CARE_TYPE_UNSOLD
        }).then((rep) => {
            this.setState({
                cared: rep.result.data
            });
        });
    }
    care() {
        let that = this;

        commonService.addInterest({
            type: CARE_TYPE_UNSOLD,
            orderId: this.state.detail.orderId
        }).then(rep => {
            if (rep.state === 1) {
                window.toast('关注成功', {
                    callback() {
                        that.setState({
                            cared: true
                        });
                    }
                });
            } else {
                window.toast('添加失败, 请稍候重试');
            }
        });
    }
    sendMsg() {
        window.location.href = `./mine.html#/msg_chat/${this.state.detail.userId}`;
    }
    render() {
        let detail = this.state.detail;
        return(
            <div className="module-detail">

                    {
                        this.state.detail !== null ?
                            <div className="detail-box-wrapper">
                                <div className="detail-box">
                                    <div className="img">
                                        {
                                            detail.iconUrl ?
                                                <img src={detail.iconUrl} width="80" height="60" />
                                                :
                                                null
                                        }
                                    </div>
                                    <Title content="基本规格" tip={moment(detail.createTime).format('YYYY-MM-DD HH:mm:ss')} />
                                    <div className="content">
                                        <div className="info">
                                            {detail.dim.treetypeName} {detail.dim.goodstypeName} {detail.dim.lengthName}
                                        </div>
                                        <Text label="价格" text={detail.price} half={true} border={false} />
                                        <Text label="目标口岸" text={detail.portName} half={true} border={false} />
                                        <Text label="货物位置" text={detail.locationName} half={true} border={false} />
                                        <Text label="货主" text={detail.owner} half={true} border={false} />
                                        <Text label="手机号" text={detail.mobile} half={false} border={true} />
                                    </div>
                                    <div className="detail">
                                        <div className="ui-title-detail">
                                            <span className="text">详细信息<i className="icon-slide"></i></span>
                                            {/*
                                             this.state.isSlide === true ?
                                             <i className="icon icon-slide-up" onClick={this.toggleSlide.bind(this)}></i>
                                             :
                                             <i className="icon icon-slide-down" onClick={this.toggleSlide.bind(this)}></i>
                                             */}
                                        </div>
                                        {/*<div className={'content' + (this.state.isSlide === false ? ' fn-none' : '')}>*/}
                                        <div className="content">
                                            <Text label="总货量" text={detail.amount} />
                                            <Text label="参考根数" text={detail.referenceAmount} />
                                            <Text label="新旧" text={detail.abrasion} />
                                            <Text label="蓝变" text={detail.blue} />
                                            <Text label="虫眼" text={detail.mouthEaten} />
                                            <Text label="腐朽眼" text={detail.corrosion} />
                                            <Text label="产地" text={detail.origin} />
                                            <Text label="斜裂" text={detail.inclinedcrack === 1 ? '有' : '无'} half={true} />
                                            <Text label="环裂" text={detail.cyclecrack === 1 ? '有' : '无'} half={true} />
                                            <Text label="抽油" text={detail.oiled === 1 ? '有' : '无'} half={true} />
                                            <Text label="黑心" text={detail.darkpith === 1 ? '有' : '无'} half={true} />
                                        </div>
                                    </div>
                                    <div className="do">
                                        <div className="ui-tab">
                                            {
                                                detail.store ?
                                                    <a href={`./shop.html#/home/${detail.store.id}`} className="item">店铺</a>
                                                    :
                                                    null
                                            }
                                            <Link className="item" to={`/report/${REPORT_TYPE_UNSOLD}/${detail.orderId}`}>举报</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer">
                                    <div className="ui-tab ui-tab-white ui-tab-fixed">
                                        <a href={`tel:${detail.mobile}`} className="item">电话联系</a>
                                        <a href="javascript:;" onClick={this.sendMsg.bind(this)} className="item">发送消息</a>
                                        <div className="item">
                                            {
                                                this.state.cared === 'false'?
                                                    <a href="javascript:;"
                                                       onClick={this.care.bind(this)}
                                                       className="btn-care">+关注</a>
                                                    :
                                                    <a href="javascript:;"
                                                       className="btn-care">已关注</a>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <Bottom />
                            </div>
                            :
                            null
                    }
            </div>
        );
    }
}