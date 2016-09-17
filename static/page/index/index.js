/**
 * Created by wangxiaobo on 16/9/4.
 */
require('./index.scss');
const util = require('../../js/app/util.js');
const React = require('react');
const render = require('react-dom').render;

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
                            <div className="swiper-slide">Slide 100</div>
                            <div className="swiper-slide">Slide 2</div>
                            <div className="swiper-slide">Slide 3</div>
                            <div className="swiper-slide">Slide 4</div>
                        </div>
                    </div>
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