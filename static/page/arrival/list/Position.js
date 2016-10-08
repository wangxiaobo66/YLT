/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/1
 */

import React from 'react';
import {Link} from 'react-router';
import Tab from './Tab';
import {TAB_POSITION} from '../constants';

export default class ListLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    "id": 1,
                    "tailNumber":"7788",
                    "length":"3米",
                    "varieties":"樟子松",
                    "cargo":"原木"
                },
                {
                    "id": 2,
                    "tailNumber":"7788",
                    "length":"3米",
                    "varieties":"樟子松",
                    "cargo":"原木"
                },
                {
                    "id": 3,
                    "tailNumber":"7788",
                    "length":"3米",
                    "varieties":"樟子松",
                    "cargo":"原木"
                },
                {
                    "id": 4,
                    "tailNumber":"7788",
                    "length":"3米",
                    "varieties":"樟子松",
                    "cargo":"原木"
                }
            ]
        };
    }
    componentDidMount() {

    }
    render() {
        return(
            <div className="module-list-seat clearfix">
                <Tab type={TAB_POSITION} />
                <div className="ui-table">
                    <ul className="thead">
                        <li className="th">
                            <span className="text">车皮号尾号</span>
                        </li>
                        <li className="th">
                            <span className="text">长度(米)</span>
                        </li>
                        <li className="th">
                            <span className="text">树种</span>
                        </li>
                        <li className="th">
                            <span className="text">货种</span>
                        </li>
                    </ul>
                    <ul className="tbody">
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <li className="tr" key={index}>
                                        <Link className="link" to={`/item`}>
                                            <div className="td">{item.tailNumber}</div>
                                            <div className="td">{item.length}</div>
                                            <div className="td">{item.varieties}</div>
                                            <div className="td">{item.cargo}</div>
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