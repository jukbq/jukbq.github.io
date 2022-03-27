let liColor = document.getElementById('color');

liColor.onclick = function() {
    if (event.target.tagName) {
        let x = event.target.textContent;
        event.target.style.color = `${x}`;
        console.log(x);
    };
};