/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/5
 */

import './Header.scss';
import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className="module-mine-header">
                <div className="header clearfix">
                    <Link className="link" to={this.props.href}>
                        <img className="img" src={this.props.src} width="60" height="60" alt=""/>
                        <div className="info">
                            <div className="allow">
                                <i className="icon-o-right"></i>
                            </div>
                            <div className="text">{this.props.text}</div>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    href: React.PropTypes.string,
    src: React.PropTypes.string,
    text: React.PropTypes.string
};

Header.defaultProps = {
    href: '/info',
    src: '',
    text: ''
};
