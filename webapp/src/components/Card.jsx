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
            html = [];
        if(data.typeId === 1) {
            html.push(<li key="c1" className="mar-b"><SpeedDial photos={data.photos} /></li>);
            html.push(<CardText key="c2" text={data.text} />);
            html.push(<CardAction
              key="c3"
              numOfLikes={data.numOfLikes}
              numOfComments={data.numOfComments}
              numOfForwards={data.numOfForwards}
              commentOps={commentOps}
            />);
        }
        if(data.typeId === 2) {
            html.push(<li key="c1" className="mar-b title" data-tag="article" data-aid={data.articleId}>{data.title}</li>);
            html.push(<li key="c2" className="mar-b"><SinglePhoto photo={data.photo} aid={data.articleId} browser={false} tag="article" /></li>);
            html.push(<CardAction key="c3" numOfLikes={data.numOfLikes} numOfComments={data.numOfComments} numOfForwards={data.numOfForwards} commentOps={commentOps} />);
        }
        if(data.typeId === 3) {
            html.push(<li key="c1" className="mar-b title" data-tag="link" data-aid={data.articleId} data-link={data.link}>{data.title}</li>);
            html.push(<li key="c2" className="mar-b"><SinglePhoto photo={data.photo} aid={data.articleId} browser={false} tag="link" link={data.link} /></li>);
            html.push(<CardAction key="c3" numOfLikes={data.numOfLikes} numOfComments={data.numOfComments} numOfForwards={data.numOfForwards} commentOps={commentOps} />);
        }
        return (<ul
          ref={(c) => {
              this.ul = c;
          }}
          className="card-item"
          data-index={index}
        >
            <li className="mar-b">
                <CompHead profile={data.profile} nickname={data.nickname} dateTime={data.dateTime} />
            </li>
            {html}
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
