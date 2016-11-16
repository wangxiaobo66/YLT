/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/4
 */

import React from 'react';
import {Link} from 'react-router';
import {Service} from '../../../component/Service/Service';
import service from '../service';

export default class Item extends React.Component {
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
        service.myService({
            limitCount:"10",
            limitStart:"0",
            type:"0"
        }).then(rep => {
            this.setState({
                list: rep.result.list
            });
        });
    }
    reload() {
        this.fetchList();
    }
    /**
     * 切换操作
     */
    toggleOper(item) {
        if (!item.isOperating) {
            item.isOperating = true;
        } else {
            item.isOperating = false;
        }
        this.setState({});
    }
    render() {
        let that = this;
        return (
            <div className="module-service">
                <ul className="list">
                    {
                        this.state.list!=null?
                            this.state.list.map(function (item, index) {
                                return (
                                    <li className="item clearfix" key={index}>
                                        <div className="item-link">
                                            <Service obj={item} />
                                            {
                                                !item.isOperating === true ?
                                                    <div className="ui-do"
                                                         onClick={that.toggleOper.bind(that, item)}>
                                                        <div className="text-box">
                                                            <span className="text">操作</span>
                                                        </div>
                                                    </div>
                                                    :
                                                    <div className="ui-do ui-do-cancel"
                                                         onClick={that.toggleOper.bind(that, item)}>
                                                        <div className="text-box">
                                                            <span className="text">取消</span>
                                                        </div>
                                                    </div>
                                            }
                                        </div>
                                        <div className={'ui-tab ui-tab-normal' + (!item.isOperating === true ? ' fn-none' : '')}>
                                            <a href={"./service.html#/update/"+item.id} className="item">修改</a>
                                            <a href="javascript:;" className="item" onClick={(e) => that.click(item.id)}>删除</a>
                                        </div>
                                    </li>
                                );
                            })
                            :<li className="tips">暂无服务</li>
                    }
                </ul>

            </div>
        );
    }
    click(id){
        service.deleteService({
            informId:id
        }).then(rep => {
            if(rep.reason==="success"){
                window.toast('删除成功!');
                this.reload();
            }
        });
    }
}