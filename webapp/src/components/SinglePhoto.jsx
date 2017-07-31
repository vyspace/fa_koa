'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SinglePhoto extends Component {
    render() {
        const { browser, photo, aid, index } = this.props;
        let html;
        if(browser) {
            html = <img src={photo} alt="" data-tag="thumbnail" data-index={index} />;
        }
        else {
            html = <img src={photo} alt="" data-tag="article" data-aid={aid} />;
        }
        return (<div className="single-img">{html}</div>);
    }
}

SinglePhoto.propTypes = {
    browser: PropTypes.bool.isRequired,
    photo: PropTypes.string.isRequired,
    aid: PropTypes.number,
    index: PropTypes.number
};

SinglePhoto.defaultProps = {
    aid: undefined,
    index: 0
};

export default SinglePhoto;
