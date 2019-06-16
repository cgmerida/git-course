$(document).ready(function () {
    $('#mycarousel').carousel({ interval: 1000 });

    // $('#carousel-pause').click(function() {
    // 	$('#mycarousel').carousel('pause');
    // });
    // $('#carousel-play').click(function () {
    // 	$('#mycarousel').carousel('cycle');
    // });

    $('#carousel-btn').click(function () {
        let value = $(this).hasClass('btn-danger');
        if (value) {
            $('#mycarousel').carousel('pause');
            $(this).removeClass('btn-danger').addClass('btn-success');
            $(this).empty().html(`<i class="fa fa-play"></i>`);
        } else {
            $('#mycarousel').carousel('cycle');
            $(this).removeClass('btn-success').addClass('btn-danger');
            $(this).empty().html(`<i class="fa fa-pause"></i>`);
        }
    });

    $('#reserve-btn').click(function () {
        $('#reserveModal').modal('toggle');
    });

    $('#login-btn').click(function () {
        $('#loginModal').modal('toggle');
    });
});