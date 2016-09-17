/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/16
 */

import './style.scss';
import imgGo from './img/go.png';

import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {bindActionCreators} from 'redux';
// import { ReduxThunk } from 'redux-thunk';
const thunk = require('redux-thunk').default;
import {YLT} from '../../redux/reducers';

let store = createStore(YLT, applyMiddleware(thunk));

class Railway extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="module-railway">
                <div className="ui-title">&nbsp;</div>
                <form className="ui-form">
                    <div className="item">
                        <label>
                            <div className="for">起始位置</div>
                            <div className="input-box input-box--select">
                                <select className="ui-select">
                                    <option value="">请选择</option>
                                    <option value="1">满洲里</option>
                                    <option value="2">缨芬河</option>
                                    <option value="2">二连浩特</option>
                                    <option value="2">其他</option>
                                </select>
                            </div>
                        </label>
                    </div>
                    <div className="item">
                        <label>
                            <div className="for">目标口岸</div>
                            <div className="input-box input-box--select">
                                <select className="ui-select">
                                    <option value="">请选择</option>
                                    <option value="1">满洲里</option>
                                    <option value="2">缨芬河</option>
                                    <option value="2">二连浩特</option>
                                    <option value="2">其他</option>
                                </select>
                            </div>
                        </label>
                    </div>
                </form>
                <div className="result">
                    <div className="box">
                        <div className="box-header">
                            <span className="header-text">满洲里</span>
                            <img className="header-img" src={imgGo} width="80" height="14"></img>
                            <span className="header-text">二连浩特</span>
                        </div>
                        <div className="prices">
                            <div className="item clearfix item--now">
                                <div className="label col-xs-6">现行运费价格</div>
                                <div className="text col-xs-6">1028.23元</div>
                            </div>
                            <div className="item clearfix item--prev">
                                <div className="label col-xs-6">调整前价格</div>
                                <div className="text col-xs-6">990.23元</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="oper">
                    <a href="javascript:;" className="ui-btn ui-btn-fixed">搜索</a>
                </div>
            </div>
        );
    }
}

let App = connect(function (state) {
    return {

    };
})(Railway);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);