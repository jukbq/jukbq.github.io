$(function () {
    let top;
    let left;

    $('.box').on('click', function () {
        if ($(this).hasClass('bigBox')) {
            $(this).stop().animate({
                width: '150px',
                height: '150px',
                top: top,
                left: left,
                marginTop: 0,
                marginLeft: 0,
            }, 1500, function () {
                $(this).removeClass('bigBox');
                $('.fon').css({
                    display: 'none',
                    zIndex: -1
                });
            });
        } else {
            let x = $(this).offset();
            top = x.top;
            left = x.left;

            $(this).addClass('bigBox');

            $('.fon').css({
                display: 'block',
                zIndex: 2
            });

            $(this).stop().animate({
                width: '500px',
                height: '500px',
                top: '50%',
                left: '50%',
                marginTop: '-250px',
                marginLeft: '-250px',
            }, 1500);
        }
    });
});
