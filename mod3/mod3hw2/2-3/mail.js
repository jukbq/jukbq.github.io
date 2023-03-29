let text = "Text html javascript html html html HTML css”"
let res = text.toLowerCase();
document.write(`<h1>${res.split('html').length -1}</h1>`);
console.log(res.split('html').length - 1);