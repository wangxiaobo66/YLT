/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/3
 */

import './Upload.scss';
import React from 'react';

import util from '../../js/app/util';

export default class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrl: this.props.imgUrl || ''
        }
    }
    componentDidMount() {

    }
    fileChange() {
        let input = util.fileUpload(this.refs.file, this.props.url).then(rep => {
            console.log(rep);
            let imgUrl,iconUrl,fileId;
            if (+rep.state === 1) {
                imgUrl = rep.result.files[0].url;
                iconUrl = rep.result.files[0].iconUrl;
                fileId = rep.result.files[0].id;
                this.setState({
                    imgUrl: imgUrl,
                    fileId:fileId,
                    iconUrl:iconUrl
                });
                this.props.onUploadSuccess.call(null, imgUrl, fileId, iconUrl);
            }
        });
    }
    reset() {
        this.props.imgUrl = '';
        this.setState({
            imgUrl: ''
        });
        if (typeof this.props.onUploadSuccess === 'function') {
            this.props.onUploadSuccess.call(null, '');
        }
    }
    render() {
        this.state.imgUrl = this.state.imgUrl || this.props.imgUrl;
        return (
            <div className="Upload-component">
                <div className="logo">
                    <div className="logo-box">
                        <div className="info-box">
                            {
                                this.state.imgUrl ?
                                    <div className="info">
                                        <img src={this.state.imgUrl} width="70" height="70" alt=""/>
                                        <div className="info-close" onClick={this.reset.bind(this)}>
                                            &times;
                                        </div>
                                    </div>
                                    :
                                    <div className="info">
                                        <p className="icon-box">
                                            <i className="icon icon-o-plus"></i>
                                        </p>
                                        <p className="info-tip">{this.props.tip}</p>
                                    </div>
                            }
                            {
                                this.state.imgUrl ?
                                    null
                                    :
                                    <input type="file"
                                           ref="file"
                                           onChange={this.fileChange.bind(this)}
                                           multiple="multiple" />
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Upload.propTypes = {
    tip: React.PropTypes.string,    // 提示
    url: React.PropTypes.string.isRequired,     // 接口url
    onUploadSuccess: React.PropTypes.func.isRequired,   // 上传成功回调
    imgUrl: React.PropTypes.string
};

Upload.defaultProps = {
    tip: '',
    url: '',
    onUploadSuccess: null,
    imgUrl: ''
};