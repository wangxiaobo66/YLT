/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/29
 */

import './Dialog.scss';

import React from 'react';

class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <article className="comp-dialog">
                <div className="dialog-mask"></div>
                <div className="dialog-box">
                    <div className="dialog-title">{this.props.title}</div>
                    <div className="dialog-content">
                        {this.props.children}
                    </div>
                </div>
            </article>
        );
    }
}

Dialog.propTypes = {
    title: React.PropTypes.string
};
