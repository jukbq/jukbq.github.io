function arrCopy(arr) {

    const copіArr = [...arr];

    for (let i = 0; i < copіArr.length; i++) {
        if (Array.isArray(copіArr[i])) {
            copіArr[i] = arrCopy(copіArr[i]);
        }
    }

    return copіArr;
}


let arr1 = arrCopy([1, 2, 3]);
let arr2 = arrCopy([1, 2, 3, [10, 20]]);

document.write(`<h1>${arr1}</h2>`)
document.write(`<h1>${arr2}</h2>`)
console.log(arr1);
console.log(arr2);
