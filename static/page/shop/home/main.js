/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/17
 */

import React from 'react';
import {Button} from 'react-bootstrap';

import imgTop from '../img/home-top.png';

export default class Chepihao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {

    }
    render() {
        return(
            <div className="module-shop-home">
                <div className="header">
                    <div className="header-tp">
                        <p className="title">这里是公司名称</p>
                        <p className="sub-title">这里是副标题</p>
                    </div>
                </div>
                <div className="content">
                    不错哦, <还一颗1122></还一颗1122>
                </div>
            </div>
        );
    }
}