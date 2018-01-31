'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CompHead from './CompHead';

let g;

class Follow extends Component {
    componentWillMount() {
        const { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction,
            { getFollowList } = this.props.followAction,
            { history } = this.props;
        updateHeader({
            type: 'base',
            title: '关注',
            isBack: true,
            tHistory: history,
            rBtn: null
        });
        updateFooter({ type: 'none' });
        getFollowList(1);
        this.init();
    }
    componentWillUnmount() {
        const { recordOrigin } = this.props.recordAction;
        recordOrigin('follow');
    }
    init() {
        g = window.FaKoa;
    }
    render() {
        const { isFetching, data } = this.props.store.follow;
        let html;
        if (isFetching) {
            html = 'loadding';
        }
        else if(data) {
            let _key = '';
            const lis = data.map((cell, index) => {
                _key = `fl${index}`;
                return (<li key={_key} >
                    <CompHead profile={cell.profile} nickname={cell.nickname} subContent="新锐设计师" />
                </li>);
            });
            html = <ul>{lis}</ul>;
        }
        else {
            html = '网络原因，请稍后再试！';
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
    recordAction: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default Follow;
