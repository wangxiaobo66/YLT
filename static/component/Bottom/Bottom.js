/**
 * Created by wangxiaobo on 16/11/28.
 */
require('./Bottom.scss');
const React = require('react');

import img1 from './img/1.png';
import img2 from './img/2.png';
import img3 from './img/3.png';
import img4 from './img/4.png';
import img5 from './img/5.png';
import imgWrong from './img/wrong.png';

export class Bottom extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            homeActive: false,
            publishActive: false,
            mineActive: false,
            matte: false
        }
    }
    render() {
        let {homeActive,publishActive,mineActive,matte} = this.state;
        return(
            <div className="modal-bottom">
                <div className="index-bottom">
                    <p className={homeActive?'active':''} onClick={(e) => this.onclick(e,"homeActive")}>
                        <i className="icon icon-home"></i>
                        <span>官网首页</span>
                    </p>
                    <p className={publishActive?'active':''} onClick={(e) => this.onclick(e,"publishActive")}>
                        <i className="icon icon-publish"></i>
                        <span>发布信息</span>
                    </p>
                    <p className={mineActive?'active':''} onClick={(e) => this.onclick(e,"mineActive")}>
                        <i className="icon icon-user-center"></i>
                        <span>个人中心</span>
                    </p>
                </div>
                <div className={"index-matte" + (matte?" matte-type":"")}>
                    <div className="matte"></div>
                    <div className="information">
                        <div className="choose clearfix">
                            <a href="./market.html#/add">
                                <img src={img2} />
                                发布未售信息
                            </a>
                            <a href="./shop.html#/add">
                                <img src={img3} />
                                我要开店
                            </a>
                            <a href="./ask-buy.html#/add">
                                <img src={img4} />
                                发布求购信息
                            </a>
                            <a href="./service.html#/add">
                                <img src={img5} />
                                发布服务
                            </a>
                            <a href="./subscribe.html">
                                <img src={img1}/>
                                添加订阅
                            </a>
                        </div>
                        <a href="javascript:;" className="wrong" onClick={(e) => this.wrong()}><img
                            src={imgWrong} /></a>
                    </div>
                </div>
            </div>
        )
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
                window.location.href = "./mine.html";
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