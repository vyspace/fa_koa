'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SinglePhoto extends Component {
    render() {
        const { browser, photo, aid, index, tag, link } = this.props;
        let html;
        if(browser) {
            html = <img src={photo} alt="" data-tag="thumbnail" data-index={index} />;
        }
        else {
            html = <img src={photo} alt="" data-tag={tag} data-aid={aid} data-link={link} />;
        }
        return (<div className="single-img">{html}</div>);
    }
}

SinglePhoto.propTypes = {
    browser: PropTypes.bool.isRequired,
    photo: PropTypes.string.isRequired,
    tag: PropTypes.string,
    aid: PropTypes.number,
    index: PropTypes.number,
    link: PropTypes.string
};

SinglePhoto.defaultProps = {
    aid: undefined,
    index: 0,
    link: '',
    tag: ''
};

export default SinglePhoto;
