/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/6
 */

import React from 'react';
import {Link} from 'react-router';
import Title from '../../../component/Title/Title';
import Text from '../../../component/Text/Text';
import {REPORT_TYPE_UNSOLD, CARE_TYPE_STORE} from '../../../js/app/contants';

import service from '../service';

export default class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: null
        };
    }
    componentDidMount() {
        let unsoldId = this.props.params.id;
        service.showUnsold({
            unsoldOrderId: unsoldId
        }).then((rep) => {
            this.setState({
                detail: rep.result.data
            });
        });
    }
    care() {
        service.addInterest({
            type: CARE_TYPE_STORE,
            orderId: this.state.detail.orderId
        }).then(rep => {
            if (rep.state === 1) {
                window.toast('关注成功');
            } else {
                window.toast('添加失败, 请稍候重试');
            }
        });
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
                                            detail.imgUrl ?
                                                <img src={detail.imgUrl} width="80" height="60" />
                                                :
                                                null
                                        }
                                    </div>
                                    <Title content="基本规格" tip={moment(detail.createTime).format('YYYY-MM-DD HH:mm:ss')} />
                                    <div className="content">
                                        <div className="info">
                                            {detail.dimension.treetypeName} {detail.dimension.goodstypeName} {detail.dimension.lengthName}
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
                                            <Text label="斜裂" text={detail.inclinedcrack} half={true} />
                                            <Text label="环裂" text={detail.cyclecrack} half={true} />
                                            <Text label="抽油" text={detail.oiled} half={true} />
                                            <Text label="黑心" text={detail.darkpith} half={true} />
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
                                        <a href={`./mine.html#/msg_chat/${detail.userId}`} className="item">发送消息</a>
                                        <div className="item">
                                            <a href="javascript:;"
                                               onClick={this.care.bind(this)}
                                               className="btn-care">+关注</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            null
                    }
            </div>
        );
    }
}