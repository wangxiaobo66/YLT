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

            ],
            title:''
        };
    }
    render() {
        let { service } = this.props;
        let { title } = this.state;
        return (
            <div className="module-detail">
                <Title content={title} tip={service.detail?moment(service.detail.data.updateTime).format('YYYY-MM-DD hh:mm:ss'):''} />
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
    title(name){
        console.log(name);
        switch (name){
            case '':
                return '全部';
                break;
            case 1:
                return '求车服务';
                break;
            case 2:
                return '场地出租';
                break;
            case 3:
                return '设备租售';
                break;
            case 4:
                return '招聘服务';
                break;
            case 5:
                return '求职服务';
                break;
            case 6:
                return '其它服务';
                break;
        }
    }
    componentDidMount() {
        let { dispatch} = this.props;
        let data= {"informId":this.props.params.id};
        dispatch(detailData(data));
    }
    componentWillReceiveProps(nextProps) {
        let detail = nextProps.service.detail;
        if(detail){
            let title = this.title(detail.data.type);
            this.setState({
                title:title
            })
        }
    }
}