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
    loadDataTip,
    bodyScrollHeight,
    bodyDiffHeight,
    totalPage,
    totalRecord,
    cIndex;

class Home extends Component {
    componentWillMount() {
        const { history, store } = this.props,
            { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction,
            { getHomeList } = this.props.homeAction;
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
        if(g.isFresh) {
            getHomeList({ uid: g.uid, idx: store.home.pageIndex });
            g.isFresh = false;
        }
    }
    componentDidMount() {alert(2)
        this.eventLayer.addEventListener('click', this.eventHandler, true);
        window.addEventListener('scroll', this.scrollHandler, true);
    }
    shouldComponentUpdate(props) {
        const { home } = props.store;
        if(!home.isFetching && home.data) {
            return true;
        }
        else {
            return false;
        }
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
        g = window.FaKoa;
        _this = this;
        dataRender = false;
        loadDataTip = true;
        totalRecord = 0;
        totalPage = 0;
        cIndex = 0;
    }
    initObj() {
        $body = $(document.body);
        $tipLayer = $(this.tipLayer);
        bodyDiffHeight = this.calcDiffHeight();
    }
    eventHandler(e) {
        const { data } = _this.props.store.home,
            { history } = _this.props,
            { savePageParams } = _this.props.homeAction,
            t = $(e.target),
            tag = t.data('tag');
        if(!tag || tag !== 'like') {
            e.stopPropagation();
        }
        switch (tag) {
            case 'thumbnail':
                _this.thumbnail(t, data.dataList);
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
                const { store, homeAction } = _this.props;
                $tipLayer.html('正在加载数据...').css({ display: '' });
                setScrollTop(bodyScrollHeight);
                let pagerNumber = store.home.pageIndex;
                if(pagerNumber <= totalPage) {
                    pagerNumber += 1;
                    homeAction.saveHomePageIndex(pagerNumber);
                }
                const param = {
                    uid: g.uid,
                    idx: pagerNumber,
                    rows: totalRecord
                };
                _this.props.homeAction.updateHomeList(param, (json) => {
                    const { dataList } = json.data;
                    if(dataList && dataList.length > 0) {
                        let idx = 0;
                        const html = dataList.map((cell, index) => {
                                idx = cIndex + index + 1;
                                return <Card key={cell.id} data={cell} index={idx} />;
                            }),
                            _div = document.createElement('div');
                        cIndex = idx;
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
            }, 1000);
        }
    }
    render() {alert(33)
        const { isFetching, data } = this.props.store.home;
        let html;
        if (isFetching) {
            html = 'loadding';
        }
        else if(data && data.dataList.length > 0) {
            html = data.dataList.map((cell, index) => {
                cIndex = index;
                return <Card key={cell.id} data={cell} index={index} />;
            });
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
