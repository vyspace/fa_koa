'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CompHead from './CompHead';

class Comment extends Component {
    componentDidMount() {
    }
    render() {
        const { data } = this.props,
            lis = [];
        let reply = null;
        if(data.commentReply && data.commentReply.length > 0) {
            for(let i = 0; i < data.commentReply.length; i += 1) {
                const cell = data.commentReply[i];
                lis.push(<li key={i}><a href=" javascript:void(0);">@{cell.nickname}:</a>{cell.reply}</li>);
            }
            reply = <ul>{lis}</ul>;
        }
        return (
            <div className="comment" data-nickname={data.nickname} data-uid={data.userId} data-id={data.id} >
                <CompHead profile={data.profile} nickname={data.nickname} dateTime={data.dateTime} />
                <div className="content">
                    <div>{data.comment}</div>
                    {reply}
                </div>
            </div>
        );
    }
}

Comment.propTypes = {
    data: PropTypes.object.isRequired
};

export default Comment;
