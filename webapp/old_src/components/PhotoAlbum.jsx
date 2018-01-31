'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SpeedDial from './SpeedDial';
import PhotoBrowser from './PhotoBrowser';

let g,
    _this;

class PhotoAlbum extends Component {
    componentWillMount() {
        const { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction,
            { getPhotoData } = this.props.palbumAction,
            { history, store } = this.props;
        updateHeader({
            type: 'base',
            title: '相册',
            isBack: true,
            tHistory: history,
            rBtn: null
        });
        updateFooter({ type: 'none' });
        getPhotoData();
        this.init();
    }
    componentDidMount() {
        this.eventLayer.addEventListener('click', this.eventHandler, true);
    }
    componentWillUnmount() {
        const { recordOrigin } = this.props.recordAction;
        recordOrigin('photoalbum');
    }
    init() {
        g = window.FaKoa;
        _this = this;
    }
    eventHandler(e) {
        e.stopPropagation();
        const { photoalbum } = _this.props.store,
            t = $(e.target),
            tag = t.data('tag'),
            pid = t.data('pid');

        if (tag === 'thumbnail') {
            const imgs = $(_this.eventLayer).find('img'),
                photos = photoalbum.data,
                photoArr = [];
            for (let i = 0; i < photos.length; i += 1) {
                const cell = Object.assign({}, photos[i]);
                cell.el = imgs[i];
                photoArr.push(cell);
            }
            PhotoBrowser.init(photoArr, pid);
        }
    }
    monthPhoto(data) {
        let arr = [],
            i = 0;
        const mArray = [];
        if(data.length > 0) {
            data[0].index = 0;
            arr.push(data[0]);
        }
        for(i = 1; i < data.length; i += 1) {
            data[i].index = i;
            if(arr[0].date === data[i].date) {
                arr.push(data[i]);
            }
            else {
                mArray.push(arr);
                arr = [];
                arr.push(data[i]);
            }
        }
        if(i >= data.length) {
            mArray.push(arr);
        }
        return mArray;
    }
    render() {
        let _key = '',
            html = '',
            mArray = [];
        const { photoalbum } = this.props.store;
        if(photoalbum.isFetching) {
            html = 'loading';
        }
        else {
            mArray = this.monthPhoto(photoalbum.data);
            html = mArray.map((cell, index) => {
                _key = `pa${index}`;
                return (<div key={_key} className="photo-album">
                    <div className="time">{cell[0].date}</div>
                    <SpeedDial photos={cell} type="photoalbum" />
                </div>);
            });
        }
        return (<div
          ref={(c) => {
              this.eventLayer = c;
          }}
          className="photo-container"
          style={{ minHeight: g.bodyMinHeight }}
          id="paContainer"
        >{html}</div>);
    }
}

PhotoAlbum.propTypes = {
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired,
    palbumAction: PropTypes.object.isRequired,
    recordAction: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default PhotoAlbum;
