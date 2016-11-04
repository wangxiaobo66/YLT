/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/4
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
import Index from './Index/main';
import Feedback from './Feedback/main';

import Info from './Info/main';
import InfoPortrait from './Info/Portrait';
import InfoAddress from './Info/Adrress';
import InfoCare from './Info/Care';
import InfoCompany from './Info/Company';
import InfoMobile from './Info/Mobile';
import InfoName from './Info/Name';
import InfoNickName from './Info/NickName';

import MsgList from './MsgList/main';
import MsgChat from './MsgChat/main';
import MyAskBuy from './MyAskBuy/main';
import MyCare from './MyCare/main';
import MyMarket from './MyMarket/main';
import MyService from './MyService/main';
import Setting from './Setting/main';

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
                <IndexRoute component={Index} />
                <Route path="info" component={Info} />
                <Route path="info_portrait" component={InfoPortrait} />
                <Route path="info_address" component={InfoAddress} />
                <Route path="info_care" component={InfoCare} />
                <Route path="info_company" component={InfoCompany} />
                <Route path="info_mobile" component={InfoMobile} />
                <Route path="info_name" component={InfoName} />
                <Route path="info_nickname" component={InfoNickName} />
                <Route path="msg_list" component={MsgList} />
                <Route path="msg_chat/:fromUserId/:toUserId" component={MsgChat} />
                <Route path="askbuy" component={MyAskBuy} />
                <Route path="care/:type" component={MyCare} />
                <Route path="market" component={MyMarket} />
                <Route path="service" component={MyService} />
                <Route path="setting" component={Setting} />
                <Route path="feedback" component={Feedback} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
