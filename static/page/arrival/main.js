/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/24
 */

import './style.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {bindActionCreators} from 'redux';
import '../../js/app/global';
//import { ReduxThunk } from 'redux-thunk';
const thunk = require('redux-thunk').default;
import {YLT} from '../../redux/reducers';

//引入子页面
import AddUpdate from './addUpdate/main';
import ListSeat from './list/Seat';
import ListTrain from './list/Train';
import ListPosition from './list/Position';
import Item from './item/main';
import Detail from './detail/main';
import Report from './report/main';

let store = createStore(YLT, applyMiddleware(thunk));

class Arrival extends React.Component {

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
})(Arrival);

ReactDom.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={ListSeat} />
                <Route path="add" component={AddUpdate} />
                <Route path="item/:id" component={Item} />
                <Route path="detail/:id" component={Detail} />
                <Route path="seat" component={ListSeat} />
                <Route path="train" component={ListTrain} />
                <Route path="position" component={ListPosition} />
                <Route path="report" component={Report} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);