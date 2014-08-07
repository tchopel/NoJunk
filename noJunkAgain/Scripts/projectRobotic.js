$(function () {
    function left(element, using) {
        element.position({
            "my": "right middle",
            "at": "left+45 middle",
            "of": "#container",
            "collision": "none",
            using: using
        });
    }
    function right(element, using) {
        element.position({
            'my': "left middle",
            'at': "right-45 middle",
            'of': "#container",
            'collision': "none",
            'using': using
        });
    }
    function center(element, using) {
        element.position({
            'my': "center middle",
            'at': "center middle",
            'of': "#container",
            'using': using
        });
    }
    alert('length :' + $("#roboticContainer img:eq(1)").length);
    left($("#roboticContainer img:eq(1)"));
    center($("#roboticContainer img:eq(1)"));
    right($("#roboticContainer img:eq(2)"));

    function animate(to) {
        $(this).animate(to);
        console.log(to);
    }
    function next(event) {
        event.preventDefault();
        center($("#roboticContainer img:eq(2)"), animate);
        left($("#roboticContainer img:eq(1)"), animate);
        right($("#roboticContainer img:eq(0)").appendTo("#roboticContainer"));
    }
    function previous(event) {
        event.preventDefault();
        center($("#roboticContainer img:eq(0)"), animate);
        right($("#roboticContainer img:eq(1)"), animate);
        left($("#roboticContainer img:eq(2)").prependTo("#roboticContainer"));
    }
    $("#previous").click(previous);
    $("#next").click(next);

    $("#roboticContainer img").click(function (event) {
        $("#roboticContainer img").index(this) === 0 ? previous(event) : next(event);
    });

    $(window).resize(function () {
        left($("#roboticContainer img:eq(0)"), animate);
        center($("#roboticContainer img:eq(1)"), animate);
        right($("#roboticContainer img:eq(2)"), animate);
    });
});
