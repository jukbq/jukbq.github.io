let n = +prompt("кількість чисел");
let q = +prompt("знаменник ");
let b = 1;

let sumGeoProg = function() {
    let qn = 1;
    for (let i = 1; i <= n; i++) {
        qn *= q;;
    };
    let s = (b * qn - 1) / (q - 1);
    document.write(`<h3>${s}</h3>`);
};
sumGeoProg(sumGeoProg);