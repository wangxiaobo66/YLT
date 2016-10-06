/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/3
 */

import React from 'react';
import {Link} from 'react-router';
import {TAB_SEAT, TAB_TRAIN, TAB_POSITION} from '../constants';

export default class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {

    }
    render() {
        return(
            <div className="module-tabs">
                <ul className="ui-nav">
                    <li className="item">
                        <Link className={'item-link' + (this.props.type === TAB_SEAT ? ' item-link--active': '')}
                              to={`/seat`}>位置显示</Link>
                    </li>
                    <li className="item">
                        <Link className={'item-link' + (this.props.type === TAB_TRAIN ? ' item-link--active': '')}
                              to={`/train`}>车次(列)显示</Link>
                    </li>
                    <li className="item">
                        <Link className={'item-link' + (this.props.type === TAB_POSITION ? ' item-link--active': '')}
                              to={`/position`}>
                            <label className="for">口岸:</label>
                            <select className="select">
                                <option value="">全部</option>
                                <option value="1">满洲里</option>
                                <option value="2">缨芬河</option>
                                <option value="2">二连浩特</option>
                                <option value="2">其他</option>
                            </select>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

Tab.propTypes = {
    type: React.PropTypes.number
};

Tab.defaultProps = {
    type: TAB_SEAT
};