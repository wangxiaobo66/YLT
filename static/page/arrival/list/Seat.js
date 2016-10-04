/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/24
 */

import React from 'react';
import {Link} from 'react-router';
import {Arrival} from '../../../component/Arrival/Arrival';
import Tab from './Tab';
import {TAB_SEAT} from '../constants';

export default class ListLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {

    }
    goToItem(id) {
        
    }
    render() {
        return(
            <div className="module-list module-list-seat clearfix">
                <Tab type={TAB_SEAT} />
                <Link to={`/item`}>
                    <Arrival place={'seat'} onClickItem={this.goToItem.bind(this)} />
                </Link>
                <Link className="ui-btn ui-btn-fixed" to={`/add`}>上传境外码单</Link>
            </div>
        );
    }
}