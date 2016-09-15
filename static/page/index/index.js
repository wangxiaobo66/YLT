/**
 * Created by wangxiaobo on 16/9/4.
 */
require('./index.scss');
const util = require('../../js/app/util.js');
const React = require('react');
const render = require('react-dom').render;

const { YLT } = require('../../redux/reducers');
const { Provider, connect } = require('react-redux');
const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;

let store = createStore(YLT, applyMiddleware(thunk));


let { change } = require('./actions');

class component extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        //console.log(this.props);
        let { index } = this.props;
        return(
            <div className="modal-index">
                <div className="index-search">

                </div>
            </div>
        );
    }
    componentDidMount() {

    }
    click() {
        let {dispatch} = this.props;
        dispatch(change(2));
    }
}
function select(state) {
    console.log(state)
    return {
        index: state.index
    }
}
let Index = connect(select)(component);

render(
    <Provider store={store}>
        <Index />
    </Provider>,
    document.getElementById("index")
);