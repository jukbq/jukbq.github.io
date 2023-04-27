function getSum(num) {
    let sum = 0;
    return function (num) {
        sum += num;
        document.write(`<h2>${sum}</h2>`);
        return sum;
    }
}

let res = getSum();
res(5);
res(8);
res(21);
res(1);
res(-1);
res(10254);
