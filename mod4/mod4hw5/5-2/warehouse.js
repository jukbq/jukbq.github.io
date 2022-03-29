let balance = 1000;
let beer = 100;
let wine = 50;
let pepsi = 50;
let beerPrice = 21;
let winePrice = 68;
let pepsiPrice = 15;

function myBalance() {
    return `На рахунку: ${balance} грн.`
}

function stockBalance() {
    return `
    Залишок пива: ${beer} пл., <br>
    Залишок вмна: ${wine} пл. , <br>
    Залишок Pepsi: ${pepsi} пл.`
}
let bSumm = 0;
let wSumm = 0;
let pSumm = 0;

function sale(name, quantity) {

    if (quantity <= name) {
        if (name == 'beer') {
            beer -= quantity;
            balance += quantity * beerPrice;
            bSumm = quantity * beerPrice;
            return `Пиво: ${quantity} пл.`;

        }
        if (name == 'wine') {
            wine -= quantity;
            balance += quantity * winePrice;
            wSumm = quantity * winePrice;
            return `Вино: ${quantity} пл.`
        }
        if (name == 'pepsi') {
            pepsi -= quantity;
            balance += quantity * pepsiPrice;
            pSumm = quantity * pepsiPrice;
            return `Pepsi: ${quantity} пл.`
        }
    }
    return `Недостатня кількість`
}


function total() {
    let x = bSumm + wSumm + pSumm;
    return `Всього ${x} грн`
}

export { myBalance, stockBalance, sale, total }