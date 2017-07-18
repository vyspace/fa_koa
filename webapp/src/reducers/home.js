'use strict';

import { GET } from '../actions/home';

const data = [
    {
        id: 1,
        profile: '',
        nickname: '中华小当家',
        dateTime: '20小时前',
        photos: [
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
        ],
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
        photos: [
            {
                src: './img/test.jpg',
                w: 740,
                h: 1077
            }, {
                src: './img/test.jpg',
                w: 740,
                h: 1077
            }],
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
        photos: [
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
        ],
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
        photos: [
            {
                src: './img/test.jpg',
                w: 740,
                h: 1077
            }, {
                src: './img/test.jpg',
                w: 740,
                h: 1077
            }],
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
