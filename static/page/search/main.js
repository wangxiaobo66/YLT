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
import '../../js/app/global';
// import { ReduxThunk } from 'redux-thunk';
const thunk = require('redux-thunk').default;
import {YLT} from '../../redux/reducers';

// 引入子页面
import Index from './index/main';
import Result from './result/main';

let store = createStore(YLT, applyMiddleware(thunk));

class Subscribe extends React.Component {
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
})(Subscribe);

ReactDom.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Index} />
                <Route path="result" component={Result} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
