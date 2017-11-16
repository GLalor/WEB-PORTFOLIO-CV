
$(document).ready(function() {
        $(document).on('click', '.showMore', function () {
            $('.moreSkills').css("visibility", "visible");
            $('.showMore').text("Show less");
            $('.showMore').attr('class', 'showLess btn btn-info');
            $('.skills').css('height', '690px')
        });

        $(document).on('click', '.showLess', function () {
            $('.moreSkills').css("visibility", "hidden");
            $('.showLess').text("Show more");
            $('.showLess').attr('class', 'showMore btn btn-info');
            $('.skills').css('height', '335px')
        });
    });