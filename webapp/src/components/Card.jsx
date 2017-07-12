'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
    render() {
        const {} = this.props;
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
                    <ul className="speed-dial">
                        <li>
                            <div className="mar-rb"><img src="./img/test.jpg"/></div><div className="mar-rb"><img src="./img/test.jpg"/></div><div><img src="./img/test.jpg"/></div>
                        </li>
                        <li>
                            <div className="mar-r"><img src="./img/test.jpg"/></div><div className="mar-r"><img src="./img/test.jpg"/></div><div>more</div>
                        </li>
                    </ul>
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
                <li>
                    <p className="ml-overflow">Christina Photo by @FransLanting Wonderful color ! To let tourists get a better view，the bus drove slowly.What a beautiful town！</p>
                </li>
            </ul>
        );
    }
}

Card.propTypes = {

}

export default Card;