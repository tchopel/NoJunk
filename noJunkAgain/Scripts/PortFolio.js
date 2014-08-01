/// <reference path="../Views/Home/_projectBell.cshtml" />

$(function () {
    
    //$("#targetContainer").load("", function () {

    //    alert("Load was performed.");

    //});

    var tabContainerId = $('#bootStrapContainer').parent().attr('id');
    var absolutedContainerHeight = $('#bootStrapContainer').height();
    var marginOfAbsolutedContainerHeight = $('#bootStrapContainer').css('margin-top');
    var totalHeight = parseFloat(absolutedContainerHeight) + parseFloat(marginOfAbsolutedContainerHeight);
    var heightOfTabContainer = $('#' + tabContainerId).height();

    console.log("tabContainerHeight : " + heightOfTabContainer);

    if(heightOfTabContainer<totalHeight)
        $('#'+tabContainerId).height(totalHeight);

    $('#leftNav span, #rightNav span').css({
        position: "relative",
        top: parseFloat(absolutedContainerHeight)/2 + "px"
    });
    
    console.log("tabcontainerId : " + tabContainerId);
    console.log("absolutedContainerHeight : " + absolutedContainerHeight);
    console.log("marginOfABsolutedContainerHeight : " + marginOfAbsolutedContainerHeight);
    console.log("totalHeight : " + totalHeight);
    console.log("span top : " + parseFloat(marginOfAbsolutedContainerHeight) / 2);

    $('#leftNav span, #rightNav span').click(function () {
        alert("span clicked");
    });

    $(document).keydown(function (e) {
        switch (e.which) {
            case 37: // left
                alert("left pressed");
                break;

            case 38: // up
                alert("up pressed");
                break;

            case 39: // right
                alert("right pressed");
                break;

            case 40: // down
                alert("down pressed");
                break;

            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });
});

function loadSlideDiv(id) {
    $.ajax({
        url: "~/Views/Shared/projectRobot.cshtml",
        cache: true
    })
  .done(function (html) {
      $(id).append(html);
  });
}