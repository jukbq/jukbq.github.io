//Завдання 5
let a = 2;
let b = 20;
let x = 1

let numb = '<ul>'
for (let i = 1; i <= b; i++) {
    numb += '<li>'
    numb += `<p>${ x *= a}</p>`
    numb += '</li>'

}

numb += '</ul>'
document.write(`<div> ${numb} </div>`)