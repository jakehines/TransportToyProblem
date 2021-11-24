$(function () {
    $('#editModal').modal({
        keyboard: true,
        backdrop: "static",
        show: false,

    }).on('show', function () { //subscribe to show method
        var getIdFromRow = $(click.target).closest('tr').data('id');

    });
});