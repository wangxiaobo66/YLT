/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/24
 */

import React from 'react';

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
                添加的表单
                <footer className="footer">
                    <a href="javascript:;" className="ui-btn ui-btn-fixed">上传境外码单</a>
                </footer>
            </div>
        );
    }
}