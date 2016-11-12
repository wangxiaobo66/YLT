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
            list: null,
            form: {
                fromUserId: this.props.params.fromUserId,
                toUserId: this.props.params.toUserId,
                content: ''
            },
            disabled: false,
            user: null
        };
    }
    componentDidMount() {

        service.msgList({
            fromUserId: this.props.params.fromUserId,
            toUserId: this.props.params.toUserId,
            limitStart: 0,
            limitCount: LIMIT_COUNT
        }).then((rep) => {
            this.setState({
                list: rep.result.list
            });
        });

        // 获取当前用户信息
        service.detail({}).then((rep) => {
            this.setState({
                user: rep.result.data
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
            this.state.list.push({
                headimgurl: this.state.user.headimgurl,
                fromUserId: this.state.form.fromUserId,
                toUserId: this.state.form.toUserId,
                content: this.state.form.content
            });
            this.state.form.content = '';
            this.checkDisabled();
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
                <div className="send-msg">
                    <div className="msg-box">
                        <input type="text"
                               value={this.state.form.content}
                               className="msg-input"
                               onChange={this.checkDisabled.bind(this, 'content')}/>
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