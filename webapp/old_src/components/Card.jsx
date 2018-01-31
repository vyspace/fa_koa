'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CompHead from './CompHead';
import SpeedDial from './SpeedDial';
import CardAction from './CardAction';
import CardText from './CardText';
import SinglePhoto from './SinglePhoto';

class Card extends Component {
    componentDidMount() {
        const { animation } = this.props;
        if(animation) {
            animation(this.ul);
        }
    }
    render() {
        const { data, index, commentOps } = this.props,
            html = [],
            photos = JSON.parse(data.photos);
        if(data.type === '1') {
            html.push(<li key="c1" className="mar-b"><SpeedDial photos={photos} /></li>);
            html.push(<CardText key="c2" text={data.text} />);
        }
        if(data.type === '2') {
            html.push(<li key="c1" className="mar-b title" data-tag="article" data-aid={data.articleId}>{data.text}</li>);
            html.push(<li key="c2" className="mar-b"><SinglePhoto photo={photos[0].src} aid={data.articleId} browser={false} tag="article" /></li>);
        }
        if(data.type === '3') {
            html.push(<li key="c1" className="mar-b title" data-tag="link" data-aid={data.articleId} data-link={data.link}>{data.text}</li>);
            html.push(<li key="c2" className="mar-b"><SinglePhoto photo={photos[0].src} aid={data.articleId} browser={false} tag="link" link={data.link} /></li>);
        }
        return (<ul
          ref={(c) => {
              this.ul = c;
          }}
          className="card-item"
          data-index={index}
        >
            <li className="mar-b">
                <CompHead profile={data.profile} nickname={data.nickname} userId={data.userId} subContent={data.createTime} />
            </li>
            {html}
            <li key="c3"><CardAction blogId={data.id} numOfLikes={data.numOfLikes} numOfComments={data.numOfComments} numOfForwards={data.numOfForwards} commentOps={commentOps} isLike={data.isLike} /></li>
        </ul>);
    }
}

Card.propTypes = {
    data: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    commentOps: PropTypes.string,
    animation: PropTypes.func
};

Card.defaultProps = {
    animation: null,
    commentOps: ''
};

export default Card;
