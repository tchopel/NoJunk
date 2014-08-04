$(function () {
    $("#tabs").tabs();
    var windowHeight = jQuery(window).height() * .94;
    $('#a, #ui-tabs-2, #ui-tabs-3, #ui-tabs-4, #ui-tabs-5, #ui-tabs-6, #ui-tabs-1').css('min-height', windowHeight + 'px');
    $('#slidr').css('min-height', windowHeight + 'px');


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
        theme: 'white',
        timing: { 'cube': '1.5s ease-in' },
        touch: true,
        transition: 'cube'
    }).add('h', ['one', 'two', 'three','four', 'five', 'six', 'one']).start();


});

