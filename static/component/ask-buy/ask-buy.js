/**
 * Created by wangxiaobo on 16/9/17.
 */
require('./ask-buy.scss');
const React = require('react');
const render = require('react-dom').render;

let data = [
    {
        "imgSrc":"",
        "name":"落叶松",
        "size":"六米",
        "type":"原木",
        "currentPosition":"明斯克",
        "Destination":"满洲里",
        "pubDate":"2016-9-30"

    },
];
export class AskBuy extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return <div className="ask-buy"></div>
    }
}