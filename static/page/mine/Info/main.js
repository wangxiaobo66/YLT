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
                <Header text="头像" src={imgLogo} href="/info_portrait" />
                <div className="ui-card ui-card--right fn-mt10">
                    <Link className="item" to="info_nickname">
                        <label>昵称</label>
                        <div className="text">我是昵称</div>
                    </Link>
                    <Link className="item" to="info_name">
                        <label>姓名</label>
                        <div className="text">我是姓名</div>
                    </Link>
                    <Link className="item" to="info_mobile">
                        <label>手机号</label>
                        <div className="text">我是手机号</div>
                    </Link>
                </div>
                <div className="ui-card ui-card--right fn-mt10">
                    <Link className="item" to="info_company">
                        <label>公司信息</label>
                        <div className="text">某某科技有限公司</div>
                    </Link>
                    <Link className="item" to="info_care">
                        <label>关注口岸</label>
                        <div className="text">这里是我的口岸</div>
                    </Link>
                </div>
                <div className="ui-card ui-card--right fn-mt10">
                    <Link className="item" to="info_address">
                        <label>省份</label>
                        <div className="text">我是省份</div>
                    </Link>
                    <Link className="item" to="info_address">
                        <label>城市</label>
                        <div className="text">我是城市</div>
                    </Link>
                </div>
            </div>
        );
    }
}