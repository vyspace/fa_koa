'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    componentWillMount() {
        const { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction;
        updateHeader({
            type: 'search',
            title: '',
            isBack: true,
            rBtn: {
                type: 'txt',
                content: '搜索',
                handler: () => {

                }
            }
        });
        updateFooter({ type: 'none' });
    }
    render() {
        return (
            <h1>Search</h1>
        );
    }
}

Search.propTypes = {
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired
};

export default Search;
