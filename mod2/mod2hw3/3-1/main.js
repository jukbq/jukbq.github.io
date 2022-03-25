//Завдання 1

let n = +prompt("Введіть ціле чмсло");
n = parseInt(n, 10);
f = 1;
for (let i = 1; i <= n; i++) {
    f *= i;

};
document.write(`<h1>Факторіал чмсла  ${n} = ${f} </h1>`);