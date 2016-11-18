/**
 * Created by wangxiaobo on 16/9/20.
 */
require('./AskBuy.scss');
const React = require('react');
const render = require('react-dom').render;

import imgMap from './img/map.png';

// let data = [
//     {
//         "region": "满洲里",
//         "time": "08-03 22:06",
//         "name": "落叶松",
//         "size": "六米",
//         "type": "原木",
//         "diam": "20",
//         "level": "一级"
//     },
//     {
//         "region": "满洲里",
//         "time": "08-03 22:06",
//         "name": "落叶松",
//         "size": "六米",
//         "type": "原木",
//         "diam": "20",
//         "level": "一级"
//     }
// ];

export class AskBuy extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let obj = this.props.obj;
        return (
            <a href={"./ask-buy.html#/detail/"+obj.orderId}>
                <div className="component AskBuy-component">
                    <div className="box">
                        <div className="left">
                            <p className="title">
                                <img src={imgMap}/>
                                <span>{obj.portName}</span>
                            </p>
                            <p className="time">
                                {moment(obj.updateTime).format('YYYY-MM-DD hh:mm:ss')}
                            </p>
                        </div>
                        <div className="right">
                            <p>
                                <span>{obj.treetypeName}</span><span>{obj.goodstypeName}</span><span>{obj.lengthName}</span>
                            </p>
                            <p><span>数量:{obj.amount}</span></p>
                        </div>
                    </div>
                    <div className="ui-point"></div>
                </div>
            </a>
        );

        // let listdom = [];
        // data.map((obj, index) => {
        //     listdom.push(
        //         <div className="div" key={"div"+index}>
        //             <div className="left">
        //                 <span className="point"></span>
        //                 <p className="title">
        //                     <img src="../../static/component/AskBuy/img/map.png"/>
        //                     <span>{obj.region}</span>
        //                 </p>
        //                 <p className="time">
        //                     {obj.time}
        //                 </p>
        //             </div>
        //             <div className="right">
        //                 <p><span>{obj.name}</span><span>{obj.size}</span><span>{obj.type}</span></p>
        //                 <p><span>直径:{obj.diam}</span><span>长度:{obj.level}</span></p>
        //             </div>
        //             <a href="javascript:;" className="do">操作</a>
        //         </div>
        //     )
        // });
        // return <div className={'AskBuy-component' + (this.props.edit === true ? ' AskBuy-component-edit' : '')}>{listdom}</div>
    }
}

AskBuy.propTypes = {
    obj: React.PropTypes.object
};

AskBuy.defaultProps = {
    obj: null
};