let text = prompt("Введіть текст");
let lett = prompt("Яку букву шукати");
document.write(`<h1>${text.split(lett).length -1}</h1>`);