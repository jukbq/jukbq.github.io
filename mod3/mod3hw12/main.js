/*------------------Завдання 1. forEach------------*/
let arr1 = [5, 6, 7, 8, 9, 15];
let summ = 0
arr1.forEach(function(e, i) {
    summ += +e
})
document.write(`<h1>${summ}</h1>`)


/*------------------Завдання 2. Map----------------*/
let arr2 = [5, 6, 7, 8, 9];

let square = arr2.map(e => Math.pow(e, 2));

document.write(`<h1>${square}</h1>`)


/*------------------ Завдання 3. Every--------------*/
let arr3 = [
    { name: 'Ivan', country: 'Ukraine' },
    { name: 'Petro', country: 'Ukraine' },
    { name: 'Miguel', country: 'Cuba' },

];
let csheck3 = arr3.every(i => i.country === 'Ukraine');

document.write(`<h1>${csheck3}</h1>`)



/*------------------Завдання 4. Some----------------*/
let arr4 = [
    { name: 'Ivan', country: 'Ukraine' },
    { name: 'Petro', country: 'Ukraine' },
    { name: 'Miguel', country: 'Cuba' },

];

let csheck4 = arr3.some(i => i.country === 'Cuba');

document.write(`<h1>${csheck4}</h1>`)



/*------------------Завдання 5. Filter-------------*/

let arr5 = [1, 'string', [3, 4], 5, [6, 7]];
let index = [2, 4]
const array2 = arr5.filter((e, i) => index.indexOf(i) > -1)

document.write(`<h1>${array2}</h1>`)


/*------------------Завдання 6. Reduce--------------*/

let arr6z1 = [1, 2, 5, 0, 4, 5, 6];

const sum = arr6z1.reduce((a, b) => {
    if (b == 0)
        a.stop = true;
    if (!a.stop)
        a.total += b;
    return a;
}, { stop: false, total: 0 }).total;

document.write(`<h1>${sum}</h1>`)

/*-------------------*/
let arr6z2 = [1, 2, 3, 0, 4, 5, 6];
const sum2 = arr6z2.reduce((a, b, x) => {
    if (a < 11)
        a += b
    return [x]
});


document.write(`<h1>${sum2}</h1>`)


/*----------- Завдання 7. Будь яким методом-----------*/

let arr7 = [1, -2, 3, 0, 4, -5, 6, -11, 23];

let rez7 = arr7.filter(function(e, i, arr) {
    if (e > 0) {
        document.write(`<h1>${Math.sqrt(e)}</h1>`)

    }
})