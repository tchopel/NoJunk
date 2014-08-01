/// <reference path="../Views/Home/_projectBell.cshtml" />

jQuery(document).ready(function () {
    
    //$("#targetContainer").load("", function () {

    //    alert("Load was performed.");

    //});
})

function loadSlideDiv(id) {
    $.ajax({
        url: "~/Views/Shared/projectRobot.cshtml",
        cache: true
    })
  .done(function (html) {
      $(id).append(html);
  });
}