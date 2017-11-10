'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CompHead extends Component {
    timeHandler(gwt) {
        if(!gwt) {
            return;
        }
        const createTime = new Date(gwt),
            now = new Date(),
            interval = now.getTime() - createTime.getTime(),
            oneHour = 3600000,
            oneDay = 86400000;
        if(interval < oneDay) {
            const hours = parseInt((interval / oneHour), 10);
            if(hours <= 0) {
                return '刚刚';
            }
            else {
                return `${hours}小时前`;
            }
        }
        else if(interval < 2 * oneDay) {
            return '昨天';
        }
        else if(interval < 3 * oneDay) {
            return '前天';
        }
        else {
            return `${createTime.getFullYear()}-${createTime.getMonth() + 1}-${createTime.getDate()}`;
        }
    }
    render() {
        let profileImg = './img/avator.jpg',
            rDiv = null;
        const { profile, nickname, userId, subContent, rCont } = this.props;
        if(profile !== '') {
            profileImg = profile;
        }
        if(rCont !== '') {
            rDiv = <div className="cp-right" data-nickname={nickname}><div className="r-btn c-ref">{rCont}</div></div>;
        }
        return (
            <div className="comp-head" data-uid={userId}>
                <div className="left">
                  <div className="via"><img src={profileImg} alt="" data-tag="chead" /></div>
                </div>
                <div className="middle" data-tag="chead">
                    <div className="first" data-tag="chead">
                        <span data-tag="chead">{nickname}</span>
                    </div>
                    { subContent ? <div className="second" data-tag="chead">{this.timeHandler(subContent)}</div> : '' }
                </div>
                {rDiv}
            </div>
        );
    }
}

CompHead.propTypes = {
    profile: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    userId: PropTypes.number,
    subContent: PropTypes.string,
    rCont: PropTypes.string
};

CompHead.defaultProps = {
    rCont: '',
    subContent: '',
    userId: undefined
};

export default CompHead;
