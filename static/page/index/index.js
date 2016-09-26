/**
 * Created by wangxiaobo on 16/9/4.
 */
require('./index.scss');
const util = require('../../js/app/util.js');
const React = require('react');
const render = require('react-dom').render;

const { Market } = require('../../component/Market/Market.js');
const { AskBuy } = require('../../component/AskBuy/AskBuy.js');
const { Arrival } = require('../../component/Arrival/Arrival.js');
const { Subscribe } = require('../../component/Subscribe/Subscribe.js');

const { YLT } = require('../../redux/reducers');
const { Provider, connect } = require('react-redux');
const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;

let store = createStore(YLT, applyMiddleware(thunk));


let { change } = require('./actions');
class component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homeActive:true,
            publishActive:false,
            mineActive:false,
            matte:false
        }
    }

    render() {
        //console.log(this.props);
        let { index } = this.props;
        let { homeActive , publishActive , mineActive , matte } = this.state;
        return (
            <div className="modal-index clearfix">
                <div className="index-search">
                    <img src="../../static/page/index/img/background.jpg" className="background"/>
                    <img src="../../static/page/index/img/logo.png" className="logo"/>
                    <div className="search">
                        <img src="../../static/page/index/img/icon.png" className="icon"/>
                        <input type="text" className="input" placeholder="找木材/找货物/找货主"/>
                        <a href="javascript:;" className="submit">搜索</a>
                    </div>
                    <p className="index-search-p">搜索人数:8923人</p>
                </div>
                <div className="switch">
                    <div className="swiper-container switch-main">
                        <div className="swiper-pagination"></div>
                        <a href="javascript:;" className="switch-active"></a>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <Market />
                                <div className="switch-all"><img src="../../static/page/index/img/right-icon.png"/><a
                                    href="/template/market/market.html">查看全部未售市场</a></div>
                                <div className="switch-issue"><img src="../../static/page/index/img/issue.png"/><a
                                    href="javascript:;">发布未售信息</a></div>
                            </div>
                            <div className="swiper-slide">
                                <AskBuy />
                                <div className="switch-all"><img src="../../static/page/index/img/right-icon.png"/><a
                                    href="/template/ask-buy/ask-buy.html">查看全部求购信息</a></div>
                                <div className="switch-issue"><img src="../../static/page/index/img/issue.png"/><a
                                    href="javascript:;">发布求购信息</a></div>
                            </div>
                            <div className="swiper-slide">
                                <Arrival place={'list'}/>
                                <div className="switch-all"><img src="../../static/page/index/img/right-icon.png"/><a
                                    href="javascript:;">查看全部到货信息</a></div>
                                <Arrival place={'train'}/>
                                <div className="switch-all"><img src="../../static/page/index/img/right-icon.png"/><a
                                    href="javascript:;">其它货场位置查询</a></div>
                                <Arrival place={'seat'}/>
                            </div>
                            <div className="swiper-slide">
                                <div className="service">
                                    <p>
                                        <a href="javascript:;"><img src="../../static/page/index/img/service-1.png"/>木材资讯</a>
                                        <a href="javascript:;"><img src="../../static/page/index/img/service-2.png"/>铁路运费</a>
                                        <a href="javascript:;"><img src="../../static/page/index/img/service-3.png"/>新增订阅</a>
                                    </p>
                                    <p>
                                        <a href="javascript:;"><img src="../../static/page/index/img/service-4.png"/>求车服务</a>
                                        <a href="javascript:;"><img src="../../static/page/index/img/service-5.png"/>场地出租</a>
                                        <a href="javascript:;"><img src="../../static/page/index/img/service-6.png"/>设备租售</a>
                                        <a href="javascript:;"><img src="../../static/page/index/img/service-7.png"/>招聘服务</a>
                                        <a href="javascript:;"><img src="../../static/page/index/img/service-8.png"/>求职服务</a>
                                        <a href="javascript:;"><img src="../../static/page/index/img/service-9.png"/>其它服务</a>
                                    </p>
                                </div>
                                <div className="switch-issue"><img src="../../static/page/index/img/issue.png"/><a
                                    href="javascript:;">发布服务</a></div>
                                <div className="subscribe-div"><span></span>我的订阅</div>
                                <Subscribe />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="index-contact">
                    <p>客户电话:<a href="tel:18610687468">18610687468</a></p>
                    <a href="javascript:;" className="feedback">用户反馈</a>
                    <p>Copynight@ 2004-2016 伊利托ylt.com 版权所有</p>
                </div>

                <div className="index-bottom">
                    <p className={homeActive?'active':''} onClick={(e) => this.onclick(e,"homeActive")}>
                        <img src="../../static/page/index/img/home.png"/>
                        <span>官网首页</span>
                    </p>
                    <p className={publishActive?'active':''} onClick={(e) => this.onclick(e,"publishActive")}>
                        <img src="../../static/page/index/img/publish.png"/>
                        <span>发布信息</span>
                    </p>
                    <p className={mineActive?'active':''} onClick={(e) => this.onclick(e,"mineActive")}>
                        <img src="../../static/page/index/img/mine.png"/>
                        <span>个人中心</span>
                    </p>
                </div>
                <div className={"index-matte" + (matte?" matte-type":"")}>
                    <div className="matte"></div>
                    <div className="information">
                        <div className="choose clearfix">
                            <a href="javascript:;">
                                <img src="../../static/page/index/img/1.png"/>
                                境外码单上传
                            </a>
                            <a href="javascript:;">
                                <img src="../../static/page/index/img/2.png"/>
                                发布未售信息
                            </a>
                            <a href="javascript:;">
                                <img src="../../static/page/index/img/3.png"/>
                                我要开店
                            </a>
                            <a href="javascript:;">
                                <img src="../../static/page/index/img/4.png"/>
                                发布求购信息
                            </a>
                            <a href="javascript:;">
                                <img src="../../static/page/index/img/5.png"/>
                                发布服务
                            </a>
                        </div>
                        <a href="javascript:;" className="wrong" onClick = {(e) => this.wrong()}><img src="../../static/page/index/img/wrong.png"/></a>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        let name = [{name: '未售市场'}, {name: '木材求购'}, {name: '满洲里到货'}, {name: '更多功能'}];
        let swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            paginationBulletRender: function (index, className) {
                return '<span class="' + className + '">' + name[index].name + '</span>';
            },
            onSlidePrevStart: function (swiper) {
                $('.switch-active').css('margin-left', 2 + swiper.activeIndex * 24 + '%');
            },
            onSlideNextStart: function (swiper) {
                $('.switch-active').css('margin-left', 2 + swiper.activeIndex * 24 + '%');
            }
        })
    }

    wrong(){
        this.setState({
            homeActive:false,
            publishActive:true,
            mineActive:false,
            matte:false
        })
    }

    onclick(e,name){
        switch (name){
            case "homeActive":
                this.setState({
                    homeActive:true,
                    publishActive:false,
                    mineActive:false,
                    matte:false
                });
                break;
            case "publishActive":
                let { publishActive , matte } = this.state;
                if(publishActive&&matte){
                    this.setState({
                        homeActive:false,
                        publishActive:true,
                        mineActive:false,
                        matte:false
                    });
                }else {
                    this.setState({
                        homeActive:false,
                        publishActive:true,
                        mineActive:false,
                        matte:true
                    });
                }
                break;
            case "mineActive":
                this.setState({
                    homeActive:false,
                    publishActive:false,
                    mineActive:true,
                    matte:false
                });
                break;
        }
        let { publishActive } = this.state;
    }
}
function select(state) {
    return {
        index: state.index
    }
}
let Index = connect(select)(component);

render(
    <Provider store={store}>
        <Index />
    </Provider>,
    document.getElementById("index")
);