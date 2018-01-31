'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SingleMsg extends Component {
    render() {
        const { msg, link, linkText } = this.props;
        return (
            <div className="single-msg">
                {msg}
                {link ? <a className="link" href={link}>{linkText}</a> : ''}
            </div>
        );
    }
}

SingleMsg.propTypes = {
    msg: PropTypes.string.isRequired,
    link: PropTypes.string,
    linkText: PropTypes.string
};

SingleMsg.defaultProps = {
    link: '',
    linkText: ''
};

export default SingleMsg;
