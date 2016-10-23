/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/26
 */

import './Shop.scss';

import React from 'react';
import imgLogo from './img/logo.png';
import imgE1 from './img/example.png';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div className="Shop-component">
                <div className="info">
                    <img className="img" src={imgLogo} width="45" height="45" alt=""/>
                    <div className="info-detail">
                        <div className="title">
                            <div className="title-location">
                                <i className="icon icon-location"></i>
                                <span className="text">满洲里</span>
                            </div>
                            <div className="title-name">公司名称</div>
                        </div>
                        <div className="sub-title">这里暂时是副标题</div>
                        <div className="desc">公司介绍内容</div>
                    </div>
                </div>
                <div className="goods-box">
                    <ul className="goods clearfix">
                        <li className="item">
                            <img src={imgE1} width="123" height="63" alt=""/>
                        </li>
                        <li className="item">
                            <img src={imgE1} width="123" height="63" alt=""/>
                        </li>
                        <li className="item">
                            <img src={imgE1} width="123" height="63" alt=""/>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}