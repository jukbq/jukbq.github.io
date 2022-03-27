
let log = document.forms.name
//----------------------------Фіо і мило-------------------------------
log[0].addEventListener('blur', function () {
    if (this.value == "") {
        log[0].style.border = '1px solid red'
        log[0].style.background = 'rgba(201, 129, 129, 0.507)'
    }
    let fname = this.value
    document.getElementById('tfName').innerHTML = `${fname}`;

})
log[1].addEventListener('blur', function () {
    if (this.value == "") {
        log[1].style.border = '1px solid red'
        log[1].style.background = 'rgba(201, 129, 129, 0.507)'
    }
    let sname = this.value
    document.getElementById('tsName').innerHTML = `${sname}`

})
log[2].addEventListener('blur', function () {
    if (this.value == "") {
        log[2].style.border = '1px solid red'
        log[2].style.background = 'rgba(201, 129, 129, 0.507)'
    }
    let email = this.value
    document.getElementById('mail').innerHTML = `${email}`

})
//------------------------стать------------------------------
let sex = document.forms.sex
let img = document.getElementById('img')

sex[0].addEventListener('click', function () {
    img.style.backgroundImage = 'url("img/male.png")'
    img.style.backgroundSize = 'cover'
})
sex[1].addEventListener('click', function () {
    img.style.backgroundImage = 'url("img/female.png")'
    img.style.backgroundSize = 'cover'
})

//--------------------спеціальність---------------------------------
let prof = document.forms.prof
prof.sel.addEventListener('change', function () {
    let x = event.target.value
    document.getElementById('ask').innerHTML = `${x}`;
})

//--------------------відправка----------------------------------------

let ok = document.getElementById('ok')
let sub = document.querySelector('.sub')
let tfName = document.getElementById('tfName')
let tsName = document.getElementById('tsName')
let mail = document.getElementById('mail')
let sexImg = document.getElementById('img')
let ask = document.getElementById('ask')
ok.addEventListener('click', function () {
    if (tfName.textContent !== "" && tsName.textContent !== "" && mail.textContent !== "" && sexImg.baseURI !== "" && ask.textContent !== "") {
        sub.disabled = false
    }
})
sub.addEventListener('click', function(){
    document.getElementById('box').style.display = 'none'
    document.getElementById('tbox').style.display = 'block'
})

let out = document.getElementById('out')
out.addEventListener('click', function(){
    window.location.reload()
location.href
})