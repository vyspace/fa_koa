'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

const photoLen = 6;

class SpeedDial extends Component {
    render() {
        const { photos, type } = this.props,
            html = [];
        let cn = 'speed-dial',
            _key = '',
            len = photos.length;
        if(type === 'photoalbum') {
            cn = 'speed-dial pa-card';
        }
        if(photos.length > photoLen) {
            len = photoLen;
        }
        for(let index = 0; index < len; index += 1) {
            _key = `sd${index}`;
            html.push(<li key={_key}><div><img src={photos[index].src} alt="" data-tag="thumbnail" data-index={index} data-pid={photos[index].index} /></div></li>);
        }
        return (<ul className={cn}>{html}</ul>);
    }
}

SpeedDial.propTypes = {
    photos: PropTypes.array.isRequired,
    type: PropTypes.string
};

SpeedDial.defaultProps = {
    type: ''
};

export default SpeedDial;
