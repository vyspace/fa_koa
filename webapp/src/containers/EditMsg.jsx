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
            title: 'Write Message',
            isBack: true,
            theHistory: history,
            rBtn: {
                type: 'txt',
                content: '发送',
                handler: () => {
                    this.send();
                }
            }
        });
    }
    render() {
        const bh = `${g.bodyWidth - g.headerHeight}px`;
        return (<div
          ref={(c) => {
              this.eventLayer = c;
          }}
          className="edit-msg"
          style={{ height: g.bodyMinHeight }}
        >
            <textarea style={{ height: bh }} placeholder="写留言..." />
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
