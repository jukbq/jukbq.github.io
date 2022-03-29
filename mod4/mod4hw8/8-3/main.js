let arr_1 = [1, 5, 22];
let arr_2 = [10, 533, -22];

function max_num(arr) {
    return document.write(`<h2>${Math.max.apply(null, arr)}</h2>`)
}
max_num(arr_1);
max_num(arr_2);