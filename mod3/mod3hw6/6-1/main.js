let box = document.getElementById('box');

let mouseOut = 0;

document.querySelector('#box').addEventListener('mouseover', function (event) {
    if (mouseOut === 0) {
        event.target.style.backgroundColor = 'red';
    }
    if (mouseOut === 1) {
        event.target.style.backgroundColor = 'yellow';
    }
    if (mouseOut === 2) {
        event.target.style.backgroundColor = 'green';
    }
});

box.addEventListener('mouseout', function () {
    box.style.backgroundColor = 'purple';
    if (mouseOut < 2) {
        mouseOut += 1;
    } else if (mouseOut === 2) {
        mouseOut -= 2;
    }
});
