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
// import { ReduxThunk } from 'redux-thunk';
const thunk = require('redux-thunk').default;
import {YLT} from '../../redux/reducers';

// 引入子页面
import AddUpdate from './addUpdate/main';
import Detail from './detail/main';
import ListSeat from './list/Seat';
import ListTrain from './list/train';
import Report from './report/main';

let store = createStore(YLT, applyMiddleware(thunk));

const TAB_SEAT = 1;
const TAB_TRAIN = 2;

class Arrival extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: ''
        };
    }
    tab(event) {

    }

    render() {
        return (
            <article className="main">
                <div className="module-app">
                    <div className="module-tabs">
                        <ul className="tabs">
                            <li className="item">
                                <Link className="item-link item-link--active"
                                      onClick={this.tab.bind(this, '')}
                                      to={`/seat`}>位置显示</Link>
                            </li>
                            <li className="item">
                                <Link className="item-link" to={`/train`}>车次(列)显示</Link>
                            </li>
                            <li className="item">
                                <label className="for">口岸:</label>
                                <select className="select">
                                    <option value="">全部</option>
                                    <option value="1">满洲里</option>
                                    <option value="2">缨芬河</option>
                                    <option value="2">二连浩特</option>
                                    <option value="2">其他</option>
                                </select>
                            </li>
                        </ul>
                    </div>
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
                <Route path="detail" component={Detail} />
                <Route path="seat" component={ListSeat} />
                <Route path="train" component={ListTrain} />
                <Route path="report" component={Report} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);