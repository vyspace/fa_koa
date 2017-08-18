'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CompHead from './CompHead';

let g;

class Follow extends Component {
    componentWillMount() {
        const { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction,
            { getFollowData } = this.props.followAction;
        updateHeader({
            type: 'base',
            title: '关注',
            isBack: true,
            rBtn: null
        });
        updateFooter({ type: 'none' });
        getFollowData(1);
        this.init();
    }
    init() {
        g = window.FaKoa;
    }
    render() {
        const { follow } = this.props.store;
        let html;
        if (follow.isFetching) {
            html = 'loadding';
        }
        else {
            const lis = follow.data.map((cell) => (<li>
                    <CompHead profile={cell.profile} nickname={cell.nickname} dateTime={cell.dateTime} />
                </li>));
            html = <ul>{lis}</ul>;
        }
        return (
            <div
              ref={(c) => {
                  this.eventLayer = c;
              }}
              className="follow"
              style={{ minHeight: g.bodyMinHeight }}
            >
                {html}
            </div>
        );
    }
}

Follow.propTypes = {
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired,
    followAction: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
};

export default Follow;
