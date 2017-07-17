'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardHead extends Component {
    render() {
        let profileImg = './img/avator.jpg';
        const { profile, nickname, dateTime } = this.props;
        if(profile !== '') {
            profileImg = profile;
        }
        return (
            <li className="card-head">
                <div className="pic">
                  <div className="avator"><img src={profileImg} alt="" /></div>
                </div>
                <div className="txt">
                  <div>{nickname}</div>
                  <div>{dateTime}</div>
                </div>
            </li>
        );
    }
}

CardHead.propTypes = {
    profile: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    dateTime: PropTypes.string.isRequired
};

export default CardHead;
