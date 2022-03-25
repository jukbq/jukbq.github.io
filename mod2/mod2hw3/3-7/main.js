//Завдання 7

let numb = '<ul>'
for (let a = -166; a <= 99; a = a * 2 + 200) {
    if (a >= -99) {
        numb += '<li>'
        numb += `<p>${a}</p>`
        numb += '</li>'
    }
}
numb += '</ul>'
document.write(`<div> ${numb} </div>`)