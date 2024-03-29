/**
 * Created by wangxiaobo on 16/9/4.
 */
require('./index.scss');
const util = require('../../js/app/util.js');
import '../../js/app/global';
const React = require('react');
const render = require('react-dom').render;
import {Link} from 'react-router';

import Header from '../../component/Header/Header';
import Market from '../../component/Market/Market';
const { AskBuy } = require('../../component/AskBuy/AskBuy.js');
const { Arrival } = require('../../component/Arrival/Arrival.js');
const { Subscribe } = require('../../component/Subscribe/Subscribe.js');

const { YLT } = require('../../redux/reducers');
const { Provider, connect } = require('react-redux');
const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;

import {LOGIN_USER_KEY} from '../../js/app/contants';//用户key

import marketService from '../market/service';//未售
import buyingService from '../ask-buy/actions';//求购
import arrivalService from '../arrival/service';//到货
import userKey from './actions';//判断是否有userid

import img1 from './img/1.png';
import img2 from './img/2.png';
import img3 from './img/3.png';
import img4 from './img/4.png';
import img5 from './img/5.png';
import imgHome from './img/home.png';
import imgIcon from './img/icon.png';
import imgIssue from './img/issue.png';
import imgLogo from './img/logoName.png';
import imgMine from './img/mine.png';
import imgPublish from './img/publish.png';
import imgRightIcon from './img/right-icon.png';
import imgWrong from './img/wrong.png';
import imgBackground from './img/background.jpg';

let store = createStore(YLT, applyMiddleware(thunk));

let historyList = [];

Array.prototype.unique = function(){//数组去重并输出新数组
    var res = [];
    var json = {};
    for(var i = 0; i < this.length; i++){
        if(!json[this[i]]){
            res.push(this[i]);
            json[this[i]] = 1;
        }
    }
    return res;
};

/*
let dataAskBuys = [
    {
        "region": "满洲里",
        "time": "08-03 22:06",
        "name": "落叶松",
        "size": "六米",
        "type": "原木",
        "diam": "20",
        "level": "一级"
    },
    {
        "region": "满洲里",
        "time": "08-03 22:06",
        "name": "落叶松",
        "size": "六米",
        "type": "原木",
        "diam": "20",
        "level": "一级"
    }
];
*/
let seats = [
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
];

let arrvalDefaults = [
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
];

let { askBuyList } = require('./actions');//从actions里取出方法
class component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homeActive: true,
            publishActive: false,
            mineActive: false,
            matte: false,
            search: false,
            searchValue:'',
            dataMarkets: null,
            dataAskBuys: null,
            dataArrival:null
        }
    }

    render() {
        let { homeActive , publishActive , mineActive , matte , search , searchValue } = this.state;
        return (
            <div className={"modal-index clearfix" + (search?" search":"")}
                 onKeyDown={(e) => util.events.emit('bodyKeyDown', e)}>
                <div className="index-search">
                    <img src={imgBackground} className="background"/>
                    <p className="index-title">满洲里铁路国际联运服务平台</p>
                    {/*<img src={imgLogo} className="logo"/>*/}
                    <div className="search">
                        <img src={imgIcon} className="icon"/>
                        <form action="javascript:;" target="search" name="search">
                            <input type="text" className="input" placeholder="找木材/找货物/找货主" name="word" value={searchValue}
                                   onClick={(e) => this.searchClick(e)}
                                   onChange={(e) => this.searchChange(e)}/>
                            <a href="javascript:;" className="cancel" onClick={(e) => this.cancel(e)}>取消</a>
                        </form>

                    </div>
                    <div className="searchHistory">
                        <ul>
                            {this.historyDom(historyList)}
                        </ul>
                    </div>
                    {/*<p className="index-search-p">搜索人数:8923人</p>*/}
                </div>
                <div className="switch">
                    <div className="swiper-container switch-main">
                        <div className="swiper-pagination"></div>
                        <a href="javascript:;" className="switch-active"></a>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                {
                                    this.state.dataMarkets !== null ?
                                        this.state.dataMarkets.map(function (item, index) {
                                            return (
                                                <a className="item-link" key={index} href={`./market.html#/detail/${item.orderId}`}>
                                                    <Market obj={item} />
                                                </a>
                                            );
                                        })
                                        :null
                                }
                                <div className="switch-all"><img src={imgRightIcon}/><a
                                    href="./market.html">查看全部未售市场</a></div>
                                <div className="switch-issue"><img src={imgIssue} /><a
                                    href="./market.html#/add">发布未售信息</a></div>
                            </div>
                            <div className="swiper-slide">
                                {
                                    this.state.dataAskBuys !==null?
                                        this.state.dataAskBuys.map(function (item, index) {
                                            return <AskBuy obj={item} key={index} />;
                                        })
                                        :null
                                }
                                <div className="switch-all"><img src={imgRightIcon} /><a
                                    href="./ask-buy.html">查看全部求购信息</a></div>
                                <div className="switch-issue"><img src={imgIssue} /><a
                                    href="./ask-buy.html#/add">发布求购信息</a></div>
                            </div>
                            <div className="swiper-slide">
                                <div className="card-item clearfix">
                                    <article className="arrival">
                                        <div className="ui-table">
                                            <ul className="thead">
                                                <li className="th">
                                                    <span className="text">口岸</span>
                                                </li>
                                                <li className="th">
                                                    <span className="text">抵达车次</span>
                                                </li>
                                                <li className="th">
                                                    <span className="text">时间</span>
                                                </li>
                                            </ul>
                                            <ul className="tbody">
                                                {
                                                    this.state.dataArrival !==null?
                                                        this.state.dataArrival.map(function (item,index){
                                                            return(
                                                                <li className="tr" key={index}>
                                                                    <a href={"./arrival.html#item/"+item.cc} className="link">
                                                                        <div className="td">{item.portName}</div>
                                                                        <div className="td">{item.cc}</div>
                                                                        <div className="td">{moment(item.dfrq).format('YYYY-MM-DD')}</div>
                                                                    </a>
                                                                </li>
                                                            )
                                                        })
                                                        :null
                                                    /*
                                                    seats.map((item, index) => {
                                                        return (
                                                            <li className="tr" key={index}>
                                                                <a href="./arrival.html#item" className="link">
                                                                    <div className="td">{item.seat}</div>
                                                                    <div className="td">{item.tailNumber}</div>
                                                                    <div className="td">{item.varieties}</div>
                                                                </a>
                                                            </li>
                                                        );
                                                    })
                                                    */
                                                }
                                            </ul>
                                        </div>
                                    </article>

                                    <div className="switch-all">
                                        <img src={imgRightIcon} />
                                        <a href="./arrival.html">查看全部到货信息</a>
                                    </div>
                                </div>
                                {/*
                                    <div className="card-item clearfix">
                                        <div className="ui-title">
                                            <div className="text">伊利托今天进车组</div>
                                        </div>
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
                                                    arrvalDefaults.map((item, index) => {
                                                        return (
                                                            <li className="tr" key={index}>
                                                                <a href="./arrival.html#item" className="link">
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
                                    </div>


                                <div className="switch-all">
                                    <img src={imgRightIcon} />
                                    <a href="javascript:;">其它货场位置查询</a>
                                </div>*/}
                            </div>
                            <div className="swiper-slide">
                                <div className="service">
                                    <p>
                                        <a href="javascript:;"><img src="../../static/images/service-1.png"/>木材资讯</a>
                                        <a href="javascript:;"><img src="../../static/images/service-2.png"/>铁路运费</a>
                                        <a href="./shop.html"><img src="../../static/images/service-3.png"/>精品店铺</a>
                                    </p>
                                    <p>
                                        <a href="./service.html?type=car"><img src="../../static/images/service-4.png"/>求车服务</a>
                                        <a href="./service.html?type=area"><img src="../../static/images/service-5.png"/>场地出租</a>
                                        <a href="./service.html?type=device"><img src="../../static/images/service-6.png"/>设备租售</a>
                                        <a href="./service.html?type=recruit"><img src="../../static/images/service-7.png"/>招聘服务</a>
                                        <a href="./service.html?type=job"><img src="../../static/images/service-8.png"/>求职服务</a>
                                        <a href="./service.html?type=other"><img src="../../static/images/service-9.png"/>其它服务</a>
                                    </p>
                                </div>
                                <div className="switch-issue"><img src={imgIssue} /><a
                                    href="./service.html#/add">发布服务</a></div>
                                {/*<div className="subscribe-div"><span></span>我的订阅</div>
                                <Subscribe />*/}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="index-contact">
                    <p>客户电话:<a href="tel:18610687468">18610687468</a></p>
                    <a href="./mine.html#/feedback" className="feedback">用户反馈</a>
                    <p>Copynight@ 2004-2016 伊利托ylt.com 版权所有</p>
                </div>

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
        });

        util.events.on('bodyKeyDown', (e) => { //监听键盘按钮
            if(e.keyCode===13){//回车事件兼容移动端网页键盘,可放心使用
                //let { searchValue } = this.state;
                //if(searchValue!==""){//inout输入非空push进数组中,若之前数组非空,push后数组为[Array[],searchValue],需再做处理
                //    historyList.push(searchValue);
                //}
                //let history = historyList.join(",");//将数组转换为字符串,中间以","隔开
                //let historyUnique = history.split(",").unique();//再将字符串转换成数组,执行去重方法输出新数组
                //localStorage.setItem("history", historyUnique.join(","));//将新数组字符串化并存入缓存
                let { searchValue } = this.state;
                if (searchValue!=''){
                    marketService.unsoldList({
                        limitStart: 0,
                        limitCount: 20,
                        key:searchValue
                    }).then(rep => {
                        this.setState({
                            dataMarkets: rep.result.list
                        });
                    });
                    //获取求购列表
                    buyingService.buyingList({
                        limitStart: 0,
                        limitCount: 20,
                        portId: 0,
                        goodstypeId: 0,
                        treetypeId: 0,
                        lengthId: 0,
                        key:searchValue
                    }).then(rep => {
                        this.setState({
                            dataAskBuys:rep.result.list
                        })
                    });
                    /*
                    let {dispatch} = this.props;
                    let info = {"limitStart":"0","limitCount":"10","portId":"0","goodstypeId":"0","treetypeId":"0","lengthId":"0",key:searchValue};
                    dispatch(askBuyList(info));
                    */
                    //获取到货列表
                    arrivalService.arrivalList({
                        portId:0,
                        limitStart: 0,
                        limitCount: 20,
                        key:searchValue
                    }).then(rep => {
                        this.setState({
                            dataArrival:rep.result.list
                        })
                    });
                }else {
                    marketService.unsoldList({
                        limitStart: 0,
                        limitCount: 10
                    }).then(rep => {
                        this.setState({
                            dataMarkets: rep.result.list
                        });
                    });
                    //获取求购列表
                    buyingService.buyingList({
                        limitStart: 0,
                        limitCount: 5,
                        portId: 0,
                        goodstypeId: 0,
                        treetypeId: 0,
                        lengthId: 0
                    }).then(rep => {
                        this.setState({
                            dataAskBuys:rep.result.list
                        })
                    });
                    /*
                    let {dispatch} = this.props;
                    let info = {"limitStart":"0","limitCount":"10","portId":"0","goodstypeId":"0","treetypeId":"0","lengthId":"0"};
                    dispatch(askBuyList(info));
                    */
                    //获取到货列表
                    arrivalService.arrivalList({
                        portId:1,
                        limitStart: 0,
                        limitCount: 5
                    }).then(rep => {
                        this.setState({
                            dataArrival:rep.result.list
                        })
                    });
                }
            }
        });

        // 获取未售商品列表
        marketService.unsoldList({
            limitStart: 0,
            limitCount: 5
        }).then(rep => {
            this.setState({
                dataMarkets: rep.result.list
            });
        });
        //获取求购列表
        buyingService.buyingList({
            limitStart: 0,
            limitCount: 5,
            portId: 0,
            goodstypeId: 0,
            treetypeId: 0,
            lengthId: 0
        }).then(rep => {
            this.setState({
                dataAskBuys:rep.result.list
            })
        });
        //获取到货列表
        arrivalService.arrivalList({
            portId:1,
            limitStart: 0,
            limitCount: 5
        }).then(rep => {
            this.setState({
                dataArrival:rep.result.list
            })
        });
        /*
        let {dispatch} = this.props;
        let info = {"limitStart":"0","limitCount":"5","portId":"0","goodstypeId":"0","treetypeId":"0","lengthId":"0"};
        dispatch(askBuyList(info));
        */
        //判断是否登录
        let userId = window.sessionStorage.getItem(LOGIN_USER_KEY);
        if(JSON.stringify(userId)==='null'){
            userKey.user().then(rep => {
                window.sessionStorage.setItem(LOGIN_USER_KEY, rep.result.data);
            })
        }
    }
    componentWillReceiveProps(nextProps) {
        /*
        let askBuy = nextProps.index.askBuy;
        this.setState({
            dataAskBuys:askBuy
        });
        let { dataAskBuys } = this.state;
        console.log(dataAskBuys);
        */
    }

    historyDom(historyList){
        historyList.map((obj,index) => {
            return (<li>{obj}</li>)
        })
    }

    wrong() {
        this.setState({
            homeActive: false,
            publishActive: true,
            mineActive: false,
            matte: false
        })
    }

    searchChange(e){
        let val = e.target.value;
        this.setState({
            searchValue:val
        })
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

    searchClick(e) {
        this.setState({
            search: false
        });
        /*if(window.localStorage.length){//读取本地缓存
            let history = localStorage.getItem("history");
            if(history!==""){
                historyList = history.split(",");
            }
        }else {//创建本地缓存
            historyList.join(",");
            localStorage.setItem("history", historyList);
        }*/

    }

    cancel(e) {
        this.setState({
            search: false
        })
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