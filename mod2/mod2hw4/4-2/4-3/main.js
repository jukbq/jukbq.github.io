//Завдання 3
let numb = '<ul>';
let i = 1;
do {
    numb += '<li>';
    numb += `<p>${i}</p>`;
    numb += '</li>';
    i += 2;
} while (i <= 110);
numb += '</ul>';

document.write(`<div> ${numb} </div>`);