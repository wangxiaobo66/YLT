/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/6
 */

import React from 'react';
import {Link} from 'react-router';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [

            ]
        };
    }
    componentDidMount() {

    }
    render() {
        let that = this;
        return (
            <div className="module-add fn-mt10">
                <form className="ui-form">
                    <div className="item">
                        <label>
                            <div className="for">服务类型</div>
                            <div className="input-box input-box--select">
                                <select className="ui-select">
                                    <option value="请选择服务类型">请选择服务类型</option>
                                    <option value="1">求车服务</option>
                                    <option value="2">场地出租</option>
                                    <option value="3">设备租售</option>
                                    <option value="4">招聘服务</option>
                                    <option value="5">求职服务</option>
                                    <option value="6">其它服务</option>
                                </select>
                            </div>
                        </label>
                    </div>
                    <div className="item">
                        <label>
                            <div className="for">标题</div>
                            <div className="input-box">
                                <input className="input input-block" type="text"
                                       placeholder="请输入标题, 不超过15字" />
                            </div>
                        </label>
                    </div>
                    <div className="item">
                        <label>
                            <div className="for">联系人</div>
                            <div className="input-box">
                                <input className="input input-block"
                                       type="text"
                                       placeholder="请输入姓名" />
                            </div>
                        </label>
                    </div>
                    <div className="item">
                        <label>
                            <div className="for">联系电话</div>
                            <div className="input-box">
                                <input className="input input-block" type="tel"
                                       placeholder="请输入联系电话" />
                            </div>
                        </label>
                    </div>
                </form>
                <div className="ui-title fn-mt10">
                    <h3 className="text">详细内容</h3>
                </div>
                <form className="ui-form ui-form-textarea">
                    <div className="item">
                        <label>
                            <div className="input-box">
                                <textarea rows="8" placeholder="请输入详细内容, 200字以内" />
                            </div>
                        </label>
                    </div>
                </form>
                <footer className="footer">
                    <a href="javascript:;" className="ui-btn ui-btn-fixed">发布</a>
                </footer>
            </div>
        );
    }
}