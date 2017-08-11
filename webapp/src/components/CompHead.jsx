'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CompHead extends Component {
    render() {
        let profileImg = './img/avator.jpg';
        const { profile, nickname, dateTime, rCont } = this.props;
        if(profile !== '') {
            profileImg = profile;
        }
        return (
            <div className="comp-head">
                <div className="left">
                  <div className="via"><img src={profileImg} alt="" /></div>
                </div>
                <div className="middle">
                  <div>{nickname}</div>
                  <div>{dateTime}</div>
                </div>
                <div className="cp-right" data-nickname={nickname}><div className="r-btn">{rCont}</div></div>
            </div>
        );
    }
}

CompHead.propTypes = {
    profile: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    dateTime: PropTypes.string,
    rCont: PropTypes.string
};

CompHead.defaultProps = {
    rCont: '',
    dateTime: ''
};

export default CompHead;
