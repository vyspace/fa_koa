'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
    render() {
        const { data } = this.props;
        let cln = '',
            _key = '';
        const html = data.map((cell, index) => {
            if(index === 0) {
                cln = 'active';
            }
            else {
                cln = '';
            }
            _key = `tab${index}`;
            return <li key={_key} className={cln} data-tag={cell.tag}>{cell.value}</li>;
        });
        return (
            <ul
              ref={(c) => {
                  this.eventLayer = c;
              }}
              className="tab-header"
            >
                {html}
            </ul>
        );
    }
}

Tab.propTypes = {
    data: PropTypes.array.isRequired
};

export default Tab;
