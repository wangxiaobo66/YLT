/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/4
 */

import React from 'react';
import {Link} from 'react-router';
import {Arrival} from '../../../component/Arrival/Arrival';
import TipSuccess from '../../../component/TipSuccess/TipSuccess';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {

    }
    render() {
        return(
            <div className="module-item clearfix">
                <Link to={`/detail`}>
                    <Arrival place={'default'} />
                </Link>
                <TipSuccess msg="0802" />
            </div>
        );
    }
}