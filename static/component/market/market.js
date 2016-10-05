/**
 * Created by wangxiaobo on 16/9/17.
 */
require('./Market.scss');
const React = require('react');
const render = require('react-dom').render;

let data = [
    {
        "imgSrc": "../../static/component/Market/img/ys.png",
        "name": "落叶松",
        "size": "六米",
        "type": "原木",
        "currentPosition": "明斯克",
        "Destination": "满洲里",
        "pubDate": "9-30|10:01",
        "diam": "20",
        "level": "一级"
    },
    {
        "imgSrc": "../../static/component/Market/img/ys.png",
        "name": "落叶松",
        "size": "三米",
        "type": "原木",
        "currentPosition": "明斯克",
        "destination": "满洲里",
        "pubDate": "9-30|10:01",
        "diam": "20",
        "level": "一级"
    }
];
export class Market extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // let width = $('.Market-component .div img').width();
        // $('.Market-component .div img').css('height',width/2+'px');
    }

    render() {
        let obj = this.props.obj;
        return (
            <div className="component Market-component">
                <div className="box">
                    <img src={obj.imgSrc} width="80" height="60" />
                    <div className="info clearfix">
                        <div className="left">
                            <p className="ellipsis"><span>{obj.name}</span><span>{obj.size}</span><span>{obj.type}</span></p>
                            <p>当前位置:<span>{obj.currentPosition}</span></p>
                            <p>目标口岸:<span>{obj.destination}</span></p>
                        </div>
                        <div className="right">
                            <p>{obj.pubDate}</p>
                            <p>直径:<span>{obj.diam}</span></p>
                            <p>等级:<span>{obj.level}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        );

        // let listdom = [];
        // data.map((obj,index) => {
        //     listdom.push(
        //         <div className="div" key={"div"+index}>
        //             <img src={obj.imgSrc} key={"img"+index}/>
        //             <div className="left" key={"left-div"+index}>
        //                 <p><span>{obj.name}</span><span>{obj.size}</span><span>{obj.type}</span></p>
        //                 <p>当前位置:<span>{obj.currentPosition}</span></p>
        //                 <p>目标口岸:<span>{obj.destination}</span></p>
        //             </div>
        //             <div className="right" key={"right-div"+index}>
        //                 <p>{obj.pubDate}</p>
        //                 <p>直径:<span>{obj.diam}</span></p>
        //                 <p>等级:<span>{obj.level}</span></p>
        //             </div>
        //         </div>
        //     )
        // });
        // return <div className="Market-component clearfix">{listdom}</div>
    }
}

Market.propTypes = {
    obj: React.PropTypes.object
};

Market.defaultProps = {
    obj: null
};
