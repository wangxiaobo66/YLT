/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/1
 */


import React from 'react';
import {Arrival} from '../../../component/Arrival/Arrival';

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
                <Arrival place={'default'} />
            </div>
        );
    }
}