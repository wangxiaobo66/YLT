/**
 * Created by wangxiaobo on 16/9/21.
 */
require('./ask-buy.scss');
const util = require('../../js/app/util.js');
const React = require('react');
const render = require('react-dom').render;

const { AskBuy } = require('../../component/AskBuy/AskBuy.js');

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
            <div className="modal-ask-buy">
                <div className="select">
                    <div className="div">
                        地区
                        <select>
                            <option>选择</option>
                            <option>满洲里</option>
                            <option>二连浩特</option>
                            <option>明斯克</option>
                        </select>
                    </div>
                    <div className="div">
                        货种
                        <select>
                            <option>选择</option>
                            <option>板材</option>
                            <option>原木</option>
                            <option>地板</option>
                        </select>
                    </div>
                    <div className="div">
                        树种
                        <select>
                            <option>选择</option>
                            <option>松树</option>
                            <option>杨树</option>
                            <option>柳树</option>
                        </select>
                    </div>
                    <div className="div">
                        长度
                        <select>
                            <option>选择</option>
                            <option>三米</option>
                            <option>四米</option>
                            <option>五米</option>
                        </select>
                    </div>
                </div>
                <AskBuy />
            </div>
        )
    }
    componentDidMount() {

    }
}
function select(state) {
    return {}
}
let Ask = connect(select)(component);

render(
    <Provider store={store}>
        <Ask />
    </Provider>,
    document.getElementById("ask-buy")
);