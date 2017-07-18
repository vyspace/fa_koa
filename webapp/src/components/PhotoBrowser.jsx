'use strict';

import React, { Component } from 'react';
import { PhotoSwipe, PhotoSwipeUI } from 'photoswipe';
const _gallery = Symbol('gallery'),
    _options = Symbol('options'),
    _pswp = Symbol('pswp');

class PhotoBrowser extends Component {
    static init(items, i) {
        const thunbBound = (index = 0) => {
            const pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                thumbnail = items[index].el,
                rect = thumbnail.getBoundingClientRect();
            return {
                x: rect.left, y: rect.top + pageYScroll, w: rect.width
            };
        };
        this[_options] = {
            index: i,
            getThumbBoundsFn: thunbBound,
            showHideOpacity: true,
            allowPanToNext: false,
            loop: false,
            escKey: false,
            arrowKeys: false,
            shareEl: false,
            arrowEl: false,
            fullscreenEl: false,
            preloaderEl: false,
            history: false,
            focus: false,
            clickToCloseNonZoomable: false
        };

        this[_gallery] = new PhotoSwipe(document.getElementById('pswp'), PhotoSwipeUI, items, this[_options]);
        this[_gallery].init();
    }
    render() {
        /* const {  } = this.props;*/
        return (<div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true" id="pswp">
            <div className="pswp__bg" />
            <div className="pswp__scroll-wrap">
                <div className="pswp__container">
                    <div className="pswp__item" />
                    <div className="pswp__item" />
                    <div className="pswp__item" />
                </div>
                <div className="pswp__ui pswp__ui--hidden">
                    <div className="pswp__top-bar">
                        <div className="pswp__counter" />
                        <button className="pswp__button pswp__button--close" title="Close (Esc)" />
                        <button className="pswp__button pswp__button--share" title="Share" />
                        <button className="pswp__button pswp__button--fs" title="Toggle fullscreen" />
                        <button className="pswp__button pswp__button--zoom" title="Zoom in/out" />
                        <div className="pswp__preloader">
                            <div className="pswp__preloader__icn">
                                <div className="pswp__preloader__cut">
                                    <div className="pswp__preloader__donut" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                        <div className="pswp__share-tooltip" />
                    </div>
                    <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)" />
                    <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)" />
                    <div className="pswp__caption">
                        <div className="pswp__caption__center" />
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default PhotoBrowser;
