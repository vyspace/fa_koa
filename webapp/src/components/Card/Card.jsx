'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CompHead from '../CompHead';
import SpeedDial from '../SpeedDial';
import CardAction from './CardAction';
import CardText from './CardText';
import SinglePhoto from '../SinglePhoto';

class Card extends Component {
    componentDidMount() {
        const { animation } = this.props;
        if(animation) {
            animation(this.ul);
        }
    }
    render() {
        const { data, cssStyle, index, commentOps, dataArr } = this.props;
        let html;
        if(data.typeId === 1) {
            html = (<ul
              ref={(c) => {
                  this.ul = c;
              }}
              className="card-item"
              style={cssStyle}
              data-index={index}
            >
                <li className="mar-b">
                    <CompHead profile={data.profile} nickname={data.nickname} dateTime={data.dateTime} />
                </li>
                <li className="mar-b">
                    <SpeedDial photos={data.photos} />
                </li>
                <CardText text={data.text} />
                <CardAction
                  numOfLikes={data.numOfLikes}
                  numOfComments={data.numOfComments}
                  numOfForwards={data.numOfForwards}
                  commentOps={commentOps}
                />
            </ul>);
        }
        if(data.typeId === 2) {
            html = (<ul
              ref={(c) => {
                  this.ul = c;
              }}
              className="card-item"
              style={cssStyle}
              data-index={index}
            >
                <li className="mar-b">
                    <CompHead profile={data.profile} nickname={data.nickname} dateTime={data.dateTime} />
                </li>
                <li className="mar-b title" data-tag="article" data-aid={data.articleId}>
                    {data.title}
                </li>
                <li className="mar-b"><SinglePhoto photo={data.photo} aid={data.articleId} browser={false} /></li>
                <CardAction numOfLikes={data.numOfLikes} numOfComments={data.numOfComments} numOfForwards={data.numOfForwards} commentOps={commentOps} />
            </ul>);
        }
        return html;
    }
}

Card.propTypes = {
    data: PropTypes.object.isRequired,
    cssStyle: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    commentOps: PropTypes.string,
    animation: PropTypes.func,
    dataArr: PropTypes.array
};

Card.defaultProps = {
    dataArr: [],
    animation: null,
    commentOps: ''
}

export default Card;
