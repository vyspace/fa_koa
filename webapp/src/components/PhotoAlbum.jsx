'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SpeedDial from './SpeedDial';

const hHeight = 44;
let cHeight = 0;

class PhotoAlbum extends Component {
    componentWillMount() {
        const { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction,
            { getPaData } = this.props.palbumAction;
        updateHeader({
            type: 'photoalbum',
            title: '',
            isBack: true,
            rBtn: null
        });
        updateFooter({ type: 'none' });
        getPaData();
        cHeight = window.innerHeight - hHeight;
    }
    componentDidMount() {
        const { getPaData, getPrData } = this.props.palbumAction;
        $(this.eventLayer).on('pa1', getPaData);
        $(this.eventLayer).on('pa2', getPrData);
    }
    render() {
        let _key = '',
            html = '';
        const { photoalbum } = this.props.store;
        if(photoalbum.isFetching) {
            html = 'loading';
        }
        else {
            html = photoalbum.data.map((cell, index) => {
                _key = `pa${index}`;
                return (<div key={_key} className="photo-album">
                    <div className="time">{cell.date}</div>
                    <SpeedDial photos={cell.photos} type="photoalbum" />
                </div>);
            });
        }
        return (<div
          ref={(c) => {
              this.eventLayer = c;
          }}
          className="pa-container"
          style={{ minHeight: `${cHeight}px` }}
          id="paContainer"
        >{html}</div>);
    }
}

PhotoAlbum.propTypes = {
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired,
    palbumAction: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
};

export default PhotoAlbum;
