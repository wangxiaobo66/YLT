/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/4
 */

import React from 'react';
import ReactDom from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {bindActionCreators} from 'redux';
// import { ReduxThunk } from 'redux-thunk';
const thunk = require('redux-thunk').default;
import rootReducer from '../rootReducer';
import * as fns from './action';

let store = createStore(rootReducer, applyMiddleware(thunk));

class Detail extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // let actions = this.props.actions;
        console.log(this.props);
        // console.log(this.props.name);
        return(
            <div><a onClick={(e) => this.click()}>点击{this.props.info.name}</a></div>
        );
    }
    componentDidMount() {

    }
    click() {
        // let actions = this.props.actions;
        let dispatch = this.props.dispatch;
        dispatch(fns.setName('king'));
        // dispatch({
        //     type: 'SET_NAME',
        //     name: name
        // });
    }
}

let App = connect(function (state) {
    return {
        info: state.detailReducer
    }
})(Detail);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);