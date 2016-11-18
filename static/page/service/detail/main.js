/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/6
 */

import React from 'react';
import {Link} from 'react-router';

import Title from '../../../component/Title/Title';
import Text from '../../../component/Text/Text';

const { detailData } = require('./../actions.js');//从actions里拿到方法

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [

            ]
        };
    }
    render() {
        let { service } = this.props;
        return (
            <div className="module-detail">
                <Title content="求车服务" tip={service.detail?moment(service.detail.data.updateTime).format('YYYY-MM-DD hh:mm:ss'):''} />
                <div className="content">
                    <div className="content-row">
                        <div className="item">{service.detail?service.detail.data.title:''}</div>
                    </div>
                    <div className="content-row">
                        <div className="item item-half">
                            <label>联系人: </label>
                            <span className="text">{service.detail?service.detail.data.contact:''}</span>
                        </div>
                        <div className="item item-half">
                            <label>联系电话: </label>
                            <span className="text">{service.detail?service.detail.data.mobile:''}</span>
                        </div>
                    </div>
                </div>
                <div className="desc">
                    <div className="title">
                        详细内容
                    </div>
                    <div className="body">
                        <div className="text">
                            {service.detail?service.detail.data.content:''}
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <a href={"tel:"+(service.detail?service.detail.data.mobile:'')} className="ui-btn ui-btn-fixed">电话联系</a>
                </footer>
            </div>
        );
    }
    componentDidMount() {
        let { dispatch} = this.props;
        let data= {"informId":this.props.params.id};
        dispatch(detailData(data));
    }
}