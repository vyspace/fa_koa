'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

let g;

class Admin extends Component {
    componentWillMount() {
        const { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction,
            { history } = this.props;
        updateHeader({
            type: 'base',
            title: '修改密码',
            isBack: true,
            tHistory: history,
            rBtn: null
        });
        updateFooter({ type: 'none' });
        g = window.FaKoa;
    }
    componentWillUnmount() {
        const { recordOrigin } = this.props.recordAction;
        recordOrigin('admin');
    }
    render() {
        return (
            <div
              ref={(c) => {
                  this.eventLayer = c;
              }}
              className="input-group admin-box"
              style={{ minHeight: g.bodyMinHeight }}
            >
                <ul>
                    <li className="bdr-b">
                        <input type="password" placeholder="旧密码..." />
                    </li>
                    <li className="bdr-b">
                        <input type="password" placeholder="新密码..." />
                    </li>
                    <li className="bdr-b">
                        <input type="password" placeholder="确认密码..." />
                    </li>
                    <li className="pd-t">
                        <input className="func-btn btn-disabled" type="button" value="确定" disabled="disabled" />
                    </li>
                </ul>
            </div>
        );
    }
}

Admin.propTypes = {
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired,
    recordAction: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default Admin;
