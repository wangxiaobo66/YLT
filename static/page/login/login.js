/**
 * Created by wangxiaobo on 16/9/12.
 */
require('./login.scss');
require('../../scss/base.scss');
const React = require('react');
const render = require('react-dom').render;

const img_mobile = require('../../images/mobile.png');
import img_sms from './img/sms.png';

const { YLT } = require('../../redux/reducers');
const { Provider, connect } = require('react-redux');
const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;

let store = createStore(YLT, applyMiddleware(thunk));

class component extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="module-login">
                <div className="portrait">
                    <div className="portrait-div">
                        <img src=""/>
                    </div>
                    <p className="portrait-p">Joker</p>
                </div>
                <div className="verify">
                    <div className="verify-mobile">
                        {/* 方式一: 使用js引入 */}
                        <img src={img_mobile}/>
                        <input type="tel"/>
                        <span>获取</span>
                    </div>
                    <div className="verify-sms">
                        {/* 相对于login.html这个页面进行相对路径搜索对应图片 */}
                        <img src="../../static/images/sms.png"/>
                        {/* 模块化img */}
                        <img src={img_sms} alt=""/>
                        <input type="text"/>
                    </div>
                </div>
            </div>
        );
    }
}
function select(state) {
    console.log(state);
    return {}
}
let Login = connect(select)(component);

render(
    <Provider store={store}>
        <Login />
    </Provider>,
    document.getElementById("login")
);