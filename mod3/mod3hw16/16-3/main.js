$(function () {
    $('.box').on('click', function () {
        let top;
        let left;
        let x = $(this).offset()
        top = x.top;
        left = x.left
        $(this).addClass('bigBox')
        $('.fon').css({
            backgroundColor: '#140707c9',
            zIndex: 2
        })
        $(this).animate({
            width: '300px',
            height: '300px',
            top: '90px',
            left: '410px'
        }, 1500)

        $('.bigBox').on('click', function () {
                $(this).animate({
                top: `${top}`,
                left: `${left}`,
                width: '150px',
                height: '150px',
            }, 1500, function () {
                $(this).removeClass('bigBox');
                $('.fon').css('backgroundColor', '#ffffff00')
                $('.fon').css('zIndex', '-1')
                
            })


        })
    })






})
