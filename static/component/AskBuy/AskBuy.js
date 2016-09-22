/**
 * Created by wangxiaobo on 16/9/20.
 */
require('./AskBuy.scss');
const React = require('react');
const render = require('react-dom').render;

let data = [
    {
        "region": "满洲里",
        "time": "08-03 22:06",
        "name": "落叶松",
        "size": "六米",
        "type": "原木",
        "diam": "20",
        "level": "一级"
    },
    {
        "region": "满洲里",
        "time": "08-03 22:06",
        "name": "落叶松",
        "size": "六米",
        "type": "原木",
        "diam": "20",
        "level": "一级"
    }
];
export class AskBuy extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let listdom = [];
        data.map((obj, index) => {
            listdom.push(
                <div className="div" key={"div"+index}>
                    <div className="left">
                        <span className="point"></span>
                        <p>
                            <img src="../../static/component/AskBuy/img/map.png"/>
                            <span>{obj.region}</span>
                        </p>
                        <p>
                            {obj.time}
                        </p>
                    </div>
                    <div className="right">
                        <p><span>{obj.name}</span><span>{obj.size}</span><span>{obj.type}</span></p>
                        <p><span>直径:{obj.diam}</span><span>长度:{obj.level}</span></p>
                    </div>
                </div>
            )
        });
        return <div className="AskBuy-component">{listdom}</div>
    }
}