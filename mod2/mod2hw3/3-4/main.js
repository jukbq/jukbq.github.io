//Завдання 4


let numb = '<ul>'
for (let i = 90; i >= 0; i -= 5) {
    numb += '<li>'
    numb += `<p>${i}</p>`
    numb += '</li>'

}
numb += '</ul>'

document.write(`<div> ${numb} </div>`)