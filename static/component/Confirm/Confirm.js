/**
 * @file
 * @author jinguangguo
 * @date 2016/1/22
 */

import './Confirm.less';

import React from 'react';
import {Modal, Button} from 'react-bootstrap';

export const Confirm = React.createClass({

    propTypes: {
        show: React.PropTypes.bool,         // 是否显示
        message: React.PropTypes.string,    // 提示文本
        onSure: React.PropTypes.func,       // 点击确定
        onCancel: React.PropTypes.func      // 点击取消
    },

    getDefaultProps() {
        return {
            show: false,
            message: '',
            onSure: null,
            onCancel: null
        }
    },

    // 初始化
    getInitialState() {
        return {

        };
    },

    componentDidMount() {
        let that = this;

        window.eventEmitter.on('component.confirm', function(message, onSure, onCancel) {
            that.setState({
                show: true,
                message: message,
                onSure: onSure,
                onCancel: onCancel
            });
        });
    },

    reset() {
        this.setState({
            show: false,
            onSure: null,
            onCancel: null
        });
    },

    close() {
        if ($.isFunction(this.state.onCancel) === true) {
            this.state.onCancel();
        }
        this.reset();
    },

    ok() {
        if ($.isFunction(this.state.onSure) === true) {
            this.state.onSure();
        }
        this.reset();
    },

    render() {
        return (
            <Modal show={this.state.show} dialogClassName="modal-confirm" onHide={this.close}>
                <Modal.Header>
                    <Modal.Title>提示</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="text">{this.state.message}</div>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="default" onClick={this.close}>取消</Button>
                    <Button bsStyle="success" onClick={this.ok}>确定</Button>
                </Modal.Footer>
            </Modal>
        );
    }
});