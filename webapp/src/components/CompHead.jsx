'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CompHead extends Component {
    render() {
        let profileImg = './img/avator.jpg',
            rDiv = null;
        const { profile, nickname, dateTime, rCont } = this.props;
        if(profile !== '') {
            profileImg = profile;
        }
        if(rCont !== '') {
            rDiv = <div className="cp-right" data-nickname={nickname}><div className="r-btn">{rCont}</div></div>
        }
        return (
            <div className="comp-head">
                <div className="left">
                  <div className="via"><img src={profileImg} alt="" /></div>
                </div>
                <div className="middle">
                    <div className="first">
                        <span>{nickname}</span>
                        <img src="../img/lv2.png" alt="" />
                        <span className="v-text">1</span>
                    </div>
                  <div className="second">{dateTime}</div>
                </div>
                {rDiv}
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
