'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

let g,
    _this,
    img,
    moveState,
    zoomState,
    overlay;

class Profile extends Component {
    componentWillMount() {
        const { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction,
            { data } = this.props.store.userinfo;
        updateHeader({
            type: 'base',
            title: '头像上传',
            isBack: true,
            rBtn: {
                type: 'txt',
                content: '完成',
                handler: () => {
                    _this.upload();
                }
            }
        });
        updateFooter({ type: 'none' });
        this.init(data);
        if(data) {
            img.w = data.w;
            img.h = data.h;
            img.type = data.type;
        }
    }
    componentDidMount() {
        this.eventLayer.addEventListener('touchstart', this.touchStart, true);
        this.eventLayer.addEventListener('touchmove', this.touchMove, true);
        this.eventLayer.addEventListener('touchend', this.touchEnd, true);
        setTimeout(() => {
            img.el = $(_this.eventLayer);
            const minVal = Math.min(_this.eventLayer.clientWidth, _this.eventLayer.clientHeight);
            zoomState.minZoom = Math.sqrt(40000 + 40000) / Math.sqrt((minVal * minVal) + (minVal * minVal));
            img.imgRatio = img.w / _this.eventLayer.clientWidth;
            img.width = _this.eventLayer.clientWidth;
            img.height = _this.eventLayer.clientHeight;
            _this.calcZoom();
        }, 100);
        overlay.el = $(this.overLayer);
    }
    init() {
        g = window.FaKoa;
        _this = this;
        img = {
            el: null,
            imgRatio: 1,
            width: 0,
            height: 0,
            w: 0,
            h: 0,
            type: 'image/jpeg'
        };
        moveState = {
            sumX: 0,
            sumY: 0,
            x: 0,
            y: 0,
            isMove: false,
            tempX: 0,
            tempY: 0,
            halfWidth: 0,
            halfHeight: 0,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        };
        zoomState = {
            minZoom: 1,
            isZoom: false,
            sumZoom: 1,
            tempZoom: 1,
            zoomRatio: 1
        };
        overlay = {
            le: null,
            width: 200,
            left: -100,
            top: -100,
            right: 100,
            bottom: 100,
            bw: 2
        };
    }
    calcZoom() {
        const width = img.width * zoomState.tempZoom,
            height = img.height * zoomState.tempZoom,
            halfWidth = width / 2,
            halfHeight = height / 2;
        moveState.top = -halfHeight;
        moveState.left = -halfWidth;
        moveState.right = halfWidth;
        moveState.bottom = halfHeight;
        moveState.halfWidth = halfWidth;
        moveState.halfHeight = halfHeight;
        zoomState.zoomRatio = img.imgRatio / zoomState.sumZoom;
    }
    calcMove() {
        moveState.left = (-moveState.halfWidth + moveState.tempX) - overlay.bw;
        moveState.right = (moveState.halfWidth + moveState.tempX) - overlay.bw;
        moveState.top = (-moveState.halfHeight + moveState.tempY) - overlay.bw;
        moveState.bottom = (moveState.halfHeight + moveState.tempY) - overlay.bw;
    }
    touchStart(e) {
        e.preventDefault();
        e.stopPropagation();
        const touch = e.touches;
        if(touch.length === 1) {
            moveState.x = touch[0].clientX;
            moveState.y = touch[0].clientY;
            moveState.isMove = true;
        }
        if(touch.length > 1) {
            const xl = touch[1].clientX - touch[0].clientX,
                yl = touch[1].clientY - touch[0].clientY;
            moveState.xy = Math.sqrt((xl * xl) + (yl * yl));
        }
    }
    touchMove(e) {
        const touch = e.touches;
        if(moveState.isMove) {
            moveState.tempX = (touch[0].clientX - moveState.x) + moveState.sumX;
            moveState.tempY = (touch[0].clientY - moveState.y) + moveState.sumY;
        }
        if(touch.length > 1) {
            const xl = touch[1].clientX - touch[0].clientX,
                yl = touch[1].clientY - touch[0].clientY,
                xy1 = Math.sqrt((xl * xl) + (yl * yl)),
                zoom = xy1 / moveState.xy;
            let half = 0;
            if(zoom >= 1) {
                half = ((zoom - 1) / 4).toFixed(3);
                zoomState.tempZoom = Number(half) + Number(zoomState.sumZoom);
            }
            else {
                half = (1 - ((1 - zoom) / 2)).toFixed(3);
                if(zoomState.sumZoom < 1) {
                    zoomState.tempZoom = Number(zoomState.sumZoom) - (1 - half);
                }
                if(zoomState.sumZoom === 1) {
                    zoomState.tempZoom = half;
                }
                else {
                    zoomState.tempZoom = Number(zoomState.sumZoom) - ((1 - half) * 2);
                }
                _this.calcZoom();
            }
            zoomState.isZoom = true;
        }
        _this.eventLayer.style.transform = `translate3D(${moveState.tempX}px, ${moveState.tempY}px, 0) scale(${zoomState.tempZoom})`;
    }
    touchEnd(e) {
        e.preventDefault();
        e.stopPropagation();
        let flag = false;
        if(moveState.isMove) {
            _this.calcMove();
            if(moveState.left > overlay.left) {
                moveState.tempX = moveState.halfWidth + overlay.left;
                flag = true;
            }
            if(moveState.right < overlay.right) {
                moveState.tempX = -(moveState.halfWidth - overlay.right);
                flag = true;
            }
            if(moveState.top > overlay.top) {
                moveState.tempY = moveState.halfHeight + overlay.top;
                flag = true;
            }
            if(moveState.bottom < overlay.bottom) {
                moveState.tempY = -(moveState.halfHeight - overlay.bottom);
                flag = true;
            }
            if(flag) {
                _this.eventLayer.style.transform = `translate3D(${moveState.tempX}px, ${moveState.tempY}px, 0) scale(${zoomState.sumZoom})`;
            }
            moveState.sumX = moveState.tempX;
            moveState.sumY = moveState.tempY;
            moveState.isMove = false;
        }
        if(zoomState.isZoom) {
            if(zoomState.tempZoom > 8) {
                zoomState.tempZoom = 8;
            }
            if(zoomState.tempZoom < zoomState.minZoom) {
                zoomState.tempZoom = zoomState.minZoom;
            }
            _this.eventLayer.style.transform = `translate3D(0, 0, 0) scale(${zoomState.tempZoom})`;
            moveState.tempX = 0;
            moveState.tempY = 0;
            moveState.sumX = 0;
            moveState.sumY = 0;
            zoomState.sumZoom = zoomState.tempZoom;
            zoomState.isZoom = false;
            _this.calcZoom();
        }
    }
    crop() {
        const oLayer = $(_this.overLayer),
            width = Math.round(overlay.width * zoomState.zoomRatio),
            cvs = document.createElement('canvas');
        let tl = ((oLayer.offset().left - img.el.offset().left) + 2) * zoomState.zoomRatio,
            tt = ((oLayer.offset().top - img.el.offset().top) + 2) * zoomState.zoomRatio,
            left = 0,
            top = 0;
        if(tl < 0) {
            tl = 0;
        }
        if(tt < 0) {
            tt = 0;
        }
        left = Math.round(tl);
        top = Math.round(tt);
        if(left + width > img.w) {
            left = img.width - width;
        }
        if(top + width > img.h) {
            top = img.height - width;
        }
        cvs.width = overlay.width;
        cvs.height = overlay.width;
        cvs.getContext('2d').drawImage(_this.eventLayer, left, top, width, width, 0, 0, overlay.width, overlay.width);
        return cvs.toDataURL(img.type);
    }
    upload() {
        const src = _this.crop();
        const im = document.createElement('img');
        im.src = src;
        document.body.innerHTML = '';
        document.body.appendChild(im);
    }
    render() {
        const { data } = this.props.store.userinfo;
        let photo = '';
        if(data && data.src) {
            photo = data.src;
        }
        return (
            <div
              className="profile"
              style={{ minHeight: g.bodyMinHeight }}
            >
                <div
                  ref={(c) => {
                      this.overLayer = c;
                  }}
                  className="overlay"
                ><div className="overlay-inner" style={{ color: '#fff', fontSize: '22px' }} id="kkk" /></div>
                <div className="resize-container">
                    <img
                      ref={(c) => {
                          this.eventLayer = c;
                      }}
                      src={photo}
                      alt=""
                      style={{ transform: `translate3D(${moveState.tempX}px, ${moveState.tempY}px, 0) scale(${zoomState.tempZoom})` }}
                    />
                </div>
            </div>
        );
    }
}

Profile.propTypes = {
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
};

export default Profile;
