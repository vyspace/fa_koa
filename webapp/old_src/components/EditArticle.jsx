'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'zepto';
import { restore } from '../store/persistence';

const tb = 87,
    edit = {
        selection: null,
        range: null,
        imgReg: /<img\s*([\w]+=(\"|\')([^\"\']*)(\"|\')\s*)*\/?>/i,
        mY: 0,
        uploadSize: 2 * 1048576
    };
let createDiv,
    contDiv,
    tip,
    g,
    titleHeight,
    cHeight,
    contHeight,
    contBTop,
    contMHeight,
    _this,
    preData;

class EditArticle extends Component {
    componentWillMount() {
        const { store } = this.props;
        restore(store);
        const { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction,
            { history } = this.props;
        updateHeader({
            type: 'base',
            title: '编辑',
            isBack: true,
            tHistory: history,
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
        this.init();
    }
    componentDidMount() {
        const { data } = this.props.store.editarticle;
        let restoreCont;
        if(data) {
            this.title.value = data.title;
            restoreCont = this.restoreState(data);
            if(restoreCont !== '') {
                this.content.innerHTML = restoreCont;
                this.tip.value = ' ';
            }
        }
        this.content.addEventListener('focus', this.focusHandler, false);
        this.content.addEventListener('blur', this.blurHandler, false);
        $(this.content).on('savePreviewData', this.saveData);
        this.file.addEventListener('change', this.fileChange, false);
        window.addEventListener('resize', this.reSize, false);
        window.addEventListener('touchstart', this.getCursor, false);
        createDiv = this.eventLayer;
        contDiv = this.content;
        tip = this.tip;
    }
    componentWillUnmount() {
        const { recordOrigin } = this.props.recordAction;
        window.removeEventListener('resize', this.reSize, false);
        recordOrigin('editarticle');
    }
    getsr() {
        const selection = window.getSelection ? window.getSelection() : document.selection;
        edit.range = selection.createRange ? selection.createRange() : selection.getRangeAt(0);
        edit.selection = selection;
    }
    getCursor(e) {
        e.stopPropagation();
        if(e.touches.length > 0) {
            edit.mY = e.touches[0].clientY;
        }
    }
    init() {
        g = window.FaKoa;
        _this = this;
        titleHeight = 2.8 * g.fontSize;
        cHeight = window.innerHeight - tb;
        contHeight = (window.innerHeight / 2) - (2 * g.fontSize);
        contBTop = (44 + contHeight) - (1.8 * g.fontSize);
        contMHeight = cHeight - titleHeight;
        preData = {
            title: '',
            photos: [],
            article: []
        };
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
            document.body.scrollTop = 44;
            if(!edit.range) {
                _this.getsr();
            }
            if ($.trim(t.text()) === '' && t.children().length === 0) {
                _this.insertDiv();
            }
        }, 20);
        if($.trim(t.text()) === '') {
            tip.placeholder = '';
        }
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
            tip.placeholder = '正文...';
        }
        contDiv.style.height = `${contMHeight}px`;
    }
    fileChange(e) {
        e.stopPropagation();
        const t = _this,
            file = e.target.files[0];
        if(!/^image/.test(file.type)) {
            alert('请添加图片文件！');
            return;
        }
        if(file.size > edit.uploadSize) {
            alert('请添加小于2M的图片！');
            return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (f) {
            const data = f.target.result,
                imgObj = new Image();
            imgObj.src = data;
            setTimeout(() => {
                const imgDom = `<img src="${data}" data-width="${imgObj.width}" data-height="${imgObj.height}" alt="" />`;
                t.insertImage(imgDom);
            }, 20);
        };
    }
    insertImage(dom) {
        if(!edit.range) {
            this.getsr();
        }
        if(window.getSelection) {
            const lastSub = $(contDiv).find('div:last-child');
            if($(lastSub).text() === '') {
                lastSub.remove();
            }
            const node = document.createElement('div');
            node.className = 'single-img mar';
            node.innerHTML = dom;
            contDiv.appendChild(node);
            _this.insertDiv();
        }
    }
    insertDiv() {
        const node = document.createElement('div');
        node.className = 'mar';
        node.innerHTML = '<br />';
        contDiv.appendChild(node);
        const range = document.createRange();
        range.selectNodeContents(node);
        range.setStart(node, node.length);
        range.collapse(false);
        edit.selection.removeAllRanges();
        edit.selection.addRange(range);
    }
    saveData() {
        const { history } = _this.props;
        const { saveEditArticle } = _this.props.editAction;
        const elems = $(contDiv).children('div');
        if(elems.length === 0 || _this.title.value === '') {
            alert('请填写标题和正文！');
            return;
        }
        preData.title = _this.title.value;
        for(let i = 0; i < elems.length; i += 1) {
            const cell = $(elems[i]),
                img = cell.children('img');
            if(img.length > 0) {
                const odata = img.attr('src'),
                    obj = {
                        src: odata,
                        msrc: odata,
                        w: img.data('width'),
                        h: img.data('height')
                    };
                preData.photos.push(obj);
                preData.article.push('[img]');
            }
            else {
                preData.article.push(cell.text());
            }
        }
        saveEditArticle(preData);
        history.push('article');
    }
    restoreState(data) {
        let i = 0,
            index = 0;
        const divArr = [];
        for(const cell of data.article) {
            if(cell === '[img]') {
                const photo = data.photos[i];
                divArr.push(`<div key=${index} class="single-img mar"><img src="${photo.msrc}" data-width="${photo.w}" data-height="${photo.h}" alt="" /></div>`);
                i += 1;
            }
            else {
                divArr.push(`<div key=${index} class="mar">${cell}</div>`);
            }
            index += 1;
        }
        return divArr.join('');
    }
    render() {
        return (
            <div
              ref={(c) => {
                  this.eventLayer = c;
              }}
              className="edit-box edit-article"
              style={{ height: `${cHeight}px` }}
            >
                <div className="content-box">
                    <div className="title-box">
                        <input
                          ref={(c) => {
                              this.title = c;
                          }}
                          type="text"
                          placeholder="标题..."
                        />
                    </div>
                    <input
                      ref={(c) => {
                          this.tip = c;
                      }}
                      type="text"
                      className="tip-input"
                      placeholder="正文..."
                    />
                    <p
                      ref={(c) => {
                          this.content = c;
                      }}
                      className="edit"
                      id="editBox"
                      style={{ height: `${contMHeight}px` }}
                      contentEditable="true"
                    />
                </div>
                <input
                  ref={(c) => {
                      this.file = c;
                  }}
                  type="file"
                  id="fileUpload"
                  style={{ display: 'none' }}
                />
            </div>

        );
    }
}

EditArticle.propTypes = {
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired,
    recordAction: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default EditArticle;
