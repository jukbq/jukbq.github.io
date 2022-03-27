function arrToString(arr) {

    let r = arr.join('  ');
    return r;

};
const arr1 = arrToString([1, 2, 3]);
const arr2 = arrToString([10, 200, 3333]);


document.write(`<h1>${arr1}</h1>`)
document.write(`<h1>${arr2}</h1>`)
console.log(arr1);
console.log(arr2);