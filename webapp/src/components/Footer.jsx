'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
    render() {
        const {} = this.props;
        return (
            <ul className="footer">
                <li className="f-item">1</li>
                <li className="f-item">2</li>
                <li className="f-item">3</li>
                <li className="f-item">4</li>
                <li className="f-item">5</li>
            </ul>
        );
    }
}

Footer.propTypes = {

}

export default Footer;