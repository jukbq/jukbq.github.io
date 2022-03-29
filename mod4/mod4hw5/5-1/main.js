function summ() {
    let x = 0;
    return function addition(number) {
        z = x
        x = x + number;
        document.write(`<h2>${z} + ${number} = ${x} </h2>`)

    }
}
let res = new summ;
res(5)
res(8)
res(21)
res(1)
res(-1)
res(10254)