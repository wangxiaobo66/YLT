/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/6
 */

import React from 'react';
import {Link} from 'react-router';
import {Service} from '../../../component/Service/Service';

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
        return (
            <div className="module-list">
                <header className="header">
                    <div className="list-box">
                        <ul className="list clearfix">
                            <li className="item">
                                <p className="img">
                                    <img src="../../static/images/service-0.png" width="45" height="45" alt=""/>
                                </p>
                                <p className="title">全部服务</p>
                            </li>
                            <li className="item">
                                <p className="img">
                                    <img src="../../static/images/service-4.png" width="45" height="45" alt=""/>
                                </p>
                                <p className="title">求车服务</p>
                            </li>
                            <li className="item">
                                <p className="img">
                                    <img src="../../static/images/service-5.png" width="45" height="45" alt=""/>
                                </p>
                                <p className="title">场地出租</p>
                            </li>
                            <li className="item">
                                <p className="img">
                                    <img src="../../static/images/service-6.png" width="45" height="45" alt=""/>
                                </p>
                                <p className="title">设备租售</p>
                            </li>
                            <li className="item">
                                <p className="img">
                                    <img src="../../static/images/service-7.png" width="45" height="45" alt=""/>
                                </p>
                                <p className="title">招聘服务</p>
                            </li>
                            <li className="item">
                                <p className="img">
                                    <img src="../../static/images/service-8.png" width="45" height="45" alt=""/>
                                </p>
                                <p className="title">求职服务</p>
                            </li>
                            <li className="item">
                                <p className="img">
                                    <img src="../../static/images/service-9.png" width="45" height="45" alt=""/>
                                </p>
                                <p className="title">其它服务</p>
                            </li>
                        </ul>
                    </div>
                </header>
                <article className="article">
                    <ul className="ui-list">
                        <li className="item">
                            <Link className="item-link" to="detail">
                                <Service />
                            </Link>
                        </li>
                        <li className="item">
                            <Link className="item-link" to="detail">
                                <Service />
                            </Link>
                        </li>
                    </ul>
                </article>
                <footer className="footer">
                    <a href="#add" className="ui-btn ui-btn-fixed">发布服务</a>
                </footer>
            </div>
        );
    }
}