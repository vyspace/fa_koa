'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'zepto';

const tb = 87,
    edit = {
        range: null,
        imgReg: /<img\s*([\w]+=(\"|\')([^\"\']*)(\"|\')\s*)*\/?>/i,
        mY: 0
    };
let createDiv,
    contDiv,
    tip,
    g,
    titleHeight = 0,
    cHeight = 0,
    contHeight = 0,
    contBTop = 0,
    contMHeight = 0;

class EditComment extends Component {
    componentWillMount() {
        g = window.FaKoa;
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
        updateFooter({
            type: 'editaricle'
        });
        titleHeight = 2.8 * g.fontSize;
        cHeight = window.innerHeight - tb;
        contHeight = (window.innerHeight / 2) - (2 * g.fontSize);
        contBTop = (44 + contHeight) - (1.8 * g.fontSize);
        contMHeight = cHeight - titleHeight;
    }
    componentDidMount() {
        createDiv = this.eventLayer;
        contDiv = this.content;
        tip = this.tip;
        this.content.addEventListener('focus', this.focusHandler, false);
        this.content.addEventListener('blur', this.blurHandler, false);
        window.addEventListener('resize', this.reSize, false);
        window.addEventListener('touchstart', this.getCursor, false);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.reSize, false);
    }
    getCursor(e) {
        e.stopPropagation();
        if(e.touches.length > 0) {
            edit.mY = e.touches[0].clientY;
        }
    }
    reSize() {
        cHeight = window.innerHeight - tb;
        contHeight = (window.innerHeight / 2) - (2 * g.fontSize);
        contMHeight = cHeight - titleHeight;
        contBTop = (44 + contHeight) - (1.8 * g.fontSize);
        if(createDiv) {
            createDiv.style.height = `${cHeight}px`;
        }
        if(contDiv) {
            contDiv.style.height = `${contHeight}px`;
        }
    }
    focusHandler(e) {
        e.stopPropagation();
        const t = $(e.target);
        contDiv.style.height = `${contHeight}px`;
        setTimeout(() => {
            const selection = window.getSelection ? window.getSelection() : document.selection;
            edit.range = selection.createRange ? selection.createRange() : selection.getRangeAt(0);
            if ($.trim(t.text()) === '') {
                tip.value = ' ';
                const node = document.createElement('div');
                node.innerHTML = '<br />';
                contDiv.appendChild(node);
                const range = document.createRange();
                range.selectNodeContents(node);
                range.setStart(node, node.length);
                range.collapse(false);
                selection.removeAllRanges();
                selection.addRange(range);
            }
        }, 20);
        if(edit.mY > contBTop) {
            const h = edit.mY - contBTop;
            contDiv.scrollTop += h;
            contDiv.focus();
            edit.mY = 0;
        }
        return false;
    }
    blurHandler(e) {
        e.stopPropagation();
        const t = $(e.target);
        if (!$.trim(t.text()) && !edit.imgReg.test(t.html())) {
            tip.value = '';
        }
        contDiv.style.height = `${contMHeight}px`;
    }
    render() {
        return (
            <div
              ref={(c) => {
                  this.eventLayer = c;
              }}
              className="edit-article"
              style={{ height: `${cHeight}px` }}
            >
                <div className="content-box">
                    <div className="title-box">
                        <input type="text" placeholder="标题..." />
                    </div>
                    <input
                      ref={(c) => {
                          this.tip = c;
                      }}
                      type="text"
                      className="tip-input"
                      placeholder="正文..."
                    />
                    <div
                      ref={(c) => {
                          this.content = c;
                      }}
                      className="edit"
                      style={{ height: `${contHeight}px` }}
                      contentEditable="true"
                    />

                </div>
                <div className="content-box" />
            </div>

        );
    }
}

EditComment.propTypes = {
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired
};

export default EditComment;
