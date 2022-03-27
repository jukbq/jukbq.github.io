window.addEventListener('keydown', function (event) {
    let push = event.code
    console.log(event)
    let key = document.getElementsByTagName('li')
    let alt = event.altKey
    for (const i of key) {
        if (i.className == push) {
            i.style.backgroundColor = '#411111'
            i.style.boxShadow = 'none'
        }
    }

})

window.addEventListener('keyup', function (event) {
    let push = event.code
    let key = document.getElementsByTagName('li')
    let x = ""
    for (const i of key) {
        if (i.className == push) {
            i.style.backgroundColor = 'rgb(190, 12, 12)'
            i.style.boxShadow = '2px 2px 3px  rgb(187, 16, 16)'
        }
    }
})
