/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/4
 */

import React from 'react';
import {Link} from 'react-router';
import Nav from '../../../component/Nav/Nav';
import Header from '../_common/Header/Header';
import imgLogo from '../../../images/logo.png';

import img1 from './img/1.png';
import img2 from './img/2.png';
import img3 from './img/3.png';
import img4 from './img/4.png';
import img5 from './img/5.png';
import imgWrong from './img/wrong.png';
import imgHome from './img/home.png';
import imgPublish from './img/publish.png';
import imgMine from './img/mine.png';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homeActive: false,
            publishActive: false,
            mineActive: true
        };
    }
    componentDidMount() {

    }
    render() {
        let { homeActive , publishActive , mineActive , matte } = this.state;
        return (
            <div className="module-index">
                <Header text="昵称/手机号" src={imgLogo} href="/info" />
                <div className="content">
                    <div className="content-grid">
                        <ul className="list clearfix">
                            <li className="item">
                                <Link className="item-link" to={`/msg_list`}>
                                    <span className="text">我的消息<em className="ui-num">2</em></span>
                                </Link>
                            </li>
                            <li className="item">
                                <a href="./shop.html#home" className="item-link">
                                    <span className="text">我的店铺</span>
                                </a>
                            </li>
                            <li className="item">
                                <Link className="item-link" to={`/askbuy`}>
                                    <span className="text">我的木材求购</span>
                                </Link>
                            </li>
                            <li className="item">
                                <Link className="item-link" to={`/market`}>
                                    <span className="text">我的未售市场</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="content-row">
                        <ul className="list">
                            <li className="item">
                                <Link className="item-link" to={`/service`}>
                                    <div className="allow">
                                        <i className="icon icon-o-right"></i>
                                    </div>
                                    <div className="info">
                                        <i className="icon icon-user-center"></i>
                                        <span className="text">我的服务</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="item">
                                <Link className="item-link" to={`/care`}>
                                    <div className="allow">
                                        <i className="icon icon-o-right"></i>
                                    </div>
                                    <div className="info">
                                        <i className="icon icon-o-love"></i>
                                        <span className="text">我的关注</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="item">
                                <Link className="item-link" to={`/setting`}>
                                    <div className="allow">
                                        <i className="icon icon-o-right"></i>
                                    </div>
                                    <div className="info">
                                        <i className="icon icon-setting"></i>
                                        <span className="text">设置</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="index-bottom">
                    <p className={homeActive?'active':''} onClick={(e) => this.onclick(e,"homeActive")}>
                        <img src={imgHome} />
                        <span>官网首页</span>
                    </p>
                    <p className={publishActive?'active':''} onClick={(e) => this.onclick(e,"publishActive")}>
                        <img src={imgPublish} />
                        <span>发布信息</span>
                    </p>
                    <p className={mineActive?'active':''} onClick={(e) => this.onclick(e,"mineActive")}>
                        <img src={imgMine} />
                        <span>个人中心</span>
                    </p>
                </div>

                <div className={"index-matte" + (matte?" matte-type":"")}>
                    <div className="matte"></div>
                    <div className="information">
                        <div className="choose clearfix">
                            <a href="javascript:;">
                                <img src={img1}/>
                                境外码单上传
                            </a>
                            <a href="javascript:;">
                                <img src={img2} />
                                发布未售信息
                            </a>
                            <a href="javascript:;">
                                <img src={img3} />
                                我要开店
                            </a>
                            <a href="javascript:;">
                                <img src={img4} />
                                发布求购信息
                            </a>
                            <a href="javascript:;">
                                <img src={img5} />
                                发布服务
                            </a>
                        </div>
                        <a href="javascript:;" className="wrong" onClick={(e) => this.wrong()}><img
                            src={imgWrong} /></a>
                    </div>
                </div>
            </div>
        );
    }

    onclick(e, name) {
        switch (name) {
            case "homeActive":
                this.setState({
                    homeActive: true,
                    publishActive: false,
                    mineActive: false,
                    matte: false
                });
                window.location.href = "./index.html";
                break;
            case "publishActive":
                let { publishActive , matte } = this.state;
                if (publishActive && matte) {
                    this.setState({
                        homeActive: false,
                        publishActive: true,
                        mineActive: false,
                        matte: false
                    });
                } else {
                    this.setState({
                        homeActive: false,
                        publishActive: true,
                        mineActive: false,
                        matte: true
                    });
                }
                break;
            case "mineActive":
                this.setState({
                    homeActive: false,
                    publishActive: false,
                    mineActive: true,
                    matte: false
                });
                break;
        }
        let { publishActive } = this.state;
    }
    wrong() {
        this.setState({
            homeActive: false,
            publishActive: true,
            mineActive: false,
            matte: false
        })
    }
}