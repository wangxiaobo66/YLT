/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/4
 */

import React from 'react';
import {Link} from 'react-router';
import {LIMIT_COUNT} from '../../../js/app/contants';
import service from '../service';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: null
        };
    }
    componentDidMount() {
        service.myTopList({
            limitStart: 0,
            limitCount: LIMIT_COUNT
        }).then((rep) => {
            this.setState({
                list: rep.result.list
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
                            list.length > 0 ?
                                list.map((item, index) => {
                                    return (
                                        <li className="item">
                                            <Link className="item-link clearfix" to={`/msg_chat/${item.fromUserId}`}>
                                                <img src={item.fromUser.headimgurl} width="45" height="45" className="img"/>
                                                <div className="info">
                                                    <div className="title">
                                                        {
                                                            item.count !== 0 ?
                                                                <div className="ui-num">{item.count}</div>
                                                                :
                                                                null
                                                        }
                                                        <span className="text">{item.fromUser.nickname}</span>
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
                                <li className="no-data">暂无数据</li>
                            :
                            null
                    }
                </ul>
            </div>
        );
    }
}