/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/4
 */

import React from 'react';
import {Link} from 'react-router';
import {LIMIT_COUNT} from '../../../js/app/contants';
import service from '../service';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: null
        };
    }
    componentDidMount() {
        service.allList({
            limitStart: 1,
            limitCount: LIMIT_COUNT
        }).then((rep) => {
            this.setState({
                list: rep.data.list
            });
        });
    }
    render() {
        let list = this.state.list;
        return (
            <div className="module-msg-list">
                <ul className="list">
                    {
                        list !== null ?
                            list.map((item, index) => {
                                return (
                                    <li className="item">
                                        <Link className="item-link" to={`/msg_chat/${item.fromUserId}/${item.toUserId}`}>
                                            <img src={item.headimgurl} width="45" height="45" className="img"/>
                                            <div className="info">
                                                <div className="title">
                                                    <div className="ui-num">{item.msgNum}</div>
                                                    <span className="text">{item.nickname}</span>
                                                </div>
                                                <div className="detail">
                                                    <div className="msg ellipsis">{item.content}</div>
                                                    <div className="time">{moment(item.createTime).format('MM-DD hh:mm:ss')}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                );
                            })
                            :
                            null
                    }
                </ul>
            </div>
        );
    }
}