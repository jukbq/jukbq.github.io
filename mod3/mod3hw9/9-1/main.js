let x = document.querySelector('.x')
let sd = document.querySelector('.sd')
let su = document.querySelector('.su')
let sfl = document.querySelector('.sfl')
let img = document.querySelector('img')
let hr = document.querySelector('hr')

window.addEventListener('scroll', function (e) {
    if (window.scrollY >= 120 && window.scrollY <= 400) {
        sd.style.fontSize = `${window.scrollY / 5}px`
    }

    if (window.scrollY >= 300 && window.scrollY <= 330) {
        sfl.style.marginLeft = `${window.scrollY / 3}px`
    }
    if (window.scrollY >= 350 && window.scrollY <= 700) {
        hr.style.width = `${window.scrollY / 2.3}px`
    }
    if (window.scrollY >= 500 && window.scrollY <= 1000) {
        img.style.marginRight = `${window.scrollY / 5}px`
    }

})
sd.addEventListener('click', function () {
    sfl.scrollIntoView({ behavior: 'smooth' })
})
su.addEventListener('click', function () {
    x.scrollIntoView({ behavior: 'smooth' })
})





