/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/6
 */

import React from 'react';
import {Link} from 'react-router';

const { addInform } = require('./../actions.js');//从actions里拿到方法

let type = "";

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                userId: 16,
                consumerId: 16,
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
        return (
            <div className="module-add fn-mt10">
                <form className="ui-form">
                    <div className="item">
                        <label>
                            <div className="for">服务类型</div>
                            <div className="input-box input-box--select">
                                <select className="ui-select" onChange={(e) => this.onchange(e,'type')}>
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
                    <a href="javascript:;" className="ui-btn ui-btn-fixed" onClick={(e) => this.onclick(e)}>发布</a>
                </footer>
            </div>
        );
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        let typeProps = nextProps.service.type;
        //console.log(typeProps,"*");
        type = typeProps;
        this.alert(type);
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
    onclick(e){
        let { dispatch } = this.props;
        let {data} = this.state;
        dispatch(addInform(data));
        this.alert();
    }
    alert(type){
        let that = this;
        if(type===1){
            window.toast('发布服务成功!',{
                callback(){
                    //window.history.go(-1);
                    that.props.history.push({
                       pathname:'/'
                    });
                }
            })
        }else if(type===2){
            window.toast('发布服务失败!');
        }
    }
}