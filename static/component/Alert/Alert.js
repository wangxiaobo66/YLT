/**
 * @file
 * @author jinguangguo
 * @date 2016/1/18
 */

import './Alert.scss';

import React from 'react';
import {Modal, Button} from 'react-bootstrap';

export const Alert = React.createClass({

    propTypes: {
        show: React.PropTypes.bool,         // 是否显示
        message: React.PropTypes.string,     // 提示文本
        onSure: React.PropTypes.func        // 点击确定
    },

    getDefaultProps() {
        return {
            show: false,
            message: '',
            onSure: null
        }
    },

    // 初始化
    getInitialState() {
        return {

        };
    },

    componentDidMount() {
        let that = this;

        window.eventEmitter.on('component.alert', function(message, onSure) {
            that.setState({
                show: true,
                message: message,
                onSure: onSure
            });
        });

    },

    close() {
        if ($.isFunction(this.state.onSure) === true) {
            this.state.onSure();
        }

        // 重置
        this.setState({
            show: false,
            onSure: null
        });
    },

    render() {
        return (
            <Modal show={this.state.show} dialogClassName="modal-alert">
                <Modal.Header>
                    <Modal.Title>提示</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="text">{this.state.message}</div>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="success" onClick={this.close}>确定</Button>
                </Modal.Footer>
            </Modal>
        );
    }
});
