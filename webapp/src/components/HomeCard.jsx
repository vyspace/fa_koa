'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HomeCard extends Component {
    render() {
        const { data } = this.props;
        return (<div className="home-card" data-src={data.src} data-cid={data.id}>
            <div className="item">
                <div className="wrap">
                    <div className="title" data-tag="content" data-cid={data.id}>{data.title}</div>
                </div>
            </div>
        </div>);
    }
}

HomeCard.propTypes = {
    data: PropTypes.object.isRequired
};

export default HomeCard;
