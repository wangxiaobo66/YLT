/**
 * Created by wangxiaobo on 16/9/22.
 */
require('./Arrival.scss');
const React = require('react');
const render = require('react-dom').render;

let data = [
    {
        "tailNumber":"7788",
        "length":"3米",
        "varieties":"樟子松",
        "cargo":"原木"
    },
    {
        "tailNumber":"7788",
        "length":"3米",
        "varieties":"樟子松",
        "cargo":"原木"
    },
    {
        "tailNumber":"7788",
        "length":"3米",
        "varieties":"樟子松",
        "cargo":"原木"
    },
    {
        "tailNumber":"7788",
        "length":"3米",
        "varieties":"樟子松",
        "cargo":"原木"
    }
];
let dataYlt = [
    {
        "time":"10:32",
        "tailNumber":"7788",
        "length":"3米",
        "varieties":"樟子松",
        "cargo":"原木"
    }
];
export class Arrival extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        let { place } = this.props;
        let listdom = [];
        if(place){
            listdom.push(<div key="div" className="div-head"><span>车皮号尾号</span><span>长度(米)</span><span>树种</span><span>货种</span></div>);
            data.map((obj,index) => {
                listdom.push(
                    <div key={"div" + index} className={"div" +(index%2?"":" active")}><span>{obj.tailNumber}</span><span>{obj.length}</span><span>{obj.varieties}</span><span>{obj.cargo}</span></div>
                )
            });
        }else {
            listdom.push(
                <div key="div-title" className="title-div">伊利托今天进车组</div>
            );
            listdom.push(
                <div key="div" className="place-div-head"><span>时间</span><span>车皮号尾号</span><span>长度(米)</span><span>树种</span><span>货种</span></div>
            );
            dataYlt.map((obj,index) => {
                listdom.push(
                    <div key={"div" + index} className={"place-div" +(index%2?"":" active")}><span>{obj.time}</span><span>{obj.tailNumber}</span><span>{obj.length}</span><span>{obj.varieties}</span><span>{obj.cargo}</span></div>
                )
            });
        }
        return <div className="Arrival-component">{listdom}</div>
    }
}