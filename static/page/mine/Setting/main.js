/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/4
 */

import React from 'react';
import {Link} from 'react-router';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        };
    }
    componentDidMount() {

    }
    toggleBall() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className="module-setting">
                <div className="ui-text fn-mt10">
                    <div className="item">
                        <div className="content">
                            <div className={'ui-ball' + (this.state.isOpen === true ? ' ui-ball-open' : ' ui-ball-close')}
                                 onClick={this.toggleBall.bind(this)}>
                                <div className="circle"></div>
                            </div>
                        </div>
                        <div className="label">接收微信消息推送</div>
                    </div>
                </div>
            </div>
        );
    }
}