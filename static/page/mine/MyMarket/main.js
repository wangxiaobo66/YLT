/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/4
 */

import React from 'react';
import {Link} from 'react-router';
import {Market} from '../../../component/Market/Market';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    "imgSrc": "../../static/component/Market/img/ys.png",
                    "name": "落叶松1",
                    "size": "六米",
                    "type": "原木",
                    "currentPosition": "明斯克",
                    "Destination": "满洲里",
                    "pubDate": "9-30|10:01",
                    "diam": "20",
                    "level": "一级"
                },
                {
                    "imgSrc": "../../static/component/Market/img/ys.png",
                    "name": "落叶松2",
                    "size": "三米",
                    "type": "原木",
                    "currentPosition": "明斯克",
                    "destination": "满洲里",
                    "pubDate": "9-30|10:01",
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
            <div className="module-market">
                <ul className="list">
                    {
                        this.state.list.map(function (item, index) {
                            return (
                                <li className="item clearfix" key={index}>
                                    <Market obj={item} />
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