/**
 * Created by wangxiaobo on 16/9/26.
 */
/**
 * Created by wangxiaobo on 16/9/12.
 */
require('./forget.scss');
const util = require('../../js/app/util.js');
const React = require('react');
const render = require('react-dom').render;
import '../../js/app/global';

const { postSms , update , loginUpdate } = require('./actions.js');//从actions中拿到方法

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
            value: {mobile: '', code: '', pwd:''},
            active: false,
            after: false,
            newPwd:''
        }
    }

    render() {
        let { text , active , value ,after,newPwd} = this.state;
        return (
            <div className="module-forget">
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
                        <input type="tel" placeholder="请输入手机号"
                               onChange={(e) => this.onchange(e,'mobile')}
                               value={value.mobile}
                               maxLength="11"/>
                        <span onClick={active?(after?(e) => this.getSms():''):''}
                              className={active?(after?'active':'after'):''}>{text}</span>
                    </div>

                    <div className="new-password verify-password">
                        <img src="../../static/images/password.png"/>
                        <input type="password" placeholder="请输入新密码"
                               onChange={(e) => this.onchange(e,'pwd')}
                               value={value.pwd}/>
                    </div>
                    <div className="new-password-again verify-password">
                        <img src="../../static/images/password.png"/>
                        <input type="password" placeholder="请再次输入新密码"
                               onChange={(e) => this.onchange(e,'newPwd')}
                               value={newPwd}/>
                    </div>
                    <div className="verify-sms">
                        <img src="../../static/images/sms.png"/>
                        <input type="text" placeholder="请输入短信验证码"
                               onChange={(e) => this.onchange(e,'code')}
                               value={value.code}/>
                    </div>
                    <a href="javascript:;" className="verify-submit" onClick = {(e) => this.onclick()}>确定</a>
                </div>
            </div>
        );
    }
    componentDidMount() {

    }

    smsGet(number){
        if(number === 60){
            var data ={mobile:this.state.value.mobile};
            postSms(data).then(rep =>{
                console.log(rep)
            })
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
        let {value,newPwd} = this.state;
        let val = e.target.value;
        switch (name){
            case 'mobile':
                value.mobile = val;
                this.setState({
                    value: value
                });
                this.mobile(val);
                break;
            case 'pwd':
                value.pwd = val;
                this.setState({
                   value: value
                });
                break;
            case 'newPwd':
                this.setState({
                    newPwd:val
                });
                break;
            case 'code':
                value.code = val;
                this.setState({
                    value:value
                })
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
    onclick(){
        let {value,newPwd} = this.state;
        console.log(value,newPwd);
        if(value.pwd!==newPwd){
            window.toast('两次输入的新密码必须一致!');
        }else if(newPwd!==""&&value.mobile!==""&&value.code!==""&&value.pwd!==""&&value.pwd===newPwd){
                update(value).then(rep =>{
                    if(rep.reason==="success"){
                        window.toast('修改成功!');
                        window.setTimeout(function () {
                            window.location.href = './out-login.html';
                        }, 100);
                    }else {
                        window.toast('验证码有误!')
                    }
                })
        }else{
            window.toast('请输入手机号密码验证码!');
        }
    }
}
function select(state) {
    return {}
}
let Forget = connect(select)(component);

render(
    <Provider store={store}>
        <Forget />
    </Provider>,
    document.getElementById("forget")
);