let cont = document.move
let ph = document.forms.ph[0]

console.log(ph)

cont.butt.addEventListener('click', function () {
    let leftText = cont.leftText.value
    if (leftText != "") {
        cont.rightText.value = `${leftText}`
    }
    cont.leftText.value = '';
    console.log(leftText)
})

ph.addEventListener('focus', function () {
    let text = ph.value
    ph.placeholder = `${text}`

    if (ph.addEventListener = 'blur') {
        ph.value = ''
    }

})


