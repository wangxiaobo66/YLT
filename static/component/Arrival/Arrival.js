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
        "seat":"满洲里1",
        "tailNumber":"7788",
        "varieties":"樟子松"
    },
    {
        "time":"10:32",
        "seat":"满洲里2",
        "tailNumber":"7788",
        "varieties":"樟子松"
    },
    {
        "time":"10:32",
        "seat":"满洲里3",
        "tailNumber":"7788",
        "varieties":"樟子松"
    },
    {
        "time":"10:32",
        "seat":"满洲里4",
        "tailNumber":"7788",
        "varieties":"樟子松"
    }
];
let dataSeat = [
    {
        "seat":"满洲里",
        "tailNumber":"7788",
        "varieties":"樟子松"
    },
    {
        "seat":"呼伦贝尔",
        "tailNumber":"7788",
        "varieties":"樟子松"
    },
    {
        "seat":"后贝加尔",
        "tailNumber":"7788",
        "varieties":"樟子松"
    },
    {
        "seat":"满洲里",
        "tailNumber":"7788",
        "varieties":"樟子松"
    }
];
export class Arrival extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        let { place } = this.props;
        let listdom = [];
        switch (place){

            // 默认的展示模式
            case 'default':
                listdom.push(
                    <div key="div-head" className="div-head">
                        <span>车皮号尾号</span>
                        <span>长度(米)</span>
                        <span>树种</span>
                        <span>货种</span>
                    </div>
                );
                data.map((obj,index) => {
                    listdom.push(
                        <div key={"div-head" + index} className="div-col">
                            <span>{obj.tailNumber}</span>
                            <span>{obj.length}</span>
                            <span>{obj.varieties}</span>
                            <span>{obj.cargo}</span>
                        </div>
                    )
                });
                break;

            // 以车次为维度
            case 'train':
                listdom.push(
                    <div key="div-head" className="div-head">
                        <span>时间</span>
                        <span>位置</span>
                        <span>抵达车次</span>
                        <span>树种</span>
                    </div>
                );
                dataYlt.map((obj,index) => {
                    listdom.push(
                        <div key={"div-head"+index} className="div-col">
                            <span>{obj.time}</span>
                            <span>{obj.seat}</span>
                            <span>{obj.tailNumber}</span>
                            <span>{obj.varieties}</span>
                        </div>
                    )
                });
                break;

            // 位置
            case 'seat':
                listdom.push(
                  <div key="seat-div-head" className="seat-div-head">
                      <span>位置</span>
                      <span>抵达车次</span>
                      <span>树种</span>
                  </div>
                );
                dataSeat.map((obj,index) => {
                   listdom.push(
                       <div key={"seat-div-head"+index} className="set-div">
                           <span>{obj.seat}</span>
                           <span>{obj.tailNumber}</span>
                           <span>{obj.varieties}</span>
                       </div>
                   )
                });
                break;
        }
        return <div className="Arrival-component">{listdom}</div>
    }
}