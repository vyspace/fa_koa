'use strict';

// login
(function ($) {
    const error = $('#error'),
        errId = error.val();
    $('[data-toggle="tooltip"]').tooltip({
        container: 'body',
        trigger: 'manual'
    });
    if(errId !== '') {
        const tag = '#',
            errObj = $(`${tag}errId`);
        errObj.tooltip('show').one('focus', () => {
            errObj.tooltip('hide');
        });
    }
})(jQuery);
// home
(function ($) {
    const mainBody = $('#mainBody');
    mainBody.height(window.innerHeight - 50);
    $(window).on('resize', () => {
        mainBody.height(window.innerHeight - 50);
    });
})(jQuery);

