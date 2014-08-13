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
            console.log(response);
        })
        .fail(function (xhr, status, error) { 
            console.log(xhr + "   " + status + "    " + error);
    });
});