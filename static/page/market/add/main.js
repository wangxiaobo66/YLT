/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/6
 */

import React from 'react';
import Upload from '../../../component/Upload/Upload';
import {Link} from 'react-router';
import commonService from '../../../js/app/commonService';
import service from '../service';

import {Bottom} from '../../../component/Bottom/Bottom';

export default class AddUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dimList: null,
            portList: null,
            form: {
                imgUrlId:'',
                iconUrl:'',
                imgUrl: '',
                dimensionId: '',
                price: '',
                portId: '',
                locationName: '',
                owner: '',
                mobile: '',

                amount: '',
                referenceAmount: '',
                abrasion: '',
                blue: '',
                mouthEaten: '',
                corrosion: '',
                origin: '',
                inclinedcrack: '0',
                cyclecrack: '0',
                oiled: '0',
                darkpith: '0',
                content: '',

                subscript: 0
            },
            disabled: true
        };
    }
    componentDidMount() {

        let orderId = this.props.params.orderId;

        // 判断是否是修改
        if (orderId) {   // 修改自己
            service.showUnsold({
                unsoldOrderId: orderId
            }).then((rep) => {
                this.state.form = rep.result.data;
                this.checkDisabled();
            });
        }

        // 规格列表
        service.dimList({
            limitStart: 0,
            limitCount: 5
        }).then((rep) => {
            this.setState({
                dimList: rep.result.list
            });
        });

        // 口岸
        commonService.portList().then((rep) => {
            this.setState({
                portList: rep.result.list
            });
        });

    }
    add() {
        let that = this;
        if (this.props.params.orderId) { // 修改
            service.updateUnsold(this.state.form).then((rep) => {
                if (rep.state === 1) {
                    window.toast('修改成功', {
                        callback() {
                            that.props.history.push({
                                pathname: '/'
                            });
                        }
                    });
                } else {
                    window.toast('添加失败, 请稍候重试');
                }
            });
        } else {
            // 添加
            service.addUnsold(this.state.form).then((rep) => {
                if (rep.state === 1) {
                    window.toast('添加成功', {
                        callback() {
                            that.props.history.push({
                                pathname: '/'
                            });
                        }
                    });
                } else {
                    window.toast('添加失败, 请稍候重试');
                }
            });
        }
    }
    checkDisabled(key, event) {
        let disabled = false;
        let form = this.state.form;

        if (key && event) {
            form[key] = event.target.value;
            // 是否订阅
            if (key === 'subscript') {
                form[key] = event.target.checked === true ? 1 : 0;
            }

        }

        if ($.trim(form.imgUrl) === '') {
            disabled = true;
        }

        if ($.trim(form.fileId) === '') {
            disabled = true;
        }

        if ($.trim(form.iconUrl) === '') {
            disabled = true;
        }

        if ($.trim(form.dimensionId) === '') {
            disabled = true;
        }

        if ($.trim(form.price) === '') {
            disabled = true;
        }

        if ($.trim(form.portId) === '') {
            disabled = true;
        }

        if ($.trim(form.locationName) === '') {
            disabled = true;
        }

        if ($.trim(form.owner) === '') {
            disabled = true;
        }

        if ($.trim(form.mobile) === '') {
            disabled = true;
        }

        this.setState({
            disabled: disabled
        });

    }
    onUploadSuccess(imgUrl,fileId,iconUrl) {
        let form = this.state.form;
        form.imgUrl = imgUrl;
        form.fileId = fileId;
        form.iconUrl = iconUrl;
        this.checkDisabled();
    }
    render() {

        let form = this.state.form;

        let dimListHtml = [];
        let dimList;
        let item;

        if (this.state.dimList) {
            if (this.state.dimList.length > 0) {
                dimList = this.state.dimList;
                for (let i = dimList.length - 1; i >= 0; i--) {
                    item = dimList[i];
                    dimListHtml.push(
                        <label className="item">
                            <input name="standard"
                                   value={item.specId}
                                   checked={form.dimensionId == item.specId ? true : false}
                                   onChange={this.checkDisabled.bind(this, 'dimensionId')}
                                   type="radio" />
                            <span className="text">{item.treetypeName} {item.goodstypeName} {item.lengthName}</span>
                        </label>
                    );
                }
            }
        }

        return (
            <div className="module-add">
                {
                    <Upload tip="添加图片"
                            onUploadSuccess={this.onUploadSuccess.bind(this)}
                            imgUrl={form.imgUrl}
                            url="/unsold/filesUpload"/>
                }
                <div className="content">
                    <div className="ui-title">
                        <h3 className="text">选择规格</h3>
                    </div>
                    <div className="info-bd">
                        <div className="ui-radio-group">
                            <ul className="list">
                                {dimListHtml}
                            </ul>
                            <div className="add">
                                <i className="icon icon-plus"></i>
                                <Link className="text" to={{ pathname: '/standard' }}>+添加新规格参数</Link>
                            </div>
                        </div>
                    </div>
                    <form className="ui-form fn-mt10">
                        <div className="item">
                            <label>
                                <div className="for">价格</div>
                                <div className="input-box">
                                    <input className="input input-block"
                                           type="number"
                                           value={this.state.form.price}
                                           onChange={this.checkDisabled.bind(this, 'price')}
                                           placeholder="请输入价格" />
                                </div>
                            </label>
                        </div>
                        <div className="item">
                            <label>
                                <div className="for">目标口岸</div>
                                <div className="input-box input-box--select">
                                    <select className="ui-select"
                                            onChange={this.checkDisabled.bind(this, 'portId')}
                                            value={this.state.form.portId}>
                                        <option value="">请选择</option>
                                        {
                                            this.state.portList !== null ?
                                                this.state.portList.map((item, index) => {
                                                    return <option key={item.id} value={item.id}>{item.name}</option>;
                                                })
                                                :
                                                null
                                        }
                                    </select>
                                </div>
                            </label>
                        </div>
                        <div className="item">
                            <label>
                                <div className="for">货物位置</div>
                                <div className="input-box">
                                    <input className="input input-block"
                                           type="text"
                                           value={this.state.form.locationName}
                                           onChange={this.checkDisabled.bind(this, 'locationName')}
                                           maxLength="100"
                                           placeholder="请输入货物位置" />
                                </div>
                            </label>
                        </div>
                        <div className="item">
                            <label>
                                <div className="for">货主</div>
                                <div className="input-box">
                                    <input className="input input-block"
                                           type="text"
                                           value={this.state.form.owner}
                                           onChange={this.checkDisabled.bind(this, 'owner')}
                                           maxLength="30"
                                           placeholder="请输入货主姓名" />
                                </div>
                            </label>
                        </div>
                        <div className="item">
                            <label>
                                <div className="for">手机号</div>
                                <div className="input-box">
                                    <input className="input input-block"
                                           type="number"
                                           value={this.state.form.mobile}
                                           onChange={this.checkDisabled.bind(this, 'mobile')}
                                           maxLength="11"
                                           placeholder="请输入手机号" />
                                </div>
                            </label>
                        </div>
                    </form>
                    <div className="detail fn-mt10">
                        <div className="ui-title-detail">
                            <span className="text">详细信息</span>
                        </div>
                        <form className="ui-form">
                            <div className="item">
                                <label>
                                    <div className="for">总货量</div>
                                    <div className="input-box">
                                        <input className="input input-block"
                                               type="number"
                                               value={this.state.form.amount}
                                               onChange={this.checkDisabled.bind(this, 'amount')}
                                               placeholder="请输入总货量" />
                                    </div>
                                </label>
                            </div>
                            <div className="item">
                                <label>
                                    <div className="for">参考根数</div>
                                    <div className="input-box">
                                        <input className="input input-block"
                                               type="number"
                                               value={this.state.form.referenceAmount}
                                               onChange={this.checkDisabled.bind(this, 'referenceAmount')}
                                               placeholder="请输入参考根数" />
                                    </div>
                                </label>
                            </div>
                            <div className="item">
                                <label>
                                    <div className="for">新旧</div>
                                    <div className="input-box input-box--select">
                                        <select className="ui-select"
                                                onChange={this.checkDisabled.bind(this, 'abrasion')}
                                                value={this.state.form.abrasion}>
                                            <option value="">请选择新旧</option>
                                            <option value="新材">新材</option>
                                            <option value="部分发黑">部分发黑</option>
                                            <option value="旧材">旧材</option>
                                        </select>
                                    </div>
                                </label>
                            </div>
                            <div className="item">
                                <label>
                                    <div className="for">蓝变</div>
                                    <div className="input-box input-box--select">
                                        <select className="ui-select"
                                                value={this.state.form.blue}
                                                onChange={this.checkDisabled.bind(this, 'blue')}>
                                            <option value="">请选择蓝变</option>
                                            <option value="无蓝变">无蓝变</option>
                                            <option value="个别">个别</option>
                                            <option value="部分">部分</option>
                                            <option value="全蓝">全蓝</option>
                                            <option value="其它">其它</option>
                                        </select>
                                    </div>
                                </label>
                            </div>
                            <div className="item">
                                <label>
                                    <div className="for">虫眼</div>
                                    <div className="input-box input-box--select">
                                        <select className="ui-select"
                                                onChange={this.checkDisabled.bind(this, 'mouthEaten')}
                                                value={this.state.form.mouthEaten}>
                                            <option value="">请选择虫眼</option>
                                            <option value="无虫眼">无虫眼</option>
                                            <option value="个别">个别</option>
                                            <option value="部分">部分</option>
                                            <option value="其它">其它</option>
                                        </select>
                                    </div>
                                </label>
                            </div>
                            <div className="item">
                                <label>
                                    <div className="for">腐朽眼</div>
                                    <div className="input-box input-box--select">
                                        <select className="ui-select"
                                                onChange={this.checkDisabled.bind(this, 'corrosion')}
                                                value={this.state.form.corrosion}>
                                            <option value="">请选择腐朽眼</option>
                                            <option value="腐朽">腐朽</option>
                                            <option value="无腐朽">无腐朽</option>
                                            <option value="个别">个别</option>
                                            <option value="部分">部分</option>
                                            <option value="其它">其它</option>
                                        </select>
                                    </div>
                                </label>
                            </div>
                            <div className="item">
                                <label>
                                    <div className="for">产地</div>
                                    <div className="input-box">
                                        <input className="input input-block"
                                               type="text"
                                               onChange={this.checkDisabled.bind(this, 'origin')}
                                               value={this.state.form.origin}
                                               maxLength="30"
                                               placeholder="请输入产地" />
                                   </div>
                                </label>
                            </div>
                            <div className="item">
                                <label>
                                    <div className="for">斜裂</div>
                                    <div className="input-box input-box--select">
                                        <select className="ui-select"
                                                onChange={this.checkDisabled.bind(this, 'inclinedcrack')}
                                                value={this.state.form.inclinedcrack}>
                                            <option value="0">无</option>
                                            <option value="1">有</option>
                                        </select>
                                    </div>
                                </label>
                            </div>
                            <div className="item">
                                <label>
                                    <div className="for">环裂</div>
                                    <div className="input-box input-box--select">
                                        <select className="ui-select"
                                                onChange={this.checkDisabled.bind(this, 'cyclecrack')}
                                                value={this.state.form.cyclecrack}>
                                            <option value="0">无</option>
                                            <option value="1">有</option>
                                        </select>
                                    </div>
                                </label>
                            </div>
                            <div className="item">
                                <label>
                                    <div className="for">抽油</div>
                                    <div className="input-box input-box--select">
                                        <select className="ui-select"
                                                onChange={this.checkDisabled.bind(this, 'oiled')}
                                                value={this.state.form.oiled}>
                                            <option value="0">无</option>
                                            <option value="1">有</option>
                                        </select>
                                    </div>
                                </label>
                            </div>
                            <div className="item">
                                <label>
                                    <div className="for">黑心</div>
                                    <div className="input-box input-box--select">
                                        <select className="ui-select"
                                                onChange={this.checkDisabled.bind(this, 'darkpith')}
                                                value={this.state.form.darkpith}>
                                            <option value="0">无</option>
                                            <option value="1">有</option>
                                        </select>
                                    </div>
                                </label>
                            </div>
                        </form>
                        <div className="ui-title fn-mt10">
                            <h3 className="text">具体描述</h3>
                        </div>
                        <form className="ui-form ui-form-textarea">
                            <div className="item">
                                <label>
                                    <div className="input-box">
                                        <textarea className="textarea"
                                                  rows="8"
                                                  maxLength="200"
                                                  onChange={this.checkDisabled.bind(this, 'content')}
                                                  value={this.state.form.content}
                                                  placeholder="请输入具体描述, 200字以内" />
                                    </div>
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="ui-check-tip fn-mt10">
                    <label>
                        <div className="tip-box">
                            <input type="checkbox"
                                   value={this.state.form.subscript}
                                   onChange={this.checkDisabled.bind(this, 'subscript')} />
                            <i className="icon icon-o-check"></i>
                            <span className="text">订阅匹配求购信息</span>
                        </div>
                    </label>
                </div>
                <footer className="footer">
                    <a href="javascript:;"
                       disabled={this.state.disabled}
                       onClick={this.add.bind(this)}
                       className="ui-btn ui-btn-fixed">
                        {
                            this.props.params.orderId ? '修改未售信息' : '发布未售信息'
                        }
                    </a>
                </footer>
                <Bottom />
            </div>
        );
    }
}