'use strict';
//login
(function($){
    var error = $('#error'),
        errId = error.val();
    $('[data-toggle="tooltip"]').tooltip({
        container: 'body',
        trigger: 'manual'
    })
    if(errId !== '') {
        var errObj = $('#'+errId);
        errObj.tooltip('show').one('focus', function() {
            errObj.tooltip('hide');
        });
    }

})(jQuery);
//home
(function($){
    var mainBody = $('#mainBody');
    mainBody.height(window.innerHeight-50);
    $(window).on('resize', function() {
        mainBody.height(window.innerHeight-50);
    })
})(jQuery);

