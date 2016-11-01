/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/6
 */
const util = require('../../../js/app/util.js');

import React from 'react';
import {Link} from 'react-router';
import {Service} from '../../../component/Service/Service';

const { serviceData } = require('./../actions.js');//从actions里拿到方法

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            serveList: {
                all: false,
                car: false,
                area: false,
                device: false,
                recruit: false,
                job: false,
                other: false
            }

        };
    }

    render() {
        let {service} = this.props;
        let { serveList } = this.state;
        return (
            <div className="module-list">
                <header className="header">
                    <div className="list-box">
                        <ul className="list clearfix">
                            <li className="item" onClick={(e) => this.onclick(e,'0')}>
                                <p className="img">
                                    <img src="../../static/images/service-0.png" width="45" height="45" alt=""/>
                                </p>
                                <p className={"title" + (serveList.all?' green':'')}>全部服务</p>
                            </li>
                            <li className="item" onClick={(e) => this.onclick(e,'1')}>
                                <p className="img">
                                    <img src="../../static/images/service-4.png" width="45" height="45" alt=""/>
                                </p>
                                <p className={"title" + (serveList.car?' green':'')}>求车服务</p>
                            </li>
                            <li className="item" onClick={(e) => this.onclick(e,'2')}>
                                <p className="img">
                                    <img src="../../static/images/service-5.png" width="45" height="45" alt=""/>
                                </p>
                                <p className={"title" + (serveList.area?' green':'')}>场地出租</p>
                            </li>
                            <li className="item" onClick={(e) => this.onclick(e,'3')}>
                                <p className="img">
                                    <img src="../../static/images/service-6.png" width="45" height="45" alt=""/>
                                </p>
                                <p className={"title" + (serveList.device?' green':'')}>设备租售</p>
                            </li>
                            <li className="item" onClick={(e) => this.onclick(e,'4')}>
                                <p className="img">
                                    <img src="../../static/images/service-7.png" width="45" height="45" alt=""/>
                                </p>
                                <p className={"title" + (serveList.recruit?' green':'')}>招聘服务</p>
                            </li>
                            <li className="item" onClick={(e) => this.onclick(e,'5')}>
                                <p className="img">
                                    <img src="../../static/images/service-8.png" width="45" height="45" alt=""/>
                                </p>
                                <p className={"title" + (serveList.job?' green':'')}>求职服务</p>
                            </li>
                            <li className="item" onClick={(e) => this.onclick(e,'6')}>
                                <p className="img">
                                    <img src="../../static/images/service-9.png" width="45" height="45" alt=""/>
                                </p>
                                <p className={"title" + (serveList.other?' green':'')}>其它服务</p>
                            </li>
                        </ul>
                    </div>
                </header>
                <article className="article">
                    <ul className="ui-list">
                        {
                            service.data !== "" ?
                                service.data.list.map(function (obj, index) {
                                    return <li className="item">
                                                <Link className="item-link" to="detail">
                                                    <Service obj={obj} key={index} />
                                                </Link>
                                            </li>
                                })
                                :
                                null
                        }
                    </ul>
                </article>
                <footer className="footer">
                    <a href="#add" className="ui-btn ui-btn-fixed">发布服务</a>
                </footer>
            </div>
        );
    }

    componentDidMount() {
        let { serveList } = this.state;
        let type = util.getQueryString("type");
        serveList[type] = true;
        this.setState({
            serveList: serveList
        });
        this.dataList(type);
    }

    dataList(type){
        let { dispatch} = this.props;
        let data = {"limitStart": "0", "limitCount": "10", "type": this.dataType(type)};
        dispatch(serviceData(data));
    }

    onclick(e, nmb) {
        let type;
        switch (nmb) {
            case '0':
                this.setState({
                    serveList: {
                        all: true,
                        car: false,
                        area: false,
                        device: false,
                        recruit: false,
                        job: false,
                        other: false
                    }

                });
                type = 'all';
                break;
            case '1':
                this.setState({
                    serveList: {
                        all: false,
                        car: true,
                        area: false,
                        device: false,
                        recruit: false,
                        job: false,
                        other: false
                    }
                });
                type = 'car';
                break;
            case '2':
                this.setState({
                    serveList: {
                        all: false,
                        car: false,
                        area: true,
                        device: false,
                        recruit: false,
                        job: false,
                        other: false
                    }
                });
                type = 'area';
                break;
            case '3':
                this.setState({
                    serveList: {
                        all: false,
                        car: false,
                        area: false,
                        device: true,
                        recruit: false,
                        job: false,
                        other: false
                    }
                });
                type = 'device';
                break;
            case '4':
                this.setState({
                    serveList: {
                        all: false,
                        car: false,
                        area: false,
                        device: false,
                        recruit: true,
                        job: false,
                        other: false
                    }
                });
                type = 'recruit';
                break;
            case '5':
                this.setState({
                    serveList: {
                        all: false,
                        car: false,
                        area: false,
                        device: false,
                        recruit: false,
                        job: true,
                        other: false
                    }
                });
                type = 'job';
                break;
            case '6':
                this.setState({
                    serveList: {
                        all: false,
                        car: false,
                        area: false,
                        device: false,
                        recruit: false,
                        job: false,
                        other: true
                    }
                });
                type = 'other';
                break;
        }
        this.dataList(type);
    }

    dataType(name) {
        let dataType;
        switch (name) {
            case 'all':
                dataType = '0';
                break;
            case 'car':
                dataType = '1';
                break;
            case 'area':
                dataType = '2';
                break;
            case 'device':
                dataType = '3';
                break;
            case 'recruit':
                dataType = '4';
                break;
            case 'job':
                dataType = '5';
                break;
            case 'other':
                dataType = '6';
                break;
        }
        return dataType;
    }


}