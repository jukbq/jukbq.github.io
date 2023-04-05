function getLength(arr) {
    let lengthArr = [];
    for (let i = 0; i < arr.length; i++) {
        lengthArr.push(arr[i].length);
    }
    return lengthArr;
}

let arr1 = getLength(['Ivan', 'Pavlo', 'Ira']);
let arr2 = getLength(['Oleksiy', 'Andriana']);

document.write(`<h1>${arr1}</h1></h1>`)
document.write(`<h1>${arr2}</h1></h1>`)
console.log(arr1);
console.log(arr2);