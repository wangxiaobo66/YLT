/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/24
 */

import React from 'react';
import {Link} from 'react-router';
import Tab from './Tab';
import {TAB_SEAT} from '../constants';

export default class ListLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    "id": 1,
                    "seat":"满洲里",
                    "tailNumber":"7788",
                    "varieties":"樟子松"
                },
                {
                    "id": 2,
                    "seat":"呼伦贝尔",
                    "tailNumber":"7788",
                    "varieties":"樟子松"
                },
                {
                    "id": 3,
                    "seat":"后贝加尔",
                    "tailNumber":"7788",
                    "varieties":"樟子松"
                },
                {
                    "id": 4,
                    "seat":"满洲里",
                    "tailNumber":"7788",
                    "varieties":"樟子松"
                }
            ]
        };
    }
    componentDidMount() {

    }
    goToItem(id) {
        
    }
    render() {
        return(
            <div className="module-list-seat clearfix">
                <Tab type={TAB_SEAT} />
                <div className="ui-table">
                    <ul className="thead">
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