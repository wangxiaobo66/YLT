/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/4
 */

import React from 'react';
import {Link} from 'react-router';
import {AskBuy} from '../../../component/AskBuy/AskBuy';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    "region": "满洲里",
                    "time": "08-03 22:06",
                    "name": "落叶松",
                    "size": "六米",
                    "type": "原木",
                    "diam": "20",
                    "level": "一级"
                },
                {
                    "region": "满洲里",
                    "time": "08-03 22:06",
                    "name": "落叶松",
                    "size": "六米",
                    "type": "原木",
                    "diam": "20",
                    "level": "一级"
                }
            ]
        };
    }
    componentDidMount() {

    }
    /**
     * 切换操作
     */
    toggleOper(item) {
        if (!item.isOperating) {
            item.isOperating = true;
        } else {
            item.isOperating = false;
        }
        this.setState({});
    }
    render() {
        let that = this;
        return (
            <div className="module-ask-buy">
                <ul className="list">
                    {
                        this.state.list.map(function (item, index) {
                            return (
                                <li className="item clearfix" key={index}>
                                    <AskBuy obj={item} />
                                    {
                                        !item.isOperating === true ?
                                            <div className="ui-do"
                                                 onClick={that.toggleOper.bind(that, item)}>操作</div>
                                            :
                                            <div className="ui-do ui-do-cancel"
                                                 onClick={that.toggleOper.bind(that, item)}>取消</div>
                                    }
                                    <div className={'ui-tab ui-tab-normal' + (!item.isOperating === true ? ' fn-none' : '')}>
                                        <a href="javascript:;" className="item">刷新</a>
                                        <a href="javascript:;" className="item">修改</a>
                                        <a href="javascript:;" className="item">删除</a>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>

            </div>
        );
    }
}