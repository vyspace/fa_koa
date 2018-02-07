'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import JRoll from 'jroll';
import HomeCard from '../components/HomeCard';
import HomeMask from '../components/HomeMask';
import * as HomeActions from '../actions/home';
import * as FooterActions from '../actions/footer';
import * as HeaderActions from '../actions/header';
require('jroll-infinite');

const g = window.FaKoa,
    HeadHeight = g.fontSize * 2.51,
    BodyHeight = `${window.innerHeight - HeadHeight}px`,
    HomePadding = `${g.fontSize * 0.75}px`;

class Home extends Component {
    componentWillMount() {
        this.init();
    }
    componentDidMount() {
        const roll = new JRoll('#wrapper', { scrollBarY: true });
        roll.infinite({
            total: 2,
            firstLoad: false,
            hideImg: true,
            getData: (page, callback, errorCallback) => {
                this.ajax({
                    url: '',
                    success: (data) => {
                        callback(data);
                    },
                    error: () => {
                        errorCallback();
                    }
                });
            },
            template: `<div class="home-card"><div class="item">
                <div class="wrap">
                    <div class="title" data-tag="content">{{=_obj.title}}</div>
                </div></div>
            </div>`
        });
        this.eventLayer.addEventListener('click', this.eventHandler, true);
    }
    init() {

    }
    eventHandler(e) {
        e.stopPropagation();
        const t = $(e.target);
        const tag = t.data('tag'),
            cid = t.data('cid');
        switch(tag) {
            case 'content':
                alert(cid);
                break;
            default:
                break;
        }
    }
    ajax(parms) {
        const data = [{
            id: 1,
            title: '这是题目哈哈哈这是题目哈哈哈',
            src: 'http://7qna1s.com1.z0.glb.clouddn.com/0.jpg'
        }, {
            id: 2,
            title: '这是题目哈哈哈这是题目哈哈哈',
            src: 'http://7qna1s.com1.z0.glb.clouddn.com/1.jpg'
        }, {
            id: 3,
            title: '这是题目哈哈哈这是题目哈哈哈',
            src: 'http://7qna1s.com1.z0.glb.clouddn.com/2.jpg'
        }, {
            id: 4,
            title: '这是题目哈哈哈这是题目哈哈哈',
            src: 'http://7qna1s.com1.z0.glb.clouddn.com/3.jpg'
        }, {
            id: 5,
            title: '这是题目哈哈哈这是题目哈哈哈',
            src: 'http://7qna1s.com1.z0.glb.clouddn.com/4.jpg'
        }, {
            id: 6,
            title: '这是题目哈哈哈这是题目哈哈哈',
            src: 'http://7qna1s.com1.z0.glb.clouddn.com/5.jpg'
        }, {
            id: 7,
            title: '这是题目哈哈哈这是题目哈哈哈',
            src: 'http://7qna1s.com1.z0.glb.clouddn.com/6.jpg'
        }];
        parms.page = 1;
        parms.success(data);
    }
    render() {
        const data = [{
            id: 1,
            title: '这是题目哈哈哈这是题目哈哈哈',
            src: 'http://7qna1s.com1.z0.glb.clouddn.com/0.jpg'
        }, {
            id: 2,
            title: '这是题目哈哈哈这是题目哈哈哈',
            src: 'http://7qna1s.com1.z0.glb.clouddn.com/9.jpg'
        }, {
            id: 3,
            title: '这是题目哈哈哈这是题目哈哈哈',
            src: 'http://7qna1s.com1.z0.glb.clouddn.com/2.jpg'
        }, {
            id: 4,
            title: '这是题目哈哈哈这是题目哈哈哈',
            src: 'http://7qna1s.com1.z0.glb.clouddn.com/3.jpg'
        }, {
            id: 5,
            title: '这是题目哈哈哈这是题目哈哈哈',
            src: 'http://7qna1s.com1.z0.glb.clouddn.com/4.jpg'
        }, {
            id: 6,
            title: '这是题目哈哈哈这是题目哈哈哈',
            src: 'http://7qna1s.com1.z0.glb.clouddn.com/5.jpg'
        }, {
            id: 7,
            title: '这是题目哈哈哈这是题目哈哈哈',
            src: 'http://7qna1s.com1.z0.glb.clouddn.com/6.jpg'
        }];
        const user = {
            nickname: 'aaa'
        };
        const html = data.map(cell => <HomeCard key={cell.id} data={cell} />);
        return (<div
          ref={(c) => {
              this.eventLayer = c;
          }}
          className="jroll-wrapper"
          style={{ height: BodyHeight, top: HeadHeight }}
          id="wrapper"
        >
            <div className="scroller" style={{ paddingTop: HomePadding }}>
                <section className="jroll-infinite-page">{html}</section>
                <div className="jroll-infinite-tip">已加载全部内容</div>
            </div>
            <HomeMask data={user} />
        </div>);
    }
}

Home.propTypes = {
    store: PropTypes.object.isRequired,
    homeAction: PropTypes.object.isRequired,
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

function mapStateToProps(store) {
    return {
        store
    };
}

function mapDispatchToProps(dispatch) {
    const headerAction = bindActionCreators(HeaderActions, dispatch),
        footerAction = bindActionCreators(FooterActions, dispatch),
        homeAction = bindActionCreators(HomeActions, dispatch);
    return {
        headerAction,
        footerAction,
        homeAction
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
