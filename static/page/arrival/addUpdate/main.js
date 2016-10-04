/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/24
 */

import React from 'react';
import Upload from '../../../component/Upload/Upload';

export default class AddUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSlide: true
        };
    }
    toggleSlide() {
        this.setState({
            isSlide: !this.state.isSlide
        });
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className="module-add">
                <Upload tip="添加图片" />
                <div className="content">
                    <form className="ui-form info-tp">
                        <div className="item">
                            <label>
                                <div className="for">车皮号</div>
                                <div className="input-box">
                                    <input className="input input-block" type="text"
                                           placeholder="请输入车皮号" />
                                </div>
                            </label>
                        </div>
                    </form>
                    <div className="ui-title">
                        <h3 className="text">选择规格</h3>
                    </div>
                    <div className="info-bd">
                        <ul className="list">
                            <li className="item">
                                <input type="radio" />
                                <span className="text">2.5米&nbsp;樟子松&nbsp;原木&nbsp;13中选材</span>
                            </li>
                        </ul>
                        <div className="add">
                            <i className="icon icon-plus"></i>
                            <span className="text">添加新规格参数</span>
                        </div>
                    </div>
                    <form className="ui-form info-ft">
                        <div className="item">
                            <label>
                                <div className="for">价格</div>
                                <div className="input-box">
                                    <input className="input input-block" type="text" placeholder="请输入价格" />
                                </div>
                            </label>
                        </div>
                        <div className="item">
                            <label>
                                <div className="for">目标口岸</div>
                                <div className="input-box input-box--select">
                                    <select className="ui-select">
                                        <option value="请选择店铺类型">请选择店铺类型</option>
                                        <option value="1">木材销售</option>
                                        <option value="2">机械设备</option>
                                    </select>
                                </div>
                            </label>
                        </div>
                        <div className="item">
                            <label>
                                <div className="for">当前位置</div>
                                <div className="input-box">
                                    <input className="input input-block" type="text" placeholder="请输入货物位置" />
                                </div>
                            </label>
                        </div>
                        <div className="item">
                            <label>
                                <div className="for">货主</div>
                                <div className="input-box">
                                    <input className="input input-block" type="text" placeholder="请输入货主姓名" />
                                </div>
                            </label>
                        </div>
                        <div className="item">
                            <label>
                                <div className="for">手机号</div>
                                <div className="input-box">
                                    <input className="input input-block" type="text" placeholder="请输入手机号" />
                                </div>
                            </label>
                        </div>
                    </form>
                    <div className="detail">
                        <div className="title">
                            <span className="text">详细信息</span>
                            {/*
                                this.state.isSlide === true ?
                                    <i className="icon icon-slide-up" onClick={this.toggleSlide.bind(this)}></i>
                                    :
                                    <i className="icon icon-slide-down" onClick={this.toggleSlide.bind(this)}></i>
                            */}
                        </div>
                        <form className="ui-form">
                            <div className="item">
                                <label>
                                    <div className="for">总货量</div>
                                    <div className="input-box">
                                        <input className="input input-block" type="text"
                                               placeholder="120-200立方米" />
                                    </div>
                                </label>
                            </div>
                            <div className="item">
                                <label>
                                    <div className="for">参考根数</div>
                                    <div className="input-box">
                                        <input className="input input-block" type="text"
                                               placeholder="120-29999" />
                                    </div>
                                </label>
                            </div>
                            <div className="item">
                                <label>
                                    <div className="for">新旧</div>
                                    <div className="input-box input-box--select">
                                        <select className="ui-select">
                                            <option value="请选择新旧">请选择新旧</option>
                                            <option value="1">新材</option>
                                            <option value="2">部分发黑</option>
                                            <option value="3">旧材</option>
                                        </select>
                                    </div>
                                </label>
                            </div>
                            <div className="item">
                                <label>
                                    <div className="for">蓝变</div>
                                    <div className="input-box input-box--select">
                                        <select className="ui-select">
                                            <option value="请选择蓝变">请选择蓝变</option>
                                            <option value="1">无蓝变</option>
                                            <option value="2">个别</option>
                                            <option value="3">部分</option>
                                            <option value="4">全蓝</option>
                                            <option value="5">其它</option>
                                        </select>
                                    </div>
                                </label>
                            </div>
                            <div className="item">
                                <label>
                                    <div className="for">虫眼</div>
                                    <div className="input-box input-box--select">
                                        <select className="ui-select">
                                            <option value="请选择虫眼">请选择虫眼</option>
                                            <option value="1">无虫眼</option>
                                            <option value="2">个别</option>
                                            <option value="3">部分</option>
                                            <option value="5">其它</option>
                                        </select>
                                    </div>
                                </label>
                            </div>
                            <div className="item">
                                <label>
                                    <div className="for">腐朽眼</div>
                                    <div className="input-box input-box--select">
                                        <select className="ui-select">
                                            <option value="请选择腐朽眼">请选择腐朽眼</option>
                                            <option value="1">腐朽</option>
                                            <option value="2">无腐朽</option>
                                            <option value="3">个别</option>
                                            <option value="4">部分</option>
                                            <option value="5">其它</option>
                                        </select>
                                    </div>
                                </label>
                            </div>
                            <div className="item">
                                <label>
                                    <div className="for">产地</div>
                                    <div className="input-box input-box--select">
                                        <select className="ui-select">
                                            <option value="">请选择产地</option>
                                            <option value="1">满洲里</option>
                                            <option value="2">缨芬河</option>
                                            <option value="2">二连浩特</option>
                                            <option value="2">其他</option>
                                        </select>
                                    </div>
                                </label>
                            </div>
                            <div className="item-two">
                                <div className="item">
                                    <label>
                                        <div className="for">斜裂</div>
                                        <div className="input-box input-box--select">
                                            <select className="ui-select">
                                                <option value="1">无</option>
                                                <option value="2">有</option>
                                            </select>
                                        </div>
                                    </label>
                                </div>
                                <div className="item">
                                    <label>
                                        <div className="for">环裂</div>
                                        <div className="input-box input-box--select">
                                            <select className="ui-select">
                                                <option value="1">无</option>
                                                <option value="2">有</option>
                                            </select>
                                        </div>
                                    </label>
                                </div>
                                <div className="item">
                                    <label>
                                        <div className="for">抽油</div>
                                        <div className="input-box input-box--select">
                                            <select className="ui-select">
                                                <option value="1">无</option>
                                                <option value="2">有</option>
                                            </select>
                                        </div>
                                    </label>
                                </div>
                                <div className="item">
                                    <label>
                                        <div className="for">黑心</div>
                                        <div className="input-box input-box--select">
                                            <select className="ui-select">
                                                <option value="1">无</option>
                                                <option value="2">有</option>
                                            </select>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </form>
                        <div className="ui-title fn-mt10">
                            <h3 className="text">具体描述</h3>
                        </div>
                        <form className="ui-form ui-form-textarea">
                            <div className="item">
                                <label>
                                    <div className="input-box">
                                        <textarea rows="8" placeholder="请输入具体描述, 200字以内" />
                                    </div>
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
                <footer className="footer">
                    <a href="javascript:;" className="ui-btn ui-btn-fixed">发布境外码单</a>
                </footer>
            </div>
        );
    }
}