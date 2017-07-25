'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'zepto';
import Card from './Card/Card';
import PhotoBrowser from './PhotoBrowser';

class CardList extends Component {
    componentWillMount() {
        const { getHomeData } = this.props;
        getHomeData();
    }
    componentDidUpdate() {
        const { data, scrollTop } = this.props.state;
        const { history, saveParams } = this.props;
        document.body.scrollTop = scrollTop;
        this.list.addEventListener('click', (e) => {
            const t = $(e.target);
            if(e.target.tagName === 'IMG' && t.data('tag') === 'thumbnail') {
                e.stopPropagation();
                const ul = t.parents('.card-item'),
                    rows = ul.data('index'),
                    imgs = ul.find('img'),
                    index = t.data('index'),
                    photos = data[rows].photos;
                photos.map((cell, i) => {
                    cell.el = imgs[i];
                    return cell;
                });
                PhotoBrowser.init(photos, index);
            }
            if(e.target.tagName === 'DIV' && t.data('tag') === 'comment') {
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
    componentWillUnmount() {
        this.props.saveScrollTop(document.body.scrollTop);
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
        const { isFetching, data } = this.props.state;
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
    state: PropTypes.object.isRequired,
    getHomeData: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    saveParams: PropTypes.func.isRequired,
    saveScrollTop: PropTypes.func.isRequired
};

export default CardList;
