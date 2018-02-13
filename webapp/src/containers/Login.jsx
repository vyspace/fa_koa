'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as HeaderActions from '../actions/header';

const g = window.FaKoa;
let _this;

class Login extends Component {
    componentWillMount() {
        const { history } = this.props,
            { updateHeader } = this.props.headerAction;
        this.init();
        updateHeader({
            type: 'base',
            title: 'Login',
            isBack: true,
            theHistory: history,
            rBtn: null
        });
    }
    componentDidMount() {
        this.eventLayer.addEventListener('click', this.eventHandler, true);
    }
    init() {
        _this = this;
    }
    eventHandler(e) {
        const { history } = _this.props,
            t = $(e.target),
            tag = t.data('tag');
        switch(tag) {
            case 'text':
                t.focus();
                break;
            case 'btn':
                alert('sure');
                break;
            case 'forget':
                history.push('forget');
                break;
            case 'reg':
                history.push('register');
                break;
            default:
                break;
        }
    }
    render() {
        return (<div
          ref={(c) => {
              this.eventLayer = c;
          }}
          className="flex fcm"
          style={{ height: g.bodyMinHeight }}
        >
            <ul className="login-box potr-mid">
                <li className="text"><input type="text" placeholder="邮箱" data-tag="text" /></li>
                <li className="text"><input type="text" placeholder="密码" data-tag="text" /></li>
                <li className="btn"><input type="button" value="确定" data-tag="btn" /></li>
                <li className="link clr">
                    <div className="fl fm" data-tag="forget">忘记密码</div>
                    <div className="fr fem" data-tag="reg">注册</div>
                </li>
            </ul>
        </div>);
    }
}

Login.propTypes = {
    history: PropTypes.object.isRequired,
    headerAction: PropTypes.object.isRequired
};

function mapStateToProps(store) {
    return { store };
}

function mapDispatchToProps(dispatch) {
    return {
        headerAction: bindActionCreators(HeaderActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
