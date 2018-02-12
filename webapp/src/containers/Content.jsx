'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import JRoll from 'jroll';
import LongText from '../components/LongText';
import * as HeaderActions from '../actions/header';
import MsgBoard from '../components/MsgBoard';
require('jroll-infinite');

const g = window.FaKoa;

class Content extends Component {
    componentWillMount() {
        const { history } = this.props,
            { updateHeader } = this.props.headerAction;
        updateHeader({
            type: 'base',
            title: 'Content',
            isBack: true,
            theHistory: history,
            rBtn: null
        });
    }
    componentDidMount() {
        const roll = new JRoll('#wrapper', { scrollBarY: true });
        roll.infinite({
            total: 1,
            firstLoad: false,
            blank: true,
            getData: (page, callback, errorCallback) => {
            },
            template: ''
        });
    }
    render() {
        const { history } = this.props;
        const data = {
            content: { a: 1 },
            msgList: [{
                id: 1,
                nickname: 'helloworld',
                profile: '../img/profile.jpg',
                msg: '打发打发打发打发阿迪散发的方法大概说的风格的第三方公司的分公司的',
                time: '刚刚'
            }, {
                id: 2,
                nickname: 'helloworld',
                profile: '../img/profile.jpg',
                msg: '打发打发打发打发阿迪散发的方法大概说的风格的第三方公司的分公司的',
                time: '10小时前'
            }]
        };
        return (<div
          ref={(c) => {
              this.eventLayer = c;
          }}
          className="jroll-wrapper"
          style={{ height: g.bodyMinHeight }}
          id="wrapper"
        >
            <div className="scroller">
                <section className="jroll-infinite-page">
                    <LongText data={data.content} history={history} />
                    <MsgBoard data={data.msgList} />
                </section>
                <div className="jroll-infinite-tip">已加载全部内容</div>
            </div>
        </div>);
    }
}

Content.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Content);
