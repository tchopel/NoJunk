

$('#RoboticImgDiv img').click(function () {
    $img = $(this);
    $('#roboticContainer').parent().css('z-index', -1);
    $('<img />', {
        'src': $img.attr('src'),
        'class': 'RoboticLarger',
        'z-index': 3
    }).load(function () {
        $(this)
            .appendTo('body')
            .position({
                "of": $('#roboticContainer'),
                "my": "center center",
                "at": "center center",
                "collision": "fit"
            })
            .animate({
                width: 900
            },
            {
                'duration': 1000,
                'easing': 'easeOutQuad',
                'step': function (i) {
                    $(this).position({
                        "of": $('#roboticContainer'),
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
        $('#roboticContainer').parent().css('z-index', 1);
    });
});






























//$(window).load(function () {
//    function left(element, using) {
//        element.position({
//            "my": "right middle",
//            "at": "left+45 middle",
//            "of": $("#roboticSecondRow"),
//            "collision": "none",
//            using: using
//        });
//    }

//    function right(element, using) {
//        element.position({
//            'my': "left middle",
//            'at': "right-45 middle",
//            'of': $("#roboticSecondRow"),
//            'collision': "none",
//            'using': using
//        });
//    }
//    function center(element, using) {
//        element.position({
//            'my': "center middle",
//            'at': "center middle",
//            'of': $("#roboticSecondRow"),
//            'using': using
//        });
//    }
//    left($("#roboticContainer img:eq(0)"));
//    center($("#roboticContainer img:eq(1)"));
//    right($("#roboticContainer img:eq(2)"));

//    function animate(to) {
//        $(this).animate(to);
//        console.log(to);
//    }
//    function next(event) {
//        event.preventDefault();
//        center($("#roboticContainer img:eq(2)"), animate);
//        left($("#roboticContainer img:eq(1)"), animate);
//        right($("#roboticContainer img:eq(0)").appendTo("#roboticSecondRow"));
//    }
//    function previous(event) {
//        event.preventDefault();
//        center($("#roboticContainer img:eq(0)"), animate);
//        right($("#roboticContainer img:eq(1)"), animate);
//        left($("#roboticContainer img:eq(2)").prependTo("#roboticSecondRow"));
//    }
//    $("#previous").click(previous);
//    $("#next").click(next);

//    $("#roboticContainer img").click(function (event) {
//        $("#roboticContainer img").index(this) === 0 ? previous(event) : next(event);
//    });

//    $(window).resize(function () {
//        left($("#roboticContainer img:eq(0)"), animate);
//        center($("#roboticContainer img:eq(1)"), animate);
//        right($("#roboticContainer img:eq(2)"), animate);
//    });
//});
