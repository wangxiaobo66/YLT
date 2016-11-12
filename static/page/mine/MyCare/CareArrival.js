/**
 * @file
 * @auth jinguangguo
 * @date 2016/11/4
 */

import React from 'react';
import {Link} from 'react-router';
import service from '../service';
import {TYPE_ARRIVAL} from './config';

export default class CareArrival extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: null
        };
    }

    componentDidMount() {
        this.fetchList();
    }

    fetchList() {
        service.interestList({
            type: TYPE_ARRIVAL
        }).then(rep => {
            this.setState({
                list: rep.result.list
            });
        });
    }

    doNotCare(id) {
        let that = this;
        service.interestList({
            type: TYPE_ARRIVAL,
            id: id
        }).then(rep => {
            window.toast('取消关注成功', {
                callback() {
                    that.fetchList();
                }
            });
        });
    }

    render() {
        let list = this.state.list;
        return (
            <article className="detail-module">
                <div className="ui-table ui-table-do">
                    <ul className="tbody">
                        {
                            list !== null ?
                                list.map((item, index) => {
                                    return (
                                        <li className="tr" key={index}>
                                            <Link className="link" to={`/item`}>
                                                <div className="td">{item.tailNumber}</div>
                                                <div className="td">{item.length}</div>
                                                <div className="td">{item.varieties}</div>
                                                <div className="td">{item.cargo}</div>
                                            </Link>
                                            <div className="ui-do" onClick={this.doNotCare.bind(this, item.id)}>
                                                <div className="text-box">
                                                    <span className="text">取消关注</span>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })
                                :
                                null
                        }
                    </ul>
                </div>
            </article>
        );
    }
}

CareArrival.propTypes = {
    list: React.PropTypes.array
};

CareArrival.defaultProps = {
    list: null
};
