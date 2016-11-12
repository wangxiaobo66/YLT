/**
 * Created by wangxiaobo on 16/9/26.
 */
require('./out-login.scss');
const util = require('../../js/app/util.js');
import '../../js/app/global';
const React = require('react');
const render = require('react-dom').render;

const { userOutLogin } = require('./actions.js');//从actions里拿到方法

const { YLT } = require('../../redux/reducers');
const { Provider, connect } = require('react-redux');
const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;

let store = createStore(YLT, applyMiddleware(thunk));

class component extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value: {mobile: '', pwd: ''}
        }
    }
    render() {
        let { value } = this.state;
        return (
            <div className="module-out-login">
                <img className="background" src="../../static/images/background.jpg"/>
                <div className="portrait">
                    <div className="portrait-div">
                        <img src="../../static/images/logo.png"/>
                    </div>
                </div>
                <div className="verify">
                    <div className="verify-mobile">
                        <img src="../../static/images/mobile.png"/>
                        <input type="tel" placeholder="请输入手机号" onChange={(e) => this.onchange(e,'mobile')} value={value.mobile}
                               maxLength="11"/>
                    </div>
                    <div className="verify-password">
                        <img src="../../static/images/password.png"/>
                        <input type="password" placeholder="请输入密码" onChange={(e) => this.onchange(e,'password')} value={value.password}/>
                    </div>
                    <a href="javascript:;" className="verify-submit" onClick={(e) => this.loginClick(e)}>登录</a>
                    <a href="./register.html" className="register">注册新用户</a>
                    <a href="./forget.html" className="forget">忘记密码</a>
                </div>
            </div>
        )
    }
    componentWillReceiveProps(nextProps) {
        let reason = nextProps.outLogin.reason;
        this.setState({
            reason:reason
        })
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
                value.pwd = val;
                this.setState({
                    value: value
                });
                break;
        }
    }
    loginClick(e){
        let { value } = this.state;
        let { dispatch } = this.props;
        if(value.mobile!==""&&value.pwd!==""){
            dispatch(userOutLogin(value));
        }else{
            window.toast('账号密码不能为空!');
        }
    }
}
function select(state) {
    console.log(state);
    return {
        outLogin: state.outLogin
    }
}
let OutLogin = connect(select)(component);

render(
    <Provider store={store}>
        <OutLogin />
    </Provider>,
    document.getElementById("out-login")
);