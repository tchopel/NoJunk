$(function () {
    $("#tabs").tabs();
    var windowHeight = jQuery(window).height() * .94;
    $('#slidr').css('min-height', windowHeight + 'px');
    //$('#slidr-home').css('max-Width', window.innerWidth + 'px');


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
        fade: false,
        keyboard: true,
        overflow: true,
        theme: 'white',
        timing: { 'linear': '1s ease-in' },
        touch: true,
        transition: 'linear'
    }).add('h', ['one', 'two', 'three','four', 'five', 'six', 'one']).start();

});

