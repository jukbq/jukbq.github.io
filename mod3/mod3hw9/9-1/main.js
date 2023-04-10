let first_block = document.querySelector('.first_block')
let second_block = document.querySelector('.second_block')
let scroll_down = document.querySelector('.scroll_down')
let slide_from_left = document.querySelector('.slide_from_left')
let hr = document.querySelector('hr')
let img = document.querySelector('img')
let scroll_up = document.querySelector('.scroll_up')
let img_margin = 1
let window_scroll = window.scrollY

window.addEventListener('scroll', function (e) {
    const slideLeftRect = slide_from_left.getBoundingClientRect();
    const hrRect = hr.getBoundingClientRect();
    const imgRect = img.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const initialMargin = 1;

    if (window.scrollY >= 120 && window.scrollY <= 400) {
        scroll_down.style.fontSize = `${window.scrollY / 5}px`
    }

    if (slideLeftRect.bottom <= windowHeight && slideLeftRect.top >= 0) {
        slide_from_left.style.marginLeft = `${window.scrollY / 15}px`
    }

    if (hrRect.bottom <= windowHeight && hrRect.top >= 0) {
        hr.style.width = `${window.scrollY / 2.3}px`
    }

    if (imgRect.bottom <= windowHeight && imgRect.top >= 0) {
        const currentScroll = window.scrollY;
        if (currentScroll > window_scroll) {
            img_margin += 5
        } else if (currentScroll < window_scroll) {
            img_margin -= 5
        }
        let marginRight = img_margin;
        img.style.marginRight = `${marginRight}px`;
        window_scroll = currentScroll
    }
})

scroll_down.addEventListener('click', function () {
    second_block.scrollIntoView({ behavior: 'smooth' })
})

scroll_up.addEventListener('click', function () {
    first_block.scrollIntoView({ behavior: 'smooth' })
}) 
