/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/4
 */

import './Title.scss';
import React from 'react';

export default class Title extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Title-component">
                <div className="title-box">
                    {
                        this.props.tip ?
                            <div className="tip">{this.props.tip}</div>
                            :
                            null
                    }
                    <div className="text">{this.props.content}</div>
                </div>
            </div>
        );
    }
}

Title.propTypes = {
    content: React.PropTypes.string,
    tip: React.PropTypes.string
};

Title.defaultProps = {
    content: '',
    tip: ''
};