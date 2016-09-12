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
            <div class="module-login">
                <div class="portrait">
                    <img src=""/>
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