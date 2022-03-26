let mail = prompt('Введіть email');
if (mail.indexOf('@') == -1) {
    document.write(`<h1>'Не віпна адреса'</h1>`)
} else if (
    mail.startsWith('@') ||
    mail.endsWith('@') == true) {
    document.write(`<h1>'Не віHна адреса'</h1>`);
} else
    document.write(`<h1>${mail}</h1>`)