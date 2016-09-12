/**
 * Created by wangxiaobo on 16/9/12.
 */
require('./login.scss');
require('../../scss/base.scss');
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
                        <img src="../../images/mobile.png"/>
                        <input type="tel"/>
                        <span>获取</span>
                    </div>
                    <div className="verify-sms">
                        <img src="../../images/sms.png"/>
                        <input type="text"/>
                    </div>
                </div>
            </div>
        );
    }
}
function select(state) {
    console.log(state)
    return {}
}
let Login = connect(select)(component);

render(
    <Provider store={store}>
        <Login />
    </Provider>,
    document.getElementById("login")
);