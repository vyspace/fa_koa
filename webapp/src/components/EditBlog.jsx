'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { imageInsert } from '../utils/tools';

const insertLimit = 6;

let g,
    _this,
    addObj,
    state = null;

class About extends Component {
    componentWillMount() {
        const { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction;
        updateHeader({
            type: 'base',
            title: '编辑',
            isBack: true,
            rBtn: {
                type: 'txt',
                content: '发布',
                handler: () => {
                    this.send();
                }
            }
        });
        updateFooter({ type: 'none' });
        this.init();
    }
    componentDidMount() {
        addObj = $(this.addPhoto);
        this.multiple.addEventListener('change', this.changeHandler, true);
        this.eventLayer.addEventListener('click', this.eventHandler, true);
    }
    init() {
        g = window.FaKoa;
        _this = this;
        state = {
            sum: 0,
            limit: insertLimit,
            tagList: {}
        };
    }
    eventHandler(e) {
        e.stopPropagation();
        const t = $(e.target),
            tag = t.data('tag');
        switch (tag) {
        case 'del':
            _this.delImage(t);
            break;
        default:
            break;
        }
    }
    delImage(t) {
        const li = t.parents('li'),
            id = t.data('id');
        li.remove();
        delete state.tagList[id];
        state.sum = Object.keys(state.tagList).length;
        if(_this.addPhoto.style.display === 'none') {
            _this.addPhoto.style.display = '';
        }
    }
    changeHandler(e) {
        e.stopPropagation();
        const _path = e.target.value.replace(/\w+\.\w{3,4}$/, ''),
            params = {
                files: e.target.files,
                index: 0,
                path: _path,
                callback(img) {
                    const time = new Date().getTime();
                    state.tagList[time] = img.dir;
                    const html = `<li><div><img src=${img.src} alt="" data-tag="thumbnail" /><div class="del" data-tag="del" data-id="${time}"></div>X</div></div></div></li>`;
                    addObj.before(html);
                    if(Object.keys(state.tagList).length >= insertLimit) {
                        _this.addPhoto.style.display = 'none';
                    }
                }
            };
        imageInsert(params, state);
    }
    render() {
        return (
            <div
              ref={(c) => {
                  this.eventLayer = c;
              }}
              className="edit-blog"
              style={{ minHeight: g.bodyMinHeight }}
            >
                 <textarea
                   ref={(c) => {
                       this.text = c;
                   }}
                   className="edit-ta"
                   maxLength="150"
                   placeholder="请输入..."
                 />
                <div className="edit-tip">字数限制：150</div>
                <ul className="speed-dial">
                    <li ref={(c) => {
                        this.addPhoto = c;
                    }}
                    >
                        <div className="bdr" data-tag="addPhoto">
                            <span className="icon icon-add" data-tag="addPhoto" />
                            <input
                              ref={(c) => {
                                  this.multiple = c;
                              }}
                              type="file"
                              className="m-file"
                              multiple="multiple"
                            />
                        </div>
                    </li>
                </ul>

            </div>
        );
    }
}

About.propTypes = {
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired
};

export default About;