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
            <div className="module-msg-list">
                <ul className="list">
                    <li className="item">
                        <Link className="item-link" to="/msg_chat">
                            <img src={imgLogo} width="45" height="45" alt="" className="img"/>
                            <div className="info">
                                <div className="title">
                                    <div className="ui-num">2</div>
                                    <span className="text">及时通讯用户 昵称xxx</span>
                                </div>
                                <div className="detail">
                                    <div className="msg ellipsis">你好, 我想要咨询这个和那个是什么...</div>
                                    <div className="time">07-12 21:21:21</div>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li className="item">
                        <Link className="item-link" to="/msg_chat">
                            <img src={imgLogo} width="45" height="45" alt="" className="img"/>
                            <div className="info">
                                <div className="title">
                                    <div className="ui-num">3</div>
                                    <span className="text">昵称yyy</span>
                                </div>
                                <div className="detail">
                                    <div className="msg ellipsis">你好, 我想要咨询这个和那个是什么...</div>
                                    <div className="time">07-12 21:21:21</div>
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}