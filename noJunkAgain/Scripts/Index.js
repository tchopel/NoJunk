$(function () {
    $("#tabs").tabs();
    var windowHeight = jQuery(window).height() * .94;
    var windowWidth = jQuery(window).width();
    $('#slidr').css('min-height', windowHeight + 'px');
    $('#tabs').css('min-width', windowWidth + 'px');
    //$('#slidr-home').css('max-Width', window.innerWidth + 'px');
    $('#javaScriptAppRepo').css('min-height', windowHeight + 'px');


    slidr.create('slidr-home', {
        after: function (e) {
            if (e.in.slidr == 'two') {
                $('#imgDiv').hover(function () {
                    $(this).css('cursor', 'pointer');
                });
            }
        },
        before: function (e) { console.log('out: ' + e.out.slidr); },
        breadcrumbs: true,
        controls: 'border',
        direction: 'horizontal',
        fade: true,
        keyboard: true,
        overflow: true,
        theme: 'green',
        timing: { 'linear': '1s ease-in' },
        touch: true,
        transition: 'linear'
    }).add('h', ['one', 'two', 'three','four', 'one']).start();

});

