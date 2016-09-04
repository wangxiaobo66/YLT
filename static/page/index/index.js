/**
 * Created by wangxiaobo on 16/9/4.
 */
const React = require('react');
const render = require('react-dom').render;


const { YLT } = require('../../redux/reducers');
const { Provider, connect } = require('react-redux');
const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;

let store = createStore(YLT, applyMiddleware(thunk));

class component extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>123</div>
        );
    }
    componentDidMount() {
        let {dispatch} = this.props;
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