//Завдання 2


let numb_tab = '<ul>';
for (let i = 1000; i <= 9999; i += 3) {
    numb_tab += '<li>'
    numb_tab += `<p>${i}</p>`
    numb_tab += '</li>'

};
numb_tab += '</ul>'

document.write(`<div class="numb_list">${numb_tab}</div>`);