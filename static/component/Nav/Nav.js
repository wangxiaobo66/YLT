/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/4
 */

import './Nav.scss';
import React from 'react';

const NAV_INDEX = 'index';
const NAV_PUBLISH = 'publish';
const NAV_MINE = 'mine';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Nav-component">
                <div className="ui-tab ui-tab-fixed">
                    <a href="./index.html"
                       className={'item' + (this.props.current === NAV_INDEX ? ' item--active' : '')}>官网首页</a>
                    <a href="./publishing-news.html"
                       className={'item' + (this.props.current === NAV_PUBLISH ? ' item--active' : '')}>发布信息</a>
                    <a href="./mine.html"
                       className={'item' + (this.props.current === NAV_MINE ? ' item--active' : '')}>个人中心</a>
                </div>
            </div>
        );
    }
}

Nav.propTypes = {
    current: React.PropTypes.string
};

Nav.defaultProps = {
    current: NAV_INDEX
};