/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/24
 */

import React from 'react';
import {Link} from 'react-router';
import {Arrival} from '../../../component/Arrival/Arrival';
import Tab from './Tab';
import {TAB_TRAIN} from '../constants';

export default class ListTrain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {

    }
    render() {
        return(
            <div className="module-list module-list-train">
                <Tab type={TAB_TRAIN} />
                <Link to={`/item`}>
                    <Arrival place={'train'} />
                </Link>
                <Link className="ui-btn ui-btn-fixed" to={`/add`}>上传境外码单</Link>
            </div>
        );
    }
}