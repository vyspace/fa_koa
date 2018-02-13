'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'zepto';

let _this;

class HomeMask extends Component {
    componentWillMount() {
        _this = this;
    }
    componentDidMount() {
        this.eventLayer.addEventListener('click', this.eventHandler, true);
    }
    eventHandler(e) {
        e.stopPropagation();
        const t = $(e.target);
        const tag = t.data('tag');
        const { history } = _this.props;
        switch(tag) {
            case 'input':
                t.focus();
                break;
            case 'sbtn':
                alert('正在搜索...');
                break;
            case 'login':
                history.push('login');
                break;
            case 'register':
                history.push('register');
                break;
            case 'about':
                history.push('about')
                break;
            default:
                break;
        }
    }
    render() {
        const { data } = this.props;
        let cont = <li data-tag="login">登录</li>;
        if(data) {
            cont = <li className="user-info">欢迎回来  [{data.nickname}]</li>;
        }
        return (<div
          ref={(c) => {
              this.eventLayer = c;
          }}
          className="home-mask"
          id="homeMask"
        >
            <form className="search-form" method="get" action="/search/" name="homeSearch">
                <div className="search-field">
                    <input type="text" placeholder="搜索..." name="searchInput" data-tag="input" />
                </div>
                <div id="search-button" className="search-btn" type="button" role="button" data-tag="sbtn" />
            </form>
            <ul className="list">
                {cont}
                <li data-tag="register">注册</li>
                <li data-tag="about">关于</li>
            </ul>
        </div>);
    }
}

HomeMask.propTypes = {
    history: PropTypes.object.isRequired,
    data: PropTypes.object
};
HomeMask.defaultProps = {
    data: null
};

export default HomeMask;
