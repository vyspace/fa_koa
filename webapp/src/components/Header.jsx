'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    render() {
        const {} = this.props;
        return (
            <div className="header-view">
                <ul className="header">
                    <li className="item left"></li>
                    <li className="f-item middle">Header</li>
                    <li className="item right"></li>
                </ul>
            </div>
        );
    }
}

Header.propTypes = {

}

export default Header;