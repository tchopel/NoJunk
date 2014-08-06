
$('#imgDiv img').click(function () {
    $img = $(this);
    $('#bellContainer').parent().css('z-index', -1);
    $('<img />', {
        'src': $img.attr('src'),
        'class': 'larger',
        'z-index': 3
    }).load(function () {
        $(this)
            .appendTo('body')
            .position({
                "of": '#bellContainer',
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
                        "of": '#bellContainer',
                        "my": "center center",
                        "at": "center center",
                        "collision": "fit"
                    });
                }
            });
    });
});

$('body').on('click', '.larger', function () {
    $('.larger').fadeOut('slow', function () {
        $('.larger').remove();
        $('#bellContainer').parent().css('z-index', 1);
    });
});


$("#bellAccordion").accordion();




//$('#imgDialog').dialog(
//    {
//        autoOpen: false,
//        height: window.innerHeight/1.5,
//        width: window.innerWidth/1.5,
//        modal: true,
//        resizable: true,
//        closeText: 'close'
//    });



//$('#imgDiv').click(function () {
//    $('#imgDialog').dialog('open');
//});