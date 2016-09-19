/**
 * Created by wangxiaobo on 16/9/4.
 */
require('./index.scss');
const util = require('../../js/app/util.js');
const React = require('react');
const render = require('react-dom').render;

const { AskBuy } = require('../../component/ask-buy/ask-buy.js');

const { YLT } = require('../../redux/reducers');
const { Provider, connect } = require('react-redux');
const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;

let store = createStore(YLT, applyMiddleware(thunk));


let { change } = require('./actions');

class component extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        //console.log(this.props);
        let { index } = this.props;
        return (
            <div className="modal-index">
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
                                <AskBuy />
                                <div className="switch-all"><img src="../../static/page/index/img/right-icon.png"/><a href="javascript:;">查看全部未售市场</a></div>
                                <div className="switch-issue"><img src="../../static/page/index/img/issue.png"/><a href="javascript:;">发布未售信息</a></div>
                            </div>
                            <div className="swiper-slide">
                                <div className="switch-all"><img src="../../static/page/index/img/right-icon.png"/><a href="javascript:;">查看全部求购信息</a></div>
                                <div className="switch-issue"><img src="../../static/page/index/img/issue.png"/><a href="javascript:;">发布求购信息</a></div>
                            </div>
                            <div className="swiper-slide">
                                <div className="switch-all"><img src="../../static/page/index/img/right-icon.png"/><a href="javascript:;">查看全部到货信息</a></div>
                                <div className="switch-issue"><img src="../../static/page/index/img/issue.png"/><a href="javascript:;">发布到货信息</a></div>
                            </div>
                            <div className="swiper-slide">Slide 4</div>
                        </div>
                    </div>
                </div>
                <div className="index-bottom">
                    <span>
                        <img src="../../static/page/index/img/home.png"/>
                        官网首页
                    </span>
                    <span>
                        <img src="../../static/page/index/img/publish.png"/>
                        发布信息
                    </span>
                    <span>
                        <img src="../../static/page/index/img/mine.png"/>
                        个人中心
                    </span>
                </div>
            </div>
        );
    }

    componentDidMount() {
        let name = [{name:'未售市场'},{name:'木材求购'},{name:'满洲里到货'},{name:'更多功能'}];
        let swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            paginationBulletRender: function (index, className) {
                return '<span class="' + className + '">' + name[index].name + '</span>';
            },
            onSlidePrevEnd: function(swiper){
                $('.switch-active').css('margin-left',2+swiper.activeIndex*24+'%');
            },
            onSlideNextEnd: function(swiper){
                $('.switch-active').css('margin-left',2+swiper.activeIndex*24+'%');
            }
        })
    }

}
function select(state) {
    console.log(state)
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