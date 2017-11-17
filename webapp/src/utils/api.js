'use strict';

import request from './request';

const URL_ROOT = '' || `${location.protocol}//${location.host}`;
/**
 * 主页接口
 * @param obj uid用户ID，idx页号，rows截止第一次获取数据总数
 * @param resolve
 * @param reject
 */
export const getHomeData = (obj, resolve, reject) => {
    let paramStr = `idx=${obj.idx}`;
    if(obj.uid) {
        paramStr = `${paramStr}&uid=${obj.uid}`;
    }
    if(obj.rows) {
        paramStr = `${paramStr}&rows=${obj.rows}`;
    }
    const params = {
        url: `http://localhost:3000/openapi/home?${paramStr}`
    };
    request(params, resolve, reject);
};
/**
 * 点赞接口
 * @param obj uid用户ID，bid博客ID
 * @param resolve
 * @param reject
 */
export const postLikeData = (obj, resolve, reject) => {
    const params = {
        url: 'http://localhost:3000/openapi/like',
        method: 'POST',
        body: JSON.stringify(obj)
    };
    request(params, resolve, reject);
};
/**
 * 用户评论列表接口
 * @param obj 包含bid：blogId，idx：pageIndex
 * @param resolve
 * @param reject
 */
export const getCommentData = (obj, resolve, reject) => {
    const params = {
        url: `http://localhost:3000/openapi/comment?bid=${obj.bid}&idx=${obj.idx}`
    };
    request(params, resolve, reject);
};
/**
 * 用户发送评论
 * @param obj 包含bid：blogId，uid：UserId
 * @param resolve
 * @param reject
 */
export const postEditCommentData = (obj, resolve, reject) => {
    const params = {
        url: 'http://localhost:3000/openapi/editcomment',
        method: 'POST',
        body: JSON.stringify(obj)
    };
    request(params, resolve, reject);
};

export const getArticleData = (aid, resolve, reject) => {
    const params = {
        url: `${URL_ROOT}/testdata/article`
    };
    request(params, resolve, reject);
};

export const getReplyData = (uid, resolve, reject) => {
    const params = {
        url: `${URL_ROOT}/testdata/replylist`
    };
    request(params, resolve, reject);
};

export const getPhotoAlbumData = (uid, resolve, reject) => {
    const params = {
        url: `${URL_ROOT}/testdata/photoalbum`
    };
    request(params, resolve, reject);
};

export const getProfileAlbumData = (uid, resolve, reject) => {
    const params = {
        url: `${URL_ROOT}/testdata/profilealbum`
    };
    request(params, resolve, reject);
};

export const getFollowData = (uid, resolve, reject) => {
    const params = {
        url: `${URL_ROOT}/testdata/follow`
    };
    request(params, resolve, reject);
};

export const getShortUrl = (long, resolve, reject) => {
    const params = {
        url: `http://api.t.sina.com.cn/short_url/shorten.json?source=1052239900&url_long=${long}`
    };
    request(params, resolve, reject);
};

export const getMyHomeData = (uid, resolve, reject) => {
    const params = {
        url: `${URL_ROOT}/testdata/myhome`
    };
    request(params, resolve, reject);
};

export const postLoginData = (obj, resolve, reject) => {
    const params = {
        url: 'http://localhost:3000/openapi/login',
        method: 'POST',
        body: JSON.stringify(obj)
    };
    request(params, resolve, reject);
};

export const postRegisterData = (obj, resolve, reject) => {
    const params = {
        url: 'http://localhost:3000/openapi/register',
        method: 'POST',
        body: JSON.stringify(obj)
    };
    request(params, resolve, reject);
};

export const postRegFinishData = (obj, resolve, reject) => {
    const params = {
        url: 'http://localhost:3000/openapi/regfinish',
        method: 'POST',
        body: JSON.stringify(obj)
    };
    request(params, resolve, reject);
};

export const getMyInfoData = (uid, resolve, reject) => {
    const params = {
        url: `http://localhost:3000/openapi/myinfo?uid=${uid}`
    };
    request(params, resolve, reject);
};

