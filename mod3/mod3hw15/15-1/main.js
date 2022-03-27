$(document).ready(function() {

    $('.box').click(function() {
        $('.disp2').slideDown(40000)
            .slideUp(40000)
        $('.m2').delay(40000).hide(1)
        $('.m1').delay(40000).show(1)
    })

})