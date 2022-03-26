let n = +prompt("кількість чисел");
let q = +prompt("знаменник");

let geoProg = function() {
    let b = 1;
    let y = 0;
    for (let i = 1; i <= n; i++) {
        let x = b * q;
        y = y + b;
        b = x;
    }
    document.write(`<h3>${y}</h3>`);
}

geoProg();