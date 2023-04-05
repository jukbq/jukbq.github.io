let liColor = document.getElementById('color');

liColor.onclick = function () {
    if (event.target.tagName === 'LI') {
        let selectedColor = event.target.textContent;
        if (event.target.style.color !== selectedColor) {
            event.target.style.color = selectedColor;
        }
        console.log(selectedColor);
    }
};
