'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import PhotoBrowser from '../PhotoBrowser';
import $ from 'zepto';
let photos = [];

class CardList extends Component {
    componentDidMount() {
        this.list.addEventListener('click', (e) => {
            photos = [
                {
                    src: './img/t1.jpg',
                    w: 960,
                    h: 1362
                }, {
                    src: './img/t2.jpg',
                    w: 1080,
                    h: 1920
                }, {
                    src: './img/t3.jpg',
                    w: 667,
                    h: 1000
                }, {
                    src: './img/t4.jpg',
                    w: 1000,
                    h: 667
                }, {
                    src: './img/t5.jpg',
                    w: 1000,
                    h: 667
                }, {
                    src: './img/t6.jpg',
                    w: 1000,
                    h: 667
                }
            ];
            if(e.target.tagName === 'IMG' && e.target.className === 'thumbnail') {
                e.stopPropagation();
                const ul = $(e.target).parents('.speed-dial'),
                    imgs = ul.find('img'),
                    index = $(e.target).data('tag');
                photos.map((cell, i) => {
                    cell.el = imgs[i];
                    return cell;
                });
                PhotoBrowser.init(photos, index);
            }
        }, false);
    }
    render() {
        const { data } = this.props;
        photos = data.photos;
        let css = {};
        return (
            <div ref={(c) => {
                this.list = c;
            }}
            >
            {
                data.map((cell, index) => {
                    if(index + 1 >= data.length) {
                        css = { marginBottom: 0 };
                    }
                    return <Card key={cell.id} data={cell} cssStyle={css} />;
                })
            }
            <PhotoBrowser />
            </div>
        );
    }
}

CardList.propTypes = {
    data: PropTypes.array.isRequired
};

export default CardList;
