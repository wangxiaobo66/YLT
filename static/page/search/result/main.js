/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/7
 */

import React from 'react';
import {Link} from 'react-router';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: null
        };
    }
    componentDidMount() {

    }
    render() {
        return(
            <div className="module-result">
                {
                        <div className="no-data">
                            <div className="tip">
                                <p className="text">按选定木材规格订阅信息，当有新消息产生后，会将消息推送给您。</p>
                            </div>
                            <div className="do">
                                <div className="ui-btn-groups">
                                    <a href="./search.html"
                                       className="ui-btn ui-btn-default">规格订阅</a>
                                </div>
                            </div>
                            <div className="tip">
                                <p className="text">输入您要订阅的车次号，该车次的木材到货后，会将消息推送给您。</p>
                            </div>
                            <div className="do">
                                <div className="ui-btn-groups">
                                    <a href="./subscribe.html"
                                       className="ui-btn ui-btn-default">到货订阅</a>
                                </div>
                            </div>

                        </div>
                }



            </div>
        );
    }
}