/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/7
 */

import React from 'react';
import {Link} from 'react-router';

export default class Item extends React.Component {
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
                }
            ]
        };
    }
    componentDidMount() {

    }
    render() {
        return(
            <div className="module-index">
                <form className="ui-form info-ft">
                    <div className="item">
                        <label>
                            <div className="for">货场位置</div>
                            <div className="input-box input-box--select">
                                <select className="ui-select">
                                    <option value="">全部</option>
                                    <option value="1">满洲里</option>
                                    <option value="2">缨芬河</option>
                                    <option value="2">二连浩特</option>
                                    <option value="2">其他</option>
                                </select>
                            </div>
                        </label>
                    </div>
                </form>
                <div className="ui-table fn-mt10">
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
                                        <a href="/template/arrival.html#item" className="link">
                                            <div className="td">{item.tailNumber}</div>
                                            <div className="td">{item.length}</div>
                                            <div className="td">{item.varieties}</div>
                                            <div className="td">{item.cargo}</div>
                                        </a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
                <footer className="footer">
                    <Link className="ui-btn ui-btn-fixed" to="map">货场位置</Link>
                </footer>
            </div>
        );
    }
}