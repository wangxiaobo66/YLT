/**
 * Created by wangxiaobo on 16/9/22.
 */
require('./Subscribe.scss');
const React = require('react');
const render = require('react-dom').render;

let data = [
    {
        "startTime":"08-03",
        "endTime":"08-04",
        "length":"3米",
        "varieties":"樟子松",
        "cargo":"原木",
        "diam": "20",
        "level": "一级"
    }
];

export class Subscribe extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        let listdom = [];
        data.map((obj,index) => {
            listdom.push(
                <div key={"div" +index} className="div">
                    <span className="diam"></span>
                    <div>订阅时间:{obj.startTime}:{obj.endTime}</div>
                    <div>
                        <p><span>{obj.varieties}</span><span>{obj.length}</span><span>{obj.cargo}</span></p>
                        <p><span>直径:{obj.diam}</span><span>等级:{obj.level}</span></p>
                    </div>
                    <div>
                        <span>修改</span><span>删除</span>
                    </div>
                </div>
            )
        });
        return <div className="Subscribe-component">{listdom}</div>
    }
}