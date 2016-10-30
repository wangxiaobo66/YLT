/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/6
 */

import './style.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {bindActionCreators} from 'redux';
// import { ReduxThunk } from 'redux-thunk';
const thunk = require('redux-thunk').default;
import {YLT} from '../../redux/reducers';

import '../../js/app/global';

// 引入子页面
import List from './list/main';
import Add from './add/main';
import Detail from './detail/main';

let store = createStore(YLT, applyMiddleware(thunk));

class Service extends React.Component {

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
})(Service);

ReactDom.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={List} />
                <Route path="list" component={List} />
                <Route path="detail" component={Detail} />
                <Route path="add" component={Add} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);

