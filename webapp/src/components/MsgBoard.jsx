'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MsgItem from './MsgItem';

class MsgBoard extends Component {
    render() {
        const { data } = this.props,
            html = data.map(cell => <MsgItem key={cell.id} data={cell} />);
        return (<div className="msg-board">
            <div className="title">留言</div>
            {html}
        </div>);
    }
}

MsgBoard.propTypes = {
    data: PropTypes.array.isRequired
};

export default MsgBoard;
