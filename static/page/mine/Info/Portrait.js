/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/5
 */

import React from 'react';
import {Link} from 'react-router';
import Upload from '../../../component/Upload/Upload';
import mixins from './mixins';
import service from '../service';

export default React.createClass({
    mixins: [mixins],
    /**
     * 初始化
     */
    getInitialState() {
        return {
            disabled: true,
            form: {
                headimgurl: ''
            }
        };
    },
    componentDidMount() {

    },
    checkDisabled(key, event) {
        let disabled = false;
        let form = this.state.form;

        if (key && event) {
            form[key] = event.target.value;
        }

        if ($.trim(form.headimgurl) === '') {
            disabled = true;
        }

        this.setState({
            disabled: disabled
        });

    },
    sure() {
        let that = this;
        service.update(this.state.form).then((rep) => {
            window.toast('修改成功', {
                callback() {
                    that.props.history.push({
                        pathname: '/info'
                    });
                }
            });

        });
    },
    onUploadSuccess(imgUrl) {
        let form = this.state.form;
        form.headimgurl = imgUrl;
        this.checkDisabled();
    },
    render() {
        return (
            <div className="module-info-detail">
                <Upload tip="上传图片"
                        onUploadSuccess={this.onUploadSuccess.bind(this)}
                        url="/user/filesUpload" />
                <div className="ui-btn-groups">
                    <a href="javascript:;"
                       disabled={this.state.disabled === true}
                       onClick={this.sure.bind(this)}
                       className="ui-btn ui-btn-confirm">确定</a>
                    <a href="javascript:;"
                       className="ui-btn ui-btn-default"
                       onClick={this.goBack}>取消</a>
                </div>
            </div>
        );
    }
});
