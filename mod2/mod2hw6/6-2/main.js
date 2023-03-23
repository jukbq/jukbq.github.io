//Завдання 6-2
let geoProg = function(n, q) {
    let summ = 0;
    let num = 1;
    for (let i = 0; i < n; i++) {
        summ += num
        num *= q
  }
    document.write(`<h3>${summ}</h3>`);
}

geoProg(+prompt("кількість чисел прогресії"), +prompt("Знаменник"));