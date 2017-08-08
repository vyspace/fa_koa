'use strict';

export function isMobileBrowser() {
    const ua = navigator.userAgent.toLowerCase();
    return /(iphone|ios|android|mini|mobile|mobi|Nokia|Symbian|iPod|iPad|Windows\s+Phone|MQQBrowser|wp7|wp8|UCBrowser7|UCWEB|360\s+Aphone\s+Browser|AppleWebKit)/i.test(ua);
}

