let fname = document.querySelector('.fname')
let lname = document.querySelector('.lname')
let email = document.querySelector('.email')
let pass = document.querySelector('.pass')

/*----------------Перевірка імені --------------------*/
let fsnameTest = /^[A-Za-z]{2,20}$/;
fname.addEventListener('input', function () {
    let fnameInp = fsnameTest.test(this.value)
    if (fnameInp) {
        this.style.border = '1px solid green'
        this.style.boxShadow = '0 0 10px rgb(54, 102, 243)'
    } else {
        this.style.border = '1px solid red'
        this.style.boxShadow = '0 0 10px  rgb(243, 75, 75)'
    }
})
fname.addEventListener('blur', function () {
    let fnameInp = fsnameTest.test(this.value)
    if (fnameInp) {
        this.style.boxShadow = 'none'
    }

})
/*----------------Перевірка прізвищя-------------*/
lname.addEventListener('input', function () {
    let lnameInp = fsnameTest.test(this.value)
    if (lnameInp) {
        this.style.border = '1px solid green'
        this.style.boxShadow = '0 0 10px rgb(54, 102, 243)'
    } else {
        this.style.border = '1px solid red'
        this.style.boxShadow = '0 0 10px  rgb(243, 75, 75)'
    }
})
lname.addEventListener('blur', function () {
    let fnameInp = fsnameTest.test(this.value)
    if (fnameInp) {
        this.style.boxShadow = 'none'
    }
})

/*----------------Перевірка пошти-------------*/
let emailTest = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
email.addEventListener('input', function () {
    let emailInp = emailTest.test(this.value)
    if (emailInp) {
        this.style.border = '1px solid green'
        this.style.boxShadow = '0 0 10px rgb(54, 102, 243)'
    } else {
        this.style.border = '1px solid red'
        this.style.boxShadow = '0 0 10px  rgb(243, 75, 75)'
    }
})
email.addEventListener('blur', function () {
    let emailInp = emailTest.test(this.value)
    if (emailInp) {
        this.style.boxShadow = 'none'
    }
})

/*----------------Перевірка паролю-------------*/
let passTest = /^\w{8,15}$/;
pass.addEventListener('input', function () {
    let passInp = passTest.test(this.value)
    if (passInp) {
        this.style.border = '1px solid green'
        this.style.boxShadow = '0 0 10px rgb(54, 102, 243)'
    } else {
        this.style.border = '1px solid red'
        this.style.boxShadow = '0 0 10px  rgb(243, 75, 75)'
    }
})
pass.addEventListener('blur', function () {
    let passInp = passTest.test(this.value)
    if (passInp) {
        this.style.boxShadow = 'none'
    }
})
/*----------------Активація-------------*/
let ok = document.getElementById('ok')
let sub = document.querySelector('.sub')
let se = document.querySelector('.se')
ok.addEventListener('click', function () {
    let fnameInp = fsnameTest.test(fname.value)
    let lnameInp = fsnameTest.test(lname.value)
    let emailInp = emailTest.test(email.value)
    let passInp = passTest.test(pass.value)
    if (fnameInp && lnameInp && emailInp && passInp) {
        sub.disabled = false
        console.log('yes');
        console.log(emailInp);
    } else {
        ok.checked = false
        console.log('no');
        console.log(emailInp);
    }
})
let signup = document.querySelector('.signup')
sub.addEventListener('click', function () {
    console.log('hi');
    signup.style.display = 'block'
})
se.addEventListener('click', function () {
    window.location.reload()
})