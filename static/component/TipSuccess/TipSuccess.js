/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/4
 */

import './TipSuccess.scss';
import React from 'react';

export default class TipSuccess extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="TipSuccess-component">
                <div className="tip-box">
                    <div className="text">
                        {this.props.msg}
                        <div className="triangle"></div>
                    </div>
                </div>
            </div>
        );
    }
}

TipSuccess.propTypes = {
    msg: React.PropTypes.string
};

TipSuccess.defaultProps = {
    msg: '提示'
};