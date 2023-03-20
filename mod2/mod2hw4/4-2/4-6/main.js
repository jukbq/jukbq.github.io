//Завдання 6

let a = 2
let numb = '<ul>'
while (a < 10000) {
    numb += '<li>'
    numb += `<p>${a}</p>`
    numb += '</li>'
    a = 2 * a - 1
}
numb += '</ul>'
document.write(`<div> ${numb} </div>`)