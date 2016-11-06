/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/3
 */

import './Text.scss';
import React from 'react';

export default class Text extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={"Text-component" + (this.props.half === true ? ' Text-component--half' : '')}>
                <div className={'clearfix text-box' + (this.props.border === false ? ' text-box--noborder' : '')}>
                    <div className="for">{this.props.label}</div>
                    <div className="text">{this.props.text}</div>
                </div>
            </div>
        );
    }
}

Text.propTypes = {
    half: React.PropTypes.bool,
    label: React.PropTypes.string,
    text: React.PropTypes.string,
    border: React.PropTypes.bool
};

Text.defaultProps = {
    half: false,
    label: '',
    text: '',
    border: true
};