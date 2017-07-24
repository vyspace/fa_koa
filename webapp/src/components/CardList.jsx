'use strict';

import React, { Component } from 'react';
import $ from 'zepto';
import PropTypes from 'prop-types';
import Card from './Card/Card';
import PhotoBrowser from './PhotoBrowser';

class CardList extends Component {
    componentWillMount() {
        this.props.getHomeData();
    }
    componentDidUpdate() {
        const { data } = this.props.state;
        const { history, saveCommentIndex } = this.props;
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
                    rows = ul.data('index');
                saveCommentIndex(rows);
                history.push('/comment');
            }
        }, false);
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
                            return <Card key={cell.id} data={cell} cssStyle={css} index={index} />;
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
    saveCommentIndex: PropTypes.func.isRequired
};

export default CardList;
