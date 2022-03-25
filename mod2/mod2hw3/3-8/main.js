//Завдання 8

let a = +prompt('Введіть число');
let b = +prompt('Введіть степінь');
let x = 1;

if (b < 0) {
    for (let i = b; i < 0; i++) {
        x /= a;
    }
} else {
    for (let i = 1; i <= b; i++) {
        x *= a;
    }
}

document.write(`<h1>${x}</h1>`)