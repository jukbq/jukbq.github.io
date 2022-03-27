$(document).ready(function () {
    let r, g, b, t, l
    let DiscoBall = setInterval(function () {
        r = Math.round(Math.random() * 255)
        g = Math.round(Math.random() * 255)
        b = Math.round(Math.random() * 255)
        br = Math.round(Math.random() * 255)
        bg = Math.round(Math.random() * 255)
        bb = Math.round(Math.random() * 255)
        t = Math.round(Math.random() * 299)
        l = Math.round(Math.random() * 999)
        $('.circle').css('border', `3px solid rgb(${br}, ${bg}, ${bb})`)
        $('.circle').animate({
            top: `${t}px`,
            left: `${l}px`,
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
            boxShadow: `0 0 30px rgb(${r}, ${g}, ${b})`
        }, 1500)
    }, 1500)
})
