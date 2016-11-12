/**
 * Created by wangxiaobo on 16/9/17.
 */
require('./Market.scss');
const React = require('react');
const render = require('react-dom').render;

export default class Market extends React.Component {
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
                    <img src={obj.imgUrl} width="80" height="60" />
                    <div className="info clearfix">
                        <div className="left">
                            {
                                obj.dim !== null ?
                                    <p className="ellipsis">
                                        <span>{obj.dim.treetypeName}</span>
                                        <span>{obj.dim.goodstypeName}</span>
                                        <span>{obj.dim.lengthName}</span>
                                    </p>
                                    :
                                    null
                            }
                            <p>货物位置：<span>{obj.locationName}</span></p>
                            <p>目标口岸：<span>{obj.portName}</span></p>
                        </div>
                        <div className="right">
                            {
                                obj.createTime !== null ?
                                    <p>{moment(obj.createTime).format('MM-DD HH:mm:ss')}</p>
                                    :
                                    null
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Market.propTypes = {
    obj: React.PropTypes.object
};

Market.defaultProps = {
    obj: null
};
