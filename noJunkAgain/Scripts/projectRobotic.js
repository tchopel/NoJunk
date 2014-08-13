$('#findParent img').click(function () {
    $img = $(this);
    $('#findParent').parent().css('z-index', -1);
    $('<img />', {
        'src': $img.attr('src'),
        'class': 'RoboticLarger',
        'z-index': 3
    }).css('box-shadow', '0 0 6px 4px #000000').load(function () {
        $(this)
            .appendTo('body')
            .position({
                "of": $('#roboticImgContainer'),
                "my": "center center",
                "at": "center center",
                "collision": "fit"
            })
            .animate({
                width: 1000
            },
            {
                'duration': 1000,
                'easing': 'easeOutQuad',
                'step': function (i) {
                    $(this).position({
                        "of": $('#roboticImgContainer'),
                        "my": "center center",
                        "at": "center center",
                        "collision": "fit"
                    });
                }
            });
    });
});

$('body').on('click', '.RoboticLarger', function () {
    $('.RoboticLarger').fadeOut('slow', function () {
        $('.RoboticLarger').remove();
        $('#findParent').parent().css('z-index', 1);
    });
});

$('video').on('play', function () {
    this.playbackRate = 3.0;
});

$('video').on('seeked', function () {
    this.playbackRate = 3.0;
});
