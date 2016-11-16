/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/4
 */

import React from 'react';
import {Link} from 'react-router';
import ReactIScroll from 'react-iscroll';
import iScroll from 'iscroll';
import {LIMIT_COUNT, LOGIN_USER_KEY} from '../../../js/app/contants';
import service from '../service';


export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: null,
            form: {
                toUserId: this.props.params.toUserId,
                content: ''
            },
            disabled: false,
            user: null,
            limitStart: 0
        };
    }
    getDefaultProps() {
        return ({
            options: {
                mouseWheel: true,
                scrollbars: true
            }
        });
    }
    onScrollStart() {
        this.state.limitStart = this.state.limitStart + LIMIT_COUNT;
    }
    componentDidMount() {

        this.fetchList();

        // 获取当前用户信息
        service.detail().then((rep) => {
            this.setState({
                user: rep.result.data
            });
        });

    }
    fetchList() {
        service.msgList({
            toUserId: this.props.params.toUserId,
            limitStart: this.state.limitStart,
            limitCount: LIMIT_COUNT
        }).then((rep) => {
            let results = [];
            if (this.state.list === null) {
                results.concat(rep.result.list);
            } else {
                results = this.state.list.concat(rep.result.list);
            }
            this.setState({
                list: results
            });
        });
    }
    checkDisabled(key, event) {
        let disabled = false;
        let form = this.state.form;

        if (key && event) {
            form[key] = event.target.value;
        }

        if ($.trim(form.content) === '') {
            disabled = true;
        }

        this.setState({
            disabled: disabled
        });
    }
    addMsg() {
        service.addMsg(this.state.form).then((rep) => {
            this.state.list.unshift({
                headimgurl: this.state.user.headimgurl,
                userId: window.sessionStorage.getItem(LOGIN_USER_KEY),
                toUserId: this.state.form.toUserId,
                content: this.state.form.content
            });
            this.state.form.content = '';
            this.checkDisabled();
        });
    }
    render() {
        let myUserId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        let msgHtml = [];
        let list = this.state.list;
        if (list !== null) {
            let len = list.length;
            let item;
            if (len === 0) {
                msgHtml = <li className="item no-data">暂无数据</li>;
            } else {
                for (let i = len - 1; i >= 0; i--) {
                    item = list[i];
                    msgHtml.push(
                        <li className={item.userId == myUserId ? 'item item-right' : 'item item-left'}>
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
                    );
                }
            }
        } else {
            msgHtml = null;
        }

        return (
            <div className="module-msg-chat">
                <ReactIScroll iScroll={iScroll}
                              options={this.props.options}
                              onScrollStart={this.onScrollStart.bind(this)}>
                    <ul className="list">
                        {msgHtml}
                    </ul>
                </ReactIScroll>
                <div className="send-msg">
                    <div className="msg-box">
                        <textarea type="text"
                                  rows="1"
                                  value={this.state.form.content}
                                  className="msg-input"
                                  onChange={this.checkDisabled.bind(this, 'content')} />
                        <a href="javascript:;"
                           onClick={this.addMsg.bind(this)}
                           disabled={this.state.disabled === true}
                           className="btn btn-primary btn-block">发送</a>
                    </div>
                </div>
            </div>
        );
    }
}