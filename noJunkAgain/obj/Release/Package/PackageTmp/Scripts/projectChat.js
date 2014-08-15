$('#chatImgContainer img').click(function (e) {
    e.preventDefault();
    $img = $(this);
    $('#chatMainDiv').parent().css('z-index', -1);
    $('<img />', {
        'src': $img.parent().attr('href'),
        'class': 'Chatlarger',
        'z-index': 3
    }).css('box-shadow', '0 0 6px 4px #000000').load(function () {
        $(this)
            .appendTo('body')
            .position({
                "of": $('#chatImgContainer'),
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
                        "of": $('#chatImgContainer'),
                        "my": "center center",
                        "at": "center center",
                        "collision": "fit"
                    });
                }
            });
    });
});

$('body').on('click', '.Chatlarger', function () {
    $('.Chatlarger').fadeOut('slow', function () {
        $('.Chatlarger').remove();
        $('#chatMainDiv').parent().css('z-index', 1);
    });
});
