/**
 * Created by wangxiaobo on 16/9/23.
 */
require('./market.scss');
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
import Standard from './standard/main'

let store = createStore(YLT, applyMiddleware(thunk));

class component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="module-market">
                {this.props.children}
            </div>
        )
    }

    componentDidMount() {

    }
}
function select(state) {
    return {}
}
let App = connect(select)(component);

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={List} />
                <Route path="detail" component={Detail} />
                <Route path="add" component={Add} />
                <Route path="standard" component={Standard} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById("market")
);