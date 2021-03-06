'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as HeaderActions from '../actions/header';

const g = window.FaKoa;

class EditMsg extends Component {
    componentWillMount() {
        const { history } = this.props,
            { updateHeader } = this.props.headerAction;
        updateHeader({
            type: 'base',
            title: 'Edit Message',
            isBack: true,
            theHistory: history,
            rBtn: {
                type: 'icon',
                content: 'icn-send',
                handler: () => {
                    this.send();
                }
            }
        });
    }
    render() {
        return (<div
          ref={(c) => {
              this.eventLayer = c;
          }}
          style={{ height: g.bodyMinHeight }}
        >
            <ul className="msg-box msg-box-height">
                <li className="area f1"><textarea maxLength="150" placeholder="写留言..." /></li>
                <li className="tip">留言字数: 150</li>
            </ul>
        </div>);
    }
}

EditMsg.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(EditMsg);
