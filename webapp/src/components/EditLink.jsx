'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isUrl } from '../utils/tools';

let g,
    _this;

class EditLink extends Component {
    componentWillMount() {
        const { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction,
            { history } = this.props;
        updateHeader({
            type: 'base',
            title: '外链',
            isBack: true,
            tHistory: history,
            rBtn: {
                type: 'txt',
                content: '发送',
                handler: () => {
                    this.send();
                }
            }
        });
        updateFooter({
            type: 'none'
        });
        this.init();
    }
    componentDidMount() {

    }
    init() {
        g = window.FaKoa;
        _this = this;
    }
    focusTex(e) {
        e.stopPropagation();
        this.text.focus();
    }
    send() {
        const val = _this.text.value;
        if(val !== '') {
            if(isUrl(val)) {
                $.ajax({
                    type: 'get',
                    url: 'http://api.t.sina.com.cn/short_url/shorten.json',
                    data: {
                        source: 1052239900,
                        url_long: val
                    },
                    dataType: 'jsonp',
                    jsonpCallback: 'callback',
                    success(data, xx) {
                        alert(data.name);
                    },
                    error(data, xx) {
                        alert('fail');
                    }
                });
            }
        }
    }
    render() {
        return (
            <div
              ref={(c) => {
                  this.eventLayer = c;
              }}
              className="edit-comment"
              style={{ minHeight: g.bodyMinHeight }}
            >
                <textarea
                  ref={(c) => {
                      this.text = c;
                  }}
                  className="edit-ta"
                  maxLength="150"
                  placeholder="请输入外链地址..."
                />
                <div className="edit-tip">字数限制：150</div>
            </div>

        );
    }
}

EditLink.propTypes = {
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default EditLink;
