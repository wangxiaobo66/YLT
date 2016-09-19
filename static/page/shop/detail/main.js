/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/17
 */

import React from 'react';
import {Button} from 'react-bootstrap';

import imgLogo from '../img/logo.png';

export default class Chepihao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {

    }
    render() {
        return(
            <div className="module-shop-detail">
                <div className="header">
                    <div className="img">
                        <img src={imgLogo} width="60" height="60" alt=""/>
                    </div>
                    <div className="info">
                        <p className="title">这里是公司名称</p>
                        <p className="sub-title">这里是副标题</p>
                        <p className="care">关注人数: 21</p>
                    </div>
                </div>
                <div className="tabs clearfix">
                    <div className="item">
                        <p className="num">21</p>
                        <p className="tip">全部商品</p>
                    </div>
                    <div className="divide">|</div>
                    <div className="item">
                        <p className="num">22</p>
                        <p className="tip">最新商品</p>
                    </div>
                </div>
            </div>
        );
    }
}