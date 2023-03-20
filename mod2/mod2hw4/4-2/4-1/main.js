//Завдання 1
let n = +prompt("Введіть ціле число");
n = parseInt(n, 10);
let f = 1;
let i = 1;
while (i <= n) {
    f *= i;
    i++;
}
document.write(`<h1>Факторіал числа ${n} = ${f} </h1>`);