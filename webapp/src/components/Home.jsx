'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import $ from 'zepto';
import Card from './Card';
import PhotoBrowser from './PhotoBrowser';
import SingleMsg from './SingleMsg';
import { getUser, restore } from '../store/persistence';
import { getScrollTop, setScrollTop, getCompHeadUID } from '../utils/tools';

let g,
    _this,
    dataRender,
    $body,
    $tipLayer,
    pagerNumber,
    loadDataTip,
    bodyScrollHeight,
    bodyDiffHeight,
    totalPage,
    totalRecord;

class Home extends Component {
    componentWillMount() {
        const { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction,
            { history } = this.props;
        let _rBtn = null;
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
    }
    componentDidMount() {
        this.eventLayer.addEventListener('click', this.eventHandler, true);
        window.addEventListener('scroll', this.scrollHandler, true);
    }
    componentDidUpdate() {
        const { scrollTop } = this.props.store.home;
        if(dataRender) {
            setScrollTop(scrollTop);
            this.initObj();
            dataRender = false;
        }
    }
    componentWillUnmount() {
        const { recordOrigin } = this.props.recordAction,
            { saveScrollTop } = this.props.homeAction;
        saveScrollTop(getScrollTop());
        window.removeEventListener('scroll', this.scrollHandler, true);
        recordOrigin('home');
    }
    init() {
        const { store } = this.props,
            { getHomeList } = this.props.homeAction;
        g = window.FaKoa;
        _this = this;
        dataRender = false;
        loadDataTip = true;
        pagerNumber = 1;
        totalRecord = 0;
        totalPage = 0;
        if(g.isFresh) {
            restore(store);
            getHomeList({ uid: g.uid, idx: pagerNumber });
            g.isFresh = false;
        }
    }
    initObj() {
        $body = $(document.body);
        bodyDiffHeight = this.calcDiffHeight();
        $tipLayer = $(this.tipLayer);
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
    calcDiffHeight() {
        bodyScrollHeight = $body.get(0).scrollHeight;
        return bodyScrollHeight - $body.height();
    }
    scrollHandler(e) {
        e.stopPropagation();
        if(loadDataTip && getScrollTop() / bodyDiffHeight >= 0.95) {
            loadDataTip = false;
            setTimeout(() => {
                $tipLayer.html('正在加载数据...').css({ display: '' });
                setScrollTop(bodyScrollHeight);
                if(pagerNumber <= totalPage) {
                    pagerNumber += 1;
                }
                const param = {
                    uid: g.uid,
                    idx: pagerNumber,
                    rows: totalRecord
                };
                _this.props.homeAction.updateHomeList(param, (json) => {
                    const { dataList } = json.data;
                    if(dataList && dataList.length > 0) {
                        const html = dataList.map((cell, index) => <Card key={cell.id} data={cell} index={index} />),
                           _div = document.createElement('div');
                        ReactDOM.render(<div>{html}</div>, _div, () => {
                            setTimeout(() => {
                                $tipLayer.css({ display: 'none' });
                                $tipLayer.before($(_div.firstChild).children());
                                bodyDiffHeight = _this.calcDiffHeight();
                                loadDataTip = true;
                            }, 500);
                        });
                    }
                    else {
                        $tipLayer.html('数据已全部加载');
                    }
                }, () => {
                    $tipLayer.html('数据出错，请刷新页面 !');
                });
               // _this.props.homeAction.updateHomePager(param);
            }, 1000);
        }
    }
    render() {
        const { isFetching, data } = this.props.store.home;
        let html;
        if (isFetching) {
            html = 'loadding';
        }
        else if(data && data.dataList.length > 0) {
            html = data.dataList.map((cell, index) => <Card key={cell.id} data={cell} index={index} />);
            totalRecord = data.totalRecord;
            totalPage = data.totalPage;
            html.push(<div
              ref={(c) => {
                  this.tipLayer = c;
              }}
              key="tip"
              className="pager-tip"
              style={{ display: 'none' }}
            />);
            dataRender = true;
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
