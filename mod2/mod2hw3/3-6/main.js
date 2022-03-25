//Завдання 6


let numb = '<ul>'
for (let a = 2; a < 10000; a = 2 * a - 1) {
    numb += '<li>'
    numb += `<p>${a}</p>`
    numb += '</li>'
}
numb += '</ul>'
document.write(`<div> ${numb} </div>`)