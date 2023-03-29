let url = prompt("Введіть в поле адресу сайта");
let hp = url.split('http://');
let hs = url.split('https://');

if (hp.length > 1) {
    console.log(hp[1]);
    document.write(`<h1>${hp[1]}</h1>`);
} else if (hs.length > 1) {
    console.log(hs[1]);
    document.write(`<h1>${hs[1]}</h1>`);
} else {
    console.log('Адреса не має http:// или https://');
    document.write(`<h1>Адреса не має http:// или https://</h1>`);
}