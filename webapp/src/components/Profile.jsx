'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

let g,
    _this,
    eventObj = null;
const moveState = {
        top: 0,
        sumX: 0,
        sumY: 0,
        x: 0,
        y: 0,
        isMove: false,
        tempX: 0,
        tempY: 0
    },
    zoomState = {
        minZoom: 1,
        isZoom: false,
        sumZoom: 1,
        tempZoom: 1,
        width: 0,
        height: 0
    },
    overlay = {
        el: null
    };

class Profile extends Component {
    componentWillMount() {
        const { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction;
        updateHeader({
            type: 'base',
            title: '头像上传',
            isBack: true,
            rBtn: null
        });
        updateFooter({ type: 'none' });
        g = window.FaKoa;
        _this = this;
    }
    componentDidMount() {
        overlay.el = $(this.overLayer);
        const ofs = overlay.el.offset();
        overlay.left = ofs.left;
        overlay.top = ofs.top;
        overlay.right = ofs.left + 200;
        overlay.bottom = ofs.top + 200;
        this.eventLayer.addEventListener('touchstart', this.touchStart, true);
        this.eventLayer.addEventListener('touchmove', this.touchMove, true);
        this.eventLayer.addEventListener('touchend', this.touchEnd, true);
        setTimeout(() => {
            eventObj = $(_this.eventLayer);
            const minVal = Math.min(_this.eventLayer.clientWidth, _this.eventLayer.clientHeight);
            zoomState.minZoom = Math.sqrt(40000 + 40000) / Math.sqrt((minVal * minVal) + (minVal * minVal));
            zoomState.width = _this.eventLayer.clientWidth;
            zoomState.height = _this.eventLayer.clientHeight;
            zoomState.top = eventObj.offset().top;
        }, 100);
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
            // if(moveState.tempX > overlay.left) {
            //     moveState.tempX = overlay.left + 2;
            //     flag = true;
            // }
            // if(moveState.tempX + zoomState.width < overlay.right) {
            //     moveState.tempX = (overlay.right - zoomState.width) + 2;
            //     flag = true;
            // }
            // if(moveState.tempY + zoomState.top > overlay.top) {
            //     moveState.tempY = (overlay.top - zoomState.top) + 2;
            //     flag = true;
            // }
            // if(moveState.tempY + zoomState.top + zoomState.height < overlay.bottom) {
            //     moveState.tempY = (overlay.bottom - zoomState.top - zoomState.height) + 2;
            //     flag = true;
            // }
            moveState.sumX = moveState.tempX;
            moveState.sumY = moveState.tempY;
            moveState.isMove = false;
        }
        if(zoomState.isZoom) {
            if(zoomState.tempZoom > 8) {
                zoomState.tempZoom = 8;
                flag = true;
            }
            if(zoomState.tempZoom < zoomState.minZoom) {
                zoomState.tempZoom = zoomState.minZoom;
                flag = true;
            }
            zoomState.width = eventObj.width();
            zoomState.height = eventObj.height();
            zoomState.top = eventObj.offset().top;
            // if(moveState.sumX > overlay.left) {
            //     moveState.sumX = overlay.left + 2;
            //     flag = true;
            // }
            // if(moveState.sumX + zoomState.width < overlay.right) {
            //     moveState.sumX = (overlay.right - zoomState.width) + 2;
            //     flag = true;
            // }
            // if(moveState.sumY + zoomState.top > overlay.top) {
            //     moveState.sumY = (overlay.top - zoomState.top) + 2;
            //     flag = true;
            // }
            setTimeout(() => {
                if(moveState.sumY + zoomState.top + zoomState.height < overlay.bottom) {
                    moveState.sumY = (overlay.bottom - zoomState.top - zoomState.height) + 2;
                    flag = true;
                }
                alert((overlay.bottom - zoomState.top - zoomState.height));
            }, 160);

            if(flag) {
                _this.eventLayer.style.transform = `translate3D(${moveState.sumX}px, ${moveState.sumY}px, 0) scale(${zoomState.tempZoom})`;
            }
            zoomState.sumZoom = zoomState.tempZoom;
            zoomState.isZoom = false;

        }

    }
    render() {
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
                      src="../img/t4.jpg"
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
    footerAction: PropTypes.object.isRequired
};

export default Profile;
