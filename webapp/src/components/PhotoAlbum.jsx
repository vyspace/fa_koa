'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SpeedDial from './SpeedDial';

class PhotoAlbum extends Component {
    componentWillMount() {
        const { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction;
        updateHeader({
            type: 'photoalbum',
            title: '',
            isBack: true,
            rBtn: null
        });
        updateFooter({ type: 'none' });
    }
    componentDidMount() {

    }
    render() {
        let _key = '';
        const data = [
            {
                date: '2017-08-01',
                photos: [
                    {
                        src: './img/t1.jpg',
                        msrc: './img/ts1.jpg',
                        w: 960,
                        h: 1362
                    }, {
                        src: './img/t2.jpg',
                        msrc: './img/ts2.jpg',
                        w: 1080,
                        h: 1920
                    }, {
                        src: './img/t3.jpg',
                        msrc: './img/ts3.jpg',
                        w: 667,
                        h: 1000
                    }, {
                        src: './img/t4.jpg',
                        msrc: './img/ts4.jpg',
                        w: 1000,
                        h: 667
                    }, {
                        src: './img/t5.jpg',
                        msrc: './img/ts5.jpg',
                        w: 1000,
                        h: 667
                    }, {
                        src: './img/t6.jpg',
                        msrc: './img/ts6.jpg',
                        w: 1000,
                        h: 667
                    }
                ]
            }, {
                date: '2017-06-02',
                photos: [
                    {
                        src: './img/t1.jpg',
                        msrc: './img/ts1.jpg',
                        w: 960,
                        h: 1362
                    }, {
                        src: './img/t2.jpg',
                        msrc: './img/ts2.jpg',
                        w: 1080,
                        h: 1920
                    }
                ]
            }, {
                date: '2017-05-01',
                photos: [
                    {
                        src: './img/t1.jpg',
                        msrc: './img/ts1.jpg',
                        w: 960,
                        h: 1362
                    }, {
                        src: './img/t2.jpg',
                        msrc: './img/ts2.jpg',
                        w: 1080,
                        h: 1920
                    }, {
                        src: './img/t3.jpg',
                        msrc: './img/ts3.jpg',
                        w: 667,
                        h: 1000
                    }, {
                        src: './img/t4.jpg',
                        msrc: './img/ts4.jpg',
                        w: 1000,
                        h: 667
                    }, {
                        src: './img/t5.jpg',
                        msrc: './img/ts5.jpg',
                        w: 1000,
                        h: 667
                    }, {
                        src: './img/t6.jpg',
                        msrc: './img/ts6.jpg',
                        w: 1000,
                        h: 667
                    }
                ]
            }

        ];

        const html = data.map((cell, index) => {
            _key = `pa${index}`;
            return (<div key={_key} className="photo-album">
                <div className="time">{cell.date}</div>
                <SpeedDial photos={cell.photos} type="photoalbum" />
            </div>);
        });
        return (<div ref={(c) => {
            this.eventLayer = c;
        }}
        >{html}</div>);
    }
}

PhotoAlbum.propTypes = {
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired
};

export default PhotoAlbum;
