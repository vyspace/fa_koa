'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

let g;

class Register extends Component {
    componentWillMount() {
        const { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction,
            { history } = this.props;
        updateHeader({
            type: 'base',
            title: '注册',
            isBack: true,
            tHistory: history,
            rBtn: null
        });
        updateFooter({ type: 'none' });
        this.init();
    }
    componentWillUnmount() {
        const { recordOrigin } = this.props.recordAction;
        recordOrigin('photoalbum');
    }
    init() {
        g = window.FaKoa;
    }
    render() {
        return (
            <div
              ref={(c) => {
                  this.eventLayer = c;
              }}
              className="login"
              style={{ minHeight: g.bodyMinHeight }}
            >
                <ul className="input-group login-can">
                    <li className="bdr-b">
                        <input type="text" placeholder="邮箱" />
                    </li>
                    <li className="password bdr-b">
                        <input type="password" placeholder="密码" />
                    </li>
                    <li className="pd-t">
                        <input type="button" className="func-btn btn-disabled" disabled="disabled" defaultValue="注册" />
                    </li>
                </ul>
            </div>
        );
    }
}

Register.propTypes = {
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired,
    recordAction: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default Register;
