'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { levelConvert } from '../utils/tools';

class CompHead extends Component {
    render() {
        let profileImg = './img/avator.jpg',
            rDiv = null,
            levelDiv = null;
        const { profile, nickname, level, subContent, rCont } = this.props;
        if(profile !== '') {
            profileImg = profile;
        }
        if(rCont !== '') {
            rDiv = <div className="cp-right" data-nickname={nickname}><div className="r-btn">{rCont}</div></div>
        }
        if(level) {
            const lc = levelConvert(level);
            if(lc) {
                const cln = `icon ${lc} level`;
                levelDiv = <div className={cln}>{level}</div>;
            }
        }
        return (
            <div className="comp-head">
                <div className="left">
                  <div className="via"><img src={profileImg} alt="" /></div>
                </div>
                <div className="middle">
                    <div className="first">
                        <span>{nickname}</span>
                        {levelDiv}
                    </div>
                    <div className="second">{subContent}</div>
                </div>
                {rDiv}
            </div>
        );
    }
}

CompHead.propTypes = {
    profile: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    subContent: PropTypes.string,
    rCont: PropTypes.string
};

CompHead.defaultProps = {
    rCont: '',
    subContent: ''
};

export default CompHead;
