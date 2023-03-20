//Завдання 7
let a = -166;
let numb = '<ul>'
do {
    if (a >= -99) {
        numb += '<li>'
        numb += `<p>${a}</p>`
        numb += '</li>'
    }
    a = a * 2 + 200
} while (a <= 99)
numb += '</ul>'
document.write(`<div> ${numb} </div>`)