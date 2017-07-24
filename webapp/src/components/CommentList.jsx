'use strict';

import React, { Component } from 'react';

class CommentList extends Component {
    componentWillMount() {
        this.props.getCommentData();
    }
    componentDidUpdate() {

    }
    render() {
        return <div>loading</div>

    }
}

CommentList.propTypes = {

};

export default CommentList;