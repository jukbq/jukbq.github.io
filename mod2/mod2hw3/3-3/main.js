//Завдання 3

let numb = '<ul>'
for (let i = 1; i <= 55; i += 2) {
    numb += '<li>'
    numb += `<p>${i}</p>`
    numb += '</li>'
}
numb += '</ul>'

document.write(`<div> ${numb} </div>`)