/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/24
 */

import React from 'react';
import {Link} from 'react-router';
import Tab from './Tab';
import {TAB_TRAIN} from '../constants';

export default class ListTrain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    "id": 1,
                    "time":"10:32",
                    "seat":"满洲里1",
                    "tailNumber":"7788",
                    "varieties":"樟子松"
                },
                {
                    "id": 2,
                    "time":"10:32",
                    "seat":"满洲里2",
                    "tailNumber":"7788",
                    "varieties":"樟子松"
                },
                {
                    "id": 3,
                    "time":"10:32",
                    "seat":"满洲里3",
                    "tailNumber":"7788",
                    "varieties":"樟子松"
                },
                {
                    "id": 4,
                    "time":"10:32",
                    "seat":"满洲里4",
                    "tailNumber":"7788",
                    "varieties":"樟子松"
                }
            ]
        };
    }
    componentDidMount() {

    }
    render() {
        return(
            <div className="module-list-train">
                <Tab type={TAB_TRAIN} />
                <div className="ui-table">
                    <ul className="thead">
                        <li className="th">
                            <span className="text">时间</span>
                        </li>
                        <li className="th">
                            <span className="text">位置</span>
                        </li>
                        <li className="th">
                            <span className="text">抵达车次</span>
                        </li>
                        <li className="th">
                            <span className="text">树种</span>
                        </li>
                    </ul>
                    <ul className="tbody">
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <li className="tr" key={index}>
                                        <Link className="link" to={`/item`}>
                                            <div className="td">{item.time}</div>
                                            <div className="td">{item.seat}</div>
                                            <div className="td">{item.tailNumber}</div>
                                            <div className="td">{item.varieties}</div>
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
                <Link className="ui-btn ui-btn-fixed" to={`/add`}>上传境外码单</Link>
            </div>
        );
    }
}