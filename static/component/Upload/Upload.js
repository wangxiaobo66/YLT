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
            let imgUrl;
            if (+rep.state === 1) {
                imgUrl = rep.result.files[0].url;
                this.setState({
                    imgUrl: imgUrl
                });
                this.props.onUploadSuccess.call(null, imgUrl);
            }
        });
    }
    reset() {
        this.setState({
            imgUrl: ''
        });
        if (typeof this.props.onUploadSuccess === 'function') {
            this.props.onUploadSuccess.call(null, '');
        }
    }
    render() {
        return (
            <div className="Upload-component">
                <div className="logo">
                    <div className="logo-box">
                        <div className="info-box">
                            {
                                this.state.imgUrl ?
                                    <div className="info">
                                        <img src={this.state.imgUrl} width="100%" height="100%" alt=""/>
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
    onUploadSuccess: React.PropTypes.func.isRequired   // 上传成功回调
};

Upload.defaultProps = {
    tip: '',
    url: '',
    onUploadSuccess: null,
    imgUrl: ''
};