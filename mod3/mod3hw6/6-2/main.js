let box = document.getElementById('box');


box.onmouseover = function () {
    box.style.background = 'yellow';
    document.querySelector('h1').innerHTML = 'Хочеш знати який ?';
};
box.onmousedown = function () {
    box.style.background = ' black';
    document.querySelector('h1').innerHTML = 'А я тобі не скажу';
    document.querySelector('h1').style.color = 'red';
};
box.onmouseup = function () {
    box.style.background = 'yellow';
    document.querySelector('h1').innerHTML = 'Хочеш знати який ?';
    document.querySelector('h1').style.color = 'black'
};
box.onmouseout = function () {
    box.style.background = '';
    document.querySelector('h1').innerHTML = 'У мене є секрет';
};







