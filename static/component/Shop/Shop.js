/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/26
 */

import './Shop.scss';

import React from 'react';

export default class Shop extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        let obj = this.props.obj;
        return (
            <div className="Shop-component">
                <div className="info">
                    <img className="img" src={obj.logoUrl} width="45" height="45" alt=""/>
                    <div className="info-detail">
                        <div className="title">
                            <div className="title-location">
                                <i className="icon icon-location"></i>
                                <span className="text">{obj.province}</span>
                            </div>
                            <div className="title-name">{obj.storeName}</div>
                        </div>
                        <div className="desc ellipsis">{obj.introduction}</div>
                    </div>
                </div>
                <div className="goods-box">
                    <ul className="goods clearfix">
                        {
                            obj.orders != null ?
                                obj.orders.map(function (item, index) {
                                    return (
                                        <li className="item" key={item.id}>
                                            <img src={item.url} width="123" height="63" alt=""/>
                                        </li>
                                    );
                                })
                                :
                                null
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

Shop.propTypes = {
    obj: React.PropTypes.object
};