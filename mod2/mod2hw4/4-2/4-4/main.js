//Завдання 4
let numb = '<ul>'
let i = 90;
while (i >= 0){
    numb += '<li>'
    numb += `<p>${i}</p>`
    numb += '</li>'
    i -= 5
}
numb += '</ul>'

document.write(`<div> ${numb} </div>`)