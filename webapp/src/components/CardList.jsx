'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'zepto';
import Card from './Card/Card';
import PhotoBrowser from './PhotoBrowser';

class CardList extends Component {
    componentWillMount() {
        const { getHomeData } = this.props.homeAction,
            { updateHeader } = this.props.headerAction;
        updateHeader({
            title: 'Header',
            isBack: false,
            rBtn: []
        });
        getHomeData();
    }
    componentDidUpdate() {
        const { data, scrollTop } = this.props.store.home,
            { history } = this.props,
            { saveParams } = this.props.homeAction;
        document.body.scrollTop = scrollTop;
        if(this.list) {
            this.list.addEventListener('click', (e) => {
                const t = $(e.target);
                if (e.target.tagName === 'IMG' && t.data('tag') === 'thumbnail') {
                    e.stopPropagation();
                    const ul = t.parents('.card-item'),
                        rows = ul.data('index'),
                        imgs = ul.find('img'),
                        index = t.data('index'),
                        photos = data[rows].photos,
                        photoArr = [];
                    for (let i = 0; i < photos.length; i += 1) {
                        const cell = Object.assign({}, photos[i]);
                        cell.el = imgs[i];
                        photoArr.push(cell);
                    }
                    PhotoBrowser.init(photoArr, index);
                }
                if (e.target.tagName === 'DIV' && t.data('tag') === 'comment') {
                    e.stopPropagation();
                    const ul = t.parents('.card-item'),
                        rows = ul.data('index'),
                        cTop = this.topCalc(ul.offset().top);
                    const param = {
                        rows, cTop
                    };
                    saveParams(param);
                    history.push('/comment');
                }
            }, false);
        }
    }
    componentWillUnmount() {
        const { saveScrollTop } = this.props.homeAction;
        saveScrollTop(document.body.scrollTop);
    }
    topCalc(oTop) {
        let cTop = 0;
        if(oTop <= 45) {
            cTop = -document.body.scrollTop;
        }
        else {
            const temp = oTop - document.body.scrollTop;
            cTop = Math.ceil(temp - 44);
        }
        return cTop;
    }
    render() {
        const { isFetching, data } = this.props.store.home;
        if (isFetching) {
            return <div>loadding</div>;
        }
        else {
            let css = {};
            return (
                <div ref={(c) => {
                    this.list = c;
                }}
                >
                    {
                        data.map((cell, index) => {
                            if (index + 1 >= data.length) {
                                css = { marginBottom: 0 };
                            }
                            return <Card key={cell.id} data={cell} cssStyle={css} index={index} animation={function () {}} commentOps={''} />;
                        })
                    }
                </div>
            );
        }
    }

}

CardList.propTypes = {
    store: PropTypes.object.isRequired,
    homeAction: PropTypes.object.isRequired,
    headerAction: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default CardList;
