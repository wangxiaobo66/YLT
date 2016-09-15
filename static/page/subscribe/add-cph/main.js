/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/15
 */

import './style.scss';

import React from 'react';
import {Button} from 'react-bootstrap';

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
            <div className="module-cph">
                <div className="ui-title">输入您要订阅的车皮号，该车皮的木材到货后，会将信息推送给您</div>
                <form className="ui-form">
                    <div className="item">
                        <label>
                            <div className="for">车皮号</div>
                            <div className="input-box">
                                <input className="input input-block" type="text" placeholder="请输入车皮号" />
                            </div>
                        </label>
                    </div>
                    <div className="item">
                        <label>
                            <div className="for">订阅时间</div>
                            <div className="input-box">
                                <input className="input input-inline col-xs-5" type="date" placeholder="开始时间" />
                                <span className="col-xs-1">到</span>
                                <input className="input input-inline col-xs-5" type="date" placeholder="结束时间" />
                            </div>
                        </label>
                    </div>
                </form>
                <div className="oper">
                    <a href="javascript:;" className="ui-btn ui-btn-fixed">新增订阅</a>
                </div>
            </div>
        );
    }
}