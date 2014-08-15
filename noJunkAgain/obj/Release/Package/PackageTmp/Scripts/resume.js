
$("#myImg").load(function () {
    var imgWidth = $('#myImg').width();
    var imgDivContainerWidth = $('#forImgPadding').width();
    if (imgWidth != imgDivContainerWidth) {
        $('#forImgPadding').css('width', imgWidth);
    }
    console.log("div width:" + imgDivContainerWidth);
    console.log("img width:" + imgWidth);
});