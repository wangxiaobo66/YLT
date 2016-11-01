/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/7
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
import '../../js/app/global';
import {YLT} from '../../redux/reducers';

import Index from './index/main';
import Map from './map/main';

let store = createStore(YLT, applyMiddleware(thunk));

class Address extends React.Component {
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
})(Address);

ReactDom.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Index} />
                <Route path="map" component={Map} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);