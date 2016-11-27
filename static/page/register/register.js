/**
 * Created by wangxiaobo on 16/9/26.
 */
require('./register.scss');
const util = require('../../js/app/util.js');
import '../../js/app/global';
const React = require('react');
const render = require('react-dom').render;

const { loginSms , loginRegister , loginUpdate } = require('./actions.js');//从actions里拿到方法

const { YLT } = require('../../redux/reducers');
const { Provider, connect } = require('react-redux');
const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;

let store = createStore(YLT, applyMiddleware(thunk));
let t;

class component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '获取',
            number: 60,
            value: {mobile: '', code: '' , pwd:''},
            active: false,
            after: false
        }
    }

    render() {
        let { text , active , value ,after} = this.state;
        return (
            <div className="module-register">
                <img className="background" src="../../static/images/background.jpg"/>
                <p className="index-title">满洲里铁路国际联运服务平台</p>
                {/*<div className="portrait">
                    <div className="portrait-div">
                        <img src="../../static/images/logo.png"/>
                    </div>
                </div>*/}
                <div className="verify">
                    <div className="verify-mobile">
                        <img src="../../static/images/mobile.png"/>
                        <input type="tel" placeholder="请输入手机号" onChange={(e) => this.onchange(e,'mobile')} value={value.mobile}
                               maxLength="11"/>
                        <span onClick={active?(after?(e) => this.getSms():''):''}
                              className={active?(after?'active':'after'):''}>{text}</span>
                    </div>
                    <div className="password verify-password">
                        <img src="../../static/images/password.png"/>
                        <input type="password" placeholder="请设置密码" onChange={(e) => this.onchange(e,'password')} value={value.pwd}/>
                    </div>
                    <div className="verify-sms">
                        <img src="../../static/images/sms.png"/>
                        <input type="text" placeholder="请输入短信验证码" maxLength="6" onChange={(e) => this.onchange(e,'code')} value={value.code}/>
                    </div>
                    <a href="javascript:;" className="verify-submit" onClick={(e) => this.registerClick()}>确定</a>
                </div>
            </div>
        );
    }
    smsGet(number){
        let { dispatch } = this.props;
        if(number === 60){
            var data ={mobile:this.state.value.mobile};
            dispatch(loginSms(data));
        }
    }
    getSms() {
        t = setTimeout(function () {
            _this.getSms();
        }, 1000);
        let { text,number } = this.state;
        this.smsGet(number);
        let _this = this;
        if (number === 0) {
            clearTimeout(t);
            this.setState({
                text: '重新获取',
                after: true,
                number: 60
            })
        } else {
            number--;
            text = number + 's';
            this.setState({
                text: text,
                number: number,
                after: false
            })
        }
    }
    onchange(e,name) {
        let {value} = this.state;
        let val = e.target.value;
        switch (name){
            case 'mobile':
                value.mobile = val;
                this.setState({
                    value: value
                });
                this.mobile(val);
                break;
            case 'password':
                value.pwd = val;
                this.setState({
                    value: value
                });
                break;
            case 'code':
                value.code = val;
                this.setState({
                    value: value
                });
                break;
        }
    }

    mobile(val) {
        let {active,after}=this.state;
        if (/^(13|15|18)\d{9}$/.test(val)) {
            active = true;
            after = true
        } else {
            active = false;
        }
        this.setState({
            active: active,
            after: after
        });
    }
    isWeiXin() {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        } else {
            return false;
        }
    }
    registerClick(){
        let { value } = this.state;
        let { dispatch } = this.props;
        if(value.mobile!==""&&value.pwd!==""&&value.code!==""){
            if(this.isWeiXin()){
                loginUpdate(value).then(rep =>{
                    if(rep.reason==="success"){
                        window.toast('补录成功!');
                        window.setTimeout(function () {
                            window.location.href = './index.html';
                        }, 100);
                    }else {
                        window.toast('验证码有误!')
                    }
                })
            }else {
                dispatch(loginRegister(value));
            }
        }else{
            window.toast('账号密码验证码不能为空!');
        }
    }
}
function select(state) {
    return {
        register: state.register
    }
}
let Register = connect(select)(component);

render(
    <Provider store={store}>
        <Register />
    </Provider>,
    document.getElementById("register")
);