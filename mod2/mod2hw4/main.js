let password = '1111'
let i = 5;
let ask = "Введіть пароль"
let a = 0
do {
    let pass = prompt(ask);
    if (pass == password) {
        a = 1;
    }
    i--;
    ask = "Пароль не вірний, залишилось спроб " + i
} while (i > 0 && a == 0)

if (a == 1) {
    document.write('<h1>Запрошуємо на сайт!</h1>');
} else {
    document.write('<h1>Будь ласка спробуйте пізніше!</h1>');
}