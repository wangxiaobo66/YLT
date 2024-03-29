/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/4
 */

import React from 'react';
import {Link} from 'react-router';
import Header from '../_common/Header/Header';
import service from '../service';

import {Bottom} from '../../../component/Bottom/Bottom';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: null
        };
    }
    componentDidMount() {
        service.detail({}).then((rep) => {
            let user = rep.result.data;
            this.setState({
                detail: user
            });
        });
    }
    render() {
        let detail = this.state.detail;
        return (
            detail !== null ?
                <div className="module-info">
                    <div className="ui-card ui-card--right fn-mt10">
                        <Link className="item" to="info_portrait">
                            <label>头像</label>
                            <div className="text">
                                <img src={detail.headimgurl} width="60" height="60" />
                            </div>
                        </Link>
                        <Link className="item" to="info_nickname">
                            <label>昵称</label>
                            <div className="text">{detail.nickname || detail.mobile}</div>
                        </Link>
                        <Link className="item" to="info_name">
                            <label>姓名</label>
                            <div className="text">{detail.consumerName || detail.mobile}</div>
                        </Link>
                        <Link className="item" to="info_mobile">
                            <label>手机号</label>
                            <div className="text">{detail.mobile}</div>
                        </Link>
                    </div>
                    <div className="ui-card ui-card--right fn-mt10">
                        <Link className="item" to="info_company">
                            <label>公司信息</label>
                            <div className="text">{detail.company || '暂无'}</div>
                        </Link>
                    </div>
                    <div className="ui-card ui-card--right fn-mt10">
                        <Link className="item" to="info_address">
                            <label>省份</label>
                            <div className="text">{detail.province || '暂无'}</div>
                        </Link>
                        <Link className="item" to="info_address">
                            <label>城市</label>
                            <div className="text">{detail.city || '暂无'}</div>
                        </Link>
                    </div>
                    <Bottom />
                </div>
                :
                null
        );
    }
}