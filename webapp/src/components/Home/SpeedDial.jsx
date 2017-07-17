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
        for(let index=0; index < len; index+=1) {
            liArr.push(`<li><div><img src="${photos[index]}" /></div></li>`);
        }
        return { __html: liArr.join('') };
    }
    render() {
        const { photos } = this.props;
        return <ul className="speed-dial" dangerouslySetInnerHTML={this.photosHandler(photos)} />;
    }
}

SpeedDial.propTypes = {
    photos: PropTypes.array.isRequired
};

export default SpeedDial;
