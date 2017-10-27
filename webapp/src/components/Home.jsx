'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'zepto';
import Card from './Card';
import PhotoBrowser from './PhotoBrowser';
import SingleMsg from './SingleMsg';
import { getUser, restore } from '../store/persistence';
import { getScrollTop, setScrollTop, getCompHeadUID } from '../utils/tools';

let _this;

class Home extends Component {
    componentWillMount() {
        const { getHomeList } = this.props.homeAction,
            { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction,
            { history, store } = this.props;
        let _rBtn = null;
        restore(store);
        if(!getUser()) {
            _rBtn = {
                type: 'icon',
                content: 'icon-login',
                tag: '',
                handler: () => {
                    history.push('login');
                }
            };
        }
        updateHeader({
            type: 'base',
            title: 'FAKOA',
            isBack: false,
            rBtn: _rBtn
        });
        updateFooter({ type: 'base', action: 'home', tHistory: history });
        this.init();
        getHomeList(1);
    }
    componentDidMount() {
        this.eventLayer.addEventListener('click', this.eventHandler.bind(this), false);
    }
    componentDidUpdate() {
        const { scrollTop } = this.props.store.home;
        setScrollTop(scrollTop);
    }
    componentWillUnmount() {
        const { saveScrollTop } = this.props.homeAction,
            { recordOrigin } = this.props.recordAction;
        saveScrollTop(getScrollTop());
        recordOrigin('home');
    }
    init() {
        _this = this;
    }
    eventHandler(e) {
        e.stopPropagation();
        const { data } = this.props.store.home,
            { history } = this.props,
            { savePageParams } = this.props.homeAction,
            t = $(e.target),
            tag = t.data('tag');
        switch (tag) {
            case 'thumbnail':
                _this.thumbnail(t, data);
                break;
            case 'comment':
                _this.comment(t, savePageParams, history);
                break;
            case 'article':
                _this.article(t, savePageParams, history);
                break;
            case 'link':
                _this.link(t, savePageParams, history);
                break;
            case 'chead':
                history.push('myhome', getCompHeadUID(e));
                break;
            default:
                break;
        }
    }
    thumbnail(t, data) {
        const ul = t.parents('.card-item'),
            rows = ul.data('index'),
            imgs = ul.find('img'),
            index = t.data('index'),
            photos = data[rows].photos,
            photoArr = [];
        for (let i = 0; i < photos.length; i += 1) {
            const cell = Object.assign({}, photos[i]);
            cell.el = imgs[i];
            photoArr.push(cell);
        }
        PhotoBrowser.init(photoArr, index);
    }
    comment(t, savePageParams, history) {
        const ul = t.parents('.card-item'),
            rows = ul.data('index'),
            cTop = this.topCalc(ul.offset().top);
        const param = {
            rows, cTop
        };
        savePageParams(param);
        history.push('/comment');
    }
    article(t, savePageParams, history) {
        const ul = t.parents('.card-item'),
            aid = t.data('aid'),
            cTop = this.topCalc(ul.offset().top);
        const param = {
            aid, cTop
        };
        savePageParams(param);
        history.push('/article');
    }
    link(t, savePageParams, history) {
        const link = t.data('link'),
            param = { link };
        savePageParams(param);
        history.push('/frame');
    }
    topCalc(oTop) {
        let cTop = 0;
        if(oTop <= 45) {
            cTop = -document.body.scrollTop;
        }
        else {
            const temp = oTop - document.body.scrollTop;
            cTop = Math.ceil(temp - 44);
        }
        return cTop;
    }
    render() {
        const { isFetching, data } = this.props.store.home;
        let html;
        if (isFetching) {
            html = 'loadding';
        }
        else if(data) {
            html = data.dataList.map((cell, index) => <Card key={cell.id} data={cell} index={index} />);
        }
        else {
            html = <SingleMsg msg="网络原因，请稍后再试！" />;
        }
        return (<div ref={(c) => {
            this.eventLayer = c;
        }}
        >{html}</div>);
    }
}

Home.propTypes = {
    store: PropTypes.object.isRequired,
    homeAction: PropTypes.object.isRequired,
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired,
    recordAction: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default Home;
