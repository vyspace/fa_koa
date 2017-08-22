'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'zepto';
import Card from './Card/Card';
import PhotoBrowser from './PhotoBrowser';

class CardList extends Component {
    componentWillMount() {
        const { getHomeData } = this.props.homeAction,
            { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction,
            { history } = this.props;
        window.FaKoa.history = history;
        updateHeader({
            type: 'base',
            title: 'FAKOA',
            isBack: false,
            rBtn: null
        });
        updateFooter({ type: 'base', action: 'home' });
        getHomeData();
    }
    componentDidMount() {
        this.eventLayer.addEventListener('click', this.eventHandler.bind(this), false);
    }
    componentDidUpdate() {
        const { scrollTop } = this.props.store.home;
        document.body.scrollTop = scrollTop;
    }
    componentWillUnmount() {
        const { saveScrollTop } = this.props.homeAction,
            { recordOriginal } = this.props.recordAction;
        saveScrollTop(document.body.scrollTop);
        recordOriginal('home');
    }
    eventHandler(e) {
        e.stopPropagation();
        const { data } = this.props.store.home,
            { history } = this.props,
            { saveParams } = this.props.homeAction,
            t = $(e.target);
        if (e.target.tagName === 'IMG' && t.data('tag') === 'thumbnail') {
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
        if (e.target.tagName === 'DIV' && t.data('tag') === 'comment') {
            const ul = t.parents('.card-item'),
                rows = ul.data('index'),
                cTop = this.topCalc(ul.offset().top);
            const param = {
                rows, cTop
            };
            saveParams(param);
            history.push('/comment');
        }
        if (t.data('tag') === 'article') {
            const ul = t.parents('.card-item'),
                aid = t.data('aid'),
                cTop = this.topCalc(ul.offset().top);
            const param = {
                aid, cTop
            };
            saveParams(param);
            history.push('/article');
        }
        if (t.data('tag') === 'link') {
            const link = t.data('link'),
                param = { link };
            saveParams(param);
            history.push('frame');
        }
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
        else {
            let css = {};
            html = data.map((cell, index) => {
                if (index + 1 >= data.length) {
                    css = { marginBottom: 0 };
                }
                return <Card key={cell.id} data={cell} cssStyle={css} index={index} />;
            });
        }
        return (<div ref={(c) => {
            this.eventLayer = c;
        }}
        >{html}</div>);
    }
}

CardList.propTypes = {
    store: PropTypes.object.isRequired,
    homeAction: PropTypes.object.isRequired,
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired,
    recordAction: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default CardList;
