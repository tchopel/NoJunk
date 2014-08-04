
$('#imgDialog').dialog(
    {
        autoOpen: false,
        height: window.innerHeight,
        width: window.innerWidth,
        modal: true,
        resizable: true,
        closeText: 'close'
    });
$('#imgDiv').click(function () {
    $('#imgDialog').dialog('open');
});