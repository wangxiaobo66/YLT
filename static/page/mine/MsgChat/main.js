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
        service.msgList({
            fromUserId: this.props.params.fromUserId,
            toUserId: this.props.params.toUserId,
            limitStart: 1,
            limitCount: LIMIT_COUNT
        }).then((rep) => {
            this.setState({
                list: rep.data.list
            });
        });
    }
    render() {
        return (
            <div className="module-msg-chat">
                <ul className="list">
                    {
                        this.state.list !== null ?
                            this.state.list.map((item, index) => {
                                return (
                                    <li className={item.fromUserId == this.props.params.fromUserId ? 'item item-left' : 'item item-right'}>
                                        <div className="time">
                                            <div className="time-box">{moment(item.createTime).format('YYYY-MM-DD hh:mm:ss')}</div>
                                        </div>
                                        <div className="detail clearfix">
                                            <div className="img-box">
                                                <img src={item.headimgurl} width="35" height="35" alt=""/>
                                                <p className="name">{item.nickname}</p>
                                            </div>
                                            <div className="info">
                                                {item.content}
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                            :
                            null
                    }
                </ul>
            </div>
        );
    }
}