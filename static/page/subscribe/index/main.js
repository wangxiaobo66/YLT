/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/15
 */

import './style.scss';

import React from 'react';
import {Link} from 'react-router';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {

    }
    render() {
        return(
            <div className="module-sub">
                <div className="ui-box">
                    <p className="tip">按选定木材规格订阅信息，当有新消息产生后，会将消息推送给您</p>
                    <p className="btn-box">
                        <Link className="btn btn-lg btn-primary btn-block" to={`/gg`}>规格订阅</Link>
                    </p>
                </div>
                <div className="ui-box">
                    <p className="tip">输入您要订阅的车次号，该车次的货物到货后，会将信息推送给您</p>
                    <p className="btn-box">
                        <Link className="btn btn-lg btn-primary btn-block" to={`/cph`}>车次号订阅</Link>
                    </p>
                </div>
            </div>
        );
    }
}