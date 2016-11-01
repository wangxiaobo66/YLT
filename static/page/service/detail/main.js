/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/6
 */

import React from 'react';
import {Link} from 'react-router';

import Title from '../../../component/Title/Title';
import Text from '../../../component/Text/Text';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [

            ]
        };
    }
    componentDidMount() {
        let id = this.props.params.id;
    }
    render() {
        let that = this;
        return (
            <div className="module-detail">
                <Title content="求车服务" tip="0803 12:12" />
                <div className="content">
                    <div className="content-row">
                        <div className="item">满洲里到形态13米高地板</div>
                    </div>
                    <div className="content-row">
                        <div className="item item-half">
                            <label>联系人: </label>
                            <span className="text">张三</span>
                        </div>
                        <div className="item item-half">
                            <label>联系电话: </label>
                            <span className="text">15811112222</span>
                        </div>
                    </div>
                </div>
                <div className="desc">
                    <div className="title">
                        详细内容
                    </div>
                    <div className="body">
                        <div className="text">
                            这里是内容
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <a href="tel:15811112222" className="ui-btn ui-btn-fixed">电话联系</a>
                </footer>
            </div>
        );
    }
}