$('#personalSiteMainDiv img').click(function (e) {
    e.preventDefault();
    $img = $(this);
    $('#personalSiteMainDiv').parent().css('z-index', -1);
    $('<img />', {
        'src': $img.attr('src'),
        'class': 'personalSiteLarger',
        'z-index': 3
    }).css('box-shadow', '0 0 6px 4px #000000').load(function () {
        $(this)
            .appendTo('body')
            .position({
                "of": $('#personalSiteMainDiv'),
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
                        "of": $('#personalSiteMainDiv'),
                        "my": "center center",
                        "at": "center center",
                        "collision": "fit"
                    });
                }
            });
    });
});

$('body').on('click', '.personalSiteLarger', function () {
    $('.personalSiteLarger').fadeOut('slow', function () {
        $('.personalSiteLarger').remove();
        $('#personalSiteMainDiv').parent().css('z-index', 1);
    });
});

$("#personalSiteAccordion").accordion();