'use strict';

'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CompHead from './CompHead';

class ReplyCard extends Component {
    componentDidMount() {

    }
    render() {
        const { data, isNew } = this.props;
        let profileImg = './img/avator.jpg';
        if(data.profile !== '') {
            profileImg = data.profile;
        }
        return (<div className="reply-card">
            <CompHead profile={profileImg} nickname={data.nickname} dateTime={data.dataTime} rCont="回复" />
            <div className="text">
                <span className="rp">{isNew ? <i className="new-flag">new</i> : null}回复:</span>
                <span>{data.toMe}</span>
            </div>
            <div className="content">
                <div className="left">
                    <div className="via"><img src={data.photo} alt="" /></div>
                </div>
                <div className="rp-right">
                    <div className="m-ellipsis">{data.text}</div>
                </div>
            </div>
        </div>);
    }
}

ReplyCard.propTypes = {
    data: PropTypes.object.isRequired,
    isNew: PropTypes.bool
};

ReplyCard.defaultProps = {
    isNew: false
}

export default ReplyCard;
