/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/24
 */

import React from 'react';
import {Arrival} from '../../../component/Arrival/Arrival';

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
                <Arrival place={'train'} />
            </div>
        );
    }
}