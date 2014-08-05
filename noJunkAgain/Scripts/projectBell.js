
$('#imgDialog').dialog(
    {
        autoOpen: false,
        height: window.innerHeight/1.5,
        width: window.innerWidth/1.5,
        modal: true,
        resizable: true,
        closeText: 'close'
    });



$('#imgDiv').click(function () {
    $('#imgDialog').dialog('open');
});