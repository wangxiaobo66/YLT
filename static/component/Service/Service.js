/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/6
 */

import './Service.scss';
import React from 'react';

export class Service extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let obj = this.props.obj;
        return (
            <div className="component Service-component">
                <div className="box">
                    <div className="left">
                        <p className="title">
                            <span>求车服务</span>
                        </p>
                        <p className="time">
                            08-08 08:08
                        </p>
                    </div>
                    <div className="right">
                        <p><span>满洲里13米高低板</span></p>
                        <p><span>张三: </span><span>15811112222</span></p>
                    </div>
                </div>
                <div className="ui-point"></div>
            </div>
        );
    }
}

Service.propTypes = {
    obj: React.PropTypes.object
};

Service.defaultProps = {
    obj: null
};