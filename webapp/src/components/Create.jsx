'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateComment extends Component {
    componentDidMount() {
        this.create.addEventListener('click', (e) => {
            e.stopPropagation();
            this.text.focus();
        }, false);
    }
    render() {
        const cHeight = window.innerHeight - 87;
        return (
            <div
              ref={(c) => {
                  this.create = c;
              }}
              className="create"
              style={{ height: cHeight }}
            >
                <textarea
                  ref={(c) => {
                      this.text = c;
                  }}
                  maxLength="150"
                  placeholder="写评论…"
                />
                <div className="edit-tip">字数限制：150</div>
            </div>

        );
    }
}

CreateComment.propTypes = {

};

export default CreateComment;
