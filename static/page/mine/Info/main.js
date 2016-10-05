/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/4
 */

import React from 'react';
import {Link} from 'react-router';
import Header from '../_common/Header/Header';
import imgLogo from '../../../images/logo.png';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className="module-info">
                <Header text="昵称/手机号" src={imgLogo} href="/info_phone" />
                <div className="ui-card ui-card--right fn-mt10">
                    <div className="item">
                        <label>昵称</label>
                        <div className="text">我是昵称</div>
                    </div>
                    <div className="item">
                        <label>姓名</label>
                        <div className="text">我是姓名</div>
                    </div>
                    <div className="item">
                        <label>手机号</label>
                        <div className="text">我是手机号</div>
                    </div>
                </div>
                <div className="ui-card ui-card--right fn-mt10">
                    <div className="item">
                        <label>公司信息</label>
                        <div className="text">某某科技有限公司</div>
                    </div>
                    <div className="item">
                        <label>关注口岸</label>
                        <div className="text">这里是我的口岸</div>
                    </div>
                </div>
                <div className="ui-card ui-card--right fn-mt10">
                    <div className="item">
                        <label>省份</label>
                        <div className="text">我是省份</div>
                    </div>
                    <div className="item">
                        <label>城市</label>
                        <div className="text">我是诚实</div>
                    </div>
                </div>
            </div>
        );
    }
}