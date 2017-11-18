
$(document).ready(function() {
        $(document).on('click', '.showMore', function () {
            $('.showMore').text("Show less");
            $('.showMore').attr('class', 'showLess btn btn-info');
            $('.skills').animate({height: '1500px'}, "slow");
        });

        $(document).on('click', '.showLess', function () {
            //$('.moreSkills').css("visibility", "hidden");
            $('.showLess').text("Show more");
            $('.showLess').attr('class', 'showMore btn btn-info');
            $('.skills').animate({height: '420px'}, "slow");
        });
    });