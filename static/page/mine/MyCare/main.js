/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/4
 */

import React from 'react';
import {Link} from 'react-router';
import Shop from '../../../component/Shop/Shop';
import Market from '../../../component/Market/Market';

import CareArrival from './CareArrival';
import CareShop from './CareShop';
import CareMarket from './CareMarket';

import {TYPE_ARRIVAL, TYPE_SHOP, TYPE_MARKET} from './config';

export default class MyCare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {

    }
    tab(type) {
        this.props.history.push({
            pathname: `/care/${type}`
        });
    }
    render() {
        let type = +this.props.params.type;
        let html;

        if (type === TYPE_ARRIVAL) {
            html = <CareArrival />;
        } else if (type === TYPE_SHOP) {
            html = <CareShop />;
        } else if (type === TYPE_MARKET) {
            html = <CareMarket />;
        }

        return (
            <div className="module-care">
                <ul className="ui-nav">
                    <li className="item">
                        <a href="javascript:;"
                           className={'item-link' + (type === TYPE_SHOP ? ' item-link--active': '')}
                           onClick={this.tab.bind(this, TYPE_SHOP)}>关注店铺</a>
                    </li>
                    <li className="item">
                        <a href="javascript:;"
                           className={'item-link' + (type === TYPE_MARKET ? ' item-link--active': '')}
                           onClick={this.tab.bind(this, TYPE_MARKET)}>未售市场</a>
                    </li>
                </ul>
                <div className="detail">
                    {
                        html
                    }
                </div>
            </div>
        );
    }
}