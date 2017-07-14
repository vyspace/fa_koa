'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
const cols = 3,
    photoLen = 6;

class SpeedDial extends Component {
    render() {
        const {photos} = this.props;
        return <ul className="speed-dial" dangerouslySetInnerHTML={this.photosHandler(photos)}></ul>;
    }
    photosHandler(photos) {
        let len = photos.length;
        if(photos.length === 0) {
            return '';
        }
        if(photos.length > photoLen) {
            len = photoLen;
        }
        const colArr = [],
            rowArr = [];
        let i = 0,
            j = 0,
            index = 0,
            cn = '';
        while(index < len) {
            switch(j) {
                case 0:
                    cn = ' class="mar-rb"';
                    break;
                case 1:
                    cn = ' class="mar-r"';
                    break;
                default:
                    cn = '';
                    break;
            }
            colArr.push('<div'+cn+'><img src="'+photos[index]+'" /></div>');
            j++;
            index = i * cols + j;
            if(j%3 === 0){
                rowArr.push('<li>'+ colArr.join('') +'</li>');
                j = 0;
                colArr.length = 0;
                i++;
            }
        }
        if(colArr.length != 0) {
            rowArr.push('<li>'+ colArr.join('') +'</li>');
        }
        return {__html: rowArr.join('')};
    }
}

SpeedDial.PropTypes = {
    photos: PropTypes.array.isRequired
};

export default SpeedDial;