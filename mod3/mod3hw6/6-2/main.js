const box = document.getElementById('box');
const h1 = box.querySelector('h1');

box.addEventListener('mouseover', function () {
    box.style.background = 'yellow';
    h1.innerHTML = 'Хочеш знати який ?';
});

box.addEventListener('mousedown', function () {
    box.style.background = 'black';
    h1.innerHTML = 'А я тобі не скажу';
    h1.style.color = 'red';
});

box.addEventListener('mouseup', function () {
    box.style.background = 'yellow';
    h1.innerHTML = 'Хочеш знати який ?';
    h1.style.color = 'black';
});

box.addEventListener('mouseout', function () {
    box.style.background = '';
    h1.innerHTML = 'У мене є секрет';
    h1.style.color = 'black';
});
