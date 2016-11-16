/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/6
 */

import React from 'react';
import {Link} from 'react-router';

const { detailData , addInform , updateInform } = require('./../actions.js');//从actions里拿到方法

let type = "";

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                id:'',
                type: '',
                title: '',
                contact: '',
                mobile: '',
                content: ''
            }
        };
    }

    render() {
        let that = this;
        let { data } = this.state;
        console.log(data);
        return (
            <div className="module-add fn-mt10">
                <form className="ui-form">
                    <div className="item">
                        <label>
                            <div className="for">服务类型</div>
                            <div className="input-box input-box--select">
                                <select className="ui-select"
                                        value={data.id!=null?data.type:''}
                                        onChange={(e) => this.onchange(e,'type')}>
                                    <option value="请选择服务类型">请选择服务类型</option>
                                    <option value="1">求车服务</option>
                                    <option value="2">场地出租</option>
                                    <option value="3">设备租售</option>
                                    <option value="4">招聘服务</option>
                                    <option value="5">求职服务</option>
                                    <option value="6">其它服务</option>
                                </select>
                            </div>
                        </label>
                    </div>
                    <div className="item">
                        <label>
                            <div className="for">标题</div>
                            <div className="input-box">
                                <input className="input input-block" type="text"
                                       placeholder="请输入标题, 不超过15字"
                                       value={data.title}
                                       onChange={(e) => this.onchange(e,'title')}/>
                            </div>
                        </label>
                    </div>
                    <div className="item">
                        <label>
                            <div className="for">联系人</div>
                            <div className="input-box">
                                <input className="input input-block"
                                       type="text"
                                       placeholder="请输入姓名"
                                       value={data.contact}
                                       onChange={(e) => this.onchange(e,'contact')}/>
                            </div>
                        </label>
                    </div>
                    <div className="item">
                        <label>
                            <div className="for">联系电话</div>
                            <div className="input-box">
                                <input className="input input-block" type="tel"
                                       placeholder="请输入联系电话"
                                       value={data.mobile}
                                       onChange={(e) => this.onchange(e,'mobile')}/>
                            </div>
                        </label>
                    </div>
                </form>
                <div className="ui-title fn-mt10">
                    <h3 className="text">详细内容</h3>
                </div>
                <form className="ui-form ui-form-textarea">
                    <div className="item">
                        <label>
                            <div className="input-box">
                                <textarea rows="8"
                                          placeholder="请输入详细内容, 200字以内"
                                          value={data.content}
                                          onChange={(e) => this.onchange(e,'content')}/>
                            </div>
                        </label>
                    </div>
                </form>
                <footer className="footer">
                    <a href="javascript:;" className="ui-btn ui-btn-fixed" onClick={(e) => this.onclick(e,(data.id!==null?'update':'add'))}>{data.id!=null?'修改':'发布'}</a>
                </footer>
            </div>
        );
    }

    componentDidMount() {
        let id = this.props.params.id;
        if (id != null) {
            this.detail(id);
            let { data } = this.state;
            data.id = id;
            this.setState({
                data:data
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        let typeProps = nextProps.service.type;
        //console.log(typeProps,"*");
        type = typeProps;
        this.alert(type);

        let detail = nextProps.service.detail.data;
        if(detail!=""){
            let { data } = this.state;
            data.type=detail.type;
            data.title=detail.title;
            data.contact=detail.contact;
            data.mobile=detail.mobile;
            data.content=detail.content;
            this.setState({
                data:data
            });
        }
    }
    /**获取详细信息
     *
     */
    detail(id){
        let { dispatch} = this.props;
        let data = {"informId": id};
        dispatch(detailData(data));
    }

    onchange(e,name){
        let {data} = this.state;
        let text = e.target.value;
        switch (name){
            case 'type':
                data.type = text;
                this.setState({
                    data: data
                });
                break;
            case 'title':
                data.title = text;
                this.setState({
                    data:data
                });
                break;
            case 'contact':
                data.contact = text;
                this.setState({
                    data:data
                });
                break;
            case 'mobile':
                data.mobile = text;
                this.setState({
                    data:data
                });
                break;
            case 'content':
                data.content = text;
                this.setState({
                    data:data
                });
                break;
        }
    }
    onclick(e,name){
        let { dispatch } = this.props;
        let {data} = this.state;
        switch (name){
            case 'add':
                dispatch(addInform(data));
                break;
            case 'update':
                dispatch(updateInform(data));
                break;
        }
        this.alert();

    }
    alert(type){
        let that = this;
        let {id} = this.state.data;
        if(type===1){
            window.toast((id!=null?'修改服务成功!':'发布服务成功!'));
            window.location.href = (id!=null?'./mine.html#/service':'/');
        }else if(type===2){
            window.toast(id!=null?'修改服务失败!':'发布服务失败!');
        }
    }
}