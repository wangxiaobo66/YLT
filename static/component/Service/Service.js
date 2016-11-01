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
                            <span>{obj.title}</span>
                        </p>
                        <p className="time">
                            {/*moment(obj.createTime).format('YYYY-MM-DD hh:mm:ss')*/}
                        </p>
                    </div>
                    <div className="right">
                        <p><span>{obj.title}</span></p>
                        <p><span>{obj.contact}</span><span>{obj.mobile}</span></p>
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
    obj: {}
};