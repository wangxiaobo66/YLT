/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/24
 */

import React from 'react';
import Upload from '../../../component/Upload/Upload';

export default class Chepihao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {

    }
    render() {
        return(
            <div className="module-add">
                <div className="header">
                    <Upload tip="添加图片" />
                </div>
                <footer className="footer">
                    <a href="javascript:;" className="ui-btn ui-btn-fixed">发布境外码单</a>
                </footer>
            </div>
        );
    }
}