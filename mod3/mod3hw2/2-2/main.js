let mail = prompt('Введіть email');

if (
    mail.indexOf('@') == -1 || 
    mail.startsWith('@') || 
    mail.endsWith('@') == true) {
    document.write(`<h1>'Не вірна адреса'</h1>`)
} else
    document.write(`<h1>${mail}</h1>`)