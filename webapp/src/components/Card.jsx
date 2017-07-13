'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SpeedDial from './SpeedDial';

class Card extends Component {
    render() {
        const {photos} = this.props;
        return (
            <ul className="card-item">
                <li className="card-head">
                    <div className="pic">
                        <div className="avator"></div>
                    </div>
                    <div className="txt">
                        <div>name</div>
                        <div>21小时前</div>
                    </div>
                </li>
                <li>
                    <SpeedDial photos={photos}/>
                </li>
                <li className="interaction">
                    <div>
                        123
                    </div>
                    <div className="txt-center">
                        1212
                    </div>
                    <div className="txt-right">
                        111111
                    </div>
                </li>
                <li className="ml-of">
                    Christina Photo by @FransLanting Wonderful color ! To let tourists get a better view，the bus drove slowly.What a beautiful town, let tourists get a better view，the bus drove tourists get a better view，the bus drove
                </li>
            </ul>
        );
    }
}

Card.propTypes = {

}

export default Card;