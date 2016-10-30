/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/3
 */

import './Upload.scss';
import React from 'react';

export default class Upload extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Upload-component">
                <div className="logo">
                    <div className="logo-box">
                        <div className="info-box">
                            <div className="info">
                                <p className="icon-box">
                                    <i className="icon icon-o-plus"></i>
                                </p>
                                <p className="info-tip">{this.props.tip}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Upload.propTypes = {
    tip: React.PropTypes.string
};

Upload.defaultProps = {
    tip: ''
};