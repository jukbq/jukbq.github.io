    //Завдання 2
    let numb_tab = '<ul>';
    let i = 1000;
    while (i <= 9999) {
        numb_tab += '<li>'
        numb_tab += `<p>${i}</p>`
        numb_tab += '</li>'
        i += 3;
    };
    numb_tab += '</ul>'

    document.write(`<div class="numb_list">${numb_tab}</div>`);