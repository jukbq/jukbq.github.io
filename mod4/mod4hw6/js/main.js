$(document).ready(function () {
    $('.signUpForm').addClass('active')

});

$('.signUp').click(function () {
    $('.signUpForm').removeClass('active')
    $('.signInForm').addClass('active')
});

$('.signIn').click(function () {
    $('.signUpForm').addClass('active')
    $('.signInForm').removeClass('active')
});

$('.person_card_btn').click(function () {
    $('.signInForm').addClass('active')
    $('.person_card').removeClass('active')
    $('input[name="mail"]').removeClass('is-invalid');
    $('input[name="pass"]').removeClass('is-invalid');
});


let personArr = [];
let person = {};


//флома реэстрації
$('.signUpBtn').click(function (e) {
    e.preventDefault();

    // перевірка валідації форми
    if ($('.signUpForm')[0].checkValidity() === false) {
        e.stopPropagation();
        $('.signUpForm').addClass('was-validated');
        return;
    }

    // перевірка чи є введений емейл в localStorage
    let email = $('input[name="email"]').val();
    if (localStorage.getItem('personArr') !== null) {
        personArr = JSON.parse(localStorage.getItem('personArr'));
        for (let i = 0; i < personArr.length; i++) {
            if (personArr[i].email === email) {
                $('input[name="email"]').val('');
                $('input[name="email"]').removeClass('is-invalid');
                $('input[name="email"]').addClass('is-invalid');
                return;
            }
        }
    }

    // додавання даних в person
    person.fname = $('input[name="fname"]').val();
    person.lname = $('input[name="lname"]').val();
    person.email = email;
    person.password = $('input[name="password"]').val();

    // додавання person в personArr та збереження в localStorage
    personArr.push(person);
    localStorage.setItem('personArr', JSON.stringify(personArr));

    // очищення полів форми та person
    $('input[name="fname"]').val('');
    $('input[name="lname"]').val('');
    $('input[name="email"]').val('');
    $('input[name="email"]').removeClass('is-invalid');
    $('input[name="password"]').val('');
    person = {};
    // очищення класу was-validated з форми
    $('.signUpForm').removeClass('was-validated');
});


//форма взоду

$('.signInBtn').click(function (e) {
    e.preventDefault();

    // перевірка валідації форми
    if ($('.signInForm')[0].checkValidity() === false) {
        e.stopPropagation();
        $('.signInForm').addClass('was-validated');
        return;
    }

    let email = $('input[name="mail"]').val();
    let password = $('input[name="pass"]').val();

    // перевірка наявності введеного email та password в localStorage
    if (localStorage.getItem('personArr') !== null) {
        let personArr = JSON.parse(localStorage.getItem('personArr'));
        for (let i = 0; i < personArr.length; i++) {
            if (personArr[i].email === email && personArr[i].password === password) {
                // очищення полів форми
                $('input[name="mail"]').val('');
                $('input[name="pass"]').val('');
                $('.signInForm').removeClass('active')
                $('.person_card').addClass('active')
                $('.person_name').text(personArr[i].fname + ' ' + personArr[i].lname);
                $('.person_email').text(personArr[i].email);
                return;
            }else{

            $('input[name="mail"]').addClass('is-invalid');
            $('input[name="pass"]').addClass('is-invalid');
            }
        }

    }

});

