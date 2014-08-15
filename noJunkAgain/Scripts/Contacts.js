//<form action="#contact" id="contactform" name="contactform" method="POST">

//                    <label for="name" class="name">Name: </label><br />
//                    <input type="text" name="name" id="name" class="text " value="" style="opacity: 1;"> <br />

//                    <label for="email" class="Email">Email: </label><br />
//                    <input type="text" name="email" id="email" class="text " value="" style="opacity: 1;"><br />

//                    <label for="message" class="message">Message: </label><br />
//                    <textarea name="message" id="message" class="textarea " style="opacity: 0.800000011920929;"></textarea><br />

//                    <input id="sendButton" type="submit" name="submit" value="SEND" id="submit" class="button" style="color: rgb(180, 248, 247);"><br />
//                </form>

//$("#sendButton").click(function () {
//    $.post("demo_test_post.asp",
//    {
//        name: "Donald Duck",
//        city: "Duckburg"
//    },
//    function (data, status) {
//        alert("Data: " + data + "\nStatus: " + status);
//    });
//});

$("#contactform").on("submit", function (event) {
    event.preventDefault();
    var serializedForm = $("#contactform").serialize();
    $.post("/Home/Contact", serializedForm)
        .done(function (response) {

            if ($('#name').val() == '' || $('#name').val() == '' || $('#name').val() == '') {
                creatParagraph('Atleast one of the field is not filled');
            } else {
                $('#name').val('');
                $('#Email').val('');
                $('#message').val('');
                creatParagraph('Thank you for sending me message, i will get back to you as soon as i see the message')
            }
        })
        .fail(function (xhr, status, error) { 
            console.log(xhr + "   " + status + "    " + error);
    });
});

function creatParagraph(text) {
    $('<p></p>', {
        'class': 'contactlarger',
        'z-index': 3
    }).css({
        'box-shadow': 'darkblue',
        'background-color': '#29446E',
        'color': 'white',
        'class': 'contactlarger'
    }).addClass('contactlarger')
      .text(text)
      .appendTo('body')
      .position({
          "of": '#contactform',
          "my": "center center",
          "at": "center center",
          "collision": "fit"
      })
       .animate({
           width: 600
       },
       {
           'duration': 1000,
           'easing': 'easeOutQuad',
           'step': function (i) {
               $(this).position({
                   "of": '#contactform',
                   "my": "center center",
                   "at": "center center",
                   "collision": "fit"
               });
           }
       });
    setTimeout(function () {
        $('.contactlarger').fadeOut('slow', function () {
            $('.contactlarger').remove();
        });
    }, 4000);
}

