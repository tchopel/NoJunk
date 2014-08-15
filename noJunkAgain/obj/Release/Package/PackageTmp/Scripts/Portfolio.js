/// <reference path="../Views/Home/_projectBell.cshtml" />

$(function () {

    fixDimensions();

    urlArry = ['/Home/projectBell', '/Home/projectRobotic', '/Home/projectChat']; //need to make this global variable
    currentIndex = 0;
    bindClickForslide();


});


function bindClickForslide() {
    $('#leftNav span').click(function () {

        if (currentIndex == 0) {
            currentIndex = 2;
            var url = urlArry[currentIndex];
        } else
        {
            currentIndex--;
            var url = urlArry[currentIndex];
        }

        $("#centerColumn").hide(0).delay(0).toggle('slide', {
            direction: 'left'
        }, 500);
        
        $("#centerColumn").load(url, function (responseText, statusText, xhr) {
            if (statusText == "success")
                fixDimensions();
            if (statusText == "error")
                alert("An error occurred: " + xhr.status + " - " + xhr.statusText);
        });
        //setTimeout(function () { fixDimensions() }, 100);
    });


    $('#rightNav span').click(function () {

        if (currentIndex == 2) {
            currentIndex = 0;
            var url = urlArry[currentIndex];
        } else {
            currentIndex++;
            var url = urlArry[currentIndex];
        }

        $("#centerColumn").slideRight("slow").load(url, function (responseText, statusText, xhr) {
            $(this).animate({ 'left': 'show' });
            if (statusText == "success")
                fixDimensions();
            if (statusText == "error")
                alert("An error occurred: " + xhr.status + " - " + xhr.statusText);
        });

        //$("#centerColumn").load(url, function (responseText, statusText, xhr) {
        //    if (statusText == "success")
        //        fixDimensions();
        //    if (statusText == "error")
        //        alert("An error occurred: " + xhr.status + " - " + xhr.statusText);
        //});
        //setTimeout(function () { fixDimensions() }, 100);
    });
}

function fixDimensions() {

    var tabContainerId = $('#bootStrapContainer').parent().attr('id');
    var absolutedContainerHeight = $('#bootStrapContainer').height();
    var marginOfAbsolutedContainerHeight = $('#bootStrapContainer').css('margin-top');
    var totalHeight = parseFloat(absolutedContainerHeight) + parseFloat(marginOfAbsolutedContainerHeight);
    var heightOfTabContainer = $('#' + tabContainerId).height();

    //console.log("tabContainerHeight : " + heightOfTabContainer);

    if (heightOfTabContainer < totalHeight)
        $('#' + tabContainerId).height(totalHeight);

    $('#leftNav span, #rightNav span').css({
        position: "relative",
        top: parseFloat(absolutedContainerHeight) / 2 + "px"
    });

    //console.log("tabcontainerId : " + tabContainerId);
    //console.log("absolutedContainerHeight : " + absolutedContainerHeight);
    //console.log("marginOfABsolutedContainerHeight : " + marginOfAbsolutedContainerHeight);
    //console.log("totalHeight : " + totalHeight);
    //console.log("span top : " + parseFloat(marginOfAbsolutedContainerHeight) / 2);
}
 
function loadSlideDiv(id) {
    $.ajax({
        url: "~/Views/Shared/projectRobot.cshtml",
        cache: true
    })
  .done(function (html) {
      $(id).append(html);
  });
}

    //$(document).keydown(function (e) {
    //    switch (e.which) {
    //        case 37: // left
    //            alert("left pressed");
    //            break;

    //        case 38: // up
    //            alert("up pressed");
    //            break;

    //        case 39: // right
    //            alert("right pressed");
    //            break;

    //        case 40: // down
    //            alert("down pressed");
    //            break;

    //        default: return; // exit this handler for other keys
    //    }
    //    e.preventDefault(); // prevent the default action (scroll / move caret)
//});