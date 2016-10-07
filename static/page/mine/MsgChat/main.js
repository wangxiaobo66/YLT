/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/4
 */

import React from 'react';
import {Link} from 'react-router';
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
            <div className="module-msg-chat">
                <ul className="list">
                    <li className="item item-left">
                        <div className="time">
                            <div className="time-box">2016-09-09 10:10:10</div>
                        </div>
                        <div className="detail clearfix">
                            <div className="img-box">
                                <img src={imgLogo} width="35" height="35" alt=""/>
                                <p className="name">昵称1</p>
                            </div>
                            <div className="info">
                                您好, 咨询消息。。。。。。您好, 咨询消息。。。。。。您好, 咨询消息。。。。。。
                            </div>
                        </div>
                    </li>
                    <li className="item item-right">
                        <div className="time">
                            <div className="time-box">2016-09-09 10:10:10</div>
                        </div>
                        <div className="detail clearfix">
                            <div className="img-box">
                                <img src={imgLogo} width="35" height="35" alt=""/>
                                <p className="name">昵称2</p>
                            </div>
                            <div className="info">
                                您好, 有什么可以帮您?
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}