/**
 * Created by wangxiaobo on 16/9/21.
 */
require('./ask-buy.scss');
const util = require('../../js/app/util.js');
import '../../js/app/global';
const React = require('react');
const render = require('react-dom').render;
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';

const { YLT } = require('../../redux/reducers');
const { Provider, connect } = require('react-redux');
const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;

// 引入子页面
import List from './list/main';
import Add from './add/main';
import Detail from './detail/main';

let store = createStore(YLT, applyMiddleware(thunk));

class component extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="module-ask-buy">
                {this.props.children}
            </div>
        )
    }
    componentDidMount() {

    }
}
function select(state) {
    return {
        askBuy: state.askBuy
    }
}
let Ask = connect(select)(component);

let ListComp = connect(select)(List);
let DetailComp = connect(select)(Detail);
let AddComp = connect(select)(Add);

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Ask}>
                <IndexRoute component={ListComp} />
                <Route path="/detail/:id" component={DetailComp} />
                <Route path="/add" component={AddComp} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById("ask-buy")
);