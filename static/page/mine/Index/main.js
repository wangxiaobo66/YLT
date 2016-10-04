/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/4
 */

import React from 'react';
import {Link} from 'react-router';
import Nav from '../../../component/Nav/Nav';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className="module-index">
                <div className="header">

                </div>
                <div className="content">
                    <div className="content-grid">

                    </div>
                    <div className="content-row">

                    </div>
                </div>
                <div className="footer">
                    <Nav current="mine" />
                </div>
            </div>
        );
    }
}