
jQuery(document).ready(function () {
    $('#targetContainer').load('/Shared/projectRobot.cshtml');
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