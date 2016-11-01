/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/30
 */

import './VerifyCode.scss';
import React from 'react';

import service from '../../service';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeId: null,
            time: 60,
            text: '发送验证码'
        };
    }
    componentDidMount() {

    }
    sendCode() {
        this.setState({
            isSending: true
        });

        setTime.call(this);
        this.state.timeId = setInterval(() => {
            setTime.call(this);
        }, 1000);

        function setTime() {
            let time = this.state.time;
            if (time <= 0) {
                clearInterval(this.state.timeId);
                this.setState({
                    timeId: null,
                    time: 3,
                    text: '发送验证码'
                });
                return;
            }
            time = time - 1;
            this.setState({
                time: time,
                text: time + 's后重新发送'
            })
        }

        service.sendVerifyCode(this.props.mobile).then((rep) => {
            window.toast('发送成功');
        });
    }

    render() {
        return (
            <a href="javascript:;"
               onClick={this.sendCode.bind(this)}
               disabled={this.state.timeId !== null}
               className="ui-btn ui-btn-default btn-code">{this.state.text}</a>
        );
    }
}

Header.propTypes = {
    mobile: React.PropTypes.string
};

Header.defaultProps = {
    mobile: ''
};