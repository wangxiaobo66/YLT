/**
 * Created by wangxiaobo on 16/9/26.
 */
require('./out-login.scss');
const util = require('../../js/app/util.js');
const React = require('react');
const render = require('react-dom').render;

const { YLT } = require('../../redux/reducers');
const { Provider, connect } = require('react-redux');
const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;

let store = createStore(YLT, applyMiddleware(thunk));

class component extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value: {mobile: '', password: ''}
        }
    }
    render() {
        let { value } = this.state;
        return (
            <div className="module-out-login">
                <img className="background" src="../../static/page/login/img/background.jpg"/>
                <div className="portrait">
                    <div className="portrait-div">
                        <img src="../../static/page/login/img/logo.png"/>
                    </div>
                </div>
                <div className="verify">
                    <div className="verify-mobile">
                        <img src="../../static/page/login/img/mobile.png"/>
                        <input type="tel" placeholder="请输入手机号" onChange={(e) => this.onchange(e,'mobile')} value={value.mobile}
                               maxLength="11"/>
                    </div>
                    <div className="verify-sms">
                        <img src="../../static/page/login/img/sms.png"/>
                        <input type="password" placeholder="请输入密码" onChange={(e) => this.onchange(e,'password')} value={value.password}/>
                    </div>
                    <a href="javascript:;" className="verify-submit">登录</a>
                    <a href="/template/register/register.html" className="register">注册新用户</a>
                    <a href="/template/forget/forget.html" className="forget">忘记密码</a>
                </div>
            </div>
        )
    }
    onchange(e,name){
        let { value } =this.state;
        let val = e.target.value;
        switch (name){
            case 'mobile':
                value.mobile = val;
                this.setState({
                    value: value
                });
                break;
            case 'password':
                value.password = val;
                this.setState({
                    value: value
                });
                break;
        }
    }
}
function select(state) {
    return {}
}
let OutLogin = connect(select)(component);

render(
    <Provider store={store}>
        <OutLogin />
    </Provider>,
    document.getElementById("out-login")
);