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

export function imageInsert(params) {
    if(!/^image/.test(params.file.type)) {
        alert('请添加图片文件！');
        return;
    }
    if(params.file.size > g.uploadSize) {
        alert('请添加小于2M的图片！');
        return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(params.file);
    reader.onload = function (f) {
        const data = f.target.result,
            imgObj = new Image();
        imgObj.src = data;
        setTimeout(() => {
            const img = {
                src: data,
                w: imgObj.width,
                h: imgObj.height,
                type: params.file.type
            };
            params.callback(img);
        }, 20);
    };
}