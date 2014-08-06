
$('#imgDiv img').click(function () {
    $img = $(this);

    $('<img />', {
        'src': $img.attr('src'),
        'class': 'larger',
        'z-index': 0
    }).load(function () {
        $(this)
            .appendTo('body')
            .animate({
                width: 500
            },
            {
                'duration': 1500,
                'easing': 'easeOutQuad',
                'step': function (i) {
                    $(this).position({
                        "of": $img,
                        "my": "right top",
                        "at": "left bottom",
                        "collision": "fit"
                    });
                }
            });
    });
});

$('body').on('click', '.larger', function () {
    $el = $(this);
    $el.fadeOut('slow', function () {
        $el.remove();
    });
});





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