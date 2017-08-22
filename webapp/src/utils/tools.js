'use strict';

const g = window.FaKoa;

export function isMobileBrowser() {
    const ua = navigator.userAgent.toLowerCase();
    return /(iphone|ios|android|mini|mobile|mobi|Nokia|Symbian|iPod|iPad|Windows\s+Phone|MQQBrowser|wp7|wp8|UCBrowser7|UCWEB|360\s+Aphone\s+Browser|AppleWebKit)/i.test(ua);
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
