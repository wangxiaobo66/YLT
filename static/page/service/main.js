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

function select(state) {
    return {
        service: state.service
    }
}

let App = connect(select)(Service);

let ListComp = connect(select)(List);
let DetailComp = connect(select)(Detail);
let AddComp = connect(select)(Add);

ReactDom.render(
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={ListComp} />
                    <Route path="list" component={ListComp} />
                    <Route path="detail/:id" component={DetailComp} />
                    <Route path="add" component={AddComp} />
                </Route>
            </Router>
        </Provider>,
            document.getElementById('app')
);




