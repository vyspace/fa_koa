'use strict';

import { GET } from '../actions/home';

const data = [
    {
        id: 1,
        profile: '',
        nickname: '中华小当家',
        dateTime: '20小时前',
        photos: ['./img/t1.jpg', './img/t2.jpg', './img/t3.jpg', './img/t4.jpg', './img/t5.jpg', './img/t6.jpg'],
        numOfLikes: 200,
        numOfComments: 100,
        numOfForwards: 300,
        text: 'Christina Photo by @FransLanting Wonderful color ! To let tourists get a better view，the bus drove slowly.What a beautiful town, let tourists get a better view，the bus drove tourists get a better view，the bus drove'
    },
    {
        id: 2,
        profile: './img/profile.jpg',
        nickname: '魔鬼终结者',
        dateTime: '23小时前',
        photos: ['./img/test.jpg', './img/test.jpg'],
        numOfLikes: 230,
        numOfComments: 102,
        numOfForwards: 200,
        text: '全局（公有）配置，bash shell执行时，不管是何种方式，都会读取此文件。'
    },
    {
        id: 3,
        profile: '',
        nickname: '中华小当家',
        dateTime: '20小时前',
        photos: ['./img/t1.jpg', './img/t2.jpg', './img/t3.jpg', './img/t4.jpg', './img/t5.jpg', './img/t6.jpg'],
        numOfLikes: 200,
        numOfComments: 100,
        numOfForwards: 300,
        text: 'Christina Photo by @FransLanting Wonderful color ! To let tourists get a better view，the bus drove slowly.What a beautiful town, let tourists get a better view，the bus drove tourists get a better view，the bus drove'
    },
    {
        id: 4,
        profile: './img/profile.jpg',
        nickname: '魔鬼终结者',
        dateTime: '23小时前',
        photos: ['./img/test.jpg', './img/test.jpg'],
        numOfLikes: 230,
        numOfComments: 102,
        numOfForwards: 200,
        text: '全局（公有）配置，bash shell执行时，不管是何种方式，都会读取此文件。'
    }
];

export default function home(state = data, action) {
    switch(action.type) {
    case GET:
        return data;
    default:
        return state;
    }
}
