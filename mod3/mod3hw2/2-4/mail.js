let url = prompt("Повна адреса сайту")

let hp = url.split('http://')
document.write(`<h1>${hp[1]}<h1>`)
let hs = url.split('https://')
document.write(`<h1>${hs[1]}<h1>`)