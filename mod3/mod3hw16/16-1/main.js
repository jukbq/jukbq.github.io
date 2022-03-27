$(function () {
    let r, g, b, w, h, t, l
    $('.corcle').click(function () {
        r = Math.round(Math.random() * 255)
        g = Math.round(Math.random() * 255)
        b = Math.round(Math.random() * 255)
        w = Math.round(Math.random() * 199)
        h = Math.round(Math.random() * 199)
        t = Math.round(Math.random() * 299)
        l = Math.round(Math.random() * 999)
        console.log(r, g, b, w, h, t, l);
        $(this).css('background', `rgb(${r}, ${g}, ${b})`)
        $(this).animate({
            width: `${w}`,
            height: `${h}`,
            top: `${t}px`,
            left: `${l}px`
        }, 1000)
    });
})
