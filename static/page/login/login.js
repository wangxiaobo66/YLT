/**
 * Created by wangxiaobo on 16/9/12.
 */
require('./login.scss');
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
                    <img src=""/>
                    login
                </div>
                <input type="tell"/>
            </div>
        );
    }
}
function select(state) {
    console.log(state)
    return {

    }
}
let Login = connect(select)(component);

render(
    <Provider store={store}>
        <Login />
    </Provider>,
    document.getElementById("login")
);