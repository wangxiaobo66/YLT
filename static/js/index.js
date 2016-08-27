/**
 * @file
 * @author jinguangguo
 * @date 2016/5/25
 */

import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory} from 'react-router';

import './common/global';

import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';

import Home from '../widget/Home/main';

const App = React.createClass({

    // 初始化
    getInitialState() {
        return {
            showButton: true
        };
    },

    componentDidMount() {
        console.log(11122223334444);
    },

    render() {
        return (
            <article className="main">
                <Header />
                <div className="module-app">
                    {this.props.children}
                </div>
                <Footer />
            </article>
        );
    }
});

ReactDom.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            {/*<Route path="test" component={Test} />*/}
        </Route>
    </Router>
), document.getElementById('app'));

