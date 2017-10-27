'use strict';

const g = window.FaKoa;

export function isMobileBrowser() {
    const ua = navigator.userAgent.toLowerCase();
    return /(iphone|ios|android|mini|mobile|mobi|Nokia|Symbian|iPod|iPad|Windows\s+Phone|MQQBrowser|wp7|wp8|UCBrowser7|UCWEB|360\s+Aphone\s+Browser|AppleWebKit)/i.test(ua);
}

export function getScrollTop() {
    return document.documentElement.scrollTop || document.body.scrollTop;
}

export function setScrollTop(val) {
    document.documentElement.scrollTop = val;
    document.body.scrollTop = val;
}

export function pageRedirect(record, history) {
    let flag = false;
    if(!record) {
        flag = true;
        history.push('/');
    }
    else if(record.original === '') {
        flag = true;
        history.push('/');
    }
    return flag;
}

function fileDistinct(tagList, value) {
    let id;
    for(id in tagList) {
        if(tagList[id] === value) {
            return true;
        }
    }
    return false;
}

export function imageInsert(params, state) {
    const file = params.files[params.index];
    if(!file) {
        return;
    }
    const value = params.path + file.name;
    if(fileDistinct(state.tagList, value)) {
        alert('文件重复！');
        return;
    }
    if(!/^image/.test(file.type)) {
        alert('请添加图片文件！');
        return;
    }
    if(file.size > g.uploadSize) {
        alert('请添加小于2M的图片！');
        return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (f) {
        const data = f.target.result,
            imgObj = new Image();
        imgObj.src = data;
        setTimeout(() => {
            const img = {
                src: data,
                w: imgObj.width,
                h: imgObj.height,
                type: file.type,
                dir: value
            };
            params.callback(img);
            if(Object.keys(state.tagList).length < state.limit) {
                params.index += 1;
                imageInsert(params, state);
            }
        }, 20);
    };
}

export function isUrl(url) {
    const strRegex = '^((https|http)://)'
        + '(([0-9]{1,3}\.){3}[0-9]{1,3}' // IP形式的URL- 199.194.52.184
        + '|' // 允许IP和DOMAIN（域名）
        + "([0-9a-z_!~*'()-]+\.)*" // 域名- www.
        + '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.' // 二级域名
        + '[a-z]{2,6})' // first level domain- .com or .museum
        + '(:[0-9]{1,4})?' // 端口- :80
        + '((/?)|' // a slash isn't required if there is no file name
        + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
    const reg = new RegExp(strRegex);
    if (reg.test(url)) {
        return true;
    }
    else {
        return false;
    }
}

export function isMail(str) {
    return /^[A-Za-z0-9]+([-_.][A-Za-z0-9]+)*@([A-Za-z0-9]+[-.])+[A-Za-z0-9]{2,5}$/.test(str);
}

export function isPwd(str) {
    return /^[a-zA-z0-9]{6,20}$/.test(str);
}

export function getCompHeadUID(e) {
    const t = $(e.target);
    if(t.hasClass('comp-head')) {
        return t.data('uid');
    }
    else {
        const cHead = t.parents('.comp-head');
        return cHead.data('uid');
    }
}

export function levelHandler(level) {
    const str = level.toString();
    if(str.length < 2) {
        return 'icon icon-level level level-1';
    }
    else {
        return 'icon icon-level level level-2';
    }
}

