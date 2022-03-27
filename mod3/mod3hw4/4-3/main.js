function getLength(arr) {

    let r = [];
    for (const key in arr) {
        r[r.length] = arr[key].length
    }
    return r;

}

let arr1 = getLength(['Ivan', 'Pavlo', 'Ira']);
let arr2 = getLength(['Oleksiy', 'Andriana']);

document.write(`<h1>${arr1}</h1></h1>`)
document.write(`<h1>${arr2}</h1></h1>`)