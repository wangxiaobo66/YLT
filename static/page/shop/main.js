/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/15
 */

import './style.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {bindActionCreators} from 'redux';
// import { ReduxThunk } from 'redux-thunk';
const thunk = require('redux-thunk').default;
import {YLT} from '../../redux/reducers';

// 引入子页面
import Add from './add/main';
import Detail from './detail/main';
import Home from './home/main';
import List from './list/main';

let store = createStore(YLT, applyMiddleware(thunk));

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <article className="main">
                <div className="module-app">
                    {this.props.children}
                </div>
            </article>
        );
    }
}

let App = connect(function (state) {
    return {

    };
})(Shop);

ReactDom.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={List} />
                <Route path="add" component={Add} />
                <Route path="detail" component={Detail} />
                <Route path="home" component={Home} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
