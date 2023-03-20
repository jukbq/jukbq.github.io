//Завдання 8
let a = +prompt('Введіть число');
let b = +prompt('Введіть степінь');
let x = 1;

if (b < 0) {
    let i = b;
    do {
        x /= a;
        i++;
    } while (i < 0);
} else {
    let i = 1;
    do {
        x *= a;
        i++;
    } while (i <= b);
}

document.write(`<h1>${x}</h1>`);