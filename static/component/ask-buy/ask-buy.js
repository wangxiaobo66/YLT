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
        "pubDate":"9-30|10:01",
        "diam":"20",
        "level":"一级"
    },
    {
        "imgSrc":"",
        "name":"落叶松",
        "size":"三米",
        "type":"原木",
        "currentPosition":"明斯克",
        "destination":"满洲里",
        "pubDate":"9-30|10:01",
        "diam":"20",
        "level":"一级"
    }
];
export class AskBuy extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        let listdom = [];
        data.map((obj,index) => {
            listdom.push(
                <div className="div" key={"div"+index}>
                    <img src={obj.imgSrc} key={"img"+index}/>
                    <div className="left" key={"left-div"+index}>
                        <p><span>{obj.name}</span><span>{obj.size}</span><span>{obj.type}</span></p>
                        <p>当前位置:<span>{obj.currentPosition}</span></p>
                        <p>目标口岸:<span>{obj.destination}</span></p>
                    </div>
                    <div className="right" key={"right-div"+index}>
                        <p>{obj.pubDate}</p>
                        <p>直径:<span>{obj.diam}</span></p>
                        <p>等级:<span>{obj.level}</span></p>
                    </div>
                </div>
            )
        });
        return <div className="ask-buy-component clearfix">{listdom}</div>
    }
    componentDidMount() {
        let width = $('.div img').width();
        $('.div img').css('height',width/2+'px');
    }
}