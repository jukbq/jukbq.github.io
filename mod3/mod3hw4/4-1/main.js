function arrCopy(arr) {
    let r = arr;
    return r;
};

let arr1 = arrCopy([1, 2, 3]);
let arr2 = arrCopy([1, 2, 3, [10, 20]]);

document.write(`<h1>${arr1}</h2>`)
document.write(`<h1>${arr2}</h2>`)