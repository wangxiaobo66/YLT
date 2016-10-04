/**
 * Created by wangxiaobo on 16/9/22.
 */
require('./Arrival.scss');
const React = require('react');
const render = require('react-dom').render;

const PLACE_DEFAULT = 'default';
const PLACE_SEAT = 'seat';
const PLACE_TRAIN = 'train';

let data = [
    {
        "id": 1,
        "tailNumber":"7788",
        "length":"3米",
        "varieties":"樟子松",
        "cargo":"原木"
    },
    {
        "id": 2,
        "tailNumber":"7788",
        "length":"3米",
        "varieties":"樟子松",
        "cargo":"原木"
    },
    {
        "id": 3,
        "tailNumber":"7788",
        "length":"3米",
        "varieties":"樟子松",
        "cargo":"原木"
    },
    {
        "id": 4,
        "tailNumber":"7788",
        "length":"3米",
        "varieties":"樟子松",
        "cargo":"原木"
    }
];
let dataYlt = [
    {
        "id": 1,
        "time":"10:32",
        "seat":"满洲里1",
        "tailNumber":"7788",
        "varieties":"樟子松"
    },
    {
        "id": 2,
        "time":"10:32",
        "seat":"满洲里2",
        "tailNumber":"7788",
        "varieties":"樟子松"
    },
    {
        "id": 3,
        "time":"10:32",
        "seat":"满洲里3",
        "tailNumber":"7788",
        "varieties":"樟子松"
    },
    {
        "id": 4,
        "time":"10:32",
        "seat":"满洲里4",
        "tailNumber":"7788",
        "varieties":"樟子松"
    }
];
let dataSeat = [
    {
        "id": 1,
        "seat":"满洲里",
        "tailNumber":"7788",
        "varieties":"樟子松"
    },
    {
        "id": 2,
        "seat":"呼伦贝尔",
        "tailNumber":"7788",
        "varieties":"樟子松"
    },
    {
        "id": 3,
        "seat":"后贝加尔",
        "tailNumber":"7788",
        "varieties":"樟子松"
    },
    {
        "id": 4,
        "seat":"满洲里",
        "tailNumber":"7788",
        "varieties":"樟子松"
    }
];

export class Arrival extends React.Component {
    constructor(props) {
        super(props);
    }
    clickItem(id, event) {
        if (typeof this.props.onClickItem === 'function') {
            this.props.onClickItem(id);
        }
    }
    render(){
        let { place } = this.props;
        let listdom = [];
        switch (place){

            // 默认的展示模式
            case PLACE_DEFAULT:
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
                        <div key={"div-head" + index} className="div-col"
                             onClick={this.clickItem.bind(this, obj.id)}>
                            <span>{obj.tailNumber}</span>
                            <span>{obj.length}</span>
                            <span>{obj.varieties}</span>
                            <span>{obj.cargo}</span>
                        </div>
                    )
                });
                break;

            // 以车次为维度
            case PLACE_TRAIN:
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
            case PLACE_SEAT:
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

Arrival.propTypes = {
    place: React.PropTypes.string,
    onItemClick: React.PropTypes.func
};

Arrival.defaultProps = {
    place: PLACE_SEAT,
    onClickItem: function () {
        
    }
};
