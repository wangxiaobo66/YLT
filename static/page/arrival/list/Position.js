/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/1
 */

import React from 'react';
import {Link} from 'react-router';
import {Arrival} from '../../../component/Arrival/Arrival';
import Tab from './Tab';
import {TAB_POSITION} from '../constants';

export default class ListLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {

    }
    render() {
        return(
            <div className="module-list module-list-seat clearfix">
                <Tab type={TAB_POSITION} />
                <Link to={`/item`}>
                    <Arrival place={'default'} />
                </Link>
                <Link className="ui-btn ui-btn-fixed" to={`/add`}>上传境外码单</Link>
            </div>
        );
    }
}