'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MsgItem extends Component {
    render() {
        const { data } = this.props;
        return (<div className="msg-item">
            <div className="profile">
                <img src={data.profile} alt="" />
            </div>
            <div className="info">
                <div className="name">{data.nickname}</div>
                <div className="msg">{data.msg}</div>
                <div className="time">{data.time}</div>
            </div>
        </div>);
    }
}

MsgItem.propTypes = {
    data: PropTypes.object.isRequired
};

export default MsgItem;
