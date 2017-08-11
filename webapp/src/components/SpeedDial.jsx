'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

const photoLen = 6;

class SpeedDial extends Component {

    photosHandler(photos) {
        let len = photos.length;
        if(photos.length === 0) {
            return '';
        }
        if(photos.length > photoLen) {
            len = photoLen;
        }
        const liArr = [];
        for(let index = 0; index < len; index += 1) {
            liArr.push(`<li><div><img src="${photos[index].src}" data-tag="thumbnail" data-index="${index}" /></div></li>`);
        }
        return { __html: liArr.join('') };
    }
    render() {
        const { photos, type } = this.props;
        let cn = 'speed-dial';
        if(type === 'photoalbum') {
            cn = 'speed-dial pa-card';
        }
        return (<ul
          ref={(c) => {
              this.eventLayer = c;
          }}
          className={cn}
          dangerouslySetInnerHTML={this.photosHandler(photos)}
        />);
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
